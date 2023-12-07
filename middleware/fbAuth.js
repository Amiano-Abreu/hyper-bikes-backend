const { admin } = require('../db');

const fbAuth = async (req, res, next) => {
    let idToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {

      idToken = req.headers.authorization.split('Bearer ')[1];

      try {
        const decodedToken = await admin
                                    .auth()
                                    .verifyIdToken(idToken);

        req.user = decodedToken;
        return next();

      } catch (e) {
        if(e.code === "auth/id-token-expired") {
          return res.status(403).json({
            status: 'ERROR',
            message: 'Token expired, please login'
          })
        }

        console.error('Error while verifying token ', e);
        return res.status(403).json(e);
      }

    } else {
        return res.status(403).json({ 
            status: 'ERROR',
            message: 'Unauthorized access'
        });
    }
}

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

module.exports = {
  fbAuth,
  verifySession
};