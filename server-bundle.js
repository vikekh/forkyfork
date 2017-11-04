/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _assert = __webpack_require__(3);

var _assert2 = _interopRequireDefault(_assert);

var _mongodb = __webpack_require__(4);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_mongodb.MongoClient.connect(_config2.default.db, function (err, db) {
  _assert2.default.equal(null, err);

  app = __webpack_require__(6)(app, _config2.default);
  app.listen(_config2.default.port, function () {
    console.log('Express server listening on port ' + _config2.default.port);
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootPath = _path2.default.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/volumeup-development',
    env: 'development'
  },
  test: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/volumeup-test',
    env: 'test'
  },
  production: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI || 'mongodb://localhost/volumeup-production',
    env: 'production'
  }
};

module.exports = config[env];
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _glob = __webpack_require__(7);

var _glob2 = _interopRequireDefault(_glob);

var _morgan = __webpack_require__(8);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(9);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(10);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _methodOverride = __webpack_require__(11);

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _ejs = __webpack_require__(12);

var _ejs2 = _interopRequireDefault(_ejs);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app, config) {

  app.locals.ENV = config.env;
  app.locals.ENV_DEVELOPMENT = config.env == 'development';

  app.set('view engine', 'ejs');
  app.set('views', _path2.default.relative(__dirname, '/app/views'));
  app.use(_express2.default.static(config.root + '/public'));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use((0, _morgan2.default)('dev'));
  app.use((0, _methodOverride2.default)());

  // glob.sync(path.relative(config.root, '/app/controllers/*.js')).forEach((ctrl) => {
  //   require(path.relative(config.root, ctrl))(app);
  // });
  __webpack_require__(13);

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error'
    });
  });

  return app;
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  var router = _express2.default.Router();
  app.use('/', router);
};

/***/ })
/******/ ]);