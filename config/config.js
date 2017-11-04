import path from 'path';

var rootPath = path.normalize(__dirname + '/..');
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
