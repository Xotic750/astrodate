/*global require, module */
(function () {
  'use strict';

  var isUndefined = require('validate.io-undefined');
  var isNull = require('lodash.isnull');
  var utils = require('./utils.js');
  var convert = require('./convert.js');
  var BigNum = require('./BigNum.js');
  var invalidISOCharsRx = /[^\d\-+WT Z:,\.]/;

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
    if (utils.inRange(splitLength, 1, 2)) {
      if (splitLength === 1) {
        element = utils.first(firstSplit);
        // we make a best guess
        if (element.slice(-4) === '-' ||
          element.startsWith('+') ||
          element.startsWith('-') ||
          element.length === 2 ||
          utils.countCharacter(element, '-') >= 2 ||
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
        dtObject.date = utils.first(firstSplit) || '00';
        dtObject.time = utils.last(firstSplit);
      }
    }
    return dtObject;
  }

  /**
   * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 date patterns.
   * @private
   * @readonly
   * @type {object.array.object}
   * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
   */
  var datePatterns = {

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
        return convert.dateToObject(rxResult[1] + '00', 1, 1);
      }
    }, {
      /**
       * yyyy
       * @private
       */
      regex: /^(\d{4})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], 1, 1);
      }
    }, {
      /**
       * yyyyMMdd
       * @private
       */
      regex: /^(\d{4})(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * yyyyddd
       * @private
       */
      regex: /^(\d{4})(\d{3})$/,
      func: function(rxResult) {
        return convert.ordinalToCalendar(rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * yyyyWww
       * @private
       */
      regex: /^(\d{4})W(\d{2})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyyWwwD
       * @private
       */
      regex: /^(\d{4})W(\d{2})([1-7]{1})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
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
      regex: /^([\-+]\d{5,})-(\d{2})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.dateToObject(rxResult[1], rxResult[2], 1);
        }
      }
    }, {
      /**
       * yyyy-MM
       * @private
       */
      regex: /^(\d{4})-(\d{2})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyy-MM-dd
       * @private
       */
      regex: /^(\d{4})-(\d{2})-(\d{2})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * -+[..y]yyyyy-MM-dd
       * @private
       */
      regex: /^([\-+]\d{5,})-(\d{2})-(\d{2})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.dateToObject(rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * yyyy-DDD
       * @private
       */
      regex: /^(\d{4})-(\d{3})$/,
      func: function(rxResult) {
        return convert.ordinalToCalendar(rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * yyyy-Www
       * @private
       */
      regex: /^(\d{4})-W(\d{2})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyy-Www-D
       * @private
       */
      regex: /^(\d{4})-W(\d{2})-([1-7]{1})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * -+[..y]yyyy-DDD
       * @private
       */
      regex: /^([\-+]\d{5,})-(\d{3})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.ordinalToCalendar(rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * -+[..y]yyyyy-Www
       * @private
       */
      regex: /^([\-+]\d{5,})-W(\d{2})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.weekDateToCalendar(rxResult[1], rxResult[2], 1);
        }
      }
    }, {
      /**
       * -+[..y]yyyyy-Www-D
       * @private
       */
      regex: /^([\-+])(\d{5,})-W(\d{2})-([1-7]{1})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
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
   * @return {object.BigNum}
   */
  function createTimeObject(hour, minute, second, offset) {
    offset = new BigNum(offset);
    if (offset.isZero()) {
      offset = offset.abs();
    } else {
      offset = offset.neg();
    }
    return {
      hour: new BigNum(hour),
      minute: new BigNum(minute),
      second: new BigNum(second),
      millisecond: BigNum.zero(),
      offset: offset
    };
  }

  /**
   * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 time patterns.
   * @private
   * @readonly
   * @type {object.array.object}
   * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
   */
  var timePatterns = {

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
        return createTimeObject(rxResult[1], 0, 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HHMM
       * @private
       */
      regex: /^(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HHMMSS
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], convert.date.getTimezoneOffset().neg());
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
      regex: /^(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HHMM-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HHMMSS-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH-+ZZZZ
       * @private
       */
      regex: /^(\d{2})([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2], rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HHMM-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HHMMSS-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH.,[..f]f
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], convert.date.getTimezoneOffset(), rxResult[1]);
      }
    }, {
      /**
       * HHMM.,[..f]f
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HHMMSS.,[..f]f
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], 0, rxResult[1]);
      }
    }, {
      /**
       * HHMM.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HHMMSS.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HHMM.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HHMMSS.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * HH.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HHMM.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HHMMSS.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[5], rxResult[6]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
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
        return createTimeObject(rxResult[1], 0, 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HH:MM
       * @private
       */
      regex: /^(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HH:MM:SS
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], convert.date.getTimezoneOffset().neg());
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
      regex: /^(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HH:MM-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HH:MM:SS-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2})([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2], rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HH:MM-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HH:MM:SS-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH.,[..f]f
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], convert.date.getTimezoneOffset(), rxResult[1]);
      }
    }, {
      /**
       * HH:MM.,[..f]f
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], 0, rxResult[1]);
      }
    }, {
      /**
       * HH:MM.,[..f]fZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[1]);
      }
    }, {
      /**
       * HH:MM:SS.,[..f]fZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HH:MM.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HH:MM.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {

        var offset = convert.offsetToSeconds(rxResult[5], rxResult[6]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
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
    return utils.isStringWithContent(string) &&
      !invalidISOCharsRx.test(string) &&
      utils.inRange(utils.countCharacter(string, ' ') + utils.countCharacter(string, 'T'), 0, 1) &&
      utils.inRange(utils.countCharacter(string, 'W'), 0, 1) &&
      utils.inRange(utils.countCharacter(string, 'Z'), 0, 1) &&
      utils.inRange(utils.countCharacter(string, '.') + utils.countCharacter(string, ','), 0, 1) &&
      utils.inRange(utils.countCharacter(string, '+'), 0, 2) &&
      utils.inRange(utils.countCharacter(string, '-'), 0, 4) &&
      utils.inRange(utils.countCharacter(string, ':'), 0, 4) &&
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
    if (!isNull(rxResult)) {
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
  module.exports = function isoParse(isoString) {
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
  };
}());
