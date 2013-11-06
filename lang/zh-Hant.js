/* AstroDate Language: zh-Hant
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
        AstroDate.lang('zh-Hant', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '塞班'
                        },
                        'Rarotonga': {
                            'exemplarCity': '拉羅湯加'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '莫士比港'
                        },
                        'Ponape': {
                            'exemplarCity': '波納佩'
                        },
                        'Pitcairn': {
                            'exemplarCity': '匹特開恩群島'
                        },
                        'Palau': {
                            'exemplarCity': '帛琉'
                        },
                        'Auckland': {
                            'exemplarCity': '奧克蘭'
                        },
                        'Apia': {
                            'exemplarCity': '阿皮亞'
                        },
                        'Funafuti': {
                            'exemplarCity': '富那富提'
                        },
                        'Galapagos': {
                            'exemplarCity': '加拉巴哥群島'
                        },
                        'Gambier': {
                            'exemplarCity': '甘比爾群島'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '瓜達康納爾島'
                        },
                        'Guam': {
                            'exemplarCity': '關島'
                        },
                        'Honolulu': {
                            'exemplarCity': '檀香山'
                        },
                        'Wallis': {
                            'exemplarCity': '瓦利斯'
                        },
                        'Wake': {
                            'exemplarCity': '威克'
                        },
                        'Truk': {
                            'exemplarCity': '楚克'
                        },
                        'Tongatapu': {
                            'exemplarCity': '東加塔布島'
                        },
                        'Tarawa': {
                            'exemplarCity': '塔拉瓦'
                        },
                        'Tahiti': {
                            'exemplarCity': '大溪地'
                        },
                        'Kiritimati': {
                            'exemplarCity': '基里地馬地島'
                        },
                        'Johnston': {
                            'exemplarCity': '強斯頓'
                        },
                        'Chatham': {
                            'exemplarCity': '查坦'
                        },
                        'Easter': {
                            'exemplarCity': '復活島'
                        },
                        'Efate': {
                            'exemplarCity': '埃法特'
                        },
                        'Enderbury': {
                            'exemplarCity': '恩得伯理島'
                        },
                        'Fakaofo': {
                            'exemplarCity': '法考福'
                        },
                        'Fiji': {
                            'exemplarCity': '斐濟'
                        },
                        'Kosrae': {
                            'exemplarCity': '科斯瑞'
                        },
                        'Kwajalein': {
                            'exemplarCity': '瓜加林島'
                        },
                        'Majuro': {
                            'exemplarCity': '馬朱諾'
                        },
                        'Marquesas': {
                            'exemplarCity': '馬可薩斯島'
                        },
                        'Midway': {
                            'exemplarCity': '中途島'
                        },
                        'Nauru': {
                            'exemplarCity': '諾魯'
                        },
                        'Niue': {
                            'exemplarCity': '紐埃'
                        },
                        'Norfolk': {
                            'exemplarCity': '諾福克'
                        },
                        'Noumea': {
                            'exemplarCity': '諾美亞'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '巴哥巴哥'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '林德曼'
                        },
                        'Hobart': {
                            'exemplarCity': '荷巴特'
                        },
                        'Eucla': {
                            'exemplarCity': '尤克拉'
                        },
                        'Darwin': {
                            'exemplarCity': '達爾文'
                        },
                        'Sydney': {
                            'exemplarCity': '雪梨'
                        },
                        'Perth': {
                            'exemplarCity': '伯斯'
                        },
                        'Melbourne': {
                            'exemplarCity': '墨爾本'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '豪勳爵島'
                        },
                        'Adelaide': {
                            'exemplarCity': '阿得雷德'
                        },
                        'Brisbane': {
                            'exemplarCity': '布利斯班'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '布羅肯希爾'
                        },
                        'Currie': {
                            'exemplarCity': '克黎'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '馬爾地夫'
                        },
                        'Mahe': {
                            'exemplarCity': '馬埃島'
                        },
                        'Kerguelen': {
                            'exemplarCity': '凱爾蓋朗島'
                        },
                        'Reunion': {
                            'exemplarCity': '留尼旺島'
                        },
                        'Mayotte': {
                            'exemplarCity': '馬約特島'
                        },
                        'Mauritius': {
                            'exemplarCity': '模里西斯'
                        },
                        'Antananarivo': {
                            'exemplarCity': '安塔那那利佛'
                        },
                        'Chagos': {
                            'exemplarCity': '查戈斯'
                        },
                        'Christmas': {
                            'exemplarCity': '聖誕島'
                        },
                        'Cocos': {
                            'exemplarCity': '科科斯群島'
                        },
                        'Comoro': {
                            'exemplarCity': '科摩羅群島'
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
                            'exemplarCity': '未知城市'
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
                            'exemplarCity': '羅瑟拉'
                        },
                        'Palmer': {
                            'exemplarCity': '帕麥'
                        },
                        'McMurdo': {
                            'exemplarCity': '麥克默多'
                        },
                        'Vostok': {
                            'exemplarCity': '莫斯托克'
                        },
                        'Syowa': {
                            'exemplarCity': '昭和'
                        },
                        'South_Pole': {
                            'exemplarCity': '南極'
                        },
                        'Casey': {
                            'exemplarCity': '凱西'
                        },
                        'Davis': {
                            'exemplarCity': '戴維斯'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '杜蒙杜爾維爾'
                        },
                        'Macquarie': {
                            'exemplarCity': '麥覺理'
                        },
                        'Mawson': {
                            'exemplarCity': '莫森'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '隆意耳拜恩'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '多倫多'
                        },
                        'Tijuana': {
                            'exemplarCity': '提華納'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '珊德灣'
                        },
                        'Thule': {
                            'exemplarCity': '杜里'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '德古斯加巴'
                        },
                        'Swift_Current': {
                            'exemplarCity': '斯威夫特卡倫特'
                        },
                        'Chicago': {
                            'exemplarCity': '芝加哥'
                        },
                        'Cayman': {
                            'exemplarCity': '開曼群島'
                        },
                        'Cayenne': {
                            'exemplarCity': '開雲'
                        },
                        'Catamarca': {
                            'exemplarCity': '卡塔馬卡'
                        },
                        'Caracas': {
                            'exemplarCity': '卡拉卡斯'
                        },
                        'Cancun': {
                            'exemplarCity': '康庫'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '格蘭場'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '劍橋灣'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '布宜諾斯艾利斯'
                        },
                        'Boise': {
                            'exemplarCity': '波夕'
                        },
                        'Asuncion': {
                            'exemplarCity': '亞松森'
                        },
                        'Aruba': {
                            'exemplarCity': '阿魯巴'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '里奧加耶戈斯'
                            },
                            'San_Juan': {
                                'exemplarCity': '聖胡安'
                            },
                            'Ushuaia': {
                                'exemplarCity': '烏斯懷亞'
                            },
                            'La_Rioja': {
                                'exemplarCity': '拉略哈'
                            },
                            'San_Luis': {
                                'exemplarCity': '聖路易'
                            },
                            'Salta': {
                                'exemplarCity': '薩爾塔'
                            },
                            'Tucuman': {
                                'exemplarCity': '吐庫曼'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '阿拉圭那'
                        },
                        'Antigua': {
                            'exemplarCity': '安地卡'
                        },
                        'Anguilla': {
                            'exemplarCity': '安吉拉'
                        },
                        'Anchorage': {
                            'exemplarCity': '安克拉治'
                        },
                        'Adak': {
                            'exemplarCity': '艾達克'
                        },
                        'Bahia': {
                            'exemplarCity': '巴伊阿'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '巴伊亞班德拉斯'
                        },
                        'Barbados': {
                            'exemplarCity': '巴貝多'
                        },
                        'Belem': {
                            'exemplarCity': '貝倫'
                        },
                        'Belize': {
                            'exemplarCity': '貝里斯'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '白朗薩布隆'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '保維斯塔'
                        },
                        'Bogota': {
                            'exemplarCity': '波哥大'
                        },
                        'Curacao': {
                            'exemplarCity': '庫拉索'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '丹馬沙文'
                        },
                        'Dawson': {
                            'exemplarCity': '道生河'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '道生灣'
                        },
                        'Denver': {
                            'exemplarCity': '丹佛'
                        },
                        'Detroit': {
                            'exemplarCity': '底特律'
                        },
                        'Hermosillo': {
                            'exemplarCity': '埃莫西約'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '印第安那州溫森斯'
                            },
                            'Petersburg': {
                                'exemplarCity': '彼得堡，印第安那州'
                            },
                            'Tell_City': {
                                'exemplarCity': '印第安那州泰爾城'
                            },
                            'Knox': {
                                'exemplarCity': '印第安那州諾克斯'
                            },
                            'Winamac': {
                                'exemplarCity': '威納麥克，印第安那州'
                            },
                            'Marengo': {
                                'exemplarCity': '印第安那州馬倫哥'
                            },
                            'Vevay': {
                                'exemplarCity': '印第安那州維威'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '印第安那波里斯'
                        },
                        'Inuvik': {
                            'exemplarCity': '伊奴維克'
                        },
                        'Iqaluit': {
                            'exemplarCity': '伊魁特'
                        },
                        'Jamaica': {
                            'exemplarCity': '牙買加'
                        },
                        'Jujuy': {
                            'exemplarCity': '胡胡伊'
                        },
                        'Juneau': {
                            'exemplarCity': '朱諾'
                        },
                        'Yellowknife': {
                            'exemplarCity': '耶洛奈夫'
                        },
                        'Yakutat': {
                            'exemplarCity': '雅庫塔'
                        },
                        'Winnipeg': {
                            'exemplarCity': '溫尼伯'
                        },
                        'Whitehorse': {
                            'exemplarCity': '懷特霍斯'
                        },
                        'Vancouver': {
                            'exemplarCity': '溫哥華'
                        },
                        'Tortola': {
                            'exemplarCity': '托爾托拉'
                        },
                        'Kralendijk': {
                            'exemplarCity': '克拉倫代克'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '肯塔基州蒙地卻羅'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '哈瓦那'
                        },
                        'Halifax': {
                            'exemplarCity': '哈里法克斯'
                        },
                        'Guyana': {
                            'exemplarCity': '圭亞那'
                        },
                        'Guayaquil': {
                            'exemplarCity': '瓜亞基爾'
                        },
                        'Guatemala': {
                            'exemplarCity': '瓜地馬拉'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '瓜德羅普'
                        },
                        'Grenada': {
                            'exemplarCity': '格瑞納達'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '大特克島'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '鵝灣'
                        },
                        'Godthab': {
                            'exemplarCity': '努克'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '格雷斯貝'
                        },
                        'Fortaleza': {
                            'exemplarCity': '福塔力莎'
                        },
                        'El_Salvador': {
                            'exemplarCity': '薩爾瓦多'
                        },
                        'Eirunepe': {
                            'exemplarCity': '艾魯內佩'
                        },
                        'Edmonton': {
                            'exemplarCity': '艾德蒙吞'
                        },
                        'Dominica': {
                            'exemplarCity': '多明尼加'
                        },
                        'Chihuahua': {
                            'exemplarCity': '奇華華'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '阿蒂科肯'
                        },
                        'Cordoba': {
                            'exemplarCity': '哥多華'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '哥斯大黎加'
                        },
                        'Creston': {
                            'exemplarCity': '克雷斯頓'
                        },
                        'Cuiaba': {
                            'exemplarCity': '古雅巴'
                        },
                        'La_Paz': {
                            'exemplarCity': '拉巴斯'
                        },
                        'Lima': {
                            'exemplarCity': '利馬'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '洛杉磯'
                        },
                        'Louisville': {
                            'exemplarCity': '路易斯維爾'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '下太子區'
                        },
                        'Maceio': {
                            'exemplarCity': '馬瑟歐'
                        },
                        'Managua': {
                            'exemplarCity': '馬那瓜'
                        },
                        'Manaus': {
                            'exemplarCity': '瑪瑙斯'
                        },
                        'Marigot': {
                            'exemplarCity': '馬里戈特'
                        },
                        'Martinique': {
                            'exemplarCity': '馬丁尼克'
                        },
                        'Matamoros': {
                            'exemplarCity': '馬塔莫羅斯'
                        },
                        'Mazatlan': {
                            'exemplarCity': '馬薩特蘭'
                        },
                        'Mendoza': {
                            'exemplarCity': '門多薩'
                        },
                        'Menominee': {
                            'exemplarCity': '美諾米尼'
                        },
                        'Merida': {
                            'exemplarCity': '梅里達'
                        },
                        'Metlakatla': {
                            'exemplarCity': '梅特拉卡特拉'
                        },
                        'Mexico_City': {
                            'exemplarCity': '墨西哥市'
                        },
                        'Miquelon': {
                            'exemplarCity': '密啟崙'
                        },
                        'Moncton': {
                            'exemplarCity': '蒙克頓'
                        },
                        'Monterrey': {
                            'exemplarCity': '蒙特瑞'
                        },
                        'Montevideo': {
                            'exemplarCity': '蒙特維多'
                        },
                        'Montreal': {
                            'exemplarCity': '蒙特婁'
                        },
                        'Montserrat': {
                            'exemplarCity': '蒙賽拉特'
                        },
                        'Nassau': {
                            'exemplarCity': '拿索'
                        },
                        'New_York': {
                            'exemplarCity': '紐約'
                        },
                        'Nipigon': {
                            'exemplarCity': '尼皮岡'
                        },
                        'Nome': {
                            'exemplarCity': '諾姆'
                        },
                        'Noronha': {
                            'exemplarCity': '諾倫哈'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '北達科他州布由拉'
                            },
                            'New_Salem': {
                                'exemplarCity': '北達科他州紐沙倫'
                            },
                            'Center': {
                                'exemplarCity': '申特城'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '奧希納加'
                        },
                        'Panama': {
                            'exemplarCity': '巴拿馬'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '潘尼爾東'
                        },
                        'Paramaribo': {
                            'exemplarCity': '巴拉馬利波'
                        },
                        'Phoenix': {
                            'exemplarCity': '鳳凰城'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '太子港'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '西班牙港'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '維留港'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '波多黎各'
                        },
                        'Rainy_River': {
                            'exemplarCity': '雨河鎮'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '蘭今灣'
                        },
                        'Recife': {
                            'exemplarCity': '雷西非'
                        },
                        'Regina': {
                            'exemplarCity': '里賈納'
                        },
                        'Resolute': {
                            'exemplarCity': '羅斯魯特'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '里約布蘭'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '聖伊薩貝爾'
                        },
                        'Santarem': {
                            'exemplarCity': '聖塔倫'
                        },
                        'Santiago': {
                            'exemplarCity': '聖地牙哥'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '聖多明哥'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '聖保羅'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '伊托科爾托米特'
                        },
                        'Shiprock': {
                            'exemplarCity': '船岩峰'
                        },
                        'Sitka': {
                            'exemplarCity': '錫特卡'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '聖巴托洛繆島'
                        },
                        'St_Johns': {
                            'exemplarCity': '聖約翰'
                        },
                        'St_Kitts': {
                            'exemplarCity': '聖基茨'
                        },
                        'St_Lucia': {
                            'exemplarCity': '聖露西亞'
                        },
                        'St_Thomas': {
                            'exemplarCity': '聖托馬斯'
                        },
                        'St_Vincent': {
                            'exemplarCity': '聖文森'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '南喬治亞'
                        },
                        'Reykjavik': {
                            'exemplarCity': '雷克雅維克'
                        },
                        'Stanley': {
                            'exemplarCity': '史坦利'
                        },
                        'St_Helena': {
                            'exemplarCity': '聖赫勒拿島'
                        },
                        'Azores': {
                            'exemplarCity': '亞速爾群島'
                        },
                        'Bermuda': {
                            'exemplarCity': '百慕達'
                        },
                        'Canary': {
                            'exemplarCity': '加納利'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '維德角'
                        },
                        'Faeroe': {
                            'exemplarCity': '法羅群島'
                        },
                        'Madeira': {
                            'exemplarCity': '馬得拉群島'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '奧斯陸'
                        },
                        'Moscow': {
                            'exemplarCity': '莫斯科'
                        },
                        'Monaco': {
                            'exemplarCity': '摩納哥'
                        },
                        'Minsk': {
                            'exemplarCity': '明斯克'
                        },
                        'Mariehamn': {
                            'exemplarCity': '瑪麗港'
                        },
                        'Malta': {
                            'exemplarCity': '馬爾他'
                        },
                        'Madrid': {
                            'exemplarCity': '馬德里'
                        },
                        'Luxembourg': {
                            'exemplarCity': '盧森堡'
                        },
                        'London': {
                            'long': {
                                'daylight': '英國夏令時間'
                            },
                            'exemplarCity': '倫敦'
                        },
                        'Ljubljana': {
                            'exemplarCity': '盧比安納'
                        },
                        'Lisbon': {
                            'exemplarCity': '里斯本'
                        },
                        'Kiev': {
                            'exemplarCity': '基輔'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '加里寧格勒'
                        },
                        'Jersey': {
                            'exemplarCity': '澤西島'
                        },
                        'Istanbul': {
                            'exemplarCity': '伊斯坦堡'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '曼島'
                        },
                        'Bucharest': {
                            'exemplarCity': '布加勒斯特'
                        },
                        'Brussels': {
                            'exemplarCity': '布魯塞爾'
                        },
                        'Bratislava': {
                            'exemplarCity': '布拉提斯拉瓦'
                        },
                        'Berlin': {
                            'exemplarCity': '柏林'
                        },
                        'Belgrade': {
                            'exemplarCity': '貝爾格勒'
                        },
                        'Athens': {
                            'exemplarCity': '雅典'
                        },
                        'Andorra': {
                            'exemplarCity': '安道爾'
                        },
                        'Amsterdam': {
                            'exemplarCity': '阿姆斯特丹'
                        },
                        'Simferopol': {
                            'exemplarCity': '辛非洛浦'
                        },
                        'Skopje': {
                            'exemplarCity': '史高比耶'
                        },
                        'Sofia': {
                            'exemplarCity': '索菲亞'
                        },
                        'Stockholm': {
                            'exemplarCity': '斯德哥爾摩'
                        },
                        'Tallinn': {
                            'exemplarCity': '塔林'
                        },
                        'Tirane': {
                            'exemplarCity': '地拉那'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '烏茲哥洛'
                        },
                        'Vaduz': {
                            'exemplarCity': '瓦都茲'
                        },
                        'Zurich': {
                            'exemplarCity': '蘇黎世'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '札波羅結'
                        },
                        'Zagreb': {
                            'exemplarCity': '札格雷布'
                        },
                        'Warsaw': {
                            'exemplarCity': '華沙'
                        },
                        'Volgograd': {
                            'exemplarCity': '伏爾加格勒'
                        },
                        'Vilnius': {
                            'exemplarCity': '維爾紐斯'
                        },
                        'Vienna': {
                            'exemplarCity': '維也納'
                        },
                        'Vatican': {
                            'exemplarCity': '梵蒂岡'
                        },
                        'Sarajevo': {
                            'exemplarCity': '塞拉耶佛'
                        },
                        'San_Marino': {
                            'exemplarCity': '聖馬利諾'
                        },
                        'Samara': {
                            'exemplarCity': '沙馬拉'
                        },
                        'Rome': {
                            'exemplarCity': '羅馬'
                        },
                        'Riga': {
                            'exemplarCity': '里加'
                        },
                        'Prague': {
                            'exemplarCity': '布拉格'
                        },
                        'Podgorica': {
                            'exemplarCity': '波多里察'
                        },
                        'Paris': {
                            'exemplarCity': '巴黎'
                        },
                        'Helsinki': {
                            'exemplarCity': '赫爾辛基'
                        },
                        'Guernsey': {
                            'exemplarCity': '根息島'
                        },
                        'Gibraltar': {
                            'exemplarCity': '直布羅陀'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '愛爾蘭夏令時間'
                            },
                            'exemplarCity': '都柏林'
                        },
                        'Copenhagen': {
                            'exemplarCity': '哥本哈根'
                        },
                        'Chisinau': {
                            'exemplarCity': '奇西瑙'
                        },
                        'Busingen': {
                            'exemplarCity': '布辛根'
                        },
                        'Budapest': {
                            'exemplarCity': '布達佩斯'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '自由市'
                        },
                        'Lagos': {
                            'exemplarCity': '拉哥斯'
                        },
                        'Kinshasa': {
                            'exemplarCity': '金夏沙'
                        },
                        'Kigali': {
                            'exemplarCity': '基加利'
                        },
                        'Khartoum': {
                            'exemplarCity': '喀土穆'
                        },
                        'Kampala': {
                            'exemplarCity': '坎帕拉'
                        },
                        'Juba': {
                            'exemplarCity': '朱巴'
                        },
                        'Johannesburg': {
                            'exemplarCity': '約翰尼斯堡'
                        },
                        'Harare': {
                            'exemplarCity': '哈拉雷'
                        },
                        'Gaborone': {
                            'exemplarCity': '嘉柏隆里'
                        },
                        'Freetown': {
                            'exemplarCity': '自由城'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '阿尤恩'
                        },
                        'Douala': {
                            'exemplarCity': '杜阿拉'
                        },
                        'Djibouti': {
                            'exemplarCity': '吉布地'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '沙蘭港'
                        },
                        'Dakar': {
                            'exemplarCity': '達喀爾'
                        },
                        'Banjul': {
                            'exemplarCity': '班竹'
                        },
                        'Bangui': {
                            'exemplarCity': '班吉'
                        },
                        'Bamako': {
                            'exemplarCity': '巴馬科'
                        },
                        'Asmera': {
                            'exemplarCity': '阿斯瑪拉'
                        },
                        'Malabo': {
                            'exemplarCity': '馬拉博'
                        },
                        'Maputo': {
                            'exemplarCity': '馬普托'
                        },
                        'Maseru': {
                            'exemplarCity': '馬賽魯'
                        },
                        'Mbabane': {
                            'exemplarCity': '墨巴本'
                        },
                        'Mogadishu': {
                            'exemplarCity': '摩加迪休'
                        },
                        'Monrovia': {
                            'exemplarCity': '蒙羅維亞'
                        },
                        'Nairobi': {
                            'exemplarCity': '奈洛比'
                        },
                        'Ndjamena': {
                            'exemplarCity': '恩賈梅納'
                        },
                        'Windhoek': {
                            'exemplarCity': '溫得和克'
                        },
                        'Tunis': {
                            'exemplarCity': '突尼斯'
                        },
                        'Tripoli': {
                            'exemplarCity': '的黎波里'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '聖多美'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '波多諾佛'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '瓦加杜古'
                        },
                        'Nouakchott': {
                            'exemplarCity': '諾克少'
                        },
                        'Niamey': {
                            'exemplarCity': '尼亞美'
                        },
                        'Lusaka': {
                            'exemplarCity': '路沙卡'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '盧本巴希'
                        },
                        'Luanda': {
                            'exemplarCity': '羅安達'
                        },
                        'Lome': {
                            'exemplarCity': '洛美'
                        },
                        'Conakry': {
                            'exemplarCity': '柯那克里'
                        },
                        'Ceuta': {
                            'exemplarCity': '休達'
                        },
                        'Casablanca': {
                            'exemplarCity': '卡薩布蘭卡'
                        },
                        'Cairo': {
                            'exemplarCity': '開羅'
                        },
                        'Bujumbura': {
                            'exemplarCity': '布松布拉'
                        },
                        'Brazzaville': {
                            'exemplarCity': '布拉柴維爾'
                        },
                        'Blantyre': {
                            'exemplarCity': '布蘭太爾'
                        },
                        'Bissau': {
                            'exemplarCity': '比紹'
                        },
                        'Abidjan': {
                            'exemplarCity': '阿比讓'
                        },
                        'Accra': {
                            'exemplarCity': '阿克拉'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '阿迪斯阿貝巴'
                        },
                        'Algiers': {
                            'exemplarCity': '阿爾及爾'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '上海'
                        },
                        'Seoul': {
                            'exemplarCity': '首爾'
                        },
                        'Samarkand': {
                            'exemplarCity': '撒馬爾罕'
                        },
                        'Sakhalin': {
                            'exemplarCity': '庫頁島'
                        },
                        'Saigon': {
                            'exemplarCity': '胡志明市'
                        },
                        'Riyadh': {
                            'exemplarCity': '利雅德'
                        },
                        'Rangoon': {
                            'exemplarCity': '仰光'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '克孜勒奧爾達'
                        },
                        'Qatar': {
                            'exemplarCity': '卡達'
                        },
                        'Pyongyang': {
                            'exemplarCity': '平壤'
                        },
                        'Pontianak': {
                            'exemplarCity': '坤甸'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '金邊'
                        },
                        'Oral': {
                            'exemplarCity': '烏拉爾'
                        },
                        'Omsk': {
                            'exemplarCity': '鄂木斯克'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '新西伯利亞'
                        },
                        'Baghdad': {
                            'exemplarCity': '巴格達'
                        },
                        'Chongqing': {
                            'exemplarCity': '重慶'
                        },
                        'Colombo': {
                            'exemplarCity': '可倫坡'
                        },
                        'Damascus': {
                            'exemplarCity': '大馬士革'
                        },
                        'Dhaka': {
                            'exemplarCity': '達卡'
                        },
                        'Dili': {
                            'exemplarCity': '帝力'
                        },
                        'Dubai': {
                            'exemplarCity': '杜拜'
                        },
                        'Dushanbe': {
                            'exemplarCity': '杜桑貝'
                        },
                        'Gaza': {
                            'exemplarCity': '加薩'
                        },
                        'Harbin': {
                            'exemplarCity': '哈爾濱'
                        },
                        'Hebron': {
                            'exemplarCity': '赫布隆'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '中華人民共和國香港特別行政區'
                        },
                        'Hovd': {
                            'exemplarCity': '科布多'
                        },
                        'Irkutsk': {
                            'exemplarCity': '伊爾庫次克'
                        },
                        'Jakarta': {
                            'exemplarCity': '雅加達'
                        },
                        'Jayapura': {
                            'exemplarCity': '加亞布拉'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '烏蘭巴托'
                        },
                        'Urumqi': {
                            'exemplarCity': '烏魯木齊'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '烏斯內拉'
                        },
                        'Vientiane': {
                            'exemplarCity': '永珍'
                        },
                        'Vladivostok': {
                            'exemplarCity': '海參崴'
                        },
                        'Yakutsk': {
                            'exemplarCity': '雅庫次克'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '葉卡捷林堡'
                        },
                        'Yerevan': {
                            'exemplarCity': '葉里溫'
                        },
                        'Tokyo': {
                            'exemplarCity': '東京'
                        },
                        'Thimphu': {
                            'exemplarCity': '廷布'
                        },
                        'Tehran': {
                            'exemplarCity': '德黑蘭'
                        },
                        'Tbilisi': {
                            'exemplarCity': '第比利斯'
                        },
                        'Tashkent': {
                            'exemplarCity': '塔什干'
                        },
                        'Taipei': {
                            'exemplarCity': '台北'
                        },
                        'Singapore': {
                            'exemplarCity': '新加坡'
                        },
                        'Jerusalem': {
                            'exemplarCity': '耶路撒冷'
                        },
                        'Ashgabat': {
                            'exemplarCity': '阿什哈巴特'
                        },
                        'Aqtobe': {
                            'exemplarCity': '阿克托比'
                        },
                        'Aqtau': {
                            'exemplarCity': '阿克套'
                        },
                        'Anadyr': {
                            'exemplarCity': '阿那底'
                        },
                        'Amman': {
                            'exemplarCity': '安曼'
                        },
                        'Almaty': {
                            'exemplarCity': '阿拉木圖'
                        },
                        'Aden': {
                            'exemplarCity': '亞丁'
                        },
                        'Bahrain': {
                            'exemplarCity': '巴林'
                        },
                        'Baku': {
                            'exemplarCity': '巴庫'
                        },
                        'Bangkok': {
                            'exemplarCity': '曼谷'
                        },
                        'Beirut': {
                            'exemplarCity': '貝魯特'
                        },
                        'Bishkek': {
                            'exemplarCity': '比什凱克'
                        },
                        'Brunei': {
                            'exemplarCity': '汶萊'
                        },
                        'Calcutta': {
                            'exemplarCity': '加爾各答'
                        },
                        'Choibalsan': {
                            'exemplarCity': '喬巴山'
                        },
                        'Kabul': {
                            'exemplarCity': '喀布爾'
                        },
                        'Kamchatka': {
                            'exemplarCity': '堪察加'
                        },
                        'Karachi': {
                            'exemplarCity': '喀拉蚩'
                        },
                        'Kashgar': {
                            'exemplarCity': '喀什米爾'
                        },
                        'Katmandu': {
                            'exemplarCity': '加德滿都'
                        },
                        'Khandyga': {
                            'exemplarCity': '堪地加'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '克拉斯諾雅斯克'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '吉隆坡'
                        },
                        'Kuching': {
                            'exemplarCity': '古晉'
                        },
                        'Kuwait': {
                            'exemplarCity': '科威特'
                        },
                        'Macau': {
                            'exemplarCity': '中華人民共和國澳門特別行政區'
                        },
                        'Magadan': {
                            'exemplarCity': '馬加丹'
                        },
                        'Makassar': {
                            'exemplarCity': '馬卡沙爾'
                        },
                        'Manila': {
                            'exemplarCity': '馬尼拉'
                        },
                        'Muscat': {
                            'exemplarCity': '阿曼'
                        },
                        'Nicosia': {
                            'exemplarCity': '尼古西亞'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '新庫茲涅茨克'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '薩摩亞時間',
                            'standard': '薩摩亞標準時間',
                            'daylight': '薩摩亞夏令時間'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '薩馬拉時間',
                            'standard': '薩馬拉標準時間',
                            'daylight': '薩馬拉夏令時間'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '庫頁島時間',
                            'standard': '庫頁島標準時間',
                            'daylight': '庫頁島夏令時間'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '羅西拉時間'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '留尼旺時間'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '克孜勒奧爾達時間',
                            'standard': '克孜勒奧爾達標準時間',
                            'daylight': '克孜勒奧爾達夏令時間'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '波納佩時間'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '皮特康時間'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '聖皮埃爾和密克隆群島時間',
                            'standard': '聖皮埃爾和密克隆群島標準時間',
                            'daylight': '聖皮埃爾和密克隆群島夏令時間'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '鳳凰群島時間'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '菲律賓時間',
                            'standard': '菲律賓標準時間',
                            'daylight': '菲律賓夏令時間'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '秘魯時間',
                            'standard': '秘魯標準時間',
                            'daylight': '秘魯夏令時間'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '巴拉圭時間',
                            'standard': '巴拉圭標準時間',
                            'daylight': '巴拉圭夏令時間'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '巴布亞紐幾內亞時間'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '帛琉時間'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '巴基斯坦時間',
                            'standard': '巴基斯坦標準時間',
                            'daylight': '巴基斯坦夏令時間'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '鄂木斯科時間',
                            'standard': '鄂木斯克標準時間',
                            'daylight': '鄂木斯克夏令時間'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '新西伯利亞時間',
                            'standard': '新西伯利亞標準時間',
                            'daylight': '新西伯利亞夏令時間'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '北馬里亞納群島時間'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '費爾南多 - 迪諾羅尼亞時間',
                            'standard': '費爾南多 - 迪諾羅尼亞標準時間',
                            'daylight': '費爾南多 - 迪諾羅尼亞夏令時間'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '諾福克島時間'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '紐威島時間'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '紐芬蘭時間',
                            'standard': '紐芬蘭標準時間',
                            'daylight': '紐芬蘭夏令時間'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '紐西蘭時間',
                            'standard': '紐西蘭標準時間',
                            'daylight': '紐西蘭夏令時間'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '新喀里多尼亞時間',
                            'standard': '新喀里多尼亞標準時間',
                            'daylight': '新喀里多尼亞群島夏令時間'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '中部時間',
                            'standard': '中部標準時間',
                            'daylight': '中部夏令時間'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '東部時間',
                            'standard': '東部標準時間',
                            'daylight': '東部夏令時間'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '山區時間',
                            'standard': '山區標準時間',
                            'daylight': '山區夏令時間'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '太平洋時間',
                            'standard': '太平洋標準時間',
                            'daylight': '太平洋夏令時間'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '阿納德爾時間',
                            'standard': '阿那底河標準時間',
                            'daylight': '阿那底河夏令時間'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '阿克陶時間',
                            'standard': '阿克陶標準時間',
                            'daylight': '阿克陶夏令時間'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '阿克托比時間',
                            'standard': '阿克托比標準時間',
                            'daylight': '阿克托比夏令時間'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '維德角時間',
                            'standard': '維德角標準時間',
                            'daylight': '維德角夏令時間'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '凱西站時間'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '查莫洛時間'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '查坦群島時間',
                            'standard': '查坦群島標準時間',
                            'daylight': '查坦群島夏令時間'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '智利時間',
                            'standard': '智利標準時間',
                            'daylight': '智利夏令時間'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '中國時間',
                            'standard': '中國標準時間',
                            'daylight': '中國夏令時間'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '喬巴山時間',
                            'standard': '喬巴山標準時間',
                            'daylight': '喬巴山夏令時間'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '聖誕島時間'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '可可斯群島時間'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '哥倫比亞時間',
                            'standard': '哥倫比亞標準時間',
                            'daylight': '哥倫比亞夏令時間'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '庫克群島時間',
                            'standard': '庫克群島標準時間',
                            'daylight': '庫克群島半夏令時間'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '古巴時間',
                            'standard': '古巴標準時間',
                            'daylight': '古巴夏令時間'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '戴維斯時間'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '杜蒙杜比爾時間'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '東帝汶時間'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '復活節島時間',
                            'standard': '復活節島標準時間',
                            'daylight': '復活節島夏令時間'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '厄瓜多時間'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '中歐時間',
                            'standard': '中歐標準時間',
                            'daylight': '中歐夏令時間'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '東歐時間',
                            'standard': '東歐標準時間',
                            'daylight': '東歐夏令時間'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '西歐時間',
                            'standard': '西歐標準時間',
                            'daylight': '西歐夏令時間'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '福克蘭群島時間',
                            'standard': '福克蘭群島標準時間',
                            'daylight': '福克蘭群島夏令時間'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '斐濟時間',
                            'standard': '斐濟標準時間',
                            'daylight': '斐濟夏令時間'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '法屬圭亞那時間'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '法國南方及南極時間'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '加拉帕戈群島時間'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '托克勞群島時間'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '東加時間',
                            'standard': '東加標準時間',
                            'daylight': '東加夏令時間'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '楚克島時間'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '土庫曼時間',
                            'standard': '土庫曼標準時間',
                            'daylight': '土庫曼夏令時間'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '吐瓦魯時間'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '烏拉圭時間',
                            'standard': '烏拉圭標準時間',
                            'daylight': '烏拉圭夏令時間'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '烏茲別克時間',
                            'standard': '烏茲別克標準時間',
                            'daylight': '烏茲別克夏令時間'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '萬那杜時間',
                            'standard': '萬那杜標準時間',
                            'daylight': '萬那杜夏令時間'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '葉卡捷琳堡時間',
                            'standard': '葉卡捷琳堡標準時間',
                            'daylight': '葉卡捷琳堡夏令時間'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '雅庫次克時間',
                            'standard': '雅庫次克標準時間',
                            'daylight': '雅庫次克夏令時間'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '瓦利斯和福杜納群島時間'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '威克島時間'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '沃斯托克時間'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '伏爾加格勒時間',
                            'standard': '伏爾加格勒標準時間',
                            'daylight': '伏爾加格勒夏令時間'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '海參崴時間',
                            'standard': '海參崴標準時間',
                            'daylight': '海參崴夏令時間'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '委內瑞拉時間'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '塔吉克時間'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '台北時間',
                            'standard': '台北標準時間',
                            'daylight': '台北夏令時間'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '大溪地時間'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '昭和基地時間'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '蘇利南時間'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '南喬治亞時間'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '索羅門群島時間'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '新加坡標準時間'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '塞席爾時間'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '關島標準時間'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '格陵蘭西部時間',
                            'standard': '格陵蘭西部標準時間',
                            'daylight': '格陵蘭西部夏令時間'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '格陵蘭東部時間',
                            'standard': '格陵蘭東部標準時間',
                            'daylight': '格陵蘭東部夏令時間'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '格林威治標準時間'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '吉爾伯特群島時間'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '喬治亞時間',
                            'standard': '喬治亞標準時間',
                            'daylight': '喬治亞夏令時間'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '甘比爾群島時間'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '亞馬遜時間',
                            'standard': '亞馬遜標準時間',
                            'daylight': '亞馬遜夏令時間'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '艾克時間',
                            'standard': '艾克標準時間',
                            'daylight': '艾克夏令時間'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '阿富汗時間'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '中非時間'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '東非時間'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '南非標準時間'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '西非時間',
                            'standard': '西非標準時間',
                            'daylight': '西非夏令時間'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '阿拉斯加時間',
                            'standard': '阿拉斯加標準時間',
                            'daylight': '阿拉斯加夏令時間'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '阿拉木圖時間',
                            'standard': '阿拉木圖標準時間',
                            'daylight': '阿拉木圖夏令時間'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '阿拉伯時間',
                            'standard': '阿拉伯標準時間',
                            'daylight': '阿拉伯夏令時間'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '阿根廷時間',
                            'standard': '阿根廷標準時間',
                            'daylight': '阿根廷夏令時間'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '阿根廷西部時間',
                            'standard': '阿根廷西部標準時間',
                            'daylight': '阿根廷西部夏令時間'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '亞美尼亞時間',
                            'standard': '亞美尼亞標準時間',
                            'daylight': '亞美尼亞夏令時間'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '大西洋時間',
                            'standard': '大西洋標準時間',
                            'daylight': '大西洋夏令時間'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '澳洲中部時間',
                            'standard': '澳洲中部標準時間',
                            'daylight': '澳洲中部夏令時間'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '澳洲中西部時間',
                            'standard': '澳洲中西部標準時間',
                            'daylight': '澳洲中西部夏令時間'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '澳洲東部時間',
                            'standard': '澳洲東部標準時間',
                            'daylight': '澳洲東部夏令時間'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '澳洲西部時間',
                            'standard': '澳洲西部標準時間',
                            'daylight': '澳洲西部夏令時間'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '亞塞拜然時間',
                            'standard': '亞塞拜然標準時間',
                            'daylight': '亞塞拜然夏令時間'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '亞速爾群島時間',
                            'standard': '亞速爾群島標準時間',
                            'daylight': '亞速爾群島夏令時間'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '孟加拉時間',
                            'standard': '孟加拉標準時間',
                            'daylight': '孟加拉夏令時間'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '不丹時間'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '玻利維亞時間'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '巴西利亞時間',
                            'standard': '巴西利亞標準時間',
                            'daylight': '巴西利亞夏令時間'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '汶萊時間'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '波斯灣海域標準時間'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '蓋亞納時間'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '夏威夷-阿留申時間',
                            'standard': '夏威夷-阿留申標準時間',
                            'daylight': '夏威夷-阿留申夏令時間'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '香港時間',
                            'standard': '香港標準時間',
                            'daylight': '香港夏令時間'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '科布多時間',
                            'standard': '科布多標準時間',
                            'daylight': '科布多夏令時間'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '印度標準時間'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '印度洋時間'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '印度支那時間'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '印尼中部時間'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '印尼東部時間'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '印尼西部時間'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '伊朗時間',
                            'standard': '伊朗標準時間',
                            'daylight': '伊朗夏令時間'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '伊爾庫次克時間',
                            'standard': '伊爾庫次克標準時間',
                            'daylight': '伊爾庫次克夏令時間'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '以色列時間',
                            'standard': '以色列標準時間',
                            'daylight': '以色列夏令時間'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '日本時間',
                            'standard': '日本標準時間',
                            'daylight': '日本夏令時間'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '彼得羅巴甫洛夫斯克時間',
                            'standard': '彼得羅巴甫洛夫斯克標準時間',
                            'daylight': '彼得羅巴甫洛夫斯克日光節約時間'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '東哈薩克時間'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '西哈薩克時間'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '韓國時間',
                            'standard': '韓國標準時間',
                            'daylight': '韓國夏令時間'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '科斯瑞時間'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '克拉斯諾亞爾斯克時間',
                            'standard': '克拉斯諾亞爾斯克標準時間',
                            'daylight': '克拉斯諾亞爾斯克夏令時間'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '吉爾吉斯時間'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '蘭卡時間'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '萊恩群島時間'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '豪勳爵島時間',
                            'standard': '豪勳爵島標準時間',
                            'daylight': '豪勳爵島夏令時間'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '澳門時間',
                            'standard': '澳門標準時間',
                            'daylight': '澳門夏令時間'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '麥覺理時間'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '馬加丹時間',
                            'standard': '馬加丹標準時間',
                            'daylight': '馬加丹夏令時間'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '馬來西亞時間'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '馬爾地夫時間'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '馬克沙斯時間'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '馬紹爾群島時間'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '模里西斯時間',
                            'standard': '模里西斯標準時間',
                            'daylight': '模里西斯夏令時間'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '莫森時間'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '烏蘭巴托時間',
                            'standard': '烏蘭巴托標準時間',
                            'daylight': '烏蘭巴托夏令時間'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '莫斯科時間',
                            'standard': '莫斯科標準時間',
                            'daylight': '莫斯科夏令時間'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '緬甸時間'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '諾魯時間'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '尼泊爾時間'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}時間',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1}（{0}）'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
                            },
                            'narrow': {
                                '8': '8',
                                '7': '7',
                                '6': '6',
                                '5': '5',
                                '12': '12',
                                '11': '11',
                                '10': '10',
                                '9': '9',
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
                            },
                            'narrow': {
                                '8': '8',
                                '7': '7',
                                '6': '6',
                                '5': '5',
                                '12': '12',
                                '11': '11',
                                '10': '10',
                                '9': '9',
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '週日',
                                'mon': '週一',
                                'tue': '週二',
                                'wed': '週三',
                                'thu': '週四',
                                'fri': '週五',
                                'sat': '週六'
                            },
                            'narrow': {
                                'sun': '日',
                                'mon': '一',
                                'tue': '二',
                                'wed': '三',
                                'thu': '四',
                                'fri': '五',
                                'sat': '六'
                            },
                            'short': {
                                'sun': '日',
                                'mon': '一',
                                'tue': '二',
                                'wed': '三',
                                'thu': '四',
                                'fri': '五',
                                'sat': '六'
                            },
                            'wide': {
                                'sun': '星期日',
                                'mon': '星期一',
                                'tue': '星期二',
                                'wed': '星期三',
                                'thu': '星期四',
                                'fri': '星期五',
                                'sat': '星期六'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '週日',
                                'mon': '週一',
                                'tue': '週二',
                                'wed': '週三',
                                'thu': '週四',
                                'fri': '週五',
                                'sat': '週六'
                            },
                            'narrow': {
                                'sun': '日',
                                'mon': '一',
                                'tue': '二',
                                'wed': '三',
                                'thu': '四',
                                'fri': '五',
                                'sat': '六'
                            },
                            'short': {
                                'sun': '日',
                                'mon': '一',
                                'tue': '二',
                                'wed': '三',
                                'thu': '四',
                                'fri': '五',
                                'sat': '六'
                            },
                            'wide': {
                                'sun': '星期日',
                                'mon': '星期一',
                                'tue': '星期二',
                                'wed': '星期三',
                                'thu': '星期四',
                                'fri': '星期五',
                                'sat': '星期六'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1季',
                                '2': '2季',
                                '3': '3季',
                                '4': '4季'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '第1季',
                                '2': '第2季',
                                '3': '第3季',
                                '4': '第4季'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1季',
                                '2': '2季',
                                '3': '3季',
                                '4': '4季'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '第1季',
                                '2': '第2季',
                                '3': '第3季',
                                '4': '第4季'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'pm': '下午',
                                'weeHours': '凌晨',
                                'afternoon': '下午',
                                'am': '上午',
                                'earlyMorning': '清晨',
                                'midDay': '中午',
                                'morning': '上午',
                                'night': '晚上',
                                'noon': '中午'
                            },
                            'narrow': {
                                'pm': '下午',
                                'weeHours': '凌晨',
                                'afternoon': '下午',
                                'am': '上午',
                                'earlyMorning': '清晨',
                                'midDay': '中午',
                                'morning': '上午',
                                'night': '晚上',
                                'noon': '中午'
                            },
                            'wide': {
                                'pm': '下午',
                                'weeHours': '凌晨',
                                'afternoon': '下午',
                                'am': '上午',
                                'earlyMorning': '清晨',
                                'midDay': '中午',
                                'morning': '上午',
                                'night': '晚上',
                                'noon': '中午'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'pm': '下午',
                                'weeHours': '凌晨',
                                'afternoon': '下午',
                                'am': '上午',
                                'earlyMorning': '清晨',
                                'midDay': '中午',
                                'morning': '上午',
                                'night': '晚上',
                                'noon': '中午'
                            },
                            'narrow': {
                                'pm': '下午',
                                'weeHours': '凌晨',
                                'afternoon': '下午',
                                'am': '上午',
                                'earlyMorning': '清晨',
                                'midDay': '中午',
                                'morning': '上午',
                                'night': '晚上',
                                'noon': '中午'
                            },
                            'wide': {
                                'pm': '下午',
                                'weeHours': '凌晨',
                                'afternoon': '下午',
                                'am': '上午',
                                'earlyMorning': '清晨',
                                'midDay': '中午',
                                'morning': '上午',
                                'night': '晚上',
                                'noon': '中午'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '西元前',
                            '0-alt-variant': '公元前',
                            '1': '西元',
                            '1-alt-variant': '公元'
                        },
                        'eraAbbr': {
                            '0': '西元前',
                            '0-alt-variant': '公元前',
                            '1': '西元',
                            '1-alt-variant': '公元'
                        },
                        'eraNarrow': {
                            '0': '西元前',
                            '0-alt-variant': '公元前',
                            '1': '西元',
                            '1-alt-variant': '公元'
                        }
                    },
                    'dateFormats': {
                        'full': 'y年M月d日EEEE',
                        'long': 'y年M月d日',
                        'medium': 'y年M月d日',
                        'short': 'y/M/d'
                    },
                    'timeFormats': {
                        'full': 'zzzzah時mm分ss秒',
                        'long': 'zah時mm分ss秒',
                        'medium': 'ah:mm:ss',
                        'short': 'ah:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}{0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'y年M月d日',
                            'yMMM': 'y年M月',
                            'yMM': 'y-MM',
                            'yMEd': 'y/M/d（E）',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E a h:mm',
                            'Ed': 'd日（E）',
                            'd': 'd日',
                            'GyMMMd': 'G y 年 M 月 d 日',
                            'GyMMMEd': 'G y 年 M 月 d 日E',
                            'h': 'ah時',
                            'H': 'H時',
                            'yQQQQ': 'y年QQQQ',
                            'yQQQ': 'y年QQQ',
                            'yMMMM': 'y年M月',
                            'yMMMEd': 'y年M月d日E',
                            'Hms': 'HH:mm:ss',
                            'hms': 'ah:mm:ss',
                            'Hm': 'HH:mm',
                            'hm': 'ah:mm',
                            'Ehms': 'E a h:mm:ss',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'G y 年',
                            'GyMMM': 'G y 年 M 月',
                            'M': 'M月',
                            'Md': 'M/d',
                            'MEd': 'M/d（E）',
                            'MMdd': 'MM/dd',
                            'MMM': 'LLL',
                            'MMMd': 'M月d日',
                            'MMMEd': 'M月d日E',
                            'MMMMdd': 'M月dd日',
                            'ms': 'mm:ss',
                            'y': 'y年',
                            'yM': 'y/M',
                            'yMd': 'y/M/d'
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
                                'd': 'M月d日E至d日E',
                                'M': 'M月d日E至M月d日E'
                            },
                            'MMMd': {
                                'd': 'M月d日至d日',
                                'M': 'M月d日至M月d日'
                            },
                            'MMM': {
                                'M': 'LLL至LLL'
                            },
                            'MEd': {
                                'd': 'M/dE至M/dE',
                                'M': 'M/dE至M/dE'
                            },
                            'Md': {
                                'd': 'M/d至M/d',
                                'M': 'M/d至M/d'
                            },
                            'M': {
                                'M': 'M月至M月'
                            },
                            'Hv': {
                                'H': 'HH–HH [v]'
                            },
                            'hv': {
                                'a': 'a h 時至a h 時 [v]',
                                'h': 'a h 時至 h 時 [v]'
                            },
                            'intervalFormatFallback': '{0}至{1}',
                            'y': {
                                'y': 'y至y'
                            },
                            'yM': {
                                'M': 'y/M至y/M',
                                'y': 'y/M至y/M'
                            },
                            'yMd': {
                                'd': 'y/M/d至y/M/d',
                                'M': 'y/M/d至y/M/d',
                                'y': 'y/M/d至y/M/d'
                            },
                            'yMEd': {
                                'd': 'y/M/dE至y/M/dE',
                                'M': 'y/M/dE至y/M/dE',
                                'y': 'y/M/dE至y/M/dE'
                            },
                            'yMMM': {
                                'M': 'y年M月至M月',
                                'y': 'y年M月至y年M月'
                            },
                            'yMMMd': {
                                'd': 'y年M月d日至d日',
                                'M': 'y年M月d日至M月d日',
                                'y': 'y年M月d日至y年M月d日'
                            },
                            'yMMMEd': {
                                'd': 'y年M月d日E至d日E',
                                'M': 'y年M月d日E至M月d日E',
                                'y': 'y年M月d日E至y年M月d日E'
                            },
                            'yMMMM': {
                                'M': 'y年M月至M月',
                                'y': 'y年M月至y年M月'
                            },
                            'MMMM': {
                                'M': 'LLLL至 LLLL'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm [v]',
                                'm': 'HH:mm–HH:mm [v]'
                            },
                            'hmv': {
                                'a': 'a h:mm 至a h:mm [v]',
                                'h': 'a h:mm 至 h:mm [v]',
                                'm': 'a h:mm 至 h:mm [v]'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm至HH:mm'
                            },
                            'hm': {
                                'a': 'ah:mm至ah:mm',
                                'h': 'ah:mm至h:mm',
                                'm': 'ah:mm至h:mm'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'h': {
                                'a': 'ah時至ah時',
                                'h': 'ah時至h時'
                            },
                            'd': {
                                'd': 'd日至d日'
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
