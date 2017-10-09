var fileinclude = require('gulp-file-include'),
    DOMParser = require('xmldom').DOMParser,
    gulp = require('gulp');

    gulp.task('fileinclude', function() {
      gulp.src(['index.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
    });

gulp.task('default', function() {
    var DOMParser = require('xmldom').DOMParser;
    var doc = new DOMParser();
});
