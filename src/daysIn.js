/*global require, module */
(function () {
  'use strict';

  var leapYear = require('./leapYear.js');
  var BigNum = require('./BigNum.js');

  function daysInGregorianMonth(struct) {
    return struct.month.eq(2) ?
      new BigNum(leapYear.isGregorian(struct) ? 29 : 28) :
      struct.month.minus(1).mod(7).mod(2).neg().plus(31);
  }

  function daysInJulianMonth(struct) {
    return new BigNum(struct.month.eq(2) && leapYear.isJulian(struct) ? 29 : 28);
  }

  function daysInGregorianYear(struct) {
    return new BigNum(leapYear.isGregorian(struct) ? 366 : 365);
  }

  function daysInJulianYear(struct) {
    return new BigNum(leapYear.isJulian(struct) ? 366 : 365);
  }

  module.exports = {
    gregorian: {
      month: daysInGregorianMonth,
      year: daysInGregorianYear
    },
    julian: {
      month: daysInJulianMonth,
      year: daysInJulianYear
    }
  };
}());
