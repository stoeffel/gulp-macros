var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    mochaConfig = {
      reporter: 'spec'
    };

task 'default' {
  @ 'setup.test.js', { read: false };
  | mocha(mochaConfig);
}

task 'watch' {
  watch 'test.js', ['default'];
}
