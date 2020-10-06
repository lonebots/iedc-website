const express = require("express");
const router = express.Router();
const asyncHandler = require('./../middlewares/async');
const Event = require('../schemas/Event');
const advancedQueryResults = require('../middlewares/advancedQueryResults');


router.get('/', advancedQueryResults(Event), asyncHandler(async (req, res, next) => {
    //  res.status(200).json(res.advancedQueryResults);
    res.status(200).render('./pages/home', { home: res.advancedQueryResults })
}));

module.exports = router