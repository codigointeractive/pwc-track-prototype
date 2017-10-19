'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('clean:html', function () {
  return del('dist/**/*.html');
});

gulp.task('clean:css', function () {
  return del('dist/css');
});

gulp.task('clean:fonts', function () {
  return del('dist/fonts');
});

gulp.task('clean:images', function () {
  return del('dist/img');
});

gulp.task('html', ['clean:html'], function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
});

gulp.task('css', ['clean:css'], function () {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}));
});

gulp.task('fonts', ['clean:fonts'], function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(reload({stream: true}));
});

gulp.task('images', ['clean:images'], function () {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(reload({stream: true}));
});

gulp.task('build', ['html', 'css', 'fonts', 'images']);

gulp.task('serve', ['build'], function () {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('src/img/**/*', ['images']);
});

gulp.task('default', ['build']);
