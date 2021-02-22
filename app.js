//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

// variables
let items = ['Give thanks', 'Hygen', 'Breakfast', 'Code'];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Home route

app.get('/', function (req, res) {
  const day = date.getDay();

  res.render('list', { titleHead: day, newItemArray: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;

  console.log(req.body.button);
  if (req.body.button === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

// Work route

app.get('/work', function (req, res) {
  res.render('list', { titleHead: 'Work List', newItemArray: workItems });
});

app.post('/work', function (req, res) {
  res.redirect('/work');
});

// About route

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log('The server is up and running on port 3000');
});
