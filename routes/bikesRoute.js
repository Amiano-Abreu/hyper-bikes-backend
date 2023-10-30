const express = require('express');
const { getBikes, getBikeID, getBikesBrand, getBikesCategory, getBikesDisplacement, getBikesPrice } = require('../controllers/bikes');

const bikeBrandSchema = require('../schema/bikeBrandSchema');
const bikeCategorySchema = require('../schema/bikeCategorySchema');
const limitSchema = require('../schema/limitSchema');
const bikeDisplacementSchema = require('../schema/bikeDisplacementSchema');
const bikePriceSchema = require('../schema/bikePriceSchema');

const validateSchema = require('../middleware/validateSchema');

const router = express.Router();

router.get('/bikes', validateSchema(limitSchema), getBikes);
router.get('/bikes/brand', validateSchema(bikeBrandSchema), getBikesBrand);
router.get('/bikes/category', validateSchema(bikeCategorySchema), getBikesCategory);
router.get('/bikes/displacement', validateSchema(bikeDisplacementSchema), getBikesDisplacement);
router.get('/bikes/price', validateSchema(bikePriceSchema), getBikesPrice);
router.get('/bike/:id', getBikeID);

module.exports = {
    routes: router
}