/*global require, process , describe, it */
(function () {
    'use strict';

    var AstroDate = require('../scripts/whichAstroDate'),
        util = require('../scripts/util'),
        assert = require('assert'),
        leapYears = [],
        leapYearLength,
        normalYears = [],
        normalYearsLength,
        idx;

    for (idx = 1800; idx < 2200; idx += 1) {
        if (util.isGregorianLeapYear(idx)) {
            leapYears.push(idx);
        } else {
            normalYears.push(idx);
        }
    }

    normalYearsLength = normalYears.length;
    leapYearLength = leapYears.length;

    function single() {
        var astrodate,
            index,
            month;

        for (index = 0; index < 12; index += 1) {
            month = index + 1;
            astrodate = new AstroDate(2013, month);
            assert.equal(astrodate.format('MMMM'), util.monthNames[index], 'Month name match');
            assert.equal(astrodate.daysInMonth(), util.daysInGregorianMonth(2013, month), 'Days in month: normal year');

            astrodate = new AstroDate(2012, month);
            assert.equal(astrodate.format('MMMM'), util.monthNames[index], 'Month name match');
            assert.equal(astrodate.daysInMonth(), util.daysInGregorianMonth(2012, month), 'Days in month: leap year');
        }

        for (index = 0; index < leapYearLength; index += 1) {
            assert.ok(new AstroDate(leapYears[index], null).isLeapYear(), 'Leap year');
        }

        for (index = 0; index < normalYearsLength; index += 1) {
            assert.ok(!new AstroDate(normalYears[index], null).isLeapYear(), 'Normal year');
        }

        for (index = 0; index < 7; index += 1) {
            astrodate = new AstroDate(2013, 9, index + 1);
            assert.equal(astrodate.format('EEEE'), util.dayNames[index], 'Day names');
            assert.equal(astrodate.format('D'), (244 + index).toString(), 'Day of year');
        }
    }

    describe('Periphery methods.', function () {
        var repeat;

        if (!process.env.ASTRODATE_REPEAT) {
            repeat = 1;
        } else {
            repeat = 5;
        }

        it('', function (done) {
            var delay = 100;

            new util.Fire().run(repeat, single, delay, done);
        });
    });
}());
