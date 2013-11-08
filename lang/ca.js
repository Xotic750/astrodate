/* AstroDate
 * Language: ca
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
        AstroDate.lang('ca', {
            'codePatterns': {
                'language': 'Idioma: {0}',
                'script': 'Escriptura: {0}',
                'territory': 'Regi\u00F3: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordena els car\u00E0cters kana de manera independent',
                    'yes': 'Ordena els car\u00E0cters kana de manera diferent'
                },
                'colCaseLevel': {
                    'no': 'Ordena sense distingir maj\u00FAscules i min\u00FAscules',
                    'yes': 'Ordena amb detecci\u00F3 de maj\u00FAscules i min\u00FAscules'
                },
                'colCaseFirst': {
                    'lower': 'Mostra primer les min\u00FAscules',
                    'no': 'Ordena per tipus de lletra normal',
                    'upper': 'Ordena amb maj\u00FAscules primer'
                },
                'colStrength': {
                    'identical': 'Ordena-ho tot',
                    'primary': 'Ordena nom\u00E9s les lletres de base',
                    'quaternary': 'Ordena per accents/maj\u00FAscules/amplada/kana',
                    'secondary': 'Ordena els accents',
                    'tertiary': 'Ordena per accent/maj\u00FAscules/amplada'
                },
                'colNumeric': {
                    'no': 'Ordena els d\u00EDgits individualment',
                    'yes': 'Ordena els d\u00EDgits num\u00E8ricament'
                },
                'colNormalization': {
                    'no': 'Ordena sense normalitzaci\u00F3',
                    'yes': 'Ordena per car\u00E0cters Unicode normalitzats'
                },
                'calendar': {
                    'japanese': 'calendari japon\u00E8s',
                    'iso8601': 'iso8601',
                    'coptic': 'calendari copte',
                    'dangi': 'dangi',
                    'ethiopic': 'calendari et\u00EDop',
                    'ethiopic-amete-alem': 'calendari et\u00EDop amete-alem',
                    'gregorian': 'calendari gregori\u00E0',
                    'hebrew': 'calendari hebreu',
                    'persian': 'calendari persa',
                    'roc': 'calendari de la Rep\u00FAblica de Xina',
                    'chinese': 'calendari xin\u00E8s',
                    'buddhist': 'calendari budista',
                    'indian': 'calendari hind\u00FA',
                    'islamic': 'calendari musulm\u00E0',
                    'islamic-civil': 'calendari civil isl\u00E0mic',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'ordre de la guia telef\u00F2nica',
                    'gb2312han': 'ordre del xin\u00E8s simplificat - GB2312',
                    'eor': "normes europees d'ordenaci\u00F3",
                    'ducet': 'ordenaci\u00F3 Unicode predeterminada',
                    'dictionary': 'ordenaci\u00F3 de diccionari',
                    'big5han': 'ordre del xin\u00E8s tradicional - Big5',
                    'traditional': 'ordre tradicional',
                    'standard': 'ordenaci\u00F3 est\u00E0ndard',
                    'zhuyin': 'zhuyin',
                    'unihan': 'ordenaci\u00F3 per quantitat de tra\u00E7os radicals',
                    'stroke': 'ordre dels tra\u00E7os',
                    'searchjl': 'cerca per consonant inicial del hangul',
                    'search': 'cerca de prop\u00F2sit general',
                    'reformed': 'ordenaci\u00F3 reformada',
                    'pinyin': 'ordre pinyin',
                    'phonetic': 'Ordenaci\u00F3 fon\u00E8tica'
                },
                'numbers': {
                    'knda': 'd\u00EDgits kannada',
                    'khmr': 'd\u00EDgits khmer',
                    'kali': 'd\u00EDgits kayah',
                    'jpanfin': 'numerals financers japonesos',
                    'jpan': 'numerals japonesos',
                    'java': 'd\u00EDgits javanesos',
                    'hebr': 'numerals hebreus',
                    'hantfin': 'numerals financers xinesos tradicionals',
                    'hant': 'numerals xinesos tradicionals',
                    'hansfin': 'numerals financers xinesos simplificats',
                    'hans': 'numerals xinesos simplificats',
                    'hanidec': 'numerals decimals xinesos',
                    'guru': 'd\u00EDgits gurmukhi',
                    'gujr': 'd\u00EDgits gujarati',
                    'greklow': 'numerals grecs en min\u00FAscules',
                    'grek': 'numerals grecs',
                    'bali': 'd\u00EDgits balinesos',
                    'armnlow': 'numerals armenis en min\u00FAscules',
                    'armn': 'numerals armenis',
                    'arabext': 'd\u00EDgits \u00E0rabs i \u00EDndics ampliats',
                    'arab': 'd\u00EDgits \u00E0rabs i \u00EDndics',
                    'finance': 'Numerals financers',
                    'traditional': 'Numerals tradicionals',
                    'native': 'D\u00EDgits natius',
                    'beng': 'd\u00EDgits bengalins',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'd\u00EDgits txams',
                    'deva': 'd\u00EDgits devanagaris',
                    'orya': 'd\u00EDgits oriya',
                    'osma': 'osma',
                    'roman': 'numerals romans',
                    'romanlow': 'numerals romans en min\u00FAscules',
                    'saur': 'd\u00EDgits saurashtra',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'd\u00EDgits sudanesos',
                    'vaii': 'd\u00EDgits vai',
                    'tibt': 'd\u00EDgits tibetans',
                    'thai': 'd\u00EDgits thai',
                    'telu': 'd\u00EDgits telugu',
                    'tamldec': 'd\u00EDgits tamils',
                    'taml': 'numerals tamils tradicionals',
                    'talu': 'd\u00EDgits tai lue nous',
                    'takr': 'takr',
                    'olck': 'd\u00EDgits ol chiki',
                    'nkoo': "d\u00EDgits n'ko",
                    'mymrshan': 'd\u00EDgits shan de Myanmar',
                    'mymr': 'd\u00EDgits de Myanmar',
                    'mtei': 'd\u00EDgits meitei mayek',
                    'mong': 'd\u00EDgits mongols',
                    'mlym': 'd\u00EDgits malai\u00E0lam',
                    'limb': 'd\u00EDgits limbu',
                    'lepc': 'd\u00EDgits lepcha',
                    'latn': 'd\u00EDgits ar\u00E0bics',
                    'laoo': 'd\u00EDgits lao',
                    'lanatham': 'd\u00EDgits tai tham tham',
                    'lana': 'd\u00EDgits tai tham hora',
                    'geor': 'numerals georgians',
                    'fullwide': "d\u00EDgits d'amplada completa",
                    'ethi': 'numerals eti\u00F2pics'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordena els s\u00EDmbols',
                    'shifted': 'Ordena sense tenir en compte els s\u00EDmbols'
                },
                'colBackwards': {
                    'no': 'Ordena els accents de manera normal',
                    'yes': 'Ordena amb ordre invers dels accents'
                }
            },
            'keys': {
                'colNormalization': 'Ordenaci\u00F3 normalitzada',
                'collation': 'ordenaci\u00F3',
                'colHiraganaQuaternary': 'Ordenaci\u00F3 per kana',
                'colCaseLevel': 'Ordenaci\u00F3 per detecci\u00F3 de maj\u00FAscules',
                'colCaseFirst': 'Ordenaci\u00F3 per maj\u00FAscules i min\u00FAscules',
                'colBackwards': 'Ordenaci\u00F3 per accents invertida',
                'colAlternate': 'Ordenaci\u00F3 sense tenir en compte els s\u00EDmbols',
                'calendar': 'calendari',
                'x': '\u00FAs privat',
                'variableTop': 'Ordena com a s\u00EDmbols',
                'va': 'Variant local',
                'timezone': 'Zona hor\u00E0ria',
                'numbers': 'xifres',
                'currency': 'moneda',
                'colStrength': "For\u00E7a de l'ordenaci\u00F3",
                'colNumeric': 'Ordenaci\u00F3 num\u00E8rica'
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
                            'exemplarCity': 'Gal\u00E1pagos'
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
                            'exemplarCity': 'Tahit\u00ED'
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
                            'exemplarCity': 'Illa de Pasqua'
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
                            'exemplarCity': 'Marqueses'
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
                            'exemplarCity': 'Maldives'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reuni\u00F3'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Maurici'
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
                            'exemplarCity': 'Ciutat desconeguda'
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
                            'exemplarCity': 'pol sud'
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
                            'exemplarCity': 'Caiman'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Caiena'
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
                                'exemplarCity': 'R\u00EDo Gallegos'
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
                                'exemplarCity': 'Tucum\u00E1n'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Aragua\u00EDna'
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
                            'exemplarCity': 'bah\u00EDa de Banderas'
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
                            'exemplarCity': 'Blanc Sablon'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Boa Vista'
                        },
                        'Bogota': {
                            'exemplarCity': 'Bogot\u00E0'
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
                            'exemplarCity': 'Guadalupe'
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
                            'exemplarCity': 'Eirunep\u00E9'
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
                            'exemplarCity': 'C\u00F3rdoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
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
                            'exemplarCity': "Lower Prince's Quarter"
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
                            'exemplarCity': 'Martinica'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Matamoros'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Mazatl\u00E1n'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'M\u00E9rida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Ciutat de M\u00E8xic'
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
                            'exemplarCity': 'Mont-real'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Montserrat'
                        },
                        'Nassau': {
                            'exemplarCity': 'Nassau'
                        },
                        'New_York': {
                            'exemplarCity': 'Nova York'
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
                                'exemplarCity': 'Beulah, Dakota del Nord'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota del Nord'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Dakota del Nord'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Ojinaga'
                        },
                        'Panama': {
                            'exemplarCity': 'Panam\u00E0'
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
                            'exemplarCity': 'R\u00EDo Branco'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Santa Isabel'
                        },
                        'Santarem': {
                            'exemplarCity': 'Santar\u00E9m'
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
                            'exemplarCity': 'Scoresbysund'
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
                            'exemplarCity': 'Saint John\u2019s'
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
                            'exemplarCity': 'Ge\u00F2rgia del Sud'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Saint Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'A\u00E7ores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudes'
                        },
                        'Canary': {
                            'exemplarCity': 'Illes Can\u00E0ries'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cap Verd'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Illes F\u00E8roe'
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
                            'exemplarCity': 'Moscou'
                        },
                        'Monaco': {
                            'exemplarCity': 'M\u00F2naco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Maarianhamina'
                        },
                        'Malta': {
                            'exemplarCity': 'Malta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madrid'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': "Hora d'estiu brit\u00E0nica"
                            },
                            'exemplarCity': 'Londres'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisboa'
                        },
                        'Kiev': {
                            'exemplarCity': 'K\u00EDev'
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
                            'exemplarCity': 'Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brussel\u00B7les'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berl\u00EDn'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Atenes'
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
                            'exemplarCity': 'Estocolm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Uzhgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zuric'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zapor\u00F3jjia'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Vars\u00F2via'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'V\u00EDlnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatic\u00E0'
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
                            'exemplarCity': 'Roma'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Praga'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Par\u00EDs'
                        },
                        'Helsinki': {
                            'exemplarCity': 'H\u00E8lsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': "Horari d'estiu irland\u00E8s"
                            },
                            'exemplarCity': 'Dubl\u00EDn'
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
                            'exemplarCity': 'Khartum'
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
                            'exemplarCity': 'Al-aaiun'
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
                            'exemplarCity': 'Muqdiisho'
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
                            'exemplarCity': 'Tr\u00EDpoli'
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
                            'exemplarCity': 'Caire, el'
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
                            'exemplarCity': 'Addis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Alger'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Xangai'
                        },
                        'Seoul': {
                            'exemplarCity': 'Se\u00FCl'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sakhalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Al-Riy\u0101d'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kizilord\u00E0'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pyongyang'
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
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damasc'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dacca'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubayy'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Dushanbe'
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
                            'exemplarCity': 'Hong Kong'
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
                            'exemplarCity': 'Jaipur'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulaanbaatar'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumchi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust\u2019-Nera'
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
                            'exemplarCity': 'Jekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'T\u00F2quio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimbu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teheran'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taixkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ashgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'A\u0137t\u00F6be'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqta\u016B'
                        },
                        'Anadyr': {
                            'exemplarCity': "Anadyr'"
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
                            'exemplarCity': 'Bak\u00FA'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beirut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bixkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Calcuta'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u010Cojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'K\u0101bul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamtxatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kaixgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmand\u00FA'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoiarsk'
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
                            'exemplarCity': 'Macau'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makasar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Masqat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nic\u00F2sia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Hora de Tokelau'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Hora del Tadjikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Hora de Taipei',
                            'standard': 'Hora est\u00E0ndard de Taipei',
                            'daylight': "Hora d'estiu de Taipei"
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Hora de Tahit\u00ED'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Hora de Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Hora de Surinam'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Hora de Ge\u00F2rgia del Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Hora de Salom\u00F3'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Hora de Singapur'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Hora de les Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Hora de Samoa',
                            'standard': 'Hora est\u00E0ndard de Samoa',
                            'daylight': "Hora d'estiu de Samoa"
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hora de Samara',
                            'standard': 'Hora est\u00E0ndard de Samara',
                            'daylight': "Hora d'estiu de Samara"
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hora de Sakhalin',
                            'standard': 'Hora est\u00E0ndard de Sakhalin',
                            'daylight': "Hora d'estiu de Sakhalin"
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hora de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hora de Reuni\u00F3'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': "Hora de l'Atl\u00E0ntic",
                            'standard': "Hora est\u00E0ndard de l'Atl\u00E0ntic",
                            'daylight': "Hora d'estiu de l'Atl\u00E0ntic"
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': "Hora central d'Am\u00E8rica del Nord",
                            'standard': "Hora est\u00E0ndard central d'Am\u00E8rica del Nord",
                            'daylight': "Hora d'estiu central d'Am\u00E8rica del Nord"
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': "Hora de l'Amazones",
                            'standard': "Hora est\u00E0ndard de l'Amazones",
                            'daylight': "Hora d'estiu de l'Amazones"
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': "Hora d'Alaska",
                            'standard': "Hora est\u00E0ndard d'Alaska",
                            'daylight': "Hora d'estiu d'Alaska"
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': "Hora de l'\u00C0frica Occidental",
                            'standard': "Hora est\u00E0ndard de l'\u00C0frica Occidental",
                            'daylight': "Hora d'estiu de l'\u00C0frica Occidental"
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': "Hora est\u00E0ndard del sud de l'\u00C0frica"
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': "Hora de l'\u00C0frica Oriental"
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': "Hora de l'\u00C0frica Central"
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': "Hora de l'Afganistan"
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': "Hora oriental d'Am\u00E8rica del Nord",
                            'standard': "Hora est\u00E0ndard oriental d'Am\u00E8rica del Nord",
                            'daylight': "Hora d'estiu oriental d'Am\u00E8rica del Nord"
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': "Hora de muntanya d'Am\u00E8rica del Nord",
                            'standard': "Hora est\u00E0ndard de muntanya d'Am\u00E8rica del Nord",
                            'daylight': "Hora d'estiu de muntanya d'Am\u00E8rica del Nord"
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hora del Pac\u00EDfic',
                            'standard': 'Hora est\u00E0ndard del Pac\u00EDfic',
                            'daylight': "Hora d'estiu del Pac\u00EDfic"
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': "Hora d'Anadyr",
                            'standard': "Hora est\u00E0ndard d'Anadyr",
                            'daylight': "Horari d'estiu d'Anadyr"
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hora \u00E0rab',
                            'standard': 'Hora est\u00E0ndard \u00E0rab',
                            'daylight': "Hora d'estiu \u00E0rab"
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': "Hora de l'Argentina",
                            'standard': "Hora est\u00E0ndard de l'Argentina",
                            'daylight': "Hora d'estiu de l'Argentina"
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': "Hora de l'oest de l'Argentina",
                            'standard': "Hora est\u00E0ndard de l'oest de l'Argentina",
                            'daylight': "Hora d'estiu de l'oest de l'Argentina"
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': "Hora d'Arm\u00E8nia",
                            'standard': "Hora est\u00E0ndard d'Arm\u00E8nia",
                            'daylight': "Hora d'estiu d'Arm\u00E8nia"
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hora de la Xina',
                            'standard': 'Hora est\u00E0ndard de la Xina',
                            'daylight': "Hora d'estiu de la Xina"
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hora de Choibalsan',
                            'standard': 'Hora est\u00E0ndard de Choibalsan',
                            'daylight': "Hora d'estiu de Choibalsan"
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Hora de Kiritimati'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Hora de les illes Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Hora de Col\u00F2mbia',
                            'standard': 'Hora est\u00E0ndard de Col\u00F2mbia',
                            'daylight': "Hora d'estiu de Col\u00F2mbia"
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hora de les illes Cook',
                            'standard': 'Hora est\u00E0ndard de les illes Cook',
                            'daylight': 'Hora de mig estiu de les illes Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hora de Cuba',
                            'standard': 'Hora est\u00E0ndard de Cuba',
                            'daylight': "Hora d'estiu de Cuba"
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Hora de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': "Hora de Dumont-d'Urville"
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Hora de Timor Oriental'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': "Hora de l'illa de Pasqua",
                            'standard': "Hora est\u00E0ndard de l'illa de Pasqua",
                            'daylight': "Hora d'estiu de l'illa de Pasqua"
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': "Hora de l'Equador"
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': "Hora del Centre d'Europa",
                            'standard': "Hora est\u00E0ndard del Centre d'Europa",
                            'daylight': "Hora d'estiu del Centre d'Europa"
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': "Hora de l'Est d'Europa",
                            'standard': "Hora est\u00E0ndard de l'Est d'Europa",
                            'daylight': "Hora d'estiu de l'Est d'Europa"
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': "Hora de l'Oest d'Europa",
                            'standard': "Hora est\u00E0ndard de l'Oest d'Europa",
                            'daylight': "Hora d'estiu de l'Oest d'Europa"
                        }
                    },
                    'India': {
                        'long': {
                            'standard': "Hora est\u00E0ndard de l'\u00CDndia"
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Hora de Tonga',
                            'standard': 'Hora est\u00E0ndard de Tonga',
                            'daylight': "Hora d'estiu de Tonga"
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Hora de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Hora del Turkmenistan',
                            'standard': 'Hora est\u00E0ndard del Turkmenistan',
                            'daylight': "Hora d'estiu del Turkmenistan"
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Hora de Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': "Hora de l'Uruguai",
                            'standard': "Hora est\u00E0ndard de l'Uruguai",
                            'daylight': "Hora d'estiu de l'Uruguai"
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': "Hora de l'Uzbekistan",
                            'standard': "Hora est\u00E0ndard de l'Uzbekistan",
                            'daylight': "Hora d'estiu de l'Uzbekistan"
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hora de Vanatu',
                            'standard': 'Hora est\u00E0ndard de Vanatu',
                            'daylight': "Hora d'estiu de Vanatu"
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': "Hora d'Ekaterinburg",
                            'standard': "Hora est\u00E0ndard d'Ekaterinburg",
                            'daylight': "Hora d'estiu d'Ekaterinburg"
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hora de Iakutsk',
                            'standard': 'Hora est\u00E0ndard de Iakutsk',
                            'daylight': "Hora d'estiu de Iakutsk"
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Hora de Wallis i Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Hora de Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Hora de Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Hora de Volgograd',
                            'standard': 'Hora est\u00E0ndard de Volgograd',
                            'daylight': "Hora d'estiu de Volgograd"
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hora de Vladivostok',
                            'standard': 'Hora est\u00E0ndard de Vladivostok',
                            'daylight': "Hora d'estiu de Vladivostok"
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Hora de Vene\u00E7uela'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hora de Hovd',
                            'standard': 'Hora est\u00E0ndard de Hovd',
                            'daylight': "Hora d'estiu de Hovd"
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hora de Hong Kong',
                            'standard': 'Hora est\u00E0ndard de Hong Kong',
                            'daylight': "Hora d'estiu de Hong Kong"
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hora de Hawaii-Aleutianes',
                            'standard': 'Hora est\u00E0ndard de Hawaii-Aleutianes',
                            'daylight': "Hora d'estiu de Hawaii-Aleutianes"
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Hora de Guyana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Hora del Golf'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': "Hora de l'Oest de Grenl\u00E0ndia",
                            'standard': "Hora est\u00E0ndard de l'Oest de Grenl\u00E0ndia",
                            'daylight': "Hora d'estiu de l'Oest de Grenl\u00E0ndia"
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': "Hora de l'Est de Grenl\u00E0ndia",
                            'standard': "Hora est\u00E0ndard de l'Est de Grenl\u00E0ndia",
                            'daylight': "Hora d'estiu de l'Est de Grenl\u00E0ndia"
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Hora del Meridi\u00E0 de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Hora de les illes Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Hora de Ge\u00F2rgia',
                            'standard': 'Hora est\u00E0ndard de Ge\u00F2rgia',
                            'daylight': "Hora d'estiu de Ge\u00F2rgia"
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Hora de Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hora de Gal\u00E1pagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': "Hora d'Ant\u00E0rtida i Fran\u00E7a del Sud"
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': "Hora d'estiu de la Guaiana Francesa"
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hora de Fiji',
                            'standard': 'Hora est\u00E0ndard de Fiji',
                            'daylight': "Hora d'estiu de Fiji"
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Hora de les illes Malvines',
                            'standard': 'Hora est\u00E0ndard de les illes Malvines',
                            'daylight': "Hora d'estiu de les illes Malvines"
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': "Hora d'Austr\u00E0lia Central",
                            'standard': "Hora est\u00E0ndard d'Austr\u00E0lia Central",
                            'daylight': "Hora d'estiu d'Austr\u00E0lia Central"
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': "Hora d'Austr\u00E0lia centre-occidental",
                            'standard': "Hora est\u00E0ndard d'Austr\u00E0lia centre-occidental",
                            'daylight': "Hora d'estiu d'Austr\u00E0lia centre-occidental"
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': "Hora d'Austr\u00E0lia Oriental",
                            'standard': "Hora est\u00E0ndard d'Austr\u00E0lia Oriental",
                            'daylight': "Hora d'estiu d'Austr\u00E0lia Oriental"
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': "Hora d'Austr\u00E0lia Occidental",
                            'standard': "Hora est\u00E0ndard d'Austr\u00E0lia Occidental",
                            'daylight': "Hora d'estiu d'Austr\u00E0lia Occidental"
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': "Hora d'Azerbaidjan",
                            'standard': "Hora est\u00E0ndard d'Azerbaidjan",
                            'daylight': "Hora d'estiu d'Azerbaidjan"
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hora de les A\u00E7ores',
                            'standard': 'Hora est\u00E0ndard de les A\u00E7ores',
                            'daylight': "Hora d'estiu de les A\u00E7ores"
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Hora de Bangla Desh',
                            'standard': 'Hora est\u00E0ndard de Bangla Desh',
                            'daylight': "Hora d'estiu de Bangla Desh"
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hora de Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Hora de Bol\u00EDvia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Hora de Bras\u00EDlia',
                            'standard': 'Hora est\u00E0ndard de Bras\u00EDlia',
                            'daylight': "Hora d'estiu de Bras\u00EDlia"
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Hora de Brunei Darussalam'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Hora de Cap Verd',
                            'standard': 'Hora est\u00E0ndard de Cap Verd',
                            'daylight': "Hora d'estiu de Cap Verd"
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Hora de Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Hora de Chatham',
                            'standard': 'Hora est\u00E0ndard de Chatham',
                            'daylight': "Hora d'estiu de Chatham"
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hora de Xile',
                            'standard': 'Hora est\u00E0ndard de Xile',
                            'daylight': "Hora d'estiu de Xile"
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': "Hora de l'oce\u00E0 \u00CDndic"
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': "Hora d'Indoxina"
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': "Hora central d'Indon\u00E8sia"
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': "Hora de l'est d'Indon\u00E8sia"
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': "Hora de l'oest d'Indon\u00E8sia"
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': "Hora d'Iran",
                            'standard': "Hora est\u00E0ndard d'Iran",
                            'daylight': "Hora d'estiu d'Iran"
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': "Hora d'Irkutsk",
                            'standard': "Hora est\u00E0ndard d'Irkutsk",
                            'daylight': "Hora d'estiu d'Irkutsk"
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': "Hora d'Israel",
                            'standard': "Hora est\u00E0ndard d'Israel",
                            'daylight': "Hora d'estiu d'Israel"
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hora del Jap\u00F3',
                            'standard': 'Hora est\u00E0ndard del Jap\u00F3',
                            'daylight': "Hora d'estiu del Jap\u00F3"
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hora de Kamtxatka',
                            'standard': 'Hora est\u00E0ndard de Petropavlovsk de Kamtxatka',
                            'daylight': "Horari d'estiu de Petropavlovsk de Kamtxatka"
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': "Hora de l'est del Kazakhstan"
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': "Hora de l'oest del Kazakhstan"
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hora de Corea',
                            'standard': 'Hora est\u00E0ndard de Corea',
                            'daylight': "Hora d'estiu de Corea"
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Hora de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Hora de Krasnoiarsk',
                            'standard': 'Hora est\u00E0ndard de Krasnoiarsk',
                            'daylight': "Hora d'estiu de Krasnoiarsk"
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Hora del Kirguizistan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Hora de Line Islands'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Hora de Lord Howe',
                            'standard': 'Hora est\u00E0ndard de Lord Howe',
                            'daylight': "Horari d'estiu de Lord Howe"
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Hora de Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Hora de Magadan',
                            'standard': 'Hora est\u00E0ndard de Magadan',
                            'daylight': "Hora d'estiu de Magadan"
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Hora de Mal\u00E0isia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Hora de les Maldives'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Hora de les Marqueses'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Hora de les illes Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Hora de Maurici',
                            'standard': 'Hora est\u00E0ndard de Maurici',
                            'daylight': "Hora d'estiu de Maurici"
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Hora de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': "Hora d'Ulan Bator",
                            'standard': "Hora est\u00E0ndard d'Ulan Bator",
                            'daylight': "Hora d'estiu d'Ulan Bator"
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hora de Moscou',
                            'standard': 'Hora est\u00E0ndard de Moscou',
                            'daylight': "Hora d'estiu de Moscou"
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Hora de Myanmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Hora de Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Hora del Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Hora de Nova Caled\u00F2nia',
                            'standard': 'Hora est\u00E0ndard de Nova Caled\u00F2nia',
                            'daylight': "Hora d'estiu de Nova Caled\u00F2nia"
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hora de Nova Zelanda',
                            'standard': 'Hora est\u00E0ndard de Nova Zelanda',
                            'daylight': "Hora d'estiu de Nova Zelanda"
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Hora de Terranova',
                            'standard': 'Hora est\u00E0ndard de Terranova',
                            'daylight': "Hora d'estiu de Terranova"
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Hora de Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Hora de les illes Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Hora de Fernando de Noronha',
                            'standard': 'Hora est\u00E0ndard de Fernando de Noronha',
                            'daylight': "Hora d'estiu de Fernando de Noronha"
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hora de Novosibirsk',
                            'standard': 'Hora est\u00E0ndard de Novosibirsk',
                            'daylight': "Hora d'estiu de Novosibirsk"
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': "Hora d'Omsk",
                            'standard': "Hora est\u00E0ndard d'Omsk",
                            'daylight': "Hora d'estiu d'Omsk"
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hora del Pakistan',
                            'standard': 'Hora est\u00E0ndard del Pakistan',
                            'daylight': "Hora d'estiu del Pakistan"
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Hora de Palau'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Hora de Papua Nova Guinea'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Hora del Paraguai',
                            'standard': 'Hora est\u00E0ndard del Paraguai',
                            'daylight': "Hora d'estiu del Paraguai"
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hora del Per\u00FA',
                            'standard': 'Hora est\u00E0ndard del Per\u00FA',
                            'daylight': "Hora d'estiu del Per\u00FA"
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hora de Filipines',
                            'standard': 'Hora est\u00E0ndard de Filipines',
                            'daylight': "Hora d'estiu de Filipines"
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Hora de les illes Phoenix'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Hora de Saint-Pierre i Miquelon',
                            'standard': 'Hora est\u00E0ndard de Saint-Pierre i Miquelon',
                            'daylight': "Hora d'estiu de Saint-Pierre i Miquelon"
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Hora de Pitcairn'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Hora de Ponape'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Hora de: {0}',
                'regionFormat-type-daylight': "Horari d'estiu, {0}",
                'regionFormat-type-standard': 'Hora est\u00E0ndard, {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'ag.',
                                '7': 'jul.',
                                '6': 'juny',
                                '5': 'maig',
                                '12': 'des.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'set.',
                                '1': 'gen.',
                                '2': 'feb.',
                                '3': 'mar\u00E7',
                                '4': 'abr.'
                            },
                            'narrow': {
                                '8': 'AG',
                                '7': 'JL',
                                '6': 'JN',
                                '5': 'MG',
                                '12': 'DS',
                                '11': 'NV',
                                '10': 'OC',
                                '9': 'ST',
                                '1': 'GN',
                                '2': 'FB',
                                '3': 'M\u00C7',
                                '4': 'AB'
                            },
                            'wide': {
                                '8': 'agost',
                                '7': 'juliol',
                                '6': 'juny',
                                '5': 'maig',
                                '12': 'desembre',
                                '11': 'novembre',
                                '10': 'octubre',
                                '9': 'setembre',
                                '1': 'gener',
                                '2': 'febrer',
                                '3': 'mar\u00E7',
                                '4': 'abril'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'ag.',
                                '7': 'jul.',
                                '6': 'juny',
                                '5': 'maig',
                                '12': 'des.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'set.',
                                '1': 'gen.',
                                '2': 'feb.',
                                '3': 'mar\u00E7',
                                '4': 'abr.'
                            },
                            'narrow': {
                                '8': 'AG',
                                '7': 'JL',
                                '6': 'JN',
                                '5': 'MG',
                                '12': 'DS',
                                '11': 'NV',
                                '10': 'OC',
                                '9': 'ST',
                                '1': 'GN',
                                '2': 'FB',
                                '3': 'M\u00C7',
                                '4': 'AB'
                            },
                            'wide': {
                                '8': 'agost',
                                '7': 'juliol',
                                '6': 'juny',
                                '5': 'maig',
                                '12': 'desembre',
                                '11': 'novembre',
                                '10': 'octubre',
                                '9': 'setembre',
                                '1': 'gener',
                                '2': 'febrer',
                                '3': 'mar\u00E7',
                                '4': 'abril'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'dg.',
                                'mon': 'dl.',
                                'tue': 'dt.',
                                'wed': 'dc.',
                                'thu': 'dj.',
                                'fri': 'dv.',
                                'sat': 'ds.'
                            },
                            'narrow': {
                                'sun': 'dg',
                                'mon': 'dl',
                                'tue': 'dt',
                                'wed': 'dc',
                                'thu': 'dj',
                                'fri': 'dv',
                                'sat': 'ds'
                            },
                            'short': {
                                'sun': 'dg.',
                                'mon': 'dl.',
                                'tue': 'dt.',
                                'wed': 'dc.',
                                'thu': 'dj.',
                                'fri': 'dv.',
                                'sat': 'ds.'
                            },
                            'wide': {
                                'sun': 'diumenge',
                                'mon': 'dilluns',
                                'tue': 'dimarts',
                                'wed': 'dimecres',
                                'thu': 'dijous',
                                'fri': 'divendres',
                                'sat': 'dissabte'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'dg.',
                                'mon': 'dl.',
                                'tue': 'dt.',
                                'wed': 'dc.',
                                'thu': 'dj.',
                                'fri': 'dv.',
                                'sat': 'ds.'
                            },
                            'narrow': {
                                'sun': 'dg',
                                'mon': 'dl',
                                'tue': 'dt',
                                'wed': 'dc',
                                'thu': 'dj',
                                'fri': 'dv',
                                'sat': 'ds'
                            },
                            'short': {
                                'sun': 'dg.',
                                'mon': 'dl.',
                                'tue': 'dm.',
                                'wed': 'dc.',
                                'thu': 'dj.',
                                'fri': 'dv.',
                                'sat': 'ds.'
                            },
                            'wide': {
                                'sun': 'diumenge',
                                'mon': 'dilluns',
                                'tue': 'dimarts',
                                'wed': 'dimecres',
                                'thu': 'dijous',
                                'fri': 'divendres',
                                'sat': 'dissabte'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1r trimestre',
                                '2': '2n trimestre',
                                '3': '3r trimestre',
                                '4': '4t trimestre'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1r trimestre',
                                '2': '2n trimestre',
                                '3': '3r trimestre',
                                '4': '4t trimestre'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            },
                            'narrow': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            },
                            'narrow': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'abans de Crist',
                            '0-alt-variant': 'a. de la n. e.',
                            '1': 'despr\u00E9s de Crist',
                            '1-alt-variant': 'de la n. e.'
                        },
                        'eraAbbr': {
                            '0': 'aC',
                            '0-alt-variant': 'a. de la n. e.',
                            '1': 'dC',
                            '1-alt-variant': 'de la n.e.'
                        },
                        'eraNarrow': {
                            '0': 'aC',
                            '0-alt-variant': 'a. de la n. e.',
                            '1': 'dC',
                            '1-alt-variant': 'de la n.e.'
                        }
                    },
                    'dateFormats': {
                        'full': "EEEE, d MMMM 'de' y",
                        'long': "d MMMM 'de' y",
                        'medium': 'dd/MM/y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H.mm.ss zzzz',
                        'long': 'H.mm.ss z',
                        'medium': 'H.mm.ss',
                        'short': 'H.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'd MMM y',
                            'yMMM': 'LLL y',
                            'yMEd': 'E, d/M/y',
                            'yMd': 'd/M/y',
                            'EHm': 'E H:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM, y G',
                            'GyMMMM': "LLLL 'de' y G",
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': "LLLL 'de' y",
                            'yMMMEd': 'E, d MMM, y',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'H',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E H:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E d MMMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y'
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
                                'd': 'E d - E d MMM',
                                'M': 'E d MMM - E d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'MEd': {
                                'd': 'E dd/MM - E dd/MM',
                                'M': 'E dd/MM - E dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'H-H v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
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
                                'd': 'E dd/MM/y - E dd/MM/y',
                                'M': 'E dd/MM/y - E dd/MM/y',
                                'y': 'E dd/MM/y - E dd/MM/y'
                            },
                            'yMMM': {
                                'M': "LLL-LLL 'de' y",
                                'y': "LLL 'de' y - LLL 'de' y"
                            },
                            'yMMMd': {
                                'd': "d-d MMM 'de' y",
                                'M': "d MMM - d MMM 'de' y",
                                'y': "d MMM 'de' y - d MMM 'de' y"
                            },
                            'yMMMEd': {
                                'd': "E d - E d MMM 'de' y",
                                'M': "E d MMM - E d MMM 'de' y",
                                'y': "E d MMM 'de' y - E d MMM 'de' y"
                            },
                            'yMMMM': {
                                'M': "LLLL-LLLL 'de' y",
                                'y': "LLLL 'de' y - LLLL 'de' y"
                            },
                            'Hmv': {
                                'H': 'HH.mm-HH.mm v',
                                'm': 'HH.mm-HH.mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm-HH.mm',
                                'm': 'HH.mm-HH.mm'
                            },
                            'hm': {
                                'a': 'h.mm a -h.mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'H-H'
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
