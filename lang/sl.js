/* AstroDate Language: sl
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
        AstroDate.lang('sl', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. četrtletje',
                                '2': '2. četrtletje',
                                '3': '3. četrtletje',
                                '4': '4. četrtletje'
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
                                '1': '1. četrtletje',
                                '2': '2. četrtletje',
                                '3': '3. četrtletje',
                                '4': '4. četrtletje'
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
                                '1': 'januar',
                                '10': 'oktober',
                                '2': 'februar',
                                '11': 'november',
                                '3': 'marec',
                                '12': 'december',
                                '4': 'april',
                                '5': 'maj',
                                '6': 'junij',
                                '7': 'julij',
                                '8': 'avgust',
                                '9': 'september'
                            },
                            'abbreviated': {
                                '1': 'jan.',
                                '10': 'okt.',
                                '2': 'feb.',
                                '11': 'nov.',
                                '3': 'mar.',
                                '12': 'dec.',
                                '4': 'apr.',
                                '5': 'maj',
                                '6': 'jun.',
                                '7': 'jul.',
                                '8': 'avg.',
                                '9': 'sep.'
                            },
                            'narrow': {
                                '1': 'j',
                                '10': 'o',
                                '2': 'f',
                                '11': 'n',
                                '3': 'm',
                                '12': 'd',
                                '4': 'a',
                                '5': 'm',
                                '6': 'j',
                                '7': 'j',
                                '8': 'a',
                                '9': 's'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'januar',
                                '10': 'oktober',
                                '2': 'februar',
                                '11': 'november',
                                '3': 'marec',
                                '12': 'december',
                                '4': 'april',
                                '5': 'maj',
                                '6': 'junij',
                                '7': 'julij',
                                '8': 'avgust',
                                '9': 'september'
                            },
                            'abbreviated': {
                                '1': 'jan',
                                '10': 'okt',
                                '2': 'feb',
                                '11': 'nov',
                                '3': 'mar',
                                '12': 'dec',
                                '4': 'apr',
                                '5': 'maj',
                                '6': 'jun',
                                '7': 'jul',
                                '8': 'avg',
                                '9': 'sep'
                            },
                            'narrow': {
                                '1': 'j',
                                '10': 'o',
                                '2': 'f',
                                '11': 'n',
                                '3': 'm',
                                '12': 'd',
                                '4': 'a',
                                '5': 'm',
                                '6': 'j',
                                '7': 'j',
                                '8': 'a',
                                '9': 's'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'torek',
                                'fri': 'petek',
                                'sun': 'nedelja',
                                'sat': 'sobota',
                                'wed': 'sreda',
                                'mon': 'ponedeljek',
                                'thu': 'četrtek'
                            },
                            'abbreviated': {
                                'tue': 'tor.',
                                'fri': 'pet.',
                                'sun': 'ned.',
                                'sat': 'sob.',
                                'wed': 'sre.',
                                'mon': 'pon.',
                                'thu': 'čet.'
                            },
                            'narrow': {
                                'tue': 't',
                                'fri': 'p',
                                'sun': 'n',
                                'sat': 's',
                                'wed': 's',
                                'mon': 'p',
                                'thu': 'č'
                            },
                            'short': {
                                'tue': 'tor.',
                                'fri': 'pet.',
                                'sun': 'ned.',
                                'sat': 'sob.',
                                'wed': 'sre.',
                                'mon': 'pon.',
                                'thu': 'čet.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'torek',
                                'fri': 'petek',
                                'sun': 'nedelja',
                                'sat': 'sobota',
                                'wed': 'sreda',
                                'mon': 'ponedeljek',
                                'thu': 'četrtek'
                            },
                            'abbreviated': {
                                'tue': 'tor',
                                'fri': 'pet',
                                'sun': 'ned',
                                'sat': 'sob',
                                'wed': 'sre',
                                'mon': 'pon',
                                'thu': 'čet'
                            },
                            'narrow': {
                                'tue': 't',
                                'fri': 'p',
                                'sun': 'n',
                                'sat': 's',
                                'wed': 's',
                                'mon': 'p',
                                'thu': 'č'
                            },
                            'short': {
                                'tue': 'tor.',
                                'fri': 'pet.',
                                'sun': 'ned.',
                                'sat': 'sob.',
                                'wed': 'sre.',
                                'mon': 'pon.',
                                'thu': 'čet.'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'pop.',
                                'am': 'dop.'
                            },
                            'abbreviated': {
                                'pm': 'pop.',
                                'am': 'dop.'
                            },
                            'narrow': {
                                'pm': 'pop.',
                                'am': 'dop.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'pop.',
                                'am': 'dop.'
                            },
                            'abbreviated': {
                                'pm': 'pop.',
                                'am': 'dop.'
                            },
                            'narrow': {
                                'pm': 'pop.',
                                'am': 'dop.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'po n. št.',
                            '0-alt-variant': 'BCE',
                            '0': 'pred našim štetjem',
                            '1': 'naše štetje'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'po n. št.',
                            '0-alt-variant': 'BCE',
                            '0': 'pr. n. št.',
                            '1': 'po Kr.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'po n. št.',
                            '0-alt-variant': 'BCE',
                            '0': 'pr. n. št.',
                            '1': 'po Kr.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, dd. MMMM y',
                        'long': 'dd. MMMM y',
                        'medium': 'd. MMM y',
                        'short': 'd. MM. yy'
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
                            'GyM': 'M/y G',
                            'EHm': 'E HH.mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h.mm.ss a',
                            'Ehm': 'E h.mm a',
                            'Md': 'd. M.',
                            'Ed': 'E, d.',
                            'Gy': 'y G',
                            'yMd': 'd. M. y',
                            'MMMd': 'd. MMM',
                            'MEd': 'E, d. MM.',
                            'GyMMMd': 'd. MMM y G',
                            'EHms': 'E HH.mm.ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d. MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, d. M. y',
                            'MMMEd': 'E, d. MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd. MMM y',
                            'yMMMEd': 'E, d. MMM y',
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
                                'H': 'HH.mm–HH.mm v',
                                'm': 'HH.mm–HH.mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'M': {
                                'M': 'M.–M.'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd. – d. M.',
                                'M': 'd. M. – d. M.'
                            },
                            'yMMMEd': {
                                'd': 'E, d. MMM – E, d. MMM y',
                                'M': 'E, d. MMM – E, d. MMM y',
                                'y': 'E, d. MMM y – E, d. MMM y'
                            },
                            'd': {
                                'd': 'd.–d.'
                            },
                            'MMMEd': {
                                'd': 'E, d. – E, d. MMM',
                                'M': 'E, d. MMM – E, d. MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, d. – E, d. M. y',
                                'M': 'E, d. M. – E, d. M. y',
                                'y': 'E, d. M. y – E, d. M. y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM – MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH.mm–HH.mm',
                                'm': 'HH.mm–HH.mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'M.–M. y',
                                'y': 'M. y – M. y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. MMM y',
                                'M': 'd. MMM – d. MMM y',
                                'y': 'd. MMM y – d. MMM y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'd. M. y – d. M. y',
                                'M': 'd. M. – d. M. y',
                                'y': 'd. M. y – d. M. y'
                            },
                            'MMMd': {
                                'd': 'd.–d. MMM',
                                'M': 'd. MMM – d. MMM'
                            },
                            'MEd': {
                                'd': 'E, d. – E, d. M.',
                                'M': 'E, d. M. – E, d. M.'
                            },
                            'y': {
                                'y': 'y–y'
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
