const { firebaseApp } = require('../db');

const firestore = firebaseApp.firestore();

const login = async (req, res, next) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };

    try {
        const data = await firebaseApp
                        .auth()
                        .signInWithEmailAndPassword(user.email, user.password);
        const uid = data.user.uid;
        const token = await data.user.getIdToken();

        const doc = await firestore.collection('Users').doc(uid).get();

        req.token = String(token);
        req.user = { uid: uid,...doc.data()};

        
        return next();

    } catch (e) {
        if (e.code === 'auth/wrong-password') {
            return res.status(401).json({ 
                status: 'ERROR',
                data: {
                    password: "Wrong password, please try again"
                }
            });

        } else if (e.code === 'auth/user-not-found') {
            return res.status(401).json({ 
                status: 'ERROR',
                message: 'User does not exists, please sign up'
            });
        }
        return res.status(500).json({ 
            status: 'ERROR',
            message: "Server error, please try again"
        });
    }
}

module.exports = login;