const express = require("express");
const asyncHandler = require("../../middlewares/async");
const router = express.Router();
const Event=require('../../schemas/Event');

const event = require('./event');


router.use('/event', event)


router.get('/', asyncHandler(async (req, res, next) => {

    //Declaring a query variable
    let query;

    //Copying req.query
    reqQuery = { ...req.query };

    //Fields to execute
    const removeQuery = ['select', 'sort', 'limit'];

    //Removing query from the url
    removeQuery.forEach(param => delete reqQuery[param]);


    //Converting to query form
    let queryStr = JSON.stringify(reqQuery);

    //Finding the specified resource from the database
    query = Event.find(JSON.parse(queryStr));

    //Select operator finding 
    if (req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        // console.log(fields)
        query = query.select(fields);
        //console.log(query);

    }

    //Sort function
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('-createdAt')
    }


    //Number of datas for sliding
    const limit = parseInt(req.query.limit, 10) || 3;

    //Adding skipping for showing number of entries from a page
    query = query.limit(limit);
    const slider = await query;

    res.status(200).json({
        success: true,
        count: slider.length,
        data: slider
    });

}))

module.exports = router


