var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	vendorFiles = require('./vendorFiles.json'),
	tasks = [];

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
	return gulp.src(['main/app.js', 'main/routes.js', './components/**/*.js', './shared/**/*.js'])
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

gulp.task('fonts', function(){
	return gulp.src('./assets/fonts/*')
    .pipe( gulp.dest('./dist/fonts'))
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
	return [main, components];
});

gulp.task('json', function() {
	var slideshow = gulp.src(['./slideshow.json'])
	.pipe( gulp.dest('./dist'))
	.pipe(connect.reload());
	var portfolio = gulp.src(['./portfolio.json'])
	.pipe( gulp.dest('./dist'))
	.pipe(connect.reload());
});

gulp.task('connect', function(){
	return connect.server({
		root: 'dist',
		livereload: true
	});
});

tasks = ['js', 'vendor-js', 'sass', 'vendor-css', 'html', 'images', 'fonts', 'json'];

gulp.task('build', tasks);

tasks.push('connect');

gulp.task('watch', tasks, function () {
	gulp.watch(['./assets/styles/*.scss', './components/**/*.scss'],['sass']);
    gulp.watch(['./assets/js/*.js', './components/**/*.js', './shared/**/*.js'],['js']);
	gulp.watch(['./assets/img/**/*.jpg', './assets/img/**/*.png', './assets/img/**/*.svg'],['images']);
    gulp.watch(['./index.html', './main/**/*.html', './components/**/*.html'],['html', 'templates']);
	gulp.watch(['./slideshow.json'],['json']);
	tasks.push('watch');
});

gulp.task('default', tasks);
