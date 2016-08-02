'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
// var imagemin = require('imagemin');
// var imageminPngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');

gulp.task('css', function () {
  gulp.src('src/style/concat/*.css')
    .pipe(uglifycss({
      "maxLineLen": 100,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('concat-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('src/js/concat/'));
});

gulp.task('concat-css', function () {
  return gulp.src('src/style/*.css')
    .pipe(concatCss("style.min.css"))
    .pipe(gulp.dest('src/style/concat/'));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('sprite'));
});
// imagemin(['img/*.png'], 'dist/images', {use: [imageminPngquant()]}).then(() => {
// 	console.log('Images optimized');
// });
gulp.task('default', function () {
	return gulp.src('style/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});
gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/js/concat/*.js'),
        uglify(),
        gulp.dest('dist/js/')
    ],
    cb
  );
});
// gulp.task('default', () =>
// 	gulp.src('img/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/images'))
// );
gulp.task('sass', function () {
  return gulp.src('src/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/style/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/style/*.scss', ['sass']);
});
