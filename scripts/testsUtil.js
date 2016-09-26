/*global, module */
(function() {
  'use strict';

  var testsUtil = {};

  testsUtil.monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  testsUtil.dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  testsUtil.isGregorianLeapYear = function isGregorianLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };

  testsUtil.daysInGregorianMonth = function daysInGregorianMonth(year, month) {
    var days;
    if (month === 2) {
      days = 28;
      if (testsUtil.isGregorianLeapYear(year)) {
        days += 1;
      }
    } else {
      days = 31 - (((month - 1) % 7) % 2);
    }
    return days;
  };

  testsUtil.randomInt = function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  module.exports = testsUtil;
}());
