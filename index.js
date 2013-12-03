/*global require, module, process */
(function () {
    'use strict';

    if (process.env.ASTRODATE_COVERAGE) {
        module.exports = require('../lib/astrodate');
    } else {
        module.exports = require('../lib/astrodate.min');
    }
}());
