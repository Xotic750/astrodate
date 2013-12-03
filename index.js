/*global require, module, process */
(function () {
    'use strict';

    switch (process.env.ASTRODATE_COVERAGE) {
    case 1:
        module.exports = require('../lib/astrodate');
        break;
    default:
        module.exports = require('../lib/astrodate.min');
    }
}());
