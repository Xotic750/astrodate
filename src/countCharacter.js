(function () {
  'use strict';

  /**
   * Counts the occurences of the argument character in the supplied string.
   * @param {string} str
   * @param {string} character
   * @returns {number}
   */
  module.exports = function countCharacter(str, character) {
    var first = character.at(0);
    return first === '' ? Infinity : Math.min(Math.max(str.split(first).length - 1, 0), Infinity);
  };
}());
