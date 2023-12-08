const express = require('express');
const csrf = require('csurf');

const {
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
    getUserDetails,
    getCartItems,
    addToCart,
    removeFromCart,
    removeAllCart
} = require('../controllers/users');

const signUpSchema = require('../schema/signUpSchema');
const loginSchema = require('../schema/loginSchema');
const reviewSchema = require('../schema/reviewSchema');
const deleteReviewSchema = require('../schema/deleteReviewSchema');
const orderSchema = require('../schema/orderSchema');
const cancelOrderSchema = require('../schema/cancelOrderSchema');
const addToCartSchema = require('../schema/addToCartSchema');
const removeFromCartSchema = require('../schema/removeFromCartSchema');

const validateSchema = require('../middleware/validateSchema');

const login = require('../middleware/login')
const signUp = require('../middleware/signUp')
const verifySession = require('../middleware/verifySession');

const router = express.Router();

const expiresIn = 60 * 60 * 24 * 3 * 1000;

const csrfMiddleware = csrf({ 
    cookie: {
        httpOnly: true,
        maxAge: expiresIn
    }
});


router.post('/signup', validateSchema(signUpSchema), signUp, createSession);
router.post('/login', validateSchema(loginSchema), login, createSession);

router.use(csrfMiddleware);

router.get('/csrf', (req, res) => {
    return res.status(200).json({ csrfToken: req.csrfToken() });
});

router.post('/logout', clearSession);

router.get('/user', verifySession, getUserDetails);
router.get('/account', verifySession, getAccountSummary);

router.get('/cart', verifySession, getCartItems);
router.post('/addtocart', verifySession, validateSchema(addToCartSchema), addToCart);
router.post('/removefromcart', verifySession, validateSchema(removeFromCartSchema), removeFromCart);
router.post('/removeallcart', verifySession, removeAllCart);

router.get('/reviews', verifySession, getAllReviews);
router.post('/review', verifySession, validateSchema(reviewSchema), addReview);
router.post('/editreview', verifySession, validateSchema(reviewSchema), editReview);
router.post('/deletereview', verifySession, validateSchema(deleteReviewSchema), deleteReview);

router.post('/orders', verifySession, getAllOrders);
router.post('/addorder', verifySession, validateSchema(orderSchema), addOrder);
router.post('/cancelorder', verifySession, validateSchema(cancelOrderSchema), cancelOrder);

module.exports = {
    routes: router
}