const express = require("express");
const router = express.Router();

router.post('/add',(req,resp)=>{
    resp.send('HEllo')
})


module.exports =router