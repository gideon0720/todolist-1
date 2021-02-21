//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function (req, res) {
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send('<h1>Week end break!</h1>');
  } else {
    res.send('<h1>Back to HARD work</h1>');
  }
});

app.post('/', function (req, res) {});

app.listen(3000, function () {
  console.log('The server is up and running on port 3000');
});
