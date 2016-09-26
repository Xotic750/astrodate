/*global require, describe, it */
(function() {
  'use strict';

  var Canonicalize = require('../../scripts/loadModule.js')('../src/Canonicalize.js');
  describe('Canonicalize valueOf', function() {
    it('should match language', function() {
      expect(new Canonicalize('root').valueOf()).toEqual(['root', null, null, null]);
    });
    it('should match language', function() {
      expect(new Canonicalize('en').valueOf()).toEqual(['en', null, null, null]);
      expect(new Canonicalize('ar').valueOf()).toEqual(['ar', null, null, null]);
      expect(new Canonicalize('zh').valueOf()).toEqual(['zh', null, null, null]);
      expect(new Canonicalize('pt').valueOf()).toEqual(['pt', null, null, null]);
      expect(new Canonicalize('foobar').valueOf()).toEqual(['foobar', null, null, null]);
    });
    it('should match language_region', function() {
      expect(new Canonicalize('en-US').valueOf()).toEqual(['en', null, 'US', null]);
      expect(new Canonicalize('ar-EG').valueOf()).toEqual(['ar', null, 'EG', null]);
      expect(new Canonicalize('zh-CN').valueOf()).toEqual(['zh', null, 'CN', null]);
      expect(new Canonicalize('pt-BR').valueOf()).toEqual(['pt', null, 'BR', null]);
      expect(new Canonicalize('en-001').valueOf()).toEqual(['en', null, '001', null]);
      expect(new Canonicalize('en-0001').valueOf()).toEqual(['en', null, null, '0001']);
      expect(new Canonicalize('en-01').valueOf()).toEqual([null, null, null, null]);
    });
    it('should match language_script', function() {
      expect(new Canonicalize('en-Latn').valueOf()).toEqual(['en', 'Latn', null, null]);
      expect(new Canonicalize('ar-Arab').valueOf()).toEqual(['ar', 'Arab', null, null]);
      expect(new Canonicalize('ar-Arabic').valueOf()).toEqual(['ar', null, null, 'ARABIC']);
    });
    it('should match language_script_region', function() {
      expect(new Canonicalize('en-Latn-US').valueOf()).toEqual(['en', 'Latn', 'US', null]);
      expect(new Canonicalize('ar-Arab-EG').valueOf()).toEqual(['ar', 'Arab', 'EG', null]);
      expect(new Canonicalize('ar-EG-Arab').valueOf()).toEqual([null, null, null, null]);
    });
    it('should match language_script_region_variant', function() {
      expect(new Canonicalize('en-US-POSIX').valueOf()).toEqual(['en', null, 'US', 'POSIX']);
      expect(new Canonicalize('ca-ES-VALENCIA').valueOf()).toEqual(['ca', null, 'ES', 'VALENCIA']);
    });
    it('should match language_script_region_unicode_extension', function() {
      var aux = new Canonicalize('en-u-cu-usd').valueOf();
      expect(aux.length).toBe(4);
      expect(aux[0]).toEqual('en');
      expect(aux[1]).toEqual(null);
      expect(aux[2]).toEqual(null);
      expect(aux[4]).toEqual(null);
    });
  });

  describe('Canonicalize toString', function() {
    it('should match language', function() {
      expect(new Canonicalize('root').toString()).toBe('root');
    });
    it('should match language', function() {
      expect(new Canonicalize('en').toString()).toBe('en');
      expect(new Canonicalize('ar').toString()).toBe('ar');
      expect(new Canonicalize('zh').toString()).toBe('zh');
      expect(new Canonicalize('pt').toString()).toBe('pt');
      expect(new Canonicalize('foobar').toString()).toBe('foobar');
    });
    it('should match language_region', function() {
      expect(new Canonicalize('en-US').toString()).toBe('en_US');
      expect(new Canonicalize('ar-EG').toString()).toBe('ar_EG');
      expect(new Canonicalize('zh-CN').toString()).toBe('zh_CN');
      expect(new Canonicalize('pt-BR').toString()).toBe('pt_BR');
      expect(new Canonicalize('en-001').toString()).toBe('en_001');
      expect(new Canonicalize('en-0001').toString()).toBe('en_0001');
      expect(new Canonicalize('en-01').toString()).toBe('');
    });
    it('should match language_script', function() {
      expect(new Canonicalize('en-Latn').toString()).toBe('en_Latn');
      expect(new Canonicalize('ar-Arab').toString()).toBe('ar_Arab');
      expect(new Canonicalize('ar-Arabic').toString()).toBe('ar_ARABIC');
    });
    it('should match language_script_region', function() {
      expect(new Canonicalize('en-Latn-US').toString()).toBe('en_Latn_US');
      expect(new Canonicalize('ar-Arab-EG').toString()).toBe('ar_Arab_EG');
      expect(new Canonicalize('ar-EG-Arab').toString()).toBe('');
    });
    it('should match language_script_region_variant', function() {
      expect(new Canonicalize('en-US-POSIX').toString()).toBe('en_US_POSIX');
      expect(new Canonicalize('ca-ES-VALENCIA').toString()).toBe('ca_ES_VALENCIA');
    });
    it('should match language_script_region_unicode_extension', function() {
      expect(new Canonicalize('en-u-cu-usd').toString()).toBe('en');
    });
  });

  describe('Canonicalize toBCP47String', function() {
    it('should match language', function() {
      expect(new Canonicalize('root').toBCP47String()).toBe('root');
    });
    it('should match language', function() {
      expect(new Canonicalize('en').toBCP47String()).toBe('en');
      expect(new Canonicalize('ar').toBCP47String()).toBe('ar');
      expect(new Canonicalize('zh').toBCP47String()).toBe('zh');
      expect(new Canonicalize('pt').toBCP47String()).toBe('pt');
      expect(new Canonicalize('foobar').toBCP47String()).toBe('foobar');
    });
    it('should match language-region', function() {
      expect(new Canonicalize('en-US').toBCP47String()).toBe('en-US');
      expect(new Canonicalize('ar-EG').toBCP47String()).toBe('ar-EG');
      expect(new Canonicalize('zh-CN').toBCP47String()).toBe('zh-CN');
      expect(new Canonicalize('pt-BR').toBCP47String()).toBe('pt-BR');
      expect(new Canonicalize('en-001').toBCP47String()).toBe('en-001');
      expect(new Canonicalize('en-0001').toBCP47String()).toBe('en-0001');
      expect(new Canonicalize('en-01').toBCP47String()).toBe('');
    });
    it('should match language-script', function() {
      expect(new Canonicalize('en-Latn').toBCP47String()).toBe('en-Latn');
      expect(new Canonicalize('ar-Arab').toBCP47String()).toBe('ar-Arab');
      expect(new Canonicalize('ar-Arabic').toBCP47String()).toBe('ar-ARABIC');
    });
    it('should match language-script-region', function() {
      expect(new Canonicalize('en-Latn-US').toBCP47String()).toBe('en-Latn-US');
      expect(new Canonicalize('ar-Arab-EG').toBCP47String()).toBe('ar-Arab-EG');
      expect(new Canonicalize('ar-EG-Arab').toBCP47String()).toBe('');
    });
    it('should match language-script-region-variant', function() {
      expect(new Canonicalize('en-US-POSIX').toBCP47String()).toBe('en-US-POSIX');
      expect(new Canonicalize('ca-ES-VALENCIA').toBCP47String()).toBe('ca-ES-VALENCIA');
    });
    it('should match language-script-region-unicode-extension', function() {
      expect(new Canonicalize('en-u-cu-usd').toBCP47String()).toBe('en');
    });
  });

  describe('Canonicalize isValid', function() {
    it('should be true for a well formatted string', function() {
      expect(new Canonicalize('ar-Arab-EG').isValid()).toBe(true);
      expect(new Canonicalize('ar-EG-Arab').isValid()).toBe(false);
    });
  });
}());
