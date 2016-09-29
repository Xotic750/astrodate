/*global require, module */
(function () {
  'use strict';

  var regexpEscape = require('regexp-escape-x');
  var utils = require('./utils.js');
  var tokenReplaceRx = /([^']+)|('[^']+')/g;
  var numberTestRx = /^-?\d+$/;
  var tokenTest1Rx = /^\{\d\}$/;
  var tokenTest2Rx = /^\S\{\d+,\d*\}$/;
  //var sqReplaceRx = /'/g;
  var sq = '\'';

  /**
   * Left pads a number with '0's so that it is of the require length as given by size.
   * @private
   * @param {number|string} num
   * @param {number} size
   * @return {string}
   */
  function cldrPadLeadingZero(num, size) {
    var strNum = num.toString();
    var length = strNum.length;
    if (length > 0 && length < size && numberTestRx.test(strNum)) {
      var val = '';
      var starts = strNum.charAt(0);
      if (starts === '-') {
        val = starts;
        strNum = strNum.slice(1);
        size -= 1;
      }
      return val + (size > 0 ? strNum.padStart(size, '0') : strNum);
    }
    return strNum;
  }

  /**
   * Replaces the given token pattern in the given pattern with the supplied string value.
   * @private
   * @param {string} pattern
   * @param {string} token
   * @param {string} value
   * @return {string}
   */
  module.exports = function tokenReplace(pattern, token, value) {
    var copyMatch;
    var noWrap;
    if (tokenTest1Rx.test(token)) {
      token = regexpEscape(token);
      copyMatch = token;
      noWrap = true;
    } else {
      var firstCharacter = token.charAt(0);
      if (!tokenTest2Rx.test(token)) {
        if (utils.countCharacter(token, firstCharacter) !== token.length) {
          throw new Error('invalid token');
        }
      }
      copyMatch = '(?:^|[^' + firstCharacter + '])(' + token + ')(?:[^' + firstCharacter + ']|$)';
    }

    var trpwRx = new RegExp(token, 'g');
    /**
     * Replaces tokens, handles padding choice and wraps replacements (if required) in sinqle quotes so
     * they are ignored in future.
     * @private
     * @param {string} $0
     * @param {string} $1
     * @return {string}
     */
    function tokenReplacerPadWrap($0, $1) {
      var val = $1 ? cldrPadLeadingZero(value, $1.length) : value;
      return $0.replace(trpwRx, noWrap ? val : sq + val + sq);
    }

    var trRx = new RegExp(copyMatch, 'g');
    /**
     * Returns strings of non-tokens untouched or calls the replacer on strings with tokens.
     * @private
     * @param {string} $0
     * @param {string} $1
     * @param {string} $2
     * @return {string}
     */
    function tokenReplacer($0, $1, $2) {
      if ($0) {
        return $1 ? $1.replace(trRx, tokenReplacerPadWrap) : $2;
      }
    }

    return pattern.replace(tokenReplaceRx, tokenReplacer);
  };
}());
