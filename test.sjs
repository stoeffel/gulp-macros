var assert = require('assert'),
    gulp = require('./mocked-gulp'),
    foo = function() {
    };

describe('gulp-macros', function() {

  describe('task', function() {
    it('should expand to gulp.task', function() {
      task 'test' {
      }

      assert.equal(gulp.taskName, 'test');
    });
  });

  describe('@', function() {
    it('should expand to return gulp.src(path)', function() {
      gulp.clearSteps();
      
      task 'test' {
        @ 'src';
      }
      gulp.cb();
    assert.equal(gulp.srcPath, 'src');
    });
  });

  describe('|', function() {
    it('should expand to .pipe(task)', function() {
      gulp.clearSteps();
      
      task 'test' {
        @ 'src';
        | foo();
        | foo();
        | foo();
      }

      gulp.cb();

      assert.equal(gulp.countSteps, 3);
    });
  });

  describe('>', function() {
    it('should expand to .pipe(gulp.dest(path))', function() {
      task 'test' {
        @ 'src';
        | foo();
        | foo();
        | foo();
        > 'out';
      }

      gulp.cb();
      assert.equal(gulp.destPath, 'out');
    });
  });
});
