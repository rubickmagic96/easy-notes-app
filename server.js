const express = require('express');
const bodyParser = require('body-parser');

/* create express app */
const app = express();

/* parse request of content-type - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: true}));

/* parse request of content-type - application/json */
app.use(bodyParser.json());

/* configuring the database */
const dbConfig = require('./config/database.config.js');
const mongoose =  require('mongoose');

mongoose.Promise = global.Promise;

/* connecting to the database */
mongoose.connect(dbConfig.url).then(() => {
  console.log('Successfully connected to the database');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

/* define a simple routes */
app.get('/', (req, res) => {
  res.json({"messages": "Welcome to easynotes application. Create your notes"});
});

require('./app/routes/note.routes.js')(app);

/* listen for requests */
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
