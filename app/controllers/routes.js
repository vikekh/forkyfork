import express from 'express';

module.exports = function (app) {
  var router = express.Router();
  app.use('/', router);
};
