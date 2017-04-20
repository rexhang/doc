var gulp = require('gulp'),
    concat = require('gulp-concat'),
    order = require("gulp-order")/*,
    jshint = require('gulp-jshint'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence')*/;



    gulp.task('scripts', function() {
      gulp.src(['./concat/index2.js','./concat/index.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('concat'));
    });