/* AstroDate
 * Language: zh
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * localeDisplayNames: 24r9308
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
        AstroDate.lang('zh', {
            'codePatterns': {
                'language': '语言：{0}',
                'script': '文字：{0}',
                'territory': '地区：{0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '对假名进行单独排序',
                    'yes': '对假名进行区别排序'
                },
                'colCaseLevel': {
                    'no': '不区分大小写进行排序',
                    'yes': '区分大小写进行排序'
                },
                'colCaseFirst': {
                    'lower': '先对小写字母进行排序',
                    'no': '对正常大小写顺序进行排序',
                    'upper': '先对大写字母进行排序'
                },
                'colStrength': {
                    'identical': '对所有内容进行排序',
                    'primary': '只对基本字母进行排序',
                    'quaternary': '对重音/大小写/长度/假名进行排序',
                    'secondary': '对重音进行排序',
                    'tertiary': '对重音/大小写/长度进行排序'
                },
                'colNumeric': {
                    'no': '对数字进行单独排序',
                    'yes': '按数字顺序对数字进行排序'
                },
                'colNormalization': {
                    'no': '非规范化排序',
                    'yes': '对 Unicode 进行规范化排序'
                },
                'calendar': {
                    'japanese': '日本日历',
                    'iso8601': 'iso8601',
                    'coptic': '科普特日历',
                    'dangi': '檀纪日历',
                    'ethiopic': '埃塞俄比亚日历',
                    'ethiopic-amete-alem': '埃塞俄比亚阿米特阿莱姆日历',
                    'gregorian': '公历',
                    'hebrew': '希伯来日历',
                    'persian': '波斯日历',
                    'roc': '民国日历',
                    'chinese': '农历',
                    'buddhist': '佛教日历',
                    'indian': '印度国家日历',
                    'islamic': '伊斯兰日历',
                    'islamic-civil': '伊斯兰希吉来日历',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '电话簿排序顺序',
                    'gb2312han': '简体中文排序 - GB2312',
                    'eor': 'eor',
                    'ducet': '默认 Unicode 排序',
                    'dictionary': '字典排序顺序',
                    'big5han': '繁体中文排序 - Big5',
                    'traditional': '传统排序顺序',
                    'standard': '标准排序',
                    'zhuyin': '注音排序',
                    'unihan': '部首笔画排序',
                    'stroke': '笔画排序',
                    'searchjl': '按韩文字开首辅音来搜索',
                    'search': '常规搜索',
                    'reformed': '改良排序顺序',
                    'pinyin': '拼音排序',
                    'phonetic': '语音排序顺序'
                },
                'numbers': {
                    'knda': '卡纳达文数字',
                    'khmr': '高棉文数字',
                    'kali': '克耶字母数字',
                    'jpanfin': '日文大写数字',
                    'jpan': '日文数字',
                    'java': '爪哇文数字',
                    'hebr': '希伯来文数字',
                    'hantfin': '繁体中文大写数字',
                    'hant': '繁体中文数字',
                    'hansfin': '简体中文大写数字',
                    'hans': '简体中文数字',
                    'hanidec': '中文十进制数字',
                    'guru': '果鲁穆奇文数字',
                    'gujr': '古吉拉特文数字',
                    'greklow': '希腊文小写数字',
                    'grek': '希腊文数字',
                    'bali': '巴厘文数字',
                    'armnlow': '亚美尼亚文小写数字',
                    'armn': '亚美尼亚文数字',
                    'arabext': '扩展阿拉伯印度文数字',
                    'arab': '阿拉伯印度文数字',
                    'finance': '金融数字',
                    'traditional': '传统数字',
                    'native': '当地数字',
                    'beng': '孟加拉文数字',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': '占文数字',
                    'deva': '梵文数字',
                    'orya': '奥里亚文数字',
                    'osma': 'osma',
                    'roman': '罗马数字',
                    'romanlow': '罗马小写数字',
                    'saur': '索拉什特拉文数字',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': '苏丹文数字',
                    'vaii': '瓦伊文数字',
                    'tibt': '藏文数字',
                    'thai': '泰文数字',
                    'telu': '泰卢固文数字',
                    'tamldec': '泰米尔文数字',
                    'taml': '传统泰米尔文数字',
                    'talu': '新傣仂文数字',
                    'takr': 'takr',
                    'olck': '桑塔利文数字',
                    'nkoo': '曼德数字',
                    'mymrshan': '缅甸掸文数字',
                    'mymr': '缅甸文数字',
                    'mtei': '曼尼普尔数字',
                    'mong': '蒙古文数字',
                    'mlym': '马拉雅拉姆文数字',
                    'limb': '林布文数字',
                    'lepc': '雷布查文数字',
                    'latn': '西方数字',
                    'laoo': '老挝文数字',
                    'lanatham': '兰纳文数字',
                    'lana': '老傣文数字',
                    'geor': '格鲁吉亚文数字',
                    'fullwide': '全角数字',
                    'ethi': '埃塞俄比亚文数字'
                },
                'colAlternate': {
                    'non-ignorable': '对符号进行排序',
                    'shifted': '忽略符号进行排序'
                },
                'colBackwards': {
                    'no': '对重音进行正常排序',
                    'yes': '对重音进行逆向排序'
                }
            },
            'keys': {
                'colNormalization': '规范化排序',
                'collation': '排序',
                'colHiraganaQuaternary': '假名排序',
                'colCaseLevel': '区分大小写的排序',
                'colCaseFirst': '大写/小写字母排序',
                'colBackwards': '对重音进行逆向排序',
                'colAlternate': '忽略符号排序',
                'calendar': '日历',
                'x': '专用',
                'variableTop': '按照符号排序',
                'va': '语言区域别名',
                'timezone': '时区',
                'numbers': '数字',
                'currency': '货币',
                'colStrength': '排序强度',
                'colNumeric': '数字排序'
            },
            'localeDisplayPattern': {
                'localePattern': '{0}（{1}）',
                'localeSeparator': '{0}、{1}',
                'localeKeyTypePattern': '{0}：{1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '塞班'
                        },
                        'Rarotonga': {
                            'exemplarCity': '拉罗汤加'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '莫尔兹比港'
                        },
                        'Ponape': {
                            'exemplarCity': '波纳佩岛'
                        },
                        'Pitcairn': {
                            'exemplarCity': '皮特凯恩'
                        },
                        'Palau': {
                            'exemplarCity': '帕劳'
                        },
                        'Auckland': {
                            'exemplarCity': '奥克兰'
                        },
                        'Apia': {
                            'exemplarCity': '阿皮亚'
                        },
                        'Funafuti': {
                            'exemplarCity': '富纳富提'
                        },
                        'Galapagos': {
                            'exemplarCity': '加拉帕戈斯'
                        },
                        'Gambier': {
                            'exemplarCity': '甘比尔'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '瓜达尔卡纳尔'
                        },
                        'Guam': {
                            'exemplarCity': '关岛'
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
                            'exemplarCity': '特鲁克群岛'
                        },
                        'Tongatapu': {
                            'exemplarCity': '东加塔布'
                        },
                        'Tarawa': {
                            'exemplarCity': '塔拉瓦'
                        },
                        'Tahiti': {
                            'exemplarCity': '塔希提'
                        },
                        'Kiritimati': {
                            'exemplarCity': '基里地马地岛'
                        },
                        'Johnston': {
                            'exemplarCity': '约翰斯顿'
                        },
                        'Chatham': {
                            'exemplarCity': '查塔姆'
                        },
                        'Easter': {
                            'exemplarCity': '复活节岛'
                        },
                        'Efate': {
                            'exemplarCity': '埃法特'
                        },
                        'Enderbury': {
                            'exemplarCity': '恩德伯里'
                        },
                        'Fakaofo': {
                            'exemplarCity': '法考福'
                        },
                        'Fiji': {
                            'exemplarCity': '斐济'
                        },
                        'Kosrae': {
                            'exemplarCity': '库赛埃'
                        },
                        'Kwajalein': {
                            'exemplarCity': '夸贾林'
                        },
                        'Majuro': {
                            'exemplarCity': '马朱罗'
                        },
                        'Marquesas': {
                            'exemplarCity': '马克萨斯'
                        },
                        'Midway': {
                            'exemplarCity': '中途岛'
                        },
                        'Nauru': {
                            'exemplarCity': '瑙鲁'
                        },
                        'Niue': {
                            'exemplarCity': '纽埃'
                        },
                        'Norfolk': {
                            'exemplarCity': '诺福克'
                        },
                        'Noumea': {
                            'exemplarCity': '努美阿'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '帕果帕果'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '林德曼'
                        },
                        'Hobart': {
                            'exemplarCity': '霍巴特'
                        },
                        'Eucla': {
                            'exemplarCity': '尤克拉'
                        },
                        'Darwin': {
                            'exemplarCity': '达尔文'
                        },
                        'Sydney': {
                            'exemplarCity': '悉尼'
                        },
                        'Perth': {
                            'exemplarCity': '珀斯'
                        },
                        'Melbourne': {
                            'exemplarCity': '墨尔本'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '豪勋爵'
                        },
                        'Adelaide': {
                            'exemplarCity': '阿德莱德'
                        },
                        'Brisbane': {
                            'exemplarCity': '布里斯班'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '布罗肯希尔'
                        },
                        'Currie': {
                            'exemplarCity': '库利'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '马尔代夫'
                        },
                        'Mahe': {
                            'exemplarCity': '马埃岛'
                        },
                        'Kerguelen': {
                            'exemplarCity': '凯尔盖朗'
                        },
                        'Reunion': {
                            'exemplarCity': '留尼汪'
                        },
                        'Mayotte': {
                            'exemplarCity': '马约特'
                        },
                        'Mauritius': {
                            'exemplarCity': '毛里求斯'
                        },
                        'Antananarivo': {
                            'exemplarCity': '安塔那那利佛'
                        },
                        'Chagos': {
                            'exemplarCity': '查戈斯'
                        },
                        'Christmas': {
                            'exemplarCity': '圣诞岛'
                        },
                        'Cocos': {
                            'exemplarCity': '可可斯'
                        },
                        'Comoro': {
                            'exemplarCity': '科摩罗'
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
                            'exemplarCity': '罗瑟拉'
                        },
                        'Palmer': {
                            'exemplarCity': '帕默尔'
                        },
                        'McMurdo': {
                            'exemplarCity': '麦克默多'
                        },
                        'Vostok': {
                            'exemplarCity': '沃斯托克'
                        },
                        'Syowa': {
                            'exemplarCity': '昭和'
                        },
                        'South_Pole': {
                            'exemplarCity': '南极'
                        },
                        'Casey': {
                            'exemplarCity': '卡塞'
                        },
                        'Davis': {
                            'exemplarCity': '戴维斯'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '迪蒙迪尔维尔'
                        },
                        'Macquarie': {
                            'exemplarCity': '麦格理'
                        },
                        'Mawson': {
                            'exemplarCity': '莫森'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '朗伊尔城'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '多伦多'
                        },
                        'Tijuana': {
                            'exemplarCity': '蒂华纳'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '桑德贝'
                        },
                        'Thule': {
                            'exemplarCity': '图勒'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '特古西加尔巴'
                        },
                        'Swift_Current': {
                            'exemplarCity': '斯威夫特卡伦特'
                        },
                        'Chicago': {
                            'exemplarCity': '芝加哥'
                        },
                        'Cayman': {
                            'exemplarCity': '开曼'
                        },
                        'Cayenne': {
                            'exemplarCity': '卡宴'
                        },
                        'Catamarca': {
                            'exemplarCity': '卡塔马卡'
                        },
                        'Caracas': {
                            'exemplarCity': '加拉加斯'
                        },
                        'Cancun': {
                            'exemplarCity': '坎昆'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '大坎普'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '剑桥湾'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '布宜诺斯艾利斯'
                        },
                        'Boise': {
                            'exemplarCity': '博伊西'
                        },
                        'Asuncion': {
                            'exemplarCity': '亚松森'
                        },
                        'Aruba': {
                            'exemplarCity': '阿鲁巴'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '里奥加耶戈斯'
                            },
                            'San_Juan': {
                                'exemplarCity': '圣胡安'
                            },
                            'Ushuaia': {
                                'exemplarCity': '乌斯怀亚'
                            },
                            'La_Rioja': {
                                'exemplarCity': '拉里奥哈'
                            },
                            'San_Luis': {
                                'exemplarCity': '圣路易斯'
                            },
                            'Salta': {
                                'exemplarCity': '萨尔塔'
                            },
                            'Tucuman': {
                                'exemplarCity': '图库曼'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '阿拉瓜伊纳'
                        },
                        'Antigua': {
                            'exemplarCity': '安提瓜'
                        },
                        'Anguilla': {
                            'exemplarCity': '安圭拉'
                        },
                        'Anchorage': {
                            'exemplarCity': '安克雷奇'
                        },
                        'Adak': {
                            'exemplarCity': '埃达克'
                        },
                        'Bahia': {
                            'exemplarCity': '巴伊亚'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '巴伊亚班德拉斯'
                        },
                        'Barbados': {
                            'exemplarCity': '巴巴多斯'
                        },
                        'Belem': {
                            'exemplarCity': '贝伦'
                        },
                        'Belize': {
                            'exemplarCity': '伯利兹'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '布兰克萨布隆'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '博阿维斯塔'
                        },
                        'Bogota': {
                            'exemplarCity': '波哥大'
                        },
                        'Curacao': {
                            'exemplarCity': '库拉索'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '丹马沙文'
                        },
                        'Dawson': {
                            'exemplarCity': '道森'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '道森克里克'
                        },
                        'Denver': {
                            'exemplarCity': '丹佛'
                        },
                        'Detroit': {
                            'exemplarCity': '底特律'
                        },
                        'Hermosillo': {
                            'exemplarCity': '埃莫西约'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '印第安纳州温森斯'
                            },
                            'Petersburg': {
                                'exemplarCity': '印第安纳州彼得斯堡'
                            },
                            'Tell_City': {
                                'exemplarCity': '印第安纳州特尔城'
                            },
                            'Knox': {
                                'exemplarCity': '印第安纳州诺克斯'
                            },
                            'Winamac': {
                                'exemplarCity': '印第安纳州威纳马克'
                            },
                            'Marengo': {
                                'exemplarCity': '印第安纳州马伦戈'
                            },
                            'Vevay': {
                                'exemplarCity': '印第安纳州维维市'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '印第安纳波利斯'
                        },
                        'Inuvik': {
                            'exemplarCity': '伊努维克'
                        },
                        'Iqaluit': {
                            'exemplarCity': '伊魁特'
                        },
                        'Jamaica': {
                            'exemplarCity': '牙买加'
                        },
                        'Jujuy': {
                            'exemplarCity': '胡胡伊'
                        },
                        'Juneau': {
                            'exemplarCity': '朱诺'
                        },
                        'Yellowknife': {
                            'exemplarCity': '耶洛奈夫'
                        },
                        'Yakutat': {
                            'exemplarCity': '亚库塔特'
                        },
                        'Winnipeg': {
                            'exemplarCity': '温尼伯'
                        },
                        'Whitehorse': {
                            'exemplarCity': '怀特霍斯'
                        },
                        'Vancouver': {
                            'exemplarCity': '温哥华'
                        },
                        'Tortola': {
                            'exemplarCity': '托尔托拉'
                        },
                        'Kralendijk': {
                            'exemplarCity': '克拉伦代克'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '肯塔基州蒙蒂塞洛'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '哈瓦那'
                        },
                        'Halifax': {
                            'exemplarCity': '哈利法克斯'
                        },
                        'Guyana': {
                            'exemplarCity': '圭亚那'
                        },
                        'Guayaquil': {
                            'exemplarCity': '瓜亚基尔'
                        },
                        'Guatemala': {
                            'exemplarCity': '危地马拉'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '瓜德罗普'
                        },
                        'Grenada': {
                            'exemplarCity': '格林纳达'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '大特克'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '古斯湾'
                        },
                        'Godthab': {
                            'exemplarCity': '戈特霍布'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '格莱斯贝'
                        },
                        'Fortaleza': {
                            'exemplarCity': '福塔雷萨'
                        },
                        'El_Salvador': {
                            'exemplarCity': '萨尔瓦多'
                        },
                        'Eirunepe': {
                            'exemplarCity': '依伦尼贝'
                        },
                        'Edmonton': {
                            'exemplarCity': '埃德蒙顿'
                        },
                        'Dominica': {
                            'exemplarCity': '多米尼加'
                        },
                        'Chihuahua': {
                            'exemplarCity': '奇瓦瓦'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '阿蒂科肯'
                        },
                        'Cordoba': {
                            'exemplarCity': '科尔多瓦'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '哥斯达黎加'
                        },
                        'Creston': {
                            'exemplarCity': '克雷斯顿'
                        },
                        'Cuiaba': {
                            'exemplarCity': '库亚巴'
                        },
                        'La_Paz': {
                            'exemplarCity': '拉巴斯'
                        },
                        'Lima': {
                            'exemplarCity': '利马'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '洛杉矶'
                        },
                        'Louisville': {
                            'exemplarCity': '路易斯维尔'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '下太子区'
                        },
                        'Maceio': {
                            'exemplarCity': '马塞约'
                        },
                        'Managua': {
                            'exemplarCity': '马那瓜'
                        },
                        'Manaus': {
                            'exemplarCity': '马瑙斯'
                        },
                        'Marigot': {
                            'exemplarCity': '马里戈特'
                        },
                        'Martinique': {
                            'exemplarCity': '马提尼克'
                        },
                        'Matamoros': {
                            'exemplarCity': '马塔莫罗斯'
                        },
                        'Mazatlan': {
                            'exemplarCity': '马萨特兰'
                        },
                        'Mendoza': {
                            'exemplarCity': '门多萨'
                        },
                        'Menominee': {
                            'exemplarCity': '密诺米尼'
                        },
                        'Merida': {
                            'exemplarCity': '梅里达'
                        },
                        'Metlakatla': {
                            'exemplarCity': '梅特拉卡特拉'
                        },
                        'Mexico_City': {
                            'exemplarCity': '墨西哥城'
                        },
                        'Miquelon': {
                            'exemplarCity': '密克隆'
                        },
                        'Moncton': {
                            'exemplarCity': '蒙克顿'
                        },
                        'Monterrey': {
                            'exemplarCity': '蒙特雷'
                        },
                        'Montevideo': {
                            'exemplarCity': '蒙得维的亚'
                        },
                        'Montreal': {
                            'exemplarCity': '蒙特利尔'
                        },
                        'Montserrat': {
                            'exemplarCity': '蒙特塞拉特'
                        },
                        'Nassau': {
                            'exemplarCity': '拿骚'
                        },
                        'New_York': {
                            'exemplarCity': '纽约'
                        },
                        'Nipigon': {
                            'exemplarCity': '尼皮贡'
                        },
                        'Nome': {
                            'exemplarCity': '诺姆'
                        },
                        'Noronha': {
                            'exemplarCity': '洛罗尼亚'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '北达科他州比尤拉'
                            },
                            'New_Salem': {
                                'exemplarCity': '北达科他州新塞勒姆'
                            },
                            'Center': {
                                'exemplarCity': '北达科他州申特'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '奥希纳加'
                        },
                        'Panama': {
                            'exemplarCity': '巴拿马'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '旁涅唐'
                        },
                        'Paramaribo': {
                            'exemplarCity': '帕拉马里博'
                        },
                        'Phoenix': {
                            'exemplarCity': '凤凰城'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '太子港'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '西班牙港'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '波多韦柳'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '波多黎各'
                        },
                        'Rainy_River': {
                            'exemplarCity': '雷尼河'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '兰今湾'
                        },
                        'Recife': {
                            'exemplarCity': '累西腓'
                        },
                        'Regina': {
                            'exemplarCity': '里贾纳'
                        },
                        'Resolute': {
                            'exemplarCity': '雷索卢特'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '里奥布郎库'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '圣伊萨贝尔'
                        },
                        'Santarem': {
                            'exemplarCity': '圣塔伦'
                        },
                        'Santiago': {
                            'exemplarCity': '圣地亚哥'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '圣多明各'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '圣保罗'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '斯科列斯比桑德'
                        },
                        'Shiprock': {
                            'exemplarCity': '希普罗克'
                        },
                        'Sitka': {
                            'exemplarCity': '锡特卡'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '圣巴泰勒米岛'
                        },
                        'St_Johns': {
                            'exemplarCity': '圣约翰斯'
                        },
                        'St_Kitts': {
                            'exemplarCity': '圣基茨'
                        },
                        'St_Lucia': {
                            'exemplarCity': '圣卢西亚'
                        },
                        'St_Thomas': {
                            'exemplarCity': '圣托马斯'
                        },
                        'St_Vincent': {
                            'exemplarCity': '圣文森特'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '南乔治亚'
                        },
                        'Reykjavik': {
                            'exemplarCity': '雷克雅未克'
                        },
                        'Stanley': {
                            'exemplarCity': '斯坦利'
                        },
                        'St_Helena': {
                            'exemplarCity': '圣赫勒拿'
                        },
                        'Azores': {
                            'exemplarCity': '亚速尔群岛'
                        },
                        'Bermuda': {
                            'exemplarCity': '百慕大'
                        },
                        'Canary': {
                            'exemplarCity': '加那利'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '佛得角'
                        },
                        'Faeroe': {
                            'exemplarCity': '法罗'
                        },
                        'Madeira': {
                            'exemplarCity': '马德拉'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '奥斯陆'
                        },
                        'Moscow': {
                            'exemplarCity': '莫斯科'
                        },
                        'Monaco': {
                            'exemplarCity': '摩纳哥'
                        },
                        'Minsk': {
                            'exemplarCity': '明斯克'
                        },
                        'Mariehamn': {
                            'exemplarCity': '玛丽港'
                        },
                        'Malta': {
                            'exemplarCity': '马耳他'
                        },
                        'Madrid': {
                            'exemplarCity': '马德里'
                        },
                        'Luxembourg': {
                            'exemplarCity': '卢森堡'
                        },
                        'London': {
                            'long': {
                                'daylight': '英国夏令时间'
                            },
                            'exemplarCity': '伦敦'
                        },
                        'Ljubljana': {
                            'exemplarCity': '卢布尔雅那'
                        },
                        'Lisbon': {
                            'exemplarCity': '里斯本'
                        },
                        'Kiev': {
                            'exemplarCity': '基辅'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '加里宁格勒'
                        },
                        'Jersey': {
                            'exemplarCity': '泽西岛'
                        },
                        'Istanbul': {
                            'exemplarCity': '伊斯坦布尔'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '曼岛'
                        },
                        'Bucharest': {
                            'exemplarCity': '布加勒斯特'
                        },
                        'Brussels': {
                            'exemplarCity': '布鲁塞尔'
                        },
                        'Bratislava': {
                            'exemplarCity': '布拉迪斯拉发'
                        },
                        'Berlin': {
                            'exemplarCity': '柏林'
                        },
                        'Belgrade': {
                            'exemplarCity': '贝尔格莱德'
                        },
                        'Athens': {
                            'exemplarCity': '雅典'
                        },
                        'Andorra': {
                            'exemplarCity': '安道尔'
                        },
                        'Amsterdam': {
                            'exemplarCity': '阿姆斯特丹'
                        },
                        'Simferopol': {
                            'exemplarCity': '辛菲罗波尔'
                        },
                        'Skopje': {
                            'exemplarCity': '斯科普里'
                        },
                        'Sofia': {
                            'exemplarCity': '索非亚'
                        },
                        'Stockholm': {
                            'exemplarCity': '斯德哥尔摩'
                        },
                        'Tallinn': {
                            'exemplarCity': '塔林'
                        },
                        'Tirane': {
                            'exemplarCity': '地拉那'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '乌日哥罗德'
                        },
                        'Vaduz': {
                            'exemplarCity': '瓦杜兹'
                        },
                        'Zurich': {
                            'exemplarCity': '苏黎世'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '扎波罗热'
                        },
                        'Zagreb': {
                            'exemplarCity': '萨格勒布'
                        },
                        'Warsaw': {
                            'exemplarCity': '华沙'
                        },
                        'Volgograd': {
                            'exemplarCity': '伏尔加格勒'
                        },
                        'Vilnius': {
                            'exemplarCity': '维尔纽斯'
                        },
                        'Vienna': {
                            'exemplarCity': '维也纳'
                        },
                        'Vatican': {
                            'exemplarCity': '梵蒂冈'
                        },
                        'Sarajevo': {
                            'exemplarCity': '萨拉热窝'
                        },
                        'San_Marino': {
                            'exemplarCity': '圣马力诺'
                        },
                        'Samara': {
                            'exemplarCity': '萨马拉'
                        },
                        'Rome': {
                            'exemplarCity': '罗马'
                        },
                        'Riga': {
                            'exemplarCity': '里加'
                        },
                        'Prague': {
                            'exemplarCity': '布拉格'
                        },
                        'Podgorica': {
                            'exemplarCity': '波德戈里察'
                        },
                        'Paris': {
                            'exemplarCity': '巴黎'
                        },
                        'Helsinki': {
                            'exemplarCity': '赫尔辛基'
                        },
                        'Guernsey': {
                            'exemplarCity': '根西岛'
                        },
                        'Gibraltar': {
                            'exemplarCity': '直布罗陀'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '爱尔兰夏令时间'
                            },
                            'exemplarCity': '都柏林'
                        },
                        'Copenhagen': {
                            'exemplarCity': '哥本哈根'
                        },
                        'Chisinau': {
                            'exemplarCity': '基希讷乌'
                        },
                        'Busingen': {
                            'exemplarCity': '布辛根'
                        },
                        'Budapest': {
                            'exemplarCity': '布达佩斯'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '利伯维尔'
                        },
                        'Lagos': {
                            'exemplarCity': '拉各斯'
                        },
                        'Kinshasa': {
                            'exemplarCity': '金沙萨'
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
                            'exemplarCity': '约翰内斯堡'
                        },
                        'Harare': {
                            'exemplarCity': '哈拉雷'
                        },
                        'Gaborone': {
                            'exemplarCity': '哈博罗内'
                        },
                        'Freetown': {
                            'exemplarCity': '弗里敦'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '阿尤恩'
                        },
                        'Douala': {
                            'exemplarCity': '杜阿拉'
                        },
                        'Djibouti': {
                            'exemplarCity': '吉布提'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '达累斯萨拉姆'
                        },
                        'Dakar': {
                            'exemplarCity': '达喀尔'
                        },
                        'Banjul': {
                            'exemplarCity': '班珠尔'
                        },
                        'Bangui': {
                            'exemplarCity': '班吉'
                        },
                        'Bamako': {
                            'exemplarCity': '巴马科'
                        },
                        'Asmera': {
                            'exemplarCity': '阿斯马拉'
                        },
                        'Malabo': {
                            'exemplarCity': '马拉博'
                        },
                        'Maputo': {
                            'exemplarCity': '马普托'
                        },
                        'Maseru': {
                            'exemplarCity': '马塞卢'
                        },
                        'Mbabane': {
                            'exemplarCity': '姆巴巴纳'
                        },
                        'Mogadishu': {
                            'exemplarCity': '摩加迪沙'
                        },
                        'Monrovia': {
                            'exemplarCity': '蒙罗维亚'
                        },
                        'Nairobi': {
                            'exemplarCity': '内罗毕'
                        },
                        'Ndjamena': {
                            'exemplarCity': '恩贾梅纳'
                        },
                        'Windhoek': {
                            'exemplarCity': '温得和克'
                        },
                        'Tunis': {
                            'exemplarCity': '突尼斯'
                        },
                        'Tripoli': {
                            'exemplarCity': '的黎波里'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '圣多美'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '波多诺伏'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '瓦加杜古'
                        },
                        'Nouakchott': {
                            'exemplarCity': '努瓦克肖特'
                        },
                        'Niamey': {
                            'exemplarCity': '尼亚美'
                        },
                        'Lusaka': {
                            'exemplarCity': '卢萨卡'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '卢本巴希'
                        },
                        'Luanda': {
                            'exemplarCity': '罗安达'
                        },
                        'Lome': {
                            'exemplarCity': '洛美'
                        },
                        'Conakry': {
                            'exemplarCity': '科纳克里'
                        },
                        'Ceuta': {
                            'exemplarCity': '休达'
                        },
                        'Casablanca': {
                            'exemplarCity': '卡萨布兰卡'
                        },
                        'Cairo': {
                            'exemplarCity': '开罗'
                        },
                        'Bujumbura': {
                            'exemplarCity': '布琼布拉'
                        },
                        'Brazzaville': {
                            'exemplarCity': '布拉柴维尔'
                        },
                        'Blantyre': {
                            'exemplarCity': '布兰太尔'
                        },
                        'Bissau': {
                            'exemplarCity': '比绍'
                        },
                        'Abidjan': {
                            'exemplarCity': '阿比让'
                        },
                        'Accra': {
                            'exemplarCity': '阿克拉'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '亚的斯亚贝巴'
                        },
                        'Algiers': {
                            'exemplarCity': '阿尔及尔'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '上海'
                        },
                        'Seoul': {
                            'exemplarCity': '首尔'
                        },
                        'Samarkand': {
                            'exemplarCity': '撒马尔罕'
                        },
                        'Sakhalin': {
                            'exemplarCity': '萨哈林'
                        },
                        'Saigon': {
                            'exemplarCity': '胡志明市'
                        },
                        'Riyadh': {
                            'exemplarCity': '利雅得'
                        },
                        'Rangoon': {
                            'exemplarCity': '仰光'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '克孜洛尔达'
                        },
                        'Qatar': {
                            'exemplarCity': '卡塔尔'
                        },
                        'Pyongyang': {
                            'exemplarCity': '平壤'
                        },
                        'Pontianak': {
                            'exemplarCity': '坤甸'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '金边'
                        },
                        'Oral': {
                            'exemplarCity': '乌拉尔'
                        },
                        'Omsk': {
                            'exemplarCity': '鄂木斯克'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '诺沃西比尔斯克'
                        },
                        'Baghdad': {
                            'exemplarCity': '巴格达'
                        },
                        'Chongqing': {
                            'exemplarCity': '重庆'
                        },
                        'Colombo': {
                            'exemplarCity': '科伦坡'
                        },
                        'Damascus': {
                            'exemplarCity': '大马士革'
                        },
                        'Dhaka': {
                            'exemplarCity': '达卡'
                        },
                        'Dili': {
                            'exemplarCity': '帝力'
                        },
                        'Dubai': {
                            'exemplarCity': '迪拜'
                        },
                        'Dushanbe': {
                            'exemplarCity': '杜尚别'
                        },
                        'Gaza': {
                            'exemplarCity': '加沙'
                        },
                        'Harbin': {
                            'exemplarCity': '哈尔滨'
                        },
                        'Hebron': {
                            'exemplarCity': '希伯伦'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '香港'
                        },
                        'Hovd': {
                            'exemplarCity': '科布多'
                        },
                        'Irkutsk': {
                            'exemplarCity': '伊尔库茨克'
                        },
                        'Jakarta': {
                            'exemplarCity': '雅加达'
                        },
                        'Jayapura': {
                            'exemplarCity': '查亚普拉'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '乌兰巴托'
                        },
                        'Urumqi': {
                            'exemplarCity': '乌鲁木齐'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '乌斯内拉'
                        },
                        'Vientiane': {
                            'exemplarCity': '万象'
                        },
                        'Vladivostok': {
                            'exemplarCity': '符拉迪沃斯托克'
                        },
                        'Yakutsk': {
                            'exemplarCity': '雅库茨克'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '叶卡捷琳堡'
                        },
                        'Yerevan': {
                            'exemplarCity': '埃里温'
                        },
                        'Tokyo': {
                            'exemplarCity': '东京'
                        },
                        'Thimphu': {
                            'exemplarCity': '廷布'
                        },
                        'Tehran': {
                            'exemplarCity': '德黑兰'
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
                            'exemplarCity': '阿什哈巴德'
                        },
                        'Aqtobe': {
                            'exemplarCity': '阿克托别'
                        },
                        'Aqtau': {
                            'exemplarCity': '阿克套'
                        },
                        'Anadyr': {
                            'exemplarCity': '阿纳德尔'
                        },
                        'Amman': {
                            'exemplarCity': '安曼'
                        },
                        'Almaty': {
                            'exemplarCity': '阿拉木图'
                        },
                        'Aden': {
                            'exemplarCity': '亚丁'
                        },
                        'Bahrain': {
                            'exemplarCity': '巴林'
                        },
                        'Baku': {
                            'exemplarCity': '巴库'
                        },
                        'Bangkok': {
                            'exemplarCity': '曼谷'
                        },
                        'Beirut': {
                            'exemplarCity': '贝鲁特'
                        },
                        'Bishkek': {
                            'exemplarCity': '比什凯克'
                        },
                        'Brunei': {
                            'exemplarCity': '文莱'
                        },
                        'Calcutta': {
                            'exemplarCity': '加尔各答'
                        },
                        'Choibalsan': {
                            'exemplarCity': '乔巴山'
                        },
                        'Kabul': {
                            'exemplarCity': '喀布尔'
                        },
                        'Kamchatka': {
                            'exemplarCity': '堪察加'
                        },
                        'Karachi': {
                            'exemplarCity': '卡拉奇'
                        },
                        'Kashgar': {
                            'exemplarCity': '喀什葛尔'
                        },
                        'Katmandu': {
                            'exemplarCity': '加德满都'
                        },
                        'Khandyga': {
                            'exemplarCity': '汉德加'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '克拉斯诺亚尔斯克'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '吉隆坡'
                        },
                        'Kuching': {
                            'exemplarCity': '古晋'
                        },
                        'Kuwait': {
                            'exemplarCity': '科威特'
                        },
                        'Macau': {
                            'exemplarCity': '澳门'
                        },
                        'Magadan': {
                            'exemplarCity': '马加丹'
                        },
                        'Makassar': {
                            'exemplarCity': '望加锡'
                        },
                        'Manila': {
                            'exemplarCity': '马尼拉'
                        },
                        'Muscat': {
                            'exemplarCity': '马斯喀特'
                        },
                        'Nicosia': {
                            'exemplarCity': '尼科西亚'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '新库兹涅茨克'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '萨摩亚时间',
                            'standard': '萨摩亚标准时间',
                            'daylight': '萨摩亚夏令时间'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '萨马拉时间',
                            'standard': '萨马拉标准时间',
                            'daylight': '萨马拉夏令时间'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '库页岛时间',
                            'standard': '库页岛标准时间',
                            'daylight': '库页岛夏令时间'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '罗瑟拉时间'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '留尼汪时间'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '克孜洛尔达时间',
                            'standard': '克孜洛尔达标准时间',
                            'daylight': '克孜洛尔达夏令时间'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '波纳佩时间'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '皮特凯恩时间'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '圣皮埃尔和密克隆群岛时间',
                            'standard': '圣皮埃尔和密克隆群岛标准时间',
                            'daylight': '圣皮埃尔和密克隆群岛夏令时间'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '菲尼克斯群岛时间'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '菲律宾时间',
                            'standard': '菲律宾标准时间',
                            'daylight': '菲律宾夏令时间'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '秘鲁时间',
                            'standard': '秘鲁标准时间',
                            'daylight': '秘鲁夏令时间'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '巴拉圭时间',
                            'standard': '巴拉圭标准时间',
                            'daylight': '巴拉圭夏令时间'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '巴布亚新几内亚时间'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '帕劳时间'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '巴基斯坦时间',
                            'standard': '巴基斯坦标准时间',
                            'daylight': '巴基斯坦夏令时间'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '鄂木斯克时间',
                            'standard': '鄂木斯克标准时间',
                            'daylight': '鄂木斯克夏令时间'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '新西伯利亚时间',
                            'standard': '新西伯利亚标准时间',
                            'daylight': '新西伯利亚夏令时间'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '北马里亚纳群岛时间'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '费尔南多-迪诺罗尼亚岛时间',
                            'standard': '费尔南多-迪诺罗尼亚岛标准时间',
                            'daylight': '费尔南多-迪诺罗尼亚岛夏令时间'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '诺福克岛时间'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '纽埃时间'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '纽芬兰时间',
                            'standard': '纽芬兰标准时间',
                            'daylight': '纽芬兰夏令时间'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '新西兰时间',
                            'standard': '新西兰标准时间',
                            'daylight': '新西兰夏令时间'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '新喀里多尼亚时间',
                            'standard': '新喀里多尼亚标准时间',
                            'daylight': '新喀里多尼亚夏令时间'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '北美中部时间',
                            'standard': '北美中部标准时间',
                            'daylight': '北美中部夏令时间'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '北美东部时间',
                            'standard': '北美东部标准时间',
                            'daylight': '北美东部夏令时间'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '北美山区时间',
                            'standard': '北美山区标准时间',
                            'daylight': '北美山区夏令时间'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '北美太平洋时间',
                            'standard': '北美太平洋标准时间',
                            'daylight': '北美太平洋夏令时间'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '阿纳德尔时间',
                            'standard': '阿纳德尔标准时间',
                            'daylight': '阿纳德尔夏令时间'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '阿克套时间',
                            'standard': '阿克套标准时间',
                            'daylight': '阿克套夏令时间'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '阿克托别时间',
                            'standard': '阿克托别标准时间',
                            'daylight': '阿克托别夏令时间'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '佛得角时间',
                            'standard': '佛得角标准时间',
                            'daylight': '佛得角夏令时间'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '凯西时间'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '查莫罗时间'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '查坦时间',
                            'standard': '查坦标准时间',
                            'daylight': '查坦夏令时间'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '智利时间',
                            'standard': '智利标准时间',
                            'daylight': '智利夏令时间'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '中国时间',
                            'standard': '中国标准时间',
                            'daylight': '中国夏令时间'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '乔巴山时间',
                            'standard': '乔巴山标准时间',
                            'daylight': '乔巴山夏令时间'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '圣诞岛时间'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '科科斯群岛时间'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '哥伦比亚时间',
                            'standard': '哥伦比亚标准时间',
                            'daylight': '哥伦比亚夏令时间'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '库克群岛时间',
                            'standard': '库克群岛标准时间',
                            'daylight': '库克群岛仲夏时间'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '古巴时间',
                            'standard': '古巴标准时间',
                            'daylight': '古巴夏令时间'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '戴维斯时间'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '迪蒙迪尔维尔时间'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '东帝汶时间'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '复活节岛时间',
                            'standard': '复活节岛标准时间',
                            'daylight': '复活节岛夏令时间'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '厄瓜多尔时间'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '中欧时间',
                            'standard': '中欧标准时间',
                            'daylight': '中欧夏令时间'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '东欧时间',
                            'standard': '东欧标准时间',
                            'daylight': '东欧夏令时间'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '西欧时间',
                            'standard': '西欧标准时间',
                            'daylight': '西欧夏令时间'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '福克兰群岛时间',
                            'standard': '福克兰群岛标准时间',
                            'daylight': '福克兰群岛夏令时间'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '斐济时间',
                            'standard': '斐济标准时间',
                            'daylight': '斐济夏令时间'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '法属圭亚那时间'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '法属南方和南极领地时间'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '加拉帕戈斯时间'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '托克劳时间'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '汤加时间',
                            'standard': '汤加标准时间',
                            'daylight': '汤加夏令时间'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '楚克时间'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '土库曼斯坦时间',
                            'standard': '土库曼斯坦标准时间',
                            'daylight': '土库曼斯坦夏令时间'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '图瓦卢时间'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '乌拉圭时间',
                            'standard': '乌拉圭标准时间',
                            'daylight': '乌拉圭夏令时间'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '乌兹别克斯坦时间',
                            'standard': '乌兹别克斯坦标准时间',
                            'daylight': '乌兹别克斯坦夏令时间'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '瓦努阿图时间',
                            'standard': '瓦努阿图标准时间',
                            'daylight': '瓦努阿图夏令时间'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '叶卡捷琳堡时间',
                            'standard': '叶卡捷琳堡标准时间',
                            'daylight': '叶卡捷琳堡夏令时间'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '雅库茨克时间',
                            'standard': '雅库茨克标准时间',
                            'daylight': '雅库茨克夏令时间'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '瓦利斯和富图纳时间'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '威克岛时间'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '沃斯托克时间'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '伏尔加格勒时间',
                            'standard': '伏尔加格勒标准时间',
                            'daylight': '伏尔加格勒夏令时间'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '海参崴时间',
                            'standard': '海参崴标准时间',
                            'daylight': '海参崴夏令时间'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '委内瑞拉时间'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '塔吉克斯坦时间'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '台北时间',
                            'standard': '台北标准时间',
                            'daylight': '台北夏令时间'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '塔希提岛时间'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '昭和时间'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '苏里南时间'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '南乔治亚岛时间'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '所罗门群岛时间'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '新加坡时间'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '塞舌尔时间'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '关岛时间'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '格陵兰岛西部时间',
                            'standard': '格陵兰岛西部标准时间',
                            'daylight': '格陵兰岛西部夏令时间'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '格陵兰岛东部时间',
                            'standard': '格陵兰岛东部标准时间',
                            'daylight': '格陵兰岛东部夏令时间'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '格林尼治标准时间'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '吉尔伯特群岛时间'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '格鲁吉亚时间',
                            'standard': '格鲁吉亚标准时间',
                            'daylight': '格鲁吉亚夏令时间'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '甘比尔时间'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '亚马逊时间',
                            'standard': '亚马逊标准时间',
                            'daylight': '亚马逊夏令时间'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '阿克里时间',
                            'standard': '阿克里标准时间',
                            'daylight': '阿克里夏令时间'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '阿富汗时间'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '中部非洲时间'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '东部非洲时间'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '南部非洲时间'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '西部非洲时间',
                            'standard': '西部非洲标准时间',
                            'daylight': '西部非洲夏令时间'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '阿拉斯加时间',
                            'standard': '阿拉斯加标准时间',
                            'daylight': '阿拉斯加夏令时间'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '阿拉木图时间',
                            'standard': '阿拉木图标准时间',
                            'daylight': '阿拉木图夏令时间'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '阿拉伯时间',
                            'standard': '阿拉伯标准时间',
                            'daylight': '阿拉伯夏令时间'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '阿根廷时间',
                            'standard': '阿根廷标准时间',
                            'daylight': '阿根廷夏令时间'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '阿根廷西部时间',
                            'standard': '阿根廷西部标准时间',
                            'daylight': '阿根廷西部夏令时间'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '亚美尼亚时间',
                            'standard': '亚美尼亚标准时间',
                            'daylight': '亚美尼亚夏令时间'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '大西洋时间',
                            'standard': '大西洋标准时间',
                            'daylight': '大西洋夏令时间'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '澳大利亚中部时间',
                            'standard': '澳大利亚中部标准时间',
                            'daylight': '澳大利亚中部夏令时间'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '澳大利亚中西部时间',
                            'standard': '澳大利亚中西部标准时间',
                            'daylight': '澳大利亚中西部夏令时间'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '澳大利亚东部时间',
                            'standard': '澳大利亚东部标准时间',
                            'daylight': '澳大利亚东部夏令时间'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '澳大利亚西部时间',
                            'standard': '澳大利亚西部标准时间',
                            'daylight': '澳大利亚西部夏令时间'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '阿塞拜疆时间',
                            'standard': '阿塞拜疆标准时间',
                            'daylight': '阿塞拜疆夏令时间'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '亚速尔群岛时间',
                            'standard': '亚速尔群岛标准时间',
                            'daylight': '亚速尔群岛夏令时间'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '孟加拉时间',
                            'standard': '孟加拉标准时间',
                            'daylight': '孟加拉夏令时间'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '不丹时间'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '玻利维亚时间'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '巴西利亚时间',
                            'standard': '巴西利亚标准时间',
                            'daylight': '巴西利亚夏令时间'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '文莱达鲁萨兰时间'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '海湾时间'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '圭亚那时间'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '夏威夷-阿留申时间',
                            'standard': '夏威夷-阿留申标准时间',
                            'daylight': '夏威夷-阿留申夏令时间'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '香港时间',
                            'standard': '香港标准时间',
                            'daylight': '香港夏令时间'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '科布多时间',
                            'standard': '科布多标准时间',
                            'daylight': '科布多夏令时间'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '印度时间'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '印度洋时间'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '印度支那时间'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '印度尼西亚中部时间'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '印度尼西亚东部时间'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '印度尼西亚西部时间'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '伊朗时间',
                            'standard': '伊朗标准时间',
                            'daylight': '伊朗夏令时间'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '伊尔库茨克时间',
                            'standard': '伊尔库茨克标准时间',
                            'daylight': '伊尔库茨克夏令时间'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '以色列时间',
                            'standard': '以色列标准时间',
                            'daylight': '以色列夏令时间'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '日本时间',
                            'standard': '日本标准时间',
                            'daylight': '日本夏令时间'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '彼得罗巴甫洛夫斯克-堪察加时间',
                            'standard': '彼得罗巴甫洛夫斯克-堪察加标准时间',
                            'daylight': '彼得罗巴甫洛夫斯克-堪察加夏令时间'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '哈萨克斯坦东部时间'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '哈萨克斯坦西部时间'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '韩国时间',
                            'standard': '韩国标准时间',
                            'daylight': '韩国夏令时间'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '科斯雷时间'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '克拉斯诺亚尔斯克时间',
                            'standard': '克拉斯诺亚尔斯克标准时间',
                            'daylight': '克拉斯诺亚尔斯克夏令时间'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '吉尔吉斯斯坦时间'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '兰卡时间'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '莱恩群岛时间'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '豪勋爵岛时间',
                            'standard': '豪勋爵岛标准时间',
                            'daylight': '豪勋爵岛夏令时间'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '澳门时间',
                            'standard': '澳门标准时间',
                            'daylight': '澳门夏令时间'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '麦夸里岛时间'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '马加丹时间',
                            'standard': '马加丹标准时间',
                            'daylight': '马加丹夏令时间'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '马来西亚时间'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '马尔代夫时间'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '马克萨斯群岛时间'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '马绍尔群岛时间'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '毛里求斯时间',
                            'standard': '毛里求斯标准时间',
                            'daylight': '毛里求斯夏令时间'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '莫森时间'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '乌兰巴托时间',
                            'standard': '乌兰巴托标准时间',
                            'daylight': '乌兰巴托夏令时间'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '莫斯科时间',
                            'standard': '莫斯科标准时间',
                            'daylight': '莫斯科夏令时间'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '缅甸时间'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '瑙鲁时间'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '尼泊尔时间'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}时间',
                'regionFormat-type-daylight': '{0}夏令时间',
                'regionFormat-type-standard': '{0}标准时间',
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
                                '8': '八月',
                                '7': '七月',
                                '6': '六月',
                                '5': '五月',
                                '12': '十二月',
                                '11': '十一月',
                                '10': '十月',
                                '9': '九月',
                                '1': '一月',
                                '2': '二月',
                                '3': '三月',
                                '4': '四月'
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
                                '8': '八月',
                                '7': '七月',
                                '6': '六月',
                                '5': '五月',
                                '12': '十二月',
                                '11': '十一月',
                                '10': '十月',
                                '9': '九月',
                                '1': '一月',
                                '2': '二月',
                                '3': '三月',
                                '4': '四月'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '周日',
                                'mon': '周一',
                                'tue': '周二',
                                'wed': '周三',
                                'thu': '周四',
                                'fri': '周五',
                                'sat': '周六'
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
                                'sun': '周日',
                                'mon': '周一',
                                'tue': '周二',
                                'wed': '周三',
                                'thu': '周四',
                                'fri': '周五',
                                'sat': '周六'
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
                                'sun': '周日',
                                'mon': '周一',
                                'tue': '周二',
                                'wed': '周三',
                                'thu': '周四',
                                'fri': '周五',
                                'sat': '周六'
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
                                'sun': '周日',
                                'mon': '周一',
                                'tue': '周二',
                                'wed': '周三',
                                'thu': '周四',
                                'fri': '周五',
                                'sat': '周六'
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
                                '1': '1季度',
                                '2': '2季度',
                                '3': '3季度',
                                '4': '4季度'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '第一季度',
                                '2': '第二季度',
                                '3': '第三季度',
                                '4': '第四季度'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1季度',
                                '2': '2季度',
                                '3': '3季度',
                                '4': '4季度'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '第一季度',
                                '2': '第二季度',
                                '3': '第三季度',
                                '4': '第四季度'
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
                            '0': '公元前',
                            '0-alt-variant': 'BCE',
                            '1': '公元',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '公元前',
                            '0-alt-variant': 'BCE',
                            '1': '公元',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '公元前',
                            '0-alt-variant': 'BCE',
                            '1': '公元',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'y年M月d日EEEE',
                        'long': 'y年M月d日',
                        'medium': 'y年M月d日',
                        'short': 'yy/M/d'
                    },
                    'timeFormats': {
                        'full': 'zzzzah:mm:ss',
                        'long': 'zah:mm:ss',
                        'medium': 'ah:mm:ss',
                        'short': 'ah:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'y年M月d日',
                            'yMMM': 'y年M月',
                            'yMM': 'y年M月',
                            'yMEd': 'y/M/dE',
                            'EHm': 'EHH:mm',
                            'Ehm': 'Eah:mm',
                            'Ed': 'd日E',
                            'd': 'd日',
                            'GyMMMd': 'Gy年M月d日',
                            'GyMMMEd': 'Gy年M月d日E',
                            'h': 'ah时',
                            'H': 'H时',
                            'yQQQQ': 'y年第Q季度',
                            'yQQQ': 'y年第Q季度',
                            'yMMMM': 'y年M月',
                            'yMMMEd': 'y年M月d日E',
                            'Hms': 'HH:mm:ss',
                            'hms': 'ah:mm:ss',
                            'Hm': 'HH:mm',
                            'hm': 'ah:mm',
                            'Ehms': 'Eah:mm:ss',
                            'EHms': 'EHH:mm:ss',
                            'Gy': 'Gy年',
                            'GyMMM': 'Gy年M月',
                            'M': 'M月',
                            'Md': 'M/d',
                            'MEd': 'M/dE',
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
                            'Timezone': '{1}{0}',
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
                                'd': 'M/d \u2013 M/d',
                                'M': 'M/d \u2013 M/d'
                            },
                            'M': {
                                'M': 'M\u2013M月'
                            },
                            'Hv': {
                                'H': 'v HH\u2013HH'
                            },
                            'hv': {
                                'a': 'vah时至ah时',
                                'h': 'vah时至h时'
                            },
                            'y': {
                                'y': 'y\u2013y年'
                            },
                            'yM': {
                                'M': 'y年M月至M月',
                                'y': 'y年M月至y年M月'
                            },
                            'yMd': {
                                'd': 'y/M/d \u2013 y/M/d',
                                'M': 'y/M/d \u2013 y/M/d',
                                'y': 'y/M/d \u2013 y/M/d'
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
                            'Hmv': {
                                'H': 'v HH:mm\u2013HH:mm',
                                'm': 'v HH:mm\u2013HH:mm'
                            },
                            'hmv': {
                                'a': 'vah:mm至ah:mm',
                                'h': 'vah:mm至h:mm',
                                'm': 'vah:mm至h:mm'
                            },
                            'Hm': {
                                'H': 'HH:mm\u2013HH:mm',
                                'm': 'HH:mm\u2013HH:mm'
                            },
                            'hm': {
                                'a': 'ah:mm至ah:mm',
                                'h': 'ah:mm至h:mm',
                                'm': 'ah:mm至h:mm'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'ah时至ah时',
                                'h': 'ah时至h时'
                            },
                            'd': {
                                'd': 'd\u2013d日'
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
