/* AstroDate
 * Language: ja
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
        AstroDate.lang('ja', {
            'codePatterns': {
                'language': '\u8A00\u8A9E: {0}',
                'script': '\u6587\u5B57: {0}',
                'territory': '\u5730\u57DF: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u4EEE\u540D\u3092\u533A\u5225\u3057\u306A\u3044\u3067\u4E26\u3079\u66FF\u3048',
                    'yes': '\u4EEE\u540D\u3092\u533A\u5225\u3057\u3066\u4E26\u3079\u66FF\u3048'
                },
                'colCaseLevel': {
                    'no': '\u5927\u6587\u5B57\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u306A\u3044\u3067\u4E26\u3079\u66FF\u3048',
                    'yes': '\u5927\u6587\u5B57\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u3066\u4E26\u3079\u66FF\u3048'
                },
                'colCaseFirst': {
                    'lower': '\u5C0F\u6587\u5B57\u512A\u5148\u3067\u4E26\u3079\u66FF\u3048',
                    'no': '\u5927\u6587\u5B57\u5C0F\u6587\u5B57\u3092\u901A\u5E38\u306E\u9806\u5E8F\u3067\u4E26\u3079\u66FF\u3048',
                    'upper': '\u5927\u6587\u5B57\u512A\u5148\u3067\u4E26\u3079\u66FF\u3048'
                },
                'colStrength': {
                    'identical': '\u3059\u3079\u3066\u3092\u533A\u5225\u3057\u3066\u4E26\u3079\u66FF\u3048',
                    'primary': '\u57FA\u672C\u6587\u5B57\u306E\u307F\u3067\u4E26\u3079\u66FF\u3048',
                    'quaternary': '\u30A2\u30AF\u30BB\u30F3\u30C8/\u5927\u6587\u5B57\u5C0F\u6587\u5B57/\u5168\u89D2\u534A\u89D2/\u4EEE\u540D\u3067\u4E26\u3079\u66FF\u3048',
                    'secondary': '\u30A2\u30AF\u30BB\u30F3\u30C8\u3067\u4E26\u3079\u66FF\u3048',
                    'tertiary': '\u30A2\u30AF\u30BB\u30F3\u30C8/\u5927\u6587\u5B57\u5C0F\u6587\u5B57/\u5168\u89D2\u534A\u89D2\u3067\u4E26\u3079\u66FF\u3048'
                },
                'colNumeric': {
                    'no': '\u6570\u5024\u3092\u72EC\u7ACB\u3057\u3066\u4E26\u3079\u66FF\u3048',
                    'yes': '\u6570\u5024\u3092\u6570\u5024\u3068\u3057\u3066\u4E26\u3079\u66FF\u3048'
                },
                'colNormalization': {
                    'no': '\u6B63\u898F\u5316\u3057\u306A\u3044\u3067\u4E26\u3079\u66FF\u3048',
                    'yes': 'Unicode \u6B63\u898F\u5316\u3067\u4E26\u3079\u66FF\u3048'
                },
                'calendar': {
                    'japanese': '\u548C\u66A6',
                    'iso8601': 'ISO-8601',
                    'coptic': '\u30B3\u30D7\u30C8\u66A6',
                    'dangi': '\u30C0\u30F3\u30AE\u66A6',
                    'ethiopic': '\u30A8\u30C1\u30AA\u30D4\u30A2\u66A6',
                    'ethiopic-amete-alem': '\u30A8\u30C1\u30AA\u30D4\u30A2\u5275\u4E16\u7D00\u5143\u66A6',
                    'gregorian': '\u897F\u66A6(\u30B0\u30EC\u30B4\u30EA\u30AA\u66A6)',
                    'hebrew': '\u30E6\u30C0\u30E4\u66A6',
                    'persian': '\u30DA\u30EB\u30B7\u30A2\u66A6',
                    'roc': '\u4E2D\u83EF\u6C11\u56FD\u66A6',
                    'chinese': '\u4E2D\u56FD\u66A6',
                    'buddhist': '\u30BF\u30A4\u4ECF\u6559\u66A6',
                    'indian': '\u30A4\u30F3\u30C9\u56FD\u5B9A\u66A6',
                    'islamic': '\u30A4\u30B9\u30E9\u30E0\u66A6',
                    'islamic-civil': '\u592A\u967D\u30A4\u30B9\u30E9\u30E0\u66A6',
                    'islamic-rgsa': '\u30A4\u30B9\u30E9\u30E0\u66A6(\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2\u3001\u6708\u89B3\u6E2C)',
                    'islamic-tbla': '\u30A4\u30B9\u30E9\u30E0\u66A6(\u5929\u6587\u7D00\u5143)',
                    'islamic-umalqura': '\u30A4\u30B9\u30E9\u30E0\u66A6(\u30A6\u30F3\u30E0\u30FB\u30A2\u30EB\u30AF\u30E9\u30FC)'
                },
                'collation': {
                    'phonebook': '\u96FB\u8A71\u5E33\u9806',
                    'gb2312han': '\u7C21\u4F53\u5B57\u4E2D\u56FD\u8A9E\u9806(GB2312)',
                    'eor': 'eor',
                    'ducet': '\u30E6\u30CB\u30B3\u30FC\u30C9\u7167\u5408\u9806',
                    'dictionary': '\u8F9E\u66F8\u9806',
                    'big5han': '\u7E41\u4F53\u5B57\u4E2D\u56FD\u8A9E\u9806(Big5)',
                    'traditional': '\u30C8\u30E9\u30C7\u30A3\u30C3\u30B7\u30E7\u30CA\u30EB',
                    'standard': '\u6A19\u6E96\u30BD\u30FC\u30C8\u9806\u5E8F',
                    'zhuyin': '\u6CE8\u97F3\u9806',
                    'unihan': '\u90E8\u9996\u9806',
                    'stroke': '\u753B\u6570\u9806',
                    'searchjl': '\u30CF\u30F3\u30B0\u30EB\u8A9E\u982D\u5B50\u97F3\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048',
                    'search': '\u6C4E\u7528\u691C\u7D22',
                    'reformed': '\u30EA\u30D5\u30A9\u30FC\u30E0',
                    'pinyin': '\u30D4\u30F3\u30A4\u30F3',
                    'phonetic': '\u97F3\u58F0\u9806\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048'
                },
                'numbers': {
                    'knda': '\u30AB\u30F3\u30CA\u30C0\u6570\u5B57',
                    'khmr': '\u30AF\u30E1\u30FC\u30EB\u6570\u5B57',
                    'kali': '\u30AB\u30E4\u30FC\u6570\u5B57',
                    'jpanfin': '\u5927\u5B57',
                    'jpan': '\u6F22\u6570\u5B57',
                    'java': '\u30B8\u30E3\u30EF\u6570\u5B57',
                    'hebr': '\u30D8\u30D6\u30E9\u30A4\u6570\u5B57',
                    'hantfin': '\u7E41\u4F53\u5927\u5B57',
                    'hant': '\u7E41\u4F53\u6F22\u6570\u5B57',
                    'hansfin': '\u7C21\u4F53\u5927\u5B57',
                    'hans': '\u7C21\u4F53\u6F22\u6570\u5B57',
                    'hanidec': '\u6F22\u6570\u5B57(\u4F4D\u53D6\u308A\u8A18\u6570\u6CD5)',
                    'guru': '\u30B0\u30EB\u30E0\u30AD\u30FC\u6570\u5B57',
                    'gujr': '\u30B0\u30B8\u30E3\u30E9\u30FC\u30C8\u6570\u5B57',
                    'greklow': '\u30AE\u30EA\u30B7\u30E3\u6570\u5B57(\u5C0F\u6587\u5B57)',
                    'grek': '\u30AE\u30EA\u30B7\u30E3\u6570\u5B57',
                    'bali': '\u30D0\u30EA\u6570\u5B57',
                    'armnlow': '\u30A2\u30EB\u30E1\u30CB\u30A2\u6570\u5B57(\u5C0F\u6587\u5B57)',
                    'armn': '\u30A2\u30EB\u30E1\u30CB\u30A2\u6570\u5B57',
                    'arabext': '\u30DA\u30EB\u30B7\u30A2\u6570\u5B57',
                    'arab': '\u30A2\u30E9\u30D3\u30A2\u30FB\u30A4\u30F3\u30C9\u6570\u5B57',
                    'finance': '\u8CA1\u52D9\u7528\u6F22\u6570\u5B57',
                    'traditional': '\u5F93\u6765\u306E\u8A18\u6570\u6CD5',
                    'native': '\u72EC\u81EA\u306E\u8A18\u6570\u6CD5',
                    'beng': '\u30D9\u30F3\u30AC\u30EB\u6570\u5B57',
                    'brah': '\u30D6\u30E9\u30FC\u30D5\u30DF\u30FC\u6570\u5B57',
                    'cakm': '\u30C1\u30E3\u30AF\u30DE\u6570\u5B57',
                    'cham': '\u30C1\u30E3\u30E0\u6570\u5B57',
                    'deva': '\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\u6570\u5B57',
                    'orya': '\u30AA\u30EA\u30E4\u30FC\u6570\u5B57',
                    'osma': '\u30AA\u30B9\u30DE\u30CB\u30A2\u6570\u5B57',
                    'roman': '\u30ED\u30FC\u30DE\u6570\u5B57',
                    'romanlow': '\u30ED\u30FC\u30DE\u6570\u5B57(\u5C0F\u6587\u5B57)',
                    'saur': '\u30B5\u30A6\u30E9\u30FC\u30B7\u30E5\u30C8\u30E9\u6570\u5B57',
                    'shrd': '\u30B7\u30E3\u30FC\u30E9\u30C0\u30FC\u6570\u5B57',
                    'sora': '\u30BD\u30E9\u30FB\u30BD\u30F3\u30DA\u30F3\u6570\u5B57',
                    'sund': '\u30B9\u30F3\u30C0\u6570\u5B57',
                    'vaii': '\u30F4\u30A1\u30A4\u6587\u5B57\u306E\u8A18\u6570\u6CD5',
                    'tibt': '\u30C1\u30D9\u30C3\u30C8\u6570\u5B57',
                    'thai': '\u30BF\u30A4\u6570\u5B57',
                    'telu': '\u30C6\u30EB\u30B0\u6570\u5B57',
                    'tamldec': '\u30BF\u30DF\u30EB\u6570\u5B57',
                    'taml': '\u30BF\u30DF\u30FC\u30EB\u6570\u5B57',
                    'talu': '\u65B0\u30BF\u30A4\u30FB\u30EB\u30FC\u6570\u5B57',
                    'takr': '\u30BF\u30FC\u30AF\u30EA\u30FC\u6570\u5B57',
                    'olck': '\u30AA\u30EB\u30C1\u30AD\u6570\u5B57',
                    'nkoo': '\u30F3\u30B3\u6570\u5B57',
                    'mymrshan': '\u30DF\u30E3\u30F3\u30DE\u30FC\u30FB\u30B7\u30E3\u30F3\u6570\u5B57',
                    'mymr': '\u30DF\u30E3\u30F3\u30DE\u30FC\u6570\u5B57',
                    'mtei': '\u30DE\u30CB\u30D7\u30EA\u6570\u5B57',
                    'mong': '\u30E2\u30F3\u30B4\u30EB\u6570\u5B57',
                    'mlym': '\u30DE\u30E9\u30E4\u30FC\u30E9\u30E0\u6570\u5B57',
                    'limb': '\u30EA\u30F3\u30D6\u6570\u5B57',
                    'lepc': '\u30EC\u30D7\u30C1\u30E3\u6570\u5B57',
                    'latn': '\u7B97\u7528\u6570\u5B57',
                    'laoo': '\u30E9\u30AA\u6570\u5B57',
                    'lanatham': '\u30E9\u30FC\u30F3\u30CA\u30FC\u30FB\u30BF\u30E0\u6570\u5B57',
                    'lana': '\u30E9\u30FC\u30F3\u30CA\u30FC\u6570\u5B57',
                    'geor': '\u30B0\u30EB\u30B8\u30A2\u6570\u5B57',
                    'fullwide': '\u5168\u89D2\u6570\u5B57',
                    'ethi': '\u30A8\u30C1\u30AA\u30D4\u30A2\u6570\u5B57'
                },
                'colAlternate': {
                    'non-ignorable': '\u8A18\u53F7\u3067\u4E26\u3079\u66FF\u3048',
                    'shifted': '\u8A18\u53F7\u3092\u7121\u8996\u3057\u3066\u4E26\u3079\u66FF\u3048'
                },
                'colBackwards': {
                    'no': '\u30A2\u30AF\u30BB\u30F3\u30C8\uFF08\u9806\u65B9\u5411\uFF09\u3067\u4E26\u3079\u66FF\u3048',
                    'yes': '\u30A2\u30AF\u30BB\u30F3\u30C8\uFF08\u9006\u65B9\u5411\uFF09\u3067\u4E26\u3079\u66FF\u3048'
                }
            },
            'keys': {
                'colNormalization': '\u6B63\u898F\u5316\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048',
                'collation': '\u4E26\u3079\u66FF\u3048\u9806\u5E8F',
                'colHiraganaQuaternary': '\u4EEE\u540D\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048',
                'colCaseLevel': '\u5927\u6587\u5B57\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u305F\u4E26\u3079\u66FF\u3048',
                'colCaseFirst': '\u5927\u6587\u5B57\u9806/\u5C0F\u6587\u5B57\u9806\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048',
                'colBackwards': '\u30A2\u30AF\u30BB\u30F3\u30C8\uFF08\u9006\u65B9\u5411\uFF09\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048',
                'colAlternate': '\u8A18\u53F7\u3092\u7121\u8996\u3057\u305F\u4E26\u3079\u66FF\u3048',
                'calendar': '\u66A6\u6CD5',
                'x': '\u79C1\u7528',
                'variableTop': '\u8A18\u53F7\u3068\u3057\u3066\u4E26\u3079\u66FF\u3048',
                'va': '\u30ED\u30B1\u30FC\u30EB\u306E\u30D0\u30EA\u30A2\u30F3\u30C8',
                'timezone': '\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3',
                'numbers': '\u6570\u5024\u66F8\u5F0F',
                'currency': '\u901A\u8CA8',
                'colStrength': '\u5F37\u5EA6\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048',
                'colNumeric': '\u6570\u5024\u306B\u3088\u308B\u4E26\u3079\u66FF\u3048'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}\u3001{1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u30B5\u30A4\u30D1\u30F3'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u30E9\u30ED\u30C8\u30F3\u30AC'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u30DD\u30FC\u30C8\u30E2\u30EC\u30B9\u30D3\u30FC'
                        },
                        'Ponape': {
                            'exemplarCity': '\u30DD\u30F3\u30DA\u30A4\u5CF6'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u30D4\u30C8\u30B1\u30A2\u30F3\u8AF8\u5CF6'
                        },
                        'Palau': {
                            'exemplarCity': '\u30D1\u30E9\u30AA'
                        },
                        'Auckland': {
                            'exemplarCity': '\u30AA\u30FC\u30AF\u30E9\u30F3\u30C9'
                        },
                        'Apia': {
                            'exemplarCity': '\u30A2\u30D4\u30A2'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u30D5\u30CA\u30D5\u30C6\u30A3'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u30AC\u30E9\u30D1\u30B4\u30B9'
                        },
                        'Gambier': {
                            'exemplarCity': '\u30AC\u30F3\u30D3\u30A8\u8AF8\u5CF6'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u30AC\u30C0\u30EB\u30AB\u30CA\u30EB'
                        },
                        'Guam': {
                            'exemplarCity': '\u30B0\u30A2\u30E0'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u30DB\u30CE\u30EB\u30EB'
                        },
                        'Wallis': {
                            'exemplarCity': '\u30A6\u30A9\u30EA\u30B9\u8AF8\u5CF6'
                        },
                        'Wake': {
                            'exemplarCity': '\u30A6\u30A7\u30FC\u30AF\u5CF6'
                        },
                        'Truk': {
                            'exemplarCity': '\u30C1\u30E5\u30FC\u30AF'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u30C8\u30F3\u30AC\u30BF\u30D7'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u30BF\u30E9\u30EF'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u30BF\u30D2\u30C1'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u30AD\u30EA\u30B9\u30A3\u30DE\u30B9\u30A3\u5CF6'
                        },
                        'Johnston': {
                            'exemplarCity': '\u30B8\u30E7\u30F3\u30B9\u30C8\u30F3\u5CF6'
                        },
                        'Chatham': {
                            'exemplarCity': '\u30C1\u30E3\u30BF\u30E0'
                        },
                        'Easter': {
                            'exemplarCity': '\u30A4\u30FC\u30B9\u30BF\u30FC\u5CF6'
                        },
                        'Efate': {
                            'exemplarCity': '\u30A8\u30D5\u30A7\u30C6\u5CF6'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u30A8\u30F3\u30C0\u30FC\u30D9\u30EA\u30FC\u5CF6'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u30D5\u30A1\u30AB\u30AA\u30D5\u30A9'
                        },
                        'Fiji': {
                            'exemplarCity': '\u30D5\u30A3\u30B8\u30FC'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u30B3\u30B9\u30E9\u30A8'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u30AF\u30A7\u30BC\u30EA\u30F3'
                        },
                        'Majuro': {
                            'exemplarCity': '\u30DE\u30B8\u30E5\u30ED'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u30DE\u30EB\u30AD\u30FC\u30BA'
                        },
                        'Midway': {
                            'exemplarCity': '\u30DF\u30C3\u30C9\u30A6\u30A7\u30FC\u5CF6'
                        },
                        'Nauru': {
                            'exemplarCity': '\u30CA\u30A6\u30EB'
                        },
                        'Niue': {
                            'exemplarCity': '\u30CB\u30A6\u30A8'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u30CE\u30FC\u30D5\u30A9\u30FC\u30AF\u5CF6'
                        },
                        'Noumea': {
                            'exemplarCity': '\u30CC\u30E1\u30A2'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u30D1\u30B4\u30D1\u30B4'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u30EA\u30F3\u30C7\u30DE\u30F3'
                        },
                        'Hobart': {
                            'exemplarCity': '\u30DB\u30D0\u30FC\u30C8'
                        },
                        'Eucla': {
                            'exemplarCity': '\u30E6\u30FC\u30AF\u30E9'
                        },
                        'Darwin': {
                            'exemplarCity': '\u30C0\u30FC\u30A6\u30A3\u30F3'
                        },
                        'Sydney': {
                            'exemplarCity': '\u30B7\u30C9\u30CB\u30FC'
                        },
                        'Perth': {
                            'exemplarCity': '\u30D1\u30FC\u30B9'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u30E1\u30EB\u30DC\u30EB\u30F3'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u30ED\u30FC\u30C9\u30CF\u30A6'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u30A2\u30C7\u30EC\u30FC\u30C9'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u30D6\u30EA\u30B9\u30D9\u30F3'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u30D6\u30ED\u30FC\u30AF\u30F3\u30D2\u30EB'
                        },
                        'Currie': {
                            'exemplarCity': '\u30AB\u30EA\u30FC'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u30E2\u30EB\u30C7\u30A3\u30D6'
                        },
                        'Mahe': {
                            'exemplarCity': '\u30DE\u30D8'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u30B1\u30EB\u30B2\u30EC\u30F3\u8AF8\u5CF6'
                        },
                        'Reunion': {
                            'exemplarCity': '\u30EC\u30E6\u30CB\u30AA\u30F3'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u30DE\u30E8\u30C3\u30C8'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u30A2\u30F3\u30BF\u30CA\u30CA\u30EA\u30DC'
                        },
                        'Chagos': {
                            'exemplarCity': '\u30C1\u30E3\u30B4\u30B9'
                        },
                        'Christmas': {
                            'exemplarCity': '\u30AF\u30EA\u30B9\u30DE\u30B9\u5CF6'
                        },
                        'Cocos': {
                            'exemplarCity': '\u30B3\u30B3\u30B9\u8AF8\u5CF6'
                        },
                        'Comoro': {
                            'exemplarCity': '\u30B3\u30E2\u30ED'
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
                            'exemplarCity': '\u5730\u57DF\u4E0D\u660E'
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
                            'exemplarCity': '\u30ED\u30BC\u30E9\u57FA\u5730'
                        },
                        'Palmer': {
                            'exemplarCity': '\u30D1\u30FC\u30DE\u30FC\u57FA\u5730'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u30DE\u30AF\u30DE\u30FC\u30C9\u57FA\u5730'
                        },
                        'Vostok': {
                            'exemplarCity': '\u30DC\u30B9\u30C8\u30FC\u30AF\u57FA\u5730'
                        },
                        'Syowa': {
                            'exemplarCity': '\u662D\u548C\u57FA\u5730'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u30B5\u30A6\u30B9\u30DD\u30FC\u30EB\u57FA\u5730'
                        },
                        'Casey': {
                            'exemplarCity': '\u30B1\u30FC\u30B7\u30FC\u57FA\u5730'
                        },
                        'Davis': {
                            'exemplarCity': '\u30C7\u30FC\u30D3\u30B9\u57FA\u5730'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u30C7\u30E5\u30E2\u30F3\u30FB\u30C7\u30E5\u30EB\u30D3\u30EB\u57FA\u5730'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u30DE\u30C3\u30B3\u30EA\u30FC'
                        },
                        'Mawson': {
                            'exemplarCity': '\u30E2\u30FC\u30BD\u30F3\u57FA\u5730'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u30ED\u30F3\u30B0\u30A4\u30A7\u30FC\u30EB\u30D3\u30FC\u30F3'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u30C8\u30ED\u30F3\u30C8'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u30C6\u30A3\u30D5\u30A2\u30CA'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u30B5\u30F3\u30C0\u30FC\u30D9\u30A4'
                        },
                        'Thule': {
                            'exemplarCity': '\u30C1\u30E5\u30FC\u30EC'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u30C6\u30B0\u30B7\u30AC\u30EB\u30D1'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u30B9\u30A6\u30A3\u30D5\u30C8\u30AB\u30EC\u30F3\u30C8'
                        },
                        'Chicago': {
                            'exemplarCity': '\u30B7\u30AB\u30B4'
                        },
                        'Cayman': {
                            'exemplarCity': '\u30B1\u30A4\u30DE\u30F3'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u30AB\u30A4\u30A8\u30F3\u30CC'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u30AB\u30BF\u30DE\u30EB\u30AB'
                        },
                        'Caracas': {
                            'exemplarCity': '\u30AB\u30E9\u30AB\u30B9'
                        },
                        'Cancun': {
                            'exemplarCity': '\u30AB\u30F3\u30AF\u30F3'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u30AB\u30F3\u30DD\u30B0\u30E9\u30F3\u30C7'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u30B1\u30F3\u30D6\u30EA\u30C3\u30B8\u30D9\u30A4'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u30D6\u30A8\u30CE\u30B9\u30A2\u30A4\u30EC\u30B9'
                        },
                        'Boise': {
                            'exemplarCity': '\u30DC\u30A4\u30B7'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u30A2\u30B9\u30F3\u30B7\u30AA\u30F3'
                        },
                        'Aruba': {
                            'exemplarCity': '\u30A2\u30EB\u30D0'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u30EA\u30AA\u30AC\u30B8\u30A7\u30B4\u30B9'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u30B5\u30F3\u30D5\u30A1\u30F3'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u30A6\u30B7\u30E5\u30A2\u30A4\u30A2'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u30E9\u30EA\u30AA\u30CF'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u30B5\u30F3\u30EB\u30A4\u30B9'
                            },
                            'Salta': {
                                'exemplarCity': '\u30B5\u30EB\u30BF'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u30C8\u30A5\u30AF\u30DE\u30F3'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u30A2\u30E9\u30B0\u30A1\u30A4\u30CA'
                        },
                        'Antigua': {
                            'exemplarCity': '\u30A2\u30F3\u30C6\u30A3\u30B0\u30A2'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u30A2\u30F3\u30AE\u30E9'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u30A2\u30F3\u30AB\u30EC\u30C3\u30B8'
                        },
                        'Adak': {
                            'exemplarCity': '\u30A2\u30C0\u30C3\u30AF'
                        },
                        'Bahia': {
                            'exemplarCity': '\u30D0\u30A4\u30FC\u30A2'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u30D0\u30A4\u30A2\u30D0\u30F3\u30C7\u30E9'
                        },
                        'Barbados': {
                            'exemplarCity': '\u30D0\u30EB\u30D0\u30C9\u30B9'
                        },
                        'Belem': {
                            'exemplarCity': '\u30D9\u30EC\u30F3'
                        },
                        'Belize': {
                            'exemplarCity': '\u30D9\u30EA\u30FC\u30BA'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u30D6\u30E9\u30F3\u30FB\u30B5\u30D6\u30ED\u30F3'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u30DC\u30A2\u30D3\u30B9\u30BF'
                        },
                        'Bogota': {
                            'exemplarCity': '\u30DC\u30B4\u30BF'
                        },
                        'Curacao': {
                            'exemplarCity': '\u30AD\u30E5\u30E9\u30BD\u30FC'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u30C7\u30F3\u30DE\u30FC\u30AF\u30B7\u30E3\u30A6\u30F3'
                        },
                        'Dawson': {
                            'exemplarCity': '\u30C9\u30FC\u30BD\u30F3'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u30C9\u30FC\u30BD\u30F3\u30AF\u30EA\u30FC\u30AF'
                        },
                        'Denver': {
                            'exemplarCity': '\u30C7\u30F3\u30D0\u30FC'
                        },
                        'Detroit': {
                            'exemplarCity': '\u30C7\u30C8\u30ED\u30A4\u30C8'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u30A8\u30EB\u30E2\u30B7\u30E8'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30D3\u30F3\u30BB\u30F3\u30B9'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30D4\u30FC\u30BF\u30FC\u30BA\u30D0\u30FC\u30B0'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30C6\u30EB\u30B7\u30C6\u30A3'
                            },
                            'Knox': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30CE\u30C3\u30AF\u30B9'
                            },
                            'Winamac': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30A6\u30A3\u30CA\u30DE\u30C3\u30AF'
                            },
                            'Marengo': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30DE\u30EC\u30F3\u30B4'
                            },
                            'Vevay': {
                                'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u5DDE\u30D3\u30D9\u30FC'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u30DD\u30EA\u30B9'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u30A4\u30CC\u30F4\u30A3\u30AF'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u30A4\u30AB\u30EB\u30A4\u30C3\u30C8'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u30B8\u30E3\u30DE\u30A4\u30AB'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u30D5\u30D5\u30A4'
                        },
                        'Juneau': {
                            'exemplarCity': '\u30B8\u30E5\u30CE\u30FC'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u30A4\u30A8\u30ED\u30FC\u30CA\u30A4\u30D5'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u30E4\u30AF\u30BF\u30C3\u30C8'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u30A6\u30A3\u30CB\u30DA\u30B0'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u30DB\u30EF\u30A4\u30C8\u30DB\u30FC\u30B9'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u30D0\u30F3\u30AF\u30FC\u30D0\u30FC'
                        },
                        'Tortola': {
                            'exemplarCity': '\u30C8\u30EB\u30C8\u30FC\u30E9'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u30AF\u30E9\u30EC\u30F3\u30C0\u30A4\u30AF'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u30B1\u30F3\u30BF\u30C3\u30AD\u30FC\u5DDE\u30E2\u30F3\u30C6\u30A3\u30C1\u30A7\u30ED'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u30CF\u30D0\u30CA'
                        },
                        'Halifax': {
                            'exemplarCity': '\u30CF\u30EA\u30D5\u30A1\u30AF\u30B9'
                        },
                        'Guyana': {
                            'exemplarCity': '\u30AC\u30A4\u30A2\u30CA'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u30B0\u30A2\u30E4\u30AD\u30EB'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u30B0\u30A2\u30C6\u30DE\u30E9'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u30B0\u30A2\u30C0\u30EB\u30FC\u30D7'
                        },
                        'Grenada': {
                            'exemplarCity': '\u30B0\u30EC\u30CA\u30C0'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u30B0\u30E9\u30F3\u30C9\u30BF\u30FC\u30AF'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u30B0\u30FC\u30B9\u30D9\u30A4'
                        },
                        'Godthab': {
                            'exemplarCity': '\u30B4\u30C3\u30C9\u30DB\u30FC\u30D7'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u30B0\u30EC\u30FC\u30B9\u30D9\u30A4'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u30D5\u30A9\u30EB\u30BF\u30EC\u30B6'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u30A8\u30EB\u30B5\u30EB\u30D0\u30C9\u30EB'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u30A8\u30A4\u30EB\u30CD\u30DA'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u30A8\u30C9\u30E2\u30F3\u30C8\u30F3'
                        },
                        'Dominica': {
                            'exemplarCity': '\u30C9\u30DF\u30CB\u30AB'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u30C1\u30EF\u30EF'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u30A2\u30C6\u30A3\u30B3\u30AB\u30F3'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u30B3\u30EB\u30C9\u30D0'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u30B3\u30B9\u30BF\u30EA\u30AB'
                        },
                        'Creston': {
                            'exemplarCity': '\u30AF\u30EC\u30B9\u30C8\u30F3'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u30AF\u30A4\u30A2\u30D0'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u30E9\u30D1\u30B9'
                        },
                        'Lima': {
                            'exemplarCity': '\u30EA\u30DE'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u30ED\u30B5\u30F3\u30BC\u30EB\u30B9'
                        },
                        'Louisville': {
                            'exemplarCity': '\u30EB\u30A4\u30D3\u30EB'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u30ED\u30FC\u30EF\u30FC\u30FB\u30D7\u30EA\u30F3\u30BB\u30BA\u30FB\u30AF\u30A6\u30A9\u30FC\u30BF\u30FC'
                        },
                        'Maceio': {
                            'exemplarCity': '\u30DE\u30BB\u30A4\u30AA'
                        },
                        'Managua': {
                            'exemplarCity': '\u30DE\u30CA\u30B0\u30A2'
                        },
                        'Manaus': {
                            'exemplarCity': '\u30DE\u30CA\u30A6\u30B9'
                        },
                        'Marigot': {
                            'exemplarCity': '\u30DE\u30EA\u30B4'
                        },
                        'Martinique': {
                            'exemplarCity': '\u30DE\u30EB\u30C6\u30A3\u30CB\u30FC\u30AF'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u30DE\u30BF\u30E2\u30ED\u30B9'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u30DE\u30B5\u30C8\u30E9\u30F3'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u30E1\u30F3\u30C9\u30FC\u30B5'
                        },
                        'Menominee': {
                            'exemplarCity': '\u30E1\u30CE\u30DF\u30CB\u30FC'
                        },
                        'Merida': {
                            'exemplarCity': '\u30E1\u30EA\u30C0'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u30E1\u30C8\u30E9\u30AB\u30C8\u30E9'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u30E1\u30AD\u30B7\u30B3\u30B7\u30C6\u30A3\u30FC'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u30DF\u30AF\u30ED\u30F3\u5CF6'
                        },
                        'Moncton': {
                            'exemplarCity': '\u30E2\u30F3\u30AF\u30C8\u30F3'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u30E2\u30F3\u30C6\u30EC\u30A4'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u30E2\u30F3\u30C6\u30D3\u30C7\u30AA'
                        },
                        'Montreal': {
                            'exemplarCity': '\u30E2\u30F3\u30C8\u30EA\u30AA\u30FC\u30EB'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u30E2\u30F3\u30C8\u30BB\u30E9\u30C8'
                        },
                        'Nassau': {
                            'exemplarCity': '\u30CA\u30C3\u30BD\u30FC'
                        },
                        'New_York': {
                            'exemplarCity': '\u30CB\u30E5\u30FC\u30E8\u30FC\u30AF'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u30CB\u30D4\u30B4\u30F3'
                        },
                        'Nome': {
                            'exemplarCity': '\u30CE\u30FC\u30E0'
                        },
                        'Noronha': {
                            'exemplarCity': '\u30CE\u30ED\u30FC\u30CB\u30E3'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u30CE\u30FC\u30B9\u30C0\u30B3\u30BF\u5DDE\u30D3\u30E5\u30FC\u30E9\u30FC'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u30CE\u30FC\u30B9\u30C0\u30B3\u30BF\u5DDE\u30CB\u30E5\u30FC\u30BB\u30FC\u30E9\u30E0'
                            },
                            'Center': {
                                'exemplarCity': '\u30CE\u30FC\u30B9\u30C0\u30B3\u30BF\u5DDE\u30BB\u30F3\u30BF\u30FC'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u30AA\u30D2\u30CA\u30AC'
                        },
                        'Panama': {
                            'exemplarCity': '\u30D1\u30CA\u30DE'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u30D1\u30F3\u30CA\u30FC\u30BF\u30F3\u30B0'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u30D1\u30E9\u30DE\u30EA\u30DC'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u30D5\u30A7\u30CB\u30C3\u30AF\u30B9'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u30DD\u30EB\u30C8\u30FC\u30D7\u30E9\u30F3\u30B9'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u30DD\u30FC\u30C8\u30AA\u30D6\u30B9\u30DA\u30A4\u30F3'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u30DD\u30EB\u30C8\u30D9\u30FC\u30EA\u30E7'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u30D7\u30A8\u30EB\u30C8\u30EA\u30B3'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u30EC\u30A4\u30CB\u30FC\u30EA\u30D0\u30FC'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u30E9\u30F3\u30AD\u30F3\u30A4\u30F3\u30EC\u30C3\u30C8'
                        },
                        'Recife': {
                            'exemplarCity': '\u30EC\u30B7\u30D5\u30A7'
                        },
                        'Regina': {
                            'exemplarCity': '\u30EC\u30B8\u30E3\u30A4\u30CA'
                        },
                        'Resolute': {
                            'exemplarCity': '\u30EC\u30BE\u30EA\u30E5\u30FC\u30C8'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u30EA\u30AA\u30D6\u30E9\u30F3\u30B3'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u30B5\u30F3\u30BF\u30A4\u30B5\u30D9\u30EB'
                        },
                        'Santarem': {
                            'exemplarCity': '\u30B5\u30F3\u30BF\u30EC\u30E0'
                        },
                        'Santiago': {
                            'exemplarCity': '\u30B5\u30F3\u30C1\u30A2\u30B4'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u30B5\u30F3\u30C8\u30C9\u30DF\u30F3\u30B4'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u30B5\u30F3\u30D1\u30A6\u30ED'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u30B9\u30B3\u30EB\u30BA\u30D3\u30B9\u30FC\u30F3'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u30B7\u30C3\u30D7\u30ED\u30C3\u30AF'
                        },
                        'Sitka': {
                            'exemplarCity': '\u30B7\u30C8\u30AB'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u30B5\u30F3\u30FB\u30D0\u30EB\u30C6\u30EB\u30DF\u30FC'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u30BB\u30F3\u30C8\u30B8\u30E7\u30F3\u30BA'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u30BB\u30F3\u30C8\u30AD\u30C3\u30C4'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u30BB\u30F3\u30C8\u30EB\u30B7\u30A2'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u30BB\u30F3\u30C8\u30C8\u30FC\u30DE\u30B9'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u30BB\u30F3\u30C8\u30D3\u30F3\u30BB\u30F3\u30C8'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u30B5\u30A6\u30B9\u30B8\u30E7\u30FC\u30B8\u30A2'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u30EC\u30A4\u30AD\u30E3\u30D3\u30AF'
                        },
                        'Stanley': {
                            'exemplarCity': '\u30B9\u30BF\u30F3\u30EC\u30FC'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u30BB\u30F3\u30C8\u30D8\u30EC\u30CA'
                        },
                        'Azores': {
                            'exemplarCity': '\u30A2\u30BE\u30EC\u30B9'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u30D0\u30DF\u30E5\u30FC\u30C0'
                        },
                        'Canary': {
                            'exemplarCity': '\u30AB\u30CA\u30EA\u30A2'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u30D5\u30A7\u30ED\u30FC'
                        },
                        'Madeira': {
                            'exemplarCity': '\u30DE\u30C7\u30A4\u30E9'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u30AA\u30B9\u30ED'
                        },
                        'Moscow': {
                            'exemplarCity': '\u30E2\u30B9\u30AF\u30EF'
                        },
                        'Monaco': {
                            'exemplarCity': '\u30E2\u30CA\u30B3'
                        },
                        'Minsk': {
                            'exemplarCity': '\u30DF\u30F3\u30B9\u30AF'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u30DE\u30EA\u30A8\u30CF\u30E0\u30F3'
                        },
                        'Malta': {
                            'exemplarCity': '\u30DE\u30EB\u30BF'
                        },
                        'Madrid': {
                            'exemplarCity': '\u30DE\u30C9\u30EA\u30FC\u30C9'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30B0'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u82F1\u56FD\u590F\u6642\u9593'
                            },
                            'exemplarCity': '\u30ED\u30F3\u30C9\u30F3'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u30EA\u30E5\u30D6\u30EA\u30E3\u30CA'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u30EA\u30B9\u30DC\u30F3'
                        },
                        'Kiev': {
                            'exemplarCity': '\u30AD\u30A8\u30D5'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u30AB\u30EA\u30FC\u30CB\u30F3\u30B0\u30E9\u30FC\u30C9'
                        },
                        'Jersey': {
                            'exemplarCity': '\u30B8\u30E3\u30FC\u30B8\u30FC'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u30A4\u30B9\u30BF\u30F3\u30D6\u30FC\u30EB'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u30DE\u30F3\u5CF6'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u30D6\u30AB\u30EC\u30B9\u30C8'
                        },
                        'Brussels': {
                            'exemplarCity': '\u30D6\u30EA\u30E5\u30C3\u30BB\u30EB'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u30D6\u30E9\u30C1\u30B9\u30E9\u30D0'
                        },
                        'Berlin': {
                            'exemplarCity': '\u30D9\u30EB\u30EA\u30F3'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u30D9\u30AA\u30B0\u30E9\u30FC\u30C9'
                        },
                        'Athens': {
                            'exemplarCity': '\u30A2\u30C6\u30CD'
                        },
                        'Andorra': {
                            'exemplarCity': '\u30A2\u30F3\u30C9\u30E9'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u30A2\u30E0\u30B9\u30C6\u30EB\u30C0\u30E0'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u30B7\u30F3\u30D5\u30A7\u30ED\u30DD\u30EA'
                        },
                        'Skopje': {
                            'exemplarCity': '\u30B9\u30B3\u30D4\u30A8'
                        },
                        'Sofia': {
                            'exemplarCity': '\u30BD\u30D5\u30A3\u30A2'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u30B9\u30C8\u30C3\u30AF\u30DB\u30EB\u30E0'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u30BF\u30EA\u30F3'
                        },
                        'Tirane': {
                            'exemplarCity': '\u30C6\u30A3\u30E9\u30CA'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u30A6\u30FC\u30B8\u30E5\u30DB\u30ED\u30C9'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u30D5\u30A1\u30C9\u30A5\u30FC\u30C4'
                        },
                        'Zurich': {
                            'exemplarCity': '\u30C1\u30E5\u30FC\u30EA\u30C3\u30D2'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u30B6\u30DD\u30EA\u30FC\u30B8\u30E3'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u30B6\u30B0\u30EC\u30D6'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u30EF\u30EB\u30B7\u30E3\u30EF'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u30DC\u30EB\u30B4\u30B0\u30E9\u30FC\u30C9'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u30F4\u30A3\u30EA\u30CB\u30E5\u30B9'
                        },
                        'Vienna': {
                            'exemplarCity': '\u30A6\u30A3\u30FC\u30F3'
                        },
                        'Vatican': {
                            'exemplarCity': '\u30D0\u30C1\u30AB\u30F3'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u30B5\u30E9\u30A8\u30DC'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u30B5\u30F3\u30DE\u30EA\u30CE'
                        },
                        'Samara': {
                            'exemplarCity': '\u30B5\u30DE\u30E9'
                        },
                        'Rome': {
                            'exemplarCity': '\u30ED\u30FC\u30DE'
                        },
                        'Riga': {
                            'exemplarCity': '\u30EA\u30AC'
                        },
                        'Prague': {
                            'exemplarCity': '\u30D7\u30E9\u30CF'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u30DD\u30C9\u30B4\u30EA\u30C4\u30A1'
                        },
                        'Paris': {
                            'exemplarCity': '\u30D1\u30EA'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u30D8\u30EB\u30B7\u30F3\u30AD'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u30AC\u30FC\u30F3\u30B8\u30FC'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u30B8\u30D6\u30E9\u30EB\u30BF\u30EB'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9\u590F\u6642\u9593'
                            },
                            'exemplarCity': '\u30C0\u30D6\u30EA\u30F3'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u30B3\u30DA\u30F3\u30CF\u30FC\u30B2\u30F3'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u30AD\u30B7\u30CA\u30A6'
                        },
                        'Busingen': {
                            'exemplarCity': '\u30D3\u30E5\u30FC\u30B8\u30F3\u30B2\u30F3'
                        },
                        'Budapest': {
                            'exemplarCity': '\u30D6\u30C0\u30DA\u30B9\u30C8'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u30EA\u30FC\u30D6\u30EB\u30F4\u30A3\u30EB'
                        },
                        'Lagos': {
                            'exemplarCity': '\u30E9\u30B4\u30B9'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u30AD\u30F3\u30B7\u30E3\u30B5'
                        },
                        'Kigali': {
                            'exemplarCity': '\u30AD\u30AC\u30EA'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u30CF\u30EB\u30C4\u30FC\u30E0'
                        },
                        'Kampala': {
                            'exemplarCity': '\u30AB\u30F3\u30D1\u30E9'
                        },
                        'Juba': {
                            'exemplarCity': '\u30B8\u30E5\u30D0'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u30E8\u30CF\u30CD\u30B9\u30D6\u30EB\u30B0'
                        },
                        'Harare': {
                            'exemplarCity': '\u30CF\u30E9\u30EC'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u30CF\u30DC\u30ED\u30FC\u30CD'
                        },
                        'Freetown': {
                            'exemplarCity': '\u30D5\u30EA\u30FC\u30BF\u30A6\u30F3'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u30A2\u30A4\u30A6\u30F3'
                        },
                        'Douala': {
                            'exemplarCity': '\u30C9\u30A5\u30A2\u30E9'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u30B8\u30D6\u30C1'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u30C0\u30EB\u30A8\u30B9\u30B5\u30E9\u30FC\u30E0'
                        },
                        'Dakar': {
                            'exemplarCity': '\u30C0\u30AB\u30FC\u30EB'
                        },
                        'Banjul': {
                            'exemplarCity': '\u30D0\u30F3\u30B8\u30E5\u30FC\u30EB'
                        },
                        'Bangui': {
                            'exemplarCity': '\u30D0\u30F3\u30AE'
                        },
                        'Bamako': {
                            'exemplarCity': '\u30D0\u30DE\u30B3'
                        },
                        'Asmera': {
                            'exemplarCity': '\u30A2\u30B9\u30DE\u30E9'
                        },
                        'Malabo': {
                            'exemplarCity': '\u30DE\u30E9\u30DC'
                        },
                        'Maputo': {
                            'exemplarCity': '\u30DE\u30D7\u30C8'
                        },
                        'Maseru': {
                            'exemplarCity': '\u30DE\u30BB\u30EB'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u30E0\u30D0\u30D0\u30FC\u30CD'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u30E2\u30AC\u30C7\u30A3\u30B7\u30AA'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u30E2\u30F3\u30ED\u30D3\u30A2'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u30CA\u30A4\u30ED\u30D3'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u30F3\u30B8\u30E3\u30E1\u30CA'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u30A6\u30A3\u30F3\u30C8\u30D5\u30C3\u30AF'
                        },
                        'Tunis': {
                            'exemplarCity': '\u30C1\u30E5\u30CB\u30B9'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u30C8\u30EA\u30DD\u30EA'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u30B5\u30F3\u30C8\u30E1'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u30DD\u30EB\u30C8\u30CE\u30DC'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u30EF\u30AC\u30C9\u30A5\u30B0\u30FC'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u30CC\u30A2\u30AF\u30B7\u30E7\u30C3\u30C8'
                        },
                        'Niamey': {
                            'exemplarCity': '\u30CB\u30A2\u30E1'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u30EB\u30B5\u30AB'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u30EB\u30D6\u30F3\u30D0\u30B7'
                        },
                        'Luanda': {
                            'exemplarCity': '\u30EB\u30A2\u30F3\u30C0'
                        },
                        'Lome': {
                            'exemplarCity': '\u30ED\u30E1'
                        },
                        'Conakry': {
                            'exemplarCity': '\u30B3\u30CA\u30AF\u30EA'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u30BB\u30A6\u30BF'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u30AB\u30B5\u30D6\u30E9\u30F3\u30AB'
                        },
                        'Cairo': {
                            'exemplarCity': '\u30AB\u30A4\u30ED'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u30D6\u30B8\u30E5\u30F3\u30D6\u30E9'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u30D6\u30E9\u30B6\u30D3\u30EB'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u30D6\u30E9\u30F3\u30BF\u30A4\u30E4'
                        },
                        'Bissau': {
                            'exemplarCity': '\u30D3\u30B5\u30A6'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u30A2\u30D3\u30B8\u30E3\u30F3'
                        },
                        'Accra': {
                            'exemplarCity': '\u30A2\u30AF\u30E9'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u30A2\u30B8\u30B9\u30A2\u30D9\u30D0'
                        },
                        'Algiers': {
                            'exemplarCity': '\u30A2\u30EB\u30B8\u30A7'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u4E0A\u6D77'
                        },
                        'Seoul': {
                            'exemplarCity': '\u30BD\u30A6\u30EB'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u30B5\u30DE\u30EB\u30AB\u30F3\u30C9'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u30B5\u30CF\u30EA\u30F3'
                        },
                        'Saigon': {
                            'exemplarCity': '\u30DB\u30FC\u30C1\u30DF\u30F3'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u30EA\u30E4\u30C9'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u30E9\u30F3\u30B0\u30FC\u30F3'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u30AF\u30BA\u30ED\u30EB\u30C0'
                        },
                        'Qatar': {
                            'exemplarCity': '\u30AB\u30BF\u30FC\u30EB'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u5E73\u58CC'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u30DD\u30F3\u30C6\u30A3\u30A2\u30CA\u30C3\u30AF'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u30D7\u30CE\u30F3\u30DA\u30F3'
                        },
                        'Oral': {
                            'exemplarCity': '\u30AA\u30E9\u30EB'
                        },
                        'Omsk': {
                            'exemplarCity': '\u30AA\u30E0\u30B9\u30AF'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u30CE\u30F4\u30A9\u30B7\u30D3\u30EB\u30B9\u30AF'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u30D0\u30B0\u30C0\u30C3\u30C9'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u91CD\u6176'
                        },
                        'Colombo': {
                            'exemplarCity': '\u30B3\u30ED\u30F3\u30DC'
                        },
                        'Damascus': {
                            'exemplarCity': '\u30C0\u30DE\u30B9\u30AB\u30B9'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u30C0\u30C3\u30AB'
                        },
                        'Dili': {
                            'exemplarCity': '\u30C7\u30A3\u30EA'
                        },
                        'Dubai': {
                            'exemplarCity': '\u30C9\u30D0\u30A4'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u30C9\u30A5\u30B7\u30E3\u30F3\u30D9'
                        },
                        'Gaza': {
                            'exemplarCity': '\u30AC\u30B6'
                        },
                        'Harbin': {
                            'exemplarCity': '\u30CF\u30EB\u30D3\u30F3'
                        },
                        'Hebron': {
                            'exemplarCity': '\u30D8\u30D6\u30ED\u30F3'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u9999\u6E2F'
                        },
                        'Hovd': {
                            'exemplarCity': '\u30DB\u30D6\u30C9'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u30A4\u30EB\u30AF\u30FC\u30C4\u30AF'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u30B8\u30E3\u30AB\u30EB\u30BF'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u30B8\u30E3\u30E4\u30D7\u30E9'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u30A6\u30E9\u30F3\u30D0\u30FC\u30C8\u30EB'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u30A6\u30EB\u30E0\u30C1'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u30A6\u30B9\u30C1\u30CD\u30E9'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u30D3\u30A8\u30F3\u30C1\u30E3\u30F3'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u30A6\u30E9\u30B8\u30AA\u30B9\u30C8\u30AF'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u30E4\u30AF\u30FC\u30C4\u30AF'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u30A8\u30AB\u30C6\u30EA\u30F3\u30D6\u30EB\u30B0'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u30A8\u30EC\u30D0\u30F3'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u6771\u4EAC'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u30C6\u30A3\u30F3\u30D7\u30FC'
                        },
                        'Tehran': {
                            'exemplarCity': '\u30C6\u30D8\u30E9\u30F3'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u30C8\u30D3\u30EA\u30B7'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u30BF\u30B7\u30B1\u30F3\u30C8'
                        },
                        'Taipei': {
                            'exemplarCity': '\u53F0\u5317'
                        },
                        'Singapore': {
                            'exemplarCity': '\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u30A8\u30EB\u30B5\u30EC\u30E0'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u30A2\u30B7\u30AC\u30D0\u30FC\u30C9'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u30A2\u30AF\u30C8\u30D9'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u30A2\u30AF\u30BF\u30A6'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u30A2\u30CA\u30C7\u30A3\u30EA'
                        },
                        'Amman': {
                            'exemplarCity': '\u30A2\u30F3\u30DE\u30F3'
                        },
                        'Almaty': {
                            'exemplarCity': '\u30A2\u30EB\u30DE\u30C8\u30A4'
                        },
                        'Aden': {
                            'exemplarCity': '\u30A2\u30C7\u30F3'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u30D0\u30FC\u30EC\u30FC\u30F3'
                        },
                        'Baku': {
                            'exemplarCity': '\u30D0\u30AF\u30FC'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u30D0\u30F3\u30B3\u30AF'
                        },
                        'Beirut': {
                            'exemplarCity': '\u30D9\u30A4\u30EB\u30FC\u30C8'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u30D3\u30B7\u30E5\u30B1\u30AF'
                        },
                        'Brunei': {
                            'exemplarCity': '\u30D6\u30EB\u30CD\u30A4'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u30B3\u30EB\u30AB\u30BF'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u30C1\u30E7\u30A4\u30D0\u30EB\u30B5\u30F3'
                        },
                        'Kabul': {
                            'exemplarCity': '\u30AB\u30D6\u30FC\u30EB'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u30AB\u30E0\u30C1\u30E3\u30C3\u30AB'
                        },
                        'Karachi': {
                            'exemplarCity': '\u30AB\u30E9\u30C1'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u30AB\u30B7\u30E5\u30AC\u30EB'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u30AB\u30C8\u30DE\u30F3\u30BA'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u30CF\u30F3\u30C9\u30A5\u30A4\u30AC'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u30AF\u30E9\u30B9\u30CE\u30E4\u30EB\u30B9\u30AF'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u30AF\u30A2\u30E9\u30EB\u30F3\u30D7\u30FC\u30EB'
                        },
                        'Kuching': {
                            'exemplarCity': '\u30AF\u30C1\u30F3'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u30AF\u30A6\u30A7\u30FC\u30C8'
                        },
                        'Macau': {
                            'exemplarCity': '\u30DE\u30AB\u30AA'
                        },
                        'Magadan': {
                            'exemplarCity': '\u30DE\u30AC\u30C0\u30F3'
                        },
                        'Makassar': {
                            'exemplarCity': '\u30DE\u30AB\u30C3\u30B5\u30EB'
                        },
                        'Manila': {
                            'exemplarCity': '\u30DE\u30CB\u30E9'
                        },
                        'Muscat': {
                            'exemplarCity': '\u30DE\u30B9\u30AB\u30C3\u30C8'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u30CB\u30B3\u30B7\u30A2'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u30CE\u30F4\u30A9\u30AF\u30BA\u30CD\u30C4\u30AF'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '\u30B5\u30E2\u30A2\u6642\u9593',
                            'standard': '\u30B5\u30E2\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30B5\u30E2\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u30B5\u30DE\u30E9\u6642\u9593',
                            'standard': '\u30B5\u30DE\u30E9\u6A19\u6E96\u6642',
                            'daylight': '\u30B5\u30DE\u30E9\u590F\u6642\u9593'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u30B5\u30CF\u30EA\u30F3\u6642\u9593',
                            'standard': '\u30B5\u30CF\u30EA\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30B5\u30CF\u30EA\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u30ED\u30BC\u30E9\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u30EC\u30E6\u30CB\u30AA\u30F3\u6642\u9593'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u30AF\u30BA\u30ED\u30EB\u30C0\u6642\u9593',
                            'standard': '\u30AF\u30BA\u30ED\u30EB\u30C0\u6A19\u6E96\u6642',
                            'daylight': '\u30AF\u30BA\u30ED\u30EB\u30C0\u590F\u6642\u9593'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u30DD\u30CA\u30DA\u6642\u9593'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u30D4\u30C8\u30B1\u30A2\u30F3\u6642\u9593'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u30B5\u30F3\u30D4\u30A8\u30FC\u30EB\u30FB\u30DF\u30AF\u30ED\u30F3\u6642\u9593',
                            'standard': '\u30B5\u30F3\u30D4\u30A8\u30FC\u30EB\u30FB\u30DF\u30AF\u30ED\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30B5\u30F3\u30D4\u30A8\u30FC\u30EB\u30FB\u30DF\u30AF\u30ED\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u30D5\u30A7\u30CB\u30C3\u30AF\u30B9\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u30D5\u30A3\u30EA\u30D4\u30F3\u6642\u9593',
                            'standard': '\u30D5\u30A3\u30EA\u30D4\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30D5\u30A3\u30EA\u30D4\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u30DA\u30EB\u30FC\u6642\u9593',
                            'standard': '\u30DA\u30EB\u30FC\u6A19\u6E96\u6642',
                            'daylight': '\u30DA\u30EB\u30FC\u590F\u6642\u9593'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u30D1\u30E9\u30B0\u30A2\u30A4\u6642\u9593',
                            'standard': '\u30D1\u30E9\u30B0\u30A2\u30A4\u6A19\u6E96\u6642',
                            'daylight': '\u30D1\u30E9\u30B0\u30A2\u30A4\u590F\u6642\u9593'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u30D1\u30D7\u30A2\u30CB\u30E5\u30FC\u30AE\u30CB\u30A2\u6642\u9593'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u30D1\u30E9\u30AA\u6642\u9593'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u30D1\u30AD\u30B9\u30BF\u30F3\u6642\u9593',
                            'standard': '\u30D1\u30AD\u30B9\u30BF\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30D1\u30AD\u30B9\u30BF\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u30AA\u30E0\u30B9\u30AF\u6642\u9593',
                            'standard': '\u30AA\u30E0\u30B9\u30AF\u6A19\u6E96\u6642',
                            'daylight': '\u30AA\u30E0\u30B9\u30AF\u590F\u6642\u9593'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u30CE\u30F4\u30A9\u30B7\u30D3\u30EB\u30B9\u30AF\u6642\u9593',
                            'standard': '\u30CE\u30F4\u30A9\u30B7\u30D3\u30EB\u30B9\u30AF\u6A19\u6E96\u6642',
                            'daylight': '\u30CE\u30F4\u30A9\u30B7\u30D3\u30EB\u30B9\u30AF\u590F\u6642\u9593'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u5317\u30DE\u30EA\u30A2\u30CA\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u30D5\u30A7\u30EB\u30CA\u30F3\u30C9\u30FB\u30C7\u30FB\u30CE\u30ED\u30FC\u30CB\u30E3\u6642\u9593',
                            'standard': '\u30D5\u30A7\u30EB\u30CA\u30F3\u30C9\u30FB\u30C7\u30FB\u30CE\u30ED\u30FC\u30CB\u30E3\u6A19\u6E96\u6642',
                            'daylight': '\u30D5\u30A7\u30EB\u30CA\u30F3\u30C9\u30FB\u30C7\u30FB\u30CE\u30ED\u30FC\u30CB\u30E3\u590F\u6642\u9593'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u30CE\u30FC\u30D5\u30A9\u30FC\u30AF\u5CF6\u6642\u9593'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u30CB\u30A6\u30A8\u6642\u9593'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u30CB\u30E5\u30FC\u30D5\u30A1\u30F3\u30C9\u30E9\u30F3\u30C9\u6642\u9593',
                            'standard': '\u30CB\u30E5\u30FC\u30D5\u30A1\u30F3\u30C9\u30E9\u30F3\u30C9\u6A19\u6E96\u6642',
                            'daylight': '\u30CB\u30E5\u30FC\u30D5\u30A1\u30F3\u30C9\u30E9\u30F3\u30C9\u590F\u6642\u9593'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u6642\u9593',
                            'standard': '\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u6A19\u6E96\u6642',
                            'daylight': '\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u590F\u6642\u9593'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u30CB\u30E5\u30FC\u30AB\u30EC\u30C9\u30CB\u30A2\u6642\u9593',
                            'standard': '\u30CB\u30E5\u30FC\u30AB\u30EC\u30C9\u30CB\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30CB\u30E5\u30FC\u30AB\u30EC\u30C9\u30CB\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u30A2\u30E1\u30EA\u30AB\u4E2D\u90E8\u6642\u9593',
                            'standard': '\u30A2\u30E1\u30EA\u30AB\u4E2D\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30E1\u30EA\u30AB\u4E2D\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u30A2\u30E1\u30EA\u30AB\u6771\u90E8\u6642\u9593',
                            'standard': '\u30A2\u30E1\u30EA\u30AB\u6771\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30E1\u30EA\u30AB\u6771\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u30A2\u30E1\u30EA\u30AB\u5C71\u5730\u6642\u9593',
                            'standard': '\u30A2\u30E1\u30EA\u30AB\u5C71\u5730\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30E1\u30EA\u30AB\u5C71\u5730\u590F\u6642\u9593'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u30A2\u30E1\u30EA\u30AB\u592A\u5E73\u6D0B\u6642\u9593',
                            'standard': '\u30A2\u30E1\u30EA\u30AB\u592A\u5E73\u6D0B\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30E1\u30EA\u30AB\u592A\u5E73\u6D0B\u590F\u6642\u9593'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u30A2\u30CA\u30C7\u30A3\u30EA\u6642\u9593',
                            'standard': '\u30A2\u30CA\u30C7\u30A3\u30EA\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30CA\u30C7\u30A3\u30EA\u590F\u6642\u9593'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\u30A2\u30AF\u30BF\u30A6\u6642\u9593',
                            'standard': '\u30A2\u30AF\u30BF\u30A6\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30AF\u30BF\u30A6\u590F\u6642\u9593'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\u30A2\u30AF\u30C8\u30D9\u6642\u9593',
                            'standard': '\u30A2\u30AF\u30C8\u30D9\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30AF\u30C8\u30D9\u590F\u6642\u9593'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7\u6642\u9593',
                            'standard': '\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7\u6A19\u6E96\u6642',
                            'daylight': '\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7\u590F\u6642\u9593'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '\u30B1\u30A4\u30B7\u30FC\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u30C1\u30E3\u30E2\u30ED\u6642\u9593'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u30C1\u30E3\u30BF\u30E0\u6642\u9593',
                            'standard': '\u30C1\u30E3\u30BF\u30E0\u6A19\u6E96\u6642',
                            'daylight': '\u30C1\u30E3\u30BF\u30E0\u590F\u6642\u9593'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u30C1\u30EA\u6642\u9593',
                            'standard': '\u30C1\u30EA\u6A19\u6E96\u6642',
                            'daylight': '\u30C1\u30EA\u590F\u6642\u9593'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u4E2D\u56FD\u6642\u9593',
                            'standard': '\u4E2D\u56FD\u6A19\u6E96\u6642',
                            'daylight': '\u4E2D\u56FD\u590F\u6642\u9593'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u30C1\u30E7\u30A4\u30D0\u30EB\u30B5\u30F3\u6642\u9593',
                            'standard': '\u30C1\u30E7\u30A4\u30D0\u30EB\u30B5\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30C1\u30E7\u30A4\u30D0\u30EB\u30B5\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u30AF\u30EA\u30B9\u30DE\u30B9\u5CF6\u6642\u9593'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u30B3\u30B3\u30B9\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u30B3\u30ED\u30F3\u30D3\u30A2\u6642\u9593',
                            'standard': '\u30B3\u30ED\u30F3\u30D3\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30B3\u30ED\u30F3\u30D3\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u30AF\u30C3\u30AF\u8AF8\u5CF6\u6642\u9593',
                            'standard': '\u30AF\u30C3\u30AF\u8AF8\u5CF6\u6A19\u6E96\u6642',
                            'daylight': '\u30AF\u30C3\u30AF\u8AF8\u5CF6\u590F\u6642\u9593'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u30AD\u30E5\u30FC\u30D0\u6642\u9593',
                            'standard': '\u30AD\u30E5\u30FC\u30D0\u6A19\u6E96\u6642',
                            'daylight': '\u30AD\u30E5\u30FC\u30D0\u590F\u6642\u9593'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u30C7\u30FC\u30D3\u30B9\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u30C7\u30E5\u30E2\u30F3\u30FB\u30C7\u30E5\u30EB\u30F4\u30A3\u30EB\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u6771\u30C6\u30A3\u30E2\u30FC\u30EB\u6642\u9593'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u30A4\u30FC\u30B9\u30BF\u30FC\u5CF6\u6642\u9593',
                            'standard': '\u30A4\u30FC\u30B9\u30BF\u30FC\u5CF6\u6A19\u6E96\u6642',
                            'daylight': '\u30A4\u30FC\u30B9\u30BF\u30FC\u5CF6\u590F\u6642\u9593'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u30A8\u30AF\u30A2\u30C9\u30EB\u6642\u9593'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u4E2D\u592E\u30E8\u30FC\u30ED\u30C3\u30D1\u6642\u9593',
                            'standard': '\u4E2D\u592E\u30E8\u30FC\u30ED\u30C3\u30D1\u6A19\u6E96\u6642',
                            'daylight': '\u4E2D\u592E\u30E8\u30FC\u30ED\u30C3\u30D1\u590F\u6642\u9593'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u6771\u30E8\u30FC\u30ED\u30C3\u30D1\u6642\u9593',
                            'standard': '\u6771\u30E8\u30FC\u30ED\u30C3\u30D1\u6A19\u6E96\u6642',
                            'daylight': '\u6771\u30E8\u30FC\u30ED\u30C3\u30D1\u590F\u6642\u9593'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u897F\u30E8\u30FC\u30ED\u30C3\u30D1\u6642\u9593',
                            'standard': '\u897F\u30E8\u30FC\u30ED\u30C3\u30D1\u6A19\u6E96\u6642',
                            'daylight': '\u897F\u30E8\u30FC\u30ED\u30C3\u30D1\u590F\u6642\u9593'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u30D5\u30A9\u30FC\u30AF\u30E9\u30F3\u30C9\u8AF8\u5CF6\u6642\u9593',
                            'standard': '\u30D5\u30A9\u30FC\u30AF\u30E9\u30F3\u30C9\u8AF8\u5CF6\u6A19\u6E96\u6642',
                            'daylight': '\u30D5\u30A9\u30FC\u30AF\u30E9\u30F3\u30C9\u8AF8\u5CF6\u590F\u6642\u9593'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u30D5\u30A3\u30B8\u30FC\u6642\u9593',
                            'standard': '\u30D5\u30A3\u30B8\u30FC\u6A19\u6E96\u6642',
                            'daylight': '\u30D5\u30A3\u30B8\u30FC\u590F\u6642\u9593'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u4ECF\u9818\u30AE\u30A2\u30CA\u6642\u9593'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u4ECF\u9818\u5357\u65B9\u5357\u6975\u6642\u9593'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u30AC\u30E9\u30D1\u30B4\u30B9\u6642\u9593'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u30C8\u30B1\u30E9\u30A6\u6642\u9593'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u30C8\u30F3\u30AC\u6642\u9593',
                            'standard': '\u30C8\u30F3\u30AC\u6A19\u6E96\u6642',
                            'daylight': '\u30C8\u30F3\u30AC\u590F\u6642\u9593'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u30C1\u30E5\u30FC\u30AF\u6642\u9593'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3\u6642\u9593',
                            'standard': '\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u30C4\u30D0\u30EB\u6642\u9593'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u30A6\u30EB\u30B0\u30A2\u30A4\u6642\u9593',
                            'standard': '\u30A6\u30EB\u30B0\u30A2\u30A4\u6A19\u6E96\u6642',
                            'daylight': '\u30A6\u30EB\u30B0\u30A2\u30A4\u590F\u6642\u9593'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3\u6642\u9593',
                            'standard': '\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u30D0\u30CC\u30A2\u30C4\u6642\u9593',
                            'standard': '\u30D0\u30CC\u30A2\u30C4\u6A19\u6E96\u6642',
                            'daylight': '\u30D0\u30CC\u30A2\u30C4\u590F\u6642\u9593'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u30A8\u30AB\u30C6\u30EA\u30F3\u30D6\u30EB\u30B0\u6642\u9593',
                            'standard': '\u30A8\u30AB\u30C6\u30EA\u30F3\u30D6\u30EB\u30B0\u6A19\u6E96\u6642',
                            'daylight': '\u30A8\u30AB\u30C6\u30EA\u30F3\u30D6\u30EB\u30B0\u590F\u6642\u9593'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u30E4\u30AF\u30FC\u30C4\u30AF\u6642\u9593',
                            'standard': '\u30E4\u30AF\u30FC\u30C4\u30AF\u6A19\u6E96\u6642',
                            'daylight': '\u30E4\u30AF\u30FC\u30C4\u30AF\u590F\u6642\u9593'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u30A6\u30A9\u30EA\u30B9\u30FB\u30D5\u30C4\u30CA\u6642\u9593'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u30A6\u30A7\u30FC\u30AF\u5CF6\u6642\u9593'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u30DC\u30B9\u30C8\u30FC\u30AF\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u30DC\u30EB\u30B4\u30B0\u30E9\u30FC\u30C9\u6642\u9593',
                            'standard': '\u30F4\u30A9\u30EB\u30B4\u30B0\u30E9\u30FC\u30C9\u6A19\u6E96\u6642',
                            'daylight': '\u30DC\u30EB\u30B4\u30B0\u30E9\u30FC\u30C9\u590F\u6642\u9593'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u30A6\u30E9\u30B8\u30AA\u30B9\u30C8\u30AF\u6642\u9593',
                            'standard': '\u30A6\u30E9\u30B8\u30AA\u30B9\u30C8\u30AF\u6A19\u6E96\u6642',
                            'daylight': '\u30A6\u30E9\u30B8\u30AA\u30B9\u30C8\u30AF\u590F\u6642\u9593'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u30D9\u30CD\u30BA\u30A8\u30E9\u6642\u9593'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u30BF\u30B8\u30AD\u30B9\u30BF\u30F3\u6642\u9593'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u53F0\u5317\u6642\u9593',
                            'standard': '\u53F0\u5317\u6A19\u6E96\u6642',
                            'daylight': '\u53F0\u5317\u590F\u6642\u9593'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u30BF\u30D2\u30C1\u6642\u9593'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u662D\u548C\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u30B9\u30EA\u30CA\u30E0\u6642\u9593'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u30B5\u30A6\u30B9\u30B8\u30E7\u30FC\u30B8\u30A2\u6642\u9593'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u30BD\u30ED\u30E2\u30F3\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB\u6642\u9593'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u30BB\u30FC\u30B7\u30A7\u30EB\u6642\u9593'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u30B0\u30A2\u30E0\u6642\u9593'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9\u897F\u90E8\u6642\u9593',
                            'standard': '\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9\u897F\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9\u897F\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9\u6771\u90E8\u6642\u9593',
                            'standard': '\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9\u6771\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9\u6771\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u30B0\u30EA\u30CB\u30C3\u30B8\u6A19\u6E96\u6642'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u30AE\u30EB\u30D0\u30FC\u30C8\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u30B0\u30EB\u30B8\u30A2\u6642\u9593',
                            'standard': '\u30B0\u30EB\u30B8\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30B0\u30EB\u30B8\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u30AC\u30F3\u30D3\u30A8\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u30A2\u30DE\u30BE\u30F3\u6642\u9593',
                            'standard': '\u30A2\u30DE\u30BE\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30DE\u30BE\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u30A2\u30AF\u30EC\u6642\u9593',
                            'standard': '\u30A2\u30AF\u30EC\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30AF\u30EC\u590F\u6642\u9593'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3\u6642\u9593'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u4E2D\u592E\u30A2\u30D5\u30EA\u30AB\u6642\u9593'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u6771\u30A2\u30D5\u30EA\u30AB\u6642\u9593'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u5357\u30A2\u30D5\u30EA\u30AB\u6642\u9593'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u897F\u30A2\u30D5\u30EA\u30AB\u6642\u9593',
                            'standard': '\u897F\u30A2\u30D5\u30EA\u30AB\u6A19\u6E96\u6642',
                            'daylight': '\u897F\u30A2\u30D5\u30EA\u30AB\u590F\u6642\u9593'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u30A2\u30E9\u30B9\u30AB\u6642\u9593',
                            'standard': '\u30A2\u30E9\u30B9\u30AB\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30E9\u30B9\u30AB\u590F\u6642\u9593'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\u30A2\u30EB\u30C8\u30DE\u30A4\u6642\u9593',
                            'standard': '\u30A2\u30EB\u30C8\u30DE\u30A4\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30EB\u30DE\u30C8\u30A4\u590F\u6642\u9593'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u30A2\u30E9\u30D3\u30A2\u6642\u9593',
                            'standard': '\u30A2\u30E9\u30D3\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30E9\u30D3\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u6642\u9593',
                            'standard': '\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u897F\u90E8\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u6642\u9593',
                            'standard': '\u897F\u90E8\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u897F\u90E8\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u30A2\u30EB\u30E1\u30CB\u30A2\u6642\u9593',
                            'standard': '\u30A2\u30EB\u30E1\u30CB\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30EB\u30E1\u30CB\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u5927\u897F\u6D0B\u6642\u9593',
                            'standard': '\u5927\u897F\u6D0B\u6A19\u6E96\u6642',
                            'daylight': '\u5927\u897F\u6D0B\u590F\u6642\u9593'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4E2D\u90E8\u6642\u9593',
                            'standard': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4E2D\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4E2D\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4E2D\u897F\u90E8\u6642\u9593',
                            'standard': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4E2D\u897F\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4E2D\u897F\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u6771\u90E8\u6642\u9593',
                            'standard': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u6771\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u6771\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u897F\u90E8\u6642\u9593',
                            'standard': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u897F\u90E8\u6A19\u6E96\u6642',
                            'daylight': '\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u897F\u90E8\u590F\u6642\u9593'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3\u6642\u9593',
                            'standard': '\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u30A2\u30BE\u30EC\u30B9\u6642\u9593',
                            'standard': '\u30A2\u30BE\u30EC\u30B9\u6A19\u6E96\u6642',
                            'daylight': '\u30A2\u30BE\u30EC\u30B9\u590F\u6642\u9593'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5\u6642\u9593',
                            'standard': '\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5\u6A19\u6E96\u6642',
                            'daylight': '\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5\u590F\u6642\u9593'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u30D6\u30FC\u30BF\u30F3\u6642\u9593'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u30DC\u30EA\u30D3\u30A2\u6642\u9593'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u30D6\u30E9\u30B8\u30EA\u30A2\u6642\u9593',
                            'standard': '\u30D6\u30E9\u30B8\u30EA\u30A2\u6A19\u6E96\u6642',
                            'daylight': '\u30D6\u30E9\u30B8\u30EA\u30A2\u590F\u6642\u9593'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u30D6\u30EB\u30CD\u30A4\u30FB\u30C0\u30EB\u30B5\u30E9\u30FC\u30E0\u6642\u9593'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u6E7E\u5CB8\u6642\u9593'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u30AC\u30A4\u30A2\u30CA\u6642\u9593'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u30CF\u30EF\u30A4\u30FB\u30A2\u30EA\u30E5\u30FC\u30B7\u30E3\u30F3\u6642\u9593',
                            'standard': '\u30CF\u30EF\u30A4\u30FB\u30A2\u30EA\u30E5\u30FC\u30B7\u30E3\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30CF\u30EF\u30A4\u30FB\u30A2\u30EA\u30E5\u30FC\u30B7\u30E3\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u9999\u6E2F\u6642\u9593',
                            'standard': '\u9999\u6E2F\u6A19\u6E96\u6642',
                            'daylight': '\u9999\u6E2F\u590F\u6642\u9593'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u30DB\u30D6\u30C9\u6642\u9593',
                            'standard': '\u30DB\u30D6\u30C9\u6A19\u6E96\u6642',
                            'daylight': '\u30DB\u30D6\u30C9\u590F\u6642\u9593'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u30A4\u30F3\u30C9\u6642\u9593'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u30A4\u30F3\u30C9\u6D0B\u6642\u9593'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u30A4\u30F3\u30C9\u30B7\u30CA\u6642\u9593'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u4E2D\u90E8\u6642\u9593'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u6771\u90E8\u6642\u9593'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u897F\u90E8\u6642\u9593'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u30A4\u30E9\u30F3\u6642\u9593',
                            'standard': '\u30A4\u30E9\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30A4\u30E9\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u30A4\u30EB\u30AF\u30FC\u30C4\u30AF\u6642\u9593',
                            'standard': '\u30A4\u30EB\u30AF\u30FC\u30C4\u30AF\u6A19\u6E96\u6642',
                            'daylight': '\u30A4\u30EB\u30AF\u30FC\u30C4\u30AF\u590F\u6642\u9593'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u30A4\u30B9\u30E9\u30A8\u30EB\u6642\u9593',
                            'standard': '\u30A4\u30B9\u30E9\u30A8\u30EB\u6A19\u6E96\u6642',
                            'daylight': '\u30A4\u30B9\u30E9\u30A8\u30EB\u590F\u6642\u9593'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u65E5\u672C\u6642\u9593',
                            'standard': '\u65E5\u672C\u6A19\u6E96\u6642',
                            'daylight': '\u65E5\u672C\u590F\u6642\u9593'
                        },
                        'short': {
                            'standard': 'JST',
                            'daylight': 'JDT'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u30DA\u30C8\u30ED\u30D1\u30D6\u30ED\u30D5\u30B9\u30AF\u30FB\u30AB\u30E0\u30C1\u30E3\u30C4\u30AD\u30FC\u6642\u9593',
                            'standard': '\u30DA\u30C8\u30ED\u30D1\u30D6\u30ED\u30D5\u30B9\u30AF\u30FB\u30AB\u30E0\u30C1\u30E3\u30C4\u30AD\u30FC\u6A19\u6E96\u6642',
                            'daylight': '\u30DA\u30C8\u30ED\u30D1\u30D6\u30ED\u30D5\u30B9\u30AF\u30FB\u30AB\u30E0\u30C1\u30E3\u30C4\u30AD\u30FC\u590F\u6642\u9593'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u6771\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3\u6642\u9593'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u897F\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3\u6642\u9593'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u97D3\u56FD\u6642\u9593',
                            'standard': '\u97D3\u56FD\u6A19\u6E96\u6642',
                            'daylight': '\u97D3\u56FD\u590F\u6642\u9593'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u30B3\u30B9\u30E9\u30A8\u6642\u9593'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u30AF\u30E9\u30B9\u30CE\u30E4\u30EB\u30B9\u30AF\u6642\u9593',
                            'standard': '\u30AF\u30E9\u30B9\u30CE\u30E4\u30EB\u30B9\u30AF\u6A19\u6E96\u6642',
                            'daylight': '\u30AF\u30E9\u30B9\u30CE\u30E4\u30EB\u30B9\u30AF\u590F\u6642\u9593'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u30AD\u30EB\u30AE\u30B9\u30BF\u30F3\u6642\u9593'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u30E9\u30F3\u30AB\u6642\u9593'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u30E9\u30A4\u30F3\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u30ED\u30FC\u30C9\u30CF\u30A6\u6642\u9593',
                            'standard': '\u30ED\u30FC\u30C9\u30CF\u30A6\u6A19\u6E96\u6642',
                            'daylight': '\u30ED\u30FC\u30C9\u30CF\u30A6\u590F\u6642\u9593'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u30DE\u30AB\u30AA\u6642\u9593',
                            'standard': '\u30DE\u30AB\u30AA\u6A19\u6E96\u6642',
                            'daylight': '\u30DE\u30AB\u30AA\u590F\u6642\u9593'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u30DE\u30C3\u30B3\u30FC\u30EA\u30FC\u5CF6\u6642\u9593'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u30DE\u30AC\u30C0\u30F3\u6642\u9593',
                            'standard': '\u30DE\u30AC\u30C0\u30F3\u6A19\u6E96\u6642',
                            'daylight': '\u30DE\u30AC\u30C0\u30F3\u590F\u6642\u9593'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u30DE\u30EC\u30FC\u30B7\u30A2\u6642\u9593'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u30E2\u30EB\u30C7\u30A3\u30D6\u6642\u9593'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u30DE\u30EB\u30AD\u30FC\u30BA\u6642\u9593'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u30DE\u30FC\u30B7\u30E3\u30EB\u8AF8\u5CF6\u6642\u9593'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9\u6642\u9593',
                            'standard': '\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9\u6A19\u6E96\u6642',
                            'daylight': '\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9\u590F\u6642\u9593'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u30E2\u30FC\u30BD\u30F3\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u30A6\u30E9\u30F3\u30D0\u30FC\u30C8\u30EB\u6642\u9593',
                            'standard': '\u30A6\u30E9\u30F3\u30D0\u30FC\u30C8\u30EB\u6A19\u6E96\u6642',
                            'daylight': '\u30A6\u30E9\u30F3\u30D0\u30FC\u30C8\u30EB\u590F\u6642\u9593'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u30E2\u30B9\u30AF\u30EF\u6642\u9593',
                            'standard': '\u30E2\u30B9\u30AF\u30EF\u6A19\u6E96\u6642',
                            'daylight': '\u30E2\u30B9\u30AF\u30EF\u590F\u6642\u9593'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u30DF\u30E3\u30F3\u30DE\u30FC\u6642\u9593'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u30CA\u30A6\u30EB\u6642\u9593'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u30CD\u30D1\u30FC\u30EB\u6642\u9593'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}\u6642\u9593',
                'regionFormat-type-daylight': '{0}\u590F\u6642\u9593',
                'regionFormat-type-standard': '{0}\u6A19\u6E96\u6642',
                'fallbackFormat': '{1}\uFF08{0}\uFF09'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
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
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
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
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u65E5',
                                'mon': '\u6708',
                                'tue': '\u706B',
                                'wed': '\u6C34',
                                'thu': '\u6728',
                                'fri': '\u91D1',
                                'sat': '\u571F'
                            },
                            'narrow': {
                                'sun': '\u65E5',
                                'mon': '\u6708',
                                'tue': '\u706B',
                                'wed': '\u6C34',
                                'thu': '\u6728',
                                'fri': '\u91D1',
                                'sat': '\u571F'
                            },
                            'short': {
                                'sun': '\u65E5',
                                'mon': '\u6708',
                                'tue': '\u706B',
                                'wed': '\u6C34',
                                'thu': '\u6728',
                                'fri': '\u91D1',
                                'sat': '\u571F'
                            },
                            'wide': {
                                'sun': '\u65E5\u66DC\u65E5',
                                'mon': '\u6708\u66DC\u65E5',
                                'tue': '\u706B\u66DC\u65E5',
                                'wed': '\u6C34\u66DC\u65E5',
                                'thu': '\u6728\u66DC\u65E5',
                                'fri': '\u91D1\u66DC\u65E5',
                                'sat': '\u571F\u66DC\u65E5'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u65E5',
                                'mon': '\u6708',
                                'tue': '\u706B',
                                'wed': '\u6C34',
                                'thu': '\u6728',
                                'fri': '\u91D1',
                                'sat': '\u571F'
                            },
                            'narrow': {
                                'sun': '\u65E5',
                                'mon': '\u6708',
                                'tue': '\u706B',
                                'wed': '\u6C34',
                                'thu': '\u6728',
                                'fri': '\u91D1',
                                'sat': '\u571F'
                            },
                            'short': {
                                'sun': '\u65E5',
                                'mon': '\u6708',
                                'tue': '\u706B',
                                'wed': '\u6C34',
                                'thu': '\u6728',
                                'fri': '\u91D1',
                                'sat': '\u571F'
                            },
                            'wide': {
                                'sun': '\u65E5\u66DC\u65E5',
                                'mon': '\u6708\u66DC\u65E5',
                                'tue': '\u706B\u66DC\u65E5',
                                'wed': '\u6C34\u66DC\u65E5',
                                'thu': '\u6728\u66DC\u65E5',
                                'fri': '\u91D1\u66DC\u65E5',
                                'sat': '\u571F\u66DC\u65E5'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'Q1',
                                '2': 'Q2',
                                '3': 'Q3',
                                '4': 'Q4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u7B2C1\u56DB\u534A\u671F',
                                '2': '\u7B2C2\u56DB\u534A\u671F',
                                '3': '\u7B2C3\u56DB\u534A\u671F',
                                '4': '\u7B2C4\u56DB\u534A\u671F'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Q1',
                                '2': 'Q2',
                                '3': 'Q3',
                                '4': 'Q4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u7B2C1\u56DB\u534A\u671F',
                                '2': '\u7B2C2\u56DB\u534A\u671F',
                                '3': '\u7B2C3\u56DB\u534A\u671F',
                                '4': '\u7B2C4\u56DB\u534A\u671F'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u5348\u524D',
                                'noon': '\u6B63\u5348',
                                'pm': '\u5348\u5F8C'
                            },
                            'narrow': {
                                'am': '\u5348\u524D',
                                'noon': '\u6B63\u5348',
                                'pm': '\u5348\u5F8C'
                            },
                            'wide': {
                                'am': '\u5348\u524D',
                                'noon': '\u6B63\u5348',
                                'pm': '\u5348\u5F8C'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u5348\u524D',
                                'noon': '\u6B63\u5348',
                                'pm': '\u5348\u5F8C'
                            },
                            'narrow': {
                                'am': '\u5348\u524D',
                                'noon': '\u6B63\u5348',
                                'pm': '\u5348\u5F8C'
                            },
                            'wide': {
                                'am': '\u5348\u524D',
                                'noon': '\u6B63\u5348',
                                'pm': '\u5348\u5F8C'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u7D00\u5143\u524D',
                            '0-alt-variant': '\u897F\u66A6\u7D00\u5143\u524D',
                            '1': '\u897F\u66A6',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u7D00\u5143\u524D',
                            '0-alt-variant': '\u897F\u66A6\u7D00\u5143\u524D',
                            '1': '\u897F\u66A6',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'y\u5E74M\u6708d\u65E5EEEE',
                        'long': 'y\u5E74M\u6708d\u65E5',
                        'medium': 'y/MM/dd',
                        'short': 'y/MM/dd'
                    },
                    'timeFormats': {
                        'full': 'H\u6642mm\u5206ss\u79D2 zzzz',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMEEEEd': 'y/M/dEEEE',
                            'yMEd': 'y/M/d(E)',
                            'yMd': 'y/M/d',
                            'yM': 'y/M',
                            'y': 'y\u5E74',
                            'ms': 'mm:ss',
                            'MMMEEEEd': 'M\u6708d\u65E5EEEE',
                            'd': 'd\u65E5',
                            'GyMMM': 'Gy\u5E74M\u6708',
                            'GyMMMd': 'Gy\u5E74M\u6708d\u65E5',
                            'GyMMMEd': 'Gy\u5E74M\u6708d\u65E5(E)',
                            'GyMMMEEEEd': 'Gy\u5E74M\u6708d\u65E5EEEE',
                            'h': 'aK\u6642',
                            'H': 'H\u6642',
                            'hm': 'aK:mm',
                            'yQQQQ': 'yQQQQ',
                            'yQQQ': 'y/QQQ',
                            'yMMMEEEEd': 'y\u5E74M\u6708d\u65E5EEEE',
                            'yMMMEd': 'y\u5E74M\u6708d\u65E5(E)',
                            'yMMMd': 'y\u5E74M\u6708d\u65E5',
                            'yMMM': 'y\u5E74M\u6708',
                            'yMM': 'y/MM',
                            'Hm': 'H:mm',
                            'Ed': 'd\u65E5(E)',
                            'EEEEd': 'd\u65E5EEEE',
                            'Ehm': 'a K \u6642 mm \u5206 (E)',
                            'EHm': 'HH \u6642 mm \u5206 (E)',
                            'Ehms': 'a K \u6642 mm \u5206 ss \u79D2 (E)',
                            'EHms': 'HH \u6642 mm \u5206 ss \u79D2 (E)',
                            'Gy': 'Gy\u5E74',
                            'hms': 'aK:mm:ss',
                            'Hms': 'H:mm:ss',
                            'M': 'M\u6708',
                            'Md': 'M/d',
                            'MEd': 'M/d(E)',
                            'MEEEEd': 'M/dEEEE',
                            'MMM': 'M\u6708',
                            'MMMd': 'M\u6708d\u65E5',
                            'MMMEd': 'M\u6708d\u65E5(E)'
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
                                'd': 'M\u6708d\u65E5(E)\uFF5Ed\u65E5(E)',
                                'M': 'M\u6708d\u65E5(E)\uFF5EM\u6708d\u65E5(E)'
                            },
                            'MMMd': {
                                'd': 'M\u6708d\u65E5\uFF5Ed\u65E5',
                                'M': 'M\u6708d\u65E5\uFF5EM\u6708d\u65E5'
                            },
                            'MMM': {
                                'M': 'M\u6708\uFF5EM\u6708'
                            },
                            'MEd': {
                                'd': 'MM/dd(E)\uFF5EMM/dd(E)',
                                'M': 'MM/dd(E)\uFF5EMM/dd(E)'
                            },
                            'Md': {
                                'd': 'MM/dd\uFF5EMM/dd',
                                'M': 'MM/dd\uFF5EMM/dd'
                            },
                            'M': {
                                'M': 'M\u6708\uFF5EM\u6708'
                            },
                            'Hv': {
                                'H': 'H\u6642\uFF5EH\u6642(v)'
                            },
                            'hv': {
                                'a': 'aK\u6642\uFF5EaK\u6642(v)',
                                'h': 'aK\u6642\uFF5EK\u6642(v)'
                            },
                            'intervalFormatFallback': '{0}\uFF5E{1}',
                            'y': {
                                'y': 'y\u5E74\uFF5Ey\u5E74'
                            },
                            'yM': {
                                'M': 'y/MM\uFF5Ey/MM',
                                'y': 'y/MM\uFF5Ey/MM'
                            },
                            'yMd': {
                                'd': 'y/MM/dd\uFF5Ey/MM/dd',
                                'M': 'y/MM/dd\uFF5Ey/MM/dd',
                                'y': 'y/MM/dd\uFF5Ey/MM/dd'
                            },
                            'yMEd': {
                                'd': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)',
                                'M': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)',
                                'y': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)'
                            },
                            'yMMM': {
                                'M': 'y\u5E74M\u6708\uFF5EM\u6708',
                                'y': 'y\u5E74M\u6708\uFF5Ey\u5E74M\u6708'
                            },
                            'yMMMd': {
                                'd': 'y\u5E74M\u6708d\u65E5\uFF5Ed\u65E5',
                                'M': 'y\u5E74M\u6708d\u65E5\uFF5EM\u6708d\u65E5',
                                'y': 'y\u5E74M\u6708d\u65E5\uFF5Ey\u5E74M\u6708d\u65E5'
                            },
                            'yMMMEd': {
                                'd': 'y\u5E74M\u6708d\u65E5(E)\uFF5Ed\u65E5(E)',
                                'M': 'y\u5E74M\u6708d\u65E5(E)\uFF5EM\u6708d\u65E5(E)',
                                'y': 'y\u5E74M\u6708d\u65E5(E)\uFF5Ey\u5E74M\u6708d\u65E5(E)'
                            },
                            'yMMMM': {
                                'M': 'y\u5E74M\u6708\uFF5EM\u6708',
                                'y': 'y\u5E74M\u6708\uFF5Ey\u5E74M\u6708'
                            },
                            'MMMM': {
                                'M': 'M\u6708\uFF5EM\u6708'
                            },
                            'Hmv': {
                                'H': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206(v)',
                                'm': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206(v)'
                            },
                            'hmv': {
                                'a': 'aK\u6642mm\u5206\uFF5EaK\u6642mm\u5206(v)',
                                'h': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206(v)',
                                'm': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206(v)'
                            },
                            'Hm': {
                                'H': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206',
                                'm': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206'
                            },
                            'hm': {
                                'a': 'aK\u6642mm\u5206\uFF5EaK\u6642mm\u5206',
                                'h': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206',
                                'm': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206'
                            },
                            'H': {
                                'H': 'H\u6642\uFF5EH\u6642'
                            },
                            'h': {
                                'a': 'aK\u6642\uFF5EaK\u6642',
                                'h': 'aK\u6642\uFF5EK\u6642'
                            },
                            'd': {
                                'd': 'd\u65E5\uFF5Ed\u65E5'
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
