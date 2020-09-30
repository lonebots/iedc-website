const express = require("express");
const router = express.Router();

const event = require('./event');


router.use('/event',event)

router.get('/',(req,resp)=>{
    resp.send("HAI")
})

module.exports =router