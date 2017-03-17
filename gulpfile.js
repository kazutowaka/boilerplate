var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var sass = require('gulp-ruby-sass');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var $ = require('gulp-load-plugins')();

var AUTOPREFIXER_BROWSERS = [
  'last 3 Chrome versions',
  'last 3 ff versions',
  'Safari >= 8',
  'ie >= 9',
  'android >= 4.4',
  'iOS >= 8'
];

/*
 * Browser-sync.
 */
gulp.task('bs', function() {
  return browserSync.init({
    server: {
      baseDir: ['htdocs/']
    },
    notify: false,
    open: false,
    reloadOnRestart: true
  });
});


/*
 * Sass compile + csslint.
 */
gulp.task('sass', function() {
  return sass('htdocs/**/*.scss', {
      style: 'expanded',
      sourcemap: false,
      loadPath: process.cwd() + '/htdocs/assets/_sass'
    })
    .pipe($.rename(function(data) {
      data.dirname = path.join(data.dirname, '..', 'css');
    }))
    .pipe(gulp.dest('htdocs/'))
    .pipe($.csscomb())
    .pipe($.pleeease({
      autoprefixer: { browsers: AUTOPREFIXER_BROWSERS },
      minifier: false,
      rem: false,
      opacity: false,
      pseudoElements: false
    }))
    // .pipe($.csslint.reporter())
    .pipe(browserSync.stream({
      once: true
    }));
});


/*
 * Browserify.
 */
compile = function(watch) {
  var bundle, bundler, option;
  bundler = null;
  option = {
    debug: false
  };

  bundle = function() {
    return bundler
      .bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('all.js'))
      .pipe(gulp.dest('./htdocs/assets/js'))
      .pipe(browserSync.stream({
        once: true
      }));
  };

  if (watch) {
    option.cache = {};
    option.packageCache = {};
    option.fullPaths = false;
    bundler = watchify(browserify('./htdocs/assets/js/_all.js', option));
  } else {
    bundler = browserify('./htdocs/assets/js/_all.js', option);
  }

  bundler.on('update', bundle);
  bundler.on('log', function(msg) {
    $.util.log('Finished', '\'' + $.util.colors.cyan('watchify') + '\'', msg);
  });
  return bundle();
};

gulp.task('browserify', function() {
  return compile(false);
});

gulp.task('watchify', function() {
  return compile(true);
});


/*
 * jshint.
 */
gulp.task('jshint', function() {
  return gulp.src([
      'htdocs/assets/all.js'
    ])
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter(stylish));
});


/*
 * htmlhint.
 */
gulp.task('htmlhint', function() {
  return gulp.src([
      'htdocs/**/*.html'
    ])
    .pipe($.htmlhint('.htmlhintrc'))
    .pipe($.htmlhint.reporter())
    .pipe(browserSync.stream({
      stream: true
    }));
});


/*
 * watch.
 */
gulp.task('watch', function() {

  gulp.watch(
    ['htdocs/**/*.scss'],
    ['sass']
  );

  gulp.watch(
    ['htdocs/**/*.html'],
    ['htmlhint']
  );

});


/*
 * task.
 */
gulp.task('default', ['bs', 'watch', 'watchify']);
