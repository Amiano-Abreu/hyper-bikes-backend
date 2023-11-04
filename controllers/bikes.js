const { firebaseApp } = require('../db');

const BikesPreview = require('../models/bikesPreview');
const BikeDetails = require('../models/bikeDetails');
const Review = require('../models/review');
const NewsPreview = require('../models/newsPreview');

const firestore = firebaseApp.firestore();

// verified
const getSingleBikeSummary = async (req, res) => {
    const { id } = req.params;

    try {
        const bike = await firestore.collection('Bikes').doc(id);
        const data = await bike.get();
        
        if(!data.exists) {
            return res.status(404).json({
                status: 'Error',
                message: 'Bike with the given ID not found'
            });
        } else {
            // console.log(data.data())

            const bikeData = new BikesPreview(
                data.id,
                data.data().brand,
                data.data().category,
                data.data().displacement,
                data.data().images,
                data.data().kerbWeight,
                data.data().model,
                data.data().power,
                data.data().price
            );

            return res.status(200).json({
                status: 'Success',
                data: bikeData
            })
        }
    } catch (error) {
        return res.status(400).json({
            status: 'Error',
            message: error.message
        });
    }
}
// verified
const getBikes = async (req, res) => {
    const { limit } = req.query;
    let bikes;

    try {
        if(limit==='true') {
            bikes = await firestore.collection('Bikes').limit(3);
        } else {
            bikes = await firestore.collection('Bikes');
        }
        const data = await bikes.get();
        const bikesArray = [];
        if(data.empty) {
            res.status(404).json({
                status: 'Error',
                message: 'No data found'
            });
        } else {
            data.forEach(doc => {
                const bike = new BikesPreview(
                    doc.id,
                    doc.data().brand,
                    doc.data().category,
                    doc.data().displacement,
                    doc.data().images,
                    doc.data().kerbWeight,
                    doc.data().model,
                    doc.data().power,
                    doc.data().price
                );

                bikesArray.push(bike);
            })

            res.status(200).json({
                status: 'Success',
                data: bikesArray
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            message: error.message
        });
    }
}

// verified
const getBikeID = async (req, res) => {
    try {
        const bikeID = req.params.id;

        const bike = await firestore.collection('BikeDetails').doc(bikeID);
        const reviewRef = await firestore.collection('Reviews').where("bikeID" , "==" , bikeID);
        const newsRef = await firestore.collection('News').where("bikeID" , "==" , bikeID);

        const reviewData = await reviewRef.get();
        const data = await bike.get();
        const newsData = await newsRef.get();

        if(!data.exists) {
            res.status(404).json({
                status: 'Error',
                message: 'Bike with the given ID not found'
            });
        }else {
            let reviews = [];
            let newsArray = [];

            const bikeDetails = new BikeDetails(
                data.data().about,
                data.data().brakesWheelSuspension.brakingSystem,
                data.data().brakesWheelSuspension.calliperType,
                data.data().brakesWheelSuspension.frontBrakeSize,
                data.data().brakesWheelSuspension.frontBrakeType,
                data.data().brakesWheelSuspension.frontSuspension,
                data.data().brakesWheelSuspension.frontTyrePressureRP,
                data.data().brakesWheelSuspension.frontTyrePresureR,
                data.data().brakesWheelSuspension.frontTyreSize,
                data.data().brakesWheelSuspension.frontWheelSize,
                data.data().brakesWheelSuspension.radialTyres,
                data.data().brakesWheelSuspension.rearBrakeSize,
                data.data().brakesWheelSuspension.rearBrakeType,
                data.data().brakesWheelSuspension.rearSuspension,
                data.data().brakesWheelSuspension.rearTyrePressureR,
                data.data().brakesWheelSuspension.rearTyrePressureRP,
                data.data().brakesWheelSuspension.rearTyreSize,
                data.data().brakesWheelSuspension.rearWheelSize,
                data.data().brakesWheelSuspension.tyreType,
                data.data().brakesWheelSuspension.wheelType,
                data.data().dimensionsChassis.chassisType,
                data.data().dimensionsChassis.groundClearance,
                data.data().dimensionsChassis.kerbWeight,
                data.data().dimensionsChassis.overallHeight,
                data.data().dimensionsChassis.overallLength,
                data.data().dimensionsChassis.overallWidth,
                data.data().dimensionsChassis.seatHeight,
                data.data().dimensionsChassis.wheelBase,
                data.data().features.additionalFeatures,
                data.data().features.aho,
                data.data().features.appConnectivity,
                data.data().features.battery,
                data.data().features.brakeLight,
                data.data().features.clock,
                data.data().features.digitalFuelGuage,
                data.data().features.drl,
                data.data().features.frontStorageBox,
                data.data().features.fuelGuage,
                data.data().features.gpsNavigation,
                data.data().features.headlightType,
                data.data().features.killSwitch,
                data.data().features.lowBatteryIndicator,
                data.data().features.lowFuelIndicator,
                data.data().features.lowOilIndicator,
                data.data().features.numberOfTripmeters,
                data.data().features.odometer,
                data.data().features.passLight,
                data.data().features.pillionBackrest,
                data.data().features.pillionFootrest,
                data.data().features.pillionGrabrail,
                data.data().features.pillionSeat,
                data.data().features.shiftLight,
                data.data().features.speedometer,
                data.data().features.standAlarm,
                data.data().features.startType,
                data.data().features.steppedSeat,
                data.data().features.tachometer,
                data.data().features.tripmeterType,
                data.data().features.turnSignal,
                data.data().features.underSeatStorage,
                data.data().features.usbChargingPort,
                data.data().powerPerformance.bore,
                data.data().powerPerformance.clutch,
                data.data().powerPerformance.compressionRatio,
                data.data().powerPerformance.coolingSystem,
                data.data().powerPerformance.cylinders,
                data.data().powerPerformance.displacement,
                data.data().powerPerformance.emissionStandard,
                data.data().powerPerformance.fuelDelivery,
                data.data().powerPerformance.fuelTankCapacity,
                data.data().powerPerformance.fuelType,
                data.data().powerPerformance.gearShiftPattern,
                data.data().powerPerformance.ignition,
                data.data().powerPerformance.maxPower,
                data.data().powerPerformance.maxTorque,
                data.data().powerPerformance.reserveFuelCapacity,
                data.data().powerPerformance.stroke,
                data.data().powerPerformance.topSpeed,
                data.data().powerPerformance.transmission,
                data.data().powerPerformance.transmissionType,
                data.data().powerPerformance.valves,
                data.data().reviewCount,
                data.data().totalRating,
                data.data().warranty.kilometers,
                data.data().warranty.years
            );

            if(!reviewData.empty) {
                reviewData.forEach(doc => {
                    const review = new Review(
                        doc.id,
                        doc.data().bikeID,
                        doc.data().body,
                        doc.data().createdAt,
                        doc.data().data,
                        doc.data().edited,
                        doc.data().name,
                        doc.data().rating,
                        doc.data().title,
                        doc.data().userID
                    );

                    reviews.push(review);
                })
            }

            if(!newsData.empty) {
                newsData.forEach(doc => {
                    const news = new NewsPreview(
                        doc.id,
                        doc.data().alt,
                        doc.data().body,
                        doc.data().createdAt,
                        doc.data().src,
                        doc.data().title
                    );
                    
                    newsArray.push(news);
                })
            }

            res.status(200).json({
                status: 'Success',
                data: bikeDetails,
                review: reviews,
                news: newsArray
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            message: error.message,
            ...error
        })
    }
}

// verified
const getBikesBrand = async (req, res) => {
    const { brand } = req.params;

    const bikesRef = firestore
                        .collection('Bikes')
                        .where("brand", "==", brand);

    let bikes = [];
    try {
        const bikeDocs = await bikesRef.get();

        if(!bikeDocs.empty) {

            bikeDocs.docs.forEach(doc => {
                const bike = new BikesPreview(
                    doc.id,
                    doc.data().brand,
                    doc.data().category,
                    doc.data().displacement,
                    doc.data().images,
                    doc.data().kerbWeight,
                    doc.data().model,
                    doc.data().power,
                    doc.data().price
                )

                bikes.push(bike);
            })

        } else {
            return res.status(404).json({
                        status: 'error',
                        message: `${brand} bikes not available`
                    });
        }

        return res.status(200).json({
            status: 'success',
            data: bikes
        })
    } catch (err) {
        return res.status(500).json({
                    status: 'error',
                    message: 'Server error, please try again'
                })
    }
}

// verified
const getBikesCategory = async (req, res) => {
    const { category } = req.params;

    const bikesRef = firestore
                        .collection('Bikes')
                        .where("category", "==", category);

    let bikes = [];
    try {
        const bikeDocs = await bikesRef.get();

        if(!bikeDocs.empty) {

            bikeDocs.docs.forEach(doc => {
                const bike = new BikesPreview(
                    doc.id,
                    doc.data().brand,
                    doc.data().category,
                    doc.data().displacement,
                    doc.data().images,
                    doc.data().kerbWeight,
                    doc.data().model,
                    doc.data().power,
                    doc.data().price
                )

                bikes.push(bike);
            })

        } else {
            return res.status(404).json({
                        status: 'error',
                        message: `${category} bikes not available`
                    })
        }

        return res.status(200).json({
            status: 'success',
            data: bikes
        })
    } catch (err) {
        return res.status(500).json({
                    status: 'error',
                    message: 'Server error, please try again'
                })
    }
}

//verified
const getBikesDisplacement = async (req, res) => {
    const start = req.query.start;
    const end = req.query.end;

    let bikesRef;
    if(start && end) {
        bikesRef = firestore
                        .collection('Bikes')
                        .where("displacement", ">=", start)
                        .where("displacement", "<=", end);
    } else {
        bikesRef = firestore
                        .collection('Bikes')
                        .where("displacement", ">=", start)
    }
    

    let bikes = [];
    try {
        const bikeDocs = await bikesRef.get();

        if(!bikeDocs.empty) {

            bikeDocs.docs.forEach(doc => {
                const bike = new BikesPreview(
                    doc.id,
                    doc.data().brand,
                    doc.data().category,
                    doc.data().displacement,
                    doc.data().images,
                    doc.data().kerbWeight,
                    doc.data().model,
                    doc.data().power,
                    doc.data().price
                )

                bikes.push(bike);
            })

        } else {
            return res.status(404).json({
                        status: 'error',
                        message: `${start}cc-${end}cc bikes are not available`
                    })
        }

        return res.status(200).json({
                    status: 'success',
                    data: bikes
                })
    } catch (err) {
        return res.status(500).json({
                    status: 'error',
                    message: 'Server error, please try again'
                })
    }
}

// verified
const getBikesPrice = async (req, res) => {
    const { under, above } = req.query;

    let bikesRef;
    if(under){
        bikesRef = firestore
                        .collection('Bikes')
                        .where("price", "<", under);
    }
    else if(above){
        bikesRef = firestore
                        .collection('Bikes')
                        .where("price", ">", above);
    } else {
        return res.status(404).json({
            status: 'error',
            message: 'Please check query params'
        });
    }

    let bikes = [];
    try {
        const bikeDocs = await bikesRef.get();

        if(!bikeDocs.empty) {

            bikeDocs.docs.forEach(doc => {
                const bike = new BikesPreview(
                    doc.id,
                    doc.data().brand,
                    doc.data().category,
                    doc.data().displacement,
                    doc.data().images,
                    doc.data().kerbWeight,
                    doc.data().model,
                    doc.data().power,
                    doc.data().price
                )

                bikes.push(bike);
            })

        } else {
            return res.status(404).json({
                        status: 'error',
                        message: `Bikes ${under ? `under ${under}`: `above ${above}`} price are not available`
                    })
        }

        return res.status(200).json({
                    status: 'success',
                    data: bikes
                })

    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Server error, please try again'
        })
    }

    
}
module.exports = {
    getBikes,
    getBikeID,
    getBikesBrand,
    getBikesCategory,
    getBikesDisplacement,
    getBikesPrice,
    getSingleBikeSummary
}