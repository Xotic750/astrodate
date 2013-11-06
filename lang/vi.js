/* AstroDate Language: vi
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
        AstroDate.lang('vi', {
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
                            'exemplarCity': 'Reunion'
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
                            'exemplarCity': 'Thành phố Không xác định'
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
                            'exemplarCity': 'Asuncion'
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
                                'exemplarCity': 'Beulah, Bắc Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Bắc Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Bắc Dakota'
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
                            'exemplarCity': 'Nam Georgia'
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
                            'exemplarCity': 'Mát-xcơ-va'
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
                                'daylight': 'Giờ Mùa Hè Anh'
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
                            'exemplarCity': 'Đảo Man'
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
                            'exemplarCity': 'Praha'
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
                                'daylight': 'Giờ Mùa Hè Ai-len'
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
                            'exemplarCity': 'Thượng Hải'
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
                            'exemplarCity': 'TP Hồ Chí Minh'
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
                            'exemplarCity': 'Bình Nhưỡng'
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
                            'exemplarCity': 'Trùng Khánh'
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
                            'exemplarCity': 'Cáp Nhĩ Tân'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebron'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hồng Kông'
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
                            'exemplarCity': 'Ô Lỗ Mộc Tề'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Viêng Chăn'
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
                            'exemplarCity': 'Đài Bắc'
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
                            'exemplarCity': 'Khách Thập'
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
                            'exemplarCity': 'Ma Cao'
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
                    'Seychelles': {
                        'long': {
                            'standard': 'Giờ Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Giờ Samoa',
                            'standard': 'Giờ Chuẩn Samoa',
                            'daylight': 'Giờ ban ngày Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Giờ Samara',
                            'standard': 'Giờ Chuẩn Samara',
                            'daylight': 'Giờ mùa hè Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Giờ Sakhalin',
                            'standard': 'Giờ Chuẩn Sakhalin',
                            'daylight': 'Giờ mùa hè Sakhalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Giờ Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Giờ Reunion'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Giờ Qyzylorda',
                            'standard': 'Giờ Chuẩn Qyzylorda',
                            'daylight': 'Giờ Mùa Hè Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Giờ Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Giờ Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Giờ Saint Pierre và Miquelon',
                            'standard': 'Giờ Chuẩn Saint Pierre và Miquelon',
                            'daylight': 'Giờ Mùa Hè Saint Pierre và Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Giờ Philippin',
                            'standard': 'Giờ Chuẩn Philippin',
                            'daylight': 'Giờ Mùa Hè Philippin'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Giờ Peru',
                            'standard': 'Giờ Chuẩn Peru',
                            'daylight': 'Giờ Mùa Hè Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Giờ Paraguay',
                            'standard': 'Giờ Chuẩn Paraguay',
                            'daylight': 'Giờ Mùa Hè Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Giờ Papua New Guinea'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Giờ Palau'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Giờ Pakistan',
                            'standard': 'Giờ Chuẩn Pakistan',
                            'daylight': 'Giờ Mùa Hè Pakistan'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Giờ Omsk',
                            'standard': 'Giờ chuẩn Omsk',
                            'daylight': 'Giờ mùa hè Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Giờ Novosibirsk',
                            'standard': 'Giờ chuẩn Novosibirsk',
                            'daylight': 'Giờ mùa hè Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Bắc Mariana'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Giờ Fernando de Noronha',
                            'standard': 'Giờ Chuẩn Fernando de Noronha',
                            'daylight': 'Giờ Mùa Hè Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Giờ đảo Norfolk'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Giờ Niue'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Giờ Newfoundland',
                            'standard': 'Giờ Chuẩn Newfoundland',
                            'daylight': 'Giờ Mùa Hè Newfoundland'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Giờ Amazon',
                            'standard': 'Giờ Chuẩn Amazon',
                            'daylight': 'Giờ Mùa Hè Amazon'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Giờ miền trung',
                            'standard': 'Giờ chuẩn miền trung',
                            'daylight': 'Giờ ban ngày miền trung'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Giờ miền đông',
                            'standard': 'Giờ chuẩn miền đông',
                            'daylight': 'Giờ ban ngày miền đông'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Giờ miền núi',
                            'standard': 'Giờ chuẩn miền núi',
                            'daylight': 'Giờ ban ngày miền núi'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Giờ Thái Bình Dương',
                            'standard': 'Giờ chuẩn Thái Bình Dương',
                            'daylight': 'Giờ ban ngày Thái Bình Dương'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Giờ Anadyr',
                            'standard': 'Giờ Chuẩn Anadyr',
                            'daylight': 'Giờ mùa hè Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Giờ Aqtau',
                            'standard': 'Giờ Chuẩn Aqtau',
                            'daylight': 'Giờ Mùa Hè Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Giờ Aqtobe',
                            'standard': 'Giờ Chuẩn Aqtobe',
                            'daylight': 'Giờ Mùa Hè Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Giờ Cape Verde',
                            'standard': 'Giờ Chuẩn Cape Verde',
                            'daylight': 'Giờ Mùa Hè Cape Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Giờ Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Giờ Chatham',
                            'standard': 'Giờ Chuẩn Chatham',
                            'daylight': 'Giờ Mùa Hè Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Giờ Chile',
                            'standard': 'Giờ Chuẩn Chile',
                            'daylight': 'Giờ Mùa Hè Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Giờ Trung Quốc',
                            'standard': 'Giờ Chuẩn Trung Quốc',
                            'daylight': 'Giờ Mùa Hè Trung Quốc'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Giờ Choibalsan',
                            'standard': 'Giờ Chuẩn Choibalsan',
                            'daylight': 'Giờ Mùa Hè Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Giờ Đảo Christmas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Giờ Colombia',
                            'standard': 'Giờ Chuẩn Colombia',
                            'daylight': 'Giờ Mùa Hè Colombia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Giờ Quần Đảo Cook',
                            'standard': 'Giờ Chuẩn Quần Đảo Cook',
                            'daylight': 'Giờ Nửa Mùa Hè Quần Đảo Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Giờ Cuba',
                            'standard': 'Giờ Chuẩn Cuba',
                            'daylight': 'Giờ Mùa Hè Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Giờ Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Giờ Dumont-d’Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Giờ Đông Timor'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Giờ Đảo Phục Sinh',
                            'standard': 'Giờ Chuẩn Đảo Phục Sinh',
                            'daylight': 'Giờ Mùa Hè Đảo Phục Sinh'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Giờ Ecuador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Giờ Trung Âu',
                            'standard': 'Giờ Chuẩn Trung Âu',
                            'daylight': 'Giờ Mùa Hè Trung Âu'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Giờ Đông Âu',
                            'standard': 'Giờ Chuẩn Đông Âu',
                            'daylight': 'Giờ Mùa Hè Đông Âu'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Giờ Tây Âu',
                            'standard': 'Giờ Chuẩn Tây Âu',
                            'daylight': 'Giờ Mùa hè Tây Âu'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Giờ Quần Đảo Falkland',
                            'standard': 'Giờ Chuẩn Quần Đảo Falkland',
                            'daylight': 'Giờ Mùa Hè Quần Đảo Falkland'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Giờ Fiji',
                            'standard': 'Giờ Chuẩn Fiji',
                            'daylight': 'Giờ Mùa Hè Fiji'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Giờ Guiana thuộc Pháp'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Giờ Nam Cực và Nam Nước Pháp'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Giờ Galapagos'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Giờ Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Giờ Tonga',
                            'standard': 'Giờ Chuẩn Tonga',
                            'daylight': 'Giờ Mùa Hè Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Giờ Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Giờ Turkmenistan',
                            'standard': 'Giờ Chuẩn Turkmenistan',
                            'daylight': 'Giờ Mùa Hè Turkmenistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Giờ Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Giờ Uruguay',
                            'standard': 'Giờ Chuẩn Uruguay',
                            'daylight': 'Giờ Mùa Hè Uruguay'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Giờ Uzbekistan',
                            'standard': 'Giờ Chuẩn Uzbekistan',
                            'daylight': 'Giờ Mùa Hè Uzbekistan'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Giờ Vanuatu',
                            'standard': 'Giờ Chuẩn Vanuatu',
                            'daylight': 'Giờ Mùa Hè Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Giờ Yekaterinburg',
                            'standard': 'Giờ Chuẩn Yekaterinburg',
                            'daylight': 'Giờ mùa hè Yekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Giờ Yakutsk',
                            'standard': 'Giờ Chuẩn Yakutsk',
                            'daylight': 'Giờ mùa hè Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Giờ Wallis và Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Giờ Đảo Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Giờ Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Giờ Volgograd',
                            'standard': 'Giờ Chuẩn Volgograd',
                            'daylight': 'Giờ Mùa Hè Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Giờ Vladivostok',
                            'standard': 'Giờ Chuẩn Vladivostok',
                            'daylight': 'Giờ mùa hè Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Giờ Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Giờ Tajikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Giờ Đài Bắc',
                            'standard': 'Giờ Chuẩn Đài Bắc',
                            'daylight': 'Giờ Mùa Hè Đài Bắc'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Giờ Tahiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Giờ Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Giờ Suriname'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Giờ Nam Georgia'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Solomon'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Giờ Singapore'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Giờ Chuẩn Vùng Vịnh'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Giờ Chuẩn Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Giờ Miền Tây Greenland',
                            'standard': 'Giờ Chuẩn Miền Tây Greenland',
                            'daylight': 'Giờ Mùa Hè Miền Tây Greenland'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Giờ Miền Đông Greenland',
                            'standard': 'Giờ Chuẩn Miền Đông Greenland',
                            'daylight': 'Giờ Mùa Hè Miền Đông Greenland'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Giờ Trung bình Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Giờ Georgia',
                            'standard': 'Giờ Chuẩn Georgia',
                            'daylight': 'Giờ Mùa Hè Georgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Giờ Gambier'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Giờ Acre',
                            'standard': 'Giờ Chuẩn Acre',
                            'daylight': 'Giờ Mùa Hè Acre'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Giờ Afghanistan'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Giờ Trung Phi'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Giờ Đông Phi'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Giờ Chuẩn Nam Phi'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Giờ Tây Phi',
                            'standard': 'Giờ Chuẩn Tây Phi',
                            'daylight': 'Giờ Mùa Hè Tây Phi'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Giờ Alaska',
                            'standard': 'Giờ Chuẩn Alaska',
                            'daylight': 'Giờ Mùa Hè Alaska'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Giờ Almaty',
                            'standard': 'Giờ Chuẩn Almaty',
                            'daylight': 'Giờ Mùa Hè Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Giờ Ả Rập',
                            'standard': 'Giờ chuẩn Ả Rập',
                            'daylight': 'Giờ Mùa Hè Ả Rập'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Giờ Argentina',
                            'standard': 'Giờ Chuẩn Argentina',
                            'daylight': 'Giờ Mùa Hè Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Giờ miền tây Argentina',
                            'standard': 'Giờ chuẩn miền mây Argentina',
                            'daylight': 'Giờ mùa hè miền tây Argentina'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Giờ Armenia',
                            'standard': 'Giờ Chuẩn Armenia',
                            'daylight': 'Giờ Mùa Hè Armenia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Giờ Đại Tây Dương',
                            'standard': 'Giờ Chuẩn Đại Tây Dương',
                            'daylight': 'Giờ Mùa hè Đại Tây Dương'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Giờ Miền Trung Nước Úc',
                            'standard': 'Giờ Chuẩn Miền Trung Nước Úc',
                            'daylight': 'Giờ Mùa Hè Miền Trung Nước Úc'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Giờ Miền Trung Tây Nước Úc',
                            'standard': 'Giờ Chuẩn Miền Trung Tây Nước Úc',
                            'daylight': 'Giờ Mùa Hè Miền Trung Tây Nước Úc'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Giờ Miền Đông Nước Úc',
                            'standard': 'Giờ Chuẩn Miền Đông Nước Úc',
                            'daylight': 'Giờ Mùa Hè Miền Đông Nước Úc'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Giờ Miền Tây Nước Úc',
                            'standard': 'Giờ Chuẩn Miền Tây Nước Úc',
                            'daylight': 'Giờ Mùa Hè Miền Tây Nước Úc'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Giờ Azerbaijan',
                            'standard': 'Giờ Chuẩn Azerbaijan',
                            'daylight': 'Giờ Mùa Hè Azerbaijan'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Giờ Azores',
                            'standard': 'Giờ Chuẩn Azores',
                            'daylight': 'Giờ Mùa Hè Azores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Giờ Bangladesh',
                            'standard': 'Giờ Chuẩn Bangladesh',
                            'daylight': 'Giờ Mùa Hè Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Giờ Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Giờ Bolivia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Giờ Brasilia',
                            'standard': 'Giờ Chuẩn Brasilia',
                            'daylight': 'Giờ Mùa Hè Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Giờ Brunei Darussalam'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Giờ Guyana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Giờ Hawaii-Aleutian',
                            'standard': 'Giờ Chuẩn Hawaii-Aleutian',
                            'daylight': 'Giờ Mùa Hè Hawaii-Aleutian'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Giờ Hồng Kông',
                            'standard': 'Giờ Chuẩn Hồng Kông',
                            'daylight': 'Giờ Mùa Hè Hồng Kông'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Giờ Hovd',
                            'standard': 'Giờ Chuẩn Hovd',
                            'daylight': 'Giờ Mùa Hè Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Giờ Chuẩn Ấn Độ'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Giờ Ấn Độ Dương'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Giờ Đông Dương'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Giờ Miền Trung Indonesia'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Giờ Miền Đông Indonesia'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Giờ Miền Tây Indonesia'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Giờ Iran',
                            'standard': 'Giờ Chuẩn Iran',
                            'daylight': 'Giờ Mùa Hè Iran'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Giờ Irkutsk',
                            'standard': 'Giờ Chuẩn Irkutsk',
                            'daylight': 'Giờ Mùa Hè Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Giờ Israel',
                            'standard': 'Giờ Chuẩn Israel',
                            'daylight': 'Giờ Mùa Hè Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Giờ Nhật Bản',
                            'standard': 'Giờ Chuẩn Nhật Bản',
                            'daylight': 'Giờ Mùa Hè Nhật Bản'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Giờ Petropavlovsk-Kamchatski',
                            'standard': 'Giờ chuẩn Petropavlovsk-Kamchatski',
                            'daylight': 'Giờ mùa hè Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Giờ Miền Đông Kazakhstan'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Giờ Miền Tây Kazakhstan'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Giờ Hàn Quốc',
                            'standard': 'Giờ Chuẩn Hàn Quốc',
                            'daylight': 'Giờ Mùa Hè Hàn Quốc'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Giờ Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Giờ Krasnoyarsk',
                            'standard': 'Giờ Chuẩn Krasnoyarsk',
                            'daylight': 'Giờ Mùa Hè Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Giờ Kyrgystan'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Giờ Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Giờ Lord Howe',
                            'standard': 'Giờ Chuẩn Lord Howe',
                            'daylight': 'Giờ Mùa Hè Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Giờ Ma Cao',
                            'standard': 'Giờ Chuẩn Ma Cao',
                            'daylight': 'Giờ Mùa Hè Ma Cao'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Giờ đảo Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Giờ Magadan',
                            'standard': 'Giờ Chuẩn Magadan',
                            'daylight': 'Giờ mùa hè Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Giờ Malaysia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Giờ Maldives'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Giờ Marquesas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Giờ Quần Đảo Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Giờ Mauritius',
                            'standard': 'Giờ Chuẩn Mauritius',
                            'daylight': 'Giờ Mùa Hè Mauritius'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Giờ Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Giờ Ulan Bator',
                            'standard': 'Giờ chuẩn Ulan Bator',
                            'daylight': 'Giờ mùa hè Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Giờ Matxcơva',
                            'standard': 'Giờ Chuẩn Matxcơva',
                            'daylight': 'Giờ Mùa Hè Matxcơva'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Giờ Myanmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Giờ Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Giờ Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Giờ New Caledonia',
                            'standard': 'Giờ Chuẩn New Caledonia',
                            'daylight': 'Giờ Mùa Hè New Caledonia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Giờ New Zealand',
                            'standard': 'Giờ Chuẩn New Zealand',
                            'daylight': 'Giờ Mùa Hè New Zealand'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Giờ {0}',
                'regionFormat-type-daylight': 'Giờ ban ngày {0}',
                'regionFormat-type-standard': 'Giờ chuẩn {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'thg 8',
                                '7': 'thg 7',
                                '6': 'thg 6',
                                '5': 'thg 5',
                                '12': 'thg 12',
                                '11': 'thg 11',
                                '10': 'thg 10',
                                '9': 'thg 9',
                                '1': 'thg 1',
                                '2': 'thg 2',
                                '3': 'thg 3',
                                '4': 'thg 4'
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
                                '8': 'tháng 8',
                                '7': 'tháng 7',
                                '6': 'tháng 6',
                                '5': 'tháng 5',
                                '12': 'tháng 12',
                                '11': 'tháng 11',
                                '10': 'tháng 10',
                                '9': 'tháng 9',
                                '1': 'tháng 1',
                                '2': 'tháng 2',
                                '3': 'tháng 3',
                                '4': 'tháng 4'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Thg 8',
                                '7': 'Thg 7',
                                '6': 'Thg 6',
                                '5': 'Thg 5',
                                '12': 'Thg 12',
                                '11': 'Thg 11',
                                '10': 'Thg 10',
                                '9': 'Thg 9',
                                '1': 'Thg 1',
                                '2': 'Thg 2',
                                '3': 'Thg 3',
                                '4': 'Thg 4'
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
                                '8': 'Tháng 8',
                                '7': 'Tháng 7',
                                '6': 'Tháng 6',
                                '5': 'Tháng 5',
                                '12': 'Tháng 12',
                                '11': 'Tháng 11',
                                '10': 'Tháng 10',
                                '9': 'Tháng 9',
                                '1': 'Tháng 1',
                                '2': 'Tháng 2',
                                '3': 'Tháng 3',
                                '4': 'Tháng 4'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'CN',
                                'mon': 'Th 2',
                                'tue': 'Th 3',
                                'wed': 'Th 4',
                                'thu': 'Th 5',
                                'fri': 'Th 6',
                                'sat': 'Th 7'
                            },
                            'narrow': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'short': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'wide': {
                                'sun': 'Chủ Nhật',
                                'mon': 'Thứ Hai',
                                'tue': 'Thứ Ba',
                                'wed': 'Thứ Tư',
                                'thu': 'Thứ Năm',
                                'fri': 'Thứ Sáu',
                                'sat': 'Thứ Bảy'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'CN',
                                'mon': 'Th 2',
                                'tue': 'Th 3',
                                'wed': 'Th 4',
                                'thu': 'Th 5',
                                'fri': 'Th 6',
                                'sat': 'Th 7'
                            },
                            'narrow': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'short': {
                                'sun': 'CN',
                                'mon': 'T2',
                                'tue': 'T3',
                                'wed': 'T4',
                                'thu': 'T5',
                                'fri': 'T6',
                                'sat': 'T7'
                            },
                            'wide': {
                                'sun': 'Chủ Nhật',
                                'mon': 'Thứ Hai',
                                'tue': 'Thứ Ba',
                                'wed': 'Thứ Tư',
                                'thu': 'Thứ Năm',
                                'fri': 'Thứ Sáu',
                                'sat': 'Thứ Bảy'
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
                                '1': 'Quý 1',
                                '2': 'Quý 2',
                                '3': 'Quý 3',
                                '4': 'Quý 4'
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
                                '1': 'Quý 1',
                                '2': 'Quý 2',
                                '3': 'Quý 3',
                                '4': 'Quý 4'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'narrow': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'wide': {
                                'am': 'SA',
                                'pm': 'CH'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'narrow': {
                                'am': 'SA',
                                'pm': 'CH'
                            },
                            'wide': {
                                'am': 'SA',
                                'pm': 'CH'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'tr. CN',
                            '0-alt-variant': 'BCE',
                            '1': 'sau CN',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'tr. CN',
                            '0-alt-variant': 'BCE',
                            '1': 'sau CN',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'tr. CN',
                            '0-alt-variant': 'BCE',
                            '1': 'sau CN',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, \'ngày\' dd MMMM \'năm\' y',
                        'long': '\'Ngày\' dd \'tháng\' MM \'năm\' y',
                        'medium': 'dd-MM-y',
                        'short': 'dd/MM/y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{0} {1}',
                        'long': '{0} {1}',
                        'medium': '{0} {1}',
                        'short': '{0} {1}',
                        'availableFormats': {
                            'yMM': 'MM-y',
                            'yMEd': 'E, dd-M-y',
                            'yMd': 'd/M/y',
                            'yM': 'M/y',
                            'y': '\'Năm\' y',
                            'ms': 'mm:ss',
                            'Ed': 'E, dd',
                            'd': 'd',
                            'GyMMMd': 'dd MMM, y G',
                            'GyMMMEd': 'E, dd MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'H:mm',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, dd MMM y',
                            'yMMMd': 'dd MMM, y',
                            'yMMM': 'MMM y',
                            'Hms': 'H:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': '\'Năm\' y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'dd-M',
                            'MEd': 'E, dd-M',
                            'MMdd': 'dd-MM',
                            'MMM': 'LLL',
                            'MMMd': 'dd MMM',
                            'MMMEd': 'E, dd MMM',
                            'MMMMd': 'dd MMMM',
                            'MMMMEd': 'E, dd MMMM',
                            'mmss': 'mm:ss'
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
                                'd': 'EEEE, \'ngày\' dd - EEEE, \'ngày\' dd \'tháng\' M',
                                'M': 'EEEE, \'ngày\' dd \'tháng\' M - EEEE, \'ngày\' dd \'tháng\' M'
                            },
                            'MMMd': {
                                'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M',
                                'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                'M': 'EEEE, dd/MM - EEEE, dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': '\'Tháng\' M - \'Tháng\' M'
                            },
                            'Hv': {
                                'H': 'HH\'h\'-HH\'h\' v'
                            },
                            'hv': {
                                'a': 'h\'h\' a - h\'h\' a v',
                                'h': 'h\'h\'-h\'h\' a v'
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
                                'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                            },
                            'yMMM': {
                                'M': '\'Tháng\' M - \'Tháng\' M \'năm\' y',
                                'y': '\'Tháng\' M \'năm\' y - \'Tháng\' M \'năm\' y'
                            },
                            'yMMMd': {
                                'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                'y': '\'Ngày\' dd \'tháng\' M \'năm\' y - \'Ngày\' dd \'tháng\' M \'năm\' y'
                            },
                            'yMMMEd': {
                                'd': 'EEEE, \'ngày\' dd MMM - EEEE, \'ngày\' dd MMM \'năm\' y',
                                'M': 'E, dd \'tháng\' M - E, dd \'tháng\' M, y',
                                'y': 'E, dd \'tháng\' M, y - E, dd \'tháng\' M, y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
                                'y': 'MMMM y – MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'HH\'h\' - HH\'h\''
                            },
                            'h': {
                                'a': 'h\'h\' a - h\'h\' a',
                                'h': 'h\'h\' - h\'h\' a'
                            },
                            'd': {
                                'd': '\'Ngày\' dd-dd'
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
