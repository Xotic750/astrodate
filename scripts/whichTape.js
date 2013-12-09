/*global require, module, process */
(function () {
    'use strict';

    if ('1' === process.env.ASTRODATE_TAPE) {
        module.exports = require('tape');
    } else {
        module.exports = require('tape-compact');
    }
}());
