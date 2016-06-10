var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    webpack = require('webpack-stream');


//  compile into single file

gulp.task('compile-to-bin', function ()
    {
        return gulp.src('src/ts/ColourPicker.ts')
            .pipe(webpack( require('./webpack.config.js') ))
            .pipe(gulp.dest('build/bin'));
    });



//  compile into multiple files

var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile-to-lib', function()
    {
        gulp.src('./src/ts/**/*.ts')
           .pipe(ts(tsProject))
           .js.pipe(gulp.dest('build/lib'));
    });



//  compile tests

gulp.task('compile-tests', function ()
    {
        return gulp.src('test/**/*.ts')
           .pipe(ts({
               noImplicitAny: true
           }))
           .pipe(gulp.dest('test'));
    });




//  watch

gulp.task('watch', ['compile-to-bin', 'compile-to-lib', 'compile-tests'], function()
    {
        gulp.watch('./src/ts/**/*.ts', ['compile-to-bin', 'compile-to-lib']);
        gulp.watch('./test/**/*.ts', ['compile-tests']);
    });


//  default task

gulp.task('default', function()
{

});