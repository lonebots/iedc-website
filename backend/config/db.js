const mongoose = require('mongoose');

const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    //console.log(typeof process.env.MONGO_DB_URI);

    console.log(`MongoDB connected in ${conn.connection.host}`);
}

module.exports = connectDb;
