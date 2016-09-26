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
    grunt.registerMultiTask('buildLeapSeconds', 'Build the leapSeconds.json files from the tzdata.', function() {
      var source = this.data.src;
      var destination = this.data.dest;
      var leapSecondsFile = source + '/leapseconds';
      var leapSecondsContent;
      var leapSeconds = {};

      if (grunt.file.exists(leapSecondsFile)) {
        leapSecondsContent = grunt.file.read(leapSecondsFile);
      } else {
        throw new Error('Missing leapseconds: ' + leapSecondsFile);
      }

      leapSecondsContent.match(/(Leap\s+(\d{4})\s+(\w{3})\s+(\d{1,2})\s+\d{2}:\d{2}:\d{2}\s+([\-+])\s+S)/g).forEach(function(match) {
        var subMatch = (match.match(/Leap\s+(\d{4})\s+(\w{3})\s+(\d{1,2})\s+\d{2}:\d{2}:\d{2}\s+([\-+])\s+/) || []).slice(1);
        var monthNumber = subMatch[1]
          .replace('Jan', '1')
          .replace('Feb', '2')
          .replace('Mar', '3')
          .replace('Apr', '4')
          .replace('May', '5')
          .replace('Jun', '6')
          .replace('Jul', '7')
          .replace('Aug', '8')
          .replace('Sep', '9')
          .replace('Oct', '10')
          .replace('Nov', '11')
          .replace('Dec', '12');

        if (!leapSeconds[subMatch[0]]) {
          leapSeconds[subMatch[0]] = {};
        }

        leapSeconds[subMatch[0]][monthNumber] = {};
        leapSeconds[subMatch[0]][monthNumber][subMatch[2]] = subMatch[3] === '+' ? '1' : '-1';
      });

      grunt.file.write(destination + '/leapSeconds.json', JSON.stringify(leapSeconds, null, 4));
      grunt.log.writeln('File "' + destination + '/leapSeconds.json" created.');
      grunt.log.writeln(this.target + ': OK');
    });
  };
}());
