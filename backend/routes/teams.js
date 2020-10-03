const express = require('express')
const advancedQueryResults=require('../middlewares/advancedQueryResults')
const Team=require('../schemas/Team')

const { createMember, getTeam } = require('../controller/team')

const router = express.Router()
//router.route('/').get(advancedQueryResults(Team),getTeam).post(createMember);

router.get('/', function(req,resp){
    resp.render("./pages/teams");
});

module.exports = router;