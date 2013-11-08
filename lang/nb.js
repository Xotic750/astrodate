/* AstroDate
 * Language: nb
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
        AstroDate.lang('nb', {
            'codePatterns': {
                'language': 'Spr\u00E5k: {0}',
                'script': 'Skrift: {0}',
                'territory': 'Omr\u00E5de: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Sort\u00E9r kana separat',
                    'yes': 'Sort\u00E9r med skille mellom forskjellige varianter av kana'
                },
                'colCaseLevel': {
                    'no': 'Sort\u00E9r uavhengig av store og sm\u00E5 bokstaver.',
                    'yes': 'Sort\u00E9r med skille mellom sm\u00E5 og store bokstaver'
                },
                'colCaseFirst': {
                    'lower': 'Sort\u00E9r sm\u00E5 bokstaver f\u00F8rst',
                    'no': 'Sort\u00E9r store og sm\u00E5 bokstaver i vanlig rekkef\u00F8lge',
                    'upper': 'Sort\u00E9r store bokstaver f\u00F8rst'
                },
                'colStrength': {
                    'identical': 'Sort\u00E9r alle',
                    'primary': 'Sort\u00E9r bare basisbokstaver',
                    'quaternary': 'Sort\u00E9r aksenttegn / sm\u00E5 og store bokstaver / bredde / kana',
                    'secondary': 'Sort\u00E9r aksenttegn',
                    'tertiary': 'Sort\u00E9r aksenttegn / sm\u00E5 og store bokstaver / bredde'
                },
                'colNumeric': {
                    'no': 'Sort\u00E9r sifre individuelt',
                    'yes': 'Sort\u00E9r sifre numerisk'
                },
                'colNormalization': {
                    'no': 'Sort\u00E9r uten normalisering',
                    'yes': 'Sort\u00E9r Unicode normalisert'
                },
                'calendar': {
                    'japanese': 'japansk kalender',
                    'iso8601': 'ISO-8601-kalender',
                    'coptic': 'koptisk kalender',
                    'dangi': 'dangisk kalender',
                    'ethiopic': 'etiopisk kalender',
                    'ethiopic-amete-alem': 'etiopisk amete-alem-kalender',
                    'gregorian': 'gregoriansk kalender',
                    'hebrew': 'hebraisk kalender',
                    'persian': 'persisk kalender',
                    'roc': 'kalender for Republikken Kina',
                    'chinese': 'kinesisk kalender',
                    'buddhist': 'buddhistisk kalender',
                    'indian': 'indisk nasjonalkalender',
                    'islamic': 'islamsk kalender',
                    'islamic-civil': 'islamsk sivil kalender',
                    'islamic-rgsa': 'islamsk kalender (Saudi-Arabia. synlighet)',
                    'islamic-tbla': 'islamsk kalender (tabellarisk, astronomisk epoke)',
                    'islamic-umalqura': 'islamsk kalender (Umm al-Qura)'
                },
                'collation': {
                    'phonebook': 'telefonkatalogsortering',
                    'gb2312han': 'forenklet kinesisk sortering - GB2312',
                    'eor': 'sorteringsrekkef\u00F8lge for flerspr\u00E5klige europeiske dokumenter',
                    'ducet': 'standard Unicode-sorteringsrekkef\u00F8lge',
                    'dictionary': 'ordlistesortering',
                    'big5han': 'tradisjonell kinesisk sortering - Big 5',
                    'traditional': 'tradisjonell sortering',
                    'standard': 'standard sorteringsrekkef\u00F8lge',
                    'zhuyin': 'zhuyin-sortering',
                    'unihan': 'radikal-strek-sortering',
                    'stroke': 'streksortering',
                    'searchjl': 'S\u00F8k etter f\u00F8rste konsonant i hangul',
                    'search': 's\u00F8k av normaltype',
                    'reformed': 'reformert sortering',
                    'pinyin': 'pinyinsortering',
                    'phonetic': 'Fonetisk sorteringsrekkef\u00F8lge'
                },
                'numbers': {
                    'knda': 'kannada-tall',
                    'khmr': 'khmer-tall',
                    'kali': 'kayah li-tall',
                    'jpanfin': 'japanske finanstallsymboler',
                    'jpan': 'japanske tallsymboler',
                    'java': 'java-tall',
                    'hebr': 'hebraiske tallsymboler',
                    'hantfin': 'tradisjonelle kinesiske finanstallsymboler',
                    'hant': 'tradisjonelle kinesiske tallsymboler',
                    'hansfin': 'forenklede kinesiske finanstallsymboler',
                    'hans': 'forenklede kinesiske tallsymboler',
                    'hanidec': 'kinesiske desimaltallsymboler',
                    'guru': 'gurmukhi-tall',
                    'gujr': 'gujarati-tall',
                    'greklow': 'sm\u00E5 greske tallsymboler',
                    'grek': 'greske tallsymboler',
                    'bali': 'baliske tall',
                    'armnlow': 'sm\u00E5 armenske tallsymboler',
                    'armn': 'armenske tallsymboler',
                    'arabext': 'utvidede arabisk-indiske tall',
                    'arab': 'arabisk-indiske tall',
                    'finance': 'Finansielle tall',
                    'traditional': 'Tradisjonelle tall',
                    'native': 'Spr\u00E5kspesifikke sifre',
                    'beng': 'bengalske tall',
                    'brah': 'brahmiske tall',
                    'cakm': 'chakma-tall',
                    'cham': 'cham-tall',
                    'deva': 'devanagari-tall',
                    'orya': 'oriya-tall',
                    'osma': 'osmanya-tall',
                    'roman': 'romertall',
                    'romanlow': 'sm\u00E5 romertall',
                    'saur': 'sarushatra-tall',
                    'shrd': 'sharada-tall',
                    'sora': 'sora sompeng-tall',
                    'sund': 'sundanese-tall',
                    'vaii': 'vai-sifre',
                    'tibt': 'tibetanske tall',
                    'thai': 'thailandske tall',
                    'telu': 'telugu-tall',
                    'tamldec': 'tamilske tall',
                    'taml': 'tamilske tallsymboler',
                    'talu': 'ny tai lue-tall',
                    'takr': 'takri-tall',
                    'olck': 'ol chiki-tall',
                    'nkoo': 'n\'ko-tall',
                    'mymrshan': 'myanmar shan-tall',
                    'mymr': 'myanmar-tall',
                    'mtei': 'meetei mayek-tall',
                    'mong': 'mongolske tall',
                    'mlym': 'malayalam-tall',
                    'limb': 'limbu-tall',
                    'lepc': 'lepecha-tall',
                    'latn': 'vestlige tall',
                    'laoo': 'lao-tall',
                    'lanatham': 'tai tham tham-tall',
                    'lana': 'thai tham hora-tall',
                    'geor': 'georgiske tall',
                    'fullwide': 'tall med full bredde',
                    'ethi': 'etiopiske tallsymboler'
                },
                'colAlternate': {
                    'non-ignorable': 'Sort\u00E9r symboler',
                    'shifted': 'Ignorer symboler under sortering'
                },
                'colBackwards': {
                    'no': 'Sort\u00E9r aksenttegn normalt',
                    'yes': 'Sort\u00E9r aksenttegn i motsatt rekkef\u00F8lge'
                }
            },
            'keys': {
                'colNormalization': 'Normalisert sortering',
                'collation': 'sorteringsrekkef\u00F8lge',
                'colHiraganaQuaternary': 'Sortering av kana',
                'colCaseLevel': 'Sortering av store og sm\u00E5 bokstaver',
                'colCaseFirst': 'Organisering av store og sm\u00E5 bokstaver',
                'colBackwards': 'Omvendt sortering etter aksent',
                'colAlternate': 'Ignorer sortering etter symboler',
                'calendar': 'kalender',
                'x': 'privat bruk',
                'variableTop': 'Sort\u00E9r som symboler',
                'va': 'Spr\u00E5kvariant',
                'timezone': 'tidssone',
                'numbers': 'tall',
                'currency': 'valuta',
                'colStrength': 'Sorteringsstyrke',
                'colNumeric': 'Numerisk sortering'
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
                            'exemplarCity': 'Gal\u00E1pagos\u00F8yene'
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
                            'exemplarCity': 'P\u00E5ske\u00F8ya'
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
                            'exemplarCity': 'Maldivene'
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
                            'exemplarCity': 'Mauritius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Christmas\u00F8ya'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokos\u00F8yene'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komorene'
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
                            'exemplarCity': 'ukjent by'
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
                            'exemplarCity': 'S\u00F8rpolen'
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
                            'exemplarCity': 'Cayman\u00F8yene'
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
                            'exemplarCity': 'Bah\u00EDa Banderas'
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
                            'exemplarCity': 'Godth\u00E5b'
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
                            'exemplarCity': 'M\u00E9rida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Mexico by'
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
                                'exemplarCity': 'Beulah, Nord-Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Nord-Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Nord-Dakota'
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
                            'exemplarCity': 'St John\'s'
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
                            'exemplarCity': 'S\u00F8r-Georgia'
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
                            'exemplarCity': 'Azorene'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanari\u00F8yene'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kapp Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'F\u00E6r\u00F8yene'
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
                                'daylight': 'britisk sommertid'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisboa'
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
                            'exemplarCity': 'Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucuresti'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brussel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Beograd'
                        },
                        'Athens': {
                            'exemplarCity': 'Athen'
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
                            'exemplarCity': 'Uzjhorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporozje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Warszawa'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wien'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikanstaten'
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
                            'exemplarCity': 'Praha'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Paris'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsingfors'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'irsk sommertid'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'K\u00F8benhavn'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chi\u0219in\u0103u'
                        },
                        'Busingen': {
                            'exemplarCity': 'B\u00FCsingen'
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
                            'exemplarCity': 'El Aai\u00FAn'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Djibouti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar-es-Salaam'
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
                            'exemplarCity': 'N\'Djamena'
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
                            'exemplarCity': 'Kairo'
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
                            'exemplarCity': 'Shanghai'
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
                            'exemplarCity': 'Ho Chi Minh-byen'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyadh'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kyzylorda'
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
                            'exemplarCity': 'Uralsk'
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
                            'exemplarCity': 'Damaskus'
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
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jajapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u00DCr\u00FCmqi'
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
                            'exemplarCity': 'Jekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokyo'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimpu'
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
                            'exemplarCity': 'Jerusalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asjkhabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqt\u00F6be'
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
                            'exemplarCity': 'Bisjkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choybalsan'
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
                            'exemplarCity': 'Katmandu'
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
                            'exemplarCity': 'Kuwait'
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
                            'exemplarCity': 'Muscat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nikosia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'samoansk tid',
                            'standard': 'samoansk normaltid',
                            'daylight': 'samoansk sommertid'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Russisk (Samara) tid',
                            'standard': 'Russisk (Samara) normaltid',
                            'daylight': 'Russisk (Samara) sommertid'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'tidssone for Sakhalin',
                            'standard': 'normaltid for Sakhalin',
                            'daylight': 'sommertid for Sakhalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'tidssone for Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'tidssone for R\u00E9union'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylorda-tid',
                            'standard': 'Qyzylorda, standardtid',
                            'daylight': 'Qyzylorda, sommertid'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'tidssone for Pohnpei'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'tidssone for Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'tidssone for Saint-Pierre-et-Miquelon',
                            'standard': 'normaltid for Saint-Pierre-et-Miquelon',
                            'daylight': 'sommertid for Saint-Pierre-et-Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'tidssone for Phoenix\u00F8yene'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'filippinsk tid',
                            'standard': 'filippinsk normaltid',
                            'daylight': 'filippinsk sommertid'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'peruansk tid',
                            'standard': 'peruansk normaltid',
                            'daylight': 'peruansk sommertid'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'paraguayansk tid',
                            'standard': 'paraguayansk normaltid',
                            'daylight': 'paraguayansk sommertid'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'papuansk tid'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'palauisk tid'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'pakistansk tid',
                            'standard': 'pakistansk normaltid',
                            'daylight': 'pakistansk sommertid'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'tidssone for Omsk',
                            'standard': 'normaltid for Omsk',
                            'daylight': 'sommertid for Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'tidssone for Novosibirsk',
                            'standard': 'normaltid for Novosibirsk',
                            'daylight': 'sommertid for Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Nord-Marianene-tid'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'tidssone for Fernando de Noronha',
                            'standard': 'normaltid for Fernando de Noronha',
                            'daylight': 'sommertid for Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'tidssone for Norfolk\u00F8ya'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'tidssone for Niue'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'tidssone for Newfoundland',
                            'standard': 'normaltid for Newfoundland',
                            'daylight': 'sommertid for Newfoundland'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'newzealandsk tid',
                            'standard': 'newzealandsk normaltid',
                            'daylight': 'newzealandsk sommertid'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'kaledonsk tid',
                            'standard': 'kaledonsk normaltid',
                            'daylight': 'kaledonsk sommertid'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'tidssone for det sentrale Nord-Amerika',
                            'standard': 'normaltid for det sentrale Nord-Amerika',
                            'daylight': 'sommertid for det sentrale Nord-Amerika'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'tidssone for den nordamerikanske \u00F8stkysten',
                            'standard': 'normaltid for den nordamerikanske \u00F8stkysten',
                            'daylight': 'sommertid for den nordamerikanske \u00F8stkysten'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'tidssone for Rocky Mountains (USA)',
                            'standard': 'normaltid for Rocky Mountains (USA)',
                            'daylight': 'sommertid for Rocky Mountains (USA)'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'tidssone for den nordamerikanske Stillehavskysten',
                            'standard': 'normaltid for den nordamerikanske Stillehavskysten',
                            'daylight': 'sommertid for den nordamerikanske Stillehavskysten'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Russisk (Anadyr) tid',
                            'standard': 'Russisk (Anadyr) normaltid',
                            'daylight': 'Russisk (Anadyr) sommertid'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtau-tid',
                            'standard': 'Aqtau, standardtid',
                            'daylight': 'Aqtau, sommertid'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtobe-tid',
                            'standard': 'Aqtobe, standardtid',
                            'daylight': 'Aqtobe, sommertid'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'tidssone for Kapp Verde',
                            'standard': 'normaltid for Kapp Verde',
                            'daylight': 'sommertid for Kapp Verde'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Casey-tid'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'tidssone for Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'tidssone for Chatham',
                            'standard': 'normaltid for Chatham',
                            'daylight': 'sommertid for Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'chilensk tid',
                            'standard': 'chilensk normaltid',
                            'daylight': 'chilensk sommertid'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'kinesisk tid',
                            'standard': 'kinesisk standardtid',
                            'daylight': 'kinesisk sommertid'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'tidssone for Tsjojbalsan',
                            'standard': 'normaltid for Tsjojbalsan',
                            'daylight': 'sommertid for Tsjojbalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'tidssone for Christmas\u00F8ya'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'tidssone for Kokos\u00F8yene'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'colombiansk tid',
                            'standard': 'colombiansk normaltid',
                            'daylight': 'colombiansk sommertid'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'tidssone for Cook\u00F8yene',
                            'standard': 'normaltid for Cook\u00F8yene',
                            'daylight': 'halv sommertid for Cook\u00F8yene'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'cubansk tid',
                            'standard': 'cubansk normaltid',
                            'daylight': 'cubansk sommertid'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'tidssone for Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'tidssone for Dumont d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u00F8st-timoresisk tid'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'tidssone for P\u00E5ske\u00F8ya',
                            'standard': 'normaltid for P\u00E5ske\u00F8ya',
                            'daylight': 'sommertid for P\u00E5ske\u00F8ya'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'ecuadoriansk tid'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'sentraleuropeisk tid',
                            'standard': 'sentraleuropeisk normaltid',
                            'daylight': 'sentraleuropeisk sommertid'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u00F8steuropeisk tid',
                            'standard': '\u00F8steuropeisk normaltid',
                            'daylight': '\u00F8steuropeisk sommertid'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'vesteuropeisk tid',
                            'standard': 'vesteuropeisk normaltid',
                            'daylight': 'vesteuropeisk sommertid'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'tidssone for Falklands\u00F8yene',
                            'standard': 'normaltid for Falklands\u00F8yene',
                            'daylight': 'sommertid for Falklands\u00F8yene'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'fijiansk tid',
                            'standard': 'fijiansk normaltid',
                            'daylight': 'fijiansk sommertid'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'tidssone for Fransk Guyana'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'tidssone for De franske s\u00F8rterritorier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'tidssone for Gal\u00E1pagos\u00F8yene'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'tidssone for Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'tongansk tid',
                            'standard': 'tongansk normaltid',
                            'daylight': 'tongansk sommertid'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'tidssone for Chuuk\u00F8yene'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'turkmensk tid',
                            'standard': 'turkmensk normaltid',
                            'daylight': 'turkmensk sommertid'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'tuvalsk tid'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'uruguayansk tid',
                            'standard': 'uruguayansk normaltid',
                            'daylight': 'uruguayansk sommertid'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'usbekisk tid',
                            'standard': 'usbekisk normaltid',
                            'daylight': 'usbekisk sommertid'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'vanuatisk tid',
                            'standard': 'vanuatisk normaltid',
                            'daylight': 'vanuatisk sommertid'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'tidssone for Jekaterinburg',
                            'standard': 'normaltid for Jekaterinburg',
                            'daylight': 'sommertid for Jekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'tidssone for Jakutsk',
                            'standard': 'normaltid for Jakutsk',
                            'daylight': 'sommertid for Jakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'tidssone for Wallis- og Futuna\u00F8yene'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'tidssone for Wake Island'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'tidssone for Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'tidssone for Volgograd',
                            'standard': 'normaltid for Volgograd',
                            'daylight': 'sommertid for Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'tidssone for Vladivostok',
                            'standard': 'normaltid for Vladivostok',
                            'daylight': 'sommertid for Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'venezuelansk tid'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'tadsjikisk tid'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'tidssone for Taipei',
                            'standard': 'normaltid for Taipei',
                            'daylight': 'sommertid for Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'tahitisk tid'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'tidssone for Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'surinamsk tid'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'tidssone for S\u00F8r-Georgia'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'tidssone for Salomon\u00F8yene'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'singaporsk tid'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'seychellisk tid'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guam-tid'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'vestgr\u00F8nlandsk tid',
                            'standard': 'vestgr\u00F8nlandsk normaltid',
                            'daylight': 'vestgr\u00F8nlandsk sommertid'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u00F8stgr\u00F8nlandsk tid',
                            'standard': '\u00F8stgr\u00F8nlandsk normaltid',
                            'daylight': '\u00F8stgr\u00F8nlandsk sommertid'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwich middeltid'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'tidssone for Gilbert\u00F8yene'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'georgisk tid',
                            'standard': 'georgisk normaltid',
                            'daylight': 'georgisk sommertid'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'tidssone for Gambier'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'tidssone for Amazonas',
                            'standard': 'normaltid for Amazonas',
                            'daylight': 'sommertid for Amazonas'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre-tid',
                            'standard': 'Acre normaltid',
                            'daylight': 'Acre sommertid'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'afghansk tid'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'sentralafrikansk tid'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u00F8stafrikansk tid'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 's\u00F8rafrikansk tid'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'vestafrikansk tid',
                            'standard': 'vestafrikansk normaltid',
                            'daylight': 'vestafrikansk sommertid'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'alaskisk tid',
                            'standard': 'alaskisk normaltid',
                            'daylight': 'alaskisk sommertid'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almaty-tid',
                            'standard': 'Almaty, standardtid',
                            'daylight': 'Almaty, sommertid'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'arabisk tid',
                            'standard': 'arabisk standardtid',
                            'daylight': 'arabisk sommertid'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'argentinsk tid',
                            'standard': 'argentinsk normaltid',
                            'daylight': 'argentinsk sommertid'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'vestargentinsk tid',
                            'standard': 'vestargentinsk normaltid',
                            'daylight': 'vestargentinsk sommertid'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'armensk tid',
                            'standard': 'armensk normaltid',
                            'daylight': 'armensk sommertid'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'atlanterhavskystlig tid',
                            'standard': 'atlanterhavskystlig standardtid',
                            'daylight': 'atlanterhavskystlig sommertid'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'sentralaustralsk tid',
                            'standard': 'sentralaustralsk normaltid',
                            'daylight': 'sentralaustralsk sommertid'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'vest-sentralaustralsk tid',
                            'standard': 'vest-sentralaustralsk normaltid',
                            'daylight': 'vest-sentralaustralsk sommertid'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u00F8staustralsk tid',
                            'standard': '\u00F8staustralsk normaltid',
                            'daylight': '\u00F8staustralsk sommertid'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'vestaustralsk tid',
                            'standard': 'vestaustralsk normaltid',
                            'daylight': 'vestaustralsk sommertid'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'aserbajdsjansk tid',
                            'standard': 'aserbajdsjansk normaltid',
                            'daylight': 'aserbajdsjansk sommertid'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'asorisk tid',
                            'standard': 'asorisk normaltid',
                            'daylight': 'asorisk sommertid'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'bangladeshisk tid',
                            'standard': 'bangladeshisk normaltid',
                            'daylight': 'bangladeshisk sommertid'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'bhutansk tid'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'boliviansk tid'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'tidssone for Brasilia',
                            'standard': 'normaltid for Brasilia',
                            'daylight': 'sommertid for Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'tidssone for Brunei Darussalam'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'tidssone for Persiabukta'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'guyansk tid'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'tidssone for Hawaii og Aleutene',
                            'standard': 'normaltid for Hawaii og Aleutene',
                            'daylight': 'sommertid for Hawaii og Aleutene'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'tidssone for Hongkong',
                            'standard': 'normaltid for Hongkong',
                            'daylight': 'sommertid for Hongkong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'tidssone for Khovd',
                            'standard': 'normaltid for Khovd',
                            'daylight': 'sommertid for Khovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'indisk tid'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'tidssone for Indiahavet'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'indokinesisk tid'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'sentralindonesisk tid'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u00F8stindonesisk tid'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'vestindonesisk tid'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'iransk tid',
                            'standard': 'iransk normaltid',
                            'daylight': 'iransk sommertid'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'tidssone for Irkutsk',
                            'standard': 'normaltid for Irkutsk',
                            'daylight': 'sommertid for Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'israelsk tid',
                            'standard': 'israelsk normaltid',
                            'daylight': 'israelsk sommertid'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'japansk tid',
                            'standard': 'japansk normaltid',
                            'daylight': 'japansk sommertid'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Russisk (Petropavlovsk-Kamtsjatskij) tid',
                            'standard': 'Russisk (Petropavlovsk-Kamtsjatskij) normaltid',
                            'daylight': 'Russisk (Petropavlovsk-Kamtsjatskij) sommertid'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u00F8stkasakhstansk tid'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'vestkasakhstansk tid'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'koreansk tid',
                            'standard': 'koreansk normaltid',
                            'daylight': 'koreansk sommertid'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'tidssone for Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'tidssone for Krasnojarsk',
                            'standard': 'normaltid for Krasnojarsk',
                            'daylight': 'sommertid for Krasnojarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'kirgisisk tid'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Lanka-tid'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'tidssone for Linje\u00F8yene'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'tidssone for Lord Howe-\u00F8ya',
                            'standard': 'normaltid for Lord Howe-\u00F8ya',
                            'daylight': 'sommertid for Lord Howe-\u00F8ya'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macau-tid',
                            'standard': 'Macau, standardtid',
                            'daylight': 'Macau, sommertid'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'tidssone for Macquarie\u00F8ya'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'tidssone for Magadan',
                            'standard': 'normaltid for Magadan',
                            'daylight': 'sommertid for Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'malaysisk tid'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'maldivisk tid'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'tidssone for Marquesas\u00F8yene'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'tidssone for Marshall\u00F8yene'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'mauritisk tid',
                            'standard': 'mauritisk normaltid',
                            'daylight': 'mauritisk sommertid'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'tidssone for Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'tidssone for Ulan Bator',
                            'standard': 'normaltid for Ulan Bator',
                            'daylight': 'sommertid for Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'tidssone for Moskva',
                            'standard': 'normaltid for Moskva',
                            'daylight': 'sommertid for Moskva'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'myanmarsk tid'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'naurisk tid'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'nepalsk tid'
                        }
                    }
                },
                'hourFormat': '+HH.mm;-HH.mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'tidssone for {0}',
                'regionFormat-type-daylight': 'sommertid \u2013 {0}',
                'regionFormat-type-standard': 'normaltid \u2013 {0}',
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
                                '5': 'mai',
                                '12': 'des.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'sep.',
                                '1': 'jan.',
                                '2': 'feb.',
                                '3': 'mar.',
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
                                '8': 'august',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'mai',
                                '12': 'desember',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'mars',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug',
                                '7': 'jul',
                                '6': 'jun',
                                '5': 'mai',
                                '12': 'des',
                                '11': 'nov',
                                '10': 'okt',
                                '9': 'sep',
                                '1': 'jan',
                                '2': 'feb',
                                '3': 'mar',
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
                                '8': 'august',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'mai',
                                '12': 'desember',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'mars',
                                '4': 'april'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 's\u00F8n.',
                                'mon': 'man.',
                                'tue': 'tir.',
                                'wed': 'ons.',
                                'thu': 'tor.',
                                'fri': 'fre.',
                                'sat': 'l\u00F8r.'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'O',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 's\u00F8.',
                                'mon': 'ma.',
                                'tue': 'ti.',
                                'wed': 'on.',
                                'thu': 'to.',
                                'fri': 'fr.',
                                'sat': 'l\u00F8.'
                            },
                            'wide': {
                                'sun': 's\u00F8ndag',
                                'mon': 'mandag',
                                'tue': 'tirsdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'l\u00F8rdag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 's\u00F8.',
                                'mon': 'ma.',
                                'tue': 'ti.',
                                'wed': 'on.',
                                'thu': 'to.',
                                'fri': 'fr.',
                                'sat': 'l\u00F8.'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'O',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 's\u00F8.',
                                'mon': 'ma.',
                                'tue': 'ti.',
                                'wed': 'on.',
                                'thu': 'to.',
                                'fri': 'fr.',
                                'sat': 'l\u00F8.'
                            },
                            'wide': {
                                'sun': 's\u00F8ndag',
                                'mon': 'mandag',
                                'tue': 'tirsdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'l\u00F8rdag'
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
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
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
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'am': 'a',
                                'pm': 'p'
                            },
                            'wide': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'am': 'a',
                                'pm': 'p'
                            },
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'f\u00F8r v\u00E5r tidsregning',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'v\u00E5r tidsregning'
                        },
                        'eraAbbr': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'fvt.',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'vt.'
                        },
                        'eraNarrow': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'fvt.',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'vt'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd. MMM y',
                        'short': 'dd.MM.yy'
                    },
                    'timeFormats': {
                        'full': 'HH.mm.ss zzzz',
                        'long': 'HH.mm.ss z',
                        'medium': 'HH.mm.ss',
                        'short': 'HH.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} \'kl.\' {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMMEd': 'E d. MMM y',
                            'yMMMd': 'd. MMM y',
                            'yMMM': 'MMM y',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E HH.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E d.',
                            'd': 'd.',
                            'GyMMMd': 'd. MMM y G',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'Hms': 'HH.mm.ss',
                            'hms': 'h.mm.ss a',
                            'Hm': 'HH.mm',
                            'hm': 'h.mm a',
                            'H': 'HH',
                            'EHms': 'E HH.mm.ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L.',
                            'Md': 'd.M.',
                            'MEd': 'E d.M',
                            'MMdd': 'd.M.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E d. MMM',
                            'ms': 'mm.ss',
                            'y': 'y',
                            'yM': 'M.y',
                            'yMd': 'd.M.y',
                            'yMEd': 'E d.MM.y',
                            'yMM': 'MM.y'
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
                                'd': 'E d.\u2013E d. MMM',
                                'M': 'E d. MMM\u2013E d. MMM'
                            },
                            'MMMd': {
                                'd': 'd.\u2013d. MMM',
                                'M': 'd. MMM\u2013d. MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E dd.MM.\u2013E dd.MM.',
                                'M': 'E dd.MM.\u2013E dd.MM.'
                            },
                            'Md': {
                                'd': 'dd.MM.\u2013dd.MM.',
                                'M': 'dd.MM.\u2013dd.MM.'
                            },
                            'M': {
                                'M': 'M.\u2013M.'
                            },
                            'Hv': {
                                'H': 'HH\u2013HH v'
                            },
                            'hv': {
                                'a': 'H\u2013H v',
                                'h': 'H\u2013H v'
                            },
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'MM.y\u2013MM.y',
                                'y': 'MM.y\u2013MM.y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y\u2013dd.MM.y',
                                'M': 'dd.MM.y\u2013dd.MM.y',
                                'y': 'dd.MM.y\u2013dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E dd.MM.y\u2013E dd.MM.y',
                                'M': 'E dd.MM.y\u2013E dd.MM.y',
                                'y': 'E dd.MM.y\u2013E dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y\u2013MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.\u2013d. MMM y',
                                'M': 'd. MMM\u2013d. MMM y',
                                'y': 'd. MMM y\u2013d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d.\u2013E d. MMM y',
                                'M': 'E d. MMM\u2013E d. MMM y',
                                'y': 'E d. MMM y\u2013E d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM\u2013MMMM y',
                                'y': 'MMMM y\u2013MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH.mm\u2013HH.mm v',
                                'm': 'HH.mm\u2013HH.mm v'
                            },
                            'hmv': {
                                'a': 'H.mm\u2013H.mm v',
                                'h': 'H.mm\u2013H.mm v',
                                'm': 'H.mm\u2013H.mm v'
                            },
                            'Hm': {
                                'H': 'HH.mm\u2013HH.mm',
                                'm': 'HH.mm\u2013HH.mm'
                            },
                            'hm': {
                                'a': 'H.mm\u2013H.mm',
                                'h': 'H.mm\u2013H.mm',
                                'm': 'H.mm\u2013H.mm'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'H\u2013H',
                                'h': 'H\u2013H'
                            },
                            'd': {
                                'd': 'd.\u2013d.'
                            },
                            'intervalFormatFallback': '{0}\u2013{1}'
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
