/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ja}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('ja', {
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
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'short': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'wide': {
                                    'sun': '日曜日',
                                    'mon': '月曜日',
                                    'tue': '火曜日',
                                    'wed': '水曜日',
                                    'thu': '木曜日',
                                    'fri': '金曜日',
                                    'sat': '土曜日'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'short': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'wide': {
                                    'sun': '日曜日',
                                    'mon': '月曜日',
                                    'tue': '火曜日',
                                    'wed': '水曜日',
                                    'thu': '木曜日',
                                    'fri': '金曜日',
                                    'sat': '土曜日'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '第1四半期',
                                    '2': '第2四半期',
                                    '3': '第3四半期',
                                    '4': '第4四半期'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '第1四半期',
                                    '2': '第2四半期',
                                    '3': '第3四半期',
                                    '4': '第4四半期'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'narrow': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'wide': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'narrow': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'wide': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '紀元前',
                                '1': '西暦',
                                '0-alt-variant': '西暦紀元前',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '紀元前',
                                '1': '西暦',
                                '0-alt-variant': '西暦紀元前',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BC',
                                '1': 'AD',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y年M月d日EEEE',
                            'long': 'y年M月d日',
                            'medium': 'y/MM/dd',
                            'short': 'y/MM/dd'
                        },
                        'timeFormats': {
                            'full': 'H時mm分ss秒 zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd日',
                                'Ed': 'd日(E)',
                                'EEEEd': 'd日EEEE',
                                'Ehm': 'a K 時 mm 分 (E)',
                                'EHm': 'HH 時 mm 分 (E)',
                                'Ehms': 'a K 時 mm 分 ss 秒 (E)',
                                'EHms': 'HH 時 mm 分 ss 秒 (E)',
                                'Gy': 'Gy年',
                                'GyMMM': 'Gy年M月',
                                'GyMMMd': 'Gy年M月d日',
                                'GyMMMEd': 'Gy年M月d日(E)',
                                'GyMMMEEEEd': 'Gy年M月d日EEEE',
                                'h': 'aK時',
                                'H': 'H時',
                                'hm': 'aK:mm',
                                'Hm': 'H:mm',
                                'hms': 'aK:mm:ss',
                                'Hms': 'H:mm:ss',
                                'M': 'M月',
                                'Md': 'M/d',
                                'MEd': 'M/d(E)',
                                'MEEEEd': 'M/dEEEE',
                                'MMM': 'M月',
                                'MMMd': 'M月d日',
                                'MMMEd': 'M月d日(E)',
                                'MMMEEEEd': 'M月d日EEEE',
                                'ms': 'mm:ss',
                                'y': 'y年',
                                'yM': 'y/M',
                                'yMd': 'y/M/d',
                                'yMEd': 'y/M/d(E)',
                                'yMEEEEd': 'y/M/dEEEE',
                                'yMM': 'y/MM',
                                'yMMM': 'y年M月',
                                'yMMMd': 'y年M月d日',
                                'yMMMEd': 'y年M月d日(E)',
                                'yMMMEEEEd': 'y年M月d日EEEE',
                                'yQQQ': 'y/QQQ',
                                'yQQQQ': 'yQQQQ'
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
                                'intervalFormatFallback': '{0}～{1}',
                                'd': {
                                    'd': 'd日～d日'
                                },
                                'h': {
                                    'a': 'aK時～aK時',
                                    'h': 'aK時～K時'
                                },
                                'H': {
                                    'H': 'H時～H時'
                                },
                                'hm': {
                                    'a': 'aK時mm分～aK時mm分',
                                    'h': 'aK時mm分～K時mm分',
                                    'm': 'aK時mm分～K時mm分'
                                },
                                'Hm': {
                                    'H': 'H時mm分～H時mm分',
                                    'm': 'H時mm分～H時mm分'
                                },
                                'hmv': {
                                    'a': 'aK時mm分～aK時mm分(v)',
                                    'h': 'aK時mm分～K時mm分(v)',
                                    'm': 'aK時mm分～K時mm分(v)'
                                },
                                'Hmv': {
                                    'H': 'H時mm分～H時mm分(v)',
                                    'm': 'H時mm分～H時mm分(v)'
                                },
                                'hv': {
                                    'a': 'aK時～aK時(v)',
                                    'h': 'aK時～K時(v)'
                                },
                                'Hv': {
                                    'H': 'H時～H時(v)'
                                },
                                'M': {
                                    'M': 'M月～M月'
                                },
                                'Md': {
                                    'd': 'MM/dd～MM/dd',
                                    'M': 'MM/dd～MM/dd'
                                },
                                'MEd': {
                                    'd': 'MM/dd(E)～MM/dd(E)',
                                    'M': 'MM/dd(E)～MM/dd(E)'
                                },
                                'MMM': {
                                    'M': 'M月～M月'
                                },
                                'MMMd': {
                                    'd': 'M月d日～d日',
                                    'M': 'M月d日～M月d日'
                                },
                                'MMMEd': {
                                    'd': 'M月d日(E)～d日(E)',
                                    'M': 'M月d日(E)～M月d日(E)'
                                },
                                'MMMM': {
                                    'M': 'M月～M月'
                                },
                                'y': {
                                    'y': 'y年～y年'
                                },
                                'yM': {
                                    'M': 'y/MM～y/MM',
                                    'y': 'y/MM～y/MM'
                                },
                                'yMd': {
                                    'd': 'y/MM/dd～y/MM/dd',
                                    'M': 'y/MM/dd～y/MM/dd',
                                    'y': 'y/MM/dd～y/MM/dd'
                                },
                                'yMEd': {
                                    'd': 'y/MM/dd(E)～y/MM/dd(E)',
                                    'M': 'y/MM/dd(E)～y/MM/dd(E)',
                                    'y': 'y/MM/dd(E)～y/MM/dd(E)'
                                },
                                'yMMM': {
                                    'M': 'y年M月～M月',
                                    'y': 'y年M月～y年M月'
                                },
                                'yMMMd': {
                                    'd': 'y年M月d日～d日',
                                    'M': 'y年M月d日～M月d日',
                                    'y': 'y年M月d日～y年M月d日'
                                },
                                'yMMMEd': {
                                    'd': 'y年M月d日(E)～d日(E)',
                                    'M': 'y年M月d日(E)～M月d日(E)',
                                    'y': 'y年M月d日(E)～y年M月d日(E)'
                                },
                                'yMMMM': {
                                    'M': 'y年M月～M月',
                                    'y': 'y年M月～y年M月'
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
                    'regionFormat-type-daylight': '{0}夏時間',
                    'regionFormat-type-standard': '{0}標準時',
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
