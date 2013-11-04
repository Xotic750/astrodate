/* AstroDate Language: th
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
        AstroDate.lang('th', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
                            },
                            'abbreviated': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
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
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
                            },
                            'abbreviated': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
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
                                '1': 'มกราคม',
                                '10': 'ตุลาคม',
                                '2': 'กุมภาพันธ์',
                                '11': 'พฤศจิกายน',
                                '3': 'มีนาคม',
                                '12': 'ธันวาคม',
                                '4': 'เมษายน',
                                '5': 'พฤษภาคม',
                                '6': 'มิถุนายน',
                                '7': 'กรกฎาคม',
                                '8': 'สิงหาคม',
                                '9': 'กันยายน'
                            },
                            'abbreviated': {
                                '1': 'ม.ค.',
                                '10': 'ต.ค.',
                                '2': 'ก.พ.',
                                '11': 'พ.ย.',
                                '3': 'มี.ค.',
                                '12': 'ธ.ค.',
                                '4': 'เม.ย.',
                                '5': 'พ.ค.',
                                '6': 'มิ.ย.',
                                '7': 'ก.ค.',
                                '8': 'ส.ค.',
                                '9': 'ก.ย.'
                            },
                            'narrow': {
                                '1': 'ม.ค.',
                                '10': 'ต.ค.',
                                '2': 'ก.พ.',
                                '11': 'พ.ย.',
                                '3': 'มี.ค.',
                                '12': 'ธ.ค.',
                                '4': 'เม.ย.',
                                '5': 'พ.ค.',
                                '6': 'มิ.ย.',
                                '7': 'ก.ค.',
                                '8': 'ส.ค.',
                                '9': 'ก.ย.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'มกราคม',
                                '10': 'ตุลาคม',
                                '2': 'กุมภาพันธ์',
                                '11': 'พฤศจิกายน',
                                '3': 'มีนาคม',
                                '12': 'ธันวาคม',
                                '4': 'เมษายน',
                                '5': 'พฤษภาคม',
                                '6': 'มิถุนายน',
                                '7': 'กรกฎาคม',
                                '8': 'สิงหาคม',
                                '9': 'กันยายน'
                            },
                            'abbreviated': {
                                '1': 'ม.ค.',
                                '10': 'ต.ค.',
                                '2': 'ก.พ.',
                                '11': 'พ.ย.',
                                '3': 'มี.ค.',
                                '12': 'ธ.ค.',
                                '4': 'เม.ย.',
                                '5': 'พ.ค.',
                                '6': 'มิ.ย.',
                                '7': 'ก.ค.',
                                '8': 'ส.ค.',
                                '9': 'ก.ย.'
                            },
                            'narrow': {
                                '1': 'ม.ค.',
                                '10': 'ต.ค.',
                                '2': 'ก.พ.',
                                '11': 'พ.ย.',
                                '3': 'มี.ค.',
                                '12': 'ธ.ค.',
                                '4': 'เม.ย.',
                                '5': 'พ.ค.',
                                '6': 'มิ.ย.',
                                '7': 'ก.ค.',
                                '8': 'ส.ค.',
                                '9': 'ก.ย.'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'วันอังคาร',
                                'fri': 'วันศุกร์',
                                'sun': 'วันอาทิตย์',
                                'sat': 'วันเสาร์',
                                'wed': 'วันพุธ',
                                'mon': 'วันจันทร์',
                                'thu': 'วันพฤหัสบดี'
                            },
                            'abbreviated': {
                                'tue': 'อ.',
                                'fri': 'ศ.',
                                'sun': 'อา.',
                                'sat': 'ส.',
                                'wed': 'พ.',
                                'mon': 'จ.',
                                'thu': 'พฤ.'
                            },
                            'narrow': {
                                'tue': 'อ',
                                'fri': 'ศ',
                                'sun': 'อา',
                                'sat': 'ส',
                                'wed': 'พ',
                                'mon': 'จ',
                                'thu': 'พฤ'
                            },
                            'short': {
                                'tue': 'อ.',
                                'fri': 'ศ.',
                                'sun': 'อา.',
                                'sat': 'ส.',
                                'wed': 'พ.',
                                'mon': 'จ.',
                                'thu': 'พฤ.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'วันอังคาร',
                                'fri': 'วันศุกร์',
                                'sun': 'วันอาทิตย์',
                                'sat': 'วันเสาร์',
                                'wed': 'วันพุธ',
                                'mon': 'วันจันทร์',
                                'thu': 'วันพฤหัสบดี'
                            },
                            'abbreviated': {
                                'tue': 'อ.',
                                'fri': 'ศ.',
                                'sun': 'อา.',
                                'sat': 'ส.',
                                'wed': 'พ.',
                                'mon': 'จ.',
                                'thu': 'พฤ.'
                            },
                            'narrow': {
                                'tue': 'อ',
                                'fri': 'ศ',
                                'sun': 'อา',
                                'sat': 'ส',
                                'wed': 'พ',
                                'mon': 'จ',
                                'thu': 'พฤ'
                            },
                            'short': {
                                'tue': 'อ.',
                                'fri': 'ศ.',
                                'sun': 'อา.',
                                'sat': 'ส.',
                                'wed': 'พ.',
                                'mon': 'จ.',
                                'thu': 'พฤ.'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'หลังเที่ยง',
                                'am': 'ก่อนเที่ยง'
                            },
                            'abbreviated': {
                                'pm': 'หลังเที่ยง',
                                'am': 'ก่อนเที่ยง'
                            },
                            'narrow': {
                                'pm': 'หลังเที่ยง',
                                'am': 'ก่อนเที่ยง'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'หลังเที่ยง',
                                'am': 'ก่อนเที่ยง'
                            },
                            'abbreviated': {
                                'pm': 'หลังเที่ยง',
                                'am': 'ก่อนเที่ยง'
                            },
                            'narrow': {
                                'pm': 'หลังเที่ยง',
                                'am': 'ก่อนเที่ยง'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'สามัญศักราช',
                            '0-alt-variant': 'ก่อนสามัญศักราช',
                            '0': 'ปีก่อนคริสต์ศักราช',
                            '1': 'คริสต์ศักราช'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'ส.ศ.',
                            '0-alt-variant': 'ก.ส.ศ.',
                            '0': 'ปีก่อน ค.ศ.',
                            '1': 'ค.ศ.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'ส.ศ.',
                            '0-alt-variant': 'ก.ส.ศ.',
                            '0': 'ก่อน ค.ศ.',
                            '1': 'ค.ศ.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEEที่ d MMMM G y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H นาฬิกา mm นาที ss วินาที zzzz',
                        'long': 'H นาฬิกา mm นาที ss วินาที z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
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
                            'EHm': 'E HH:mm',
                            'mmss': 'mm:ss',
                            'M': 'L',
                            'MMMMEd': 'E d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'G y',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MEd': 'E d/M',
                            'GyMMMd': 'd MMM G y',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E d MMM G y',
                            'h': 'h a',
                            'GyMMM': 'MMM G y',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E d/M/y',
                            'MMMEd': 'E d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E d MMM y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'Hmv': {
                                'H': 'H:mm-H:mm v',
                                'm': 'H:mm-H:mm v'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd/M - d/M',
                                'M': 'd/M - d/M'
                            },
                            'yMMMEd': {
                                'd': 'E d - E d MMM y',
                                'M': 'E d MMM - E d MMM y',
                                'y': 'E d MMM y - E d MMM y'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E d - E d MMM',
                                'M': 'E d MMM - E d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'E d - E d/M/y',
                                'M': 'E d/M/y - E d/M/y',
                                'y': 'E d/M/y - E d/M/y'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm-h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y - MMM y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'yM': {
                                'M': 'M/y - M/y',
                                'y': 'M/y - M/y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'yMd': {
                                'd': 'd-d/M/y',
                                'M': 'd/M/y - d/M/y',
                                'y': 'd/M/y - d/M/y'
                            },
                            'MMMd': {
                                'd': 'd - d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MEd': {
                                'd': 'E d - E d/M',
                                'M': 'E d - E d/M'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'MMMM–MMMM y',
                                'y': 'MMMM y - MMMM y'
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
