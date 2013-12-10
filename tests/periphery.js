/*global require, process */
(function () {
    'use strict';

    var test = require('../scripts/whichTape'),
        AstroDate = require('../scripts/whichAstroDate'),
        util = require('../scripts/util'),
        delay = 100,
        fireSingle = new util.Fire(),
        args = ['periphery methods'],
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        leapYears = [],
        leapYearLength,
        normalYears = [],
        normalYearsLength,
        idx,
        repeat;

    if (!process.env.ASTRODATE_TAPE) {
        repeat = 1;
        args.push({
            compact: true,
            name: 'All tests'
        });
    } else {
        repeat = 5;
    }

    for (idx = 1800; idx < 2200; idx += 1) {
        if (util.isGregorianLeapYear(idx)) {
            leapYears.push(idx);
        } else {
            normalYears.push(idx);
        }
    }

    normalYearsLength = normalYears.length;
    leapYearLength = leapYears.length;
    args.push(function (t) {
        function single() {
            var astrodate,
                index,
                month;

            for (index = 0; index < 12; index += 1) {
                month = index + 1;
                astrodate = new AstroDate(2013, month);
                t.equal(astrodate.format('MMMM'), monthNames[index], 'Month name match');
                t.equal(astrodate.daysInMonth(), util.daysInGregorianMonth(2013, month), 'Days in month: normal year');

                astrodate = new AstroDate(2012, month);
                t.equal(astrodate.format('MMMM'), monthNames[index], 'Month name match');
                t.equal(astrodate.daysInMonth(), util.daysInGregorianMonth(2012, month), 'Days in month: leap year');
            }

            for (index = 0; index < leapYearLength; index += 1) {
                t.ok(new AstroDate(leapYears[index], null).isLeapYear(), 'Leap year');
            }

            for (index = 0; index < normalYearsLength; index += 1) {
                t.ok(!new AstroDate(normalYears[index], null).isLeapYear(), 'Normal year');
            }

            for (index = 0; index < 7; index += 1) {
                astrodate = new AstroDate(2013, 9, index + 1);
                t.equal(astrodate.format('EEEE'), dayNames[index], 'Day names');
                t.equal(astrodate.format('D'), (244 + index).toString(), 'Day of year');
            }
        }

        fireSingle.run(repeat, function (cnt, iters) {
            single.apply(null, arguments);
            if (cnt + 1 >= iters) {
                t.end();
            }
        }, delay);
    });

    test.apply(null, args);
}());
