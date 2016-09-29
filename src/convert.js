/*global require, module */
(function () {
  'use strict';

  var isUndefined = require('validate.io-undefined');
  var isString = require('is-string');
  var isNumber = require('is-number-object');
  var isDate = require('is-date-object');
  var isPlainObject = require('lodash.isplainobject');
  var utils = require('./utils.js');
  var isIn = require('./isIn.js');
  var daysIn = require('./daysIn.js');
  var isValid = require('./isValid.js');
  var leapYear = require('./leapYear.js');
  var dayOf = require('./dayOf.js');
  var commonData = require('./commonData.js');
  var normalise = require('./normalise.js');
  var BigNum = require('./BigNum.js');
  var weekToObjectKeys = ['year', 'week', 'weekDay'];
  var bnOffsetRx = /^([\-+]?\d{1,2}):(\d{2})(?::(\d{2}))?$/;

  function timeTo(struct, unit) {
    var value;
    switch (normalise.unit(unit)) {
      case 'day':
        value = struct.hour.div(24).plus(struct.minute.div(1440))
          .plus(struct.second.div(86400))
          .plus(struct.millisecond.div(86400000));
        break;
      case 'hour':
        value = struct.hour.plus(struct.minute.div(60))
          .plus(struct.second.div(3600)).plus(struct.millisecond.div(3600000));
        break;
      case 'minute':
        value = struct.hour.times(60).plus(struct.minute)
          .plus(struct.second.div(60)).plus(struct.millisecond.div(60000));
        break;
      case 'second':
        value = struct.hour.times(3600).plus(struct.minute.times(60))
          .plus(struct.second).plus(struct.millisecond.div(1000));
        break;
      case 'millisecond':
        value = struct.hour.times(3600000).plus(struct.minute.times(60000))
          .plus(struct.second.times(1000)).plus(struct.millisecond);
        break;
      default:
        throw new Error(unit);
    }
    return value;
  }

  function bnGetTimezoneOffset() {
    return new BigNum(new Date().getTimezoneOffset() * 60);
  }

  /**
   * Converts offset hours, minutes and seconds to seconds.
   * @private
   * @function
   * @param {number|string} hour
   * @param {number|string} [minute]
   * @param {number|string} [second]
   * @return {BigNum}
   */
  function offsetToSeconds(hour, minute, second) {
    return timeTo({
      hour: new BigNum(hour),
      minute: new BigNum(minute || 0),
      second: new BigNum(second || 0),
      millisecond: BigNum.zero()
    }, 'second');
  }

  function bnOffset(value) {
    var val = '';
    var bn;
    if (isNumber(value) || isString(value)) {
      val = Number(value);
      if (!Number.isFinite(val)) {
        val = value.toString().toUpperCase();
      }
    }
    if (isNumber(val)) {
      bn = new BigNum(val);
    } else if (val === 'Z' || val === 'UTC' || val === 'GMT') {
      bn = BigNum.zero();
    } else {
      if (bnOffsetRx.test(val)) {
        var off = val.match(bnOffsetRx);
        bn = offsetToSeconds(off[2], off[3], off[4]).neg();
      } else {
        bn = bnGetTimezoneOffset();
      }
    }
    return bn;
  }

  function arrayToStruct(arr, isJulian) {
    var struct = {};
    if (Array.isArray(arr)) {
      commonData.fullKeys.some(function(element, index) {
        var value = arr[index];
        var bn;
        if (isNumber(value) || utils.isStringWithContent(value)) {
          bn = new BigNum(value);
        } else if (BigNum.isBigNum(value)) {
          bn = value;
        } else {
          bn = new BigNum(NaN);
        }
        switch (element.full) {
          case 'year':
            if (!isIn.yearRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'month':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.monthRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'day':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.dayRange(bn, struct, isJulian)) {
              struct = {};
              return true;
            }
            break;
          case 'hour':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.hourRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'minute':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.minuteRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'second':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.secondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'millisecond':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.millisecondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'offset':
            bn = bnOffset(value);
            if (!isIn.offsetRange(bn)) {
              struct = {};
              return true;
            }
            break;
          default:
            throw new Error(element);
        }
        struct[element.full] = bn;
        return false;
      });
    }
    return struct;
  }

  function structToArray(struct) {
    return isValid(struct) ? commonData.fullKeys.map(function(element) {
      return struct[element.full];
    }) : [];
  }

  function structToArrayOfString(struct) {
    return structToArray(struct).map(String);
  }

  function objectToStruct(object, isJulian) {
    var struct = {};
    if (isPlainObject(object)) {
      commonData.fullKeys.some(function(element) {
        var value = object[element.alias] || object[element.full] || object[element.full + 's'];
        var bn;
        if (isNumber(value) || utils.isStringWithContent(value)) {
          bn = new BigNum(value);
        } else if (BigNum.isBigNum(value)) {
          bn = value;
        } else {
          bn = new BigNum(NaN);
        }
        switch (element.full) {
          case 'year':
            if (!isIn.yearRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'month':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.monthRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'day':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.dayRange(bn, struct, isJulian)) {
              struct = {};
              return true;
            }
            break;
          case 'hour':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.hourRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'minute':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.minuteRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'second':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.secondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'millisecond':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.millisecondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'offset':
            bn = bnOffset(value);
            if (!isIn.offsetRange(bn)) {
              struct = {};
              return true;
            }
            break;
          default:
            throw new Error(element);
        }
        struct[element.full] = bn;
        return false;
      });
    }
    return struct;
  }

  function structToObject(struct) {
    var newObject = {};
    if (isPlainObject(struct)) {
      commonData.fullKeys.forEach(function(key) {
        newObject[key.full] = struct[key.full].toString();
      });
    }
    return newObject;
  }

  function weekToObject(struct) {
    var newObject = {};
    if (isPlainObject(struct)) {
      weekToObjectKeys.forEach(function(key) {
        newObject[key] = struct[key].toString();
      });
    }
    return newObject;
  }

  function dateToStruct(date) {
    var struct = {};
    if (isDate(date) && Number.isFinite(date.getTime())) {
      commonData.fullKeys.forEach(function(element) {
        var value = new BigNum(date[element.local]());
        if (element.full === 'month') {
          value = value.plus(1);
        } else if (element.full === 'offset') {
          value = value.times(60);
        }
        struct[element.full] = value;
      });
    }
    return struct;
  }

  function fractionToTime(fraction, fractionIn, struct, isJulian) {
    var time = {};
    var totalMs;
    var days;
    fraction = new BigNum(fraction);
    switch (fractionIn) {
      case 'year':
        days = isJulian ? daysIn.julian.year(struct) : daysIn.gregorian.year(struct);
        totalMs = fraction.times(days.times(86400000));
        break;
      case 'month':
        days = isJulian ? daysIn.julian.month(struct) : daysIn.gregorian.month(struct);
        totalMs = fraction.times(days.times(86400000));
        break;
      case 'day':
        totalMs = fraction.times(86400000);
        break;
      case 'hour':
        totalMs = fraction.times(3600000);
        break;
      case 'minute':
        totalMs = fraction.times(60000);
        break;
      case 'second':
        totalMs = fraction.times(1000);
        break;
      case 'millisecond':
        totalMs = fraction;
        break;
      default:
        throw new Error(fractionIn);
    }
    time.hour = totalMs.div(3600000).floor();
    time.minute = totalMs.minus(time.hour.times(3600000)).div(60000).floor();
    time.second = totalMs.minus(time.hour.times(3600000))
      .minus(time.minute.times(60000)).div(1000).floor();
    time.millisecond = totalMs.minus(time.hour.times(3600000))
      .minus(time.minute.times(60000)).minus(time.second.times(1000)).floor();
    return time;
  }

  function gregorianToJd(struct) {
    var b = struct.year.minus(1);
    var c = b.times(365);
    var d = b.div(4).floor();
    var e = b.div(100).floor().neg();
    var f = b.div(400).floor();
    var g = struct.month.times(367).minus(362).div(12).floor();
    var h = 0;
    if (struct.month.gt(2)) {
      h = leapYear.isGregorian(struct) ? -1 : -2;
    }
    return new BigNum(1721424.5).plus(c).plus(d).plus(e).plus(f)
      .plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, 'day'));
  }

  function gregorianToJdn(struct) {
    return gregorianToJd(struct).round(1, 1);
  }

  function dayOfWeekNumber(struct) {
    var day = gregorianToJd(struct).plus(1.5).mod(7).floor();
    return day.lt(0) ? day.plus(7) : day;
  }

  function weekDayNumber(struct) {
    var bnWeekDay = dayOfWeekNumber(struct);
    return bnWeekDay.isZero() ? bnWeekDay.plus(7) : bnWeekDay;
  }

  function cldrDayKey(struct) {
    return commonData.dayKeys[dayOfWeekNumber(struct).toNumber()];
  }

  function getTime(struct) {
    return gregorianToJd(struct).minus(2440587.5).times(86400000).floor();
  }

 // DeltaT
  //http://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
  function deltaTime(struct, canonCorrection) {
    var y = struct.year.plus(struct.month.minus(0.5).div(12));
    var u;
    var t;
    var r;
    if (struct.year.inRange(-500, 2150)) {
      if (struct.year.lt(500)) {
        u = y.div(100);
        r = new BigNum(10583.6).minus(u.times(1014.41)).plus(u.pow(2)
          .times(33.78311)).minus(u.pow(3).times(5.952053)).minus(u.pow(4)
          .times(0.1798452)).plus(u.pow(5).times(0.022174192)).plus(u.pow(6)
          .times(0.0090316521));
      } else if (struct.year.lt(1600)) {
        u = y.minus(1000).div(100);
        r = new BigNum(1574.2).minus(u.times(556.01)).plus(u.pow(2)
          .times(71.23472)).plus(u.pow(3).times(0.319781)).minus(u.pow(4)
          .times(0.8503463)).minus(u.pow(5).times(0.005050998)).plus(u.pow(6)
          .times(0.0083572073));
      } else if (struct.year.lt(1700)) {
        t = y.minus(1600);
        r = new BigNum(120).minus(t.times(0.9808)).minus(t.pow(2)
          .times(0.01532)).plus(t.pow(3).div(7129));
      } else if (struct.year.lt(1800)) {
        t = y.minus(1700);
        r = new BigNum(8.83).plus(t.times(0.1603)).minus(t.pow(2)
            .times(0.0059285)).plus(t.pow(3).times(0.00013336))
          .minus(t.pow(4).div(1174000));
      } else if (struct.year.lt(1860)) {
        t = y.minus(1800);
        r = new BigNum(13.72).minus(t.times(0.332447)).plus(t.pow(2)
          .times(0.0068612)).plus(t.pow(3).times(0.0041116)).minus(t.pow(4)
          .times(0.00037436)).plus(t.pow(5).times(0.0000121272)).minus(t.pow(6)
          .times(0.0000001699)).plus(t.pow(7).times(0.000000000875));
      } else if (struct.year.lt(1900)) {
        t = y.minus(1860);
        r = new BigNum(7.62).plus(t.times(0.5737)).minus(t.pow(2)
          .times(0.251754)).plus(t.pow(3).times(0.01680668)).minus(t.pow(4)
          .times(0.0004473624)).plus(t.pow(5).div(233174));
      } else if (struct.year.lt(1920)) {
        t = y.minus(1900);
        r = new BigNum(-2.79).plus(t.times(1.494119)).minus(t.pow(2)
            .times(0.0598939)).plus(t.pow(3).times(0.0061966))
          .minus(t.pow(4).times(0.000197));
      } else if (struct.year.lt(1941)) {
        t = y.minus(1920);
        r = new BigNum(21.20).plus(t.times(0.84493)).minus(t.pow(2)
          .times(0.076100)).plus(t.pow(3).times(0.0020936));
      } else if (struct.year.lt(1961)) {
        t = y.minus(1950);
        r = new BigNum(29.07).plus(t.times(0.407)).minus(t.pow(2).div(233))
          .plus(t.pow(3).div(2547));
      } else if (struct.year.lt(1986)) {
        t = y.minus(1975);
        r = new BigNum(45.45).plus(t.times(1.067)).minus(t.pow(2).div(260))
          .minus(t.pow(3).div(718));
      } else if (struct.year.lt(2005)) {
        t = y.minus(2000);
        r = new BigNum(63.86).plus(t.times(0.3345))
          .minus(t.pow(2).times(0.060374)).plus(t.pow(3).times(0.0017275))
          .plus(t.pow(4).times(0.000651814))
          .plus(t.pow(5).times(0.00002373599));
      } else if (struct.year.lt(2050)) {
        t = y.minus(2000);
        r = new BigNum(62.92).plus(t.times(0.32217))
          .plus(t.pow(2).times(0.005589));
      } else {
        r = new BigNum(-20).plus(y.minus(1820).div(100).pow(2).times(32))
          .minus(y.neg().plus(2150).times(0.5628));
      }
    } else {
      u = y.minus(1820).div(100);
      r = u.pow(2).times(32).plus(-20);
    }
    if (canonCorrection && !struct.year.inRange(1955, 2004)) {
      r.plus(y.minus(1955).pow(2).times(-0.000012932));
    }
    return r.times(1000).trunc();
  }

  function julianToJd(struct) {
    var year = struct.year;
    var month = struct.month;
    if (month.lte(2)) {
      year = year.minus(1);
      month = month.plus(12);
    }
    var a = year.plus(4716).times(365.25).floor();
    var b = month.plus(1).times(30.6001).floor();
    return a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, 'day'));
  }

  function julianToJdn(struct) {
    return julianToJd(struct).round(1, 1);
  }

  function jdToGregorian(julianDate) {
    var struct = {};
    var jd;
    if (isNumber(julianDate) || utils.isStringWithContent(julianDate)) {
      jd = new BigNum(julianDate);
    } else if (BigNum.isBigNum(julianDate)) {
      jd = julianDate;
    }
    if (jd && jd.isFinite()) {
      jd = jd.plus(0.5);
      var a = jd.plus(68569).floor();
      var b = a.times(4).div(146097).floor();
      a = a.minus(b.times(146097).plus(3).div(4).floor());
      struct.year = a.plus(1).times(4000).div(1461001).floor();
      a = a.minus(struct.year.times(1461).div(4).floor()).plus(31);
      struct.month = a.times(80).div(2447).floor();
      struct.day = a.minus(struct.month.times(2447).div(80).floor());
      a = struct.month.div(11).floor();
      struct.month = struct.month.plus(2).minus(a.times(12));
      struct.year = b.minus(49).times(100).plus(struct.year).plus(a).floor();
      struct.offset = BigNum.zero();
      Object.assign(struct, fractionToTime(jd.modf().abs(), 'day'));
    }
    return struct;
  }

  function jdToJulian(julianDate) {
    var struct = {};
    var jd;
    if (isNumber(julianDate) || utils.isStringWithContent(julianDate)) {
      jd = new BigNum(julianDate);
    } else if (BigNum.isBigNum(julianDate)) {
      jd = julianDate;
    }
    if (jd && jd.isFinite()) {
      jd = jd.plus(0.5);
      var a = jd.floor();
      var b = a.plus(1524);
      var c = b.minus(122.1).div(365.25).floor();
      var d = c.times(365.25).floor();
      var g = b.minus(d);
      var e = g.div(30.6001).floor();
      struct.day = g.minus(e.times(30.6001).floor());
      struct.month = e.lt(14) ? e.minus(1) : e.minus(13);
      struct.year = struct.month.gt(2) ? c.minus(4716) : c.minus(4715);
      struct.offset = BigNum.zero();
      Object.assign(struct, fractionToTime(jd.modf().abs(), 'day'));
    }
    return struct;
  }

  function gregorianToMJD(struct) {
    return gregorianToJd(struct).minus(2400000.5);
  }

  function julianToMJD(struct) {
    return julianToJd(struct).minus(2400000.5);
  }

  function jdToMJD(jd) {
    return jd.minus(2400000.5);
  }

  function gregorianToJulian(struct) {
    return isValid(struct) ? jdToJulian(gregorianToJd(struct)) : {};
  }

  function julianToGregorian(struct) {
    return isValid(struct) ? jdToGregorian(julianToJd(struct)) : {};
  }

  function toUT(struct) {
    return jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(1000)).div(86400000));
  }

  function toTT(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function addDT(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).plus(deltaTime(struct)).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function subDT(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).plus(deltaTime(struct)).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function toLocal(struct) {
    var timezoneOffset = bnGetTimezoneOffset();
    var structLocal = jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(1000)).minus(timezoneOffset.times(1000)).div(86400000));
    structLocal.offset = timezoneOffset;
    return structLocal;
  }

  function toTAI(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(32184).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function toGPS(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(51184).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

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

  /**
   * Convert the ISO ordinal date to a date struct.
   * @private
   * @function
   * @param {(number|string|BigNum)} year
   * @param {(number|string|BigNum)} dayOfYear
   * @return {object}
   */
  function ordinalToCalendar(year, dayOfYear) {
    var struct = {
      year: new BigNum(year),
      month: BigNum.one(),
      day: BigNum.one(),
      hour: BigNum.zero(),
      minute: BigNum.zero(),
      second: BigNum.zero(),
      millisecond: BigNum.zero()
    };
    var result;
    dayOfYear = new BigNum(dayOfYear);
    if (dayOfYear.inRange(1, daysIn.gregorian.year(struct))) {
      struct = jdToGregorian(gregorianToJd(struct).plus(dayOfYear).minus(1));
      result = {
        sign: 1,
        year: struct.year,
        month: struct.month,
        day: struct.day
      };
    }
    return result;
  }

  /**
   * Convert the ISO week date to a date struct.
   * @private
   * @function
   * @param {(number|string|BigNum)} year
   * @param {(number|string|BigNum)} week
   * @param {(number|string|BigNum)} weekDay
   * @return {object}
   */
  function weekDateToCalendar(year, week, weekDay) {
    var struct = {
      year: new BigNum(year),
      month: BigNum.one(),
      day: new BigNum(4),
      hour: BigNum.zero(),
      minute: BigNum.zero(),
      second: BigNum.zero(),
      millisecond: BigNum.zero()
    };
    var dayOfYear = new BigNum(7).times(week).plus(weekDay).minus(weekDayNumber(struct).plus(3));
    if (dayOfYear.lt(1)) {
      struct.year = struct.year.minus(1);
      dayOfYear = daysIn.gregorian.year(struct).plus(dayOfYear);
    } else if (dayOfYear.gt(daysIn.gregorian.year(struct))) {
      struct.year = struct.year.plus(1);
      dayOfYear = dayOfYear.minus(daysIn.gregorian.year(struct));
    }
    return ordinalToCalendar(struct.year, dayOfYear);
  }

  /**
   * Returns the ISO week date.
   * @private
   * @function
   * @param {object} struct
   * @return {object}
   */
  function calendarToWeekDate(struct) {
    var weekDay = weekDayNumber(struct);
    var year = struct.year;
    var month = struct.month;
    var nearestThursday = struct.day.plus(4).minus(weekDay);
    var val;
    if (struct.month.equals(12) && nearestThursday.gt(31)) {
      val = {
        year: year.plus(1),
        week: BigNum.one(),
        weekDay: weekDay
      };
    } else {
      if (struct.month.equals(1) && nearestThursday.lt(1)) {
        year = struct.year.minus(1);
        month = new BigNum(12);
        nearestThursday = nearestThursday.plus(31);
      }
      val = {
        year: year,
        week: dayOf.gregorianYear({
          year: year,
          month: month,
          day: nearestThursday
        }).div(7).floor().plus(1),
        weekDay: weekDay
      };
    }
    return val;
  }

  /**
   * ISO says that the first week of a year is the first week containing
   * a Thursday. Extending that says that the first week of the month is
   * the first week containing a Thursday. ICU agrees.
   * @private
   * @function
   * @param {object} struct
   * @return {BigNum}
   */
  function calendarToWeekOfMonth(struct) {
    return struct.day.plus(4).minus(weekDayNumber(struct)).plus(6).div(7).floor();
  }

  /**
   * Returns the ISO weekDay number.
   * @private
   * @function
   * @param {object} struct
   * @return {BigNum}
   */
  function weekDayOfMonth(struct) {
    return struct.day.minus(1).div(7).plus(1).floor();
  }

  /**
   * Covert the fractional part of hours to a time object.
   * @private
   * @function
   * @param {(number|string)} number
   * @param {(number|string|BigNum)} offset
   * @param {(number|string)} hour
   * @return {object.BigNum}
   */
  function hourFractionToTime(number, offset, hour) {
    var frac = fractionToTime('0.' + number, 'hour');
    frac.hour = new BigNum(hour);
    frac.offset = new BigNum(offset);
    return frac;
  }

  /**
   * Covert the fractional part of minutes to a time object.
   * @private
   * @function
   * @param {(number|string)} number
   * @param {(number|string|BigNum)} offset
   * @param {(number|string|BigNum)} hour
   * @param {(number|string|BigNum)} [minute]
   * @param {(number|string|BigNum)} [second]
   * @return {object.BigNum}
   */
  function minuteFractionToTime(number, offset, hour, minute, second) {
    var frac = fractionToTime('0.' + number, 'minute');
    frac.hour = new BigNum(hour);
    if (!isUndefined(minute)) {
      frac.minute = new BigNum(minute);
    }
    if (!isUndefined(second)) {
      frac.second = new BigNum(second);
    }
    frac.offset = new BigNum(offset);
    return frac;
  }

  /**
   * Covert the fractional part of seconds to a time object.
   * @private
   * @function
   * @param {(number|string|BigNum)} number
   * @param {(number|string|BigNum)} offset
   * @param {(number|string|BigNum)} hour
   * @param {(number|string|BigNum)} minute
   * @param {(number|string|BigNum)} second
   * @return {object.BigNum}
   */
  function secondFractionToTime(number, offset, hour, minute, second) {
    var frac = fractionToTime('0.' + number.toString(), 'second');
    frac.hour = new BigNum(hour);
    frac.minute = new BigNum(minute);
    frac.second = new BigNum(second);
    frac.offset = new BigNum(offset);
    return frac;
  }

  /**
   * Covert arguents year, month and date to an object.
   * @private
   * @function
   * @param {(number|string|BigNum)} year
   * @param {(number|string|BigNum)} month
   * @param {(number|string|BigNum)} day
   * @return {object.BigNum}
   */
  function dateToObject(year, month, day) {
    return {
      year: new BigNum(year),
      month: new BigNum(month),
      day: new BigNum(day)
    };
  }

  module.exports = {
    struct: {
      timeTo: timeTo,
      toArray: structToArray,
      toArrayOfString: structToArrayOfString,
      toObject: structToObject,
      dayOfWeekNumber: dayOfWeekNumber,
      gregorianToJd: gregorianToJd,
      gregorianToJdn: gregorianToJdn,
      toWeekObject: weekToObject,
      fractionToTime: fractionToTime,
      weekDayNumber: weekDayNumber,
      cldrDayKey: cldrDayKey,
      getTime: getTime,
      deltaTime: deltaTime,
      julianToJd: julianToJd,
      julianToJdn: julianToJdn,
      gregorianToMJD: gregorianToMJD,
      julianToMJD: julianToMJD,
      jdToMJD: jdToMJD,
      gregorianToJulian: gregorianToJulian,
      julianToGregorian: julianToGregorian,
      dayOfGregorianYear: dayOfGregorianYear,
      dayOfJulianYear: dayOfJulianYear,
      toUT: toUT,
      toTT: toTT,
      addDT: addDT,
      subDT: subDT,
      toLocal: toLocal,
      toTAI: toTAI,
      toGPS: toGPS,
      calendarToWeekDate: calendarToWeekDate,
      weekDayOfMonth: weekDayOfMonth,
      calendarToWeekOfMonth: calendarToWeekOfMonth
    },
    array: {
      toStruct: arrayToStruct,
    },
    object: {
      toStruct: objectToStruct
    },
    date: {
      toStruct: dateToStruct,
      getTimezoneOffset: bnGetTimezoneOffset
    },
    offsetToSeconds: offsetToSeconds,
    bnOffset: bnOffset,
    ordinalToCalendar: ordinalToCalendar,
    weekDateToCalendar: weekDateToCalendar,
    hourFractionToTime: hourFractionToTime,
    minuteFractionToTime: minuteFractionToTime,
    secondFractionToTime: secondFractionToTime,
    dateToObject: dateToObject,
    jdToGregorian: jdToGregorian,
    jdToJulian: jdToJulian
  };
}());
