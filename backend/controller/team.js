const asyncHandler = require("../middlewares/async");
const Team = require("../schemas/Team");


//GET all team datas
// @access Public
//METHOD GET
exports.getTeam = asyncHandler(async (req, res, next) => {

    const team = await Team.find();

    if (!team) {
        return next(new ErrorResponce(`Can't retrieve team data`, 400))
    }

    res.status(200).json({
        success: true,
        data: team,
        count: team.length
    })
});


//Create a team member data
// @access Private
//METHOD POST
exports.createMember = asyncHandler(async (req, res, next) => {
    const team = await Team.create(req.body);

    if (!team) {
        return next(new ErrorResponce(`Failed in adding the member`, 400))
    }

    res.status(200).json({
        success: true,
        data: team,

    })
})


