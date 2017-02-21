var gulp = require("gulp"),
    inject = require("gulp-inject");

// gulp-inject插件的基本用法
gulp.task('inject', function () {
    var sources = gulp.src(['./css/**/*.css', './js/**/*.js'], {read: false});
    return gulp.src(['./inject.html', './inject2.html'])
        .pipe(inject(sources))
        .pipe(gulp.dest('./injectFiles'));
});

gulp.task("default", function(){
    console.log('hello world');
});