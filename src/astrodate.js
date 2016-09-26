/**
 * @version 0.8.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @see https://nodejs.org/api/AstroDate.html
 * @module AstroDate
 */
;(function() {
  'use strict';

  var isUndefined = require('validate.io-undefined');
  var isObjectLike = require('is-object-like-x');
  var isPlainObject = require('lodash.isplainobject');
  var isString = require('is-string');
  var isNumber = require('is-number-object');
  var isDate = require('is-date-object');
  var LanguageCan = require('./languageCan.js');
  var countCharacter = require('./countCharacter.js');
  var replaceTokens = require('./replaceTokens.js');
  var BigNum = require('bignumber.js').another({
    DECIMAL_PLACES: 9,
    ROUNDING_MODE: 0,
    EXPONENTIAL_AT: [-7, 20],
    RANGE: [-1000000000, 1000000000],
    ERRORS: true
  });

  /**
   * The BigNum library namespace.
   * @ignore
   * @see {@link http://mikemcl.github.io/bignumber.js/}
   */
  Object.defineProperties(BigNum.prototype, {
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {BigNum}
     */
    trunc: {
      value: function() {
        return this.round(0, 1);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {boolean}
     */
    inRange: {
      value: function(min, max) {
        return this.gte(min) && this.lte(max);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {BigNum}
     */
    modf: {
      value: function() {
        return this.isFinite() ? this.mod(this.trunc()) : new BigNum(NaN);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {BigNum}
     */
    difference: {
      value: function(value) {
        return this.gt(value) ? this.minus(value) : this.neg().plus(value);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {string}
     */
    padLeadingZero: {
      value: function(size) {
        return this.toString().padStart(size, '0');
      }
    }
  });

  Object.defineProperties(BigNum, {
    /**
     * @memberOf external:BigNum
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    isBigNum: {
      value: function(inputArg) {
        // need to fix instanceof
        return isObjectLike(inputArg) && inputArg instanceof BigNum;
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @param {(number|string)} inputArg
     * @return {BigNum}
     */
    trunc: {
      value: function(number) {
        return new BigNum(number).trunc();
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @param {(number|string)} inputArg
     * @return {BigNum}
     */
    modf: {
      value: function(number) {
        return new BigNum(number).modf();
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @param {(number|string)} number1
     * @param {(number|string)} number2
     * @return {BigNum}
     *
     */
    difference: {
      value: function(number1, number2) {
        return new BigNum(number1).difference(number2);
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @return {BigNum}
     */
    zero: {
      value: function() {
        return new BigNum(0);
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @return {BigNum}
     */
    one: {
      value: function() {
        return new BigNum(1);
      }
    }
  });

  var invalidDate = 'Invalid Date';
  /*
  var j2000 = {
    jdtt: '2451545.0',
    tt: '2000-01-01T12:00:00.000Z',
    tai: '2000-01-01T11:59:27.816Z',
    utc: '2000-01-01T11:58:55.816Z'
  };
  */
  /**
   * For normalising options.
   * @private
   * @readonly
   * @type {array.<object>}
   */
  var fullOptions = [{
    full: 'julian',
    alias: 'j'
  }, {
    full: 'offset',
    alias: 'o'
  }];
  /**
   * For normalising user input and looking up Date object methods.
   * @private
   * @readonly
   * @type {array.<object>}
   */
  var fullKeys = [{
    full: 'year',
    alias: 'y',
    local: 'getFullYear'
  }, {
    full: 'month',
    alias: 'M',
    local: 'getMonth'
  }, {
    full: 'day',
    alias: 'd',
    local: 'getDate'
  }, {
    full: 'hour',
    alias: 'h',
    local: 'getHours'
  }, {
    full: 'minute',
    alias: 'm',
    local: 'getMinutes'
  }, {
    full: 'second',
    alias: 's',
    local: 'getSeconds'
  }, {
    full: 'millisecond',
    alias: 'ms',
    local: 'getMilliseconds'
  }, {
    full: 'offset',
    alias: 'z',
    local: 'getTimezoneOffset'
  }];
  /**
   * For looking up CLDR day translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  /**
   * For looking up CLDR month translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  //var monthKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  /**
   * For looking up CLDR format translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var nameTypes = ['format', 'stand-alone'];
  /**
   * For looking up CLDR width translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  //var widthTypes = ['wide', 'abbreviated', 'narrow'],
  /**
   * For looking up CLDR date and time patterns.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var formatTypes = ['full', 'long', 'medium', 'short'];
  var invalidISOCharsRx = /[^\d\-+WT Z:,\.]/;
  //var replaceTokenRX = /([^']+)|('[^']+')/g;
  //var unmatchedTokenRx = /[^a-z]/gi;
  var bnOffsetRx = /^([\-+])?(\d{1,2}):(\d{2})(?::(\d{2}))?$/;
  /**
   * For holding CLDR language specific data.
   * @private
   * @type {object}
   */
  var languages = require('./language.json');
  //var timeData = require('../node_modules/cldr-core/supplemental/timeData.json').supplemental.timeData;
  var weekData = require('../node_modules/cldr-core/supplemental/weekData.json').supplemental.weekData;
  /**
   * For parsing CLDR date patterns.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var datePatterns;
  /**
   * For parsing CLDR time patterns
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var timePatterns;
  /**
   * The default language.
   * @private
   * @type {string}
   */
  var en = 'en';
  /**
   * The current default language of the AstroDate constructor.
   * @private
   * @type {object}
   */
  var defaultLanguage = new LanguageCan(en);
  //var calendarTypes;
  var leapSeconds = require('./leapSeconds.json');
  /**
   * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
   * @function
   * @private
   * @param {NumberLike} value
   * @param {NumberLike} min
   * @param {NumberLike} max
   * @returns {boolean}
   */
  function inRange(value, min, max) {
    return value >= Math.min(min, max) && value <= Math.max(min, max);
  }

  function isStringWithContent(value) {
    return isString(value) && value.trim().length > 0;
  }

  function isGregorianLeapYear(struct) {
    return struct.year.mod(400).isZero() ||
      (!struct.year.mod(100).isZero() && struct.year.mod(4).isZero());
  }

  function isJulianLeapYear(struct) {
    return struct.year.mod(4).equals(0);
  }

  function daysInGregorianMonth(struct) {
    if (struct.month.eq(2)) {
      return new BigNum(isGregorianLeapYear(struct) ? 29 : 28);
    }
    return struct.month.minus(1).mod(7).mod(2).neg().plus(31);
  }

  function daysInJulianMonth(struct) {
    return new BigNum(struct.month.eq(2) && isJulianLeapYear(struct) ? 29 : 28);
  }

  function daysInGregorianYear(struct) {
    return new BigNum(isGregorianLeapYear(struct) ? 366 : 365);
  }

  function daysInJulianYear(struct) {
    return new BigNum(isJulianLeapYear(struct) ? 366 : 365);
  }

  function inYearRange(year) {
    return year.isFinite();
  }

  function inMonthRange(month) {
    return month.inRange(1, 12);
  }

  function inDayRange(day, dim) {
    return day.inRange(1, dim);
  }

  function inHourRange(hour) {
    return hour.inRange(0, 24);
  }

  function inMinuteRange(minute, hour) {
    return (hour.equals(24) && minute.isZero()) ||
      (!hour.equals(24) && minute.gte(0) && minute.lt(60));
  }

  function inSecondRange(second, struct) {
    var maxSecond = 60;
    if (struct.year.gte(1961) && struct.hour.equals(23) && struct.minute.equals(59)) {
      if (!isPlainObject(leapSeconds)) {
        throw new Error('No leap second table!');
      }
      var leapSecond = leapSeconds[struct.year.toString()];
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

  function inMillisecondRange(millisecond, hour) {
    return (hour.equals(24) && millisecond.isZero()) ||
      (!hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
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

  function isValid(struct, julian) {
    var valid = false;
    if (isPlainObject(struct)) {
      valid = !fullKeys.some(function(element) {
        var bn = struct[element.full];
        if (!BigNum.isBigNum(bn)) {
          return true;
        }
        switch (element.full) {
          case 'year':
            if (!inYearRange(bn)) {
              return true;
            }
            break;
          case 'month':
            if (!inMonthRange(bn)) {
              return true;
            }
            break;
          case 'day':
            var dim = julian ? daysInJulianMonth(struct) : daysInGregorianMonth(struct);
            if (!inDayRange(bn, dim)) {
              return true;
            }
            break;
          case 'hour':
            if (!inHourRange(bn)) {
              return true;
            }
            break;
          case 'minute':
            if (!inMinuteRange(bn, struct.hour)) {
              return true;
            }
            break;
          case 'second':
            if (!inSecondRange(bn, struct)) {
              return true;
            }
            break;
          case 'millisecond':
            if (!inMillisecondRange(bn, struct.hour)) {
              return true;
            }
            break;
          case 'offset':
            if (!inOffsetRange(bn)) {
              return true;
            }
            break;
            /*
            case 'week':
              if (!inWeekRange(bn)) {
                  return true;
              }
              break;
            case 'weekDay':
              if (!inWeekDayRange(bn)) {
                  return true;
              }
              break;
            */
          default:
            throw new Error(element.full);
        }
        return false;
      });
    }
    return valid;
  }

  function dayOfGregorianYear(struct) {
    var k = isGregorianLeapYear(struct) ? 1 : 2;
    return struct.month.times(275).div(9).floor()
      .minus(struct.month.plus(9).div(12).floor().times(k))
      .plus(struct.day).minus(30);
  }

  function dayOfJulianYear(struct) {
    var dayOfYear = struct.month.times(28).plus(struct.day);
    if (struct.month.gte(2) && isJulianLeapYear(struct)) {
      dayOfYear = dayOfYear.plus(1);
    }
    return dayOfYear;
  }

  function normaliseUnits(unitString) {
    var unit;
    if (isString(unitString)) {
      unitString = unitString.trim().toLowerCase();
      if (unitString.length > 2 && unitString.endsWith('s')) {
        unitString = unitString.slice(0, -1);
      }
      fullKeys.some(function(element) {
        if (unitString === element.alias || unitString === element.full) {
          unit = element.full;
          return true;
        }
        return false;
      });
    }
    return unit;
  }

  function normaliseOptions(options) {
    var normalised = {};
    if (isPlainObject(options)) {
      Object.keys(options).forEach(function(element) {
        element = element.toLowerCase();
        fullOptions.forEach(function(opt) {
          if (element === opt.alias || element === opt.full) {
            normalised[element] = opt.full;
          }
        });
      });
    }
    return normalised;
  }

  function timeTo(struct, unit) {
    var value;
    switch (normaliseUnits(unit)) {
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

  function gregorianToJd(struct) {
    var b = struct.year.minus(1);
    var c = b.times(365);
    var d = b.div(4).floor();
    var e = b.div(100).floor().neg();
    var f = b.div(400).floor();
    var g = struct.month.times(367).minus(362).div(12).floor();
    var h = 0;
    if (struct.month.gt(2)) {
      h = isGregorianLeapYear(struct) ? -1 : -2;
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
    return dayKeys[Number(dayOfWeekNumber(struct))];
  }

  function fractionToTime(fraction, fractionIn, struct, julian) {
    var time = {};
    var totalMs;
    var days;
    fraction = new BigNum(fraction);
    switch (fractionIn) {
      case 'year':
        days = julian ? daysInJulianYear(struct) : daysInGregorianYear(struct);
        totalMs = fraction.times(days.times(86400000));
        break;
      case 'month':
        days = julian ? daysInJulianMonth(struct) : daysInGregorianMonth(struct);
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

  function bnGetTimezoneOffset() {
    return new BigNum(new Date().getTimezoneOffset() * 60);
  }

  /**
   * Changes a '-' or '+' character to a multipler value '-1' or '+1' string.
   * @private
   * @function
   * @param {string} sign
   * @return {string}
   */
  function toSignMultipler(sign) {
    return sign + '1';
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
        bn = offsetToSeconds(off[2], off[3], off[4])
          .times(toSignMultipler(off[1] || '+')).neg();
      } else {
        bn = bnGetTimezoneOffset();
      }
    }
    return bn;
  }

  function arrayToStruct(arr, julian) {
    var struct = {};
    if (Array.isArray(arr)) {
      fullKeys.some(function(element, index) {
        var value = arr[index];
        var bn;
        if (isNumber(value) || isStringWithContent(value)) {
          bn = new BigNum(value);
        } else if (BigNum.isBigNum(value)) {
          bn = value;
        } else {
          bn = new BigNum(NaN);
        }
        switch (element.full) {
          case 'year':
            if (!inYearRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'month':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!inMonthRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'day':
            var dim = julian ? daysInJulianMonth(struct) : daysInGregorianMonth(struct);
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!inDayRange(bn, dim)) {
              struct = {};
              return true;
            }
            break;
          case 'hour':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inHourRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'minute':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inMinuteRange(bn, struct.hour)) {
              struct = {};
              return true;
            }
            break;
          case 'second':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inSecondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'millisecond':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inMillisecondRange(bn, struct.hour)) {
              struct = {};
              return true;
            }
            break;
          case 'offset':
            bn = bnOffset(value);
            if (!inOffsetRange(bn)) {
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
    return isValid(struct) ? fullKeys.map(function(element) {
      return struct[element.full];
    }) : [];
  }

  /*
  function returnElementToString(element) {
    return element.toString();
  }
  */

  function structToArrayOfString(struct) {
    return structToArray(struct).map(String);
  }

  function objectToStruct(object, julian) {
    var struct = {};
    if (isPlainObject(object)) {
      fullKeys.some(function(element) {
        var value = object[element.alias] || object[element.full] || object[element.full + 's'];
        var bn;
        if (isNumber(value) || isStringWithContent(value)) {
          bn = new BigNum(value);
        } else if (BigNum.isBigNum(value)) {
          bn = value;
        } else {
          bn = new BigNum(NaN);
        }
        switch (element.full) {
          case 'year':
            if (!inYearRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'month':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!inMonthRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'day':
            var dim = julian ? daysInJulianMonth(struct) : daysInGregorianMonth(struct);
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!inDayRange(bn, dim)) {
              struct = {};
              return true;
            }
            break;
          case 'hour':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inHourRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'minute':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inMinuteRange(bn, struct.hour)) {
              struct = {};
              return true;
            }
            break;
          case 'second':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inSecondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'millisecond':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!inMillisecondRange(bn, struct.hour)) {
              struct = {};
              return true;
            }
            break;
          case 'offset':
            bn = bnOffset(value);
            if (!inOffsetRange(bn)) {
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
      fullKeys.forEach(function(key) {
        newObject[key.full] = struct[key.full].toString();
      });
    }
    return newObject;
  }

  var weekToObjectKeys = ['year', 'week', 'weekDay'];

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
      fullKeys.forEach(function(element) {
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

  /*
  function julianToJdn(struct) {
    return julianToJd(struct).round(1, 1);
  }
  */

  function jdToGregorian(julianDate) {
    var struct = {};
    var jd;
    if (isNumber(julianDate) || isStringWithContent(julianDate)) {
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
    if (isNumber(julianDate) || isStringWithContent(julianDate)) {
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

  /*
  function jdToMJD(jd) {
    return jd.minus(2400000.5);
  }
  */

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

  /*
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
  */

  /**
   * Converts a date struct to an ISO extended dateTime stamp.
   * This routine needs changing so that the type of ISO dateTime stamp can be choosen.
   * @private
   * @function
   * @param {object} struct
   * @param {number} userPadding
   * @return {string}
   */
  function toISOString(struct, userPadding) {
    var string = '';
    var index = 0;
    var padding;
    var value;
    var key;
    var number = Number(userPadding);
    if (number < 5 || !Number.isFinite(number)) {
      number = 6;
    }
    for (var count = 0; count < 3; count += 1) {
      if (isUndefined(struct[fullKeys[count].full])) {
        index = 3;
        break;
      }
    }
    for (var last = fullKeys.length - 1; index < last; index += 1) {
      key = fullKeys[index].full;
      value = struct[key];
      if (key === 'year') {
        if (value.lt(0)) {
          string += '-';
          padding = number;
        } else if (value.gte(10000)) {
          string += '+';
          padding = number;
        } else {
          padding = 4;
        }
      } else if (key === 'hour') {
        string += 'T';
        padding = 2;
      } else if (key === 'millisecond') {
        padding = 3;
      } else {
        padding = 2;
      }
      string += value.abs().padLeadingZero(padding);
      if (index < 2) {
        string += '-';
      } else if (inRange(index, 3, 4)) {
        string += ':';
      } else if (key === 'second') {
        string += '.';
      }
    }
    value = struct.offset;
    if (value.isZero()) {
      string += 'Z';
    } else {
      string += value.lte(0) ? '+' : '-';
      value = fractionToTime(value.abs(), 'second');
      string += value.hour.padLeadingZero(2) + ':' + value.minute.padLeadingZero(2);
    }
    return string;
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
    if (dayOfYear.inRange(1, daysInGregorianYear(struct))) {
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
      dayOfYear = daysInGregorianYear(struct).plus(dayOfYear);
    } else if (dayOfYear.gt(daysInGregorianYear(struct))) {
      struct.year = struct.year.plus(1);
      dayOfYear = dayOfYear.minus(daysInGregorianYear(struct));
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
        week: dayOfGregorianYear({
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
   * Returns true if BigNum is any number except if it is minus zero.
   * @private
   * @function
   * @param {BigNum} bn
   * @param {string} sign
   * @return {boolean}
   */
  function isNotNegativeZero(bn, sign) {
    return sign === '+' || !bn.isZero() || (bn.isZero() && sign !== '-');
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
   * Splits the given string into its date and time string components.
   * @private
   * @function
   * @param {string} string
   * @return {object}
   */
  function isoSplitDateTime(string) {
    var dtObject = {
      date: '',
      time: ''
    };
    var firstSplit = string.trim().split(/[T ]/);
    var splitLength = firstSplit.length;
    var element;
    if (inRange(splitLength, 1, 2)) {
      if (splitLength === 1) {
        element = firstSplit[0];
        // we make a best guess
        if (element.slice(-4) === '-' ||
          element.startsWith('+') ||
          element.startsWith('-') ||
          element.length === 2 ||
          countCharacter(element, '-') >= 2 ||
          element.includes('W')) {
          // only ordinal dates have a "-" at -4
          // only dates begin with "+" or "-"
          // dates and times can be only 2 digits but will default to
          // date unless preceeded with " " or "T"
          // only dates have 2 or more "-"
          // only dates have a week number "W"
          dtObject.date = element;
          dtObject.time = '00';
        } else if (element.endsWith('Z') ||
          element.includes(':') ||
          element.includes('.') ||
          element.includes(',') ||
          element.includes('+') ||
          element.slice(-3) === '-') {
          // only times end with a "Z"
          // only times contain a ":" or a "." or a ","
          // only times contain a "+" that is not at the beginning
          // only times have a "-" at -3
          dtObject.date = '00';
          dtObject.time = element;
        } else {
          // otherwise we guess it is a date
          dtObject.date = element;
          dtObject.time = '00';
        }
      } else {
        dtObject.date = firstSplit[0] || '00';
        dtObject.time = firstSplit.slice(-1)[0];
      }
    }
    return dtObject;
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

  /**
   * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 date patterns.
   * @private
   * @readonly
   * @type {object.array.object}
   * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
   */
  datePatterns = {

    /**
     * The basic date patterns.
     * @private
     * @type {array.object}
     */
    basic: [{
      /**
       * yy
       * @private
       */
      regex: /^(\d{2})$/,
      func: function(rxResult) {
        return dateToObject(rxResult[1] + '00', 1, 1);
      }
    }, {
      /**
       * yyyy
       * @private
       */
      regex: /^(\d{4})$/,
      func: function(rxResult) {
        return dateToObject(rxResult[1], 1, 1);
      }
    }, {
      /**
       * yyyyMMdd
       * @private
       */
      regex: /^(\d{4})(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return dateToObject(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * yyyyddd
       * @private
       */
      regex: /^(\d{4})(\d{3})$/,
      func: function(rxResult) {
        return ordinalToCalendar(rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * yyyyWww
       * @private
       */
      regex: /^(\d{4})W(\d{2})$/,
      func: function(rxResult) {
        return weekDateToCalendar(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyyWwwD
       * @private
       */
      regex: /^(\d{4})W(\d{2})([1-7]{1})$/,
      func: function(rxResult) {
        return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
      }
    }],

    /**
     * The extended date patterns.
     * @private
     * @type {array.object}
     */
    extended: [{
      /**
       * -+[..y]yyyyy-MM
       * @private
       */
      regex: /^([\-+])(\d{5,})-(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[1];
        var year = new BigNum(rxResult[2]);
        if (isNotNegativeZero(year, sign)) {
          return dateToObject(year.times(toSignMultipler(sign)), rxResult[3], 1);
        }
      }
    }, {
      /**
       * yyyy-MM
       * @private
       */
      regex: /^(\d{4})-(\d{2})$/,
      func: function(rxResult) {
        return dateToObject(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyy-MM-dd
       * @private
       */
      regex: /^(\d{4})-(\d{2})-(\d{2})$/,
      func: function(rxResult) {
        return dateToObject(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * -+[..y]yyyyy-MM-dd
       * @private
       */
      regex: /^([\-+])(\d{5,})-(\d{2})-(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[1];
        var year = new BigNum(rxResult[2]);
        if (isNotNegativeZero(year, sign)) {
          return dateToObject(year.times(toSignMultipler(sign)), rxResult[3], rxResult[4]);
        }
      }
    }, {
      /**
       * yyyy-DDD
       * @private
       */
      regex: /^(\d{4})-(\d{3})$/,
      func: function(rxResult) {
        return ordinalToCalendar(rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * yyyy-Www
       * @private
       */
      regex: /^(\d{4})-W(\d{2})$/,
      func: function(rxResult) {
        return weekDateToCalendar(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyy-Www-D
       * @private
       */
      regex: /^(\d{4})-W(\d{2})-([1-7]{1})$/,
      func: function(rxResult) {
        return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * -+[..y]yyyy-DDD
       * @private
       */
      regex: /^([\-+])(\d{5,})-(\d{3})$/,
      func: function(rxResult) {
        var sign = rxResult[1];
        var year = new BigNum(rxResult[2]);
        if (isNotNegativeZero(year, sign)) {
          return ordinalToCalendar(year.times(toSignMultipler(sign)), rxResult[3]);
        }
      }
    }, {
      /**
       * -+[..y]yyyyy-Www
       * @private
       */
      regex: /^([\-+])(\d{5,})-W(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[1];
        var year = new BigNum(rxResult[2]);
        if (isNotNegativeZero(year, sign)) {
          return weekDateToCalendar(year.times(toSignMultipler(sign)), rxResult[3], 1);
        }
      }
    }, {
      /**
       * -+[..y]yyyyy-Www-D
       * @private
       */
      regex: /^([\-+])(\d{5,})-W(\d{2})-([1-7]{1})$/,
      func: function(rxResult) {
        var sign = rxResult[1];
        var year = new BigNum(rxResult[2]);
        if (isNotNegativeZero(year, sign)) {
          return weekDateToCalendar(year.times(toSignMultipler(sign)), rxResult[3], rxResult[4]);
        }
      }
    }]
  };

  /**
   * Covert arguents hour, minute, second, offset, sign to an object.
   * @private
   * @function
   * @param {(number|string|BigNum)} hour
   * @param {(number|string|BigNum)} minute
   * @param {(number|string|BigNum)} second
   * @param {(number|string|BigNum)} offset
   * @param {string} sign
   * @return {object.BigNum}
   */
  function createTimeObject(hour, minute, second, offset, sign) {
    return {
      hour: new BigNum(hour),
      minute: new BigNum(minute),
      second: new BigNum(second),
      millisecond: BigNum.zero(),
      offset: new BigNum(offset).times(toSignMultipler(sign || '-')).neg()
    };
  }

  /**
   * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 time patterns.
   * @private
   * @readonly
   * @type {object.array.object}
   * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
   */
  timePatterns = {

    /**
     * The basic time patterns.
     * @private
     * @type {array.object}
     */
    basic: [{
      /**
       * HH
       * @private
       */
      regex: /^(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, bnGetTimezoneOffset());
      }
    }, {
      /**
       * HHMM
       * @private
       */
      regex: /^(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, bnGetTimezoneOffset());
      }
    }, {
      /**
       * HHMMSS
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], bnGetTimezoneOffset());
      }
    }, {
      /**
       * HHZ
       * @private
       */
      regex: /^(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, 0);
      }
    }, {
      /**
       * HHMMZ
       * @private
       */
      regex: /^(\d{2})(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, 0);
      }
    }, {
      /**
       * HHMMSSZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], 0);
      }
    }, {
      /**
       * HH-+ZZ
       * @private
       */
      regex: /^(\d{2})([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[2];
        var offset = offsetToSeconds(rxResult[3]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], 0, 0, offset, sign);
        }
      }
    }, {
      /**
       * HHMM-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
        }
      }
    }, {
      /**
       * HHMMSS-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
        }
      }
    }, {
      /**
       * HH-+ZZZZ
       * @private
       */
      regex: /^(\d{2})([\-+])(\d{2})(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[2];
        var offset = offsetToSeconds(rxResult[3], rxResult[4]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], 0, 0, offset, sign);
        }
      }
    }, {
      /**
       * HHMM-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})([\-+])(\d{2})(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4], rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
        }
      }
    }, {
      /**
       * HHMMSS-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})([\-+])(\d{2})(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5], rxResult[6]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
        }
      }
    }, {
      /**
       * HH.,[..f]f
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return hourFractionToTime(rxResult[2], bnGetTimezoneOffset(), rxResult[1]);
      }
    }, {
      /**
       * HHMM.,[..f]f
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return minuteFractionToTime(rxResult[3], bnGetTimezoneOffset(), rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HHMMSS.,[..f]f
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return secondFractionToTime(rxResult[4], bnGetTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return hourFractionToTime(rxResult[2], 0, rxResult[1]);
      }
    }, {
      /**
       * HHMM.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HHMMSS.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4]);
        if (isNotNegativeZero(offset, sign)) {
          return hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HHMM.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HHMMSS.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[5];
        var offset = offsetToSeconds(rxResult[6]);
        if (isNotNegativeZero(offset, sign)) {
          return secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * HH.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2})(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4], rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HHMM.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5], rxResult[6]);
        if (isNotNegativeZero(offset, sign)) {
          return minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HHMMSS.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[5];
        var offset = offsetToSeconds(rxResult[6], rxResult[7]);
        if (isNotNegativeZero(offset, sign)) {
          return secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }],

    /**
     * The extended time patterns.
     * @private
     * @type {array.object}
     */
    extended: [{
      /**
       * HH
       * @private
       */
      regex: /^(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, bnGetTimezoneOffset());
      }
    }, {
      /**
       * HH:MM
       * @private
       */
      regex: /^(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, bnGetTimezoneOffset());
      }
    }, {
      /**
       * HH:MM:SS
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], bnGetTimezoneOffset());
      }
    }, {
      /**
       * HHZ
       * @private
       */
      regex: /^(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, 0);
      }
    }, {
      /**
       * HH:MMZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, 0);
      }
    }, {
      /**
       * HH:MM:SSZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], 0);
      }
    }, {
      /**
       * HH-+ZZ
       * @private
       */
      regex: /^(\d{2})([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[2];
        var offset = offsetToSeconds(rxResult[3]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], 0, 0, offset, sign);
        }
      }
    }, {
      /**
       * HH:MM-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
        }
      }
    }, {
      /**
       * HH:MM:SS-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
        }
      }
    }, {
      /**
       * HH-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2})([\-+])(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[2];
        var offset = offsetToSeconds(rxResult[3], rxResult[4]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], 0, 0, offset, sign);
        }
      }
    }, {
      /**
       * HH:MM-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})([\-+])(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4], rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
        }
      }
    }, {
      /**
       * HH:MM:SS-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})([\-+])(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5], rxResult[6]);
        if (isNotNegativeZero(offset, sign)) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
        }
      }
    }, {
      /**
       * HH.,[..f]f
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return hourFractionToTime(rxResult[2], bnGetTimezoneOffset(), rxResult[1]);
      }
    }, {
      /**
       * HH:MM.,[..f]f
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return minuteFractionToTime(rxResult[3], bnGetTimezoneOffset(), rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return secondFractionToTime(rxResult[4], bnGetTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return hourFractionToTime(rxResult[2], 0, rxResult[1]);
      }
    }, {
      /**
       * HH:MM.,[..f]fZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[1]);
      }
    }, {
      /**
       * HH:MM:SS.,[..f]fZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4]);
        if (isNotNegativeZero(offset, sign)) {
          return hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HH:MM.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[5];
        var offset = offsetToSeconds(rxResult[6]);
        if (isNotNegativeZero(offset, sign)) {
          return secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[3];
        var offset = offsetToSeconds(rxResult[4], rxResult[5]);
        if (isNotNegativeZero(offset, sign)) {
          return hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HH:MM.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[4];
        var offset = offsetToSeconds(rxResult[5], rxResult[6]);
        if (isNotNegativeZero(offset, sign)) {
          return minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var sign = rxResult[5];
        var offset = offsetToSeconds(rxResult[6], rxResult[7]);
        if (isNotNegativeZero(offset, sign)) {
          return secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }]
  };

  /**
   * Returns true if the ISO timeDate stamp has the correct character counts/looks like an ISO timeDate stamp.
   * @private
   * @function
   * @param {string} string
   * @return {boolean}
   */
  function isWellFormedIso(string) {
    return isStringWithContent(string) &&
      !invalidISOCharsRx.test(string) &&
      inRange(countCharacter(string, ' ') + countCharacter(string, 'T'), 0, 1) &&
      inRange(countCharacter(string, 'W'), 0, 1) &&
      inRange(countCharacter(string, 'Z'), 0, 1) &&
      inRange(countCharacter(string, '.') + countCharacter(string, ','), 0, 1) &&
      inRange(countCharacter(string, '+'), 0, 2) &&
      inRange(countCharacter(string, '-'), 0, 4) &&
      inRange(countCharacter(string, ':'), 0, 4) &&
      string.replace(/\D/g, '').length > 1;
  }

  /**
   * @private
   * @function
   * @param {string} patter
   * @return {boolean}
   */
  var searchPatterns = function(pattern) {
    var rxResult = pattern.regex.exec(this.searchString);
    if (rxResult !== null) {
      var result = pattern.func(rxResult);
      if (!isUndefined(result)) {
        Object.assign(this.dtObject, result);
      }
      return true;
    }
    return false;
  };

  /**
   * Takes a give string an parses it as a given ISO timestamp returning the date and time matches as an object.
   * Uses datePatterns and timePatterns for precision matching.
   * @private
   * @function
   * @param {string} isoString
   * @return {object}
   */
  function isoParse(isoString) {
    var searchObject = {
      dtObject: {
        input: isoString
      },
      searchString: ''
    };
    if (isWellFormedIso(isoString)) {
      Object.assign(searchObject.dtObject, isoSplitDateTime(isoString));
      searchObject.searchString = searchObject.dtObject.date;
      if (!datePatterns.basic.some(searchPatterns, searchObject)) {
        if (datePatterns.extended.some(searchPatterns, searchObject)) {
          searchObject.searchString = searchObject.dtObject.time;
          timePatterns.extended.some(searchPatterns, searchObject);
        }
      } else {
        searchObject.searchString = searchObject.dtObject.time;
        timePatterns.basic.some(searchPatterns, searchObject);
      }
    }
    return searchObject.dtObject;
  }

  /**
   * Converts the given Gregorian structure to an appropriate structure depending
   * on the AstroDate instance settings.
   * @private
   * @function
   * @param {AstroDate} thisAstroDate
   * @param {object} struct
   * @return {object}
   */
  function getCorrectStruct(thisAstroDate, struct) {
    if (thisAstroDate.isDT()) {
      struct = thisAstroDate.isUT2TT() ? subDT(struct) : addDT(struct);
    }
    /*
    if (thisAstroDate.isTT()) {
      struct = toTT(struct);
    }
    */
    if (thisAstroDate.isUT()) {
      struct = toUT(struct);
    } else if (thisAstroDate.isLocal()) {
      struct = toLocal(struct);
    }
    return struct;
  }

  /*
  function tokenReplacer($0, $1, $2) {
    return $0 && $1 && !$2 ? $1 : '';
  }
  */
  /**
   * Remove all non-token from a given pattern and returns a string with any tokens that remain.
   * @private
   * @function
   * @param {string} pattern
   * @return {string}
   */
  /*
  function remainingTokens(pattern) {
    return pattern.replace(replaceTokenRX, tokenReplacer).replace(unmatchedTokenRx, '');
  }
  */

  /**
   * Returns true if there are any remaining tokens in the given pattern.
   * @private
   * @function
   * @param {string} pattern
   * @return {boolean}
   */
  /*
  function hasRemainingTokens(pattern) {
    return remainingTokens(pattern).trim().length !== 0;
  }
  */

  /*
  calendarTypes = {
    julian: {
      abbreviated: 'OS',
      wide: 'Julian',
      narrow: 'O'
    },
    gregorian: {
      abbreviated: 'NS',
      wide: 'Gregorian',
      narrow: 'N'
    }
  };
  */

  /**
   * Finds a loaded language from the given languageId string.
   * @private
   * @param {object} langCan
   * @return {object}
   */
  function getLanguageObj(langCan) {
    return languages[langCan.toBCP47String()];
  }

  /**
   * Finds a loaded language from the given languageId string.
   * @private
   * @param {object} langCan
   * @return {object}
   */
  function languageLoaded(langCan) {
    return getLanguageObj(langCan) ? langCan : new LanguageCan();
  }

  /**
   * Takes a date pattern of tokens and replaces those tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
   * @function
   * @param {object} struct
   * @param {string} pattern
   * @param {boolean} julian
   * @param {object} langCan
   * @return {string}
   */
  // struct should not be UTC but UT
  function formatDate(struct, pattern, julian, langCan, asString) {
    var gregorian = getLanguageObj(langCan).dates.calendars.gregorian;
    var dateFormats = gregorian.dateFormats;
    var eras = gregorian.eras;
    var standAlone = nameTypes.slice(-1)[0];
    var months = gregorian.months;
    var monthsFormat = months.format;
    var monthsStandAlone = months[standAlone];
    var days = gregorian.days;
    var daysFormat = days.format;
    var daysStandAlone = days[standAlone];
    var shortStr = formatTypes.slice(-1)[0];
    // should use alternative CLDR
    var weekDate = calendarToWeekDate(struct);
    var dayKey = cldrDayKey(struct);
    if (formatTypes.includes(pattern)) {
      /*
      switch (pattern) {
      case 'long':
        calendarPattern = '\'(\'CCCC\')\'';
        break;
      case 'medium':
        calendarPattern = '\'(\'C\')\'';
        break;
      case 'short':
        calendarPattern = '\'(\'CCCCCC\')\'';
        break;
      default:
        calendarPattern = '\'(\'CCCC\')\'';
      }
      */
      pattern = dateFormats[pattern];
    }
    /*
    calendarType = julian ? 'julian' : 'gregorian';
    */
    /*
    pattern = replaceTokens(pattern, 'CCCCC', calendarTypes[calendarType].narrow);
    pattern = replaceTokens(pattern, 'CCCC', calendarTypes[calendarType].wide);
    pattern = replaceTokens(pattern, 'C{1,3}', calendarTypes[calendarType].abbreviated);
    */
    var eraNum = struct.year.lt(1) ? 0 : 1;
    var eraNumStr = eraNum.toString();
    pattern = replaceTokens(pattern, 'GGGGG', eras.eraNarrow[eraNumStr]);
    pattern = replaceTokens(pattern, 'GGGG', eras.eraNames[eraNumStr]);
    pattern = replaceTokens(pattern, 'G{1,3}', eras.eraAbbr[eraNumStr]);
    var year = struct.year.plus(eraNum - 1);
    var yearSign = year.lt(0) ? '-' : '';
    pattern = replaceTokens(pattern, 'y{3,}', year);
    pattern = replaceTokens(pattern, 'yy', yearSign + year.toString().slice(-2));
    pattern = replaceTokens(pattern, 'y', year);
    pattern = replaceTokens(pattern, 'U{1,}', year);
    pattern = replaceTokens(pattern, 'u{1,}', struct.year);
    pattern = replaceTokens(pattern, 'Y{1,}', weekDate.year);
    var week = weekDate.week.toString();
    pattern = replaceTokens(pattern, 'w{1,2}', week);
    pattern = replaceTokens(pattern, 'W', calendarToWeekOfMonth(struct));
    /*
    pattern = replaceTokens(pattern, 'Q{1,2}', value);
    pattern = replaceTokens(pattern, 'QQQ', value);
    pattern = replaceTokens(pattern, 'QQQQ', value);
    pattern = replaceTokens(pattern, 'q{1,2}', value);
    pattern = replaceTokens(pattern, 'qqq', value);
    pattern = replaceTokens(pattern, 'qqqq', value);
    */
    var month = struct.month.toString();
    pattern = replaceTokens(pattern, 'MMMMM', monthsFormat.narrow[month]);
    pattern = replaceTokens(pattern, 'MMMM', monthsFormat.wide[month]);
    pattern = replaceTokens(pattern, 'MMM', monthsFormat.abbreviated[month]);
    pattern = replaceTokens(pattern, 'M{1,2}', month);
    pattern = replaceTokens(pattern, 'LLLLL', monthsStandAlone.narrow[month]);
    pattern = replaceTokens(pattern, 'LLLL', monthsStandAlone.wide[month]);
    pattern = replaceTokens(pattern, 'LLL', monthsStandAlone.abbreviated[month]);
    pattern = replaceTokens(pattern, 'L{1,2}', month);
    pattern = replaceTokens(pattern, 'd{1,2}', struct.day);
    var dayOfYear = julian ? dayOfJulianYear(gregorianToJulian(struct)) : dayOfGregorianYear(struct);
    pattern = replaceTokens(pattern, 'D{1,3}', dayOfYear);
    pattern = replaceTokens(pattern, 'F', weekDayOfMonth(struct));
    var mjd = julian ? julianToMJD(toUT(struct)) : gregorianToMJD(toUT(struct));
    pattern = replaceTokens(pattern, 'g{1,}', mjd);
    var dayStr = daysFormat[shortStr][dayKey];
    pattern = replaceTokens(pattern, 'EEEEEE', dayStr);
    pattern = replaceTokens(pattern, 'eeeeee', dayStr);
    dayStr = daysFormat.narrow[dayKey];
    pattern = replaceTokens(pattern, 'EEEEE', dayStr);
    pattern = replaceTokens(pattern, 'eeeee', dayStr);
    dayStr = daysFormat.wide[dayKey];
    pattern = replaceTokens(pattern, 'EEEE', dayStr);
    pattern = replaceTokens(pattern, 'eeee', dayStr);
    dayStr = daysFormat.abbreviated[dayKey];
    pattern = replaceTokens(pattern, 'EEE', dayStr);
    pattern = replaceTokens(pattern, 'eee', dayStr);
    pattern = replaceTokens(pattern, 'E{1,2}', weekDate.weekDay);
    var dayOfWeekLocaleNumber = (1 + (7 - dayKeys.indexOf(weekData.firstDay[langCan[2]]) + dayKeys.indexOf(dayKey))) % 7;
    pattern = replaceTokens(pattern, 'e{1,2}', dayOfWeekLocaleNumber);
    pattern = replaceTokens(pattern, 'cccccc', daysStandAlone[shortStr][dayKey]);
    pattern = replaceTokens(pattern, 'ccccc', daysStandAlone.narrow[dayKey]);
    pattern = replaceTokens(pattern, 'cccc', daysStandAlone.wide[dayKey]);
    pattern = replaceTokens(pattern, 'ccc', daysStandAlone.abbreviated[dayKey]);
    pattern = replaceTokens(pattern, 'c{1,2}', dayOfWeekLocaleNumber);
    return asString ? pattern.reduce(function(a, p) {
      if (p.type === 'symbols') {
        return a + p.value.slice (1, -1);
      }
      return a + p.value;
    }, '') : pattern;
  }

  /**
   * Formats ISO timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} langCan
   * @param {boolean} withZ
   * @param {string} format
   * @param {boolean} optional
   * @return {string}
   */
  // ISO 8601 time zone formats.
  function formatIsoTimeZone(struct, langCan, withZ, format, optional) {
    var pattern;
    if (withZ && struct.offset.isZero()) {
      pattern = 'Z';
    } else {
      var timeZoneNames = getLanguageObj(langCan).dates.timeZoneNames;
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = fractionToTime(struct.offset.abs(), 'second');
      var offsetFormat;
      if (struct.offset.lte(0)) {
        offsetFormat = offsetFormats[0];
      } else {
        offsetFormat = offsetFormats.slice(-1)[0];
      }
      offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
      if (format === 'basic') {
        if (optional && offset.minute.isZero()) {
          offsetFormat = offsetFormat.split(':')[0];
        } else {
          offsetFormat = offsetFormat.replace(':', '');
        }
      }
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
    }
    return pattern;
  }

  /**
   * Formats ISO timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} langCan
   * @param {boolean} withZ
   * @param {string} format
   * @param {boolean} optional
   * @return {string}
   */
  // ISO 8601 time zone formats.
  function formatIsoTimeZoneSeconds(struct, langCan, withZ, format, optional) {
    var pattern;
    if (withZ && struct.offset.isZero()) {
      pattern = 'Z';
    } else {
      var timeZoneNames = getLanguageObj(langCan).dates.timeZoneNames;
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = fractionToTime(struct.offset.abs(), 'second');
      if (struct.offset.lte(0)) {
        offsetFormat = offsetFormats[0];
      } else {
        offsetFormat = offsetFormats.slice(-1)[0];
      }
      var offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:') + ':ss';
      if (format === 'basic') {
        if (optional && offset.second.isZero()) {
          offsetFormat = offsetFormat.split(':');
          offsetFormat.pop();
          offsetFormat = offsetFormat.join('');
        } else {
          offsetFormat = offsetFormat.replace(':', '');
        }
      }
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
      pattern = replaceTokens(pattern, 's{1,2}', offset.second);
    }
    return pattern;
  }

  /**
   * Formats localized GMT timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} langCan
   * @param {boolean} requestedShort
   * @return {string}
   */
  // The localized GMT format.
  function formatLocalisedGMT(struct, langCan, requestedShort) {
    var timeZoneNames = getLanguageObj(langCan).dates.timeZoneNames;
    var offsetFormats = timeZoneNames.hourFormat.split(';');
    var pattern;
    if (struct.offset.isZero()) {
      pattern = timeZoneNames.gmtZeroFormat;
    } else {
      var offset = fractionToTime(struct.offset.abs(), 'second');
      var offsetFormat;
      if (struct.offset.lte(0)) {
        offsetFormat = offsetFormats[0];
      } else {
        offsetFormat = offsetFormats.slice(-1)[0];
      }
      if (requestedShort) {
        offsetFormat = offsetFormat.replace('HH', 'H');
      } else {
        offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
      }
      if (requestedShort && offset.minute.isZero()) {
        offsetFormat = offsetFormat.split(':')[0];
      }
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
      pattern = replaceTokens(timeZoneNames.gmtFormat, '{0}', pattern);
    }
    return pattern;
  }

  /**
   * Takes a time pattern of tokens and replaces those tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
   * @function
   * @param {object} struct
   * @param {string} pattern
   * @param {object} langCan
   * @return {string}
   */
  // struct should not be UTC but UT
  function formatTime(struct, pattern, langCan, asString) {
    var gregorian = getLanguageObj(langCan).dates.calendars.gregorian;
    var dayPeriod = struct.hour.inRange(12, 23) ? 'pm' : 'am';
    var hour = struct.hour.plus(11).mod(12).plus(1);
    if (formatTypes.includes(pattern)) {
      pattern = gregorian.timeFormats[pattern];
    }
    pattern = replaceTokens(pattern, 'a', gregorian.dayPeriods.format.abbreviated[dayPeriod]);
    pattern = replaceTokens(pattern, 'h{1,2}', hour);
    pattern = replaceTokens(pattern, 'H{1,2}', struct.hour);
    pattern = replaceTokens(pattern, 'K{1,2}', hour.minus(1));
    // if hour is 24, needs to be handled in date too
    //temp = new AstroDate().jd(new AstroDate().jd());
    //pattern = replaceTokens(pattern, 'k{1,2}', struct.hour.plus(1));
    //pattern = replaceTokens(pattern, 'j{1,2}', struct.hour);
    pattern = replaceTokens(pattern, 'm{1,2}', struct.minute);
    pattern = replaceTokens(pattern, 's{1,2}', struct.second);
    // needs fixing
    pattern = replaceTokens(pattern, 'S{1,}', struct.millisecond);
    //pattern = replaceTokens(pattern, 'A{1,}', value);
    // The short localized GMT format.
    var shortLocalisedGMT = formatLocalisedGMT(struct, langCan, true);
    pattern = replaceTokens(pattern, 'O', shortLocalisedGMT);
    pattern = replaceTokens(pattern, 'z{1,3}', shortLocalisedGMT);
    // The long localized GMT format.
    var longLocalisedGMT = formatLocalisedGMT(struct, langCan, false);
    pattern = replaceTokens(pattern, 'OOOO', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'zzzz', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'ZZZZ', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'vvvv', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'v', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'VVVV', longLocalisedGMT);
    // The ISO8601 basic format short
    pattern = replaceTokens(pattern, 'X', formatIsoTimeZone(struct, langCan, true, 'basic', true));
    // The ISO8601 basic format short no Z
    pattern = replaceTokens(pattern, 'x', formatIsoTimeZone(struct, langCan, false, 'basic', true));
    // The ISO8601 basic format
    var isoBasic = formatIsoTimeZone(struct, langCan, true, 'basic', false);
    pattern = replaceTokens(pattern, 'Z{1,3}', isoBasic);
    pattern = replaceTokens(pattern, 'XX', isoBasic);
    // The ISO8601 basic format no Z
    pattern = replaceTokens(pattern, 'xx', formatIsoTimeZone(struct, langCan, false, 'basic', false));
    //The ISO8601 extended format
    pattern = replaceTokens(pattern, 'XXX', formatIsoTimeZone(struct, langCan, true, 'extended', false));
    //The ISO8601 extended format no Z
    pattern = replaceTokens(pattern, 'xxx', formatIsoTimeZone(struct, langCan, false, 'extended', false));
    // The ISO8601 basic format optional seconds
    pattern = replaceTokens(pattern, 'XXXX', formatIsoTimeZone(struct, langCan, true, 'basic', true));
    // The ISO8601 basic format no Z optional seconds
    pattern = replaceTokens(pattern, 'xxxx', formatIsoTimeZoneSeconds(struct, langCan, false, 'basic', true));
    //The ISO8601 extended format optional seconds
    pattern = replaceTokens(pattern, 'XXXXX', formatIsoTimeZoneSeconds(struct, langCan, true, 'extended', true));
    //The ISO8601 extended format no Z optional seconds
    pattern = replaceTokens(pattern, 'xxxxx', formatIsoTimeZoneSeconds(struct, langCan, false, 'extended', true));
    //The ISO8601 extended format optional seconds
    pattern = replaceTokens(pattern, 'ZZZZZ', formatIsoTimeZoneSeconds(struct, langCan, true, 'extended', true));
    return asString ? pattern.reduce(function(a, p) {
      if (p.type === 'symbols') {
        return a + p.value.slice (1, -1);
      }
      return a + p.value;
    }, '') : pattern;
  }

  /**
   * @constructor AstroDate
   * @classdesc This is what becomes exported or made global.
   * @this AstroDate
   * @param {...*} [arguments]
   * @return {AstroDate}
   *
   * @desc Used to create a new instance of a date.
   * <pre><code>
   * new AstroDate();
   * new AstroDate(value);
   * new AstroDate(dateString);
   * new AstroDate(dateObject);
   * new AstroDate(astroDateObject);
   * new AstroDate(year[, month, day, hour, minute, second, millisecond, offset][, options]);
   * </code></pre>
   * <ul>
   * <li><b>value</b><br>
   * Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).</li>
   * <li><b>dateString</b><br>
   * String value representing a date. The string must be in the format of ISO8601.</li>
   * <li><b>dateObject</b><br>
   * A Javascript Date object.</li>
   * <li><b>astroDateObject</b><br>
   * An AstroDate object.</li>
   * <li><b>year</b><br>
   * Integer or string value representing the year. The year must always be provided in full
   * (e.g. 98 is treated as 98, not 1998).</li>
   * <li><b>month</b><br>
   * Integer or string value representing the month, beginning with 0 for January to 11 for December.</li>
   * <li><b>day</b><br>
   * Integer or string value representing the day of the month.</li>
   * <li><b>hour</b><br>
   * Integer or string value representing the hour of the day.</li>
   * <li><b>minute</b><br>
   * Integer or string value representing the minute segment of a time.</li>
   * <li><b>second</b><br>
   * Integer or string value representing the second segment of a time.</li>
   * <li><b>millisecond</b><br>
   * Integer or string value representing the millisecond segment of a time.</li>
   * <li><b>offset</b><br>
   * Integer or string value representing the offset from UT in seconds.</li>
   * <li><b>options</b><br>
   * null or object Must be used when only year is specified. Allows date to be specified in
   * Julian Calender (more/changes coming). </li>
   * </ul>
   *
   * @example <caption>Example usage of constructor.</caption>
   *
   * // If no arguments are provided, the constructor creates an AstroDate object for the
   * // current date and time according to system settings.
   * new AstroDate();
   *
   * // Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).
   * // -9,007,199,254,740,992 to 9,007,199,254,740,992 or NaN
   * new AstroDate(819170640000); //1995-12-17T03:24:00.000Z
   * new AstroDate(NaN); //Invalid Date
   *
   * // String value representing a date. The string must be in the format of ISO8601.
   * new AstroDate('1995-12-17T03:24:00.000Z');
   *
   * // A Javascript Date object.
   * new AstroDate(new Date(1995, 12, 17, 3, 24, 0, 0));
   *
   * // An AstroDate object.
   * new AstroDate(new AstroDate(1995, 12, 17, 3, 24, 0, 0, 3600)); // offset is same as '-01:00:00'
   *
   * // Using an arguments list.
   * new AstroDate(1995, null);
   * new AstroDate(1995, {offset: -3600}); // offset is same as '+01:00:00'
   * new AstroDate(55, {julian: true, offset: -3600});
   * // year 55 of the Julian Calendar, offset is same as '+01:00:00'
   * new AstroDate(1995, 12, 17, 3, 24, 0, 0, -3600); // offset is same as '+01:00:00'
   * new AstroDate('1995', '12', '17', '3', '24', '0', '0', '-5400'); // offset is same as '+01:30:00'
   * new AstroDate('1995', '12', '17', '3', '24', '0', '0', '+01:30:00'); // offset is same as -5400
   * new AstroDate('-10', '5', '7', {julian: true}); // year -10 of the Julian Calendar
   */
  function AstroDate() {
    var args = Array.from(arguments);
    var input = arguments;
    var argsLength = args.length;
    var isJulian = false;
    var isUT = false;
    var isTT = false;
    var isLocal = false;
    var error = null;
    var delta = 0;
    /**
     * The current language of the AstroDate instance.
     * @private
     * @type {string}
     */
    var currentLanguage = defaultLanguage;
    var struct;
    var arg;
    var length;
    var opts;

    Object.defineProperties(this, {
      /**
       * Gets the value of a specific internal property.
       * @readonly
       * @protected
       * @memberOf AstroDate
       * @instance
       * @function
       * @param {*} key
       * @return {*}
       */
      getter: {
        value: function(key) {
          var got;
          if (isUndefined(key)) {
            got = Object.assign({}, struct);
          } else if (isString(key)) {
            switch (key) {
              case 'struct':
                got = Object.assign({}, struct);
                break;
              case 'isJulian':
                got = isJulian;
                break;
              case 'isUT':
                got = isUT;
                break;
              case 'isTT':
                got = isTT;
                break;
              case 'DT':
                got = delta;
                break;
              case 'isLocal':
                got = isLocal;
                break;
              case 'args':
                got = args;
                break;
              case 'input':
                got = input;
                break;
              case 'error':
                got = error;
                break;
              case 'lang':
                got = currentLanguage;
                break;
              default:
                throw new SyntaxError(key);
            }
          } else {
            throw new TypeError(key);
          }
          return got;
        }
      },
      /**
       * Sets the value of a specific internal property.
       * @protected
       * @instance
       * @memberOf AstroDate
       * @function
       * @param {*} key
       * @param {*} value
       * @return {AstroDate}
       * @this AstroDate
       */
      setter: {
        value: function(key, value) {
          var unit = normaliseUnits(key);
          var valid = false;
          var bn;
          if (unit) {
            bn = new BigNum(value);
            switch (unit) {
              case 'year':
                valid = inYearRange(bn);
                break;
              case 'month':
                valid = inMonthRange(bn);
                break;
              case 'day':
                var dim = isJulian ? daysInJulianMonth(struct) : daysInGregorianMonth(struct);
                valid = inDayRange(bn, dim);
                break;
              case 'hour':
                valid = inHourRange(bn);
                break;
              case 'minute':
                valid = inMinuteRange(bn, struct.hour);
                break;
              case 'second':
                valid = inSecondRange(bn, struct);
                break;
              case 'millisecond':
                valid = inMillisecondRange(bn, struct.hour);
                break;
              case 'offset':
                valid = inOffsetRange(bn);
                break;
              default:
                throw new Error(unit);
            }
            if (valid) {
              struct[unit] = bn;
            } else {
              struct = {};
            }
          } else if (Array.isArray(key)) {
            struct = arrayToStruct(key, false);
          } else if (AstroDate.isAstroDate(key)) {
            struct = key.getter();
            isJulian = key.isJulian();
          } else if (isDate(key)) {
            struct = dateToStruct(key);
          } else if (isString(key)) {
            switch (key) {
              case 'input':
                input = value;
                break;
              case 'error':
                error = value;
                break;
              case 'struct':
                if (isValid(value)) {
                  struct = Object.assign({}, value);
                } else {
                  struct = {};
                }
                break;
              case 'isJulian':
                isJulian = Boolean(value);
                break;
              case 'isUT':
                isUT = Boolean(value);
                break;
              case 'isTT':
                isTT = Boolean(value);
                break;
              case 'DT':
                delta = Math.sign(value) || 0;
                break;
              case 'isLocal':
                isLocal = Boolean(value);
                break;
              case 'lang':
                if (value && typeof value.isValid === 'function' && value.isValid()) {
                  currentLanguage = value;
                } else {
                  currentLanguage = defaultLanguage;
                }
                break;

              default:
                struct = isoParse(key);
            }
          } else {
            throw new SyntaxError(key);
          }
          return this;
        }
      }
    });
    length = argsLength;
    if (length === 0) {
      struct = dateToStruct(new Date());
    } else if (length === 1) {
      arg = args[0];
      if (AstroDate.isAstroDate(arg)) {
        isJulian = arg.getter('isJulian');
        struct = Object.assign({}, arg.getter());
      } else if (isDate(arg)) {
        struct = dateToStruct(arg);
      } else if (isNumber(arg)) {
        struct = dateToStruct(new Date(arg));
      } else if (isString(arg)) {
        struct = isoParse(arg);
      } else {
        throw new TypeError(arg);
      }
    } else {
      arg = args.slice(-1)[0];
      opts = normaliseOptions(arg);
      if (arg === null || isPlainObject(arg)) {
        if (opts.Julian) {
          isJulian = true;
        }
        struct = arrayToStruct(args.slice(0, -1), isJulian);
        if (isJulian) {
          struct = julianToGregorian(struct);
        }
      } else {
        struct = arrayToStruct(args, isJulian);
      }
      if (isUndefined(args[8]) && !isUndefined(opts.offset)) {
        struct.offset = bnOffset(opts.offset);
      }
    }
    if (!isValid(struct)) {
      struct = {};
    }
  }

  Object.defineProperties(AstroDate.prototype, {
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    julian: {
      value: function() {
        return this.setter('isJulian', true);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    gregorian: {
      value: function() {
        return this.setter('isJulian', false);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {AstroDate}
     * @this AstroDate
     */
    local: {
      value: function() {
        this.setter('isLocal', true);
        this.setter('isUT', false);
        return this;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {AstroDate}
     * @this AstroDate
     */
    UT: {
      value: function() {
        this.setter('isLocal', false);
        this.setter('isUT', true);
        return this;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    TT: {
      value: function() {
        return this.setter('isTT', true);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    UT2TT: {
      value: function() {
        return this.setter('DT', -1);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    TT2UT: {
      value: function() {
        return this.setter('DT', 1);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    civil: {
      value: function() {
        return this.setter('isTT', false);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {AstroDate}
     * @this AstroDate
     */
    raw: {
      value: function() {
        this.setter('isLocal', false);
        this.setter('isUT', false);
        this.setter('isTT', false);
        this.setter('DT', 0);
        return this;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isJulian: {
      value: function() {
        return this.getter('isJulian');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isGregorian: {
      value: function() {
        return !this.getter('isJulian');
      }
    },
    /** memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isUT: {
      value: function() {
        return this.getter('isUT');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isTT: {
      value: function() {
        return this.getter('isTT');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isUT2TT: {
      value: function() {
        return this.getter('DT') === -1;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isTT2UT: {
      value: function() {
        return this.getter('DT') === 1;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isDT: {
      value: function() {
        return this.getter('DT') !== 0;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isCivil: {
      value: function() {
        return !this.getter('isTT');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isLocal: {
      value: function() {
        return this.getter('isLocal');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isRaw: {
      value: function() {
        return !this.getter('isUT') && !this.getter('isTT') && this.getter('isLocal');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    currentLang: {
      value: function() {
        return this.getter('lang');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    isWeekDay: {
      value: function() {
        if (this.isValid()) {
          return weekDayNumber(getCorrectStruct(this, this.getter())).inRange(1, 5);
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    isWeekend: {
      value: function() {
        if (this.isValid()) {
          return weekDayNumber(getCorrectStruct(this, this.getter())).inRange(6, 7);
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    zone: {
      value: function() {
        if (this.isValid()) {
          return getCorrectStruct(this, this.getter()).offset.toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isValid: {
      value: function() {
        return isValid(this.getter());
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} isoString
     * @this AstroDate
     */
    parse: {
      value: function(isoString) {
        if (isString(isoString)) {
          return this.setter('struct', isoParse(isoString));
        }
        throw new TypeError(isoString);
      }
    },
    /**
     * @memberOf AstroDate.prototype
     * @function
     * @param {string} pattern
     * @this AstroDate
     *
     * @desc
     * <p>Date and time formats are specified by <em>date and time pattern</em> strings.
     * Within date and time pattern strings, all unquoted ASCII letters [A-Za-z] are reserved as
     * pattern letters representing calendar fields.
     * <code>astrodate</code> supports the date and time formatting algorithm and pattern letters defined by
     * <a href="http://www.unicode.org/reports/tr35/">UTS#35 Unicode Locale Data Markup Language (LDML)</a>.
     * The following pattern letters are currently available:</p>
     * <table border="1">
     * <thead>
     * <tr>
     * <th>Field</th>
     * <th style="text-align: center">Sym.</th>
     * <th style="text-align: center">No.</th>
     * <th>Example</th>
     * <th>Description</th>
     * </tr>
     * </thead>
     * <tbody>
     * <tr>
     * <th rowspan="3">era</th>
     * <td style="text-align: center" rowspan="3">G</td>
     * <td style="text-align: center">1..3</td>
     * <td>AD</td>
     * <td rowspan="3">Era - Replaced with the Era string for the current date.
     * One to three letters for the abbreviated form,
     * four letters for the long form, five for the narrow form.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Anno Domini</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>A</td>
     * </tr>
     * <tr>
     * <th rowspan="6">year</th>
     * <td style="text-align: center">y</td>
     * <td style="text-align: center">1..n</td>
     * <td>1996</td>
     * <td>
     * Year. Normally the length specifies the padding,
     * but for two letters it also specifies the maximum length.
     * Example:
     * <div align="center">
     * <center>
     * <table border="1" cellpadding="2" cellspacing="0">
     * <tbody>
     * <tr>
     * <th>Year</th>
     * <th style="text-align: right">y</th>
     * <th style="text-align: right">yy</th>
     * <th style="text-align: right">yyy</th>
     * <th style="text-align: right">yyyy</th>
     * <th style="text-align: right">yyyyy</th>
     * </tr>
     * <tr>
     * <td>AD 1</td>
     * <td style="text-align: right">1</td>
     * <td style="text-align: right">01</td>
     * <td style="text-align: right">001</td>
     * <td style="text-align: right">0001</td>
     * <td style="text-align: right">00001</td>
     * </tr>
     * <tr>
     * <td>AD 12</td>
     * <td style="text-align: right">12</td>
     * <td style="text-align: right">12</td>
     * <td style="text-align: right">012</td>
     * <td style="text-align: right">0012</td>
     * <td style="text-align: right">00012</td>
     * </tr>
     * <tr>
     * <td>AD 123</td>
     * <td style="text-align: right">123</td>
     * <td style="text-align: right">23</td>
     * <td style="text-align: right">123</td>
     * <td style="text-align: right">0123</td>
     * <td style="text-align: right">00123</td>
     * </tr>
     * <tr>
     * <td>AD 1234</td>
     * <td style="text-align: right">1234</td>
     * <td style="text-align: right">34</td>
     * <td style="text-align: right">1234</td>
     * <td style="text-align: right">1234</td>
     * <td style="text-align: right">01234</td>
     * </tr>
     * <tr>
     * <td>AD 12345</td>
     * <td style="text-align: right">12345</td>
     * <td style="text-align: right">45</td>
     * <td style="text-align: right">12345</td>
     * <td style="text-align: right">12345</td>
     * <td style="text-align: right">12345</td>
     * </tr>
     * </tbody>
     * </table>
     * </center>
     * </div>
     * </td>
     * </tr>
     * <tr>
     * <td style="text-align: center">Y</td>
     * <td style="text-align: center">1..n</td>
     * <td>1997</td>
     * <td>Year (in "Week of Year" based calendars). Normally the length specifies the padding,
     * but for two letters it also specifies the maximum length.
     * This year designation is used in ISO year-week calendar as defined by ISO 8601,
     * but can be used in non-Gregorian based calendar systems where week date processing is desired.
     * May not always be the same value as calendar year.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">u</td>
     * <td style="text-align: center">1..n</td>
     * <td>4601</td>
     * <td>Extended year. This is a single number designating the year of this calendar system,
     * encompassing all supra-year fields.
     * For example, for the Julian calendar system, year numbers are positive, with an era of BCE or CE.
     * An extended year value for the Julian calendar system assigns positive values to CE years and
     * negative values to BCE years, with 1 BCE being year 0.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center" rowspan="3">U</td>
     * <td style="text-align: center">1..3</td>
     * <td>&#x7532;&#x5B50;</td>
     * <td rowspan="3">Cyclic year name. Calendars such as the Chinese lunar calendar (and related calendars)
     * and the Hindu calendars use 60-year cycles of year names.
     * Use one through three letters for the abbreviated name,
     * four for the full name, or five for the narrow name
     * (currently the data only provides abbreviated names,
     * which will be used for all requested name widths).
     * If the calendar does not provide cyclic year name data,
     * or if the year value to be formatted is out of the range
     * of years for which cyclic name data is provided, then numeric formatting is used (behaves like 'y').</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>(currently also &#x7532;&#x5B50;)</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>(currently also &#x7532;&#x5B50;)</td>
     * </tr>
     * <tr>
     * <th rowspan="6">quarter</th>
     * <td rowspan="3" style="text-align: center">Q</td>
     * <td style="text-align: center">1..2</td>
     * <td>02</td>
     * <td rowspan="3">Quarter - Use one or two for the numerical quarter, three for the abbreviation,
     * or four for the full name.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Q2</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>2nd quarter</td>
     * </tr>
     * <tr>
     * <td rowspan="3" style="text-align: center">q</td>
     * <td style="text-align: center">1..2</td>
     * <td>02</td>
     * <td rowspan="3"><b>Stand-Alone</b> Quarter - Use one or two for the numerical quarter,
     * three for the abbreviation, or four for the full name.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Q2</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>2nd quarter</td>
     * </tr>
     * <tr>
     * <th rowspan="8">month</th>
     * <td rowspan="4" style="text-align: center">M</td>
     * <td style="text-align: center">1..2</td>
     * <td>09</td>
     * <td rowspan="4">Month - Use one or two for the numerical month, three for the abbreviation,
     * four for the full name, or five for the narrow name.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Sept</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>September</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>S</td>
     * </tr>
     * <tr>
     * <td rowspan="4" style="text-align: center">L</td>
     * <td style="text-align: center">1..2</td>
     * <td>09</td>
     * <td rowspan="4"><b>Stand-Alone</b> Month - Use one or two for the numerical month,
     * three for the abbreviation, or four for the full name, or 5 for the narrow name.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Sept</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>September</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>S</td>
     * </tr>
     * <tr>
     * <th rowspan="2">week</th>
     * <td style="text-align: center">w</td>
     * <td style="text-align: center">1..2</td>
     * <td>27</td>
     * <td>Week of Year.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">W</td>
     * <td style="text-align: center">1</td>
     * <td>3</td>
     * <td>Week of Month. From 0..5. The first week of the month is the first week that contains a Thursday.
     * This is based on the ICU definition of week of month, and correlates to the ISO8601 week of year
     * definition. A day in the week before the week with the first Thursday will be week 0.</td>
     * </tr>
     * <tr>
     * <th rowspan="4">day</th>
     * <td style="text-align: center">d</td>
     * <td style="text-align: center">1..2</td>
     * <td>1</td>
     * <td>Date - Day of the month</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">D</td>
     * <td style="text-align: center">1..3</td>
     * <td>345</td>
     * <td>Day of year</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">F</td>
     * <td style="text-align: center">1</td>
     * <td>2</td>
     * <td>Day of Week in Month. The example is for the 2nd Wed in July</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">g</td>
     * <td style="text-align: center">1..n</td>
     * <td>2451334</td>
     * <td>Modified Julian day. This is different from the conventional Julian day number in two regards.
     * First, it demarcates days at local zone midnight, rather than noon GMT.
     * Second, it is a local number; that is, it depends on the local time zone.
     * It can be thought of as a single number that encompasses all the date-related fields.</td>
     * </tr>
     * <tr>
     * <th rowspan="15">week<br>
     * day</th>
     * <td rowspan="5" style="text-align: center">E</td>
     * <td style="text-align: center">1..2</td>
     * <td>2</td>
     * <td rowspan="5">Day of week - Use one through two for ISO number, or three for the short day,
     * or four for the full name, five for the narrow name, or six for the short name.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Tue</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Tuesday</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>T</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">6</td>
     * <td>Tu</td>
     * </tr>
     * <tr>
     * <td rowspan="5" style="text-align: center">e</td>
     * <td style="text-align: center">1..2</td>
     * <td>2</td>
     * <td rowspan="5">Local day of week. Same as E except adds a numeric value that will depend on the
     * local starting day of the week, using one or two letters. For this example,
     * Monday is the first day of the week.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Tue</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Tuesday</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>T</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">6</td>
     * <td>Tu</td>
     * </tr>
     * <tr>
     * <td rowspan="5" style="text-align: center">c</td>
     * <td style="text-align: center">1..2</td>
     * <td>2</td>
     * <td rowspan="5"><b>Stand-Alone</b> local day of week - Use one or two letters for the local numeric value
     * (same as 'e'), three for the short day, four for the full name, five for the narrow name,
     * or six for the short name.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Tue</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Tuesday</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>T</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">6</td>
     * <td>Tu</td>
     * </tr>
     * <tr>
     * <th>period</th>
     * <td style="text-align: center">a</td>
     * <td style="text-align: center">1</td>
     * <td>AM</td>
     * <td>AM or PM</td>
     * </tr>
     * <tr>
     * <th rowspan="4">hour</th>
     * <td style="text-align: center">h</td>
     * <td style="text-align: center">1..2</td>
     * <td>11</td>
     * <td>Hour [1-12]. When used in skeleton data or in a skeleton passed in an API
     * for flexible data pattern generation,
     * it should match the 12-hour-cycle format preferred by the locale (h or K);
     * it should not match a 24-hour-cycle format (H or k). Use hh for zero padding.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">H</td>
     * <td style="text-align: center">1..2</td>
     * <td>13</td>
     * <td>Hour [0-23]. When used in skeleton data or in a skeleton passed in an API
     * for flexible data pattern generation,
     * it should match the 24-hour-cycle format preferred by the locale (H or k);
     * it should not match a 12-hour-cycle format (h or K). Use HH for zero padding.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">K</td>
     * <td style="text-align: center">1..2</td>
     * <td>0</td>
     * <td>Hour [0-11]. When used in a skeleton, only matches K or h, see above. Use KK for zero padding.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">k</td>
     * <td style="text-align: center">1..2</td>
     * <td>24</td>
     * <td>Hour [1-24]. When used in a skeleton, only matches k or H, see above. Use kk for zero padding.</td>
     * </tr>
     * <tr>
     * <th>minute</th>
     * <td style="text-align: center">m</td>
     * <td style="text-align: center">1..2</td>
     * <td>59</td>
     * <td>Minute. Use one or two for zero padding.</td>
     * </tr>
     * <tr>
     * <th rowspan="3">second</th>
     * <td style="text-align: center">s</td>
     * <td style="text-align: center">1..2</td>
     * <td>12</td>
     * <td>Second. Use one or two for zero padding.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">S</td>
     * <td style="text-align: center">1..n</td>
     * <td>3456</td>
     * <td>Fractional Second - truncates (like other time fields) to the count of letters.
     * (example shows display using pattern SSSS for seconds value 12.34567)</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">A</td>
     * <td style="text-align: center">1..n</td>
     * <td>69540000</td>
     * <td>Milliseconds in day. This field behaves <i>exactly</i> like a composite of all time-related fields,
     * not including the zone fields. As such, it also reflects discontinuities
     * of those fields on DST transition days.
     * On a day of DST onset, it will jump forward. On a day of DST cessation, it will jump backward.
     * This reflects the fact that is must be combined with the offset field
     * to obtain a unique local time value.</td>
     * </tr>
     * <tr>
     * <th rowspan="23">zone</th>
     * <td rowspan="2" style="text-align: center">z</td>
     * <td style="text-align: center">1..3</td>
     * <td>PDT</td>
     * <td>The <i>short specific non-location format</i>. Where that is unavailable, falls back to the
     * <i>short localized GMT format</i> ("O").</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Pacific Daylight Time</td>
     * <td>The <i>long specific non-location format</i>. Where that is unavailable, falls back to the
     * <i>long localized GMT format</i> ("OOOO").</td>
     * </tr>
     * <tr>
     * <td rowspan="3" style="text-align: center">Z</td>
     * <td style="text-align: center">1..3</td>
     * <td>-0800</td>
     * <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields.
     * The format is equivalent to RFC 822 zone format (when optional seconds field is absent).
     * This is equivalent to the "xxxx" specifier.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>GMT-8:00</td>
     * <td>The <i>long localized GMT format</i>. This is equivalent to the "OOOO" specifier.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>-08:00<br>
     * -07:52:58</td>
     * <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields.
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.
     * This is equivalent to the "XXXXX" specifier.</td>
     * </tr>
     * <tr>
     * <td rowspan="2" style="text-align: center">O</td>
     * <td style="text-align: center">1</td>
     * <td>GMT-8</td>
     * <td>The <i>short localized GMT format</i>.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>GMT-08:00</td>
     * <td>The <i>long localized GMT format</i>.</td>
     * </tr>
     * <tr>
     * <td rowspan="2" style="text-align: center">v</td>
     * <td style="text-align: center">1</td>
     * <td>PT</td>
     * <td>The <i>short generic non-location format</i>. Where that is unavailable, falls back to the
     * <i>generic location format</i> ("VVVV"),
     * then the <i>short localized GMT format</i> as the final fallback.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Pacific Time</td>
     * <td>The <i>long generic non-location format</i>. Where that is unavailable, falls back to
     * <i>generic location format</i> ("VVVV").</td>
     * </tr>
     * <tr>
     * <td rowspan="4" style="text-align: center">V</td>
     * <td style="text-align: center">1</td>
     * <td>uslax</td>
     * <td><b>NOT SUPPORTED!</b> The short time zone ID. Where that is unavailable,
     * the special short time zone ID <i>unk</i> (Unknown Zone) is used.<br>
     * <i><b>Note</b>: This specifier was originally used for a variant of the short specific
     * non-location format,
     * but it was deprecated in the later version of the LDML specification. In CLDR 23/ICU 51,
     * the definition of the specifier was changed to designate a short time zone ID.</i></td>
     * </tr>
     * <tr>
     * <td style="text-align: center">2</td>
     * <td>America/Los_Angeles</td>
     * <td><b>NOT SUPPORTED!</b> The long time zone ID.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>Los Angeles</td>
     * <td><b>NOT SUPPORTED!</b> The exemplar city (location) for the time zone. Where that is unavailable,
     * the localized exemplar city name for the special zone <i>Etc/Unknown</i> is used as the fallback
     * (for example, "Unknown City").</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>Los Angeles Time</td>
     * <td>The <i>generic location format</i>. Where that is unavailable, falls back to the
     * <i>long localized GMT format</i> ("OOOO"; Note: Fallback is only necessary with a GMT-style Time Zone ID,
     * like Etc/GMT-830.)<br>
     * This is especially useful when presenting possible timezone choices for user selection,
     * since the naming is more uniform than the "v" format.</td>
     * </tr>
     * <tr>
     * <td rowspan="5" style="text-align: center">X</td>
     * <td style="text-align: center">1</td>
     * <td>-08<br>
     * +0530<br>
     * Z</td>
     * <td>The <i>ISO8601 basic format</i> with hours field and optional minutes field.
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">2</td>
     * <td>-0800<br>
     * Z</td>
     * <td>The <i>ISO8601 basic format</i> with hours and minutes fields.
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>-08:00<br>
     * Z</td>
     * <td>The <i>ISO8601 extended format</i> with hours and minutes fields.
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>-0800<br>
     * -075258<br>
     * Z</td>
     * <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields.
     * (Note: The seconds field is not supported by the ISO8601 specification.)
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>-08:00<br>
     * -07:52:58<br>
     * Z</td>
     * <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields.
     * (Note: The seconds field is not supported by the ISO8601 specification.)
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
     * </tr>
     * <tr>
     * <td rowspan="5" style="text-align: center">x</td>
     * <td style="text-align: center">1</td>
     * <td>-08<br>
     * +0530</td>
     * <td>The <i>ISO8601 basic format</i> with hours field and optional minutes field.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">2</td>
     * <td>-0800</td>
     * <td>The <i>ISO8601 basic format</i> with hours and minutes fields.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">3</td>
     * <td>-08:00</td>
     * <td>The <i>ISO8601 extended format</i> with hours and minutes fields.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">4</td>
     * <td>-0800<br>
     * -075258</td>
     * <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields.
     * (Note: The seconds field is not supported by the ISO8601 specification.)</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">5</td>
     * <td>-08:00<br>
     * -07:52:58</td>
     * <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields.
     * (Note: The seconds field is not supported by the ISO8601 specification.)</td>
     * </tr>
     * </tbody>
     * </table>
     * <p>Any characters in the pattern that are not in the ranges of ['a'..'z'] and ['A'..'Z']
     * will be treated as quoted text. For instance, characters like ':', '.', ' ', '#' and '@'
     * will appear in the resulting time text even they are not embraced within single quotes.</p>
     * <p>A pattern containing any invalid pattern letter will result in a
     * thrown exception during formatting.</p>
     **/
    format: {
      value: function(pattern) {
        var string;
        if (this.isValid()) {
          var langCan = this.currentLang();
          if (!langCan.isValid() || !isPlainObject(getLanguageObj(langCan))) {
            if (!defaultLanguage.isValid() || !isPlainObject(getLanguageObj(defaultLanguage))) {
              throw new Error('Language not loaded!');
            }
            langCan = defaultLanguage;
          }
          var isJulian = this.isJulian();
          var struct = getCorrectStruct(this, isJulian ? jdToJulian(this.jd()) : this.getter());
          if (!isStringWithContent(pattern)) {
            pattern = formatTypes[0];
          }
          var dateTimeFormats = getLanguageObj(langCan).dates.calendars.gregorian.dateTimeFormats;
          var dateTimeFormat = dateTimeFormats[pattern];
          if (dateTimeFormat) {
            dateTimeFormat = replaceTokens(dateTimeFormat, '{1}', formatDate(struct, pattern, isJulian, langCan));
            dateTimeFormat = replaceTokens(dateTimeFormat, '{0}', formatTime(struct, pattern, langCan, true));
          } else {
            dateTimeFormat = formatDate(struct, pattern, isJulian, langCan);
            dateTimeFormat = formatTime(struct, dateTimeFormat, langCan, true);
          }
          string = dateTimeFormat;
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toString: {
      value: function() {
        var string;
        if (this.isValid) {
          var langCan = this.currentLang();
          string = this.lang(en).format('EEE MMM dd y HH:mm:ss \'GMT\'xx');
          this.setter('lang', langCan);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toDateString: {
      value: function() {
        var string;
        if (this.isValid) {
          var langCan = this.currentLang();
          string = this.lang(en).format('EEE MMM dd y');
          this.setter('lang', langCan);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toTimeString: {
      value: function() {
        var string;
        if (this.isValid) {
          var langCan = this.currentLang();
          string = this.lang(en).format('HH:mm:ss \'GMT\'xx');
          this.setter('lang', langCan);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toISOString: {
      value: function(padding) {
        var string;
        if (this.isValid()) {
          // should be gregorian?!
          // add weekDate = calendarToWeekDate(struct)
          string = toISOString(getCorrectStruct(this, this.getter()), padding);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    valueOf: {
      value: function() {
        return this.isJulian() ? this.jd() : this.getTime();
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    unix: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? toTT(this.getter()) : this.getter();
          return getTime(toUT(struct)).div(1000).trunc().toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {object} [dateObject]
     * @this AstroDate
     */
    object: {
      value: function(dateObject) {
        var val;
        if (isUndefined(dateObject)) {
          if (this.isValid()) {
            var struct = getCorrectStruct(this, this.getter());
            val = structToObject(this.isJulian() ? gregorianToJulian(struct) : struct);
          }
        } else if (isPlainObject(dateObject)) {
          val = this.setter('struct', objectToStruct(dateObject, this.isJulian()));
        } else {
          throw new TypeError(dateObject);
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {AstroDate}
     * @this AstroDate
     */
    clone: {
      value: function() {
        return new AstroDate(this);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {array} [dateArray]
     * @this AstroDate
     */
    array: {
      value: function(dateArray) {
        var val;
        if (isUndefined(dateArray)) {
          if (this.isValid()) {
            var struct = getCorrectStruct(this, this.getter());
            val = structToArrayOfString(this.isJulian() ? gregorianToJulian(struct) : struct);
          }
        } else if (Array.isArray(dateArray)) {
          val = this.setter('struct', arrayToStruct(dateArray, this.isJulian()));
        } else {
          throw new TypeError(dateArray);
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {window.Date} [date]
     * @this AstroDate
     */
    date: {
      value: function(date) {
        var val;
        if (isUndefined(date)) {
          val = new Date(this.isValid() ? Number(this.getTime()) : NaN);
        } else if (isDate(date)) {
          val = this.setter(date);
        } else {
          throw new TypeError(date);
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    getTime: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? toTT(this.getter()) : this.getter();
          return getTime(toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    deltaTime: {
      value: function() {
        if (this.isValid()) {
          return deltaTime(getCorrectStruct(this, this.getter())).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} unit
     * @this AstroDate
     */
    timeTo: {
      value: function(unit) {
        if (this.isValid()) {
          return timeTo(getCorrectStruct(this, this.getter()), normaliseUnits(unit)).toString();
        }
      }
    },
    /**
     * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus the
     * fraction of the day since that instant.
     * Julian Dates are expressed as a Julian day number with a decimal fraction added.
     * For example, the Julian Date for 00:30:00.0 UT 1 January 2013 is 2456293.520833334
     * If argument is passed then this function acts as a setter; otherwise it is a getter.
     * If AstroDate is invalid then undefined is returned.
     * Throws an error if the argument is not of the correct type.
     * @memberOf AstroDate.prototype
     * @function
     * @param {(number|string)} [jd]
     * @return {string|undefined}
     * @this AstroDate
     */
    jd: {
      value: function(jd) {
        var val;
        if (isUndefined(jd)) {
          if (this.isValid()) {
            var struct = this.isTT() ? toTT(this.getter()) : this.getter();
            val = gregorianToJd(toUT(struct)).toFixed(BigNum.config().DECIMAL_PLACES);
          }
        } else if (isNumber(jd) || isStringWithContent(jd) && jd.trim().length !== 0) {
          val = this.setter('struct', jdToGregorian(jd));
        } else {
          throw new TypeError(jd);
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    jdn: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? toTT(this.getter()) : this.getter();
          return gregorianToJdn(toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    mjd: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? toTT(this.getter()) : this.getter();
          return gregorianToMJD(toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    easter: {
      value: function() {
        var val,
          a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          k,
          l,
          m,
          n;
        if (this.isValid()) {
          var struct = getCorrectStruct(this, this.getter());
          if (this.isJulian()) {
            a = struct.year.mod(4);
            b = struct.year.mod(7);
            c = struct.year.mod(19);
            d = c.times(19).plus(15).mod(30);
            e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7);
            f = d.plus(e).plus(114);
            val = new AstroDate([struct.year, f.div(31).floor().minus(1), f.mod(31).plus(1)]);
          } else {
            a = struct.year.mod(19);
            b = struct.year.div(100).floor();
            c = struct.year.mod(100).floor();
            d = b.div(4);
            e = b.mod(4);
            f = b.plus(8).div(25).floor();
            g = b.minus(f).plus(1).div(3).floor();
            h = new BigNum(19).times(a).plus(b).minus(d).minus(g).plus(15).mod(30);
            i = c.div(4).floor();
            k = c.mod(4);
            l = new BigNum(32).plus(e.times(2)).plus(i.times(2)).minus(h).minus(k).mod(7);
            m = a.plus(h.times(11)).plus(l.times(22)).div(451).floor();
            n = h.plus(l).minus(m.times(7)).plus(114);
            val = new AstroDate([struct.year, n.div(31).floor(), n.mod(31).plus(1)]);
          }
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    isLeapYear: {
      value: function() {
        var val;
        if (this.isValid()) {
          var struct = getCorrectStruct(this, this.getter());
          if (this.isJulian()) {
            val = isJulianLeapYear(gregorianToJulian(struct));
          } else {
            val = isGregorianLeapYear(struct);
          }
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     * @return {number}
     */
    daysInYear: {
      value: function() {
        var val;
        if (this.isValid()) {
          var struct = getCorrectStruct(this, this.getter());
          if (this.isJulian()) {
            val = daysInJulianYear(gregorianToJulian(struct)).toNumber();
          } else {
            val = daysInGregorianYear(struct).toNumber();
          }
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     * @return {number}
     */
    daysInMonth: {
      value: function() {
        var val;
        if (this.isValid()) {
          var struct = getCorrectStruct(this, this.getter());
          if (this.isJulian()) {
            val = daysInJulianMonth(gregorianToJulian(struct)).toNumber();
          } else {
            val = daysInGregorianMonth(struct).toNumber();
          }
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} [jsonString]
     * @return {string}
     * @this AstroDate
     */
    json: {
      value: function(jsonString) {
        var val;
        if (isStringWithContent(jsonString)) {
          var struct = objectToStruct(JSON.parse(jsonString), this.isJulian());
          if (!isValid(struct)) {
            throw new SyntaxError(struct);
          }
          val = this.setter('struct', struct);
        } else {
          val = JSON.stringify(this.object());
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toJSON: {
      value: function(padding, type) {
        return this.toISOString(padding, type);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    calendarToWeekDate: {
      value: function() {
        if (this.isValid()) {
          return weekToObject(calendarToWeekDate(getCorrectStruct(this, this.getter())));
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} [id]
     * @return {string}
     * @this AstroDate
     */
    lang: {
      value: function(id) {
        var val;
        var langCan = new LanguageCan(id);
        if (langCan.isValid()) {
          langCan = languageLoaded(langCan);
          if (langCan.isValid() && isPlainObject(getLanguageObj(langCan))) {
            this.setter('lang', langCan);
          }
          val = this;
        } else {
          val = this.getter('lang').toString();
        }
        return val;
      }
    }
  });

  Object.defineProperties(AstroDate, {
    /** @memberOf AstroDate
     * @function
     * @param {string} [id]
     * @param {object} [object]
     * @return {string}
     */
    lang: {
      value: function(id, object) {
        var langCan = new LanguageCan(id);
        if (langCan.isValid()) {
          langCan = languageLoaded(langCan);
          if (langCan.isValid() && isPlainObject(object)) {
            languages[langCan.toMinBCP47String()] = object;
          }
          if (isPlainObject(getLanguageObj(langCan))) {
            defaultLanguage = langCan;
          }
        }
        return defaultLanguage.min.toString();
      }
    },
    /** @memberOf AstroDate
     * @function
     * @return {array.<String>}
     */
    langs: {
      value: function() {
        return Object.keys(languages);
      }
    },
    /** @memberOf AstroDate
     * @function
     * @param {object} object
     * @return {object}
     */
    leapSeconds: {
      value: function(object) {
        if (isPlainObject(object)) {
          leapSeconds = object;
        }
        return leapSeconds;
      }
    },
    /** @memberOf AstroDate
     * @function
     * @param {object} object
     * @return {object}
     */
    /*
    supplemental: {
      value: function(object) {
        if (isPlainObject(object)) {
          supplemental = object;
        }
        return supplemental;
      }
    },
    */
    /** @memberOf AstroDate
     * @function
     * @param {string} unitString
     */
    normaliseUnits: {
      value: function(unitString) {
        return normaliseUnits(unitString);
      }
    },
    /**
     * Tests if the provided input is an instance of AstroDate.
     * @memberOf AstroDate
     * @function
     * @param {object} inputArg
     * @return {boolean}
     */
    isAstroDate: {
      value: function(inputArg) {
        // need to fix instanceof
        return isObjectLike(inputArg) && inputArg instanceof AstroDate;
      }
    },
    /**
     * Time is measured in ECMAScript in milliseconds since 01 January, 1970 UTC. In time values leap seconds
     * are ignored. It is assumed that there are exactly 86,400,000 milliseconds per day.
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    now: {
      value: function() {
        return new AstroDate().getTime();
      }
    },
    /**
     * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus
     * the fraction of the day since that instant.
     * Julian Dates are expressed as a Julian day number with a decimal fraction added.
     * For example, the Julian Date for 00:30:00.0 UT 1 January 2013 is 2456293.520833334
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    jd: {
      value: function() {
        return new AstroDate().jd();
      }
    },
    /**
     * The Julian Day Number (JDN) is the integer assigned to a whole solar day in the Julian day count
     * starting from noon Greenwich Mean Time,
     * with Julian day number 0 assigned to the day starting at noon on 1 January 4713 BC proleptic
     * Julian calendar (24 November 4714 BC, in the proleptic Gregorian calendar).
     * For example, the Julian day number for 1 January 2000 was 2,451,545.0
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    jdn: {
      value: function() {
        return new AstroDate().jdn();
      }
    },
    /**
     * The Modified Julian Date (MJD) was introduced by the Smithsonian Astrophysical Observatory
     * in 1957 to record the orbit of
     * Sputnik via an IBM 704 (36-bit machine) and using only 18 bits until August 7, 2576.
     * MJD is the epoch of OpenVMS, using 63-bit date/time postponing the next Y2K campaign to
     * July 31, 31086 02:48:05.47.
     * MJD is defined relative to midnight, rather than noon.
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    mjd: {
      value: function() {
        return new AstroDate().mjd();
      }
    },
    /**
     * The time now represented in Unix time.
     * Unix time, or POSIX time, is a system for describing instants in time,
     * defined as the number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC),
     * Thursday, 1 January 1970, not counting leap seconds.
     * It is used widely in Unix-like and many other operating systems and file formats.
     * Due to its handling of leap seconds, it is neither a linear representation of time nor
     * a true representation of UTC.
     * Unix time may be checked on most Unix systems by typing date +%s on the command line.
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    unix: {
      value: function() {
        return new AstroDate().unix();
      }
    }
  });

  module.exports = AstroDate;
}());
