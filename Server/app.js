const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRouter = require('./routes/users');

const app = express();

// connect to mongo
require('./config/mongo-connect')();

app.use(logger('dev'));

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRouter);


app.use((req, res) => {
  res.status(404).send({ message: 'Invalid route' });
});

module.exports = app;
