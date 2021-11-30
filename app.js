const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');

    res.send("Hello");
});



app.listen(3000 , function () {
    console.log('server started on port 3000');
})