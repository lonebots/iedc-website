const express = require("express");
const router = express.Router();
const Event = require('../schemas/Event')
const advancedQueryResults = require('../middlewares/advancedQueryResults');


const { createEvent, getAllEvents } = require('../controller/event')

router.route('/').get(advancedQueryResults(Event), getAllEvents);

module.exports = router