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
            module.exports = definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }(function (AstroDate) {
        AstroDate.lang('zh-Hant', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '第1季',
                                '2': '第2季',
                                '3': '第3季',
                                '4': '第4季'
                            },
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
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '第1季',
                                '2': '第2季',
                                '3': '第3季',
                                '4': '第4季'
                            },
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
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': '1月',
                                '10': '10月',
                                '2': '2月',
                                '11': '11月',
                                '3': '3月',
                                '12': '12月',
                                '4': '4月',
                                '5': '5月',
                                '6': '6月',
                                '7': '7月',
                                '8': '8月',
                                '9': '9月'
                            },
                            'abbreviated': {
                                '1': '1月',
                                '10': '10月',
                                '2': '2月',
                                '11': '11月',
                                '3': '3月',
                                '12': '12月',
                                '4': '4月',
                                '5': '5月',
                                '6': '6月',
                                '7': '7月',
                                '8': '8月',
                                '9': '9月'
                            },
                            'narrow': {
                                '1': '1',
                                '10': '10',
                                '2': '2',
                                '11': '11',
                                '3': '3',
                                '12': '12',
                                '4': '4',
                                '5': '5',
                                '6': '6',
                                '7': '7',
                                '8': '8',
                                '9': '9'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1月',
                                '10': '10月',
                                '2': '2月',
                                '11': '11月',
                                '3': '3月',
                                '12': '12月',
                                '4': '4月',
                                '5': '5月',
                                '6': '6月',
                                '7': '7月',
                                '8': '8月',
                                '9': '9月'
                            },
                            'abbreviated': {
                                '1': '1月',
                                '10': '10月',
                                '2': '2月',
                                '11': '11月',
                                '3': '3月',
                                '12': '12月',
                                '4': '4月',
                                '5': '5月',
                                '6': '6月',
                                '7': '7月',
                                '8': '8月',
                                '9': '9月'
                            },
                            'narrow': {
                                '1': '1',
                                '10': '10',
                                '2': '2',
                                '11': '11',
                                '3': '3',
                                '12': '12',
                                '4': '4',
                                '5': '5',
                                '6': '6',
                                '7': '7',
                                '8': '8',
                                '9': '9'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': '星期二',
                                'fri': '星期五',
                                'sun': '星期日',
                                'sat': '星期六',
                                'wed': '星期三',
                                'mon': '星期一',
                                'thu': '星期四'
                            },
                            'abbreviated': {
                                'tue': '週二',
                                'fri': '週五',
                                'sun': '週日',
                                'sat': '週六',
                                'wed': '週三',
                                'mon': '週一',
                                'thu': '週四'
                            },
                            'narrow': {
                                'tue': '二',
                                'fri': '五',
                                'sun': '日',
                                'sat': '六',
                                'wed': '三',
                                'mon': '一',
                                'thu': '四'
                            },
                            'short': {
                                'tue': '二',
                                'fri': '五',
                                'sun': '日',
                                'sat': '六',
                                'wed': '三',
                                'mon': '一',
                                'thu': '四'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': '星期二',
                                'fri': '星期五',
                                'sun': '星期日',
                                'sat': '星期六',
                                'wed': '星期三',
                                'mon': '星期一',
                                'thu': '星期四'
                            },
                            'abbreviated': {
                                'tue': '週二',
                                'fri': '週五',
                                'sun': '週日',
                                'sat': '週六',
                                'wed': '週三',
                                'mon': '週一',
                                'thu': '週四'
                            },
                            'narrow': {
                                'tue': '二',
                                'fri': '五',
                                'sun': '日',
                                'sat': '六',
                                'wed': '三',
                                'mon': '一',
                                'thu': '四'
                            },
                            'short': {
                                'tue': '二',
                                'fri': '五',
                                'sun': '日',
                                'sat': '六',
                                'wed': '三',
                                'mon': '一',
                                'thu': '四'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'noon': '中午',
                                'morning': '上午',
                                'earlyMorning': '清晨',
                                'afternoon': '下午',
                                'night': '晚上',
                                'am': '上午',
                                'midDay': '中午',
                                'pm': '下午',
                                'weeHours': '凌晨'
                            },
                            'abbreviated': {
                                'noon': '中午',
                                'morning': '上午',
                                'earlyMorning': '清晨',
                                'afternoon': '下午',
                                'night': '晚上',
                                'am': '上午',
                                'midDay': '中午',
                                'pm': '下午',
                                'weeHours': '凌晨'
                            },
                            'narrow': {
                                'noon': '中午',
                                'morning': '上午',
                                'earlyMorning': '清晨',
                                'afternoon': '下午',
                                'night': '晚上',
                                'am': '上午',
                                'midDay': '中午',
                                'pm': '下午',
                                'weeHours': '凌晨'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'noon': '中午',
                                'morning': '上午',
                                'earlyMorning': '清晨',
                                'afternoon': '下午',
                                'night': '晚上',
                                'am': '上午',
                                'midDay': '中午',
                                'pm': '下午',
                                'weeHours': '凌晨'
                            },
                            'abbreviated': {
                                'noon': '中午',
                                'morning': '上午',
                                'earlyMorning': '清晨',
                                'afternoon': '下午',
                                'night': '晚上',
                                'am': '上午',
                                'midDay': '中午',
                                'pm': '下午',
                                'weeHours': '凌晨'
                            },
                            'narrow': {
                                'noon': '中午',
                                'morning': '上午',
                                'earlyMorning': '清晨',
                                'afternoon': '下午',
                                'night': '晚上',
                                'am': '上午',
                                'midDay': '中午',
                                'pm': '下午',
                                'weeHours': '凌晨'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': '公元',
                            '0-alt-variant': '公元前',
                            '0': '西元前',
                            '1': '西元'
                        },
                        'eraAbbr': {
                            '1-alt-variant': '公元',
                            '0-alt-variant': '公元前',
                            '0': '西元前',
                            '1': '西元'
                        },
                        'eraNarrow': {
                            '1-alt-variant': '公元',
                            '0-alt-variant': '公元前',
                            '0': '西元前',
                            '1': '西元'
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
                        'appendItems': {
                            'Minute': '{0} ({2}: {1})',
                            'Day': '{0} ({2}: {1})',
                            'Era': '{1} {0}',
                            'Week': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Hour': '{0} ({2}: {1})',
                            'Year': '{1} {0}',
                            'Month': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Second': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}'
                        },
                        'long': '{1} {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'M月',
                            'd': 'd日',
                            'Ehms': 'E a h:mm:ss',
                            'Ehm': 'E a h:mm',
                            'Md': 'M/d',
                            'Ed': 'd日（E）',
                            'Gy': 'G y 年',
                            'yMd': 'y/M/d',
                            'MMMMdd': 'M月dd日',
                            'MMMd': 'M月d日',
                            'MMdd': 'MM/dd',
                            'MEd': 'M/d（E）',
                            'GyMMMd': 'G y 年 M 月 d 日',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'ah:mm:ss',
                            'GyMMMEd': 'G y 年 M 月 d 日E',
                            'h': 'ah時',
                            'GyMMM': 'G y 年 M 月',
                            'Hm': 'HH:mm',
                            'H': 'H時',
                            'yMEd': 'y/M/d（E）',
                            'MMMEd': 'M月d日E',
                            'hm': 'ah:mm',
                            'Hms': 'HH:mm:ss',
                            'yM': 'y/M',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y年',
                            'yMM': 'y-MM',
                            'yMMM': 'y年M月',
                            'yMMMd': 'y年M月d日',
                            'yMMMEd': 'y年M月d日E',
                            'yMMMM': 'y年M月',
                            'yQQQ': 'y年QQQ',
                            'yQQQQ': 'y年QQQQ'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH–HH [v]'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm [v]',
                                'm': 'HH:mm–HH:mm [v]'
                            },
                            'h': {
                                'a': 'ah時至ah時',
                                'h': 'ah時至h時'
                            },
                            'M': {
                                'M': 'M月至M月'
                            },
                            'intervalFormatFallback': '{0}至{1}',
                            'Md': {
                                'd': 'M/d至M/d',
                                'M': 'M/d至M/d'
                            },
                            'd': {
                                'd': 'd日至d日'
                            },
                            'MMMEd': {
                                'd': 'M月d日E至d日E',
                                'M': 'M月d日E至M月d日E'
                            },
                            'hm': {
                                'a': 'ah:mm至ah:mm',
                                'm': 'ah:mm至h:mm',
                                'h': 'ah:mm至h:mm'
                            },
                            'yMEd': {
                                'd': 'y/M/dE至y/M/dE',
                                'M': 'y/M/dE至y/M/dE',
                                'y': 'y/M/dE至y/M/dE'
                            },
                            'hmv': {
                                'a': 'a h:mm 至a h:mm [v]',
                                'm': 'a h:mm 至 h:mm [v]',
                                'h': 'a h:mm 至 h:mm [v]'
                            },
                            'yMMM': {
                                'M': 'y年M月至M月',
                                'y': 'y年M月至y年M月'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm至HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL至LLL'
                            },
                            'yM': {
                                'M': 'y/M至y/M',
                                'y': 'y/M至y/M'
                            },
                            'yMMMd': {
                                'd': 'y年M月d日至d日',
                                'M': 'y年M月d日至M月d日',
                                'y': 'y年M月d日至y年M月d日'
                            },
                            'hv': {
                                'a': 'a h 時至a h 時 [v]',
                                'h': 'a h 時至 h 時 [v]'
                            },
                            'MMMM': {
                                'M': 'LLLL至 LLLL'
                            },
                            'yMd': {
                                'd': 'y/M/d至y/M/d',
                                'M': 'y/M/d至y/M/d',
                                'y': 'y/M/d至y/M/d'
                            },
                            'MMMd': {
                                'd': 'M月d日至d日',
                                'M': 'M月d日至M月d日'
                            },
                            'MEd': {
                                'd': 'M/dE至M/dE',
                                'M': 'M/dE至M/dE'
                            },
                            'y': {
                                'y': 'y至y'
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
