'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);

let server;

const app = express();

app.use (require('../route/grizzy-router.js'));

app.use((err, req, res, next) => {
  res.sendStatus(500);
});
