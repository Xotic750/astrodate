/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language zh-Hant}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('zh-Hant', {
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
                                '0': '西元前',
                                '1': '西元',
                                '0-alt-variant': '公元前',
                                '1-alt-variant': '公元'
                            },
                            'eraAbbr': {
                                '0': '西元前',
                                '1': '西元',
                                '0-alt-variant': '公元前',
                                '1-alt-variant': '公元'
                            },
                            'eraNarrow': {
                                '0': '西元前',
                                '1': '西元',
                                '0-alt-variant': '公元前',
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
                                'd': 'd日',
                                'Ed': 'd日（E）',
                                'Ehm': 'E a h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y 年',
                                'GyMMM': 'G y 年 M 月',
                                'GyMMMd': 'G y 年 M 月 d 日',
                                'GyMMMEd': 'G y 年 M 月 d 日E',
                                'h': 'ah時',
                                'H': 'H時',
                                'hm': 'ah:mm',
                                'Hm': 'HH:mm',
                                'hms': 'ah:mm:ss',
                                'Hms': 'HH:mm:ss',
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
                                'yMd': 'y/M/d',
                                'yMEd': 'y/M/d（E）',
                                'yMM': 'y-MM',
                                'yMMM': 'y年M月',
                                'yMMMd': 'y年M月d日',
                                'yMMMEd': 'y年M月d日E',
                                'yMMMM': 'y年M月',
                                'yQQQ': 'y年QQQ',
                                'yQQQQ': 'y年QQQQ'
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
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0}至{1}',
                                'd': {
                                    'd': 'd日至d日'
                                },
                                'h': {
                                    'a': 'ah時至ah時',
                                    'h': 'ah時至h時'
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
                                    'm': 'HH:mm至HH:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm 至a h:mm [v]',
                                    'h': 'a h:mm 至 h:mm [v]',
                                    'm': 'a h:mm 至 h:mm [v]'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm [v]',
                                    'm': 'HH:mm–HH:mm [v]'
                                },
                                'hv': {
                                    'a': 'a h 時至a h 時 [v]',
                                    'h': 'a h 時至 h 時 [v]'
                                },
                                'Hv': {
                                    'H': 'HH–HH [v]'
                                },
                                'M': {
                                    'M': 'M月至M月'
                                },
                                'Md': {
                                    'd': 'M/d至M/d',
                                    'M': 'M/d至M/d'
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
                                'MMMM': {
                                    'M': 'LLLL至 LLLL'
                                },
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
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}時間',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
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
