/* AstroDate
 * Language: hr
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
        AstroDate.lang('hr', {
            'codePatterns': {
                'language': 'Jezik: {0}',
                'script': 'Pismo: {0}',
                'territory': 'Regija: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Poredaj pismo kana zasebno',
                    'yes': 'Poredaj pismo kana druga\u010Dije'
                },
                'colCaseLevel': {
                    'no': 'Poredaj zanemaruju\u0107i veli\u010Dinu',
                    'yes': 'Poredaj u skladu s veli\u010Dinom slova'
                },
                'colCaseFirst': {
                    'lower': 'Prvo poredaj mala slova',
                    'no': 'Poredaj po normalnom poretku veli\u010Dine slova',
                    'upper': 'Poredaj prvo velika slova'
                },
                'colStrength': {
                    'identical': 'Poredaj sve',
                    'primary': 'Poredaj samo po osnovnim slovima',
                    'quaternary': 'Poredaj po naglascima/veli\u010Dini/\u0161irini/pismu kana',
                    'secondary': 'Poredaj po naglasku',
                    'tertiary': 'Poredaj po naglascima/veli\u010Dini/\u0161irini'
                },
                'colNumeric': {
                    'no': 'Poredaj znamenke pojedina\u010Dno',
                    'yes': 'Poredaj znamenke numeri\u010Dki'
                },
                'colNormalization': {
                    'no': 'Poredaj bez normalizacije',
                    'yes': 'Poredaj unikod normalizirano'
                },
                'calendar': {
                    'japanese': 'japanski kalendar',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptski kalendar',
                    'dangi': 'Dangi kalendar',
                    'ethiopic': 'Etiopski kalendar',
                    'ethiopic-amete-alem': 'Etiopski kalendar '
                    Amete Alem '',
                    'gregorian': 'gregorijanski kalendar',
                    'hebrew': 'hebrejski kalendar',
                    'persian': 'Perzijski kalendar',
                    'roc': 'kalendar Republike Kine',
                    'chinese': 'kineski kalendar',
                    'buddhist': 'budisti\u010Dki kalendar',
                    'indian': 'indijski nacionalni kalendar',
                    'islamic': 'islamski kalendar',
                    'islamic-civil': 'islamski civilni kalendar',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'razvrstavanje po abecedi',
                    'gb2312han': 'razvrstavanje prema pojednostavljenom kineskom - GB2312',
                    'eor': 'eor',
                    'ducet': 'Standardno Unicode razvrstavanje',
                    'dictionary': 'rje\u010Dni\u010Dko razvrstavanje',
                    'big5han': 'razvrstavanje prema tradicionalnom kineskom - Big5',
                    'traditional': 'tradicionalno razvrstavanje',
                    'standard': 'Standardno razvrstavanje',
                    'zhuyin': 'zhuyin razvrstavanje',
                    'unihan': 'razvrstavanje prema korijenu i potezu',
                    'stroke': 'razvrstavanje po redoslijedu poteza za kineski',
                    'searchjl': 'Pretra\u017Eivanje po po\u010Detnom suglasniku hangula',
                    'search': 'Op\u0107enito pretra\u017Eivanje',
                    'reformed': 'reformirano razvrstavanje',
                    'pinyin': 'Pinyin razvrstavanje',
                    'phonetic': 'Fonetski poredak'
                },
                'numbers': {
                    'knda': 'znamenke pisma kannada',
                    'khmr': 'khmerske znamenke',
                    'kali': 'kali',
                    'jpanfin': 'japanski financijski brojevi',
                    'jpan': 'japanski brojevi',
                    'java': 'java',
                    'hebr': 'hebrejski brojevi',
                    'hantfin': 'tradicionalni kineski financijski brojevi',
                    'hant': 'tradicionalni kineski brojevi',
                    'hansfin': 'pojednostavljeni kineski financijski brojevi',
                    'hans': 'pojednostavljeni kineski brojevi',
                    'hanidec': 'kineski decimalni brojevi',
                    'guru': 'znamenke pisma gurmukhi',
                    'gujr': 'gud\u017Earatske znamenke',
                    'greklow': 'mali gr\u010Dki brojevi',
                    'grek': 'gr\u010Dki brojevi',
                    'bali': 'bali',
                    'armnlow': 'mali armenski brojevi',
                    'armn': 'armenski brojevi',
                    'arabext': 'pro\u0161irene arapsko-indijske znamenke',
                    'arab': 'arapsko-indijske znamenke',
                    'finance': 'Financijski brojevi',
                    'traditional': 'Tradicionalni brojevi',
                    'native': 'Izvorne znamenke',
                    'beng': 'znamenke bengalskog pisma',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'znamenke pisma devanagari',
                    'orya': 'orijske znamenke',
                    'osma': 'osma',
                    'roman': 'rimski brojevi',
                    'romanlow': 'mali rimski brojevi',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vai znamenke',
                    'tibt': 'tibetske znamenke',
                    'thai': 'tajske znamenke',
                    'telu': 'znamenke telu\u0161kog pisma',
                    'tamldec': 'tamilske znamenke',
                    'taml': 'tamilski brojevi',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'mijanmarske znamenke',
                    'mtei': 'mtei',
                    'mong': 'Mongolske znamenke',
                    'mlym': 'malajalamske znamenke',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'arapski brojevi',
                    'laoo': 'laoske znamenke',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'gruzijski brojevi',
                    'fullwide': '\u0161iroke znamenke',
                    'ethi': 'etiopski brojevi'
                },
                'colAlternate': {
                    'non-ignorable': 'Poredaj simbole',
                    'shifted': 'Poredaj zanemaruju\u0107i simbole'
                },
                'colBackwards': {
                    'no': 'Poredaj naglaske normalno',
                    'yes': 'Poredaj naglaske obrnuto'
                }
            },
            'keys': {
                'colNormalization': 'Normalizirano poredavanje',
                'collation': 'Redoslijed razvrstavanja',
                'colHiraganaQuaternary': 'Poredavanje po pismu kana',
                'colCaseLevel': 'Poredavanje u skladu s veli\u010Dinom slova',
                'colCaseFirst': 'Poredavanje po velikim/malim slovima',
                'colBackwards': 'Obrnuto poredavanje po naglasku',
                'colAlternate': 'Zanemarivanje poredavanja simbola',
                'calendar': 'kalendar',
                'x': 'Privatna upotreba',
                'variableTop': 'Poredaj kao simbole',
                'va': 'Varijanta zemlje/jezika',
                'timezone': 'Vremenska zona',
                'numbers': 'brojevi',
                'currency': 'valuta',
                'colStrength': 'Ja\u010Dina poredavanja',
                'colNumeric': 'Numeri\u010Dko poredavanje'
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
                            'exemplarCity': 'Uskrsni Otok'
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
                            'exemplarCity': 'Fid\u017Ei'
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
                            'exemplarCity': 'Marki\u017Eansko oto\u010Dje'
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
                            'exemplarCity': 'Maldivi'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'R\u00E9union'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauricijus'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Bo\u017Ei\u0107ni otok'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokosovi otoci'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komori'
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
                            'exemplarCity': 'Nepoznati grad'
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
                            'exemplarCity': 'Ju\u017Eni pol'
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
                            'exemplarCity': 'Kajman'
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
                            'exemplarCity': 'Asunci\u00F3n'
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
                            'exemplarCity': 'Angvila'
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
                            'exemplarCity': 'Belem'
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
                            'exemplarCity': 'Gvajana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Gvatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Guadalupa'
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
                            'exemplarCity': 'Cordoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Kostarika'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiaba'
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
                            'exemplarCity': 'Maceio'
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
                            'exemplarCity': 'Martinik'
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
                            'exemplarCity': 'Ciudad de M\u00E9xico'
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
                                'exemplarCity': 'Beulah, Sjeverna Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Sjeverna Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Sjeverna Dakota'
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
                            'exemplarCity': 'Portoriko'
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
                            'exemplarCity': 'Saint Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
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
                            'exemplarCity': 'Ju\u017Ena Georgija'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'St. Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorski otoci'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanari'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Zelenortski Otoci'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Ferojski otoci'
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
                            'exemplarCity': 'Monako'
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
                            'exemplarCity': 'Luksemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'britansko ljetno vrijeme'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kijev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kalinjingrad'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Istanbul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Otok Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukure\u0161t'
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
                            'exemplarCity': 'Beograd'
                        },
                        'Athens': {
                            'exemplarCity': 'Atena'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andora'
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
                            'exemplarCity': 'Sofija'
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
                            'exemplarCity': 'Uzgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporo\u017Eje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Var\u0161ava'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Be\u010D'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikan'
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
                            'exemplarCity': 'Rim'
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
                            'exemplarCity': 'Pariz'
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
                                'daylight': 'irsko ljetno vrijeme'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kopenhagen'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budimpe\u0161ta'
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
                            'exemplarCity': 'Kin\u0161asa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Kartum'
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
                            'exemplarCity': 'El Aaiun'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'D\u017Eibuti'
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
                            'exemplarCity': 'Tunis'
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
                            'exemplarCity': 'Niamey'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Lusaka'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Lubumba\u0161i'
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
                            'exemplarCity': 'Al\u017Eir'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0160angaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seoul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho \u0160i Min'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijad'
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
                            'exemplarCity': 'Pjongjang'
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
                            'exemplarCity': 'Damask'
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
                            'exemplarCity': 'Du\u0161anbe'
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
                            'exemplarCity': 'D\u017Eakarta'
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
                            'exemplarCity': 'Jakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Ekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erevan'
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
                            'exemplarCity': 'Ta\u0161kent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ashgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktobe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadir'
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
                            'exemplarCity': 'Bahrein'
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
                            'exemplarCity': 'Bi\u0161kek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunej'
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
                            'exemplarCity': 'Kam\u010Datka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Kathmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handiga'
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
                            'exemplarCity': 'Kuvajt'
                        },
                        'Macau': {
                            'exemplarCity': 'Makao'
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
                            'exemplarCity': 'Muscat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nikozija'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznjeck'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'sej\u0161elsko vrijeme'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'samoansko vrijeme',
                            'standard': 'samoansko standardno vrijeme',
                            'daylight': 'samoansko ljetno vrijeme'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'samarsko vrijeme',
                            'standard': 'samarsko standardno vrijeme',
                            'daylight': 'samarsko ljetno vrijeme'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'sahalinsko vrijeme',
                            'standard': 'sahalinsko standardno vrijeme',
                            'daylight': 'sahalinsko ljetno vrijeme'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'vrijeme Rothere'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'vrijeme Reuniona'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'vrijeme Qyzylorda',
                            'standard': 'standardno vrijeme Qyzylorda',
                            'daylight': 'ljetno vrijeme Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'vrijeme Ponapea'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'vrijeme Pitcairna'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'vrijeme za Sveti Petar i Mikelon',
                            'standard': 'standardno vrijeme za Sveti Petar i Mikelon',
                            'daylight': 'ljetno vrijeme za Sveti Petar i Mikelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'vrijeme Otoka Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'filipinsko vrijeme',
                            'standard': 'filipinsko standardno vrijeme',
                            'daylight': 'filipinsko ljetno vrijeme'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'peruansko vrijeme',
                            'standard': 'peruansko standardno vrijeme',
                            'daylight': 'peruansko ljetno vrijeme'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'paragvajsko vrijeme',
                            'standard': 'paragvajsko standardno vrijeme',
                            'daylight': 'paragvajsko ljetno vrijeme'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'vrijeme Papue Nove Gvineje'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'vrijeme Palaua'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'pakistansko vrijeme',
                            'standard': 'pakistansko standardno vrijeme',
                            'daylight': 'pakistansko ljetno vrijeme'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'omsko vrijeme',
                            'standard': 'omsko standardno vrijeme',
                            'daylight': 'omsko ljetno vrijeme'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'novosibirsko vrijeme',
                            'standard': 'novosibirsko standardno vrijeme',
                            'daylight': 'novosibirsko ljetno vrijeme'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'vrijeme Sjevernomarijanskih Otoka'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'vrijeme grada Fernando de Noronha',
                            'standard': 'standardno vrijeme grada Fernando de Noronha',
                            'daylight': 'ljetno vrijeme grada Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'vrijeme Otoka Norfolk'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'vrijeme Niuea'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'newfoundlandsko vrijeme',
                            'standard': 'newfoundlandsko standardno vrijeme',
                            'daylight': 'newfoundlandsko ljetno vrijeme'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'amazonsko vrijeme',
                            'standard': 'amazonsko standardno vrijeme',
                            'daylight': 'amazonsko ljetno vrijeme'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'sredi\u0161nje vrijeme',
                            'standard': 'sredi\u0161nje standardno vrijeme',
                            'daylight': 'sredi\u0161nje ljetno vrijeme'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'isto\u010Dno vrijeme',
                            'standard': 'isto\u010Dno standardno vrijeme',
                            'daylight': 'isto\u010Dno ljetno vrijeme'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'planinsko vrijeme',
                            'standard': 'planinsko standardno vrijeme',
                            'daylight': 'planinsko ljetno vrijeme'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'pacifi\u010Dko vrijeme',
                            'standard': 'pacifi\u010Dko standardno vrijeme',
                            'daylight': 'pacifi\u010Dko ljetno vrijeme'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'anadirsko vrijeme',
                            'standard': 'anadirsko standardno vrijeme',
                            'daylight': 'anadirsko ljetno vrijeme'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'vrijeme za Aqtau',
                            'standard': 'standardno vrijeme za Aqtau',
                            'daylight': 'ljetno vrijeme za Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'vrijeme za Aqtobe',
                            'standard': 'standardno vrijeme za Aqtobe',
                            'daylight': 'ljetno vrijeme za Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'vrijeme Zelenortskog oto\u010Dja',
                            'standard': 'standardno vrijeme Zelenortskog oto\u010Dja',
                            'daylight': 'ljetno vrijeme Zelenortskog oto\u010Dja'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'vrijeme Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'vrijeme Chathama',
                            'standard': 'standardno vrijeme Chathama',
                            'daylight': 'ljetno vrijeme Chathama'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u010Dileansko vrijeme',
                            'standard': '\u010Dileansko standardno vrijeme',
                            'daylight': '\u010Dileansko ljetno vrijeme'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'kinesko vrijeme',
                            'standard': 'kinesko standardno vrijeme',
                            'daylight': 'kinesko ljetno vrijeme'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'choibalsansko vrijeme',
                            'standard': 'choibalsansko standardno vrijeme',
                            'daylight': 'choibalsansko ljetno vrijeme'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'vrijeme Bo\u017Ei\u0107nog otoka'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'vrijeme Kokosovih Otoka'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'kolumbijsko vrijeme',
                            'standard': 'kolumbijsko standardno vrijeme',
                            'daylight': 'kolumbijsko ljetno vrijeme'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'vrijeme Cookovih Otoka',
                            'standard': 'standardno vrijeme Cookovih Otoka',
                            'daylight': 'Cookovo oto\u010Dje, polusatni pomak, ljetno vrijeme'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'kubansko vrijeme',
                            'standard': 'kubansko standardno vrijeme',
                            'daylight': 'kubansko ljetno vrijeme'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'vrijeme Davisa'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': "vrijeme Dumont-d'Urvillea"
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'isto\u010Dnotimorsko vrijeme'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'vrijeme Uskr\u0161njeg otoka',
                            'standard': 'standardno vrijeme Uskr\u0161njeg otoka',
                            'daylight': 'ljetno vrijeme Uskr\u0161njeg otoka'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'ekvadorsko vrijeme'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'srednjoeuropsko vrijeme',
                            'standard': 'srednjoeuropsko standardno vrijeme',
                            'daylight': 'srednjoeuropsko ljetno vrijeme'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'isto\u010Dnoeuropsko vrijeme',
                            'standard': 'isto\u010Dnoeuropsko standardno vrijeme',
                            'daylight': 'isto\u010Dnoeuropsko ljetno vrijeme'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'zapadnoeuropsko vrijeme',
                            'standard': 'zapadnoeuropsko standardno vrijeme',
                            'daylight': 'zapadnoeuropsko ljetno vrijeme'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'falklandsko vrijeme',
                            'standard': 'falklandsko standardno vrijeme',
                            'daylight': 'falklandsko ljetno vrijeme'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'vrijeme Fid\u017Eija',
                            'standard': 'standardno vrijeme Fid\u017Eija',
                            'daylight': 'ljetno vrijeme Fid\u017Eija'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'vrijeme Francuske Gvajane'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'ju\u017Enofrancusko i antarkti\u010Dko vrijeme'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'vrijeme Galapagosa'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'vrijeme Tokelaua'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'vrijeme Tonge',
                            'standard': 'standardno vrijeme Tonge',
                            'daylight': 'ljetno vrijeme Tonge'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'vrijeme Chuuka'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'turkmenistansko vrijeme',
                            'standard': 'turkmenistansko standardno vrijeme',
                            'daylight': 'turkmenistansko ljetno vrijeme'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'vrijeme Tuvalua'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'urugvajsko vrijeme',
                            'standard': 'urugvajsko standardno vrijeme',
                            'daylight': 'urugvajsko ljetno vrijeme'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'uzbekistansko vrijeme',
                            'standard': 'uzbekistansko standardno vrijeme',
                            'daylight': 'uzbekistansko ljetno vrijeme'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'vrijeme Vanuatua',
                            'standard': 'standardno vrijeme Vanuatua',
                            'daylight': 'ljetno vrijeme Vanuatua'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'ekaterinbur\u0161ko vrijeme',
                            'standard': 'ekaterinbur\u0161ko standardno vrijeme',
                            'daylight': 'ekaterinbur\u0161ko ljetno vrijeme'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'jakutsko vrijeme',
                            'standard': 'jakutsko standardno vrijeme',
                            'daylight': 'jakutsko ljetno vrijeme'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'vrijeme Otoka Wallis i Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'vrijeme Otoka Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'vosto\u010Dko vrijeme'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'volgogradsko vrijeme',
                            'standard': 'volgogradsko standardno vrijeme',
                            'daylight': 'volgogradsko ljetno vrijeme'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'vladivosto\u010Dko vrijeme',
                            'standard': 'vladivosto\u010Dko standardno vrijeme',
                            'daylight': 'vladivosto\u010Dko ljetno vrijeme'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'venezuelsko vrijeme'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'tad\u017Eikistansko vrijeme'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'tajpe\u0161ko vrijeme',
                            'standard': 'tajpe\u0161ko standardno vrijeme',
                            'daylight': 'tajpe\u0161ko ljetno vrijeme'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'vrijeme Tahitija'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'vrijeme Syowe'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'surinamsko vrijeme'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'vrijeme Ju\u017Ene Georgije'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'vrijeme Salamunovih Otoka'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'singapursko vrijeme'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'zaljevsko standardno vrijeme'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'guamsko standardno vrijeme'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'zapadnogrenlandsko vrijeme',
                            'standard': 'zapadnogrenlandsko standardno vrijeme',
                            'daylight': 'zapadnogrenlandsko ljetno vrijeme'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'isto\u010Dnogrenlandsko vrijeme',
                            'standard': 'isto\u010Dnogrenlandsko standardno vrijeme',
                            'daylight': 'isto\u010Dnogrenlandsko ljetno vrijeme'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'univerzalno vrijeme'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'vrijeme Gilbertovih Otoka'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'gruzijsko vrijeme',
                            'standard': 'gruzijsko standardno vrijeme',
                            'daylight': 'gruzijsko ljetno vrijeme'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'vrijeme Gambiera'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre vrijeme',
                            'standard': 'Acre standardno vrijeme',
                            'daylight': 'Acre ljetno vrijeme'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'afganistansko vrijeme'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'srednjoafri\u010Dko vrijeme'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'isto\u010Dnoafri\u010Dko vrijeme'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'ju\u017Enoafri\u010Dko vrijeme'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'zapadnoafri\u010Dko vrijeme',
                            'standard': 'zapadnoafri\u010Dko standardno vrijeme',
                            'daylight': 'zapadnoafri\u010Dko ljetno vrijeme'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'alja\u0161ko vrijeme',
                            'standard': 'alja\u0161ko standardno vrijeme',
                            'daylight': 'alja\u0161ko ljetno vrijeme'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'altmajsko vrijeme',
                            'standard': 'altmajsko standardno vrijeme',
                            'daylight': 'altmajsko ljetno vrijeme'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'arapsko vrijeme',
                            'standard': 'arapsko standardno vrijeme',
                            'daylight': 'arapsko ljetno vrijeme'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'argentinsko vrijeme',
                            'standard': 'argentinsko standardno vrijeme',
                            'daylight': 'argentinsko ljetno vrijeme'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'zapadno-argentinsko vrijeme',
                            'standard': 'zapadno-argentinsko standardno vrijeme',
                            'daylight': 'zapadno-argentinsko ljetno vrijeme'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'armensko vrijeme',
                            'standard': 'armensko standardno vrijeme',
                            'daylight': 'armensko ljetno vrijeme'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'atlantsko vrijeme',
                            'standard': 'atlantsko standardno vrijeme',
                            'daylight': 'atlantsko dnevno vrijeme'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'srednjoaustralsko vrijeme',
                            'standard': 'srednjoaustralsko standardno vrijeme',
                            'daylight': 'srednjoaustralsko ljetno vrijeme'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'australsko sredi\u0161nje zapadno vrijeme',
                            'standard': 'australsko sredi\u0161nje zapadno standardno vrijeme',
                            'daylight': 'australsko sredi\u0161nje zapadno ljetno vrijeme'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'isto\u010Dnoaustralsko vrijeme',
                            'standard': 'isto\u010Dnoaustralsko standardno vrijeme',
                            'daylight': 'isto\u010Dnoaustralsko ljetno vrijeme'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'zapadnoaustralsko vrijeme',
                            'standard': 'zapadnoaustralsko standardno vrijeme',
                            'daylight': 'zapadnoaustralsko ljetno vrijeme'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'azerbajd\u017Eansko vrijeme',
                            'standard': 'azerbajd\u017Eansko standardno vrijeme',
                            'daylight': 'azerbajd\u017Eansko ljetno vrijeme'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'azorsko vrijeme',
                            'standard': 'azorsko standardno vrijeme',
                            'daylight': 'azorsko ljetno vrijeme'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'banglade\u0161ko vrijeme',
                            'standard': 'banglade\u0161ko standardno vrijeme',
                            'daylight': 'banglade\u0161ko ljetno vrijeme'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'butansko vrijeme'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'bolivijsko vrijeme'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'brazilijsko vrijeme',
                            'standard': 'brazilijsko standardno vrijeme',
                            'daylight': 'brazilijsko ljetno vrijeme'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'vrijeme za Brunej Darussalam'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'gvajansko vrijeme'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'havajsko-aleutsko vrijeme',
                            'standard': 'havajsko-aleutsko standardno vrijeme',
                            'daylight': 'havajsko-aleutsko ljetno vrijeme'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'hongkon\u0161ko vrijeme',
                            'standard': 'hongkon\u0161ko standardno vrijeme',
                            'daylight': 'hongkon\u0161ko ljetno vrijeme'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'hovdsko vrijeme',
                            'standard': 'hovdsko standardno vrijeme',
                            'daylight': 'hovdsko ljetno vrijeme'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'indijsko vrijeme'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'vrijeme Indijskog oceana'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'indokinesko vrijeme'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'srednjoindonezijsko vrijeme'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'isto\u010Dnoindonezijsko vrijeme'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'zapadnoindonezijsko vrijeme'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'iransko vrijeme',
                            'standard': 'iransko standardno vrijeme',
                            'daylight': 'iransko ljetno vrijeme'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'irkutsko vrijeme',
                            'standard': 'irkutsko standardno vrijeme',
                            'daylight': 'irkutsko ljetno vrijeme'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'izraelsko vrijeme',
                            'standard': 'izraelsko standardno vrijeme',
                            'daylight': 'izraelsko ljetno vrijeme'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'japansko vrijeme',
                            'standard': 'japansko standardno vrijeme',
                            'daylight': 'japansko ljetno vrijeme'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-kam\u010Datsko vrijeme',
                            'standard': 'Petropavlovsk-kam\u010Datsko standardno vrijeme',
                            'daylight': 'Petropavlovsk-kam\u010Datsko ljetno vrijeme'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'isto\u010Dnokazahstansko vrijeme'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'zapadnokazahstansko vrijeme'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'korejsko vrijeme',
                            'standard': 'korejsko standardno vrijeme',
                            'daylight': 'korejsko ljetno vrijeme'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'vrijeme Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'krasnojarsko vrijeme',
                            'standard': 'krasnojarsko standardno vrijeme',
                            'daylight': 'krasnojarsko ljetno vrijeme'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'kirgistansko vrijeme'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'vrijeme Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'vrijeme Otoka Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'vrijeme otoka Lord Howe',
                            'standard': 'standardno vrijeme otoka Lord Howe',
                            'daylight': 'ljetno vrijeme otoka Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'vrijeme Macao',
                            'standard': 'standardno vrijeme Macao',
                            'daylight': 'ljetno vrijeme Macao'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'vrijeme otoka Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'magadansko vrijeme',
                            'standard': 'magadansko standardno vrijeme',
                            'daylight': 'magadansko ljetno vrijeme'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'malezijsko vrijeme'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'vrijeme Maldiva'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'marki\u017Eansko vrijeme'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'vrijeme Mar\u0161alovih Otoka'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'vrijeme Mauricijusa',
                            'standard': 'standardno vrijeme Mauricijusa',
                            'daylight': 'ljetno vrijeme Mauricijusa'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'mawsonsko vrijeme'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'ulan-batorsko vrijeme',
                            'standard': 'ulan-batorsko standardno vrijeme',
                            'daylight': 'ulan-batorsko ljetno vrijeme'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'moskovsko vrijeme',
                            'standard': 'moskovsko standardno vrijeme',
                            'daylight': 'moskovsko ljetno vrijeme'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'mianmarsko vrijeme'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'vrijeme Naurua'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'nepalsko vrijeme'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'vrijeme Nove Kaledonije',
                            'standard': 'standardno vrijeme Nove Kaledonije',
                            'daylight': 'ljetno vrijeme Nove Kaledonije'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'novozelandsko vrijeme',
                            'standard': 'novozelandsko standardno vrijeme',
                            'daylight': 'novozelandsko ljetno vrijeme'
                        }
                    }
                },
                'hourFormat': '+HH:mm; -HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}',
                'regionFormat-type-daylight': '{0}, ljetno vrijeme',
                'regionFormat-type-standard': '{0}, standardno vrijeme',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'kol',
                                '7': 'srp',
                                '6': 'lip',
                                '5': 'svi',
                                '12': 'pro',
                                '11': 'stu',
                                '10': 'lis',
                                '9': 'ruj',
                                '1': 'sij',
                                '2': 'velj',
                                '3': 'o\u017Eu',
                                '4': 'tra'
                            },
                            'narrow': {
                                '8': '8.',
                                '7': '7.',
                                '6': '6.',
                                '5': '5.',
                                '12': '12.',
                                '11': '11.',
                                '10': '10.',
                                '9': '9.',
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '8': 'kolovoza',
                                '7': 'srpnja',
                                '6': 'lipnja',
                                '5': 'svibnja',
                                '12': 'prosinca',
                                '11': 'studenoga',
                                '10': 'listopada',
                                '9': 'rujna',
                                '1': 'sije\u010Dnja',
                                '2': 'velja\u010De',
                                '3': 'o\u017Eujka',
                                '4': 'travnja'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'kol',
                                '7': 'srp',
                                '6': 'lip',
                                '5': 'svi',
                                '12': 'pro',
                                '11': 'stu',
                                '10': 'lis',
                                '9': 'ruj',
                                '1': 'sij',
                                '2': 'velj',
                                '3': 'o\u017Eu',
                                '4': 'tra'
                            },
                            'narrow': {
                                '8': '8.',
                                '7': '7.',
                                '6': '6.',
                                '5': '5.',
                                '12': '12.',
                                '11': '11.',
                                '10': '10.',
                                '9': '9.',
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '8': 'kolovoz',
                                '7': 'srpanj',
                                '6': 'lipanj',
                                '5': 'svibanj',
                                '12': 'prosinac',
                                '11': 'studeni',
                                '10': 'listopad',
                                '9': 'rujan',
                                '1': 'sije\u010Danj',
                                '2': 'velja\u010Da',
                                '3': 'o\u017Eujak',
                                '4': 'travanj'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ned',
                                'mon': 'pon',
                                'tue': 'uto',
                                'wed': 'sri',
                                'thu': '\u010Det',
                                'fri': 'pet',
                                'sat': 'sub'
                            },
                            'narrow': {
                                'sun': 'N',
                                'mon': 'P',
                                'tue': 'U',
                                'wed': 'S',
                                'thu': '\u010C',
                                'fri': 'P',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'ned',
                                'mon': 'pon',
                                'tue': 'uto',
                                'wed': 'sri',
                                'thu': '\u010Det',
                                'fri': 'pet',
                                'sat': 'sub'
                            },
                            'wide': {
                                'sun': 'nedjelja',
                                'mon': 'ponedjeljak',
                                'tue': 'utorak',
                                'wed': 'srijeda',
                                'thu': '\u010Detvrtak',
                                'fri': 'petak',
                                'sat': 'subota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ned',
                                'mon': 'pon',
                                'tue': 'uto',
                                'wed': 'sri',
                                'thu': '\u010Det',
                                'fri': 'pet',
                                'sat': 'sub'
                            },
                            'narrow': {
                                'sun': 'n',
                                'mon': 'p',
                                'tue': 'u',
                                'wed': 's',
                                'thu': '\u010D',
                                'fri': 'p',
                                'sat': 's'
                            },
                            'short': {
                                'sun': 'ned',
                                'mon': 'pon',
                                'tue': 'uto',
                                'wed': 'sri',
                                'thu': '\u010Det',
                                'fri': 'pet',
                                'sat': 'sub'
                            },
                            'wide': {
                                'sun': 'nedjelja',
                                'mon': 'ponedjeljak',
                                'tue': 'utorak',
                                'wed': 'srijeda',
                                'thu': '\u010Detvrtak',
                                'fri': 'petak',
                                'sat': 'subota'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1kv',
                                '2': '2kv',
                                '3': '3kv',
                                '4': '4kv'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1kv',
                                '2': '2kv',
                                '3': '3kv',
                                '4': '4kv'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'afternoon': 'popodne',
                                'am': 'AM',
                                'earlyMorning': 'ujutro',
                                'evening': 'nave\u010Der',
                                'morning': 'prijepodne',
                                'night': 'no\u0107u',
                                'noon': 'podne',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'afternoon': 'popodne',
                                'am': 'AM',
                                'earlyMorning': 'ujutro',
                                'evening': 'nave\u010Der',
                                'morning': 'prijepodne',
                                'night': 'no\u0107u',
                                'noon': 'n',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'noon': 'podne',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'popodne',
                                'am': 'AM',
                                'earlyMorning': 'ujutro',
                                'evening': 'nave\u010Der',
                                'morning': 'prijepodne',
                                'night': 'no\u0107u',
                                'noon': 'podne',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'afternoon': 'popodne',
                                'am': 'AM',
                                'earlyMorning': 'ujutro',
                                'evening': 'nave\u010Der',
                                'morning': 'prijepodne',
                                'night': 'no\u0107u',
                                'noon': 'n',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'noon': 'podne',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Prije Krista',
                            '0-alt-variant': 'pr. n. e.',
                            '1': 'Poslije Krista',
                            '1-alt-variant': 'n.e.'
                        },
                        'eraAbbr': {
                            '0': 'pr. Kr.',
                            '0-alt-variant': 'pr. n. e.',
                            '1': 'p. Kr.',
                            '1-alt-variant': 'n.e.'
                        },
                        'eraNarrow': {
                            '0': 'pr.n.e.',
                            '0-alt-variant': 'pr. n. e.',
                            '1': 'AD',
                            '1-alt-variant': 'n.e.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y.',
                        'long': 'd. MMMM y.',
                        'medium': 'd. MMM y.',
                        'short': 'd.M.yy.'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'u' {0}",
                        'long': "{1} 'u' {0}",
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMM': 'MM. y.',
                            'yMEd': 'E, d. M. y.',
                            'yMd': 'd. M. y.',
                            'yM': 'M. y.',
                            'y': 'y.',
                            'ms': 'mm:ss',
                            'Ed': 'E, d.',
                            'd': 'd.',
                            'GyMMMd': 'd. MMM y. G',
                            'GyMMMEd': 'E, d. MMM y. G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'hh:mm a',
                            'Hm': 'HH:mm',
                            'yQQQQ': 'QQQQ y.',
                            'yQQQ': 'QQQ y.',
                            'yMMMM': 'LLLL y.',
                            'yMMMEd': 'E, d. MMM y.',
                            'yMMMd': 'd. MMM y.',
                            'yMMM': 'LLL y.',
                            'Hms': 'HH:mm:ss',
                            'hms': 'hh:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y. G',
                            'GyMMM': 'LLL y. G',
                            'M': 'L.',
                            'Md': 'd. M.',
                            'MEd': 'E, d. M.',
                            'MMdd': 'dd. MM.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E, d. MMM',
                            'MMMMd': 'd. MMMM',
                            'MMMMdd': 'dd. MMMM',
                            'MMMMEd': 'E, d. MMMM'
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
                                'd': 'E, dd. - E, dd. MMM',
                                'M': 'E, dd. MMM - E, dd. MMM'
                            },
                            'MMMd': {
                                'd': 'dd. - dd. MMM',
                                'M': 'dd. MMM - dd. MMM'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'MEd': {
                                'd': 'E, dd.MM. - E, dd.MM.',
                                'M': 'E, dd.MM. - E, dd.MM.'
                            },
                            'Md': {
                                'd': 'dd.MM. - dd.MM.',
                                'M': 'dd.MM. - dd.MM.'
                            },
                            'M': {
                                'M': 'MM. - MM.'
                            },
                            'Hv': {
                                'H': "HH - HH 'h' v"
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': "h - h 'h' a v"
                            },
                            'y': {
                                'y': 'y. - y.'
                            },
                            'yM': {
                                'M': 'MM.y. - MM.y.',
                                'y': 'MM.y. - MM.y.'
                            },
                            'yMd': {
                                'd': 'dd.MM.y. - dd.MM.y.',
                                'M': 'dd.MM.y. - dd.MM.y.',
                                'y': 'dd.MM.y. - dd.MM.y.'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y. - E, dd.MM.y.',
                                'M': 'E, dd.MM.y. - E, dd.MM.y.',
                                'y': 'E, dd.MM.y. - E, dd.MM.y.'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y.',
                                'y': 'LLL y. - LLL y.'
                            },
                            'yMMMd': {
                                'd': 'dd. - dd. MMM y.',
                                'M': 'dd. MMM - dd. MMM y.',
                                'y': 'dd. MMM y. - dd. MMM y.'
                            },
                            'yMMMEd': {
                                'd': 'E, dd. - E, dd. MMM y.',
                                'M': 'E, dd. MMM - E, dd. MMM y.',
                                'y': 'E, dd. MMM y. - E, dd. MMM y.'
                            },
                            'yMMMM': {
                                'M': 'LLLL \u2013 LLLL y.',
                                'y': 'LLLL y. - LLLL y.'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': "HH-HH'h'"
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': "h - h'h' a"
                            },
                            'd': {
                                'd': 'dd. - dd.'
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
