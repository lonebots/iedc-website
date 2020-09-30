const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')


//Loading all env variables
dotenv.config({ path: './config/config.env' });

//Declaring app variable
const app = express()

//Listening to app
app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`.yellow.bold));

//'npm run dev' for running app in development mode 

