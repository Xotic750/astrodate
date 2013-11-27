/**
 * @file {@link https://github.com/Xotic750/astrodate ko}. Language file for AstroDate.
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
        AstroDate.lang('ko', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} \uD45C\uC900\uC2DC',
                    'regionFormat-type-daylight': '{0} \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04',
                    'regionFormat': '{0} \uC2DC\uAC04',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'narrow': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'wide': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'narrow': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'wide': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'narrow': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'short': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'wide': {
                                    'sun': '\uC77C\uC694\uC77C',
                                    'mon': '\uC6D4\uC694\uC77C',
                                    'tue': '\uD654\uC694\uC77C',
                                    'wed': '\uC218\uC694\uC77C',
                                    'thu': '\uBAA9\uC694\uC77C',
                                    'fri': '\uAE08\uC694\uC77C',
                                    'sat': '\uD1A0\uC694\uC77C'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'narrow': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'short': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'wide': {
                                    'sun': '\uC77C\uC694\uC77C',
                                    'mon': '\uC6D4\uC694\uC77C',
                                    'tue': '\uD654\uC694\uC77C',
                                    'wed': '\uC218\uC694\uC77C',
                                    'thu': '\uBAA9\uC694\uC77C',
                                    'fri': '\uAE08\uC694\uC77C',
                                    'sat': '\uD1A0\uC694\uC77C'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1\uBD84\uAE30',
                                    '2': '2\uBD84\uAE30',
                                    '3': '3\uBD84\uAE30',
                                    '4': '4\uBD84\uAE30'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\uC81C 1/4\uBD84\uAE30',
                                    '2': '\uC81C 2/4\uBD84\uAE30',
                                    '3': '\uC81C 3/4\uBD84\uAE30',
                                    '4': '\uC81C 4/4\uBD84\uAE30'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1\uBD84\uAE30',
                                    '2': '2\uBD84\uAE30',
                                    '3': '3\uBD84\uAE30',
                                    '4': '4\uBD84\uAE30'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\uC81C 1/4\uBD84\uAE30',
                                    '2': '\uC81C 2/4\uBD84\uAE30',
                                    '3': '\uC81C 3/4\uBD84\uAE30',
                                    '4': '\uC81C 4/4\uBD84\uAE30'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'narrow': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'wide': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'narrow': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'wide': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\uC11C\uB825\uAE30\uC6D0\uC804',
                                '0-alt-variant': 'BCE',
                                '1': '\uC11C\uB825\uAE30\uC6D0',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\uAE30\uC6D0\uC804',
                                '0-alt-variant': 'BCE',
                                '1': '\uC11C\uAE30',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\uAE30\uC6D0\uC804',
                                '0-alt-variant': 'BCE',
                                '1': '\uC11C\uAE30',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\uB144 M\uC6D4 d\uC77C EEEE',
                            'long': 'y\uB144 M\uC6D4 d\uC77C',
                            'medium': 'y. M. d.',
                            'short': 'yy. M. d.'
                        },
                        'timeFormats': {
                            'full': 'a h\uC2DC m\uBD84 s\uCD08 zzzz',
                            'long': 'a h\uC2DC m\uBD84 s\uCD08 z',
                            'medium': 'a h:mm:ss',
                            'short': 'a h:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMd': 'y. M. d.',
                                'yM': 'y. M.',
                                'y': 'y\uB144',
                                'ms': 'mm:ss',
                                'mmss': 'mm:ss',
                                'MMMEEEEd': 'MMM d\uC77C EEEE',
                                'MMMEd': 'MMM d\uC77C (E)',
                                'MMMd': 'MMM d\uC77C',
                                'MMM': 'LLL',
                                'GyMMMd': 'G y\uB144 MMM d\uC77C',
                                'GyMMMEd': 'G y\uB144 MMM d\uC77C (E)',
                                'GyMMMEEEEd': 'G y\uB144 MMM d\uC77C EEEE',
                                'h': 'a h\uC2DC',
                                'H': 'H\uC2DC',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'a h:mm',
                                'yMEd': 'y. M. d. (E)',
                                'yQQQQ': 'y\uB144 QQQQ',
                                'yQQQ': 'y\uB144 QQQ',
                                'yMMMEEEEd': 'y\uB144 MMM d\uC77C EEEE',
                                'yMMMEd': 'y\uB144 MMM d\uC77C (E)',
                                'yMMMd': 'y\uB144 MMM d\uC77C',
                                'yMMM': 'y\uB144 MMM',
                                'yMM': 'y. M.',
                                'yMEEEEd': 'y. M. d. EEEE',
                                'GyMMM': 'G y\uB144 MMM',
                                'd': 'd\uC77C',
                                'Ed': 'd\uC77C (E)',
                                'EEEEd': 'd\uC77C EEEE',
                                'Ehm': '(E) a h:mm',
                                'EHm': '(E) HH:mm',
                                'Ehms': '(E) a h:mm:ss',
                                'EHms': '(E) HH:mm:ss',
                                'Gy': 'G y\uB144',
                                'Hm': 'HH:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'H\uC2DC m\uBD84 s\uCD08',
                                'M': 'M\uC6D4',
                                'Md': 'M. d.',
                                'MEd': 'M. d. (E)',
                                'MEEEEd': 'M. d. EEEE'
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
                                    'd': 'M\uC6D4 d\uC77C (E) ~ d\uC77C (E)',
                                    'M': 'M\uC6D4 d\uC77C (E) ~ M\uC6D4 d\uC77C (E)'
                                },
                                'MMMd': {
                                    'd': 'M\uC6D4 d\uC77C ~ d\uC77C',
                                    'M': 'M\uC6D4 d\uC77C ~ M\uC6D4 d\uC77C'
                                },
                                'MMM': {
                                    'M': 'MMM ~ MMM'
                                },
                                'MEd': {
                                    'd': 'M. d (E) ~ M. d (E)',
                                    'M': 'M. d (E) ~ M. d (E)'
                                },
                                'Md': {
                                    'd': 'M. d ~ M. d',
                                    'M': 'M. d ~ M. d'
                                },
                                'M': {
                                    'M': 'M\uC6D4 ~ M\uC6D4'
                                },
                                'Hv': {
                                    'H': 'HH ~ HH\uC2DC v'
                                },
                                'hv': {
                                    'a': 'a h\uC2DC ~ a h\uC2DC(v)',
                                    'h': 'a h\uC2DC ~ h\uC2DC(v)'
                                },
                                'intervalFormatFallback': '{0} ~ {1}',
                                'd': {
                                    'd': 'd\uC77C ~ d\uC77C'
                                },
                                'yM': {
                                    'M': 'y. M ~ y. M',
                                    'y': 'y. M ~ y. M'
                                },
                                'yMd': {
                                    'd': 'y. M. d. ~ y. M. d.',
                                    'M': 'y. M. d. ~ y. M. d.',
                                    'y': 'y. M. d. ~ y. M. d.'
                                },
                                'yMEd': {
                                    'd': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'M': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'y': 'y. M. d. (E) ~ y. M. d. (E)'
                                },
                                'yMMM': {
                                    'M': 'y\uB144 M\uC6D4~M\uC6D4',
                                    'y': 'y\uB144 M\uC6D4 ~ y\uB144 M\uC6D4'
                                },
                                'yMMMd': {
                                    'd': 'y\uB144 M\uC6D4 d\uC77C~d\uC77C',
                                    'M': 'y\uB144 M\uC6D4 d\uC77C ~ M\uC6D4 d\uC77C',
                                    'y': 'y\uB144 M\uC6D4 d\uC77C ~ y\uB144 M\uC6D4 d\uC77C'
                                },
                                'yMMMEd': {
                                    'd': 'y\uB144 M\uC6D4 d\uC77C (E) ~ d\uC77C (E)',
                                    'M': 'y\uB144 M\uC6D4 d\uC77C (E) ~ M\uC6D4 d\uC77C (E)',
                                    'y': 'y\uB144 M\uC6D4 d\uC77C (E) ~ y\uB144 M\uC6D4 d\uC77C (E)'
                                },
                                'yMMMEEEEd': {
                                    'd': 'y\uB144 M\uC6D4 d\uC77C EEEE ~ d\uC77C EEEE',
                                    'M': 'y\uB144 M\uC6D4 d\uC77C EEEE ~ M\uC6D4 d\uC77C EEEE',
                                    'y': 'y\uB144 M\uC6D4 d\uC77C EEEE ~ y\uB144 M\uC6D4 d\uC77C EEEE'
                                },
                                'yMMMM': {
                                    'M': 'y\uB144 MM\uC6D4 ~ MM\uC6D4',
                                    'y': 'y\uB144 MM\uC6D4 ~ y\uB144 MM\uC6D4'
                                },
                                'y': {
                                    'y': 'y\uB144 ~ y\uB144'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'Hmv': {
                                    'H': 'HH:mm ~ HH:mm v',
                                    'm': 'HH:mm ~ HH:mm v'
                                },
                                'hmv': {
                                    'a': 'a h:mm ~ a h:mm v',
                                    'h': 'a h:mm~h:mm v',
                                    'm': 'a h:mm~h:mm v'
                                },
                                'Hm': {
                                    'H': 'HH:mm ~ HH:mm',
                                    'm': 'HH:mm ~ HH:mm'
                                },
                                'hm': {
                                    'a': 'a h:mm ~ a h:mm',
                                    'h': 'a h:mm~h:mm',
                                    'm': 'a h:mm~h:mm'
                                },
                                'H': {
                                    'H': 'HH ~ HH\uC2DC'
                                },
                                'h': {
                                    'a': 'a h\uC2DC ~ a h\uC2DC',
                                    'h': 'a h\uC2DC ~ h\uC2DC'
                                }
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
