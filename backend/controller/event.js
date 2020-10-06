
const asyncHandler = require('../middlewares/async');
const ErrorResponce = require('../utils/errorResponce');
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
});

//Update a team member data
// @access Private
//METHOD PUT
exports.updateEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) {
        return next(new ErrorResponce('Cannot update team member data', 404))
    }

    res.status(200).json({ success: true, data: event })
});


//Delete team member data
// @access Private
//METHOD DELETE

exports.deleteEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findById(req.params.id);
    if (!event) {
        return next(new ErrorResponce('Not successful in deleting the team member data', 404))
    }

    event.remove()

    res.status(200).json({ success: true, data: event })
})