const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/events', controller.getEvents);
router.post('/addevent', controller.addEvent);
router.put('/updateevent', controller.updateEvent);


module.exports = router;