var gulp = require('gulp');
var typescript = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('typescript', function () {
    gulp.src(['./TypeScriptHTMLApp1/**/*.ts'])
		.pipe(typescript('./tsconfig.json')).js
		.pipe(gulp.dest('./tempJs'));

    browserify("./tempJs/app.js").bundle()
        .pipe(source("app.js"))
		.pipe(gulp.dest('./TypeScriptHTMLApp1'));
});

gulp.task('default', function () {
	gulp.watch('TypeScriptHTMLApp1/**/*.ts',['typescript']);
});
