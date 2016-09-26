/*global require, describe, it */
(function() {
  'use strict';

  var tokenReplace = require('../../scripts/loadModule.js')('../src/tokenReplace.js');
  describe('tokenReplace', function() {
    it('should replace matched token in single quotes', function() {
      expect(function () {
        tokenReplace('', '', '');
      }).toThrow();
      expect(tokenReplace('', 'a', '')).toBe('');
      expect(tokenReplace('a', 'a', 'b')).toBe('\'b\'');
      expect(tokenReplace('xyz', 'y', 'a')).toBe('x\'a\'z');
      expect(tokenReplace('xyzxyz', 'y', 'a')).toBe('x\'a\'zx\'a\'z');
      expect(tokenReplace('xyyz', 'y', 'a')).toBe('xyyz');
      expect(tokenReplace('xyyyz', 'y', 'a')).toBe('xyyyz');
      expect(tokenReplace('xyyyyz', 'y', 'a')).toBe('xyyyyz');
      expect(tokenReplace('xyyyyyz', 'y', 'a')).toBe('xyyyyyz');
      expect(tokenReplace('xyyz', 'yy', 'a')).toBe('x\'a\'z');
      expect(tokenReplace('xyyyz', 'yyy', 'a')).toBe('x\'a\'z');
      expect(tokenReplace('xyyyyz', 'yyyy', 'a')).toBe('x\'a\'z');
      expect(tokenReplace('xyyyyyz', 'yyyyy', 'a')).toBe('x\'a\'z');
    });
  });
}());
