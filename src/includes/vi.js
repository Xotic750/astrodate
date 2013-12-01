/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language vi}.
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
        AstroDate.lang('vi', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'thg 1',
                                    '2': 'thg 2',
                                    '3': 'thg 3',
                                    '4': 'thg 4',
                                    '5': 'thg 5',
                                    '6': 'thg 6',
                                    '7': 'thg 7',
                                    '8': 'thg 8',
                                    '9': 'thg 9',
                                    '10': 'thg 10',
                                    '11': 'thg 11',
                                    '12': 'thg 12'
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
                                    '1': 'tháng 1',
                                    '2': 'tháng 2',
                                    '3': 'tháng 3',
                                    '4': 'tháng 4',
                                    '5': 'tháng 5',
                                    '6': 'tháng 6',
                                    '7': 'tháng 7',
                                    '8': 'tháng 8',
                                    '9': 'tháng 9',
                                    '10': 'tháng 10',
                                    '11': 'tháng 11',
                                    '12': 'tháng 12'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Thg 1',
                                    '2': 'Thg 2',
                                    '3': 'Thg 3',
                                    '4': 'Thg 4',
                                    '5': 'Thg 5',
                                    '6': 'Thg 6',
                                    '7': 'Thg 7',
                                    '8': 'Thg 8',
                                    '9': 'Thg 9',
                                    '10': 'Thg 10',
                                    '11': 'Thg 11',
                                    '12': 'Thg 12'
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
                                    '1': 'Tháng 1',
                                    '2': 'Tháng 2',
                                    '3': 'Tháng 3',
                                    '4': 'Tháng 4',
                                    '5': 'Tháng 5',
                                    '6': 'Tháng 6',
                                    '7': 'Tháng 7',
                                    '8': 'Tháng 8',
                                    '9': 'Tháng 9',
                                    '10': 'Tháng 10',
                                    '11': 'Tháng 11',
                                    '12': 'Tháng 12'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Chủ Nhật',
                                    'mon': 'Thứ Hai',
                                    'tue': 'Thứ Ba',
                                    'wed': 'Thứ Tư',
                                    'thu': 'Thứ Năm',
                                    'fri': 'Thứ Sáu',
                                    'sat': 'Thứ Bảy'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Chủ Nhật',
                                    'mon': 'Thứ Hai',
                                    'tue': 'Thứ Ba',
                                    'wed': 'Thứ Tư',
                                    'thu': 'Thứ Năm',
                                    'fri': 'Thứ Sáu',
                                    'sat': 'Thứ Bảy'
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
                                    '1': 'Quý 1',
                                    '2': 'Quý 2',
                                    '3': 'Quý 3',
                                    '4': 'Quý 4'
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
                                    '1': 'Quý 1',
                                    '2': 'Quý 2',
                                    '3': 'Quý 3',
                                    '4': 'Quý 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'tr. CN',
                                '1': 'sau CN',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'tr. CN',
                                '1': 'sau CN',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'tr. CN',
                                '1': 'sau CN',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
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
                            'long': '{0} {1}',
                            'medium': '{0} {1}',
                            'short': '{0} {1}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E, dd',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': '\'Năm\' y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'dd MMM, y G',
                                'GyMMMEd': 'E, dd MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'dd-M',
                                'MEd': 'E, dd-M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'dd MMM',
                                'MMMEd': 'E, dd MMM',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'E, dd MMMM',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': '\'Năm\' y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, dd-M-y',
                                'yMM': 'MM-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'dd MMM, y',
                                'yMMMEd': 'E, dd MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
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
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': '\'Ngày\' dd-dd'
                                },
                                'h': {
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'H': {
                                    'H': 'HH\'h\' - HH\'h\''
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h\'h\' a - h\'h\' a v',
                                    'h': 'h\'h\'-h\'h\' a v'
                                },
                                'Hv': {
                                    'H': 'HH\'h\'-HH\'h\' v'
                                },
                                'M': {
                                    'M': '\'Tháng\' M - \'Tháng\' M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                    'M': 'EEEE, dd/MM - EEEE, dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M',
                                    'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M'
                                },
                                'MMMEd': {
                                    'd': 'EEEE, \'ngày\' dd - EEEE, \'ngày\' dd \'tháng\' M',
                                    'M': 'EEEE, \'ngày\' dd \'tháng\' M - EEEE, \'ngày\' dd \'tháng\' M'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': '\'Tháng\' M - \'Tháng\' M \'năm\' y',
                                    'y': '\'Tháng\' M \'năm\' y - \'Tháng\' M \'năm\' y'
                                },
                                'yMMMd': {
                                    'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                    'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                    'y': '\'Ngày\' dd \'tháng\' M \'năm\' y - \'Ngày\' dd \'tháng\' M \'năm\' y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE, \'ngày\' dd MMM - EEEE, \'ngày\' dd MMM \'năm\' y',
                                    'M': 'E, dd \'tháng\' M - E, dd \'tháng\' M, y',
                                    'y': 'E, dd \'tháng\' M, y - E, dd \'tháng\' M, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Giờ {0}',
                    'regionFormat-type-daylight': 'Giờ ban ngày {0}',
                    'regionFormat-type-standard': 'Giờ chuẩn {0}',
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
