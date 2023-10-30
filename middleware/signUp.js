const { firebaseApp } = require('../db');

const firestore = firebaseApp.firestore();

const signup = async (req, res, next) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      state: req.body.state,
      country: req.body.country
    };

    let token, userId;

    try {
        const doc = await firestore.collection('Users').where("email" , "==" , newUser.email).get();

        if(!doc.empty) {
            return res.status(403).json({
                status: "error",
                error: [{
                    path: "body.email",
                    message: "This email already exists"
                }]
            });
        } else {
            const data = await firebaseApp
                            .auth()
                            .createUserWithEmailAndPassword(newUser.email, newUser.password);
            
            userId = data.user.uid;
            const idToken = await data.user.getIdToken();
            token = String(idToken);
            
            const user = {
                uid: userId,
                email: newUser.email,
                name: `${newUser.firstName} ${newUser.lastName}`,
                state: newUser.state,
                country: newUser.country
            }

            await firestore
                    .collection('Users')
                    .doc(userId)
                    .set(user);

            req.token = token;
            req.user = user;
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong, please try again'
        })
    }
}

module.exports = signup;