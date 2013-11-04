/* AstroDate Language: es
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
        AstroDate.lang('es', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1.er trimestre',
                                '2': '2.º trimestre',
                                '3': '3.er trimestre',
                                '4': '4.º trimestre'
                            },
                            'abbreviated': {
                                '1': 'T1',
                                '2': 'T2',
                                '3': 'T3',
                                '4': 'T4'
                            },
                            'narrow': {
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1.er trimestre',
                                '2': '2.º trimestre',
                                '3': '3.er trimestre',
                                '4': '4.º trimestre'
                            },
                            'abbreviated': {
                                '1': 'T1',
                                '2': 'T2',
                                '3': 'T3',
                                '4': 'T4'
                            },
                            'narrow': {
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'enero',
                                '10': 'octubre',
                                '2': 'febrero',
                                '11': 'noviembre',
                                '3': 'marzo',
                                '12': 'diciembre',
                                '4': 'abril',
                                '5': 'mayo',
                                '6': 'junio',
                                '7': 'julio',
                                '8': 'agosto',
                                '9': 'septiembre'
                            },
                            'abbreviated': {
                                '1': 'ene.',
                                '10': 'oct.',
                                '2': 'feb.',
                                '11': 'nov.',
                                '3': 'mar.',
                                '12': 'dic.',
                                '4': 'abr.',
                                '5': 'may.',
                                '6': 'jun.',
                                '7': 'jul.',
                                '8': 'ago.',
                                '9': 'sept.'
                            },
                            'narrow': {
                                '1': 'E',
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
                                '1': 'Enero',
                                '10': 'Octubre',
                                '2': 'Febrero',
                                '11': 'Noviembre',
                                '3': 'Marzo',
                                '12': 'Diciembre',
                                '4': 'Abril',
                                '5': 'Mayo',
                                '6': 'Junio',
                                '7': 'Julio',
                                '8': 'Agosto',
                                '9': 'Septiembre'
                            },
                            'abbreviated': {
                                '1': 'Ene.',
                                '10': 'Oct.',
                                '2': 'Feb.',
                                '11': 'Nov.',
                                '3': 'Mar.',
                                '12': 'Dic.',
                                '4': 'Abr.',
                                '5': 'May.',
                                '6': 'Jun.',
                                '7': 'Jul.',
                                '8': 'Ago.',
                                '9': 'Sept.'
                            },
                            'narrow': {
                                '1': 'E',
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
                                'tue': 'martes',
                                'fri': 'viernes',
                                'sun': 'domingo',
                                'sat': 'sábado',
                                'wed': 'miércoles',
                                'mon': 'lunes',
                                'thu': 'jueves'
                            },
                            'abbreviated': {
                                'tue': 'mar.',
                                'fri': 'vie.',
                                'sun': 'dom.',
                                'sat': 'sáb.',
                                'wed': 'mié.',
                                'mon': 'lun.',
                                'thu': 'jue.'
                            },
                            'narrow': {
                                'tue': 'M',
                                'fri': 'V',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'X',
                                'mon': 'L',
                                'thu': 'J'
                            },
                            'short': {
                                'tue': 'MA',
                                'fri': 'VI',
                                'sun': 'DO',
                                'sat': 'SA',
                                'wed': 'MI',
                                'mon': 'LU',
                                'thu': 'JU'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Martes',
                                'fri': 'Viernes',
                                'sun': 'Domingo',
                                'sat': 'Sábado',
                                'wed': 'Miércoles',
                                'mon': 'Lunes',
                                'thu': 'Jueves'
                            },
                            'abbreviated': {
                                'tue': 'Mar.',
                                'fri': 'Vie.',
                                'sun': 'Dom.',
                                'sat': 'Sáb.',
                                'wed': 'Mié.',
                                'mon': 'Lun.',
                                'thu': 'Jue.'
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
                                'tue': 'MA',
                                'fri': 'VI',
                                'sun': 'DO',
                                'sat': 'SA',
                                'wed': 'MI',
                                'mon': 'LU',
                                'thu': 'JU'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'p. m.',
                                'am': 'a. m.'
                            },
                            'abbreviated': {
                                'pm': 'p. m.',
                                'am': 'a. m.'
                            },
                            'narrow': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'p. m.',
                                'am': 'a. m.'
                            },
                            'abbreviated': {
                                'pm': 'p. m.',
                                'am': 'a. m.'
                            },
                            'narrow': {
                                'pm': 'p.m.',
                                'am': 'a.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'e. c.',
                            '0-alt-variant': 'a. e. c.',
                            '0': 'antes de Cristo',
                            '1': 'anno Dómini'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'e. c.',
                            '0-alt-variant': 'a. e. c.',
                            '0': 'a. C.',
                            '1': 'd. C.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'e. c.',
                            '0-alt-variant': 'a. e. c.',
                            '0': 'a. C.',
                            '1': 'd. C.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d \'de\' MMMM \'de\' y',
                        'long': 'd \'de\' MMMM \'de\' y',
                        'medium': 'd/M/y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss (zzzz)',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
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
                            'EHm': 'E, H:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E, h:mm:ss a',
                            'Ehm': 'E, h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd \'de\' MMM',
                            'MMdd': 'd/M',
                            'MEd': 'E, d/M',
                            'GyMMMd': 'd MMM \'de\' y G',
                            'EHms': 'E, H:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d \'de\' MMMM \'de\' y G',
                            'h': 'h a',
                            'GyMMM': 'MMM \'de\' y G',
                            'Hm': 'H:mm',
                            'H': 'H',
                            'yMEd': 'EEE, d/M/y',
                            'MMMEd': 'E d \'de\' MMM',
                            'hm': 'h:mm a',
                            'Hms': 'H:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'd \'de\' MMMM',
                            'MMM': 'LLL',
                            'yMMMEd': 'EEE, d \'de\' MMMM \'de\' y',
                            'MMd': 'd/M',
                            'yQQQ': 'QQQ y',
                            'MMMdd': 'dd-MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'M/y',
                            'yMMM': 'MMM \'de\' y',
                            'yMMMd': 'd \'de\' MMM \'de\' y',
                            'yMMMM': 'MMMM \'de\' y',
                            'yQQQQ': 'QQQQ \'de\' y'
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
                                'a': 'h a–h a',
                                'h': 'h–h a'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0}–{1}',
                            'Md': {
                                'd': 'd/M–d/M',
                                'M': 'd/M–d/M'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM–E, d MMM \'de\' y',
                                'M': 'E, d MMM–E, d MMM \'de\' y',
                                'y': 'E, d MMM \'de\' y–E, d MMM \'de\' y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E, d MMM–E, d MMM',
                                'M': 'E, d MMM–E, d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm – h:mm a',
                                'h': 'h:mm – h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y–E, d/M/y',
                                'M': 'E, d/M/y–E, d/M/y',
                                'y': 'E, d/M/y–E, d/M/y'
                            },
                            'hmv': {
                                'a': 'h:mm a–h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y–MMM y'
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
                                'M': 'M/y–M/y',
                                'y': 'M/y–M/y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM–d MMM \'de\' y',
                                'y': 'd MMM \'de\' y–d MMM \'de\' y'
                            },
                            'hv': {
                                'a': 'h a–h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'd/M/y–d/M/y',
                                'M': 'd/M/y–d/M/y',
                                'y': 'd/M/y–d/M/y'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM–d MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M–E, d/M',
                                'M': 'E, d/M–E, d/M'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'MMMM–MMMM \'de\' y',
                                'y': 'MMMM \'de\' y–MMMM \'de\' y'
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
