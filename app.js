//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var today = new Date();

  var option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  var day = today.toLocaleDateString('en-US', option);

  res.render('list', { kindOfDay: day });
});

app.post('/', function (req, res) {});

app.listen(3000, function () {
  console.log('The server is up and running on port 3000');
});
