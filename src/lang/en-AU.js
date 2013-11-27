/**
 * @file {@link https://github.com/Xotic750/astrodate en-AU}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * units:
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
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('en-AU', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} Standard Time',
                    'regionFormat-type-daylight': '{0} Daylight Time',
                    'regionFormat': '{0} Time',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'May',
                                    '12': 'Dec',
                                    '11': 'Nov',
                                    '10': 'Oct',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'August',
                                    '7': 'July',
                                    '6': 'June',
                                    '5': 'May',
                                    '12': 'December',
                                    '11': 'November',
                                    '10': 'October',
                                    '9': 'September',
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'May',
                                    '12': 'Dec',
                                    '11': 'Nov',
                                    '10': 'Oct',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'August',
                                    '7': 'July',
                                    '6': 'June',
                                    '5': 'May',
                                    '12': 'December',
                                    '11': 'November',
                                    '10': 'October',
                                    '9': 'September',
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April'
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
                                    'am': 'am',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'pm',
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
                                    'am': 'am',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'pm',
                                    'pm-alt-variant': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'am',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'pm',
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
                                    'am': 'am',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'pm',
                                    'pm-alt-variant': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Before Christ',
                                '0-alt-variant': 'Before Common Era',
                                '1': 'Anno Domini',
                                '1-alt-variant': 'Common Era'
                            },
                            'eraAbbr': {
                                '0': 'BC',
                                '0-alt-variant': 'BCE',
                                '1': 'AD',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'B',
                                '0-alt-variant': 'BCE',
                                '1': 'A',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd/MM/y'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMM': 'MMM y',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'LL',
                                'Md': 'dd/MM',
                                'MEd': 'E dd/MM',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{0} {1}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'E, d - E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E, d/MM - E, d/MM',
                                    'M': 'E, d/MM - E, d/MM'
                                },
                                'Md': {
                                    'd': 'd/MM - d/MM',
                                    'M': 'd/MM - d/MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'd/MM/y - d/MM/y',
                                    'M': 'd/MM/y - d/MM/y',
                                    'y': 'd/MM/y - d/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/MM/y - E, d/MM/y',
                                    'M': 'E, d/MM/y - E, d/MM/y',
                                    'y': 'E, d/MM/y - E, d/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d - E, d MMM y',
                                    'M': 'E, d MMM - E, d MMM y',
                                    'y': 'E, d MMM y - E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd-d'
                                },
                                'intervalFormatFallback': '{0} - {1}'
                            }
                        }
                    }
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
