var gulp = require("gulp");
var babel = require("gulp-babel");
var chokidar = require("chokidar")
var sequence = require("gulp-sequence")
gulp.task("esto", function () {
    gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('ting', function() {
    chokidar.watch("src/**/*.js").on("all",()=>{
        sequence(["esto"],()=>{
            console.log("转义改变")
        })
    })
});


gulp.task("default",["esto","ting"], function() {
    console.log("执行成功")
});