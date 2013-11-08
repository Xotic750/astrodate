/* AstroDate
 * Language: de
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
        AstroDate.lang('de', {
            'codePatterns': {
                'language': 'Sprache: {0}',
                'script': 'Schrift: {0}',
                'territory': 'Region: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Kana separat sortieren',
                    'yes': 'Kana anders sortieren'
                },
                'colCaseLevel': {
                    'no': 'Nach Groß-/Kleinschreibung sortieren',
                    'yes': 'Nach Groß-/Kleinschreibung sortieren'
                },
                'colCaseFirst': {
                    'lower': 'Kleinbuchstaben zuerst aufführen',
                    'no': 'Normal sortieren',
                    'upper': 'Großbuchstaben zuerst aufführen'
                },
                'colStrength': {
                    'identical': 'Alle sortieren',
                    'primary': 'Nur Basisbuchstaben sortieren',
                    'quaternary': 'Akzente/Fall/Breite/Kana sortieren',
                    'secondary': 'Akzente sortieren',
                    'tertiary': 'Akzente/Fall/Breite sortieren'
                },
                'colNumeric': {
                    'no': 'Ziffern einzeln sortieren',
                    'yes': 'Ziffern numerisch sortieren'
                },
                'colNormalization': {
                    'no': 'Ohne Normierung sortieren',
                    'yes': 'Nach Unicode sortieren'
                },
                'calendar': {
                    'japanese': 'Japanischer Kalender',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptischer Kalender',
                    'dangi': 'Dangi Kalender',
                    'ethiopic': 'Äthiopischer Kalender',
                    'ethiopic-amete-alem': 'Äthiopischer Kalender "Amete Alem"',
                    'gregorian': 'Gregorianischer Kalender',
                    'hebrew': 'Hebräischer Kalender',
                    'persian': 'Persischer Kalender',
                    'roc': 'Kalender der Republik China',
                    'chinese': 'Chinesischer Kalender',
                    'buddhist': 'Buddhistischer Kalender',
                    'indian': 'Indischer Nationalkalender',
                    'islamic': 'Islamischer Kalender',
                    'islamic-civil': 'Bürgerlicher islamischer Kalender',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Telefonbuch-Sortierung',
                    'gb2312han': 'Vereinfachtes Chinesisch - GB2312',
                    'eor': 'Sortierreihenfolge für mehrsprachige europäische Dokumente',
                    'ducet': 'Unicode-Sortierung',
                    'dictionary': 'Lexikographische Sortierreihenfolge',
                    'big5han': 'Traditionelles Chinesisch - Big5',
                    'traditional': 'Traditionelle Sortierregeln',
                    'standard': 'Standard-Sortierung',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Radikal-Strich-Sortierregeln',
                    'stroke': 'Strichfolge',
                    'searchjl': 'Suche nach Anfangsbuchstaben des koreanischen Alphabets',
                    'search': 'Allgemeine Suche',
                    'reformed': 'Reformierte Sortierreihenfolge',
                    'pinyin': 'Pinyin-Sortierregeln',
                    'phonetic': 'Sortierung nach Phonetik'
                },
                'numbers': {
                    'knda': 'Kannada-Ziffern',
                    'khmr': 'Khmer-Ziffern',
                    'kali': 'kali',
                    'jpanfin': 'Japanische Finanzziffern',
                    'jpan': 'Japanische Ziffern',
                    'java': 'java',
                    'hebr': 'Hebräische Ziffern',
                    'hantfin': 'Traditionell-chinesische Finanzziffern',
                    'hant': 'Traditionell-chinesische Ziffern',
                    'hansfin': 'Vereinfacht-chinesische Finanzziffern',
                    'hans': 'Vereinfacht-chinesische Ziffern',
                    'hanidec': 'Chinesische Dezimalzahlen',
                    'guru': 'Gurmukhi-Ziffern',
                    'gujr': 'Gujarati-Ziffern',
                    'greklow': 'Griechische Ziffern in Kleinschrift',
                    'grek': 'Griechische Ziffern',
                    'bali': 'bali',
                    'armnlow': 'Armenische Ziffern in Kleinschrift',
                    'armn': 'Armenische Ziffern',
                    'arabext': 'Erweiterte arabisch-indische Ziffern',
                    'arab': 'Arabisch-indische Ziffern',
                    'finance': 'Finanzzahlen',
                    'traditional': 'Traditionelle Zahlen',
                    'native': 'Native Ziffern',
                    'beng': 'Bengalische Ziffern',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Devanagari-Ziffern',
                    'orya': 'Oriya-Ziffern',
                    'osma': 'osma',
                    'roman': 'Römische Ziffern',
                    'romanlow': 'Römische Ziffern in Kleinschrift',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vai-Ziffern',
                    'tibt': 'Tibetische Ziffern',
                    'thai': 'Thai-Ziffern',
                    'telu': 'Telugu-Ziffern',
                    'tamldec': 'Tamil-Ziffern',
                    'taml': 'Tamilische Ziffern',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Myanmar-Ziffern',
                    'mtei': 'mtei',
                    'mong': 'Mongolische Ziffern',
                    'mlym': 'Malayalam-Ziffern',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Westliche Ziffern',
                    'laoo': 'Laotische Ziffern',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Georgische Ziffern',
                    'fullwide': 'Vollbreite Ziffern',
                    'ethi': 'Äthiopische Ziffern'
                },
                'colAlternate': {
                    'non-ignorable': 'Symbole sortieren',
                    'shifted': 'Symbole sortieren ignorieren'
                },
                'colBackwards': {
                    'no': 'Akzente normal sortieren',
                    'yes': 'Akzente umgekehrt sortieren'
                }
            },
            'keys': {
                'colNormalization': 'Normierte Sortierung',
                'collation': 'Sortierung',
                'colHiraganaQuaternary': 'Kana-Sortierung',
                'colCaseLevel': 'Sortierung nach Groß- oder Kleinschreibung',
                'colCaseFirst': 'Sortierung nach Groß- bzw. Kleinbuchstaben',
                'colBackwards': 'Umgekehrte Sortierung von Akzenten',
                'colAlternate': 'Sortierung ohne Symbole',
                'calendar': 'Kalender',
                'x': 'Privatnutzung',
                'variableTop': 'Nach Symbolen sortieren',
                'va': 'Lokale Variante',
                'timezone': 'Zeitzone',
                'numbers': 'Zahlen',
                'currency': 'Währung',
                'colStrength': 'Sortierstärke',
                'colNumeric': 'Sortierung nach Zahlen'
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
                            'exemplarCity': 'Osterinsel'
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
                            'exemplarCity': 'Fidschi'
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
                            'exemplarCity': 'Malediven'
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
                            'exemplarCity': 'Weihnachts-Inseln'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komoren'
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
                            'exemplarCity': 'Unbekannt'
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
                            'exemplarCity': 'Wostok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Südpol'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont D\'Urville'
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
                            'exemplarCity': 'Kaimaninseln'
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
                            'exemplarCity': 'Jamaika'
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
                            'exemplarCity': 'Havanna'
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
                            'exemplarCity': 'Mexiko-Stadt'
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
                            'exemplarCity': 'Port-of-Spain'
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
                            'exemplarCity': 'St. John\'s'
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
                            'exemplarCity': 'Süd-Georgien'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reyk­ja­vík'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'St. Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azoren'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudas'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanaren'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Färöer'
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
                            'exemplarCity': 'Moskau'
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
                                'daylight': 'Britische Sommerzeit'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lissabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiew'
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
                            'exemplarCity': 'Bukarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brüssel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
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
                            'exemplarCity': 'Uschgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Saporischja'
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
                            'exemplarCity': 'Wilna'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wien'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikan'
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
                            'exemplarCity': 'Rom'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Prag'
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
                                'daylight': 'Irische Sommerzeit'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kopenhagen'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Kischinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Büsingen'
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
                            'exemplarCity': 'El Aaiún'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Dschibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Daressalam'
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
                            'exemplarCity': 'Mogadischu'
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
                            'exemplarCity': 'São Tomé'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Wagadugu'
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
                            'exemplarCity': 'Akkra'
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
                            'exemplarCity': 'Shanghai'
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
                            'exemplarCity': 'Ho-Chi-Minh-Stadt'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pjöngjang'
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
                            'exemplarCity': 'Nowosibirsk'
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
                            'exemplarCity': 'Duschanbe'
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
                            'exemplarCity': 'Port Numbay'
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
                            'exemplarCity': 'Wladiwostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erivan'
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
                            'exemplarCity': 'Tiflis'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taschkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipeh'
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
                            'exemplarCity': 'Aktobe'
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
                            'exemplarCity': 'Bischkek'
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
                            'exemplarCity': 'Kamtschatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kaxgar'
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
                            'exemplarCity': 'Muskat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nikosia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Nowokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti-Zeit'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa-Zeit'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Suriname-Zeit'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Südgeorgische Zeit'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomoninseln-Zeit'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapur-Zeit'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellen-Zeit'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa-Zeit',
                            'standard': 'Samoa-Normalzeit',
                            'daylight': 'Samoa-Sommerzeit'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samara-Zeit',
                            'standard': 'Samara-Normalzeit',
                            'daylight': 'Samara-Sommerzeit'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sakhalin-Zeit',
                            'standard': 'Sakhalin-Normalzeit',
                            'daylight': 'Sakhalin-Sommerzeit'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera-Zeit'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réunion-Zeit'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponape-Zeit'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairninseln-Zeit'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint-Pierre-und-Miquelon-Zeit',
                            'standard': 'Saint-Pierre-und-Miquelon-Normalzeit',
                            'daylight': 'Saint-Pierre-und-Miquelon-Sommerzeit'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenixinseln-Zeit'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Philippinische Zeit',
                            'standard': 'Philippinische Normalzeit',
                            'daylight': 'Philippinische Sommerzeit'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peruanische Zeit',
                            'standard': 'Peruanische Normalzeit',
                            'daylight': 'Peruanische Sommerzeit'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Westafrikanische Zeit',
                            'standard': 'Westafrikanische Normalzeit',
                            'daylight': 'Westafrikanische Sommerzeit'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Südafrikanische Zeit'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Ostafrikanische Zeit'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Zentralafrikanische Zeit'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afghanistan-Zeit'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre-Zeit',
                            'standard': 'Acre-Normalzeit',
                            'daylight': 'Acre-Sommerzeit'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonas-Zeit',
                            'standard': 'Amazonas-Normalzeit',
                            'daylight': 'Amazonas-Sommerzeit'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Nordamerikanische Inlandzeit',
                            'standard': 'Nordamerikanische Inland-Normalzeit',
                            'daylight': 'Nordamerikanische Inland-Sommerzeit'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Nordamerikanische Ostküstenzeit',
                            'standard': 'Nordamerikanische Ostküsten-Normalzeit',
                            'daylight': 'Nordamerikanische Ostküsten-Sommerzeit'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Rocky Mountain Zeit',
                            'standard': 'Rocky Mountain-Normalzeit',
                            'daylight': 'Rocky Mountain Sommerzeit'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Nordamerikanische Westküstenzeit',
                            'standard': 'Nordamerikanische Westküsten-Normalzeit',
                            'daylight': 'Nordamerikanische Westküsten-Sommerzeit'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyr Zeit',
                            'standard': 'Anadyr Normalzeit',
                            'daylight': 'Anadyr Sommerzeit'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabische Zeit',
                            'standard': 'Arabische Normalzeit',
                            'daylight': 'Arabische Sommerzeit'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentinische Zeit',
                            'standard': 'Argentinische Normalzeit',
                            'daylight': 'Argentinische Sommerzeit'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham-Zeit',
                            'standard': 'Chatham-Normalzeit',
                            'daylight': 'Chatham-Sommerzeit'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilenische Zeit',
                            'standard': 'Chilenische Normalzeit',
                            'daylight': 'Chilenische Sommerzeit'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Chinesische Zeit',
                            'standard': 'Chinesische Normalzeit',
                            'daylight': 'Chinesische Sommerzeit'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Choibalsan-Zeit',
                            'standard': 'Choibalsan-Normalzeit',
                            'daylight': 'Choibalsan-Sommerzeit'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Weihnachtsinsel-Zeit'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Kokosinseln-Zeit'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbianische Zeit',
                            'standard': 'Kolumbianische Normalzeit',
                            'daylight': 'Kolumbianische Sommerzeit'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookinseln-Zeit',
                            'standard': 'Cookinseln-Normalzeit',
                            'daylight': 'Cookinseln-Sommerzeit'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubanische Zeit',
                            'standard': 'Kubanische Normalzeit',
                            'daylight': 'Kubanische Sommerzeit'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis-Zeit'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville-Zeit'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Osttimor-Zeit'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Osterinsel-Zeit',
                            'standard': 'Osterinsel-Normalzeit',
                            'daylight': 'Osterinsel-Sommerzeit'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadorianische Zeit'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Mitteleuropäische Zeit',
                            'standard': 'Mitteleuropäische Normalzeit',
                            'daylight': 'Mitteleuropäische Sommerzeit'
                        },
                        'short': {
                            'generic': 'MEZ',
                            'standard': 'MEZ',
                            'daylight': 'MESZ'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Osteuropäische Zeit',
                            'standard': 'Osteuropäische Normalzeit',
                            'daylight': 'Osteuropäische Sommerzeit'
                        },
                        'short': {
                            'generic': 'OEZ',
                            'standard': 'OEZ',
                            'daylight': 'OESZ'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Westeuropäische Zeit',
                            'standard': 'Westeuropäische Normalzeit',
                            'daylight': 'Westeuropäische Sommerzeit'
                        },
                        'short': {
                            'generic': 'WEZ',
                            'standard': 'WEZ',
                            'daylight': 'WESZ'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandinseln-Zeit',
                            'standard': 'Falklandinseln-Normalzeit',
                            'daylight': 'Falklandinseln-Sommerzeit'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau-Zeit'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonganische Zeit',
                            'standard': 'Tonganische Normalzeit',
                            'daylight': 'Tonganische Sommerzeit'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuk-Zeit'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistan-Zeit',
                            'standard': 'Turkmenistan-Normalzeit',
                            'daylight': 'Turkmenistan-Sommerzeit'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu-Zeit'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayanische Zeit',
                            'standard': 'Uruguyanische Normalzeit',
                            'daylight': 'Uruguayanische Sommerzeit'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Usbekistan-Zeit',
                            'standard': 'Usbekistan-Normalzeit',
                            'daylight': 'Usbekistan-Sommerzeit'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu-Zeit',
                            'standard': 'Vanuatu-Normalzeit',
                            'daylight': 'Vanuatu-Sommerzeit'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburg-Zeit',
                            'standard': 'Jekaterinburg-Normalzeit',
                            'daylight': 'Jekaterinburg-Sommerzeit'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutsk-Zeit',
                            'standard': 'Jakutsk-Normalzeit',
                            'daylight': 'Jakutsk-Sommerzeit'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis-und-Futuna-Zeit'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake-Insel-Zeit'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Wostok-Zeit'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Wolgograd-Zeit',
                            'standard': 'Wolgograd-Normalzeit',
                            'daylight': 'Wolgograd-Sommerzeit'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Wladiwostok-Zeit',
                            'standard': 'Wladiwostok-Normalzeit',
                            'daylight': 'Wladiwostok-Sommerzeit'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuela-Zeit'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadschikistan-Zeit'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipeh-Zeit',
                            'standard': 'Taipeh-Normalzeit',
                            'daylight': 'Taipeh-Sommerzeit'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-Aleuten-Zeit',
                            'standard': 'Hawaii-Aleuten-Normalzeit',
                            'daylight': 'Hawaii-Aleuten-Sommerzeit'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyana-Zeit'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Golf-Zeit'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guam-Zeit'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Westgrönland-Zeit',
                            'standard': 'Westgrönland-Normalzeit',
                            'daylight': 'Westgrönland-Sommerzeit'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Ostgrönland-Zeit',
                            'standard': 'Ostgrönland-Normalzeit',
                            'daylight': 'Ostgrönland-Sommerzeit'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Mittlere Greenwich-Zeit'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbert-Inseln-Zeit'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgische Zeit',
                            'standard': 'Georgische Normalzeit',
                            'daylight': 'Georgische Sommerzeit'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier-Zeit'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos-Zeit'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Französische Süd- und Antarktisgebiete-Zeit'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Französisch-Guayana-Zeit'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidschi-Zeit',
                            'standard': 'Fidschi-Normalzeit',
                            'daylight': 'Fidschi-Sommerzeit'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaska Zeit',
                            'standard': 'Alaska-Normalzeit',
                            'daylight': 'Alaska Sommerzeit'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almaty-Zeit',
                            'standard': 'Almaty-Normalzeit',
                            'daylight': 'Almaty-Sommerzeit'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Westargentinische Zeit',
                            'standard': 'Westargentinische Normalzeit',
                            'daylight': 'Westargentinische Sommerzeit'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenische Zeit',
                            'standard': 'Armenische Normalzeit',
                            'daylight': 'Armenische Sommerzeit'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantik-Zeit',
                            'standard': 'Atlantik-Normalzeit',
                            'daylight': 'Atlantik-Sommerzeit'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Zentralaustralische Zeit',
                            'standard': 'Zentralaustralische Normalzeit',
                            'daylight': 'Zentralaustralische Sommerzeit'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Zentral-/Westaustralische Zeit',
                            'standard': 'Zentral-/Westaustralische Normalzeit',
                            'daylight': 'Zentral-/Westaustralische Sommerzeit'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Ostaustralische Zeit',
                            'standard': 'Ostaustralische Normalzeit',
                            'daylight': 'Ostaustralische Sommerzeit'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Westaustralische Zeit',
                            'standard': 'Westaustralische Normalzeit',
                            'daylight': 'Westaustralische Sommerzeit'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Aserbaidschanische Zeit',
                            'standard': 'Aserbeidschanische Normalzeit',
                            'daylight': 'Aserbaidschanische Sommerzeit'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azoren-Zeit',
                            'standard': 'Azoren-Normalzeit',
                            'daylight': 'Azoren-Sommerzeit'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladesch-Zeit',
                            'standard': 'Bangladesch-Normalzeit',
                            'daylight': 'Bangladesch-Sommerzeit'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutan-Zeit'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivianische Zeit'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasília-Zeit',
                            'standard': 'Brasília-Normalzeit',
                            'daylight': 'Brasília-Sommerzeit'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei-Zeit'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kap-Verde-Zeit',
                            'standard': 'Kap-Verde-Normalzeit',
                            'daylight': 'Kap-Verde-Sommerzeit'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorro-Zeit'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hong-Kong-Zeit',
                            'standard': 'Hong-Kong-Normalzeit',
                            'daylight': 'Hong-Kong-Sommerzeit'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Chowd-Zeit',
                            'standard': 'Chowd-Normalzeit',
                            'daylight': 'Chowd-Sommerzeit'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indische Zeit'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indischer Ozean-Zeit'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indochina-Zeit'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Zentralindonesische Zeit'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Ostindonesische Zeit'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Westindonesische Zeit'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iranische Zeit',
                            'standard': 'Iranische Normalzeit',
                            'daylight': 'Iranische Sommerzeit'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsk-Zeit',
                            'standard': 'Irkutsk-Normalzeit',
                            'daylight': 'Irkutsk-Sommerzeit'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israelische Zeit',
                            'standard': 'Israelische Normalzeit',
                            'daylight': 'Israelische Sommerzeit'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japanische Zeit',
                            'standard': 'Japanische Normalzeit',
                            'daylight': 'Japanische Sommerzeit'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Kamtschatka-Zeit',
                            'standard': 'Kamtschatka-Normalzeit',
                            'daylight': 'Kamtschatka-Sommerzeit'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Ostkasachische Zeit'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Westkasachische Zeit'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Koreanische Zeit',
                            'standard': 'Koreanische Normalzeit',
                            'daylight': 'Koreanische Sommerzeit'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae-Zeit'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnoyarsk-Zeit',
                            'standard': 'Krasnoyarsk-Normalzeit',
                            'daylight': 'Krasnoyarsk-Sommerzeit'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgisistan-Zeit'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Linieninseln-Zeit'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord-Howe-Zeit',
                            'standard': 'Lord-Howe-Normalzeit',
                            'daylight': 'Lord-Howe-Sommerzeit'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarieinsel-Zeit'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan-Zeit',
                            'standard': 'Magadan-Normalzeit',
                            'daylight': 'Magadan-Sommerzeit'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malaysische Zeit'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Malediven-Zeit'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesas-Zeit'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshallinseln-Zeit'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius-Zeit',
                            'standard': 'Mauritius-Normalzeit',
                            'daylight': 'Mauritius-Sommerzeit'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson-Zeit'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulaanbaatar-Zeit',
                            'standard': 'Ulaanbaatar-Normalzeit',
                            'daylight': 'Ulaanbaatar-Sommerzeit'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskauer Zeit',
                            'standard': 'Moskauer Normalzeit',
                            'daylight': 'Moskauer Sommerzeit'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmar-Zeit'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru-Zeit'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalesische Zeit'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Neukaledonische Zeit',
                            'standard': 'Neukaledonische Normalzeit',
                            'daylight': 'Neukaledonische Sommerzeit'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Neuseeland-Zeit',
                            'standard': 'Neuseeland-Normalzeit',
                            'daylight': 'Neuseeland-Sommerzeit'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Neufundland-Zeit',
                            'standard': 'Neufundland-Normalzeit',
                            'daylight': 'Neufundland-Sommerzeit'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue-Zeit'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolkinsel-Zeit'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha-Zeit',
                            'standard': 'Fernando de Noronha-Normalzeit',
                            'daylight': 'Fernando de Noronha-Sommerzeit'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Nowosibirsk-Zeit',
                            'standard': 'Nowosibirsk-Normalzeit',
                            'daylight': 'Nowosibirsk-Sommerzeit'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk-Zeit',
                            'standard': 'Omsk-Normalzeit',
                            'daylight': 'Omsk-Sommerzeit'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistanische Zeit',
                            'standard': 'Pakistanische Normalzeit',
                            'daylight': 'Pakistanische Sommerzeit'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau-Zeit'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua-Neuguinea-Zeit'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayanische Zeit',
                            'standard': 'Paraguayanische Normalzeit',
                            'daylight': 'Paraguayanische Sommerzeit'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} Zeit',
                'regionFormat-type-daylight': '{0} Sommerzeit',
                'regionFormat-type-standard': '{0} Normalzeit',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'Aug.',
                                '7': 'Juli',
                                '6': 'Juni',
                                '5': 'Mai',
                                '12': 'Dez.',
                                '11': 'Nov.',
                                '10': 'Okt.',
                                '9': 'Sep.',
                                '1': 'Jan.',
                                '2': 'Feb.',
                                '3': 'März',
                                '4': 'Apr.'
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
                                '7': 'Juli',
                                '6': 'Juni',
                                '5': 'Mai',
                                '12': 'Dezember',
                                '11': 'November',
                                '10': 'Oktober',
                                '9': 'September',
                                '1': 'Januar',
                                '2': 'Februar',
                                '3': 'März',
                                '4': 'April'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Aug',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'Mai',
                                '12': 'Dez',
                                '11': 'Nov',
                                '10': 'Okt',
                                '9': 'Sep',
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mär',
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
                                '7': 'Juli',
                                '6': 'Juni',
                                '5': 'Mai',
                                '12': 'Dezember',
                                '11': 'November',
                                '10': 'Oktober',
                                '9': 'September',
                                '1': 'Januar',
                                '2': 'Februar',
                                '3': 'März',
                                '4': 'April'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'So.',
                                'mon': 'Mo.',
                                'tue': 'Di.',
                                'wed': 'Mi.',
                                'thu': 'Do.',
                                'fri': 'Fr.',
                                'sat': 'Sa.'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'D',
                                'wed': 'M',
                                'thu': 'D',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'So.',
                                'mon': 'Mo.',
                                'tue': 'Di.',
                                'wed': 'Mi.',
                                'thu': 'Do.',
                                'fri': 'Fr.',
                                'sat': 'Sa.'
                            },
                            'wide': {
                                'sun': 'Sonntag',
                                'mon': 'Montag',
                                'tue': 'Dienstag',
                                'wed': 'Mittwoch',
                                'thu': 'Donnerstag',
                                'fri': 'Freitag',
                                'sat': 'Samstag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'So',
                                'mon': 'Mo',
                                'tue': 'Di',
                                'wed': 'Mi',
                                'thu': 'Do',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'D',
                                'wed': 'M',
                                'thu': 'D',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'So.',
                                'mon': 'Mo.',
                                'tue': 'Di.',
                                'wed': 'Mi.',
                                'thu': 'Do.',
                                'fri': 'Fr.',
                                'sat': 'Sa.'
                            },
                            'wide': {
                                'sun': 'Sonntag',
                                'mon': 'Montag',
                                'tue': 'Dienstag',
                                'wed': 'Mittwoch',
                                'thu': 'Donnerstag',
                                'fri': 'Freitag',
                                'sat': 'Samstag'
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
                                '1': '1. Quartal',
                                '2': '2. Quartal',
                                '3': '3. Quartal',
                                '4': '4. Quartal'
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
                                '1': '1. Quartal',
                                '2': '2. Quartal',
                                '3': '3. Quartal',
                                '4': '4. Quartal'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'afternoon': 'nachmittags',
                                'am': 'vorm.',
                                'earlyMorning': 'morgens',
                                'evening': 'abends',
                                'morning': 'vormittags',
                                'night': 'nachts',
                                'noon': 'Mittag',
                                'pm': 'nachm.'
                            },
                            'narrow': {
                                'afternoon': 'nachmittags',
                                'am': 'vorm.',
                                'earlyMorning': 'morgens',
                                'evening': 'abends',
                                'morning': 'vormittags',
                                'night': 'nachts',
                                'noon': 'Mittag',
                                'pm': 'nachm.'
                            },
                            'wide': {
                                'afternoon': 'nachmittags',
                                'am': 'vorm.',
                                'earlyMorning': 'morgens',
                                'evening': 'abends',
                                'morning': 'vormittags',
                                'night': 'nachts',
                                'noon': 'Mittag',
                                'pm': 'nachm.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'nachmittags',
                                'am': 'vorm.',
                                'earlyMorning': 'morgens',
                                'evening': 'abends',
                                'morning': 'vormittags',
                                'night': 'nachts',
                                'noon': 'Mittag',
                                'pm': 'nachm.'
                            },
                            'narrow': {
                                'afternoon': 'nachmittags',
                                'am': 'vorm.',
                                'earlyMorning': 'morgens',
                                'evening': 'abends',
                                'morning': 'vormittags',
                                'night': 'nachts',
                                'noon': 'Mittag',
                                'pm': 'nachm.'
                            },
                            'wide': {
                                'afternoon': 'Nachmittag',
                                'am': 'vorm.',
                                'earlyMorning': 'Morgen',
                                'evening': 'Abend',
                                'morning': 'Vormittag',
                                'night': 'Nacht',
                                'noon': 'Mittag',
                                'pm': 'nachm.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'v. Chr.',
                            '0-alt-variant': 'vor der gewöhnlichen Zeitrechnung',
                            '1': 'n. Chr.',
                            '1-alt-variant': 'der gewöhnlichen Zeitrechnung'
                        },
                        'eraAbbr': {
                            '0': 'v. Chr.',
                            '0-alt-variant': 'v. u. Z.',
                            '1': 'n. Chr.',
                            '1-alt-variant': 'u. Z.'
                        },
                        'eraNarrow': {
                            '0': 'v. Chr.',
                            '0-alt-variant': 'vdZ',
                            '1': 'n. Chr.',
                            '1-alt-variant': 'dZ'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'dd.MM.y',
                        'short': 'dd.MM.yy'
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
                            'yMM': 'MM.y',
                            'yMEd': 'E, d.M.y',
                            'yMd': 'd.M.y',
                            'yM': 'M.y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'MMMMEd': 'E, d. MMMM',
                            'd': 'd',
                            'GyMMMd': 'd. MMM y G',
                            'GyMMMEd': 'E, d. MMM y G',
                            'h': 'h a',
                            'H': 'HH \'Uhr\'',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d. MMM y',
                            'yMMMd': 'd. MMM y',
                            'yMMM': 'MMM y',
                            'yMMdd': 'dd.MM.y',
                            'Hms': 'HH:mm:ss',
                            'Ed': 'E, d.',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E, HH:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd.M.',
                            'MEd': 'E, d.M.',
                            'MMd': 'd.MM.',
                            'MMdd': 'dd.MM.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E, d. MMM',
                            'MMMMdd': 'dd. MMMM'
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
                                'd': 'd.-d. MMM',
                                'M': 'd. MMM - d. MMM'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM. - E, dd.MM.',
                                'M': 'E, dd.MM. - E, dd.MM.'
                            },
                            'Md': {
                                'd': 'dd.MM. - dd.MM.',
                                'M': 'dd.MM. - dd.MM.'
                            },
                            'M': {
                                'M': 'M.-M.'
                            },
                            'Hv': {
                                'H': 'HH-HH \'Uhr\' v'
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
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y - dd.MM.y',
                                'M': 'dd.MM.y - dd.MM.y',
                                'y': 'dd.MM.y - dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y - E, dd.MM.y',
                                'M': 'E, dd.MM.y - E, dd.MM.y',
                                'y': 'E, dd.MM.y - E, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y',
                                'y': 'MMM y - MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.-d. MMM y',
                                'M': 'd. MMM - d. MMM y',
                                'y': 'd. MMM y - d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. - E, d. MMM y',
                                'M': 'E, d. MMM - E, d. MMM y',
                                'y': 'E, d. MMM y - E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
                                'y': 'MMMM y - MMMM y'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
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
                                'H': 'HH-HH \'Uhr\''
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd.-d.'
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
