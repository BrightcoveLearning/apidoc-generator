var fileinclude = require('gulp-file-include'),
    DOMParser = require('xmldom').DOMParser,
    gulp = require('gulp'),
    styleClasses = {
        table: 'bcls-table',
        thead: 'bcls-table__head',
        tbody: 'bcls-table__body',
        section: 'bcls-section',
        codeHttp: 'language-http',
        codeJson: 'language-json'
    },
    colors = {
        get: '#129129',
        post: '#4A5BBD',
        put: '#E4B842',
        patch: '#364885',
        delete: '#9B2556'
    };

    gulp.task('fileinclude', function() {
      gulp.src(['index.html']);
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
