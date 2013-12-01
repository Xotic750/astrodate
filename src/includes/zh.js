/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language zh}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * </pre>
 */

/*
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
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('zh', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '一月',
                                    '2': '二月',
                                    '3': '三月',
                                    '4': '四月',
                                    '5': '五月',
                                    '6': '六月',
                                    '7': '七月',
                                    '8': '八月',
                                    '9': '九月',
                                    '10': '十月',
                                    '11': '十一月',
                                    '12': '十二月'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '一月',
                                    '2': '二月',
                                    '3': '三月',
                                    '4': '四月',
                                    '5': '五月',
                                    '6': '六月',
                                    '7': '七月',
                                    '8': '八月',
                                    '9': '九月',
                                    '10': '十月',
                                    '11': '十一月',
                                    '12': '十二月'
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
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'narrow': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'wide': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'narrow': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'wide': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '公元前',
                                '1': '公元',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '公元前',
                                '1': '公元',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '公元前',
                                '1': '公元',
                                '0-alt-variant': 'BCE',
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
                                'd': 'd日',
                                'Ed': 'd日E',
                                'Ehm': 'Eah:mm',
                                'EHm': 'EHH:mm',
                                'Ehms': 'Eah:mm:ss',
                                'EHms': 'EHH:mm:ss',
                                'Gy': 'Gy年',
                                'GyMMM': 'Gy年M月',
                                'GyMMMd': 'Gy年M月d日',
                                'GyMMMEd': 'Gy年M月d日E',
                                'h': 'ah时',
                                'H': 'H时',
                                'hm': 'ah:mm',
                                'Hm': 'HH:mm',
                                'hms': 'ah:mm:ss',
                                'Hms': 'HH:mm:ss',
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
                                'yMd': 'y/M/d',
                                'yMEd': 'y/M/dE',
                                'yMM': 'y年M月',
                                'yMMM': 'y年M月',
                                'yMMMd': 'y年M月d日',
                                'yMMMEd': 'y年M月d日E',
                                'yMMMM': 'y年M月',
                                'yQQQ': 'y年第Q季度',
                                'yQQQQ': 'y年第Q季度'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{1}{0}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d日'
                                },
                                'h': {
                                    'a': 'ah时至ah时',
                                    'h': 'ah时至h时'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'ah:mm至ah:mm',
                                    'h': 'ah:mm至h:mm',
                                    'm': 'ah:mm至h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'vah:mm至ah:mm',
                                    'h': 'vah:mm至h:mm',
                                    'm': 'vah:mm至h:mm'
                                },
                                'Hmv': {
                                    'H': 'v HH:mm–HH:mm',
                                    'm': 'v HH:mm–HH:mm'
                                },
                                'hv': {
                                    'a': 'vah时至ah时',
                                    'h': 'vah时至h时'
                                },
                                'Hv': {
                                    'H': 'v HH–HH'
                                },
                                'M': {
                                    'M': 'M–M月'
                                },
                                'Md': {
                                    'd': 'M/d – M/d',
                                    'M': 'M/d – M/d'
                                },
                                'MEd': {
                                    'd': 'M/dE至M/dE',
                                    'M': 'M/dE至M/dE'
                                },
                                'MMM': {
                                    'M': 'LLL至LLL'
                                },
                                'MMMd': {
                                    'd': 'M月d日至d日',
                                    'M': 'M月d日至M月d日'
                                },
                                'MMMEd': {
                                    'd': 'M月d日E至d日E',
                                    'M': 'M月d日E至M月d日E'
                                },
                                'y': {
                                    'y': 'y–y年'
                                },
                                'yM': {
                                    'M': 'y年M月至M月',
                                    'y': 'y年M月至y年M月'
                                },
                                'yMd': {
                                    'd': 'y/M/d – y/M/d',
                                    'M': 'y/M/d – y/M/d',
                                    'y': 'y/M/d – y/M/d'
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
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}时间',
                    'regionFormat-type-daylight': '{0}夏令时间',
                    'regionFormat-type-standard': '{0}标准时间',
                    'fallbackFormat': '{1}（{0}）'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));
