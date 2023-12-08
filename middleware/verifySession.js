const { admin } = require('../db');

const verifySession = async (req, res, next) => {
  const sessionCookie = req.cookies.session || "";

  try {
    const userData =  await admin
                              .auth()
                              .verifySessionCookie(sessionCookie, true);
                              
    // console.log('verify session')
    // console.log('UserData of verify' ,userData);
    req.user = userData;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      status: 'ERROR',
      message: 'Unauthorized access'
    })
  }
}

module.exports = verifySession;