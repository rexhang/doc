var gulp        = require("gulp"),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    sass        = require('gulp-sass');


// gulp-sass插件的基本用法
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./compile_sass'))
    .pipe(reload({stream: true}));
});

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 7766,
        //notify: false,
        startPath: "/index.html" // 默认打开根目录后面跟的文件名配置
    });
    gulp.watch("./sass/*.scss", ['sass']); // 监听文件变动 重新编译 并且 自动注入到浏览器
    gulp.watch("./*.html").on('change', reload); // 监听文件变动 刷新浏览器
});


gulp.task("default", function(){
    console.log('hello world');
});