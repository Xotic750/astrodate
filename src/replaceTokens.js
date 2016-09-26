(function() {
  'use strict';

  var tokenizePattern = require('./tokenizePattern.js');
  var tokenReplace = require('./tokenReplace.js');

  /**
   * Replaces the given token pattern in the given pattern with the supplied string value.
   * @private
   * @param {string} pattern
   * @param {string} token
   * @param {string} value
   * @return {Array}
   */
  module.exports = function replaceTokens(pattern, token, value) {
    var patterns = Array.isArray(pattern) ? pattern : tokenizePattern(pattern);
    return patterns.map(function (p) {
      if (p.type === 'symbols') {
        p.value = tokenReplace(p.value, token, value);
      }
      return p;
    });
  };
}());
