/* AstroDate Language: ko
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
        AstroDate.lang('ko', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '제 1/4분기',
                                '2': '제 2/4분기',
                                '3': '제 3/4분기',
                                '4': '제 4/4분기'
                            },
                            'abbreviated': {
                                '1': '1분기',
                                '2': '2분기',
                                '3': '3분기',
                                '4': '4분기'
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
                                '1': '제 1/4분기',
                                '2': '제 2/4분기',
                                '3': '제 3/4분기',
                                '4': '제 4/4분기'
                            },
                            'abbreviated': {
                                '1': '1분기',
                                '2': '2분기',
                                '3': '3분기',
                                '4': '4분기'
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
                                '1': '1월',
                                '10': '10월',
                                '2': '2월',
                                '11': '11월',
                                '3': '3월',
                                '12': '12월',
                                '4': '4월',
                                '5': '5월',
                                '6': '6월',
                                '7': '7월',
                                '8': '8월',
                                '9': '9월'
                            },
                            'abbreviated': {
                                '1': '1월',
                                '10': '10월',
                                '2': '2월',
                                '11': '11월',
                                '3': '3월',
                                '12': '12월',
                                '4': '4월',
                                '5': '5월',
                                '6': '6월',
                                '7': '7월',
                                '8': '8월',
                                '9': '9월'
                            },
                            'narrow': {
                                '1': '1월',
                                '10': '10월',
                                '2': '2월',
                                '11': '11월',
                                '3': '3월',
                                '12': '12월',
                                '4': '4월',
                                '5': '5월',
                                '6': '6월',
                                '7': '7월',
                                '8': '8월',
                                '9': '9월'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1월',
                                '10': '10월',
                                '2': '2월',
                                '11': '11월',
                                '3': '3월',
                                '12': '12월',
                                '4': '4월',
                                '5': '5월',
                                '6': '6월',
                                '7': '7월',
                                '8': '8월',
                                '9': '9월'
                            },
                            'abbreviated': {
                                '1': '1월',
                                '10': '10월',
                                '2': '2월',
                                '11': '11월',
                                '3': '3월',
                                '12': '12월',
                                '4': '4월',
                                '5': '5월',
                                '6': '6월',
                                '7': '7월',
                                '8': '8월',
                                '9': '9월'
                            },
                            'narrow': {
                                '1': '1월',
                                '10': '10월',
                                '2': '2월',
                                '11': '11월',
                                '3': '3월',
                                '12': '12월',
                                '4': '4월',
                                '5': '5월',
                                '6': '6월',
                                '7': '7월',
                                '8': '8월',
                                '9': '9월'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': '화요일',
                                'fri': '금요일',
                                'sun': '일요일',
                                'sat': '토요일',
                                'wed': '수요일',
                                'mon': '월요일',
                                'thu': '목요일'
                            },
                            'abbreviated': {
                                'tue': '화',
                                'fri': '금',
                                'sun': '일',
                                'sat': '토',
                                'wed': '수',
                                'mon': '월',
                                'thu': '목'
                            },
                            'narrow': {
                                'tue': '화',
                                'fri': '금',
                                'sun': '일',
                                'sat': '토',
                                'wed': '수',
                                'mon': '월',
                                'thu': '목'
                            },
                            'short': {
                                'tue': '화',
                                'fri': '금',
                                'sun': '일',
                                'sat': '토',
                                'wed': '수',
                                'mon': '월',
                                'thu': '목'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': '화요일',
                                'fri': '금요일',
                                'sun': '일요일',
                                'sat': '토요일',
                                'wed': '수요일',
                                'mon': '월요일',
                                'thu': '목요일'
                            },
                            'abbreviated': {
                                'tue': '화',
                                'fri': '금',
                                'sun': '일',
                                'sat': '토',
                                'wed': '수',
                                'mon': '월',
                                'thu': '목'
                            },
                            'narrow': {
                                'tue': '화',
                                'fri': '금',
                                'sun': '일',
                                'sat': '토',
                                'wed': '수',
                                'mon': '월',
                                'thu': '목'
                            },
                            'short': {
                                'tue': '화',
                                'fri': '금',
                                'sun': '일',
                                'sat': '토',
                                'wed': '수',
                                'mon': '월',
                                'thu': '목'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': '오후',
                                'am': '오전'
                            },
                            'abbreviated': {
                                'pm': '오후',
                                'am': '오전'
                            },
                            'narrow': {
                                'pm': '오후',
                                'am': '오전'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': '오후',
                                'am': '오전'
                            },
                            'abbreviated': {
                                'pm': '오후',
                                'am': '오전'
                            },
                            'narrow': {
                                'pm': '오후',
                                'am': '오전'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': '서력기원전',
                            '1': '서력기원'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': '기원전',
                            '1': '서기'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': '기원전',
                            '1': '서기'
                        }
                    },
                    'dateFormats': {
                        'full': 'y년 M월 d일 EEEE',
                        'long': 'y년 M월 d일',
                        'medium': 'y. M. d.',
                        'short': 'yy. M. d.'
                    },
                    'timeFormats': {
                        'full': 'a h시 m분 s초 zzzz',
                        'long': 'a h시 m분 s초 z',
                        'medium': 'a h:mm:ss',
                        'short': 'a h:mm'
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
                            'EHm': '(E) HH:mm',
                            'Gy': 'G y년',
                            'Ehm': '(E) a h:mm',
                            'Md': 'M. d.',
                            'Ehms': '(E) a h:mm:ss',
                            'EHms': '(E) HH:mm:ss',
                            'GyMMMd': 'G y년 MMM d일',
                            'ms': 'mm:ss',
                            'EEEEd': 'd일 EEEE',
                            'mmss': 'mm:ss',
                            'M': 'M월',
                            'd': 'd일',
                            'yM': 'y. M.',
                            'MMM': 'LLL',
                            'GyMMMEEEEd': 'G y년 MMM d일 EEEE',
                            'Ed': 'd일 (E)',
                            'MEd': 'M. d. (E)',
                            'hms': 'a h:mm:ss',
                            'GyMMMEd': 'G y년 MMM d일 (E)',
                            'h': 'a h시',
                            'GyMMM': 'G y년 MMM',
                            'yMMMEd': 'y년 MMM d일 (E)',
                            'MEEEEd': 'M. d. EEEE',
                            'Hm': 'HH:mm',
                            'H': 'H시',
                            'yMEd': 'y. M. d. (E)',
                            'MMMEd': 'MMM d일 (E)',
                            'hm': 'a h:mm',
                            'Hms': 'H시 m분 s초',
                            'HHmmss': 'HH:mm:ss',
                            'yMd': 'y. M. d.',
                            'MMMd': 'MMM d일',
                            'yMEEEEd': 'y. M. d. EEEE',
                            'MMMEEEEd': 'MMM d일 EEEE',
                            'y': 'y년',
                            'yMM': 'y. M.',
                            'yMMM': 'y년 MMM',
                            'yMMMd': 'y년 MMM d일',
                            'yMMMEEEEd': 'y년 MMM d일 EEEE',
                            'yQQQ': 'y년 QQQ',
                            'yQQQQ': 'y년 QQQQ'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH ~ HH시 v'
                            },
                            'Hmv': {
                                'H': 'HH:mm ~ HH:mm v',
                                'm': 'HH:mm ~ HH:mm v'
                            },
                            'h': {
                                'a': 'a h시 ~ a h시',
                                'h': 'a h시 ~ h시'
                            },
                            'M': {
                                'M': 'M월 ~ M월'
                            },
                            'intervalFormatFallback': '{0} ~ {1}',
                            'Md': {
                                'd': 'M. d ~ M. d',
                                'M': 'M. d ~ M. d'
                            },
                            'd': {
                                'd': 'd일 ~ d일'
                            },
                            'MMMEd': {
                                'd': 'M월 d일 (E) ~ d일 (E)',
                                'M': 'M월 d일 (E) ~ M월 d일 (E)'
                            },
                            'hm': {
                                'a': 'a h:mm ~ a h:mm',
                                'm': 'a h:mm~h:mm',
                                'h': 'a h:mm~h:mm'
                            },
                            'yMEd': {
                                'd': 'y. M. d. (E) ~ y. M. d. (E)',
                                'M': 'y. M. d. (E) ~ y. M. d. (E)',
                                'y': 'y. M. d. (E) ~ y. M. d. (E)'
                            },
                            'hmv': {
                                'a': 'a h:mm ~ a h:mm v',
                                'm': 'a h:mm~h:mm v',
                                'h': 'a h:mm~h:mm v'
                            },
                            'yMMM': {
                                'M': 'y년 M월~M월',
                                'y': 'y년 M월 ~ y년 M월'
                            },
                            'H': {
                                'H': 'HH ~ HH시'
                            },
                            'Hm': {
                                'H': 'HH:mm ~ HH:mm',
                                'm': 'HH:mm ~ HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM ~ MMM'
                            },
                            'yM': {
                                'M': 'y. M ~ y. M',
                                'y': 'y. M ~ y. M'
                            },
                            'yMMMd': {
                                'd': 'y년 M월 d일~d일',
                                'M': 'y년 M월 d일 ~ M월 d일',
                                'y': 'y년 M월 d일 ~ y년 M월 d일'
                            },
                            'hv': {
                                'a': 'a h시 ~ a h시(v)',
                                'h': 'a h시 ~ h시(v)'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'yMd': {
                                'd': 'y. M. d. ~ y. M. d.',
                                'M': 'y. M. d. ~ y. M. d.',
                                'y': 'y. M. d. ~ y. M. d.'
                            },
                            'MMMd': {
                                'd': 'M월 d일 ~ d일',
                                'M': 'M월 d일 ~ M월 d일'
                            },
                            'MEd': {
                                'd': 'M. d (E) ~ M. d (E)',
                                'M': 'M. d (E) ~ M. d (E)'
                            },
                            'y': {
                                'y': 'y년 ~ y년'
                            },
                            'yMMMEd': {
                                'd': 'y년 M월 d일 (E) ~ d일 (E)',
                                'M': 'y년 M월 d일 (E) ~ M월 d일 (E)',
                                'y': 'y년 M월 d일 (E) ~ y년 M월 d일 (E)'
                            },
                            'yMMMEEEEd': {
                                'd': 'y년 M월 d일 EEEE ~ d일 EEEE',
                                'M': 'y년 M월 d일 EEEE ~ M월 d일 EEEE',
                                'y': 'y년 M월 d일 EEEE ~ y년 M월 d일 EEEE'
                            },
                            'yMMMM': {
                                'M': 'y년 MM월 ~ MM월',
                                'y': 'y년 MM월 ~ y년 MM월'
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
