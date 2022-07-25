const gulp           = require('gulp');
const browserSync    = require('browser-sync');
const sass           = require('gulp-sass')(require('sass'));
const rename         = require("gulp-rename");
const autoprefixer   = require('gulp-autoprefixer');

// Static server
gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src('./sass/**/*.+(sass|scss)')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("./sass/*.+(sass|scss)", gulp.parallel('styles'));
    gulp.watch("./*.html").on("change", browserSync.reload);

});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));