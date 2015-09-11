var 	gulp = require('gulp'),
			serve = require('gulp-webserver'),
			connect = require('gulp-connect');

gulp.task('default', ['connect', 'serve']);

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