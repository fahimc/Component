var minify = require('gulp-minify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var ext_replace = require('gulp-ext-replace');
var gap = require('gulp-append-prepend');
var concat = require('gulp-concat');
var requirejs = require('gulp-requirejs');
var browserify = require('browserify');
var fs = require("fs");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('browserify', function() {
    return browserify('test/module/src/components/components.js')
        .transform("babelify", { presets: ["env"] })
        .bundle()
        // Start piping stream to tasks!
        .pipe(fs.createWriteStream("test/module/src/components_all.js"));
});

gulp.task('test-module', function() {
    gulp.src(['test/module/src/components_all.js', 'test/module/src/main.js'])
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('test/module/'));
});

gulp.task('dist', function() {
    //es6 components
    gulp.src('src/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'));
    //es5 components
    gulp.src(['src/polyfills/*.js', 'src/*.js'])
        .pipe(concat('component.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ext_replace('.es5.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/es5 support'));
    //module components
    gulp.src('src/*.js')
        .pipe(gap.appendText('\nexport default Component;'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.module.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/module'));

    gulp.src(['example/src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('example'));


});

gulp.task('watch', ['dist'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['dist'], function() {

    browserSync.init({
        server: {
            baseDir: ['example/'],
            routes: {
                "/dist": "dist/"
            }
        }
    });
    gulp.watch("src/**/*.js", ['watch']);

    gulp.watch(["example/**/*", "!example/app.js", "!example/app.min.js"], ['watch']);
});