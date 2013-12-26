/*global module, require, process */

(function () {
    'use strict';

    var required = {
        utilx: require('util-x'),

        testsUtil: require('./testsUtil'),

        assertx: require('assert-x'),

        test: require('tape-compact')
    };

    if (required.utilx.strictEqual(process.env.ASTRODATE_WHICH, '1')) {
        required.AstroDate = require('../lib/astrodate');
    } else {
        required.AstroDate = require('../lib/astrodate.min');
    }

    module.exports = required;
}());
