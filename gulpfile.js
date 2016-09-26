var gulp = require('gulp'),
  sassLint = require('gulp-sass-lint');

  gulp.task('lint:sass', function() {
    return gulp.src('*.scss')
      .pipe(sassLint())
      .pipe(sassLint.format());
  });