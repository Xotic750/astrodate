/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        function removeStrict(fileName) {
            return grunt.file.read(fileName).replace(/\$/g, '$$$$').replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            jsbeautifier: {
                dist1: {
                    src: ['lib/<%= pkg.name %>.js', 'src/lang/languages.js'],
                    options: {
                        js: {
                            jslintHappy: true
                        }
                    }
                },
                dist2: {
                    src: ['lib/<%= pkg.name %>.js'],
                    options: {
                        js: {
                            jslintHappy: true
                        }
                    }
                }
            },
            uglify: {
                target: {
                    files: {
                        'lib/<%= pkg.name %>.min.js': 'lib/<%= pkg.name %>.js'
                    }
                },
                options: {
                    mangle: true,
                    compress: {},
                    output: {
                        'ascii_only': true
                    },
                    report: 'min',
                    preserveComments: 'some'
                }
            },
            mochaTest: {
                test: {
                    options: {
                        reporter: 'spec'
                    },
                    src: ['test/**/*.js']
                }
            },
            jshint: {
                all: ['Gruntfile.js', 'lib/<%= pkg.name %>.js', 'test/**/*.js'],
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
            concat: {
                options: {
                    separator: '\n'
                },
                dist: {
                    src: ['src/<%= pkg.name %>.js'],
                    dest: 'lib/<%= pkg.name %>.js'
                },
                languages: {
                    src: ['src/lang/!(en|supplemental|languages).js', 'src/lang/en.js'],
                    dest: 'src/lang/languages.js'
                }
            },
            replace: {
                dist: {
                    options: {
                        patterns: [{
                            match: '/\\/\\*@@leapSeconds\\*\\//g',
                            replacement: (removeStrict('src/tz/leapSeconds.js')),
                            expression: true
                        }, {
                            match: '/\\/\\*@@supplemental\\*\\//g',
                            replacement: (removeStrict('src/lang/supplemental.js')),
                            expression: true
                        }, {
                            match: '/\\/\\*@@languages\\*\\//g',
                            replacement: (removeStrict('src/lang/languages.js')),
                            expression: true
                        }]
                    },
                    files: [{
                        src: ['lib/<%= pkg.name %>.js'],
                        dest: 'lib/<%= pkg.name %>.js'
                    }]
                },
                bn: {
                    options: {
                        patterns: [{
                            match: '/\\/\\*@@BigNumber\\*\\//g',
                            replacement: (removeStrict('node_modules/bignumber.js/bignumber.js')),
                            expression: true
                        }]
                    },
                    files: [{
                        src: ['lib/<%= pkg.name %>.js'],
                        dest: 'lib/<%= pkg.name %>.js'
                    }]
                }
            },
            clean: ['docs', 'lib/<%= pkg.name %>.js', 'lib/<%= pkg.name %>.min.js', 'src/lang/languages.js'],
            jsdoc: {
                dist: {
                    jsdoc: 'node_modules/.bin/jsdoc',
                    src: ['README.md', 'lib/<%= pkg.name %>.js'],
                    options: {
                        destination: 'docs',
                        private: false
                    }
                }
            },
            watch: {
                test: {
                    files: [
                        'lib/<%= pkg.name %>.js',
                        'test/**/*.js'
                    ],
                    tasks: ['mochaTest']
                },
                jshint: {
                    files: '<%= jshint.all %>',
                    tasks: ['jshint']
                }
            }
        });

        grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jsdoc');
        grunt.loadNpmTasks('grunt-mocha-test');
        grunt.loadNpmTasks('grunt-jsbeautifier');
        grunt.loadNpmTasks('grunt-replace');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-curl');

        // Default task.
        grunt.registerTask('default', ['clean', 'concat', 'replace:dist', 'jsbeautifier:dist1', 'jshint', 'replace:bn', 'jsbeautifier:dist2', 'mochaTest', 'jsdoc', 'uglify']);
    };
}());
