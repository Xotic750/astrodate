/* AstroDate
 * Language: nl
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

/*jshint -W100 */
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
        AstroDate.lang('nl', {
            'codePatterns': {
                'language': 'Taal: {0}',
                'script': 'Schrift: {0}',
                'territory': 'Regio: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Kana afzonderlijk sorteren',
                    'yes': 'Kana anders sorteren'
                },
                'colCaseLevel': {
                    'no': 'Niet hoofdlettergevoelig sorteren',
                    'yes': 'Hoofdlettergevoelig sorteren'
                },
                'colCaseFirst': {
                    'lower': 'Eerst sorteren op kleine letters',
                    'no': 'Sorteervolgorde algemeen hoofdlettergebruik',
                    'upper': 'Eerst sorteren op hoofdletters'
                },
                'colStrength': {
                    'identical': 'Alles sorteren',
                    'primary': 'Alleen sorteren op letters',
                    'quaternary': 'Sorteren op accenten/hoofdlettergebruik/breedte/Kana',
                    'secondary': 'Sorteren op accenten',
                    'tertiary': 'Sorteren op accenten/hoofdlettergebruik/breedte'
                },
                'colNumeric': {
                    'no': 'Cijfers afzonderlijk sorteren',
                    'yes': 'Cijfers numeriek sorteren'
                },
                'colNormalization': {
                    'no': 'Zonder normalisatie sorteren',
                    'yes': 'Unicode genormaliseerd sorteren'
                },
                'calendar': {
                    'japanese': 'Japanse kalender',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptische kalender',
                    'dangi': 'dangi',
                    'ethiopic': 'Ethiopische kalender',
                    'ethiopic-amete-alem': 'Ethiopische Amete Alem-kalender',
                    'gregorian': 'Gregoriaanse kalender',
                    'hebrew': 'Hebreeuwse kalender',
                    'persian': 'Perzische kalender',
                    'roc': 'Kalender van de Chinese Republiek',
                    'chinese': 'Chinese kalender',
                    'buddhist': 'Boeddhistische kalender',
                    'indian': 'Indiase nationale kalender',
                    'islamic': 'Islamitische kalender',
                    'islamic-civil': 'Islamitische kalender (cyclisch)',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Telefoonboeksorteervolgorde',
                    'gb2312han': 'Vereenvoudigd-Chinese sorteervolgorde - GB2312',
                    'eor': 'eor',
                    'ducet': 'Standaard Unicode-sorteervolgorde',
                    'dictionary': 'Woordenboeksorteervolgorde',
                    'big5han': 'Traditioneel-Chinese sorteervolgorde - Big5',
                    'traditional': 'Traditionele sorteervolgorde',
                    'standard': 'standaard sorteervolgorde',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Sorteervolgorde radicalen/strepen',
                    'stroke': 'Streeksorteervolgorde',
                    'searchjl': 'Zoeken op eerste Hangul-medeklinker',
                    'search': 'Algemeen zoeken',
                    'reformed': 'Herziene sorteervolgorde',
                    'pinyin': 'Pinyinvolgorde',
                    'phonetic': 'Fonetische sorteervolgorde'
                },
                'numbers': {
                    'knda': 'Kannada cijfers',
                    'khmr': 'Khmer cijfers',
                    'kali': 'kali',
                    'jpanfin': 'Japanse financiële cijfers',
                    'jpan': 'Japanse cijfers',
                    'java': 'Javaanse cijfers',
                    'hebr': 'Hebreeuwse cijfers',
                    'hantfin': 'Traditioneel Chinese financiële cijfers',
                    'hant': 'Traditioneel Chinese cijfers',
                    'hansfin': 'Vereenvoudigd Chinese financiële cijfers',
                    'hans': 'Vereenvoudigd Chinese cijfers',
                    'hanidec': 'Chinese decimale getallen',
                    'guru': 'Gurmukhi cijfers',
                    'gujr': 'Gujarati cijfers',
                    'greklow': 'Kleine Griekse cijfers',
                    'grek': 'Griekse cijfers',
                    'bali': 'Balinese cijfers',
                    'armnlow': 'Kleine Armeense cijfers',
                    'armn': 'Armeense cijfers',
                    'arabext': 'Uitgebreide Arabisch-Indische cijfers',
                    'arab': 'Arabisch-Indische cijfers',
                    'finance': 'Financiële cijfers',
                    'traditional': 'Traditionele cijfers',
                    'native': 'Binnenlandse cijfers',
                    'beng': 'Bengaalse cijfers',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Devanagari cijfers',
                    'orya': 'Oriya cijfers',
                    'osma': 'osma',
                    'roman': 'Romeinse cijfers',
                    'romanlow': 'Kleine Romeinse cijfers',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vai-cijfers',
                    'tibt': 'Tibetaanse cijfers',
                    'thai': 'Thaise cijfers',
                    'telu': 'Telugu cijfers',
                    'tamldec': 'Tamil cijfers',
                    'taml': 'Traditionele Tamil cijfers',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Myanmarese cijfers',
                    'mtei': 'mtei',
                    'mong': 'Mongoolse cijfers',
                    'mlym': 'Malayalam cijfers',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Westerse cijfers',
                    'laoo': 'Laotiaanse cijfers',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Georgische cijfers',
                    'fullwide': 'Cijfers met volledige breedte',
                    'ethi': 'Ethiopische cijfers'
                },
                'colAlternate': {
                    'non-ignorable': 'Symbolen sorteren',
                    'shifted': 'Sorteren zonder symbolen'
                },
                'colBackwards': {
                    'no': 'Normaal sorteren op accenten',
                    'yes': 'Omgekeerd sorteren op accenten'
                }
            },
            'keys': {
                'colNormalization': 'Genormaliseerd sorteren',
                'collation': 'Sorteervolgorde',
                'colHiraganaQuaternary': 'Kana sorteren',
                'colCaseLevel': 'Hoofdlettergevoelig sorteren',
                'colCaseFirst': 'Indelen op hoofdletters/kleine letters',
                'colBackwards': 'Omgekeerd sorteren op accenten',
                'colAlternate': 'Sorteren van symbolen negeren',
                'calendar': 'Kalender',
                'x': 'Privégebruik',
                'variableTop': 'Sorteren als symbolen',
                'va': 'Landvariant',
                'timezone': 'Tijdzone',
                'numbers': 'Cijfers',
                'currency': 'Valuta',
                'colStrength': 'Sorteervoorrang',
                'colNumeric': 'Numeriek sorteren'
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
                            'exemplarCity': 'Gambiereilanden'
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
                            'exemplarCity': 'Paaseiland'
                        },
                        'Efate': {
                            'exemplarCity': 'Efate'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Enderbury-eiland'
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
                            'exemplarCity': 'Marquesaseilanden'
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
                            'exemplarCity': 'Maldiven'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Réunion'
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
                            'exemplarCity': 'Chagosarchipel'
                        },
                        'Christmas': {
                            'exemplarCity': 'Christmaseiland'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocoseilanden'
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
                            'exemplarCity': 'Onbekende stad'
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
                            'exemplarCity': 'Zuidpool'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d’Urville'
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
                            'exemplarCity': 'Bahía de Banderas'
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
                            'exemplarCity': 'Blanc-Sablon'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Boa Vista'
                        },
                        'Bogota': {
                            'exemplarCity': 'Bogotá'
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
                            'exemplarCity': 'Beneden Prinsen Kwartier'
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
                            'exemplarCity': 'Martinique'
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
                            'exemplarCity': 'Mexico-stad'
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
                                'exemplarCity': 'Beulah, Noord-Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Noord-Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Noord-Dakota'
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
                            'exemplarCity': 'Pôrto Velho'
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
                            'exemplarCity': 'São Paulo'
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
                            'exemplarCity': 'Saint-Barthélemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John’s'
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
                            'exemplarCity': 'Zuid-Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sint-Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azoren'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Canarische Eilanden'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kaapverdië'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faeröer'
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
                            'exemplarCity': 'Moskou'
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
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Britse zomertijd'
                            },
                            'exemplarCity': 'Londen'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lissabon'
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
                            'exemplarCity': 'Istanboel'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Isle of Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Boekarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brussel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlijn'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrado'
                        },
                        'Athens': {
                            'exemplarCity': 'Athene'
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
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Oezjhorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporizja'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Warschau'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Wolgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wenen'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vaticaanstad'
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
                            'exemplarCity': 'Praag'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Parijs'
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
                                'daylight': 'Ierse zomertijd'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kopenhagen'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Boedapest'
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
                            'exemplarCity': 'Khartoem'
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
                            'exemplarCity': 'Sao Tomé'
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
                            'exemplarCity': 'Lomé'
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
                            'exemplarCity': 'Caïro'
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
                            'exemplarCity': 'Algiers'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Sjanghai'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seoul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sachalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minhstad'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyad'
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
                            'exemplarCity': 'Pyongyang'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom-Penh'
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
                            'exemplarCity': 'Dusjanbe'
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
                            'exemplarCity': 'Irkoetsk'
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
                            'exemplarCity': 'Urumqi'
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
                            'exemplarCity': 'Jakoetsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterinenburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jerevan'
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
                            'exemplarCity': 'Tasjkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapore'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asjchabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqtöbe'
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
                            'exemplarCity': 'Bahrein'
                        },
                        'Baku': {
                            'exemplarCity': 'Bakoe'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beiroet'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bisjkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Calcutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamtsjatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Kathmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
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
                            'exemplarCity': 'Koeweit'
                        },
                        'Macau': {
                            'exemplarCity': 'Macau'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makassar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manilla'
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
                            'standard': 'Seychelse tijd'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoaanse tijd',
                            'standard': 'Samoaanse standaardtijd',
                            'daylight': 'Samoaanse zomertijd'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samara-tijd',
                            'standard': 'Samara-standaardtijd',
                            'daylight': 'Samara-zomertijd'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalin-tijd',
                            'standard': 'Sachalin-standaardtijd',
                            'daylight': 'Sachalin-zomertijd'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera tijd'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réunionse tijd'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylorda-tijd',
                            'standard': 'Qyzylorda-standaardtijd',
                            'daylight': 'Qyzylorda-zomertijd'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Pohnpei tijd'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairneilandse tijd'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre en Miquelon-tijd',
                            'standard': 'Saint Pierre en Miquelon-standaardtijd',
                            'daylight': 'Saint Pierre en Miquelon-zomertijd'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenixeilandse tijd'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipijnse tijd',
                            'standard': 'Filipijnse standaardtijd',
                            'daylight': 'Filipijnse zomertijd'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peruaanse tijd',
                            'standard': 'Peruaanse standaardtijd',
                            'daylight': 'Peruaanse zomertijd'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayaanse tijd',
                            'standard': 'Paraguayaanse standaardtijd',
                            'daylight': 'Paraguayaanse zomertijd'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papoea-Nieuw-Guineese tijd'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Belause tijd'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistaanse tijd',
                            'standard': 'Pakistaanse standaardtijd',
                            'daylight': 'Pakistaanse zomertijd'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk-tijd',
                            'standard': 'Omsk-standaardtijd',
                            'daylight': 'Omsk-zomertijd'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsk-tijd',
                            'standard': 'Novosibirsk-standaardtijd',
                            'daylight': 'Novosibirsk-zomertijd'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Noordelijk Mariaanse tijd'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha-tijd',
                            'standard': 'Fernando de Noronha-standaardtijd',
                            'daylight': 'Fernando de Noronha-zomertijd'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolkeilandse tijd'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuese tijd'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundland-tijd',
                            'standard': 'Newfoundland-standaardtijd',
                            'daylight': 'Newfoundland-zomertijd'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazone-tijd',
                            'standard': 'Amazone-standaardtijd',
                            'daylight': 'Amazone-zomertijd'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Central-tijd',
                            'standard': 'Central-standaardtijd',
                            'daylight': 'Central-zomertijd'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Eastern-tijd',
                            'standard': 'Eastern-standaardtijd',
                            'daylight': 'Eastern-zomertijd'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Mountain-tijd',
                            'standard': 'Mountain-standaardtijd',
                            'daylight': 'Mountain-zomertijd'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Pacific-tijd',
                            'standard': 'Pacific-standaardtijd',
                            'daylight': 'Pacific-zomertijd'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyr-tijd',
                            'standard': 'Anadyr-standaardtijd',
                            'daylight': 'Anadyr-zomertijd'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtau-tijd',
                            'standard': 'Aqtau-standaardtijd',
                            'daylight': 'Aqtau-zomertijd'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtöbe-tijd',
                            'standard': 'Aqtöbe-standaardtijd',
                            'daylight': 'Aqtöbe-zomertijd'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kaapverdische tijd',
                            'standard': 'Kaapverdische standaardtijd',
                            'daylight': 'Kaapverdische zomertijd'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorro-tijd'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham tijd',
                            'standard': 'Chatham standaardtijd',
                            'daylight': 'Chatham zomertijd'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chileense tijd',
                            'standard': 'Chileense standaardtijd',
                            'daylight': 'Chileense zomertijd'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Chinese tijd',
                            'standard': 'Chinese standaardtijd',
                            'daylight': 'Chinese zomertijd'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Tsjojbalsan tijd',
                            'standard': 'Tsjojbalsan standaardtijd',
                            'daylight': 'Tsjojbalsan zomertijd'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Christmaseilandse tijd'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Cocoseilandse tijd'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Colombiaanse tijd',
                            'standard': 'Colombiaanse standaardtijd',
                            'daylight': 'Colombiaanse zomertijd'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookeilandse tijd',
                            'standard': 'Cookeilandse standaardtijd',
                            'daylight': 'Cookeilandse halve zomertijd'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Cubaanse tijd',
                            'standard': 'Cubaanse standaardtijd',
                            'daylight': 'Cubaanse zomertijd'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis tijd'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville tijd'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Oost-Timorese tijd'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Paaseilandse tijd',
                            'standard': 'Paaseilandse standaardtijd',
                            'daylight': 'Paaseilandse zomertijd'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadoraanse tijd'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Midden-Europese tijd',
                            'standard': 'Midden-Europese standaardtijd',
                            'daylight': 'Midden-Europese zomertijd'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Oost-Europese tijd',
                            'standard': 'Oost-Europese standaardtijd',
                            'daylight': 'Oost-Europese zomertijd'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'West-Europese tijd',
                            'standard': 'West-Europese standaardtijd',
                            'daylight': 'West-Europese zomertijd'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandeilandse tijd',
                            'standard': 'Falklandeilandse standaardtijd',
                            'daylight': 'Falklandeilandse zomertijd'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fijische tijd',
                            'standard': 'Fijische standaardtijd',
                            'daylight': 'Fijische zomertijd'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Frans-Guyaanse tijd'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Franse zuidelijke en Antarctische tijd'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagoseilandse tijd'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau-eilandse tijd'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongaanse tijd',
                            'standard': 'Tongaanse standaardtijd',
                            'daylight': 'Tongaanse zomertijd'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuukse tijd'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmeense tijd',
                            'standard': 'Turkmeense standaardtijd',
                            'daylight': 'Turkmeense zomertijd'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvaluaanse tijd'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayaanse tijd',
                            'standard': 'Uruguayaanse standaardtijd',
                            'daylight': 'Uruguayaanse zomertijd'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Oezbeekse tijd',
                            'standard': 'Oezbeekse standaardtijd',
                            'daylight': 'Oezbeekse zomertijd'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatuaanse tijd',
                            'standard': 'Vanuatuaanse standaardtijd',
                            'daylight': 'Vanuatuaanse zomertijd'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinenburg-tijd',
                            'standard': 'Jekaterinenburg-standaardtijd',
                            'daylight': 'Jekaterinenburg-zomertijd'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakoetsk-tijd',
                            'standard': 'Jakoetsk-standaardtijd',
                            'daylight': 'Jakoetsk-zomertijd'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis en Futunase tijd'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake-eilandse tijd'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostok tijd'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Wolgograd-tijd',
                            'standard': 'Wolgograd-standaardtijd',
                            'daylight': 'Wolgograd-zomertijd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostok-tijd',
                            'standard': 'Vladivostok-standaardtijd',
                            'daylight': 'Vladivostok-zomertijd'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezolaanse tijd'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadzjiekse tijd'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei tijd',
                            'standard': 'Taipei standaardtijd',
                            'daylight': 'Taipei zomertijd'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitiaanse tijd'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa tijd'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinaamse tijd'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Zuid-Georgische tijd'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonseilandse tijd'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporese standaardtijd'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Golf standaardtijd'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamese standaardtijd'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'West-Groenlandse tijd',
                            'standard': 'West-Groenlandse standaardtijd',
                            'daylight': 'West-Groenlandse zomertijd'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Oost-Groenlandse tijd',
                            'standard': 'Oost-Groenlandse standaardtijd',
                            'daylight': 'Oost-Groenlandse zomertijd'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwich Mean Time'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilberteilandse tijd'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgische tijd',
                            'standard': 'Georgische standaardtijd',
                            'daylight': 'Georgische zomertijd'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambiereilandse tijd'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre-tijd',
                            'standard': 'Acre-standaardtijd',
                            'daylight': 'Acre-zomertijd'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afghaanse tijd'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Centraal-Afrikaanse tijd'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Oost-Afrikaanse tijd'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Zuid-Afrikaanse tijd'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'West-Afrikaanse tijd',
                            'standard': 'West-Afrikaanse standaardtijd',
                            'daylight': 'West-Afrikaanse zomertijd'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaska-tijd',
                            'standard': 'Alaska-standaardtijd',
                            'daylight': 'Alaska-zomertijd'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Alma-Ata-tijd',
                            'standard': 'Alma-Ata-standaardtijd',
                            'daylight': 'Alma-Ata-zomertijd'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabische tijd',
                            'standard': 'Arabische standaardtijd',
                            'daylight': 'Arabische zomertijd'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentijnse tijd',
                            'standard': 'Argentijnse standaardtijd',
                            'daylight': 'Argentijnse zomertijd'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'West-Argentijnse tijd',
                            'standard': 'West-Argentijnse standaardtijd',
                            'daylight': 'West-Argentijnse zomertijd'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armeense tijd',
                            'standard': 'Armeense standaardtijd',
                            'daylight': 'Armeense zomertijd'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantic-tijd',
                            'standard': 'Atlantic-standaardtijd',
                            'daylight': 'Atlantic-zomertijd'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Midden-Australische tijd',
                            'standard': 'Midden-Australische standaardtijd',
                            'daylight': 'Midden-Australische zomertijd'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Midden-Australische westelijke tijd',
                            'standard': 'Midden-Australische westelijke standaardtijd',
                            'daylight': 'Midden-Australische westelijke zomertijd'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Oost-Australische tijd',
                            'standard': 'Oost-Australische standaardtijd',
                            'daylight': 'Oost-Australische zomertijd'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'West-Australische tijd',
                            'standard': 'West-Australische standaardtijd',
                            'daylight': 'West-Australische zomertijd'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbeidzjaanse tijd',
                            'standard': 'Azerbeidzjaanse standaardtijd',
                            'daylight': 'Azerbeidzjaanse zomertijd'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azoren-tijd',
                            'standard': 'Azoren-standaardtijd',
                            'daylight': 'Azoren-zomertijd'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bengalese tijd',
                            'standard': 'Bengalese standaardtijd',
                            'daylight': 'Bengalese zomertijd'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutaanse tijd'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Boliviaanse tijd'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Braziliaanse tijd',
                            'standard': 'Braziliaanse standaardtijd',
                            'daylight': 'Braziliaanse zomertijd'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Bruneise tijd'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyaanse tijd'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-Aleoetische tijd',
                            'standard': 'Hawaii-Aleoetische standaardtijd',
                            'daylight': 'Hawaii-Aleoetische zomertijd'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongse tijd',
                            'standard': 'Hongkongse standaardtijd',
                            'daylight': 'Hongkongse zomertijd'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovd tijd',
                            'standard': 'Hovd standaardtijd',
                            'daylight': 'Hovd zomertijd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indiase tijd'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indische Oceaan-tijd'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indochinese tijd'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Centraal-Indonesische tijd'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Oost-Indonesische tijd'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'West-Indonesische tijd'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iraanse tijd',
                            'standard': 'Iraanse standaardtijd',
                            'daylight': 'Iraanse zomertijd'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkoetsk-tijd',
                            'standard': 'Irkoetsk-standaardtijd',
                            'daylight': 'Irkoetsk-zomertijd'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israëlische tijd',
                            'standard': 'Israëlische standaardtijd',
                            'daylight': 'Israëlische zomertijd'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japanse tijd',
                            'standard': 'Japanse standaardtijd',
                            'daylight': 'Japanse zomertijd'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamtsjatski-tijd',
                            'standard': 'Petropavlovsk-Kamtsjatski-standaardtijd',
                            'daylight': 'Petropavlovsk-Kamtsjatski-zomertijd'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Oost-Kazachse tijd'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'West-Kazachse tijd'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Koreaanse tijd',
                            'standard': 'Koreaanse standaardtijd',
                            'daylight': 'Koreaanse zomertijd'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraese tijd'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsk-tijd',
                            'standard': 'Krasnojarsk-standaardtijd',
                            'daylight': 'Krasnojarsk-zomertijd'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgizische tijd'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Lanka-tijd'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Line-eilandse tijd'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe-eilandse tijd',
                            'standard': 'Lord Howe-eilandse standaardtijd',
                            'daylight': 'Lord Howe-eilandse zomertijd'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macause tijd',
                            'standard': 'Macause standaardtijd',
                            'daylight': 'Macause zomertijd'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie-eilandse tijd'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan-tijd',
                            'standard': 'Magadan-standaardtijd',
                            'daylight': 'Magadan-zomertijd'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Maleisische tijd'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivische tijd'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesaseilandse tijd'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshalleilandse tijd'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiaanse tijd',
                            'standard': 'Mauritiaanse standaardtijd',
                            'daylight': 'Mauritiaanse zomertijd'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson tijd'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulaanbaatar tijd',
                            'standard': 'Ulaanbaatar standaardtijd',
                            'daylight': 'Ulaanbaatar zomertijd'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskou-tijd',
                            'standard': 'Moskou-standaardtijd',
                            'daylight': 'Moskou-zomertijd'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarese tijd'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauruaanse tijd'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalese tijd'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nieuw-Caledonische tijd',
                            'standard': 'Nieuw-Caledonische standaardtijd',
                            'daylight': 'Nieuw-Caledonische zomertijd'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Nieuw-Zeelandse tijd',
                            'standard': 'Nieuw-Zeelandse standaardtijd',
                            'daylight': 'Nieuw-Zeelandse zomertijd'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}-tijd',
                'regionFormat-type-daylight': 'Zomertijd {0}',
                'regionFormat-type-standard': 'Standaardtijd {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'jul.',
                                '6': 'jun.',
                                '5': 'mei',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'sep.',
                                '1': 'jan.',
                                '2': 'feb.',
                                '3': 'mrt.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'augustus',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'mei',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januari',
                                '2': 'februari',
                                '3': 'maart',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug',
                                '7': 'jul',
                                '6': 'jun',
                                '5': 'mei',
                                '12': 'dec',
                                '11': 'nov',
                                '10': 'okt',
                                '9': 'sep',
                                '1': 'jan',
                                '2': 'feb',
                                '3': 'mrt',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'augustus',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'mei',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januari',
                                '2': 'februari',
                                '3': 'maart',
                                '4': 'april'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'zo',
                                'mon': 'ma',
                                'tue': 'di',
                                'wed': 'wo',
                                'thu': 'do',
                                'fri': 'vr',
                                'sat': 'za'
                            },
                            'narrow': {
                                'sun': 'Z',
                                'mon': 'M',
                                'tue': 'D',
                                'wed': 'W',
                                'thu': 'D',
                                'fri': 'V',
                                'sat': 'Z'
                            },
                            'short': {
                                'sun': 'zo',
                                'mon': 'ma',
                                'tue': 'di',
                                'wed': 'wo',
                                'thu': 'do',
                                'fri': 'vr',
                                'sat': 'za'
                            },
                            'wide': {
                                'sun': 'zondag',
                                'mon': 'maandag',
                                'tue': 'dinsdag',
                                'wed': 'woensdag',
                                'thu': 'donderdag',
                                'fri': 'vrijdag',
                                'sat': 'zaterdag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'zo',
                                'mon': 'ma',
                                'tue': 'di',
                                'wed': 'wo',
                                'thu': 'do',
                                'fri': 'vr',
                                'sat': 'za'
                            },
                            'narrow': {
                                'sun': 'Z',
                                'mon': 'M',
                                'tue': 'D',
                                'wed': 'W',
                                'thu': 'D',
                                'fri': 'V',
                                'sat': 'Z'
                            },
                            'short': {
                                'sun': 'zo',
                                'mon': 'ma',
                                'tue': 'di',
                                'wed': 'wo',
                                'thu': 'do',
                                'fri': 'vr',
                                'sat': 'za'
                            },
                            'wide': {
                                'sun': 'zondag',
                                'mon': 'maandag',
                                'tue': 'dinsdag',
                                'wed': 'woensdag',
                                'thu': 'donderdag',
                                'fri': 'vrijdag',
                                'sat': 'zaterdag'
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
                                '1': '1e kwartaal',
                                '2': '2e kwartaal',
                                '3': '3e kwartaal',
                                '4': '4e kwartaal'
                            }
                        },
                        'stand-alone': {
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
                                '1': '1e kwartaal',
                                '2': '2e kwartaal',
                                '3': '3e kwartaal',
                                '4': '4e kwartaal'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'AM',
                                'noon': '12 uur \'s middags',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'noon': 'n',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'noon': '12 uur \'s middags',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'a.m.',
                                'noon': '12 uur \'s middags',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'am': 'AM',
                                'noon': 'n',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'voormiddag',
                                'noon': '12 uur \'s middags',
                                'pm': 'p.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Voor Christus',
                            '0-alt-variant': 'vóór gewone jaartelling',
                            '1': 'na Christus',
                            '1-alt-variant': 'gewone jaartelling'
                        },
                        'eraAbbr': {
                            '0': 'v.Chr.',
                            '0-alt-variant': 'v.g.j.',
                            '1': 'n.Chr.',
                            '1-alt-variant': 'g.j.'
                        },
                        'eraNarrow': {
                            '0': 'v.C.',
                            '0-alt-variant': 'vgj',
                            '1': 'n.C.',
                            '1-alt-variant': 'gj'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd-MM-yy'
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
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E d MMM y',
                            'EHms': 'E HH:mm:ss',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E d MMM y G',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH',
                            'h': 'h a',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd-M',
                            'MEd': 'E d-M',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'MMMMd': 'd MMMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M-y',
                            'yMd': 'd-M-y',
                            'yMEd': 'E d-M-y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y'
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
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'E dd-MM - E dd-MM',
                                'M': 'E dd-MM - E dd-MM'
                            },
                            'Md': {
                                'd': 'dd-MM - dd-MM',
                                'M': 'dd-MM - dd-MM'
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
                            'intervalFormatFallback': '{0} - {1}',
                            'y': {
                                'y': 'y-y'
                            },
                            'yM': {
                                'M': 'MM-y - MM-y',
                                'y': 'MM-y - MM-y'
                            },
                            'yMd': {
                                'd': 'dd-MM-y - dd-MM-y',
                                'M': 'dd-MM-y - dd-MM-y',
                                'y': 'dd-MM-y - dd-MM-y'
                            },
                            'yMEd': {
                                'd': 'E dd-MM-y - E dd-MM-y',
                                'M': 'E dd-MM-y - E dd-MM-y',
                                'y': 'E dd-MM-y - E dd-MM-y'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y',
                                'y': 'MMM y - MMM y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d - E d MMM y',
                                'M': 'E d MMM - E d MMM y',
                                'y': 'E d MMM y - E d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
                                'y': 'MMMM y - MMMM y'
                            },
                            'MMMM': {
                                'M': 'MMMM–MMMM'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
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
