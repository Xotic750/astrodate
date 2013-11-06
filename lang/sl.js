/* AstroDate Language: sl
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
        AstroDate.lang('sl', {
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
                            'exemplarCity': 'Velikonočni otok'
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
                            'exemplarCity': 'Maldivi'
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
                            'exemplarCity': 'Božični otok'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokosovi otoki'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komori'
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
                            'exemplarCity': 'neznano'
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
                            'exemplarCity': 'Južni tečaj'
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
                            'exemplarCity': 'Kajman'
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
                            'exemplarCity': 'Gvajana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Gvatemala'
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
                            'exemplarCity': 'Kordova'
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
                            'exemplarCity': 'Ciudad Mexico'
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
                                'exemplarCity': 'New Salem, Severna Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Severna Dakota'
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
                            'exemplarCity': 'Južna Georgia'
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
                            'exemplarCity': 'Azori'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudi'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanarski otoki'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Zelenortski otoki'
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
                            'exemplarCity': 'Luksemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'britanski poletni čas'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lizbona'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kijev'
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
                            'exemplarCity': 'Otok Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukarešta'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruselj'
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
                            'exemplarCity': 'Atene'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andora'
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
                            'exemplarCity': 'Sofija'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Talin'
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
                            'exemplarCity': 'Zurich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporožje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varšava'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilna'
                        },
                        'Vienna': {
                            'exemplarCity': 'Dunaj'
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
                            'exemplarCity': 'Rim'
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
                            'exemplarCity': 'Pariz'
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
                                'daylight': 'irski poletni čas'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Köbenhavn'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budimpešta'
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
                            'exemplarCity': 'Kinšasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Kartum'
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
                            'exemplarCity': 'Lubumbaši'
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
                            'exemplarCity': 'Abidžan'
                        },
                        'Accra': {
                            'exemplarCity': 'Akra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Adis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Alžir'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Šangaj'
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
                            'exemplarCity': 'Hošiminh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangun'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kizlorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
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
                            'exemplarCity': 'Čongčing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damask'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Daka'
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
                            'exemplarCity': 'Džakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
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
                            'exemplarCity': 'Jekaterinburg'
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
                            'exemplarCity': 'Taškent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tajpej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ašgabat'
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
                            'exemplarCity': 'Aman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almati'
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
                            'exemplarCity': 'Bejrut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Biškek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunej'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Čojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamčatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karači'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kašgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handiga'
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
                            'exemplarCity': 'Makasar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Muškat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nikozija'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelavski čas'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadžikistanski čas'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tajpejski čas',
                            'standard': 'Tajpejski standardni čas',
                            'daylight': 'Tajpejski poletni čas'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitijski čas'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Čas: Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamski čas'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Južnogeorgijski čas'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonovootoški čas'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapurski standardni čas'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Sejšelski čas'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoanski čas',
                            'standard': 'Samoanski standardni čas',
                            'daylight': 'Samoanski poletni čas'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samarski čas',
                            'standard': 'Samarski standardni čas',
                            'daylight': 'Samarski poletni čas'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sahalinski čas',
                            'standard': 'Sahalinski standardni čas',
                            'daylight': 'Sahalinski poletni čas'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotherski čas'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunionski čas'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantski čas',
                            'standard': 'Atlantski standardni čas',
                            'daylight': 'Atlantski poletni čas'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Centralni čas',
                            'standard': 'Centralni standardni čas',
                            'daylight': 'Centralni poletni čas'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonski čas',
                            'standard': 'Amazonski standardni čas',
                            'daylight': 'Amazonski poletni čas'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Aljaški čas',
                            'standard': 'Aljaški standardni čas',
                            'daylight': 'Aljaški poletni čas'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Zahodnoafriški čas',
                            'standard': 'Zahodnoafriški standardni čas',
                            'daylight': 'Zahodnoafriški poletni čas'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Južnoafriški čas'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Vzhodnoafriški čas'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Centralnoafriški čas'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistanski čas'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Vzhodni čas',
                            'standard': 'Vzhodni standardni čas',
                            'daylight': 'Vzhodni poletni čas'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Gorski čas',
                            'standard': 'Gorski standardni čas',
                            'daylight': 'Gorski poletni čas'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Pacifiški čas',
                            'standard': 'Pacifiški standardni čas',
                            'daylight': 'Pacifiški poletni čas'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadirski čas',
                            'standard': 'Anadirski standardni čas',
                            'daylight': 'Anadirski poletni čas'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabski čas',
                            'standard': 'Arabski standardni čas',
                            'daylight': 'Arabski poletni čas'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentinski čas',
                            'standard': 'Argentinski standardni čas',
                            'daylight': 'Argentinski poletni čas'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Argentinski zahodni čas',
                            'standard': 'Argentinski zahodni standardni čas',
                            'daylight': 'Argentinski zahodni poletni čas'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenski čas',
                            'standard': 'Armenski standardni čas',
                            'daylight': 'Armenski poletni čas'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kitajski čas',
                            'standard': 'Kitajski standardni čas',
                            'daylight': 'Kitajski poletni čas'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Čojbalsanski čas',
                            'standard': 'Čojbalsanski standardni čas',
                            'daylight': 'Čojbalsanski poletni čas'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Božičnootoški čas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Čas: Kokosovi otoki'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbijski čas',
                            'standard': 'Kolumbijski standardni čas',
                            'daylight': 'Kolumbijski poletni čas'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookovootoški čas',
                            'standard': 'Cookovootoški standardni čas',
                            'daylight': 'Cookovootoški srednjepoletni čas'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubanski čas',
                            'standard': 'Kubanski standardni čas',
                            'daylight': 'Kubanski poletni čas'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Čas: Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Čas: Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Vzhodnotimorski čas'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Čas: Velikonočni otok',
                            'standard': 'Standardni čas: Velikonočni otok',
                            'daylight': 'Poletni čas: Velikonočni otok'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekvadorski čas'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Srednjeevropski čas',
                            'standard': 'Srednjeevropski standardni čas',
                            'daylight': 'Srednjeevropski poletni čas'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Vzhodnoevropski čas',
                            'standard': 'Vzhodnoevropski standardni čas',
                            'daylight': 'Vzhodnoevropski poletni čas'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Zahodnoevropski čas',
                            'standard': 'Zahodnoevropski standardni čas',
                            'daylight': 'Zahodnoevropski poletni čas'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indijski standardni čas'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongovski čas',
                            'standard': 'Tongovski standardni čas',
                            'daylight': 'Tongovski poletni čas'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Čas: Otok Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistanski čas',
                            'standard': 'Turkmenistanski standardni čas',
                            'daylight': 'Turkmenistanski poletni čas'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalujski čas'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Urugvajski čas',
                            'standard': 'Urugvajski standardni čas',
                            'daylight': 'Urugvajski poletni čas'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistanski čas',
                            'standard': 'Uzbekistanski standardni čas',
                            'daylight': 'Uzbekistanski poletni čas'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatujski čas',
                            'standard': 'Vanuatujski standardni čas',
                            'daylight': 'Vanuatujski poletni čas'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburški čas',
                            'standard': 'Jekaterinburški standardni čas',
                            'daylight': 'Jekaterinburški poletni čas'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutski čas',
                            'standard': 'Jakutski standardni čas',
                            'daylight': 'Jakutski poletni čas'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Čas: Wallis in Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Čas: Otok Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Čas: Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgograjski čas',
                            'standard': 'Volgograjski standardni čas',
                            'daylight': 'Volgograjski poletni čas'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostoški čas',
                            'standard': 'Vladivostoški standardni čas',
                            'daylight': 'Vladivostoški poletni čas'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelski čas'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdski čas',
                            'standard': 'Hovdski standardni čas',
                            'daylight': 'Hovdski poletni čas'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkonški čas',
                            'standard': 'Hongkonški standardni čas',
                            'daylight': 'Hongkonški poletni čas'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havajski aleutski čas',
                            'standard': 'Havajski aleutski standardni čas',
                            'daylight': 'Havajski aleutski poletni čas'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Gvajanski čas'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Zalivski standardni čas'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Zahodnogrenlandski čas',
                            'standard': 'Zahodnogrenlandski standardni čas',
                            'daylight': 'Zahodnogrenlandski poletni čas'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Vzhodnogrenlandski čas',
                            'standard': 'Vzhodnogrenlandski standardni čas',
                            'daylight': 'Vzhodnogrenlandski poletni čas'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwiški srednji čas'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Čas: Gilbertovi otoki'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruzijski čas',
                            'standard': 'Gruzijski standardni čas',
                            'daylight': 'Gruzijski poletni čas'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambierski čas'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapaški čas'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francoski južni in antarktični čas'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Čas: Francoska Gvajana'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidžijski čas',
                            'standard': 'Fidžijski standardni čas',
                            'daylight': 'Fidžijski poletni čas'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Čas: Falklandsko otočje',
                            'standard': 'Standardni čas: Falklandsko otočje',
                            'daylight': 'Poletni čas: Falklandsko otočje'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Avstralski centralni čas',
                            'standard': 'Avstralski centralni standardni čas',
                            'daylight': 'Avstralski centralni poletni čas'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Avstralski centralni zahodni čas',
                            'standard': 'Avstralski centralni zahodni standardni čas',
                            'daylight': 'Avstralski centralni zahodni poletni čas'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Avstralski vzhodni čas',
                            'standard': 'Avstralski vzhodni standardni čas',
                            'daylight': 'Avstralski vzhodni poletni čas'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Avstralski zahodni čas',
                            'standard': 'Avstralski zahodni standardni čas',
                            'daylight': 'Avstralski zahodni poletni čas'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbajdžanski čas',
                            'standard': 'Azerbajdžanski standardni čas',
                            'daylight': 'Azerbajdžanski poletni čas'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorski čas',
                            'standard': 'Azorski standardni čas',
                            'daylight': 'Azorski poletni čas'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladeški čas',
                            'standard': 'Bangladeški standardni čas',
                            'daylight': 'Bangladeški poletni čas'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Butanski čas'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivijski čas'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilski čas',
                            'standard': 'Brasilski standardni čas',
                            'daylight': 'Brasilski poletni čas'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunejski čas'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdski čas',
                            'standard': 'Kapverdski standardni čas',
                            'daylight': 'Kapverdski poletni čas'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Čamorski standardni čas'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Čatamski čas',
                            'standard': 'Čatamski standardni čas',
                            'daylight': 'Čatamski poletni čas'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Čilski čas',
                            'standard': 'Čilski standardni čas',
                            'daylight': 'Čilski poletni čas'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indijskooceanski čas'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokitajski čas'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Indonezijski osrednji čas'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Indonezijski vzhodni čas'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Indonezijski zahodni čas'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iranski čas',
                            'standard': 'Iranski standardni čas',
                            'daylight': 'Iranski poletni čas'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutški čas',
                            'standard': 'Irkutški standardni čas',
                            'daylight': 'Irkutški poletni čas'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraelski čas',
                            'standard': 'Izraelski standardni čas',
                            'daylight': 'Izraelski poletni čas'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonski čas',
                            'standard': 'Japonski standardni čas',
                            'daylight': 'Japonski poletni čas'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamčatski čas',
                            'standard': 'Petropavlovsk-Kamčatski standardni čas',
                            'daylight': 'Petropavlovsk-Kamčatski poletni čas'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Vzhodni kazahstanski čas'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Zahodni kazahstanski čas'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korejski čas',
                            'standard': 'Korejski standardni čas',
                            'daylight': 'Korejski poletni čas'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrajški čas'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarški čas',
                            'standard': 'Krasnojarški standardni čas',
                            'daylight': 'Krasnojarški poletni čas'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgizistanski čas'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Ekvatorski otoki: Čas'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Čas otoka Lord Howe',
                            'standard': 'Standardni čas otoka Lord Howe',
                            'daylight': 'Poletni čas otoka Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarieski čas'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadanski čas',
                            'standard': 'Magadanski standardni čas',
                            'daylight': 'Magadanski poletni čas'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malezijski čas'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivski čas'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Čas: Markizni otoki'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Čas: Marshallovi otoki'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauricijski čas',
                            'standard': 'Mauricijski standardni čas',
                            'daylight': 'Mauricijski poletni čas'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsonski čas'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulanbatorski čas',
                            'standard': 'Ulanbatorski standardni čas',
                            'daylight': 'Ulanbatorski poletni čas'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovski čas',
                            'standard': 'Moskovski standardni čas',
                            'daylight': 'Moskovski poletni čas'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mjanmarski čas'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurujski čas'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalski čas'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Novokaledonijski čas',
                            'standard': 'Novokaledonijski standardni čas',
                            'daylight': 'Novokaledonijski poletni čas'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Novozelandski čas',
                            'standard': 'Novozelandski standardni čas',
                            'daylight': 'Novozelandski poletni čas'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Novofundlandski čas',
                            'standard': 'Novofundlandski standardni čas',
                            'daylight': 'Novofundlandski poletni čas'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuejski čas'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Čas: Norfolški otoki'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronški čas',
                            'standard': 'Fernando de Noronški standardni čas',
                            'daylight': 'Fernando de Noronški poletni čas'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirški čas',
                            'standard': 'Novosibirški standardni čas',
                            'daylight': 'Novosibirški poletni čas'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omški čas',
                            'standard': 'Omški standardni čas',
                            'daylight': 'Omški poletni čas'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistanski čas',
                            'standard': 'Pakistanski standardni čas',
                            'daylight': 'Pakistanski poletni čas'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palavski čas'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papuanski čas'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paragvajski čas',
                            'standard': 'Paragvajski standardni čas',
                            'daylight': 'Paragvajski poletni čas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Perujski čas',
                            'standard': 'Perujski standardni čas',
                            'daylight': 'Perujski poletni čas'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipinski čas',
                            'standard': 'Filipinski standardni čas',
                            'daylight': 'Filipinski poletni čas'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Čas: Otočje Feniks'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Čas: Saint Pierre in Miquelon',
                            'standard': 'Standardni čas: Saint Pierre in Miquelon',
                            'daylight': 'Poletni čas: Saint Pierre in Miquelon'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairnski čas'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapski čas'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} čas',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'avg.',
                                '7': 'jul.',
                                '6': 'jun.',
                                '5': 'maj',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'sep.',
                                '1': 'jan.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'a',
                                '7': 'j',
                                '6': 'j',
                                '5': 'm',
                                '12': 'd',
                                '11': 'n',
                                '10': 'o',
                                '9': 's',
                                '1': 'j',
                                '2': 'f',
                                '3': 'm',
                                '4': 'a'
                            },
                            'wide': {
                                '8': 'avgust',
                                '7': 'julij',
                                '6': 'junij',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marec',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'avg',
                                '7': 'jul',
                                '6': 'jun',
                                '5': 'maj',
                                '12': 'dec',
                                '11': 'nov',
                                '10': 'okt',
                                '9': 'sep',
                                '1': 'jan',
                                '2': 'feb',
                                '3': 'mar',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'a',
                                '7': 'j',
                                '6': 'j',
                                '5': 'm',
                                '12': 'd',
                                '11': 'n',
                                '10': 'o',
                                '9': 's',
                                '1': 'j',
                                '2': 'f',
                                '3': 'm',
                                '4': 'a'
                            },
                            'wide': {
                                '8': 'avgust',
                                '7': 'julij',
                                '6': 'junij',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marec',
                                '4': 'april'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ned.',
                                'mon': 'pon.',
                                'tue': 'tor.',
                                'wed': 'sre.',
                                'thu': 'čet.',
                                'fri': 'pet.',
                                'sat': 'sob.'
                            },
                            'narrow': {
                                'sun': 'n',
                                'mon': 'p',
                                'tue': 't',
                                'wed': 's',
                                'thu': 'č',
                                'fri': 'p',
                                'sat': 's'
                            },
                            'short': {
                                'sun': 'ned.',
                                'mon': 'pon.',
                                'tue': 'tor.',
                                'wed': 'sre.',
                                'thu': 'čet.',
                                'fri': 'pet.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'nedelja',
                                'mon': 'ponedeljek',
                                'tue': 'torek',
                                'wed': 'sreda',
                                'thu': 'četrtek',
                                'fri': 'petek',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ned',
                                'mon': 'pon',
                                'tue': 'tor',
                                'wed': 'sre',
                                'thu': 'čet',
                                'fri': 'pet',
                                'sat': 'sob'
                            },
                            'narrow': {
                                'sun': 'n',
                                'mon': 'p',
                                'tue': 't',
                                'wed': 's',
                                'thu': 'č',
                                'fri': 'p',
                                'sat': 's'
                            },
                            'short': {
                                'sun': 'ned.',
                                'mon': 'pon.',
                                'tue': 'tor.',
                                'wed': 'sre.',
                                'thu': 'čet.',
                                'fri': 'pet.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'nedelja',
                                'mon': 'ponedeljek',
                                'tue': 'torek',
                                'wed': 'sreda',
                                'thu': 'četrtek',
                                'fri': 'petek',
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
                                '1': '1. četrtletje',
                                '2': '2. četrtletje',
                                '3': '3. četrtletje',
                                '4': '4. četrtletje'
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
                                '1': '1. četrtletje',
                                '2': '2. četrtletje',
                                '3': '3. četrtletje',
                                '4': '4. četrtletje'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'narrow': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'wide': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'narrow': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'wide': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'pred našim štetjem',
                            '0-alt-variant': 'BCE',
                            '1': 'naše štetje',
                            '1-alt-variant': 'po n. št.'
                        },
                        'eraAbbr': {
                            '0': 'pr. n. št.',
                            '0-alt-variant': 'BCE',
                            '1': 'po Kr.',
                            '1-alt-variant': 'po n. št.'
                        },
                        'eraNarrow': {
                            '0': 'pr. n. št.',
                            '0-alt-variant': 'BCE',
                            '1': 'po Kr.',
                            '1-alt-variant': 'po n. št.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, dd. MMMM y',
                        'long': 'dd. MMMM y',
                        'medium': 'd. MMM y',
                        'short': 'd. MM. yy'
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
                            'yMMMEd': 'E, d. MMM y',
                            'EHms': 'E HH.mm.ss',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E HH.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E, d.',
                            'd': 'd',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'd. MMM y G',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH',
                            'h': 'h a',
                            'GyMMMEd': 'E, d. MMM y G',
                            'Gy': 'y G',
                            'GyM': 'M/y G',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'd. M.',
                            'MEd': 'E, d. MM.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E, d. MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'd. M. y',
                            'yMEd': 'E, d. M. y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd. MMM y'
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
                                'd': 'E, d. – E, d. MMM',
                                'M': 'E, d. MMM – E, d. MMM'
                            },
                            'MMMd': {
                                'd': 'd.–d. MMM',
                                'M': 'd. MMM – d. MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E, d. – E, d. M.',
                                'M': 'E, d. M. – E, d. M.'
                            },
                            'Md': {
                                'd': 'd. – d. M.',
                                'M': 'd. M. – d. M.'
                            },
                            'M': {
                                'M': 'M.–M.'
                            },
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'M.–M. y',
                                'y': 'M. y – M. y'
                            },
                            'yMd': {
                                'd': 'd. M. y – d. M. y',
                                'M': 'd. M. – d. M. y',
                                'y': 'd. M. y – d. M. y'
                            },
                            'yMEd': {
                                'd': 'E, d. – E, d. M. y',
                                'M': 'E, d. M. – E, d. M. y',
                                'y': 'E, d. M. y – E, d. M. y'
                            },
                            'yMMM': {
                                'M': 'MMM – MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. MMM y',
                                'M': 'd. MMM – d. MMM y',
                                'y': 'd. MMM y – d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. MMM – E, d. MMM y',
                                'M': 'E, d. MMM – E, d. MMM y',
                                'y': 'E, d. MMM y – E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM–MMMM y',
                                'y': 'MMMM y – MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH.mm–HH.mm v',
                                'm': 'HH.mm–HH.mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm–HH.mm',
                                'm': 'HH.mm–HH.mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm–h:mm a',
                                'm': 'h:mm–h:mm a'
                            },
                            'H': {
                                'H': 'HH–HH'
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
