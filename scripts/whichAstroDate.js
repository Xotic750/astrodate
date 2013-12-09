/*global require, module, process */
(function () {
    'use strict';

    if ('1' === process.env.ASTRODATE_RAW) {
        module.exports = require('../lib/astrodate');
    } else {
        module.exports = require('../lib/astrodate');
    }
}());
