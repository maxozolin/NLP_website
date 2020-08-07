/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

const request = require('request');

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
app.use('/dist', express.static('public'));

const port = 5000;
/* Spin up the server*/
const server = app.listen(port);

//Logging start time
console.log(`sever started at ${Math.floor(new Date() / 1000)}`);



app.get('/', function (req, resp) {
    var options = {
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
    resp.sendFile(__dirname + "/dist/index.html",options)
})

app.get('/main.js', function (req, resp) {
    var options = {
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
    // resp.location(__dirname + '/dist/')
    resp.sendFile(__dirname + "/dist/main.js",options)
})

//POST REQUEST WITH LONGITUDE AND LATITUDE
app.get('/app', function (req, resp) {

    resp.send({"message":"Hello there"})
    console.log('got request')
})