/* AstroDate
 * Language: ro
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
        AstroDate.lang('ro', {
            'codePatterns': {
                'language': 'Limbă: {0}',
                'script': 'Scriere: {0}',
                'territory': 'Regiune: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordonați caracterele kana separat',
                    'yes': 'Ordonați kana diferențiat'
                },
                'colCaseLevel': {
                    'no': 'Ordonați neținând seama de diferența dintre majuscule/minuscule',
                    'yes': 'Ordonați ținând seama de diferența dintre majuscule/minuscule'
                },
                'colCaseFirst': {
                    'lower': 'Ordonați întâi minusculele',
                    'no': 'Ordonați după dimensiunea normală a literei',
                    'upper': 'Ordonați mai întâi majusculele'
                },
                'colStrength': {
                    'identical': 'Ordonați-le pe toate',
                    'primary': 'Ordonați numai literele de bază',
                    'quaternary': 'Ordonați după accente/dimensiunea literei/lățime/kana',
                    'secondary': 'Ordonați după accent',
                    'tertiary': 'Ordonați după accente/dimensiunea literei/lățime'
                },
                'colNumeric': {
                    'no': 'Ordonați cifrele individual',
                    'yes': 'Ordonați cifrele în ordine numerică'
                },
                'colNormalization': {
                    'no': 'Ordonați fără normalizare',
                    'yes': 'Ordonați caracterele unicode normalizat'
                },
                'calendar': {
                    'japanese': 'calendar japonez',
                    'iso8601': 'iso8601',
                    'coptic': 'calendar copt',
                    'dangi': 'dangi',
                    'ethiopic': 'calendar etiopian',
                    'ethiopic-amete-alem': 'Calendarul etiopian amete alem',
                    'gregorian': 'calendar gregorian',
                    'hebrew': 'calendar ebraic',
                    'persian': 'calendar persan',
                    'roc': 'calendar al Republicii Chineze',
                    'chinese': 'calendar chinezesc',
                    'buddhist': 'calendar budist',
                    'indian': 'calendar național indian',
                    'islamic': 'calendar islamic',
                    'islamic-civil': 'calendar islamic civil',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'sortare după cartea de telefon',
                    'gb2312han': 'sortare pentru chineza simplificată - GB2312',
                    'eor': 'regulile europene de sortare',
                    'ducet': 'ordine de sortare Unicode implicită',
                    'dictionary': 'Ordine de sortare a dicționarului',
                    'big5han': 'sortare pentru chineza tradițională - Big5',
                    'traditional': 'sortare tradițională',
                    'standard': 'ordine de sortare standard',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Ordine de sortare a liniilor ideogramelor',
                    'stroke': 'ordine de sortare după trasare',
                    'searchjl': 'Căutați în funcție de consoana inițială hangul',
                    'search': 'căutare cu scop general',
                    'reformed': 'Ordine de sortare reformată',
                    'pinyin': 'sortare pinyin',
                    'phonetic': 'Tip de ordonare fonetică'
                },
                'numbers': {
                    'knda': 'cifre kannada',
                    'khmr': 'cifre khmere',
                    'kali': 'kali',
                    'jpanfin': 'numerale financiare japoneze',
                    'jpan': 'numerale japoneze',
                    'java': 'java',
                    'hebr': 'numerale ebraice',
                    'hantfin': 'numerale financiare chinezești tradiționale',
                    'hant': 'numerale chinezești tradiționale',
                    'hansfin': 'numerale financiare chinezești simplificate',
                    'hans': 'numerale chinezești simplificate',
                    'hanidec': 'numerale zecimale chinezești',
                    'guru': 'cifre gurmukhi',
                    'gujr': 'cifre gujarati',
                    'greklow': 'numerale grecești cu minuscule',
                    'grek': 'numerale grecești',
                    'bali': 'bali',
                    'armnlow': 'numerale armenești cu minuscule',
                    'armn': 'numerale armenești',
                    'arabext': 'cifre indo-arabe extinse',
                    'arab': 'cifre indo-arabe',
                    'finance': 'Sistemul numeric financiar',
                    'traditional': 'Numere tradiționale',
                    'native': 'Cifre native',
                    'beng': 'cifre bengaleze',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'cifre devanagari',
                    'orya': 'cifre oriya',
                    'osma': 'osma',
                    'roman': 'numerale romane',
                    'romanlow': 'numerale romane cu minuscule',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Cifre Vai',
                    'tibt': 'cifre tibetane',
                    'thai': 'cifre thailandeze',
                    'telu': 'cifre telugu',
                    'tamldec': 'cifre tamilă',
                    'taml': 'numerale tradiționale tamilă',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'cifre birmaneze',
                    'mtei': 'mtei',
                    'mong': 'Cifre mongole',
                    'mlym': 'cifre malayalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'cifre occidentale',
                    'laoo': 'cifre laoțiene',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'numerale georgiene',
                    'fullwide': 'cifre cu lățimea întreagă',
                    'ethi': 'numerale etiopiene'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordonați simbolurile',
                    'shifted': 'Ordonați ignorând simbolurile'
                },
                'colBackwards': {
                    'no': 'Ordonați accentele în mod normal',
                    'yes': 'Ordonați după accente în ordine inversă'
                }
            },
            'keys': {
                'colNormalization': 'Ordonare normalizată',
                'collation': 'ordine de sortare',
                'colHiraganaQuaternary': 'Ordonare după kana',
                'colCaseLevel': 'Ordonare care ține seama de majuscule/minuscule',
                'colCaseFirst': 'Ordonare după majuscule/minuscule',
                'colBackwards': 'Ordonare inversă după accent',
                'colAlternate': 'Ordonare cu simbolurile ignorate',
                'calendar': 'calendar',
                'x': 'Utilizare privată',
                'variableTop': 'Ordonați ca simboluri',
                'va': 'Varianta locală',
                'timezone': 'Fusul orar',
                'numbers': 'numere',
                'currency': 'monedă',
                'colStrength': 'Puterea ordonării',
                'colNumeric': 'Ordonare numerică'
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
                            'exemplarCity': 'Insula Pitcairn'
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
                            'exemplarCity': 'Insula Paștelui'
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
                            'exemplarCity': 'Marchize'
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
                            'exemplarCity': 'Insula Crăciunului'
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
                            'exemplarCity': 'Oraș necunoscut'
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
                            'exemplarCity': 'Showa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Polul Sud'
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
                            'exemplarCity': 'Guadelupa'
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
                                'exemplarCity': 'Beulah, Dakota de Nord'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota de Nord'
                            },
                            'Center': {
                                'exemplarCity': 'Centru, Dakota de Nord'
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
                            'exemplarCity': 'Georgia de Sud'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sf. Elena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azore'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Canare'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Capul Verde'
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
                            'exemplarCity': 'Moscova'
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
                                'daylight': 'Ora de vară britanică'
                            },
                            'exemplarCity': 'Londra'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisabona'
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
                            'exemplarCity': 'Insula Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'București'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruxelles'
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
                            'exemplarCity': 'Atena'
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
                            'exemplarCity': 'Ujhorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporoje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varșovia'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
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
                                'daylight': 'Ora de vară a Irlandei'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhaga'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chișinău'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapesta'
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
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Și Min'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyad'
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
                            'exemplarCity': 'Phenian'
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
                            'exemplarCity': 'Damasc'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dacca'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Dușanbe'
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
                            'exemplarCity': 'Irkuțk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
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
                            'exemplarCity': 'Yakuțk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Ekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erevan'
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
                            'exemplarCity': 'Tașkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapore'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Ierusalim'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Așgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktobe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadir'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almatî'
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
                            'exemplarCity': 'Bișkek'
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
                            'exemplarCity': 'Kamciatka'
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
                            'exemplarCity': 'Krasnoiarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuweit'
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
                            'exemplarCity': 'Novokuznețk'
                        }
                    }
                },
                'metazone': {
                    'Syowa': {
                        'long': {
                            'standard': 'Ora din Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Ora Surinamului'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Ora Georgiei de Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Ora Insulelor Solomon'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Ora din Singapore'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Ora din Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Ora din Samoa',
                            'standard': 'Ora standard din Samoa',
                            'daylight': 'Ora de vară din Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Ora din Samara',
                            'standard': 'Ora standard din Samara',
                            'daylight': 'Ora de vară din Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Ora din Sahalin',
                            'standard': 'Ora standard din Sahalin',
                            'daylight': 'Ora de vară din Sahalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Ora din Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Ora din Reunion'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ora din Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Ora din Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Ora din Saint-Pierre și Miquelon',
                            'standard': 'Ora standard din Saint-Pierre și Miquelon',
                            'daylight': 'Ora de vară din Saint-Pierre și Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Ora Insulelor Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Ora din Filipine',
                            'standard': 'Ora standard din Filipine',
                            'daylight': 'Ora de vară din Filipine'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Ora din Peru',
                            'standard': 'Ora standard din Peru',
                            'daylight': 'Ora de vară din Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Ora din Paraguay',
                            'standard': 'Ora standard din Paraguay',
                            'daylight': 'Ora de vară din Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Ora din Papua Noua Guinee'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Ora Africii Meridionale'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Ora Africii Orientale'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Ora Africii Centrale'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Ora Afganistanului'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Ora Acre',
                            'standard': 'Ora standard Acre',
                            'daylight': 'Ora de vară Acre'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Ora Amazonului',
                            'standard': 'Ora standard a Amazonului',
                            'daylight': 'Ora de vară a Amazonului'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Ora centrală nord-americană',
                            'standard': 'Ora standard centrală nord-americană',
                            'daylight': 'Ora de vară centrală nord-americană'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Ora orientală nord-americană',
                            'standard': 'Ora standard orientală nord-americană',
                            'daylight': 'Ora de vară orientală nord-americană'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Ora zonei montane nord-americane',
                            'standard': 'Ora standard în zona montană nord-americană',
                            'daylight': 'Ora de vară în zona montană nord-americană'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Ora zonei Pacific nord-americane',
                            'standard': 'Ora standard în zona Pacific nord-americană',
                            'daylight': 'Ora de vară în zona Pacific nord-americană'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Ora din Anadyr',
                            'standard': 'Ora standard din Anadyr',
                            'daylight': 'Ora de vară din Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Ora Aqtau',
                            'standard': 'Ora standard Aqtau',
                            'daylight': 'Ora de vară a zonei Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Ora Aqtobe',
                            'standard': 'Ora standard Aqtobe',
                            'daylight': 'Ora de vară a zonei Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Ora din Capul Verde',
                            'standard': 'Ora standard din Capul Verde',
                            'daylight': 'Ora de vară din Capul Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Ora din Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Ora din Chatham',
                            'standard': 'Ora standard din Chatham',
                            'daylight': 'Ora de vară din Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Ora din Chile',
                            'standard': 'Ora standard din Chile',
                            'daylight': 'Ora de vară din Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Ora Chinei',
                            'standard': 'Ora standard a Chinei',
                            'daylight': 'Ora de vară a Chinei'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Ora din Choibalsan',
                            'standard': 'Ora standard din Choibalsan',
                            'daylight': 'Ora de vară din Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Ora din Insula Christmas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Ora Insulelor Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Ora Columbiei',
                            'standard': 'Ora standard a Columbiei',
                            'daylight': 'Ora de vară a Columbiei'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Ora Insulelor Cook',
                            'standard': 'Ora standard a Insulelor Cook',
                            'daylight': 'Ora de vară a Insulelor Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Ora Cubei',
                            'standard': 'Ora standard a Cubei',
                            'daylight': 'Ora de vară a Cubei'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Ora din Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Ora din Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Ora Timorului de Est'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Ora din Insula Paștelui',
                            'standard': 'Ora standard din Insula Paștelui',
                            'daylight': 'Ora de vară din Insula Paștelui'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ora Ecuadorului'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Ora Europei Centrale',
                            'standard': 'Ora standard a Europei Centrale',
                            'daylight': 'Ora de vară a Europei Centrale'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Ora Europei de Est',
                            'standard': 'Ora standard a Europei de Est',
                            'daylight': 'Ora de vară a Europei de Est'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Ora Europei de Vest',
                            'standard': 'Ora standard a Europei de Vest',
                            'daylight': 'Ora de vară a Europei de Vest'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Ora din Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Ora din Tonga',
                            'standard': 'Ora standard din Tonga',
                            'daylight': 'Ora de vară din Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Ora din Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Ora din Turkmenistan',
                            'standard': 'Ora standard din Turkmenistan',
                            'daylight': 'Ora de vară din Turkmenistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Ora din Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Ora Uruguayului',
                            'standard': 'Ora standard a Uruguayului',
                            'daylight': 'Ora de vară a Uruguayului'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Ora din Uzbekistan',
                            'standard': 'Ora standard din Uzbekistan',
                            'daylight': 'Ora de vară din Uzbekistan'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Ora din Vanuatu',
                            'standard': 'Ora standard din Vanuatu',
                            'daylight': 'Ora de vară din Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Ora din Ekaterinburg',
                            'standard': 'Ora standard din Ekaterinburg',
                            'daylight': 'Ora de vară din Ekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Ora din Yakuțk',
                            'standard': 'Ora standard din Yakuțk',
                            'daylight': 'Ora de vară din Yakuțk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Ora din Wallis și Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Ora Insulei Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Ora din Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Ora din Volgograd',
                            'standard': 'Ora standard din Volgograd',
                            'daylight': 'Ora de vară din Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Ora din Vladivostok',
                            'standard': 'Ora standard din Vladivostok',
                            'daylight': 'Ora de vară din Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Ora Venezuelei'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Ora din Tadjikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Ora din Taipei',
                            'standard': 'Ora standard din Taipei',
                            'daylight': 'Ora de vară din Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Ora din Tahiti'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Ora din Guyana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Ora standard a Golfului'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Ora Groenlandei occidentale',
                            'standard': 'Ora standard a Groenlandei occidentale',
                            'daylight': 'Ora de vară a Groenlandei occidentale'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Ora Groenlandei orientale',
                            'standard': 'Ora standard a Groenlandei orientale',
                            'daylight': 'Ora de vară a Groenlandei orientale'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Ora de Greenwhich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Ora Insulelor Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Ora Georgiei',
                            'standard': 'Ora standard a Georgiei',
                            'daylight': 'Ora de vară a Georgiei'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Ora din Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Ora din Galapagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Ora din Teritoriile Australe și Antarctice Franceze'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Ora Guianei Franceze'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Ora din Fiji',
                            'standard': 'Ora standard din Fiji',
                            'daylight': 'Ora de vară din Fiji'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Ora din Insulele Falkland',
                            'standard': 'Ora standard din Insulele Falkland',
                            'daylight': 'Ora de vară din Insulele Falkland'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Ora Africii Occidentale',
                            'standard': 'Ora standard a Africii Occidentale',
                            'daylight': 'Ora de vară a Africii Occidentale'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Ora din Alaska',
                            'standard': 'Ora standard din Alaska',
                            'daylight': 'Ora de vară din Alaska'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Ora Almaty',
                            'standard': 'Ora standard Almaty',
                            'daylight': 'Ora de vară Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Ora arabă',
                            'standard': 'Ora standard arabă',
                            'daylight': 'Ora de vară arabă'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Ora Argentinei',
                            'standard': 'Ora standard a Argentinei',
                            'daylight': 'Ora de vară a Argentinei'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Ora Argentinei Occidentale',
                            'standard': 'Ora standard a Argentinei Occidentale',
                            'daylight': 'Ora de vară a Argentinei Occidentale'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Ora Armeniei',
                            'standard': 'Ora standard a Armeniei',
                            'daylight': 'Ora de vară a Armeniei'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Ora zonei Atlantic nord-americane',
                            'standard': 'Ora standard în zona Atlantic nord-americană',
                            'daylight': 'Ora de vară în zona Atlantic nord-americană'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Ora Australiei Centrale',
                            'standard': 'Ora standard a Australiei Centrale',
                            'daylight': 'Ora de vară a Australiei Centrale'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Ora Australiei Central Occidentale',
                            'standard': 'Ora standard a Australiei Central Occidentale',
                            'daylight': 'Ora de vară a Australiei Central Occidentale'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Ora Australiei Orientale',
                            'standard': 'Ora standard a Australiei Orientale',
                            'daylight': 'Ora de vară a Australiei Orientale'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Ora Australiei Occidentale',
                            'standard': 'Ora standard a Australiei Occidentale',
                            'daylight': 'Ora de vară a Australiei Occidentale'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Ora Azerbaidjanului',
                            'standard': 'Ora standard a Azerbaidjanului',
                            'daylight': 'Ora de vară a Azerbaidjanului'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Ora din Azore',
                            'standard': 'Ora standard din Azore',
                            'daylight': 'Ora de vară din Azore'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Ora din Bangladesh',
                            'standard': 'Ora standard din Bangladesh',
                            'daylight': 'Ora de vară din Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Ora Bhutanului'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Ora Boliviei'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Ora Brasiliei',
                            'standard': 'Ora standard a Brasiliei',
                            'daylight': 'Ora de vară a Brasiliei'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Ora din Brunei Darussalam'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Ora din Hawaii-Aleutine',
                            'standard': 'Ora standard din Hawaii-Aleutine',
                            'daylight': 'Ora de vară din Hawaii-Aleutine'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Ora din Hong Kong',
                            'standard': 'Ora standard din Hong Kong',
                            'daylight': 'Ora de vară din Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Ora din Hovd',
                            'standard': 'Ora standard din Hovd',
                            'daylight': 'Ora de vară din Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Ora Indiei'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Ora Oceanului Indian'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Ora Indochinei'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Ora Indoneziei Centrale'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Ora Indoneziei de Est'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Ora Indoneziei de Vest'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Ora Iranului',
                            'standard': 'Ora standard a Iranului',
                            'daylight': 'Ora de vară a Iranului'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Ora din Irkuțk',
                            'standard': 'Ora standard din Irkuțk',
                            'daylight': 'Ora de vară din Irkuțk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Ora Israelului',
                            'standard': 'Ora standard a Israelului',
                            'daylight': 'Ora de vară a Israelului'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Ora Japoniei',
                            'standard': 'Ora standard a Japoniei',
                            'daylight': 'Ora de vară a Japoniei'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Ora din Petropavlovsk-Kamciațki',
                            'standard': 'Ora standard din Petropavlovsk-Kamciațki',
                            'daylight': 'Ora de vară din Petropavlovsk-Kamciațki'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Ora din Kazahstanul de Est'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Ora din Kazahstanul de Vest'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Ora Coreei',
                            'standard': 'Ora standard a Coreei',
                            'daylight': 'Ora de vară a Coreei'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Ora din Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Ora din Krasnoiarsk',
                            'standard': 'Ora standard din Krasnoiarsk',
                            'daylight': 'Ora de vară din Krasnoiarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Ora din Kârgâzstan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Ora din Insulele Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Ora din Lord Howe',
                            'standard': 'Ora standard din Lord Howe',
                            'daylight': 'Ora de vară din Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Ora din Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Ora din Magadan',
                            'standard': 'Ora standard din Magadan',
                            'daylight': 'Ora de vară din Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Ora din Malaysia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Ora din Maldive'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Ora Insulelor Marchize'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Ora Insulelor Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Ora din Mauritius',
                            'standard': 'Ora standard din Mauritius',
                            'daylight': 'Ora de vară din Mauritius'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Ora din Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ora din Ulan Bator',
                            'standard': 'Ora standard din Ulan Bator',
                            'daylight': 'Ora de vară din Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Ora Moscovei',
                            'standard': 'Ora standard a Moscovei',
                            'daylight': 'Ora de vară a Moscovei'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Ora Myanmarului'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Ora din Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Ora Nepalului'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Ora Noii Caledonii',
                            'standard': 'Ora standard a Noii Caledonii',
                            'daylight': 'Ora de vară a Noii Caledonii'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Ora Noii Zeelande',
                            'standard': 'Ora standard a Noii Zeelande',
                            'daylight': 'Ora de vară a Noii Zeelande'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Ora din Newfoundland',
                            'standard': 'Ora standard din Newfoundland',
                            'daylight': 'Ora de vară din Newfoundland'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Ora din Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Ora Insulelor Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Ora din Fernando de Noronha',
                            'standard': 'Ora standard din Fernando de Noronha',
                            'daylight': 'Ora de vară din Fernando de Noronha'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Ora din Novosibirsk',
                            'standard': 'Ora standard din Novosibirsk',
                            'daylight': 'Ora de vară din Novosibirsk'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Ora din Omsk',
                            'standard': 'Ora standard din Omsk',
                            'daylight': 'Ora de vară din Omsk'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Ora Pakistanului',
                            'standard': 'Ora standard a Pakistanului',
                            'daylight': 'Ora de vară a Pakistanului'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Ora din Palau'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Ora din {0}',
                'regionFormat-type-daylight': 'Ora de vară din {0}',
                'regionFormat-type-standard': 'Ora standard din {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'iul.',
                                '6': 'iun.',
                                '5': 'mai',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'ian.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'I',
                                '6': 'I',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'I',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'iulie',
                                '6': 'iunie',
                                '5': 'mai',
                                '12': 'decembrie',
                                '11': 'noiembrie',
                                '10': 'octombrie',
                                '9': 'septembrie',
                                '1': 'ianuarie',
                                '2': 'februarie',
                                '3': 'martie',
                                '4': 'aprilie'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'iul.',
                                '6': 'iun.',
                                '5': 'mai',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'ian.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'I',
                                '6': 'I',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'I',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'iulie',
                                '6': 'iunie',
                                '5': 'mai',
                                '12': 'decembrie',
                                '11': 'noiembrie',
                                '10': 'octombrie',
                                '9': 'septembrie',
                                '1': 'ianuarie',
                                '2': 'februarie',
                                '3': 'martie',
                                '4': 'aprilie'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'Dum',
                                'mon': 'Lun',
                                'tue': 'Mar',
                                'wed': 'Mie',
                                'thu': 'Joi',
                                'fri': 'Vin',
                                'sat': 'Sâm'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'M',
                                'thu': 'J',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Du',
                                'mon': 'Lu',
                                'tue': 'Ma',
                                'wed': 'Mi',
                                'thu': 'Jo',
                                'fri': 'Vi',
                                'sat': 'Sâ'
                            },
                            'wide': {
                                'sun': 'duminică',
                                'mon': 'luni',
                                'tue': 'marți',
                                'wed': 'miercuri',
                                'thu': 'joi',
                                'fri': 'vineri',
                                'sat': 'sâmbătă'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Dum',
                                'mon': 'Lun',
                                'tue': 'Mar',
                                'wed': 'Mie',
                                'thu': 'Joi',
                                'fri': 'Vin',
                                'sat': 'Sâm'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'M',
                                'thu': 'J',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Du',
                                'mon': 'Lu',
                                'tue': 'Ma',
                                'wed': 'Mi',
                                'thu': 'Jo',
                                'fri': 'Vi',
                                'sat': 'Sâ'
                            },
                            'wide': {
                                'sun': 'duminică',
                                'mon': 'luni',
                                'tue': 'marți',
                                'wed': 'miercuri',
                                'thu': 'joi',
                                'fri': 'vineri',
                                'sat': 'sâmbătă'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'trim. I',
                                '2': 'trim. II',
                                '3': 'trim. III',
                                '4': 'trim. IV'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'trimestrul I',
                                '2': 'trimestrul al II-lea',
                                '3': 'trimestrul al III-lea',
                                '4': 'trimestrul al IV-lea'
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
                                '1': 'trimestrul I',
                                '2': 'trimestrul al II-lea',
                                '3': 'trimestrul al III-lea',
                                '4': 'trimestrul al IV-lea'
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
                                'am': 'a.m.',
                                'pm': 'p.m.'
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
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'înainte de Hristos',
                            '0-alt-variant': 'î.e.n',
                            '1': 'după Hristos',
                            '1-alt-variant': 'e.n.'
                        },
                        'eraAbbr': {
                            '0': 'î.Hr.',
                            '0-alt-variant': 'î.e.n',
                            '1': 'd.Hr.',
                            '1-alt-variant': 'e.n.'
                        },
                        'eraNarrow': {
                            '0': 'î.Hr.',
                            '0-alt-variant': 'î.e.n',
                            '1': 'd.Hr.',
                            '1-alt-variant': 'e.n.'
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
                        'full': '{1}, {0}',
                        'long': '{1}, {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMM': 'MMM y',
                            'yMM': 'MM.y',
                            'yMEd': 'E, dd.MM.y',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM.y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'MMdd': 'dd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E, d MMMM',
                            'ms': 'mm:ss',
                            'y': 'y'
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
                                'd': 'E, d MMM - E, d MMM',
                                'M': 'E, d MMM - E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM - E, dd.MM',
                                'M': 'E, dd.MM - E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM - dd.MM',
                                'M': 'dd.MM - dd.MM'
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
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM - E, d MMM y',
                                'M': 'E, d MMM - E, d MMM y',
                                'y': 'E, d MMM y - E, d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM - MMMM y',
                                'y': 'MMMM y – MMMM y'
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
