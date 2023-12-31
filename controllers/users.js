const { firebaseApp, admin } = require('../db');

const firestore = firebaseApp.firestore();

// verified
const getCartItems = async (req, res) => {
    const uid = req.user.user_id;

    try {
        const doc = await firestore.collection('Cart').where("userID", "==", uid).limit(1).get()

        let data;
        if (!doc.empty) {
            doc.forEach(
                docItem => {
                    data = docItem.data().cartItems;
                }
            )

            return res.status(200).json({
                status: "SUCCESS",
                data
            })
        } else {
            data = [];

            return res.status(200).json({
                status: "SUCCESS",
                data
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
const addToCart = async (req, res) => {
    const uid = req.user.user_id;
    const cartItem = {};

    cartItem.alt = req.body.alt;
    cartItem.bikeID = req.body.bikeID;
    cartItem.brand = req.body.brand;
    cartItem.model = req.body.model;
    cartItem.price = req.body.price;
    cartItem.src = req.body.src;
    cartItem.quantity = 1;

    try {
        const doc = await firestore.collection('Cart').where("userID", "==", uid).limit(1).get()

        let data;
        if (!doc.empty) {
            let docID;
            doc.forEach(
                docItem => {
                    docID = docItem.id;
                    data = docItem.data().cartItems;
                }
            )

            const foundItem = data.find( obj => obj.bikeID === cartItem.bikeID );

            if (foundItem) {
                foundItem.quantity += 1;

                let newData = data.filter( obj => obj.bikeID !== cartItem.bikeID );
                newData.push(foundItem);

                data = newData;
            }
            else {
                data.push(cartItem)
            }
            
            await firestore
                    .collection('Cart')
                    .doc(docID)
                    .update({ cartItems: data })

            return res.status(200).json({
                status: "SUCCESS",
                data
            })
        } else {
            data = [cartItem];

            await firestore
                    .collection('Cart')
                    .add({ cartItems: data, userID: uid })

            return res.status(201).json({
                status: "SUCCESS",
                data
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
const removeFromCart = async (req, res) => {
    const uid = req.user.user_id;

    const bikeID = req.body.bikeID;
    const removeItem = req.body.removeItem;

    try {
        const doc = await firestore.collection('Cart').where("userID", "==", uid).limit(1).get()

        let data;
        if (!doc.empty) {
            let docID;
            doc.forEach(
                docItem => {
                    docID = docItem.id;
                    data = docItem.data().cartItems;
                }
            )
            
            const foundItem = data.find( obj => obj.bikeID === bikeID );

            if (foundItem) {

                if (removeItem === 'true') {
                    data = data.filter( obj => obj.bikeID !== bikeID );
                } else {

                    if (foundItem.quantity > 1) {
                        foundItem.quantity -= 1;
    
                        const newArr = data.filter( obj => obj.bikeID !== bikeID );
                        newArr.push(foundItem);
    
                        data = newArr;
                    } else {
                        data = data.filter( obj => obj.bikeID !== bikeID )
                    }
                }

                if (data.length > 0) {
                    await firestore
                            .collection('Cart')
                            .doc(docID)
                            .update({ cartItems: data });

                    return res.status(200).json({
                        status: 'SUCCESS',
                        data
                    })
                }
                else {
                    await firestore
                            .collection('Cart')
                            .doc(docID)
                            .delete();

                    return res.status(200).json({
                        status: 'SUCCESS',
                        data
                    })
                }
            } else {
                return res.status(404).json({
                    status: 'ERROR',
                    message: `Cart item with bike ID ${bikeID} not found`
                })
            }
           
        } else {
            return res.status(404).json({
                status: 'ERROR',
                message: `Cart of user id ${uid} not found`
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
const removeAllCart = async (req, res) => {
    const uid = req.user.user_id;

    try {
        const doc = await firestore.collection('Cart').where("userID", "==", uid).limit(1).get()

        let data = [];
        if (!doc.empty) {
            let docID;
            doc.forEach(
                docItem => {
                    docID = docItem.id;
                }
            )

            await firestore
                    .collection('Cart')
                    .doc(docID)
                    .delete();

            return res.status(200).json({
                status: 'SUCCESS',
                data
            })
           
        } else {
            return res.status(404).json({
                status: 'ERROR',
                message: `Cart of user id ${uid} not found`
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
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
            

            // console.log('Create Session')
            // console.log('req.user ', req.user)
            // console.log('req.token idToken', req.token)
            return res.status(200).json({
                status: "SUCCESS",
                user: req.user
            });
    
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                status: 'ERROR',
                message: 'Unauthorized access'
            })
        }
}

// verified
const getUserDetails = async (req, res) => {
    const uid = req.user.user_id;
    try {
        const doc = await firestore.collection('Users').doc(uid).get();
        return res.status(200).json({
            status: 'SUCCESS',
            data: { uid: uid , ...doc.data() }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: 'ERROR',
            message: "Server error, please try again"
        });
    }
}

// verified
const clearSession = async (req, res) => {
    const sessionCookie = req.cookies.session;
    try {
        // console.log('clearSession sesh ', sessionCookie)
        const userData = await admin
        .auth()
        .verifySessionCookie(sessionCookie, true);
        
        // console.log('clearSession user ', userData)
        
        await admin.auth().revokeRefreshTokens(userData.sub);
        
        res.clearCookie("session");

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Succesfully logged out user !'
        })
    } catch (err) {
        console.log(err.message);
        return res.status(400).json({
            status: 'ERROR',
            message: 'Failed sign out !'
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
            status: 'SUCCESS',
            reviews: reviewArray,
            orders: orderArray
        })

    } catch (err) {
        return res.status(500).json({
            status: 'ERROR',
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
            status: 'SUCCESS',
            data: reviewsArray
        })
    } catch (err) {
        return res.status(500).json({
            status: 'ERROR',
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
                                    .collection('OrderDetails')
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
            status: 'SUCCESS',
            data: ordersArray
        })
    } catch (err) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
const addReview = async (req, res) => {
    const { uid } = req.user;

    const data = {
        mileage: req.body.mileage,
        owned: req.body.owned,
        ridden: req.body.ridden,
        used: req.body.used,
    }

    const review = {
        bikeID: req.body.bikeID,
        body: req.body.body,
        data,
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
                status: 'SUCCESS',
                message: 'Review added successfully'
            })

        } else {
            return res.status(403).json({
                        status: 'ERROR',
                        message: 'Bike is already reviewed by you. You can edit your review in account section.'
                    });
                
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
const editReview = async (req, res) => {
    const { uid } = req.user;
    
    const bikeID = req.body.bikeID;
    
    const data = {
        mileage: req.body.mileage,
        owned: req.body.owned,
        ridden: req.body.ridden,
        used: req.body.used,
    }

    const review = {
        body: req.body.body,
        data,
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
                status: 'SUCCESS',
                message: 'Review edited successfully'
            })
        
        } else {
            return res.status(404).json({
                        status: 'ERROR',
                        message: 'Review does not exists'
                    });
                
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: 'ERROR',
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
                status: 'SUCCESS',
                message: 'Successfully deleted review'
            })
        } else {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Review does not exists'
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: 'ERROR',
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

    // const orders = {
    //     userID: uid
    // };
    // let products = [];

    try {
        // orderDetails.products.forEach(product => {
        //     products.push(product.bikeModel);
        // })

        const dateNow = admin.firestore.Timestamp.now().toDate();
        let deliveryDate = admin.firestore.Timestamp.now().toDate();
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        
        orderDetails.orderDate = dateNow.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        orderDetails.deliveryDate = deliveryDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        orderDetails.deliveryStatus = 'ordered';

        // orders.products = products;
        // orders.deliveryDate = deliveryDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        // orders.deliveryStatus = 'ordered';

        // orderDoc = await firestore
        //                     .collection('Orders')
        //                     .add(orders);
        // console.log(orderDoc)
        await firestore
                .collection('OrderDetails')
                // .doc(orderDoc.id)
                .add(orderDetails);

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Order is successfully placed !'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

// verified
const cancelOrder = async (req, res) => {
    const orderID = req.body.orderID;

    const detailsDoc = firestore
                            .collection('OrderDetails')
                            .doc(orderID)

    try {
        const order = await detailsDoc.get();
        if (order.exists) {

            await detailsDoc
                    .update({
                        deliveryStatus: 'cancelled'
                    });
        } else {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Order with given ID does not exists'
            })
        }

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Order successfully cancelled'
        });
    } catch (err) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Server error, please try again'
        })
    }
}

module.exports = {
    removeAllCart,
    removeFromCart,
    addToCart,
    getCartItems,
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