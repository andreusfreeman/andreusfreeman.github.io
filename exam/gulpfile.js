'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
// var imagemin = require('imagemin');
// var imageminPngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('sprite/*.png').pipe(spritesmith({
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
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist')
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
  return gulp.src('style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});

gulp.task('sass:watch', function () {
  gulp.watch('style/*.scss', ['sass']);
});
