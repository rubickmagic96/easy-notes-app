const express = require('express');
const bodyParser = require('body-parser');

/* create express app */

const app = express();

/* parse request of content-type - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded(extended: true));

/* parse request of content-type - application/json */
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({"messages": "Welcome to easynotes application. Create your notes"});
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
