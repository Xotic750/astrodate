/* AstroDate Language: root
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
        AstroDate.lang('root', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'Q1',
                                '2': 'Q2',
                                '3': 'Q3',
                                '4': 'Q4'
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
                                '1': 'Q1',
                                '2': 'Q2',
                                '3': 'Q3',
                                '4': 'Q4'
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
                                '1': 'M01',
                                '10': 'M10',
                                '2': 'M02',
                                '11': 'M11',
                                '3': 'M03',
                                '12': 'M12',
                                '4': 'M04',
                                '5': 'M05',
                                '6': 'M06',
                                '7': 'M07',
                                '8': 'M08',
                                '9': 'M09'
                            },
                            'abbreviated': {
                                '1': 'M01',
                                '10': 'M10',
                                '2': 'M02',
                                '11': 'M11',
                                '3': 'M03',
                                '12': 'M12',
                                '4': 'M04',
                                '5': 'M05',
                                '6': 'M06',
                                '7': 'M07',
                                '8': 'M08',
                                '9': 'M09'
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
                                '1': 'M01',
                                '10': 'M10',
                                '2': 'M02',
                                '11': 'M11',
                                '3': 'M03',
                                '12': 'M12',
                                '4': 'M04',
                                '5': 'M05',
                                '6': 'M06',
                                '7': 'M07',
                                '8': 'M08',
                                '9': 'M09'
                            },
                            'abbreviated': {
                                '1': 'M01',
                                '10': 'M10',
                                '2': 'M02',
                                '11': 'M11',
                                '3': 'M03',
                                '12': 'M12',
                                '4': 'M04',
                                '5': 'M05',
                                '6': 'M06',
                                '7': 'M07',
                                '8': 'M08',
                                '9': 'M09'
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
                                'tue': 'Tue',
                                'fri': 'Fri',
                                'sun': 'Sun',
                                'sat': 'Sat',
                                'wed': 'Wed',
                                'mon': 'Mon',
                                'thu': 'Thu'
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
                                'tue': 'Tue',
                                'fri': 'Fri',
                                'sun': 'Sun',
                                'sat': 'Sat',
                                'wed': 'Wed',
                                'mon': 'Mon',
                                'thu': 'Thu'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Tue',
                                'fri': 'Fri',
                                'sun': 'Sun',
                                'sat': 'Sat',
                                'wed': 'Wed',
                                'mon': 'Mon',
                                'thu': 'Thu'
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
                                'tue': 'Tue',
                                'fri': 'Fri',
                                'sun': 'Sun',
                                'sat': 'Sat',
                                'wed': 'Wed',
                                'mon': 'Mon',
                                'thu': 'Thu'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'narrow': {
                                'pm': 'PM',
                                'am': 'AM'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'narrow': {
                                'pm': 'PM',
                                'am': 'AM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'BCE',
                            '1': 'CE'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'BCE',
                            '1': 'CE'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'BCE',
                            '1': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'y MMMM d, EEEE',
                        'long': 'y MMMM d',
                        'medium': 'y MMM d',
                        'short': 'y-MM-dd'
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
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'MM-dd',
                            'Ed': 'd, E',
                            'Gy': 'G y',
                            'yMd': 'y-MM-dd',
                            'MMMd': 'MMM d',
                            'MEd': 'MM-dd, E',
                            'GyMMMd': 'G y MMM d',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'G y MMM d, E',
                            'h': 'h a',
                            'GyMMM': 'G y MMM',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'y-MM-dd, E',
                            'MMMEd': 'MMM d, E',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'y-MM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'y MMM',
                            'yMMMd': 'y MMM d',
                            'yMMMEd': 'y MMM d, E',
                            'yQQQ': 'y QQQ',
                            'yQQQQ': 'y QQQQ'
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
                                'M': 'MM–MM'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'MM-dd – MM-dd',
                                'M': 'MM-dd – MM-dd'
                            },
                            'yMMMEd': {
                                'd': 'y MMM d, E – MMM d, E',
                                'M': 'y MMM d, E – MMM d, E',
                                'y': 'y MMM d, E – y MMM d, E'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'MMM d, E – MMM d, E',
                                'M': 'MMM d, E – MMM d, E'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'y-MM-dd, E – y-MM-dd, E',
                                'M': 'y-MM-dd, E – y-MM-dd, E',
                                'y': 'y-MM-dd, E – y-MM-dd, E'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'y MMM–MMM',
                                'y': 'y MMM – y MMM'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL–LLL'
                            },
                            'yM': {
                                'M': 'y-MM – y-MM',
                                'y': 'y-MM – y-MM'
                            },
                            'yMMMd': {
                                'd': 'y MMM d–d',
                                'M': 'y MMM d – MMM d',
                                'y': 'y MMM d – y MMM d'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'y-MM-dd – y-MM-dd',
                                'M': 'y-MM-dd – y-MM-dd',
                                'y': 'y-MM-dd – y-MM-dd'
                            },
                            'MMMd': {
                                'd': 'MMM d–d',
                                'M': 'MMM d – MMM d'
                            },
                            'MEd': {
                                'd': 'MM-dd, E – MM-dd, E',
                                'M': 'MM-dd, E – MM-dd, E'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'y MMMM–MMMM',
                                'y': 'y MMMM – y MMMM'
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
