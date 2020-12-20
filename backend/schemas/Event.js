const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a user model

const EventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name!'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the description!'],
  },
  photo: {
    type: String,
    default: 'test.png'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  eventType: {
    type: String,
    required: [true, 'Please enter the event type']

  }
});



module.exports = mongoose.model('Event', EventSchema);


