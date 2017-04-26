"use strict";

var gulp = require('gulp'),
    ts = require('gulp-typescript');

//  build the project into lib format

gulp.task('build-lib', function () {
    return gulp.src(['src/**/*.ts', '!**/*.test.ts'])
        .pipe(ts({
            target: 'es2015',
            module: 'commonjs',
            rootDir: 'src/ts',
            outDir: 'lib'
        }))
        .pipe(gulp.dest('.'));
});