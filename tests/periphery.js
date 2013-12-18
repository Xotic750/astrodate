/*global require, process, setTimeout */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        util = required.util,
        testsUtil = required.testsUtil,
        assert = required.assert,
        test = required.test,
        leapYears = [],
        normalYears = [],
        idx;

    for (idx = 1800; util.lt(idx, 2200); idx += 1) {
        if (testsUtil.isGregorianLeapYear(idx)) {
            leapYears.push(idx);
        } else {
            normalYears.push(idx);
        }
    }

    function single() {
        var astrodate,
            index,
            month;

        for (index = 0; util.lt(index, 12); index += 1) {
            month = index + 1;
            astrodate = new AstroDate(2013, month);
            assert.strictEqual(astrodate.format('MMMM'), testsUtil.monthNames[index], 'Month name match');
            assert.strictEqual(astrodate.daysInMonth(), testsUtil.daysInGregorianMonth(2013, month), 'Days in month: normal year');

            astrodate = new AstroDate(2012, month);
            assert.strictEqual(astrodate.format('MMMM'), testsUtil.monthNames[index], 'Month name match');
            assert.strictEqual(astrodate.daysInMonth(), testsUtil.daysInGregorianMonth(2012, month), 'Days in month: leap year');
        }

        util.arrayForEach(leapYears, function (leapYear) {
            assert.ok(new AstroDate(leapYear, null).isLeapYear(), 'Leap year');
        });

        util.arrayForEach(normalYears, function (normalYear) {
            assert.ok(!new AstroDate(normalYear, null).isLeapYear(), 'Normal year');
        });

        for (index = 0; index < 7; index += 1) {
            astrodate = new AstroDate(2013, 9, index + 1);
            assert.strictEqual(astrodate.format('EEEE'), testsUtil.dayNames[index], 'Day names');
            assert.strictEqual(astrodate.format('D'), (244 + index).toString(), 'Day of year');
        }
    }

    test('Periphery methods.', function (t) {
        var delay = 100,
            cnt = 0,
            repeat;

        if (!process.env.ASTRODATE_REPEAT) {
            repeat = 1;
        } else {
            repeat = 50;
        }

        t.plan(1);

        function run() {
            if (util.lt(cnt, repeat)) {
                cnt += 1;
                setTimeout(function () {
                    try {
                        single();
                        run();
                    } catch (e) {
                        t.error(e, e.message, {
                            actual : e.actual,
                            expected : e.expected,
                            error: e
                        });
                    }
                }, delay);
            } else {
                t.pass(t.name);
            }
        }

        run();
    });
}());
