/* AstroDate Language: en-HK
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
    }((function (AstroDate) {
        AstroDate.lang('en-HK', {
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
                                'pm': 'pm',
                                'am': 'am',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon'
                            },
                            'abbreviated': {
                                'pm': 'pm',
                                'am': 'am',
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
                                'pm': 'pm',
                                'am': 'am',
                                'pm-alt-variant': 'p.m.',
                                'am-alt-variant': 'a.m.',
                                'noon': 'noon'
                            },
                            'abbreviated': {
                                'pm': 'pm',
                                'am': 'am',
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
                        'full': 'EEEE, d MMMM, y',
                        'long': 'd MMMM, y',
                        'medium': 'd MMM, y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
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
                        'long': '{1} {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'LL',
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'dd/MM',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MMdd': 'dd/MM',
                            'MEd': 'E dd/MM',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, dd/MM/y',
                            'MMMEd': 'E, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'MM/y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM, y',
                            'yMMMEd': 'E, d MMM, y',
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
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd/M – d/M',
                                'M': 'd/M – d/M'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM – E, d MMM, y',
                                'M': 'E, d MMM – E, d MMM, y',
                                'y': 'E, d MMM, y – E, d MMM, y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E, d MMM – E, d MMM',
                                'M': 'E, d MMM – E, d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y – E, d/M/y',
                                'M': 'E, d/M/y – E, d/M/y',
                                'y': 'E, d/M/y – E, d/M/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'MM/y – MM/y',
                                'y': 'MM/y – MM/y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM, y',
                                'M': 'd MMM – d MMM, y',
                                'y': 'd MMM, y – d MMM, y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'd/M/y – d/M/y',
                                'M': 'd/M/y – d/M/y',
                                'y': 'd/M/y – d/M/y'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M – E, d/M',
                                'M': 'E, d/M – E, d/M'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'MMMM–MMMM y',
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
