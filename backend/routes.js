const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/events', controller.getEvents);
router.post('/addevent', controller.addEvent);
router.put('/updateevent', controller.updateEvent);
router.post('/deleteevent', controller.deleteEvent);


module.exports = router;