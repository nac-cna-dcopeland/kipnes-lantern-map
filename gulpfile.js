'use strict';

let browserSync = require('browser-sync').create();
let gulp = require('gulp');

// BrowserSync Task (Live reload)
gulp.task('browserSync', function() {
	browserSync.init({
		open: "external",
		host: "lantern.map",
		proxy: "lantern.map", // 'dev.site.com' in your example
		port: 8080
	})
});

// Gulp Watch Task
gulp.task('watch', ['browserSync'], function () {
  gulp.watch('./dist/app.css').on('change', browserSync.reload);
  gulp.watch('./dist/app.js').on('change', browserSync.reload);
  gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

// Gulp Default Task
gulp.task('default', ['watch']);
