/* AstroDate
 * Language: fi
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
        AstroDate.lang('fi', {
            'codePatterns': {
                'language': 'kieli: {0}',
                'script': 'kirjoitusjärjestelmä: {0}',
                'territory': 'alue: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Lajittele kana-merkit erikseen',
                    'yes': 'Lajittele kana-merkit erikseen'
                },
                'colCaseLevel': {
                    'no': 'Lajittele ilman isojen ja pienten kirjainten erottelua',
                    'yes': 'Lajittele isojen ja pienten kirjainten mukaan'
                },
                'colCaseFirst': {
                    'lower': 'Lajittele pienet kirjaimet ensin',
                    'no': 'Lajittele isot ja pienet kirjaimet normaalisti',
                    'upper': 'Lajittele isot kirjaimet ensin'
                },
                'colStrength': {
                    'identical': 'Lajittele kaikki',
                    'primary': 'Lajittele vain peruskirjaimet',
                    'quaternary': 'Lajittele painomerkit/koko/leveys/kana-merkit',
                    'secondary': 'Lajittele painomerkit',
                    'tertiary': 'Lajittele painomerkit/koko/leveys'
                },
                'colNumeric': {
                    'no': 'Lajittele numerot erikseen',
                    'yes': 'Lajittele numerot numeerisesti'
                },
                'colNormalization': {
                    'no': 'Lajittele ilman normalisointia',
                    'yes': 'Lajittele Unicode normalisoituna'
                },
                'calendar': {
                    'japanese': 'japanilainen kalenteri',
                    'iso8601': 'iso8601',
                    'coptic': 'koptilainen kalenteri',
                    'dangi': 'dangilainen kalenteri',
                    'ethiopic': 'etiopialainen kalenteri',
                    'ethiopic-amete-alem': 'etiopialainen amete alem -kalenteri',
                    'gregorian': 'gregoriaaninen kalenteri',
                    'hebrew': 'juutalainen kalenteri',
                    'persian': 'persialainen kalenteri',
                    'roc': 'Kiinan tasavallan kalenteri',
                    'chinese': 'kiinalainen kalenteri',
                    'buddhist': 'buddhalainen kalenteri',
                    'indian': 'intialainen kalenteri',
                    'islamic': 'islamilainen kalenteri',
                    'islamic-civil': 'islamilainen siviilikalenteri',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'puhelinluettelojärjestys',
                    'gb2312han': 'yksinkertaistettu kiinalainen järjestys GB2312',
                    'eor': 'yleiseurooppalainen lajittelujärjestys',
                    'ducet': 'Unicoden oletusjärjestys',
                    'dictionary': 'sanakirjajärjestys',
                    'big5han': 'perinteinen kiinalainen järjestys Big5',
                    'traditional': 'perinteinen järjestys',
                    'standard': 'normaalijärjestys',
                    'zhuyin': 'zhuyin-järjestys',
                    'unihan': 'radikaali- ja piirtojärjestys',
                    'stroke': 'piirtojärjestys',
                    'searchjl': 'haku hangul-alkukonsonantin mukaan',
                    'search': 'yleishakujärjestys',
                    'reformed': 'uudistettu järjestys',
                    'pinyin': 'pinyin-järjestys',
                    'phonetic': 'äänteellinen järjestys'
                },
                'numbers': {
                    'knda': 'kannadalaiset numerot',
                    'khmr': 'khmeriläiset numerot',
                    'kali': 'kayah li -numerot',
                    'jpanfin': 'japanilaiset talousnumerot',
                    'jpan': 'japanilaiset numerot',
                    'java': 'jaavalaiset numerot',
                    'hebr': 'heprealaiset numerot',
                    'hantfin': 'perinteiset kiinalaiset talousnumerot',
                    'hant': 'perinteiset kiinalaiset numerot',
                    'hansfin': 'yksinkertaistetut kiinalaiset talousnumerot',
                    'hans': 'yksinkertaistetut kiinalaiset numerot',
                    'hanidec': 'kiinalaiset desimaalinumerot',
                    'guru': 'gurmukhilaiset numerot',
                    'gujr': 'gudžaratilaiset numerot',
                    'greklow': 'kreikkalaiset piennumerot',
                    'grek': 'kreikkalaiset numerot',
                    'bali': 'balilaiset numerot',
                    'armnlow': 'armenialaiset piennumerot',
                    'armn': 'armenialaiset numerot',
                    'arabext': 'laajennetut arabialaiset numerot',
                    'arab': 'arabialaiset numerot',
                    'finance': 'talousnumerot',
                    'traditional': 'perinteiset numerot',
                    'native': 'Kielen omat numerot',
                    'beng': 'bengalilaiset numerot',
                    'brah': 'brahmilaiset numerot',
                    'cakm': 'chakmalaiset numerot',
                    'cham': 'cham-numerot',
                    'deva': 'devanagarinumerot',
                    'orya': 'orijalaiset numerot',
                    'osma': 'osma',
                    'roman': 'roomalaiset numerot',
                    'romanlow': 'roomalaiset piennumerot',
                    'saur': 'saurashtra-numerot',
                    'shrd': 'shrd',
                    'sora': 'sora sompeng -numerot',
                    'sund': 'sundalaiset numerot',
                    'vaii': 'vai-numerot',
                    'tibt': 'tiibetiläiset numerot',
                    'thai': 'thainumerot',
                    'telu': 'telugulaiset numerot',
                    'tamldec': 'tamilinumerot',
                    'taml': 'perinteiset tamilinumerot',
                    'talu': 'uudet tai lue -numerot',
                    'takr': 'takr',
                    'olck': 'ol chiki -numerot',
                    'nkoo': 'n\'ko-numerot',
                    'mymrshan': 'myanmarin shan-numerot',
                    'mymr': 'burmalaiset numerot',
                    'mtei': 'meetei mayek -numerot',
                    'mong': 'mongolialaiset numerot',
                    'mlym': 'malajalamilaiset numerot',
                    'limb': 'limbunumerot',
                    'lepc': 'lepchanumerot',
                    'latn': 'länsimaiset numerot',
                    'laoo': 'laolaiset numerot',
                    'lanatham': 'taithamin tham-numerot',
                    'lana': 'taithamin hora-numerot',
                    'geor': 'georgialaiset numerot',
                    'fullwide': 'ideografin levyiset numerot',
                    'ethi': 'etiopialaiset numerot'
                },
                'colAlternate': {
                    'non-ignorable': 'Lajittele symbolit',
                    'shifted': 'Lajittele symbolit ohittaen'
                },
                'colBackwards': {
                    'no': 'Lajittele painomerkit normaalisti',
                    'yes': 'Lajittele painomerkit käänteisesti'
                }
            },
            'keys': {
                'colNormalization': 'Normalisoitu lajittelu',
                'collation': 'lajittelujärjestys',
                'colHiraganaQuaternary': 'Kana-lajittelu',
                'colCaseLevel': 'Isot ja pienet kirjaimet erotteleva lajittelu',
                'colCaseFirst': 'Järjestys isojen/pienten kirjainten mukaan',
                'colBackwards': 'Käänteinen painomerkki -lajittelu',
                'colAlternate': 'Ohita symbolit -lajittelu',
                'calendar': 'kalenteri',
                'x': 'yksityiskäyttö',
                'variableTop': 'lajittele symboleina',
                'va': 'maavalinnan muunnelma',
                'timezone': 'aikavyöhyke',
                'numbers': 'numerot',
                'currency': 'valuutta',
                'colStrength': 'Lajittelun vahvuus',
                'colNumeric': 'Numeerinen lajittelu'
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
                            'exemplarCity': 'Gambiersaaret'
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
                            'exemplarCity': 'Chathamsaaret'
                        },
                        'Easter': {
                            'exemplarCity': 'Pääsiäissaari'
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
                            'exemplarCity': 'Marquesassaaret'
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
                            'exemplarCity': 'Malediivit'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelensaaret'
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
                            'exemplarCity': 'Joulusaari'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kookossaaret'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komorit'
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
                            'exemplarCity': 'tuntematon'
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
                            'exemplarCity': 'Etelänapa'
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
                            'exemplarCity': 'Macquariensaari'
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
                            'exemplarCity': 'Thule',
                            'exemplarCity-alt-secondary': 'Qaanaaq'
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
                            'exemplarCity': 'Bahía de Banderas'
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
                            'exemplarCity': 'Nuuk',
                            'exemplarCity-alt-secondary': 'Godthåb'
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
                            'exemplarCity': 'Ciudad de México'
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
                                'exemplarCity': 'Beulah, Pohjois-Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Pohjois-Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Pohjois-Dakota'
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
                            'exemplarCity': 'Santarém'
                        },
                        'Santiago': {
                            'exemplarCity': 'Santiago de Chile'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'São Paulo'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Ittoqqortoormiit',
                            'exemplarCity-alt-secondary': 'Scoresbysund'
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
                            'exemplarCity': 'Etelä-Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavík'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Saint Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorit'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanariansaaret'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Färsaaret'
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
                            'exemplarCity': 'Moskova'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monaco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Maarianhamina',
                            'exemplarCity-alt-secondary': 'Mariehamn'
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
                                'daylight': 'Britannian kesäaika'
                            },
                            'exemplarCity': 'Lontoo'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lissabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiova'
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
                            'exemplarCity': 'Mansaari'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bryssel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berliini'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Ateena'
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
                            'exemplarCity': 'Tukholma'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinna'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Užgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporižžja'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsova'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilna'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wien'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikaani'
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
                            'exemplarCity': 'Rooma'
                        },
                        'Riga': {
                            'exemplarCity': 'Riika'
                        },
                        'Prague': {
                            'exemplarCity': 'Praha'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Pariisi'
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
                                'daylight': 'Irlannin kesäaika'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kööpenhamina'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chişinău'
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
                            'exemplarCity': 'El Aaiún'
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
                            'exemplarCity': 'Soul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Hồ Chí Minhin kaupunki'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qızılorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
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
                            'exemplarCity': 'Damaskos'
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
                            'exemplarCity': 'Dušanbe'
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
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Ürümqi'
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
                            'exemplarCity': 'Taškent'
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
                            'exemplarCity': 'Ašgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqtöbe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqtaw'
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
                            'exemplarCity': 'Biškek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Tšoibalsa'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamtšatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kašgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Kathmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handyga'
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
                            'generic': 'Samoan aika',
                            'standard': 'Samoan normaaliaika',
                            'daylight': 'Samoan kesäaika'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samaran aika',
                            'standard': 'Samaran normaaliaika',
                            'daylight': 'Samaran kesäaika'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sahalinin aika',
                            'standard': 'Sahalinin normaaliaika',
                            'daylight': 'Sahalinin kesäaika'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotheran aika'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réunionin aika'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qızılordan aika',
                            'standard': 'Qızılordan normaaliaika',
                            'daylight': 'Qızılordan kesäaika'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Pohnpein aika'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairnin aika'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint-Pierren ja Miquelonin aika',
                            'standard': 'Saint-Pierren ja Miquelonin normaaliaika',
                            'daylight': 'Saint-Pierren ja Miquelonin kesäaika'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenixsaarten aika'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filippiinien aika',
                            'standard': 'Filippiinien normaaliaika',
                            'daylight': 'Filippiinien kesäaika'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Perun aika',
                            'standard': 'Perun normaaliaika',
                            'daylight': 'Perun kesäaika'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayn aika',
                            'standard': 'Paraguayn normaaliaika',
                            'daylight': 'Paraguayn kesäaika'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua-Uuden-Guinean aika'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palaun aika'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistanin aika',
                            'standard': 'Pakistanin normaaliaika',
                            'daylight': 'Pakistanin kesäaika'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omskin aika',
                            'standard': 'Omskin normaaliaika',
                            'daylight': 'Omskin kesäaika'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirskin aika',
                            'standard': 'Novosibirskin normaaliaika',
                            'daylight': 'Novosibirskin kesäaika'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Pohjois-Mariaanien aika'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronhan aika',
                            'standard': 'Fernando de Noronhan normaaliaika',
                            'daylight': 'Fernando de Noronhan kesäaika'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolkinsaarten aika'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuen aika'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandin aika',
                            'standard': 'Newfoundlandin normaaliaika',
                            'daylight': 'Newfoundlandin kesäaika'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Uuden-Seelannin aika',
                            'standard': 'Uuden-Seelannin normaaliaika',
                            'daylight': 'Uuden-Seelannin kesäaika'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Uuden-Kaledonian aika',
                            'standard': 'Uuden-Kaledonian normaaliaika',
                            'daylight': 'Uuden-Kaledonian kesäaika'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Yhdysvaltain keskinen aika',
                            'standard': 'Yhdysvaltain keskinen normaaliaika',
                            'daylight': 'Yhdysvaltain keskinen kesäaika'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Yhdysvaltain itäinen aika',
                            'standard': 'Yhdysvaltain itäinen normaaliaika',
                            'daylight': 'Yhdysvaltain itäinen kesäaika'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Kalliovuorten aika',
                            'standard': 'Kalliovuorten normaaliaika',
                            'daylight': 'Kalliovuorten kesäaika'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Yhdysvaltain Tyynenmeren aika',
                            'standard': 'Yhdysvaltain Tyynenmeren normaaliaika',
                            'daylight': 'Yhdysvaltain Tyynenmeren kesäaika'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrin aika',
                            'standard': 'Anadyrin normaaliaika',
                            'daylight': 'Anadyrin kesäaika'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtaw\'n aika',
                            'standard': 'Aqtaw\'n normaaliaika',
                            'daylight': 'Aqtaw\'n kesäaika'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtöben aika',
                            'standard': 'Aqtöben normaaliaika',
                            'daylight': 'Aqtöben kesäaika'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kap Verden aika',
                            'standard': 'Kap Verden normaaliaika',
                            'daylight': 'Kap Verden kesäaika'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Caseyn aika'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Tšamorron aika'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamin aika',
                            'standard': 'Chathamin normaaliaika',
                            'daylight': 'Chathamin kesäaika'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilen aika',
                            'standard': 'Chilen normaaliaika',
                            'daylight': 'Chilen kesäaika'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kiinan aika',
                            'standard': 'Kiinan normaaliaika',
                            'daylight': 'Kiinan kesäaika'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Tšoibalsan aika',
                            'standard': 'Tšoibalsan normaaliaika',
                            'daylight': 'Tšoibalsan kesäaika'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Joulusaaren aika'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Kookossaarten aika'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbian aika',
                            'standard': 'Kolumbian normaaliaika',
                            'daylight': 'Kolumbian kesäaika'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookinsaarten aika',
                            'standard': 'Cookinsaarten normaaliaika',
                            'daylight': 'Cookinsaarten kesäaika'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kuuban aika',
                            'standard': 'Kuuban normaaliaika',
                            'daylight': 'Kuuban kesäaika'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davisin aika'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urvillen aika'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Itä-Timorin aika'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Pääsiäissaaren aika',
                            'standard': 'Pääsiäissaaren normaaliaika',
                            'daylight': 'Pääsiäissaaren kesäaika'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadorin aika'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Keski-Euroopan aika',
                            'standard': 'Keski-Euroopan normaaliaika',
                            'daylight': 'Keski-Euroopan kesäaika'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Itä-Euroopan aika',
                            'standard': 'Itä-Euroopan normaaliaika',
                            'daylight': 'Itä-Euroopan kesäaika'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Länsi-Euroopan aika',
                            'standard': 'Länsi-Euroopan normaaliaika',
                            'daylight': 'Länsi-Euroopan kesäaika'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandinsaarten aika',
                            'standard': 'Falklandinsaarten normaaliaika',
                            'daylight': 'Falklandinsaarten kesäaika'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidžin aika',
                            'standard': 'Fidžin normaaliaika',
                            'daylight': 'Fidžin kesäaika'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Ranskan Guayanan aika'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Ranskan eteläisten ja antarktisten alueiden aika'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galápagossaarten aika'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelaun aika'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongan aika',
                            'standard': 'Tongan normaaliaika',
                            'daylight': 'Tongan kesäaika'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuukin aika'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistanin aika',
                            'standard': 'Turkmenistanin normaaliaika',
                            'daylight': 'Turkmenistanin kesäaika'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalun aika'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayn aika',
                            'standard': 'Uruguayn normaaliaika',
                            'daylight': 'Uruguayn kesäaika'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistanin aika',
                            'standard': 'Uzbekistanin normaaliaika',
                            'daylight': 'Uzbekistanin kesäaika'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatun aika',
                            'standard': 'Vanuatun normaaliaika',
                            'daylight': 'Vanuatun kesäaika'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburgin aika',
                            'standard': 'Jekaterinburgin normaaliaika',
                            'daylight': 'Jekaterinburgin kesäaika'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutskin aika',
                            'standard': 'Jakutskin normaaliaika',
                            'daylight': 'Jakutskin kesäaika'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallisin ja Futunan aika'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Waken aika'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostokin aika'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogradin aika',
                            'standard': 'Volgogradin normaaliaika',
                            'daylight': 'Volgogradin kesäaika'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostokin aika',
                            'standard': 'Vladivostokin normaaliaika',
                            'daylight': 'Vladivostokin kesäaika'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelan aika'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadžikistanin aika'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipein aika',
                            'standard': 'Taipein normaaliaika',
                            'daylight': 'Taipein kesäaika'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitin aika'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowan aika'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamin aika'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Etelä-Georgian aika'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonsaarten aika'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporen aika'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellien aika'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamin aika'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Länsi-Grönlannin aika',
                            'standard': 'Länsi-Grönlannin normaaliaika',
                            'daylight': 'Länsi-Grönlannin kesäaika'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Itä-Grönlannin aika',
                            'standard': 'Itä-Grönlannin normaaliaika',
                            'daylight': 'Itä-Grönlannin kesäaika'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichin normaaliaika'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbertsaarten aika'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgian aika',
                            'standard': 'Georgian normaaliaika',
                            'daylight': 'Georgian kesäaika'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambierin aika'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonin aika',
                            'standard': 'Amazonin normaaliaika',
                            'daylight': 'Amazonin kesäaika'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acren aika',
                            'standard': 'Acren normaaliaika',
                            'daylight': 'Acren kesäaika'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistanin aika'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Keski-Afrikan aika'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Itä-Afrikan aika'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Etelä-Afrikan aika'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Länsi-Afrikan aika',
                            'standard': 'Länsi-Afrikan normaaliaika',
                            'daylight': 'Länsi-Afrikan kesäaika'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaskan aika',
                            'standard': 'Alaskan normaaliaika',
                            'daylight': 'Alaskan kesäaika'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatyn aika',
                            'standard': 'Almatyn normaaliaika',
                            'daylight': 'Almatyn kesäaika'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Saudi-Arabian aika',
                            'standard': 'Saudi-Arabian normaaliaika',
                            'daylight': 'Saudi-Arabian kesäaika'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentiinan aika',
                            'standard': 'Argentiinan normaaliaika',
                            'daylight': 'Argentiinan kesäaika'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Länsi-Argentiinan aika',
                            'standard': 'Länsi-Argentiinan normaaliaika',
                            'daylight': 'Länsi-Argentiinan kesäaika'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenian aika',
                            'standard': 'Armenian normaaliaika',
                            'daylight': 'Armenian kesäaika'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Kanadan Atlantin aika',
                            'standard': 'Kanadan Atlantin normaaliaika',
                            'daylight': 'Kanadan Atlantin kesäaika'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Keski-Australian aika',
                            'standard': 'Keski-Australian normaaliaika',
                            'daylight': 'Keski-Australian kesäaika'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Läntisen Keski-Australian aika',
                            'standard': 'Läntisen Keski-Australian normaaliaika',
                            'daylight': 'Läntisen Keski-Australian kesäaika'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Itä-Australian aika',
                            'standard': 'Itä-Australian normaaliaika',
                            'daylight': 'Itä-Australian kesäaika'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Länsi-Australian aika',
                            'standard': 'Länsi-Australian normaaliaika',
                            'daylight': 'Länsi-Australian kesäaika'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbaidžanin aika',
                            'standard': 'Azerbaidžanin normaaliaika',
                            'daylight': 'Azerbaidžanin kesäaika'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorien aika',
                            'standard': 'Azorien normaaliaika',
                            'daylight': 'Azorien kesäaika'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladeshin aika',
                            'standard': 'Bangladeshin normaaliaika',
                            'daylight': 'Bangladeshin kesäaika'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutanin aika'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivian aika'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilian aika',
                            'standard': 'Brasilian normaaliaika',
                            'daylight': 'Brasilian kesäaika'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunein aika'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Arabiemiirikuntien normaaliaika'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanan aika'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havaijin-Aleuttien aika',
                            'standard': 'Havaijin-Aleuttien normaaliaika',
                            'daylight': 'Havaijin-Aleuttien kesäaika'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongin aika',
                            'standard': 'Hongkongin normaaliaika',
                            'daylight': 'Hongkongin kesäaika'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdin aika',
                            'standard': 'Hovdin normaaliaika',
                            'daylight': 'Hovdin kesäaika'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Intian aika'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Intian valtameren aika'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokiinan aika'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Keski-Indonesian aika'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Itä-Indonesian aika'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Länsi-Indonesian aika'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iranin aika',
                            'standard': 'Iranin normaaliaika',
                            'daylight': 'Iranin kesäaika'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutskin aika',
                            'standard': 'Irkutskin normaaliaika',
                            'daylight': 'Irkutskin kesäaika'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israelin aika',
                            'standard': 'Israelin normaaliaika',
                            'daylight': 'Israelin kesäaika'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japanin aika',
                            'standard': 'Japanin normaaliaika',
                            'daylight': 'Japanin kesäaika'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Kamtšatkan aika',
                            'standard': 'Kamtšatkan normaaliaika',
                            'daylight': 'Kamtšatkan kesäaika'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Itä-Kazakstanin aika'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Länsi-Kazakstanin aika'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korean aika',
                            'standard': 'Korean normaaliaika',
                            'daylight': 'Korean kesäaika'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraen aika'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarskin aika',
                            'standard': 'Krasnojarskin normaaliaika',
                            'daylight': 'Krasnojarskin kesäaika'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgisian aika'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Sri Lankan aika'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Linesaarten aika'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howen aika',
                            'standard': 'Lord Howen normaaliaika',
                            'daylight': 'Lord Howen kesäaika'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macaon aika',
                            'standard': 'Macaon normaaliaika',
                            'daylight': 'Macaon kesäaika'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquariensaaren aika'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadanin aika',
                            'standard': 'Magadanin normaaliaika',
                            'daylight': 'Magadanin kesäaika'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malesian aika'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Malediivien aika'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesasin aika'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshallinsaarten aika'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiuksen aika',
                            'standard': 'Mauritiuksen normaaliaika',
                            'daylight': 'Mauritiuksen kesäaika'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsonin aika'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulan Batorin aika',
                            'standard': 'Ulan Batorin normaaliaika',
                            'daylight': 'Ulan Batorin kesäaika'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovan aika',
                            'standard': 'Moskovan normaaliaika',
                            'daylight': 'Moskovan kesäaika'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarin aika'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurun aika'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalin aika'
                        }
                    }
                },
                'hourFormat': '+H.mm;-H.mm',
                'gmtFormat': 'UTC{0}',
                'gmtZeroFormat': 'UTC',
                'regionFormat': 'aikavyöhyke: {0}',
                'regionFormat-type-daylight': '{0} (kesäaika)',
                'regionFormat-type-standard': '{0} (normaaliaika)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'elokuuta',
                                '7': 'heinäkuuta',
                                '6': 'kesäkuuta',
                                '5': 'toukokuuta',
                                '12': 'joulukuuta',
                                '11': 'marraskuuta',
                                '10': 'lokakuuta',
                                '9': 'syyskuuta',
                                '1': 'tammikuuta',
                                '2': 'helmikuuta',
                                '3': 'maaliskuuta',
                                '4': 'huhtikuuta'
                            },
                            'narrow': {
                                '8': 'E',
                                '7': 'H',
                                '6': 'K',
                                '5': 'T',
                                '12': 'J',
                                '11': 'M',
                                '10': 'L',
                                '9': 'S',
                                '1': 'T',
                                '2': 'H',
                                '3': 'M',
                                '4': 'H'
                            },
                            'wide': {
                                '8': 'elokuuta',
                                '7': 'heinäkuuta',
                                '6': 'kesäkuuta',
                                '5': 'toukokuuta',
                                '12': 'joulukuuta',
                                '11': 'marraskuuta',
                                '10': 'lokakuuta',
                                '9': 'syyskuuta',
                                '1': 'tammikuuta',
                                '2': 'helmikuuta',
                                '3': 'maaliskuuta',
                                '4': 'huhtikuuta'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'elo',
                                '7': 'heinä',
                                '6': 'kesä',
                                '5': 'touko',
                                '12': 'joulu',
                                '11': 'marras',
                                '10': 'loka',
                                '9': 'syys',
                                '1': 'tammi',
                                '2': 'helmi',
                                '3': 'maalis',
                                '4': 'huhti'
                            },
                            'narrow': {
                                '8': 'E',
                                '7': 'H',
                                '6': 'K',
                                '5': 'T',
                                '12': 'J',
                                '11': 'M',
                                '10': 'L',
                                '9': 'S',
                                '1': 'T',
                                '2': 'H',
                                '3': 'M',
                                '4': 'H'
                            },
                            'wide': {
                                '8': 'elokuu',
                                '7': 'heinäkuu',
                                '6': 'kesäkuu',
                                '5': 'toukokuu',
                                '12': 'joulukuu',
                                '11': 'marraskuu',
                                '10': 'lokakuu',
                                '9': 'syyskuu',
                                '1': 'tammikuu',
                                '2': 'helmikuu',
                                '3': 'maaliskuu',
                                '4': 'huhtikuu'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'K',
                                'thu': 'T',
                                'fri': 'P',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'wide': {
                                'sun': 'sunnuntaina',
                                'mon': 'maanantaina',
                                'tue': 'tiistaina',
                                'wed': 'keskiviikkona',
                                'thu': 'torstaina',
                                'fri': 'perjantaina',
                                'sat': 'lauantaina'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'K',
                                'thu': 'T',
                                'fri': 'P',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'wide': {
                                'sun': 'sunnuntai',
                                'mon': 'maanantai',
                                'tue': 'tiistai',
                                'wed': 'keskiviikko',
                                'thu': 'torstai',
                                'fri': 'perjantai',
                                'sat': 'lauantai'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1. nelj.',
                                '2': '2. nelj.',
                                '3': '3. nelj.',
                                '4': '4. nelj.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. neljännes',
                                '2': '2. neljännes',
                                '3': '3. neljännes',
                                '4': '4. neljännes'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1. nelj.',
                                '2': '2. nelj.',
                                '3': '3. nelj.',
                                '4': '4. nelj.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. neljännes',
                                '2': '2. neljännes',
                                '3': '3. neljännes',
                                '4': '4. neljännes'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'narrow': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'wide': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'narrow': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'wide': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'ennen Kristuksen syntymää',
                            '0-alt-variant': 'ennen ajanlaskun alkua',
                            '1': 'jälkeen Kristuksen syntymän',
                            '1-alt-variant': 'jälkeen ajanlaskun alun'
                        },
                        'eraAbbr': {
                            '0': 'eKr.',
                            '0-alt-variant': 'eaa.',
                            '1': 'jKr.',
                            '1-alt-variant': 'jaa.'
                        },
                        'eraNarrow': {
                            '0': 'eK',
                            '0-alt-variant': 'eaa',
                            '1': 'jK',
                            '1-alt-variant': 'jaa'
                        }
                    },
                    'dateFormats': {
                        'full': 'cccc d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd.M.y',
                        'short': 'd.M.y'
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
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E d. MMM y',
                            'yMMMd': 'd. MMM y',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E H.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E d.',
                            'd': 'd',
                            'GyMMMd': 'd. MMM y G',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMMccccd': 'cccc d. MMMM y',
                            'Hms': 'H.mm.ss',
                            'hms': 'h.mm.ss a',
                            'Hm': 'H.mm',
                            'hm': 'h.mm a',
                            'H': 'H',
                            'EHms': 'E H.mm.ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
                            'M': 'L',
                            'Md': 'd.M.',
                            'MEd': 'E d.M.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'ccc d. MMM',
                            'ms': 'm.ss',
                            'y': 'y',
                            'yM': 'L.y',
                            'yMd': 'd.M.y',
                            'yMEd': 'E d.M.y',
                            'yMM': 'M.y',
                            'yMMM': 'LLL y'
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
                                'd': 'E d. – E d. MMMM',
                                'M': 'E d. MMMM – E d. MMMM'
                            },
                            'MMMd': {
                                'd': 'd.–d. MMMM',
                                'M': 'd. MMMM – d. MMMM'
                            },
                            'MMM': {
                                'M': 'LLL–LLLL'
                            },
                            'MEd': {
                                'd': 'E d. – E d.M.',
                                'M': 'E d.M. – E d.M.'
                            },
                            'Md': {
                                'd': 'd.–d.M.',
                                'M': 'd.M.–d.M.'
                            },
                            'M': {
                                'M': 'L.–L.'
                            },
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'intervalFormatFallback': '{0}–{1}',
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'LLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            },
                            'yMd': {
                                'd': 'd.–d.M.y',
                                'M': 'd.M.–d.M.y',
                                'y': 'd.M.y–d.M.y'
                            },
                            'yMEd': {
                                'd': 'E d.M.y – E d.M.y',
                                'M': 'E d.M.y – E d.M.y',
                                'y': 'E d.M.y – E d.M.y'
                            },
                            'yMMM': {
                                'M': 'LLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. MMMM y',
                                'M': 'd. MMMM – d. MMMM y',
                                'y': 'd. MMMM y – d. MMMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d. – E d. MMMM y',
                                'M': 'E d. MMMM – E d. MMMM y',
                                'y': 'E d. MMMM y – E d. MMMM y'
                            },
                            'yMMMM': {
                                'M': 'LLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            },
                            'MMMM': {
                                'M': 'LLL–LLLL'
                            },
                            'Hmv': {
                                'H': 'H.mm–H.mm v',
                                'm': 'H.mm–H.mm v'
                            },
                            'hmv': {
                                'a': 'h.mm a – h.mm a v',
                                'h': 'h.mm–h.mm a v',
                                'm': 'h.mm–h.mm a v'
                            },
                            'Hm': {
                                'H': 'H.mm–H.mm',
                                'm': 'H.mm–H.mm'
                            },
                            'hm': {
                                'a': 'h.mm a – h.mm a',
                                'h': 'h.mm–h.mm a',
                                'm': 'h.mm–h.mm a'
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
