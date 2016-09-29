/*global require, module */
(function() {
  'use strict';

  /**
   * http://www.unicode.org/reports/tr35/#Likely_Subtags
   * 1. Canonicalize.
   * 1.1 Make sure the input locale is in canonical form: uses the right
   * separator, and has the right casing.
   *
   * 1.2 Replace any deprecated subtags with their canonical values using the
   * <alias> data in supplemental metadata. Use the first value in the
   * replacement list, if it exists. Language tag replacements may have multiple
   * parts, such as 'sh' => 'sr_Latn' or mo' => 'ro_MD'. In such a case, the
   * original script and/or region are retained if there is one. Thus
   * 'sh_Arab_AQ' => 'sr_Arab_AQ', not 'sr_Latn_AQ'.
   *
   * 1.3 If the tag is grandfathered (see <variable id='$grandfathered'
   * type='choice'> in the supplemental data), then return it.
   * TODO grandfathered?
   *
   * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
   * 1.5 Get the components of the cleaned-up source tag (languages, scripts,
   * and regions), plus any variants and extensions.
   */

  var utils = require('./utils.js');
  var aliases = require('../node_modules/cldr-core/supplemental/aliases.json').supplemental.metadata.alias;
  var canonicalizeULangIRx = /^(root)$|^([a-z]{2,3}|[a-z]{5,8})(?:[\-_]([a-z]{4}))?(?:[\-_]([a-z]{2}|\d{3}))?((?:[\-_]([0-9a-z]{5,8}|\d[0-9a-z]{3}))*)$/i;
  var sepRx = /[\-_]/;

  /**
   * 1.1 Make sure the input locale is in canonical form: uses the right
   * separator, and has the right casing.
   * @private
   * @param {string} languageId
   * @return {Array}
   */
  function getSubTags(languageId) {
    var subTags = [null, null, null, null];
    var match = utils.first(languageId.split(/[\-_][tu][\-_]/i)).match(canonicalizeULangIRx);
    if (!match) {
      return subTags;
    }
    // language
    subTags[0] = (match[1] || match[2]).toLowerCase();
    // script
    if (match[3]) {
      subTags[1] = match[3].charAt(0).toUpperCase() + match[3].slice(1).toLowerCase();
    }
    // region
    if (match[4]) {
      subTags[2] = match[4].toUpperCase();
    }
    // variant
    if (match[5]) {
      match[5].slice(1).split(sepRx).forEach(function(v, index) {
        subTags[3 + index] = v.toUpperCase();
      });
    }
    return subTags;
  }

  /**
   * 1.2 Replace any deprecated subtags with their canonical values using the
   * <alias> data in supplemental metadata. Use the first value in the
   * replacement list, if it exists. Language tag replacements may have multiple
   * parts, such as 'sh' => 'sr_Latn' or mo' => 'ro_MD'. In such a case, the
   * original script and/or region are retained if there is one. Thus
   * 'sh_Arab_AQ' =>'sr_Arab_AQ', not 'sr_Latn_AQ'.
   * @private
   * @param {Array} subTags
   * @return {Array}
   */
  function replaceAliases(subTags) {
    // language
    Object.keys(aliases.languageAlias).some(function(alias) {
      if (alias === subTags[0]) {
        subTags[0] = aliases.languageAlias[alias]._replacement.split(sepRx)[0];
        return true;
      }
    });
    // script
    if (subTags[1]) {
      Object.keys(aliases.scriptAlias).some(function(script) {
        if (script === subTags[1]) {
          subTags[1] = aliases.scriptAlias[script]._replacement;
          return true;
        }
      });
    }
    // region
    // variant
    if (subTags[3]) {
      Object.keys(aliases.variantAlias).forEach(function(variant) {
        subTags.slice(3).forEach(function(item, idx) {
          if (variant === item) {
            subTags[3 + idx] = aliases.variantAlias[variant]._replacement;
          }
        });
      });
    }
    return subTags;
  }

  /**
   * 1.3 If the tag is grandfathered (see <variable id='$grandfathered'
   * type='choice'> in the supplemental data), then return it.
   * TODO grandfathered?
   * @private
   * @param {Array} subTags
   * @return {Array}
   */
  /*
  function replaceGrandfather(subTags) {
    // language
    // script
    // region
    // variant
    return subTags;
  }
  */

  /**
   * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
   * @private
   * @param {Array} subTags
   * @return {Array}
   */
  function cleanUnknowns(subTags) {
    // language
    // script
    if (subTags[1] === 'Zzzz') {
      subTags[1] = null;
    }
    // region
    if (subTags[2] === 'ZZ') {
      subTags[2] = null;
    }
    // variant
    return subTags;
  }

  /**
   * Canonalizes a Unicode Language Identifier string as an array.
   * @private
   * @constructor
   * @param {string} languageId
   * @param {string} [sep]
   * @return {Array}
   */
  function Canonicalize(languageId) {
    Object.defineProperties(this, {
      subTags: {
        value: getSubTags(String(languageId).trim()),
      }
    });
    replaceAliases(this.subTags);
    //replaceGrandfather(this.subTags);
    cleanUnknowns(this.subTags);
  }

  Object.defineProperties(Canonicalize, {
    defaultSeperator: {
      value: '_',
    },
    bcp47Seperator: {
      value: '-',
    }
  });

  Object.defineProperties(Canonicalize.prototype, {
    valueOf: {
      value: function() {
        return this.subTags;
      }
    },
    toString: {
      value: function() {
        return this.subTags.filter(Boolean).join(Canonicalize.defaultSeperator);
      }
    },
    toBCP47String: {
      value: function() {
        return this.subTags.filter(Boolean).join(Canonicalize.bcp47Seperator);
      }
    },
    isValid: {
      value: function() {
        return this.toString() !== '';
      }
    }
  });

  module.exports = Canonicalize;
}());
