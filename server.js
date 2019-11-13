require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(bodyParser.json());

app.use(cors());


const emailRouter = require('./routes/email');
app.use('/email', emailRouter)



app.listen(process.env.PORT || 3000, () => {

  console.log('started');

})