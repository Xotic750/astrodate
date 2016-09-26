(function () {
  'use strict';

  var Canonicalize = require('./Canonicalize.js');
  var addLikelySubtags = require('./addLikelySubtags.js');
  var removeLikelySubtags = require('./removeLikelySubtags.js');

  function LanguageCan(languageId) {
    var raw = new Canonicalize(languageId);
    var min = new Canonicalize(removeLikelySubtags(languageId));
    var max = new Canonicalize(addLikelySubtags(languageId));
    Object.defineProperties(this, {
      raw: {
        value: function () {
          return raw;
        }
      },
      min: {
        value: function () {
          return min;
        }
      },
      max: {
        value: function () {
          return max;
        }
      }
    });
  }

  Object.defineProperties(LanguageCan, {
    defaultSeperator: {
      value: Canonicalize.defaultSeperator,
    },
    bcp47Seperator: {
      value: Canonicalize.bcp47Seperator,
    }
  });

  Object.defineProperties(LanguageCan.prototype, {
    valueOf: {
      value: function() {
        return this.min().valueOf();
      }
    },
    maxValueOf: {
      value: function() {
        return this.max().valueOf();
      }
    },
    toString: {
      value: function() {
        return this.min().toString();
      }
    },
    toBCP47String: {
      value: function() {
        return this.min().toBCP47String();
      }
    },
    toMaxString: {
      value: function() {
        return this.max().toString();
      }
    },
    toMaxBCP47String: {
      value: function() {
        return this.max().toBCP47String();
      }
    },
    isValid: {
      value: function() {
        return this.raw().isValid();
      }
    }
  });

  module.exports = LanguageCan;
}());
