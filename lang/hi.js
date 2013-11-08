/* AstroDate
 * Language: hi
 * ca-gregorian: 24r9296
 * timeZoneNames: 24r9296
 * localeDisplayNames: 24r9296
 *
 * home: https://github.com/Xotic750/astrodate
 *
 * Copyright (C) 2013  Graham Fairweather (a.k.a: Xotic750)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function (thisContext) {
    'use strict';

    (function (definition) {
        /*global module, require, define */
        var astrodateFunc = 'AstroDate',
            astrodateString = astrodateFunc.toLowerCase();

        if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
            definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }(function (AstroDate) {
        AstroDate.lang('hi', {
            'codePatterns': {
                'language': '\u092D\u093E\u0937\u093E: {0}',
                'script': '\u0932\u093F\u092A\u093F: {0}',
                'territory': '\u0915\u094D\u0937\u0947\u0924\u094D\u0930: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u0915\u093E\u0928\u093E \u0915\u094B \u0905\u0932\u0917 \u0938\u0947 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'yes': '\u0915\u093E\u0928\u093E \u0915\u094B \u092D\u093F\u0928\u094D\u200D\u0928 \u0930\u0942\u092A \u092E\u0947\u0902 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'colCaseLevel': {
                    'no': '\u0915\u0947\u0938 \u0905\u0938\u0902\u0935\u0947\u0926\u0940 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'yes': '\u0915\u0947\u0938 \u0938\u0902\u0935\u0947\u0926\u0940 \u0915\u094B \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'colCaseFirst': {
                    'lower': '\u092A\u0939\u0932\u0947 \u0932\u094B\u0905\u0930\u0915\u0947\u0938 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'no': '\u0938\u093E\u092E\u093E\u0928\u094D\u200D\u092F \u0915\u0947\u0938 \u0915\u094D\u0930\u092E \u092E\u0947\u0902 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'upper': '\u092A\u0939\u0932\u0947 \u0905\u092A\u0930\u0915\u0947\u0938 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'colStrength': {
                    'identical': '\u0938\u092D\u0940 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'primary': '\u0915\u0947\u0935\u0932 \u0906\u0927\u093E\u0930 \u0905\u0915\u094D\u0937\u0930\u094B\u0902 \u0915\u094B \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'quaternary': '\u0909\u091A\u094D\u200D\u091A\u093E\u0930\u0923\u094B\u0902/\u0915\u0947\u0938/\u091A\u094C\u0921\u093C\u093E\u0908/\u0915\u093E\u0928\u093E \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'secondary': '\u0909\u091A\u094D\u200D\u091A\u093E\u0930\u0923 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'tertiary': '\u0909\u091A\u094D\u200D\u091A\u093E\u0930\u0923\u094B\u0902/\u0915\u0947\u0938/\u091A\u094C\u0921\u093C\u093E\u0908 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'colNumeric': {
                    'no': '\u0905\u0902\u0915\u094B \u0915\u094B \u0905\u0932\u0917-\u0905\u0932\u0917 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'yes': '\u0905\u0902\u0915\u094B\u0902 \u0915\u094B \u0905\u0902\u0915\u0940\u092F \u0930\u0942\u092A \u0938\u0947 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'colNormalization': {
                    'no': '\u092C\u093F\u0928\u093E \u0938\u093E\u092E\u093E\u0928\u094D\u200D\u092F\u0940\u0915\u0930\u0923 \u0915\u0947 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'yes': '\u092F\u0942\u0928\u093F\u0915\u094B\u0921 \u0938\u093E\u092E\u093E\u0928\u094D\u200D\u092F\u0940\u0915\u0943\u0924 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'calendar': {
                    'japanese': '\u091C\u093E\u092A\u093E\u0928\u0940 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'iso8601': 'iso8601',
                    'coptic': '\u0915\u094B\u092A\u094D\u091F\u093F\u0915 \u0915\u0948\u0932\u0947\u0902\u0921\u0930',
                    'dangi': 'dangi',
                    'ethiopic': '\u0907\u0925\u093F\u092F\u094B\u092A\u093F\u0915 \u0915\u0948\u0932\u0947\u0902\u0921\u0930',
                    'ethiopic-amete-alem': '\u0907\u0925\u093F\u092F\u094B\u092A\u093F\u0915 \u0905\u092E\u0947\u0924\u0947 \u0905\u0932\u0947\u092E \u0915\u0948\u0932\u0947\u0902\u0921\u0930',
                    'gregorian': '\u0917\u094D\u0930\u0947\u0917\u094B\u0930\u093F\u092F\u0928 \u0915\u0948\u0932\u0947\u0902\u0921\u0930',
                    'hebrew': '\u0939\u093F\u092C\u094D\u0930\u0942 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'persian': '\u092B\u093C\u093E\u0930\u0938\u0940 \u0915\u0948\u0932\u0947\u0902\u0921\u0930',
                    'roc': '\u091A\u0940\u0928\u0940 \u0917\u0923\u0924\u0902\u0924\u094D\u0930 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'chinese': '\u091A\u0940\u0928\u0940 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'buddhist': '\u092C\u094C\u0926\u094D\u0927 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'indian': '\u092D\u093E\u0930\u0924\u0940\u092F \u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u092A\u0902\u091A\u093E\u0902\u0917',
                    'islamic': '\u0907\u0938\u094D\u0932\u093E\u092E\u0940 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'islamic-civil': '\u0907\u0938\u094D\u0932\u093E\u092E\u0940 \u0928\u093E\u0917\u0930\u093F\u0915 \u092A\u0902\u091A\u093E\u0902\u0917',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u0926\u0942\u0930\u092D\u093E\u0937 \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u093F\u0915\u093E \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                    'gb2312han': '\u0938\u0930\u0932\u0940\u0915\u0943\u0924 \u091A\u0940\u0928\u0940 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                    'eor': 'eor',
                    'ducet': '\u0921\u093F\u092B\u093C\u0949\u0932\u094D\u091F \u092F\u0942\u0928\u093F\u0915\u094B\u0921 \u0938\u0949\u0930\u094D\u091F \u0915\u094D\u0930\u092E',
                    'dictionary': '\u0936\u092C\u094D\u0926\u0915\u094B\u0936 \u0915\u094D\u0930\u092E \u0935\u093F\u0928\u094D\u092F\u093E\u0938',
                    'big5han': '\u092A\u093E\u0930\u092E\u094D\u092A\u093E\u0930\u093F\u0915 \u091A\u0940\u0928\u0940 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                    'traditional': '\u092A\u093E\u0930\u092E\u094D\u092A\u093E\u0930\u093F\u0915 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                    'standard': '\u092E\u093E\u0928\u0915 \u0938\u0949\u0930\u094D\u091F \u0915\u094D\u0930\u092E',
                    'zhuyin': 'zhuyin',
                    'unihan': '\u0930\u0947\u0921\u093F\u0915\u0932-\u0938\u094D\u091F\u094D\u0930\u094B\u0915 \u0915\u094D\u0930\u092E \u0935\u093F\u0928\u094D\u092F\u093E\u0938',
                    'stroke': '\u0938\u094D\u091F\u094D\u0930\u094B\u0915 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                    'searchjl': '\u0939\u093E\u0902\u0917\u0941\u0932 \u0906\u0930\u0902\u092D\u093F\u0915 \u0935\u094D\u200D\u092F\u0902\u091C\u0928 \u0926\u094D\u0935\u093E\u0930\u093E \u0916\u094B\u091C\u0947\u0902',
                    'search': '\u0938\u093E\u092E\u093E\u0928\u094D\u092F-\u0909\u0926\u094D\u0926\u0947\u0936\u094D\u092F \u0916\u094B\u091C',
                    'reformed': '\u092A\u0941\u0928\u0930\u094D\u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0915\u094D\u0930\u092E \u0935\u093F\u0928\u094D\u092F\u093E\u0938',
                    'pinyin': '\u092A\u093F\u0928\u092F\u0940\u0928 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                    'phonetic': '\u0927\u094D\u200D\u0935\u0928\u094D\u092F\u093E\u0924\u094D\u092E\u0915 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u093E \u0915\u094D\u0930\u092E'
                },
                'numbers': {
                    'knda': '\u0915\u0928\u094D\u0928\u0921\u093C \u0905\u0902\u0915',
                    'khmr': '\u0916\u092E\u0947\u0930 \u0905\u0902\u0915',
                    'kali': 'kali',
                    'jpanfin': '\u091C\u093E\u092A\u093E\u0928\u0940 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'jpan': '\u091C\u093E\u092A\u093E\u0928\u0940 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'java': 'java',
                    'hebr': '\u0939\u093F\u092C\u094D\u0930\u0942 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'hantfin': '\u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u091A\u0940\u0928\u0940 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'hant': '\u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u091A\u0940\u0928\u0940 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'hansfin': '\u0938\u0930\u0932\u0940\u0915\u0943\u0924 \u091A\u0940\u0928\u0940 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'hans': '\u0938\u0930\u0932\u0940\u0915\u0943\u0924 \u091A\u0940\u0928\u0940 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'hanidec': '\u091A\u0940\u0928\u0940 \u0926\u0936\u092E\u0932\u0935 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'guru': '\u0917\u0941\u0930\u092E\u0941\u0916\u0940 \u0905\u0902\u0915',
                    'gujr': '\u0917\u0941\u091C\u0930\u093E\u0924\u0940 \u0905\u0902\u0915',
                    'greklow': '\u092F\u0942\u0928\u093E\u0928\u0940 \u0932\u094B\u0905\u0930\u0915\u0947\u0938 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'grek': '\u092F\u0942\u0928\u093E\u0928\u0940 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'bali': 'bali',
                    'armnlow': '\u0906\u0930\u094D\u092E\u0947\u0928\u093F\u092F\u093E\u0908 \u0932\u094B\u0905\u0930\u0915\u0947\u0938 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'armn': '\u0906\u0930\u094D\u092E\u0947\u0928\u093F\u092F\u093E\u0908 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'arabext': '\u0935\u093F\u0938\u094D\u0924\u0943\u0924 \u0905\u0930\u092C\u0940-\u092D\u093E\u0930\u0924\u0940\u092F \u0905\u0902\u0915',
                    'arab': '\u0905\u0930\u092C\u0940-\u092D\u093E\u0930\u0924\u0940\u092F \u0905\u0902\u0915',
                    'finance': '\u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0905\u0902\u0915',
                    'traditional': '\u092A\u0930\u0902\u092A\u0930\u093E\u0917\u0924 \u0905\u0902\u0915',
                    'native': '\u0938\u094D\u0925\u093E\u0928\u0940\u092F \u0905\u0902\u0915',
                    'beng': '\u092C\u0902\u0917\u093E\u0932\u0940 \u0905\u0902\u0915',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u0926\u0947\u0935\u0928\u093E\u0917\u0930\u0940 \u0905\u0902\u0915',
                    'orya': '\u0909\u0921\u093C\u093F\u092F\u093E \u0905\u0902\u0915',
                    'osma': 'osma',
                    'roman': '\u0930\u094B\u092E\u0928 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'romanlow': '\u0930\u094B\u092E\u0928 \u0932\u094B\u0905\u0930\u0915\u0947\u0938 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u0935\u093E\u0908 \u0905\u0902\u0915',
                    'tibt': '\u0924\u093F\u092C\u094D\u092C\u0924\u0940 \u0905\u0902\u0915',
                    'thai': '\u0925\u093E\u0908 \u0905\u0902\u0915',
                    'telu': '\u0924\u0947\u0932\u0941\u0917\u0942 \u0905\u0902\u0915',
                    'tamldec': '\u0924\u092E\u093F\u0932 \u0905\u0902\u0915',
                    'taml': '\u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0924\u092E\u093F\u0932 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': '\u092E\u094D\u092F\u093E\u0902\u092E\u093E\u0930 \u0905\u0902\u0915',
                    'mtei': 'mtei',
                    'mong': '\u092E\u0902\u0917\u094B\u0932\u093F\u092F\u093E\u0908 \u0905\u0902\u0915',
                    'mlym': '\u092E\u0932\u092F\u093E\u0932\u092E \u0905\u0902\u0915',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0905\u0902\u0915',
                    'laoo': '\u0932\u093E\u0913 \u0905\u0902\u0915',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': '\u091C\u0949\u0930\u094D\u091C\u093F\u092F\u0928 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901',
                    'fullwide': '\u092A\u0942\u0930\u094D\u0923 \u091A\u094C\u0921\u093C\u093E\u0908 \u0905\u0902\u0915',
                    'ethi': '\u0907\u0925\u093F\u092F\u094B\u092A\u093F\u0915 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901'
                },
                'colAlternate': {
                    'non-ignorable': '\u092A\u094D\u0930\u0924\u0940\u0915\u094B\u0902 \u0915\u094B \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'shifted': '\u092A\u094D\u0930\u0924\u0940\u0915\u094B\u0902 \u092A\u0930 \u0927\u094D\u092F\u093E\u0928 \u0928 \u0926\u0947\u0915\u0930 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                },
                'colBackwards': {
                    'no': '\u0909\u091A\u094D\u200D\u091A\u093E\u0930\u0923\u094B\u0902 \u0915\u094B \u0938\u093E\u092E\u093E\u0928\u094D\u200D\u092F \u0930\u0942\u092A \u0938\u0947 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                    'yes': '\u0909\u091A\u094D\u200D\u091A\u093E\u0930\u0923 \u0915\u0947 \u0909\u0932\u091F \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902'
                }
            },
            'keys': {
                'colNormalization': '\u0938\u093E\u092E\u093E\u0928\u094D\u092F\u0940\u0915\u0943\u0924 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                'collation': '\u0938\u0949\u0930\u094D\u091F \u0915\u094D\u0930\u092E',
                'colHiraganaQuaternary': '\u0915\u093E\u0928\u093E \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                'colCaseLevel': '\u0915\u0947\u0938 \u0938\u0902\u0935\u0947\u0926\u0940 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                'colCaseFirst': '\u0905\u092A\u0930\u0915\u0947\u0938/\u0932\u094B\u0905\u0930\u0915\u0947\u0938 \u0915\u094D\u0930\u092E\u093E\u0902\u0915\u0928',
                'colBackwards': '\u0935\u093F\u092A\u0930\u0940\u0924 \u0909\u091A\u094D\u200D\u091A\u093E\u0930\u0923 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923',
                'colAlternate': '\u091A\u093F\u0939\u094D\u0928 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u092A\u0930 \u0927\u094D\u092F\u093E\u0928 \u0928 \u0926\u0947\u0902',
                'calendar': '\u0915\u0948\u0932\u0947\u0902\u0921\u0930',
                'x': '\u0928\u093F\u091C\u0940-\u0909\u092A\u092F\u094B\u0917',
                'variableTop': '\u091A\u093F\u0939\u094D\u0928 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0947\u0902',
                'va': '\u0938\u094D\u0925\u093E\u0928\u0940\u092F \u092A\u094D\u0930\u0915\u093E\u0930',
                'timezone': '\u0938\u092E\u092F \u0915\u094D\u0937\u0947\u0924\u094D\u0930',
                'numbers': '\u0938\u0902\u0916\u094D\u092F\u093E',
                'currency': '\u092E\u0941\u0926\u094D\u0930\u093E',
                'colStrength': '\u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u0938\u0936\u0915\u094D\u0924\u0924\u093E',
                'colNumeric': '\u0938\u0902\u0916\u094D\u092F\u093E\u0924\u094D\u092E\u0915 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u0938\u093E\u092F\u092A\u093E\u0928'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u0930\u093E\u0930\u094B\u091F\u094B\u0902\u0917\u093E'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u092A\u094B\u0930\u094D\u091F \u092E\u094B\u0930\u0947\u0938\u094D\u092C\u0940'
                        },
                        'Ponape': {
                            'exemplarCity': '\u092A\u094B\u0928\u092A\u0947\u0908'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u092A\u093F\u091F\u0915\u0948\u0930\u094D\u0928'
                        },
                        'Palau': {
                            'exemplarCity': '\u092A\u093E\u0932\u093E\u090A'
                        },
                        'Auckland': {
                            'exemplarCity': '\u0911\u0915\u0932\u0948\u0902\u0921'
                        },
                        'Apia': {
                            'exemplarCity': '\u090F\u092A\u093F\u092F\u093E'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u092B\u093C\u094D\u092F\u0942\u0928\u093E\u092B\u093C\u0941\u091F\u0940'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u0917\u0947\u0932\u093E\u092A\u093E\u0917\u094B\u0938'
                        },
                        'Gambier': {
                            'exemplarCity': '\u0917\u0948\u0902\u092C\u093F\u092F\u0930'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u0917\u094D\u0935\u093E\u0921\u0932\u0915\u0928\u093E\u0932'
                        },
                        'Guam': {
                            'exemplarCity': '\u0917\u0941\u0906\u092E'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u0939\u094B\u0928\u094B\u0932\u0941\u0932\u0941'
                        },
                        'Wallis': {
                            'exemplarCity': '\u0935\u093E\u0932\u093F\u0938'
                        },
                        'Wake': {
                            'exemplarCity': '\u0935\u0947\u0915'
                        },
                        'Truk': {
                            'exemplarCity': '\u091A\u0915'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u091F\u094B\u0902\u0917\u093E\u091F\u093E\u092A\u0942'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u091F\u093E\u0930\u093E\u0935\u093E'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u0924\u093E\u0939\u093F\u0924\u0940'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u0915\u093F\u0930\u0940\u0924\u093F\u092E\u093E\u0924\u093F'
                        },
                        'Johnston': {
                            'exemplarCity': '\u091C\u0949\u0928\u0938\u094D\u091F\u0928'
                        },
                        'Chatham': {
                            'exemplarCity': '\u091A\u093E\u0925\u092E'
                        },
                        'Easter': {
                            'exemplarCity': '\u0908\u0938\u094D\u091F\u0930'
                        },
                        'Efate': {
                            'exemplarCity': '\u090F\u092B\u093C\u0947\u091F'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u090F\u0902\u0921\u0930\u092C\u0930\u0940'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u092B\u093C\u093E\u0915\u093E\u0913\u092B\u093C\u094B'
                        },
                        'Fiji': {
                            'exemplarCity': '\u092B\u093C\u093F\u091C\u0940'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u0915\u094B\u0938\u0930\u093E\u090F'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u0915\u094D\u0935\u093E\u091C\u093C\u093E\u0932\u0940\u0928'
                        },
                        'Majuro': {
                            'exemplarCity': '\u092E\u093E\u091C\u0941\u0930\u094B'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u092E\u093E\u0930\u094D\u0915\u0947\u0938\u0938'
                        },
                        'Midway': {
                            'exemplarCity': '\u092E\u093F\u0921\u0935\u0947'
                        },
                        'Nauru': {
                            'exemplarCity': '\u0928\u094C\u0930\u0941'
                        },
                        'Niue': {
                            'exemplarCity': '\u0928\u0940\u092F\u0942'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u0928\u0949\u0930\u092B\u093C\u0949\u0915'
                        },
                        'Noumea': {
                            'exemplarCity': '\u0928\u094C\u092E\u093F\u092F\u093E'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u092A\u093E\u0917\u094B \u092A\u093E\u0917\u094B'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u0932\u093F\u0902\u0921\u0947\u092E\u093E\u0928'
                        },
                        'Hobart': {
                            'exemplarCity': '\u0939\u094B\u092C\u093E\u0930\u094D\u091F'
                        },
                        'Eucla': {
                            'exemplarCity': '\u092F\u0942\u0915\u094D\u0932\u093E'
                        },
                        'Darwin': {
                            'exemplarCity': '\u0921\u093E\u0930\u094D\u0935\u093F\u0928'
                        },
                        'Sydney': {
                            'exemplarCity': '\u0938\u093F\u0921\u0928\u0940'
                        },
                        'Perth': {
                            'exemplarCity': '\u092A\u0930\u094D\u0925'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u092E\u0947\u0932\u092C\u094B\u0930\u094D\u0928'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u0932\u0949\u0930\u094D\u0921 \u0939\u094B\u0935\u0947'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u090F\u0921\u093F\u0932\u0947\u0921'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u092C\u094D\u0930\u093F\u0938\u094D\u092C\u0928'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u092C\u094D\u0930\u094B\u0915\u0928 \u0939\u093F\u0932'
                        },
                        'Currie': {
                            'exemplarCity': '\u0915\u094D\u092F\u0942\u0930\u0940'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u092E\u093E\u0932\u0926\u0940\u0935'
                        },
                        'Mahe': {
                            'exemplarCity': '\u092E\u093E\u0939\u0947'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u0915\u0930\u0917\u0941\u0932\u0947\u0928'
                        },
                        'Reunion': {
                            'exemplarCity': '\u0930\u0940\u092F\u0942\u0928\u093F\u092F\u0928'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u092E\u093E\u092F\u094B\u0924\u094D\u0924\u0947'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u092E\u0949\u0930\u0940\u0936\u0938'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u090F\u0902\u091F\u093E\u0928\u093E\u0928\u0930\u0940\u0935\u094B'
                        },
                        'Chagos': {
                            'exemplarCity': '\u0936\u093E\u0917\u094B\u0938'
                        },
                        'Christmas': {
                            'exemplarCity': '\u0915\u094D\u0930\u093F\u0938\u092E\u0938'
                        },
                        'Cocos': {
                            'exemplarCity': '\u0915\u094B\u0915\u094B\u0938'
                        },
                        'Comoro': {
                            'exemplarCity': '\u0915\u094B\u092E\u094B\u0930\u094B'
                        }
                    },
                    'Etc': {
                        'GMT-11': {
                            'exemplarCity': 'GMT-11'
                        },
                        'GMT-10': {
                            'exemplarCity': 'GMT-10'
                        },
                        'GMT-1': {
                            'exemplarCity': 'GMT-1'
                        },
                        'GMT9': {
                            'exemplarCity': 'GMT+9'
                        },
                        'GMT8': {
                            'exemplarCity': 'GMT+8'
                        },
                        'GMT7': {
                            'exemplarCity': 'GMT+7'
                        },
                        'GMT6': {
                            'exemplarCity': 'GMT+6'
                        },
                        'GMT5': {
                            'exemplarCity': 'GMT+5'
                        },
                        'GMT': {
                            'exemplarCity': 'GMT'
                        },
                        'GMT1': {
                            'exemplarCity': 'GMT+1'
                        },
                        'GMT10': {
                            'exemplarCity': 'GMT+10'
                        },
                        'GMT11': {
                            'exemplarCity': 'GMT+11'
                        },
                        'GMT-3': {
                            'exemplarCity': 'GMT-3'
                        },
                        'GMT-4': {
                            'exemplarCity': 'GMT-4'
                        },
                        'GMT-5': {
                            'exemplarCity': 'GMT-5'
                        },
                        'GMT-6': {
                            'exemplarCity': 'GMT-6'
                        },
                        'GMT-7': {
                            'exemplarCity': 'GMT-7'
                        },
                        'GMT-8': {
                            'exemplarCity': 'GMT-8'
                        },
                        'GMT-9': {
                            'exemplarCity': 'GMT-9'
                        },
                        'Unknown': {
                            'exemplarCity': '\u0905\u091C\u094D\u091E\u093E\u0924 \u0936\u0939\u0930'
                        },
                        'GMT-2': {
                            'exemplarCity': 'GMT-2'
                        },
                        'GMT-14': {
                            'exemplarCity': 'GMT-14'
                        },
                        'GMT-13': {
                            'exemplarCity': 'GMT-13'
                        },
                        'GMT-12': {
                            'exemplarCity': 'GMT-12'
                        },
                        'GMT4': {
                            'exemplarCity': 'GMT+4'
                        },
                        'GMT3': {
                            'exemplarCity': 'GMT+3'
                        },
                        'GMT2': {
                            'exemplarCity': 'GMT+2'
                        },
                        'GMT12': {
                            'exemplarCity': 'GMT+12'
                        }
                    },
                    'Antarctica': {
                        'Rothera': {
                            'exemplarCity': '\u0930\u094B\u0925\u0947\u0930\u093E'
                        },
                        'Palmer': {
                            'exemplarCity': '\u092A\u0949\u092E\u0930'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u092E\u0948\u0915\u092E\u0941\u0930\u094D\u0921\u094B'
                        },
                        'Vostok': {
                            'exemplarCity': '\u0935\u094B\u0938\u094D\u0924\u094B\u0915'
                        },
                        'Syowa': {
                            'exemplarCity': '\u0938\u094D\u092F\u094B\u0935\u093E'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u0926\u0915\u094D\u0937\u093F\u0923\u0940 \u0927\u094D\u0930\u0941\u0935'
                        },
                        'Casey': {
                            'exemplarCity': '\u0915\u0947\u0938\u0940'
                        },
                        'Davis': {
                            'exemplarCity': '\u0921\u0947\u0935\u093F\u0938'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u0921\u094D\u092F\u0942\u092E\u094B\u0902\u091F \u0921\u0940 \u0905\u0930\u094D\u0935\u093F\u0932\u0947'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u092E\u0915\u094D\u0935\u093E\u0930\u0940'
                        },
                        'Mawson': {
                            'exemplarCity': '\u092E\u0949\u0938\u0928'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u0932\u0949\u0928\u094D\u0917\u0908\u092F\u0930\u092C\u093E\u092F\u0947\u0928'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u091F\u094B\u0930\u0902\u091F\u094B'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u0924\u093F\u091C\u0941\u0906\u0928\u093E'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u0925\u0902\u0921\u0930 \u0916\u093E\u0921\u093C\u0940'
                        },
                        'Thule': {
                            'exemplarCity': '\u0925\u094D\u092F\u0942\u0932\u0947'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u091F\u0947\u0917\u0941\u0938\u093F\u0917\u0932\u094D\u092A\u093E'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u0938\u094D\u0935\u093F\u092B\u093C\u094D\u091F \u0915\u0930\u0902\u091F'
                        },
                        'Chicago': {
                            'exemplarCity': '\u0936\u093F\u0915\u093E\u0917\u094B'
                        },
                        'Cayman': {
                            'exemplarCity': '\u0915\u0948\u092E\u0947\u0928'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u0915\u093E\u092F\u0947\u0928'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u0915\u093E\u091F\u093E\u092E\u093E\u0930\u094D\u0915\u093E'
                        },
                        'Caracas': {
                            'exemplarCity': '\u0915\u093E\u0930\u093E\u0915\u0938'
                        },
                        'Cancun': {
                            'exemplarCity': '\u0915\u0948\u0928\u0915\u0941\u0928'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u0915\u0948\u0902\u092A\u094B \u0917\u094D\u0930\u093E\u0902\u0921\u0947'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u0915\u0948\u092E\u094D\u092C\u094D\u0930\u093F\u091C \u0916\u093E\u0921\u093C\u0940'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u092C\u094D\u092F\u0942\u0928\u0938 \u0906\u092F\u0930\u0938'
                        },
                        'Boise': {
                            'exemplarCity': '\u092C\u0949\u0907\u0938'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u090F\u0938\u0928\u0936\u093F\u092F\u0949\u0928'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0905\u0930\u0941\u092C\u093E'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u0930\u093F\u092F\u094B \u0917\u093E\u0932\u0947\u0917\u094B\u0938'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u0938\u093E\u0928 \u091C\u0941\u0906\u0928'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u0909\u0936\u0941\u0906\u0907\u092F\u093E'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u0932\u093E \u0930\u093F\u0913\u091C\u093E'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u0938\u093E\u0928 \u0932\u0941\u0908\u0938'
                            },
                            'Salta': {
                                'exemplarCity': '\u0938\u093E\u0932\u094D\u091F\u093E'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u091F\u094B\u0915\u0942\u092E\u0928'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0906\u0930\u093E\u0917\u094D\u0935\u0947\u0928\u093E'
                        },
                        'Antigua': {
                            'exemplarCity': '\u090F\u0902\u091F\u0940\u0917\u0941\u0906'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u090F\u0902\u0917\u094D\u0935\u093F\u0932\u093E'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u090F\u0902\u0915\u0930\u0947\u091C'
                        },
                        'Adak': {
                            'exemplarCity': '\u0905\u0921\u0915'
                        },
                        'Bahia': {
                            'exemplarCity': '\u092C\u0939\u093F\u092F\u093E'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u092C\u0947\u0939\u093F\u092F\u093E \u092C\u093E\u0902\u0921\u0947\u0930\u093E\u0938'
                        },
                        'Barbados': {
                            'exemplarCity': '\u092C\u093E\u0930\u092C\u093E\u0921\u094B\u0938'
                        },
                        'Belem': {
                            'exemplarCity': '\u092C\u0947\u0932\u0947\u092E'
                        },
                        'Belize': {
                            'exemplarCity': '\u092C\u0947\u0932\u0940\u091C\u093C'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u092C\u094D\u0932\u093E\u0902\u0915-\u0938\u0947\u092C\u0932\u094B\u0928'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u092C\u094B\u0906 \u0935\u093F\u0938\u094D\u0924\u093E'
                        },
                        'Bogota': {
                            'exemplarCity': '\u092C\u094B\u0917\u094B\u091F\u093E'
                        },
                        'Curacao': {
                            'exemplarCity': '\u0915\u0941\u0930\u093E\u0915\u093E\u0913'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u0921\u0947\u0928\u092E\u093E\u0930\u094D\u0915\u0936\u0949\u0928'
                        },
                        'Dawson': {
                            'exemplarCity': '\u0921\u0949\u0938\u0928'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u0921\u0949\u0938\u0928 \u0915\u094D\u0930\u0940\u0915'
                        },
                        'Denver': {
                            'exemplarCity': '\u0921\u0947\u0928\u0935\u0930'
                        },
                        'Detroit': {
                            'exemplarCity': '\u0921\u0947\u091F\u094D\u0930\u0949\u092F\u091F'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u0939\u0930\u094D\u092E\u094B\u0938\u093F\u0932\u094D\u0932\u094B'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0935\u093F\u0902\u0938\u0947\u0928\u0947\u0938, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u092A\u0940\u091F\u0930\u094D\u0938\u092C\u0930\u094D\u0917, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u091F\u0947\u0932 \u0938\u093F\u091F\u0940, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            },
                            'Knox': {
                                'exemplarCity': '\u0928\u094C\u0915\u094D\u0938, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0935\u093F\u0928\u093E\u092E\u0947\u0915, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            },
                            'Marengo': {
                                'exemplarCity': '\u092E\u093E\u0930\u0947\u0902\u0917\u094B, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0935\u0947\u0935\u0947, \u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0907\u0902\u0921\u093F\u092F\u093E\u0928\u093E\u092A\u094B\u0932\u093F\u0938'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0907\u0928\u0942\u0935\u093F\u0915'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0907\u0915\u093E\u0932\u0941\u0908\u091F'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u091C\u092E\u0948\u0915\u093E'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u091C\u0941\u091C\u094B\u090F'
                        },
                        'Juneau': {
                            'exemplarCity': '\u091C\u094D\u092F\u0942\u0928\u093E\u0909'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u092F\u0947\u0932\u094B\u0928\u093E\u0907\u092B\u093C'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u092F\u093E\u0915\u0942\u091F\u093E\u091F'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0935\u093F\u0928\u0940\u092A\u0947\u0917'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0935\u094D\u0939\u093E\u0907\u091F\u0939\u094B\u0930\u094D\u0938'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u0935\u0948\u0902\u0915\u0942\u0935\u0930'
                        },
                        'Tortola': {
                            'exemplarCity': '\u091F\u094B\u0930\u094D\u091F\u094B\u0932\u093E'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u0915\u094D\u0930\u093E\u0932\u0948\u0902\u0921\u093F\u091C\u093F\u0915'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u092E\u094B\u0902\u091F\u0940\u0938\u0947\u0932\u094B, \u0915\u0947\u0902\u091A\u0941\u0915\u0940'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0939\u0935\u093E\u0928\u093E'
                        },
                        'Halifax': {
                            'exemplarCity': '\u0939\u0947\u0932\u093F\u092B\u093C\u0948\u0915\u094D\u0938'
                        },
                        'Guyana': {
                            'exemplarCity': '\u0917\u092F\u093E\u0928\u093E'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u0917\u094D\u0935\u093E\u092F\u093E\u0915\u0940\u0932'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u0917\u094D\u0935\u093E\u091F\u0947\u092E\u093E\u0932\u093E'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u0917\u094D\u0935\u093E\u0921\u0947\u0932\u094B\u092A'
                        },
                        'Grenada': {
                            'exemplarCity': '\u0917\u094D\u0930\u0947\u0928\u093E\u0921\u093E'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u0917\u094D\u0930\u093E\u0902\u0921 \u091F\u0930\u094D\u0915'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u0917\u0942\u0938 \u0916\u093E\u093C\u0921\u093C\u0940'
                        },
                        'Godthab': {
                            'exemplarCity': '\u0928\u0941\u0915'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u0917\u094D\u0932\u0947\u0938 \u0916\u093E\u093C\u0921\u093C\u0940'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u092B\u093C\u094B\u0930\u094D\u091F\u093E\u0932\u0947\u091C\u093C\u093E'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u0905\u0932 \u0938\u0932\u094D\u0935\u093E\u0921\u094B\u0930'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u0908\u0930\u0941\u0928\u0947\u092A\u0947'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u090F\u0921\u092E\u0902\u091F\u0928'
                        },
                        'Dominica': {
                            'exemplarCity': '\u0921\u094B\u092E\u093F\u0928\u093F\u0915\u093E'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u091A\u093F\u0939\u0941\u0906\u0939\u0941\u0906'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u0905\u091F\u093F\u0915\u094B\u0915\u093E\u0928'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u0915\u094B\u0930\u094D\u0921\u094B\u092C\u093E'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u0915\u094B\u0938\u094D\u091F\u093E \u0930\u093F\u0915\u093E'
                        },
                        'Creston': {
                            'exemplarCity': '\u0915\u094D\u0930\u0947\u0938\u094D\u091F\u0928'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u0915\u094D\u092F\u0942\u0906\u092C\u093E'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u0932\u093E \u092A\u093E\u091C\u093C'
                        },
                        'Lima': {
                            'exemplarCity': '\u0932\u0940\u092E\u093E'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u0932\u0949\u0938 \u090F\u0902\u091C\u093F\u0932\u094D\u0938'
                        },
                        'Louisville': {
                            'exemplarCity': '\u0932\u0941\u0907\u0938\u0935\u093F\u0932\u0947'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u0932\u094B\u0905\u0930 \u092A\u094D\u0930\u093F\u0902\u0938\u0947\u0938 \u0915\u094D\u0935\u093E\u0930\u094D\u091F\u0930'
                        },
                        'Maceio': {
                            'exemplarCity': '\u092E\u0947\u0938\u0940\u0913'
                        },
                        'Managua': {
                            'exemplarCity': '\u092E\u093E\u0928\u093E\u0917\u0941\u0906'
                        },
                        'Manaus': {
                            'exemplarCity': '\u092E\u0928\u094C\u0938'
                        },
                        'Marigot': {
                            'exemplarCity': '\u092E\u0948\u0930\u0940\u0917\u094B\u091F'
                        },
                        'Martinique': {
                            'exemplarCity': '\u092E\u093E\u0930\u094D\u091F\u093F\u0928\u093F\u0915'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u092E\u093E\u091F\u093E\u092E\u094B\u0930\u094B\u0938'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u092E\u093E\u091C\u093C\u093E\u091F\u0932\u093E\u0928'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u092E\u0947\u0902\u0921\u094B\u091C\u093C\u093E'
                        },
                        'Menominee': {
                            'exemplarCity': '\u092E\u0947\u0928\u094B\u092E\u093F\u0928\u0940'
                        },
                        'Merida': {
                            'exemplarCity': '\u092E\u0947\u0930\u093F\u0921\u093E'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u092E\u0947\u091F\u094D\u0932\u0947\u0915\u093E\u091F\u094D\u0932\u093E'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u092E\u0948\u0915\u094D\u0938\u093F\u0915\u094B \u0938\u093F\u091F\u0940'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u092E\u093F\u0915\u0947\u0932\u0949\u0928'
                        },
                        'Moncton': {
                            'exemplarCity': '\u092E\u094B\u0902\u0915\u091F\u0928'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u092E\u094B\u0902\u091F\u0947\u0930\u0947\u0930\u0940'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u092E\u094B\u0902\u091F\u0947\u0935\u0940\u0921\u093F\u092F\u094B'
                        },
                        'Montreal': {
                            'exemplarCity': '\u092E\u094B\u0902\u091F\u094D\u0930\u093F\u092F\u0932'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u092E\u094B\u0902\u091F\u0938\u0947\u0930\u093E\u0924'
                        },
                        'Nassau': {
                            'exemplarCity': '\u0928\u093E\u0938\u093E\u0909'
                        },
                        'New_York': {
                            'exemplarCity': '\u0928\u094D\u092F\u0942\u092F\u0949\u0930\u094D\u0915'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u0928\u093F\u092A\u093F\u0917\u0928'
                        },
                        'Nome': {
                            'exemplarCity': '\u0928\u094B\u092E'
                        },
                        'Noronha': {
                            'exemplarCity': '\u0928\u094B\u0930\u094B\u0928\u094D\u0939\u093E'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u092C\u094D\u092F\u0942\u0932\u093E, \u0909\u0924\u094D\u0924\u0930\u0940 \u0921\u0915\u094B\u091F\u093E'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u0928\u094D\u092F\u0942 \u0938\u093E\u0932\u0947\u092E, \u0909\u0924\u094D\u0924\u0930\u0940 \u0921\u0915\u094B\u091F\u093E'
                            },
                            'Center': {
                                'exemplarCity': '\u092E\u0927\u094D\u092F, \u0909\u0924\u094D\u0924\u0930\u0940 \u0926\u093E\u0915\u094B\u0924\u093E'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u0913\u0916\u093E\u091C\u0940\u0928\u093E\u0917\u093E'
                        },
                        'Panama': {
                            'exemplarCity': '\u092A\u0928\u093E\u092E\u093E'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u092A\u093E\u0902\u0917\u0928\u093F\u0930\u094D\u091F\u0902\u0917'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u092A\u093E\u0930\u093E\u092E\u093E\u0930\u093F\u092C\u094B'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u092B\u093C\u0940\u0928\u093F\u0915\u094D\u0938'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u092A\u094B\u0930\u094D\u091F-\u0911-\u092A\u094D\u0930\u093F\u0902\u0938'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u092A\u094B\u0930\u094D\u091F \u0911\u092B\u093C \u0938\u094D\u092A\u0947\u0928'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u092A\u094B\u0930\u094D\u091F\u094B \u0935\u0947\u0932\u094D\u0939\u094B'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u092A\u094B\u0930\u094D\u091F\u094B \u0930\u093F\u0915\u094B'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u0930\u0947\u0928\u0940 \u0928\u0926\u0940'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u0930\u0947\u0902\u0915\u093F\u0928 \u0907\u0928\u0932\u0947\u091F'
                        },
                        'Recife': {
                            'exemplarCity': '\u0930\u0947\u0938\u093E\u0907\u092B\u093C'
                        },
                        'Regina': {
                            'exemplarCity': '\u0930\u0947\u091C\u093F\u0928\u093E'
                        },
                        'Resolute': {
                            'exemplarCity': '\u0930\u093F\u0938\u094B\u0932\u094D\u092F\u0942\u091F'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u0930\u093F\u092F\u094B \u092C\u094D\u0930\u093E\u0902\u0915\u094B'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u0938\u093E\u0902\u0924\u093E \u0907\u0938\u093E\u092C\u0947\u0932'
                        },
                        'Santarem': {
                            'exemplarCity': '\u0938\u0948\u0902\u091F\u093E\u0930\u0947\u092E'
                        },
                        'Santiago': {
                            'exemplarCity': '\u0938\u0948\u0902\u091F\u093F\u092F\u093E\u0917\u094B'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F\u094B \u0921\u094B\u092E\u093F\u0902\u0917\u094B'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u0938\u093E\u0913 \u092A\u093E\u0909\u0932\u094B'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u0907\u091F\u094B\u0915\u094B\u0930\u094D\u091F\u094B\u0930\u092E\u093F\u092F\u093E\u091F'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u0936\u093F\u092A\u0930\u0949\u0915'
                        },
                        'Sitka': {
                            'exemplarCity': '\u0938\u093F\u091F\u094D\u0915\u093E'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u092C\u093E\u0930\u094D\u0925\u0947\u0932\u0947\u092E\u0940'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u091C\u094B\u0902\u0938'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u0915\u093F\u091F\u094D\u0938'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u0932\u0942\u0938\u093F\u092F\u093E'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u0925\u0949\u092E\u0938'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u0935\u093F\u0902\u0938\u0947\u0902\u091F'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u0926\u0915\u094D\u0937\u093F\u0923 \u091C\u0949\u0930\u094D\u091C\u093F\u092F\u093E'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u0930\u0947\u0915\u094D\u092F\u093E\u0935\u093F\u0915'
                        },
                        'Stanley': {
                            'exemplarCity': '\u0938\u094D\u091F\u0948\u0928\u0932\u0940'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u0938\u0947\u0902\u091F \u0939\u0947\u0932\u0947\u0928\u093E'
                        },
                        'Azores': {
                            'exemplarCity': '\u0905\u091C\u093C\u094B\u0930\u0947\u0938'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u092C\u0930\u092E\u0942\u0921\u093E'
                        },
                        'Canary': {
                            'exemplarCity': '\u0915\u0948\u0928\u0947\u0930\u0940'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u0915\u0947\u092A \u0935\u0930\u094D\u0921'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u092B\u093C\u0948\u0930\u094B'
                        },
                        'Madeira': {
                            'exemplarCity': '\u092E\u0921\u0947\u0930\u093E'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u0913\u0938\u094D\u0932\u094B'
                        },
                        'Moscow': {
                            'exemplarCity': '\u092E\u0949\u0938\u094D\u0915\u094B'
                        },
                        'Monaco': {
                            'exemplarCity': '\u092E\u094B\u0928\u093E\u0915\u094B'
                        },
                        'Minsk': {
                            'exemplarCity': '\u092E\u093F\u0902\u0938\u094D\u0915'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u092E\u093E\u0930\u093F\u092F\u093E\u0939\u0948\u092E'
                        },
                        'Malta': {
                            'exemplarCity': '\u092E\u093E\u0932\u094D\u091F\u093E'
                        },
                        'Madrid': {
                            'exemplarCity': '\u092E\u0948\u0921\u094D\u0930\u093F\u0921'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u0932\u0915\u094D\u091C\u093C\u092E\u092C\u0930\u094D\u0917'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u092C\u094D\u0930\u093F\u091F\u093F\u0936 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                            },
                            'exemplarCity': '\u0932\u0902\u0926\u0928'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u0932\u094D\u092F\u0942\u092C\u0947\u0932\u091C\u093E\u0928\u093E'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u0932\u093F\u0938\u094D\u092C\u0928'
                        },
                        'Kiev': {
                            'exemplarCity': '\u0915\u0940\u0935'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u0915\u093E\u0932\u0940\u0928\u093F\u0928\u0917\u094D\u0930\u093E\u0921'
                        },
                        'Jersey': {
                            'exemplarCity': '\u091C\u0930\u094D\u0938\u0940'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u0907\u0938\u094D\u0924\u093E\u0902\u092C\u0941\u0932'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u0906\u0907\u0932 \u0911\u092B\u093C \u092E\u0948\u0928'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u092C\u0941\u0916\u093C\u093E\u0930\u0947\u0938\u094D\u091F'
                        },
                        'Brussels': {
                            'exemplarCity': '\u092C\u094D\u0930\u0942\u0938\u0947\u0932\u094D\u0938'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u092C\u094D\u0930\u093E\u0924\u093F\u0938\u094D\u0932\u093E\u0935\u093E'
                        },
                        'Berlin': {
                            'exemplarCity': '\u092C\u0930\u094D\u0932\u093F\u0928'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u092C\u0947\u0932\u0917\u094D\u0930\u0947\u0921'
                        },
                        'Athens': {
                            'exemplarCity': '\u090F\u0925\u0947\u0902\u0938'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0905\u0902\u0921\u094B\u0930\u093E'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u090F\u092E\u094D\u0938\u094D\u091F\u0930\u094D\u0921\u092E'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u0938\u093F\u092E\u094D\u092B\u093C\u0947\u0930\u094B\u092A\u094B\u0932'
                        },
                        'Skopje': {
                            'exemplarCity': '\u0938\u094D\u0915\u094B\u092A\u094D\u091C\u0947'
                        },
                        'Sofia': {
                            'exemplarCity': '\u0938\u094B\u092B\u093C\u093F\u092F\u093E'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u0938\u094D\u091F\u0949\u0915\u0939\u094B\u092E'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u0924\u0947\u0932\u093F\u0928'
                        },
                        'Tirane': {
                            'exemplarCity': '\u091F\u093E\u0907\u0930\u0947\u0928'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u0905\u091C\u093C\u094D\u0917\u094B\u0930\u094B\u0926'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0935\u093E\u0926\u0941\u091C\u093C'
                        },
                        'Zurich': {
                            'exemplarCity': '\u091C\u093C\u094D\u092F\u0942\u0930\u093F\u0916\u093C'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u091C\u093C\u0948\u092A\u094B\u0930\u094B\u091C\u093C\u093E\u0907'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u091C\u093C\u093E\u0917\u094D\u0930\u0947\u092C'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u0935\u0949\u0930\u0938\u0949'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u0935\u094B\u0932\u094D\u0917\u094B\u0917\u094D\u0930\u093E\u0926'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u0935\u093F\u0932\u094D\u0928\u093F\u092F\u0938'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0935\u093F\u090F\u0928\u093E'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0935\u0947\u091F\u093F\u0915\u0928'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u0938\u093E\u0930\u093E\u091C\u0947\u0935\u094B'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u0938\u0948\u0928 \u092E\u093E\u0930\u0940\u0928\u094B'
                        },
                        'Samara': {
                            'exemplarCity': '\u0938\u092E\u093E\u0930\u093E'
                        },
                        'Rome': {
                            'exemplarCity': '\u0930\u094B\u092E'
                        },
                        'Riga': {
                            'exemplarCity': '\u0930\u0940\u0917\u093E'
                        },
                        'Prague': {
                            'exemplarCity': '\u092A\u094D\u0930\u093E\u0917'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u092A\u094B\u0921\u094D\u0917\u094B\u0930\u093F\u0915\u093E'
                        },
                        'Paris': {
                            'exemplarCity': '\u092A\u0947\u0930\u093F\u0938'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0939\u0947\u0932\u0938\u093F\u0902\u0915\u0940'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u0917\u0930\u094D\u0928\u0938\u0940'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u091C\u093F\u092C\u094D\u0930\u093E\u0932\u094D\u091F\u0930'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u0906\u0907\u0930\u093F\u0936 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                            },
                            'exemplarCity': '\u0921\u092C\u0932\u093F\u0928'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u0915\u094B\u092A\u0947\u0928\u0939\u0947\u0917\u0928'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u091A\u093F\u0938\u0940\u0928\u093E\u0909'
                        },
                        'Busingen': {
                            'exemplarCity': '\u092C\u094D\u092F\u0942\u0938\u093F\u0928\u091C\u0947\u0928'
                        },
                        'Budapest': {
                            'exemplarCity': '\u092C\u0941\u0921\u093E\u092A\u0947\u0938\u094D\u091F'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u0932\u093F\u092C\u094D\u0930\u0947\u0935\u093F\u0932\u0947'
                        },
                        'Lagos': {
                            'exemplarCity': '\u0932\u093E\u0917\u094B\u0938'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u0915\u093F\u0902\u0936\u093E\u0938\u093E'
                        },
                        'Kigali': {
                            'exemplarCity': '\u0915\u093F\u0917\u093E\u0932\u0940'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u0916\u093E\u0930\u094D\u0924\u0942\u092E'
                        },
                        'Kampala': {
                            'exemplarCity': '\u0915\u0902\u092A\u093E\u0932\u093E'
                        },
                        'Juba': {
                            'exemplarCity': '\u091C\u0941\u092C\u093E'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u091C\u094B\u0939\u093E\u0902\u0938\u092C\u0930\u094D\u0917'
                        },
                        'Harare': {
                            'exemplarCity': '\u0939\u0930\u093E\u0930\u0947'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u0917\u093E\u092C\u094B\u0930\u094B\u0928'
                        },
                        'Freetown': {
                            'exemplarCity': '\u092B\u093C\u094D\u0930\u0940\u091F\u093E\u0909\u0928'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u0905\u0932 \u0906\u0907\u092F\u0942\u0928'
                        },
                        'Douala': {
                            'exemplarCity': '\u0921\u0942\u0906\u0932\u093E'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u091C\u093F\u092C\u0942\u0924\u0940'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u0926\u093E\u0930 \u0905\u0938 \u0938\u0932\u093E\u092E'
                        },
                        'Dakar': {
                            'exemplarCity': '\u0921\u0915\u093E\u0930'
                        },
                        'Banjul': {
                            'exemplarCity': '\u092C\u0948\u0902\u091C\u0941\u0932'
                        },
                        'Bangui': {
                            'exemplarCity': '\u092C\u093E\u0902\u0917\u0941\u0907'
                        },
                        'Bamako': {
                            'exemplarCity': '\u092C\u093E\u092E\u093E\u0915\u094B'
                        },
                        'Asmera': {
                            'exemplarCity': '\u0905\u0938\u094D\u092E\u093E\u0930\u093E'
                        },
                        'Malabo': {
                            'exemplarCity': '\u092E\u0932\u093E\u092C\u094B'
                        },
                        'Maputo': {
                            'exemplarCity': '\u092E\u093E\u092A\u0941\u091F\u094B'
                        },
                        'Maseru': {
                            'exemplarCity': '\u092E\u093E\u0938\u0947\u0930\u0942'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u090F\u092E\u092C\u093E\u092C\u0947\u0928'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u092E\u094B\u0917\u093E\u0926\u093F\u0936\u0941'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u092E\u094B\u0928\u0930\u094B\u0935\u093F\u092F\u093E'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u0928\u0948\u0930\u094B\u092C\u0940'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u0928\u0947\u0926\u094D\u091C\u093E\u092E\u0940\u0928\u093E'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0935\u093F\u0902\u0921\u0939\u094B\u0915'
                        },
                        'Tunis': {
                            'exemplarCity': '\u091F\u094D\u092F\u0942\u0928\u093F\u0938'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u0924\u094D\u0930\u093F\u092A\u094B\u0932\u0940'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u0938\u093E\u0913 \u091F\u094B\u092E'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u092A\u094B\u0930\u094D\u091F\u094B-\u0928\u094B\u0935\u094B'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u0914\u0917\u093E\u0921\u094B\u0917\u0942'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u0928\u094C\u0906\u0915\u0936\u0949\u091F'
                        },
                        'Niamey': {
                            'exemplarCity': '\u0928\u093F\u092F\u093E\u092E\u0940'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u0932\u0941\u0938\u093E\u0915\u093E'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u0932\u0941\u092C\u0941\u092E\u092C\u093E\u0936\u0940'
                        },
                        'Luanda': {
                            'exemplarCity': '\u0932\u0941\u0906\u0902\u0921\u093E'
                        },
                        'Lome': {
                            'exemplarCity': '\u0932\u094B\u092E'
                        },
                        'Conakry': {
                            'exemplarCity': '\u0915\u094B\u0928\u093E\u0915\u094D\u0930\u0940'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u0938\u0947\u0909\u091F\u093E'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u0915\u093E\u0938\u093E\u092C\u094D\u0932\u093E\u0902\u0915\u093E'
                        },
                        'Cairo': {
                            'exemplarCity': '\u0915\u093E\u092F\u0930\u094B'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u092C\u0941\u091C\u0941\u0902\u092C\u0942\u0930\u093E'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u092C\u094D\u0930\u093E\u091C\u093C\u093E\u0935\u093F\u0932\u0947'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u092C\u094D\u0932\u093E\u0902\u091F\u093E\u092F\u0930'
                        },
                        'Bissau': {
                            'exemplarCity': '\u092C\u093F\u0938\u093E\u090A'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0905\u092C\u093F\u0926\u091C\u093E\u0928'
                        },
                        'Accra': {
                            'exemplarCity': '\u090F\u0915\u094D\u0930\u093E'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0905\u0926\u0940\u0938 \u0905\u092C\u093E\u092C\u093E'
                        },
                        'Algiers': {
                            'exemplarCity': '\u0905\u0932\u094D\u091C\u0940\u092F\u0930\u094D\u0938'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0936\u0902\u0918\u093E\u0908'
                        },
                        'Seoul': {
                            'exemplarCity': '\u0938\u093F\u0913\u0932'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u0938\u092E\u0930\u0915\u0902\u0926'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u0938\u0916\u093E\u0932\u093F\u0928'
                        },
                        'Saigon': {
                            'exemplarCity': '\u0939\u094B \u091A\u0940 \u092E\u093F\u0928\u094D\u0939 \u0938\u093F\u091F\u0940'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u0930\u093F\u092F\u093E\u0926'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u0930\u0902\u0917\u0942\u0928'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u0915\u0947\u091C\u093C\u0947\u0932\u094B\u0930\u094D\u0921\u093E'
                        },
                        'Qatar': {
                            'exemplarCity': '\u0915\u0924\u0930'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u092A\u094D\u092F\u094B\u0902\u0917\u092F\u093E\u0902\u0917'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u092A\u094B\u0902\u091F\u0940\u092F\u093E\u0902\u0915'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u0928\u0949\u092E \u092A\u0947\u0928\u094D\u0939'
                        },
                        'Oral': {
                            'exemplarCity': '\u0913\u0930\u0932'
                        },
                        'Omsk': {
                            'exemplarCity': '\u0913\u092E\u094D\u0938\u094D\u0915'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u0928\u094B\u0935\u094B\u0938\u093F\u092C\u093F\u0930\u094D\u0938\u094D\u0915'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u092C\u0917\u0926\u093E\u0926'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u091A\u094B\u0902\u0917\u0915\u093F\u0902\u0917'
                        },
                        'Colombo': {
                            'exemplarCity': '\u0915\u094B\u0932\u0902\u092C\u094B'
                        },
                        'Damascus': {
                            'exemplarCity': '\u0926\u092E\u093E\u0938\u094D\u0915\u0938'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u0922\u093E\u0915\u093E'
                        },
                        'Dili': {
                            'exemplarCity': '\u0921\u093F\u0932\u093F'
                        },
                        'Dubai': {
                            'exemplarCity': '\u0926\u0941\u092C\u0908'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u0926\u0941\u0936\u093E\u0902\u092C\u0947'
                        },
                        'Gaza': {
                            'exemplarCity': '\u0917\u093E\u091C\u093C\u093E'
                        },
                        'Harbin': {
                            'exemplarCity': '\u0939\u0930\u094D\u092C\u093F\u0928'
                        },
                        'Hebron': {
                            'exemplarCity': '\u0939\u0947\u092C\u094D\u0930\u094B\u0928'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u0939\u093E\u0901\u0917 \u0915\u093E\u0901\u0917'
                        },
                        'Hovd': {
                            'exemplarCity': '\u0939\u094B\u0935\u094D\u0921'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0907\u0930\u094D\u0915\u0941\u0924\u094D\u0938\u094D\u0915'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u091C\u0915\u093E\u0930\u094D\u0924\u093E'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u091C\u092F\u093E\u092A\u0941\u0930\u093E'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u0909\u0932\u093E\u0928\u092C\u093E\u0924\u0930'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u0909\u0930\u092E\u094D\u091A\u0940'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u092F\u0942\u0938\u094D\u091F\u2013\u0928\u0947\u0930\u093E'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0935\u093F\u090F\u0928\u0924\u093F\u092F\u093E\u0928'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0935\u094D\u0932\u093E\u0926\u093F\u0935\u094B\u0938\u094D\u0924\u094B\u0915'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u092F\u093E\u0915\u0942\u0924\u094D\u0938\u094D\u0915'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u092F\u0947\u0915\u093E\u0924\u0947\u0930\u093F\u0928\u092C\u0930\u094D\u0917'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u092F\u0947\u0930\u0947\u0935\u093E\u0928'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u091F\u094B\u0915\u094D\u092F\u094B'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u0925\u093F\u0902\u092A\u0942'
                        },
                        'Tehran': {
                            'exemplarCity': '\u0924\u0947\u0939\u0930\u093E\u0928'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u091F\u092C\u093F\u0932\u093F\u0938\u0940'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u0924\u093E\u0936\u0915\u0902\u0926'
                        },
                        'Taipei': {
                            'exemplarCity': '\u0924\u093E\u0908\u092A\u0947\u0908'
                        },
                        'Singapore': {
                            'exemplarCity': '\u0938\u093F\u0902\u0917\u093E\u092A\u0941\u0930'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u092F\u0930\u0942\u0936\u0932\u092E'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0905\u0936\u094D\u0917\u093E\u092C\u093E\u0924'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0905\u0915\u094D\u0924\u094B\u092C'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0905\u0915\u094D\u0924\u093E\u0909'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0905\u0928\u093E\u0921\u093F\u0930'
                        },
                        'Amman': {
                            'exemplarCity': '\u0905\u092E\u094D\u092E\u093E\u0928'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0905\u0932\u094D\u092E\u093E\u091F\u0940'
                        },
                        'Aden': {
                            'exemplarCity': '\u0906\u0926\u0947\u0928'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u092C\u0939\u0930\u0940\u0928'
                        },
                        'Baku': {
                            'exemplarCity': '\u092C\u093E\u0915\u0941'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u092C\u0948\u0902\u0915\u0949\u0915'
                        },
                        'Beirut': {
                            'exemplarCity': '\u092C\u0947\u0930\u0941\u0924'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u092C\u093F\u0936\u094D\u0915\u0947\u0915'
                        },
                        'Brunei': {
                            'exemplarCity': '\u092C\u094D\u0930\u0942\u0928\u0947\u0908'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u0915\u094B\u0932\u0915\u093E\u0924\u093E'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u091A\u094B\u0907\u092C\u093E\u0932\u0938\u0928'
                        },
                        'Kabul': {
                            'exemplarCity': '\u0915\u093E\u092C\u0941\u0932'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u0915\u092E\u091A\u0924\u094D\u0915\u093E'
                        },
                        'Karachi': {
                            'exemplarCity': '\u0915\u0930\u093E\u091A\u0940'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u0915\u093E\u0936\u094D\u0917\u0930'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u0915\u093E\u0920\u092E\u093E\u0902\u0921\u0942'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u0916\u093E\u0902\u0921\u093F\u0917\u093E'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u0915\u094D\u0930\u093E\u0938\u094D\u0928\u094B\u092F\u093E\u0930\u094D\u0938\u094D\u0915'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u0915\u0941\u0906\u0932\u093E\u0932\u0902\u092A\u0941\u0930'
                        },
                        'Kuching': {
                            'exemplarCity': '\u0915\u0942\u091A\u093F\u0902\u0917'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u0915\u0941\u0935\u0948\u0924'
                        },
                        'Macau': {
                            'exemplarCity': '\u092E\u0915\u093E\u0909'
                        },
                        'Magadan': {
                            'exemplarCity': '\u092E\u093E\u0917\u093E\u0926\u093E\u0928'
                        },
                        'Makassar': {
                            'exemplarCity': '\u092E\u0915\u0938\u094D\u0938\u0930'
                        },
                        'Manila': {
                            'exemplarCity': '\u092E\u0928\u0940\u0932\u093E'
                        },
                        'Muscat': {
                            'exemplarCity': '\u092E\u0938\u094D\u0915\u091F'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u0928\u093F\u0915\u094B\u0938\u093F\u092F\u093E'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u0928\u094B\u0935\u094B\u0915\u0941\u091C\u093C\u094D\u0928\u0947\u0924\u094D\u0938\u094D\u0915'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': '\u091F\u094B\u0915\u0947\u0932\u093E\u090A \u0938\u092E\u092F'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u0924\u093E\u091C\u093F\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u0924\u093E\u0907\u092A\u0947 \u0938\u092E\u092F',
                            'standard': '\u0924\u093E\u0907\u092A\u0947 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0924\u093E\u0907\u092A\u0947 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u0924\u093E\u0939\u093F\u0924\u0940 \u0938\u092E\u092F'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u0938\u094D\u092F\u094B\u0935\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u0938\u0942\u0930\u0940\u0928\u093E\u092E \u0938\u092E\u092F'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u0926\u0915\u094D\u0937\u093F\u0923\u0940 \u091C\u0949\u0930\u094D\u091C\u093F\u092F\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u0938\u094B\u0932\u094B\u092E\u0928 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u0938\u093F\u0902\u0917\u093E\u092A\u0941\u0930 \u0938\u092E\u092F'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u0938\u0947\u0936\u0932\u094D\u0938 \u0938\u092E\u092F'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': '\u0938\u092E\u094B\u0906 \u0938\u092E\u092F',
                            'standard': '\u0938\u092E\u094B\u0906 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0938\u092E\u094B\u0906 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u0938\u092E\u093E\u0930\u093E \u0938\u092E\u092F',
                            'standard': '\u0938\u092E\u093E\u0930\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0938\u092E\u093E\u0930\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u0938\u0916\u093E\u0932\u093F\u0928 \u0938\u092E\u092F',
                            'standard': '\u0938\u0916\u093E\u0932\u093F\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0938\u0916\u093E\u0932\u093F\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u0930\u094B\u0925\u0947\u0930\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u0930\u0940\u092F\u0942\u0928\u093F\u092F\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u0905\u091F\u0932\u093E\u0902\u091F\u093F\u0915 \u0938\u092E\u092F',
                            'standard': '\u0905\u091F\u0932\u093E\u0902\u091F\u093F\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u091F\u0932\u093E\u0902\u091F\u093F\u0915 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u0938\u092E\u092F',
                            'standard': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u0905\u092E\u0947\u091C\u093C\u0928 \u0938\u092E\u092F',
                            'standard': '\u0905\u092E\u0947\u091C\u093C\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u092E\u0947\u091C\u093C\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u0905\u0932\u093E\u0938\u094D\u0915\u093E \u0938\u092E\u092F',
                            'standard': '\u0905\u0932\u093E\u0938\u094D\u200D\u0915\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u0932\u093E\u0938\u094D\u200D\u0915\u093E \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u092A\u0936\u094D\u091A\u093F\u092E \u0905\u092B\u093C\u094D\u0930\u0940\u0915\u093E \u0938\u092E\u092F',
                            'standard': '\u092A\u0936\u094D\u091A\u093F\u092E \u0905\u092B\u093C\u094D\u0930\u0940\u0915\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0936\u094D\u091A\u093F\u092E \u0905\u092B\u093C\u094D\u0930\u0940\u0915\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u0926\u0915\u094D\u0937\u093F\u0923 \u0905\u092B\u093C\u094D\u0930\u0940\u0915\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0905\u092B\u093C\u094D\u0930\u0940\u0915\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u092E\u0927\u094D\u092F \u0905\u092B\u093C\u094D\u0930\u0940\u0915\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u0905\u092B\u093C\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092A\u0942\u0930\u094D\u0935\u0940 \u0938\u092E\u092F',
                            'standard': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092A\u0942\u0930\u094D\u0935\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092A\u0942\u0930\u094D\u0935\u0940 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092E\u093E\u0909\u0902\u091F\u0947\u0928 \u0938\u092E\u092F',
                            'standard': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092E\u093E\u0909\u0902\u091F\u0947\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092E\u093E\u0909\u0902\u091F\u0947\u0928 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092A\u094D\u0930\u0936\u093E\u0902\u0924 \u0938\u092E\u092F',
                            'standard': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092A\u094D\u0930\u0936\u093E\u0902\u0924 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u0924\u094D\u0924\u0930\u0940 \u0905\u092E\u0947\u0930\u093F\u0915\u0940 \u092A\u094D\u0930\u0936\u093E\u0902\u0924 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u090F\u0928\u093E\u0921\u0940\u092F\u0930 \u0938\u092E\u092F',
                            'standard': '\u090F\u0928\u093E\u0921\u0940\u092F\u0930 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u090F\u0928\u093E\u0921\u0940\u092F\u0930 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0905\u0930\u092C \u0938\u092E\u092F',
                            'standard': '\u0905\u0930\u092C \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u0930\u092C \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u0905\u0930\u094D\u091C\u0947\u0902\u091F\u0940\u0928\u093E \u0938\u092E\u092F',
                            'standard': '\u0905\u0930\u094D\u091C\u0947\u0902\u091F\u0940\u0928\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u0930\u094D\u091C\u0947\u0902\u091F\u0940\u0928\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0905\u0930\u094D\u091C\u0947\u0902\u091F\u0940\u0928\u093E \u0938\u092E\u092F',
                            'standard': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0905\u0930\u094D\u091C\u0947\u0902\u091F\u0940\u0928\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0905\u0930\u094D\u091C\u0947\u0902\u091F\u0940\u0928\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u0906\u0930\u094D\u092E\u0947\u0928\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u0906\u0930\u094D\u092E\u0947\u0928\u093F\u092F\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0906\u0930\u094D\u092E\u0947\u0928\u093F\u092F\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u091A\u0940\u0928 \u0938\u092E\u092F',
                            'standard': '\u091A\u0940\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u091A\u0940\u0928 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u0915\u0949\u0907\u092C\u093E\u0932\u094D\u0938\u0928 \u0938\u092E\u092F',
                            'standard': '\u0915\u0949\u0907\u092C\u093E\u0932\u094D\u0938\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u0949\u0907\u092C\u093E\u0932\u094D\u0938\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u0915\u094D\u0930\u093F\u0938\u092E\u0938 \u0926\u094D\u0935\u0940\u092A \u0938\u092E\u092F'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u0915\u094B\u0915\u094B\u0938 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u0915\u094B\u0932\u0902\u092C\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u0915\u094B\u0932\u0902\u092C\u093F\u092F\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u094B\u0932\u0902\u092C\u093F\u092F\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u0915\u0941\u0915 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F',
                            'standard': '\u0915\u0941\u0915 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u0941\u0915 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0905\u0930\u094D\u0926\u094D\u0927 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u0915\u094D\u092F\u0942\u092C\u093E \u0938\u092E\u092F',
                            'standard': '\u0915\u094D\u092F\u0942\u092C\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u094D\u092F\u0942\u092C\u093E \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u0921\u0947\u0935\u093F\u0938 \u0938\u092E\u092F'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u0921\u094D\u092F\u0942\u092E\u094B\u0902\u091F \u0921\u0930\u094D\u0935\u093F\u0932 \u0938\u092E\u092F'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0924\u093F\u092E\u094B\u0930 \u0938\u092E\u092F'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u0908\u0938\u094D\u091F\u0930 \u0926\u094D\u0935\u0940\u092A \u0938\u092E\u092F',
                            'standard': '\u0908\u0938\u094D\u091F\u0930 \u0926\u094D\u0935\u0940\u092A \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0908\u0938\u094D\u091F\u0930 \u0926\u094D\u0935\u0940\u092A \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u0907\u0915\u094D\u0935\u093E\u0921\u094B\u0930 \u0938\u092E\u092F'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u092E\u0927\u094D\u092F \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u0938\u092E\u092F',
                            'standard': '\u092E\u0927\u094D\u092F \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092E\u0927\u094D\u200D\u092F \u092F\u0942\u0930\u094B\u092A \u0917\u094D\u0930\u0940\u0937\u094D\u200D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u092A\u0942\u0930\u094D\u0935\u0940 \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u0938\u092E\u092F',
                            'standard': '\u092A\u0942\u0930\u094D\u0935\u0940 \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0942\u0930\u094D\u0935\u0940 \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u0938\u092E\u092F',
                            'standard': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u092F\u0942\u0930\u094B\u092A\u0940\u092F \u0917\u094D\u0930\u0940\u0937\u094D\u200D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u092D\u093E\u0930\u0924\u0940\u092F \u0938\u092E\u092F'
                        },
                        'short': {
                            'standard': 'IST'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u091F\u094B\u0902\u0917\u093E \u0938\u092E\u092F',
                            'standard': '\u091F\u094B\u0902\u0917\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u091F\u094B\u0902\u0917\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u091A\u0942\u0915 \u0938\u092E\u092F'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u0924\u0941\u0930\u094D\u0915\u092E\u0947\u0928\u093F\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u0924\u0941\u0930\u094D\u0915\u092E\u0947\u0928\u093F\u0938\u094D\u0924\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0924\u0941\u0930\u094D\u0915\u092E\u0947\u0928\u093F\u0938\u094D\u0924\u093E\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u0924\u0941\u0935\u093E\u0932\u0942 \u0938\u092E\u092F'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u0909\u0930\u0941\u0917\u094D\u0935\u0947 \u0938\u092E\u092F',
                            'standard': '\u0909\u0930\u0941\u0917\u094D\u0935\u0947 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u0930\u0941\u0917\u094D\u0935\u0947 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u0909\u091C\u093C\u094D\u092C\u0947\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u0909\u091C\u093C\u094D\u092C\u0947\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u091C\u093C\u094D\u092C\u0947\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u0935\u0928\u0941\u0906\u0924\u0942 \u0938\u092E\u092F',
                            'standard': '\u0935\u0928\u0941\u0906\u0924\u0942 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0935\u0928\u0941\u0906\u0924\u0942 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u092F\u0947\u0915\u093E\u0924\u0947\u0930\u093F\u0928\u092C\u0930\u094D\u0917 \u0938\u092E\u092F',
                            'standard': '\u092F\u0947\u0915\u093E\u0924\u0947\u0930\u093F\u0928\u092C\u0930\u094D\u0917 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092F\u0947\u0915\u093E\u0924\u0947\u0930\u093F\u0928\u092C\u0930\u094D\u0917 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u092F\u093E\u0915\u0941\u0924\u094D\u0938\u094D\u0915 \u0938\u092E\u092F',
                            'standard': '\u092F\u093E\u0915\u0941\u0924\u094D\u0938\u094D\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092F\u093E\u0915\u0941\u0924\u094D\u0938\u094D\u0915 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u0935\u093E\u0932\u093F\u0938 \u0914\u0930 \u092B\u093C\u094D\u092F\u0942\u091A\u0942\u0928\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u0935\u0947\u0915 \u0926\u094D\u0935\u0940\u092A \u0938\u092E\u092F'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u0935\u094B\u0938\u094D\u0924\u094B\u0915 \u0938\u092E\u092F'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u0935\u094B\u0932\u094D\u0917\u094B\u0917\u094D\u0930\u093E\u0921 \u0938\u092E\u092F',
                            'standard': '\u0935\u094B\u0932\u094D\u0917\u094B\u0917\u094D\u0930\u093E\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0935\u094B\u0932\u094D\u0917\u094B\u0917\u094D\u0930\u093E\u0921 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u0935\u094D\u0932\u093E\u0926\u093F\u0935\u094B\u0938\u094D\u0924\u094B\u0915 \u0938\u092E\u092F',
                            'standard': '\u0935\u094D\u0932\u093E\u0926\u093F\u0935\u094B\u0938\u094D\u0924\u094B\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0935\u094D\u0932\u093E\u0926\u093F\u0935\u094B\u0938\u094D\u0924\u094B\u0915 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u0935\u0947\u0928\u0947\u091C\u093C\u0941\u090F\u0932\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u0939\u094B\u0935\u094D\u0921 \u0938\u092E\u092F',
                            'standard': '\u0939\u094B\u0935\u094D\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0939\u094B\u0935\u094D\u0921 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u0939\u093E\u0901\u0917 \u0915\u093E\u0901\u0917 \u0938\u092E\u092F',
                            'standard': '\u0939\u093E\u0901\u0917 \u0915\u093E\u0901\u0917 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0939\u093E\u0901\u0917 \u0915\u093E\u0901\u0917 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u0939\u0935\u093E\u0908\u2013\u0906\u0932\u094D\u092F\u0942\u0936\u0928 \u0938\u092E\u092F',
                            'standard': '\u0939\u0935\u093E\u0908\u2013\u0906\u0932\u094D\u092F\u0942\u0936\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0939\u0935\u093E\u0908\u2013\u0906\u0932\u094D\u092F\u0942\u0936\u0928 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u0917\u0941\u092F\u093E\u0928\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u0916\u093E\u0921\u093C\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0917\u094D\u0930\u0940\u0928\u0932\u0948\u0902\u0921 \u0938\u092E\u092F',
                            'standard': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0917\u094D\u0930\u0940\u0928\u0932\u0948\u0902\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0917\u094D\u0930\u0940\u0928\u0932\u0948\u0902\u0921 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0917\u094D\u0930\u0940\u0928\u0932\u0948\u0902\u0921 \u0938\u092E\u092F',
                            'standard': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0917\u094D\u0930\u0940\u0928\u0932\u0948\u0902\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0917\u094D\u0930\u0940\u0928\u0932\u0948\u0902\u0921 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u0917\u094D\u0930\u0940\u0928\u0935\u093F\u091A \u092E\u0940\u0928 \u091F\u093E\u0907\u092E'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u0917\u093F\u0932\u094D\u092C\u0930\u094D\u091F \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u091C\u0949\u0930\u094D\u091C\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u091C\u0949\u0930\u094D\u091C\u093F\u092F\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u091C\u0949\u0930\u094D\u091C\u093F\u092F\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u0917\u0948\u0902\u092C\u093F\u092F\u0930 \u0938\u092E\u092F'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u0917\u0948\u0932\u093E\u092A\u0947\u0917\u094B\u0938 \u0915\u093E \u0938\u092E\u092F'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u0926\u0915\u094D\u0937\u093F\u0923\u0940 \u092B\u093C\u094D\u0930\u093E\u0902\u0938 \u0914\u0930 \u0905\u0902\u091F\u093E\u0930\u094D\u0915\u091F\u093F\u0915 \u0938\u092E\u092F'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u092B\u093C\u094D\u0930\u0947\u0902\u091A \u0917\u0941\u092F\u093E\u0928\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u092B\u093C\u093F\u091C\u0940 \u0915\u093E \u0938\u092E\u092F',
                            'standard': '\u092B\u093C\u093F\u091C\u0940 \u0915\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092B\u093C\u093F\u091C\u0940 \u0915\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u092B\u093C\u0949\u0915\u0932\u0948\u0902\u0921 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F',
                            'standard': '\u092B\u093C\u0949\u0915\u0932\u0948\u0902\u0921 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092B\u093C\u0949\u0915\u0932\u0948\u0902\u0921 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u092E\u0927\u094D\u092F \u0911\u0938\u094D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u0938\u092E\u092F',
                            'standard': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0938\u092E\u092F',
                            'standard': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0911\u0938\u094D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u092A\u0942\u0930\u094D\u0935\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0911\u0938\u094D\u200D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u092A\u0942\u0930\u094D\u0935\u0940 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0911\u0938\u094D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u0911\u0938\u094D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0911\u0938\u094D\u091F\u094D\u0930\u0947\u0932\u093F\u092F\u093E\u0908 \u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u0905\u091C\u093C\u0930\u092C\u0948\u091C\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u0905\u091C\u093C\u0930\u092C\u0948\u091C\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u091C\u093C\u0930\u092C\u0948\u091C\u093E\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u0905\u091C\u093C\u094B\u0930\u0947\u0938 \u0938\u092E\u092F',
                            'standard': '\u0905\u091C\u093C\u094B\u0930\u0947\u0938 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0905\u091C\u093C\u094B\u0930\u0947\u0938 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u092C\u093E\u0902\u0917\u094D\u0932\u093E\u0926\u0947\u0936 \u0938\u092E\u092F',
                            'standard': '\u092C\u093E\u0902\u0917\u094D\u0932\u093E\u0926\u0947\u0936 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092C\u093E\u0902\u0917\u094D\u0932\u093E\u0926\u0947\u0936 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u092D\u0942\u091F\u093E\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u092C\u094B\u0932\u0940\u0935\u093F\u092F\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u092C\u094D\u0930\u093E\u091C\u0940\u0932\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u092C\u094D\u0930\u093E\u091C\u0940\u0932\u093F\u092F\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092C\u094D\u0930\u093E\u091C\u0940\u0932\u093F\u092F\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u092C\u094D\u0930\u0942\u0928\u0947\u0908 \u0926\u093E\u0930\u0942\u0938\u094D\u0938\u0932\u093E\u092E \u0938\u092E\u092F'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u0915\u0947\u092A \u0935\u0930\u094D\u0921 \u0938\u092E\u092F',
                            'standard': '\u0915\u0947\u092A \u0935\u0930\u094D\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u0947\u092A \u0935\u0930\u094D\u0921 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u091A\u093E\u092E\u094B\u0930\u094B \u092E\u093E\u0928\u0915 \u0938\u092E\u092F'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u091A\u0948\u0925\u092E \u0938\u092E\u092F',
                            'standard': '\u091A\u0948\u0925\u092E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u091A\u0948\u0925\u092E \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u091A\u093F\u0932\u0940 \u0938\u092E\u092F',
                            'standard': '\u091A\u093F\u0932\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u091A\u093F\u0932\u0940 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u0939\u093F\u0902\u0926 \u092E\u0939\u093E\u0938\u093E\u0917\u0930 \u0938\u092E\u092F'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u0907\u0902\u0921\u094B\u091A\u093E\u0907\u0928\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u092E\u0927\u094D\u092F \u0907\u0902\u0921\u094B\u0928\u0947\u0936\u093F\u092F\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u092A\u0942\u0930\u094D\u0935\u0940 \u0907\u0902\u0921\u094B\u0928\u0947\u0936\u093F\u092F\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u0907\u0902\u0921\u094B\u0928\u0947\u0936\u093F\u092F\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u0908\u0930\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u0908\u0930\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0908\u0930\u093E\u0928 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u0907\u0930\u094D\u0915\u0941\u0924\u094D\u0938\u094D\u0915 \u0938\u092E\u092F',
                            'standard': '\u0907\u0930\u094D\u0915\u0941\u0924\u094D\u0938\u094D\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0907\u0930\u094D\u0915\u0941\u0924\u094D\u0938\u094D\u0915 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u0907\u091C\u093C\u0930\u093E\u0907\u0932 \u0938\u092E\u092F',
                            'standard': '\u0907\u091C\u093C\u0930\u093E\u0907\u0932 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0907\u091C\u093C\u0930\u093E\u0907\u0932 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u091C\u093E\u092A\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u091C\u093E\u092A\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u091C\u093E\u092A\u093E\u0928 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u092A\u0947\u091F\u094D\u0930\u094B\u092A\u0947\u0935\u0932\u093E\u0938\u094D\u0915-\u0915\u0948\u092E\u091A\u093E\u0924\u094D\u0938\u0915\u0940 \u0938\u092E\u092F',
                            'standard': '\u092A\u0947\u091F\u094D\u0930\u094B\u092A\u0947\u0935\u0932\u093E\u0938\u094D\u0915-\u0915\u0948\u092E\u091A\u093E\u0924\u094D\u0938\u0915\u0940 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0947\u091F\u094D\u0930\u094B\u092A\u0947\u0935\u0932\u093E\u0938\u094D\u0915-\u0915\u0948\u092E\u091A\u093E\u0924\u094D\u0938\u0915\u0940 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u092A\u0942\u0930\u094D\u0935 \u0915\u091C\u093C\u093E\u0916\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u092A\u0936\u094D\u091A\u093F\u092E \u0915\u091C\u093C\u093E\u0916\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u0915\u094B\u0930\u093F\u092F\u093E\u0908 \u0938\u092E\u092F',
                            'standard': '\u0915\u094B\u0930\u093F\u092F\u093E\u0908 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u094B\u0930\u093F\u092F\u093E\u0908 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u0915\u094B\u0938\u0930\u093E\u090F \u0938\u092E\u092F'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u0915\u094D\u0930\u093E\u0938\u094D\u0928\u094B\u092F\u093E\u0930\u094D\u0938\u094D\u0915 \u0938\u092E\u092F',
                            'standard': '\u0915\u094D\u0930\u093E\u0938\u094D\u0928\u094B\u092F\u093E\u0930\u094D\u0938\u094D\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0915\u094D\u0930\u093E\u0938\u094D\u0928\u094B\u092F\u093E\u0930\u094D\u0938\u094D\u0915 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u0915\u093F\u0930\u094D\u0917\u093F\u0938\u094D\u200D\u0924\u093E\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u0932\u093E\u0907\u0928 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u0932\u0949\u0930\u094D\u0921 \u0939\u094B\u0935\u0947 \u0938\u092E\u092F',
                            'standard': '\u0932\u0949\u0930\u094D\u0921 \u0939\u094B\u0935\u0947 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0932\u0949\u0930\u094D\u0921 \u0939\u094B\u0935\u0947 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u092E\u0915\u094D\u0935\u093E\u0930\u0940 \u0926\u094D\u0935\u0940\u092A \u0938\u092E\u092F'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u092E\u093E\u0917\u093E\u0926\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u092E\u093E\u0917\u093E\u0926\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092E\u093E\u0917\u093E\u0926\u093E\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u092E\u0932\u0947\u0936\u093F\u092F\u093E \u0938\u092E\u092F'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u092E\u093E\u0932\u0926\u0940\u0935 \u0938\u092E\u092F'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u092E\u093E\u0930\u094D\u0915\u094B\u0938\u093F\u0938 \u0938\u092E\u092F'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u092E\u093E\u0930\u094D\u0936\u0932 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u092E\u0949\u0930\u0940\u0936\u0938 \u0938\u092E\u092F',
                            'standard': '\u092E\u0949\u0930\u0940\u0936\u0938 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092E\u0949\u0930\u0940\u0936\u0938 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u092E\u093E\u0935\u094D\u0938\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u0909\u0932\u093E\u0928 \u092C\u091F\u094B\u0930 \u0938\u092E\u092F',
                            'standard': '\u0909\u0932\u093E\u0928 \u092C\u091F\u094B\u0930 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0909\u0932\u093E\u0928 \u092C\u091F\u094B\u0930 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u092E\u0949\u0938\u094D\u0915\u094B \u0938\u092E\u092F',
                            'standard': '\u092E\u0949\u0938\u094D\u0915\u094B \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092E\u0949\u0938\u094D\u0915\u094B \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u092E\u094D\u092F\u093E\u0902\u092E\u093E\u0930 \u0938\u092E\u092F'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u0928\u094C\u0930\u0942 \u0938\u092E\u092F'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u0928\u0947\u092A\u093E\u0932 \u0938\u092E\u092F'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u0928\u094D\u092F\u0942 \u0915\u0948\u0932\u0947\u0921\u094B\u0928\u093F\u092F\u093E \u0938\u092E\u092F',
                            'standard': '\u0928\u094D\u092F\u0942 \u0915\u0948\u0932\u0947\u0921\u094B\u0928\u093F\u092F\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0928\u094D\u092F\u0942 \u0915\u0948\u0932\u0947\u0921\u094B\u0928\u093F\u092F\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u0928\u094D\u092F\u0942\u091C\u093C\u0940\u0932\u0948\u0902\u0921 \u0938\u092E\u092F',
                            'standard': '\u0928\u094D\u092F\u0942\u091C\u093C\u0940\u0932\u0948\u0902\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0928\u094D\u092F\u0942\u091C\u093C\u0940\u0932\u0948\u0902\u0921 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u0928\u094D\u092F\u0942\u092B\u093C\u093E\u0909\u0902\u0921\u0932\u0948\u0902\u0921 \u0938\u092E\u092F',
                            'standard': '\u0928\u094D\u092F\u0942\u092B\u093C\u093E\u0909\u0902\u0921\u0932\u0948\u0902\u0921 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0928\u094D\u092F\u0942\u092B\u093C\u093E\u0909\u0902\u0921\u0932\u0948\u0902\u0921 \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u0928\u0940\u092F\u0942 \u0938\u092E\u092F'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u0928\u0949\u0930\u092B\u093C\u0949\u0915 \u0926\u094D\u0935\u0940\u092A \u0938\u092E\u092F'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u092B\u093C\u0930\u094D\u0928\u093E\u0902\u0930\u094D\u0921\u094B \u0921\u0947 \u0928\u094B\u0930\u094B\u0928\u094D\u0939\u093E \u0938\u092E\u092F',
                            'standard': '\u092B\u093C\u0930\u094D\u0928\u093E\u0902\u0930\u094D\u0921\u094B \u0921\u0947 \u0928\u094B\u0930\u094B\u0928\u094D\u0939\u093E \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092B\u093C\u0930\u094D\u0928\u093E\u0902\u0930\u094D\u0921\u094B \u0921\u0947 \u0928\u094B\u0930\u094B\u0928\u094D\u0939\u093E \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u0928\u094B\u0935\u094B\u0938\u093F\u092C\u093F\u0930\u094D\u0938\u094D\u0915 \u0938\u092E\u092F',
                            'standard': '\u0928\u094B\u0935\u094B\u0938\u093F\u092C\u093F\u0930\u094D\u0938\u094D\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0928\u094B\u0935\u094B\u0938\u093F\u092C\u093F\u0930\u094D\u0938\u094D\u0915 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u0913\u092E\u094D\u0938\u094D\u0915 \u0938\u092E\u092F',
                            'standard': '\u0913\u092E\u094D\u0938\u094D\u0915 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u0913\u092E\u094D\u0938\u094D\u0915 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u092A\u093E\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u0938\u092E\u092F',
                            'standard': '\u092A\u093E\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u093E\u0915\u093F\u0938\u094D\u0924\u093E\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u092A\u0932\u093E\u0909 \u0938\u092E\u092F'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u092A\u093E\u092A\u0941\u0906 \u0928\u094D\u092F\u0942 \u0917\u093F\u0928\u0940 \u0938\u092E\u092F'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u092A\u0948\u0930\u093E\u0917\u094D\u0935\u0947 \u0938\u092E\u092F',
                            'standard': '\u092A\u0948\u0930\u093E\u0917\u094D\u0935\u0947 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0948\u0930\u093E\u0917\u094D\u0935\u0947 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u092A\u0947\u0930\u0942 \u0938\u092E\u092F',
                            'standard': '\u092A\u0947\u0930\u0942 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092A\u0947\u0930\u0942 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u092B\u093C\u093F\u0932\u093F\u092A\u0940\u0928 \u0938\u092E\u092F',
                            'standard': '\u092B\u093C\u093F\u0932\u093F\u092A\u0940\u0928 \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                            'daylight': '\u092B\u093C\u093F\u0932\u093F\u092A\u0940\u0928 \u0917\u094D\u0930\u0940\u0937\u094D\u092E\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u092B\u093C\u0940\u0928\u093F\u0915\u094D\u0938 \u0926\u094D\u0935\u0940\u092A\u0938\u092E\u0942\u0939 \u0938\u092E\u092F'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u0938\u0947\u0902\u091F \u092A\u093F\u092F\u0930\u0947 \u0914\u0930 \u092E\u093F\u0915\u0947\u0932\u093E\u0928 \u091F\u093E\u0907\u092E',
                            'standard': '\u0938\u0947\u0902\u091F \u092A\u093F\u092F\u0930\u0947 \u0914\u0930 \u092E\u093F\u0915\u0947\u0932\u093E\u0928 \u092E\u093E\u0928\u0915 \u091F\u093E\u0907\u092E',
                            'daylight': '\u0938\u0947\u0902\u091F \u092A\u093F\u092F\u0930\u0947 \u0914\u0930 \u092E\u093F\u0915\u0947\u0932\u093E\u0928 \u0921\u0947\u0932\u093E\u0907\u091F \u091F\u093E\u0907\u092E'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u092A\u093F\u091F\u0915\u0948\u0930\u094D\u0928 \u0938\u092E\u092F'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u092A\u094B\u0928\u093E\u092A\u0947 \u0938\u092E\u092F'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} \u0938\u092E\u092F',
                'regionFormat-type-daylight': '{0} \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F',
                'regionFormat-type-standard': '{0} \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u0905\u0917',
                                '7': '\u091C\u0941\u0932\u093E',
                                '6': '\u091C\u0942\u0928',
                                '5': '\u092E\u0908',
                                '12': '\u0926\u093F\u0938\u0902',
                                '11': '\u0928\u0935\u0902',
                                '10': '\u0905\u0915\u094D\u091F\u0942',
                                '9': '\u0938\u093F\u0924\u0902',
                                '1': '\u091C\u0928',
                                '2': '\u092B\u093C\u0930',
                                '3': '\u092E\u093E\u0930\u094D\u091A',
                                '4': '\u0905\u092A\u094D\u0930\u0948'
                            },
                            'narrow': {
                                '8': '\u0905',
                                '7': '\u091C\u0941',
                                '6': '\u091C\u0942',
                                '5': '\u092E',
                                '12': '\u0926\u093F',
                                '11': '\u0928',
                                '10': '\u0905',
                                '9': '\u0938\u093F',
                                '1': '\u091C',
                                '2': '\u092B\u093C',
                                '3': '\u092E\u093E',
                                '4': '\u0905'
                            },
                            'wide': {
                                '8': '\u0905\u0917\u0938\u094D\u0924',
                                '7': '\u091C\u0941\u0932\u093E\u0908',
                                '6': '\u091C\u0942\u0928',
                                '5': '\u092E\u0908',
                                '12': '\u0926\u093F\u0938\u0902\u092C\u0930',
                                '11': '\u0928\u0935\u0902\u092C\u0930',
                                '10': '\u0905\u0915\u094D\u091F\u0942\u092C\u0930',
                                '9': '\u0938\u093F\u0924\u0902\u092C\u0930',
                                '1': '\u091C\u0928\u0935\u0930\u0940',
                                '2': '\u092B\u093C\u0930\u0935\u0930\u0940',
                                '3': '\u092E\u093E\u0930\u094D\u091A',
                                '4': '\u0905\u092A\u094D\u0930\u0948\u0932'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u0905\u0917',
                                '7': '\u091C\u0941\u0932\u093E',
                                '6': '\u091C\u0942\u0928',
                                '5': '\u092E\u0908',
                                '12': '\u0926\u093F\u0938\u0902',
                                '11': '\u0928\u0935\u0902',
                                '10': '\u0905\u0915\u094D\u091F\u0942',
                                '9': '\u0938\u093F\u0924\u0902',
                                '1': '\u091C\u0928',
                                '2': '\u092B\u093C\u0930',
                                '3': '\u092E\u093E\u0930\u094D\u091A',
                                '4': '\u0905\u092A\u094D\u0930\u0948'
                            },
                            'narrow': {
                                '8': '\u0905',
                                '7': '\u091C\u0941',
                                '6': '\u091C\u0942',
                                '5': '\u092E',
                                '12': '\u0926\u093F',
                                '11': '\u0928',
                                '10': '\u0905',
                                '9': '\u0938\u093F',
                                '1': '\u091C',
                                '2': '\u092B\u093C',
                                '3': '\u092E\u093E',
                                '4': '\u0905'
                            },
                            'wide': {
                                '8': '\u0905\u0917\u0938\u094D\u0924',
                                '7': '\u091C\u0941\u0932\u093E\u0908',
                                '6': '\u091C\u0942\u0928',
                                '5': '\u092E\u0908',
                                '12': '\u0926\u093F\u0938\u0902\u092C\u0930',
                                '11': '\u0928\u0935\u0902\u092C\u0930',
                                '10': '\u0905\u0915\u094D\u091F\u0942\u092C\u0930',
                                '9': '\u0938\u093F\u0924\u0902\u092C\u0930',
                                '1': '\u091C\u0928\u0935\u0930\u0940',
                                '2': '\u092B\u093C\u0930\u0935\u0930\u0940',
                                '3': '\u092E\u093E\u0930\u094D\u091A',
                                '4': '\u0905\u092A\u094D\u0930\u0948\u0932'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u0930\u0935\u093F',
                                'mon': '\u0938\u094B\u092E',
                                'tue': '\u092E\u0902\u0917\u0932',
                                'wed': '\u092C\u0941\u0927',
                                'thu': '\u0917\u0941\u0930\u0941',
                                'fri': '\u0936\u0941\u0915\u094D\u0930',
                                'sat': '\u0936\u0928\u093F'
                            },
                            'narrow': {
                                'sun': '\u0930',
                                'mon': '\u0938\u094B',
                                'tue': '\u092E\u0902',
                                'wed': '\u092C\u0941',
                                'thu': '\u0917\u0941',
                                'fri': '\u0936\u0941',
                                'sat': '\u0936'
                            },
                            'short': {
                                'sun': '\u0930',
                                'mon': '\u0938\u094B',
                                'tue': '\u092E\u0902',
                                'wed': '\u092C\u0941',
                                'thu': '\u0917\u0941',
                                'fri': '\u0936\u0941',
                                'sat': '\u0936'
                            },
                            'wide': {
                                'sun': '\u0930\u0935\u093F\u0935\u093E\u0930',
                                'mon': '\u0938\u094B\u092E\u0935\u093E\u0930',
                                'tue': '\u092E\u0902\u0917\u0932\u0935\u093E\u0930',
                                'wed': '\u092C\u0941\u0927\u0935\u093E\u0930',
                                'thu': '\u0917\u0941\u0930\u0941\u0935\u093E\u0930',
                                'fri': '\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930',
                                'sat': '\u0936\u0928\u093F\u0935\u093E\u0930'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u0930\u0935\u093F',
                                'mon': '\u0938\u094B\u092E',
                                'tue': '\u092E\u0902\u0917\u0932',
                                'wed': '\u092C\u0941\u0927',
                                'thu': '\u0917\u0941\u0930\u0941',
                                'fri': '\u0936\u0941\u0915\u094D\u0930',
                                'sat': '\u0936\u0928\u093F'
                            },
                            'narrow': {
                                'sun': '\u0930',
                                'mon': '\u0938\u094B',
                                'tue': '\u092E\u0902',
                                'wed': '\u092C\u0941',
                                'thu': '\u0917\u0941',
                                'fri': '\u0936\u0941',
                                'sat': '\u0936'
                            },
                            'short': {
                                'sun': '\u0930',
                                'mon': '\u0938\u094B',
                                'tue': '\u092E\u0902',
                                'wed': '\u092C\u0941',
                                'thu': '\u0917\u0941',
                                'fri': '\u0936\u0941',
                                'sat': '\u0936'
                            },
                            'wide': {
                                'sun': '\u0930\u0935\u093F\u0935\u093E\u0930',
                                'mon': '\u0938\u094B\u092E\u0935\u093E\u0930',
                                'tue': '\u092E\u0902\u0917\u0932\u0935\u093E\u0930',
                                'wed': '\u092C\u0941\u0927\u0935\u093E\u0930',
                                'thu': '\u0917\u0941\u0930\u0941\u0935\u093E\u0930',
                                'fri': '\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930',
                                'sat': '\u0936\u0928\u093F\u0935\u093E\u0930'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '\u0924\u093F1',
                                '2': '\u0924\u093F2',
                                '3': '\u0924\u093F3',
                                '4': '\u0924\u093F4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                '2': '\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                '3': '\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                '4': '\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '\u0924\u093F1',
                                '2': '\u0924\u093F2',
                                '3': '\u0924\u093F3',
                                '4': '\u0924\u093F4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                '2': '\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                '3': '\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                '4': '\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u092A\u0942\u0930\u094D\u0935',
                                'pm': '\u0905\u092A\u0930'
                            },
                            'narrow': {
                                'am': '\u092A\u0942',
                                'pm': '\u0905'
                            },
                            'wide': {
                                'am': '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928',
                                'pm': '\u0905\u092A\u0930\u093E\u0939\u094D\u0928'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u092A\u0942\u0930\u094D\u0935',
                                'pm': '\u0905\u092A\u0930'
                            },
                            'narrow': {
                                'am': '\u092A\u0942',
                                'pm': '\u0905'
                            },
                            'wide': {
                                'am': '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928',
                                'pm': '\u0905\u092A\u0930\u093E\u0939\u094D\u0928'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935',
                            '0-alt-variant': 'BCE',
                            '1': '\u0908\u0938\u094D\u0935\u0940',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935',
                            '0-alt-variant': 'BCE',
                            '1': '\u0908\u0938\u094D\u0935\u0940',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935',
                            '0-alt-variant': 'BCE',
                            '1': '\u0908\u0938\u094D\u0935\u0940',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'dd-MM-y',
                        'short': 'd-M-yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \u0915\u094B {0}',
                        'long': '{1} \u0915\u094B {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMM': 'MM-y',
                            'yMEd': 'E, d/M/y',
                            'yMd': 'd/M/y',
                            'yM': 'M/y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'GyMMMd': 'd MMM, G y',
                            'GyMMMEd': 'E, d MMM, G y',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM, y',
                            'yMMM': 'MMM y',
                            'yMMdd': 'dd-MM-y',
                            'Hms': 'HH:mm:ss',
                            'Ed': 'E d',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM G y',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, d/M',
                            'MMdd': 'dd-MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMdd': 'dd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM'
                        },
                        'appendItems': {
                            'Second': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Month': '{0} ({2}: {1})',
                            'Year': '{1} {0}',
                            'Week': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}',
                            'Day': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Era': '{1} {0}',
                            'Hour': '{0} ({2}: {1})',
                            'Minute': '{0} ({2}: {1})'
                        },
                        'intervalFormats': {
                            'MMMEd': {
                                'd': 'E, d MMM \u2013 E, d MMM',
                                'M': 'E, d MMM \u2013 E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd MMM\u2013d',
                                'M': 'd MMM \u2013 d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M \u2013 E, d/M',
                                'M': 'E, d/M \u2013 E, d/M'
                            },
                            'Md': {
                                'd': 'd/M \u2013 d/M',
                                'M': 'd/M \u2013 d/M'
                            },
                            'M': {
                                'M': 'M\u2013M'
                            },
                            'Hv': {
                                'H': 'HH\u2013HH v'
                            },
                            'hv': {
                                'a': 'h a \u2013 h a v',
                                'h': 'h\u2013h a v'
                            },
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'M/y \u2013 M/y',
                                'y': 'M/y \u2013 M/y'
                            },
                            'yMd': {
                                'd': 'd/M/y \u2013 d/M/y',
                                'M': 'd/M/y \u2013 d/M/y',
                                'y': 'd/M/y \u2013 d/M/y'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y \u2013 E, d/M/y',
                                'M': 'E, d/M/y \u2013 E, d/M/y',
                                'y': 'E, d/M/y \u2013 E, d/M/y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd MMM\u2013d, y',
                                'M': 'd MMM \u2013 d MMM, y',
                                'y': 'd MMM, y \u2013 d MMM, y'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM \u2013 E, d MMM, y',
                                'M': 'E, d MMM \u2013 E, d MMM, y',
                                'y': 'E, d MMM, y \u2013 E, d MMM, y'
                            },
                            'yMMMM': {
                                'M': 'MMMM \u2013 MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm\u2013HH:mm v',
                                'm': 'HH:mm\u2013HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm\u2013h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm\u2013HH:mm',
                                'm': 'HH:mm\u2013HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a \u2013 h:mm a',
                                'h': 'h:mm\u2013h:mm a',
                                'm': 'h:mm\u2013h:mm a'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'h a \u2013 h a',
                                'h': 'h\u2013h a'
                            },
                            'd': {
                                'd': 'd\u2013d'
                            },
                            'intervalFormatFallback': '{0} \u2013 {1}'
                        }
                    }
                }
            }
        });
    }));
}((function (thisContext) {
    'use strict';
    /*global window, global, self */

    // detect the global context of the environment
    if ('object' === typeof window && null !== window && window.window === window) {
        thisContext = window;
    } else if ('object' === typeof global && null !== global && global.global === global) {
        thisContext = global;
    } else if ('object' === typeof self && null !== self && self.self === self) {
        thisContext = self;
    }

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    /*global */
    return thisContext;
}(this))));
