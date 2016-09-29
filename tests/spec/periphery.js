/*global require, describe, expect, it */
(function() {
  'use strict';

  var AstroDate = require('../../scripts/loadModule.js')('../index.js');
  var testsUtil = require('../../scripts/testsUtil.js');
  var daysInGregorianMonth = testsUtil.daysInGregorianMonth;
  var isGregorianLeapYear = testsUtil.isGregorianLeapYear;
  var monthNames = testsUtil.monthNames;
  var dayNames = testsUtil.dayNames;

  describe('Periphery methods.', function() {
    var years = [];
    for (var indexy = 2013; indexy <= 2016; indexy += 1) {
      years.push(indexy);
    }
    var leapYears = [];
    var normalYears = [];
    for (var indexl = 1800; indexl <= 2200; indexl += 1) {
      (isGregorianLeapYear(indexl) ? leapYears : normalYears).push(indexl);
    }
    it('should format correct month names', function() {
      monthNames.forEach(function (monthName, index) {
        var month = index + 1;
        years.forEach(function (year) {
          var astrodate = new AstroDate(year, month);
          expect(astrodate.format('MMMM')).toBe(monthName);
          expect(astrodate.format('\'Month:\'MMMM')).toBe('Month:' + monthName);
          expect(astrodate.format('\'Month\'\'x:\'MMMM')).toBe('Month\'x:' + monthName);
          expect(astrodate.daysInMonth()).toBe(daysInGregorianMonth(year, month));
        });
      });
    });

    it('should identify all as leap years', function() {
      leapYears.forEach(function(leapYear) {
        expect(new AstroDate(leapYear, null).isLeapYear()).toBe(true);
      });
    });

    it('should identify all as normal years', function() {
      normalYears.forEach(function(normalYear) {
        expect(new AstroDate(normalYear, null).isLeapYear()).toBe(false);
      });
    });

    it('should format correct day name and day of the year', function() {
      dayNames.forEach(function (dayName, index) {
        var astrodate = new AstroDate(2013, 9, index + 1);
        expect(astrodate.format('EEEE')).toBe(dayName);
        expect(astrodate.format('D')).toBe((244 + index).toString());
      });
    });
  });
}());
