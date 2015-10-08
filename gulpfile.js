var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('default', ['js', 'vendor-js', 'sass', 'vendor-css', 'html', 'images', 'connect', 'watch']);

gulp.task('sass', function () {
	return gulp.src('./assets/css/sass/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('vendor-css', function () {
	return gulp.src('./assets/css/*.css')
	.pipe(concat('vendor.css'))
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src('./assets/js/*.js')
    .pipe( concat('main.js'))
    .pipe( uglify() )
    .pipe( gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('vendor-js', function() {
	return gulp.src('./assets/js/vendor/*.js')
	.pipe( uglify() )
	.pipe( gulp.dest('./dist/vendor-js'))
	.pipe(connect.reload());
});

gulp.task('images', function(){
	return gulp.src(['./assets/img/**/*.jpg', './assets/img/**/*.png', './assets/img/**/*.svg'])
    .pipe( gulp.dest('./dist/img'))
	.pipe(connect.reload());
});


gulp.task('html', function() {
	return gulp.src(['./index.html'])
	.pipe( gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('connect', function(){
	return connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('watch', function () {
	gulp.watch('./assets/css/sass/*.scss',['sass']);
	gulp.watch('./assets/css/*.css',['vendor-css']);
    gulp.watch('./assets/js/*.js',['js']);
	gulp.watch('./assets/js/vendor/*.js',['vendor-js']);
	gulp.watch(['./assets/img/**/*.jpg', './assets/img/**/*.png', './assets/img/**/*.svg'],['images']);
    gulp.watch('./index.html',['html']);
});