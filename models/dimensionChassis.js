class DimensionChassis {
    constructor (chassisType, groundClearance, kerbWeight, overallHeight, overallLength,
        overallWidth, seatHeight, wheelBase ) {
        this.chassisType = chassisType,
        this.groundClearance = groundClearance,
        this.kerbWeight = kerbWeight,
        this.overallHeight = overallHeight,
        this.overallLength = overallLength,
        this.overallWidth = overallWidth,
        this.seatHeight = seatHeight,
        this.wheelBase = wheelBase
    }
}

module.exports = DimensionChassis;