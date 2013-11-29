/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language en-CA}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9061
 * timeZoneNames: 24r9061
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
        AstroDate.lang('en-CA', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr',
                                    '5': 'May',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Oct',
                                    '11': 'Nov',
                                    '12': 'Dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April',
                                    '5': 'May',
                                    '6': 'June',
                                    '7': 'July',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'October',
                                    '11': 'November',
                                    '12': 'December'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr',
                                    '5': 'May',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Oct',
                                    '11': 'Nov',
                                    '12': 'Dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April',
                                    '5': 'May',
                                    '6': 'June',
                                    '7': 'July',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'October',
                                    '11': 'November',
                                    '12': 'December'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Su',
                                    'mon': 'Mo',
                                    'tue': 'Tu',
                                    'wed': 'We',
                                    'thu': 'Th',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'wide': {
                                    'sun': 'Sunday',
                                    'mon': 'Monday',
                                    'tue': 'Tuesday',
                                    'wed': 'Wednesday',
                                    'thu': 'Thursday',
                                    'fri': 'Friday',
                                    'sat': 'Saturday'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Su',
                                    'mon': 'Mo',
                                    'tue': 'Tu',
                                    'wed': 'We',
                                    'thu': 'Th',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'wide': {
                                    'sun': 'Sunday',
                                    'mon': 'Monday',
                                    'tue': 'Tuesday',
                                    'wed': 'Wednesday',
                                    'thu': 'Thursday',
                                    'fri': 'Friday',
                                    'sat': 'Saturday'
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
                                    '1': '1st quarter',
                                    '2': '2nd quarter',
                                    '3': '3rd quarter',
                                    '4': '4th quarter'
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
                                    '1': '1st quarter',
                                    '2': '2nd quarter',
                                    '3': '3rd quarter',
                                    '4': '4th quarter'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'n',
                                    'pm': 'p',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'n',
                                    'pm': 'p',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Before Christ',
                                '1': 'Anno Domini',
                                '0-alt-variant': 'Before Common Era',
                                '1-alt-variant': 'Common Era'
                            },
                            'eraAbbr': {
                                '0': 'BC',
                                '1': 'AD',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'B',
                                '1': 'A',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, MMMM d, y',
                            'long': 'MMMM d, y',
                            'medium': 'MMM d, y',
                            'short': 'M/d/yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'at\' {0}',
                            'long': '{1} \'at\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'd E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'MMM d, y G',
                                'GyMMMEd': 'E, MMM d, y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'M/d',
                                'MEd': 'E, M/d',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d',
                                'MMMEd': 'E, MMM d',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'M/d/y',
                                'yMEd': 'E, M/d/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'MMM d, y',
                                'yMMMEd': 'E, MMM d, y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{0} {1}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{0} {1}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd – d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h – h a'
                                },
                                'H': {
                                    'H': 'HH – HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm – h:mm a',
                                    'm': 'h:mm – h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm – HH:mm',
                                    'm': 'HH:mm – HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm – h:mm a v',
                                    'm': 'h:mm – h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm – HH:mm v',
                                    'm': 'HH:mm – HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h – h a v'
                                },
                                'Hv': {
                                    'H': 'HH – HH v'
                                },
                                'M': {
                                    'M': 'M – M'
                                },
                                'Md': {
                                    'd': 'M/d – M/d',
                                    'M': 'M/d – M/d'
                                },
                                'MEd': {
                                    'd': 'E, M/d – E, M/d',
                                    'M': 'E, M/d – E, M/d'
                                },
                                'MMM': {
                                    'M': 'MMM – MMM'
                                },
                                'MMMd': {
                                    'd': 'MMM d – d',
                                    'M': 'MMM d – MMM d'
                                },
                                'MMMEd': {
                                    'd': 'E, MMM d – E, MMM d',
                                    'M': 'E, MMM d – E, MMM d'
                                },
                                'y': {
                                    'y': 'y – y'
                                },
                                'yM': {
                                    'M': 'M/y – M/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'M/d/y – M/d/y',
                                    'M': 'M/d/y – M/d/y',
                                    'y': 'M/d/y – M/d/y'
                                },
                                'yMEd': {
                                    'd': 'E, M/d/y – E, M/d/y',
                                    'M': 'E, M/d/y – E, M/d/y',
                                    'y': 'E, M/d/y – E, M/d/y'
                                },
                                'yMMM': {
                                    'M': 'MMM – MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'MMM d – d, y',
                                    'M': 'MMM d – MMM d, y',
                                    'y': 'MMM d, y – MMM d, y'
                                },
                                'yMMMEd': {
                                    'd': 'E, MMM d – E, MMM d, y',
                                    'M': 'E, MMM d – E, MMM d, y',
                                    'y': 'E, MMM d, y – E, MMM d, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
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
                    'regionFormat': '{0} Time',
                    'regionFormat-type-daylight': '{0} Daylight Time',
                    'regionFormat-type-standard': '{0} Standard Time',
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
