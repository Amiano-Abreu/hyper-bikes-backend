const firebase = require('firebase');
const config = require('./config');
const serviceAccount = require('./serviceAccount');
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var firebaseApp = firebase.initializeApp(config.firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);


module.exports = {
    firebaseApp,
    admin
};