/* AstroDate Language: sk
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
        AstroDate.lang('sk', {
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
                            'exemplarCity': 'Galapágy'
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
                            'exemplarCity': 'Veľkonočné ostrovy'
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
                            'exemplarCity': 'Maldivy'
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
                            'exemplarCity': 'Maurícius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Vianočný ostrov'
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
                            'exemplarCity': 'Neznáme mesto'
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
                            'exemplarCity': 'Južný pól'
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
                            'exemplarCity': 'Aljaška'
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
                            'exemplarCity': 'Curacao'
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
                            'exemplarCity': 'Salvádor'
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
                            'exemplarCity': 'Cordoba'
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
                                'exemplarCity': 'Beulah, Severná Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Severná Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Severná Dakota'
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
                            'exemplarCity': 'Svätý Bartolomej'
                        },
                        'St_Johns': {
                            'exemplarCity': 'Sv. Ján'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Svätá Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Sv. Tomáš'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Sv. Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Južná Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
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
                            'exemplarCity': 'Kanárske ostrovy'
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
                            'exemplarCity': 'Luxembursko'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Britský letný čas'
                            },
                            'exemplarCity': 'Londýn'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ľubľana'
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
                            'exemplarCity': 'Belehrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Atény'
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
                            'exemplarCity': 'Štokholm'
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
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Záporožie'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Záhreb'
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
                            'exemplarCity': 'Viedeň'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikán'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Maríno'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'Rím'
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
                            'exemplarCity': 'Paríž'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltár'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Írsky letný čas'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kodaň'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Kišiňov'
                        },
                        'Busingen': {
                            'exemplarCity': 'Büsingen'
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
                            'exemplarCity': 'Džibutsko'
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
                            'exemplarCity': 'Mogadišo'
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
                            'exemplarCity': 'Svätý Tomáš'
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
                            'exemplarCity': 'Abidjan'
                        },
                        'Accra': {
                            'exemplarCity': 'Accra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Ababa'
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
                            'exemplarCity': 'Hočiminovo Mesto'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyadh'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangún'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
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
                            'exemplarCity': 'Phnom Pénh'
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
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Kolombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damask'
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
                            'exemplarCity': 'Irkutsko'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulanbátar'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Usť-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientiane'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutsko'
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
                            'exemplarCity': 'Thimphu'
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
                            'exemplarCity': 'Jeruzalem'
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
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Alma-Ata'
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
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kábul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamčatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karáči'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Káthmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnojarsko'
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
                            'exemplarCity': 'Nikózia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuzneck'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelauský čas'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadžický čas'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tchajpejský čas',
                            'standard': 'Tchajpejský štandardný čas',
                            'daylight': 'Tchajpejský letný čas'
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
                            'standard': 'Čas Južnej Georgie'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Čas Šalamúnových ostrovov'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapurský štandardný čas'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelský čas'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samojský čas',
                            'standard': 'Samojský štandardný čas',
                            'daylight': 'Samojský letný čas'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samarský čas',
                            'standard': 'Samarský štandardný čas',
                            'daylight': 'Samarský letný čas'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalinský čas',
                            'standard': 'Sachalinský štandardný čas',
                            'daylight': 'Sachalinský letný čas'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Čas Rotherovej stanice'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réunionský čas'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantický čas',
                            'standard': 'Atlantický štandardný čas',
                            'daylight': 'Atlantický letný čas'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Centrálny čas',
                            'standard': 'Centrálny štandardný čas',
                            'daylight': 'Centrálny letný čas'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonský čas',
                            'standard': 'Amazonský štandardný čas',
                            'daylight': 'Amazonský letný čas'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Aljašský čas',
                            'standard': 'Aljašský štandardný čas',
                            'daylight': 'Aljašský letný čas'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Západoafrický čas',
                            'standard': 'Západoafrický štandardný čas',
                            'daylight': 'Západoafrický letný čas'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Juhoafrický čas'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Východoafrický čas'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Stredoafrický čas'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganský čas'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Východný čas',
                            'standard': 'Východný štandardný čas',
                            'daylight': 'Východný letný čas'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Horský čas',
                            'standard': 'Horský štandardný čas',
                            'daylight': 'Horský letný čas'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Tichomorský čas',
                            'standard': 'Tichomorský štandardný čas',
                            'daylight': 'Tichomorský letný čas'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrský čas',
                            'standard': 'Anadyrský štandardný čas',
                            'daylight': 'Anadyrský letný čas'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabský čas',
                            'standard': 'Arabský štandardný čas',
                            'daylight': 'Arabský letný čas'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentínsky čas',
                            'standard': 'Argentínsky štandardný čas',
                            'daylight': 'Argentínsky letný čas'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Západoargentínsky čas',
                            'standard': 'Západoargentínsky štandardný čas',
                            'daylight': 'Západoargentínsky letný čas'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Arménsky čas',
                            'standard': 'Arménsky štandardný čas',
                            'daylight': 'Arménsky letný čas'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Čínsky čas',
                            'standard': 'Čínsky štandardný čas',
                            'daylight': 'Čínsky letný čas'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Choibalsanský čas',
                            'standard': 'Čojbalsanský štandardný čas',
                            'daylight': 'Choibalsanský letný čas'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Čas Vianočného ostrova'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Čas Kokosových ostrovov'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbijský čas',
                            'standard': 'Kolumbijský štandardný čas',
                            'daylight': 'Kolumbijský letný čas'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Čas Cookových ostrovov',
                            'standard': 'Štandardný čas Cookových ostrovov',
                            'daylight': 'Letný čas Cookových ostrovov'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubánsky čas',
                            'standard': 'Kubánsky štandardný čas',
                            'daylight': 'Kubánsky letný čas'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Čas Davisovej stanice'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Čas stanice Dumonta d\'Urvillea'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Východotimorský čas'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Čas Veľkonočného ostrova',
                            'standard': 'Štandardný čas Veľkonočného ostrova',
                            'daylight': 'Letný čas Veľkonočného ostrova'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekvádorský čas'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Stredoeurópsky čas',
                            'standard': 'Stredoeurópsky štandardný čas',
                            'daylight': 'Stredoeurópsky letný čas'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Východoeurópsky čas',
                            'standard': 'Východoeurópsky štandardný čas',
                            'daylight': 'Východoeurópsky letný čas'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Západoeurópsky čas',
                            'standard': 'Západoeurópsky štandardný čas',
                            'daylight': 'Západoeurópsky letný čas'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indický čas'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonžský čas',
                            'standard': 'Tonžský štandardný čas',
                            'daylight': 'Tonžský letný čas'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuukský čas'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkménsky čas',
                            'standard': 'Turkménsky štandardný čas',
                            'daylight': 'Turkménsky letný čas'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalský čas'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguajský čas',
                            'standard': 'Uruguajský štandardný čas',
                            'daylight': 'Uruguajský letný čas'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbecký čas',
                            'standard': 'Uzbecký štandardný čas',
                            'daylight': 'Uzbecký letný čas'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatský čas',
                            'standard': 'Vanuatský štandardný čas',
                            'daylight': 'Vanuatský letný čas'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburgský čas',
                            'standard': 'Jekaterinburgský štandardný čas',
                            'daylight': 'Jekaterinburský letný čas'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutský čas',
                            'standard': 'Jakutský štandardný čas',
                            'daylight': 'Jakutský letný čas'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Čas ostrovov Wallis a Futuna'
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
                            'standard': 'Volgogradský štandardný čas',
                            'daylight': 'Volgogradský letný čas'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostocký čas',
                            'standard': 'Vladivostocký štandardný čas',
                            'daylight': 'Vladivostocký letný čas'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelský čas'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Chovdský čas',
                            'standard': 'Chovdský štandardný čas',
                            'daylight': 'Chovdský letný čas'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongský čas',
                            'standard': 'Hongkongský štandardný čas',
                            'daylight': 'Hongkongský letný čas'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havajsko-aleutský čas',
                            'standard': 'Havajsko-aleutský štandardný čas',
                            'daylight': 'Havajsko-aleutský letný čas'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanský čas'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Štandardný čas Perzského zálivu'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Západogrónsky čas',
                            'standard': 'Západogrónsky štandardný čas',
                            'daylight': 'Západogrónsky letný čas'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Východogrónsky čas',
                            'standard': 'Východogrónsky štandardný čas',
                            'daylight': 'Východogrónsky letný čas'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichský čas'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Čas Gilbertových ostrovov'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruzínsky čas',
                            'standard': 'Gruzínsky štandardný čas',
                            'daylight': 'Gruzínsky letný čas'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambierský čas'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapágsky čas'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francúzsky južný a antarktický čas'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Čas Francúzskej Guyany'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidžijský čas',
                            'standard': 'Fidžijský štandardný čas',
                            'daylight': 'Fidžijský letný čas'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Čas Falklandských ostrovov',
                            'standard': 'Štandardný čas Falklandských ostrovov',
                            'daylight': 'Letný čas Falklandských ostrovov'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Stredoaustrálsky čas',
                            'standard': 'Stredoaustrálsky štandardný čas',
                            'daylight': 'Stredoaustrálsky letný čas'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Stredozápadný austrálsky čas',
                            'standard': 'Stredozápadný austrálsky štandardný čas',
                            'daylight': 'Stredozápadný austrálsky letný čas'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Východoaustrálsky čas',
                            'standard': 'Východoaustrálsky štandardný čas',
                            'daylight': 'Východoaustrálsky letný čas'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Západoaustrálsky čas',
                            'standard': 'Západoaustrálsky štandardný čas',
                            'daylight': 'Západoaustrálsky letný čas'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbajdžanský čas',
                            'standard': 'Azerbajdžanský štandardný čas',
                            'daylight': 'Azerbajdžanský letný čas'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorský čas',
                            'standard': 'Azorský štandardný čas',
                            'daylight': 'Azorský letný čas'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladéšsky čas',
                            'standard': 'Bangladéšsky štandardný čas',
                            'daylight': 'Bangladéšsky letný čas'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutánsky čas'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolívijský čas'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brazílsky čas',
                            'standard': 'Brazílsky štandardný čas',
                            'daylight': 'Brazílsky letný čas'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunejský čas'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdský čas',
                            'standard': 'Kapverdský štandardný čas',
                            'daylight': 'Kapverdský letný čas'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrský štandardný čas'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamský čas',
                            'standard': 'Chathamský štandardný čas',
                            'daylight': 'Chathamský letný čas'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Čilský čas',
                            'standard': 'Čilský štandardný čas',
                            'daylight': 'Čilský letný čas'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Čas Indického oceánu'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indočínsky čas'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Stredoindonézsky čas'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Východoindonézsky čas'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Západoindonézsky čas'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iránsky čas',
                            'standard': 'Iránsky štandardný čas',
                            'daylight': 'Iránsky letný čas'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutský čas',
                            'standard': 'Irkutský štandardný čas',
                            'daylight': 'Irkutský letný čas'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraelský čas',
                            'standard': 'Izraelský štandardný čas',
                            'daylight': 'Izraelský letný čas'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonský čas',
                            'standard': 'Japonský štandardný čas',
                            'daylight': 'Japonský letný čas'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamčatský čas',
                            'standard': 'Petropavlovsk-Kamčatský štandardný čas',
                            'daylight': 'Petropavlovsk-Kamčatskijský letný čas'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Východokazašský čas'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Západokazašský čas'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Kórejský čas',
                            'standard': 'Kórejský štandardný čas',
                            'daylight': 'Kórejský letný čas'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraeský čas'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarský čas',
                            'standard': 'Krasnojarský štandardný čas',
                            'daylight': 'Krasnojarský letný čas'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgizský čas'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Čas Rovníkových ostrovov'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Čas ostrova lorda Howa',
                            'standard': 'Štandardný čas ostrova lorda Howa',
                            'daylight': 'Letný čas ostrova lorda Howa'
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
                            'standard': 'Magadanský štandardný čas',
                            'daylight': 'Magadanský letný čas'
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
                            'standard': 'Markézsky čas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Čas Marshallových ostrovov'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Maurícijský čas',
                            'standard': 'Maurícijský štandardný čas',
                            'daylight': 'Maurícijský letný čas'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Čas Mawsonovej stanice'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulanbátarský čas',
                            'standard': 'Ulanbátarský štandardný čas',
                            'daylight': 'Ulanbátarský letný čas'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovský čas',
                            'standard': 'Moskovský štandardný čas',
                            'daylight': 'Moskovský letný čas'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mjanmarský čas'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Čas ostrova Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepálsky čas'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Novokaledónsky čas',
                            'standard': 'Novokaledónsky štandardný čas',
                            'daylight': 'Novokaledónsky letný čas'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Novozélandský čas',
                            'standard': 'Novozélandský štandardný čas',
                            'daylight': 'Novozélandský letný čas'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandský čas',
                            'standard': 'Newfoundlandský štandardný čas',
                            'daylight': 'Newfoundlandský letný čas'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Čas ostrova Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Čas Norfolkských ostrovov'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Čas ostrova Fernando de Noronha',
                            'standard': 'Štandardný čas ostrova Fernando de Noronha',
                            'daylight': 'Letný čas ostrovov Fernanda de Noronha'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibírsky čas',
                            'standard': 'Novosibirský štandardný čas',
                            'daylight': 'Novosibírsky letný čas'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omský čas',
                            'standard': 'Omský štandardný čas',
                            'daylight': 'Omský letný čas'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistanský čas',
                            'standard': 'Pakistanský štandardný čas',
                            'daylight': 'Pakistanský letný čas'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palauský čas'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Čas Papuy-Novej Guiney'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguajský čas',
                            'standard': 'Paraguajský štandardný čas',
                            'daylight': 'Paraguajský letný čas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peruánsky čas',
                            'standard': 'Peruánsky štandardný čas',
                            'daylight': 'Peruánsky letný čas'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipínsky čas',
                            'standard': 'Filipínsky štandardný čas',
                            'daylight': 'Filipínsky letný čas'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Čas Fénixových ostrovov'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Čas ostrovov Saint-Pierre a Miquelon',
                            'standard': 'Štandardný čas ostrovov Saint-Pierre a Miquelon',
                            'daylight': 'Letný čas ostrovov Saint-Pierre a Miquelon'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Čas Pitcairnovho ostrova'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapský čas'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
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
                                '8': 'aug',
                                '7': 'júl',
                                '6': 'jún',
                                '5': 'máj',
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
                                '8': 'augusta',
                                '7': 'júla',
                                '6': 'júna',
                                '5': 'mája',
                                '12': 'decembra',
                                '11': 'novembra',
                                '10': 'októbra',
                                '9': 'septembra',
                                '1': 'januára',
                                '2': 'februára',
                                '3': 'marca',
                                '4': 'apríla'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug',
                                '7': 'júl',
                                '6': 'jún',
                                '5': 'máj',
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
                                '8': 'august',
                                '7': 'júl',
                                '6': 'jún',
                                '5': 'máj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'október',
                                '9': 'september',
                                '1': 'január',
                                '2': 'február',
                                '3': 'marec',
                                '4': 'apríl'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'ut',
                                'wed': 'st',
                                'thu': 'št',
                                'fri': 'pi',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'U',
                                'wed': 'S',
                                'thu': 'Š',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Ne',
                                'mon': 'Po',
                                'tue': 'Ut',
                                'wed': 'St',
                                'thu': 'Št',
                                'fri': 'Pi',
                                'sat': 'So'
                            },
                            'wide': {
                                'sun': 'nedeľa',
                                'mon': 'pondelok',
                                'tue': 'utorok',
                                'wed': 'streda',
                                'thu': 'štvrtok',
                                'fri': 'piatok',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ne',
                                'mon': 'po',
                                'tue': 'ut',
                                'wed': 'st',
                                'thu': 'št',
                                'fri': 'pi',
                                'sat': 'so'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'U',
                                'wed': 'S',
                                'thu': 'Š',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Ne',
                                'mon': 'Po',
                                'tue': 'Ut',
                                'wed': 'St',
                                'thu': 'Št',
                                'fri': 'Pi',
                                'sat': 'So'
                            },
                            'wide': {
                                'sun': 'nedeľa',
                                'mon': 'pondelok',
                                'tue': 'utorok',
                                'wed': 'streda',
                                'thu': 'štvrtok',
                                'fri': 'piatok',
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
                                '1': '1. štvrťrok',
                                '2': '2. štvrťrok',
                                '3': '3. štvrťrok',
                                '4': '4. štvrťrok'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1Q',
                                '2': '2Q',
                                '3': '3Q',
                                '4': '4Q'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. štvrťrok',
                                '2': '2. štvrťrok',
                                '3': '3. štvrťrok',
                                '4': '4. štvrťrok'
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
                            '0': 'pred n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'pred n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'pred n.l.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.l.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd.M.y',
                        'short': 'd.M.y'
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
                            'yMMM': 'LLL y',
                            'yMEd': 'E d. M. y',
                            'yMd': 'd.M.y',
                            'yM': 'M.y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'Ed': 'E d.',
                            'd': 'd.',
                            'GyMMMd': 'd.M.y G',
                            'GyMMMEd': 'E, d. MMM y G',
                            'GyMMMMd': 'd. MMMM y G',
                            'h': 'h a',
                            'H': 'H',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMMd': 'd. MMMM y',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d. MMM y',
                            'yMMMd': 'd.M.y',
                            'hms': 'h:mm:ss a',
                            'Hm': 'H:mm',
                            'Ehm': 'E h:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
                            'Hms': 'H:mm:ss',
                            'M': 'L.',
                            'Md': 'd.M.',
                            'MEd': 'E, d.M.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM.',
                            'MMMEd': 'E, d. MMM.',
                            'MMMMd': 'd. MMMM',
                            'MMMMEd': 'E, d. MMMM',
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
                                'd': 'E, d. - E, d. MMM',
                                'M': 'E, d. MMM - E, d. MMM'
                            },
                            'MMMd': {
                                'd': 'd. - d. MMM',
                                'M': 'd. MMM - d. MMM'
                            },
                            'MMM': {
                                'M': 'LLL – LLL'
                            },
                            'MEd': {
                                'd': 'E, d.M. - E, d.M.',
                                'M': 'E, d.M. - E, d.M.'
                            },
                            'Md': {
                                'd': 'd.M. - d.M.',
                                'M': 'd.M. - d.M.'
                            },
                            'M': {
                                'M': 'M. – M.'
                            },
                            'Hv': {
                                'H': 'HH – HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h – h a v'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'y': {
                                'y': 'y - y'
                            },
                            'yM': {
                                'M': 'M.y - M.y',
                                'y': 'M.y - M.y'
                            },
                            'yMd': {
                                'd': 'd.M.y - d.M.y',
                                'M': 'd.M.y - d.M.y',
                                'y': 'd.M.y - d.M.y'
                            },
                            'yMEd': {
                                'd': 'E, d.M.y - E, d.M.y',
                                'M': 'E, d.M.y - E, d.M.y',
                                'y': 'E, d.M.y - E, d.M.y'
                            },
                            'yMMM': {
                                'M': 'LLL - LLL y',
                                'y': 'LLL y - LLL y'
                            },
                            'yMMMd': {
                                'd': 'd. - d. MMM y',
                                'M': 'd. MMM - d. MMM y',
                                'y': 'd. MMM y - d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. - E, d. MMM y',
                                'M': 'E, d. MMM - E, d. MMM y',
                                'y': 'E, d. MMM y - E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL - LLLL y',
                                'y': 'LLLL y - LLLL y'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'Hmv': {
                                'H': 'H:mm – H:mm v',
                                'm': 'H:mm – H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm - h:mm a v',
                                'm': 'h:mm - h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm – H:mm',
                                'm': 'H:mm – H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm - h:mm a',
                                'm': 'h:mm - h:mm a'
                            },
                            'H': {
                                'H': 'HH – HH'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h – h a'
                            },
                            'd': {
                                'd': 'd. – d.'
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
