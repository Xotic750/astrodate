/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerMultiTask('buildFromCLDR', 'Build the js files from the CLDR data.', function () {
            var cldrVersion = '_cldrVersion',
                number = '_number',
                nonDigitsRx = new RegExp('[^\\d]', 'g'),
                templateFile = this.data.language,
                source = this.data.src,
                destination = this.data.dest,
                langList = [],
                template,
                supplementalPath,
                file,
                version1,
                version2,
                version3,
                json,
                merged;

            if (grunt.file.exists(templateFile)) {
                template = grunt.file.read(templateFile);
            } else {
                throw new Error('Missing language template: ' + templateFile);
            }

            grunt.file.expand({ filter: 'isDirectory'}, [source + '/!(supplemental)*']).forEach(function (path) {
                var langFile = path + '/ca-gregorian.json',
                    dates,
                    prop,
                    lang;

                if (grunt.file.exists(langFile)) {
                    json = grunt.file.readJSON(langFile);
                    lang = path.split('/').slice(-1);
                    langList.push(lang);
                    dates = json.main[lang].dates;
                    version1 = json.main[lang].identity.version[cldrVersion] + 'r' + json.main[lang].identity.version[number].replace(nonDigitsRx, '');
                    merged = {};
                    merged.dates = dates;
                } else {
                    throw new Error('Missing: ' + langFile);
                }

                langFile = path + '/timeZoneNames.json';
                if (grunt.file.exists(langFile)) {
                    json = grunt.file.readJSON(langFile);
                    dates = json.main[lang].dates;
                    version2 = json.main[lang].identity.version[cldrVersion] + 'r' + json.main[lang].identity.version[number].replace(nonDigitsRx, '');
                    delete dates.timeZoneNames.zone;
                    delete dates.timeZoneNames.metazone;
                    for (prop in dates) {
                        if (dates.hasOwnProperty(prop)) {
                            merged.dates[prop] = dates[prop];
                        }
                    }
                } else {
                    throw new Error('Missing: ' + langFile);
                }

                grunt.file.write(destination + '/' + lang + '.js', template
                    .replace(/@@id/g, lang)
                    .replace(/@@VERSION/g, grunt.config.get('pkg.version'))
                    .replace(/@@AUTHORNAME/g, grunt.config.get('pkg.author.name'))
                    .replace(/@@AUTHOREMAIL/g, grunt.config.get('pkg.author.email'))
                    .replace(/@@HOMEPAGE/g, grunt.config.get('pkg.homepage'))
                    .replace(/@@COPYRIGHT/g, grunt.config.get('pkg.copyright'))
                    .replace(/@@MODULE/g, grunt.config.get('pkg.name'))
                    .replace(/@@LICENSE/g, grunt.config.get('pkg.licenses')[0].type)
                    .replace(/@@LICLINK/g, grunt.config.get('pkg.licenses')[0].url)
                    .replace(/@@version1/g, version1)
                    .replace(/@@version2/g, version2)
                    .replace(/@@data/g, JSON.stringify(merged)
                        .replace(/'/g, '@@singleQuote')
                        .replace(/\\"/g, '@@doubleQuote')
                        .replace(/"/g, '\'')
                        .replace(/@@doubleQuote/g, '"')
                        .replace(/@@singleQuote/g, '\\\'')
                        )
                    );

                grunt.log.writeln('File "' + destination + '/' + lang + '.js" created.');
            });

            templateFile = this.data.supplemental;
            if (grunt.file.exists(templateFile)) {
                template = grunt.file.read(templateFile);
            } else {
                throw new Error('Missing supplemental template: ' + templateFile);
            }

            supplementalPath = source + '/supplemental';
            file = supplementalPath + '/likelySubtags.json';
            if (grunt.file.exists(file)) {
                json = grunt.file.readJSON(file);
                merged = {};
                merged.likelySubtags = json.supplemental.likelySubtags;
                version1 = json.supplemental.version[cldrVersion] + 'r' + json.supplemental.version[number].replace(nonDigitsRx, '');
            } else {
                throw new Error('Missing: ' + file);
            }

            file = supplementalPath + '/timeData.json';
            if (grunt.file.exists(file)) {
                json = grunt.file.readJSON(file);
                merged.timeData = json.supplemental.timeData;
                version2 = json.supplemental.version[cldrVersion] + 'r' + json.supplemental.version[number].replace(nonDigitsRx, '');
            } else {
                throw new Error('Missing: ' + file);
            }

            file = supplementalPath + '/weekData.json';
            if (grunt.file.exists(file)) {
                json = grunt.file.readJSON(file);
                merged.weekData = json.supplemental.weekData;
                version3 = json.supplemental.version[cldrVersion] + 'r' + json.supplemental.version[number].replace(nonDigitsRx, '');
            } else {
                throw new Error('Missing: ' + file);
            }

            grunt.file.write(destination + '/supplemental.js', template
                .replace(/@@VERSION/g, grunt.config.get('pkg.version'))
                .replace(/@@AUTHORNAME/g, grunt.config.get('pkg.author.name'))
                .replace(/@@AUTHOREMAIL/g, grunt.config.get('pkg.author.email'))
                .replace(/@@HOMEPAGE/g, grunt.config.get('pkg.homepage'))
                .replace(/@@COPYRIGHT/g, grunt.config.get('pkg.copyright'))
                .replace(/@@MODULE/g, grunt.config.get('pkg.name'))
                .replace(/@@LICENSE/g, grunt.config.get('pkg.licenses')[0].type)
                .replace(/@@LICLINK/g, grunt.config.get('pkg.licenses')[0].url)
                .replace(/@@version1/g, version1)
                .replace(/@@version2/g, version2)
                .replace(/@@version3/g, version3)
                .replace(/@@data/g, JSON.stringify(merged)
                    .replace(/'/g, '@@singleQuote')
                    .replace(/\\"/g, '@@doubleQuote')
                    .replace(/"/g, '\'')
                    .replace(/@@doubleQuote/g, '"')
                    .replace(/@@singleQuote/g, '\\\'')
                    )
                );

            grunt.log.writeln('File "' + destination + '/supplemental.js" created.');
            grunt.config.set('buildFromCLDR.langList', langList);
            grunt.log.writeln(this.target + ': OK');
        });
    };
}());
