/**
 * @file {@link https://github.com/Xotic750/astrodate th}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9318
 * timeZoneNames: 24r9318
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
        AstroDate.lang('th', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19{0}',
                    'regionFormat-type-daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07{0}',
                    'regionFormat': '\u0E40\u0E27\u0E25\u0E32{0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
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
