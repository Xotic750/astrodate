/* AstroDate
 * Language: he
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * localeDisplayNames: 24r9287
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
        AstroDate.lang('he', {
            'codePatterns': {
                'language': '\u05E9\u05E4\u05D4:\u200F {0}',
                'script': '\u05DB\u05EA\u05D1: {0}',
                'territory': '\u05D0\u05D6\u05D5\u05E8: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u05DE\u05D9\u05D9\u05DF \u05E7\u05D0\u05E0\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3',
                    'yes': '\u05DE\u05D9\u05D9\u05DF \u05E7\u05D0\u05E0\u05D4 \u05D0\u05D7\u05E8\u05EA'
                },
                'colCaseLevel': {
                    'no': '\u05DE\u05D9\u05D9\u05DF \u05D1\u05D0\u05D5\u05E4\u05DF \u05E9\u05D0\u05D9\u05E0\u05D5 \u05EA\u05DC\u05D5\u05D9 \u05E8\u05D9\u05E9\u05D9\u05D5\u05EA',
                    'yes': '\u05DE\u05D9\u05D9\u05DF \u05D1\u05D0\u05D5\u05E4\u05DF \u05EA\u05DC\u05D5\u05D9 \u05E8\u05D9\u05E9\u05D9\u05D5\u05EA'
                },
                'colCaseFirst': {
                    'lower': '\u05DE\u05D9\u05D9\u05DF \u05EA\u05D7\u05D9\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA',
                    'no': '\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9 \u05E1\u05D3\u05E8 \u05E8\u05D9\u05E9\u05D9\u05D5\u05EA \u05E8\u05D2\u05D9\u05DC',
                    'upper': '\u05DE\u05D9\u05D9\u05DF \u05EA\u05D7\u05D9\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05EA'
                },
                'colStrength': {
                    'identical': '\u05DE\u05D9\u05D9\u05DF \u05D4\u05DB\u05DC',
                    'primary': '\u05DE\u05D9\u05D9\u05DF \u05EA\u05D5\u05DA \u05D4\u05EA\u05E2\u05DC\u05DE\u05D5\u05EA \u05DE\u05D4\u05D8\u05E2\u05DE\u05D5\u05EA',
                    'quaternary': '\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9 \u05D4\u05D8\u05E2\u05DE\u05D5\u05EA/\u05E8\u05D9\u05E9\u05D9\u05D5\u05EA/\u05E8\u05D5\u05D7\u05D1/\u05E7\u05D0\u05E0\u05D4',
                    'secondary': '\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9 \u05D4\u05D8\u05E2\u05DE\u05D5\u05EA',
                    'tertiary': '\u05DE\u05D9\u05D9\u05DF \u05D4\u05D8\u05E2\u05DE\u05D5\u05EA/\u05E8\u05D9\u05E9\u05D9\u05D5\u05EA/\u05E8\u05D5\u05D7\u05D1'
                },
                'colNumeric': {
                    'no': '\u05DE\u05D9\u05D9\u05DF \u05E1\u05E4\u05E8\u05D5\u05EA \u05D1\u05E0\u05E4\u05E8\u05D3',
                    'yes': '\u05DE\u05D9\u05D9\u05DF \u05E1\u05E4\u05E8\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E1\u05D3\u05E8 \u05DE\u05E1\u05E4\u05E8\u05D9'
                },
                'colNormalization': {
                    'no': '\u05DE\u05D9\u05D9\u05DF \u05DC\u05DC\u05D0 \u05E0\u05D5\u05E8\u05DE\u05DC\u05D9\u05D6\u05E6\u05D9\u05D4',
                    'yes': '\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9 Unicode \u05DE\u05E0\u05D5\u05E8\u05DE\u05DC'
                },
                'calendar': {
                    'japanese': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05D9\u05E4\u05E0\u05D9',
                    'iso8601': 'iso8601',
                    'coptic': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05E7\u05D5\u05E4\u05D8\u05D9',
                    'dangi': 'dangi',
                    'ethiopic': '\u05DC\u05D5\u05D7 \u05D4\u05E9\u05E0\u05D4 \u05D4\u05D0\u05EA\u05D9\u05D5\u05E4\u05D9',
                    'ethiopic-amete-alem': '\u05DC\u05D5\u05D7 \u05D4\u05E9\u05E0\u05D4 \u05D0\u05DE\u05D8\u05D4 \u05D0\u05DC\u05DD \u05D4\u05D0\u05EA\u05D9\u05D5\u05E4\u05D9',
                    'gregorian': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05D2\u05E8\u05D2\u05D5\u05E8\u05D9\u05D0\u05E0\u05D9',
                    'hebrew': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05E2\u05D1\u05E8\u05D9',
                    'persian': '\u05DC\u05D5\u05D7 \u05D4\u05E9\u05E0\u05D4 \u05D4\u05E4\u05E8\u05E1\u05D9',
                    'roc': '\u05DC\u05D5\u05D7 \u05D4\u05E9\u05E0\u05D4 \u05D4\u05E1\u05D9\u05E0\u05D9 Minguo',
                    'chinese': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05E1\u05D9\u05E0\u05D9',
                    'buddhist': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05D1\u05D5\u05D3\u05D4\u05D9\u05E1\u05D8\u05D9',
                    'indian': '\u05DC\u05D5\u05D7 \u05D4\u05E9\u05E0\u05D4 \u05D4\u05D4\u05D5\u05D3\u05D9 \u05D4\u05DC\u05D0\u05D5\u05DE\u05D9',
                    'islamic': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05DE\u05D5\u05E1\u05DC\u05DE\u05D9',
                    'islamic-civil': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05DE\u05D5\u05E1\u05DC\u05DE\u05D9-\u05D0\u05D6\u05E8\u05D7\u05D9',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4 \u05DE\u05D5\u05E1\u05DC\u05DE\u05D9-\u05D0\u05E1\u05D8\u05E8\u05D5\u05DC\u05D5\u05D2\u05D9',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u05DE\u05D9\u05D5\u05DF \u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05DD',
                    'gb2312han': '\u05DE\u05D9\u05D5\u05DF \u05E1\u05D9\u05E0\u05D9\u05EA \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05EA',
                    'eor': 'eor',
                    'ducet': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF Unicode \u05D4\u05DE\u05D5\u05D2\u05D3\u05E8 \u05DB\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC',
                    'dictionary': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF \u05D1\u05DE\u05D9\u05DC\u05D5\u05DF',
                    'big5han': '\u05DE\u05D9\u05D5\u05DF \u05E1\u05D9\u05E0\u05D9\u05EA \u05DE\u05E1\u05D5\u05E8\u05EA\u05D9\u05EA',
                    'traditional': '\u05DE\u05D9\u05D5\u05DF \u05DE\u05E1\u05D5\u05E8\u05EA\u05D9',
                    'standard': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC',
                    'zhuyin': 'zhuyin',
                    'unihan': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF \u05DC\u05E4\u05D9 \u05E1\u05E4\u05D9\u05E8\u05EA \u05EA\u05D5\u05D5\u05D9\u05DD Radical-Stroke',
                    'stroke': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF \u05DC\u05E4\u05D9 \u05E1\u05E4\u05D9\u05E8\u05EA \u05EA\u05D5\u05D5\u05D9\u05DD',
                    'searchjl': '\u05D7\u05E4\u05E9 \u05DC\u05E4\u05D9 \u05D4\u05E2\u05D9\u05E6\u05D5\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D1\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D4\u05E0\u05D2\u05D5\u05DC',
                    'search': '\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05DE\u05D8\u05E8\u05D4 \u05DB\u05DC\u05DC\u05D9\u05EA',
                    'reformed': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF \u05DE\u05EA\u05D5\u05E7\u05DF',
                    'pinyin': '\u05DE\u05D9\u05D5\u05DF \u05E4\u05D9\u05E0\u05D9\u05D9\u05DF',
                    'phonetic': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF \u05E4\u05D5\u05E0\u05D8\u05D9'
                },
                'numbers': {
                    'knda': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E9\u05DC \u05E7\u05D0\u05E0\u05D0\u05D3\u05D4',
                    'khmr': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D7\u05DE\u05E8\u05D9\u05D5\u05EA',
                    'kali': 'kali',
                    'jpanfin': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD \u05D9\u05E4\u05E0\u05D9\u05D9\u05DD',
                    'jpan': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D9\u05E4\u05E0\u05D9\u05D9\u05DD',
                    'java': 'java',
                    'hebr': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05E2\u05D1\u05E8\u05D9\u05D5\u05EA',
                    'hantfin': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD \u05D1\u05E1\u05D9\u05E0\u05D9\u05EA \u05DE\u05E1\u05D5\u05E8\u05EA\u05D9\u05EA',
                    'hant': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D1\u05E1\u05D9\u05E0\u05D9\u05EA \u05DE\u05E1\u05D5\u05E8\u05EA\u05D9\u05EA',
                    'hansfin': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD \u05D1\u05E1\u05D9\u05E0\u05D9\u05EA \u05E4\u05E9\u05D5\u05D8\u05D4',
                    'hans': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D1\u05E1\u05D9\u05E0\u05D9\u05EA \u05E4\u05E9\u05D5\u05D8\u05D4',
                    'hanidec': '\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9\u05EA \u05D4\u05E1\u05D9\u05E0\u05D9\u05EA',
                    'guru': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D2\u05D5\u05E8\u05DE\u05D5\u05E7\u05D9\u05D9\u05DD',
                    'gujr': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05F3\u05E8\u05D8\u05D9',
                    'greklow': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D9\u05D5\u05D5\u05E0\u05D9\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD',
                    'grek': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D9\u05D5\u05D5\u05E0\u05D9\u05D9\u05DD',
                    'bali': 'bali',
                    'armnlow': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D0\u05E8\u05DE\u05E0\u05D9\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD',
                    'armn': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D0\u05E8\u05DE\u05E0\u05D9\u05D9\u05DD',
                    'arabext': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D4\u05D5\u05D3\u05D9\u05D5\u05EA-\u05E2\u05E8\u05D1\u05D9\u05D5\u05EA',
                    'arab': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D4\u05D5\u05D3\u05D5-\u05E2\u05E8\u05D1\u05D9\u05D5\u05EA',
                    'finance': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D5\u05EA',
                    'traditional': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05EA\u05D9\u05D5\u05EA',
                    'native': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9\u05D5\u05EA',
                    'beng': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D1\u05E0\u05D2\u05DC\u05D9\u05D5\u05EA',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E9\u05DC \u05D3\u05D5\u05D5\u05E0\u05D2\u05D0\u05E8\u05D9',
                    'orya': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D0\u05D5\u05E8\u05D9\u05D4',
                    'osma': 'osma',
                    'roman': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E8\u05D5\u05DE\u05D9\u05D9\u05DD',
                    'romanlow': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E8\u05D5\u05DE\u05D9\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D5\u05D0\u05D9',
                    'tibt': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D8\u05D9\u05D1\u05D8\u05D9\u05D9\u05DD',
                    'thai': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05EA\u05D0\u05D9\u05DC\u05E0\u05D3\u05D9\u05D5\u05EA',
                    'telu': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D8\u05DC\u05D5\u05D2\u05D5',
                    'tamldec': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D8\u05DE\u05D9\u05DC\u05D9\u05D5\u05EA',
                    'taml': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D8\u05DE\u05D9\u05DC\u05D9\u05D9\u05DD',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05E9\u05DC \u05DE\u05D9\u05D0\u05E0\u05DE\u05E8',
                    'mtei': 'mtei',
                    'mong': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05DE\u05D5\u05E0\u05D2\u05D5\u05DC\u05D9\u05D5\u05EA',
                    'mlym': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E9\u05DC \u05DE\u05DC\u05D9\u05D0\u05DC\u05D0\u05DD',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05DE\u05E2\u05E8\u05D1\u05D9\u05D5\u05EA',
                    'laoo': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E9\u05DC \u05DC\u05D0\u05D5\u05E1',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D2\u05D9\u05D0\u05D5\u05E8\u05D2\u05D9\u05D9\u05DD',
                    'fullwide': '\u05E1\u05E4\u05E8\u05D5\u05EA \u05D1\u05E8\u05D5\u05D7\u05D1 \u05DE\u05DC\u05D0',
                    'ethi': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D0\u05EA\u05D9\u05D5\u05E4\u05D9\u05D9\u05DD'
                },
                'colAlternate': {
                    'non-ignorable': '\u05DE\u05D9\u05D9\u05DF \u05E1\u05DE\u05DC\u05D9\u05DD',
                    'shifted': '\u05DE\u05D9\u05D9\u05DF \u05EA\u05D5\u05DA \u05D4\u05EA\u05E2\u05DC\u05DE\u05D5\u05EA \u05DE\u05E1\u05DE\u05DC\u05D9\u05DD'
                },
                'colBackwards': {
                    'no': '\u05DE\u05D9\u05D9\u05DF \u05D4\u05D8\u05E2\u05DE\u05D5\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4',
                    'yes': '\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9 \u05D4\u05D8\u05E2\u05DE\u05D5\u05EA \u05D1\u05E1\u05D3\u05E8 \u05D4\u05E4\u05D5\u05DA'
                }
            },
            'keys': {
                'colNormalization': '\u05DE\u05D9\u05D5\u05DF \u05DE\u05E0\u05D5\u05E8\u05DE\u05DC',
                'collation': '\u05E1\u05D3\u05E8 \u05DE\u05D9\u05D5\u05DF',
                'colHiraganaQuaternary': '\u05DE\u05D9\u05D5\u05DF \u05E7\u05D0\u05E0\u05D4',
                'colCaseLevel': '\u05DE\u05D9\u05D5\u05DF \u05EA\u05DC\u05D5\u05D9 \u05E8\u05D9\u05E9\u05D9\u05D5\u05EA',
                'colCaseFirst': '\u05E1\u05D9\u05D3\u05D5\u05E8 \u05DC\u05E4\u05D9 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05EA/\u05E7\u05D8\u05E0\u05D5\u05EA',
                'colBackwards': '\u05DE\u05D9\u05D5\u05DF \u05DC\u05E4\u05D9 \u05D4\u05D8\u05E2\u05DE\u05D5\u05EA \u05D1\u05E1\u05D3\u05E8 \u05D4\u05E4\u05D5\u05DA',
                'colAlternate': '\u05D4\u05EA\u05E2\u05DC\u05DD \u05DE\u05E1\u05DE\u05DC\u05D9\u05DD \u05D1\u05DE\u05D9\u05D5\u05DF',
                'calendar': '\u05DC\u05D5\u05D7 \u05E9\u05E0\u05D4',
                'x': '\u05E9\u05D9\u05DE\u05D5\u05E9 \u05E4\u05E8\u05D8\u05D9',
                'variableTop': '\u05DE\u05D9\u05D9\u05DF \u05DB\u05E1\u05DE\u05DC\u05D9\u05DD',
                'va': '\u05DE\u05E9\u05EA\u05E0\u05D4 \u05D0\u05D6\u05D5\u05E8',
                'timezone': '\u05D0\u05D6\u05D5\u05E8 \u05D6\u05DE\u05DF',
                'numbers': '\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD',
                'currency': '\u05DE\u05D8\u05D1\u05E2',
                'colStrength': '\u05E2\u05D5\u05E6\u05DE\u05EA \u05D4\u05DE\u05D9\u05D5\u05DF',
                'colNumeric': '\u05DE\u05D9\u05D5\u05DF \u05DC\u05E4\u05D9 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}:\u200F {1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u05E1\u05D9\u05D9\u05E4\u05DF'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u05E8\u05D0\u05E8\u05D5\u05D8\u05D5\u05E0\u05D2\u05D4'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u05E4\u05D5\u05E8\u05D8 \u05DE\u05D5\u05E8\u05E1\u05D1\u05D9'
                        },
                        'Ponape': {
                            'exemplarCity': '\u05E4\u05D5\u05E0\u05E4\u05D4'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u05E4\u05D9\u05D8\u05E7\u05E8\u05DF'
                        },
                        'Palau': {
                            'exemplarCity': '\u05E4\u05DC\u05D0\u05D5'
                        },
                        'Auckland': {
                            'exemplarCity': '\u05E4\u05E1\u05D9\u05E4\u05D9/\u05D0\u05D5\u05E7\u05DC\u05E0\u05D3'
                        },
                        'Apia': {
                            'exemplarCity': '\u05D0\u05E4\u05D9\u05D4'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u05E4\u05D5\u05E0\u05E4\u05D5\u05D8\u05D9'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u05E4\u05E1\u05D9\u05E4\u05D9/\u05D2\u05DC\u05D0\u05E4\u05D2\u05D5\u05E1'
                        },
                        'Gambier': {
                            'exemplarCity': '\u05D0\u05D9\u05D9 \u05D2\u05DE\u05D1\u05D9\u05E8'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u05D2\u05D5\u05D5\u05D3\u05DC\u05E7\u05E0\u05D0\u05DC'
                        },
                        'Guam': {
                            'exemplarCity': '\u05D2\u05D5\u05D0\u05DD'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u05E4\u05E1\u05D9\u05E4\u05D9/\u05D4\u05D5\u05E0\u05D5\u05DC\u05D5\u05DC\u05D5'
                        },
                        'Wallis': {
                            'exemplarCity': '\u05D5\u05D5\u05DC\u05D9\u05E1'
                        },
                        'Wake': {
                            'exemplarCity': '\u05D5\u05D5\u05D0\u05E7'
                        },
                        'Truk': {
                            'exemplarCity': '\u05D8\u05E8\u05D5\u05E7'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u05D8\u05D5\u05E0\u05D2\u05D8\u05E4\u05D5'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u05D8\u05D0\u05E8\u05D0\u05D5\u05D5\u05D4'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u05E4\u05E1\u05D9\u05E4\u05D9/\u05D8\u05D4\u05D9\u05D8\u05D9'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u05E7\u05D9\u05E8\u05D9\u05D8\u05D9\u05DE\u05D0\u05D8\u05D9'
                        },
                        'Johnston': {
                            'exemplarCity': '\u05D2\u05F3\u05D5\u05E0\u05E1\u05D8\u05D5\u05DF'
                        },
                        'Chatham': {
                            'exemplarCity': '\u05E6\u05F3\u05D0\u05D8\u05D4\u05D0\u05DD'
                        },
                        'Easter': {
                            'exemplarCity': '\u05D0\u05D9\u05D9 \u05D4\u05E4\u05E1\u05D7\u05D0'
                        },
                        'Efate': {
                            'exemplarCity': '\u05D0\u05E4\u05D8\u05D4'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u05D0\u05E0\u05D3\u05E8\u05D1\u05D5\u05E8\u05D9'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u05E4\u05E7\u05D0\u05D5\u05E4\u05D5'
                        },
                        'Fiji': {
                            'exemplarCity': '\u05E4\u05D9\u05D2\u05F3\u05D9'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u05E7\u05D5\u05E1\u05E8\u05D4'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u05E7\u05D5\u05D5\u05D0\u05D2\u05F3\u05DC\u05D9\u05D9\u05DF'
                        },
                        'Majuro': {
                            'exemplarCity': '\u05DE\u05D0\u05D2\u05F3\u05D5\u05E8\u05D5'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u05D0\u05D9\u05D9 \u05DE\u05E8\u05E7\u05D9\u05D6'
                        },
                        'Midway': {
                            'exemplarCity': '\u05DE\u05D9\u05D3\u05D5\u05D5\u05D9\u05D9'
                        },
                        'Nauru': {
                            'exemplarCity': '\u05E0\u05D0\u05D5\u05E8\u05D5'
                        },
                        'Niue': {
                            'exemplarCity': '\u05E0\u05D9\u05D5\u05D5\u05D4'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u05E0\u05D5\u05E8\u05E4\u05D5\u05E7'
                        },
                        'Noumea': {
                            'exemplarCity': '\u05E0\u05D5\u05DE\u05D0\u05D4'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u05E4\u05D0\u05D2\u05D5 \u05E4\u05D0\u05D2\u05D5'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u05DC\u05D9\u05E0\u05D3\u05DE\u05DF'
                        },
                        'Hobart': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05D4\u05D5\u05D1\u05E8\u05D8'
                        },
                        'Eucla': {
                            'exemplarCity': '\u05D9\u05D5\u05E7\u05DC\u05D4'
                        },
                        'Darwin': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05D3\u05E8\u05D5\u05D5\u05D9\u05DF'
                        },
                        'Sydney': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05E1\u05D9\u05D3\u05E0\u05D9'
                        },
                        'Perth': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05E4\u05E8\u05EA\u05F3'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05DE\u05DC\u05D1\u05D5\u05E8\u05DF'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u05DC\u05D5\u05E8\u05D3 \u05D4\u05D0\u05D5'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u05D0\u05D3\u05DC\u05D9\u05D9\u05D3'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05D1\u05E8\u05D9\u05E1\u05D1\u05DF'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4/\u05D1\u05E8\u05D5\u05E7\u05DF-\u05D4\u05D9\u05DC'
                        },
                        'Currie': {
                            'exemplarCity': '\u05E7\u05E8\u05D9'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u05D4\u05D0\u05D9\u05D9\u05DD \u05D4\u05DE\u05DC\u05D3\u05D9\u05D1\u05D9\u05D9\u05DD'
                        },
                        'Mahe': {
                            'exemplarCity': '\u05DE\u05D4\u05D0'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u05E7\u05E8\u05D2\u05D5\u05D5\u05DC\u05DF'
                        },
                        'Reunion': {
                            'exemplarCity': '\u05E8\u05D0\u05D5\u05E0\u05D9\u05D5\u05DF'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u05DE\u05D0\u05D9\u05D5\u05D8'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u05DE\u05D0\u05D5\u05E8\u05D9\u05E6\u05D9\u05D5\u05E1'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u05D0\u05E0\u05D8\u05E0\u05E0\u05E8\u05D9\u05D1\u05D5'
                        },
                        'Chagos': {
                            'exemplarCity': '\u05E6\u05F3\u05D0\u05D2\u05D5\u05E1'
                        },
                        'Christmas': {
                            'exemplarCity': '\u05E7\u05E8\u05D9\u05E1\u05DE\u05E1'
                        },
                        'Cocos': {
                            'exemplarCity': '\u05E7\u05D5\u05E7\u05D5\u05E1'
                        },
                        'Comoro': {
                            'exemplarCity': '\u05E7\u05D5\u05DE\u05D5\u05E8\u05D5'
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
                            'exemplarCity': '\u05E2\u05D9\u05E8 \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2\u05D4'
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
                            'exemplarCity': '\u05E8\u05D5\u05EA\u05F3\u05E8\u05D4'
                        },
                        'Palmer': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E4\u05D0\u05DC\u05DE\u05E8'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u05DE\u05E7\u05DE\u05E8\u05D3\u05D5'
                        },
                        'Vostok': {
                            'exemplarCity': '\u05D5\u05D5\u05E1\u05D8\u05D5\u05E7'
                        },
                        'Syowa': {
                            'exemplarCity': '\u05E9\u05D5\u05D9\u05D4'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u05D4\u05E7\u05D5\u05D8\u05D1 \u05D4\u05D3\u05E8\u05D5\u05DE\u05D9'
                        },
                        'Casey': {
                            'exemplarCity': '\u05E7\u05D0\u05E1\u05D9\u05D9'
                        },
                        'Davis': {
                            'exemplarCity': '\u05D3\u05D9\u05D9\u05D5\u05D9\u05E1'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u05D3\u05D5\u05DE\u05D5\u05DF \u05D3\u05F3\u05D0\u05D5\u05E8\u05D5\u05D5\u05D9'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u05DE\u05E7\u05E8\u05D9'
                        },
                        'Mawson': {
                            'exemplarCity': '\u05DE\u05D0\u05D5\u05E1\u05D5\u05DF'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u05DC\u05D5\u05E0\u05D2\u05D9\u05D9\u05E8\u05D1\u05D9\u05D0\u05DF'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D8\u05D5\u05E8\u05E0\u05D8\u05D5'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u05D8\u05D9\u05D7\u05D5\u05D0\u05E0\u05D4'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u05EA\u05F3\u05D0\u05E0\u05D3\u05E8 \u05D1\u05D9\u05D9'
                        },
                        'Thule': {
                            'exemplarCity': '\u05D8\u05D5\u05DC\u05D4'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u05D8\u05D2\u05D5\u05E1\u05D9\u05D2\u05DC\u05E4\u05D4'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u05E1\u05D5\u05D5\u05D9\u05E4\u05D8 \u05E7\u05E8\u05E0\u05D8'
                        },
                        'Chicago': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E9\u05D9\u05E7\u05D2\u05D5'
                        },
                        'Cayman': {
                            'exemplarCity': '\u05E7\u05D9\u05D9\u05DE\u05DF'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u05E7\u05D0\u05D9\u05D9\u05DF'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u05E7\u05D8\u05DE\u05E8\u05E7\u05D4'
                        },
                        'Caracas': {
                            'exemplarCity': '\u05E7\u05E8\u05D0\u05E7\u05E1'
                        },
                        'Cancun': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E7\u05E0\u05E7\u05D5\u05DF'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u05E7\u05DE\u05E4\u05D5 \u05D2\u05E8\u05E0\u05D3\u05D4'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u05E7\u05D9\u05D9\u05DE\u05D1\u05E8\u05D9\u05D3\u05D2\u05F3 \u05D1\u05D9\u05D9'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u05D1\u05D5\u05D0\u05E0\u05D5\u05E1 \u05D0\u05D9\u05D9\u05E8\u05E1'
                        },
                        'Boise': {
                            'exemplarCity': '\u05D1\u05D5\u05D9\u05E1\u05D9'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u05D0\u05E1\u05D5\u05E0\u05E1\u05D9\u05D5\u05DF'
                        },
                        'Aruba': {
                            'exemplarCity': '\u05D0\u05E8\u05D5\u05D1\u05D4'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u05E8\u05D9\u05D5 \u05D2\u05D0\u05D9\u05D9\u05D2\u05D5\u05E1'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4/\u05E1\u05D0\u05DF-\u05D7\u05D5\u05D0\u05DF'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u05D0\u05D5\u05E9\u05D5\u05D5\u05D0\u05D9\u05D4'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u05DC\u05D4 \u05E8\u05D9\u05D5\u05D7\u05D4'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u05E1\u05DF \u05DC\u05D5\u05D0\u05D9\u05E1'
                            },
                            'Salta': {
                                'exemplarCity': '\u05E1\u05DC\u05D8\u05D4'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u05D8\u05D5\u05E7\u05D5\u05DE\u05DF'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u05D0\u05E8\u05D0\u05D2\u05D5\u05D0\u05D9\u05E0\u05D4'
                        },
                        'Antigua': {
                            'exemplarCity': '\u05D0\u05E0\u05D8\u05D9\u05D2\u05D5\u05D0\u05D4'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u05D0\u05E0\u05D2\u05D5\u05D5\u05D9\u05DC\u05D4'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u05D0\u05E0\u05E7\u05D5\u05E8\u05D2\u05F3'
                        },
                        'Adak': {
                            'exemplarCity': '\u05D0\u05D3\u05D0\u05E7'
                        },
                        'Bahia': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D1\u05D4\u05D9\u05D0\u05D4'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u05D1\u05D0\u05D4\u05D9\u05D4 \u05D1\u05E0\u05D3\u05E8\u05E1'
                        },
                        'Barbados': {
                            'exemplarCity': '\u05D1\u05E8\u05D1\u05D3\u05D5\u05E1'
                        },
                        'Belem': {
                            'exemplarCity': '\u05D1\u05DC\u05DD'
                        },
                        'Belize': {
                            'exemplarCity': '\u05D1\u05DC\u05D9\u05D6'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u05D1\u05DC\u05D0\u05DF-\u05E1\u05D1\u05DC\u05D5\u05DF'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u05D1\u05D5\u05D0\u05D4 \u05D5\u05D9\u05E1\u05D8\u05D4'
                        },
                        'Bogota': {
                            'exemplarCity': '\u05D1\u05D5\u05D2\u05D5\u05D8\u05D4'
                        },
                        'Curacao': {
                            'exemplarCity': '\u05E7\u05D5\u05E8\u05D0\u05E1\u05D0\u05D5'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u05D3\u05E0\u05DE\u05E8\u05E7\u05E1\u05D4\u05D5\u05D5\u05DF'
                        },
                        'Dawson': {
                            'exemplarCity': '\u05D3\u05D0\u05D5\u05E1\u05D5\u05DF'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D3\u05D5\u05E1\u05D5\u05DF-\u05E7\u05E8\u05D9\u05E7'
                        },
                        'Denver': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D3\u05E0\u05D5\u05D5\u05E8'
                        },
                        'Detroit': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D3\u05D8\u05E8\u05D5\u05D9\u05D8'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u05D0\u05E8\u05DE\u05D5\u05E1\u05D9\u05D5'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u05D5\u05D9\u05E0\u05E1\u05E0\u05E1, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u05E4\u05D9\u05D8\u05E8\u05E1\u05D1\u05D5\u05E8\u05D2, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u05D8\u05DC \u05E1\u05D9\u05D8\u05D9, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            },
                            'Knox': {
                                'exemplarCity': '\u05E0\u05D5\u05E7\u05E1, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            },
                            'Winamac': {
                                'exemplarCity': '\u05D5\u05D9\u05E0\u05DE\u05D0\u05E7, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            },
                            'Marengo': {
                                'exemplarCity': '\u05DE\u05E8\u05E0\u05D2\u05D5, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            },
                            'Vevay': {
                                'exemplarCity': '\u05D5\u05D9\u05D5\u05D5\u05D0\u05D9\u05D9, \u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05D4'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u05D0\u05D9\u05E0\u05D3\u05D9\u05D0\u05E0\u05E4\u05D5\u05DC\u05D9\u05E1'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u05D0\u05D9\u05E0\u05D5\u05D5\u05D9\u05E7'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u05D0\u05D9\u05E7\u05DC\u05D5\u05D0\u05D9\u05D8'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u05D2\u05F3\u05DE\u05D9\u05D9\u05E7\u05D4'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u05D7\u05D5\u05D7\u05D5\u05D9'
                        },
                        'Juneau': {
                            'exemplarCity': '\u05D2\u05F3\u05D5\u05E0\u05D5'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u05D9\u05DC\u05D5\u05E0\u05D9\u05D9\u05E3'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u05D9\u05E7\u05D5\u05D8\u05D0\u05D8'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D5\u05D5\u05D9\u05E0\u05D9\u05E4\u05D5\u05D2'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u05D5\u05D5\u05D9\u05D9\u05D8\u05D4\u05D5\u05E8\u05E1'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D5\u05E0\u05E7\u05D5\u05D1\u05E8'
                        },
                        'Tortola': {
                            'exemplarCity': '\u05D8\u05D5\u05E8\u05D8\u05D5\u05DC\u05D4'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u05E7\u05E8\u05DC\u05E0\u05D3\u05D9\u05D9\u05E7'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u05DE\u05D5\u05E0\u05D8\u05D9\u05E6\u05F3\u05DC\u05D5, \u05E7\u05E0\u05D8\u05D0\u05E7\u05D9'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u05D4\u05D5\u05D5\u05D0\u05E0\u05D4'
                        },
                        'Halifax': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D4\u05DC\u05D9\u05E4\u05E7\u05E1'
                        },
                        'Guyana': {
                            'exemplarCity': '\u05D2\u05D9\u05D0\u05E0\u05D4'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u05D2\u05D5\u05D0\u05D9\u05D0\u05E7\u05D9\u05DC'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u05D2\u05D5\u05D0\u05D8\u05DE\u05DC\u05D4'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u05D2\u05D5\u05D0\u05D3\u05DC\u05D5\u05E4'
                        },
                        'Grenada': {
                            'exemplarCity': '\u05D2\u05E8\u05E0\u05D3\u05D4'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u05D2\u05E8\u05E0\u05D3 \u05D8\u05D5\u05E8\u05E7'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u05D2\u05D5\u05E1 \u05D1\u05D9\u05D9'
                        },
                        'Godthab': {
                            'exemplarCity': '\u05E0\u05D5\u05D0\u05D5\u05E7'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u05D2\u05DC\u05D9\u05D9\u05E1 \u05D1\u05D9\u05D9'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u05E4\u05D5\u05E8\u05D8\u05D0\u05DC\u05D6\u05D4'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u05D0\u05DC \u05E1\u05DC\u05D1\u05D3\u05D5\u05E8'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E0\u05E4\u05D9'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05D0\u05D3\u05DE\u05E0\u05D8\u05D5\u05DF'
                        },
                        'Dominica': {
                            'exemplarCity': '\u05D3\u05D5\u05DE\u05D9\u05E0\u05D9\u05E7\u05D4'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u05E6\u05F3\u05D9\u05D5\u05D5\u05D0\u05D5\u05D5\u05D4'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u05D0\u05D8\u05D9\u05E7\u05D5\u05E7\u05DF'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E7\u05D5\u05E8\u05D3\u05D5\u05D1\u05D4'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u05E7\u05D5\u05E1\u05D8\u05D4 \u05E8\u05D9\u05E7\u05D4'
                        },
                        'Creston': {
                            'exemplarCity': '\u05E7\u05E8\u05E1\u05D8\u05D5\u05DF'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u05E7\u05D5\u05D9\u05D0\u05D1\u05D4'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u05DC\u05D4 \u05E4\u05D0\u05E1'
                        },
                        'Lima': {
                            'exemplarCity': '\u05DC\u05D9\u05DE\u05D4'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DC\u05D5\u05E1-\u05D0\u05E0\u05D2\u05F3\u05DC\u05E1'
                        },
                        'Louisville': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DC\u05D5\u05D0\u05D9\u05E1\u05D5\u05D5\u05D9\u05DC'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u05DC\u05D5\u05D0\u05D5\u05D5\u05E8 \u05E4\u05E8\u05D9\u05E0\u05E1\u05E1 \u05E7\u05D5\u05D5\u05E8\u05D8\u05E8'
                        },
                        'Maceio': {
                            'exemplarCity': '\u05DE\u05D0\u05E1\u05D9\u05D5'
                        },
                        'Managua': {
                            'exemplarCity': '\u05DE\u05E0\u05D2\u05D5\u05D0\u05D4'
                        },
                        'Manaus': {
                            'exemplarCity': '\u05DE\u05E0\u05D0\u05D5\u05E1'
                        },
                        'Marigot': {
                            'exemplarCity': '\u05DE\u05E8\u05D9\u05D2\u05D5'
                        },
                        'Martinique': {
                            'exemplarCity': '\u05DE\u05E8\u05D8\u05D9\u05E0\u05D9\u05E7'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u05DE\u05D8\u05DE\u05D5\u05E8\u05D5\u05E1'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DE\u05D6\u05D8\u05DC\u05DF'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DE\u05E0\u05D3\u05D5\u05D6\u05D4'
                        },
                        'Menominee': {
                            'exemplarCity': '\u05DE\u05E0\u05D5\u05DE\u05D9\u05E0\u05D9'
                        },
                        'Merida': {
                            'exemplarCity': '\u05DE\u05E8\u05D9\u05D3\u05D4'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u05DE\u05D8\u05DC\u05E7\u05D8\u05DC\u05D4'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DE\u05E7\u05E1\u05D9\u05E7\u05D5 \u05E1\u05D9\u05D8\u05D9'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u05DE\u05D9\u05E7\u05DC\u05D5\u05DF'
                        },
                        'Moncton': {
                            'exemplarCity': '\u05DE\u05D5\u05E0\u05E7\u05D8\u05D5\u05DF'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DE\u05D5\u05E0\u05D8\u05E8\u05D9\u05D9'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u05DE\u05D5\u05E0\u05D8\u05D5\u05D5\u05D9\u05D3\u05D0\u05D5'
                        },
                        'Montreal': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05DE\u05D5\u05E0\u05D8\u05E8\u05D9\u05D0\u05D5\u05DC'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u05DE\u05D5\u05E0\u05E1\u05E8\u05D0\u05D8'
                        },
                        'Nassau': {
                            'exemplarCity': '\u05E0\u05E1\u05D0\u05D5'
                        },
                        'New_York': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E0\u05D9\u05D5-\u05D9\u05D5\u05E8\u05E7'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u05E0\u05D9\u05E4\u05D9\u05D2\u05D5\u05DF'
                        },
                        'Nome': {
                            'exemplarCity': '\u05E0\u05D5\u05DD'
                        },
                        'Noronha': {
                            'exemplarCity': '\u05E0\u05D5\u05E8\u05D5\u05E0\u05D4\u05D4'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u05D1\u05D9\u05D5\u05DC\u05D4, \u05E6\u05E4\u05D5\u05DF \u05D3\u05E7\u05D5\u05D8\u05D4'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u05E0\u05D9\u05D5 \u05E1\u05D9\u05D9\u05DC\u05DD, \u05E6\u05E4\u05D5\u05DF \u05D3\u05E7\u05D5\u05D8\u05D4'
                            },
                            'Center': {
                                'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E6\u05E4\u05D5\u05DF \u05D3\u05E7\u05D5\u05D8\u05D4/\u05DE\u05E8\u05DB\u05D6'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u05D0\u05D5\u05D2\u05F3\u05D9\u05E0\u05D0\u05D2\u05D4'
                        },
                        'Panama': {
                            'exemplarCity': '\u05E4\u05E0\u05DE\u05D4'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u05E4\u05E0\u05D2\u05E0\u05D9\u05E8\u05D8\u05D5\u05E0\u05D2'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u05E4\u05E8\u05DE\u05E8\u05D9\u05D1\u05D5'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E4\u05D9\u05E0\u05D9\u05E7\u05E1'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u05E4\u05D5\u05E8\u05D8 \u05D0\u05D5 \u05E4\u05E8\u05D0\u05E0\u05E1'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u05E4\u05D5\u05E8\u05D8 \u05D0\u05D5\u05E3 \u05E1\u05E4\u05D9\u05D9\u05DF'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u05E4\u05D5\u05E8\u05D8\u05D5 \u05D5\u05D5\u05DC\u05D4\u05D5'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u05E4\u05D5\u05D0\u05E8\u05D8\u05D5 \u05E8\u05D9\u05E7\u05D5'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u05E8\u05D9\u05D9\u05E0\u05D9 \u05E8\u05D9\u05D1\u05E8'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u05E8\u05E0\u05E7\u05D9\u05DF \u05D0\u05D9\u05E0\u05DC\u05D8'
                        },
                        'Recife': {
                            'exemplarCity': '\u05E8\u05E1\u05D9\u05E4\u05D4'
                        },
                        'Regina': {
                            'exemplarCity': '\u05E8\u05D2\u05F3\u05D9\u05E0\u05D4'
                        },
                        'Resolute': {
                            'exemplarCity': '\u05E8\u05D6\u05D5\u05DC\u05D5\u05D8'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u05E8\u05D9\u05D0\u05D5 \u05D1\u05E8\u05E0\u05E6\u05F3\u05D5'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u05E1\u05E0\u05D8\u05D4 \u05D0\u05D9\u05E1\u05D1\u05DC'
                        },
                        'Santarem': {
                            'exemplarCity': '\u05E1\u05E0\u05D8\u05E8\u05DD'
                        },
                        'Santiago': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E1\u05E0\u05D8\u05D9\u05D0\u05D2\u05D5'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u05E1\u05E0\u05D8\u05D5 \u05D3\u05D5\u05DE\u05D9\u05E0\u05D2\u05D5'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E1\u05D0\u05DF-\u05E4\u05D0\u05D5\u05DC\u05D5'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u05E1\u05E7\u05D5\u05E8\u05E1\u05D1\u05D9\u05E1\u05D5\u05E0\u05D3'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E9\u05D9\u05E4\u05E8\u05D5\u05E7'
                        },
                        'Sitka': {
                            'exemplarCity': '\u05E1\u05D9\u05D8\u05E7\u05D4'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05D1\u05E8\u05EA\u05DC\u05DE\u05D9'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05D2\u05F3\u05D5\u05E0\u05E1'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05E7\u05D9\u05D8\u05E1'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05DC\u05D5\u05E1\u05D9\u05D4'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05EA\u05D5\u05DE\u05D0\u05E1'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05D5\u05D9\u05E0\u05E1\u05E0\u05D8'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u05E1\u05D0\u05D5\u05EA\u05F3 \u05D2\u05F3\u05D5\u05E8\u05D2\u05F3\u05D9\u05D4'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u05E8\u05D9\u05D9\u05E7\u05D9\u05D0\u05D5\u05D5\u05D9\u05E7'
                        },
                        'Stanley': {
                            'exemplarCity': '\u05E1\u05D8\u05E0\u05DC\u05D9'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u05E1\u05E0\u05D8 \u05D4\u05DC\u05E0\u05D4'
                        },
                        'Azores': {
                            'exemplarCity': '\u05D4\u05D0\u05D9\u05D9\u05DD \u05D4\u05D0\u05D6\u05D5\u05E8\u05D9\u05DD'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u05D1\u05E8\u05DE\u05D5\u05D3\u05D4'
                        },
                        'Canary': {
                            'exemplarCity': '\u05D0\u05D8\u05DC\u05E0\u05D8\u05D9/\u05E7\u05E0\u05E8\u05D9'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u05DB\u05E3 \u05D5\u05E8\u05D3\u05D4'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u05E4\u05D0\u05E8\u05D5'
                        },
                        'Madeira': {
                            'exemplarCity': '\u05DE\u05D3\u05D9\u05D9\u05E8\u05D4'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05DC\u05D5'
                        },
                        'Moscow': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4/\u05DE\u05D5\u05E1\u05E7\u05D1\u05D4'
                        },
                        'Monaco': {
                            'exemplarCity': '\u05DE\u05D5\u05E0\u05E7\u05D5'
                        },
                        'Minsk': {
                            'exemplarCity': '\u05DE\u05D9\u05E0\u05E1\u05E7'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u05DE\u05E8\u05D9\u05D4\u05DE\u05DF'
                        },
                        'Malta': {
                            'exemplarCity': '\u05DE\u05DC\u05D8\u05D4'
                        },
                        'Madrid': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4/\u05DE\u05D3\u05E8\u05D9\u05D3'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u05DC\u05D5\u05E7\u05E1\u05DE\u05D1\u05D5\u05E8\u05D2'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D1\u05E8\u05D9\u05D8\u05D9'
                            },
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4/\u05DC\u05D5\u05E0\u05D3\u05D5\u05DF'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u05DC\u05D5\u05D1\u05DC\u05D9\u05D0\u05E0\u05D4'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4/\u05DC\u05D9\u05E1\u05D1\u05D5\u05DF'
                        },
                        'Kiev': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4/\u05E7\u05D9\u05D9\u05D1'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u05E7\u05DC\u05D9\u05E0\u05D9\u05E0\u05D2\u05E8\u05D3'
                        },
                        'Jersey': {
                            'exemplarCity': '\u05D2\u05F3\u05E8\u05E1\u05D9'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u05D0\u05D9\u05E1\u05D8\u05E0\u05D1\u05D5\u05DC'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u05D4\u05D0\u05D9 \u05DE\u05D0\u05DF'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u05D1\u05D5\u05E7\u05E8\u05E9\u05D8'
                        },
                        'Brussels': {
                            'exemplarCity': '\u05D1\u05E8\u05D9\u05E1\u05DC'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u05D1\u05E8\u05D8\u05D9\u05E1\u05DC\u05D1\u05D4'
                        },
                        'Berlin': {
                            'exemplarCity': '\u05D1\u05E8\u05DC\u05D9\u05DF'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u05D1\u05DC\u05D2\u05E8\u05D3'
                        },
                        'Athens': {
                            'exemplarCity': '\u05D0\u05EA\u05D5\u05E0\u05D4'
                        },
                        'Andorra': {
                            'exemplarCity': '\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u05D0\u05DE\u05E1\u05D8\u05E8\u05D3\u05DD'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u05E1\u05D9\u05DE\u05E4\u05E8\u05D5\u05E4\u05D5\u05DC'
                        },
                        'Skopje': {
                            'exemplarCity': '\u05E1\u05E7\u05D5\u05E4\u05D9\u05D4'
                        },
                        'Sofia': {
                            'exemplarCity': '\u05E1\u05D5\u05E4\u05D9\u05D4'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u05E9\u05D8\u05D5\u05E7\u05D4\u05D5\u05DC\u05DD'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u05D8\u05DC\u05D9\u05DF'
                        },
                        'Tirane': {
                            'exemplarCity': '\u05D8\u05D9\u05E8\u05D0\u05E0\u05D4'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u05D0\u05D5\u05D6\u05F3\u05D4\u05D5\u05E8\u05D5\u05D3'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u05D5\u05D0\u05D3\u05D5\u05D6'
                        },
                        'Zurich': {
                            'exemplarCity': '\u05E6\u05D9\u05E8\u05D9\u05DA'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u05D6\u05E4\u05D5\u05E8\u05D9\u05D6\u05F3\u05D9\u05D4'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u05D6\u05D2\u05E8\u05D1'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u05D5\u05E8\u05E9\u05D4'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u05D5\u05D5\u05DC\u05D2\u05D5\u05D2\u05E8\u05D3'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u05D5\u05D9\u05DC\u05E0\u05D4'
                        },
                        'Vienna': {
                            'exemplarCity': '\u05D5\u05D9\u05E0\u05D4'
                        },
                        'Vatican': {
                            'exemplarCity': '\u05D5\u05EA\u05D9\u05E7\u05DF'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u05E1\u05E8\u05D9\u05D9\u05D1\u05D5'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u05E1\u05DF \u05DE\u05E8\u05D9\u05E0\u05D5'
                        },
                        'Samara': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4/\u05E1\u05DE\u05E8\u05D4'
                        },
                        'Rome': {
                            'exemplarCity': '\u05E8\u05D5\u05DE\u05D0'
                        },
                        'Riga': {
                            'exemplarCity': '\u05E8\u05D9\u05D2\u05D4'
                        },
                        'Prague': {
                            'exemplarCity': '\u05E4\u05E8\u05D0\u05D2'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u05E4\u05D5\u05D3\u05D2\u05D5\u05E8\u05D9\u05E7\u05D4'
                        },
                        'Paris': {
                            'exemplarCity': '\u05E4\u05E8\u05D9\u05D6'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u05D4\u05DC\u05E1\u05D9\u05E0\u05E7\u05D9'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u05D2\u05E8\u05E0\u05D6\u05D9'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u05D2\u05D9\u05D1\u05E8\u05DC\u05D8\u05E8'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D9\u05E8\u05D9'
                            },
                            'exemplarCity': '\u05D3\u05D1\u05DC\u05D9\u05DF'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u05E7\u05D5\u05E4\u05E0\u05D4\u05D2\u05DF'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u05E6\u05F3\u05D9\u05E1\u05D9\u05E0\u05D0\u05D5'
                        },
                        'Busingen': {
                            'exemplarCity': '\u05D1\u05D5\u05D6\u05D9\u05E0\u05D2\u05DF'
                        },
                        'Budapest': {
                            'exemplarCity': '\u05D1\u05D5\u05D3\u05E4\u05E9\u05D8'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u05DC\u05D9\u05D1\u05E8\u05D5\u05D5\u05D9\u05DC'
                        },
                        'Lagos': {
                            'exemplarCity': '\u05DC\u05D2\u05D5\u05E1'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u05E7\u05D9\u05E0\u05E9\u05E1\u05D4'
                        },
                        'Kigali': {
                            'exemplarCity': '\u05E7\u05D9\u05D2\u05DC\u05D9'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u05D7\u05E8\u05D8\u05D5\u05DD'
                        },
                        'Kampala': {
                            'exemplarCity': '\u05E7\u05DE\u05E4\u05D0\u05DC\u05D4'
                        },
                        'Juba': {
                            'exemplarCity': '\u05D2\u05F3\u05D5\u05D1\u05D4'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u05D9\u05D5\u05D4\u05E0\u05E1\u05D1\u05D5\u05E8\u05D2'
                        },
                        'Harare': {
                            'exemplarCity': '\u05D4\u05E8\u05D0\u05E8\u05D4'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u05D2\u05D1\u05D5\u05E8\u05D5\u05E0\u05D4'
                        },
                        'Freetown': {
                            'exemplarCity': '\u05E4\u05E8\u05D9\u05D8\u05D0\u05D5\u05DF'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u05D0\u05DC \u05E2\u05D9\u05D5\u05DF'
                        },
                        'Douala': {
                            'exemplarCity': '\u05D3\u05D5\u05D0\u05DC\u05D4'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u05D2\u05F3\u05D9\u05D1\u05D5\u05D8\u05D9'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u05D3\u05D0\u05E8 \u05D0-\u05E1\u05DC\u05D0\u05DD'
                        },
                        'Dakar': {
                            'exemplarCity': '\u05D3\u05E7\u05D0\u05E8'
                        },
                        'Banjul': {
                            'exemplarCity': '\u05D1\u05E0\u05D2\u05F3\u05D5\u05DC'
                        },
                        'Bangui': {
                            'exemplarCity': '\u05D1\u05E0\u05D2\u05D5\u05D0\u05D9'
                        },
                        'Bamako': {
                            'exemplarCity': '\u05D1\u05DE\u05D0\u05E7\u05D5'
                        },
                        'Asmera': {
                            'exemplarCity': '\u05D0\u05E1\u05DE\u05E8\u05D4'
                        },
                        'Malabo': {
                            'exemplarCity': '\u05DE\u05DC\u05D1\u05D5'
                        },
                        'Maputo': {
                            'exemplarCity': '\u05DE\u05D0\u05E4\u05D5\u05D8\u05D5'
                        },
                        'Maseru': {
                            'exemplarCity': '\u05DE\u05E1\u05E8\u05D5'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u05D0\u05DE\u05D1\u05D0\u05D1\u05D0\u05E0\u05D4'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u05DE\u05D5\u05D2\u05D3\u05D9\u05E9\u05D5'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u05DE\u05D5\u05E0\u05E8\u05D5\u05D1\u05D9\u05D4'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u05E0\u05D9\u05D9\u05E8\u05D5\u05D1\u05D9'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u05E0\u05D2\u05F3\u05DE\u05E0\u05D4'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u05D5\u05D9\u05E0\u05D3\u05D4\u05D5\u05E7'
                        },
                        'Tunis': {
                            'exemplarCity': '\u05D8\u05D5\u05E0\u05D9\u05E1'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u05D8\u05E8\u05D9\u05E4\u05D5\u05DC\u05D9'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u05E1\u05D0\u05D5 \u05D8\u05D5\u05DE\u05D4'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u05E4\u05D5\u05E8\u05D8\u05D5 \u05E0\u05D5\u05D1\u05D5'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u05D5\u05D5\u05D0\u05D2\u05D0\u05D3\u05D5\u05D2\u05D5'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u05E0\u05D5\u05D0\u05E7\u05E6\u05F3\u05D5\u05D8'
                        },
                        'Niamey': {
                            'exemplarCity': '\u05E0\u05D9\u05D0\u05DE\u05D9\u05D9'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u05DC\u05D5\u05E1\u05E7\u05D4'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u05DC\u05D5\u05D1\u05D5\u05DE\u05D1\u05D0\u05E9\u05D9'
                        },
                        'Luanda': {
                            'exemplarCity': '\u05DC\u05D5\u05D0\u05E0\u05D3\u05D4'
                        },
                        'Lome': {
                            'exemplarCity': '\u05DC\u05D5\u05DE\u05D4'
                        },
                        'Conakry': {
                            'exemplarCity': '\u05E7\u05D5\u05E0\u05D0\u05E7\u05E8\u05D9'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u05E1\u05D0\u05D5\u05D8\u05D4'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u05E7\u05D6\u05D1\u05DC\u05E0\u05E7\u05D4'
                        },
                        'Cairo': {
                            'exemplarCity': '\u05E7\u05D4\u05D9\u05E8'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u05D1\u05D5\u05D2\u05F3\u05D5\u05DE\u05D1\u05D5\u05E8\u05D4'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u05D1\u05E8\u05D6\u05D5\u05D5\u05D9\u05DC'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u05D1\u05DC\u05E0\u05D8\u05D9\u05E8'
                        },
                        'Bissau': {
                            'exemplarCity': '\u05D1\u05D9\u05E1\u05D0\u05D5'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u05D0\u05D1\u05D9\u05D2\u05F3\u05D0\u05DF'
                        },
                        'Accra': {
                            'exemplarCity': '\u05D0\u05E7\u05E8\u05D4'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u05D0\u05D3\u05D9\u05E1 \u05D0\u05D1\u05D1\u05D4'
                        },
                        'Algiers': {
                            'exemplarCity': '\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u05D0\u05E1\u05D9\u05D4/\u05E9\u05E0\u05D7\u05D0\u05D9'
                        },
                        'Seoul': {
                            'exemplarCity': '\u05E1\u05D9\u05D0\u05D5\u05DC'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u05D0\u05E1\u05D9\u05D4/\u05E1\u05DE\u05E8\u05E7\u05E0\u05D3'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u05E1\u05D7\u05DC\u05D9\u05DF'
                        },
                        'Saigon': {
                            'exemplarCity': '\u05D4\u05D5 \u05E6\u05F3\u05D9 \u05DE\u05D9\u05DF \u05E1\u05D9\u05D8\u05D9'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u05E8\u05D9\u05D0\u05D3'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u05E8\u05E0\u05D2\u05D5\u05DF'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u05E7\u05D9\u05D6\u05D9\u05DC\u05D5\u05E8\u05D3\u05D4'
                        },
                        'Qatar': {
                            'exemplarCity': '\u05E7\u05D8\u05D0\u05E8'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u05E4\u05D9\u05D5\u05E0\u05D2\u05D9\u05D0\u05E0\u05D2'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u05E4\u05D5\u05E0\u05D8\u05D9\u05D0\u05E0\u05E7'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u05E4\u05E0\u05D5\u05DD \u05E4\u05DF'
                        },
                        'Oral': {
                            'exemplarCity': '\u05D0\u05E1\u05D9\u05D4/\u05D0\u05D5\u05E8\u05DC'
                        },
                        'Omsk': {
                            'exemplarCity': '\u05D0\u05D9\u05D4/\u05D0\u05D5\u05DE\u05E1\u05E7'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u05D0\u05E1\u05D9\u05D4/\u05E0\u05D5\u05D1\u05D5\u05E1\u05D9\u05D1\u05D9\u05E8\u05E1\u05E7'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u05D1\u05D2\u05D3\u05D3'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u05E6\u05F3\u05D5\u05E0\u05D2\u05E7\u05D9\u05E0\u05D2'
                        },
                        'Colombo': {
                            'exemplarCity': '\u05E7\u05D5\u05DC\u05D5\u05DE\u05D1\u05D5'
                        },
                        'Damascus': {
                            'exemplarCity': '\u05D3\u05DE\u05E9\u05E7'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u05D3\u05D0\u05E7\u05D4'
                        },
                        'Dili': {
                            'exemplarCity': '\u05D3\u05D9\u05DC\u05D9'
                        },
                        'Dubai': {
                            'exemplarCity': '\u05D3\u05D5\u05D1\u05D0\u05D9'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u05D3\u05D5\u05E9\u05E0\u05D1\u05D4'
                        },
                        'Gaza': {
                            'exemplarCity': '\u05E2\u05D6\u05D4'
                        },
                        'Harbin': {
                            'exemplarCity': '\u05D7\u05E8\u05D1\u05D9\u05DF'
                        },
                        'Hebron': {
                            'exemplarCity': '\u05D7\u05D1\u05E8\u05D5\u05DF'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2'
                        },
                        'Hovd': {
                            'exemplarCity': '\u05D7\u05D5\u05D1\u05D3'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u05D0\u05D9\u05E8\u05E7\u05D5\u05D8\u05E1\u05E7'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u05D0\u05E1\u05D9\u05D4/\u05D2\u05F3\u05E7\u05E8\u05D8\u05D4'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u05D2\u05F3\u05D0\u05D9\u05D0\u05E4\u05D5\u05E8\u05D4'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u05D0\u05D5\u05DC\u05D0\u05D0\u05E0\u05D1\u05D8\u05D0\u05E8'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u05D0\u05D5\u05E8\u05D5\u05DE\u05E7\u05D9'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u05D0\u05D5\u05E1\u05D8-\u05E0\u05E8\u05D4'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u05D4\u05D0\u05E0\u05D5\u05D9'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u05D5\u05DC\u05D3\u05D9\u05D5\u05D5\u05E1\u05D8\u05D5\u05E7'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u05D9\u05E7\u05D5\u05D8\u05E1\u05E7'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u05D9\u05E7\u05D8\u05E8\u05D9\u05E0\u05D1\u05D5\u05E8\u05D2'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u05D9\u05E8\u05D5\u05D5\u05D0\u05DF'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u05D8\u05D5\u05E7\u05D9\u05D5'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u05EA\u05F3\u05D9\u05DE\u05E4\u05D5'
                        },
                        'Tehran': {
                            'exemplarCity': '\u05D8\u05D4\u05E8\u05DF'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u05D8\u05D1\u05D9\u05DC\u05D9\u05E1\u05D9'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u05D0\u05E1\u05D9\u05D4/\u05D8\u05E9\u05E7\u05E0\u05D8'
                        },
                        'Taipei': {
                            'exemplarCity': '\u05D8\u05D0\u05D9\u05E4\u05D9\u05D9'
                        },
                        'Singapore': {
                            'exemplarCity': '\u05E1\u05D9\u05E0\u05D2\u05E4\u05D5\u05E8'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u05D0\u05E9\u05D2\u05D1\u05D8'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u05D0\u05E7\u05D8\u05D5\u05D1\u05D4'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u05D0\u05E7\u05D8\u05D0\u05D5'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u05D0\u05E0\u05D3\u05D9\u05E8'
                        },
                        'Amman': {
                            'exemplarCity': '\u05E2\u05DE\u05D0\u05DF'
                        },
                        'Almaty': {
                            'exemplarCity': '\u05D0\u05DC\u05DE\u05D0\u05D8\u05D9'
                        },
                        'Aden': {
                            'exemplarCity': '\u05E2\u05D3\u05DF'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u05D1\u05D7\u05E8\u05D9\u05D9\u05DF'
                        },
                        'Baku': {
                            'exemplarCity': '\u05D1\u05D0\u05E7\u05D5'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u05D1\u05E0\u05D2\u05E7\u05D5\u05E7'
                        },
                        'Beirut': {
                            'exemplarCity': '\u05D1\u05D9\u05D9\u05E8\u05D5\u05EA'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u05D1\u05D9\u05E9\u05E7\u05E7'
                        },
                        'Brunei': {
                            'exemplarCity': '\u05D1\u05E8\u05D5\u05E0\u05D9\u05D9'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u05E7\u05D5\u05DC\u05E7\u05D8\u05D4'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u05E6\u05F3\u05D5\u05D0\u05D9\u05D1\u05DC\u05E1\u05D0\u05DF'
                        },
                        'Kabul': {
                            'exemplarCity': '\u05E7\u05D0\u05D1\u05D5\u05DC'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u05E7\u05DE\u05E6\u05F3\u05D8\u05E7\u05D4'
                        },
                        'Karachi': {
                            'exemplarCity': '\u05E7\u05E8\u05E6\u05F3\u05D9'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u05E7\u05E9\u05D2\u05E8'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u05E7\u05D8\u05DE\u05E0\u05D3\u05D5'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u05D7\u05E0\u05D3\u05D9\u05D2\u05D4'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u05E7\u05E8\u05E1\u05E0\u05D5\u05D9\u05D0\u05E8\u05E1\u05E7'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u05E7\u05D5\u05D0\u05DC\u05D4 \u05DC\u05D5\u05DE\u05E4\u05D5\u05E8'
                        },
                        'Kuching': {
                            'exemplarCity': '\u05E7\u05D5\u05E6\u05F3\u05D9\u05E0\u05D2'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u05DB\u05D5\u05D5\u05D9\u05EA'
                        },
                        'Macau': {
                            'exemplarCity': '\u05DE\u05E7\u05D0\u05D5'
                        },
                        'Magadan': {
                            'exemplarCity': '\u05DE\u05D2\u05D3\u05DF'
                        },
                        'Makassar': {
                            'exemplarCity': '\u05DE\u05D0\u05E7\u05D0\u05E1\u05D0\u05E8'
                        },
                        'Manila': {
                            'exemplarCity': '\u05DE\u05E0\u05D9\u05DC\u05D4'
                        },
                        'Muscat': {
                            'exemplarCity': '\u05DE\u05D5\u05E1\u05E7\u05D8'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u05E0\u05D9\u05E7\u05D5\u05E1\u05D9\u05D4'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u05E0\u05D5\u05D1\u05D5\u05E7\u05D5\u05D6\u05E0\u05D8\u05E1\u05E7'
                        }
                    }
                },
                'metazone': {
                    'Tajikistan': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D2\u05F3\u05D9\u05E7\u05D9\u05E1\u05D8\u05DF'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D0\u05D9\u05E4\u05D9\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D8\u05D0\u05D9\u05E4\u05D9\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D8\u05D0\u05D9\u05E4\u05D9\u05D9'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D4\u05D9\u05D8\u05D9'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05D9\u05D9\u05D5\u05D5\u05D4'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05D5\u05E8\u05D9\u05E0\u05D0\u05DD'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D3\u05E8\u05D5\u05DD \u05D2\u05F3\u05D5\u05E8\u05D2\u05F3\u05D9\u05D4'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E9\u05DC\u05DE\u05D4'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05D9\u05E0\u05D2\u05E4\u05D5\u05E8'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E1\u05D9\u05D9\u05E9\u05DC'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05DE\u05D5\u05D0\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E1\u05DE\u05D5\u05D0\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E1\u05DE\u05D5\u05D0\u05D4'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05DE\u05E8\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E1\u05DE\u05E8\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E1\u05DE\u05E8\u05D4'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05D7\u05DC\u05D9\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E1\u05D7\u05DC\u05D9\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E1\u05D7\u05DC\u05D9\u05DF'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D5\u05EA\u05F3\u05E8\u05D4'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D0\u05D5\u05E0\u05D9\u05D5\u05DF'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05D5\u05E0\u05D0\u05E4\u05D9'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05D9\u05D8\u05E7\u05E8\u05DF'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6 \u05D0\u05E8\u05D4\u05F4\u05D1 (\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4/\u05E9\u05D9\u05E7\u05D2\u05D5)',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E8\u05DB\u05D6 \u05D0\u05E8\u05D4\u05F4\u05D1',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5, \u05E6\u05E4\u05D5\u05DF \u05D0\u05DE\u05E8\u05D9\u05E7\u05D4'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05DE\u05D6\u05D5\u05E0\u05E1',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05DE\u05D6\u05D5\u05E0\u05E1',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05DE\u05D6\u05D5\u05E0\u05E1'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05DC\u05E1\u05E7\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05DC\u05E1\u05E7\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05DC\u05E1\u05E7\u05D4'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E4\u05E8\u05D9\u05E7\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E4\u05E8\u05D9\u05E7\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5, \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E4\u05E8\u05D9\u05E7\u05D4'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D3\u05E8\u05D5\u05DD \u05D0\u05E4\u05E8\u05D9\u05E7\u05D4'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05D0\u05E4\u05E8\u05D9\u05E7\u05D4'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6 \u05D0\u05E4\u05E8\u05D9\u05E7\u05D4'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05E4\u05D2\u05E0\u05D9\u05E1\u05D8\u05DF'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D7\u05D5\u05E3 \u05D4\u05DE\u05D6\u05E8\u05D7\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E9\u05DC \u05D4\u05D7\u05D5\u05E3 \u05D4\u05DE\u05D6\u05E8\u05D7\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D6\u05E8\u05D7 \u05D0\u05E8\u05D4\u05F4\u05D1'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D6\u05D5\u05E8 \u05D4\u05D4\u05E8\u05D9\u05DD \u05D1\u05D0\u05E8\u05D4\u05F4\u05D1 (\u05D3\u05E0\u05D5\u05D5\u05E8)',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05D4\u05E8\u05D9\u05DD',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5, \u05D0\u05D6\u05D5\u05E8 \u05D4\u05D4\u05E8\u05D9\u05DD \u05D1\u05D0\u05E8\u05D4\u05F4\u05D1'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E8\u05D4\u05F4\u05D1 (\u05DC\u05D5\u05E1 \u05D0\u05E0\u05D2\u05F3\u05DC\u05E1)',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D4\u05D0\u05D5\u05E7\u05D9\u05D9\u05E0\u05D5\u05E1 \u05D4\u05E9\u05E7\u05D8',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5, \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E8\u05D4\u05F4\u05D1 (\u05DC\u05D5\u05E1 \u05D0\u05E0\u05D2\u05F3\u05DC\u05E1)'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05E0\u05D3\u05D9\u05E8',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05E0\u05D3\u05D9\u05E8',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05E0\u05D3\u05D9\u05E8'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05E6\u05D9 \u05D4\u05D0\u05D9 \u05E2\u05E8\u05D1',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D7\u05E6\u05D9 \u05D4\u05D0\u05D9 \u05E2\u05E8\u05D1',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D7\u05E6\u05D9 \u05D4\u05D0\u05D9 \u05E2\u05E8\u05D1'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E2\u05E8\u05D1 \u05D0\u05E8\u05D2\u05E0\u05D8\u05D9\u05E0\u05D4'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05E8\u05DE\u05E0\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05E8\u05DE\u05E0\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05E8\u05DE\u05E0\u05D9\u05D4'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05D9\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05E8\u05E3 \u05E1\u05D9\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E1\u05D9\u05DF'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E6\u05F3\u05D5\u05D9\u05D1\u05DC\u05E1\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E6\u05F3\u05D5\u05D9\u05D1\u05DC\u05E1\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E6\u05F3\u05D5\u05D9\u05D1\u05DC\u05E1\u05DF'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9 \u05D7\u05D2 \u05D4\u05DE\u05D5\u05DC\u05D3'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E7\u05D5\u05E7\u05D5\u05E1'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D5\u05DC\u05D5\u05DE\u05D1\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E7\u05D5\u05DC\u05D5\u05DE\u05D1\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E7\u05D5\u05DC\u05D5\u05DE\u05D1\u05D9\u05D4'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E7\u05D5\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D9\u05D9 \u05E7\u05D5\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D7\u05E6\u05D9\u05EA \u05D4\u05E7\u05D9\u05E5 \u05D0\u05D9\u05D9 \u05E7\u05D5\u05E7'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D5\u05D1\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E7\u05D5\u05D1\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E7\u05D5\u05D1\u05D4'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D3\u05D9\u05D5\u05D5\u05D9\u05E1'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D3\u05D5\u05DE\u05D5\u05DF \u05D3\u05F3\u05D0\u05D5\u05E8\u05D5\u05D5\u05D9\u05DC'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05D8\u05D9\u05DE\u05D5\u05E8'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9 \u05D4\u05E4\u05E1\u05D7\u05D0',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D9 \u05D4\u05E4\u05E1\u05D7\u05D0',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D9 \u05D4\u05E4\u05E1\u05D7\u05D0'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05E7\u05D5\u05D5\u05D3\u05D5\u05E8'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D9\u05E8\u05D5\u05E4\u05D4'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E4\u05D5\u05E7\u05DC\u05E0\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D9\u05D9 \u05E4\u05D5\u05E7\u05DC\u05E0\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D9\u05D9 \u05E4\u05D5\u05E7\u05DC\u05E0\u05D3'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D5\u05E7\u05DC\u05D0\u05D5'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D5\u05E0\u05D2\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D8\u05D5\u05E0\u05D2\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D8\u05D5\u05E0\u05D2\u05D4'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E6\u05F3\u05D5\u05E7'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D5\u05E8\u05E7\u05DE\u05E0\u05D9\u05E1\u05D8\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D8\u05D5\u05E8\u05E7\u05DE\u05E0\u05D9\u05E1\u05D8\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D8\u05D5\u05E8\u05E7\u05DE\u05E0\u05D9\u05E1\u05D8\u05DF'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D8\u05D5\u05D1\u05D0\u05DC\u05D5'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D5\u05E8\u05D5\u05D2\u05D5\u05D5\u05D0\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D5\u05E8\u05D5\u05D2\u05D5\u05D5\u05D0\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D5\u05E8\u05D5\u05D2\u05D5\u05D5\u05D0\u05D9'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D5\u05D6\u05D1\u05E7\u05D9\u05E1\u05D8\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D5\u05D6\u05D1\u05E7\u05D9\u05E1\u05D8\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D5\u05D6\u05D1\u05E7\u05D9\u05E1\u05D8\u05DF'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D5\u05E0\u05D5\u05D0\u05D8\u05D5',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D5\u05E0\u05D5\u05D0\u05D8\u05D5',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D5\u05E0\u05D5\u05D0\u05D8\u05D5'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D9\u05E7\u05D8\u05E8\u05D9\u05E0\u05D1\u05D5\u05E8\u05D2',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D9\u05E7\u05D8\u05E8\u05D9\u05E0\u05D1\u05D5\u05E8\u05D2',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D9\u05E7\u05D8\u05E8\u05D9\u05E0\u05D1\u05D5\u05E8\u05D2'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D9\u05E7\u05D5\u05D8\u05E1\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D9\u05E7\u05D5\u05D8\u05E1\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D9\u05E7\u05D5\u05D8\u05E1\u05E7'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D5\u05D5\u05D0\u05DC\u05D9\u05E1 \u05D5\u05E4\u05D5\u05D8\u05D5\u05E0\u05D4'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D0\u05D9 \u05D5\u05D9\u05D9\u05E7'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D5\u05D5\u05E1\u05D8\u05D5\u05E7'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D5\u05D5\u05DC\u05D2\u05D5\u05D2\u05E8\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D5\u05D5\u05DC\u05D2\u05D5\u05D2\u05E8\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D5\u05D5\u05DC\u05D2\u05D5\u05D2\u05E8\u05D3'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D5\u05DC\u05D3\u05D9\u05D5\u05D5\u05E1\u05D8\u05D5\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D5\u05DC\u05D3\u05D9\u05D5\u05D5\u05E1\u05D8\u05D5\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D5\u05DC\u05D3\u05D9\u05D5\u05D5\u05E1\u05D8\u05D5\u05E7'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D5\u05E0\u05E6\u05D5\u05D0\u05DC\u05D4'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D5\u05D3\u05D5'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05D1\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D7\u05D5\u05D1\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D7\u05D5\u05D1\u05D3'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05E8\u05E3 \u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D0\u05D9\u05D9\u05DD \u05D4\u05D0\u05DC\u05D0\u05D5\u05D8\u05D9\u05D9\u05DD \u05D4\u05D5\u05D5\u05D0\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D4\u05D0\u05D9\u05D9\u05DD \u05D4\u05D0\u05DC\u05D0\u05D5\u05D8\u05D9\u05D9\u05DD \u05D4\u05D5\u05D5\u05D0\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D4\u05D0\u05D9\u05D9\u05DD \u05D4\u05D0\u05DC\u05D0\u05D5\u05D8\u05D9\u05D9\u05DD \u05D4\u05D5\u05D5\u05D0\u05D9'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D2\u05D5\u05D9\u05D0\u05E0\u05D4'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D3\u05D9\u05E0\u05D5\u05EA \u05D4\u05DE\u05E4\u05E8\u05E5'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D2\u05E8\u05D9\u05E0\u05DC\u05E0\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E2\u05E8\u05D1 \u05D2\u05E8\u05D9\u05E0\u05DC\u05E0\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E2\u05E8\u05D1 \u05D2\u05E8\u05D9\u05E0\u05DC\u05E0\u05D3'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05D2\u05E8\u05D9\u05E0\u05DC\u05E0\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05D6\u05E8\u05D7 \u05D2\u05E8\u05D9\u05E0\u05DC\u05E0\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D6\u05E8\u05D7 \u05D2\u05E8\u05D9\u05E0\u05DC\u05E0\u05D3'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D2\u05E8\u05D9\u05E0\u05D9\u05E5\u05F3\u200F'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05D2\u05D9\u05DC\u05D1\u05E8\u05D8'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D2\u05D0\u05D5\u05E8\u05D2\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D2\u05D0\u05D5\u05E8\u05D2\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D2\u05D0\u05D5\u05E8\u05D2\u05D9\u05D4'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D2\u05D0\u05DE\u05D1\u05D9\u05D9\u05E8'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05D2\u05DC\u05D0\u05E4\u05D2\u05D5\u05E1'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D3\u05E8\u05D5\u05DD \u05E6\u05E8\u05E4\u05EA \u05D5\u05D0\u05E0\u05D8\u05D0\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D2\u05D9\u05D0\u05E0\u05D4 \u05D4\u05E6\u05E8\u05E4\u05EA\u05D9\u05EA'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05D9\u05D2\u05F3\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05D9\u05D2\u05F3\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E4\u05D9\u05D2\u05F3\u05D9'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D8\u05DC\u05E0\u05D8\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D8\u05DC\u05E0\u05D8\u05D9 \u05EA\u05E7\u05E0\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D8\u05DC\u05E0\u05D8\u05D9'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6-\u05DE\u05E2\u05E8\u05D1 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E8\u05DB\u05D6 \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E8\u05DB\u05D6 \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D5\u05E1\u05D8\u05E8\u05DC\u05D9\u05D4'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D6\u05E8\u05D1\u05D9\u05D9\u05D2\u05F3\u05D0\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D6\u05E8\u05D1\u05D9\u05D9\u05D2\u05F3\u05D0\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D6\u05E8\u05D1\u05D9\u05D9\u05D2\u05F3\u05D0\u05DF'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D6\u05D5\u05E8\u05E1',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D6\u05D5\u05E8\u05E1',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D6\u05D5\u05E8\u05E1'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D1\u05E0\u05D2\u05DC\u05D3\u05E9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D1\u05E0\u05D2\u05DC\u05D3\u05E9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D1\u05E0\u05D2\u05DC\u05D3\u05E9'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D1\u05D4\u05D5\u05D8\u05DF'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D1\u05D5\u05DC\u05D9\u05D1\u05D9\u05D4'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D1\u05E8\u05D6\u05D9\u05DC\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D1\u05E8\u05D6\u05D9\u05DC\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D1\u05E8\u05D6\u05D9\u05DC\u05D9\u05D4'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D1\u05E8\u05D5\u05E0\u05D9\u05D9 \u05D3\u05D0\u05E8\u05D5\u05E1\u05DC\u05D0\u05DD'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05D9\u05E4 \u05D5\u05E8\u05D3\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E7\u05D9\u05D9\u05E4 \u05D5\u05E8\u05D3\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E7\u05D9\u05D9\u05E4 \u05D5\u05E8\u05D3\u05D4'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E6\u05F3\u05D0\u05DE\u05D5\u05E8\u05D5'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E6\u05F3\u05D8\u05D4\u05D0\u05DD',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E6\u05F3\u05D8\u05D4\u05D0\u05DD',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E6\u05F3\u05D8\u05D4\u05D0\u05DD'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E6\u05F3\u05D9\u05DC\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E6\u05F3\u05D9\u05DC\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E6\u05F3\u05D9\u05DC\u05D4'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D0\u05D5\u05E7\u05D9\u05D9\u05E0\u05D5\u05E1 \u05D4\u05D4\u05D5\u05D3\u05D9'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D5\u05D3\u05D5-\u05E1\u05D9\u05DF'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6 \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05D4'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05D4'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05D4'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05E8\u05D0\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D9\u05E8\u05D0\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D9\u05E8\u05D0\u05DF'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05E8\u05E7\u05D5\u05D8\u05E1\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D9\u05E8\u05E7\u05D5\u05D8\u05E1\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D9\u05E8\u05E7\u05D5\u05D8\u05E1\u05E7'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D9\u05E9\u05E8\u05D0\u05DC'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D9\u05E4\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05E8\u05E3 \u05D9\u05E4\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D9\u05E4\u05DF'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05D8\u05E8\u05D5\u05E4\u05D1\u05DC\u05D5\u05D1\u05E1\u05E7-\u05E7\u05DE\u05E6\u05F3\u05D8\u05E1\u05E7\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05D8\u05E8\u05D5\u05E4\u05D1\u05DC\u05D5\u05D1\u05E1\u05E7-\u05E7\u05DE\u05E6\u05F3\u05D8\u05E1\u05E7\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E4\u05D8\u05E8\u05D5\u05E4\u05D1\u05DC\u05D5\u05D1\u05E1\u05E7-\u05E7\u05DE\u05E6\u05F3\u05D8\u05E1\u05E7\u05D9'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D6\u05E8\u05D7 \u05E7\u05D6\u05D7\u05E1\u05D8\u05DF'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E2\u05E8\u05D1 \u05E7\u05D6\u05D7\u05E1\u05D8\u05DF'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D5\u05E8\u05D9\u05D0\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05E8\u05E3 \u05E7\u05D5\u05E8\u05D9\u05D0\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E7\u05D5\u05E8\u05D9\u05D0\u05D4'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D5\u05E1\u05E8\u05D0\u05D4'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05E8\u05E1\u05E0\u05D5\u05D9\u05D0\u05E8\u05E1\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E7\u05E8\u05E1\u05E0\u05D5\u05D9\u05D0\u05E8\u05E1\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E7\u05E8\u05E1\u05E0\u05D5\u05D9\u05D0\u05E8\u05E1\u05E7'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E8\u05D2\u05D9\u05D6\u05E1\u05D8\u05DF'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05DC\u05D9\u05D9\u05DF'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E9\u05DC \u05D0\u05D9 \u05D4\u05DC\u05D5\u05E8\u05D3 \u05D4\u05D0\u05D5',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E9\u05DC \u05D0\u05D9 \u05D4\u05DC\u05D5\u05E8\u05D3 \u05D4\u05D0\u05D5',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E9\u05DC \u05D0\u05D9 \u05D4\u05DC\u05D5\u05E8\u05D3 \u05D4\u05D0\u05D5'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E7\u05D0\u05D5',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05E8\u05E3 \u05DE\u05E7\u05D0\u05D5',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05E7\u05D0\u05D5'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05E7\u05D5\u05D5\u05D0\u05E8\u05D9'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D2\u05D3\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05D2\u05D3\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D2\u05D3\u05DF'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05DC\u05D6\u05D9\u05D4'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05D0\u05D9\u05D9\u05DD \u05D4\u05DE\u05DC\u05D3\u05D9\u05D1\u05D9\u05D9\u05DD'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05DE\u05E8\u05E7\u05D9\u05D6'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05DE\u05E8\u05E9\u05DC'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D0\u05D5\u05E8\u05D9\u05E6\u05D9\u05D5\u05E1',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D7\u05D5\u05E8\u05E3 \u05DE\u05D0\u05D5\u05E8\u05D9\u05E6\u05D9\u05D5\u05E1',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D0\u05D5\u05E8\u05D9\u05E6\u05D9\u05D5\u05E1'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D0\u05D5\u05E1\u05D5\u05DF'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D5\u05DC\u05DF \u05D1\u05D8\u05D5\u05E8',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D5\u05DC\u05DF \u05D1\u05D8\u05D5\u05E8',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D5\u05DC\u05DF \u05D1\u05D8\u05D5\u05E8'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05DE\u05D5\u05E1\u05E7\u05D1\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05DE\u05D5\u05E1\u05E7\u05D1\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05DE\u05D5\u05E1\u05E7\u05D1\u05D4'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D1\u05D5\u05E8\u05DE\u05D4'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05D0\u05D5\u05E8\u05D5'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05E4\u05D0\u05DC'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05D9\u05D5-\u05E7\u05DC\u05D3\u05D5\u05E0\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E0\u05D9\u05D5-\u05E7\u05DC\u05D3\u05D5\u05E0\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E0\u05D9\u05D5-\u05E7\u05DC\u05D3\u05D5\u05E0\u05D9\u05D4'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05D9\u05D5 \u05D6\u05D9\u05DC\u05E0\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E0\u05D9\u05D5 \u05D6\u05D9\u05DC\u05E0\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E0\u05D9\u05D5 \u05D6\u05D9\u05DC\u05E0\u05D3'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05D9\u05D5\u05E4\u05D0\u05D5\u05E0\u05D3\u05DC\u05E0\u05D3',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E0\u05D9\u05D5\u05E4\u05D0\u05D5\u05E0\u05D3\u05DC\u05E0\u05D3',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E0\u05D9\u05D5\u05E4\u05D0\u05D5\u05E0\u05D3\u05DC\u05E0\u05D3'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05D9\u05D5\u05D0\u05D4'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E0\u05D5\u05E8\u05E4\u05D5\u05DC\u05E7'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05E8\u05E0\u05E0\u05D3\u05D5 \u05D3\u05D4 \u05E0\u05D5\u05E8\u05D5\u05E0\u05D9\u05D4',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05E8\u05E0\u05E0\u05D3\u05D5 \u05D3\u05D4 \u05E0\u05D5\u05E8\u05D5\u05E0\u05D9\u05D4',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E4\u05E8\u05E0\u05E0\u05D3\u05D5 \u05D3\u05D4 \u05E0\u05D5\u05E8\u05D5\u05E0\u05D9\u05D4'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E0\u05D5\u05D1\u05D5\u05E1\u05D9\u05D1\u05D9\u05E8\u05E1\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E0\u05D5\u05D1\u05D5\u05E1\u05D9\u05D1\u05D9\u05E8\u05E1\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E0\u05D5\u05D1\u05D5\u05E1\u05D9\u05D1\u05D9\u05E8\u05E1\u05E7'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D5\u05DE\u05E1\u05E7',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05D0\u05D5\u05DE\u05E1\u05E7',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D0\u05D5\u05DE\u05E1\u05E7'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05E7\u05D9\u05E1\u05D8\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05E7\u05D9\u05E1\u05D8\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E4\u05E7\u05D9\u05E1\u05D8\u05DF'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05DC\u05D0\u05D5'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05E4\u05D5\u05D0\u05D4 \u05D2\u05D9\u05E0\u05D9\u05D0\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05E8\u05D2\u05D5\u05D5\u05D0\u05D9',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05E8\u05D2\u05D5\u05D5\u05D0\u05D9',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E4\u05E8\u05D2\u05D5\u05D5\u05D0\u05D9'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E4\u05E8\u05D5',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05E8\u05D5',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E4\u05E8\u05D5'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05D4\u05E4\u05D9\u05DC\u05D9\u05E4\u05D9\u05E0\u05D9\u05DD',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E4\u05D9\u05DC\u05D9\u05E4\u05D9\u05E0\u05D9\u05DD',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05D4\u05E4\u05D9\u05DC\u05D9\u05E4\u05D9\u05E0\u05D9\u05DD'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05D0\u05D9\u05D9 \u05E4\u05D9\u05E0\u05D9\u05E7\u05E1'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u05E9\u05E2\u05D5\u05DF \u05E1\u05E0\u05D8 \u05E4\u05D9\u05D9\u05E8 \u05D5\u05DE\u05D9\u05E7\u05DC\u05D5\u05DF',
                            'standard': '\u05E9\u05E2\u05D5\u05DF \u05E8\u05D2\u05D9\u05DC \u05E1\u05E0\u05D8 \u05E4\u05D9\u05D9\u05E8 \u05D5\u05DE\u05D9\u05E7\u05DC\u05D5\u05DF',
                            'daylight': '\u05E9\u05E2\u05D5\u05DF \u05E7\u05D9\u05E5 \u05E1\u05E0\u05D8 \u05E4\u05D9\u05D9\u05E8 \u05D5\u05DE\u05D9\u05E7\u05DC\u05D5\u05DF'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '\u05E9\u05E2\u05D5\u05DF {0}',
                'regionFormat-type-daylight': '\u05E9\u05E2\u05D5\u05DF {0} (\u05E7\u05D9\u05E5)',
                'regionFormat-type-standard': '\u05E9\u05E2\u05D5\u05DF {0} (\u05D7\u05D5\u05E8\u05E3)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u05D0\u05D5\u05D2',
                                '7': '\u05D9\u05D5\u05DC',
                                '6': '\u05D9\u05D5\u05E0',
                                '5': '\u05DE\u05D0\u05D9',
                                '12': '\u05D3\u05E6\u05DE',
                                '11': '\u05E0\u05D5\u05D1',
                                '10': '\u05D0\u05D5\u05E7',
                                '9': '\u05E1\u05E4\u05D8',
                                '1': '\u05D9\u05E0\u05D5',
                                '2': '\u05E4\u05D1\u05E8',
                                '3': '\u05DE\u05E8\u05E5',
                                '4': '\u05D0\u05E4\u05E8'
                            },
                            'narrow': {
                                '8': '8',
                                '7': '7',
                                '6': '6',
                                '5': '5',
                                '12': '12',
                                '11': '11',
                                '10': '10',
                                '9': '9',
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '8': '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
                                '7': '\u05D9\u05D5\u05DC\u05D9',
                                '6': '\u05D9\u05D5\u05E0\u05D9',
                                '5': '\u05DE\u05D0\u05D9',
                                '12': '\u05D3\u05E6\u05DE\u05D1\u05E8',
                                '11': '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
                                '10': '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
                                '9': '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
                                '1': '\u05D9\u05E0\u05D5\u05D0\u05E8',
                                '2': '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
                                '3': '\u05DE\u05E8\u05E5',
                                '4': '\u05D0\u05E4\u05E8\u05D9\u05DC'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u05D0\u05D5\u05D2\u05F3',
                                '7': '\u05D9\u05D5\u05DC\u05F3',
                                '6': '\u05D9\u05D5\u05E0\u05F3',
                                '5': '\u05DE\u05D0\u05D9',
                                '12': '\u05D3\u05E6\u05DE\u05F3',
                                '11': '\u05E0\u05D5\u05D1\u05F3',
                                '10': '\u05D0\u05D5\u05E7\u05F3',
                                '9': '\u05E1\u05E4\u05D8\u05F3',
                                '1': '\u05D9\u05E0\u05D5\u05F3',
                                '2': '\u05E4\u05D1\u05E8\u05F3',
                                '3': '\u05DE\u05E8\u05E5',
                                '4': '\u05D0\u05E4\u05E8\u05F3'
                            },
                            'narrow': {
                                '8': '8',
                                '7': '7',
                                '6': '6',
                                '5': '5',
                                '12': '12',
                                '11': '11',
                                '10': '10',
                                '9': '9',
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '8': '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
                                '7': '\u05D9\u05D5\u05DC\u05D9',
                                '6': '\u05D9\u05D5\u05E0\u05D9',
                                '5': '\u05DE\u05D0\u05D9',
                                '12': '\u05D3\u05E6\u05DE\u05D1\u05E8',
                                '11': '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
                                '10': '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
                                '9': '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
                                '1': '\u05D9\u05E0\u05D5\u05D0\u05E8',
                                '2': '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
                                '3': '\u05DE\u05E8\u05E5',
                                '4': '\u05D0\u05E4\u05E8\u05D9\u05DC'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u05D9\u05D5\u05DD \u05D0\u05F3',
                                'mon': '\u05D9\u05D5\u05DD \u05D1\u05F3',
                                'tue': '\u05D9\u05D5\u05DD \u05D2\u05F3',
                                'wed': '\u05D9\u05D5\u05DD \u05D3\u05F3',
                                'thu': '\u05D9\u05D5\u05DD \u05D4\u05F3',
                                'fri': '\u05D9\u05D5\u05DD \u05D5\u05F3',
                                'sat': '\u05E9\u05D1\u05EA'
                            },
                            'narrow': {
                                'sun': '\u05D0\u05F3',
                                'mon': '\u05D1\u05F3',
                                'tue': '\u05D2\u05F3',
                                'wed': '\u05D3\u05F3',
                                'thu': '\u05D4\u05F3',
                                'fri': '\u05D5\u05F3',
                                'sat': '\u05E9\u05F3'
                            },
                            'short': {
                                'sun': '\u05D0\u05F3',
                                'mon': '\u05D1\u05F3',
                                'tue': '\u05D2\u05F3',
                                'wed': '\u05D3\u05F3',
                                'thu': '\u05D4\u05F3',
                                'fri': '\u05D5\u05F3',
                                'sat': '\u05E9\u05F3'
                            },
                            'wide': {
                                'sun': '\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF',
                                'mon': '\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9',
                                'tue': '\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9',
                                'wed': '\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9',
                                'thu': '\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9',
                                'fri': '\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9',
                                'sat': '\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u05D9\u05D5\u05DD \u05D0\u05F3',
                                'mon': '\u05D9\u05D5\u05DD \u05D1\u05F3',
                                'tue': '\u05D9\u05D5\u05DD \u05D2\u05F3',
                                'wed': '\u05D9\u05D5\u05DD \u05D3\u05F3',
                                'thu': '\u05D9\u05D5\u05DD \u05D4\u05F3',
                                'fri': '\u05D9\u05D5\u05DD \u05D5\u05F3',
                                'sat': '\u05E9\u05D1\u05EA'
                            },
                            'narrow': {
                                'sun': '\u05D0\u05F3',
                                'mon': '\u05D1\u05F3',
                                'tue': '\u05D2\u05F3',
                                'wed': '\u05D3\u05F3',
                                'thu': '\u05D4\u05F3',
                                'fri': '\u05D5\u05F3',
                                'sat': '\u05E9\u05F3'
                            },
                            'short': {
                                'sun': '\u05D0\u05F3',
                                'mon': '\u05D1\u05F3',
                                'tue': '\u05D2\u05F3',
                                'wed': '\u05D3\u05F3',
                                'thu': '\u05D4\u05F3',
                                'fri': '\u05D5\u05F3',
                                'sat': '\u05E9\u05F3'
                            },
                            'wide': {
                                'sun': '\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF',
                                'mon': '\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9',
                                'tue': '\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9',
                                'wed': '\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9',
                                'thu': '\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9',
                                'fri': '\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9',
                                'sat': '\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                            },
                            'narrow': {
                                '1': '\u05E81',
                                '2': '\u05E82',
                                '3': '\u05E83',
                                '4': '\u05E84'
                            },
                            'wide': {
                                '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                            },
                            'narrow': {
                                'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                            },
                            'wide': {
                                'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                            },
                            'narrow': {
                                'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                            },
                            'wide': {
                                'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4',
                            '0-alt-variant': 'BCE',
                            '1': '\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1',
                            '0-alt-variant': 'BCE',
                            '1': '\u05DC\u05E1\u05D4\u05F4\u05E0',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1',
                            '0-alt-variant': 'BCE',
                            '1': '\u05DC\u05E1\u05D4\u05F4\u05E0',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d \u05D1MMMM y',
                        'long': 'd \u05D1MMMM y',
                        'medium': 'd \u05D1MMM y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \u05D1\u05E9\u05E2\u05D4 {0}',
                        'long': '{1} \u05D1\u05E9\u05E2\u05D4 {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d \u05D1MMM y',
                            'EHms': 'E H:mm:ss',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E H:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E \u05D4-d',
                            'd': 'd',
                            'GyMMMd': 'd \u05D1MMM y G',
                            'GyMMMEd': 'E, d \u05D1MMM y G',
                            'yQQQQ': 'y QQQQ',
                            'yQQQ': 'y QQQ',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH',
                            'h': '\u200Fh a',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, d/M',
                            'MMM': 'LLL',
                            'MMMd': 'd \u05D1MMM',
                            'MMMEd': 'E, d \u05D1MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M.y',
                            'yMd': 'd.M.y',
                            'yMEd': 'E, d/M/y',
                            'yMM': 'MM/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd \u05D1MMM y'
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
                                'd': 'EEEE d MMM \u2013 EEEE d MMM',
                                'M': 'EEEE d MMM \u2013 EEEE d MMM'
                            },
                            'MMMd': {
                                'd': 'd\u2013d MMM',
                                'M': 'd MMM\u2013d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'EEEE d.M\u2013EEEE d.M',
                                'M': 'EEEE d.M \u2013 EEEE d.M'
                            },
                            'Md': {
                                'd': 'd.M\u2013d.M',
                                'M': 'd.M\u2013d.M'
                            },
                            'M': {
                                'M': 'M\u2013M'
                            },
                            'Hv': {
                                'H': 'H\u2013H v'
                            },
                            'hv': {
                                'a': 'h a \u2013 h a v',
                                'h': 'h\u2013h a v'
                            },
                            'intervalFormatFallback': '{0} \u2013 {1}',
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'M.y\u2013M.y',
                                'y': 'M.y\u200F-M.y'
                            },
                            'yMd': {
                                'd': 'dd.M.y \u2013 dd.M.y',
                                'M': 'd.M.y \u2013 d.M.y',
                                'y': 'd.M.y \u2013 d.M.y'
                            },
                            'yMEd': {
                                'd': 'EEEE d.M.y \u2013 EEEE d.M.y',
                                'M': 'EEEE d.M.y \u2013 EEEE d.M.y',
                                'y': 'EEEE d.M.y \u2013 EEEE d.M.y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd\u2013d MMM y',
                                'M': 'd MMM \u2013 d MMM y',
                                'y': 'd MMM y \u2013 d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'EEEE d MMM \u2013 EEEE d MMM y',
                                'M': 'EEEE d MMM \u2013 EEEE d MMM y',
                                'y': 'EEEE d MMM y \u2013 EEEE d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM\u2013MMMM y',
                                'y': 'MMMM y\u2013MMMM y'
                            },
                            'MMMM': {
                                'M': 'LLLL\u2013LLLL'
                            },
                            'Hmv': {
                                'H': 'H:mm\u2013H:mm v',
                                'm': 'H:mm\u2013H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm\u2013h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm\u2013H:mm',
                                'm': 'H:mm\u2013H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a \u2013 h:mm a',
                                'h': 'h:mm\u2013h:mm a',
                                'm': 'h:mm\u2013h:mm a'
                            },
                            'H': {
                                'H': 'H\u2013H'
                            },
                            'h': {
                                'a': 'h a \u2013 h a',
                                'h': 'h\u2013h a'
                            },
                            'd': {
                                'd': 'd\u2013d'
                            }
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
