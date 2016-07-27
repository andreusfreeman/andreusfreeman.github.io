var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/styles/*.scss', ['sass']);
});
