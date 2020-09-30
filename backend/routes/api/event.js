const express = require("express");
const router = express.Router();

router.post('/add',(req,resp)=>{
    resp.send('Hello')
})


module.exports =router