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
        AstroDate.lang('cs', {
            'codePatterns': {
                'language': 'Jazyk: {0}',
                'script': 'Písmo: {0}',
                'territory': 'Region: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Řadit slabičná písma (kana) samostatně',
                    'yes': 'Řadit jednotlivé typy slabičných písem (kana) různě'
                },
                'colCaseLevel': {
                    'no': 'Nerozlišovat při řazení velká a malá písmena',
                    'yes': 'Rozlišovat při řazení velká a malá písmena'
                },
                'colCaseFirst': {
                    'lower': 'Nejdříve řadit malá písmena',
                    'no': 'Normální řazení velkých a malých písmen',
                    'upper': 'Nejdříve řadit velká písmena'
                },
                'colStrength': {
                    'identical': 'Řadit vše',
                    'primary': 'Řadit pouze základní písmena',
                    'quaternary': 'Řadit akcenty/velká a malá písmena/šířku/kana',
                    'secondary': 'Řadit akcenty',
                    'tertiary': 'Řadit akcenty/velká a malá písmena/šířku'
                },
                'colNumeric': {
                    'no': 'Řadit číslice jednotlivě',
                    'yes': 'Numerické řazení číslic'
                },
                'colNormalization': {
                    'no': 'Řadit bez normalizace',
                    'yes': 'Řazení podle normalizovaného kódování Unicode'
                },
                'calendar': {
                    'japanese': 'Japonský kalendář',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptský kalendář',
                    'dangi': 'dangi',
                    'ethiopic': 'Etiopský kalendář',
                    'ethiopic-amete-alem': 'Etiopský kalendář (Amete-Alem)',
                    'gregorian': 'Gregoriánský kalendář',
                    'hebrew': 'Hebrejský kalendář',
                    'persian': 'Perský kalendář',
                    'roc': 'Kalendář Čínské republiky',
                    'chinese': 'Čínský kalendář',
                    'buddhist': 'Buddhistický kalendář',
                    'indian': 'Indický národní kalendář',
                    'islamic': 'Muslimský kalendář',
                    'islamic-civil': 'Muslimský občanský kalendář',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Řazení jako v telefonním seznamu',
                    'gb2312han': 'Řazení pro zjednodušenou čínštinu – GB2312',
                    'eor': 'eor',
                    'ducet': 'Výchozí řazení Unicode',
                    'dictionary': 'Slovníkové řazení',
                    'big5han': 'Řazení pro tradiční čínštinu – Big5',
                    'traditional': 'Tradiční řazení',
                    'standard': 'Standardní řazení',
                    'zhuyin': 'Ču-jin',
                    'unihan': 'Řazení podle radikálů',
                    'stroke': 'Řazení podle tahů',
                    'searchjl': 'Vyhledávat podle počáteční souhlásky písma hangul',
                    'search': 'Obecné hledání',
                    'reformed': 'Reformované řazení',
                    'pinyin': 'Řazení podle pchin-jinu',
                    'phonetic': 'Fonetické řazení'
                },
                'numbers': {
                    'knda': 'Kannadské číslice',
                    'khmr': 'Khmerské číslice',
                    'kali': 'kali',
                    'jpanfin': 'Japonské finanční číslice',
                    'jpan': 'Japonské číslice',
                    'java': 'java',
                    'hebr': 'Hebrejské číslice',
                    'hantfin': 'Finanční číslice tradiční čínštiny',
                    'hant': 'Číslice tradiční čínštiny',
                    'hansfin': 'Finanční číslice zjednodušené čínštiny',
                    'hans': 'Číslice zjednodušené čínštiny',
                    'hanidec': 'Čínské desítkové číslice',
                    'guru': 'Číslice gurmukhí',
                    'gujr': 'Gudžarátské číslice',
                    'greklow': 'Malé řecké číslice',
                    'grek': 'Řecké číslice',
                    'bali': 'bali',
                    'armnlow': 'Malé arménské číslice',
                    'armn': 'Arménské číslice',
                    'arabext': 'Rozšířené arabsko-indické číslice',
                    'arab': 'Arabsko-indické číslice',
                    'finance': 'Finančnický zápis čísel',
                    'traditional': 'Tradiční číslovky',
                    'native': 'Nativní číslice',
                    'beng': 'Bengálské číslice',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Číslice písma dévanágarí',
                    'orya': 'Urijské číslice',
                    'osma': 'osma',
                    'roman': 'Římské číslice',
                    'romanlow': 'Malé římské číslice',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vaiské číslice',
                    'tibt': 'Tibetské číslice',
                    'thai': 'Thajské číslice',
                    'telu': 'Telugské číslice',
                    'tamldec': 'Tamilské číslice',
                    'taml': 'Tamilské tradiční číslice',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Myanmarské číslice',
                    'mtei': 'mtei',
                    'mong': 'Mongolské číslice',
                    'mlym': 'Malajálamské číslice',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Západní číslice',
                    'laoo': 'Laoské číslice',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Gruzínské číslice',
                    'fullwide': 'Číslice – plná šířka',
                    'ethi': 'Etiopské číslice'
                },
                'colAlternate': {
                    'non-ignorable': 'Řadit symboly',
                    'shifted': 'Při řazení ignorovat symboly'
                },
                'colBackwards': {
                    'no': 'Normální řazení akcentů',
                    'yes': 'Řadit akcenty opačně'
                }
            },
            'keys': {
                'colNormalization': 'Normalizované řazení',
                'collation': 'Řazení',
                'colHiraganaQuaternary': 'Řazení podle slabičných písem (kana)',
                'colCaseLevel': 'Rozlišovaní velkých a malých písmen při řazení',
                'colCaseFirst': 'Řazení velkých a malých písmen',
                'colBackwards': 'Obrácené řazení akcentů',
                'colAlternate': 'Ignorovat řazení symbolů',
                'calendar': 'Kalendář',
                'x': 'Soukromé použití',
                'variableTop': 'Řadit jako symboly',
                'va': 'Varianta národního prostředí',
                'timezone': 'Časové pásmo',
                'numbers': 'Čísla',
                'currency': 'Měna',
                'colStrength': 'Síla řazení',
                'colNumeric': 'Číselné řazení'
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
                            'exemplarCity': 'Galapágy'
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
                            'exemplarCity': 'Chuukské ostrovy'
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
                            'exemplarCity': 'Chathamské ostrovy'
                        },
                        'Easter': {
                            'exemplarCity': 'Velikonoční ostrov'
                        },
                        'Efate': {
                            'exemplarCity': 'Éfaté'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Enderbury'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Fakaofo'
                        },
                        'Fiji': {
                            'exemplarCity': 'Fidži'
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
                            'exemplarCity': 'Markézy'
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
                            'exemplarCity': 'Maledivy'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelenovy ostrovy'
                        },
                        'Reunion': {
                            'exemplarCity': 'Réunion'
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
                            'exemplarCity': 'Vánoční ostrov'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokosové ostrovy'
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
                            'exemplarCity': 'Neznámé město'
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
                            'exemplarCity': 'Jižní pól'
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
                            'exemplarCity': 'Kajmanské ostrovy'
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
                            'exemplarCity': 'Cancún'
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
                            'exemplarCity': 'Bahía'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bahia Banderas'
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
                            'exemplarCity': 'Córdoba'
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
                            'exemplarCity': 'México'
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
                            'exemplarCity': 'Montréal'
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
                                'exemplarCity': 'Beulah, Severní Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Severní Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Severní Dakota'
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
                            'exemplarCity': 'Svatý Kryštof'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Svatá Lucie'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Svatý Tomáš (Karibik)'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Svatý Vincenc'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Jižní Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavík'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sv. Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorské ostrovy'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudy'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanárské ostrovy'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kapverdy'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faerské ostrovy'
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
                                'daylight': 'Britský letní čas'
                            },
                            'exemplarCity': 'Londýn'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Lublaň'
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
                            'exemplarCity': 'Bukurešť'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brusel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlín'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Bělehrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Athény'
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
                            'exemplarCity': 'Užhorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Curych'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Záporoží'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Záhřeb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varšava'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Vídeň'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikán'
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
                            'exemplarCity': 'Řím'
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
                            'exemplarCity': 'Paříž'
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
                                'daylight': 'Irský letní čas'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kodaň'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Kišiněv'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapešť'
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
                            'exemplarCity': 'Chartúm'
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
                            'exemplarCity': 'Džibuti'
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
                            'exemplarCity': 'Mogadišu'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ndžamena'
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
                            'exemplarCity': 'Svatý Tomáš'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto-Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Ouagadougou'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nuakšott'
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
                            'exemplarCity': 'Káhira'
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
                            'exemplarCity': 'Abidžan'
                        },
                        'Accra': {
                            'exemplarCity': 'Accra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Alžír'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Šanghaj'
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
                            'exemplarCity': 'Ho Či Minovo město'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijád'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangún'
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
                            'exemplarCity': 'Bagdád'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Čchung-čching'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damašek'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dháka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubaj'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Dušanbe'
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
                            'exemplarCity': 'Ulánbátar'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumči'
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
                            'exemplarCity': 'Jekatěrinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimbú'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teherán'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taškent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tchaj-pej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzalém'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ašchabad'
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
                            'exemplarCity': 'Ammán'
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
                            'exemplarCity': 'Bejrút'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Biškek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunej'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Čojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kábul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamčatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karáčí'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kašghar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Káthmándú'
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
                            'exemplarCity': 'Nikósie'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuzněck'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'Samojský čas',
                            'standard': 'Samojský standardní čas',
                            'daylight': 'Samojský letní čas'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samarský čas',
                            'standard': 'Samarský standardní čas',
                            'daylight': 'Samarský letní čas'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalinský čas',
                            'standard': 'Sachalinský standardní čas',
                            'daylight': 'Sachalinský letní čas'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Čas Rotherovy stanice'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réunionský čas'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Kyzylordský čas',
                            'standard': 'Kyzylordský standardní čas',
                            'daylight': 'Kyzylordský letní čas'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapský čas'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Čas Pitcairnova ostrova'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Pierre-miquelonský čas',
                            'standard': 'Pierre-miquelonský standardní čas',
                            'daylight': 'Pierre-miquelonský letní čas'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Čas Fénixových ostrovů'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipínský čas',
                            'standard': 'Filipínský standardní čas',
                            'daylight': 'Filipínský letní čas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peruánský čas',
                            'standard': 'Peruánský standardní čas',
                            'daylight': 'Peruánský letní čas'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayský čas',
                            'standard': 'Paraguayský standardní čas',
                            'daylight': 'Paraguayský letní čas'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Čas Papuy-Nové Guiney'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palauský čas'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pákistánský čas',
                            'standard': 'Pákistánský standardní čas',
                            'daylight': 'Pákistánský letní čas'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omský čas',
                            'standard': 'Omský standardní čas',
                            'daylight': 'Omský letní čas'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirský čas',
                            'standard': 'Novosibirský standardní čas',
                            'daylight': 'Novosibirský letní čas'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Severomariánský čas'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Čas souostroví Fernando de Noronha',
                            'standard': 'Standardní čas souostroví Fernando de Noronha',
                            'daylight': 'Letní čas souostroví Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolský čas'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuejský čas'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandský čas',
                            'standard': 'Newfoundlandský standardní čas',
                            'daylight': 'Newfoundlandský letní čas'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Novozélandský čas',
                            'standard': 'Novozélandský standardní čas',
                            'daylight': 'Novozélandský letní čas'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Novokaledonský čas',
                            'standard': 'Novokaledonský standardní čas',
                            'daylight': 'Novokaledonský letní čas'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Severoamerický centrální čas',
                            'standard': 'Severoamerický centrální standardní čas',
                            'daylight': 'Severoamerický centrální letní čas'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Severoamerický východní čas',
                            'standard': 'Severoamerický východní standardní čas',
                            'daylight': 'Severoamerický východní letní čas'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Severoamerický horský čas',
                            'standard': 'Severoamerický horský standardní čas',
                            'daylight': 'Severoamerický horský letní čas'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Severoamerický pacifický čas',
                            'standard': 'Severoamerický pacifický standardní čas',
                            'daylight': 'Severoamerický pacifický letní čas'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrský čas',
                            'standard': 'Anadyrský standardní čas',
                            'daylight': 'Anadyrský letní čas'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aktauský čas',
                            'standard': 'Aktauský standardní čas',
                            'daylight': 'Aktauský letní čas'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aktobský čas',
                            'standard': 'Aktobský standardní čas',
                            'daylight': 'Aktobský letní čas'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdský čas',
                            'standard': 'Kapverdský standardní čas',
                            'daylight': 'Kapverdský letní čas'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Caseyský čas'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrský čas'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamský čas',
                            'standard': 'Chathamský standardní čas',
                            'daylight': 'Chathamský letní čas'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilský čas',
                            'standard': 'Chilský standardní čas',
                            'daylight': 'Chilský letní čas'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Čínský čas',
                            'standard': 'Čínský standardní čas',
                            'daylight': 'Čínský letní čas'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Čojbalsanský čas',
                            'standard': 'Čojbalsanský standardní čas',
                            'daylight': 'Čojbalsanský letní čas'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Čas Vánočního ostrova'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Čas Kokosových ostrovů'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbijský čas',
                            'standard': 'Kolumbijský standardní čas',
                            'daylight': 'Kolumbijský letní čas'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Čas Cookových ostrovů',
                            'standard': 'Standardní čas Cookových ostrovů',
                            'daylight': 'Letní čas Cookových ostrovů'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubánský čas',
                            'standard': 'Kubánský standardní čas',
                            'daylight': 'Kubánský letní čas'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Čas Davisovy stanice'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Čas stanice Dumonta d’Urvilla'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Východotimorský čas'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Čas Velikonočního ostrova',
                            'standard': 'Standardní čas Velikonočního ostrova',
                            'daylight': 'Letní čas Velikonočního ostrova'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekvádorský čas'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Středoevropský čas',
                            'standard': 'Středoevropský standardní čas',
                            'daylight': 'Středoevropský letní čas'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Východoevropský čas',
                            'standard': 'Východoevropský standardní čas',
                            'daylight': 'Východoevropský letní čas'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Západoevropský čas',
                            'standard': 'Západoevropský standardní čas',
                            'daylight': 'Západoevropský letní čas'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandský čas',
                            'standard': 'Falklandský standardní čas',
                            'daylight': 'Falklandský letní čas'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidžijský čas',
                            'standard': 'Fidžijský standardní čas',
                            'daylight': 'Fidžijský letní čas'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Francouzskoguyanský čas'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Čas Francouzských jižních a antarktických území'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapážský čas'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelauský čas'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonžský čas',
                            'standard': 'Tonžský standardní čas',
                            'daylight': 'Tonžský letní čas'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuukský čas'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenský čas',
                            'standard': 'Turkmenský standardní čas',
                            'daylight': 'Turkmenský letní čas'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalský čas'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayský čas',
                            'standard': 'Uruguayský standardní čas',
                            'daylight': 'Uruguayský letní čas'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbecký čas',
                            'standard': 'Uzbecký standardní čas',
                            'daylight': 'Uzbecký letní čas'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatský čas',
                            'standard': 'Vanuatský standardní čas',
                            'daylight': 'Vanuatský letní čas'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekatěrinburský čas',
                            'standard': 'Jekatěrinburský standardní čas',
                            'daylight': 'Jekatěrinburský letní čas'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutský čas',
                            'standard': 'Jakutský standardní čas',
                            'daylight': 'Jakutský letní čas'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Čas ostrovů Wallis a Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Čas ostrova Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Čas stanice Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogradský čas',
                            'standard': 'Volgogradský standardní čas',
                            'daylight': 'Volgogradský letní čas'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostocký čas',
                            'standard': 'Vladivostocký standardní čas',
                            'daylight': 'Vladivostocký letní čas'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelský čas'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tádžický čas'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tchajpejský čas',
                            'standard': 'Tchajpejský standardní čas',
                            'daylight': 'Tchajpejský letní čas'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitský čas'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Čas stanice Šówa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamský čas'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Jihogeorgijský čas'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Čas Šalamounových ostrovů'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapurský čas'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelský čas'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamský čas'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Západogrónský čas',
                            'standard': 'Západogrónský standardní čas',
                            'daylight': 'Západogrónský letní čas'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Východogrónský čas',
                            'standard': 'Východogrónský standardní čas',
                            'daylight': 'Východogrónský letní čas'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichský střední čas'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Čas Gilbertových ostrovů'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruzínský čas',
                            'standard': 'Gruzínský standardní čas',
                            'daylight': 'Gruzínský letní čas'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambierský čas'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonský čas',
                            'standard': 'Amazonský standardní čas',
                            'daylight': 'Amazonský letní čas'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acrejský čas',
                            'standard': 'Acrejský standardní čas',
                            'daylight': 'Acrejský letní čas'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afghánský čas'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Středoafrický čas'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Východoafrický čas'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Jihoafrický čas'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Západoafrický čas',
                            'standard': 'Západoafrický standardní čas',
                            'daylight': 'Západoafrický letní čas'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Aljašský čas',
                            'standard': 'Aljašský standardní čas',
                            'daylight': 'Aljašský letní čas'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatský čas',
                            'standard': 'Almatský standardní čas',
                            'daylight': 'Almatský letní čas'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabský čas',
                            'standard': 'Arabský standardní čas',
                            'daylight': 'Arabský letní čas'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentinský čas',
                            'standard': 'Argentinský standardní čas',
                            'daylight': 'Argentinský letní čas'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Západoargentinský čas',
                            'standard': 'Západoargentinský standardní čas',
                            'daylight': 'Západoargentinský letní čas'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Arménský čas',
                            'standard': 'Arménský standardní čas',
                            'daylight': 'Arménský letní čas'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantický čas',
                            'standard': 'Atlantický standardní čas',
                            'daylight': 'Atlantický letní čas'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Středoaustralský čas',
                            'standard': 'Středoaustralský standardní čas',
                            'daylight': 'Středoaustralský letní čas'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Středozápadní australský čas',
                            'standard': 'Středozápadní australský standardní čas',
                            'daylight': 'Středozápadní australský letní čas'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Východoaustralský čas',
                            'standard': 'Východoaustralský standardní čas',
                            'daylight': 'Východoaustralský letní čas'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Západoaustralský čas',
                            'standard': 'Západoaustralský standardní čas',
                            'daylight': 'Západoaustralský letní čas'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Ázerbájdžánský čas',
                            'standard': 'Ázerbájdžánský standardní čas',
                            'daylight': 'Ázerbájdžánský letní čas'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorský čas',
                            'standard': 'Azorský standardní čas',
                            'daylight': 'Azorský letní čas'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladéšský čas',
                            'standard': 'Bangladéšský standardní čas',
                            'daylight': 'Bangladéšský letní čas'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhútánský čas'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivijský čas'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilijský čas',
                            'standard': 'Brasilijský standardní čas',
                            'daylight': 'Brasilijský letní čas'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunejský čas'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Standardní čas Perského zálivu'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanský čas'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havajsko-aleutský čas',
                            'standard': 'Havajsko-aleutský standardní čas',
                            'daylight': 'Havajsko-aleutský letní čas'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongský čas',
                            'standard': 'Hongkongský standardní čas',
                            'daylight': 'Hongkongský letní čas'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdský čas',
                            'standard': 'Hovdský standardní čas',
                            'daylight': 'Hovdský letní čas'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indický čas'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indickooceánský čas'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indočínský čas'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Středoindonéský čas'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Východoindonéský čas'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Západoindonéský čas'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Íránský čas',
                            'standard': 'Íránský standardní čas',
                            'daylight': 'Íránský letní čas'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutský čas',
                            'standard': 'Irkutský standardní čas',
                            'daylight': 'Irkutský letní čas'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraelský čas',
                            'standard': 'Izraelský standardní čas',
                            'daylight': 'Izraelský letní čas'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonský čas',
                            'standard': 'Japonský standardní čas',
                            'daylight': 'Japonský letní čas'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsko-kamčatský čas',
                            'standard': 'Petropavlovsko-kamčatský standardní čas',
                            'daylight': 'Petropavlovsko-kamčatský letní čas'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Východokazachstánský čas'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Západokazachstánský čas'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korejský čas',
                            'standard': 'Korejský standardní čas',
                            'daylight': 'Korejský letní čas'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrajský čas'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarský čas',
                            'standard': 'Krasnojarský standardní čas',
                            'daylight': 'Krasnojarský letní čas'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kyrgyzský čas'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Srílanský čas'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Čas Rovníkových ostrovů'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Čas ostrova lorda Howa',
                            'standard': 'Standardní čas ostrova lorda Howa',
                            'daylight': 'Letní čas ostrova lorda Howa'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macajský čas',
                            'standard': 'Macajský standardní čas',
                            'daylight': 'Macajský letní čas'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Čas ostrova Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadanský čas',
                            'standard': 'Magadanský standardní čas',
                            'daylight': 'Magadanský letní čas'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malajský čas'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maledivský čas'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Markézský čas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Čas Marshallových ostrovů'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauricijský čas',
                            'standard': 'Mauricijský standardní čas',
                            'daylight': 'Mauricijský letní čas'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Čas Mawsonovy stanice'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulánbátarský čas',
                            'standard': 'Ulánbátarský standardní čas',
                            'daylight': 'Ulánbátarský letní čas'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskevský čas',
                            'standard': 'Moskevský standardní čas',
                            'daylight': 'Moskevský letní čas'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarský čas'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurský čas'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepálský čas'
                        }
                    }
                },
                'hourFormat': '+H:mm;-H:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Časové pásmo {0}',
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
                                '7': 'čvc',
                                '6': 'čvn',
                                '5': 'kvě',
                                '12': 'pro',
                                '11': 'lis',
                                '10': 'říj',
                                '9': 'zář',
                                '1': 'led',
                                '2': 'úno',
                                '3': 'bře',
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
                                '7': 'července',
                                '6': 'června',
                                '5': 'května',
                                '12': 'prosince',
                                '11': 'listopadu',
                                '10': 'října',
                                '9': 'září',
                                '1': 'ledna',
                                '2': 'února',
                                '3': 'března',
                                '4': 'dubna'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'srp',
                                '7': 'čvc',
                                '6': 'čvn',
                                '5': 'kvě',
                                '12': 'pro',
                                '11': 'lis',
                                '10': 'říj',
                                '9': 'zář',
                                '1': 'led',
                                '2': 'úno',
                                '3': 'bře',
                                '4': 'dub'
                            },
                            'narrow': {
                                '8': 's',
                                '7': 'č',
                                '6': 'č',
                                '5': 'k',
                                '12': 'p',
                                '11': 'l',
                                '10': 'ř',
                                '9': 'z',
                                '1': 'l',
                                '2': 'ú',
                                '3': 'b',
                                '4': 'd'
                            },
                            'wide': {
                                '8': 'srpen',
                                '7': 'červenec',
                                '6': 'červen',
                                '5': 'květen',
                                '12': 'prosinec',
                                '11': 'listopad',
                                '10': 'říjen',
                                '9': 'září',
                                '1': 'leden',
                                '2': 'únor',
                                '3': 'březen',
                                '4': 'duben'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'út',
                                'wed': 'st',
                                'thu': 'čt',
                                'fri': 'pá',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'Ú',
                                'wed': 'S',
                                'thu': 'Č',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'út',
                                'wed': 'st',
                                'thu': 'čt',
                                'fri': 'pá',
                                'sat': 'so'
                            },
                            'wide': {
                                'sun': 'neděle',
                                'mon': 'pondělí',
                                'tue': 'úterý',
                                'wed': 'středa',
                                'thu': 'čtvrtek',
                                'fri': 'pátek',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'út',
                                'wed': 'st',
                                'thu': 'čt',
                                'fri': 'pá',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'Ú',
                                'wed': 'S',
                                'thu': 'Č',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'út',
                                'wed': 'st',
                                'thu': 'čt',
                                'fri': 'pá',
                                'sat': 'so'
                            },
                            'wide': {
                                'sun': 'neděle',
                                'mon': 'pondělí',
                                'tue': 'úterý',
                                'wed': 'středa',
                                'thu': 'čtvrtek',
                                'fri': 'pátek',
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
                                '1': '1. čtvrtletí',
                                '2': '2. čtvrtletí',
                                '3': '3. čtvrtletí',
                                '4': '4. čtvrtletí'
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
                                '1': '1. čtvrtletí',
                                '2': '2. čtvrtletí',
                                '3': '3. čtvrtletí',
                                '4': '4. čtvrtletí'
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
                            '0': 'př. n. l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n. l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'př. n. l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n. l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'př.n.l.',
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
                                'd': 'E d. M. – E d. M.',
                                'M': 'E d. M. – E d. M.'
                            },
                            'MMMd': {
                                'd': 'd.–d. M.',
                                'M': 'd. M. – d. M.'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E d. M. – E d. M.',
                                'M': 'E d. M. – E d. M.'
                            },
                            'Md': {
                                'd': 'd. M. – d. M.',
                                'M': 'd. M. – d. M.'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'M/y – M/y',
                                'y': 'M/y – M/y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y – dd.MM.y',
                                'M': 'dd.MM.y – dd.MM.y',
                                'y': 'dd.MM.y – dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E dd.MM.y – E dd.MM.y',
                                'M': 'E dd.MM.y – E dd.MM.y',
                                'y': 'E dd.MM.y – E dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. M. y',
                                'M': 'd. M. – d. M. y',
                                'y': 'd. M. y – d. M. y'
                            },
                            'yMMMEd': {
                                'd': 'E d. M. – E d. M. y',
                                'M': 'E d. M. – E d. M. y',
                                'y': 'E d. M. y – E d. M. y'
                            },
                            'yMMMM': {
                                'M': 'LLLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            },
                            'Hmv': {
                                'H': 'H:mm–H:mm v',
                                'm': 'H:mm–H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm–h:mm a',
                                'm': 'h:mm–h:mm a'
                            },
                            'H': {
                                'H': 'H–H'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'd': {
                                'd': 'd.–d.'
                            },
                            'intervalFormatFallback': '{0} – {1}'
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
