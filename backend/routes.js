const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/events', controller.getEvents);
router.post('/addevent', controller.addEvent);


module.exports = router;