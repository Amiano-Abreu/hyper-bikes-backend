class PowerPerformance {
    constructor( bore, clutch, compressionRatio, coolingSystem, cylinders,
        displacement, emissionStandard, fuelDelivery, fuelTankCapacity,
        fuelType, gearShiftPattern, ignition, maxPower, maxTorque,
        reserveFuelCapacity, stroke, topSpeed, transmission, transmissionType,
        valves ) {
        this.bore = bore,
        this.clutch = clutch,
        this.compressionRatio = compressionRatio,
        this.coolingSystem = coolingSystem,
        this.cylinders = cylinders,
        this.displacement = displacement,
        this.emissionStandard = emissionStandard,
        this.fuelDelivery = fuelDelivery,
        this.fuelTankCapacity = fuelTankCapacity,
        this.fuelType = fuelType,
        this.gearShiftPattern = gearShiftPattern,
        this.ignition = ignition,
        this.maxPower = maxPower,
        this.maxTorque = maxTorque,
        this.reserveFuelCapacity = reserveFuelCapacity,
        this.stroke = stroke,
        this.topSpeed = topSpeed,
        this.transmission = transmission,
        this.transmissionType = transmissionType,
        this.valves = valves
    }
}

module.exports = PowerPerformance;