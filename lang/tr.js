/* AstroDate
 * Language: tr
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
        AstroDate.lang('tr', {
            'codePatterns': {
                'language': 'Dil: {0}',
                'script': 'Alfabe: {0}',
                'territory': 'Bölge: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Kana\'yı Ayrı Sıralama',
                    'yes': 'Kana\'yı Farklı Sıralama'
                },
                'colCaseLevel': {
                    'no': 'Büyük/Küçük Harfe Duyarlı Olmadan Sıralama',
                    'yes': 'Büyük/Küçük Harfe Duyarla Sıralama'
                },
                'colCaseFirst': {
                    'lower': 'Önce Küçük Harfleri Sıralama',
                    'no': 'Normal Büyük/Küçük Harf Düzeninde Sıralama',
                    'upper': 'Önce Büyük Harfleri Sıralama'
                },
                'colStrength': {
                    'identical': 'Tümünü Sıralama',
                    'primary': 'Yalnızca Taban Harflerini Sıralama',
                    'quaternary': 'Aksanları/Büyük-Küçük Harfleri/Genişliği/Kana\'yı Sıralama',
                    'secondary': 'Aksanları Sıralama',
                    'tertiary': 'Aksanları/Büyük-Küçük Harfleri/Genişliği Sıralama'
                },
                'colNumeric': {
                    'no': 'Rakamları Ayrı Sıralama',
                    'yes': 'Rakamları Sayısal Olarak Sıralama'
                },
                'colNormalization': {
                    'no': 'Normalleştirme Olmadan Sıralama',
                    'yes': 'Unicode Normalleştirilmiş Olarak Sıralama'
                },
                'calendar': {
                    'japanese': 'Japon Takvimi',
                    'iso8601': 'ISO-8601 Takvimi',
                    'coptic': 'Kıpti Takvim',
                    'dangi': 'Dangi Takvimi',
                    'ethiopic': 'Etiyopik Takvim',
                    'ethiopic-amete-alem': 'Etiyopik Amete Alem Takvimi',
                    'gregorian': 'Miladi Takvim',
                    'hebrew': 'Yahudi Takvimi',
                    'persian': 'Farsça Takvim',
                    'roc': 'Çin Cumhuriyeti Takvimi',
                    'chinese': 'Çin Takvimi',
                    'buddhist': 'Budist Takvimi',
                    'indian': 'Ulusal Hint Takvimi',
                    'islamic': 'Hicri Takvim',
                    'islamic-civil': 'Arap Takvimi',
                    'islamic-rgsa': 'Hicri Takvim (Suudi)',
                    'islamic-tbla': 'Hicri Takvim (Astronomik Evreler)',
                    'islamic-umalqura': 'Hicri Takvim (Ümmü-l Kurra Takvimi)'
                },
                'collation': {
                    'phonebook': 'Telefon Defteri Sıralaması',
                    'gb2312han': 'Basitleştirilmiş Çince Sıralaması - GB2312',
                    'eor': 'Avrupa Sıralama Kuralları',
                    'ducet': 'Saptanmış Unicode Sıralaması',
                    'dictionary': 'Sözlük Sıralama Düzeni',
                    'big5han': 'Geleneksel Çince Sıralaması - Big5',
                    'traditional': 'Geleneksel Sıralama',
                    'standard': 'Standart Sıralama',
                    'zhuyin': 'Zhuyin Sıralaması',
                    'unihan': 'Radical-Stroke Sıralama Düzeni',
                    'stroke': 'Geleneksel Çince Vuruş Sıralaması',
                    'searchjl': 'Hangul İlk Sessiz Harfe Göre Arama',
                    'search': 'Genel Amaçlı Arama',
                    'reformed': 'Yeni Sıralama Düzeni',
                    'pinyin': 'Basitleştirilmiş Çince Pinyin Sıralaması',
                    'phonetic': 'Fonetik Sıralama Düzeni'
                },
                'numbers': {
                    'knda': 'Kannada Rakamları',
                    'khmr': 'Kmer Rakamları',
                    'kali': 'Kayah Li Rakamları',
                    'jpanfin': 'Finansal Japon Rakamları',
                    'jpan': 'Japon Rakamları',
                    'java': 'Cava Rakamları',
                    'hebr': 'İbrani Rakamları',
                    'hantfin': 'Finansal Geleneksel Çin Rakamları',
                    'hant': 'Geleneksel Çin Rakamları',
                    'hansfin': 'Finansal Basitleştirilmiş Çin Rakamları',
                    'hans': 'Basitleştirilmiş Çin Rakamları',
                    'hanidec': 'Çin Rakamları',
                    'guru': 'Gurmukhi Rakamları',
                    'gujr': 'Gucerat Rakamları',
                    'greklow': 'Küçük Harf Yunan Rakamları',
                    'grek': 'Yunan Rakamları',
                    'bali': 'Bali Rakamları',
                    'armnlow': 'Küçük Harf Ermeni Rakamları',
                    'armn': 'Ermeni Rakamları',
                    'arabext': 'Genişletilmiş Hint-Arap Rakamları',
                    'arab': 'Hint-Arap Rakamları',
                    'finance': 'Finansal Sayılar',
                    'traditional': 'Geleneksel Rakamlar',
                    'native': 'Yerel Rakamlar',
                    'beng': 'Bengal Rakamları',
                    'brah': 'Brahmi Rakamları',
                    'cakm': 'Chakma Rakamları',
                    'cham': 'Cham Rakamları',
                    'deva': 'Devanagari Rakamları',
                    'orya': 'Oriya Rakamları',
                    'osma': 'osma',
                    'roman': 'Roma Rakamları',
                    'romanlow': 'Küçük Harf Roma Rakamları',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vai Rakamları',
                    'tibt': 'Tibet Rakamları',
                    'thai': 'Tay Rakamları',
                    'telu': 'Telugu Rakamları',
                    'tamldec': 'Tamil Rakamları',
                    'taml': 'Geleneksel Tamil Rakamları',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'Ol Chiki Rakamları',
                    'nkoo': 'N\'Ko Rakamları',
                    'mymrshan': 'Myanmar Shan Rakamları',
                    'mymr': 'Myanmar Rakamları',
                    'mtei': 'Meetei Mayek Rakamları',
                    'mong': 'Moğolca Rakamlar',
                    'mlym': 'Malayalam Rakamları',
                    'limb': 'Limbu Rakamları',
                    'lepc': 'Lepça Rakamları',
                    'latn': 'Batı Rakamları',
                    'laoo': 'Lao Rakamları',
                    'lanatham': 'Tai Tham Tham Rakamları',
                    'lana': 'Tai Tham Hora Rakamları',
                    'geor': 'Gürcü Rakamları',
                    'fullwide': 'Tam Genişlikte Rakamlar',
                    'ethi': 'Ge\'ez Rakamları'
                },
                'colAlternate': {
                    'non-ignorable': 'Sembolleri Sıralama',
                    'shifted': 'Sembolleri Yoksayarak Sıralama'
                },
                'colBackwards': {
                    'no': 'Aksanları Normal Olarak Sıralama',
                    'yes': 'Aksanları Ters Sıralama'
                }
            },
            'keys': {
                'colNormalization': 'Normalleştirilmiş Sıralama',
                'collation': 'Sıralama Düzeni',
                'colHiraganaQuaternary': 'Kana Sıralaması',
                'colCaseLevel': 'Büyük/Küçük Harfe Duyarlı Sıralama',
                'colCaseFirst': 'Büyük/Küçük Harf Sıralama',
                'colBackwards': 'Ters Aksan Sıralama',
                'colAlternate': 'Sembolleri Sıralamayı Yoksayma',
                'calendar': 'Takvim',
                'x': 'Özel Kullanım',
                'variableTop': 'Sembollere Göre Sıralama',
                'va': 'Yerel Varyant',
                'timezone': 'Saat Dilimi',
                'numbers': 'Rakamlar',
                'currency': 'Para Birimi',
                'colStrength': 'Sıralama Gücü',
                'colNumeric': 'Sayısal Sıralama'
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
                            'exemplarCity': 'Easter'
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
                            'exemplarCity': 'Markiz Adaları'
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
                            'exemplarCity': 'Sidney'
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
                            'exemplarCity': 'Maldivler'
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
                            'exemplarCity': 'Christmas'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komor'
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
                            'exemplarCity': 'Bilinmeyen Şehir'
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
                            'exemplarCity': 'Güney Kutbu'
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
                            'exemplarCity': 'Cayman'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Cayenne'
                        },
                        'Catamarca': {
                            'exemplarCity': 'Catamarca'
                        },
                        'Caracas': {
                            'exemplarCity': 'Karakas'
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
                            'exemplarCity': 'Indianapolis'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Inuvik'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Iqaluit'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Jamaika'
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
                            'exemplarCity': 'Kosta Rika'
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
                            'exemplarCity': 'Lower Prince\'s Quarter'
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
                            'exemplarCity': 'Martinique'
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
                            'exemplarCity': 'Meksiko City'
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
                                'exemplarCity': 'Beulah, Kuzey Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Kuzey Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Merkez, Kuzey Dakota'
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
                            'exemplarCity': 'Porto Riko'
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
                            'exemplarCity': 'Saint Barthélemy'
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
                            'exemplarCity': 'Güney Georgia'
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
                            'exemplarCity': 'Azor Adaları'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanarya Adaları'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cape Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faroe'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madeira Adaları'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'Moskova'
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
                            'exemplarCity': 'Lüksemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'İngiltere Yaz Saati'
                            },
                            'exemplarCity': 'Londra'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lizbon'
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
                            'exemplarCity': 'İstanbul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Man Adası'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bükreş'
                        },
                        'Brussels': {
                            'exemplarCity': 'Brüksel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Atina'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amsterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Akmescit'
                        },
                        'Skopje': {
                            'exemplarCity': 'Üsküp'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sofya'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stokholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tiran'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ujgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zürih'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporojye'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varşova'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viyana'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikan'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Saraybosna'
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
                            'exemplarCity': 'Prag'
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
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Cebelitarık'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'İrlanda Yaz Saati'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Kopenhag'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Kişinev'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapeşte'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Librevil'
                        },
                        'Lagos': {
                            'exemplarCity': 'Lagos'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Kinşasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Hartum'
                        },
                        'Kampala': {
                            'exemplarCity': 'Kampala'
                        },
                        'Juba': {
                            'exemplarCity': 'Cuba'
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
                            'exemplarCity': 'Layun'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Cibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Darüsselam'
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
                            'exemplarCity': 'Mogadişu'
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
                            'exemplarCity': 'Tunus'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Trablus'
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
                            'exemplarCity': 'Konakri'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Septe'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Kazablanka'
                        },
                        'Cairo': {
                            'exemplarCity': 'Kahire'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Bujumbura'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Brazzavil'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Blantyre'
                        },
                        'Bissau': {
                            'exemplarCity': 'Bissau'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Abican'
                        },
                        'Accra': {
                            'exemplarCity': 'Akra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addis Ababa'
                        },
                        'Algiers': {
                            'exemplarCity': 'Cezayir'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Şanghay'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Semerkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh Kenti'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kızılorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
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
                            'exemplarCity': 'Bağdat'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Çongçing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Kolombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Şam'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dakka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duşanbe'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gazze'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'El Halil'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hong Kong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'İrkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Cakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Batur'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumçi'
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
                            'exemplarCity': 'Yekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erivan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokyo'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Tahran'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tiflis'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taşkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Kudüs'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Aşkabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktöbe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktav'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadır'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almatı'
                        },
                        'Aden': {
                            'exemplarCity': 'Aden'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahreyn'
                        },
                        'Baku': {
                            'exemplarCity': 'Bakü'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beyrut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bişkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalküta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Çoybalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabil'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamçatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karaçi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kaşgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handiga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoyarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuçing'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuveyt'
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
                            'exemplarCity': 'Maskat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Lefkoşa'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa Saati',
                            'standard': 'Samoa Standart Saati',
                            'daylight': 'Samoa Yaz Saati'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samara Saati',
                            'standard': 'Samara Standart Saati',
                            'daylight': 'Samara Yaz Saati'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sahalin Saati',
                            'standard': 'Sahalin Standart Saati',
                            'daylight': 'Sahalin Yaz Saati'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera Saati'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunion Saati'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Kızılorda Saati',
                            'standard': 'Kızılorda Standart Saati',
                            'daylight': 'Kızılorda Yaz Saati'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponape Saati'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairn Saati'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre ve Miquelon Saati',
                            'standard': 'Saint Pierre ve Miquelon Standart Saati',
                            'daylight': 'Saint Pierre ve Miquelon Yaz Saati'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenix Adaları Saati'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipinler Saati',
                            'standard': 'Filipinler Standart Saati',
                            'daylight': 'Filipinler Yaz Saati'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peru Saati',
                            'standard': 'Peru Standart Saati',
                            'daylight': 'Peru Yaz Saati'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguay Saati',
                            'standard': 'Paraguay Standart Saati',
                            'daylight': 'Paraguay Yaz Saati'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua Yeni Gine Saati'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau Saati'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistan Saati',
                            'standard': 'Pakistan Standart Saati',
                            'daylight': 'Pakistan Yaz Saati'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk Saati',
                            'standard': 'Omsk Standart Saati',
                            'daylight': 'Omsk Yaz Saati'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsk Saati',
                            'standard': 'Novosibirsk Standart Saati',
                            'daylight': 'Novosibirsk Yaz Saati'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Kuzey Mariana Adaları Saati'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha Saati',
                            'standard': 'Fernando de Noronha Standart Saati',
                            'daylight': 'Fernando de Noronha Yaz Saati'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk Adaları Saati'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue Saati'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundland Saati',
                            'standard': 'Newfoundland Standart Saati',
                            'daylight': 'Newfoundland Yaz Saati'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Yeni Zelanda Saati',
                            'standard': 'Yeni Zelanda Standart Saati',
                            'daylight': 'Yeni Zelanda Yaz Saati'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Yeni Kaledonya Saati',
                            'standard': 'Yeni Kaledonya Standart Saati',
                            'daylight': 'Yeni Kaledonya Yaz Saati'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Kuzey Amerika Merkezi Saati',
                            'standard': 'Kuzey Amerika Merkezi Standart Saati',
                            'daylight': 'Kuzey Amerika Merkezi Yaz Saati'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Kuzey Amerika Doğu Saati',
                            'standard': 'Kuzey Amerika Doğu Standart Saati',
                            'daylight': 'Kuzey Amerika Doğu Yaz Saati'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Kuzey Amerika Dağ Saati',
                            'standard': 'Kuzey Amerika Dağ Standart Saati',
                            'daylight': 'Kuzey Amerika Dağ Yaz Saati'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Kuzey Amerika Pasifik Saati',
                            'standard': 'Kuzey Amerika Pasifik Standart Saati',
                            'daylight': 'Kuzey Amerika Pasifik Yaz Saati'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyr Saati',
                            'standard': 'Anadır Standart Saati',
                            'daylight': 'Anadır Yaz Saati'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aktav Saati',
                            'standard': 'Aktav Standart Saati',
                            'daylight': 'Aktav Yaz Saati'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aktöbe Saati',
                            'standard': 'Aktöbe Standart Saati',
                            'daylight': 'Aktöbe Yaz Saati'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Cape Verde Saati',
                            'standard': 'Cape Verde Standart Saati',
                            'daylight': 'Cape Verde Yaz Saati'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Casey Saati'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorro Saati'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham Saati',
                            'standard': 'Chatham Standart Saati',
                            'daylight': 'Chatham Yaz Saati'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Şili Saati',
                            'standard': 'Şili Standart Saati',
                            'daylight': 'Şili Yaz Saati'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Çin Saati',
                            'standard': 'Çin Standart Saati',
                            'daylight': 'Çin Yaz Saati'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Çoybalsan Saati',
                            'standard': 'Çoybalsan Standart Saati',
                            'daylight': 'Çoybalsan Yaz Saati'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Christmas Adası Saati'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Cocos Adaları Saati'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolombiya Saati',
                            'standard': 'Kolombiya Standart Saati',
                            'daylight': 'Kolombiya Yaz Saati'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cook Adaları Saati',
                            'standard': 'Cook Adaları Standart Saati',
                            'daylight': 'Cook Adaları Yarı Yaz Saati'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Küba Saati',
                            'standard': 'Küba Standart Saati',
                            'daylight': 'Küba Yaz Saati'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis Saati'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\u2019Urville Saati'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Doğu Timor Saati'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Paskalya Adası Saati',
                            'standard': 'Paskalya Adası Standart Saati',
                            'daylight': 'Paskalya Adası Yaz Saati'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekvador Saati'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Orta Avrupa Saati',
                            'standard': 'Orta Avrupa Standart Saati',
                            'daylight': 'Orta Avrupa Yaz Saati'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Doğu Avrupa Saati',
                            'standard': 'Doğu Avrupa Standart Saati',
                            'daylight': 'Doğu Avrupa Yaz Saati'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Batı Avrupa Saati',
                            'standard': 'Batı Avrupa Standart Saati',
                            'daylight': 'Batı Avrupa Yaz Saati'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falkland Adaları Saati',
                            'standard': 'Falkland Adaları Standart Saati',
                            'daylight': 'Falkland Adaları Yaz Saati'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fiji Saati',
                            'standard': 'Fiji Standart Saati',
                            'daylight': 'Fiji Yaz Saati'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Fransız Guyanası Saati'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Fransız Güney ve Antarktika Saati'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos Saati'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau Saati'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tonga Saati',
                            'standard': 'Tonga Standart Saati',
                            'daylight': 'Tonga Yaz Saati'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuk Saati'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Türkmenistan Saati',
                            'standard': 'Türkmenistan Standart Saati',
                            'daylight': 'Türkmenistan Yaz Saati'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu Saati'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguay Saati',
                            'standard': 'Uruguay Standart Saati',
                            'daylight': 'Uruguay Yaz Saati'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Özbekistan Saati',
                            'standard': 'Özbekistan Standart Saati',
                            'daylight': 'Özbekistan Yaz Saati'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu Saati',
                            'standard': 'Vanuatu Standart Saati',
                            'daylight': 'Vanuatu Yaz Saati'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Yekaterinburg Saati',
                            'standard': 'Yekaterinburg Standart Saati',
                            'daylight': 'Yekaterinburg Yaz Saati'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Yakutsk Saati',
                            'standard': 'Yakutsk Standart Saati',
                            'daylight': 'Yakutsk Yaz Saati'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis ve Futuna Saati'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake Adası Saati'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostok Saati'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgograd Saati',
                            'standard': 'Volgograd Standart Saati',
                            'daylight': 'Volgograd Yaz Saati'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostok Saati',
                            'standard': 'Vladivostok Standart Saati',
                            'daylight': 'Vladivostok Yaz Saati'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuela Saati'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tacikistan Saati'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei Saati',
                            'standard': 'Taipei Standart Saati',
                            'daylight': 'Taipei Yaz Saati'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti Saati'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Showa Saati'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinam Saati'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Güney Georgia Saati'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Solomon Adaları Saati'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapur Saati'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seyşeller Saati'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guam Standart Saati'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Batı Grönland Saati',
                            'standard': 'Batı Grönland Standart Saati',
                            'daylight': 'Batı Grönland Yaz Saati'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Doğu Grönland Saati',
                            'standard': 'Doğu Grönland Standart Saati',
                            'daylight': 'Doğu Grönland Yaz Saati'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwich Ortalama Saati'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbert Adaları Saati'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gürcistan Saati',
                            'standard': 'Gürcistan Standart Saati',
                            'daylight': 'Gürcistan Yaz Saati'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier Saati'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazon Saati',
                            'standard': 'Amazon Standart Saati',
                            'daylight': 'Amazon Yaz Saati'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre Saati',
                            'standard': 'Acre Standart Saati',
                            'daylight': 'Acre Yaz Saati'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistan Saati'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Orta Afrika Saati'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Doğu Afrika Saati'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Güney Afrika Saati'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Batı Afrika Saati',
                            'standard': 'Batı Afrika Standart Saati',
                            'daylight': 'Batı Afrika Yaz Saati'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaska Saati',
                            'standard': 'Alaska Standart Saati',
                            'daylight': 'Alaska Yaz Saati'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatı Saati',
                            'standard': 'Almatı Standart Saati',
                            'daylight': 'Almatı Yaz Saati'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabistan Saati',
                            'standard': 'Arabistan Standart Saati',
                            'daylight': 'Arabistan Yaz Saati'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Arjantin Saati',
                            'standard': 'Arjantin Standart Saati',
                            'daylight': 'Arjantin Yaz Saati'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Batı Arjantin Saati',
                            'standard': 'Batı Arjantin Standart Saati',
                            'daylight': 'Batı Arjantin Yaz Saati'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Ermenistan Saati',
                            'standard': 'Ermenistan Standart Saati',
                            'daylight': 'Ermenistan Yaz Saati'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantik Saati',
                            'standard': 'Atlantik Standart Saati',
                            'daylight': 'Atlantik Yaz Saati'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Orta Avustralya Saati',
                            'standard': 'Orta Avustralya Standart Saati',
                            'daylight': 'Orta Avustralya Yaz Saati'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'İçbatı Avustralya Saati',
                            'standard': 'İçbatı Avustralya Standart Saati',
                            'daylight': 'İçbatı Avustralya Yaz Saati'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Doğu Avustralya Saati',
                            'standard': 'Doğu Avustralya Standart Saati',
                            'daylight': 'Doğu Avustralya Yaz Saati'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Batı Avustralya Saati',
                            'standard': 'Batı Avustralya Standart Saati',
                            'daylight': 'Batı Avustralya Yaz Saati'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbaycan Saati',
                            'standard': 'Azerbaycan Standart Saati',
                            'daylight': 'Azerbaycan Yaz Saati'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorlar Saati',
                            'standard': 'Azorlar Standart Saati',
                            'daylight': 'Azorlar Yaz Saati'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladeş Saati',
                            'standard': 'Bangladeş Standart Saati',
                            'daylight': 'Bangladeş Yaz Saati'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutan Saati'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivya Saati'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilia Saati',
                            'standard': 'Brasilia Standart Saati',
                            'daylight': 'Brasilia Yaz Saati'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darü\'s-Selam Saati'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Körfez Saati'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyana Saati'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-Aleut Saati',
                            'standard': 'Hawaii-Aleut Standart Saati',
                            'daylight': 'Hawaii-Aleut Yaz Saati'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hong Kong Saati',
                            'standard': 'Hong Kong Standart Saati',
                            'daylight': 'Hong Kong Yaz Saati'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovd Saati',
                            'standard': 'Hovd Standart Saati',
                            'daylight': 'Hovd Yaz Saati'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hindistan Saati'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hint Okyanusu Saati'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Hindiçin Saati'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Orta Endonezya Saati'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Doğu Endonezya Saati'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Batı Endonezya Saati'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'İran Saati',
                            'standard': 'İran Standart Saati',
                            'daylight': 'İran Yaz Saati'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'İrkutsk Saati',
                            'standard': 'İrkutsk Standart Saati',
                            'daylight': 'İrkutsk Yaz Saati'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'İsrail Saati',
                            'standard': 'İsrail Standart Saati',
                            'daylight': 'İsrail Yaz Saati'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonya Saati',
                            'standard': 'Japonya Standart Saati',
                            'daylight': 'Japonya Yaz Saati'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamçatski Saati',
                            'standard': 'Petropavlovsk-Kamçatski Standart Saati',
                            'daylight': 'Petropavlovsk-Kamçatski Yaz Saati'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Doğu Kazakistan Saati'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Batı Kazakistan Saati'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Kore Saati',
                            'standard': 'Kore Standart Saati',
                            'daylight': 'Kore Yaz Saati'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae Saati'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnoyarsk Saati',
                            'standard': 'Krasnoyarsk Standart Saati',
                            'daylight': 'Krasnoyarsk Yaz Saati'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kırgızistan Saati'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Lanka Saati'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Line Adaları Saati'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe Saati',
                            'standard': 'Lord Howe Standart Saati',
                            'daylight': 'Lord Howe Yaz Saati'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Makao Saati',
                            'standard': 'Makao Standart Saati',
                            'daylight': 'Makao Yaz Saati'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie Adası Saati'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan Saati',
                            'standard': 'Magadan Standart Saati',
                            'daylight': 'Magadan Yaz Saati'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malezya Saati'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivler Saati'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Markiz Adaları Saati'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshall Adaları Saati'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius Saati',
                            'standard': 'Mauritius Standart Saati',
                            'daylight': 'Mauritius Yaz Saati'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson Saati'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulan Batur Saati',
                            'standard': 'Ulan Batur Standart Saati',
                            'daylight': 'Ulan Batur Yaz Saati'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskova Saati',
                            'standard': 'Moskova Standart Saati',
                            'daylight': 'Moskova Yaz Saati'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmar Saati'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru Saati'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepal Saati'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} Saati',
                'regionFormat-type-daylight': '{0} Yaz Saati',
                'regionFormat-type-standard': '{0} Standart Saati',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'Ağu',
                                '7': 'Tem',
                                '6': 'Haz',
                                '5': 'May',
                                '12': 'Ara',
                                '11': 'Kas',
                                '10': 'Eki',
                                '9': 'Eyl',
                                '1': 'Oca',
                                '2': 'Şub',
                                '3': 'Mar',
                                '4': 'Nis'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'T',
                                '6': 'H',
                                '5': 'M',
                                '12': 'A',
                                '11': 'K',
                                '10': 'E',
                                '9': 'E',
                                '1': 'O',
                                '2': 'Ş',
                                '3': 'M',
                                '4': 'N'
                            },
                            'wide': {
                                '8': 'Ağustos',
                                '7': 'Temmuz',
                                '6': 'Haziran',
                                '5': 'Mayıs',
                                '12': 'Aralık',
                                '11': 'Kasım',
                                '10': 'Ekim',
                                '9': 'Eylül',
                                '1': 'Ocak',
                                '2': 'Şubat',
                                '3': 'Mart',
                                '4': 'Nisan'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Ağu',
                                '7': 'Tem',
                                '6': 'Haz',
                                '5': 'May',
                                '12': 'Ara',
                                '11': 'Kas',
                                '10': 'Eki',
                                '9': 'Eyl',
                                '1': 'Oca',
                                '2': 'Şub',
                                '3': 'Mar',
                                '4': 'Nis'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'T',
                                '6': 'H',
                                '5': 'M',
                                '12': 'A',
                                '11': 'K',
                                '10': 'E',
                                '9': 'E',
                                '1': 'O',
                                '2': 'Ş',
                                '3': 'M',
                                '4': 'N'
                            },
                            'wide': {
                                '8': 'Ağustos',
                                '7': 'Temmuz',
                                '6': 'Haziran',
                                '5': 'Mayıs',
                                '12': 'Aralık',
                                '11': 'Kasım',
                                '10': 'Ekim',
                                '9': 'Eylül',
                                '1': 'Ocak',
                                '2': 'Şubat',
                                '3': 'Mart',
                                '4': 'Nisan'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'Paz',
                                'mon': 'Pzt',
                                'tue': 'Sal',
                                'wed': 'Çar',
                                'thu': 'Per',
                                'fri': 'Cum',
                                'sat': 'Cmt'
                            },
                            'narrow': {
                                'sun': 'P',
                                'mon': 'P',
                                'tue': 'S',
                                'wed': 'Ç',
                                'thu': 'P',
                                'fri': 'C',
                                'sat': 'C'
                            },
                            'short': {
                                'sun': 'Pa',
                                'mon': 'Pt',
                                'tue': 'Sa',
                                'wed': 'Ça',
                                'thu': 'Pe',
                                'fri': 'Cu',
                                'sat': 'Ct'
                            },
                            'wide': {
                                'sun': 'Pazar',
                                'mon': 'Pazartesi',
                                'tue': 'Salı',
                                'wed': 'Çarşamba',
                                'thu': 'Perşembe',
                                'fri': 'Cuma',
                                'sat': 'Cumartesi'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Paz',
                                'mon': 'Pzt',
                                'tue': 'Sal',
                                'wed': 'Çar',
                                'thu': 'Per',
                                'fri': 'Cum',
                                'sat': 'Cmt'
                            },
                            'narrow': {
                                'sun': 'P',
                                'mon': 'P',
                                'tue': 'S',
                                'wed': 'Ç',
                                'thu': 'P',
                                'fri': 'C',
                                'sat': 'C'
                            },
                            'short': {
                                'sun': 'Pa',
                                'mon': 'Pt',
                                'tue': 'Sa',
                                'wed': 'Ça',
                                'thu': 'Pe',
                                'fri': 'Cu',
                                'sat': 'Ct'
                            },
                            'wide': {
                                'sun': 'Pazar',
                                'mon': 'Pazartesi',
                                'tue': 'Salı',
                                'wed': 'Çarşamba',
                                'thu': 'Perşembe',
                                'fri': 'Cuma',
                                'sat': 'Cumartesi'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'Ç1',
                                '2': 'Ç2',
                                '3': 'Ç3',
                                '4': 'Ç4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '1. çeyrek',
                                '2': '2. çeyrek',
                                '3': '3. çeyrek',
                                '4': '4. çeyrek'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Ç1',
                                '2': 'Ç2',
                                '3': 'Ç3',
                                '4': 'Ç4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '1. çeyrek',
                                '2': '2. çeyrek',
                                '3': '3. çeyrek',
                                '4': '4. çeyrek'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'ÖÖ',
                                'pm': 'ÖS'
                            },
                            'narrow': {
                                'am': 'ÖÖ',
                                'pm': 'ÖS'
                            },
                            'wide': {
                                'am': 'ÖÖ',
                                'pm': 'ÖS'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'ÖÖ',
                                'pm': 'ÖS'
                            },
                            'narrow': {
                                'am': 'ÖÖ',
                                'pm': 'ÖS'
                            },
                            'wide': {
                                'am': 'ÖÖ',
                                'pm': 'ÖS'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Milattan Önce',
                            '0-alt-variant': 'İÖ',
                            '1': 'Milattan Sonra',
                            '1-alt-variant': 'İS'
                        },
                        'eraAbbr': {
                            '0': 'MÖ',
                            '0-alt-variant': 'İÖ',
                            '1': 'MS',
                            '1-alt-variant': 'İS'
                        },
                        'eraNarrow': {
                            '0': 'MÖ',
                            '0-alt-variant': 'İÖ',
                            '1': 'MS',
                            '1-alt-variant': 'İS'
                        }
                    },
                    'dateFormats': {
                        'full': 'd MMMM y EEEE',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'd.MM.y'
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
                            'yMMM': 'MMM y',
                            'yMM': 'MM.y',
                            'yMEd': 'dd.MM.y E',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM/y',
                            'Ehm': 'E a h:mm',
                            'Ed': 'd E',
                            'd': 'd',
                            'GyMMMd': 'G dd MMM y',
                            'GyMMMEd': 'G d MMM y E',
                            'h': 'a h',
                            'H': 'HH',
                            'hm': 'a h:mm',
                            'yQQQQ': 'y/QQQQ',
                            'yQQQ': 'y/QQQ',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'd MMM y E',
                            'yMMMd': 'dd MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'a h:mm:ss',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E a h:mm:ss',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'G y',
                            'GyMMM': 'G MMM y',
                            'M': 'L',
                            'Md': 'dd/MM',
                            'MEd': 'dd/MM E',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'd MMMM E',
                            'MMMMd': 'dd MMMM',
                            'MMMMEd': 'dd MMMM E',
                            'mmss': 'mm:ss',
                            'ms': 'mm:ss',
                            'y': 'y'
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
                                'd': 'd MMM E \u2013 d MMM E',
                                'M': 'd MMM E \u2013 d MMM E'
                            },
                            'MMMd': {
                                'd': 'd \u2013 d MMM',
                                'M': 'd MMM \u2013 d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'dd/MM E \u2013 dd/MM E',
                                'M': 'dd/MM E \u2013 dd/MM E'
                            },
                            'Md': {
                                'd': 'dd/MM \u2013 dd/MM',
                                'M': 'dd/MM \u2013 dd/MM'
                            },
                            'M': {
                                'M': 'MM\u2013MM'
                            },
                            'Hv': {
                                'H': 'HH\u2013HH v'
                            },
                            'hv': {
                                'a': 'a h \u2013 a h v',
                                'h': 'a h\u2013h v'
                            },
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'MM/y \u2013 MM/y',
                                'y': 'MM/y \u2013 MM/y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y \u2013 dd.MM.y',
                                'M': 'dd.MM.y \u2013 dd.MM.y',
                                'y': 'dd.MM.y \u2013 dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'dd.MM.y E \u2013 dd.MM.y E',
                                'M': 'dd.MM.y E \u2013 dd.MM.y E',
                                'y': 'dd.MM.y E \u2013 dd.MM.y E'
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
                                'd': 'd MMM y E \u2013 d MMM y E',
                                'M': 'd MMM y E \u2013 d MMM y E',
                                'y': 'd MMM y E \u2013 d MMM y E'
                            },
                            'yMMMM': {
                                'M': 'MMMM \u2013 MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm\u2013HH:mm v',
                                'm': 'HH:mm\u2013HH:mm v'
                            },
                            'hmv': {
                                'a': 'a h:mm \u2013 a h:mm v',
                                'h': 'a h:mm\u2013h:mm v',
                                'm': 'a h:mm\u2013h:mm v'
                            },
                            'Hm': {
                                'H': 'HH:mm\u2013HH:mm',
                                'm': 'HH:mm\u2013HH:mm'
                            },
                            'hm': {
                                'a': 'a h:mm \u2013 a h:mm',
                                'h': 'a h:mm\u2013h:mm',
                                'm': 'a h:mm\u2013h:mm'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'a h \u2013 a h',
                                'h': 'a h\u2013h'
                            },
                            'd': {
                                'd': 'd\u2013d'
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
