/**
 * @file {@link https://github.com/Xotic750/astrodate el}. Language file for AstroDate.
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
        AstroDate.lang('el', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '[{1} ({0})]',
                    'regionFormat-type-standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 ({0})',
                    'regionFormat-type-daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 ({0})',
                    'regionFormat': '\u038F\u03C1\u03B1 ({0})',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0391\u03C5\u03B3',
                                    '7': '\u0399\u03BF\u03C5\u03BB',
                                    '6': '\u0399\u03BF\u03C5\u03BD',
                                    '5': '\u039C\u03B1\u0390',
                                    '12': '\u0394\u03B5\u03BA',
                                    '11': '\u039D\u03BF\u03B5',
                                    '10': '\u039F\u03BA\u03C4',
                                    '9': '\u03A3\u03B5\u03C0',
                                    '1': '\u0399\u03B1\u03BD',
                                    '2': '\u03A6\u03B5\u03B2',
                                    '3': '\u039C\u03B1\u03C1',
                                    '4': '\u0391\u03C0\u03C1'
                                },
                                'narrow': {
                                    '8': '\u0391',
                                    '7': '\u0399',
                                    '6': '\u0399',
                                    '5': '\u039C',
                                    '12': '\u0394',
                                    '11': '\u039D',
                                    '10': '\u039F',
                                    '9': '\u03A3',
                                    '1': '\u0399',
                                    '2': '\u03A6',
                                    '3': '\u039C',
                                    '4': '\u0391'
                                },
                                'wide': {
                                    '8': '\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5',
                                    '7': '\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5',
                                    '6': '\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5',
                                    '5': '\u039C\u03B1\u0390\u03BF\u03C5',
                                    '12': '\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '11': '\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '10': '\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '9': '\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '1': '\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5',
                                    '2': '\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5',
                                    '3': '\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5',
                                    '4': '\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0391\u03CD\u03B3',
                                    '7': '\u0399\u03BF\u03CD\u03BB',
                                    '6': '\u0399\u03BF\u03CD\u03BD',
                                    '5': '\u039C\u03AC\u03B9',
                                    '12': '\u0394\u03B5\u03BA',
                                    '11': '\u039D\u03BF\u03AD',
                                    '10': '\u039F\u03BA\u03C4',
                                    '9': '\u03A3\u03B5\u03C0',
                                    '1': '\u0399\u03B1\u03BD',
                                    '2': '\u03A6\u03B5\u03B2',
                                    '3': '\u039C\u03AC\u03C1',
                                    '4': '\u0391\u03C0\u03C1'
                                },
                                'narrow': {
                                    '8': '\u0391',
                                    '7': '\u0399',
                                    '6': '\u0399',
                                    '5': '\u039C',
                                    '12': '\u0394',
                                    '11': '\u039D',
                                    '10': '\u039F',
                                    '9': '\u03A3',
                                    '1': '\u0399',
                                    '2': '\u03A6',
                                    '3': '\u039C',
                                    '4': '\u0391'
                                },
                                'wide': {
                                    '8': '\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2',
                                    '7': '\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2',
                                    '6': '\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2',
                                    '5': '\u039C\u03AC\u03B9\u03BF\u03C2',
                                    '12': '\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '11': '\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '10': '\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '9': '\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '1': '\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2',
                                    '2': '\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2',
                                    '3': '\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2',
                                    '4': '\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u039A\u03C5\u03C1',
                                    'mon': '\u0394\u03B5\u03C5',
                                    'tue': '\u03A4\u03C1\u03AF',
                                    'wed': '\u03A4\u03B5\u03C4',
                                    'thu': '\u03A0\u03AD\u03BC',
                                    'fri': '\u03A0\u03B1\u03C1',
                                    'sat': '\u03A3\u03AC\u03B2'
                                },
                                'narrow': {
                                    'sun': '\u039A',
                                    'mon': '\u0394',
                                    'tue': '\u03A4',
                                    'wed': '\u03A4',
                                    'thu': '\u03A0',
                                    'fri': '\u03A0',
                                    'sat': '\u03A3'
                                },
                                'short': {
                                    'sun': '\u039A\u03C5',
                                    'mon': '\u0394\u03B5',
                                    'tue': '\u03A4\u03C1',
                                    'wed': '\u03A4\u03B5',
                                    'thu': '\u03A0\u03AD',
                                    'fri': '\u03A0\u03B1',
                                    'sat': '\u03A3\u03AC'
                                },
                                'wide': {
                                    'sun': '\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE',
                                    'mon': '\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1',
                                    'tue': '\u03A4\u03C1\u03AF\u03C4\u03B7',
                                    'wed': '\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7',
                                    'thu': '\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7',
                                    'fri': '\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE',
                                    'sat': '\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u039A\u03C5\u03C1',
                                    'mon': '\u0394\u03B5\u03C5',
                                    'tue': '\u03A4\u03C1\u03AF',
                                    'wed': '\u03A4\u03B5\u03C4',
                                    'thu': '\u03A0\u03AD\u03BC',
                                    'fri': '\u03A0\u03B1\u03C1',
                                    'sat': '\u03A3\u03AC\u03B2'
                                },
                                'narrow': {
                                    'sun': '\u039A',
                                    'mon': '\u0394',
                                    'tue': '\u03A4',
                                    'wed': '\u03A4',
                                    'thu': '\u03A0',
                                    'fri': '\u03A0',
                                    'sat': '\u03A3'
                                },
                                'short': {
                                    'sun': '\u039A\u03C5',
                                    'mon': '\u0394\u03B5',
                                    'tue': '\u03A4\u03C1',
                                    'wed': '\u03A4\u03B5',
                                    'thu': '\u03A0\u03AD',
                                    'fri': '\u03A0\u03B1',
                                    'sat': '\u03A3\u03AC'
                                },
                                'wide': {
                                    'sun': '\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE',
                                    'mon': '\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1',
                                    'tue': '\u03A4\u03C1\u03AF\u03C4\u03B7',
                                    'wed': '\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7',
                                    'thu': '\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7',
                                    'fri': '\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE',
                                    'sat': '\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u03A41',
                                    '2': '\u03A42',
                                    '3': '\u03A43',
                                    '4': '\u03A44'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '2': '2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '3': '3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '4': '4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u03A41',
                                    '2': '\u03A42',
                                    '3': '\u03A43',
                                    '4': '\u03A44'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '2': '2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '3': '3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '4': '4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'narrow': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'wide': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'narrow': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'wide': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u03C0.\u03A7.',
                                '0-alt-variant': '\u03C0.\u039A.\u03A7.',
                                '1': '\u03BC.\u03A7.',
                                '1-alt-variant': '\u039A\u03A7'
                            },
                            'eraAbbr': {
                                '0': '\u03C0.\u03A7.',
                                '0-alt-variant': '\u03C0.\u039A.\u03A7.',
                                '1': '\u03BC.\u03A7.',
                                '1-alt-variant': '\u039A\u03A7'
                            },
                            'eraNarrow': {
                                '0': '\u03C0.\u03A7.',
                                '0-alt-variant': '\u03C0.\u039A.\u03A7.',
                                '1': '\u03BC.\u03A7.',
                                '1-alt-variant': '\u039A\u03A7'
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
                            'long': '{1} - {0}',
                            'medium': '{1} - {0}',
                            'short': '{1} - {0}',
                            'availableFormats': {
                                'yMMM': 'LLL y',
                                'yMEd': 'E, d/M/y',
                                'yMd': 'd/M/y',
                                'yM': 'M/y',
                                'y': 'y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'HHmmss': 'HH:mm:ss',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss'
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
                                    'd': 'E, dd - E, dd MMM',
                                    'M': 'E, dd MMM - E, dd MMM'
                                },
                                'MMMd': {
                                    'd': 'dd-dd MMM',
                                    'M': 'dd MMM - dd MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
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
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'dd-dd MMM y',
                                    'M': 'dd MMM - dd MMM y',
                                    'y': 'dd MMM y - dd MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd MMM - E, dd MMM y',
                                    'M': 'E, dd MMM - E, dd MMM y',
                                    'y': 'E, dd MMM y - E, dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd-d'
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
