
const Event = require('./model');

const getEvents = async (req,res,next) => {
    Event.find()
    .then((response) => {
        res.json(response);
    })
    .catch((err) => {
        res.json({err});
    })
};

const addEvent = async (req,res,next) => {
    const event = new Event({
        
        event:req.body.event
    });

    event.save()
    .then(() => {
        res.json({message: 'Event added'})
    })
    .catch((err) => {
        res.json({err});
    })
};

const updateEvent = (req,res,next) =>{
    const { _id,event } = req.body;
    Event.updateOne(
        {_id},
        {$set:{event:event}}
    )
    .then(() => {
        res.json({message: 'Event updated'})
    })
    .catch((err) => {
        res.json({err});
    })
};

const deleteEvent = (req,res,next) =>{
    const { _id } = req.body;
    Event.deleteOne({_id})
    .then(() => {
        res.json({message: 'Event deleted'})
    })
    .catch((err) => {
        res.json({err});
    })
};

exports.getEvents = getEvents;
exports.addEvent = addEvent;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;
