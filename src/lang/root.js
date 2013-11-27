/**
 * @file {@link https://github.com/Xotic750/astrodate root}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('root', {
            'dates': {
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
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
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
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
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'wide': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'wide': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
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
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
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
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y MMMM d, EEEE',
                            'long': 'y MMMM d',
                            'medium': 'y MMM d',
                            'short': 'y-MM-dd'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'GyMMMEd': 'G y MMM d, E',
                                'GyMMMd': 'G y MMM d',
                                'd': 'd',
                                'Ed': 'd, E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G y MMM',
                                'yM': 'y-MM',
                                'yMd': 'y-MM-dd',
                                'yMEd': 'y-MM-dd, E',
                                'yMMM': 'y MMM',
                                'yMMMd': 'y MMM d',
                                'yMMMEd': 'y MMM d, E',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMEd': 'MMM d, E',
                                'MMMd': 'MMM d',
                                'MMM': 'LLL',
                                'MEd': 'MM-dd, E',
                                'Md': 'MM-dd',
                                'M': 'L'
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
                                    'd': 'MMM d, E \u2013 MMM d, E',
                                    'M': 'MMM d, E \u2013 MMM d, E'
                                },
                                'MMMd': {
                                    'd': 'MMM d\u2013d',
                                    'M': 'MMM d \u2013 MMM d'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'MM-dd, E \u2013 MM-dd, E',
                                    'M': 'MM-dd, E \u2013 MM-dd, E'
                                },
                                'Md': {
                                    'd': 'MM-dd \u2013 MM-dd',
                                    'M': 'MM-dd \u2013 MM-dd'
                                },
                                'M': {
                                    'M': 'MM\u2013MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'y-MM \u2013 y-MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd \u2013 y-MM-dd',
                                    'M': 'y-MM-dd \u2013 y-MM-dd',
                                    'y': 'y-MM-dd \u2013 y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'y-MM-dd, E \u2013 y-MM-dd, E',
                                    'M': 'y-MM-dd, E \u2013 y-MM-dd, E',
                                    'y': 'y-MM-dd, E \u2013 y-MM-dd, E'
                                },
                                'yMMM': {
                                    'M': 'y MMM\u2013MMM',
                                    'y': 'y MMM \u2013 y MMM'
                                },
                                'yMMMd': {
                                    'd': 'y MMM d\u2013d',
                                    'M': 'y MMM d \u2013 MMM d',
                                    'y': 'y MMM d \u2013 y MMM d'
                                },
                                'yMMMEd': {
                                    'd': 'y MMM d, E \u2013 MMM d, E',
                                    'M': 'y MMM d, E \u2013 MMM d, E',
                                    'y': 'y MMM d, E \u2013 y MMM d, E'
                                },
                                'yMMMM': {
                                    'M': 'y MMMM\u2013MMMM',
                                    'y': 'y MMMM \u2013 y MMMM'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm\u2013h:mm a',
                                    'm': 'h:mm\u2013h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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
