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
                'territory': 'Regió: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordena els caràcters kana de manera independent',
                    'yes': 'Ordena els caràcters kana de manera diferent'
                },
                'colCaseLevel': {
                    'no': 'Ordena sense distingir majúscules i minúscules',
                    'yes': 'Ordena amb detecció de majúscules i minúscules'
                },
                'colCaseFirst': {
                    'lower': 'Mostra primer les minúscules',
                    'no': 'Ordena per tipus de lletra normal',
                    'upper': 'Ordena amb majúscules primer'
                },
                'colStrength': {
                    'identical': 'Ordena-ho tot',
                    'primary': 'Ordena només les lletres de base',
                    'quaternary': 'Ordena per accents/majúscules/amplada/kana',
                    'secondary': 'Ordena els accents',
                    'tertiary': 'Ordena per accent/majúscules/amplada'
                },
                'colNumeric': {
                    'no': 'Ordena els dígits individualment',
                    'yes': 'Ordena els dígits numèricament'
                },
                'colNormalization': {
                    'no': 'Ordena sense normalització',
                    'yes': 'Ordena per caràcters Unicode normalitzats'
                },
                'calendar': {
                    'japanese': 'calendari japonès',
                    'iso8601': 'iso8601',
                    'coptic': 'calendari copte',
                    'dangi': 'dangi',
                    'ethiopic': 'calendari etíop',
                    'ethiopic-amete-alem': 'calendari etíop amete-alem',
                    'gregorian': 'calendari gregorià',
                    'hebrew': 'calendari hebreu',
                    'persian': 'calendari persa',
                    'roc': 'calendari de la República de Xina',
                    'chinese': 'calendari xinès',
                    'buddhist': 'calendari budista',
                    'indian': 'calendari hindú',
                    'islamic': 'calendari musulmà',
                    'islamic-civil': 'calendari civil islàmic',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'ordre de la guia telefònica',
                    'gb2312han': 'ordre del xinès simplificat - GB2312',
                    'eor': 'normes europees d\'ordenació',
                    'ducet': 'ordenació Unicode predeterminada',
                    'dictionary': 'ordenació de diccionari',
                    'big5han': 'ordre del xinès tradicional - Big5',
                    'traditional': 'ordre tradicional',
                    'standard': 'ordenació estàndard',
                    'zhuyin': 'zhuyin',
                    'unihan': 'ordenació per quantitat de traços radicals',
                    'stroke': 'ordre dels traços',
                    'searchjl': 'cerca per consonant inicial del hangul',
                    'search': 'cerca de propòsit general',
                    'reformed': 'ordenació reformada',
                    'pinyin': 'ordre pinyin',
                    'phonetic': 'Ordenació fonètica'
                },
                'numbers': {
                    'knda': 'dígits kannada',
                    'khmr': 'dígits khmer',
                    'kali': 'dígits kayah',
                    'jpanfin': 'numerals financers japonesos',
                    'jpan': 'numerals japonesos',
                    'java': 'dígits javanesos',
                    'hebr': 'numerals hebreus',
                    'hantfin': 'numerals financers xinesos tradicionals',
                    'hant': 'numerals xinesos tradicionals',
                    'hansfin': 'numerals financers xinesos simplificats',
                    'hans': 'numerals xinesos simplificats',
                    'hanidec': 'numerals decimals xinesos',
                    'guru': 'dígits gurmukhi',
                    'gujr': 'dígits gujarati',
                    'greklow': 'numerals grecs en minúscules',
                    'grek': 'numerals grecs',
                    'bali': 'dígits balinesos',
                    'armnlow': 'numerals armenis en minúscules',
                    'armn': 'numerals armenis',
                    'arabext': 'dígits àrabs i índics ampliats',
                    'arab': 'dígits àrabs i índics',
                    'finance': 'Numerals financers',
                    'traditional': 'Numerals tradicionals',
                    'native': 'Dígits natius',
                    'beng': 'dígits bengalins',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'dígits txams',
                    'deva': 'dígits devanagaris',
                    'orya': 'dígits oriya',
                    'osma': 'osma',
                    'roman': 'numerals romans',
                    'romanlow': 'numerals romans en minúscules',
                    'saur': 'dígits saurashtra',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'dígits sudanesos',
                    'vaii': 'dígits vai',
                    'tibt': 'dígits tibetans',
                    'thai': 'dígits thai',
                    'telu': 'dígits telugu',
                    'tamldec': 'dígits tamils',
                    'taml': 'numerals tamils tradicionals',
                    'talu': 'dígits tai lue nous',
                    'takr': 'takr',
                    'olck': 'dígits ol chiki',
                    'nkoo': 'dígits n\'ko',
                    'mymrshan': 'dígits shan de Myanmar',
                    'mymr': 'dígits de Myanmar',
                    'mtei': 'dígits meitei mayek',
                    'mong': 'dígits mongols',
                    'mlym': 'dígits malaiàlam',
                    'limb': 'dígits limbu',
                    'lepc': 'dígits lepcha',
                    'latn': 'dígits aràbics',
                    'laoo': 'dígits lao',
                    'lanatham': 'dígits tai tham tham',
                    'lana': 'dígits tai tham hora',
                    'geor': 'numerals georgians',
                    'fullwide': 'dígits d\'amplada completa',
                    'ethi': 'numerals etiòpics'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordena els símbols',
                    'shifted': 'Ordena sense tenir en compte els símbols'
                },
                'colBackwards': {
                    'no': 'Ordena els accents de manera normal',
                    'yes': 'Ordena amb ordre invers dels accents'
                }
            },
            'keys': {
                'colNormalization': 'Ordenació normalitzada',
                'collation': 'ordenació',
                'colHiraganaQuaternary': 'Ordenació per kana',
                'colCaseLevel': 'Ordenació per detecció de majúscules',
                'colCaseFirst': 'Ordenació per majúscules i minúscules',
                'colBackwards': 'Ordenació per accents invertida',
                'colAlternate': 'Ordenació sense tenir en compte els símbols',
                'calendar': 'calendari',
                'x': 'ús privat',
                'variableTop': 'Ordena com a símbols',
                'va': 'Variant local',
                'timezone': 'Zona horària',
                'numbers': 'xifres',
                'currency': 'moneda',
                'colStrength': 'Força de l\'ordenació',
                'colNumeric': 'Ordenació numèrica'
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
                            'exemplarCity': 'Galápagos'
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
                            'exemplarCity': 'Tahití'
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
                            'exemplarCity': 'Nouméa'
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
                            'exemplarCity': 'Reunió'
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
                            'exemplarCity': 'Asunción'
                        },
                        'Aruba': {
                            'exemplarCity': 'Aruba'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Río Gallegos'
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
                                'exemplarCity': 'Tucumán'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Araguaína'
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
                            'exemplarCity': 'bahía de Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Belém'
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
                            'exemplarCity': 'Bogotà'
                        },
                        'Curacao': {
                            'exemplarCity': 'Curaçao'
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
                            'exemplarCity': 'Eirunepé'
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
                            'exemplarCity': 'Córdoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiabá'
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
                            'exemplarCity': 'Maceió'
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
                            'exemplarCity': 'Mazatlán'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'Mérida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Ciutat de Mèxic'
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
                            'exemplarCity': 'Panamà'
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
                            'exemplarCity': 'Río Branco'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Santa Isabel'
                        },
                        'Santarem': {
                            'exemplarCity': 'Santarém'
                        },
                        'Santiago': {
                            'exemplarCity': 'Santiago'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'São Paulo'
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
                            'exemplarCity': 'Saint Barthélemy'
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
                            'exemplarCity': 'Geòrgia del Sud'
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
                            'exemplarCity': 'Açores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudes'
                        },
                        'Canary': {
                            'exemplarCity': 'Illes Canàries'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cap Verd'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Illes Fèroe'
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
                            'exemplarCity': 'Mònaco'
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
                                'daylight': 'Hora d\'estiu britànica'
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
                            'exemplarCity': 'Kíev'
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
                            'exemplarCity': 'Brussel·les'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlín'
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
                            'exemplarCity': 'Zaporójjia'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsòvia'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vílnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vaticà'
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
                            'exemplarCity': 'París'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Hèlsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Horari d\'estiu irlandès'
                            },
                            'exemplarCity': 'Dublín'
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
                            'exemplarCity': 'Trípoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'São Tomé'
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
                            'exemplarCity': 'Seül'
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
                            'exemplarCity': 'Al-Riyād'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kizilordà'
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
                            'exemplarCity': 'Tòquio'
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
                            'exemplarCity': 'Aķtöbe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqtaū'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr\''
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
                            'exemplarCity': 'Bakú'
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
                            'exemplarCity': 'Čojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kābul'
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
                            'exemplarCity': 'Katmandú'
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
                            'exemplarCity': 'Nicòsia'
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
                            'standard': 'Hora estàndard de Taipei',
                            'daylight': 'Hora d\'estiu de Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Hora de Tahití'
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
                            'standard': 'Hora de Geòrgia del Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Hora de Salomó'
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
                            'standard': 'Hora estàndard de Samoa',
                            'daylight': 'Hora d\'estiu de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hora de Samara',
                            'standard': 'Hora estàndard de Samara',
                            'daylight': 'Hora d\'estiu de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hora de Sakhalin',
                            'standard': 'Hora estàndard de Sakhalin',
                            'daylight': 'Hora d\'estiu de Sakhalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hora de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hora de Reunió'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Hora de l\'Atlàntic',
                            'standard': 'Hora estàndard de l\'Atlàntic',
                            'daylight': 'Hora d\'estiu de l\'Atlàntic'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Hora central d\'Amèrica del Nord',
                            'standard': 'Hora estàndard central d\'Amèrica del Nord',
                            'daylight': 'Hora d\'estiu central d\'Amèrica del Nord'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Hora de l\'Amazones',
                            'standard': 'Hora estàndard de l\'Amazones',
                            'daylight': 'Hora d\'estiu de l\'Amazones'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Hora d\'Alaska',
                            'standard': 'Hora estàndard d\'Alaska',
                            'daylight': 'Hora d\'estiu d\'Alaska'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Hora de l\'Àfrica Occidental',
                            'standard': 'Hora estàndard de l\'Àfrica Occidental',
                            'daylight': 'Hora d\'estiu de l\'Àfrica Occidental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Hora estàndard del sud de l\'Àfrica'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Hora de l\'Àfrica Oriental'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Hora de l\'Àfrica Central'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Hora de l\'Afganistan'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Hora oriental d\'Amèrica del Nord',
                            'standard': 'Hora estàndard oriental d\'Amèrica del Nord',
                            'daylight': 'Hora d\'estiu oriental d\'Amèrica del Nord'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hora de muntanya d\'Amèrica del Nord',
                            'standard': 'Hora estàndard de muntanya d\'Amèrica del Nord',
                            'daylight': 'Hora d\'estiu de muntanya d\'Amèrica del Nord'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hora del Pacífic',
                            'standard': 'Hora estàndard del Pacífic',
                            'daylight': 'Hora d\'estiu del Pacífic'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Hora d\'Anadyr',
                            'standard': 'Hora estàndard d\'Anadyr',
                            'daylight': 'Horari d\'estiu d\'Anadyr'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hora àrab',
                            'standard': 'Hora estàndard àrab',
                            'daylight': 'Hora d\'estiu àrab'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Hora de l\'Argentina',
                            'standard': 'Hora estàndard de l\'Argentina',
                            'daylight': 'Hora d\'estiu de l\'Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Hora de l\'oest de l\'Argentina',
                            'standard': 'Hora estàndard de l\'oest de l\'Argentina',
                            'daylight': 'Hora d\'estiu de l\'oest de l\'Argentina'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Hora d\'Armènia',
                            'standard': 'Hora estàndard d\'Armènia',
                            'daylight': 'Hora d\'estiu d\'Armènia'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hora de la Xina',
                            'standard': 'Hora estàndard de la Xina',
                            'daylight': 'Hora d\'estiu de la Xina'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hora de Choibalsan',
                            'standard': 'Hora estàndard de Choibalsan',
                            'daylight': 'Hora d\'estiu de Choibalsan'
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
                            'generic': 'Hora de Colòmbia',
                            'standard': 'Hora estàndard de Colòmbia',
                            'daylight': 'Hora d\'estiu de Colòmbia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hora de les illes Cook',
                            'standard': 'Hora estàndard de les illes Cook',
                            'daylight': 'Hora de mig estiu de les illes Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hora de Cuba',
                            'standard': 'Hora estàndard de Cuba',
                            'daylight': 'Hora d\'estiu de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Hora de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Hora de Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Hora de Timor Oriental'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Hora de l\'illa de Pasqua',
                            'standard': 'Hora estàndard de l\'illa de Pasqua',
                            'daylight': 'Hora d\'estiu de l\'illa de Pasqua'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Hora de l\'Equador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Hora del Centre d\'Europa',
                            'standard': 'Hora estàndard del Centre d\'Europa',
                            'daylight': 'Hora d\'estiu del Centre d\'Europa'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Hora de l\'Est d\'Europa',
                            'standard': 'Hora estàndard de l\'Est d\'Europa',
                            'daylight': 'Hora d\'estiu de l\'Est d\'Europa'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Hora de l\'Oest d\'Europa',
                            'standard': 'Hora estàndard de l\'Oest d\'Europa',
                            'daylight': 'Hora d\'estiu de l\'Oest d\'Europa'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hora estàndard de l\'Índia'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Hora de Tonga',
                            'standard': 'Hora estàndard de Tonga',
                            'daylight': 'Hora d\'estiu de Tonga'
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
                            'standard': 'Hora estàndard del Turkmenistan',
                            'daylight': 'Hora d\'estiu del Turkmenistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Hora de Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Hora de l\'Uruguai',
                            'standard': 'Hora estàndard de l\'Uruguai',
                            'daylight': 'Hora d\'estiu de l\'Uruguai'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Hora de l\'Uzbekistan',
                            'standard': 'Hora estàndard de l\'Uzbekistan',
                            'daylight': 'Hora d\'estiu de l\'Uzbekistan'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hora de Vanatu',
                            'standard': 'Hora estàndard de Vanatu',
                            'daylight': 'Hora d\'estiu de Vanatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Hora d\'Ekaterinburg',
                            'standard': 'Hora estàndard d\'Ekaterinburg',
                            'daylight': 'Hora d\'estiu d\'Ekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hora de Iakutsk',
                            'standard': 'Hora estàndard de Iakutsk',
                            'daylight': 'Hora d\'estiu de Iakutsk'
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
                            'standard': 'Hora estàndard de Volgograd',
                            'daylight': 'Hora d\'estiu de Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hora de Vladivostok',
                            'standard': 'Hora estàndard de Vladivostok',
                            'daylight': 'Hora d\'estiu de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Hora de Veneçuela'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hora de Hovd',
                            'standard': 'Hora estàndard de Hovd',
                            'daylight': 'Hora d\'estiu de Hovd'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hora de Hong Kong',
                            'standard': 'Hora estàndard de Hong Kong',
                            'daylight': 'Hora d\'estiu de Hong Kong'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hora de Hawaii-Aleutianes',
                            'standard': 'Hora estàndard de Hawaii-Aleutianes',
                            'daylight': 'Hora d\'estiu de Hawaii-Aleutianes'
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
                            'generic': 'Hora de l\'Oest de Grenlàndia',
                            'standard': 'Hora estàndard de l\'Oest de Grenlàndia',
                            'daylight': 'Hora d\'estiu de l\'Oest de Grenlàndia'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Hora de l\'Est de Grenlàndia',
                            'standard': 'Hora estàndard de l\'Est de Grenlàndia',
                            'daylight': 'Hora d\'estiu de l\'Est de Grenlàndia'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Hora del Meridià de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Hora de les illes Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Hora de Geòrgia',
                            'standard': 'Hora estàndard de Geòrgia',
                            'daylight': 'Hora d\'estiu de Geòrgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Hora de Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hora de Galápagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Hora d\'Antàrtida i França del Sud'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Hora d\'estiu de la Guaiana Francesa'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hora de Fiji',
                            'standard': 'Hora estàndard de Fiji',
                            'daylight': 'Hora d\'estiu de Fiji'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Hora de les illes Malvines',
                            'standard': 'Hora estàndard de les illes Malvines',
                            'daylight': 'Hora d\'estiu de les illes Malvines'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Hora d\'Austràlia Central',
                            'standard': 'Hora estàndard d\'Austràlia Central',
                            'daylight': 'Hora d\'estiu d\'Austràlia Central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Hora d\'Austràlia centre-occidental',
                            'standard': 'Hora estàndard d\'Austràlia centre-occidental',
                            'daylight': 'Hora d\'estiu d\'Austràlia centre-occidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Hora d\'Austràlia Oriental',
                            'standard': 'Hora estàndard d\'Austràlia Oriental',
                            'daylight': 'Hora d\'estiu d\'Austràlia Oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Hora d\'Austràlia Occidental',
                            'standard': 'Hora estàndard d\'Austràlia Occidental',
                            'daylight': 'Hora d\'estiu d\'Austràlia Occidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Hora d\'Azerbaidjan',
                            'standard': 'Hora estàndard d\'Azerbaidjan',
                            'daylight': 'Hora d\'estiu d\'Azerbaidjan'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hora de les Açores',
                            'standard': 'Hora estàndard de les Açores',
                            'daylight': 'Hora d\'estiu de les Açores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Hora de Bangla Desh',
                            'standard': 'Hora estàndard de Bangla Desh',
                            'daylight': 'Hora d\'estiu de Bangla Desh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hora de Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Hora de Bolívia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Hora de Brasília',
                            'standard': 'Hora estàndard de Brasília',
                            'daylight': 'Hora d\'estiu de Brasília'
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
                            'standard': 'Hora estàndard de Cap Verd',
                            'daylight': 'Hora d\'estiu de Cap Verd'
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
                            'standard': 'Hora estàndard de Chatham',
                            'daylight': 'Hora d\'estiu de Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hora de Xile',
                            'standard': 'Hora estàndard de Xile',
                            'daylight': 'Hora d\'estiu de Xile'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hora de l\'oceà Índic'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Hora d\'Indoxina'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Hora central d\'Indonèsia'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Hora de l\'est d\'Indonèsia'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Hora de l\'oest d\'Indonèsia'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Hora d\'Iran',
                            'standard': 'Hora estàndard d\'Iran',
                            'daylight': 'Hora d\'estiu d\'Iran'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Hora d\'Irkutsk',
                            'standard': 'Hora estàndard d\'Irkutsk',
                            'daylight': 'Hora d\'estiu d\'Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Hora d\'Israel',
                            'standard': 'Hora estàndard d\'Israel',
                            'daylight': 'Hora d\'estiu d\'Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hora del Japó',
                            'standard': 'Hora estàndard del Japó',
                            'daylight': 'Hora d\'estiu del Japó'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hora de Kamtxatka',
                            'standard': 'Hora estàndard de Petropavlovsk de Kamtxatka',
                            'daylight': 'Horari d\'estiu de Petropavlovsk de Kamtxatka'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Hora de l\'est del Kazakhstan'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Hora de l\'oest del Kazakhstan'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hora de Corea',
                            'standard': 'Hora estàndard de Corea',
                            'daylight': 'Hora d\'estiu de Corea'
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
                            'standard': 'Hora estàndard de Krasnoiarsk',
                            'daylight': 'Hora d\'estiu de Krasnoiarsk'
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
                            'standard': 'Hora estàndard de Lord Howe',
                            'daylight': 'Horari d\'estiu de Lord Howe'
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
                            'standard': 'Hora estàndard de Magadan',
                            'daylight': 'Hora d\'estiu de Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Hora de Malàisia'
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
                            'standard': 'Hora estàndard de Maurici',
                            'daylight': 'Hora d\'estiu de Maurici'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Hora de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Hora d\'Ulan Bator',
                            'standard': 'Hora estàndard d\'Ulan Bator',
                            'daylight': 'Hora d\'estiu d\'Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hora de Moscou',
                            'standard': 'Hora estàndard de Moscou',
                            'daylight': 'Hora d\'estiu de Moscou'
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
                            'generic': 'Hora de Nova Caledònia',
                            'standard': 'Hora estàndard de Nova Caledònia',
                            'daylight': 'Hora d\'estiu de Nova Caledònia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hora de Nova Zelanda',
                            'standard': 'Hora estàndard de Nova Zelanda',
                            'daylight': 'Hora d\'estiu de Nova Zelanda'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Hora de Terranova',
                            'standard': 'Hora estàndard de Terranova',
                            'daylight': 'Hora d\'estiu de Terranova'
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
                            'standard': 'Hora estàndard de Fernando de Noronha',
                            'daylight': 'Hora d\'estiu de Fernando de Noronha'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hora de Novosibirsk',
                            'standard': 'Hora estàndard de Novosibirsk',
                            'daylight': 'Hora d\'estiu de Novosibirsk'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Hora d\'Omsk',
                            'standard': 'Hora estàndard d\'Omsk',
                            'daylight': 'Hora d\'estiu d\'Omsk'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hora del Pakistan',
                            'standard': 'Hora estàndard del Pakistan',
                            'daylight': 'Hora d\'estiu del Pakistan'
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
                            'standard': 'Hora estàndard del Paraguai',
                            'daylight': 'Hora d\'estiu del Paraguai'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hora del Perú',
                            'standard': 'Hora estàndard del Perú',
                            'daylight': 'Hora d\'estiu del Perú'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hora de Filipines',
                            'standard': 'Hora estàndard de Filipines',
                            'daylight': 'Hora d\'estiu de Filipines'
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
                            'standard': 'Hora estàndard de Saint-Pierre i Miquelon',
                            'daylight': 'Hora d\'estiu de Saint-Pierre i Miquelon'
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
                'regionFormat-type-daylight': 'Horari d\'estiu, {0}',
                'regionFormat-type-standard': 'Hora estàndard, {0}',
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
                                '3': 'març',
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
                                '3': 'MÇ',
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
                                '3': 'març',
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
                                '3': 'març',
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
                                '3': 'MÇ',
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
                                '3': 'març',
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
                            '1': 'després de Crist',
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
                        'full': 'EEEE, d MMMM \'de\' y',
                        'long': 'd MMMM \'de\' y',
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
                            'GyMMMM': 'LLLL \'de\' y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'LLLL \'de\' y',
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
                                'M': 'LLL-LLL \'de\' y',
                                'y': 'LLL \'de\' y - LLL \'de\' y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM \'de\' y',
                                'M': 'd MMM - d MMM \'de\' y',
                                'y': 'd MMM \'de\' y - d MMM \'de\' y'
                            },
                            'yMMMEd': {
                                'd': 'E d - E d MMM \'de\' y',
                                'M': 'E d MMM - E d MMM \'de\' y',
                                'y': 'E d MMM \'de\' y - E d MMM \'de\' y'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL \'de\' y',
                                'y': 'LLLL \'de\' y - LLLL \'de\' y'
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
