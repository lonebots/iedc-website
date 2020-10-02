const express = require("express");
const asyncHandler = require("../../middlewares/async");
const router = express.Router();
const Event = require('../../schemas/Event');
const advancedQueryResults = require('../../middlewares/advancedQueryResults');

const event = require('./event');
const team = require('./team')


router.use('/event', event)
router.use('/team', team)

router.get('/', advancedQueryResults(Event), asyncHandler(async (req, res, next) => {

    res.status(200).json(res.advancedQueryResults)

}))

module.exports = router