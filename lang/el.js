/* AstroDate
 * Language: el
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
        AstroDate.lang('el', {
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
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03C3\u03C4.',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03C3\u03C4.'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u03BC.',
                    'unitPattern-count-other': '{0} \u03BC.'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ly',
                    'unitPattern-count-other': '{0} ly'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03BC.',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03BC.'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u03B5\u03BA.',
                    'unitPattern-count-other': '{0} \u03B5\u03BA.'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u03AD\u03C4.',
                    'unitPattern-count-other': '{0} \u03AD\u03C4.'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u03B5\u03B2\u03B4.',
                    'unitPattern-count-other': '{0} \u03B5\u03B2\u03B4.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u03BC\u03AE\u03BD.',
                    'unitPattern-count-other': '{0} \u03BC\u03AE\u03BD.'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} hp',
                    'unitPattern-count-other': '{0} hp'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mbar',
                    'unitPattern-count-other': '{0} mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03BC./\u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03BC./\u03CE\u03C1\u03B1'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u03BB\u03B5\u03C0.',
                    'unitPattern-count-other': '{0} \u03BB\u03B5\u03C0.'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03CE\u03C1\u03B5\u03C2'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u03B7\u03BC.',
                    'unitPattern-count-other': '{0} \u03B7\u03BC.'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} ac',
                    'unitPattern-count-other': '{0} ac'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u03B4\u03B5\u03C5\u03C4.',
                    'unitPattern-count-other': '{0} \u03B4\u03B5\u03C5\u03C4.'
                }
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
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u03A3\u03AC\u03B9\u03C0\u03B1\u03BD'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u03A1\u03B1\u03C1\u03BF\u03C4\u03CC\u03BD\u03B3\u03BA\u03B1'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u03A0\u03BF\u03C1\u03C4 \u039C\u03CC\u03C1\u03B5\u03C3\u03BC\u03C0\u03C5'
                        },
                        'Ponape': {
                            'exemplarCity': '\u03A0\u03BF\u03BD\u03AC\u03C0\u03B5'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u03A0\u03AF\u03C4\u03BA\u03B5\u03C1\u03BD'
                        },
                        'Palau': {
                            'exemplarCity': '\u03A0\u03B1\u03BB\u03AC\u03BF\u03C5'
                        },
                        'Auckland': {
                            'exemplarCity': '\u038C\u03BA\u03BB\u03B1\u03BD\u03C4'
                        },
                        'Apia': {
                            'exemplarCity': '\u0386\u03C0\u03B9\u03B1'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u03A6\u03BF\u03C5\u03BD\u03B1\u03C6\u03BF\u03CD\u03C4\u03B9'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u0393\u03BA\u03B1\u03BB\u03B1\u03C0\u03AC\u03B3\u03BA\u03BF\u03C2'
                        },
                        'Gambier': {
                            'exemplarCity': '\u0393\u03BA\u03AC\u03BC\u03C0\u03B9\u03B5\u03C1'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u0393\u03BA\u03BF\u03C5\u03B1\u03BD\u03C4\u03B1\u03BB\u03BA\u03B1\u03BD\u03AC\u03BB'
                        },
                        'Guam': {
                            'exemplarCity': '\u0393\u03BA\u03BF\u03C5\u03AC\u03BC'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u03A7\u03BF\u03BD\u03BF\u03BB\u03BF\u03C5\u03BB\u03BF\u03CD'
                        },
                        'Wallis': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03CC\u03BB\u03B9\u03C2'
                        },
                        'Wake': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03AD\u03B9\u03BA'
                        },
                        'Truk': {
                            'exemplarCity': '\u03A4\u03C3\u03BF\u03C5\u03BA'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u03A4\u03BF\u03BD\u03B3\u03BA\u03B1\u03C4\u03AC\u03C0\u03BF\u03C5'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u03A4\u03B1\u03C1\u03AC\u03BF\u03C5\u03B1'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u03A4\u03B1\u03CA\u03C4\u03AE'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u039A\u03B9\u03C1\u03B9\u03C4\u03B9\u03BC\u03AC\u03C4\u03B9'
                        },
                        'Johnston': {
                            'exemplarCity': '\u03A4\u03B6\u03CC\u03BD\u03C3\u03C4\u03BF\u03BD'
                        },
                        'Chatham': {
                            'exemplarCity': '\u03A4\u03C3\u03AC\u03C4\u03B1\u03BC'
                        },
                        'Easter': {
                            'exemplarCity': '\u039D\u03AE\u03C3\u03BF\u03C2 \u03A0\u03AC\u03C3\u03C7\u03B1'
                        },
                        'Efate': {
                            'exemplarCity': '\u0395\u03C6\u03AC\u03C4\u03B5'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u0395\u03BD\u03C4\u03B5\u03C1\u03BC\u03C0\u03AD\u03C1\u03C5'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u03A6\u03B1\u03BA\u03B1\u03CC\u03C6\u03BF'
                        },
                        'Fiji': {
                            'exemplarCity': '\u03A6\u03AF\u03C4\u03B6\u03B9'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u039A\u03BF\u03C3\u03C1\u03AC\u03B7'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u039A\u03BF\u03C5\u03B1\u03C7\u03B1\u03BB\u03AD\u03B9\u03BD'
                        },
                        'Majuro': {
                            'exemplarCity': '\u039C\u03B1\u03C7\u03BF\u03CD\u03C1\u03BF'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u039C\u03B1\u03C1\u03BA\u03AD\u03C3\u03B1\u03C2'
                        },
                        'Midway': {
                            'exemplarCity': '\u039C\u03AF\u03BD\u03C4\u03B3\u03BF\u03C5\u03B5\u03CA'
                        },
                        'Nauru': {
                            'exemplarCity': '\u039D\u03B1\u03BF\u03CD\u03C1\u03BF\u03C5'
                        },
                        'Niue': {
                            'exemplarCity': '\u039D\u03B9\u03BF\u03CD\u03B5'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u039D\u03CC\u03C1\u03C6\u03BF\u03BB\u03BA'
                        },
                        'Noumea': {
                            'exemplarCity': '\u039D\u03BF\u03C5\u03BC\u03AD\u03B1'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u03A0\u03AC\u03B3\u03BA\u03BF \u03A0\u03AC\u03B3\u03BA\u03BF'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u039B\u03AF\u03BD\u03C4\u03B5\u03BC\u03B1\u03BD'
                        },
                        'Hobart': {
                            'exemplarCity': '\u03A7\u03CC\u03BC\u03C0\u03B1\u03C1\u03C4'
                        },
                        'Eucla': {
                            'exemplarCity': '\u0395\u03BF\u03CD\u03BA\u03BB\u03B1'
                        },
                        'Darwin': {
                            'exemplarCity': '\u039D\u03C4\u03AC\u03C1\u03B3\u03BF\u03C5\u03B9\u03BD'
                        },
                        'Sydney': {
                            'exemplarCity': '\u03A3\u03AF\u03B4\u03BD\u03B5\u03CA'
                        },
                        'Perth': {
                            'exemplarCity': '\u03A0\u03B5\u03C1\u03B8'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u039C\u03B5\u03BB\u03B2\u03BF\u03CD\u03C1\u03BD\u03B7'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u039B\u03BF\u03C1\u03BD\u03C4 \u03A7\u03AC\u03BF\u03C5\u03B9'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u0391\u03B4\u03B5\u03BB\u03B1\u0390\u03B4\u03B1'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u039C\u03C0\u03C1\u03B9\u03C3\u03BC\u03C0\u03AD\u03B9\u03BD'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u039C\u03C0\u03C1\u03CC\u03BA\u03B5\u03BD \u03A7\u03B9\u03BB'
                        },
                        'Currie': {
                            'exemplarCity': '\u039A\u03B9\u03BF\u03C5\u03C1\u03AF'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u039C\u03B1\u03BB\u03B4\u03AF\u03B2\u03B5\u03C2'
                        },
                        'Mahe': {
                            'exemplarCity': '\u039C\u03AC\u03C7\u03B5'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u039A\u03AD\u03C1\u03B3\u03BA\u03BF\u03C5\u03B5\u03BB\u03B5\u03BD'
                        },
                        'Reunion': {
                            'exemplarCity': '\u03A1\u03B5\u03CA\u03BD\u03B9\u03CC\u03BD'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u039C\u03B1\u03B3\u03B9\u03CC\u03C4\u03B5'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u039C\u03B1\u03C5\u03C1\u03AF\u03BA\u03B9\u03BF\u03C2'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u0391\u03BD\u03C4\u03B1\u03BD\u03B1\u03BD\u03B1\u03C1\u03AF\u03B2\u03BF'
                        },
                        'Chagos': {
                            'exemplarCity': '\u03A4\u03C3\u03AC\u03B3\u03BA\u03BF\u03C2'
                        },
                        'Christmas': {
                            'exemplarCity': '\u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD\u03B3\u03B5\u03BD\u03BD\u03B1'
                        },
                        'Cocos': {
                            'exemplarCity': '\u039A\u03CC\u03BA\u03BF\u03C2'
                        },
                        'Comoro': {
                            'exemplarCity': '\u039A\u03BF\u03BC\u03CC\u03C1\u03BF'
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
                            'exemplarCity': '\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03B7 \u03C0\u03CC\u03BB\u03B7'
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
                            'exemplarCity': '\u03A1\u03BF\u03B8\u03AD\u03C1\u03B1'
                        },
                        'Palmer': {
                            'exemplarCity': '\u03A0\u03AC\u03BB\u03BC\u03B5\u03C1'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u039C\u03B1\u03BA\u03BC\u03AD\u03C1\u03BD\u03C4\u03BF'
                        },
                        'Vostok': {
                            'exemplarCity': '\u0392\u03CC\u03C3\u03C4\u03BF\u03BA'
                        },
                        'Syowa': {
                            'exemplarCity': '\u03A3\u03AF\u03BF\u03B2\u03B1'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u039D\u03CC\u03C4\u03B9\u03BF\u03C2 \u03A0\u03CC\u03BB\u03BF\u03C2'
                        },
                        'Casey': {
                            'exemplarCity': '\u039A\u03AC\u03C3\u03B5\u03CA'
                        },
                        'Davis': {
                            'exemplarCity': '\u039D\u03C4\u03AD\u03B9\u03B2\u03B9\u03C2'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u039D\u03C4\u03B9\u03BC\u03CC\u03BD\u03C4 \u039D\u03C4\u03B5\u03C1\u03B2\u03AF\u03BB'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u039C\u03B1\u03BA\u03BF\u03C5\u03AC\u03C1\u03B9'
                        },
                        'Mawson': {
                            'exemplarCity': '\u039C\u03CC\u03BF\u03C5\u03C3\u03BF\u03BD'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u039B\u03CC\u03BD\u03B3\u03BA\u03B9\u03B5\u03B1\u03C1\u03BC\u03C0\u03B9\u03B5\u03BD'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u03A4\u03BF\u03C1\u03CC\u03BD\u03C4\u03BF'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u03A4\u03B9\u03C7\u03BF\u03C5\u03AC\u03BD\u03B1'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u0398\u03AC\u03BD\u03C4\u03B5\u03C1 \u039C\u03C0\u03AD\u03B9'
                        },
                        'Thule': {
                            'exemplarCity': '\u03A4\u03BF\u03CD\u03BB\u03B5'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u03A4\u03B5\u03B3\u03BA\u03BF\u03C5\u03C3\u03B9\u03B3\u03BA\u03AC\u03BB\u03C0\u03B1'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u03A3\u03BF\u03C5\u03AF\u03C6\u03C4 \u039A\u03AC\u03C1\u03C1\u03B5\u03BD\u03C4'
                        },
                        'Chicago': {
                            'exemplarCity': '\u03A3\u03B9\u03BA\u03AC\u03B3\u03BF'
                        },
                        'Cayman': {
                            'exemplarCity': '\u039A\u03AD\u03B9\u03BC\u03B1\u03BD'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u039A\u03B1\u03B3\u03B9\u03AD\u03BD\u03B5'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u039A\u03B1\u03C4\u03B1\u03BC\u03AC\u03C1\u03BA\u03B1'
                        },
                        'Caracas': {
                            'exemplarCity': '\u039A\u03B1\u03C1\u03AC\u03BA\u03B1\u03C2'
                        },
                        'Cancun': {
                            'exemplarCity': '\u039A\u03B1\u03BD\u03BA\u03BF\u03CD\u03BD'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u039A\u03AC\u03BC\u03C0\u03BF \u0393\u03BA\u03C1\u03AC\u03BD\u03C4\u03B5'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u039A\u03AD\u03BC\u03C0\u03C1\u03B9\u03C4\u03B6 \u039C\u03C0\u03AD\u03B9'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u039C\u03C0\u03BF\u03C5\u03AD\u03BD\u03BF\u03C2 \u0386\u03B9\u03C1\u03B5\u03C2'
                        },
                        'Boise': {
                            'exemplarCity': '\u039C\u03C0\u03CC\u03B9\u03B6'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u0391\u03C3\u03BF\u03C5\u03BD\u03C3\u03B9\u03CC\u03BD'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0391\u03C1\u03BF\u03CD\u03BC\u03C0\u03B1'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u03A1\u03AF\u03BF \u0393\u03BA\u03B1\u03B3\u03B9\u03AD\u03B3\u03BA\u03BF\u03C2'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u03A3\u03B1\u03BD \u03A7\u03BF\u03C5\u03AC\u03BD'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u039F\u03C5\u03C3\u03BF\u03C5\u03AC\u03B9\u03B1'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u039B\u03B1 \u03A1\u03B9\u03CC\u03C7\u03B1'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u03A3\u03B1\u03BD \u039B\u03BF\u03CD\u03B9\u03C2'
                            },
                            'Salta': {
                                'exemplarCity': '\u03A3\u03AC\u03BB\u03C4\u03B1'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u03A4\u03BF\u03C5\u03BA\u03BF\u03C5\u03BC\u03AC\u03BD'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0391\u03C1\u03B1\u03B3\u03BA\u03BF\u03C5\u03AC\u03B9\u03BD\u03B1'
                        },
                        'Antigua': {
                            'exemplarCity': '\u0391\u03BD\u03C4\u03AF\u03B3\u03BA\u03BF\u03C5\u03B1'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u0391\u03BD\u03B3\u03BA\u03BF\u03C5\u03AF\u03BB\u03B1'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u0386\u03BD\u03BA\u03BF\u03C1\u03B1\u03C4\u03B6'
                        },
                        'Adak': {
                            'exemplarCity': '\u0386\u03BD\u03C4\u03B1\u03BA'
                        },
                        'Bahia': {
                            'exemplarCity': '\u039C\u03C0\u03AC\u03C7\u03B9\u03B1'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03C7\u03AF\u03B1 \u039D\u03C4\u03B5 \u039C\u03C0\u03B1\u03BD\u03C4\u03AD\u03C1\u03B1\u03C2'
                        },
                        'Barbados': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03C1\u03BC\u03C0\u03AC\u03BD\u03C4\u03BF\u03C2'
                        },
                        'Belem': {
                            'exemplarCity': '\u039C\u03C0\u03AD\u03BB\u03B5\u03BC'
                        },
                        'Belize': {
                            'exemplarCity': '\u039C\u03C0\u03B5\u03BB\u03AF\u03B6'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u039C\u03C0\u03BB\u03B1\u03BD \u03A3\u03B1\u03BC\u03C0\u03BB\u03CC\u03BD'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u039C\u03C0\u03CC\u03B1 \u0392\u03AF\u03C3\u03C4\u03B1'
                        },
                        'Bogota': {
                            'exemplarCity': '\u039C\u03C0\u03BF\u03B3\u03BA\u03BF\u03C4\u03AC'
                        },
                        'Curacao': {
                            'exemplarCity': '\u039A\u03BF\u03C5\u03C1\u03B1\u03C3\u03AC\u03BF'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u039D\u03C4\u03B1\u03BD\u03BC\u03B1\u03C1\u03BA\u03C3\u03AC\u03B2\u03BD'
                        },
                        'Dawson': {
                            'exemplarCity': '\u039D\u03C4\u03CC\u03C3\u03BF\u03BD'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u039D\u03C4\u03CC\u03C3\u03BF\u03BD \u039A\u03C1\u03B9\u03BA'
                        },
                        'Denver': {
                            'exemplarCity': '\u039D\u03C4\u03AD\u03BD\u03B2\u03B5\u03C1'
                        },
                        'Detroit': {
                            'exemplarCity': '\u039D\u03C4\u03B9\u03C4\u03C1\u03CC\u03B9\u03C4'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u0395\u03C1\u03BC\u03BF\u03C3\u03AF\u03B3\u03B9\u03BF'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0392\u03AF\u03BD\u03BA\u03B5\u03BD\u03B5\u03C2, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u03A0\u03AF\u03C4\u03B5\u03C1\u03C3\u03BC\u03C0\u03B5\u03C1\u03B3\u03BA, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u03A4\u03B5\u03BB \u03A3\u03AF\u03C4\u03C5, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            },
                            'Knox': {
                                'exemplarCity': '\u039D\u03BF\u03BE, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0393\u03BF\u03C5\u03AF\u03BD\u03B1\u03BC\u03B1\u03BA, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            },
                            'Marengo': {
                                'exemplarCity': '\u039C\u03B1\u03C1\u03AD\u03BD\u03B3\u03BA\u03BF, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0392\u03B5\u03B2\u03AC\u03B9, \u0399\u03BD\u03C4\u03B9\u03AC\u03BD\u03B1'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0399\u03BD\u03C4\u03B9\u03B1\u03BD\u03AC\u03C0\u03BF\u03BB\u03B9\u03C2'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0399\u03BD\u03BF\u03CD\u03B2\u03B9\u03BA'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0399\u03BA\u03B1\u03BB\u03BF\u03CD\u03C4'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u03A4\u03B6\u03B1\u03BC\u03AC\u03B9\u03BA\u03B1'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u03A7\u03BF\u03C5\u03C7\u03BF\u03CD\u03B9'
                        },
                        'Juneau': {
                            'exemplarCity': '\u03A4\u03B6\u03BF\u03CD\u03BD\u03BF'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u0393\u03AD\u03BB\u03BF\u03BF\u03C5\u03BD\u03B1\u03CA\u03C6'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u0393\u03B9\u03B1\u03BA\u03BF\u03CD\u03C4\u03B1\u03C4'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03AF\u03BD\u03B9\u03C0\u03B5\u03B3\u03BA'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03AC\u03B9\u03C4\u03C7\u03BF\u03C1\u03C2'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u0392\u03B1\u03BD\u03BA\u03BF\u03CD\u03B2\u03B5\u03C1'
                        },
                        'Tortola': {
                            'exemplarCity': '\u03A4\u03BF\u03C1\u03C4\u03CC\u03BB\u03B1'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u039A\u03C1\u03B1\u03BB\u03AD\u03BD\u03C4\u03B9\u03BA'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u039C\u03BF\u03BD\u03C4\u03B9\u03C4\u03C3\u03AD\u03BB\u03BF, \u039A\u03B5\u03BD\u03C4\u03AC\u03BA\u03B9'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0391\u03B2\u03AC\u03BD\u03B1'
                        },
                        'Halifax': {
                            'exemplarCity': '\u03A7\u03AC\u03BB\u03B9\u03C6\u03B1\u03BE'
                        },
                        'Guyana': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03B9\u03AC\u03BD\u03B1'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u0393\u03BA\u03BF\u03C5\u03B1\u03B3\u03B9\u03B1\u03BA\u03CD\u03BB'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03B1\u03C4\u03B5\u03BC\u03AC\u03BB\u03B1'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u0393\u03BF\u03C5\u03B1\u03B4\u03B5\u03BB\u03BF\u03CD\u03C0\u03B7'
                        },
                        'Grenada': {
                            'exemplarCity': '\u0393\u03C1\u03B5\u03BD\u03AC\u03B4\u03B1'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u0393\u03BA\u03C1\u03B1\u03BD\u03C4 \u03A4\u03BF\u03C5\u03C1\u03BA'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u0393\u03BA\u03BF\u03C5\u03C2 \u039C\u03C0\u03AD\u03B9'
                        },
                        'Godthab': {
                            'exemplarCity': '\u0393\u03BA\u03CC\u03BD\u03B8\u03B1\u03BC\u03C0'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u0393\u03BA\u03BB\u03AD\u03B9\u03C2 \u039C\u03C0\u03AD\u03B9'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u03A6\u03BF\u03C1\u03C4\u03B1\u03BB\u03AD\u03B6\u03B1'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u0395\u03BB \u03A3\u03B1\u03BB\u03B2\u03B1\u03B4\u03CC\u03C1'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u0395\u03CA\u03C1\u03BF\u03C5\u03BD\u03AD\u03C0\u03B5'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u0388\u03BD\u03C4\u03BC\u03BF\u03BD\u03C4\u03BF\u03BD'
                        },
                        'Dominica': {
                            'exemplarCity': '\u0394\u03BF\u03BC\u03B9\u03BD\u03AF\u03BA\u03B1'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u03A4\u03C3\u03B9\u03BF\u03C5\u03AC\u03BF\u03C5\u03B1'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u039A\u03CC\u03C1\u03B1\u03BB \u03A7\u03AC\u03C1\u03BC\u03C0\u03BF\u03C5\u03C1'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u039A\u03CC\u03C1\u03B4\u03BF\u03B2\u03B1'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u039A\u03CC\u03C3\u03C4\u03B1 \u03A1\u03AF\u03BA\u03B1'
                        },
                        'Creston': {
                            'exemplarCity': '\u039A\u03C1\u03AD\u03C3\u03C4\u03BF\u03BD'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u039A\u03BF\u03C5\u03CA\u03AC\u03BC\u03C0\u03B1'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u039B\u03B1 \u03A0\u03B1\u03B6'
                        },
                        'Lima': {
                            'exemplarCity': '\u039B\u03AF\u03BC\u03B1'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u039B\u03BF\u03C2 \u0386\u03BD\u03C4\u03B6\u03B5\u03BB\u03B5\u03C2'
                        },
                        'Louisville': {
                            'exemplarCity': '\u039B\u03BF\u03CD\u03B9\u03C3\u03B2\u03B9\u03BB'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '[Lower Prince\'s Quarter]'
                        },
                        'Maceio': {
                            'exemplarCity': '\u039C\u03B1\u03C3\u03AD\u03B9\u03BF'
                        },
                        'Managua': {
                            'exemplarCity': '\u039C\u03B1\u03BD\u03AC\u03B3\u03BA\u03BF\u03C5\u03B1'
                        },
                        'Manaus': {
                            'exemplarCity': '\u039C\u03B1\u03BD\u03AC\u03BF\u03C2'
                        },
                        'Marigot': {
                            'exemplarCity': '\u039C\u03AC\u03C1\u03B9\u03B3\u03BA\u03BF\u03C4'
                        },
                        'Martinique': {
                            'exemplarCity': '\u039C\u03B1\u03C1\u03C4\u03B9\u03BD\u03AF\u03BA\u03B1'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u039C\u03B1\u03C4\u03B1\u03BC\u03CC\u03C1\u03BF\u03C2'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u039C\u03B1\u03B6\u03B1\u03C4\u03BB\u03AC\u03BD'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u039C\u03B5\u03BD\u03C4\u03CC\u03B6\u03B1'
                        },
                        'Menominee': {
                            'exemplarCity': '\u039C\u03B5\u03BD\u03BF\u03BC\u03AF\u03BD\u03B5'
                        },
                        'Merida': {
                            'exemplarCity': '\u039C\u03AD\u03C1\u03B9\u03BD\u03C4\u03B1'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u039C\u03B5\u03C4\u03BB\u03B1\u03BA\u03AC\u03C4\u03BB\u03B1'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u03A0\u03CC\u03BB\u03B7 \u03C4\u03BF\u03C5 \u039C\u03B5\u03BE\u03B9\u03BA\u03BF\u03CD'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u039C\u03B9\u03BA\u03B5\u03BB\u03CC\u03BD'
                        },
                        'Moncton': {
                            'exemplarCity': '\u039C\u03BF\u03BD\u03BA\u03C4\u03CC\u03BD'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u039C\u03BF\u03BD\u03C4\u03B5\u03C1\u03AD\u03B9'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u039C\u03BF\u03BD\u03C4\u03B5\u03B2\u03B9\u03B4\u03AD\u03BF'
                        },
                        'Montreal': {
                            'exemplarCity': '\u039C\u03CC\u03BD\u03C4\u03C1\u03B5\u03B1\u03BB'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u039C\u03BF\u03BD\u03C3\u03B5\u03C1\u03AC\u03C4'
                        },
                        'Nassau': {
                            'exemplarCity': '\u039D\u03B1\u03C3\u03AC\u03BF\u03C5'
                        },
                        'New_York': {
                            'exemplarCity': '\u039D\u03AD\u03B1 \u03A5\u03CC\u03C1\u03BA\u03B7'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u039D\u03B9\u03C0\u03B9\u03B3\u03BA\u03CC\u03BD'
                        },
                        'Nome': {
                            'exemplarCity': '\u039D\u03CC\u03BC\u03B5'
                        },
                        'Noronha': {
                            'exemplarCity': '\u039D\u03BF\u03C1\u03CC\u03BD\u03C7\u03B1'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u039C\u03C0\u03AD\u03BF\u03C5\u03BB\u03B1\u03C7, \u0392\u03CC\u03C1\u03B5\u03B9\u03B1 \u039D\u03C4\u03B1\u03BA\u03CC\u03C4\u03B1'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u039D\u03B9\u03BF\u03C5 \u03A3\u03AC\u03BB\u03B5\u03BC, \u0392\u03CC\u03C1\u03B5\u03B9\u03B1 \u039D\u03C4\u03B1\u03BA\u03CC\u03C4\u03B1'
                            },
                            'Center': {
                                'exemplarCity': '\u039A\u03AD\u03BD\u03C4\u03C1\u03BF, \u0392\u03CC\u03C1\u03B5\u03B9\u03B1 \u039D\u03C4\u03B1\u03BA\u03CC\u03C4\u03B1'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u039F\u03C7\u03B9\u03BD\u03AC\u03B3\u03BA\u03B1'
                        },
                        'Panama': {
                            'exemplarCity': '\u03A0\u03B1\u03BD\u03B1\u03BC\u03AC\u03C2'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u03A0\u03B1\u03BD\u03B3\u03BA\u03BD\u03AF\u03C1\u03C4\u03BF\u03C5\u03BD\u03B3\u03BA'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u03A0\u03B1\u03C1\u03B1\u03BC\u03B1\u03C1\u03AF\u03BC\u03C0\u03BF'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u03A6\u03BF\u03AF\u03BD\u03B9\u03BE'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u03A0\u03BF\u03C1\u03C4-\u03BF-\u03A0\u03C1\u03B5\u03BD\u03C2'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u03A0\u03BF\u03C1\u03C4 \u03BF\u03C6 \u03A3\u03C0\u03AD\u03B9\u03BD'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u03A0\u03CC\u03C1\u03C4\u03BF \u0392\u03AD\u03BB\u03BF'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u03A0\u03BF\u03C5\u03AD\u03C1\u03C4\u03BF \u03A1\u03AF\u03BA\u03BF'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u03A1\u03AD\u03B9\u03BD\u03B9 \u03A1\u03AF\u03B2\u03B5\u03C1'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u03A1\u03AD\u03B9\u03BD\u03BA\u03B9\u03BD \u038A\u03BD\u03BB\u03B5\u03C4'
                        },
                        'Recife': {
                            'exemplarCity': '\u03A1\u03B5\u03C3\u03AF\u03C6\u03B5'
                        },
                        'Regina': {
                            'exemplarCity': '\u03A1\u03B5\u03C4\u03B6\u03AF\u03BD\u03B1'
                        },
                        'Resolute': {
                            'exemplarCity': '\u03A1\u03AD\u03C3\u03BF\u03BB\u03BF\u03C5\u03C4'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u03A1\u03AF\u03BF \u039C\u03C0\u03C1\u03AC\u03BD\u03BA\u03BF'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u03A3\u03AC\u03BD\u03C4\u03B1 \u0399\u03B6\u03B1\u03BC\u03C0\u03AD\u03BB'
                        },
                        'Santarem': {
                            'exemplarCity': '\u03A3\u03B1\u03BD\u03C4\u03B1\u03C1\u03AD\u03BC'
                        },
                        'Santiago': {
                            'exemplarCity': '\u03A3\u03B1\u03BD\u03C4\u03B9\u03AC\u03B3\u03BA\u03BF'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0386\u03B3\u03B9\u03BF\u03C2 \u0394\u03BF\u03BC\u03AF\u03BD\u03B9\u03BA\u03BF\u03C2'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u03A3\u03AC\u03BF \u03A0\u03AC\u03BF\u03BB\u03BF'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u03A3\u03BA\u03BF\u03C1\u03B5\u03C3\u03BC\u03C0\u03AF\u03C3\u03BF\u03C5\u03BD\u03C4'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u03A3\u03AF\u03C0\u03C1\u03BF\u03BA'
                        },
                        'Sitka': {
                            'exemplarCity': '\u03A3\u03AF\u03C4\u03BA\u03B1'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0386\u03B3\u03B9\u03BF\u03C2 \u0392\u03B1\u03C1\u03B8\u03BF\u03BB\u03BF\u03BC\u03B1\u03AF\u03BF\u03C2'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u03A3\u03B5\u03BD\u03C4 \u03A4\u03B6\u03BF\u03BD\u03C2'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0386\u03B3\u03B9\u03BF\u03C2 \u03A7\u03C1\u03B9\u03C3\u03C4\u03CC\u03C6\u03BF\u03C1\u03BF\u03C2 (\u03A3\u03B1\u03B9\u03BD\u03C4 \u039A\u03B9\u03C4\u03C2)'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0391\u03B3\u03AF\u03B1 \u039B\u03BF\u03C5\u03BA\u03AF\u03B1'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0386\u03B3\u03B9\u03BF\u03C2 \u0398\u03C9\u03BC\u03AC\u03C2'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0386\u03B3\u03B9\u03BF\u03C2 \u0392\u03B9\u03BA\u03AD\u03BD\u03C4\u03B9\u03BF\u03C2'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u039D\u03CC\u03C4\u03B9\u03B1 \u0393\u03B5\u03C9\u03C1\u03B3\u03AF\u03B1'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u03A1\u03AD\u03C5\u03BA\u03B9\u03B1\u03B2\u03B9\u03BA'
                        },
                        'Stanley': {
                            'exemplarCity': '\u03A3\u03C4\u03AC\u03BD\u03BB\u03B5\u03CB'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u0391\u03B3. \u0395\u03BB\u03AD\u03BD\u03B7'
                        },
                        'Azores': {
                            'exemplarCity': '\u0391\u03B6\u03CC\u03C1\u03B5\u03C2'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u0392\u03B5\u03C1\u03BC\u03BF\u03CD\u03B4\u03B1'
                        },
                        'Canary': {
                            'exemplarCity': '\u039A\u03B1\u03BD\u03AC\u03C1\u03B9\u03B1'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF \u0391\u03BA\u03C1\u03C9\u03C4\u03AE\u03C1\u03B9\u03BF'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u03A6\u03B5\u03C1\u03CC\u03B5\u03C2'
                        },
                        'Madeira': {
                            'exemplarCity': '\u039C\u03B1\u03B4\u03AD\u03C1\u03B1'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u038C\u03C3\u03BB\u03BF'
                        },
                        'Moscow': {
                            'exemplarCity': '\u039C\u03CC\u03C3\u03C7\u03B1'
                        },
                        'Monaco': {
                            'exemplarCity': '\u039C\u03BF\u03BD\u03B1\u03BA\u03CC'
                        },
                        'Minsk': {
                            'exemplarCity': '\u039C\u03B9\u03BD\u03C3\u03BA'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u039C\u03B1\u03C1\u03B9\u03AD\u03C7\u03B1\u03BC\u03BD'
                        },
                        'Malta': {
                            'exemplarCity': '\u039C\u03AC\u03BB\u03C4\u03B1'
                        },
                        'Madrid': {
                            'exemplarCity': '\u039C\u03B1\u03B4\u03C1\u03AF\u03C4\u03B7'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u039B\u03BF\u03C5\u03BE\u03B5\u03BC\u03B2\u03BF\u03CD\u03C1\u03B3\u03BF'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03C1\u03B5\u03C4\u03B1\u03BD\u03AF\u03B1\u03C2'
                            },
                            'exemplarCity': '\u039B\u03BF\u03BD\u03B4\u03AF\u03BD\u03BF'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u039B\u03B9\u03BF\u03C5\u03BC\u03C0\u03BB\u03B9\u03AC\u03BD\u03B1'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u039B\u03B9\u03C3\u03B1\u03B2\u03CC\u03BD\u03B1'
                        },
                        'Kiev': {
                            'exemplarCity': '\u039A\u03AF\u03B5\u03B2\u03BF'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u039A\u03B1\u03BB\u03AF\u03BD\u03B9\u03BD\u03B3\u03BA\u03C1\u03B1\u03BD\u03C4'
                        },
                        'Jersey': {
                            'exemplarCity': '\u03A4\u03B6\u03AD\u03C1\u03C3\u03B5\u03CA'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03B9\u03BD\u03BF\u03CD\u03C0\u03BF\u03BB\u03B7'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u039D\u03AE\u03C3\u03BF\u03C2 \u03C4\u03BF\u03C5 \u039C\u03B1\u03BD'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u0392\u03BF\u03C5\u03BA\u03BF\u03C5\u03C1\u03AD\u03C3\u03C4\u03B9'
                        },
                        'Brussels': {
                            'exemplarCity': '\u0392\u03C1\u03C5\u03BE\u03AD\u03BB\u03BB\u03B5\u03C2'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u039C\u03C0\u03C1\u03B1\u03C4\u03B9\u03C3\u03BB\u03AC\u03B2\u03B1'
                        },
                        'Berlin': {
                            'exemplarCity': '\u0392\u03B5\u03C1\u03BF\u03BB\u03AF\u03BD\u03BF'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u0392\u03B5\u03BB\u03B9\u03B3\u03C1\u03AC\u03B4\u03B9'
                        },
                        'Athens': {
                            'exemplarCity': '\u0391\u03B8\u03AE\u03BD\u03B1'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0391\u03BD\u03B4\u03CC\u03C1\u03B1'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u0386\u03BC\u03C3\u03C4\u03B5\u03C1\u03BD\u03C4\u03B1\u03BC'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u03A3\u03C5\u03BC\u03C6\u03B5\u03C1\u03CC\u03C0\u03BF\u03BB\u03B7'
                        },
                        'Skopje': {
                            'exemplarCity': '\u03A3\u03BA\u03CC\u03C0\u03B9\u03B1'
                        },
                        'Sofia': {
                            'exemplarCity': '\u03A3\u03CC\u03C6\u03B9\u03B1'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u03A3\u03C4\u03BF\u03BA\u03C7\u03CC\u03BB\u03BC\u03B7'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u03A4\u03B1\u03BB\u03AF\u03BD'
                        },
                        'Tirane': {
                            'exemplarCity': '\u03A4\u03AF\u03C1\u03B1\u03BD\u03B1'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u039F\u03C5\u03B6\u03BA\u03CC\u03C1\u03BF\u03BD\u03C4'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0392\u03B1\u03BD\u03C4\u03BF\u03CD\u03B6'
                        },
                        'Zurich': {
                            'exemplarCity': '\u0396\u03C5\u03C1\u03AF\u03C7\u03B7'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u0396\u03B1\u03C0\u03BF\u03C1\u03CC\u03B6\u03B9\u03B5'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u0396\u03AC\u03B3\u03BA\u03C1\u03B5\u03BC\u03C0'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u0392\u03B1\u03C1\u03C3\u03BF\u03B2\u03AF\u03B1'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u0392\u03CC\u03BB\u03B3\u03BA\u03BF\u03BA\u03C1\u03B1\u03BD\u03C4'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u0392\u03AF\u03BB\u03BD\u03B9\u03BF\u03C5\u03C2'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0392\u03B9\u03AD\u03BD\u03BD\u03B7'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0392\u03B1\u03C4\u03B9\u03BA\u03B1\u03BD\u03CC'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u03A3\u03B1\u03C1\u03AC\u03B3\u03B5\u03B2\u03BF'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u0386\u03B3\u03B9\u03BF\u03C2 \u039C\u03B1\u03C1\u03AF\u03BD\u03BF\u03C2'
                        },
                        'Samara': {
                            'exemplarCity': '\u03A3\u03B1\u03BC\u03AC\u03C1\u03B1'
                        },
                        'Rome': {
                            'exemplarCity': '\u03A1\u03CE\u03BC\u03B7'
                        },
                        'Riga': {
                            'exemplarCity': '\u03A1\u03AF\u03B3\u03B1'
                        },
                        'Prague': {
                            'exemplarCity': '\u03A0\u03C1\u03AC\u03B3\u03B1'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u03A0\u03BF\u03BD\u03C4\u03B3\u03BA\u03CC\u03C1\u03B9\u03C4\u03C3\u03B1'
                        },
                        'Paris': {
                            'exemplarCity': '\u03A0\u03B1\u03C1\u03AF\u03C3\u03B9'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0395\u03BB\u03C3\u03AF\u03BD\u03BA\u03B9'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u0393\u03BA\u03AD\u03C1\u03BD\u03C3\u03B5\u03CA'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u0393\u03B9\u03B2\u03C1\u03B1\u03BB\u03C4\u03AC\u03C1'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C1\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2'
                            },
                            'exemplarCity': '\u0394\u03BF\u03C5\u03B2\u03BB\u03AF\u03BD\u03BF'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u039A\u03BF\u03C0\u03B5\u03B3\u03C7\u03AC\u03B3\u03B7'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u039A\u03B9\u03C3\u03B9\u03BD\u03AC\u03BF\u03C5'
                        },
                        'Busingen': {
                            'exemplarCity': '\u039C\u03C0\u03AF\u03C3\u03B9\u03BD\u03B3\u03BA\u03B5\u03BD'
                        },
                        'Budapest': {
                            'exemplarCity': '\u0392\u03BF\u03C5\u03B4\u03B1\u03C0\u03AD\u03C3\u03C4\u03B7'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u039B\u03B9\u03BC\u03C0\u03C1\u03B5\u03B2\u03AF\u03BB'
                        },
                        'Lagos': {
                            'exemplarCity': '\u039B\u03AC\u03B3\u03BA\u03BF\u03C2'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u039A\u03B9\u03BD\u03C3\u03AC\u03C3\u03B1'
                        },
                        'Kigali': {
                            'exemplarCity': '\u039A\u03B9\u03B3\u03BA\u03AC\u03BB\u03B9'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u03A7\u03B1\u03C1\u03C4\u03BF\u03CD\u03BC'
                        },
                        'Kampala': {
                            'exemplarCity': '\u039A\u03B1\u03BC\u03C0\u03AC\u03BB\u03B1'
                        },
                        'Juba': {
                            'exemplarCity': '\u0393\u03B9\u03BF\u03CD\u03BC\u03C0\u03B1'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u0393\u03B9\u03BF\u03C7\u03AC\u03BD\u03B5\u03C3\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA'
                        },
                        'Harare': {
                            'exemplarCity': '\u03A7\u03B1\u03C1\u03AC\u03C1\u03B5'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u0393\u03BA\u03B1\u03BC\u03C0\u03BF\u03C1\u03CC\u03BD\u03B5'
                        },
                        'Freetown': {
                            'exemplarCity': '\u03A6\u03C1\u03AF\u03C4\u03B1\u03BF\u03C5\u03BD'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u0395\u03BB \u0391\u03B3\u03B9\u03BF\u03CD\u03BD'
                        },
                        'Douala': {
                            'exemplarCity': '\u039D\u03C4\u03BF\u03C5\u03AC\u03BB\u03B1'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u03A4\u03B6\u03B9\u03BC\u03C0\u03BF\u03C5\u03C4\u03AF'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u039D\u03C4\u03B1\u03C1 \u0395\u03C2 \u03A3\u03B1\u03BB\u03AC\u03BC'
                        },
                        'Dakar': {
                            'exemplarCity': '\u039D\u03C4\u03B1\u03BA\u03AC\u03C1'
                        },
                        'Banjul': {
                            'exemplarCity': '\u039C\u03C0\u03AC\u03BD\u03B6\u03BF\u03C5\u03BB'
                        },
                        'Bangui': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03AF'
                        },
                        'Bamako': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03BC\u03AC\u03BA\u03BF'
                        },
                        'Asmera': {
                            'exemplarCity': '\u0391\u03C3\u03BC\u03AC\u03C1\u03B1'
                        },
                        'Malabo': {
                            'exemplarCity': '\u039C\u03B1\u03BB\u03AC\u03BC\u03C0\u03BF'
                        },
                        'Maputo': {
                            'exemplarCity': '\u039C\u03B1\u03C0\u03BF\u03CD\u03C4\u03BF'
                        },
                        'Maseru': {
                            'exemplarCity': '\u039C\u03B1\u03C3\u03AD\u03C1\u03BF\u03C5'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03BC\u03C0\u03AC\u03BD\u03B5'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u039C\u03BF\u03B3\u03BA\u03B1\u03BD\u03C4\u03AF\u03C3\u03BF\u03C5'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u039C\u03BF\u03BD\u03C1\u03CC\u03B2\u03B9\u03B1'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u039D\u03B1\u03CA\u03C1\u03CC\u03BC\u03C0\u03B9'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u039D\u03C4\u03B6\u03B1\u03BC\u03AD\u03BD\u03B1'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0392\u03AF\u03BD\u03C4\u03C7\u03BF\u03C5\u03BA'
                        },
                        'Tunis': {
                            'exemplarCity': '\u03A4\u03CD\u03BD\u03B9\u03B4\u03B1'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u03A4\u03C1\u03AF\u03C0\u03BF\u03BB\u03B7'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u03A3\u03AC\u03BF \u03A4\u03BF\u03BC\u03AD'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u03A0\u03CC\u03C1\u03C4\u03BF-\u039D\u03CC\u03B2\u03BF'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u039F\u03C5\u03B1\u03B3\u03BA\u03B1\u03BD\u03C4\u03BF\u03CD\u03B3\u03BA\u03BF\u03C5'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u039D\u03BF\u03C5\u03B1\u03BA\u03C3\u03CC\u03C4'
                        },
                        'Niamey': {
                            'exemplarCity': '\u039D\u03B9\u03B1\u03BC\u03AD\u03B9'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u039B\u03BF\u03C5\u03B6\u03AC\u03BA\u03B1'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u039B\u03BF\u03C5\u03BC\u03C0\u03BF\u03C5\u03BC\u03C0\u03AC\u03C3\u03B9'
                        },
                        'Luanda': {
                            'exemplarCity': '\u039B\u03BF\u03C5\u03AC\u03BD\u03C4\u03B1'
                        },
                        'Lome': {
                            'exemplarCity': '\u039B\u03BF\u03BC\u03AD'
                        },
                        'Conakry': {
                            'exemplarCity': '\u039A\u03CC\u03BD\u03B1\u03BA\u03C1\u03B9'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u039A\u03AD\u03BF\u03C5\u03C4\u03B1'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u039A\u03B1\u03B6\u03B1\u03BC\u03C0\u03BB\u03AC\u03BD\u03BA\u03B1'
                        },
                        'Cairo': {
                            'exemplarCity': '\u039A\u03AC\u03B9\u03C1\u03BF'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u039C\u03C0\u03BF\u03C5\u03B6\u03BF\u03C5\u03BC\u03C0\u03BF\u03CD\u03C1\u03B1'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u039C\u03C0\u03C1\u03AC\u03B6\u03B1\u03B2\u03B9\u03BB'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u039C\u03C0\u03BB\u03B1\u03BD\u03C4\u03AC\u03B9\u03C1'
                        },
                        'Bissau': {
                            'exemplarCity': '\u039C\u03C0\u03B9\u03C3\u03AC\u03BF\u03C5'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0391\u03BC\u03C0\u03B9\u03C4\u03B6\u03AC\u03BD'
                        },
                        'Accra': {
                            'exemplarCity': '\u0386\u03BA\u03C1\u03B1'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0391\u03BD\u03C4\u03AF\u03C2 \u0391\u03BC\u03C0\u03AD\u03BC\u03C0\u03B1'
                        },
                        'Algiers': {
                            'exemplarCity': '\u0391\u03BB\u03B3\u03AD\u03C1\u03B9'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u03A3\u03B1\u03BD\u03B3\u03BA\u03AC\u03B7'
                        },
                        'Seoul': {
                            'exemplarCity': '\u03A3\u03B5\u03BF\u03CD\u03BB'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u03A3\u03B1\u03BC\u03B1\u03C1\u03BA\u03AC\u03BD\u03B4\u03B7'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u03A3\u03B1\u03BA\u03B1\u03BB\u03AF\u03BD\u03C3\u03BA'
                        },
                        'Saigon': {
                            'exemplarCity': '\u03A0\u03CC\u03BB\u03B7 \u03A7\u03BF \u03A4\u03C3\u03B9 \u039C\u03B9\u03BD\u03C7'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u03A1\u03B9\u03AC\u03BD\u03C4'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u03A1\u03B1\u03BD\u03B3\u03BA\u03BF\u03CD\u03BD'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u039A\u03C4\u03B6\u03B9\u03BB-\u039F\u03C1\u03BD\u03C4\u03AC'
                        },
                        'Qatar': {
                            'exemplarCity': '\u039A\u03B1\u03C4\u03AC\u03C1'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u03A0\u03B9\u03BF\u03BD\u03B3\u03BA\u03B3\u03B9\u03AC\u03BD\u03B3\u03BA'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u03A0\u03CC\u03BD\u03C4\u03B9\u03B1\u03BD\u03B1\u03BA'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u03A0\u03BD\u03BF\u03BC \u03A0\u03B5\u03BD\u03C7'
                        },
                        'Oral': {
                            'exemplarCity': '\u038C\u03C1\u03B1\u03BB'
                        },
                        'Omsk': {
                            'exemplarCity': '\u039F\u03BC\u03C3\u03BA'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u039D\u03BF\u03B2\u03BF\u03C3\u03B9\u03BC\u03C0\u03AF\u03C1\u03C3\u03BA'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u0392\u03B1\u03B3\u03B4\u03AC\u03C4\u03B7'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u03A4\u03C3\u03BF\u03BD\u03B3\u03BA\u03AF\u03BD\u03B3\u03BA'
                        },
                        'Colombo': {
                            'exemplarCity': '\u039A\u03BF\u03BB\u03CC\u03BC\u03C0\u03BF'
                        },
                        'Damascus': {
                            'exemplarCity': '\u0394\u03B1\u03BC\u03B1\u03C3\u03BA\u03CC\u03C2'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u039D\u03C4\u03AC\u03BA\u03B1'
                        },
                        'Dili': {
                            'exemplarCity': '\u039D\u03C4\u03AF\u03BB\u03B9'
                        },
                        'Dubai': {
                            'exemplarCity': '\u039D\u03C4\u03BF\u03C5\u03BC\u03C0\u03AC\u03B9'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u039D\u03C4\u03BF\u03C5\u03C3\u03AC\u03BC\u03C0\u03B5'
                        },
                        'Gaza': {
                            'exemplarCity': '\u0393\u03AC\u03B6\u03B1'
                        },
                        'Harbin': {
                            'exemplarCity': '\u03A7\u03B1\u03C1\u03BC\u03C0\u03AF\u03BD'
                        },
                        'Hebron': {
                            'exemplarCity': '\u03A7\u03B5\u03BC\u03C0\u03C1\u03CC\u03BD'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u03A7\u03BF\u03BD\u03B3\u03BA \u039A\u03BF\u03BD\u03B3\u03BA'
                        },
                        'Hovd': {
                            'exemplarCity': '\u03A7\u03BF\u03B2\u03BD\u03C4'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0399\u03C1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u03A4\u03B6\u03B1\u03BA\u03AC\u03C1\u03C4\u03B1'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u03A7\u03B1\u03B3\u03B9\u03B1\u03C0\u03BF\u03CD\u03C1\u03B1'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u039F\u03C5\u03BB\u03AC\u03BD \u039C\u03C0\u03B1\u03C4\u03CC\u03C1'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u039F\u03C5\u03C1\u03BF\u03C5\u03BC\u03BA\u03AF'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u039F\u03C5\u03C3\u03C4-\u039D\u03B5\u03C1\u03AC'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0392\u03B9\u03B5\u03BD\u03C4\u03B9\u03AC\u03BD\u03B5'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0392\u03BB\u03B1\u03B4\u03B9\u03B2\u03BF\u03C3\u03C4\u03CC\u03BA'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u0393\u03B9\u03AC\u03BA\u03BF\u03C5\u03C4\u03C3\u03BA'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u0391\u03B9\u03BA\u03B1\u03C4\u03B5\u03C1\u03AF\u03BD\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u0393\u03B5\u03C1\u03B5\u03B2\u03AC\u03BD'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u03A4\u03CC\u03BA\u03C5\u03BF'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u03A4\u03C1\u03AF\u03BC\u03C6\u03BF\u03C5'
                        },
                        'Tehran': {
                            'exemplarCity': '\u03A4\u03B5\u03C7\u03B5\u03C1\u03AC\u03BD\u03B7'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u03A4\u03B9\u03C6\u03BB\u03AF\u03B4\u03B1'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u03A4\u03B1\u03C3\u03BA\u03AD\u03BD\u03B4\u03B7'
                        },
                        'Taipei': {
                            'exemplarCity': '\u03A4\u03B1\u03CA\u03C0\u03AD\u03B9'
                        },
                        'Singapore': {
                            'exemplarCity': '\u03A3\u03B9\u03B3\u03BA\u03B1\u03C0\u03BF\u03CD\u03C1\u03B7'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u0399\u03B5\u03C1\u03BF\u03C5\u03C3\u03B1\u03BB\u03AE\u03BC'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0391\u03C3\u03C7\u03B1\u03BC\u03C0\u03AC\u03C4'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0391\u03BA\u03C4\u03CC\u03BC\u03C0\u03B5'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0391\u03BA\u03C4\u03AC\u03BF\u03C5'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0391\u03BD\u03B1\u03BD\u03C4\u03AF\u03C1'
                        },
                        'Amman': {
                            'exemplarCity': '\u0391\u03BC\u03BC\u03AC\u03BD'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0391\u03BB\u03BC\u03AC\u03C4\u03C5'
                        },
                        'Aden': {
                            'exemplarCity': '\u0386\u03BD\u03C4\u03B5\u03BD'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03C7\u03C1\u03AD\u03B9\u03BD'
                        },
                        'Baku': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03BA\u03BF\u03CD'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03CC\u03BA'
                        },
                        'Beirut': {
                            'exemplarCity': '\u0392\u03C5\u03C1\u03B7\u03C4\u03CC\u03C2'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u039C\u03C0\u03B9\u03C3\u03BA\u03AD\u03BA'
                        },
                        'Brunei': {
                            'exemplarCity': '\u039C\u03C0\u03C1\u03BF\u03C5\u03BD\u03AD\u03B9'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u039A\u03B1\u03BB\u03BA\u03BF\u03CD\u03C4\u03B1'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u03A7\u03CC\u03B9\u03BC\u03C0\u03B1\u03BB\u03C3\u03B1\u03BD'
                        },
                        'Kabul': {
                            'exemplarCity': '\u039A\u03B1\u03BC\u03C0\u03BF\u03CD\u03BB'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u039A\u03B1\u03BC\u03C4\u03C3\u03AC\u03C4\u03BA\u03B1'
                        },
                        'Karachi': {
                            'exemplarCity': '\u039A\u03B1\u03C1\u03AC\u03C4\u03C3\u03B9'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u039A\u03AC\u03C3\u03B3\u03BA\u03B1\u03C1'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u039A\u03B1\u03C4\u03BC\u03B1\u03BD\u03C4\u03BF\u03CD'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u03A7\u03B1\u03BD\u03C4\u03AF\u03B3\u03BA\u03B1'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u039A\u03C1\u03B1\u03C3\u03BD\u03BF\u03B3\u03B9\u03AC\u03C1\u03C3\u03BA'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u039A\u03BF\u03C5\u03AC\u03BB\u03B1 \u039B\u03BF\u03C5\u03BC\u03C0\u03BF\u03CD\u03C1'
                        },
                        'Kuching': {
                            'exemplarCity': '\u039A\u03BF\u03C5\u03C4\u03C3\u03AF\u03BD\u03B3\u03BA'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u039A\u03BF\u03C5\u03B2\u03AD\u03B9\u03C4'
                        },
                        'Macau': {
                            'exemplarCity': '\u039C\u03B1\u03BA\u03AC\u03BF'
                        },
                        'Magadan': {
                            'exemplarCity': '\u039C\u03B1\u03B3\u03BA\u03B1\u03BD\u03C4\u03AC\u03BD'
                        },
                        'Makassar': {
                            'exemplarCity': '\u039C\u03B1\u03BA\u03B1\u03C3\u03AC\u03C1'
                        },
                        'Manila': {
                            'exemplarCity': '\u039C\u03B1\u03BD\u03AF\u03BB\u03B1'
                        },
                        'Muscat': {
                            'exemplarCity': '\u039C\u03B1\u03C3\u03BA\u03AC\u03C4'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u039B\u03B5\u03C5\u03BA\u03C9\u03C3\u03AF\u03B1'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u039D\u03BF\u03B2\u03BF\u03BA\u03BF\u03C5\u03B6\u03BD\u03AD\u03C4\u03C3\u03BA'
                        }
                    }
                },
                'metazone': {
                    'Tahiti': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0391\u03CA\u03C4\u03AE\u03C2'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A3\u03AF\u03BF\u03B2\u03B1'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A3\u03BF\u03C5\u03C1\u03B9\u03BD\u03AC\u03BC'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03CC\u03C4\u03B9\u03B1\u03C2 \u0393\u03B5\u03C9\u03C1\u03B3\u03AF\u03B1\u03C2'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u03A3\u03BF\u03BB\u03BF\u03BC\u03CE\u03BD\u03C4\u03B1'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A3\u03B9\u03B3\u03BA\u03B1\u03C0\u03BF\u03CD\u03C1\u03B7\u03C2'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A3\u03B5\u03CB\u03C7\u03B5\u03BB\u03BB\u03CE\u03BD'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A3\u03B1\u03BC\u03CC\u03B1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03BC\u03CC\u03B1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03BC\u03CC\u03B1'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A3\u03AC\u03BC\u03B1\u03C1\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03AC\u03BC\u03B1\u03C1\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03BC\u03AC\u03C1\u03B1\u03C2'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A3\u03B1\u03C7\u03B1\u03BB\u03AF\u03BD\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03C7\u03B1\u03BB\u03AF\u03BD\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03C7\u03B1\u03BB\u03AF\u03BD\u03B7\u03C2'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A1\u03BF\u03B8\u03AD\u03C1\u03B1'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A1\u03B5\u03CA\u03BD\u03B9\u03CC\u03BD'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A0\u03BF\u03BD\u03AC\u03C0\u03B5'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A0\u03AF\u03C4\u03BA\u03B5\u03C1\u03BD'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A3\u03B1\u03B9\u03BD\u03C4 \u03A0\u03B9\u03B5\u03C1 \u03BA\u03B1\u03B9 \u039C\u03B9\u03BA\u03B5\u03BB\u03CC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03B9\u03BD\u03C4 \u03A0\u03B9\u03B5\u03C1 \u03BA\u03B1\u03B9 \u039C\u03B9\u03BA\u03B5\u03BB\u03CC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A3\u03B1\u03B9\u03BD\u03C4 \u03A0\u03B9\u03B5\u03C1 \u03BA\u03B1\u03B9 \u039C\u03B9\u03BA\u03B5\u03BB\u03CC\u03BD'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u03A6\u03AF\u03BD\u03B9\u03BE'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A6\u03B9\u03BB\u03B9\u03C0\u03C0\u03B9\u03BD\u03CE\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A6\u03B9\u03BB\u03B9\u03C0\u03C0\u03B9\u03BD\u03CE\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A6\u03B9\u03BB\u03B9\u03C0\u03C0\u03B9\u03BD\u03CE\u03BD'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A0\u03B5\u03C1\u03BF\u03CD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B5\u03C1\u03BF\u03CD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B5\u03C1\u03BF\u03CD'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03BB\u03AC\u03C3\u03BA\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BB\u03AC\u03C3\u03BA\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BB\u03AC\u03C3\u03BA\u03B1\u03C2'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C6\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C6\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C6\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03CC\u03C4\u03B9\u03B1\u03C2 \u0391\u03C6\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0391\u03C6\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0391\u03C6\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0391\u03C6\u03B3\u03B1\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'standard': '\u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE \u03C7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'daylight': '\u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE \u03B8\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u039F\u03C1\u03B5\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'standard': '\u039F\u03C1\u03B5\u03B9\u03BD\u03AE \u03C7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'daylight': '\u039F\u03C1\u03B5\u03B9\u03BD\u03AE \u03B8\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03BD\u03C4\u03AF\u03C1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03BD\u03C4\u03AF\u03C1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03BD\u03C4\u03AF\u03C1'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0391\u03C1\u03B1\u03B2\u03B9\u03BA\u03AE \u03CE\u03C1\u03B1',
                            'standard': '\u0391\u03C1\u03B1\u03B2\u03B9\u03BA\u03AE \u03C7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1',
                            'daylight': '\u0391\u03C1\u03B1\u03B2\u03B9\u03BA\u03AE \u03B8\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03C1\u03B3\u03B5\u03BD\u03C4\u03B9\u03BD\u03AE\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03C1\u03B3\u03B5\u03BD\u03C4\u03B9\u03BD\u03AE\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03C1\u03B3\u03B5\u03BD\u03C4\u03B9\u03BD\u03AE\u03C2'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C1\u03B3\u03B5\u03BD\u03C4\u03B9\u03BD\u03AE\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C1\u03B3\u03B5\u03BD\u03C4\u03B9\u03BD\u03AE\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C1\u03B3\u03B5\u03BD\u03C4\u03B9\u03BD\u03AE\u03C2'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1\u03C2'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03AF\u03BD\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03AF\u03BD\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03AF\u03BD\u03B1\u03C2'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A4\u03C3\u03BF\u03CA\u03BC\u03C0\u03B1\u03BB\u03C3\u03AC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03C3\u03BF\u03CA\u03BC\u03C0\u03B1\u03BB\u03C3\u03AC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03C3\u03BF\u03CA\u03BC\u03C0\u03B1\u03BB\u03C3\u03AC\u03BD'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03BF\u03CD \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03C5\u03B3\u03AD\u03BD\u03BD\u03C9\u03BD'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039A\u03CC\u03BA\u03BF\u03C2'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03BF\u03BB\u03BF\u03BC\u03B2\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03BF\u03BB\u03BF\u03BC\u03B2\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03BF\u03BB\u03BF\u03BC\u03B2\u03AF\u03B1\u03C2'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039A\u03BF\u03C5\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039A\u03BF\u03C5\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039A\u03BF\u03C5\u03BA'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03BF\u03CD\u03B2\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03BF\u03CD\u03B2\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03BF\u03CD\u03B2\u03B1\u03C2'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03C4\u03AD\u03B9\u03B2\u03B9\u03C2'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03C4\u03B9\u03BC\u03CC\u03BD\u03C4 \u039D\u03C4\u03B5\u03C1\u03B2\u03AF\u03BB'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03BF\u03CD \u03A4\u03B9\u03BC\u03CC\u03C1'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03BF\u03CD \u03A0\u03AC\u03C3\u03C7\u03B1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03BF\u03CD \u03A0\u03AC\u03C3\u03C7\u03B1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03BF\u03CD \u03A0\u03AC\u03C3\u03C7\u03B1'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0395\u03BA\u03BF\u03C5\u03B1\u03B4\u03CC\u03C1'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0395\u03C5\u03C1\u03CE\u03C0\u03B7\u03C2'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u03A6\u03CE\u03BA\u03BB\u03B1\u03BD\u03C4',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u03A6\u03CE\u03BA\u03BB\u03B1\u03BD\u03C4',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u03A6\u03CE\u03BA\u03BB\u03B1\u03BD\u03C4'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A6\u03AF\u03C4\u03B6\u03B9',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A6\u03AF\u03C4\u03B6\u03B9',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A6\u03AF\u03C4\u03B6\u03B9'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0393\u03B1\u03BB\u03BB\u03B9\u03BA\u03AE\u03C2 \u0393\u03BF\u03C5\u03B9\u03AC\u03BD\u03B1\u03C2'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A4\u03BF\u03BA\u03B5\u03BB\u03AC\u03BF\u03C5'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A4\u03CC\u03BD\u03B3\u03BA\u03B1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03CC\u03BD\u03B3\u03BA\u03B1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03CC\u03BD\u03B3\u03BA\u03B1'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A4\u03C3\u03BF\u03C5\u03BA'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A4\u03BF\u03C5\u03C1\u03BA\u03BC\u03B5\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03BF\u03C5\u03C1\u03BA\u03BC\u03B5\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03BF\u03C5\u03C1\u03BA\u03BC\u03B5\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A4\u03BF\u03C5\u03B2\u03B1\u03BB\u03BF\u03CD'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039F\u03C5\u03C1\u03BF\u03C5\u03B3\u03BF\u03C5\u03AC\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03C5\u03C1\u03BF\u03C5\u03B3\u03BF\u03C5\u03AC\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03C5\u03C1\u03BF\u03C5\u03B3\u03BF\u03C5\u03AC\u03B7\u03C2'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039F\u03C5\u03B6\u03BC\u03C0\u03B5\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03C5\u03B6\u03BC\u03C0\u03B5\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03C5\u03B6\u03BC\u03C0\u03B5\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0392\u03B1\u03BD\u03BF\u03C5\u03AC\u03C4\u03BF\u03C5',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03B1\u03BD\u03BF\u03C5\u03AC\u03C4\u03BF\u03C5',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03B1\u03BD\u03BF\u03C5\u03AC\u03C4\u03BF\u03C5'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03B9\u03BA\u03B1\u03C4\u03B5\u03C1\u03AF\u03BD\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03B9\u03BA\u03B1\u03C4\u03B5\u03C1\u03AF\u03BD\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03B9\u03BA\u03B1\u03C4\u03B5\u03C1\u03AF\u03BD\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0393\u03B9\u03B1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0393\u03B9\u03B1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0393\u03B9\u03B1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039F\u03C5\u03CC\u03BB\u03B9\u03C2 \u03BA\u03B1\u03B9 \u03A6\u03BF\u03C5\u03C4\u03BF\u03CD\u03BD\u03B1'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03BF\u03CD \u0393\u03BF\u03C5\u03AD\u03B9\u03BA'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0392\u03CC\u03C3\u03C4\u03BF\u03BA'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0392\u03CC\u03BB\u03B3\u03BA\u03BF\u03B3\u03BA\u03C1\u03B1\u03BD\u03C4',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03BB\u03B3\u03BA\u03BF\u03B3\u03BA\u03C1\u03B1\u03BD\u03C4',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03BB\u03B3\u03BA\u03BF\u03B3\u03BA\u03C1\u03B1\u03BD\u03C4'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0392\u03BB\u03B1\u03B4\u03B9\u03B2\u03BF\u03C3\u03C4\u03CC\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03BB\u03B1\u03B4\u03B9\u03B2\u03BF\u03C3\u03C4\u03CC\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03BB\u03B1\u03B4\u03B9\u03B2\u03BF\u03C3\u03C4\u03CC\u03BA'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0392\u03B5\u03BD\u03B5\u03B6\u03BF\u03C5\u03AD\u03BB\u03B1\u03C2'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A4\u03B1\u03C4\u03B6\u03B9\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A4\u03B1\u03CA\u03C0\u03AD\u03B9',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03B1\u03CA\u03C0\u03AD\u03B9',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03B1\u03CA\u03C0\u03AD\u03B9'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A7\u03BF\u03B2\u03BD\u03C4',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03BF\u03B2\u03BD\u03C4',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03BF\u03B2\u03BD\u03C4'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A7\u03BF\u03BD\u03B3\u03BA \u039A\u03BF\u03BD\u03B3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03BF\u03BD\u03B3\u03BA \u039A\u03BF\u03BD\u03B3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03BF\u03BD\u03B3\u03BA \u039A\u03BF\u03BD\u03B3\u03BA'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A7\u03B1\u03B2\u03AC\u03B7\u03C2-\u0391\u03BB\u03B5\u03BF\u03CD\u03C4\u03B9\u03C9\u03BD \u03BD\u03AE\u03C3\u03C9\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03B1\u03B2\u03AC\u03B7\u03C2-\u0391\u03BB\u03B5\u03BF\u03CD\u03C4\u03B9\u03C9\u03BD \u03BD\u03AE\u03C3\u03C9\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03B1\u03B2\u03AC\u03B7\u03C2-\u0391\u03BB\u03B5\u03BF\u03CD\u03C4\u03B9\u03C9\u03BD \u03BD\u03AE\u03C3\u03C9\u03BD'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0393\u03BF\u03C5\u03B9\u03AC\u03BD\u03B1\u03C2'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039A\u03CC\u03BB\u03C0\u03BF\u03C5'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0393\u03BA\u03BF\u03C5\u03AC\u03BC'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0393\u03C1\u03BF\u03B9\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0393\u03C1\u03BF\u03B9\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0393\u03C1\u03BF\u03B9\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0393\u03C1\u03BF\u03B9\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0393\u03C1\u03BF\u03B9\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0393\u03C1\u03BF\u03B9\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u039C\u03AD\u03C3\u03B7 \u03CE\u03C1\u03B1 \u0393\u03BA\u03C1\u03AF\u03BD\u03BF\u03C5\u03B9\u03C4\u03C2'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u0393\u03BA\u03AF\u03BB\u03BC\u03C0\u03B5\u03C1\u03C4'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0393\u03B5\u03C9\u03C1\u03B3\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0393\u03B5\u03C9\u03C1\u03B3\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0393\u03B5\u03C9\u03C1\u03B3\u03AF\u03B1\u03C2'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0393\u03BA\u03AC\u03BC\u03C0\u03B9\u03B5\u03C1'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0393\u03BA\u03B1\u03BB\u03AC\u03C0\u03B1\u03B3\u03BA\u03BF\u03C2'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0393\u03B1\u03BB\u03BB\u03B9\u03BA\u03BF\u03CD \u039D\u03CC\u03C4\u03BF\u03C5 \u03BA\u03B1\u03B9 \u0391\u03BD\u03C4\u03B1\u03C1\u03BA\u03C4\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03BC\u03B1\u03B6\u03BF\u03BD\u03AF\u03BF\u03C5',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BC\u03B1\u03B6\u03BF\u03BD\u03AF\u03BF\u03C5',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BC\u03B1\u03B6\u03BF\u03BD\u03AF\u03BF\u03C5'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'standard': '\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03C7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2',
                            'daylight': '\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03B8\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0392\u03CC\u03C1\u03B5\u03B9\u03B1\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03C4\u03BB\u03B1\u03BD\u03C4\u03B9\u03BA\u03BF\u03CD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03C4\u03BB\u03B1\u03BD\u03C4\u03B9\u03BA\u03BF\u03CD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03C4\u03BB\u03B1\u03BD\u03C4\u03B9\u03BA\u03BF\u03CD'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03BF\u03B4\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03BF\u03B4\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03B5\u03BD\u03C4\u03C1\u03BF\u03B4\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u0391\u03C5\u03C3\u03C4\u03C1\u03B1\u03BB\u03AF\u03B1\u03C2'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03B6\u03B5\u03C1\u03BC\u03C0\u03B1\u03CA\u03C4\u03B6\u03AC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03B6\u03B5\u03C1\u03BC\u03C0\u03B1\u03CA\u03C4\u03B6\u03AC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03B6\u03B5\u03C1\u03BC\u03C0\u03B1\u03CA\u03C4\u03B6\u03AC\u03BD'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0391\u03B6\u03BF\u03C1\u03CE\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03B6\u03BF\u03C1\u03CE\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0391\u03B6\u03BF\u03C1\u03CE\u03BD'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03BB\u03B1\u03BD\u03C4\u03AD\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03BB\u03B1\u03BD\u03C4\u03AD\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03BB\u03B1\u03BD\u03C4\u03AD\u03C2'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03C0\u03BF\u03C5\u03C4\u03AC\u03BD'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0392\u03BF\u03BB\u03B9\u03B2\u03AF\u03B1\u03C2'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039C\u03C0\u03C1\u03B1\u03B6\u03AF\u03BB\u03B9\u03B1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03C0\u03C1\u03B1\u03B6\u03AF\u03BB\u03B9\u03B1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03C0\u03C1\u03B1\u03B6\u03AF\u03BB\u03B9\u03B1'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03C0\u03C1\u03BF\u03C5\u03BD\u03AD\u03B9 \u039D\u03C4\u03B1\u03C1\u03BF\u03C5\u03C3\u03B1\u03BB\u03AC\u03BC'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF\u03C5 \u0391\u03BA\u03C1\u03C9\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF\u03C5 \u0391\u03BA\u03C1\u03C9\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF\u03C5 \u0391\u03BA\u03C1\u03C9\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A4\u03C3\u03B1\u03BC\u03CC\u03C1\u03BF'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A4\u03C3\u03AC\u03B8\u03B1\u03BC',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03C3\u03AC\u03B8\u03B1\u03BC',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A4\u03C3\u03AC\u03B8\u03B1\u03BC'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A7\u03B9\u03BB\u03AE\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03B9\u03BB\u03AE\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A7\u03B9\u03BB\u03AE\u03C2'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0399\u03BD\u03B4\u03AF\u03B1\u03C2'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0399\u03BD\u03B4\u03B9\u03BA\u03BF\u03CD \u03A9\u03BA\u03B5\u03B1\u03BD\u03BF\u03CD'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0399\u03BD\u03B4\u03BF\u03BA\u03AF\u03BD\u03B1\u03C2'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1: \u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u0399\u03BD\u03B4\u03BF\u03BD\u03B7\u03C3\u03AF\u03B1'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1: \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03AE \u0399\u03BD\u03B4\u03BF\u03BD\u03B7\u03C3\u03AF\u03B1'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1: \u0394\u03C5\u03C4\u03B9\u03BA\u03AE \u0399\u03BD\u03B4\u03BF\u03BD\u03B7\u03C3\u03AF\u03B1'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0399\u03C1\u03AC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C1\u03AC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C1\u03AC\u03BD'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0399\u03C1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C1\u03BA\u03BF\u03CD\u03C4\u03C3\u03BA'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0399\u03C3\u03C1\u03B1\u03AE\u03BB',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C3\u03C1\u03B1\u03AE\u03BB',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03C3\u03C1\u03B1\u03AE\u03BB'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u0399\u03B1\u03C0\u03C9\u03BD\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03B1\u03C0\u03C9\u03BD\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u0399\u03B1\u03C0\u03C9\u03BD\u03AF\u03B1\u03C2'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03B1\u03BC\u03C4\u03C3\u03AC\u03C4\u03BA\u03B1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B5\u03C4\u03C1\u03BF\u03C0\u03B1\u03B2\u03BB\u03CC\u03B2\u03C3\u03BA-\u039A\u03B1\u03BC\u03C4\u03C3\u03AC\u03C4\u03C3\u03BA\u03B9',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B5\u03C4\u03C1\u03BF\u03C0\u03B1\u03B2\u03BB\u03CC\u03B2\u03C3\u03BA-\u039A\u03B1\u03BC\u03C4\u03C3\u03AC\u03C4\u03C3\u03BA\u03B9'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0391\u03BD\u03B1\u03C4\u03BF\u03BB\u03B9\u03BA\u03BF\u03CD \u039A\u03B1\u03B6\u03B1\u03BA\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u0394\u03C5\u03C4\u03B9\u03BA\u03BF\u03CD \u039A\u03B1\u03B6\u03B1\u03BA\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03BF\u03C1\u03AD\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03BF\u03C1\u03AD\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03BF\u03C1\u03AD\u03B1\u03C2'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039A\u03BF\u03C3\u03C1\u03AC\u03B7\u03C2'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039A\u03C1\u03B1\u03C3\u03BD\u03CC\u03B3\u03B9\u03B1\u03C1\u03C3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03C1\u03B1\u03C3\u03BD\u03CC\u03B3\u03B9\u03B1\u03C1\u03C3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039A\u03C1\u03B1\u03C3\u03BD\u03CC\u03B3\u03B9\u03B1\u03C1\u03C3\u03BA'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039A\u03B9\u03C1\u03B3\u03B9\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039B\u03AC\u03B9\u03BD'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039B\u03BF\u03C1\u03BD\u03C4 \u03A7\u03AC\u03BF\u03C5',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039B\u03BF\u03C1\u03BD\u03C4 \u03A7\u03AC\u03BF\u03C5',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039B\u03BF\u03C1\u03BD\u03C4 \u03A7\u03AC\u03BF\u03C5'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039C\u03B1\u03BA\u03AC\u03BF',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03B1\u03BA\u03AC\u03BF',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03B1\u03BA\u03AC\u03BF'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03BF\u03CD \u039C\u03B1\u03BA\u03BF\u03C5\u03AC\u03C1\u03B9'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039C\u03AC\u03B3\u03BA\u03B1\u03BD\u03C4\u03B1\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03AC\u03B3\u03BA\u03B1\u03BD\u03C4\u03B1\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03AC\u03B3\u03BA\u03B1\u03BD\u03C4\u03B1\u03BD'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03B1\u03BB\u03B1\u03B9\u03C3\u03AF\u03B1\u03C2'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03B1\u03BB\u03B4\u03AF\u03B2\u03C9\u03BD'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03B1\u03C1\u03BA\u03AD\u03C3\u03B1\u03C2'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039C\u03AC\u03C1\u03C3\u03B1\u03BB'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039C\u03B1\u03C5\u03C1\u03AF\u03BA\u03B9\u03BF\u03C5',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03B1\u03C5\u03C1\u03AF\u03BA\u03B9\u03BF\u03C5',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03B1\u03C5\u03C1\u03AF\u03BA\u03B9\u03BF\u03C5'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03CC\u03C3\u03BF\u03BD'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039F\u03C5\u03BB\u03AC\u03BD \u039C\u03C0\u03B1\u03C4\u03CC\u03C1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03C5\u03BB\u03AC\u03BD \u039C\u03C0\u03B1\u03C4\u03CC\u03C1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03C5\u03BB\u03AC\u03BD \u039C\u03C0\u03B1\u03C4\u03CC\u03C1'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039C\u03CC\u03C3\u03C7\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03CC\u03C3\u03C7\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039C\u03CC\u03C3\u03C7\u03B1\u03C2'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039C\u03B9\u03B1\u03BD\u03BC\u03AC\u03C1'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B1\u03BF\u03CD\u03C1\u03BF\u03C5'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B5\u03C0\u03AC\u03BB'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u039A\u03B1\u03BB\u03B7\u03B4\u03BF\u03BD\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u039A\u03B1\u03BB\u03B7\u03B4\u03BF\u03BD\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u039A\u03B1\u03BB\u03B7\u03B4\u03BF\u03BD\u03AF\u03B1\u03C2'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u0396\u03B7\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u0396\u03B7\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u0396\u03B7\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1\u03C2'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u0393\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u0393\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03AD\u03B1\u03C2 \u0393\u03B7\u03C2'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B9\u03BF\u03CD\u03B5'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u039D\u03CC\u03C1\u03C6\u03BF\u03BB\u03BA'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A6\u03B5\u03C1\u03BD\u03AC\u03C1\u03BD\u03C4\u03BF \u03BD\u03C4\u03B5 \u039D\u03BF\u03C1\u03CC\u03BD\u03B9\u03B1',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A6\u03B5\u03C1\u03BD\u03AC\u03C1\u03BD\u03C4\u03BF \u03BD\u03C4\u03B5 \u039D\u03BF\u03C1\u03CC\u03BD\u03B9\u03B1',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A6\u03B5\u03C1\u03BD\u03AC\u03C1\u03BD\u03C4\u03BF \u03BD\u03C4\u03B5 \u039D\u03BF\u03C1\u03CC\u03BD\u03B9\u03B1'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u039D\u03B7\u03C3\u03B9\u03CE\u03BD \u0392\u03CC\u03C1\u03B5\u03B9\u03B5\u03C2 \u039C\u03B1\u03C1\u03B9\u03AC\u03BD\u03B5\u03C2'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039D\u03BF\u03B2\u03BF\u03C3\u03B9\u03BC\u03C0\u03AF\u03C1\u03C3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03BF\u03B2\u03BF\u03C3\u03B9\u03BC\u03C0\u03AF\u03C1\u03C3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039D\u03BF\u03B2\u03BF\u03C3\u03B9\u03BC\u03C0\u03AF\u03C1\u03C3\u03BA'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u039F\u03BC\u03C3\u03BA',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03BC\u03C3\u03BA',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u039F\u03BC\u03C3\u03BA'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A0\u03B1\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B1\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B1\u03BA\u03B9\u03C3\u03C4\u03AC\u03BD'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A0\u03B1\u03BB\u03AC\u03BF\u03C5'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u038F\u03C1\u03B1 \u03A0\u03B1\u03C0\u03BF\u03C5\u03AC \u039D\u03AD\u03B1 \u0393\u03BF\u03C5\u03B9\u03BD\u03AD\u03B1'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u038F\u03C1\u03B1 \u03A0\u03B1\u03C1\u03B1\u03B3\u03BF\u03C5\u03AC\u03B7\u03C2',
                            'standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B1\u03C1\u03B1\u03B3\u03BF\u03C5\u03AC\u03B7\u03C2',
                            'daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 \u03A0\u03B1\u03C1\u03B1\u03B3\u03BF\u03C5\u03AC\u03B7\u03C2'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '\u038F\u03C1\u03B1 ({0})',
                'regionFormat-type-daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 ({0})',
                'regionFormat-type-standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 ({0})',
                'fallbackFormat': '[{1} ({0})]'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': '\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7',
                'collation': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2',
                'colHiraganaQuaternary': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u039A\u03AC\u03BD\u03B1',
                'colCaseLevel': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03B4\u03B9\u03AC\u03BA\u03C1\u03B9\u03C3\u03B7 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD',
                'colCaseFirst': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03BA\u03B5\u03C6\u03B1\u03BB\u03B1\u03AF\u03BF\u03C5\u03C2/\u03C0\u03B5\u03B6\u03BF\u03CD\u03C2 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2',
                'colBackwards': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03C4\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03BF \u03C4\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC',
                'colAlternate': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03B3\u03BD\u03CC\u03B7\u03C3\u03B7 \u03C3\u03C5\u03BC\u03B2\u03CC\u03BB\u03C9\u03BD',
                'calendar': '\u0397\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                'x': '\u03A0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03AE \u03C7\u03C1\u03AE\u03C3\u03B7',
                'variableTop': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C9\u03C2 \u03C3\u03CD\u03BC\u03B2\u03BF\u03BB\u03B1',
                'va': '\u03A0\u03B1\u03C1\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03C4\u03BF\u03C0\u03B9\u03BA\u03CE\u03BD \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD',
                'timezone': '\u0396\u03CE\u03BD\u03B7 \u03CE\u03C1\u03B1\u03C2',
                'numbers': '\u0391\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF',
                'currency': '\u039D\u03CC\u03BC\u03B9\u03C3\u03BC\u03B1',
                'colStrength': '\u0399\u03C3\u03C7\u03CD\u03C2 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2',
                'colNumeric': '\u0391\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AE \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u039E\u03B5\u03C7\u03C9\u03C1\u03B9\u03C3\u03C4\u03AE \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u039A\u03AC\u03BD\u03B1',
                    'yes': '\u0394\u03B9\u03B1\u03C6\u03BF\u03C1\u03B5\u03C4\u03B9\u03BA\u03AE \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u039A\u03AC\u03BD\u03B1'
                },
                'colCaseLevel': {
                    'no': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03B4\u03B9\u03AC\u03BA\u03C1\u03B9\u03C3\u03B7 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD',
                    'yes': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03B4\u03B9\u03AC\u03BA\u03C1\u03B9\u03C3\u03B7\u03C2'
                },
                'colCaseFirst': {
                    'lower': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C0\u03B5\u03B6\u03CE\u03BD \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03C0\u03C1\u03CE\u03C4\u03B1',
                    'no': '\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03AE \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD',
                    'upper': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BA\u03B5\u03C6\u03B1\u03BB\u03B1\u03AF\u03C9\u03BD \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03C0\u03C1\u03CE\u03C4\u03B1'
                },
                'colStrength': {
                    'identical': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03CC\u03BB\u03C9\u03BD',
                    'primary': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03CC\u03BD\u03BF \u03B2\u03B1\u03C3\u03B9\u03BA\u03CE\u03BD \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD',
                    'quaternary': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C4\u03CC\u03BD\u03C9\u03BD/\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03B4\u03B9\u03AC\u03BA\u03C1\u03B9\u03C3\u03B7\u03C2/\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF\u03C5 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2/\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u039A\u03AC\u03BD\u03B1',
                    'secondary': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C4\u03CC\u03BD\u03C9\u03BD',
                    'tertiary': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C4\u03CC\u03BD\u03C9\u03BD/\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03B4\u03B9\u03AC\u03BA\u03C1\u03B9\u03C3\u03B7\u03C2/\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03C9\u03BD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF\u03C5 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2'
                },
                'colNumeric': {
                    'no': '\u039C\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03B7 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C8\u03B7\u03C6\u03AF\u03C9\u03BD',
                    'yes': '\u0391\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AE \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C8\u03B7\u03C6\u03AF\u03C9\u03BD'
                },
                'colNormalization': {
                    'no': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BA\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7',
                    'yes': '\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 Unicode'
                },
                'calendar': {
                    'japanese': '\u0399\u03B1\u03C0\u03C9\u03BD\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'iso8601': 'iso8601',
                    'coptic': '\u039A\u03BF\u03C0\u03C4\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'dangi': 'dangi',
                    'ethiopic': '\u0391\u03B9\u03B8\u03B9\u03BF\u03C0\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'ethiopic-amete-alem': '\u0391\u03B9\u03B8\u03B9\u03BF\u03C0\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF \u0386\u03BC\u03B5\u03C4 \u0386\u03BB\u03B5\u03BC',
                    'gregorian': '\u0393\u03C1\u03B7\u03B3\u03BF\u03C1\u03B9\u03B1\u03BD\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'hebrew': '\u0395\u03B2\u03C1\u03B1\u03CA\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'persian': '\u03A0\u03B5\u03C1\u03C3\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'roc': '\u0397\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF \u03C4\u03B7\u03C2 \u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1\u03C2 \u03C4\u03B7\u03C2 \u039A\u03AF\u03BD\u03B1\u03C2',
                    'chinese': '\u039A\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'buddhist': '\u0392\u03BF\u03C5\u03B4\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'indian': '\u0399\u03BD\u03B4\u03B9\u03BA\u03CC \u03B5\u03B8\u03BD\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'islamic': '\u0399\u03C3\u03BB\u03B1\u03BC\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'islamic-civil': '\u0399\u03C3\u03BB\u03B1\u03BC\u03B9\u03BA\u03CC \u03B1\u03C3\u03C4\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF',
                    'islamic-rgsa': '\u0399\u03C3\u03BB\u03B1\u03BC\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF (\u03A3\u03B1\u03BF\u03C5\u03B4\u03B9\u03BA\u03AE \u0391\u03C1\u03B1\u03B2\u03AF\u03B1, \u03B8\u03AD\u03B1\u03C3\u03B7)',
                    'islamic-tbla': '\u0399\u03C3\u03BB\u03B1\u03BC\u03B9\u03BA\u03CC \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03CC\u03B3\u03B9\u03BF (\u03B4\u03BF\u03BC\u03B7\u03BC\u03AD\u03BD\u03BF, \u03B1\u03C3\u03C4\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03BA\u03AE \u03B5\u03C0\u03BF\u03C7\u03AE)',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03C4\u03B7\u03BB\u03B5\u03C6\u03C9\u03BD\u03B9\u03BA\u03BF\u03CD \u03BA\u03B1\u03C4\u03B1\u03BB\u03CC\u03B3\u03BF\u03C5',
                    'gb2312han': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u0391\u03C0\u03BB\u03BF\u03C5\u03C3\u03C4\u03B5\u03C5\u03BC\u03AD\u03BD\u03C9\u03BD \u039A\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03CE\u03BD - GB2312',
                    'eor': 'eor',
                    'ducet': '\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 Unicode',
                    'dictionary': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BB\u03BF\u03B3\u03AF\u03BF\u03C5',
                    'big5han': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03A0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03CE\u03BD \u039A\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03CE\u03BD - Big5',
                    'traditional': '\u03A0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AE \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2',
                    'standard': '\u03A4\u03C5\u03C0\u03B9\u03BA\u03AE \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2',
                    'zhuyin': 'zhuyin',
                    'unihan': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03C1\u03B9\u03B6\u03B9\u03BA\u03AE\u03C2 \u03B1\u03C1\u03AF\u03B8\u03BC\u03B7\u03C3\u03B7\u03C2',
                    'stroke': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD',
                    'searchjl': '\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7 \u03BA\u03B1\u03C4\u03AC \u03B1\u03C1\u03C7\u03B9\u03BA\u03CC \u03C3\u03CD\u03BC\u03C6\u03C9\u03BD\u03BF \u03A7\u03B1\u03BD\u03B3\u03BA\u03BF\u03CD\u03BB',
                    'search': '\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7 \u03B3\u03B5\u03BD\u03B9\u03BA\u03BF\u03CD \u03C4\u03CD\u03C0\u03BF\u03C5',
                    'reformed': '\u0391\u03BD\u03B1\u03C3\u03C7\u03B7\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2',
                    'pinyin': '\u03A3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03A0\u03B9\u03BD\u03B3\u03AF\u03BD',
                    'phonetic': '\u03A6\u03C9\u03BD\u03B7\u03C4\u03B9\u03BA\u03AE \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2'
                },
                'numbers': {
                    'knda': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u039A\u03B1\u03BD\u03AC\u03BD\u03C4\u03B1',
                    'khmr': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u03A7\u03BC\u03B5\u03C1',
                    'kali': 'kali',
                    'jpanfin': '\u0399\u03B1\u03C0\u03C9\u03BD\u03B9\u03BA\u03AC \u03BF\u03B9\u03BA\u03BF\u03BD\u03BF\u03BC\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'jpan': '\u0399\u03B1\u03C0\u03C9\u03BD\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'java': 'java',
                    'hebr': '\u0395\u03B2\u03C1\u03B1\u03CA\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'hantfin': '\u03A0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AC \u03BA\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03AC \u03BF\u03B9\u03BA\u03BF\u03BD\u03BF\u03BC\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'hant': '\u03A0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AC \u03BA\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'hansfin': '\u0391\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B1 \u03BA\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03AC \u03BF\u03B9\u03BA\u03BF\u03BD\u03BF\u03BC\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'hans': '\u0391\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B1 \u03BA\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'hanidec': '\u039A\u03B9\u03BD\u03B5\u03B6\u03B9\u03BA\u03AC \u03B4\u03B5\u03BA\u03B1\u03B4\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'guru': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u0393\u03BA\u03BF\u03C5\u03C1\u03BC\u03BF\u03CD\u03BA\u03B9',
                    'gujr': '\u0393\u03BA\u03BF\u03C5\u03C4\u03B6\u03B1\u03C1\u03B1\u03C4\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'greklow': '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C0\u03B5\u03B6\u03AC \u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1',
                    'grek': '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'bali': 'bali',
                    'armnlow': '\u03A0\u03B5\u03B6\u03AC \u03B1\u03C1\u03BC\u03B5\u03BD\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'armn': '\u0391\u03C1\u03BC\u03B5\u03BD\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'arabext': '\u0395\u03BA\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03B1\u03C1\u03B1\u03B2\u03B9\u03BA\u03CC-\u03B9\u03BD\u03B4\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'arab': '\u0391\u03C1\u03B1\u03B2\u03B9\u03BA\u03CC-\u0399\u03BD\u03B4\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'finance': '\u039F\u03B9\u03BA\u03BF\u03BD\u03BF\u03BC\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'traditional': '\u03A0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'native': '\u0395\u03B3\u03B3\u03B5\u03BD\u03AE \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'beng': '\u0392\u03B5\u03B3\u03B3\u03B1\u03BB\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u039D\u03C4\u03B5\u03B2\u03B1\u03BD\u03B1\u03B3\u03BA\u03AC\u03C1\u03B9',
                    'orya': '\u039F\u03C1\u03B9\u03B3\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'osma': 'osma',
                    'roman': '\u039B\u03B1\u03C4\u03B9\u03BD\u03B9\u03BA\u03BF\u03AF \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF',
                    'romanlow': '\u03A0\u03B5\u03B6\u03BF\u03AF \u03BB\u03B1\u03C4\u03B9\u03BD\u03B9\u03BA\u03BF\u03AF \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u0392\u03AC\u03B9',
                    'tibt': '\u0398\u03B9\u03B2\u03B5\u03C4\u03B1\u03BD\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'thai': '\u03A4\u03B1\u03CA\u03BB\u03B1\u03BD\u03B4\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'telu': '\u03A4\u03B5\u03BB\u03BF\u03C5\u03B3\u03BA\u03BF\u03C5\u03CA\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'tamldec': '\u03A4\u03B1\u03BC\u03B9\u03BB\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'taml': '\u03A4\u03B1\u03BC\u03B9\u03BB\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u039C\u03B9\u03B1\u03BD\u03BC\u03AC\u03C1',
                    'mtei': 'mtei',
                    'mong': '\u039C\u03BF\u03B3\u03B3\u03BF\u03BB\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'mlym': '\u039C\u03B1\u03BB\u03B1\u03B3\u03B9\u03B1\u03BB\u03B1\u03BC\u03B9\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u03C4\u03B7\u03C2 \u0394\u03CD\u03C3\u03B7\u03C2',
                    'laoo': '\u039B\u03B1\u03BF\u03CA\u03BA\u03AC \u03C8\u03B7\u03C6\u03AF\u03B1',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': '\u0393\u03B5\u03C9\u03C1\u03B3\u03B9\u03B1\u03BD\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC',
                    'fullwide': '\u03A8\u03B7\u03C6\u03AF\u03B1 \u03C0\u03BB\u03AE\u03C1\u03BF\u03C5\u03C2 \u03C0\u03BB\u03AC\u03C4\u03BF\u03C5\u03C2',
                    'ethi': '\u0391\u03B9\u03B8\u03B9\u03BF\u03C0\u03B9\u03BA\u03AC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03AC'
                },
                'colAlternate': {
                    'non-ignorable': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C3\u03C5\u03BC\u03B2\u03CC\u03BB\u03C9\u03BD',
                    'shifted': '\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03B3\u03BD\u03CC\u03B7\u03C3\u03B7 \u03C3\u03C5\u03BC\u03B2\u03CC\u03BB\u03C9\u03BD'
                },
                'colBackwards': {
                    'no': '\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03AC \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C4\u03CC\u03BD\u03C9\u03BD',
                    'yes': '\u0391\u03BD\u03C4\u03AF\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7 \u03C4\u03CC\u03BD\u03C9\u03BD'
                }
            },
            'codePatterns': {
                'language': '\u0393\u03BB\u03CE\u03C3\u03C3\u03B1: {0}',
                'script': '\u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B3\u03C1\u03B1\u03C6\u03AE\u03C2: {0}',
                'territory': '\u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} \u03BF\u03C5\u03B3\u03B3\u03B9\u03AC',
                    'unitPattern-count-other': '{0} \u03BF\u03C5\u03B3\u03B3\u03B9\u03AD\u03C2'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u03C7\u03B9\u03BB\u03B9\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03BF',
                    'unitPattern-count-other': '{0} \u03C7\u03B9\u03BB\u03B9\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C1\u03B9\u03BF',
                    'unitPattern-count-other': '{0} \u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C1\u03B9\u03B1'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u03B3\u03B9\u03AC\u03C1\u03B4\u03B1',
                    'unitPattern-count-other': '{0} \u03B3\u03B9\u03AC\u03C1\u03B4\u03B5\u03C2'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} \u03C0\u03B9\u03BA\u03CC\u03BC\u03B5\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03C0\u03B9\u03BA\u03CC\u03BC\u03B5\u03C4\u03C1\u03B1'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u03C7\u03B9\u03BB\u03B9\u03BF\u03C3\u03C4\u03CC\u03BC\u03B5\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03C7\u03B9\u03BB\u03B9\u03BF\u03C3\u03C4\u03CC\u03BC\u03B5\u03C4\u03C1\u03B1'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u03BC\u03AF\u03BB\u03B9',
                    'unitPattern-count-other': '{0} \u03BC\u03AF\u03BB\u03B9\u03B1'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u03BC\u03AD\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03BC\u03AD\u03C4\u03C1\u03B1'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u03AD\u03C4\u03BF\u03C2 \u03C6\u03C9\u03C4\u03CC\u03C2',
                    'unitPattern-count-other': '{0} \u03AD\u03C4\u03B7 \u03C6\u03C9\u03C4\u03CC\u03C2'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03B1'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u03AF\u03BD\u03C4\u03C3\u03B1',
                    'unitPattern-count-other': '{0} \u03AF\u03BD\u03C4\u03C3\u03B5\u03C2'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u03C0\u03CC\u03B4\u03B9',
                    'unitPattern-count-other': '{0} \u03C0\u03CC\u03B4\u03B9\u03B1'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u03B5\u03BA\u03B1\u03C4\u03BF\u03C3\u03C4\u03CC',
                    'unitPattern-count-other': '{0} \u03B5\u03BA\u03B1\u03C4\u03BF\u03C3\u03C4\u03AC'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u03AD\u03C4\u03BF\u03C2',
                    'unitPattern-count-other': '{0} \u03AD\u03C4\u03B7'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1',
                    'unitPattern-count-other': '{0} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u03BC\u03AE\u03BD\u03B1\u03C2',
                    'unitPattern-count-other': '{0} \u03BC\u03AE\u03BD\u03B5\u03C2'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} \u03BB\u03AF\u03B2\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03BB\u03AF\u03B2\u03C1\u03B5\u03C2'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u03AF\u03C0\u03C0\u03BF\u03C2',
                    'unitPattern-count-other': '{0} \u03AF\u03C0\u03C0\u03BF\u03B9'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u03BA\u03B9\u03BB\u03BF\u03B2\u03AC\u03C4',
                    'unitPattern-count-other': '{0} \u03BA\u03B9\u03BB\u03BF\u03B2\u03AC\u03C4'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} watt',
                    'unitPattern-count-other': '{0} watt'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u03B5\u03BA\u03C4\u03BF\u03C0\u03B1\u03C3\u03BA\u03AC\u03BB',
                    'unitPattern-count-other': '{0} \u03B5\u03BA\u03C4\u03BF\u03C0\u03B1\u03C3\u03BA\u03AC\u03BB'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} \u03AF\u03BD\u03C4\u03C3\u03B1 \u03C3\u03C4\u03AE\u03BB\u03B7\u03C2 \u03C5\u03B4\u03C1\u03B1\u03C1\u03B3\u03CD\u03C1\u03BF\u03C5',
                    'unitPattern-count-other': '{0} \u03AF\u03BD\u03C4\u03C3\u03B5\u03C2 \u03C3\u03C4\u03AE\u03BB\u03B7\u03C2 \u03C5\u03B4\u03C1\u03B1\u03C1\u03B3\u03CD\u03C1\u03BF\u03C5'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u03BC\u03B9\u03BB\u03B9\u03BC\u03C0\u03AC\u03C1',
                    'unitPattern-count-other': '{0} \u03BC\u03B9\u03BB\u03B9\u03BC\u03C0\u03AC\u03C1'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u03BB\u03AF\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03BB\u03AF\u03C4\u03C1\u03B1'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u03BA\u03C5\u03B2\u03B9\u03BA\u03CC \u03BC\u03AF\u03BB\u03B9',
                    'unitPattern-count-other': '{0} \u03BA\u03C5\u03B2\u03B9\u03BA\u03AC \u03BC\u03AF\u03BB\u03B9\u03B1'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u03BA\u03C5\u03B2\u03B9\u03BA\u03CC \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03BA\u03C5\u03B2\u03B9\u03BA\u03AC \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03B1'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u03B2\u03B1\u03B8\u03BC\u03CC\u03C2 \u03A6\u03B1\u03C1\u03B5\u03BD\u03AC\u03B9\u03C4',
                    'unitPattern-count-other': '{0} \u03B2\u03B1\u03B8\u03BC\u03BF\u03AF \u03A6\u03B1\u03C1\u03B5\u03BD\u03AC\u03B9\u03C4'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u03B2\u03B1\u03B8\u03BC\u03CC\u03C2 \u039A\u03B5\u03BB\u03C3\u03AF\u03BF\u03C5',
                    'unitPattern-count-other': '{0} \u03B2\u03B1\u03B8\u03BC\u03BF\u03AF \u039A\u03B5\u03BB\u03C3\u03AF\u03BF\u03C5'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u03BC\u03AF\u03BB\u03B9 \u03B1\u03BD\u03AC \u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03BC\u03AF\u03BB\u03B9\u03B1 \u03B1\u03BD\u03AC \u03CE\u03C1\u03B1'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u03BC\u03AD\u03C4\u03C1\u03BF \u03B1\u03BD\u03AC \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF',
                    'unitPattern-count-other': '{0} \u03BC\u03AD\u03C4\u03C1\u03B1 \u03B1\u03BD\u03AC \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03BF \u03B1\u03BD\u03AC \u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03B1 \u03B1\u03BD\u03AC \u03CE\u03C1\u03B1'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u03BB\u03B5\u03C0\u03C4\u03CC',
                    'unitPattern-count-other': '{0} \u03BB\u03B5\u03C0\u03C4\u03AC'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u03C7\u03B9\u03BB\u03B9\u03BF\u03C3\u03C4\u03CC \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5',
                    'unitPattern-count-other': '{0} \u03C7\u03B9\u03BB\u03B9\u03BF\u03C3\u03C4\u03AC \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03CE\u03C1\u03B5\u03C2'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u03B7\u03BC\u03AD\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03CC \u03BC\u03AF\u03BB\u03B9',
                    'unitPattern-count-other': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03AC \u03BC\u03AF\u03BB\u03B9\u03B1'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03CC \u03BC\u03AD\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03AC \u03BC\u03AD\u03C4\u03C1\u03B1'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03CC \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03BF',
                    'unitPattern-count-other': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03AC \u03C7\u03B9\u03BB\u03B9\u03CC\u03BC\u03B5\u03C4\u03C1\u03B1'
                },
                'per': {
                    'compoundUnitPattern': '{0} \u03B1\u03BD\u03AC {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} \u03BB\u03B5\u03C0\u03C4\u03CC',
                    'unitPattern-count-other': '{0} \u03BB\u03B5\u03C0\u03C4\u03AC'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF',
                    'unitPattern-count-other': '{0} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} \u03BC\u03BF\u03AF\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03BC\u03BF\u03AF\u03C1\u03B5\u03C2'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u03B1\u03BA\u03C1',
                    'unitPattern-count-other': '{0} \u03B1\u03BA\u03C1'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u03B5\u03BA\u03C4\u03AC\u03C1\u03B9\u03BF',
                    'unitPattern-count-other': '{0} \u03B5\u03BA\u03C4\u03AC\u03C1\u03B9\u03B1'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03CC \u03C0\u03CC\u03B4\u03B9',
                    'unitPattern-count-other': '{0} \u03C4\u03B5\u03C4\u03C1\u03B1\u03B3\u03C9\u03BD\u03B9\u03BA\u03AC \u03C0\u03CC\u03B4\u03B9\u03B1'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF',
                    'unitPattern-count-other': '{0} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03B3\u03C1.',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03B3\u03C1.'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u03B3\u03C1.',
                    'unitPattern-count-other': '{0} \u03B3\u03C1.'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03C3\u03C4.',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03C3\u03C4.'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u03BC.',
                    'unitPattern-count-other': '{0} \u03BC.'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ly',
                    'unitPattern-count-other': '{0} ly'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03BC.',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03BC.'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u03B5\u03BA.',
                    'unitPattern-count-other': '{0} \u03B5\u03BA.'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u03AD\u03C4\u03BF\u03C2',
                    'unitPattern-count-other': '{0} \u03AD\u03C4\u03B7'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u03B5\u03B2\u03B4.',
                    'unitPattern-count-other': '{0} \u03B5\u03B2\u03B4.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u03BC\u03AE\u03BD.',
                    'unitPattern-count-other': '{0} \u03BC\u03AE\u03BD.'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} hp',
                    'unitPattern-count-other': '{0} hp'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mbar',
                    'unitPattern-count-other': '{0} mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u03BB\u03AF\u03C4.',
                    'unitPattern-count-other': '{0} \u03BB\u03AF\u03C4.'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u00B0C',
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u03BC\u03AF\u03BB\u03B9/\u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03BC\u03AF\u03BB\u03B9\u03B1/\u03CE\u03C1\u03B1'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u03BC\u03AD\u03C4\u03C1\u03BF/\u03B4\u03B5\u03C5\u03C4.',
                    'unitPattern-count-other': '{0} \u03BC\u03AD\u03C4\u03C1\u03B1/\u03B4\u03B5\u03C5\u03C4.'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u03C7\u03BB\u03BC./\u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03C7\u03BB\u03BC./\u03CE\u03C1\u03B1'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u03BB\u03B5\u03C0.',
                    'unitPattern-count-other': '{0} \u03BB\u03B5\u03C0.'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u03CE\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03CE\u03C1\u03B5\u03C2'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u03B7\u03BC\u03AD\u03C1\u03B1',
                    'unitPattern-count-other': '{0} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} \u03BB\u03B5\u03C0.',
                    'unitPattern-count-other': '{0} \u03BB\u03B5\u03C0.'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} \u03B4\u03B5\u03C5\u03C4.',
                    'unitPattern-count-other': '{0} \u03B4\u03B5\u03C5\u03C4.'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} ac',
                    'unitPattern-count-other': '{0} ac'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u03B4\u03B5\u03C5\u03C4.',
                    'unitPattern-count-other': '{0} \u03B4\u03B5\u03C5\u03C4.'
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
