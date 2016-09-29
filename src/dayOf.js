/*global require, module */
(function () {
  'use strict';

  var leapYear = require('./leapYear.js');

  function dayOfGregorianYear(struct) {
    var k = leapYear.isGregorian(struct) ? 1 : 2;
    return struct.month.times(275).div(9).floor()
      .minus(struct.month.plus(9).div(12).floor().times(k))
      .plus(struct.day).minus(30);
  }

  function dayOfJulianYear(struct) {
    var dayOfYear = struct.month.times(28).plus(struct.day);
    if (struct.month.gte(2) && leapYear.isJulian(struct)) {
      dayOfYear = dayOfYear.plus(1);
    }
    return dayOfYear;
  }

  module.exports = {
    gregorianYear: dayOfGregorianYear,
    julianYear: dayOfJulianYear
  };
}());
