/* AstroDate Language: da
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
        AstroDate.lang('da', {
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
                                '1': 'K1',
                                '2': 'K2',
                                '3': 'K3',
                                '4': 'K4'
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
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            },
                            'abbreviated': {
                                '1': 'K1',
                                '2': 'K2',
                                '3': 'K3',
                                '4': 'K4'
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
                                '3': 'marts',
                                '12': 'december',
                                '4': 'april',
                                '5': 'maj',
                                '6': 'juni',
                                '7': 'juli',
                                '8': 'august',
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
                                '8': 'aug.',
                                '9': 'sep.'
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
                                '1': 'januar',
                                '10': 'oktober',
                                '2': 'februar',
                                '11': 'november',
                                '3': 'marts',
                                '12': 'december',
                                '4': 'april',
                                '5': 'maj',
                                '6': 'juni',
                                '7': 'juli',
                                '8': 'august',
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
                                '8': 'aug',
                                '9': 'sep'
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
                                'tue': 'tirsdag',
                                'fri': 'fredag',
                                'sun': 'søndag',
                                'sat': 'lørdag',
                                'wed': 'onsdag',
                                'mon': 'mandag',
                                'thu': 'torsdag'
                            },
                            'abbreviated': {
                                'tue': 'tir.',
                                'fri': 'fre.',
                                'sun': 'søn.',
                                'sat': 'lør.',
                                'wed': 'ons.',
                                'mon': 'man.',
                                'thu': 'tor.'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'F',
                                'sun': 'S',
                                'sat': 'L',
                                'wed': 'O',
                                'mon': 'M',
                                'thu': 'T'
                            },
                            'short': {
                                'tue': 'ti',
                                'fri': 'fr',
                                'sun': 'sø',
                                'sat': 'lø',
                                'wed': 'on',
                                'mon': 'ma',
                                'thu': 'to'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'tirsdag',
                                'fri': 'fredag',
                                'sun': 'søndag',
                                'sat': 'lørdag',
                                'wed': 'onsdag',
                                'mon': 'mandag',
                                'thu': 'torsdag'
                            },
                            'abbreviated': {
                                'tue': 'tir',
                                'fri': 'fre',
                                'sun': 'søn',
                                'sat': 'lør',
                                'wed': 'ons',
                                'mon': 'man',
                                'thu': 'tor'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'F',
                                'sun': 'S',
                                'sat': 'L',
                                'wed': 'O',
                                'mon': 'M',
                                'thu': 'T'
                            },
                            'short': {
                                'tue': 'ti',
                                'fri': 'fr',
                                'sun': 'sø',
                                'sat': 'lø',
                                'wed': 'on',
                                'mon': 'ma',
                                'thu': 'to'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'middag'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'middag'
                            },
                            'narrow': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'middag'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'eftermiddag',
                                'am': 'formiddag',
                                'noon': 'middag'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'middag'
                            },
                            'narrow': {
                                'pm': 'PM',
                                'am': 'AM',
                                'noon': 'middag'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'vesterlandsk tidsregning',
                            '0-alt-variant': 'før vesterlandsk tidsregning',
                            '0': 'f.Kr.',
                            '1': 'e.Kr.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'v.t.',
                            '0-alt-variant': 'f.v.t.',
                            '0': 'f.Kr.',
                            '1': 'e.Kr.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'vt',
                            '0-alt-variant': 'fvt',
                            '0': 'fKr',
                            '1': 'eKr'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE \'den\' d. MMMM y',
                        'long': 'd. MMM y',
                        'medium': 'dd/MM/y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'HH.mm.ss zzzz',
                        'long': 'HH.mm.ss z',
                        'medium': 'HH.mm.ss',
                        'short': 'HH.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'kl.\' {0}',
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
                        'long': '{1} \'kl.\' {0}',
                        'availableFormats': {
                            'EHm': 'E HH.mm',
                            'M': 'M',
                            'MMMMEd': 'E d. MMMM',
                            'd': 'd.',
                            'Ehms': 'E h.mm.ss a',
                            'Ehm': 'E h.mm a',
                            'Md': 'd/M',
                            'Ed': 'E \'d\'. d.',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd. MMM',
                            'MMdd': 'dd/MM',
                            'MEd': 'E d/M',
                            'GyMMMd': 'd. MMM y G',
                            'EHms': 'E HH.mm.ss',
                            'hms': 'h.mm.ss a',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH.mm',
                            'H': 'HH',
                            'yMEd': 'E d/M/y',
                            'MMMEd': 'E d. MMM',
                            'hm': 'h.mm a',
                            'Hms': 'HH.mm.ss',
                            'yM': 'M/y',
                            'MMM': 'MMM',
                            'ms': 'mm.ss',
                            'y': 'y',
                            'yMM': 'MM/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd. MMM y',
                            'yMMMEd': 'E d. MMM y',
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
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'dd/MM – dd/MM',
                                'M': 'dd/MM – dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'E \'den\' d. – E \'den\' d. MMM y',
                                'M': 'E \'den\' d. MMM – E \'den\' d. MMM y',
                                'y': 'E \'den\' d. MMM y – E \'den\' d. MMM y'
                            },
                            'd': {
                                'd': 'd.–d.'
                            },
                            'MMMEd': {
                                'd': 'E \'den\' d. – E \'den\' d. MMM',
                                'M': 'E \'den\' d. MMM – E \'den\' d. MMM'
                            },
                            'hm': {
                                'a': 'h.mm a – h.mm a',
                                'm': 'h.mm–h.mm a',
                                'h': 'h.mm–h.mm a'
                            },
                            'yMEd': {
                                'd': 'E dd/MM/y – E dd/MM/y',
                                'M': 'E dd/MM/y – E dd/MM/y',
                                'y': 'E dd/MM/y – E dd/MM/y'
                            },
                            'hmv': {
                                'a': 'h.mm a – h.mm a v',
                                'm': 'h.mm–h.mm a v',
                                'h': 'h.mm–h.mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
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
                                'M': 'MM/y – MM/y',
                                'y': 'MM/y – MM/y'
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
                                'd': 'dd/MM/y – dd/MM/y',
                                'M': 'dd/MM/y – dd/MM/y',
                                'y': 'dd/MM/y – dd/MM/y'
                            },
                            'MMMd': {
                                'd': 'd.–d. MMM',
                                'M': 'd. MMM – d. MMM'
                            },
                            'MEd': {
                                'd': 'E dd/MM – E dd/MM',
                                'M': 'E dd/MM – E dd/MM'
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
