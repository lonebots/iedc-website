const express = require("express");
const router = express.Router();
const event = require('../schemas/Event')


router.get('/', function(req,resp){
    resp.render("./pages/events");
});


router.post('/add',(req,resp)=>{
    var newEvent = new event(req.body)
    newEvent.save().then((doc)=>{
        if(doc){
            return resp.json({success:true})
        }
        else {
            return resp.json({success:false})
        }
    }).catch((e)=>{
        return resp.json({success:false})
    });
})


module.exports = router