/*global module, require */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerMultiTask('extactTargz', 'Extract tar.gz file', function () {
            var Targz = require('tar.gz'),
                that = this,
                done = this.async();

            new Targz().extract(this.data.src, this.data.dest, function (err) {
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
