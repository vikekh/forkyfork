import express from 'express';
import glob from 'glob';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import ejs from 'ejs';
import path from 'path';

module.exports = (app, config) => {

  app.locals.ENV = config.env;
  app.locals.ENV_DEVELOPMENT = config.env == 'development';

  app.set('view engine', 'ejs');
  app.set('views', path.relative(__dirname, '/app/views'));
  app.use(express.static(config.root + '/public'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(methodOverride());

  // glob.sync(path.relative(config.root, '/app/controllers/*.js')).forEach((ctrl) => {
  //   require(path.relative(config.root, ctrl))(app);
  // });
  require('../app/controllers/routes');

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    }
  );

  return app;
}
