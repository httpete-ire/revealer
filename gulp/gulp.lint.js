var gulp = require('gulp');
var $ = plugins = require('gulp-load-plugins')();
var config = require('./gulp.config').config;

gulp.task('lint:server:watch', function() {
  gulp.watch(config.js.server, ['lint:server']);
});

gulp.task('lint:client:watch', function() {
  gulp.watch(config.js.client, ['lint:client']);
});

gulp.task('lint', function() {
  var paths = [config.js.server, config.js.client];
  return lint(paths);
});

gulp.task('lint:server', function() {
  return lint(config.js.server);
});

gulp.task('lint:client', function() {
  return lint(config.js.client);
});

function lint(src) {
  return gulp.src(src)
    .pipe($.jshint('./.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.notify({
      onLast: false,
      message: function(file) {
        if (file.jshint.success) {
          // Don't show something if success
          return false;
        }

        return file.relative + ' (' + file.jshint.results.length + ' errors)\n';
      },

      sound: 'Submarine'
    }));
}
