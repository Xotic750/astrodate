/* AstroDate
 * Language: cs
 * ca-gregorian: 24r9298
 * timeZoneNames: 24r9298
 * localeDisplayNames: 24r9298
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
        AstroDate.lang('cs', {
            'codePatterns': {
                'language': 'Jazyk: {0}',
                'script': 'P\u00EDsmo: {0}',
                'territory': 'Region: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u0158adit slabi\u010Dn\u00E1 p\u00EDsma (kana) samostatn\u011B',
                    'yes': '\u0158adit jednotliv\u00E9 typy slabi\u010Dn\u00FDch p\u00EDsem (kana) r\u016Fzn\u011B'
                },
                'colCaseLevel': {
                    'no': 'Nerozli\u0161ovat p\u0159i \u0159azen\u00ED velk\u00E1 a mal\u00E1 p\u00EDsmena',
                    'yes': 'Rozli\u0161ovat p\u0159i \u0159azen\u00ED velk\u00E1 a mal\u00E1 p\u00EDsmena'
                },
                'colCaseFirst': {
                    'lower': 'Nejd\u0159\u00EDve \u0159adit mal\u00E1 p\u00EDsmena',
                    'no': 'Norm\u00E1ln\u00ED \u0159azen\u00ED velk\u00FDch a mal\u00FDch p\u00EDsmen',
                    'upper': 'Nejd\u0159\u00EDve \u0159adit velk\u00E1 p\u00EDsmena'
                },
                'colStrength': {
                    'identical': '\u0158adit v\u0161e',
                    'primary': '\u0158adit pouze z\u00E1kladn\u00ED p\u00EDsmena',
                    'quaternary': '\u0158adit akcenty/velk\u00E1 a mal\u00E1 p\u00EDsmena/\u0161\u00ED\u0159ku/kana',
                    'secondary': '\u0158adit akcenty',
                    'tertiary': '\u0158adit akcenty/velk\u00E1 a mal\u00E1 p\u00EDsmena/\u0161\u00ED\u0159ku'
                },
                'colNumeric': {
                    'no': '\u0158adit \u010D\u00EDslice jednotliv\u011B',
                    'yes': 'Numerick\u00E9 \u0159azen\u00ED \u010D\u00EDslic'
                },
                'colNormalization': {
                    'no': '\u0158adit bez normalizace',
                    'yes': '\u0158azen\u00ED podle normalizovan\u00E9ho k\u00F3dov\u00E1n\u00ED Unicode'
                },
                'calendar': {
                    'japanese': 'Japonsk\u00FD kalend\u00E1\u0159',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptsk\u00FD kalend\u00E1\u0159',
                    'dangi': 'dangi',
                    'ethiopic': 'Etiopsk\u00FD kalend\u00E1\u0159',
                    'ethiopic-amete-alem': 'Etiopsk\u00FD kalend\u00E1\u0159 (Amete-Alem)',
                    'gregorian': 'Gregori\u00E1nsk\u00FD kalend\u00E1\u0159',
                    'hebrew': 'Hebrejsk\u00FD kalend\u00E1\u0159',
                    'persian': 'Persk\u00FD kalend\u00E1\u0159',
                    'roc': 'Kalend\u00E1\u0159 \u010C\u00EDnsk\u00E9 republiky',
                    'chinese': '\u010C\u00EDnsk\u00FD kalend\u00E1\u0159',
                    'buddhist': 'Buddhistick\u00FD kalend\u00E1\u0159',
                    'indian': 'Indick\u00FD n\u00E1rodn\u00ED kalend\u00E1\u0159',
                    'islamic': 'Muslimsk\u00FD kalend\u00E1\u0159',
                    'islamic-civil': 'Muslimsk\u00FD ob\u010Dansk\u00FD kalend\u00E1\u0159',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u0158azen\u00ED jako v telefonn\u00EDm seznamu',
                    'gb2312han': '\u0158azen\u00ED pro zjednodu\u0161enou \u010D\u00EDn\u0161tinu \u2013 GB2312',
                    'eor': 'eor',
                    'ducet': 'V\u00FDchoz\u00ED \u0159azen\u00ED Unicode',
                    'dictionary': 'Slovn\u00EDkov\u00E9 \u0159azen\u00ED',
                    'big5han': '\u0158azen\u00ED pro tradi\u010Dn\u00ED \u010D\u00EDn\u0161tinu \u2013 Big5',
                    'traditional': 'Tradi\u010Dn\u00ED \u0159azen\u00ED',
                    'standard': 'Standardn\u00ED \u0159azen\u00ED',
                    'zhuyin': '\u010Cu-jin',
                    'unihan': '\u0158azen\u00ED podle radik\u00E1l\u016F',
                    'stroke': '\u0158azen\u00ED podle tah\u016F',
                    'searchjl': 'Vyhled\u00E1vat podle po\u010D\u00E1te\u010Dn\u00ED souhl\u00E1sky p\u00EDsma hangul',
                    'search': 'Obecn\u00E9 hled\u00E1n\u00ED',
                    'reformed': 'Reformovan\u00E9 \u0159azen\u00ED',
                    'pinyin': '\u0158azen\u00ED podle pchin-jinu',
                    'phonetic': 'Fonetick\u00E9 \u0159azen\u00ED'
                },
                'numbers': {
                    'knda': 'Kannadsk\u00E9 \u010D\u00EDslice',
                    'khmr': 'Khmersk\u00E9 \u010D\u00EDslice',
                    'kali': 'kali',
                    'jpanfin': 'Japonsk\u00E9 finan\u010Dn\u00ED \u010D\u00EDslice',
                    'jpan': 'Japonsk\u00E9 \u010D\u00EDslice',
                    'java': 'java',
                    'hebr': 'Hebrejsk\u00E9 \u010D\u00EDslice',
                    'hantfin': 'Finan\u010Dn\u00ED \u010D\u00EDslice tradi\u010Dn\u00ED \u010D\u00EDn\u0161tiny',
                    'hant': '\u010C\u00EDslice tradi\u010Dn\u00ED \u010D\u00EDn\u0161tiny',
                    'hansfin': 'Finan\u010Dn\u00ED \u010D\u00EDslice zjednodu\u0161en\u00E9 \u010D\u00EDn\u0161tiny',
                    'hans': '\u010C\u00EDslice zjednodu\u0161en\u00E9 \u010D\u00EDn\u0161tiny',
                    'hanidec': '\u010C\u00EDnsk\u00E9 des\u00EDtkov\u00E9 \u010D\u00EDslice',
                    'guru': '\u010C\u00EDslice gurmukh\u00ED',
                    'gujr': 'Gud\u017Ear\u00E1tsk\u00E9 \u010D\u00EDslice',
                    'greklow': 'Mal\u00E9 \u0159eck\u00E9 \u010D\u00EDslice',
                    'grek': '\u0158eck\u00E9 \u010D\u00EDslice',
                    'bali': 'bali',
                    'armnlow': 'Mal\u00E9 arm\u00E9nsk\u00E9 \u010D\u00EDslice',
                    'armn': 'Arm\u00E9nsk\u00E9 \u010D\u00EDslice',
                    'arabext': 'Roz\u0161\u00ED\u0159en\u00E9 arabsko-indick\u00E9 \u010D\u00EDslice',
                    'arab': 'Arabsko-indick\u00E9 \u010D\u00EDslice',
                    'finance': 'Finan\u010Dnick\u00FD z\u00E1pis \u010D\u00EDsel',
                    'traditional': 'Tradi\u010Dn\u00ED \u010D\u00EDslovky',
                    'native': 'Nativn\u00ED \u010D\u00EDslice',
                    'beng': 'Beng\u00E1lsk\u00E9 \u010D\u00EDslice',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u010C\u00EDslice p\u00EDsma d\u00E9van\u00E1gar\u00ED',
                    'orya': 'Urijsk\u00E9 \u010D\u00EDslice',
                    'osma': 'osma',
                    'roman': '\u0158\u00EDmsk\u00E9 \u010D\u00EDslice',
                    'romanlow': 'Mal\u00E9 \u0159\u00EDmsk\u00E9 \u010D\u00EDslice',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vaisk\u00E9 \u010D\u00EDslice',
                    'tibt': 'Tibetsk\u00E9 \u010D\u00EDslice',
                    'thai': 'Thajsk\u00E9 \u010D\u00EDslice',
                    'telu': 'Telugsk\u00E9 \u010D\u00EDslice',
                    'tamldec': 'Tamilsk\u00E9 \u010D\u00EDslice',
                    'taml': 'Tamilsk\u00E9 tradi\u010Dn\u00ED \u010D\u00EDslice',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Myanmarsk\u00E9 \u010D\u00EDslice',
                    'mtei': 'mtei',
                    'mong': 'Mongolsk\u00E9 \u010D\u00EDslice',
                    'mlym': 'Malaj\u00E1lamsk\u00E9 \u010D\u00EDslice',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Z\u00E1padn\u00ED \u010D\u00EDslice',
                    'laoo': 'Laosk\u00E9 \u010D\u00EDslice',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Gruz\u00EDnsk\u00E9 \u010D\u00EDslice',
                    'fullwide': '\u010C\u00EDslice \u2013 pln\u00E1 \u0161\u00ED\u0159ka',
                    'ethi': 'Etiopsk\u00E9 \u010D\u00EDslice'
                },
                'colAlternate': {
                    'non-ignorable': '\u0158adit symboly',
                    'shifted': 'P\u0159i \u0159azen\u00ED ignorovat symboly'
                },
                'colBackwards': {
                    'no': 'Norm\u00E1ln\u00ED \u0159azen\u00ED akcent\u016F',
                    'yes': '\u0158adit akcenty opa\u010Dn\u011B'
                }
            },
            'keys': {
                'colNormalization': 'Normalizovan\u00E9 \u0159azen\u00ED',
                'collation': '\u0158azen\u00ED',
                'colHiraganaQuaternary': '\u0158azen\u00ED podle slabi\u010Dn\u00FDch p\u00EDsem (kana)',
                'colCaseLevel': 'Rozli\u0161ovan\u00ED velk\u00FDch a mal\u00FDch p\u00EDsmen p\u0159i \u0159azen\u00ED',
                'colCaseFirst': '\u0158azen\u00ED velk\u00FDch a mal\u00FDch p\u00EDsmen',
                'colBackwards': 'Obr\u00E1cen\u00E9 \u0159azen\u00ED akcent\u016F',
                'colAlternate': 'Ignorovat \u0159azen\u00ED symbol\u016F',
                'calendar': 'Kalend\u00E1\u0159',
                'x': 'Soukrom\u00E9 pou\u017Eit\u00ED',
                'variableTop': '\u0158adit jako symboly',
                'va': 'Varianta n\u00E1rodn\u00EDho prost\u0159ed\u00ED',
                'timezone': '\u010Casov\u00E9 p\u00E1smo',
                'numbers': '\u010C\u00EDsla',
                'currency': 'M\u011Bna',
                'colStrength': 'S\u00EDla \u0159azen\u00ED',
                'colNumeric': '\u010C\u00EDseln\u00E9 \u0159azen\u00ED'
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
                            'exemplarCity': 'Pitcairnovy ostrovy'
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
                            'exemplarCity': 'Gambierovy ostrovy'
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
                            'exemplarCity': 'Chuuksk\u00E9 ostrovy'
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
                            'exemplarCity': 'Chathamsk\u00E9 ostrovy'
                        },
                        'Easter': {
                            'exemplarCity': 'Velikono\u010Dn\u00ED ostrov'
                        },
                        'Efate': {
                            'exemplarCity': '\u00C9fat\u00E9'
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
                            'exemplarCity': 'Mark\u00E9zy'
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
                            'exemplarCity': 'Noum\u00E9a'
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
                            'exemplarCity': 'Maledivy'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelenovy ostrovy'
                        },
                        'Reunion': {
                            'exemplarCity': 'R\u00E9union'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauricius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'V\u00E1no\u010Dn\u00ED ostrov'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokosov\u00E9 ostrovy'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komory'
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
                            'exemplarCity': 'Nezn\u00E1m\u00E9 m\u011Bsto'
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
                            'exemplarCity': 'Ji\u017En\u00ED p\u00F3l'
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
                            'exemplarCity': 'Kajmansk\u00E9 ostrovy'
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
                            'exemplarCity': 'Canc\u00FAn'
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
                            'exemplarCity': 'Anchorage'
                        },
                        'Adak': {
                            'exemplarCity': 'Adak'
                        },
                        'Bahia': {
                            'exemplarCity': 'Bah\u00EDa'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bahia Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Bel\u00E9m'
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
                            'exemplarCity': 'Bogot\u00E1'
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
                            'exemplarCity': 'Salvador'
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
                            'exemplarCity': 'C\u00F3rdoba'
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
                            'exemplarCity': 'M\u00E9xico'
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
                            'exemplarCity': 'Montr\u00E9al'
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
                                'exemplarCity': 'Beulah, Severn\u00ED Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Severn\u00ED Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Severn\u00ED Dakota'
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
                            'exemplarCity': 'S\u00E3o Paulo'
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
                            'exemplarCity': 'Saint-Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Svat\u00FD Kry\u0161tof'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Svat\u00E1 Lucie'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Svat\u00FD Tom\u00E1\u0161 (Karibik)'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Svat\u00FD Vincenc'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Ji\u017En\u00ED Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjav\u00EDk'
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
                            'exemplarCity': 'Kan\u00E1rsk\u00E9 ostrovy'
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
                            'exemplarCity': 'Lucemburk'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Britsk\u00FD letn\u00ED \u010Das'
                            },
                            'exemplarCity': 'Lond\u00FDn'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Lubla\u0148'
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
                            'exemplarCity': 'B\u011Blehrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Ath\u00E9ny'
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
                            'exemplarCity': 'Sofie'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
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
                            'exemplarCity': 'Curych'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Z\u00E1poro\u017E\u00ED'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Z\u00E1h\u0159eb'
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
                            'exemplarCity': 'V\u00EDde\u0148'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatik\u00E1n'
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
                            'exemplarCity': '\u0158\u00EDm'
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
                            'exemplarCity': 'Pa\u0159\u00ED\u017E'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinky'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Irsk\u00FD letn\u00ED \u010Das'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Koda\u0148'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Ki\u0161in\u011Bv'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
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
                            'exemplarCity': 'D\u017Eibuti'
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
                            'exemplarCity': 'Mogadi\u0161u'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Nd\u017Eamena'
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
                            'exemplarCity': 'Svat\u00FD Tom\u00E1\u0161'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto-Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Ouagadougou'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nuak\u0161ott'
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
                            'exemplarCity': 'Lom\u00E9'
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
                            'exemplarCity': 'Abid\u017Ean'
                        },
                        'Accra': {
                            'exemplarCity': 'Accra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Abeba'
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
                            'exemplarCity': 'Ho \u010Ci Minovo m\u011Bsto'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rij\u00E1d'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rang\u00FAn'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kyzylorda'
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
                            'exemplarCity': 'Phnompenh'
                        },
                        'Oral': {
                            'exemplarCity': 'Uralsk'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novosibirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagd\u00E1d'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u010Cchung-\u010Dching'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Dama\u0161ek'
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
                            'exemplarCity': 'Charbin'
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
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ul\u00E1nb\u00E1tar'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urum\u010Di'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientiane'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekat\u011Brinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimb\u00FA'
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
                            'exemplarCity': 'Jeruzal\u00E9m'
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
                            'exemplarCity': 'Amm\u00E1n'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
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
                            'exemplarCity': '\u010Cojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'K\u00E1bul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kam\u010Datka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Kar\u00E1\u010D\u00ED'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Ka\u0161ghar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'K\u00E1thm\u00E1nd\u00FA'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Chandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnojarsk'
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
                            'exemplarCity': 'Nik\u00F3sie'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuzn\u011Bck'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'Samojsk\u00FD \u010Das',
                            'standard': 'Samojsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Samojsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samarsk\u00FD \u010Das',
                            'standard': 'Samarsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Samarsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalinsk\u00FD \u010Das',
                            'standard': 'Sachalinsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Sachalinsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u010Cas Rotherovy stanice'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'R\u00E9unionsk\u00FD \u010Das'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Kyzylordsk\u00FD \u010Das',
                            'standard': 'Kyzylordsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Kyzylordsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapsk\u00FD \u010Das'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u010Cas Pitcairnova ostrova'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Pierre-miquelonsk\u00FD \u010Das',
                            'standard': 'Pierre-miquelonsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Pierre-miquelonsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u010Cas F\u00E9nixov\u00FDch ostrov\u016F'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filip\u00EDnsk\u00FD \u010Das',
                            'standard': 'Filip\u00EDnsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Filip\u00EDnsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peru\u00E1nsk\u00FD \u010Das',
                            'standard': 'Peru\u00E1nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Peru\u00E1nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguaysk\u00FD \u010Das',
                            'standard': 'Paraguaysk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Paraguaysk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u010Cas Papuy-Nov\u00E9 Guiney'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palausk\u00FD \u010Das'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'P\u00E1kist\u00E1nsk\u00FD \u010Das',
                            'standard': 'P\u00E1kist\u00E1nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'P\u00E1kist\u00E1nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk\u00FD \u010Das',
                            'standard': 'Omsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Omsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsk\u00FD \u010Das',
                            'standard': 'Novosibirsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Novosibirsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Severomari\u00E1nsk\u00FD \u010Das'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u010Cas souostrov\u00ED Fernando de Noronha',
                            'standard': 'Standardn\u00ED \u010Das souostrov\u00ED Fernando de Noronha',
                            'daylight': 'Letn\u00ED \u010Das souostrov\u00ED Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolsk\u00FD \u010Das'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuejsk\u00FD \u010Das'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandsk\u00FD \u010Das',
                            'standard': 'Newfoundlandsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Newfoundlandsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Novoz\u00E9landsk\u00FD \u010Das',
                            'standard': 'Novoz\u00E9landsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Novoz\u00E9landsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Novokaledonsk\u00FD \u010Das',
                            'standard': 'Novokaledonsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Novokaledonsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Severoamerick\u00FD centr\u00E1ln\u00ED \u010Das',
                            'standard': 'Severoamerick\u00FD centr\u00E1ln\u00ED standardn\u00ED \u010Das',
                            'daylight': 'Severoamerick\u00FD centr\u00E1ln\u00ED letn\u00ED \u010Das'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Severoamerick\u00FD v\u00FDchodn\u00ED \u010Das',
                            'standard': 'Severoamerick\u00FD v\u00FDchodn\u00ED standardn\u00ED \u010Das',
                            'daylight': 'Severoamerick\u00FD v\u00FDchodn\u00ED letn\u00ED \u010Das'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Severoamerick\u00FD horsk\u00FD \u010Das',
                            'standard': 'Severoamerick\u00FD horsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Severoamerick\u00FD horsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Severoamerick\u00FD pacifick\u00FD \u010Das',
                            'standard': 'Severoamerick\u00FD pacifick\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Severoamerick\u00FD pacifick\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrsk\u00FD \u010Das',
                            'standard': 'Anadyrsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Anadyrsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aktausk\u00FD \u010Das',
                            'standard': 'Aktausk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Aktausk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aktobsk\u00FD \u010Das',
                            'standard': 'Aktobsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Aktobsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdsk\u00FD \u010Das',
                            'standard': 'Kapverdsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Kapverdsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Caseysk\u00FD \u010Das'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrsk\u00FD \u010Das'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamsk\u00FD \u010Das',
                            'standard': 'Chathamsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Chathamsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilsk\u00FD \u010Das',
                            'standard': 'Chilsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Chilsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u010C\u00EDnsk\u00FD \u010Das',
                            'standard': '\u010C\u00EDnsk\u00FD standardn\u00ED \u010Das',
                            'daylight': '\u010C\u00EDnsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u010Cojbalsansk\u00FD \u010Das',
                            'standard': '\u010Cojbalsansk\u00FD standardn\u00ED \u010Das',
                            'daylight': '\u010Cojbalsansk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u010Cas V\u00E1no\u010Dn\u00EDho ostrova'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u010Cas Kokosov\u00FDch ostrov\u016F'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbijsk\u00FD \u010Das',
                            'standard': 'Kolumbijsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Kolumbijsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u010Cas Cookov\u00FDch ostrov\u016F',
                            'standard': 'Standardn\u00ED \u010Das Cookov\u00FDch ostrov\u016F',
                            'daylight': 'Letn\u00ED \u010Das Cookov\u00FDch ostrov\u016F'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kub\u00E1nsk\u00FD \u010Das',
                            'standard': 'Kub\u00E1nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Kub\u00E1nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u010Cas Davisovy stanice'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u010Cas stanice Dumonta d\u2019Urvilla'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'V\u00FDchodotimorsk\u00FD \u010Das'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u010Cas Velikono\u010Dn\u00EDho ostrova',
                            'standard': 'Standardn\u00ED \u010Das Velikono\u010Dn\u00EDho ostrova',
                            'daylight': 'Letn\u00ED \u010Das Velikono\u010Dn\u00EDho ostrova'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekv\u00E1dorsk\u00FD \u010Das'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'St\u0159edoevropsk\u00FD \u010Das',
                            'standard': 'St\u0159edoevropsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'St\u0159edoevropsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodoevropsk\u00FD \u010Das',
                            'standard': 'V\u00FDchodoevropsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'V\u00FDchodoevropsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoevropsk\u00FD \u010Das',
                            'standard': 'Z\u00E1padoevropsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Z\u00E1padoevropsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandsk\u00FD \u010Das',
                            'standard': 'Falklandsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Falklandsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fid\u017Eijsk\u00FD \u010Das',
                            'standard': 'Fid\u017Eijsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Fid\u017Eijsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Francouzskoguyansk\u00FD \u010Das'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u010Cas Francouzsk\u00FDch ji\u017En\u00EDch a antarktick\u00FDch \u00FAzem\u00ED'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galap\u00E1\u017Esk\u00FD \u010Das'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelausk\u00FD \u010Das'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Ton\u017Esk\u00FD \u010Das',
                            'standard': 'Ton\u017Esk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Ton\u017Esk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuksk\u00FD \u010Das'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmensk\u00FD \u010Das',
                            'standard': 'Turkmensk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Turkmensk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalsk\u00FD \u010Das'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguaysk\u00FD \u010Das',
                            'standard': 'Uruguaysk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Uruguaysk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbeck\u00FD \u010Das',
                            'standard': 'Uzbeck\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Uzbeck\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatsk\u00FD \u010Das',
                            'standard': 'Vanuatsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Vanuatsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekat\u011Brinbursk\u00FD \u010Das',
                            'standard': 'Jekat\u011Brinbursk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Jekat\u011Brinbursk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutsk\u00FD \u010Das',
                            'standard': 'Jakutsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Jakutsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u010Cas ostrov\u016F Wallis a Futuna'
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
                            'standard': 'Volgogradsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Volgogradsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostock\u00FD \u010Das',
                            'standard': 'Vladivostock\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Vladivostock\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelsk\u00FD \u010Das'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'T\u00E1d\u017Eick\u00FD \u010Das'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tchajpejsk\u00FD \u010Das',
                            'standard': 'Tchajpejsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Tchajpejsk\u00FD letn\u00ED \u010Das'
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
                            'standard': 'Jihogeorgijsk\u00FD \u010Das'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u010Cas \u0160alamounov\u00FDch ostrov\u016F'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapursk\u00FD \u010Das'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelsk\u00FD \u010Das'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamsk\u00FD \u010Das'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Z\u00E1padogr\u00F3nsk\u00FD \u010Das',
                            'standard': 'Z\u00E1padogr\u00F3nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Z\u00E1padogr\u00F3nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodogr\u00F3nsk\u00FD \u010Das',
                            'standard': 'V\u00FDchodogr\u00F3nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'V\u00FDchodogr\u00F3nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichsk\u00FD st\u0159edn\u00ED \u010Das'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u010Cas Gilbertov\u00FDch ostrov\u016F'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruz\u00EDnsk\u00FD \u010Das',
                            'standard': 'Gruz\u00EDnsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Gruz\u00EDnsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambiersk\u00FD \u010Das'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonsk\u00FD \u010Das',
                            'standard': 'Amazonsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Amazonsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acrejsk\u00FD \u010Das',
                            'standard': 'Acrejsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Acrejsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afgh\u00E1nsk\u00FD \u010Das'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'St\u0159edoafrick\u00FD \u010Das'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'V\u00FDchodoafrick\u00FD \u010Das'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Jihoafrick\u00FD \u010Das'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoafrick\u00FD \u010Das',
                            'standard': 'Z\u00E1padoafrick\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Z\u00E1padoafrick\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alja\u0161sk\u00FD \u010Das',
                            'standard': 'Alja\u0161sk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Alja\u0161sk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatsk\u00FD \u010Das',
                            'standard': 'Almatsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Almatsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabsk\u00FD \u010Das',
                            'standard': 'Arabsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Arabsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentinsk\u00FD \u010Das',
                            'standard': 'Argentinsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Argentinsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoargentinsk\u00FD \u010Das',
                            'standard': 'Z\u00E1padoargentinsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Z\u00E1padoargentinsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Arm\u00E9nsk\u00FD \u010Das',
                            'standard': 'Arm\u00E9nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Arm\u00E9nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantick\u00FD \u010Das',
                            'standard': 'Atlantick\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Atlantick\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'St\u0159edoaustralsk\u00FD \u010Das',
                            'standard': 'St\u0159edoaustralsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'St\u0159edoaustralsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'St\u0159edoz\u00E1padn\u00ED australsk\u00FD \u010Das',
                            'standard': 'St\u0159edoz\u00E1padn\u00ED australsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'St\u0159edoz\u00E1padn\u00ED australsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'V\u00FDchodoaustralsk\u00FD \u010Das',
                            'standard': 'V\u00FDchodoaustralsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'V\u00FDchodoaustralsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Z\u00E1padoaustralsk\u00FD \u010Das',
                            'standard': 'Z\u00E1padoaustralsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Z\u00E1padoaustralsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u00C1zerb\u00E1jd\u017E\u00E1nsk\u00FD \u010Das',
                            'standard': '\u00C1zerb\u00E1jd\u017E\u00E1nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': '\u00C1zerb\u00E1jd\u017E\u00E1nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorsk\u00FD \u010Das',
                            'standard': 'Azorsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Azorsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Banglad\u00E9\u0161sk\u00FD \u010Das',
                            'standard': 'Banglad\u00E9\u0161sk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Banglad\u00E9\u0161sk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bh\u00FAt\u00E1nsk\u00FD \u010Das'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivijsk\u00FD \u010Das'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilijsk\u00FD \u010Das',
                            'standard': 'Brasilijsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Brasilijsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunejsk\u00FD \u010Das'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Standardn\u00ED \u010Das Persk\u00E9ho z\u00E1livu'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyansk\u00FD \u010Das'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havajsko-aleutsk\u00FD \u010Das',
                            'standard': 'Havajsko-aleutsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Havajsko-aleutsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongsk\u00FD \u010Das',
                            'standard': 'Hongkongsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Hongkongsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdsk\u00FD \u010Das',
                            'standard': 'Hovdsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Hovdsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indick\u00FD \u010Das'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indickooce\u00E1nsk\u00FD \u010Das'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indo\u010D\u00EDnsk\u00FD \u010Das'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'St\u0159edoindon\u00E9sk\u00FD \u010Das'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'V\u00FDchodoindon\u00E9sk\u00FD \u010Das'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Z\u00E1padoindon\u00E9sk\u00FD \u010Das'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u00CDr\u00E1nsk\u00FD \u010Das',
                            'standard': '\u00CDr\u00E1nsk\u00FD standardn\u00ED \u010Das',
                            'daylight': '\u00CDr\u00E1nsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsk\u00FD \u010Das',
                            'standard': 'Irkutsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Irkutsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraelsk\u00FD \u010Das',
                            'standard': 'Izraelsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Izraelsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonsk\u00FD \u010Das',
                            'standard': 'Japonsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Japonsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsko-kam\u010Datsk\u00FD \u010Das',
                            'standard': 'Petropavlovsko-kam\u010Datsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Petropavlovsko-kam\u010Datsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'V\u00FDchodokazachst\u00E1nsk\u00FD \u010Das'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Z\u00E1padokazachst\u00E1nsk\u00FD \u010Das'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korejsk\u00FD \u010Das',
                            'standard': 'Korejsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Korejsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrajsk\u00FD \u010Das'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsk\u00FD \u010Das',
                            'standard': 'Krasnojarsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Krasnojarsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kyrgyzsk\u00FD \u010Das'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Sr\u00EDlansk\u00FD \u010Das'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u010Cas Rovn\u00EDkov\u00FDch ostrov\u016F'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u010Cas ostrova lorda Howa',
                            'standard': 'Standardn\u00ED \u010Das ostrova lorda Howa',
                            'daylight': 'Letn\u00ED \u010Das ostrova lorda Howa'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macajsk\u00FD \u010Das',
                            'standard': 'Macajsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Macajsk\u00FD letn\u00ED \u010Das'
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
                            'standard': 'Magadansk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Magadansk\u00FD letn\u00ED \u010Das'
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
                            'standard': 'Mark\u00E9zsk\u00FD \u010Das'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u010Cas Marshallov\u00FDch ostrov\u016F'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauricijsk\u00FD \u010Das',
                            'standard': 'Mauricijsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Mauricijsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u010Cas Mawsonovy stanice'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ul\u00E1nb\u00E1tarsk\u00FD \u010Das',
                            'standard': 'Ul\u00E1nb\u00E1tarsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Ul\u00E1nb\u00E1tarsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskevsk\u00FD \u010Das',
                            'standard': 'Moskevsk\u00FD standardn\u00ED \u010Das',
                            'daylight': 'Moskevsk\u00FD letn\u00ED \u010Das'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarsk\u00FD \u010Das'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naursk\u00FD \u010Das'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nep\u00E1lsk\u00FD \u010Das'
                        }
                    }
                },
                'hourFormat': '+H:mm;-H:mm',
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
                                '8': 'srp',
                                '7': '\u010Dvc',
                                '6': '\u010Dvn',
                                '5': 'kv\u011B',
                                '12': 'pro',
                                '11': 'lis',
                                '10': '\u0159\u00EDj',
                                '9': 'z\u00E1\u0159',
                                '1': 'led',
                                '2': '\u00FAno',
                                '3': 'b\u0159e',
                                '4': 'dub'
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
                                '8': 'srpna',
                                '7': '\u010Dervence',
                                '6': '\u010Dervna',
                                '5': 'kv\u011Btna',
                                '12': 'prosince',
                                '11': 'listopadu',
                                '10': '\u0159\u00EDjna',
                                '9': 'z\u00E1\u0159\u00ED',
                                '1': 'ledna',
                                '2': '\u00FAnora',
                                '3': 'b\u0159ezna',
                                '4': 'dubna'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'srp',
                                '7': '\u010Dvc',
                                '6': '\u010Dvn',
                                '5': 'kv\u011B',
                                '12': 'pro',
                                '11': 'lis',
                                '10': '\u0159\u00EDj',
                                '9': 'z\u00E1\u0159',
                                '1': 'led',
                                '2': '\u00FAno',
                                '3': 'b\u0159e',
                                '4': 'dub'
                            },
                            'narrow': {
                                '8': 's',
                                '7': '\u010D',
                                '6': '\u010D',
                                '5': 'k',
                                '12': 'p',
                                '11': 'l',
                                '10': '\u0159',
                                '9': 'z',
                                '1': 'l',
                                '2': '\u00FA',
                                '3': 'b',
                                '4': 'd'
                            },
                            'wide': {
                                '8': 'srpen',
                                '7': '\u010Dervenec',
                                '6': '\u010Derven',
                                '5': 'kv\u011Bten',
                                '12': 'prosinec',
                                '11': 'listopad',
                                '10': '\u0159\u00EDjen',
                                '9': 'z\u00E1\u0159\u00ED',
                                '1': 'leden',
                                '2': '\u00FAnor',
                                '3': 'b\u0159ezen',
                                '4': 'duben'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': '\u00FAt',
                                'wed': 'st',
                                'thu': '\u010Dt',
                                'fri': 'p\u00E1',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': '\u00DA',
                                'wed': 'S',
                                'thu': '\u010C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': '\u00FAt',
                                'wed': 'st',
                                'thu': '\u010Dt',
                                'fri': 'p\u00E1',
                                'sat': 'so'
                            },
                            'wide': {
                                'sun': 'ned\u011Ble',
                                'mon': 'pond\u011Bl\u00ED',
                                'tue': '\u00FAter\u00FD',
                                'wed': 'st\u0159eda',
                                'thu': '\u010Dtvrtek',
                                'fri': 'p\u00E1tek',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': '\u00FAt',
                                'wed': 'st',
                                'thu': '\u010Dt',
                                'fri': 'p\u00E1',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': '\u00DA',
                                'wed': 'S',
                                'thu': '\u010C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': '\u00FAt',
                                'wed': 'st',
                                'thu': '\u010Dt',
                                'fri': 'p\u00E1',
                                'sat': 'so'
                            },
                            'wide': {
                                'sun': 'ned\u011Ble',
                                'mon': 'pond\u011Bl\u00ED',
                                'tue': '\u00FAter\u00FD',
                                'wed': 'st\u0159eda',
                                'thu': '\u010Dtvrtek',
                                'fri': 'p\u00E1tek',
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
                                '1': '1. \u010Dtvrtlet\u00ED',
                                '2': '2. \u010Dtvrtlet\u00ED',
                                '3': '3. \u010Dtvrtlet\u00ED',
                                '4': '4. \u010Dtvrtlet\u00ED'
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
                                '1': '1. \u010Dtvrtlet\u00ED',
                                '2': '2. \u010Dtvrtlet\u00ED',
                                '3': '3. \u010Dtvrtlet\u00ED',
                                '4': '4. \u010Dtvrtlet\u00ED'
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
                            '0': 'p\u0159. n. l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n. l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'p\u0159. n. l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n. l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'p\u0159.n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd. M. y',
                        'short': 'dd.MM.yy'
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
                            'yMMM': 'LLLL y',
                            'yMEd': 'E d. M. y',
                            'yMd': 'd. M. y',
                            'yM': 'M/y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'MMMMEd': 'E d. MMMM',
                            'd': 'd.',
                            'GyMMMd': 'd. M. y G',
                            'GyMMMEd': 'E d. M. y G',
                            'GyMMMMd': 'd. MMMM y G',
                            'GyMMMMEd': 'E d. MMMM y G',
                            'h': 'h a',
                            'H': 'H',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMMEd': 'E d. MMMM y',
                            'yMMMMd': 'd. MMMM y',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E d. M. y',
                            'yMMMd': 'd. M. y',
                            'Hm': 'H:mm',
                            'Ed': 'E d.',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E H:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E H:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLLL y G',
                            'hms': 'h:mm:ss a',
                            'Hms': 'H:mm:ss',
                            'M': 'L',
                            'Md': 'd. M.',
                            'MEd': 'E d. M.',
                            'MMM': 'LLL',
                            'MMMd': 'd. M.',
                            'MMMEd': 'E d. M.',
                            'MMMMd': 'd. MMMM'
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
                                'd': 'E d. M. \u2013 E d. M.',
                                'M': 'E d. M. \u2013 E d. M.'
                            },
                            'MMMd': {
                                'd': 'd.\u2013d. M.',
                                'M': 'd. M. \u2013 d. M.'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E d. M. \u2013 E d. M.',
                                'M': 'E d. M. \u2013 E d. M.'
                            },
                            'Md': {
                                'd': 'd. M. \u2013 d. M.',
                                'M': 'd. M. \u2013 d. M.'
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
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'M/y \u2013 M/y',
                                'y': 'M/y \u2013 M/y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y \u2013 dd.MM.y',
                                'M': 'dd.MM.y \u2013 dd.MM.y',
                                'y': 'dd.MM.y \u2013 dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E dd.MM.y \u2013 E dd.MM.y',
                                'M': 'E dd.MM.y \u2013 E dd.MM.y',
                                'y': 'E dd.MM.y \u2013 E dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.\u2013d. M. y',
                                'M': 'd. M. \u2013 d. M. y',
                                'y': 'd. M. y \u2013 d. M. y'
                            },
                            'yMMMEd': {
                                'd': 'E d. M. \u2013 E d. M. y',
                                'M': 'E d. M. \u2013 E d. M. y',
                                'y': 'E d. M. y \u2013 E d. M. y'
                            },
                            'yMMMM': {
                                'M': 'LLLL\u2013LLLL y',
                                'y': 'LLLL y \u2013 LLLL y'
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
                                'd': 'd.\u2013d.'
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
