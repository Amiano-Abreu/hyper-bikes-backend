const express = require('express');
const { getBikes, getBikeID, getBikesBrand, getBikesCategory, getBikesDisplacement, getBikesPrice, getSingleBikeSummary } = require('../controllers/bikes');

const bikeBrandSchema = require('../schema/bikeBrandSchema');
const bikeCategorySchema = require('../schema/bikeCategorySchema');
const limitSchema = require('../schema/limitSchema');
const bikeDisplacementSchema = require('../schema/bikeDisplacementSchema');
const bikePriceSchema = require('../schema/bikePriceSchema');

const validateSchema = require('../middleware/validateSchema');
const bikeIDSchema = require('../schema/bikeIDSchema');

const router = express.Router();

router.get('/bikes', validateSchema(limitSchema), getBikes);
router.get('/bikes/brand/:brand', validateSchema(bikeBrandSchema), getBikesBrand);
router.get('/bikes/category/:category', validateSchema(bikeCategorySchema), getBikesCategory);
router.get('/bikes/displacement', validateSchema(bikeDisplacementSchema), getBikesDisplacement);
router.get('/bikes/price', validateSchema(bikePriceSchema), getBikesPrice);
router.get('/bikes/:id', validateSchema(bikeIDSchema), getSingleBikeSummary); // SINGLE BIKE
router.get('/bike/:id', validateSchema(bikeIDSchema), getBikeID); // DETAIL

module.exports = {
    routes: router
}