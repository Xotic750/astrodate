/* AstroDate Language: fr
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
        AstroDate.lang('fr', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1er trimestre',
                                '2': '2e trimestre',
                                '3': '3e trimestre',
                                '4': '4e trimestre'
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
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1er trimestre',
                                '2': '2e trimestre',
                                '3': '3e trimestre',
                                '4': '4e trimestre'
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
                                '1': 'janvier',
                                '10': 'octobre',
                                '2': 'février',
                                '11': 'novembre',
                                '3': 'mars',
                                '12': 'décembre',
                                '4': 'avril',
                                '5': 'mai',
                                '6': 'juin',
                                '7': 'juillet',
                                '8': 'août',
                                '9': 'septembre'
                            },
                            'abbreviated': {
                                '1': 'janv.',
                                '10': 'oct.',
                                '2': 'févr.',
                                '11': 'nov.',
                                '3': 'mars',
                                '12': 'déc.',
                                '4': 'avr.',
                                '5': 'mai',
                                '6': 'juin',
                                '7': 'juil.',
                                '8': 'août',
                                '9': 'sept.'
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
                                '1': 'janvier',
                                '10': 'octobre',
                                '2': 'février',
                                '11': 'novembre',
                                '3': 'mars',
                                '12': 'décembre',
                                '4': 'avril',
                                '5': 'mai',
                                '6': 'juin',
                                '7': 'juillet',
                                '8': 'août',
                                '9': 'septembre'
                            },
                            'abbreviated': {
                                '1': 'janv.',
                                '10': 'oct.',
                                '2': 'févr.',
                                '11': 'nov.',
                                '3': 'mars',
                                '12': 'déc.',
                                '4': 'avr.',
                                '5': 'mai',
                                '6': 'juin',
                                '7': 'juil.',
                                '8': 'août',
                                '9': 'sept.'
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
                                'tue': 'mardi',
                                'fri': 'vendredi',
                                'sun': 'dimanche',
                                'sat': 'samedi',
                                'wed': 'mercredi',
                                'mon': 'lundi',
                                'thu': 'jeudi'
                            },
                            'abbreviated': {
                                'tue': 'mar.',
                                'fri': 'ven.',
                                'sun': 'dim.',
                                'sat': 'sam.',
                                'wed': 'mer.',
                                'mon': 'lun.',
                                'thu': 'jeu.'
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
                                'tue': 'ma',
                                'fri': 've',
                                'sun': 'di',
                                'sat': 'sa',
                                'wed': 'me',
                                'mon': 'lu',
                                'thu': 'je'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'mardi',
                                'fri': 'vendredi',
                                'sun': 'dimanche',
                                'sat': 'samedi',
                                'wed': 'mercredi',
                                'mon': 'lundi',
                                'thu': 'jeudi'
                            },
                            'abbreviated': {
                                'tue': 'mar.',
                                'fri': 'ven.',
                                'sun': 'dim.',
                                'sat': 'sam.',
                                'wed': 'mer.',
                                'mon': 'lun.',
                                'thu': 'jeu.'
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
                                'tue': 'mar.',
                                'fri': 'ven.',
                                'sun': 'dim.',
                                'sat': 'sam.',
                                'wed': 'mer.',
                                'mon': 'lun.',
                                'thu': 'jeu.'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'morning': 'matin',
                                'noon': 'midi',
                                'afternoon': 'après-midi',
                                'night': 'soir',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'abbreviated': {
                                'morning': 'matin',
                                'noon': 'midi',
                                'afternoon': 'ap.m.',
                                'night': 'soir',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'morning': 'matin',
                                'noon': 'midi',
                                'afternoon': 'ap.-m.',
                                'night': 'soir',
                                'am': 'a',
                                'pm': 'p'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'morning': 'matin',
                                'noon': 'midi',
                                'afternoon': 'après-midi',
                                'night': 'soir',
                                'am': 'avant-midi',
                                'pm': 'après-midi'
                            },
                            'abbreviated': {
                                'morning': 'matin',
                                'noon': 'midi',
                                'afternoon': 'ap.m.',
                                'night': 'soir',
                                'am': 'av.m.',
                                'pm': 'ap.m.'
                            },
                            'narrow': {
                                'morning': 'matin',
                                'noon': 'midi',
                                'afternoon': 'ap.-m.',
                                'night': 'soir',
                                'am': 'a',
                                'pm': 'p'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'EC',
                            '0-alt-variant': 'AEC',
                            '0': 'avant Jésus-Christ',
                            '1': 'après Jésus-Christ'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'EC',
                            '0-alt-variant': 'AEC',
                            '0': 'av. J.-C.',
                            '1': 'ap. J.-C.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'EC',
                            '0-alt-variant': 'AEC',
                            '0': 'av. J.-C.',
                            '1': 'ap. J.-C.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd/MM/y'
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
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MEd': 'E d/M',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH \'h\'',
                            'yMEd': 'E d/M/y',
                            'MMMEd': 'E d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E d MMM y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH – HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm – HH:mm v',
                                'm': 'HH:mm – HH:mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h – h a'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'dd/MM – dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'E d – E d MMM y',
                                'M': 'E d MMM – E d MMM y',
                                'y': 'E d MMM y – E d MMM y'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E d – E d MMM',
                                'M': 'E d MMM – E d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm – h:mm a',
                                'h': 'h:mm – h:mm a'
                            },
                            'yMEd': {
                                'd': 'E dd/MM/y – E dd/MM/y',
                                'M': 'E dd/MM/y – E dd/MM/y',
                                'y': 'E dd/MM/y – E dd/MM/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm – h:mm a v',
                                'h': 'h:mm – h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'H': {
                                'H': 'HH – HH'
                            },
                            'Hm': {
                                'H': 'HH:mm – HH:mm',
                                'm': 'HH:mm – HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'MM/y – MM/y',
                                'y': 'M/y – M/y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM – d MMM y',
                                'y': 'd MMM y – d MMM y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h – h a v'
                            },
                            'yMd': {
                                'd': 'd/M/y – d/M/y',
                                'M': 'd/M/y – d/M/y',
                                'y': 'dd/MM/y – dd/MM/y'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'E dd/MM - E dd/MM',
                                'M': 'E dd/MM - E dd/MM'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM y',
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
