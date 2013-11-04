/* AstroDate Language: it
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
        AstroDate.lang('it', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1º trimestre',
                                '2': '2º trimestre',
                                '3': '3º trimestre',
                                '4': '4º trimestre'
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
                                '1': 'Primo trimestre',
                                '2': 'Secondo trimestre',
                                '3': 'Terzo trimestre',
                                '4': 'Quarto trimestre'
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
                                '1': 'gennaio',
                                '10': 'ottobre',
                                '2': 'febbraio',
                                '11': 'novembre',
                                '3': 'marzo',
                                '12': 'dicembre',
                                '4': 'aprile',
                                '5': 'maggio',
                                '6': 'giugno',
                                '7': 'luglio',
                                '8': 'agosto',
                                '9': 'settembre'
                            },
                            'abbreviated': {
                                '1': 'gen',
                                '10': 'ott',
                                '2': 'feb',
                                '11': 'nov',
                                '3': 'mar',
                                '12': 'dic',
                                '4': 'apr',
                                '5': 'mag',
                                '6': 'giu',
                                '7': 'lug',
                                '8': 'ago',
                                '9': 'set'
                            },
                            'narrow': {
                                '1': 'G',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'G',
                                '7': 'L',
                                '8': 'A',
                                '9': 'S'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Gennaio',
                                '10': 'Ottobre',
                                '2': 'Febbraio',
                                '11': 'Novembre',
                                '3': 'Marzo',
                                '12': 'Dicembre',
                                '4': 'Aprile',
                                '5': 'Maggio',
                                '6': 'Giugno',
                                '7': 'Luglio',
                                '8': 'Agosto',
                                '9': 'Settembre'
                            },
                            'abbreviated': {
                                '1': 'gen',
                                '10': 'ott',
                                '2': 'feb',
                                '11': 'nov',
                                '3': 'mar',
                                '12': 'dic',
                                '4': 'apr',
                                '5': 'mag',
                                '6': 'giu',
                                '7': 'lug',
                                '8': 'ago',
                                '9': 'set'
                            },
                            'narrow': {
                                '1': 'G',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'G',
                                '7': 'L',
                                '8': 'A',
                                '9': 'S'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'martedì',
                                'fri': 'venerdì',
                                'sun': 'domenica',
                                'sat': 'sabato',
                                'wed': 'mercoledì',
                                'mon': 'lunedì',
                                'thu': 'giovedì'
                            },
                            'abbreviated': {
                                'tue': 'mar',
                                'fri': 'ven',
                                'sun': 'dom',
                                'sat': 'sab',
                                'wed': 'mer',
                                'mon': 'lun',
                                'thu': 'gio'
                            },
                            'narrow': {
                                'tue': 'M',
                                'fri': 'V',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'M',
                                'mon': 'L',
                                'thu': 'G'
                            },
                            'short': {
                                'tue': 'mar',
                                'fri': 'ven',
                                'sun': 'dom',
                                'sat': 'sab',
                                'wed': 'mer',
                                'mon': 'lun',
                                'thu': 'gio'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Martedì',
                                'fri': 'Venerdì',
                                'sun': 'Domenica',
                                'sat': 'Sabato',
                                'wed': 'Mercoledì',
                                'mon': 'Lunedì',
                                'thu': 'Giovedì'
                            },
                            'abbreviated': {
                                'tue': 'mar',
                                'fri': 'ven',
                                'sun': 'dom',
                                'sat': 'sab',
                                'wed': 'mer',
                                'mon': 'lun',
                                'thu': 'gio'
                            },
                            'narrow': {
                                'tue': 'M',
                                'fri': 'V',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'M',
                                'mon': 'L',
                                'thu': 'G'
                            },
                            'short': {
                                'tue': 'mar',
                                'fri': 'ven',
                                'sun': 'dom',
                                'sat': 'sab',
                                'wed': 'mer',
                                'mon': 'lun',
                                'thu': 'gio'
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
                                'pm': 'p.',
                                'am': 'm.'
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
                                'pm': 'p.',
                                'am': 'm.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'a.C.',
                            '1': 'd.C.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'aC',
                            '1': 'dC'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'aC',
                            '1': 'dC'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE d MMMM y',
                        'long': 'dd MMMM y',
                        'medium': 'dd/MMM/y',
                        'short': 'dd/MM/yy'
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
                            'EHm': 'E HH.mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h.mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MEd': 'E d/M',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'hh:mm:ss a',
                            'GyMMMEd': 'E d MMM y G',
                            'h': 'hh a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E d/M/y',
                            'MMMEd': 'E d MMM',
                            'hm': 'hh:mm a',
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
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'E d - E d MMM y',
                                'M': 'E d MMM - E d MMM y',
                                'y': 'E d MMM y - E d MMM y'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E dd - E dd MMM',
                                'M': 'E dd MMM - E dd MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
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
                                'd': 'E dd/MM - E dd/MM',
                                'M': 'E dd/MM - E dd/MM'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'MMMM-MMMM y',
                                'y': 'MMMM y - MMMM y'
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
