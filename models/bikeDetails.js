const BrakesWheelSuspension = require('./brakesWheelSuspension');
const DimensionChassis = require('./dimensionChassis');
const Features = require('./features');
const PowerPerformance = require('./powerPerformance');

class Warrenty {
    constructor( kilometers, years ) {
        this.kilometers = kilometers,
        this.years = years
    }
}

class BikeDetails {
    constructor( about , brakingSystem , calliperType , frontBrakeSize, frontBrakeType, frontSuspension,
        frontTyrePressureRP, frontTyrePresureR, frontTyreSize, frontWheelSize, radialTyres,
        rearBrakeSize, rearBrakeType, rearSuspension, rearTyrePressureR, rearTyrePressureRP,
        rearTyreSize, rearWheelSize, tyreType, wheelType, chassisType, groundClearance, kerbWeight, overallHeight, overallLength,
        overallWidth, seatHeight, wheelBase, additionalFeatures, aho, appConnectivity, battery, brakeLight, clock,
        digitalFuelGuage, drl, frontStorageBox, fuelGuage, gpsNavigation, headlightType,
        killSwitch, lowBatteryIndicator, lowFuelIndicator, lowOilIndicator, numberOfTripmeters,
        odometer, passLight, pillionBackrest, pillionFootrest, pillionGrabrail, pillionSeat,
        shiftLight, speedometer, standAlarm, startType, steppedSeat, tachometer, tripmeterType,
        turnSignal, underSeatStorage, usbChargingPort, bore, clutch, compressionRatio, coolingSystem, cylinders,
        displacement, emissionStandard, fuelDelivery, fuelTankCapacity,
        fuelType, gearShiftPattern, ignition, maxPower, maxTorque,
        reserveFuelCapacity, stroke, topSpeed, transmission, transmissionType,
        valves, reviewCount, totalRating, kilometers, years ) {

        this.about = about,
        this.brakesWheelSuspension = new BrakesWheelSuspension( brakingSystem , calliperType , frontBrakeSize, frontBrakeType, frontSuspension,
            frontTyrePressureRP, frontTyrePresureR, frontTyreSize, frontWheelSize, radialTyres,
            rearBrakeSize, rearBrakeType, rearSuspension, rearTyrePressureR, rearTyrePressureRP,
            rearTyreSize, rearWheelSize, tyreType, wheelType ),
        this.dimensionChassis = new DimensionChassis( chassisType, groundClearance, kerbWeight, overallHeight, overallLength,
            overallWidth, seatHeight, wheelBase ),
        this.features = new Features( additionalFeatures, aho, appConnectivity, battery, brakeLight, clock,
            digitalFuelGuage, drl, frontStorageBox, fuelGuage, gpsNavigation, headlightType,
            killSwitch, lowBatteryIndicator, lowFuelIndicator, lowOilIndicator, numberOfTripmeters,
            odometer, passLight, pillionBackrest, pillionFootrest, pillionGrabrail, pillionSeat,
            shiftLight, speedometer, standAlarm, startType, steppedSeat, tachometer, tripmeterType,
            turnSignal, underSeatStorage, usbChargingPort ),
        this.powerPerformance = new PowerPerformance( bore, clutch, compressionRatio, coolingSystem, cylinders,
            displacement, emissionStandard, fuelDelivery, fuelTankCapacity,
            fuelType, gearShiftPattern, ignition, maxPower, maxTorque,
            reserveFuelCapacity, stroke, topSpeed, transmission, transmissionType,
            valves ),
        this.reviewCount = reviewCount,
        this.totalRating = totalRating,
        this.warranty = new Warrenty( kilometers, years )
    }
}

module.exports = BikeDetails;