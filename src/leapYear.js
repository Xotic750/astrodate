/*global require, module */
(function () {
  'use strict';

  function isGregorianLeapYear(struct) {
    return struct.year.mod(400).isZero() ||
      (!struct.year.mod(100).isZero() && struct.year.mod(4).isZero());
  }

  function isJulianLeapYear(struct) {
    return struct.year.mod(4).equals(0);
  }

  module.exports = {
    isGregorian: isGregorianLeapYear,
    isJulian:  isJulianLeapYear
  };
}());
