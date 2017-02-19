var gulp = require("gulp"),
    cssmin = require('gulp-minify-css'), // 引入gulp-minify-css插件模块
    clean = require('gulp-clean');

// gulp-minify-css插件的基本用法
gulp.task('css_min', function(){
    gulp.src('./css/*.css')
        .pipe(cssmin({
            advanced: false, // 类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7', // 保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true, // 类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*' // 保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('./min_css'));
});

// ps：小技巧，添加任务依赖的知识
gulp.task('css_min2', ['default'], function(){
    gulp.src('./css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./min_css'));
});

// gulp-clean插件的基本用法
gulp.task('clean_all', function(){
    gulp.src('./min_css/*.css', { read:false }) // 配置参数read:false 不进行文件的读取 能够更快速的清除文件
            .pipe(clean());
});
// ps：小技巧，异步执行的知识
gulp.task('clen_files', ['default'], function(){
    gulp.start('clean_all', 'css_min');
});

gulp.task("default", function(){
    console.log('hello world');
});