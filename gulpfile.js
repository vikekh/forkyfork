
// Import dependencies
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , concat = require('gulp-concat')
  , plumber = require('gulp-plumber')
  , webpack = require('webpack-stream')
  , nodeExternals = require('webpack-node-externals');

gulp.task('default', [
  'bundle:server',
  'watch:server'
]);


gulp.task('watch:server', () => {
  nodemon({
    script: 'server-bundle.js',
    ext: 'js'
  });
});
gulp.task('bundle:server', () => {
  return gulp.src('app.js')
    .pipe(webpack({
      watch: true,
      target: 'node',
      module: {
        loaders: [{
          test: /.js/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: { presets: ['env'] }
        }]
      },
      externals: [nodeExternals()],
      output: { filename: 'server-bundle.js' }
    }))
    .pipe(gulp.dest(__dirname));
});
