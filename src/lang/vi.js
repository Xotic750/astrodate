/**
 * @file {@link https://github.com/Xotic750/astrodate vi}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * units:
 */

/*
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

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('vi', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Gi\u1EDD chu\u1EA9n {0}',
                    'regionFormat-type-daylight': 'Gi\u1EDD ban ng\u00E0y {0}',
                    'regionFormat': 'Gi\u1EDD {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'thg 8',
                                    '7': 'thg 7',
                                    '6': 'thg 6',
                                    '5': 'thg 5',
                                    '12': 'thg 12',
                                    '11': 'thg 11',
                                    '10': 'thg 10',
                                    '9': 'thg 9',
                                    '1': 'thg 1',
                                    '2': 'thg 2',
                                    '3': 'thg 3',
                                    '4': 'thg 4'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'th\u00E1ng 8',
                                    '7': 'th\u00E1ng 7',
                                    '6': 'th\u00E1ng 6',
                                    '5': 'th\u00E1ng 5',
                                    '12': 'th\u00E1ng 12',
                                    '11': 'th\u00E1ng 11',
                                    '10': 'th\u00E1ng 10',
                                    '9': 'th\u00E1ng 9',
                                    '1': 'th\u00E1ng 1',
                                    '2': 'th\u00E1ng 2',
                                    '3': 'th\u00E1ng 3',
                                    '4': 'th\u00E1ng 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Thg 8',
                                    '7': 'Thg 7',
                                    '6': 'Thg 6',
                                    '5': 'Thg 5',
                                    '12': 'Thg 12',
                                    '11': 'Thg 11',
                                    '10': 'Thg 10',
                                    '9': 'Thg 9',
                                    '1': 'Thg 1',
                                    '2': 'Thg 2',
                                    '3': 'Thg 3',
                                    '4': 'Thg 4'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'Th\u00E1ng 8',
                                    '7': 'Th\u00E1ng 7',
                                    '6': 'Th\u00E1ng 6',
                                    '5': 'Th\u00E1ng 5',
                                    '12': 'Th\u00E1ng 12',
                                    '11': 'Th\u00E1ng 11',
                                    '10': 'Th\u00E1ng 10',
                                    '9': 'Th\u00E1ng 9',
                                    '1': 'Th\u00E1ng 1',
                                    '2': 'Th\u00E1ng 2',
                                    '3': 'Th\u00E1ng 3',
                                    '4': 'Th\u00E1ng 4'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Ch\u1EE7 Nh\u1EADt',
                                    'mon': 'Th\u1EE9 Hai',
                                    'tue': 'Th\u1EE9 Ba',
                                    'wed': 'Th\u1EE9 T\u01B0',
                                    'thu': 'Th\u1EE9 N\u0103m',
                                    'fri': 'Th\u1EE9 S\u00E1u',
                                    'sat': 'Th\u1EE9 B\u1EA3y'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Ch\u1EE7 Nh\u1EADt',
                                    'mon': 'Th\u1EE9 Hai',
                                    'tue': 'Th\u1EE9 Ba',
                                    'wed': 'Th\u1EE9 T\u01B0',
                                    'thu': 'Th\u1EE9 N\u0103m',
                                    'fri': 'Th\u1EE9 S\u00E1u',
                                    'sat': 'Th\u1EE9 B\u1EA3y'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': 'Qu\u00FD 1',
                                    '2': 'Qu\u00FD 2',
                                    '3': 'Qu\u00FD 3',
                                    '4': 'Qu\u00FD 4'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': 'Qu\u00FD 1',
                                    '2': 'Qu\u00FD 2',
                                    '3': 'Qu\u00FD 3',
                                    '4': 'Qu\u00FD 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'tr. CN',
                                '0-alt-variant': 'BCE',
                                '1': 'sau CN',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'tr. CN',
                                '0-alt-variant': 'BCE',
                                '1': 'sau CN',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'tr. CN',
                                '0-alt-variant': 'BCE',
                                '1': 'sau CN',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, \'ng\u00E0y\' dd MMMM \'n\u0103m\' y',
                            'long': '\'Ng\u00E0y\' dd \'th\u00E1ng\' MM \'n\u0103m\' y',
                            'medium': 'dd-MM-y',
                            'short': 'dd/MM/y'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{0} {1}',
                            'long': '{0} {1}',
                            'medium': '{0} {1}',
                            'short': '{0} {1}',
                            'availableFormats': {
                                'yMM': 'MM-y',
                                'yMEd': 'E, dd-M-y',
                                'yMd': 'd/M/y',
                                'yM': 'M/y',
                                'y': '\'N\u0103m\' y',
                                'ms': 'mm:ss',
                                'Ed': 'E, dd',
                                'd': 'd',
                                'GyMMMd': 'dd MMM, y G',
                                'GyMMMEd': 'E, dd MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, dd MMM y',
                                'yMMMd': 'dd MMM, y',
                                'yMMM': 'MMM y',
                                'Hms': 'H:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': '\'N\u0103m\' y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'dd-M',
                                'MEd': 'E, dd-M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'dd MMM',
                                'MMMEd': 'E, dd MMM',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'E, dd MMMM',
                                'mmss': 'mm:ss'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{1} {0}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'EEEE, \'ng\u00E0y\' dd - EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M',
                                    'M': 'EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M - EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M'
                                },
                                'MMMd': {
                                    'd': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M',
                                    'M': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                    'M': 'EEEE, dd/MM - EEEE, dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': '\'Th\u00E1ng\' M - \'Th\u00E1ng\' M'
                                },
                                'Hv': {
                                    'H': 'HH\'h\'-HH\'h\' v'
                                },
                                'hv': {
                                    'a': 'h\'h\' a - h\'h\' a v',
                                    'h': 'h\'h\'-h\'h\' a v'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': '\'Th\u00E1ng\' M - \'Th\u00E1ng\' M \'n\u0103m\' y',
                                    'y': '\'Th\u00E1ng\' M \'n\u0103m\' y - \'Th\u00E1ng\' M \'n\u0103m\' y'
                                },
                                'yMMMd': {
                                    'd': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y',
                                    'M': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y',
                                    'y': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE, \'ng\u00E0y\' dd MMM - EEEE, \'ng\u00E0y\' dd MMM \'n\u0103m\' y',
                                    'M': 'E, dd \'th\u00E1ng\' M - E, dd \'th\u00E1ng\' M, y',
                                    'y': 'E, dd \'th\u00E1ng\' M, y - E, dd \'th\u00E1ng\' M, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH\'h\' - HH\'h\''
                                },
                                'h': {
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'd': {
                                    'd': '\'Ng\u00E0y\' dd-dd'
                                },
                                'intervalFormatFallback': '{0} - {1}'
                            }
                        }
                    }
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));
