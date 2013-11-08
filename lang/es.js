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
                'territory': 'Regi\u00F3n: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordenar caracteres kana por separado',
                    'yes': 'Ordenar diferenciando caracteres kana'
                },
                'colCaseLevel': {
                    'no': 'Ordenar sin distinguir entre may\u00FAsculas y min\u00FAsculas',
                    'yes': 'Ordenar distinguiendo entre may\u00FAsculas y min\u00FAsculas'
                },
                'colCaseFirst': {
                    'lower': 'Ordenar empezando por min\u00FAsculas',
                    'no': 'Ordenar siguiendo orden normal de may\u00FAsculas y min\u00FAsculas',
                    'upper': 'Ordenar empezando por may\u00FAsculas'
                },
                'colStrength': {
                    'identical': 'Ordenar todo',
                    'primary': 'Ordenar solo letras base',
                    'quaternary': 'Ordenar acentos/may\u00FAsculas y min\u00FAsculas/ancho/kana',
                    'secondary': 'Ordenar acentos',
                    'tertiary': 'Ordenar acentos/may\u00FAsculas y min\u00FAsculas/ancho'
                },
                'colNumeric': {
                    'no': 'Ordenar d\u00EDgitos individualmente',
                    'yes': 'Ordenar d\u00EDgitos num\u00E9ricamente'
                },
                'colNormalization': {
                    'no': 'Ordenar sin normalizaci\u00F3n',
                    'yes': 'Ordenar con normalizaci\u00F3n Unicode'
                },
                'calendar': {
                    'japanese': 'calendario japon\u00E9s',
                    'iso8601': 'iso8601',
                    'coptic': 'calendario copto',
                    'dangi': 'dangi',
                    'ethiopic': 'calendario et\u00EDope',
                    'ethiopic-amete-alem': 'calendario amete alem et\u00EDope',
                    'gregorian': 'calendario gregoriano',
                    'hebrew': 'calendario hebreo',
                    'persian': 'calendario persa',
                    'roc': 'calendario de la Rep\u00FAblica de China',
                    'chinese': 'calendario chino',
                    'buddhist': 'calendario budista',
                    'indian': 'calendario nacional hind\u00FA',
                    'islamic': 'calendario isl\u00E1mico',
                    'islamic-civil': 'calendario civil isl\u00E1mico',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'orden de list\u00EDn telef\u00F3nico',
                    'gb2312han': 'orden del chino simplificado - GB2312',
                    'eor': 'eor',
                    'ducet': 'orden Unicode predeterminado',
                    'dictionary': 'orden de diccionario',
                    'big5han': 'orden del chino tradicional - Big5',
                    'traditional': 'orden tradicional',
                    'standard': 'orden est\u00E1ndar',
                    'zhuyin': 'zhuyin',
                    'unihan': 'orden por radical-trazos',
                    'stroke': 'orden de los trazos',
                    'searchjl': 'Buscar por consonante inicial de hangul',
                    'search': 'b\u00FAsqueda de uso general',
                    'reformed': 'orden reformado',
                    'pinyin': 'orden pinyin',
                    'phonetic': 'Orden de clasificaci\u00F3n fon\u00E9tico'
                },
                'numbers': {
                    'knda': 'd\u00EDgitos en kannada',
                    'khmr': 'd\u00EDgitos en jemer',
                    'kali': 'kali',
                    'jpanfin': 'n\u00FAmeros financieros en japon\u00E9s',
                    'jpan': 'n\u00FAmeros en japon\u00E9s',
                    'java': 'java',
                    'hebr': 'n\u00FAmeros en hebreo',
                    'hantfin': 'n\u00FAmeros financieros en chino tradicional',
                    'hant': 'n\u00FAmeros en chino tradicional',
                    'hansfin': 'n\u00FAmeros financieros en chino simplificado',
                    'hans': 'n\u00FAmeros en chino simplificado',
                    'hanidec': 'n\u00FAmeros decimales en chino',
                    'guru': 'd\u00EDgitos en gurmuji',
                    'gujr': 'd\u00EDgitos en gujarati',
                    'greklow': 'n\u00FAmeros en griego en min\u00FAscula',
                    'grek': 'n\u00FAmeros en griego',
                    'bali': 'bali',
                    'armnlow': 'n\u00FAmeros en min\u00FAscula en armenio',
                    'armn': 'n\u00FAmeros en armenio',
                    'arabext': 'd\u00EDgitos indoar\u00E1bigos extendidos',
                    'arab': 'd\u00EDgitos indoar\u00E1bigos',
                    'finance': 'N\u00FAmeros financieros',
                    'traditional': 'N\u00FAmeros tradicionales',
                    'native': 'D\u00EDgitos nativos',
                    'beng': 'd\u00EDgitos en bengal\u00ED',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'd\u00EDgitos en devanagari',
                    'orya': 'd\u00EDgitos en oriya',
                    'osma': 'osma',
                    'roman': 'n\u00FAmeros romanos',
                    'romanlow': 'n\u00FAmeros romanos en min\u00FAscula',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'D\u00EDgitos vai',
                    'tibt': 'd\u00EDgitos en tibetano',
                    'thai': 'd\u00EDgitos en tailand\u00E9s',
                    'telu': 'd\u00EDgitos en telugu',
                    'tamldec': 'd\u00EDgitos en tamil',
                    'taml': 'n\u00FAmeros en tamil tradicional',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'd\u00EDgitos en birmano',
                    'mtei': 'mtei',
                    'mong': 'd\u00EDgitos en mongol',
                    'mlym': 'd\u00EDgitos en malayalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'd\u00EDgitos occidentales',
                    'laoo': 'd\u00EDgitos en lao',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'n\u00FAmeros en georgiano',
                    'fullwide': 'd\u00EDgitos de ancho completo',
                    'ethi': 'n\u00FAmeros en et\u00EDope'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordenar s\u00EDmbolos',
                    'shifted': 'Ordenar ignorando s\u00EDmbolos'
                },
                'colBackwards': {
                    'no': 'Ordenar acentos normalmente',
                    'yes': 'Ordenar acentos con inversi\u00F3n'
                }
            },
            'keys': {
                'colNormalization': 'Orden con normalizaci\u00F3n',
                'collation': 'orden',
                'colHiraganaQuaternary': 'Orden de kana',
                'colCaseLevel': 'Orden con distinci\u00F3n entre may\u00FAsculas y min\u00FAsculas',
                'colCaseFirst': 'Orden de may\u00FAsculas/min\u00FAsculas',
                'colBackwards': 'Orden de acentos con inversi\u00F3n',
                'colAlternate': 'Orden ignorando s\u00EDmbolos',
                'calendar': 'calendario',
                'x': 'Uso privado',
                'variableTop': 'Ordenar como s\u00EDmbolos',
                'va': 'Variante local',
                'timezone': 'Zona horaria',
                'numbers': 'n\u00FAmeros',
                'currency': 'moneda',
                'colStrength': 'Intensidad de orden',
                'colNumeric': 'Orden num\u00E9rico'
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
                            'exemplarCity': 'Saip\u00E1n'
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
                            'exemplarCity': 'Gal\u00E1pagos'
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
                            'exemplarCity': 'Honolul\u00FA'
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
                            'exemplarCity': 'Tahit\u00ED'
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
                            'exemplarCity': 'S\u00EDdney'
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
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reuni\u00F3n'
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
                            'exemplarCity': "Dumont d'Urville"
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
                            'exemplarCity': 'Caim\u00E1n'
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
                            'exemplarCity': 'Canc\u00FAn'
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
                            'exemplarCity': 'Asunci\u00F3n'
                        },
                        'Aruba': {
                            'exemplarCity': 'Aruba'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'R\u00EDo Gallegos'
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
                                'exemplarCity': 'Tucum\u00E1n'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Aragua\u00EDna'
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
                            'exemplarCity': 'Bah\u00EDa'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bah\u00EDa de Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Bel\u00E9n'
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
                            'exemplarCity': 'Bogot\u00E1'
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
                            'exemplarCity': 'Indian\u00E1polis'
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
                            'exemplarCity': 'T\u00F3rtola'
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
                            'exemplarCity': 'Eirunep\u00E9'
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
                            'exemplarCity': 'C\u00F3rdoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiab\u00E1'
                        },
                        'La_Paz': {
                            'exemplarCity': 'La Paz'
                        },
                        'Lima': {
                            'exemplarCity': 'Lima'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Los \u00C1ngeles'
                        },
                        'Louisville': {
                            'exemplarCity': 'Louisville'
                        },
                        'Lower_Princes': {
                            'exemplarCity': "Lower Prince's Quarter"
                        },
                        'Maceio': {
                            'exemplarCity': 'Macei\u00F3'
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
                            'exemplarCity': 'Mazatl\u00E1n'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'M\u00E9rida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Ciudad de M\u00E9xico'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Miquel\u00F3n'
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
                            'exemplarCity': 'Panam\u00E1'
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
                            'exemplarCity': 'Puerto Pr\u00EDncipe'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Puerto Espa\u00F1a'
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
                            'exemplarCity': 'R\u00EDo Branco'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Santa Isabel'
                        },
                        'Santarem': {
                            'exemplarCity': 'Santar\u00E9m'
                        },
                        'Santiago': {
                            'exemplarCity': 'Santiago'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'S\u00E3o Paulo'
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
                            'exemplarCity': 'San Bartolom\u00E9'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Santa Luc\u00EDa'
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
                            'exemplarCity': 'Mosc\u00FA'
                        },
                        'Monaco': {
                            'exemplarCity': 'M\u00F3naco'
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
                                'daylight': 'Hora de verano brit\u00E1nica'
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
                            'exemplarCity': 'Berl\u00EDn'
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
                            'exemplarCity': '\u00C1msterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopie'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sof\u00EDa'
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
                            'exemplarCity': 'Z\u00FArich'
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
                            'exemplarCity': 'Par\u00EDs'
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
                            'exemplarCity': 'Dubl\u00EDn'
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
                            'exemplarCity': 'Jart\u00FAn'
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
                            'exemplarCity': 'El Aai\u00FAn'
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
                            'exemplarCity': 'T\u00FAnez capital'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Tr\u00EDpoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Santo Tom\u00E9'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Portonovo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Uagadug\u00FA'
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
                            'exemplarCity': 'Lom\u00E9'
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
                            'exemplarCity': 'Bis\u00E1u'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Abiy\u00E1n'
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
                            'exemplarCity': 'Shangh\u00E1i'
                        },
                        'Seoul': {
                            'exemplarCity': 'Se\u00FAl'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sajal\u00EDn'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ciudad Ho Chi Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rang\u00FAn'
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
                            'exemplarCity': 'Dub\u00E1i'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duchanb\u00E9'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebr\u00F3n'
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
                            'exemplarCity': 'Ul\u00E1n Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u00DCr\u00FCmqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vienti\u00E1n'
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
                            'exemplarCity': 'Erev\u00E1n'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Timbu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teher\u00E1n'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tiflis'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taip\u00E9i'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusal\u00E9n'
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
                            'exemplarCity': 'Amm\u00E1n'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
                        },
                        'Aden': {
                            'exemplarCity': 'Ad\u00E9n'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bar\u00E9in'
                        },
                        'Baku': {
                            'exemplarCity': 'Bak\u00FA'
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
                            'exemplarCity': 'Brun\u00E9i'
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
                            'exemplarCity': 'Katmand\u00FA'
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
                            'exemplarCity': 'Magad\u00E1n'
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
                            'standard': 'Hora est\u00E1ndar de Samoa',
                            'daylight': 'Hora de verano de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hora de Samara',
                            'standard': 'Hora est\u00E1ndar de Samara',
                            'daylight': 'Hora de verano de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hora de Sajal\u00EDn',
                            'standard': 'Hora est\u00E1ndar de Sajal\u00EDn',
                            'daylight': 'Hora de verano de Sajal\u00EDn'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hora de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hora de Reuni\u00F3n'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Hora de Qyzylorda',
                            'standard': 'Hora est\u00E1ndar de Qyzylorda',
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
                            'generic': 'Hora de San Pedro y Miquel\u00F3n',
                            'standard': 'Hora est\u00E1ndar de San Pedro y Miquel\u00F3n',
                            'daylight': 'Hora de verano de San Pedro y Miquel\u00F3n'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Hora de las islas F\u00E9nix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hora de Filipinas',
                            'standard': 'Hora est\u00E1ndar de Filipinas',
                            'daylight': 'Hora de verano de Filipinas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hora de Per\u00FA',
                            'standard': 'Hora est\u00E1ndar de Per\u00FA',
                            'daylight': 'Hora de verano de Per\u00FA'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Hora de Paraguay',
                            'standard': 'Hora est\u00E1ndar de Paraguay',
                            'daylight': 'Hora de verano de Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Hora de Pap\u00FAa-Nueva Guinea'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Hora de Palaos'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hora de Pakist\u00E1n',
                            'standard': 'Hora est\u00E1ndar de Pakist\u00E1n',
                            'daylight': 'Hora de verano de Pakist\u00E1n'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Hora de Omsk',
                            'standard': 'Hora est\u00E1ndar de Omsk',
                            'daylight': 'Hora de verano de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hora de Novosibirsk',
                            'standard': 'Hora est\u00E1ndar de Novosibirsk',
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
                            'standard': 'Hora est\u00E1ndar de Fernando de Noronha',
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
                            'standard': 'Hora est\u00E1ndar de Acre',
                            'daylight': 'Hora de verano de Acre'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Hora central',
                            'standard': 'Hora est\u00E1ndar central',
                            'daylight': 'Hora de verano central'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Hora oriental',
                            'standard': 'Hora est\u00E1ndar oriental',
                            'daylight': 'Hora de verano oriental'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hora de las Monta\u00F1as',
                            'standard': 'Hora est\u00E1ndar de las Monta\u00F1as',
                            'daylight': 'Hora de verano de las Monta\u00F1as'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hora del Pac\u00EDfico',
                            'standard': 'Hora est\u00E1ndar del Pac\u00EDfico',
                            'daylight': 'Hora de verano del Pac\u00EDfico'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Hora de Anadyr',
                            'standard': 'Hora est\u00E1ndar de Anadyr',
                            'daylight': 'Hora de verano de Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Hora de Aktau',
                            'standard': 'Hora est\u00E1ndar de Aktau',
                            'daylight': 'Hora de verano de Aktau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Hora de Aktobe',
                            'standard': 'Hora est\u00E1ndar de Aktobe',
                            'daylight': 'Hora de verano de Aktobe'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hora de Arabia',
                            'standard': 'Hora est\u00E1ndar de Arabia',
                            'daylight': 'Hora de verano de Arabia'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Hora est\u00E1ndar de Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Hora de Chatham',
                            'standard': 'Hora est\u00E1ndar de Chatham',
                            'daylight': 'Hora de verano de Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hora de Chile',
                            'standard': 'Hora est\u00E1ndar de Chile',
                            'daylight': 'Hora de verano de Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hora de China',
                            'standard': 'Hora est\u00E1ndar de China',
                            'daylight': 'Hora de verano de China'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hora de Choibalsan',
                            'standard': 'Hora est\u00E1ndar de Choibalsan',
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
                            'standard': 'Hora est\u00E1ndar de Colombia',
                            'daylight': 'Hora de verano de Colombia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hora de las islas Cook',
                            'standard': 'Hora est\u00E1ndar de las islas Cook',
                            'daylight': 'Hora de verano media de las islas Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hora de Cuba',
                            'standard': 'Hora est\u00E1ndar de Cuba',
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
                            'standard': 'Hora de Dumont-d\u2019Urville'
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
                            'standard': 'Hora est\u00E1ndar de la isla de Pascua',
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
                            'standard': 'Hora est\u00E1ndar de Europa central',
                            'daylight': 'Hora de verano de Europa central'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Hora de Europa oriental',
                            'standard': 'Hora est\u00E1ndar de Europa oriental',
                            'daylight': 'Hora de verano de Europa oriental'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Hora de Europa occidental',
                            'standard': 'Hora est\u00E1ndar de Europa occidental',
                            'daylight': 'Hora de verano de Europa occidental'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Hora de las islas Malvinas',
                            'standard': 'Hora est\u00E1ndar de las islas Malvinas',
                            'daylight': 'Hora de verano de las islas Malvinas'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hora de Fiyi',
                            'standard': 'Hora est\u00E1ndar de Fiyi',
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
                            'standard': 'Hora de las Tierras Australes y Ant\u00E1rticas Francesas'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hora de Gal\u00E1pagos'
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
                            'standard': 'Hora est\u00E1ndar de Tonga',
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
                            'generic': 'Hora de Turkmenist\u00E1n',
                            'standard': 'Hora est\u00E1ndar de Turkmenist\u00E1n',
                            'daylight': 'Hora de verano de Turkmenist\u00E1n'
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
                            'standard': 'Hora est\u00E1ndar de Uruguay',
                            'daylight': 'Hora de verano de Uruguay'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Hora de Uzbekist\u00E1n',
                            'standard': 'Hora est\u00E1ndar de Uzbekist\u00E1n',
                            'daylight': 'Hora de verano de Uzbekist\u00E1n'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hora de Vanuatu',
                            'standard': 'Hora est\u00E1ndar de Vanuatu',
                            'daylight': 'Hora de verano de Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Hora de Ekaterimburgo',
                            'standard': 'Hora est\u00E1ndar de Ekaterimburgo',
                            'daylight': 'Hora de verano de Ekaterimburgo'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hora de Yakutsk',
                            'standard': 'Hora est\u00E1ndar de Yakutsk',
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
                            'standard': 'Hora est\u00E1ndar de Volgogrado',
                            'daylight': 'Hora de verano de Volgogrado'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hora de Vladivostok',
                            'standard': 'Hora est\u00E1ndar de Vladivostok',
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
                            'standard': 'Hora de Tayikist\u00E1n'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Hora de Taip\u00E9i',
                            'standard': 'Hora est\u00E1ndar de Taip\u00E9i',
                            'daylight': 'Hora de verano de Taip\u00E9i'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Hora de Tahit\u00ED'
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
                            'standard': 'Hora de las Islas Salom\u00F3n'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Hora de Guyana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Hora est\u00E1ndar del Golfo'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Hora est\u00E1ndar de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Hora de Groenlandia occidental',
                            'standard': 'Hora est\u00E1ndar de Groenlandia occidental',
                            'daylight': 'Hora de verano de Groenlandia occidental'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Hora de Groenlandia oriental',
                            'standard': 'Hora est\u00E1ndar de Groenlandia oriental',
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
                            'standard': 'Hora est\u00E1ndar de Georgia',
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
                            'standard': 'Hora de Afganist\u00E1n'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Hora de \u00C1frica central'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Hora de \u00C1frica oriental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Hora de Sud\u00E1frica'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Hora de \u00C1frica occidental',
                            'standard': 'Hora est\u00E1ndar de \u00C1frica occidental',
                            'daylight': 'Hora de verano de \u00C1frica occidental'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Hora de Alaska',
                            'standard': 'Hora est\u00E1ndar de Alaska',
                            'daylight': 'Hora de verano de Alaska'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Hora del Amazonas',
                            'standard': 'Hora est\u00E1ndar del Amazonas',
                            'daylight': 'Hora de verano del Amazonas'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Hora de Argentina',
                            'standard': 'Hora est\u00E1ndar de Argentina',
                            'daylight': 'Hora de verano de Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Hora de Argentina occidental',
                            'standard': 'Hora est\u00E1ndar de Argentina occidental',
                            'daylight': 'Hora de verano de Argentina occidental'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Hora de Armenia',
                            'standard': 'Hora est\u00E1ndar de Armenia',
                            'daylight': 'Hora de verano de Armenia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Hora del Atl\u00E1ntico',
                            'standard': 'Hora est\u00E1ndar del Atl\u00E1ntico',
                            'daylight': 'Hora de verano del Atl\u00E1ntico'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Hora de Australia central',
                            'standard': 'Hora est\u00E1ndar de Australia central',
                            'daylight': 'Hora de verano de Australia central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Hora de Australia centroccidental',
                            'standard': 'Hora est\u00E1ndar de Australia centroccidental',
                            'daylight': 'Hora de verano de Australia centroccidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Hora de Australia oriental',
                            'standard': 'Hora est\u00E1ndar de Australia oriental',
                            'daylight': 'Hora de verano de Australia oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Hora de Australia occidental',
                            'standard': 'Hora est\u00E1ndar de Australia occidental',
                            'daylight': 'Hora de verano de Australia occidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Hora de Azerbaiy\u00E1n',
                            'standard': 'Hora est\u00E1ndar de Azerbaiy\u00E1n',
                            'daylight': 'Hora de verano de Azerbaiy\u00E1n'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hora de las Azores',
                            'standard': 'Hora est\u00E1ndar de las Azores',
                            'daylight': 'Hora de verano de las Azores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Hora de Banglad\u00E9s',
                            'standard': 'Hora est\u00E1ndar de Banglad\u00E9s',
                            'daylight': 'Hora de verano de Banglad\u00E9s'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hora de But\u00E1n'
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
                            'standard': 'Hora est\u00E1ndar de Brasilia',
                            'daylight': 'Hora de verano de Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Hora de Brun\u00E9i'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Hora de Cabo Verde',
                            'standard': 'Hora est\u00E1ndar de Cabo Verde',
                            'daylight': 'Hora de verano de Cabo Verde'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hora de Haw\u00E1i-Aleutiano',
                            'standard': 'Hora est\u00E1ndar de Haw\u00E1i-Aleutiano',
                            'daylight': 'Hora de verano de Haw\u00E1i-Aleutiano'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hora de Hong Kong',
                            'standard': 'Hora est\u00E1ndar de Hong Kong',
                            'daylight': 'Hora de verano de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hora de Hovd',
                            'standard': 'Hora est\u00E1ndar de Hovd',
                            'daylight': 'Hora de verano de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hora est\u00E1ndar de la India'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hora del Oc\u00E9ano \u00CDndico'
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
                            'generic': 'Hora de Ir\u00E1n',
                            'standard': 'Hora est\u00E1ndar de Ir\u00E1n',
                            'daylight': 'Hora de verano de Ir\u00E1n'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Hora de Irkutsk',
                            'standard': 'Hora est\u00E1ndar de Irkutsk',
                            'daylight': 'Hora de verano de Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Hora de Israel',
                            'standard': 'Hora est\u00E1ndar de Israel',
                            'daylight': 'Hora de verano de Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hora de Jap\u00F3n',
                            'standard': 'Hora est\u00E1ndar de Jap\u00F3n',
                            'daylight': 'Hora de verano de Jap\u00F3n'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hora de Kamchatka',
                            'standard': 'Hora de est\u00E1ndar de Kamchatka',
                            'daylight': 'Hora de verano de Kamchatka'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Hora de Kazajist\u00E1n oriental'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Hora de Kazajist\u00E1n occidental'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hora de Corea',
                            'standard': 'Hora est\u00E1ndar de Corea',
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
                            'standard': 'Hora est\u00E1ndar de Krasnoyarsk',
                            'daylight': 'Hora de verano de Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Hora de Kirguist\u00E1n'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Hora de Sri Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Hora de las Esp\u00F3radas Ecuatoriales'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Hora de Lord Howe',
                            'standard': 'Hora est\u00E1ndar de Lord Howe',
                            'daylight': 'Hora de verano de Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Hora de Macao',
                            'standard': 'Hora est\u00E1ndar de Macao',
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
                            'generic': 'Hora de Magad\u00E1n',
                            'standard': 'Hora est\u00E1ndar de Magad\u00E1n',
                            'daylight': 'Hora de verano de Magad\u00E1n'
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
                            'standard': 'Hora est\u00E1ndar de Mauricio',
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
                            'generic': 'Hora de Ul\u00E1n Bator',
                            'standard': 'Hora est\u00E1ndar de Ul\u00E1n Bator',
                            'daylight': 'Hora de verano de Ul\u00E1n Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hora de Mosc\u00FA',
                            'standard': 'Hora est\u00E1ndar de Mosc\u00FA',
                            'daylight': 'Hora de verano de Mosc\u00FA'
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
                            'standard': 'Hora est\u00E1ndar de Nueva Caledonia',
                            'daylight': 'Hora de verano de Nueva Caledonia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hora de Nueva Zelanda',
                            'standard': 'Hora est\u00E1ndar de Nueva Zelanda',
                            'daylight': 'Hora de verano de Nueva Zelanda'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Hora de Terranova',
                            'standard': 'Hora est\u00E1ndar de Terranova',
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
                'regionFormat-type-standard': 'horario est\u00E1ndar de {0}',
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
                                'wed': 'mi\u00E9.',
                                'thu': 'jue.',
                                'fri': 'vie.',
                                'sat': 's\u00E1b.'
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
                                'wed': 'mi\u00E9rcoles',
                                'thu': 'jueves',
                                'fri': 'viernes',
                                'sat': 's\u00E1bado'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Dom.',
                                'mon': 'Lun.',
                                'tue': 'Mar.',
                                'wed': 'Mi\u00E9.',
                                'thu': 'Jue.',
                                'fri': 'Vie.',
                                'sat': 'S\u00E1b.'
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
                                'wed': 'Mi\u00E9rcoles',
                                'thu': 'Jueves',
                                'fri': 'Viernes',
                                'sat': 'S\u00E1bado'
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
                                '2': '2.\u00BA trimestre',
                                '3': '3.er trimestre',
                                '4': '4.\u00BA trimestre'
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
                                '2': '2.\u00BA trimestre',
                                '3': '3.er trimestre',
                                '4': '4.\u00BA trimestre'
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
                            '1': 'anno D\u00F3mini',
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
                        'full': "EEEE, d 'de' MMMM 'de' y",
                        'long': "d 'de' MMMM 'de' y",
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
                            'GyMMMd': "d MMM 'de' y G",
                            'GyMMMEd': "E, d 'de' MMMM 'de' y G",
                            'h': 'h a',
                            'H': 'H',
                            'hm': 'h:mm a',
                            'Hm': 'H:mm',
                            'yQQQQ': "QQQQ 'de' y",
                            'yQQQ': 'QQQ y',
                            'yMMMM': "MMMM 'de' y",
                            'yMMMEd': "EEE, d 'de' MMMM 'de' y",
                            'yMMMd': "d 'de' MMM 'de' y",
                            'yMMM': "MMM 'de' y",
                            'Hms': 'H:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Ehm': 'E, h:mm a',
                            'EHm': 'E, H:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, H:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': "MMM 'de' y G",
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, d/M',
                            'MMd': 'd/M',
                            'MMdd': 'd/M',
                            'MMM': 'LLL',
                            'MMMd': "d 'de' MMM",
                            'MMMdd': 'dd-MMM',
                            'MMMEd': "E d 'de' MMM",
                            'MMMMd': "d 'de' MMMM"
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
                                'd': 'E, d MMM\u2013E, d MMM',
                                'M': 'E, d MMM\u2013E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd\u2013d MMM',
                                'M': 'd MMM\u2013d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M\u2013E, d/M',
                                'M': 'E, d/M\u2013E, d/M'
                            },
                            'Md': {
                                'd': 'd/M\u2013d/M',
                                'M': 'd/M\u2013d/M'
                            },
                            'M': {
                                'M': 'M\u2013M'
                            },
                            'Hv': {
                                'H': 'H\u2013H v'
                            },
                            'hv': {
                                'a': 'h a\u2013h a v',
                                'h': 'h\u2013h a v'
                            },
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'M/y\u2013M/y',
                                'y': 'M/y\u2013M/y'
                            },
                            'yMd': {
                                'd': 'd/M/y\u2013d/M/y',
                                'M': 'd/M/y\u2013d/M/y',
                                'y': 'd/M/y\u2013d/M/y'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y\u2013E, d/M/y',
                                'M': 'E, d/M/y\u2013E, d/M/y',
                                'y': 'E, d/M/y\u2013E, d/M/y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y\u2013MMM y'
                            },
                            'yMMMd': {
                                'd': 'd\u2013d MMM y',
                                'M': "d MMM\u2013d MMM 'de' y",
                                'y': "d MMM 'de' y\u2013d MMM 'de' y"
                            },
                            'yMMMEd': {
                                'd': "E, d MMM\u2013E, d MMM 'de' y",
                                'M': "E, d MMM\u2013E, d MMM 'de' y",
                                'y': "E, d MMM 'de' y\u2013E, d MMM 'de' y"
                            },
                            'yMMMM': {
                                'M': "MMMM\u2013MMMM 'de' y",
                                'y': "MMMM 'de' y\u2013MMMM 'de' y"
                            },
                            'Hmv': {
                                'H': 'H:mm\u2013H:mm v',
                                'm': 'H:mm\u2013H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a\u2013h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm\u2013h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm\u2013H:mm',
                                'm': 'H:mm\u2013H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a \u2013 h:mm a',
                                'h': 'h:mm \u2013 h:mm a',
                                'm': 'h:mm \u2013 h:mm a'
                            },
                            'H': {
                                'H': 'H\u2013H'
                            },
                            'h': {
                                'a': 'h a\u2013h a',
                                'h': 'h\u2013h a'
                            },
                            'd': {
                                'd': 'd\u2013d'
                            },
                            'intervalFormatFallback': '{0}\u2013{1}'
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
