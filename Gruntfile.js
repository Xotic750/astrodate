/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                target: {
                    files: {
                        '<%= pkg.name %>.min.js': '<%= pkg.name %>.js'
                    }
                },
                options: {
                    mangle: true,
                    compress: {
                        'dead_code': false
                    },
                    output: {
                        'ascii_only': true
                    },
                    report: 'gzip',
                    preserveComments: 'some'
                }
            },
            nodeunit: {
                all: ['test/**/*.js']
            },
            jshint: {
                all: ['Gruntfile.js', '<%= pkg.name %>.js', 'test/**/*.js', 'lang/**/*.js', 'tz/**/*.js'],
                options: {
                    'bitwise': true,
                    'camelcase': true,
                    'curly': true,
                    'eqeqeq': true,
                    'forin': true,
                    'freeze': true,
                    'funcscope': true,
                    'globalstrict': true,
                    'immed': true,
                    'newcap': true,
                    'noarg': true,
                    'nomen': true,
                    'nonew': true,
                    'notypeof': true,
                    'plusplus': true,
                    'regexp': true,
                    'strict': true,
                    'trailing': true,
                    'undef': true,
                    'white': true,
                    'noempty': true,
                    'quotmark': 'single'
                }
            },
            watch: {
                test: {
                    files: [
                        '<%= pkg.name %>.js',
                        'test/**/*.js',
                        'lang/**/*.js',
                        'tz/**/*.js'
                    ],
                    tasks: ['nodeunit']
                },
                jshint: {
                    files: '<%= jshint.all %>',
                    tasks: ['jshint']
                }
            }
        });

        grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-nodeunit');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // Default task.
        grunt.registerTask('default', ['jshint', 'nodeunit', 'uglify']);
    };
}());
