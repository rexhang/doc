var gulp = require("gulp"),
    imagemin = require('gulp-imagemin');

// 详细参数
var options = {
    optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
    progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
    interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
    multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
}
 
// gulp-imagemin插件的基本用法
gulp.task('imgmin', function () {
    gulp.src('./img/*.{png,jpg,gif,ico}')
        .pipe(imagemin(options))
        .pipe(gulp.dest('./min_img'));
});

gulp.task("default", function(){
    console.log('hello world');
});