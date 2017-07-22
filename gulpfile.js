var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

var gzip_options = {
    threshold: '1kb',
    gzipOptions: {
        level: 9
    }
};

/* Compile Sass */
gulp.task('sass', function() {
    return gulp.src('website/static/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('website/static/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('website/static/css'))
        .pipe(livereload());
});

/* Watch Files For Changes */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('**/website/static/scss/*.scss', ['sass']);

    /* Trigger a live reload on any Django template changes */
    gulp.watch('**/templates/*').on('change', livereload.changed);

});

gulp.task('default', ['sass', 'watch', 'symlink']);