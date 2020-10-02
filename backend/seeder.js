const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors')

//Load all env varibles
dotenv.config({ path: './config/config.env' });

//Load Models
const Event = require('./schemas/Event');
const Team = require('./schemas/Team');



//Connect to database
mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Read JSON files
const events = JSON.parse(fs.readFileSync(`${__dirname}/_data/events.json`, 'utf-8'));
const team = JSON.parse(fs.readFileSync(`${__dirname}/_data/team.json`, 'utf-8'));

//Import into DB
const importData = async () => {
    try {
        await Event.create(events);
        await Team.create(team);
        console.log('Data imported'.green.inverse)
    } catch (error) {
        console.error(error)
    }
}

//Delete the data from DB
const deleteData = async () => {
    try {
        await Event.deleteMany();
        await Team.deleteMany();
        console.log('Data destroyed'.red.inverse)
    } catch (error) {
        console.error(error)
    }
}

//Checking condition for node seeder
if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}

//use 'node seeder -i' for adding and 'node seeder -d' for deleting dummy datas