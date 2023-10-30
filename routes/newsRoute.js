const express = require('express');
const { getNews, getNewsID } = require('../controllers/news');

const limitSchema = require('../schema/limitSchema');
const validateSchema = require('../middleware/validateSchema');

const router = express.Router();

router.get('/news', validateSchema(limitSchema), getNews);
router.get('/news/:id', getNewsID);

module.exports = {
    routes: router
}