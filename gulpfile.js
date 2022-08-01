var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var del = require('del');

var wait = require('gulp-wait');

var setting = {
  autoprefixer: {
      browser: ['last 2 version', 'Explorer >= 11', 'Android >= 4']
  },
  // browserSync: {
  //   server:{
  //       baseDir: 'httpdocs',
        //      proxy: "localhost:3000"
  //   },
  // },
  imagemin: {
    disabled: false,  // falseでimageminを実行
    level: 7  // 圧縮率
  },
  // css、jsのミニファイの有効化/無効化
  // minify: {
  //   css: false,
  //   js: false
  // },
  minify: {
    css: true,
    js: false
  },
  cssbeautify: {
    disabled: true,
    options: {
      indent: ''
    }
  },
  csscomb: {
    disabled: true,
  },
  path: {
    // base: {
    //   src: 'assets',
    //   dest: 'assets'
    //   // dest: 'httpdocs'
    // },
    sass: {
      //link main scss
      src: 'assets/scss/**/*.scss',
      dest: 'assets/css/',

      // link css use generally for blocks in layout admin
      // src: 'admin/scss/**/*.scss',
      // dest: 'admin/css/',
    }
  }
};

// SASS
gulp.task('scss',function(){
  return gulp.src(setting.path.sass.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
    })).pipe(wait(200))
    .pipe($.sass({outputStyle: 'expanded'}))
    .pipe($.autoprefixer(setting.autoprefixer.browser))
    .pipe(gulp.dest(setting.path.sass.dest));
    // .pipe(browserSync.reload({stream: true}));
});

// Include
gulp.task('include', function(){
  return gulp.src(
      setting.path.include.src
    )
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe($.changed(setting.path.include.dest))
    .pipe(gulp.dest(setting.path.include.dest));
    // .pipe(browserSync.reload({stream: true}));
});

// Etc
gulp.task('etc', function(){
  return gulp.src(
      setting.path.etc.src
    )
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe($.changed(setting.path.etc.dest))
    .pipe(gulp.dest(setting.path.etc.dest));
    // .pipe(browserSync.reload({stream: true}));
});

// JS Minify
gulp.task('jsminify', function(){
  if(setting.minify.js){
    return gulp.src(setting.path.js.dest+'**/*.js')
      .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
      }))
      .pipe($.uglify())
      .pipe(gulp.dest(setting.path.js.dest));
  }
});

// CSS Minify
gulp.task('cssminify', function(){
  if(setting.minify.css){
    return gulp.src(setting.path.sass.dest+'**/common.css')
      .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
      }))
      .pipe($.csso())
      .pipe(gulp.dest(setting.path.sass.dest));
  }
});

// CSS Beautify
gulp.task('cssbeautify', function(){
  if(!setting.cssbeautify.disabled && !setting.minify.css){
    return gulp.src(setting.path.sass.dest+'**/*.css')
      .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
      }))
      .pipe($.cssbeautify(setting.cssbeautify.options))
      .pipe(gulp.dest(setting.path.sass.dest));
  }
});

// CSS Comb
gulp.task('csscomb', function(){
  if(!setting.csscomb.disabled && !setting.minify.css){
    return gulp.src(setting.path.sass.dest+'**/*.css')
      .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
      }))
      .pipe($.csscomb())
      .pipe(gulp.dest(setting.path.sass.dest));
  }
});

// Clean
//gulp.task('clean', del.bind(null, setting.path.base.dest));

// Build
// gulp.task('build', function(){
//   return runSequence(
//     ['clean'],
//     ['html', 'js', 'scss', 'lib', 'include', 'etc'],
//     ['csscomb'],
//     ['imagemin', 'cssminify', 'jsminify', 'cssbeautify']
//     );
// });

// Watch
gulp.task('watch', function(){
  // browserSync.init(setting.browserSync);

  gulp.watch([setting.path.sass.src], ['scss']);
  // gulp.watch([setting.path.sass.src], ['cssminify']);
  // gulp.watch([setting.path.sass.src], ['cssbeautify']);
  // gulp.watch([setting.path.js.src], ['js']);
  // gulp.watch([setting.path.lib.src], ['lib']);
  // gulp.watch([setting.path.include.src], ['include']);
  // gulp.watch([setting.path.etc.src], ['etc']);
  // gulp.watch([setting.path.html.src], ['html']);
  // gulp.watch([setting.path.image.src], ['imagemin']);
});

gulp.task('default',['watch']);
