'use strict';

// Include gulp
var gulp = require('gulp');

// Include Our Plugins

var bowerFiles = require('main-bower-files');
//var clean = require('gulp-clean');
var inject = require('gulp-inject');
var es = require('event-stream');
//var ngAnnotate = require('gulp-ng-annotate');
var angularFilesort = require('gulp-angular-filesort');
//var templateCache = require('gulp-angular-templatecache');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var htmlify = require('gulp-angular-htmlify');
//var sourcemaps = require('gulp-sourcemaps');
//var minifyHTML = require('gulp-minify-html');
//var minifyCSS = require('gulp-minify-css');
//var imagemin = require('gulp-imagemin');
//var pngcrush = require('imagemin-pngcrush');
//var filter = require('gulp-filter');


gulp.task('build', function () {

  //get css files
  var cssFiles = gulp.src(['app/**/*.css']);

  //get js files, be sure to sort for angular
  var jsFiles =   //include all the js files, ignore test files
    gulp.src([
      'app/**/*.js',
      '!app/**/*-test.js',
      '!app/**/*.test.js'])
      .pipe(angularFilesort());


  //upload files into index.html page
  gulp.src('./app/index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: true}), {
      name: 'bower',
      addRootSlash: false,
      relative: true
    }))
    .pipe(inject(es.merge(
      cssFiles,
      jsFiles), {
      addRootSlash: false,
      ignorePath: 'app'
    }))
    .pipe(gulp.dest('./app'));

});

// Default Task
gulp.task('default', ['build']);
