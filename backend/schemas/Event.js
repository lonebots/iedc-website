const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a user model

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: true,
  },
});

var Event= mongoose.model("events", EventSchema);

module.exports = Event;
 

