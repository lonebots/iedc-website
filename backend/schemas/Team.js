const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: String,
    teamType: {
        type: String,
        enum: ['Core', 'Web']
    },
    post: {
        type: String,
        required: [true, 'Please enter your post'],
        unique:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('Team',TeamSchema);