//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ['Give thanks', 'Hygen', 'Breakfast', 'Code'];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  let today = new Date();

  let option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  let day = today.toLocaleDateString('en-US', option);

  res.render('list', { kindOfDay: day, newItemArray: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('The server is up and running on port 3000');
});
