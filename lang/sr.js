/* AstroDate
 * Language: sr
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
        AstroDate.lang('sr', {
            'codePatterns': {
                'language': '\u0408\u0435\u0437\u0438\u043A: {0}',
                'script': '\u0421\u043A\u0440\u0438\u043F\u0442: {0}',
                'territory': '\u0420\u0435\u0433\u0438\u043E\u043D: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043A\u0430\u043D\u0430 \u0441\u0438\u043C\u0431\u043E\u043B\u0435 \u043E\u0434\u0432\u043E\u0458\u0435\u043D\u043E',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043A\u0430\u043D\u0430 \u0441\u0438\u043C\u0431\u043E\u043B\u0435 \u0434\u0440\u0443\u0433\u0430\u0447\u0438\u0458\u0435'
                },
                'colCaseLevel': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0431\u0435\u0437 \u043E\u0431\u0437\u0438\u0440\u0430 \u043D\u0430 \u0432\u0435\u043B\u0438\u043A\u0430 \u0438 \u043C\u0430\u043B\u0430 \u0441\u043B\u043E\u0432\u0430',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043C\u0430\u043B\u0430 \u0438 \u0432\u0435\u043B\u0438\u043A\u0430 \u0441\u043B\u043E\u0432\u0430'
                },
                'colCaseFirst': {
                    'lower': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043F\u0440\u0432\u043E \u043C\u0430\u043B\u0430 \u0441\u043B\u043E\u0432\u0430',
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043D\u043E\u0440\u043C\u0430\u043B\u0430\u043D \u0440\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u0438 \u043C\u0430\u043B\u0438\u0445 \u0441\u043B\u043E\u0432\u0430',
                    'upper': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043F\u0440\u0432\u043E \u0432\u0435\u043B\u0438\u043A\u0430 \u0441\u043B\u043E\u0432\u0430'
                },
                'colStrength': {
                    'identical': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0441\u0432\u0435',
                    'primary': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0441\u0430\u043C\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u0441\u043B\u043E\u0432\u0430',
                    'quaternary': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0430\u043A\u0446\u0435\u043D\u0442\u0435/\u043C\u0430\u043B\u0430 \u0438 \u0432\u0435\u043B\u0438\u043A\u0430 \u0441\u043B\u043E\u0432\u0430/\u0448\u0438\u0440\u0438\u043D\u0443/\u043A\u0430\u043D\u0430 \u0441\u0438\u043C\u0431\u043E\u043B\u0435',
                    'secondary': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0430\u043A\u0446\u0435\u043D\u0442\u0435',
                    'tertiary': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0430\u043A\u0446\u0435\u043D\u0442\u0435/\u043C\u0430\u043B\u0430 \u0438 \u0432\u0435\u043B\u0438\u043A\u0430 \u0441\u043B\u043E\u0432\u0430/\u0448\u0438\u0440\u0438\u043D\u0443'
                },
                'colNumeric': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0446\u0438\u0444\u0440\u0435 \u043F\u043E\u0458\u0435\u0434\u0438\u043D\u0430\u0447\u043D\u043E',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0446\u0438\u0444\u0440\u0435 \u043D\u0443\u043C\u0435\u0440\u0438\u0447\u043A\u0438'
                },
                'colNormalization': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0431\u0435\u0437 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 Unicode \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E'
                },
                'calendar': {
                    'japanese': '\u0408\u0430\u043F\u0430\u043D\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'iso8601': 'iso8601',
                    'coptic': '\u043A\u043E\u043F\u0442\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'dangi': 'dangi',
                    'ethiopic': '\u0435\u0442\u0438\u043E\u043F\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'ethiopic-amete-alem': '\u0435\u0442\u0438\u043E\u043F\u0441\u043A\u0438 \u0430\u043C\u0435\u0442 \u0430\u043B\u0435\u043C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'gregorian': '\u0413\u0440\u0435\u0433\u043E\u0440\u0438\u0458\u0430\u043D\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'hebrew': '\u0425\u0435\u0431\u0440\u0435\u0458\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'persian': '\u043F\u0435\u0440\u0441\u0438\u0458\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'roc': '\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440 \u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0435 \u041A\u0438\u043D\u0435',
                    'chinese': '\u041A\u0438\u043D\u0435\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'buddhist': '\u0411\u0443\u0434\u0438\u0441\u0442\u0438\u0447\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'indian': '\u0418\u043D\u0434\u0438\u0458\u0441\u043A\u0438 \u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'islamic': '\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'islamic-civil': '\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0438 \u0446\u0438\u0432\u0438\u043B\u043D\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043A\u0430\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0441\u043A\u0438 \u0438\u043C\u0435\u043D\u0438\u043A',
                    'gb2312han': '\u041F\u043E\u0458\u0435\u0434\u043D\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D\u043E \u043A\u0438\u043D\u0435\u0441\u043A\u043E \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435',
                    'eor': 'eor',
                    'ducet': '\u041F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u0438 Unicode \u0440\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430',
                    'dictionary': '\u0420\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430 \u0443 \u0440\u0435\u0447\u043D\u0438\u043A\u0443',
                    'big5han': '\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E \u043A\u0438\u043D\u0435\u0441\u043A\u043E \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435',
                    'traditional': '\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435',
                    'standard': '\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u0438 \u0440\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430',
                    'zhuyin': 'zhuyin',
                    'unihan': '\u0420\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430 \u0440\u0430\u0434\u0438\u043A\u0430\u043B\u043D\u0438\u043C \u0446\u0440\u0442\u0438\u0446\u0430\u043C\u0430',
                    'stroke': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043F\u043E \u0431\u0440\u043E\u0458\u0443 \u0446\u0440\u0442\u0430',
                    'searchjl': '\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043F\u0440\u0435\u043C\u0430 \u0445\u0430\u043D\u0433\u0443\u043B \u043F\u043E\u0447\u0435\u0442\u043D\u043E\u043C \u0441\u0443\u0433\u043B\u0430\u0441\u043D\u0438\u043A\u0443',
                    'search': '\u041E\u043F\u0448\u0442\u0435 \u043D\u0430\u043C\u0435\u045A\u0435\u043D\u0430 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430',
                    'reformed': '\u0420\u0435\u0444\u043E\u0440\u043C\u0438\u0441\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430',
                    'pinyin': '\u041F\u0438\u045A\u0438\u043D \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435',
                    'phonetic': '\u0424\u043E\u043D\u0435\u0442\u0441\u043A\u0438 \u0440\u0435\u0434\u043E\u0441\u043B\u0435\u0434 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430'
                },
                'numbers': {
                    'knda': '\u043A\u0430\u043D\u0430\u0434\u0430 \u0446\u0438\u0444\u0440\u0435',
                    'khmr': '\u043A\u043C\u0435\u0440\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'kali': 'kali',
                    'jpanfin': '\u0458\u0430\u043F\u0430\u043D\u0441\u043A\u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0458\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'jpan': '\u0458\u0430\u043F\u0430\u043D\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'java': 'java',
                    'hebr': '\u0445\u0435\u0431\u0440\u0435\u0458\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'hantfin': '\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u043A\u0438\u043D\u0435\u0441\u043A\u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0458\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'hant': '\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u043A\u0438\u043D\u0435\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'hansfin': '\u043F\u043E\u0458\u0435\u0434\u043D\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D\u0438 \u043A\u0438\u043D\u0435\u0441\u043A\u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0458\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'hans': '\u043F\u043E\u0458\u0435\u0434\u043D\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D\u0438 \u043A\u0438\u043D\u0435\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'hanidec': '\u043A\u0438\u043D\u0435\u0441\u043A\u0438 \u0434\u0435\u0446\u0438\u043C\u0430\u043B\u043D\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'guru': '\u0433\u0443\u0440\u043C\u0443\u043A\u0438 \u0446\u0438\u0444\u0440\u0435',
                    'gujr': '\u0433\u0443\u045F\u0430\u0440\u0430\u0442\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'greklow': '\u043C\u0430\u043B\u0438 \u0433\u0440\u0447\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'grek': '\u0433\u0440\u0447\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'bali': 'bali',
                    'armnlow': '\u043C\u0430\u043B\u0438 \u0458\u0435\u0440\u043C\u0435\u043D\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'armn': '\u0458\u0435\u0440\u043C\u0435\u043D\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'arabext': '\u043F\u0440\u043E\u0434\u0443\u0436\u0435\u043D\u0435 \u0430\u0440\u0430\u043F\u0441\u043A\u043E-\u0438\u043D\u0434\u0438\u0458\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'arab': '\u0430\u0440\u0430\u043F\u0441\u043A\u043E-\u0438\u043D\u0434\u0438\u0458\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'finance': '\u0424\u0438\u043D\u0430\u043D\u0441\u0438\u0458\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'traditional': '\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'native': '\u041B\u043E\u043A\u0430\u043B\u043D\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'beng': '\u0431\u0435\u043D\u0433\u0430\u043B\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u0434\u0435\u0432\u0430\u043D\u0433\u0430\u0440\u0438 \u0446\u0438\u0444\u0440\u0435',
                    'orya': '\u043E\u0440\u0438\u0458\u0430 \u0446\u0438\u0444\u0440\u0435',
                    'osma': 'osma',
                    'roman': '\u0440\u0438\u043C\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'romanlow': '\u043C\u0430\u043B\u0438 \u0440\u0438\u043C\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u0412\u0430\u0438 \u0446\u0438\u0444\u0440\u0435',
                    'tibt': '\u0442\u0438\u0431\u0435\u0442\u0430\u043D\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'thai': '\u0442\u0430\u0458\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'telu': '\u0442\u0435\u043B\u0443\u0433\u0443 \u0446\u0438\u0444\u0440\u0435',
                    'tamldec': '\u0442\u0430\u043C\u0438\u043B\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'taml': '\u0442\u0430\u043C\u0438\u043B\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': '\u043C\u0438\u0458\u0430\u043D\u043C\u0430\u0440\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'mtei': 'mtei',
                    'mong': '\u043C\u043E\u043D\u0433\u043E\u043B\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'mlym': '\u043C\u0430\u043B\u0430\u0458\u0430\u043B\u0430\u043C \u0446\u0438\u0444\u0440\u0435',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': '\u0437\u0430\u043F\u0430\u0434\u043D\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'laoo': '\u043B\u0430\u043E\u0448\u043A\u0435 \u0446\u0438\u0444\u0440\u0435',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': '\u0433\u0440\u0443\u0437\u0438\u0458\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438',
                    'fullwide': '\u0446\u0438\u0444\u0440\u0435 \u043F\u0443\u043D\u0435 \u0448\u0438\u0440\u0438\u043D\u0435',
                    'ethi': '\u0435\u0442\u0438\u043E\u043F\u0441\u043A\u0438 \u0431\u0440\u043E\u0458\u0435\u0432\u0438'
                },
                'colAlternate': {
                    'non-ignorable': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0441\u0438\u043C\u0431\u043E\u043B\u0435',
                    'shifted': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u0443\u0437 \u0438\u0433\u043D\u043E\u0440\u0438\u0441\u0430\u045A\u0435 \u0441\u0438\u043C\u0431\u043E\u043B\u0430'
                },
                'colBackwards': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0430\u043A\u0446\u0435\u043D\u0442\u0435 \u043D\u043E\u0440\u043C\u0430\u043B\u043D\u043E',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u0430\u043A\u0446\u0435\u043D\u0442\u0435 \u043E\u0431\u0440\u043D\u0443\u0442\u043E'
                }
            },
            'keys': {
                'colNormalization': '\u041D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435',
                'collation': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435',
                'colHiraganaQuaternary': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043F\u0440\u0435\u043C\u0430 \u043A\u0430\u043D\u0430 \u0441\u0438\u043C\u0431\u043E\u043B\u0438\u043C\u0430',
                'colCaseLevel': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043F\u0440\u0435\u043C\u0430 \u043C\u0430\u043B\u043E\u043C/\u0432\u0435\u043B\u0438\u043A\u043E\u043C \u0441\u043B\u043E\u0432\u0443',
                'colCaseFirst': '\u0420\u0435\u0452\u0430\u045A\u0435 \u043F\u0440\u0435\u043C\u0430 \u043C\u0430\u043B\u043E\u043C/\u0432\u0435\u043B\u0438\u043A\u043E\u043C \u0441\u043B\u043E\u0432\u0443',
                'colBackwards': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043F\u0440\u0435\u043C\u0430 \u043E\u0431\u0440\u043D\u0443\u0442\u0438\u043C \u0430\u043A\u0446\u0435\u043D\u0442\u0438\u043C\u0430',
                'colAlternate': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u0443\u0437 \u0438\u0433\u043D\u043E\u0440\u0438\u0441\u0430\u045A\u0435 \u0441\u0438\u043C\u0431\u043E\u043B\u0430',
                'calendar': '\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                'x': '\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0430 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430',
                'variableTop': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043A\u0430\u043E \u0441\u0438\u043C\u0431\u043E\u043B\u0435',
                'va': '\u0412\u0430\u0440\u0438\u0458\u0430\u043D\u0442\u0430 \u043B\u043E\u043A\u0430\u043B\u0438\u0442\u0435\u0442\u0430',
                'timezone': '\u0412\u0440\u0435\u043C\u0435\u043D\u0441\u043A\u0430 \u0437\u043E\u043D\u0430',
                'numbers': '\u0411\u0440\u043E\u0458\u0435\u0432\u0438',
                'currency': '\u0412\u0430\u043B\u0443\u0442\u0430',
                'colStrength': '\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043F\u0440\u0435\u043C\u0430 \u0458\u0430\u0447\u0438\u043D\u0438',
                'colNumeric': '\u041D\u0443\u043C\u0435\u0440\u0438\u0447\u043A\u043E \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435'
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
                            'exemplarCity': '\u0421\u0430\u0458\u043F\u0430\u043D'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u0420\u0430\u0440\u043E\u0442\u043E\u043D\u0433\u0430'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442 \u041C\u043E\u0440\u0437\u0431\u0438'
                        },
                        'Ponape': {
                            'exemplarCity': '\u041F\u043E\u043D\u0430\u043F\u0435'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u041F\u0438\u0442\u043A\u0430\u0438\u0440\u043D'
                        },
                        'Palau': {
                            'exemplarCity': '\u041F\u0430\u043B\u0430\u0443'
                        },
                        'Auckland': {
                            'exemplarCity': '\u041E\u043A\u043B\u0430\u043D\u0434'
                        },
                        'Apia': {
                            'exemplarCity': '\u0410\u043F\u0438\u0458\u0430'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u0424\u0443\u043D\u0430\u0444\u0443\u0442\u0438'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u0413\u0430\u043B\u0430\u043F\u0430\u0433\u043E\u0441'
                        },
                        'Gambier': {
                            'exemplarCity': '\u0413\u0430\u043C\u0431\u0438\u0458\u0435'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u0413\u0432\u0430\u0434\u0430\u043B\u043A\u0430\u043D\u0430\u043B'
                        },
                        'Guam': {
                            'exemplarCity': '\u0413\u0443\u0430\u043C'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u0425\u043E\u043D\u043E\u043B\u0443\u043B\u0443'
                        },
                        'Wallis': {
                            'exemplarCity': '\u0412\u0430\u043B\u0438\u0441'
                        },
                        'Wake': {
                            'exemplarCity': '\u0412\u0435\u0458\u043A'
                        },
                        'Truk': {
                            'exemplarCity': '\u0422\u0440\u0443\u043A'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u0422\u043E\u043D\u0433\u0430\u0442\u0430\u043F\u0443'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u0422\u0430\u0440\u0430\u0432\u0430'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u0422\u0430\u0445\u0438\u0442\u0438'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u041A\u0438\u0440\u0438\u0442\u0438\u043C\u0430\u0442\u0438'
                        },
                        'Johnston': {
                            'exemplarCity': '\u040F\u043E\u043D\u0441\u0442\u043E\u043D'
                        },
                        'Chatham': {
                            'exemplarCity': '\u041A\u0430\u0442\u0445\u0430\u043C'
                        },
                        'Easter': {
                            'exemplarCity': '\u0423\u0441\u043A\u0440\u0448\u045A\u0435 \u043E\u0441\u0442\u0440\u0432\u043E'
                        },
                        'Efate': {
                            'exemplarCity': '\u0415\u0444\u0430\u0442'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u0415\u043D\u0434\u0435\u0440\u0431\u0435\u0440\u0438'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u0424\u0430\u043A\u0430\u043E\u0444\u043E'
                        },
                        'Fiji': {
                            'exemplarCity': '\u0424\u0438\u045F\u0438'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u041A\u043E\u0448\u0440\u0435'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u041A\u0432\u0430\u045F\u0430\u043B\u0435\u0458\u0438\u043D'
                        },
                        'Majuro': {
                            'exemplarCity': '\u041C\u0430\u0458\u0443\u0440\u043E'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u041C\u0430\u0440\u043A\u0438\u0437'
                        },
                        'Midway': {
                            'exemplarCity': '\u041C\u0438\u0434\u0432\u0435\u0458'
                        },
                        'Nauru': {
                            'exemplarCity': '\u041D\u0430\u0443\u0440\u0443'
                        },
                        'Niue': {
                            'exemplarCity': '\u041D\u0438\u0443\u0435'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u041D\u043E\u0440\u0444\u043E\u043B\u043A'
                        },
                        'Noumea': {
                            'exemplarCity': '\u041D\u0443\u043C\u0435\u0430'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u041F\u0430\u0433\u043E \u041F\u0430\u0433\u043E'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u041B\u0438\u043D\u0434\u0435\u043C\u0430\u043D'
                        },
                        'Hobart': {
                            'exemplarCity': '\u0425\u043E\u0431\u0430\u0440\u0442'
                        },
                        'Eucla': {
                            'exemplarCity': '\u0418\u0443\u043A\u043B\u0430'
                        },
                        'Darwin': {
                            'exemplarCity': '\u0414\u0430\u0440\u0432\u0438\u043D'
                        },
                        'Sydney': {
                            'exemplarCity': '\u0421\u0438\u0434\u043D\u0435\u0458'
                        },
                        'Perth': {
                            'exemplarCity': '\u041F\u0435\u0440\u0442'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u041C\u0435\u043B\u0431\u0443\u0440\u043D'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u041B\u043E\u0440\u0434 \u0425\u043E\u0432'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u0410\u0434\u0435\u043B\u0430\u0438\u0434\u0430'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u0411\u0440\u0438\u0437\u0431\u0435\u0458\u043D'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u0411\u0440\u043E\u043A\u0435\u043D \u0425\u0438\u043B'
                        },
                        'Currie': {
                            'exemplarCity': '\u041A\u0443\u0440\u0438\u0435'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u041C\u0430\u043B\u0434\u0438\u0432\u0438'
                        },
                        'Mahe': {
                            'exemplarCity': '\u041C\u0430\u0445\u0435'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u041A\u0435\u0440\u0433\u0435\u043B\u0435\u043D'
                        },
                        'Reunion': {
                            'exemplarCity': '\u0420\u0435\u0443\u043D\u0438\u043E\u043D'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u041C\u0430\u0458\u043E\u0442'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u041C\u0430\u0443\u0440\u0438\u0446\u0438\u0458\u0443\u0441'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u0410\u043D\u0442\u0430\u043D\u0430\u043D\u0430\u0440\u0438\u0432\u043E'
                        },
                        'Chagos': {
                            'exemplarCity': '\u0427\u0430\u0433\u043E\u0441'
                        },
                        'Christmas': {
                            'exemplarCity': '\u0411\u043E\u0436\u0438\u045B'
                        },
                        'Cocos': {
                            'exemplarCity': '\u041A\u043E\u043A\u043E\u0441'
                        },
                        'Comoro': {
                            'exemplarCity': '\u041A\u043E\u043C\u043E\u0440\u043E'
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
                            'exemplarCity': '\u041D\u0435\u043F\u043E\u0437\u043D\u0430\u0442 \u0438\u043B\u0438 \u043D\u0435\u0432\u0430\u0436\u0435\u045B\u0438 \u0433\u0440\u0430\u0434'
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
                            'exemplarCity': '\u0420\u043E\u0442\u0435\u0440\u0430'
                        },
                        'Palmer': {
                            'exemplarCity': '\u041F\u0430\u043B\u043C\u0435\u0440'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u041C\u0430\u043A\u043C\u0443\u0440\u0434\u043E'
                        },
                        'Vostok': {
                            'exemplarCity': '\u0412\u043E\u0441\u0442\u043E\u043A'
                        },
                        'Syowa': {
                            'exemplarCity': '\u0428\u043E\u0432\u0430'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u0408\u0443\u0436\u043D\u0438 \u043F\u043E\u043B'
                        },
                        'Casey': {
                            'exemplarCity': '\u041A\u0430\u0441\u0435\u0458'
                        },
                        'Davis': {
                            'exemplarCity': '\u0414\u0435\u0458\u0432\u0438\u0441'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u0414\u0438\u043C\u043E\u043D \u0434\u2019\u0423\u0440\u0432\u0438\u043B'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u041C\u0435\u043A\u0432\u043E\u0440\u0438'
                        },
                        'Mawson': {
                            'exemplarCity': '\u041C\u043E\u0441\u043E\u043D'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u041B\u043E\u043D\u0433\u0458\u0435\u0440\u0431\u0458\u0435\u043D'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u0422\u043E\u0440\u043E\u043D\u0442\u043E'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u0422\u0438\u0445\u0443\u0430\u043D\u0430'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u0422\u0430\u043D\u0434\u0435\u0440 \u0411\u0435\u0458'
                        },
                        'Thule': {
                            'exemplarCity': '\u0422\u0443\u043B\u0435'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u0422\u0435\u0433\u0443\u0441\u0438\u0433\u0430\u043B\u043F\u0430'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u0421\u0432\u0438\u0444\u0442 \u041A\u0443\u0440\u0435\u043D\u0442'
                        },
                        'Chicago': {
                            'exemplarCity': '\u0427\u0438\u043A\u0430\u0433\u043E'
                        },
                        'Cayman': {
                            'exemplarCity': '\u041A\u0430\u0458\u043C\u0430\u043D\u0441\u043A\u0430 \u043E\u0441\u0442\u0440\u0432\u0430'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u041A\u0430\u0458\u0435\u043D'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u041A\u0430\u0442\u0430\u043C\u0430\u0440\u043A\u0430'
                        },
                        'Caracas': {
                            'exemplarCity': '\u041A\u0430\u0440\u0430\u043A\u0430\u0441'
                        },
                        'Cancun': {
                            'exemplarCity': '\u041A\u0430\u043D\u043A\u0443\u043D'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u041A\u0430\u043C\u043F\u043E \u0413\u0440\u0430\u043D\u0434\u0435'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u041A\u0435\u043C\u0431\u0440\u0438\u045F \u0411\u0435\u0458'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u0411\u0443\u0435\u043D\u043E\u0441 \u0410\u0438\u0440\u0435\u0441'
                        },
                        'Boise': {
                            'exemplarCity': '\u0411\u043E\u0458\u0437\u0438'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u0410\u0441\u0443\u043D\u0441\u0438\u043E\u043D'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0410\u0440\u0443\u0431\u0430'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u0420\u0438\u043E \u0413\u0435\u043B\u0435\u0433\u043E\u0441'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u0421\u0430\u043D \u0425\u0443\u0430\u043D'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u0423\u0448\u0443\u0430\u0438\u0458\u0430'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u041B\u0430 \u0420\u0438\u043E\u0458\u0430'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u0421\u0430\u043D \u041B\u0443\u0438'
                            },
                            'Salta': {
                                'exemplarCity': '\u0421\u0430\u043B\u0442\u0430'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u0422\u0443\u043A\u0443\u043C\u0430\u043D'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0410\u0440\u0430\u0433\u0432\u0430\u0458\u0430\u043D\u0430'
                        },
                        'Antigua': {
                            'exemplarCity': '\u0410\u043D\u0442\u0438\u0433\u0432\u0430'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u0410\u043D\u0433\u0432\u0438\u043B\u0430'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u0415\u043D\u043A\u043E\u0440\u0438\u045F'
                        },
                        'Adak': {
                            'exemplarCity': '\u0410\u0434\u0430\u043A'
                        },
                        'Bahia': {
                            'exemplarCity': '\u0411\u0430\u0445\u0438\u0430'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u0411\u0430\u0438\u0458\u0430 \u0411\u0430\u043D\u0434\u0435\u0440\u0430\u0441'
                        },
                        'Barbados': {
                            'exemplarCity': '\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441'
                        },
                        'Belem': {
                            'exemplarCity': '\u0411\u0435\u043B\u0435\u043C'
                        },
                        'Belize': {
                            'exemplarCity': '\u0411\u0435\u043B\u0438\u0437\u0435'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u0411\u043B\u0430\u043D\u043A-\u0421\u0435\u0458\u0431\u043B\u043E\u043D'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u0411\u043E\u0430 \u0412\u0438\u0441\u0442\u0430'
                        },
                        'Bogota': {
                            'exemplarCity': '\u0411\u043E\u0433\u043E\u0442\u0430'
                        },
                        'Curacao': {
                            'exemplarCity': '\u041A\u0438\u0440\u0430\u0441\u043E'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u0414\u0430\u043D\u043C\u0430\u0440\u043A\u0441\u0445\u0430\u0433\u0435\u043D'
                        },
                        'Dawson': {
                            'exemplarCity': '\u0414\u043E\u0441\u043E\u043D'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u0414\u043E\u0441\u043E\u043D \u041A\u0440\u0438\u043A'
                        },
                        'Denver': {
                            'exemplarCity': '\u0414\u0435\u043D\u0432\u0435\u0440'
                        },
                        'Detroit': {
                            'exemplarCity': '\u0414\u0435\u0442\u0440\u043E\u0438\u0442'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u0425\u0435\u0440\u043C\u043E\u0441\u0438\u0459\u043E'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0412\u0438\u043D\u0446\u0435\u043D\u0435\u0441, \u0418\u043D\u0434\u0438\u0458\u0430\u043D\u0430'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u041F\u0435\u0442\u0435\u0440\u0441\u0431\u0443\u0440\u0433, \u0418\u043D\u0434\u0438\u0458\u0430\u043D\u0430'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u0422\u0435\u043B \u0421\u0438\u0442\u0438'
                            },
                            'Knox': {
                                'exemplarCity': '\u041A\u043D\u043E\u043A\u0441, \u0418\u043D\u0434\u0438\u0458\u0430\u043D\u0430'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0412\u0438\u043D\u0430\u043C\u0430\u043A, \u0418\u043D\u0434\u0438\u0458\u0430\u043D\u0430'
                            },
                            'Marengo': {
                                'exemplarCity': '\u041C\u0430\u0440\u0435\u043D\u0433\u043E, \u0418\u043D\u0434\u0438\u0458\u0430\u043D\u0430'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0412\u0435\u0432\u0430\u0458, \u0418\u043D\u0434\u0438\u0458\u0430\u043D\u0430'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0418\u043D\u0434\u0438\u0430\u043D\u0430\u043F\u043E\u043B\u0438\u0441'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0418\u043D\u0443\u0432\u0438\u043A'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0418\u043A\u0432\u0430\u043B\u0443\u0438\u0442'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u0408\u0430\u043C\u0430\u0458\u043A\u0430'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u0416\u0443\u0436\u0443\u0438'
                        },
                        'Juneau': {
                            'exemplarCity': '\u0416\u0443\u043D\u043E'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u0408\u0435\u043B\u043E\u0443\u043D\u0430\u0458\u0444'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u0408\u0430\u043A\u0443\u0442\u0430\u0442'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0412\u0438\u043D\u0438\u043F\u0435\u0433'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0412\u0430\u0458\u0442\u0445\u043E\u0440\u0441'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440'
                        },
                        'Tortola': {
                            'exemplarCity': '\u0422\u043E\u0440\u0442\u043E\u043B\u0430'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u041A\u0440\u0430\u043B\u0435\u043D\u0434\u0430\u0458\u043A'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u041C\u043E\u043D\u0442\u0438\u0447\u0435\u043B\u043E, \u041A\u0435\u043D\u0442\u0430\u043A\u0438'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0425\u0430\u0432\u0430\u043D\u0430'
                        },
                        'Halifax': {
                            'exemplarCity': '\u0425\u0430\u043B\u0438\u0444\u0430\u043A\u0441'
                        },
                        'Guyana': {
                            'exemplarCity': '\u0413\u0443\u0430\u043D\u0430'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u0413\u0432\u0430\u0458\u0430\u043A\u0438\u043B'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u0413\u0432\u0430\u0434\u0430\u043B\u0443\u043F\u0435'
                        },
                        'Grenada': {
                            'exemplarCity': '\u0413\u0440\u0435\u043D\u0430\u0434\u0430'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u0413\u0440\u0430\u043D\u0434 \u0422\u0443\u0440\u043A'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u0413\u0443\u0441 \u0411\u0435\u0458'
                        },
                        'Godthab': {
                            'exemplarCity': '\u0413\u043E\u0442\u0445\u0430\u0431'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u0413\u043B\u0435\u0458\u0441 \u0411\u0435\u0458'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u0424\u043E\u0440\u0442\u0430\u043B\u0435\u0437\u0430'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u0421\u0430\u043B\u0432\u0430\u0434\u043E\u0440'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u0415\u0438\u0440\u0443\u043D\u0435\u043F\u0435'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u0415\u0434\u043C\u043E\u043D\u0442\u043E\u043D'
                        },
                        'Dominica': {
                            'exemplarCity': '\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u0427\u0438\u0445\u0443\u0430\u0445\u0443\u0430'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u041A\u043E\u0440\u0430\u043B \u0425\u0430\u0440\u0431\u0443\u0440'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u041A\u043E\u0440\u0434\u043E\u0431\u0430'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u041A\u043E\u0441\u0442\u0430\u0440\u0438\u043A\u0430'
                        },
                        'Creston': {
                            'exemplarCity': '\u041A\u0440\u0435\u0441\u0442\u043E\u043D'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u041A\u0443\u0438\u0430\u0431\u0430'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u041B\u0430 \u041F\u0430\u0437'
                        },
                        'Lima': {
                            'exemplarCity': '\u041B\u0438\u043C\u0430'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u041B\u043E\u0441 \u0410\u043D\u0452\u0435\u043B\u0435\u0441'
                        },
                        'Louisville': {
                            'exemplarCity': '\u041B\u0443\u0438\u0432\u0438\u043B\u0435'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u041B\u043E\u0443\u0435\u0440 \u041F\u0440\u0438\u043D\u0441\u0438\u0437 \u041A\u0432\u043E\u0440\u0442\u0435\u0440'
                        },
                        'Maceio': {
                            'exemplarCity': '\u041C\u0430\u0441\u0435\u0458\u043E'
                        },
                        'Managua': {
                            'exemplarCity': '\u041C\u0430\u043D\u0430\u0433\u0432\u0430'
                        },
                        'Manaus': {
                            'exemplarCity': '\u041C\u0430\u043D\u0430\u0443\u0441'
                        },
                        'Marigot': {
                            'exemplarCity': '\u041C\u0430\u0440\u0438\u0433\u043E'
                        },
                        'Martinique': {
                            'exemplarCity': '\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u041C\u0430\u0442\u0430\u043C\u043E\u0440\u043E\u0441'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u041C\u0430\u0437\u0430\u0442\u043B\u0430\u043D'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u041C\u0435\u043D\u0434\u043E\u0437\u0430'
                        },
                        'Menominee': {
                            'exemplarCity': '\u041C\u0435\u043D\u043E\u043C\u0438\u043D\u0438'
                        },
                        'Merida': {
                            'exemplarCity': '\u041C\u0435\u0440\u0438\u0434\u0430'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u041C\u0435\u0442\u043B\u0430\u043A\u0430\u0442\u043B\u0430'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u041C\u0435\u043A\u0441\u0438\u043A\u043E \u0421\u0438\u0442\u0438'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u041C\u0438\u043A\u0435\u043B\u043E\u043D'
                        },
                        'Moncton': {
                            'exemplarCity': '\u041C\u043E\u043D\u043A\u0442\u043E\u043D'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0435\u0440\u0435\u0458'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0435\u0432\u0438\u0434\u0435\u043E'
                        },
                        'Montreal': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0440\u0435\u0430\u043B'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0441\u0435\u0440\u0430\u0442'
                        },
                        'Nassau': {
                            'exemplarCity': '\u041D\u0430\u0441\u0430\u0443'
                        },
                        'New_York': {
                            'exemplarCity': '\u040A\u0443\u0458\u043E\u0440\u043A'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u041D\u0438\u043F\u0438\u0433\u043E\u043D'
                        },
                        'Nome': {
                            'exemplarCity': '\u041D\u043E\u043C'
                        },
                        'Noronha': {
                            'exemplarCity': '\u041D\u043E\u0440\u043E\u045A\u0430'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u0411\u0438\u0458\u0443\u043B\u0430, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u0414\u0430\u043A\u043E\u0442\u0430'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u041D\u043E\u0432\u0438 \u0421\u0430\u043B\u0435\u043C, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u0414\u0430\u0442\u043A\u043E\u0430'
                            },
                            'Center': {
                                'exemplarCity': '\u0426\u0435\u043D\u0442\u0430\u0440, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u0414\u0430\u043A\u043E\u0442\u0430'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u041E\u0445\u0438\u043D\u0430\u0433\u0430'
                        },
                        'Panama': {
                            'exemplarCity': '\u041F\u0430\u043D\u0430\u043C\u0430'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u041F\u0430\u043D\u0433\u043D\u0438\u0440\u0442\u0443\u043D\u0433'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u041F\u0430\u0440\u0430\u043C\u0438\u0440\u0431\u043E'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u0424\u0435\u043D\u0438\u043A\u0441'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u043E-\u041F\u0440\u0435\u043D\u0441'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442 \u043E\u0444 \u0421\u043F\u0435\u0458\u043D'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442\u043E \u0412\u0435\u0459\u043E'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442\u043E \u0420\u0438\u043A\u043E'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u0420\u0435\u0458\u043D\u0438 \u0420\u0438\u0432\u0435\u0440'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u0420\u0430\u043D\u043A\u0438\u043D \u0418\u043D\u043B\u0435\u0442'
                        },
                        'Recife': {
                            'exemplarCity': '\u0420\u0435\u0441\u0438\u0444\u0435'
                        },
                        'Regina': {
                            'exemplarCity': '\u0420\u0435\u0433\u0438\u043D\u0430'
                        },
                        'Resolute': {
                            'exemplarCity': '\u0420\u0435\u0441\u043E\u043B\u0443\u0442'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u0420\u0438\u043E \u0411\u0440\u0430\u043D\u043A\u043E'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0430 \u0418\u0437\u0430\u0431\u0435\u043B'
                        },
                        'Santarem': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0430\u0440\u0435\u043C'
                        },
                        'Santiago': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0438\u0458\u0430\u0433\u043E'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u043E \u0414\u043E\u043C\u0438\u043D\u0433\u043E'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u0421\u0430\u043E \u041F\u0430\u043E\u043B\u043E'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u0421\u043A\u043E\u0440\u0435\u0437\u0431\u0438\u0441\u0443\u043D\u0434'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u0428\u0438\u043F\u0440\u043E\u043A'
                        },
                        'Sitka': {
                            'exemplarCity': '\u0421\u0438\u0442\u043A\u0430'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0421\u0432. \u0411\u0430\u0440\u0442\u043E\u043B\u043E\u043Ce\u0458'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u0421\u0432. \u040F\u043E\u043D'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442 \u041A\u0438\u0442\u0441'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0421\u0432. \u041B\u0443\u0446\u0438\u0458\u0430'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0421\u0432. \u0422\u043E\u043C\u0430'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442 \u0412\u0438\u043D\u0441\u0435\u043D\u0442'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u0408\u0443\u0436\u043D\u0430 \u040F\u043E\u0440\u045F\u0438\u0458\u0430'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u0420\u0435\u0458\u043A\u0458\u0430\u0432\u0438\u043A'
                        },
                        'Stanley': {
                            'exemplarCity': '\u0421\u0442\u0435\u043D\u043B\u0438'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u0421\u0432. \u0408\u0435\u043B\u0435\u043D\u0430'
                        },
                        'Azores': {
                            'exemplarCity': '\u0410\u0437\u043E\u0440\u0438'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u0411\u0435\u0440\u043C\u0443\u0434\u0430'
                        },
                        'Canary': {
                            'exemplarCity': '\u041A\u0430\u043D\u0430\u0440\u0441\u043A\u0430 \u043E\u0441\u0442\u0440\u0432\u0430'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u0417\u0435\u043B\u0435\u043D\u043E\u0440\u0442\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u0424\u0430\u0440\u0441\u043A\u0430 \u043E\u0441\u0442\u0440\u0432\u0430'
                        },
                        'Madeira': {
                            'exemplarCity': '\u041C\u0430\u0434\u0435\u0440\u0430'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u041E\u0441\u043B\u043E'
                        },
                        'Moscow': {
                            'exemplarCity': '\u041C\u043E\u0441\u043A\u0432\u0430'
                        },
                        'Monaco': {
                            'exemplarCity': '\u041C\u043E\u043D\u0430\u043A\u043E'
                        },
                        'Minsk': {
                            'exemplarCity': '\u041C\u0438\u043D\u0441\u043A'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u041C\u0430\u0440\u0438\u0445\u0430\u043C\u043D'
                        },
                        'Malta': {
                            'exemplarCity': '\u041C\u0430\u043B\u0442\u0430'
                        },
                        'Madrid': {
                            'exemplarCity': '\u041C\u0430\u0434\u0440\u0438\u0434'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u041B\u0443\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u0431\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0432\u0440\u0435\u043C\u0435'
                            },
                            'exemplarCity': '\u041B\u043E\u043D\u0434\u043E\u043D'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u0409\u0443\u0431\u0459\u0430\u043D\u0430'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u041B\u0438\u0441\u0430\u0431\u043E\u043D'
                        },
                        'Kiev': {
                            'exemplarCity': '\u041A\u0438\u0458\u0435\u0432'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434'
                        },
                        'Jersey': {
                            'exemplarCity': '\u040F\u0435\u0440\u0441\u0438'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u0418\u0441\u0442\u0430\u043D\u0431\u0443\u043B'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0432\u043E \u041C\u0430\u043D'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u0411\u0443\u043A\u0443\u0440\u0435\u0448\u0442'
                        },
                        'Brussels': {
                            'exemplarCity': '\u0411\u0440\u0438\u0441\u0435\u043B'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u0411\u0440\u0430\u0442\u0438\u0441\u043B\u0430\u0432\u0430'
                        },
                        'Berlin': {
                            'exemplarCity': '\u0411\u0435\u0440\u043B\u0438\u043D'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u0411\u0435\u043E\u0433\u0440\u0430\u0434'
                        },
                        'Athens': {
                            'exemplarCity': '\u0410\u0442\u0438\u043D\u0430'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0410\u043D\u0434\u043E\u0440\u0430'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u0421\u0438\u043C\u0444\u0435\u0440\u043E\u043F\u043E\u043B'
                        },
                        'Skopje': {
                            'exemplarCity': '\u0421\u043A\u043E\u043F\u0459\u0435'
                        },
                        'Sofia': {
                            'exemplarCity': '\u0421\u043E\u0444\u0438\u0458\u0430'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u0421\u0442\u043E\u043A\u0445\u043E\u043B\u043C'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u0422\u0430\u043B\u0438\u043D'
                        },
                        'Tirane': {
                            'exemplarCity': '\u0422\u0438\u0440\u0430\u043D\u0430'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u0423\u0436\u0433\u043E\u0440\u043E\u0434'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0412\u0430\u0434\u0443\u0437'
                        },
                        'Zurich': {
                            'exemplarCity': '\u0426\u0438\u0440\u0438\u0445'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u0417\u0430\u043F\u043E\u0440\u043E\u0436\u0458\u0435'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u0417\u0430\u0433\u0440\u0435\u0431'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u0412\u0430\u0440\u0448\u0430\u0432\u0430'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u0412\u0438\u0459\u043D\u0443\u0441'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0411\u0435\u0447'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0412\u0430\u0442\u0438\u043A\u0430\u043D'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u0421\u0430\u0440\u0430\u0458\u0435\u0432\u043E'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u0421\u0430\u043D \u041C\u0430\u0440\u0438\u043D\u043E'
                        },
                        'Samara': {
                            'exemplarCity': '\u0421\u0430\u043C\u0430\u0440\u0430'
                        },
                        'Rome': {
                            'exemplarCity': '\u0420\u0438\u043C'
                        },
                        'Riga': {
                            'exemplarCity': '\u0420\u0438\u0433\u0430'
                        },
                        'Prague': {
                            'exemplarCity': '\u041F\u0440\u0430\u0433'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u041F\u043E\u0434\u0433\u043E\u0440\u0438\u0446\u0430'
                        },
                        'Paris': {
                            'exemplarCity': '\u041F\u0430\u0440\u0438\u0437'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0425\u0435\u043B\u0441\u0438\u043D\u043A\u0438'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u0413\u0435\u0440\u043D\u0437\u0438'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u0438\u0440\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0432\u0440\u0435\u043C\u0435'
                            },
                            'exemplarCity': '\u0414\u0430\u0431\u043B\u0438\u043D'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u041A\u043E\u043F\u0435\u043D\u0445\u0430\u0433\u0435\u043D'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u041A\u0438\u0448\u0438\u045A\u0435\u0432'
                        },
                        'Busingen': {
                            'exemplarCity': '\u0411\u0438\u0441\u0438\u043D\u0433\u0435\u043D'
                        },
                        'Budapest': {
                            'exemplarCity': '\u0411\u0443\u0434\u0438\u043C\u043F\u0435\u0448\u0442\u0430'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u041B\u0438\u0431\u0440\u0435\u0432\u0438\u043B'
                        },
                        'Lagos': {
                            'exemplarCity': '\u041B\u0430\u0433\u043E\u0441'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u041A\u0438\u043D\u0448\u0430\u0441\u0430'
                        },
                        'Kigali': {
                            'exemplarCity': '\u041A\u0438\u0433\u0430\u043B\u0438'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u041A\u0430\u0440\u0442\u0443\u043C'
                        },
                        'Kampala': {
                            'exemplarCity': '\u041A\u0430\u043C\u043F\u0430\u043B\u0430'
                        },
                        'Juba': {
                            'exemplarCity': '\u040F\u0443\u0431\u0430'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u0408\u043E\u0445\u0430\u043D\u0435\u0441\u0431\u0443\u0440\u0433'
                        },
                        'Harare': {
                            'exemplarCity': '\u0425\u0430\u0440\u0430\u0440\u0435'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u0413\u0430\u0431\u043E\u0440\u043E\u043D'
                        },
                        'Freetown': {
                            'exemplarCity': '\u0424\u0440\u0438\u0442\u0430\u0443\u043D'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u0415\u043B \u0410\u0458\u0443\u043D'
                        },
                        'Douala': {
                            'exemplarCity': '\u0414\u0443\u0430\u043B\u0430'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u040F\u0438\u0431\u0443\u0442\u0438'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u0414\u0430\u0440-\u0435\u0441-\u0421\u0430\u043B\u0430\u043C'
                        },
                        'Dakar': {
                            'exemplarCity': '\u0414\u0430\u043A\u0430\u0440'
                        },
                        'Banjul': {
                            'exemplarCity': '\u0411\u0430\u043D\u0436\u0443\u043B'
                        },
                        'Bangui': {
                            'exemplarCity': '\u0411\u0430\u043D\u0433\u0443\u0438'
                        },
                        'Bamako': {
                            'exemplarCity': '\u0411\u0430\u043C\u0430\u043A\u043E'
                        },
                        'Asmera': {
                            'exemplarCity': '\u0410\u0441\u043C\u0435\u0440\u0430'
                        },
                        'Malabo': {
                            'exemplarCity': '\u041C\u0430\u043B\u0430\u0431\u043E'
                        },
                        'Maputo': {
                            'exemplarCity': '\u041C\u0430\u043F\u0443\u0442\u043E'
                        },
                        'Maseru': {
                            'exemplarCity': '\u041C\u0430\u0441\u0435\u0440\u0443'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u041C\u0431\u0430\u0431\u0430\u043D\u0435'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u041C\u043E\u0433\u0430\u0434\u0438\u0448'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u041C\u043E\u043D\u0440\u043E\u0432\u0438\u0458\u0430'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u041D\u0430\u0458\u0440\u043E\u0431\u0438'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u041D\u045F\u0430\u043C\u0435\u043D\u0430'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0412\u0438\u043D\u0434\u0445\u0443\u043A'
                        },
                        'Tunis': {
                            'exemplarCity': '\u0442\u0443\u043D\u0438\u0436\u0430\u043D\u0441\u043A\u043E'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u0422\u0440\u0438\u043F\u043E\u043B\u0438'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u0421\u0430\u043E \u0422\u043E\u043C\u0435'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442\u043E \u041D\u043E\u0432\u043E'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u0423\u0430\u0433\u0430\u0434\u0443\u0433\u0443'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u041D\u0430\u0432\u0430\u043A\u0448\u0443\u0442'
                        },
                        'Niamey': {
                            'exemplarCity': '\u041D\u0438\u0458\u0430\u043C\u0435\u0458'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u041B\u0443\u0441\u0430\u043A\u0430'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u041B\u0443\u043C\u0443\u043C\u0431\u0430\u0448\u0438'
                        },
                        'Luanda': {
                            'exemplarCity': '\u041B\u0443\u0430\u043D\u0434\u0430'
                        },
                        'Lome': {
                            'exemplarCity': '\u041B\u043E\u043C\u0435'
                        },
                        'Conakry': {
                            'exemplarCity': '\u041A\u043E\u043D\u0430\u043A\u0440\u0438'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u0421\u0435\u0443\u0442\u0430'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u041A\u0430\u0437\u0430\u0431\u043B\u0430\u043D\u043A\u0430'
                        },
                        'Cairo': {
                            'exemplarCity': '\u041A\u0430\u0438\u0440\u043E'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u0411\u0443\u045F\u0443\u043C\u0431\u0443\u0440\u0430'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u0411\u0440\u0430\u0437\u0430\u0432\u0438\u043B'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u0411\u043B\u0430\u043D\u0442\u0438\u0440'
                        },
                        'Bissau': {
                            'exemplarCity': '\u0411\u0438\u0441\u0430\u043E'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0410\u0431\u0438\u045F\u0430\u043D'
                        },
                        'Accra': {
                            'exemplarCity': '\u0410\u043A\u0440\u0430'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0410\u0434\u0438\u0441 \u0410\u0431\u0435\u0431\u0430'
                        },
                        'Algiers': {
                            'exemplarCity': '\u0430\u043B\u0436\u0438\u0440\u0441\u043A\u043E'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0428\u0430\u043D\u0433\u0430\u0458'
                        },
                        'Seoul': {
                            'exemplarCity': '\u0421\u0435\u0443\u043B'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u0421\u0430\u043C\u0430\u0440\u043A\u0430\u043D\u0434'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D'
                        },
                        'Saigon': {
                            'exemplarCity': '\u0425\u043E \u0428\u0438 \u041C\u0438\u043D'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u0420\u0438\u0458\u0430\u0434'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u0420\u0430\u043D\u0433\u0443\u043D'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430'
                        },
                        'Qatar': {
                            'exemplarCity': '\u041A\u0430\u0442\u0430\u0440'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u041F\u0458\u043E\u043D\u0433\u0458\u0430\u043D\u0433'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u041F\u043E\u043D\u0442\u0438\u0430\u043D\u0430\u043A'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u041F\u043D\u043E\u043C \u041F\u0435\u043D'
                        },
                        'Oral': {
                            'exemplarCity': '\u041E\u0440\u0430\u043B'
                        },
                        'Omsk': {
                            'exemplarCity': '\u041E\u043C\u0441\u043A'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u0411\u0430\u0433\u0434\u0430\u0434'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u0427\u043E\u043D\u0433\u043A\u0438\u043D\u0433'
                        },
                        'Colombo': {
                            'exemplarCity': '\u041A\u043E\u043B\u043E\u043C\u0431\u043E'
                        },
                        'Damascus': {
                            'exemplarCity': '\u0414\u0430\u043C\u0430\u0441\u043A'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u0414\u0430\u043A\u0430'
                        },
                        'Dili': {
                            'exemplarCity': '\u0414\u0438\u043B\u0438'
                        },
                        'Dubai': {
                            'exemplarCity': '\u0414\u0443\u0431\u0430\u0438'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u0414\u0443\u0448\u0430\u043D\u0431\u0435'
                        },
                        'Gaza': {
                            'exemplarCity': '\u0413\u0430\u0437\u0430'
                        },
                        'Harbin': {
                            'exemplarCity': '\u0425\u0430\u0440\u0431\u0438\u043D'
                        },
                        'Hebron': {
                            'exemplarCity': '\u0425\u0435\u0431\u0440\u043E\u043D'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u0425\u043E\u043D\u0433 \u041A\u043E\u043D\u0433'
                        },
                        'Hovd': {
                            'exemplarCity': '\u0425\u043E\u0432\u0434'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0418\u0440\u043A\u0443\u0446\u043A'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u040F\u0430\u043A\u0430\u0440\u0442\u0430'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u040F\u0430\u0458\u0430\u043F\u0443\u0440\u0430'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u0423\u043B\u0430\u043D \u0411\u0430\u0442\u043E\u0440'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u0423\u0440\u0443\u043C\u043A\u0432\u0438'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u0423\u0441\u0442-\u041D\u0435\u0440\u0430'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0412\u0438\u0458\u0435\u043D\u0442\u0438\u0458\u0430\u043D'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u0408\u0430\u043A\u0443\u0442\u0441\u043A'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u0408\u0435\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u0408\u0435\u0440\u0435\u0432\u0430\u043D'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u0422\u043E\u043A\u0438\u043E'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u0422\u0438\u043C\u043F\u0443'
                        },
                        'Tehran': {
                            'exemplarCity': '\u0422\u0435\u0445\u0435\u0440\u0430\u043D'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u0422\u0431\u0438\u043B\u0438\u0441\u0438'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u0422\u0430\u0448\u043A\u0435\u043D\u0442'
                        },
                        'Taipei': {
                            'exemplarCity': '\u0422\u0430\u0458\u043F\u0435\u0458'
                        },
                        'Singapore': {
                            'exemplarCity': '\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u0408\u0435\u0440\u0443\u0441\u0430\u043B\u0438\u043C'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0410\u0448\u0445\u0430\u0431\u0430\u0434'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0410\u043A\u0443\u0442\u043E\u0431\u0435'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0410\u043A\u0442\u0430\u0443'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0410\u043D\u0430\u0434\u0438\u0440'
                        },
                        'Amman': {
                            'exemplarCity': '\u0410\u043C\u0430\u043D'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0410\u043B\u043C\u0430\u0442\u0438'
                        },
                        'Aden': {
                            'exemplarCity': '\u0410\u0434\u0435\u043D'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u0411\u0430\u0445\u0440\u0435\u0438\u043D'
                        },
                        'Baku': {
                            'exemplarCity': '\u0411\u0430\u043A\u0443'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u0411\u0430\u043D\u043A\u043E\u043A'
                        },
                        'Beirut': {
                            'exemplarCity': '\u0411\u0435\u0458\u0440\u0443\u0442'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u0411\u0438\u0448\u043A\u0435\u043A'
                        },
                        'Brunei': {
                            'exemplarCity': '\u0411\u0440\u0443\u043D\u0435\u0458\u0438'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u041A\u0430\u043B\u043A\u0443\u0442\u0430'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u0427\u043E\u0458\u0431\u0430\u043B\u0441\u0430\u043D'
                        },
                        'Kabul': {
                            'exemplarCity': '\u041A\u0430\u0431\u0443\u043B'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u041A\u0430\u043C\u0447\u0430\u0442\u043A\u0430'
                        },
                        'Karachi': {
                            'exemplarCity': '\u041A\u0430\u0440\u0430\u0447\u0438'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u041A\u0430\u0448\u0433\u0430\u0440'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u041A\u0430\u0442\u043C\u0430\u043D\u0434\u0443'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u0425\u0430\u043D\u0434\u0438\u0433\u0430'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u041A\u0440\u0430\u0441\u043D\u043E\u0458\u0430\u0440\u0441\u043A'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u041A\u0443\u0430\u043B\u0430 \u041B\u0443\u043C\u043F\u0443\u0440'
                        },
                        'Kuching': {
                            'exemplarCity': '\u041A\u0443\u0447\u0438\u043D\u0433'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u041A\u0443\u0432\u0430\u0458\u0442'
                        },
                        'Macau': {
                            'exemplarCity': '\u041C\u0430\u043A\u0430\u0443'
                        },
                        'Magadan': {
                            'exemplarCity': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D'
                        },
                        'Makassar': {
                            'exemplarCity': '\u041C\u0430\u043A\u0430\u0441\u0430\u0440'
                        },
                        'Manila': {
                            'exemplarCity': '\u041C\u0430\u043D\u0438\u043B\u0430'
                        },
                        'Muscat': {
                            'exemplarCity': '\u041C\u0443\u0441\u043A\u0430\u0442'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u041D\u0438\u043A\u043E\u0437\u0438\u0458\u0430'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u041D\u043E\u0432\u043E\u043A\u0443\u0437\u045A\u0435\u0446\u043A'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': '\u0421\u0435\u0458\u0448\u0435\u043B\u0438 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': '\u0421\u0430\u043C\u043E\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0430\u043C\u043E\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0430\u043C\u043E\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u0421\u0430\u043C\u0430\u0440\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0430\u043C\u0430\u0440\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0430\u043C\u0430\u0440\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u0420\u043E\u0442\u0435\u0440\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u0420\u0435\u0438\u043D\u0438\u043E\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u041F\u043E\u043D\u043F\u0435\u0438 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u041F\u0438\u0442\u043A\u0435\u0440\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u0421\u0435\u043D \u041F\u0458\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0435\u043D \u041F\u0458\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0435\u043D \u041F\u0458\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u0424\u0435\u043D\u0438\u043A\u0441 \u043E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u0424\u0438\u043B\u0438\u043F\u0438\u043D\u0438 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0424\u0438\u043B\u0438\u043F\u0438\u043D\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0424\u0438\u043B\u0438\u043F\u0438\u043D\u0438 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u041F\u0435\u0440\u0443 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041F\u0435\u0440\u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041F\u0435\u0440\u0443 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0458 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0458 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0458 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u041F\u0430\u043F\u0443\u0430 \u041D\u043E\u0432\u0430 \u0413\u0432\u0438\u043D\u0435\u0458\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u041F\u0430\u043B\u0430\u0443 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u041E\u043C\u0441\u043A \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041E\u043C\u0441\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041E\u043C\u0441\u043A \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u0440\u0438\u0458\u0430\u043D\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u0424\u0435\u0440\u043D\u0430\u043D\u0434\u043E \u0434\u0435 \u041D\u043E\u0440\u043E\u045A\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0424\u0435\u0440\u043D\u0430\u043D\u0434\u043E \u0434\u0435 \u041D\u043E\u0440\u043E\u045A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0424\u0435\u0440\u043D\u0430\u043D\u0434\u043E \u0434\u0435 \u041D\u043E\u0440\u043E\u045A\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u041D\u043E\u0440\u0444\u043E\u043B\u043A \u041E\u0441\u0442\u0440\u0432\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u041D\u0438\u0443\u0435 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u040A\u0443\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u040A\u0443\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u040A\u0443\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u0410\u043C\u0430\u0437\u043E\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u043C\u0430\u0437\u043E\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u043C\u0430\u0437\u043E\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u0418\u0441\u0442\u043E\u0447\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u0418\u0441\u0442\u043E\u0447\u043D\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u0418\u0441\u0442\u043E\u0447\u043D\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u041F\u043B\u0430\u043D\u0438\u043D\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u041F\u043B\u0430\u043D\u0438\u043D\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u041F\u043B\u0430\u043D\u0438\u043D\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u041F\u0430\u0446\u0438\u0444\u0438\u0447\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u041F\u0430\u0446\u0438\u0444\u0438\u0447\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u0447\u043A\u0438 \u041F\u0430\u0446\u0438\u0444\u0438\u0447\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u0410\u043D\u0430\u0434\u0438\u0440 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u043D\u0430\u0434\u0438\u0440 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u043D\u0430\u0434\u0438\u0440 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\u0410\u043A\u0432\u0430\u0442\u0430\u0443 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u043A\u0432\u0430\u0442\u0430\u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u043A\u0432\u0430\u0442\u0430\u0443 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\u0410\u043A\u0443\u0442\u043E\u0431\u0435 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u043A\u0443\u0442\u043E\u0431\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u043A\u0443\u0442\u043E\u0431\u0435 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u0417\u0435\u043B\u0435\u043D\u0438\u0440\u0442\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0417\u0435\u043B\u0435\u043D\u0438\u0440\u0442\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0417\u0435\u043B\u0435\u043D\u043E\u0440\u0442\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u0427\u0430\u043C\u043E\u0440\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u0427\u0430\u0442\u0430\u043C \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0427\u0430\u0442\u0430\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0427\u0430\u0442\u0430\u043C \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u0427\u0438\u043B\u0435 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0427\u0438\u043B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0427\u0438\u043B\u0435 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u041A\u0438\u043D\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u0438\u043D\u0435\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u0438\u043D\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u0427\u043E\u0458\u0431\u0430\u043B\u0441\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0427\u043E\u0458\u0431\u0430\u043B\u0441\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0427\u043E\u0458\u0431\u0430\u043B\u0441\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u0411\u043E\u0436\u0438\u045B\u043D\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u041A\u043E\u043A\u043E\u0441 (\u041A\u0435\u043B\u0438\u043D\u0433) \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u0458\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u0458\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u041A\u0443\u043A\u043E\u0432\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u0443\u043A\u043E\u0432\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u0443\u043A\u043E\u0432\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u043F\u043E\u043B\u0443-\u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u041A\u0443\u0431\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u0443\u0431\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u0443\u0431\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u0414\u0435\u0458\u0432\u0438\u0441 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u0414\u0438\u043C\u043E\u043D \u0434\u2019\u0423\u0440\u0432\u0438\u043B \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u0418\u0441\u0442\u043E\u0447\u043D\u0438 \u0442\u0438\u043C\u043E\u0440 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u0423\u0441\u043A\u0440\u0448\u045A\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0423\u0441\u043A\u0440\u0448\u045A\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0423\u0441\u043A\u0440\u0448\u045A\u0430 \u043E\u0441\u0442\u0440\u0432\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u0415\u043A\u0432\u0430\u0434\u043E\u0440 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u0421\u0440\u0435\u0434\u045A\u0435\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0421\u0440\u0435\u0434\u045A\u0435\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0421\u0440\u0435\u0434\u045A\u0435\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u0418\u0441\u0442\u043E\u0447\u043D\u043E\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0418\u0441\u0442\u043E\u0447\u043D\u043E\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0418\u0441\u0442\u043E\u0447\u043D\u043E\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E\u0435\u0432\u0440\u043E\u043F\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u0424\u043E\u043B\u043A\u043B\u0430\u043D\u0434\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0424\u043E\u043B\u043A\u043B\u0430\u043D\u0434\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0424\u043E\u043B\u043A\u043B\u0430\u043D\u0434\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u0424\u0438\u045F\u0438 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0424\u0438\u045F\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0424\u0438\u045F\u0438 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u0424\u0440\u0430\u043D\u0446\u0443\u0441\u043A\u0430 \u0413\u0432\u0430\u0458\u0430\u043D\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u0424\u0440\u0430\u043D\u0446\u0443\u0441\u043A\u043E \u0458\u0443\u0436\u043D\u043E \u0438 \u0430\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0447\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u0413\u0430\u043B\u0430\u043F\u0430\u0433\u043E\u0441 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u0422\u043E\u043A\u0435\u043B\u0430\u0443 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u0422\u043E\u043D\u0433\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0422\u043E\u043D\u0433\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0422\u043E\u043D\u0433\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u0427\u0443\u0443\u043A \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u0422\u0443\u0432\u0430\u043B\u0443 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u0423\u0440\u0443\u0433\u0432\u0430\u0458 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0423\u0440\u0443\u0433\u0432\u0430\u0458 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0423\u0440\u0443\u0433\u0432\u0430\u0458 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u0412\u0430\u043D\u0443\u0430\u0442\u0443 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0412\u0430\u043D\u0443\u0430\u0442\u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0412\u0430\u043D\u0443\u0430\u0442\u0443 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u0408\u0435\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0408\u0435\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0408\u0435\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u0408\u0430\u043A\u0443\u0442\u0441\u043A \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0408\u0430\u043A\u0443\u0442\u0441\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0408\u0430\u043A\u0443\u0442\u0441\u043A \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u0412\u0430\u043B\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043D\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u0412\u0435\u0458\u043A \u043E\u0441\u0442\u0440\u0432\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u043A \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u0412\u0435\u043D\u0435\u0446\u0443\u0435\u043B\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u0422\u0430\u045F\u0438\u043A\u0438\u0441\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u0422\u0430\u0438\u043F\u0435\u0438 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0422\u0430\u0438\u043F\u0435\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0422\u0430\u0438\u043F\u0435\u0438 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u0422\u0430\u0445\u0438\u0442\u0438 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u0428\u043E\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u0421\u0443\u0440\u0438\u043D\u0430\u043C'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u0408\u0443\u0436\u043D\u0430 \u040F\u043E\u0440\u045F\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u0421\u043E\u043B\u043E\u043C\u043E\u043D\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u0417\u0430\u043B\u0438\u0432 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u0413\u0443\u0430\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0438 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0438 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0438 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u0418\u0441\u0442\u043E\u0447\u043D\u0438 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0418\u0441\u0442\u043E\u0447\u043D\u0438 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0418\u0441\u0442\u043E\u0447\u043D\u0438 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u0413\u0440\u0438\u043D\u0432\u0438\u0447 \u0441\u0440\u0435\u0434\u045A\u0435 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u0413\u0438\u043B\u0431\u0435\u0440\u0442 \u043E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u0413\u0440\u0443\u0437\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0413\u0440\u0443\u0437\u0438\u0458\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0413\u0440\u0443\u0437\u0438\u0458\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u0413\u0430\u043C\u0431\u0438\u0458\u0435\u0440 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u0410\u043A\u0440\u0435 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u043A\u0440\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u043A\u0440\u0435 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u0410\u0432\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E-\u0430\u0444\u0440\u0438\u0447\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u0418\u0441\u0442\u043E\u0447\u043D\u043E-\u0430\u0444\u0440\u0438\u0447\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u0408\u0443\u0436\u043D\u043E-\u0430\u0444\u0440\u0438\u0447\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E-\u0430\u0444\u0440\u0438\u0447\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E-\u0430\u0444\u0440\u0438\u0447\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E-\u0430\u0444\u0440\u0438\u0447\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u0410\u0459\u0430\u0448\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0459\u0430\u0448\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0459\u0430\u0448\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\u0410\u043B\u043C\u0430\u0442\u0438 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u043B\u043C\u0430\u0442\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u043B\u043C\u0430\u0442\u0438 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0410\u0440\u0430\u0431\u0438\u0458\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0440\u0430\u0431\u0438\u0458\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0440\u0430\u0431\u0438\u0458\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430 \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430 \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430 \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u0410\u0442\u043B\u0430\u043D\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0442\u043B\u0430\u043D\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0442\u043B\u0430\u043D\u0441\u043A\u043E \u043B\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0437\u0430\u043F\u0430\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0437\u0430\u043F\u0430\u0434\u043D\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E \u0437\u0430\u043F\u0430\u0434\u043D\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0437\u0430\u043F\u0430\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0437\u0430\u043F\u0430\u0434\u043D\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0443\u0441\u0442\u0440\u0430\u043B\u0438\u0458\u0441\u043A\u043E \u0437\u0430\u043F\u0430\u0434\u043D\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u0410\u0437\u0435\u0440\u0431\u0435\u0458\u045F\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0437\u0435\u0440\u0431\u0435\u0458\u045F\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0437\u0435\u0440\u0431\u0435\u0458\u045F\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u0410\u0437\u043E\u0440\u0438 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0410\u0437\u043E\u0440\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0410\u0437\u043E\u0440\u0438 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u0411\u0443\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u0411\u043E\u043B\u0438\u0432\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u0458\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u0458\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u0411\u0440\u0443\u043D\u0435\u0458 \u0414\u0430\u0440\u0443\u0441\u0430\u043B\u0443\u043C \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u0413\u0432\u0430\u0458\u0430\u043D\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u0425\u0430\u0432\u0430\u0458\u0441\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0425\u0430\u0432\u0430\u0458\u0441\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0425\u0430\u0432\u0430\u0458\u0441\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u0425\u043E\u043D\u0433 \u041A\u043E\u043D\u0433 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0425\u043E\u043D\u0433 \u041A\u043E\u043D\u0433 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0425\u043E\u043D\u0433 \u041A\u043E\u043D\u0433 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u0425\u043E\u0432\u0434 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0425\u043E\u0432\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0425\u043E\u0432\u0434 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u0418\u043D\u0434\u0438\u0458\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u0418\u043D\u0434\u0438\u0458\u0441\u043A\u043E \u043E\u043A\u0435\u0430\u043D\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u0418\u043D\u0434\u043E\u043A\u0438\u043D\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u043E-\u0438\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0458\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u0418\u0441\u0442\u043E\u0447\u043D\u043E-\u0438\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0458\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E-\u0438\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0458\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u0418\u0440\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0418\u0440\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0418\u0440\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u0418\u0440\u043A\u0443\u0446\u043A \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0418\u0440\u043A\u0443\u0446\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0418\u0440\u043A\u0443\u0446\u043A \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u0418\u0437\u0440\u0430\u0435\u043B\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0418\u0437\u0440\u0430\u0435\u043B\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0418\u0437\u0440\u0430\u0435\u043B\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u0408\u0430\u043F\u0430\u043D\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0408\u0430\u043F\u0430\u043D\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0408\u0430\u043F\u0430\u043D\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A\u043E-\u043A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A\u043E-\u043A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A\u043E-\u043A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u0418\u0441\u0442\u043E\u0447\u043D\u043E-\u043A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u043E-\u043A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u041A\u043E\u0440\u0435\u0458\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u043E\u0440\u0435\u0458\u0441\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u043E\u0440\u0435\u0458\u0441\u043A\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u041A\u043E\u0448\u0440\u0435 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u041A\u0440\u0430\u0441\u043D\u043E\u0458\u0430\u0440\u0441\u043A \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041A\u0440\u0430\u0441\u043D\u043E\u0458\u0430\u0440\u0441\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041A\u0440\u0430\u0441\u043D\u043E\u0458\u0430\u0440\u0441\u043A \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u041A\u0438\u0440\u0433\u0438\u0437\u0441\u0442\u0430\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u0428\u0440\u0438 \u041B\u0430\u043D\u043A\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u041B\u0438\u043D\u0435 \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u041B\u043E\u0440\u0434 \u0425\u043E\u0432 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041B\u043E\u0440\u0434 \u0425\u043E\u0432 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041B\u043E\u0440\u0434 \u0425\u043E\u0432 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u041C\u0430\u043A\u0430\u043E \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041C\u0430\u043A\u0430\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041C\u0430\u043A\u0430\u043E \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u041C\u0430\u043A\u0432\u0435\u0440\u0438\u0458\u0441\u043A\u043E \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u041C\u0430\u043B\u0435\u0437\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u041C\u0430\u043B\u0434\u0438\u0432\u0438 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u041C\u0430\u0440\u043A\u0438\u0437 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u041C\u0430\u0440\u0448\u0430\u043B\u0441\u043A\u0430 \u041E\u0441\u0442\u0440\u0432\u0430 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u041C\u0430\u0443\u0440\u0438\u0446\u0438\u0458\u0443\u0441 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041C\u0430\u0443\u0440\u0438\u0446\u0438\u0458\u0443\u0441 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041C\u0430\u0443\u0440\u0438\u0446\u0438\u0458\u0443\u0441 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u041C\u043E\u0441\u043E\u043D \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u0423\u043B\u0430\u043D \u0411\u0430\u0442\u043E\u0440 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u0423\u043B\u0430\u043D \u0411\u0430\u0442\u043E\u0440 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u0423\u043B\u0430\u043D \u0411\u0430\u0442\u043E\u0440 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u041C\u043E\u0441\u043A\u0432\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041C\u043E\u0441\u043A\u0432\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041C\u043E\u0441\u043A\u0432\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u041C\u0438\u0458\u0430\u043D\u043C\u0430\u0440 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u041D\u0430\u0443\u0440\u0443 \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u041D\u0435\u043F\u0430\u043B \u0432\u0440\u0435\u043C\u0435'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u041D\u043E\u0432\u0430 \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u0458\u0430 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041D\u043E\u0432\u0430 \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u0458\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041D\u043E\u0432\u0430 \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u0458\u0430 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u041D\u043E\u0432\u0438 \u0417\u0435\u043B\u0430\u043D\u0434 \u0432\u0440\u0435\u043C\u0435',
                            'standard': '\u041D\u043E\u0432\u0438 \u0417\u0435\u043B\u0430\u043D\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                            'daylight': '\u041D\u043E\u0432\u0438 \u0417\u0435\u043B\u0430\u043D\u0434 \u043B\u0435\u0442\u045A\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u045A\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0430'
                        }
                    }
                },
                'hourFormat': '+HHmm;-HHmm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '\u0412\u0440\u0435\u043C\u0435 \u0443 \u0437\u0435\u043C\u0459\u0438: {0}',
                'regionFormat-type-daylight': '{0}, \u043B\u0435\u0442\u045A\u0435 \u0432\u0440\u0435\u043C\u0435',
                'regionFormat-type-standard': '{0}, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u0430\u0432\u0433',
                                '7': '\u0458\u0443\u043B',
                                '6': '\u0458\u0443\u043D',
                                '5': '\u043C\u0430\u0458',
                                '12': '\u0434\u0435\u0446',
                                '11': '\u043D\u043E\u0432',
                                '10': '\u043E\u043A\u0442',
                                '9': '\u0441\u0435\u043F',
                                '1': '\u0458\u0430\u043D',
                                '2': '\u0444\u0435\u0431',
                                '3': '\u043C\u0430\u0440',
                                '4': '\u0430\u043F\u0440'
                            },
                            'narrow': {
                                '8': '\u0430',
                                '7': '\u0458',
                                '6': '\u0458',
                                '5': '\u043C',
                                '12': '\u0434',
                                '11': '\u043D',
                                '10': '\u043E',
                                '9': '\u0441',
                                '1': '\u0458',
                                '2': '\u0444',
                                '3': '\u043C',
                                '4': '\u0430'
                            },
                            'wide': {
                                '8': '\u0430\u0432\u0433\u0443\u0441\u0442',
                                '7': '\u0458\u0443\u043B',
                                '6': '\u0458\u0443\u043D',
                                '5': '\u043C\u0430\u0458',
                                '12': '\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440',
                                '11': '\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
                                '10': '\u043E\u043A\u0442\u043E\u0431\u0430\u0440',
                                '9': '\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
                                '1': '\u0458\u0430\u043D\u0443\u0430\u0440',
                                '2': '\u0444\u0435\u0431\u0440\u0443\u0430\u0440',
                                '3': '\u043C\u0430\u0440\u0442',
                                '4': '\u0430\u043F\u0440\u0438\u043B'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u0430\u0432\u0433',
                                '7': '\u0458\u0443\u043B',
                                '6': '\u0458\u0443\u043D',
                                '5': '\u043C\u0430\u0458',
                                '12': '\u0434\u0435\u0446',
                                '11': '\u043D\u043E\u0432',
                                '10': '\u043E\u043A\u0442',
                                '9': '\u0441\u0435\u043F',
                                '1': '\u0458\u0430\u043D',
                                '2': '\u0444\u0435\u0431',
                                '3': '\u043C\u0430\u0440',
                                '4': '\u0430\u043F\u0440'
                            },
                            'narrow': {
                                '8': '\u0430',
                                '7': '\u0458',
                                '6': '\u0458',
                                '5': '\u043C',
                                '12': '\u0434',
                                '11': '\u043D',
                                '10': '\u043E',
                                '9': '\u0441',
                                '1': '\u0458',
                                '2': '\u0444',
                                '3': '\u043C',
                                '4': '\u0430'
                            },
                            'wide': {
                                '8': '\u0430\u0432\u0433\u0443\u0441\u0442',
                                '7': '\u0458\u0443\u043B',
                                '6': '\u0458\u0443\u043D',
                                '5': '\u043C\u0430\u0458',
                                '12': '\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440',
                                '11': '\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
                                '10': '\u043E\u043A\u0442\u043E\u0431\u0430\u0440',
                                '9': '\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
                                '1': '\u0458\u0430\u043D\u0443\u0430\u0440',
                                '2': '\u0444\u0435\u0431\u0440\u0443\u0430\u0440',
                                '3': '\u043C\u0430\u0440\u0442',
                                '4': '\u0430\u043F\u0440\u0438\u043B'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u043D\u0435\u0434',
                                'mon': '\u043F\u043E\u043D',
                                'tue': '\u0443\u0442\u043E',
                                'wed': '\u0441\u0440\u0435',
                                'thu': '\u0447\u0435\u0442',
                                'fri': '\u043F\u0435\u0442',
                                'sat': '\u0441\u0443\u0431'
                            },
                            'narrow': {
                                'sun': '\u043D',
                                'mon': '\u043F',
                                'tue': '\u0443',
                                'wed': '\u0441',
                                'thu': '\u0447',
                                'fri': '\u043F',
                                'sat': '\u0441'
                            },
                            'short': {
                                'sun': '\u043D\u0435\u0434',
                                'mon': '\u043F\u043E\u043D',
                                'tue': '\u0443\u0442\u043E',
                                'wed': '\u0441\u0440\u0435',
                                'thu': '\u0447\u0435\u0442',
                                'fri': '\u043F\u0435\u0442',
                                'sat': '\u0441\u0443\u0431'
                            },
                            'wide': {
                                'sun': '\u043D\u0435\u0434\u0435\u0459\u0430',
                                'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
                                'tue': '\u0443\u0442\u043E\u0440\u0430\u043A',
                                'wed': '\u0441\u0440\u0435\u0434\u0430',
                                'thu': '\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
                                'fri': '\u043F\u0435\u0442\u0430\u043A',
                                'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u043D\u0435\u0434',
                                'mon': '\u043F\u043E\u043D',
                                'tue': '\u0443\u0442\u043E',
                                'wed': '\u0441\u0440\u0435',
                                'thu': '\u0447\u0435\u0442',
                                'fri': '\u043F\u0435\u0442',
                                'sat': '\u0441\u0443\u0431'
                            },
                            'narrow': {
                                'sun': '\u043D',
                                'mon': '\u043F',
                                'tue': '\u0443',
                                'wed': '\u0441',
                                'thu': '\u0447',
                                'fri': '\u043F',
                                'sat': '\u0441'
                            },
                            'short': {
                                'sun': '\u043D\u0435',
                                'mon': '\u043F\u043E',
                                'tue': '\u0443\u0442',
                                'wed': '\u0441\u0440',
                                'thu': '\u0447\u0435',
                                'fri': '\u043F\u0435',
                                'sat': '\u0441\u0443'
                            },
                            'wide': {
                                'sun': '\u043D\u0435\u0434\u0435\u0459\u0430',
                                'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
                                'tue': '\u0443\u0442\u043E\u0440\u0430\u043A',
                                'wed': '\u0441\u0440\u0435\u0434\u0430',
                                'thu': '\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
                                'fri': '\u043F\u0435\u0442\u0430\u043A',
                                'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '\u041A1',
                                '2': '\u041A2',
                                '3': '\u041A3',
                                '4': '\u041A4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '\u041F\u0440\u0432\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                '2': '\u0414\u0440\u0443\u0433\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                '3': '\u0422\u0440\u0435\u045B\u0435 \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                '4': '\u0427\u0435\u0442\u0432\u0440\u0442\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '\u041A1',
                                '2': '\u041A2',
                                '3': '\u041A3',
                                '4': '\u041A4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '\u041F\u0440\u0432\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                '2': '\u0414\u0440\u0443\u0433\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                '3': '\u0422\u0440\u0435\u045B\u0435 \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                '4': '\u0427\u0435\u0442\u0432\u0440\u0442\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                            },
                            'narrow': {
                                'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                            },
                            'wide': {
                                'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                            },
                            'narrow': {
                                'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                            },
                            'wide': {
                                'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u041F\u0440\u0435 \u043D\u043E\u0432\u0435 \u0435\u0440\u0435',
                            '0-alt-variant': 'BCE',
                            '1': '\u041D\u043E\u0432\u0435 \u0435\u0440\u0435',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u043F. \u043D. \u0435.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D. \u0435.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '\u043F.\u043D.\u0435.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D.\u0435.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, dd. MMMM y.',
                        'long': 'dd. MMMM y.',
                        'medium': 'dd.MM.y.',
                        'short': 'd.M.yy.'
                    },
                    'timeFormats': {
                        'full': 'HH.mm.ss zzzz',
                        'long': 'HH.mm.ss z',
                        'medium': 'HH.mm.ss',
                        'short': 'HH.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMEd': 'E, d. M. y.',
                            'yMd': 'd. M. y.',
                            'yM': 'y-M',
                            'y': 'y.',
                            'ms': 'mm.ss',
                            'MMMMEd': 'E d. MMMM',
                            'MMMMdd': 'dd. MMMM',
                            'MMMMd': 'd. MMMM',
                            'GyMMMd': 'd. MMM y. G',
                            'GyMMMEd': 'E, d. MMM y. G',
                            'h': 'hh a',
                            'H': 'HH',
                            'hm': 'hh.mm a',
                            'Hm': 'HH.mm',
                            'hms': 'hh.mm.ss a',
                            'Hms': 'HH.mm.ss',
                            'yQQQQ': 'QQQQ. y',
                            'yQQQ': 'QQQ. y',
                            'yMMMM': 'MMMM y.',
                            'yMMMEd': 'E, d. MMM y.',
                            'yMMMd': 'd. MMM y.',
                            'yMMM': 'MMM y.',
                            'yMMdd': 'dd.MM.y',
                            'yMM': 'MM.y',
                            'd': 'd',
                            'Ed': 'E d.',
                            'Ehm': 'E, h:mm a',
                            'EHm': 'E, HH:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y. G',
                            'GyMMM': 'MMM y. G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, M-d',
                            'MMdd': 'MM-dd',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMdd': 'dd.MMM',
                            'MMMEd': 'E d. MMM'
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
                                'd': 'E, dd. - E, dd. MMM',
                                'M': 'E, dd. MMM - E, dd. MMM'
                            },
                            'MMMd': {
                                'd': 'dd.-dd. MMM',
                                'M': 'dd. MMM - dd. MMM'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'E, d.M - E, d.M',
                                'M': 'E, d.M - E, d.M'
                            },
                            'Md': {
                                'd': 'd.M - d.M',
                                'M': 'd.M - d.M'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'HH-HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yM': {
                                'M': 'y M - M',
                                'y': 'y M - M'
                            },
                            'yMd': {
                                'd': 'd.M.y. - d.M.y.',
                                'M': 'd.M.y. - d.M.y.',
                                'y': 'd.M.y. - d.M.y.'
                            },
                            'yMEd': {
                                'd': 'E, d.M.y. - E, d.M.y.',
                                'M': 'E, d.M.y. - E, d.M.y.',
                                'y': 'E, d.M.y. - E, d.M.y.'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y.',
                                'y': 'MMM y. - MMM y.'
                            },
                            'yMMMd': {
                                'd': 'dd.-dd. MMM y.',
                                'M': 'dd. MMM - dd. MMM y.',
                                'y': 'dd. MMM y. - dd. MMM y.'
                            },
                            'yMMMEd': {
                                'd': 'E, dd. - E, dd. MMM y.',
                                'M': 'E, dd. MMM - E, dd. MMM y.',
                                'y': 'E, dd. MMM y. - E, dd. MMM y.'
                            },
                            'yMMMM': {
                                'M': 'y-MM \u2013 MM',
                                'y': 'y-MM \u2013 y-MM'
                            },
                            'Hmv': {
                                'H': 'HH.mm-HH.mm v',
                                'm': 'HH.mm-HH.mm v'
                            },
                            'hmv': {
                                'a': 'h.mm a - h.mm a v',
                                'h': 'h.mm-h.mm a v',
                                'm': 'h.mm-h.mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm-HH.mm',
                                'm': 'HH.mm-HH.mm'
                            },
                            'hm': {
                                'a': 'h.mm a - h.mm a',
                                'h': 'h.mm-h.mm a',
                                'm': 'h.mm-h.mm a'
                            },
                            'H': {
                                'H': 'HH-HH'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'intervalFormatFallback': '{0} - {1}'
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
