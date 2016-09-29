/*global require, describe, expect, it */
(function() {
  'use strict';

  var removeLikelySubtags = require('../../scripts/loadModule.js')('../src/removeLikelySubtags.js');
  describe('Remove Likely Subtags', function() {
    it('Should reduce \'en_Latn_US\' into \'en\'', function() {
      expect(removeLikelySubtags('en_Latn_US')).toBe('en');
    });
    it('Should reduce \'pt_Latn_BR\' into \'pt\'', function() {
      expect(removeLikelySubtags('pt_Latn_BR')).toBe('pt');
    });
    it('Should reduce \'en_Latn_GB\' into \'en_GB\'', function() {
      expect(removeLikelySubtags('en_Latn_GB')).toBe('en_GB');
    });
    it('Should reduce \'zh_Hant_HK\' into \'zh_HK\'', function() {
      expect(removeLikelySubtags('zh_Hant_HK')).toBe('zh_HK');
    });
    it('Should reduce \'az_Arab_IR\' into \'az_Arab\'', function() {
      expect(removeLikelySubtags('az_Arab_IR')).toBe('az_IR');
    });
    it('Should reduce \'en_Latn_US_POSIX\' into \'en_POSIX\' - variant subtag', function() {
      expect(removeLikelySubtags('en_Latn_US_POSIX')).toBe('en_POSIX');
    });
  });
}());
