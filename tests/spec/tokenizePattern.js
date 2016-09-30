/*global require, describe, expect, it */
(function() {
  'use strict';

  var tokenizePattern = require('../../scripts/loadModule.js')('../src/tokenizePattern.js');
  describe('tokenizePattern', function() {
    it('should split pattern into tokens and real values, odd cases', function() {
      expect(tokenizePattern('')).toEqual([]);
      expect(tokenizePattern(' ')).toEqual([{
        type: 'real',
        value: ' '
      }]);
      expect(function () {
        tokenizePattern('\'');
      }).toThrow();
      expect(tokenizePattern('\'\'')).toEqual([{
        type: 'real',
        value: '\''
      }]);
      expect(function () {
        tokenizePattern('\'\'\'');
      }).toThrow();
      expect(tokenizePattern('\'\'\'\'')).toEqual([{
        type: 'real',
        value: '\'\''
      }]);
      expect(function () {
        tokenizePattern('\'\'\'\'\'');
      }).toThrow();
      expect(tokenizePattern('\'\'\'\'\'\'')).toEqual([{
        type: 'real',
        value: '\'\'\''
      }]);
      expect(function () {
        tokenizePattern('a\'');
      }).toThrow();
      expect(tokenizePattern('a\'\'')).toEqual([{
        type: 'symbols',
        value: 'a'
      }, {
        type: 'real',
        value: '\''
      }]);
      expect(function () {
          tokenizePattern('\'Month\'x:\'MMMM');
      }).toThrow();
      expect(tokenizePattern('\'Month\'\'x:\'MMMM')).toEqual([{
        type: 'real',
        value: 'Month\'x:'
      }, {
        type: 'symbols',
        value: 'MMMM'
      }]);
      expect(function () {
        tokenizePattern('ab\'c');
      }).toThrow();
      expect(function () {
        tokenizePattern('\'a\'b\'c');
      }).toThrow();
      expect(function () {
        tokenizePattern('\'\'\'a\'\'\'b\'c');
      }).toThrow();
      expect(function () {
        tokenizePattern('\'\'a\'\'b\'c');
      }).toThrow();
      expect(tokenizePattern(' a b c')).toEqual([{
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'b'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'c'
      }]);
      expect(tokenizePattern('abc \'def\' ghi')).toEqual([{
        'type': 'symbols',
        'value': 'abc'
      }, {
        'type': 'real',
        'value': ' def '
      }, {
        'type': 'symbols',
        'value': 'ghi'
      }]);
    });
    it('should split pattern into tokens and real values, actual standard formats', function() {
      expect(tokenizePattern('EEEE, MMMM d, y h:mm:ss a zzzz')).toEqual([{
        type: 'symbols',
        value: 'EEEE'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'MMMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'zzzz'
      }]);
      expect(tokenizePattern('MMMM d, y h:mm:ss a z')).toEqual([{
        type: 'symbols',
        value: 'MMMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'z'
      }]);
      expect(tokenizePattern('MMM d, y h:mm:ss a')).toEqual([{
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
      expect(tokenizePattern('M/d/yy h:mm a')).toEqual([{
        type: 'symbols',
        value: 'M'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'yy'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
    });
    it('should split pattern into tokens and real values, actual extra formats', function() {
      expect(tokenizePattern('d')).toEqual([{
        type: 'symbols',
        value: 'd'
      }]);
      expect(tokenizePattern('ccc')).toEqual([{
        type: 'symbols',
        value: 'ccc'
      }]);
      expect(tokenizePattern('d E')).toEqual([{
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'E'
      }]);
      expect(tokenizePattern('E h:mm a')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
      expect(tokenizePattern('E HH:mm')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'HH'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }]);
      expect(tokenizePattern('E h:mm:ss a')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
      expect(tokenizePattern('E HH:mm:ss')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'HH'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }]);
      expect(tokenizePattern('y G')).toEqual([{
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'G'
      }]);
      expect(tokenizePattern('MMM y G')).toEqual([{
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'G'
      }]);
      expect(tokenizePattern('MMM d, y G')).toEqual([{
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'G'
      }]);
      expect(tokenizePattern('E, MMM d, y G')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'G'
      }]);
      expect(tokenizePattern('h a')).toEqual([{
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
      expect(tokenizePattern('HH')).toEqual([{
        type: 'symbols',
        value: 'HH'
      }]);
      expect(tokenizePattern('h:mm a')).toEqual([{
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
      expect(tokenizePattern('HH:mm')).toEqual([{
        type: 'symbols',
        value: 'HH'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }]);
      expect(tokenizePattern('h:mm:ss a')).toEqual([{
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }]);
      expect(tokenizePattern('HH:mm:ss')).toEqual([{
        type: 'symbols',
        value: 'HH'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }]);
      expect(tokenizePattern('h:mm:ss a v')).toEqual([{
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'v'
      }]);
      expect(tokenizePattern('HH:mm:ss v')).toEqual([{
        type: 'symbols',
        value: 'HH'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'v'
      }]);
      expect(tokenizePattern('h:mm a v')).toEqual([{
        type: 'symbols',
        value: 'h'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'a'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'v'
      }]);
      expect(tokenizePattern('HH:mm v')).toEqual([{
        type: 'symbols',
        value: 'HH'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'v'
      }]);
      expect(tokenizePattern('L')).toEqual([{
        type: 'symbols',
        value: 'L'
      }]);
      expect(tokenizePattern('M/d')).toEqual([{
        type: 'symbols',
        value: 'M'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'd'
      }]);
      expect(tokenizePattern('E, M/d')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'M'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'd'
      }]);
      expect(tokenizePattern('LLL')).toEqual([{
        type: 'symbols',
        value: 'LLL'
      }]);
      expect(tokenizePattern('MMM d')).toEqual([{
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }]);
      expect(tokenizePattern('E, MMM d')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }]);
      expect(tokenizePattern('MMMM d')).toEqual([{
        type: 'symbols',
        value: 'MMMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }]);
      expect(tokenizePattern('mm:ss')).toEqual([{
        type: 'symbols',
        value: 'mm'
      }, {
        type: 'real',
        value: ':'
      }, {
        type: 'symbols',
        value: 'ss'
      }]);
      expect(tokenizePattern('y')).toEqual([{
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('M/y')).toEqual([{
        type: 'symbols',
        value: 'M'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('M/d/y')).toEqual([{
        type: 'symbols',
        value: 'M'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('E, M/d/y')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'M'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: '/'
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('MMM y')).toEqual([{
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('MMM d, y')).toEqual([{
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('E, MMM d, y')).toEqual([{
        type: 'symbols',
        value: 'E'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'MMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'd'
      }, {
        type: 'real',
        value: ', '
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('MMMM y')).toEqual([{
        type: 'symbols',
        value: 'MMMM'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('MMMM')).toEqual([{
        type: 'symbols',
        value: 'MMMM'
      }]);
      expect(tokenizePattern('QQQ y')).toEqual([{
        type: 'symbols',
        value: 'QQQ'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'y'
      }]);
      expect(tokenizePattern('QQQQ y')).toEqual([{
        type: 'symbols',
        value: 'QQQQ'
      }, {
        type: 'real',
        value: ' '
      }, {
        type: 'symbols',
        value: 'y'
      }]);
    });
  });
}());
