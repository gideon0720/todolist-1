//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = '';

  if (currentDay === 6 || currentDay === 0) {
    day = 'Week end';
  } else {
    day = 'Week day';
  }

  res.render('list', { kindOfDay: day });
});

app.post('/', function (req, res) {});

app.listen(3000, function () {
  console.log('The server is up and running on port 3000');
});
