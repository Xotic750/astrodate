/*global require, describe, it */
(function() {
  'use strict';

  var AstroDate = require('../../scripts/loadModule.js')('../index.js');
  var testsUtil = require('../../scripts/testsUtil.js');
  var daysInGregorianMonth = testsUtil.daysInGregorianMonth;
  var isGregorianLeapYear = testsUtil.isGregorianLeapYear;
  var monthNames = testsUtil.monthNames;
  var dayNames = testsUtil.dayNames;


  describe('Periphery methods.', function() {
    it('should not throw an error in each case', function() {
      var astrodate;
      var month;
      var leapYears = [];
      var normalYears = [];
      var index;
      for (index = 1800; index < 2200; index += 1) {
        if (isGregorianLeapYear(index)) {
          leapYears.push(index);
        } else {
          normalYears.push(index);
        }
      }

      for (index = 0; index < 12; index += 1) {
        month = index + 1;
        astrodate = new AstroDate(2013, month);
        expect(astrodate.format('MMMM')).toBe(monthNames[index]);
        expect(astrodate.format('\'Month:\'MMMM')).toBe('Month:' + monthNames[index]);
        expect(astrodate.format('\'Month\'\'x:\'MMMM')).toBe('Month\'x:' + monthNames[index]);
        expect(astrodate.daysInMonth()).toBe(daysInGregorianMonth(2013, month));

        astrodate = new AstroDate(2012, month);
        expect(astrodate.format('MMMM')).toBe(monthNames[index]);
        expect(astrodate.daysInMonth()).toBe(daysInGregorianMonth(2012, month));
      }

      leapYears.forEach(function(leapYear) {
        expect(new AstroDate(leapYear, null).isLeapYear()).toBe(true);
      });

      normalYears.forEach(function(normalYear) {
        expect(!new AstroDate(normalYear, null).isLeapYear()).toBe(true);
      });

      for (index = 0; index < 7; index += 1) {
        astrodate = new AstroDate(2013, 9, index + 1);
        expect(astrodate.format('EEEE')).toBe(dayNames[index]);
        expect(astrodate.format('D')).toBe((244 + index).toString());
      }
    });
  });
}());
