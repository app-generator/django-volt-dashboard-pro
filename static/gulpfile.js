/*

=========================================================
* AppSeed - Simple SCSS compiler via Gulp
=========================================================

*/

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var wait = require('gulp-wait');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

// Define paths
const paths = {
    src: {
        base: './',
        css: './css',
        html: './pages/**/*.html',
        js: './js/',
        assets: './assets/**/*.*',
        partials: './partials/**/*.html',
        scss: './scss',
        node_modules: './node_modules/',
        vendor: './vendor'
    }
};

// Compile SCSS
gulp.task('scss', function () {
    return gulp.src([paths.src.scss + '/custom/**/*.scss', paths.src.scss + '/volt/**/*.scss', paths.src.scss + '/volt.scss'])
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.src.css))
        .pipe(browserSync.stream());
});

// Minify CSS
gulp.task('min_css', function() {
    return gulp.src([
            paths.src.css + '/volt.css'
        ])
        .pipe(cleanCss())
        .pipe(rename(function(path) {
            // Updates the object in-place
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest(paths.src.css))
});

// Default
gulp.task('default', gulp.series('scss', 'min_css'));