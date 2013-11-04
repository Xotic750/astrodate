/* AstroDate Language: el
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
        AstroDate.lang('el', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1ο τρίμηνο',
                                '2': '2ο τρίμηνο',
                                '3': '3ο τρίμηνο',
                                '4': '4ο τρίμηνο'
                            },
                            'abbreviated': {
                                '1': 'Τ1',
                                '2': 'Τ2',
                                '3': 'Τ3',
                                '4': 'Τ4'
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
                                '1': '1ο τρίμηνο',
                                '2': '2ο τρίμηνο',
                                '3': '3ο τρίμηνο',
                                '4': '4ο τρίμηνο'
                            },
                            'abbreviated': {
                                '1': 'Τ1',
                                '2': 'Τ2',
                                '3': 'Τ3',
                                '4': 'Τ4'
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
                                '1': 'Ιανουαρίου',
                                '10': 'Οκτωβρίου',
                                '2': 'Φεβρουαρίου',
                                '11': 'Νοεμβρίου',
                                '3': 'Μαρτίου',
                                '12': 'Δεκεμβρίου',
                                '4': 'Απριλίου',
                                '5': 'Μαΐου',
                                '6': 'Ιουνίου',
                                '7': 'Ιουλίου',
                                '8': 'Αυγούστου',
                                '9': 'Σεπτεμβρίου'
                            },
                            'abbreviated': {
                                '1': 'Ιαν',
                                '10': 'Οκτ',
                                '2': 'Φεβ',
                                '11': 'Νοε',
                                '3': 'Μαρ',
                                '12': 'Δεκ',
                                '4': 'Απρ',
                                '5': 'Μαΐ',
                                '6': 'Ιουν',
                                '7': 'Ιουλ',
                                '8': 'Αυγ',
                                '9': 'Σεπ'
                            },
                            'narrow': {
                                '1': 'Ι',
                                '10': 'Ο',
                                '2': 'Φ',
                                '11': 'Ν',
                                '3': 'Μ',
                                '12': 'Δ',
                                '4': 'Α',
                                '5': 'Μ',
                                '6': 'Ι',
                                '7': 'Ι',
                                '8': 'Α',
                                '9': 'Σ'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Ιανουάριος',
                                '10': 'Οκτώβριος',
                                '2': 'Φεβρουάριος',
                                '11': 'Νοέμβριος',
                                '3': 'Μάρτιος',
                                '12': 'Δεκέμβριος',
                                '4': 'Απρίλιος',
                                '5': 'Μάιος',
                                '6': 'Ιούνιος',
                                '7': 'Ιούλιος',
                                '8': 'Αύγουστος',
                                '9': 'Σεπτέμβριος'
                            },
                            'abbreviated': {
                                '1': 'Ιαν',
                                '10': 'Οκτ',
                                '2': 'Φεβ',
                                '11': 'Νοέ',
                                '3': 'Μάρ',
                                '12': 'Δεκ',
                                '4': 'Απρ',
                                '5': 'Μάι',
                                '6': 'Ιούν',
                                '7': 'Ιούλ',
                                '8': 'Αύγ',
                                '9': 'Σεπ'
                            },
                            'narrow': {
                                '1': 'Ι',
                                '10': 'Ο',
                                '2': 'Φ',
                                '11': 'Ν',
                                '3': 'Μ',
                                '12': 'Δ',
                                '4': 'Α',
                                '5': 'Μ',
                                '6': 'Ι',
                                '7': 'Ι',
                                '8': 'Α',
                                '9': 'Σ'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'Τρίτη',
                                'fri': 'Παρασκευή',
                                'sun': 'Κυριακή',
                                'sat': 'Σάββατο',
                                'wed': 'Τετάρτη',
                                'mon': 'Δευτέρα',
                                'thu': 'Πέμπτη'
                            },
                            'abbreviated': {
                                'tue': 'Τρί',
                                'fri': 'Παρ',
                                'sun': 'Κυρ',
                                'sat': 'Σάβ',
                                'wed': 'Τετ',
                                'mon': 'Δευ',
                                'thu': 'Πέμ'
                            },
                            'narrow': {
                                'tue': 'Τ',
                                'fri': 'Π',
                                'sun': 'Κ',
                                'sat': 'Σ',
                                'wed': 'Τ',
                                'mon': 'Δ',
                                'thu': 'Π'
                            },
                            'short': {
                                'tue': 'Τρ',
                                'fri': 'Πα',
                                'sun': 'Κυ',
                                'sat': 'Σά',
                                'wed': 'Τε',
                                'mon': 'Δε',
                                'thu': 'Πέ'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Τρίτη',
                                'fri': 'Παρασκευή',
                                'sun': 'Κυριακή',
                                'sat': 'Σάββατο',
                                'wed': 'Τετάρτη',
                                'mon': 'Δευτέρα',
                                'thu': 'Πέμπτη'
                            },
                            'abbreviated': {
                                'tue': 'Τρί',
                                'fri': 'Παρ',
                                'sun': 'Κυρ',
                                'sat': 'Σάβ',
                                'wed': 'Τετ',
                                'mon': 'Δευ',
                                'thu': 'Πέμ'
                            },
                            'narrow': {
                                'tue': 'Τ',
                                'fri': 'Π',
                                'sun': 'Κ',
                                'sat': 'Σ',
                                'wed': 'Τ',
                                'mon': 'Δ',
                                'thu': 'Π'
                            },
                            'short': {
                                'tue': 'Τρ',
                                'fri': 'Πα',
                                'sun': 'Κυ',
                                'sat': 'Σά',
                                'wed': 'Τε',
                                'mon': 'Δε',
                                'thu': 'Πέ'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'μ.μ.',
                                'am': 'π.μ.'
                            },
                            'abbreviated': {
                                'pm': 'μ.μ.',
                                'am': 'π.μ.'
                            },
                            'narrow': {
                                'pm': 'μ.μ.',
                                'am': 'π.μ.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'μ.μ.',
                                'am': 'π.μ.'
                            },
                            'abbreviated': {
                                'pm': 'μ.μ.',
                                'am': 'π.μ.'
                            },
                            'narrow': {
                                'pm': 'μ.μ.',
                                'am': 'π.μ.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'ΚΧ',
                            '0-alt-variant': 'π.Κ.Χ.',
                            '0': 'π.Χ.',
                            '1': 'μ.Χ.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'ΚΧ',
                            '0-alt-variant': 'π.Κ.Χ.',
                            '0': 'π.Χ.',
                            '1': 'μ.Χ.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'ΚΧ',
                            '0-alt-variant': 'π.Κ.Χ.',
                            '0': 'π.Χ.',
                            '1': 'μ.Χ.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} - {0}',
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
                        'long': '{1} - {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MEd': 'E, d/M',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'HHmm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'LLL y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, d/M/y',
                            'MMMEd': 'E, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'HHmmss': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMM': 'LLLL y',
                            'yQQQ': 'y QQQ',
                            'yQQQQ': 'y QQQQ'
                        },
                        'medium': '{1} - {0}',
                        'short': '{1} - {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'E, dd MMM - E, dd MMM y',
                                'M': 'E, dd MMM - E, dd MMM y',
                                'y': 'E, dd MMM y - E, dd MMM y'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E, dd - E, dd MMM',
                                'M': 'E, dd MMM - E, dd MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, dd/MM/y - E, dd/MM/y',
                                'M': 'E, dd/MM/y - E, dd/MM/y',
                                'y': 'E, dd/MM/y - E, dd/MM/y'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm-h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y',
                                'y': 'MMM y - MMM y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'yM': {
                                'M': 'MM/y - MM/y',
                                'y': 'MM/y - MM/y'
                            },
                            'yMMMd': {
                                'd': 'dd-dd MMM y',
                                'M': 'dd MMM - dd MMM y',
                                'y': 'dd MMM y - dd MMM y'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'yMd': {
                                'd': 'dd/MM/y - dd/MM/y',
                                'M': 'dd/MM/y - dd/MM/y',
                                'y': 'dd/MM/y - dd/MM/y'
                            },
                            'MMMd': {
                                'd': 'dd-dd MMM',
                                'M': 'dd MMM - dd MMM'
                            },
                            'MEd': {
                                'd': 'E, dd/MM - E, dd/MM',
                                'M': 'E, dd/MM - E, dd/MM'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL y',
                                'y': 'LLLL y - LLLL y'
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
