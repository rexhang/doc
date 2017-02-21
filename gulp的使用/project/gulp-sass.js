var gulp = require("gulp"),
    sass = require('gulp-sass');

// gulp-sass插件的基本用法
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./compile_sass'));
});

// 动态监听
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task("default", function(){
    console.log('hello world');
});