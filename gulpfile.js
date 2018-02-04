var gulp    = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('sync', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./*.html", "./css/*.css", "./js/*.js"]).on('change', browserSync.reload);
})