/* AstroDate Language: pl
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
        AstroDate.lang('pl', {
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
                            'exemplarCity': 'Wyspy Pitcairn'
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
                            'exemplarCity': 'Wyspa Wielkanocna'
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
                            'exemplarCity': 'Fidżi'
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
                            'exemplarCity': 'Markizy'
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
                            'exemplarCity': 'Numea'
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
                            'exemplarCity': 'Wyspa Lord Howe'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Adelajda'
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
                            'exemplarCity': 'Malediwy'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Wyspy Kerguelena'
                        },
                        'Reunion': {
                            'exemplarCity': 'Réunion'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Majotta'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauritius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarywa'
                        },
                        'Chagos': {
                            'exemplarCity': 'Czagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Wyspa Bożego Narodzenia'
                        },
                        'Cocos': {
                            'exemplarCity': 'Wyspy Kokosowe'
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
                            'exemplarCity': 'Nieznane'
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
                            'exemplarCity': 'Stacja Naukowa Rothera'
                        },
                        'Palmer': {
                            'exemplarCity': 'Archipelag Palmera'
                        },
                        'McMurdo': {
                            'exemplarCity': 'Mc Murdo'
                        },
                        'Vostok': {
                            'exemplarCity': 'Stacja Wostok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Stacja Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Biegun południowy'
                        },
                        'Casey': {
                            'exemplarCity': 'Stacja Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Stacja Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d’Urville'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Macquarie'
                        },
                        'Mawson': {
                            'exemplarCity': 'Wybrzeże Mawsona'
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
                            'exemplarCity': 'Kajmany'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Kajenna'
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
                            'exemplarCity': 'Salvador'
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
                                'exemplarCity': 'Vincennes'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Petersburg'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Tell City, Indiana'
                            },
                            'Knox': {
                                'exemplarCity': 'Knox'
                            },
                            'Winamac': {
                                'exemplarCity': 'Winamac'
                            },
                            'Marengo': {
                                'exemplarCity': 'Marengo'
                            },
                            'Vevay': {
                                'exemplarCity': 'Vevay'
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
                                'exemplarCity': 'Monticello'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Hawana'
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Gujana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Gwatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Gwadelupa'
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
                            'exemplarCity': 'Salwador'
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
                            'exemplarCity': 'Kordoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Kostaryka'
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
                            'exemplarCity': 'Martynika'
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
                            'exemplarCity': 'Meksyk (miasto)'
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
                            'exemplarCity': 'Nowy Jork'
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
                                'exemplarCity': 'Beulah, Dakota Północna'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota Północna'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Dakota Północna'
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
                            'exemplarCity': 'Port-of-Spain'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Porto Velho'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Portoryko'
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
                            'exemplarCity': 'Saint-Barthélemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John’s'
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
                            'exemplarCity': 'Georgia Południowa'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Rejkiawik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Święta Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azory'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudy'
                        },
                        'Canary': {
                            'exemplarCity': 'Wyspy Kanaryjskie'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Zielony Przylądek'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Wyspy Owcze'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madera'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'Moskwa'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monako'
                        },
                        'Minsk': {
                            'exemplarCity': 'Mińsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Maarianhamina'
                        },
                        'Malta': {
                            'exemplarCity': 'Malta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madryt'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luksemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Brytyjski czas letni'
                            },
                            'exemplarCity': 'Londyn'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Lublana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lizbona'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kijów'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kaliningrad'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Stambuł'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Wyspa Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukareszt'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruksela'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratysława'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Ateny'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andora'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amsterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Symferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sofia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Sztokholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallin'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Użgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zurych'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporoże'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagrzeb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Warszawa'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Wołgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Wilno'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wiedeń'
                        },
                        'Vatican': {
                            'exemplarCity': 'Watykan'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajewo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'Rzym'
                        },
                        'Riga': {
                            'exemplarCity': 'Ryga'
                        },
                        'Prague': {
                            'exemplarCity': 'Praga'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Paryż'
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
                                'daylight': 'Irlandia (czas letni)'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kopenhaga'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Kiszyniów'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapeszt'
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
                            'exemplarCity': 'Kinszasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Chartum'
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
                            'exemplarCity': 'Ujun'
                        },
                        'Douala': {
                            'exemplarCity': 'Duala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Dżibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es-Salaam'
                        },
                        'Dakar': {
                            'exemplarCity': 'Dakar'
                        },
                        'Banjul': {
                            'exemplarCity': 'Bandżul'
                        },
                        'Bangui': {
                            'exemplarCity': 'Bangi'
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
                            'exemplarCity': 'Mogadiszu'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ndżamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhuk'
                        },
                        'Tunis': {
                            'exemplarCity': 'Tunis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Trypolis'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'São Tomé'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Wagadugu'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nawakszut'
                        },
                        'Niamey': {
                            'exemplarCity': 'Niamej'
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
                            'exemplarCity': 'Konakri'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Ceuta'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Casablanca'
                        },
                        'Cairo': {
                            'exemplarCity': 'Kair'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Bużumbura'
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
                            'exemplarCity': 'Abidżan'
                        },
                        'Accra': {
                            'exemplarCity': 'Akra'
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
                            'exemplarCity': 'Szanghaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sachalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh (miasto)'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangun'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kyzył Orda'
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
                            'exemplarCity': 'Nowosybirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Czunking'
                        },
                        'Colombo': {
                            'exemplarCity': 'Kolombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damaszek'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dakka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubaj'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duszanbe'
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
                            'exemplarCity': 'Howd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkuck'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Dżakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ułan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumczi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Wientian'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Władywostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakuck'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterynburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erywań'
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
                            'exemplarCity': 'Taszkient'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tajpej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerozolima'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Aszchabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktiubińsk'
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
                            'exemplarCity': 'Ałma Ata'
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
                            'exemplarCity': 'Biszkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkuta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Czojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamczatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karaczi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kaszgar'
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
                            'exemplarCity': 'Kuczing'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuwejt'
                        },
                        'Macau': {
                            'exemplarCity': 'Makau'
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
                            'exemplarCity': 'Nikozja'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Nowokuźnieck'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadżykistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tajpej',
                            'standard': 'Tajpej (czas standardowy)',
                            'daylight': 'Tajpej (czas letni)'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinam'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Georgia Południowa'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Wyspy Salomona'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapur'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seszele'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa',
                            'standard': 'Samoa (czas standardowy)',
                            'daylight': 'Samoa (czas letni)'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Czas Samara',
                            'standard': 'Czas standardowy Samara',
                            'daylight': 'Czas Samara letni'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalin',
                            'standard': 'Sachalin (czas standardowy)',
                            'daylight': 'Sachalin (czas letni)'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunion'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Czas atlantycki',
                            'standard': 'Czas standardowy atlantycki',
                            'daylight': 'Czas atlantycki letni'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Czas środkowoamerykański',
                            'standard': 'Czas środkowoamerykański standardowy',
                            'daylight': 'Czas środkowoamerykański letni'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Czas amazoński',
                            'standard': 'Czas amazoński standardowy',
                            'daylight': 'Czas amazoński letni'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Czas Alaska',
                            'standard': 'Alaska (czas standardowy)',
                            'daylight': 'Alaska (czas letni)'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Czas zachodnioafrykański',
                            'standard': 'Czas zachodnioafrykański standardowy',
                            'daylight': 'Czas zachodnioafrykański letni'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Czas południowoafrykański'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Czas wschodnioafrykański'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Czas środkowoafrykański'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistan'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Czas wschodnioamerykański',
                            'standard': 'Czas wschodnioamerykański standardowy',
                            'daylight': 'Czas wschodnioamerykański letni'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Czas górski',
                            'standard': 'Czas górski standardowy',
                            'daylight': 'Czas górski letni'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Czas pacyficzny',
                            'standard': 'Czas pacyficzny standardowy',
                            'daylight': 'Czas pacyficzny letni'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Czas Anadyr',
                            'standard': 'Czas standardowy Anadyr',
                            'daylight': 'Czas Anadyr letni'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Półwysep Arabski',
                            'standard': 'Półwysep Arabski (czas standardowy)',
                            'daylight': 'Półwysep Arabski (czas letni)'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Czas argentyński',
                            'standard': 'Argentyna (czas standardowy)',
                            'daylight': 'Argentyna (czas letni)'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Argentyna Zachodnia',
                            'standard': 'Argentyna Zachodnia (czas standardowy)',
                            'daylight': 'Argentyna Zachodnia (czas letni)'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenia',
                            'standard': 'Armenia (czas standardowy)',
                            'daylight': 'Armenia (czas letni)'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Chiny',
                            'standard': 'Chiny (czas standardowy)',
                            'daylight': 'Chiny (czas letni)'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Czojbalsan',
                            'standard': 'Czojbalsan (czas standardowy)',
                            'daylight': 'Czojbalsan (czas letni)'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Wyspa Bożego Narodzenia'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Wyspy Kokosowe'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbia',
                            'standard': 'Kolumbia (czas standardowy)',
                            'daylight': 'Kolumbia (czas letni)'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Wyspy Cooka',
                            'standard': 'Wyspy Cooka (czas standardowy)',
                            'daylight': 'Wyspy Cooka (czas letni)'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kuba',
                            'standard': 'Kuba (czas standardowy)',
                            'daylight': 'Kuba (czas letni)'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Timor Wschodni'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Wyspa Wielkanocna',
                            'standard': 'Wyspa Wielkanocna (czas standardowy)',
                            'daylight': 'Wyspa Wielkanocna (czas letni)'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekwador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Czas środkowoeuropejski',
                            'standard': 'Czas środkowoeuropejski standardowy',
                            'daylight': 'Czas środkowoeuropejski letni'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Czas wschodnioeuropejski',
                            'standard': 'Czas wschodnioeuropejski standardowy',
                            'daylight': 'Czas wschodnioeuropejski letni'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Czas zachodnioeuropejski',
                            'standard': 'Czas zachodnioeuropejski standardowy',
                            'daylight': 'Czas zachodnioeuropejski letni'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Czas indyjski'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonga',
                            'standard': 'Tonga (czas standardowy)',
                            'daylight': 'Tonga (czas letni)'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistan',
                            'standard': 'Turkmenistan (czas standardowy)',
                            'daylight': 'Turkmenistan (czas letni)'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Urugwaj',
                            'standard': 'Urugwaj (czas standardowy)',
                            'daylight': 'Urugwaj (czas letni)'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistan',
                            'standard': 'Uzbekistan (czas standardowy)',
                            'daylight': 'Uzbekistan (czas letni)'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu',
                            'standard': 'Vanuatu (czas standardowy)',
                            'daylight': 'Vanuatu (czas letni)'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterynburg',
                            'standard': 'Jekaterynburg (czas standardowy)',
                            'daylight': 'Jekaterynburg (czas letni)'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakuck',
                            'standard': 'Jakuck (czas standardowy)',
                            'daylight': 'Jakuck (czas letni)'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis i Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Wostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Wołgograd',
                            'standard': 'Wołgograd (czas standardowy)',
                            'daylight': 'Wołgograd (czas letni)'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Władywostok',
                            'standard': 'Władywostok (czas standardowy)',
                            'daylight': 'Władywostok (czas letni)'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Wenezuela'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Kobdo',
                            'standard': 'Kobdo (czas standardowy)',
                            'daylight': 'Kobdo (czas letni)'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkong',
                            'standard': 'Hongkong (czas standardowy)',
                            'daylight': 'Hongkong (czas letni)'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaje-Aleuty',
                            'standard': 'Hawaje-Aleuty (czas standardowy)',
                            'daylight': 'Hawaje-Aleuty (czas letni)'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Gujana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Zatoka Perska'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Grenlandia Zachodnia',
                            'standard': 'Grenlandia Zachodnia (czas standardowy)',
                            'daylight': 'Grenlandia Zachodnia (czas letni)'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Grenlandia Wschodnia',
                            'standard': 'Grenlandia Wschodnia (czas standardowy)',
                            'daylight': 'Grenlandia Wschodnia (czas letni)'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Czas uniwersalny'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Wyspy Gilberta'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruzja',
                            'standard': 'Gruzja (czas standardowy)',
                            'daylight': 'Gruzja (czas letni)'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francuskie Terytoria Południowe i Antarktyczne'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Gujana Francuska'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidżi',
                            'standard': 'Fidżi (czas standardowy)',
                            'daylight': 'Fidżi (czas letni)'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandy',
                            'standard': 'Falklandy (czas standardowy)',
                            'daylight': 'Falklandy (czas letni)'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Czas środkowoaustralijski',
                            'standard': 'Czas środkowoaustralijski standardowy',
                            'daylight': 'Czas środkowoaustralijski letni'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Czas środkowo-zachodnioaustralijski',
                            'standard': 'Czas środkowo-zachodnioaustralijski standardowy',
                            'daylight': 'Czas środkowo-zachodnioaustralijski letni'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Czas wschodnioaustraliski',
                            'standard': 'Czas standardowy wschodnioaustraliski',
                            'daylight': 'Czas wschodnioaustraliski letni'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Czas zachodnioaustralijski',
                            'standard': 'Czas zachodnioaustralijski standardowy',
                            'daylight': 'Czas zachodnioaustralijski letni'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbejdżan',
                            'standard': 'Azerbejdżan (czas standardowy)',
                            'daylight': 'Azerbejdżan (czas letni)'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azory',
                            'standard': 'Azory (czas standardowy)',
                            'daylight': 'Azory (czas letni)'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladesz',
                            'standard': 'Bangladesz (czas standardowy)',
                            'daylight': 'Bangladesz (czas letni)'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Boliwia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasília',
                            'standard': 'Brasília (czas standardowy)',
                            'daylight': 'Brasília (czas letni)'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Republika Zielonego Przylądka',
                            'standard': 'Republika Zielonego Przylądka (czas standardowy)',
                            'daylight': 'Republika Zielonego Przylądka (czas letni)'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Czamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham',
                            'standard': 'Chatham (czas standardowy)',
                            'daylight': 'Chatham (czas letni)'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chile',
                            'standard': 'Chile (czas standardowy)',
                            'daylight': 'Chile (czas letni)'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Ocean Indyjski'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Czas indochiński'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Indonezja Środkowa'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Indonezja Wschodnia'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Indonezja Zachodnia'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iran',
                            'standard': 'Iran (czas standardowy)',
                            'daylight': 'Iran (czas letni)'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkuck',
                            'standard': 'Irkuck (czas standardowy)',
                            'daylight': 'Irkuck (czas letni)'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izrael',
                            'standard': 'Izrael (czas standardowy)',
                            'daylight': 'Izrael (czas letni)'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonia',
                            'standard': 'Japonia (czas standardowy)',
                            'daylight': 'Japonia (czas letni)'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Czas Pietropawłowsk Kamczacki',
                            'standard': 'Czas standardowy Pietropawłowsk Kamczacki',
                            'daylight': 'Czas Pietropawłowsk Kamczacki letni'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Kazachstan Wschodni'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Kazachstan Zachodni'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korea',
                            'standard': 'Korea (czas standardowy)',
                            'daylight': 'Korea (czas letni)'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsk',
                            'standard': 'Krasnojarsk (czas standardowy)',
                            'daylight': 'Krasnojarsk (czas letni)'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgistan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Sporady Środkowopolinezyjskie'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe',
                            'standard': 'Lord Howe (czas standardowy)',
                            'daylight': 'Lord Howe (czas letni)'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan',
                            'standard': 'Magadan (czas standardowy)',
                            'daylight': 'Magadan (czas letni)'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malezja'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Malediwy'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Markizy'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Wyspy Marshalla'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius',
                            'standard': 'Mauritius (czas standardowy)',
                            'daylight': 'Mauritius (czas letni)'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ułan Bator',
                            'standard': 'Ułan Bator (czas standardowy)',
                            'daylight': 'Ułan Bator (czas letni)'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Czas moskiewski',
                            'standard': 'Czas moskiewski standardowy',
                            'daylight': 'Czas moskiewski letni'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mjanma'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nowa Kaledonia',
                            'standard': 'Nowa Kaledonia (czas standardowy)',
                            'daylight': 'Nowa Kaledonia (czas letni)'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Nowa Zelandia',
                            'standard': 'Nowa Zelandia (czas standardowy)',
                            'daylight': 'Nowa Zelandia (czas letni)'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Czas nowofunlandzki',
                            'standard': 'Nowa Fundlandia (czas standardowy)',
                            'daylight': 'Nowa Fundlandia (czas letni)'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha',
                            'standard': 'Fernando de Noronha (czas standardowy)',
                            'daylight': 'Fernando de Noronha (czas letni)'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Nowosybirsk',
                            'standard': 'Nowosybirsk (czas standardowy)',
                            'daylight': 'Nowosybirsk (czas letni)'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk',
                            'standard': 'Omsk (czas standardowy)',
                            'daylight': 'Omsk (czas letni)'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistan',
                            'standard': 'Pakistan (czas standardowy)',
                            'daylight': 'Pakistan (czas letni)'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua-Nowa Gwinea'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paragwaj',
                            'standard': 'Paragwaj (czas standardowy)',
                            'daylight': 'Paragwaj (czas letni)'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peru',
                            'standard': 'Peru (czas standardowy)',
                            'daylight': 'Peru (czas letni)'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipiny',
                            'standard': 'Filipiny (czas standardowy)',
                            'daylight': 'Filipiny (czas letni)'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Feniks'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint-Pierre i Miquelon',
                            'standard': 'Saint-Pierre i Miquelon (czas standardowy)',
                            'daylight': 'Saint-Pierre i Miquelon (czas letni)'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairn'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Pohnpei'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Czas: {0}',
                'regionFormat-type-daylight': '{0} (czas letni)',
                'regionFormat-type-standard': '{0} (czas standardowy)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'sie',
                                '7': 'lip',
                                '6': 'cze',
                                '5': 'maj',
                                '12': 'gru',
                                '11': 'lis',
                                '10': 'paź',
                                '9': 'wrz',
                                '1': 'sty',
                                '2': 'lut',
                                '3': 'mar',
                                '4': 'kwi'
                            },
                            'narrow': {
                                '8': 's',
                                '7': 'l',
                                '6': 'c',
                                '5': 'm',
                                '12': 'g',
                                '11': 'l',
                                '10': 'p',
                                '9': 'w',
                                '1': 's',
                                '2': 'l',
                                '3': 'm',
                                '4': 'k'
                            },
                            'wide': {
                                '8': 'sierpnia',
                                '7': 'lipca',
                                '6': 'czerwca',
                                '5': 'maja',
                                '12': 'grudnia',
                                '11': 'listopada',
                                '10': 'października',
                                '9': 'września',
                                '1': 'stycznia',
                                '2': 'lutego',
                                '3': 'marca',
                                '4': 'kwietnia'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'sie',
                                '7': 'lip',
                                '6': 'cze',
                                '5': 'maj',
                                '12': 'gru',
                                '11': 'lis',
                                '10': 'paź',
                                '9': 'wrz',
                                '1': 'sty',
                                '2': 'lut',
                                '3': 'mar',
                                '4': 'kwi'
                            },
                            'narrow': {
                                '8': 's',
                                '7': 'l',
                                '6': 'c',
                                '5': 'm',
                                '12': 'g',
                                '11': 'l',
                                '10': 'p',
                                '9': 'w',
                                '1': 's',
                                '2': 'l',
                                '3': 'm',
                                '4': 'k'
                            },
                            'wide': {
                                '8': 'sierpień',
                                '7': 'lipiec',
                                '6': 'czerwiec',
                                '5': 'maj',
                                '12': 'grudzień',
                                '11': 'listopad',
                                '10': 'październik',
                                '9': 'wrzesień',
                                '1': 'styczeń',
                                '2': 'luty',
                                '3': 'marzec',
                                '4': 'kwiecień'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': 'śr.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'W',
                                'wed': 'Ś',
                                'thu': 'C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': 'śr.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'niedziela',
                                'mon': 'poniedziałek',
                                'tue': 'wtorek',
                                'wed': 'środa',
                                'thu': 'czwartek',
                                'fri': 'piątek',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': 'śr.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'W',
                                'wed': 'Ś',
                                'thu': 'C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'niedz.',
                                'mon': 'pon.',
                                'tue': 'wt.',
                                'wed': 'śr.',
                                'thu': 'czw.',
                                'fri': 'pt.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'niedziela',
                                'mon': 'poniedziałek',
                                'tue': 'wtorek',
                                'wed': 'środa',
                                'thu': 'czwartek',
                                'fri': 'piątek',
                                'sat': 'sobota'
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
                                '1': 'I kwartał',
                                '2': 'II kwartał',
                                '3': 'III kwartał',
                                '4': 'IV kwartał'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1 kw.',
                                '2': '2 kw.',
                                '3': '3 kw.',
                                '4': '4 kw.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'I kwartał',
                                '2': 'II kwartał',
                                '3': 'III kwartał',
                                '4': 'IV kwartał'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'noon': 'w południe',
                                'pm': 'PM',
                                'afternoon': 'po południu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed południem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'narrow': {
                                'noon': 'w południe',
                                'pm': 'PM',
                                'afternoon': 'po południu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed południem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'wide': {
                                'noon': 'w południe',
                                'pm': 'PM',
                                'afternoon': 'po południu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed południem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'noon': 'w południe',
                                'pm': 'PM',
                                'afternoon': 'po południu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed południem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'narrow': {
                                'noon': 'w południe',
                                'pm': 'PM',
                                'afternoon': 'po południu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed południem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            },
                            'wide': {
                                'noon': 'w południe',
                                'pm': 'PM',
                                'afternoon': 'po południu',
                                'am': 'AM',
                                'earlyMorning': 'nad ranem',
                                'evening': 'wieczorem',
                                'lateMorning': 'przed południem',
                                'morning': 'rano',
                                'night': 'w nocy'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'p.n.e.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.e.',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'p.n.e.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.e.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'p.n.e.',
                            '0-alt-variant': 'BCE',
                            '1': 'n.e.',
                            '1-alt-variant': 'CE'
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
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMMd': 'd MMM y',
                            'yMMM': 'LLL y',
                            'yMM': 'MM.y',
                            'yMEd': 'E, d.MM.y',
                            'EHm': 'E, HH:mm',
                            'Ehm': 'E, h:mm a',
                            'Ed': 'E, d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd.MM',
                            'MEd': 'E, d.MM',
                            'MMdd': 'd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'MM.y',
                            'yMd': 'd.MM.y'
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
                                'd': 'E, d MMM – E, d MMM',
                                'M': 'E, d MMM - E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'LLL–LLL'
                            },
                            'MEd': {
                                'd': 'E, dd.MM – E, dd.MM',
                                'M': 'E, dd.MM – E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM–dd.MM',
                                'M': 'dd.MM–dd.MM'
                            },
                            'M': {
                                'M': 'MM-MM'
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
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMd': {
                                'd': 'dd-dd.MM.y',
                                'M': 'dd.MM-dd.MM.y',
                                'y': 'dd.MM.y-dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y - E, dd.MM.y',
                                'M': 'E, dd.MM.y - E, dd.MM.y',
                                'y': 'E, dd.MM.y - E, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y',
                                'y': 'LLL y - LLL y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d - E, d MMM y',
                                'M': 'E, d MMM - E, d MMM y',
                                'y': 'E, d MMM y - E, d MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL y',
                                'y': 'LLLL y - LLLL y'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm-h:mm a v'
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
