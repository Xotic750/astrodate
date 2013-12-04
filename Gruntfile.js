/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            clean: {
                all: ['README.md', 'docs', 'lib', 'src/cldr.zip', 'src/tzdata.tar.gz', 'src/*.json', 'src/cldr', 'src/tz', 'coverage'],
                after: ['src/cldr.zip', 'src/tzdata.tar.gz', 'src/*.json', 'src/cldr', 'src/tz', 'coverage']
            },

            curl: {
                cldr: {
                    src: '<%= pkg.sources.cldr %>',
                    dest: 'src/cldr.zip'
                },

                tzdata: {
                    src: '<%= pkg.sources.tzdata %>',
                    dest: 'src/tzdata.tar.gz'
                }
            },

            unzip: {
                cldr: {
                    src: 'src/cldr.zip',
                    dest: 'src/cldr'
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
                    src: 'src/cldr',
                    dest: 'src'
                }
            },

            buildLeapSeconds: {
                all: {
                    src: 'src/tz',
                    dest: 'src'
                }
            },

            buildReadme: {
                readme: {
                    readme: 'templates/README.tpl',
                    dest: 'README.md'
                }
            },

            jsbeautifier: {
                lib: {
                    src: ['lib/<%= pkg.name %>.js'],
                    options: {
                        js: {
                            jslintHappy: true
                        }
                    }
                }
            },

            uglify: {
                lib: {
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

            jshint: {
                build: ['Gruntfile.js', 'scripts/*.js', 'index.js', 'src/*.js', 'tasks/**/*.js', 'tests/**/*.js'],
                lib: ['lib/<%= pkg.name %>.js'],
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

            jsonlint: {
                all: {
                    src: ['src/*.json']
                }
            },

            replace: {
                lib: {
                    options: {
                        patterns: [{
                            match: 'VERSION',
                            replacement: '<%= pkg.version %>'
                        }, {
                            match: 'MODULE',
                            replacement: '<%= pkg.name %>'
                        }, {
                            match: 'DESCRIPTION',
                            replacement: '<%= pkg.description %>'
                        }, {
                            match: 'AUTHORNAME',
                            replacement: '<%= pkg.author.name %>'
                        }, {
                            match: 'AUTHOREMAIL',
                            replacement: '<%= pkg.author.email %>'
                        }, {
                            match: 'HOMEPAGE',
                            replacement: '<%= pkg.homepage %>'
                        }, {
                            match: 'COPYRIGHT',
                            replacement: '<%= pkg.copyright %>'
                        }, {
                            match: 'LICENSE',
                            replacement: '<%= pkg.licenses[0].type %>'
                        }, {
                            match: 'LICLINK',
                            replacement: '<%= pkg.licenses[0].url %>'
                        }, {
                            match: '/\\/\\*@@leapSeconds\\*\\//g',
                            replacement: '<%= grunt.file.read("src/leapSeconds.json") %>',
                            expression: true
                        }, {
                            match: '/\\/\\*@@supplemental\\*\\//g',
                            replacement: '<%= grunt.file.read("src/supplemental.json") %>',
                            expression: true
                        }, {
                            match: '/\\/\\*@@languages\\*\\//g',
                            replacement: '<%= grunt.file.read("src/language.json") %>',
                            expression: true
                        }, {
                            match: '/\\/\\*@@BigNumber\\*\\//g',
                            replacement: (grunt.file.read('node_modules/bignumber.js/bignumber.js').replace(/\$/g, '$$$$')),
                            expression: true
                        }]
                    },
                    files: [{
                        src: ['src/<%= pkg.name %>.js'],
                        dest: 'lib/<%= pkg.name %>.js'
                    }]
                }
            },

            jsdoc: {
                lib: {
                    jsdoc: 'node_modules/.bin/jsdoc',
                    src: ['README.md', 'lib/<%= pkg.name %>.js'],
                    options: {
                        destination: 'docs',
                        private: false
                    }
                }
            },

            shell: {
                beautified: {
                    options: {
                        stdout: true,
                        stderr: true,
                        failOnError: true,
                        execOptions: {
                            maxBuffer: 1048576
                        }
                    },
                    command: 'ASTRODATE_TAPE=2 ASTRODATE_RAW=1 node_modules/tap/bin/tap.js tests/*.js'
                },
                coveralls: {
                    options: {
                        stdout: false,
                        stderr: true,
                        failOnError: true,
                        execOptions: {
                            maxBuffer: 1048576
                        }
                    },
                    command: 'ASTRODATE_TAPE=1 ASTRODATE_RAW=1 node_modules/istanbul/lib/cli.js cover tests/*.js --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage'
                },
                uglified: {
                    options: {
                        stdout: true,
                        stderr: true,
                        failOnError: true,
                        execOptions: {
                            maxBuffer: 1048576
                        }
                    },
                    command: 'ASTRODATE_TAPE=2 node_modules/tap/bin/tap.js tests/*.js'
                }
            },

            watch: {
                test: {
                    files: [
                        'lib/<%= pkg.name %>.js',
                        'tests/*.js'
                    ],
                    tasks: ['shell:beautified', 'shell:coveralls', 'shell:uglified']
                },

                jshint: {
                    files: [
                        '<%= jshint.build %>',
                        '<%= jshint.lib %>'
                    ],
                    tasks: ['jshint']
                },

                jsonlint: {
                    files: [
                        '<%= jsonlint.all.src %>'
                    ],
                    tasks: ['jsonlint']
                }
            }
        });

        // Custom tasks.
        grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jsdoc');
        grunt.loadNpmTasks('grunt-jsbeautifier');
        grunt.loadNpmTasks('grunt-replace');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-curl');
        grunt.loadNpmTasks('grunt-zip');
        grunt.loadNpmTasks('grunt-shell');
        grunt.loadNpmTasks('grunt-jsonlint');

        // Default task.
        grunt.registerTask('default', [
            'clean:all',
            'jshint:build',
            'curl',
            'unzip',
            'extactTargz',
            'buildLanguage',
            'buildLeapSeconds',
            'jsonlint',
            'replace:lib',
            'jsbeautifier:lib',
            'jshint:lib',
            'shell:beautified',
            'uglify',
            'shell:uglified',
            'shell:coveralls',
            'buildReadme',
            'jsdoc',
            'clean:after'
        ]);

        grunt.registerTask('test', [
            'shell:beautified',
            'shell:uglified'
        ]);
    };
}());
