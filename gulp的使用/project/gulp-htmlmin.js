var gulp = require("gulp"),
    htmlmin = require('gulp-htmlmin');

// gulp-htmlmin插件的基本用法
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./min_html'));
});


gulp.task("default", function(){
    console.log('hello world');
});