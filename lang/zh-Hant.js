/* AstroDate
 * Language: zh-Hant
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * localeDisplayNames: 24r9308
 * units: 24r9308
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
        AstroDate.lang('zh-Hant', {
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
                    'unitPattern-count-other': '{0} \u76CE\u53F8'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0} \u516C\u65A4'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0} \u514B'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0} \u78BC'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0} \u76AE\u7C73'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0} \u516C\u91D0'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0} \u82F1\u91CC'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0} \u516C\u5C3A'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0} \u5149\u5E74'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0} \u516C\u91CC'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0} \u540B'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0} \u544E'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0} \u516C\u5206'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0} \u5E74'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0} \u9031'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0} \u500B\u6708'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0} \u78C5'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0} \u5339'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0} \u5343\u74E6'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0} \u74E6\u7279'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0} \u767E\u5E15'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0} \u82F1\u540B\u6C5E\u67F1'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0} \u6BEB\u5DF4'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0} \u5347'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0} \u7ACB\u65B9\u82F1\u91CC'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0} \u82F1\u91CC/\u5C0F\u6642'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0} \u516C\u5C3A/\u79D2'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0} \u516C\u91CC/\u5C0F\u6642'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0} \u5206\u9418'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0} \u6BEB\u79D2'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0} \u5C0F\u6642'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0} \u5929'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u82F1\u91CC'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0}G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0} \u5206\u9418'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0} \u79D2'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0} \u5EA6'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0} \u82F1\u755D'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0} \u516C\u9803'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u82F1\u5C3A'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0} \u79D2'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
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
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
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
                                '8': '8\u6708',
                                '7': '7\u6708',
                                '6': '6\u6708',
                                '5': '5\u6708',
                                '12': '12\u6708',
                                '11': '11\u6708',
                                '10': '10\u6708',
                                '9': '9\u6708',
                                '1': '1\u6708',
                                '2': '2\u6708',
                                '3': '3\u6708',
                                '4': '4\u6708'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u9031\u65E5',
                                'mon': '\u9031\u4E00',
                                'tue': '\u9031\u4E8C',
                                'wed': '\u9031\u4E09',
                                'thu': '\u9031\u56DB',
                                'fri': '\u9031\u4E94',
                                'sat': '\u9031\u516D'
                            },
                            'narrow': {
                                'sun': '\u65E5',
                                'mon': '\u4E00',
                                'tue': '\u4E8C',
                                'wed': '\u4E09',
                                'thu': '\u56DB',
                                'fri': '\u4E94',
                                'sat': '\u516D'
                            },
                            'short': {
                                'sun': '\u65E5',
                                'mon': '\u4E00',
                                'tue': '\u4E8C',
                                'wed': '\u4E09',
                                'thu': '\u56DB',
                                'fri': '\u4E94',
                                'sat': '\u516D'
                            },
                            'wide': {
                                'sun': '\u661F\u671F\u65E5',
                                'mon': '\u661F\u671F\u4E00',
                                'tue': '\u661F\u671F\u4E8C',
                                'wed': '\u661F\u671F\u4E09',
                                'thu': '\u661F\u671F\u56DB',
                                'fri': '\u661F\u671F\u4E94',
                                'sat': '\u661F\u671F\u516D'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u9031\u65E5',
                                'mon': '\u9031\u4E00',
                                'tue': '\u9031\u4E8C',
                                'wed': '\u9031\u4E09',
                                'thu': '\u9031\u56DB',
                                'fri': '\u9031\u4E94',
                                'sat': '\u9031\u516D'
                            },
                            'narrow': {
                                'sun': '\u65E5',
                                'mon': '\u4E00',
                                'tue': '\u4E8C',
                                'wed': '\u4E09',
                                'thu': '\u56DB',
                                'fri': '\u4E94',
                                'sat': '\u516D'
                            },
                            'short': {
                                'sun': '\u65E5',
                                'mon': '\u4E00',
                                'tue': '\u4E8C',
                                'wed': '\u4E09',
                                'thu': '\u56DB',
                                'fri': '\u4E94',
                                'sat': '\u516D'
                            },
                            'wide': {
                                'sun': '\u661F\u671F\u65E5',
                                'mon': '\u661F\u671F\u4E00',
                                'tue': '\u661F\u671F\u4E8C',
                                'wed': '\u661F\u671F\u4E09',
                                'thu': '\u661F\u671F\u56DB',
                                'fri': '\u661F\u671F\u4E94',
                                'sat': '\u661F\u671F\u516D'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1\u5B63',
                                '2': '2\u5B63',
                                '3': '3\u5B63',
                                '4': '4\u5B63'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u7B2C1\u5B63',
                                '2': '\u7B2C2\u5B63',
                                '3': '\u7B2C3\u5B63',
                                '4': '\u7B2C4\u5B63'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1\u5B63',
                                '2': '2\u5B63',
                                '3': '3\u5B63',
                                '4': '4\u5B63'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '\u7B2C1\u5B63',
                                '2': '\u7B2C2\u5B63',
                                '3': '\u7B2C3\u5B63',
                                '4': '\u7B2C4\u5B63'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'narrow': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'wide': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'narrow': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            },
                            'wide': {
                                'pm': '\u4E0B\u5348',
                                'weeHours': '\u51CC\u6668',
                                'afternoon': '\u4E0B\u5348',
                                'am': '\u4E0A\u5348',
                                'earlyMorning': '\u6E05\u6668',
                                'midDay': '\u4E2D\u5348',
                                'morning': '\u4E0A\u5348',
                                'night': '\u665A\u4E0A',
                                'noon': '\u4E2D\u5348'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u897F\u5143\u524D',
                            '0-alt-variant': '\u516C\u5143\u524D',
                            '1': '\u897F\u5143',
                            '1-alt-variant': '\u516C\u5143'
                        },
                        'eraAbbr': {
                            '0': '\u897F\u5143\u524D',
                            '0-alt-variant': '\u516C\u5143\u524D',
                            '1': '\u897F\u5143',
                            '1-alt-variant': '\u516C\u5143'
                        },
                        'eraNarrow': {
                            '0': '\u897F\u5143\u524D',
                            '0-alt-variant': '\u516C\u5143\u524D',
                            '1': '\u897F\u5143',
                            '1-alt-variant': '\u516C\u5143'
                        }
                    },
                    'dateFormats': {
                        'full': 'y\u5E74M\u6708d\u65E5EEEE',
                        'long': 'y\u5E74M\u6708d\u65E5',
                        'medium': 'y\u5E74M\u6708d\u65E5',
                        'short': 'y/M/d'
                    },
                    'timeFormats': {
                        'full': 'zzzzah\u6642mm\u5206ss\u79D2',
                        'long': 'zah\u6642mm\u5206ss\u79D2',
                        'medium': 'ah:mm:ss',
                        'short': 'ah:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}{0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'y\u5E74M\u6708d\u65E5',
                            'yMMM': 'y\u5E74M\u6708',
                            'yMM': 'y-MM',
                            'yMEd': 'y/M/d\uFF08E\uFF09',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E a h:mm',
                            'Ed': 'd\u65E5\uFF08E\uFF09',
                            'd': 'd\u65E5',
                            'GyMMMd': 'G y \u5E74 M \u6708 d \u65E5',
                            'GyMMMEd': 'G y \u5E74 M \u6708 d \u65E5E',
                            'h': 'ah\u6642',
                            'H': 'H\u6642',
                            'yQQQQ': 'y\u5E74QQQQ',
                            'yQQQ': 'y\u5E74QQQ',
                            'yMMMM': 'y\u5E74M\u6708',
                            'yMMMEd': 'y\u5E74M\u6708d\u65E5E',
                            'Hms': 'HH:mm:ss',
                            'hms': 'ah:mm:ss',
                            'Hm': 'HH:mm',
                            'hm': 'ah:mm',
                            'Ehms': 'E a h:mm:ss',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'G y \u5E74',
                            'GyMMM': 'G y \u5E74 M \u6708',
                            'M': 'M\u6708',
                            'Md': 'M/d',
                            'MEd': 'M/d\uFF08E\uFF09',
                            'MMdd': 'MM/dd',
                            'MMM': 'LLL',
                            'MMMd': 'M\u6708d\u65E5',
                            'MMMEd': 'M\u6708d\u65E5E',
                            'MMMMdd': 'M\u6708dd\u65E5',
                            'ms': 'mm:ss',
                            'y': 'y\u5E74',
                            'yM': 'y/M',
                            'yMd': 'y/M/d'
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
                                'd': 'M\u6708d\u65E5E\u81F3d\u65E5E',
                                'M': 'M\u6708d\u65E5E\u81F3M\u6708d\u65E5E'
                            },
                            'MMMd': {
                                'd': 'M\u6708d\u65E5\u81F3d\u65E5',
                                'M': 'M\u6708d\u65E5\u81F3M\u6708d\u65E5'
                            },
                            'MMM': {
                                'M': 'LLL\u81F3LLL'
                            },
                            'MEd': {
                                'd': 'M/dE\u81F3M/dE',
                                'M': 'M/dE\u81F3M/dE'
                            },
                            'Md': {
                                'd': 'M/d\u81F3M/d',
                                'M': 'M/d\u81F3M/d'
                            },
                            'M': {
                                'M': 'M\u6708\u81F3M\u6708'
                            },
                            'Hv': {
                                'H': 'HH\u2013HH [v]'
                            },
                            'hv': {
                                'a': 'a h \u6642\u81F3a h \u6642 [v]',
                                'h': 'a h \u6642\u81F3 h \u6642 [v]'
                            },
                            'intervalFormatFallback': '{0}\u81F3{1}',
                            'y': {
                                'y': 'y\u81F3y'
                            },
                            'yM': {
                                'M': 'y/M\u81F3y/M',
                                'y': 'y/M\u81F3y/M'
                            },
                            'yMd': {
                                'd': 'y/M/d\u81F3y/M/d',
                                'M': 'y/M/d\u81F3y/M/d',
                                'y': 'y/M/d\u81F3y/M/d'
                            },
                            'yMEd': {
                                'd': 'y/M/dE\u81F3y/M/dE',
                                'M': 'y/M/dE\u81F3y/M/dE',
                                'y': 'y/M/dE\u81F3y/M/dE'
                            },
                            'yMMM': {
                                'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                            },
                            'yMMMd': {
                                'd': 'y\u5E74M\u6708d\u65E5\u81F3d\u65E5',
                                'M': 'y\u5E74M\u6708d\u65E5\u81F3M\u6708d\u65E5',
                                'y': 'y\u5E74M\u6708d\u65E5\u81F3y\u5E74M\u6708d\u65E5'
                            },
                            'yMMMEd': {
                                'd': 'y\u5E74M\u6708d\u65E5E\u81F3d\u65E5E',
                                'M': 'y\u5E74M\u6708d\u65E5E\u81F3M\u6708d\u65E5E',
                                'y': 'y\u5E74M\u6708d\u65E5E\u81F3y\u5E74M\u6708d\u65E5E'
                            },
                            'yMMMM': {
                                'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                            },
                            'MMMM': {
                                'M': 'LLLL\u81F3 LLLL'
                            },
                            'Hmv': {
                                'H': 'HH:mm\u2013HH:mm [v]',
                                'm': 'HH:mm\u2013HH:mm [v]'
                            },
                            'hmv': {
                                'a': 'a h:mm \u81F3a h:mm [v]',
                                'h': 'a h:mm \u81F3 h:mm [v]',
                                'm': 'a h:mm \u81F3 h:mm [v]'
                            },
                            'Hm': {
                                'H': 'HH:mm\u2013HH:mm',
                                'm': 'HH:mm\u81F3HH:mm'
                            },
                            'hm': {
                                'a': 'ah:mm\u81F3ah:mm',
                                'h': 'ah:mm\u81F3h:mm',
                                'm': 'ah:mm\u81F3h:mm'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'ah\u6642\u81F3ah\u6642',
                                'h': 'ah\u6642\u81F3h\u6642'
                            },
                            'd': {
                                'd': 'd\u65E5\u81F3d\u65E5'
                            }
                        }
                    }
                }
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u585E\u73ED'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u62C9\u7F85\u6E6F\u52A0'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u83AB\u58EB\u6BD4\u6E2F'
                        },
                        'Ponape': {
                            'exemplarCity': '\u6CE2\u7D0D\u4F69'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u5339\u7279\u958B\u6069\u7FA4\u5CF6'
                        },
                        'Palau': {
                            'exemplarCity': '\u5E1B\u7409'
                        },
                        'Auckland': {
                            'exemplarCity': '\u5967\u514B\u862D'
                        },
                        'Apia': {
                            'exemplarCity': '\u963F\u76AE\u4E9E'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u5BCC\u90A3\u5BCC\u63D0'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u52A0\u62C9\u5DF4\u54E5\u7FA4\u5CF6'
                        },
                        'Gambier': {
                            'exemplarCity': '\u7518\u6BD4\u723E\u7FA4\u5CF6'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u74DC\u9054\u5EB7\u7D0D\u723E\u5CF6'
                        },
                        'Guam': {
                            'exemplarCity': '\u95DC\u5CF6'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u6A80\u9999\u5C71'
                        },
                        'Wallis': {
                            'exemplarCity': '\u74E6\u5229\u65AF'
                        },
                        'Wake': {
                            'exemplarCity': '\u5A01\u514B'
                        },
                        'Truk': {
                            'exemplarCity': '\u695A\u514B'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u6771\u52A0\u5854\u5E03\u5CF6'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u5854\u62C9\u74E6'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u5927\u6EAA\u5730'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u57FA\u91CC\u5730\u99AC\u5730\u5CF6'
                        },
                        'Johnston': {
                            'exemplarCity': '\u5F37\u65AF\u9813'
                        },
                        'Chatham': {
                            'exemplarCity': '\u67E5\u5766'
                        },
                        'Easter': {
                            'exemplarCity': '\u5FA9\u6D3B\u5CF6'
                        },
                        'Efate': {
                            'exemplarCity': '\u57C3\u6CD5\u7279'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u6069\u5F97\u4F2F\u7406\u5CF6'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u6CD5\u8003\u798F'
                        },
                        'Fiji': {
                            'exemplarCity': '\u6590\u6FDF'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u79D1\u65AF\u745E'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u74DC\u52A0\u6797\u5CF6'
                        },
                        'Majuro': {
                            'exemplarCity': '\u99AC\u6731\u8AFE'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u99AC\u53EF\u85A9\u65AF\u5CF6'
                        },
                        'Midway': {
                            'exemplarCity': '\u4E2D\u9014\u5CF6'
                        },
                        'Nauru': {
                            'exemplarCity': '\u8AFE\u9B6F'
                        },
                        'Niue': {
                            'exemplarCity': '\u7D10\u57C3'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u8AFE\u798F\u514B'
                        },
                        'Noumea': {
                            'exemplarCity': '\u8AFE\u7F8E\u4E9E'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u5DF4\u54E5\u5DF4\u54E5'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u6797\u5FB7\u66FC'
                        },
                        'Hobart': {
                            'exemplarCity': '\u8377\u5DF4\u7279'
                        },
                        'Eucla': {
                            'exemplarCity': '\u5C24\u514B\u62C9'
                        },
                        'Darwin': {
                            'exemplarCity': '\u9054\u723E\u6587'
                        },
                        'Sydney': {
                            'exemplarCity': '\u96EA\u68A8'
                        },
                        'Perth': {
                            'exemplarCity': '\u4F2F\u65AF'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u58A8\u723E\u672C'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u8C6A\u52F3\u7235\u5CF6'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u963F\u5F97\u96F7\u5FB7'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u5E03\u5229\u65AF\u73ED'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u5E03\u7F85\u80AF\u5E0C\u723E'
                        },
                        'Currie': {
                            'exemplarCity': '\u514B\u9ECE'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u99AC\u723E\u5730\u592B'
                        },
                        'Mahe': {
                            'exemplarCity': '\u99AC\u57C3\u5CF6'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u51F1\u723E\u84CB\u6717\u5CF6'
                        },
                        'Reunion': {
                            'exemplarCity': '\u7559\u5C3C\u65FA\u5CF6'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u99AC\u7D04\u7279\u5CF6'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u6A21\u91CC\u897F\u65AF'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u5B89\u5854\u90A3\u90A3\u5229\u4F5B'
                        },
                        'Chagos': {
                            'exemplarCity': '\u67E5\u6208\u65AF'
                        },
                        'Christmas': {
                            'exemplarCity': '\u8056\u8A95\u5CF6'
                        },
                        'Cocos': {
                            'exemplarCity': '\u79D1\u79D1\u65AF\u7FA4\u5CF6'
                        },
                        'Comoro': {
                            'exemplarCity': '\u79D1\u6469\u7F85\u7FA4\u5CF6'
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
                            'exemplarCity': '\u672A\u77E5\u57CE\u5E02'
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
                            'exemplarCity': '\u7F85\u745F\u62C9'
                        },
                        'Palmer': {
                            'exemplarCity': '\u5E15\u9EA5'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u9EA5\u514B\u9ED8\u591A'
                        },
                        'Vostok': {
                            'exemplarCity': '\u83AB\u65AF\u6258\u514B'
                        },
                        'Syowa': {
                            'exemplarCity': '\u662D\u548C'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u5357\u6975'
                        },
                        'Casey': {
                            'exemplarCity': '\u51F1\u897F'
                        },
                        'Davis': {
                            'exemplarCity': '\u6234\u7DAD\u65AF'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u675C\u8499\u675C\u723E\u7DAD\u723E'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u9EA5\u89BA\u7406'
                        },
                        'Mawson': {
                            'exemplarCity': '\u83AB\u68EE'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u9686\u610F\u8033\u62DC\u6069'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u591A\u502B\u591A'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u63D0\u83EF\u7D0D'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u73CA\u5FB7\u7063'
                        },
                        'Thule': {
                            'exemplarCity': '\u675C\u91CC'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u5FB7\u53E4\u65AF\u52A0\u5DF4'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u65AF\u5A01\u592B\u7279\u5361\u502B\u7279'
                        },
                        'Chicago': {
                            'exemplarCity': '\u829D\u52A0\u54E5'
                        },
                        'Cayman': {
                            'exemplarCity': '\u958B\u66FC\u7FA4\u5CF6'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u958B\u96F2'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u5361\u5854\u99AC\u5361'
                        },
                        'Caracas': {
                            'exemplarCity': '\u5361\u62C9\u5361\u65AF'
                        },
                        'Cancun': {
                            'exemplarCity': '\u5EB7\u5EAB'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u683C\u862D\u5834'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u528D\u6A4B\u7063'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u5E03\u5B9C\u8AFE\u65AF\u827E\u5229\u65AF'
                        },
                        'Boise': {
                            'exemplarCity': '\u6CE2\u5915'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u4E9E\u677E\u68EE'
                        },
                        'Aruba': {
                            'exemplarCity': '\u963F\u9B6F\u5DF4'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u91CC\u5967\u52A0\u8036\u6208\u65AF'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u8056\u80E1\u5B89'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u70CF\u65AF\u61F7\u4E9E'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u62C9\u7565\u54C8'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u8056\u8DEF\u6613'
                            },
                            'Salta': {
                                'exemplarCity': '\u85A9\u723E\u5854'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u5410\u5EAB\u66FC'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u963F\u62C9\u572D\u90A3'
                        },
                        'Antigua': {
                            'exemplarCity': '\u5B89\u5730\u5361'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u5B89\u5409\u62C9'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u5B89\u514B\u62C9\u6CBB'
                        },
                        'Adak': {
                            'exemplarCity': '\u827E\u9054\u514B'
                        },
                        'Bahia': {
                            'exemplarCity': '\u5DF4\u4F0A\u963F'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u5DF4\u4F0A\u4E9E\u73ED\u5FB7\u62C9\u65AF'
                        },
                        'Barbados': {
                            'exemplarCity': '\u5DF4\u8C9D\u591A'
                        },
                        'Belem': {
                            'exemplarCity': '\u8C9D\u502B'
                        },
                        'Belize': {
                            'exemplarCity': '\u8C9D\u91CC\u65AF'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u767D\u6717\u85A9\u5E03\u9686'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u4FDD\u7DAD\u65AF\u5854'
                        },
                        'Bogota': {
                            'exemplarCity': '\u6CE2\u54E5\u5927'
                        },
                        'Curacao': {
                            'exemplarCity': '\u5EAB\u62C9\u7D22'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u4E39\u99AC\u6C99\u6587'
                        },
                        'Dawson': {
                            'exemplarCity': '\u9053\u751F\u6CB3'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u9053\u751F\u7063'
                        },
                        'Denver': {
                            'exemplarCity': '\u4E39\u4F5B'
                        },
                        'Detroit': {
                            'exemplarCity': '\u5E95\u7279\u5F8B'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u57C3\u83AB\u897F\u7D04'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u90A3\u5DDE\u6EAB\u68EE\u65AF'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u5F7C\u5F97\u5821\uFF0C\u5370\u7B2C\u5B89\u90A3\u5DDE'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u90A3\u5DDE\u6CF0\u723E\u57CE'
                            },
                            'Knox': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u90A3\u5DDE\u8AFE\u514B\u65AF'
                            },
                            'Winamac': {
                                'exemplarCity': '\u5A01\u7D0D\u9EA5\u514B\uFF0C\u5370\u7B2C\u5B89\u90A3\u5DDE'
                            },
                            'Marengo': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u90A3\u5DDE\u99AC\u502B\u54E5'
                            },
                            'Vevay': {
                                'exemplarCity': '\u5370\u7B2C\u5B89\u90A3\u5DDE\u7DAD\u5A01'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u5370\u7B2C\u5B89\u90A3\u6CE2\u91CC\u65AF'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u4F0A\u5974\u7DAD\u514B'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u4F0A\u9B41\u7279'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u7259\u8CB7\u52A0'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u80E1\u80E1\u4F0A'
                        },
                        'Juneau': {
                            'exemplarCity': '\u6731\u8AFE'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u8036\u6D1B\u5948\u592B'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u96C5\u5EAB\u5854'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u6EAB\u5C3C\u4F2F'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u61F7\u7279\u970D\u65AF'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u6EAB\u54E5\u83EF'
                        },
                        'Tortola': {
                            'exemplarCity': '\u6258\u723E\u6258\u62C9'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u514B\u62C9\u502B\u4EE3\u514B'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u80AF\u5854\u57FA\u5DDE\u8499\u5730\u537B\u7F85'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u54C8\u74E6\u90A3'
                        },
                        'Halifax': {
                            'exemplarCity': '\u54C8\u91CC\u6CD5\u514B\u65AF'
                        },
                        'Guyana': {
                            'exemplarCity': '\u572D\u4E9E\u90A3'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u74DC\u4E9E\u57FA\u723E'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u74DC\u5730\u99AC\u62C9'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u74DC\u5FB7\u7F85\u666E'
                        },
                        'Grenada': {
                            'exemplarCity': '\u683C\u745E\u7D0D\u9054'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u5927\u7279\u514B\u5CF6'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u9D5D\u7063'
                        },
                        'Godthab': {
                            'exemplarCity': '\u52AA\u514B'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u683C\u96F7\u65AF\u8C9D'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u798F\u5854\u529B\u838E'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u85A9\u723E\u74E6\u591A'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u827E\u9B6F\u5167\u4F69'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u827E\u5FB7\u8499\u541E'
                        },
                        'Dominica': {
                            'exemplarCity': '\u591A\u660E\u5C3C\u52A0'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u5947\u83EF\u83EF'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u963F\u8482\u79D1\u80AF'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u54E5\u591A\u83EF'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u54E5\u65AF\u5927\u9ECE\u52A0'
                        },
                        'Creston': {
                            'exemplarCity': '\u514B\u96F7\u65AF\u9813'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u53E4\u96C5\u5DF4'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u62C9\u5DF4\u65AF'
                        },
                        'Lima': {
                            'exemplarCity': '\u5229\u99AC'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u6D1B\u6749\u78EF'
                        },
                        'Louisville': {
                            'exemplarCity': '\u8DEF\u6613\u65AF\u7DAD\u723E'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u4E0B\u592A\u5B50\u5340'
                        },
                        'Maceio': {
                            'exemplarCity': '\u99AC\u745F\u6B50'
                        },
                        'Managua': {
                            'exemplarCity': '\u99AC\u90A3\u74DC'
                        },
                        'Manaus': {
                            'exemplarCity': '\u746A\u7459\u65AF'
                        },
                        'Marigot': {
                            'exemplarCity': '\u99AC\u91CC\u6208\u7279'
                        },
                        'Martinique': {
                            'exemplarCity': '\u99AC\u4E01\u5C3C\u514B'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u99AC\u5854\u83AB\u7F85\u65AF'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u99AC\u85A9\u7279\u862D'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u9580\u591A\u85A9'
                        },
                        'Menominee': {
                            'exemplarCity': '\u7F8E\u8AFE\u7C73\u5C3C'
                        },
                        'Merida': {
                            'exemplarCity': '\u6885\u91CC\u9054'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u6885\u7279\u62C9\u5361\u7279\u62C9'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u58A8\u897F\u54E5\u5E02'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u5BC6\u555F\u5D19'
                        },
                        'Moncton': {
                            'exemplarCity': '\u8499\u514B\u9813'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u8499\u7279\u745E'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u8499\u7279\u7DAD\u591A'
                        },
                        'Montreal': {
                            'exemplarCity': '\u8499\u7279\u5A41'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u8499\u8CFD\u62C9\u7279'
                        },
                        'Nassau': {
                            'exemplarCity': '\u62FF\u7D22'
                        },
                        'New_York': {
                            'exemplarCity': '\u7D10\u7D04'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u5C3C\u76AE\u5CA1'
                        },
                        'Nome': {
                            'exemplarCity': '\u8AFE\u59C6'
                        },
                        'Noronha': {
                            'exemplarCity': '\u8AFE\u502B\u54C8'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u5317\u9054\u79D1\u4ED6\u5DDE\u5E03\u7531\u62C9'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u5317\u9054\u79D1\u4ED6\u5DDE\u7D10\u6C99\u502B'
                            },
                            'Center': {
                                'exemplarCity': '\u7533\u7279\u57CE'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u5967\u5E0C\u7D0D\u52A0'
                        },
                        'Panama': {
                            'exemplarCity': '\u5DF4\u62FF\u99AC'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u6F58\u5C3C\u723E\u6771'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u5DF4\u62C9\u99AC\u5229\u6CE2'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u9CF3\u51F0\u57CE'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u592A\u5B50\u6E2F'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u897F\u73ED\u7259\u6E2F'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u7DAD\u7559\u6E2F'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u6CE2\u591A\u9ECE\u5404'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u96E8\u6CB3\u93AE'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u862D\u4ECA\u7063'
                        },
                        'Recife': {
                            'exemplarCity': '\u96F7\u897F\u975E'
                        },
                        'Regina': {
                            'exemplarCity': '\u91CC\u8CC8\u7D0D'
                        },
                        'Resolute': {
                            'exemplarCity': '\u7F85\u65AF\u9B6F\u7279'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u91CC\u7D04\u5E03\u862D'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u8056\u4F0A\u85A9\u8C9D\u723E'
                        },
                        'Santarem': {
                            'exemplarCity': '\u8056\u5854\u502B'
                        },
                        'Santiago': {
                            'exemplarCity': '\u8056\u5730\u7259\u54E5'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u8056\u591A\u660E\u54E5'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u8056\u4FDD\u7F85'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u4F0A\u6258\u79D1\u723E\u6258\u7C73\u7279'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u8239\u5CA9\u5CF0'
                        },
                        'Sitka': {
                            'exemplarCity': '\u932B\u7279\u5361'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u8056\u5DF4\u6258\u6D1B\u7E46\u5CF6'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u8056\u7D04\u7FF0'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u8056\u57FA\u8328'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u8056\u9732\u897F\u4E9E'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u8056\u6258\u99AC\u65AF'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u8056\u6587\u68EE'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u5357\u55AC\u6CBB\u4E9E'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u96F7\u514B\u96C5\u7DAD\u514B'
                        },
                        'Stanley': {
                            'exemplarCity': '\u53F2\u5766\u5229'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u8056\u8D6B\u52D2\u62FF\u5CF6'
                        },
                        'Azores': {
                            'exemplarCity': '\u4E9E\u901F\u723E\u7FA4\u5CF6'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u767E\u6155\u9054'
                        },
                        'Canary': {
                            'exemplarCity': '\u52A0\u7D0D\u5229'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u7DAD\u5FB7\u89D2'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u6CD5\u7F85\u7FA4\u5CF6'
                        },
                        'Madeira': {
                            'exemplarCity': '\u99AC\u5F97\u62C9\u7FA4\u5CF6'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u5967\u65AF\u9678'
                        },
                        'Moscow': {
                            'exemplarCity': '\u83AB\u65AF\u79D1'
                        },
                        'Monaco': {
                            'exemplarCity': '\u6469\u7D0D\u54E5'
                        },
                        'Minsk': {
                            'exemplarCity': '\u660E\u65AF\u514B'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u746A\u9E97\u6E2F'
                        },
                        'Malta': {
                            'exemplarCity': '\u99AC\u723E\u4ED6'
                        },
                        'Madrid': {
                            'exemplarCity': '\u99AC\u5FB7\u91CC'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u76E7\u68EE\u5821'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u82F1\u570B\u590F\u4EE4\u6642\u9593'
                            },
                            'exemplarCity': '\u502B\u6566'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u76E7\u6BD4\u5B89\u7D0D'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u91CC\u65AF\u672C'
                        },
                        'Kiev': {
                            'exemplarCity': '\u57FA\u8F14'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u52A0\u91CC\u5BE7\u683C\u52D2'
                        },
                        'Jersey': {
                            'exemplarCity': '\u6FA4\u897F\u5CF6'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u4F0A\u65AF\u5766\u5821'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u66FC\u5CF6'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u5E03\u52A0\u52D2\u65AF\u7279'
                        },
                        'Brussels': {
                            'exemplarCity': '\u5E03\u9B6F\u585E\u723E'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u5E03\u62C9\u63D0\u65AF\u62C9\u74E6'
                        },
                        'Berlin': {
                            'exemplarCity': '\u67CF\u6797'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u8C9D\u723E\u683C\u52D2'
                        },
                        'Athens': {
                            'exemplarCity': '\u96C5\u5178'
                        },
                        'Andorra': {
                            'exemplarCity': '\u5B89\u9053\u723E'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u963F\u59C6\u65AF\u7279\u4E39'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u8F9B\u975E\u6D1B\u6D66'
                        },
                        'Skopje': {
                            'exemplarCity': '\u53F2\u9AD8\u6BD4\u8036'
                        },
                        'Sofia': {
                            'exemplarCity': '\u7D22\u83F2\u4E9E'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u65AF\u5FB7\u54E5\u723E\u6469'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u5854\u6797'
                        },
                        'Tirane': {
                            'exemplarCity': '\u5730\u62C9\u90A3'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u70CF\u8332\u54E5\u6D1B'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u74E6\u90FD\u8332'
                        },
                        'Zurich': {
                            'exemplarCity': '\u8607\u9ECE\u4E16'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u672D\u6CE2\u7F85\u7D50'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u672D\u683C\u96F7\u5E03'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u83EF\u6C99'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u4F0F\u723E\u52A0\u683C\u52D2'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u7DAD\u723E\u7D10\u65AF'
                        },
                        'Vienna': {
                            'exemplarCity': '\u7DAD\u4E5F\u7D0D'
                        },
                        'Vatican': {
                            'exemplarCity': '\u68B5\u8482\u5CA1'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u585E\u62C9\u8036\u4F5B'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u8056\u99AC\u5229\u8AFE'
                        },
                        'Samara': {
                            'exemplarCity': '\u6C99\u99AC\u62C9'
                        },
                        'Rome': {
                            'exemplarCity': '\u7F85\u99AC'
                        },
                        'Riga': {
                            'exemplarCity': '\u91CC\u52A0'
                        },
                        'Prague': {
                            'exemplarCity': '\u5E03\u62C9\u683C'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u6CE2\u591A\u91CC\u5BDF'
                        },
                        'Paris': {
                            'exemplarCity': '\u5DF4\u9ECE'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u8D6B\u723E\u8F9B\u57FA'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u6839\u606F\u5CF6'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u76F4\u5E03\u7F85\u9640'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u611B\u723E\u862D\u590F\u4EE4\u6642\u9593'
                            },
                            'exemplarCity': '\u90FD\u67CF\u6797'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u54E5\u672C\u54C8\u6839'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u5947\u897F\u7459'
                        },
                        'Busingen': {
                            'exemplarCity': '\u5E03\u8F9B\u6839'
                        },
                        'Budapest': {
                            'exemplarCity': '\u5E03\u9054\u4F69\u65AF'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u81EA\u7531\u5E02'
                        },
                        'Lagos': {
                            'exemplarCity': '\u62C9\u54E5\u65AF'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u91D1\u590F\u6C99'
                        },
                        'Kigali': {
                            'exemplarCity': '\u57FA\u52A0\u5229'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u5580\u571F\u7A46'
                        },
                        'Kampala': {
                            'exemplarCity': '\u574E\u5E15\u62C9'
                        },
                        'Juba': {
                            'exemplarCity': '\u6731\u5DF4'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u7D04\u7FF0\u5C3C\u65AF\u5821'
                        },
                        'Harare': {
                            'exemplarCity': '\u54C8\u62C9\u96F7'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u5609\u67CF\u9686\u91CC'
                        },
                        'Freetown': {
                            'exemplarCity': '\u81EA\u7531\u57CE'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u963F\u5C24\u6069'
                        },
                        'Douala': {
                            'exemplarCity': '\u675C\u963F\u62C9'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u5409\u5E03\u5730'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u6C99\u862D\u6E2F'
                        },
                        'Dakar': {
                            'exemplarCity': '\u9054\u5580\u723E'
                        },
                        'Banjul': {
                            'exemplarCity': '\u73ED\u7AF9'
                        },
                        'Bangui': {
                            'exemplarCity': '\u73ED\u5409'
                        },
                        'Bamako': {
                            'exemplarCity': '\u5DF4\u99AC\u79D1'
                        },
                        'Asmera': {
                            'exemplarCity': '\u963F\u65AF\u746A\u62C9'
                        },
                        'Malabo': {
                            'exemplarCity': '\u99AC\u62C9\u535A'
                        },
                        'Maputo': {
                            'exemplarCity': '\u99AC\u666E\u6258'
                        },
                        'Maseru': {
                            'exemplarCity': '\u99AC\u8CFD\u9B6F'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u58A8\u5DF4\u672C'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u6469\u52A0\u8FEA\u4F11'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u8499\u7F85\u7DAD\u4E9E'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u5948\u6D1B\u6BD4'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u6069\u8CC8\u6885\u7D0D'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u6EAB\u5F97\u548C\u514B'
                        },
                        'Tunis': {
                            'exemplarCity': '\u7A81\u5C3C\u65AF'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u7684\u9ECE\u6CE2\u91CC'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u8056\u591A\u7F8E'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u6CE2\u591A\u8AFE\u4F5B'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u74E6\u52A0\u675C\u53E4'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u8AFE\u514B\u5C11'
                        },
                        'Niamey': {
                            'exemplarCity': '\u5C3C\u4E9E\u7F8E'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u8DEF\u6C99\u5361'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u76E7\u672C\u5DF4\u5E0C'
                        },
                        'Luanda': {
                            'exemplarCity': '\u7F85\u5B89\u9054'
                        },
                        'Lome': {
                            'exemplarCity': '\u6D1B\u7F8E'
                        },
                        'Conakry': {
                            'exemplarCity': '\u67EF\u90A3\u514B\u91CC'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u4F11\u9054'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u5361\u85A9\u5E03\u862D\u5361'
                        },
                        'Cairo': {
                            'exemplarCity': '\u958B\u7F85'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u5E03\u677E\u5E03\u62C9'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u5E03\u62C9\u67F4\u7DAD\u723E'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u5E03\u862D\u592A\u723E'
                        },
                        'Bissau': {
                            'exemplarCity': '\u6BD4\u7D39'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u963F\u6BD4\u8B93'
                        },
                        'Accra': {
                            'exemplarCity': '\u963F\u514B\u62C9'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u963F\u8FEA\u65AF\u963F\u8C9D\u5DF4'
                        },
                        'Algiers': {
                            'exemplarCity': '\u963F\u723E\u53CA\u723E'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u4E0A\u6D77'
                        },
                        'Seoul': {
                            'exemplarCity': '\u9996\u723E'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u6492\u99AC\u723E\u7F55'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u5EAB\u9801\u5CF6'
                        },
                        'Saigon': {
                            'exemplarCity': '\u80E1\u5FD7\u660E\u5E02'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u5229\u96C5\u5FB7'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u4EF0\u5149'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u514B\u5B5C\u52D2\u5967\u723E\u9054'
                        },
                        'Qatar': {
                            'exemplarCity': '\u5361\u9054'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u5E73\u58E4'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u5764\u7538'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u91D1\u908A'
                        },
                        'Oral': {
                            'exemplarCity': '\u70CF\u62C9\u723E'
                        },
                        'Omsk': {
                            'exemplarCity': '\u9102\u6728\u65AF\u514B'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u65B0\u897F\u4F2F\u5229\u4E9E'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u5DF4\u683C\u9054'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u91CD\u6176'
                        },
                        'Colombo': {
                            'exemplarCity': '\u53EF\u502B\u5761'
                        },
                        'Damascus': {
                            'exemplarCity': '\u5927\u99AC\u58EB\u9769'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u9054\u5361'
                        },
                        'Dili': {
                            'exemplarCity': '\u5E1D\u529B'
                        },
                        'Dubai': {
                            'exemplarCity': '\u675C\u62DC'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u675C\u6851\u8C9D'
                        },
                        'Gaza': {
                            'exemplarCity': '\u52A0\u85A9'
                        },
                        'Harbin': {
                            'exemplarCity': '\u54C8\u723E\u6FF1'
                        },
                        'Hebron': {
                            'exemplarCity': '\u8D6B\u5E03\u9686'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u9999\u6E2F\u7279\u5225\u884C\u653F\u5340'
                        },
                        'Hovd': {
                            'exemplarCity': '\u79D1\u5E03\u591A'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u4F0A\u723E\u5EAB\u6B21\u514B'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u96C5\u52A0\u9054'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u52A0\u4E9E\u5E03\u62C9'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u70CF\u862D\u5DF4\u6258'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u70CF\u9B6F\u6728\u9F4A'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u70CF\u65AF\u5167\u62C9'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u6C38\u73CD'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u6D77\u53C3\u5D34'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u96C5\u5EAB\u6B21\u514B'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u8449\u5361\u6377\u6797\u5821'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u8449\u91CC\u6EAB'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u6771\u4EAC'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u5EF7\u5E03'
                        },
                        'Tehran': {
                            'exemplarCity': '\u5FB7\u9ED1\u862D'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u7B2C\u6BD4\u5229\u65AF'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u5854\u4EC0\u5E72'
                        },
                        'Taipei': {
                            'exemplarCity': '\u53F0\u5317'
                        },
                        'Singapore': {
                            'exemplarCity': '\u65B0\u52A0\u5761'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u8036\u8DEF\u6492\u51B7'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u963F\u4EC0\u54C8\u5DF4\u7279'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u963F\u514B\u6258\u6BD4'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u963F\u514B\u5957'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u963F\u90A3\u5E95'
                        },
                        'Amman': {
                            'exemplarCity': '\u5B89\u66FC'
                        },
                        'Almaty': {
                            'exemplarCity': '\u963F\u62C9\u6728\u5716'
                        },
                        'Aden': {
                            'exemplarCity': '\u4E9E\u4E01'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u5DF4\u6797'
                        },
                        'Baku': {
                            'exemplarCity': '\u5DF4\u5EAB'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u66FC\u8C37'
                        },
                        'Beirut': {
                            'exemplarCity': '\u8C9D\u9B6F\u7279'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u6BD4\u4EC0\u51F1\u514B'
                        },
                        'Brunei': {
                            'exemplarCity': '\u6C76\u840A'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u52A0\u723E\u5404\u7B54'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u55AC\u5DF4\u5C71'
                        },
                        'Kabul': {
                            'exemplarCity': '\u5580\u5E03\u723E'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u582A\u5BDF\u52A0'
                        },
                        'Karachi': {
                            'exemplarCity': '\u5580\u62C9\u86A9'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u5580\u4EC0\u7C73\u723E'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u52A0\u5FB7\u6EFF\u90FD'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u582A\u5730\u52A0'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u514B\u62C9\u65AF\u8AFE\u96C5\u65AF\u514B'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u5409\u9686\u5761'
                        },
                        'Kuching': {
                            'exemplarCity': '\u53E4\u6649'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u79D1\u5A01\u7279'
                        },
                        'Macau': {
                            'exemplarCity': '\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u6FB3\u9580\u7279\u5225\u884C\u653F\u5340'
                        },
                        'Magadan': {
                            'exemplarCity': '\u99AC\u52A0\u4E39'
                        },
                        'Makassar': {
                            'exemplarCity': '\u99AC\u5361\u6C99\u723E'
                        },
                        'Manila': {
                            'exemplarCity': '\u99AC\u5C3C\u62C9'
                        },
                        'Muscat': {
                            'exemplarCity': '\u963F\u66FC'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u5C3C\u53E4\u897F\u4E9E'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u65B0\u5EAB\u8332\u6D85\u8328\u514B'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '\u85A9\u6469\u4E9E\u6642\u9593',
                            'standard': '\u85A9\u6469\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u85A9\u6469\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u85A9\u99AC\u62C9\u6642\u9593',
                            'standard': '\u85A9\u99AC\u62C9\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u85A9\u99AC\u62C9\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u5EAB\u9801\u5CF6\u6642\u9593',
                            'standard': '\u5EAB\u9801\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5EAB\u9801\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u7F85\u897F\u62C9\u6642\u9593'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u7559\u5C3C\u65FA\u6642\u9593'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u514B\u5B5C\u52D2\u5967\u723E\u9054\u6642\u9593',
                            'standard': '\u514B\u5B5C\u52D2\u5967\u723E\u9054\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u514B\u5B5C\u52D2\u5967\u723E\u9054\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u6CE2\u7D0D\u4F69\u6642\u9593'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u76AE\u7279\u5EB7\u6642\u9593'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u8056\u76AE\u57C3\u723E\u548C\u5BC6\u514B\u9686\u7FA4\u5CF6\u6642\u9593',
                            'standard': '\u8056\u76AE\u57C3\u723E\u548C\u5BC6\u514B\u9686\u7FA4\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u8056\u76AE\u57C3\u723E\u548C\u5BC6\u514B\u9686\u7FA4\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u9CF3\u51F0\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u83F2\u5F8B\u8CD3\u6642\u9593',
                            'standard': '\u83F2\u5F8B\u8CD3\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u83F2\u5F8B\u8CD3\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u79D8\u9B6F\u6642\u9593',
                            'standard': '\u79D8\u9B6F\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u79D8\u9B6F\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u5DF4\u62C9\u572D\u6642\u9593',
                            'standard': '\u5DF4\u62C9\u572D\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5DF4\u62C9\u572D\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u5DF4\u5E03\u4E9E\u7D10\u5E7E\u5167\u4E9E\u6642\u9593'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u5E1B\u7409\u6642\u9593'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u5DF4\u57FA\u65AF\u5766\u6642\u9593',
                            'standard': '\u5DF4\u57FA\u65AF\u5766\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5DF4\u57FA\u65AF\u5766\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u9102\u6728\u65AF\u79D1\u6642\u9593',
                            'standard': '\u9102\u6728\u65AF\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u9102\u6728\u65AF\u514B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u65B0\u897F\u4F2F\u5229\u4E9E\u6642\u9593',
                            'standard': '\u65B0\u897F\u4F2F\u5229\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u65B0\u897F\u4F2F\u5229\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u5317\u99AC\u91CC\u4E9E\u7D0D\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u8CBB\u723E\u5357\u591A - \u8FEA\u8AFE\u7F85\u5C3C\u4E9E\u6642\u9593',
                            'standard': '\u8CBB\u723E\u5357\u591A - \u8FEA\u8AFE\u7F85\u5C3C\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u8CBB\u723E\u5357\u591A - \u8FEA\u8AFE\u7F85\u5C3C\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u8AFE\u798F\u514B\u5CF6\u6642\u9593'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u7D10\u5A01\u5CF6\u6642\u9593'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u7D10\u82AC\u862D\u6642\u9593',
                            'standard': '\u7D10\u82AC\u862D\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u7D10\u82AC\u862D\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u7D10\u897F\u862D\u6642\u9593',
                            'standard': '\u7D10\u897F\u862D\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u7D10\u897F\u862D\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u65B0\u5580\u91CC\u591A\u5C3C\u4E9E\u6642\u9593',
                            'standard': '\u65B0\u5580\u91CC\u591A\u5C3C\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u65B0\u5580\u91CC\u591A\u5C3C\u4E9E\u7FA4\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u4E2D\u90E8\u6642\u9593',
                            'standard': '\u4E2D\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E2D\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u6771\u90E8\u6642\u9593',
                            'standard': '\u6771\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6771\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u5C71\u5340\u6642\u9593',
                            'standard': '\u5C71\u5340\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5C71\u5340\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u592A\u5E73\u6D0B\u6642\u9593',
                            'standard': '\u592A\u5E73\u6D0B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u592A\u5E73\u6D0B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u963F\u7D0D\u5FB7\u723E\u6642\u9593',
                            'standard': '\u963F\u90A3\u5E95\u6CB3\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u90A3\u5E95\u6CB3\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\u963F\u514B\u9676\u6642\u9593',
                            'standard': '\u963F\u514B\u9676\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u514B\u9676\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\u963F\u514B\u6258\u6BD4\u6642\u9593',
                            'standard': '\u963F\u514B\u6258\u6BD4\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u514B\u6258\u6BD4\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u7DAD\u5FB7\u89D2\u6642\u9593',
                            'standard': '\u7DAD\u5FB7\u89D2\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u7DAD\u5FB7\u89D2\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '\u51F1\u897F\u7AD9\u6642\u9593'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u67E5\u83AB\u6D1B\u6642\u9593'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u67E5\u5766\u7FA4\u5CF6\u6642\u9593',
                            'standard': '\u67E5\u5766\u7FA4\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u67E5\u5766\u7FA4\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u667A\u5229\u6642\u9593',
                            'standard': '\u667A\u5229\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u667A\u5229\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u4E2D\u570B\u6642\u9593',
                            'standard': '\u4E2D\u570B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E2D\u570B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u55AC\u5DF4\u5C71\u6642\u9593',
                            'standard': '\u55AC\u5DF4\u5C71\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u55AC\u5DF4\u5C71\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u8056\u8A95\u5CF6\u6642\u9593'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u53EF\u53EF\u65AF\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u54E5\u502B\u6BD4\u4E9E\u6642\u9593',
                            'standard': '\u54E5\u502B\u6BD4\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u54E5\u502B\u6BD4\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u5EAB\u514B\u7FA4\u5CF6\u6642\u9593',
                            'standard': '\u5EAB\u514B\u7FA4\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5EAB\u514B\u7FA4\u5CF6\u534A\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u53E4\u5DF4\u6642\u9593',
                            'standard': '\u53E4\u5DF4\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u53E4\u5DF4\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u6234\u7DAD\u65AF\u6642\u9593'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u675C\u8499\u675C\u6BD4\u723E\u6642\u9593'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u6771\u5E1D\u6C76\u6642\u9593'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u5FA9\u6D3B\u7BC0\u5CF6\u6642\u9593',
                            'standard': '\u5FA9\u6D3B\u7BC0\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5FA9\u6D3B\u7BC0\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u5384\u74DC\u591A\u6642\u9593'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u4E2D\u6B50\u6642\u9593',
                            'standard': '\u4E2D\u6B50\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E2D\u6B50\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u6771\u6B50\u6642\u9593',
                            'standard': '\u6771\u6B50\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6771\u6B50\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u897F\u6B50\u6642\u9593',
                            'standard': '\u897F\u6B50\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u897F\u6B50\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u798F\u514B\u862D\u7FA4\u5CF6\u6642\u9593',
                            'standard': '\u798F\u514B\u862D\u7FA4\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u798F\u514B\u862D\u7FA4\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u6590\u6FDF\u6642\u9593',
                            'standard': '\u6590\u6FDF\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6590\u6FDF\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u6CD5\u5C6C\u572D\u4E9E\u90A3\u6642\u9593'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u6CD5\u570B\u5357\u65B9\u53CA\u5357\u6975\u6642\u9593'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u52A0\u62C9\u5E15\u6208\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u6258\u514B\u52DE\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u6771\u52A0\u6642\u9593',
                            'standard': '\u6771\u52A0\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6771\u52A0\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u695A\u514B\u5CF6\u6642\u9593'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u571F\u5EAB\u66FC\u6642\u9593',
                            'standard': '\u571F\u5EAB\u66FC\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u571F\u5EAB\u66FC\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u5410\u74E6\u9B6F\u6642\u9593'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u70CF\u62C9\u572D\u6642\u9593',
                            'standard': '\u70CF\u62C9\u572D\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u70CF\u62C9\u572D\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u70CF\u8332\u5225\u514B\u6642\u9593',
                            'standard': '\u70CF\u8332\u5225\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u70CF\u8332\u5225\u514B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u842C\u90A3\u675C\u6642\u9593',
                            'standard': '\u842C\u90A3\u675C\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u842C\u90A3\u675C\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u8449\u5361\u6377\u7433\u5821\u6642\u9593',
                            'standard': '\u8449\u5361\u6377\u7433\u5821\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u8449\u5361\u6377\u7433\u5821\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u96C5\u5EAB\u6B21\u514B\u6642\u9593',
                            'standard': '\u96C5\u5EAB\u6B21\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u96C5\u5EAB\u6B21\u514B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u74E6\u5229\u65AF\u548C\u798F\u675C\u7D0D\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u5A01\u514B\u5CF6\u6642\u9593'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u6C83\u65AF\u6258\u514B\u6642\u9593'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u4F0F\u723E\u52A0\u683C\u52D2\u6642\u9593',
                            'standard': '\u4F0F\u723E\u52A0\u683C\u52D2\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4F0F\u723E\u52A0\u683C\u52D2\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u6D77\u53C3\u5D34\u6642\u9593',
                            'standard': '\u6D77\u53C3\u5D34\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6D77\u53C3\u5D34\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u59D4\u5167\u745E\u62C9\u6642\u9593'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u5854\u5409\u514B\u6642\u9593'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u53F0\u5317\u6642\u9593',
                            'standard': '\u53F0\u5317\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u53F0\u5317\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u5927\u6EAA\u5730\u6642\u9593'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u662D\u548C\u57FA\u5730\u6642\u9593'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u8607\u5229\u5357\u6642\u9593'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u5357\u55AC\u6CBB\u4E9E\u6642\u9593'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u7D22\u7F85\u9580\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u65B0\u52A0\u5761\u6A19\u6E96\u6642\u9593'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u585E\u5E2D\u723E\u6642\u9593'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u95DC\u5CF6\u6A19\u6E96\u6642\u9593'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u683C\u9675\u862D\u897F\u90E8\u6642\u9593',
                            'standard': '\u683C\u9675\u862D\u897F\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u683C\u9675\u862D\u897F\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u683C\u9675\u862D\u6771\u90E8\u6642\u9593',
                            'standard': '\u683C\u9675\u862D\u6771\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u683C\u9675\u862D\u6771\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u683C\u6797\u5A01\u6CBB\u6A19\u6E96\u6642\u9593'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u5409\u723E\u4F2F\u7279\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u55AC\u6CBB\u4E9E\u6642\u9593',
                            'standard': '\u55AC\u6CBB\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u55AC\u6CBB\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u7518\u6BD4\u723E\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u4E9E\u99AC\u905C\u6642\u9593',
                            'standard': '\u4E9E\u99AC\u905C\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E9E\u99AC\u905C\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u827E\u514B\u6642\u9593',
                            'standard': '\u827E\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u827E\u514B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u963F\u5BCC\u6C57\u6642\u9593'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u4E2D\u975E\u6642\u9593'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u6771\u975E\u6642\u9593'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u5357\u975E\u6A19\u6E96\u6642\u9593'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u897F\u975E\u6642\u9593',
                            'standard': '\u897F\u975E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u897F\u975E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u963F\u62C9\u65AF\u52A0\u6642\u9593',
                            'standard': '\u963F\u62C9\u65AF\u52A0\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u62C9\u65AF\u52A0\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\u963F\u62C9\u6728\u5716\u6642\u9593',
                            'standard': '\u963F\u62C9\u6728\u5716\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u62C9\u6728\u5716\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u963F\u62C9\u4F2F\u6642\u9593',
                            'standard': '\u963F\u62C9\u4F2F\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u62C9\u4F2F\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u963F\u6839\u5EF7\u6642\u9593',
                            'standard': '\u963F\u6839\u5EF7\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u6839\u5EF7\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u963F\u6839\u5EF7\u897F\u90E8\u6642\u9593',
                            'standard': '\u963F\u6839\u5EF7\u897F\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u963F\u6839\u5EF7\u897F\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u4E9E\u7F8E\u5C3C\u4E9E\u6642\u9593',
                            'standard': '\u4E9E\u7F8E\u5C3C\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E9E\u7F8E\u5C3C\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u5927\u897F\u6D0B\u6642\u9593',
                            'standard': '\u5927\u897F\u6D0B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5927\u897F\u6D0B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u6FB3\u6D32\u4E2D\u90E8\u6642\u9593',
                            'standard': '\u6FB3\u6D32\u4E2D\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6FB3\u6D32\u4E2D\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u6FB3\u6D32\u4E2D\u897F\u90E8\u6642\u9593',
                            'standard': '\u6FB3\u6D32\u4E2D\u897F\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6FB3\u6D32\u4E2D\u897F\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u6FB3\u6D32\u6771\u90E8\u6642\u9593',
                            'standard': '\u6FB3\u6D32\u6771\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6FB3\u6D32\u6771\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u6FB3\u6D32\u897F\u90E8\u6642\u9593',
                            'standard': '\u6FB3\u6D32\u897F\u90E8\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6FB3\u6D32\u897F\u90E8\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u4E9E\u585E\u62DC\u7136\u6642\u9593',
                            'standard': '\u4E9E\u585E\u62DC\u7136\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E9E\u585E\u62DC\u7136\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u4E9E\u901F\u723E\u7FA4\u5CF6\u6642\u9593',
                            'standard': '\u4E9E\u901F\u723E\u7FA4\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4E9E\u901F\u723E\u7FA4\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u5B5F\u52A0\u62C9\u6642\u9593',
                            'standard': '\u5B5F\u52A0\u62C9\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5B5F\u52A0\u62C9\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u4E0D\u4E39\u6642\u9593'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u73BB\u5229\u7DAD\u4E9E\u6642\u9593'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u5DF4\u897F\u5229\u4E9E\u6642\u9593',
                            'standard': '\u5DF4\u897F\u5229\u4E9E\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5DF4\u897F\u5229\u4E9E\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u6C76\u840A\u6642\u9593'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u6CE2\u65AF\u7063\u6D77\u57DF\u6A19\u6E96\u6642\u9593'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u84CB\u4E9E\u7D0D\u6642\u9593'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u590F\u5A01\u5937-\u963F\u7559\u7533\u6642\u9593',
                            'standard': '\u590F\u5A01\u5937-\u963F\u7559\u7533\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u590F\u5A01\u5937-\u963F\u7559\u7533\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u9999\u6E2F\u6642\u9593',
                            'standard': '\u9999\u6E2F\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u9999\u6E2F\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u79D1\u5E03\u591A\u6642\u9593',
                            'standard': '\u79D1\u5E03\u591A\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u79D1\u5E03\u591A\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u5370\u5EA6\u6A19\u6E96\u6642\u9593'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u5370\u5EA6\u6D0B\u6642\u9593'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u5370\u5EA6\u652F\u90A3\u6642\u9593'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u5370\u5C3C\u4E2D\u90E8\u6642\u9593'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u5370\u5C3C\u6771\u90E8\u6642\u9593'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u5370\u5C3C\u897F\u90E8\u6642\u9593'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u4F0A\u6717\u6642\u9593',
                            'standard': '\u4F0A\u6717\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4F0A\u6717\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u4F0A\u723E\u5EAB\u6B21\u514B\u6642\u9593',
                            'standard': '\u4F0A\u723E\u5EAB\u6B21\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4F0A\u723E\u5EAB\u6B21\u514B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u4EE5\u8272\u5217\u6642\u9593',
                            'standard': '\u4EE5\u8272\u5217\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u4EE5\u8272\u5217\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u65E5\u672C\u6642\u9593',
                            'standard': '\u65E5\u672C\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u65E5\u672C\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u5F7C\u5F97\u7F85\u5DF4\u752B\u6D1B\u592B\u65AF\u514B\u6642\u9593',
                            'standard': '\u5F7C\u5F97\u7F85\u5DF4\u752B\u6D1B\u592B\u65AF\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u5F7C\u5F97\u7F85\u5DF4\u752B\u6D1B\u592B\u65AF\u514B\u65E5\u5149\u7BC0\u7D04\u6642\u9593'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u6771\u54C8\u85A9\u514B\u6642\u9593'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u897F\u54C8\u85A9\u514B\u6642\u9593'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u97D3\u570B\u6642\u9593',
                            'standard': '\u97D3\u570B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u97D3\u570B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u79D1\u65AF\u745E\u6642\u9593'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u514B\u62C9\u65AF\u8AFE\u4E9E\u723E\u65AF\u514B\u6642\u9593',
                            'standard': '\u514B\u62C9\u65AF\u8AFE\u4E9E\u723E\u65AF\u514B\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u514B\u62C9\u65AF\u8AFE\u4E9E\u723E\u65AF\u514B\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u5409\u723E\u5409\u65AF\u6642\u9593'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u862D\u5361\u6642\u9593'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u840A\u6069\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u8C6A\u52F3\u7235\u5CF6\u6642\u9593',
                            'standard': '\u8C6A\u52F3\u7235\u5CF6\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u8C6A\u52F3\u7235\u5CF6\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u6FB3\u9580\u6642\u9593',
                            'standard': '\u6FB3\u9580\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6FB3\u9580\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u9EA5\u89BA\u7406\u6642\u9593'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u99AC\u52A0\u4E39\u6642\u9593',
                            'standard': '\u99AC\u52A0\u4E39\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u99AC\u52A0\u4E39\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u99AC\u4F86\u897F\u4E9E\u6642\u9593'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u99AC\u723E\u5730\u592B\u6642\u9593'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u99AC\u514B\u6C99\u65AF\u6642\u9593'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u99AC\u7D39\u723E\u7FA4\u5CF6\u6642\u9593'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u6A21\u91CC\u897F\u65AF\u6642\u9593',
                            'standard': '\u6A21\u91CC\u897F\u65AF\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u6A21\u91CC\u897F\u65AF\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u83AB\u68EE\u6642\u9593'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u70CF\u862D\u5DF4\u6258\u6642\u9593',
                            'standard': '\u70CF\u862D\u5DF4\u6258\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u70CF\u862D\u5DF4\u6258\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u83AB\u65AF\u79D1\u6642\u9593',
                            'standard': '\u83AB\u65AF\u79D1\u6A19\u6E96\u6642\u9593',
                            'daylight': '\u83AB\u65AF\u79D1\u590F\u4EE4\u6642\u9593'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u7DEC\u7538\u6642\u9593'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u8AFE\u9B6F\u6642\u9593'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u5C3C\u6CCA\u723E\u6642\u9593'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}\u6642\u9593',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1}\uFF08{0}\uFF09'
            },
            'localeDisplayPattern': {
                'localePattern': '{0}\uFF08{1}\uFF09',
                'localeSeparator': '{0}\uFF0C{1}',
                'localeKeyTypePattern': '{0}\uFF1A{1}'
            },
            'keys': {
                'colNormalization': '\u6B63\u898F\u5316\u6392\u5E8F',
                'collation': '\u6392\u5E8F',
                'colHiraganaQuaternary': '\u5047\u540D\u6392\u5E8F',
                'colCaseLevel': '\u5340\u5206\u5927\u5C0F\u5BEB\u6392\u5E8F',
                'colCaseFirst': '\u5927\u5BEB/\u5C0F\u5BEB\u6392\u5217',
                'colBackwards': '\u53CD\u5411\u91CD\u97F3\u6392\u5E8F',
                'colAlternate': '\u7565\u904E\u7B26\u865F\u6392\u5E8F',
                'calendar': '\u65E5\u66C6',
                'x': '\u79C1\u4EBA\u4F7F\u7528',
                'variableTop': '\u4EE5\u7B26\u865F\u6392\u5E8F',
                'va': '\u5340\u57DF\u8B8A\u7570',
                'timezone': '\u6642\u5340',
                'numbers': '\u6578\u5B57',
                'currency': '\u8CA8\u5E63',
                'colStrength': '\u6392\u5E8F\u5F37\u5EA6',
                'colNumeric': '\u6578\u5B57\u6392\u5E8F'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u500B\u5225\u6392\u5E8F\u5047\u540D',
                    'yes': '\u5206\u5225\u6392\u5E8F\u5047\u540D'
                },
                'colCaseLevel': {
                    'no': '\u4E0D\u5206\u5927\u5C0F\u5BEB\u6392\u5E8F',
                    'yes': '\u4F9D\u5927\u5C0F\u5BEB\u6392\u5E8F'
                },
                'colCaseFirst': {
                    'lower': '\u512A\u5148\u6392\u5E8F\u5C0F\u5BEB',
                    'no': '\u6B63\u5E38\u5927\u5C0F\u5BEB\u9806\u5E8F\u6392\u5E8F',
                    'upper': '\u512A\u5148\u6392\u5E8F\u5927\u5BEB'
                },
                'colStrength': {
                    'identical': '\u5168\u90E8\u6392\u5E8F',
                    'primary': '\u50C5\u6392\u5E8F\u57FA\u790E\u5B57\u6BCD',
                    'quaternary': '\u6392\u5E8F\u91CD\u97F3/\u5927\u5C0F\u5BEB/\u5168\u534A\u5F62/\u5047\u540D',
                    'secondary': '\u6392\u5E8F\u91CD\u97F3',
                    'tertiary': '\u6392\u5E8F\u91CD\u97F3/\u5927\u5C0F\u5BEB/\u5168\u534A\u5F62'
                },
                'colNumeric': {
                    'no': '\u500B\u5225\u6392\u5E8F\u6578\u5B57',
                    'yes': '\u4F9D\u6578\u5B57\u9806\u5E8F\u6392\u5E8F\u6578\u5B57'
                },
                'colNormalization': {
                    'no': '\u975E\u6B63\u898F\u5316\u6392\u5E8F',
                    'yes': '\u4F9D\u6B63\u898F\u5316\u6392\u5E8F Unicode'
                },
                'calendar': {
                    'japanese': '\u65E5\u672C\u66C6\u6CD5',
                    'iso8601': '\u570B\u969B\u6A19\u6E96 ISO 8601',
                    'coptic': '\u79D1\u666E\u7279\u66C6',
                    'dangi': '\u6A80\u7D00\u66C6',
                    'ethiopic': '\u8863\u7D22\u6BD4\u4E9E\u66C6',
                    'ethiopic-amete-alem': '\u8863\u7D22\u6BD4\u4E9E\u66C6 (Amete Alem)',
                    'gregorian': '\u516C\u66C6',
                    'hebrew': '\u5E0C\u4F2F\u4F86\u66C6\u6CD5',
                    'persian': '\u6CE2\u65AF\u66C6',
                    'roc': '\u6C11\u570B\u66C6',
                    'chinese': '\u8FB2\u66C6',
                    'buddhist': '\u4F5B\u6559\u66C6\u6CD5',
                    'indian': '\u5370\u5EA6\u570B\u5BB6\u66C6\u6CD5',
                    'islamic': '\u4F0A\u65AF\u862D\u66C6\u6CD5',
                    'islamic-civil': '\u4F0A\u65AF\u862D\u57CE\u5E02\u66C6\u6CD5',
                    'islamic-rgsa': '\u4F0A\u65AF\u862D\u65B0\u6708\u66C6',
                    'islamic-tbla': '\u4F0A\u65AF\u862D\u5929\u6587\u66C6',
                    'islamic-umalqura': '\u70CF\u59C6\u5EAB\u62C9\u66C6'
                },
                'collation': {
                    'phonebook': '\u96FB\u8A71\u7C3F\u6392\u5E8F',
                    'gb2312han': '\u7C21\u9AD4\u4E2D\u6587\u6392\u5E8F (GB2312)',
                    'eor': 'eor',
                    'ducet': '\u9810\u8A2D Unicode \u6392\u5E8F',
                    'dictionary': '\u5B57\u5178\u6392\u5E8F',
                    'big5han': '\u7E41\u9AD4\u4E2D\u6587\u6392\u5E8F (Big5)',
                    'traditional': '\u50B3\u7D71\u6392\u5E8F',
                    'standard': '\u6A19\u6E96\u6392\u5E8F',
                    'zhuyin': '\u6CE8\u97F3\u6392\u5E8F',
                    'unihan': '\u90E8\u9996\u7B46\u756B\u6392\u5E8F',
                    'stroke': '\u7B46\u756B\u6392\u5E8F',
                    'searchjl': '\u97D3\u6587\u5B50\u97F3\u6392\u5E8F',
                    'search': '\u4E00\u822C\u7528\u9014\u641C\u5C0B',
                    'reformed': '\u6539\u826F\u6392\u5E8F',
                    'pinyin': '\u62FC\u97F3\u6392\u5E8F',
                    'phonetic': '\u6CE8\u97F3\u6392\u5E8F\u9806\u5E8F'
                },
                'numbers': {
                    'knda': '\u574E\u90A3\u9054\u6578\u5B57',
                    'khmr': '\u9AD8\u68C9\u6578\u5B57',
                    'kali': '\u514B\u8036\u6578\u5B57',
                    'jpanfin': '\u5927\u5BEB\u65E5\u6587\u6578\u5B57',
                    'jpan': '\u5C0F\u5BEB\u65E5\u6587\u6578\u5B57',
                    'java': '\u722A\u54C7\u6587\u6578\u5B57',
                    'hebr': '\u5E0C\u4F2F\u4F86\u6578\u5B57',
                    'hantfin': '\u5927\u5BEB\u7E41\u9AD4\u4E2D\u6587\u6578\u5B57',
                    'hant': '\u5C0F\u5BEB\u7E41\u9AD4\u4E2D\u6587\u6578\u5B57',
                    'hansfin': '\u5927\u5BEB\u7C21\u9AD4\u4E2D\u6587\u6578\u5B57',
                    'hans': '\u5C0F\u5BEB\u7C21\u9AD4\u4E2D\u6587\u6578\u5B57',
                    'hanidec': '\u4E2D\u6587\u5341\u9032\u4F4D\u6578\u5B57',
                    'guru': '\u53E4\u723E\u7A46\u5947\u6578\u5B57',
                    'gujr': '\u53E4\u5409\u62C9\u7279\u6578\u5B57',
                    'greklow': '\u5C0F\u5BEB\u5E0C\u81D8\u6578\u5B57',
                    'grek': '\u5E0C\u81D8\u6578\u5B57',
                    'bali': '\u5CC7\u91CC\u6587\u6578\u5B57',
                    'armnlow': '\u5C0F\u5BEB\u4E9E\u7F8E\u5C3C\u4E9E\u6578\u5B57',
                    'armn': '\u4E9E\u7F8E\u5C3C\u4E9E\u6578\u5B57',
                    'arabext': '\u963F\u62C9\u4F2F-\u5370\u5EA6\u64F4\u5145\u6578\u5B57',
                    'arab': '\u963F\u62C9\u4F2F-\u5370\u5EA6\u6578\u5B57',
                    'finance': '\u91D1\u878D\u6578\u5B57',
                    'traditional': '\u50B3\u7D71\u6578\u5B57',
                    'native': '\u539F\u59CB\u6578\u5B57',
                    'beng': '\u5B5F\u52A0\u62C9\u6578\u5B57',
                    'brah': '\u5A46\u7F85\u7C73\u6578\u5B57',
                    'cakm': '\u67E5\u514B\u99AC\u6578\u5B57',
                    'cham': '\u5360\u6587\u6578\u5B57',
                    'deva': '\u68B5\u6587\u6578\u5B57',
                    'orya': '\u6B50\u5229\u4E9E\u6578\u5B57',
                    'osma': '\u5967\u65AF\u66FC\u4E9E\u6578\u5B57',
                    'roman': '\u7F85\u99AC\u6578\u5B57',
                    'romanlow': '\u5C0F\u5BEB\u7F85\u99AC\u6578\u5B57',
                    'saur': '\u7D22\u62C9\u4EC0\u7279\u62C9\u6587\u6578\u5B57',
                    'shrd': '\u590F\u62C9\u9054\u6578\u5B57',
                    'sora': '\u7D22\u6717\u6851\u670B\u6578\u5B57',
                    'sund': '\u6851\u6851',
                    'vaii': '\u74E6\u4F0A\u6587\u6578\u5B57',
                    'tibt': '\u897F\u85CF\u6578\u5B57',
                    'thai': '\u6CF0\u6587\u6578\u5B57',
                    'telu': '\u6CF0\u76E7\u56FA\u6578\u5B57',
                    'tamldec': '\u5766\u7C73\u723E\u6578\u5B57',
                    'taml': '\u5766\u7C73\u723E\u6578\u5B57',
                    'talu': '\u65B0\u50A3\u4EC2\u6587\u6578\u5B57',
                    'takr': '\u5854\u5361\u91CC\u6578\u5B57',
                    'olck': '\u6851\u5854\u5229\u6587\u6578\u5B57',
                    'nkoo': '\u66FC\u5FB7\u6578\u5B57',
                    'mymrshan': '\u7DEC\u7538\u64A3\u6587\u6578\u5B57',
                    'mymr': '\u7DEC\u7538\u6578\u5B57',
                    'mtei': '\u66FC\u5C3C\u666E\u723E\u6578\u5B57',
                    'mong': '\u8499\u53E4\u6578\u5B57',
                    'mlym': '\u99AC\u4F86\u4E9E\u62C9\u59C6\u6578\u5B57',
                    'limb': '\u6797\u5E03\u6587\u6578\u5B57',
                    'lepc': '\u897F\u7D0D\u6587\u6578\u5B57',
                    'latn': '\u963F\u62C9\u4F2F\u6578\u5B57',
                    'laoo': '\u5BEE\u570B\u6578\u5B57',
                    'lanatham': '\u862D\u7D0D\u6587\u6578\u5B57',
                    'lana': '\u8001\u50A3\u6587\u6578\u5B57',
                    'geor': '\u55AC\u6CBB\u4E9E\u6578\u5B57',
                    'fullwide': '\u5168\u5F62\u6578\u5B57',
                    'ethi': '\u8863\u7D22\u6BD4\u4E9E\u6578\u5B57'
                },
                'colAlternate': {
                    'non-ignorable': '\u6392\u5E8F\u7B26\u865F',
                    'shifted': '\u7565\u904E\u7B26\u865F\u6392\u5E8F'
                },
                'colBackwards': {
                    'no': '\u6B63\u5E38\u6392\u5E8F\u91CD\u97F3',
                    'yes': '\u4F9D\u53CD\u5411\u91CD\u97F3\u6392\u5E8F'
                }
            },
            'codePatterns': {
                'language': '\u8A9E\u8A00\uFF1A{0}',
                'script': '\u6587\u5B57\uFF1A{0}',
                'territory': '\u5730\u5340\uFF1A{0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0} \u76CE\u53F8'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0} \u516C\u65A4'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0} \u514B'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0} \u78BC'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0} \u76AE\u7C73'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0} \u516C\u91D0'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0} \u82F1\u91CC'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0} \u516C\u5C3A'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0} \u5149\u5E74'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0} \u516C\u91CC'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0} \u540B'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0} \u544E'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0} \u516C\u5206'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0} \u5E74'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0} \u9031'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0} \u500B\u6708'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0} \u78C5'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0} \u5339'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0} \u5343\u74E6'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0} \u74E6\u7279'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0} \u767E\u5E15'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0} \u82F1\u540B\u6C34\u9280\u67F1'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0} \u6BEB\u5DF4'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0} \u516C\u5347'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0} \u7ACB\u65B9\u82F1\u91CC'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0} \u7ACB\u65B9\u516C\u91CC'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0} \u82F1\u91CC/\u5C0F\u6642'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0} \u516C\u5C3A/\u79D2'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0} \u516C\u91CC/\u5C0F\u6642'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0} \u5206\u9418'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0} \u6BEB\u79D2'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0} \u5C0F\u6642'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0} \u5929'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u82F1\u91CC'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u516C\u5C3A'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u516C\u91CC'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0} \u5206\u9418'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0} \u79D2'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0} \u5EA6'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0} \u82F1\u755D'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0} \u516C\u9803'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u82F1\u5C3A'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0} \u79D2'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-other': '{0} \u76CE\u53F8'
                },
                'mass-kilogram': {
                    'unitPattern-count-other': '{0} \u516C\u65A4'
                },
                'mass-gram': {
                    'unitPattern-count-other': '{0} \u514B'
                },
                'length-yard': {
                    'unitPattern-count-other': '{0} \u78BC'
                },
                'length-picometer': {
                    'unitPattern-count-other': '{0} \u76AE\u7C73'
                },
                'length-millimeter': {
                    'unitPattern-count-other': '{0} \u516C\u91D0'
                },
                'length-mile': {
                    'unitPattern-count-other': '{0} \u82F1\u91CC'
                },
                'length-meter': {
                    'unitPattern-count-other': '{0} \u516C\u5C3A'
                },
                'length-light-year': {
                    'unitPattern-count-other': '{0} \u5149\u5E74'
                },
                'length-kilometer': {
                    'unitPattern-count-other': '{0} \u516C\u91CC'
                },
                'length-inch': {
                    'unitPattern-count-other': '{0} \u540B'
                },
                'length-foot': {
                    'unitPattern-count-other': '{0} \u544E'
                },
                'length-centimeter': {
                    'unitPattern-count-other': '{0} \u516C\u5206'
                },
                'duration-year': {
                    'unitPattern-count-other': '{0} \u5E74'
                },
                'duration-week': {
                    'unitPattern-count-other': '{0} \u9031'
                },
                'duration-month': {
                    'unitPattern-count-other': '{0} \u500B\u6708'
                },
                'mass-pound': {
                    'unitPattern-count-other': '{0} \u78C5'
                },
                'power-horsepower': {
                    'unitPattern-count-other': '{0} \u5339'
                },
                'power-kilowatt': {
                    'unitPattern-count-other': '{0} \u5343\u74E6'
                },
                'power-watt': {
                    'unitPattern-count-other': '{0} \u74E6\u7279'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-other': '{0} \u767E\u5E15'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-other': '{0} \u82F1\u540B\u6C34\u9280\u67F1'
                },
                'pressure-millibar': {
                    'unitPattern-count-other': '{0} \u6BEB\u5DF4'
                },
                'volume-liter': {
                    'unitPattern-count-other': '{0} \u5347'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-other': '{0} \u7ACB\u65B9\u82F1\u91CC'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-other': '{0} \u7ACB\u65B9\u516C\u91CC'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-other': '{0} \u82F1\u91CC/\u5C0F\u6642'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-other': '{0} \u516C\u5C3A / \u79D2'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-other': '{0} \u516C\u91CC/\u5C0F\u6642'
                },
                'duration-minute': {
                    'unitPattern-count-other': '{0} \u5206\u9418'
                },
                'duration-millisecond': {
                    'unitPattern-count-other': '{0} \u6BEB\u79D2'
                },
                'duration-hour': {
                    'unitPattern-count-other': '{0} \u5C0F\u6642'
                },
                'duration-day': {
                    'unitPattern-count-other': '{0} \u5929'
                },
                'area-square-mile': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u82F1\u91CC'
                },
                'area-square-meter': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u516C\u5C3A'
                },
                'area-square-kilometer': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u516C\u91CC'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-other': '{0} \u5206\u9418'
                },
                'angle-arc-second': {
                    'unitPattern-count-other': '{0} \u79D2'
                },
                'angle-degree': {
                    'unitPattern-count-other': '{0} \u5EA6'
                },
                'area-acre': {
                    'unitPattern-count-other': '{0} \u82F1\u755D'
                },
                'area-hectare': {
                    'unitPattern-count-other': '{0} \u516C\u9803'
                },
                'area-square-foot': {
                    'unitPattern-count-other': '{0} \u5E73\u65B9\u82F1\u5C3A'
                },
                'duration-second': {
                    'unitPattern-count-other': '{0} \u79D2'
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
