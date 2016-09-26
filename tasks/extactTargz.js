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
    grunt.registerMultiTask('extactTargz', 'Extract tar.gz file', function() {
      var Targz = require('tar.gz');
      var that = this;
      var done = this.async();

      new Targz().extract(this.data.src, this.data.dest, function(err) {
        if (err) {
          done(new Error(err));
        } else {
          grunt.log.writeln('File "' + that.data.dest + '" created.');
          done();
        }
      });
    });
  };
}());
