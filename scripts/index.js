/*global module, require, process */

(function () {
    'use strict';

    var required = {
        utilx: require('util-x'),

        testsUtil: require('./testsUtil'),

        assertx: require('assert-x')
    };

    if (required.utilx.strictEqual(process.env.ASTRODATE_WHICH, '1')) {
        required.AstroDate = require('../lib/astrodate.min');
    } else {
        required.AstroDate = require('../lib/astrodate');
    }

    module.exports = required;
}());
