/* AstroDate
 * Language: vi
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
        AstroDate.lang('vi', {
            'codePatterns': {
                'language': 'Ng\u00F4n ng\u1EEF: {0}',
                'script': 'Ch\u1EEF vi\u1EBFt: {0}',
                'territory': 'V\u00F9ng: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'S\u1EAFp x\u1EBFp ch\u1EEF Kana ri\u00EAng bi\u1EC7t',
                    'yes': 'S\u1EAFp x\u1EBFp ch\u1EEF Kana kh\u00E1c nhau'
                },
                'colCaseLevel': {
                    'no': 'S\u1EAFp x\u1EBFp kh\u00F4ng ph\u00E2n bi\u1EC7t ch\u1EEF hoa/ch\u1EEF th\u01B0\u1EDDng',
                    'yes': 'S\u1EAFp x\u1EBFp ph\u00E2n bi\u1EC7t ch\u1EEF hoa/ch\u1EEF th\u01B0\u1EDDng'
                },
                'colCaseFirst': {
                    'lower': 'S\u1EAFp x\u1EBFp ch\u1EEF th\u01B0\u1EDDng \u0111\u1EA7u ti\u00EAn',
                    'no': 'S\u1EAFp x\u1EBFp th\u1EE9 t\u1EF1 ch\u1EEF c\u00E1i b\u00ECnh th\u01B0\u1EDDng',
                    'upper': 'S\u1EAFp x\u1EBFp ch\u1EEF hoa \u0111\u1EA7u ti\u00EAn'
                },
                'colStrength': {
                    'identical': 'S\u1EAFp x\u1EBFp t\u1EA5t c\u1EA3',
                    'primary': 'Ch\u1EC9 s\u1EAFp x\u1EBFp ch\u1EEF c\u00E1i c\u01A1 s\u1EDF',
                    'quaternary': 'S\u1EAFp x\u1EBFp d\u1EA5u tr\u1ECDng \u00E2m/ch\u1EEF c\u00E1i/\u0111\u1ED9 r\u1ED9ng/ch\u1EEF Kana',
                    'secondary': 'S\u1EAFp x\u1EBFp d\u1EA5u tr\u1ECDng \u00E2m',
                    'tertiary': 'S\u1EAFp x\u1EBFp d\u1EA5u tr\u1ECDng \u00E2m/ch\u1EEF c\u00E1i/\u0111\u1ED9 r\u1ED9ng'
                },
                'colNumeric': {
                    'no': 'S\u1EAFp x\u1EBFp t\u1EEBng ch\u1EEF s\u1ED1',
                    'yes': 'S\u1EAFp x\u1EBFp ch\u1EEF s\u1ED1 theo s\u1ED1'
                },
                'colNormalization': {
                    'no': 'S\u1EAFp x\u1EBFp kh\u00F4ng theo chu\u1EA9n h\u00F3a',
                    'yes': 'S\u1EAFp x\u1EBFp unicode \u0111\u01B0\u1EE3c chu\u1EA9n h\u00F3a'
                },
                'calendar': {
                    'japanese': 'L\u1ECBch Nh\u1EADt B\u1EA3n',
                    'iso8601': 'L\u1ECBch ISO-8601',
                    'coptic': 'L\u1ECBch Copts',
                    'dangi': 'L\u1ECBch Dangi',
                    'ethiopic': 'L\u1ECBch Ethiopia',
                    'ethiopic-amete-alem': 'L\u1ECBch Ethiopic Amete Alem',
                    'gregorian': 'L\u1ECBch Gregory',
                    'hebrew': 'L\u1ECBch Do Th\u00E1i',
                    'persian': 'L\u1ECBch Ba T\u01B0',
                    'roc': 'L\u1ECBch Trung Hoa D\u00E2n Qu\u1ED1c',
                    'chinese': 'L\u1ECBch Trung Qu\u1ED1c',
                    'buddhist': 'L\u1ECBch Ph\u1EADt Gi\u00E1o',
                    'indian': 'L\u1ECBch Qu\u1ED1c gia \u1EA4n \u0110\u1ED9',
                    'islamic': 'L\u1ECBch Islamic',
                    'islamic-civil': 'L\u1ECBch Islamic-Civil',
                    'islamic-rgsa': 'L\u1ECBch H\u1ED3i Gi\u00E1o - \u1EA2 R\u1EADp X\u00EA-\u00FAt',
                    'islamic-tbla': 'L\u1ECBch H\u1ED3i Gi\u00E1o - Thi\u00EAn v\u0103n',
                    'islamic-umalqura': 'L\u1ECBch H\u1ED3i Gi\u00E1o - Umm al-Qura'
                },
                'collation': {
                    'phonebook': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo danh b\u1EA1 \u0111i\u1EC7n tho\u1EA1i',
                    'gb2312han': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo ti\u1EBFng Trung gi\u1EA3n th\u1EC3 - GB2312',
                    'eor': 'eor',
                    'ducet': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp unicode m\u1EB7c \u0111\u1ECBnh',
                    'dictionary': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo t\u1EEB \u0111i\u1EC3n',
                    'big5han': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo ti\u1EBFng Trung ph\u1ED3n th\u1EC3 - Big5',
                    'traditional': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp truy\u1EC1n th\u1ED1ng',
                    'standard': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp chu\u1EA9n',
                    'zhuyin': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp Zhuyin',
                    'unihan': 'Tr\u00ECnh t\u1EF1 s\u1EAFp x\u1EBFp theo b\u1ED9-n\u00E9t',
                    'stroke': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo n\u00E9t ch\u1EEF',
                    'searchjl': 'T\u00ECm ki\u1EBFm theo ph\u1EE5 \u00E2m \u0111\u1EA7u ch\u1EEF Hangul',
                    'search': 'T\u00ECm ki\u1EBFm m\u1EE5c \u0111\u00EDch chung',
                    'reformed': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp \u0111\u00E3 s\u1EEDa \u0111\u1ED5i',
                    'pinyin': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo b\u00EDnh \u00E2m',
                    'phonetic': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp theo ng\u1EEF \u00E2m'
                },
                'numbers': {
                    'knda': 'Ch\u1EEF s\u1ED1 Kannada',
                    'khmr': 'Ch\u1EEF s\u1ED1 Kh\u01A1-me',
                    'kali': 'Ch\u1EEF s\u1ED1 Kayah Li',
                    'jpanfin': 'Ch\u1EEF s\u1ED1 d\u00F9ng trong t\u00E0i ch\u00EDnh c\u1EE7a ti\u1EBFng Nh\u1EADt',
                    'jpan': 'Ch\u1EEF s\u1ED1 Nh\u1EADt B\u1EA3n',
                    'java': 'Ch\u1EEF s\u1ED1 Java',
                    'hebr': 'Ch\u1EEF s\u1ED1 Do Th\u00E1i',
                    'hantfin': 'Ch\u1EEF s\u1ED1 d\u00F9ng trong t\u00E0i ch\u00EDnh c\u1EE7a ti\u1EBFng Trung ph\u1ED3n th\u1EC3',
                    'hant': 'Ch\u1EEF s\u1ED1 ti\u1EBFng Trung ph\u1ED3n th\u1EC3',
                    'hansfin': 'Ch\u1EEF s\u1ED1 d\u00F9ng trong t\u00E0i ch\u00EDnh c\u1EE7a ti\u1EBFng Trung gi\u1EA3n th\u1EC3',
                    'hans': 'Ch\u1EEF s\u1ED1 c\u1EE7a ti\u1EBFng Trung gi\u1EA3n th\u1EC3',
                    'hanidec': 'Ch\u1EEF s\u1ED1 th\u1EADp ph\u00E2n Trung Qu\u1ED1c',
                    'guru': 'Ch\u1EEF s\u1ED1 Gurmukhi',
                    'gujr': 'Ch\u1EEF s\u1ED1 Gujarati',
                    'greklow': 'Ch\u1EEF s\u1ED1 Hy L\u1EA1p vi\u1EBFt th\u01B0\u1EDDng',
                    'grek': 'Ch\u1EEF s\u1ED1 Hy L\u1EA1p',
                    'bali': 'Ch\u1EEF s\u1ED1 Bali',
                    'armnlow': 'Ch\u1EEF s\u1ED1 Armenia vi\u1EBFt th\u01B0\u1EDDng',
                    'armn': 'Ch\u1EEF s\u1ED1 Armeni',
                    'arabext': 'Ch\u1EEF s\u1ED1 \u1EA2 R\u1EADp - \u1EA4n \u0110\u1ED9 m\u1EDF r\u1ED9ng',
                    'arab': 'Ch\u1EEF s\u1ED1 \u1EA2 R\u1EADp - \u1EA4n \u0110\u1ED9',
                    'finance': 'Ch\u1EEF s\u1ED1 d\u00F9ng trong t\u00E0i ch\u00EDnh',
                    'traditional': 'S\u1ED1 truy\u1EC1n th\u1ED1ng',
                    'native': 'Ch\u1EEF s\u1ED1 t\u1EF1 nhi\u00EAn',
                    'beng': 'Ch\u1EEF s\u1ED1 Bangladesh',
                    'brah': 'Ch\u1EEF s\u1ED1 Brahmi',
                    'cakm': 'Ch\u1EEF s\u1ED1 Chakma',
                    'cham': 'Ch\u1EEF s\u1ED1 Ch\u0103m',
                    'deva': 'Ch\u1EEF s\u1ED1 Devanagari',
                    'orya': 'Ch\u1EEF s\u1ED1 Oriya',
                    'osma': 'Ch\u1EEF s\u1ED1 Osmanya',
                    'roman': 'Ch\u1EEF s\u1ED1 La m\u00E3',
                    'romanlow': 'Ch\u1EEF s\u1ED1 La M\u00E3 vi\u1EBFt th\u01B0\u1EDDng',
                    'saur': 'Ch\u1EEF s\u1ED1 Saurashtra',
                    'shrd': 'Ch\u1EEF s\u1ED1 Sharada',
                    'sora': 'Ch\u1EEF s\u1ED1 Sora Sompeng',
                    'sund': 'Ch\u1EEF s\u1ED1 Sudan',
                    'vaii': 'Ch\u1EEF s\u1ED1 Vai',
                    'tibt': 'Ch\u1EEF s\u1ED1 T\u00E2y T\u1EA1ng',
                    'thai': 'Ch\u1EEF s\u1ED1 Th\u00E1i',
                    'telu': 'Ch\u1EEF s\u1ED1 Telugu',
                    'tamldec': 'Ch\u1EEF s\u1ED1 Tamil',
                    'taml': 'Ch\u1EEF s\u1ED1 Tamil',
                    'talu': 'Ch\u1EEF s\u1ED1 Th\u00E1i L\u1EB7c m\u1EDBi',
                    'takr': 'Ch\u1EEF s\u1ED1 Takri',
                    'olck': 'Ch\u1EEF s\u1ED1 Ol Chiki',
                    'nkoo': 'Ch\u1EEF s\u1ED1 N\'Ko',
                    'mymrshan': 'Ch\u1EEF s\u1ED1 Myanmar Shan',
                    'mymr': 'Ch\u1EEF s\u1ED1 Myanma',
                    'mtei': 'Ch\u1EEF s\u1ED1 Meetei Mayek',
                    'mong': 'Ch\u1EEF s\u1ED1 M\u00F4ng C\u1ED5',
                    'mlym': 'Ch\u1EEF s\u1ED1 Malayalam',
                    'limb': 'Ch\u1EEF s\u1ED1 Limbu',
                    'lepc': 'Ch\u1EEF s\u1ED1 Lepcha',
                    'latn': 'Ch\u1EEF s\u1ED1 ph\u01B0\u01A1ng T\u00E2y',
                    'laoo': 'Ch\u1EEF s\u1ED1 L\u00E0o',
                    'lanatham': 'Ch\u1EEF s\u1ED1 Tham Th\u00E1i \u0110am',
                    'lana': 'Ch\u1EEF s\u1ED1 Hora Th\u00E1i \u0110am',
                    'geor': 'Ch\u1EEF s\u1ED1 Gruzia',
                    'fullwide': 'Ch\u1EEF s\u1ED1 c\u00F3 \u0111\u1ED9 r\u1ED9ng \u0111\u1EA7y \u0111\u1EE7',
                    'ethi': 'Ch\u1EEF s\u1ED1 Ethiopia'
                },
                'colAlternate': {
                    'non-ignorable': 'S\u1EAFp x\u1EBFp bi\u1EC3u t\u01B0\u1EE3ng',
                    'shifted': 'S\u1EAFp x\u1EBFp bi\u1EC3u t\u01B0\u1EE3ng b\u1ECF qua'
                },
                'colBackwards': {
                    'no': 'S\u1EAFp x\u1EBFp d\u1EA5u tr\u1ECDng \u00E2m b\u00ECnh th\u01B0\u1EDDng',
                    'yes': 'S\u1EAFp x\u1EBFp d\u1EA5u tr\u1ECDng \u00E2m \u0111\u1EA3o ng\u01B0\u1EE3c'
                }
            },
            'keys': {
                'colNormalization': 'S\u1EAFp x\u1EBFp theo chu\u1EA9n h\u00F3a',
                'collation': 'Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp',
                'colHiraganaQuaternary': 'S\u1EAFp x\u1EBFp ch\u1EEF Kana',
                'colCaseLevel': 'S\u1EAFp x\u1EBFp ph\u00E2n bi\u1EC7t ch\u1EEF hoa/ch\u1EEF th\u01B0\u1EDDng',
                'colCaseFirst': 'S\u1EAFp x\u1EBFp ch\u1EEF hoa/ch\u1EEF th\u01B0\u1EDDng',
                'colBackwards': 'S\u1EAFp x\u1EBFp d\u1EA5u tr\u1ECDng \u00E2m \u0111\u1EA3o ng\u01B0\u1EE3c',
                'colAlternate': 'B\u1ECF qua s\u1EAFp x\u1EBFp bi\u1EC3u t\u01B0\u1EE3ng',
                'calendar': 'L\u1ECBch',
                'x': 'S\u1EED d\u1EE5ng c\u00E1 nh\u00E2n',
                'variableTop': 'S\u1EAFp x\u1EBFp d\u01B0\u1EDBi d\u1EA1ng bi\u1EC3u t\u01B0\u1EE3ng',
                'va': 'Bi\u1EBFn th\u1EC3 ng\u00F4n ng\u1EEF',
                'timezone': 'M\u00FAi gi\u1EDD',
                'numbers': 'S\u1ED1',
                'currency': 'Ti\u1EC1n t\u1EC7',
                'colStrength': 'C\u01B0\u1EDDng \u0111\u1ED9 s\u1EAFp x\u1EBFp',
                'colNumeric': 'S\u1EAFp x\u1EBFp theo s\u1ED1'
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
                            'exemplarCity': 'Saipan'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'Rarotonga'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'Port Moresby'
                        },
                        'Ponape': {
                            'exemplarCity': 'Pohnpei'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Pitcairn'
                        },
                        'Palau': {
                            'exemplarCity': 'Palau'
                        },
                        'Auckland': {
                            'exemplarCity': 'Auckland'
                        },
                        'Apia': {
                            'exemplarCity': 'Apia'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Funafuti'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Galapagos'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambier'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'Guadalcanal'
                        },
                        'Guam': {
                            'exemplarCity': 'Guam'
                        },
                        'Honolulu': {
                            'exemplarCity': 'Honolulu'
                        },
                        'Wallis': {
                            'exemplarCity': 'Wallis'
                        },
                        'Wake': {
                            'exemplarCity': 'Wake'
                        },
                        'Truk': {
                            'exemplarCity': 'Chuuk'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'Tongatapu'
                        },
                        'Tarawa': {
                            'exemplarCity': 'Tarawa'
                        },
                        'Tahiti': {
                            'exemplarCity': 'Tahiti'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Kiritimati'
                        },
                        'Johnston': {
                            'exemplarCity': 'Johnston'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham'
                        },
                        'Easter': {
                            'exemplarCity': 'Easter'
                        },
                        'Efate': {
                            'exemplarCity': 'Efate'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Enderbury'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Fakaofo'
                        },
                        'Fiji': {
                            'exemplarCity': 'Fiji'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Kosrae'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Kwajalein'
                        },
                        'Majuro': {
                            'exemplarCity': 'Majuro'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Marquesas'
                        },
                        'Midway': {
                            'exemplarCity': 'Midway'
                        },
                        'Nauru': {
                            'exemplarCity': 'Nauru'
                        },
                        'Niue': {
                            'exemplarCity': 'Niue'
                        },
                        'Norfolk': {
                            'exemplarCity': 'Norfolk'
                        },
                        'Noumea': {
                            'exemplarCity': 'Noumea'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'Pago Pago'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'Lindeman'
                        },
                        'Hobart': {
                            'exemplarCity': 'Hobart'
                        },
                        'Eucla': {
                            'exemplarCity': 'Eucla'
                        },
                        'Darwin': {
                            'exemplarCity': 'Darwin'
                        },
                        'Sydney': {
                            'exemplarCity': 'Sydney'
                        },
                        'Perth': {
                            'exemplarCity': 'Perth'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Melbourne'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Lord Howe'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Adelaide'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Brisbane'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Broken Hill'
                        },
                        'Currie': {
                            'exemplarCity': 'Currie'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Maldives'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reunion'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauritius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Christmas'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Comoro'
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
                            'exemplarCity': 'Th\u00E0nh ph\u1ED1 Kh\u00F4ng x\u00E1c \u0111\u1ECBnh'
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
                            'exemplarCity': 'Rothera'
                        },
                        'Palmer': {
                            'exemplarCity': 'Palmer'
                        },
                        'McMurdo': {
                            'exemplarCity': 'McMurdo'
                        },
                        'Vostok': {
                            'exemplarCity': 'Vostok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'South Pole'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d\u2019Urville'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Macquarie'
                        },
                        'Mawson': {
                            'exemplarCity': 'Mawson'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Longyearbyen'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'Toronto'
                        },
                        'Tijuana': {
                            'exemplarCity': 'Tijuana'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'Thunder Bay'
                        },
                        'Thule': {
                            'exemplarCity': 'Thule'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Tegucigalpa'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Swift Current'
                        },
                        'Chicago': {
                            'exemplarCity': 'Chicago'
                        },
                        'Cayman': {
                            'exemplarCity': 'Cayman'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Cayenne'
                        },
                        'Catamarca': {
                            'exemplarCity': 'Catamarca'
                        },
                        'Caracas': {
                            'exemplarCity': 'Caracas'
                        },
                        'Cancun': {
                            'exemplarCity': 'Cancun'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'Campo Grande'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Cambridge Bay'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Buenos Aires'
                        },
                        'Boise': {
                            'exemplarCity': 'Boise'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Asuncion'
                        },
                        'Aruba': {
                            'exemplarCity': 'Aruba'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Rio Gallegos'
                            },
                            'San_Juan': {
                                'exemplarCity': 'San Juan'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ushuaia'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'La Rioja'
                            },
                            'San_Luis': {
                                'exemplarCity': 'San Luis'
                            },
                            'Salta': {
                                'exemplarCity': 'Salta'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Tucuman'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Araguaina'
                        },
                        'Antigua': {
                            'exemplarCity': 'Antigua'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Anguilla'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Anchorage'
                        },
                        'Adak': {
                            'exemplarCity': 'Adak'
                        },
                        'Bahia': {
                            'exemplarCity': 'Bahia'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bahia Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Belem'
                        },
                        'Belize': {
                            'exemplarCity': 'Belize'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Blanc-Sablon'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Boa Vista'
                        },
                        'Bogota': {
                            'exemplarCity': 'Bogota'
                        },
                        'Curacao': {
                            'exemplarCity': 'Cura\u00E7ao'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'Danmarkshavn'
                        },
                        'Dawson': {
                            'exemplarCity': 'Dawson'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'Dawson Creek'
                        },
                        'Denver': {
                            'exemplarCity': 'Denver'
                        },
                        'Detroit': {
                            'exemplarCity': 'Detroit'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Hermosillo'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Vincennes, Indiana'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Petersburg, Indiana'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Tell City, Indiana'
                            },
                            'Knox': {
                                'exemplarCity': 'Knox, Indiana'
                            },
                            'Winamac': {
                                'exemplarCity': 'Winamac, Indiana'
                            },
                            'Marengo': {
                                'exemplarCity': 'Marengo, Indiana'
                            },
                            'Vevay': {
                                'exemplarCity': 'Vevay, Indiana'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Indianapolis'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Inuvik'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Iqaluit'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Jamaica'
                        },
                        'Jujuy': {
                            'exemplarCity': 'Jujuy'
                        },
                        'Juneau': {
                            'exemplarCity': 'Juneau'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'Yellowknife'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Yakutat'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Winnipeg'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Whitehorse'
                        },
                        'Vancouver': {
                            'exemplarCity': 'Vancouver'
                        },
                        'Tortola': {
                            'exemplarCity': 'Tortola'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'Kralendijk'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'Monticello, Kentucky'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Havana'
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Guyana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Guatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Guadeloupe'
                        },
                        'Grenada': {
                            'exemplarCity': 'Grenada'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'Grand Turk'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Goose Bay'
                        },
                        'Godthab': {
                            'exemplarCity': 'Nuuk'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'Glace Bay'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'Fortaleza'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'El Salvador'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Eirunepe'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Edmonton'
                        },
                        'Dominica': {
                            'exemplarCity': 'Dominica'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Chihuahua'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Atikokan'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Cordoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiaba'
                        },
                        'La_Paz': {
                            'exemplarCity': 'La Paz'
                        },
                        'Lima': {
                            'exemplarCity': 'Lima'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Los Angeles'
                        },
                        'Louisville': {
                            'exemplarCity': 'Louisville'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Lower Prince\'s Quarter'
                        },
                        'Maceio': {
                            'exemplarCity': 'Maceio'
                        },
                        'Managua': {
                            'exemplarCity': 'Managua'
                        },
                        'Manaus': {
                            'exemplarCity': 'Manaus'
                        },
                        'Marigot': {
                            'exemplarCity': 'Marigot'
                        },
                        'Martinique': {
                            'exemplarCity': 'Martinique'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Matamoros'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Mazatlan'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'Merida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Mexico City'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Miquelon'
                        },
                        'Moncton': {
                            'exemplarCity': 'Moncton'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Monterrey'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Montevideo'
                        },
                        'Montreal': {
                            'exemplarCity': 'Montreal'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Montserrat'
                        },
                        'Nassau': {
                            'exemplarCity': 'Nassau'
                        },
                        'New_York': {
                            'exemplarCity': 'New York'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Nipigon'
                        },
                        'Nome': {
                            'exemplarCity': 'Nome'
                        },
                        'Noronha': {
                            'exemplarCity': 'Noronha'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Beulah, B\u1EAFc Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, B\u1EAFc Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, B\u1EAFc Dakota'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Ojinaga'
                        },
                        'Panama': {
                            'exemplarCity': 'Panama'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Pangnirtung'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Paramaribo'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Phoenix'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Port-au-Prince'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Port of Spain'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Porto Velho'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Puerto Rico'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Rainy River'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Rankin Inlet'
                        },
                        'Recife': {
                            'exemplarCity': 'Recife'
                        },
                        'Regina': {
                            'exemplarCity': 'Regina'
                        },
                        'Resolute': {
                            'exemplarCity': 'Resolute'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Rio Branco'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Santa Isabel'
                        },
                        'Santarem': {
                            'exemplarCity': 'Santarem'
                        },
                        'Santiago': {
                            'exemplarCity': 'Santiago'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'Sao Paulo'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Ittoqqortoormiit'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Shiprock'
                        },
                        'Sitka': {
                            'exemplarCity': 'Sitka'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'Saint Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'St. Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'St. Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'St. Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Nam Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'St. Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Canary'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cape Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faroe'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madeira'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'M\u00E1t-xc\u01A1-va'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monaco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Mariehamn'
                        },
                        'Malta': {
                            'exemplarCity': 'Malta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madrid'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxembourg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Anh'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisbon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kaliningrad'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Istanbul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u0110\u1EA3o Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucharest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brussels'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrade'
                        },
                        'Athens': {
                            'exemplarCity': 'Athens'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amsterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sofia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirane'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Uzhgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zurich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporozhye'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Warsaw'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Vienna'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatican'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'Rome'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Praha'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Paris'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Ai-len'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhagen'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapest'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Libreville'
                        },
                        'Lagos': {
                            'exemplarCity': 'Lagos'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Kinshasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Khartoum'
                        },
                        'Kampala': {
                            'exemplarCity': 'Kampala'
                        },
                        'Juba': {
                            'exemplarCity': 'Juba'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Johannesburg'
                        },
                        'Harare': {
                            'exemplarCity': 'Harare'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Gaborone'
                        },
                        'Freetown': {
                            'exemplarCity': 'Freetown'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'El Aaiun'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Djibouti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es Salaam'
                        },
                        'Dakar': {
                            'exemplarCity': 'Dakar'
                        },
                        'Banjul': {
                            'exemplarCity': 'Banjul'
                        },
                        'Bangui': {
                            'exemplarCity': 'Bangui'
                        },
                        'Bamako': {
                            'exemplarCity': 'Bamako'
                        },
                        'Asmera': {
                            'exemplarCity': 'Asmara'
                        },
                        'Malabo': {
                            'exemplarCity': 'Malabo'
                        },
                        'Maputo': {
                            'exemplarCity': 'Maputo'
                        },
                        'Maseru': {
                            'exemplarCity': 'Maseru'
                        },
                        'Mbabane': {
                            'exemplarCity': 'Mbabane'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'Mogadishu'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ndjamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'Tunis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Tripoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'S\u00E3o Tom\u00E9'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto-Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Ouagadougou'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nouakchott'
                        },
                        'Niamey': {
                            'exemplarCity': 'Niamey'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Lusaka'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Lubumbashi'
                        },
                        'Luanda': {
                            'exemplarCity': 'Luanda'
                        },
                        'Lome': {
                            'exemplarCity': 'Lome'
                        },
                        'Conakry': {
                            'exemplarCity': 'Conakry'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Ceuta'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Casablanca'
                        },
                        'Cairo': {
                            'exemplarCity': 'Cairo'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Bujumbura'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Brazzaville'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Blantyre'
                        },
                        'Bissau': {
                            'exemplarCity': 'Bissau'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Abidjan'
                        },
                        'Accra': {
                            'exemplarCity': 'Accra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Ababa'
                        },
                        'Algiers': {
                            'exemplarCity': 'Algiers'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Th\u01B0\u1EE3ng H\u1EA3i'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seoul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sakhalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'TP H\u1ED3 Ch\u00ED Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyadh'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'B\u00ECnh Nh\u01B0\u1EE1ng'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom Penh'
                        },
                        'Oral': {
                            'exemplarCity': 'Oral'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novosibirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Baghdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Tr\u00F9ng Kh\u00E1nh'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damascus'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dhaka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Dushanbe'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'C\u00E1p Nh\u0129 T\u00E2n'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebron'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'H\u1ED3ng K\u00F4ng'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulaanbaatar'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u00D4 L\u1ED7 M\u1ED9c T\u1EC1'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vi\u00EAng Ch\u0103n'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Yakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Yekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Yerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokyo'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Tehran'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': '\u0110\u00E0i B\u1EAFc'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapore'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ashgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqtobe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqtau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
                        },
                        'Aden': {
                            'exemplarCity': 'Aden'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahrain'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beirut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bishkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamchatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kh\u00E1ch Th\u1EADp'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Kathmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoyarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuwait'
                        },
                        'Macau': {
                            'exemplarCity': 'Ma Cao'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makassar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Muscat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nicosia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Gi\u1EDD Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Gi\u1EDD Samoa',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Samoa',
                            'daylight': 'Gi\u1EDD ban ng\u00E0y Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Gi\u1EDD Samara',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Samara',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Gi\u1EDD Sakhalin',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Sakhalin',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Sakhalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Gi\u1EDD Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Gi\u1EDD Reunion'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Gi\u1EDD Qyzylorda',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Qyzylorda',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Gi\u1EDD Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Gi\u1EDD Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Gi\u1EDD Saint Pierre v\u00E0 Miquelon',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Saint Pierre v\u00E0 Miquelon',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Saint Pierre v\u00E0 Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Gi\u1EDD Philippin',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Philippin',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Philippin'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Gi\u1EDD Peru',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Peru',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Gi\u1EDD Paraguay',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Paraguay',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Gi\u1EDD Papua New Guinea'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Gi\u1EDD Palau'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Gi\u1EDD Pakistan',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Pakistan',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Pakistan'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Gi\u1EDD Omsk',
                            'standard': 'Gi\u1EDD chu\u1EA9n Omsk',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Gi\u1EDD Novosibirsk',
                            'standard': 'Gi\u1EDD chu\u1EA9n Novosibirsk',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o B\u1EAFc Mariana'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Gi\u1EDD Fernando de Noronha',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Fernando de Noronha',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0111\u1EA3o Norfolk'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Gi\u1EDD Niue'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Gi\u1EDD Newfoundland',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Newfoundland',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Newfoundland'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Gi\u1EDD Amazon',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Amazon',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Amazon'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Gi\u1EDD mi\u1EC1n trung',
                            'standard': 'Gi\u1EDD chu\u1EA9n mi\u1EC1n trung',
                            'daylight': 'Gi\u1EDD ban ng\u00E0y mi\u1EC1n trung'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Gi\u1EDD mi\u1EC1n \u0111\u00F4ng',
                            'standard': 'Gi\u1EDD chu\u1EA9n mi\u1EC1n \u0111\u00F4ng',
                            'daylight': 'Gi\u1EDD ban ng\u00E0y mi\u1EC1n \u0111\u00F4ng'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Gi\u1EDD mi\u1EC1n n\u00FAi',
                            'standard': 'Gi\u1EDD chu\u1EA9n mi\u1EC1n n\u00FAi',
                            'daylight': 'Gi\u1EDD ban ng\u00E0y mi\u1EC1n n\u00FAi'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Gi\u1EDD Th\u00E1i B\u00ECnh D\u01B0\u01A1ng',
                            'standard': 'Gi\u1EDD chu\u1EA9n Th\u00E1i B\u00ECnh D\u01B0\u01A1ng',
                            'daylight': 'Gi\u1EDD ban ng\u00E0y Th\u00E1i B\u00ECnh D\u01B0\u01A1ng'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Gi\u1EDD Anadyr',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Anadyr',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Gi\u1EDD Aqtau',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Aqtau',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Gi\u1EDD Aqtobe',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Aqtobe',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Gi\u1EDD Cape Verde',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Cape Verde',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Cape Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Gi\u1EDD Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Gi\u1EDD Chatham',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Chatham',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Gi\u1EDD Chile',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Chile',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Gi\u1EDD Trung Qu\u1ED1c',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Trung Qu\u1ED1c',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Trung Qu\u1ED1c'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Gi\u1EDD Choibalsan',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Choibalsan',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0110\u1EA3o Christmas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Gi\u1EDD Colombia',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Colombia',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Colombia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Cook',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Qu\u1EA7n \u0110\u1EA3o Cook',
                            'daylight': 'Gi\u1EDD N\u1EEDa M\u00F9a H\u00E8 Qu\u1EA7n \u0110\u1EA3o Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Gi\u1EDD Cuba',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Cuba',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Gi\u1EDD Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Gi\u1EDD Dumont-d\u2019Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0110\u00F4ng Timor'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Gi\u1EDD \u0110\u1EA3o Ph\u1EE5c Sinh',
                            'standard': 'Gi\u1EDD Chu\u1EA9n \u0110\u1EA3o Ph\u1EE5c Sinh',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 \u0110\u1EA3o Ph\u1EE5c Sinh'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Gi\u1EDD Ecuador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Gi\u1EDD Trung \u00C2u',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Trung \u00C2u',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Trung \u00C2u'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Gi\u1EDD \u0110\u00F4ng \u00C2u',
                            'standard': 'Gi\u1EDD Chu\u1EA9n \u0110\u00F4ng \u00C2u',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 \u0110\u00F4ng \u00C2u'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Gi\u1EDD T\u00E2y \u00C2u',
                            'standard': 'Gi\u1EDD Chu\u1EA9n T\u00E2y \u00C2u',
                            'daylight': 'Gi\u1EDD M\u00F9a h\u00E8 T\u00E2y \u00C2u'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Falkland',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Qu\u1EA7n \u0110\u1EA3o Falkland',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Qu\u1EA7n \u0110\u1EA3o Falkland'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Gi\u1EDD Fiji',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Fiji',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Fiji'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Gi\u1EDD Guiana thu\u1ED9c Ph\u00E1p'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Gi\u1EDD Nam C\u1EF1c v\u00E0 Nam N\u01B0\u1EDBc Ph\u00E1p'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Gi\u1EDD Galapagos'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Gi\u1EDD Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Gi\u1EDD Tonga',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Tonga',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Gi\u1EDD Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Gi\u1EDD Turkmenistan',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Turkmenistan',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Turkmenistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Gi\u1EDD Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Gi\u1EDD Uruguay',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Uruguay',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Uruguay'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Gi\u1EDD Uzbekistan',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Uzbekistan',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Uzbekistan'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Gi\u1EDD Vanuatu',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Vanuatu',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Gi\u1EDD Yekaterinburg',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Yekaterinburg',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Yekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Gi\u1EDD Yakutsk',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Yakutsk',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Gi\u1EDD Wallis v\u00E0 Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0110\u1EA3o Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Gi\u1EDD Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Gi\u1EDD Volgograd',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Volgograd',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Gi\u1EDD Vladivostok',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Vladivostok',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Gi\u1EDD Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Gi\u1EDD Tajikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Gi\u1EDD \u0110\u00E0i B\u1EAFc',
                            'standard': 'Gi\u1EDD Chu\u1EA9n \u0110\u00E0i B\u1EAFc',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 \u0110\u00E0i B\u1EAFc'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Gi\u1EDD Tahiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Gi\u1EDD Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Gi\u1EDD Suriname'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Gi\u1EDD Nam Georgia'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Solomon'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Gi\u1EDD Singapore'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Gi\u1EDD Chu\u1EA9n V\u00F9ng V\u1ECBnh'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Gi\u1EDD Chu\u1EA9n Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Gi\u1EDD Mi\u1EC1n T\u00E2y Greenland',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mi\u1EC1n T\u00E2y Greenland',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mi\u1EC1n T\u00E2y Greenland'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Gi\u1EDD Mi\u1EC1n \u0110\u00F4ng Greenland',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mi\u1EC1n \u0110\u00F4ng Greenland',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mi\u1EC1n \u0110\u00F4ng Greenland'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Gi\u1EDD Trung b\u00ECnh Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gi\u1EDD Georgia',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Georgia',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Georgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gi\u1EDD Gambier'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Gi\u1EDD Acre',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Acre',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Acre'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Gi\u1EDD Afghanistan'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Gi\u1EDD Trung Phi'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0110\u00F4ng Phi'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Gi\u1EDD Chu\u1EA9n Nam Phi'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Gi\u1EDD T\u00E2y Phi',
                            'standard': 'Gi\u1EDD Chu\u1EA9n T\u00E2y Phi',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 T\u00E2y Phi'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Gi\u1EDD Alaska',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Alaska',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Alaska'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Gi\u1EDD Almaty',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Almaty',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Gi\u1EDD \u1EA2 R\u1EADp',
                            'standard': 'Gi\u1EDD chu\u1EA9n \u1EA2 R\u1EADp',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 \u1EA2 R\u1EADp'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Gi\u1EDD Argentina',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Argentina',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Gi\u1EDD mi\u1EC1n t\u00E2y Argentina',
                            'standard': 'Gi\u1EDD chu\u1EA9n mi\u1EC1n m\u00E2y Argentina',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 mi\u1EC1n t\u00E2y Argentina'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Gi\u1EDD Armenia',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Armenia',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Armenia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Gi\u1EDD \u0110\u1EA1i T\u00E2y D\u01B0\u01A1ng',
                            'standard': 'Gi\u1EDD Chu\u1EA9n \u0110\u1EA1i T\u00E2y D\u01B0\u01A1ng',
                            'daylight': 'Gi\u1EDD M\u00F9a h\u00E8 \u0110\u1EA1i T\u00E2y D\u01B0\u01A1ng'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Gi\u1EDD Mi\u1EC1n Trung N\u01B0\u1EDBc \u00DAc',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mi\u1EC1n Trung N\u01B0\u1EDBc \u00DAc',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mi\u1EC1n Trung N\u01B0\u1EDBc \u00DAc'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Gi\u1EDD Mi\u1EC1n Trung T\u00E2y N\u01B0\u1EDBc \u00DAc',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mi\u1EC1n Trung T\u00E2y N\u01B0\u1EDBc \u00DAc',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mi\u1EC1n Trung T\u00E2y N\u01B0\u1EDBc \u00DAc'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Gi\u1EDD Mi\u1EC1n \u0110\u00F4ng N\u01B0\u1EDBc \u00DAc',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mi\u1EC1n \u0110\u00F4ng N\u01B0\u1EDBc \u00DAc',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mi\u1EC1n \u0110\u00F4ng N\u01B0\u1EDBc \u00DAc'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Gi\u1EDD Mi\u1EC1n T\u00E2y N\u01B0\u1EDBc \u00DAc',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mi\u1EC1n T\u00E2y N\u01B0\u1EDBc \u00DAc',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mi\u1EC1n T\u00E2y N\u01B0\u1EDBc \u00DAc'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Gi\u1EDD Azerbaijan',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Azerbaijan',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Azerbaijan'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Gi\u1EDD Azores',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Azores',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Azores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Gi\u1EDD Bangladesh',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Bangladesh',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Gi\u1EDD Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Gi\u1EDD Bolivia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Gi\u1EDD Brasilia',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Brasilia',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Gi\u1EDD Brunei Darussalam'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Gi\u1EDD Guyana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Gi\u1EDD Hawaii-Aleutian',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Hawaii-Aleutian',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Hawaii-Aleutian'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Gi\u1EDD H\u1ED3ng K\u00F4ng',
                            'standard': 'Gi\u1EDD Chu\u1EA9n H\u1ED3ng K\u00F4ng',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 H\u1ED3ng K\u00F4ng'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Gi\u1EDD Hovd',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Hovd',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Gi\u1EDD Chu\u1EA9n \u1EA4n \u0110\u1ED9'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Gi\u1EDD \u1EA4n \u0110\u1ED9 D\u01B0\u01A1ng'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0110\u00F4ng D\u01B0\u01A1ng'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Gi\u1EDD Mi\u1EC1n Trung Indonesia'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Gi\u1EDD Mi\u1EC1n \u0110\u00F4ng Indonesia'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Gi\u1EDD Mi\u1EC1n T\u00E2y Indonesia'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Gi\u1EDD Iran',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Iran',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Iran'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Gi\u1EDD Irkutsk',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Irkutsk',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Gi\u1EDD Israel',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Israel',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Gi\u1EDD Nh\u1EADt B\u1EA3n',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Nh\u1EADt B\u1EA3n',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Nh\u1EADt B\u1EA3n'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Gi\u1EDD Petropavlovsk-Kamchatski',
                            'standard': 'Gi\u1EDD chu\u1EA9n Petropavlovsk-Kamchatski',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Gi\u1EDD Mi\u1EC1n \u0110\u00F4ng Kazakhstan'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Gi\u1EDD Mi\u1EC1n T\u00E2y Kazakhstan'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Gi\u1EDD H\u00E0n Qu\u1ED1c',
                            'standard': 'Gi\u1EDD Chu\u1EA9n H\u00E0n Qu\u1ED1c',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 H\u00E0n Qu\u1ED1c'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Gi\u1EDD Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Gi\u1EDD Krasnoyarsk',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Krasnoyarsk',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Gi\u1EDD Kyrgystan'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Gi\u1EDD Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Gi\u1EDD Lord Howe',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Lord Howe',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Gi\u1EDD Ma Cao',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Ma Cao',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Ma Cao'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Gi\u1EDD \u0111\u1EA3o Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Gi\u1EDD Magadan',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Magadan',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Gi\u1EDD Malaysia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Gi\u1EDD Maldives'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Gi\u1EDD Marquesas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Gi\u1EDD Qu\u1EA7n \u0110\u1EA3o Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Gi\u1EDD Mauritius',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Mauritius',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Mauritius'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Gi\u1EDD Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Gi\u1EDD Ulan Bator',
                            'standard': 'Gi\u1EDD chu\u1EA9n Ulan Bator',
                            'daylight': 'Gi\u1EDD m\u00F9a h\u00E8 Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Gi\u1EDD Matxc\u01A1va',
                            'standard': 'Gi\u1EDD Chu\u1EA9n Matxc\u01A1va',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 Matxc\u01A1va'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Gi\u1EDD Myanmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Gi\u1EDD Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Gi\u1EDD Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Gi\u1EDD New Caledonia',
                            'standard': 'Gi\u1EDD Chu\u1EA9n New Caledonia',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 New Caledonia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Gi\u1EDD New Zealand',
                            'standard': 'Gi\u1EDD Chu\u1EA9n New Zealand',
                            'daylight': 'Gi\u1EDD M\u00F9a H\u00E8 New Zealand'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Gi\u1EDD {0}',
                'regionFormat-type-daylight': 'Gi\u1EDD ban ng\u00E0y {0}',
                'regionFormat-type-standard': 'Gi\u1EDD chu\u1EA9n {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'thg 8',
                                '7': 'thg 7',
                                '6': 'thg 6',
                                '5': 'thg 5',
                                '12': 'thg 12',
                                '11': 'thg 11',
                                '10': 'thg 10',
                                '9': 'thg 9',
                                '1': 'thg 1',
                                '2': 'thg 2',
                                '3': 'thg 3',
                                '4': 'thg 4'
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
                                '8': 'th\u00E1ng 8',
                                '7': 'th\u00E1ng 7',
                                '6': 'th\u00E1ng 6',
                                '5': 'th\u00E1ng 5',
                                '12': 'th\u00E1ng 12',
                                '11': 'th\u00E1ng 11',
                                '10': 'th\u00E1ng 10',
                                '9': 'th\u00E1ng 9',
                                '1': 'th\u00E1ng 1',
                                '2': 'th\u00E1ng 2',
                                '3': 'th\u00E1ng 3',
                                '4': 'th\u00E1ng 4'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Thg 8',
                                '7': 'Thg 7',
                                '6': 'Thg 6',
                                '5': 'Thg 5',
                                '12': 'Thg 12',
                                '11': 'Thg 11',
                                '10': 'Thg 10',
                                '9': 'Thg 9',
                                '1': 'Thg 1',
                                '2': 'Thg 2',
                                '3': 'Thg 3',
                                '4': 'Thg 4'
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
                                '8': 'Th\u00E1ng 8',
                                '7': 'Th\u00E1ng 7',
                                '6': 'Th\u00E1ng 6',
                                '5': 'Th\u00E1ng 5',
                                '12': 'Th\u00E1ng 12',
                                '11': 'Th\u00E1ng 11',
                                '10': 'Th\u00E1ng 10',
                                '9': 'Th\u00E1ng 9',
                                '1': 'Th\u00E1ng 1',
                                '2': 'Th\u00E1ng 2',
                                '3': 'Th\u00E1ng 3',
                                '4': 'Th\u00E1ng 4'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'CN',
                                'mon': 'Th 2',
                                'tue': 'Th 3',
                                'wed': 'Th 4',
                                'thu': 'Th 5',
                                'fri': 'Th 6',
                                'sat': 'Th 7'
                            },
                            'narrow': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'short': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'wide': {
                                'sun': 'Ch\u1EE7 Nh\u1EADt',
                                'mon': 'Th\u1EE9 Hai',
                                'tue': 'Th\u1EE9 Ba',
                                'wed': 'Th\u1EE9 T\u01B0',
                                'thu': 'Th\u1EE9 N\u0103m',
                                'fri': 'Th\u1EE9 S\u00E1u',
                                'sat': 'Th\u1EE9 B\u1EA3y'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'CN',
                                'mon': 'Th 2',
                                'tue': 'Th 3',
                                'wed': 'Th 4',
                                'thu': 'Th 5',
                                'fri': 'Th 6',
                                'sat': 'Th 7'
                            },
                            'narrow': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'short': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'wide': {
                                'sun': 'Ch\u1EE7 Nh\u1EADt',
                                'mon': 'Th\u1EE9 Hai',
                                'tue': 'Th\u1EE9 Ba',
                                'wed': 'Th\u1EE9 T\u01B0',
                                'thu': 'Th\u1EE9 N\u0103m',
                                'fri': 'Th\u1EE9 S\u00E1u',
                                'sat': 'Th\u1EE9 B\u1EA3y'
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
                                '1': 'Qu\u00FD 1',
                                '2': 'Qu\u00FD 2',
                                '3': 'Qu\u00FD 3',
                                '4': 'Qu\u00FD 4'
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
                                '1': 'Qu\u00FD 1',
                                '2': 'Qu\u00FD 2',
                                '3': 'Qu\u00FD 3',
                                '4': 'Qu\u00FD 4'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'narrow': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'wide': {
                                'am': 'SA',
                                'pm': 'CH'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'narrow': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'wide': {
                                'am': 'SA',
                                'pm': 'CH'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'tr. CN',
                            '0-alt-variant': 'BCE',
                            '1': 'sau CN',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'tr. CN',
                            '0-alt-variant': 'BCE',
                            '1': 'sau CN',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'tr. CN',
                            '0-alt-variant': 'BCE',
                            '1': 'sau CN',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, \'ng\u00E0y\' dd MMMM \'n\u0103m\' y',
                        'long': '\'Ng\u00E0y\' dd \'th\u00E1ng\' MM \'n\u0103m\' y',
                        'medium': 'dd-MM-y',
                        'short': 'dd/MM/y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{0} {1}',
                        'long': '{0} {1}',
                        'medium': '{0} {1}',
                        'short': '{0} {1}',
                        'availableFormats': {
                            'yMM': 'MM-y',
                            'yMEd': 'E, dd-M-y',
                            'yMd': 'd/M/y',
                            'yM': 'M/y',
                            'y': '\'N\u0103m\' y',
                            'ms': 'mm:ss',
                            'Ed': 'E, dd',
                            'd': 'd',
                            'GyMMMd': 'dd MMM, y G',
                            'GyMMMEd': 'E, dd MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'H:mm',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, dd MMM y',
                            'yMMMd': 'dd MMM, y',
                            'yMMM': 'MMM y',
                            'Hms': 'H:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': '\'N\u0103m\' y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'dd-M',
                            'MEd': 'E, dd-M',
                            'MMdd': 'dd-MM',
                            'MMM': 'LLL',
                            'MMMd': 'dd MMM',
                            'MMMEd': 'E, dd MMM',
                            'MMMMd': 'dd MMMM',
                            'MMMMEd': 'E, dd MMMM',
                            'mmss': 'mm:ss'
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
                                'd': 'EEEE, \'ng\u00E0y\' dd - EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M',
                                'M': 'EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M - EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M'
                            },
                            'MMMd': {
                                'd': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M',
                                'M': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                'M': 'EEEE, dd/MM - EEEE, dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': '\'Th\u00E1ng\' M - \'Th\u00E1ng\' M'
                            },
                            'Hv': {
                                'H': 'HH\'h\'-HH\'h\' v'
                            },
                            'hv': {
                                'a': 'h\'h\' a - h\'h\' a v',
                                'h': 'h\'h\'-h\'h\' a v'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yM': {
                                'M': 'MM/y - MM/y',
                                'y': 'MM/y - MM/y'
                            },
                            'yMd': {
                                'd': 'dd/MM/y - dd/MM/y',
                                'M': 'dd/MM/y - dd/MM/y',
                                'y': 'dd/MM/y - dd/MM/y'
                            },
                            'yMEd': {
                                'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                            },
                            'yMMM': {
                                'M': '\'Th\u00E1ng\' M - \'Th\u00E1ng\' M \'n\u0103m\' y',
                                'y': '\'Th\u00E1ng\' M \'n\u0103m\' y - \'Th\u00E1ng\' M \'n\u0103m\' y'
                            },
                            'yMMMd': {
                                'd': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y',
                                'M': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y',
                                'y': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y'
                            },
                            'yMMMEd': {
                                'd': 'EEEE, \'ng\u00E0y\' dd MMM - EEEE, \'ng\u00E0y\' dd MMM \'n\u0103m\' y',
                                'M': 'E, dd \'th\u00E1ng\' M - E, dd \'th\u00E1ng\' M, y',
                                'y': 'E, dd \'th\u00E1ng\' M, y - E, dd \'th\u00E1ng\' M, y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a \u2013 h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'HH\'h\' - HH\'h\''
                            },
                            'h': {
                                'a': 'h\'h\' a - h\'h\' a',
                                'h': 'h\'h\' - h\'h\' a'
                            },
                            'd': {
                                'd': '\'Ng\u00E0y\' dd-dd'
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
