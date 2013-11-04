/* AstroDate Language: vi
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
        AstroDate.lang('vi', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'Quý 1',
                                '2': 'Quý 2',
                                '3': 'Quý 3',
                                '4': 'Quý 4'
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
                                '1': 'Quý 1',
                                '2': 'Quý 2',
                                '3': 'Quý 3',
                                '4': 'Quý 4'
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
                                '1': 'tháng 1',
                                '10': 'tháng 10',
                                '2': 'tháng 2',
                                '11': 'tháng 11',
                                '3': 'tháng 3',
                                '12': 'tháng 12',
                                '4': 'tháng 4',
                                '5': 'tháng 5',
                                '6': 'tháng 6',
                                '7': 'tháng 7',
                                '8': 'tháng 8',
                                '9': 'tháng 9'
                            },
                            'abbreviated': {
                                '1': 'thg 1',
                                '10': 'thg 10',
                                '2': 'thg 2',
                                '11': 'thg 11',
                                '3': 'thg 3',
                                '12': 'thg 12',
                                '4': 'thg 4',
                                '5': 'thg 5',
                                '6': 'thg 6',
                                '7': 'thg 7',
                                '8': 'thg 8',
                                '9': 'thg 9'
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
                                '1': 'Tháng 1',
                                '10': 'Tháng 10',
                                '2': 'Tháng 2',
                                '11': 'Tháng 11',
                                '3': 'Tháng 3',
                                '12': 'Tháng 12',
                                '4': 'Tháng 4',
                                '5': 'Tháng 5',
                                '6': 'Tháng 6',
                                '7': 'Tháng 7',
                                '8': 'Tháng 8',
                                '9': 'Tháng 9'
                            },
                            'abbreviated': {
                                '1': 'Thg 1',
                                '10': 'Thg 10',
                                '2': 'Thg 2',
                                '11': 'Thg 11',
                                '3': 'Thg 3',
                                '12': 'Thg 12',
                                '4': 'Thg 4',
                                '5': 'Thg 5',
                                '6': 'Thg 6',
                                '7': 'Thg 7',
                                '8': 'Thg 8',
                                '9': 'Thg 9'
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
                                'tue': 'Thứ Ba',
                                'fri': 'Thứ Sáu',
                                'sun': 'Chủ Nhật',
                                'sat': 'Thứ Bảy',
                                'wed': 'Thứ Tư',
                                'mon': 'Thứ Hai',
                                'thu': 'Thứ Năm'
                            },
                            'abbreviated': {
                                'tue': 'Th 3',
                                'fri': 'Th 6',
                                'sun': 'CN',
                                'sat': 'Th 7',
                                'wed': 'Th 4',
                                'mon': 'Th 2',
                                'thu': 'Th 5'
                            },
                            'narrow': {
                                'tue': 'T3',
                                'fri': 'T6',
                                'sun': 'CN',
                                'sat': 'T7',
                                'wed': 'T4',
                                'mon': 'T2',
                                'thu': 'T5'
                            },
                            'short': {
                                'tue': 'T3',
                                'fri': 'T6',
                                'sun': 'CN',
                                'sat': 'T7',
                                'wed': 'T4',
                                'mon': 'T2',
                                'thu': 'T5'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Thứ Ba',
                                'fri': 'Thứ Sáu',
                                'sun': 'Chủ Nhật',
                                'sat': 'Thứ Bảy',
                                'wed': 'Thứ Tư',
                                'mon': 'Thứ Hai',
                                'thu': 'Thứ Năm'
                            },
                            'abbreviated': {
                                'tue': 'Th 3',
                                'fri': 'Th 6',
                                'sun': 'CN',
                                'sat': 'Th 7',
                                'wed': 'Th 4',
                                'mon': 'Th 2',
                                'thu': 'Th 5'
                            },
                            'narrow': {
                                'tue': 'T3',
                                'fri': 'T6',
                                'sun': 'CN',
                                'sat': 'T7',
                                'wed': 'T4',
                                'mon': 'T2',
                                'thu': 'T5'
                            },
                            'short': {
                                'tue': 'T3',
                                'fri': 'T6',
                                'sun': 'CN',
                                'sat': 'T7',
                                'wed': 'T4',
                                'mon': 'T2',
                                'thu': 'T5'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'CH',
                                'am': 'SA'
                            },
                            'abbreviated': {
                                'pm': 'CH',
                                'am': 'SA'
                            },
                            'narrow': {
                                'pm': 'CH',
                                'am': 'SA'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'CH',
                                'am': 'SA'
                            },
                            'abbreviated': {
                                'pm': 'CH',
                                'am': 'SA'
                            },
                            'narrow': {
                                'pm': 'CH',
                                'am': 'SA'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'tr. CN',
                            '1': 'sau CN'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'tr. CN',
                            '1': 'sau CN'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'tr. CN',
                            '1': 'sau CN'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, \'ngày\' dd MMMM \'năm\' y',
                        'long': '\'Ngày\' dd \'tháng\' MM \'năm\' y',
                        'medium': 'dd-MM-y',
                        'short': 'dd/MM/y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{0} {1}',
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
                        'long': '{0} {1}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'mmss': 'mm:ss',
                            'M': 'L',
                            'MMMMEd': 'E, dd MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'dd-M',
                            'Ed': 'E, dd',
                            'Gy': '\'Năm\' y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'dd MMM',
                            'MMdd': 'dd-MM',
                            'MEd': 'E, dd-M',
                            'GyMMMd': 'dd MMM, y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, dd MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'H:mm',
                            'H': 'HH',
                            'yMEd': 'E, dd-M-y',
                            'MMMEd': 'E, dd MMM',
                            'hm': 'h:mm a',
                            'Hms': 'H:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'dd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': '\'Năm\' y',
                            'yMM': 'MM-y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'dd MMM, y',
                            'yMMMEd': 'E, dd MMM y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{0} {1}',
                        'short': '{0} {1}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH\'h\'-HH\'h\' v'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'h': {
                                'a': 'h\'h\' a - h\'h\' a',
                                'h': 'h\'h\' - h\'h\' a'
                            },
                            'M': {
                                'M': '\'Tháng\' M - \'Tháng\' M'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'EEEE, \'ngày\' dd MMM - EEEE, \'ngày\' dd MMM \'năm\' y',
                                'M': 'E, dd \'tháng\' M - E, dd \'tháng\' M, y',
                                'y': 'E, dd \'tháng\' M, y - E, dd \'tháng\' M, y'
                            },
                            'd': {
                                'd': '\'Ngày\' dd-dd'
                            },
                            'MMMEd': {
                                'd': 'EEEE, \'ngày\' dd - EEEE, \'ngày\' dd \'tháng\' M',
                                'M': 'EEEE, \'ngày\' dd \'tháng\' M - EEEE, \'ngày\' dd \'tháng\' M'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm-h:mm a v'
                            },
                            'yMMM': {
                                'M': '\'Tháng\' M - \'Tháng\' M \'năm\' y',
                                'y': '\'Tháng\' M \'năm\' y - \'Tháng\' M \'năm\' y'
                            },
                            'H': {
                                'H': 'HH\'h\' - HH\'h\''
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'yM': {
                                'M': 'MM/y - MM/y',
                                'y': 'MM/y - MM/y'
                            },
                            'yMMMd': {
                                'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                'y': '\'Ngày\' dd \'tháng\' M \'năm\' y - \'Ngày\' dd \'tháng\' M \'năm\' y'
                            },
                            'hv': {
                                'a': 'h\'h\' a - h\'h\' a v',
                                'h': 'h\'h\'-h\'h\' a v'
                            },
                            'yMd': {
                                'd': 'dd/MM/y - dd/MM/y',
                                'M': 'dd/MM/y - dd/MM/y',
                                'y': 'dd/MM/y - dd/MM/y'
                            },
                            'MMMd': {
                                'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M',
                                'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M'
                            },
                            'MEd': {
                                'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                'M': 'EEEE, dd/MM - EEEE, dd/MM'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
                                'y': 'MMMM y – MMMM y'
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
