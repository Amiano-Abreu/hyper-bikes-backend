const { firebaseApp, admin } = require('../db');

const firestore = firebaseApp.firestore();

// verified
const signUp = async (req, res) => {
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
        const doc = await firestore.collection('Users').where("email" , "==" , newUser.email);

        if(doc.exists) {
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
            token = idToken;
            
            const user = {
                email: newUser.email,
                name: `${newUser.firstName} ${newUser.lastName}`,
                state: newUser.state,
                country: newUser.country
            }

            await firestore
                    .collection('Users')
                    .doc(userId)
                    .set(user);

            return res.status(201).json({ 
                status: 'success',
                token,
                user
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong, please try again'
        })
    }
}  

// verified
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
        console.log('login: ' , uid);
        req.user = { uid: uid, ...doc.data() };

        return next();

    } catch (e) {
        if (e.code === 'auth/wrong-password') {
            return res.status(401).json({ 
                status: 'error',
                message: "Wrong password, please try again"
            });

        } else if (e.code === 'auth/user-not-found') {
            return res.status(401).json({ 
                status: 'error',
                message: 'User does not exists, please sign up'
            });
        }
        return res.status(500).json({ 
            status: 'error',
            message: "Server error, please try again"
        });
    }
}

const createSession = async (req, res) => {
    const idToken = req.token;

    const expiresIn = 60 * 60 * 24 * 3 * 1000;
        try {
            const sessionCookie = await admin
                                        .auth()
                                        .createSessionCookie(idToken, { expiresIn })
        
            const options = { maxAge: expiresIn, httpOnly: true };
            res.cookie("session", sessionCookie, options);
            
            await firebaseApp
                        .auth()
                        .signOut();
            

            console.log('Create Session')
            console.log('req.user ', req.user)
            console.log('req.token idToken', req.token)
            return res.status(200).json({
                status: "success",
                user: req.user
            });
    
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                status: 'error',
                message: 'Unauthorized access'
            })
        }
}

const getUserDetails = async (req, res) => {
    const uid = req.user.user_id;
    try {
        const doc = await firestore.collection('Users').doc(uid).get();
        return res.status(200).json({
            status: 'success',
            data: { uid: uid , ...doc.data() }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: 'error',
            message: "Server error, please try again"
        });
    }
}

const clearSession = async (req, res) => {
    const sessionCookie = req.cookies.session || '';
    res.clearCookie("session");
    try {
        console.log('clearSession sesh ', sessionCookie)
        const userData = await admin
                                .auth()
                                .verifySessionCookie(sessionCookie, true);

        console.log('clearSession user ', userData)

        await admin.revokeRefreshTokens(userData.sub);

        return res.status(200).json({
            status: 'success',
            message: 'Succesfully logged out user !'
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            status: 'error',
            message: 'Failed sign out !'
        })
    }
}

