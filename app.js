// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.body);
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/first-file', (req, res) => {
    res.sendFile('/index.html');
});

app.get('/second-file', (req, res) => {
    res.sendFile('/index.html');
});

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});