/* AstroDate
 * Language: en-IN
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
        AstroDate.lang('en-IN', {
            'codePatterns': {
                'language': 'Language: {0}',
                'script': 'Script: {0}',
                'territory': 'Region: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Sort Kana Separately',
                    'yes': 'Sort Kana Differently'
                },
                'colCaseLevel': {
                    'no': 'Sort Case Insensitive',
                    'yes': 'Sort Case Sensitive'
                },
                'colCaseFirst': {
                    'lower': 'Sort Lowercase First',
                    'no': 'Sort Normal Case Order',
                    'upper': 'Sort Uppercase First'
                },
                'colBackwards': {
                    'no': 'Sort Accents Normally',
                    'yes': 'Sort Accents Reversed'
                },
                'va': {
                    'posix': 'POSIX Compliant Locale'
                },
                'colStrength': {
                    'identical': 'Sort All',
                    'primary': 'Sort Base Letters Only',
                    'quaternary': 'Sort Accents/Case/Width/Kana',
                    'secondary': 'Sort Accents',
                    'tertiary': 'Sort Accents/Case/Width'
                },
                'colNumeric': {
                    'no': 'Sort Digits Individually',
                    'yes': 'Sort Digits Numerically'
                },
                'colNormalization': {
                    'no': 'Sort Without Normalisation',
                    'yes': 'Sort Unicode Normalised'
                },
                'calendar': {
                    'japanese': 'Japanese Calendar',
                    'iso8601': 'ISO-8601 Calendar',
                    'coptic': 'Coptic Calendar',
                    'dangi': 'Dangi Calendar',
                    'ethiopic': 'Ethiopic Calendar',
                    'ethiopic-amete-alem': 'Ethiopic Amete Alem Calendar',
                    'gregorian': 'Gregorian Calendar',
                    'hebrew': 'Hebrew Calendar',
                    'persian': 'Persian Calendar',
                    'roc': 'Minguo Calendar',
                    'chinese': 'Chinese Calendar',
                    'buddhist': 'Buddhist Calendar',
                    'indian': 'Indian National Calendar',
                    'islamic': 'Islamic Calendar',
                    'islamic-civil': 'Islamic Calendar (tabular, civil epoch)',
                    'islamic-rgsa': 'Islamic Calendar (Saudi Arabia, sighting)',
                    'islamic-tbla': 'Islamic Calendar (tabular, astronomical epoch)',
                    'islamic-umalqura': 'Islamic Calendar (Umm al-Qura)'
                },
                'collation': {
                    'phonebook': 'Phonebook Sort Order',
                    'gb2312han': 'Simplified Chinese Sort Order - GB2312',
                    'eor': 'European Ordering Rules',
                    'ducet': 'Default Unicode Sort Order',
                    'dictionary': 'Dictionary Sort Order',
                    'big5han': 'Traditional Chinese Sort Order - Big5',
                    'traditional': 'Traditional Sort Order',
                    'standard': 'Standard Sort Order',
                    'zhuyin': 'Zhuyin Sort Order',
                    'unihan': 'Radical-Stroke Sort Order',
                    'stroke': 'Stroke Sort Order',
                    'searchjl': 'Search By Hangul Initial Consonant',
                    'search': 'General-Purpose Search',
                    'reformed': 'Reformed Sort Order',
                    'pinyin': 'Pinyin Sort Order',
                    'phonetic': 'Phonetic Sort Order'
                },
                'numbers': {
                    'knda': 'Kannada Digits',
                    'khmr': 'Khmer Digits',
                    'kali': 'Kayah Li Digits',
                    'jpanfin': 'Japanese Financial Numerals',
                    'jpan': 'Japanese Numerals',
                    'java': 'Javanese Digits',
                    'hebr': 'Hebrew Numerals',
                    'hantfin': 'Traditional Chinese Financial Numerals',
                    'hant': 'Traditional Chinese Numerals',
                    'hansfin': 'Simplified Chinese Financial Numerals',
                    'hans': 'Simplified Chinese Numerals',
                    'hanidec': 'Chinese Decimal Numerals',
                    'guru': 'Gurmukhi Digits',
                    'gujr': 'Gujarati Digits',
                    'greklow': 'Greek Lowercase Numerals',
                    'grek': 'Greek Numerals',
                    'bali': 'Balinese Digits',
                    'armnlow': 'Armenian Lowercase Numerals',
                    'armn': 'Armenian Numerals',
                    'arabext': 'Extended Arabic-Indic Digits',
                    'arab': 'Arabic-Indic Digits',
                    'finance': 'Financial Numerals',
                    'traditional': 'Traditional Numerals',
                    'native': 'Native Digits',
                    'beng': 'Bengali Digits',
                    'brah': 'Brahmi Digits',
                    'cakm': 'Chakma Digits',
                    'cham': 'Cham Digits',
                    'deva': 'Devanagari Digits',
                    'orya': 'Oriya Digits',
                    'osma': 'Osmanya Digits',
                    'roman': 'Roman Numerals',
                    'romanlow': 'Roman Lowercase Numerals',
                    'saur': 'Saurashtra Digits',
                    'shrd': 'Sharada Digits',
                    'sora': 'Sora Sompeng Digits',
                    'sund': 'Sundanese Digits',
                    'vaii': 'Vai Digits',
                    'tibt': 'Tibetan Digits',
                    'thai': 'Thai Digits',
                    'telu': 'Telugu Digits',
                    'tamldec': 'Tamil Digits',
                    'taml': 'Traditional Tamil Numerals',
                    'talu': 'New Tai Lue Digits',
                    'takr': 'Takri Digits',
                    'olck': 'Ol Chiki Digits',
                    'nkoo': 'N\'Ko Digits',
                    'mymrshan': 'Myanmar Shan Digits',
                    'mymr': 'Myanmar Digits',
                    'mtei': 'Meetei Mayek Digits',
                    'mong': 'Mongolian Digits',
                    'mlym': 'Malayalam Digits',
                    'limb': 'Limbu Digits',
                    'lepc': 'Lepcha Digits',
                    'latn': 'Western Digits',
                    'laoo': 'Lao Digits',
                    'lanatham': 'Tai Tham Tham Digits',
                    'lana': 'Tai Tham Hora Digits',
                    'geor': 'Georgian Numerals',
                    'fullwide': 'Full-Width Digits',
                    'ethi': 'Ethiopic Numerals'
                },
                'colAlternate': {
                    'non-ignorable': 'Sort Symbols',
                    'shifted': 'Sort Ignoring Symbols'
                }
            },
            'keys': {
                'variableTop': 'Sort As Symbols',
                'colAlternate': 'Ignore Symbols Sorting',
                'colBackwards': 'Reversed Accent Sorting',
                'colCaseFirst': 'Uppercase/Lowercase Ordering',
                'colCaseLevel': 'Case-Sensitive Sorting',
                'colHiraganaQuaternary': 'Kana Sorting',
                'collation': 'Sort Order',
                'colNormalization': 'Normalised Sorting',
                'x': 'Private-Use',
                'calendar': 'Calendar',
                'colNumeric': 'Numeric Sorting',
                'colReorder': 'Script/Block Reordering',
                'colStrength': 'Sorting Strength',
                'currency': 'Currency',
                'numbers': 'Numbers',
                'timezone': 'Time Zone',
                'va': 'Locale Variant'
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
                            'exemplarCity': 'Unknown City'
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
                                'exemplarCity': 'Beulah, North Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, North Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, North Dakota'
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
                            'exemplarCity': 'Saint Barthélemy'
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
                            'exemplarCity': 'South Georgia'
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
                            'exemplarCity': 'Moscow'
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
                                'daylight': 'British Summer Time'
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
                            'exemplarCity': 'Isle of Man'
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
                            'exemplarCity': 'Prague'
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
                                'daylight': 'Irish Summer Time'
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
                            'exemplarCity': 'Ho Chi Minh City'
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
                            'exemplarCity': 'Baghdad'
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
                            'exemplarCity': 'Taipei'
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
                            'exemplarCity': 'Kashgar'
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
                            'exemplarCity': 'Macau'
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
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa Time',
                            'standard': 'Samoa Standard Time',
                            'daylight': 'Samoa Daylight Time'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samara Time',
                            'standard': 'Samara Standard Time',
                            'daylight': 'Samara Summer Time'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sakhalin Time',
                            'standard': 'Sakhalin Standard Time',
                            'daylight': 'Sakhalin Summer Time'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera Time'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunion Time'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylorda Time',
                            'standard': 'Qyzylorda Standard Time',
                            'daylight': 'Qyzylorda Summer Time'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponape Time'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairn Time'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre and Miquelon Time',
                            'standard': 'Saint Pierre and Miquelon Standard Time',
                            'daylight': 'Saint Pierre and Miquelon Daylight Time'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenix Islands Time'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Philippine Time',
                            'standard': 'Philippine Standard Time',
                            'daylight': 'Philippine Summer Time'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peru Time',
                            'standard': 'Peru Standard Time',
                            'daylight': 'Peru Summer Time'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguay Time',
                            'standard': 'Paraguay Standard Time',
                            'daylight': 'Paraguay Summer Time'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua New Guinea Time'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau Time'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistan Time',
                            'standard': 'Pakistan Standard Time',
                            'daylight': 'Pakistan Summer Time'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk Time',
                            'standard': 'Omsk Standard Time',
                            'daylight': 'Omsk Summer Time'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsk Time',
                            'standard': 'Novosibirsk Standard Time',
                            'daylight': 'Novosibirsk Summer Time'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'North Mariana Islands Time'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha Time',
                            'standard': 'Fernando de Noronha Standard Time',
                            'daylight': 'Fernando de Noronha Summer Time'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk Island Time'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue Time'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundland Time',
                            'standard': 'Newfoundland Standard Time',
                            'daylight': 'Newfoundland Daylight Time'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'New Zealand Time',
                            'standard': 'New Zealand Standard Time',
                            'daylight': 'New Zealand Daylight Time'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'New Caledonia Time',
                            'standard': 'New Caledonia Standard Time',
                            'daylight': 'New Caledonia Summer Time'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Central Time',
                            'standard': 'Central Standard Time',
                            'daylight': 'Central Daylight Time'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Eastern Time',
                            'standard': 'Eastern Standard Time',
                            'daylight': 'Eastern Daylight Time'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Mountain Time',
                            'standard': 'Mountain Standard Time',
                            'daylight': 'Mountain Daylight Time'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Pacific Time',
                            'standard': 'Pacific Standard Time',
                            'daylight': 'Pacific Daylight Time'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyr Time',
                            'standard': 'Anadyr Standard Time',
                            'daylight': 'Anadyr Summer Time'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtau Time',
                            'standard': 'Aqtau Standard Time',
                            'daylight': 'Aqtau Summer Time'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtobe Time',
                            'standard': 'Aqtobe Standard Time',
                            'daylight': 'Aqtobe Summer Time'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Cape Verde Time',
                            'standard': 'Cape Verde Standard Time',
                            'daylight': 'Cape Verde Summer Time'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Casey Time'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorro Standard Time'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham Time',
                            'standard': 'Chatham Standard Time',
                            'daylight': 'Chatham Daylight Time'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chile Time',
                            'standard': 'Chile Standard Time',
                            'daylight': 'Chile Summer Time'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'China Time',
                            'standard': 'China Standard Time',
                            'daylight': 'China Summer Time'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Choibalsan Time',
                            'standard': 'Choibalsan Standard Time',
                            'daylight': 'Choibalsan Summer Time'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Christmas Island Time'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Cocos Islands Time'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Colombia Time',
                            'standard': 'Colombia Standard Time',
                            'daylight': 'Colombia Summer Time'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cook Islands Time',
                            'standard': 'Cook Islands Standard Time',
                            'daylight': 'Cook Islands Half Summer Time'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Cuba Time',
                            'standard': 'Cuba Standard Time',
                            'daylight': 'Cuba Daylight Time'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis Time'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d’Urville Time'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'East Timor Time'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Easter Island Time',
                            'standard': 'Easter Island Standard Time',
                            'daylight': 'Easter Island Summer Time'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuador Time'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Central European Time',
                            'standard': 'Central European Standard Time',
                            'daylight': 'Central European Summer Time'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Eastern European Time',
                            'standard': 'Eastern European Standard Time',
                            'daylight': 'Eastern European Summer Time'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Western European Time',
                            'standard': 'Western European Standard Time',
                            'daylight': 'Western European Summer Time'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falkland Islands Time',
                            'standard': 'Falkland Islands Standard Time',
                            'daylight': 'Falkland Islands Summer Time'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fiji Time',
                            'standard': 'Fiji Standard Time',
                            'daylight': 'Fiji Summer Time'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'French Guiana Time'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'French Southern and Antarctic Time'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos Time'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau Time'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonga Time',
                            'standard': 'Tonga Standard Time',
                            'daylight': 'Tonga Summer Time'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuk Time'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistan Time',
                            'standard': 'Turkmenistan Standard Time',
                            'daylight': 'Turkmenistan Summer Time'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu Time'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguay Time',
                            'standard': 'Uruguay Standard Time',
                            'daylight': 'Uruguay Summer Time'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistan Time',
                            'standard': 'Uzbekistan Standard Time',
                            'daylight': 'Uzbekistan Summer Time'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu Time',
                            'standard': 'Vanuatu Standard Time',
                            'daylight': 'Vanuatu Summer Time'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Yekaterinburg Time',
                            'standard': 'Yekaterinburg Standard Time',
                            'daylight': 'Yekaterinburg Summer Time'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Yakutsk Time',
                            'standard': 'Yakutsk Standard Time',
                            'daylight': 'Yakutsk Summer Time'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis and Futuna Time'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake Island Time'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostok Time'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgograd Time',
                            'standard': 'Volgograd Standard Time',
                            'daylight': 'Volgograd Summer Time'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostok Time',
                            'standard': 'Vladivostok Standard Time',
                            'daylight': 'Vladivostok Summer Time'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuela Time'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tajikistan Time'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei Time',
                            'standard': 'Taipei Standard Time',
                            'daylight': 'Taipei Summer Time'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti Time'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa Time'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Suriname Time'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'South Georgia Time'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Solomon Islands Time'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapore Standard Time'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelles Time'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guam Standard Time'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'West Greenland Time',
                            'standard': 'West Greenland Standard Time',
                            'daylight': 'West Greenland Summer Time'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'East Greenland Time',
                            'standard': 'East Greenland Standard Time',
                            'daylight': 'East Greenland Summer Time'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwich Mean Time'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbert Islands Time'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgia Time',
                            'standard': 'Georgia Standard Time',
                            'daylight': 'Georgia Summer Time'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier Time'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazon Time',
                            'standard': 'Amazon Standard Time',
                            'daylight': 'Amazon Summer Time'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre Time',
                            'standard': 'Acre Standard Time',
                            'daylight': 'Acre Summer Time'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afghanistan Time'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Central Africa Time'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'East Africa Time'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'South Africa Standard Time'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'West Africa Time',
                            'standard': 'West Africa Standard Time',
                            'daylight': 'West Africa Summer Time'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaska Time',
                            'standard': 'Alaska Standard Time',
                            'daylight': 'Alaska Daylight Time'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almaty Time',
                            'standard': 'Almaty Standard Time',
                            'daylight': 'Almaty Summer Time'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabian Time',
                            'standard': 'Arabian Standard Time',
                            'daylight': 'Arabian Summer Time'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentina Time',
                            'standard': 'Argentina Standard Time',
                            'daylight': 'Argentina Summer Time'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Western Argentina Time',
                            'standard': 'Western Argentina Standard Time',
                            'daylight': 'Western Argentina Summer Time'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenia Time',
                            'standard': 'Armenia Standard Time',
                            'daylight': 'Armenia Summer Time'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantic Time',
                            'standard': 'Atlantic Standard Time',
                            'daylight': 'Atlantic Daylight Time'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Central Australia Time',
                            'standard': 'Australian Central Standard Time',
                            'daylight': 'Australian Central Daylight Time'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Australian Central Western Time',
                            'standard': 'Australian Central Western Standard Time',
                            'daylight': 'Australian Central Western Daylight Time'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Eastern Australia Time',
                            'standard': 'Australian Eastern Standard Time',
                            'daylight': 'Australian Eastern Daylight Time'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Western Australia Time',
                            'standard': 'Australian Western Standard Time',
                            'daylight': 'Australian Western Daylight Time'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbaijan Time',
                            'standard': 'Azerbaijan Standard Time',
                            'daylight': 'Azerbaijan Summer Time'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azores Time',
                            'standard': 'Azores Standard Time',
                            'daylight': 'Azores Summer Time'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladesh Time',
                            'standard': 'Bangladesh Standard Time',
                            'daylight': 'Bangladesh Summer Time'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutan Time'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivia Time'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilia Time',
                            'standard': 'Brasilia Standard Time',
                            'daylight': 'Brasilia Summer Time'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam Time'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Gulf Standard Time'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyana Time'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-Aleutian Time',
                            'standard': 'Hawaii-Aleutian Standard Time',
                            'daylight': 'Hawaii-Aleutian Daylight Time'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hong Kong Time',
                            'standard': 'Hong Kong Standard Time',
                            'daylight': 'Hong Kong Summer Time'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovd Time',
                            'standard': 'Hovd Standard Time',
                            'daylight': 'Hovd Summer Time'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'India Standard Time'
                        },
                        'short': {
                            'standard': 'IST'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indian Ocean Time'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indochina Time'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Central Indonesia Time'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Eastern Indonesia Time'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Western Indonesia Time'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iran Time',
                            'standard': 'Iran Standard Time',
                            'daylight': 'Iran Summer Time'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsk Time',
                            'standard': 'Irkutsk Standard Time',
                            'daylight': 'Irkutsk Summer Time'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israel Time',
                            'standard': 'Israel Standard Time',
                            'daylight': 'Israel Summer Time'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japan Time',
                            'standard': 'Japan Standard Time',
                            'daylight': 'Japan Summer Time'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamchatski Time',
                            'standard': 'Petropavlovsk-Kamchatski Standard Time',
                            'daylight': 'Petropavlovsk-Kamchatski Summer Time'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'East Kazakhstan Time'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'West Kazakhstan Time'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korean Time',
                            'standard': 'Korean Standard Time',
                            'daylight': 'Korean Summer Time'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae Time'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnoyarsk Time',
                            'standard': 'Krasnoyarsk Standard Time',
                            'daylight': 'Krasnoyarsk Summer Time'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kyrgystan Time'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Lanka Time'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Line Islands Time'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe Time',
                            'standard': 'Lord Howe Standard Time',
                            'daylight': 'Lord Howe Daylight Time'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macau Time',
                            'standard': 'Macau Standard Time',
                            'daylight': 'Macau Summer Time'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie Island Time'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan Time',
                            'standard': 'Magadan Standard Time',
                            'daylight': 'Magadan Summer Time'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malaysia Time'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldives Time'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesas Time'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshall Islands Time'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius Time',
                            'standard': 'Mauritius Standard Time',
                            'daylight': 'Mauritius Summer Time'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson Time'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulan Bator Time',
                            'standard': 'Ulan Bator Standard Time',
                            'daylight': 'Ulan Bator Summer Time'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moscow Time',
                            'standard': 'Moscow Standard Time',
                            'daylight': 'Moscow Summer Time'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmar Time'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru Time'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepal Time'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} Time',
                'regionFormat-type-daylight': '{0} Daylight Time',
                'regionFormat-type-standard': '{0} Standard Time',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'Aug',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'May',
                                '12': 'Dec',
                                '11': 'Nov',
                                '10': 'Oct',
                                '9': 'Sep',
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr'
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
                                '8': 'August',
                                '7': 'July',
                                '6': 'June',
                                '5': 'May',
                                '12': 'December',
                                '11': 'November',
                                '10': 'October',
                                '9': 'September',
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Aug',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'May',
                                '12': 'Dec',
                                '11': 'Nov',
                                '10': 'Oct',
                                '9': 'Sep',
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr'
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
                                '8': 'August',
                                '7': 'July',
                                '6': 'June',
                                '5': 'May',
                                '12': 'December',
                                '11': 'November',
                                '10': 'October',
                                '9': 'September',
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'Sun',
                                'mon': 'Mon',
                                'tue': 'Tue',
                                'wed': 'Wed',
                                'thu': 'Thu',
                                'fri': 'Fri',
                                'sat': 'Sat'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'W',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Su',
                                'mon': 'Mo',
                                'tue': 'Tu',
                                'wed': 'We',
                                'thu': 'Th',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'wide': {
                                'sun': 'Sunday',
                                'mon': 'Monday',
                                'tue': 'Tuesday',
                                'wed': 'Wednesday',
                                'thu': 'Thursday',
                                'fri': 'Friday',
                                'sat': 'Saturday'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Sun',
                                'mon': 'Mon',
                                'tue': 'Tue',
                                'wed': 'Wed',
                                'thu': 'Thu',
                                'fri': 'Fri',
                                'sat': 'Sat'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'W',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Su',
                                'mon': 'Mo',
                                'tue': 'Tu',
                                'wed': 'We',
                                'thu': 'Th',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'wide': {
                                'sun': 'Sunday',
                                'mon': 'Monday',
                                'tue': 'Tuesday',
                                'wed': 'Wednesday',
                                'thu': 'Thursday',
                                'fri': 'Friday',
                                'sat': 'Saturday'
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
                                '1': '1st quarter',
                                '2': '2nd quarter',
                                '3': '3rd quarter',
                                '4': '4th quarter'
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
                                '1': '1st quarter',
                                '2': '2nd quarter',
                                '3': '3rd quarter',
                                '4': '4th quarter'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'am',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon',
                                'pm': 'pm',
                                'pm-alt-variant': 'p.m.'
                            },
                            'narrow': {
                                'am': 'a',
                                'am-alt-variant': 'a.m.',
                                'noon': 'n',
                                'pm': 'p',
                                'pm-alt-variant': 'p.m.'
                            },
                            'wide': {
                                'am': 'am',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon',
                                'pm': 'pm',
                                'pm-alt-variant': 'p.m.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'am',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon',
                                'pm': 'pm',
                                'pm-alt-variant': 'p.m.'
                            },
                            'narrow': {
                                'am': 'a',
                                'am-alt-variant': 'a.m.',
                                'noon': 'n',
                                'pm': 'p',
                                'pm-alt-variant': 'p.m.'
                            },
                            'wide': {
                                'am': 'am',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon',
                                'pm': 'pm',
                                'pm-alt-variant': 'p.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            '1-alt-variant': 'Common Era'
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'dd-MMM-y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMEd': 'E d MMM, y',
                            'yMMMd': 'd MMM y',
                            'yMMM': 'MMM y',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'LL',
                            'Md': 'dd/MM',
                            'MEd': 'E dd/MM',
                            'MMdd': 'dd/MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'MMMMd': 'd MMMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'MM/y',
                            'yMd': 'd/M/y',
                            'yMEd': 'E d/M/y'
                        },
                        'appendItems': {
                            'Second': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Month': '{0} ({2}: {1})',
                            'Year': '{0} {1}',
                            'Week': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}',
                            'Day': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Era': '{0} {1}',
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
                                'H': 'HH–HH v'
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
                                'M': 'MMMM–MMMM y',
                                'y': 'MMMM y – MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'HH–HH'
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