// verified
const logOut = async (req, res) => {
    try {
        await firebaseApp
                .auth()
                .signOut();

        return res.status(200).json({
            status: 'success',
            message: 'Successfully logged out'
        })

    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const getAccountSummary = async (req, res) => {
    const { uid } = req.user;
    let reviewArray = [];
    let orderArray = [];

    try {
        const reviewDocs = await firestore
                                    .collection('Reviews')
                                    .where("userID" , "==" , uid)
                                    .limit(2)
                                    .get();
        
        const orderDocs = await firestore
                                    .collection('Orders')
                                    .where("userID" , "==" , uid)
                                    .limit(2)
                                    .get();

        if(!reviewDocs.empty) {
            reviewDocs.forEach(doc => {

                const review = {
                    reviewID: doc.id,
                    ...doc.data()
                }

                reviewArray.push(review);
            })
        }

        if(!orderDocs.empty) {
            orderDocs.forEach(doc => {
                const order = {
                    orderID: doc.id,
                    ...doc.data()
                }
                orderArray.push(order);
            })
        }

        return res.status(200).json({
            status: 'success',
            reviews: reviewArray,
            orders: orderArray
        })

    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const getAllReviews = async (req, res) => {
    const { uid } = req.user;
    const reviewsArray = [];

    try {
        const reviewDocs = await firestore
                                    .collection('Reviews')
                                    .where("userID", "==", uid)
                                    .get();

        if(!reviewDocs.empty) {
            reviewDocs.forEach(doc => {
                const review = {
                    reviewID: doc.id,
                    ...doc.data()
                }

                reviewsArray.push(review);
            })
        }

        return res.status(200).json({
            status: 'success',
            reviews: reviewsArray
        })
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const getAllOrders = async (req, res) => {
    const { uid } = req.user;
    const ordersArray = [];

    try {
        const orderDocs = await firestore
                                    .collection('Orders')
                                    .where("userID", "==", uid)
                                    .get();

        if(!orderDocs.empty) {
            orderDocs.forEach(doc => {
                const order = {
                    orderID: doc.id,
                    ...doc.data()
                }

                ordersArray.push(order);
            })
        }

        return res.status(200).json({
            status: 'success',
            orders: ordersArray
        })
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const addReview = async (req, res) => {
    const { uid } = req.user;
    const review = {
        bikeID: req.body.bikeID,
        body: req.body.body,
        data: req.body.data,
        rating: req.body.rating,
        title: req.body.title,
        userID: uid,
        edited: false
    }

    const reviewRef = firestore
                        .collection('Reviews')
                        .where("userID" , "==", review.userID)
                        .where("bikeID", "==", review.bikeID);

    const user = firestore
                    .collection('Users')
                    .doc(uid)

    try {
        const prevReview = await reviewRef.get();
        
        let updateReview = {
            totalRating: 0,
            reviewCount: 0
        };

        review.createdAt = admin
                            .firestore
                            .Timestamp
                            .now()
                            .toDate()
                            .toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        
        if(prevReview.empty) {
            const userData = await user.get();
            const name = userData.data().name;
            review.name = name;
            await firestore
                    .collection('Reviews')
                    .add(review);

            const bike = await firestore
                                .collection('BikeDetails')
                                .doc(review.bikeID)
                                .get();

            const bikeData = {
                reviewCount: bike.data().reviewCount,
                totalRating: bike.data().totalRating
            };
            
            updateReview.reviewCount = bikeData.reviewCount + 1;
            updateReview.totalRating = bikeData.totalRating + review.rating;
            
            await firestore
                    .collection('BikeDetails')
                    .doc(review.bikeID)
                    .update({
                        ...updateReview
                    })

            return res.status(200).json({
                status: 'success',
                message: 'Review added successfully'
            })

        } else {
            return res.status(403).json({
                        status: 'error',
                        message: 'Bike is already reviewed by you'
                    });
                
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const editReview = async (req, res) => {
    const { uid } = req.user;
    const bikeID = req.body.bikeID;
    
    const review = {
        body: req.body.body,
        data: req.body.data,
        rating: req.body.rating,
        title: req.body.title,
        edited: true
    }

    const reviewRef = firestore
                        .collection('Reviews')
                        .where("userID" , "==", uid)
                        .where("bikeID", "==", bikeID);

    try {
        review.createdAt = admin
                            .firestore
                            .Timestamp
                            .now()
                            .toDate()
                            .toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

        const prevReview = await reviewRef.get();
        
        let totalRating;
        let prevData = {};

        if(!prevReview.empty) {

            prevReview.docs.forEach(doc => {
                prevData.id = doc.id
                prevData.rating = doc.data().rating;
            })
            
            await firestore
                    .collection('Reviews')
                    .doc(prevData.id)
                    .update({...review});

            const bike = await firestore
                                .collection('BikeDetails')
                                .doc(bikeID)
                                .get();

            const bikeData = {
                totalRating: bike.data().totalRating,
            };

            totalRating = bikeData.totalRating - prevData.rating + review.rating;
            
            await firestore
                    .collection('BikeDetails')
                    .doc(bikeID)
                    .update({
                        totalRating
                    })

            return res.status(200).json({
                status: 'success',
                message: 'Review edited successfully'
            })
        
        } else {
            return res.status(404).json({
                        status: 'error',
                        message: 'Review does not exists'
                    });
                
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const deleteReview = async (req, res) => {
    const { uid } = req.user;
    const bikeID = req.body.bikeID;

    const reviewRef = firestore
                        .collection('Reviews')
                        .where("userID" , "==", uid)
                        .where("bikeID", "==", bikeID);

    const bike = firestore
                    .collection('BikeDetails')
                    .doc(bikeID);

    let updateBike = {
        totalRating: 0,
        reviewCount: 0
    }
    let prevData = {};
    try {
        const prevReview = await reviewRef.get();

        if(!prevReview.empty) {
            prevReview.docs.forEach(doc => {
                prevData.id = doc.id;
                prevData.rating = doc.data().rating;
            })
            
            const bikeData = await bike.get();

            updateBike.totalRating = bikeData.data().totalRating - prevData.rating;
            updateBike.reviewCount = bikeData.data().reviewCount - 1;

            await bike
                    .update({
                        ...updateBike
                    });

            await firestore
                    .collection('Reviews')
                    .doc(prevData.id)
                    .delete();

            return res.status(200).json({
                status: 'success',
                message: 'Successfully deleted review'
            })
        } else {
            return res.status(404).json({
                status: 'error',
                message: 'Review does not exists'
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const addOrder = async (req, res) => {
    const { uid } = req.user;

    const orderDetails = {
        userID: uid,
        products: req.body.products,
        total: req.body.total
    }

    const orders = {
        userID: uid
    };
    let products = [];

    try {
        orderDetails.products.forEach(product => {
            products.push(product.bikeModel);
        })

        const dateNow = admin.firestore.Timestamp.now().toDate();
        let deliveryDate = admin.firestore.Timestamp.now().toDate();
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        
        orderDetails.orderDate = dateNow.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        orderDetails.deliveryDate = deliveryDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        orderDetails.deliveryStatus = 'ordered';

        orders.products = products;
        orders.deliveryDate = deliveryDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        orders.deliveryStatus = 'ordered';

        orderDoc = await firestore
                            .collection('Orders')
                            .add(orders);
        console.log(orderDoc)
        await firestore
                .collection('OrderDetails')
                .doc(orderDoc.id)
                .set(orderDetails);

        return res.status(200).json({
            status: 'success',
            message: 'Order is successfully placed'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

// verified
const cancelOrder = async (req, res) => {
    const orderID = req.body.orderID;

    const orderDoc = firestore
                        .collection('Orders')
                        .doc(orderID);

    const detailsDoc = firestore
                            .collection('OrderDetails')
                            .doc(orderID)

    try {
        const order = await orderDoc.get();
        if (order.exists) {
            await orderDoc
                .delete();

            await detailsDoc
                    .delete();
        } else {
            return res.status(404).json({
                status: 'error',
                message: 'Order with given ID does not exists'
            })
        }

        return res.status(200).json({
            status: 'success',
            message: 'Order successfully cancelled'
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }
}

module.exports = {
    signUp,
    login,
    logOut,
    getAccountSummary,
    getAllReviews,
    getAllOrders,
    addReview,
    editReview,
    deleteReview,
    addOrder,
    cancelOrder,
    createSession,
    clearSession,
    getUserDetails
}