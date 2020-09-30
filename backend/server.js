const express = require('express')
const dotenv = require('dotenv')



const api =require('./routes/api/api');

//Loading all env variables
dotenv.config({ path: './config/config.env' });

//Declaring app variable
const app = express()

// Static directory
app.use(express.static(__dirname + "/public"));

// JSON parsing essentials
app.use(express.json());

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

