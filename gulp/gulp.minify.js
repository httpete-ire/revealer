var gulp = require('gulp');
var $ = plugins = require('gulp-load-plugins')();
var config = require('./gulp.config').config;

gulp.task('clean', function() {
  return gulp
    .src(config.build)
    .pipe($.clean());
});

gulp.task('minify', ['clean'], function() {
  return gulp
    .src(config.js.client)
    .pipe($.ngAnnotate())
    .pipe($.concat('app.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(config.build));
});
