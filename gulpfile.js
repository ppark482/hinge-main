var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	vendorFiles = require('./vendorFiles.json');

gulp.task('sass', function () {
	return gulp.src('./assets/styles/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('vendor-css', function () {
	return gulp.src(vendorFiles.styles)
	.pipe(concat('vendor.css'))
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src(['main/app.js', 'main/routes.js', './components/**/*.js'])
    .pipe( concat('main.js'))
    .pipe( uglify() )
    .pipe( gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('vendor-js', function() {
	return gulp.src(vendorFiles.scripts)
	.pipe( concat('vendor.js'))
	.pipe( uglify() )
	.pipe( gulp.dest('./dist'))
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

gulp.task('templates', function() {
	var components = gulp.src('./components/**/*.html')
	.pipe( gulp.dest('./dist/templates/components'))
	.pipe(connect.reload());
	var main = gulp.src('./main/**/*.html')
	.pipe( gulp.dest('./dist/templates/main'))
	.pipe(connect.reload());
	return [components, main];
});

gulp.task('connect', function(){
	return connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('watch', function () {
	gulp.watch(['./assets/styles/*.scss', './components/**/*.scss'],['sass']);
    gulp.watch(['./assets/js/*.js', './components/**/*.js'],['js']);
	gulp.watch(['./assets/img/**/*.jpg', './assets/img/**/*.png', './assets/img/**/*.svg'],['images']);
    gulp.watch(['./index.html', './components/**/*.html'],['html']);
	gulp.watch(['./components/**/*.html', './main/**/*.html'],['templates']);
});

gulp.task('default', ['js', 'vendor-js', 'sass', 'vendor-css', 'templates', 'html', 'images', 'connect', 'watch']);

gulp.task('build', ['js', 'vendor-js', 'sass', 'vendor-css', 'html', 'images']);