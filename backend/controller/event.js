
const asyncHandler = require('../middlewares/async');
//GET all team members datas
// @access Public
//METHOD GET
exports.getAllEvents = asyncHandler(async (req, res, next) => {


    res.status(200).render('./pages/events', { event: res.advancedQueryResults });
   

});


//Create a team member data
// @access Private
//METHOD POST
exports.createEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.create(req.body);

    if (!event) {
        return next(new ErrorResponce(`Event creation have failed`, 400))
    }

    res.status(200).json({
        success: true,
        data: event,

    })
})