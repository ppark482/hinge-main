var 	gulp = require('gulp'),
			webserver = require('gulp-webserver'),
			serve = webserver({
				livereload: true,
				directoryListing: true,
				open: true,
				port: 8080
			}),
			connect = require('gulp-connect'),
			sass = require('gulp-sass'),
			concat = require('gulp-concat'),
			uglify = require('gulp-uglify');

gulp.task('default', ['js', 'sass', 'html', 'connect', 'serve', 'watch']);

gulp.task('sass', function () {
  gulp.src('./assets/css/main.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
    .pipe(gulp.dest('./dist'))
		.pipe( serve());
});

gulp.task('js', function() {
  return gulp.src('./assets/*.js')
    .pipe( concat('main.js'))
    .pipe( uglify() )
    .pipe( gulp.dest('./dist/'))
		.pipe( serve());
});

gulp.task('html', function() {
  return gulp.src(['./index.html'])
    .pipe( gulp.dest('./dist/'))
		.pipe( serve());
});

gulp.task('sass', function () {
  gulp.src('./assets/css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('serve', function(){
	serve({
		livereload: true,
		directoryListing: true,
		open: true,
		port: 8080
	})
});

gulp.task('connect', function(){
	connect.server();
});

gulp.task('watch', function () {
  gulp.watch('./assets/css/*.scss',['sass']);
  gulp.watch('./assets/js/*.js',['js']);
  gulp.watch('./index.html',['html']);
});