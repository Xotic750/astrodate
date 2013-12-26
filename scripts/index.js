/*global module, require, process */

(function () {
    'use strict';

    var required = {
        util: require('util-x'),

        testsUtil: require('./testsUtil'),

        assert: require('assert-x'),

        test: require('tape-compact'),

        json: typeof JSON === 'object' && null !== JSON ? JSON : require('jsonify')
    };

    if (required.util.strictEqual(process.env.ASTRODATE_WHICH, '1')) {
        required.AstroDate = require('../lib/astrodate');
    } else {
        required.AstroDate = require('../lib/astrodate.min');
    }

    module.exports = required;
}());
