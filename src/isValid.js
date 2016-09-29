/*global require, module */
(function () {
  'use strict';

  var isPlainObject = require('lodash.isplainobject');
  var isIn = require('./isIn.js');
  var commonData = require('./commonData.js');
  var BigNum = require('./BigNum.js');

  module.exports = function isValid(struct, isJulian) {
    var valid = false;
    if (isPlainObject(struct)) {
      valid = !commonData.fullKeys.some(function(element) {
        var bn = struct[element.full];
        if (!BigNum.isBigNum(bn)) {
          return true;
        }
        switch (element.full) {
          case 'year':
            if (!isIn.yearRange(bn)) {
              return true;
            }
            break;
          case 'month':
            if (!isIn.monthRange(bn)) {
              return true;
            }
            break;
          case 'day':
            if (!isIn.dayRange(bn, struct, isJulian)) {
              return true;
            }
            break;
          case 'hour':
            if (!isIn.hourRange(bn)) {
              return true;
            }
            break;
          case 'minute':
            if (!isIn.minuteRange(bn, struct)) {
              return true;
            }
            break;
          case 'second':
            if (!isIn.secondRange(bn, struct)) {
              return true;
            }
            break;
          case 'millisecond':
            if (!isIn.millisecondRange(bn, struct)) {
              return true;
            }
            break;
          case 'offset':
            if (!isIn.offsetRange(bn)) {
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
  };
}());
