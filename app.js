
import express from 'express';
import assert from 'assert';
import { MongoClient } from 'mongodb';
import config from './config/config';

var app = express();

MongoClient.connect(config.db, (err, db) => {
  assert.equal(null, err);

  app = require('./config/express')(app, config);
  app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
  });
});
