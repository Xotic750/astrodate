/* AstroDate Language: ro
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
        AstroDate.lang('ro', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'trimestrul I',
                                '2': 'trimestrul al II-lea',
                                '3': 'trimestrul al III-lea',
                                '4': 'trimestrul al IV-lea'
                            },
                            'abbreviated': {
                                '1': 'trim. I',
                                '2': 'trim. II',
                                '3': 'trim. III',
                                '4': 'trim. IV'
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
                                '1': 'trimestrul I',
                                '2': 'trimestrul al II-lea',
                                '3': 'trimestrul al III-lea',
                                '4': 'trimestrul al IV-lea'
                            },
                            'abbreviated': {
                                '1': 'T1',
                                '2': 'T2',
                                '3': 'T3',
                                '4': 'T4'
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
                                '1': 'ianuarie',
                                '10': 'octombrie',
                                '2': 'februarie',
                                '11': 'noiembrie',
                                '3': 'martie',
                                '12': 'decembrie',
                                '4': 'aprilie',
                                '5': 'mai',
                                '6': 'iunie',
                                '7': 'iulie',
                                '8': 'august',
                                '9': 'septembrie'
                            },
                            'abbreviated': {
                                '1': 'ian.',
                                '10': 'oct.',
                                '2': 'feb.',
                                '11': 'nov.',
                                '3': 'mar.',
                                '12': 'dec.',
                                '4': 'apr.',
                                '5': 'mai',
                                '6': 'iun.',
                                '7': 'iul.',
                                '8': 'aug.',
                                '9': 'sept.'
                            },
                            'narrow': {
                                '1': 'I',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'I',
                                '7': 'I',
                                '8': 'A',
                                '9': 'S'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'ianuarie',
                                '10': 'octombrie',
                                '2': 'februarie',
                                '11': 'noiembrie',
                                '3': 'martie',
                                '12': 'decembrie',
                                '4': 'aprilie',
                                '5': 'mai',
                                '6': 'iunie',
                                '7': 'iulie',
                                '8': 'august',
                                '9': 'septembrie'
                            },
                            'abbreviated': {
                                '1': 'ian.',
                                '10': 'oct.',
                                '2': 'feb.',
                                '11': 'nov.',
                                '3': 'mar.',
                                '12': 'dec.',
                                '4': 'apr.',
                                '5': 'mai',
                                '6': 'iun.',
                                '7': 'iul.',
                                '8': 'aug.',
                                '9': 'sept.'
                            },
                            'narrow': {
                                '1': 'I',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'I',
                                '7': 'I',
                                '8': 'A',
                                '9': 'S'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'marți',
                                'fri': 'vineri',
                                'sun': 'duminică',
                                'sat': 'sâmbătă',
                                'wed': 'miercuri',
                                'mon': 'luni',
                                'thu': 'joi'
                            },
                            'abbreviated': {
                                'tue': 'Mar',
                                'fri': 'Vin',
                                'sun': 'Dum',
                                'sat': 'Sâm',
                                'wed': 'Mie',
                                'mon': 'Lun',
                                'thu': 'Joi'
                            },
                            'narrow': {
                                'tue': 'M',
                                'fri': 'V',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'M',
                                'mon': 'L',
                                'thu': 'J'
                            },
                            'short': {
                                'tue': 'Ma',
                                'fri': 'Vi',
                                'sun': 'Du',
                                'sat': 'Sâ',
                                'wed': 'Mi',
                                'mon': 'Lu',
                                'thu': 'Jo'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'marți',
                                'fri': 'vineri',
                                'sun': 'duminică',
                                'sat': 'sâmbătă',
                                'wed': 'miercuri',
                                'mon': 'luni',
                                'thu': 'joi'
                            },
                            'abbreviated': {
                                'tue': 'Mar',
                                'fri': 'Vin',
                                'sun': 'Dum',
                                'sat': 'Sâm',
                                'wed': 'Mie',
                                'mon': 'Lun',
                                'thu': 'Joi'
                            },
                            'narrow': {
                                'tue': 'M',
                                'fri': 'V',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'M',
                                'mon': 'L',
                                'thu': 'J'
                            },
                            'short': {
                                'tue': 'Ma',
                                'fri': 'Vi',
                                'sun': 'Du',
                                'sat': 'Sâ',
                                'wed': 'Mi',
                                'mon': 'Lu',
                                'thu': 'Jo'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            },
                            'abbreviated': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            },
                            'narrow': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            },
                            'abbreviated': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            },
                            'narrow': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'e.n.',
                            '0-alt-variant': 'î.e.n',
                            '0': 'înainte de Hristos',
                            '1': 'după Hristos'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'e.n.',
                            '0-alt-variant': 'î.e.n',
                            '0': 'î.Hr.',
                            '1': 'd.Hr.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'e.n.',
                            '0-alt-variant': 'î.e.n',
                            '0': 'î.Hr.',
                            '1': 'd.Hr.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd.MM.y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}, {0}',
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
                        'long': '{1}, {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'dd.MM',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'dd.MM.y',
                            'MMMd': 'd MMM',
                            'MMdd': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, dd.MM.y',
                            'MMMEd': 'E, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'MM.y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM.y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH-HH v'
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
                                'M': 'M-M'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd.MM - dd.MM',
                                'M': 'dd.MM - dd.MM'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM - E, d MMM y',
                                'M': 'E, d MMM - E, d MMM y',
                                'y': 'E, d MMM y - E, d MMM y'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E, d MMM - E, d MMM',
                                'M': 'E, d MMM - E, d MMM'
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
                                'H': 'HH-HH'
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
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'yMd': {
                                'd': 'dd.MM.y - dd.MM.y',
                                'M': 'dd.MM.y - dd.MM.y',
                                'y': 'dd.MM.y - dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM - E, dd.MM',
                                'M': 'E, dd.MM - E, dd.MM'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'MMMM - MMMM y',
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