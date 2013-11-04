/* AstroDate Language: hr
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
        AstroDate.lang('hr', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            },
                            'abbreviated': {
                                '1': '1kv',
                                '2': '2kv',
                                '3': '3kv',
                                '4': '4kv'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            },
                            'abbreviated': {
                                '1': '1kv',
                                '2': '2kv',
                                '3': '3kv',
                                '4': '4kv'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'siječnja',
                                '10': 'listopada',
                                '2': 'veljače',
                                '11': 'studenoga',
                                '3': 'ožujka',
                                '12': 'prosinca',
                                '4': 'travnja',
                                '5': 'svibnja',
                                '6': 'lipnja',
                                '7': 'srpnja',
                                '8': 'kolovoza',
                                '9': 'rujna'
                            },
                            'abbreviated': {
                                '1': 'sij',
                                '10': 'lis',
                                '2': 'velj',
                                '11': 'stu',
                                '3': 'ožu',
                                '12': 'pro',
                                '4': 'tra',
                                '5': 'svi',
                                '6': 'lip',
                                '7': 'srp',
                                '8': 'kol',
                                '9': 'ruj'
                            },
                            'narrow': {
                                '1': '1.',
                                '10': '10.',
                                '2': '2.',
                                '11': '11.',
                                '3': '3.',
                                '12': '12.',
                                '4': '4.',
                                '5': '5.',
                                '6': '6.',
                                '7': '7.',
                                '8': '8.',
                                '9': '9.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'siječanj',
                                '10': 'listopad',
                                '2': 'veljača',
                                '11': 'studeni',
                                '3': 'ožujak',
                                '12': 'prosinac',
                                '4': 'travanj',
                                '5': 'svibanj',
                                '6': 'lipanj',
                                '7': 'srpanj',
                                '8': 'kolovoz',
                                '9': 'rujan'
                            },
                            'abbreviated': {
                                '1': 'sij',
                                '10': 'lis',
                                '2': 'velj',
                                '11': 'stu',
                                '3': 'ožu',
                                '12': 'pro',
                                '4': 'tra',
                                '5': 'svi',
                                '6': 'lip',
                                '7': 'srp',
                                '8': 'kol',
                                '9': 'ruj'
                            },
                            'narrow': {
                                '1': '1.',
                                '10': '10.',
                                '2': '2.',
                                '11': '11.',
                                '3': '3.',
                                '12': '12.',
                                '4': '4.',
                                '5': '5.',
                                '6': '6.',
                                '7': '7.',
                                '8': '8.',
                                '9': '9.'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'utorak',
                                'fri': 'petak',
                                'sun': 'nedjelja',
                                'sat': 'subota',
                                'wed': 'srijeda',
                                'mon': 'ponedjeljak',
                                'thu': 'četvrtak'
                            },
                            'abbreviated': {
                                'tue': 'uto',
                                'fri': 'pet',
                                'sun': 'ned',
                                'sat': 'sub',
                                'wed': 'sri',
                                'mon': 'pon',
                                'thu': 'čet'
                            },
                            'narrow': {
                                'tue': 'U',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'S',
                                'mon': 'P',
                                'thu': 'Č'
                            },
                            'short': {
                                'tue': 'uto',
                                'fri': 'pet',
                                'sun': 'ned',
                                'sat': 'sub',
                                'wed': 'sri',
                                'mon': 'pon',
                                'thu': 'čet'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'utorak',
                                'fri': 'petak',
                                'sun': 'nedjelja',
                                'sat': 'subota',
                                'wed': 'srijeda',
                                'mon': 'ponedjeljak',
                                'thu': 'četvrtak'
                            },
                            'abbreviated': {
                                'tue': 'uto',
                                'fri': 'pet',
                                'sun': 'ned',
                                'sat': 'sub',
                                'wed': 'sri',
                                'mon': 'pon',
                                'thu': 'čet'
                            },
                            'narrow': {
                                'tue': 'u',
                                'fri': 'p',
                                'sun': 'n',
                                'sat': 's',
                                'wed': 's',
                                'mon': 'p',
                                'thu': 'č'
                            },
                            'short': {
                                'tue': 'uto',
                                'fri': 'pet',
                                'sun': 'ned',
                                'sat': 'sub',
                                'wed': 'sri',
                                'mon': 'pon',
                                'thu': 'čet'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'podne'
                            },
                            'abbreviated': {
                                'noon': 'podne',
                                'morning': 'prijepodne',
                                'earlyMorning': 'ujutro',
                                'afternoon': 'popodne',
                                'evening': 'navečer',
                                'night': 'noću',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'noon': 'n',
                                'morning': 'prijepodne',
                                'earlyMorning': 'ujutro',
                                'afternoon': 'popodne',
                                'evening': 'navečer',
                                'night': 'noću',
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'podne'
                            },
                            'abbreviated': {
                                'noon': 'podne',
                                'morning': 'prijepodne',
                                'earlyMorning': 'ujutro',
                                'afternoon': 'popodne',
                                'evening': 'navečer',
                                'night': 'noću',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'noon': 'n',
                                'morning': 'prijepodne',
                                'earlyMorning': 'ujutro',
                                'afternoon': 'popodne',
                                'evening': 'navečer',
                                'night': 'noću',
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'n.e.',
                            '0-alt-variant': 'pr. n. e.',
                            '0': 'Prije Krista',
                            '1': 'Poslije Krista'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'n.e.',
                            '0-alt-variant': 'pr. n. e.',
                            '0': 'pr. Kr.',
                            '1': 'p. Kr.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'n.e.',
                            '0-alt-variant': 'pr. n. e.',
                            '0': 'pr.n.e.',
                            '1': 'AD'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y.',
                        'long': 'd. MMMM y.',
                        'medium': 'd. MMM y.',
                        'short': 'd.M.yy.'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'u\' {0}',
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
                        'long': '{1} \'u\' {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'L.',
                            'MMMMEd': 'E, d. MMMM',
                            'd': 'd.',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd. M.',
                            'Ed': 'E, d.',
                            'Gy': 'y. G',
                            'yMd': 'd. M. y.',
                            'MMMMdd': 'dd. MMMM',
                            'MMMd': 'd. MMM',
                            'MMdd': 'dd. MM.',
                            'MEd': 'E, d. M.',
                            'GyMMMd': 'd. MMM y. G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'hh:mm:ss a',
                            'GyMMMEd': 'E, d. MMM y. G',
                            'h': 'h a',
                            'GyMMM': 'LLL y. G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, d. M. y.',
                            'MMMEd': 'E, d. MMM',
                            'hm': 'hh:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M. y.',
                            'MMMMd': 'd. MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y.',
                            'yMM': 'MM. y.',
                            'yMMM': 'LLL y.',
                            'yMMMd': 'd. MMM y.',
                            'yMMMEd': 'E, d. MMM y.',
                            'yMMMM': 'LLLL y.',
                            'yQQQ': 'QQQ y.',
                            'yQQQQ': 'QQQQ y.'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH - HH \'h\' v'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h - h\'h\' a'
                            },
                            'M': {
                                'M': 'MM. - MM.'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd.MM. - dd.MM.',
                                'M': 'dd.MM. - dd.MM.'
                            },
                            'yMMMEd': {
                                'd': 'E, dd. - E, dd. MMM y.',
                                'M': 'E, dd. MMM - E, dd. MMM y.',
                                'y': 'E, dd. MMM y. - E, dd. MMM y.'
                            },
                            'd': {
                                'd': 'dd. - dd.'
                            },
                            'MMMEd': {
                                'd': 'E, dd. - E, dd. MMM',
                                'M': 'E, dd. MMM - E, dd. MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y. - E, dd.MM.y.',
                                'M': 'E, dd.MM.y. - E, dd.MM.y.',
                                'y': 'E, dd.MM.y. - E, dd.MM.y.'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm-h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y.',
                                'y': 'LLL y. - LLL y.'
                            },
                            'H': {
                                'H': 'HH-HH\'h\''
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'yM': {
                                'M': 'MM.y. - MM.y.',
                                'y': 'MM.y. - MM.y.'
                            },
                            'yMMMd': {
                                'd': 'dd. - dd. MMM y.',
                                'M': 'dd. MMM - dd. MMM y.',
                                'y': 'dd. MMM y. - dd. MMM y.'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h - h \'h\' a v'
                            },
                            'yMd': {
                                'd': 'dd.MM.y. - dd.MM.y.',
                                'M': 'dd.MM.y. - dd.MM.y.',
                                'y': 'dd.MM.y. - dd.MM.y.'
                            },
                            'MMMd': {
                                'd': 'dd. - dd. MMM',
                                'M': 'dd. MMM - dd. MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM. - E, dd.MM.',
                                'M': 'E, dd.MM. - E, dd.MM.'
                            },
                            'y': {
                                'y': 'y. - y.'
                            },
                            'yMMMM': {
                                'M': 'LLLL – LLLL y.',
                                'y': 'LLLL y. - LLLL y.'
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
