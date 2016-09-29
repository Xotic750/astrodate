/*global require, module */
(function () {
  'use strict';

  var isUndefined = require('validate.io-undefined');
  var commonData = require('./commonData.js');
  var utils = require('./utils.js');
  var convert = require('./convert.js');

  /**
   * Converts a date struct to an ISO extended dateTime stamp.
   * This routine needs changing so that the type of ISO dateTime stamp can be choosen.
   * @private
   * @function
   * @param {object} struct
   * @param {number} userPadding
   * @return {string}
   */
  module.exports = function toISOString(struct, userPadding) {
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
      if (isUndefined(struct[commonData.fullKeys[count].full])) {
        index = 3;
        break;
      }
    }
    for (var last = commonData.fullKeys.length - 1; index < last; index += 1) {
      key = commonData.fullKeys[index].full;
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
      } else if (utils.inRange(index, 3, 4)) {
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
      value = convert.struct.fractionToTime(value.abs(), 'second');
      string += value.hour.padLeadingZero(2) + ':' + value.minute.padLeadingZero(2);
    }
    return string;
  };
}());
