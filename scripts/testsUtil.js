/*global require, module */

(function () {
    'use strict';

    function factory(utilx) {
        var testsUtil = {};

        testsUtil.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                                'July', 'August', 'September', 'October', 'November', 'December'];

        testsUtil.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        testsUtil.isGregorianLeapYear = function (year) {
            return utilx.strictEqual(utilx.mod(year, 400), 0) ||
                (utilx.notStrictEqual(utilx.mod(year, 100), 0) && utilx.strictEqual(utilx.mod(year, 4), 0));
        };

        testsUtil.daysInGregorianMonth = function (year, month) {
            var days;

            if (utilx.strictEqual(month, 2)) {
                days = 28;
                if (testsUtil.isGregorianLeapYear(year)) {
                    days += 1;
                }
            } else {
                days = 31 - utilx.mod(utilx.mod(month - 1, 7), 2);
            }

            return days;
        };

        return testsUtil;
    }


    module.exports = factory(require('util-x'));
}());
