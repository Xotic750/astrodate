/* AstroDate
 * Language: it
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
        AstroDate.lang('it', {
            'codePatterns': {
                'language': 'Lingua: {0}',
                'script': 'Scrittura: {0}',
                'territory': 'Regione: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordina Kana separatamente',
                    'yes': 'Ordina Kana diversamente'
                },
                'colCaseLevel': {
                    'no': 'Ordina senza distinzione tra maiuscole e minuscole',
                    'yes': 'Ordina distinzione tra maiuscole e minuscole'
                },
                'colCaseFirst': {
                    'lower': 'Ordina prima lettere minuscole',
                    'no': 'Ordina lettere maiuscole/minuscole normalmente',
                    'upper': 'Ordina prima lettere minuscole'
                },
                'colStrength': {
                    'identical': 'Ordina tutto',
                    'primary': 'Ordina solo lettere di base',
                    'quaternary': 'Ordina accenti/lettere/larghezza/Kana',
                    'secondary': 'Ordina accenti',
                    'tertiary': 'Ordina accenti/lettere/larghezza'
                },
                'colNumeric': {
                    'no': 'Ordina cifre individualmente',
                    'yes': 'Ordina cifre numericamente'
                },
                'colNormalization': {
                    'no': 'Ordina senza normalizzazione',
                    'yes': 'Ordina Unicode normalizzato'
                },
                'calendar': {
                    'japanese': 'calendario giapponese',
                    'iso8601': 'Calendario ISO-8601',
                    'coptic': 'Calendario copto',
                    'dangi': 'Calendario Dangi',
                    'ethiopic': 'Calendario etiope',
                    'ethiopic-amete-alem': 'Calendario etiope Amete Alem',
                    'gregorian': 'Calendario gregoriano',
                    'hebrew': 'calendario ebraico',
                    'persian': 'Calendario persiano',
                    'roc': 'Calendario Minguo',
                    'chinese': 'calendario cinese',
                    'buddhist': 'calendario buddista',
                    'indian': 'calendario nazionale indiano',
                    'islamic': 'calendario islamico',
                    'islamic-civil': 'calendario civile islamico',
                    'islamic-rgsa': 'Calendario islamico (Arabia Saudita, osservazione)',
                    'islamic-tbla': 'Calendario islamico (tabulare, era astronomica)',
                    'islamic-umalqura': 'Calendario islamico (Umm al-Qura)'
                },
                'collation': {
                    'phonebook': 'ordine elenco telefonico',
                    'gb2312han': 'cinese semplificato',
                    'eor': 'eor',
                    'ducet': 'Ordinamento Unicode predefinito',
                    'dictionary': 'Ordinamento dizionario',
                    'big5han': 'cinese tradizionale',
                    'traditional': 'ordine tradizionale',
                    'standard': 'Ordinamento standard',
                    'zhuyin': 'Ordinamento Zhuyin',
                    'unihan': 'Ordinamento in base ai radicali',
                    'stroke': 'ordine segni',
                    'searchjl': 'Cerca per consonante hangul iniziale',
                    'search': 'Ricerca generica',
                    'reformed': 'Ordinamento riformato',
                    'pinyin': 'ordine pinyin',
                    'phonetic': 'Ordinamento fonetico'
                },
                'numbers': {
                    'knda': 'Cifre kannada',
                    'khmr': 'Cifre khmer',
                    'kali': 'Cifre Kayah Li',
                    'jpanfin': 'Numeri finanziari giapponesi',
                    'jpan': 'Numeri giapponesi',
                    'java': 'Cifre giavanesi',
                    'hebr': 'Numeri ebraici',
                    'hantfin': 'Numeri finanziari in cinese tradizionale',
                    'hant': 'Numeri in cinese tradizionale',
                    'hansfin': 'Numeri finanziari in cinese semplificato',
                    'hans': 'Numeri in cinese semplificato',
                    'hanidec': 'Numeri decimali cinesi',
                    'guru': 'Cifre gurmukhi',
                    'gujr': 'Cifre gujarati',
                    'greklow': 'Numeri greci minuscoli',
                    'grek': 'Numeri greci',
                    'bali': 'Cifre balinesi',
                    'armnlow': 'Numeri armeni minuscoli',
                    'armn': 'Numeri armeni',
                    'arabext': 'Cifre indo-arabe estese',
                    'arab': 'Cifre indo-arabe',
                    'finance': 'Numeri finanziari',
                    'traditional': 'Numeri tradizionali',
                    'native': 'Cifre native',
                    'beng': 'Cifre bengalesi',
                    'brah': 'Cifre brahmi',
                    'cakm': 'Cifre chakma',
                    'cham': 'Cifre cham',
                    'deva': 'Cifre devanagari',
                    'orya': 'Cifre oriya',
                    'osma': 'Cifre osmanya',
                    'roman': 'Numeri romani',
                    'romanlow': 'Numeri romani minuscoli',
                    'saur': 'Cifre saurashtra',
                    'shrd': 'Cifre sharada',
                    'sora': 'Cifre Sora Sompeng',
                    'sund': 'Cifre sundanesi',
                    'vaii': 'Cifre Vai',
                    'tibt': 'Cifre tibetane',
                    'thai': 'Cifre thailandesi',
                    'telu': 'Cifre telugu',
                    'tamldec': 'Cifre tamil',
                    'taml': 'Numeri tamil tradizionali',
                    'talu': 'Cifre nuovo Tai Lue',
                    'takr': 'Cifre takri',
                    'olck': 'Cifre Ol Chiki',
                    'nkoo': "Cifre N'Ko",
                    'mymrshan': 'Cifre shan birmane',
                    'mymr': 'Cifre birmane',
                    'mtei': 'Cifre Meetei Mayek',
                    'mong': 'Numeri mongoli',
                    'mlym': 'Cifre malayalam',
                    'limb': 'Cifre limbu',
                    'lepc': 'Cifre lepcha',
                    'latn': 'Cifre occidentali',
                    'laoo': 'Cifre lao',
                    'lanatham': 'Cifre tai tham tham',
                    'lana': 'Cifre tai tham hora',
                    'geor': 'Numeri georgiani',
                    'fullwide': 'Cifre a larghezza intera',
                    'ethi': 'Numeri etiopi'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordina simboli',
                    'shifted': 'Ordina ignorando i simboli'
                },
                'colBackwards': {
                    'no': 'Ordina accenti normalmente',
                    'yes': 'Ordina accenti capovolti'
                }
            },
            'keys': {
                'colNormalization': 'Ordinamento normalizzato',
                'collation': 'Ordinamento',
                'colHiraganaQuaternary': 'Ordinamento Kana',
                'colCaseLevel': 'Ordinamento Distinzione fra maiuscole e minuscole',
                'colCaseFirst': 'Ordinamento Maiuscole/Minuscole',
                'colBackwards': 'Ordinamento Accento capovolto',
                'colAlternate': 'Ordinamento Ignora simboli',
                'calendar': 'Calendario',
                'x': 'Uso privato',
                'variableTop': 'Ordina come simboli',
                'va': 'Variante lingua',
                'timezone': 'Fuso orario',
                'numbers': 'Numeri',
                'currency': 'Valuta',
                'colStrength': 'Sicurezza ordinamento',
                'colNumeric': 'Ordinamento numerico'
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
                            'exemplarCity': 'Pitcairn, isole'
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
                            'exemplarCity': 'Pasqua'
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
                            'exemplarCity': 'Figi'
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
                            'exemplarCity': 'Marchesi'
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
                            'exemplarCity': 'Maldive'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'La Riunione'
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
                            'exemplarCity': 'Natale'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Comore'
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
                            'exemplarCity': 'Citt\u00E0 sconosciuta'
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
                            'exemplarCity': 'Polo Sud'
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
                            'exemplarCity': 'Caienna'
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
                                'exemplarCity': 'Tucum\u00E1n'
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
                            'exemplarCity': 'Fuso orario Alaska'
                        },
                        'Adak': {
                            'exemplarCity': 'Adak'
                        },
                        'Bahia': {
                            'exemplarCity': 'Bahia'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bah\u00EDa de Banderas'
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
                            'exemplarCity': 'Giamaica'
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
                            'exemplarCity': "L'Avana"
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Guiana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Guatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Guadalupa'
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
                            'exemplarCity': 'Cordova'
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
                            'exemplarCity': 'Martinica'
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
                            'exemplarCity': 'Citt\u00E0 del Messico'
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
                                'exemplarCity': 'Beulah, Dakota del nord'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota del nord'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Dakota del nord'
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
                            'exemplarCity': 'Portorico'
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
                            'exemplarCity': 'San Paolo'
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
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Santa Lucia'
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
                            'exemplarCity': 'Georgia meridionale'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjav\u00EDk'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': "Sant'Elena"
                        },
                        'Azores': {
                            'exemplarCity': 'Azzorre'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Canarie'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Capo Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Isole Faeroe'
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
                            'exemplarCity': 'Mosca'
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
                            'exemplarCity': 'Lussemburgo'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Ora legale Regno Unito'
                            },
                            'exemplarCity': 'Londra'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Lubiana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisbona'
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
                            'exemplarCity': 'Isola di Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruxelles'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlino'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrado'
                        },
                        'Athens': {
                            'exemplarCity': 'Atene'
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
                            'exemplarCity': 'Stoccolma'
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
                            'exemplarCity': 'Zurigo'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporozhye'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagabria'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsavia'
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
                            'exemplarCity': 'Citt\u00E0 del Vaticano'
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
                            'exemplarCity': 'Parigi'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibilterra'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Ora legale Irlanda'
                            },
                            'exemplarCity': 'Dublino'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenaghen'
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
                            'exemplarCity': 'Gibuti'
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
                            'exemplarCity': 'Mogadiscio'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': "N'Djamena"
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'Tunisi'
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
                            'exemplarCity': 'Il Cairo'
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
                            'exemplarCity': 'Algeri'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Shanghai'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
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
                            'exemplarCity': 'Damasco'
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
                            'exemplarCity': 'Giacarta'
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
                            'exemplarCity': 'Teheran'
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
                            'exemplarCity': 'Gerusalemme'
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
                            'exemplarCity': 'Bahrein'
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
                            'exemplarCity': 'Nicosia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Ora di Tokelau'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Ora del Tagikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Ora di Taipei',
                            'standard': 'Ora standard di Taipei',
                            'daylight': 'Ora legale di Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Ora di Tahiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Ora di Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Ora del Suriname'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Ora della Georgia del Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Ora delle Isole Salomone'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Ora Singapore'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Ora delle Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Ora di Samoa',
                            'standard': 'Ora standard di Samoa',
                            'daylight': 'Ora legale di Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Ora di Samara',
                            'standard': 'Ora standard di Samara',
                            'daylight': 'Ora legale di Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Ora di Sakhalin',
                            'standard': 'Ora standard di Sakhalin',
                            'daylight': 'Ora legale di Sakhalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Ora di Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Ora di Riunione'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': "Ora dell'Atlantico",
                            'standard': "Ora standard dell'Atlantico",
                            'daylight': "Ora legale dell'Atlantico"
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Ora centrale USA',
                            'standard': 'Ora standard centrale USA',
                            'daylight': 'Ora legale centrale USA'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': "Ora dell'Amazzonia",
                            'standard': "Ora standard dell'Amazzonia",
                            'daylight': "Ora legale dell'Amazzonia"
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': "Ora dell'Alaska",
                            'standard': 'Ora standard Alaska',
                            'daylight': 'Ora legale Alaska'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': "Ora dell'Africa occidentale",
                            'standard': "Ora standard dell'Africa occidentale",
                            'daylight': "Ora legale dell'Africa occidentale"
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': "Ora dell'Africa meridionale"
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': "Ora dell'Africa orientale"
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': "Ora dell'Africa centrale"
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': "Ora dell'Afghanistan"
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Ora orientale USA',
                            'standard': 'Ora standard orientale USA',
                            'daylight': 'Ora legale orientale USA'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Ora Montagne Rocciose USA',
                            'standard': 'Ora standard Montagne Rocciose USA',
                            'daylight': 'Ora legale Montagne Rocciose USA'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Ora del Pacifico USA',
                            'standard': 'Ora standard del Pacifico USA',
                            'daylight': 'Ora legale del Pacifico USA'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Ora di Anadyr',
                            'standard': 'Ora standard di Anadyr',
                            'daylight': 'Ora legale di Anadyr'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Ora araba',
                            'standard': 'Ora standard araba',
                            'daylight': 'Ora legale araba'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': "Ora dell'Argentina",
                            'standard': "Ora standard dell'Argentina",
                            'daylight': "Ora legale dell'Argentina"
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': "Ora dell'Argentina occidentale",
                            'standard': "Ora standard dell'Argentina occidentale",
                            'daylight': "Ora legale dell'Argentina occidentale"
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': "Ora dell'Armenia",
                            'standard': "Ora standard dell'Armenia",
                            'daylight': "Ora legale dell'Armenia"
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Ora della Cina',
                            'standard': 'Ora standard della Cina',
                            'daylight': 'Ora legale della Cina'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Ora di Choibalsan',
                            'standard': 'Ora standard di Choibalsan',
                            'daylight': 'Ora legale di Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': "Ora dell'Isola di Natale"
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Ora delle Isole Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Ora della Colombia',
                            'standard': 'Ora standard della Colombia',
                            'daylight': 'Ora legale della Colombia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Ora delle Isole Cook',
                            'standard': 'Ora standard delle Isole Cook',
                            'daylight': 'Ora legale media delle Isole Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Ora di Cuba',
                            'standard': 'Ora standard di Cuba',
                            'daylight': 'Ora legale di Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Ora di Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': "Ora di Dumont-d'Urville"
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Ora di Timor Est'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': "Ora dell'Isola di Pasqua",
                            'standard': "Ora standard dell'Isola di Pasqua",
                            'daylight': "Ora legale dell'Isola di Pasqua"
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': "Ora dell'Ecuador"
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': "Ora dell'Europa centrale",
                            'standard': "Ora standard dell'Europa centrale",
                            'daylight': "Ora legale dell'Europa centrale"
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': "Ora dell'Europa orientale",
                            'standard': "Ora standard dell'Europa orientale",
                            'daylight': "Ora legale dell'Europa orientale"
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': "Ora dell'Europa occidentale",
                            'standard': "Ora standard dell'Europa occidentale",
                            'daylight': "Ora legale dell'Europa occidentale"
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': "Ora standard dell'India"
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Ora di Tonga',
                            'standard': 'Ora standard di Tonga',
                            'daylight': 'Ora legale di Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Ora del Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Ora del Turkmenistan',
                            'standard': 'Ora standard del Turkmenistan',
                            'daylight': 'Ora legale del Turkmenistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Ora di Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': "Ora dell'Uruguay",
                            'standard': "Ora standard dell'Uruguay",
                            'daylight': "Ora legale dell'Uruguay"
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': "Ora dell'Uzbekistan",
                            'standard': "Ora standard dell'Uzbekistan",
                            'daylight': "Ora legale dell'Uzbekistan"
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Ora del Vanuatu',
                            'standard': 'Ora standard del Vanuatu',
                            'daylight': 'Ora legale del Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Ora di Ekaterinburg',
                            'standard': 'Ora standard di Ekaterinburg',
                            'daylight': 'Ora legale di Ekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Ora di Yakutsk',
                            'standard': 'Ora standard di Yakutsk',
                            'daylight': 'Ora legale di Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Ora di Wallis e Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': "Ora dell'Isola di Wake"
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Ora di Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Ora di Volgograd',
                            'standard': 'Ora standard di Volgograd',
                            'daylight': 'Ora legale di Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Ora di Vladivostok',
                            'standard': 'Ora standard di Vladivostok',
                            'daylight': 'Ora legale di Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Ora del Venezuela'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Ora di Hovd',
                            'standard': 'Ora standard di Hovd',
                            'daylight': 'Ora legale di Hovd'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Ora di Hong Kong',
                            'standard': 'Ora standard di Hong Kong',
                            'daylight': 'Ora legale di Hong Kong'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Ora delle isole Hawaii-Aleutine',
                            'standard': 'Ora standard delle Isole Hawaii-Aleutine',
                            'daylight': 'Ora legale delle Isole Hawaii-Aleutine'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Ora della Guyana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Ora del Golfo'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Ora della Groenlandia occidentale',
                            'standard': 'Ora standard della Groenlandia occidentale',
                            'daylight': 'Ora legale della Groenlandia occidentale'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Ora della Groenlandia orientale',
                            'standard': 'Ora standard della Groenlandia orientale',
                            'daylight': 'Ora legale della Groenlandia orientale'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Ora del meridiano di Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Ora delle Isole Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Ora della Georgia',
                            'standard': 'Ora standard della Georgia',
                            'daylight': 'Ora legale della Georgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Ora di Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Ora delle Galapagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Ora delle Terre australi e antartiche francesi'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Ora della Guiana francese'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Ora delle Fiji',
                            'standard': 'Ora standard delle Fiji',
                            'daylight': 'Ora legale delle Fiji'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Ora delle Isole Falkland',
                            'standard': 'Ora standard delle Isole Falkland',
                            'daylight': 'Ora legale delle Isole Falkland'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': "Ora dell'Australia centrale",
                            'standard': "Ora standard dell'Australia centrale",
                            'daylight': "Ora legale dell'Australia centrale"
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': "Ora dell'Australia centroccidentale",
                            'standard': "Ora standard dell'Australia centroccidentale",
                            'daylight': "Ora legale dell'Australia centroccidentale"
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': "Ora dell'Australia orientale",
                            'standard': "Ora standard dell'Australia orientale",
                            'daylight': "Ora legale dell'Australia orientale"
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': "Ora dell'Australia occidentale",
                            'standard': "Ora standard dell'Australia occidentale",
                            'daylight': "Ora legale dell'Australia occidentale"
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': "Ora dell'Azerbaigian",
                            'standard': "Ora standard dell'Azerbaigian",
                            'daylight': "Ora legale dell'Azerbaigian"
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Ora delle Azzorre',
                            'standard': 'Ora standard delle Azzorre',
                            'daylight': 'Ora legale delle Azzorre'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Ora del Bangladesh',
                            'standard': 'Ora standard del Bangladesh',
                            'daylight': 'Ora legale del Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Ora del Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Ora della Bolivia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Ora di Brasilia',
                            'standard': 'Ora standard di Brasilia',
                            'daylight': 'Ora legale di Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Ora del Brunei Darussalam'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Ora di Capo Verde',
                            'standard': 'Ora standard di Capo Verde',
                            'daylight': 'Ora legale di Capo Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Ora Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Ora delle Chatham',
                            'standard': 'Ora standard delle Chatham',
                            'daylight': 'Ora legale delle Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Ora del Cile',
                            'standard': 'Ora standard del Cile',
                            'daylight': 'Ora legale del Cile'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': "Ora dell'Oceano Indiano"
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': "Ora dell'Indocina"
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': "Ora dell'Indonesia centrale"
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': "Ora dell'Indonesia orientale"
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': "Ora dell'Indonesia occidentale"
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': "Ora dell'Iran",
                            'standard': "Ora standard dell'Iran",
                            'daylight': "Ora legale dell'Iran"
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Ora di Irkutsk',
                            'standard': 'Ora standard di Irkutsk',
                            'daylight': 'Ora legale di Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Ora di Israele',
                            'standard': 'Ora standard di Israele',
                            'daylight': 'Ora legale di Israele'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Ora del Giappone',
                            'standard': 'Ora standard del Giappone',
                            'daylight': 'Ora legale del Giappone'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Ora di Petropavlovsk-Kamchatski',
                            'standard': 'Ora standard di Petropavlovsk-Kamchatski',
                            'daylight': 'Ora legale di Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Ora del Kazakistan orientale'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Ora del Kazakistan occidentale'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Ora coreana',
                            'standard': 'Ora standard coreana',
                            'daylight': 'Ora legale coreana'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Ora del Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Ora di Krasnoyarsk',
                            'standard': 'Ora standard di Krasnoyarsk',
                            'daylight': 'Ora legale di Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Ora del Kirghizistan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Ora delle Sporadi equatoriali'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Ora di Lord Howe',
                            'standard': 'Ora standard di Lord Howe',
                            'daylight': 'Ora legale di Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': "Ora dell'Isola Macquarie"
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Ora di Magadan',
                            'standard': 'Ora standard di Magadan',
                            'daylight': 'Ora legale di Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Ora della Malesia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Ora delle Maldive'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Ora delle Marchesi'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Ora delle Isole Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Ora delle Mauritius',
                            'standard': 'Ora standard delle Mauritius',
                            'daylight': 'Ora legale delle Mauritius'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Ora di Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ora di Ulan Bator',
                            'standard': 'Ora standard di Ulan Bator',
                            'daylight': 'Ora legale di Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Ora di Mosca',
                            'standard': 'Ora standard di Mosca',
                            'daylight': 'Ora legale di Mosca'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Ora della Birmania'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Ora di Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Ora del Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Ora della Nuova Caledonia',
                            'standard': 'Ora standard della Nuova Caledonia',
                            'daylight': 'Ora legale della Nuova Caledonia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Ora della Nuova Zelanda',
                            'standard': 'Ora standard della Nuova Zelanda',
                            'daylight': 'Ora legale della Nuova Zelanda'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Ora di Terranova',
                            'standard': 'Ora standard di Terranova',
                            'daylight': 'Ora legale di Terranova'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Ora di Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Ora delle Isole Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Ora di Fernando de Noronha',
                            'standard': 'Ora standard di Fernando de Noronha',
                            'daylight': 'Ora legale di Fernando de Noronha'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Ora di Novosibirsk',
                            'standard': 'Ora standard di Novosibirsk',
                            'daylight': 'Ora legale di Novosibirsk'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Ora di Omsk',
                            'standard': 'Ora standard di Omsk',
                            'daylight': 'Ora legale di Omsk'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Ora del Pakistan',
                            'standard': 'Ora standard del Pakistan',
                            'daylight': 'Ora legale del Pakistan'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Ora di Palau'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Ora della Papua Nuova Guinea'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Ora del Paraguay',
                            'standard': 'Ora standard del Paraguay',
                            'daylight': 'Ora legale del Paraguay'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Ora del Per\u00F9',
                            'standard': 'Ora standard del Per\u00F9',
                            'daylight': 'Ora legale del Per\u00F9'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Ora delle Filippine',
                            'standard': 'Ora standard delle Filippine',
                            'daylight': 'Ora legale delle Filippine'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Ora delle Isole della Fenice'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Ora di Saint-Pierre e Miquelon',
                            'standard': 'Ora standard di Saint-Pierre e Miquelon',
                            'daylight': 'Ora legale di Saint-Pierre e Miquelon'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Ora delle Pitcairn'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ora di Pohnpei'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Ora {0}',
                'regionFormat-type-daylight': 'Ora legale: {0}',
                'regionFormat-type-standard': 'Ora standard: {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'ago',
                                '7': 'lug',
                                '6': 'giu',
                                '5': 'mag',
                                '12': 'dic',
                                '11': 'nov',
                                '10': 'ott',
                                '9': 'set',
                                '1': 'gen',
                                '2': 'feb',
                                '3': 'mar',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'L',
                                '6': 'G',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'G',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'agosto',
                                '7': 'luglio',
                                '6': 'giugno',
                                '5': 'maggio',
                                '12': 'dicembre',
                                '11': 'novembre',
                                '10': 'ottobre',
                                '9': 'settembre',
                                '1': 'gennaio',
                                '2': 'febbraio',
                                '3': 'marzo',
                                '4': 'aprile'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'ago',
                                '7': 'lug',
                                '6': 'giu',
                                '5': 'mag',
                                '12': 'dic',
                                '11': 'nov',
                                '10': 'ott',
                                '9': 'set',
                                '1': 'gen',
                                '2': 'feb',
                                '3': 'mar',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'L',
                                '6': 'G',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'G',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'Agosto',
                                '7': 'Luglio',
                                '6': 'Giugno',
                                '5': 'Maggio',
                                '12': 'Dicembre',
                                '11': 'Novembre',
                                '10': 'Ottobre',
                                '9': 'Settembre',
                                '1': 'Gennaio',
                                '2': 'Febbraio',
                                '3': 'Marzo',
                                '4': 'Aprile'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'dom',
                                'mon': 'lun',
                                'tue': 'mar',
                                'wed': 'mer',
                                'thu': 'gio',
                                'fri': 'ven',
                                'sat': 'sab'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'M',
                                'thu': 'G',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'dom',
                                'mon': 'lun',
                                'tue': 'mar',
                                'wed': 'mer',
                                'thu': 'gio',
                                'fri': 'ven',
                                'sat': 'sab'
                            },
                            'wide': {
                                'sun': 'domenica',
                                'mon': 'luned\u00EC',
                                'tue': 'marted\u00EC',
                                'wed': 'mercoled\u00EC',
                                'thu': 'gioved\u00EC',
                                'fri': 'venerd\u00EC',
                                'sat': 'sabato'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'dom',
                                'mon': 'lun',
                                'tue': 'mar',
                                'wed': 'mer',
                                'thu': 'gio',
                                'fri': 'ven',
                                'sat': 'sab'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'M',
                                'thu': 'G',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'dom',
                                'mon': 'lun',
                                'tue': 'mar',
                                'wed': 'mer',
                                'thu': 'gio',
                                'fri': 'ven',
                                'sat': 'sab'
                            },
                            'wide': {
                                'sun': 'Domenica',
                                'mon': 'Luned\u00EC',
                                'tue': 'Marted\u00EC',
                                'wed': 'Mercoled\u00EC',
                                'thu': 'Gioved\u00EC',
                                'fri': 'Venerd\u00EC',
                                'sat': 'Sabato'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'T1',
                                '2': 'T2',
                                '3': 'T3',
                                '4': 'T4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1\u00BA trimestre',
                                '2': '2\u00BA trimestre',
                                '3': '3\u00BA trimestre',
                                '4': '4\u00BA trimestre'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'T1',
                                '2': 'T2',
                                '3': 'T3',
                                '4': 'T4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'Primo trimestre',
                                '2': 'Secondo trimestre',
                                '3': 'Terzo trimestre',
                                '4': 'Quarto trimestre'
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
                                'am': 'm.',
                                'pm': 'p.'
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
                                'am': 'm.',
                                'pm': 'p.'
                            },
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'a.C.',
                            '0-alt-variant': 'BCE',
                            '1': 'd.C.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'aC',
                            '0-alt-variant': 'BCE',
                            '1': 'dC',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'aC',
                            '0-alt-variant': 'BCE',
                            '1': 'dC',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d MMMM y',
                        'long': 'dd MMMM y',
                        'medium': 'dd/MMM/y',
                        'short': 'dd/MM/yy'
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
                            'yQQQ': 'QQQ y',
                            'Gy': 'y G',
                            'EHms': 'E HH:mm:ss',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E HH.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'yQQQQ': 'QQQQ y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'hh:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'hh:mm a',
                            'H': 'HH',
                            'h': 'hh a',
                            'GyMMMEd': 'E d MMM y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'd/M/y',
                            'yMEd': 'E d/M/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E d MMM y',
                            'yMMMM': 'MMMM y'
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
                                'd': 'E dd - E dd MMM',
                                'M': 'E dd MMM - E dd MMM'
                            },
                            'MMMd': {
                                'd': 'dd-dd MMM',
                                'M': 'dd MMM - dd MMM'
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
                                'H': 'HH-HH v'
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
                                'd': 'dd-dd MMM y',
                                'M': 'dd MMM - dd MMM y',
                                'y': 'dd MMM y - dd MMM y'
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
