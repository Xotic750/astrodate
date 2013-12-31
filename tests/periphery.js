/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        utilx = required.utilx,
        testsUtil = required.testsUtil,
        assertx = required.assertx;

    describe('Periphery methods.', function () {
        it('should not throw an error in each case', function () {
            var astrodate,
                index,
                month,
                leapYears = [],
                normalYears = [],
                idx;

            for (idx = 1800; utilx.lt(idx, 2200); idx += 1) {
                if (testsUtil.isGregorianLeapYear(idx)) {
                    leapYears.push(idx);
                } else {
                    normalYears.push(idx);
                }
            }

            for (index = 0; utilx.lt(index, 12); index += 1) {
                month = index + 1;
                astrodate = new AstroDate(2013, month);
                assertx.strictEqual(astrodate.format('MMMM'), testsUtil.monthNames[index], 'Month name match');
                assertx.strictEqual(astrodate.daysInMonth(), testsUtil.daysInGregorianMonth(2013, month),
                                    'Days in month: normal year');

                astrodate = new AstroDate(2012, month);
                assertx.strictEqual(astrodate.format('MMMM'), testsUtil.monthNames[index], 'Month name match');
                assertx.strictEqual(astrodate.daysInMonth(), testsUtil.daysInGregorianMonth(2012, month),
                                    'Days in month: leap year');
            }

            utilx.arrayForEach(leapYears, function (leapYear) {
                assertx.ok(new AstroDate(leapYear, null).isLeapYear(), 'Leap year');
            });

            utilx.arrayForEach(normalYears, function (normalYear) {
                assertx.ok(!new AstroDate(normalYear, null).isLeapYear(), 'Normal year');
            });

            for (index = 0; index < 7; index += 1) {
                astrodate = new AstroDate(2013, 9, index + 1);
                assertx.strictEqual(astrodate.format('EEEE'), testsUtil.dayNames[index], 'Day names');
                assertx.strictEqual(astrodate.format('D'), (244 + index).toString(), 'Day of year');
            }
        });
    });
}());
