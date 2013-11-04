/* AstroDate Language: ca
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
        AstroDate.lang('ca', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1r trimestre',
                                '2': '2n trimestre',
                                '3': '3r trimestre',
                                '4': '4t trimestre'
                            },
                            'abbreviated': {
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
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
                                '1': '1r trimestre',
                                '2': '2n trimestre',
                                '3': '3r trimestre',
                                '4': '4t trimestre'
                            },
                            'abbreviated': {
                                '1': '1T',
                                '2': '2T',
                                '3': '3T',
                                '4': '4T'
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
                                '1': 'gener',
                                '10': 'octubre',
                                '2': 'febrer',
                                '11': 'novembre',
                                '3': 'març',
                                '12': 'desembre',
                                '4': 'abril',
                                '5': 'maig',
                                '6': 'juny',
                                '7': 'juliol',
                                '8': 'agost',
                                '9': 'setembre'
                            },
                            'abbreviated': {
                                '1': 'gen.',
                                '10': 'oct.',
                                '2': 'feb.',
                                '11': 'nov.',
                                '3': 'març',
                                '12': 'des.',
                                '4': 'abr.',
                                '5': 'maig',
                                '6': 'juny',
                                '7': 'jul.',
                                '8': 'ag.',
                                '9': 'set.'
                            },
                            'narrow': {
                                '1': 'GN',
                                '10': 'OC',
                                '2': 'FB',
                                '11': 'NV',
                                '3': 'MÇ',
                                '12': 'DS',
                                '4': 'AB',
                                '5': 'MG',
                                '6': 'JN',
                                '7': 'JL',
                                '8': 'AG',
                                '9': 'ST'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'gener',
                                '10': 'octubre',
                                '2': 'febrer',
                                '11': 'novembre',
                                '3': 'març',
                                '12': 'desembre',
                                '4': 'abril',
                                '5': 'maig',
                                '6': 'juny',
                                '7': 'juliol',
                                '8': 'agost',
                                '9': 'setembre'
                            },
                            'abbreviated': {
                                '1': 'gen.',
                                '10': 'oct.',
                                '2': 'feb.',
                                '11': 'nov.',
                                '3': 'març',
                                '12': 'des.',
                                '4': 'abr.',
                                '5': 'maig',
                                '6': 'juny',
                                '7': 'jul.',
                                '8': 'ag.',
                                '9': 'set.'
                            },
                            'narrow': {
                                '1': 'GN',
                                '10': 'OC',
                                '2': 'FB',
                                '11': 'NV',
                                '3': 'MÇ',
                                '12': 'DS',
                                '4': 'AB',
                                '5': 'MG',
                                '6': 'JN',
                                '7': 'JL',
                                '8': 'AG',
                                '9': 'ST'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'dimarts',
                                'fri': 'divendres',
                                'sun': 'diumenge',
                                'sat': 'dissabte',
                                'wed': 'dimecres',
                                'mon': 'dilluns',
                                'thu': 'dijous'
                            },
                            'abbreviated': {
                                'tue': 'dt.',
                                'fri': 'dv.',
                                'sun': 'dg.',
                                'sat': 'ds.',
                                'wed': 'dc.',
                                'mon': 'dl.',
                                'thu': 'dj.'
                            },
                            'narrow': {
                                'tue': 'dt',
                                'fri': 'dv',
                                'sun': 'dg',
                                'sat': 'ds',
                                'wed': 'dc',
                                'mon': 'dl',
                                'thu': 'dj'
                            },
                            'short': {
                                'tue': 'dt.',
                                'fri': 'dv.',
                                'sun': 'dg.',
                                'sat': 'ds.',
                                'wed': 'dc.',
                                'mon': 'dl.',
                                'thu': 'dj.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'dimarts',
                                'fri': 'divendres',
                                'sun': 'diumenge',
                                'sat': 'dissabte',
                                'wed': 'dimecres',
                                'mon': 'dilluns',
                                'thu': 'dijous'
                            },
                            'abbreviated': {
                                'tue': 'dt.',
                                'fri': 'dv.',
                                'sun': 'dg.',
                                'sat': 'ds.',
                                'wed': 'dc.',
                                'mon': 'dl.',
                                'thu': 'dj.'
                            },
                            'narrow': {
                                'tue': 'dt',
                                'fri': 'dv',
                                'sun': 'dg',
                                'sat': 'ds',
                                'wed': 'dc',
                                'mon': 'dl',
                                'thu': 'dj'
                            },
                            'short': {
                                'tue': 'dm.',
                                'fri': 'dv.',
                                'sun': 'dg.',
                                'sat': 'ds.',
                                'wed': 'dc.',
                                'mon': 'dl.',
                                'thu': 'dj.'
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
                            '1-alt-variant': 'de la n. e.',
                            '0-alt-variant': 'a. de la n. e.',
                            '0': 'abans de Crist',
                            '1': 'després de Crist'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'de la n.e.',
                            '0-alt-variant': 'a. de la n. e.',
                            '0': 'aC',
                            '1': 'dC'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'de la n.e.',
                            '0-alt-variant': 'a. de la n. e.',
                            '0': 'aC',
                            '1': 'dC'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM \'de\' y',
                        'long': 'd MMMM \'de\' y',
                        'medium': 'dd/MM/y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H.mm.ss zzzz',
                        'long': 'H.mm.ss z',
                        'medium': 'H.mm.ss',
                        'short': 'H.mm'
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
                            'EHm': 'E H:mm',
                            'EHms': 'E H:mm:ss',
                            'GyMMMd': 'd MMM y G',
                            'Hm': 'HH:mm',
                            'GyMMMM': 'LLLL \'de\' y G',
                            'M': 'L',
                            'MMMMEd': 'E d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MEd': 'E d/M',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM, y G',
                            'h': 'h a',
                            'GyMMM': 'LLL y G',
                            'H': 'H',
                            'yMEd': 'E, d/M/y',
                            'MMMEd': 'E d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E, d MMM, y',
                            'yMMMM': 'LLLL \'de\' y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'H-H v'
                            },
                            'Hmv': {
                                'H': 'HH.mm-HH.mm v',
                                'm': 'HH.mm-HH.mm v'
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
                                'd': 'E d - E d MMM \'de\' y',
                                'M': 'E d MMM - E d MMM \'de\' y',
                                'y': 'E d MMM \'de\' y - E d MMM \'de\' y'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E d - E d MMM',
                                'M': 'E d MMM - E d MMM'
                            },
                            'hm': {
                                'a': 'h.mm a -h.mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'E dd/MM/y - E dd/MM/y',
                                'M': 'E dd/MM/y - E dd/MM/y',
                                'y': 'E dd/MM/y - E dd/MM/y'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL \'de\' y',
                                'y': 'LLL \'de\' y - LLL \'de\' y'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'Hm': {
                                'H': 'HH.mm-HH.mm',
                                'm': 'HH.mm-HH.mm'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'yM': {
                                'M': 'MM/y - MM/y',
                                'y': 'MM/y - MM/y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM \'de\' y',
                                'M': 'd MMM - d MMM \'de\' y',
                                'y': 'd MMM \'de\' y - d MMM \'de\' y'
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
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MEd': {
                                'd': 'E dd/MM - E dd/MM',
                                'M': 'E dd/MM - E dd/MM'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL \'de\' y',
                                'y': 'LLLL \'de\' y - LLLL \'de\' y'
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
