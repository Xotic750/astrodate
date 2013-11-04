/* AstroDate Language: hu
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
        AstroDate.lang('hu', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'I. negyedév',
                                '2': 'II. negyedév',
                                '3': 'III. negyedév',
                                '4': 'IV. negyedév'
                            },
                            'abbreviated': {
                                '1': 'N1',
                                '2': 'N2',
                                '3': 'N3',
                                '4': 'N4'
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
                                '1': '1. negyedév',
                                '2': '2. negyedév',
                                '3': '3. negyedév',
                                '4': '4. negyedév'
                            },
                            'abbreviated': {
                                '1': 'N1',
                                '2': 'N2',
                                '3': 'N3',
                                '4': 'N4'
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
                                '1': 'január',
                                '10': 'október',
                                '2': 'február',
                                '11': 'november',
                                '3': 'március',
                                '12': 'december',
                                '4': 'április',
                                '5': 'május',
                                '6': 'június',
                                '7': 'július',
                                '8': 'augusztus',
                                '9': 'szeptember'
                            },
                            'abbreviated': {
                                '1': 'jan.',
                                '10': 'okt.',
                                '2': 'febr.',
                                '11': 'nov.',
                                '3': 'márc.',
                                '12': 'dec.',
                                '4': 'ápr.',
                                '5': 'máj.',
                                '6': 'jún.',
                                '7': 'júl.',
                                '8': 'aug.',
                                '9': 'szept.'
                            },
                            'narrow': {
                                '1': 'J',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'Á',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'Sz'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'január',
                                '10': 'október',
                                '2': 'február',
                                '11': 'november',
                                '3': 'március',
                                '12': 'december',
                                '4': 'április',
                                '5': 'május',
                                '6': 'június',
                                '7': 'július',
                                '8': 'augusztus',
                                '9': 'szeptember'
                            },
                            'abbreviated': {
                                '1': 'jan.',
                                '10': 'okt.',
                                '2': 'febr.',
                                '11': 'nov.',
                                '3': 'márc.',
                                '12': 'dec.',
                                '4': 'ápr.',
                                '5': 'máj.',
                                '6': 'jún.',
                                '7': 'júl.',
                                '8': 'aug.',
                                '9': 'szept.'
                            },
                            'narrow': {
                                '1': 'J',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'Á',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'Sz'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'kedd',
                                'fri': 'péntek',
                                'sun': 'vasárnap',
                                'sat': 'szombat',
                                'wed': 'szerda',
                                'mon': 'hétfő',
                                'thu': 'csütörtök'
                            },
                            'abbreviated': {
                                'tue': 'K',
                                'fri': 'P',
                                'sun': 'V',
                                'sat': 'Szo',
                                'wed': 'Sze',
                                'mon': 'H',
                                'thu': 'Cs'
                            },
                            'narrow': {
                                'tue': 'K',
                                'fri': 'P',
                                'sun': 'V',
                                'sat': 'Sz',
                                'wed': 'Sz',
                                'mon': 'H',
                                'thu': 'Cs'
                            },
                            'short': {
                                'tue': 'K',
                                'fri': 'P',
                                'sun': 'V',
                                'sat': 'Szo',
                                'wed': 'Sze',
                                'mon': 'H',
                                'thu': 'Cs'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'kedd',
                                'fri': 'péntek',
                                'sun': 'vasárnap',
                                'sat': 'szombat',
                                'wed': 'szerda',
                                'mon': 'hétfő',
                                'thu': 'csütörtök'
                            },
                            'abbreviated': {
                                'tue': 'K',
                                'fri': 'P',
                                'sun': 'V',
                                'sat': 'Szo',
                                'wed': 'Sze',
                                'mon': 'H',
                                'thu': 'Cs'
                            },
                            'narrow': {
                                'tue': 'K',
                                'fri': 'P',
                                'sun': 'V',
                                'sat': 'Sz',
                                'wed': 'Sz',
                                'mon': 'H',
                                'thu': 'Cs'
                            },
                            'short': {
                                'tue': 'K',
                                'fri': 'P',
                                'sun': 'V',
                                'sat': 'Szo',
                                'wed': 'Sze',
                                'mon': 'H',
                                'thu': 'Cs'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'du.',
                                'am': 'de.'
                            },
                            'abbreviated': {
                                'pm': 'du.',
                                'am': 'de.'
                            },
                            'narrow': {
                                'pm': 'du.',
                                'am': 'de.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'du.',
                                'am': 'de.'
                            },
                            'abbreviated': {
                                'pm': 'du.',
                                'am': 'de.'
                            },
                            'narrow': {
                                'pm': 'du.',
                                'am': 'de.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'Kr. u.',
                            '0-alt-variant': 'Kr. e.',
                            '0': 'időszámításunk előtt',
                            '1': 'időszámításunk szerint'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'Kr. u.',
                            '0-alt-variant': 'Kr. e.',
                            '0': 'i. e.',
                            '1': 'i. sz.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'Kr. u.',
                            '0-alt-variant': 'Kr. e.',
                            '0': 'ie.',
                            '1': 'isz.'
                        }
                    },
                    'dateFormats': {
                        'full': 'y. MMMM d., EEEE',
                        'long': 'y. MMMM d.',
                        'medium': 'y MMM d',
                        'short': 'y. MM. dd.'
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
                            'EHm': 'E HH:mm',
                            'mmss': 'mm:ss',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'M. d.',
                            'Ed': 'd., E',
                            'Gy': 'G y.',
                            'yMd': 'y. MM. dd.',
                            'MMMd': 'MMM d.',
                            'MEd': 'M. d., E',
                            'GyMMMd': 'G y. MMM d.',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'a h:mm:ss',
                            'GyMMMEd': 'G y. MMM d., E',
                            'h': 'a h',
                            'GyMMM': 'G y. MMM',
                            'Hm': 'H:mm',
                            'H': 'H',
                            'yMEd': 'y. MM. dd., E',
                            'MMMEd': 'MMM d., E',
                            'hm': 'a h:mm',
                            'Hms': 'H:mm:ss',
                            'yM': 'y. M.',
                            'MMMMd': 'MMMM d.',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y.',
                            'yMMM': 'y. MMM',
                            'yMMMd': 'y. MMM d.',
                            'yMMMEd': 'y. MMM d., E',
                            'yMMMM': 'y. MMMM',
                            'yQQQ': 'y. QQQ',
                            'yQQQQ': 'y. QQQQ'
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
                                'a': 'a h – a h',
                                'h': 'a h–h'
                            },
                            'M': {
                                'M': 'M–M.'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'M. d–d.',
                                'M': 'M. d. – M. d.'
                            },
                            'yMMMEd': {
                                'd': 'y. MMM d., E – d., E',
                                'M': 'y. MMM d., E – MMM d., E',
                                'y': 'y. MMM d., E – y. MMM d., E'
                            },
                            'd': {
                                'd': 'd–d.'
                            },
                            'MMMEd': {
                                'd': 'MMM d., E – d., E',
                                'M': 'MMM d., E – MMM d., E'
                            },
                            'hm': {
                                'a': 'a h:mm – a h:mm',
                                'm': 'a h:mm–h:mm',
                                'h': 'a h:mm–h:mm'
                            },
                            'yMEd': {
                                'd': 'y. MM. dd., E – dd., E',
                                'M': 'y. MM. dd., E – MM. dd., E',
                                'y': 'y. MM. dd., E – y. MM. dd., E'
                            },
                            'hmv': {
                                'a': 'a h:mm – a h:mm v',
                                'm': 'a h:mm–h:mm v',
                                'h': 'a h:mm–h:mm v'
                            },
                            'yMMM': {
                                'M': 'y. MMM–MMM',
                                'y': 'y. MMM – y. MMM'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'y. MM–MM.',
                                'y': 'y. MM. – y. MM.'
                            },
                            'yMMMd': {
                                'd': 'y. MMM d–d.',
                                'M': 'y. MMM d. – MMM d.',
                                'y': 'y. MMM d. – y. MMM d.'
                            },
                            'hv': {
                                'a': 'a h – a h v',
                                'h': 'a h–h v'
                            },
                            'yMd': {
                                'd': 'y. MM. dd–dd.',
                                'M': 'y. MM. dd. – MM. dd.',
                                'y': 'y. MM. dd. – y. MM. dd.'
                            },
                            'MMMd': {
                                'd': 'MMM d–d.',
                                'M': 'MMM d. – MMM d.'
                            },
                            'MEd': {
                                'd': 'M. dd., E – M. d., E',
                                'M': 'M. d., E – M. d., E'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'y. MMMM–MMMM',
                                'y': 'y. MMMM – y. MMMM'
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
