/*global require, module */
(function () {
  'use strict';

  var tokenReplace = require('./tokenReplace.js');
  var commonData = require('./commonData.js');
  var utils = require('./utils.js');
  var convert = require('./convert.js');
  var tokenizePattern = require('./tokenizePattern');
  var standAlone = utils.first(commonData.nameTypes);
  var shortStr = utils.last(commonData.formatTypes);
  var weekData = require('../node_modules/cldr-core/supplemental/weekData.json').supplemental.weekData;

  function tokenReducer(a, p) {
    return a + (p.type === 'symbols' ? p.value.replace(/'/g, '') : p.value);
  }

  function tokensToString(tokens) {
    return tokens.reduce(tokenReducer, '');
  }

  /**
   * Takes a date pattern of tokens and replaces those tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
   * @function
   * @param {object} struct
   * @param {string} pattern
   * @param {boolean} julian
   * @param {object} languageObject
   * @return {string}
   */
  // struct should not be UTC but UT
  function formatDate(struct, pattern, languageObject, isJulian) {
    var gregorian = languageObject.dates.calendars.gregorian;
    //var dateFormats = gregorian.dateFormats;
    var eras = gregorian.eras;
    var months = gregorian.months;
    var monthsFormat = months.format;
    var monthsStandAlone = months[standAlone];
    var days = gregorian.days;
    var daysFormat = days.format;
    var daysStandAlone = days[standAlone];
    // should use alternative CLDR
    var weekDate = convert.struct.calendarToWeekDate(struct);
    var dayKey = convert.struct.cldrDayKey(struct);
    /*
    if (formatTypes.includes(pattern)) {
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
      pattern = dateFormats[pattern];
    }
    calendarType = julian ? 'julian' : 'gregorian';
    pattern = tokenReplace(pattern, 'CCCCC', calendarTypes[calendarType].narrow);
    pattern = tokenReplace(pattern, 'CCCC', calendarTypes[calendarType].wide);
    pattern = tokenReplace(pattern, 'C{1,3}', calendarTypes[calendarType].abbreviated);
    */
    var eraNum = struct.year.lt(1) ? 0 : 1;
    var eraNumStr = eraNum.toString();
    pattern = tokenReplace(pattern, 'GGGGG', eras.eraNarrow[eraNumStr]);
    pattern = tokenReplace(pattern, 'GGGG', eras.eraNames[eraNumStr]);
    pattern = tokenReplace(pattern, 'G{1,3}', eras.eraAbbr[eraNumStr]);
    var year = struct.year.plus(eraNum - 1);
    var yearSign = year.lt(0) ? '-' : '';
    pattern = tokenReplace(pattern, 'y{3,}', year);
    pattern = tokenReplace(pattern, 'yy', yearSign + year.toString().slice(-2));
    pattern = tokenReplace(pattern, 'y', year);
    pattern = tokenReplace(pattern, 'U{1,}', year);
    pattern = tokenReplace(pattern, 'u{1,}', struct.year);
    pattern = tokenReplace(pattern, 'Y{1,}', weekDate.year);
    var week = weekDate.week.toString();
    pattern = tokenReplace(pattern, 'w{1,2}', week);
    pattern = tokenReplace(pattern, 'W', convert.struct.calendarToWeekOfMonth(struct));
    /*
    pattern = tokenReplace(pattern, 'Q{1,2}', value);
    pattern = tokenReplace(pattern, 'QQQ', value);
    pattern = tokenReplace(pattern, 'QQQQ', value);
    pattern = tokenReplace(pattern, 'q{1,2}', value);
    pattern = tokenReplace(pattern, 'qqq', value);
    pattern = tokenReplace(pattern, 'qqqq', value);
    */
    var month = struct.month.toString();
    pattern = tokenReplace(pattern, 'MMMMM', monthsFormat.narrow[month]);
    pattern = tokenReplace(pattern, 'MMMM', monthsFormat.wide[month]);
    pattern = tokenReplace(pattern, 'MMM', monthsFormat.abbreviated[month]);
    pattern = tokenReplace(pattern, 'M{1,2}', month);
    pattern = tokenReplace(pattern, 'LLLLL', monthsStandAlone.narrow[month]);
    pattern = tokenReplace(pattern, 'LLLL', monthsStandAlone.wide[month]);
    pattern = tokenReplace(pattern, 'LLL', monthsStandAlone.abbreviated[month]);
    pattern = tokenReplace(pattern, 'L{1,2}', month);
    pattern = tokenReplace(pattern, 'd{1,2}', struct.day);
    var dayOfYear = isJulian ?
      convert.struct.dayOfJulianYear(convert.struct.gregorianToJulian(struct)) :
      convert.struct.dayOfGregorianYear(struct);
    pattern = tokenReplace(pattern, 'D{1,3}', dayOfYear);
    pattern = tokenReplace(pattern, 'F', convert.struct.weekDayOfMonth(struct));
    var mjd = isJulian ?
      convert.struct.julianToMJD(convert.struct.toUT(struct)) :
      convert.struct.gregorianToMJD(convert.struct.toUT(struct));
    pattern = tokenReplace(pattern, 'g{1,}', mjd);
    var dayStr = daysFormat[shortStr][dayKey];
    pattern = tokenReplace(pattern, 'EEEEEE', dayStr);
    pattern = tokenReplace(pattern, 'eeeeee', dayStr);
    dayStr = daysFormat.narrow[dayKey];
    pattern = tokenReplace(pattern, 'EEEEE', dayStr);
    pattern = tokenReplace(pattern, 'eeeee', dayStr);
    dayStr = daysFormat.wide[dayKey];
    pattern = tokenReplace(pattern, 'EEEE', dayStr);
    pattern = tokenReplace(pattern, 'eeee', dayStr);
    dayStr = daysFormat.abbreviated[dayKey];
    pattern = tokenReplace(pattern, 'EEE', dayStr);
    pattern = tokenReplace(pattern, 'eee', dayStr);
    pattern = tokenReplace(pattern, 'E{1,2}', weekDate.weekDay);
    var dayOfWeekLocaleNumber = (1 + (7 - commonData.dayKeys.indexOf(weekData.firstDay[languageObject[2]]) + commonData.dayKeys.indexOf(dayKey))) % 7;
    pattern = tokenReplace(pattern, 'e{1,2}', dayOfWeekLocaleNumber);
    pattern = tokenReplace(pattern, 'cccccc', daysStandAlone[shortStr][dayKey]);
    pattern = tokenReplace(pattern, 'ccccc', daysStandAlone.narrow[dayKey]);
    pattern = tokenReplace(pattern, 'cccc', daysStandAlone.wide[dayKey]);
    pattern = tokenReplace(pattern, 'ccc', daysStandAlone.abbreviated[dayKey]);
    pattern = tokenReplace(pattern, 'c{1,2}', dayOfWeekLocaleNumber);
    return pattern;
  }

  /**
   * Formats ISO timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} languageObject
   * @param {boolean} withZ
   * @param {string} format
   * @param {boolean} optional
   * @return {string}
   */
  // ISO 8601 time zone formats.
  function formatIsoTimeZone(struct, languageObject, withZ, format, optional) {
    var pattern;
    if (withZ && struct.offset.isZero()) {
      pattern = 'Z';
    } else {
      var timeZoneNames = languageObject.dates.timeZoneNames;
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = convert.struct.fractionToTime(struct.offset.abs(), 'second');
      var offsetFormat;
      if (struct.offset.lte(0)) {
        offsetFormat = utils.first(offsetFormats);
      } else {
        offsetFormat = utils.last(offsetFormats.slice);
      }
      offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
      if (format === 'basic') {
        if (optional && offset.minute.isZero()) {
          offsetFormat = utils.first(offsetFormat.split(':'));
        } else {
          offsetFormat = offsetFormat.replace(':', '');
        }
      }
      pattern = tokenReplace(offsetFormat, 'H{1,2}', offset.hour);
      pattern = tokenReplace(pattern, 'm{1,2}', offset.minute);
    }
    return pattern;
  }

  /**
   * Formats ISO timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} languageObject
   * @param {boolean} withZ
   * @param {string} format
   * @param {boolean} optional
   * @return {string}
   */
  // ISO 8601 time zone formats.
  function formatIsoTimeZoneSeconds(struct, languageObject, withZ, format, optional) {
    var pattern;
    if (withZ && struct.offset.isZero()) {
      pattern = 'Z';
    } else {
      var timeZoneNames = languageObject.dates.timeZoneNames;
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = convert.struct.fractionToTime(struct.offset.abs(), 'second');
      if (struct.offset.lte(0)) {
        offsetFormat = utils.first(offsetFormats);
      } else {
        offsetFormat = utils.last(offsetFormats);
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
      pattern = tokenReplace(offsetFormat, 'H{1,2}', offset.hour);
      pattern = tokenReplace(pattern, 'm{1,2}', offset.minute);
      pattern = tokenReplace(pattern, 's{1,2}', offset.second);
    }
    return pattern;
  }

  /**
   * Formats localized GMT timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} languageObject
   * @param {boolean} requestedShort
   * @return {string}
   */
  // The localized GMT format.
  function formatLocalisedGMT(struct, languageObject, requestedShort) {
    var timeZoneNames = languageObject.dates.timeZoneNames;
    var pattern;
    if (struct.offset.isZero()) {
      pattern = timeZoneNames.gmtZeroFormat;
    } else {
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = convert.struct.fractionToTime(struct.offset.abs(), 'second');
      var offsetFormat;
      if (struct.offset.lte(0)) {
        offsetFormat = utils.first(offsetFormats);
      } else {
        offsetFormat = utils.last(offsetFormats);
      }
      if (requestedShort) {
        offsetFormat = offsetFormat.replace('HH', 'H');
      } else {
        offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
      }
      if (requestedShort && offset.minute.isZero()) {
        offsetFormat = utils.first(offsetFormat.split(':'));
      }
      pattern = tokenReplace(offsetFormat, 'H{1,2}', offset.hour);
      pattern = tokenReplace(pattern, 'm{1,2}', offset.minute);
      pattern = timeZoneNames.gmtFormat.replace('{0}', pattern);
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
   * @param {object} languageObject
   * @return {string}
   */
  // struct should not be UTC but UT
  function formatTime(struct, pattern, languageObject) {
    var gregorian = languageObject.dates.calendars.gregorian;
    var dayPeriod = struct.hour.inRange(12, 23) ? 'pm' : 'am';
    var hour = struct.hour.plus(11).mod(12).plus(1);
    /*
    if (formatTypes.includes(pattern)) {
      pattern = gregorian.timeFormats[pattern];
    }
    */
    pattern = tokenReplace(pattern, 'a', gregorian.dayPeriods.format.abbreviated[dayPeriod]);
    pattern = tokenReplace(pattern, 'h{1,2}', hour);
    pattern = tokenReplace(pattern, 'H{1,2}', struct.hour);
    pattern = tokenReplace(pattern, 'K{1,2}', hour.minus(1));
    // if hour is 24, needs to be handled in date too
    //temp = new AstroDate().jd(new AstroDate().jd());
    //pattern = tokenReplace(pattern, 'k{1,2}', struct.hour.plus(1));
    //pattern = tokenReplace(pattern, 'j{1,2}', struct.hour);
    pattern = tokenReplace(pattern, 'm{1,2}', struct.minute);
    pattern = tokenReplace(pattern, 's{1,2}', struct.second);
    // needs fixing
    pattern = tokenReplace(pattern, 'S{1,}', struct.millisecond);
    //pattern = tokenReplace(pattern, 'A{1,}', value);
    // The short localized GMT format.
    var shortLocalisedGMT = formatLocalisedGMT(struct, languageObject, true);
    pattern = tokenReplace(pattern, 'O', shortLocalisedGMT);
    pattern = tokenReplace(pattern, 'z{1,3}', shortLocalisedGMT);
    // The long localized GMT format.
    var longLocalisedGMT = formatLocalisedGMT(struct, languageObject, false);
    pattern = tokenReplace(pattern, 'OOOO', longLocalisedGMT);
    pattern = tokenReplace(pattern, 'zzzz', longLocalisedGMT);
    pattern = tokenReplace(pattern, 'ZZZZ', longLocalisedGMT);
    pattern = tokenReplace(pattern, 'vvvv', longLocalisedGMT);
    pattern = tokenReplace(pattern, 'v', longLocalisedGMT);
    pattern = tokenReplace(pattern, 'VVVV', longLocalisedGMT);
    // The ISO8601 basic format short
    pattern = tokenReplace(pattern, 'X', formatIsoTimeZone(struct, languageObject, true, 'basic', true));
    // The ISO8601 basic format short no Z
    pattern = tokenReplace(pattern, 'x', formatIsoTimeZone(struct, languageObject, false, 'basic', true));
    // The ISO8601 basic format
    var isoBasic = formatIsoTimeZone(struct, languageObject, true, 'basic', false);
    pattern = tokenReplace(pattern, 'Z{1,3}', isoBasic);
    pattern = tokenReplace(pattern, 'XX', isoBasic);
    // The ISO8601 basic format no Z
    pattern = tokenReplace(pattern, 'xx', formatIsoTimeZone(struct, languageObject, false, 'basic', false));
    //The ISO8601 extended format
    pattern = tokenReplace(pattern, 'XXX', formatIsoTimeZone(struct, languageObject, true, 'extended', false));
    //The ISO8601 extended format no Z
    pattern = tokenReplace(pattern, 'xxx', formatIsoTimeZone(struct, languageObject, false, 'extended', false));
    // The ISO8601 basic format optional seconds
    pattern = tokenReplace(pattern, 'XXXX', formatIsoTimeZone(struct, languageObject, true, 'basic', true));
    // The ISO8601 basic format no Z optional seconds
    pattern = tokenReplace(pattern, 'xxxx', formatIsoTimeZoneSeconds(struct, languageObject, false, 'basic', true));
    //The ISO8601 extended format optional seconds
    pattern = tokenReplace(pattern, 'XXXXX', formatIsoTimeZoneSeconds(struct, languageObject, true, 'extended', true));
    //The ISO8601 extended format no Z optional seconds
    pattern = tokenReplace(pattern, 'xxxxx', formatIsoTimeZoneSeconds(struct, languageObject, false, 'extended', true));
    //The ISO8601 extended format optional seconds
    pattern = tokenReplace(pattern, 'ZZZZZ', formatIsoTimeZoneSeconds(struct, languageObject, true, 'extended', true));
    return pattern;
  }

  module.exports = function format(struct, pattern, languageObject, isJulian) {
    var tokens = tokenizePattern(pattern);
    tokens.forEach(function (token) {
      if (token.type === 'symbols') {
        token.value = formatDate(struct, token.value, languageObject, isJulian);
        token.value = formatTime(struct, token.value, languageObject);
      }
    });
    return tokensToString(tokens);
  };
}());
