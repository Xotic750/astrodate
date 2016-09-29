/*global require, module */
(function () {
  'use strict';

	/**
	 * Given a locale, remove any fields that Add Likely Subtags would add.
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled,
	 * return it.
	 * 2. Remove the variants from max.
	 * 3. Then for trial in {language, language _ region, language _ script}. If
	 * AddLikelySubtags(trial) = max, then return trial + variants.
	 * 4. If you do not get a match, return max + variants.).
	 */

  var defaultSeperator = require('./Canonicalize.js').defaultSeperator;
  var addLikelySubtags = require('./addLikelySubtags.js');

  module.exports = function removeLikelySubtags(languageId) {
    // 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled, return it.
    var subTags = addLikelySubtags(languageId).split(defaultSeperator);
    // 2. Remove the variants from max.
    var max = subTags.slice(0, 3);
    var maxId = max.join(defaultSeperator);
    var variants = subTags.slice(3);
    //3. Then for trial in {language, language _ region, language _ script}. If
	  // AddLikelySubtags(trial) = max, then return trial + variants.
    var trials = [max[0], max[0] + defaultSeperator + max[2], max[0] + defaultSeperator + max[1]];
    // 4. If you do not get a match, return max + variants.).
    var trialId = maxId;
    trials.some(function (trial) {
      if (addLikelySubtags(trial) === maxId) {
        trialId = trial;
        return true;
      }
    });
    return trialId + (variants.length ? defaultSeperator + variants.join(defaultSeperator) : '');
  };
}());
