/*global module */

(function () {
    "use strict";

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify : {
                target: {
                    files: {
                        'min/<%= pkg.name %>.min.js' : '<%= pkg.name %>.js'
                    }
                },
                options: {
                    mangle: true,
                    compress: {
                        dead_code: false
                    },
                    output: {
                        ascii_only: true
                    },
                    report: 'min',
                    preserveComments: 'some'
                }
            },
            nodeunit : {
                all : ["test/**/*.js"]
            },
            jshint: {
                all: ["Gruntfile.js", "<%= pkg.name %>.js", "test/**/*.js"],
                options: {
                    "node"     : true,
                    "browser"  : false,
                    "boss"     : false,
                    "curly"    : false,
                    "debug"    : false,
                    "devel"    : false,
                    "eqeqeq"   : false,
                    "eqnull"   : false,
                    "evil"     : false,
                    "forin"    : false,
                    "immed"    : false,
                    "laxbreak" : false,
                    "newcap"   : false,
                    "noarg"    : false,
                    "noempty"  : false,
                    "nonew"    : false,
                    "onevar"   : false,
                    "plusplus" : false,
                    "regexp"   : false,
                    "undef"    : false,
                    "sub"      : false,
                    "strict"   : false,
                    "white"    : false,
                    "globals": {
                        "define": false
                    }
                }
            },
            watch : {
                test : {
                    files : [
                        '<%= pkg.name %>.js',
                        'test/**/*.js'
                    ],
                    tasks: ['nodeunit']
                },
                jshint : {
                    files : '<%= jshint.all %>',
                    tasks: ['jshint']
                }
            }
        });

        grunt.loadTasks("tasks");

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-nodeunit');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // Default task.
        grunt.registerTask('default', ['jshint', 'nodeunit']);
        grunt.registerTask('test', ['nodeunit']);

        // Task to be run when releasing a new version
        grunt.registerTask('release', ['jshint', 'nodeunit', 'uglify']);
    };
}());
