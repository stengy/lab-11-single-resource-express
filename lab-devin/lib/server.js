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

const serverControler = module.exports = {};

serverControler.start = () => {
  return new Promise ((resolve) => {
    server.app.listen(process.env.PORT, () => {
      console.log('serving', process.env.PORT);
      server.isON = true;
      resolve();
    });
  });
};

serverControler.stop = () => {
  return new Promise ((resolve) => {
    server.close(() => {
      console.log('server offline');
      server.isOn = false;
      resolve();
    });
  });
};
