// load all the separate gulp files
require('require-dir')('./gulp');
var gulp = require('gulp');

/**
 * tasks for client side dev: compile sass files, lint JavaScript files,
 * run tests and start browser sync
 */
gulp.task('dev:client',
  ['lint:client:watch', 'sass:watch', 'serve', 'test:client']);

gulp.task('dev:server', ['lint:server:watch', 'test:server']);
