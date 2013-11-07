/* AstroDate
 * Language: es
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
        AstroDate.lang('es', {
            'codePatterns': {
                'language': 'Idioma: {0}',
                'script': 'Dialecto: {0}',
                'territory': 'Región: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordenar caracteres kana por separado',
                    'yes': 'Ordenar diferenciando caracteres kana'
                },
                'colCaseLevel': {
                    'no': 'Ordenar sin distinguir entre mayúsculas y minúsculas',
                    'yes': 'Ordenar distinguiendo entre mayúsculas y minúsculas'
                },
                'colCaseFirst': {
                    'lower': 'Ordenar empezando por minúsculas',
                    'no': 'Ordenar siguiendo orden normal de mayúsculas y minúsculas',
                    'upper': 'Ordenar empezando por mayúsculas'
                },
                'colStrength': {
                    'identical': 'Ordenar todo',
                    'primary': 'Ordenar solo letras base',
                    'quaternary': 'Ordenar acentos/mayúsculas y minúsculas/ancho/kana',
                    'secondary': 'Ordenar acentos',
                    'tertiary': 'Ordenar acentos/mayúsculas y minúsculas/ancho'
                },
                'colNumeric': {
                    'no': 'Ordenar dígitos individualmente',
                    'yes': 'Ordenar dígitos numéricamente'
                },
                'colNormalization': {
                    'no': 'Ordenar sin normalización',
                    'yes': 'Ordenar con normalización Unicode'
                },
                'calendar': {
                    'japanese': 'calendario japonés',
                    'iso8601': 'iso8601',
                    'coptic': 'calendario copto',
                    'dangi': 'dangi',
                    'ethiopic': 'calendario etíope',
                    'ethiopic-amete-alem': 'calendario amete alem etíope',
                    'gregorian': 'calendario gregoriano',
                    'hebrew': 'calendario hebreo',
                    'persian': 'calendario persa',
                    'roc': 'calendario de la República de China',
                    'chinese': 'calendario chino',
                    'buddhist': 'calendario budista',
                    'indian': 'calendario nacional hindú',
                    'islamic': 'calendario islámico',
                    'islamic-civil': 'calendario civil islámico',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'orden de listín telefónico',
                    'gb2312han': 'orden del chino simplificado - GB2312',
                    'eor': 'eor',
                    'ducet': 'orden Unicode predeterminado',
                    'dictionary': 'orden de diccionario',
                    'big5han': 'orden del chino tradicional - Big5',
                    'traditional': 'orden tradicional',
                    'standard': 'orden estándar',
                    'zhuyin': 'zhuyin',
                    'unihan': 'orden por radical-trazos',
                    'stroke': 'orden de los trazos',
                    'searchjl': 'Buscar por consonante inicial de hangul',
                    'search': 'búsqueda de uso general',
                    'reformed': 'orden reformado',
                    'pinyin': 'orden pinyin',
                    'phonetic': 'Orden de clasificación fonético'
                },
                'numbers': {
                    'knda': 'dígitos en kannada',
                    'khmr': 'dígitos en jemer',
                    'kali': 'kali',
                    'jpanfin': 'números financieros en japonés',
                    'jpan': 'números en japonés',
                    'java': 'java',
                    'hebr': 'números en hebreo',
                    'hantfin': 'números financieros en chino tradicional',
                    'hant': 'números en chino tradicional',
                    'hansfin': 'números financieros en chino simplificado',
                    'hans': 'números en chino simplificado',
                    'hanidec': 'números decimales en chino',
                    'guru': 'dígitos en gurmuji',
                    'gujr': 'dígitos en gujarati',
                    'greklow': 'números en griego en minúscula',
                    'grek': 'números en griego',
                    'bali': 'bali',
                    'armnlow': 'números en minúscula en armenio',
                    'armn': 'números en armenio',
                    'arabext': 'dígitos indoarábigos extendidos',
                    'arab': 'dígitos indoarábigos',
                    'finance': 'Números financieros',
                    'traditional': 'Números tradicionales',
                    'native': 'Dígitos nativos',
                    'beng': 'dígitos en bengalí',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'dígitos en devanagari',
                    'orya': 'dígitos en oriya',
                    'osma': 'osma',
                    'roman': 'números romanos',
                    'romanlow': 'números romanos en minúscula',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Dígitos vai',
                    'tibt': 'dígitos en tibetano',
                    'thai': 'dígitos en tailandés',
                    'telu': 'dígitos en telugu',
                    'tamldec': 'dígitos en tamil',
                    'taml': 'números en tamil tradicional',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'dígitos en birmano',
                    'mtei': 'mtei',
                    'mong': 'dígitos en mongol',
                    'mlym': 'dígitos en malayalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'dígitos occidentales',
                    'laoo': 'dígitos en lao',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'números en georgiano',
                    'fullwide': 'dígitos de ancho completo',
                    'ethi': 'números en etíope'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordenar símbolos',
                    'shifted': 'Ordenar ignorando símbolos'
                },
                'colBackwards': {
                    'no': 'Ordenar acentos normalmente',
                    'yes': 'Ordenar acentos con inversión'
                }
            },
            'keys': {
                'colNormalization': 'Orden con normalización',
                'collation': 'orden',
                'colHiraganaQuaternary': 'Orden de kana',
                'colCaseLevel': 'Orden con distinción entre mayúsculas y minúsculas',
                'colCaseFirst': 'Orden de mayúsculas/minúsculas',
                'colBackwards': 'Orden de acentos con inversión',
                'colAlternate': 'Orden ignorando símbolos',
                'calendar': 'calendario',
                'x': 'Uso privado',
                'variableTop': 'Ordenar como símbolos',
                'va': 'Variante local',
                'timezone': 'Zona horaria',
                'numbers': 'números',
                'currency': 'moneda',
                'colStrength': 'Intensidad de orden',
                'colNumeric': 'Orden numérico'
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
                            'exemplarCity': 'Saipán'
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
                            'exemplarCity': 'Islas Pitcairn'
                        },
                        'Palau': {
                            'exemplarCity': 'Palaos'
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
                            'exemplarCity': 'Honolulú'
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
                            'exemplarCity': 'Tahití'
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
                            'exemplarCity': 'Isla de Pascua'
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
                            'exemplarCity': 'Fiyi'
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
                            'exemplarCity': 'Sídney'
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
                            'exemplarCity': 'Adelaida'
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
                            'exemplarCity': 'Maldivas'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reunión'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauricio'
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
                            'exemplarCity': 'Comoras'
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
                            'exemplarCity': 'Desconocida'
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
                            'exemplarCity': 'Polo Sur'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d\'Urville'
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
                            'exemplarCity': 'Caimán'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Cayena'
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
                            'exemplarCity': 'Anguila'
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
                            'exemplarCity': 'Bahía de Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Belén'
                        },
                        'Belize': {
                            'exemplarCity': 'Belice'
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
                            'exemplarCity': 'Curazao'
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
                            'exemplarCity': 'Indianápolis'
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
                            'exemplarCity': 'Tórtola'
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
                            'exemplarCity': 'La Habana'
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
                            'exemplarCity': 'Guadalupe'
                        },
                        'Grenada': {
                            'exemplarCity': 'Granada'
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
                            'exemplarCity': 'Los Ángeles'
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
                            'exemplarCity': 'Martinica'
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
                            'exemplarCity': 'Miquelón'
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
                            'exemplarCity': 'Nueva York'
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
                                'exemplarCity': 'Beulah, Dakota del Norte'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota del Norte'
                            },
                            'Center': {
                                'exemplarCity': 'Centro'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Ojinaga'
                        },
                        'Panama': {
                            'exemplarCity': 'Panamá'
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
                            'exemplarCity': 'Puerto Príncipe'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Puerto España'
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
                            'exemplarCity': 'San Bartolomé'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John’s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Santa Lucía'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'St. Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'San Vicente'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Georgia del Sur'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reikiavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Santa Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudas'
                        },
                        'Canary': {
                            'exemplarCity': 'Islas Canarias'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cabo Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Islas Feroe'
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
                            'exemplarCity': 'Moscú'
                        },
                        'Monaco': {
                            'exemplarCity': 'Mónaco'
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
                            'exemplarCity': 'Luxemburgo'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Hora de verano británica'
                            },
                            'exemplarCity': 'Londres'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Liubliana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisboa'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kaliningrado'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Estambul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Isla de Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruselas'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlín'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrado'
                        },
                        'Athens': {
                            'exemplarCity': 'Atenas'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Ámsterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopie'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sofía'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Estocolmo'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallin'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Uzhgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zúrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporizhia'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsovia'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgogrado'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilna'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
                        },
                        'Vatican': {
                            'exemplarCity': 'El Vaticano'
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
                            'exemplarCity': 'Roma'
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
                            'exemplarCity': 'París'
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
                                'daylight': 'Hora de verano de Irlanda'
                            },
                            'exemplarCity': 'Dublín'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhague'
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
                            'exemplarCity': 'Jartún'
                        },
                        'Kampala': {
                            'exemplarCity': 'Kampala'
                        },
                        'Juba': {
                            'exemplarCity': 'Juba'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Johannesburgo'
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
                            'exemplarCity': 'Duala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Yibuti'
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
                            'exemplarCity': 'Yamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'Túnez capital'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Trípoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Santo Tomé'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Portonovo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Uagadugú'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nuakchot'
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
                            'exemplarCity': 'El Cairo'
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
                            'exemplarCity': 'Bisáu'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Abiyán'
                        },
                        'Accra': {
                            'exemplarCity': 'Accra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Argel'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Shanghái'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seúl'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sajalín'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ciudad Ho Chi Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangún'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Catar'
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
                            'exemplarCity': 'Damasco'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dacca'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubái'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duchanbé'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebrón'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hong Kong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Yakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulán Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Ürümqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientián'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Yakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Yekaterinburgo'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Ereván'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Timbu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teherán'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tiflis'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipéi'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalén'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asjabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktobe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
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
                            'exemplarCity': 'Adén'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Baréin'
                        },
                        'Baku': {
                            'exemplarCity': 'Bakú'
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
                            'exemplarCity': 'Brunéi'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Calcuta'
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
                            'exemplarCity': 'Katmandú'
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
                            'exemplarCity': 'Magadán'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makasar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Mascate'
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
                    'Singapore': {
                        'long': {
                            'standard': 'Hora de Singapur'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Hora de Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Hora de Samoa',
                            'standard': 'Hora estándar de Samoa',
                            'daylight': 'Hora de verano de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hora de Samara',
                            'standard': 'Hora estándar de Samara',
                            'daylight': 'Hora de verano de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hora de Sajalín',
                            'standard': 'Hora estándar de Sajalín',
                            'daylight': 'Hora de verano de Sajalín'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hora de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hora de Reunión'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Hora de Qyzylorda',
                            'standard': 'Hora estándar de Qyzylorda',
                            'daylight': 'Hora de verano de Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Hora de Pohnpei'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Hora de Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Hora de San Pedro y Miquelón',
                            'standard': 'Hora estándar de San Pedro y Miquelón',
                            'daylight': 'Hora de verano de San Pedro y Miquelón'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Hora de las islas Fénix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hora de Filipinas',
                            'standard': 'Hora estándar de Filipinas',
                            'daylight': 'Hora de verano de Filipinas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hora de Perú',
                            'standard': 'Hora estándar de Perú',
                            'daylight': 'Hora de verano de Perú'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Hora de Paraguay',
                            'standard': 'Hora estándar de Paraguay',
                            'daylight': 'Hora de verano de Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Hora de Papúa-Nueva Guinea'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Hora de Palaos'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hora de Pakistán',
                            'standard': 'Hora estándar de Pakistán',
                            'daylight': 'Hora de verano de Pakistán'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Hora de Omsk',
                            'standard': 'Hora estándar de Omsk',
                            'daylight': 'Hora de verano de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hora de Novosibirsk',
                            'standard': 'Hora estándar de Novosibirsk',
                            'daylight': 'Hora de verano de Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Hora de las Islas Marianas del Norte'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Hora de Fernando de Noronha',
                            'standard': 'Hora estándar de Fernando de Noronha',
                            'daylight': 'Hora de verano de Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Hora de las islas Norfolk'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Hora de Acre',
                            'standard': 'Hora estándar de Acre',
                            'daylight': 'Hora de verano de Acre'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Hora central',
                            'standard': 'Hora estándar central',
                            'daylight': 'Hora de verano central'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Hora oriental',
                            'standard': 'Hora estándar oriental',
                            'daylight': 'Hora de verano oriental'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hora de las Montañas',
                            'standard': 'Hora estándar de las Montañas',
                            'daylight': 'Hora de verano de las Montañas'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hora del Pacífico',
                            'standard': 'Hora estándar del Pacífico',
                            'daylight': 'Hora de verano del Pacífico'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Hora de Anadyr',
                            'standard': 'Hora estándar de Anadyr',
                            'daylight': 'Hora de verano de Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Hora de Aktau',
                            'standard': 'Hora estándar de Aktau',
                            'daylight': 'Hora de verano de Aktau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Hora de Aktobe',
                            'standard': 'Hora estándar de Aktobe',
                            'daylight': 'Hora de verano de Aktobe'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hora de Arabia',
                            'standard': 'Hora estándar de Arabia',
                            'daylight': 'Hora de verano de Arabia'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Hora estándar de Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Hora de Chatham',
                            'standard': 'Hora estándar de Chatham',
                            'daylight': 'Hora de verano de Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hora de Chile',
                            'standard': 'Hora estándar de Chile',
                            'daylight': 'Hora de verano de Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hora de China',
                            'standard': 'Hora estándar de China',
                            'daylight': 'Hora de verano de China'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hora de Choibalsan',
                            'standard': 'Hora estándar de Choibalsan',
                            'daylight': 'Hora de verano de Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Hora de la isla de Navidad'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Hora de las islas Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Hora de Colombia',
                            'standard': 'Hora estándar de Colombia',
                            'daylight': 'Hora de verano de Colombia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hora de las islas Cook',
                            'standard': 'Hora estándar de las islas Cook',
                            'daylight': 'Hora de verano media de las islas Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hora de Cuba',
                            'standard': 'Hora estándar de Cuba',
                            'daylight': 'Hora de verano de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Hora de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Hora de Dumont-d’Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Hora de Timor Oriental'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Hora de la isla de Pascua',
                            'standard': 'Hora estándar de la isla de Pascua',
                            'daylight': 'Hora de verano de la isla de Pascua'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Hora de Ecuador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Hora de Europa central',
                            'standard': 'Hora estándar de Europa central',
                            'daylight': 'Hora de verano de Europa central'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Hora de Europa oriental',
                            'standard': 'Hora estándar de Europa oriental',
                            'daylight': 'Hora de verano de Europa oriental'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Hora de Europa occidental',
                            'standard': 'Hora estándar de Europa occidental',
                            'daylight': 'Hora de verano de Europa occidental'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Hora de las islas Malvinas',
                            'standard': 'Hora estándar de las islas Malvinas',
                            'daylight': 'Hora de verano de las islas Malvinas'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hora de Fiyi',
                            'standard': 'Hora estándar de Fiyi',
                            'daylight': 'Hora de verano de Fiyi'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Hora de la Guayana Francesa'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Hora de las Tierras Australes y Antárticas Francesas'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hora de Galápagos'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Hora de Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Hora de Tonga',
                            'standard': 'Hora estándar de Tonga',
                            'daylight': 'Hora de verano de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Hora de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Hora de Turkmenistán',
                            'standard': 'Hora estándar de Turkmenistán',
                            'daylight': 'Hora de verano de Turkmenistán'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Hora de Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Hora de Uruguay',
                            'standard': 'Hora estándar de Uruguay',
                            'daylight': 'Hora de verano de Uruguay'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Hora de Uzbekistán',
                            'standard': 'Hora estándar de Uzbekistán',
                            'daylight': 'Hora de verano de Uzbekistán'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hora de Vanuatu',
                            'standard': 'Hora estándar de Vanuatu',
                            'daylight': 'Hora de verano de Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Hora de Ekaterimburgo',
                            'standard': 'Hora estándar de Ekaterimburgo',
                            'daylight': 'Hora de verano de Ekaterimburgo'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hora de Yakutsk',
                            'standard': 'Hora estándar de Yakutsk',
                            'daylight': 'Hora de verano de Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Hora de Wallis y Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Hora de la isla Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Hora de Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Hora de Volgogrado',
                            'standard': 'Hora estándar de Volgogrado',
                            'daylight': 'Hora de verano de Volgogrado'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hora de Vladivostok',
                            'standard': 'Hora estándar de Vladivostok',
                            'daylight': 'Hora de verano de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Hora de Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Hora de Tayikistán'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Hora de Taipéi',
                            'standard': 'Hora estándar de Taipéi',
                            'daylight': 'Hora de verano de Taipéi'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Hora de Tahití'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Hora de Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Hora de Surinam'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Hora de Georgia meridional'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Hora de las Islas Salomón'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Hora de Guyana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Hora estándar del Golfo'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Hora estándar de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Hora de Groenlandia occidental',
                            'standard': 'Hora estándar de Groenlandia occidental',
                            'daylight': 'Hora de verano de Groenlandia occidental'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Hora de Groenlandia oriental',
                            'standard': 'Hora estándar de Groenlandia oriental',
                            'daylight': 'Hora de verano de Groenlandia oriental'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Hora del meridiano de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Hora de las islas Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Hora de Georgia',
                            'standard': 'Hora estándar de Georgia',
                            'daylight': 'Hora de verano de Georgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Hora de Gambier'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Hora de Afganistán'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Hora de África central'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Hora de África oriental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Hora de Sudáfrica'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Hora de África occidental',
                            'standard': 'Hora estándar de África occidental',
                            'daylight': 'Hora de verano de África occidental'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Hora de Alaska',
                            'standard': 'Hora estándar de Alaska',
                            'daylight': 'Hora de verano de Alaska'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Hora del Amazonas',
                            'standard': 'Hora estándar del Amazonas',
                            'daylight': 'Hora de verano del Amazonas'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Hora de Argentina',
                            'standard': 'Hora estándar de Argentina',
                            'daylight': 'Hora de verano de Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Hora de Argentina occidental',
                            'standard': 'Hora estándar de Argentina occidental',
                            'daylight': 'Hora de verano de Argentina occidental'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Hora de Armenia',
                            'standard': 'Hora estándar de Armenia',
                            'daylight': 'Hora de verano de Armenia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Hora del Atlántico',
                            'standard': 'Hora estándar del Atlántico',
                            'daylight': 'Hora de verano del Atlántico'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Hora de Australia central',
                            'standard': 'Hora estándar de Australia central',
                            'daylight': 'Hora de verano de Australia central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Hora de Australia centroccidental',
                            'standard': 'Hora estándar de Australia centroccidental',
                            'daylight': 'Hora de verano de Australia centroccidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Hora de Australia oriental',
                            'standard': 'Hora estándar de Australia oriental',
                            'daylight': 'Hora de verano de Australia oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Hora de Australia occidental',
                            'standard': 'Hora estándar de Australia occidental',
                            'daylight': 'Hora de verano de Australia occidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Hora de Azerbaiyán',
                            'standard': 'Hora estándar de Azerbaiyán',
                            'daylight': 'Hora de verano de Azerbaiyán'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hora de las Azores',
                            'standard': 'Hora estándar de las Azores',
                            'daylight': 'Hora de verano de las Azores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Hora de Bangladés',
                            'standard': 'Hora estándar de Bangladés',
                            'daylight': 'Hora de verano de Bangladés'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hora de Bután'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Hora de Bolivia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Hora de Brasilia',
                            'standard': 'Hora estándar de Brasilia',
                            'daylight': 'Hora de verano de Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Hora de Brunéi'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Hora de Cabo Verde',
                            'standard': 'Hora estándar de Cabo Verde',
                            'daylight': 'Hora de verano de Cabo Verde'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hora de Hawái-Aleutiano',
                            'standard': 'Hora estándar de Hawái-Aleutiano',
                            'daylight': 'Hora de verano de Hawái-Aleutiano'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hora de Hong Kong',
                            'standard': 'Hora estándar de Hong Kong',
                            'daylight': 'Hora de verano de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hora de Hovd',
                            'standard': 'Hora estándar de Hovd',
                            'daylight': 'Hora de verano de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hora estándar de la India'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hora del Océano Índico'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Hora de Indochina'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Hora de Indonesia central'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Hora de Indonesia oriental'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Hora de Indonesia occidental'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Hora de Irán',
                            'standard': 'Hora estándar de Irán',
                            'daylight': 'Hora de verano de Irán'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Hora de Irkutsk',
                            'standard': 'Hora estándar de Irkutsk',
                            'daylight': 'Hora de verano de Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Hora de Israel',
                            'standard': 'Hora estándar de Israel',
                            'daylight': 'Hora de verano de Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hora de Japón',
                            'standard': 'Hora estándar de Japón',
                            'daylight': 'Hora de verano de Japón'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hora de Kamchatka',
                            'standard': 'Hora de estándar de Kamchatka',
                            'daylight': 'Hora de verano de Kamchatka'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Hora de Kazajistán oriental'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Hora de Kazajistán occidental'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hora de Corea',
                            'standard': 'Hora estándar de Corea',
                            'daylight': 'Hora de verano de Corea'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Hora de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Hora de Krasnoyarsk',
                            'standard': 'Hora estándar de Krasnoyarsk',
                            'daylight': 'Hora de verano de Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Hora de Kirguistán'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Hora de Sri Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Hora de las Espóradas Ecuatoriales'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Hora de Lord Howe',
                            'standard': 'Hora estándar de Lord Howe',
                            'daylight': 'Hora de verano de Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Hora de Macao',
                            'standard': 'Hora estándar de Macao',
                            'daylight': 'Hora de verano de Macao'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Hora de la isla Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Hora de Magadán',
                            'standard': 'Hora estándar de Magadán',
                            'daylight': 'Hora de verano de Magadán'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Hora de Malasia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Hora de Maldivas'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Hora de las islas Marquesas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Hora de las Islas Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Hora de Mauricio',
                            'standard': 'Hora estándar de Mauricio',
                            'daylight': 'Hora de verano de Mauricio'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Hora de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Hora de Ulán Bator',
                            'standard': 'Hora estándar de Ulán Bator',
                            'daylight': 'Hora de verano de Ulán Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hora de Moscú',
                            'standard': 'Hora estándar de Moscú',
                            'daylight': 'Hora de verano de Moscú'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Hora de Birmania'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Hora de Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Hora de Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Hora de Nueva Caledonia',
                            'standard': 'Hora estándar de Nueva Caledonia',
                            'daylight': 'Hora de verano de Nueva Caledonia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hora de Nueva Zelanda',
                            'standard': 'Hora estándar de Nueva Zelanda',
                            'daylight': 'Hora de verano de Nueva Zelanda'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Hora de Terranova',
                            'standard': 'Hora estándar de Terranova',
                            'daylight': 'Hora de verano de Terranova'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Hora de Niue'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Hora de {0}',
                'regionFormat-type-daylight': 'horario de verano de {0}',
                'regionFormat-type-standard': 'horario estándar de {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'ago.',
                                '7': 'jul.',
                                '6': 'jun.',
                                '5': 'may.',
                                '12': 'dic.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'ene.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'abr.'
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
                                '1': 'E',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'agosto',
                                '7': 'julio',
                                '6': 'junio',
                                '5': 'mayo',
                                '12': 'diciembre',
                                '11': 'noviembre',
                                '10': 'octubre',
                                '9': 'septiembre',
                                '1': 'enero',
                                '2': 'febrero',
                                '3': 'marzo',
                                '4': 'abril'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Ago.',
                                '7': 'Jul.',
                                '6': 'Jun.',
                                '5': 'May.',
                                '12': 'Dic.',
                                '11': 'Nov.',
                                '10': 'Oct.',
                                '9': 'Sept.',
                                '1': 'Ene.',
                                '2': 'Feb.',
                                '3': 'Mar.',
                                '4': 'Abr.'
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
                                '1': 'E',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'Agosto',
                                '7': 'Julio',
                                '6': 'Junio',
                                '5': 'Mayo',
                                '12': 'Diciembre',
                                '11': 'Noviembre',
                                '10': 'Octubre',
                                '9': 'Septiembre',
                                '1': 'Enero',
                                '2': 'Febrero',
                                '3': 'Marzo',
                                '4': 'Abril'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'dom.',
                                'mon': 'lun.',
                                'tue': 'mar.',
                                'wed': 'mié.',
                                'thu': 'jue.',
                                'fri': 'vie.',
                                'sat': 'sáb.'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'X',
                                'thu': 'J',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'DO',
                                'mon': 'LU',
                                'tue': 'MA',
                                'wed': 'MI',
                                'thu': 'JU',
                                'fri': 'VI',
                                'sat': 'SA'
                            },
                            'wide': {
                                'sun': 'domingo',
                                'mon': 'lunes',
                                'tue': 'martes',
                                'wed': 'miércoles',
                                'thu': 'jueves',
                                'fri': 'viernes',
                                'sat': 'sábado'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Dom.',
                                'mon': 'Lun.',
                                'tue': 'Mar.',
                                'wed': 'Mié.',
                                'thu': 'Jue.',
                                'fri': 'Vie.',
                                'sat': 'Sáb.'
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
                                'sun': 'DO',
                                'mon': 'LU',
                                'tue': 'MA',
                                'wed': 'MI',
                                'thu': 'JU',
                                'fri': 'VI',
                                'sat': 'SA'
                            },
                            'wide': {
                                'sun': 'Domingo',
                                'mon': 'Lunes',
                                'tue': 'Martes',
                                'wed': 'Miércoles',
                                'thu': 'Jueves',
                                'fri': 'Viernes',
                                'sat': 'Sábado'
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
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
                            },
                            'wide': {
                                '1': '1.er trimestre',
                                '2': '2.º trimestre',
                                '3': '3.er trimestre',
                                '4': '4.º trimestre'
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
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
                            },
                            'wide': {
                                '1': '1.er trimestre',
                                '2': '2.º trimestre',
                                '3': '3.er trimestre',
                                '4': '4.º trimestre'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            },
                            'narrow': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            },
                            'narrow': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a. m.',
                                'pm': 'p. m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'antes de Cristo',
                            '0-alt-variant': 'a. e. c.',
                            '1': 'anno Dómini',
                            '1-alt-variant': 'e. c.'
                        },
                        'eraAbbr': {
                            '0': 'a. C.',
                            '0-alt-variant': 'a. e. c.',
                            '1': 'd. C.',
                            '1-alt-variant': 'e. c.'
                        },
                        'eraNarrow': {
                            '0': 'a. C.',
                            '0-alt-variant': 'a. e. c.',
                            '1': 'd. C.',
                            '1-alt-variant': 'e. c.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d \'de\' MMMM \'de\' y',
                        'long': 'd \'de\' MMMM \'de\' y',
                        'medium': 'd/M/y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss (zzzz)',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}, {0}',
                        'long': '{1}, {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMM': 'M/y',
                            'yMEd': 'EEE, d/M/y',
                            'yMd': 'd/M/y',
                            'yM': 'M/y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM \'de\' y G',
                            'GyMMMEd': 'E, d \'de\' MMMM \'de\' y G',
                            'h': 'h a',
                            'H': 'H',
                            'hm': 'h:mm a',
                            'Hm': 'H:mm',
                            'yQQQQ': 'QQQQ \'de\' y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM \'de\' y',
                            'yMMMEd': 'EEE, d \'de\' MMMM \'de\' y',
                            'yMMMd': 'd \'de\' MMM \'de\' y',
                            'yMMM': 'MMM \'de\' y',
                            'Hms': 'H:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Ehm': 'E, h:mm a',
                            'EHm': 'E, H:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, H:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM \'de\' y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, d/M',
                            'MMd': 'd/M',
                            'MMdd': 'd/M',
                            'MMM': 'LLL',
                            'MMMd': 'd \'de\' MMM',
                            'MMMdd': 'dd-MMM',
                            'MMMEd': 'E d \'de\' MMM',
                            'MMMMd': 'd \'de\' MMMM'
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
                                'd': 'E, d MMM–E, d MMM',
                                'M': 'E, d MMM–E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM–d MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M–E, d/M',
                                'M': 'E, d/M–E, d/M'
                            },
                            'Md': {
                                'd': 'd/M–d/M',
                                'M': 'd/M–d/M'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'hv': {
                                'a': 'h a–h a v',
                                'h': 'h–h a v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'M/y–M/y',
                                'y': 'M/y–M/y'
                            },
                            'yMd': {
                                'd': 'd/M/y–d/M/y',
                                'M': 'd/M/y–d/M/y',
                                'y': 'd/M/y–d/M/y'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y–E, d/M/y',
                                'M': 'E, d/M/y–E, d/M/y',
                                'y': 'E, d/M/y–E, d/M/y'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y–MMM y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM–d MMM \'de\' y',
                                'y': 'd MMM \'de\' y–d MMM \'de\' y'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM–E, d MMM \'de\' y',
                                'M': 'E, d MMM–E, d MMM \'de\' y',
                                'y': 'E, d MMM \'de\' y–E, d MMM \'de\' y'
                            },
                            'yMMMM': {
                                'M': 'MMMM–MMMM \'de\' y',
                                'y': 'MMMM \'de\' y–MMMM \'de\' y'
                            },
                            'Hmv': {
                                'H': 'H:mm–H:mm v',
                                'm': 'H:mm–H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a–h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm – h:mm a',
                                'm': 'h:mm – h:mm a'
                            },
                            'H': {
                                'H': 'H–H'
                            },
                            'h': {
                                'a': 'h a–h a',
                                'h': 'h–h a'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'intervalFormatFallback': '{0}–{1}'
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
