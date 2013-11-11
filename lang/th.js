/* AstroDate
 * Language: th
 * ca-gregorian: 24r9318
 * timeZoneNames: 24r9318
 * localeDisplayNames: 24r9318
 * units: 24r9318
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
        AstroDate.lang('th', {
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
                    'unitPattern-count-other': '{0}\u0E2D\u0E2D\u0E19\u0E0B\u0E4C'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0}\u0E01\u0E01.'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0}\u0E01.'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0}\u0E2B\u0E25\u0E32'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0}\u0E1E\u0E34\u0E42\u0E01\u0E40\u0E21\u0E15\u0E23'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0}\u0E21\u0E21.'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0}\u0E44\u0E21\u0E25\u0E4C'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0}\u0E21.'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0}\u0E1B\u0E35\u0E41\u0E2A\u0E07'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0}\u0E01\u0E21.'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0}\u2033'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0}\u2032'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0}\u0E0B\u0E21.'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0}\u0E1B\u0E35'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0}\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0}\u0E40\u0E14\u0E37\u0E2D\u0E19'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0}#'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0}\u0E41\u0E23\u0E07\u0E21\u0E49\u0E32'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0}\u0E01\u0E34\u0E42\u0E25\u0E27\u0E31\u0E15\u0E15\u0E4C'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0}\u0E27\u0E31\u0E15\u0E15\u0E4C'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0}hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0}" Hg'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0}\u0E21\u0E34\u0E25\u0E25\u0E34\u0E1A\u0E32\u0E23\u0E4C'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0}\u0E25\u0E34\u0E15\u0E23'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0}\u0E25\u0E1A.\u0E44\u0E21\u0E25\u0E4C'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0}\u0E25\u0E1A.\u0E01\u0E21.'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0}\u0E44\u0E21\u0E25\u0E4C/\u0E0A\u0E21.'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0}\u0E21./\u0E27\u0E34'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0}\u0E01\u0E21./\u0E0A\u0E21.'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0}\u0E19\u0E32\u0E17\u0E35'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0} \u0E21\u0E34\u0E25\u0E25\u0E34\u0E27\u0E34'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0}\u0E0A\u0E21.'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0}\u0E27\u0E31\u0E19'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0}\u0E15\u0E23.\u0E44\u0E21\u0E25\u0E4C'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0}\u0E15\u0E23.\u0E21.'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0}\u0E15\u0E23.\u0E01\u0E21.'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0}G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0}\u0E19\u0E32\u0E17\u0E35'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0}\u0E27\u0E34'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0}\u0E40\u0E2D\u0E40\u0E04\u0E2D\u0E23\u0E4C'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0}\u0E40\u0E2E\u0E01\u0E15\u0E32\u0E23\u0E4C'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0}\u0E15\u0E23.\u0E1F\u0E38\u0E15'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0}\u0E27\u0E34'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u0E2A.\u0E04.',
                                '7': '\u0E01.\u0E04.',
                                '6': '\u0E21\u0E34.\u0E22.',
                                '5': '\u0E1E.\u0E04.',
                                '12': '\u0E18.\u0E04.',
                                '11': '\u0E1E.\u0E22.',
                                '10': '\u0E15.\u0E04.',
                                '9': '\u0E01.\u0E22.',
                                '1': '\u0E21.\u0E04.',
                                '2': '\u0E01.\u0E1E.',
                                '3': '\u0E21\u0E35.\u0E04.',
                                '4': '\u0E40\u0E21.\u0E22.'
                            },
                            'narrow': {
                                '8': '\u0E2A.\u0E04.',
                                '7': '\u0E01.\u0E04.',
                                '6': '\u0E21\u0E34.\u0E22.',
                                '5': '\u0E1E.\u0E04.',
                                '12': '\u0E18.\u0E04.',
                                '11': '\u0E1E.\u0E22.',
                                '10': '\u0E15.\u0E04.',
                                '9': '\u0E01.\u0E22.',
                                '1': '\u0E21.\u0E04.',
                                '2': '\u0E01.\u0E1E.',
                                '3': '\u0E21\u0E35.\u0E04.',
                                '4': '\u0E40\u0E21.\u0E22.'
                            },
                            'wide': {
                                '8': '\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21',
                                '7': '\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21',
                                '6': '\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19',
                                '5': '\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21',
                                '12': '\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21',
                                '11': '\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19',
                                '10': '\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21',
                                '9': '\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19',
                                '1': '\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21',
                                '2': '\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C',
                                '3': '\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21',
                                '4': '\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u0E2A.\u0E04.',
                                '7': '\u0E01.\u0E04.',
                                '6': '\u0E21\u0E34.\u0E22.',
                                '5': '\u0E1E.\u0E04.',
                                '12': '\u0E18.\u0E04.',
                                '11': '\u0E1E.\u0E22.',
                                '10': '\u0E15.\u0E04.',
                                '9': '\u0E01.\u0E22.',
                                '1': '\u0E21.\u0E04.',
                                '2': '\u0E01.\u0E1E.',
                                '3': '\u0E21\u0E35.\u0E04.',
                                '4': '\u0E40\u0E21.\u0E22.'
                            },
                            'narrow': {
                                '8': '\u0E2A.\u0E04.',
                                '7': '\u0E01.\u0E04.',
                                '6': '\u0E21\u0E34.\u0E22.',
                                '5': '\u0E1E.\u0E04.',
                                '12': '\u0E18.\u0E04.',
                                '11': '\u0E1E.\u0E22.',
                                '10': '\u0E15.\u0E04.',
                                '9': '\u0E01.\u0E22.',
                                '1': '\u0E21.\u0E04.',
                                '2': '\u0E01.\u0E1E.',
                                '3': '\u0E21\u0E35.\u0E04.',
                                '4': '\u0E40\u0E21.\u0E22.'
                            },
                            'wide': {
                                '8': '\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21',
                                '7': '\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21',
                                '6': '\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19',
                                '5': '\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21',
                                '12': '\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21',
                                '11': '\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19',
                                '10': '\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21',
                                '9': '\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19',
                                '1': '\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21',
                                '2': '\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C',
                                '3': '\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21',
                                '4': '\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u0E2D\u0E32.',
                                'mon': '\u0E08.',
                                'tue': '\u0E2D.',
                                'wed': '\u0E1E.',
                                'thu': '\u0E1E\u0E24.',
                                'fri': '\u0E28.',
                                'sat': '\u0E2A.'
                            },
                            'narrow': {
                                'sun': '\u0E2D\u0E32',
                                'mon': '\u0E08',
                                'tue': '\u0E2D',
                                'wed': '\u0E1E',
                                'thu': '\u0E1E\u0E24',
                                'fri': '\u0E28',
                                'sat': '\u0E2A'
                            },
                            'short': {
                                'sun': '\u0E2D\u0E32.',
                                'mon': '\u0E08.',
                                'tue': '\u0E2D.',
                                'wed': '\u0E1E.',
                                'thu': '\u0E1E\u0E24.',
                                'fri': '\u0E28.',
                                'sat': '\u0E2A.'
                            },
                            'wide': {
                                'sun': '\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C',
                                'mon': '\u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C',
                                'tue': '\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23',
                                'wed': '\u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18',
                                'thu': '\u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35',
                                'fri': '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C',
                                'sat': '\u0E27\u0E31\u0E19\u0E40\u0E2A\u0E32\u0E23\u0E4C'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u0E2D\u0E32.',
                                'mon': '\u0E08.',
                                'tue': '\u0E2D.',
                                'wed': '\u0E1E.',
                                'thu': '\u0E1E\u0E24.',
                                'fri': '\u0E28.',
                                'sat': '\u0E2A.'
                            },
                            'narrow': {
                                'sun': '\u0E2D\u0E32',
                                'mon': '\u0E08',
                                'tue': '\u0E2D',
                                'wed': '\u0E1E',
                                'thu': '\u0E1E\u0E24',
                                'fri': '\u0E28',
                                'sat': '\u0E2A'
                            },
                            'short': {
                                'sun': '\u0E2D\u0E32.',
                                'mon': '\u0E08.',
                                'tue': '\u0E2D.',
                                'wed': '\u0E1E.',
                                'thu': '\u0E1E\u0E24.',
                                'fri': '\u0E28.',
                                'sat': '\u0E2A.'
                            },
                            'wide': {
                                'sun': '\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C',
                                'mon': '\u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C',
                                'tue': '\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23',
                                'wed': '\u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18',
                                'thu': '\u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35',
                                'fri': '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C',
                                'sat': '\u0E27\u0E31\u0E19\u0E40\u0E2A\u0E32\u0E23\u0E4C'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                            },
                            'narrow': {
                                'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                            },
                            'wide': {
                                'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                            },
                            'narrow': {
                                'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                            },
                            'wide': {
                                'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A',
                            '0-alt-variant': '\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E32\u0E21\u0E31\u0E0D\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A',
                            '1': '\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A',
                            '1-alt-variant': '\u0E2A\u0E32\u0E21\u0E31\u0E0D\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A'
                        },
                        'eraAbbr': {
                            '0': '\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19 \u0E04.\u0E28.',
                            '0-alt-variant': '\u0E01.\u0E2A.\u0E28.',
                            '1': '\u0E04.\u0E28.',
                            '1-alt-variant': '\u0E2A.\u0E28.'
                        },
                        'eraNarrow': {
                            '0': '\u0E01\u0E48\u0E2D\u0E19 \u0E04.\u0E28.',
                            '0-alt-variant': '\u0E01.\u0E2A.\u0E28.',
                            '1': '\u0E04.\u0E28.',
                            '1-alt-variant': '\u0E2A.\u0E28.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE\u0E17\u0E35\u0E48 d MMMM G y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32 mm \u0E19\u0E32\u0E17\u0E35 ss \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 zzzz',
                        'long': 'H \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32 mm \u0E19\u0E32\u0E17\u0E35 ss \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'd MMM y',
                            'yMMM': 'MMM y',
                            'yMEd': 'E d/M/y',
                            'yMd': 'd/M/y',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM G y',
                            'GyMMMEd': 'E d MMM G y',
                            'h': 'h a',
                            'H': 'HH',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E d MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'G y',
                            'GyMMM': 'MMM G y',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E d MMMM',
                            'mmss': 'mm:ss',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y'
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
                                'd': 'E d - E d MMM',
                                'M': 'E d MMM - E d MMM'
                            },
                            'MMMd': {
                                'd': 'd - d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'MEd': {
                                'd': 'E d - E d/M',
                                'M': 'E d - E d/M'
                            },
                            'Md': {
                                'd': 'd/M - d/M',
                                'M': 'd/M - d/M'
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
                                'M': 'M/y - M/y',
                                'y': 'M/y - M/y'
                            },
                            'yMd': {
                                'd': 'd-d/M/y',
                                'M': 'd/M/y - d/M/y',
                                'y': 'd/M/y - d/M/y'
                            },
                            'yMEd': {
                                'd': 'E d - E d/M/y',
                                'M': 'E d/M/y - E d/M/y',
                                'y': 'E d/M/y - E d/M/y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y - MMM y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d - E d MMM y',
                                'M': 'E d MMM - E d MMM y',
                                'y': 'E d MMM y - E d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM\u2013MMMM y',
                                'y': 'MMMM y - MMMM y'
                            },
                            'Hmv': {
                                'H': 'H:mm-H:mm v',
                                'm': 'H:mm-H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm-HH:mm',
                                'm': 'HH:mm-HH:mm'
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
                            'intervalFormatFallback': '{0} \u2013 {1}'
                        }
                    }
                }
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u0E44\u0E0B\u0E1B\u0E31\u0E19'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u0E23\u0E32\u0E42\u0E23\u0E15\u0E2D\u0E07\u0E01\u0E32'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E21\u0E2D\u0E23\u0E4C\u0E2A\u0E1A\u0E35'
                        },
                        'Ponape': {
                            'exemplarCity': '\u0E42\u0E1B\u0E19\u0E32\u0E40\u0E1B'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u0E1E\u0E34\u0E15\u0E41\u0E04\u0E23\u0E4C\u0E19'
                        },
                        'Palau': {
                            'exemplarCity': '\u0E1B\u0E32\u0E40\u0E25\u0E32'
                        },
                        'Auckland': {
                            'exemplarCity': '\u0E42\u0E2D\u0E04\u0E41\u0E25\u0E19\u0E14\u0E4C'
                        },
                        'Apia': {
                            'exemplarCity': '\u0E2D\u0E32\u0E1B\u0E35\u0E2D\u0E32'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u0E1F\u0E39\u0E19\u0E30\u0E1F\u0E39\u0E15\u0E35'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u0E01\u0E32\u0E25\u0E32\u0E1B\u0E32\u0E42\u0E01\u0E2A'
                        },
                        'Gambier': {
                            'exemplarCity': '\u0E41\u0E01\u0E21\u0E40\u0E1A\u0E35\u0E22\u0E23\u0E4C'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u0E01\u0E31\u0E27\u0E14\u0E31\u0E25\u0E04\u0E32\u0E19\u0E31\u0E25'
                        },
                        'Guam': {
                            'exemplarCity': '\u0E01\u0E27\u0E21'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u0E42\u0E2E\u0E42\u0E19\u0E25\u0E39\u0E25\u0E39'
                        },
                        'Wallis': {
                            'exemplarCity': '\u0E27\u0E32\u0E25\u0E25\u0E34\u0E2A'
                        },
                        'Wake': {
                            'exemplarCity': '\u0E40\u0E27\u0E01'
                        },
                        'Truk': {
                            'exemplarCity': '\u0E17\u0E23\u0E31\u0E01'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u0E15\u0E2D\u0E07\u0E01\u0E32\u0E15\u0E32\u0E1B\u0E39'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u0E15\u0E32\u0E23\u0E30\u0E27\u0E32'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u0E17\u0E32\u0E2E\u0E34\u0E15\u0E34'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u0E04\u0E34\u0E23\u0E34\u0E17\u0E34\u0E21\u0E32\u0E15\u0E35'
                        },
                        'Johnston': {
                            'exemplarCity': '\u0E08\u0E2D\u0E2B\u0E4C\u0E19\u0E2A\u0E15\u0E31\u0E19'
                        },
                        'Chatham': {
                            'exemplarCity': '\u0E41\u0E0A\u0E41\u0E17\u0E21'
                        },
                        'Easter': {
                            'exemplarCity': '\u0E2D\u0E35\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C'
                        },
                        'Efate': {
                            'exemplarCity': '\u0E40\u0E2D\u0E1F\u0E32\u0E40\u0E15'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u0E40\u0E2D\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E23\u0E35'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u0E1F\u0E32\u0E40\u0E04\u0E32\u0E42\u0E1F'
                        },
                        'Fiji': {
                            'exemplarCity': '\u0E1F\u0E34\u0E08\u0E34'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u0E04\u0E2D\u0E2A\u0E41\u0E23'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u0E04\u0E27\u0E32\u0E08\u0E32\u0E40\u0E25\u0E19'
                        },
                        'Majuro': {
                            'exemplarCity': '\u0E21\u0E32\u0E08\u0E39\u0E42\u0E23'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u0E21\u0E32\u0E23\u0E4C\u0E40\u0E04\u0E27\u0E0B\u0E31\u0E2A'
                        },
                        'Midway': {
                            'exemplarCity': '\u0E21\u0E34\u0E14\u0E40\u0E27\u0E22\u0E4C'
                        },
                        'Nauru': {
                            'exemplarCity': '\u0E19\u0E32\u0E2D\u0E39\u0E23\u0E39'
                        },
                        'Niue': {
                            'exemplarCity': '\u0E19\u0E35\u0E2D\u0E39\u0E40\u0E2D'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u0E19\u0E2D\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E4C\u0E01'
                        },
                        'Noumea': {
                            'exemplarCity': '\u0E19\u0E39\u0E40\u0E21\u0E2D\u0E32'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u0E1B\u0E32\u0E42\u0E01 \u0E1B\u0E32\u0E42\u0E01'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u0E25\u0E34\u0E19\u0E14\u0E35\u0E41\u0E21\u0E19'
                        },
                        'Hobart': {
                            'exemplarCity': '\u0E42\u0E2E\u0E1A\u0E32\u0E23\u0E4C\u0E15'
                        },
                        'Eucla': {
                            'exemplarCity': '\u0E22\u0E39\u0E04\u0E25\u0E32'
                        },
                        'Darwin': {
                            'exemplarCity': '\u0E14\u0E32\u0E23\u0E4C\u0E27\u0E34\u0E19'
                        },
                        'Sydney': {
                            'exemplarCity': '\u0E0B\u0E34\u0E14\u0E19\u0E35\u0E22\u0E4C'
                        },
                        'Perth': {
                            'exemplarCity': '\u0E40\u0E1E\u0E34\u0E34\u0E23\u0E4C\u0E17'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u0E40\u0E21\u0E25\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E19'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u0E25\u0E2D\u0E23\u0E4C\u0E14\u0E42\u0E2E\u0E27\u0E35'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u0E41\u0E2D\u0E14\u0E34\u0E40\u0E25\u0E14'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u0E1A\u0E23\u0E34\u0E2A\u0E40\u0E1A\u0E19'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u0E42\u0E1A\u0E23\u0E01\u0E40\u0E04\u0E19\u0E2E\u0E34\u0E25\u0E25\u0E4C'
                        },
                        'Currie': {
                            'exemplarCity': '\u0E04\u0E39\u0E23\u0E4C\u0E23\u0E35'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u0E21\u0E31\u0E25\u0E14\u0E35\u0E1F\u0E2A\u0E4C'
                        },
                        'Mahe': {
                            'exemplarCity': '\u0E21\u0E32\u0E40\u0E2D'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u0E41\u0E01\u0E23\u0E4C\u0E40\u0E01\u0E2D\u0E25\u0E2D\u0E07'
                        },
                        'Reunion': {
                            'exemplarCity': '\u0E40\u0E23\u0E2D\u0E39\u0E19\u0E35\u0E22\u0E07'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u0E21\u0E32\u0E42\u0E22\u0E40\u0E15'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u0E21\u0E2D\u0E23\u0E34\u0E40\u0E0A\u0E35\u0E22\u0E2A'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u0E2D\u0E31\u0E19\u0E15\u0E32\u0E19\u0E32\u0E19\u0E32\u0E23\u0E34\u0E42\u0E27'
                        },
                        'Chagos': {
                            'exemplarCity': '\u0E0A\u0E32\u0E01\u0E31\u0E2A'
                        },
                        'Christmas': {
                            'exemplarCity': '\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E21\u0E32\u0E2A'
                        },
                        'Cocos': {
                            'exemplarCity': '\u0E42\u0E04\u0E42\u0E04\u0E2A'
                        },
                        'Comoro': {
                            'exemplarCity': '\u0E42\u0E04\u0E42\u0E21\u0E42\u0E23'
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
                            'exemplarCity': '\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01'
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
                            'exemplarCity': '\u0E42\u0E23\u0E40\u0E17\u0E23\u0E32'
                        },
                        'Palmer': {
                            'exemplarCity': '\u0E1E\u0E32\u0E25\u0E4C\u0E40\u0E21\u0E2D\u0E23\u0E4C'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u0E41\u0E21\u0E04\u0E21\u0E31\u0E27\u0E42\u0E14'
                        },
                        'Vostok': {
                            'exemplarCity': '\u0E27\u0E2D\u0E2A\u0E15\u0E47\u0E2D\u0E04'
                        },
                        'Syowa': {
                            'exemplarCity': '\u0E40\u0E0B\u0E35\u0E22\u0E27\u0E32'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01\u0E43\u0E15\u0E49'
                        },
                        'Casey': {
                            'exemplarCity': '\u0E40\u0E04\u0E0B\u0E35\u0E22\u0E4C'
                        },
                        'Davis': {
                            'exemplarCity': '\u0E14\u0E32\u0E27\u0E35\u0E2A\u0E4C'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u0E14\u0E39\u0E21\u0E2D\u0E07\u0E15\u0E4C\u0E14\u0E39\u0E23\u0E4C\u0E27\u0E34\u0E25\u0E25\u0E4C'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u0E41\u0E21\u0E04\u0E04\u0E27\u0E2D\u0E23\u0E35'
                        },
                        'Mawson': {
                            'exemplarCity': '\u0E21\u0E32\u0E27\u0E4C\u0E0B\u0E31\u0E19'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u0E25\u0E2D\u0E07\u0E40\u0E22\u0E35\u0E22\u0E23\u0E4C\u0E40\u0E1A\u0E35\u0E22\u0E19'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u0E42\u0E17\u0E23\u0E2D\u0E19\u0E42\u0E15'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u0E17\u0E34\u0E2E\u0E31\u0E27\u0E19\u0E32'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u0E17\u0E31\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E22\u0E4C'
                        },
                        'Thule': {
                            'exemplarCity': '\u0E17\u0E39\u0E40\u0E25'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u0E40\u0E15\u0E01\u0E39\u0E0B\u0E34\u0E01\u0E31\u0E25\u0E1B\u0E32'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u0E2A\u0E27\u0E34\u0E1F\u0E15\u0E4C\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E23\u0E19\u0E15\u0E4C'
                        },
                        'Chicago': {
                            'exemplarCity': '\u0E0A\u0E34\u0E04\u0E32\u0E42\u0E01'
                        },
                        'Cayman': {
                            'exemplarCity': '\u0E40\u0E04\u0E22\u0E4C\u0E41\u0E21\u0E19'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u0E01\u0E32\u0E41\u0E22\u0E19'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u0E01\u0E32\u0E15\u0E32\u0E21\u0E32\u0E23\u0E4C\u0E01\u0E32'
                        },
                        'Caracas': {
                            'exemplarCity': '\u0E04\u0E32\u0E23\u0E32\u0E04\u0E31\u0E2A'
                        },
                        'Cancun': {
                            'exemplarCity': '\u0E41\u0E04\u0E19\u0E04\u0E38\u0E19'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u0E01\u0E31\u0E21\u0E1B\u0E39\u0E01\u0E23\u0E31\u0E19\u0E14\u0E35'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u0E2D\u0E48\u0E32\u0E27\u0E41\u0E04\u0E21\u0E1A\u0E23\u0E34\u0E14\u0E08\u0E4C'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u0E1A\u0E31\u0E27\u0E42\u0E19\u0E2A\u0E44\u0E2D\u0E40\u0E23\u0E2A'
                        },
                        'Boise': {
                            'exemplarCity': '\u0E1A\u0E2D\u0E22\u0E0B\u0E35'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u0E2D\u0E30\u0E0B\u0E38\u0E19\u0E0B\u0E34\u0E2D\u0E2D\u0E07'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0E2D\u0E32\u0E23\u0E39\u0E1A\u0E32'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u0E23\u0E34\u0E42\u0E2D\u0E01\u0E32\u0E25\u0E40\u0E25\u0E01\u0E2D\u0E2A'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u0E0B\u0E32\u0E19\u0E2E\u0E27\u0E19'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u0E2D\u0E39\u0E0A\u0E39\u0E40\u0E2D\u0E35\u0E22'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u0E25\u0E32\u0E23\u0E34\u0E42\u0E2D\u0E08\u0E32'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u0E0B\u0E31\u0E19\u0E25\u0E39\u0E2D\u0E34\u0E2A'
                            },
                            'Salta': {
                                'exemplarCity': '\u0E0B\u0E31\u0E25\u0E15\u0E32'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u0E17\u0E39\u0E04\u0E39\u0E41\u0E21\u0E19'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0E2D\u0E32\u0E23\u0E32\u0E01\u0E31\u0E27\u0E19\u0E32'
                        },
                        'Antigua': {
                            'exemplarCity': '\u0E41\u0E2D\u0E19\u0E15\u0E34\u0E01\u0E32'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u0E41\u0E2D\u0E07\u0E01\u0E34\u0E25\u0E25\u0E32'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u0E41\u0E2D\u0E07\u0E40\u0E04\u0E2D\u0E40\u0E23\u0E08'
                        },
                        'Adak': {
                            'exemplarCity': '\u0E40\u0E2D\u0E14\u0E31\u0E01'
                        },
                        'Bahia': {
                            'exemplarCity': '\u0E1A\u0E32\u0E40\u0E22\u0E35\u0E22'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u0E1A\u0E32\u0E40\u0E2D\u0E35\u0E22\u0E1A\u0E31\u0E19\u0E40\u0E14\u0E23\u0E31\u0E2A'
                        },
                        'Barbados': {
                            'exemplarCity': '\u0E1A\u0E32\u0E23\u0E4C\u0E40\u0E1A\u0E42\u0E14\u0E2A'
                        },
                        'Belem': {
                            'exemplarCity': '\u0E40\u0E1A\u0E40\u0E25\u0E07'
                        },
                        'Belize': {
                            'exemplarCity': '\u0E40\u0E1A\u0E25\u0E35\u0E0B'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u0E1A\u0E25\u0E31\u0E07\u0E04\u0E4C-\u0E0B\u0E32\u0E1A\u0E25\u0E2D\u0E19'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u0E1A\u0E31\u0E27\u0E27\u0E35\u0E0A\u0E15\u0E32'
                        },
                        'Bogota': {
                            'exemplarCity': '\u0E42\u0E1A\u0E42\u0E01\u0E15\u0E32'
                        },
                        'Curacao': {
                            'exemplarCity': '\u0E04\u0E39\u0E23\u0E32\u0E40\u0E0B\u0E32'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u0E14\u0E32\u0E19\u0E21\u0E32\u0E23\u0E4C\u0E01\u0E2A\u0E2E\u0E32\u0E27\u0E19\u0E4C'
                        },
                        'Dawson': {
                            'exemplarCity': '\u0E14\u0E2D\u0E27\u0E4C\u0E2A\u0E31\u0E19'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u0E14\u0E2D\u0E27\u0E4C\u0E2A\u0E31\u0E19 \u0E04\u0E23\u0E35\u0E01'
                        },
                        'Denver': {
                            'exemplarCity': '\u0E40\u0E14\u0E19\u0E40\u0E27\u0E2D\u0E23\u0E4C'
                        },
                        'Detroit': {
                            'exemplarCity': '\u0E14\u0E35\u0E17\u0E23\u0E2D\u0E22\u0E15\u0E4C'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u0E40\u0E2D\u0E23\u0E4C\u0E42\u0E21\u0E0B\u0E35\u0E42\u0E22'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0E27\u0E34\u0E19\u0E40\u0E0B\u0E19\u0E40\u0E19\u0E2A, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u0E1B\u0E35\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E2A\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E01, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u0E40\u0E17\u0E25\u0E25\u0E4C\u0E0B\u0E34\u0E15\u0E35, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            },
                            'Knox': {
                                'exemplarCity': '\u0E19\u0E2D\u0E01\u0E0B\u0E4C, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0E27\u0E34\u0E19\u0E32\u0E41\u0E21\u0E04, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            },
                            'Marengo': {
                                'exemplarCity': '\u0E21\u0E32\u0E40\u0E23\u0E07\u0E42\u0E01, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0E27\u0E35\u0E40\u0E27\u0E22\u0E4C, \u0E2D\u0E34\u0E19\u0E14\u0E35\u0E41\u0E2D\u0E19\u0E32'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22\u0E41\u0E19\u0E42\u0E1E\u0E25\u0E34\u0E2A'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0E2D\u0E34\u0E19\u0E39\u0E27\u0E34\u0E01'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0E2D\u0E35\u0E01\u0E27\u0E32\u0E25\u0E34\u0E15'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u0E08\u0E32\u0E40\u0E21\u0E01\u0E32'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u0E08\u0E39\u0E08\u0E34\u0E27'
                        },
                        'Juneau': {
                            'exemplarCity': '\u0E08\u0E39\u0E42\u0E19'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u0E40\u0E22\u0E25\u0E42\u0E25\u0E27\u0E4C\u0E44\u0E19\u0E1F\u0E4C'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u0E22\u0E32\u0E01\u0E39\u0E17\u0E31\u0E15'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0E27\u0E34\u0E19\u0E19\u0E34\u0E40\u0E1E\u0E01'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0E44\u0E27\u0E15\u0E4C\u0E2E\u0E2D\u0E23\u0E4C\u0E2A'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u0E41\u0E27\u0E19\u0E04\u0E39\u0E40\u0E27\u0E2D\u0E23\u0E4C'
                        },
                        'Tortola': {
                            'exemplarCity': '\u0E15\u0E2D\u0E23\u0E4C\u0E42\u0E15\u0E25\u0E32'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u0E04\u0E23\u0E32\u0E40\u0E25\u0E19\u0E14\u0E34\u0E08\u0E04\u0E4C'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u0E21\u0E2D\u0E19\u0E15\u0E34\u0E40\u0E0B\u0E25\u0E42\u0E25, \u0E40\u0E04\u0E19\u0E15\u0E31\u0E01\u0E01\u0E35'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0E2E\u0E32\u0E27\u0E32\u0E19\u0E32'
                        },
                        'Halifax': {
                            'exemplarCity': '\u0E41\u0E2E\u0E25\u0E34\u0E41\u0E1F\u0E01\u0E0B\u0E4C'
                        },
                        'Guyana': {
                            'exemplarCity': '\u0E01\u0E32\u0E22\u0E2D\u0E32\u0E19\u0E32'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u0E01\u0E31\u0E27\u0E22\u0E32\u0E01\u0E34\u0E25'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u0E01\u0E31\u0E27\u0E40\u0E15\u0E21\u0E32\u0E25\u0E32'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u0E01\u0E27\u0E32\u0E40\u0E14\u0E2D\u0E25\u0E39\u0E1B'
                        },
                        'Grenada': {
                            'exemplarCity': '\u0E40\u0E01\u0E23\u0E19\u0E32\u0E14\u0E32'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u0E41\u0E01\u0E23\u0E19\u0E14\u0E4C\u0E40\u0E15\u0E34\u0E23\u0E4C\u0E01'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u0E01\u0E39\u0E2A\u0E40\u0E1A\u0E22\u0E4C'
                        },
                        'Godthab': {
                            'exemplarCity': '\u0E01\u0E2D\u0E14\u0E41\u0E18\u0E1A'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u0E41\u0E01\u0E25\u0E0B\u0E40\u0E1A\u0E22\u0E4C'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u0E1F\u0E2D\u0E23\u0E4C\u0E15\u0E32\u0E40\u0E25\u0E0B\u0E32'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u0E40\u0E2D\u0E25\u0E0B\u0E31\u0E25\u0E27\u0E32\u0E14\u0E2D\u0E23\u0E4C'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u0E40\u0E2D\u0E23\u0E39\u0E40\u0E19\u0E40\u0E1B'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u0E40\u0E2D\u0E14\u0E21\u0E31\u0E19\u0E15\u0E31\u0E19'
                        },
                        'Dominica': {
                            'exemplarCity': '\u0E42\u0E14\u0E21\u0E34\u0E19\u0E34\u0E01\u0E32'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u0E0A\u0E35\u0E27\u0E32\u0E27\u0E32'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u0E04\u0E2D\u0E23\u0E31\u0E25\u0E2E\u0E32\u0E23\u0E4C\u0E40\u0E1A\u0E2D\u0E23\u0E4C'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u0E04\u0E2D\u0E23\u0E4C\u0E42\u0E14\u0E1A\u0E32'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u0E04\u0E2D\u0E2A\u0E15\u0E32\u0E23\u0E34\u0E01\u0E32'
                        },
                        'Creston': {
                            'exemplarCity': '\u0E40\u0E04\u0E23\u0E2A\u0E15\u0E31\u0E19'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u0E01\u0E38\u0E22\u0E32\u0E1A\u0E32'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u0E25\u0E32\u0E1B\u0E32\u0E0B'
                        },
                        'Lima': {
                            'exemplarCity': '\u0E25\u0E34\u0E21\u0E32'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u0E25\u0E2D\u0E2A\u0E41\u0E2D\u0E07\u0E40\u0E08\u0E25\u0E34\u0E2A'
                        },
                        'Louisville': {
                            'exemplarCity': '\u0E25\u0E39\u0E2A\u0E4C\u0E27\u0E34\u0E25\u0E25\u0E4C'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u0E42\u0E25\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E1E\u0E23\u0E34\u0E19\u0E0B\u0E4C \u0E04\u0E27\u0E2D\u0E40\u0E15\u0E2D\u0E23\u0E4C'
                        },
                        'Maceio': {
                            'exemplarCity': '\u0E21\u0E32\u0E40\u0E0B\u0E42\u0E2D'
                        },
                        'Managua': {
                            'exemplarCity': '\u0E21\u0E32\u0E19\u0E32\u0E01\u0E31\u0E27'
                        },
                        'Manaus': {
                            'exemplarCity': '\u0E21\u0E32\u0E40\u0E19\u0E32\u0E2A\u0E4C'
                        },
                        'Marigot': {
                            'exemplarCity': '\u0E21\u0E32\u0E23\u0E34\u0E42\u0E01\u0E15\u0E4C'
                        },
                        'Martinique': {
                            'exemplarCity': '\u0E21\u0E32\u0E23\u0E4C\u0E15\u0E34\u0E19\u0E35\u0E01'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u0E21\u0E32\u0E15\u0E32\u0E42\u0E21\u0E23\u0E2D\u0E2A'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u0E21\u0E32\u0E0B\u0E32\u0E17\u0E25\u0E32\u0E19'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u0E40\u0E21\u0E19\u0E14\u0E39\u0E0B\u0E32'
                        },
                        'Menominee': {
                            'exemplarCity': '\u0E40\u0E21\u0E42\u0E19\u0E21\u0E34\u0E19\u0E35'
                        },
                        'Merida': {
                            'exemplarCity': '\u0E40\u0E21\u0E23\u0E35\u0E14\u0E32'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u0E40\u0E21\u0E17\u0E25\u0E32\u0E01\u0E32\u0E15\u0E25\u0E30'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u0E40\u0E21\u0E47\u0E01\u0E0B\u0E34\u0E42\u0E01\u0E0B\u0E34\u0E15\u0E35'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u0E21\u0E35\u0E40\u0E01\u0E2D\u0E25\u0E07'
                        },
                        'Moncton': {
                            'exemplarCity': '\u0E21\u0E2D\u0E07\u0E15\u0E31\u0E19'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u0E21\u0E2D\u0E19\u0E40\u0E15\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u0E21\u0E2D\u0E19\u0E40\u0E15\u0E27\u0E34\u0E40\u0E14\u0E42\u0E2D'
                        },
                        'Montreal': {
                            'exemplarCity': '\u0E21\u0E2D\u0E19\u0E17\u0E23\u0E35\u0E2D\u0E31\u0E25'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u0E21\u0E2D\u0E19\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E23\u0E31\u0E15'
                        },
                        'Nassau': {
                            'exemplarCity': '\u0E41\u0E19\u0E2A\u0E0B\u0E2D'
                        },
                        'New_York': {
                            'exemplarCity': '\u0E19\u0E34\u0E27\u0E22\u0E2D\u0E23\u0E4C\u0E01'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u0E19\u0E34\u0E1B\u0E34\u0E01\u0E2D\u0E19'
                        },
                        'Nome': {
                            'exemplarCity': '\u0E19\u0E2D\u0E21'
                        },
                        'Noronha': {
                            'exemplarCity': '\u0E42\u0E19\u0E23\u0E2D\u0E19\u0E2E\u0E32'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u0E42\u0E1A\u0E25\u0E32\u0E2B\u0E4C, \u0E19\u0E2D\u0E23\u0E4C\u0E17\u0E14\u0E32\u0E42\u0E04\u0E15\u0E32'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u0E19\u0E34\u0E27\u0E40\u0E0B\u0E40\u0E25\u0E21, \u0E19\u0E2D\u0E23\u0E4C\u0E17\u0E14\u0E32\u0E42\u0E04\u0E15\u0E32'
                            },
                            'Center': {
                                'exemplarCity': '\u0E40\u0E0B\u0E19\u0E40\u0E15\u0E2D\u0E23\u0E4C, \u0E19\u0E2D\u0E23\u0E4C\u0E17\u0E14\u0E32\u0E42\u0E04\u0E15\u0E32'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u0E42\u0E2D\u0E08\u0E34\u0E19\u0E32\u0E01\u0E32'
                        },
                        'Panama': {
                            'exemplarCity': '\u0E1B\u0E32\u0E19\u0E32\u0E21\u0E32'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u0E1E\u0E32\u0E07\u0E19\u0E35\u0E17\u0E31\u0E07'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u0E1B\u0E32\u0E23\u0E32\u0E21\u0E32\u0E23\u0E34\u0E42\u0E1A'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u0E1F\u0E34\u0E19\u0E34\u0E01\u0E0B\u0E4C'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u0E1B\u0E2D\u0E23\u0E4C\u0E42\u0E15\u0E41\u0E1B\u0E23\u0E07\u0E0B\u0E4C'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u0E1E\u0E2D\u0E23\u0E4C\u0E17\u0E2D\u0E2D\u0E1F\u0E2A\u0E40\u0E1B\u0E19'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u0E1B\u0E2D\u0E23\u0E4C\u0E15\u0E39\u0E40\u0E27\u0E25\u0E42\u0E22'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u0E40\u0E1B\u0E2D\u0E42\u0E15\u0E23\u0E34\u0E42\u0E01'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u0E40\u0E23\u0E19\u0E19\u0E35\u0E48\u0E23\u0E34\u0E40\u0E27\u0E2D\u0E23\u0E4C'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u0E41\u0E23\u0E07\u0E01\u0E34\u0E19\u0E2D\u0E34\u0E19\u0E40\u0E25\u0E47\u0E15'
                        },
                        'Recife': {
                            'exemplarCity': '\u0E40\u0E23\u0E0B\u0E35\u0E40\u0E1F'
                        },
                        'Regina': {
                            'exemplarCity': '\u0E23\u0E34\u0E44\u0E08\u0E19\u0E32'
                        },
                        'Resolute': {
                            'exemplarCity': '\u0E40\u0E23\u0E42\u0E0B\u0E25\u0E39\u0E17'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u0E23\u0E35\u0E42\u0E2D\u0E1A\u0E23\u0E31\u0E07\u0E42\u0E01'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u0E0B\u0E32\u0E19\u0E15\u0E32\u0E2D\u0E34\u0E0B\u0E32\u0E40\u0E1A\u0E25'
                        },
                        'Santarem': {
                            'exemplarCity': '\u0E0B\u0E31\u0E19\u0E15\u0E32\u0E40\u0E23\u0E21'
                        },
                        'Santiago': {
                            'exemplarCity': '\u0E0B\u0E31\u0E19\u0E15\u0E34\u0E2D\u0E32\u0E42\u0E01'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0E0B\u0E32\u0E19\u0E42\u0E15 \u0E42\u0E14\u0E21\u0E34\u0E07\u0E42\u0E01'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u0E40\u0E0B\u0E32\u0E40\u0E1B\u0E32\u0E25\u0E39'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u0E2A\u0E01\u0E2D\u0E40\u0E23\u0E2A\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E14\u0E4C'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u0E0A\u0E34\u0E1B\u0E23\u0E47\u0E2D\u0E01'
                        },
                        'Sitka': {
                            'exemplarCity': '\u0E0B\u0E34\u0E15\u0E01\u0E32'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E1A\u0E32\u0E23\u0E4C\u0E40\u0E18\u0E40\u0E25\u0E21\u0E35'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E08\u0E2D\u0E19\u0E2A\u0E4C'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E04\u0E34\u0E15\u0E2A\u0E4C'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E25\u0E39\u0E40\u0E0B\u0E35\u0E22'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E42\u0E18\u0E21\u0E31\u0E2A'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E27\u0E34\u0E19\u0E40\u0E0B\u0E19\u0E15\u0E4C'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u0E40\u0E0B\u0E32\u0E17\u0E4C \u0E08\u0E2D\u0E23\u0E4C\u0E40\u0E08\u0E35\u0E22'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u0E40\u0E23\u0E04\u0E22\u0E32\u0E27\u0E34\u0E01'
                        },
                        'Stanley': {
                            'exemplarCity': '\u0E2A\u0E41\u0E15\u0E19\u0E25\u0E35\u0E22\u0E4C'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u0E40\u0E0B\u0E19\u0E15\u0E4C\u0E40\u0E2E\u0E40\u0E25\u0E19\u0E32'
                        },
                        'Azores': {
                            'exemplarCity': '\u0E2D\u0E32\u0E0B\u0E2D\u0E40\u0E23\u0E2A'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E21\u0E34\u0E27\u0E14\u0E32'
                        },
                        'Canary': {
                            'exemplarCity': '\u0E04\u0E30\u0E40\u0E19\u0E23\u0E35'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u0E40\u0E04\u0E1B\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E14'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u0E41\u0E1F\u0E42\u0E23'
                        },
                        'Madeira': {
                            'exemplarCity': '\u0E21\u0E32\u0E40\u0E14\u0E23\u0E32'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u0E2D\u0E2D\u0E2A\u0E42\u0E25'
                        },
                        'Moscow': {
                            'exemplarCity': '\u0E21\u0E2D\u0E2A\u0E42\u0E01'
                        },
                        'Monaco': {
                            'exemplarCity': '\u0E42\u0E21\u0E19\u0E32\u0E42\u0E01'
                        },
                        'Minsk': {
                            'exemplarCity': '\u0E21\u0E34\u0E19\u0E2A\u0E01\u0E4C'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u0E21\u0E32\u0E23\u0E35\u0E2E\u0E32\u0E21\u0E19\u0E4C'
                        },
                        'Malta': {
                            'exemplarCity': '\u0E21\u0E2D\u0E25\u0E15\u0E32'
                        },
                        'Madrid': {
                            'exemplarCity': '\u0E21\u0E32\u0E14\u0E23\u0E34\u0E14'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u0E25\u0E31\u0E01\u0E40\u0E0B\u0E21\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E01'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29'
                            },
                            'exemplarCity': '\u0E25\u0E2D\u0E19\u0E14\u0E2D\u0E19'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u0E25\u0E39\u0E1A\u0E25\u0E34\u0E22\u0E32\u0E19\u0E32'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u0E25\u0E34\u0E2A\u0E1A\u0E2D\u0E19'
                        },
                        'Kiev': {
                            'exemplarCity': '\u0E40\u0E04\u0E35\u0E22\u0E1F'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u0E04\u0E32\u0E25\u0E34\u0E19\u0E34\u0E07\u0E01\u0E23\u0E32\u0E14'
                        },
                        'Jersey': {
                            'exemplarCity': '\u0E40\u0E08\u0E2D\u0E23\u0E4C\u0E0B\u0E35\u0E22\u0E4C'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u0E2D\u0E34\u0E2A\u0E15\u0E31\u0E19\u0E1A\u0E39\u0E25'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u0E40\u0E01\u0E32\u0E30\u0E41\u0E21\u0E19'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u0E1A\u0E39\u0E04\u0E32\u0E40\u0E23\u0E2A'
                        },
                        'Brussels': {
                            'exemplarCity': '\u0E1A\u0E23\u0E31\u0E2A\u0E40\u0E0B\u0E25\u0E2A\u0E4C'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u0E1A\u0E23\u0E32\u0E15\u0E34\u0E2A\u0E25\u0E32\u0E27\u0E32'
                        },
                        'Berlin': {
                            'exemplarCity': '\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E25\u0E34\u0E19'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u0E40\u0E1A\u0E25\u0E40\u0E01\u0E23\u0E14'
                        },
                        'Athens': {
                            'exemplarCity': '\u0E40\u0E2D\u0E40\u0E18\u0E19\u0E2A\u0E4C'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0E2D\u0E31\u0E19\u0E14\u0E2D\u0E23\u0E4C\u0E23\u0E32'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u0E2D\u0E31\u0E21\u0E2A\u0E40\u0E15\u0E2D\u0E14\u0E31\u0E21'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u0E0B\u0E34\u0E21\u0E40\u0E1F\u0E2D\u0E42\u0E23\u0E42\u0E1B\u0E25'
                        },
                        'Skopje': {
                            'exemplarCity': '\u0E2A\u0E42\u0E01\u0E40\u0E1B\u0E35\u0E22'
                        },
                        'Sofia': {
                            'exemplarCity': '\u0E42\u0E0B\u0E40\u0E1F\u0E35\u0E22'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u0E2A\u0E15\u0E2D\u0E01\u0E42\u0E2E\u0E25\u0E4C\u0E21'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u0E17\u0E32\u0E25\u0E25\u0E34\u0E19\u0E19\u0E4C'
                        },
                        'Tirane': {
                            'exemplarCity': '\u0E15\u0E34\u0E23\u0E32\u0E19\u0E32'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u0E2D\u0E31\u0E0B\u0E42\u0E01\u0E23\u0E47\u0E2D\u0E14'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0E27\u0E32\u0E14\u0E38\u0E0B'
                        },
                        'Zurich': {
                            'exemplarCity': '\u0E0B\u0E39\u0E23\u0E34\u0E04'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u0E0B\u0E32\u0E42\u0E1B\u0E42\u0E23\u0E0B\u0E35'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u0E0B\u0E32\u0E40\u0E01\u0E23\u0E47\u0E1A'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u0E27\u0E2D\u0E23\u0E4C\u0E0B\u0E2D'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u0E27\u0E2D\u0E25\u0E42\u0E01\u0E01\u0E23\u0E32\u0E14'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u0E27\u0E34\u0E25\u0E19\u0E35\u0E2D\u0E38\u0E2A'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0E40\u0E27\u0E35\u0E22\u0E19\u0E19\u0E32'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0E27\u0E32\u0E15\u0E34\u0E01\u0E31\u0E19'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u0E0B\u0E32\u0E23\u0E32\u0E40\u0E22\u0E42\u0E27'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u0E0B\u0E32\u0E19\u0E21\u0E32\u0E23\u0E35\u0E42\u0E19'
                        },
                        'Samara': {
                            'exemplarCity': '\u0E0B\u0E32\u0E21\u0E32\u0E23\u0E32'
                        },
                        'Rome': {
                            'exemplarCity': '\u0E42\u0E23\u0E21'
                        },
                        'Riga': {
                            'exemplarCity': '\u0E23\u0E34\u0E01\u0E32'
                        },
                        'Prague': {
                            'exemplarCity': '\u0E1B\u0E23\u0E32\u0E01'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u0E1E\u0E2D\u0E14\u0E01\u0E2D\u0E23\u0E35\u0E15\u0E0B\u0E32'
                        },
                        'Paris': {
                            'exemplarCity': '\u0E1B\u0E32\u0E23\u0E35\u0E2A'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0E40\u0E2E\u0E25\u0E0B\u0E34\u0E07\u0E01\u0E34'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u0E40\u0E01\u0E34\u0E23\u0E4C\u0E19\u0E0B\u0E35\u0E22\u0E4C'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u0E22\u0E34\u0E1A\u0E23\u0E2D\u0E25\u0E15\u0E32\u0E23\u0E4C'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E44\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E19\u0E14\u0E4C'
                            },
                            'exemplarCity': '\u0E14\u0E31\u0E1A\u0E1A\u0E25\u0E34\u0E19'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u0E42\u0E04\u0E40\u0E1B\u0E19\u0E40\u0E2E\u0E40\u0E01\u0E19'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u0E04\u0E35\u0E0A\u0E35\u0E40\u0E19\u0E32'
                        },
                        'Busingen': {
                            'exemplarCity': '\u0E1A\u0E38\u0E2A\u0E0B\u0E34\u0E07\u0E40\u0E07\u0E47\u0E19'
                        },
                        'Budapest': {
                            'exemplarCity': '\u0E1A\u0E39\u0E14\u0E32\u0E40\u0E1B\u0E2A'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u0E25\u0E35\u0E40\u0E1A\u0E23\u0E2D\u0E27\u0E34\u0E25'
                        },
                        'Lagos': {
                            'exemplarCity': '\u0E25\u0E32\u0E01\u0E2D\u0E2A'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u0E01\u0E34\u0E19\u0E0A\u0E32\u0E0B\u0E32'
                        },
                        'Kigali': {
                            'exemplarCity': '\u0E04\u0E34\u0E01\u0E32\u0E25\u0E35'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u0E04\u0E32\u0E23\u0E4C\u0E17\u0E39\u0E21'
                        },
                        'Kampala': {
                            'exemplarCity': '\u0E04\u0E31\u0E21\u0E1E\u0E32\u0E25\u0E32'
                        },
                        'Juba': {
                            'exemplarCity': '\u0E08\u0E39\u0E1A\u0E32'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u0E42\u0E08\u0E2E\u0E31\u0E19\u0E40\u0E19\u0E2A\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E01'
                        },
                        'Harare': {
                            'exemplarCity': '\u0E2E\u0E32\u0E23\u0E32\u0E40\u0E23'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u0E01\u0E32\u0E42\u0E1A\u0E42\u0E23\u0E40\u0E19'
                        },
                        'Freetown': {
                            'exemplarCity': '\u0E1F\u0E23\u0E35\u0E17\u0E32\u0E27\u0E19\u0E4C'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u0E40\u0E2D\u0E25\u0E44\u0E2D\u0E22\u0E4C\u0E2D\u0E38\u0E07'
                        },
                        'Douala': {
                            'exemplarCity': '\u0E14\u0E39\u0E2D\u0E32\u0E25\u0E32'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u0E08\u0E34\u0E1A\u0E39\u0E15\u0E35'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u0E14\u0E32\u0E23\u0E4C\u0E40\u0E2D\u0E2A\u0E0B\u0E32\u0E25\u0E32\u0E21'
                        },
                        'Dakar': {
                            'exemplarCity': '\u0E14\u0E32\u0E01\u0E32\u0E23\u0E4C'
                        },
                        'Banjul': {
                            'exemplarCity': '\u0E1A\u0E31\u0E19\u0E08\u0E39\u0E25'
                        },
                        'Bangui': {
                            'exemplarCity': '\u0E1A\u0E31\u0E07\u0E01\u0E35'
                        },
                        'Bamako': {
                            'exemplarCity': '\u0E1A\u0E32\u0E21\u0E32\u0E42\u0E01'
                        },
                        'Asmera': {
                            'exemplarCity': '\u0E41\u0E2D\u0E2A\u0E21\u0E32\u0E23\u0E32'
                        },
                        'Malabo': {
                            'exemplarCity': '\u0E21\u0E32\u0E25\u0E32\u0E42\u0E1A'
                        },
                        'Maputo': {
                            'exemplarCity': '\u0E21\u0E32\u0E1B\u0E39\u0E42\u0E15'
                        },
                        'Maseru': {
                            'exemplarCity': '\u0E21\u0E32\u0E40\u0E0B\u0E23\u0E39'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u0E2D\u0E31\u0E21\u0E1A\u0E32\u0E1A\u0E32\u0E40\u0E19'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u0E42\u0E21\u0E01\u0E32\u0E14\u0E34\u0E0A\u0E39'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u0E21\u0E31\u0E19\u0E42\u0E23\u0E40\u0E27\u0E35\u0E22'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u0E44\u0E19\u0E42\u0E23\u0E40\u0E1A\u0E35\u0E22'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u0E40\u0E2D\u0E47\u0E19\u0E08\u0E32\u0E40\u0E21\u0E19\u0E32'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0E27\u0E34\u0E19\u0E14\u0E4C\u0E2E\u0E38\u0E01'
                        },
                        'Tunis': {
                            'exemplarCity': '\u0E15\u0E39\u0E19\u0E34\u0E2A'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u0E15\u0E23\u0E35\u0E42\u0E1B\u0E25\u0E35'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u0E40\u0E0B\u0E32\u0E15\u0E39\u0E40\u0E21'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u0E1B\u0E2D\u0E23\u0E4C\u0E42\u0E15-\u0E42\u0E19\u0E42\u0E27'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u0E27\u0E32\u0E01\u0E32\u0E14\u0E39\u0E01\u0E39'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u0E19\u0E39\u0E41\u0E2D\u0E01\u0E0A\u0E2D\u0E15'
                        },
                        'Niamey': {
                            'exemplarCity': '\u0E19\u0E35\u0E2D\u0E32\u0E40\u0E21\u0E22\u0E4C'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u0E25\u0E39\u0E0B\u0E32\u0E01\u0E32'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u0E25\u0E39\u0E1A\u0E31\u0E21\u0E1A\u0E32\u0E0A\u0E34'
                        },
                        'Luanda': {
                            'exemplarCity': '\u0E25\u0E39\u0E2D\u0E31\u0E19\u0E14\u0E32'
                        },
                        'Lome': {
                            'exemplarCity': '\u0E42\u0E25\u0E40\u0E21'
                        },
                        'Conakry': {
                            'exemplarCity': '\u0E42\u0E01\u0E19\u0E32\u0E01\u0E23\u0E35'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u0E40\u0E0B\u0E27\u0E15\u0E32'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u0E04\u0E32\u0E2A\u0E0B\u0E32\u0E1A\u0E25\u0E32\u0E07\u0E01\u0E49\u0E32'
                        },
                        'Cairo': {
                            'exemplarCity': '\u0E44\u0E04\u0E42\u0E23'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u0E1A\u0E39\u0E08\u0E38\u0E21\u0E1A\u0E39\u0E23\u0E32'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u0E1A\u0E23\u0E32\u0E0B\u0E0B\u0E32\u0E27\u0E34\u0E25'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u0E41\u0E1A\u0E25\u0E19\u0E44\u0E17\u0E23\u0E4C'
                        },
                        'Bissau': {
                            'exemplarCity': '\u0E1A\u0E34\u0E2A\u0E40\u0E0B\u0E32'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0E2D\u0E32\u0E1A\u0E35\u0E08\u0E32\u0E19'
                        },
                        'Accra': {
                            'exemplarCity': '\u0E2D\u0E31\u0E01\u0E01\u0E23\u0E32'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0E41\u0E2D\u0E14\u0E14\u0E34\u0E2A\u0E2D\u0E32\u0E1A\u0E32\u0E1A\u0E32'
                        },
                        'Algiers': {
                            'exemplarCity': '\u0E41\u0E2D\u0E25\u0E40\u0E08\u0E35\u0E22\u0E23\u0E4C'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49'
                        },
                        'Seoul': {
                            'exemplarCity': '\u0E42\u0E0B\u0E25'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u0E0B\u0E32\u0E21\u0E32\u0E23\u0E4C\u0E01\u0E32\u0E19\u0E14\u0E4C'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u0E0B\u0E32\u0E04\u0E32\u0E25\u0E34\u0E19'
                        },
                        'Saigon': {
                            'exemplarCity': '\u0E19\u0E04\u0E23\u0E42\u0E2E\u0E08\u0E34\u0E21\u0E34\u0E19\u0E2B\u0E4C'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u0E23\u0E34\u0E22\u0E32\u0E23\u0E4C\u0E14'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u0E22\u0E48\u0E32\u0E07\u0E01\u0E38\u0E49\u0E07'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u0E44\u0E04\u0E0B\u0E35\u0E25\u0E2D\u0E23\u0E4C\u0E14\u0E32'
                        },
                        'Qatar': {
                            'exemplarCity': '\u0E01\u0E32\u0E15\u0E32\u0E23\u0E4C'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u0E40\u0E1B\u0E35\u0E22\u0E07\u0E22\u0E32\u0E07'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u0E1E\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E22\u0E19\u0E31\u0E01'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u0E1E\u0E19\u0E21\u0E40\u0E1B\u0E0D'
                        },
                        'Oral': {
                            'exemplarCity': '\u0E2D\u0E2D\u0E23\u0E31\u0E25'
                        },
                        'Omsk': {
                            'exemplarCity': '\u0E42\u0E2D\u0E21\u0E2A\u0E01\u0E4C'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u0E42\u0E19\u0E42\u0E27\u0E0B\u0E34\u0E1A\u0E34\u0E23\u0E4C\u0E2A\u0E01\u0E4C'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u0E41\u0E1A\u0E01\u0E41\u0E14\u0E14'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u0E09\u0E07\u0E0A\u0E34\u0E48\u0E07'
                        },
                        'Colombo': {
                            'exemplarCity': '\u0E42\u0E04\u0E25\u0E31\u0E21\u0E42\u0E1A'
                        },
                        'Damascus': {
                            'exemplarCity': '\u0E14\u0E32\u0E21\u0E31\u0E2A\u0E01\u0E31\u0E2A'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u0E14\u0E32\u0E01\u0E32'
                        },
                        'Dili': {
                            'exemplarCity': '\u0E14\u0E34\u0E25\u0E35'
                        },
                        'Dubai': {
                            'exemplarCity': '\u0E14\u0E39\u0E44\u0E1A'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u0E14\u0E39\u0E0A\u0E32\u0E19\u0E40\u0E1A'
                        },
                        'Gaza': {
                            'exemplarCity': '\u0E01\u0E32\u0E0B\u0E32'
                        },
                        'Harbin': {
                            'exemplarCity': '\u0E2E\u0E32\u0E23\u0E4C\u0E1A\u0E34\u0E19'
                        },
                        'Hebron': {
                            'exemplarCity': '\u0E40\u0E2E\u0E1A\u0E23\u0E2D\u0E19'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u0E2E\u0E48\u0E2D\u0E07\u0E01\u0E07'
                        },
                        'Hovd': {
                            'exemplarCity': '\u0E2E\u0E2D\u0E1F\u0E14\u0E4C'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0E2D\u0E35\u0E23\u0E4C\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u0E08\u0E32\u0E01\u0E32\u0E23\u0E4C\u0E15\u0E32'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u0E08\u0E32\u0E22\u0E32\u0E1B\u0E38\u0E23\u0E30'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u0E2D\u0E39\u0E25\u0E32\u0E19\u0E1A\u0E32\u0E15\u0E2D\u0E23\u0E4C'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u0E2D\u0E38\u0E23\u0E38\u0E21\u0E0A\u0E35'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u0E2D\u0E38\u0E2A\u0E15\u0E4C\u0E40\u0E19\u0E23\u0E32'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0E40\u0E27\u0E35\u0E22\u0E07\u0E08\u0E31\u0E19\u0E17\u0E19\u0E4C'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0E27\u0E25\u0E32\u0E14\u0E34\u0E42\u0E27\u0E2A\u0E15\u0E47\u0E2D\u0E01'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u0E22\u0E32\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u0E22\u0E35\u0E04\u0E32\u0E40\u0E15\u0E2D\u0E23\u0E34\u0E19\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E01'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u0E40\u0E22\u0E40\u0E23\u0E27\u0E32\u0E19'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u0E42\u0E15\u0E40\u0E01\u0E35\u0E22\u0E27'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u0E17\u0E34\u0E21\u0E1E\u0E39'
                        },
                        'Tehran': {
                            'exemplarCity': '\u0E40\u0E15\u0E2B\u0E30\u0E23\u0E32\u0E19'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u0E17\u0E1A\u0E34\u0E25\u0E34\u0E0B\u0E34'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u0E17\u0E32\u0E0A\u0E40\u0E04\u0E19\u0E15\u0E4C'
                        },
                        'Taipei': {
                            'exemplarCity': '\u0E44\u0E17\u0E40\u0E1B'
                        },
                        'Singapore': {
                            'exemplarCity': '\u0E2A\u0E34\u0E07\u0E04\u0E42\u0E1B\u0E23\u0E4C'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u0E40\u0E22\u0E23\u0E39\u0E0B\u0E32\u0E40\u0E25\u0E21'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0E2D\u0E32\u0E0A\u0E01\u0E32\u0E1A\u0E31\u0E15'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0E2D\u0E31\u0E04\u0E42\u0E17\u0E1A\u0E35'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0E2D\u0E31\u0E04\u0E15\u0E32\u0E2D\u0E39'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0E2D\u0E32\u0E19\u0E32\u0E14\u0E35\u0E23\u0E4C'
                        },
                        'Amman': {
                            'exemplarCity': '\u0E2D\u0E31\u0E21\u0E21\u0E32\u0E19'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0E2D\u0E31\u0E25\u0E21\u0E32\u0E15\u0E35'
                        },
                        'Aden': {
                            'exemplarCity': '\u0E40\u0E2D\u0E40\u0E14\u0E19'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u0E1A\u0E32\u0E2B\u0E4C\u0E40\u0E23\u0E19'
                        },
                        'Baku': {
                            'exemplarCity': '\u0E1A\u0E32\u0E01\u0E39'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E'
                        },
                        'Beirut': {
                            'exemplarCity': '\u0E40\u0E1A\u0E23\u0E38\u0E15'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u0E1A\u0E34\u0E0A\u0E40\u0E04\u0E01'
                        },
                        'Brunei': {
                            'exemplarCity': '\u0E1A\u0E23\u0E39\u0E44\u0E19'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u0E42\u0E01\u0E25\u0E01\u0E32\u0E15\u0E32'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u0E0A\u0E2D\u0E22\u0E1A\u0E32\u0E25\u0E0B\u0E32\u0E19'
                        },
                        'Kabul': {
                            'exemplarCity': '\u0E04\u0E32\u0E1A\u0E39\u0E25'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u0E04\u0E32\u0E21\u0E0A\u0E31\u0E15\u0E01\u0E32'
                        },
                        'Karachi': {
                            'exemplarCity': '\u0E01\u0E32\u0E23\u0E32\u0E08\u0E35'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u0E01\u0E31\u0E0A\u0E01\u0E32\u0E23\u0E4C'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u0E01\u0E32\u0E15\u0E21\u0E31\u0E19\u0E14\u0E38'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u0E2E\u0E31\u0E19\u0E14\u0E37\u0E22\u0E01\u0E32'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u0E04\u0E23\u0E31\u0E2A\u0E42\u0E19\u0E22\u0E32\u0E23\u0E4C\u0E2A\u0E01\u0E4C'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u0E01\u0E31\u0E27\u0E25\u0E32\u0E25\u0E31\u0E21\u0E40\u0E1B\u0E2D\u0E23\u0E4C'
                        },
                        'Kuching': {
                            'exemplarCity': '\u0E01\u0E39\u0E0A\u0E34\u0E07'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u0E04\u0E39\u0E40\u0E27\u0E15'
                        },
                        'Macau': {
                            'exemplarCity': '\u0E21\u0E32\u0E40\u0E01\u0E4A\u0E32'
                        },
                        'Magadan': {
                            'exemplarCity': '\u0E21\u0E32\u0E01\u0E32\u0E14\u0E32\u0E19'
                        },
                        'Makassar': {
                            'exemplarCity': '\u0E21\u0E32\u0E01\u0E31\u0E2A\u0E0B\u0E32\u0E23\u0E4C'
                        },
                        'Manila': {
                            'exemplarCity': '\u0E21\u0E30\u0E19\u0E34\u0E25\u0E32'
                        },
                        'Muscat': {
                            'exemplarCity': '\u0E21\u0E31\u0E2A\u0E01\u0E31\u0E15'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u0E19\u0E34\u0E42\u0E04\u0E40\u0E0B\u0E35\u0E22'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u0E42\u0E19\u0E42\u0E27\u0E04\u0E38\u0E0B\u0E40\u0E19\u0E15\u0E2A\u0E04\u0E4C'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E0B\u0E32\u0E21\u0E31\u0E27',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E0B\u0E32\u0E21\u0E31\u0E27',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E0B\u0E32\u0E21\u0E31\u0E27'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E0B\u0E32\u0E21\u0E32\u0E23\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E0B\u0E32\u0E21\u0E32\u0E23\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E0B\u0E32\u0E21\u0E32\u0E23\u0E32'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E0B\u0E32\u0E04\u0E32\u0E25\u0E34\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E0B\u0E32\u0E04\u0E32\u0E25\u0E34\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E0B\u0E32\u0E04\u0E32\u0E25\u0E34\u0E19'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E23\u0E18\u0E35\u0E23\u0E32'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E23\u0E2D\u0E39\u0E19\u0E35\u0E22\u0E07'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E37\u0E22\u0E0B\u0E34\u0E25\u0E2D\u0E2D\u0E23\u0E4C\u0E14\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E04\u0E37\u0E22\u0E0B\u0E34\u0E25\u0E2D\u0E2D\u0E23\u0E4C\u0E14\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E04\u0E37\u0E22\u0E0B\u0E34\u0E25\u0E2D\u0E2D\u0E23\u0E4C\u0E14\u0E32'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E1B\u0E40\u0E19\u0E1B'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E1E\u0E34\u0E15\u0E41\u0E04\u0E23\u0E4C\u0E19'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E0B\u0E07\u0E1B\u0E35\u0E41\u0E22\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E01\u0E2D\u0E25\u0E07',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E41\u0E0B\u0E07\u0E1B\u0E35\u0E41\u0E22\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E01\u0E2D\u0E25\u0E07',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E0B\u0E07\u0E1B\u0E35\u0E41\u0E22\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E01\u0E2D\u0E25\u0E07'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E1F\u0E34\u0E19\u0E34\u0E01\u0E0B\u0E4C'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E1F\u0E34\u0E25\u0E34\u0E1B\u0E1B\u0E34\u0E19\u0E2A\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E1F\u0E34\u0E25\u0E34\u0E1B\u0E1B\u0E34\u0E19\u0E2A\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E1F\u0E34\u0E25\u0E34\u0E1B\u0E1B\u0E34\u0E19\u0E2A\u0E4C'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1B\u0E23\u0E39',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E1B\u0E23\u0E39',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E40\u0E1B\u0E23\u0E39'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E32\u0E23\u0E32\u0E01\u0E27\u0E31\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E1B\u0E32\u0E23\u0E32\u0E01\u0E27\u0E31\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E1B\u0E32\u0E23\u0E32\u0E01\u0E27\u0E31\u0E22'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E32\u0E1B\u0E31\u0E27\u0E19\u0E34\u0E27\u0E01\u0E34\u0E19\u0E35'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E32\u0E40\u0E25\u0E32'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E32\u0E01\u0E35\u0E2A\u0E16\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E1B\u0E32\u0E01\u0E35\u0E2A\u0E16\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E1B\u0E32\u0E01\u0E35\u0E2A\u0E16\u0E32\u0E19'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E2A\u0E04\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E2D\u0E21\u0E2A\u0E04\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E2D\u0E21\u0E2A\u0E04\u0E4C'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E19\u0E42\u0E27\u0E0B\u0E35\u0E1A\u0E35\u0E2A\u0E04\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E42\u0E19\u0E42\u0E27\u0E0B\u0E35\u0E1A\u0E35\u0E2A\u0E04\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E42\u0E19\u0E42\u0E27\u0E0B\u0E35\u0E1A\u0E35\u0E2A\u0E04\u0E4C'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E21\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19\u0E32\u0E40\u0E2B\u0E19\u0E37\u0E2D'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E40\u0E1F\u0E2D\u0E23\u0E4C\u0E19\u0E31\u0E19\u0E42\u0E14',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E40\u0E1F\u0E2D\u0E23\u0E4C\u0E19\u0E31\u0E19\u0E42\u0E14',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E40\u0E1F\u0E2D\u0E23\u0E4C\u0E19\u0E31\u0E19\u0E42\u0E14'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E32\u0E30\u0E19\u0E2D\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E4C\u0E01'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E19\u0E35\u0E2D\u0E39\u0E40\u0E2D'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E19\u0E34\u0E27\u0E1F\u0E31\u0E19\u0E14\u0E4C\u0E41\u0E25\u0E19\u0E14\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E19\u0E34\u0E27\u0E1F\u0E31\u0E19\u0E14\u0E4C\u0E41\u0E25\u0E19\u0E14\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E19\u0E34\u0E27\u0E1F\u0E31\u0E19\u0E14\u0E4C\u0E41\u0E25\u0E19\u0E14\u0E4C'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E19\u0E34\u0E27\u0E0B\u0E35\u0E41\u0E25\u0E19\u0E14\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E19\u0E34\u0E27\u0E0B\u0E35\u0E41\u0E25\u0E19\u0E14\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E19\u0E34\u0E27\u0E0B\u0E35\u0E41\u0E25\u0E19\u0E14\u0E4C'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E19\u0E34\u0E27\u0E41\u0E04\u0E25\u0E34\u0E42\u0E14\u0E40\u0E19\u0E35\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E19\u0E34\u0E27\u0E41\u0E04\u0E25\u0E34\u0E42\u0E14\u0E40\u0E19\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E19\u0E34\u0E27\u0E41\u0E04\u0E25\u0E34\u0E42\u0E14\u0E40\u0E19\u0E35\u0E22'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E17\u0E32\u0E07\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E16\u0E1A\u0E20\u0E39\u0E40\u0E02\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E41\u0E16\u0E1A\u0E20\u0E39\u0E40\u0E02\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E41\u0E16\u0E1A\u0E20\u0E39\u0E40\u0E02\u0E32'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1B\u0E0B\u0E34\u0E1F\u0E34\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E41\u0E1B\u0E0B\u0E34\u0E1F\u0E34\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E1B\u0E0B\u0E34\u0E1F\u0E34\u0E01'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E30\u0E19\u0E32\u0E14\u0E35\u0E23\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E30\u0E19\u0E32\u0E14\u0E35\u0E23\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E30\u0E19\u0E32\u0E14\u0E35\u0E23\u0E4C'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E31\u0E04\u0E15\u0E32\u0E2D\u0E39',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E31\u0E04\u0E15\u0E32\u0E2D\u0E39',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E31\u0E04\u0E15\u0E32\u0E2D\u0E39'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E31\u0E04\u0E42\u0E17\u0E40\u0E1A',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E31\u0E04\u0E42\u0E17\u0E40\u0E1A',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E31\u0E04\u0E42\u0E17\u0E40\u0E1A'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E04\u0E1B\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E14',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E04\u0E1B\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E14',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E40\u0E04\u0E1B\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E14'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E04\u0E0B\u0E35\u0E22\u0E4C'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E0A\u0E32\u0E21\u0E2D\u0E23\u0E4C\u0E42\u0E23'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E0A\u0E17\u0E31\u0E21',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E41\u0E0A\u0E17\u0E31\u0E21',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E41\u0E0A\u0E17\u0E31\u0E21'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E0A\u0E34\u0E25\u0E35',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E0A\u0E34\u0E25\u0E35',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E0A\u0E34\u0E25\u0E35'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E08\u0E35\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E08\u0E35\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E08\u0E35\u0E19'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E0A\u0E2D\u0E22\u0E1B\u0E32\u0E25\u0E0A\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E0A\u0E2D\u0E22\u0E1B\u0E32\u0E25\u0E0A\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E0A\u0E2D\u0E22\u0E1B\u0E32\u0E25\u0E0A\u0E32\u0E19'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E32\u0E30\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E21\u0E32\u0E2A'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E42\u0E04\u0E42\u0E04\u0E2A'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E04\u0E25\u0E2D\u0E21\u0E40\u0E1A\u0E35\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E42\u0E04\u0E25\u0E2D\u0E21\u0E40\u0E1A\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E42\u0E04\u0E25\u0E2D\u0E21\u0E40\u0E1A\u0E35\u0E22'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E04\u0E38\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E04\u0E38\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E23\u0E36\u0E48\u0E07\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E04\u0E38\u0E01'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E34\u0E27\u0E1A\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E04\u0E34\u0E27\u0E1A\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E34\u0E27\u0E1A\u0E32'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E14\u0E27\u0E34\u0E2A'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E14\u0E39\u0E21\u0E2D\u0E07\u0E15\u0E4C\u0E14\u0E39\u0E23\u0E4C\u0E27\u0E34\u0E25\u0E25\u0E4C'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E34\u0E21\u0E2D\u0E23\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E32\u0E30\u0E2D\u0E35\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E01\u0E32\u0E30\u0E2D\u0E35\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E40\u0E01\u0E32\u0E30\u0E2D\u0E35\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E2D\u0E01\u0E27\u0E32\u0E14\u0E2D\u0E23\u0E4C'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E01\u0E25\u0E32\u0E07',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E01\u0E25\u0E32\u0E07',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E01\u0E25\u0E32\u0E07'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E1F\u0E2D\u0E25\u0E4C\u0E01\u0E41\u0E25\u0E19\u0E14\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E1F\u0E2D\u0E25\u0E4C\u0E01\u0E41\u0E25\u0E19\u0E14\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E1F\u0E2D\u0E25\u0E4C\u0E01\u0E41\u0E25\u0E19\u0E14\u0E4C'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E1F\u0E34\u0E08\u0E34',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E1F\u0E34\u0E08\u0E34',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E1F\u0E34\u0E08\u0E34'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1F\u0E23\u0E19\u0E0A\u0E4C\u0E40\u0E01\u0E35\u0E22\u0E19\u0E32'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1F\u0E23\u0E19\u0E0A\u0E4C\u0E40\u0E0B\u0E32\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E41\u0E25\u0E30\u0E41\u0E2D\u0E19\u0E15\u0E32\u0E23\u0E4C\u0E01\u0E15\u0E34\u0E01'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E01\u0E32\u0E25\u0E32\u0E1B\u0E32\u0E42\u0E01\u0E2A'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E15\u0E40\u0E01\u0E40\u0E25\u0E32'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E2D\u0E07\u0E01\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E15\u0E2D\u0E07\u0E01\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E15\u0E2D\u0E07\u0E01\u0E32'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E0A\u0E38\u0E01'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E15\u0E34\u0E23\u0E4C\u0E01\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E15\u0E34\u0E23\u0E4C\u0E01\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E40\u0E15\u0E34\u0E23\u0E4C\u0E01\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E39\u0E27\u0E32\u0E25\u0E39'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E38\u0E23\u0E38\u0E01\u0E27\u0E31\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E38\u0E23\u0E38\u0E01\u0E27\u0E31\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E38\u0E23\u0E38\u0E01\u0E27\u0E31\u0E22'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E38\u0E0B\u0E40\u0E1A\u0E01\u0E34\u0E2A\u0E16\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E38\u0E0B\u0E40\u0E1A\u0E01\u0E34\u0E2A\u0E16\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E38\u0E0B\u0E40\u0E1A\u0E01\u0E34\u0E2A\u0E16\u0E32\u0E19'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E27\u0E32\u0E19\u0E39\u0E2D\u0E32\u0E15\u0E39',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E27\u0E32\u0E19\u0E39\u0E2D\u0E32\u0E15\u0E39',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E27\u0E32\u0E19\u0E39\u0E2D\u0E32\u0E15\u0E39'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E22\u0E04\u0E32\u0E40\u0E15\u0E23\u0E34\u0E19\u0E1A\u0E39\u0E23\u0E4C\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E22\u0E04\u0E32\u0E40\u0E15\u0E23\u0E34\u0E19\u0E1A\u0E39\u0E23\u0E4C\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E40\u0E22\u0E04\u0E32\u0E40\u0E15\u0E23\u0E34\u0E19\u0E1A\u0E39\u0E23\u0E4C\u0E01'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E22\u0E32\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E22\u0E32\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E22\u0E32\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E27\u0E32\u0E25\u0E25\u0E34\u0E2A\u0E41\u0E25\u0E30\u0E1F\u0E38\u0E15\u0E39\u0E19\u0E32'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E32\u0E30\u0E40\u0E27\u0E01'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E27\u0E2D\u0E2A\u0E15\u0E2D\u0E04'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E27\u0E2D\u0E25\u0E42\u0E01\u0E01\u0E23\u0E32\u0E14',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E27\u0E2D\u0E25\u0E42\u0E01\u0E01\u0E23\u0E32\u0E14',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E27\u0E2D\u0E25\u0E42\u0E01\u0E01\u0E23\u0E32\u0E14'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E27\u0E25\u0E32\u0E14\u0E35\u0E27\u0E2D\u0E2A\u0E15\u0E2D\u0E04',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E27\u0E25\u0E32\u0E14\u0E35\u0E27\u0E2D\u0E2A\u0E15\u0E2D\u0E04',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E27\u0E25\u0E32\u0E14\u0E35\u0E27\u0E2D\u0E2A\u0E15\u0E2D\u0E04'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E27\u0E40\u0E19\u0E0B\u0E38\u0E40\u0E2D\u0E25\u0E32'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E17\u0E32\u0E08\u0E34\u0E01\u0E34\u0E2A\u0E16\u0E32\u0E19'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E44\u0E17\u0E40\u0E1B',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E44\u0E17\u0E40\u0E1B',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E44\u0E17\u0E40\u0E1B'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E32\u0E2E\u0E35\u0E15\u0E35'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E0B\u0E27\u0E32'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E0B\u0E39\u0E23\u0E34\u0E19\u0E32\u0E40\u0E21'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E0B\u0E32\u0E17\u0E4C\u0E08\u0E2D\u0E23\u0E4C\u0E40\u0E08\u0E35\u0E22'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E42\u0E0B\u0E42\u0E25\u0E21\u0E2D\u0E19'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2A\u0E34\u0E07\u0E04\u0E42\u0E1B\u0E23\u0E4C'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E0B\u0E40\u0E0A\u0E25\u0E2A\u0E4C'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E01\u0E27\u0E21'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E01\u0E23\u0E35\u0E19\u0E41\u0E25\u0E19\u0E14\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E23\u0E35\u0E19\u0E41\u0E25\u0E19\u0E14\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E01\u0E23\u0E35\u0E19\u0E41\u0E25\u0E19\u0E14\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E01\u0E23\u0E35\u0E19\u0E41\u0E25\u0E19\u0E14\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E23\u0E35\u0E19\u0E41\u0E25\u0E19\u0E14\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E01\u0E23\u0E35\u0E19\u0E41\u0E25\u0E19\u0E14\u0E4C\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E23\u0E35\u0E19\u0E34\u0E0A'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E01\u0E34\u0E25\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E15'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E08\u0E2D\u0E23\u0E4C\u0E40\u0E08\u0E35\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E08\u0E2D\u0E23\u0E4C\u0E40\u0E08\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E08\u0E2D\u0E23\u0E4C\u0E40\u0E08\u0E35\u0E22'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E01\u0E21\u0E40\u0E1A\u0E35\u0E22\u0E23\u0E4C'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E30\u0E40\u0E21\u0E0B\u0E2D\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E30\u0E40\u0E21\u0E0B\u0E2D\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E30\u0E40\u0E21\u0E0B\u0E2D\u0E19'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E32\u0E40\u0E01\u0E23',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E32\u0E40\u0E01\u0E23',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E32\u0E40\u0E01\u0E23'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E31\u0E1F\u0E01\u0E32\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32\u0E01\u0E25\u0E32\u0E07'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32\u0E43\u0E15\u0E49'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E30\u0E41\u0E25\u0E2A\u0E01\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E30\u0E41\u0E25\u0E2A\u0E01\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E30\u0E41\u0E25\u0E2A\u0E01\u0E32'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E31\u0E25\u0E21\u0E32\u0E15\u0E35',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E31\u0E25\u0E21\u0E32\u0E15\u0E35',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E31\u0E25\u0E21\u0E32\u0E15\u0E35'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E32\u0E2B\u0E23\u0E31\u0E1A',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E23\u0E31\u0E1A',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E2D\u0E32\u0E2B\u0E23\u0E31\u0E1A'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E08\u0E19\u0E15\u0E34\u0E19\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E08\u0E19\u0E15\u0E34\u0E19\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E08\u0E19\u0E15\u0E34\u0E19\u0E32'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E08\u0E19\u0E15\u0E34\u0E19\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E08\u0E19\u0E15\u0E34\u0E19\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E08\u0E19\u0E15\u0E34\u0E19\u0E32'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E40\u0E19\u0E35\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E40\u0E19\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E40\u0E19\u0E35\u0E22'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E41\u0E2D\u0E15\u0E41\u0E25\u0E19\u0E15\u0E34\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E41\u0E2D\u0E15\u0E41\u0E25\u0E19\u0E15\u0E34\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E2D\u0E15\u0E41\u0E25\u0E19\u0E15\u0E34\u0E01'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22\u0E01\u0E25\u0E32\u0E07',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E32\u0E07\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E17\u0E32\u0E07\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E2A\u0E40\u0E15\u0E23\u0E40\u0E25\u0E35\u0E22'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E32\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E44\u0E1A\u0E08\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E32\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E44\u0E1A\u0E08\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E32\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E44\u0E1A\u0E08\u0E32\u0E19'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E30\u0E42\u0E0B\u0E23\u0E4C\u0E2A',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E30\u0E42\u0E0B\u0E23\u0E4C\u0E2A',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E30\u0E42\u0E0B\u0E23\u0E4C\u0E2A'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E1A\u0E31\u0E07\u0E01\u0E25\u0E32\u0E40\u0E17\u0E28',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E1A\u0E31\u0E07\u0E01\u0E25\u0E32\u0E40\u0E17\u0E28',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E1A\u0E31\u0E07\u0E01\u0E25\u0E32\u0E40\u0E17\u0E28'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E20\u0E39\u0E0F\u0E32\u0E19'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E42\u0E1A\u0E25\u0E34\u0E40\u0E27\u0E35\u0E22'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E1A\u0E23\u0E32\u0E0B\u0E34\u0E40\u0E25\u0E35\u0E22',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E1A\u0E23\u0E32\u0E0B\u0E34\u0E40\u0E25\u0E35\u0E22',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E1A\u0E23\u0E32\u0E0B\u0E34\u0E40\u0E25\u0E35\u0E22'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E1A\u0E23\u0E39\u0E44\u0E19\u0E14\u0E32\u0E23\u0E38\u0E2A\u0E0B\u0E32\u0E25\u0E32\u0E21'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E01\u0E31\u0E25\u0E1F\u0E4C'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E01\u0E32\u0E22\u0E2D\u0E32\u0E19\u0E32'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2E\u0E32\u0E27\u0E32\u0E22-\u0E2D\u0E30\u0E25\u0E39\u0E40\u0E0A\u0E35\u0E22\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2E\u0E32\u0E27\u0E32\u0E22-\u0E2D\u0E30\u0E25\u0E39\u0E40\u0E0A\u0E35\u0E22\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E2E\u0E32\u0E27\u0E32\u0E22-\u0E2D\u0E30\u0E25\u0E39\u0E40\u0E0A\u0E35\u0E22\u0E19'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2E\u0E48\u0E2D\u0E07\u0E01\u0E07',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2E\u0E48\u0E2D\u0E07\u0E01\u0E07',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2E\u0E48\u0E2D\u0E07\u0E01\u0E07'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2E\u0E2D\u0E1F\u0E14\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2E\u0E2D\u0E1F\u0E14\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2E\u0E2D\u0E1F\u0E14\u0E4C'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E19\u0E42\u0E14\u0E08\u0E35\u0E19'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E19\u0E42\u0E14\u0E19\u0E35\u0E40\u0E0B\u0E35\u0E22\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E19\u0E42\u0E14\u0E19\u0E35\u0E40\u0E0B\u0E35\u0E22\u0E1D\u0E31\u0E48\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E19\u0E42\u0E14\u0E19\u0E35\u0E40\u0E0B\u0E35\u0E22\u0E1D\u0E31\u0E48\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E2B\u0E23\u0E48\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E34\u0E2B\u0E23\u0E48\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E2D\u0E34\u0E2B\u0E23\u0E48\u0E32\u0E19'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E35\u0E23\u0E4C\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E35\u0E23\u0E4C\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E35\u0E23\u0E4C\u0E04\u0E38\u0E15\u0E2A\u0E04\u0E4C'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E34\u0E2A\u0E23\u0E32\u0E40\u0E2D\u0E25',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E34\u0E2A\u0E23\u0E32\u0E40\u0E2D\u0E25',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E2D\u0E34\u0E2A\u0E23\u0E32\u0E40\u0E2D\u0E25'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E31\u0E21\u0E0A\u0E31\u0E15\u0E04\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1B\u0E42\u0E15\u0E23\u0E1B\u0E31\u0E1F\u0E25\u0E2D\u0E1F\u0E2A\u0E04\u0E4C-\u0E04\u0E31\u0E21\u0E0A\u0E31\u0E15\u0E2A\u0E01\u0E35',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E40\u0E1B\u0E42\u0E15\u0E23\u0E1B\u0E31\u0E1F\u0E25\u0E2D\u0E1F\u0E2A\u0E04\u0E4C-\u0E04\u0E31\u0E21\u0E0A\u0E31\u0E15\u0E2A\u0E01\u0E35'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E32\u0E0B\u0E31\u0E04\u0E2A\u0E16\u0E32\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E32\u0E0B\u0E31\u0E04\u0E2A\u0E16\u0E32\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E32\u0E2B\u0E25\u0E35',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E01\u0E32\u0E2B\u0E25\u0E35',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E40\u0E01\u0E32\u0E2B\u0E25\u0E35'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E2D\u0E2A\u0E44\u0E23'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E23\u0E31\u0E2A\u0E42\u0E19\u0E22\u0E32\u0E2A\u0E04\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E04\u0E23\u0E31\u0E2A\u0E42\u0E19\u0E22\u0E32\u0E2A\u0E04\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E04\u0E23\u0E31\u0E2A\u0E42\u0E19\u0E22\u0E32\u0E2A\u0E04\u0E4C'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E04\u0E35\u0E23\u0E4C\u0E01\u0E35\u0E0B\u0E2A\u0E16\u0E32\u0E19'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E25\u0E31\u0E07\u0E01\u0E32'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E44\u0E25\u0E19\u0E4C'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E25\u0E2D\u0E23\u0E4C\u0E14\u0E42\u0E2E\u0E27',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E25\u0E2D\u0E23\u0E4C\u0E14\u0E42\u0E2E\u0E27\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E02\u0E2D\u0E07\u0E25\u0E2D\u0E23\u0E4C\u0E14\u0E42\u0E2E\u0E27\u0E4C'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E40\u0E01\u0E4A\u0E32',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E21\u0E32\u0E40\u0E01\u0E4A\u0E32',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E21\u0E32\u0E40\u0E01\u0E4A\u0E32'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E32\u0E30\u0E41\u0E21\u0E01\u0E04\u0E27\u0E2D\u0E23\u0E35'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E01\u0E32\u0E14\u0E32\u0E19',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E21\u0E32\u0E01\u0E32\u0E14\u0E32\u0E19',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E21\u0E32\u0E01\u0E32\u0E14\u0E32\u0E19'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E40\u0E25\u0E40\u0E0B\u0E35\u0E22'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E31\u0E25\u0E14\u0E35\u0E1F\u0E2A\u0E4C'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E23\u0E4C\u0E40\u0E04\u0E0B\u0E31\u0E2A'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E2B\u0E21\u0E39\u0E48\u0E40\u0E01\u0E32\u0E30\u0E21\u0E32\u0E23\u0E4C\u0E41\u0E0A\u0E25\u0E25\u0E4C'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E2D\u0E23\u0E34\u0E40\u0E0A\u0E35\u0E22\u0E2A',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E21\u0E2D\u0E23\u0E34\u0E40\u0E0A\u0E35\u0E22\u0E2A',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E02\u0E2D\u0E07\u0E21\u0E2D\u0E23\u0E34\u0E40\u0E0A\u0E35\u0E22\u0E2A'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E2D\u0E27\u0E4C\u0E2A\u0E31\u0E19'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E39\u0E25\u0E32\u0E19\u0E1A\u0E32\u0E15\u0E2D\u0E23\u0E4C',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E39\u0E25\u0E32\u0E19\u0E1A\u0E32\u0E15\u0E2D\u0E23\u0E4C',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E39\u0E25\u0E32\u0E19\u0E1A\u0E32\u0E15\u0E2D\u0E23\u0E4C'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E2D\u0E2A\u0E42\u0E01',
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E21\u0E2D\u0E2A\u0E42\u0E01',
                            'daylight': '\u0E40\u0E27\u0E25\u0E32\u0E24\u0E14\u0E39\u0E23\u0E49\u0E2D\u0E19\u0E21\u0E2D\u0E2A\u0E42\u0E01'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E1E\u0E21\u0E48\u0E32'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E19\u0E32\u0E2D\u0E39\u0E23\u0E39'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u0E40\u0E27\u0E25\u0E32\u0E40\u0E19\u0E1B\u0E32\u0E25'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '\u0E40\u0E27\u0E25\u0E32{0}',
                'regionFormat-type-daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07{0}',
                'regionFormat-type-standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19{0}',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': '\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E01\u0E15\u0E34',
                'collation': '\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07',
                'colHiraganaQuaternary': '\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E04\u0E30\u0E19\u0E30',
                'colCaseLevel': '\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E31\u0E01\u0E29\u0E23',
                'colCaseFirst': '\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E2B\u0E0D\u0E48/\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E25\u0E47\u0E01',
                'colBackwards': '\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32\u0E43\u0E19\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07',
                'colAlternate': '\u0E25\u0E30\u0E40\u0E27\u0E49\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C',
                'calendar': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19',
                'x': '\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E1A\u0E38\u0E04\u0E04\u0E25',
                'variableTop': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C',
                'va': '\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23\u0E20\u0E32\u0E29\u0E32\u0E16\u0E34\u0E48\u0E19',
                'timezone': '\u0E40\u0E02\u0E15\u0E40\u0E27\u0E25\u0E32',
                'numbers': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02',
                'currency': '\u0E2A\u0E01\u0E38\u0E25\u0E40\u0E07\u0E34\u0E19',
                'colStrength': '\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07',
                'colNumeric': '\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E04\u0E30\u0E19\u0E30\u0E41\u0E22\u0E01\u0E15\u0E48\u0E32\u0E07\u0E2B\u0E32\u0E01',
                    'yes': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E04\u0E30\u0E19\u0E30\u0E43\u0E19\u0E41\u0E1A\u0E1A\u0E2D\u0E37\u0E48\u0E19'
                },
                'colCaseLevel': {
                    'no': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C',
                    'yes': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C'
                },
                'colCaseFirst': {
                    'lower': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E25\u0E47\u0E01\u0E01\u0E48\u0E2D\u0E19',
                    'no': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E1B\u0E01\u0E15\u0E34',
                    'upper': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E48\u0E2D\u0E19'
                },
                'colStrength': {
                    'identical': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14',
                    'primary': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E10\u0E32\u0E19\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19',
                    'quaternary': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32/\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C/\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07/\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E04\u0E30\u0E19\u0E30',
                    'secondary': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32',
                    'tertiary': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32/\u0E15\u0E31\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C/\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07'
                },
                'colNumeric': {
                    'no': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E41\u0E22\u0E01',
                    'yes': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E31\u0E22\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02'
                },
                'colNormalization': {
                    'no': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E1B\u0E01\u0E15\u0E34',
                    'yes': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E22\u0E39\u0E19\u0E34\u0E42\u0E04\u0E49\u0E14\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E01\u0E15\u0E34'
                },
                'calendar': {
                    'japanese': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19',
                    'iso8601': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19 ISO-8601',
                    'coptic': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E04\u0E2D\u0E1B\u0E15\u0E34\u0E01',
                    'dangi': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E17\u0E31\u0E19\u0E01\u0E34',
                    'ethiopic': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E40\u0E2D\u0E18\u0E34\u0E42\u0E2D\u0E40\u0E1B\u0E35\u0E22',
                    'ethiopic-amete-alem': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E1B\u0E35\u0E42\u0E25\u0E01\u0E40\u0E2D\u0E18\u0E34\u0E42\u0E2D\u0E40\u0E1B\u0E35\u0E22',
                    'gregorian': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E40\u0E01\u0E23\u0E01\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E19',
                    'hebrew': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2E\u0E34\u0E1A\u0E23\u0E39',
                    'persian': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0A\u0E35\u0E22',
                    'roc': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E44\u0E15\u0E49\u0E2B\u0E27\u0E31\u0E19',
                    'chinese': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E08\u0E35\u0E19',
                    'buddhist': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E1E\u0E38\u0E17\u0E18',
                    'indian': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E0A\u0E32\u0E15\u0E34\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22',
                    'islamic': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2D\u0E34\u0E2A\u0E25\u0E32\u0E21',
                    'islamic-civil': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2D\u0E34\u0E2A\u0E25\u0E32\u0E21\u0E0B\u0E35\u0E27\u0E34\u0E25',
                    'islamic-rgsa': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2D\u0E34\u0E2A\u0E25\u0E32\u0E21 (\u0E0B\u0E32\u0E2D\u0E38\u0E14\u0E35\u0E2D\u0E32\u0E23\u0E30\u0E40\u0E1A\u0E35\u0E22 \u0E41\u0E1A\u0E1A\u0E1E\u0E23\u0E30\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C\u0E40\u0E2A\u0E35\u0E49\u0E22\u0E27)',
                    'islamic-tbla': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2D\u0E34\u0E2A\u0E25\u0E32\u0E21 (\u0E41\u0E1A\u0E1A\u0E15\u0E32\u0E23\u0E32\u0E07 \u0E2A\u0E21\u0E31\u0E22\u0E14\u0E32\u0E23\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C)',
                    'islamic-umalqura': '\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2D\u0E34\u0E2A\u0E25\u0E32\u0E21 (\u0E2D\u0E38\u0E21\u0E21\u0E4C\u0E2D\u0E31\u0E25\u0E01\u0E38\u0E23\u0E32)'
                },
                'collation': {
                    'phonebook': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E2A\u0E21\u0E38\u0E14\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C',
                    'gb2312han': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E08\u0E35\u0E19\u0E1B\u0E23\u0E30\u0E22\u0E38\u0E01\u0E15\u0E4C',
                    'eor': '\u0E01\u0E0E\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E22\u0E38\u0E42\u0E23\u0E1B',
                    'ducet': '\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21 Unicode \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19',
                    'dictionary': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E1E\u0E08\u0E19\u0E32\u0E19\u0E38\u0E01\u0E23\u0E21',
                    'big5han': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E08\u0E35\u0E19\u0E14\u0E31\u0E49\u0E07\u0E40\u0E14\u0E34\u0E21',
                    'traditional': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E14\u0E31\u0E49\u0E07\u0E40\u0E14\u0E34\u0E21',
                    'standard': '\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E41\u0E1A\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19',
                    'zhuyin': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E01\u0E32\u0E23\u0E2A\u0E30\u0E01\u0E14\u0E41\u0E1A\u0E1A\u0E08\u0E39\u0E49\u0E2D\u0E34\u0E19',
                    'unihan': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E15\u0E32\u0E21\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E35\u0E14',
                    'stroke': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E01\u0E32\u0E23\u0E25\u0E32\u0E01\u0E40\u0E2A\u0E49\u0E19',
                    'searchjl': '\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E15\u0E32\u0E21\u0E1E\u0E22\u0E31\u0E0D\u0E0A\u0E19\u0E30\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2E\u0E31\u0E19\u0E01\u0E36\u0E25',
                    'search': '\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B',
                    'reformed': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14',
                    'pinyin': '\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E01\u0E32\u0E23\u0E16\u0E2D\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19',
                    'phonetic': '\u0E25\u0E33\u0E14\u0E31\u0E01\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E04\u0E33\u0E2D\u0E48\u0E32\u0E19'
                },
                'numbers': {
                    'knda': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E31\u0E19\u0E19\u0E32\u0E14\u0E32',
                    'khmr': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E02\u0E21\u0E23',
                    'kali': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E04\u0E22\u0E32\u0E2B\u0E4C',
                    'jpanfin': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19',
                    'jpan': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19',
                    'java': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0A\u0E27\u0E32',
                    'hebr': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2E\u0E34\u0E1A\u0E23\u0E39',
                    'hantfin': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E41\u0E1A\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E15\u0E47\u0E21\u0E02\u0E2D\u0E07\u0E08\u0E35\u0E19',
                    'hant': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E35\u0E19\u0E15\u0E31\u0E27\u0E40\u0E15\u0E47\u0E21',
                    'hansfin': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E41\u0E1A\u0E1A\u0E15\u0E31\u0E27\u0E22\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E08\u0E35\u0E19',
                    'hans': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E35\u0E19\u0E15\u0E31\u0E27\u0E22\u0E48\u0E2D',
                    'hanidec': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E28\u0E19\u0E34\u0E22\u0E21\u0E08\u0E35\u0E19',
                    'guru': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E39\u0E23\u0E4C\u0E21\u0E39\u0E04\u0E35',
                    'gujr': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E04\u0E38\u0E0A\u0E23\u0E32\u0E15',
                    'greklow': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E23\u0E35\u0E01\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E25\u0E47\u0E01',
                    'grek': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E23\u0E35\u0E01',
                    'bali': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E1A\u0E32\u0E2B\u0E25\u0E35',
                    'armnlow': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E40\u0E19\u0E35\u0E22\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E25\u0E47\u0E01',
                    'armn': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E40\u0E19\u0E35\u0E22',
                    'arabext': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22-\u0E2D\u0E32\u0E23\u0E1A\u0E34\u0E01\u0E15\u0E31\u0E27\u0E40\u0E15\u0E47\u0E21',
                    'arab': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22-\u0E2D\u0E32\u0E23\u0E1A\u0E34\u0E01',
                    'finance': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19',
                    'traditional': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E41\u0E1A\u0E1A\u0E14\u0E31\u0E49\u0E07\u0E40\u0E14\u0E34\u0E21',
                    'native': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E1E\u0E37\u0E49\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07',
                    'beng': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E07\u0E01\u0E25\u0E32\u0E40\u0E17\u0E28',
                    'brah': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E1E\u0E23\u0E32\u0E2B\u0E21\u0E35',
                    'cakm': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0A\u0E32\u0E01\u0E21\u0E32',
                    'cham': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0A\u0E32\u0E21',
                    'deva': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E17\u0E27\u0E19\u0E32\u0E04\u0E23\u0E35',
                    'orya': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E42\u0E2D\u0E23\u0E34\u0E22\u0E32',
                    'osma': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E2D\u0E2A\u0E21\u0E31\u0E19\u0E22\u0E32',
                    'roman': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E42\u0E23\u0E21\u0E31\u0E19',
                    'romanlow': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E42\u0E23\u0E21\u0E31\u0E19\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E25\u0E47\u0E01',
                    'saur': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E28\u0E32\u0E23\u0E31\u0E0A\u0E18\u0E23\u0E32',
                    'shrd': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0A\u0E32\u0E23\u0E32\u0E14\u0E32',
                    'sora': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E42\u0E2A\u0E23\u0E32\u0E2A\u0E21\u0E40\u0E1B\u0E47\u0E07',
                    'sund': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0B\u0E38\u0E19\u0E14\u0E32',
                    'vaii': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E27',
                    'tibt': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E34\u0E40\u0E1A\u0E15',
                    'thai': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E17\u0E22',
                    'telu': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E15\u0E25\u0E39\u0E01\u0E39',
                    'tamldec': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E21\u0E34\u0E2C',
                    'taml': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E21\u0E34\u0E2C\u0E14\u0E31\u0E49\u0E07\u0E40\u0E14\u0E34\u0E21',
                    'talu': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E17\u0E25\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48',
                    'takr': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E32\u0E04\u0E23\u0E35',
                    'olck': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E42\u0E2D\u0E25\u0E08\u0E34\u0E01\u0E34',
                    'nkoo': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E2D\u0E47\u0E19\u0E42\u0E01',
                    'mymrshan': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E0A\u0E32\u0E19\u0E1E\u0E21\u0E48\u0E32',
                    'mymr': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E1E\u0E21\u0E48\u0E32',
                    'mtei': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E21\u0E44\u0E15\u0E21\u0E32\u0E40\u0E22\u0E01',
                    'mong': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E21\u0E2D\u0E07\u0E42\u0E01\u0E40\u0E25\u0E35\u0E22',
                    'mlym': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E21\u0E32\u0E25\u0E32\u0E22\u0E32\u0E25\u0E31\u0E21',
                    'limb': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E25\u0E34\u0E21\u0E1A\u0E39',
                    'lepc': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E25\u0E1B\u0E0A\u0E32',
                    'latn': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E32\u0E23\u0E1A\u0E34\u0E04',
                    'laoo': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E25\u0E32\u0E27',
                    'lanatham': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E17\u0E17\u0E31\u0E21\u0E17\u0E31\u0E21',
                    'lana': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E17\u0E17\u0E31\u0E21\u0E42\u0E2E\u0E23\u0E32',
                    'geor': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E2D\u0E23\u0E4C\u0E40\u0E08\u0E35\u0E22',
                    'fullwide': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E41\u0E1A\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E02\u0E19\u0E32\u0E14',
                    'ethi': '\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E2D\u0E18\u0E34\u0E42\u0E2D\u0E40\u0E1B\u0E35\u0E22'
                },
                'colAlternate': {
                    'non-ignorable': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C',
                    'shifted': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E25\u0E30\u0E44\u0E27\u0E49'
                },
                'colBackwards': {
                    'no': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32\u0E15\u0E32\u0E21\u0E1B\u0E01\u0E15\u0E34',
                    'yes': '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32\u0E43\u0E19\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07'
                }
            },
            'codePatterns': {
                'language': '\u0E20\u0E32\u0E29\u0E32: {0}',
                'script': '\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C: {0}',
                'territory': '\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0} \u0E2D\u0E2D\u0E19\u0E0B\u0E4C'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0} \u0E01\u0E34\u0E42\u0E25\u0E01\u0E23\u0E31\u0E21'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0} \u0E01\u0E23\u0E31\u0E21'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0} \u0E2B\u0E25\u0E32'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0} \u0E1E\u0E34\u0E42\u0E01\u0E40\u0E21\u0E15\u0E23'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0} \u0E21\u0E34\u0E25\u0E25\u0E34\u0E40\u0E21\u0E15\u0E23'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0} \u0E44\u0E21\u0E25\u0E4C'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0} \u0E40\u0E21\u0E15\u0E23'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0} \u0E1B\u0E35\u0E41\u0E2A\u0E07'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0} \u0E01\u0E34\u0E42\u0E25\u0E40\u0E21\u0E15\u0E23'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0} \u0E19\u0E34\u0E49\u0E27'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0} \u0E1F\u0E38\u0E15'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0} \u0E40\u0E0B\u0E19\u0E15\u0E34\u0E40\u0E21\u0E15\u0E23'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0} \u0E1B\u0E35'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0} \u0E40\u0E14\u0E37\u0E2D\u0E19'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0} \u0E1B\u0E2D\u0E19\u0E14\u0E4C'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0} \u0E41\u0E23\u0E07\u0E21\u0E49\u0E32'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0} \u0E01\u0E34\u0E42\u0E25\u0E27\u0E31\u0E15\u0E15\u0E4C'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0} \u0E27\u0E31\u0E15\u0E15\u0E4C'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0} \u0E40\u0E2E\u0E01\u0E42\u0E15\u0E1B\u0E32\u0E2A\u0E01\u0E32\u0E25'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0} \u0E19\u0E34\u0E49\u0E27\u0E1B\u0E23\u0E2D\u0E17'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0} \u0E21\u0E34\u0E25\u0E25\u0E34\u0E1A\u0E32\u0E23\u0E4C'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0} \u0E25\u0E34\u0E15\u0E23'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0} \u0E25\u0E39\u0E01\u0E1A\u0E32\u0E28\u0E01\u0E4C\u0E44\u0E21\u0E25\u0E4C'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0} \u0E25\u0E39\u0E01\u0E1A\u0E32\u0E28\u0E01\u0E4C\u0E01\u0E34\u0E42\u0E25\u0E40\u0E21\u0E15\u0E23'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0} \u0E2D\u0E07\u0E28\u0E32\u0E1F\u0E32\u0E40\u0E23\u0E19\u0E44\u0E2E\u0E15\u0E4C'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0} \u0E2D\u0E07\u0E28\u0E32\u0E40\u0E0B\u0E25\u0E40\u0E0B\u0E35\u0E22\u0E2A'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0} \u0E44\u0E21\u0E25\u0E4C\u0E15\u0E48\u0E2D\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0} \u0E40\u0E21\u0E15\u0E23\u0E15\u0E48\u0E2D\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0} \u0E01\u0E34\u0E42\u0E25\u0E40\u0E21\u0E15\u0E23\u0E15\u0E48\u0E2D\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0} \u0E19\u0E32\u0E17\u0E35'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0} \u0E21\u0E34\u0E25\u0E25\u0E34\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0} \u0E27\u0E31\u0E19'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0} \u0E15\u0E32\u0E23\u0E32\u0E07\u0E44\u0E21\u0E25\u0E4C'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0} \u0E15\u0E32\u0E23\u0E32\u0E07\u0E40\u0E21\u0E15\u0E23'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0} \u0E15\u0E32\u0E23\u0E32\u0E07\u0E01\u0E34\u0E42\u0E25\u0E40\u0E21\u0E15\u0E23'
                },
                'per': {
                    'compoundUnitPattern': '{0}\u0E15\u0E48\u0E2D{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0} \u0E41\u0E23\u0E07 G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0} \u0E19\u0E32\u0E17\u0E35'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0} \u0E2D\u0E07\u0E28\u0E32'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0} \u0E40\u0E2D\u0E40\u0E04\u0E2D\u0E23\u0E4C'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0} \u0E40\u0E2E\u0E01\u0E15\u0E32\u0E23\u0E4C'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0} \u0E15\u0E32\u0E23\u0E32\u0E07\u0E1F\u0E38\u0E15'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0} \u0E2D\u0E2D\u0E19\u0E0B\u0E4C'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0} \u0E01\u0E01.'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0} \u0E01.'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0} \u0E2B\u0E25\u0E32'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0} \u0E1E\u0E34\u0E42\u0E01\u0E40\u0E21\u0E15\u0E23'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0} \u0E21\u0E21.'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0} \u0E44\u0E21\u0E25\u0E4C'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0} \u0E21.'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0} \u0E1B\u0E35\u0E41\u0E2A\u0E07'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0} \u0E01\u0E21.'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0} \u0E19\u0E34\u0E49\u0E27'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0} \u0E1F\u0E38\u0E15'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0} \u0E0B\u0E21.'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0} \u0E1B\u0E35'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0} \u0E40\u0E14\u0E37\u0E2D\u0E19'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0} \u0E1B\u0E2D\u0E19\u0E14\u0E4C'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0} \u0E41\u0E23\u0E07\u0E21\u0E49\u0E32'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0} \u0E01\u0E34\u0E42\u0E25\u0E27\u0E31\u0E15\u0E15\u0E4C'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0} \u0E27\u0E31\u0E15\u0E15\u0E4C'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0} \u0E40\u0E2E\u0E01\u0E42\u0E15\u0E1B\u0E32\u0E2A\u0E01\u0E32\u0E25'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0} \u0E19\u0E34\u0E49\u0E27\u0E1B\u0E23\u0E2D\u0E17'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0} \u0E21\u0E34\u0E25\u0E25\u0E34\u0E1A\u0E32\u0E23\u0E4C'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0} \u0E25\u0E34\u0E15\u0E23'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0} \u0E25\u0E1A.\u0E44\u0E21\u0E25\u0E4C'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0} \u0E25\u0E1A.\u0E01\u0E21.'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0} \u0E44\u0E21\u0E25\u0E4C/\u0E0A\u0E21.'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0} \u0E21./\u0E27\u0E34'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0} \u0E01\u0E21./\u0E0A\u0E21.'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0} \u0E19\u0E32\u0E17\u0E35'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0} \u0E21\u0E34\u0E25\u0E25\u0E34\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0} \u0E0A\u0E21.'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0} \u0E27\u0E31\u0E19'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0} \u0E15\u0E23.\u0E44\u0E21\u0E25\u0E4C'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0} \u0E15\u0E23.\u0E21.'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0} \u0E15\u0E23.\u0E01\u0E21.'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0} \u0E19\u0E32\u0E17\u0E35'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0} \u0E27\u0E34'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0} \u0E40\u0E2D\u0E40\u0E04\u0E2D\u0E23\u0E4C'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0} \u0E40\u0E2E\u0E01\u0E15\u0E32\u0E23\u0E4C'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0} \u0E15\u0E23.\u0E1F\u0E38\u0E15'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0} \u0E27\u0E34'
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
