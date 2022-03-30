// Require Libraries
const express = require('express');
//const fetch = require('node-fetch');
//require('dotenv').config();

// App Setup
const app = express();

const { engine } = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// Render the "home" layout for the main page and send the following msg
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})