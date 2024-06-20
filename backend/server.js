const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4001;
const HOST = 'localhost';
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

//qQOUQAVzfaKlVkgD

const uri = 'mongodb+srv://nisal:qQOUQAVzfaKlVkgD@cluster0.gkheqr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async() => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
};

connect();

const server = app.listen(PORT, HOST, () => {
    console.log(`server listening on port ${PORT}`)
});

app.use('/api', router);