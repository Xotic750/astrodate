/* AstroDate
 * Language: ru
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
        AstroDate.lang('ru', {
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
                    'unitPattern-count-many': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u043A\u0433',
                    'unitPattern-count-many': '{0} \u043A\u0433',
                    'unitPattern-count-other': '{0} \u043A\u0433'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u0433\u0440',
                    'unitPattern-count-many': '{0} \u0433\u0440',
                    'unitPattern-count-other': '{0} \u0433\u0440'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u044F\u0440\u0434',
                    'unitPattern-count-many': '{0} \u044F\u0440\u0434\u043E\u0432',
                    'unitPattern-count-other': '{0} \u044F\u0440\u0434\u0430'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-many': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u043C\u043C',
                    'unitPattern-count-many': '{0} \u043C\u043C',
                    'unitPattern-count-other': '{0} \u043C\u043C'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0438'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u043C',
                    'unitPattern-count-many': '{0} \u043C',
                    'unitPattern-count-other': '{0} \u043C'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u0441\u0432. \u0433.',
                    'unitPattern-count-many': '{0} \u0441\u0432. \u043B.',
                    'unitPattern-count-other': '{0} \u0441\u0432. \u0433.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C',
                    'unitPattern-count-many': '{0} \u043A\u043C',
                    'unitPattern-count-other': '{0} \u043A\u043C'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u0441\u043C',
                    'unitPattern-count-many': '{0} \u0441\u043C',
                    'unitPattern-count-other': '{0} \u0441\u043C'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u0433.',
                    'unitPattern-count-many': '{0} \u043B.',
                    'unitPattern-count-other': '{0} \u0433.'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u043D.',
                    'unitPattern-count-many': '{0} \u043D.',
                    'unitPattern-count-other': '{0} \u043D.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u043C.',
                    'unitPattern-count-many': '{0} \u043C.',
                    'unitPattern-count-other': '{0} \u043C.'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-many': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u043B.\u0441.',
                    'unitPattern-count-many': '{0} \u043B.\u0441.',
                    'unitPattern-count-other': '{0} \u043B.\u0441.'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-other': '{0} \u043A\u0412\u0442'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} \u0412\u0442',
                    'unitPattern-count-many': '{0} \u0412\u0442',
                    'unitPattern-count-other': '{0} \u0412\u0442'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-many': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-other': '{0} \u0433\u041F\u0430'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-many': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u043C\u0431\u0430\u0440',
                    'unitPattern-count-many': '{0} \u043C\u0431\u0430\u0440',
                    'unitPattern-count-other': '{0} \u043C\u0431\u0430\u0440'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u043B',
                    'unitPattern-count-many': '{0} \u043B',
                    'unitPattern-count-other': '{0} \u043B'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0443\u0431. \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043A\u0443\u0431. \u043C\u0438\u043B\u0438',
                    'unitPattern-count-other': '{0} \u043A\u0443\u0431. \u043C\u0438\u043B\u0438'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-many': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-many': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044C/\u0447',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C/\u0447',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u044C/\u0447'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u043C/\u0441',
                    'unitPattern-count-many': '{0} \u043C/\u0441',
                    'unitPattern-count-other': '{0} \u043C/\u0441'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u043A\u043C/\u0447',
                    'unitPattern-count-many': '{0} \u043A\u043C/\u0447',
                    'unitPattern-count-other': '{0} \u043A\u043C/\u0447'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u043C.',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043D',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043D'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u043C\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0441'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u0447',
                    'unitPattern-count-many': '{0} \u0447',
                    'unitPattern-count-other': '{0} \u0447'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u0434.',
                    'unitPattern-count-many': '{0} \u0434.',
                    'unitPattern-count-other': '{0} \u0434.'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0432. \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043A\u0432. \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043A\u0432. \u043C\u0438\u043B\u0438'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043C\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-many': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-many': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-many': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-many': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u0430\u043A\u0440',
                    'unitPattern-count-many': '{0} \u0430\u043A\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0430\u043A\u0440\u0430'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u0433\u0430',
                    'unitPattern-count-many': '{0} \u0433\u0430',
                    'unitPattern-count-other': '{0} \u0433\u0430'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u043A\u0432. \u0444\u0443\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0432. \u0444\u0443\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432. \u0444\u0443\u0442\u0430'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u0441',
                    'unitPattern-count-many': '{0} \u0441',
                    'unitPattern-count-other': '{0} \u0441'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u0430\u0432\u0433.',
                                '7': '\u0438\u044E\u043B\u044F',
                                '6': '\u0438\u044E\u043D\u044F',
                                '5': '\u043C\u0430\u044F',
                                '12': '\u0434\u0435\u043A.',
                                '11': '\u043D\u043E\u044F\u0431.',
                                '10': '\u043E\u043A\u0442.',
                                '9': '\u0441\u0435\u043D\u0442.',
                                '1': '\u044F\u043D\u0432.',
                                '2': '\u0444\u0435\u0432\u0440.',
                                '3': '\u043C\u0430\u0440\u0442\u0430',
                                '4': '\u0430\u043F\u0440.'
                            },
                            'narrow': {
                                '8': '\u0410',
                                '7': '\u0418',
                                '6': '\u0418',
                                '5': '\u041C',
                                '12': '\u0414',
                                '11': '\u041D',
                                '10': '\u041E',
                                '9': '\u0421',
                                '1': '\u042F',
                                '2': '\u0424',
                                '3': '\u041C',
                                '4': '\u0410'
                            },
                            'wide': {
                                '8': '\u0430\u0432\u0433\u0443\u0441\u0442\u0430',
                                '7': '\u0438\u044E\u043B\u044F',
                                '6': '\u0438\u044E\u043D\u044F',
                                '5': '\u043C\u0430\u044F',
                                '12': '\u0434\u0435\u043A\u0430\u0431\u0440\u044F',
                                '11': '\u043D\u043E\u044F\u0431\u0440\u044F',
                                '10': '\u043E\u043A\u0442\u044F\u0431\u0440\u044F',
                                '9': '\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F',
                                '1': '\u044F\u043D\u0432\u0430\u0440\u044F',
                                '2': '\u0444\u0435\u0432\u0440\u0430\u043B\u044F',
                                '3': '\u043C\u0430\u0440\u0442\u0430',
                                '4': '\u0430\u043F\u0440\u0435\u043B\u044F'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u0410\u0432\u0433.',
                                '7': '\u0418\u044E\u043B\u044C',
                                '6': '\u0418\u044E\u043D\u044C',
                                '5': '\u041C\u0430\u0439',
                                '12': '\u0414\u0435\u043A.',
                                '11': '\u041D\u043E\u044F\u0431.',
                                '10': '\u041E\u043A\u0442.',
                                '9': '\u0421\u0435\u043D\u0442.',
                                '1': '\u042F\u043D\u0432.',
                                '2': '\u0424\u0435\u0432\u0440.',
                                '3': '\u041C\u0430\u0440\u0442',
                                '4': '\u0410\u043F\u0440.'
                            },
                            'narrow': {
                                '8': '\u0410',
                                '7': '\u0418',
                                '6': '\u0418',
                                '5': '\u041C',
                                '12': '\u0414',
                                '11': '\u041D',
                                '10': '\u041E',
                                '9': '\u0421',
                                '1': '\u042F',
                                '2': '\u0424',
                                '3': '\u041C',
                                '4': '\u0410'
                            },
                            'wide': {
                                '8': '\u0410\u0432\u0433\u0443\u0441\u0442',
                                '7': '\u0418\u044E\u043B\u044C',
                                '6': '\u0418\u044E\u043D\u044C',
                                '5': '\u041C\u0430\u0439',
                                '12': '\u0414\u0435\u043A\u0430\u0431\u0440\u044C',
                                '11': '\u041D\u043E\u044F\u0431\u0440\u044C',
                                '10': '\u041E\u043A\u0442\u044F\u0431\u0440\u044C',
                                '9': '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C',
                                '1': '\u042F\u043D\u0432\u0430\u0440\u044C',
                                '2': '\u0424\u0435\u0432\u0440\u0430\u043B\u044C',
                                '3': '\u041C\u0430\u0440\u0442',
                                '4': '\u0410\u043F\u0440\u0435\u043B\u044C'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u0432\u0441',
                                'mon': '\u043F\u043D',
                                'tue': '\u0432\u0442',
                                'wed': '\u0441\u0440',
                                'thu': '\u0447\u0442',
                                'fri': '\u043F\u0442',
                                'sat': '\u0441\u0431'
                            },
                            'narrow': {
                                'sun': '\u0432\u0441',
                                'mon': '\u043F\u043D',
                                'tue': '\u0432\u0442',
                                'wed': '\u0441\u0440',
                                'thu': '\u0447\u0442',
                                'fri': '\u043F\u0442',
                                'sat': '\u0441\u0431'
                            },
                            'short': {
                                'sun': '\u0432\u0441',
                                'mon': '\u043F\u043D',
                                'tue': '\u0432\u0442',
                                'wed': '\u0441\u0440',
                                'thu': '\u0447\u0442',
                                'fri': '\u043F\u0442',
                                'sat': '\u0441\u0431'
                            },
                            'wide': {
                                'sun': '\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
                                'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
                                'tue': '\u0432\u0442\u043E\u0440\u043D\u0438\u043A',
                                'wed': '\u0441\u0440\u0435\u0434\u0430',
                                'thu': '\u0447\u0435\u0442\u0432\u0435\u0440\u0433',
                                'fri': '\u043F\u044F\u0442\u043D\u0438\u0446\u0430',
                                'sat': '\u0441\u0443\u0431\u0431\u043E\u0442\u0430'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u0412\u0441',
                                'mon': '\u041F\u043D',
                                'tue': '\u0412\u0442',
                                'wed': '\u0421\u0440',
                                'thu': '\u0427\u0442',
                                'fri': '\u041F\u0442',
                                'sat': '\u0421\u0431'
                            },
                            'narrow': {
                                'sun': '\u0412',
                                'mon': '\u041F',
                                'tue': '\u0412',
                                'wed': '\u0421',
                                'thu': '\u0427',
                                'fri': '\u041F',
                                'sat': '\u0421'
                            },
                            'short': {
                                'sun': '\u0432\u0441',
                                'mon': '\u043F\u043D',
                                'tue': '\u0432\u0442',
                                'wed': '\u0441\u0440',
                                'thu': '\u0447\u0442',
                                'fri': '\u043F\u0442',
                                'sat': '\u0441\u0431'
                            },
                            'wide': {
                                'sun': '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
                                'mon': '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
                                'tue': '\u0412\u0442\u043E\u0440\u043D\u0438\u043A',
                                'wed': '\u0421\u0440\u0435\u0434\u0430',
                                'thu': '\u0427\u0435\u0442\u0432\u0435\u0440\u0433',
                                'fri': '\u041F\u044F\u0442\u043D\u0438\u0446\u0430',
                                'sat': '\u0421\u0443\u0431\u0431\u043E\u0442\u0430'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1-\u0439 \u043A\u0432.',
                                '2': '2-\u0439 \u043A\u0432.',
                                '3': '3-\u0439 \u043A\u0432.',
                                '4': '4-\u0439 \u043A\u0432.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '2': '2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '3': '3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '4': '4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1-\u0439 \u043A\u0432.',
                                '2': '2-\u0439 \u043A\u0432.',
                                '3': '3-\u0439 \u043A\u0432.',
                                '4': '4-\u0439 \u043A\u0432.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '2': '2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '3': '3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '4': '4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                            },
                            'narrow': {
                                'am': '\u0434\u043F',
                                'pm': '\u043F\u043F'
                            },
                            'wide': {
                                'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                            },
                            'narrow': {
                                'am': '\u0434\u043F',
                                'pm': '\u043F\u043F'
                            },
                            'wide': {
                                'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u0434\u043E \u043D.\u044D.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D.\u044D.',
                            '1-alt-variant': '\u043D.\u044D.'
                        },
                        'eraAbbr': {
                            '0': '\u0434\u043E \u043D. \u044D.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D. \u044D.',
                            '1-alt-variant': '\u043D.\u044D.'
                        },
                        'eraNarrow': {
                            '0': '\u0434\u043E \u043D.\u044D.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D.\u044D.',
                            '1-alt-variant': '\u043D.\u044D.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y \'\u0433\'.',
                        'long': 'd MMMM y \'\u0433\'.',
                        'medium': 'dd MMM y \'\u0433\'.',
                        'short': 'dd.MM.yy'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss zzzz',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}, {0}',
                        'long': '{1}, {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMM': 'LLL y',
                            'yMM': 'MM.y',
                            'yMEd': 'ccc, d.MM.y \'\u0433\'.',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM.y',
                            'Ed': 'ccc, d',
                            'E': 'ccc',
                            'd': 'd',
                            'GyMMM': 'LLL y G',
                            'GyMMMd': 'd MMM y \'\u0433\'. G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'H',
                            'yQQQQ': 'QQQQ y \'\u0433\'.',
                            'yQQQ': 'QQQ y \'\u0433\'.',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM y \'\u0433\'.',
                            'hms': 'h:mm:ss a',
                            'Hm': 'H:mm',
                            'hm': 'h:mm a',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'Hms': 'H:mm:ss',
                            'M': 'L',
                            'Md': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'MMdd': 'dd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'ccc, d MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yLLLL': 'LLLL y'
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
                                'd': 'ccc, d - E, d MMM',
                                'M': 'ccc, d MMM - ccc, d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'LLL-MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM - E, dd.MM',
                                'M': 'E, dd.MM - E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM - dd.MM',
                                'M': 'dd.MM - dd.MM'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'H-H v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'y': {
                                'y': 'y-y'
                            },
                            'yM': {
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y - dd.MM.y',
                                'M': 'dd.MM.y - dd.MM.y',
                                'y': 'dd.MM.y - dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y \'\u0433\'.',
                                'y': 'LLL y - LLL y \'\u0433\'.'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y \'\u0433\'.',
                                'M': 'd MMM - d MMM y \'\u0433\'.',
                                'y': 'd MMM y - d MMM y \'\u0433\'.'
                            },
                            'yMMMEd': {
                                'd': 'ccc, d - ccc, d MMM y \'\u0433\'.',
                                'M': 'ccc, d MMM - ccc, d MMM y \'\u0433\'.',
                                'y': 'ccc, d MMM y - ccc, d MMM y \'\u0433\'.'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL y \'\u0433\'.',
                                'y': 'LLLL y - LLLL y \'\u0433\'.'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
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
                                'H': 'H:mm-H:mm',
                                'm': 'H:mm-H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd-d'
                            }
                        }
                    }
                }
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u0421\u0430\u0439\u043F\u0430\u043D'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u0420\u0430\u0440\u043E\u0442\u043E\u043D\u0433\u0430'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u041C\u043E\u0440\u0441\u0431\u0438'
                        },
                        'Ponape': {
                            'exemplarCity': '\u041F\u043E\u043D\u0430\u043F\u0435, \u043E-\u0432'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u041F\u0438\u0442\u043A\u0435\u0440\u043D'
                        },
                        'Palau': {
                            'exemplarCity': '\u041F\u0430\u043B\u0430\u0443'
                        },
                        'Auckland': {
                            'exemplarCity': '\u041E\u043A\u043B\u0435\u043D\u0434'
                        },
                        'Apia': {
                            'exemplarCity': '\u0410\u043F\u0438\u044F'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u0424\u0443\u043D\u0430\u0444\u0443\u0442\u0438'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u0413\u0430\u043B\u0430\u043F\u0430\u0433\u043E\u0441c\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        },
                        'Gambier': {
                            'exemplarCity': '\u0413\u0430\u043C\u0431\u044C\u0435, \u043E-\u0432\u0430'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u0413\u0432\u0430\u0434\u0430\u043B\u043A\u0430\u043D\u0430\u043B'
                        },
                        'Guam': {
                            'exemplarCity': '\u0413\u0443\u0430\u043C'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u0413\u043E\u043D\u043E\u043B\u0443\u043B\u0443'
                        },
                        'Wallis': {
                            'exemplarCity': '\u0423\u043E\u043B\u043B\u0438\u0441'
                        },
                        'Wake': {
                            'exemplarCity': '\u0423\u044D\u0439\u043A, \u043E-\u0432'
                        },
                        'Truk': {
                            'exemplarCity': '\u0422\u0440\u0443\u043A, \u043E-\u0432\u0430'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u0422\u043E\u043D\u0433\u0430\u0442\u0430\u043F\u0443'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u0422\u0430\u0440\u0430\u0432\u0430'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u0422\u0430\u0438\u0442\u0438, \u043E-\u0432'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u041A\u0438\u0440\u0438\u0442\u0438\u043C\u0430\u0442\u0438'
                        },
                        'Johnston': {
                            'exemplarCity': '\u0414\u0436\u043E\u043D\u0441\u0442\u043E\u043D, \u0430\u0442.'
                        },
                        'Chatham': {
                            'exemplarCity': '\u0427\u0430\u0442\u0435\u043C, \u043E-\u0432'
                        },
                        'Easter': {
                            'exemplarCity': '\u041F\u0430\u0441\u0445\u0438, \u043E-\u0432'
                        },
                        'Efate': {
                            'exemplarCity': '\u042D\u0444\u0430\u0442\u0435'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u042D\u043D\u0434\u0435\u0440\u0431\u0435\u0440\u0438, \u043E-\u0432'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u0424\u0430\u043A\u0430\u043E\u0444\u043E'
                        },
                        'Fiji': {
                            'exemplarCity': '\u0424\u0438\u0434\u0436\u0438'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u041A\u043E\u0441\u0440\u0430\u0435'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u041A\u0432\u0430\u0434\u0436\u0430\u043B\u0435\u0439\u043D'
                        },
                        'Majuro': {
                            'exemplarCity': '\u041C\u0430\u0434\u0436\u0443\u0440\u043E'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u041C\u0430\u0440\u043A\u0438\u0437\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        },
                        'Midway': {
                            'exemplarCity': '\u041C\u0438\u0434\u0443\u044D\u0439, \u043E-\u0432\u0430'
                        },
                        'Nauru': {
                            'exemplarCity': '\u041D\u0430\u0443\u0440\u0443'
                        },
                        'Niue': {
                            'exemplarCity': '\u041D\u0438\u0443\u044D'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u041D\u043E\u0440\u0444\u043E\u043B\u043A'
                        },
                        'Noumea': {
                            'exemplarCity': '\u041D\u0443\u043C\u0435\u0430'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u041F\u0430\u0433\u043E-\u041F\u0430\u0433\u043E'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u041B\u0438\u043D\u0434\u0435\u043C\u0430\u043D'
                        },
                        'Hobart': {
                            'exemplarCity': '\u0425\u043E\u0431\u0430\u0440\u0442'
                        },
                        'Eucla': {
                            'exemplarCity': '\u042E\u043A\u043B\u0430'
                        },
                        'Darwin': {
                            'exemplarCity': '\u0414\u0430\u0440\u0432\u0438\u043D'
                        },
                        'Sydney': {
                            'exemplarCity': '\u0421\u0438\u0434\u043D\u0435\u0439'
                        },
                        'Perth': {
                            'exemplarCity': '\u041F\u0435\u0440\u0442'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u041C\u0435\u043B\u044C\u0431\u0443\u0440\u043D'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u041B\u043E\u0440\u0434-\u0425\u0430\u0443, \u043E-\u0432'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u0410\u0434\u0435\u043B\u0430\u0438\u0434\u0430'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u0411\u0440\u0438\u0441\u0431\u0435\u043D'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u0411\u0440\u043E\u043A\u0435\u043D-\u0425\u0438\u043B\u043B'
                        },
                        'Currie': {
                            'exemplarCity': '\u041A\u0435\u0440\u0440\u0438'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B'
                        },
                        'Mahe': {
                            'exemplarCity': '\u041C\u0430\u044D'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u041A\u0435\u0440\u0433\u0435\u043B\u0435\u043D'
                        },
                        'Reunion': {
                            'exemplarCity': '\u0420\u0435\u044E\u043D\u044C\u043E\u043D'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u041C\u0430\u0439\u043E\u0440\u043A\u0430'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u0410\u043D\u0442\u0430\u043D\u0430\u043D\u0430\u0440\u0438\u0432\u0443'
                        },
                        'Chagos': {
                            'exemplarCity': '\u0427\u0430\u0433\u043E\u0441'
                        },
                        'Christmas': {
                            'exemplarCity': '\u041E-\u0432 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430'
                        },
                        'Cocos': {
                            'exemplarCity': '\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u044B\u0435 \u043E-\u0432\u0430'
                        },
                        'Comoro': {
                            'exemplarCity': '\u041A\u043E\u043C\u043E\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
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
                            'exemplarCity': '\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0434'
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
                            'exemplarCity': '\u0420\u043E\u0442\u0435\u0440\u0430'
                        },
                        'Palmer': {
                            'exemplarCity': '\u041F\u0430\u043B\u043C\u0435\u0440'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u041C\u0430\u043A-\u041C\u0435\u0440\u0434\u043E'
                        },
                        'Vostok': {
                            'exemplarCity': '\u0412\u043E\u0441\u0442\u043E\u043A'
                        },
                        'Syowa': {
                            'exemplarCity': '\u0421\u0451\u0432\u0430'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u042E\u0436\u043D\u044B\u0439 \u043F\u043E\u043B\u044E\u0441'
                        },
                        'Casey': {
                            'exemplarCity': '\u041A\u0435\u0439\u0441\u0438'
                        },
                        'Davis': {
                            'exemplarCity': '\u0414\u0435\u0439\u0432\u0438\u0441'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u0414\u044E\u043C\u043E\u043D-\u0434\'\u042E\u0440\u0432\u0438\u043B\u044C'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u041C\u0430\u043A\u043A\u0443\u043E\u0440\u0438'
                        },
                        'Mawson': {
                            'exemplarCity': '\u041C\u043E\u0443\u0441\u043E\u043D'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u041B\u043E\u043D\u0433\u0439\u0438\u0440'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u0422\u043E\u0440\u043E\u043D\u0442\u043E'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u0422\u0438\u0445\u0443\u0430\u043D\u0430'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u0422\u0430\u043D\u0434\u0435\u0440-\u0411\u0435\u0439'
                        },
                        'Thule': {
                            'exemplarCity': '\u0422\u0443\u043B\u0435'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u0422\u0435\u0433\u0443\u0441\u0438\u0433\u0430\u043B\u044C\u043F\u0430'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u0421\u0432\u0438\u0444\u0442-\u041A\u0430\u0440\u0435\u043D\u0442'
                        },
                        'Chicago': {
                            'exemplarCity': '\u0427\u0438\u043A\u0430\u0433\u043E'
                        },
                        'Cayman': {
                            'exemplarCity': '\u041A\u0430\u0439\u043C\u0430\u043D\u043E\u0432\u044B \u043E-\u0432\u0430'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u041A\u0430\u0439\u0435\u043D\u043D\u0430'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u041A\u0430\u0442\u0430\u043C\u0430\u0440\u043A\u0430'
                        },
                        'Caracas': {
                            'exemplarCity': '\u041A\u0430\u0440\u0430\u043A\u0430\u0441'
                        },
                        'Cancun': {
                            'exemplarCity': '\u041A\u0430\u043D\u043A\u0443\u043D'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u041A\u0430\u043C\u043F\u0443-\u0413\u0440\u0430\u043D\u0434\u0438'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u041A\u0435\u0439\u043C\u0431\u0440\u0438\u0434\u0436-\u0411\u0435\u0439'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u0411\u0443\u044D\u043D\u043E\u0441-\u0410\u0439\u0440\u0435\u0441'
                        },
                        'Boise': {
                            'exemplarCity': '\u0411\u043E\u0439\u0441\u0435'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u0410\u0441\u0443\u043D\u0441\u044C\u043E\u043D'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0410\u0440\u0443\u0431\u0430'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u0420\u0438\u043E-\u0413\u0430\u043B\u044C\u0435\u0433\u043E\u0441'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u0421\u0430\u043D-\u0425\u0443\u0430\u043D'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u0423\u0448\u0443\u0430\u044F'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u041B\u0430-\u0420\u0438\u043E\u0445\u0430'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u0421\u0430\u043D-\u041B\u0443\u0438\u0441'
                            },
                            'Salta': {
                                'exemplarCity': '\u0421\u0430\u043B\u044C\u0442\u0430'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u0422\u0443\u043A\u0443\u043C\u0430\u043D'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0410\u0440\u0430\u0433\u0443\u0430\u0438\u043D\u0430'
                        },
                        'Antigua': {
                            'exemplarCity': '\u0410\u043D\u0442\u0438\u0433\u0443\u0430'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u0410\u043D\u0433\u0438\u043B\u044C\u044F'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u0410\u043D\u043A\u043E\u0440\u0438\u0434\u0436'
                        },
                        'Adak': {
                            'exemplarCity': '\u0410\u0434\u0430\u043A, \u043E-\u0432'
                        },
                        'Bahia': {
                            'exemplarCity': '\u0411\u0430\u0438\u044F'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u0411\u0430\u0438\u044F-\u0434\u0435-\u0411\u0430\u043D\u0434\u0435\u0440\u0430\u0441'
                        },
                        'Barbados': {
                            'exemplarCity': '\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441'
                        },
                        'Belem': {
                            'exemplarCity': '\u0411\u0435\u043B\u0435\u043D'
                        },
                        'Belize': {
                            'exemplarCity': '\u0411\u0435\u043B\u0438\u0437'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u0411\u043B\u0430\u043D\u043A-\u0421\u0430\u0431\u043B\u043E\u043D'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u0411\u043E\u0430-\u0412\u0438\u0441\u0442\u0430'
                        },
                        'Bogota': {
                            'exemplarCity': '\u0411\u043E\u0433\u043E\u0442\u0430'
                        },
                        'Curacao': {
                            'exemplarCity': '\u041A\u044E\u0440\u0430\u0441\u0430\u043E'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u0414\u0435\u043D\u043C\u0430\u0440\u043A\u0441\u0445\u0430\u0432\u043D'
                        },
                        'Dawson': {
                            'exemplarCity': '\u0414\u043E\u0443\u0441\u043E\u043D'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u0414\u043E\u0441\u043E\u043D-\u041A\u0440\u0438\u043A'
                        },
                        'Denver': {
                            'exemplarCity': '\u0414\u0435\u043D\u0432\u0435\u0440'
                        },
                        'Detroit': {
                            'exemplarCity': '\u0414\u0435\u0442\u0440\u043E\u0439\u0442'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u042D\u0440\u043C\u043E\u0441\u0438\u043B\u044C\u043E'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0412\u0438\u043D\u0441\u0435\u043D\u0441'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u041F\u0435\u0442\u0435\u0440\u0441\u0431\u0443\u0440\u0433'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u0422\u0435\u043B\u043B-\u0421\u0438\u0442\u0438'
                            },
                            'Knox': {
                                'exemplarCity': '\u041D\u043E\u043A\u0441'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0412\u0438\u043D\u0430\u043C\u0430\u043A'
                            },
                            'Marengo': {
                                'exemplarCity': '\u041C\u0430\u0440\u0435\u043D\u0433\u043E'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0412\u0438\u0432\u044D\u0439'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0418\u043D\u0434\u0438\u0430\u043D\u0430\u043F\u043E\u043B\u0438\u0441'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0418\u043D\u0443\u0432\u0438\u043A'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0418\u043A\u0430\u043B\u0443\u0438\u0442'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u042F\u043C\u0430\u0439\u043A\u0430'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u0416\u0443\u0436\u0443\u0439'
                        },
                        'Juneau': {
                            'exemplarCity': '\u0414\u0436\u0443\u043D\u043E'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u0419\u0435\u043B\u043B\u043E\u0443\u043D\u0430\u0439\u0444'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u042F\u043A\u0443\u0442\u0430\u0442'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0412\u0438\u043D\u043D\u0438\u043F\u0435\u0433'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0423\u0430\u0439\u0442\u0445\u043E\u0440\u0441'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440'
                        },
                        'Tortola': {
                            'exemplarCity': '\u0422\u043E\u0440\u0442\u043E\u043B\u0430'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u041A\u0440\u0430\u043B\u0435\u043D\u0434\u0435\u0439\u043A'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u041C\u043E\u043D\u0442\u0438\u0441\u0435\u043B\u043B\u043E'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0413\u0430\u0432\u0430\u043D\u0430'
                        },
                        'Halifax': {
                            'exemplarCity': '\u0413\u0430\u043B\u0438\u0444\u0430\u043A\u0441'
                        },
                        'Guyana': {
                            'exemplarCity': '\u0413\u0430\u0439\u0430\u043D\u0430'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u0413\u0443\u0430\u044F\u043A\u0438\u043B\u044C'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u0413\u0432\u0430\u0434\u0435\u043B\u0443\u043F\u0430'
                        },
                        'Grenada': {
                            'exemplarCity': '\u0413\u0440\u0435\u043D\u0430\u0434\u0430'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u0413\u0440\u0430\u043D\u0434 \u0422\u0443\u0440\u043A'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u0413\u0443\u0441-\u0411\u0435\u0439'
                        },
                        'Godthab': {
                            'exemplarCity': '\u0413\u043E\u0442\u0445\u043E\u0431'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u0413\u043B\u0435\u0439\u0441-\u0411\u0435\u0439'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u0424\u043E\u0440\u0442\u0430\u043B\u0435\u0437\u0430'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u0421\u0430\u043B\u044C\u0432\u0430\u0434\u043E\u0440'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u042D\u0439\u0440\u0443\u043D\u0435\u043F\u0435'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u042D\u0434\u043C\u043E\u043D\u0442\u043E\u043D'
                        },
                        'Dominica': {
                            'exemplarCity': '\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u0427\u0438\u0443\u0430\u0443\u0430'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u041A\u043E\u0440\u0430\u043B-\u0425\u0430\u0440\u0431\u043E\u0440'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u041A\u043E\u0440\u0434\u043E\u0432\u0430'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0430'
                        },
                        'Creston': {
                            'exemplarCity': '\u041A\u0440\u0435\u0441\u0442\u043E\u043D'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u041A\u0443\u044F\u0431\u0430'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u041B\u0430-\u041F\u0430\u0441'
                        },
                        'Lima': {
                            'exemplarCity': '\u041B\u0438\u043C\u0430'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441'
                        },
                        'Louisville': {
                            'exemplarCity': '\u041B\u0443\u0438\u0441\u0432\u0438\u043B\u043B'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u041B\u043E\u0443\u044D\u0440-\u041F\u0440\u0438\u043D\u0441\u0435\u0441-\u041A\u0443\u043E\u0440\u0442\u0435\u0440'
                        },
                        'Maceio': {
                            'exemplarCity': '\u041C\u0430\u0441\u0435\u0439\u043E'
                        },
                        'Managua': {
                            'exemplarCity': '\u041C\u0430\u043D\u0430\u0433\u0443\u0430'
                        },
                        'Manaus': {
                            'exemplarCity': '\u041C\u0430\u043D\u0430\u0443\u0441'
                        },
                        'Marigot': {
                            'exemplarCity': '\u041C\u0430\u0440\u0438\u0433\u043E'
                        },
                        'Martinique': {
                            'exemplarCity': '\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A\u0430'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u041C\u0430\u0442\u0430\u043C\u043E\u0440\u043E\u0441'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u041C\u0430\u0441\u0430\u0442\u043B\u0430\u043D'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u041C\u0435\u043D\u0434\u043E\u0441\u0430'
                        },
                        'Menominee': {
                            'exemplarCity': '\u041C\u0435\u043D\u043E\u043C\u0438\u043D\u0438'
                        },
                        'Merida': {
                            'exemplarCity': '\u041C\u0435\u0440\u0438\u0434\u0430'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u041C\u0435\u0442\u043B\u0430\u043A\u0430\u0442\u043B\u0430'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u041C\u0435\u0445\u0438\u043A\u043E'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u041C\u0438\u043A\u0435\u043B\u043E\u043D'
                        },
                        'Moncton': {
                            'exemplarCity': '\u041C\u043E\u043D\u043A\u0442\u043E\u043D'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0435\u0440\u0440\u0435\u0439'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0435\u0432\u0438\u0434\u0435\u043E'
                        },
                        'Montreal': {
                            'exemplarCity': '\u041C\u043E\u043D\u0440\u0435\u0430\u043B\u044C'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u041C\u043E\u043D\u0441\u0435\u0440\u0440\u0430\u0442'
                        },
                        'Nassau': {
                            'exemplarCity': '\u041D\u0430\u0441\u0441\u0430\u0443'
                        },
                        'New_York': {
                            'exemplarCity': '\u041D\u044C\u044E-\u0419\u043E\u0440\u043A'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u041D\u0438\u043F\u0438\u0433\u043E\u043D'
                        },
                        'Nome': {
                            'exemplarCity': '\u041D\u043E\u043C'
                        },
                        'Noronha': {
                            'exemplarCity': '\u041D\u043E\u0440\u043E\u043D\u0445\u0430'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u0411\u043E\u0439\u043B\u0430, \u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0414\u0430\u043A\u043E\u0442\u0430'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u041D\u044C\u044E-\u0421\u0430\u043B\u0435\u043C'
                            },
                            'Center': {
                                'exemplarCity': '\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0414\u0430\u043A\u043E\u0442\u0430 - \u0426\u0435\u043D\u0442\u0440'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u041E\u0445\u0438\u043D\u0430\u0433\u0430'
                        },
                        'Panama': {
                            'exemplarCity': '\u041F\u0430\u043D\u0430\u043C\u0430'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u041F\u0430\u043D\u0433\u043D\u0438\u0440\u0442\u0430\u043D\u0433'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u041F\u0430\u0440\u0430\u043C\u0430\u0440\u0438\u0431\u043E'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u0424\u0438\u043D\u0438\u043A\u0441'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u043E-\u041F\u0440\u0435\u043D\u0441'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u043E\u0444-\u0421\u043F\u0435\u0439\u043D'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442\u0443-\u0412\u0435\u043B\u044C\u044E'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u041F\u0443\u044D\u0440\u0442\u043E-\u0420\u0438\u043A\u043E'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u0420\u0435\u0439\u043D\u0438-\u0420\u0438\u0432\u0435\u0440'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u0420\u0430\u043D\u043A\u0438\u043D-\u0418\u043D\u043B\u0435\u0442'
                        },
                        'Recife': {
                            'exemplarCity': '\u0420\u0435\u0441\u0438\u0444\u0438'
                        },
                        'Regina': {
                            'exemplarCity': '\u0420\u0435\u0434\u0436\u0430\u0439\u043D\u0430'
                        },
                        'Resolute': {
                            'exemplarCity': '\u0420\u0435\u0437\u043E\u043B\u044E\u0442'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u0420\u0438\u0443-\u0411\u0440\u0430\u043D\u043A\u0443'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0430-\u0418\u0437\u0430\u0431\u0435\u043B'
                        },
                        'Santarem': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0430\u0440\u0435\u043D'
                        },
                        'Santiago': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u044C\u044F\u0433\u043E'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u043E-\u0414\u043E\u043C\u0438\u043D\u0433\u043E'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u0421\u0430\u043D-\u041F\u0430\u0443\u043B\u0443'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u0421\u043A\u043E\u0440\u0441\u0431\u0438\u0441\u0443\u043D\u043D'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u0428\u0438\u043F\u0440\u043E\u043A'
                        },
                        'Sitka': {
                            'exemplarCity': '\u0421\u0438\u0442\u043A\u0430'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0421\u0435\u043D-\u0411\u0430\u0440\u0442\u0435\u043B\u044C\u043C\u0438'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u0414\u0436\u043E\u043D\u0441'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u041A\u0438\u0442\u0441'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u041B\u044E\u0441\u0438\u044F'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u0422\u043E\u043C\u0430\u0441'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u0412\u0438\u043D\u0441\u0435\u043D\u0442'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u042E.\u0414\u0436\u043E\u0440\u0434\u0436\u0438\u044F \u0438 \u042E.\u0421\u044D\u043D\u0434\u0432\u0438\u043D\u0447\u0435\u0432\u044B \u043E-\u0432\u0430'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u0420\u0435\u0439\u043A\u044C\u044F\u0432\u0438\u043A'
                        },
                        'Stanley': {
                            'exemplarCity': '\u0421\u0442\u044D\u043D\u043B\u0438'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u0421\u0432. \u0415\u043B\u0435\u043D\u044B, \u043E-\u0432'
                        },
                        'Azores': {
                            'exemplarCity': '\u0410\u0437\u043E\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u0411\u0435\u0440\u043C\u0443\u0434\u044B'
                        },
                        'Canary': {
                            'exemplarCity': '\u041A\u0430\u043D\u0430\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u0417\u0435\u043B\u0435\u043D\u043E\u0433\u043E \u041C\u044B\u0441\u0430'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u0424\u0430\u0440\u0435\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        },
                        'Madeira': {
                            'exemplarCity': '\u041C\u0430\u0434\u0435\u0439\u0440\u0430, \u043E-\u0432'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u041E\u0441\u043B\u043E'
                        },
                        'Moscow': {
                            'exemplarCity': '\u041C\u043E\u0441\u043A\u0432\u0430'
                        },
                        'Monaco': {
                            'exemplarCity': '\u041C\u043E\u043D\u0430\u043A\u043E'
                        },
                        'Minsk': {
                            'exemplarCity': '\u041C\u0438\u043D\u0441\u043A'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u041C\u0430\u0440\u0438\u0435\u0445\u0430\u043C\u043D'
                        },
                        'Malta': {
                            'exemplarCity': '\u041C\u0430\u043B\u044C\u0442\u0430'
                        },
                        'Madrid': {
                            'exemplarCity': '\u041C\u0430\u0434\u0440\u0438\u0434'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                            },
                            'exemplarCity': '\u041B\u043E\u043D\u0434\u043E\u043D'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u041B\u044E\u0431\u043B\u044F\u043D\u0430'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u041B\u0438\u0441\u0441\u0430\u0431\u043E\u043D'
                        },
                        'Kiev': {
                            'exemplarCity': '\u041A\u0438\u0435\u0432'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434'
                        },
                        'Jersey': {
                            'exemplarCity': '\u0414\u0436\u0435\u0440\u0441\u0438'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u0421\u0442\u0430\u043C\u0431\u0443\u043B'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u043E\u0432 \u041C\u044D\u043D'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u0411\u0443\u0445\u0430\u0440\u0435\u0441\u0442'
                        },
                        'Brussels': {
                            'exemplarCity': '\u0411\u0440\u044E\u0441\u0441\u0435\u043B\u044C'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u0411\u0440\u0430\u0442\u0438\u0441\u043B\u0430\u0432\u0430'
                        },
                        'Berlin': {
                            'exemplarCity': '\u0411\u0435\u0440\u043B\u0438\u043D'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u0411\u0435\u043B\u0433\u0440\u0430\u0434'
                        },
                        'Athens': {
                            'exemplarCity': '\u0410\u0444\u0438\u043D\u044B'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0410\u043D\u0434\u043E\u0440\u0440\u0430'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u0421\u0438\u043C\u0444\u0435\u0440\u043E\u043F\u043E\u043B\u044C'
                        },
                        'Skopje': {
                            'exemplarCity': '\u0421\u043A\u043E\u043F\u044C\u0435'
                        },
                        'Sofia': {
                            'exemplarCity': '\u0421\u043E\u0444\u0438\u044F'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u0421\u0442\u043E\u043A\u0433\u043E\u043B\u044C\u043C'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u0422\u0430\u043B\u043B\u0438\u043D'
                        },
                        'Tirane': {
                            'exemplarCity': '\u0422\u0438\u0440\u0430\u043D\u0430'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u0423\u0436\u0433\u043E\u0440\u043E\u0434'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0412\u0430\u0434\u0443\u0446'
                        },
                        'Zurich': {
                            'exemplarCity': '\u0426\u044E\u0440\u0438\u0445'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u0417\u0430\u043F\u043E\u0440\u043E\u0436\u044C\u0435'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u0417\u0430\u0433\u0440\u0435\u0431'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u0412\u0430\u0440\u0448\u0430\u0432\u0430'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u0412\u0438\u043B\u044C\u043D\u044E\u0441'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0412\u0435\u043D\u0430'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0412\u0430\u0442\u0438\u043A\u0430\u043D'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u0421\u0430\u0440\u0430\u0435\u0432\u043E'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u0421\u0430\u043D-\u041C\u0430\u0440\u0438\u043D\u043E'
                        },
                        'Samara': {
                            'exemplarCity': '\u0421\u0430\u043C\u0430\u0440\u0430'
                        },
                        'Rome': {
                            'exemplarCity': '\u0420\u0438\u043C'
                        },
                        'Riga': {
                            'exemplarCity': '\u0420\u0438\u0433\u0430'
                        },
                        'Prague': {
                            'exemplarCity': '\u041F\u0440\u0430\u0433\u0430'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u041F\u043E\u0434\u0433\u043E\u0440\u0438\u0446\u0430'
                        },
                        'Paris': {
                            'exemplarCity': '\u041F\u0430\u0440\u0438\u0436'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0425\u0435\u043B\u044C\u0441\u0438\u043D\u043A\u0438'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u0413\u0435\u0440\u043D\u0441\u0438'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                            },
                            'exemplarCity': '\u0414\u0443\u0431\u043B\u0438\u043D'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u041A\u043E\u043F\u0435\u043D\u0433\u0430\u0433\u0435\u043D'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u041A\u0438\u0448\u0438\u043D\u0435\u0432'
                        },
                        'Busingen': {
                            'exemplarCity': '\u0411\u044E\u0437\u0438\u043D\u0433\u0435\u043D-\u043D\u0430-\u0412\u0435\u0440\u0445\u043D\u0435\u043C-\u0420\u0435\u0439\u043D\u0435'
                        },
                        'Budapest': {
                            'exemplarCity': '\u0411\u0443\u0434\u0430\u043F\u0435\u0448\u0442'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u041B\u0438\u0431\u0440\u0435\u0432\u0438\u043B\u044C'
                        },
                        'Lagos': {
                            'exemplarCity': '\u041B\u0430\u0433\u043E\u0441'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u041A\u0438\u043D\u0448\u0430\u0441\u0430'
                        },
                        'Kigali': {
                            'exemplarCity': '\u041A\u0438\u0433\u0430\u043B\u0438'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u0425\u0430\u0440\u0442\u0443\u043C'
                        },
                        'Kampala': {
                            'exemplarCity': '\u041A\u0430\u043C\u043F\u0430\u043B\u0430'
                        },
                        'Juba': {
                            'exemplarCity': '\u0414\u0436\u0443\u0431\u0430'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u0419\u043E\u0445\u0430\u043D\u043D\u0435\u0441\u0431\u0443\u0440\u0433'
                        },
                        'Harare': {
                            'exemplarCity': '\u0425\u0430\u0440\u0430\u0440\u0435'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u0413\u0430\u0431\u043E\u0440\u043E\u043D\u0435'
                        },
                        'Freetown': {
                            'exemplarCity': '\u0424\u0440\u0438\u0442\u0430\u0443\u043D'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u042D\u043B\u044C-\u0410\u044E\u043D'
                        },
                        'Douala': {
                            'exemplarCity': '\u0414\u0443\u0430\u043B\u0430'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u0414\u0436\u0438\u0431\u0443\u0442\u0438'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u0414\u0430\u0440-\u044D\u0441-\u0421\u0430\u043B\u0430\u043C'
                        },
                        'Dakar': {
                            'exemplarCity': '\u0414\u0430\u043A\u0430\u0440'
                        },
                        'Banjul': {
                            'exemplarCity': '\u0411\u0430\u043D\u0436\u0443\u043B'
                        },
                        'Bangui': {
                            'exemplarCity': '\u0411\u0430\u043D\u0433\u0438'
                        },
                        'Bamako': {
                            'exemplarCity': '\u0411\u0430\u043C\u0430\u043A\u043E'
                        },
                        'Asmera': {
                            'exemplarCity': '\u0410\u0441\u043C\u0435\u0440\u0430'
                        },
                        'Malabo': {
                            'exemplarCity': '\u041C\u0430\u043B\u0430\u0431\u043E'
                        },
                        'Maputo': {
                            'exemplarCity': '\u041C\u0430\u043F\u0443\u0442\u0443'
                        },
                        'Maseru': {
                            'exemplarCity': '\u041C\u0430\u0441\u0435\u0440\u0443'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u041C\u0431\u0430\u0431\u0430\u043D\u0435'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u041C\u043E\u0433\u0430\u0434\u0438\u0448\u043E'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u041C\u043E\u043D\u0440\u043E\u0432\u0438\u044F'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u041D\u0430\u0439\u0440\u043E\u0431\u0438'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u041D\u0434\u0436\u0430\u043C\u0435\u043D\u0430'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0412\u0438\u043D\u0434\u0445\u0443\u043A'
                        },
                        'Tunis': {
                            'exemplarCity': '\u0422\u0443\u043D\u0438\u0441'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u0422\u0440\u0438\u043F\u043E\u043B\u0438'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u0421\u0430\u043D-\u0422\u043E\u043C\u0435'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442\u043E-\u041D\u043E\u0432\u043E'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u0423\u0430\u0433\u0430\u0434\u0443\u0433\u0443'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u041D\u0443\u0430\u043A\u0448\u043E\u0442'
                        },
                        'Niamey': {
                            'exemplarCity': '\u041D\u0438\u0430\u043C\u0435\u0439'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u041B\u0443\u0441\u0430\u043A\u0430'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u041B\u0443\u0431\u0443\u043C\u0431\u0430\u0448\u0438'
                        },
                        'Luanda': {
                            'exemplarCity': '\u041B\u0443\u0430\u043D\u0434\u0430'
                        },
                        'Lome': {
                            'exemplarCity': '\u041B\u043E\u043C\u0435'
                        },
                        'Conakry': {
                            'exemplarCity': '\u041A\u043E\u043D\u0430\u043A\u0440\u0438'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u0421\u0435\u0443\u0442\u0430'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u041A\u0430\u0441\u0430\u0431\u043B\u0430\u043D\u043A\u0430'
                        },
                        'Cairo': {
                            'exemplarCity': '\u041A\u0430\u0438\u0440'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u0411\u0443\u0436\u0443\u043C\u0431\u0443\u0440\u0430'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0438\u043B\u044C'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u0411\u043B\u0430\u043D\u0442\u0430\u0439\u0440'
                        },
                        'Bissau': {
                            'exemplarCity': '\u0411\u0438\u0441\u0430\u0443'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0410\u0431\u0438\u0434\u0436\u0430\u043D'
                        },
                        'Accra': {
                            'exemplarCity': '\u0410\u043A\u043A\u0440\u0430'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0410\u0434\u0434\u0438\u0441-\u0410\u0431\u0435\u0431\u0430'
                        },
                        'Algiers': {
                            'exemplarCity': '\u0410\u043B\u0436\u0438\u0440'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0428\u0430\u043D\u0445\u0430\u0439'
                        },
                        'Seoul': {
                            'exemplarCity': '\u0421\u0435\u0443\u043B'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u0421\u0430\u043C\u0430\u0440\u043A\u0430\u043D\u0434'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D, \u043E-\u0432'
                        },
                        'Saigon': {
                            'exemplarCity': '\u0425\u043E\u0448\u0438\u043C\u0438\u043D'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u042D\u0440-\u0420\u0438\u044F\u0434'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u0420\u0430\u043D\u0433\u0443\u043D'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u041A\u044B\u0437\u044B\u043B\u043E\u0440\u0434\u0430'
                        },
                        'Qatar': {
                            'exemplarCity': '\u041A\u0430\u0442\u0430\u0440'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u041F\u0445\u0435\u043D\u044C\u044F\u043D'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u041F\u043E\u043D\u0442\u0438\u0430\u043D\u0430\u043A'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u041F\u043D\u043E\u043C\u043F\u0435\u043D\u044C'
                        },
                        'Oral': {
                            'exemplarCity': '\u041E\u0440\u0430\u043B (\u0423\u0440\u0430\u043B\u044C\u0441\u043A)'
                        },
                        'Omsk': {
                            'exemplarCity': '\u041E\u043C\u0441\u043A'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u0411\u0430\u0433\u0434\u0430\u0434'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u0427\u0443\u043D\u0446\u0438\u043D'
                        },
                        'Colombo': {
                            'exemplarCity': '\u041A\u043E\u043B\u043E\u043C\u0431\u043E'
                        },
                        'Damascus': {
                            'exemplarCity': '\u0414\u0430\u043C\u0430\u0441\u043A'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u0414\u0430\u043A\u043A\u0430'
                        },
                        'Dili': {
                            'exemplarCity': '\u0414\u0438\u043B\u0438'
                        },
                        'Dubai': {
                            'exemplarCity': '\u0414\u0443\u0431\u0430\u0439'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u0414\u0443\u0448\u0430\u043D\u0431\u0435'
                        },
                        'Gaza': {
                            'exemplarCity': '\u0413\u0430\u0437\u0430'
                        },
                        'Harbin': {
                            'exemplarCity': '\u0425\u0430\u0440\u0431\u0438\u043D'
                        },
                        'Hebron': {
                            'exemplarCity': '\u0425\u0435\u0432\u0440\u043E\u043D'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u0413\u043E\u043D\u043A\u043E\u043D\u0433'
                        },
                        'Hovd': {
                            'exemplarCity': '\u0425\u043E\u0432\u0434'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0418\u0440\u043A\u0443\u0442\u0441\u043A'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u0414\u0436\u0430\u043A\u0430\u0440\u0442\u0430'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u0414\u0436\u0430\u0439\u043F\u0443\u0440'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u0423\u0440\u0443\u043C\u0447\u0438'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u0423\u0441\u0442\u044C-\u041D\u0435\u0440\u0430'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0412\u044C\u0435\u043D\u0442\u044C\u044F\u043D'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u042F\u043A\u0443\u0442\u0441\u043A'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u0415\u0440\u0435\u0432\u0430\u043D'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u0422\u043E\u043A\u0438\u043E'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u0422\u0438\u043C\u043F\u0443'
                        },
                        'Tehran': {
                            'exemplarCity': '\u0422\u0435\u0433\u0435\u0440\u0430\u043D'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u0422\u0431\u0438\u043B\u0438\u0441\u0438'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u0422\u0430\u0448\u043A\u0435\u043D\u0442'
                        },
                        'Taipei': {
                            'exemplarCity': '\u0422\u0430\u0439\u0431\u044D\u0439'
                        },
                        'Singapore': {
                            'exemplarCity': '\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u0418\u0435\u0440\u0443\u0441\u0430\u043B\u0438\u043C'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0410\u0448\u0445\u0430\u0431\u0430\u0434'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0410\u043A\u0442\u043E\u0431\u0435 (\u0410\u043A\u0442\u044E\u0431\u0438\u043D\u0441\u043A)'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0410\u043A\u0442\u0430\u0443'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0410\u043D\u0430\u0434\u044B\u0440\u044C'
                        },
                        'Amman': {
                            'exemplarCity': '\u0410\u043C\u043C\u0430\u043D'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0410\u043B\u043C\u0430\u0442\u044B'
                        },
                        'Aden': {
                            'exemplarCity': '\u0410\u0434\u0435\u043D'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u0411\u0430\u0445\u0440\u0435\u0439\u043D'
                        },
                        'Baku': {
                            'exemplarCity': '\u0411\u0430\u043A\u0443'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u0411\u0430\u043D\u0433\u043A\u043E\u043A'
                        },
                        'Beirut': {
                            'exemplarCity': '\u0411\u0435\u0439\u0440\u0443\u0442'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u0411\u0438\u0448\u043A\u0435\u043A'
                        },
                        'Brunei': {
                            'exemplarCity': '\u0411\u0440\u0443\u043D\u0435\u0439'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u041A\u0430\u043B\u044C\u043A\u0443\u0442\u0442\u0430'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D'
                        },
                        'Kabul': {
                            'exemplarCity': '\u041A\u0430\u0431\u0443\u043B'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A-\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439'
                        },
                        'Karachi': {
                            'exemplarCity': '\u041A\u0430\u0440\u0430\u0447\u0438'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u041A\u0430\u0448\u0433\u0430\u0440'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u041A\u0430\u0442\u043C\u0430\u043D\u0434\u0443'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u0425\u0430\u043D\u0434\u044B\u0433\u0430'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u041A\u0443\u0430\u043B\u0430-\u041B\u0443\u043C\u043F\u0443\u0440'
                        },
                        'Kuching': {
                            'exemplarCity': '\u041A\u0443\u0447\u0438\u043D\u0433'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u041A\u0443\u0432\u0435\u0439\u0442'
                        },
                        'Macau': {
                            'exemplarCity': '\u041C\u0430\u043A\u0430\u043E'
                        },
                        'Magadan': {
                            'exemplarCity': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D'
                        },
                        'Makassar': {
                            'exemplarCity': '\u041C\u0430\u043A\u0430\u0441\u0430\u0440'
                        },
                        'Manila': {
                            'exemplarCity': '\u041C\u0430\u043D\u0438\u043B\u0430'
                        },
                        'Muscat': {
                            'exemplarCity': '\u041C\u0430\u0441\u043A\u0430\u0442'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u041D\u0438\u043A\u043E\u0441\u0438\u044F'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u041D\u043E\u0432\u043E\u043A\u0443\u0437\u043D\u0435\u0446\u043A'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '\u0421\u0430\u043C\u043E\u0430',
                            'standard': '\u0421\u0430\u043C\u043E\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0421\u0430\u043C\u043E\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u0412\u0440\u0435\u043C\u044F \u0432 \u0421\u0430\u043C\u0430\u0440\u0435',
                            'standard': '\u0421\u0430\u043C\u0430\u0440\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0421\u0430\u043C\u0430\u0440\u0441\u043A\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D',
                            'standard': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0421\u0430\u0445\u0430\u043B\u0438\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u0420\u043E\u0442\u0435\u0440\u0430'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u0420\u0435\u044E\u043D\u044C\u043E\u043D'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u041A\u044B\u0437\u044B\u043B\u043E\u0440\u0434\u0430*',
                            'standard': '\u041A\u044B\u0437\u044B\u043B\u043E\u0440\u0434\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F*',
                            'daylight': '\u041A\u044B\u0437\u044B\u043B\u043E\u0440\u0434\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F*'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u041E-\u0432\u0430 \u041F\u043E\u043D\u0430\u043F\u0435'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u041F\u0438\u0442\u043A\u044D\u0440\u043D'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D',
                            'standard': '\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u041E-\u0432\u0430 \u0424\u0435\u043D\u0438\u043A\u0441'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B',
                            'standard': '\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u041F\u0435\u0440\u0443',
                            'standard': '\u041F\u0435\u0440\u0443, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041F\u0435\u0440\u0443, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439',
                            'standard': '\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u041F\u0430\u043F\u0443\u0430 \u2013 \u041D\u043E\u0432\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u041F\u0430\u043B\u0430\u0443'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D',
                            'standard': '\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u041E\u043C\u0441\u043A',
                            'standard': '\u041E\u043C\u0441\u043A, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041E\u043C\u0441\u043A, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A',
                            'standard': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u041C\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u0424\u0435\u0440\u043D\u0430\u043D\u0434\u0443-\u0434\u0438-\u041D\u043E\u0440\u043E\u043D\u044C\u044F',
                            'standard': '\u0424\u0435\u0440\u043D\u0430\u043D\u0434\u0443-\u0434\u0438-\u041D\u043E\u0440\u043E\u043D\u044C\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0424\u0435\u0440\u043D\u0430\u043D\u0434\u0443-\u0434\u0438-\u041D\u043E\u0440\u043E\u043D\u044C\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u041D\u043E\u0440\u0444\u043E\u043B\u043A'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u041D\u0438\u0443\u044D'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u041D\u044C\u044E\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434',
                            'standard': '\u041D\u044C\u044E\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041D\u044C\u044E\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F',
                            'standard': '\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u044F',
                            'standard': '\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430',
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430',
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u0413\u043E\u0440\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0421\u0428\u0410)',
                            'standard': '\u0413\u043E\u0440\u043D\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0421\u0428\u0410)',
                            'daylight': '\u0413\u043E\u0440\u043D\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F (\u0421\u0428\u0410)'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u0422\u0438\u0445\u043E\u043E\u043A\u0435\u0430\u043D\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0422\u0438\u0445\u043E\u043E\u043A\u0435\u0430\u043D\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0422\u0438\u0445\u043E\u043E\u043A\u0435\u0430\u043D\u0441\u043A\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u0412\u0440\u0435\u043C\u044F \u043F\u043E \u0410\u043D\u0430\u0434\u044B\u0440\u044E',
                            'standard': '\u0410\u043D\u0430\u0434\u044B\u0440\u044C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043D\u0430\u0434\u044B\u0440\u044C \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '\u0410\u043A\u0442\u0430\u0443 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0410\u043A\u0442\u0430\u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043A\u0442\u0430\u0443 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '\u0410\u043A\u0442\u043E\u0431\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0410\u043A\u0442\u043E\u0431\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043A\u0442\u043E\u0431\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435',
                            'standard': '\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '\u041A\u0435\u0439\u0441\u0438'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u0427\u0430\u043C\u043E\u0440\u0440\u043E'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u0427\u0430\u0442\u0435\u043C',
                            'standard': '\u0427\u0430\u0442\u0435\u043C, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0427\u0430\u0442\u0435\u043C, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u0427\u0438\u043B\u0438',
                            'standard': '\u0427\u0438\u043B\u0438, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0427\u0438\u043B\u0438, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u041A\u0438\u0442\u0430\u0439',
                            'standard': '\u041A\u0438\u0442\u0430\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041A\u0438\u0442\u0430\u0439, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D',
                            'standard': '\u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u041E-\u0432 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u044B\u0435 \u043E-\u0432\u0430'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F',
                            'standard': '\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u041E-\u0432\u0430 \u041A\u0443\u043A\u0430',
                            'standard': '\u041E-\u0432\u0430 \u041A\u0443\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041E-\u0432\u0430 \u041A\u0443\u043A\u0430, \u043F\u043E\u043B\u0443\u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u041A\u0443\u0431\u0430',
                            'standard': '\u041A\u0443\u0431\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041A\u0443\u0431\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u0414\u0435\u0439\u0432\u0438\u0441'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u0414\u044E\u043C\u043E\u043D-\u0434\'\u042E\u0440\u0432\u0438\u043B\u044C'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0422\u0438\u043C\u043E\u0440'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u041E-\u0432 \u041F\u0430\u0441\u0445\u0438',
                            'standard': '\u041E-\u0432 \u041F\u0430\u0441\u0445\u0438, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041E-\u0432 \u041F\u0430\u0441\u0445\u0438, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u042D\u043A\u0432\u0430\u0434\u043E\u0440'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430',
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430',
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u044B',
                            'standard': '\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u044B, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u044B, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u0424\u0438\u0434\u0436\u0438',
                            'standard': '\u0424\u0438\u0434\u0436\u0438, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0424\u0438\u0434\u0436\u0438, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u0413\u0432\u0438\u0430\u043D\u0430'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u043E\u0435 \u044E\u0436\u043D\u043E\u0435 \u0438 \u0430\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u0413\u0430\u043B\u0430\u043F\u0430\u0433\u043E\u0441\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u0422\u043E\u043A\u0435\u043B\u0430\u0443'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u0422\u043E\u043D\u0433\u0430',
                            'standard': '\u0422\u043E\u043D\u0433\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0422\u043E\u043D\u0433\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u0427\u0443\u0443\u043A'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u044F',
                            'standard': '\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u0422\u0443\u0432\u0430\u043B\u0443'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u0423\u0440\u0443\u0433\u0432\u0430\u0439',
                            'standard': '\u0423\u0440\u0443\u0433\u0432\u0430\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0423\u0440\u0443\u0433\u0432\u0430\u0439, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D',
                            'standard': '\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u0412\u0430\u043D\u0443\u0430\u0442\u0443',
                            'standard': '\u0412\u0430\u043D\u0443\u0430\u0442\u0443, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u0430\u043D\u0443\u0430\u0442\u0443, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433',
                            'standard': '\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u042F\u043A\u0443\u0442\u0441\u043A',
                            'standard': '\u042F\u043A\u0443\u0442\u0441\u043A, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u042F\u043A\u0443\u0442\u0441\u043A, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u0423\u043E\u043B\u043B\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043D\u0430'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u041E-\u0432 \u0423\u044D\u0439\u043A'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u043A'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434',
                            'standard': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A',
                            'standard': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u0430'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u0422\u0430\u0439\u0432\u0430\u043D\u044C',
                            'standard': '\u0422\u0430\u0439\u0432\u0430\u043D\u044C, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0422\u0430\u0439\u0432\u0430\u043D\u044C, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u041E-\u0432 \u0422\u0430\u0438\u0442\u0438'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u0421\u0451\u0432\u0430'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u0421\u0443\u0440\u0438\u043D\u0430\u043C'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u042E\u0436\u043D\u0430\u044F \u0413\u0435\u043E\u0440\u0433\u0438\u044F'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u044B \u043E-\u0432\u0430'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u0421\u0435\u0439\u0448\u0435\u043B\u044B'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u0413\u0443\u0430\u043C'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F',
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E \u0413\u0440\u0438\u043D\u0432\u0438\u0447\u0443'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u041E-\u0432\u0430 \u0413\u0438\u043B\u0431\u0435\u0440\u0442\u0430'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u0413\u0440\u0443\u0437\u0438\u044F',
                            'standard': '\u0413\u0440\u0443\u0437\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0413\u0440\u0443\u0437\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u0413\u0430\u043C\u0431\u044C\u0435'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u0410\u043C\u0430\u0437\u043E\u043D\u043A\u0430',
                            'standard': '\u0410\u043C\u0430\u0437\u043E\u043D\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043C\u0430\u0437\u043E\u043D\u043A\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u0410\u043A\u0440\u0438 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0410\u043A\u0440\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043A\u0440\u0438 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u042E\u0436\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u0410\u043B\u044F\u0441\u043A\u0430',
                            'standard': '\u0410\u043B\u044F\u0441\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043B\u044F\u0441\u043A\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '\u0410\u043B\u043C\u0430-\u0410\u0442\u0430 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0410\u043B\u043C\u0430-\u0410\u0442\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u043B\u043C\u0430-\u0410\u0442\u0430 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F',
                            'standard': '\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430',
                            'standard': '\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u0410\u0440\u043C\u0435\u043D\u0438\u044F',
                            'standard': '\u0410\u0440\u043C\u0435\u043D\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u0440\u043C\u0435\u043D\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u0410\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0410\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F',
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F',
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F',
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D',
                            'standard': '\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u0410\u0437\u043E\u0440\u044B',
                            'standard': '\u0410\u0437\u043E\u0440\u044B, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0410\u0437\u043E\u0440\u044B, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448',
                            'standard': '\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u0411\u0443\u0442\u0430\u043D'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u0411\u043E\u043B\u0438\u0432\u0438\u044F'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F',
                            'standard': '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u0411\u0440\u0443\u043D\u0435\u0439-\u0414\u0430\u0440\u0443\u0441\u0441\u0430\u043B\u0430\u043C'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u041F\u0435\u0440\u0441\u0438\u0434\u0441\u043A\u0438\u0439 \u0437\u0430\u043B\u0438\u0432'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u0413\u0430\u0439\u0430\u043D\u0430'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u0413\u0430\u0432\u0430\u0439\u0441\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'standard': '\u0413\u0430\u0432\u0430\u0439\u0441\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0413\u0430\u0432\u0430\u0439\u0441\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u043A\u043E\u0435 \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u0413\u043E\u043D\u043A\u043E\u043D\u0433',
                            'standard': '\u0413\u043E\u043D\u043A\u043E\u043D\u0433, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0413\u043E\u043D\u043A\u043E\u043D\u0433, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u0425\u043E\u0432\u0434',
                            'standard': '\u0425\u043E\u0432\u0434, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0425\u043E\u0432\u0434, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u0418\u043D\u0434\u0438\u044F'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u0418\u043D\u0434\u0438\u0439\u0441\u043A\u0438\u0439 \u043E\u043A\u0435\u0430\u043D'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u0418\u043D\u0434\u043E\u043A\u0438\u0442\u0430\u0439'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u0418\u0440\u0430\u043D',
                            'standard': '\u0418\u0440\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0418\u0440\u0430\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u0418\u0440\u043A\u0443\u0442\u0441\u043A',
                            'standard': '\u0418\u0440\u043A\u0443\u0442\u0441\u043A, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0418\u0440\u043A\u0443\u0442\u0441\u043A, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u0418\u0437\u0440\u0430\u0438\u043B\u044C',
                            'standard': '\u0418\u0437\u0440\u0430\u0438\u043B\u044C, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0418\u0437\u0440\u0430\u0438\u043B\u044C, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u042F\u043F\u043E\u043D\u0438\u044F',
                            'standard': '\u042F\u043F\u043E\u043D\u0438\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u042F\u043F\u043E\u043D\u0438\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u0412\u0440\u0435\u043C\u044F \u0432 \u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A\u0443-\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u043E\u043C\u0443',
                            'standard': '\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A\u0443-\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u043E\u043C\u0443',
                            'daylight': '\u041B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A\u0435-\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u043E\u043C'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u0417\u0430\u043F\u0430\u0434\u043D\u044B\u0439 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u041A\u043E\u0440\u0435\u044F',
                            'standard': '\u041A\u043E\u0440\u0435\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041A\u043E\u0440\u0435\u044F, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u041A\u043E\u0441\u0440\u0430\u044D'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A',
                            'standard': '\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u041E-\u0432\u0430 \u041B\u0430\u0439\u043D'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u041B\u043E\u0440\u0434-\u0425\u0430\u0443',
                            'standard': '\u041B\u043E\u0440\u0434-\u0425\u0430\u0443, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041B\u043E\u0440\u0434-\u0425\u0430\u0443, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '\u041C\u0430\u043A\u0430\u043E',
                            'standard': '\u041C\u0430\u043A\u0430\u043E, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041C\u0430\u043A\u0430\u043E, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u041C\u0430\u043A\u043A\u0443\u043E\u0440\u0438'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D',
                            'standard': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041C\u0430\u0433\u0430\u0434\u0430\u043D, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u041C\u0430\u043B\u0430\u0439\u0437\u0438\u044F'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u041C\u0430\u0440\u043A\u0438\u0437\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u041C\u0430\u0440\u0448\u0430\u043B\u043B\u043E\u0432\u044B \u043E-\u0432\u0430'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439',
                            'standard': '\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u041C\u043E\u0443\u0441\u043E\u043D'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440',
                            'standard': '\u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u041C\u043E\u0441\u043A\u0432\u0430',
                            'standard': '\u041C\u043E\u0441\u043A\u0432\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
                            'daylight': '\u041C\u043E\u0441\u043A\u0432\u0430, \u043B\u0435\u0442\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u041C\u044C\u044F\u043D\u043C\u0430'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u041D\u0430\u0443\u0440\u0443'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u041D\u0435\u043F\u0430\u043B'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} \u0432\u0440\u0435\u043C\u044F',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': '\u041D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430',
                'collation': '\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435',
                'colHiraganaQuaternary': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u0430\u043D\u044B',
                'colCaseLevel': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430',
                'colCaseFirst': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u0438\u043B\u0438 \u043D\u0438\u0436\u043D\u0435\u043C\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443',
                'colBackwards': '\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043A\u0446\u0435\u043D\u0442\u0443',
                'colAlternate': '\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u043F\u0440\u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0435',
                'calendar': '\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                'x': '\u0427\u0430\u0441\u0442\u043D\u043E\u0435',
                'variableTop': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u0441\u0438\u043C\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432',
                'va': '\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A',
                'timezone': '\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441',
                'numbers': '\u0426\u0438\u0444\u0440\u044B',
                'currency': '\u0412\u0430\u043B\u044E\u0442\u0430',
                'colStrength': '\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438',
                'colNumeric': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0447\u0438\u0441\u0435\u043B'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u0430\u043D\u044B',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u0430\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C'
                },
                'colCaseLevel': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0432\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430'
                },
                'colCaseFirst': {
                    'lower': '\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u043B\u043E\u0432 \u0432 \u043D\u0438\u0436\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435',
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C',
                    'upper': '\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u043B\u043E\u0432 \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435'
                },
                'colStrength': {
                    'identical': '\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430',
                    'primary': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C, \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0449\u0438\u043C \u0440\u0430\u0437\u0440\u044F\u0434\u043D\u043E\u0441\u0442\u044C',
                    'quaternary': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C/\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u043C/\u0434\u043B\u0438\u043D\u0435 \u0441\u0442\u0440\u043E\u043A\u0438/\u043A\u0430\u043D\u0435',
                    'secondary': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C',
                    'tertiary': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C/\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443/\u0434\u043B\u0438\u043D\u0435 \u0441\u0442\u0440\u043E\u043A\u0438'
                },
                'colNumeric': {
                    'no': '\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0447\u0438\u0441\u043B\u043E\u0432\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439'
                },
                'colNormalization': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u0435\u0437 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 Unicode'
                },
                'calendar': {
                    'japanese': '\u042F\u043F\u043E\u043D\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'iso8601': '\u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C ISO-8601',
                    'coptic': '\u041A\u043E\u043F\u0442\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'dangi': '\u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0434\u0430\u043D\u0433\u0438',
                    'ethiopic': '\u042D\u0444\u0438\u043E\u043F\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'ethiopic-amete-alem': '\u042D\u0444\u0438\u043E\u043F\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C "\u0410\u043C\u0435\u0442\u0435 \u0410\u043B\u0435\u043C"',
                    'gregorian': '\u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0430\u043D\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'hebrew': '\u0415\u0432\u0440\u0435\u0439\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'persian': '\u041F\u0435\u0440\u0441\u0438\u0434\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'roc': '\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'chinese': '\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'buddhist': '\u0411\u0443\u0434\u0434\u0438\u0439\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'indian': '\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0418\u043D\u0434\u0438\u0438',
                    'islamic': '\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'islamic-civil': '\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0438\u0439 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C',
                    'islamic-rgsa': '\u0438\u0441\u043B\u0430\u043C\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C (\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F)',
                    'islamic-tbla': '\u0438\u0441\u043B\u0430\u043C\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C (\u0442\u0430\u0431\u043B\u0438\u0447\u043D\u044B\u0439, \u0430\u0441\u0442\u0440\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043F\u043E\u0445\u0430)',
                    'islamic-umalqura': '\u0438\u0441\u043B\u0430\u043C\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C (\u0423\u043C\u043C \u0430\u043B\u044C-\u041A\u0443\u0440\u0430)'
                },
                'collation': {
                    'phonebook': '\u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0438',
                    'gb2312han': '\u0443\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u044B\u0439 \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 - GB2312',
                    'eor': '\u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438',
                    'ducet': 'c\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 Unicode',
                    'dictionary': '\u0441\u043B\u043E\u0432\u0430\u0440\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438',
                    'big5han': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430 \u2013 Big5',
                    'traditional': '\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A',
                    'standard': '\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435',
                    'zhuyin': '\u0447\u0436\u0443\u0438\u043D\u044C',
                    'unihan': '\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043A\u043B\u044E\u0447\u0430\u043C, \u0437\u0430\u0442\u0435\u043C \u043F\u043E \u0447\u0435\u0440\u0442\u0430\u043C',
                    'stroke': '\u043F\u043E \u0447\u0435\u0440\u0442\u0430\u043C',
                    'searchjl': '\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E\u0439 \u0445\u0430\u043D\u0433\u044B\u043B\u044C',
                    'search': '\u043F\u043E\u0438\u0441\u043A',
                    'reformed': '\u0440\u0435\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438',
                    'pinyin': '\u043F\u0438\u043D\u044C\u0438\u043D\u044C',
                    'phonetic': '\u0424\u043E\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438'
                },
                'numbers': {
                    'knda': '\u0426\u0438\u0444\u0440\u044B \u043A\u0430\u043D\u043D\u0430\u0434\u0430',
                    'khmr': '\u041A\u0445\u043C\u0435\u0440\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'kali': '\u0446\u0438\u0444\u0440\u044B \u043A\u0430\u0439\u044F \u043B\u0438',
                    'jpanfin': '\u042F\u043F\u043E\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B (\u0444\u0438\u043D\u0430\u043D\u0441\u044B)',
                    'jpan': '\u042F\u043F\u043E\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'java': '\u044F\u0432\u0430\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'hebr': '\u0426\u0438\u0444\u0440\u044B \u043D\u0430 \u0438\u0432\u0440\u0438\u0442\u0435',
                    'hantfin': '\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B (\u0444\u0438\u043D\u0430\u043D\u0441\u044B)',
                    'hant': '\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'hansfin': '\u0423\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u044B\u0435 \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B (\u0444\u0438\u043D\u0430\u043D\u0441\u044B)',
                    'hans': '\u0423\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u044B\u0435 \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'hanidec': '\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0435 \u0434\u0435\u0441\u044F\u0442\u0438\u0447\u043D\u044B\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'guru': '\u0426\u0438\u0444\u0440\u044B \u0433\u0443\u0440\u043C\u0443\u043A\u0445\u0438',
                    'gujr': '\u0426\u0438\u0444\u0440\u044B \u0433\u0443\u0434\u0436\u0430\u0440\u0430\u0442\u0438',
                    'greklow': '\u0413\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B \u0432 \u043D\u0438\u0436\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435',
                    'grek': '\u0413\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'bali': '\u0431\u0430\u043B\u0438\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'armnlow': '\u0410\u0440\u043C\u044F\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B \u0432 \u043D\u0438\u0436\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435',
                    'armn': '\u0410\u0440\u043C\u044F\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'arabext': '\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0430\u0440\u0430\u0431\u0441\u043A\u043E-\u0438\u043D\u0434\u0438\u0439\u0441\u043A\u0438\u0445 \u0446\u0438\u0444\u0440',
                    'arab': '\u0410\u0440\u0430\u0431\u0441\u043A\u043E-\u0438\u043D\u0434\u0438\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'finance': '\u0421\u0438\u043C\u0432\u043E\u043B\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439',
                    'traditional': '\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u0438',
                    'native': '\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0446\u0438\u0444\u0440 \u043A\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F',
                    'beng': '\u0411\u0435\u043D\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'brah': '\u0446\u0438\u0444\u0440\u044B \u0431\u0440\u0430\u0445\u043C\u0438',
                    'cakm': '\u0446\u0438\u0444\u0440\u044B \u0447\u0430\u043A\u043C\u0430',
                    'cham': '\u0447\u0430\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'deva': '\u0426\u0438\u0444\u0440\u044B \u0434\u0435\u0432\u0430\u043D\u0430\u0433\u0430\u0440\u0438',
                    'orya': '\u0426\u0438\u0444\u0440\u044B \u043E\u0440\u0438\u044F',
                    'osma': '\u0446\u0438\u0444\u0440\u044B \u043E\u0441\u043C\u0430\u043D\u044C\u044F',
                    'roman': '\u0420\u0438\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'romanlow': '\u0420\u0438\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B \u0432 \u043D\u0438\u0436\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435',
                    'saur': '\u0446\u0438\u0444\u0440\u044B \u0441\u0430\u0443\u0440\u0430\u0448\u0442\u0440\u0430',
                    'shrd': '\u0446\u0438\u0444\u0440\u044B \u0448\u0430\u0440\u0430\u0434\u0430',
                    'sora': '\u0446\u0438\u0444\u0440\u044B \u0441\u043E\u0440\u0430-\u0441\u043E\u043C\u043F\u0435\u043D\u0433',
                    'sund': '\u0441\u0443\u0434\u0430\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'vaii': '\u0426\u0438\u0444\u0440\u044B \u044F\u0437\u044B\u043A\u0430 \u0432\u0430\u0439',
                    'tibt': '\u0422\u0438\u0431\u0435\u0442\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'thai': '\u0422\u0430\u0439\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'telu': '\u0426\u0438\u0444\u0440\u044B \u0442\u0435\u043B\u0443\u0433\u0443',
                    'tamldec': '\u0422\u0430\u043C\u0438\u043B\u044C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'taml': '\u0422\u0430\u043C\u0438\u043B\u044C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'talu': '\u0446\u0438\u0444\u0440\u044B \u043D\u043E\u0432\u043E\u0439 \u0442\u0430\u0439-\u043B\u044E',
                    'takr': '\u0446\u0438\u0444\u0440\u044B \u0442\u0430\u043A\u0440\u0438',
                    'olck': '\u0446\u0438\u0444\u0440\u044B \u043E\u043B-\u0447\u0438\u043A\u0438',
                    'nkoo': '\u0446\u0438\u0444\u0440\u044B \u043D\u043A\u043E',
                    'mymrshan': '\u0431\u0438\u0440\u043C\u0430\u043D\u0441\u043A\u0438\u0435 \u0448\u0430\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'mymr': '\u0411\u0438\u0440\u043C\u0430\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'mtei': '\u0446\u0438\u0444\u0440\u044B \u043C\u0430\u043D\u0438\u043F\u0443\u0440\u0438',
                    'mong': '\u041C\u043E\u043D\u0433\u043E\u043B\u044C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'mlym': '\u0426\u0438\u0444\u0440\u044B \u043C\u0430\u043B\u0430\u044F\u043B\u0430\u043C',
                    'limb': '\u0446\u0438\u0444\u0440\u044B \u043B\u0438\u043C\u0431\u0443',
                    'lepc': '\u0446\u0438\u0444\u0440\u044B \u043B\u0435\u043F\u0447\u0430',
                    'latn': '\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'laoo': '\u041B\u0430\u043E\u0441\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'lanatham': '\u0446\u0438\u0444\u0440\u044B \u0442\u0430\u0439 \u0442\u0430\u043C \u0442\u0430\u043C',
                    'lana': '\u0446\u0438\u0444\u0440\u044B \u0442\u0430\u0439 \u0442\u0430\u043C \u0445\u043E\u0440\u0430',
                    'geor': '\u0413\u0440\u0443\u0437\u0438\u043D\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B',
                    'fullwide': '\u041F\u043E\u043B\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0446\u0438\u0444\u0440',
                    'ethi': '\u042D\u0444\u0438\u043E\u043F\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B'
                },
                'colAlternate': {
                    'non-ignorable': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
                    'shifted': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432'
                },
                'colBackwards': {
                    'no': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C \u0432 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435',
                    'yes': '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435'
                }
            },
            'codePatterns': {
                'language': '\u042F\u0437\u044B\u043A: {0}',
                'script': '\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435: {0}',
                'territory': '\u0420\u0435\u0433\u0438\u043E\u043D: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} \u0443\u043D\u0446\u0438\u044F',
                    'unitPattern-count-many': '{0} \u0443\u043D\u0446\u0438\u0439',
                    'unitPattern-count-other': '{0} \u0443\u043D\u0446\u0438\u0438'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C',
                    'unitPattern-count-many': '{0} \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C',
                    'unitPattern-count-other': '{0} \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u0433\u0440\u0430\u043C\u043C',
                    'unitPattern-count-many': '{0} \u0433\u0440\u0430\u043C\u043C',
                    'unitPattern-count-other': '{0} \u0433\u0440\u0430\u043C\u043C\u0430'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u044F\u0440\u0434',
                    'unitPattern-count-many': '{0} \u044F\u0440\u0434\u043E\u0432',
                    'unitPattern-count-other': '{0} \u044F\u0440\u0434\u0430'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} \u043F\u0438\u043A\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043F\u0438\u043A\u043E\u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043F\u0438\u043A\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u0430'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0438'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0435\u0442\u0440\u0430'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u0441\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u0441\u0432\u0435\u0442\u043E\u0432\u044B\u0445 \u043B\u0435\u0442',
                    'unitPattern-count-other': '{0} \u0441\u0432\u0435\u0442\u043E\u0432\u044B\u0445 \u0433\u043E\u0434\u0430'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0430'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u043B\u0435\u0442',
                    'unitPattern-count-other': '{0} \u0433\u043E\u0434\u0430'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u043D\u0435\u0434\u0435\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043D\u0435\u0434\u0435\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043D\u0435\u0434\u0435\u043B\u0438'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u043C\u0435\u0441\u044F\u0446',
                    'unitPattern-count-many': '{0} \u043C\u0435\u0441\u044F\u0446\u0435\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0435\u0441\u044F\u0446\u0430'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u043D\u0442',
                    'unitPattern-count-many': '{0} \u0444\u0443\u043D\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u043D\u0442\u0430'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u043B\u043E\u0448\u0430\u0434\u0438\u043D\u0430\u044F \u0441\u0438\u043B\u0430',
                    'unitPattern-count-many': '{0} \u043B\u043E\u0448\u0430\u0434\u0438\u043D\u044B\u0445 \u0441\u0438\u043B',
                    'unitPattern-count-other': '{0} \u043B\u043E\u0448\u0430\u0434\u0438\u043D\u044B\u0445 \u0441\u0438\u043B'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u043A\u0438\u043B\u043E\u0432\u0430\u0442\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0438\u043B\u043E\u0432\u0430\u0442\u0442',
                    'unitPattern-count-other': '{0} \u043A\u0438\u043B\u043E\u0432\u0430\u0442\u0442\u0430'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} \u0432\u0430\u0442\u0442',
                    'unitPattern-count-many': '{0} \u0432\u0430\u0442\u0442',
                    'unitPattern-count-other': '{0} \u0432\u0430\u0442\u0442\u0430'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u044C',
                    'unitPattern-count-many': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u0435\u0439',
                    'unitPattern-count-other': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u044F'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0431\u0430',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u043E\u0432 \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0431\u0430',
                    'unitPattern-count-other': '{0}\u0434\u044E\u0439\u043C\u0430 \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0431\u0430'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u043B\u0438\u0431\u0430\u0440',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u043B\u0438\u0431\u0430\u0440',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u043B\u0438\u0431\u0430\u0440\u0430'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u043B\u0438\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043B\u0438\u0442\u0440\u0430',
                    'unitPattern-count-other': '{0} \u043B\u0438\u0442\u0440\u0430'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0443\u0431\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043A\u0443\u0431\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0438\u043B\u0438',
                    'unitPattern-count-other': '{0} \u043A\u0443\u0431\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0438\u043B\u0438'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u0443\u0431\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043A\u0443\u0431\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0443\u0431\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u0433\u0440\u0430\u0434\u0443\u0441 \u043F\u043E \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0443',
                    'unitPattern-count-many': '{0}\u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0443',
                    'unitPattern-count-other': '{0}\u0433\u0440\u0430\u0434\u0443\u0441\u0430 \u043F\u043E \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0443'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u0433\u0440\u0430\u0434\u0443\u0441 \u0426\u0435\u043B\u044C\u0441\u0438\u044F',
                    'unitPattern-count-many': '{0}\u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u0426\u0435\u043B\u044C\u0441\u0438\u044F',
                    'unitPattern-count-other': '{0}\u0433\u0440\u0430\u0434\u0443\u0441\u0430 \u0426\u0435\u043B\u044C\u0441\u0438\u044F'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F \u0432 \u0447\u0430\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C \u0432 \u0447\u0430\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u044C \u0432 \u0447\u0430\u0441'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u043C\u0435\u0442\u0440 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443',
                    'unitPattern-count-many': '{0} \u043C\u0435\u0442\u0440\u043E\u0432 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443',
                    'unitPattern-count-other': '{0} \u043C\u0435\u0442\u0440\u0430 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440 \u0432 \u0447\u0430\u0441',
                    'unitPattern-count-many': '{0} \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u043E\u0432 \u0432 \u0447\u0430\u0441',
                    'unitPattern-count-other': '{0} \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u0430 \u0432 \u0447\u0430\u0441'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043D\u0443\u0442\u0430',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043D\u0443\u0442',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043D\u0443\u0442\u044B'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u0447\u0430\u0441',
                    'unitPattern-count-many': '{0} \u0447\u0430\u0441\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0447\u0430\u0441\u0430'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u0434\u0435\u043D\u044C',
                    'unitPattern-count-many': '{0} \u0434\u043D\u0435\u0439',
                    'unitPattern-count-other': '{0} \u0434\u043D\u044F'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0430\u044F \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043C\u0438\u043B\u0438'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043C\u0435\u0442\u0440\u0430'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'per': {
                    'compoundUnitPattern': '{0} \u043D\u0430 {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-many': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u043C\u0438\u043D\u0443\u0442\u0430',
                    'unitPattern-count-many': '{0}\u043C\u0438\u043D\u0443\u0442',
                    'unitPattern-count-other': '{0}\u043C\u0438\u043D\u0443\u0442\u044B'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u0441\u0435\u043A\u0443\u043D\u0434\u0430',
                    'unitPattern-count-many': '{0}\u0441\u0435\u043A\u0443\u043D\u0434',
                    'unitPattern-count-other': '{0}\u0441\u0435\u043A\u0443\u043D\u0434\u044B'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u0433\u0440\u0430\u0434\u0443\u0441',
                    'unitPattern-count-many': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0430'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u0430\u043A\u0440',
                    'unitPattern-count-many': '{0} \u0430\u043A\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0430\u043A\u0440\u0430'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u0433\u0435\u043A\u0442\u0430\u0440',
                    'unitPattern-count-many': '{0} \u0433\u0435\u043A\u0442\u0430\u0440',
                    'unitPattern-count-other': '{0} \u0433\u0435\u043A\u0442\u0430\u0440\u0430'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u0444\u0443\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u0444\u0443\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u0444\u0443\u0442\u0430'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0430',
                    'unitPattern-count-many': '{0} \u0441\u0435\u043A\u0443\u043D\u0434',
                    'unitPattern-count-other': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u044B'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-many': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u043A\u0433',
                    'unitPattern-count-many': '{0} \u043A\u0433',
                    'unitPattern-count-other': '{0} \u043A\u0433'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u0433\u0440',
                    'unitPattern-count-many': '{0} \u0433\u0440',
                    'unitPattern-count-other': '{0} \u0433\u0440'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u044F\u0440\u0434',
                    'unitPattern-count-many': '{0} \u044F\u0440\u0434\u043E\u0432',
                    'unitPattern-count-other': '{0} \u044F\u0440\u0434\u0430'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-many': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u043C\u043C',
                    'unitPattern-count-many': '{0} \u043C\u043C',
                    'unitPattern-count-other': '{0} \u043C\u043C'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0438'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u043C',
                    'unitPattern-count-many': '{0} \u043C',
                    'unitPattern-count-other': '{0} \u043C'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u0441\u0432. \u0433.',
                    'unitPattern-count-many': '{0} \u0441\u0432. \u043B.',
                    'unitPattern-count-other': '{0} \u0441\u0432. \u0433.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C',
                    'unitPattern-count-many': '{0} \u043A\u043C',
                    'unitPattern-count-other': '{0} \u043A\u043C'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u0441\u043C',
                    'unitPattern-count-many': '{0} \u0441\u043C',
                    'unitPattern-count-other': '{0} \u0441\u043C'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u0433.',
                    'unitPattern-count-many': '{0} \u043B\u0435\u0442',
                    'unitPattern-count-other': '{0} \u0433.'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u043D\u0435\u0434',
                    'unitPattern-count-many': '{0} \u043D\u0435\u0434',
                    'unitPattern-count-other': '{0} \u043D\u0435\u0434'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u043C\u0435\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0435\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0435\u0441'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-many': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u043B.\u0441.',
                    'unitPattern-count-many': '{0} \u043B.\u0441.',
                    'unitPattern-count-other': '{0} \u043B.\u0441.'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-other': '{0} \u043A\u0412\u0442'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} \u0412\u0442',
                    'unitPattern-count-many': '{0} \u0412\u0442',
                    'unitPattern-count-other': '{0} \u0412\u0442'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-many': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-other': '{0} \u0433\u041F\u0430'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C \u0440\u0442. \u0441\u0442',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u043E\u0432 \u0440\u0442. \u0441\u0442',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430 \u0440\u0442. \u0441\u0442'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u043C\u0431\u0430\u0440',
                    'unitPattern-count-many': '{0} \u043C\u0431\u0430\u0440',
                    'unitPattern-count-other': '{0} \u043C\u0431\u0430\u0440'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u043B',
                    'unitPattern-count-many': '{0} \u043B',
                    'unitPattern-count-other': '{0} \u043B'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0443\u0431. \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043A\u0443\u0431. \u043C\u0438\u043B\u0438',
                    'unitPattern-count-other': '{0} \u043A\u0443\u0431. \u043C\u0438\u043B\u0438'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-many': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0C',
                    'unitPattern-count-many': '{0} \u00B0C',
                    'unitPattern-count-other': '{0} \u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044C/\u0447\u0430\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C/\u0447\u0430\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u044C/\u0447\u0430\u0441'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u043C/\u0441',
                    'unitPattern-count-many': '{0} \u043C/\u0441',
                    'unitPattern-count-other': '{0} \u043C/\u0441'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u043A\u043C/\u0447',
                    'unitPattern-count-many': '{0} \u043A\u043C/\u0447',
                    'unitPattern-count-other': '{0} \u043A\u043C/\u0447'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043D',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043D',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043D'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u043C\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0441'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u0447',
                    'unitPattern-count-many': '{0} \u0447',
                    'unitPattern-count-other': '{0} \u0447'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u0434\u043D',
                    'unitPattern-count-many': '{0} \u0434\u043D',
                    'unitPattern-count-other': '{0} \u0434\u043D'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0432. \u043C\u0438\u043B\u044F',
                    'unitPattern-count-many': '{0} \u043A\u0432. \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043A\u0432. \u043C\u0438\u043B\u0438'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043C\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-many': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-many': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-many': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-many': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u0430\u043A\u0440',
                    'unitPattern-count-many': '{0} \u0430\u043A\u0440\u043E\u0432',
                    'unitPattern-count-other': '{0} \u0430\u043A\u0440\u0430'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u0433\u0430',
                    'unitPattern-count-many': '{0} \u0433\u0430',
                    'unitPattern-count-other': '{0} \u0433\u0430'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u043A\u0432. \u0444\u0443\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0432. \u0444\u0443\u0442\u043E\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432. \u0444\u0443\u0442\u0430'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u0441',
                    'unitPattern-count-many': '{0} \u0441',
                    'unitPattern-count-other': '{0} \u0441'
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
