/* AstroDate
 * Language: uk
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
        AstroDate.lang('uk', {
            'codePatterns': {
                'language': 'Мова: {0}',
                'script': 'Система письма: {0}',
                'territory': 'Територія: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Сортувати за кана окремо',
                    'yes': 'Сортувати за кана інакше'
                },
                'colCaseLevel': {
                    'no': 'Сортувати без урахування регістру',
                    'yes': 'Сортувати з урахуванням регістру'
                },
                'colCaseFirst': {
                    'lower': 'Сортувати спершу за малими символами',
                    'no': 'Сортувати в порядку звичайного регістру',
                    'upper': 'Сортувати спершу за великими символами'
                },
                'colStrength': {
                    'identical': 'Сортувати всі',
                    'primary': 'Сортувати лише за основними літерами',
                    'quaternary': 'Сортувати за діактричними знаками/регістром/шириною/кана',
                    'secondary': 'Сортувати за діактричними знаками',
                    'tertiary': 'Сортувати за діактричними знаками/регістром/шириною'
                },
                'colNumeric': {
                    'no': 'Сортувати за цифрами окремо',
                    'yes': 'Сортувати за цифрами чисельно'
                },
                'colNormalization': {
                    'no': 'Сортувати без уніфікації',
                    'yes': 'Сортувати за Unicode уніфіковано'
                },
                'calendar': {
                    'japanese': 'Японський календар',
                    'iso8601': 'iso8601',
                    'coptic': 'Коптський календар',
                    'dangi': 'dangi',
                    'ethiopic': 'Ефіопський календар',
                    'ethiopic-amete-alem': 'Ефіопський Амете Алем календар',
                    'gregorian': 'Григоріанський календар',
                    'hebrew': 'Єврейський календар',
                    'persian': 'Перський календар',
                    'roc': 'Китайський григоріанський',
                    'chinese': 'Китайський календар',
                    'buddhist': 'Буддійський календар',
                    'indian': 'Індійський світський календар',
                    'islamic': 'Мусульманський календар',
                    'islamic-civil': 'Мусульманський світський календар',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Телефонна книга',
                    'gb2312han': 'Китайський спрощений',
                    'eor': 'eor',
                    'ducet': 'Порядок сортування: Unicode за умовчанням',
                    'dictionary': 'Порядок сортування: за словником',
                    'big5han': 'Китайський традиційний',
                    'traditional': 'Традиційний',
                    'standard': 'Стандартний порядок сортування',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Порядок сортування: за штрихами в корені',
                    'stroke': 'Порядок натискання клавіш',
                    'searchjl': 'Пошук за початковою приголосною хангул',
                    'search': 'Універсальний пошук',
                    'reformed': 'Порядок сортування: за виправленнями',
                    'pinyin': 'Порядок піньїн',
                    'phonetic': 'Фонетичний порядок сортування'
                },
                'numbers': {
                    'knda': 'Цифри каннада',
                    'khmr': 'Кхмерські цифри',
                    'kali': 'kali',
                    'jpanfin': 'Японські фінансові цифри',
                    'jpan': 'Японські цифри',
                    'java': 'java',
                    'hebr': 'Цифри івриту',
                    'hantfin': 'Китайські фінансові символи чисел (традиційне письмо)',
                    'hant': 'Китайські символи чисел (традиційне письмо)',
                    'hansfin': 'Китайські фінансові символи чисел (спрощене письмо)',
                    'hans': 'Китайські символи чисел (спрощене письмо)',
                    'hanidec': 'Китайські десяткові цифри',
                    'guru': 'Цифри гурмукхі',
                    'gujr': 'Цифри гуджараті',
                    'greklow': 'Грецькі малі цифри',
                    'grek': 'Грецькі цифри',
                    'bali': 'bali',
                    'armnlow': 'Вірменські малі цифри',
                    'armn': 'Вірменські цифри',
                    'arabext': 'Арабсько-індійські розширені цифри',
                    'arab': 'Арабсько-індійські цифри',
                    'finance': 'Фінансові символи чисел',
                    'traditional': 'Традиційні символи чисел',
                    'native': 'Місцеві цифри',
                    'beng': 'Бенгальські цифри',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Цифри деванагарі',
                    'orya': 'Цифри орія',
                    'osma': 'osma',
                    'roman': 'Римські цифри',
                    'romanlow': 'Римські малі цифри',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Цифри ваї',
                    'tibt': 'Тибетські цифри',
                    'thai': 'Тайські цифри',
                    'telu': 'Цифри телугу',
                    'tamldec': 'Тамільські цифри',
                    'taml': 'Тамільські традиційні цифри',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'М’янмські цифри',
                    'mtei': 'mtei',
                    'mong': 'Монгольські цифри',
                    'mlym': 'Малаяламські цифри',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Західні цифри',
                    'laoo': 'Лаоські цифри',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Грузинські цифри',
                    'fullwide': 'Цифри повної ширини',
                    'ethi': 'Ефіопські цифри'
                },
                'colAlternate': {
                    'non-ignorable': 'Сортувати за символами',
                    'shifted': 'Сортувати, ігноруючи символи'
                },
                'colBackwards': {
                    'no': 'Сортувати за діактричними знаками уніфіковано',
                    'yes': 'Сортувати за діактричними знаками у зворотньому порядку'
                }
            },
            'keys': {
                'colNormalization': 'Уніфіковане сортування',
                'collation': 'Порядок сортування',
                'colHiraganaQuaternary': 'Сортування кана',
                'colCaseLevel': 'Сортування з урахуванням регістру',
                'colCaseFirst': 'Упорядкування за великими/малими символами',
                'colBackwards': 'Зворотне сортування за діактричними знаками',
                'colAlternate': 'Ігнорувати сортування за символами',
                'calendar': 'Календар',
                'x': 'Особисте використання',
                'variableTop': 'Сортувати як символи',
                'va': 'Варіант мовного коду',
                'timezone': 'Часовий пояс',
                'numbers': 'Цифри',
                'currency': 'Валюта',
                'colStrength': 'Інтенсивність сортування',
                'colNumeric': 'Цифрове сортування'
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
                            'exemplarCity': 'Порт-Морсбі'
                        },
                        'Ponape': {
                            'exemplarCity': 'Понапе'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Піткерн'
                        },
                        'Palau': {
                            'exemplarCity': 'Палау'
                        },
                        'Auckland': {
                            'exemplarCity': 'Окленд'
                        },
                        'Apia': {
                            'exemplarCity': 'Апіа'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Фунафуті'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Галапагоські острови (Еквадор)'
                        },
                        'Gambier': {
                            'exemplarCity': 'Гамбер'
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
                            'exemplarCity': 'Уолліс'
                        },
                        'Wake': {
                            'exemplarCity': 'Вейк'
                        },
                        'Truk': {
                            'exemplarCity': 'Трук'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'Тонгатапу'
                        },
                        'Tarawa': {
                            'exemplarCity': 'Тарава'
                        },
                        'Tahiti': {
                            'exemplarCity': 'Таїті'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Кірітіматі'
                        },
                        'Johnston': {
                            'exemplarCity': 'Джонстон'
                        },
                        'Chatham': {
                            'exemplarCity': 'Чатем'
                        },
                        'Easter': {
                            'exemplarCity': 'Острів Пасхи'
                        },
                        'Efate': {
                            'exemplarCity': 'Ефате'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Ендербері'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Факаофо'
                        },
                        'Fiji': {
                            'exemplarCity': 'Фіджи'
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
                            'exemplarCity': 'Маркизькі о-ви'
                        },
                        'Midway': {
                            'exemplarCity': 'Мідуей'
                        },
                        'Nauru': {
                            'exemplarCity': 'Науру'
                        },
                        'Niue': {
                            'exemplarCity': 'Ніуе'
                        },
                        'Norfolk': {
                            'exemplarCity': 'Норфолк'
                        },
                        'Noumea': {
                            'exemplarCity': 'Нумеа'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'Паго Паго'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'Ліндеман'
                        },
                        'Hobart': {
                            'exemplarCity': 'Хобарт'
                        },
                        'Eucla': {
                            'exemplarCity': 'Евкла'
                        },
                        'Darwin': {
                            'exemplarCity': 'Дарвін'
                        },
                        'Sydney': {
                            'exemplarCity': 'Сідней'
                        },
                        'Perth': {
                            'exemplarCity': 'Перт'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Мельбурн'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Лорд-Хау'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Аделаїда'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Брисбен'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Брокен-Гіл'
                        },
                        'Currie': {
                            'exemplarCity': 'Каррі'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Мальдіви'
                        },
                        'Mahe': {
                            'exemplarCity': 'Махе'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Острів Кергелен'
                        },
                        'Reunion': {
                            'exemplarCity': 'Реюньйон'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Майорка'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Маврикій'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Антананаріву'
                        },
                        'Chagos': {
                            'exemplarCity': 'Чагос'
                        },
                        'Christmas': {
                            'exemplarCity': 'Острів Різдва'
                        },
                        'Cocos': {
                            'exemplarCity': 'Кокосові острови'
                        },
                        'Comoro': {
                            'exemplarCity': 'Коморо'
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
                            'exemplarCity': 'Невідоме місто'
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
                            'exemplarCity': 'Сьова'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Південний полюс'
                        },
                        'Casey': {
                            'exemplarCity': 'Кейсі'
                        },
                        'Davis': {
                            'exemplarCity': 'Девіс'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Дюмон-д\'Юрвіль'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Маккуорі'
                        },
                        'Mawson': {
                            'exemplarCity': 'Моусон'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Лонгербюйн'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'Торонто'
                        },
                        'Tijuana': {
                            'exemplarCity': 'Тіхуана'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'Тандер-Бей'
                        },
                        'Thule': {
                            'exemplarCity': 'Туле'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Тегусігальпа'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Свіфт-Каррент'
                        },
                        'Chicago': {
                            'exemplarCity': 'Чикаго'
                        },
                        'Cayman': {
                            'exemplarCity': 'Кайманові острови'
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
                            'exemplarCity': 'Кампу-Гранді'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Кембридж-Бей'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Буенос-Айрес'
                        },
                        'Boise': {
                            'exemplarCity': 'Бойсе'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Асунсьйон'
                        },
                        'Aruba': {
                            'exemplarCity': 'Аруба'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Ріо-Ґалеґос'
                            },
                            'San_Juan': {
                                'exemplarCity': 'Сан-Хуан'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ушуая'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'Ла-Ріоха'
                            },
                            'San_Luis': {
                                'exemplarCity': 'Сан-Луїс'
                            },
                            'Salta': {
                                'exemplarCity': 'Сальта'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Тукуман'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Арагуайна'
                        },
                        'Antigua': {
                            'exemplarCity': 'Антигуа'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Ангілья'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Анкоридж'
                        },
                        'Adak': {
                            'exemplarCity': 'Адак'
                        },
                        'Bahia': {
                            'exemplarCity': 'Байя'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Баїя Бандерас'
                        },
                        'Barbados': {
                            'exemplarCity': 'Барбадос'
                        },
                        'Belem': {
                            'exemplarCity': 'Белен'
                        },
                        'Belize': {
                            'exemplarCity': 'Беліз'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Бланк-Саблон'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Боа-Віста'
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
                            'exemplarCity': 'Доусон-Крік'
                        },
                        'Denver': {
                            'exemplarCity': 'Денвер'
                        },
                        'Detroit': {
                            'exemplarCity': 'Детройт'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Ермосільйо'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Вінсенс'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Петербург'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Телл-сіті'
                            },
                            'Knox': {
                                'exemplarCity': 'Нокс'
                            },
                            'Winamac': {
                                'exemplarCity': 'Вінамак'
                            },
                            'Marengo': {
                                'exemplarCity': 'Маренго'
                            },
                            'Vevay': {
                                'exemplarCity': 'Вівей'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Індіанаполіс'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Інувік'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Ікалуіт'
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
                            'exemplarCity': 'Єллоунайф'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Якутат'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Вінніпеґ'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Вайтгорс'
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
                                'exemplarCity': 'Монтичелло'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Гавана'
                        },
                        'Halifax': {
                            'exemplarCity': 'Галіфакс'
                        },
                        'Guyana': {
                            'exemplarCity': 'Гайана'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Гуаякіль'
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
                            'exemplarCity': 'Гранд-Терк'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Гуз-Бей'
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
                            'exemplarCity': 'Ейрунепе'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Едмонтон'
                        },
                        'Dominica': {
                            'exemplarCity': 'Домініка'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Чіуауа'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Корал-Харбор'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Кордоба'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Коста Ріка'
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
                            'exemplarCity': 'Ліма'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Лос-Анджелес'
                        },
                        'Louisville': {
                            'exemplarCity': 'Луїсвілль'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Лоуер-Принсес-Квотер'
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
                            'exemplarCity': 'Марігот'
                        },
                        'Martinique': {
                            'exemplarCity': 'Мартініка'
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
                            'exemplarCity': 'Меноміні'
                        },
                        'Merida': {
                            'exemplarCity': 'Меріда'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Метлакатла'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Мехіко'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Мікелон'
                        },
                        'Moncton': {
                            'exemplarCity': 'Монктон'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Монтерей'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Монтевідео'
                        },
                        'Montreal': {
                            'exemplarCity': 'Монреаль'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Монсерат'
                        },
                        'Nassau': {
                            'exemplarCity': 'Насау'
                        },
                        'New_York': {
                            'exemplarCity': 'Нью-Йорк'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Ніпігон'
                        },
                        'Nome': {
                            'exemplarCity': 'Ном'
                        },
                        'Noronha': {
                            'exemplarCity': 'Норонья'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Б’юла, Північна Дакота'
                            },
                            'New_Salem': {
                                'exemplarCity': 'Нью-Салем'
                            },
                            'Center': {
                                'exemplarCity': 'Центр'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Охінага'
                        },
                        'Panama': {
                            'exemplarCity': 'Панама'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Панґніртунґ'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Парамарібо'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Фінікс'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Порт-о-Пренс'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Порт-оф-Спейн'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Порто-Велью'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Пуерто Ріко'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Рейні-Рівер'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Ренкін-Інлет'
                        },
                        'Recife': {
                            'exemplarCity': 'Ресіфі'
                        },
                        'Regina': {
                            'exemplarCity': 'Реджайна'
                        },
                        'Resolute': {
                            'exemplarCity': 'Резолют'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Ріо-Бранко'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Санта-Ісабель'
                        },
                        'Santarem': {
                            'exemplarCity': 'Сантарен'
                        },
                        'Santiago': {
                            'exemplarCity': 'Сантьяго'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Санто-Домінго'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'Сан-Паулу'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Скорсбисун'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Шипрок'
                        },
                        'Sitka': {
                            'exemplarCity': 'Сітка'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'Сен-Бартельмі'
                        },
                        'St_Johns': {
                            'exemplarCity': 'Сент-Джонс'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Сент-Кітс і Невіс'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Сент-Лусія'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Сент-Томас'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Сент-Вінсент'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Південна Джорджія'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Рейк\'явік'
                        },
                        'Stanley': {
                            'exemplarCity': 'Стенлі'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Острів Святої Єлени'
                        },
                        'Azores': {
                            'exemplarCity': 'Азорські острови'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Бермуди'
                        },
                        'Canary': {
                            'exemplarCity': 'Канари'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Кабо-Верде'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Фарерські острови'
                        },
                        'Madeira': {
                            'exemplarCity': 'Мадейра'
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
                            'exemplarCity': 'Мінськ'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Маріегамн'
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
                                'daylight': 'за літнім часом у Великобританії'
                            },
                            'exemplarCity': 'Лондон'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Любляна'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Лісабон'
                        },
                        'Kiev': {
                            'exemplarCity': 'Київ'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Калінінград'
                        },
                        'Jersey': {
                            'exemplarCity': 'Джерсі'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Стамбул'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Острів Мен'
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
                            'exemplarCity': 'Берлін'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Белград'
                        },
                        'Athens': {
                            'exemplarCity': 'Афіни'
                        },
                        'Andorra': {
                            'exemplarCity': 'Андора'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Амстердам'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Сімферополь'
                        },
                        'Skopje': {
                            'exemplarCity': 'Скоп’є'
                        },
                        'Sofia': {
                            'exemplarCity': 'Софія'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Стокгольм'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Таллін'
                        },
                        'Tirane': {
                            'exemplarCity': 'Тірана'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ужгород'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Вадуц'
                        },
                        'Zurich': {
                            'exemplarCity': 'Цюріх'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Запоріжжя'
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
                            'exemplarCity': 'Вільнюс'
                        },
                        'Vienna': {
                            'exemplarCity': 'Відень'
                        },
                        'Vatican': {
                            'exemplarCity': 'Ватикан'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Сараєво'
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
                            'exemplarCity': 'Подгориця'
                        },
                        'Paris': {
                            'exemplarCity': 'Париж'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Гельсінкі'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Острів Гернсі'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Гібралтар'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'за літнім часом в Ірландії'
                            },
                            'exemplarCity': 'Дублін'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Копенгаген'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Кишинів'
                        },
                        'Busingen': {
                            'exemplarCity': 'Бюзінген'
                        },
                        'Budapest': {
                            'exemplarCity': 'Будапешт'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Лібревіль'
                        },
                        'Lagos': {
                            'exemplarCity': 'Лагос'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Кіншаса'
                        },
                        'Kigali': {
                            'exemplarCity': 'Кігалі'
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
                            'exemplarCity': 'Йоганнесбург'
                        },
                        'Harare': {
                            'exemplarCity': 'Хараре'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Габороне'
                        },
                        'Freetown': {
                            'exemplarCity': 'Фрітаун'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'Ель-Аюн'
                        },
                        'Douala': {
                            'exemplarCity': 'Дуала'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Джибуті'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Дар-ес-Салаам'
                        },
                        'Dakar': {
                            'exemplarCity': 'Дакар'
                        },
                        'Banjul': {
                            'exemplarCity': 'Банжул'
                        },
                        'Bangui': {
                            'exemplarCity': 'Бангі'
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
                            'exemplarCity': 'Могадішо'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Монровія'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Найробі'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Нджамена'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Віндхук'
                        },
                        'Tunis': {
                            'exemplarCity': 'м. Туніс'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Тріполі'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Сан-Томе і Принсіпі'
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
                            'exemplarCity': 'Ніамей'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Лусака'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Лубумбаші'
                        },
                        'Luanda': {
                            'exemplarCity': 'Луанда'
                        },
                        'Lome': {
                            'exemplarCity': 'Ломе'
                        },
                        'Conakry': {
                            'exemplarCity': 'Конакрі'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Сеута'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Касабланка'
                        },
                        'Cairo': {
                            'exemplarCity': 'Каїр'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Бужумбура'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Браззавіль'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Блантир'
                        },
                        'Bissau': {
                            'exemplarCity': 'Бісау'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Абіджан'
                        },
                        'Accra': {
                            'exemplarCity': 'Аккра'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Аддис-Абеба'
                        },
                        'Algiers': {
                            'exemplarCity': 'м. Алжир'
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
                            'exemplarCity': 'Сахалін'
                        },
                        'Saigon': {
                            'exemplarCity': 'Хошимін'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Ер-Ріяд'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Рангун'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Кзил-Орда'
                        },
                        'Qatar': {
                            'exemplarCity': 'Катар'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Пхеньян'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Понтіанак'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Пномпень'
                        },
                        'Oral': {
                            'exemplarCity': 'Орал'
                        },
                        'Omsk': {
                            'exemplarCity': 'Омськ'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Новосибірськ'
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
                            'exemplarCity': 'Дака'
                        },
                        'Dili': {
                            'exemplarCity': 'Ділі'
                        },
                        'Dubai': {
                            'exemplarCity': 'Дубаї'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Душанбе'
                        },
                        'Gaza': {
                            'exemplarCity': 'Газа'
                        },
                        'Harbin': {
                            'exemplarCity': 'Харбін'
                        },
                        'Hebron': {
                            'exemplarCity': 'Хеврон'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Гонконг'
                        },
                        'Hovd': {
                            'exemplarCity': 'Говд'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Іркутськ'
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
                            'exemplarCity': 'Урумчі'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Усть-Нера'
                        },
                        'Vientiane': {
                            'exemplarCity': 'В’єнтьян'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Владивосток'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Якутськ'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Єкатеринбург'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Єреван'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Токіо'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Тхімпху'
                        },
                        'Tehran': {
                            'exemplarCity': 'Тегеран'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Тбілісі'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Ташкент'
                        },
                        'Taipei': {
                            'exemplarCity': 'Тайпей'
                        },
                        'Singapore': {
                            'exemplarCity': 'Сингапур'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Єрусалим'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ашгабат'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Актобе'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Актау'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Анадир'
                        },
                        'Amman': {
                            'exemplarCity': 'Амман'
                        },
                        'Almaty': {
                            'exemplarCity': 'Алмати'
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
                            'exemplarCity': 'Бішкек'
                        },
                        'Brunei': {
                            'exemplarCity': 'Бруней'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Колката'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Чойбалсан'
                        },
                        'Kabul': {
                            'exemplarCity': 'Кабул'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Камчатка'
                        },
                        'Karachi': {
                            'exemplarCity': 'Карачі'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Кашгар'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Катманду'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Хандига'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Красноярськ'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Куала-Лумпур'
                        },
                        'Kuching': {
                            'exemplarCity': 'Кучінґ'
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
                            'exemplarCity': 'Маніла'
                        },
                        'Muscat': {
                            'exemplarCity': 'Маскат'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Нікосія'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Новокузнецьк'
                        }
                    }
                },
                'metazone': {
                    'Syowa': {
                        'long': {
                            'standard': 'за часом на станції Сева'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'за часом у Суринамі'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'за часом на острові Південна Джорджія'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'за часом на Соломонових островах'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'за часом у Сінгапурі'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'за часом на Сейшельських островах'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'за часом на острові Самоа',
                            'standard': 'за стандартним часом на острові Самоа',
                            'daylight': 'за літнім часом на острові Самоа'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'за самарським часом',
                            'standard': 'за самарським стандартним часом',
                            'daylight': 'за самарським літнім часом'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'за сахалін часом',
                            'standard': 'за сахалін стандартним часом',
                            'daylight': 'за сахалін літнім часом'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'за часом на станції Ротера'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'за часом на острові Реюньйон'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Час: Кизилорда',
                            'standard': 'Час: Кизилорда, стандартний',
                            'daylight': 'Час: Кизилорда, літній'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'за часом на острові Понапе'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'за часом на островах Піткерн'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'за часом на островах Сен-П’єр і Мікелон',
                            'standard': 'за стандартним часом на островах Сен-П’єр і Мікелон',
                            'daylight': 'за літнім часом на островах Сен-П’єр і Мікелон'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'за часом на островах Фенікс'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Час: Філіппіни',
                            'standard': 'Час: Філіппіни, стандартний',
                            'daylight': 'Час: Філіппіни, літній'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Час: Перу',
                            'standard': 'Час: Перу, стандартний',
                            'daylight': 'Час: Перу, літній'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Час: Парагвай',
                            'standard': 'Час: Парагвай, стандартний',
                            'daylight': 'Час: Парагвай, літній'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'за південноафриканським часом'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'за східноафриканським часом'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'за центральноафриканським часом'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'за часом в Афганістані'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Час: Акрі',
                            'standard': 'Час: Акрі, стандартний',
                            'daylight': 'Час: Акрі, літній'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'за північноамериканським центральним часом',
                            'standard': 'за північноамериканським центральним стандартним часом',
                            'daylight': 'за північноамериканським центральним літнім часом'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'за північноамериканським східним часом',
                            'standard': 'за північноамериканським східним стандартним часом',
                            'daylight': 'за північноамериканським східним літнім часом'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'за північноамериканським гірним часом',
                            'standard': 'за північноамериканським гірним стандартним часом',
                            'daylight': 'за північноамериканським гірним літнім часом'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'за північноамериканським тихоокеанським часом',
                            'standard': 'за північноамериканським тихоокеанським стандартним часом',
                            'daylight': 'за північноамериканським тихоокеанським літнім часом'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Час: Анадир',
                            'standard': 'Час: Анадир, стандартний',
                            'daylight': 'Час: Анадир, літній'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'за арабським часом',
                            'standard': 'за арабським стандартним часом',
                            'daylight': 'за арабським літнім часом'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Час: Аргентина',
                            'standard': 'Час: Аргентина, стандартний',
                            'daylight': 'Час: Аргентина, літній'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Час: Аргентина, західний',
                            'standard': 'Час: Аргентина, західний стандартний',
                            'daylight': 'Час: Аргентина, західний літній'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Час: Чилі',
                            'standard': 'Час: Чилі, стандартний',
                            'daylight': 'Час: Чилі, літній'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'за китайським часом',
                            'standard': 'за китайським стандартним часом',
                            'daylight': 'за китайським літнім часом'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Час: Чойбалсан',
                            'standard': 'Час: Чойбалсан, стандартний',
                            'daylight': 'Час: Чойбалсан, літній'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'за часом на острові Різдва'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'за часом на Кокосових островах'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Час: Колумбія',
                            'standard': 'Час: Колумбія, стандартний',
                            'daylight': 'Час: Колумбія, літній'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'за часом на островах Кука',
                            'standard': 'за стандартним часом на островах Кука',
                            'daylight': 'за літнім часом на островах Кука'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'за часом на Кубі',
                            'standard': 'за стандартним часом на Кубі',
                            'daylight': 'за літнім часом на Кубі'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Час: Девіс'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Час: Дюмон д’Юрвіль'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'за часом у Східному Тиморі'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'за часом на острові Пасхи',
                            'standard': 'за стандартним часом на острові Пасхи',
                            'daylight': 'за літнім часом на острові Пасхи'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Час: Еквадор'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'за центральноєвропейським часом',
                            'standard': 'за центральноєвропейським стандартним часом',
                            'daylight': 'за центральноєвропейським літнім часом'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'за східноєвропейським часом',
                            'standard': 'за східноєвропейським стандартним часом',
                            'daylight': 'за східноєвропейським літнім часом'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'за західноєвропейським часом',
                            'standard': 'за західноєвропейським стандартним часом',
                            'daylight': 'за західноєвропейським літнім часом'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'за часом на Фолклендських островах',
                            'standard': 'за стандартним часом на Фолклендських островах',
                            'daylight': 'за літнім часом на Фолклендських островах'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'за часом на островах Фіджі',
                            'standard': 'за стандартним часом на островах Фіджі',
                            'daylight': 'за літнім часом на островах Фіджі'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Час: Французька Гвіана'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'за часом на островах Токелау'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'за часом на островах Тонга',
                            'standard': 'за стандартним часом на островах Тонга',
                            'daylight': 'за літнім часом на островах Тонга'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'за часом на островах Чуук'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Час: Туркменістан',
                            'standard': 'Час: Туркменістан, стандартний',
                            'daylight': 'Час: Туркменістан, літній'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'за часом на островах Тувалу'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Час: Уругвай',
                            'standard': 'Час: Уругвай, стандартний',
                            'daylight': 'Час: Уругвай, літній'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Час: Узбекистан',
                            'standard': 'Час: Узбекистан, стандартний',
                            'daylight': 'Час: Узбекистан, літній'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'за часом на островах Вануату',
                            'standard': 'за стандартним часом на островах Вануату',
                            'daylight': 'за літнім часом на островах Вануату'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'за єкатеринбурзьким часом',
                            'standard': 'за єкатеринбурзьким стандартним часом',
                            'daylight': 'за єкатеринбурзьким літнім часом'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'за якутським часом',
                            'standard': 'за якутським стандартним часом',
                            'daylight': 'за якутським літнім часом'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'за часом на островах Волліс і Футуна'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'за часом на острові Вейк'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Час: Восток'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'за волгоградським часом',
                            'standard': 'за волгоградським стандартним часом',
                            'daylight': 'за волгоградським літнім часом'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'за владивостоцьким часом',
                            'standard': 'за владивостоцьким стандартним часом',
                            'daylight': 'за владивостоцьким літнім часом'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Час: Венесуела'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'за часом у Таджикистані'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Час: Тайбей',
                            'standard': 'Час: Тайбей, стандартний',
                            'daylight': 'Час: Тайбей, літній'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'за часом на острові Таїті'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'за часом у Гонконзі',
                            'standard': 'за стандартним часом у Гонконзі',
                            'daylight': 'за літнім часом у Гонконзі'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'за гавайсько-алеутським часом',
                            'standard': 'за стандартним гавайсько-алеутським часом',
                            'daylight': 'за літнім гавайсько-алеутським часом'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'за часом у Гаяні'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'за часом Перської затоки'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'за часом на острові Гуам'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'за західним часом у Гренландії',
                            'standard': 'за стандартним західним часом у Гренландії',
                            'daylight': 'за літнім західним часом у Гренландії'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'за східним часом у Гренландії',
                            'standard': 'за стандартним східним часом у Гренландії',
                            'daylight': 'за літнім східним часом у Гренландії'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'за Грінвічем'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'за часом на островах Гілберта'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'за часом у Грузії',
                            'standard': 'за стандартним часом у Грузії',
                            'daylight': 'за літнім часом у Грузії'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'за часом на острові Гамб’є'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'за часом на Галапагоських островах'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'за часом на Французьких Південних і Антарктичних територіях'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'за західноафриканським часом',
                            'standard': 'за західноафриканським стандартним часом',
                            'daylight': 'за західноафриканським літнім часом'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Час: Аляска',
                            'standard': 'Час: Аляска, стандартний',
                            'daylight': 'Час: Аляска, літній'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Час: Амазонка',
                            'standard': 'Час: Амазонка, стандартний',
                            'daylight': 'Час: Амазонка, літній'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'за вірменським часом',
                            'standard': 'за вірменським стандартним часом',
                            'daylight': 'за вірменським літнім часом'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'за атлантичним часом',
                            'standard': 'за атлантичним стандартним часом',
                            'daylight': 'за атлантичним літнім часом'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Час: Австралія, центральний',
                            'standard': 'Час: Австралія, центральний стандартний',
                            'daylight': 'Час: Австралія, центральний літній'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Час: Австралія, центрально-західний',
                            'standard': 'Час: Австралія, центрально-західний стандартний',
                            'daylight': 'Час: Австралія, центрально-західний літній'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Час: Австралія, східний',
                            'standard': 'Час: Австралія, східний стандартний',
                            'daylight': 'Час: Австралія, східний літній'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Час: Австралія, західний',
                            'standard': 'Час: Австралія, західний стандартний',
                            'daylight': 'Час: Австралія, західний літній'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'за часом в Азербайджані',
                            'standard': 'за стандартним часом в Азербайджані',
                            'daylight': 'за літнім часом в Азербайджані'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'за часом на Азорських островах',
                            'standard': 'за стандартним часом на Азорських островах',
                            'daylight': 'за літнім часом на Азорських островах'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'за часом у Бангладеш',
                            'standard': 'за стандартним часом у Бангладеш',
                            'daylight': 'за літнім часом у Бангладеш'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'за часом у Бутані'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Час: Болівія'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Час: Бразилія',
                            'standard': 'Час: Бразилія, стандартний',
                            'daylight': 'Час: Бразилія, літній'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'за часом у Брунеї'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'за часом на островах Кабо-Верде',
                            'standard': 'за стандартним часом на островах Кабо-Верде',
                            'daylight': 'за літнім часом на островах Кабо-Верде'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'за часом на Північних Маріанських островах'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'за часом на архіпелазі Чатем',
                            'standard': 'за стандартним часом на архіпелазі Чатем',
                            'daylight': 'за літнім часом на архіпелазі Чатем'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Час: Говд',
                            'standard': 'Час: Говд, стандартний',
                            'daylight': 'Час: Говд, літній'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'за індійським стандартним часом'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'за часом в Індійському Океані'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Час: Індокитай'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Час: Індонезія, центральний'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Час: Індонезія, східний'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Час: Індонезія, західний'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'за іранським часом',
                            'standard': 'за іранським стандартним часом',
                            'daylight': 'за іранським літнім часом'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'за іркутським часом',
                            'standard': 'за іркутським стандартним часом',
                            'daylight': 'за іркутським літнім часом'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'за ізраїльським часом',
                            'standard': 'за ізраїльським стандартним часом',
                            'daylight': 'за ізраїльським літнім часом'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'за японським часом',
                            'standard': 'за японським стандартним часом',
                            'daylight': 'за японським літнім часом'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'за камчатським часом',
                            'standard': 'за камчатським стандартним часом',
                            'daylight': 'за камчатським літнім часом'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Час: Казахстан, східний'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Час: Казахстан, західний'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'за корейським часом',
                            'standard': 'за корейським стандартним часом',
                            'daylight': 'за корейським літнім часом'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'за часом на острові Косрае'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'за красноярським часом',
                            'standard': 'за красноярським стандартним часом',
                            'daylight': 'за красноярським літнім часом'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Час: Киргизстан'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Час: Ланка'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'за часом на острові Лайн'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Час: Логд-Гоув',
                            'standard': 'Час: Лорд-Гоув, стандартний',
                            'daylight': 'Час: Лорд-Гоув, літній'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Час: Макквері'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'за магаданським часом',
                            'standard': 'за магаданським стандартним часом',
                            'daylight': 'за магаданським літнім часом'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Час: Малайзія'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'за часом на Мальдівах'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'за часом на Маркізьких островах'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'за часом на Маршалових островах'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'за часом на острові Маврикій',
                            'standard': 'за стандартним часом на острові Маврикій',
                            'daylight': 'за літнім часом на острові Маврикій'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'за часом на станції Моусон'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Час: Улан-Батор',
                            'standard': 'Час: Улан-Батор, стандартний',
                            'daylight': 'Час: Улан-Батор, літній'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'за московським часом',
                            'standard': 'за московським стандартним часом',
                            'daylight': 'за московським літнім часом'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'за часом у М’янмі'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'за часом на острові Науру'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'за часом у Непалі'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'за часом на островах Нової Каледонії',
                            'standard': 'за стандартним часом на островах Нової Каледонії',
                            'daylight': 'за літнім часом на островах Нової Каледонії'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Час: Нова Зеландія',
                            'standard': 'Час: Нова Зеландія, стандартний',
                            'daylight': 'Час: Нова Зеландія, літній'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Час: Ньюфаундленд',
                            'standard': 'Час: Ньюфаундленд, стандартний',
                            'daylight': 'Час: Ньюфаундленд, літній'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'за часом на острові Ніуе'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'за часом на острові Норфолк'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Час: Фернандо-де-Норонья',
                            'standard': 'Час: Фернандо-де-Норонья, стандартний',
                            'daylight': 'Час: Фернандо-де-Норонья, літній'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'за новосибірським часом',
                            'standard': 'за новосибірським стандартним часом',
                            'daylight': 'за новосибірським літнім часом'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'за омським часом',
                            'standard': 'за омським стандартним часом',
                            'daylight': 'за омським літнім часом'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'за часом у Пакистані',
                            'standard': 'за стандартним часом у Пакистані',
                            'daylight': 'за літнім часом у Пакистані'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'за часом на острові Палау'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'за часом на островах Папуа Нова Гвінея'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Час: {0}',
                'regionFormat-type-daylight': 'Час: {0}, літній',
                'regionFormat-type-standard': 'Час: {0}, стандартний',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'серп.',
                                '7': 'лип.',
                                '6': 'черв.',
                                '5': 'трав.',
                                '12': 'груд.',
                                '11': 'лист.',
                                '10': 'жовт.',
                                '9': 'вер.',
                                '1': 'січ.',
                                '2': 'лют.',
                                '3': 'бер.',
                                '4': 'квіт.'
                            },
                            'narrow': {
                                '8': 'С',
                                '7': 'Л',
                                '6': 'Ч',
                                '5': 'Т',
                                '12': 'Г',
                                '11': 'Л',
                                '10': 'Ж',
                                '9': 'В',
                                '1': 'С',
                                '2': 'Л',
                                '3': 'Б',
                                '4': 'К'
                            },
                            'wide': {
                                '8': 'серпня',
                                '7': 'липня',
                                '6': 'червня',
                                '5': 'травня',
                                '12': 'грудня',
                                '11': 'листопада',
                                '10': 'жовтня',
                                '9': 'вересня',
                                '1': 'січня',
                                '2': 'лютого',
                                '3': 'березня',
                                '4': 'квітня'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Сер',
                                '7': 'Лип',
                                '6': 'Чер',
                                '5': 'Тра',
                                '12': 'Гру',
                                '11': 'Лис',
                                '10': 'Жов',
                                '9': 'Вер',
                                '1': 'Січ',
                                '2': 'Лют',
                                '3': 'Бер',
                                '4': 'Кві'
                            },
                            'narrow': {
                                '8': 'С',
                                '7': 'Л',
                                '6': 'Ч',
                                '5': 'Т',
                                '12': 'Г',
                                '11': 'Л',
                                '10': 'Ж',
                                '9': 'В',
                                '1': 'С',
                                '2': 'Л',
                                '3': 'Б',
                                '4': 'К'
                            },
                            'wide': {
                                '8': 'Серпень',
                                '7': 'Липень',
                                '6': 'Червень',
                                '5': 'Травень',
                                '12': 'Грудень',
                                '11': 'Листопад',
                                '10': 'Жовтень',
                                '9': 'Вересень',
                                '1': 'Січень',
                                '2': 'Лютий',
                                '3': 'Березень',
                                '4': 'Квітень'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'Нд',
                                'mon': 'Пн',
                                'tue': 'Вт',
                                'wed': 'Ср',
                                'thu': 'Чт',
                                'fri': 'Пт',
                                'sat': 'Сб'
                            },
                            'narrow': {
                                'sun': 'Н',
                                'mon': 'П',
                                'tue': 'В',
                                'wed': 'С',
                                'thu': 'Ч',
                                'fri': 'П',
                                'sat': 'С'
                            },
                            'short': {
                                'sun': 'Нд',
                                'mon': 'Пн',
                                'tue': 'Вт',
                                'wed': 'Ср',
                                'thu': 'Чт',
                                'fri': 'Пт',
                                'sat': 'Сб'
                            },
                            'wide': {
                                'sun': 'неділя',
                                'mon': 'понеділок',
                                'tue': 'вівторок',
                                'wed': 'середа',
                                'thu': 'четвер',
                                'fri': 'пʼятниця',
                                'sat': 'субота'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Нд',
                                'mon': 'Пн',
                                'tue': 'Вт',
                                'wed': 'Ср',
                                'thu': 'Чт',
                                'fri': 'Пт',
                                'sat': 'Сб'
                            },
                            'narrow': {
                                'sun': 'Н',
                                'mon': 'П',
                                'tue': 'В',
                                'wed': 'С',
                                'thu': 'Ч',
                                'fri': 'П',
                                'sat': 'С'
                            },
                            'short': {
                                'sun': 'Нд',
                                'mon': 'Пн',
                                'tue': 'Вт',
                                'wed': 'Ср',
                                'thu': 'Чт',
                                'fri': 'Пт',
                                'sat': 'Сб'
                            },
                            'wide': {
                                'sun': 'Неділя',
                                'mon': 'Понеділок',
                                'tue': 'Вівторок',
                                'wed': 'Середа',
                                'thu': 'Четвер',
                                'fri': 'Пʼятниця',
                                'sat': 'Субота'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'I кв.',
                                '2': 'II кв.',
                                '3': 'III кв.',
                                '4': 'IV кв.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'I квартал',
                                '2': 'II квартал',
                                '3': 'III квартал',
                                '4': 'IV квартал'
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
                                'afternoon': 'дня',
                                'am': 'дп',
                                'evening': 'вечора',
                                'morning': 'ранку',
                                'night': 'ночі',
                                'pm': 'пп'
                            },
                            'narrow': {
                                'afternoon': 'дня',
                                'am': 'дп',
                                'evening': 'вечора',
                                'morning': 'ранку',
                                'night': 'ночі',
                                'pm': 'пп'
                            },
                            'wide': {
                                'afternoon': 'дня',
                                'am': 'дп',
                                'evening': 'вечора',
                                'morning': 'ранку',
                                'night': 'ночі',
                                'pm': 'пп'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': 'дня',
                                'am': 'дп',
                                'evening': 'вечора',
                                'morning': 'ранку',
                                'night': 'ночі',
                                'pm': 'пп'
                            },
                            'narrow': {
                                'afternoon': 'дня',
                                'am': 'дп',
                                'evening': 'вечора',
                                'morning': 'ранку',
                                'night': 'ночі',
                                'pm': 'пп'
                            },
                            'wide': {
                                'afternoon': 'дня',
                                'am': 'дп',
                                'evening': 'вечора',
                                'morning': 'ранку',
                                'night': 'ночі',
                                'pm': 'пп'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'до нашої ери',
                            '0-alt-variant': 'BCE',
                            '1': 'нашої ери',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'до н.е.',
                            '0-alt-variant': 'BCE',
                            '1': 'н.е.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'до н.е.',
                            '0-alt-variant': 'BCE',
                            '1': 'н.е.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y \'р\'.',
                        'long': 'd MMMM y \'р\'.',
                        'medium': 'd MMM y',
                        'short': 'dd.MM.yy'
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
                            'yMMM': 'LLL y',
                            'yMEd': 'E, dd.MM.y',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM.y',
                            'y': 'y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E, d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'HHmm': 'HH:mm',
                            'yQQQQ': 'QQQQ y \'р\'.',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM y',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'HHmmss': 'HH:mm:ss',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E, d MMMM',
                            'ms': 'mm:ss'
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
                                'd': 'E, d – E, d MMM',
                                'M': 'E, d MMM – E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MMM': {
                                'M': 'LLL–LLL'
                            },
                            'MEd': {
                                'd': 'E, dd.MM – E, dd.MM',
                                'M': 'E, dd.MM – E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM – dd.MM',
                                'M': 'dd.MM – dd.MM'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'MM.y – MM.y',
                                'y': 'MM.y – MM.y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y – dd.MM.y',
                                'M': 'dd.MM.y – dd.MM.y',
                                'y': 'dd.MM.y – dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y – E, dd.MM.y',
                                'M': 'E, dd.MM.y – E, dd.MM.y',
                                'y': 'E, dd.MM.y – E, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'LLL–LLL y',
                                'y': 'LLL y – LLL y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM – d MMM y',
                                'y': 'd MMM y – d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d – E, d MMM y',
                                'M': 'E, d MMM – E, d MMM y',
                                'y': 'E, d MMM y – E, d MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL – LLLL y',
                                'y': 'LLLL y – LLLL y'
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
                                'H': 'HH–HH'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'd': {
                                'd': 'd–d'
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
