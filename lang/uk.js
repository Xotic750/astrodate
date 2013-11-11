/* AstroDate
 * Language: uk
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
        AstroDate.lang('uk', {
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
                    'unitPattern-count-one': '{0} \u0443\u043D\u0446\u0456\u044F',
                    'unitPattern-count-few': '{0} \u0443\u043D\u0446\u0456\u0457',
                    'unitPattern-count-many': '{0} \u0443\u043D\u0446\u0456\u0439',
                    'unitPattern-count-other': '{0} \u0443\u043D\u0446\u0456\u0457'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u043A\u0433',
                    'unitPattern-count-few': '{0} \u043A\u0433',
                    'unitPattern-count-many': '{0} \u043A\u0433',
                    'unitPattern-count-other': '{0} \u043A\u0433'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u0433',
                    'unitPattern-count-few': '{0} \u0433',
                    'unitPattern-count-many': '{0} \u0433',
                    'unitPattern-count-other': '{0} \u0433'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u044F\u0440\u0434',
                    'unitPattern-count-few': '{0} \u044F\u0440\u0434\u0438',
                    'unitPattern-count-many': '{0} \u044F\u0440\u0434\u0456\u0432',
                    'unitPattern-count-other': '{0} \u044F\u0440\u0434\u0430'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} \u043F\u043C',
                    'unitPattern-count-few': '{0} \u043F\u043C',
                    'unitPattern-count-many': '{0} \u043F\u043C',
                    'unitPattern-count-other': '{0} \u043F\u043C'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u043C\u043C',
                    'unitPattern-count-few': '{0} \u043C\u043C',
                    'unitPattern-count-many': '{0} \u043C\u043C',
                    'unitPattern-count-other': '{0} \u043C\u043C'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u043C',
                    'unitPattern-count-few': '{0} \u043C',
                    'unitPattern-count-many': '{0} \u043C',
                    'unitPattern-count-other': '{0} \u043C'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u0441\u0432. \u0440.',
                    'unitPattern-count-few': '{0} \u0441\u0432. \u0440.',
                    'unitPattern-count-many': '{0} \u0441\u0432. \u0440.',
                    'unitPattern-count-other': '{0} \u0441\u0432. \u0440.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C',
                    'unitPattern-count-few': '{0} \u043A\u043C',
                    'unitPattern-count-many': '{0} \u043A\u043C',
                    'unitPattern-count-other': '{0} \u043A\u043C'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C',
                    'unitPattern-count-few': '{0} \u0434\u044E\u0439\u043C\u0438',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442',
                    'unitPattern-count-few': '{0} \u0444\u0443\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u0441\u043C',
                    'unitPattern-count-few': '{0} \u0441\u043C',
                    'unitPattern-count-many': '{0} \u0441\u043C',
                    'unitPattern-count-other': '{0} \u0441\u043C'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u0440.',
                    'unitPattern-count-few': '{0} \u0440.',
                    'unitPattern-count-many': '{0} \u0440.',
                    'unitPattern-count-other': '{0} \u0440.'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u0442\u0438\u0436.',
                    'unitPattern-count-few': '{0} \u0442\u0438\u0436.',
                    'unitPattern-count-many': '{0} \u0442\u0438\u0436.',
                    'unitPattern-count-other': '{0} \u0442\u0438\u0436.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u0441.',
                    'unitPattern-count-few': '{0} \u043C\u0456\u0441.',
                    'unitPattern-count-many': '{0} \u043C\u0456\u0441.',
                    'unitPattern-count-other': '{0} \u043C\u0456\u0441.'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u043D\u0442',
                    'unitPattern-count-few': '{0} \u0444\u0443\u043D\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0444\u0443\u043D\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u043D\u0442\u0430'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u043A.\u0441.',
                    'unitPattern-count-few': '{0} \u043A.\u0441.',
                    'unitPattern-count-many': '{0} \u043A.\u0441.',
                    'unitPattern-count-other': '{0} \u043A.\u0441.'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-few': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-other': '{0} \u043A\u0412\u0442'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} \u0412\u0442',
                    'unitPattern-count-few': '{0} \u0412\u0442',
                    'unitPattern-count-many': '{0} \u0412\u0442',
                    'unitPattern-count-other': '{0} \u0412\u0442'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-few': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-many': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-other': '{0} \u0433\u041F\u0430'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-few': '{0} inHg',
                    'unitPattern-count-many': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u043C\u0431\u0430\u0440',
                    'unitPattern-count-few': '{0} \u043C\u0431\u0430\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0431\u0430\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0431\u0430\u0440\u0430'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u043B',
                    'unitPattern-count-few': '{0} \u043B',
                    'unitPattern-count-many': '{0} \u043B',
                    'unitPattern-count-other': '{0} \u043B'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F\u00B3',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456\u00B3',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C\u00B3',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-few': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-few': '{0}\u00B0F',
                    'unitPattern-count-many': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-few': '{0}\u00B0',
                    'unitPattern-count-many': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F/\u0433\u043E\u0434',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456/\u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C/\u0433\u043E\u0434',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456/\u0433\u043E\u0434'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u043C/\u0441',
                    'unitPattern-count-few': '{0} \u043C/\u0441',
                    'unitPattern-count-many': '{0} \u043C/\u0441',
                    'unitPattern-count-other': '{0} \u043C/\u0441'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u043A\u043C/\u0433\u043E\u0434',
                    'unitPattern-count-few': '{0} \u043A\u043C/\u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u043A\u043C/\u0433\u043E\u0434',
                    'unitPattern-count-other': '{0} \u043A\u043C/\u0433\u043E\u0434'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u0445\u0432',
                    'unitPattern-count-few': '{0} \u0445\u0432',
                    'unitPattern-count-many': '{0} \u0445\u0432',
                    'unitPattern-count-other': '{0} \u0445\u0432'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u043C\u0441',
                    'unitPattern-count-few': '{0} \u043C\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0441'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-few': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-other': '{0} \u0433\u043E\u0434'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u0434\u043D.',
                    'unitPattern-count-few': '{0} \u0434\u043D.',
                    'unitPattern-count-many': '{0} \u0434\u043D.',
                    'unitPattern-count-other': '{0} \u0434\u043D.'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F\u00B2',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456\u00B2',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C\u00B2',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u043C\u00B2',
                    'unitPattern-count-few': '{0} \u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043C\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-few': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-many': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-few': '{0}\u2032',
                    'unitPattern-count-many': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-few': '{0}\u2033',
                    'unitPattern-count-many': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-few': '{0}\u00B0',
                    'unitPattern-count-many': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u0430\u043A\u0440',
                    'unitPattern-count-few': '{0} \u0430\u043A\u0440\u0438',
                    'unitPattern-count-many': '{0} \u0430\u043A\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0430\u043A\u0440\u0430'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u0433\u0430',
                    'unitPattern-count-few': '{0} \u0433\u0430',
                    'unitPattern-count-many': '{0} \u0433\u0430',
                    'unitPattern-count-other': '{0} \u0433\u0430'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442\u00B2',
                    'unitPattern-count-few': '{0} \u0444\u0443\u0442\u0438\u00B2',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u0456\u0432\u00B2',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u0441',
                    'unitPattern-count-few': '{0} \u0441',
                    'unitPattern-count-many': '{0} \u0441',
                    'unitPattern-count-other': '{0} \u0441'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u0441\u0435\u0440\u043F.',
                                '7': '\u043B\u0438\u043F.',
                                '6': '\u0447\u0435\u0440\u0432.',
                                '5': '\u0442\u0440\u0430\u0432.',
                                '12': '\u0433\u0440\u0443\u0434.',
                                '11': '\u043B\u0438\u0441\u0442.',
                                '10': '\u0436\u043E\u0432\u0442.',
                                '9': '\u0432\u0435\u0440.',
                                '1': '\u0441\u0456\u0447.',
                                '2': '\u043B\u044E\u0442.',
                                '3': '\u0431\u0435\u0440.',
                                '4': '\u043A\u0432\u0456\u0442.'
                            },
                            'narrow': {
                                '8': '\u0421',
                                '7': '\u041B',
                                '6': '\u0427',
                                '5': '\u0422',
                                '12': '\u0413',
                                '11': '\u041B',
                                '10': '\u0416',
                                '9': '\u0412',
                                '1': '\u0421',
                                '2': '\u041B',
                                '3': '\u0411',
                                '4': '\u041A'
                            },
                            'wide': {
                                '8': '\u0441\u0435\u0440\u043F\u043D\u044F',
                                '7': '\u043B\u0438\u043F\u043D\u044F',
                                '6': '\u0447\u0435\u0440\u0432\u043D\u044F',
                                '5': '\u0442\u0440\u0430\u0432\u043D\u044F',
                                '12': '\u0433\u0440\u0443\u0434\u043D\u044F',
                                '11': '\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430',
                                '10': '\u0436\u043E\u0432\u0442\u043D\u044F',
                                '9': '\u0432\u0435\u0440\u0435\u0441\u043D\u044F',
                                '1': '\u0441\u0456\u0447\u043D\u044F',
                                '2': '\u043B\u044E\u0442\u043E\u0433\u043E',
                                '3': '\u0431\u0435\u0440\u0435\u0437\u043D\u044F',
                                '4': '\u043A\u0432\u0456\u0442\u043D\u044F'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u0421\u0435\u0440',
                                '7': '\u041B\u0438\u043F',
                                '6': '\u0427\u0435\u0440',
                                '5': '\u0422\u0440\u0430',
                                '12': '\u0413\u0440\u0443',
                                '11': '\u041B\u0438\u0441',
                                '10': '\u0416\u043E\u0432',
                                '9': '\u0412\u0435\u0440',
                                '1': '\u0421\u0456\u0447',
                                '2': '\u041B\u044E\u0442',
                                '3': '\u0411\u0435\u0440',
                                '4': '\u041A\u0432\u0456'
                            },
                            'narrow': {
                                '8': '\u0421',
                                '7': '\u041B',
                                '6': '\u0427',
                                '5': '\u0422',
                                '12': '\u0413',
                                '11': '\u041B',
                                '10': '\u0416',
                                '9': '\u0412',
                                '1': '\u0421',
                                '2': '\u041B',
                                '3': '\u0411',
                                '4': '\u041A'
                            },
                            'wide': {
                                '8': '\u0421\u0435\u0440\u043F\u0435\u043D\u044C',
                                '7': '\u041B\u0438\u043F\u0435\u043D\u044C',
                                '6': '\u0427\u0435\u0440\u0432\u0435\u043D\u044C',
                                '5': '\u0422\u0440\u0430\u0432\u0435\u043D\u044C',
                                '12': '\u0413\u0440\u0443\u0434\u0435\u043D\u044C',
                                '11': '\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434',
                                '10': '\u0416\u043E\u0432\u0442\u0435\u043D\u044C',
                                '9': '\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C',
                                '1': '\u0421\u0456\u0447\u0435\u043D\u044C',
                                '2': '\u041B\u044E\u0442\u0438\u0439',
                                '3': '\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C',
                                '4': '\u041A\u0432\u0456\u0442\u0435\u043D\u044C'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u041D\u0434',
                                'mon': '\u041F\u043D',
                                'tue': '\u0412\u0442',
                                'wed': '\u0421\u0440',
                                'thu': '\u0427\u0442',
                                'fri': '\u041F\u0442',
                                'sat': '\u0421\u0431'
                            },
                            'narrow': {
                                'sun': '\u041D',
                                'mon': '\u041F',
                                'tue': '\u0412',
                                'wed': '\u0421',
                                'thu': '\u0427',
                                'fri': '\u041F',
                                'sat': '\u0421'
                            },
                            'short': {
                                'sun': '\u041D\u0434',
                                'mon': '\u041F\u043D',
                                'tue': '\u0412\u0442',
                                'wed': '\u0421\u0440',
                                'thu': '\u0427\u0442',
                                'fri': '\u041F\u0442',
                                'sat': '\u0421\u0431'
                            },
                            'wide': {
                                'sun': '\u043D\u0435\u0434\u0456\u043B\u044F',
                                'mon': '\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
                                'tue': '\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
                                'wed': '\u0441\u0435\u0440\u0435\u0434\u0430',
                                'thu': '\u0447\u0435\u0442\u0432\u0435\u0440',
                                'fri': '\u043F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F',
                                'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u041D\u0434',
                                'mon': '\u041F\u043D',
                                'tue': '\u0412\u0442',
                                'wed': '\u0421\u0440',
                                'thu': '\u0427\u0442',
                                'fri': '\u041F\u0442',
                                'sat': '\u0421\u0431'
                            },
                            'narrow': {
                                'sun': '\u041D',
                                'mon': '\u041F',
                                'tue': '\u0412',
                                'wed': '\u0421',
                                'thu': '\u0427',
                                'fri': '\u041F',
                                'sat': '\u0421'
                            },
                            'short': {
                                'sun': '\u041D\u0434',
                                'mon': '\u041F\u043D',
                                'tue': '\u0412\u0442',
                                'wed': '\u0421\u0440',
                                'thu': '\u0427\u0442',
                                'fri': '\u041F\u0442',
                                'sat': '\u0421\u0431'
                            },
                            'wide': {
                                'sun': '\u041D\u0435\u0434\u0456\u043B\u044F',
                                'mon': '\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
                                'tue': '\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
                                'wed': '\u0421\u0435\u0440\u0435\u0434\u0430',
                                'thu': '\u0427\u0435\u0442\u0432\u0435\u0440',
                                'fri': '\u041F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F',
                                'sat': '\u0421\u0443\u0431\u043E\u0442\u0430'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'I \u043A\u0432.',
                                '2': 'II \u043A\u0432.',
                                '3': 'III \u043A\u0432.',
                                '4': 'IV \u043A\u0432.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'I \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '2': 'II \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '3': 'III \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                '4': 'IV \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
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
                                'afternoon': '\u0434\u043D\u044F',
                                'am': '\u0434\u043F',
                                'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                'morning': '\u0440\u0430\u043D\u043A\u0443',
                                'night': '\u043D\u043E\u0447\u0456',
                                'pm': '\u043F\u043F'
                            },
                            'narrow': {
                                'afternoon': '\u0434\u043D\u044F',
                                'am': '\u0434\u043F',
                                'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                'morning': '\u0440\u0430\u043D\u043A\u0443',
                                'night': '\u043D\u043E\u0447\u0456',
                                'pm': '\u043F\u043F'
                            },
                            'wide': {
                                'afternoon': '\u0434\u043D\u044F',
                                'am': '\u0434\u043F',
                                'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                'morning': '\u0440\u0430\u043D\u043A\u0443',
                                'night': '\u043D\u043E\u0447\u0456',
                                'pm': '\u043F\u043F'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'afternoon': '\u0434\u043D\u044F',
                                'am': '\u0434\u043F',
                                'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                'morning': '\u0440\u0430\u043D\u043A\u0443',
                                'night': '\u043D\u043E\u0447\u0456',
                                'pm': '\u043F\u043F'
                            },
                            'narrow': {
                                'afternoon': '\u0434\u043D\u044F',
                                'am': '\u0434\u043F',
                                'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                'morning': '\u0440\u0430\u043D\u043A\u0443',
                                'night': '\u043D\u043E\u0447\u0456',
                                'pm': '\u043F\u043F'
                            },
                            'wide': {
                                'afternoon': '\u0434\u043D\u044F',
                                'am': '\u0434\u043F',
                                'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                'morning': '\u0440\u0430\u043D\u043A\u0443',
                                'night': '\u043D\u043E\u0447\u0456',
                                'pm': '\u043F\u043F'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u0434\u043E \u043D.\u0435.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D.\u0435.',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '\u0434\u043E \u043D.\u0435.',
                            '0-alt-variant': 'BCE',
                            '1': '\u043D.\u0435.',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y \'\u0440\'.',
                        'long': 'd MMMM y \'\u0440\'.',
                        'medium': 'd MMM y',
                        'short': 'dd.MM.yy'
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
                            'yMMM': 'LLL y',
                            'yMEd': 'E, dd.MM.y',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM.y',
                            'y': 'y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E, d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'HHmm': 'HH:mm',
                            'yQQQQ': 'QQQQ y \'\u0440\'.',
                            'yQQQ': 'QQQ y',
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
                            'Md': 'dd.MM',
                            'MEd': 'E, dd.MM',
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
                                'd': 'E, d \u2013 E, d MMM',
                                'M': 'E, d MMM \u2013 E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd\u2013d MMM',
                                'M': 'd MMM \u2013 d MMM'
                            },
                            'MMM': {
                                'M': 'LLL\u2013LLL'
                            },
                            'MEd': {
                                'd': 'E, dd.MM \u2013 E, dd.MM',
                                'M': 'E, dd.MM \u2013 E, dd.MM'
                            },
                            'Md': {
                                'd': 'dd.MM \u2013 dd.MM',
                                'M': 'dd.MM \u2013 dd.MM'
                            },
                            'M': {
                                'M': 'M\u2013M'
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
                                'M': 'MM.y \u2013 MM.y',
                                'y': 'MM.y \u2013 MM.y'
                            },
                            'yMd': {
                                'd': 'dd.MM.y \u2013 dd.MM.y',
                                'M': 'dd.MM.y \u2013 dd.MM.y',
                                'y': 'dd.MM.y \u2013 dd.MM.y'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y \u2013 E, dd.MM.y',
                                'M': 'E, dd.MM.y \u2013 E, dd.MM.y',
                                'y': 'E, dd.MM.y \u2013 E, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'LLL\u2013LLL y',
                                'y': 'LLL y \u2013 LLL y'
                            },
                            'yMMMd': {
                                'd': 'd\u2013d MMM y',
                                'M': 'd MMM \u2013 d MMM y',
                                'y': 'd MMM y \u2013 d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d \u2013 E, d MMM y',
                                'M': 'E, d MMM \u2013 E, d MMM y',
                                'y': 'E, d MMM y \u2013 E, d MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL \u2013 LLLL y',
                                'y': 'LLLL y \u2013 LLLL y'
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
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u041C\u043E\u0440\u0441\u0431\u0456'
                        },
                        'Ponape': {
                            'exemplarCity': '\u041F\u043E\u043D\u0430\u043F\u0435'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u041F\u0456\u0442\u043A\u0435\u0440\u043D'
                        },
                        'Palau': {
                            'exemplarCity': '\u041F\u0430\u043B\u0430\u0443'
                        },
                        'Auckland': {
                            'exemplarCity': '\u041E\u043A\u043B\u0435\u043D\u0434'
                        },
                        'Apia': {
                            'exemplarCity': '\u0410\u043F\u0456\u0430'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u0424\u0443\u043D\u0430\u0444\u0443\u0442\u0456'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u0413\u0430\u043B\u0430\u043F\u0430\u0433\u043E\u0441\u044C\u043A\u0456 \u043E\u0441\u0442\u0440\u043E\u0432\u0438 (\u0415\u043A\u0432\u0430\u0434\u043E\u0440)'
                        },
                        'Gambier': {
                            'exemplarCity': '\u0413\u0430\u043C\u0431\u0435\u0440'
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
                            'exemplarCity': '\u0423\u043E\u043B\u043B\u0456\u0441'
                        },
                        'Wake': {
                            'exemplarCity': '\u0412\u0435\u0439\u043A'
                        },
                        'Truk': {
                            'exemplarCity': '\u0422\u0440\u0443\u043A'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u0422\u043E\u043D\u0433\u0430\u0442\u0430\u043F\u0443'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u0422\u0430\u0440\u0430\u0432\u0430'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u0422\u0430\u0457\u0442\u0456'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u041A\u0456\u0440\u0456\u0442\u0456\u043C\u0430\u0442\u0456'
                        },
                        'Johnston': {
                            'exemplarCity': '\u0414\u0436\u043E\u043D\u0441\u0442\u043E\u043D'
                        },
                        'Chatham': {
                            'exemplarCity': '\u0427\u0430\u0442\u0435\u043C'
                        },
                        'Easter': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0456\u0432 \u041F\u0430\u0441\u0445\u0438'
                        },
                        'Efate': {
                            'exemplarCity': '\u0415\u0444\u0430\u0442\u0435'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u0415\u043D\u0434\u0435\u0440\u0431\u0435\u0440\u0456'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u0424\u0430\u043A\u0430\u043E\u0444\u043E'
                        },
                        'Fiji': {
                            'exemplarCity': '\u0424\u0456\u0434\u0436\u0438'
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
                            'exemplarCity': '\u041C\u0430\u0440\u043A\u0438\u0437\u044C\u043A\u0456 \u043E-\u0432\u0438'
                        },
                        'Midway': {
                            'exemplarCity': '\u041C\u0456\u0434\u0443\u0435\u0439'
                        },
                        'Nauru': {
                            'exemplarCity': '\u041D\u0430\u0443\u0440\u0443'
                        },
                        'Niue': {
                            'exemplarCity': '\u041D\u0456\u0443\u0435'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u041D\u043E\u0440\u0444\u043E\u043B\u043A'
                        },
                        'Noumea': {
                            'exemplarCity': '\u041D\u0443\u043C\u0435\u0430'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u041F\u0430\u0433\u043E \u041F\u0430\u0433\u043E'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u041B\u0456\u043D\u0434\u0435\u043C\u0430\u043D'
                        },
                        'Hobart': {
                            'exemplarCity': '\u0425\u043E\u0431\u0430\u0440\u0442'
                        },
                        'Eucla': {
                            'exemplarCity': '\u0415\u0432\u043A\u043B\u0430'
                        },
                        'Darwin': {
                            'exemplarCity': '\u0414\u0430\u0440\u0432\u0456\u043D'
                        },
                        'Sydney': {
                            'exemplarCity': '\u0421\u0456\u0434\u043D\u0435\u0439'
                        },
                        'Perth': {
                            'exemplarCity': '\u041F\u0435\u0440\u0442'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u041C\u0435\u043B\u044C\u0431\u0443\u0440\u043D'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u041B\u043E\u0440\u0434-\u0425\u0430\u0443'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u0410\u0434\u0435\u043B\u0430\u0457\u0434\u0430'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u0411\u0440\u0438\u0441\u0431\u0435\u043D'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u0411\u0440\u043E\u043A\u0435\u043D-\u0413\u0456\u043B'
                        },
                        'Currie': {
                            'exemplarCity': '\u041A\u0430\u0440\u0440\u0456'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u041C\u0430\u043B\u044C\u0434\u0456\u0432\u0438'
                        },
                        'Mahe': {
                            'exemplarCity': '\u041C\u0430\u0445\u0435'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0456\u0432 \u041A\u0435\u0440\u0433\u0435\u043B\u0435\u043D'
                        },
                        'Reunion': {
                            'exemplarCity': '\u0420\u0435\u044E\u043D\u044C\u0439\u043E\u043D'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u041C\u0430\u0439\u043E\u0440\u043A\u0430'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u041C\u0430\u0432\u0440\u0438\u043A\u0456\u0439'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u0410\u043D\u0442\u0430\u043D\u0430\u043D\u0430\u0440\u0456\u0432\u0443'
                        },
                        'Chagos': {
                            'exemplarCity': '\u0427\u0430\u0433\u043E\u0441'
                        },
                        'Christmas': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0456\u0432 \u0420\u0456\u0437\u0434\u0432\u0430'
                        },
                        'Cocos': {
                            'exemplarCity': '\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u0456 \u043E\u0441\u0442\u0440\u043E\u0432\u0438'
                        },
                        'Comoro': {
                            'exemplarCity': '\u041A\u043E\u043C\u043E\u0440\u043E'
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
                            'exemplarCity': '\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0435 \u043C\u0456\u0441\u0442\u043E'
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
                            'exemplarCity': '\u0421\u044C\u043E\u0432\u0430'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0438\u0439 \u043F\u043E\u043B\u044E\u0441'
                        },
                        'Casey': {
                            'exemplarCity': '\u041A\u0435\u0439\u0441\u0456'
                        },
                        'Davis': {
                            'exemplarCity': '\u0414\u0435\u0432\u0456\u0441'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u0414\u044E\u043C\u043E\u043D-\u0434\'\u042E\u0440\u0432\u0456\u043B\u044C'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u041C\u0430\u043A\u043A\u0443\u043E\u0440\u0456'
                        },
                        'Mawson': {
                            'exemplarCity': '\u041C\u043E\u0443\u0441\u043E\u043D'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u041B\u043E\u043D\u0433\u0435\u0440\u0431\u044E\u0439\u043D'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u0422\u043E\u0440\u043E\u043D\u0442\u043E'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u0422\u0456\u0445\u0443\u0430\u043D\u0430'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u0422\u0430\u043D\u0434\u0435\u0440-\u0411\u0435\u0439'
                        },
                        'Thule': {
                            'exemplarCity': '\u0422\u0443\u043B\u0435'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u0422\u0435\u0433\u0443\u0441\u0456\u0433\u0430\u043B\u044C\u043F\u0430'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u0421\u0432\u0456\u0444\u0442-\u041A\u0430\u0440\u0440\u0435\u043D\u0442'
                        },
                        'Chicago': {
                            'exemplarCity': '\u0427\u0438\u043A\u0430\u0433\u043E'
                        },
                        'Cayman': {
                            'exemplarCity': '\u041A\u0430\u0439\u043C\u0430\u043D\u043E\u0432\u0456 \u043E\u0441\u0442\u0440\u043E\u0432\u0438'
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
                            'exemplarCity': '\u041A\u0430\u043C\u043F\u0443-\u0413\u0440\u0430\u043D\u0434\u0456'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u041A\u0435\u043C\u0431\u0440\u0438\u0434\u0436-\u0411\u0435\u0439'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u0411\u0443\u0435\u043D\u043E\u0441-\u0410\u0439\u0440\u0435\u0441'
                        },
                        'Boise': {
                            'exemplarCity': '\u0411\u043E\u0439\u0441\u0435'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u0410\u0441\u0443\u043D\u0441\u044C\u0439\u043E\u043D'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0410\u0440\u0443\u0431\u0430'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u0420\u0456\u043E-\u0490\u0430\u043B\u0435\u0491\u043E\u0441'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u0421\u0430\u043D-\u0425\u0443\u0430\u043D'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u0423\u0448\u0443\u0430\u044F'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u041B\u0430-\u0420\u0456\u043E\u0445\u0430'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u0421\u0430\u043D-\u041B\u0443\u0457\u0441'
                            },
                            'Salta': {
                                'exemplarCity': '\u0421\u0430\u043B\u044C\u0442\u0430'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u0422\u0443\u043A\u0443\u043C\u0430\u043D'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0410\u0440\u0430\u0433\u0443\u0430\u0439\u043D\u0430'
                        },
                        'Antigua': {
                            'exemplarCity': '\u0410\u043D\u0442\u0438\u0433\u0443\u0430'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u0410\u043D\u0433\u0456\u043B\u044C\u044F'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u0410\u043D\u043A\u043E\u0440\u0438\u0434\u0436'
                        },
                        'Adak': {
                            'exemplarCity': '\u0410\u0434\u0430\u043A'
                        },
                        'Bahia': {
                            'exemplarCity': '\u0411\u0430\u0439\u044F'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u0411\u0430\u0457\u044F \u0411\u0430\u043D\u0434\u0435\u0440\u0430\u0441'
                        },
                        'Barbados': {
                            'exemplarCity': '\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441'
                        },
                        'Belem': {
                            'exemplarCity': '\u0411\u0435\u043B\u0435\u043D'
                        },
                        'Belize': {
                            'exemplarCity': '\u0411\u0435\u043B\u0456\u0437'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u0411\u043B\u0430\u043D\u043A-\u0421\u0430\u0431\u043B\u043E\u043D'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u0411\u043E\u0430-\u0412\u0456\u0441\u0442\u0430'
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
                            'exemplarCity': '\u0414\u043E\u0443\u0441\u043E\u043D-\u041A\u0440\u0456\u043A'
                        },
                        'Denver': {
                            'exemplarCity': '\u0414\u0435\u043D\u0432\u0435\u0440'
                        },
                        'Detroit': {
                            'exemplarCity': '\u0414\u0435\u0442\u0440\u043E\u0439\u0442'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u0415\u0440\u043C\u043E\u0441\u0456\u043B\u044C\u0439\u043E'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0412\u0456\u043D\u0441\u0435\u043D\u0441'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u0422\u0435\u043B\u043B-\u0441\u0456\u0442\u0456'
                            },
                            'Knox': {
                                'exemplarCity': '\u041D\u043E\u043A\u0441'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0412\u0456\u043D\u0430\u043C\u0430\u043A'
                            },
                            'Marengo': {
                                'exemplarCity': '\u041C\u0430\u0440\u0435\u043D\u0433\u043E'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0412\u0456\u0432\u0435\u0439'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0406\u043D\u0434\u0456\u0430\u043D\u0430\u043F\u043E\u043B\u0456\u0441'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0406\u043D\u0443\u0432\u0456\u043A'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0406\u043A\u0430\u043B\u0443\u0456\u0442'
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
                            'exemplarCity': '\u0404\u043B\u043B\u043E\u0443\u043D\u0430\u0439\u0444'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u042F\u043A\u0443\u0442\u0430\u0442'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0412\u0456\u043D\u043D\u0456\u043F\u0435\u0491'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0412\u0430\u0439\u0442\u0433\u043E\u0440\u0441'
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
                                'exemplarCity': '\u041C\u043E\u043D\u0442\u0438\u0447\u0435\u043B\u043B\u043E'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0413\u0430\u0432\u0430\u043D\u0430'
                        },
                        'Halifax': {
                            'exemplarCity': '\u0413\u0430\u043B\u0456\u0444\u0430\u043A\u0441'
                        },
                        'Guyana': {
                            'exemplarCity': '\u0413\u0430\u0439\u0430\u043D\u0430'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u0413\u0443\u0430\u044F\u043A\u0456\u043B\u044C'
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
                            'exemplarCity': '\u0413\u0440\u0430\u043D\u0434-\u0422\u0435\u0440\u043A'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u0413\u0443\u0437-\u0411\u0435\u0439'
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
                            'exemplarCity': '\u0415\u0439\u0440\u0443\u043D\u0435\u043F\u0435'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u0415\u0434\u043C\u043E\u043D\u0442\u043E\u043D'
                        },
                        'Dominica': {
                            'exemplarCity': '\u0414\u043E\u043C\u0456\u043D\u0456\u043A\u0430'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u0427\u0456\u0443\u0430\u0443\u0430'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u041A\u043E\u0440\u0430\u043B-\u0425\u0430\u0440\u0431\u043E\u0440'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u041A\u043E\u0440\u0434\u043E\u0431\u0430'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u041A\u043E\u0441\u0442\u0430 \u0420\u0456\u043A\u0430'
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
                            'exemplarCity': '\u041B\u0456\u043C\u0430'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441'
                        },
                        'Louisville': {
                            'exemplarCity': '\u041B\u0443\u0457\u0441\u0432\u0456\u043B\u043B\u044C'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u041B\u043E\u0443\u0435\u0440-\u041F\u0440\u0438\u043D\u0441\u0435\u0441-\u041A\u0432\u043E\u0442\u0435\u0440'
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
                            'exemplarCity': '\u041C\u0430\u0440\u0456\u0433\u043E\u0442'
                        },
                        'Martinique': {
                            'exemplarCity': '\u041C\u0430\u0440\u0442\u0456\u043D\u0456\u043A\u0430'
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
                            'exemplarCity': '\u041C\u0435\u043D\u043E\u043C\u0456\u043D\u0456'
                        },
                        'Merida': {
                            'exemplarCity': '\u041C\u0435\u0440\u0456\u0434\u0430'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u041C\u0435\u0442\u043B\u0430\u043A\u0430\u0442\u043B\u0430'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u041C\u0435\u0445\u0456\u043A\u043E'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u041C\u0456\u043A\u0435\u043B\u043E\u043D'
                        },
                        'Moncton': {
                            'exemplarCity': '\u041C\u043E\u043D\u043A\u0442\u043E\u043D'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0435\u0440\u0435\u0439'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u041C\u043E\u043D\u0442\u0435\u0432\u0456\u0434\u0435\u043E'
                        },
                        'Montreal': {
                            'exemplarCity': '\u041C\u043E\u043D\u0440\u0435\u0430\u043B\u044C'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u041C\u043E\u043D\u0441\u0435\u0440\u0430\u0442'
                        },
                        'Nassau': {
                            'exemplarCity': '\u041D\u0430\u0441\u0430\u0443'
                        },
                        'New_York': {
                            'exemplarCity': '\u041D\u044C\u044E-\u0419\u043E\u0440\u043A'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u041D\u0456\u043F\u0456\u0433\u043E\u043D'
                        },
                        'Nome': {
                            'exemplarCity': '\u041D\u043E\u043C'
                        },
                        'Noronha': {
                            'exemplarCity': '\u041D\u043E\u0440\u043E\u043D\u044C\u044F'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u0411\u2019\u044E\u043B\u0430, \u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0430 \u0414\u0430\u043A\u043E\u0442\u0430'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u041D\u044C\u044E-\u0421\u0430\u043B\u0435\u043C'
                            },
                            'Center': {
                                'exemplarCity': '\u0426\u0435\u043D\u0442\u0440'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u041E\u0445\u0456\u043D\u0430\u0433\u0430'
                        },
                        'Panama': {
                            'exemplarCity': '\u041F\u0430\u043D\u0430\u043C\u0430'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u041F\u0430\u043D\u0491\u043D\u0456\u0440\u0442\u0443\u043D\u0491'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u041F\u0430\u0440\u0430\u043C\u0430\u0440\u0456\u0431\u043E'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u0424\u0456\u043D\u0456\u043A\u0441'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u043E-\u041F\u0440\u0435\u043D\u0441'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442-\u043E\u0444-\u0421\u043F\u0435\u0439\u043D'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u041F\u043E\u0440\u0442\u043E-\u0412\u0435\u043B\u044C\u044E'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u041F\u0443\u0435\u0440\u0442\u043E \u0420\u0456\u043A\u043E'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u0420\u0435\u0439\u043D\u0456-\u0420\u0456\u0432\u0435\u0440'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u0420\u0435\u043D\u043A\u0456\u043D-\u0406\u043D\u043B\u0435\u0442'
                        },
                        'Recife': {
                            'exemplarCity': '\u0420\u0435\u0441\u0456\u0444\u0456'
                        },
                        'Regina': {
                            'exemplarCity': '\u0420\u0435\u0434\u0436\u0430\u0439\u043D\u0430'
                        },
                        'Resolute': {
                            'exemplarCity': '\u0420\u0435\u0437\u043E\u043B\u044E\u0442'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u0420\u0456\u043E-\u0411\u0440\u0430\u043D\u043A\u043E'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0430-\u0406\u0441\u0430\u0431\u0435\u043B\u044C'
                        },
                        'Santarem': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u0430\u0440\u0435\u043D'
                        },
                        'Santiago': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u044C\u044F\u0433\u043E'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0421\u0430\u043D\u0442\u043E-\u0414\u043E\u043C\u0456\u043D\u0433\u043E'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u0421\u0430\u043D-\u041F\u0430\u0443\u043B\u0443'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u0421\u043A\u043E\u0440\u0441\u0431\u0438\u0441\u0443\u043D'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u0428\u0438\u043F\u0440\u043E\u043A'
                        },
                        'Sitka': {
                            'exemplarCity': '\u0421\u0456\u0442\u043A\u0430'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0421\u0435\u043D-\u0411\u0430\u0440\u0442\u0435\u043B\u044C\u043C\u0456'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u0414\u0436\u043E\u043D\u0441'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u041A\u0456\u0442\u0441 \u0456 \u041D\u0435\u0432\u0456\u0441'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u041B\u0443\u0441\u0456\u044F'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u0422\u043E\u043C\u0430\u0441'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0421\u0435\u043D\u0442-\u0412\u0456\u043D\u0441\u0435\u043D\u0442'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0430 \u0414\u0436\u043E\u0440\u0434\u0436\u0456\u044F'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u0420\u0435\u0439\u043A\'\u044F\u0432\u0456\u043A'
                        },
                        'Stanley': {
                            'exemplarCity': '\u0421\u0442\u0435\u043D\u043B\u0456'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0456\u0432 \u0421\u0432\u044F\u0442\u043E\u0457 \u0404\u043B\u0435\u043D\u0438'
                        },
                        'Azores': {
                            'exemplarCity': '\u0410\u0437\u043E\u0440\u0441\u044C\u043A\u0456 \u043E\u0441\u0442\u0440\u043E\u0432\u0438'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u0411\u0435\u0440\u043C\u0443\u0434\u0438'
                        },
                        'Canary': {
                            'exemplarCity': '\u041A\u0430\u043D\u0430\u0440\u0438'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u0424\u0430\u0440\u0435\u0440\u0441\u044C\u043A\u0456 \u043E\u0441\u0442\u0440\u043E\u0432\u0438'
                        },
                        'Madeira': {
                            'exemplarCity': '\u041C\u0430\u0434\u0435\u0439\u0440\u0430'
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
                            'exemplarCity': '\u041C\u0456\u043D\u0441\u044C\u043A'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u041C\u0430\u0440\u0456\u0435\u0433\u0430\u043C\u043D'
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
                                'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0456\u0457'
                            },
                            'exemplarCity': '\u041B\u043E\u043D\u0434\u043E\u043D'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u041B\u044E\u0431\u043B\u044F\u043D\u0430'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u041B\u0456\u0441\u0430\u0431\u043E\u043D'
                        },
                        'Kiev': {
                            'exemplarCity': '\u041A\u0438\u0457\u0432'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u041A\u0430\u043B\u0456\u043D\u0456\u043D\u0433\u0440\u0430\u0434'
                        },
                        'Jersey': {
                            'exemplarCity': '\u0414\u0436\u0435\u0440\u0441\u0456'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u0421\u0442\u0430\u043C\u0431\u0443\u043B'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0456\u0432 \u041C\u0435\u043D'
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
                            'exemplarCity': '\u0411\u0435\u0440\u043B\u0456\u043D'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u0411\u0435\u043B\u0433\u0440\u0430\u0434'
                        },
                        'Athens': {
                            'exemplarCity': '\u0410\u0444\u0456\u043D\u0438'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0410\u043D\u0434\u043E\u0440\u0430'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u0421\u0456\u043C\u0444\u0435\u0440\u043E\u043F\u043E\u043B\u044C'
                        },
                        'Skopje': {
                            'exemplarCity': '\u0421\u043A\u043E\u043F\u2019\u0454'
                        },
                        'Sofia': {
                            'exemplarCity': '\u0421\u043E\u0444\u0456\u044F'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u0421\u0442\u043E\u043A\u0433\u043E\u043B\u044C\u043C'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u0422\u0430\u043B\u043B\u0456\u043D'
                        },
                        'Tirane': {
                            'exemplarCity': '\u0422\u0456\u0440\u0430\u043D\u0430'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u0423\u0436\u0433\u043E\u0440\u043E\u0434'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0412\u0430\u0434\u0443\u0446'
                        },
                        'Zurich': {
                            'exemplarCity': '\u0426\u044E\u0440\u0456\u0445'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F'
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
                            'exemplarCity': '\u0412\u0456\u043B\u044C\u043D\u044E\u0441'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0412\u0456\u0434\u0435\u043D\u044C'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0412\u0430\u0442\u0438\u043A\u0430\u043D'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u0421\u0430\u0440\u0430\u0454\u0432\u043E'
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
                            'exemplarCity': '\u041F\u043E\u0434\u0433\u043E\u0440\u0438\u0446\u044F'
                        },
                        'Paris': {
                            'exemplarCity': '\u041F\u0430\u0440\u0438\u0436'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0413\u0435\u043B\u044C\u0441\u0456\u043D\u043A\u0456'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u041E\u0441\u0442\u0440\u0456\u0432 \u0413\u0435\u0440\u043D\u0441\u0456'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u0413\u0456\u0431\u0440\u0430\u043B\u0442\u0430\u0440'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0432 \u0406\u0440\u043B\u0430\u043D\u0434\u0456\u0457'
                            },
                            'exemplarCity': '\u0414\u0443\u0431\u043B\u0456\u043D'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u041A\u043E\u043F\u0435\u043D\u0433\u0430\u0433\u0435\u043D'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u041A\u0438\u0448\u0438\u043D\u0456\u0432'
                        },
                        'Busingen': {
                            'exemplarCity': '\u0411\u044E\u0437\u0456\u043D\u0433\u0435\u043D'
                        },
                        'Budapest': {
                            'exemplarCity': '\u0411\u0443\u0434\u0430\u043F\u0435\u0448\u0442'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u041B\u0456\u0431\u0440\u0435\u0432\u0456\u043B\u044C'
                        },
                        'Lagos': {
                            'exemplarCity': '\u041B\u0430\u0433\u043E\u0441'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u041A\u0456\u043D\u0448\u0430\u0441\u0430'
                        },
                        'Kigali': {
                            'exemplarCity': '\u041A\u0456\u0433\u0430\u043B\u0456'
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
                            'exemplarCity': '\u0419\u043E\u0433\u0430\u043D\u043D\u0435\u0441\u0431\u0443\u0440\u0433'
                        },
                        'Harare': {
                            'exemplarCity': '\u0425\u0430\u0440\u0430\u0440\u0435'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u0413\u0430\u0431\u043E\u0440\u043E\u043D\u0435'
                        },
                        'Freetown': {
                            'exemplarCity': '\u0424\u0440\u0456\u0442\u0430\u0443\u043D'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u0415\u043B\u044C-\u0410\u044E\u043D'
                        },
                        'Douala': {
                            'exemplarCity': '\u0414\u0443\u0430\u043B\u0430'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u0414\u0436\u0438\u0431\u0443\u0442\u0456'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u0414\u0430\u0440-\u0435\u0441-\u0421\u0430\u043B\u0430\u0430\u043C'
                        },
                        'Dakar': {
                            'exemplarCity': '\u0414\u0430\u043A\u0430\u0440'
                        },
                        'Banjul': {
                            'exemplarCity': '\u0411\u0430\u043D\u0436\u0443\u043B'
                        },
                        'Bangui': {
                            'exemplarCity': '\u0411\u0430\u043D\u0433\u0456'
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
                            'exemplarCity': '\u041C\u043E\u0433\u0430\u0434\u0456\u0448\u043E'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u041C\u043E\u043D\u0440\u043E\u0432\u0456\u044F'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u041D\u0430\u0439\u0440\u043E\u0431\u0456'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u041D\u0434\u0436\u0430\u043C\u0435\u043D\u0430'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0412\u0456\u043D\u0434\u0445\u0443\u043A'
                        },
                        'Tunis': {
                            'exemplarCity': '\u043C. \u0422\u0443\u043D\u0456\u0441'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u0422\u0440\u0456\u043F\u043E\u043B\u0456'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u0421\u0430\u043D-\u0422\u043E\u043C\u0435 \u0456 \u041F\u0440\u0438\u043D\u0441\u0456\u043F\u0456'
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
                            'exemplarCity': '\u041D\u0456\u0430\u043C\u0435\u0439'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u041B\u0443\u0441\u0430\u043A\u0430'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u041B\u0443\u0431\u0443\u043C\u0431\u0430\u0448\u0456'
                        },
                        'Luanda': {
                            'exemplarCity': '\u041B\u0443\u0430\u043D\u0434\u0430'
                        },
                        'Lome': {
                            'exemplarCity': '\u041B\u043E\u043C\u0435'
                        },
                        'Conakry': {
                            'exemplarCity': '\u041A\u043E\u043D\u0430\u043A\u0440\u0456'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u0421\u0435\u0443\u0442\u0430'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u041A\u0430\u0441\u0430\u0431\u043B\u0430\u043D\u043A\u0430'
                        },
                        'Cairo': {
                            'exemplarCity': '\u041A\u0430\u0457\u0440'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u0411\u0443\u0436\u0443\u043C\u0431\u0443\u0440\u0430'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0456\u043B\u044C'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u0411\u043B\u0430\u043D\u0442\u0438\u0440'
                        },
                        'Bissau': {
                            'exemplarCity': '\u0411\u0456\u0441\u0430\u0443'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0410\u0431\u0456\u0434\u0436\u0430\u043D'
                        },
                        'Accra': {
                            'exemplarCity': '\u0410\u043A\u043A\u0440\u0430'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0410\u0434\u0434\u0438\u0441-\u0410\u0431\u0435\u0431\u0430'
                        },
                        'Algiers': {
                            'exemplarCity': '\u043C. \u0410\u043B\u0436\u0438\u0440'
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
                            'exemplarCity': '\u0421\u0430\u0445\u0430\u043B\u0456\u043D'
                        },
                        'Saigon': {
                            'exemplarCity': '\u0425\u043E\u0448\u0438\u043C\u0456\u043D'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u0415\u0440-\u0420\u0456\u044F\u0434'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u0420\u0430\u043D\u0433\u0443\u043D'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u041A\u0437\u0438\u043B-\u041E\u0440\u0434\u0430'
                        },
                        'Qatar': {
                            'exemplarCity': '\u041A\u0430\u0442\u0430\u0440'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u041F\u0445\u0435\u043D\u044C\u044F\u043D'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u041F\u043E\u043D\u0442\u0456\u0430\u043D\u0430\u043A'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u041F\u043D\u043E\u043C\u043F\u0435\u043D\u044C'
                        },
                        'Oral': {
                            'exemplarCity': '\u041E\u0440\u0430\u043B'
                        },
                        'Omsk': {
                            'exemplarCity': '\u041E\u043C\u0441\u044C\u043A'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0456\u0440\u0441\u044C\u043A'
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
                            'exemplarCity': '\u0414\u0430\u043A\u0430'
                        },
                        'Dili': {
                            'exemplarCity': '\u0414\u0456\u043B\u0456'
                        },
                        'Dubai': {
                            'exemplarCity': '\u0414\u0443\u0431\u0430\u0457'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u0414\u0443\u0448\u0430\u043D\u0431\u0435'
                        },
                        'Gaza': {
                            'exemplarCity': '\u0413\u0430\u0437\u0430'
                        },
                        'Harbin': {
                            'exemplarCity': '\u0425\u0430\u0440\u0431\u0456\u043D'
                        },
                        'Hebron': {
                            'exemplarCity': '\u0425\u0435\u0432\u0440\u043E\u043D'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u0413\u043E\u043D\u043A\u043E\u043D\u0433'
                        },
                        'Hovd': {
                            'exemplarCity': '\u0413\u043E\u0432\u0434'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0406\u0440\u043A\u0443\u0442\u0441\u044C\u043A'
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
                            'exemplarCity': '\u0423\u0440\u0443\u043C\u0447\u0456'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u0423\u0441\u0442\u044C-\u041D\u0435\u0440\u0430'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0412\u2019\u0454\u043D\u0442\u044C\u044F\u043D'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u042F\u043A\u0443\u0442\u0441\u044C\u043A'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u0404\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u0404\u0440\u0435\u0432\u0430\u043D'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u0422\u043E\u043A\u0456\u043E'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u0422\u0445\u0456\u043C\u043F\u0445\u0443'
                        },
                        'Tehran': {
                            'exemplarCity': '\u0422\u0435\u0433\u0435\u0440\u0430\u043D'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u0422\u0431\u0456\u043B\u0456\u0441\u0456'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u0422\u0430\u0448\u043A\u0435\u043D\u0442'
                        },
                        'Taipei': {
                            'exemplarCity': '\u0422\u0430\u0439\u043F\u0435\u0439'
                        },
                        'Singapore': {
                            'exemplarCity': '\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u0404\u0440\u0443\u0441\u0430\u043B\u0438\u043C'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0410\u0448\u0433\u0430\u0431\u0430\u0442'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0410\u043A\u0442\u043E\u0431\u0435'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0410\u043A\u0442\u0430\u0443'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0410\u043D\u0430\u0434\u0438\u0440'
                        },
                        'Amman': {
                            'exemplarCity': '\u0410\u043C\u043C\u0430\u043D'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0410\u043B\u043C\u0430\u0442\u0438'
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
                            'exemplarCity': '\u0411\u0456\u0448\u043A\u0435\u043A'
                        },
                        'Brunei': {
                            'exemplarCity': '\u0411\u0440\u0443\u043D\u0435\u0439'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u041A\u043E\u043B\u043A\u0430\u0442\u0430'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D'
                        },
                        'Kabul': {
                            'exemplarCity': '\u041A\u0430\u0431\u0443\u043B'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u041A\u0430\u043C\u0447\u0430\u0442\u043A\u0430'
                        },
                        'Karachi': {
                            'exemplarCity': '\u041A\u0430\u0440\u0430\u0447\u0456'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u041A\u0430\u0448\u0433\u0430\u0440'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u041A\u0430\u0442\u043C\u0430\u043D\u0434\u0443'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u0425\u0430\u043D\u0434\u0438\u0433\u0430'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u044C\u043A'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u041A\u0443\u0430\u043B\u0430-\u041B\u0443\u043C\u043F\u0443\u0440'
                        },
                        'Kuching': {
                            'exemplarCity': '\u041A\u0443\u0447\u0456\u043D\u0491'
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
                            'exemplarCity': '\u041C\u0430\u043D\u0456\u043B\u0430'
                        },
                        'Muscat': {
                            'exemplarCity': '\u041C\u0430\u0441\u043A\u0430\u0442'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u041D\u0456\u043A\u043E\u0441\u0456\u044F'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u041D\u043E\u0432\u043E\u043A\u0443\u0437\u043D\u0435\u0446\u044C\u043A'
                        }
                    }
                },
                'metazone': {
                    'Syowa': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u0421\u0435\u0432\u0430'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0421\u0443\u0440\u0438\u043D\u0430\u043C\u0456'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0430 \u0414\u0436\u043E\u0440\u0434\u0436\u0456\u044F'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0421\u0456\u043D\u0433\u0430\u043F\u0443\u0440\u0456'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0421\u0435\u0439\u0448\u0435\u043B\u044C\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0421\u0430\u043C\u043E\u0430',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0421\u0430\u043C\u043E\u0430',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0421\u0430\u043C\u043E\u0430'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u0437\u0430 \u0441\u0430\u043C\u0430\u0440\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0441\u0430\u043C\u0430\u0440\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0441\u0430\u043C\u0430\u0440\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u0437\u0430 \u0441\u0430\u0445\u0430\u043B\u0456\u043D \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0441\u0430\u0445\u0430\u043B\u0456\u043D \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0441\u0430\u0445\u0430\u043B\u0456\u043D \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u0420\u043E\u0442\u0435\u0440\u0430'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0420\u0435\u044E\u043D\u044C\u0439\u043E\u043D'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430',
                            'standard': '\u0427\u0430\u0441: \u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041A\u0438\u0437\u0438\u043B\u043E\u0440\u0434\u0430, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041F\u043E\u043D\u0430\u043F\u0435'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041F\u0456\u0442\u043A\u0435\u0440\u043D'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0421\u0435\u043D-\u041F\u2019\u0454\u0440 \u0456 \u041C\u0456\u043A\u0435\u043B\u043E\u043D',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0421\u0435\u043D-\u041F\u2019\u0454\u0440 \u0456 \u041C\u0456\u043A\u0435\u043B\u043E\u043D',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0421\u0435\u043D-\u041F\u2019\u0454\u0440 \u0456 \u041C\u0456\u043A\u0435\u043B\u043E\u043D'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0424\u0435\u043D\u0456\u043A\u0441'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0424\u0456\u043B\u0456\u043F\u043F\u0456\u043D\u0438',
                            'standard': '\u0427\u0430\u0441: \u0424\u0456\u043B\u0456\u043F\u043F\u0456\u043D\u0438, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0424\u0456\u043B\u0456\u043F\u043F\u0456\u043D\u0438, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041F\u0435\u0440\u0443',
                            'standard': '\u0427\u0430\u0441: \u041F\u0435\u0440\u0443, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041F\u0435\u0440\u0443, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439',
                            'standard': '\u0427\u0430\u0441: \u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u0437\u0430 \u043F\u0456\u0432\u0434\u0435\u043D\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u0437\u0430 \u0441\u0445\u0456\u0434\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u0437\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0432 \u0410\u0444\u0433\u0430\u043D\u0456\u0441\u0442\u0430\u043D\u0456'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u043A\u0440\u0456',
                            'standard': '\u0427\u0430\u0441: \u0410\u043A\u0440\u0456, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u043A\u0440\u0456, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0445\u0456\u0434\u043D\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0445\u0456\u0434\u043D\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0433\u0456\u0440\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0433\u0456\u0440\u043D\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0433\u0456\u0440\u043D\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0442\u0438\u0445\u043E\u043E\u043A\u0435\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0442\u0438\u0445\u043E\u043E\u043A\u0435\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043F\u0456\u0432\u043D\u0456\u0447\u043D\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0442\u0438\u0445\u043E\u043E\u043A\u0435\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u043D\u0430\u0434\u0438\u0440',
                            'standard': '\u0427\u0430\u0441: \u0410\u043D\u0430\u0434\u0438\u0440, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u043D\u0430\u0434\u0438\u0440, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0437\u0430 \u0430\u0440\u0430\u0431\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0430\u0440\u0430\u0431\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0430\u0440\u0430\u0431\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430',
                            'standard': '\u0427\u0430\u0441: \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439',
                            'standard': '\u0427\u0430\u0441: \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439 \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0427\u0438\u043B\u0456',
                            'standard': '\u0427\u0430\u0441: \u0427\u0438\u043B\u0456, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0427\u0438\u043B\u0456, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u0437\u0430 \u043A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D',
                            'standard': '\u0427\u0430\u0441: \u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0427\u043E\u0439\u0431\u0430\u043B\u0441\u0430\u043D, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0420\u0456\u0437\u0434\u0432\u0430'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041A\u043E\u043A\u043E\u0441\u043E\u0432\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041A\u043E\u043B\u0443\u043C\u0431\u0456\u044F',
                            'standard': '\u0427\u0430\u0441: \u041A\u043E\u043B\u0443\u043C\u0431\u0456\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041A\u043E\u043B\u0443\u043C\u0431\u0456\u044F, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041A\u0443\u043A\u0430',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041A\u0443\u043A\u0430',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041A\u0443\u043A\u0430'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041A\u0443\u0431\u0456',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041A\u0443\u0431\u0456',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041A\u0443\u0431\u0456'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0414\u0435\u0432\u0456\u0441'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0414\u044E\u043C\u043E\u043D \u0434\u2019\u042E\u0440\u0432\u0456\u043B\u044C'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0421\u0445\u0456\u0434\u043D\u043E\u043C\u0443 \u0422\u0438\u043C\u043E\u0440\u0456'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041F\u0430\u0441\u0445\u0438',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041F\u0430\u0441\u0445\u0438',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041F\u0430\u0441\u0445\u0438'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0415\u043A\u0432\u0430\u0434\u043E\u0440'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u0437\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u0437\u0430 \u0441\u0445\u0456\u0434\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0441\u0445\u0456\u0434\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0441\u0445\u0456\u0434\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u043E\u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0424\u0456\u0434\u0436\u0456',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0424\u0456\u0434\u0436\u0456',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0424\u0456\u0434\u0436\u0456'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u0413\u0432\u0456\u0430\u043D\u0430'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0422\u043E\u043A\u0435\u043B\u0430\u0443'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0422\u043E\u043D\u0433\u0430',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0422\u043E\u043D\u0433\u0430',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0422\u043E\u043D\u0433\u0430'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0427\u0443\u0443\u043A'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0456\u0441\u0442\u0430\u043D',
                            'standard': '\u0427\u0430\u0441: \u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0456\u0441\u0442\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0456\u0441\u0442\u0430\u043D, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0422\u0443\u0432\u0430\u043B\u0443'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0423\u0440\u0443\u0433\u0432\u0430\u0439',
                            'standard': '\u0427\u0430\u0441: \u0423\u0440\u0443\u0433\u0432\u0430\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0423\u0440\u0443\u0433\u0432\u0430\u0439, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D',
                            'standard': '\u0427\u0430\u0441: \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0412\u0430\u043D\u0443\u0430\u0442\u0443',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0412\u0430\u043D\u0443\u0430\u0442\u0443',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0412\u0430\u043D\u0443\u0430\u0442\u0443'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u0437\u0430 \u0454\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0437\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0454\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0437\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0454\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0437\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u0437\u0430 \u044F\u043A\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u044F\u043A\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u044F\u043A\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0412\u043E\u043B\u043B\u0456\u0441 \u0456 \u0424\u0443\u0442\u0443\u043D\u0430'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0412\u0435\u0439\u043A'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0412\u043E\u0441\u0442\u043E\u043A'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u0437\u0430 \u0432\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0432\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0432\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u0437\u0430 \u0432\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u0446\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0432\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u0446\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0432\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u0446\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0412\u0435\u043D\u0435\u0441\u0443\u0435\u043B\u0430'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D\u0456'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0422\u0430\u0439\u0431\u0435\u0439',
                            'standard': '\u0427\u0430\u0441: \u0422\u0430\u0439\u0431\u0435\u0439, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0422\u0430\u0439\u0431\u0435\u0439, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0422\u0430\u0457\u0442\u0456'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u043E\u043D\u043A\u043E\u043D\u0437\u0456',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u043E\u043D\u043A\u043E\u043D\u0437\u0456',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u043E\u043D\u043A\u043E\u043D\u0437\u0456'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u0437\u0430 \u0433\u0430\u0432\u0430\u0439\u0441\u044C\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0433\u0430\u0432\u0430\u0439\u0441\u044C\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0433\u0430\u0432\u0430\u0439\u0441\u044C\u043A\u043E-\u0430\u043B\u0435\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0430\u044F\u043D\u0456'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u041F\u0435\u0440\u0441\u044C\u043A\u043E\u0457 \u0437\u0430\u0442\u043E\u043A\u0438'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0413\u0443\u0430\u043C'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0456\u0457',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0456\u0457',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0456\u0457'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u0437\u0430 \u0441\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0456\u0457',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0441\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0456\u0457',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0441\u0445\u0456\u0434\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0456\u0457'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u0437\u0430 \u0413\u0440\u0456\u043D\u0432\u0456\u0447\u0435\u043C'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u0413\u0456\u043B\u0431\u0435\u0440\u0442\u0430'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0443\u0437\u0456\u0457',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0443\u0437\u0456\u0457',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0413\u0440\u0443\u0437\u0456\u0457'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u0413\u0430\u043C\u0431\u2019\u0454'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0413\u0430\u043B\u0430\u043F\u0430\u0433\u043E\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0438\u0445 \u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0438\u0445 \u0456 \u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0447\u043D\u0438\u0445 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u044F\u0445'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0437\u0430\u0445\u0456\u0434\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u043B\u044F\u0441\u043A\u0430',
                            'standard': '\u0427\u0430\u0441: \u0410\u043B\u044F\u0441\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u043B\u044F\u0441\u043A\u0430, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u043C\u0430\u0437\u043E\u043D\u043A\u0430',
                            'standard': '\u0427\u0430\u0441: \u0410\u043C\u0430\u0437\u043E\u043D\u043A\u0430, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u043C\u0430\u0437\u043E\u043D\u043A\u0430, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u0437\u0430 \u0432\u0456\u0440\u043C\u0435\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0432\u0456\u0440\u043C\u0435\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0432\u0456\u0440\u043C\u0435\u043D\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u0437\u0430 \u0430\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0430\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u043D\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0430\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u043D\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439',
                            'standard': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E-\u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439',
                            'standard': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E-\u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E-\u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439 \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0441\u0445\u0456\u0434\u043D\u0438\u0439',
                            'standard': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0441\u0445\u0456\u0434\u043D\u0438\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0441\u0445\u0456\u0434\u043D\u0438\u0439 \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439',
                            'standard': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0456\u044F, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439 \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0432 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0456',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0432 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0456',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0432 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0456'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0410\u0437\u043E\u0440\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0410\u0437\u043E\u0440\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0410\u0437\u043E\u0440\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0411\u0443\u0442\u0430\u043D\u0456'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0411\u043E\u043B\u0456\u0432\u0456\u044F'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0411\u0440\u0430\u0437\u0438\u043B\u0456\u044F',
                            'standard': '\u0427\u0430\u0441: \u0411\u0440\u0430\u0437\u0438\u043B\u0456\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0411\u0440\u0430\u0437\u0438\u043B\u0456\u044F, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u0411\u0440\u0443\u043D\u0435\u0457'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0438\u0445 \u041C\u0430\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0430\u0440\u0445\u0456\u043F\u0435\u043B\u0430\u0437\u0456 \u0427\u0430\u0442\u0435\u043C',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0430\u0440\u0445\u0456\u043F\u0435\u043B\u0430\u0437\u0456 \u0427\u0430\u0442\u0435\u043C',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0430\u0440\u0445\u0456\u043F\u0435\u043B\u0430\u0437\u0456 \u0427\u0430\u0442\u0435\u043C'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0413\u043E\u0432\u0434',
                            'standard': '\u0427\u0430\u0441: \u0413\u043E\u0432\u0434, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0413\u043E\u0432\u0434, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u0437\u0430 \u0456\u043D\u0434\u0456\u0439\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0432 \u0406\u043D\u0434\u0456\u0439\u0441\u044C\u043A\u043E\u043C\u0443 \u041E\u043A\u0435\u0430\u043D\u0456'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0406\u043D\u0434\u043E\u043A\u0438\u0442\u0430\u0439'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0406\u043D\u0434\u043E\u043D\u0435\u0437\u0456\u044F, \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0406\u043D\u0434\u043E\u043D\u0435\u0437\u0456\u044F, \u0441\u0445\u0456\u0434\u043D\u0438\u0439'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u0406\u043D\u0434\u043E\u043D\u0435\u0437\u0456\u044F, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u0437\u0430 \u0456\u0440\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0456\u0440\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0456\u0440\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u0437\u0430 \u0456\u0440\u043A\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0456\u0440\u043A\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0456\u0440\u043A\u0443\u0442\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u0437\u0430 \u0456\u0437\u0440\u0430\u0457\u043B\u044C\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u0456\u0437\u0440\u0430\u0457\u043B\u044C\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u0456\u0437\u0440\u0430\u0457\u043B\u044C\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u0437\u0430 \u044F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u044F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u044F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u0437\u0430 \u043A\u0430\u043C\u0447\u0430\u0442\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043A\u0430\u043C\u0447\u0430\u0442\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043A\u0430\u043C\u0447\u0430\u0442\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0441\u0445\u0456\u0434\u043D\u0438\u0439'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0437\u0430\u0445\u0456\u0434\u043D\u0438\u0439'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u0437\u0430 \u043A\u043E\u0440\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043A\u043E\u0440\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043A\u043E\u0440\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041A\u043E\u0441\u0440\u0430\u0435'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u0437\u0430 \u043A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u041A\u0438\u0440\u0433\u0438\u0437\u0441\u0442\u0430\u043D'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u041B\u0430\u043D\u043A\u0430'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041B\u0430\u0439\u043D'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041B\u043E\u0433\u0434-\u0413\u043E\u0443\u0432',
                            'standard': '\u0427\u0430\u0441: \u041B\u043E\u0440\u0434-\u0413\u043E\u0443\u0432, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041B\u043E\u0440\u0434-\u0413\u043E\u0443\u0432, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u041C\u0430\u043A\u043A\u0432\u0435\u0440\u0456'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u0437\u0430 \u043C\u0430\u0433\u0430\u0434\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043C\u0430\u0433\u0430\u0434\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043C\u0430\u0433\u0430\u0434\u0430\u043D\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u0427\u0430\u0441: \u041C\u0430\u043B\u0430\u0439\u0437\u0456\u044F'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041C\u0430\u043B\u044C\u0434\u0456\u0432\u0430\u0445'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041C\u0430\u0440\u043A\u0456\u0437\u044C\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u041C\u0430\u0440\u0448\u0430\u043B\u043E\u0432\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041C\u0430\u0432\u0440\u0438\u043A\u0456\u0439',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041C\u0430\u0432\u0440\u0438\u043A\u0456\u0439',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041C\u0430\u0432\u0440\u0438\u043A\u0456\u0439'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u041C\u043E\u0443\u0441\u043E\u043D'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440',
                            'standard': '\u0427\u0430\u0441: \u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0423\u043B\u0430\u043D-\u0411\u0430\u0442\u043E\u0440, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u0437\u0430 \u043C\u043E\u0441\u043A\u043E\u0432\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043C\u043E\u0441\u043A\u043E\u0432\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043C\u043E\u0441\u043A\u043E\u0432\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u041C\u2019\u044F\u043D\u043C\u0456'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041D\u0430\u0443\u0440\u0443'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u041D\u0435\u043F\u0430\u043B\u0456'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041D\u043E\u0432\u043E\u0457 \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0456\u0457',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041D\u043E\u0432\u043E\u0457 \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0456\u0457',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041D\u043E\u0432\u043E\u0457 \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0456\u0457'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041D\u043E\u0432\u0430 \u0417\u0435\u043B\u0430\u043D\u0434\u0456\u044F',
                            'standard': '\u0427\u0430\u0441: \u041D\u043E\u0432\u0430 \u0417\u0435\u043B\u0430\u043D\u0434\u0456\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041D\u043E\u0432\u0430 \u0417\u0435\u043B\u0430\u043D\u0434\u0456\u044F, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u041D\u044C\u044E\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434',
                            'standard': '\u0427\u0430\u0441: \u041D\u044C\u044E\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u041D\u044C\u044E\u0444\u0430\u0443\u043D\u0434\u043B\u0435\u043D\u0434, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041D\u0456\u0443\u0435'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041D\u043E\u0440\u0444\u043E\u043B\u043A'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u0427\u0430\u0441: \u0424\u0435\u0440\u043D\u0430\u043D\u0434\u043E-\u0434\u0435-\u041D\u043E\u0440\u043E\u043D\u044C\u044F',
                            'standard': '\u0427\u0430\u0441: \u0424\u0435\u0440\u043D\u0430\u043D\u0434\u043E-\u0434\u0435-\u041D\u043E\u0440\u043E\u043D\u044C\u044F, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                            'daylight': '\u0427\u0430\u0441: \u0424\u0435\u0440\u043D\u0430\u043D\u0434\u043E-\u0434\u0435-\u041D\u043E\u0440\u043E\u043D\u044C\u044F, \u043B\u0456\u0442\u043D\u0456\u0439'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u0437\u0430 \u043D\u043E\u0432\u043E\u0441\u0438\u0431\u0456\u0440\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043D\u043E\u0432\u043E\u0441\u0438\u0431\u0456\u0440\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043D\u043E\u0432\u043E\u0441\u0438\u0431\u0456\u0440\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u0437\u0430 \u043E\u043C\u0441\u044C\u043A\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'standard': '\u0437\u0430 \u043E\u043C\u0441\u044C\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C',
                            'daylight': '\u0437\u0430 \u043E\u043C\u0441\u044C\u043A\u0438\u043C \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u0443 \u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D\u0456',
                            'standard': '\u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D\u0456',
                            'daylight': '\u0437\u0430 \u043B\u0456\u0442\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0443 \u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D\u0456'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0456 \u041F\u0430\u043B\u0430\u0443'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u0437\u0430 \u0447\u0430\u0441\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445 \u041F\u0430\u043F\u0443\u0430 \u041D\u043E\u0432\u0430 \u0413\u0432\u0456\u043D\u0435\u044F'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '\u0427\u0430\u0441: {0}',
                'regionFormat-type-daylight': '\u0427\u0430\u0441: {0}, \u043B\u0456\u0442\u043D\u0456\u0439',
                'regionFormat-type-standard': '\u0427\u0430\u0441: {0}, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': '\u0423\u043D\u0456\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0435 \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F',
                'collation': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F',
                'colHiraganaQuaternary': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u043D\u0430',
                'colCaseLevel': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443',
                'colCaseFirst': '\u0423\u043F\u043E\u0440\u044F\u0434\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u0432\u0435\u043B\u0438\u043A\u0438\u043C\u0438/\u043C\u0430\u043B\u0438\u043C\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C\u0438',
                'colBackwards': '\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0435 \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u0434\u0456\u0430\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u0430\u043C\u0438',
                'colAlternate': '\u0406\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C\u0438',
                'calendar': '\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                'x': '\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F',
                'variableTop': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u044F\u043A \u0441\u0438\u043C\u0432\u043E\u043B\u0438',
                'va': '\u0412\u0430\u0440\u0456\u0430\u043D\u0442 \u043C\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0443',
                'timezone': '\u0427\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u043E\u044F\u0441',
                'numbers': '\u0426\u0438\u0444\u0440\u0438',
                'currency': '\u0412\u0430\u043B\u044E\u0442\u0430',
                'colStrength': '\u0406\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F',
                'colNumeric': '\u0426\u0438\u0444\u0440\u043E\u0432\u0435 \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043A\u0430\u043D\u0430 \u043E\u043A\u0440\u0435\u043C\u043E',
                    'yes': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043A\u0430\u043D\u0430 \u0456\u043D\u0430\u043A\u0448\u0435'
                },
                'colCaseLevel': {
                    'no': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443',
                    'yes': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443'
                },
                'colCaseFirst': {
                    'lower': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0435\u0440\u0448\u0443 \u0437\u0430 \u043C\u0430\u043B\u0438\u043C\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C\u0438',
                    'no': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0443 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443',
                    'upper': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0435\u0440\u0448\u0443 \u0437\u0430 \u0432\u0435\u043B\u0438\u043A\u0438\u043C\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C\u0438'
                },
                'colStrength': {
                    'identical': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456',
                    'primary': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043B\u0438\u0448\u0435 \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u043C\u0438 \u043B\u0456\u0442\u0435\u0440\u0430\u043C\u0438',
                    'quaternary': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0434\u0456\u0430\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u0430\u043C\u0438/\u0440\u0435\u0433\u0456\u0441\u0442\u0440\u043E\u043C/\u0448\u0438\u0440\u0438\u043D\u043E\u044E/\u043A\u0430\u043D\u0430',
                    'secondary': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0434\u0456\u0430\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u0430\u043C\u0438',
                    'tertiary': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0434\u0456\u0430\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u0430\u043C\u0438/\u0440\u0435\u0433\u0456\u0441\u0442\u0440\u043E\u043C/\u0448\u0438\u0440\u0438\u043D\u043E\u044E'
                },
                'colNumeric': {
                    'no': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0446\u0438\u0444\u0440\u0430\u043C\u0438 \u043E\u043A\u0440\u0435\u043C\u043E',
                    'yes': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0446\u0438\u0444\u0440\u0430\u043C\u0438 \u0447\u0438\u0441\u0435\u043B\u044C\u043D\u043E'
                },
                'colNormalization': {
                    'no': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437 \u0443\u043D\u0456\u0444\u0456\u043A\u0430\u0446\u0456\u0457',
                    'yes': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 Unicode \u0443\u043D\u0456\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u043E'
                },
                'calendar': {
                    'japanese': '\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'iso8601': 'iso8601',
                    'coptic': '\u041A\u043E\u043F\u0442\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'dangi': 'dangi',
                    'ethiopic': '\u0415\u0444\u0456\u043E\u043F\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'ethiopic-amete-alem': '\u0415\u0444\u0456\u043E\u043F\u0441\u044C\u043A\u0438\u0439 \u0410\u043C\u0435\u0442\u0435 \u0410\u043B\u0435\u043C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'gregorian': '\u0413\u0440\u0438\u0433\u043E\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'hebrew': '\u0404\u0432\u0440\u0435\u0439\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'persian': '\u041F\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'roc': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u0433\u0440\u0438\u0433\u043E\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0438\u0439',
                    'chinese': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'buddhist': '\u0411\u0443\u0434\u0434\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'indian': '\u0406\u043D\u0434\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u0441\u0432\u0456\u0442\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'islamic': '\u041C\u0443\u0441\u0443\u043B\u044C\u043C\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'islamic-civil': '\u041C\u0443\u0441\u0443\u043B\u044C\u043C\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u0441\u0432\u0456\u0442\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0430 \u043A\u043D\u0438\u0433\u0430',
                    'gb2312han': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u0441\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0439',
                    'eor': 'eor',
                    'ducet': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F: Unicode \u0437\u0430 \u0443\u043C\u043E\u0432\u0447\u0430\u043D\u043D\u044F\u043C',
                    'dictionary': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F: \u0437\u0430 \u0441\u043B\u043E\u0432\u043D\u0438\u043A\u043E\u043C',
                    'big5han': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043D\u0438\u0439',
                    'traditional': '\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043D\u0438\u0439',
                    'standard': '\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F',
                    'zhuyin': 'zhuyin',
                    'unihan': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F: \u0437\u0430 \u0448\u0442\u0440\u0438\u0445\u0430\u043C\u0438 \u0432 \u043A\u043E\u0440\u0435\u043D\u0456',
                    'stroke': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043D\u0430\u0442\u0438\u0441\u043A\u0430\u043D\u043D\u044F \u043A\u043B\u0430\u0432\u0456\u0448',
                    'searchjl': '\u041F\u043E\u0448\u0443\u043A \u0437\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u044E \u043F\u0440\u0438\u0433\u043E\u043B\u043E\u0441\u043D\u043E\u044E \u0445\u0430\u043D\u0433\u0443\u043B',
                    'search': '\u0423\u043D\u0456\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u043E\u0448\u0443\u043A',
                    'reformed': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F: \u0437\u0430 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F\u043C\u0438',
                    'pinyin': '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0456\u043D\u044C\u0457\u043D',
                    'phonetic': '\u0424\u043E\u043D\u0435\u0442\u0438\u0447\u043D\u0438\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F'
                },
                'numbers': {
                    'knda': '\u0426\u0438\u0444\u0440\u0438 \u043A\u0430\u043D\u043D\u0430\u0434\u0430',
                    'khmr': '\u041A\u0445\u043C\u0435\u0440\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'kali': 'kali',
                    'jpanfin': '\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0456 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'jpan': '\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'java': 'java',
                    'hebr': '\u0426\u0438\u0444\u0440\u0438 \u0456\u0432\u0440\u0438\u0442\u0443',
                    'hantfin': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0456 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \u0447\u0438\u0441\u0435\u043B (\u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043D\u0435 \u043F\u0438\u0441\u044C\u043C\u043E)',
                    'hant': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \u0447\u0438\u0441\u0435\u043B (\u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043D\u0435 \u043F\u0438\u0441\u044C\u043C\u043E)',
                    'hansfin': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0456 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \u0447\u0438\u0441\u0435\u043B (\u0441\u043F\u0440\u043E\u0449\u0435\u043D\u0435 \u043F\u0438\u0441\u044C\u043C\u043E)',
                    'hans': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \u0447\u0438\u0441\u0435\u043B (\u0441\u043F\u0440\u043E\u0449\u0435\u043D\u0435 \u043F\u0438\u0441\u044C\u043C\u043E)',
                    'hanidec': '\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0456 \u0434\u0435\u0441\u044F\u0442\u043A\u043E\u0432\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'guru': '\u0426\u0438\u0444\u0440\u0438 \u0433\u0443\u0440\u043C\u0443\u043A\u0445\u0456',
                    'gujr': '\u0426\u0438\u0444\u0440\u0438 \u0433\u0443\u0434\u0436\u0430\u0440\u0430\u0442\u0456',
                    'greklow': '\u0413\u0440\u0435\u0446\u044C\u043A\u0456 \u043C\u0430\u043B\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'grek': '\u0413\u0440\u0435\u0446\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'bali': 'bali',
                    'armnlow': '\u0412\u0456\u0440\u043C\u0435\u043D\u0441\u044C\u043A\u0456 \u043C\u0430\u043B\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'armn': '\u0412\u0456\u0440\u043C\u0435\u043D\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'arabext': '\u0410\u0440\u0430\u0431\u0441\u044C\u043A\u043E-\u0456\u043D\u0434\u0456\u0439\u0441\u044C\u043A\u0456 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'arab': '\u0410\u0440\u0430\u0431\u0441\u044C\u043A\u043E-\u0456\u043D\u0434\u0456\u0439\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'finance': '\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \u0447\u0438\u0441\u0435\u043B',
                    'traditional': '\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043D\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \u0447\u0438\u0441\u0435\u043B',
                    'native': '\u041C\u0456\u0441\u0446\u0435\u0432\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'beng': '\u0411\u0435\u043D\u0433\u0430\u043B\u044C\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u0426\u0438\u0444\u0440\u0438 \u0434\u0435\u0432\u0430\u043D\u0430\u0433\u0430\u0440\u0456',
                    'orya': '\u0426\u0438\u0444\u0440\u0438 \u043E\u0440\u0456\u044F',
                    'osma': 'osma',
                    'roman': '\u0420\u0438\u043C\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'romanlow': '\u0420\u0438\u043C\u0441\u044C\u043A\u0456 \u043C\u0430\u043B\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u0426\u0438\u0444\u0440\u0438 \u0432\u0430\u0457',
                    'tibt': '\u0422\u0438\u0431\u0435\u0442\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'thai': '\u0422\u0430\u0439\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'telu': '\u0426\u0438\u0444\u0440\u0438 \u0442\u0435\u043B\u0443\u0433\u0443',
                    'tamldec': '\u0422\u0430\u043C\u0456\u043B\u044C\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'taml': '\u0422\u0430\u043C\u0456\u043B\u044C\u0441\u044C\u043A\u0456 \u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043D\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': '\u041C\u2019\u044F\u043D\u043C\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'mtei': 'mtei',
                    'mong': '\u041C\u043E\u043D\u0433\u043E\u043B\u044C\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'mlym': '\u041C\u0430\u043B\u0430\u044F\u043B\u0430\u043C\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': '\u0417\u0430\u0445\u0456\u0434\u043D\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'laoo': '\u041B\u0430\u043E\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': '\u0413\u0440\u0443\u0437\u0438\u043D\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438',
                    'fullwide': '\u0426\u0438\u0444\u0440\u0438 \u043F\u043E\u0432\u043D\u043E\u0457 \u0448\u0438\u0440\u0438\u043D\u0438',
                    'ethi': '\u0415\u0444\u0456\u043E\u043F\u0441\u044C\u043A\u0456 \u0446\u0438\u0444\u0440\u0438'
                },
                'colAlternate': {
                    'non-ignorable': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C\u0438',
                    'shifted': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438, \u0456\u0433\u043D\u043E\u0440\u0443\u044E\u0447\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u0438'
                },
                'colBackwards': {
                    'no': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0434\u0456\u0430\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u0430\u043C\u0438 \u0443\u043D\u0456\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u043E',
                    'yes': '\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0434\u0456\u0430\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u0430\u043C\u0438 \u0443 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u044C\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443'
                }
            },
            'codePatterns': {
                'language': '\u041C\u043E\u0432\u0430: {0}',
                'script': '\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430: {0}',
                'territory': '\u0422\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u044F: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} \u0443\u043D\u0446\u0456\u044F',
                    'unitPattern-count-few': '{0} \u0443\u043D\u0446\u0456\u0457',
                    'unitPattern-count-many': '{0} \u0443\u043D\u0446\u0456\u0439',
                    'unitPattern-count-other': '{0} \u0443\u043D\u0446\u0456\u0457'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C',
                    'unitPattern-count-few': '{0} \u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C\u0430'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u0433\u0440\u0430\u043C',
                    'unitPattern-count-few': '{0} \u0433\u0440\u0430\u043C\u0438',
                    'unitPattern-count-many': '{0} \u0433\u0440\u0430\u043C\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0433\u0440\u0430\u043C\u0430'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u044F\u0440\u0434',
                    'unitPattern-count-few': '{0} \u044F\u0440\u0434\u0438',
                    'unitPattern-count-many': '{0} \u044F\u0440\u0434\u0456\u0432',
                    'unitPattern-count-other': '{0} \u044F\u0440\u0434\u0430'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} \u043F\u0456\u043A\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043F\u0456\u043A\u043E\u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043F\u0456\u043A\u043E\u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043F\u0456\u043A\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u043B\u0456\u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043C\u0456\u043B\u0456\u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0456\u043B\u0456\u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0456\u043B\u0456\u043C\u0435\u0442\u0440\u0430'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0435\u0442\u0440\u0430'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u0438\u0439 \u0440\u0456\u043A',
                    'unitPattern-count-few': '{0} \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u0456 \u0440\u043E\u043A\u0438',
                    'unitPattern-count-many': '{0} \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u0438\u0445 \u0440\u043E\u043A\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u043A\u0443'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C',
                    'unitPattern-count-few': '{0} \u0434\u044E\u0439\u043C\u0438',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442',
                    'unitPattern-count-few': '{0} \u0444\u0443\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0430'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u0440\u0456\u043A',
                    'unitPattern-count-few': '{0} \u0440\u043E\u043A\u0438',
                    'unitPattern-count-many': '{0} \u0440\u043E\u043A\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0440\u043E\u043A\u0443'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u0442\u0438\u0436\u0434\u0435\u043D\u044C',
                    'unitPattern-count-few': '{0} \u0442\u0438\u0436\u043D\u0456',
                    'unitPattern-count-many': '{0} \u0442\u0438\u0436\u043D\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0442\u0438\u0436\u043D\u044F'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u0441\u044F\u0446\u044C',
                    'unitPattern-count-few': '{0} \u043C\u0456\u0441\u044F\u0446\u0456',
                    'unitPattern-count-many': '{0} \u043C\u0456\u0441\u044F\u0446\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0456\u0441\u044F\u0446\u044F'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u043D\u0442',
                    'unitPattern-count-few': '{0} \u0444\u0443\u043D\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0444\u0443\u043D\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u043D\u0442\u0430'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u043A\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0438\u043B\u0430',
                    'unitPattern-count-few': '{0} \u043A\u0456\u043D\u0441\u044C\u043A\u0456 \u0441\u0438\u043B\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0456\u043D\u0441\u044C\u043A\u0438\u0445 \u0441\u0438\u043B',
                    'unitPattern-count-other': '{0} \u043A\u0456\u043D\u0441\u044C\u043A\u043E\u0457 \u0441\u0438\u043B\u0438'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u043A\u0456\u043B\u043E\u0432\u0430\u0442',
                    'unitPattern-count-few': '{0} \u043A\u0456\u043B\u043E\u0432\u0430\u0442\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0456\u043B\u043E\u0432\u0430\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0456\u043B\u043E\u0432\u0430\u0442\u0430'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} \u0432\u0430\u0442',
                    'unitPattern-count-few': '{0} \u0432\u0430\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0432\u0430\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0432\u0430\u0442\u0430'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u044C',
                    'unitPattern-count-few': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u0456',
                    'unitPattern-count-many': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0433\u0435\u043A\u0442\u043E\u043F\u0430\u0441\u043A\u0430\u043B\u044F'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u0432\u043F\u0430',
                    'unitPattern-count-few': '{0} \u0434\u044E\u0439\u043C\u0438 \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u0432\u043F\u0430',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u0456\u0432 \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u0432\u043F\u0430',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430 \u0440\u0442\u0443\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u043E\u0432\u043F\u0430'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u043B\u0456\u0431\u0430\u0440',
                    'unitPattern-count-few': '{0} \u043C\u0456\u043B\u0456\u0431\u0430\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0456\u043B\u0456\u0431\u0430\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0456\u043B\u0456\u0431\u0430\u0440\u0430'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u043B\u0456\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043B\u0456\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043B\u0456\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043B\u0456\u0442\u0440\u0430'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u0430 \u043C\u0438\u043B\u044F',
                    'unitPattern-count-few': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u0456 \u043C\u0438\u043B\u0456',
                    'unitPattern-count-many': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u0438\u0445 \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u043E\u0457 \u043C\u0438\u043B\u0456'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u0438\u0439 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u0456 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u0438\u0445 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0443\u0431\u0456\u0447\u043D\u043E\u0433\u043E \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u0433\u0440\u0430\u0434\u0443\u0441 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0430',
                    'unitPattern-count-few': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0438 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0430',
                    'unitPattern-count-many': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0430',
                    'unitPattern-count-other': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0430 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0430'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u0433\u0440\u0430\u0434\u0443\u0441 \u0426\u0435\u043B\u044C\u0441\u0456\u044F',
                    'unitPattern-count-few': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0438 \u0426\u0435\u043B\u044C\u0441\u0456\u044F',
                    'unitPattern-count-many': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432 \u0426\u0435\u043B\u044C\u0441\u0456\u044F',
                    'unitPattern-count-other': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0430 \u0426\u0435\u043B\u044C\u0441\u0456\u044F'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u043C\u0435\u0442\u0440 \u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443',
                    'unitPattern-count-few': '{0} \u043C\u0435\u0442\u0440\u0438 \u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443',
                    'unitPattern-count-many': '{0} \u043C\u0435\u0442\u0440\u0456\u0432 \u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443',
                    'unitPattern-count-other': '{0} \u043C\u0435\u0442\u0440\u0430 \u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443',
                    'unitPattern-count-few': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0438 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443',
                    'unitPattern-count-many': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0456\u0432 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443',
                    'unitPattern-count-other': '{0} \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0430 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u0445\u0432\u0438\u043B\u0438\u043D\u0430',
                    'unitPattern-count-few': '{0} \u0445\u0432\u0438\u043B\u0438\u043D\u0438',
                    'unitPattern-count-many': '{0} \u0445\u0432\u0438\u043B\u0438\u043D',
                    'unitPattern-count-other': '{0} \u0445\u0432\u0438\u043B\u0438\u043D\u0438'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434\u0430',
                    'unitPattern-count-few': '{0} \u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434',
                    'unitPattern-count-other': '{0} \u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434\u0438'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u0433\u043E\u0434\u0438\u043D\u0430',
                    'unitPattern-count-few': '{0} \u0433\u043E\u0434\u0438\u043D\u0438',
                    'unitPattern-count-many': '{0} \u0433\u043E\u0434\u0438\u043D',
                    'unitPattern-count-other': '{0} \u0433\u043E\u0434\u0438\u043D\u0438'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u0434\u0435\u043D\u044C',
                    'unitPattern-count-few': '{0} \u0434\u043D\u0456',
                    'unitPattern-count-many': '{0} \u0434\u043D\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0434\u043D\u044F'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0430 \u043C\u0438\u043B\u044F',
                    'unitPattern-count-few': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0456 \u043C\u0438\u043B\u0456',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0445 \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0457 \u043C\u0438\u043B\u0456'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0456 \u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0445 \u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u0442\u0440\u0430'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440',
                    'unitPattern-count-few': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0456 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0445 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0430'
                },
                'per': {
                    'compoundUnitPattern': '{0} \u043D\u0430 {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} \u0441\u0438\u043B\u0430 \u0442\u044F\u0436\u0456\u043D\u043D\u044F',
                    'unitPattern-count-few': '{0} \u0441\u0438\u043B\u0438 \u0442\u044F\u0436\u0456\u043D\u043D\u044F',
                    'unitPattern-count-many': '{0} \u0441\u0438\u043B \u0442\u044F\u0436\u0456\u043D\u043D\u044F',
                    'unitPattern-count-other': '{0} \u0441\u0438\u043B\u0438 \u0442\u044F\u0436\u0456\u043D\u043D\u044F'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u043D\u0443\u0442\u0430',
                    'unitPattern-count-few': '{0} \u043C\u0456\u043D\u0443\u0442\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0456\u043D\u0443\u0442',
                    'unitPattern-count-other': '{0} \u043C\u0456\u043D\u0443\u0442\u0438'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0430',
                    'unitPattern-count-few': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0438',
                    'unitPattern-count-many': '{0} \u0441\u0435\u043A\u0443\u043D\u0434',
                    'unitPattern-count-other': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0438'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} \u0433\u0440\u0430\u0434\u0443\u0441',
                    'unitPattern-count-few': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0438',
                    'unitPattern-count-many': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0433\u0440\u0430\u0434\u0443\u0441\u0430'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u0430\u043A\u0440',
                    'unitPattern-count-few': '{0} \u0430\u043A\u0440\u0438',
                    'unitPattern-count-many': '{0} \u0430\u043A\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0430\u043A\u0440\u0430'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u0433\u0435\u043A\u0442\u0430\u0440',
                    'unitPattern-count-few': '{0} \u0433\u0435\u043A\u0442\u0430\u0440\u0438',
                    'unitPattern-count-many': '{0} \u0433\u0435\u043A\u0442\u0430\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0433\u0435\u043A\u0442\u0430\u0440\u0430'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u0444\u0443\u0442',
                    'unitPattern-count-few': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0456 \u0444\u0443\u0442\u0438',
                    'unitPattern-count-many': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0445 \u0444\u0443\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0444\u0443\u0442\u0430'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0430',
                    'unitPattern-count-few': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0438',
                    'unitPattern-count-many': '{0} \u0441\u0435\u043A\u0443\u043D\u0434',
                    'unitPattern-count-other': '{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0438'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} \u0443\u043D\u0446\u0456\u044F',
                    'unitPattern-count-few': '{0} \u0443\u043D\u0446\u0456\u0457',
                    'unitPattern-count-many': '{0} \u0443\u043D\u0446\u0456\u0439',
                    'unitPattern-count-other': '{0} \u0443\u043D\u0446\u0456\u0457'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} \u043A\u0433',
                    'unitPattern-count-few': '{0} \u043A\u0433',
                    'unitPattern-count-many': '{0} \u043A\u0433',
                    'unitPattern-count-other': '{0} \u043A\u0433'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} \u0433',
                    'unitPattern-count-few': '{0} \u0433',
                    'unitPattern-count-many': '{0} \u0433',
                    'unitPattern-count-other': '{0} \u0433'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} \u044F\u0440\u0434',
                    'unitPattern-count-few': '{0} \u044F\u0440\u0434\u0438',
                    'unitPattern-count-many': '{0} \u044F\u0440\u0434\u0456\u0432',
                    'unitPattern-count-other': '{0} \u044F\u0440\u0434\u0430'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} \u043F\u043C',
                    'unitPattern-count-few': '{0} \u043F\u043C',
                    'unitPattern-count-many': '{0} \u043F\u043C',
                    'unitPattern-count-other': '{0} \u043F\u043C'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} \u043C\u043C',
                    'unitPattern-count-few': '{0} \u043C\u043C',
                    'unitPattern-count-many': '{0} \u043C\u043C',
                    'unitPattern-count-other': '{0} \u043C\u043C'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} \u043C',
                    'unitPattern-count-few': '{0} \u043C',
                    'unitPattern-count-many': '{0} \u043C',
                    'unitPattern-count-other': '{0} \u043C'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} \u0441\u0432. \u0440.',
                    'unitPattern-count-few': '{0} \u0441\u0432. \u0440.',
                    'unitPattern-count-many': '{0} \u0441\u0432. \u0440.',
                    'unitPattern-count-other': '{0} \u0441\u0432. \u0440.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C',
                    'unitPattern-count-few': '{0} \u043A\u043C',
                    'unitPattern-count-many': '{0} \u043A\u043C',
                    'unitPattern-count-other': '{0} \u043A\u043C'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C',
                    'unitPattern-count-few': '{0} \u0434\u044E\u0439\u043C\u0438',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442',
                    'unitPattern-count-few': '{0} \u0444\u0443\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} \u0441\u043C',
                    'unitPattern-count-few': '{0} \u0441\u043C',
                    'unitPattern-count-many': '{0} \u0441\u043C',
                    'unitPattern-count-other': '{0} \u0441\u043C'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u0440.',
                    'unitPattern-count-few': '{0} \u0440.',
                    'unitPattern-count-many': '{0} \u0440.',
                    'unitPattern-count-other': '{0} \u0440.'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} \u0442\u0438\u0436.',
                    'unitPattern-count-few': '{0} \u0442\u0438\u0436.',
                    'unitPattern-count-many': '{0} \u0442\u0438\u0436.',
                    'unitPattern-count-other': '{0} \u0442\u0438\u0436.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u0441.',
                    'unitPattern-count-few': '{0} \u043C\u0456\u0441.',
                    'unitPattern-count-many': '{0} \u043C\u0456\u0441.',
                    'unitPattern-count-other': '{0} \u043C\u0456\u0441.'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u043D\u0442',
                    'unitPattern-count-few': '{0} \u0444\u0443\u043D\u0442\u0438',
                    'unitPattern-count-many': '{0} \u0444\u0443\u043D\u0442\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0444\u0443\u043D\u0442\u0430'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} \u043A.\u0441.',
                    'unitPattern-count-few': '{0} \u043A.\u0441.',
                    'unitPattern-count-many': '{0} \u043A.\u0441.',
                    'unitPattern-count-other': '{0} \u043A.\u0441.'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-few': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-many': '{0} \u043A\u0412\u0442',
                    'unitPattern-count-other': '{0} \u043A\u0412\u0442'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} \u0412\u0442',
                    'unitPattern-count-few': '{0} \u0412\u0442',
                    'unitPattern-count-many': '{0} \u0412\u0442',
                    'unitPattern-count-other': '{0} \u0412\u0442'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-few': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-many': '{0} \u0433\u041F\u0430',
                    'unitPattern-count-other': '{0} \u0433\u041F\u0430'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} \u0434\u044E\u0439\u043C \u0440\u0442. \u0441\u0442.',
                    'unitPattern-count-few': '{0} \u0434\u044E\u0439\u043C\u0438 \u0440\u0442. \u0441\u0442.',
                    'unitPattern-count-many': '{0} \u0434\u044E\u0439\u043C\u0456\u0432 \u0440\u0442. \u0441\u0442.',
                    'unitPattern-count-other': '{0} \u0434\u044E\u0439\u043C\u0430 \u0440\u0442. \u0441\u0442.'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} \u043C\u0431\u0430\u0440',
                    'unitPattern-count-few': '{0} \u043C\u0431\u0430\u0440\u0438',
                    'unitPattern-count-many': '{0} \u043C\u0431\u0430\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u043C\u0431\u0430\u0440\u0430'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} \u043B',
                    'unitPattern-count-few': '{0} \u043B',
                    'unitPattern-count-many': '{0} \u043B',
                    'unitPattern-count-other': '{0} \u043B'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F\u00B3',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456\u00B3',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C\u00B3',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-few': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B3',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-few': '{0}\u00B0F',
                    'unitPattern-count-many': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u00B0C',
                    'unitPattern-count-few': '{0}\u00B0C',
                    'unitPattern-count-many': '{0}\u00B0C',
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F/\u0433\u043E\u0434',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456/\u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C/\u0433\u043E\u0434',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456/\u0433\u043E\u0434'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} \u043C/\u0441',
                    'unitPattern-count-few': '{0} \u043C/\u0441',
                    'unitPattern-count-many': '{0} \u043C/\u0441',
                    'unitPattern-count-other': '{0} \u043C/\u0441'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} \u043A\u043C/\u0433\u043E\u0434',
                    'unitPattern-count-few': '{0} \u043A\u043C/\u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u043A\u043C/\u0433\u043E\u0434',
                    'unitPattern-count-other': '{0} \u043A\u043C/\u0433\u043E\u0434'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} \u0445\u0432',
                    'unitPattern-count-few': '{0} \u0445\u0432',
                    'unitPattern-count-many': '{0} \u0445\u0432',
                    'unitPattern-count-other': '{0} \u0445\u0432'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} \u043C\u0441',
                    'unitPattern-count-few': '{0} \u043C\u0441',
                    'unitPattern-count-many': '{0} \u043C\u0441',
                    'unitPattern-count-other': '{0} \u043C\u0441'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-few': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-many': '{0} \u0433\u043E\u0434',
                    'unitPattern-count-other': '{0} \u0433\u043E\u0434'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} \u0434\u043D.',
                    'unitPattern-count-few': '{0} \u0434\u043D.',
                    'unitPattern-count-many': '{0} \u0434\u043D.',
                    'unitPattern-count-other': '{0} \u0434\u043D.'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} \u043C\u0438\u043B\u044F\u00B2',
                    'unitPattern-count-few': '{0} \u043C\u0438\u043B\u0456\u00B2',
                    'unitPattern-count-many': '{0} \u043C\u0438\u043B\u044C\u00B2',
                    'unitPattern-count-other': '{0} \u043C\u0438\u043B\u0456\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} \u043C\u00B2',
                    'unitPattern-count-few': '{0} \u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043C\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-few': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-many': '{0} \u043A\u043C\u00B2',
                    'unitPattern-count-other': '{0} \u043A\u043C\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-many': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} \u043C\u0456\u043D.',
                    'unitPattern-count-few': '{0} \u043C\u0456\u043D.',
                    'unitPattern-count-many': '{0} \u043C\u0456\u043D.',
                    'unitPattern-count-other': '{0} \u043C\u0456\u043D.'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} \u0441\u0435\u043A.',
                    'unitPattern-count-few': '{0} \u0441\u0435\u043A.',
                    'unitPattern-count-many': '{0} \u0441\u0435\u043A.',
                    'unitPattern-count-other': '{0} \u0441\u0435\u043A.'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-few': '{0}\u00B0',
                    'unitPattern-count-many': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} \u0430\u043A\u0440',
                    'unitPattern-count-few': '{0} \u0430\u043A\u0440\u0438',
                    'unitPattern-count-many': '{0} \u0430\u043A\u0440\u0456\u0432',
                    'unitPattern-count-other': '{0} \u0430\u043A\u0440\u0430'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} \u0433\u0430',
                    'unitPattern-count-few': '{0} \u0433\u0430',
                    'unitPattern-count-many': '{0} \u0433\u0430',
                    'unitPattern-count-other': '{0} \u0433\u0430'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} \u0444\u0443\u0442\u00B2',
                    'unitPattern-count-few': '{0} \u0444\u0443\u0442\u0438\u00B2',
                    'unitPattern-count-many': '{0} \u0444\u0443\u0442\u0456\u0432\u00B2',
                    'unitPattern-count-other': '{0} \u0444\u0443\u0442\u0430\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} \u0441',
                    'unitPattern-count-few': '{0} \u0441',
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
