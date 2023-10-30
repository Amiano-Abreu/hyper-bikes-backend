const express = require('express');
const csrf = require('csurf');

const { 
    //signUp,
    //login,
    //logOut,
    createSession,
    clearSession,
    getAccountSummary,
    getAllReviews,
    getAllOrders,
    addReview,
    editReview,
    deleteReview,
    addOrder,
    cancelOrder,
    getUserDetails
} = require('../controllers/users');

const signUpSchema = require('../schema/signUpSchema');
const loginSchema = require('../schema/loginSchema');
const reviewSchema = require('../schema/reviewSchema');
const orderSchema = require('../schema/orderSchema');
const cancelOrderSchema = require('../schema/cancelOrderSchema');

const validateSchema = require('../middleware/validateSchema');
//const fbAuth = require('../middleware/fbAuth');
const login = require('../middleware/login')
const signUp = require('../middleware/signUp')
const {verifySession} = require('../middleware/fbAuth');

const router = express.Router();

const csrfMiddleware = csrf({ cookie: {
    httpOnly: true
} });

router.post('/logout', clearSession);


router.use(csrfMiddleware);

router.get('/csrf', (req, res) => {
    return res.status(200).json({ csrfToken: req.csrfToken() });
});

router.post('/signup', validateSchema(signUpSchema), signUp, createSession);
router.post('/login', validateSchema(loginSchema), login, createSession);

router.get('/account', verifySession, getAccountSummary);
router.get('/reviews', verifySession, getAllReviews);
router.get('/orders', verifySession, getAllOrders);

router.get('/user', verifySession, getUserDetails);

router.post('/review', verifySession, validateSchema(reviewSchema), addReview);
router.patch('/review', verifySession, validateSchema(reviewSchema), editReview);
router.delete('/review', verifySession, deleteReview);
router.post('/order', verifySession, validateSchema(orderSchema), addOrder);
router.delete('/order', verifySession, validateSchema(cancelOrderSchema), cancelOrder);

module.exports = {
    routes: router
}