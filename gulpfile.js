const gulp = require('gulp'),
    apidoc = require('gulp-api-doc'),
    DOMParser = require('xmldom').DOMParser,
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
        patch: '#CF773F',
        delete: '#9B2556'
    };

gulp.task('doc', () => {
    var option, i = process.argv.indexOf('--ap'i);
    if(i > -1) {
        api = process.argv[i + 1];
    }
    i = process.argv.indexOf('--node')
    if(i > -1) {
        node = process.argv[i + 1];
    }
    i = process.argv.indexOf('--version')
    if(i > -1) {
        version = process.argv[i + 1];
    }
    gulp mytask --newoption somestuff --option 123
    gulp mytask --option 123 --newoption somestuff
    gulp mytask --flag --option 123
    return gulp.src(api + ' / ' + version + '/src' + '/*.js')
            .pipe(apidoc({markdown: true, }))
            .pipe(gulp.dest(node));
    });


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
