
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

apikey = "ac876c4e2b08a5353242ef1e7480c279"
console.log(apikey)

app.post('/app', function (req, resp) {
    
    //Get userdata
    let udata = req.body
    //Get the city from userdata
    let url = udata["url"]
    //Instanciating time
    //Logging with UTC timestamp time
    console.log(`requested ${url}`)

    let apiUrl = `https://api.meaningcloud.com/topics-2.0?key=${apikey}&of=json&lang=en&ilang=en&url=${url}&tt=a`

    request(apiUrl, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        let apidata=res.body
        try{
            console.log(apidata)
        } catch(e){
            console.log(e)
        }
        //Return Parsed Data
        resp.send(apidata);
    });
})