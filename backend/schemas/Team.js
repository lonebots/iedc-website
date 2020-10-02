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
        enum: ['Core Team', 'Web Team']
    },
    post: {
        type: String,
        required: [true, 'Please enter your post']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('Team',TeamSchema);