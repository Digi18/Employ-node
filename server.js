const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','ejs');

app.use(require('./routes/getUser'));
app.use(require('./routes/saveUser'));

const port = process.env.PORT || 5000;

app.listen(port,(req,res) => {

  console.log(`Server is up and running at ${port}.`);
});
