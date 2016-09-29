/*global require, module */
(function () {
  'use strict';

  var isArrayLike = require('is-array-like-x');
  var isString = require('is-string');

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
    value = Number(value);
    return value >= Math.min(min, max) && value <= Math.max(min, max);
  }

  function isStringWithContent(value) {
    return isString(value) && value.trim().length > 0;
  }

  /**
   * Counts the occurences of the argument character in the supplied string.
   * @param {string} str
   * @param {string} character
   * @returns {number}
   */
  function countCharacter(str, character) {
    var first = String(character).at(0);
    return first === '' ? Infinity : Math.min(Math.max(String(str).split(first).length - 1, 0), Infinity);
  }

  function first(arr) {
    return isArrayLike(arr) ? (isString(arr) ? arr.charAt(0) : arr[0]) : void 0;
  }

  function last(arr) {
    return isArrayLike(arr) ? (isString(arr) ? arr.charAt(arr.length - 1) : arr[arr.length - 1]) : void 0;
  }

  module.exports = {
    inRange: inRange,
    isStringWithContent: isStringWithContent,
    countCharacter: countCharacter,
    first: first,
    last: last
  };
}());
