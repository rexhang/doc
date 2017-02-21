var gulp = require("gulp"),
    uglify = require("gulp-uglify");

// gulp-uglify插件的基本用法
gulp.task('jsmin', function () {
    gulp.src('./js/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('./min_js'));
});

// 详细参数
gulp.task('jsmin', function () {
    gulp.src(['./js/index.js', './js/index2.js']) // 可以传入多个 以数组格式传入
        .pipe(uglify({
            mangle: true, //类型：Boolean 默认：true 是否修改变量名
            //mangle: {except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
            compress: true, //类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('./min_js'));
});


gulp.task('default', function(){
    console.log('hello world');
});