/*global require, module */
(function () {
  'use strict';

  var replaceTokens = require('./replaceTokens.js');
  var commonData = require('./commonData.js');
  var utils = require('./utils.js');
  var convert = require('./convert.js');
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
    pattern = replaceTokens(pattern, 'W', convert.struct.calendarToWeekOfMonth(struct));
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
    var dayOfYear = isJulian ?
      convert.struct.dayOfJulianYear(convert.struct.gregorianToJulian(struct)) :
      convert.struct.dayOfGregorianYear(struct);
    pattern = replaceTokens(pattern, 'D{1,3}', dayOfYear);
    pattern = replaceTokens(pattern, 'F', convert.struct.weekDayOfMonth(struct));
    var mjd = isJulian ?
      convert.struct.julianToMJD(convert.struct.toUT(struct)) :
      convert.struct.gregorianToMJD(convert.struct.toUT(struct));
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
    var dayOfWeekLocaleNumber = (1 + (7 - commonData.dayKeys.indexOf(weekData.firstDay[languageObject[2]]) + commonData.dayKeys.indexOf(dayKey))) % 7;
    pattern = replaceTokens(pattern, 'e{1,2}', dayOfWeekLocaleNumber);
    pattern = replaceTokens(pattern, 'cccccc', daysStandAlone[shortStr][dayKey]);
    pattern = replaceTokens(pattern, 'ccccc', daysStandAlone.narrow[dayKey]);
    pattern = replaceTokens(pattern, 'cccc', daysStandAlone.wide[dayKey]);
    pattern = replaceTokens(pattern, 'ccc', daysStandAlone.abbreviated[dayKey]);
    pattern = replaceTokens(pattern, 'c{1,2}', dayOfWeekLocaleNumber);
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
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
    }
    return tokensToString(pattern);
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
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
      pattern = replaceTokens(pattern, 's{1,2}', offset.second);
    }
    return tokensToString(pattern);
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
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
      pattern = timeZoneNames.gmtFormat.replace('{0}', tokensToString(pattern));
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
    var shortLocalisedGMT = formatLocalisedGMT(struct, languageObject, true);
    pattern = replaceTokens(pattern, 'O', shortLocalisedGMT);
    pattern = replaceTokens(pattern, 'z{1,3}', shortLocalisedGMT);
    // The long localized GMT format.
    var longLocalisedGMT = formatLocalisedGMT(struct, languageObject, false);
    pattern = replaceTokens(pattern, 'OOOO', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'zzzz', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'ZZZZ', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'vvvv', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'v', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'VVVV', longLocalisedGMT);
    // The ISO8601 basic format short
    pattern = replaceTokens(pattern, 'X', formatIsoTimeZone(struct, languageObject, true, 'basic', true));
    // The ISO8601 basic format short no Z
    pattern = replaceTokens(pattern, 'x', formatIsoTimeZone(struct, languageObject, false, 'basic', true));
    // The ISO8601 basic format
    var isoBasic = formatIsoTimeZone(struct, languageObject, true, 'basic', false);
    pattern = replaceTokens(pattern, 'Z{1,3}', isoBasic);
    pattern = replaceTokens(pattern, 'XX', isoBasic);
    // The ISO8601 basic format no Z
    pattern = replaceTokens(pattern, 'xx', formatIsoTimeZone(struct, languageObject, false, 'basic', false));
    //The ISO8601 extended format
    pattern = replaceTokens(pattern, 'XXX', formatIsoTimeZone(struct, languageObject, true, 'extended', false));
    //The ISO8601 extended format no Z
    pattern = replaceTokens(pattern, 'xxx', formatIsoTimeZone(struct, languageObject, false, 'extended', false));
    // The ISO8601 basic format optional seconds
    pattern = replaceTokens(pattern, 'XXXX', formatIsoTimeZone(struct, languageObject, true, 'basic', true));
    // The ISO8601 basic format no Z optional seconds
    pattern = replaceTokens(pattern, 'xxxx', formatIsoTimeZoneSeconds(struct, languageObject, false, 'basic', true));
    //The ISO8601 extended format optional seconds
    pattern = replaceTokens(pattern, 'XXXXX', formatIsoTimeZoneSeconds(struct, languageObject, true, 'extended', true));
    //The ISO8601 extended format no Z optional seconds
    pattern = replaceTokens(pattern, 'xxxxx', formatIsoTimeZoneSeconds(struct, languageObject, false, 'extended', true));
    //The ISO8601 extended format optional seconds
    pattern = replaceTokens(pattern, 'ZZZZZ', formatIsoTimeZoneSeconds(struct, languageObject, true, 'extended', true));
    return pattern;
  }

  module.exports = function format(struct, pattern, languageObject, isJulian) {
    var tokens = formatDate(struct, pattern, languageObject, isJulian);
    return tokensToString(formatTime(struct, tokens, languageObject));
  };
}());
