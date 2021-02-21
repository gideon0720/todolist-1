//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = ['Brew coffee', 'Hygen', 'Breakfast', 'Code'];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var today = new Date();

  var option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  var day = today.toLocaleDateString('en-US', option);

  res.render('list', { kindOfDay: day, newItemArray: items });
});

app.post('/', function (req, res) {
  var item = req.body.newItem;
  items.push(item);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('The server is up and running on port 3000');
});
