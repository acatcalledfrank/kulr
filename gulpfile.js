var gulp = require('gulp'),
    ts = require('gulp-typescript');


//  compile into multiple files

// var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    return gulp.src(['src/**/*.ts', '!**/*.test.ts'])
        .pipe(ts())
        .pipe(gulp.dest('build/lib'));
});