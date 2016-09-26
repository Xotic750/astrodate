/*global require, describe, it */
(function() {
  'use strict';

  var addLikelySubtags = require('../../scripts/loadModule.js')('../src/addLikelySubtags.js');
  describe('Likely Subtags seperator=\'_\'', function() {
    it('should skip empty language tag', function() {
      expect(addLikelySubtags('en_Latn_US')).toBe('en_Latn_US');
    });
    it('should lookup language_script_territory\'s', function() {
      expect(addLikelySubtags('und_Latn_RU')).toBe('krl_Latn_RU');
    });
    it('should lookup language_territory\'s', function() {
      expect(addLikelySubtags('zh_Zzzz_HK')).toBe('zh_Hant_HK');
    });
    it('should lookup language_script\'s', function() {
      expect(addLikelySubtags('az_Arab_ZZ')).toBe('az_Arab_IR');
    });
    it('should lookup und_scripts\'s', function() {
      expect(addLikelySubtags('und_Java_ZZ')).toBe('jv_Java_ID');
    });
    it('should lookup root', function() {
      expect(addLikelySubtags('und_Zzzz_ZZ')).toBe('en_Latn_US');
    });
    it('should lookup und', function() {
      expect(addLikelySubtags('und_Zzzz_ZZ')).toBe('en_Latn_US');
    });
    it('should lookup non-existent', function() {
      expect(addLikelySubtags('foo_Zzzz_bar')).toBe('en_Latn_US');
    });
    it('should lookup variant subtag', function() {
      expect(addLikelySubtags('en_Zzzz_US_POSIX')).toBe('en_Latn_US_POSIX');
      expect(addLikelySubtags('ca_Zzzz_ES_VALENCIA')).toBe('ca_Latn_ES_VALENCIA');
    });
  });

  describe('Likely Subtags seperator=\'-\'', function() {
    it('should skip empty language tag', function() {
      expect(addLikelySubtags('en-Latn-US')).toBe('en_Latn_US');
    });
    it('should lookup language-script-territory\'s', function() {
      expect(addLikelySubtags('und-Latn-RU')).toBe('krl_Latn_RU');
    });
    it('should lookup language-territory\'s', function() {
      expect(addLikelySubtags('zh-Zzzz-HK')).toBe('zh_Hant_HK');
    });
    it('should lookup language-script\'s', function() {
      expect(addLikelySubtags('az-Arab-ZZ')).toBe('az_Arab_IR');
    });
    it('should lookup und-scripts\'s', function() {
      expect(addLikelySubtags('und-Java-ZZ')).toBe('jv_Java_ID');
    });
    it('should lookup root', function() {
      expect(addLikelySubtags('und-Zzzz-ZZ')).toBe('en_Latn_US');
    });
    it('should lookup und', function() {
      expect(addLikelySubtags('und-Zzzz-ZZ')).toBe('en_Latn_US');
    });
    it('should lookup non-existent', function() {
      expect(addLikelySubtags('foo-Zzzz-bar')).toBe('en_Latn_US');
    });
    it('should lookup variant subtag', function() {
      expect(addLikelySubtags('en-Zzzz-US-POSIX')).toBe('en_Latn_US_POSIX');
      expect(addLikelySubtags('ca-Zzzz-ES-VALENCIA')).toBe('ca_Latn_ES_VALENCIA');
    });
  });

  describe('Likely Subtags seperator=mixed', function() {
    it('should skip empty language tag', function() {
      expect(addLikelySubtags('en-Latn_US')).toBe('en_Latn_US');
    });
    it('should lookup language_script_territory\'s', function() {
      expect(addLikelySubtags('und_Latn-RU')).toBe('krl_Latn_RU');
    });
    it('should lookup language_territory\'s', function() {
      expect(addLikelySubtags('zh-Zzzz_HK')).toBe('zh_Hant_HK');
    });
    it('should lookup language_script\'s', function() {
      expect(addLikelySubtags('az_Arab-ZZ')).toBe('az_Arab_IR');
    });
    it('should lookup und_scripts\'s', function() {
      expect(addLikelySubtags('und-Java_ZZ')).toBe('jv_Java_ID');
    });
    it('should lookup root', function() {
      expect(addLikelySubtags('und_Zzzz-ZZ')).toBe('en_Latn_US');
    });
    it('should lookup und', function() {
      expect(addLikelySubtags('und-Zzzz_ZZ')).toBe('en_Latn_US');
    });
    it('should lookup non-existent', function() {
      expect(addLikelySubtags('foo_Zzzz-bar')).toBe('en_Latn_US');
    });
    it('should lookup variant subtag', function() {
      expect(addLikelySubtags('en_Zzzz_US-POSIX')).toBe('en_Latn_US_POSIX');
      expect(addLikelySubtags('ca-Zzzz_ES-VALENCIA')).toBe('ca_Latn_ES_VALENCIA');
    });
  });

  describe('Likely Subtags seperator=mixed all lower case', function() {
    it('should skip empty language tag', function() {
      expect(addLikelySubtags('en-latn_us')).toBe('en_Latn_US');
    });
    it('should lookup language_script_territory\'s', function() {
      expect(addLikelySubtags('und_latn-ru')).toBe('krl_Latn_RU');
    });
    it('should lookup language_territory\'s', function() {
      expect(addLikelySubtags('zh-zzzz_hk')).toBe('zh_Hant_HK');
    });
    it('should lookup language_script\'s', function() {
      expect(addLikelySubtags('az_arab-zz')).toBe('az_Arab_IR');
    });
    it('should lookup und_scripts\'s', function() {
      expect(addLikelySubtags('und-java_zz')).toBe('jv_Java_ID');
    });
    it('should lookup root', function() {
      expect(addLikelySubtags('und_zzzz-zz')).toBe('en_Latn_US');
    });
    it('should lookup und', function() {
      expect(addLikelySubtags('und-zzzz_zz')).toBe('en_Latn_US');
    });
    it('should lookup non-existent', function() {
      expect(addLikelySubtags('foo_zzzz-bar')).toBe('en_Latn_US');
    });
    it('should lookup variant subtag', function() {
      expect(addLikelySubtags('en_zzzz_us-posix')).toBe('en_Latn_US_POSIX');
      expect(addLikelySubtags('ca-zzzz_es-valencia')).toBe('ca_Latn_ES_VALENCIA');
    });
  });

  describe('Likely Subtags seperator=mixed all upper case', function() {
    it('should skip empty language tag', function() {
      expect(addLikelySubtags('EN-LATN_US')).toBe('en_Latn_US');
    });
    it('should lookup language_script_territory\'s', function() {
      expect(addLikelySubtags('UND_LATN-RU')).toBe('krl_Latn_RU');
    });
    it('should lookup language_territory\'s', function() {
      expect(addLikelySubtags('ZH-ZZZZ_HK')).toBe('zh_Hant_HK');
    });
    it('should lookup language_script\'s', function() {
      expect(addLikelySubtags('AZ_ARAB-ZZ')).toBe('az_Arab_IR');
    });
    it('should lookup und_scripts\'s', function() {
      expect(addLikelySubtags('UND-JAVA_ZZ')).toBe('jv_Java_ID');
    });
    it('should lookup root', function() {
      expect(addLikelySubtags('UND_ZZZZ-ZZ')).toBe('en_Latn_US');
    });
    it('should lookup und', function() {
      expect(addLikelySubtags('UND-ZZZZ_ZZ')).toBe('en_Latn_US');
    });
    it('should lookup non-existent', function() {
      expect(addLikelySubtags('FOO_ZZZZ-BAR')).toBe('en_Latn_US');
    });
    it('should lookup variant subtag', function() {
      expect(addLikelySubtags('EN_ZZZZ_US-POSIX')).toBe('en_Latn_US_POSIX');
      expect(addLikelySubtags('CA-ZZZZ_ES-VALENCIA')).toBe('ca_Latn_ES_VALENCIA');
    });
  });

  describe('Likely Subtags seperator=\'_\'', function() {
    it('no region', function() {
      expect(addLikelySubtags('en_Latn')).toBe('en_Latn_US');
    });
    it('no region and script=\'Zzzz\'', function() {
      expect(addLikelySubtags('en_Zzzz')).toBe('en_Latn_US');
    });
    it('no script and region=\'ZZ\'', function() {
      expect(addLikelySubtags('en_US')).toBe('en_Latn_US');
    });
    it('only language=\'und\'', function() {
      expect(addLikelySubtags('und')).toBe('en_Latn_US');
    });
    it('only language=\'root\'', function() {
      expect(addLikelySubtags('und')).toBe('en_Latn_US');
    });
    it('invalid', function() {
      expect(addLikelySubtags('gv123jh')).toBe('en_Latn_US');
    });
  });

  describe('Likely Subtags Unicode examples', function() {
    it('Example 1', function() {
      expect(addLikelySubtags('ZH-ZZZZ-SG')).toBe('zh_Hans_SG');
    });
    it('Example 2', function() {
      expect(addLikelySubtags('und_TW')).toBe('zh_Hant_TW');
    });
    it('Example 3', function() {
      expect(addLikelySubtags('und_AF')).toBe('fa_Arab_AF');
    });
    it('Example 4', function() {
      expect(addLikelySubtags('fa_Arab_AF')).toBe('fa_Arab_AF');
    });
    it('Example 5', function() {
      expect(addLikelySubtags('und_Arab_AF')).toBe('fa_Arab_AF');
    });
    it('Example 6', function() {
      expect(addLikelySubtags('fa_AF')).toBe('fa_Arab_AF');
    });
  });
}());
