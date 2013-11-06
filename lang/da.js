/* AstroDate
 * Language: da
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('da', {
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
                            'exemplarCity': 'Påskeøen'
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
                            'exemplarCity': 'Maldiverne'
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
                            'exemplarCity': 'Ukendt by'
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
                            'exemplarCity': 'Sydpolen'
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
                            'exemplarCity': 'Azorerne'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'De Kanariske Øer'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Færøerne'
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
                            'exemplarCity': 'Luxembourg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Britisk sommertid'
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
                            'exemplarCity': 'Bukarest'
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
                            'exemplarCity': 'Tirane'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Uzhgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporizjzja'
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
                            'exemplarCity': 'Vatikanet'
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
                                'daylight': 'Irsk sommertid'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'København'
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
                            'exemplarCity': 'Sakhalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh-byen'
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
                            'exemplarCity': 'Jakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterinburg'
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
                            'exemplarCity': 'Katmandu'
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
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellisk tid'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa-tid',
                            'standard': 'Samoa-normaltid',
                            'daylight': 'Samoa-sommertid'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samara-tid',
                            'standard': 'Samara-normaltid',
                            'daylight': 'Samara-sommertid'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sakhalin-tid',
                            'standard': 'Sakhalin-normaltid',
                            'daylight': 'Sakhalin-sommertid'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera-tid'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunion-tid'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylorda-tid',
                            'standard': 'Qyzylorda-normaltid',
                            'daylight': 'Qyzylorda-sommertid'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponape-tid'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairn-tid'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre- og Miquelon-tid',
                            'standard': 'Saint Pierre- og Miquelon-normaltid',
                            'daylight': 'Saint Pierre- og Miquelon-sommertid'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenixøen-tid'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filippinsk tid',
                            'standard': 'Filippinsk normaltid',
                            'daylight': 'Filippinsk sommertid'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peruviansk tid',
                            'standard': 'Peruviansk normaltid',
                            'daylight': 'Peruviansk sommertid'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayansk tid',
                            'standard': 'Paraguayansk normaltid',
                            'daylight': 'Paraguayansk sommertid'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua Ny Guinea-tid'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau-normaltid'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistansk tid',
                            'standard': 'Pakistansk normaltid',
                            'daylight': 'Pakistansk sommertid'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk-tid',
                            'standard': 'Omsk-normaltid',
                            'daylight': 'Omsk-sommertid'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsk tid',
                            'standard': 'Novosibirsk normaltid',
                            'daylight': 'Novosibirsk sommertid'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Nordmarianerne-tid'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha-tid',
                            'standard': 'Fernando de Noronha-normaltid',
                            'daylight': 'Fernando de Noronha-sommertid'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolkøen-tid'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue-tid'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandsk tid',
                            'standard': 'Newfoundlandsk normaltid',
                            'daylight': 'Newfoundlandsk sommertid'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonas-tid',
                            'standard': 'Amazonas-normaltid',
                            'daylight': 'Amazonas-sommertid'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Central-tid',
                            'standard': 'Central-normaltid',
                            'daylight': 'Central-sommertid'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Eastern-tid',
                            'standard': 'Eastern-normaltid',
                            'daylight': 'Eastern-sommertid'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Mountain-tid',
                            'standard': 'Mountain-normaltid',
                            'daylight': 'Mountain-sommertid'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Pacific-tid',
                            'standard': 'Pacific-normaltid',
                            'daylight': 'Pacific-sommertid'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyr-tid',
                            'standard': 'Anadyr-normaltid',
                            'daylight': 'Anadyr-sommertid'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtau-tid',
                            'standard': 'Aqtau-normaltid',
                            'daylight': 'Aqtau-sommertid'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtobe-tid',
                            'standard': 'Aqtobe-normaltid',
                            'daylight': 'Aqtobe-sommertid'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdisk tid',
                            'standard': 'Kapverdisk normaltid',
                            'daylight': 'Kapverdisk sommertid'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorro-tid'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham-tid',
                            'standard': 'Chatham-normaltid',
                            'daylight': 'Chatham-sommertid'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilensk tid',
                            'standard': 'Chilensk normaltid',
                            'daylight': 'Chilensk sommertid'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kinesisk tid',
                            'standard': 'Kinesisk normaltid',
                            'daylight': 'Kinesisk sommertid'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Choibalsan-tid',
                            'standard': 'Choibalsan-normaltid',
                            'daylight': 'Choibalsan-sommertid'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Christmas Island-normaltid'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Cocosøerne-normaltid'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Colombiansk tid',
                            'standard': 'Colombiansk normaltid',
                            'daylight': 'Colombiansk sommertid'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookøerne-tid',
                            'standard': 'Cookøerne-normaltid',
                            'daylight': 'Cookøerne-sommertid'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Cubansk tid',
                            'standard': 'Cubansk normaltid',
                            'daylight': 'Cubansk sommertid'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis-tid'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville-tid'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Østtimor-tid'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Påskeøen-tid',
                            'standard': 'Påskeøen-normaltid',
                            'daylight': 'Påskeøen-sommertid'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadoriansk tid'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Centraleuropæisk tid',
                            'standard': 'Centraleuropæisk normaltid',
                            'daylight': 'Centraleuropæisk sommertid'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Østeuropæisk tid',
                            'standard': 'Østeuropæisk normaltid',
                            'daylight': 'Østeuropæisk sommertid'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Vesteuropæisk tid',
                            'standard': 'Vesteuropæisk normaltid',
                            'daylight': 'Vesteuropæisk sommertid'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandsøerne-tid',
                            'standard': 'Falklandsøerne-normaltid',
                            'daylight': 'Falklandsøerne-sommertid'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fijiansk tid',
                            'standard': 'Fijiansk normaltid',
                            'daylight': 'Fijiansk sommertid'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Fransk Guyana-tid'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Franske Sydlige og Antarktiske Territorier-tid'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos-tid'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau-tid'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongansk tid',
                            'standard': 'Tongansk normaltid',
                            'daylight': 'Tongansk sommertid'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Truk-tid'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmensk tid',
                            'standard': 'Turkmensk normaltid',
                            'daylight': 'Turkmensk sommertid'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu-tid'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayansk tid',
                            'standard': 'Uruguayansk normaltid',
                            'daylight': 'Uruguayansk sommertid'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Usbekisk tid',
                            'standard': 'Usbekisk normaltid',
                            'daylight': 'Usbekisk sommertid'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu-tid',
                            'standard': 'Vanuatu-normaltid',
                            'daylight': 'Vanuatu-sommertid'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Yekaterinburgsk tid',
                            'standard': 'Yekaterinburgsk normaltid',
                            'daylight': 'Yekaterinburgsk sommertid'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Yakutsk-tid',
                            'standard': 'Yakutsk-normaltid',
                            'daylight': 'Yakutsk-sommertid'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis og Futuna-tid'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wakeøen-tid'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostok-tid'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgograd-tid',
                            'standard': 'Volgograd-normaltid',
                            'daylight': 'Volgograd-sommertid'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostok-tid',
                            'standard': 'Vladivostok-normaltid',
                            'daylight': 'Vladivostok-sommertid'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelansk tid'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadsjikisk tid'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei-tid',
                            'standard': 'Taipei-normaltid',
                            'daylight': 'Taipei-sommertid'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitisk tid'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa-tid'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinam-tid'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'South Georgia-tid'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonøerne-tid'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporeansk normaltid'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Golflandene-normaltid'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guam-normaltid'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Vestgrønlandsk tid',
                            'standard': 'Vestgrønlandsk normaltid',
                            'daylight': 'Vestgrønlandsk sommertid'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Østgrønlandsk tid',
                            'standard': 'Østgrønlandsk normaltid',
                            'daylight': 'Østgrønlandsk sommertid'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbertøerne-tid'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgiansk tid',
                            'standard': 'Georgiansk normaltid',
                            'daylight': 'Georgiansk sommertid'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier-tid'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre-tid',
                            'standard': 'Acre-normaltid',
                            'daylight': 'Acre-sommertid'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afghansk tid'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Centralafrikansk tid'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Østafrikansk tid'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Sydafrikansk tid'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Vestafrikansk tid',
                            'standard': 'Vestafrikansk normaltid',
                            'daylight': 'Vestafrikansk sommertid'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaska-tid',
                            'standard': 'Alaska-normaltid',
                            'daylight': 'Alaska-sommertid'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almaty-tid',
                            'standard': 'Almaty-normaltid',
                            'daylight': 'Almaty-sommertid'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabisk tid',
                            'standard': 'Arabisk normaltid',
                            'daylight': 'Arabisk sommertid'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentisk tid',
                            'standard': 'Argentinsk normaltid',
                            'daylight': 'Argentinsk sommertid'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Vestargentinsk tid',
                            'standard': 'Vestargentinsk normaltid',
                            'daylight': 'Vestargentinsk sommertid'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armensk tid',
                            'standard': 'Armensk normaltid',
                            'daylight': 'Armensk sommertid'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantic-tid',
                            'standard': 'Atlantic-normaltid',
                            'daylight': 'Atlantic-sommertid'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Centralaustralsk tid',
                            'standard': 'Centralaustralsk normaltid',
                            'daylight': 'Centralaustralsk sommertid'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Vestlig centralaustralsk tid',
                            'standard': 'Vestlig centralaustralsk normaltid',
                            'daylight': 'Vestlig centralaustralsk sommertid'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Østaustralsk tid',
                            'standard': 'Østaustralsk normaltid',
                            'daylight': 'Østaustralsk sommertid'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Vestaustralsk tid',
                            'standard': 'Vestaustralsk normaltid',
                            'daylight': 'Vestaustralsk sommertid'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Aserbajdsjansk tid',
                            'standard': 'Aserbajdsjansk normaltid',
                            'daylight': 'Aserbajdsjansk sommertid'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorerne-tid',
                            'standard': 'Azorerne-normaltid',
                            'daylight': 'Azorerne-sommertid'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladeshisk tid',
                            'standard': 'Bangladeshisk normaltid',
                            'daylight': 'Bangladeshisk sommertid'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutanesisk tid'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Boliviansk tid'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasiliansk tid',
                            'standard': 'Brasiliansk normaltid',
                            'daylight': 'Brasiliansk sommertid'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam-tid'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyana-tid'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-Aleutian-tid',
                            'standard': 'Hawaii-Aleutian-normaltid',
                            'daylight': 'Hawaii-Aleutian-sommertid'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkong-tid',
                            'standard': 'Hongkong-normaltid',
                            'daylight': 'Hongkong-sommertid'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovd-tid',
                            'standard': 'Hovd-normaltid',
                            'daylight': 'Hovd-sommertid'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indisk normaltid'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indiske Ocean-normaltid'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokina-tid'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Centralindonesisk tid'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Østindonesisk tid'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Vestindonesisk tid'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iransk tid',
                            'standard': 'Iransk normaltid',
                            'daylight': 'Iransk sommertid'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsk-tid',
                            'standard': 'Irkutsk-normaltid',
                            'daylight': 'Irkutsk-sommertid'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israelsk tid',
                            'standard': 'Israelsk normaltid',
                            'daylight': 'Israelsk sommertid'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japansk tid',
                            'standard': 'Japansk normaltid',
                            'daylight': 'Japansk sommertid'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamchatski tid',
                            'standard': 'Petropavlovsk-Kamchatski normaltid',
                            'daylight': 'Petropavlovsk-Kamchatski sommertid'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Østkasakhstansk tid'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Vestkasakhstansk tid'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Koreansk tid',
                            'standard': 'Koreansk normaltid',
                            'daylight': 'Koreansk sommertid'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae-tid'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnoyarsk-tid',
                            'standard': 'Krasnoyarsk-normaltid',
                            'daylight': 'Krasnoyarsk-sommertid'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgisisk tid'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Langa tid'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Linjeøerne-tid'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe-tid',
                            'standard': 'Lord Howe-normaltid',
                            'daylight': 'Lord Howe-sommertid'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macao-tid',
                            'standard': 'Macao-normaltid',
                            'daylight': 'Macao-sommertid'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie tid'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan-tid',
                            'standard': 'Magadan-normaltid',
                            'daylight': 'Magadan-sommertid'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malaysisk tid'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivisk tid'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesas-tid'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshalløerne-tid'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius-tid',
                            'standard': 'Mauritius-normaltid',
                            'daylight': 'Mauritius-sommertid'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson-tid'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulan Bator-tid',
                            'standard': 'Ulan Bator-normaltid',
                            'daylight': 'Ulan Bator-sommertid'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovitisk tid',
                            'standard': 'Moskovitisk normaltid',
                            'daylight': 'Moskovitisk sommertid'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarsk tid'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru-tid'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalesisk tid'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nykaledonsk tid',
                            'standard': 'Nykaledonsk normaltid',
                            'daylight': 'Nykaledonsk sommertid'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Newzealandsk tid',
                            'standard': 'Newzealandsk normaltid',
                            'daylight': 'Newzealandsk sommertid'
                        }
                    }
                },
                'hourFormat': '+HH.mm;-HH.mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Tidszone for {0}',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
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
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marts',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug',
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
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marts',
                                '4': 'april'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'søn.',
                                'mon': 'man.',
                                'tue': 'tir.',
                                'wed': 'ons.',
                                'thu': 'tor.',
                                'fri': 'fre.',
                                'sat': 'lør.'
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
                                'sun': 'sø',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'on',
                                'thu': 'to',
                                'fri': 'fr',
                                'sat': 'lø'
                            },
                            'wide': {
                                'sun': 'søndag',
                                'mon': 'mandag',
                                'tue': 'tirsdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'lørdag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'søn',
                                'mon': 'man',
                                'tue': 'tir',
                                'wed': 'ons',
                                'thu': 'tor',
                                'fri': 'fre',
                                'sat': 'lør'
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
                                'sun': 'sø',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'on',
                                'thu': 'to',
                                'fri': 'fr',
                                'sat': 'lø'
                            },
                            'wide': {
                                'sun': 'søndag',
                                'mon': 'mandag',
                                'tue': 'tirsdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'lørdag'
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
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'formiddag',
                                'noon': 'middag',
                                'pm': 'eftermiddag'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'før vesterlandsk tidsregning',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'vesterlandsk tidsregning'
                        },
                        'eraAbbr': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'f.v.t.',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'v.t.'
                        },
                        'eraNarrow': {
                            '0': 'fKr',
                            '0-alt-variant': 'fvt',
                            '1': 'eKr',
                            '1-alt-variant': 'vt'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE \'den\' d. MMMM y',
                        'long': 'd. MMM y',
                        'medium': 'dd/MM/y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'HH.mm.ss zzzz',
                        'long': 'HH.mm.ss z',
                        'medium': 'HH.mm.ss',
                        'short': 'HH.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'kl.\' {0}',
                        'long': '{1} \'kl.\' {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'd. MMM y',
                            'yMMM': 'MMM y',
                            'yMM': 'MM/y',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E HH.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E \'d\'. d.',
                            'd': 'd.',
                            'GyMMMd': 'd. MMM y G',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMEd': 'E d. MMM y',
                            'Hms': 'HH.mm.ss',
                            'hms': 'h.mm.ss a',
                            'Hm': 'HH.mm',
                            'hm': 'h.mm a',
                            'H': 'HH',
                            'EHms': 'E HH.mm.ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'M',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMdd': 'dd/MM',
                            'MMM': 'MMM',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E d. MMM',
                            'MMMMEd': 'E d. MMMM',
                            'ms': 'mm.ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'd/M/y',
                            'yMEd': 'E d/M/y'
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
                                'd': 'E \'den\' d. – E \'den\' d. MMM',
                                'M': 'E \'den\' d. MMM – E \'den\' d. MMM'
                            },
                            'MMMd': {
                                'd': 'd.–d. MMM',
                                'M': 'd. MMM – d. MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E dd/MM – E dd/MM',
                                'M': 'E dd/MM – E dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM – dd/MM',
                                'M': 'dd/MM – dd/MM'
                            },
                            'M': {
                                'M': 'M–M'
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
                                'M': 'MM/y – MM/y',
                                'y': 'MM/y – MM/y'
                            },
                            'yMd': {
                                'd': 'dd/MM/y – dd/MM/y',
                                'M': 'dd/MM/y – dd/MM/y',
                                'y': 'dd/MM/y – dd/MM/y'
                            },
                            'yMEd': {
                                'd': 'E dd/MM/y – E dd/MM/y',
                                'M': 'E dd/MM/y – E dd/MM/y',
                                'y': 'E dd/MM/y – E dd/MM/y'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. MMM y',
                                'M': 'd. MMM – d. MMM y',
                                'y': 'd. MMM y – d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E \'den\' d. – E \'den\' d. MMM y',
                                'M': 'E \'den\' d. MMM – E \'den\' d. MMM y',
                                'y': 'E \'den\' d. MMM y – E \'den\' d. MMM y'
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
                                'a': 'h.mm a – h.mm a v',
                                'h': 'h.mm–h.mm a v',
                                'm': 'h.mm–h.mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm–HH.mm',
                                'm': 'HH.mm–HH.mm'
                            },
                            'hm': {
                                'a': 'h.mm a – h.mm a',
                                'h': 'h.mm–h.mm a',
                                'm': 'h.mm–h.mm a'
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
