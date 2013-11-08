/* AstroDate
 * Language: sk
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
        AstroDate.lang('sk', {
            'codePatterns': {
                'language': 'Jazyk: {0}',
                'script': 'P\u00EDsmo: {0}',
                'territory': 'Regi\u00F3n: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Radi\u0165 slabi\u010Dn\u00E9 p\u00EDsma (kana) samostatne',
                    'yes': 'Radi\u0165 slabi\u010Dn\u00E9 p\u00EDsma (kana) inak'
                },
                'colCaseLevel': {
                    'no': 'Pri raden\u00ED nerozli\u0161ova\u0165 ve\u013Ek\u00E9 a mal\u00E9 p\u00EDsmen\u00E1',
                    'yes': 'Pri raden\u00ED rozli\u0161ova\u0165 ve\u013Ek\u00E9 a mal\u00E9 p\u00EDsmen\u00E1'
                },
                'colCaseFirst': {
                    'lower': 'Najprv radi\u0165 mal\u00E9 p\u00EDsmen\u00E1',
                    'no': 'Norm\u00E1lne radenie ve\u013Ek\u00FDch a mal\u00FDch p\u00EDsmen',
                    'upper': 'Najprv radi\u0165 ve\u013Ek\u00E9 p\u00EDsmen\u00E1'
                },
                'colStrength': {
                    'identical': 'Radi\u0165 v\u0161etko',
                    'primary': 'Radi\u0165 iba z\u00E1kladn\u00E9 p\u00EDsmen\u00E1',
                    'quaternary': 'Radi\u0165 akcenty/ve\u013Ek\u00E9 a mal\u00E9 p\u00EDsmen\u00E1/\u0161\u00EDrku/kana',
                    'secondary': 'Radi\u0165 akcenty',
                    'tertiary': 'Radi\u0165 akcenty/ve\u013Ek\u00E9 a mal\u00E9 p\u00EDsmen\u00E1/\u0161\u00EDrku'
                },
                'colNumeric': {
                    'no': 'Radi\u0165 \u010D\u00EDslice jednotlivo',
                    'yes': 'Numerick\u00E9 radenie \u010D\u00EDslic'
                },
                'colNormalization': {
                    'no': 'Radi\u0165 bez normaliz\u00E1cie',
                    'yes': 'Radenie pod\u013Ea normalizovan\u00E9ho k\u00F3dovania Unicode'
                },
                'calendar': {
                    'japanese': 'Japonsk\u00FD kalend\u00E1r',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptick\u00FD kalend\u00E1r',
                    'dangi': 'dangi',
                    'ethiopic': 'Eti\u00F3psky kalend\u00E1r',
                    'ethiopic-amete-alem': 'Eti\u00F3psky kalend\u00E1r Amete Alem',
                    'gregorian': 'Gregori\u00E1nsky kalend\u00E1r',
                    'hebrew': '\u017Didovsk\u00FD kalend\u00E1r',
                    'persian': 'Perzsk\u00FD kalend\u00E1r',
                    'roc': 'Kalend\u00E1r \u010C\u00EDnskej republiky',
                    'chinese': '\u010C\u00EDnsky kalend\u00E1r',
                    'buddhist': 'Buddhistick\u00FD kalend\u00E1r',
                    'indian': 'Indick\u00FD n\u00E1rodn\u00FD kalend\u00E1r',
                    'islamic': 'Islamsk\u00FD kalend\u00E1r',
                    'islamic-civil': 'Islamsk\u00FD ob\u010Diansky kalend\u00E1r',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Lexikografick\u00E9 triedenie',
                    'gb2312han': 'Zjednodu\u0161en\u00FD \u010D\u00EDnsky GB2312',
                    'eor': 'eor',
                    'ducet': 'Predvolen\u00E9 usporiadanie unicode',
                    'dictionary': 'Usporiadanie slovn\u00EDka',
                    'big5han': 'Tradi\u010Dn\u00FD \u010D\u00EDnsky Big5',
                    'traditional': 'Tradi\u010Dn\u00E9',
                    'standard': '\u0160tandardn\u00E9 poradie',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Usporiadanie pod\u013Ea znakov radik\u00E1l',
                    'stroke': 'Tiedenie pod\u013Ea \u0165ahov',
                    'searchjl': 'H\u013Eada\u0165 pod\u013Ea po\u010Diato\u010Dnej spoluhl\u00E1sky p\u00EDsma Hangul',
                    'search': 'V\u0161eobecn\u00E9 vyh\u013Ead\u00E1vanie',
                    'reformed': 'Reformovan\u00E9 usporiadanie',
                    'pinyin': 'Triedenie pinyin',
                    'phonetic': 'Fonetick\u00E9 radenie'
                },
                'numbers': {
                    'knda': 'Kannadsk\u00E9 \u010D\u00EDslice',
                    'khmr': 'Khm\u00E9rske \u010D\u00EDslice',
                    'kali': 'kali',
                    'jpanfin': 'Japonsk\u00E9 finan\u010Dn\u00E9 \u010D\u00EDslice',
                    'jpan': 'Japonsk\u00E9 \u010D\u00EDslice',
                    'java': 'java',
                    'hebr': 'Hebrejsk\u00E9 \u010D\u00EDslice',
                    'hantfin': 'Finan\u010Dn\u00E9 \u010D\u00EDslice tradi\u010Dnej \u010D\u00EDn\u0161tiny',
                    'hant': '\u010C\u00EDslice tradi\u010Dnej \u010D\u00EDn\u0161tiny',
                    'hansfin': 'Finan\u010Dn\u00E9 \u010D\u00EDslice zjednodu\u0161enej \u010D\u00EDn\u0161tiny',
                    'hans': '\u010C\u00EDslice zjednodu\u0161enej \u010D\u00EDn\u0161tiny',
                    'hanidec': '\u010C\u00EDnske desatinn\u00E9 \u010D\u00EDslice',
                    'guru': '\u010C\u00EDslice Gurmukhi',
                    'gujr': 'Gud\u017Ear\u00E1tske \u010D\u00EDslice',
                    'greklow': 'Gr\u00E9cke \u010D\u00EDslice (mal\u00E9 p\u00EDsmen\u00E1)',
                    'grek': 'Gr\u00E9cke \u010D\u00EDslice',
                    'bali': 'bali',
                    'armnlow': 'Arm\u00E9nske \u010D\u00EDslice (mal\u00E9 p\u00EDsmen\u00E1)',
                    'armn': 'Arm\u00E9nske \u010D\u00EDslice',
                    'arabext': 'Roz\u0161\u00EDren\u00E9 arabsko-indick\u00E9 \u010D\u00EDslice',
                    'arab': 'Arabsko-indick\u00E9 \u010D\u00EDslice',
                    'finance': 'Finan\u010Dn\u00EDcky z\u00E1pis \u010D\u00EDsiel',
                    'traditional': 'Tradi\u010Dn\u00E9 \u010D\u00EDslovky',
                    'native': 'Nat\u00EDvne \u010D\u00EDslice',
                    'beng': 'Beng\u00E1lske \u010D\u00EDslice',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u010C\u00EDslice p\u00EDsma D\u00E9van\u00E1gar\u00ED',
                    'orya': 'Or\u00EDjske \u010D\u00EDslice',
                    'osma': 'osma',
                    'roman': 'R\u00EDmske \u010D\u00EDslice',
                    'romanlow': 'R\u00EDmske \u010D\u00EDslice (mal\u00E9 p\u00EDsmen\u00E1)',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vaisk\u00E9 \u010D\u00EDslice',
                    'tibt': 'Tibetsk\u00E9 \u010D\u00EDslice',
                    'thai': 'Thajsk\u00E9 \u010D\u00EDslice',
                    'telu': 'Telugsk\u00E9 \u010D\u00EDslice',
                    'tamldec': 'Tamilsk\u00E9 \u010D\u00EDslice',
                    'taml': 'Tamilsk\u00E9 \u010D\u00EDslice',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Mjanmarsk\u00E9 \u010D\u00EDslice',
                    'mtei': 'mtei',
                    'mong': 'Mongolsk\u00E9 \u010D\u00EDslice',
                    'mlym': 'Malaj\u00E1mske \u010D\u00EDslice',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Arabsk\u00E9 \u010D\u00EDslice',
                    'laoo': '\u010C\u00EDslice p\u00EDsma lao',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Gruz\u00EDnske \u010D\u00EDslice',
                    'fullwide': '\u010C\u00EDslice s celou \u0161\u00EDrkou',
                    'ethi': 'Eti\u00F3pske \u010D\u00EDslice'
                },
                'colAlternate': {
                    'non-ignorable': 'Radi\u0165 symboly',
                    'shifted': 'Pri raden\u00ED ignorova\u0165 symboly'
                },
                'colBackwards': {
                    'no': 'Norm\u00E1lne radenie akcentov',
                    'yes': 'Radi\u0165 akcenty opa\u010Dne'
                }
            },
            'keys': {
                'colNormalization': 'Normalizovan\u00E9 radenie',
                'collation': 'Triedenie',
                'colHiraganaQuaternary': 'Radenie pod\u013Ea slabi\u010Dn\u00FDch p\u00EDsiem (kana)',
                'colCaseLevel': 'Rozli\u0161ovanie ve\u013Ek\u00FDch a mal\u00FDch p\u00EDsmen pri raden\u00ED',
                'colCaseFirst': 'Radenie ve\u013Ek\u00FDch a mal\u00FDch p\u00EDsmen',
                'colBackwards': 'Obr\u00E1ten\u00E9 radenie akcentov',
                'colAlternate': 'Ignorova\u0165 radenie symbolov',
                'calendar': 'Kalend\u00E1r',
                'x': 'S\u00FAkromn\u00E9 pou\u017Eitie',
                'variableTop': 'Radi\u0165 ako symboly',
                'va': 'Variant miestneho nastavenia',
                'timezone': '\u010Casov\u00E9 p\u00E1smo',
                'numbers': '\u010C\u00EDslice',
                'currency': 'Mena',
                'colStrength': 'Sila radenia',
                'colNumeric': '\u010C\u00EDseln\u00E9 radenie'
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
                            'exemplarCity': 'Galap\u00E1gy'
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
                            'exemplarCity': 'Ve\u013Ekono\u010Dn\u00E9 ostrovy'
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
                            'exemplarCity': 'Fid\u017Ei'
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
                            'exemplarCity': 'Maldivy'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'R\u00E9union'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Maur\u00EDcius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Viano\u010Dn\u00FD ostrov'
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
                            'exemplarCity': 'Nezn\u00E1me mesto'
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
                            'exemplarCity': 'Ju\u017En\u00FD p\u00F3l'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': "Dumont D'Urville"
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
                            'exemplarCity': 'Asunci\u00F3n'
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
                            'exemplarCity': 'Alja\u0161ka'
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
                            'exemplarCity': 'Curacao'
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
                            'exemplarCity': 'Jamajka'
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
                            'exemplarCity': 'Salv\u00E1dor'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Eirunepe'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Edmonton'
                        },
                        'Dominica': {
                            'exemplarCity': 'Dominika'
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
                            'exemplarCity': 'Kostarika'
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
                            'exemplarCity': "Lower Prince's Quarter"
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
                            'exemplarCity': 'Martinik'
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
                                'exemplarCity': 'Beulah, Severn\u00E1 Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Severn\u00E1 Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Severn\u00E1 Dakota'
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
                            'exemplarCity': 'Portoriko'
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
                            'exemplarCity': 'Sv\u00E4t\u00FD Bartolomej'
                        },
                        'St_Johns': {
                            'exemplarCity': 'Sv. J\u00E1n'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Sv\u00E4t\u00E1 Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Sv. Tom\u00E1\u0161'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Sv. Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Ju\u017En\u00E1 Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sv. Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorsk\u00E9 ostrovy'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudy'
                        },
                        'Canary': {
                            'exemplarCity': 'Kan\u00E1rske ostrovy'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kapverdy'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faersk\u00E9 ostrovy'
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
                            'exemplarCity': 'Moskva'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monako'
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
                            'exemplarCity': 'Luxembursko'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Britsk\u00FD letn\u00FD \u010Das'
                            },
                            'exemplarCity': 'Lond\u00FDn'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u013Dub\u013Eana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kyjev'
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
                            'exemplarCity': 'Ostrov Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukure\u0161\u0165'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brusel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berl\u00EDn'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belehrad'
                        },
                        'Athens': {
                            'exemplarCity': 'At\u00E9ny'
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
                            'exemplarCity': '\u0160tokholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'U\u017Ehorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Z\u00E1poro\u017Eie'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Z\u00E1hreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Var\u0161ava'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viede\u0148'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatik\u00E1n'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Mar\u00EDno'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'R\u00EDm'
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
                            'exemplarCity': 'Par\u00ED\u017E'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibralt\u00E1r'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u00CDrsky letn\u00FD \u010Das'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Koda\u0148'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Ki\u0161i\u0148ov'
                        },
                        'Busingen': {
                            'exemplarCity': 'B\u00FCsingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budape\u0161\u0165'
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
                            'exemplarCity': 'Chart\u00FAm'
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
                            'exemplarCity': 'D\u017Eibutsko'
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
                            'exemplarCity': 'Mogadi\u0161o'
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
                            'exemplarCity': 'Tripolis'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Sv\u00E4t\u00FD Tom\u00E1\u0161'
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
                            'exemplarCity': 'K\u00E1hira'
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
                            'exemplarCity': 'Al\u017E\u00EDr'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0160anghaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Soul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sachalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho\u010Diminovo Mesto'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyadh'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rang\u00FAn'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pchjongjang'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom P\u00E9nh'
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
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Kolombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damask'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dh\u00E1ka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubaj'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Du\u0161anbe'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebron'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hongkong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkutsko'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulanb\u00E1tar'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Us\u0165-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientiane'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutsko'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokyo'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teher\u00E1n'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Ta\u0161kent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tchaj-pej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'A\u0161chabad'
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
                            'exemplarCity': 'Alma-Ata'
                        },
                        'Aden': {
                            'exemplarCity': 'Aden'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahrajn'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Bejr\u00FAt'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bi\u0161kek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunej'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'K\u00E1bul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kam\u010Datka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Kar\u00E1\u010Di'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'K\u00E1thmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnojarsko'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuvajt'
                        },
                        'Macau': {
                            'exemplarCity': 'Macao'
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
                            'exemplarCity': 'Maskat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nik\u00F3zia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuzneck'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelausk\u00FD \u010Das'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tad\u017Eick\u00FD \u010Das'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tchajpejsk\u00FD \u010Das',
                            'standard': 'Tchajpejsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Tchajpejsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitsk\u00FD \u010Das'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u010Cas stanice \u0160\u00F3wa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamsk\u00FD \u010Das'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u010Cas Ju\u017Enej Georgie'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u010Cas \u0160alam\u00FAnov\u00FDch ostrovov'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapursk\u00FD \u0161tandardn\u00FD \u010Das'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelsk\u00FD \u010Das'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samojsk\u00FD \u010Das',
                            'standard': 'Samojsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Samojsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samarsk\u00FD \u010Das',
                            'standard': 'Samarsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Samarsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalinsk\u00FD \u010Das',
                            'standard': 'Sachalinsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Sachalinsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u010Cas Rotherovej stanice'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'R\u00E9unionsk\u00FD \u010Das'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantick\u00FD \u010Das',
                            'standard': 'Atlantick\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Atlantick\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Centr\u00E1lny \u010Das',
                            'standard': 'Centr\u00E1lny \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Centr\u00E1lny letn\u00FD \u010Das'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonsk\u00FD \u010Das',
                            'standard': 'Amazonsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Amazonsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alja\u0161sk\u00FD \u010Das',
                            'standard': 'Alja\u0161sk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Alja\u0161sk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoafrick\u00FD \u010Das',
                            'standard': 'Z\u00E1padoafrick\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Z\u00E1padoafrick\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Juhoafrick\u00FD \u010Das'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'V\u00FDchodoafrick\u00FD \u010Das'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Stredoafrick\u00FD \u010Das'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afgansk\u00FD \u010Das'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodn\u00FD \u010Das',
                            'standard': 'V\u00FDchodn\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'V\u00FDchodn\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Horsk\u00FD \u010Das',
                            'standard': 'Horsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Horsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Tichomorsk\u00FD \u010Das',
                            'standard': 'Tichomorsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Tichomorsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrsk\u00FD \u010Das',
                            'standard': 'Anadyrsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Anadyrsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabsk\u00FD \u010Das',
                            'standard': 'Arabsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Arabsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argent\u00EDnsky \u010Das',
                            'standard': 'Argent\u00EDnsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Argent\u00EDnsky letn\u00FD \u010Das'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoargent\u00EDnsky \u010Das',
                            'standard': 'Z\u00E1padoargent\u00EDnsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Z\u00E1padoargent\u00EDnsky letn\u00FD \u010Das'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Arm\u00E9nsky \u010Das',
                            'standard': 'Arm\u00E9nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Arm\u00E9nsky letn\u00FD \u010Das'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u010C\u00EDnsky \u010Das',
                            'standard': '\u010C\u00EDnsky \u0161tandardn\u00FD \u010Das',
                            'daylight': '\u010C\u00EDnsky letn\u00FD \u010Das'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Choibalsansk\u00FD \u010Das',
                            'standard': '\u010Cojbalsansk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Choibalsansk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u010Cas Viano\u010Dn\u00E9ho ostrova'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u010Cas Kokosov\u00FDch ostrovov'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbijsk\u00FD \u010Das',
                            'standard': 'Kolumbijsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Kolumbijsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u010Cas Cookov\u00FDch ostrovov',
                            'standard': '\u0160tandardn\u00FD \u010Das Cookov\u00FDch ostrovov',
                            'daylight': 'Letn\u00FD \u010Das Cookov\u00FDch ostrovov'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kub\u00E1nsky \u010Das',
                            'standard': 'Kub\u00E1nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Kub\u00E1nsky letn\u00FD \u010Das'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u010Cas Davisovej stanice'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': "\u010Cas stanice Dumonta d'Urvillea"
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'V\u00FDchodotimorsk\u00FD \u010Das'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u010Cas Ve\u013Ekono\u010Dn\u00E9ho ostrova',
                            'standard': '\u0160tandardn\u00FD \u010Das Ve\u013Ekono\u010Dn\u00E9ho ostrova',
                            'daylight': 'Letn\u00FD \u010Das Ve\u013Ekono\u010Dn\u00E9ho ostrova'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekv\u00E1dorsk\u00FD \u010Das'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Stredoeur\u00F3psky \u010Das',
                            'standard': 'Stredoeur\u00F3psky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Stredoeur\u00F3psky letn\u00FD \u010Das'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodoeur\u00F3psky \u010Das',
                            'standard': 'V\u00FDchodoeur\u00F3psky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'V\u00FDchodoeur\u00F3psky letn\u00FD \u010Das'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoeur\u00F3psky \u010Das',
                            'standard': 'Z\u00E1padoeur\u00F3psky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Z\u00E1padoeur\u00F3psky letn\u00FD \u010Das'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indick\u00FD \u010Das'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Ton\u017Esk\u00FD \u010Das',
                            'standard': 'Ton\u017Esk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Ton\u017Esk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuksk\u00FD \u010Das'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkm\u00E9nsky \u010Das',
                            'standard': 'Turkm\u00E9nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Turkm\u00E9nsky letn\u00FD \u010Das'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalsk\u00FD \u010Das'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguajsk\u00FD \u010Das',
                            'standard': 'Uruguajsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Uruguajsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbeck\u00FD \u010Das',
                            'standard': 'Uzbeck\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Uzbeck\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatsk\u00FD \u010Das',
                            'standard': 'Vanuatsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Vanuatsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburgsk\u00FD \u010Das',
                            'standard': 'Jekaterinburgsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Jekaterinbursk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutsk\u00FD \u010Das',
                            'standard': 'Jakutsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Jakutsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u010Cas ostrovov Wallis a Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u010Cas ostrova Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u010Cas stanice Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogradsk\u00FD \u010Das',
                            'standard': 'Volgogradsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Volgogradsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostock\u00FD \u010Das',
                            'standard': 'Vladivostock\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Vladivostock\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelsk\u00FD \u010Das'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Chovdsk\u00FD \u010Das',
                            'standard': 'Chovdsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Chovdsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongsk\u00FD \u010Das',
                            'standard': 'Hongkongsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Hongkongsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havajsko-aleutsk\u00FD \u010Das',
                            'standard': 'Havajsko-aleutsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Havajsko-aleutsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyansk\u00FD \u010Das'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u0160tandardn\u00FD \u010Das Perzsk\u00E9ho z\u00E1livu'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Z\u00E1padogr\u00F3nsky \u010Das',
                            'standard': 'Z\u00E1padogr\u00F3nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Z\u00E1padogr\u00F3nsky letn\u00FD \u010Das'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodogr\u00F3nsky \u010Das',
                            'standard': 'V\u00FDchodogr\u00F3nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'V\u00FDchodogr\u00F3nsky letn\u00FD \u010Das'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichsk\u00FD \u010Das'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u010Cas Gilbertov\u00FDch ostrovov'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruz\u00EDnsky \u010Das',
                            'standard': 'Gruz\u00EDnsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Gruz\u00EDnsky letn\u00FD \u010Das'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambiersk\u00FD \u010Das'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galap\u00E1gsky \u010Das'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Franc\u00FAzsky ju\u017En\u00FD a antarktick\u00FD \u010Das'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u010Cas Franc\u00FAzskej Guyany'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fid\u017Eijsk\u00FD \u010Das',
                            'standard': 'Fid\u017Eijsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Fid\u017Eijsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u010Cas Falklandsk\u00FDch ostrovov',
                            'standard': '\u0160tandardn\u00FD \u010Das Falklandsk\u00FDch ostrovov',
                            'daylight': 'Letn\u00FD \u010Das Falklandsk\u00FDch ostrovov'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Stredoaustr\u00E1lsky \u010Das',
                            'standard': 'Stredoaustr\u00E1lsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Stredoaustr\u00E1lsky letn\u00FD \u010Das'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Stredoz\u00E1padn\u00FD austr\u00E1lsky \u010Das',
                            'standard': 'Stredoz\u00E1padn\u00FD austr\u00E1lsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Stredoz\u00E1padn\u00FD austr\u00E1lsky letn\u00FD \u010Das'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodoaustr\u00E1lsky \u010Das',
                            'standard': 'V\u00FDchodoaustr\u00E1lsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'V\u00FDchodoaustr\u00E1lsky letn\u00FD \u010Das'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoaustr\u00E1lsky \u010Das',
                            'standard': 'Z\u00E1padoaustr\u00E1lsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Z\u00E1padoaustr\u00E1lsky letn\u00FD \u010Das'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbajd\u017Eansk\u00FD \u010Das',
                            'standard': 'Azerbajd\u017Eansk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Azerbajd\u017Eansk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorsk\u00FD \u010Das',
                            'standard': 'Azorsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Azorsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Banglad\u00E9\u0161sky \u010Das',
                            'standard': 'Banglad\u00E9\u0161sky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Banglad\u00E9\u0161sky letn\u00FD \u010Das'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhut\u00E1nsky \u010Das'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bol\u00EDvijsk\u00FD \u010Das'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Braz\u00EDlsky \u010Das',
                            'standard': 'Braz\u00EDlsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Braz\u00EDlsky letn\u00FD \u010Das'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunejsk\u00FD \u010Das'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdsk\u00FD \u010Das',
                            'standard': 'Kapverdsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Kapverdsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrsk\u00FD \u0161tandardn\u00FD \u010Das'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamsk\u00FD \u010Das',
                            'standard': 'Chathamsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Chathamsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u010Cilsk\u00FD \u010Das',
                            'standard': '\u010Cilsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': '\u010Cilsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u010Cas Indick\u00E9ho oce\u00E1nu'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indo\u010D\u00EDnsky \u010Das'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Stredoindon\u00E9zsky \u010Das'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'V\u00FDchodoindon\u00E9zsky \u010Das'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Z\u00E1padoindon\u00E9zsky \u010Das'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Ir\u00E1nsky \u010Das',
                            'standard': 'Ir\u00E1nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Ir\u00E1nsky letn\u00FD \u010Das'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsk\u00FD \u010Das',
                            'standard': 'Irkutsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Irkutsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraelsk\u00FD \u010Das',
                            'standard': 'Izraelsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Izraelsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonsk\u00FD \u010Das',
                            'standard': 'Japonsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Japonsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kam\u010Datsk\u00FD \u010Das',
                            'standard': 'Petropavlovsk-Kam\u010Datsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Petropavlovsk-Kam\u010Datskijsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'V\u00FDchodokaza\u0161sk\u00FD \u010Das'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Z\u00E1padokaza\u0161sk\u00FD \u010Das'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'K\u00F3rejsk\u00FD \u010Das',
                            'standard': 'K\u00F3rejsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'K\u00F3rejsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraesk\u00FD \u010Das'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsk\u00FD \u010Das',
                            'standard': 'Krasnojarsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Krasnojarsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgizsk\u00FD \u010Das'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u010Cas Rovn\u00EDkov\u00FDch ostrovov'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u010Cas ostrova lorda Howa',
                            'standard': '\u0160tandardn\u00FD \u010Das ostrova lorda Howa',
                            'daylight': 'Letn\u00FD \u010Das ostrova lorda Howa'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u010Cas ostrova Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadansk\u00FD \u010Das',
                            'standard': 'Magadansk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Magadansk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malajsk\u00FD \u010Das'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maledivsk\u00FD \u010Das'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Mark\u00E9zsky \u010Das'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u010Cas Marshallov\u00FDch ostrovov'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Maur\u00EDcijsk\u00FD \u010Das',
                            'standard': 'Maur\u00EDcijsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Maur\u00EDcijsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u010Cas Mawsonovej stanice'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulanb\u00E1tarsk\u00FD \u010Das',
                            'standard': 'Ulanb\u00E1tarsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Ulanb\u00E1tarsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovsk\u00FD \u010Das',
                            'standard': 'Moskovsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Moskovsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mjanmarsk\u00FD \u010Das'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u010Cas ostrova Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nep\u00E1lsky \u010Das'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Novokaled\u00F3nsky \u010Das',
                            'standard': 'Novokaled\u00F3nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Novokaled\u00F3nsky letn\u00FD \u010Das'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Novoz\u00E9landsk\u00FD \u010Das',
                            'standard': 'Novoz\u00E9landsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Novoz\u00E9landsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandsk\u00FD \u010Das',
                            'standard': 'Newfoundlandsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Newfoundlandsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u010Cas ostrova Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u010Cas Norfolksk\u00FDch ostrovov'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u010Cas ostrova Fernando de Noronha',
                            'standard': '\u0160tandardn\u00FD \u010Das ostrova Fernando de Noronha',
                            'daylight': 'Letn\u00FD \u010Das ostrovov Fernanda de Noronha'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosib\u00EDrsky \u010Das',
                            'standard': 'Novosibirsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Novosib\u00EDrsky letn\u00FD \u010Das'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk\u00FD \u010Das',
                            'standard': 'Omsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Omsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistansk\u00FD \u010Das',
                            'standard': 'Pakistansk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Pakistansk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palausk\u00FD \u010Das'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u010Cas Papuy-Novej Guiney'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguajsk\u00FD \u010Das',
                            'standard': 'Paraguajsk\u00FD \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Paraguajsk\u00FD letn\u00FD \u010Das'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peru\u00E1nsky \u010Das',
                            'standard': 'Peru\u00E1nsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Peru\u00E1nsky letn\u00FD \u010Das'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filip\u00EDnsky \u010Das',
                            'standard': 'Filip\u00EDnsky \u0161tandardn\u00FD \u010Das',
                            'daylight': 'Filip\u00EDnsky letn\u00FD \u010Das'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u010Cas F\u00E9nixov\u00FDch ostrovov'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u010Cas ostrovov Saint-Pierre a Miquelon',
                            'standard': '\u0160tandardn\u00FD \u010Das ostrovov Saint-Pierre a Miquelon',
                            'daylight': 'Letn\u00FD \u010Das ostrovov Saint-Pierre a Miquelon'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u010Cas Pitcairnovho ostrova'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapsk\u00FD \u010Das'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '\u010Casov\u00E9 p\u00E1smo {0}',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug',
                                '7': 'j\u00FAl',
                                '6': 'j\u00FAn',
                                '5': 'm\u00E1j',
                                '12': 'dec',
                                '11': 'nov',
                                '10': 'okt',
                                '9': 'sep',
                                '1': 'jan',
                                '2': 'feb',
                                '3': 'mar',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'a',
                                '7': 'j',
                                '6': 'j',
                                '5': 'm',
                                '12': 'd',
                                '11': 'n',
                                '10': 'o',
                                '9': 's',
                                '1': 'j',
                                '2': 'f',
                                '3': 'm',
                                '4': 'a'
                            },
                            'wide': {
                                '8': 'augusta',
                                '7': 'j\u00FAla',
                                '6': 'j\u00FAna',
                                '5': 'm\u00E1ja',
                                '12': 'decembra',
                                '11': 'novembra',
                                '10': 'okt\u00F3bra',
                                '9': 'septembra',
                                '1': 'janu\u00E1ra',
                                '2': 'febru\u00E1ra',
                                '3': 'marca',
                                '4': 'apr\u00EDla'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug',
                                '7': 'j\u00FAl',
                                '6': 'j\u00FAn',
                                '5': 'm\u00E1j',
                                '12': 'dec',
                                '11': 'nov',
                                '10': 'okt',
                                '9': 'sep',
                                '1': 'jan',
                                '2': 'feb',
                                '3': 'mar',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'a',
                                '7': 'j',
                                '6': 'j',
                                '5': 'm',
                                '12': 'd',
                                '11': 'n',
                                '10': 'o',
                                '9': 's',
                                '1': 'j',
                                '2': 'f',
                                '3': 'm',
                                '4': 'a'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'j\u00FAl',
                                '6': 'j\u00FAn',
                                '5': 'm\u00E1j',
                                '12': 'december',
                                '11': 'november',
                                '10': 'okt\u00F3ber',
                                '9': 'september',
                                '1': 'janu\u00E1r',
                                '2': 'febru\u00E1r',
                                '3': 'marec',
                                '4': 'apr\u00EDl'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'ut',
                                'wed': 'st',
                                'thu': '\u0161t',
                                'fri': 'pi',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'U',
                                'wed': 'S',
                                'thu': '\u0160',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Ne',
                                'mon': 'Po',
                                'tue': 'Ut',
                                'wed': 'St',
                                'thu': '\u0160t',
                                'fri': 'Pi',
                                'sat': 'So'
                            },
                            'wide': {
                                'sun': 'nede\u013Ea',
                                'mon': 'pondelok',
                                'tue': 'utorok',
                                'wed': 'streda',
                                'thu': '\u0161tvrtok',
                                'fri': 'piatok',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'ut',
                                'wed': 'st',
                                'thu': '\u0161t',
                                'fri': 'pi',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'U',
                                'wed': 'S',
                                'thu': '\u0160',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Ne',
                                'mon': 'Po',
                                'tue': 'Ut',
                                'wed': 'St',
                                'thu': '\u0160t',
                                'fri': 'Pi',
                                'sat': 'So'
                            },
                            'wide': {
                                'sun': 'nede\u013Ea',
                                'mon': 'pondelok',
                                'tue': 'utorok',
                                'wed': 'streda',
                                'thu': '\u0161tvrtok',
                                'fri': 'piatok',
                                'sat': 'sobota'
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
                                '1': '1. \u0161tvr\u0165rok',
                                '2': '2. \u0161tvr\u0165rok',
                                '3': '3. \u0161tvr\u0165rok',
                                '4': '4. \u0161tvr\u0165rok'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1Q',
                                '2': '2Q',
                                '3': '3Q',
                                '4': '4Q'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. \u0161tvr\u0165rok',
                                '2': '2. \u0161tvr\u0165rok',
                                '3': '3. \u0161tvr\u0165rok',
                                '4': '4. \u0161tvr\u0165rok'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'pred n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'pred n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'pred n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd.M.y',
                        'short': 'd.M.y'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss zzzz',
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
                            'yMMM': 'LLL y',
                            'yMEd': 'E d. M. y',
                            'yMd': 'd.M.y',
                            'yM': 'M.y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'Ed': 'E d.',
                            'd': 'd.',
                            'GyMMMd': 'd.M.y G',
                            'GyMMMEd': 'E, d. MMM y G',
                            'GyMMMMd': 'd. MMMM y G',
                            'h': 'h a',
                            'H': 'H',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMMd': 'd. MMMM y',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d. MMM y',
                            'yMMMd': 'd.M.y',
                            'hms': 'h:mm:ss a',
                            'Hm': 'H:mm',
                            'Ehm': 'E h:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
                            'Hms': 'H:mm:ss',
                            'M': 'L.',
                            'Md': 'd.M.',
                            'MEd': 'E, d.M.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM.',
                            'MMMEd': 'E, d. MMM.',
                            'MMMMd': 'd. MMMM',
                            'MMMMEd': 'E, d. MMMM',
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
                                'd': 'E, d. - E, d. MMM',
                                'M': 'E, d. MMM - E, d. MMM'
                            },
                            'MMMd': {
                                'd': 'd. - d. MMM',
                                'M': 'd. MMM - d. MMM'
                            },
                            'MMM': {
                                'M': 'LLL \u2013 LLL'
                            },
                            'MEd': {
                                'd': 'E, d.M. - E, d.M.',
                                'M': 'E, d.M. - E, d.M.'
                            },
                            'Md': {
                                'd': 'd.M. - d.M.',
                                'M': 'd.M. - d.M.'
                            },
                            'M': {
                                'M': 'M. \u2013 M.'
                            },
                            'Hv': {
                                'H': 'HH \u2013 HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h \u2013 h a v'
                            },
                            'intervalFormatFallback': '{0} \u2013 {1}',
                            'y': {
                                'y': 'y - y'
                            },
                            'yM': {
                                'M': 'M.y - M.y',
                                'y': 'M.y - M.y'
                            },
                            'yMd': {
                                'd': 'd.M.y - d.M.y',
                                'M': 'd.M.y - d.M.y',
                                'y': 'd.M.y - d.M.y'
                            },
                            'yMEd': {
                                'd': 'E, d.M.y - E, d.M.y',
                                'M': 'E, d.M.y - E, d.M.y',
                                'y': 'E, d.M.y - E, d.M.y'
                            },
                            'yMMM': {
                                'M': 'LLL - LLL y',
                                'y': 'LLL y - LLL y'
                            },
                            'yMMMd': {
                                'd': 'd. - d. MMM y',
                                'M': 'd. MMM - d. MMM y',
                                'y': 'd. MMM y - d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. - E, d. MMM y',
                                'M': 'E, d. MMM - E, d. MMM y',
                                'y': 'E, d. MMM y - E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL - LLLL y',
                                'y': 'LLLL y - LLLL y'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'Hmv': {
                                'H': 'H:mm \u2013 H:mm v',
                                'm': 'H:mm \u2013 H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm - h:mm a v',
                                'm': 'h:mm - h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm \u2013 H:mm',
                                'm': 'H:mm \u2013 H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm - h:mm a',
                                'm': 'h:mm - h:mm a'
                            },
                            'H': {
                                'H': 'HH \u2013 HH'
                            },
                            'h': {
                                'a': 'h a \u2013 h a',
                                'h': 'h \u2013 h a'
                            },
                            'd': {
                                'd': 'd. \u2013 d.'
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
