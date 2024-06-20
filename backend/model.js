const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    id:Number,
    event:String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;