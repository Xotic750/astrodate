/*global require, module */
(function () {
  'use strict';

  var isPlainObject = require('lodash.isplainobject');
  var daysIn = require('./daysIn.js');
  var data = require('./data.js');

  function inYearRange(year) {
    return year.isFinite();
  }

  function inMonthRange(month) {
    return month.inRange(1, 12);
  }

  function inDayRange(day, struct, isJulian) {
    return day.inRange(1, isJulian ? daysIn.julian.month(struct) : daysIn.gregorian.month(struct));
  }

  function inHourRange(hour) {
    return hour.inRange(0, 24);
  }

  function inMinuteRange(minute, struct) {
    return (struct.hour.equals(24) && minute.isZero()) ||
      (!struct.hour.equals(24) && minute.gte(0) && minute.lt(60));
  }

  function inSecondRange(second, struct) {
    var maxSecond = 60;
    if (struct.year.gte(1961) && struct.hour.equals(23) && struct.minute.equals(59)) {
      if (!isPlainObject(data.leapSeconds)) {
        throw new Error('No leap second table!');
      }
      var leapSecond = data.leapSeconds[struct.year.toString()];
      if (isPlainObject(leapSecond)) {
        leapSecond = leapSecond[struct.month.toString()];
        if (isPlainObject(leapSecond)) {
          leapSecond = Number(leapSecond[struct.day.toString()]);
          if (Number.isFinite(leapSecond)) {
            maxSecond += leapSecond;
          }
        }
      }
    }
    return (struct.hour.equals(24) && second.isZero()) ||
      (!struct.hour.equals(24) && second.gte(0) && second.lt(maxSecond));
  }

  function inMillisecondRange(millisecond, struct) {
    return (struct.hour.equals(24) && millisecond.isZero()) ||
      (!struct.hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
  }

  function inOffsetRange(offset) {
    return offset.inRange(-43200, 50400);
  }

  /*
  function inWeekRange(week, year) {
    return offset.inRange(1, 53);
  }

  function inWeekDayRange(weekDay) {
    return weekDay.inRange(1, 7);
  }
  */

  module.exports = {
    yearRange: inYearRange,
    monthRange: inMonthRange,
    dayRange: inDayRange,
    hourRange: inHourRange,
    minuteRange: inMinuteRange,
    secondRange: inSecondRange,
    millisecondRange: inMillisecondRange,
    offsetRange: inOffsetRange
  };
}());
