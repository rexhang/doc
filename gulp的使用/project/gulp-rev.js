var gulp = require('gulp');
var rev = require('gulp-rev'),  // 生成添加版本号文件
revReplace = require('gulp-rev-replace'); // 自动加入文件

gulp.task('setTimeStamp', function(){
    gulp.src('./css/index.css')
        .pipe(gulp.dest('md5/css'))
                .pipe(rev()) // 生成添加版本号文件
                .pipe(gulp.dest('md5/css'))
                .pipe(rev.manifest()) // 生成map文件
                .pipe(gulp.dest('md5/css'));
});

gulp.task('revesion', ['setTimeStamp'], function(){
    var manifestFile = gulp.src('./md5/css/rev-manifest.json');
    return gulp.src('./rev.html')
        .pipe(revReplace({manifest: manifestFile}))
        .pipe(gulp.dest('./rev_html'));
});