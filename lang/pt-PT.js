/* AstroDate
 * Language: pt-PT
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
        AstroDate.lang('pt-PT', {
            'codePatterns': {
                'language': 'Idioma: {0}',
                'script': 'Escrita: {0}',
                'territory': 'Regi\u00E3o: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordenar Kana Separadamente',
                    'yes': 'Ordenar Kana Diferentemente'
                },
                'colCaseLevel': {
                    'no': 'Ordenar Insens\u00EDvel a Mai\u00FAsculas/Min\u00FAsculas',
                    'yes': 'Ordenar Sens\u00EDvel a Mai\u00FAsculas/Min\u00FAsculas'
                },
                'colCaseFirst': {
                    'lower': 'Ordenar Min\u00FAsculas Primeiro',
                    'no': 'Ordenar Disposi\u00E7\u00E3o de Tipo de Letra Normal',
                    'upper': 'Ordenar Mai\u00FAsculas Primeiro'
                },
                'colStrength': {
                    'identical': 'Ordenar Tudo',
                    'primary': 'Ordenar Apenas Letras B\u00E1sicas',
                    'quaternary': 'Ordenar Acentos/Tipo de Letra/Largura/Kana',
                    'secondary': 'Ordenar Acentos',
                    'tertiary': 'Ordenar Acentos/Tipo de Letra/Largura'
                },
                'colNumeric': {
                    'no': 'Ordenar D\u00EDgitos Individualmente',
                    'yes': 'Ordenar D\u00EDgitos Numericamente'
                },
                'colNormalization': {
                    'no': 'Ordenar Sem Normaliza\u00E7\u00E3o',
                    'yes': 'Ordenar Unicode Normalizado'
                },
                'calendar': {
                    'japanese': 'Calend\u00E1rio Japon\u00EAs',
                    'iso8601': 'iso8601',
                    'coptic': 'Calend\u00E1rio Copta',
                    'dangi': 'dangi',
                    'ethiopic': 'Calend\u00E1rio Et\u00EDope',
                    'ethiopic-amete-alem': 'Calend\u00E1rio Et\u00EDope Amete Alem',
                    'gregorian': 'Calend\u00E1rio Gregoriano',
                    'hebrew': 'Calend\u00E1rio Hebraico',
                    'persian': 'Calend\u00E1rio Persa',
                    'roc': 'Calend\u00E1rio da Rep\u00FAblica da China',
                    'chinese': 'Calend\u00E1rio Chin\u00EAs',
                    'buddhist': 'Calend\u00E1rio Budista',
                    'indian': 'Calend\u00E1rio Nacional Indiano',
                    'islamic': 'Calend\u00E1rio Isl\u00E2mico',
                    'islamic-civil': 'Calend\u00E1rio Isl\u00E2mico/Civil',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Ordem da Lista Telef\u00F3nica',
                    'gb2312han': 'Ordem do Chin\u00EAs Simplificado - GB2312',
                    'eor': 'eor',
                    'ducet': 'Ordena\u00E7\u00E3o Unicode Predefinida',
                    'dictionary': 'Ordena\u00E7\u00E3o do Dicion\u00E1rio',
                    'big5han': 'Ordem do Chin\u00EAs Tradicional - Big5',
                    'traditional': 'Ordem tradicional',
                    'standard': 'Ordena\u00E7\u00E3o Predefinida',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Ordem por radical e tra\u00E7os',
                    'stroke': 'Ordem por tra\u00E7os',
                    'searchjl': 'Pesquisar Por Consoante Inicial Hangul',
                    'search': 'Pesquisa de uso geral',
                    'reformed': 'Reforma da Ordena\u00E7\u00E3o',
                    'pinyin': 'Ordem do Chin\u00EAs Simplificado Pinyin',
                    'phonetic': 'Sequ\u00EAncia de Ordena\u00E7\u00E3o Fon\u00E9tica'
                },
                'numbers': {
                    'knda': 'Algarismos de Canarim',
                    'khmr': 'Algarismos Khmer',
                    'kali': 'kali',
                    'jpanfin': 'Numera\u00E7\u00E3o Financeira Japonesa',
                    'jpan': 'Numera\u00E7\u00E3o Japonesa',
                    'java': 'java',
                    'hebr': 'Numera\u00E7\u00E3o Hebraica',
                    'hantfin': 'Numera\u00E7\u00E3o Financeira Chin\u00EAs Tradicional',
                    'hant': 'Numera\u00E7\u00E3o Chin\u00EAs Tradicional',
                    'hansfin': 'Numera\u00E7\u00E3o Financeira Chin\u00EAs Simplificado',
                    'hans': 'Numera\u00E7\u00E3o Chin\u00EAs Simplificado',
                    'hanidec': 'Numera\u00E7\u00E3o Decimal Chinesa',
                    'guru': 'Algarismos Gurmukhi',
                    'gujr': 'Algarismos de Guzerate',
                    'greklow': 'Numera\u00E7\u00E3o Grega Min\u00FAscula',
                    'grek': 'Numera\u00E7\u00E3o Grega',
                    'bali': 'bali',
                    'armnlow': 'Numera\u00E7\u00E3o Arm\u00E9nia Min\u00FAscula',
                    'armn': 'Algarismos Arm\u00E9nios',
                    'arabext': 'Algarismos indo-ar\u00E1bicos por extenso',
                    'arab': 'Algarismos indo-ar\u00E1bicos',
                    'finance': 'Algarismos Financeiros',
                    'traditional': 'Algarismos Tradicionais',
                    'native': 'D\u00EDgitos Nativos',
                    'beng': 'Algarismos Bengalis',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Algarismos Devan\u00E1garis',
                    'orya': 'Algarismos Ori\u00E1',
                    'osma': 'osma',
                    'roman': 'Numera\u00E7\u00E3o Romana',
                    'romanlow': 'Numera\u00E7\u00E3o Romana Min\u00FAscula',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'D\u00EDgitos Vai',
                    'tibt': 'Algarismos Tibetanos',
                    'thai': 'Algarismos Tailandeses',
                    'telu': 'Algarismos de Telugu',
                    'tamldec': 'Algarismos T\u00E2mil',
                    'taml': 'Numera\u00E7\u00E3o T\u00E2mil',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Algarismos de Mianmar',
                    'mtei': 'mtei',
                    'mong': 'Algarismos Mong\u00F3is',
                    'mlym': 'Algarismos Malaiala',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Algarismos Ocidentais',
                    'laoo': 'Algarismos de Laos',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Numera\u00E7\u00E3o Georgiana',
                    'fullwide': 'Algarismos de Largura Completa',
                    'ethi': 'Numera\u00E7\u00E3o Et\u00EDope'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordenar S\u00EDmbolos',
                    'shifted': 'Ordenar S\u00EDmbolos Ignorados'
                },
                'colBackwards': {
                    'no': 'Ordenar Acentos Normalmente',
                    'yes': 'Ordenar Acentos Inversamente'
                }
            },
            'keys': {
                'colNormalization': 'Ordena\u00E7\u00E3o Normalizada',
                'collation': 'Ordena\u00E7\u00E3o',
                'colHiraganaQuaternary': 'Ordena\u00E7\u00E3o Kana',
                'colCaseLevel': 'Ordena\u00E7\u00E3o Sens\u00EDvel a Mai\u00FAsculas e Min\u00FAsculas',
                'colCaseFirst': 'Disposi\u00E7\u00E3o de Mai\u00FAsculas/Min\u00FAsculas',
                'colBackwards': 'Ordena\u00E7\u00E3o de Acentos Invertida',
                'colAlternate': 'Ignorar Ordena\u00E7\u00E3o de S\u00EDmbolos',
                'calendar': 'Calend\u00E1rio',
                'x': 'Utiliza\u00E7\u00E3o Privada',
                'variableTop': 'Ordenar Como S\u00EDmbolos',
                'va': 'Variante Local',
                'timezone': 'Fuso Hor\u00E1rio',
                'numbers': 'N\u00FAmeros',
                'currency': 'Moeda',
                'colStrength': 'For\u00E7a da Ordena\u00E7\u00E3o',
                'colNumeric': 'Ordena\u00E7\u00E3o Num\u00E9rica'
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
                            'exemplarCity': 'Ilhas Pitcairn'
                        },
                        'Palau': {
                            'exemplarCity': 'Palau'
                        },
                        'Auckland': {
                            'exemplarCity': 'Auckland'
                        },
                        'Apia': {
                            'exemplarCity': '\u00C1pia'
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
                            'exemplarCity': 'Taiti'
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
                            'exemplarCity': 'Ilha de P\u00E1scoa'
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
                            'exemplarCity': 'Noum\u00E9a'
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
                            'exemplarCity': 'Ilha de Lord Howe'
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
                            'exemplarCity': 'Maldivas'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reuni\u00E3o'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Maur\u00EDcia'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Ilha do Natal'
                        },
                        'Cocos': {
                            'exemplarCity': 'Ilhas Coco'
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
                            'exemplarCity': 'Cidade desconhecida'
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
                            'exemplarCity': 'P\u00F3lo Sul'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d\u2019Urville'
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
                            'exemplarCity': 'Caim\u00E3o'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Caiena'
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
                            'exemplarCity': 'Assun\u00E7\u00E3o'
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
                                'exemplarCity': 'Tucum\u00E1n'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Araguaina'
                        },
                        'Antigua': {
                            'exemplarCity': 'Ant\u00EDgua'
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
                            'exemplarCity': 'Ba\u00EDa'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bahia Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Bel\u00E9m'
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
                            'exemplarCity': 'Bogot\u00E1'
                        },
                        'Curacao': {
                            'exemplarCity': 'Cura\u00E7ao'
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
                            'exemplarCity': 'Guiana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guaiaquil'
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
                            'exemplarCity': 'Dom\u00EDnica'
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
                            'exemplarCity': 'Los Angeles'
                        },
                        'Louisville': {
                            'exemplarCity': 'Louisville'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Lower Prince\'s Quarter'
                        },
                        'Maceio': {
                            'exemplarCity': 'Macei\u00F3'
                        },
                        'Managua': {
                            'exemplarCity': 'Man\u00E1gua'
                        },
                        'Manaus': {
                            'exemplarCity': 'Manaus'
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
                            'exemplarCity': 'Mazatlan'
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
                            'exemplarCity': 'Cidade do M\u00E9xico'
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
                            'exemplarCity': 'Montevideu'
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
                            'exemplarCity': 'Nova Iorque'
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
                                'exemplarCity': 'Beulah, Dakota do Norte'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salen, Dakota do Norte'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Dakota do Norte'
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
                            'exemplarCity': 'Port-au-Prince'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Porto de Espanha'
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
                            'exemplarCity': 'S\u00E3o Bartolomeu'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'S\u00E3o Crist\u00F3v\u00E3o'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Santa L\u00FAcia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'St. Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'S\u00E3o Vicente'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Ge\u00F3rgia do Sul'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reiquiavique'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Santa Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'A\u00E7ores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudas'
                        },
                        'Canary': {
                            'exemplarCity': 'Can\u00E1rias'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cabo Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faro\u00E9'
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
                            'exemplarCity': 'Moscovo'
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
                                'daylight': 'Hora de Ver\u00E3o Brit\u00E2nico'
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
                            'exemplarCity': 'Caliningrado'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Istambul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Ilha de Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucareste'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruxelas'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlim'
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
                            'exemplarCity': 'Amesterd\u00E3o'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'S\u00F3fia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Estocolmo'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
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
                            'exemplarCity': 'Zurique'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporizhia'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Vars\u00F3via'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgogrado'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vaticano'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'S\u00E3o Marinho'
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
                            'exemplarCity': 'Podg\u00F3ritza'
                        },
                        'Paris': {
                            'exemplarCity': 'Paris'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Hels\u00EDnquia'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Hora de Ver\u00E3o da Irlanda'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhaga'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapeste'
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
                            'exemplarCity': 'Cartum'
                        },
                        'Kampala': {
                            'exemplarCity': 'Campala'
                        },
                        'Juba': {
                            'exemplarCity': 'Juba'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Joanesburgo'
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
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Jibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es Salaam'
                        },
                        'Dakar': {
                            'exemplarCity': 'Dacar'
                        },
                        'Banjul': {
                            'exemplarCity': 'Banjul'
                        },
                        'Bangui': {
                            'exemplarCity': 'Bangui'
                        },
                        'Bamako': {
                            'exemplarCity': 'Bamaco'
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
                            'exemplarCity': 'Mogad\u00EDscio'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monr\u00F3via'
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
                            'exemplarCity': 'Tunes'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Tripoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'S\u00E3o Tom\u00E9'
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
                            'exemplarCity': 'Niamei'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Lusaca'
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
                            'exemplarCity': 'Conacri'
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
                            'exemplarCity': 'Acra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Adis-Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Argel'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Xangai'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sacalina'
                        },
                        'Saigon': {
                            'exemplarCity': 'Cidade de Ho Chi Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riade'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
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
                            'exemplarCity': 'Bagdade'
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
                            'exemplarCity': 'Daca'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duchambe'
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
                            'exemplarCity': 'Hong Kong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jacarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
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
                            'exemplarCity': 'Yakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Ecaterimburgo'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'T\u00F3quio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Timphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teer\u00E3o'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taip\u00E9'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapura'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusal\u00E9m'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asgabate'
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
                            'exemplarCity': 'Am\u00E3'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
                        },
                        'Aden': {
                            'exemplarCity': 'Adem'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bar\u00E9m'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Banguecoque'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beirute'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bishkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Calcut\u00E1'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Cabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamchatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Carachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Catmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoyarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lampur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuwait'
                        },
                        'Macau': {
                            'exemplarCity': 'Macau'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Macassar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Mascate'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nic\u00F3sia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Hora das Seicheles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Hora de Samoa',
                            'standard': 'Hora Padr\u00E3o de Samoa',
                            'daylight': 'Hora de Ver\u00E3o de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hora de Samara',
                            'standard': 'Hora Padr\u00E3o de Samara',
                            'daylight': 'Hora de Ver\u00E3o de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hora de Sacalina',
                            'standard': 'Hora Padr\u00E3o de Sacalina',
                            'daylight': 'Hora de Ver\u00E3o de Sacalina'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hora de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hora de Reuni\u00E3o'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Hora de Qyzylorda',
                            'standard': 'Hora Padr\u00E3o de Qyzylorda',
                            'daylight': 'Hora de Ver\u00E3o de Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Hora de Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Hora de Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Hora de S\u00E3o Pedro e Miquel\u00E3o',
                            'standard': 'Hora Padr\u00E3o de S\u00E3o Pedro e Miquel\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o de S\u00E3o Pedro e Miquel\u00E3o'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Hora das Ilhas F\u00E9nix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hora das Filipinas',
                            'standard': 'Hora Padr\u00E3o das Filipinas',
                            'daylight': 'Hora de Ver\u00E3o das Filipinas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hora do Peru',
                            'standard': 'Hora Padr\u00E3o do Peru',
                            'daylight': 'Hora de Ver\u00E3o do Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Hora do Paraguai',
                            'standard': 'Hora Padr\u00E3o do Paraguai',
                            'daylight': 'Hora de Ver\u00E3o do Paraguai'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Hora de Papua Nova Guin\u00E9'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Hora de Palau'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hora do Paquist\u00E3o',
                            'standard': 'Hora Padr\u00E3o do Paquist\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o do Paquist\u00E3o'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Hora de Omsk',
                            'standard': 'Hora Padr\u00E3o de Omsk',
                            'daylight': 'Hora de Ver\u00E3o de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hora de Novosibirsk',
                            'standard': 'Hora Padr\u00E3o de Novosibirsk',
                            'daylight': 'Hora de Ver\u00E3o de Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Hora das Ilhas Mariana do Norte'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Hora de Fernando de Noronha',
                            'standard': 'Hora Padr\u00E3o de Fernando de Noronha',
                            'daylight': 'Hora de Ver\u00E3o de Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Hora das Ilhas Norfolk'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Hora de Niue'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Hora da Terra Nova',
                            'standard': 'Hora Padr\u00E3o da Terra Nova',
                            'daylight': 'Hora de Ver\u00E3o da Terra Nova'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Hora do Amazonas',
                            'standard': 'Hora Padr\u00E3o do Amazonas',
                            'daylight': 'Hora de Ver\u00E3o do Amazonas'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Hora Central',
                            'standard': 'Hora Padr\u00E3o Central',
                            'daylight': 'Hora de Ver\u00E3o Central'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Hora Oriental',
                            'standard': 'Hora Padr\u00E3o Oriental',
                            'daylight': 'Hora de Ver\u00E3o Oriental'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hora da Montanha',
                            'standard': 'Hora Padr\u00E3o da Montanha',
                            'daylight': 'Hora de Ver\u00E3o da Montanha'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hora do Pac\u00EDfico',
                            'standard': 'Hora Padr\u00E3o do Pac\u00EDfico',
                            'daylight': 'Hora de Ver\u00E3o do Pac\u00EDfico'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Hora de Anadyr',
                            'standard': 'Hora Padr\u00E3o de Anadyr',
                            'daylight': 'Hora de Ver\u00E3o de Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Hora de Aqtau',
                            'standard': 'Hora Padr\u00E3o de Aqtau',
                            'daylight': 'Hora de Ver\u00E3o de Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Hora de Aqtobe',
                            'standard': 'Hora Padr\u00E3o de Aqtobe',
                            'daylight': 'Hora de Ver\u00E3o de Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Hora de Cabo Verde',
                            'standard': 'Hora Padr\u00E3o de Cabo Verde',
                            'daylight': 'Hora de Ver\u00E3o de Cabo Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Hora Padr\u00E3o do Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Hora do Chatham',
                            'standard': 'Hora Padr\u00E3o do Chatham',
                            'daylight': 'Hora de Ver\u00E3o do Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hora do Chile',
                            'standard': 'Hora Padr\u00E3o do Chile',
                            'daylight': 'Hora de Ver\u00E3o do Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hora da China',
                            'standard': 'Hora Padr\u00E3o da China',
                            'daylight': 'Hora de Ver\u00E3o da China'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hora de Choibalsan',
                            'standard': 'Hora Padr\u00E3o de Choibalsan',
                            'daylight': 'Hora de Ver\u00E3o de Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Hora da Ilha do Natal'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Hora das Ilhas Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Hora da Col\u00F4mbia',
                            'standard': 'Hora Padr\u00E3o da Col\u00F4mbia',
                            'daylight': 'Hora de Ver\u00E3o da Col\u00F4mbia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hora das Ilhas Cook',
                            'standard': 'Hora Padr\u00E3o das Ilhas Cook',
                            'daylight': 'Hora de Ver\u00E3o das Ilhas Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hora de Cuba',
                            'standard': 'Hora Padr\u00E3o de Cuba',
                            'daylight': 'Hora de Ver\u00E3o de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Hora de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Hora de Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Hora de Timor Leste'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Hora da Ilha da P\u00E1scoa',
                            'standard': 'Hora Padr\u00E3o da Ilha da P\u00E1scoa',
                            'daylight': 'Hora de Ver\u00E3o da Ilha da P\u00E1scoa'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Hora do Equador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Hora da Europa Central',
                            'standard': 'Hora Padr\u00E3o da Europa Central',
                            'daylight': 'Hora de Ver\u00E3o da Europa Central'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Hora da Europa de Leste',
                            'standard': 'Hora Padr\u00E3o da Europa de Leste',
                            'daylight': 'Hora de Ver\u00E3o da Europa de Leste'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Hora da Europa Ocidental',
                            'standard': 'Hora Padr\u00E3o da Europa Ocidental',
                            'daylight': 'Hora de Ver\u00E3o da Europa Ocidental'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Hora das Ilhas Falkland',
                            'standard': 'Hora Padr\u00E3o das Ilhas Falkland',
                            'daylight': 'Hora de Ver\u00E3o das Ilhas Falkland'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hora de Fiji',
                            'standard': 'Hora Padr\u00E3o de Fiji',
                            'daylight': 'Hora de Ver\u00E3o de Fiji'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Hora da Guiana Francesa'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Hora das Terras Austrais e Ant\u00E1rtidas Francesas'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hora das Gal\u00E1pagos'
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
                            'standard': 'Hora Padr\u00E3o de Tonga',
                            'daylight': 'Hora de Ver\u00E3o de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Hora de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Hora do Turquemenist\u00E3o',
                            'standard': 'Hora Padr\u00E3o do Turquemenist\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o do Turquemenist\u00E3o'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Hora de Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Hora do Uruguai',
                            'standard': 'Hora Padr\u00E3o do Uruguai',
                            'daylight': 'Hora de Ver\u00E3o do Uruguai'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Hora do Uzbequist\u00E3o',
                            'standard': 'Hora Padr\u00E3o do Uzbequist\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o do Uzbequist\u00E3o'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hora do Vanuatu',
                            'standard': 'Hora Padr\u00E3o do Vanuatu',
                            'daylight': 'Hora de Ver\u00E3o do Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Hora de Ecaterimburgo',
                            'standard': 'Hora Padr\u00E3o de Ecaterimburgo',
                            'daylight': 'Hora de Ver\u00E3o de Ecaterimburgo'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hora de Yakutsk',
                            'standard': 'Hora Padr\u00E3o de Yakutsk',
                            'daylight': 'Hora de Ver\u00E3o de Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Hora de Wallis e Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Hora da Ilha Wake'
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
                            'standard': 'Hora Padr\u00E3o de Volgogrado',
                            'daylight': 'Hora de Ver\u00E3o de Volgogrado'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hora de Vladivostok',
                            'standard': 'Hora Padr\u00E3o de Vladivostok',
                            'daylight': 'Hora de Ver\u00E3o de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Hora da Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Hora do Tajiquist\u00E3o'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Hora de Taip\u00E9',
                            'standard': 'Hora Padr\u00E3o de Taip\u00E9',
                            'daylight': 'Hora de Ver\u00E3o de Taip\u00E9'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Hora do Taiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Hora de Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Hora do Suriname'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Hora da Ge\u00F3rgia do Sul'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Hora das Ilhas Salom\u00E3o'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Hora Padr\u00E3o de Singapura'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Hora Padr\u00E3o do Golfo'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Hora Padr\u00E3o de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Hora da Gronel\u00E2ndia Ocidental',
                            'standard': 'Hora Padr\u00E3o da Gronel\u00E2ndia Ocidental',
                            'daylight': 'Hora de Ver\u00E3o da Gronel\u00E2ndia Ocidental'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Hora da Gronel\u00E2ndia Oriental',
                            'standard': 'Hora Padr\u00E3o da Gronel\u00E2ndia Oriental',
                            'daylight': 'Hora de Ver\u00E3o da Gronel\u00E2ndia Oriental'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Hora de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Hora das Ilhas Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Hora da Ge\u00F3rgia',
                            'standard': 'Hora Padr\u00E3o da Ge\u00F3rgia',
                            'daylight': 'Hora de Ver\u00E3o da Ge\u00F3rgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Hora de Gambier'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Hora do Acre',
                            'standard': 'Hora Padr\u00E3o do Acre',
                            'daylight': 'Hora de Ver\u00E3o do Acre'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Hora do Afeganist\u00E3o'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Hora da \u00C1frica Central'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Hora da \u00C1frica Oriental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Hora da \u00C1frica do Sul'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Hora da \u00C1frica Ocidental',
                            'standard': 'Hora Padr\u00E3o da \u00C1frica Ocidental',
                            'daylight': 'Hora de Ver\u00E3o da \u00C1frica Ocidental'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Hora do Alasca',
                            'standard': 'Hora Padr\u00E3o do Alasca',
                            'daylight': 'Hora de Ver\u00E3o do Alasca'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Hora de Almaty',
                            'standard': 'Hora Padr\u00E3o de Almaty',
                            'daylight': 'Hora de Ver\u00E3o de Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hora da Ar\u00E1bia',
                            'standard': 'Hora Padr\u00E3o da Ar\u00E1bia',
                            'daylight': 'Hora de Ver\u00E3o da Ar\u00E1bia'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Hora da Argentina',
                            'standard': 'Hora Padr\u00E3o da Argentina',
                            'daylight': 'Hora de Ver\u00E3o da Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Hora da Argentina Ocidental',
                            'standard': 'Hora Padr\u00E3o da Argentina Ocidental',
                            'daylight': 'Hora de Ver\u00E3o da Argentina Ocidental'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Hora da Arm\u00E9nia',
                            'standard': 'Hora Padr\u00E3o da Arm\u00E9nia',
                            'daylight': 'Hora de Ver\u00E3o da Arm\u00E9nia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Hora do Atl\u00E2ntico',
                            'standard': 'Hora Padr\u00E3o do Atl\u00E2ntico',
                            'daylight': 'Hora de Ver\u00E3o do Atl\u00E2ntico'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Hora da Austr\u00E1lia Central',
                            'standard': 'Hora Padr\u00E3o da Austr\u00E1lia Central',
                            'daylight': 'Hora de Ver\u00E3o da Austr\u00E1lia Central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Hora da Austr\u00E1lia Central Ocidental',
                            'standard': 'Hora Padr\u00E3o da Austr\u00E1lia Central Ocidental',
                            'daylight': 'Hora de Ver\u00E3o da Austr\u00E1lia Central Ocidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Hora da Austr\u00E1lia Oriental',
                            'standard': 'Hora Padr\u00E3o da Austr\u00E1lia Oriental',
                            'daylight': 'Hora de Ver\u00E3o da Austr\u00E1lia Oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Hora da Austr\u00E1lia Ocidental',
                            'standard': 'Hora Padr\u00E3o da Austr\u00E1lia Ocidental',
                            'daylight': 'Hora de Ver\u00E3o da Austr\u00E1lia Ocidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Hora do Azerbaij\u00E3o',
                            'standard': 'Hora Padr\u00E3o do Azerbaij\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o do Azerbaij\u00E3o'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hora dos A\u00E7ores',
                            'standard': 'Hora Padr\u00E3o dos A\u00E7ores',
                            'daylight': 'Hora de Ver\u00E3o dos A\u00E7ores'
                        },
                        'short': {
                            'generic': 'AZOT',
                            'standard': 'AZOT',
                            'daylight': 'AZOST'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Hora do Bangladeche',
                            'standard': 'Hora Padr\u00E3o do Bangladeche',
                            'daylight': 'Hora de Ver\u00E3o do Bangladeche'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hora do But\u00E3o'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Hora da Bol\u00EDvia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Hora de Bras\u00EDlia',
                            'standard': 'Hora Padr\u00E3o de Bras\u00EDlia',
                            'daylight': 'Hora de Ver\u00E3o de Bras\u00EDlia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Hora do Brunei Darussalam'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Hora da Guiana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hora do Havai e Aleutas',
                            'standard': 'Hora Padr\u00E3o do Havai e Ale\u00FAtes',
                            'daylight': 'Hora de Ver\u00E3o do Havai e Ale\u00FAtes'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hora de Hong Kong',
                            'standard': 'Hora Padr\u00E3o de Hong Kong',
                            'daylight': 'Hora de Ver\u00E3o de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hora de Hovd',
                            'standard': 'Hora Padr\u00E3o de Hovd',
                            'daylight': 'Hora de Ver\u00E3o de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hora Padr\u00E3o da \u00CDndia'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hora do Oceano \u00CDndico'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Hora da Indochina'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Hora da Indon\u00E9sia Central'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Hora da Indon\u00E9sia Oriental'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Hora da Indon\u00E9sia Ocidental'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Hora do Ir\u00E3o',
                            'standard': 'Hora Padr\u00E3o do Ir\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o do Ir\u00E3o'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Hora de Irkutsk',
                            'standard': 'Hora Padr\u00E3o de Irkutsk',
                            'daylight': 'Hora de Ver\u00E3o de Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Hora de Israel',
                            'standard': 'Hora Padr\u00E3o de Israel',
                            'daylight': 'Hora de Ver\u00E3o de Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hora do Jap\u00E3o',
                            'standard': 'Hora Padr\u00E3o do Jap\u00E3o',
                            'daylight': 'Hora de Ver\u00E3o do Jap\u00E3o'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hora de Petropavlovsk-Kamchatski',
                            'standard': 'Hora Padr\u00E3o de Petropavlovsk-Kamchatski',
                            'daylight': 'Hora de Ver\u00E3o de Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Hora do Cazaquist\u00E3o Oriental'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Hora do Cazaquist\u00E3o Ocidental'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hora da Coreia',
                            'standard': 'Hora Padr\u00E3o da Coreia',
                            'daylight': 'Hora de Ver\u00E3o da Coreia'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Hora de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Hora de Krasnoiarsk',
                            'standard': 'Hora Padr\u00E3o de Krasnoyarsk',
                            'daylight': 'Hora de Ver\u00E3o de Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Hora do Quirguist\u00E3o'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Hora do Sri Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Hora das Ilhas Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Hora de Lord Howe',
                            'standard': 'Hora Padr\u00E3o de Lord Howe',
                            'daylight': 'Hora de Ver\u00E3o de Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Hora de Macau',
                            'standard': 'Hora Padr\u00E3o de Macau',
                            'daylight': 'Hora de Ver\u00E3o de Macau'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Hora da Ilha Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Hora de Magadan',
                            'standard': 'Hora Padr\u00E3o de Magadan',
                            'daylight': 'Hora de Ver\u00E3o de Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Hora da Mal\u00E1sia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Hora das Maldivas'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Hora das Ilhas Marquesas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Hora das Ilhas Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Hora das Maur\u00EDcias',
                            'standard': 'Hora Padr\u00E3o das Maur\u00EDcias',
                            'daylight': 'Hora de Ver\u00E3o das Maur\u00EDcias'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Hora de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Hora de Ulan Bator',
                            'standard': 'Hora Padr\u00E3o de Ulan Bator',
                            'daylight': 'Hora de Ver\u00E3o de Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hora de Moscovo',
                            'standard': 'Hora Padr\u00E3o de Moscovo',
                            'daylight': 'Hora de Ver\u00E3o de Moscovo'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Hora de Mianmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Hora de Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Hora do Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Hora da Nova Caled\u00F3nia',
                            'standard': 'Hora Padr\u00E3o da Nova Caled\u00F3nia',
                            'daylight': 'Hora de Ver\u00E3o da Nova Caled\u00F3nia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hora da Nova Zel\u00E2ndia',
                            'standard': 'Hora Padr\u00E3o da Nova Zel\u00E2ndia',
                            'daylight': 'Hora de Ver\u00E3o da Nova Zel\u00E2ndia'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Hora de {0}',
                'regionFormat-type-daylight': 'Hora de Ver\u00E3o de {0}',
                'regionFormat-type-standard': 'Hora Padr\u00E3o de {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'Ago',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'Mai',
                                '12': 'Dez',
                                '11': 'Nov',
                                '10': 'Out',
                                '9': 'Set',
                                '1': 'Jan',
                                '2': 'Fev',
                                '3': 'Mar',
                                '4': 'Abr'
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
                                '8': 'Agosto',
                                '7': 'Julho',
                                '6': 'Junho',
                                '5': 'Maio',
                                '12': 'Dezembro',
                                '11': 'Novembro',
                                '10': 'Outubro',
                                '9': 'Setembro',
                                '1': 'Janeiro',
                                '2': 'Fevereiro',
                                '3': 'Mar\u00E7o',
                                '4': 'Abril'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Ago',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'Mai',
                                '12': 'Dez',
                                '11': 'Nov',
                                '10': 'Out',
                                '9': 'Set',
                                '1': 'Jan',
                                '2': 'Fev',
                                '3': 'Mar',
                                '4': 'Abr'
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
                                '8': 'Agosto',
                                '7': 'Julho',
                                '6': 'Junho',
                                '5': 'Maio',
                                '12': 'Dezembro',
                                '11': 'Novembro',
                                '10': 'Outubro',
                                '9': 'Setembro',
                                '1': 'Janeiro',
                                '2': 'Fevereiro',
                                '3': 'Mar\u00E7o',
                                '4': 'Abril'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'dom',
                                'mon': 'seg',
                                'tue': 'ter',
                                'wed': 'qua',
                                'thu': 'qui',
                                'fri': 'sex',
                                'sat': 's\u00E1b'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'S',
                                'tue': 'T',
                                'wed': 'Q',
                                'thu': 'Q',
                                'fri': 'S',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'do',
                                'mon': 'sg',
                                'tue': 'te',
                                'wed': 'qu',
                                'thu': 'qi',
                                'fri': 'sx',
                                'sat': 'sb'
                            },
                            'wide': {
                                'sun': 'domingo',
                                'mon': 'segunda-feira',
                                'tue': 'ter\u00E7a-feira',
                                'wed': 'quarta-feira',
                                'thu': 'quinta-feira',
                                'fri': 'sexta-feira',
                                'sat': 's\u00E1bado'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'dom',
                                'mon': 'seg',
                                'tue': 'ter',
                                'wed': 'qua',
                                'thu': 'qui',
                                'fri': 'sex',
                                'sat': 's\u00E1b'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'S',
                                'tue': 'T',
                                'wed': 'Q',
                                'thu': 'Q',
                                'fri': 'S',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'do',
                                'mon': 'sg',
                                'tue': 'te',
                                'wed': 'qu',
                                'thu': 'qi',
                                'fri': 'sx',
                                'sat': 'sb'
                            },
                            'wide': {
                                'sun': 'domingo',
                                'mon': 'segunda-feira',
                                'tue': 'ter\u00E7a-feira',
                                'wed': 'quarta-feira',
                                'thu': 'quinta-feira',
                                'fri': 'sexta-feira',
                                'sat': 's\u00E1bado'
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
                                '1': '1.\u00BA trimestre',
                                '2': '2.\u00BA trimestre',
                                '3': '3.\u00BA trimestre',
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
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1.\u00BA trimestre',
                                '2': '2.\u00BA trimestre',
                                '3': '3.\u00BA trimestre',
                                '4': '4.\u00BA trimestre'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manh\u00E3',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manh\u00E3',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'afternoon': 'tarde',
                                'am': 'da manh\u00E3',
                                'morning': 'manh\u00E3',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'da tarde'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manh\u00E3',
                                'night': 'noite',
                                'noon': 'meia-noite',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manh\u00E3',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manh\u00E3',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Antes de Cristo',
                            '0-alt-variant': 'a.E.C.',
                            '1': 'Ano do Senhor',
                            '1-alt-variant': 'E.C.'
                        },
                        'eraAbbr': {
                            '0': 'a.C.',
                            '0-alt-variant': 'a.E.C.',
                            '1': 'd.C.',
                            '1-alt-variant': 'E.C.'
                        },
                        'eraNarrow': {
                            '0': 'a.C.',
                            '0-alt-variant': 'a.E.C.',
                            '1': 'd.C.',
                            '1-alt-variant': 'E.C.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d \'de\' MMMM \'de\' y',
                        'long': 'd \'de\' MMMM \'de\' y',
                        'medium': 'dd/MM/y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'\u00E0s\' {0}',
                        'long': '{1} \'\u00E0s\' {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMEd': 'E, dd/MM/y',
                            'yMd': 'dd/MM/y',
                            'yM': 'MM/y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'MMMMEd': 'E, d \'de\' MMMM',
                            'MMMMd': 'd \'de\' MMMM',
                            'MMMEd': 'E, d/MM',
                            'MMMd': 'd/MM',
                            'MMM': 'LLL',
                            'h': 'h a',
                            'H': 'HH',
                            'HHmm': 'HH:mm',
                            'HHmmss': 'HH:mm:ss',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'yMM': 'MM/y',
                            'yMMM': 'MM/y',
                            'yQQQQ': 'QQQQ \'de\' y',
                            'yQQQ': 'QQQQ \'de\' y',
                            'yMMMMEd': 'E, d \'de\' MMMM \'de\' y',
                            'yMMMMd': 'd \'de\' MMMM \'de\' y',
                            'yMMMM': 'MMMM \'de\' y',
                            'yMMMEEEEd': 'EEEE, d/MM/y',
                            'yMMMEd': 'E, d/MM/y',
                            'yMMMd': 'd/MM/y',
                            'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                            'GyMMMd': 'd \'de\' MMM \'de\' y G',
                            'd': 'd',
                            'Ed': 'E, d',
                            'Ehm': 'E, h:mm a',
                            'EHm': 'E, HH:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM \'de\' y G',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, dd/MM',
                            'MMdd': 'dd/MM'
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
                                'd': 'E, d \'de\' MMM - E, d \'de\' MMM',
                                'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                            },
                            'MMMd': {
                                'd': 'd-d \'de\' MMM',
                                'M': 'd \'de\' MMM - d \'de\' MMM'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'E, dd/MM - E, dd/MM',
                                'M': 'E, dd/MM - E, dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'HH - HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h - h a v'
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
                                'd': 'E, dd/MM/y - E, dd/MM/y',
                                'M': 'E, dd/MM/y - E, dd/MM/y',
                                'y': 'E, dd/MM/y - E, dd/MM/y'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM \'de\' y',
                                'y': 'MMM \'de\' y - MMM \'de\' y'
                            },
                            'yMMMd': {
                                'd': 'd-d \'de\' MMM \'de\' y',
                                'M': 'd \'de\' MMM - d \'de\' MMM \'de\' y',
                                'y': 'd \'de\' MMM \'de\' y - d \'de\' MMM \'de\' y'
                            },
                            'yMMMEd': {
                                'd': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                            },
                            'yMMMM': {
                                'M': 'MMMM - MMMM \'de\' y',
                                'y': 'MMMM \'de\' y - MMMM \'de\' y'
                            },
                            'Hmv': {
                                'H': 'HH:mm - HH:mm v',
                                'm': 'HH:mm - HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm - h:mm a v',
                                'm': 'h:mm - h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm - HH:mm',
                                'm': 'HH:mm - HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm - h:mm a',
                                'm': 'h:mm - h:mm a'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd\u2013d'
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
