/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/astrodate"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/astrodate.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/astrodate"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/astrodate.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/astrodate#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/astrodate/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/astrodate" title="npm version">
 * <img src="https://badge.fury.io/js/astrodate.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Javascript Date object with Astronomy in mind. .
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 0.8.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @see https://nodejs.org/api/AstroDate.html
 * @module AstroDate
 */
/*global require, module */
;(function() {
  'use strict';

  var isUndefined = require('validate.io-undefined');
  var isNull = require('lodash.isnull');
  var isPlainObject = require('lodash.isplainobject');
  var isObjectLike = require('is-object-like-x');
  var isString = require('is-string');
  var isNumber = require('is-number-object');
  var isDate = require('is-date-object');
  var LanguageCan = require('./languageCan.js');
  var leapYear = require('./leapYear.js');
  var daysIn = require('./daysIn.js');
  var isIn = require('./isIn.js');
  var isValid = require('./isValid.js');
  var normalise = require('./normalise.js');
  var commonData = require('./commonData.js');
  var data = require('./data.js');
  var convert = require('./convert.js');
  var utils = require('./utils.js');
  var format = require('./format.js');
  var isoParse = require('./isoParse.js');
  var toISOString = require('./toISOString.js');
  var getCorrectStruct = require('./getCorrectStruct.js');
  var easter = require('./easter.js');
  var BigNum = require('./BigNum.js');
  var invalidDate = 'Invalid Date';
  //var replaceTokenRX = /([^']+)|('[^']+')/g;
  //var unmatchedTokenRx = /[^a-z]/gi;

  /**
   * For holding CLDR language specific data.
   * @private
   * @type {object}
   */
  var languages = require('./language.json');
  //var timeData = require('../node_modules/cldr-core/supplemental/timeData.json').supplemental.timeData;
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
          var unit = normalise.unit(key);
          var valid = false;
          var bn;
          if (unit) {
            bn = new BigNum(value);
            switch (unit) {
              case 'year':
                valid = isIn.yearRange(bn);
                break;
              case 'month':
                valid = isIn.monthRange(bn);
                break;
              case 'day':
                valid = isIn.dayRange(bn, struct, isJulian);
                break;
              case 'hour':
                valid = isIn.hourRange(bn);
                break;
              case 'minute':
                valid = isIn.minuteRange(bn, struct);
                break;
              case 'second':
                valid = isIn.secondRange(bn, struct);
                break;
              case 'millisecond':
                valid = isIn.millisecondRange(bn, struct);
                break;
              case 'offset':
                valid = isIn.offsetRange(bn);
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
            struct = convert.array.toStruct(key, false);
          } else if (AstroDate.isAstroDate(key)) {
            struct = key.getter();
            isJulian = key.isJulian();
          } else if (isDate(key)) {
            struct = convert.date.toStruct(key);
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
      struct = convert.date.toStruct(new Date());
    } else if (length === 1) {
      arg = utils.first(args);
      if (AstroDate.isAstroDate(arg)) {
        isJulian = arg.getter('isJulian');
        struct = Object.assign({}, arg.getter());
      } else if (isDate(arg)) {
        struct = convert.date.toStruct(arg);
      } else if (isNumber(arg)) {
        struct = convert.date.toStruct(new Date(arg));
      } else if (isString(arg)) {
        struct = isoParse(arg);
      } else {
        throw new TypeError(arg);
      }
    } else {
      arg = utils.last(args);
      opts = normalise.options(arg);
      if (isNull(arg) || isPlainObject(arg)) {
        if (opts.Julian) {
          isJulian = true;
        }
        struct = convert.array.toStruct(args.slice(0, -1), isJulian);
        if (isJulian) {
          struct = convert.struct.julianToGregorian(struct);
        }
      } else {
        struct = convert.array.toStruct(args, isJulian);
      }
      if (isUndefined(args[8]) && !isUndefined(opts.offset)) {
        struct.offset = convert.bnOffset(opts.offset);
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
          return convert.struct.weekDayNumber(getCorrectStruct(this)).inRange(1, 5);
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
          return convert.struct.weekDayNumber(getCorrectStruct(this)).inRange(6, 7);
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
          return getCorrectStruct(this).offset.toString();
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
          var struct = getCorrectStruct(this, isJulian);
          if (!utils.isStringWithContent(pattern)) {
            pattern = utils.first(commonData.formatTypes);
          }
          if (commonData.formatTypes.includes(pattern)) {
            var gregorian = getLanguageObj(langCan).dates.calendars.gregorian;
            var dateTimeFormats = gregorian.dateTimeFormats;
            pattern = dateTimeFormats[pattern]
              .replace('{1}', gregorian.dateFormats[pattern])
              .replace('{0}', gregorian.timeFormats[pattern]);
          }
          string = format(struct, pattern, getLanguageObj(langCan), isJulian);
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
    toString: {
      value: function() {
        return this.isValid ? this.toDateString() + ' ' + this.toTimeString() : invalidDate;
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
          // add weekDate = convert.struct.calendarToWeekDate(struct)
          string = toISOString(getCorrectStruct(this), padding);
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
        return this.isJulian() ? this.jd() : this.convert.struct.getTime();
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    unix: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.getTime(convert.struct.toUT(struct)).div(1000).trunc().toString();
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
            var struct = getCorrectStruct(this);
            val = convert.struct.toObject(this.isJulian() ? convert.struct.gregorianToJulian(struct) : struct);
          }
        } else if (isPlainObject(dateObject)) {
          val = this.setter('struct', convert.object.toStruct(dateObject, this.isJulian()));
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
            var struct = getCorrectStruct(this);
            val = convert.struct.toArrayOfString(this.isJulian() ? convert.struct.gregorianToJulian(struct) : struct);
          }
        } else if (Array.isArray(dateArray)) {
          val = this.setter('struct', convert.array.toStruct(dateArray, this.isJulian()));
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
          val = new Date(this.isValid() ? Number(this.convert.struct.getTime()) : NaN);
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
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.getTime(convert.struct.toUT(struct)).toString();
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
          return convert.struct.deltaTime(getCorrectStruct(this)).toString();
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
          return convert.struct.timeTo(getCorrectStruct(this), unit).toString();
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
            var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
            val = convert.struct.gregorianToJd(convert.struct.toUT(struct)).toFixed(BigNum.config().DECIMAL_PLACES);
          }
        } else if (isNumber(jd) || utils.isStringWithContent(jd) && jd.trim().length !== 0) {
          val = this.setter('struct', convert.jdToGregorian(jd));
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
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.gregorianToJdn(convert.struct.toUT(struct)).toString();
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
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.gregorianToMJD(convert.struct.toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    easter: {
      value: function() {
        var val;
        if (this.isValid()) {
          val = new AstroDate(easter(getCorrectStruct(this)));
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
          var struct = getCorrectStruct(this);
          if (this.isJulian()) {
            val = leapYear.isJulian(convert.struct.gregorianToJulian(struct));
          } else {
            val = leapYear.isGregorian(struct);
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
          var struct = getCorrectStruct(this);
          if (this.isJulian()) {
            val = daysIn.julian.year(convert.struct.gregorianToJulian(struct)).toNumber();
          } else {
            val = daysIn.gregorian.year(struct).toNumber();
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
          var struct = getCorrectStruct(this);
          if (this.isJulian()) {
            val = daysIn.julian.month(convert.struct.gregorianToJulian(struct)).toNumber();
          } else {
            val = daysIn.gregorian.month(struct).toNumber();
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
        if (utils.isStringWithContent(jsonString)) {
          var struct = convert.object.toStruct(JSON.parse(jsonString), this.isJulian());
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
          return convert.struct.toWeekObject(convert.struct.calendarToWeekDate(getCorrectStruct(this)));
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
          data.leapSeconds = object;
        }
        return data.leapSeconds;
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
        return normalise.unit(unitString);
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
        return new AstroDate().convert.struct.getTime();
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
