/* AstroDate
 * Language: zh
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * localeDisplayNames: 24r9308
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
        AstroDate.lang('zh', {
            'codePatterns': {
                'language': '\u8BED\u8A00\uFF1A{0}',
                'script': '\u6587\u5B57\uFF1A{0}',
                'territory': '\u5730\u533A\uFF1A{0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u5BF9\u5047\u540D\u8FDB\u884C\u5355\u72EC\u6392\u5E8F',
                    'yes': '\u5BF9\u5047\u540D\u8FDB\u884C\u533A\u522B\u6392\u5E8F'
                },
                'colCaseLevel': {
                    'no': '\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u8FDB\u884C\u6392\u5E8F',
                    'yes': '\u533A\u5206\u5927\u5C0F\u5199\u8FDB\u884C\u6392\u5E8F'
                },
                'colCaseFirst': {
                    'lower': '\u5148\u5BF9\u5C0F\u5199\u5B57\u6BCD\u8FDB\u884C\u6392\u5E8F',
                    'no': '\u5BF9\u6B63\u5E38\u5927\u5C0F\u5199\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F',
                    'upper': '\u5148\u5BF9\u5927\u5199\u5B57\u6BCD\u8FDB\u884C\u6392\u5E8F'
                },
                'colStrength': {
                    'identical': '\u5BF9\u6240\u6709\u5185\u5BB9\u8FDB\u884C\u6392\u5E8F',
                    'primary': '\u53EA\u5BF9\u57FA\u672C\u5B57\u6BCD\u8FDB\u884C\u6392\u5E8F',
                    'quaternary': '\u5BF9\u91CD\u97F3/\u5927\u5C0F\u5199/\u957F\u5EA6/\u5047\u540D\u8FDB\u884C\u6392\u5E8F',
                    'secondary': '\u5BF9\u91CD\u97F3\u8FDB\u884C\u6392\u5E8F',
                    'tertiary': '\u5BF9\u91CD\u97F3/\u5927\u5C0F\u5199/\u957F\u5EA6\u8FDB\u884C\u6392\u5E8F'
                },
                'colNumeric': {
                    'no': '\u5BF9\u6570\u5B57\u8FDB\u884C\u5355\u72EC\u6392\u5E8F',
                    'yes': '\u6309\u6570\u5B57\u987A\u5E8F\u5BF9\u6570\u5B57\u8FDB\u884C\u6392\u5E8F'
                },
                'colNormalization': {
                    'no': '\u975E\u89C4\u8303\u5316\u6392\u5E8F',
                    'yes': '\u5BF9 Unicode \u8FDB\u884C\u89C4\u8303\u5316\u6392\u5E8F'
                },
                'calendar': {
                    'japanese': '\u65E5\u672C\u65E5\u5386',
                    'iso8601': 'iso8601',
                    'coptic': '\u79D1\u666E\u7279\u65E5\u5386',
                    'dangi': '\u6A80\u7EAA\u65E5\u5386',
                    'ethiopic': '\u57C3\u585E\u4FC4\u6BD4\u4E9A\u65E5\u5386',
                    'ethiopic-amete-alem': '\u57C3\u585E\u4FC4\u6BD4\u4E9A\u963F\u7C73\u7279\u963F\u83B1\u59C6\u65E5\u5386',
                    'gregorian': '\u516C\u5386',
                    'hebrew': '\u5E0C\u4F2F\u6765\u65E5\u5386',
                    'persian': '\u6CE2\u65AF\u65E5\u5386',
                    'roc': '\u6C11\u56FD\u65E5\u5386',
                    'chinese': '\u519C\u5386',
                    'buddhist': '\u4F5B\u6559\u65E5\u5386',
                    'indian': '\u5370\u5EA6\u56FD\u5BB6\u65E5\u5386',
                    'islamic': '\u4F0A\u65AF\u5170\u65E5\u5386',
                    'islamic-civil': '\u4F0A\u65AF\u5170\u5E0C\u5409\u6765\u65E5\u5386',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u7535\u8BDD\u7C3F\u6392\u5E8F\u987A\u5E8F',
                    'gb2312han': '\u7B80\u4F53\u4E2D\u6587\u6392\u5E8F - GB2312',
                    'eor': 'eor',
                    'ducet': '\u9ED8\u8BA4 Unicode \u6392\u5E8F',
                    'dictionary': '\u5B57\u5178\u6392\u5E8F\u987A\u5E8F',
                    'big5han': '\u7E41\u4F53\u4E2D\u6587\u6392\u5E8F - Big5',
                    'traditional': '\u4F20\u7EDF\u6392\u5E8F\u987A\u5E8F',
                    'standard': '\u6807\u51C6\u6392\u5E8F',
                    'zhuyin': '\u6CE8\u97F3\u6392\u5E8F',
                    'unihan': '\u90E8\u9996\u7B14\u753B\u6392\u5E8F',
                    'stroke': '\u7B14\u753B\u6392\u5E8F',
                    'searchjl': '\u6309\u97E9\u6587\u5B57\u5F00\u9996\u8F85\u97F3\u6765\u641C\u7D22',
                    'search': '\u5E38\u89C4\u641C\u7D22',
                    'reformed': '\u6539\u826F\u6392\u5E8F\u987A\u5E8F',
                    'pinyin': '\u62FC\u97F3\u6392\u5E8F',
                    'phonetic': '\u8BED\u97F3\u6392\u5E8F\u987A\u5E8F'
                },
                'numbers': {
                    'knda': '\u5361\u7EB3\u8FBE\u6587\u6570\u5B57',
                    'khmr': '\u9AD8\u68C9\u6587\u6570\u5B57',
                    'kali': '\u514B\u8036\u5B57\u6BCD\u6570\u5B57',
                    'jpanfin': '\u65E5\u6587\u5927\u5199\u6570\u5B57',
                    'jpan': '\u65E5\u6587\u6570\u5B57',
                    'java': '\u722A\u54C7\u6587\u6570\u5B57',
                    'hebr': '\u5E0C\u4F2F\u6765\u6587\u6570\u5B57',
                    'hantfin': '\u7E41\u4F53\u4E2D\u6587\u5927\u5199\u6570\u5B57',
                    'hant': '\u7E41\u4F53\u4E2D\u6587\u6570\u5B57',
                    'hansfin': '\u7B80\u4F53\u4E2D\u6587\u5927\u5199\u6570\u5B57',
                    'hans': '\u7B80\u4F53\u4E2D\u6587\u6570\u5B57',
                    'hanidec': '\u4E2D\u6587\u5341\u8FDB\u5236\u6570\u5B57',
                    'guru': '\u679C\u9C81\u7A46\u5947\u6587\u6570\u5B57',
                    'gujr': '\u53E4\u5409\u62C9\u7279\u6587\u6570\u5B57',
                    'greklow': '\u5E0C\u814A\u6587\u5C0F\u5199\u6570\u5B57',
                    'grek': '\u5E0C\u814A\u6587\u6570\u5B57',
                    'bali': '\u5DF4\u5398\u6587\u6570\u5B57',
                    'armnlow': '\u4E9A\u7F8E\u5C3C\u4E9A\u6587\u5C0F\u5199\u6570\u5B57',
                    'armn': '\u4E9A\u7F8E\u5C3C\u4E9A\u6587\u6570\u5B57',
                    'arabext': '\u6269\u5C55\u963F\u62C9\u4F2F\u5370\u5EA6\u6587\u6570\u5B57',
                    'arab': '\u963F\u62C9\u4F2F\u5370\u5EA6\u6587\u6570\u5B57',
                    'finance': '\u91D1\u878D\u6570\u5B57',
                    'traditional': '\u4F20\u7EDF\u6570\u5B57',
                    'native': '\u5F53\u5730\u6570\u5B57',
                    'beng': '\u5B5F\u52A0\u62C9\u6587\u6570\u5B57',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': '\u5360\u6587\u6570\u5B57',
                    'deva': '\u68B5\u6587\u6570\u5B57',
                    'orya': '\u5965\u91CC\u4E9A\u6587\u6570\u5B57',
                    'osma': 'osma',
                    'roman': '\u7F57\u9A6C\u6570\u5B57',
                    'romanlow': '\u7F57\u9A6C\u5C0F\u5199\u6570\u5B57',
                    'saur': '\u7D22\u62C9\u4EC0\u7279\u62C9\u6587\u6570\u5B57',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': '\u82CF\u4E39\u6587\u6570\u5B57',
                    'vaii': '\u74E6\u4F0A\u6587\u6570\u5B57',
                    'tibt': '\u85CF\u6587\u6570\u5B57',
                    'thai': '\u6CF0\u6587\u6570\u5B57',
                    'telu': '\u6CF0\u5362\u56FA\u6587\u6570\u5B57',
                    'tamldec': '\u6CF0\u7C73\u5C14\u6587\u6570\u5B57',
                    'taml': '\u4F20\u7EDF\u6CF0\u7C73\u5C14\u6587\u6570\u5B57',
                    'talu': '\u65B0\u50A3\u4EC2\u6587\u6570\u5B57',
                    'takr': 'takr',
                    'olck': '\u6851\u5854\u5229\u6587\u6570\u5B57',
                    'nkoo': '\u66FC\u5FB7\u6570\u5B57',
                    'mymrshan': '\u7F05\u7538\u63B8\u6587\u6570\u5B57',
                    'mymr': '\u7F05\u7538\u6587\u6570\u5B57',
                    'mtei': '\u66FC\u5C3C\u666E\u5C14\u6570\u5B57',
                    'mong': '\u8499\u53E4\u6587\u6570\u5B57',
                    'mlym': '\u9A6C\u62C9\u96C5\u62C9\u59C6\u6587\u6570\u5B57',
                    'limb': '\u6797\u5E03\u6587\u6570\u5B57',
                    'lepc': '\u96F7\u5E03\u67E5\u6587\u6570\u5B57',
                    'latn': '\u897F\u65B9\u6570\u5B57',
                    'laoo': '\u8001\u631D\u6587\u6570\u5B57',
                    'lanatham': '\u5170\u7EB3\u6587\u6570\u5B57',
                    'lana': '\u8001\u50A3\u6587\u6570\u5B57',
                    'geor': '\u683C\u9C81\u5409\u4E9A\u6587\u6570\u5B57',
                    'fullwide': '\u5168\u89D2\u6570\u5B57',
                    'ethi': '\u57C3\u585E\u4FC4\u6BD4\u4E9A\u6587\u6570\u5B57'
                },
                'colAlternate': {
                    'non-ignorable': '\u5BF9\u7B26\u53F7\u8FDB\u884C\u6392\u5E8F',
                    'shifted': '\u5FFD\u7565\u7B26\u53F7\u8FDB\u884C\u6392\u5E8F'
                },
                'colBackwards': {
                    'no': '\u5BF9\u91CD\u97F3\u8FDB\u884C\u6B63\u5E38\u6392\u5E8F',
                    'yes': '\u5BF9\u91CD\u97F3\u8FDB\u884C\u9006\u5411\u6392\u5E8F'
                }
            },
            'keys': {
                'colNormalization': '\u89C4\u8303\u5316\u6392\u5E8F',
                'collation': '\u6392\u5E8F',
                'colHiraganaQuaternary': '\u5047\u540D\u6392\u5E8F',
                'colCaseLevel': '\u533A\u5206\u5927\u5C0F\u5199\u7684\u6392\u5E8F',
                'colCaseFirst': '\u5927\u5199/\u5C0F\u5199\u5B57\u6BCD\u6392\u5E8F',
                'colBackwards': '\u5BF9\u91CD\u97F3\u8FDB\u884C\u9006\u5411\u6392\u5E8F',
                'colAlternate': '\u5FFD\u7565\u7B26\u53F7\u6392\u5E8F',
                'calendar': '\u65E5\u5386',
                'x': '\u4E13\u7528',
                'variableTop': '\u6309\u7167\u7B26\u53F7\u6392\u5E8F',
                'va': '\u8BED\u8A00\u533A\u57DF\u522B\u540D',
                'timezone': '\u65F6\u533A',
                'numbers': '\u6570\u5B57',
                'currency': '\u8D27\u5E01',
                'colStrength': '\u6392\u5E8F\u5F3A\u5EA6',
                'colNumeric': '\u6570\u5B57\u6392\u5E8F'
            },
            'localeDisplayPattern': {
                'localePattern': '{0}\uFF08{1}\uFF09',
                'localeSeparator': '{0}\u3001{1}',
                'localeKeyTypePattern': '{0}\uFF1A{1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u585E\u73ED'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u62C9\u7F57\u6C64\u52A0'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u83AB\u5C14\u5179\u6BD4\u6E2F'
                        },
                        'Ponape': {
                            'exemplarCity': '\u6CE2\u7EB3\u4F69\u5C9B'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u76AE\u7279\u51EF\u6069'
                        },
                        'Palau': {
                            'exemplarCity': '\u5E15\u52B3'
                        },
                        'Auckland': {
                            'exemplarCity': '\u5965\u514B\u5170'
                        },
                        'Apia': {
                            'exemplarCity': '\u963F\u76AE\u4E9A'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u5BCC\u7EB3\u5BCC\u63D0'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u52A0\u62C9\u5E15\u6208\u65AF'
                        },
                        'Gambier': {
                            'exemplarCity': '\u7518\u6BD4\u5C14'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u74DC\u8FBE\u5C14\u5361\u7EB3\u5C14'
                        },
                        'Guam': {
                            'exemplarCity': '\u5173\u5C9B'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u6A80\u9999\u5C71'
                        },
                        'Wallis': {
                            'exemplarCity': '\u74E6\u5229\u65AF'
                        },
                        'Wake': {
                            'exemplarCity': '\u5A01\u514B'
                        },
                        'Truk': {
                            'exemplarCity': '\u7279\u9C81\u514B\u7FA4\u5C9B'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u4E1C\u52A0\u5854\u5E03'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u5854\u62C9\u74E6'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u5854\u5E0C\u63D0'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u57FA\u91CC\u5730\u9A6C\u5730\u5C9B'
                        },
                        'Johnston': {
                            'exemplarCity': '\u7EA6\u7FF0\u65AF\u987F'
                        },
                        'Chatham': {
                            'exemplarCity': '\u67E5\u5854\u59C6'
                        },
                        'Easter': {
                            'exemplarCity': '\u590D\u6D3B\u8282\u5C9B'
                        },
                        'Efate': {
                            'exemplarCity': '\u57C3\u6CD5\u7279'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u6069\u5FB7\u4F2F\u91CC'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u6CD5\u8003\u798F'
                        },
                        'Fiji': {
                            'exemplarCity': '\u6590\u6D4E'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u5E93\u8D5B\u57C3'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u5938\u8D3E\u6797'
                        },
                        'Majuro': {
                            'exemplarCity': '\u9A6C\u6731\u7F57'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u9A6C\u514B\u8428\u65AF'
                        },
                        'Midway': {
                            'exemplarCity': '\u4E2D\u9014\u5C9B'
                        },
                        'Nauru': {
                            'exemplarCity': '\u7459\u9C81'
                        },
                        'Niue': {
                            'exemplarCity': '\u7EBD\u57C3'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u8BFA\u798F\u514B'
                        },
                        'Noumea': {
                            'exemplarCity': '\u52AA\u7F8E\u963F'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u5E15\u679C\u5E15\u679C'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u6797\u5FB7\u66FC'
                        },
                        'Hobart': {
                            'exemplarCity': '\u970D\u5DF4\u7279'
                        },
                        'Eucla': {
                            'exemplarCity': '\u5C24\u514B\u62C9'
                        },
                        'Darwin': {
                            'exemplarCity': '\u8FBE\u5C14\u6587'
                        },
                        'Sydney': {
                            'exemplarCity': '\u6089\u5C3C'
                        },
                        'Perth': {
                            'exemplarCity': '\u73C0\u65AF'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u58A8\u5C14\u672C'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u8C6A\u52CB\u7235'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u963F\u5FB7\u83B1\u5FB7'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u5E03\u91CC\u65AF\u73ED'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u5E03\u7F57\u80AF\u5E0C\u5C14'
                        },
                        'Currie': {
                            'exemplarCity': '\u5E93\u5229'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u9A6C\u5C14\u4EE3\u592B'
                        },
                        'Mahe': {
                            'exemplarCity': '\u9A6C\u57C3\u5C9B'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u51EF\u5C14\u76D6\u6717'
                        },
                        'Reunion': {
                            'exemplarCity': '\u7559\u5C3C\u6C6A'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u9A6C\u7EA6\u7279'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u6BDB\u91CC\u6C42\u65AF'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u5B89\u5854\u90A3\u90A3\u5229\u4F5B'
                        },
                        'Chagos': {
                            'exemplarCity': '\u67E5\u6208\u65AF'
                        },
                        'Christmas': {
                            'exemplarCity': '\u5723\u8BDE\u5C9B'
                        },
                        'Cocos': {
                            'exemplarCity': '\u53EF\u53EF\u65AF'
                        },
                        'Comoro': {
                            'exemplarCity': '\u79D1\u6469\u7F57'
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
                            'exemplarCity': '\u672A\u77E5\u57CE\u5E02'
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
                            'exemplarCity': '\u7F57\u745F\u62C9'
                        },
                        'Palmer': {
                            'exemplarCity': '\u5E15\u9ED8\u5C14'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u9EA6\u514B\u9ED8\u591A'
                        },
                        'Vostok': {
                            'exemplarCity': '\u6C83\u65AF\u6258\u514B'
                        },
                        'Syowa': {
                            'exemplarCity': '\u662D\u548C'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u5357\u6781'
                        },
                        'Casey': {
                            'exemplarCity': '\u5361\u585E'
                        },
                        'Davis': {
                            'exemplarCity': '\u6234\u7EF4\u65AF'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u8FEA\u8499\u8FEA\u5C14\u7EF4\u5C14'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u9EA6\u683C\u7406'
                        },
                        'Mawson': {
                            'exemplarCity': '\u83AB\u68EE'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u6717\u4F0A\u5C14\u57CE'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u591A\u4F26\u591A'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u8482\u534E\u7EB3'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u6851\u5FB7\u8D1D'
                        },
                        'Thule': {
                            'exemplarCity': '\u56FE\u52D2'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u7279\u53E4\u897F\u52A0\u5C14\u5DF4'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u65AF\u5A01\u592B\u7279\u5361\u4F26\u7279'
                        },
                        'Chicago': {
                            'exemplarCity': '\u829D\u52A0\u54E5'
                        },
                        'Cayman': {
                            'exemplarCity': '\u5F00\u66FC'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u5361\u5BB4'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u5361\u5854\u9A6C\u5361'
                        },
                        'Caracas': {
                            'exemplarCity': '\u52A0\u62C9\u52A0\u65AF'
                        },
                        'Cancun': {
                            'exemplarCity': '\u574E\u6606'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u5927\u574E\u666E'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u5251\u6865\u6E7E'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u5E03\u5B9C\u8BFA\u65AF\u827E\u5229\u65AF'
                        },
                        'Boise': {
                            'exemplarCity': '\u535A\u4F0A\u897F'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u4E9A\u677E\u68EE'
                        },
                        'Aruba': {
                            'exemplarCity': '\u963F\u9C81\u5DF4'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u91CC\u5965\u52A0\u8036\u6208\u65AF'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u5723\u80E1\u5B89'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u4E4C\u65AF\u6000\u4E9A'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u62C9\u91CC\u5965\u54C8'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u5723\u8DEF\u6613\u65AF'
                            },
                            'Salta': {
                                'exemplarCity': '\u8428\u5C14\u5854'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u56FE\u5E93\u66FC'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u963F\u62C9\u74DC\u4F0A\u7EB3'
                        },
                        'Antigua': {
                            'exemplarCity': '\u5B89\u63D0\u74DC'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u5B89\u572D\u62C9'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u5B89\u514B\u96F7\u5947'
                        },
                        'Adak': {
                            'exemplarCity': '\u57C3\u8FBE\u514B'
                        },
                        'Bahia': {
                            'exemplarCity': '\u5DF4\u4F0A\u4E9A'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u5DF4\u4F0A\u4E9A\u73ED\u5FB7\u62C9\u65AF'
                        },
                        'Barbados': {
                            'exemplarCity': '\u5DF4\u5DF4\u591A\u65AF'
                        },
                        'Belem': {
                            'exemplarCity': '\u8D1D\u4F26'
                        },
                        'Belize': {
                            'exemplarCity': '\u4F2F\u5229\u5179'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u5E03\u5170\u514B\u8428\u5E03\u9686'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u535A\u963F\u7EF4\u65AF\u5854'
                        },
                        'Bogota': {
                            'exemplarCity': '\u6CE2\u54E5\u5927'
                        },
                        'Curacao': {
                            'exemplarCity': '\u5E93\u62C9\u7D22'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u4E39\u9A6C\u6C99\u6587'
                        },
                        'Dawson': {
                            'exemplarCity': '\u9053\u68EE'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u9053\u68EE\u514B\u91CC\u514B'
                        },
                        'Denver': {
                            'exemplarCity': '\u4E39\u4F5B'
                        },
                        'Detroit': {
                            'exemplarCity': '\u5E95\u7279\u5F8B'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u57C3\u83AB\u897F\u7EA6'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u6E29\u68EE\u65AF'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u5F7C\u5F97\u65AF\u5821'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u7279\u5C14\u57CE'
                            },
                            'Knox': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u8BFA\u514B\u65AF'
                            },
                            'Winamac': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u5A01\u7EB3\u9A6C\u514B'
                            },
                            'Marengo': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u9A6C\u4F26\u6208'
                            },
                            'Vevay': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u5DDE\u7EF4\u7EF4\u5E02'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u5370\u7B2C\u5B89\u7EB3\u6CE2\u5229\u65AF'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u4F0A\u52AA\u7EF4\u514B'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u4F0A\u9B41\u7279'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u7259\u4E70\u52A0'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u80E1\u80E1\u4F0A'
                        },
                        'Juneau': {
                            'exemplarCity': '\u6731\u8BFA'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u8036\u6D1B\u5948\u592B'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u4E9A\u5E93\u5854\u7279'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u6E29\u5C3C\u4F2F'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u6000\u7279\u970D\u65AF'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u6E29\u54E5\u534E'
                        },
                        'Tortola': {
                            'exemplarCity': '\u6258\u5C14\u6258\u62C9'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u514B\u62C9\u4F26\u4EE3\u514B'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u80AF\u5854\u57FA\u5DDE\u8499\u8482\u585E\u6D1B'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u54C8\u74E6\u90A3'
                        },
                        'Halifax': {
                            'exemplarCity': '\u54C8\u5229\u6CD5\u514B\u65AF'
                        },
                        'Guyana': {
                            'exemplarCity': '\u572D\u4E9A\u90A3'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u74DC\u4E9A\u57FA\u5C14'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u5371\u5730\u9A6C\u62C9'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u74DC\u5FB7\u7F57\u666E'
                        },
                        'Grenada': {
                            'exemplarCity': '\u683C\u6797\u7EB3\u8FBE'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u5927\u7279\u514B'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u53E4\u65AF\u6E7E'
                        },
                        'Godthab': {
                            'exemplarCity': '\u6208\u7279\u970D\u5E03'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u683C\u83B1\u65AF\u8D1D'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u798F\u5854\u96F7\u8428'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u8428\u5C14\u74E6\u591A'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u4F9D\u4F26\u5C3C\u8D1D'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u57C3\u5FB7\u8499\u987F'
                        },
                        'Dominica': {
                            'exemplarCity': '\u591A\u7C73\u5C3C\u52A0'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u5947\u74E6\u74E6'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u963F\u8482\u79D1\u80AF'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u79D1\u5C14\u591A\u74E6'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u54E5\u65AF\u8FBE\u9ECE\u52A0'
                        },
                        'Creston': {
                            'exemplarCity': '\u514B\u96F7\u65AF\u987F'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u5E93\u4E9A\u5DF4'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u62C9\u5DF4\u65AF'
                        },
                        'Lima': {
                            'exemplarCity': '\u5229\u9A6C'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u6D1B\u6749\u77F6'
                        },
                        'Louisville': {
                            'exemplarCity': '\u8DEF\u6613\u65AF\u7EF4\u5C14'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u4E0B\u592A\u5B50\u533A'
                        },
                        'Maceio': {
                            'exemplarCity': '\u9A6C\u585E\u7EA6'
                        },
                        'Managua': {
                            'exemplarCity': '\u9A6C\u90A3\u74DC'
                        },
                        'Manaus': {
                            'exemplarCity': '\u9A6C\u7459\u65AF'
                        },
                        'Marigot': {
                            'exemplarCity': '\u9A6C\u91CC\u6208\u7279'
                        },
                        'Martinique': {
                            'exemplarCity': '\u9A6C\u63D0\u5C3C\u514B'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u9A6C\u5854\u83AB\u7F57\u65AF'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u9A6C\u8428\u7279\u5170'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u95E8\u591A\u8428'
                        },
                        'Menominee': {
                            'exemplarCity': '\u5BC6\u8BFA\u7C73\u5C3C'
                        },
                        'Merida': {
                            'exemplarCity': '\u6885\u91CC\u8FBE'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u6885\u7279\u62C9\u5361\u7279\u62C9'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u58A8\u897F\u54E5\u57CE'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u5BC6\u514B\u9686'
                        },
                        'Moncton': {
                            'exemplarCity': '\u8499\u514B\u987F'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u8499\u7279\u96F7'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u8499\u5F97\u7EF4\u7684\u4E9A'
                        },
                        'Montreal': {
                            'exemplarCity': '\u8499\u7279\u5229\u5C14'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u8499\u7279\u585E\u62C9\u7279'
                        },
                        'Nassau': {
                            'exemplarCity': '\u62FF\u9A9A'
                        },
                        'New_York': {
                            'exemplarCity': '\u7EBD\u7EA6'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u5C3C\u76AE\u8D21'
                        },
                        'Nome': {
                            'exemplarCity': '\u8BFA\u59C6'
                        },
                        'Noronha': {
                            'exemplarCity': '\u6D1B\u7F57\u5C3C\u4E9A'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u5317\u8FBE\u79D1\u4ED6\u5DDE\u6BD4\u5C24\u62C9'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u5317\u8FBE\u79D1\u4ED6\u5DDE\u65B0\u585E\u52D2\u59C6'
                            },
                            'Center': {
                                'exemplarCity': '\u5317\u8FBE\u79D1\u4ED6\u5DDE\u7533\u7279'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u5965\u5E0C\u7EB3\u52A0'
                        },
                        'Panama': {
                            'exemplarCity': '\u5DF4\u62FF\u9A6C'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u65C1\u6D85\u5510'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u5E15\u62C9\u9A6C\u91CC\u535A'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u51E4\u51F0\u57CE'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u592A\u5B50\u6E2F'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u897F\u73ED\u7259\u6E2F'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u6CE2\u591A\u97E6\u67F3'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u6CE2\u591A\u9ECE\u5404'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u96F7\u5C3C\u6CB3'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u5170\u4ECA\u6E7E'
                        },
                        'Recife': {
                            'exemplarCity': '\u7D2F\u897F\u8153'
                        },
                        'Regina': {
                            'exemplarCity': '\u91CC\u8D3E\u7EB3'
                        },
                        'Resolute': {
                            'exemplarCity': '\u96F7\u7D22\u5362\u7279'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u91CC\u5965\u5E03\u90CE\u5E93'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u5723\u4F0A\u8428\u8D1D\u5C14'
                        },
                        'Santarem': {
                            'exemplarCity': '\u5723\u5854\u4F26'
                        },
                        'Santiago': {
                            'exemplarCity': '\u5723\u5730\u4E9A\u54E5'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u5723\u591A\u660E\u5404'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u5723\u4FDD\u7F57'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u65AF\u79D1\u5217\u65AF\u6BD4\u6851\u5FB7'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u5E0C\u666E\u7F57\u514B'
                        },
                        'Sitka': {
                            'exemplarCity': '\u9521\u7279\u5361'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u5723\u5DF4\u6CF0\u52D2\u7C73\u5C9B'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u5723\u7EA6\u7FF0\u65AF'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u5723\u57FA\u8328'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u5723\u5362\u897F\u4E9A'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u5723\u6258\u9A6C\u65AF'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u5723\u6587\u68EE\u7279'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u5357\u4E54\u6CBB\u4E9A'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u96F7\u514B\u96C5\u672A\u514B'
                        },
                        'Stanley': {
                            'exemplarCity': '\u65AF\u5766\u5229'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u5723\u8D6B\u52D2\u62FF'
                        },
                        'Azores': {
                            'exemplarCity': '\u4E9A\u901F\u5C14\u7FA4\u5C9B'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u767E\u6155\u5927'
                        },
                        'Canary': {
                            'exemplarCity': '\u52A0\u90A3\u5229'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u4F5B\u5F97\u89D2'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u6CD5\u7F57'
                        },
                        'Madeira': {
                            'exemplarCity': '\u9A6C\u5FB7\u62C9'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u5965\u65AF\u9646'
                        },
                        'Moscow': {
                            'exemplarCity': '\u83AB\u65AF\u79D1'
                        },
                        'Monaco': {
                            'exemplarCity': '\u6469\u7EB3\u54E5'
                        },
                        'Minsk': {
                            'exemplarCity': '\u660E\u65AF\u514B'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u739B\u4E3D\u6E2F'
                        },
                        'Malta': {
                            'exemplarCity': '\u9A6C\u8033\u4ED6'
                        },
                        'Madrid': {
                            'exemplarCity': '\u9A6C\u5FB7\u91CC'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u5362\u68EE\u5821'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u82F1\u56FD\u590F\u4EE4\u65F6\u95F4'
                            },
                            'exemplarCity': '\u4F26\u6566'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u5362\u5E03\u5C14\u96C5\u90A3'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u91CC\u65AF\u672C'
                        },
                        'Kiev': {
                            'exemplarCity': '\u57FA\u8F85'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u52A0\u91CC\u5B81\u683C\u52D2'
                        },
                        'Jersey': {
                            'exemplarCity': '\u6CFD\u897F\u5C9B'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u4F0A\u65AF\u5766\u5E03\u5C14'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u66FC\u5C9B'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u5E03\u52A0\u52D2\u65AF\u7279'
                        },
                        'Brussels': {
                            'exemplarCity': '\u5E03\u9C81\u585E\u5C14'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u5E03\u62C9\u8FEA\u65AF\u62C9\u53D1'
                        },
                        'Berlin': {
                            'exemplarCity': '\u67CF\u6797'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u8D1D\u5C14\u683C\u83B1\u5FB7'
                        },
                        'Athens': {
                            'exemplarCity': '\u96C5\u5178'
                        },
                        'Andorra': {
                            'exemplarCity': '\u5B89\u9053\u5C14'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u963F\u59C6\u65AF\u7279\u4E39'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u8F9B\u83F2\u7F57\u6CE2\u5C14'
                        },
                        'Skopje': {
                            'exemplarCity': '\u65AF\u79D1\u666E\u91CC'
                        },
                        'Sofia': {
                            'exemplarCity': '\u7D22\u975E\u4E9A'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u65AF\u5FB7\u54E5\u5C14\u6469'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u5854\u6797'
                        },
                        'Tirane': {
                            'exemplarCity': '\u5730\u62C9\u90A3'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u4E4C\u65E5\u54E5\u7F57\u5FB7'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u74E6\u675C\u5179'
                        },
                        'Zurich': {
                            'exemplarCity': '\u82CF\u9ECE\u4E16'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u624E\u6CE2\u7F57\u70ED'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u8428\u683C\u52D2\u5E03'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u534E\u6C99'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u4F0F\u5C14\u52A0\u683C\u52D2'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u7EF4\u5C14\u7EBD\u65AF'
                        },
                        'Vienna': {
                            'exemplarCity': '\u7EF4\u4E5F\u7EB3'
                        },
                        'Vatican': {
                            'exemplarCity': '\u68B5\u8482\u5188'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u8428\u62C9\u70ED\u7A9D'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u5723\u9A6C\u529B\u8BFA'
                        },
                        'Samara': {
                            'exemplarCity': '\u8428\u9A6C\u62C9'
                        },
                        'Rome': {
                            'exemplarCity': '\u7F57\u9A6C'
                        },
                        'Riga': {
                            'exemplarCity': '\u91CC\u52A0'
                        },
                        'Prague': {
                            'exemplarCity': '\u5E03\u62C9\u683C'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u6CE2\u5FB7\u6208\u91CC\u5BDF'
                        },
                        'Paris': {
                            'exemplarCity': '\u5DF4\u9ECE'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u8D6B\u5C14\u8F9B\u57FA'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u6839\u897F\u5C9B'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u76F4\u5E03\u7F57\u9640'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u7231\u5C14\u5170\u590F\u4EE4\u65F6\u95F4'
                            },
                            'exemplarCity': '\u90FD\u67CF\u6797'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u54E5\u672C\u54C8\u6839'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u57FA\u5E0C\u8BB7\u4E4C'
                        },
                        'Busingen': {
                            'exemplarCity': '\u5E03\u8F9B\u6839'
                        },
                        'Budapest': {
                            'exemplarCity': '\u5E03\u8FBE\u4F69\u65AF'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u5229\u4F2F\u7EF4\u5C14'
                        },
                        'Lagos': {
                            'exemplarCity': '\u62C9\u5404\u65AF'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u91D1\u6C99\u8428'
                        },
                        'Kigali': {
                            'exemplarCity': '\u57FA\u52A0\u5229'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u5580\u571F\u7A46'
                        },
                        'Kampala': {
                            'exemplarCity': '\u574E\u5E15\u62C9'
                        },
                        'Juba': {
                            'exemplarCity': '\u6731\u5DF4'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u7EA6\u7FF0\u5185\u65AF\u5821'
                        },
                        'Harare': {
                            'exemplarCity': '\u54C8\u62C9\u96F7'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u54C8\u535A\u7F57\u5185'
                        },
                        'Freetown': {
                            'exemplarCity': '\u5F17\u91CC\u6566'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u963F\u5C24\u6069'
                        },
                        'Douala': {
                            'exemplarCity': '\u675C\u963F\u62C9'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u5409\u5E03\u63D0'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u8FBE\u7D2F\u65AF\u8428\u62C9\u59C6'
                        },
                        'Dakar': {
                            'exemplarCity': '\u8FBE\u5580\u5C14'
                        },
                        'Banjul': {
                            'exemplarCity': '\u73ED\u73E0\u5C14'
                        },
                        'Bangui': {
                            'exemplarCity': '\u73ED\u5409'
                        },
                        'Bamako': {
                            'exemplarCity': '\u5DF4\u9A6C\u79D1'
                        },
                        'Asmera': {
                            'exemplarCity': '\u963F\u65AF\u9A6C\u62C9'
                        },
                        'Malabo': {
                            'exemplarCity': '\u9A6C\u62C9\u535A'
                        },
                        'Maputo': {
                            'exemplarCity': '\u9A6C\u666E\u6258'
                        },
                        'Maseru': {
                            'exemplarCity': '\u9A6C\u585E\u5362'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u59C6\u5DF4\u5DF4\u7EB3'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u6469\u52A0\u8FEA\u6C99'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u8499\u7F57\u7EF4\u4E9A'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u5185\u7F57\u6BD5'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u6069\u8D3E\u6885\u7EB3'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u6E29\u5F97\u548C\u514B'
                        },
                        'Tunis': {
                            'exemplarCity': '\u7A81\u5C3C\u65AF'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u7684\u9ECE\u6CE2\u91CC'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u5723\u591A\u7F8E'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u6CE2\u591A\u8BFA\u4F0F'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u74E6\u52A0\u675C\u53E4'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u52AA\u74E6\u514B\u8096\u7279'
                        },
                        'Niamey': {
                            'exemplarCity': '\u5C3C\u4E9A\u7F8E'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u5362\u8428\u5361'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u5362\u672C\u5DF4\u5E0C'
                        },
                        'Luanda': {
                            'exemplarCity': '\u7F57\u5B89\u8FBE'
                        },
                        'Lome': {
                            'exemplarCity': '\u6D1B\u7F8E'
                        },
                        'Conakry': {
                            'exemplarCity': '\u79D1\u7EB3\u514B\u91CC'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u4F11\u8FBE'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u5361\u8428\u5E03\u5170\u5361'
                        },
                        'Cairo': {
                            'exemplarCity': '\u5F00\u7F57'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u5E03\u743C\u5E03\u62C9'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u5E03\u62C9\u67F4\u7EF4\u5C14'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u5E03\u5170\u592A\u5C14'
                        },
                        'Bissau': {
                            'exemplarCity': '\u6BD4\u7ECD'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u963F\u6BD4\u8BA9'
                        },
                        'Accra': {
                            'exemplarCity': '\u963F\u514B\u62C9'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u4E9A\u7684\u65AF\u4E9A\u8D1D\u5DF4'
                        },
                        'Algiers': {
                            'exemplarCity': '\u963F\u5C14\u53CA\u5C14'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u4E0A\u6D77'
                        },
                        'Seoul': {
                            'exemplarCity': '\u9996\u5C14'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u6492\u9A6C\u5C14\u7F55'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u8428\u54C8\u6797'
                        },
                        'Saigon': {
                            'exemplarCity': '\u80E1\u5FD7\u660E\u5E02'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u5229\u96C5\u5F97'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u4EF0\u5149'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u514B\u5B5C\u6D1B\u5C14\u8FBE'
                        },
                        'Qatar': {
                            'exemplarCity': '\u5361\u5854\u5C14'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u5E73\u58E4'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u5764\u7538'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u91D1\u8FB9'
                        },
                        'Oral': {
                            'exemplarCity': '\u4E4C\u62C9\u5C14'
                        },
                        'Omsk': {
                            'exemplarCity': '\u9102\u6728\u65AF\u514B'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u8BFA\u6C83\u897F\u6BD4\u5C14\u65AF\u514B'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u5DF4\u683C\u8FBE'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u91CD\u5E86'
                        },
                        'Colombo': {
                            'exemplarCity': '\u79D1\u4F26\u5761'
                        },
                        'Damascus': {
                            'exemplarCity': '\u5927\u9A6C\u58EB\u9769'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u8FBE\u5361'
                        },
                        'Dili': {
                            'exemplarCity': '\u5E1D\u529B'
                        },
                        'Dubai': {
                            'exemplarCity': '\u8FEA\u62DC'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u675C\u5C1A\u522B'
                        },
                        'Gaza': {
                            'exemplarCity': '\u52A0\u6C99'
                        },
                        'Harbin': {
                            'exemplarCity': '\u54C8\u5C14\u6EE8'
                        },
                        'Hebron': {
                            'exemplarCity': '\u5E0C\u4F2F\u4F26'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u9999\u6E2F'
                        },
                        'Hovd': {
                            'exemplarCity': '\u79D1\u5E03\u591A'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u4F0A\u5C14\u5E93\u8328\u514B'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u96C5\u52A0\u8FBE'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u67E5\u4E9A\u666E\u62C9'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u4E4C\u5170\u5DF4\u6258'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u4E4C\u9C81\u6728\u9F50'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u4E4C\u65AF\u5185\u62C9'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u4E07\u8C61'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u7B26\u62C9\u8FEA\u6C83\u65AF\u6258\u514B'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u96C5\u5E93\u8328\u514B'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u53F6\u5361\u6377\u7433\u5821'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u57C3\u91CC\u6E29'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u4E1C\u4EAC'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u5EF7\u5E03'
                        },
                        'Tehran': {
                            'exemplarCity': '\u5FB7\u9ED1\u5170'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u7B2C\u6BD4\u5229\u65AF'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u5854\u4EC0\u5E72'
                        },
                        'Taipei': {
                            'exemplarCity': '\u53F0\u5317'
                        },
                        'Singapore': {
                            'exemplarCity': '\u65B0\u52A0\u5761'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u8036\u8DEF\u6492\u51B7'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u963F\u4EC0\u54C8\u5DF4\u5FB7'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u963F\u514B\u6258\u522B'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u963F\u514B\u5957'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u963F\u7EB3\u5FB7\u5C14'
                        },
                        'Amman': {
                            'exemplarCity': '\u5B89\u66FC'
                        },
                        'Almaty': {
                            'exemplarCity': '\u963F\u62C9\u6728\u56FE'
                        },
                        'Aden': {
                            'exemplarCity': '\u4E9A\u4E01'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u5DF4\u6797'
                        },
                        'Baku': {
                            'exemplarCity': '\u5DF4\u5E93'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u66FC\u8C37'
                        },
                        'Beirut': {
                            'exemplarCity': '\u8D1D\u9C81\u7279'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u6BD4\u4EC0\u51EF\u514B'
                        },
                        'Brunei': {
                            'exemplarCity': '\u6587\u83B1'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u52A0\u5C14\u5404\u7B54'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u4E54\u5DF4\u5C71'
                        },
                        'Kabul': {
                            'exemplarCity': '\u5580\u5E03\u5C14'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u582A\u5BDF\u52A0'
                        },
                        'Karachi': {
                            'exemplarCity': '\u5361\u62C9\u5947'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u5580\u4EC0\u845B\u5C14'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u52A0\u5FB7\u6EE1\u90FD'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u6C49\u5FB7\u52A0'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u514B\u62C9\u65AF\u8BFA\u4E9A\u5C14\u65AF\u514B'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u5409\u9686\u5761'
                        },
                        'Kuching': {
                            'exemplarCity': '\u53E4\u664B'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u79D1\u5A01\u7279'
                        },
                        'Macau': {
                            'exemplarCity': '\u6FB3\u95E8'
                        },
                        'Magadan': {
                            'exemplarCity': '\u9A6C\u52A0\u4E39'
                        },
                        'Makassar': {
                            'exemplarCity': '\u671B\u52A0\u9521'
                        },
                        'Manila': {
                            'exemplarCity': '\u9A6C\u5C3C\u62C9'
                        },
                        'Muscat': {
                            'exemplarCity': '\u9A6C\u65AF\u5580\u7279'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u5C3C\u79D1\u897F\u4E9A'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u65B0\u5E93\u5179\u6D85\u8328\u514B'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '\u8428\u6469\u4E9A\u65F6\u95F4',
                            'standard': '\u8428\u6469\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u8428\u6469\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u8428\u9A6C\u62C9\u65F6\u95F4',
                            'standard': '\u8428\u9A6C\u62C9\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u8428\u9A6C\u62C9\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u5E93\u9875\u5C9B\u65F6\u95F4',
                            'standard': '\u5E93\u9875\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5E93\u9875\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u7F57\u745F\u62C9\u65F6\u95F4'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u7559\u5C3C\u6C6A\u65F6\u95F4'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u514B\u5B5C\u6D1B\u5C14\u8FBE\u65F6\u95F4',
                            'standard': '\u514B\u5B5C\u6D1B\u5C14\u8FBE\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u514B\u5B5C\u6D1B\u5C14\u8FBE\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u6CE2\u7EB3\u4F69\u65F6\u95F4'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u76AE\u7279\u51EF\u6069\u65F6\u95F4'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686\u7FA4\u5C9B\u65F6\u95F4',
                            'standard': '\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686\u7FA4\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686\u7FA4\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u83F2\u5C3C\u514B\u65AF\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u83F2\u5F8B\u5BBE\u65F6\u95F4',
                            'standard': '\u83F2\u5F8B\u5BBE\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u83F2\u5F8B\u5BBE\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u79D8\u9C81\u65F6\u95F4',
                            'standard': '\u79D8\u9C81\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u79D8\u9C81\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u5DF4\u62C9\u572D\u65F6\u95F4',
                            'standard': '\u5DF4\u62C9\u572D\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5DF4\u62C9\u572D\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A\u65F6\u95F4'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u5E15\u52B3\u65F6\u95F4'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u5DF4\u57FA\u65AF\u5766\u65F6\u95F4',
                            'standard': '\u5DF4\u57FA\u65AF\u5766\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5DF4\u57FA\u65AF\u5766\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u9102\u6728\u65AF\u514B\u65F6\u95F4',
                            'standard': '\u9102\u6728\u65AF\u514B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u9102\u6728\u65AF\u514B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u65B0\u897F\u4F2F\u5229\u4E9A\u65F6\u95F4',
                            'standard': '\u65B0\u897F\u4F2F\u5229\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u65B0\u897F\u4F2F\u5229\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u5317\u9A6C\u91CC\u4E9A\u7EB3\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u8D39\u5C14\u5357\u591A-\u8FEA\u8BFA\u7F57\u5C3C\u4E9A\u5C9B\u65F6\u95F4',
                            'standard': '\u8D39\u5C14\u5357\u591A-\u8FEA\u8BFA\u7F57\u5C3C\u4E9A\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u8D39\u5C14\u5357\u591A-\u8FEA\u8BFA\u7F57\u5C3C\u4E9A\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u8BFA\u798F\u514B\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u7EBD\u57C3\u65F6\u95F4'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u7EBD\u82AC\u5170\u65F6\u95F4',
                            'standard': '\u7EBD\u82AC\u5170\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u7EBD\u82AC\u5170\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u65B0\u897F\u5170\u65F6\u95F4',
                            'standard': '\u65B0\u897F\u5170\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u65B0\u897F\u5170\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A\u65F6\u95F4',
                            'standard': '\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u5317\u7F8E\u4E2D\u90E8\u65F6\u95F4',
                            'standard': '\u5317\u7F8E\u4E2D\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5317\u7F8E\u4E2D\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u5317\u7F8E\u4E1C\u90E8\u65F6\u95F4',
                            'standard': '\u5317\u7F8E\u4E1C\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5317\u7F8E\u4E1C\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u5317\u7F8E\u5C71\u533A\u65F6\u95F4',
                            'standard': '\u5317\u7F8E\u5C71\u533A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5317\u7F8E\u5C71\u533A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u5317\u7F8E\u592A\u5E73\u6D0B\u65F6\u95F4',
                            'standard': '\u5317\u7F8E\u592A\u5E73\u6D0B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5317\u7F8E\u592A\u5E73\u6D0B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u963F\u7EB3\u5FB7\u5C14\u65F6\u95F4',
                            'standard': '\u963F\u7EB3\u5FB7\u5C14\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u7EB3\u5FB7\u5C14\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\u963F\u514B\u5957\u65F6\u95F4',
                            'standard': '\u963F\u514B\u5957\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u514B\u5957\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\u963F\u514B\u6258\u522B\u65F6\u95F4',
                            'standard': '\u963F\u514B\u6258\u522B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u514B\u6258\u522B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u4F5B\u5F97\u89D2\u65F6\u95F4',
                            'standard': '\u4F5B\u5F97\u89D2\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4F5B\u5F97\u89D2\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '\u51EF\u897F\u65F6\u95F4'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u67E5\u83AB\u7F57\u65F6\u95F4'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u67E5\u5766\u65F6\u95F4',
                            'standard': '\u67E5\u5766\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u67E5\u5766\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u667A\u5229\u65F6\u95F4',
                            'standard': '\u667A\u5229\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u667A\u5229\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u4E2D\u56FD\u65F6\u95F4',
                            'standard': '\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E2D\u56FD\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u4E54\u5DF4\u5C71\u65F6\u95F4',
                            'standard': '\u4E54\u5DF4\u5C71\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E54\u5DF4\u5C71\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u5723\u8BDE\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u79D1\u79D1\u65AF\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u54E5\u4F26\u6BD4\u4E9A\u65F6\u95F4',
                            'standard': '\u54E5\u4F26\u6BD4\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u54E5\u4F26\u6BD4\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u5E93\u514B\u7FA4\u5C9B\u65F6\u95F4',
                            'standard': '\u5E93\u514B\u7FA4\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5E93\u514B\u7FA4\u5C9B\u4EF2\u590F\u65F6\u95F4'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u53E4\u5DF4\u65F6\u95F4',
                            'standard': '\u53E4\u5DF4\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u53E4\u5DF4\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u6234\u7EF4\u65AF\u65F6\u95F4'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u8FEA\u8499\u8FEA\u5C14\u7EF4\u5C14\u65F6\u95F4'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u4E1C\u5E1D\u6C76\u65F6\u95F4'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u590D\u6D3B\u8282\u5C9B\u65F6\u95F4',
                            'standard': '\u590D\u6D3B\u8282\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u590D\u6D3B\u8282\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u5384\u74DC\u591A\u5C14\u65F6\u95F4'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u4E2D\u6B27\u65F6\u95F4',
                            'standard': '\u4E2D\u6B27\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E2D\u6B27\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u4E1C\u6B27\u65F6\u95F4',
                            'standard': '\u4E1C\u6B27\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E1C\u6B27\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u897F\u6B27\u65F6\u95F4',
                            'standard': '\u897F\u6B27\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u897F\u6B27\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u798F\u514B\u5170\u7FA4\u5C9B\u65F6\u95F4',
                            'standard': '\u798F\u514B\u5170\u7FA4\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u798F\u514B\u5170\u7FA4\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u6590\u6D4E\u65F6\u95F4',
                            'standard': '\u6590\u6D4E\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6590\u6D4E\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u6CD5\u5C5E\u572D\u4E9A\u90A3\u65F6\u95F4'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u6CD5\u5C5E\u5357\u65B9\u548C\u5357\u6781\u9886\u5730\u65F6\u95F4'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u52A0\u62C9\u5E15\u6208\u65AF\u65F6\u95F4'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u6258\u514B\u52B3\u65F6\u95F4'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u6C64\u52A0\u65F6\u95F4',
                            'standard': '\u6C64\u52A0\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6C64\u52A0\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u695A\u514B\u65F6\u95F4'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u571F\u5E93\u66FC\u65AF\u5766\u65F6\u95F4',
                            'standard': '\u571F\u5E93\u66FC\u65AF\u5766\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u571F\u5E93\u66FC\u65AF\u5766\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u56FE\u74E6\u5362\u65F6\u95F4'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u4E4C\u62C9\u572D\u65F6\u95F4',
                            'standard': '\u4E4C\u62C9\u572D\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E4C\u62C9\u572D\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u4E4C\u5179\u522B\u514B\u65AF\u5766\u65F6\u95F4',
                            'standard': '\u4E4C\u5179\u522B\u514B\u65AF\u5766\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E4C\u5179\u522B\u514B\u65AF\u5766\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u74E6\u52AA\u963F\u56FE\u65F6\u95F4',
                            'standard': '\u74E6\u52AA\u963F\u56FE\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u74E6\u52AA\u963F\u56FE\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u53F6\u5361\u6377\u7433\u5821\u65F6\u95F4',
                            'standard': '\u53F6\u5361\u6377\u7433\u5821\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u53F6\u5361\u6377\u7433\u5821\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u96C5\u5E93\u8328\u514B\u65F6\u95F4',
                            'standard': '\u96C5\u5E93\u8328\u514B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u96C5\u5E93\u8328\u514B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u74E6\u5229\u65AF\u548C\u5BCC\u56FE\u7EB3\u65F6\u95F4'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u5A01\u514B\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u6C83\u65AF\u6258\u514B\u65F6\u95F4'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u4F0F\u5C14\u52A0\u683C\u52D2\u65F6\u95F4',
                            'standard': '\u4F0F\u5C14\u52A0\u683C\u52D2\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4F0F\u5C14\u52A0\u683C\u52D2\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u6D77\u53C2\u5D34\u65F6\u95F4',
                            'standard': '\u6D77\u53C2\u5D34\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6D77\u53C2\u5D34\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u59D4\u5185\u745E\u62C9\u65F6\u95F4'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u5854\u5409\u514B\u65AF\u5766\u65F6\u95F4'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u53F0\u5317\u65F6\u95F4',
                            'standard': '\u53F0\u5317\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u53F0\u5317\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u5854\u5E0C\u63D0\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u662D\u548C\u65F6\u95F4'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u82CF\u91CC\u5357\u65F6\u95F4'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u5357\u4E54\u6CBB\u4E9A\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u6240\u7F57\u95E8\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u65B0\u52A0\u5761\u65F6\u95F4'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u585E\u820C\u5C14\u65F6\u95F4'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u5173\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u683C\u9675\u5170\u5C9B\u897F\u90E8\u65F6\u95F4',
                            'standard': '\u683C\u9675\u5170\u5C9B\u897F\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u683C\u9675\u5170\u5C9B\u897F\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u683C\u9675\u5170\u5C9B\u4E1C\u90E8\u65F6\u95F4',
                            'standard': '\u683C\u9675\u5170\u5C9B\u4E1C\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u683C\u9675\u5170\u5C9B\u4E1C\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u683C\u6797\u5C3C\u6CBB\u6807\u51C6\u65F6\u95F4'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u5409\u5C14\u4F2F\u7279\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u683C\u9C81\u5409\u4E9A\u65F6\u95F4',
                            'standard': '\u683C\u9C81\u5409\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u683C\u9C81\u5409\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u7518\u6BD4\u5C14\u65F6\u95F4'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u4E9A\u9A6C\u900A\u65F6\u95F4',
                            'standard': '\u4E9A\u9A6C\u900A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E9A\u9A6C\u900A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u963F\u514B\u91CC\u65F6\u95F4',
                            'standard': '\u963F\u514B\u91CC\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u514B\u91CC\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u963F\u5BCC\u6C57\u65F6\u95F4'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u4E2D\u90E8\u975E\u6D32\u65F6\u95F4'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u4E1C\u90E8\u975E\u6D32\u65F6\u95F4'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u5357\u90E8\u975E\u6D32\u65F6\u95F4'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u897F\u90E8\u975E\u6D32\u65F6\u95F4',
                            'standard': '\u897F\u90E8\u975E\u6D32\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u897F\u90E8\u975E\u6D32\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u963F\u62C9\u65AF\u52A0\u65F6\u95F4',
                            'standard': '\u963F\u62C9\u65AF\u52A0\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u62C9\u65AF\u52A0\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\u963F\u62C9\u6728\u56FE\u65F6\u95F4',
                            'standard': '\u963F\u62C9\u6728\u56FE\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u62C9\u6728\u56FE\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u963F\u62C9\u4F2F\u65F6\u95F4',
                            'standard': '\u963F\u62C9\u4F2F\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u62C9\u4F2F\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u963F\u6839\u5EF7\u65F6\u95F4',
                            'standard': '\u963F\u6839\u5EF7\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u6839\u5EF7\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u963F\u6839\u5EF7\u897F\u90E8\u65F6\u95F4',
                            'standard': '\u963F\u6839\u5EF7\u897F\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u6839\u5EF7\u897F\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u4E9A\u7F8E\u5C3C\u4E9A\u65F6\u95F4',
                            'standard': '\u4E9A\u7F8E\u5C3C\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E9A\u7F8E\u5C3C\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u5927\u897F\u6D0B\u65F6\u95F4',
                            'standard': '\u5927\u897F\u6D0B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5927\u897F\u6D0B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u6FB3\u5927\u5229\u4E9A\u4E2D\u90E8\u65F6\u95F4',
                            'standard': '\u6FB3\u5927\u5229\u4E9A\u4E2D\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6FB3\u5927\u5229\u4E9A\u4E2D\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u6FB3\u5927\u5229\u4E9A\u4E2D\u897F\u90E8\u65F6\u95F4',
                            'standard': '\u6FB3\u5927\u5229\u4E9A\u4E2D\u897F\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6FB3\u5927\u5229\u4E9A\u4E2D\u897F\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u6FB3\u5927\u5229\u4E9A\u4E1C\u90E8\u65F6\u95F4',
                            'standard': '\u6FB3\u5927\u5229\u4E9A\u4E1C\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6FB3\u5927\u5229\u4E9A\u4E1C\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u6FB3\u5927\u5229\u4E9A\u897F\u90E8\u65F6\u95F4',
                            'standard': '\u6FB3\u5927\u5229\u4E9A\u897F\u90E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6FB3\u5927\u5229\u4E9A\u897F\u90E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u963F\u585E\u62DC\u7586\u65F6\u95F4',
                            'standard': '\u963F\u585E\u62DC\u7586\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u963F\u585E\u62DC\u7586\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u4E9A\u901F\u5C14\u7FA4\u5C9B\u65F6\u95F4',
                            'standard': '\u4E9A\u901F\u5C14\u7FA4\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E9A\u901F\u5C14\u7FA4\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u5B5F\u52A0\u62C9\u65F6\u95F4',
                            'standard': '\u5B5F\u52A0\u62C9\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5B5F\u52A0\u62C9\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u4E0D\u4E39\u65F6\u95F4'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u73BB\u5229\u7EF4\u4E9A\u65F6\u95F4'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u5DF4\u897F\u5229\u4E9A\u65F6\u95F4',
                            'standard': '\u5DF4\u897F\u5229\u4E9A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5DF4\u897F\u5229\u4E9A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u6587\u83B1\u8FBE\u9C81\u8428\u5170\u65F6\u95F4'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u6D77\u6E7E\u65F6\u95F4'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u572D\u4E9A\u90A3\u65F6\u95F4'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u590F\u5A01\u5937-\u963F\u7559\u7533\u65F6\u95F4',
                            'standard': '\u590F\u5A01\u5937-\u963F\u7559\u7533\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u590F\u5A01\u5937-\u963F\u7559\u7533\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u9999\u6E2F\u65F6\u95F4',
                            'standard': '\u9999\u6E2F\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u9999\u6E2F\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u79D1\u5E03\u591A\u65F6\u95F4',
                            'standard': '\u79D1\u5E03\u591A\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u79D1\u5E03\u591A\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u5370\u5EA6\u65F6\u95F4'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u5370\u5EA6\u6D0B\u65F6\u95F4'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u5370\u5EA6\u652F\u90A3\u65F6\u95F4'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u5370\u5EA6\u5C3C\u897F\u4E9A\u4E2D\u90E8\u65F6\u95F4'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u5370\u5EA6\u5C3C\u897F\u4E9A\u4E1C\u90E8\u65F6\u95F4'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u5370\u5EA6\u5C3C\u897F\u4E9A\u897F\u90E8\u65F6\u95F4'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u4F0A\u6717\u65F6\u95F4',
                            'standard': '\u4F0A\u6717\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4F0A\u6717\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u4F0A\u5C14\u5E93\u8328\u514B\u65F6\u95F4',
                            'standard': '\u4F0A\u5C14\u5E93\u8328\u514B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4F0A\u5C14\u5E93\u8328\u514B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u4EE5\u8272\u5217\u65F6\u95F4',
                            'standard': '\u4EE5\u8272\u5217\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4EE5\u8272\u5217\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u65E5\u672C\u65F6\u95F4',
                            'standard': '\u65E5\u672C\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u65E5\u672C\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u5F7C\u5F97\u7F57\u5DF4\u752B\u6D1B\u592B\u65AF\u514B-\u582A\u5BDF\u52A0\u65F6\u95F4',
                            'standard': '\u5F7C\u5F97\u7F57\u5DF4\u752B\u6D1B\u592B\u65AF\u514B-\u582A\u5BDF\u52A0\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u5F7C\u5F97\u7F57\u5DF4\u752B\u6D1B\u592B\u65AF\u514B-\u582A\u5BDF\u52A0\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u54C8\u8428\u514B\u65AF\u5766\u4E1C\u90E8\u65F6\u95F4'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u54C8\u8428\u514B\u65AF\u5766\u897F\u90E8\u65F6\u95F4'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u97E9\u56FD\u65F6\u95F4',
                            'standard': '\u97E9\u56FD\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u97E9\u56FD\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u79D1\u65AF\u96F7\u65F6\u95F4'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u514B\u62C9\u65AF\u8BFA\u4E9A\u5C14\u65AF\u514B\u65F6\u95F4',
                            'standard': '\u514B\u62C9\u65AF\u8BFA\u4E9A\u5C14\u65AF\u514B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u514B\u62C9\u65AF\u8BFA\u4E9A\u5C14\u65AF\u514B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u5409\u5C14\u5409\u65AF\u65AF\u5766\u65F6\u95F4'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u5170\u5361\u65F6\u95F4'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u83B1\u6069\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u8C6A\u52CB\u7235\u5C9B\u65F6\u95F4',
                            'standard': '\u8C6A\u52CB\u7235\u5C9B\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u8C6A\u52CB\u7235\u5C9B\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u6FB3\u95E8\u65F6\u95F4',
                            'standard': '\u6FB3\u95E8\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6FB3\u95E8\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u9EA6\u5938\u91CC\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u9A6C\u52A0\u4E39\u65F6\u95F4',
                            'standard': '\u9A6C\u52A0\u4E39\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u9A6C\u52A0\u4E39\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u9A6C\u6765\u897F\u4E9A\u65F6\u95F4'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u9A6C\u5C14\u4EE3\u592B\u65F6\u95F4'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u9A6C\u514B\u8428\u65AF\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u9A6C\u7ECD\u5C14\u7FA4\u5C9B\u65F6\u95F4'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u6BDB\u91CC\u6C42\u65AF\u65F6\u95F4',
                            'standard': '\u6BDB\u91CC\u6C42\u65AF\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u6BDB\u91CC\u6C42\u65AF\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u83AB\u68EE\u65F6\u95F4'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u4E4C\u5170\u5DF4\u6258\u65F6\u95F4',
                            'standard': '\u4E4C\u5170\u5DF4\u6258\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u4E4C\u5170\u5DF4\u6258\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u83AB\u65AF\u79D1\u65F6\u95F4',
                            'standard': '\u83AB\u65AF\u79D1\u6807\u51C6\u65F6\u95F4',
                            'daylight': '\u83AB\u65AF\u79D1\u590F\u4EE4\u65F6\u95F4'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u7F05\u7538\u65F6\u95F4'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u7459\u9C81\u65F6\u95F4'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u5C3C\u6CCA\u5C14\u65F6\u95F4'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}\u65F6\u95F4',
                'regionFormat-type-daylight': '{0}\u590F\u4EE4\u65F6\u95F4',
                'regionFormat-type-standard': '{0}\u6807\u51C6\u65F6\u95F4',
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
                                '8': '\u516B\u6708',
                                '7': '\u4E03\u6708',
                                '6': '\u516D\u6708',
                                '5': '\u4E94\u6708',
                                '12': '\u5341\u4E8C\u6708',
                                '11': '\u5341\u4E00\u6708',
                                '10': '\u5341\u6708',
                                '9': '\u4E5D\u6708',
                                '1': '\u4E00\u6708',
                                '2': '\u4E8C\u6708',
                                '3': '\u4E09\u6708',
                                '4': '\u56DB\u6708'
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
                                '8': '\u516B\u6708',
                                '7': '\u4E03\u6708',
                                '6': '\u516D\u6708',
                                '5': '\u4E94\u6708',
                                '12': '\u5341\u4E8C\u6708',
                                '11': '\u5341\u4E00\u6708',
                                '10': '\u5341\u6708',
                                '9': '\u4E5D\u6708',
                                '1': '\u4E00\u6708',
                                '2': '\u4E8C\u6708',
                                '3': '\u4E09\u6708',
                                '4': '\u56DB\u6708'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u5468\u65E5',
                                'mon': '\u5468\u4E00',
                                'tue': '\u5468\u4E8C',
                                'wed': '\u5468\u4E09',
                                'thu': '\u5468\u56DB',
                                'fri': '\u5468\u4E94',
                                'sat': '\u5468\u516D'
                            },
                            'narrow': {
                                'sun': '\u65E5',
                                'mon': '\u4E00',
                                'tue': '\u4E8C',
                                'wed': '\u4E09',
                                'thu': '\u56DB',
                                'fri': '\u4E94',
                                'sat': '\u516D'
                            },
                            'short': {
                                'sun': '\u5468\u65E5',
                                'mon': '\u5468\u4E00',
                                'tue': '\u5468\u4E8C',
                                'wed': '\u5468\u4E09',
                                'thu': '\u5468\u56DB',
                                'fri': '\u5468\u4E94',
                                'sat': '\u5468\u516D'
                            },
                            'wide': {
                                'sun': '\u661F\u671F\u65E5',
                                'mon': '\u661F\u671F\u4E00',
                                'tue': '\u661F\u671F\u4E8C',
                                'wed': '\u661F\u671F\u4E09',
                                'thu': '\u661F\u671F\u56DB',
                                'fri': '\u661F\u671F\u4E94',
                                'sat': '\u661F\u671F\u516D'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u5468\u65E5',
                                'mon': '\u5468\u4E00',
                                'tue': '\u5468\u4E8C',
                                'wed': '\u5468\u4E09',
                                'thu': '\u5468\u56DB',
                                'fri': '\u5468\u4E94',
                                'sat': '\u5468\u516D'
                            },
                            'narrow': {
                                'sun': '\u65E5',
                                'mon': '\u4E00',
                                'tue': '\u4E8C',
                                'wed': '\u4E09',
                                'thu': '\u56DB',
                                'fri': '\u4E94',
                                'sat': '\u516D'
                            },
                            'short': {
                                'sun': '\u5468\u65E5',
                                'mon': '\u5468\u4E00',
                                'tue': '\u5468\u4E8C',
                                'wed': '\u5468\u4E09',
                                'thu': '\u5468\u56DB',
                                'fri': '\u5468\u4E94',
                                'sat': '\u5468\u516D'
                            },
                            'wide': {
                                'sun': '\u661F\u671F\u65E5',
                                'mon': '\u661F\u671F\u4E00',
                                'tue': '\u661F\u671F\u4E8C',
                                'wed': '\u661F\u671F\u4E09',
                                'thu': '\u661F\u671F\u56DB',
                                'fri': '\u661F\u671F\u4E94',
                                'sat': '\u661F\u671F\u516D'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1\u5B63\u5EA6',
                                '2': '2\u5B63\u5EA6',
                                '3': '3\u5B63\u5EA6',
                                '4': '4\u5B63\u5EA6'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u7B2C\u4E00\u5B63\u5EA6',
                                '2': '\u7B2C\u4E8C\u5B63\u5EA6',
                                '3': '\u7B2C\u4E09\u5B63\u5EA6',
                                '4': '\u7B2C\u56DB\u5B63\u5EA6'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1\u5B63\u5EA6',
                                '2': '2\u5B63\u5EA6',
                                '3': '3\u5B63\u5EA6',
                                '4': '4\u5B63\u5EA6'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u7B2C\u4E00\u5B63\u5EA6',
                                '2': '\u7B2C\u4E8C\u5B63\u5EA6',
                                '3': '\u7B2C\u4E09\u5B63\u5EA6',
                                '4': '\u7B2C\u56DB\u5B63\u5EA6'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'narrow': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'wide': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'narrow': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'wide': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u516C\u5143\u524D',
                            '0-alt-variant': 'BCE',
                            '1': '\u516C\u5143',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u516C\u5143\u524D',
                            '0-alt-variant': 'BCE',
                            '1': '\u516C\u5143',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '\u516C\u5143\u524D',
                            '0-alt-variant': 'BCE',
                            '1': '\u516C\u5143',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'y\u5E74M\u6708d\u65E5EEEE',
                        'long': 'y\u5E74M\u6708d\u65E5',
                        'medium': 'y\u5E74M\u6708d\u65E5',
                        'short': 'yy/M/d'
                    },
                    'timeFormats': {
                        'full': 'zzzzah:mm:ss',
                        'long': 'zah:mm:ss',
                        'medium': 'ah:mm:ss',
                        'short': 'ah:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'y\u5E74M\u6708d\u65E5',
                            'yMMM': 'y\u5E74M\u6708',
                            'yMM': 'y\u5E74M\u6708',
                            'yMEd': 'y/M/dE',
                            'EHm': 'EHH:mm',
                            'Ehm': 'Eah:mm',
                            'Ed': 'd\u65E5E',
                            'd': 'd\u65E5',
                            'GyMMMd': 'Gy\u5E74M\u6708d\u65E5',
                            'GyMMMEd': 'Gy\u5E74M\u6708d\u65E5E',
                            'h': 'ah\u65F6',
                            'H': 'H\u65F6',
                            'yQQQQ': 'y\u5E74\u7B2CQ\u5B63\u5EA6',
                            'yQQQ': 'y\u5E74\u7B2CQ\u5B63\u5EA6',
                            'yMMMM': 'y\u5E74M\u6708',
                            'yMMMEd': 'y\u5E74M\u6708d\u65E5E',
                            'Hms': 'HH:mm:ss',
                            'hms': 'ah:mm:ss',
                            'Hm': 'HH:mm',
                            'hm': 'ah:mm',
                            'Ehms': 'Eah:mm:ss',
                            'EHms': 'EHH:mm:ss',
                            'Gy': 'Gy\u5E74',
                            'GyMMM': 'Gy\u5E74M\u6708',
                            'M': 'M\u6708',
                            'Md': 'M/d',
                            'MEd': 'M/dE',
                            'MMdd': 'MM/dd',
                            'MMM': 'LLL',
                            'MMMd': 'M\u6708d\u65E5',
                            'MMMEd': 'M\u6708d\u65E5E',
                            'MMMMdd': 'M\u6708dd\u65E5',
                            'ms': 'mm:ss',
                            'y': 'y\u5E74',
                            'yM': 'y/M',
                            'yMd': 'y/M/d'
                        },
                        'appendItems': {
                            'Second': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Month': '{0} ({2}: {1})',
                            'Year': '{1} {0}',
                            'Week': '{0} ({2}: {1})',
                            'Timezone': '{1}{0}',
                            'Day': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Era': '{1} {0}',
                            'Hour': '{0} ({2}: {1})',
                            'Minute': '{0} ({2}: {1})'
                        },
                        'intervalFormats': {
                            'MMMEd': {
                                'd': 'M\u6708d\u65E5E\u81F3d\u65E5E',
                                'M': 'M\u6708d\u65E5E\u81F3M\u6708d\u65E5E'
                            },
                            'MMMd': {
                                'd': 'M\u6708d\u65E5\u81F3d\u65E5',
                                'M': 'M\u6708d\u65E5\u81F3M\u6708d\u65E5'
                            },
                            'MMM': {
                                'M': 'LLL\u81F3LLL'
                            },
                            'MEd': {
                                'd': 'M/dE\u81F3M/dE',
                                'M': 'M/dE\u81F3M/dE'
                            },
                            'Md': {
                                'd': 'M/d \u2013 M/d',
                                'M': 'M/d \u2013 M/d'
                            },
                            'M': {
                                'M': 'M\u2013M\u6708'
                            },
                            'Hv': {
                                'H': 'v HH\u2013HH'
                            },
                            'hv': {
                                'a': 'vah\u65F6\u81F3ah\u65F6',
                                'h': 'vah\u65F6\u81F3h\u65F6'
                            },
                            'y': {
                                'y': 'y\u2013y\u5E74'
                            },
                            'yM': {
                                'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                            },
                            'yMd': {
                                'd': 'y/M/d \u2013 y/M/d',
                                'M': 'y/M/d \u2013 y/M/d',
                                'y': 'y/M/d \u2013 y/M/d'
                            },
                            'yMEd': {
                                'd': 'y/M/dE\u81F3y/M/dE',
                                'M': 'y/M/dE\u81F3y/M/dE',
                                'y': 'y/M/dE\u81F3y/M/dE'
                            },
                            'yMMM': {
                                'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                            },
                            'yMMMd': {
                                'd': 'y\u5E74M\u6708d\u65E5\u81F3d\u65E5',
                                'M': 'y\u5E74M\u6708d\u65E5\u81F3M\u6708d\u65E5',
                                'y': 'y\u5E74M\u6708d\u65E5\u81F3y\u5E74M\u6708d\u65E5'
                            },
                            'yMMMEd': {
                                'd': 'y\u5E74M\u6708d\u65E5E\u81F3d\u65E5E',
                                'M': 'y\u5E74M\u6708d\u65E5E\u81F3M\u6708d\u65E5E',
                                'y': 'y\u5E74M\u6708d\u65E5E\u81F3y\u5E74M\u6708d\u65E5E'
                            },
                            'yMMMM': {
                                'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                            },
                            'Hmv': {
                                'H': 'v HH:mm\u2013HH:mm',
                                'm': 'v HH:mm\u2013HH:mm'
                            },
                            'hmv': {
                                'a': 'vah:mm\u81F3ah:mm',
                                'h': 'vah:mm\u81F3h:mm',
                                'm': 'vah:mm\u81F3h:mm'
                            },
                            'Hm': {
                                'H': 'HH:mm\u2013HH:mm',
                                'm': 'HH:mm\u2013HH:mm'
                            },
                            'hm': {
                                'a': 'ah:mm\u81F3ah:mm',
                                'h': 'ah:mm\u81F3h:mm',
                                'm': 'ah:mm\u81F3h:mm'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'ah\u65F6\u81F3ah\u65F6',
                                'h': 'ah\u65F6\u81F3h\u65F6'
                            },
                            'd': {
                                'd': 'd\u2013d\u65E5'
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
