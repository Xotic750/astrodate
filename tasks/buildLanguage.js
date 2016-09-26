/*global module, require, JSON:true */
(function() {
  'use strict';

  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');

  module.exports = function(grunt) {
    grunt.registerMultiTask('buildLanguage', 'Build the language.json file from the CLDR data.', function() {
      var type = this.data.type;
      var core = this.data.core;
      var availableLocales;
      var availableLocalesPath = core + '/availableLocales.json';
      if (grunt.file.exists(availableLocalesPath)) {
        availableLocales = grunt.file.readJSON(availableLocalesPath).availableLocales[type].filter(function (l) {
          return ['en', 'en-GB', 'sv'].indexOf(l) !== -1;
        });
      } else {
        throw new Error('Missing: ' + availableLocalesPath);
      }
      //var numbersSrc = this.data.numbers;
      var datesSrc = this.data.dates;
      var destination = this.data.dest;
      var merged = {};
      var langList = [];
      availableLocales.forEach(function(locale) {
        //var numbersPath = numbersSrc + '/main/' + locale;
        //var numbersFile = numbersPath + '/numbers.json';
        var datesPath = datesSrc + '/main/' + locale;
        var gregorianFile = datesPath + '/ca-gregorian.json';
        var timeZoneNamesFile = datesPath + '/timeZoneNames.json';
        var lang;
        merged[locale] = {};
        /*
        if (grunt.file.exists(numbersFile)) {
          merged[locale].numbers = grunt.file.readJSON(numbersFile).main[locale].numbers;
        } else {
          throw new Error('Missing: ' + numbersFile);
        }
        */
        if (grunt.file.exists(gregorianFile)) {
          merged[locale].dates = grunt.file.readJSON(gregorianFile).main[locale].dates;
        } else {
          throw new Error('Missing: ' + gregorianFile);
        }
        if (grunt.file.exists(timeZoneNamesFile)) {
          merged[locale].dates.timeZoneNames = grunt.file.readJSON(timeZoneNamesFile).main[locale].dates.timeZoneNames;
          delete merged[locale].dates.timeZoneNames.zone;
          delete merged[locale].dates.timeZoneNames.metazone;
        } else {
          throw new Error('Missing: ' + timeZoneNamesFile);
        }
        lang = locale.replace('-', '_');
        langList.push(lang);
      });
      grunt.file.write(destination + '/language.json', JSON.stringify(merged, null, 4));
      grunt.log.writeln('File "' + destination + '/language.json" created.');
      grunt.config.set('buildLanguages.langList', langList);
      grunt.log.writeln(this.target + ': OK');
    });
  };
}());
