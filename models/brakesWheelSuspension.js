class BrakesWheelSuspension {
    constructor( brakingSystem , calliperType , frontBrakeSize, frontBrakeType, frontSuspension,
        frontTyrePressureRP, frontTyrePresureR, frontTyreSize, frontWheelSize, radialTyres,
        rearBrakeSize, rearBrakeType, rearSuspension, rearTyrePressureR, rearTyrePressureRP,
        rearTyreSize, rearWheelSize, tyreType, wheelType    
    ) {
        this.brakingSystem = brakingSystem,
        this.calliperType = calliperType,
        this.frontBrakeSize = frontBrakeSize,
        this.frontBrakeType = frontBrakeType,
        this.frontSuspension = frontSuspension,
        this.frontTyrePressureRP = frontTyrePressureRP,
        this.frontTyrePresureR = frontTyrePresureR,
        this.frontTyreSize = frontTyreSize,
        this.frontWheelSize = frontWheelSize,
        this.radialTyres = radialTyres,
        this.rearBrakeSize = rearBrakeSize,
        this.rearBrakeType = rearBrakeType,
        this.rearSuspension = rearSuspension,
        this.rearTyrePressureR = rearTyrePressureR,
        this.rearTyrePressureRP = rearTyrePressureRP,
        this.rearTyreSize = rearTyreSize,
        this.rearWheelSize = rearWheelSize,
        this.tyreType = tyreType,
        this.wheelType = wheelType
    }
}

module.exports = BrakesWheelSuspension