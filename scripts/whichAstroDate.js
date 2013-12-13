/*global require, module, process */
(function () {
    'use strict';

    if ('1' === process.env.ASTRODATE_WHICH) {
        module.exports = require('../lib/astrodate');
    } else {
        module.exports = require('../lib/astrodate.min');
    }
}());
