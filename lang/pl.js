/* AstroDate
 * Language: pl
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
        AstroDate.lang('pl', {
            'codePatterns': {
                'language': 'J\u0119zyk: {0}',
                'script': 'Pismo: {0}',
                'territory': 'Region: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Osobne sortowanie kana',
                    'yes': 'Inne sortowanie kana'
                },
                'colCaseLevel': {
                    'no': 'Sortowanie bez rozr\u00F3\u017Cniania wielko\u015Bci liter',
                    'yes': 'Sortowanie z rozr\u00F3\u017Cnianiem wielko\u015Bci liter'
                },
                'colCaseFirst': {
                    'lower': 'Sortowanie od ma\u0142ych liter',
                    'no': 'Sortowanie z zachowaniem zwyk\u0142ej kolejno\u015Bci wielko\u015Bci liter',
                    'upper': 'Sortowanie od wielkich liter'
                },
                'colStrength': {
                    'identical': 'Sortuj wszystko',
                    'primary': 'Sortowanie tylko liter podstawowych',
                    'quaternary': 'Sortowanie znak\u00F3w akcentowanych/wielko\u015Bci liter/szeroko\u015Bci/kana',
                    'secondary': 'Sortowanie znak\u00F3w akcentowanych',
                    'tertiary': 'Sortowanie znak\u00F3w akcentowanych/wielko\u015Bci liter/szeroko\u015Bci'
                },
                'colNumeric': {
                    'no': 'Oddzielne sortowanie cyfr',
                    'yes': 'Numeryczne sortowanie cyfr'
                },
                'colNormalization': {
                    'no': 'Sortowanie bez normalizacji',
                    'yes': 'Sortowanie z normalizacj\u0105 unicode'
                },
                'calendar': {
                    'japanese': 'kalendarz japo\u0144ski',
                    'iso8601': 'iso8601',
                    'coptic': 'Kalendarz koptyjski',
                    'dangi': 'dangi',
                    'ethiopic': 'Kalendarz etiopski',
                    'ethiopic-amete-alem': 'Kalendarz etiopski Amete Alem',
                    'gregorian': 'kalendarz gregoria\u0144ski',
                    'hebrew': 'kalendarz hebrajski',
                    'persian': 'Kalendarz perski',
                    'roc': 'kalendarz Republiki Chi\u0144skiej',
                    'chinese': 'kalendarz chi\u0144ski',
                    'buddhist': 'kalendarz buddyjski',
                    'indian': 'narodowy kalendarz hinduski',
                    'islamic': 'kalendarz islamski (metoda wzrokowa)',
                    'islamic-civil': 'kalendarz islamski (metoda obliczeniowa)',
                    'islamic-rgsa': 'kalendarz islamski (Arabia Saudyjska, metoda wzrokowa)',
                    'islamic-tbla': 'kalendarz islamski (metoda obliczeniowa, epoka astronomiczna)',
                    'islamic-umalqura': 'kalendarz islamski (Umm al-Kura)'
                },
                'collation': {
                    'phonebook': 'porz\u0105dek sortowania ksi\u0105\u017Cki telefonicznej',
                    'gb2312han': 'chi\u0144ski uproszczony porz\u0105dek sortowania - GB2312',
                    'eor': 'europejskie regu\u0142y okre\u015Blania kolejno\u015Bci',
                    'ducet': 'Domy\u015Blna kolejno\u015B\u0107 sortowania Unicode',
                    'dictionary': 'sortowanie s\u0142ownikowe',
                    'big5han': 'chi\u0144ski tradycyjny porz\u0105dek sortowania - Big5',
                    'traditional': 'tradycyjny porz\u0105dek sortowania',
                    'standard': 'sortowanie standardowe',
                    'zhuyin': 'zhuyin',
                    'unihan': 'sortowanie wg kluczy i ich liczby kresek',
                    'stroke': 'porz\u0105dek akcent\u00F3w',
                    'searchjl': 'Wyszukiwanie wed\u0142ug pocz\u0105tkowej sp\u00F3\u0142g\u0142oski hangul',
                    'search': 'uniwersalny porz\u0105dek sortowania',
                    'reformed': 'sortowanie zreformowane',
                    'pinyin': 'porz\u0105dek sortowania pinyin',
                    'phonetic': 'sortowanie fonetyczne'
                },
                'numbers': {
                    'knda': 'cyfry kannada',
                    'khmr': 'cyfry khmerskie',
                    'kali': 'kali',
                    'jpanfin': 'japo\u0144skie cyfry ksi\u0119gowe',
                    'jpan': 'cyfry japo\u0144skie',
                    'java': 'java',
                    'hebr': 'cyfry hebrajskie',
                    'hantfin': 'tradycyjne chi\u0144skie cyfry ksi\u0119gowe',
                    'hant': 'tradycyjne cyfry chi\u0144skie',
                    'hansfin': 'uproszczone chi\u0144skie cyfry ksi\u0119gowe',
                    'hans': 'uproszczone cyfry chi\u0144skie',
                    'hanidec': 'chi\u0144skie cyfry dziesi\u0119tne',
                    'guru': 'cyfry gurmukhi',
                    'gujr': 'cyfry gud\u017Carati',
                    'greklow': 'cyfry greckie (ma\u0142e litery)',
                    'grek': 'cyfry greckie',
                    'bali': 'bali',
                    'armnlow': 'cyfry ormia\u0144skie (ma\u0142e litery)',
                    'armn': 'cyfry ormia\u0144skie',
                    'arabext': 'rozszerzone cyfry arabsko-indyjskie',
                    'arab': 'cyfry arabsko-indyjskie',
                    'finance': 'Liczebniki ksi\u0119gowe',
                    'traditional': 'Liczebniki tradycyjne',
                    'native': 'Cyfry macierzyste',
                    'beng': 'cyfry bengalskie',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'cyfry dewanagari',
                    'orya': 'cyfry orija',
                    'osma': 'osma',
                    'roman': 'cyfry rzymskie',
                    'romanlow': 'cyfry rzymskie (ma\u0142e litery)',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Cyfry vai',
                    'tibt': 'cyfry tybeta\u0144skie',
                    'thai': 'cyfry tajskie',
                    'telu': 'cyfry telugu',
                    'tamldec': 'cyfry tamilskie',
                    'taml': 'cyfry tamilskie',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'cyfry birma\u0144skie',
                    'mtei': 'mtei',
                    'mong': 'Cyfry mongolskie',
                    'mlym': 'cyfry malajalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'cyfry arabskie',
                    'laoo': 'cyfry laota\u0144skie',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'cyfry gruzi\u0144skie',
                    'fullwide': 'cyfry o pe\u0142nej szeroko\u015Bci',
                    'ethi': 'cyfry etiopskie'
                },
                'colAlternate': {
                    'non-ignorable': 'Sortowanie symboli',
                    'shifted': 'Sortowanie ignoruj\u0105ce symbole'
                },
                'colBackwards': {
                    'no': 'Zwyk\u0142e sortowanie znak\u00F3w akcentowanych',
                    'yes': 'Sortowanie znak\u00F3w akcentowanych w odwr\u00F3conej kolejno\u015Bci'
                }
            },
            'keys': {
                'colNormalization': 'Sortowanie znormalizowane',
                'collation': 'Porz\u0105dek sortowania',
                'colHiraganaQuaternary': 'Sortowanie Kana',
                'colCaseLevel': 'Sortowanie uwzgl\u0119dniaj\u0105ce wielko\u015B\u0107 liter',
                'colCaseFirst': 'Porz\u0105dek wielkie/ma\u0142e litery',
                'colBackwards': 'Odwrotne sortowanie ze znakami akcentowanymi',
                'colAlternate': 'Sortowanie ignoruj\u0105ce symbole',
                'calendar': 'kalendarz',
                'x': 'Do prywatnego u\u017Cytku',
                'variableTop': 'Sortuj jak symbole',
                'va': 'Wariant regionalny',
                'timezone': 'Strefa czasowa',
                'numbers': 'cyfry',
                'currency': 'waluta',
                'colStrength': 'Si\u0142a sortowania',
                'colNumeric': 'Sortowanie numeryczne'
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
                            'exemplarCity': 'Wyspy Pitcairn'
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
                            'exemplarCity': 'Wyspa Wielkanocna'
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
                            'exemplarCity': 'Fid\u017Ci'
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
                            'exemplarCity': 'Markizy'
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
                            'exemplarCity': 'Numea'
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
                            'exemplarCity': 'Wyspa Lord Howe'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Adelajda'
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
                            'exemplarCity': 'Malediwy'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Wyspy Kerguelena'
                        },
                        'Reunion': {
                            'exemplarCity': 'R\u00E9union'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Majotta'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauritius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarywa'
                        },
                        'Chagos': {
                            'exemplarCity': 'Czagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Wyspa Bo\u017Cego Narodzenia'
                        },
                        'Cocos': {
                            'exemplarCity': 'Wyspy Kokosowe'
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
                            'exemplarCity': 'Nieznane'
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
                            'exemplarCity': 'Stacja Naukowa Rothera'
                        },
                        'Palmer': {
                            'exemplarCity': 'Archipelag Palmera'
                        },
                        'McMurdo': {
                            'exemplarCity': 'Mc Murdo'
                        },
                        'Vostok': {
                            'exemplarCity': 'Stacja Wostok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Stacja Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Biegun po\u0142udniowy'
                        },
                        'Casey': {
                            'exemplarCity': 'Stacja Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Stacja Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d\u2019Urville'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Macquarie'
                        },
                        'Mawson': {
                            'exemplarCity': 'Wybrze\u017Ce Mawsona'
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
                            'exemplarCity': 'Qaanaaq'
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
                            'exemplarCity': 'Kajmany'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Kajenna'
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
                            'exemplarCity': 'Salvador'
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
                                'exemplarCity': 'Vincennes'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Petersburg'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Tell City, Indiana'
                            },
                            'Knox': {
                                'exemplarCity': 'Knox'
                            },
                            'Winamac': {
                                'exemplarCity': 'Winamac'
                            },
                            'Marengo': {
                                'exemplarCity': 'Marengo'
                            },
                            'Vevay': {
                                'exemplarCity': 'Vevay'
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
                                'exemplarCity': 'Monticello'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Hawana'
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Gujana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Gwatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Gwadelupa'
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
                            'exemplarCity': 'Salwador'
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
                            'exemplarCity': 'Kordoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Kostaryka'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiab\u00E1'
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
                            'exemplarCity': 'Macei\u00F3'
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
                            'exemplarCity': 'Martynika'
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
                            'exemplarCity': 'Meksyk (miasto)'
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
                            'exemplarCity': 'Nowy Jork'
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
                                'exemplarCity': 'Beulah, Dakota P\u00F3\u0142nocna'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota P\u00F3\u0142nocna'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Dakota P\u00F3\u0142nocna'
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
                            'exemplarCity': 'Port-of-Spain'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Porto Velho'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Portoryko'
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
                            'exemplarCity': 'Saint-Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Saint Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Saint Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Saint Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Saint Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Georgia Po\u0142udniowa'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Rejkiawik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u015Awi\u0119ta Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azory'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudy'
                        },
                        'Canary': {
                            'exemplarCity': 'Wyspy Kanaryjskie'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Zielony Przyl\u0105dek'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Wyspy Owcze'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madera'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'Moskwa'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monako'
                        },
                        'Minsk': {
                            'exemplarCity': 'Mi\u0144sk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Maarianhamina'
                        },
                        'Malta': {
                            'exemplarCity': 'Malta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madryt'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luksemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Brytyjski czas letni'
                            },
                            'exemplarCity': 'Londyn'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Lublana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lizbona'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kij\u00F3w'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kaliningrad'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Stambu\u0142'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Wyspa Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukareszt'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruksela'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratys\u0142awa'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Ateny'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andora'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amsterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Symferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sofia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Sztokholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallin'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'U\u017Cgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zurych'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporo\u017Ce'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagrzeb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Warszawa'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Wo\u0142gograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Wilno'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wiede\u0144'
                        },
                        'Vatican': {
                            'exemplarCity': 'Watykan'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajewo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'Rzym'
                        },
                        'Riga': {
                            'exemplarCity': 'Ryga'
                        },
                        'Prague': {
                            'exemplarCity': 'Praga'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Pary\u017C'
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
                                'daylight': 'Irlandia (czas letni)'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kopenhaga'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Kiszyni\u00F3w'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapeszt'
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
                            'exemplarCity': 'Kinszasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Chartum'
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
                            'exemplarCity': 'Ujun'
                        },
                        'Douala': {
                            'exemplarCity': 'Duala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'D\u017Cibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es-Salaam'
                        },
                        'Dakar': {
                            'exemplarCity': 'Dakar'
                        },
                        'Banjul': {
                            'exemplarCity': 'Band\u017Cul'
                        },
                        'Bangui': {
                            'exemplarCity': 'Bangi'
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
                            'exemplarCity': 'Mogadiszu'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Nd\u017Camena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhuk'
                        },
                        'Tunis': {
                            'exemplarCity': 'Tunis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Trypolis'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'S\u00E3o Tom\u00E9'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Wagadugu'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nawakszut'
                        },
                        'Niamey': {
                            'exemplarCity': 'Niamej'
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
                            'exemplarCity': 'Konakri'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Ceuta'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Casablanca'
                        },
                        'Cairo': {
                            'exemplarCity': 'Kair'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Bu\u017Cumbura'
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
                            'exemplarCity': 'Abid\u017Can'
                        },
                        'Accra': {
                            'exemplarCity': 'Akra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Algier'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Szanghaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sachalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh (miasto)'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangun'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kyzy\u0142 Orda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pjongjang'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom Penh'
                        },
                        'Oral': {
                            'exemplarCity': 'Uralsk'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Nowosybirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Czunking'
                        },
                        'Colombo': {
                            'exemplarCity': 'Kolombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damaszek'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dakka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubaj'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duszanbe'
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
                            'exemplarCity': 'Howd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkuck'
                        },
                        'Jakarta': {
                            'exemplarCity': 'D\u017Cakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'U\u0142an Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumczi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Wientian'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'W\u0142adywostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakuck'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterynburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erywa\u0144'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teheran'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taszkient'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tajpej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerozolima'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Aszchabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktiubi\u0144sk'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'A\u0142ma Ata'
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
                            'exemplarCity': 'Bejrut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Biszkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkuta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Czojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamczatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karaczi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kaszgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
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
                            'exemplarCity': 'Kuczing'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuwejt'
                        },
                        'Macau': {
                            'exemplarCity': 'Makau'
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
                            'exemplarCity': 'Nikozja'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Nowoku\u017Anieck'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tad\u017Cykistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tajpej',
                            'standard': 'Tajpej (czas standardowy)',
                            'daylight': 'Tajpej (czas letni)'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinam'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Georgia Po\u0142udniowa'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Wyspy Salomona'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapur'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seszele'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa',
                            'standard': 'Samoa (czas standardowy)',
                            'daylight': 'Samoa (czas letni)'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Czas Samara',
                            'standard': 'Czas standardowy Samara',
                            'daylight': 'Czas Samara letni'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalin',
                            'standard': 'Sachalin (czas standardowy)',
                            'daylight': 'Sachalin (czas letni)'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunion'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Czas atlantycki',
                            'standard': 'Czas standardowy atlantycki',
                            'daylight': 'Czas atlantycki letni'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Czas \u015Brodkowoameryka\u0144ski',
                            'standard': 'Czas \u015Brodkowoameryka\u0144ski standardowy',
                            'daylight': 'Czas \u015Brodkowoameryka\u0144ski letni'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Czas amazo\u0144ski',
                            'standard': 'Czas amazo\u0144ski standardowy',
                            'daylight': 'Czas amazo\u0144ski letni'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Czas Alaska',
                            'standard': 'Alaska (czas standardowy)',
                            'daylight': 'Alaska (czas letni)'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Czas zachodnioafryka\u0144ski',
                            'standard': 'Czas zachodnioafryka\u0144ski standardowy',
                            'daylight': 'Czas zachodnioafryka\u0144ski letni'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Czas po\u0142udniowoafryka\u0144ski'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Czas wschodnioafryka\u0144ski'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Czas \u015Brodkowoafryka\u0144ski'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistan'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Czas wschodnioameryka\u0144ski',
                            'standard': 'Czas wschodnioameryka\u0144ski standardowy',
                            'daylight': 'Czas wschodnioameryka\u0144ski letni'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Czas g\u00F3rski',
                            'standard': 'Czas g\u00F3rski standardowy',
                            'daylight': 'Czas g\u00F3rski letni'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Czas pacyficzny',
                            'standard': 'Czas pacyficzny standardowy',
                            'daylight': 'Czas pacyficzny letni'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Czas Anadyr',
                            'standard': 'Czas standardowy Anadyr',
                            'daylight': 'Czas Anadyr letni'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'P\u00F3\u0142wysep Arabski',
                            'standard': 'P\u00F3\u0142wysep Arabski (czas standardowy)',
                            'daylight': 'P\u00F3\u0142wysep Arabski (czas letni)'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Czas argenty\u0144ski',
                            'standard': 'Argentyna (czas standardowy)',
                            'daylight': 'Argentyna (czas letni)'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Argentyna Zachodnia',
                            'standard': 'Argentyna Zachodnia (czas standardowy)',
                            'daylight': 'Argentyna Zachodnia (czas letni)'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenia',
                            'standard': 'Armenia (czas standardowy)',
                            'daylight': 'Armenia (czas letni)'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Chiny',
                            'standard': 'Chiny (czas standardowy)',
                            'daylight': 'Chiny (czas letni)'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Czojbalsan',
                            'standard': 'Czojbalsan (czas standardowy)',
                            'daylight': 'Czojbalsan (czas letni)'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Wyspa Bo\u017Cego Narodzenia'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Wyspy Kokosowe'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbia',
                            'standard': 'Kolumbia (czas standardowy)',
                            'daylight': 'Kolumbia (czas letni)'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Wyspy Cooka',
                            'standard': 'Wyspy Cooka (czas standardowy)',
                            'daylight': 'Wyspy Cooka (czas letni)'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kuba',
                            'standard': 'Kuba (czas standardowy)',
                            'daylight': 'Kuba (czas letni)'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Timor Wschodni'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Wyspa Wielkanocna',
                            'standard': 'Wyspa Wielkanocna (czas standardowy)',
                            'daylight': 'Wyspa Wielkanocna (czas letni)'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekwador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Czas \u015Brodkowoeuropejski',
                            'standard': 'Czas \u015Brodkowoeuropejski standardowy',
                            'daylight': 'Czas \u015Brodkowoeuropejski letni'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Czas wschodnioeuropejski',
                            'standard': 'Czas wschodnioeuropejski standardowy',
                            'daylight': 'Czas wschodnioeuropejski letni'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Czas zachodnioeuropejski',
                            'standard': 'Czas zachodnioeuropejski standardowy',
                            'daylight': 'Czas zachodnioeuropejski letni'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Czas indyjski'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonga',
                            'standard': 'Tonga (czas standardowy)',
                            'daylight': 'Tonga (czas letni)'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistan',
                            'standard': 'Turkmenistan (czas standardowy)',
                            'daylight': 'Turkmenistan (czas letni)'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Urugwaj',
                            'standard': 'Urugwaj (czas standardowy)',
                            'daylight': 'Urugwaj (czas letni)'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistan',
                            'standard': 'Uzbekistan (czas standardowy)',
                            'daylight': 'Uzbekistan (czas letni)'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu',
                            'standard': 'Vanuatu (czas standardowy)',
                            'daylight': 'Vanuatu (czas letni)'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterynburg',
                            'standard': 'Jekaterynburg (czas standardowy)',
                            'daylight': 'Jekaterynburg (czas letni)'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakuck',
                            'standard': 'Jakuck (czas standardowy)',
                            'daylight': 'Jakuck (czas letni)'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis i Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Wostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Wo\u0142gograd',
                            'standard': 'Wo\u0142gograd (czas standardowy)',
                            'daylight': 'Wo\u0142gograd (czas letni)'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'W\u0142adywostok',
                            'standard': 'W\u0142adywostok (czas standardowy)',
                            'daylight': 'W\u0142adywostok (czas letni)'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Wenezuela'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Kobdo',
                            'standard': 'Kobdo (czas standardowy)',
                            'daylight': 'Kobdo (czas letni)'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkong',
                            'standard': 'Hongkong (czas standardowy)',
                            'daylight': 'Hongkong (czas letni)'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaje-Aleuty',
                            'standard': 'Hawaje-Aleuty (czas standardowy)',
                            'daylight': 'Hawaje-Aleuty (czas letni)'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Gujana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Zatoka Perska'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Grenlandia Zachodnia',
                            'standard': 'Grenlandia Zachodnia (czas standardowy)',
                            'daylight': 'Grenlandia Zachodnia (czas letni)'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Grenlandia Wschodnia',
                            'standard': 'Grenlandia Wschodnia (czas standardowy)',
                            'daylight': 'Grenlandia Wschodnia (czas letni)'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Czas uniwersalny'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Wyspy Gilberta'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruzja',
                            'standard': 'Gruzja (czas standardowy)',
                            'daylight': 'Gruzja (czas letni)'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francuskie Terytoria Po\u0142udniowe i Antarktyczne'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Gujana Francuska'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fid\u017Ci',
                            'standard': 'Fid\u017Ci (czas standardowy)',
                            'daylight': 'Fid\u017Ci (czas letni)'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandy',
                            'standard': 'Falklandy (czas standardowy)',
                            'daylight': 'Falklandy (czas letni)'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Czas \u015Brodkowoaustralijski',
                            'standard': 'Czas \u015Brodkowoaustralijski standardowy',
                            'daylight': 'Czas \u015Brodkowoaustralijski letni'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Czas \u015Brodkowo-zachodnioaustralijski',
                            'standard': 'Czas \u015Brodkowo-zachodnioaustralijski standardowy',
                            'daylight': 'Czas \u015Brodkowo-zachodnioaustralijski letni'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Czas wschodnioaustraliski',
                            'standard': 'Czas standardowy wschodnioaustraliski',
                            'daylight': 'Czas wschodnioaustraliski letni'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Czas zachodnioaustralijski',
                            'standard': 'Czas zachodnioaustralijski standardowy',
                            'daylight': 'Czas zachodnioaustralijski letni'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbejd\u017Can',
                            'standard': 'Azerbejd\u017Can (czas standardowy)',
                            'daylight': 'Azerbejd\u017Can (czas letni)'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azory',
                            'standard': 'Azory (czas standardowy)',
                            'daylight': 'Azory (czas letni)'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladesz',
                            'standard': 'Bangladesz (czas standardowy)',
                            'daylight': 'Bangladesz (czas letni)'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Boliwia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Bras\u00EDlia',
                            'standard': 'Bras\u00EDlia (czas standardowy)',
                            'daylight': 'Bras\u00EDlia (czas letni)'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Republika Zielonego Przyl\u0105dka',
                            'standard': 'Republika Zielonego Przyl\u0105dka (czas standardowy)',
                            'daylight': 'Republika Zielonego Przyl\u0105dka (czas letni)'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Czamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham',
                            'standard': 'Chatham (czas standardowy)',
                            'daylight': 'Chatham (czas letni)'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chile',
                            'standard': 'Chile (czas standardowy)',
                            'daylight': 'Chile (czas letni)'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Ocean Indyjski'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Czas indochi\u0144ski'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Indonezja \u015Arodkowa'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Indonezja Wschodnia'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Indonezja Zachodnia'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iran',
                            'standard': 'Iran (czas standardowy)',
                            'daylight': 'Iran (czas letni)'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkuck',
                            'standard': 'Irkuck (czas standardowy)',
                            'daylight': 'Irkuck (czas letni)'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izrael',
                            'standard': 'Izrael (czas standardowy)',
                            'daylight': 'Izrael (czas letni)'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonia',
                            'standard': 'Japonia (czas standardowy)',
                            'daylight': 'Japonia (czas letni)'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Czas Pietropaw\u0142owsk Kamczacki',
                            'standard': 'Czas standardowy Pietropaw\u0142owsk Kamczacki',
                            'daylight': 'Czas Pietropaw\u0142owsk Kamczacki letni'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Kazachstan Wschodni'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Kazachstan Zachodni'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korea',
                            'standard': 'Korea (czas standardowy)',
                            'daylight': 'Korea (czas letni)'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsk',
                            'standard': 'Krasnojarsk (czas standardowy)',
                            'daylight': 'Krasnojarsk (czas letni)'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgistan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Sporady \u015Arodkowopolinezyjskie'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe',
                            'standard': 'Lord Howe (czas standardowy)',
                            'daylight': 'Lord Howe (czas letni)'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan',
                            'standard': 'Magadan (czas standardowy)',
                            'daylight': 'Magadan (czas letni)'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malezja'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Malediwy'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Markizy'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Wyspy Marshalla'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius',
                            'standard': 'Mauritius (czas standardowy)',
                            'daylight': 'Mauritius (czas letni)'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'U\u0142an Bator',
                            'standard': 'U\u0142an Bator (czas standardowy)',
                            'daylight': 'U\u0142an Bator (czas letni)'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Czas moskiewski',
                            'standard': 'Czas moskiewski standardowy',
                            'daylight': 'Czas moskiewski letni'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mjanma'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nowa Kaledonia',
                            'standard': 'Nowa Kaledonia (czas standardowy)',
                            'daylight': 'Nowa Kaledonia (czas letni)'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Nowa Zelandia',
                            'standard': 'Nowa Zelandia (czas standardowy)',
                            'daylight': 'Nowa Zelandia (czas letni)'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Czas nowofunlandzki',
                            'standard': 'Nowa Fundlandia (czas standardowy)',
                            'daylight': 'Nowa Fundlandia (czas letni)'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha',
                            'standard': 'Fernando de Noronha (czas standardowy)',
                            'daylight': 'Fernando de Noronha (czas letni)'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Nowosybirsk',
                            'standard': 'Nowosybirsk (czas standardowy)',
                            'daylight': 'Nowosybirsk (czas letni)'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk',
                            'standard': 'Omsk (czas standardowy)',
                            'daylight': 'Omsk (czas letni)'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistan',
                            'standard': 'Pakistan (czas standardowy)',
                            'daylight': 'Pakistan (czas letni)'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua-Nowa Gwinea'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paragwaj',
                            'standard': 'Paragwaj (czas standardowy)',
                            'daylight': 'Paragwaj (czas letni)'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peru',
                            'standard': 'Peru (czas standardowy)',
                            'daylight': 'Peru (czas letni)'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipiny',
                            'standard': 'Filipiny (czas standardowy)',
                            'daylight': 'Filipiny (czas letni)'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Feniks'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint-Pierre i Miquelon',
                            'standard': 'Saint-Pierre i Miquelon (czas standardowy)',
                            'daylight': 'Saint-Pierre i Miquelon (czas letni)'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairn'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Pohnpei'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Czas: {0}',
                'regionFormat-type-daylight': '{0} (czas letni)',
                'regionFormat-type-standard': '{0} (czas standardowy)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'sie',
                                '7': 'lip',
                                '6': 'cze',
                                '5': 'maj',
                                '12': 'gru',
                                '11': 'lis',
                                '10': 'pa\u017A',
                                '9': 'wrz',
                                '1': 'sty',
                                '2': 'lut',
                                '3': 'mar',
                                '4': 'kwi'
                            },
                            'narrow': {
                                '8': 's',
                                '7': 'l',
                                '6': 'c',
                                '5': 'm',
                                '12': 'g',
                                '11': 'l',
                                '10': 'p',
                                '9': 'w',
                                '1': 's',
                                '2': 'l',
                                '3': 'm',
                                '4': 'k'
                            },
                            'wide': {
                                '8': 'sierpnia',
                                '7': 'lipca',
                                '6': 'czerwca',
                                '5': 'maja',
                                '12': 'grudnia',
                                '11': 'listopada',
                                '10': 'pa\u017Adziernika',
                                '9': 'wrze\u015Bnia',
                                '1': 'stycznia',
                                '2': 'lutego',
                                '3': 'marca',
                                '4': 'kwietnia'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'sie',
                                '7': 'lip',
                                '6': 'cze',
                                '5': 'maj',
                                '12': 'gru',
                                '11': 'lis',
                                '10': 'pa\u017A',
                                '9': 'wrz',
                                '1': 'sty',
                                '2': 'lut',
                                '3': 'mar',
                                '4': 'kwi'
                            },
                            'narrow': {
                                '8': 's',
                                '7': 'l',
                                '6': 'c',
                                '5': 'm',
                                '12': 'g',
                                '11': 'l',
                                '10': 'p',
                                '9': 'w',
                                '1': 's',
                                '2': 'l',
                                '3': 'm',
                                '4': 'k'
                            },
                            'wide': {
                                '8': 'sierpie\u0144',
                                '7': 'lipiec',
                                '6': 'czerwiec',
                                '5': 'maj',
                                '12': 'grudzie\u0144',
                                '11': 'listopad',
                                '10': 'pa\u017Adziernik',
                                '9': 'wrzesie\u0144',
                                '1': 'stycze\u0144',
                                '2': 'luty',
                                '3': 'marzec',
                                '4': 'kwiecie\u0144'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': '\u015Br.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'W',
                                'wed': '\u015A',
                                'thu': 'C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': '\u015Br.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'niedziela',
                                'mon': 'poniedzia\u0142ek',
                                'tue': 'wtorek',
                                'wed': '\u015Broda',
                                'thu': 'czwartek',
                                'fri': 'pi\u0105tek',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': '\u015Br.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'W',
                                'wed': '\u015A',
                                'thu': 'C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': '\u015Br.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'niedziela',
                                'mon': 'poniedzia\u0142ek',
                                'tue': 'wtorek',
                                'wed': '\u015Broda',
                                'thu': 'czwartek',
                                'fri': 'pi\u0105tek',
                                'sat': 'sobota'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'K1',
                                '2': 'K2',
                                '3': 'K3',
                                '4': 'K4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'I kwarta\u0142',
                                '2': 'II kwarta\u0142',
                                '3': 'III kwarta\u0142',
                                '4': 'IV kwarta\u0142'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1 kw.',
                                '2': '2 kw.',
                                '3': '3 kw.',
                                '4': '4 kw.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'I kwarta\u0142',
                                '2': 'II kwarta\u0142',
                                '3': 'III kwarta\u0142',
                                '4': 'IV kwarta\u0142'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'noon': 'w po\u0142udnie',
                                'pm': 'PM',
                                'afternoon': 'po po\u0142udniu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed po\u0142udniem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'narrow': {
                                'noon': 'w po\u0142udnie',
                                'pm': 'PM',
                                'afternoon': 'po po\u0142udniu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed po\u0142udniem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'wide': {
                                'noon': 'w po\u0142udnie',
                                'pm': 'PM',
                                'afternoon': 'po po\u0142udniu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed po\u0142udniem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'noon': 'w po\u0142udnie',
                                'pm': 'PM',
                                'afternoon': 'po po\u0142udniu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed po\u0142udniem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'narrow': {
                                'noon': 'w po\u0142udnie',
                                'pm': 'PM',
                                'afternoon': 'po po\u0142udniu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed po\u0142udniem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'wide': {
                                'noon': 'w po\u0142udnie',
                                'pm': 'PM',
                                'afternoon': 'po po\u0142udniu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed po\u0142udniem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'p.n.e.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.e.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'p.n.e.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.e.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'p.n.e.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.e.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd.MM.y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMMd': 'd MMM y',
                            'yMMM': 'LLL y',
                            'yMM': 'MM.y',
                            'yMEd': 'E, d.MM.y',
                            'EHm': 'E, HH:mm',
                            'Ehm': 'E, h:mm a',
                            'Ed': 'E, d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd.MM',
                            'MEd': 'E, d.MM',
                            'MMdd': 'd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'MM.y',
                            'yMd': 'd.MM.y'
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
                                'M': 'E, d MMM - E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'LLL\u2013LLL'
                            },
                            'MEd': {
                                'd': 'E, dd.MM \u2013 E, dd.MM',
                                'M': 'E, dd.MM \u2013 E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM\u2013dd.MM',
                                'M': 'dd.MM\u2013dd.MM'
                            },
                            'M': {
                                'M': 'MM-MM'
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
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMd': {
                                'd': 'dd-dd.MM.y',
                                'M': 'dd.MM-dd.MM.y',
                                'y': 'dd.MM.y-dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y - E, dd.MM.y',
                                'M': 'E, dd.MM.y - E, dd.MM.y',
                                'y': 'E, dd.MM.y - E, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y',
                                'y': 'LLL y - LLL y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d - E, d MMM y',
                                'M': 'E, d MMM - E, d MMM y',
                                'y': 'E, d MMM y - E, d MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL y',
                                'y': 'LLLL y - LLLL y'
                            },
                            'Hmv': {
                                'H': 'HH:mm\u2013HH:mm v',
                                'm': 'HH:mm\u2013HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm-h:mm a v'
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
