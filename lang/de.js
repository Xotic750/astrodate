/* AstroDate Language: de
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
        AstroDate.lang('de', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. Quartal',
                                '2': '2. Quartal',
                                '3': '3. Quartal',
                                '4': '4. Quartal'
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
                                '1': '1. Quartal',
                                '2': '2. Quartal',
                                '3': '3. Quartal',
                                '4': '4. Quartal'
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
                                '1': 'Januar',
                                '10': 'Oktober',
                                '2': 'Februar',
                                '11': 'November',
                                '3': 'März',
                                '12': 'Dezember',
                                '4': 'April',
                                '5': 'Mai',
                                '6': 'Juni',
                                '7': 'Juli',
                                '8': 'August',
                                '9': 'September'
                            },
                            'abbreviated': {
                                '1': 'Jan.',
                                '10': 'Okt.',
                                '2': 'Feb.',
                                '11': 'Nov.',
                                '3': 'März',
                                '12': 'Dez.',
                                '4': 'Apr.',
                                '5': 'Mai',
                                '6': 'Juni',
                                '7': 'Juli',
                                '8': 'Aug.',
                                '9': 'Sep.'
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
                                '1': 'Januar',
                                '10': 'Oktober',
                                '2': 'Februar',
                                '11': 'November',
                                '3': 'März',
                                '12': 'Dezember',
                                '4': 'April',
                                '5': 'Mai',
                                '6': 'Juni',
                                '7': 'Juli',
                                '8': 'August',
                                '9': 'September'
                            },
                            'abbreviated': {
                                '1': 'Jan',
                                '10': 'Okt',
                                '2': 'Feb',
                                '11': 'Nov',
                                '3': 'Mär',
                                '12': 'Dez',
                                '4': 'Apr',
                                '5': 'Mai',
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
                                'tue': 'Dienstag',
                                'fri': 'Freitag',
                                'sun': 'Sonntag',
                                'sat': 'Samstag',
                                'wed': 'Mittwoch',
                                'mon': 'Montag',
                                'thu': 'Donnerstag'
                            },
                            'abbreviated': {
                                'tue': 'Di.',
                                'fri': 'Fr.',
                                'sun': 'So.',
                                'sat': 'Sa.',
                                'wed': 'Mi.',
                                'mon': 'Mo.',
                                'thu': 'Do.'
                            },
                            'narrow': {
                                'tue': 'D',
                                'fri': 'F',
                                'sun': 'S',
                                'sat': 'S',
                                'wed': 'M',
                                'mon': 'M',
                                'thu': 'D'
                            },
                            'short': {
                                'tue': 'Di.',
                                'fri': 'Fr.',
                                'sun': 'So.',
                                'sat': 'Sa.',
                                'wed': 'Mi.',
                                'mon': 'Mo.',
                                'thu': 'Do.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Dienstag',
                                'fri': 'Freitag',
                                'sun': 'Sonntag',
                                'sat': 'Samstag',
                                'wed': 'Mittwoch',
                                'mon': 'Montag',
                                'thu': 'Donnerstag'
                            },
                            'abbreviated': {
                                'tue': 'Di',
                                'fri': 'Fr',
                                'sun': 'So',
                                'sat': 'Sa',
                                'wed': 'Mi',
                                'mon': 'Mo',
                                'thu': 'Do'
                            },
                            'narrow': {
                                'tue': 'D',
                                'fri': 'F',
                                'sun': 'S',
                                'sat': 'S',
                                'wed': 'M',
                                'mon': 'M',
                                'thu': 'D'
                            },
                            'short': {
                                'tue': 'Di.',
                                'fri': 'Fr.',
                                'sun': 'So.',
                                'sat': 'Sa.',
                                'wed': 'Mi.',
                                'mon': 'Mo.',
                                'thu': 'Do.'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'noon': 'Mittag',
                                'morning': 'vormittags',
                                'earlyMorning': 'morgens',
                                'afternoon': 'nachmittags',
                                'evening': 'abends',
                                'night': 'nachts',
                                'am': 'vorm.',
                                'pm': 'nachm.'
                            },
                            'abbreviated': {
                                'noon': 'Mittag',
                                'morning': 'vormittags',
                                'earlyMorning': 'morgens',
                                'afternoon': 'nachmittags',
                                'evening': 'abends',
                                'night': 'nachts',
                                'am': 'vorm.',
                                'pm': 'nachm.'
                            },
                            'narrow': {
                                'noon': 'Mittag',
                                'morning': 'vormittags',
                                'earlyMorning': 'morgens',
                                'afternoon': 'nachmittags',
                                'evening': 'abends',
                                'night': 'nachts',
                                'am': 'vorm.',
                                'pm': 'nachm.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'noon': 'Mittag',
                                'morning': 'Vormittag',
                                'earlyMorning': 'Morgen',
                                'afternoon': 'Nachmittag',
                                'evening': 'Abend',
                                'night': 'Nacht',
                                'am': 'vorm.',
                                'pm': 'nachm.'
                            },
                            'abbreviated': {
                                'noon': 'Mittag',
                                'morning': 'vormittags',
                                'earlyMorning': 'morgens',
                                'afternoon': 'nachmittags',
                                'evening': 'abends',
                                'night': 'nachts',
                                'am': 'vorm.',
                                'pm': 'nachm.'
                            },
                            'narrow': {
                                'noon': 'Mittag',
                                'morning': 'vormittags',
                                'earlyMorning': 'morgens',
                                'afternoon': 'nachmittags',
                                'evening': 'abends',
                                'night': 'nachts',
                                'am': 'vorm.',
                                'pm': 'nachm.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'der gewöhnlichen Zeitrechnung',
                            '0-alt-variant': 'vor der gewöhnlichen Zeitrechnung',
                            '0': 'v. Chr.',
                            '1': 'n. Chr.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'u. Z.',
                            '0-alt-variant': 'v. u. Z.',
                            '0': 'v. Chr.',
                            '1': 'n. Chr.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'dZ',
                            '0-alt-variant': 'vdZ',
                            '0': 'v. Chr.',
                            '1': 'n. Chr.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'dd.MM.y',
                        'short': 'dd.MM.yy'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
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
                            'EHm': 'E, HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E, d. MMMM',
                            'd': 'd',
                            'Ehms': 'E, h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd.M.',
                            'Ed': 'E, d.',
                            'Gy': 'y G',
                            'yMMdd': 'dd.MM.y',
                            'yMd': 'd.M.y',
                            'MMMMdd': 'dd. MMMM',
                            'MMMd': 'd. MMM',
                            'MMdd': 'dd.MM.',
                            'MEd': 'E, d.M.',
                            'GyMMMd': 'd. MMM y G',
                            'EHms': 'E, HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d. MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH \'Uhr\'',
                            'yMEd': 'E, d.M.y',
                            'MMMEd': 'E, d. MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M.y',
                            'MMM': 'LLL',
                            'yMMMEd': 'E, d. MMM y',
                            'MMd': 'd.MM.',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM.y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd. MMM y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH-HH \'Uhr\' v'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'M': {
                                'M': 'M.-M.'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd.MM. - dd.MM.',
                                'M': 'dd.MM. - dd.MM.'
                            },
                            'd': {
                                'd': 'd.-d.'
                            },
                            'MMMEd': {
                                'd': 'E, d. - E, d. MMM',
                                'M': 'E, d. MMM - E, d. MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y - E, dd.MM.y',
                                'M': 'E, dd.MM.y - E, dd.MM.y',
                                'y': 'E, dd.MM.y - E, dd.MM.y'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm-h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y',
                                'y': 'MMM y - MMM y'
                            },
                            'H': {
                                'H': 'HH-HH \'Uhr\''
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'yM': {
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMMMd': {
                                'd': 'd.-d. MMM y',
                                'M': 'd. MMM - d. MMM y',
                                'y': 'd. MMM y - d. MMM y'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'yMd': {
                                'd': 'dd.MM.y - dd.MM.y',
                                'M': 'dd.MM.y - dd.MM.y',
                                'y': 'dd.MM.y - dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd.-d. MMM',
                                'M': 'd. MMM - d. MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM. - E, dd.MM.',
                                'M': 'E, dd.MM. - E, dd.MM.'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. - E, d. MMM y',
                                'M': 'E, d. MMM - E, d. MMM y',
                                'y': 'E, d. MMM y - E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
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
