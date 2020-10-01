const mongoose = require('mongoose');

const connectDb = async () => {
    const conn = await mongoose.connect('mongodb+srv://iedcgect:iedcgect@1956@iedc-cluster.5gkuu.mongodb.net/iedc?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    //console.log(typeof process.env.MONGO_DB_URI);

    console.log(`MongoDB connected in ${conn.connection.host}`);
}

module.exports = connectDb;