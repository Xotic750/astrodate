/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            clean: {
                all: ['README.md', 'docs', 'lib', 'src/cldr.zip', 'src/tzdata.tar.gz', 'src/includes', 'src/cldr', 'src/tz', 'coverage'],
                after: ['src/cldr.zip', 'src/tzdata.tar.gz', 'src/cldr', 'src/tz', 'coverage']
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

            buildFromCLDR: {
                language: {
                    language: 'src/build/language.tpl',
                    supplemental: 'src/build/supplemental.tpl',
                    src: 'src/cldr',
                    dest: 'src/includes'
                }
            },

            buildFromTzdata: {
                leapSeconds: {
                    leapSeconds: 'src/build/leapSeconds.tpl',
                    src: 'src/tz',
                    dest: 'src/includes'
                }
            },

            buildReadme: {
                readme: {
                    readme: 'templates/README.tpl',
                    dest: 'README.md'
                }
            },

            jsbeautifier: {
                dist1: {
                    src: ['lib/<%= pkg.name %>.js', 'src/includes/languages.js'],
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
                },

                includes: {
                    src: ['src/includes/*.js'],
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
                    report: 'gzip',
                    preserveComments: 'some'
                }
            },

            jshint: {
                grunt: ['Gruntfile.js', 'tasks/**/*.js', 'tests/**/*.js'],
                sources: ['src/*.js', 'src/includes/*.js'],
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

            concat: {
                options: {
                    separator: '\n'
                },

                languages: {
                    src: ['src/includes/!(en|supplemental|languages|leapSeconds).js', 'src/includes/en.js'],
                    dest: 'src/includes/languages.js'
                }
            },

            replace: {
                dist: {
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
                            replacement: '<%= grunt.file.read("src/includes/leapSeconds.js") %>',
                            expression: true
                        }, {
                            match: '/\\/\\*@@supplemental\\*\\//g',
                            replacement: '<%= grunt.file.read("src/includes/supplemental.js") %>',
                            expression: true
                        }, {
                            match: '/\\/\\*@@languages\\*\\//g',
                            replacement: '<%= grunt.file.read("src/includes/languages.js") %>',
                            expression: true
                        }]
                    },
                    files: [{
                        src: ['src/<%= pkg.name %>.js'],
                        dest: 'lib/<%= pkg.name %>.js'
                    }]
                },

                bn: {
                    options: {
                        patterns: [{
                            match: 'key',
                            replacement: '$$\''
                        }, {
                            match: '/\\/\\*@@BigNumber\\*\\//g',
                            replacement: (grunt.file.read('node_modules/bignumber.js/bignumber.js').replace(/\$/g, '$$$$')),
                            expression: true
                        }]
                    },
                    files: [{
                        src: ['lib/<%= pkg.name %>.js'],
                        dest: 'lib/<%= pkg.name %>.js'
                    }]
                }
            },

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
                    command: 'ASTRODATE_COVERAGE=1 node_modules/tap/bin/tap.js tests/*.js'
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
                    command: 'ASTRODATE_COVERAGE= node_modules/istanbul/lib/cli.js cover tests/*.js --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage'
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
                    command: 'node_modules/tap/bin/tap.js tests/*.js'
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
                        '<%= jshint.grunt %>',
                        '<%= jshint.sources %>',
                        '<%= jshint.lib %>'
                    ],
                    tasks: ['jshint']
                }
            }
        });

        // Custom tasks.
        grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jsdoc');
        grunt.loadNpmTasks('grunt-jsbeautifier');
        grunt.loadNpmTasks('grunt-replace');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-curl');
        grunt.loadNpmTasks('grunt-zip');
        grunt.loadNpmTasks('grunt-shell');

        // Default task.
        grunt.registerTask('default', [
            'jshint:grunt',
            'clean:all',
            'curl',
            'unzip',
            'extactTargz',
            'buildFromCLDR',
            'buildFromTzdata',
            'jsbeautifier:includes',
            'jshint:sources',
            'concat',
            'replace:dist',
            'jsbeautifier:dist1',
            'jshint:lib',
            'replace:bn',
            'jsbeautifier:dist2',
            'jshint:lib',
            'shell:beautified',
            'shell:coveralls',
            'uglify',
            'shell:uglified',
            'buildReadme',
            'jsdoc',
            'clean:after'
        ]);

        grunt.registerTask('test', [
            'shell:beautified',
            'shell:coveralls',
            'shell:uglified'
        ]);
    };
}());
