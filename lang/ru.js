/* AstroDate
 * Language: ru
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
        AstroDate.lang('ru', {
            'codePatterns': {
                'language': 'Язык: {0}',
                'script': 'Написание: {0}',
                'territory': 'Регион: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Отдельная сортировка каны',
                    'yes': 'Сортировка каны другим способом'
                },
                'colCaseLevel': {
                    'no': 'Сортировка вне зависимости от регистра',
                    'yes': 'Сортировка с учетом регистра'
                },
                'colCaseFirst': {
                    'lower': 'Приоритетная сортировка слов в нижнем регистре',
                    'no': 'Сортировка по стандартным правилам',
                    'upper': 'Приоритетная сортировка слов в верхнем регистре'
                },
                'colStrength': {
                    'identical': 'Полная сортировка',
                    'primary': 'Сортировка только по символам, обозначающим разрядность',
                    'quaternary': 'Сортировка по акцентам/регистрам/длине строки/кане',
                    'secondary': 'Сортировка по акцентам',
                    'tertiary': 'Сортировка по акцентам/регистру/длине строки'
                },
                'colNumeric': {
                    'no': 'Отдельная сортировка числовых значений',
                    'yes': 'Сортировка численных значений'
                },
                'colNormalization': {
                    'no': 'Сортировка без нормализации',
                    'yes': 'Сортировка нормализованных символов Unicode'
                },
                'calendar': {
                    'japanese': 'Японский календарь',
                    'iso8601': 'календарь ISO-8601',
                    'coptic': 'Коптский календарь',
                    'dangi': 'календарь данги',
                    'ethiopic': 'Эфиопский календарь',
                    'ethiopic-amete-alem': 'Эфиопский календарь "Амете Алем"',
                    'gregorian': 'Григорианский календарь',
                    'hebrew': 'Еврейский календарь',
                    'persian': 'Персидский календарь',
                    'roc': 'Китайский календарь',
                    'chinese': 'Китайский календарь',
                    'buddhist': 'Буддийский календарь',
                    'indian': 'Национальный календарь Индии',
                    'islamic': 'Исламский календарь',
                    'islamic-civil': 'Исламский гражданский календарь',
                    'islamic-rgsa': 'исламский календарь (Саудовская Аравия)',
                    'islamic-tbla': 'исламский календарь (табличный, астрономическая эпоха)',
                    'islamic-umalqura': 'исламский календарь (Умм аль-Кура)'
                },
                'collation': {
                    'phonebook': 'порядок телефонной книги',
                    'gb2312han': 'упрощенный китайский - GB2312',
                    'eor': 'европейские правила сортировки',
                    'ducet': 'cтандартная сортировка Unicode',
                    'dictionary': 'словарный порядок сортировки',
                    'big5han': 'Сортировка традиционного китайского языка \u2013 Big5',
                    'traditional': 'традиционный порядок',
                    'standard': 'стандартное сопоставление',
                    'zhuyin': 'чжуинь',
                    'unihan': 'сортировка по ключам, затем по чертам',
                    'stroke': 'по чертам',
                    'searchjl': 'Поиск по первой согласной хангыль',
                    'search': 'поиск',
                    'reformed': 'реформированный порядок сортировки',
                    'pinyin': 'пиньинь',
                    'phonetic': 'Фонетический порядок сортировки'
                },
                'numbers': {
                    'knda': 'Цифры каннада',
                    'khmr': 'Кхмерские цифры',
                    'kali': 'цифры кайя ли',
                    'jpanfin': 'Японские цифры (финансы)',
                    'jpan': 'Японские цифры',
                    'java': 'яванские цифры',
                    'hebr': 'Цифры на иврите',
                    'hantfin': 'Традиционные китайские цифры (финансы)',
                    'hant': 'Традиционные китайские цифры',
                    'hansfin': 'Упрощенные китайские цифры (финансы)',
                    'hans': 'Упрощенные китайские цифры',
                    'hanidec': 'Китайские десятичные цифры',
                    'guru': 'Цифры гурмукхи',
                    'gujr': 'Цифры гуджарати',
                    'greklow': 'Греческие цифры в нижнем регистре',
                    'grek': 'Греческие цифры',
                    'bali': 'балийские цифры',
                    'armnlow': 'Армянские цифры в нижнем регистре',
                    'armn': 'Армянские цифры',
                    'arabext': 'Расширенная система арабско-индийских цифр',
                    'arab': 'Арабско-индийские цифры',
                    'finance': 'Символы обозначения финансовых показателей',
                    'traditional': 'Традиционная система нумерации',
                    'native': 'Обозначения цифр коренного населения',
                    'beng': 'Бенгальские цифры',
                    'brah': 'цифры брахми',
                    'cakm': 'цифры чакма',
                    'cham': 'чамские цифры',
                    'deva': 'Цифры деванагари',
                    'orya': 'Цифры ория',
                    'osma': 'цифры османья',
                    'roman': 'Римские цифры',
                    'romanlow': 'Римские цифры в нижнем регистре',
                    'saur': 'цифры саураштра',
                    'shrd': 'цифры шарада',
                    'sora': 'цифры сора-сомпенг',
                    'sund': 'суданские цифры',
                    'vaii': 'Цифры языка вай',
                    'tibt': 'Тибетские цифры',
                    'thai': 'Тайские цифры',
                    'telu': 'Цифры телугу',
                    'tamldec': 'Тамильские цифры',
                    'taml': 'Тамильские цифры',
                    'talu': 'цифры новой тай-лю',
                    'takr': 'цифры такри',
                    'olck': 'цифры ол-чики',
                    'nkoo': 'цифры нко',
                    'mymrshan': 'бирманские шанские цифры',
                    'mymr': 'Бирманские цифры',
                    'mtei': 'цифры манипури',
                    'mong': 'Монгольские цифры',
                    'mlym': 'Цифры малаялам',
                    'limb': 'цифры лимбу',
                    'lepc': 'цифры лепча',
                    'latn': 'Современные цифры',
                    'laoo': 'Лаосские цифры',
                    'lanatham': 'цифры тай там там',
                    'lana': 'цифры тай там хора',
                    'geor': 'Грузинские цифры',
                    'fullwide': 'Полный формат цифр',
                    'ethi': 'Эфиопские цифры'
                },
                'colAlternate': {
                    'non-ignorable': 'Сортировка символов',
                    'shifted': 'Сортировка без учета символов'
                },
                'colBackwards': {
                    'no': 'Сортировка по акцентам в обычном порядке',
                    'yes': 'Сортировка по акцентам в обратном порядке'
                }
            },
            'keys': {
                'colNormalization': 'Нормализованная сортировка',
                'collation': 'Сопоставление',
                'colHiraganaQuaternary': 'Сортировка каны',
                'colCaseLevel': 'Сортировка с учетом регистра',
                'colCaseFirst': 'Сортировка по верхнему или нижнему регистру',
                'colBackwards': 'Обратная сортировка по акценту',
                'colAlternate': 'Игнорировать символы при сортировке',
                'calendar': 'Календарь',
                'x': 'Частное',
                'variableTop': 'Сортировать как символьный массив',
                'va': 'Вариант региональных настроек',
                'timezone': 'Часовой пояс',
                'numbers': 'Цифры',
                'currency': 'Валюта',
                'colStrength': 'Эффективность сортировки',
                'colNumeric': 'Сортировка чисел'
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
                            'exemplarCity': 'Сайпан'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'Раротонга'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'Порт-Морсби'
                        },
                        'Ponape': {
                            'exemplarCity': 'Понапе, о-в'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Питкерн'
                        },
                        'Palau': {
                            'exemplarCity': 'Палау'
                        },
                        'Auckland': {
                            'exemplarCity': 'Окленд'
                        },
                        'Apia': {
                            'exemplarCity': 'Апия'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Фунафути'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Галапагосcкие о-ва'
                        },
                        'Gambier': {
                            'exemplarCity': 'Гамбье, о-ва'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'Гвадалканал'
                        },
                        'Guam': {
                            'exemplarCity': 'Гуам'
                        },
                        'Honolulu': {
                            'exemplarCity': 'Гонолулу'
                        },
                        'Wallis': {
                            'exemplarCity': 'Уоллис'
                        },
                        'Wake': {
                            'exemplarCity': 'Уэйк, о-в'
                        },
                        'Truk': {
                            'exemplarCity': 'Трук, о-ва'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'Тонгатапу'
                        },
                        'Tarawa': {
                            'exemplarCity': 'Тарава'
                        },
                        'Tahiti': {
                            'exemplarCity': 'Таити, о-в'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Киритимати'
                        },
                        'Johnston': {
                            'exemplarCity': 'Джонстон, ат.'
                        },
                        'Chatham': {
                            'exemplarCity': 'Чатем, о-в'
                        },
                        'Easter': {
                            'exemplarCity': 'Пасхи, о-в'
                        },
                        'Efate': {
                            'exemplarCity': 'Эфате'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Эндербери, о-в'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Факаофо'
                        },
                        'Fiji': {
                            'exemplarCity': 'Фиджи'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Косрае'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Кваджалейн'
                        },
                        'Majuro': {
                            'exemplarCity': 'Маджуро'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Маркизские о-ва'
                        },
                        'Midway': {
                            'exemplarCity': 'Мидуэй, о-ва'
                        },
                        'Nauru': {
                            'exemplarCity': 'Науру'
                        },
                        'Niue': {
                            'exemplarCity': 'Ниуэ'
                        },
                        'Norfolk': {
                            'exemplarCity': 'Норфолк'
                        },
                        'Noumea': {
                            'exemplarCity': 'Нумеа'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'Паго-Паго'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'Линдеман'
                        },
                        'Hobart': {
                            'exemplarCity': 'Хобарт'
                        },
                        'Eucla': {
                            'exemplarCity': 'Юкла'
                        },
                        'Darwin': {
                            'exemplarCity': 'Дарвин'
                        },
                        'Sydney': {
                            'exemplarCity': 'Сидней'
                        },
                        'Perth': {
                            'exemplarCity': 'Перт'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Мельбурн'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Лорд-Хау, о-в'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Аделаида'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Брисбен'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Брокен-Хилл'
                        },
                        'Currie': {
                            'exemplarCity': 'Керри'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Мальдивы'
                        },
                        'Mahe': {
                            'exemplarCity': 'Маэ'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Кергелен'
                        },
                        'Reunion': {
                            'exemplarCity': 'Реюньон'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Майорка'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Маврикий'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Антананариву'
                        },
                        'Chagos': {
                            'exemplarCity': 'Чагос'
                        },
                        'Christmas': {
                            'exemplarCity': 'О-в Рождества'
                        },
                        'Cocos': {
                            'exemplarCity': 'Кокосовые о-ва'
                        },
                        'Comoro': {
                            'exemplarCity': 'Коморские о-ва'
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
                            'exemplarCity': 'Неизвестный город'
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
                            'exemplarCity': 'Ротера'
                        },
                        'Palmer': {
                            'exemplarCity': 'Палмер'
                        },
                        'McMurdo': {
                            'exemplarCity': 'Мак-Мердо'
                        },
                        'Vostok': {
                            'exemplarCity': 'Восток'
                        },
                        'Syowa': {
                            'exemplarCity': 'Сёва'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Южный полюс'
                        },
                        'Casey': {
                            'exemplarCity': 'Кейси'
                        },
                        'Davis': {
                            'exemplarCity': 'Дейвис'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Дюмон-д\'Юрвиль'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Маккуори'
                        },
                        'Mawson': {
                            'exemplarCity': 'Моусон'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Лонгйир'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'Торонто'
                        },
                        'Tijuana': {
                            'exemplarCity': 'Тихуана'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'Тандер-Бей'
                        },
                        'Thule': {
                            'exemplarCity': 'Туле'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Тегусигальпа'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Свифт-Карент'
                        },
                        'Chicago': {
                            'exemplarCity': 'Чикаго'
                        },
                        'Cayman': {
                            'exemplarCity': 'Каймановы о-ва'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Кайенна'
                        },
                        'Catamarca': {
                            'exemplarCity': 'Катамарка'
                        },
                        'Caracas': {
                            'exemplarCity': 'Каракас'
                        },
                        'Cancun': {
                            'exemplarCity': 'Канкун'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'Кампу-Гранди'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Кеймбридж-Бей'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Буэнос-Айрес'
                        },
                        'Boise': {
                            'exemplarCity': 'Бойсе'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Асунсьон'
                        },
                        'Aruba': {
                            'exemplarCity': 'Аруба'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Рио-Гальегос'
                            },
                            'San_Juan': {
                                'exemplarCity': 'Сан-Хуан'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ушуая'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'Ла-Риоха'
                            },
                            'San_Luis': {
                                'exemplarCity': 'Сан-Луис'
                            },
                            'Salta': {
                                'exemplarCity': 'Сальта'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Тукуман'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Арагуаина'
                        },
                        'Antigua': {
                            'exemplarCity': 'Антигуа'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Ангилья'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Анкоридж'
                        },
                        'Adak': {
                            'exemplarCity': 'Адак, о-в'
                        },
                        'Bahia': {
                            'exemplarCity': 'Баия'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Баия-де-Бандерас'
                        },
                        'Barbados': {
                            'exemplarCity': 'Барбадос'
                        },
                        'Belem': {
                            'exemplarCity': 'Белен'
                        },
                        'Belize': {
                            'exemplarCity': 'Белиз'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Бланк-Саблон'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Боа-Виста'
                        },
                        'Bogota': {
                            'exemplarCity': 'Богота'
                        },
                        'Curacao': {
                            'exemplarCity': 'Кюрасао'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'Денмарксхавн'
                        },
                        'Dawson': {
                            'exemplarCity': 'Доусон'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'Досон-Крик'
                        },
                        'Denver': {
                            'exemplarCity': 'Денвер'
                        },
                        'Detroit': {
                            'exemplarCity': 'Детройт'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Эрмосильо'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Винсенс'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Петерсбург'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Телл-Сити'
                            },
                            'Knox': {
                                'exemplarCity': 'Нокс'
                            },
                            'Winamac': {
                                'exemplarCity': 'Винамак'
                            },
                            'Marengo': {
                                'exemplarCity': 'Маренго'
                            },
                            'Vevay': {
                                'exemplarCity': 'Вивэй'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Индианаполис'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Инувик'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Икалуит'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Ямайка'
                        },
                        'Jujuy': {
                            'exemplarCity': 'Жужуй'
                        },
                        'Juneau': {
                            'exemplarCity': 'Джуно'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'Йеллоунайф'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Якутат'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Виннипег'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Уайтхорс'
                        },
                        'Vancouver': {
                            'exemplarCity': 'Ванкувер'
                        },
                        'Tortola': {
                            'exemplarCity': 'Тортола'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'Кралендейк'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'Монтиселло'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Гавана'
                        },
                        'Halifax': {
                            'exemplarCity': 'Галифакс'
                        },
                        'Guyana': {
                            'exemplarCity': 'Гайана'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Гуаякиль'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Гватемала'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Гваделупа'
                        },
                        'Grenada': {
                            'exemplarCity': 'Гренада'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'Гранд Турк'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Гус-Бей'
                        },
                        'Godthab': {
                            'exemplarCity': 'Готхоб'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'Глейс-Бей'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'Форталеза'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'Сальвадор'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Эйрунепе'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Эдмонтон'
                        },
                        'Dominica': {
                            'exemplarCity': 'Доминика'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Чиуауа'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Корал-Харбор'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Кордова'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Коста-Рика'
                        },
                        'Creston': {
                            'exemplarCity': 'Крестон'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Куяба'
                        },
                        'La_Paz': {
                            'exemplarCity': 'Ла-Пас'
                        },
                        'Lima': {
                            'exemplarCity': 'Лима'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Лос-Анджелес'
                        },
                        'Louisville': {
                            'exemplarCity': 'Луисвилл'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Лоуэр-Принсес-Куортер'
                        },
                        'Maceio': {
                            'exemplarCity': 'Масейо'
                        },
                        'Managua': {
                            'exemplarCity': 'Манагуа'
                        },
                        'Manaus': {
                            'exemplarCity': 'Манаус'
                        },
                        'Marigot': {
                            'exemplarCity': 'Мариго'
                        },
                        'Martinique': {
                            'exemplarCity': 'Мартиника'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Матаморос'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Масатлан'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Мендоса'
                        },
                        'Menominee': {
                            'exemplarCity': 'Меномини'
                        },
                        'Merida': {
                            'exemplarCity': 'Мерида'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Метлакатла'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Мехико'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Микелон'
                        },
                        'Moncton': {
                            'exemplarCity': 'Монктон'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Монтеррей'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Монтевидео'
                        },
                        'Montreal': {
                            'exemplarCity': 'Монреаль'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Монсеррат'
                        },
                        'Nassau': {
                            'exemplarCity': 'Нассау'
                        },
                        'New_York': {
                            'exemplarCity': 'Нью-Йорк'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Нипигон'
                        },
                        'Nome': {
                            'exemplarCity': 'Ном'
                        },
                        'Noronha': {
                            'exemplarCity': 'Норонха'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Бойла, Северная Дакота'
                            },
                            'New_Salem': {
                                'exemplarCity': 'Нью-Салем'
                            },
                            'Center': {
                                'exemplarCity': 'Северная Дакота - Центр'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Охинага'
                        },
                        'Panama': {
                            'exemplarCity': 'Панама'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Пангниртанг'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Парамарибо'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Финикс'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Порт-о-Пренс'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Порт-оф-Спейн'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Порту-Велью'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Пуэрто-Рико'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Рейни-Ривер'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Ранкин-Инлет'
                        },
                        'Recife': {
                            'exemplarCity': 'Ресифи'
                        },
                        'Regina': {
                            'exemplarCity': 'Реджайна'
                        },
                        'Resolute': {
                            'exemplarCity': 'Резолют'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Риу-Бранку'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Санта-Изабел'
                        },
                        'Santarem': {
                            'exemplarCity': 'Сантарен'
                        },
                        'Santiago': {
                            'exemplarCity': 'Сантьяго'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Санто-Доминго'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'Сан-Паулу'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Скорсбисунн'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Шипрок'
                        },
                        'Sitka': {
                            'exemplarCity': 'Ситка'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'Сен-Бартельми'
                        },
                        'St_Johns': {
                            'exemplarCity': 'Сент-Джонс'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Сент-Китс'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Сент-Люсия'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Сент-Томас'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Сент-Винсент'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Ю.Джорджия и Ю.Сэндвинчевы о-ва'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Рейкьявик'
                        },
                        'Stanley': {
                            'exemplarCity': 'Стэнли'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Св. Елены, о-в'
                        },
                        'Azores': {
                            'exemplarCity': 'Азорские о-ва'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Бермуды'
                        },
                        'Canary': {
                            'exemplarCity': 'Канарские о-ва'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Острова Зеленого Мыса'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Фарерские о-ва'
                        },
                        'Madeira': {
                            'exemplarCity': 'Мадейра, о-в'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Осло'
                        },
                        'Moscow': {
                            'exemplarCity': 'Москва'
                        },
                        'Monaco': {
                            'exemplarCity': 'Монако'
                        },
                        'Minsk': {
                            'exemplarCity': 'Минск'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Мариехамн'
                        },
                        'Malta': {
                            'exemplarCity': 'Мальта'
                        },
                        'Madrid': {
                            'exemplarCity': 'Мадрид'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Люксембург'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Британское летнее время'
                            },
                            'exemplarCity': 'Лондон'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Любляна'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Лиссабон'
                        },
                        'Kiev': {
                            'exemplarCity': 'Киев'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Калининград'
                        },
                        'Jersey': {
                            'exemplarCity': 'Джерси'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Стамбул'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Остров Мэн'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Бухарест'
                        },
                        'Brussels': {
                            'exemplarCity': 'Брюссель'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Братислава'
                        },
                        'Berlin': {
                            'exemplarCity': 'Берлин'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Белград'
                        },
                        'Athens': {
                            'exemplarCity': 'Афины'
                        },
                        'Andorra': {
                            'exemplarCity': 'Андорра'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Амстердам'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Симферополь'
                        },
                        'Skopje': {
                            'exemplarCity': 'Скопье'
                        },
                        'Sofia': {
                            'exemplarCity': 'София'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Стокгольм'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Таллин'
                        },
                        'Tirane': {
                            'exemplarCity': 'Тирана'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ужгород'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Вадуц'
                        },
                        'Zurich': {
                            'exemplarCity': 'Цюрих'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Запорожье'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Загреб'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Варшава'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Волгоград'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Вильнюс'
                        },
                        'Vienna': {
                            'exemplarCity': 'Вена'
                        },
                        'Vatican': {
                            'exemplarCity': 'Ватикан'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Сараево'
                        },
                        'San_Marino': {
                            'exemplarCity': 'Сан-Марино'
                        },
                        'Samara': {
                            'exemplarCity': 'Самара'
                        },
                        'Rome': {
                            'exemplarCity': 'Рим'
                        },
                        'Riga': {
                            'exemplarCity': 'Рига'
                        },
                        'Prague': {
                            'exemplarCity': 'Прага'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Подгорица'
                        },
                        'Paris': {
                            'exemplarCity': 'Париж'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Хельсинки'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Гернси'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Гибралтар'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Ирландия, летнее время'
                            },
                            'exemplarCity': 'Дублин'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Копенгаген'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Кишинев'
                        },
                        'Busingen': {
                            'exemplarCity': 'Бюзинген-на-Верхнем-Рейне'
                        },
                        'Budapest': {
                            'exemplarCity': 'Будапешт'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Либревиль'
                        },
                        'Lagos': {
                            'exemplarCity': 'Лагос'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Киншаса'
                        },
                        'Kigali': {
                            'exemplarCity': 'Кигали'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Хартум'
                        },
                        'Kampala': {
                            'exemplarCity': 'Кампала'
                        },
                        'Juba': {
                            'exemplarCity': 'Джуба'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Йоханнесбург'
                        },
                        'Harare': {
                            'exemplarCity': 'Хараре'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Габороне'
                        },
                        'Freetown': {
                            'exemplarCity': 'Фритаун'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'Эль-Аюн'
                        },
                        'Douala': {
                            'exemplarCity': 'Дуала'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Джибути'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Дар-эс-Салам'
                        },
                        'Dakar': {
                            'exemplarCity': 'Дакар'
                        },
                        'Banjul': {
                            'exemplarCity': 'Банжул'
                        },
                        'Bangui': {
                            'exemplarCity': 'Банги'
                        },
                        'Bamako': {
                            'exemplarCity': 'Бамако'
                        },
                        'Asmera': {
                            'exemplarCity': 'Асмера'
                        },
                        'Malabo': {
                            'exemplarCity': 'Малабо'
                        },
                        'Maputo': {
                            'exemplarCity': 'Мапуту'
                        },
                        'Maseru': {
                            'exemplarCity': 'Масеру'
                        },
                        'Mbabane': {
                            'exemplarCity': 'Мбабане'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'Могадишо'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Монровия'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Найроби'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Нджамена'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Виндхук'
                        },
                        'Tunis': {
                            'exemplarCity': 'Тунис'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Триполи'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Сан-Томе'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Порто-Ново'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Уагадугу'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Нуакшот'
                        },
                        'Niamey': {
                            'exemplarCity': 'Ниамей'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Лусака'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Лубумбаши'
                        },
                        'Luanda': {
                            'exemplarCity': 'Луанда'
                        },
                        'Lome': {
                            'exemplarCity': 'Ломе'
                        },
                        'Conakry': {
                            'exemplarCity': 'Конакри'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Сеута'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Касабланка'
                        },
                        'Cairo': {
                            'exemplarCity': 'Каир'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Бужумбура'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Браззавиль'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Блантайр'
                        },
                        'Bissau': {
                            'exemplarCity': 'Бисау'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Абиджан'
                        },
                        'Accra': {
                            'exemplarCity': 'Аккра'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Аддис-Абеба'
                        },
                        'Algiers': {
                            'exemplarCity': 'Алжир'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Шанхай'
                        },
                        'Seoul': {
                            'exemplarCity': 'Сеул'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Самарканд'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Сахалин, о-в'
                        },
                        'Saigon': {
                            'exemplarCity': 'Хошимин'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Эр-Рияд'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Рангун'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Кызылорда'
                        },
                        'Qatar': {
                            'exemplarCity': 'Катар'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Пхеньян'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Понтианак'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Пномпень'
                        },
                        'Oral': {
                            'exemplarCity': 'Орал (Уральск)'
                        },
                        'Omsk': {
                            'exemplarCity': 'Омск'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Новосибирск'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Багдад'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Чунцин'
                        },
                        'Colombo': {
                            'exemplarCity': 'Коломбо'
                        },
                        'Damascus': {
                            'exemplarCity': 'Дамаск'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Дакка'
                        },
                        'Dili': {
                            'exemplarCity': 'Дили'
                        },
                        'Dubai': {
                            'exemplarCity': 'Дубай'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Душанбе'
                        },
                        'Gaza': {
                            'exemplarCity': 'Газа'
                        },
                        'Harbin': {
                            'exemplarCity': 'Харбин'
                        },
                        'Hebron': {
                            'exemplarCity': 'Хеврон'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Гонконг'
                        },
                        'Hovd': {
                            'exemplarCity': 'Ховд'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Иркутск'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Джакарта'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Джайпур'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Улан-Батор'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Урумчи'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Усть-Нера'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Вьентьян'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Владивосток'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Якутск'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Екатеринбург'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Ереван'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Токио'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Тимпу'
                        },
                        'Tehran': {
                            'exemplarCity': 'Тегеран'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Тбилиси'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Ташкент'
                        },
                        'Taipei': {
                            'exemplarCity': 'Тайбэй'
                        },
                        'Singapore': {
                            'exemplarCity': 'Сингапур'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Иерусалим'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ашхабад'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Актобе (Актюбинск)'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Актау'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Анадырь'
                        },
                        'Amman': {
                            'exemplarCity': 'Амман'
                        },
                        'Almaty': {
                            'exemplarCity': 'Алматы'
                        },
                        'Aden': {
                            'exemplarCity': 'Аден'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Бахрейн'
                        },
                        'Baku': {
                            'exemplarCity': 'Баку'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Бангкок'
                        },
                        'Beirut': {
                            'exemplarCity': 'Бейрут'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Бишкек'
                        },
                        'Brunei': {
                            'exemplarCity': 'Бруней'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Калькутта'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Чойбалсан'
                        },
                        'Kabul': {
                            'exemplarCity': 'Кабул'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Петропавловск-Камчатский'
                        },
                        'Karachi': {
                            'exemplarCity': 'Карачи'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Кашгар'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Катманду'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Хандыга'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Красноярск'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Куала-Лумпур'
                        },
                        'Kuching': {
                            'exemplarCity': 'Кучинг'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Кувейт'
                        },
                        'Macau': {
                            'exemplarCity': 'Макао'
                        },
                        'Magadan': {
                            'exemplarCity': 'Магадан'
                        },
                        'Makassar': {
                            'exemplarCity': 'Макасар'
                        },
                        'Manila': {
                            'exemplarCity': 'Манила'
                        },
                        'Muscat': {
                            'exemplarCity': 'Маскат'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Никосия'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Новокузнецк'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'Самоа',
                            'standard': 'Самоа, стандартное время',
                            'daylight': 'Самоа, летнее время'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Время в Самаре',
                            'standard': 'Самарское стандартное время',
                            'daylight': 'Самарское летнее время'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Сахалин',
                            'standard': 'Сахалин, стандартное время',
                            'daylight': 'Сахалин, летнее время'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Ротера'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Реюньон'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Кызылорда*',
                            'standard': 'Кызылорда, стандартное время*',
                            'daylight': 'Кызылорда, летнее время*'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'О-ва Понапе'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Питкэрн'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Сен-Пьер и Микелон',
                            'standard': 'Сен-Пьер и Микелон, стандартное время',
                            'daylight': 'Сен-Пьер и Микелон, летнее время'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'О-ва Феникс'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Филиппины',
                            'standard': 'Филиппины, стандартное время',
                            'daylight': 'Филиппины, летнее время'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Перу',
                            'standard': 'Перу, стандартное время',
                            'daylight': 'Перу, летнее время'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Парагвай',
                            'standard': 'Парагвай, стандартное время',
                            'daylight': 'Парагвай, летнее время'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Папуа \u2013 Новая Гвинея'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Палау'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Пакистан',
                            'standard': 'Пакистан, стандартное время',
                            'daylight': 'Пакистан, летнее время'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Омск',
                            'standard': 'Омск, стандартное время',
                            'daylight': 'Омск, летнее время'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Новосибирск',
                            'standard': 'Новосибирск, стандартное время',
                            'daylight': 'Новосибирск, летнее время'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Северные Марианские о-ва'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Фернанду-ди-Норонья',
                            'standard': 'Фернанду-ди-Норонья, стандартное время',
                            'daylight': 'Фернанду-ди-Норонья, летнее время'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Норфолк'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Ниуэ'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Ньюфаундленд',
                            'standard': 'Ньюфаундленд, стандартное время',
                            'daylight': 'Ньюфаундленд, летнее время'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Новая Зеландия',
                            'standard': 'Новая Зеландия, стандартное время',
                            'daylight': 'Новая Зеландия, летнее время'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Новая Каледония',
                            'standard': 'Новая Каледония, стандартное время',
                            'daylight': 'Новая Каледония, летнее время'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Центральная Америка',
                            'standard': 'Центральная Америка, стандартное время',
                            'daylight': 'Центральная Америка, летнее время'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Восточная Америка',
                            'standard': 'Восточная Америка, стандартное время',
                            'daylight': 'Восточная Америка, летнее время'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Горное время (США)',
                            'standard': 'Горное стандартное время (США)',
                            'daylight': 'Горное летнее время (США)'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Тихоокеанское время',
                            'standard': 'Тихоокеанское стандартное время',
                            'daylight': 'Тихоокеанское летнее время'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Время по Анадырю',
                            'standard': 'Анадырь стандартное время',
                            'daylight': 'Анадырь летнее время'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Актау время',
                            'standard': 'Актау стандартное время',
                            'daylight': 'Актау летнее время'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Актобе время',
                            'standard': 'Актобе стандартное время',
                            'daylight': 'Актобе летнее время'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Кабо-Верде',
                            'standard': 'Кабо-Верде, стандартное время',
                            'daylight': 'Кабо-Верде, летнее время'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Кейси'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Чаморро'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Чатем',
                            'standard': 'Чатем, стандартное время',
                            'daylight': 'Чатем, летнее время'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Чили',
                            'standard': 'Чили, стандартное время',
                            'daylight': 'Чили, летнее время'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Китай',
                            'standard': 'Китай, стандартное время',
                            'daylight': 'Китай, летнее время'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Чойбалсан',
                            'standard': 'Чойбалсан, стандартное время',
                            'daylight': 'Чойбалсан, летнее время'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'О-в Рождества'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Кокосовые о-ва'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Колумбия',
                            'standard': 'Колумбия, стандартное время',
                            'daylight': 'Колумбия, летнее время'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'О-ва Кука',
                            'standard': 'О-ва Кука, стандартное время',
                            'daylight': 'О-ва Кука, полулетнее время'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Куба',
                            'standard': 'Куба, стандартное время',
                            'daylight': 'Куба, летнее время'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Дейвис'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Дюмон-д\'Юрвиль'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Восточный Тимор'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'О-в Пасхи',
                            'standard': 'О-в Пасхи, стандартное время',
                            'daylight': 'О-в Пасхи, летнее время'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Эквадор'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Центральная Европа',
                            'standard': 'Центральная Европа, стандартное время',
                            'daylight': 'Центральная Европа, летнее время'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Восточная Европа',
                            'standard': 'Восточная Европа, стандартное время',
                            'daylight': 'Восточная Европа, летнее время'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Западная Европа',
                            'standard': 'Западная Европа, стандартное время',
                            'daylight': 'Западная Европа, летнее время'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Фолкленды',
                            'standard': 'Фолкленды, стандартное время',
                            'daylight': 'Фолкленды, летнее время'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Фиджи',
                            'standard': 'Фиджи, стандартное время',
                            'daylight': 'Фиджи, летнее время'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Французская Гвиана'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Французское южное и антарктическое время'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Галапагосские о-ва'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Токелау'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Тонга',
                            'standard': 'Тонга, стандартное время',
                            'daylight': 'Тонга, летнее время'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Чуук'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Туркмения',
                            'standard': 'Туркмения, стандартное время',
                            'daylight': 'Туркмения, летнее время'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Тувалу'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Уругвай',
                            'standard': 'Уругвай, стандартное время',
                            'daylight': 'Уругвай, летнее время'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Узбекистан',
                            'standard': 'Узбекистан, стандартное время',
                            'daylight': 'Узбекистан, летнее время'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Вануату',
                            'standard': 'Вануату, стандартное время',
                            'daylight': 'Вануату, летнее время'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Екатеринбург',
                            'standard': 'Екатеринбург, стандартное время',
                            'daylight': 'Екатеринбург, летнее время'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Якутск',
                            'standard': 'Якутск, стандартное время',
                            'daylight': 'Якутск, летнее время'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Уоллис и Футуна'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'О-в Уэйк'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Восток'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Волгоград',
                            'standard': 'Волгоград, стандартное время',
                            'daylight': 'Волгоград, летнее время'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Владивосток',
                            'standard': 'Владивосток, стандартное время',
                            'daylight': 'Владивосток, летнее время'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Венесуэла'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Таджикистан'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Тайвань',
                            'standard': 'Тайвань, стандартное время',
                            'daylight': 'Тайвань, летнее время'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'О-в Таити'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Сёва'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Суринам'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Южная Георгия'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Соломоновы о-ва'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Сингапур'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Сейшелы'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Гуам'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Западная Гренландия',
                            'standard': 'Западная Гренландия, стандартное время',
                            'daylight': 'Западная Гренландия, летнее время'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Восточная Гренландия',
                            'standard': 'Восточная Гренландия, стандарное время',
                            'daylight': 'Восточная Гренландия, летнее время'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Среднее время по Гринвичу'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'О-ва Гилберта'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Грузия',
                            'standard': 'Грузия, стандартное время',
                            'daylight': 'Грузия, летнее время'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Гамбье'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Амазонка',
                            'standard': 'Амазонка, стандартное время',
                            'daylight': 'Амазонка, летнее время'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Акри время',
                            'standard': 'Акри стандартное время',
                            'daylight': 'Акри летнее время'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Афганистан'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Центральная Африка'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Восточная Африка'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Южная Африка'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Западная Африка',
                            'standard': 'Западная Африка, стандартное время',
                            'daylight': 'Западная Африка, летнее время'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Аляска',
                            'standard': 'Аляска, стандартное время',
                            'daylight': 'Аляска, летнее время'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Алма-Ата время',
                            'standard': 'Алма-Ата стандартное время',
                            'daylight': 'Алма-Ата летнее время'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Саудовская Аравия',
                            'standard': 'Саудовская Аравия, стандартное время',
                            'daylight': 'Саудовская Аравия, летнее время'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Аргентина',
                            'standard': 'Аргентина, стандартное время',
                            'daylight': 'Аргентина, летнее время'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Западная Аргентина',
                            'standard': 'Западная Аргентина, стандартное время',
                            'daylight': 'Западная Аргентина, летнее время'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Армения',
                            'standard': 'Армения, стандартное время',
                            'daylight': 'Армения, летнее время'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Атлантическое время',
                            'standard': 'Атлантическое стандартное время',
                            'daylight': 'Атлантическое летнее время'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Центральная Австралия',
                            'standard': 'Центральная Австралия, стандартное время',
                            'daylight': 'Центральная Австралия, летнее время'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Центральная Австралия, западное время',
                            'standard': 'Центральная Австралия, западное стандартное время',
                            'daylight': 'Центральная Австралия, западное летнее время'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Восточная Австралия',
                            'standard': 'Восточная Австралия, стандартное время',
                            'daylight': 'Восточная Австралия, летнее время'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Западная Австралия',
                            'standard': 'Западная Австралия, стандартное время',
                            'daylight': 'Западная Австралия, летнее время'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Азербайджан',
                            'standard': 'Азербайджан, стандартное время',
                            'daylight': 'Азербайджан, летнее время'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Азоры',
                            'standard': 'Азоры, стандартное время',
                            'daylight': 'Азоры, летнее время'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Бангладеш',
                            'standard': 'Бангладеш, стандартное время',
                            'daylight': 'Бангладеш, летнее время'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Бутан'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Боливия'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Бразилия',
                            'standard': 'Бразилия, стандартное время',
                            'daylight': 'Бразилия, летнее время'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Бруней-Даруссалам'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Персидский залив'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Гайана'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Гавайско-алеутское время',
                            'standard': 'Гавайско-алеутское стандартное время',
                            'daylight': 'Гавайско-алеутское летнее время'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Гонконг',
                            'standard': 'Гонконг, стандартное время',
                            'daylight': 'Гонконг, летнее время'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Ховд',
                            'standard': 'Ховд, стандартное время',
                            'daylight': 'Ховд, летнее время'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Индия'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Индийский океан'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Индокитай'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Центральная Индонезия'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Восточная Индонезия'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Западная Индонезия'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Иран',
                            'standard': 'Иран, стандартное время',
                            'daylight': 'Иран, летнее время'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Иркутск',
                            'standard': 'Иркутск, стандартное время',
                            'daylight': 'Иркутск, летнее время'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Израиль',
                            'standard': 'Израиль, стандартное время',
                            'daylight': 'Израиль, летнее время'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Япония',
                            'standard': 'Япония, стандартное время',
                            'daylight': 'Япония, летнее время'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Время в Петропавловску-Камчатскому',
                            'standard': 'Стандартное время в Петропавловску-Камчатскому',
                            'daylight': 'Летнее время в Петропавловске-Камчатском'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Восточный Казахстан'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Западный Казахстан'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Корея',
                            'standard': 'Корея, стандартное время',
                            'daylight': 'Корея, летнее время'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Косраэ'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Красноярск',
                            'standard': 'Красноярск, стандартное время',
                            'daylight': 'Красноярск, летнее время'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Киргизия'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Шри-Ланка'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'О-ва Лайн'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Лорд-Хау',
                            'standard': 'Лорд-Хау, стандартное время',
                            'daylight': 'Лорд-Хау, летнее время'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Макао',
                            'standard': 'Макао, стандартное время',
                            'daylight': 'Макао, летнее время'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Маккуори'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Магадан',
                            'standard': 'Магадан, стандартное время',
                            'daylight': 'Магадан, летнее время'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Малайзия'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Мальдивы'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Маркизские о-ва'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Маршалловы о-ва'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Маврикий',
                            'standard': 'Маврикий, стандартное время',
                            'daylight': 'Маврикий, летнее время'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Моусон'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Улан-Батор',
                            'standard': 'Улан-Батор, стандартное время',
                            'daylight': 'Улан-Батор, летнее время'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Москва',
                            'standard': 'Москва, стандартное время',
                            'daylight': 'Москва, летнее время'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Мьянма'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Науру'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Непал'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} время',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'авг.',
                                '7': 'июля',
                                '6': 'июня',
                                '5': 'мая',
                                '12': 'дек.',
                                '11': 'нояб.',
                                '10': 'окт.',
                                '9': 'сент.',
                                '1': 'янв.',
                                '2': 'февр.',
                                '3': 'марта',
                                '4': 'апр.'
                            },
                            'narrow': {
                                '8': 'А',
                                '7': 'И',
                                '6': 'И',
                                '5': 'М',
                                '12': 'Д',
                                '11': 'Н',
                                '10': 'О',
                                '9': 'С',
                                '1': 'Я',
                                '2': 'Ф',
                                '3': 'М',
                                '4': 'А'
                            },
                            'wide': {
                                '8': 'августа',
                                '7': 'июля',
                                '6': 'июня',
                                '5': 'мая',
                                '12': 'декабря',
                                '11': 'ноября',
                                '10': 'октября',
                                '9': 'сентября',
                                '1': 'января',
                                '2': 'февраля',
                                '3': 'марта',
                                '4': 'апреля'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Авг.',
                                '7': 'Июль',
                                '6': 'Июнь',
                                '5': 'Май',
                                '12': 'Дек.',
                                '11': 'Нояб.',
                                '10': 'Окт.',
                                '9': 'Сент.',
                                '1': 'Янв.',
                                '2': 'Февр.',
                                '3': 'Март',
                                '4': 'Апр.'
                            },
                            'narrow': {
                                '8': 'А',
                                '7': 'И',
                                '6': 'И',
                                '5': 'М',
                                '12': 'Д',
                                '11': 'Н',
                                '10': 'О',
                                '9': 'С',
                                '1': 'Я',
                                '2': 'Ф',
                                '3': 'М',
                                '4': 'А'
                            },
                            'wide': {
                                '8': 'Август',
                                '7': 'Июль',
                                '6': 'Июнь',
                                '5': 'Май',
                                '12': 'Декабрь',
                                '11': 'Ноябрь',
                                '10': 'Октябрь',
                                '9': 'Сентябрь',
                                '1': 'Январь',
                                '2': 'Февраль',
                                '3': 'Март',
                                '4': 'Апрель'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'вс',
                                'mon': 'пн',
                                'tue': 'вт',
                                'wed': 'ср',
                                'thu': 'чт',
                                'fri': 'пт',
                                'sat': 'сб'
                            },
                            'narrow': {
                                'sun': 'вс',
                                'mon': 'пн',
                                'tue': 'вт',
                                'wed': 'ср',
                                'thu': 'чт',
                                'fri': 'пт',
                                'sat': 'сб'
                            },
                            'short': {
                                'sun': 'вс',
                                'mon': 'пн',
                                'tue': 'вт',
                                'wed': 'ср',
                                'thu': 'чт',
                                'fri': 'пт',
                                'sat': 'сб'
                            },
                            'wide': {
                                'sun': 'воскресенье',
                                'mon': 'понедельник',
                                'tue': 'вторник',
                                'wed': 'среда',
                                'thu': 'четверг',
                                'fri': 'пятница',
                                'sat': 'суббота'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Вс',
                                'mon': 'Пн',
                                'tue': 'Вт',
                                'wed': 'Ср',
                                'thu': 'Чт',
                                'fri': 'Пт',
                                'sat': 'Сб'
                            },
                            'narrow': {
                                'sun': 'В',
                                'mon': 'П',
                                'tue': 'В',
                                'wed': 'С',
                                'thu': 'Ч',
                                'fri': 'П',
                                'sat': 'С'
                            },
                            'short': {
                                'sun': 'вс',
                                'mon': 'пн',
                                'tue': 'вт',
                                'wed': 'ср',
                                'thu': 'чт',
                                'fri': 'пт',
                                'sat': 'сб'
                            },
                            'wide': {
                                'sun': 'Воскресенье',
                                'mon': 'Понедельник',
                                'tue': 'Вторник',
                                'wed': 'Среда',
                                'thu': 'Четверг',
                                'fri': 'Пятница',
                                'sat': 'Суббота'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1-й кв.',
                                '2': '2-й кв.',
                                '3': '3-й кв.',
                                '4': '4-й кв.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1-й квартал',
                                '2': '2-й квартал',
                                '3': '3-й квартал',
                                '4': '4-й квартал'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1-й кв.',
                                '2': '2-й кв.',
                                '3': '3-й кв.',
                                '4': '4-й кв.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1-й квартал',
                                '2': '2-й квартал',
                                '3': '3-й квартал',
                                '4': '4-й квартал'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'до полудня',
                                'pm': 'после полудня'
                            },
                            'narrow': {
                                'am': 'дп',
                                'pm': 'пп'
                            },
                            'wide': {
                                'am': 'до полудня',
                                'pm': 'после полудня'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'до полудня',
                                'pm': 'после полудня'
                            },
                            'narrow': {
                                'am': 'дп',
                                'pm': 'пп'
                            },
                            'wide': {
                                'am': 'до полудня',
                                'pm': 'после полудня'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'до н.э.',
                            '0-alt-variant': 'BCE',
                            '1': 'н.э.',
                            '1-alt-variant': 'н.э.'
                        },
                        'eraAbbr': {
                            '0': 'до н. э.',
                            '0-alt-variant': 'BCE',
                            '1': 'н. э.',
                            '1-alt-variant': 'н.э.'
                        },
                        'eraNarrow': {
                            '0': 'до н.э.',
                            '0-alt-variant': 'BCE',
                            '1': 'н.э.',
                            '1-alt-variant': 'н.э.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y \'г\'.',
                        'long': 'd MMMM y \'г\'.',
                        'medium': 'dd MMM y \'г\'.',
                        'short': 'dd.MM.yy'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss zzzz',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}, {0}',
                        'long': '{1}, {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMM': 'LLL y',
                            'yMM': 'MM.y',
                            'yMEd': 'ccc, d.MM.y \'г\'.',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM.y',
                            'Ed': 'ccc, d',
                            'E': 'ccc',
                            'd': 'd',
                            'GyMMM': 'LLL y G',
                            'GyMMMd': 'd MMM y \'г\'. G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'H',
                            'yQQQQ': 'QQQQ y \'г\'.',
                            'yQQQ': 'QQQ y \'г\'.',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM y \'г\'.',
                            'hms': 'h:mm:ss a',
                            'Hm': 'H:mm',
                            'hm': 'h:mm a',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'Hms': 'H:mm:ss',
                            'M': 'L',
                            'Md': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'MMdd': 'dd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'ccc, d MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yLLLL': 'LLLL y'
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
                                'd': 'ccc, d - E, d MMM',
                                'M': 'ccc, d MMM - ccc, d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'LLL-MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM - E, dd.MM',
                                'M': 'E, dd.MM - E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM - dd.MM',
                                'M': 'dd.MM - dd.MM'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'H-H v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'y': {
                                'y': 'y-y'
                            },
                            'yM': {
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y - dd.MM.y',
                                'M': 'dd.MM.y - dd.MM.y',
                                'y': 'dd.MM.y - dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y \'г\'.',
                                'y': 'LLL y - LLL y \'г\'.'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y \'г\'.',
                                'M': 'd MMM - d MMM y \'г\'.',
                                'y': 'd MMM y - d MMM y \'г\'.'
                            },
                            'yMMMEd': {
                                'd': 'ccc, d - ccc, d MMM y \'г\'.',
                                'M': 'ccc, d MMM - ccc, d MMM y \'г\'.',
                                'y': 'ccc, d MMM y - ccc, d MMM y \'г\'.'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL y \'г\'.',
                                'y': 'LLLL y - LLLL y \'г\'.'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'Hmv': {
                                'H': 'H:mm-H:mm v',
                                'm': 'H:mm-H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm-H:mm',
                                'm': 'H:mm-H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd-d'
                            }
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
