/* AstroDate
 * Language: sl
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
        AstroDate.lang('sl', {
            'durationUnit-type-ms': {
                'durationUnitPattern': 'm.ss'
            },
            'durationUnit-type-hms': {
                'durationUnitPattern': 'h.mm.ss'
            },
            'durationUnit-type-hm': {
                'durationUnitPattern': 'h.mm'
            },
            'narrow': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-two': '{0} oz',
                    'unitPattern-count-few': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-two': '{0} kg',
                    'unitPattern-count-few': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-two': '{0} g',
                    'unitPattern-count-few': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-two': '{0} yd',
                    'unitPattern-count-few': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-two': '{0} pm',
                    'unitPattern-count-few': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-two': '{0} mm',
                    'unitPattern-count-few': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-two': '{0} mi',
                    'unitPattern-count-few': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-two': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ly',
                    'unitPattern-count-two': '{0} sv. l.',
                    'unitPattern-count-few': '{0} sv. l.',
                    'unitPattern-count-other': '{0} sv. l.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-two': '{0} km',
                    'unitPattern-count-few': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-two': '{0} in',
                    'unitPattern-count-few': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-two': '{0} ft',
                    'unitPattern-count-few': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-two': '{0} cm',
                    'unitPattern-count-few': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-two': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} t',
                    'unitPattern-count-two': '{0} t',
                    'unitPattern-count-few': '{0} t',
                    'unitPattern-count-other': '{0} t'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-two': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-two': '{0} lb',
                    'unitPattern-count-few': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} KM',
                    'unitPattern-count-two': '{0} KM',
                    'unitPattern-count-few': '{0} KM',
                    'unitPattern-count-other': '{0} hp'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-two': '{0} kW',
                    'unitPattern-count-few': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-two': '{0} W',
                    'unitPattern-count-few': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-two': '{0} hPa',
                    'unitPattern-count-few': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-two': '{0} inHg',
                    'unitPattern-count-few': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mbar',
                    'unitPattern-count-two': '{0} mbar',
                    'unitPattern-count-few': '{0} mbar',
                    'unitPattern-count-other': '{0} mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-two': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-two': '{0} mi\u00B3',
                    'unitPattern-count-few': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-two': '{0} km\u00B3',
                    'unitPattern-count-few': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-two': '{0} \u00B0F',
                    'unitPattern-count-few': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-two': '{0} \u00B0',
                    'unitPattern-count-few': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-two': '{0} mi/h',
                    'unitPattern-count-few': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-two': '{0} m/s',
                    'unitPattern-count-few': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-two': '{0} km/h',
                    'unitPattern-count-few': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-two': '{0} min',
                    'unitPattern-count-few': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-two': '{0} ms',
                    'unitPattern-count-few': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-two': '{0} h',
                    'unitPattern-count-few': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} d',
                    'unitPattern-count-two': '{0} d',
                    'unitPattern-count-few': '{0} d',
                    'unitPattern-count-other': '{0} d'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-two': '{0} mi\u00B2',
                    'unitPattern-count-few': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-two': '{0} m\u00B2',
                    'unitPattern-count-few': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-two': '{0} km\u00B2',
                    'unitPattern-count-few': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-two': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-two': '{0}\u2032',
                    'unitPattern-count-few': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-two': '{0}\u2033',
                    'unitPattern-count-few': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-two': '{0} \u00B0',
                    'unitPattern-count-few': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} jut.',
                    'unitPattern-count-two': '{0} jut.',
                    'unitPattern-count-few': '{0} jut.',
                    'unitPattern-count-other': '{0} jut.'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-two': '{0} ha',
                    'unitPattern-count-few': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-two': '{0} ft\u00B2',
                    'unitPattern-count-few': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} s',
                    'unitPattern-count-two': '{0} s',
                    'unitPattern-count-few': '{0} s',
                    'unitPattern-count-other': '{0} s'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'avg.',
                                '7': 'jul.',
                                '6': 'jun.',
                                '5': 'maj',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'sep.',
                                '1': 'jan.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'a',
                                '7': 'j',
                                '6': 'j',
                                '5': 'm',
                                '12': 'd',
                                '11': 'n',
                                '10': 'o',
                                '9': 's',
                                '1': 'j',
                                '2': 'f',
                                '3': 'm',
                                '4': 'a'
                            },
                            'wide': {
                                '8': 'avgust',
                                '7': 'julij',
                                '6': 'junij',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marec',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'avg',
                                '7': 'jul',
                                '6': 'jun',
                                '5': 'maj',
                                '12': 'dec',
                                '11': 'nov',
                                '10': 'okt',
                                '9': 'sep',
                                '1': 'jan',
                                '2': 'feb',
                                '3': 'mar',
                                '4': 'apr'
                            },
                            'narrow': {
                                '8': 'a',
                                '7': 'j',
                                '6': 'j',
                                '5': 'm',
                                '12': 'd',
                                '11': 'n',
                                '10': 'o',
                                '9': 's',
                                '1': 'j',
                                '2': 'f',
                                '3': 'm',
                                '4': 'a'
                            },
                            'wide': {
                                '8': 'avgust',
                                '7': 'julij',
                                '6': 'junij',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marec',
                                '4': 'april'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'ned.',
                                'mon': 'pon.',
                                'tue': 'tor.',
                                'wed': 'sre.',
                                'thu': '\u010Det.',
                                'fri': 'pet.',
                                'sat': 'sob.'
                            },
                            'narrow': {
                                'sun': 'n',
                                'mon': 'p',
                                'tue': 't',
                                'wed': 's',
                                'thu': '\u010D',
                                'fri': 'p',
                                'sat': 's'
                            },
                            'short': {
                                'sun': 'ned.',
                                'mon': 'pon.',
                                'tue': 'tor.',
                                'wed': 'sre.',
                                'thu': '\u010Det.',
                                'fri': 'pet.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'nedelja',
                                'mon': 'ponedeljek',
                                'tue': 'torek',
                                'wed': 'sreda',
                                'thu': '\u010Detrtek',
                                'fri': 'petek',
                                'sat': 'sobota'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'ned',
                                'mon': 'pon',
                                'tue': 'tor',
                                'wed': 'sre',
                                'thu': '\u010Det',
                                'fri': 'pet',
                                'sat': 'sob'
                            },
                            'narrow': {
                                'sun': 'n',
                                'mon': 'p',
                                'tue': 't',
                                'wed': 's',
                                'thu': '\u010D',
                                'fri': 'p',
                                'sat': 's'
                            },
                            'short': {
                                'sun': 'ned.',
                                'mon': 'pon.',
                                'tue': 'tor.',
                                'wed': 'sre.',
                                'thu': '\u010Det.',
                                'fri': 'pet.',
                                'sat': 'sob.'
                            },
                            'wide': {
                                'sun': 'nedelja',
                                'mon': 'ponedeljek',
                                'tue': 'torek',
                                'wed': 'sreda',
                                'thu': '\u010Detrtek',
                                'fri': 'petek',
                                'sat': 'sobota'
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
                                '1': '1. \u010Detrtletje',
                                '2': '2. \u010Detrtletje',
                                '3': '3. \u010Detrtletje',
                                '4': '4. \u010Detrtletje'
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
                                '1': '1. \u010Detrtletje',
                                '2': '2. \u010Detrtletje',
                                '3': '3. \u010Detrtletje',
                                '4': '4. \u010Detrtletje'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'narrow': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'wide': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'narrow': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            },
                            'wide': {
                                'am': 'dop.',
                                'pm': 'pop.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'pred na\u0161im \u0161tetjem',
                            '0-alt-variant': 'BCE',
                            '1': 'na\u0161e \u0161tetje',
                            '1-alt-variant': 'po n. \u0161t.'
                        },
                        'eraAbbr': {
                            '0': 'pr. n. \u0161t.',
                            '0-alt-variant': 'BCE',
                            '1': 'po Kr.',
                            '1-alt-variant': 'po n. \u0161t.'
                        },
                        'eraNarrow': {
                            '0': 'pr. n. \u0161t.',
                            '0-alt-variant': 'BCE',
                            '1': 'po Kr.',
                            '1-alt-variant': 'po n. \u0161t.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, dd. MMMM y',
                        'long': 'dd. MMMM y',
                        'medium': 'd. MMM y',
                        'short': 'd. MM. yy'
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
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d. MMM y',
                            'EHms': 'E HH.mm.ss',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E HH.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E, d.',
                            'd': 'd',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'd. MMM y G',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH',
                            'h': 'h a',
                            'GyMMMEd': 'E, d. MMM y G',
                            'Gy': 'y G',
                            'GyM': 'M/y G',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'd. M.',
                            'MEd': 'E, d. MM.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E, d. MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'd. M. y',
                            'yMEd': 'E, d. M. y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd. MMM y'
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
                                'd': 'E, d. \u2013 E, d. MMM',
                                'M': 'E, d. MMM \u2013 E, d. MMM'
                            },
                            'MMMd': {
                                'd': 'd.\u2013d. MMM',
                                'M': 'd. MMM \u2013 d. MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E, d. \u2013 E, d. M.',
                                'M': 'E, d. M. \u2013 E, d. M.'
                            },
                            'Md': {
                                'd': 'd. \u2013 d. M.',
                                'M': 'd. M. \u2013 d. M.'
                            },
                            'M': {
                                'M': 'M.\u2013M.'
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
                                'M': 'M.\u2013M. y',
                                'y': 'M. y \u2013 M. y'
                            },
                            'yMd': {
                                'd': 'd. M. y \u2013 d. M. y',
                                'M': 'd. M. \u2013 d. M. y',
                                'y': 'd. M. y \u2013 d. M. y'
                            },
                            'yMEd': {
                                'd': 'E, d. \u2013 E, d. M. y',
                                'M': 'E, d. M. \u2013 E, d. M. y',
                                'y': 'E, d. M. y \u2013 E, d. M. y'
                            },
                            'yMMM': {
                                'M': 'MMM \u2013 MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.\u2013d. MMM y',
                                'M': 'd. MMM \u2013 d. MMM y',
                                'y': 'd. MMM y \u2013 d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. MMM \u2013 E, d. MMM y',
                                'M': 'E, d. MMM \u2013 E, d. MMM y',
                                'y': 'E, d. MMM y \u2013 E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM\u2013MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH.mm\u2013HH.mm v',
                                'm': 'HH.mm\u2013HH.mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm\u2013h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm\u2013HH.mm',
                                'm': 'HH.mm\u2013HH.mm'
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
                                'd': 'd.\u2013d.'
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
                            'exemplarCity': 'Saipan'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'Rarotonga'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'Port Moresby'
                        },
                        'Ponape': {
                            'exemplarCity': 'Pohnpei'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Pitcairn'
                        },
                        'Palau': {
                            'exemplarCity': 'Palau'
                        },
                        'Auckland': {
                            'exemplarCity': 'Auckland'
                        },
                        'Apia': {
                            'exemplarCity': 'Apia'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Funafuti'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Galapagos'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambier'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'Guadalcanal'
                        },
                        'Guam': {
                            'exemplarCity': 'Guam'
                        },
                        'Honolulu': {
                            'exemplarCity': 'Honolulu'
                        },
                        'Wallis': {
                            'exemplarCity': 'Wallis'
                        },
                        'Wake': {
                            'exemplarCity': 'Wake'
                        },
                        'Truk': {
                            'exemplarCity': 'Chuuk'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'Tongatapu'
                        },
                        'Tarawa': {
                            'exemplarCity': 'Tarawa'
                        },
                        'Tahiti': {
                            'exemplarCity': 'Tahiti'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Kiritimati'
                        },
                        'Johnston': {
                            'exemplarCity': 'Johnston'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham'
                        },
                        'Easter': {
                            'exemplarCity': 'Velikono\u010Dni otok'
                        },
                        'Efate': {
                            'exemplarCity': 'Efate'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Enderbury'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Fakaofo'
                        },
                        'Fiji': {
                            'exemplarCity': 'Fid\u017Ei'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Kosrae'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Kwajalein'
                        },
                        'Majuro': {
                            'exemplarCity': 'Majuro'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Marquesas'
                        },
                        'Midway': {
                            'exemplarCity': 'Midway'
                        },
                        'Nauru': {
                            'exemplarCity': 'Nauru'
                        },
                        'Niue': {
                            'exemplarCity': 'Niue'
                        },
                        'Norfolk': {
                            'exemplarCity': 'Norfolk'
                        },
                        'Noumea': {
                            'exemplarCity': 'Noumea'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'Pago Pago'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'Lindeman'
                        },
                        'Hobart': {
                            'exemplarCity': 'Hobart'
                        },
                        'Eucla': {
                            'exemplarCity': 'Eucla'
                        },
                        'Darwin': {
                            'exemplarCity': 'Darwin'
                        },
                        'Sydney': {
                            'exemplarCity': 'Sydney'
                        },
                        'Perth': {
                            'exemplarCity': 'Perth'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Melbourne'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Lord Howe'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Adelaide'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Brisbane'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Broken Hill'
                        },
                        'Currie': {
                            'exemplarCity': 'Currie'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Maldivi'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reunion'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Mauritius'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Bo\u017Ei\u010Dni otok'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokosovi otoki'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komori'
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
                            'exemplarCity': 'neznano'
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
                            'exemplarCity': 'Rothera'
                        },
                        'Palmer': {
                            'exemplarCity': 'Palmer'
                        },
                        'McMurdo': {
                            'exemplarCity': 'McMurdo'
                        },
                        'Vostok': {
                            'exemplarCity': 'Vostok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Ju\u017Eni te\u010Daj'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d\u2019Urville'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Macquarie'
                        },
                        'Mawson': {
                            'exemplarCity': 'Mawson'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Longyearbyen'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'Toronto'
                        },
                        'Tijuana': {
                            'exemplarCity': 'Tijuana'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'Thunder Bay'
                        },
                        'Thule': {
                            'exemplarCity': 'Thule'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Tegucigalpa'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Swift Current'
                        },
                        'Chicago': {
                            'exemplarCity': 'Chicago'
                        },
                        'Cayman': {
                            'exemplarCity': 'Kajman'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Cayenne'
                        },
                        'Catamarca': {
                            'exemplarCity': 'Catamarca'
                        },
                        'Caracas': {
                            'exemplarCity': 'Caracas'
                        },
                        'Cancun': {
                            'exemplarCity': 'Cancun'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'Campo Grande'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Cambridge Bay'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Buenos Aires'
                        },
                        'Boise': {
                            'exemplarCity': 'Boise'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Asunci\u00F3n'
                        },
                        'Aruba': {
                            'exemplarCity': 'Aruba'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Rio Gallegos'
                            },
                            'San_Juan': {
                                'exemplarCity': 'San Juan'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ushuaia'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'La Rioja'
                            },
                            'San_Luis': {
                                'exemplarCity': 'San Luis'
                            },
                            'Salta': {
                                'exemplarCity': 'Salta'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Tucuman'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Araguaina'
                        },
                        'Antigua': {
                            'exemplarCity': 'Antigua'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Anguilla'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Anchorage'
                        },
                        'Adak': {
                            'exemplarCity': 'Adak'
                        },
                        'Bahia': {
                            'exemplarCity': 'Bahia'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bahia Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Belem'
                        },
                        'Belize': {
                            'exemplarCity': 'Belize'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Blanc-Sablon'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Boa Vista'
                        },
                        'Bogota': {
                            'exemplarCity': 'Bogota'
                        },
                        'Curacao': {
                            'exemplarCity': 'Cura\u00E7ao'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'Danmarkshavn'
                        },
                        'Dawson': {
                            'exemplarCity': 'Dawson'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'Dawson Creek'
                        },
                        'Denver': {
                            'exemplarCity': 'Denver'
                        },
                        'Detroit': {
                            'exemplarCity': 'Detroit'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Hermosillo'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Vincennes, Indiana'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Petersburg, Indiana'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Tell City, Indiana'
                            },
                            'Knox': {
                                'exemplarCity': 'Knox, Indiana'
                            },
                            'Winamac': {
                                'exemplarCity': 'Winamac, Indiana'
                            },
                            'Marengo': {
                                'exemplarCity': 'Marengo, Indiana'
                            },
                            'Vevay': {
                                'exemplarCity': 'Vevay, Indiana'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Indianapolis'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Inuvik'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Iqaluit'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Jamajka'
                        },
                        'Jujuy': {
                            'exemplarCity': 'Jujuy'
                        },
                        'Juneau': {
                            'exemplarCity': 'Juneau'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'Yellowknife'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Yakutat'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Winnipeg'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Whitehorse'
                        },
                        'Vancouver': {
                            'exemplarCity': 'Vancouver'
                        },
                        'Tortola': {
                            'exemplarCity': 'Tortola'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'Kralendijk'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'Monticello, Kentucky'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Havana'
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Gvajana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Gvatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Guadeloupe'
                        },
                        'Grenada': {
                            'exemplarCity': 'Grenada'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'Grand Turk'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Goose Bay'
                        },
                        'Godthab': {
                            'exemplarCity': 'Nuuk'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'Glace Bay'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'Fortaleza'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'Salvador'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Eirunepe'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Edmonton'
                        },
                        'Dominica': {
                            'exemplarCity': 'Dominika'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Chihuahua'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Atikokan'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Kordova'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Kostarika'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiaba'
                        },
                        'La_Paz': {
                            'exemplarCity': 'La Paz'
                        },
                        'Lima': {
                            'exemplarCity': 'Lima'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Los Angeles'
                        },
                        'Louisville': {
                            'exemplarCity': 'Louisville'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Lower Prince\'s Quarter'
                        },
                        'Maceio': {
                            'exemplarCity': 'Maceio'
                        },
                        'Managua': {
                            'exemplarCity': 'Managua'
                        },
                        'Manaus': {
                            'exemplarCity': 'Manaus'
                        },
                        'Marigot': {
                            'exemplarCity': 'Marigot'
                        },
                        'Martinique': {
                            'exemplarCity': 'Martinik'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Matamoros'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Mazatlan'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'Merida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Ciudad Mexico'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Miquelon'
                        },
                        'Moncton': {
                            'exemplarCity': 'Moncton'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Monterrey'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Montevideo'
                        },
                        'Montreal': {
                            'exemplarCity': 'Montreal'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Montserrat'
                        },
                        'Nassau': {
                            'exemplarCity': 'Nassau'
                        },
                        'New_York': {
                            'exemplarCity': 'New York'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Nipigon'
                        },
                        'Nome': {
                            'exemplarCity': 'Nome'
                        },
                        'Noronha': {
                            'exemplarCity': 'Noronha'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Beulah, North Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Severna Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Severna Dakota'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Ojinaga'
                        },
                        'Panama': {
                            'exemplarCity': 'Panama'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Pangnirtung'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Paramaribo'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Phoenix'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Port-au-Prince'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Port of Spain'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Porto Velho'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Portoriko'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Rainy River'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Rankin Inlet'
                        },
                        'Recife': {
                            'exemplarCity': 'Recife'
                        },
                        'Regina': {
                            'exemplarCity': 'Regina'
                        },
                        'Resolute': {
                            'exemplarCity': 'Resolute'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Rio Branco'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Santa Isabel'
                        },
                        'Santarem': {
                            'exemplarCity': 'Santarem'
                        },
                        'Santiago': {
                            'exemplarCity': 'Santiago'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'Sao Paulo'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Ittoqqortoormiit'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Shiprock'
                        },
                        'Sitka': {
                            'exemplarCity': 'Sitka'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'Saint Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'St. Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'St. Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'St. Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'St. Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Ju\u017Ena Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'St. Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azori'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudi'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanarski otoki'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Zelenortski otoki'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Faroe'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madeira'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'Moskva'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monako'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Mariehamn'
                        },
                        'Malta': {
                            'exemplarCity': 'Malta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madrid'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luksemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'britanski poletni \u010Das'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lizbona'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kijev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kaliningrad'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Istanbul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Otok Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukare\u0161ta'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruselj'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrade'
                        },
                        'Athens': {
                            'exemplarCity': 'Atene'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andora'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amsterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sofija'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Talin'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'U\u017Egorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zurich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporo\u017Eje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Var\u0161ava'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilna'
                        },
                        'Vienna': {
                            'exemplarCity': 'Dunaj'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikan'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'Rim'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Praga'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Pariz'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'irski poletni \u010Das'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'K\u00F6benhavn'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budimpe\u0161ta'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Libreville'
                        },
                        'Lagos': {
                            'exemplarCity': 'Lagos'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Kin\u0161asa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Kartum'
                        },
                        'Kampala': {
                            'exemplarCity': 'Kampala'
                        },
                        'Juba': {
                            'exemplarCity': 'Juba'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Johannesburg'
                        },
                        'Harare': {
                            'exemplarCity': 'Harare'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Gaborone'
                        },
                        'Freetown': {
                            'exemplarCity': 'Freetown'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'El Aaiun'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'D\u017Eibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es Salaam'
                        },
                        'Dakar': {
                            'exemplarCity': 'Dakar'
                        },
                        'Banjul': {
                            'exemplarCity': 'Banjul'
                        },
                        'Bangui': {
                            'exemplarCity': 'Bangui'
                        },
                        'Bamako': {
                            'exemplarCity': 'Bamako'
                        },
                        'Asmera': {
                            'exemplarCity': 'Asmara'
                        },
                        'Malabo': {
                            'exemplarCity': 'Malabo'
                        },
                        'Maputo': {
                            'exemplarCity': 'Maputo'
                        },
                        'Maseru': {
                            'exemplarCity': 'Maseru'
                        },
                        'Mbabane': {
                            'exemplarCity': 'Mbabane'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'Mogadi\u0161u'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ndjamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'Tunis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Tripoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'S\u00E3o Tom\u00E9'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto-Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Ouagadougou'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nouakchott'
                        },
                        'Niamey': {
                            'exemplarCity': 'Niamey'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Lusaka'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Lubumba\u0161i'
                        },
                        'Luanda': {
                            'exemplarCity': 'Luanda'
                        },
                        'Lome': {
                            'exemplarCity': 'Lome'
                        },
                        'Conakry': {
                            'exemplarCity': 'Conakry'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Ceuta'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Casablanca'
                        },
                        'Cairo': {
                            'exemplarCity': 'Kairo'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Bujumbura'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Brazzaville'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Blantyre'
                        },
                        'Bissau': {
                            'exemplarCity': 'Bissau'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Abid\u017Ean'
                        },
                        'Accra': {
                            'exemplarCity': 'Akra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Adis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Al\u017Eir'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0160angaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho\u0161iminh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rijad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangun'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kizlorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pjongjang'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom Penh'
                        },
                        'Oral': {
                            'exemplarCity': 'Uralsk'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novosibirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u010Cong\u010Ding'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damask'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Daka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubaj'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Du\u0161anbe'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebron'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hongkong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'D\u017Eakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urum\u010Di'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientiane'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Erevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teheran'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Ta\u0161kent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tajpej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapur'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'A\u0161gabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aktobe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadir'
                        },
                        'Amman': {
                            'exemplarCity': 'Aman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almati'
                        },
                        'Aden': {
                            'exemplarCity': 'Aden'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahrajn'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Bejrut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bi\u0161kek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunej'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u010Cojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kam\u010Datka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Kara\u010Di'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Ka\u0161gar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handiga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnojarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuvajt'
                        },
                        'Macau': {
                            'exemplarCity': 'Macao'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makasar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Mu\u0161kat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nikozija'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelavski \u010Das'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tad\u017Eikistanski \u010Das'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Tajpejski \u010Das',
                            'standard': 'Tajpejski standardni \u010Das',
                            'daylight': 'Tajpejski poletni \u010Das'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitijski \u010Das'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u010Cas: Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamski \u010Das'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Ju\u017Enogeorgijski \u010Das'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonovooto\u0161ki \u010Das'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singapurski standardni \u010Das'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Sej\u0161elski \u010Das'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoanski \u010Das',
                            'standard': 'Samoanski standardni \u010Das',
                            'daylight': 'Samoanski poletni \u010Das'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samarski \u010Das',
                            'standard': 'Samarski standardni \u010Das',
                            'daylight': 'Samarski poletni \u010Das'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sahalinski \u010Das',
                            'standard': 'Sahalinski standardni \u010Das',
                            'daylight': 'Sahalinski poletni \u010Das'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotherski \u010Das'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunionski \u010Das'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantski \u010Das',
                            'standard': 'Atlantski standardni \u010Das',
                            'daylight': 'Atlantski poletni \u010Das'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Centralni \u010Das',
                            'standard': 'Centralni standardni \u010Das',
                            'daylight': 'Centralni poletni \u010Das'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonski \u010Das',
                            'standard': 'Amazonski standardni \u010Das',
                            'daylight': 'Amazonski poletni \u010Das'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alja\u0161ki \u010Das',
                            'standard': 'Alja\u0161ki standardni \u010Das',
                            'daylight': 'Alja\u0161ki poletni \u010Das'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Zahodnoafri\u0161ki \u010Das',
                            'standard': 'Zahodnoafri\u0161ki standardni \u010Das',
                            'daylight': 'Zahodnoafri\u0161ki poletni \u010Das'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Ju\u017Enoafri\u0161ki \u010Das'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Vzhodnoafri\u0161ki \u010Das'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Centralnoafri\u0161ki \u010Das'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistanski \u010Das'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Vzhodni \u010Das',
                            'standard': 'Vzhodni standardni \u010Das',
                            'daylight': 'Vzhodni poletni \u010Das'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Gorski \u010Das',
                            'standard': 'Gorski standardni \u010Das',
                            'daylight': 'Gorski poletni \u010Das'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Pacifi\u0161ki \u010Das',
                            'standard': 'Pacifi\u0161ki standardni \u010Das',
                            'daylight': 'Pacifi\u0161ki poletni \u010Das'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadirski \u010Das',
                            'standard': 'Anadirski standardni \u010Das',
                            'daylight': 'Anadirski poletni \u010Das'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabski \u010Das',
                            'standard': 'Arabski standardni \u010Das',
                            'daylight': 'Arabski poletni \u010Das'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentinski \u010Das',
                            'standard': 'Argentinski standardni \u010Das',
                            'daylight': 'Argentinski poletni \u010Das'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Argentinski zahodni \u010Das',
                            'standard': 'Argentinski zahodni standardni \u010Das',
                            'daylight': 'Argentinski zahodni poletni \u010Das'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenski \u010Das',
                            'standard': 'Armenski standardni \u010Das',
                            'daylight': 'Armenski poletni \u010Das'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kitajski \u010Das',
                            'standard': 'Kitajski standardni \u010Das',
                            'daylight': 'Kitajski poletni \u010Das'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u010Cojbalsanski \u010Das',
                            'standard': '\u010Cojbalsanski standardni \u010Das',
                            'daylight': '\u010Cojbalsanski poletni \u010Das'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Bo\u017Ei\u010Dnooto\u0161ki \u010Das'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u010Cas: Kokosovi otoki'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbijski \u010Das',
                            'standard': 'Kolumbijski standardni \u010Das',
                            'daylight': 'Kolumbijski poletni \u010Das'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookovooto\u0161ki \u010Das',
                            'standard': 'Cookovooto\u0161ki standardni \u010Das',
                            'daylight': 'Cookovooto\u0161ki srednjepoletni \u010Das'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubanski \u010Das',
                            'standard': 'Kubanski standardni \u010Das',
                            'daylight': 'Kubanski poletni \u010Das'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u010Cas: Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u010Cas: Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Vzhodnotimorski \u010Das'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u010Cas: Velikono\u010Dni otok',
                            'standard': 'Standardni \u010Das: Velikono\u010Dni otok',
                            'daylight': 'Poletni \u010Das: Velikono\u010Dni otok'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ekvadorski \u010Das'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Srednjeevropski \u010Das',
                            'standard': 'Srednjeevropski standardni \u010Das',
                            'daylight': 'Srednjeevropski poletni \u010Das'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Vzhodnoevropski \u010Das',
                            'standard': 'Vzhodnoevropski standardni \u010Das',
                            'daylight': 'Vzhodnoevropski poletni \u010Das'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Zahodnoevropski \u010Das',
                            'standard': 'Zahodnoevropski standardni \u010Das',
                            'daylight': 'Zahodnoevropski poletni \u010Das'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indijski standardni \u010Das'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongovski \u010Das',
                            'standard': 'Tongovski standardni \u010Das',
                            'daylight': 'Tongovski poletni \u010Das'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u010Cas: Otok Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistanski \u010Das',
                            'standard': 'Turkmenistanski standardni \u010Das',
                            'daylight': 'Turkmenistanski poletni \u010Das'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalujski \u010Das'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Urugvajski \u010Das',
                            'standard': 'Urugvajski standardni \u010Das',
                            'daylight': 'Urugvajski poletni \u010Das'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistanski \u010Das',
                            'standard': 'Uzbekistanski standardni \u010Das',
                            'daylight': 'Uzbekistanski poletni \u010Das'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatujski \u010Das',
                            'standard': 'Vanuatujski standardni \u010Das',
                            'daylight': 'Vanuatujski poletni \u010Das'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinbur\u0161ki \u010Das',
                            'standard': 'Jekaterinbur\u0161ki standardni \u010Das',
                            'daylight': 'Jekaterinbur\u0161ki poletni \u010Das'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutski \u010Das',
                            'standard': 'Jakutski standardni \u010Das',
                            'daylight': 'Jakutski poletni \u010Das'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u010Cas: Wallis in Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u010Cas: Otok Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u010Cas: Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgograjski \u010Das',
                            'standard': 'Volgograjski standardni \u010Das',
                            'daylight': 'Volgograjski poletni \u010Das'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivosto\u0161ki \u010Das',
                            'standard': 'Vladivosto\u0161ki standardni \u010Das',
                            'daylight': 'Vladivosto\u0161ki poletni \u010Das'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelski \u010Das'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdski \u010Das',
                            'standard': 'Hovdski standardni \u010Das',
                            'daylight': 'Hovdski poletni \u010Das'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkon\u0161ki \u010Das',
                            'standard': 'Hongkon\u0161ki standardni \u010Das',
                            'daylight': 'Hongkon\u0161ki poletni \u010Das'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havajski aleutski \u010Das',
                            'standard': 'Havajski aleutski standardni \u010Das',
                            'daylight': 'Havajski aleutski poletni \u010Das'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Gvajanski \u010Das'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Zalivski standardni \u010Das'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Zahodnogrenlandski \u010Das',
                            'standard': 'Zahodnogrenlandski standardni \u010Das',
                            'daylight': 'Zahodnogrenlandski poletni \u010Das'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Vzhodnogrenlandski \u010Das',
                            'standard': 'Vzhodnogrenlandski standardni \u010Das',
                            'daylight': 'Vzhodnogrenlandski poletni \u010Das'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwi\u0161ki srednji \u010Das'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u010Cas: Gilbertovi otoki'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gruzijski \u010Das',
                            'standard': 'Gruzijski standardni \u010Das',
                            'daylight': 'Gruzijski poletni \u010Das'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambierski \u010Das'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapa\u0161ki \u010Das'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francoski ju\u017Eni in antarkti\u010Dni \u010Das'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u010Cas: Francoska Gvajana'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fid\u017Eijski \u010Das',
                            'standard': 'Fid\u017Eijski standardni \u010Das',
                            'daylight': 'Fid\u017Eijski poletni \u010Das'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u010Cas: Falklandsko oto\u010Dje',
                            'standard': 'Standardni \u010Das: Falklandsko oto\u010Dje',
                            'daylight': 'Poletni \u010Das: Falklandsko oto\u010Dje'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Avstralski centralni \u010Das',
                            'standard': 'Avstralski centralni standardni \u010Das',
                            'daylight': 'Avstralski centralni poletni \u010Das'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Avstralski centralni zahodni \u010Das',
                            'standard': 'Avstralski centralni zahodni standardni \u010Das',
                            'daylight': 'Avstralski centralni zahodni poletni \u010Das'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Avstralski vzhodni \u010Das',
                            'standard': 'Avstralski vzhodni standardni \u010Das',
                            'daylight': 'Avstralski vzhodni poletni \u010Das'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Avstralski zahodni \u010Das',
                            'standard': 'Avstralski zahodni standardni \u010Das',
                            'daylight': 'Avstralski zahodni poletni \u010Das'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbajd\u017Eanski \u010Das',
                            'standard': 'Azerbajd\u017Eanski standardni \u010Das',
                            'daylight': 'Azerbajd\u017Eanski poletni \u010Das'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorski \u010Das',
                            'standard': 'Azorski standardni \u010Das',
                            'daylight': 'Azorski poletni \u010Das'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Banglade\u0161ki \u010Das',
                            'standard': 'Banglade\u0161ki standardni \u010Das',
                            'daylight': 'Banglade\u0161ki poletni \u010Das'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Butanski \u010Das'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivijski \u010Das'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilski \u010Das',
                            'standard': 'Brasilski standardni \u010Das',
                            'daylight': 'Brasilski poletni \u010Das'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunejski \u010Das'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdski \u010Das',
                            'standard': 'Kapverdski standardni \u010Das',
                            'daylight': 'Kapverdski poletni \u010Das'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u010Camorski standardni \u010Das'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u010Catamski \u010Das',
                            'standard': '\u010Catamski standardni \u010Das',
                            'daylight': '\u010Catamski poletni \u010Das'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u010Cilski \u010Das',
                            'standard': '\u010Cilski standardni \u010Das',
                            'daylight': '\u010Cilski poletni \u010Das'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indijskooceanski \u010Das'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokitajski \u010Das'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Indonezijski osrednji \u010Das'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Indonezijski vzhodni \u010Das'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Indonezijski zahodni \u010Das'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iranski \u010Das',
                            'standard': 'Iranski standardni \u010Das',
                            'daylight': 'Iranski poletni \u010Das'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkut\u0161ki \u010Das',
                            'standard': 'Irkut\u0161ki standardni \u010Das',
                            'daylight': 'Irkut\u0161ki poletni \u010Das'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraelski \u010Das',
                            'standard': 'Izraelski standardni \u010Das',
                            'daylight': 'Izraelski poletni \u010Das'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japonski \u010Das',
                            'standard': 'Japonski standardni \u010Das',
                            'daylight': 'Japonski poletni \u010Das'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kam\u010Datski \u010Das',
                            'standard': 'Petropavlovsk-Kam\u010Datski standardni \u010Das',
                            'daylight': 'Petropavlovsk-Kam\u010Datski poletni \u010Das'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Vzhodni kazahstanski \u010Das'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Zahodni kazahstanski \u010Das'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korejski \u010Das',
                            'standard': 'Korejski standardni \u010Das',
                            'daylight': 'Korejski poletni \u010Das'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraj\u0161ki \u010Das'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojar\u0161ki \u010Das',
                            'standard': 'Krasnojar\u0161ki standardni \u010Das',
                            'daylight': 'Krasnojar\u0161ki poletni \u010Das'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgizistanski \u010Das'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Ekvatorski otoki: \u010Cas'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u010Cas otoka Lord Howe',
                            'standard': 'Standardni \u010Das otoka Lord Howe',
                            'daylight': 'Poletni \u010Das otoka Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarieski \u010Das'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadanski \u010Das',
                            'standard': 'Magadanski standardni \u010Das',
                            'daylight': 'Magadanski poletni \u010Das'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malezijski \u010Das'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivski \u010Das'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u010Cas: Markizni otoki'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u010Cas: Marshallovi otoki'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauricijski \u010Das',
                            'standard': 'Mauricijski standardni \u010Das',
                            'daylight': 'Mauricijski poletni \u010Das'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsonski \u010Das'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulanbatorski \u010Das',
                            'standard': 'Ulanbatorski standardni \u010Das',
                            'daylight': 'Ulanbatorski poletni \u010Das'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovski \u010Das',
                            'standard': 'Moskovski standardni \u010Das',
                            'daylight': 'Moskovski poletni \u010Das'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mjanmarski \u010Das'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurujski \u010Das'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalski \u010Das'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Novokaledonijski \u010Das',
                            'standard': 'Novokaledonijski standardni \u010Das',
                            'daylight': 'Novokaledonijski poletni \u010Das'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Novozelandski \u010Das',
                            'standard': 'Novozelandski standardni \u010Das',
                            'daylight': 'Novozelandski poletni \u010Das'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Novofundlandski \u010Das',
                            'standard': 'Novofundlandski standardni \u010Das',
                            'daylight': 'Novofundlandski poletni \u010Das'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuejski \u010Das'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u010Cas: Norfol\u0161ki otoki'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noron\u0161ki \u010Das',
                            'standard': 'Fernando de Noron\u0161ki standardni \u010Das',
                            'daylight': 'Fernando de Noron\u0161ki poletni \u010Das'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibir\u0161ki \u010Das',
                            'standard': 'Novosibir\u0161ki standardni \u010Das',
                            'daylight': 'Novosibir\u0161ki poletni \u010Das'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Om\u0161ki \u010Das',
                            'standard': 'Om\u0161ki standardni \u010Das',
                            'daylight': 'Om\u0161ki poletni \u010Das'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistanski \u010Das',
                            'standard': 'Pakistanski standardni \u010Das',
                            'daylight': 'Pakistanski poletni \u010Das'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palavski \u010Das'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papuanski \u010Das'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paragvajski \u010Das',
                            'standard': 'Paragvajski standardni \u010Das',
                            'daylight': 'Paragvajski poletni \u010Das'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Perujski \u010Das',
                            'standard': 'Perujski standardni \u010Das',
                            'daylight': 'Perujski poletni \u010Das'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filipinski \u010Das',
                            'standard': 'Filipinski standardni \u010Das',
                            'daylight': 'Filipinski poletni \u010Das'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u010Cas: Oto\u010Dje Feniks'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u010Cas: Saint Pierre in Miquelon',
                            'standard': 'Standardni \u010Das: Saint Pierre in Miquelon',
                            'daylight': 'Poletni \u010Das: Saint Pierre in Miquelon'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairnski \u010Das'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapski \u010Das'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} \u010Das',
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
                'colNormalization': 'Normalizirano razvr\u0161\u010Danje',
                'collation': 'razvr\u0161\u010Danje',
                'colHiraganaQuaternary': 'Razvr\u0161\u010Danje kana',
                'colCaseLevel': 'Razvr\u0161\u010Danje, ob\u010Dutljivo na velike/male \u010Drke',
                'colCaseFirst': 'Razvr\u0161\u010Danje velike \u010Drke/male \u010Drke',
                'colBackwards': 'Razvr\u0161\u010Danje z obratnimi naglasi',
                'colAlternate': 'Razvr\u0161\u010Danje s prezrtimi znaki',
                'calendar': 'koledar',
                'x': 'Private-Use',
                'variableTop': 'Razvr\u0161\u010Danje kot simboli',
                'va': 'Razli\u010Dica obmo\u010Dnih nastavitev',
                'timezone': '\u010Casovni pas',
                'numbers': '\u0160tevilke',
                'currency': 'valuta',
                'colStrength': 'Mo\u010D razvr\u0161\u010Danja',
                'colNumeric': '\u0160tevilsko razvr\u0161\u010Danje'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Razvr\u0161\u010Danje kana lo\u010Deno',
                    'yes': 'Razvr\u0161\u010Danje kana razli\u010Dno'
                },
                'colCaseLevel': {
                    'no': 'Razvr\u0161\u010Danje ne glede na velike/male \u010Drke',
                    'yes': 'Razvr\u0161\u010Danje ob upo\u0161tevanju velikih/malih \u010Drk'
                },
                'colCaseFirst': {
                    'lower': 'Razvr\u0161\u010Danje malih \u010Drk najprej',
                    'no': 'Razvr\u0161\u010Danje v obi\u010Dajnem zaporedju velikih/malih \u010Drk',
                    'upper': 'Razvr\u0161\u010Danje velikih \u010Drk najprej'
                },
                'colStrength': {
                    'identical': 'Razvr\u0161\u010Danje vsega',
                    'primary': 'Razvr\u0161\u010Danje samo osnovnih \u010Drk',
                    'quaternary': 'Razvr\u0161\u010Danje po naglasih/velikih \u010Drkah/malih \u010Drkah/\u0161irini/kana',
                    'secondary': 'Razvr\u0161\u010Danje naglasov',
                    'tertiary': 'Razvr\u0161\u010Danje po naglasih/velikih \u010Drkah/malih \u010Drkah/\u0161irini'
                },
                'colNumeric': {
                    'no': 'Lo\u010Deno razvr\u0161\u010Danje \u0161tevilk',
                    'yes': '\u0160tevilsko razvr\u0161\u010Danje \u0161tevk'
                },
                'colNormalization': {
                    'no': 'Razvr\u0161\u010Danje brez normaliziranja',
                    'yes': 'Normalizirano razvr\u0161\u010Danje Unicode'
                },
                'calendar': {
                    'japanese': 'japonski koledar',
                    'iso8601': 'iso8601',
                    'coptic': 'Koptski koledar',
                    'dangi': 'dangi',
                    'ethiopic': 'Etiopski koledar',
                    'ethiopic-amete-alem': 'Etiopsko ametsko alemski koledar',
                    'gregorian': 'gregorijanski koledar',
                    'hebrew': 'hebrejski koledar',
                    'persian': 'Perzijski koledar',
                    'roc': 'kitajski dr\u017Eavni koledar',
                    'chinese': 'kitajski koledar',
                    'buddhist': 'budisti\u010Dni koledar',
                    'indian': 'indijanski koledar',
                    'islamic': 'islamski koledar',
                    'islamic-civil': 'islamski civilni koledar',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'razvr\u0161\u010Danje po abecedi',
                    'gb2312han': 'razvr\u0161\u010Danje po sistemu poenostavljene kitaj\u0161\u010Dine - GB2312',
                    'eor': 'eor',
                    'ducet': 'Privzeto razvr\u0161\u010Danje Unicode',
                    'dictionary': 'Vrstni red razvr\u0161\u010Danja v slovarju',
                    'big5han': 'razvr\u0161\u010Danje po sistemu tradicionalne kitaj\u0161\u010Dine - Big5',
                    'traditional': 'razvr\u0161\u010Danje po tradicionalnem sistemu',
                    'standard': 'Standardno razvr\u0161\u010Danje',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Razvr\u0161\u010Danje koren-poteza',
                    'stroke': 'razvr\u0161\u010Danje po zaporedju pisanja pismenk',
                    'searchjl': 'Iskanje po za\u010Detnem soglasniku hangul',
                    'search': 'Splo\u0161no iskanje',
                    'reformed': 'Reformirano razvr\u0161\u010Danje',
                    'pinyin': 'razvr\u0161\u010Danje po sistemu pinjin',
                    'phonetic': 'Foneti\u010Dno razvr\u0161\u010Danje'
                },
                'numbers': {
                    'knda': 'Kanaredske \u0161tevke',
                    'khmr': 'Kmerske \u0161tevke',
                    'kali': 'kali',
                    'jpanfin': 'Japonske finan\u010Dne \u0161tevilke',
                    'jpan': 'Japonske \u0161tevilke',
                    'java': 'java',
                    'hebr': 'Hebrejske \u0161tevilke',
                    'hantfin': 'Tradicionalne kitajske finan\u010Dne \u0161tevilke',
                    'hant': 'Tradicionalne kitajske \u0161tevilke',
                    'hansfin': 'Poenostavljene kitajske finan\u010Dne \u0161tevilke',
                    'hans': 'Poenostavljene kitajske \u0161tevilke',
                    'hanidec': 'Kitajske decimalne \u0161tevilke',
                    'guru': 'Gurmu\u0161ke \u0161tevke',
                    'gujr': 'Gud\u017Earatske \u0161tevke',
                    'greklow': 'Gr\u0161ke male \u0161tevilke',
                    'grek': 'Gr\u0161ke \u0161tevilke',
                    'bali': 'bali',
                    'armnlow': 'Armenske majhne \u0161tevilke',
                    'armn': 'Armenske \u0161tevilke',
                    'arabext': 'Raz\u0161irjene arabskoindijske \u0161tevke',
                    'arab': 'Arabskoindijske \u0161tevke',
                    'finance': 'Finan\u010Dne \u0161tevilke',
                    'traditional': 'Tradicionalne \u0161tevilke',
                    'native': 'Doma\u010De \u0161tevke',
                    'beng': 'Bengalske \u0161tevke',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Devangarske \u0161tevke',
                    'orya': 'Orijske \u0161tevke',
                    'osma': 'osma',
                    'roman': 'Rimske \u0161tevilke',
                    'romanlow': 'Rimske male \u0161tevilke',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u0160tevilke vai',
                    'tibt': 'Tibetanske \u0161tevke',
                    'thai': 'Tajske \u0161tevke',
                    'telu': 'Telu\u0161ke \u0161tevke',
                    'tamldec': 'Tamilske \u0161tevke',
                    'taml': 'Tamilske \u0161tevilke',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Mjanmarske \u0161tevke',
                    'mtei': 'mtei',
                    'mong': 'Mongolske \u0161tevke',
                    'mlym': 'Malajalamske \u0161tevke',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Zahodne \u0161tevke',
                    'laoo': 'Lao\u0161ke \u0161tevke',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Gruzijske \u0161tevilke',
                    'fullwide': '\u0160tevke polne \u0161irine',
                    'ethi': 'Etiopijske \u0161tevilke'
                },
                'colAlternate': {
                    'non-ignorable': 'Razvr\u0161\u010Danje simbolov',
                    'shifted': 'Razvr\u0161\u010Danje s prezrtjem simbolov'
                },
                'colBackwards': {
                    'no': 'Navadno razvr\u0161\u010Danje naglasov',
                    'yes': 'Obratno razvr\u0161\u010Danje naglasov'
                }
            },
            'codePatterns': {
                'language': 'Jezik: {0}',
                'script': '{0}',
                'territory': 'Regija: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-two': '{0} oz',
                    'unitPattern-count-few': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-two': '{0} kg',
                    'unitPattern-count-few': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-two': '{0} g',
                    'unitPattern-count-few': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-two': '{0} yd',
                    'unitPattern-count-few': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-two': '{0} pm',
                    'unitPattern-count-few': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-two': '{0} mm',
                    'unitPattern-count-few': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-two': '{0} mi',
                    'unitPattern-count-few': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-two': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} svetlobno leto',
                    'unitPattern-count-two': '{0} svetlobni leti',
                    'unitPattern-count-few': '{0} svetlobna leta',
                    'unitPattern-count-other': '{0} svetlobnih let'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-two': '{0} km',
                    'unitPattern-count-few': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-two': '{0} in',
                    'unitPattern-count-few': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-two': '{0} ft',
                    'unitPattern-count-few': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-two': '{0} cm',
                    'unitPattern-count-few': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} leto',
                    'unitPattern-count-two': '{0} leti',
                    'unitPattern-count-few': '{0} leta',
                    'unitPattern-count-other': '{0} let'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} teden',
                    'unitPattern-count-two': '{0} tedna',
                    'unitPattern-count-few': '{0} tedni',
                    'unitPattern-count-other': '{0} tednov'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} mesec',
                    'unitPattern-count-two': '{0} meseca',
                    'unitPattern-count-few': '{0} meseci',
                    'unitPattern-count-other': '{0} mesecev'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-two': '{0} lb',
                    'unitPattern-count-few': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} KM',
                    'unitPattern-count-two': '{0} KM',
                    'unitPattern-count-few': '{0} KM',
                    'unitPattern-count-other': '{0} KM'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-two': '{0} kW',
                    'unitPattern-count-few': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-two': '{0} W',
                    'unitPattern-count-few': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-two': '{0} hPa',
                    'unitPattern-count-few': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-two': '{0} inHg',
                    'unitPattern-count-few': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mbar',
                    'unitPattern-count-two': '{0} mbar',
                    'unitPattern-count-few': '{0} mbar',
                    'unitPattern-count-other': '{0} mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-two': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-two': '{0} mi\u00B3',
                    'unitPattern-count-few': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-two': '{0} km\u00B3',
                    'unitPattern-count-few': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-two': '{0} \u00B0F',
                    'unitPattern-count-few': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0C',
                    'unitPattern-count-two': '{0} \u00B0C',
                    'unitPattern-count-few': '{0} \u00B0C',
                    'unitPattern-count-other': '{0} \u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-two': '{0} mi/h',
                    'unitPattern-count-few': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-two': '{0} m/s',
                    'unitPattern-count-few': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-two': '{0} km/h',
                    'unitPattern-count-few': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} minuta',
                    'unitPattern-count-two': '{0} minuti',
                    'unitPattern-count-few': '{0} minute',
                    'unitPattern-count-other': '{0} minut'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-two': '{0} ms',
                    'unitPattern-count-few': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} ura',
                    'unitPattern-count-two': '{0} uri',
                    'unitPattern-count-few': '{0} ure',
                    'unitPattern-count-other': '{0} ur'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} dan',
                    'unitPattern-count-two': '{0} dni',
                    'unitPattern-count-few': '{0} dnevi',
                    'unitPattern-count-other': '{0} dni'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-two': '{0} mi\u00B2',
                    'unitPattern-count-few': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-two': '{0} m\u00B2',
                    'unitPattern-count-few': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-two': '{0} km\u00B2',
                    'unitPattern-count-few': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-two': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-two': '{0}\u2032',
                    'unitPattern-count-few': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-two': '{0}\u2033',
                    'unitPattern-count-few': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-two': '{0} \u00B0',
                    'unitPattern-count-few': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} jutro',
                    'unitPattern-count-two': '{0} jutri',
                    'unitPattern-count-few': '{0} jutra',
                    'unitPattern-count-other': '{0} juter'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-two': '{0} ha',
                    'unitPattern-count-few': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-two': '{0} ft\u00B2',
                    'unitPattern-count-few': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} sekunda',
                    'unitPattern-count-two': '{0} sekundi',
                    'unitPattern-count-few': '{0} sekunde',
                    'unitPattern-count-other': '{0} sekund'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-two': '{0} oz',
                    'unitPattern-count-few': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-two': '{0} kg',
                    'unitPattern-count-few': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-two': '{0} g',
                    'unitPattern-count-few': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-two': '{0} yd',
                    'unitPattern-count-few': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-two': '{0} pm',
                    'unitPattern-count-few': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-two': '{0} mm',
                    'unitPattern-count-few': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-two': '{0} mi',
                    'unitPattern-count-few': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-two': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} sv. let',
                    'unitPattern-count-two': '{0} sv. leti',
                    'unitPattern-count-few': '{0} sv. leta',
                    'unitPattern-count-other': '{0} sv. let'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-two': '{0} km',
                    'unitPattern-count-few': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-two': '{0} in',
                    'unitPattern-count-few': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-two': '{0} ft',
                    'unitPattern-count-few': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-two': '{0} cm',
                    'unitPattern-count-few': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-two': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} t',
                    'unitPattern-count-two': '{0} t',
                    'unitPattern-count-few': '{0} t',
                    'unitPattern-count-other': '{0} t'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-two': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-two': '{0} lb',
                    'unitPattern-count-few': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} KM',
                    'unitPattern-count-two': '{0} KM',
                    'unitPattern-count-few': '{0} KM',
                    'unitPattern-count-other': '{0} KM'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-two': '{0} kW',
                    'unitPattern-count-few': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-two': '{0} W',
                    'unitPattern-count-few': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-two': '{0} hPa',
                    'unitPattern-count-few': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-two': '{0} inHg',
                    'unitPattern-count-few': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mbar',
                    'unitPattern-count-two': '{0} mbar',
                    'unitPattern-count-few': '{0} mbar',
                    'unitPattern-count-other': '{0} mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-two': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-two': '{0} mi\u00B3',
                    'unitPattern-count-few': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-two': '{0} km\u00B3',
                    'unitPattern-count-few': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-two': '{0} \u00B0F',
                    'unitPattern-count-few': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0C',
                    'unitPattern-count-two': '{0} \u00B0C',
                    'unitPattern-count-few': '{0} \u00B0C',
                    'unitPattern-count-other': '{0} \u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-two': '{0} mi/h',
                    'unitPattern-count-few': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-two': '{0} m/s',
                    'unitPattern-count-few': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-two': '{0} km/h',
                    'unitPattern-count-few': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-two': '{0} min',
                    'unitPattern-count-few': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-two': '{0} ms',
                    'unitPattern-count-few': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-two': '{0} h',
                    'unitPattern-count-few': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} d',
                    'unitPattern-count-two': '{0} d',
                    'unitPattern-count-few': '{0} d',
                    'unitPattern-count-other': '{0} d'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-two': '{0} mi\u00B2',
                    'unitPattern-count-few': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-two': '{0} m\u00B2',
                    'unitPattern-count-few': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-two': '{0} km\u00B2',
                    'unitPattern-count-few': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-two': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-two': '{0}\u2032',
                    'unitPattern-count-few': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-two': '{0}\u2033',
                    'unitPattern-count-few': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-two': '{0} \u00B0',
                    'unitPattern-count-few': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} jut.',
                    'unitPattern-count-two': '{0} jut.',
                    'unitPattern-count-few': '{0} jut.',
                    'unitPattern-count-other': '{0} jut.'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-two': '{0} ha',
                    'unitPattern-count-few': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-two': '{0} ft\u00B2',
                    'unitPattern-count-few': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} s',
                    'unitPattern-count-two': '{0} s',
                    'unitPattern-count-few': '{0} s',
                    'unitPattern-count-other': '{0} s'
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
