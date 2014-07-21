
var projectName = 'jackieandlevi',
    SCRIPTS_SRC = 'src/scripts/**/*.js',
    STYLES_GLOB_SRC = 'src/styles/**/*.scss',
    STYLES_MAIN_SRC = 'src/styles/main.scss',
    IMAGES_SRC = 'src/images/**/*',
    DIST = 'dist',
    SCRIPTS_DIST = DIST + '/scripts',
    STYLES_DIST = DIST + '/styles',
    IMAGES_DIST = DIST + '/images',
    sourcemapPath = '../src/scss',
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src(SCRIPTS_SRC)
//      .pipe(plugins.jshint('.jshintrc'))
//      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat(projectName + '.js'))
      .pipe(gulp.dest(SCRIPTS_DIST))
      .pipe(plugins.filesize())
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(SCRIPTS_DIST))
      .pipe(plugins.filesize())
      .pipe(plugins.notify({message: 'scripts task complete'}));
});

gulp.task('styles', function () {
  return gulp.src(STYLES_MAIN_SRC)
      .pipe(plugins.rubySass({style: 'expanded', sourcemap: true, sourcemapPath: sourcemapPath}))
      .pipe(plugins.autoprefixer('last 2 version'))
      .pipe(gulp.dest(STYLES_DIST))
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest(STYLES_DIST))
      .pipe(plugins.notify({message: 'styles task complete'}));
});

gulp.task('images', function () {
  return gulp.src(IMAGES_SRC)
      .pipe(plugins.cache(plugins.imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
      .pipe(gulp.dest(IMAGES_DIST))
      .pipe(plugins.notify({message: 'images task complete'}));
});

gulp.task('bump', function () {
  gulp.src(['./bower.json', './package.json'])
      .pipe(bump({type: 'patch'})) // 'major'|'minor'|'patch'|'prerelease'
      .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
  return gulp.src(DIST, {read: false})
      .pipe(plugins.clean());
});

gulp.task('default', ['clean'], function () {
  gulp.start('styles', 'scripts', 'watch');//, 'images');// TODO: add image compression for future, image-dependent projects
});

gulp.task('watch', function () {
  var server = plugins.livereload();

  gulp.watch(DIST + '/**').on('change', function (file) {
    server.changed(file.path);
  });

  gulp.watch(STYLES_GLOB_SRC, ['styles']);

  gulp.watch(SCRIPTS_SRC, ['scripts']);

  gulp.watch(IMAGES_SRC, ['images']);
});