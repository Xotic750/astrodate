/*global require, describe, it */
(function() {
  'use strict';

  var replaceTokens = require('../../scripts/loadModule.js')('../src/replaceTokens.js');
  describe('replaceTokens', function() {
    it('should replace matched token and wrap in single quotes', function() {
      expect(replaceTokens('', '', '')).toEqual([]);
      expect(replaceTokens('', 'a', '')).toEqual([]);
      expect(replaceTokens('a', 'a', 'b')).toEqual([{
        type: 'symbols',
        value: '\'b\''
      }]);
      expect(replaceTokens('xyz', 'y', 'a')).toEqual([{
        type: 'symbols',
        value: 'x\'a\'z'
      }]);
      expect(replaceTokens('xyzxyz', 'y', 'a')).toEqual([{
        type: 'symbols',
        value: 'x\'a\'zx\'a\'z'
      }]);
      expect(replaceTokens('xyyz', 'y', 'a')).toEqual([{
        type: 'symbols',
        value: 'xyyz'
      }]);
      expect(replaceTokens('xyyyz', 'y', 'a')).toEqual([{
        type: 'symbols',
        value: 'xyyyz'
      }]);
      expect(replaceTokens('xyyyyz', 'y', 'a')).toEqual([{
        type: 'symbols',
        value: 'xyyyyz'
      }]);
      expect(replaceTokens('xyyyyyz', 'y', 'a')).toEqual([{
        type: 'symbols',
        value: 'xyyyyyz'
      }]);
      expect(replaceTokens('xyyz', 'yy', 'a')).toEqual([{
        type: 'symbols',
        value: 'x\'a\'z'
      }]);
      expect(replaceTokens('xyyyz', 'yyy', 'a')).toEqual([{
        type: 'symbols',
        value: 'x\'a\'z'
      }]);
      expect(replaceTokens('xyyyyz', 'yyyy', 'a')).toEqual([{
        type: 'symbols',
        value: 'x\'a\'z'
      }]);
      expect(replaceTokens('xyyyyyz', 'yyyyy', 'a')).toEqual([{
        type: 'symbols',
        value: 'x\'a\'z'
      }]);
    });
    it('should replace matched token and wrap in single quotes and get real strings', function() {
      expect(replaceTokens('\'\'', 'a', '')).toEqual([{
        type: 'real',
        value: '\''
      }]);
      expect(replaceTokens('a\'\'', 'a', 'b')).toEqual([{
        type: 'symbols',
        value: '\'b\''
      }, {
        type: 'real',
        value: '\''
      }]);
      expect(replaceTokens('a\'a\'', 'a', 'b')).toEqual([{
        type: 'symbols',
        value: '\'b\''
      }, {
        type: 'real',
        value: 'a'
      }]);
      expect(function () {
        replaceTokens('a\'a\'\'', 'a', 'b');
      }).toThrow();
    });
  });
}());
