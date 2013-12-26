/*global require, module */

(function () {
    'use strict';

    function factory(util) {
        var testsUtil = {};

        testsUtil.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        testsUtil.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        testsUtil.isGregorianLeapYear = function (year) {
            return util.strictEqual(util.mod(year, 400), 0) || (util.notStrictEqual(util.mod(year, 100), 0) && util.strictEqual(util.mod(year, 4), 0));
        };

        testsUtil.daysInGregorianMonth = function (year, month) {
            var days;

            if (util.strictEqual(month, 2)) {
                days = 28;
                if (testsUtil.isGregorianLeapYear(year)) {
                    days += 1;
                }
            } else {
                days = 31 - util.mod(util.mod(month - 1, 7), 2);
            }

            return days;
        };

        return testsUtil;
    }


    module.exports = factory(require('util-x'));
}());
