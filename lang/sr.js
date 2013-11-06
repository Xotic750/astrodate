/* AstroDate Language: sr
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
        AstroDate.lang('sr', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'Сајпан'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'Раротонга'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'Порт Морзби'
                        },
                        'Ponape': {
                            'exemplarCity': 'Понапе'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Питкаирн'
                        },
                        'Palau': {
                            'exemplarCity': 'Палау'
                        },
                        'Auckland': {
                            'exemplarCity': 'Окланд'
                        },
                        'Apia': {
                            'exemplarCity': 'Апија'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Фунафути'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Галапагос'
                        },
                        'Gambier': {
                            'exemplarCity': 'Гамбије'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'Гвадалканал'
                        },
                        'Guam': {
                            'exemplarCity': 'Гуам'
                        },
                        'Honolulu': {
                            'exemplarCity': 'Хонолулу'
                        },
                        'Wallis': {
                            'exemplarCity': 'Валис'
                        },
                        'Wake': {
                            'exemplarCity': 'Вејк'
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
                            'exemplarCity': 'Тахити'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Киритимати'
                        },
                        'Johnston': {
                            'exemplarCity': 'Џонстон'
                        },
                        'Chatham': {
                            'exemplarCity': 'Катхам'
                        },
                        'Easter': {
                            'exemplarCity': 'Ускршње острво'
                        },
                        'Efate': {
                            'exemplarCity': 'Ефат'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Ендербери'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Факаофо'
                        },
                        'Fiji': {
                            'exemplarCity': 'Фиџи'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Кошре'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Кваџалејин'
                        },
                        'Majuro': {
                            'exemplarCity': 'Мајуро'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Маркиз'
                        },
                        'Midway': {
                            'exemplarCity': 'Мидвеј'
                        },
                        'Nauru': {
                            'exemplarCity': 'Науру'
                        },
                        'Niue': {
                            'exemplarCity': 'Ниуе'
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
                            'exemplarCity': 'Линдеман'
                        },
                        'Hobart': {
                            'exemplarCity': 'Хобарт'
                        },
                        'Eucla': {
                            'exemplarCity': 'Иукла'
                        },
                        'Darwin': {
                            'exemplarCity': 'Дарвин'
                        },
                        'Sydney': {
                            'exemplarCity': 'Сиднеј'
                        },
                        'Perth': {
                            'exemplarCity': 'Перт'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Мелбурн'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Лорд Хов'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Аделаида'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Бризбејн'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Брокен Хил'
                        },
                        'Currie': {
                            'exemplarCity': 'Курие'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Малдиви'
                        },
                        'Mahe': {
                            'exemplarCity': 'Махе'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Кергелен'
                        },
                        'Reunion': {
                            'exemplarCity': 'Реунион'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Мајот'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Маурицијус'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Антананариво'
                        },
                        'Chagos': {
                            'exemplarCity': 'Чагос'
                        },
                        'Christmas': {
                            'exemplarCity': 'Божић'
                        },
                        'Cocos': {
                            'exemplarCity': 'Кокос'
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
                            'exemplarCity': 'Непознат или неважећи град'
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
                            'exemplarCity': 'Макмурдо'
                        },
                        'Vostok': {
                            'exemplarCity': 'Восток'
                        },
                        'Syowa': {
                            'exemplarCity': 'Шова'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Јужни пол'
                        },
                        'Casey': {
                            'exemplarCity': 'Касеј'
                        },
                        'Davis': {
                            'exemplarCity': 'Дејвис'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Димон д’Урвил'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Меквори'
                        },
                        'Mawson': {
                            'exemplarCity': 'Мосон'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Лонгјербјен'
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
                            'exemplarCity': 'Тандер Беј'
                        },
                        'Thule': {
                            'exemplarCity': 'Туле'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Тегусигалпа'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Свифт Курент'
                        },
                        'Chicago': {
                            'exemplarCity': 'Чикаго'
                        },
                        'Cayman': {
                            'exemplarCity': 'Кајманска острва'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Кајен'
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
                            'exemplarCity': 'Кампо Гранде'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Кембриџ Беј'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Буенос Аирес'
                        },
                        'Boise': {
                            'exemplarCity': 'Бојзи'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Асунсион'
                        },
                        'Aruba': {
                            'exemplarCity': 'Аруба'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Рио Гелегос'
                            },
                            'San_Juan': {
                                'exemplarCity': 'Сан Хуан'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ушуаија'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'Ла Риоја'
                            },
                            'San_Luis': {
                                'exemplarCity': 'Сан Луи'
                            },
                            'Salta': {
                                'exemplarCity': 'Салта'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Тукуман'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Арагвајана'
                        },
                        'Antigua': {
                            'exemplarCity': 'Антигва'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Ангвила'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Енкориџ'
                        },
                        'Adak': {
                            'exemplarCity': 'Адак'
                        },
                        'Bahia': {
                            'exemplarCity': 'Бахиа'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Баија Бандерас'
                        },
                        'Barbados': {
                            'exemplarCity': 'Барбадос'
                        },
                        'Belem': {
                            'exemplarCity': 'Белем'
                        },
                        'Belize': {
                            'exemplarCity': 'Белизе'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Бланк-Сејблон'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Боа Виста'
                        },
                        'Bogota': {
                            'exemplarCity': 'Богота'
                        },
                        'Curacao': {
                            'exemplarCity': 'Кирасо'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'Данмарксхаген'
                        },
                        'Dawson': {
                            'exemplarCity': 'Досон'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'Досон Крик'
                        },
                        'Denver': {
                            'exemplarCity': 'Денвер'
                        },
                        'Detroit': {
                            'exemplarCity': 'Детроит'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Хермосиљо'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Винценес, Индијана'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Петерсбург, Индијана'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Тел Сити'
                            },
                            'Knox': {
                                'exemplarCity': 'Кнокс, Индијана'
                            },
                            'Winamac': {
                                'exemplarCity': 'Винамак, Индијана'
                            },
                            'Marengo': {
                                'exemplarCity': 'Маренго, Индијана'
                            },
                            'Vevay': {
                                'exemplarCity': 'Вевај, Индијана'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Индианаполис'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Инувик'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Иквалуит'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Јамајка'
                        },
                        'Jujuy': {
                            'exemplarCity': 'Жужуи'
                        },
                        'Juneau': {
                            'exemplarCity': 'Жуно'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'Јелоунајф'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Јакутат'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Винипег'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Вајтхорс'
                        },
                        'Vancouver': {
                            'exemplarCity': 'Ванкувер'
                        },
                        'Tortola': {
                            'exemplarCity': 'Тортола'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'Кралендајк'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'Монтичело, Кентаки'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Хавана'
                        },
                        'Halifax': {
                            'exemplarCity': 'Халифакс'
                        },
                        'Guyana': {
                            'exemplarCity': 'Гуана'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Гвајакил'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Гватемала'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Гвадалупе'
                        },
                        'Grenada': {
                            'exemplarCity': 'Гренада'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'Гранд Турк'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Гус Беј'
                        },
                        'Godthab': {
                            'exemplarCity': 'Готхаб'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'Глејс Беј'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'Форталеза'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'Салвадор'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Еирунепе'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Едмонтон'
                        },
                        'Dominica': {
                            'exemplarCity': 'Доминика'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Чихуахуа'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Корал Харбур'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Кордоба'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Костарика'
                        },
                        'Creston': {
                            'exemplarCity': 'Крестон'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Куиаба'
                        },
                        'La_Paz': {
                            'exemplarCity': 'Ла Паз'
                        },
                        'Lima': {
                            'exemplarCity': 'Лима'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Лос Анђелес'
                        },
                        'Louisville': {
                            'exemplarCity': 'Луивиле'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Лоуер Принсиз Квортер'
                        },
                        'Maceio': {
                            'exemplarCity': 'Масејо'
                        },
                        'Managua': {
                            'exemplarCity': 'Манагва'
                        },
                        'Manaus': {
                            'exemplarCity': 'Манаус'
                        },
                        'Marigot': {
                            'exemplarCity': 'Мариго'
                        },
                        'Martinique': {
                            'exemplarCity': 'Мартиник'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Матаморос'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Мазатлан'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Мендоза'
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
                            'exemplarCity': 'Мексико Сити'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Микелон'
                        },
                        'Moncton': {
                            'exemplarCity': 'Монктон'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Монтереј'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Монтевидео'
                        },
                        'Montreal': {
                            'exemplarCity': 'Монтреал'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Монтсерат'
                        },
                        'Nassau': {
                            'exemplarCity': 'Насау'
                        },
                        'New_York': {
                            'exemplarCity': 'Њујорк'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Нипигон'
                        },
                        'Nome': {
                            'exemplarCity': 'Ном'
                        },
                        'Noronha': {
                            'exemplarCity': 'Нороња'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Бијула, Северна Дакота'
                            },
                            'New_Salem': {
                                'exemplarCity': 'Нови Салем, Северна Даткоа'
                            },
                            'Center': {
                                'exemplarCity': 'Центар, Северна Дакота'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Охинага'
                        },
                        'Panama': {
                            'exemplarCity': 'Панама'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Пангниртунг'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Парамирбо'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Феникс'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Порт-о-Пренс'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Порт оф Спејн'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Порто Вељо'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Порто Рико'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Рејни Ривер'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Ранкин Инлет'
                        },
                        'Recife': {
                            'exemplarCity': 'Ресифе'
                        },
                        'Regina': {
                            'exemplarCity': 'Регина'
                        },
                        'Resolute': {
                            'exemplarCity': 'Ресолут'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Рио Бранко'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Санта Изабел'
                        },
                        'Santarem': {
                            'exemplarCity': 'Сантарем'
                        },
                        'Santiago': {
                            'exemplarCity': 'Сантијаго'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Санто Доминго'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'Сао Паоло'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Скорезбисунд'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Шипрок'
                        },
                        'Sitka': {
                            'exemplarCity': 'Ситка'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'Св. Бартоломeј'
                        },
                        'St_Johns': {
                            'exemplarCity': 'Св. Џон'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Сент Китс'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Св. Луција'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Св. Тома'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Сент Винсент'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Јужна Џорџија'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Рејкјавик'
                        },
                        'Stanley': {
                            'exemplarCity': 'Стенли'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Св. Јелена'
                        },
                        'Azores': {
                            'exemplarCity': 'Азори'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Бермуда'
                        },
                        'Canary': {
                            'exemplarCity': 'Канарска острва'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Зеленортска Острва'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Фарска острва'
                        },
                        'Madeira': {
                            'exemplarCity': 'Мадера'
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
                            'exemplarCity': 'Марихамн'
                        },
                        'Malta': {
                            'exemplarCity': 'Малта'
                        },
                        'Madrid': {
                            'exemplarCity': 'Мадрид'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Луксембург'
                        },
                        'London': {
                            'long': {
                                'daylight': 'британско летње време'
                            },
                            'exemplarCity': 'Лондон'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Љубљана'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Лисабон'
                        },
                        'Kiev': {
                            'exemplarCity': 'Кијев'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Калининград'
                        },
                        'Jersey': {
                            'exemplarCity': 'Џерси'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Истанбул'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Острво Ман'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Букурешт'
                        },
                        'Brussels': {
                            'exemplarCity': 'Брисел'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Братислава'
                        },
                        'Berlin': {
                            'exemplarCity': 'Берлин'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Београд'
                        },
                        'Athens': {
                            'exemplarCity': 'Атина'
                        },
                        'Andorra': {
                            'exemplarCity': 'Андора'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Амстердам'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Симферопол'
                        },
                        'Skopje': {
                            'exemplarCity': 'Скопље'
                        },
                        'Sofia': {
                            'exemplarCity': 'Софија'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Стокхолм'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Талин'
                        },
                        'Tirane': {
                            'exemplarCity': 'Тирана'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ужгород'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Вадуз'
                        },
                        'Zurich': {
                            'exemplarCity': 'Цирих'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Запорожје'
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
                            'exemplarCity': 'Виљнус'
                        },
                        'Vienna': {
                            'exemplarCity': 'Беч'
                        },
                        'Vatican': {
                            'exemplarCity': 'Ватикан'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Сарајево'
                        },
                        'San_Marino': {
                            'exemplarCity': 'Сан Марино'
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
                            'exemplarCity': 'Праг'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Подгорица'
                        },
                        'Paris': {
                            'exemplarCity': 'Париз'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Хелсинки'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Гернзи'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Гибралтар'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'ирско летње време'
                            },
                            'exemplarCity': 'Даблин'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Копенхаген'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Кишињев'
                        },
                        'Busingen': {
                            'exemplarCity': 'Бисинген'
                        },
                        'Budapest': {
                            'exemplarCity': 'Будимпешта'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Либревил'
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
                            'exemplarCity': 'Картум'
                        },
                        'Kampala': {
                            'exemplarCity': 'Кампала'
                        },
                        'Juba': {
                            'exemplarCity': 'Џуба'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Јоханесбург'
                        },
                        'Harare': {
                            'exemplarCity': 'Хараре'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Габорон'
                        },
                        'Freetown': {
                            'exemplarCity': 'Фритаун'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'Ел Ајун'
                        },
                        'Douala': {
                            'exemplarCity': 'Дуала'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Џибути'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Дар-ес-Салам'
                        },
                        'Dakar': {
                            'exemplarCity': 'Дакар'
                        },
                        'Banjul': {
                            'exemplarCity': 'Банжул'
                        },
                        'Bangui': {
                            'exemplarCity': 'Бангуи'
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
                            'exemplarCity': 'Мапуто'
                        },
                        'Maseru': {
                            'exemplarCity': 'Масеру'
                        },
                        'Mbabane': {
                            'exemplarCity': 'Мбабане'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'Могадиш'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Монровија'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Најроби'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Нџамена'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Виндхук'
                        },
                        'Tunis': {
                            'exemplarCity': 'тунижанско'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Триполи'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Сао Томе'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Порто Ново'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Уагадугу'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Навакшут'
                        },
                        'Niamey': {
                            'exemplarCity': 'Нијамеј'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Лусака'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Лумумбаши'
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
                            'exemplarCity': 'Казабланка'
                        },
                        'Cairo': {
                            'exemplarCity': 'Каиро'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Буџумбура'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Бразавил'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Блантир'
                        },
                        'Bissau': {
                            'exemplarCity': 'Бисао'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Абиџан'
                        },
                        'Accra': {
                            'exemplarCity': 'Акра'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Адис Абеба'
                        },
                        'Algiers': {
                            'exemplarCity': 'алжирско'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Шангај'
                        },
                        'Seoul': {
                            'exemplarCity': 'Сеул'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Самарканд'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Сахалин'
                        },
                        'Saigon': {
                            'exemplarCity': 'Хо Ши Мин'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Ријад'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Рангун'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Кизилорда'
                        },
                        'Qatar': {
                            'exemplarCity': 'Катар'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Пјонгјанг'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Понтианак'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Пном Пен'
                        },
                        'Oral': {
                            'exemplarCity': 'Орал'
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
                            'exemplarCity': 'Чонгкинг'
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
                            'exemplarCity': 'Дили'
                        },
                        'Dubai': {
                            'exemplarCity': 'Дубаи'
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
                            'exemplarCity': 'Хеброн'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Хонг Конг'
                        },
                        'Hovd': {
                            'exemplarCity': 'Ховд'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Иркуцк'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Џакарта'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Џајапура'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Улан Батор'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Урумкви'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Уст-Нера'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Вијентијан'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Владивосток'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Јакутск'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Јекатеринбург'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Јереван'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Токио'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Тимпу'
                        },
                        'Tehran': {
                            'exemplarCity': 'Техеран'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Тбилиси'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Ташкент'
                        },
                        'Taipei': {
                            'exemplarCity': 'Тајпеј'
                        },
                        'Singapore': {
                            'exemplarCity': 'Сингапур'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Јерусалим'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ашхабад'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Акутобе'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Актау'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Анадир'
                        },
                        'Amman': {
                            'exemplarCity': 'Аман'
                        },
                        'Almaty': {
                            'exemplarCity': 'Алмати'
                        },
                        'Aden': {
                            'exemplarCity': 'Аден'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Бахреин'
                        },
                        'Baku': {
                            'exemplarCity': 'Баку'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Банкок'
                        },
                        'Beirut': {
                            'exemplarCity': 'Бејрут'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Бишкек'
                        },
                        'Brunei': {
                            'exemplarCity': 'Брунеји'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Калкута'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Чојбалсан'
                        },
                        'Kabul': {
                            'exemplarCity': 'Кабул'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Камчатка'
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
                            'exemplarCity': 'Хандига'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Краснојарск'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Куала Лумпур'
                        },
                        'Kuching': {
                            'exemplarCity': 'Кучинг'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Кувајт'
                        },
                        'Macau': {
                            'exemplarCity': 'Макау'
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
                            'exemplarCity': 'Мускат'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Никозија'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Новокузњецк'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Сејшели време'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Самоа време',
                            'standard': 'Самоа стандардно време',
                            'daylight': 'Самоа летње рачунање времена'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Самара време',
                            'standard': 'Самара стандардно време',
                            'daylight': 'Самара летње рачунање времена'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Сахалин време',
                            'standard': 'Сахалин стандардно време',
                            'daylight': 'Сахалин летње рачунање времена'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Ротера време'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Реинион време'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Кизилорда време',
                            'standard': 'Кизилорда стандардно време',
                            'daylight': 'Кизилорда летње рачунање времена'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Понпеи време'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Питкерн време'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Сен Пјер и Микелон време',
                            'standard': 'Сен Пјер и Микелон стандардно време',
                            'daylight': 'Сен Пјер и Микелон летње рачунање времена'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Феникс острва време'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Филипини време',
                            'standard': 'Филипини стандардно време',
                            'daylight': 'Филипини летње рачунање времена'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Перу време',
                            'standard': 'Перу стандардно време',
                            'daylight': 'Перу летње рачунање времена'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Парагвај време',
                            'standard': 'Парагвај стандардно време',
                            'daylight': 'Парагвај летње рачунање времена'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Папуа Нова Гвинеја време'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Палау време'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Пакистан време',
                            'standard': 'Пакистан стандардно време',
                            'daylight': 'Пакистан летње рачунање времена'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Омск време',
                            'standard': 'Омск стандардно време',
                            'daylight': 'Омск летње рачунање времена'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Новосибирск време',
                            'standard': 'Новосибирск стандардно време',
                            'daylight': 'Новосибирск летње рачунање времена'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Северна Маријанска Острва време'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Фернандо де Нороња време',
                            'standard': 'Фернандо де Нороња стандардно време',
                            'daylight': 'Фернандо де Нороња летње рачунање времена'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Норфолк Острво време'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Ниуе време'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Њуфаундленд време',
                            'standard': 'Њуфаундленд стандардно време',
                            'daylight': 'Њуфаундленд летње рачунање времена'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Амазон време',
                            'standard': 'Амазон стандардно време',
                            'daylight': 'Амазон летње рачунање времена'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Северноамерички Централно време',
                            'standard': 'Северноамерички Централно стандардно време',
                            'daylight': 'Северноамерички Централно летње рачунање времена'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Северноамерички Источно време',
                            'standard': 'Северноамерички Источно стандардно време',
                            'daylight': 'Северноамерички Источно летње рачунање времена'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Северноамерички Планинско време',
                            'standard': 'Северноамерички Планинско стандардно време',
                            'daylight': 'Северноамерички Планинско летње рачунање времена'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Северноамерички Пацифичко време',
                            'standard': 'Северноамерички Пацифичко стандардно време',
                            'daylight': 'Северноамерички Пацифичко летње рачунање времена'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Анадир време',
                            'standard': 'Анадир стандардно време',
                            'daylight': 'Анадир летње рачунање времена'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Акватау време',
                            'standard': 'Акватау стандардно време',
                            'daylight': 'Акватау летње рачунање времена'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Акутобе време',
                            'standard': 'Акутобе стандардно време',
                            'daylight': 'Акутобе летње рачунање времена'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Зелениртско време',
                            'standard': 'Зелениртско стандардно време',
                            'daylight': 'Зеленортско летње рачунање времена'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Чаморо време'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Чатам време',
                            'standard': 'Чатам стандардно време',
                            'daylight': 'Чатам летње рачунање времена'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Чиле време',
                            'standard': 'Чиле стандардно време',
                            'daylight': 'Чиле летње рачунање времена'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Кина време',
                            'standard': 'Кинеско стандардно време',
                            'daylight': 'Кина летње рачунање времена'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Чојбалсан време',
                            'standard': 'Чојбалсан стандардно време',
                            'daylight': 'Чојбалсан летње рачунање времена'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Божићна острва време'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Кокос (Келинг) Острва време'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Колумбија време',
                            'standard': 'Колумбија стандардно време',
                            'daylight': 'Колумбија летње рачунање времена'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Кукова острва време',
                            'standard': 'Кукова острва стандардно време',
                            'daylight': 'Кукова острва полу-летње рачунање времена'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Куба време',
                            'standard': 'Куба стандардно време',
                            'daylight': 'Куба летње рачунање времена'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Дејвис време'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Димон д’Урвил време'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Источни тимор време'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Ускршња острва време',
                            'standard': 'Ускршња острва стандардно време',
                            'daylight': 'Ускршња острва летње рачунање времена'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Еквадор време'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Средњеевропско време',
                            'standard': 'Средњеевропско стандардно време',
                            'daylight': 'Средњеевропско летње рачунање времена'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Источноевропско време',
                            'standard': 'Источноевропско стандардно време',
                            'daylight': 'Источноевропско летње рачунање времена'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Западноевропско време',
                            'standard': 'Западноевропско стандардно време',
                            'daylight': 'Западноевропско летње рачунање времена'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Фолкландска Острва време',
                            'standard': 'Фолкландска Острва стандардно време',
                            'daylight': 'Фолкландска Острва летње рачунање времена'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Фиџи време',
                            'standard': 'Фиџи стандардно време',
                            'daylight': 'Фиџи летње рачунање времена'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Француска Гвајана време'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Француско јужно и антарктичко време'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Галапагос време'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Токелау време'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Тонга време',
                            'standard': 'Тонга стандардно време',
                            'daylight': 'Тонга летње рачунање времена'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Чуук време'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Туркменистан време',
                            'standard': 'Туркменистан стандардно време',
                            'daylight': 'Туркменистан летње рачунање времена'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Тувалу време'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Уругвај време',
                            'standard': 'Уругвај стандардно време',
                            'daylight': 'Уругвај летње рачунање времена'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Узбекистан време',
                            'standard': 'Узбекистан стандардно време',
                            'daylight': 'Узбекистан летње рачунање времена'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Вануату време',
                            'standard': 'Вануату стандардно време',
                            'daylight': 'Вануату летње рачунање времена'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Јекатеринбург време',
                            'standard': 'Јекатеринбург стандардно време',
                            'daylight': 'Јекатеринбург летње рачунање времена'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Јакутск време',
                            'standard': 'Јакутск стандардно време',
                            'daylight': 'Јакутск летње рачунање времена'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Валис и Футуна Острва време'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Вејк острво време'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Восток време'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Волгоград време',
                            'standard': 'Волгоград стандардно време',
                            'daylight': 'Волгоград летње рачунање времена'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Владивосток време',
                            'standard': 'Владивосток стандардно време',
                            'daylight': 'Владивосток летње рачунање времена'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Венецуела време'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Таџикистан време'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Таипеи време',
                            'standard': 'Таипеи стандардно време',
                            'daylight': 'Таипеи летње рачунање времена'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Тахити време'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Шова време'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Суринам'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Јужна Џорџија време'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Соломонска Острва време'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Сингапур стандардно време'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Залив време'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Гуам стандардно време'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Западни Гренланд време',
                            'standard': 'Западни Гренланд стандардно време',
                            'daylight': 'Западни Гренланд летње рачунање времена'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Источни Гренланд време',
                            'standard': 'Источни Гренланд стандардно време',
                            'daylight': 'Источни Гренланд летње рачунање времена'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Гринвич средње време'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Гилберт острва време'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Грузија време',
                            'standard': 'Грузија стандардно време',
                            'daylight': 'Грузија летње рачунање времена'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Гамбијер време'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Акре време',
                            'standard': 'Акре стандардно време',
                            'daylight': 'Акре летње рачунање времена'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Авганистан време'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Централно-афричко време'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Источно-афричко време'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Јужно-афричко време'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Западно-афричко време',
                            'standard': 'Западно-афричко стандардно време',
                            'daylight': 'Западно-афричко летње рачунање времена'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Аљашко време',
                            'standard': 'Аљашко стандардно време',
                            'daylight': 'Аљашко летње време'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Алмати време',
                            'standard': 'Алмати стандардно време',
                            'daylight': 'Алмати летње рачунање времена'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Арабијско време',
                            'standard': 'Арабијско стандардно време',
                            'daylight': 'Арабијско летње рачунање времена'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Аргентина време',
                            'standard': 'Аргентина стандардно време',
                            'daylight': 'Аргентина летње рачунање времена'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Западна Аргентина време',
                            'standard': 'Западна Аргентина стандардно време',
                            'daylight': 'Западна Аргентина летње рачунање времена'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Арменија време',
                            'standard': 'Арменија стандардно време',
                            'daylight': 'Арменија летње рачунање времена'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Атланско време',
                            'standard': 'Атланско стандардно време',
                            'daylight': 'Атланско лтње рачунање времена'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Аустралијско централно време',
                            'standard': 'Аустралијско централно стандардно време',
                            'daylight': 'Аустралијско централно летње рачунање времена'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Аустралијско централно западно време',
                            'standard': 'Аустралијско централно западно стандардно време',
                            'daylight': 'Аустралијско централно западно летње рачунање времена'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Аустралијско источно време',
                            'standard': 'Аустралијско источно стандардно време',
                            'daylight': 'Аустралијско источно летње рачунање времена'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Аустралијско западно време',
                            'standard': 'Аустралијско западно стандардно време',
                            'daylight': 'Аустралијско западно летње рачунање времена'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Азербејџан време',
                            'standard': 'Азербејџан стандардно време',
                            'daylight': 'Азербејџан летње рачунање времена'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Азори време',
                            'standard': 'Азори стандардно време',
                            'daylight': 'Азори летње рачунање времена'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Бангладеш време',
                            'standard': 'Бангладеш стандардно време',
                            'daylight': 'Бангладеш летње рачунање времена'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Бутан време'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Боливија време'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Бразилија време',
                            'standard': 'Бразилија стандардно време',
                            'daylight': 'Бразилија летње рачунање времена'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Брунеј Дарусалум време'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Гвајана време'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Хавајско-алеутско време',
                            'standard': 'Хавајско-алеутско стандардно време',
                            'daylight': 'Хавајско-алеутско летње рачунање времена'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Хонг Конг време',
                            'standard': 'Хонг Конг стандардно време',
                            'daylight': 'Хонг Конг летње рачунање времена'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Ховд време',
                            'standard': 'Ховд стандардно време',
                            'daylight': 'Ховд летње рачунање времена'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Индијско стандардно време'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Индијско океанско време'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Индокина време'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Централно-индонезијско време'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Источно-индонезијско време'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Западно-индонезијско време'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Иран време',
                            'standard': 'Иран стандардно време',
                            'daylight': 'Иран летње рачунање времена'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Иркуцк време',
                            'standard': 'Иркуцк стандардно време',
                            'daylight': 'Иркуцк летње рачунање времена'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Израелско време',
                            'standard': 'Израелско стандардно време',
                            'daylight': 'Израелско летње рачунање времена'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Јапанско време',
                            'standard': 'Јапанско стандардно време',
                            'daylight': 'Јапанско летње рачунање времена'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Петропавловско-камчатско време',
                            'standard': 'Петропавловско-камчатско стандардно време',
                            'daylight': 'Петропавловско-камчатско летње рачунање времена'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Источно-казахстанско време'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Западно-казахстанско време'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Корејско време',
                            'standard': 'Корејско стандардно време',
                            'daylight': 'Корејско летње рачунање времена'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Кошре време'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Краснојарск време',
                            'standard': 'Краснојарск стандардно време',
                            'daylight': 'Краснојарск летње рачунање времена'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Киргизстан време'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Шри Ланка време'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Лине Острва време'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Лорд Хов време',
                            'standard': 'Лорд Хов стандардно време',
                            'daylight': 'Лорд Хов летње рачунање времена'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Макао време',
                            'standard': 'Макао стандардно време',
                            'daylight': 'Макао летње рачунање времена'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Макверијско време'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Магадан време',
                            'standard': 'Магадан стандардно време',
                            'daylight': 'Магадан летње рачунање времена'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Малезија време'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Малдиви време'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Маркиз време'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Маршалска Острва време'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Маурицијус време',
                            'standard': 'Маурицијус стандардно време',
                            'daylight': 'Маурицијус летње рачунање времена'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Мосон време'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Улан Батор време',
                            'standard': 'Улан Батор стандардно време',
                            'daylight': 'Улан Батор летње рачунање времена'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Москва време',
                            'standard': 'Москва стандардно време',
                            'daylight': 'Москва летње рачунање времена'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Мијанмар време'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Науру време'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Непал време'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Нова Каледонија време',
                            'standard': 'Нова Каледонија стандардно време',
                            'daylight': 'Нова Каледонија летње рачунање времена'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Нови Зеланд време',
                            'standard': 'Нови Зеланд стандардно време',
                            'daylight': 'Нови Зеланд летње рачунање времена'
                        }
                    }
                },
                'hourFormat': '+HHmm;-HHmm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Време у земљи: {0}',
                'regionFormat-type-daylight': '{0}, летње време',
                'regionFormat-type-standard': '{0}, стандардно време',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'авг',
                                '7': 'јул',
                                '6': 'јун',
                                '5': 'мај',
                                '12': 'дец',
                                '11': 'нов',
                                '10': 'окт',
                                '9': 'сеп',
                                '1': 'јан',
                                '2': 'феб',
                                '3': 'мар',
                                '4': 'апр'
                            },
                            'narrow': {
                                '8': 'а',
                                '7': 'ј',
                                '6': 'ј',
                                '5': 'м',
                                '12': 'д',
                                '11': 'н',
                                '10': 'о',
                                '9': 'с',
                                '1': 'ј',
                                '2': 'ф',
                                '3': 'м',
                                '4': 'а'
                            },
                            'wide': {
                                '8': 'август',
                                '7': 'јул',
                                '6': 'јун',
                                '5': 'мај',
                                '12': 'децембар',
                                '11': 'новембар',
                                '10': 'октобар',
                                '9': 'септембар',
                                '1': 'јануар',
                                '2': 'фебруар',
                                '3': 'март',
                                '4': 'април'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'авг',
                                '7': 'јул',
                                '6': 'јун',
                                '5': 'мај',
                                '12': 'дец',
                                '11': 'нов',
                                '10': 'окт',
                                '9': 'сеп',
                                '1': 'јан',
                                '2': 'феб',
                                '3': 'мар',
                                '4': 'апр'
                            },
                            'narrow': {
                                '8': 'а',
                                '7': 'ј',
                                '6': 'ј',
                                '5': 'м',
                                '12': 'д',
                                '11': 'н',
                                '10': 'о',
                                '9': 'с',
                                '1': 'ј',
                                '2': 'ф',
                                '3': 'м',
                                '4': 'а'
                            },
                            'wide': {
                                '8': 'август',
                                '7': 'јул',
                                '6': 'јун',
                                '5': 'мај',
                                '12': 'децембар',
                                '11': 'новембар',
                                '10': 'октобар',
                                '9': 'септембар',
                                '1': 'јануар',
                                '2': 'фебруар',
                                '3': 'март',
                                '4': 'април'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'нед',
                                'mon': 'пон',
                                'tue': 'уто',
                                'wed': 'сре',
                                'thu': 'чет',
                                'fri': 'пет',
                                'sat': 'суб'
                            },
                            'narrow': {
                                'sun': 'н',
                                'mon': 'п',
                                'tue': 'у',
                                'wed': 'с',
                                'thu': 'ч',
                                'fri': 'п',
                                'sat': 'с'
                            },
                            'short': {
                                'sun': 'нед',
                                'mon': 'пон',
                                'tue': 'уто',
                                'wed': 'сре',
                                'thu': 'чет',
                                'fri': 'пет',
                                'sat': 'суб'
                            },
                            'wide': {
                                'sun': 'недеља',
                                'mon': 'понедељак',
                                'tue': 'уторак',
                                'wed': 'среда',
                                'thu': 'четвртак',
                                'fri': 'петак',
                                'sat': 'субота'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'нед',
                                'mon': 'пон',
                                'tue': 'уто',
                                'wed': 'сре',
                                'thu': 'чет',
                                'fri': 'пет',
                                'sat': 'суб'
                            },
                            'narrow': {
                                'sun': 'н',
                                'mon': 'п',
                                'tue': 'у',
                                'wed': 'с',
                                'thu': 'ч',
                                'fri': 'п',
                                'sat': 'с'
                            },
                            'short': {
                                'sun': 'не',
                                'mon': 'по',
                                'tue': 'ут',
                                'wed': 'ср',
                                'thu': 'че',
                                'fri': 'пе',
                                'sat': 'су'
                            },
                            'wide': {
                                'sun': 'недеља',
                                'mon': 'понедељак',
                                'tue': 'уторак',
                                'wed': 'среда',
                                'thu': 'четвртак',
                                'fri': 'петак',
                                'sat': 'субота'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'К1',
                                '2': 'К2',
                                '3': 'К3',
                                '4': 'К4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': 'Прво тромесечје',
                                '2': 'Друго тромесечје',
                                '3': 'Треће тромесечје',
                                '4': 'Четврто тромесечје'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'К1',
                                '2': 'К2',
                                '3': 'К3',
                                '4': 'К4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': 'Прво тромесечје',
                                '2': 'Друго тромесечје',
                                '3': 'Треће тромесечје',
                                '4': 'Четврто тромесечје'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'пре подне',
                                'pm': 'поподне'
                            },
                            'narrow': {
                                'am': 'пре подне',
                                'pm': 'поподне'
                            },
                            'wide': {
                                'am': 'пре подне',
                                'pm': 'поподне'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'пре подне',
                                'pm': 'поподне'
                            },
                            'narrow': {
                                'am': 'пре подне',
                                'pm': 'поподне'
                            },
                            'wide': {
                                'am': 'пре подне',
                                'pm': 'поподне'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Пре нове ере',
                            '0-alt-variant': 'BCE',
                            '1': 'Нове ере',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'п. н. е.',
                            '0-alt-variant': 'BCE',
                            '1': 'н. е.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'п.н.е.',
                            '0-alt-variant': 'BCE',
                            '1': 'н.е.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, dd. MMMM y.',
                        'long': 'dd. MMMM y.',
                        'medium': 'dd.MM.y.',
                        'short': 'd.M.yy.'
                    },
                    'timeFormats': {
                        'full': 'HH.mm.ss zzzz',
                        'long': 'HH.mm.ss z',
                        'medium': 'HH.mm.ss',
                        'short': 'HH.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMEd': 'E, d. M. y.',
                            'yMd': 'd. M. y.',
                            'yM': 'y-M',
                            'y': 'y.',
                            'ms': 'mm.ss',
                            'MMMMEd': 'E d. MMMM',
                            'MMMMdd': 'dd. MMMM',
                            'MMMMd': 'd. MMMM',
                            'GyMMMd': 'd. MMM y. G',
                            'GyMMMEd': 'E, d. MMM y. G',
                            'h': 'hh a',
                            'H': 'HH',
                            'hm': 'hh.mm a',
                            'Hm': 'HH.mm',
                            'hms': 'hh.mm.ss a',
                            'Hms': 'HH.mm.ss',
                            'yQQQQ': 'QQQQ. y',
                            'yQQQ': 'QQQ. y',
                            'yMMMM': 'MMMM y.',
                            'yMMMEd': 'E, d. MMM y.',
                            'yMMMd': 'd. MMM y.',
                            'yMMM': 'MMM y.',
                            'yMMdd': 'dd.MM.y',
                            'yMM': 'MM.y',
                            'd': 'd',
                            'Ed': 'E d.',
                            'Ehm': 'E, h:mm a',
                            'EHm': 'E, HH:mm',
                            'Ehms': 'E, h:mm:ss a',
                            'EHms': 'E, HH:mm:ss',
                            'Gy': 'y. G',
                            'GyMMM': 'MMM y. G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, M-d',
                            'MMdd': 'MM-dd',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMdd': 'dd.MMM',
                            'MMMEd': 'E d. MMM'
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
                                'd': 'dd.-dd. MMM',
                                'M': 'dd. MMM - dd. MMM'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'MEd': {
                                'd': 'E, d.M - E, d.M',
                                'M': 'E, d.M - E, d.M'
                            },
                            'Md': {
                                'd': 'd.M - d.M',
                                'M': 'd.M - d.M'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'HH-HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yM': {
                                'M': 'y M - M',
                                'y': 'y M - M'
                            },
                            'yMd': {
                                'd': 'd.M.y. - d.M.y.',
                                'M': 'd.M.y. - d.M.y.',
                                'y': 'd.M.y. - d.M.y.'
                            },
                            'yMEd': {
                                'd': 'E, d.M.y. - E, d.M.y.',
                                'M': 'E, d.M.y. - E, d.M.y.',
                                'y': 'E, d.M.y. - E, d.M.y.'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y.',
                                'y': 'MMM y. - MMM y.'
                            },
                            'yMMMd': {
                                'd': 'dd.-dd. MMM y.',
                                'M': 'dd. MMM - dd. MMM y.',
                                'y': 'dd. MMM y. - dd. MMM y.'
                            },
                            'yMMMEd': {
                                'd': 'E, dd. - E, dd. MMM y.',
                                'M': 'E, dd. MMM - E, dd. MMM y.',
                                'y': 'E, dd. MMM y. - E, dd. MMM y.'
                            },
                            'yMMMM': {
                                'M': 'y-MM – MM',
                                'y': 'y-MM – y-MM'
                            },
                            'Hmv': {
                                'H': 'HH.mm-HH.mm v',
                                'm': 'HH.mm-HH.mm v'
                            },
                            'hmv': {
                                'a': 'h.mm a - h.mm a v',
                                'h': 'h.mm-h.mm a v',
                                'm': 'h.mm-h.mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm-HH.mm',
                                'm': 'HH.mm-HH.mm'
                            },
                            'hm': {
                                'a': 'h.mm a - h.mm a',
                                'h': 'h.mm-h.mm a',
                                'm': 'h.mm-h.mm a'
                            },
                            'H': {
                                'H': 'HH-HH'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
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
