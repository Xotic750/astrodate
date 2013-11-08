/* AstroDate
 * Language: fr
 * ca-gregorian: 24r9310
 * timeZoneNames: 24r9310
 * localeDisplayNames: 24r9310
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
        AstroDate.lang('fr', {
            'codePatterns': {
                'language': 'langue : {0}',
                'script': '\u00E9criture : {0}',
                'territory': 'r\u00E9gion : {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Trier les caract\u00E8res Kana s\u00E9par\u00E9ment',
                    'yes': 'Trier les caract\u00E8res Kana diff\u00E9remment'
                },
                'colCaseLevel': {
                    'no': 'Trier sans tenir compte de la casse',
                    'yes': 'Trier en tenant compte de la casse'
                },
                'colCaseFirst': {
                    'lower': "Trier avec les minuscules d'abord",
                    'no': 'Trier sans ordre li\u00E9 \u00E0 la casse',
                    'upper': "Trier avec les majuscules d'abord"
                },
                'colStrength': {
                    'identical': 'Tout trier',
                    'primary': 'Ne trier que les lettres de base',
                    'quaternary': 'Trier en tenant compte des caract\u00E8res accentu\u00E9s, de la casse, de la largeur et des caract\u00E8res Kana',
                    'secondary': 'Trier en tenant compte des caract\u00E8res accentu\u00E9s',
                    'tertiary': 'Trier en tenant compte des caract\u00E8res accentu\u00E9s, de la casse et de la largeur'
                },
                'colNumeric': {
                    'no': 'Trier les chiffres individuellement',
                    'yes': 'Trier les chiffres par ordre num\u00E9rique'
                },
                'colNormalization': {
                    'no': 'Trier sans normalisation',
                    'yes': 'Trier avec normalisation Unicode'
                },
                'calendar': {
                    'japanese': 'Calendrier japonais',
                    'iso8601': 'calendrier ISO 8601',
                    'coptic': 'Calendrier copte',
                    'dangi': 'calendrier dangi',
                    'ethiopic': 'Calendrier \u00E9thiopien',
                    'ethiopic-amete-alem': 'Calendrier \u00E9thiopien Amete Alem',
                    'gregorian': 'calendrier gr\u00E9gorien',
                    'hebrew': 'Calendrier h\u00E9bra\u00EFque',
                    'persian': 'Calendrier persan',
                    'roc': 'Calendrier r\u00E9publicain chinois',
                    'chinese': 'Calendrier chinois',
                    'buddhist': 'calendrier bouddhiste',
                    'indian': 'Calendrier indien',
                    'islamic': 'calendrier musulman',
                    'islamic-civil': 'calendrier musulman (tabulaire, \u00E9poque civile)',
                    'islamic-rgsa': 'calendrier musulman (observ\u00E9, Arabie Saoudite)',
                    'islamic-tbla': 'calendrier musulman (tabulaire, \u00E9poque astronomique)',
                    'islamic-umalqura': 'calendrier musulman (calcul\u00E9, Umm al-Qura)'
                },
                'collation': {
                    'phonebook': 'Ordre de l\u2019annuaire',
                    'gb2312han': 'Ordre chinois simplifi\u00E9 - GB2312',
                    'eor': 'ordre de tri multilingue europ\u00E9en',
                    'ducet': 'ordre de tri Unicode par d\u00E9faut',
                    'dictionary': 'Ordre du dictionnaire',
                    'big5han': 'Ordre chinois traditionnel - Big5',
                    'traditional': 'Ordre traditionnel',
                    'standard': 'ordre de tri standard',
                    'zhuyin': 'ordre zhuyin',
                    'unihan': 'Ordre par radical et nombre de traits',
                    'stroke': 'Ordre des traits',
                    'searchjl': 'Rechercher par consonne initiale en hangeul',
                    'search': 'recherche g\u00E9n\u00E9rique',
                    'reformed': 'Ordre r\u00E9form\u00E9',
                    'pinyin': 'Ordre pinyin',
                    'phonetic': 'Ordre de tri phon\u00E9tique'
                },
                'numbers': {
                    'knda': 'Chiffres en kannada',
                    'khmr': 'chiffres khmers',
                    'kali': 'chiffres kayah li',
                    'jpanfin': 'chiffres japonais financiers',
                    'jpan': 'chiffres japonais',
                    'java': 'chiffres javanais',
                    'hebr': 'chiffres h\u00E9breux',
                    'hantfin': 'chiffres financiers en chinois traditionnel',
                    'hant': 'chiffres en chinois traditionnel',
                    'hansfin': 'chiffres financiers en chinois simplifi\u00E9',
                    'hans': 'chiffres en chinois simplifi\u00E9',
                    'hanidec': 'nombres d\u00E9cimaux chinois',
                    'guru': 'chiffres gourmoukh\u00EEs',
                    'gujr': 'chiffres goudjar\u00E2t\u00EEs',
                    'greklow': 'chiffres grecs minuscules',
                    'grek': 'chiffres grecs',
                    'bali': 'chiffres balinais',
                    'armnlow': 'chiffres arm\u00E9niens minuscules',
                    'armn': 'chiffres arm\u00E9niens',
                    'arabext': 'chiffres arabes \u00E9tendus',
                    'arab': 'chiffres arabes',
                    'finance': 'Chiffres financiers',
                    'traditional': 'Chiffres traditionnels',
                    'native': 'Chiffres natifs',
                    'beng': 'chiffres bengalis',
                    'brah': 'chiffres brahmis',
                    'cakm': 'chiffres chakmas',
                    'cham': 'chiffres chams',
                    'deva': 'chiffres devanagaris',
                    'orya': 'chiffres oriyas',
                    'osma': 'chiffres osmanyas',
                    'roman': 'chiffres romains',
                    'romanlow': 'chiffres romains minuscules',
                    'saur': 'chiffres saurashtras',
                    'shrd': 'chiffres sharadas',
                    'sora': 'chiffres sora-sompengs',
                    'sund': 'chiffres soundanais',
                    'vaii': 'Chiffres en va\u00EF',
                    'tibt': 'chiffres tib\u00E9tains',
                    'thai': 'chiffres tha\u00EFs',
                    'telu': 'chiffres t\u00E9lougous',
                    'tamldec': 'chiffres tamouls',
                    'taml': 'chiffres tamouls',
                    'talu': 'chiffres n\u00E9o-ta\u00EF-lu\u00EBs',
                    'takr': 'chiffres takris',
                    'olck': 'chiffres ol-tchikis',
                    'nkoo': 'chiffres n\u2019kos',
                    'mymrshan': 'chiffres birmans shans',
                    'mymr': 'chiffres birmans',
                    'mtei': 'chiffres meitei-mayeks',
                    'mong': 'chiffres mongols',
                    'mlym': 'chiffres malay\u00E2lams',
                    'limb': 'chiffres limbous',
                    'lepc': 'chiffres lepchas',
                    'latn': 'chiffres occidentaux',
                    'laoo': 'chiffres laotiens',
                    'lanatham': 'chiffres lannas thams',
                    'lana': 'chiffres lannas horas',
                    'geor': 'chiffres g\u00E9orgiens',
                    'fullwide': 'chiffres pleine chasse',
                    'ethi': 'chiffres \u00E9thiopiens'
                },
                'colAlternate': {
                    'non-ignorable': 'Trier les symboles',
                    'shifted': 'Trier en ignorant les symboles'
                },
                'colBackwards': {
                    'no': 'Trier les caract\u00E8res accentu\u00E9s normalement',
                    'yes': "Trier les caract\u00E8res accentu\u00E9s dans l'ordre inverse"
                }
            },
            'keys': {
                'colNormalization': 'Tri normalis\u00E9',
                'collation': 'ordre de tri',
                'colHiraganaQuaternary': 'Tri des caract\u00E8res Kana',
                'colCaseLevel': 'Tri sensible \u00E0 la casse',
                'colCaseFirst': 'Classement bas\u00E9 sur les majuscules et les minuscules',
                'colBackwards': 'Tri invers\u00E9 des caract\u00E8res accentu\u00E9s',
                'colAlternate': 'Tri ne tenant pas compte des symboles',
                'calendar': 'calendrier',
                'x': 'Usage priv\u00E9',
                'variableTop': 'Trier en tant que symboles',
                'va': 'Variante locale',
                'timezone': 'Fuseau horaire',
                'numbers': 'nombres',
                'currency': 'devise',
                'colStrength': 'Priorit\u00E9 du tri',
                'colNumeric': 'Tri num\u00E9rique'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0} : {1}'
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
                            'exemplarCity': '\u00CEle de P\u00E2ques'
                        },
                        'Efate': {
                            'exemplarCity': '\u00C9fat\u00E9'
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
                            'exemplarCity': 'Lord Howe'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Ad\u00E9la\u00EFde'
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
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'La R\u00E9union'
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
                            'exemplarCity': 'P\u00F4le Sud'
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
                            'exemplarCity': 'Thul\u00E9'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'T\u00E9gucigalpa'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Swift Current'
                        },
                        'Chicago': {
                            'exemplarCity': 'Chicago'
                        },
                        'Cayman': {
                            'exemplarCity': 'Ca\u00EFmans'
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
                                'exemplarCity': 'Ushua\u00EFa'
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
                            'exemplarCity': 'Bogota'
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
                            'exemplarCity': 'D\u00E9troit'
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
                            'exemplarCity': 'Jama\u00EFque'
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
                            'exemplarCity': 'Eirunep\u00E9'
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
                            'exemplarCity': 'Martinique'
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
                            'exemplarCity': 'Montr\u00E9al'
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
                            'exemplarCity': 'Port-d\u2019Espagne'
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
                            'exemplarCity': 'R\u00E9gina'
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
                            'exemplarCity': 'Saint-Domingue'
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
                            'exemplarCity': 'Saint-Barth\u00E9lemy'
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
                            'exemplarCity': 'G\u00E9orgie du Sud'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sainte-H\u00E9l\u00E8ne'
                        },
                        'Azores': {
                            'exemplarCity': 'A\u00E7ores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudes'
                        },
                        'Canary': {
                            'exemplarCity': '\u00CEles Canaries'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cap-Vert'
                        },
                        'Faeroe': {
                            'exemplarCity': 'F\u00E9ro\u00E9'
                        },
                        'Madeira': {
                            'exemplarCity': 'Mad\u00E8re'
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
                                'daylight': 'heure d\u2019\u00E9t\u00E9 britannique'
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
                            'exemplarCity': '\u00CEle de Man'
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
                            'exemplarCity': 'Ath\u00E8nes'
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
                                'daylight': 'heure d\u2019\u00E9t\u00E9 irlandaise'
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
                            'exemplarCity': 'B\u00FCsingen'
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
                            'exemplarCity': 'La\u00E2youne'
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
                            'exemplarCity': 'N\u2019Djamena'
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
                            'exemplarCity': 'S\u00E9oul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcande'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sakhaline'
                        },
                        'Saigon': {
                            'exemplarCity': 'H\u00F4-Chi-Minh-Ville'
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
                            'exemplarCity': 'Duba\u00EF'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Douchanb\u00E9'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'H\u00E9bron'
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
                            'exemplarCity': '\u00DCr\u00FCmqi'
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
                            'exemplarCity': 'T\u00E9h\u00E9ran'
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
                            'exemplarCity': 'J\u00E9rusalem'
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
                            'exemplarCity': 'Bahre\u00EFn'
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
                            'exemplarCity': 'Tcho\u00EFbalsan'
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
                            'exemplarCity': 'Krasno\u00EFarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kowe\u00EFt'
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
                            'standard': 'heure de G\u00E9orgie du Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'heure des \u00EEles Salomon'
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
                            'daylight': 'heure d\u2019\u00E9t\u00E9 des Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'heure de Samara',
                            'standard': 'heure normale de Samara',
                            'daylight': 'heure avanc\u00E9e de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'heure de Sakhaline',
                            'standard': 'heure normale de Sakhaline',
                            'daylight': 'heure avanc\u00E9e de Sakhaline'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'heure de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'heure de la R\u00E9union'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'heure de l\u2019\u00EEle de Pohnpei'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'heure des \u00EEles Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'heure de Saint-Pierre-et-Miquelon',
                            'standard': 'heure normale de Saint-Pierre-et-Miquelon',
                            'daylight': 'heure avanc\u00E9e de Saint-Pierre-et-Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'heure des \u00EEles Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'heure des Philippines',
                            'standard': 'heure normale des Philippines',
                            'daylight': 'heure avanc\u00E9e des Philippines'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'heure du P\u00E9rou',
                            'standard': 'heure normale du P\u00E9rou',
                            'daylight': 'heure avanc\u00E9e du P\u00E9rou'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'heure du Paraguay',
                            'standard': 'heure normale du Paraguay',
                            'daylight': 'heure avanc\u00E9e du Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'heure de la Papouasie-Nouvelle-Guin\u00E9e'
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
                            'daylight': 'heure avanc\u00E9e du Pakistan'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'heure de Omsk',
                            'standard': 'heure normale de Omsk',
                            'daylight': 'heure avanc\u00E9e de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'heure de Novossibirsk',
                            'standard': 'heure normale de Novossibirsk',
                            'daylight': 'heure avanc\u00E9e de Novossibirsk'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'heure normale d\u2019Afrique centrale'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'heure de l\u2019Afghanistan'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'heure de l\u2019Acre',
                            'standard': 'heure normale de l\u2019Acre',
                            'daylight': 'heure avanc\u00E9e de l\u2019Acre'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'heure de l\u2019Amazonie',
                            'standard': 'heure normale de l\u2019Amazonie',
                            'daylight': 'heure avanc\u00E9e de l\u2019Amazonie'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'heure du centre nord-am\u00E9ricain',
                            'standard': 'heure normale du centre nord-am\u00E9ricain',
                            'daylight': 'heure avanc\u00E9e du Centre'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'heure de l\u2019Est nord-am\u00E9ricain',
                            'standard': 'heure normale de l\u2019Est nord-am\u00E9ricain',
                            'daylight': 'heure avanc\u00E9e de l\u2019Est'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'heure des Rocheuses',
                            'standard': 'heure normale des Rocheuses',
                            'daylight': 'heure avanc\u00E9e des Rocheuses'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'heure du Pacifique nord-am\u00E9ricain',
                            'standard': 'heure normale du Pacifique nord-am\u00E9ricain',
                            'daylight': 'heure avanc\u00E9e du Pacifique'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'heure d\u2019Anadyr',
                            'standard': 'heure normale d\u2019Anadyr',
                            'daylight': 'heure avanc\u00E9e d\u2019Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'heure d\u2019Aktaou',
                            'standard': 'heure normale d\u2019Aktaou',
                            'daylight': 'heure avanc\u00E9e d\u2019Aktaou'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'heure d\u2019Aqt\u00F6be',
                            'standard': 'heure normale d\u2019Aqt\u00F6be',
                            'daylight': 'heure avanc\u00E9 d\u2019Aqt\u00F6be'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'heure du Cap-Vert',
                            'standard': 'heure normale du Cap-Vert',
                            'daylight': 'heure avanc\u00E9e du Cap-Vert'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'heure des Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'heure des \u00EEles Chatham',
                            'standard': 'heure normale des \u00CEles Chatham',
                            'daylight': 'heure avanc\u00E9e des \u00CEles Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'heure du Chili',
                            'standard': 'heure normale du Chili',
                            'daylight': 'heure avanc\u00E9e du Chili'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'heure de la Chine',
                            'standard': 'heure normale de la Chine',
                            'daylight': 'heure avanc\u00E9e de Chine'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'heure de Choibalsan',
                            'standard': 'heure normale de Choibalsan',
                            'daylight': 'heure avanc\u00E9e de Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'heure de l\u2019\u00EEle Christmas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'heure des \u00EEles Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'heure de Colombie',
                            'standard': 'heure normale de Colombie',
                            'daylight': 'heure avanc\u00E9e de Colombie'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'heure des \u00EEles Cook',
                            'standard': 'heure normale des \u00EEles Cook',
                            'daylight': 'heure avanc\u00E9e des \u00EEles Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'heure de Cuba',
                            'standard': 'heure normale de Cuba',
                            'daylight': 'heure avanc\u00E9e de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'heure de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'heure de Dumont-d\u2019Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'heure du Timor oriental'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'heure de l\u2019\u00EEle de P\u00E2ques',
                            'standard': 'heure normale de l\u2019\u00EEle de P\u00E2ques',
                            'daylight': 'heure avanc\u00E9e de l\u2019\u00EEle de P\u00E2ques'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'heure de l\u2019\u00C9quateur'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'heure d\u2019Europe centrale',
                            'standard': 'heure normale d\u2019Europe centrale',
                            'daylight': 'heure avanc\u00E9e d\u2019Europe centrale'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'heure d\u2019Europe de l\u2019Est',
                            'standard': 'heure normale d\u2019Europe de l\u2019Est',
                            'daylight': 'heure avanc\u00E9e d\u2019Europe de l\u2019Est'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'heure d\u2019Europe de l\u2019Ouest',
                            'standard': 'heure normale d\u2019Europe de l\u2019Ouest',
                            'daylight': 'heure avanc\u00E9e d\u2019Europe de l\u2019Ouest'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'heure des \u00EEles Malouines',
                            'standard': 'heure normale des \u00EEles Malouines',
                            'daylight': 'heure avanc\u00E9e des \u00EEles Malouines'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'heure des \u00EEles Fidji',
                            'standard': 'heure normale des \u00EEles Fidji',
                            'daylight': 'heure avanc\u00E9e des \u00EEles Fidji'
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
                            'daylight': 'heure avanc\u00E9e de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'heure de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'heure du Turkm\u00E9nistan',
                            'standard': 'heure normale du Turkm\u00E9nistan',
                            'daylight': 'heure avanc\u00E9e du Turkm\u00E9nistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'heure des Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'heure de l\u2019Uruguay',
                            'standard': 'heure normale de l\u2019Uruguay',
                            'daylight': "heure avanc\u00E9e de l'Uruguay"
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'heure de l\u2019Ouzb\u00E9kistan',
                            'standard': 'heure normale de l\u2019Ouzb\u00E9kistan',
                            'daylight': "heure avanc\u00E9e de l'Ouzb\u00E9kistan"
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'heure du Vanuatu',
                            'standard': 'heure normale du Vanuatu',
                            'daylight': 'heure avanc\u00E9e de Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'heure d\u2019Ekaterinbourg',
                            'standard': 'heure normale d\u2019Ekaterinbourg',
                            'daylight': 'heure avanc\u00E9e d\u2019Ekaterinbourg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'heure de Iakoutsk',
                            'standard': 'heure normale de Iakoutsk',
                            'daylight': 'heure avanc\u00E9e de Iakoutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'heure de Wallis-et-Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'heure de l\u2019\u00EEle Wake'
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
                            'daylight': 'heure avanc\u00E9e de Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'heure de Vladivostok',
                            'standard': 'heure normale de Vladivostok',
                            'daylight': 'heure avanc\u00E9e de Vladivostok'
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
                            'daylight': 'heure avanc\u00E9e de Taipei'
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
                            'generic': 'heure de l\u2019Ouest du Groenland',
                            'standard': 'heure normale de l\u2019Ouest du Groenland',
                            'daylight': 'heure avanc\u00E9e de l\u2019Ouest du Groenland'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'heure de l\u2019Est du Groenland',
                            'standard': 'heure normale de l\u2019Est du Groenland',
                            'daylight': 'heure avanc\u00E9e de l\u2019Est du Groenland'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'heure moyenne de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'heure des \u00EEles Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'heure de la G\u00E9orgie',
                            'standard': 'heure normale de la G\u00E9orgie',
                            'daylight': 'heure avanc\u00E9e de G\u00E9orgie'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'heure des \u00EEles Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'heure des \u00EEles Gal\u00E1pagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'heure des Terres australes et antarctiques fran\u00E7aises'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'heure de la Guyane fran\u00E7aise'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'heure normale d\u2019Afrique de l\u2019Est'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'heure normale d\u2019Afrique m\u00E9ridionale'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'heure d\u2019Afrique de l\u2019Ouest',
                            'standard': 'heure normale d\u2019Afrique de l\u2019Ouest',
                            'daylight': 'heure avanc\u00E9e d\u2019Afrique de l\u2019Ouest'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'heure de l\u2019Alaska',
                            'standard': 'heure normale de l\u2019Alaska',
                            'daylight': 'heure avanc\u00E9e de l\u2019Alaska'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'heure d\u2019Alma Ata',
                            'standard': 'heure normale d\u2019Alma Ata',
                            'daylight': 'heure avanc\u00E9e d\u2019Alma Ata'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'heure de l\u2019Arabie',
                            'standard': 'heure normale de l\u2019Arabie',
                            'daylight': 'heure avanc\u00E9e de l\u2019Arabie'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'heure de l\u2019Argentine',
                            'standard': 'heure normale d\u2019Argentine',
                            'daylight': 'heure avanc\u00E9e de l\u2019Argentine'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'heure de l\u2019Ouest argentin',
                            'standard': 'heure normale de l\u2019Ouest argentin',
                            'daylight': 'heure avanc\u00E9e de l\u2019Ouest argentin'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'heure de l\u2019Arm\u00E9nie',
                            'standard': 'heure normale de l\u2019Arm\u00E9nie',
                            'daylight': 'heure avanc\u00E9e d\u2019Arm\u00E9nie'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'heure de l\u2019Atlantique',
                            'standard': 'heure normale de l\u2019Atlantique',
                            'daylight': 'heure avanc\u00E9e de l\u2019Atlantique'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'heure du centre de l\u2019Australie',
                            'standard': 'heure normale du centre de l\u2019Australie',
                            'daylight': 'heure avanc\u00E9e du centre de l\u2019Australie'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'heure du centre-ouest de l\u2019Australie',
                            'standard': 'heure normale du centre-ouest de l\u2019Australie',
                            'daylight': 'heure avanc\u00E9e du centre-ouest de l\u2019Australie'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'heure de l\u2019Est de l\u2019Australie',
                            'standard': 'heure normale de l\u2019Est de l\u2019Australie',
                            'daylight': 'heure avanc\u00E9e de l\u2019Est de l\u2019Australie'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'heure de l\u2019Ouest de l\u2019Australie',
                            'standard': 'heure normale de l\u2019Ouest de l\u2019Australie',
                            'daylight': 'heure avanc\u00E9e de l\u2019Ouest de l\u2019Australie'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'heure de l\u2019Azerba\u00EFdjan',
                            'standard': 'heure normale de l\u2019Azerba\u00EFdjan',
                            'daylight': 'heure avanc\u00E9e d\u2019Azerba\u00EFdjan'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'heure des A\u00E7ores',
                            'standard': 'heure normale des A\u00E7ores',
                            'daylight': 'heure avanc\u00E9e des A\u00E7ores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'heure du Bangladesh',
                            'standard': 'heure normale du Bangladesh',
                            'daylight': 'heure avanc\u00E9e du Bangladesh'
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
                            'daylight': 'heure avanc\u00E9e de Brasilia'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'heure du Brun\u00E9i'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'heure du Guyana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'heure d\u2019Hawaii - Al\u00E9outiennes',
                            'standard': 'heure normale d\u2019Hawaii - Al\u00E9outiennes',
                            'daylight': 'heure avanc\u00E9e d\u2019Hawaii - Al\u00E9outiennes'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'heure de Hong Kong',
                            'standard': 'heure normale de Hong Kong',
                            'daylight': 'heure avanc\u00E9e de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'heure de Hovd',
                            'standard': 'heure normale de Hovd',
                            'daylight': 'heure avanc\u00E9e de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'heure de l\u2019Inde'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'heure de l\u2019Oc\u00E9an Indien'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'heure d\u2019Indochine'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'heure du Centre indon\u00E9sien'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'heure de l\u2019Est indon\u00E9sien'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'heure de l\u2019Ouest indon\u00E9sien'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'heure de l\u2019Iran',
                            'standard': 'heure normale d\u2019Iran',
                            'daylight': 'heure avanc\u00E9e d\u2019Iran'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'heure d\u2019Irkoutsk',
                            'standard': 'heure normale d\u2019Irkoutsk',
                            'daylight': 'heure avanc\u00E9e d\u2019Irkoutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'heure d\u2019Isra\u00EBl',
                            'standard': 'heure normale d\u2019Isra\u00EBl',
                            'daylight': 'heure avanc\u00E9e d\u2019Isra\u00EBl'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'heure du Japon',
                            'standard': 'heure normale du Japon',
                            'daylight': 'heure avanc\u00E9e du Japon'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'heure de Petropavlovsk-Kamchatski',
                            'standard': 'heure normale de Petropavlovsk-Kamchatski',
                            'daylight': 'heure avanc\u00E9e de Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'heure de l\u2019Est du Kazakhstan'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'heure de l\u2019Ouest du Kazakhstan'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'heure de la Cor\u00E9e',
                            'standard': 'heure normale de la Cor\u00E9e',
                            'daylight': 'heure avanc\u00E9e de Cor\u00E9e'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'heure de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'heure de Krasno\u00EFarsk',
                            'standard': 'heure normale de Krasno\u00EFarsk',
                            'daylight': 'heure avanc\u00E9e de Krasno\u00EFarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'heure du Kirghizistan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'heure des \u00EEles de la Ligne'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'heure de Lord Howe',
                            'standard': 'heure normale de Lord Howe',
                            'daylight': 'heure avanc\u00E9e de Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'heure de l\u2019\u00EEle Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'heure de Magadan',
                            'standard': 'heure normale de Magadan',
                            'daylight': 'heure avanc\u00E9e de Magadan'
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
                            'standard': 'heure des \u00EEles Marquises'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'heure des \u00EEles Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'heure de Maurice',
                            'standard': 'heure normale de Maurice',
                            'daylight': 'heure avanc\u00E9e de Maurice'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'heure de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'heure d\u2019Oulan-Bator',
                            'standard': 'heure normale d\u2019Oulan-Bator',
                            'daylight': 'heure avanc\u00E9e d\u2019Oulan-Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'heure de Moscou',
                            'standard': 'heure normale de Moscou',
                            'daylight': 'heure avanc\u00E9e de Moscou'
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
                            'standard': 'heure du N\u00E9pal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'heure de la Nouvelle-Cal\u00E9donie',
                            'standard': 'heure normale de la Nouvelle-Cal\u00E9donie',
                            'daylight': 'heure avanc\u00E9e de Nouvelle-Cal\u00E9donie'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'heure de la Nouvelle-Z\u00E9lande',
                            'standard': 'heure normale de la Nouvelle-Z\u00E9lande',
                            'daylight': 'heure avanc\u00E9e de la Nouvelle-Z\u00E9lande'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'heure de Terre-Neuve',
                            'standard': 'heure normale de Terre-Neuve',
                            'daylight': 'heure avanc\u00E9e de Terre-Neuve'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'heure de Niou\u00E9'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'heure de l\u2019\u00EEle Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'heure de Fernando de Noronha',
                            'standard': 'heure normale de Fernando de Noronha',
                            'daylight': 'heure avanc\u00E9e de Fernando de Noronha'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'heure des \u00EEles Mariannes du Nord'
                        }
                    }
                },
                'hourFormat': '+HH:mm;\u2212HH:mm',
                'gmtFormat': 'UTC{0}',
                'gmtZeroFormat': 'UTC',
                'regionFormat': 'heure : {0}',
                'regionFormat-type-daylight': '{0} (heure d\u2019\u00E9t\u00E9)',
                'regionFormat-type-standard': '{0} (heure standard)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'ao\u00FBt',
                                '7': 'juil.',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'd\u00E9c.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'janv.',
                                '2': 'f\u00E9vr.',
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
                                '8': 'ao\u00FBt',
                                '7': 'juillet',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'd\u00E9cembre',
                                '11': 'novembre',
                                '10': 'octobre',
                                '9': 'septembre',
                                '1': 'janvier',
                                '2': 'f\u00E9vrier',
                                '3': 'mars',
                                '4': 'avril'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'ao\u00FBt',
                                '7': 'juil.',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'd\u00E9c.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'janv.',
                                '2': 'f\u00E9vr.',
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
                                '8': 'ao\u00FBt',
                                '7': 'juillet',
                                '6': 'juin',
                                '5': 'mai',
                                '12': 'd\u00E9cembre',
                                '11': 'novembre',
                                '10': 'octobre',
                                '9': 'septembre',
                                '1': 'janvier',
                                '2': 'f\u00E9vrier',
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
                                'afternoon': 'apr\u00E8s-midi',
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
                                'afternoon': 'apr\u00E8s-midi',
                                'am': 'avant-midi',
                                'morning': 'matin',
                                'night': 'soir',
                                'noon': 'midi',
                                'pm': 'apr\u00E8s-midi'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'avant J\u00E9sus-Christ',
                            '0-alt-variant': 'AEC',
                            '1': 'apr\u00E8s J\u00E9sus-Christ',
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
                            'H': "HH 'h'",
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
                                'd': 'E d \u2013 E d MMM',
                                'M': 'E d MMM \u2013 E d MMM'
                            },
                            'MMMd': {
                                'd': 'd\u2013d MMM',
                                'M': 'd MMM \u2013 d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E dd/MM - E dd/MM',
                                'M': 'E dd/MM - E dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM \u2013 dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': 'M\u2013M'
                            },
                            'Hv': {
                                'H': 'HH \u2013 HH v'
                            },
                            'hv': {
                                'a': 'h a \u2013 h a v',
                                'h': 'h \u2013 h a v'
                            },
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'MM/y \u2013 MM/y',
                                'y': 'M/y \u2013 M/y'
                            },
                            'yMd': {
                                'd': 'd/M/y \u2013 d/M/y',
                                'M': 'd/M/y \u2013 d/M/y',
                                'y': 'dd/MM/y \u2013 dd/MM/y'
                            },
                            'yMEd': {
                                'd': 'E dd/MM/y \u2013 E dd/MM/y',
                                'M': 'E dd/MM/y \u2013 E dd/MM/y',
                                'y': 'E dd/MM/y \u2013 E dd/MM/y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd\u2013d MMM y',
                                'M': 'd MMM \u2013 d MMM y',
                                'y': 'd MMM y \u2013 d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d \u2013 E d MMM y',
                                'M': 'E d MMM \u2013 E d MMM y',
                                'y': 'E d MMM y \u2013 E d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM \u2013 MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm \u2013 HH:mm v',
                                'm': 'HH:mm \u2013 HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm \u2013 h:mm a v',
                                'm': 'h:mm \u2013 h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm \u2013 HH:mm',
                                'm': 'HH:mm \u2013 HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a \u2013 h:mm a',
                                'h': 'h:mm \u2013 h:mm a',
                                'm': 'h:mm \u2013 h:mm a'
                            },
                            'H': {
                                'H': 'HH \u2013 HH'
                            },
                            'h': {
                                'a': 'h a \u2013 h a',
                                'h': 'h \u2013 h a'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'intervalFormatFallback': '{0} \u2013 {1}'
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
