/*global module, require */

(function () {
    'use strict';

    var json = typeof JSON === 'object' && null !== JSON ? JSON : require('jsonify');

    module.exports = function (grunt) {
        grunt.registerMultiTask('buildLanguage', 'Build the language.json file from the CLDR data.', function () {
            var source = this.data.src,
                destination = this.data.dest,
                merged = {},
                langList = [],
                supplementalPath,
                file;

            grunt.file.expand({ filter: 'isDirectory'}, [source + '/!(supplemental)*']).forEach(function (path) {
                var langFile = path + '/ca-gregorian.json',
                    dates,
                    prop,
                    lang;

                if (grunt.file.exists(langFile)) {
                    lang = path.split('/').slice(-1)[0];
                    merged[lang] = {};
                    merged[lang].dates = grunt.file.readJSON(langFile).main[lang].dates;
                } else {
                    throw new Error('Missing: ' + langFile);
                }

                langFile = path + '/timeZoneNames.json';
                if (grunt.file.exists(langFile)) {
                    dates = grunt.file.readJSON(langFile).main[lang].dates;
                    delete dates.timeZoneNames.zone;
                    delete dates.timeZoneNames.metazone;
                    for (prop in dates) {
                        if (dates.hasOwnProperty(prop)) {
                            merged[lang].dates[prop] = dates[prop];
                        }
                    }
                } else {
                    throw new Error('Missing: ' + langFile);
                }

                lang = lang.replace('-', '_');
                langList.push(lang);
            });

            grunt.file.write(destination + '/language.json', json.stringify(merged, null, 4));
            grunt.log.writeln('File "' + destination + '/language.json" created.');

            supplementalPath = source + '/supplemental';
            file = supplementalPath + '/likelySubtags.json';
            if (grunt.file.exists(file)) {
                merged = {};
                merged.likelySubtags = grunt.file.readJSON(file).supplemental.likelySubtags;
            } else {
                throw new Error('Missing: ' + file);
            }

            file = supplementalPath + '/timeData.json';
            if (grunt.file.exists(file)) {
                merged.timeData = grunt.file.readJSON(file).supplemental.timeData;
            } else {
                throw new Error('Missing: ' + file);
            }

            file = supplementalPath + '/weekData.json';
            if (grunt.file.exists(file)) {
                merged.weekData = grunt.file.readJSON(file).supplemental.weekData;
            } else {
                throw new Error('Missing: ' + file);
            }

            grunt.file.write(destination + '/supplemental.json', json.stringify(merged, null, 4));
            grunt.log.writeln('File "' + destination + '/supplemental.json" created.');
            grunt.config.set('buildLanguages.langList', langList);
            grunt.log.writeln(this.target + ': OK');
        });
    };
}());
