'use strict';

var gulp = require('gulp'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	util = require('gulp-util'),
	addsrc = require('gulp-add-src');

gulp.task('css', function() {
	gulp.src('css/main.scss')
	.pipe(sass().on('error', util.log))
	.pipe(rename('all.min.css'))
	.pipe(minify())
	.pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
	gulp.src(['src/components/*.js', 'src/app.js'])
	.pipe(babel().on('error', util.log))
	.pipe(addsrc.prepend(['node_modules/vue/dist/vue.js', 'node_modules/vue-resource/dist/vue-resource.js']))
	.pipe(concat('all.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
	gulp.watch('css/**/*.scss', ['css']);
	gulp.watch(['src/**/*.js'], ['js']);
});

gulp.task('default', ['watch']);
