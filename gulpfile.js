var 	gulp = require('gulp'),
		serve = require('gulp-webserver'),
		connect = require('gulp-connect'),
		sass = require('gulp-sass');

gulp.task('default', ['connect', 'serve']);

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

});