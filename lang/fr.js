/* AstroDate
 * Language: fr
 * ca-gregorian: 24r9310
 * timeZoneNames: 24r9310
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
        AstroDate.lang('fr', {
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
                            'exemplarCity': 'Galápagos'
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
                            'exemplarCity': 'Île de Pâques'
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
                            'exemplarCity': 'Fidji'
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
                            'exemplarCity': 'Marquises'
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
                            'exemplarCity': 'Adélaïde'
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
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'La Réunion'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Maurice'
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
                            'exemplarCity': 'Comores'
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
                            'exemplarCity': 'zone inconnue'
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
                            'exemplarCity': 'Pôle Sud'
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
                            'exemplarCity': 'Thulé'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Tégucigalpa'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Swift Current'
                        },
                        'Chicago': {
                            'exemplarCity': 'Chicago'
                        },
                        'Cayman': {
                            'exemplarCity': 'Caïmans'
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
                                'exemplarCity': 'Ushuaïa'
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
                            'exemplarCity': 'Bahia de Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'La Barbade'
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
                            'exemplarCity': 'Détroit'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Hermosillo'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Vincennes [Indiana]'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Petersburg [Indiana]'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Tell City [Indiana]'
                            },
                            'Knox': {
                                'exemplarCity': 'Knox [Indiana]'
                            },
                            'Winamac': {
                                'exemplarCity': 'Winamac [Indiana]'
                            },
                            'Marengo': {
                                'exemplarCity': 'Marengo [Indiana]'
                            },
                            'Vevay': {
                                'exemplarCity': 'Vevay [Indiana]'
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
                            'exemplarCity': 'Jamaïque'
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
                                'exemplarCity': 'Monticello [Kentucky]'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'La Havane'
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
                            'exemplarCity': 'Grenade'
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
                            'exemplarCity': 'Dominique'
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
                            'exemplarCity': 'Manaos'
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
                            'exemplarCity': 'Mexico'
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
                                'exemplarCity': 'Beulah [Dakota du Nord]'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem [Dakota du Nord]'
                            },
                            'Center': {
                                'exemplarCity': 'Center [Dakota du Nord]'
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
                            'exemplarCity': 'Port-d’Espagne'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Porto Velho'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Porto Rico'
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
                            'exemplarCity': 'Régina'
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
                            'exemplarCity': 'Saint-Domingue'
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
                            'exemplarCity': 'Saint-Jean de Terre-Neuve'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Saint-Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Sainte-Lucie'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Saint-Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Saint-Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Géorgie du Sud'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sainte-Hélène'
                        },
                        'Azores': {
                            'exemplarCity': 'Açores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudes'
                        },
                        'Canary': {
                            'exemplarCity': 'Îles Canaries'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cap-Vert'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Féroé'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madère'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'Moscou'
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
                            'exemplarCity': 'Malte'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madrid'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxembourg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'heure d’été britannique'
                            },
                            'exemplarCity': 'Londres'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisbonne'
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
                            'exemplarCity': 'Île de Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucarest'
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
                            'exemplarCity': 'Belgrade'
                        },
                        'Athens': {
                            'exemplarCity': 'Athènes'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorre'
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
                            'exemplarCity': 'Oujgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zurich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporojie'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsovie'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Vienne'
                        },
                        'Vatican': {
                            'exemplarCity': 'Le Vatican'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'Saint-Marin'
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
                            'exemplarCity': 'Prague'
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
                            'exemplarCity': 'Guernesey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'heure d’été irlandaise'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhague'
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
                            'exemplarCity': 'Laâyoune'
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
                            'exemplarCity': 'Mogadiscio'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'N’Djamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'Tunis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Tripoli [Libye]'
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
                            'exemplarCity': 'Le Caire'
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
                            'exemplarCity': 'Addis-Abeba'
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
                            'exemplarCity': 'Séoul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcande'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sakhaline'
                        },
                        'Saigon': {
                            'exemplarCity': 'Hô-Chi-Minh-Ville'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoun'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kzyl Orda'
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
                            'exemplarCity': 'Ouralsk'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novossibirsk'
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
                            'exemplarCity': 'Damas'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dhaka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubaï'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Douchanbé'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hébron'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hong Kong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkoutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Oulan-Bator'
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
                            'exemplarCity': 'Iakoutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Ekaterinbourg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokyo'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Téhéran'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilissi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tachkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapour'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jérusalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Achgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktioubinsk'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktaou'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Alma Ata'
                        },
                        'Aden': {
                            'exemplarCity': 'Aden'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahreïn'
                        },
                        'Baku': {
                            'exemplarCity': 'Bakou'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beyrouth'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bichkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Calcutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Tchoïbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kaboul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamtchatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kachgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandou'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoïarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Koweït'
                        },
                        'Macau': {
                            'exemplarCity': 'Macao'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Macassar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manille'
                        },
                        'Muscat': {
                            'exemplarCity': 'Mascate'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nicosie'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'South_Georgia': {
                        'long': {
                            'standard': 'heure de Géorgie du Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'heure des îles Salomon'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'heure de Singapour'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'heure des Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'heure des Samoa',
                            'standard': 'heure normale des Samoa',
                            'daylight': 'heure d’été des Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'heure de Samara',
                            'standard': 'heure normale de Samara',
                            'daylight': 'heure avancée de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'heure de Sakhaline',
                            'standard': 'heure normale de Sakhaline',
                            'daylight': 'heure avancée de Sakhaline'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'heure de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'heure de la Réunion'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'heure de l’île de Pohnpei'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'heure des îles Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'heure de Saint-Pierre-et-Miquelon',
                            'standard': 'heure normale de Saint-Pierre-et-Miquelon',
                            'daylight': 'heure avancée de Saint-Pierre-et-Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'heure des îles Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'heure des Philippines',
                            'standard': 'heure normale des Philippines',
                            'daylight': 'heure avancée des Philippines'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'heure du Pérou',
                            'standard': 'heure normale du Pérou',
                            'daylight': 'heure avancée du Pérou'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'heure du Paraguay',
                            'standard': 'heure normale du Paraguay',
                            'daylight': 'heure avancée du Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'heure de la Papouasie-Nouvelle-Guinée'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'heure des Palaos'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'heure du Pakistan',
                            'standard': 'heure normale du Pakistan',
                            'daylight': 'heure avancée du Pakistan'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'heure de Omsk',
                            'standard': 'heure normale de Omsk',
                            'daylight': 'heure avancée de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'heure de Novossibirsk',
                            'standard': 'heure normale de Novossibirsk',
                            'daylight': 'heure avancée de Novossibirsk'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'heure normale d’Afrique centrale'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'heure de l’Afghanistan'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'heure de l’Acre',
                            'standard': 'heure normale de l’Acre',
                            'daylight': 'heure avancée de l’Acre'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'heure de l’Amazonie',
                            'standard': 'heure normale de l’Amazonie',
                            'daylight': 'heure avancée de l’Amazonie'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'heure du centre nord-américain',
                            'standard': 'heure normale du centre nord-américain',
                            'daylight': 'heure avancée du Centre'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'heure de l’Est nord-américain',
                            'standard': 'heure normale de l’Est nord-américain',
                            'daylight': 'heure avancée de l’Est'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'heure des Rocheuses',
                            'standard': 'heure normale des Rocheuses',
                            'daylight': 'heure avancée des Rocheuses'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'heure du Pacifique nord-américain',
                            'standard': 'heure normale du Pacifique nord-américain',
                            'daylight': 'heure avancée du Pacifique'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'heure d’Anadyr',
                            'standard': 'heure normale d’Anadyr',
                            'daylight': 'heure avancée d’Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'heure d’Aktaou',
                            'standard': 'heure normale d’Aktaou',
                            'daylight': 'heure avancée d’Aktaou'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'heure d’Aqtöbe',
                            'standard': 'heure normale d’Aqtöbe',
                            'daylight': 'heure avancé d’Aqtöbe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'heure du Cap-Vert',
                            'standard': 'heure normale du Cap-Vert',
                            'daylight': 'heure avancée du Cap-Vert'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'heure des Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'heure des îles Chatham',
                            'standard': 'heure normale des Îles Chatham',
                            'daylight': 'heure avancée des Îles Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'heure du Chili',
                            'standard': 'heure normale du Chili',
                            'daylight': 'heure avancée du Chili'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'heure de la Chine',
                            'standard': 'heure normale de la Chine',
                            'daylight': 'heure avancée de Chine'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'heure de Choibalsan',
                            'standard': 'heure normale de Choibalsan',
                            'daylight': 'heure avancée de Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'heure de l’île Christmas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'heure des îles Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'heure de Colombie',
                            'standard': 'heure normale de Colombie',
                            'daylight': 'heure avancée de Colombie'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'heure des îles Cook',
                            'standard': 'heure normale des îles Cook',
                            'daylight': 'heure avancée des îles Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'heure de Cuba',
                            'standard': 'heure normale de Cuba',
                            'daylight': 'heure avancée de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'heure de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'heure de Dumont-d’Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'heure du Timor oriental'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'heure de l’île de Pâques',
                            'standard': 'heure normale de l’île de Pâques',
                            'daylight': 'heure avancée de l’île de Pâques'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'heure de l’Équateur'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'heure d’Europe centrale',
                            'standard': 'heure normale d’Europe centrale',
                            'daylight': 'heure avancée d’Europe centrale'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'heure d’Europe de l’Est',
                            'standard': 'heure normale d’Europe de l’Est',
                            'daylight': 'heure avancée d’Europe de l’Est'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'heure d’Europe de l’Ouest',
                            'standard': 'heure normale d’Europe de l’Ouest',
                            'daylight': 'heure avancée d’Europe de l’Ouest'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'heure des îles Malouines',
                            'standard': 'heure normale des îles Malouines',
                            'daylight': 'heure avancée des îles Malouines'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'heure des îles Fidji',
                            'standard': 'heure normale des îles Fidji',
                            'daylight': 'heure avancée des îles Fidji'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'heure de Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'heure des Tonga',
                            'standard': 'heure normale des Tonga',
                            'daylight': 'heure avancée de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'heure de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'heure du Turkménistan',
                            'standard': 'heure normale du Turkménistan',
                            'daylight': 'heure avancée du Turkménistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'heure des Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'heure de l’Uruguay',
                            'standard': 'heure normale de l’Uruguay',
                            'daylight': 'heure avancée de l\'Uruguay'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'heure de l’Ouzbékistan',
                            'standard': 'heure normale de l’Ouzbékistan',
                            'daylight': 'heure avancée de l\'Ouzbékistan'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'heure du Vanuatu',
                            'standard': 'heure normale du Vanuatu',
                            'daylight': 'heure avancée de Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'heure d’Ekaterinbourg',
                            'standard': 'heure normale d’Ekaterinbourg',
                            'daylight': 'heure avancée d’Ekaterinbourg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'heure de Iakoutsk',
                            'standard': 'heure normale de Iakoutsk',
                            'daylight': 'heure avancée de Iakoutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'heure de Wallis-et-Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'heure de l’île Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'heure de Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'heure de Volgograd',
                            'standard': 'heure normale de Volgograd',
                            'daylight': 'heure avancée de Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'heure de Vladivostok',
                            'standard': 'heure normale de Vladivostok',
                            'daylight': 'heure avancée de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'heure du Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'heure du Tadjikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'heure de Taipei',
                            'standard': 'heure normale de Taipei',
                            'daylight': 'heure avancée de Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'heure de Tahiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'heure de Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'heure du Suriname'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'heure du Golfe'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'heure de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'heure de l’Ouest du Groenland',
                            'standard': 'heure normale de l’Ouest du Groenland',
                            'daylight': 'heure avancée de l’Ouest du Groenland'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'heure de l’Est du Groenland',
                            'standard': 'heure normale de l’Est du Groenland',
                            'daylight': 'heure avancée de l’Est du Groenland'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'heure moyenne de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'heure des îles Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'heure de la Géorgie',
                            'standard': 'heure normale de la Géorgie',
                            'daylight': 'heure avancée de Géorgie'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'heure des îles Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'heure des îles Galápagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'heure des Terres australes et antarctiques françaises'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'heure de la Guyane française'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'heure normale d’Afrique de l’Est'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'heure normale d’Afrique méridionale'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'heure d’Afrique de l’Ouest',
                            'standard': 'heure normale d’Afrique de l’Ouest',
                            'daylight': 'heure avancée d’Afrique de l’Ouest'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'heure de l’Alaska',
                            'standard': 'heure normale de l’Alaska',
                            'daylight': 'heure avancée de l’Alaska'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'heure d’Alma Ata',
                            'standard': 'heure normale d’Alma Ata',
                            'daylight': 'heure avancée d’Alma Ata'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'heure de l’Arabie',
                            'standard': 'heure normale de l’Arabie',
                            'daylight': 'heure avancée de l’Arabie'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'heure de l’Argentine',
                            'standard': 'heure normale d’Argentine',
                            'daylight': 'heure avancée de l’Argentine'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'heure de l’Ouest argentin',
                            'standard': 'heure normale de l’Ouest argentin',
                            'daylight': 'heure avancée de l’Ouest argentin'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'heure de l’Arménie',
                            'standard': 'heure normale de l’Arménie',
                            'daylight': 'heure avancée d’Arménie'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'heure de l’Atlantique',
                            'standard': 'heure normale de l’Atlantique',
                            'daylight': 'heure avancée de l’Atlantique'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'heure du centre de l’Australie',
                            'standard': 'heure normale du centre de l’Australie',
                            'daylight': 'heure avancée du centre de l’Australie'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'heure du centre-ouest de l’Australie',
                            'standard': 'heure normale du centre-ouest de l’Australie',
                            'daylight': 'heure avancée du centre-ouest de l’Australie'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'heure de l’Est de l’Australie',
                            'standard': 'heure normale de l’Est de l’Australie',
                            'daylight': 'heure avancée de l’Est de l’Australie'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'heure de l’Ouest de l’Australie',
                            'standard': 'heure normale de l’Ouest de l’Australie',
                            'daylight': 'heure avancée de l’Ouest de l’Australie'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'heure de l’Azerbaïdjan',
                            'standard': 'heure normale de l’Azerbaïdjan',
                            'daylight': 'heure avancée d’Azerbaïdjan'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'heure des Açores',
                            'standard': 'heure normale des Açores',
                            'daylight': 'heure avancée des Açores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'heure du Bangladesh',
                            'standard': 'heure normale du Bangladesh',
                            'daylight': 'heure avancée du Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'heure du Bhoutan'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'heure de Bolivie'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'heure de Brasilia',
                            'standard': 'heure normale de Brasilia',
                            'daylight': 'heure avancée de Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'heure du Brunéi'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'heure du Guyana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'heure d’Hawaii - Aléoutiennes',
                            'standard': 'heure normale d’Hawaii - Aléoutiennes',
                            'daylight': 'heure avancée d’Hawaii - Aléoutiennes'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'heure de Hong Kong',
                            'standard': 'heure normale de Hong Kong',
                            'daylight': 'heure avancée de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'heure de Hovd',
                            'standard': 'heure normale de Hovd',
                            'daylight': 'heure avancée de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'heure de l’Inde'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'heure de l’Océan Indien'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'heure d’Indochine'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'heure du Centre indonésien'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'heure de l’Est indonésien'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'heure de l’Ouest indonésien'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'heure de l’Iran',
                            'standard': 'heure normale d’Iran',
                            'daylight': 'heure avancée d’Iran'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'heure d’Irkoutsk',
                            'standard': 'heure normale d’Irkoutsk',
                            'daylight': 'heure avancée d’Irkoutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'heure d’Israël',
                            'standard': 'heure normale d’Israël',
                            'daylight': 'heure avancée d’Israël'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'heure du Japon',
                            'standard': 'heure normale du Japon',
                            'daylight': 'heure avancée du Japon'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'heure de Petropavlovsk-Kamchatski',
                            'standard': 'heure normale de Petropavlovsk-Kamchatski',
                            'daylight': 'heure avancée de Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'heure de l’Est du Kazakhstan'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'heure de l’Ouest du Kazakhstan'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'heure de la Corée',
                            'standard': 'heure normale de la Corée',
                            'daylight': 'heure avancée de Corée'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'heure de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'heure de Krasnoïarsk',
                            'standard': 'heure normale de Krasnoïarsk',
                            'daylight': 'heure avancée de Krasnoïarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'heure du Kirghizistan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'heure des îles de la Ligne'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'heure de Lord Howe',
                            'standard': 'heure normale de Lord Howe',
                            'daylight': 'heure avancée de Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'heure de l’île Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'heure de Magadan',
                            'standard': 'heure normale de Magadan',
                            'daylight': 'heure avancée de Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'heure de la Malaisie'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'heure des Maldives'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'heure des îles Marquises'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'heure des îles Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'heure de Maurice',
                            'standard': 'heure normale de Maurice',
                            'daylight': 'heure avancée de Maurice'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'heure de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'heure d’Oulan-Bator',
                            'standard': 'heure normale d’Oulan-Bator',
                            'daylight': 'heure avancée d’Oulan-Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'heure de Moscou',
                            'standard': 'heure normale de Moscou',
                            'daylight': 'heure avancée de Moscou'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'heure du Myanmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'heure de Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'heure du Népal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'heure de la Nouvelle-Calédonie',
                            'standard': 'heure normale de la Nouvelle-Calédonie',
                            'daylight': 'heure avancée de Nouvelle-Calédonie'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'heure de la Nouvelle-Zélande',
                            'standard': 'heure normale de la Nouvelle-Zélande',
                            'daylight': 'heure avancée de la Nouvelle-Zélande'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'heure de Terre-Neuve',
                            'standard': 'heure normale de Terre-Neuve',
                            'daylight': 'heure avancée de Terre-Neuve'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'heure de Nioué'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'heure de l’île Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'heure de Fernando de Noronha',
                            'standard': 'heure normale de Fernando de Noronha',
                            'daylight': 'heure avancée de Fernando de Noronha'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'heure des îles Mariannes du Nord'
                        }
                    }
                },
                'hourFormat': '+HH:mm;−HH:mm',
                'gmtFormat': 'UTC{0}',
                'gmtZeroFormat': 'UTC',
                'regionFormat': 'heure : {0}',
                'regionFormat-type-daylight': '{0} (heure d’été)',
                'regionFormat-type-standard': '{0} (heure standard)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'août',
                                '7': 'juil.',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'déc.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'janv.',
                                '2': 'févr.',
                                '3': 'mars',
                                '4': 'avr.'
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
                                '8': 'août',
                                '7': 'juillet',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'décembre',
                                '11': 'novembre',
                                '10': 'octobre',
                                '9': 'septembre',
                                '1': 'janvier',
                                '2': 'février',
                                '3': 'mars',
                                '4': 'avril'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'août',
                                '7': 'juil.',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'déc.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'janv.',
                                '2': 'févr.',
                                '3': 'mars',
                                '4': 'avr.'
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
                                '8': 'août',
                                '7': 'juillet',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'décembre',
                                '11': 'novembre',
                                '10': 'octobre',
                                '9': 'septembre',
                                '1': 'janvier',
                                '2': 'février',
                                '3': 'mars',
                                '4': 'avril'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'dim.',
                                'mon': 'lun.',
                                'tue': 'mar.',
                                'wed': 'mer.',
                                'thu': 'jeu.',
                                'fri': 'ven.',
                                'sat': 'sam.'
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
                                'sun': 'di',
                                'mon': 'lu',
                                'tue': 'ma',
                                'wed': 'me',
                                'thu': 'je',
                                'fri': 've',
                                'sat': 'sa'
                            },
                            'wide': {
                                'sun': 'dimanche',
                                'mon': 'lundi',
                                'tue': 'mardi',
                                'wed': 'mercredi',
                                'thu': 'jeudi',
                                'fri': 'vendredi',
                                'sat': 'samedi'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'dim.',
                                'mon': 'lun.',
                                'tue': 'mar.',
                                'wed': 'mer.',
                                'thu': 'jeu.',
                                'fri': 'ven.',
                                'sat': 'sam.'
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
                                'sun': 'dim.',
                                'mon': 'lun.',
                                'tue': 'mar.',
                                'wed': 'mer.',
                                'thu': 'jeu.',
                                'fri': 'ven.',
                                'sat': 'sam.'
                            },
                            'wide': {
                                'sun': 'dimanche',
                                'mon': 'lundi',
                                'tue': 'mardi',
                                'wed': 'mercredi',
                                'thu': 'jeudi',
                                'fri': 'vendredi',
                                'sat': 'samedi'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
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
                                '1': '1er trimestre',
                                '2': '2e trimestre',
                                '3': '3e trimestre',
                                '4': '4e trimestre'
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
                                '1': '1er trimestre',
                                '2': '2e trimestre',
                                '3': '3e trimestre',
                                '4': '4e trimestre'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'afternoon': 'ap.m.',
                                'am': 'AM',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'afternoon': 'ap.-m.',
                                'am': 'a',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'p'
                            },
                            'wide': {
                                'afternoon': 'après-midi',
                                'am': 'AM',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'ap.m.',
                                'am': 'av.m.',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'ap.m.'
                            },
                            'narrow': {
                                'afternoon': 'ap.-m.',
                                'am': 'a',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'p'
                            },
                            'wide': {
                                'afternoon': 'après-midi',
                                'am': 'avant-midi',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'après-midi'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'avant Jésus-Christ',
                            '0-alt-variant': 'AEC',
                            '1': 'après Jésus-Christ',
                            '1-alt-variant': 'EC'
                        },
                        'eraAbbr': {
                            '0': 'av. J.-C.',
                            '0-alt-variant': 'AEC',
                            '1': 'ap. J.-C.',
                            '1-alt-variant': 'EC'
                        },
                        'eraNarrow': {
                            '0': 'av. J.-C.',
                            '0-alt-variant': 'AEC',
                            '1': 'ap. J.-C.',
                            '1-alt-variant': 'EC'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd/MM/y'
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
                            'yQQQ': 'QQQ y',
                            'Gy': 'y G',
                            'EHms': 'E HH:mm:ss',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'yQQQQ': 'QQQQ y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH \'h\'',
                            'h': 'h a',
                            'GyMMMEd': 'E d MMM y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'd/M/y',
                            'yMEd': 'E d/M/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E d MMM y',
                            'yMMMM': 'MMMM y'
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
                                'd': 'E dd/MM - E dd/MM',
                                'M': 'E dd/MM - E dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM – dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'HH – HH v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h – h a v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'MM/y – MM/y',
                                'y': 'M/y – M/y'
                            },
                            'yMd': {
                                'd': 'd/M/y – d/M/y',
                                'M': 'd/M/y – d/M/y',
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
                                'd': 'd–d MMM y',
                                'M': 'd MMM – d MMM y',
                                'y': 'd MMM y – d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d – E d MMM y',
                                'M': 'E d MMM – E d MMM y',
                                'y': 'E d MMM y – E d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM y',
                                'y': 'MMMM y – MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm – HH:mm v',
                                'm': 'HH:mm – HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm – h:mm a v',
                                'm': 'h:mm – h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm – HH:mm',
                                'm': 'HH:mm – HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm – h:mm a',
                                'm': 'h:mm – h:mm a'
                            },
                            'H': {
                                'H': 'HH – HH'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h – h a'
                            },
                            'd': {
                                'd': 'd-d'
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
