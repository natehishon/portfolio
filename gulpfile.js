var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    min = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss');


gulp.task('default', ['cssmin']);
gulp.task('ready', ['cssmin', 'jsmin']);
gulp.task('css', ['cssmin']);
gulp.task('js', ['jsmin']);

gulp.task('sass', function () {

    return gulp.src([
        'node_modules/bulma/bulma.sass',
        'assets/sass/homepage.scss'


    ])
        .pipe(sass())
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('concatcss', ['sass'], function () {

    return gulp.src([
        'assets/css/bulma.css',
        'assets/css/homepage.css'



    ])
        .pipe(concat('all.css'))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('cssmin', ['concatcss'], function () {

    return gulp.src([
        'assets/css/all.css'

    ])
        .pipe(min())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
});

// gulp.task('concatjs', ['cssmin'], function() {
//
//     return gulp.src([
//         'www/assets/src/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js',
//         'www/assets/src/js/vendor/jquery.min.js',
//         'www/assets/src/js/vendor/jquery.validate.min.js',
//         'www/assets/src/js/vendor/jquery.additional-methods.min.js',
//         'www/assets/src/js/vendor/inputmask.js',
//         'www/assets/src/js/vendor/inputmask.phone.extensions.js',
//         'www/assets/src/js/vendor/inputmask.date.extensions.js',
//         'www/assets/src/js/vendor/jquery.inputmask.js',
//         'www/assets/src/js/vendor/select2.min.js',
//         'www/assets/src/js/vendor/slick.js',
//         'www/assets/src/js/vendor/plugins.js',
//         'www/assets/src/js/vendor/raphael.js',
//         'www/assets/src/js/vendor/jquery.usmap.js',
//         // 'www/assets/src/js/vendor/redactor/redactor.js',
//         'www/assets/src/js/location-selector.module.js',
//         'www/assets/src/js/map.module.js',
//         'www/assets/src/js/accordion.js',
//         'www/assets/src/js/main.js'
//     ])
//         .pipe( concat( 'all.js' ) )
//         .pipe( gulp.dest( 'www/assets/temp/js' ) );
// });
//
//
//
// gulp.task('jsmin', ['concatjs'], function () {
//
//     return gulp.src( 'www/assets/temp/js/all.js' )
//         .pipe( uglify() )
//         .pipe( rename({ suffix: '.min' }) )
//         .pipe( gulp.dest( 'www/assets/js' ) );
// });


// // image minification task
// gulp.task('imagemin', function() {
//     return gulp.src( 'www/assets/src/img/**/*' )
//         .pipe( imagemin() )
//         .pipe( gulp.dest( 'www/assets/img' ) )
// });
//
// gulp.task('watch', function() {
//
//     gulp.watch([ 'www/assets/sass/**/*' ], [ 'sass', 'sass-iframe' ]);
// });




