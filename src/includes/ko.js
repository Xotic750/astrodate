/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ko}.
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
        AstroDate.lang('ko', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'narrow': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'wide': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'narrow': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'wide': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'narrow': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'short': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'wide': {
                                    'sun': '일요일',
                                    'mon': '월요일',
                                    'tue': '화요일',
                                    'wed': '수요일',
                                    'thu': '목요일',
                                    'fri': '금요일',
                                    'sat': '토요일'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'narrow': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'short': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'wide': {
                                    'sun': '일요일',
                                    'mon': '월요일',
                                    'tue': '화요일',
                                    'wed': '수요일',
                                    'thu': '목요일',
                                    'fri': '금요일',
                                    'sat': '토요일'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': '제 1/4분기',
                                    '2': '제 2/4분기',
                                    '3': '제 3/4분기',
                                    '4': '제 4/4분기'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': '제 1/4분기',
                                    '2': '제 2/4분기',
                                    '3': '제 3/4분기',
                                    '4': '제 4/4분기'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'narrow': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'wide': {
                                    'am': '오전',
                                    'pm': '오후'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'narrow': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'wide': {
                                    'am': '오전',
                                    'pm': '오후'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '서력기원전',
                                '1': '서력기원',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '기원전',
                                '1': '서기',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '기원전',
                                '1': '서기',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
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
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd일',
                                'Ed': 'd일 (E)',
                                'EEEEd': 'd일 EEEE',
                                'Ehm': '(E) a h:mm',
                                'EHm': '(E) HH:mm',
                                'Ehms': '(E) a h:mm:ss',
                                'EHms': '(E) HH:mm:ss',
                                'Gy': 'G y년',
                                'GyMMM': 'G y년 MMM',
                                'GyMMMd': 'G y년 MMM d일',
                                'GyMMMEd': 'G y년 MMM d일 (E)',
                                'GyMMMEEEEd': 'G y년 MMM d일 EEEE',
                                'h': 'a h시',
                                'H': 'H시',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'a h:mm',
                                'Hm': 'HH:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'H시 m분 s초',
                                'M': 'M월',
                                'Md': 'M. d.',
                                'MEd': 'M. d. (E)',
                                'MEEEEd': 'M. d. EEEE',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d일',
                                'MMMEd': 'MMM d일 (E)',
                                'MMMEEEEd': 'MMM d일 EEEE',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y년',
                                'yM': 'y. M.',
                                'yMd': 'y. M. d.',
                                'yMEd': 'y. M. d. (E)',
                                'yMEEEEd': 'y. M. d. EEEE',
                                'yMM': 'y. M.',
                                'yMMM': 'y년 MMM',
                                'yMMMd': 'y년 MMM d일',
                                'yMMMEd': 'y년 MMM d일 (E)',
                                'yMMMEEEEd': 'y년 MMM d일 EEEE',
                                'yQQQ': 'y년 QQQ',
                                'yQQQQ': 'y년 QQQQ'
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
                                'intervalFormatFallback': '{0} ~ {1}',
                                'd': {
                                    'd': 'd일 ~ d일'
                                },
                                'h': {
                                    'a': 'a h시 ~ a h시',
                                    'h': 'a h시 ~ h시'
                                },
                                'H': {
                                    'H': 'HH ~ HH시'
                                },
                                'hm': {
                                    'a': 'a h:mm ~ a h:mm',
                                    'h': 'a h:mm~h:mm',
                                    'm': 'a h:mm~h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm ~ HH:mm',
                                    'm': 'HH:mm ~ HH:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm ~ a h:mm v',
                                    'h': 'a h:mm~h:mm v',
                                    'm': 'a h:mm~h:mm v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm ~ HH:mm v',
                                    'm': 'HH:mm ~ HH:mm v'
                                },
                                'hv': {
                                    'a': 'a h시 ~ a h시(v)',
                                    'h': 'a h시 ~ h시(v)'
                                },
                                'Hv': {
                                    'H': 'HH ~ HH시 v'
                                },
                                'M': {
                                    'M': 'M월 ~ M월'
                                },
                                'Md': {
                                    'd': 'M. d ~ M. d',
                                    'M': 'M. d ~ M. d'
                                },
                                'MEd': {
                                    'd': 'M. d (E) ~ M. d (E)',
                                    'M': 'M. d (E) ~ M. d (E)'
                                },
                                'MMM': {
                                    'M': 'MMM ~ MMM'
                                },
                                'MMMd': {
                                    'd': 'M월 d일 ~ d일',
                                    'M': 'M월 d일 ~ M월 d일'
                                },
                                'MMMEd': {
                                    'd': 'M월 d일 (E) ~ d일 (E)',
                                    'M': 'M월 d일 (E) ~ M월 d일 (E)'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y년 ~ y년'
                                },
                                'yM': {
                                    'M': 'y. M ~ y. M',
                                    'y': 'y. M ~ y. M'
                                },
                                'yMd': {
                                    'd': 'y. M. d. ~ y. M. d.',
                                    'M': 'y. M. d. ~ y. M. d.',
                                    'y': 'y. M. d. ~ y. M. d.'
                                },
                                'yMEd': {
                                    'd': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'M': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'y': 'y. M. d. (E) ~ y. M. d. (E)'
                                },
                                'yMMM': {
                                    'M': 'y년 M월~M월',
                                    'y': 'y년 M월 ~ y년 M월'
                                },
                                'yMMMd': {
                                    'd': 'y년 M월 d일~d일',
                                    'M': 'y년 M월 d일 ~ M월 d일',
                                    'y': 'y년 M월 d일 ~ y년 M월 d일'
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
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} 시간',
                    'regionFormat-type-daylight': '{0} 일광 절약 시간',
                    'regionFormat-type-standard': '{0} 표준시',
                    'fallbackFormat': '{1} ({0})'
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
