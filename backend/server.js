const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose");

// 
const app = express()
const api =require('./routes/api/api');

var db=process.env.MONGO_DB_URI
// console.log(db+"hi");

// Connect to mongo
mongoose
  .connect(db+"iedc", { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully `);
  })
  .catch((err) => { 
    console.log(`Unable to connect to the database ${err}`);
  });

//Loading all env variables
dotenv.config({ path: './config/config.env' });

// Static directory
app.use(express.static(__dirname + "/public"));

// JSON parsing essentials
app.use(express.json());

// URL encoded data extracter
app.use(
  express.urlencoded({
    extended: true,
  })
);

// API
app.get('/',(req,resp)=>{
    resp.send("Hmmm")
})
app.use('/api',api)

//Listening to app
app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`));

//'npm run dev' for running app in development mode 

