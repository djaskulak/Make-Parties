// Require Libraries
const express = require('express');
// const fetch = require('node-fetch');
// require('dotenv').config();

// App Setup
const app = express();

const { engine } = require('express-handlebars');

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// OUR MOCK ARRAY OF PROJECTS
var events = [
  { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://laschoolfordogs.com/wp-content/uploads/2020/12/German-Shepherd-Puppy-Fetch.jpg" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://laschoolfordogs.com/wp-content/uploads/2020/12/German-Shepherd-Puppy-Fetch.jpg" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://laschoolfordogs.com/wp-content/uploads/2020/12/German-Shepherd-Puppy-Fetch.jpg" }
]

// INDEX
app.get('/', (req, res) => {
  res.render('events-index', { events: events });
})

// NEW
app.get('/events/new', (req, res) => {
  res.render('events-new', {});
})

// CREATE
app.post('/events', (req, res) => {
  console.log(req.body);
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})