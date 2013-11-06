/* AstroDate Language: sv
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
        AstroDate.lang('sv', {
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
                            'exemplarCity': 'Pitcairnöarna'
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
                            'exemplarCity': 'Galápagos'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambieröarna'
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
                            'exemplarCity': 'Wallisön'
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
                            'exemplarCity': 'Johnstonatollen'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham'
                        },
                        'Easter': {
                            'exemplarCity': 'Påskön'
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
                            'exemplarCity': 'Marquesasöarna'
                        },
                        'Midway': {
                            'exemplarCity': 'Midwayöarna'
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
                            'exemplarCity': 'Maldiverna'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelenöarna'
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
                            'exemplarCity': 'Chagosöarna'
                        },
                        'Christmas': {
                            'exemplarCity': 'Julön'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokosöarna'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komorerna'
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
                            'exemplarCity': 'okänd stad'
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
                            'exemplarCity': 'Amundsen-Scott-basen'
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
                            'exemplarCity': 'Qaanaaq'
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
                            'exemplarCity': 'Caymanöarna'
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
                                'exemplarCity': 'Río Gallegos'
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
                            'exemplarCity': 'Adak Island'
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
                            'exemplarCity': 'Jamaica'
                        },
                        'Jujuy': {
                            'exemplarCity': 'San Salvador de Jujuy'
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
                            'exemplarCity': 'Lower Prince’s Quarter'
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
                            'exemplarCity': 'Fernando de Noronha'
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
                            'exemplarCity': 'Santarém'
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
                            'exemplarCity': 'S:t Barthélemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'S:t Johns'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'S:t Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'S:t Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'S:t Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'S:t Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Grytviken'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'S:t Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorerna'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanarieöarna'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Torshamn'
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
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'brittisk sommartid'
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
                            'exemplarCity': 'Bryssel'
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
                            'exemplarCity': 'Aten'
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
                            'exemplarCity': 'Uzjhorod'
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
                            'exemplarCity': 'Vatikanen'
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
                            'exemplarCity': 'Helsingfors'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'irländsk sommartid'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Köpenhamn'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chișinău'
                        },
                        'Busingen': {
                            'exemplarCity': 'Büsingen am Hochrhein'
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
                            'exemplarCity': 'El-Aaiún'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Djibouti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es-Salaam'
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
                            'exemplarCity': 'Asmera'
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
                            'exemplarCity': 'Söul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sachalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh-staden'
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
                            'exemplarCity': 'Dusjanbe'
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
                            'exemplarCity': 'Chovd'
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
                            'exemplarCity': 'Asjchabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqtöbe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
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
                            'exemplarCity': 'Bisjkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Tjojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamtjatka'
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
                            'exemplarCity': 'Manilla'
                        },
                        'Muscat': {
                            'exemplarCity': 'Muskat'
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
                            'generic': 'samoansk tid',
                            'standard': 'samoansk normaltid',
                            'daylight': 'samoansk sommartid'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samaratid',
                            'standard': 'Samaranormaltid',
                            'daylight': 'Samarasommartid'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalintid',
                            'standard': 'Sachalinnormaltid',
                            'daylight': 'Sachalinsommartid'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotheratid'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réuniontid'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylordatid',
                            'standard': 'Qyzylordanormaltid',
                            'daylight': 'Qyzylordasommartid'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapetid'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairntid'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'S:t Pierre och Miquelontid',
                            'standard': 'S:t Pierre och Miquelon, normaltid',
                            'daylight': 'S:t Pierre och Miquelon, sommartid'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Enderburytid'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'filippinsk tid',
                            'standard': 'filippinsk normaltid',
                            'daylight': 'filippinsk sommartid'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'peruansk tid',
                            'standard': 'peruansk normaltid',
                            'daylight': 'peruansk sommartid'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'paraguayansk tid',
                            'standard': 'paraguayansk normaltid',
                            'daylight': 'paraguayansk sommartid'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua Nya Guineas tid'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palautid'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'pakistansk tid',
                            'standard': 'pakistansk normaltid',
                            'daylight': 'pakistansk sommartid'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsktid',
                            'standard': 'Omsknormaltid',
                            'daylight': 'Omsksommartid'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsktid',
                            'standard': 'Novosibirsknormaltid',
                            'daylight': 'Novosibirsksommartid'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Nordmarianernas tid'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronhatid',
                            'standard': 'Fernando de Noronhanormaltid',
                            'daylight': 'Fernando de Noronhasommartid'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolköns tid'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuetid'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandtid',
                            'standard': 'Newfoundland, normaltid',
                            'daylight': 'Newfoundland, sommartid'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'nyzeeländsk tid',
                            'standard': 'nyzeeländsk normaltid',
                            'daylight': 'nyzeeländsk sommartid'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nya Kaledonientid',
                            'standard': 'Nya Kaledoniennormaltid',
                            'daylight': 'Nya Kaledoniensommartid'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'centralnordamerikansk tid',
                            'standard': 'centralnordamerikansk normaltid',
                            'daylight': 'centralnordamerikansk sommartid'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'östnordamerikansk tid',
                            'standard': 'Eastern, normaltid',
                            'daylight': 'Eastern, sommartid'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Klippiga Bergentid',
                            'standard': 'Mountain, normaltid',
                            'daylight': 'Mountain, sommartid'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'västnordamerikansk tid',
                            'standard': 'Pacific, normaltid',
                            'daylight': 'Pacific, sommartid'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrtid',
                            'standard': 'Anadyrnormaltid',
                            'daylight': 'Anadyrsommartid'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtautid',
                            'standard': 'Aqtaunormaltid',
                            'daylight': 'Aqtausommartid'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtöbetid',
                            'standard': 'Aqtöbenormaltid',
                            'daylight': 'Aqtöbesommartid'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kap Verdetid',
                            'standard': 'Kap Verdenormaltid',
                            'daylight': 'Kap Verdesommartid'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Caseytid'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrotid'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamtid',
                            'standard': 'Chathamnormaltid',
                            'daylight': 'Chathamsommartid'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'chilensk tid',
                            'standard': 'chilensk normaltid',
                            'daylight': 'chilensk sommartid'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'kinesisk tid',
                            'standard': 'kinesisk normaltid',
                            'daylight': 'kinesisk sommartid'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Tjojbalsantid',
                            'standard': 'Tjojbalsannormaltid',
                            'daylight': 'Tjojbalsansommartid'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Julöns tid'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Keelingöarnas tid'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'colombiansk tid',
                            'standard': 'colombiansk normaltid',
                            'daylight': 'colombiansk sommartid'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cooköarnas tid',
                            'standard': 'Cooköarnas normaltid',
                            'daylight': 'Cooköarnas sommartid'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'kubansk tid',
                            'standard': 'kubansk normaltid',
                            'daylight': 'kubansk sommartid'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davistid'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont d’Urville-tid'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'östtimorisk tid'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Påsköns tid',
                            'standard': 'Påsköns normaltid',
                            'daylight': 'Påsköns sommartid'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'ecuadoriansk tid'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'centraleuropeisk tid',
                            'standard': 'centraleuropeisk normaltid',
                            'daylight': 'centraleuropeisk sommartid'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'östeuropeisk tid',
                            'standard': 'östeuropeisk normaltid',
                            'daylight': 'östeuropeisk sommartid'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'västeuropeisk tid',
                            'standard': 'västeuropeisk normaltid',
                            'daylight': 'västeuropeisk sommartid'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandsöarnas tid',
                            'standard': 'Falklandsöarnas normaltid',
                            'daylight': 'Falklandsöarnas sommartid'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fijitid',
                            'standard': 'Fijinormaltid',
                            'daylight': 'Fijisommartid'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Franska Guyanatid'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Franska Sydterritoriernas tid'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galápagostid'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelautid'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongatid',
                            'standard': 'Tonganormaltid',
                            'daylight': 'Tongasommmartid'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuktid'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'turkmensk tid',
                            'standard': 'turkmensk normaltid',
                            'daylight': 'turkmensk sommartid'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalutid'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'uruguayansk tid',
                            'standard': 'uruguayansk normaltid',
                            'daylight': 'uruguayansk sommartid'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'uzbekisk tid',
                            'standard': 'uzbekisk normaltid',
                            'daylight': 'uzbekisk sommartid'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatutid',
                            'standard': 'Vanuatunormaltid',
                            'daylight': 'Vanuatusommartid'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburgtid',
                            'standard': 'Jekaterinburgnormaltid',
                            'daylight': 'Jekaterinburgsommartid'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutsktid',
                            'standard': 'Jakutsknormaltid',
                            'daylight': 'Jakutsksommartid'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis- och Futunaöarnas tid'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wakeöarnas tid'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostoktid'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogradtid',
                            'standard': 'Volgogradnormaltid',
                            'daylight': 'Volgogradsommartid'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostoktid',
                            'standard': 'Vladivostoknormaltid',
                            'daylight': 'Vladivostoksommartid'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'venezuelansk tid'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadzjikistantid'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipeitid',
                            'standard': 'Taipeinormaltid',
                            'daylight': 'Taipeisommartid'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahititid'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowatid'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamtid'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'sydgeorgisk tid'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonöarnas tid'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporetid'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellernatid'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamtid'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'västgrönländsk tid',
                            'standard': 'västgrönländsk normaltid',
                            'daylight': 'västgrönländsk sommartid'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'östgrönländsk tid',
                            'standard': 'östgrönländsk normaltid',
                            'daylight': 'östgrönländsk sommartid'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichtid'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Kiribatitid'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'georgisk tid',
                            'standard': 'georgisk normaltid',
                            'daylight': 'georgisk sommartid'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambiertid'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonastid',
                            'standard': 'Amazonasnormaltid',
                            'daylight': 'Amazonassommartid'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'västbrasiliansk tid',
                            'standard': 'västbrasiliansk normaltid',
                            'daylight': 'västbrasiliansk sommartid'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'afghansk tid'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'centralafrikansk tid'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'östafrikansk tid'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'sydafrikansk tid'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'västafrikansk tid',
                            'standard': 'västafrikansk normaltid',
                            'daylight': 'västafrikansk sommartid'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaskatid',
                            'standard': 'Alaska, normaltid',
                            'daylight': 'Alaska, sommartid'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatytid',
                            'standard': 'Almatynormaltid',
                            'daylight': 'Almatysommartid'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'saudiarabisk tid',
                            'standard': 'saudiarabisk normaltid',
                            'daylight': 'saudiarabisk sommartid'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'östargentinsk tid',
                            'standard': 'östargentinsk normaltid',
                            'daylight': 'östargentinsk sommartid'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'västargentinsk tid',
                            'standard': 'västargentinsk normaltid',
                            'daylight': 'västargentinsk sommartid'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'armenisk tid',
                            'standard': 'armenisk normaltid',
                            'daylight': 'armenisk sommartid'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'nordamerikansk atlanttid',
                            'standard': 'Atlantic, normaltid',
                            'daylight': 'Atlantic, sommartid'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'centralaustralisk tid',
                            'standard': 'centralaustralisk normaltid',
                            'daylight': 'centralaustralisk sommartid'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'västcentralaustralisk tid',
                            'standard': 'västcentralaustralisk normaltid',
                            'daylight': 'västcentralaustralisk sommartid'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'östaustralisk tid',
                            'standard': 'östaustralisk normaltid',
                            'daylight': 'östaustralisk sommartid'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'västaustralisk tid',
                            'standard': 'västaustralisk normaltid',
                            'daylight': 'västaustralisk sommartid'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'azerbajdzjansk tid',
                            'standard': 'azerbajdzjansk normaltid',
                            'daylight': 'azerbajdzjansk sommartid'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'azorisk tid',
                            'standard': 'azorisk normaltid',
                            'daylight': 'azorisk sommartid'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'bangladeshisk tid',
                            'standard': 'bangladeshisk normaltid',
                            'daylight': 'bangladeshisk sommartid'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'bhutansk tid'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'boliviansk tid'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasiliatid',
                            'standard': 'Brasilianormaltid',
                            'daylight': 'Brasiliasommartid'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Bruneitid'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Persiska vikentid'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanatid'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Honolulutid',
                            'standard': 'Honolulunormaltid',
                            'daylight': 'Honolulusommartid'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongtid',
                            'standard': 'Hongkongnormaltid',
                            'daylight': 'Hongkongsommartid'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Chovdtid',
                            'standard': 'Hovdnormaltid',
                            'daylight': 'Hovdsommartid'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'indisk tid'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Brittiska Indiska oceanöarnas tid'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'indokinesisk tid'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'centralindonesisk tid'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'östindonesisk tid'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'västindonesisk tid'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'iransk tid',
                            'standard': 'iransk normaltid',
                            'daylight': 'iransk sommartid'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsktid',
                            'standard': 'Irkutsknormaltid',
                            'daylight': 'Irkutsksommartid'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'israelisk tid',
                            'standard': 'israelisk normaltid',
                            'daylight': 'israelisk sommartid'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'japansk tid',
                            'standard': 'japansk normaltid',
                            'daylight': 'japansk sommartid'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Kamtjatkatid',
                            'standard': 'Kamtjatkanormaltid',
                            'daylight': 'Kamtjatkasommartid'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'östkazakstansk tid'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'västkazakstansk tid'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'koreansk tid',
                            'standard': 'koreansk normaltid',
                            'daylight': 'koreansk sommartid'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraetid'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsktid',
                            'standard': 'Krasnojarsknormaltid',
                            'daylight': 'Krasnojarsksommartid'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'kirgizisk tid'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Sri Lankatid'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Lineöarnas tid'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howetid',
                            'standard': 'Lord Howenormaltid',
                            'daylight': 'Lord Howesommartid'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macautid',
                            'standard': 'Macaunormaltid',
                            'daylight': 'Macausommartid'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarietid'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadantid',
                            'standard': 'Magadannormaltid',
                            'daylight': 'Magadansommartid'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'malaysisk tid'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivernatid'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesastid'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshallöarnas tid'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiustid',
                            'standard': 'Mauritiusnormaltid',
                            'daylight': 'Mauritiussommartid'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsontid'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulaanbaatar-tid',
                            'standard': 'Ulaanbaatar-normaltid',
                            'daylight': 'Ulaanbaatar-sommartid'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskvatid',
                            'standard': 'Moskvanormaltid',
                            'daylight': 'Moskvasommartid'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'burmesisk tid'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurutid'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'nepalesisk tid'
                        }
                    }
                },
                'hourFormat': '+HH:mm;−HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}tid',
                'regionFormat-type-daylight': '{0} (sommartid)',
                'regionFormat-type-standard': '{0} (normaltid)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
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
                                '8': 'augusti',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januari',
                                '2': 'februari',
                                '3': 'mars',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Aug',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'Maj',
                                '12': 'Dec',
                                '11': 'Nov',
                                '10': 'Okt',
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
                                '8': 'Augusti',
                                '7': 'Juli',
                                '6': 'Juni',
                                '5': 'Maj',
                                '12': 'December',
                                '11': 'November',
                                '10': 'Oktober',
                                '9': 'September',
                                '1': 'Januari',
                                '2': 'Februari',
                                '3': 'Mars',
                                '4': 'April'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'sön',
                                'mon': 'mån',
                                'tue': 'tis',
                                'wed': 'ons',
                                'thu': 'tors',
                                'fri': 'fre',
                                'sat': 'lör'
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
                                'sun': 'sö',
                                'mon': 'må',
                                'tue': 'ti',
                                'wed': 'on',
                                'thu': 'to',
                                'fri': 'fr',
                                'sat': 'lö'
                            },
                            'wide': {
                                'sun': 'söndag',
                                'mon': 'måndag',
                                'tue': 'tisdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'lördag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Sön',
                                'mon': 'Mån',
                                'tue': 'Tis',
                                'wed': 'Ons',
                                'thu': 'Tor',
                                'fri': 'Fre',
                                'sat': 'Lör'
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
                                'sun': 'Sö',
                                'mon': 'Må',
                                'tue': 'Ti',
                                'wed': 'On',
                                'thu': 'To',
                                'fri': 'Fr',
                                'sat': 'Lö'
                            },
                            'wide': {
                                'sun': 'Söndag',
                                'mon': 'Måndag',
                                'tue': 'Tisdag',
                                'wed': 'Onsdag',
                                'thu': 'Torsdag',
                                'fri': 'Fredag',
                                'sat': 'Lördag'
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
                                '1': '1:a kvartalet',
                                '2': '2:a kvartalet',
                                '3': '3:e kvartalet',
                                '4': '4:e kvartalet'
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
                                '1': '1:a kvartalet',
                                '2': '2:a kvartalet',
                                '3': '3:e kvartalet',
                                '4': '4:e kvartalet'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'FM',
                                'pm': 'EM'
                            },
                            'narrow': {
                                'am': 'f',
                                'pm': 'e'
                            },
                            'wide': {
                                'am': 'fm',
                                'pm': 'em'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'fm',
                                'pm': 'em'
                            },
                            'narrow': {
                                'am': 'f.m.',
                                'pm': 'e.m.'
                            },
                            'wide': {
                                'am': 'förmiddag',
                                'pm': 'eftermiddag'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'före Kristus',
                            '0-alt-variant': 'före västerländsk tideräkning',
                            '1': 'efter Kristus',
                            '1-alt-variant': 'västerländsk tideräkning'
                        },
                        'eraAbbr': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'f.v.t.',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'v.t.'
                        },
                        'eraNarrow': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'fvt',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'vt'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE\'en\' \'den\' d:\'e\' MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'y-MM-dd'
                    },
                    'timeFormats': {
                        'full': '\'kl\'. HH:mm:ss zzzz',
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
                            'yMM': 'y-MM',
                            'yMEd': 'E, y-MM-dd',
                            'yMd': 'y-MM-dd',
                            'yM': 'y-MM',
                            'y': 'y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'yQQQQ': 'y QQQQ',
                            'yQQQ': 'y QQQ',
                            'yMMMEd': 'E d MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMM': 'MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMd': 'd/M',
                            'MMdd': 'dd/MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'MMMMd': 'd:\'e\' MMMM',
                            'MMMMEd': 'E d:\'e\' MMMM',
                            'ms': 'mm:ss'
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
                                'd': 'E d – E d MMM',
                                'M': 'E d MMM – E d MMM'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E d/M – E d/M',
                                'M': 'E d/M – E d/M'
                            },
                            'Md': {
                                'd': 'd–d/M',
                                'M': 'd/M – d/M'
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
                                'M': 'y-MM – MM',
                                'y': 'y-MM – y-MM'
                            },
                            'yMd': {
                                'd': 'y-MM-dd – dd',
                                'M': 'y-MM-dd – MM-dd',
                                'y': 'y-MM-dd – y-MM-dd'
                            },
                            'yMEd': {
                                'd': 'E, y-MM-dd – E, y-MM-dd',
                                'M': 'E, y-MM-dd – E, y-MM-dd',
                                'y': 'E, y-MM-dd – E, y-MM-dd'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM–d MMM y',
                                'y': 'd MMM y–d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E dd MMM–E dd MMM y',
                                'M': 'E dd MMM–E dd MMM y',
                                'y': 'E dd MMM y–E dd MMM y'
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
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
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
                                'd': 'd–d'
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
