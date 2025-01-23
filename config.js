const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    ORIGIN_URL,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    SERVICE_PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'Port is required');

module.exports = {
    port: PORT,
    url: HOST_URL,
    origin: ORIGIN_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: SERVICE_PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}