/* AstroDate Language: en-CA
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
        AstroDate.lang('en-CA', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1st quarter',
                                '2': '2nd quarter',
                                '3': '3rd quarter',
                                '4': '4th quarter'
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
                                '1': '1st quarter',
                                '2': '2nd quarter',
                                '3': '3rd quarter',
                                '4': '4th quarter'
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
                                '1': 'January',
                                '10': 'October',
                                '2': 'February',
                                '11': 'November',
                                '3': 'March',
                                '12': 'December',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September'
                            },
                            'abbreviated': {
                                '1': 'Jan',
                                '10': 'Oct',
                                '2': 'Feb',
                                '11': 'Nov',
                                '3': 'Mar',
                                '12': 'Dec',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep'
                            },
                            'narrow': {
                                '1': 'J',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'January',
                                '10': 'October',
                                '2': 'February',
                                '11': 'November',
                                '3': 'March',
                                '12': 'December',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September'
                            },
                            'abbreviated': {
                                '1': 'Jan',
                                '10': 'Oct',
                                '2': 'Feb',
                                '11': 'Nov',
                                '3': 'Mar',
                                '12': 'Dec',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep'
                            },
                            'narrow': {
                                '1': 'J',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'Tuesday',
                                'fri': 'Friday',
                                'sun': 'Sunday',
                                'sat': 'Saturday',
                                'wed': 'Wednesday',
                                'mon': 'Monday',
                                'thu': 'Thursday'
                            },
                            'abbreviated': {
                                'tue': 'Tue',
                                'fri': 'Fri',
                                'sun': 'Sun',
                                'sat': 'Sat',
                                'wed': 'Wed',
                                'mon': 'Mon',
                                'thu': 'Thu'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'F',
                                'sun': 'S',
                                'sat': 'S',
                                'wed': 'W',
                                'mon': 'M',
                                'thu': 'T'
                            },
                            'short': {
                                'tue': 'Tu',
                                'fri': 'Fr',
                                'sun': 'Su',
                                'sat': 'Sa',
                                'wed': 'We',
                                'mon': 'Mo',
                                'thu': 'Th'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Tuesday',
                                'fri': 'Friday',
                                'sun': 'Sunday',
                                'sat': 'Saturday',
                                'wed': 'Wednesday',
                                'mon': 'Monday',
                                'thu': 'Thursday'
                            },
                            'abbreviated': {
                                'tue': 'Tue',
                                'fri': 'Fri',
                                'sun': 'Sun',
                                'sat': 'Sat',
                                'wed': 'Wed',
                                'mon': 'Mon',
                                'thu': 'Thu'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'F',
                                'sun': 'S',
                                'sat': 'S',
                                'wed': 'W',
                                'mon': 'M',
                                'thu': 'T'
                            },
                            'short': {
                                'tue': 'Tu',
                                'fri': 'Fr',
                                'sun': 'Su',
                                'sat': 'Sa',
                                'wed': 'We',
                                'mon': 'Mo',
                                'thu': 'Th'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon'
                            },
                            'narrow': {
                                'pm': 'p',
                                'am': 'a',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'n'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon'
                            },
                            'narrow': {
                                'pm': 'p',
                                'am': 'a',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'n'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'Common Era',
                            '0-alt-variant': 'Before Common Era',
                            '0': 'Before Christ',
                            '1': 'Anno Domini'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'BC',
                            '1': 'AD'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'B',
                            '1': 'A'
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
                        'appendItems': {
                            'Minute': '{0} ({2}: {1})',
                            'Day': '{0} ({2}: {1})',
                            'Era': '{0} {1}',
                            'Week': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Hour': '{0} ({2}: {1})',
                            'Year': '{0} {1}',
                            'Month': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Second': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}'
                        },
                        'long': '{1} \'at\' {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'M/d',
                            'Ed': 'd E',
                            'Gy': 'y G',
                            'yMd': 'M/d/y',
                            'MMMd': 'MMM d',
                            'MEd': 'E, M/d',
                            'GyMMMd': 'MMM d, y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, M/d/y',
                            'MMMEd': 'E, MMM d',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH – HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm – HH:mm v',
                                'm': 'HH:mm – HH:mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h – h a'
                            },
                            'M': {
                                'M': 'M – M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'M/d – M/d',
                                'M': 'M/d – M/d'
                            },
                            'yMMMEd': {
                                'd': 'E, MMM d – E, MMM d, y',
                                'M': 'E, MMM d – E, MMM d, y',
                                'y': 'E, MMM d, y – E, MMM d, y'
                            },
                            'd': {
                                'd': 'd – d'
                            },
                            'MMMEd': {
                                'd': 'E, MMM d – E, MMM d',
                                'M': 'E, MMM d – E, MMM d'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm – h:mm a',
                                'h': 'h:mm – h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, M/d/y – E, M/d/y',
                                'M': 'E, M/d/y – E, M/d/y',
                                'y': 'E, M/d/y – E, M/d/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm – h:mm a v',
                                'h': 'h:mm – h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM – MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'H': {
                                'H': 'HH – HH'
                            },
                            'Hm': {
                                'H': 'HH:mm – HH:mm',
                                'm': 'HH:mm – HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM – MMM'
                            },
                            'yM': {
                                'M': 'M/y – M/y',
                                'y': 'M/y – M/y'
                            },
                            'yMMMd': {
                                'd': 'MMM d – d, y',
                                'M': 'MMM d – MMM d, y',
                                'y': 'MMM d, y – MMM d, y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h – h a v'
                            },
                            'yMd': {
                                'd': 'M/d/y – M/d/y',
                                'M': 'M/d/y – M/d/y',
                                'y': 'M/d/y – M/d/y'
                            },
                            'MMMd': {
                                'd': 'MMM d – d',
                                'M': 'MMM d – MMM d'
                            },
                            'MEd': {
                                'd': 'E, M/d – E, M/d',
                                'M': 'E, M/d – E, M/d'
                            },
                            'y': {
                                'y': 'y – y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM y',
                                'y': 'MMMM y – MMMM y'
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