'use strict';

const mongoose = require('mongoose');

const grizzySchema = mongoose.Schema ({
  type: {type: String, required: true},
  region: {type: String, required: true},
  birthed: {type: Date, default: new Date, required: true},
});

mongoose.exports = mongoose.model('grizzy', grizzySchema);
