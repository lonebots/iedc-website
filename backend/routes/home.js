const express = require("express");
const router = express.Router();
const asyncHandler = require("./backend/middlewares/async");
const Event = require('./backend/schemas/Event');
const advancedQueryResults = require('./backend/middlewares/advancedQueryResults');


router.get('/', advancedQueryResults(Event), asyncHandler(async (req, res, next) => {
    //  res.status(200).json(res.advancedQueryResults);
    res.status(200).render('./pages/home', (res.advancedQueryResults))
}));

module.exports = router