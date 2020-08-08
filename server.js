/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

const request = require('request');

const path = require('path')
/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static(path.join(__dirname, 'dist')));

const port = 5000;
/* Spin up the server*/
const server = app.listen(port);

//Logging start time
console.log(`sever started at ${Math.floor(new Date() / 1000)} port ${port}`);

app.get('/app', function (req, resp) {
    let data = {message:"Hello there"}
    resp.send(data)
    console.log(`got request, sent ${data.message}`)
})