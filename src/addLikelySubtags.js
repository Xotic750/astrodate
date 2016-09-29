/*global require, module */
(function () {
  'use strict';

	/**
	 * Return the maximized language id as defined in
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. Canonicalize.
	 * 2. Lookup. Lookup each of the following in order, and stop on the first
	 * match:
	 * 2.1 languages_scripts_regions
	 * 2.2 languages_regions
	 * 2.3 languages_scripts
	 * 2.4 languages
	 * 2.5 und_scripts
	 * 3. Return
	 * 3.1 If there is no match, either return an error value, or the match for
	 * "und" (in APIs where a valid language tag is required).
	 * 3.2 Otherwise there is a match = languagem_scriptm_regionm
	 * 3.3 Let xr = xs if xs is not empty, and xm otherwise.
	 * 3.4 Return the language tag composed of languager _ scriptr _ regionr +
	 * variants + extensions.).
	 */

  var Canonicalize = require('./Canonicalize.js');
  var likelySubtags = require('../node_modules/cldr-core/supplemental/likelySubtags.json').supplemental.likelySubtags;
  var sepRx = new RegExp(Canonicalize.bcp47Seperator, 'g');

  function searchLikelySubtags(subTags) {
    return likelySubtags[subTags.filter(Boolean).join(Canonicalize.bcp47Seperator)];
  }

  function getResult(result, subTags) {
    var resultTags = subTags.slice();
    result.split(sepRx).forEach(function (tag, index) {
      if (!resultTags[index] || index === 0 && resultTags[index] === 'und') {
        resultTags[index] = tag;
      }
    });
    return resultTags.filter(Boolean).join(Canonicalize.defaultSeperator);
  }

  /**
   * Perform a languageId lookup from the CLDR likeySubtags.
   * @private
   * @function
   * @param {string} languageId
   * @return {string}
   */
  module.exports = function addLikelySubtags(languageId) {
    var subTags = new Canonicalize(languageId).valueOf();
    // languages_scripts_regions
    var result = searchLikelySubtags(subTags.slice(0, 3));
    if (result) {
      return getResult(result, subTags);
    }
    // languages_regions
    result = searchLikelySubtags([subTags[0], subTags[2]]);
    if (result) {
      return getResult(result, subTags);
    }
    // languages_scripts
    result = searchLikelySubtags(subTags.slice(0, 2));
    if (result) {
      return getResult(result, subTags);
    }
    // languages
    result = searchLikelySubtags([subTags[0]]);
    if (result) {
      return getResult(result, subTags);
    }
    // und_scripts
    result = searchLikelySubtags(['und', subTags[1]]);
    if (result) {
      return getResult(result, subTags);
    }
    return searchLikelySubtags(['und']).replace(sepRx, Canonicalize.defaultSeperator);
  };
}());
