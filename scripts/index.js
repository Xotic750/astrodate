/*global module, require, process */

(function () {
    'use strict';

    var required = {
        testsUtil: require('./testsUtil'),

        assertx: require('assert-x')
    };

    required.utilx = required.assertx.utilx;
    if ('1' === process.env.ASTRODATE_WHICH) {
        required.AstroDate = require('../lib/astrodate.min');
    } else {
        required.AstroDate = require('../lib/astrodate');
    }

    module.exports = required;
}());
