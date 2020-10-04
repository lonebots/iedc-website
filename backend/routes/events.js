const express = require("express");
const router = express.Router();
const event = require('../schemas/Event')


router.get('/', function(req,resp){
    resp.render("./pages/events");
});

module.exports = router