const express = require('express')
const dotenv = require('dotenv')

// 
const app = express()
const api = require('./routes/api/api');
const connectDb = require('./config/db');


//Connect to mongo
connectDb()

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

//Mounting Route
app.use('/api', api)

//Listening to app
const server = app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`));


//Handling unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error:${error.message}`);

  //Close the server and exit process
  server.close(() => process.exit(1));
})

//'npm run dev' for running app in development mode 
