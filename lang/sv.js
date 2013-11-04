/* AstroDate Language: sv
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
        AstroDate.lang('sv', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1:a kvartalet',
                                '2': '2:a kvartalet',
                                '3': '3:e kvartalet',
                                '4': '4:e kvartalet'
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
                                '1': '1:a kvartalet',
                                '2': '2:a kvartalet',
                                '3': '3:e kvartalet',
                                '4': '4:e kvartalet'
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
                                '1': 'januari',
                                '10': 'oktober',
                                '2': 'februari',
                                '11': 'november',
                                '3': 'mars',
                                '12': 'december',
                                '4': 'april',
                                '5': 'maj',
                                '6': 'juni',
                                '7': 'juli',
                                '8': 'augusti',
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
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Januari',
                                '10': 'Oktober',
                                '2': 'Februari',
                                '11': 'November',
                                '3': 'Mars',
                                '12': 'December',
                                '4': 'April',
                                '5': 'Maj',
                                '6': 'Juni',
                                '7': 'Juli',
                                '8': 'Augusti',
                                '9': 'September'
                            },
                            'abbreviated': {
                                '1': 'Jan',
                                '10': 'Okt',
                                '2': 'Feb',
                                '11': 'Nov',
                                '3': 'Mar',
                                '12': 'Dec',
                                '4': 'Apr',
                                '5': 'Maj',
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
                                'tue': 'tisdag',
                                'fri': 'fredag',
                                'sun': 'söndag',
                                'sat': 'lördag',
                                'wed': 'onsdag',
                                'mon': 'måndag',
                                'thu': 'torsdag'
                            },
                            'abbreviated': {
                                'tue': 'tis',
                                'fri': 'fre',
                                'sun': 'sön',
                                'sat': 'lör',
                                'wed': 'ons',
                                'mon': 'mån',
                                'thu': 'tors'
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
                                'sun': 'sö',
                                'sat': 'lö',
                                'wed': 'on',
                                'mon': 'må',
                                'thu': 'to'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Tisdag',
                                'fri': 'Fredag',
                                'sun': 'Söndag',
                                'sat': 'Lördag',
                                'wed': 'Onsdag',
                                'mon': 'Måndag',
                                'thu': 'Torsdag'
                            },
                            'abbreviated': {
                                'tue': 'Tis',
                                'fri': 'Fre',
                                'sun': 'Sön',
                                'sat': 'Lör',
                                'wed': 'Ons',
                                'mon': 'Mån',
                                'thu': 'Tor'
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
                                'tue': 'Ti',
                                'fri': 'Fr',
                                'sun': 'Sö',
                                'sat': 'Lö',
                                'wed': 'On',
                                'mon': 'Må',
                                'thu': 'To'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'em',
                                'am': 'fm'
                            },
                            'abbreviated': {
                                'pm': 'EM',
                                'am': 'FM'
                            },
                            'narrow': {
                                'pm': 'e',
                                'am': 'f'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'eftermiddag',
                                'am': 'förmiddag'
                            },
                            'abbreviated': {
                                'pm': 'em',
                                'am': 'fm'
                            },
                            'narrow': {
                                'pm': 'e.m.',
                                'am': 'f.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'västerländsk tideräkning',
                            '0-alt-variant': 'före västerländsk tideräkning',
                            '0': 'före Kristus',
                            '1': 'efter Kristus'
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
                            '0': 'f.Kr.',
                            '1': 'e.Kr.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE\'en\' \'den\' d:\'e\' MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'y-MM-dd'
                    },
                    'timeFormats': {
                        'full': '\'kl\'. HH:mm:ss zzzz',
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
                            'MMMMEd': 'E d:\'e\' MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'y-MM-dd',
                            'MMMd': 'd MMM',
                            'MMdd': 'dd/MM',
                            'MEd': 'E d/M',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, y-MM-dd',
                            'MMMEd': 'E d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'y-MM',
                            'MMMMd': 'd:\'e\' MMMM',
                            'MMM': 'LLL',
                            'yMMMEd': 'E d MMM y',
                            'MMd': 'd/M',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'y-MM',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y',
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
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd–d/M',
                                'M': 'd/M – d/M'
                            },
                            'yMMMEd': {
                                'd': 'E dd MMM–E dd MMM y',
                                'M': 'E dd MMM–E dd MMM y',
                                'y': 'E dd MMM y–E dd MMM y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E d – E d MMM',
                                'M': 'E d MMM – E d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, y-MM-dd – E, y-MM-dd',
                                'M': 'E, y-MM-dd – E, y-MM-dd',
                                'y': 'E, y-MM-dd – E, y-MM-dd'
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
                                'M': 'y-MM – MM',
                                'y': 'y-MM – y-MM'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM–d MMM y',
                                'y': 'd MMM y–d MMM y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'y-MM-dd – dd',
                                'M': 'y-MM-dd – MM-dd',
                                'y': 'y-MM-dd – y-MM-dd'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'E d/M – E d/M',
                                'M': 'E d/M – E d/M'
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
