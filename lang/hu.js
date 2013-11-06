/* AstroDate
 * Language: hu
 * ca-gregorian: 24r9317
 * timeZoneNames: 24r9317
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
        AstroDate.lang('hu', {
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
                            'exemplarCity': 'Ponape-szigetek'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Pitcairn-szigetek'
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
                            'exemplarCity': 'Galapagos-szigetek'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambier-szigetek'
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
                            'exemplarCity': 'Wake-sziget'
                        },
                        'Truk': {
                            'exemplarCity': 'Truk-szigetek'
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
                            'exemplarCity': 'Kiritimati-sziget'
                        },
                        'Johnston': {
                            'exemplarCity': 'Johnston'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham-szigetek'
                        },
                        'Easter': {
                            'exemplarCity': 'Húsvét-szigetek'
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
                            'exemplarCity': 'Fidzsi'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Kosrae-szigetek'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Kwajalein-zátony'
                        },
                        'Majuro': {
                            'exemplarCity': 'Majuro-zátony'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Marquesas-szigetek'
                        },
                        'Midway': {
                            'exemplarCity': 'Midway-szigetek'
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
                            'exemplarCity': 'Maldív-szigetek'
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
                            'exemplarCity': 'Karácsony-sziget'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kókusz-sziget'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komoró'
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
                            'exemplarCity': 'Ismeretlen város'
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
                            'exemplarCity': 'Vosztok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Déli-sark'
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
                            'exemplarCity': 'Kajmán-szigetek'
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
                            'exemplarCity': 'Eirunepé'
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
                            'exemplarCity': 'Mexikóváros'
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
                                'exemplarCity': 'Beulah, Észak-Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Észak-Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Középső, Észak-Dakota'
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
                            'exemplarCity': 'Río Branco'
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
                            'exemplarCity': 'Déli-Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavík'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Szent Ilona'
                        },
                        'Azores': {
                            'exemplarCity': 'Azori-szigetek'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanári-szigetek'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Zöld-Foki Szigetek'
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
                            'exemplarCity': 'Moszkva'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monaco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minszk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Mariehamn'
                        },
                        'Malta': {
                            'exemplarCity': 'Málta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madrid'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Brit nyári idő'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisszabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kijev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kalinyingrád'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Isztanbul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Man-sziget'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brüsszel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Pozsony'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrád'
                        },
                        'Athens': {
                            'exemplarCity': 'Athén'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amszterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Szimferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Szófia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallin'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ungvár'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporozsje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zágráb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsó'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgográd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilniusz'
                        },
                        'Vienna': {
                            'exemplarCity': 'Bécs'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikán'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Szarajevó'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Szamara'
                        },
                        'Rome': {
                            'exemplarCity': 'Róma'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Prága'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Párizs'
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
                                'daylight': 'Ír nyári idő'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Koppenhága'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
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
                            'exemplarCity': 'Kartúm'
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
                            'exemplarCity': 'El-Ajún'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Dzsibuti'
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
                            'exemplarCity': 'Malabó'
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
                            'exemplarCity': 'Tunisz'
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
                            'exemplarCity': 'Kairó'
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
                            'exemplarCity': 'Addisz-Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Algír'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Sanghaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Szöul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Szamarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Szahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Si Minh-város'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijád'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kizilorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Phenjan'
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
                            'exemplarCity': 'Omszk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novoszibirszk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Csungking'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damaszkusz'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dháka'
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
                            'exemplarCity': 'Gáza'
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
                            'exemplarCity': 'Irkutszk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulánbátor'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Ürümqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Uszty-Nyera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientián'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vlagyivosztok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutszk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekatyerinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jereván'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teherán'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbiliszi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taskent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tajpej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Szingapúr'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzsálem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktöbe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadir'
                        },
                        'Amman': {
                            'exemplarCity': 'Ammán'
                        },
                        'Almaty': {
                            'exemplarCity': 'Alma-Ata'
                        },
                        'Aden': {
                            'exemplarCity': 'Áden'
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
                            'exemplarCity': 'Bejrút'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Biskek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Csojbalszan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamcsatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karacsi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kasgár'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handiga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasznojarszk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kucseng'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuvait'
                        },
                        'Macau': {
                            'exemplarCity': 'Makaó'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadán'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makasar'
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
                            'exemplarCity': 'Novokuznyeck'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelle-szigeteki idő'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Szamoai idő',
                            'standard': 'Szamoai zónaidő',
                            'daylight': 'Szamoai nyári idő'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Szamarai idő',
                            'standard': 'Szamarai zónaidő',
                            'daylight': 'Szamarai nyári idő'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Szahalini idő',
                            'standard': 'Szahalini zónaidő',
                            'daylight': 'Szahalini nyári idő'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotherai idő'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Réunioni idő'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylordai idő',
                            'standard': 'Qyzylordai zónaidő',
                            'daylight': 'Qyzylordai nyári idő'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapei idő'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairni idő'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre és Miquelon-i idő',
                            'standard': 'Saint Pierre és Miquelon-i zónaidő',
                            'daylight': 'Saint Pierre és Miquelon-i nyári idő'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenix-szigeteki idő'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Fülöp-szigeteki idő',
                            'standard': 'Fülöp-szigeteki zónaidő',
                            'daylight': 'Fülöp-szigeteki nyári idő'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Perui idő',
                            'standard': 'Perui zónaidő',
                            'daylight': 'Perui nyári idő'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayi idő',
                            'standard': 'Paraguayi zónaidő',
                            'daylight': 'Paraguayi nyári idő'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Pápua új-guineai idő'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palaui idő'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakisztáni idő',
                            'standard': 'Pakisztáni zónaidő',
                            'daylight': 'Pakisztáni nyári idő'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omszki idő',
                            'standard': 'Omszki zónaidő',
                            'daylight': 'Omszki nyári idő'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novoszibirszki idő',
                            'standard': 'Novoszibirszki zónaidő',
                            'daylight': 'Novoszibirszki nyári idő'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Észak-mariana-szigeteki idő'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha-i idő',
                            'standard': 'Fernando de Noronha-i zónaidő',
                            'daylight': 'Fernando de Noronha-i nyári idő'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk-szigeteki idő'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuei idő'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Új-fundlandi idő',
                            'standard': 'Új-fundlandi zónaidő',
                            'daylight': 'Új-fundlandi nyári idő'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazóniai idő',
                            'standard': 'Amazóniai zónaidő',
                            'daylight': 'Amazóniai nyári idő'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Középső államokbeli idő',
                            'standard': 'Középső államokbeli zónaidő',
                            'daylight': 'Középső államokbeli nyári idő'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Keleti államokbeli idő',
                            'standard': 'Keleti államokbeli zónaidő',
                            'daylight': 'Keleti államokbeli nyári idő'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hegyvidéki idő',
                            'standard': 'Hegyvidéki zónaidő',
                            'daylight': 'Hegyvidéki nyári idő'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Csendes-óceáni idő',
                            'standard': 'Csendes-óceáni zónaidő',
                            'daylight': 'Csendes-óceáni nyári idő'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadiri idő',
                            'standard': 'Anadíri zónaidő',
                            'daylight': 'Anadíri nyári idő'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtaui idő',
                            'standard': 'Aqtaui zónaidő',
                            'daylight': 'Aqtaui nyári idő'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtobei idő',
                            'standard': 'Aqtobei zónaidő',
                            'daylight': 'Aqtobei nyári idő'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Zöld-foki-szigeteki idő',
                            'standard': 'Zöld-foki-szigeteki zónaidő',
                            'daylight': 'Zöld-foki-szigeteki nyári idő'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrói idő'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathami idő',
                            'standard': 'Chathami zónaidő',
                            'daylight': 'Chathami nyári idő'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilei idő',
                            'standard': 'Chilei zónaidő',
                            'daylight': 'Chilei nyári idő'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kínai idő',
                            'standard': 'Kínai zónaidő',
                            'daylight': 'Kínai nyári idő'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Csojbalszani idő',
                            'standard': 'Csojbalszani zónaidő',
                            'daylight': 'Csojbalszani nyári idő'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Karácsony-szigeti idő'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Kókusz-szigeteki idő'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbiai idő',
                            'standard': 'Kolumbiai zónaidő',
                            'daylight': 'Kolumbiai nyári idő'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cook-szigeteki idő',
                            'standard': 'Cook-szigeteki zónaidő',
                            'daylight': 'Cook-szigeteki fél nyári idő'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubai idő',
                            'standard': 'Kubai zónaidő',
                            'daylight': 'Kubai nyári idő'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davisi idő'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville-i idő'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Kelet-timori idő'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Húsvét-szigeteki idő',
                            'standard': 'Húsvét-szigeteki zónaidő',
                            'daylight': 'Húsvét-szigeteki nyári idő'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadori idő'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Közép-európai idő',
                            'standard': 'Közép-európai zónaidő',
                            'daylight': 'Közép-európai nyári idő'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Kelet-európai idő',
                            'standard': 'Kelet-európai zónaidő',
                            'daylight': 'Kelet-európai nyári idő'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Nyugat-európai idő',
                            'standard': 'Nyugat-európai zónaidő',
                            'daylight': 'Nyugat-európai nyári idő'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falkland-szigeteki idő',
                            'standard': 'Falkland-szigeteki zónaidő',
                            'daylight': 'Falkland-szigeteki nyári idő'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidzsi idő',
                            'standard': 'Fidzsi zónaidő',
                            'daylight': 'Fidzsi nyári idő'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Francia-guianai idő'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francia déli és antarktikus idő'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagosi idő'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelaui idő'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongai idő',
                            'standard': 'Tongai zónaidő',
                            'daylight': 'Tongai nyári idő'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Truki idő'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Türkmenisztáni idő',
                            'standard': 'Türkmenisztáni zónaidő',
                            'daylight': 'Türkmenisztáni nyári idő'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalui idő'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayi idő',
                            'standard': 'Uruguayi zónaidő',
                            'daylight': 'Uruguayi nyári idő'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Üzbegisztáni idő',
                            'standard': 'Üzbegisztáni zónaidő',
                            'daylight': 'Üzbegisztáni nyári idő'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatui idő',
                            'standard': 'Vanuatui zónaidő',
                            'daylight': 'Vanuatui nyári idő'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekatyerinburgi idő',
                            'standard': 'Jekatyerinburgi zónaidő',
                            'daylight': 'Jekatyerinburgi nyári idő'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutszki idő',
                            'standard': 'Jakutszki zónaidő',
                            'daylight': 'Jakutszki nyári idő'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis és futunai idő'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake-szigeti idő'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vosztoki idő'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgográdi idő',
                            'standard': 'Volgográdi zónaidő',
                            'daylight': 'Volgográdi nyári idő'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vlagyivosztoki idő',
                            'standard': 'Vlagyivosztoki zónaidő',
                            'daylight': 'Vlagyivosztoki nyári idő'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelai idő'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tádzsikisztáni idő'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei idő',
                            'standard': 'Taipei zónaidő',
                            'daylight': 'Taipei nyári idő'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti idő'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowai idő'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Szurinámi idő'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Dél-georgiai idő'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salamon-szigeteki idő'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Szingapúri zónaidő'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Öbölbeli zónaidő'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guami zónaidő'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Nyugat-grönlandi idő',
                            'standard': 'Nyugat-grönlandi zónaidő',
                            'daylight': 'Nyugat-grönlandi nyári idő'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Kelet-grönlandi idő',
                            'standard': 'Kelet-grönlandi zónaidő',
                            'daylight': 'Kelet-grönlandi nyári idő'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichi középidő'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbert-szigeteki idő'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Grúz idő',
                            'standard': 'Grúz zónaidő',
                            'daylight': 'Grúz nyári idő'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambieri idő'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre idő',
                            'standard': 'Acre zónaidő',
                            'daylight': 'Acre nyári idő'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganisztáni idő'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Közép-afrikai idő'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Kelet-afrikai idő'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Dél-afrikai idő'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Nyugat-afrikai idő',
                            'standard': 'Nyugat-afrikai zónaidő',
                            'daylight': 'Nyugat-afrikai nyári idő'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaszkai idő',
                            'standard': 'Alaszkai zónaidő',
                            'daylight': 'Alaszkai nyári idő'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almati idő',
                            'standard': 'Almati zónaidő',
                            'daylight': 'Almati nyári idő'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arab idő',
                            'standard': 'Arab zónaidő',
                            'daylight': 'Arab nyári idő'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentínai idő',
                            'standard': 'Argentínai zónaidő',
                            'daylight': 'Argentínai nyári idő'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Nyugat-argentínai idő',
                            'standard': 'Nyugat-argentínai zónaidő',
                            'daylight': 'Nyugat-argentínai nyári idő'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Örmény idő',
                            'standard': 'Örmény zónaidő',
                            'daylight': 'Örmény nyári idő'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlanti-óceáni idő',
                            'standard': 'Atlanti-óceáni zónaidő',
                            'daylight': 'Atlanti-óceáni nyári idő'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Közép-ausztráliai idő',
                            'standard': 'Ausztrál középső zónaidő',
                            'daylight': 'Ausztrál középső nyári idő'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Ausztrál középső nyugati idő',
                            'standard': 'Ausztrál középső nyugati zónaidő',
                            'daylight': 'Ausztrál középső nyugati nyári idő'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Kelet-ausztrál idő',
                            'standard': 'Ausztrál keleti zónaidő',
                            'daylight': 'Ausztrál keleti nyári idő'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Nyugat-ausztrál idő',
                            'standard': 'Ausztrál nyugati zónaidő',
                            'daylight': 'Ausztrál nyugati nyári idő'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbajdzsáni idő',
                            'standard': 'Azerbajdzsáni zónaidő',
                            'daylight': 'Azerbajdzsáni nyári idő'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azori idő',
                            'standard': 'Azori zónaidő',
                            'daylight': 'Azori nyári idő'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladesi idő',
                            'standard': 'Bangladesi zónaidő',
                            'daylight': 'Bangladesi nyári idő'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Butáni idő'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolíviai idő'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brazíliai idő',
                            'standard': 'Brazíliai zónaidő',
                            'daylight': 'Brazíliai nyári idő'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam-i idő'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanai idő'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-aleuti idő',
                            'standard': 'Hawaii-aleuti zónaidő',
                            'daylight': 'Hawaii-aleuti nyári idő'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongi idő',
                            'standard': 'Hongkongi zónaidő',
                            'daylight': 'Hongkongi nyári idő'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdi idő',
                            'standard': 'Hovdi zónaidő',
                            'daylight': 'Hovdi nyári idő'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indiai zónaidő'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indiai-óceáni idő'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokínai idő'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Közép-indonéziai idő'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Kelet-indonéziai idő'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Nyugat-indonéziai idő'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iráni idő',
                            'standard': 'Iráni zónaidő',
                            'daylight': 'Iráni nyári idő'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutszki idő',
                            'standard': 'Irkutszki zónaidő',
                            'daylight': 'Irkutszki nyári idő'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraeli idő',
                            'standard': 'Izraeli zónaidő',
                            'daylight': 'Izraeli nyári idő'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japán idő',
                            'standard': 'Japán zónaidő',
                            'daylight': 'Japán nyári idő'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovszk-kamcsatkai idő',
                            'standard': 'Petropavlovszk-kamcsatkai zónaidő',
                            'daylight': 'Petropavlovszk-kamcsatkai nyári idő'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Kelet-kazahsztáni idő'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Nyugat-kazahsztáni idő'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Koreai idő',
                            'standard': 'Koreai zónaidő',
                            'daylight': 'Koreai nyári idő'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraei idő'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasznojarszki idő',
                            'standard': 'Krasznojarszki zónaidő',
                            'daylight': 'Krasznojarszki nyári idő'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgiz idő'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Lankai idő'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Line-szigeteki idő'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe-i idő',
                            'standard': 'Lord Howe-i zónaidő',
                            'daylight': 'Lord Howe-i nyári idő'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macaui idő',
                            'standard': 'Macaui zónaidő',
                            'daylight': 'Macaui nyári idő'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie-i idő'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadáni idő',
                            'standard': 'Magadáni zónaidő',
                            'daylight': 'Magadáni nyári idő'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malajziai idő'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldív-szigeteki idő'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesasi idő'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshall-szigeteki idő'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiusi idő',
                            'standard': 'Mauritiusi zónaidő',
                            'daylight': 'Mauritiusi nyári idő'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsoni idő'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulánbátori idő',
                            'standard': 'Ulánbátori zónaidő',
                            'daylight': 'Ulánbátori nyári idő'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moszkvai idő',
                            'standard': 'Moszkvai zónaidő',
                            'daylight': 'Moszkvai nyári idő'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mianmari idő'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurui idő'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepáli idő'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Új-kaledóniai idő',
                            'standard': 'Új-kaledóniai zónaidő',
                            'daylight': 'Új-kaledóniai nyári idő'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Új-zélandi idő',
                            'standard': 'Új-zélandi zónaidő',
                            'daylight': 'Új-zélandi nyári idő'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} idő',
                'regionFormat-type-daylight': '{0} nyári idő',
                'regionFormat-type-standard': '{0} zónaidő',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'júl.',
                                '6': 'jún.',
                                '5': 'máj.',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'szept.',
                                '1': 'jan.',
                                '2': 'febr.',
                                '3': 'márc.',
                                '4': 'ápr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'Sz',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'Á'
                            },
                            'wide': {
                                '8': 'augusztus',
                                '7': 'július',
                                '6': 'június',
                                '5': 'május',
                                '12': 'december',
                                '11': 'november',
                                '10': 'október',
                                '9': 'szeptember',
                                '1': 'január',
                                '2': 'február',
                                '3': 'március',
                                '4': 'április'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'júl.',
                                '6': 'jún.',
                                '5': 'máj.',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'szept.',
                                '1': 'jan.',
                                '2': 'febr.',
                                '3': 'márc.',
                                '4': 'ápr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'Sz',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'Á'
                            },
                            'wide': {
                                '8': 'augusztus',
                                '7': 'július',
                                '6': 'június',
                                '5': 'május',
                                '12': 'december',
                                '11': 'november',
                                '10': 'október',
                                '9': 'szeptember',
                                '1': 'január',
                                '2': 'február',
                                '3': 'március',
                                '4': 'április'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'narrow': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sz',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Sz'
                            },
                            'short': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'wide': {
                                'sun': 'vasárnap',
                                'mon': 'hétfő',
                                'tue': 'kedd',
                                'wed': 'szerda',
                                'thu': 'csütörtök',
                                'fri': 'péntek',
                                'sat': 'szombat'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'narrow': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sz',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Sz'
                            },
                            'short': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'wide': {
                                'sun': 'vasárnap',
                                'mon': 'hétfő',
                                'tue': 'kedd',
                                'wed': 'szerda',
                                'thu': 'csütörtök',
                                'fri': 'péntek',
                                'sat': 'szombat'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'N1',
                                '2': 'N2',
                                '3': 'N3',
                                '4': 'N4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': 'I. negyedév',
                                '2': 'II. negyedév',
                                '3': 'III. negyedév',
                                '4': 'IV. negyedév'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'N1',
                                '2': 'N2',
                                '3': 'N3',
                                '4': 'N4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '1. negyedév',
                                '2': '2. negyedév',
                                '3': '3. negyedév',
                                '4': '4. negyedév'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'narrow': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'wide': {
                                'am': 'de.',
                                'pm': 'du.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'narrow': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'wide': {
                                'am': 'de.',
                                'pm': 'du.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'időszámításunk előtt',
                            '0-alt-variant': 'Kr. e.',
                            '1': 'időszámításunk szerint',
                            '1-alt-variant': 'Kr. u.'
                        },
                        'eraAbbr': {
                            '0': 'i. e.',
                            '0-alt-variant': 'Kr. e.',
                            '1': 'i. sz.',
                            '1-alt-variant': 'Kr. u.'
                        },
                        'eraNarrow': {
                            '0': 'ie.',
                            '0-alt-variant': 'Kr. e.',
                            '1': 'isz.',
                            '1-alt-variant': 'Kr. u.'
                        }
                    },
                    'dateFormats': {
                        'full': 'y. MMMM d., EEEE',
                        'long': 'y. MMMM d.',
                        'medium': 'y MMM d',
                        'short': 'y. MM. dd.'
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
                            'yMMMEd': 'y. MMM d., E',
                            'yMMMd': 'y. MMM d.',
                            'yMMM': 'y. MMM',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'd., E',
                            'd': 'd',
                            'GyMMMd': 'G y. MMM d.',
                            'GyMMMEd': 'G y. MMM d., E',
                            'h': 'a h',
                            'yQQQQ': 'y. QQQQ',
                            'yQQQ': 'y. QQQ',
                            'yMMMM': 'y. MMMM',
                            'Hms': 'H:mm:ss',
                            'hms': 'a h:mm:ss',
                            'Hm': 'H:mm',
                            'hm': 'a h:mm',
                            'H': 'H',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'G y.',
                            'GyMMM': 'G y. MMM',
                            'M': 'L',
                            'Md': 'M. d.',
                            'MEd': 'M. d., E',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d.',
                            'MMMEd': 'MMM d., E',
                            'MMMMd': 'MMMM d.',
                            'mmss': 'mm:ss',
                            'ms': 'mm:ss',
                            'y': 'y.',
                            'yM': 'y. M.',
                            'yMd': 'y. MM. dd.',
                            'yMEd': 'y. MM. dd., E'
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
                                'd': 'MMM d., E – d., E',
                                'M': 'MMM d., E – MMM d., E'
                            },
                            'MMMd': {
                                'd': 'MMM d–d.',
                                'M': 'MMM d. – MMM d.'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'M. dd., E – M. d., E',
                                'M': 'M. d., E – M. d., E'
                            },
                            'Md': {
                                'd': 'M. d–d.',
                                'M': 'M. d. – M. d.'
                            },
                            'M': {
                                'M': 'M–M.'
                            },
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'hv': {
                                'a': 'a h – a h v',
                                'h': 'a h–h v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'y. MM–MM.',
                                'y': 'y. MM. – y. MM.'
                            },
                            'yMd': {
                                'd': 'y. MM. dd–dd.',
                                'M': 'y. MM. dd. – MM. dd.',
                                'y': 'y. MM. dd. – y. MM. dd.'
                            },
                            'yMEd': {
                                'd': 'y. MM. dd., E – dd., E',
                                'M': 'y. MM. dd., E – MM. dd., E',
                                'y': 'y. MM. dd., E – y. MM. dd., E'
                            },
                            'yMMM': {
                                'M': 'y. MMM–MMM',
                                'y': 'y. MMM – y. MMM'
                            },
                            'yMMMd': {
                                'd': 'y. MMM d–d.',
                                'M': 'y. MMM d. – MMM d.',
                                'y': 'y. MMM d. – y. MMM d.'
                            },
                            'yMMMEd': {
                                'd': 'y. MMM d., E – d., E',
                                'M': 'y. MMM d., E – MMM d., E',
                                'y': 'y. MMM d., E – y. MMM d., E'
                            },
                            'yMMMM': {
                                'M': 'y. MMMM–MMMM',
                                'y': 'y. MMMM – y. MMMM'
                            },
                            'Hmv': {
                                'H': 'H:mm–H:mm v',
                                'm': 'H:mm–H:mm v'
                            },
                            'hmv': {
                                'a': 'a h:mm – a h:mm v',
                                'h': 'a h:mm–h:mm v',
                                'm': 'a h:mm–h:mm v'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'hm': {
                                'a': 'a h:mm – a h:mm',
                                'h': 'a h:mm–h:mm',
                                'm': 'a h:mm–h:mm'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'h': {
                                'a': 'a h – a h',
                                'h': 'a h–h'
                            },
                            'd': {
                                'd': 'd–d.'
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
