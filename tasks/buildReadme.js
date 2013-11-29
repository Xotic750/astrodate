/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerMultiTask('buildReadme', 'Build the README.md file.', function () {
            var templateFile = this.data.readme,
                destination = this.data.dest,
                langList = grunt.config.get('buildFromCLDR.langList'),
                mappedList,
                template;

            if (grunt.file.exists(templateFile)) {
                template = grunt.file.read(templateFile);
            } else {
                throw new Error('Missing README template: ' + templateFile);
            }

            mappedList = langList.map(function (element) {
                return '* ' + element;
            });

            grunt.file.write(destination, template
                .replace(/@@VERSION/g, grunt.config.get('pkg.version'))
                .replace(/@@AUTHOR/g, grunt.config.get('pkg.author'))
                .replace(/@@HOMEPAGE/g, grunt.config.get('pkg.homepage'))
                .replace(/@@LANGLIST/g, mappedList.join('\n')));

            grunt.log.writeln('File "' + destination + '" created.');
            grunt.log.writeln(this.target + ': OK');
        });
    };
}());
