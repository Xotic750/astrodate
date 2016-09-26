/*global module, JSON:true */
(function() {
  'use strict';

  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  require('es7-shim');

  module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: {
        all: ['src/tzdata.tar.gz', 'src/*.json', 'src/tz']
      },
      curl: {
        tzdata: {
          src: '<%= pkg.sources.tzdata %>',
          dest: 'src/tzdata.tar.gz'
        }
      },
      extactTargz: {
        tzdata: {
          src: 'src/tzdata.tar.gz',
          dest: 'src/tz'
        }
      },
      buildLanguage: {
        all: {
          type: 'modern',
          core: 'node_modules/cldr-core',
          //numbers: 'node_modules/cldr-numbers-full',
          dates: 'node_modules/cldr-dates-full',
          dest: 'src'
        }
      },
      buildLeapSeconds: {
        all: {
          src: 'src/tz',
          dest: 'src'
        }
      },
      jsonlint: {
        all: {
          src: ['src/*.json']
        }
      }
    });
    // Custom tasks.
    grunt.loadTasks('tasks');
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-jsonlint');
    // Default task.
    grunt.registerTask('default', [
      'clean:all',
      'curl',
      'extactTargz',
      'buildLanguage',
      'buildLeapSeconds',
      'jsonlint'
    ]);
  };
}());
