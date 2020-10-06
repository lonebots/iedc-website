const asyncHandler = require("../middlewares/async");
const Team = require("../schemas/Team");


//GET all team members datas
// @access Public
//METHOD GET
exports.getTeam = asyncHandler(async (req, res, next) => {

<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json(res.advancedQueryResults);
=======

    res.status(200).render('./pages/teams', { team: res.advancedQueryResults });

>>>>>>> 4eca86d... added some ejs data transfer connection
=======

    res.status(200).render('./pages/teams', { team: res.advancedQueryResults });

>>>>>>> test2
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


