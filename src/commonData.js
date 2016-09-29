/*global module */
(function () {
  'use strict';

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
   * For looking up CLDR width translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var widthTypes = ['wide', 'abbreviated', 'narrow'];
  /**
   * For looking up CLDR date and time patterns.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var formatTypes = ['full', 'long', 'medium', 'short'];
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
  var monthKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  /**
   * For looking up CLDR format translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var nameTypes = ['format', 'stand-alone'];

  var j2000 = {
    jdtt: '2451545.0',
    tt: '2000-01-01T12:00:00.000Z',
    tai: '2000-01-01T11:59:27.816Z',
    utc: '2000-01-01T11:58:55.816Z'
  };

  module.exports = {
    fullKeys: fullKeys,
    fullOptions: fullOptions,
    widthTypes: widthTypes,
    formatTypes: formatTypes,
    dayKeys: dayKeys,
    monthKeys: monthKeys,
    nameTypes: nameTypes,
    j2000: j2000
  };
}());
