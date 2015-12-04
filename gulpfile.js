'use strict';

var gulp = require('gulp'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	util = require('gulp-util');

gulp.task('js', function() {
	gulp.src(['src/components/*.js', 'src/app.js'])
	.pipe(babel().on('error', util.log))
	.pipe(concat('../dist/all.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('src'))
});

gulp.task('watch', function() {
	gulp.watch(['src/**/*.js'], ['js']);
});

gulp.task('default', ['watch']);
