/*global require, process */
(function () {
    'use strict';

    var test = require('../scripts/whichTape.js'),
        AstroDate = require('../scripts/whichAstroDate'),
        Fire = require('../scripts/fire'),
        delay = 100,
        fireLoop = new Fire(),
        args = ['periphery methods'];

    if (!process.env.ASTRODATE_TAPE) {
        args.push({compact: true, name: 'All tests'});
    }

    args.push(function (t) {
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
            monthDaysLeap = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
            dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            leapYears = [2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092],
            leapYearLength = leapYears.length,
            normalYears = [],
            normalYearsLength,
            astrodate,
            index;

        for (index = leapYears[0]; index < leapYears[leapYearLength - 1]; index += 1) {
            if (-1 === leapYears.indexOf(index)) {
                normalYears.push(index);
            }
        }

        normalYearsLength = normalYears.length;
        function mNd(index) {
            astrodate = new AstroDate([2013, index + 1]);
            t.equal(astrodate.format('MMMM'), monthNames[index], 'Month name match');
            t.equal(astrodate.daysInMonth(), monthDays[index], 'Days in month: normal year');

            astrodate = new AstroDate([2012, index + 1]);
            t.equal(astrodate.format('MMMM'), monthNames[index], 'Month name match');
            t.equal(astrodate.daysInMonth(), monthDaysLeap[index], 'Days in month: leap year');
        }

        fireLoop.run(12, mNd, delay);

        function lYears(index) {
            t.ok(new AstroDate([leapYears[index]]).isLeapYear(), 'Leap year');
        }

        fireLoop.run(leapYearLength, lYears, delay);

        function nYears(index) {
            t.ok(!new AstroDate([normalYears[index]]).isLeapYear(), 'Normal year');
        }

        fireLoop.run(normalYearsLength, nYears, delay);

        function dNames(index) {
            astrodate = new AstroDate([2013, 9, index + 1]);
            t.equal(astrodate.format('EEEE'), dayNames[index], 'Day names');
            t.equal(astrodate.format('D'), (244 + index).toString(), 'Day of year');
        }

        fireLoop.run(7, dNames, delay);
        t.end();
    });

    test.apply(null, args);
}());
