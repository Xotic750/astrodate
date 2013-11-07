/* AstroDate
 * Language: pt
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
        AstroDate.lang('pt', {
            'codePatterns': {
                'language': 'Idioma: {0}',
                'script': 'Alfabeto: {0}',
                'territory': 'Região: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Classificar kana separadamente',
                    'yes': 'Classificar kana diferentemente'
                },
                'colCaseLevel': {
                    'no': 'Classificação sem diferenciação de maiúsculas e minúsculas',
                    'yes': 'Classificação com diferenciação de maiúsculas e minúsculas'
                },
                'colCaseFirst': {
                    'lower': 'Classificar por minúsculas',
                    'no': 'Classificação normal de maiúsculas e minúsculas',
                    'upper': 'Classificar por maiúsculas'
                },
                'colStrength': {
                    'identical': 'Classificar tudo',
                    'primary': 'Classificar somente letras básicas',
                    'quaternary': 'Classificar acentos/maiúsculas e minúsculas/largura/kana',
                    'secondary': 'Classificar acentos',
                    'tertiary': 'Classificar acentos/maiúsculas e minúsculas/largura'
                },
                'colNumeric': {
                    'no': 'Classificar dígitos individualmente',
                    'yes': 'Classificar dígitos numericamente'
                },
                'colNormalization': {
                    'no': 'Classificar sem normalização',
                    'yes': 'Classificar Unicode normalizado'
                },
                'calendar': {
                    'japanese': 'Calendário Japonês',
                    'iso8601': 'iso8601',
                    'coptic': 'Calendário Coptic',
                    'dangi': 'dangi',
                    'ethiopic': 'Calendário etiópico',
                    'ethiopic-amete-alem': 'Calendário Amete Alem da Etiópia',
                    'gregorian': 'Calendário Gregoriano',
                    'hebrew': 'Calendário Hebraico',
                    'persian': 'Calendário persa',
                    'roc': 'Calendário da República da China',
                    'chinese': 'Calendário Chinês',
                    'buddhist': 'Calendário Budista',
                    'indian': 'Calendário Nacional Indiano',
                    'islamic': 'Calendário Islâmico',
                    'islamic-civil': 'Calendário Civil Islâmico',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Ordem de Lista Telefônica',
                    'gb2312han': 'Ordem do Chinês Simplificado - GB2312',
                    'eor': 'eor',
                    'ducet': 'Ordem padrão do Unicode',
                    'dictionary': 'Ordem do dicionário',
                    'big5han': 'Ordem do Chinês Tradicional - Big5',
                    'traditional': 'Ordem Tradicional',
                    'standard': 'padrão',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Ordem por Radical-Traços',
                    'stroke': 'Ordem dos Traços',
                    'searchjl': 'Pesquisar por consonante inicial hangul',
                    'search': 'Pesquisa de uso geral',
                    'reformed': 'Ordem reformulada',
                    'pinyin': 'Ordem Pin-yin',
                    'phonetic': 'Ordem de classificação fonética'
                },
                'numbers': {
                    'knda': 'Algarismos Kannada',
                    'khmr': 'Algarismos Khmer',
                    'kali': 'kali',
                    'jpanfin': 'Algarismos financeiros japoneses',
                    'jpan': 'Algarismos japoneses',
                    'java': 'java',
                    'hebr': 'Algarismos hebraicos',
                    'hantfin': 'Algarismos financeiros chineses tradicionais',
                    'hant': 'Algarismos chineses tradicionais',
                    'hansfin': 'Algarismos financeiros chineses simplificados',
                    'hans': 'Algarismos chineses simplificados',
                    'hanidec': 'Algarismos decimais chineses',
                    'guru': 'Algarismos Gurmukhi',
                    'gujr': 'Algarismos Gujarati',
                    'greklow': 'Algarismos gregos minúsculos',
                    'grek': 'Algarismos gregos',
                    'bali': 'bali',
                    'armnlow': 'Algarismos armênios minúsculos',
                    'armn': 'Algarismos armênios',
                    'arabext': 'Algarismos indo-arábicos por extenso',
                    'arab': 'Algarismos indo-arábicos',
                    'finance': 'Numerais financeiros',
                    'traditional': 'Numerais tradicionais',
                    'native': 'Dígitos nativos',
                    'beng': 'Algarismos Bengali',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Algarismos Devanagari',
                    'orya': 'Algarismos Oriya',
                    'osma': 'osma',
                    'roman': 'Algarismos romanos',
                    'romanlow': 'Algarismos romanos minúsculos',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Dígitos vai',
                    'tibt': 'Algarismos tibetanos',
                    'thai': 'Algarismos tailandeses',
                    'telu': 'Algarismos Telugu',
                    'tamldec': 'Algarismos Tâmil',
                    'taml': 'Algarismos Tâmil',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Algarismos Myanmar',
                    'mtei': 'mtei',
                    'mong': 'Algarismos mongóis',
                    'mlym': 'Algarismos Malayalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Algarismos ocidentais',
                    'laoo': 'Algarismos laosianos',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Algarismos georgianos',
                    'fullwide': 'Algarismos em extensão total',
                    'ethi': 'Algarismos etiópicos'
                },
                'colAlternate': {
                    'non-ignorable': 'Classificar símbolos',
                    'shifted': 'Classificar ignorando símbolos'
                },
                'colBackwards': {
                    'no': 'Classificar acentos normalmente',
                    'yes': 'Classificação reversa de acentos'
                }
            },
            'keys': {
                'colNormalization': 'Classificação normalizada',
                'collation': 'Ordenação',
                'colHiraganaQuaternary': 'Classificação kana',
                'colCaseLevel': 'Ordem com diferenciação de maiúsculas e minúsculas',
                'colCaseFirst': 'Ordem de maiúsculas/minúsculas',
                'colBackwards': 'Classificação reversa de acentos',
                'colAlternate': 'Ignorar classificação de símbolos',
                'calendar': 'Calendário',
                'x': 'Uso privado',
                'variableTop': 'Classificar como símbolos',
                'va': 'Variante de localidade',
                'timezone': 'Fuso horário',
                'numbers': 'Números',
                'currency': 'Moeda',
                'colStrength': 'Intensidade da classificação',
                'colNumeric': 'Classificação numérica'
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
                            'exemplarCity': 'Pitcairn'
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
                            'exemplarCity': 'Taraua'
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
                            'exemplarCity': 'Éfaté'
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
                            'exemplarCity': 'Maldivas'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahé'
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
                            'exemplarCity': 'Maurício'
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
                            'exemplarCity': 'Caimã'
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
                                'exemplarCity': 'Tucumã'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Araguaína'
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
                            'exemplarCity': 'Monterrei'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Montevidéu'
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
                            'exemplarCity': 'Nova York'
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
                                'exemplarCity': 'Central, Dakota do Norte'
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
                            'exemplarCity': 'Porto Príncipe'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Porto Espanha'
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
                            'exemplarCity': 'St. John’s'
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
                            'exemplarCity': 'Reykjavik'
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
                            'exemplarCity': 'Ilhas Faroe'
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
                            'exemplarCity': 'Moscou'
                        },
                        'Monaco': {
                            'exemplarCity': 'Mônaco'
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
                            'exemplarCity': 'Madri'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxemburgo'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Horário de Verão Britânico'
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
                            'exemplarCity': 'Amsterdã'
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
                            'exemplarCity': 'Podgóritza'
                        },
                        'Paris': {
                            'exemplarCity': 'Paris'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinque'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Horário de Verão da Irlanda'
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
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Djibuti'
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
                            'exemplarCity': 'Nairóbi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ndjamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'Túnis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Trípoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'São Tomé'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto Novo'
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
                            'exemplarCity': 'Ho Chi Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riadi'
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
                            'exemplarCity': 'Bagdá'
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
                            'exemplarCity': 'Yerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tóquio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Timphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teerã'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Cingapura'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalém'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asgabate'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqtöbe'
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
                            'exemplarCity': 'Barein'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
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
                            'standard': 'Horário das Ilhas Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Horário de Samoa',
                            'standard': 'Horário Padrão de Samoa',
                            'daylight': 'Horário de Verão de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Horário de Samara',
                            'standard': 'Horário Padrão de Samara',
                            'daylight': 'Horário de Verão de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Horário de Sacalina',
                            'standard': 'Horário Padrão de Sacalina',
                            'daylight': 'Horário de Verão de Sacalina'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Horário de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Horário das Ilhas Reunião'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Horário de Qyzylorda',
                            'standard': 'Horário Padrão de Qyzylorda',
                            'daylight': 'Horário de Verão de Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Horário de Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Horário de Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Horário de Saint Pierre e Miquelon',
                            'standard': 'Horário Padrão de Saint Pierre e Miquelon',
                            'daylight': 'Horário de Verão de Saint Pierre e Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Horário das Ilhas Fênix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Horário das Filipinas',
                            'standard': 'Horário Padrão das Filipinas',
                            'daylight': 'Horário de Verão das Filipinas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Horário do Peru',
                            'standard': 'Horário Padrão do Peru',
                            'daylight': 'Horário de Verão do Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Horário do Paraguai',
                            'standard': 'Horário Padrão do Paraguai',
                            'daylight': 'Horário de Verão do Paraguai'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Horário de Papua Nova Guiné'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Horário de Palau'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Horário do Paquistão',
                            'standard': 'Horário Padrão do Paquistão',
                            'daylight': 'Horário de Verão do Paquistão'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Horário de Omsk',
                            'standard': 'Horário Padrão de Omsk',
                            'daylight': 'Horário de Verão de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Horário de Novosibirsk',
                            'standard': 'Horário Padrão de Novosibirsk',
                            'daylight': 'Horário de Verão de Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Horário das Ilhas Mariana do Norte'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Horário de Fernando de Noronha',
                            'standard': 'Horário Padrão de Fernando de Noronha',
                            'daylight': 'Horário de Verão de Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Horário da Ilha Norfolk'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Horário de Niue'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Horário de Terra Nova',
                            'standard': 'Horário Padrão de Terra Nova',
                            'daylight': 'Horário de Verão de Terra Nova'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Horário do Amazonas',
                            'standard': 'Horário Padrão do Amazonas',
                            'daylight': 'Horário de Verão do Amazonas'
                        },
                        'short': {
                            'generic': 'AMT',
                            'standard': 'AMT',
                            'daylight': 'AMST'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Horário Central',
                            'standard': 'Horário Padrão Central',
                            'daylight': 'Horário de Verão Central'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Horário Oriental',
                            'standard': 'Horário Padrão Oriental',
                            'daylight': 'Horário de Verão Oriental'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Horário da Montanha',
                            'standard': 'Horário Padrão da Montanha',
                            'daylight': 'Horário de Verão da Montanha'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Horário do Pacífico',
                            'standard': 'Horário Padrão do Pacífico',
                            'daylight': 'Horário de Verão do Pacífico'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Horário de Anadyr',
                            'standard': 'Horário Padrão do Anadyr',
                            'daylight': 'Horário de Verão do Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Horário do Aqtau',
                            'standard': 'Horário Padrão do Aqtau',
                            'daylight': 'Horário de Verão do Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Horário do Aqtobe',
                            'standard': 'Horário Padrão do Aqtobe',
                            'daylight': 'Horário de Verão do Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Horário do Cabo Verde',
                            'standard': 'Horário Padrão do Cabo Verde',
                            'daylight': 'Horário de Verão do Cabo Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Horário de Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Horário de Chatham',
                            'standard': 'Horário Padrão de Chatham',
                            'daylight': 'Horário de Verão de Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Horário do Chile',
                            'standard': 'Horário Padrão do Chile',
                            'daylight': 'Horário de Verão do Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Horário da China',
                            'standard': 'Horário Padrão da China',
                            'daylight': 'Horário de Verão da China'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Horário de Choibalsan',
                            'standard': 'Horário Padrão de Choibalsan',
                            'daylight': 'Horário de Verão de Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Horário das Ilhas Natal'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Horário das Ilhas Coco'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Horário da Colômbia',
                            'standard': 'Horário Padrão da Colômbia',
                            'daylight': 'Horário de Verão da Colômbia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Horário das Ilhas Cook',
                            'standard': 'Horário Padrão das Ilhas Cook',
                            'daylight': 'Meio Horário de Verão das Ilhas Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Horário de Cuba',
                            'standard': 'Horário Padrão de Cuba',
                            'daylight': 'Horário de Verão de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Horário de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Horário de Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Horário do Timor-Leste'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Horário da Ilha de Páscoa',
                            'standard': 'Horário Padrão da Ilha de Páscoa',
                            'daylight': 'Horário de Verão da Ilha de Páscoa'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Horário do Equador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Horário da Europa Central',
                            'standard': 'Horário Padrão da Europa Central',
                            'daylight': 'Horário de Verão da Europa Central'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Horário da Europa Oriental',
                            'standard': 'Horário Padrão da Europa Oriental',
                            'daylight': 'Horário de Verão da Europa Oriental'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Horário da Europa Ocidental',
                            'standard': 'Horário Padrão da Europa Ocidental',
                            'daylight': 'Horário de Verão da Europa Ocidental'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Horário das Ilhas Falkland',
                            'standard': 'Horário Padrão das Ilhas Falkland',
                            'daylight': 'Horário de Verão das Ilhas Falkland'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Horário de Fiji',
                            'standard': 'Horário Padrão de Fiji',
                            'daylight': 'Horário de Verão de Fiji'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Horário da Guiana Francesa'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Horário da Antártida e do Sul da França'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Horário de Galápagos'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Horário de Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Horário de Tonga',
                            'standard': 'Horário Padrão de Tonga',
                            'daylight': 'Horário de Verão de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Horário de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Horário do Turcomenistão',
                            'standard': 'Horário Padrão do Turcomenistão',
                            'daylight': 'Horário de Verão do Turcomenistão'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Horário de Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Horário do Uruguai',
                            'standard': 'Horário Padrão do Uruguai',
                            'daylight': 'Horário de Verão do Uruguai'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Horário do Uzbequistão',
                            'standard': 'Horário Padrão do Uzbequistão',
                            'daylight': 'Horário de Verão do Uzbequistão'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Horário de Vanuatu',
                            'standard': 'Horário Padrão de Vanuatu',
                            'daylight': 'Horário de Verão de Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Horário de Ecaterimburgo',
                            'standard': 'Horário Padrão de Ecaterimburgo',
                            'daylight': 'Horário de Verão de Ecaterimburgo'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Horário de Yakutsk',
                            'standard': 'Horário Padrão de Yakutsk',
                            'daylight': 'Horário de Verão de Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Horário de Wallis e Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Horário das Ilhas Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Horário de Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Horário de Volgogrado',
                            'standard': 'Horário Padrão de Volgogrado',
                            'daylight': 'Horário de Verão de Volgogrado'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Horário de Vladivostok',
                            'standard': 'Horário Padrão de Vladivostok',
                            'daylight': 'Horário de Verão de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Horário da Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Horário do Tajiquistão'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Horário de Taipei',
                            'standard': 'Horário Padrão de Taipei',
                            'daylight': 'Horário de Verão de Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Horário do Taiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Horário de Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Horário do Suriname'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Horário da Geórgia do Sul'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Horário das Ilhas Salomão'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Horário Padrão de Cingapura'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Horário do Golfo'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Horário Padrão de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Horário da Groenlândia Ocidental',
                            'standard': 'Horário Padrão da Groenlândia Ocidental',
                            'daylight': 'Horário de Verão da Groenlândia Ocidental'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Horário da Groelândia Oriental',
                            'standard': 'Horário Padrão da Groelândia Oriental',
                            'daylight': 'Horário de Verão da Groelândia Oriental'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Horário do Meridiano de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Horário das Ilhas Gilberto'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Horário da Geórgia',
                            'standard': 'Horário Padrão da Geórgia',
                            'daylight': 'Horário de Verão da Geórgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Horário de Gambier'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Horário do Acre',
                            'standard': 'Horário Padrão do Acre',
                            'daylight': 'Horário de Verão do Acre'
                        },
                        'short': {
                            'generic': 'ACT',
                            'standard': 'ACT',
                            'daylight': 'ACST'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Horário do Afeganistão'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Horário da África Central'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Horário da África Oriental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Horário da África do Sul'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Horário da África Ocidental',
                            'standard': 'Horário Padrão da África Ocidental',
                            'daylight': 'Horário de Verão da África Ocidental'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Horário do Alasca',
                            'standard': 'Horário Padrão do Alasca',
                            'daylight': 'Horário de Verão do Alasca'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Horário do Almaty',
                            'standard': 'Horário Padrão do Almaty',
                            'daylight': 'Horário de Verão do Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Horário da Arábia',
                            'standard': 'Horário Padrão da Arábia',
                            'daylight': 'Horário de Verão da Arábia'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Horário da Argentina',
                            'standard': 'Horário Padrão da Argentina',
                            'daylight': 'Horário de Verão da Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Horário da Argentina Ocidental',
                            'standard': 'Horário Padrão da Argentina Ocidental',
                            'daylight': 'Horário de Verão da Argentina Ocidental'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Horário da Armênia',
                            'standard': 'Horário Padrão da Armênia',
                            'daylight': 'Horário de Verão da Armênia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Horário do Atlântico',
                            'standard': 'Horário Padrão do Atlântico',
                            'daylight': 'Horário de Verão do Atlântico'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Horário da Austrália Central',
                            'standard': 'Horário Padrão da Austrália Central',
                            'daylight': 'Horário de Verão da Austrália Central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Horário da Austrália Centro-Ocidental',
                            'standard': 'Horário Padrão da Austrália Centro-Ocidental',
                            'daylight': 'Horário de Verão da Austrália Centro-Ocidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Horário da Austrália Oriental',
                            'standard': 'Horário Padrão da Austrália Oriental',
                            'daylight': 'Horário de Verão da Austrália Oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Horário da Austrália Ocidental',
                            'standard': 'Horário Padrão da Austrália Ocidental',
                            'daylight': 'Horário de Verão da Austrália Ocidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Horário do Arzeibaijão',
                            'standard': 'Horário Padrão do Arzeibaijão',
                            'daylight': 'Horário de Verão do Arzeibaijão'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Horário dos Açores',
                            'standard': 'Horário Padrão dos Açores',
                            'daylight': 'Horário de Verão dos Açores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Horário de Bangladesh',
                            'standard': 'Horário Padrão de Bangladesh',
                            'daylight': 'Horário de Verão de Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Horário do Butão'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Horário da Bolívia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Horário de Brasília',
                            'standard': 'Horário Padrão de Brasília',
                            'daylight': 'Horário de Verão de Brasília'
                        },
                        'short': {
                            'generic': 'BRT',
                            'standard': 'BRT',
                            'daylight': 'BRST'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Horário de Brunei Darussalam'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Horário da Guiana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Horário do Havaí e Ilhas Aleutas',
                            'standard': 'Horário Padrão do Havaí e Ilhas Aleutas',
                            'daylight': 'Horário de Verão do Havaí e Ilhas Aleutas'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Horário de Hong Kong',
                            'standard': 'Horário Padrão de Hong Kong',
                            'daylight': 'Horário de Verão de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Horário de Hovd',
                            'standard': 'Horário Padrão de Hovd',
                            'daylight': 'Horário de Verão de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Horário Padrão da Índia'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Horário do Oceano Índico'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Horário da Indochina'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Horário da Indonésia Central'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Horário da Indonésia Oriental'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Horário da Indonésia Ocidental'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Horário do Irã',
                            'standard': 'Horário Padrão do Irã',
                            'daylight': 'Horário de Verão do Irã'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Horário de Irkutsk',
                            'standard': 'Horário Padrão de Irkutsk',
                            'daylight': 'Horário de Verão de Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Horário de Israel',
                            'standard': 'Horário Padrão de Israel',
                            'daylight': 'Horário de Verão de Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Horário do Japão',
                            'standard': 'Horário Padrão do Japão',
                            'daylight': 'Horário de Verão do Japão'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Horário de Petropavlovsk-Kamchatski',
                            'standard': 'Horário Padrão de Petropavlovsk-Kamchatski',
                            'daylight': 'Horário de Verão de Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Horário do Casaquistão Oriental'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Horário do Casaquistão Ocidental'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Horário da Coreia',
                            'standard': 'Horário Padrão da Coreia',
                            'daylight': 'Horário de Verão da Coreia'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Horário de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Horário de Krasnoyarsk',
                            'standard': 'Horário Padrão de Krasnoyarsk',
                            'daylight': 'Horário de Verão de Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Horário do Quirguistão'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Horário de Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Horário das Ilhas Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Horário de Lord Howe',
                            'standard': 'Horário Padrão de Lord Howe',
                            'daylight': 'Horário de Verão de Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Horário de Macau',
                            'standard': 'Horário Padrão de Macau',
                            'daylight': 'Horário de Verão de Macau'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Horário da Ilha Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Horário de Magadan',
                            'standard': 'Horário Padrão de Magadan',
                            'daylight': 'Horário de Verão de Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Horário da Malásia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Horário das Ilhas Maldivas'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Horário das Marquesas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Horário das Ilhas Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Horário das Ilhas Maurício',
                            'standard': 'Horário Padrão das Ilhas Maurício',
                            'daylight': 'Horário de Verão das Ilhas Maurício'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Horário de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Horário de Ulan Bator',
                            'standard': 'Horário Padrão de Ulan Bator',
                            'daylight': 'Horário de Verão de Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Horário de Moscou',
                            'standard': 'Horário Padrão de Moscou',
                            'daylight': 'Horário de Verão de Moscou'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Horário de Mianmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Horário de Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Horário do Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Horário da Nova Caledônia',
                            'standard': 'Horário Padrão da Nova Caledônia',
                            'daylight': 'Horário de Verão da Nova Caledônia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Horário da Nova Zelândia',
                            'standard': 'Horário Padrão da Nova Zelândia',
                            'daylight': 'Horário de Verão da Nova Zelândia'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Horário {0}',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'ago',
                                '7': 'jul',
                                '6': 'jun',
                                '5': 'mai',
                                '12': 'dez',
                                '11': 'nov',
                                '10': 'out',
                                '9': 'set',
                                '1': 'jan',
                                '2': 'fev',
                                '3': 'mar',
                                '4': 'abr'
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
                                '8': 'agosto',
                                '7': 'julho',
                                '6': 'junho',
                                '5': 'maio',
                                '12': 'dezembro',
                                '11': 'novembro',
                                '10': 'outubro',
                                '9': 'setembro',
                                '1': 'janeiro',
                                '2': 'fevereiro',
                                '3': 'março',
                                '4': 'abril'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'ago',
                                '7': 'jul',
                                '6': 'jun',
                                '5': 'mai',
                                '12': 'dez',
                                '11': 'nov',
                                '10': 'out',
                                '9': 'set',
                                '1': 'jan',
                                '2': 'fev',
                                '3': 'mar',
                                '4': 'abr'
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
                                '8': 'agosto',
                                '7': 'julho',
                                '6': 'junho',
                                '5': 'maio',
                                '12': 'dezembro',
                                '11': 'novembro',
                                '10': 'outubro',
                                '9': 'setembro',
                                '1': 'janeiro',
                                '2': 'fevereiro',
                                '3': 'março',
                                '4': 'abril'
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
                                'sun': 'dom',
                                'mon': 'seg',
                                'tue': 'ter',
                                'wed': 'qua',
                                'thu': 'qui',
                                'fri': 'sex',
                                'sat': 'sáb'
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
                                'sun': 'dom',
                                'mon': 'seg',
                                'tue': 'ter',
                                'wed': 'qua',
                                'thu': 'qui',
                                'fri': 'sex',
                                'sat': 'sáb'
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
                                '1': '1º trimestre',
                                '2': '2º trimestre',
                                '3': '3º trimestre',
                                '4': '4º trimestre'
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
                                '1': '1º trimestre',
                                '2': '2º trimestre',
                                '3': '3º trimestre',
                                '4': '4º trimestre'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'afternoon': 'tarde',
                                'am': 'AM',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'afternoon': 'tarde',
                                'am': 'a',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p'
                            },
                            'wide': {
                                'afternoon': 'tarde',
                                'am': 'AM',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'tarde',
                                'am': 'AM',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meia-noite',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'afternoon': 'tarde',
                                'am': 'a',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'p'
                            },
                            'wide': {
                                'afternoon': 'tarde',
                                'am': 'AM',
                                'morning': 'manhã',
                                'night': 'noite',
                                'noon': 'meio-dia',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Antes de Cristo',
                            '0-alt-variant': 'BCE',
                            '1': 'Ano do Senhor',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'a.C.',
                            '0-alt-variant': 'BCE',
                            '1': 'd.C.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'a.C.',
                            '0-alt-variant': 'BCE',
                            '1': 'd.C.',
                            '1-alt-variant': 'CE'
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
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMM': 'MMM \'de\' y',
                            'yMM': 'MM/y',
                            'yMEd': 'E, dd/MM/y',
                            'yMd': 'dd/MM/y',
                            'EHm': 'E, HH:mm',
                            'Ehm': 'E, h:mm a',
                            'Ed': 'E, d',
                            'd': 'd',
                            'GyMMMd': 'd \'de\' MMM \'de\' y G',
                            'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                            'h': 'h a',
                            'H': 'HH',
                            'yQQQQ': 'y QQQQ',
                            'yQQQ': 'y QQQ',
                            'yMMMEd': 'E, d \'de\' MMM \'de\' y',
                            'yMMMd': 'd \'de\' MMM \'de\' y',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'HHmmss': 'HH:mm:ss',
                            'HHmm': 'HH:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM \'de\' y G',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, dd/MM',
                            'MMdd': 'dd/MM',
                            'MMM': 'LLL',
                            'MMMd': 'd \'de\' MMM',
                            'MMMEd': 'E, d \'de\' MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'MM/y'
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
                                'd': 'E, d - E, d \'de\' MMM',
                                'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                            },
                            'MMMd': {
                                'd': 'd-d \'de\' MMM',
                                'M': 'd \'de\' MMM - d \'de\' MMM'
                            },
                            'MMM': {
                                'M': 'MMM - MMM'
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
                                'y': 'y - y'
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
                                'd': 'E, d - E, d \'de\' MMM \'de\' y',
                                'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                            },
                            'yMMMM': {
                                'M': 'MMMM - MMMM \'de\' y',
                                'y': 'MMMM \'de\' y - MMMM \'de\' y'
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
                                'H': 'HH\'h\' - HH\'h\''
                            },
                            'h': {
                                'a': 'h\'h\' a - h\'h\' a',
                                'h': 'h\'h\' - h\'h\' a'
                            },
                            'd': {
                                'd': 'd-d'
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
