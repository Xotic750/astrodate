/* AstroDate Language: ja
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
    }((function (AstroDate) {
        AstroDate.lang('ja', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '第1四半期',
                                '2': '第2四半期',
                                '3': '第3四半期',
                                '4': '第4四半期'
                            },
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
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '第1四半期',
                                '2': '第2四半期',
                                '3': '第3四半期',
                                '4': '第4四半期'
                            },
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
                                'tue': '火曜日',
                                'fri': '金曜日',
                                'sun': '日曜日',
                                'sat': '土曜日',
                                'wed': '水曜日',
                                'mon': '月曜日',
                                'thu': '木曜日'
                            },
                            'abbreviated': {
                                'tue': '火',
                                'fri': '金',
                                'sun': '日',
                                'sat': '土',
                                'wed': '水',
                                'mon': '月',
                                'thu': '木'
                            },
                            'narrow': {
                                'tue': '火',
                                'fri': '金',
                                'sun': '日',
                                'sat': '土',
                                'wed': '水',
                                'mon': '月',
                                'thu': '木'
                            },
                            'short': {
                                'tue': '火',
                                'fri': '金',
                                'sun': '日',
                                'sat': '土',
                                'wed': '水',
                                'mon': '月',
                                'thu': '木'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': '火曜日',
                                'fri': '金曜日',
                                'sun': '日曜日',
                                'sat': '土曜日',
                                'wed': '水曜日',
                                'mon': '月曜日',
                                'thu': '木曜日'
                            },
                            'abbreviated': {
                                'tue': '火',
                                'fri': '金',
                                'sun': '日',
                                'sat': '土',
                                'wed': '水',
                                'mon': '月',
                                'thu': '木'
                            },
                            'narrow': {
                                'tue': '火',
                                'fri': '金',
                                'sun': '日',
                                'sat': '土',
                                'wed': '水',
                                'mon': '月',
                                'thu': '木'
                            },
                            'short': {
                                'tue': '火',
                                'fri': '金',
                                'sun': '日',
                                'sat': '土',
                                'wed': '水',
                                'mon': '月',
                                'thu': '木'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': '午後',
                                'am': '午前',
                                'noon': '正午'
                            },
                            'abbreviated': {
                                'pm': '午後',
                                'am': '午前',
                                'noon': '正午'
                            },
                            'narrow': {
                                'pm': '午後',
                                'am': '午前',
                                'noon': '正午'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': '午後',
                                'am': '午前',
                                'noon': '正午'
                            },
                            'abbreviated': {
                                'pm': '午後',
                                'am': '午前',
                                'noon': '正午'
                            },
                            'narrow': {
                                'pm': '午後',
                                'am': '午前',
                                'noon': '正午'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': '西暦紀元前',
                            '0': '紀元前',
                            '1': '西暦'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': '西暦紀元前',
                            '0': '紀元前',
                            '1': '西暦'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'BC',
                            '1': 'AD'
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
                            'EHm': 'HH 時 mm 分 (E)',
                            'Gy': 'Gy年',
                            'Ehm': 'a K 時 mm 分 (E)',
                            'Md': 'M/d',
                            'Ehms': 'a K 時 mm 分 ss 秒 (E)',
                            'EHms': 'HH 時 mm 分 ss 秒 (E)',
                            'GyMMMd': 'Gy年M月d日',
                            'ms': 'mm:ss',
                            'EEEEd': 'd日EEEE',
                            'M': 'M月',
                            'd': 'd日',
                            'yM': 'y/M',
                            'MMM': 'M月',
                            'GyMMMEEEEd': 'Gy年M月d日EEEE',
                            'Ed': 'd日(E)',
                            'MEd': 'M/d(E)',
                            'hms': 'aK:mm:ss',
                            'GyMMMEd': 'Gy年M月d日(E)',
                            'h': 'aK時',
                            'GyMMM': 'Gy年M月',
                            'yMMMEd': 'y年M月d日(E)',
                            'MEEEEd': 'M/dEEEE',
                            'Hm': 'H:mm',
                            'H': 'H時',
                            'yMEd': 'y/M/d(E)',
                            'MMMEd': 'M月d日(E)',
                            'hm': 'aK:mm',
                            'Hms': 'H:mm:ss',
                            'yMd': 'y/M/d',
                            'MMMd': 'M月d日',
                            'yMEEEEd': 'y/M/dEEEE',
                            'MMMEEEEd': 'M月d日EEEE',
                            'y': 'y年',
                            'yMM': 'y/MM',
                            'yMMM': 'y年M月',
                            'yMMMd': 'y年M月d日',
                            'yMMMEEEEd': 'y年M月d日EEEE',
                            'yQQQ': 'y/QQQ',
                            'yQQQQ': 'yQQQQ'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'H時～H時(v)'
                            },
                            'Hmv': {
                                'H': 'H時mm分～H時mm分(v)',
                                'm': 'H時mm分～H時mm分(v)'
                            },
                            'h': {
                                'a': 'aK時～aK時',
                                'h': 'aK時～K時'
                            },
                            'M': {
                                'M': 'M月～M月'
                            },
                            'intervalFormatFallback': '{0}～{1}',
                            'Md': {
                                'd': 'MM/dd～MM/dd',
                                'M': 'MM/dd～MM/dd'
                            },
                            'd': {
                                'd': 'd日～d日'
                            },
                            'MMMEd': {
                                'd': 'M月d日(E)～d日(E)',
                                'M': 'M月d日(E)～M月d日(E)'
                            },
                            'hm': {
                                'a': 'aK時mm分～aK時mm分',
                                'm': 'aK時mm分～K時mm分',
                                'h': 'aK時mm分～K時mm分'
                            },
                            'yMEd': {
                                'd': 'y/MM/dd(E)～y/MM/dd(E)',
                                'M': 'y/MM/dd(E)～y/MM/dd(E)',
                                'y': 'y/MM/dd(E)～y/MM/dd(E)'
                            },
                            'hmv': {
                                'a': 'aK時mm分～aK時mm分(v)',
                                'm': 'aK時mm分～K時mm分(v)',
                                'h': 'aK時mm分～K時mm分(v)'
                            },
                            'yMMM': {
                                'M': 'y年M月～M月',
                                'y': 'y年M月～y年M月'
                            },
                            'H': {
                                'H': 'H時～H時'
                            },
                            'Hm': {
                                'H': 'H時mm分～H時mm分',
                                'm': 'H時mm分～H時mm分'
                            },
                            'MMM': {
                                'M': 'M月～M月'
                            },
                            'yM': {
                                'M': 'y/MM～y/MM',
                                'y': 'y/MM～y/MM'
                            },
                            'yMMMd': {
                                'd': 'y年M月d日～d日',
                                'M': 'y年M月d日～M月d日',
                                'y': 'y年M月d日～y年M月d日'
                            },
                            'hv': {
                                'a': 'aK時～aK時(v)',
                                'h': 'aK時～K時(v)'
                            },
                            'MMMM': {
                                'M': 'M月～M月'
                            },
                            'yMd': {
                                'd': 'y/MM/dd～y/MM/dd',
                                'M': 'y/MM/dd～y/MM/dd',
                                'y': 'y/MM/dd～y/MM/dd'
                            },
                            'MMMd': {
                                'd': 'M月d日～d日',
                                'M': 'M月d日～M月d日'
                            },
                            'MEd': {
                                'd': 'MM/dd(E)～MM/dd(E)',
                                'M': 'MM/dd(E)～MM/dd(E)'
                            },
                            'y': {
                                'y': 'y年～y年'
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
            }
        });
    }())));
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
