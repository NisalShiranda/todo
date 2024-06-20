const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4001;
const HOST = 'localhost';

const app = express();

app.use(cors());
app.use(express.json());











const server = app.listen(PORT, HOST, () => {
    console.log(`server listening on port ${PORT}`)
});