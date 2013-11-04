/* AstroDate Language: cs
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
        AstroDate.lang('cs', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. čtvrtletí',
                                '2': '2. čtvrtletí',
                                '3': '3. čtvrtletí',
                                '4': '4. čtvrtletí'
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
                                '1': '1. čtvrtletí',
                                '2': '2. čtvrtletí',
                                '3': '3. čtvrtletí',
                                '4': '4. čtvrtletí'
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
                                '1': 'ledna',
                                '10': 'října',
                                '2': 'února',
                                '11': 'listopadu',
                                '3': 'března',
                                '12': 'prosince',
                                '4': 'dubna',
                                '5': 'května',
                                '6': 'června',
                                '7': 'července',
                                '8': 'srpna',
                                '9': 'září'
                            },
                            'abbreviated': {
                                '1': 'led',
                                '10': 'říj',
                                '2': 'úno',
                                '11': 'lis',
                                '3': 'bře',
                                '12': 'pro',
                                '4': 'dub',
                                '5': 'kvě',
                                '6': 'čvn',
                                '7': 'čvc',
                                '8': 'srp',
                                '9': 'zář'
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
                                '1': 'leden',
                                '10': 'říjen',
                                '2': 'únor',
                                '11': 'listopad',
                                '3': 'březen',
                                '12': 'prosinec',
                                '4': 'duben',
                                '5': 'květen',
                                '6': 'červen',
                                '7': 'červenec',
                                '8': 'srpen',
                                '9': 'září'
                            },
                            'abbreviated': {
                                '1': 'led',
                                '10': 'říj',
                                '2': 'úno',
                                '11': 'lis',
                                '3': 'bře',
                                '12': 'pro',
                                '4': 'dub',
                                '5': 'kvě',
                                '6': 'čvn',
                                '7': 'čvc',
                                '8': 'srp',
                                '9': 'zář'
                            },
                            'narrow': {
                                '1': 'l',
                                '10': 'ř',
                                '2': 'ú',
                                '11': 'l',
                                '3': 'b',
                                '12': 'p',
                                '4': 'd',
                                '5': 'k',
                                '6': 'č',
                                '7': 'č',
                                '8': 's',
                                '9': 'z'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'úterý',
                                'fri': 'pátek',
                                'sun': 'neděle',
                                'sat': 'sobota',
                                'wed': 'středa',
                                'mon': 'pondělí',
                                'thu': 'čtvrtek'
                            },
                            'abbreviated': {
                                'tue': 'út',
                                'fri': 'pá',
                                'sun': 'ne',
                                'sat': 'so',
                                'wed': 'st',
                                'mon': 'po',
                                'thu': 'čt'
                            },
                            'narrow': {
                                'tue': 'Ú',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'S',
                                'mon': 'P',
                                'thu': 'Č'
                            },
                            'short': {
                                'tue': 'út',
                                'fri': 'pá',
                                'sun': 'ne',
                                'sat': 'so',
                                'wed': 'st',
                                'mon': 'po',
                                'thu': 'čt'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'úterý',
                                'fri': 'pátek',
                                'sun': 'neděle',
                                'sat': 'sobota',
                                'wed': 'středa',
                                'mon': 'pondělí',
                                'thu': 'čtvrtek'
                            },
                            'abbreviated': {
                                'tue': 'út',
                                'fri': 'pá',
                                'sun': 'ne',
                                'sat': 'so',
                                'wed': 'st',
                                'mon': 'po',
                                'thu': 'čt'
                            },
                            'narrow': {
                                'tue': 'Ú',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'S',
                                'mon': 'P',
                                'thu': 'Č'
                            },
                            'short': {
                                'tue': 'út',
                                'fri': 'pá',
                                'sun': 'ne',
                                'sat': 'so',
                                'wed': 'st',
                                'mon': 'po',
                                'thu': 'čt'
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
                            '0': 'př. n. l.',
                            '1': 'n. l.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'př. n. l.',
                            '1': 'n. l.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'př.n.l.',
                            '1': 'n.l.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd. M. y',
                        'short': 'dd.MM.yy'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss zzzz',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
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
                            'GyMMMMd': 'd. MMMM y G',
                            'EHm': 'E H:mm',
                            'M': 'L',
                            'MMMMEd': 'E d. MMMM',
                            'd': 'd.',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd. M.',
                            'Ed': 'E d.',
                            'EHms': 'E H:mm:ss',
                            'GyMMMd': 'd. M. y G',
                            'yMMMM': 'LLLL y',
                            'GyMMMMEd': 'E d. MMMM y G',
                            'Gy': 'y G',
                            'yMd': 'd. M. y',
                            'MMMd': 'd. M.',
                            'MEd': 'E d. M.',
                            'yMMMMd': 'd. MMMM y',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E d. M. y G',
                            'h': 'h a',
                            'GyMMM': 'LLLL y G',
                            'Hm': 'H:mm',
                            'H': 'H',
                            'yMEd': 'E d. M. y',
                            'MMMEd': 'E d. M.',
                            'hm': 'h:mm a',
                            'yMMMMEd': 'E d. MMMM y',
                            'Hms': 'H:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'd. MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'LLLL y',
                            'yMMMd': 'd. M. y',
                            'yMMMEd': 'E d. M. y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'Hmv': {
                                'H': 'H:mm–H:mm v',
                                'm': 'H:mm–H:mm v'
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
                                'd': 'd. M. – d. M.',
                                'M': 'd. M. – d. M.'
                            },
                            'yMMMEd': {
                                'd': 'E d. M. – E d. M. y',
                                'M': 'E d. M. – E d. M. y',
                                'y': 'E d. M. y – E d. M. y'
                            },
                            'd': {
                                'd': 'd.–d.'
                            },
                            'MMMEd': {
                                'd': 'E d. M. – E d. M.',
                                'M': 'E d. M. – E d. M.'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E dd.MM.y – E dd.MM.y',
                                'M': 'E dd.MM.y – E dd.MM.y',
                                'y': 'E dd.MM.y – E dd.MM.y'
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
                                'H': 'H–H'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'M/y – M/y',
                                'y': 'M/y – M/y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. M. y',
                                'M': 'd. M. – d. M. y',
                                'y': 'd. M. y – d. M. y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'dd.MM.y – dd.MM.y',
                                'M': 'dd.MM.y – dd.MM.y',
                                'y': 'dd.MM.y – dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd.–d. M.',
                                'M': 'd. M. – d. M.'
                            },
                            'MEd': {
                                'd': 'E d. M. – E d. M.',
                                'M': 'E d. M. – E d. M.'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'LLLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
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
