module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'sinon'],
    plugins: [
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-sinon'
    ],
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/**/*.js',
      './test/**/*.js'
    ],
    reporters: ['spec']
  });
};
