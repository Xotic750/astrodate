/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerMultiTask('buildFromTzdata', 'Build the js files from the tzdata.', function () {
            var templateFile = this.data.leapSeconds,
                source = this.data.src,
                destination = this.data.dest,
                listFile = source + '/leap-seconds.list',
                leapSecondsFile = source + '/leapseconds',
                version = grunt.config.get('pkg.version'),
                listContent,
                leapSecondsContent,
                template,
                leapSeconds = {},
                matched,
                version1;

            if (grunt.file.exists(listFile)) {
                listContent = grunt.file.read(listFile);
            } else {
                throw new Error('Missing leap-seconds.list: ' + listFile);
            }

            if (grunt.file.exists(leapSecondsFile)) {
                leapSecondsContent = grunt.file.read(leapSecondsFile);
            } else {
                throw new Error('Missing leapseconds: ' + leapSecondsFile);
            }

            if (grunt.file.exists(templateFile)) {
                template = grunt.file.read(templateFile);
            } else {
                throw new Error('Missing leapSecond template: ' + templateFile);
            }

            version1 = (listContent.match(/Updated through IERS Bulletin C(\d+)/) || [])[1];
            matched = leapSecondsContent.match(/(Leap\s+(\d{4})\s+(\w{3})\s+(\d{1,2})\s+\d{2}:\d{2}:\d{2}\s+([\-+])\s+S)/g);
            matched.forEach(function (match) {
                var subMatch = (match.match(/Leap\s+(\d{4})\s+(\w{3})\s+(\d{1,2})\s+\d{2}:\d{2}:\d{2}\s+([\-+])\s+/) || []).slice(1);

                if (!leapSeconds[subMatch[0]]) {
                    leapSeconds[subMatch[0]] = {};
                }

                leapSeconds[subMatch[0]][subMatch[1]] = {};
                leapSeconds[subMatch[0]][subMatch[1]][subMatch[2]] = subMatch[3] === '+' ? '1' : '-1';
            });

            grunt.file.write(destination + '/leapSeconds.js', template
                .replace(/@@VERSION/g, grunt.config.get('pkg.version'))
                .replace(/@@AUTHOR/g, grunt.config.get('pkg.author'))
                .replace(/@@HOMEPAGE/g, grunt.config.get('pkg.homepage'))
                .replace(/@@version1/g, version1)
                .replace(/@@data/g, JSON.stringify(leapSeconds).replace(/"/g, '\'')));

            grunt.log.writeln('File "' + destination + '/leapSeconds.js" created.');
            grunt.log.writeln(this.target + ': OK');
        });
    };
}());
