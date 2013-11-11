/* AstroDate
 * Language: ko
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * localeDisplayNames: 24r9287
 * units: 24r9287
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
    }(function (AstroDate) {
        AstroDate.lang('ko', {
            'durationUnit-type-ms': {
                'durationUnitPattern': 'm:ss'
            },
            'durationUnit-type-hms': {
                'durationUnitPattern': 'h:mm:ss'
            },
            'durationUnit-type-hm': {
                'durationUnitPattern': 'h:mm'
            },
            'narrow': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0}oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0}kg'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0}g'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0}yd'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0}pm'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0}mm'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0}mi'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0}m'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0}ly'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0}km'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0}\u2033'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0}\u2032'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0}cm'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0}\uB144'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0}\uC8FC'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0}\uAC1C\uC6D4'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0}lb'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0}HP'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0}kW'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0}W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0}hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0}"Hg'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0}mb'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0}\u2113'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0}mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0}km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0}mph'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0}m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0}km/h'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0}\uBD84'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0}ms'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0}\uC2DC\uAC04'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0}\uC77C'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0}mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0}m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0}km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0}G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0}ac'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0}ha'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0}ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0}\uCD08'
                }
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
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\uC0AC\uC774\uD310'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\uB77C\uB85C\uD1B5\uAC00'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\uD3EC\uD2B8\uBAA8\uB974\uC988\uBE44'
                        },
                        'Ponape': {
                            'exemplarCity': '\uD3EC\uB098\uD398'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\uD54F\uCF00\uC5B8'
                        },
                        'Palau': {
                            'exemplarCity': '\uD314\uB77C\uC6B0'
                        },
                        'Auckland': {
                            'exemplarCity': '\uC624\uD074\uB79C\uB4DC'
                        },
                        'Apia': {
                            'exemplarCity': '\uC544\uD53C\uC544'
                        },
                        'Funafuti': {
                            'exemplarCity': '\uD478\uB098\uD478\uD2F0'
                        },
                        'Galapagos': {
                            'exemplarCity': '\uAC08\uB77C\uD30C\uACE0\uC2A4'
                        },
                        'Gambier': {
                            'exemplarCity': '\uAC10\uBE44\uC5B4'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\uACFC\uB2EC\uCE74\uB0A0'
                        },
                        'Guam': {
                            'exemplarCity': '\uAD0C'
                        },
                        'Honolulu': {
                            'exemplarCity': '\uD638\uB180\uB8F0\uB8E8'
                        },
                        'Wallis': {
                            'exemplarCity': '\uC6D4\uB9AC\uC2A4'
                        },
                        'Wake': {
                            'exemplarCity': '\uC6E8\uC774\uD06C'
                        },
                        'Truk': {
                            'exemplarCity': '\uD2B8\uB8E8\uD06C'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\uD1B5\uAC00\uD0C0\uD478'
                        },
                        'Tarawa': {
                            'exemplarCity': '\uD0C0\uB77C\uC640'
                        },
                        'Tahiti': {
                            'exemplarCity': '\uD0C0\uD788\uD2F0'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\uD0A4\uB9AC\uD2F0\uB9C8\uD2F0'
                        },
                        'Johnston': {
                            'exemplarCity': '\uC874\uC2A4\uD1A4'
                        },
                        'Chatham': {
                            'exemplarCity': '\uCC44\uD140'
                        },
                        'Easter': {
                            'exemplarCity': '\uC774\uC2A4\uD130 \uC12C'
                        },
                        'Efate': {
                            'exemplarCity': '\uC5D0\uD30C\uD14C'
                        },
                        'Enderbury': {
                            'exemplarCity': '\uC5D4\uB354\uBCA0\uB9AC'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\uD30C\uCE74\uC624\uD478'
                        },
                        'Fiji': {
                            'exemplarCity': '\uD53C\uC9C0'
                        },
                        'Kosrae': {
                            'exemplarCity': '\uCF54\uC2A4\uB808'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\uCF70\uC798\uB80C'
                        },
                        'Majuro': {
                            'exemplarCity': '\uB9C8\uC8FC\uB85C'
                        },
                        'Marquesas': {
                            'exemplarCity': '\uB9C8\uD018\uC0AC\uC2A4'
                        },
                        'Midway': {
                            'exemplarCity': '\uBBF8\uB4DC\uC6E8\uC774'
                        },
                        'Nauru': {
                            'exemplarCity': '\uB098\uC6B0\uB8E8'
                        },
                        'Niue': {
                            'exemplarCity': '\uB2C8\uC6B0\uC5D0'
                        },
                        'Norfolk': {
                            'exemplarCity': '\uB178\uD37D'
                        },
                        'Noumea': {
                            'exemplarCity': '\uB204\uBA54\uC544'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\uD30C\uACE0\uD30C\uACE0'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\uB9B0\uB370\uB9CC'
                        },
                        'Hobart': {
                            'exemplarCity': '\uD638\uBC14\uD2B8'
                        },
                        'Eucla': {
                            'exemplarCity': '\uC720\uD074\uB77C'
                        },
                        'Darwin': {
                            'exemplarCity': '\uB2E4\uC708'
                        },
                        'Sydney': {
                            'exemplarCity': '\uC2DC\uB4DC\uB2C8'
                        },
                        'Perth': {
                            'exemplarCity': '\uD37C\uC2A4'
                        },
                        'Melbourne': {
                            'exemplarCity': '\uBA5C\uBC84\uB978'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\uB85C\uB4DC \uD558\uC6B0'
                        },
                        'Adelaide': {
                            'exemplarCity': '\uC560\uB4E4\uB808\uC774\uB4DC'
                        },
                        'Brisbane': {
                            'exemplarCity': '\uBE0C\uB9AC\uC2A4\uBCA0\uC778'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\uBE0C\uB85C\uCEE8\uD790'
                        },
                        'Currie': {
                            'exemplarCity': '\uD034\uB9AC'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\uBAB0\uB514\uBE0C'
                        },
                        'Mahe': {
                            'exemplarCity': '\uB9C8\uD5E4'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\uCF00\uB974\uCF08\uB80C'
                        },
                        'Reunion': {
                            'exemplarCity': '\uB808\uC704\uB2C8\uC639'
                        },
                        'Mayotte': {
                            'exemplarCity': '\uBA54\uC694\uD2B8'
                        },
                        'Mauritius': {
                            'exemplarCity': '\uBAA8\uB9AC\uC154\uC2A4'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\uC548\uD0C0\uB098\uB098\uB9AC\uBCF4'
                        },
                        'Chagos': {
                            'exemplarCity': '\uCC28\uACE0\uC2A4'
                        },
                        'Christmas': {
                            'exemplarCity': '\uD06C\uB9AC\uC2A4\uB9C8\uC2A4'
                        },
                        'Cocos': {
                            'exemplarCity': '\uCF54\uCF54\uC2A4'
                        },
                        'Comoro': {
                            'exemplarCity': '\uCF54\uBAA8\uB85C'
                        }
                    },
                    'Etc': {
                        'GMT-11': {
                            'exemplarCity': 'GMT-11'
                        },
                        'GMT-10': {
                            'exemplarCity': 'GMT-10'
                        },
                        'GMT-1': {
                            'exemplarCity': 'GMT-1'
                        },
                        'GMT9': {
                            'exemplarCity': 'GMT+9'
                        },
                        'GMT8': {
                            'exemplarCity': 'GMT+8'
                        },
                        'GMT7': {
                            'exemplarCity': 'GMT+7'
                        },
                        'GMT6': {
                            'exemplarCity': 'GMT+6'
                        },
                        'GMT5': {
                            'exemplarCity': 'GMT+5'
                        },
                        'GMT': {
                            'exemplarCity': 'GMT'
                        },
                        'GMT1': {
                            'exemplarCity': 'GMT+1'
                        },
                        'GMT10': {
                            'exemplarCity': 'GMT+10'
                        },
                        'GMT11': {
                            'exemplarCity': 'GMT+11'
                        },
                        'GMT-3': {
                            'exemplarCity': 'GMT-3'
                        },
                        'GMT-4': {
                            'exemplarCity': 'GMT-4'
                        },
                        'GMT-5': {
                            'exemplarCity': 'GMT-5'
                        },
                        'GMT-6': {
                            'exemplarCity': 'GMT-6'
                        },
                        'GMT-7': {
                            'exemplarCity': 'GMT-7'
                        },
                        'GMT-8': {
                            'exemplarCity': 'GMT-8'
                        },
                        'GMT-9': {
                            'exemplarCity': 'GMT-9'
                        },
                        'Unknown': {
                            'exemplarCity': '\uC54C \uC218 \uC5C6\uB294 \uC7A5\uC18C'
                        },
                        'GMT-2': {
                            'exemplarCity': 'GMT-2'
                        },
                        'GMT-14': {
                            'exemplarCity': 'GMT-14'
                        },
                        'GMT-13': {
                            'exemplarCity': 'GMT-13'
                        },
                        'GMT-12': {
                            'exemplarCity': 'GMT-12'
                        },
                        'GMT4': {
                            'exemplarCity': 'GMT+4'
                        },
                        'GMT3': {
                            'exemplarCity': 'GMT+3'
                        },
                        'GMT2': {
                            'exemplarCity': 'GMT+2'
                        },
                        'GMT12': {
                            'exemplarCity': 'GMT+12'
                        }
                    },
                    'Antarctica': {
                        'Rothera': {
                            'exemplarCity': '\uB85C\uB370\uB77C'
                        },
                        'Palmer': {
                            'exemplarCity': '\uD30C\uBA38'
                        },
                        'McMurdo': {
                            'exemplarCity': '\uB9E5\uBA38\uB3C4'
                        },
                        'Vostok': {
                            'exemplarCity': '\uBCF4\uC2A4\uD1A0\uD06C'
                        },
                        'Syowa': {
                            'exemplarCity': '\uC1FC\uC640'
                        },
                        'South_Pole': {
                            'exemplarCity': '\uB0A8\uADF9'
                        },
                        'Casey': {
                            'exemplarCity': '\uCF00\uC774\uC2DC'
                        },
                        'Davis': {
                            'exemplarCity': '\uB370\uC774\uBE44\uC2A4'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\uB4A4\uBABD \uB4A4\uB974\uBE4C'
                        },
                        'Macquarie': {
                            'exemplarCity': '\uB9E5\uCFFC\uB9AC'
                        },
                        'Mawson': {
                            'exemplarCity': '\uBAA8\uC2A8'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\uB871\uC774\uC5B4\uBE44\uC5D4'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\uD1A0\uB860\uD1A0'
                        },
                        'Tijuana': {
                            'exemplarCity': '\uD2F0\uD6C4\uC544\uB098'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\uC120\uB354\uBCA0\uC774'
                        },
                        'Thule': {
                            'exemplarCity': '\uD234\uB808'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\uD14C\uAD6C\uC2DC\uAC08\uD30C'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\uC2A4\uC704\uD504\uD2B8\uCEE4\uB7F0\uD2B8'
                        },
                        'Chicago': {
                            'exemplarCity': '\uC2DC\uCE74\uACE0'
                        },
                        'Cayman': {
                            'exemplarCity': '\uCF00\uC774\uB9E8'
                        },
                        'Cayenne': {
                            'exemplarCity': '\uCE74\uC60C'
                        },
                        'Catamarca': {
                            'exemplarCity': '\uCE74\uD0C0\uB9C8\uB974\uCE74'
                        },
                        'Caracas': {
                            'exemplarCity': '\uCE74\uB77C\uCE74\uC2A4'
                        },
                        'Cancun': {
                            'exemplarCity': '\uCE78\uCFE4'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\uCE84\uD3EC \uADF8\uB780\uB370'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\uCF00\uC784\uBE0C\uB9AC\uC9C0 \uBCA0\uC774'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\uBD80\uC5D0\uB178\uC2A4 \uC544\uC774\uB808\uC2A4'
                        },
                        'Boise': {
                            'exemplarCity': '\uBCF4\uC774\uC2DC'
                        },
                        'Asuncion': {
                            'exemplarCity': '\uC544\uC21C\uC2DC\uC628'
                        },
                        'Aruba': {
                            'exemplarCity': '\uC544\uB8E8\uBC14'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\uB9AC\uC624 \uAC00\uC608\uACE0\uC2A4'
                            },
                            'San_Juan': {
                                'exemplarCity': '\uC0B0\uD6C4\uC548'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\uC6B0\uC218\uC544\uC774\uC544'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\uB77C \uB9AC\uC624\uD558'
                            },
                            'San_Luis': {
                                'exemplarCity': '\uC0B0\uB8E8\uC774\uC2A4'
                            },
                            'Salta': {
                                'exemplarCity': '\uC0B4\uD0C0'
                            },
                            'Tucuman': {
                                'exemplarCity': '\uB69C\uAFB8\uB9CC'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\uC544\uB77C\uACFC\uC774\uB098'
                        },
                        'Antigua': {
                            'exemplarCity': '\uC548\uD2F0\uACFC'
                        },
                        'Anguilla': {
                            'exemplarCity': '\uC559\uADC8\uB77C'
                        },
                        'Anchorage': {
                            'exemplarCity': '\uC575\uCEE4\uB9AC\uC9C0'
                        },
                        'Adak': {
                            'exemplarCity': '\uC5D0\uC774\uB2E5'
                        },
                        'Bahia': {
                            'exemplarCity': '\uBC14\uD788\uC544'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\uBC14\uC774\uC544 \uBC18\uB370\uB77C\uC2A4'
                        },
                        'Barbados': {
                            'exemplarCity': '\uBC14\uBCA0\uC774\uB3C4\uC2A4'
                        },
                        'Belem': {
                            'exemplarCity': '\uBCA8\uB818'
                        },
                        'Belize': {
                            'exemplarCity': '\uBCA8\uB9AC\uC988'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\uBE14\uB791 \uC0AC\uBE14\uB871'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\uBCF4\uC544 \uBE44\uC2A4\uD0C0'
                        },
                        'Bogota': {
                            'exemplarCity': '\uBCF4\uACE0\uD0C0'
                        },
                        'Curacao': {
                            'exemplarCity': '\uD034\uB77C\uC18C'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\uB374\uB9C8\uD06C\uC0E4\uBE10'
                        },
                        'Dawson': {
                            'exemplarCity': '\uB3C4\uC2A8'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\uB3C4\uC2A8\uD06C\uB9AD'
                        },
                        'Denver': {
                            'exemplarCity': '\uB374\uBC84'
                        },
                        'Detroit': {
                            'exemplarCity': '\uB514\uD2B8\uB85C\uC774\uD2B8'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\uC5D0\uB974\uBAA8\uC2DC\uC694'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\uC778\uB514\uC544\uB098\uC8FC, \uBC45\uC13C'
                            },
                            'Petersburg': {
                                'exemplarCity': '\uC778\uB514\uC560\uB098\uC8FC, \uD53C\uCE20\uBC84\uADF8'
                            },
                            'Tell_City': {
                                'exemplarCity': '\uC778\uB514\uC544\uB098\uC8FC, \uD154\uC2DC\uD2F0'
                            },
                            'Knox': {
                                'exemplarCity': '\uC778\uB514\uC560\uB098\uC8FC \uB179\uC2A4'
                            },
                            'Winamac': {
                                'exemplarCity': '\uC778\uB514\uC544\uB098\uC8FC, \uC6CC\uB108\uB9E5'
                            },
                            'Marengo': {
                                'exemplarCity': '\uC778\uB514\uC560\uB098\uC8FC, \uB9C8\uB81D\uACE0'
                            },
                            'Vevay': {
                                'exemplarCity': '\uC790\uD3EC\uB85C\uC81C'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\uC778\uB514\uC560\uB098\uD3F4\uB9AC\uC2A4'
                        },
                        'Inuvik': {
                            'exemplarCity': '\uC774\uB204\uBE45'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\uC774\uCE7C\uB8E8\uC774\uD2B8'
                        },
                        'Jamaica': {
                            'exemplarCity': '\uC790\uBA54\uC774\uCE74'
                        },
                        'Jujuy': {
                            'exemplarCity': '\uD6C4\uD6C4\uC774'
                        },
                        'Juneau': {
                            'exemplarCity': '\uC8FC\uB178'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\uC610\uB85C\uB098\uC774\uD504'
                        },
                        'Yakutat': {
                            'exemplarCity': '\uC57C\uCFE0\uD0C0\uD2B8'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\uC704\uB2C8\uD399'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\uD654\uC774\uD2B8\uD638\uC2A4'
                        },
                        'Vancouver': {
                            'exemplarCity': '\uBCA4\uCFE0\uBC84'
                        },
                        'Tortola': {
                            'exemplarCity': '\uD1A0\uB974\uD1A8\uB77C'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\uD06C\uB77C\uB80C\uB514\uC988\uD06C'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\uCF04\uD130\uD0A4\uC8FC, \uBAAC\uD2F0\uCCBC\uB85C'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\uD558\uBC14\uB098'
                        },
                        'Halifax': {
                            'exemplarCity': '\uD57C\uB9AC\uD329\uC2A4'
                        },
                        'Guyana': {
                            'exemplarCity': '\uAC00\uC774\uC544\uB098'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\uACFC\uC57C\uD0AC'
                        },
                        'Guatemala': {
                            'exemplarCity': '\uACFC\uD14C\uB9D0\uB77C'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\uACFC\uB4E4\uB8E8\uD504'
                        },
                        'Grenada': {
                            'exemplarCity': '\uADF8\uB808\uB098\uB2E4'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\uADF8\uB79C\uB4DC \uD130\uD06C'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\uAD6C\uC988\uBCA0\uC774'
                        },
                        'Godthab': {
                            'exemplarCity': '\uACE0\uB4DC\uD638\uD504'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\uAE00\uB77C\uC2A4\uBCA0\uC774'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\uD3EC\uB974\uD0C8\uB808\uC790'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\uC5D8\uC0B4\uBC14\uB3C4\uB974'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\uC544\uC774\uB8E8\uB124\uD398'
                        },
                        'Edmonton': {
                            'exemplarCity': '\uC5D0\uB4DC\uBA3C\uD134'
                        },
                        'Dominica': {
                            'exemplarCity': '\uB3C4\uBBF8\uB2C8\uCE74'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\uCE58\uC640\uC640'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\uCF54\uB784\uD558\uBC84'
                        },
                        'Cordoba': {
                            'exemplarCity': '\uCF54\uB974\uB3C4\uBC14'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\uCF54\uC2A4\uD0C0\uB9AC\uCE74'
                        },
                        'Creston': {
                            'exemplarCity': '\uD06C\uB808\uC2A4\uD1A4'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\uCFE0\uC774\uC544\uBC14'
                        },
                        'La_Paz': {
                            'exemplarCity': '\uB77C\uD30C\uC2A4'
                        },
                        'Lima': {
                            'exemplarCity': '\uB9AC\uB9C8'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\uB85C\uC2A4\uC564\uC824\uB808\uC2A4'
                        },
                        'Louisville': {
                            'exemplarCity': '\uB8E8\uC774\uBE4C'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\uB85C\uC6CC \uD504\uB9B0\uC2A4 \uCFFC\uD130'
                        },
                        'Maceio': {
                            'exemplarCity': '\uB9C8\uC138\uC774\uC624'
                        },
                        'Managua': {
                            'exemplarCity': '\uB9C8\uB098\uACFC'
                        },
                        'Manaus': {
                            'exemplarCity': '\uB9C8\uB098\uC6B0\uC2A4'
                        },
                        'Marigot': {
                            'exemplarCity': '\uB9C8\uB9AC\uACF3'
                        },
                        'Martinique': {
                            'exemplarCity': '\uB9C8\uD2F0\uB2C8\uD06C'
                        },
                        'Matamoros': {
                            'exemplarCity': '\uB9C8\uD0C0\uBAA8\uB85C\uC2A4'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\uB9C8\uC0AC\uD2C0\uB780'
                        },
                        'Mendoza': {
                            'exemplarCity': '\uBA58\uB3C4\uC0AC'
                        },
                        'Menominee': {
                            'exemplarCity': '\uBA54\uB178\uBBF8\uB2C8'
                        },
                        'Merida': {
                            'exemplarCity': '\uBA54\uB9AC\uB2E4'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\uBA54\uD2C0\uB77C\uCE74\uD2C0\uB77C'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\uBA55\uC2DC\uCF54 \uC2DC\uD2F0'
                        },
                        'Miquelon': {
                            'exemplarCity': '\uBBF8\uD074\uB871'
                        },
                        'Moncton': {
                            'exemplarCity': '\uBABD\uD134'
                        },
                        'Monterrey': {
                            'exemplarCity': '\uBAAC\uD14C\uB808\uC774'
                        },
                        'Montevideo': {
                            'exemplarCity': '\uBAAC\uD14C\uBE44\uB370\uC624'
                        },
                        'Montreal': {
                            'exemplarCity': '\uBAAC\uD2B8\uB9AC\uC62C'
                        },
                        'Montserrat': {
                            'exemplarCity': '\uBAAC\uC138\uB77C\uD2B8'
                        },
                        'Nassau': {
                            'exemplarCity': '\uB098\uC18C'
                        },
                        'New_York': {
                            'exemplarCity': '\uB274\uC695'
                        },
                        'Nipigon': {
                            'exemplarCity': '\uB2C8\uD53C\uACE4'
                        },
                        'Nome': {
                            'exemplarCity': '\uB188'
                        },
                        'Noronha': {
                            'exemplarCity': '\uB178\uB871\uC57C'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\uB178\uC2A4\uB2E4\uCF54\uD0C0\uC8FC, \uBCA0\uB77C'
                            },
                            'New_Salem': {
                                'exemplarCity': '\uB178\uC2A4 \uB2E4\uCF54\uD0C0\uC8FC, \uB274\uC0B4\uB818'
                            },
                            'Center': {
                                'exemplarCity': '\uC911\uBD80, \uB178\uC2A4\uB2E4\uCF54\uD0C0'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\uC624\uD788\uB098\uAC00'
                        },
                        'Panama': {
                            'exemplarCity': '\uD30C\uB098\uB9C8'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\uD321\uB2C8\uB974\uD241'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\uD30C\uB77C\uB9C8\uB9AC\uBCF4'
                        },
                        'Phoenix': {
                            'exemplarCity': '\uD53C\uB2C9\uC2A4'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\uD3EC\uB974\uD1A0\uD504\uB7AD\uC2A4'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\uD3EC\uD2B8\uC624\uBE0C\uC2A4\uD398\uC778'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\uD3EC\uB974\uD1A0 \uBCA8\uB85C'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\uD478\uC5D0\uB974\uD1A0\uB9AC\uCF54'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\uB808\uC774\uB2C8\uAC15'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\uB7AD\uD0B9 \uC778\uB81B'
                        },
                        'Recife': {
                            'exemplarCity': '\uB808\uC2DC\uD398'
                        },
                        'Regina': {
                            'exemplarCity': '\uB9AC\uC790\uC774\uB098'
                        },
                        'Resolute': {
                            'exemplarCity': '\uB9AC\uC878\uB8E8\uD2B8'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\uB9AC\uC624 \uBE0C\uB791\uCF54'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\uC0B0\uD0C0 \uC774\uC0AC\uBCA8'
                        },
                        'Santarem': {
                            'exemplarCity': '\uC0B0\uD0C0\uB818'
                        },
                        'Santiago': {
                            'exemplarCity': '\uC0B0\uD2F0\uC544\uACE0'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\uC0B0\uD1A0\uB3C4\uBC0D\uACE0'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\uC0C1\uD30C\uC6B8\uB85C'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\uC2A4\uCF54\uB808\uC2A4\uBC14\uC774\uC120\uB4DC'
                        },
                        'Shiprock': {
                            'exemplarCity': '\uC2ED\uB85D'
                        },
                        'Sitka': {
                            'exemplarCity': '\uC2EF\uCE74'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\uC0DD\uBC14\uB974\uD154\uB808\uBBF8'
                        },
                        'St_Johns': {
                            'exemplarCity': '\uC138\uC778\uD2B8\uC874\uC2A4'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\uC138\uC778\uD2B8 \uD0A4\uCE20'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\uC138\uC778\uD2B8 \uB8E8\uC2DC\uC544'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\uC138\uC778\uD2B8 \uD1A0\uB9C8\uC2A4'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\uC138\uC778\uD2B8 \uBE48\uC13C\uD2B8'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\uC0AC\uC6B0\uC2A4\uC870\uC9C0\uC544'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\uB808\uC774\uCEAC\uBE44\uD06C'
                        },
                        'Stanley': {
                            'exemplarCity': '\uC2A4\uD0E0\uB9AC'
                        },
                        'St_Helena': {
                            'exemplarCity': '\uC138\uC778\uD2B8 \uD5EC\uB808\uB098'
                        },
                        'Azores': {
                            'exemplarCity': '\uC544\uC870\uB808\uC2A4'
                        },
                        'Bermuda': {
                            'exemplarCity': '\uBC84\uBBA4\uB2E4'
                        },
                        'Canary': {
                            'exemplarCity': '\uCE74\uB098\uB9AC\uC544 \uC81C\uB3C4'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\uCE74\uBCF4 \uBCA0\uB974\uB370'
                        },
                        'Faeroe': {
                            'exemplarCity': '\uD398\uB85C \uC81C\uB3C4'
                        },
                        'Madeira': {
                            'exemplarCity': '\uB9C8\uB370\uC774\uB77C'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\uC624\uC2AC\uB85C'
                        },
                        'Moscow': {
                            'exemplarCity': '\uBAA8\uC2A4\uD06C\uBC14'
                        },
                        'Monaco': {
                            'exemplarCity': '\uBAA8\uB098\uCF54'
                        },
                        'Minsk': {
                            'exemplarCity': '\uBBFC\uC2A4\uD06C'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\uB9C8\uB9AC\uC5D0\uD558\uBA3C'
                        },
                        'Malta': {
                            'exemplarCity': '\uBAB0\uD0C0'
                        },
                        'Madrid': {
                            'exemplarCity': '\uB9C8\uB4DC\uB9AC\uB4DC'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\uB8E9\uC148\uBD80\uB974\uD06C'
                        },
                        'London': {
                            'long': {
                                'daylight': '\uC601\uAD6D \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04'
                            },
                            'exemplarCity': '\uB7F0\uB358'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\uB958\uBE14\uB7B4\uB098'
                        },
                        'Lisbon': {
                            'exemplarCity': '\uB9AC\uC2A4\uBCF8'
                        },
                        'Kiev': {
                            'exemplarCity': '\uD0A4\uC608\uD504'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\uCE7C\uB9AC\uB2CC\uADF8\uB77C\uB4DC'
                        },
                        'Jersey': {
                            'exemplarCity': '\uC800\uC9C0'
                        },
                        'Istanbul': {
                            'exemplarCity': '\uC774\uC2A4\uD0C4\uBD88'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\uB9E8\uC12C'
                        },
                        'Bucharest': {
                            'exemplarCity': '\uBD80\uCFE0\uB808\uC288\uD2F0'
                        },
                        'Brussels': {
                            'exemplarCity': '\uBE0C\uB93C\uC140'
                        },
                        'Bratislava': {
                            'exemplarCity': '\uBE0C\uB77C\uD2F0\uC2AC\uB77C\uBC14'
                        },
                        'Berlin': {
                            'exemplarCity': '\uBCA0\uB97C\uB9B0'
                        },
                        'Belgrade': {
                            'exemplarCity': '\uBCA0\uC624\uADF8\uB77C\uB4DC'
                        },
                        'Athens': {
                            'exemplarCity': '\uC544\uD14C\uB124'
                        },
                        'Andorra': {
                            'exemplarCity': '\uC548\uB3C4\uB77C'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\uC554\uC2A4\uD154\uB2F4'
                        },
                        'Simferopol': {
                            'exemplarCity': '\uC2EC\uD398\uB85C\uD3F4'
                        },
                        'Skopje': {
                            'exemplarCity': '\uC2A4\uCF54\uD398'
                        },
                        'Sofia': {
                            'exemplarCity': '\uC18C\uD53C\uC544'
                        },
                        'Stockholm': {
                            'exemplarCity': '\uC2A4\uD1A1\uD640\uB984'
                        },
                        'Tallinn': {
                            'exemplarCity': '\uD0C8\uB9B0'
                        },
                        'Tirane': {
                            'exemplarCity': '\uD2F0\uB77C\uB098'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\uC6B0\uC8FC\uACE0\uB85C\uD2B8'
                        },
                        'Vaduz': {
                            'exemplarCity': '\uD30C\uB450\uCE20'
                        },
                        'Zurich': {
                            'exemplarCity': '\uCDE8\uB9AC\uD788'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\uC790\uD3EC\uB85C\uC9C0\uC608'
                        },
                        'Zagreb': {
                            'exemplarCity': '\uC790\uADF8\uB808\uBE0C'
                        },
                        'Warsaw': {
                            'exemplarCity': '\uBC14\uB974\uC0E4\uBC14'
                        },
                        'Volgograd': {
                            'exemplarCity': '\uBCFC\uACE0\uADF8\uB77C\uD2B8'
                        },
                        'Vilnius': {
                            'exemplarCity': '\uBE4C\uB2C8\uC6B0\uC2A4'
                        },
                        'Vienna': {
                            'exemplarCity': '\uBE44\uC5D4\uB098'
                        },
                        'Vatican': {
                            'exemplarCity': '\uBC14\uD2F0\uCE78'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\uC0AC\uB77C\uC608\uBCF4'
                        },
                        'San_Marino': {
                            'exemplarCity': '\uC0B0\uB9C8\uB9AC\uB178'
                        },
                        'Samara': {
                            'exemplarCity': '\uC0AC\uB9C8\uB77C'
                        },
                        'Rome': {
                            'exemplarCity': '\uB85C\uB9C8'
                        },
                        'Riga': {
                            'exemplarCity': '\uB9AC\uAC00'
                        },
                        'Prague': {
                            'exemplarCity': '\uD504\uB77C\uD558'
                        },
                        'Podgorica': {
                            'exemplarCity': '\uD3EC\uB4DC\uACE0\uB9AC\uCC28'
                        },
                        'Paris': {
                            'exemplarCity': '\uD30C\uB9AC'
                        },
                        'Helsinki': {
                            'exemplarCity': '\uD5EC\uC2F1\uD0A4'
                        },
                        'Guernsey': {
                            'exemplarCity': '\uAC74\uC9C0'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\uC9C0\uBE0C\uB864\uD130'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\uC544\uC77C\uB79C\uB4DC \uC2DC\uAC04'
                            },
                            'exemplarCity': '\uB354\uBE14\uB9B0'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\uCF54\uD39C\uD558\uAC90'
                        },
                        'Chisinau': {
                            'exemplarCity': '\uD0A4\uC2DC\uB098\uC6B0'
                        },
                        'Busingen': {
                            'exemplarCity': '\uBDD4\uC9C0\uAC90'
                        },
                        'Budapest': {
                            'exemplarCity': '\uBD80\uB2E4\uD398\uC2A4\uD2B8'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\uB9AC\uBE0C\uB974\uBE4C'
                        },
                        'Lagos': {
                            'exemplarCity': '\uB77C\uACE0\uC2A4'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\uD0A8\uC0E4\uC0AC'
                        },
                        'Kigali': {
                            'exemplarCity': '\uD0A4\uAC08\uB9AC'
                        },
                        'Khartoum': {
                            'exemplarCity': '\uCE74\uB974\uD23C'
                        },
                        'Kampala': {
                            'exemplarCity': '\uCE84\uD314\uB77C'
                        },
                        'Juba': {
                            'exemplarCity': '\uC8FC\uBC14'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\uC694\uD558\uB124\uC2A4\uBC84\uADF8'
                        },
                        'Harare': {
                            'exemplarCity': '\uD558\uB77C\uB808'
                        },
                        'Gaborone': {
                            'exemplarCity': '\uAC00\uBCF4\uB85C\uB124'
                        },
                        'Freetown': {
                            'exemplarCity': '\uD504\uB9AC\uD0C0\uC6B4'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\uC5D8\uC544\uC774\uC6B4'
                        },
                        'Douala': {
                            'exemplarCity': '\uB450\uC54C\uB77C'
                        },
                        'Djibouti': {
                            'exemplarCity': '\uC9C0\uBD80\uD2F0'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\uB2E4\uB974\uC5D0\uC2A4\uC0B4\uB78C'
                        },
                        'Dakar': {
                            'exemplarCity': '\uB2E4\uCE74\uB974'
                        },
                        'Banjul': {
                            'exemplarCity': '\uBC18\uC904'
                        },
                        'Bangui': {
                            'exemplarCity': '\uBC29\uAE30'
                        },
                        'Bamako': {
                            'exemplarCity': '\uBC14\uB9C8\uCF54'
                        },
                        'Asmera': {
                            'exemplarCity': '\uC544\uC2A4\uBA54\uB77C'
                        },
                        'Malabo': {
                            'exemplarCity': '\uB9D0\uB77C\uBCF4'
                        },
                        'Maputo': {
                            'exemplarCity': '\uB9C8\uD478\uD1A0'
                        },
                        'Maseru': {
                            'exemplarCity': '\uB9C8\uC138\uB8E8'
                        },
                        'Mbabane': {
                            'exemplarCity': '\uC74C\uBC14\uBC14\uB124'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\uBAA8\uAC00\uB514\uC288'
                        },
                        'Monrovia': {
                            'exemplarCity': '\uBAAC\uB85C\uBE44\uC544'
                        },
                        'Nairobi': {
                            'exemplarCity': '\uB098\uC774\uB85C\uBE44'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\uC5D4\uC790\uBA54\uB098'
                        },
                        'Windhoek': {
                            'exemplarCity': '\uBE48\uD2B8\uD6C4\uD06C'
                        },
                        'Tunis': {
                            'exemplarCity': '\uD280\uB2C8\uC2A4'
                        },
                        'Tripoli': {
                            'exemplarCity': '\uD2B8\uB9AC\uD3F4\uB9AC'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\uC0C1\uD22C\uBA54'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\uD3EC\uB974\uD1A0\uB178\uBCF4'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\uC640\uAC00\uB450\uAD6C'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\uB204\uC545\uC1FC\uD2B8'
                        },
                        'Niamey': {
                            'exemplarCity': '\uB2C8\uC544\uBA54'
                        },
                        'Lusaka': {
                            'exemplarCity': '\uB8E8\uC0AC\uCE74'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\uB8E8\uBD90\uBC14\uC2DC'
                        },
                        'Luanda': {
                            'exemplarCity': '\uB8E8\uC548\uB2E4'
                        },
                        'Lome': {
                            'exemplarCity': '\uB85C\uBA54'
                        },
                        'Conakry': {
                            'exemplarCity': '\uCF54\uB098\uD06C\uB9AC'
                        },
                        'Ceuta': {
                            'exemplarCity': '\uC138\uC6B0\uD0C0'
                        },
                        'Casablanca': {
                            'exemplarCity': '\uCE74\uC0AC\uBE14\uB791\uCE74'
                        },
                        'Cairo': {
                            'exemplarCity': '\uCE74\uC774\uB85C'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\uBD80\uC90C\uBD80\uB77C'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\uBE0C\uB77C\uC790\uBE4C'
                        },
                        'Blantyre': {
                            'exemplarCity': '\uBE14\uB79C\uD0C0\uC774\uC5B4'
                        },
                        'Bissau': {
                            'exemplarCity': '\uBE44\uC0AC\uC6B0'
                        },
                        'Abidjan': {
                            'exemplarCity': '\uC544\uBE44\uC7A5'
                        },
                        'Accra': {
                            'exemplarCity': '\uC544\uD06C\uB77C'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\uC544\uB514\uC2A4\uC544\uBC14\uBC14'
                        },
                        'Algiers': {
                            'exemplarCity': '\uC54C\uC81C'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\uC0C1\uD558\uC774'
                        },
                        'Seoul': {
                            'exemplarCity': '\uC11C\uC6B8'
                        },
                        'Samarkand': {
                            'exemplarCity': '\uC0AC\uB9C8\uB974\uCE78\uD2B8'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\uC0AC\uD560\uB9B0'
                        },
                        'Saigon': {
                            'exemplarCity': '\uC0AC\uC774\uACF5'
                        },
                        'Riyadh': {
                            'exemplarCity': '\uB9AC\uC57C\uB4DC'
                        },
                        'Rangoon': {
                            'exemplarCity': '\uB791\uAD70'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\uD0A4\uC9C8\uB85C\uB974\uB2E4'
                        },
                        'Qatar': {
                            'exemplarCity': '\uCE74\uD0C0\uB974'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\uD3C9\uC591'
                        },
                        'Pontianak': {
                            'exemplarCity': '\uD3F0\uD2F0\uC544\uB098\uD06C'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\uD504\uB188\uD39C'
                        },
                        'Oral': {
                            'exemplarCity': '\uC624\uB784'
                        },
                        'Omsk': {
                            'exemplarCity': '\uC634\uC2A4\uD06C'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\uB178\uBCF4\uC2DC\uBE44\uB974\uC2A4\uD06C'
                        },
                        'Baghdad': {
                            'exemplarCity': '\uBC14\uADF8\uB2E4\uB4DC'
                        },
                        'Chongqing': {
                            'exemplarCity': '\uCDA9\uCE6D'
                        },
                        'Colombo': {
                            'exemplarCity': '\uCF5C\uB86C\uBCF4'
                        },
                        'Damascus': {
                            'exemplarCity': '\uB2E4\uB9C8\uC2A4\uCFE0\uC2A4'
                        },
                        'Dhaka': {
                            'exemplarCity': '\uB2E4\uCE74'
                        },
                        'Dili': {
                            'exemplarCity': '\uB51C\uB9AC'
                        },
                        'Dubai': {
                            'exemplarCity': '\uB450\uBC14\uC774'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\uB450\uC0E8\uBCA0'
                        },
                        'Gaza': {
                            'exemplarCity': '\uAC00\uC790'
                        },
                        'Harbin': {
                            'exemplarCity': '\uD558\uC5BC\uBE48'
                        },
                        'Hebron': {
                            'exemplarCity': '\uD5E4\uBE0C\uB860'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\uD64D\uCF69'
                        },
                        'Hovd': {
                            'exemplarCity': '\uD638\uBE0C\uB4DC'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\uC774\uB974\uCFE0\uCE20\uD06C'
                        },
                        'Jakarta': {
                            'exemplarCity': '\uC790\uCE74\uB974\uD0C0'
                        },
                        'Jayapura': {
                            'exemplarCity': '\uC790\uC57C\uD478\uB77C'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\uC6B8\uB780\uBC14\uD1A0\uB974'
                        },
                        'Urumqi': {
                            'exemplarCity': '\uC6B0\uB8E8\uBB34\uCE58'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\uC6B0\uC2A4\uD2F0\uB124\uB77C'
                        },
                        'Vientiane': {
                            'exemplarCity': '\uBE44\uC5D4\uD2F0\uC548'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\uBE14\uB77C\uB514\uBCF4\uC2A4\uD1A0\uD06C'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\uC57C\uCFE0\uCE20\uD06C'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\uC608\uCE74\uD14C\uB9B0\uBD80\uB974\uD06C'
                        },
                        'Yerevan': {
                            'exemplarCity': '\uC608\uB808\uBC18'
                        },
                        'Tokyo': {
                            'exemplarCity': '\uB3C4\uCFC4'
                        },
                        'Thimphu': {
                            'exemplarCity': '\uD300\uBD80'
                        },
                        'Tehran': {
                            'exemplarCity': '\uD14C\uD5E4\uB780'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\uD2B8\uBE4C\uB9AC\uC2DC'
                        },
                        'Tashkent': {
                            'exemplarCity': '\uD0C0\uC288\uCF04\uD2B8'
                        },
                        'Taipei': {
                            'exemplarCity': '\uD0C0\uC774\uBCA0\uC774'
                        },
                        'Singapore': {
                            'exemplarCity': '\uC2F1\uAC00\uD3EC\uB974'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\uC608\uB8E8\uC0B4\uB818'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\uC544\uC288\uD558\uBC14\uD2B8'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\uC545\uD1A0\uBE0C'
                        },
                        'Aqtau': {
                            'exemplarCity': '\uC544\uD06C\uD0C0\uC6B0'
                        },
                        'Anadyr': {
                            'exemplarCity': '\uC544\uB098\uB514\uB9AC'
                        },
                        'Amman': {
                            'exemplarCity': '\uC554\uB9CC'
                        },
                        'Almaty': {
                            'exemplarCity': '\uC54C\uB9C8\uD2F0'
                        },
                        'Aden': {
                            'exemplarCity': '\uC544\uB374'
                        },
                        'Bahrain': {
                            'exemplarCity': '\uBC14\uB808\uC778'
                        },
                        'Baku': {
                            'exemplarCity': '\uBC14\uCFE0'
                        },
                        'Bangkok': {
                            'exemplarCity': '\uBC29\uCF55'
                        },
                        'Beirut': {
                            'exemplarCity': '\uBCA0\uC774\uB8E8\uD2B8'
                        },
                        'Bishkek': {
                            'exemplarCity': '\uBE44\uC288\uCF00\uD06C'
                        },
                        'Brunei': {
                            'exemplarCity': '\uBE0C\uB8E8\uB098\uC774'
                        },
                        'Calcutta': {
                            'exemplarCity': '\uCF5C\uCE74\uD0C0'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\uCD08\uC774\uBC1C\uC0B0'
                        },
                        'Kabul': {
                            'exemplarCity': '\uCE74\uBD88'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\uCE84\uCC28\uCE74'
                        },
                        'Karachi': {
                            'exemplarCity': '\uCE74\uB77C\uCE58'
                        },
                        'Kashgar': {
                            'exemplarCity': '\uCE74\uC288\uAC00\uB974'
                        },
                        'Katmandu': {
                            'exemplarCity': '\uCE74\uD2B8\uB9CC\uB450'
                        },
                        'Khandyga': {
                            'exemplarCity': '\uD55C\uB514\uAC00'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\uD06C\uB77C\uC2A4\uB178\uC57C\uB974\uC2A4\uD06C'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\uCFE0\uC54C\uB77C\uB8F8\uD478\uB974'
                        },
                        'Kuching': {
                            'exemplarCity': '\uCFE0\uCE6D'
                        },
                        'Kuwait': {
                            'exemplarCity': '\uCFE0\uC6E8\uC774\uD2B8'
                        },
                        'Macau': {
                            'exemplarCity': '\uB9C8\uCE74\uC624'
                        },
                        'Magadan': {
                            'exemplarCity': '\uB9C8\uAC00\uB2E8'
                        },
                        'Makassar': {
                            'exemplarCity': '\uB9C8\uCE74\uC0AC\uB974'
                        },
                        'Manila': {
                            'exemplarCity': '\uB9C8\uB2D0\uB77C'
                        },
                        'Muscat': {
                            'exemplarCity': '\uBB34\uC2A4\uCE74\uD2B8'
                        },
                        'Nicosia': {
                            'exemplarCity': '\uB2C8\uCF54\uC2DC\uC544'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\uB178\uBCF4\uCFE0\uC988\uB124\uCE20\uD06C'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '\uC0AC\uBAA8\uC544 \uC2DC\uAC04',
                            'standard': '\uC0AC\uBAA8\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uC0AC\uBAA8\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\uC0AC\uB9C8\uB77C \uC2DC\uAC04',
                            'standard': '\uC0AC\uB9C8\uB77C \uD45C\uC900\uC2DC',
                            'daylight': '\uC0AC\uB9C8\uB77C \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\uC0AC\uD560\uB9B0 \uC2DC\uAC04',
                            'standard': '\uC0AC\uD560\uB9B0 \uD45C\uC900\uC2DC',
                            'daylight': '\uC0AC\uD560\uB9B0 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\uB85C\uB370\uB77C \uC2DC\uAC04'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\uB808\uC704\uB2C8\uC639 \uC2DC\uAC04'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\uD0A4\uC9C8\uB85C\uB974\uB2E4 \uC2DC\uAC04',
                            'standard': '\uD0A4\uC9C8\uB85C\uB974\uB2E4 \uD45C\uC900 \uC2DC\uAC04',
                            'daylight': '\uD0A4\uC9C8\uB85C\uB974\uB2E4 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\uD3EC\uB098\uD398 \uC2DC\uAC04'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\uD54F\uCF00\uC5B8 \uC2DC\uAC04'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\uC138\uC778\uD2B8\uD53C\uC5D0\uB974 \uBBF8\uD074\uB871 \uC2DC\uAC04',
                            'standard': '\uC138\uC778\uD2B8\uD53C\uC5D0\uB974 \uBBF8\uD074\uB871 \uD45C\uC900\uC2DC',
                            'daylight': '\uC138\uC778\uD2B8\uD53C\uC5D0\uB974 \uBBF8\uD074\uB871 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\uD53C\uB2C9\uC2A4 \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\uD544\uB9AC\uD540 \uC2DC\uAC04',
                            'standard': '\uD544\uB9AC\uD540 \uD45C\uC900\uC2DC',
                            'daylight': '\uD544\uB9AC\uD540 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\uD398\uB8E8 \uC2DC\uAC04',
                            'standard': '\uD398\uB8E8 \uD45C\uC900\uC2DC',
                            'daylight': '\uD398\uB8E8 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\uD30C\uB77C\uACFC\uC774 \uC2DC\uAC04',
                            'standard': '\uD30C\uB77C\uACFC\uC774 \uD45C\uC900\uC2DC',
                            'daylight': '\uD30C\uB77C\uACFC\uC774 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\uD30C\uD478\uC544\uB274\uAE30\uB2C8 \uC2DC\uAC04'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\uD314\uB77C\uC6B0 \uC2DC\uAC04'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\uD30C\uD0A4\uC2A4\uD0C4 \uC2DC\uAC04',
                            'standard': '\uD30C\uD0A4\uC2A4\uD0C4 \uD45C\uC900\uC2DC',
                            'daylight': '\uD30C\uD0A4\uC2A4\uD0C4 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\uC634\uC2A4\uD06C \uC2DC\uAC04',
                            'standard': '\uC634\uC2A4\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uC634\uC2A4\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\uB178\uBCF4\uC2DC\uBE44\uB974\uC2A4\uD06C \uC2DC\uAC04',
                            'standard': '\uB178\uBCF4\uC2DC\uBE44\uB974\uC2A4\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uB178\uBCF4\uC2DC\uBE44\uB974\uC2A4\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\uBD81\uB9C8\uB9AC\uC544\uB098 \uC81C\uB3C4 \uD45C\uC900 \uC2DC\uAC04'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\uD398\uB974\uB09C\uB3C4 \uB370 \uB178\uB85C\uB0D0 \uC2DC\uAC04',
                            'standard': '\uD398\uB974\uB09C\uB3C4 \uB370 \uB178\uB85C\uB0D0 \uD45C\uC900\uC2DC',
                            'daylight': '\uD398\uB974\uB09C\uB3C4 \uB370 \uB178\uB85C\uB0D0 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\uB178\uD37D\uC12C \uC2DC\uAC04'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\uB2C8\uC6B0\uC5D0 \uC2DC\uAC04'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\uB274\uD380\uB4E4\uB79C\uB4DC \uC2DC\uAC04',
                            'standard': '\uB274\uD380\uB4E4\uB79C\uB4DC \uD45C\uC900\uC2DC',
                            'daylight': '\uB274\uD380\uB4E4\uB79C\uB4DC \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\uB274\uC9C8\uB79C\uB4DC \uC2DC\uAC04',
                            'standard': '\uB274\uC9C8\uB79C\uB4DC \uD45C\uC900\uC2DC',
                            'daylight': '\uB274\uC9C8\uB79C\uB4DC \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04\uB300'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\uB274\uCE7C\uB808\uB3C4\uB2C8\uC544 \uC2DC\uAC04',
                            'standard': '\uB274\uCE7C\uB808\uB3C4\uB2C8\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uB274 \uCE7C\uB808\uB3C4\uB2C8\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\uBBF8 \uC911\uBD80 \uC2DC\uAC04',
                            'standard': '\uBBF8 \uC911\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uBBF8 \uC911\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\uBBF8 \uB3D9\uBD80 \uC2DC\uAC04',
                            'standard': '\uBBF8 \uB3D9\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uBBF8 \uB3D9\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\uBBF8 \uC0B0\uC9C0 \uC2DC\uAC04',
                            'standard': '\uBBF8 \uC0B0\uC545 \uD45C\uC900\uC2DC',
                            'daylight': '\uBBF8 \uC0B0\uC9C0 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\uBBF8 \uD0DC\uD3C9\uC591 \uC2DC\uAC04',
                            'standard': '\uBBF8 \uD0DC\uD3C9\uC591 \uD45C\uC900\uC2DC',
                            'daylight': '\uBBF8 \uD0DC\uD3C9\uC591 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\uC544\uB098\uB514\uB9AC \uC2DC\uAC04',
                            'standard': '\uC544\uB098\uB514\uB9AC \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uB098\uB514\uB9AC \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\uC545\uD0C0\uC6B0 \uD45C\uC900 \uC2DC\uAC04',
                            'standard': '\uC545\uD0C0\uC6B0 \uD45C\uC900 \uD45C\uC900\uC2DC',
                            'daylight': '\uC545\uD0C0\uC6B0 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\uC545\uD1F4\uBCA0 \uD45C\uC900 \uC2DC\uAC04',
                            'standard': '\uC545\uD1F4\uBCA0 \uD45C\uC900 \uD45C\uC900\uC2DC',
                            'daylight': '\uC545\uD1F4\uBCA0 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\uCE74\uBCF4 \uBCA0\uB974\uB370 \uC2DC\uAC04',
                            'standard': '\uCE74\uBCF4 \uBCA0\uB974\uB370 \uD45C\uC900\uC2DC',
                            'daylight': '\uCE74\uBCF4 \uBCA0\uB974\uB370 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '\uCF00\uC774\uC2DC \uC2DC\uAC04'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\uCC28\uBAA8\uB85C \uC2DC\uAC04'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\uCC44\uD140 \uC2DC\uAC04',
                            'standard': '\uCC44\uD140 \uD45C\uC900\uC2DC',
                            'daylight': '\uCC44\uD140 \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04\uB300'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\uCE60\uB808 \uC2DC\uAC04',
                            'standard': '\uCE60\uB808 \uD45C\uC900\uC2DC',
                            'daylight': '\uCE60\uB808 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\uC911\uAD6D \uC2DC\uAC04',
                            'standard': '\uC911\uAD6D \uD45C\uC900\uC2DC',
                            'daylight': '\uC911\uAD6D \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\uCD08\uC774\uBC1C\uC0B0 \uC2DC\uAC04',
                            'standard': '\uCD08\uC774\uBC1C\uC0B0 \uD45C\uC900\uC2DC',
                            'daylight': '\uCD08\uC774\uBC1C\uC0B0 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\uD06C\uB9AC\uC2A4\uB9C8\uC2A4\uC12C \uC2DC\uAC04'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\uCF54\uCF54\uC2A4 \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\uCF5C\uB86C\uBE44\uC544 \uC2DC\uAC04',
                            'standard': '\uCF5C\uB86C\uBE44\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uCF5C\uB86C\uBE44\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\uCFE1 \uC81C\uB3C4 \uC2DC\uAC04',
                            'standard': '\uCFE1 \uC81C\uB3C4 \uD45C\uC900\uC2DC',
                            'daylight': '\uCFE1 \uC81C\uB3C4 \uC808\uBC18 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\uCFE0\uBC14 \uC2DC\uAC04',
                            'standard': '\uCFE0\uBC14 \uD45C\uC900\uC2DC',
                            'daylight': '\uCFE0\uBC14 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\uB370\uC774\uBE44\uC2A4 \uC2DC\uAC04'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\uB4A4\uBABD\uB4A4\uB974\uBE4C \uC2DC\uAC04'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\uB3D9\uD2F0\uBAA8\uB974 \uC2DC\uAC04'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\uC774\uC2A4\uD130\uC12C \uC2DC\uAC04',
                            'standard': '\uC774\uC2A4\uD130\uC12C \uD45C\uC900\uC2DC',
                            'daylight': '\uC774\uC2A4\uD130\uC12C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\uC5D0\uCF70\uB3C4\uB974 \uC2DC\uAC04'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\uC911\uBD80 \uC720\uB7FD \uC2DC\uAC04',
                            'standard': '\uC911\uBD80 \uC720\uB7FD \uD45C\uC900\uC2DC',
                            'daylight': '\uC911\uBD80\uC720\uB7FD \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\uB3D9\uBD80\uC720\uB7FD \uC2DC\uAC04',
                            'standard': '\uB3D9\uBD80\uC720\uB7FD \uD45C\uC900\uC2DC',
                            'daylight': '\uB3D9\uBD80\uC720\uB7FD \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\uC11C\uC720\uB7FD \uC2DC\uAC04',
                            'standard': '\uC11C\uC720\uB7FD \uD45C\uC900\uC2DC',
                            'daylight': '\uC11C\uC720\uB7FD \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\uD3EC\uD074\uB79C\uB4DC \uC2DC\uAC04',
                            'standard': '\uD3EC\uD074\uB79C\uB4DC \uC81C\uB3C4 \uD45C\uC900\uC2DC',
                            'daylight': '\uD3EC\uD074\uB79C\uB4DC \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\uD53C\uC9C0 \uC2DC\uAC04',
                            'standard': '\uD53C\uC9C0 \uD45C\uC900\uC2DC',
                            'daylight': '\uD53C\uC9C0 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\uD504\uB791\uC2A4\uB839 \uAC00\uC774\uC544\uB098 \uC2DC\uAC04'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\uD504\uB791\uC2A4\uB839 \uB0A8\uBD80 \uC2DD\uBBFC\uC9C0 \uBC0F \uB0A8\uADF9 \uC2DC\uAC04'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\uAC08\uB77C\uD30C\uACE0\uC2A4 \uC2DC\uAC04'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\uD1A0\uCF08\uB77C\uC6B0 \uC2DC\uAC04'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\uD1B5\uAC00 \uC2DC\uAC04',
                            'standard': '\uD1B5\uAC00 \uD45C\uC900\uC2DC',
                            'daylight': '\uD1B5\uAC00 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\uCD94\uD06C \uC2DC\uAC04'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\uD22C\uB974\uD06C\uBA54\uB2C8\uC2A4\uD0C4 \uC2DC\uAC04',
                            'standard': '\uD22C\uB974\uD06C\uBA54\uB2C8\uC2A4\uD0C4 \uD45C\uC900\uC2DC',
                            'daylight': '\uD22C\uB974\uD06C\uBA54\uB2C8\uC2A4\uD0C4 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\uD22C\uBC1C\uB8E8 \uC2DC\uAC04'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\uC6B0\uB8E8\uACFC\uC774 \uC2DC\uAC04',
                            'standard': '\uC6B0\uB8E8\uACFC\uC774 \uD45C\uC900\uC2DC',
                            'daylight': '\uC6B0\uB8E8\uACFC\uC774 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\uC6B0\uC988\uBCA0\uD0A4\uC2A4\uD0C4 \uC2DC\uAC04',
                            'standard': '\uC6B0\uC988\uBCA0\uD0A4\uC2A4\uD0C4 \uD45C\uC900\uC2DC',
                            'daylight': '\uC6B0\uC988\uBCA0\uD0A4\uC2A4\uD0C4 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\uBC14\uB204\uC544\uD22C \uC2DC\uAC04',
                            'standard': '\uBC14\uB204\uC544\uD22C \uD45C\uC900\uC2DC',
                            'daylight': '\uBC14\uB204\uC544\uD22C \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\uC608\uCE74\uD14C\uB9B0\uBD80\uB974\uD06C \uC2DC\uAC04',
                            'standard': '\uC608\uCE74\uD14C\uB9B0\uBD80\uB974\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uC608\uCE74\uD14C\uB9B0\uBD80\uB974\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\uC57C\uCFE0\uCE20\uD06C \uC2DC\uAC04',
                            'standard': '\uC57C\uCFE0\uCE20\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uC57C\uCFE0\uCE20\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\uC6D4\uB9AC\uC2A4\uD478\uD22C\uB098 \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\uC6E8\uC774\uD06C\uC12C \uC2DC\uAC04'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\uBCF4\uC2A4\uD1A1 \uC2DC\uAC04'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\uBCFC\uACE0\uADF8\uB77C\uB4DC \uC2DC\uAC04',
                            'standard': '\uBCFC\uACE0\uADF8\uB77C\uB4DC \uD45C\uC900\uC2DC',
                            'daylight': '\uBCFC\uACE0\uADF8\uB77C\uB4DC \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\uBE14\uB77C\uB514\uBCF4\uC2A4\uD1A0\uD06C \uC2DC\uAC04',
                            'standard': '\uBE14\uB77C\uB514\uBCF4\uC2A4\uD1A0\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uBE14\uB77C\uB514\uBCF4\uC2A4\uD1A0\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\uBCA0\uB124\uC218\uC5D8\uB77C \uC2DC\uAC04'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\uD0C0\uC9C0\uD0A4\uC2A4\uD0C4 \uC2DC\uAC04'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\uB300\uB9CC \uC2DC\uAC04',
                            'standard': '\uB300\uB9CC \uD45C\uC900\uC2DC',
                            'daylight': '\uB300\uB9CC \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04\uB300'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\uD0C0\uD788\uD2F0 \uC2DC\uAC04'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\uC1FC\uC640 \uC2DC\uAC04'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\uC218\uB9AC\uB0A8 \uC2DC\uAC04'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\uC0AC\uC6B0\uC2A4 \uC870\uC9C0\uC544 \uC2DC\uAC04'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\uC194\uB85C\uBAAC \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\uC2F1\uAC00\uD3EC\uB974 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\uC138\uC774\uC178 \uC2DC\uAC04'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\uAD0C \uD45C\uC900 \uC2DC\uAC04'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\uADF8\uB9B0\uB780\uB4DC \uC11C\uBD80 \uC2DC\uAC04',
                            'standard': '\uADF8\uB9B0\uB780\uB4DC \uC11C\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uADF8\uB9B0\uB780\uB4DC \uC11C\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\uADF8\uB9B0\uB780\uB4DC \uB3D9\uBD80 \uC2DC\uAC04',
                            'standard': '\uADF8\uB9B0\uB780\uB4DC \uB3D9\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uADF8\uB9B0\uB780\uB4DC \uB3D9\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\uADF8\uB9AC\uB2C8\uCE58 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\uAE38\uBC84\uD2B8 \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\uADF8\uB8E8\uC9C0\uC544 \uC2DC\uAC04',
                            'standard': '\uADF8\uB8E8\uC9C0\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uADF8\uB8E8\uC9C0\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\uAC10\uBE44\uC5D0 \uC2DC\uAC04'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\uC544\uB9C8\uC874 \uC2DC\uAC04',
                            'standard': '\uC544\uB9C8\uC874 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uB9C8\uC874 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\uC544\uD06C\uB808 \uC2DC\uAC04',
                            'standard': '\uC544\uD06C\uB808 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uD06C\uB808 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4 \uC2DC\uAC04'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\uC911\uC559\uC544\uD504\uB9AC\uCE74 \uC2DC\uAC04'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\uB3D9\uC544\uD504\uB9AC\uCE74 \uC2DC\uAC04'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\uB0A8\uC544\uD504\uB9AC\uCE74 \uC2DC\uAC04'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\uC11C\uC544\uD504\uB9AC\uCE74 \uC2DC\uAC04',
                            'standard': '\uC11C\uC544\uD504\uB9AC\uCE74 \uD45C\uC900\uC2DC',
                            'daylight': '\uC11C\uC544\uD504\uB9AC\uCE74 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\uC54C\uB798\uC2A4\uCE74 \uC2DC\uAC04',
                            'standard': '\uC54C\uB798\uC2A4\uCE74 \uD45C\uC900\uC2DC',
                            'daylight': '\uC54C\uB798\uC2A4\uCE74 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\uC54C\uB9C8\uD2F0 \uD45C\uC900 \uC2DC\uAC04',
                            'standard': '\uC54C\uB9C8\uD2F0 \uD45C\uC900 \uD45C\uC900\uC2DC',
                            'daylight': '\uC54C\uB9C8\uD2F0 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\uC544\uB77C\uBE44\uC544 \uC2DC\uAC04',
                            'standard': '\uC544\uB77C\uBE44\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uB77C\uBE44\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\uC544\uB974\uD5E8\uD2F0\uB098 \uC2DC\uAC04',
                            'standard': '\uC544\uB974\uD5E8\uD2F0\uB098 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uB974\uD5E8\uD2F0\uB098 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\uC544\uB974\uD5E8\uD2F0\uB098 \uC11C\uBD80 \uC2DC\uAC04',
                            'standard': '\uC544\uB974\uD5E8\uD2F0\uB098 \uC11C\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uB974\uD5E8\uD2F0\uB098 \uC11C\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\uC544\uB974\uBA54\uB2C8\uC544 \uC2DC\uAC04',
                            'standard': '\uC544\uB974\uBA54\uB2C8\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uB974\uBA54\uB2C8\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\uB300\uC11C\uC591 \uC2DC\uAC04',
                            'standard': '\uB300\uC11C\uC591 \uD45C\uC900\uC2DC',
                            'daylight': '\uBBF8 \uB300\uC11C\uC591 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\uC911\uC559 \uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC2DC\uAC04',
                            'standard': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC911\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC911\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC911\uC11C\uBD80 \uC2DC\uAC04',
                            'standard': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC911\uC11C\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC911\uC11C\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\uB3D9\uBD80 \uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC2DC\uAC04',
                            'standard': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uB3D9\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uB3D9\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\uC11C\uBD80 \uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC2DC\uAC04',
                            'standard': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC11C\uBD80 \uD45C\uC900\uC2DC',
                            'daylight': '\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC11C\uBD80 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\uC544\uC81C\uB974\uBC14\uC774\uC794 \uC2DC\uAC04',
                            'standard': '\uC544\uC81C\uB974\uBC14\uC774\uC794 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uC81C\uB974\uBC14\uC774\uC794 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\uC544\uC870\uB808\uC2A4 \uC2DC\uAC04',
                            'standard': '\uC544\uC870\uB808\uC2A4 \uD45C\uC900\uC2DC',
                            'daylight': '\uC544\uC870\uB808\uC2A4 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\uBC29\uAE00\uB77C\uB370\uC2DC \uC2DC\uAC04',
                            'standard': '\uBC29\uAE00\uB77C\uB370\uC2DC \uD45C\uC900\uC2DC',
                            'daylight': '\uBC29\uAE00\uB77C\uB370\uC2DC \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\uBD80\uD0C4 \uC2DC\uAC04'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\uBCFC\uB9AC\uBE44\uC544 \uC2DC\uAC04'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\uBE0C\uB77C\uC9C8\uB9AC\uC544 \uC2DC\uAC04',
                            'standard': '\uBE0C\uB77C\uC9C8\uB9AC\uC544 \uD45C\uC900\uC2DC',
                            'daylight': '\uBE0C\uB77C\uC9C8\uB9AC\uC544 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\uBE0C\uB8E8\uB098\uC774 \uC655\uAD6D \uC2DC\uAC04'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\uAC78\uD504\uB9CC \uD45C\uC900\uC2DC'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\uAC00\uC774\uC544\uB098 \uC2DC\uAC04'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\uD558\uC640\uC774 \uC54C\uB958\uC0E8 \uC2DC\uAC04',
                            'standard': '\uD558\uC640\uC774 \uC54C\uB958\uC0E8 \uD45C\uC900\uC2DC',
                            'daylight': '\uD558\uC640\uC774 \uC54C\uB958\uC0E8 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\uD64D\uCF69 \uC2DC\uAC04',
                            'standard': '\uD64D\uCF69 \uD45C\uC900\uC2DC',
                            'daylight': '\uD64D\uCF69 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\uD638\uBE0C\uB4DC \uC2DC\uAC04',
                            'standard': '\uD638\uBE0C\uB4DC \uD45C\uC900\uC2DC',
                            'daylight': '\uD638\uBE0C\uB4DC \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\uC778\uB3C4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\uC778\uB3C4\uC591 \uC2DC\uAC04'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\uC778\uB3C4\uCC28\uC774\uB098 \uC2DC\uAC04'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\uC911\uBD80 \uC778\uB3C4\uB124\uC2DC\uC544 \uC2DC\uAC04'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\uB3D9\uBD80 \uC778\uB3C4\uB124\uC2DC\uC544 \uC2DC\uAC04'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\uC11C\uBD80 \uC778\uB3C4\uB124\uC2DC\uC544 \uC2DC\uAC04'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\uC774\uB780 \uC2DC\uAC04',
                            'standard': '\uC774\uB780 \uD45C\uC900\uC2DC',
                            'daylight': '\uC774\uB780 \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04\uB300'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\uC774\uB974\uCFE0\uCE20\uD06C \uC2DC\uAC04',
                            'standard': '\uC774\uB974\uCFE0\uCE20\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uC774\uB974\uCFE0\uCE20\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\uC774\uC2A4\uB77C\uC5D8 \uC2DC\uAC04',
                            'standard': '\uC774\uC2A4\uB77C\uC5D8 \uD45C\uC900\uC2DC',
                            'daylight': '\uC774\uC2A4\uB77C\uC5D8 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\uC77C\uBCF8 \uC2DC\uAC04',
                            'standard': '\uC77C\uBCF8 \uD45C\uC900\uC2DC',
                            'daylight': '\uC77C\uBCF8 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\uD398\uD2B8\uB85C\uD30C\uBE14\uB86D\uC2A4\uD06C-\uCE84\uCC28\uCE20\uD0A4 \uC2DC\uAC04',
                            'standard': '\uD398\uD2B8\uB85C\uD30C\uBE14\uB86D\uC2A4\uD06C-\uCE84\uCC28\uCE20\uD0A4 \uD45C\uC900\uC2DC',
                            'daylight': '\uD398\uD2B8\uB85C\uD30C\uBE14\uB86D\uC2A4\uD06C-\uCE84\uCC28\uCE20\uD0A4 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\uB3D9\uBD80 \uCE74\uC790\uD750\uC2A4\uD0C4 \uC2DC\uAC04'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\uC11C\uBD80 \uCE74\uC790\uD750\uC2A4\uD0C4 \uC2DC\uAC04'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\uB300\uD55C\uBBFC\uAD6D \uC2DC\uAC04',
                            'standard': '\uB300\uD55C\uBBFC\uAD6D \uD45C\uC900\uC2DC',
                            'daylight': '\uB300\uD55C\uBBFC\uAD6D \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\uCF54\uC2A4\uB77C\uC5D0\uC12C \uC2DC\uAC04'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\uD06C\uB77C\uC2A4\uB178\uC57C\uB974\uC2A4\uD06C \uC2DC\uAC04',
                            'standard': '\uD06C\uB77C\uC2A4\uB178\uC57C\uB974\uC2A4\uD06C \uD45C\uC900\uC2DC',
                            'daylight': '\uD06C\uB77C\uC2A4\uB178\uC57C\uB974\uC2A4\uD06C \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\uD0A4\uB974\uAE30\uC2A4\uC2A4\uD0C4 \uC2DC\uAC04'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\uB791\uCE74 \uD45C\uC900 \uC2DC\uAC04'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\uB77C\uC778 \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\uB85C\uB4DC \uD558\uC6B0 \uC2DC\uAC04',
                            'standard': '\uB85C\uB4DC \uD558\uC6B0 \uD45C\uC900\uC2DC',
                            'daylight': '\uB85C\uB4DC \uD558\uC6B0 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\uB9C8\uCE74\uC624 \uC2DC\uAC04',
                            'standard': '\uB9C8\uCE74\uC624 \uD45C\uC900 \uC2DC\uAC04',
                            'daylight': '\uB9C8\uCE74\uC624 \uC11C\uBA38 \uD0C0\uC784'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\uB9E4\uCFFC\uB9AC\uC12C \uC2DC\uAC04'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\uB9C8\uAC00\uB2E8 \uC2DC\uAC04',
                            'standard': '\uB9C8\uAC00\uB2E8 \uD45C\uC900\uC2DC',
                            'daylight': '\uB9C8\uAC00\uB2E8 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\uB9D0\uB808\uC774\uC2DC\uC544 \uC2DC\uAC04'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\uBAB0\uB514\uBE0C \uC2DC\uAC04'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\uB9C8\uB974\uD0A4\uC988 \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\uB9C8\uC15C \uC81C\uB3C4 \uC2DC\uAC04'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\uBAA8\uB9AC\uC154\uC2A4 \uC2DC\uAC04',
                            'standard': '\uBAA8\uB9AC\uC154\uC2A4 \uD45C\uC900\uC2DC',
                            'daylight': '\uBAA8\uB9AC\uC154\uC2A4 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\uBAA8\uC2A8 \uC2DC\uAC04'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\uC6B8\uB780\uBC14\uD1A0\uB974 \uC2DC\uAC04',
                            'standard': '\uC6B8\uB780\uBC14\uD1A0\uB974 \uD45C\uC900\uC2DC',
                            'daylight': '\uC6B8\uB780\uBC14\uD1A0\uB974 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\uBAA8\uC2A4\uD06C\uBC14 \uC2DC\uAC04',
                            'standard': '\uBAA8\uC2A4\uD06C\uBC14 \uD45C\uC900\uC2DC',
                            'daylight': '\uBAA8\uC2A4\uD06C\uBC14 \uD558\uACC4 \uD45C\uC900\uC2DC'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\uBBF8\uC580\uB9C8 \uC2DC\uAC04'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\uB098\uC6B0\uB8E8 \uC2DC\uAC04'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\uB124\uD314 \uC2DC\uAC04'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} \uC2DC\uAC04',
                'regionFormat-type-daylight': '{0} \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04',
                'regionFormat-type-standard': '{0} \uD45C\uC900\uC2DC',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0}({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': '\uD45C\uC900 \uC815\uB82C',
                'collation': '\uC815\uB82C \uC21C\uC11C',
                'colHiraganaQuaternary': '\uAC00\uB098 \uC815\uB82C',
                'colCaseLevel': '\uB300/\uC18C\uBB38\uC790 \uAD6C\uBD84 \uC815\uB82C',
                'colCaseFirst': '\uB300\uBB38\uC790/\uC18C\uBB38\uC790 \uC21C\uC11C',
                'colBackwards': '\uC545\uC13C\uD2B8 \uC5ED\uC21C \uC815\uB82C',
                'colAlternate': '\uAE30\uD638 \uC815\uB82C \uBB34\uC2DC',
                'calendar': '\uB2EC\uB825',
                'x': '\uACF5\uAC1C \uC5EC\uBD80',
                'variableTop': '\uAE30\uD638\uB85C \uC815\uB82C',
                'va': '\uBC29\uC5B8',
                'timezone': '\uC2DC\uAC04\uB300',
                'numbers': '\uC22B\uC790',
                'currency': '\uD1B5\uD654',
                'colStrength': '\uC815\uB82C \uAC15\uB3C4',
                'colNumeric': '\uC22B\uC790 \uC815\uB82C'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\uAC00\uB098 \uBCC4\uB3C4 \uC815\uB82C',
                    'yes': '\uAC00\uB098\uB97C \uB2E4\uB974\uAC8C \uC815\uB82C'
                },
                'colCaseLevel': {
                    'no': '\uB300/\uC18C\uBB38\uC790 \uBB34\uC2DC \uC815\uB82C',
                    'yes': '\uB300/\uC18C\uBB38\uC790 \uAD6C\uBD84 \uC815\uB82C'
                },
                'colCaseFirst': {
                    'lower': '\uCCAB \uC18C\uBB38\uC790 \uC815\uB82C',
                    'no': '\uC77C\uBC18 \uB300/\uC18C\uBB38\uC790 \uC815\uB82C \uC21C\uC11C',
                    'upper': '\uB300\uBB38\uC790 \uC6B0\uC120 \uC815\uB82C'
                },
                'colStrength': {
                    'identical': '\uBAA8\uB450 \uC815\uB82C',
                    'primary': '\uAE30\uBCF8 \uBB38\uC790\uB9CC \uC815\uB82C',
                    'quaternary': '\uC545\uC13C\uD2B8/\uB300\uC18C\uBB38\uC790/\uC804\uBC18\uAC01/\uAC00\uB098 \uC815\uB82C',
                    'secondary': '\uC545\uC13C\uD2B8 \uC815\uB82C',
                    'tertiary': '\uC545\uC13C\uD2B8/\uB300\uC18C\uBB38\uC790/\uC804\uBC18\uAC01 \uC815\uB82C'
                },
                'colNumeric': {
                    'no': '\uC22B\uC790\uBCC4 \uC815\uB82C',
                    'yes': '\uC22B\uC790 \uC815\uB82C'
                },
                'colNormalization': {
                    'no': '\uD45C\uC900\uD654 \uC5C6\uC774 \uC815\uB82C',
                    'yes': '\uC720\uB2C8\uCF54\uB4DC \uD45C\uC900\uD654 \uC815\uB82C'
                },
                'calendar': {
                    'japanese': '\uC77C\uBCF8\uB825',
                    'iso8601': 'iso8601',
                    'coptic': '\uCF65\uD2B8\uB825',
                    'dangi': '\uB2E8\uAE30\uB825',
                    'ethiopic': '\uC5D0\uD2F0\uC624\uD53C\uC544\uB825',
                    'ethiopic-amete-alem': '\uC5D0\uD2F0\uC624\uD53C\uC544 \uC544\uBA54\uD14C \uC54C\uB818\uB825',
                    'gregorian': '\uD0DC\uC591\uB825',
                    'hebrew': '\uD788\uBE0C\uB9AC\uB825',
                    'persian': '\uD398\uB974\uC2DC\uC548\uB825',
                    'roc': '\uB300\uB9CC\uB825',
                    'chinese': '\uC911\uAD6D\uB825',
                    'buddhist': '\uBD88\uAD50\uB825',
                    'indian': '\uC778\uB3C4\uB825',
                    'islamic': '\uC774\uC2AC\uB78C\uB825',
                    'islamic-civil': '\uC774\uC2AC\uB78C \uC0C1\uC6A9\uB825',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\uC804\uD654\uBC88\uD638\uBD80\uC21C',
                    'gb2312han': '\uC911\uAD6D\uC5B4 \uAC04\uCCB4 \uC815\uB82C \uC21C\uC11C (GB2312)',
                    'eor': 'eor',
                    'ducet': '\uAE30\uBCF8 \uC720\uB2C8\uCF54\uB4DC \uC815\uB82C \uC21C\uC11C',
                    'dictionary': '\uC0AC\uC804 \uC815\uB82C\uC21C',
                    'big5han': '\uC911\uAD6D\uC5B4 \uBC88\uCCB4 \uC815\uB82C \uC21C\uC11C (Big5)',
                    'traditional': '\uC804\uD1B5 \uC5ED\uBC95',
                    'standard': '\uD45C\uC900 \uC815\uB82C \uC21C\uC11C',
                    'zhuyin': 'zhuyin',
                    'unihan': '\uBD80\uC218\uC21C',
                    'stroke': '\uC790\uD68D\uC21C',
                    'searchjl': '\uD55C\uAE00 \uC790\uC74C\uC73C\uB85C \uAC80\uC0C9',
                    'search': '\uBC94\uC6A9 \uAC80\uC0C9',
                    'reformed': '\uAC1C\uC815 \uC815\uB82C\uC21C',
                    'pinyin': '\uBCD1\uC74C\uC21C',
                    'phonetic': '\uC18C\uB9AC\uB098\uB294 \uB300\uB85C \uC815\uB82C \uC21C\uC11C'
                },
                'numbers': {
                    'knda': '\uCE78\uB098\uB2E4 \uC22B\uC790',
                    'khmr': '\uD06C\uBA54\uB974 \uC22B\uC790',
                    'kali': '\uCE74\uC57C \uB9AC\uC2DD \uC22B\uC790',
                    'jpanfin': '\uC77C\uBCF8 \uC7AC\uBB34 \uC22B\uC790',
                    'jpan': '\uC77C\uBCF8 \uC22B\uC790',
                    'java': '\uC790\uBC14 \uC22B\uC790',
                    'hebr': '\uD788\uBE0C\uB9AC \uC22B\uC790',
                    'hantfin': '\uC911\uAD6D\uC5B4 \uBC88\uCCB4 \uC7AC\uBB34 \uC22B\uC790',
                    'hant': '\uC911\uAD6D\uC5B4 \uBC88\uCCB4 \uC22B\uC790',
                    'hansfin': '\uC911\uAD6D\uC5B4 \uAC04\uCCB4 \uC7AC\uBB34 \uC22B\uC790',
                    'hans': '\uC911\uAD6D\uC5B4 \uAC04\uCCB4 \uC22B\uC790',
                    'hanidec': '\uC911\uAD6D\uC5B4 \uC2ED\uC9C4 \uC22B\uC790',
                    'guru': '\uAD74\uBB35\uD0A4 \uC22B\uC790',
                    'gujr': '\uAD6C\uC790\uB77C\uD2B8 \uC22B\uC790',
                    'greklow': '\uADF8\uB9AC\uC2A4\uC5B4 \uC18C\uBB38\uC790 \uC22B\uC790',
                    'grek': '\uADF8\uB9AC\uC2A4 \uC22B\uC790',
                    'bali': '\uBC1C\uB9AC \uC22B\uC790',
                    'armnlow': '\uC544\uB974\uBA54\uB2C8\uC544 \uC18C\uBB38\uC790 \uC22B\uC790',
                    'armn': '\uC544\uB974\uBA54\uB2C8\uC544 \uC22B\uC790',
                    'arabext': '\uD655\uC7A5\uD615 \uC544\uB77C\uBE44\uC544-\uC778\uB3C4\uC2DD \uC22B\uC790',
                    'arab': '\uC544\uB77C\uBE44\uC544-\uC778\uB3C4\uC2DD \uC22B\uC790',
                    'finance': '\uC7AC\uBB34 \uC22B\uC790',
                    'traditional': '\uC804\uD1B5\uC801\uC778 \uC22B\uC790',
                    'native': '\uAE30\uBCF8 \uC22B\uC790',
                    'beng': '\uBC45\uACE8 \uC22B\uC790',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': '\uCC38 \uC22B\uC790',
                    'deva': '\uB370\uBC14\uB098\uAC00\uB9AC \uC22B\uC790',
                    'orya': '\uC624\uB9AC\uC57C \uC22B\uC790',
                    'osma': 'osma',
                    'roman': '\uB85C\uB9C8 \uC22B\uC790',
                    'romanlow': '\uB85C\uB9C8 \uC18C\uBB38\uC790 \uC22B\uC790',
                    'saur': '\uC0AC\uC6B0\uB77C\uC288\uD2B8\uB77C \uC22B\uC790',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': '\uC21C\uB2E4 \uC22B\uC790',
                    'vaii': '\uBC14\uC774 \uC22B\uC790',
                    'tibt': '\uD2F0\uBCB3 \uC22B\uC790',
                    'thai': '\uD0DC\uAD6D \uC22B\uC790',
                    'telu': '\uD154\uB8E8\uAD6C \uC22B\uC790',
                    'tamldec': '\uD0C0\uBC00 \uC22B\uC790',
                    'taml': '\uD0C0\uBC00\uC5B4 \uC22B\uC790',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': '\uC62C\uCE58\uD0A4 \uC22B\uC790',
                    'nkoo': 'nkoo',
                    'mymrshan': '\uBBF8\uC580\uB9C8 \uC0E8 \uC22B\uC790',
                    'mymr': '\uBBF8\uC580\uB9C8 \uC22B\uC790',
                    'mtei': '\uBA54\uC774\uD14C\uC774 \uB9C8\uC609 \uC22B\uC790',
                    'mong': '\uBABD\uACE8 \uC22B\uC790',
                    'mlym': '\uB9D0\uB77C\uC584\uB78C \uC22B\uC790',
                    'limb': '\uB9BC\uBD80 \uC22B\uC790',
                    'lepc': '\uB819\uCC28 \uC22B\uC790',
                    'latn': '\uC11C\uC591 \uC22B\uC790',
                    'laoo': '\uB77C\uC624 \uC22B\uC790',
                    'lanatham': '\uD0C0\uC774 \uD0D0\uD0D0 \uC22B\uC790',
                    'lana': '\uD0C0\uC774 \uD0D0 \uD638\uB77C \uC22B\uC790',
                    'geor': '\uADF8\uB8E8\uC9C0\uC544 \uC22B\uC790',
                    'fullwide': '\uC804\uCCB4 \uC22B\uC790',
                    'ethi': '\uC5D0\uD2F0\uC624\uD53C\uC544 \uC22B\uC790'
                },
                'colAlternate': {
                    'non-ignorable': '\uAE30\uD638 \uC815\uB82C',
                    'shifted': '\uAE30\uD638 \uBB34\uC2DC \uC815\uB82C'
                },
                'colBackwards': {
                    'no': '\uC545\uC13C\uD2B8 \uC77C\uBC18 \uC815\uB82C',
                    'yes': '\uC545\uC13C\uD2B8 \uC5ED\uC21C \uC815\uB82C'
                }
            },
            'codePatterns': {
                'language': '\uC5B8\uC5B4: {0}',
                'script': '\uC2A4\uD06C\uB9BD\uD2B8: {0}',
                'territory': '\uC9C0\uC5ED: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0}\uC628\uC2A4'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0}\uD0AC\uB85C\uADF8\uB7A8'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0}\uADF8\uB7A8'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0}\uC57C\uB4DC'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0}\uD53C\uCF54\uBBF8\uD130'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0}\uBC00\uB9AC\uBBF8\uD130'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0}\uB9C8\uC77C'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0}\uBBF8\uD130'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0}\uAD11\uB144'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0}\uD0AC\uB85C\uBBF8\uD130'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0}\uC778\uCE58'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0}\uD53C\uD2B8'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0}\uC13C\uD2F0\uBBF8\uD130'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0}\uB144'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0}\uC8FC'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0}\uAC1C\uC6D4'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0}\uD30C\uC6B4\uB4DC'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0}\uB9C8\uB825'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0}\uD0AC\uB85C\uC640\uD2B8'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0}\uC640\uD2B8'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0}\uD5E5\uD1A0\uD30C\uC2A4\uCE7C'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0}\uC218\uC740\uC8FC\uC778\uCE58'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0}\uBC00\uB9AC\uBC14'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0}\uB9AC\uD130'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0}\uC138\uC81C\uACF1\uB9C8\uC77C'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0}\uC138\uC81C\uACF1\uD0AC\uB85C\uBBF8\uD130'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '\uD654\uC528 {0}\uB3C4'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '\uC12D\uC528 {0}\uB3C4'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '\uC2DC\uC18D {0}\uB9C8\uC77C'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '\uCD08\uC18D {0}\uBBF8\uD130'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '\uC2DC\uC18D {0}\uD0AC\uB85C\uBBF8\uD130'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0}\uBD84'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0}\uBC00\uB9AC\uCD08'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0}\uC2DC\uAC04'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0}\uC77C'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0}\uC81C\uACF1\uB9C8\uC77C'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0}\uC81C\uACF1\uBBF8\uD130'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0}\uC81C\uACF1\uD0AC\uB85C\uBBF8\uD130'
                },
                'per': {
                    'compoundUnitPattern': '{1}\uB2F9 {0}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0}\uC911\uB825\uAC00\uC18D\uB3C4'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0}\uBD84'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0}\uCD08'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0}\uB3C4'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0}\uC5D0\uC774\uCEE4'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0}\uD5E5\uD0C0\uB974'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0}\uC81C\uACF1\uD53C\uD2B8'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0}\uCD08'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0}oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0}kg'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0}g'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0}yd'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0}pm'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0}mm'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0}mil'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0}m'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0}ly'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0}km'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0}in'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0}ft'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0}cm'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0}\uB144'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0}\uC8FC'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0}\uAC1C\uC6D4'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0}lb'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0}HP'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0}kW'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0}W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0}hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0}inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0}mb'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0}L'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0}mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0}km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '\uC2DC\uC18D {0}mi'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '\uCD08\uC18D {0}m'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '\uC2DC\uC18D {0}km'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0}\uBD84'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0}ms'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0}\uC2DC\uAC04'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0}\uC77C'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0}mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0}m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0}km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0}\uBD84'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0}\uCD08'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0}\uB3C4'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0}ac'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0}ha'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0}ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0}\uCD08'
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
