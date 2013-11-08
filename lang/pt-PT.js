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
                'territory': 'Região: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordenar Kana Separadamente',
                    'yes': 'Ordenar Kana Diferentemente'
                },
                'colCaseLevel': {
                    'no': 'Ordenar Insensível a Maiúsculas/Minúsculas',
                    'yes': 'Ordenar Sensível a Maiúsculas/Minúsculas'
                },
                'colCaseFirst': {
                    'lower': 'Ordenar Minúsculas Primeiro',
                    'no': 'Ordenar Disposição de Tipo de Letra Normal',
                    'upper': 'Ordenar Maiúsculas Primeiro'
                },
                'colStrength': {
                    'identical': 'Ordenar Tudo',
                    'primary': 'Ordenar Apenas Letras Básicas',
                    'quaternary': 'Ordenar Acentos/Tipo de Letra/Largura/Kana',
                    'secondary': 'Ordenar Acentos',
                    'tertiary': 'Ordenar Acentos/Tipo de Letra/Largura'
                },
                'colNumeric': {
                    'no': 'Ordenar Dígitos Individualmente',
                    'yes': 'Ordenar Dígitos Numericamente'
                },
                'colNormalization': {
                    'no': 'Ordenar Sem Normalização',
                    'yes': 'Ordenar Unicode Normalizado'
                },
                'calendar': {
                    'japanese': 'Calendário Japonês',
                    'iso8601': 'iso8601',
                    'coptic': 'Calendário Copta',
                    'dangi': 'dangi',
                    'ethiopic': 'Calendário Etíope',
                    'ethiopic-amete-alem': 'Calendário Etíope Amete Alem',
                    'gregorian': 'Calendário Gregoriano',
                    'hebrew': 'Calendário Hebraico',
                    'persian': 'Calendário Persa',
                    'roc': 'Calendário da República da China',
                    'chinese': 'Calendário Chinês',
                    'buddhist': 'Calendário Budista',
                    'indian': 'Calendário Nacional Indiano',
                    'islamic': 'Calendário Islâmico',
                    'islamic-civil': 'Calendário Islâmico/Civil',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Ordem da Lista Telefónica',
                    'gb2312han': 'Ordem do Chinês Simplificado - GB2312',
                    'eor': 'eor',
                    'ducet': 'Ordenação Unicode Predefinida',
                    'dictionary': 'Ordenação do Dicionário',
                    'big5han': 'Ordem do Chinês Tradicional - Big5',
                    'traditional': 'Ordem tradicional',
                    'standard': 'Ordenação Predefinida',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Ordem por radical e traços',
                    'stroke': 'Ordem por traços',
                    'searchjl': 'Pesquisar Por Consoante Inicial Hangul',
                    'search': 'Pesquisa de uso geral',
                    'reformed': 'Reforma da Ordenação',
                    'pinyin': 'Ordem do Chinês Simplificado Pinyin',
                    'phonetic': 'Sequência de Ordenação Fonética'
                },
                'numbers': {
                    'knda': 'Algarismos de Canarim',
                    'khmr': 'Algarismos Khmer',
                    'kali': 'kali',
                    'jpanfin': 'Numeração Financeira Japonesa',
                    'jpan': 'Numeração Japonesa',
                    'java': 'java',
                    'hebr': 'Numeração Hebraica',
                    'hantfin': 'Numeração Financeira Chinês Tradicional',
                    'hant': 'Numeração Chinês Tradicional',
                    'hansfin': 'Numeração Financeira Chinês Simplificado',
                    'hans': 'Numeração Chinês Simplificado',
                    'hanidec': 'Numeração Decimal Chinesa',
                    'guru': 'Algarismos Gurmukhi',
                    'gujr': 'Algarismos de Guzerate',
                    'greklow': 'Numeração Grega Minúscula',
                    'grek': 'Numeração Grega',
                    'bali': 'bali',
                    'armnlow': 'Numeração Arménia Minúscula',
                    'armn': 'Algarismos Arménios',
                    'arabext': 'Algarismos indo-arábicos por extenso',
                    'arab': 'Algarismos indo-arábicos',
                    'finance': 'Algarismos Financeiros',
                    'traditional': 'Algarismos Tradicionais',
                    'native': 'Dígitos Nativos',
                    'beng': 'Algarismos Bengalis',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Algarismos Devanágaris',
                    'orya': 'Algarismos Oriá',
                    'osma': 'osma',
                    'roman': 'Numeração Romana',
                    'romanlow': 'Numeração Romana Minúscula',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Dígitos Vai',
                    'tibt': 'Algarismos Tibetanos',
                    'thai': 'Algarismos Tailandeses',
                    'telu': 'Algarismos de Telugu',
                    'tamldec': 'Algarismos Tâmil',
                    'taml': 'Numeração Tâmil',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Algarismos de Mianmar',
                    'mtei': 'mtei',
                    'mong': 'Algarismos Mongóis',
                    'mlym': 'Algarismos Malaiala',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Algarismos Ocidentais',
                    'laoo': 'Algarismos de Laos',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Numeração Georgiana',
                    'fullwide': 'Algarismos de Largura Completa',
                    'ethi': 'Numeração Etíope'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordenar Símbolos',
                    'shifted': 'Ordenar Símbolos Ignorados'
                },
                'colBackwards': {
                    'no': 'Ordenar Acentos Normalmente',
                    'yes': 'Ordenar Acentos Inversamente'
                }
            },
            'keys': {
                'colNormalization': 'Ordenação Normalizada',
                'collation': 'Ordenação',
                'colHiraganaQuaternary': 'Ordenação Kana',
                'colCaseLevel': 'Ordenação Sensível a Maiúsculas e Minúsculas',
                'colCaseFirst': 'Disposição de Maiúsculas/Minúsculas',
                'colBackwards': 'Ordenação de Acentos Invertida',
                'colAlternate': 'Ignorar Ordenação de Símbolos',
                'calendar': 'Calendário',
                'x': 'Utilização Privada',
                'variableTop': 'Ordenar Como Símbolos',
                'va': 'Variante Local',
                'timezone': 'Fuso Horário',
                'numbers': 'Números',
                'currency': 'Moeda',
                'colStrength': 'Força da Ordenação',
                'colNumeric': 'Ordenação Numérica'
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
                            'exemplarCity': 'Ápia'
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
                            'exemplarCity': 'Ilha de Páscoa'
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
                            'exemplarCity': 'Reunião'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Maurícia'
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
                            'exemplarCity': 'Pólo Sul'
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
                            'exemplarCity': 'Caimão'
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
                            'exemplarCity': 'Assunção'
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
                                'exemplarCity': 'Tucumán'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Araguaina'
                        },
                        'Antigua': {
                            'exemplarCity': 'Antígua'
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
                            'exemplarCity': 'Baía'
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
                            'exemplarCity': 'Eirunepé'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Edmonton'
                        },
                        'Dominica': {
                            'exemplarCity': 'Domínica'
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
                            'exemplarCity': 'Manágua'
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
                            'exemplarCity': 'Mérida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Cidade do México'
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
                            'exemplarCity': 'São Bartolomeu'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'São Cristóvão'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Santa Lúcia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'St. Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'São Vicente'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Geórgia do Sul'
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
                            'exemplarCity': 'Açores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudas'
                        },
                        'Canary': {
                            'exemplarCity': 'Canárias'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cabo Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faroé'
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
                                'daylight': 'Hora de Verão Britânico'
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
                            'exemplarCity': 'Amesterdão'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sófia'
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
                            'exemplarCity': 'Varsóvia'
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
                            'exemplarCity': 'São Marinho'
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
                            'exemplarCity': 'Podgóritza'
                        },
                        'Paris': {
                            'exemplarCity': 'Paris'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsínquia'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Hora de Verão da Irlanda'
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
                            'exemplarCity': 'El Aaiún'
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
                            'exemplarCity': 'Mogadíscio'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monróvia'
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
                            'exemplarCity': 'Lomé'
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
                            'exemplarCity': 'Tóquio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Timphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teerão'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipé'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapura'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalém'
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
                            'exemplarCity': 'Amã'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
                        },
                        'Aden': {
                            'exemplarCity': 'Adem'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Barém'
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
                            'exemplarCity': 'Calcutá'
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
                            'exemplarCity': 'Nicósia'
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
                            'standard': 'Hora Padrão de Samoa',
                            'daylight': 'Hora de Verão de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hora de Samara',
                            'standard': 'Hora Padrão de Samara',
                            'daylight': 'Hora de Verão de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hora de Sacalina',
                            'standard': 'Hora Padrão de Sacalina',
                            'daylight': 'Hora de Verão de Sacalina'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hora de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hora de Reunião'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Hora de Qyzylorda',
                            'standard': 'Hora Padrão de Qyzylorda',
                            'daylight': 'Hora de Verão de Qyzylorda'
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
                            'generic': 'Hora de São Pedro e Miquelão',
                            'standard': 'Hora Padrão de São Pedro e Miquelão',
                            'daylight': 'Hora de Verão de São Pedro e Miquelão'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Hora das Ilhas Fénix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hora das Filipinas',
                            'standard': 'Hora Padrão das Filipinas',
                            'daylight': 'Hora de Verão das Filipinas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hora do Peru',
                            'standard': 'Hora Padrão do Peru',
                            'daylight': 'Hora de Verão do Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Hora do Paraguai',
                            'standard': 'Hora Padrão do Paraguai',
                            'daylight': 'Hora de Verão do Paraguai'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Hora de Papua Nova Guiné'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Hora de Palau'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hora do Paquistão',
                            'standard': 'Hora Padrão do Paquistão',
                            'daylight': 'Hora de Verão do Paquistão'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Hora de Omsk',
                            'standard': 'Hora Padrão de Omsk',
                            'daylight': 'Hora de Verão de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hora de Novosibirsk',
                            'standard': 'Hora Padrão de Novosibirsk',
                            'daylight': 'Hora de Verão de Novosibirsk'
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
                            'standard': 'Hora Padrão de Fernando de Noronha',
                            'daylight': 'Hora de Verão de Fernando de Noronha'
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
                            'standard': 'Hora Padrão da Terra Nova',
                            'daylight': 'Hora de Verão da Terra Nova'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Hora do Amazonas',
                            'standard': 'Hora Padrão do Amazonas',
                            'daylight': 'Hora de Verão do Amazonas'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Hora Central',
                            'standard': 'Hora Padrão Central',
                            'daylight': 'Hora de Verão Central'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Hora Oriental',
                            'standard': 'Hora Padrão Oriental',
                            'daylight': 'Hora de Verão Oriental'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hora da Montanha',
                            'standard': 'Hora Padrão da Montanha',
                            'daylight': 'Hora de Verão da Montanha'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hora do Pacífico',
                            'standard': 'Hora Padrão do Pacífico',
                            'daylight': 'Hora de Verão do Pacífico'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Hora de Anadyr',
                            'standard': 'Hora Padrão de Anadyr',
                            'daylight': 'Hora de Verão de Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Hora de Aqtau',
                            'standard': 'Hora Padrão de Aqtau',
                            'daylight': 'Hora de Verão de Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Hora de Aqtobe',
                            'standard': 'Hora Padrão de Aqtobe',
                            'daylight': 'Hora de Verão de Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Hora de Cabo Verde',
                            'standard': 'Hora Padrão de Cabo Verde',
                            'daylight': 'Hora de Verão de Cabo Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Hora Padrão do Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Hora do Chatham',
                            'standard': 'Hora Padrão do Chatham',
                            'daylight': 'Hora de Verão do Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hora do Chile',
                            'standard': 'Hora Padrão do Chile',
                            'daylight': 'Hora de Verão do Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hora da China',
                            'standard': 'Hora Padrão da China',
                            'daylight': 'Hora de Verão da China'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hora de Choibalsan',
                            'standard': 'Hora Padrão de Choibalsan',
                            'daylight': 'Hora de Verão de Choibalsan'
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
                            'generic': 'Hora da Colômbia',
                            'standard': 'Hora Padrão da Colômbia',
                            'daylight': 'Hora de Verão da Colômbia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hora das Ilhas Cook',
                            'standard': 'Hora Padrão das Ilhas Cook',
                            'daylight': 'Hora de Verão das Ilhas Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hora de Cuba',
                            'standard': 'Hora Padrão de Cuba',
                            'daylight': 'Hora de Verão de Cuba'
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
                            'generic': 'Hora da Ilha da Páscoa',
                            'standard': 'Hora Padrão da Ilha da Páscoa',
                            'daylight': 'Hora de Verão da Ilha da Páscoa'
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
                            'standard': 'Hora Padrão da Europa Central',
                            'daylight': 'Hora de Verão da Europa Central'
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
                            'standard': 'Hora Padrão da Europa de Leste',
                            'daylight': 'Hora de Verão da Europa de Leste'
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
                            'standard': 'Hora Padrão da Europa Ocidental',
                            'daylight': 'Hora de Verão da Europa Ocidental'
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
                            'standard': 'Hora Padrão das Ilhas Falkland',
                            'daylight': 'Hora de Verão das Ilhas Falkland'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hora de Fiji',
                            'standard': 'Hora Padrão de Fiji',
                            'daylight': 'Hora de Verão de Fiji'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Hora da Guiana Francesa'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Hora das Terras Austrais e Antártidas Francesas'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hora das Galápagos'
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
                            'standard': 'Hora Padrão de Tonga',
                            'daylight': 'Hora de Verão de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Hora de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Hora do Turquemenistão',
                            'standard': 'Hora Padrão do Turquemenistão',
                            'daylight': 'Hora de Verão do Turquemenistão'
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
                            'standard': 'Hora Padrão do Uruguai',
                            'daylight': 'Hora de Verão do Uruguai'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Hora do Uzbequistão',
                            'standard': 'Hora Padrão do Uzbequistão',
                            'daylight': 'Hora de Verão do Uzbequistão'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hora do Vanuatu',
                            'standard': 'Hora Padrão do Vanuatu',
                            'daylight': 'Hora de Verão do Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Hora de Ecaterimburgo',
                            'standard': 'Hora Padrão de Ecaterimburgo',
                            'daylight': 'Hora de Verão de Ecaterimburgo'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hora de Yakutsk',
                            'standard': 'Hora Padrão de Yakutsk',
                            'daylight': 'Hora de Verão de Yakutsk'
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
                            'standard': 'Hora Padrão de Volgogrado',
                            'daylight': 'Hora de Verão de Volgogrado'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hora de Vladivostok',
                            'standard': 'Hora Padrão de Vladivostok',
                            'daylight': 'Hora de Verão de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Hora da Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Hora do Tajiquistão'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Hora de Taipé',
                            'standard': 'Hora Padrão de Taipé',
                            'daylight': 'Hora de Verão de Taipé'
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
                            'standard': 'Hora da Geórgia do Sul'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Hora das Ilhas Salomão'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Hora Padrão de Singapura'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Hora Padrão do Golfo'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Hora Padrão de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Hora da Gronelândia Ocidental',
                            'standard': 'Hora Padrão da Gronelândia Ocidental',
                            'daylight': 'Hora de Verão da Gronelândia Ocidental'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Hora da Gronelândia Oriental',
                            'standard': 'Hora Padrão da Gronelândia Oriental',
                            'daylight': 'Hora de Verão da Gronelândia Oriental'
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
                            'generic': 'Hora da Geórgia',
                            'standard': 'Hora Padrão da Geórgia',
                            'daylight': 'Hora de Verão da Geórgia'
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
                            'standard': 'Hora Padrão do Acre',
                            'daylight': 'Hora de Verão do Acre'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Hora do Afeganistão'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Hora da África Central'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Hora da África Oriental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Hora da África do Sul'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Hora da África Ocidental',
                            'standard': 'Hora Padrão da África Ocidental',
                            'daylight': 'Hora de Verão da África Ocidental'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Hora do Alasca',
                            'standard': 'Hora Padrão do Alasca',
                            'daylight': 'Hora de Verão do Alasca'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Hora de Almaty',
                            'standard': 'Hora Padrão de Almaty',
                            'daylight': 'Hora de Verão de Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hora da Arábia',
                            'standard': 'Hora Padrão da Arábia',
                            'daylight': 'Hora de Verão da Arábia'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Hora da Argentina',
                            'standard': 'Hora Padrão da Argentina',
                            'daylight': 'Hora de Verão da Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Hora da Argentina Ocidental',
                            'standard': 'Hora Padrão da Argentina Ocidental',
                            'daylight': 'Hora de Verão da Argentina Ocidental'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Hora da Arménia',
                            'standard': 'Hora Padrão da Arménia',
                            'daylight': 'Hora de Verão da Arménia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Hora do Atlântico',
                            'standard': 'Hora Padrão do Atlântico',
                            'daylight': 'Hora de Verão do Atlântico'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Hora da Austrália Central',
                            'standard': 'Hora Padrão da Austrália Central',
                            'daylight': 'Hora de Verão da Austrália Central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Hora da Austrália Central Ocidental',
                            'standard': 'Hora Padrão da Austrália Central Ocidental',
                            'daylight': 'Hora de Verão da Austrália Central Ocidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Hora da Austrália Oriental',
                            'standard': 'Hora Padrão da Austrália Oriental',
                            'daylight': 'Hora de Verão da Austrália Oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Hora da Austrália Ocidental',
                            'standard': 'Hora Padrão da Austrália Ocidental',
                            'daylight': 'Hora de Verão da Austrália Ocidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Hora do Azerbaijão',
                            'standard': 'Hora Padrão do Azerbaijão',
                            'daylight': 'Hora de Verão do Azerbaijão'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hora dos Açores',
                            'standard': 'Hora Padrão dos Açores',
                            'daylight': 'Hora de Verão dos Açores'
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
                            'standard': 'Hora Padrão do Bangladeche',
                            'daylight': 'Hora de Verão do Bangladeche'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hora do Butão'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Hora da Bolívia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Hora de Brasília',
                            'standard': 'Hora Padrão de Brasília',
                            'daylight': 'Hora de Verão de Brasília'
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
                            'standard': 'Hora Padrão do Havai e Aleútes',
                            'daylight': 'Hora de Verão do Havai e Aleútes'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hora de Hong Kong',
                            'standard': 'Hora Padrão de Hong Kong',
                            'daylight': 'Hora de Verão de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hora de Hovd',
                            'standard': 'Hora Padrão de Hovd',
                            'daylight': 'Hora de Verão de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hora Padrão da Índia'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hora do Oceano Índico'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Hora da Indochina'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Hora da Indonésia Central'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Hora da Indonésia Oriental'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Hora da Indonésia Ocidental'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Hora do Irão',
                            'standard': 'Hora Padrão do Irão',
                            'daylight': 'Hora de Verão do Irão'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Hora de Irkutsk',
                            'standard': 'Hora Padrão de Irkutsk',
                            'daylight': 'Hora de Verão de Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Hora de Israel',
                            'standard': 'Hora Padrão de Israel',
                            'daylight': 'Hora de Verão de Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hora do Japão',
                            'standard': 'Hora Padrão do Japão',
                            'daylight': 'Hora de Verão do Japão'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hora de Petropavlovsk-Kamchatski',
                            'standard': 'Hora Padrão de Petropavlovsk-Kamchatski',
                            'daylight': 'Hora de Verão de Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Hora do Cazaquistão Oriental'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Hora do Cazaquistão Ocidental'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hora da Coreia',
                            'standard': 'Hora Padrão da Coreia',
                            'daylight': 'Hora de Verão da Coreia'
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
                            'standard': 'Hora Padrão de Krasnoyarsk',
                            'daylight': 'Hora de Verão de Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Hora do Quirguistão'
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
                            'standard': 'Hora Padrão de Lord Howe',
                            'daylight': 'Hora de Verão de Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Hora de Macau',
                            'standard': 'Hora Padrão de Macau',
                            'daylight': 'Hora de Verão de Macau'
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
                            'standard': 'Hora Padrão de Magadan',
                            'daylight': 'Hora de Verão de Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Hora da Malásia'
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
                            'generic': 'Hora das Maurícias',
                            'standard': 'Hora Padrão das Maurícias',
                            'daylight': 'Hora de Verão das Maurícias'
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
                            'standard': 'Hora Padrão de Ulan Bator',
                            'daylight': 'Hora de Verão de Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hora de Moscovo',
                            'standard': 'Hora Padrão de Moscovo',
                            'daylight': 'Hora de Verão de Moscovo'
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
                            'generic': 'Hora da Nova Caledónia',
                            'standard': 'Hora Padrão da Nova Caledónia',
                            'daylight': 'Hora de Verão da Nova Caledónia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hora da Nova Zelândia',
                            'standard': 'Hora Padrão da Nova Zelândia',
                            'daylight': 'Hora de Verão da Nova Zelândia'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Hora de {0}',
                'regionFormat-type-daylight': 'Hora de Verão de {0}',
                'regionFormat-type-standard': 'Hora Padrão de {0}',
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
                                '3': 'Março',
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
                                '3': 'Março',
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
                                'sat': 'sáb'
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
                                'tue': 'terça-feira',
                                'wed': 'quarta-feira',
                                'thu': 'quinta-feira',
                                'fri': 'sexta-feira',
                                'sat': 'sábado'
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
                                'sat': 'sáb'
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
                                'tue': 'terça-feira',
                                'wed': 'quarta-feira',
                                'thu': 'quinta-feira',
                                'fri': 'sexta-feira',
                                'sat': 'sábado'
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
                                '1': '1.º trimestre',
                                '2': '2.º trimestre',
                                '3': '3.º trimestre',
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
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1.º trimestre',
                                '2': '2.º trimestre',
                                '3': '3.º trimestre',
                                '4': '4.º trimestre'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'afternoon': 'tarde',
                                'am': 'da manhã',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'da tarde'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meia-noite',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'afternoon': 'tarde',
                                'am': 'a.m.',
                                'morning': 'manhã',
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
                        'full': '{1} \'às\' {0}',
                        'long': '{1} \'às\' {0}',
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
