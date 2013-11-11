/* AstroDate
 * Language: hu
 * ca-gregorian: 24r9317
 * timeZoneNames: 24r9317
 * localeDisplayNames: 24r9317
 * units: 24r9317
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
        AstroDate.lang('hu', {
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
                    'unitPattern-count-one': '{0} uncia',
                    'unitPattern-count-other': '{0} uncia'
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
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mf',
                    'unitPattern-count-other': '{0} mf'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} f\u00E9ny\u00E9v',
                    'unitPattern-count-other': '{0} f\u00E9ny\u00E9v'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} h\u00FCvelyk',
                    'unitPattern-count-other': '{0} h\u00FCvelyk'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} l\u00E1b',
                    'unitPattern-count-other': '{0} l\u00E1b'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u00E9v',
                    'unitPattern-count-other': '{0} \u00E9v'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} h\u00E9t',
                    'unitPattern-count-other': '{0} h\u00E9t'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} h.',
                    'unitPattern-count-other': '{0} h.'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} font',
                    'unitPattern-count-other': '{0} font'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} LE',
                    'unitPattern-count-other': '{0} LE'
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
                    'unitPattern-count-one': '{0} mb',
                    'unitPattern-count-other': '{0} mb'
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
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mph',
                    'unitPattern-count-other': '{0} mph'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} nap',
                    'unitPattern-count-other': '{0} nap'
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
                    'unitPattern-count-one': '{0} s',
                    'unitPattern-count-other': '{0} s'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'j\u00FAl.',
                                '6': 'j\u00FAn.',
                                '5': 'm\u00E1j.',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'szept.',
                                '1': 'jan.',
                                '2': 'febr.',
                                '3': 'm\u00E1rc.',
                                '4': '\u00E1pr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'Sz',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': '\u00C1'
                            },
                            'wide': {
                                '8': 'augusztus',
                                '7': 'j\u00FAlius',
                                '6': 'j\u00FAnius',
                                '5': 'm\u00E1jus',
                                '12': 'december',
                                '11': 'november',
                                '10': 'okt\u00F3ber',
                                '9': 'szeptember',
                                '1': 'janu\u00E1r',
                                '2': 'febru\u00E1r',
                                '3': 'm\u00E1rcius',
                                '4': '\u00E1prilis'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'j\u00FAl.',
                                '6': 'j\u00FAn.',
                                '5': 'm\u00E1j.',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'okt.',
                                '9': 'szept.',
                                '1': 'jan.',
                                '2': 'febr.',
                                '3': 'm\u00E1rc.',
                                '4': '\u00E1pr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'Sz',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': '\u00C1'
                            },
                            'wide': {
                                '8': 'augusztus',
                                '7': 'j\u00FAlius',
                                '6': 'j\u00FAnius',
                                '5': 'm\u00E1jus',
                                '12': 'december',
                                '11': 'november',
                                '10': 'okt\u00F3ber',
                                '9': 'szeptember',
                                '1': 'janu\u00E1r',
                                '2': 'febru\u00E1r',
                                '3': 'm\u00E1rcius',
                                '4': '\u00E1prilis'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'narrow': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sz',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Sz'
                            },
                            'short': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'wide': {
                                'sun': 'vas\u00E1rnap',
                                'mon': 'h\u00E9tf\u0151',
                                'tue': 'kedd',
                                'wed': 'szerda',
                                'thu': 'cs\u00FCt\u00F6rt\u00F6k',
                                'fri': 'p\u00E9ntek',
                                'sat': 'szombat'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'narrow': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sz',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Sz'
                            },
                            'short': {
                                'sun': 'V',
                                'mon': 'H',
                                'tue': 'K',
                                'wed': 'Sze',
                                'thu': 'Cs',
                                'fri': 'P',
                                'sat': 'Szo'
                            },
                            'wide': {
                                'sun': 'vas\u00E1rnap',
                                'mon': 'h\u00E9tf\u0151',
                                'tue': 'kedd',
                                'wed': 'szerda',
                                'thu': 'cs\u00FCt\u00F6rt\u00F6k',
                                'fri': 'p\u00E9ntek',
                                'sat': 'szombat'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'N1',
                                '2': 'N2',
                                '3': 'N3',
                                '4': 'N4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': 'I. negyed\u00E9v',
                                '2': 'II. negyed\u00E9v',
                                '3': 'III. negyed\u00E9v',
                                '4': 'IV. negyed\u00E9v'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'N1',
                                '2': 'N2',
                                '3': 'N3',
                                '4': 'N4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            },
                            'wide': {
                                '1': '1. negyed\u00E9v',
                                '2': '2. negyed\u00E9v',
                                '3': '3. negyed\u00E9v',
                                '4': '4. negyed\u00E9v'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'narrow': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'wide': {
                                'am': 'de.',
                                'pm': 'du.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'narrow': {
                                'am': 'de.',
                                'pm': 'du.'
                            },
                            'wide': {
                                'am': 'de.',
                                'pm': 'du.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'id\u0151sz\u00E1m\u00EDt\u00E1sunk el\u0151tt',
                            '0-alt-variant': 'Kr. e.',
                            '1': 'id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint',
                            '1-alt-variant': 'Kr. u.'
                        },
                        'eraAbbr': {
                            '0': 'i. e.',
                            '0-alt-variant': 'Kr. e.',
                            '1': 'i. sz.',
                            '1-alt-variant': 'Kr. u.'
                        },
                        'eraNarrow': {
                            '0': 'ie.',
                            '0-alt-variant': 'Kr. e.',
                            '1': 'isz.',
                            '1-alt-variant': 'Kr. u.'
                        }
                    },
                    'dateFormats': {
                        'full': 'y. MMMM d., EEEE',
                        'long': 'y. MMMM d.',
                        'medium': 'y MMM d',
                        'short': 'y. MM. dd.'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss zzzz',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMEd': 'y. MMM d., E',
                            'yMMMd': 'y. MMM d.',
                            'yMMM': 'y. MMM',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E HH:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'd., E',
                            'd': 'd',
                            'GyMMMd': 'G y. MMM d.',
                            'GyMMMEd': 'G y. MMM d., E',
                            'h': 'a h',
                            'yQQQQ': 'y. QQQQ',
                            'yQQQ': 'y. QQQ',
                            'yMMMM': 'y. MMMM',
                            'Hms': 'H:mm:ss',
                            'hms': 'a h:mm:ss',
                            'Hm': 'H:mm',
                            'hm': 'a h:mm',
                            'H': 'H',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'G y.',
                            'GyMMM': 'G y. MMM',
                            'M': 'L',
                            'Md': 'M. d.',
                            'MEd': 'M. d., E',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d.',
                            'MMMEd': 'MMM d., E',
                            'MMMMd': 'MMMM d.',
                            'mmss': 'mm:ss',
                            'ms': 'mm:ss',
                            'y': 'y.',
                            'yM': 'y. M.',
                            'yMd': 'y. MM. dd.',
                            'yMEd': 'y. MM. dd., E'
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
                                'd': 'MMM d., E \u2013 d., E',
                                'M': 'MMM d., E \u2013 MMM d., E'
                            },
                            'MMMd': {
                                'd': 'MMM d\u2013d.',
                                'M': 'MMM d. \u2013 MMM d.'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'M. dd., E \u2013 M. d., E',
                                'M': 'M. d., E \u2013 M. d., E'
                            },
                            'Md': {
                                'd': 'M. d\u2013d.',
                                'M': 'M. d. \u2013 M. d.'
                            },
                            'M': {
                                'M': 'M\u2013M.'
                            },
                            'Hv': {
                                'H': 'H\u2013H v'
                            },
                            'hv': {
                                'a': 'a h \u2013 a h v',
                                'h': 'a h\u2013h v'
                            },
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'y. MM\u2013MM.',
                                'y': 'y. MM. \u2013 y. MM.'
                            },
                            'yMd': {
                                'd': 'y. MM. dd\u2013dd.',
                                'M': 'y. MM. dd. \u2013 MM. dd.',
                                'y': 'y. MM. dd. \u2013 y. MM. dd.'
                            },
                            'yMEd': {
                                'd': 'y. MM. dd., E \u2013 dd., E',
                                'M': 'y. MM. dd., E \u2013 MM. dd., E',
                                'y': 'y. MM. dd., E \u2013 y. MM. dd., E'
                            },
                            'yMMM': {
                                'M': 'y. MMM\u2013MMM',
                                'y': 'y. MMM \u2013 y. MMM'
                            },
                            'yMMMd': {
                                'd': 'y. MMM d\u2013d.',
                                'M': 'y. MMM d. \u2013 MMM d.',
                                'y': 'y. MMM d. \u2013 y. MMM d.'
                            },
                            'yMMMEd': {
                                'd': 'y. MMM d., E \u2013 d., E',
                                'M': 'y. MMM d., E \u2013 MMM d., E',
                                'y': 'y. MMM d., E \u2013 y. MMM d., E'
                            },
                            'yMMMM': {
                                'M': 'y. MMMM\u2013MMMM',
                                'y': 'y. MMMM \u2013 y. MMMM'
                            },
                            'Hmv': {
                                'H': 'H:mm\u2013H:mm v',
                                'm': 'H:mm\u2013H:mm v'
                            },
                            'hmv': {
                                'a': 'a h:mm \u2013 a h:mm v',
                                'h': 'a h:mm\u2013h:mm v',
                                'm': 'a h:mm\u2013h:mm v'
                            },
                            'Hm': {
                                'H': 'H:mm\u2013H:mm',
                                'm': 'H:mm\u2013H:mm'
                            },
                            'hm': {
                                'a': 'a h:mm \u2013 a h:mm',
                                'h': 'a h:mm\u2013h:mm',
                                'm': 'a h:mm\u2013h:mm'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'h': {
                                'a': 'a h \u2013 a h',
                                'h': 'a h\u2013h'
                            },
                            'd': {
                                'd': 'd\u2013d.'
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
                            'exemplarCity': 'Ponape-szigetek'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Pitcairn-szigetek'
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
                            'exemplarCity': 'Galapagos-szigetek'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambier-szigetek'
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
                            'exemplarCity': 'Wake-sziget'
                        },
                        'Truk': {
                            'exemplarCity': 'Truk-szigetek'
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
                            'exemplarCity': 'Kiritimati-sziget'
                        },
                        'Johnston': {
                            'exemplarCity': 'Johnston'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham-szigetek'
                        },
                        'Easter': {
                            'exemplarCity': 'H\u00FAsv\u00E9t-szigetek'
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
                            'exemplarCity': 'Fidzsi'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Kosrae-szigetek'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Kwajalein-z\u00E1tony'
                        },
                        'Majuro': {
                            'exemplarCity': 'Majuro-z\u00E1tony'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Marquesas-szigetek'
                        },
                        'Midway': {
                            'exemplarCity': 'Midway-szigetek'
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
                            'exemplarCity': 'Mald\u00EDv-szigetek'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mahe'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'R\u00E9union'
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
                            'exemplarCity': 'Kar\u00E1csony-sziget'
                        },
                        'Cocos': {
                            'exemplarCity': 'K\u00F3kusz-sziget'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komor\u00F3'
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
                            'exemplarCity': 'Ismeretlen v\u00E1ros'
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
                            'exemplarCity': 'Vosztok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Syowa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'D\u00E9li-sark'
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
                            'exemplarCity': 'Kajm\u00E1n-szigetek'
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
                            'exemplarCity': 'Canc\u00FAn'
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
                                'exemplarCity': 'R\u00EDo Gallegos'
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
                                'exemplarCity': 'Tucum\u00E1n'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Aragua\u00EDna'
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
                            'exemplarCity': 'Bel\u00E9m'
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
                            'exemplarCity': 'Bogot\u00E1'
                        },
                        'Curacao': {
                            'exemplarCity': 'Curacao'
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
                            'exemplarCity': 'Jamaica'
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
                            'exemplarCity': 'Havanna'
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Guyana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guayaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Guatemala'
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
                            'exemplarCity': 'Eirunep\u00E9'
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
                            'exemplarCity': 'C\u00F3rdoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiab\u00E1'
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
                            'exemplarCity': 'Macei\u00F3'
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
                            'exemplarCity': 'Martinique'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Matamoros'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Mazatl\u00E1n'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'M\u00E9rida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Mexik\u00F3v\u00E1ros'
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
                                'exemplarCity': 'Beulah, \u00C9szak-Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, \u00C9szak-Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'K\u00F6z\u00E9ps\u0151, \u00C9szak-Dakota'
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
                            'exemplarCity': 'Puerto Rico'
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
                            'exemplarCity': 'R\u00EDo Branco'
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
                            'exemplarCity': 'S\u00E3o Paulo'
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
                            'exemplarCity': 'D\u00E9li-Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjav\u00EDk'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Szent Ilona'
                        },
                        'Azores': {
                            'exemplarCity': 'Azori-szigetek'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kan\u00E1ri-szigetek'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Z\u00F6ld-Foki Szigetek'
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
                            'exemplarCity': 'Moszkva'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monaco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minszk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Mariehamn'
                        },
                        'Malta': {
                            'exemplarCity': 'M\u00E1lta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madrid'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Brit ny\u00E1ri id\u0151'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisszabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kijev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kalinyingr\u00E1d'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Isztanbul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Man-sziget'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukarest'
                        },
                        'Brussels': {
                            'exemplarCity': 'Br\u00FCsszel'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Pozsony'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgr\u00E1d'
                        },
                        'Athens': {
                            'exemplarCity': 'Ath\u00E9n'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amszterdam'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Szimferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'Sz\u00F3fia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallin'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ungv\u00E1r'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporozsje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Z\u00E1gr\u00E1b'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Vars\u00F3'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgogr\u00E1d'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilniusz'
                        },
                        'Vienna': {
                            'exemplarCity': 'B\u00E9cs'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatik\u00E1n'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Szarajev\u00F3'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Szamara'
                        },
                        'Rome': {
                            'exemplarCity': 'R\u00F3ma'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Pr\u00E1ga'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'P\u00E1rizs'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinki'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibralt\u00E1r'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u00CDr ny\u00E1ri id\u0151'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Koppenh\u00E1ga'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'B\u00FCsingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapest'
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
                            'exemplarCity': 'Kinshasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Kart\u00FAm'
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
                            'exemplarCity': 'El-Aj\u00FAn'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Dzsibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es-Salaam'
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
                            'exemplarCity': 'Asmera'
                        },
                        'Malabo': {
                            'exemplarCity': 'Malab\u00F3'
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
                            'exemplarCity': 'Mogadishu'
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
                            'exemplarCity': 'Tunisz'
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
                            'exemplarCity': 'Lubumbashi'
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
                            'exemplarCity': 'Kair\u00F3'
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
                            'exemplarCity': 'Abidjan'
                        },
                        'Accra': {
                            'exemplarCity': 'Accra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Addisz-Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Alg\u00EDr'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Sanghaj'
                        },
                        'Seoul': {
                            'exemplarCity': 'Sz\u00F6ul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Szamarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Szahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Si Minh-v\u00E1ros'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Rij\u00E1d'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kizilorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Katar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Phenjan'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom Penh'
                        },
                        'Oral': {
                            'exemplarCity': 'Oral'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omszk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novoszibirszk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Csungking'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damaszkusz'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dh\u00E1ka'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Dushanbe'
                        },
                        'Gaza': {
                            'exemplarCity': 'G\u00E1za'
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
                            'exemplarCity': 'Irkutszk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ul\u00E1nb\u00E1tor'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u00DCr\u00FCmqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Uszty-Nyera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vienti\u00E1n'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vlagyivosztok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Jakutszk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekatyerinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Jerev\u00E1n'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Thimphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teher\u00E1n'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbiliszi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Taskent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Tajpej'
                        },
                        'Singapore': {
                            'exemplarCity': 'Szingap\u00FAr'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jeruzs\u00E1lem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Akt\u00F6be'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadir'
                        },
                        'Amman': {
                            'exemplarCity': 'Amm\u00E1n'
                        },
                        'Almaty': {
                            'exemplarCity': 'Alma-Ata'
                        },
                        'Aden': {
                            'exemplarCity': '\u00C1den'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahrein'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Bejr\u00FAt'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Biskek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Csojbalszan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamcsatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karacsi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kasg\u00E1r'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handiga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasznojarszk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kucseng'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuvait'
                        },
                        'Macau': {
                            'exemplarCity': 'Maka\u00F3'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magad\u00E1n'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makasar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Muscat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nicosia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznyeck'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychelle-szigeteki id\u0151'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Szamoai id\u0151',
                            'standard': 'Szamoai z\u00F3naid\u0151',
                            'daylight': 'Szamoai ny\u00E1ri id\u0151'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Szamarai id\u0151',
                            'standard': 'Szamarai z\u00F3naid\u0151',
                            'daylight': 'Szamarai ny\u00E1ri id\u0151'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Szahalini id\u0151',
                            'standard': 'Szahalini z\u00F3naid\u0151',
                            'daylight': 'Szahalini ny\u00E1ri id\u0151'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotherai id\u0151'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'R\u00E9unioni id\u0151'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylordai id\u0151',
                            'standard': 'Qyzylordai z\u00F3naid\u0151',
                            'daylight': 'Qyzylordai ny\u00E1ri id\u0151'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapei id\u0151'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairni id\u0151'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre \u00E9s Miquelon-i id\u0151',
                            'standard': 'Saint Pierre \u00E9s Miquelon-i z\u00F3naid\u0151',
                            'daylight': 'Saint Pierre \u00E9s Miquelon-i ny\u00E1ri id\u0151'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenix-szigeteki id\u0151'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'F\u00FCl\u00F6p-szigeteki id\u0151',
                            'standard': 'F\u00FCl\u00F6p-szigeteki z\u00F3naid\u0151',
                            'daylight': 'F\u00FCl\u00F6p-szigeteki ny\u00E1ri id\u0151'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Perui id\u0151',
                            'standard': 'Perui z\u00F3naid\u0151',
                            'daylight': 'Perui ny\u00E1ri id\u0151'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayi id\u0151',
                            'standard': 'Paraguayi z\u00F3naid\u0151',
                            'daylight': 'Paraguayi ny\u00E1ri id\u0151'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'P\u00E1pua \u00FAj-guineai id\u0151'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palaui id\u0151'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakiszt\u00E1ni id\u0151',
                            'standard': 'Pakiszt\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'Pakiszt\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omszki id\u0151',
                            'standard': 'Omszki z\u00F3naid\u0151',
                            'daylight': 'Omszki ny\u00E1ri id\u0151'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novoszibirszki id\u0151',
                            'standard': 'Novoszibirszki z\u00F3naid\u0151',
                            'daylight': 'Novoszibirszki ny\u00E1ri id\u0151'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u00C9szak-mariana-szigeteki id\u0151'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha-i id\u0151',
                            'standard': 'Fernando de Noronha-i z\u00F3naid\u0151',
                            'daylight': 'Fernando de Noronha-i ny\u00E1ri id\u0151'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk-szigeteki id\u0151'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuei id\u0151'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u00DAj-fundlandi id\u0151',
                            'standard': '\u00DAj-fundlandi z\u00F3naid\u0151',
                            'daylight': '\u00DAj-fundlandi ny\u00E1ri id\u0151'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amaz\u00F3niai id\u0151',
                            'standard': 'Amaz\u00F3niai z\u00F3naid\u0151',
                            'daylight': 'Amaz\u00F3niai ny\u00E1ri id\u0151'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'K\u00F6z\u00E9ps\u0151 \u00E1llamokbeli id\u0151',
                            'standard': 'K\u00F6z\u00E9ps\u0151 \u00E1llamokbeli z\u00F3naid\u0151',
                            'daylight': 'K\u00F6z\u00E9ps\u0151 \u00E1llamokbeli ny\u00E1ri id\u0151'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Keleti \u00E1llamokbeli id\u0151',
                            'standard': 'Keleti \u00E1llamokbeli z\u00F3naid\u0151',
                            'daylight': 'Keleti \u00E1llamokbeli ny\u00E1ri id\u0151'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hegyvid\u00E9ki id\u0151',
                            'standard': 'Hegyvid\u00E9ki z\u00F3naid\u0151',
                            'daylight': 'Hegyvid\u00E9ki ny\u00E1ri id\u0151'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Csendes-\u00F3ce\u00E1ni id\u0151',
                            'standard': 'Csendes-\u00F3ce\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'Csendes-\u00F3ce\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadiri id\u0151',
                            'standard': 'Anad\u00EDri z\u00F3naid\u0151',
                            'daylight': 'Anad\u00EDri ny\u00E1ri id\u0151'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtaui id\u0151',
                            'standard': 'Aqtaui z\u00F3naid\u0151',
                            'daylight': 'Aqtaui ny\u00E1ri id\u0151'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtobei id\u0151',
                            'standard': 'Aqtobei z\u00F3naid\u0151',
                            'daylight': 'Aqtobei ny\u00E1ri id\u0151'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Z\u00F6ld-foki-szigeteki id\u0151',
                            'standard': 'Z\u00F6ld-foki-szigeteki z\u00F3naid\u0151',
                            'daylight': 'Z\u00F6ld-foki-szigeteki ny\u00E1ri id\u0151'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorr\u00F3i id\u0151'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathami id\u0151',
                            'standard': 'Chathami z\u00F3naid\u0151',
                            'daylight': 'Chathami ny\u00E1ri id\u0151'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilei id\u0151',
                            'standard': 'Chilei z\u00F3naid\u0151',
                            'daylight': 'Chilei ny\u00E1ri id\u0151'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'K\u00EDnai id\u0151',
                            'standard': 'K\u00EDnai z\u00F3naid\u0151',
                            'daylight': 'K\u00EDnai ny\u00E1ri id\u0151'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Csojbalszani id\u0151',
                            'standard': 'Csojbalszani z\u00F3naid\u0151',
                            'daylight': 'Csojbalszani ny\u00E1ri id\u0151'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Kar\u00E1csony-szigeti id\u0151'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'K\u00F3kusz-szigeteki id\u0151'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbiai id\u0151',
                            'standard': 'Kolumbiai z\u00F3naid\u0151',
                            'daylight': 'Kolumbiai ny\u00E1ri id\u0151'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cook-szigeteki id\u0151',
                            'standard': 'Cook-szigeteki z\u00F3naid\u0151',
                            'daylight': 'Cook-szigeteki f\u00E9l ny\u00E1ri id\u0151'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kubai id\u0151',
                            'standard': 'Kubai z\u00F3naid\u0151',
                            'daylight': 'Kubai ny\u00E1ri id\u0151'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davisi id\u0151'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville-i id\u0151'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Kelet-timori id\u0151'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'H\u00FAsv\u00E9t-szigeteki id\u0151',
                            'standard': 'H\u00FAsv\u00E9t-szigeteki z\u00F3naid\u0151',
                            'daylight': 'H\u00FAsv\u00E9t-szigeteki ny\u00E1ri id\u0151'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadori id\u0151'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'K\u00F6z\u00E9p-eur\u00F3pai id\u0151',
                            'standard': 'K\u00F6z\u00E9p-eur\u00F3pai z\u00F3naid\u0151',
                            'daylight': 'K\u00F6z\u00E9p-eur\u00F3pai ny\u00E1ri id\u0151'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Kelet-eur\u00F3pai id\u0151',
                            'standard': 'Kelet-eur\u00F3pai z\u00F3naid\u0151',
                            'daylight': 'Kelet-eur\u00F3pai ny\u00E1ri id\u0151'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Nyugat-eur\u00F3pai id\u0151',
                            'standard': 'Nyugat-eur\u00F3pai z\u00F3naid\u0151',
                            'daylight': 'Nyugat-eur\u00F3pai ny\u00E1ri id\u0151'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falkland-szigeteki id\u0151',
                            'standard': 'Falkland-szigeteki z\u00F3naid\u0151',
                            'daylight': 'Falkland-szigeteki ny\u00E1ri id\u0151'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fidzsi id\u0151',
                            'standard': 'Fidzsi z\u00F3naid\u0151',
                            'daylight': 'Fidzsi ny\u00E1ri id\u0151'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Francia-guianai id\u0151'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Francia d\u00E9li \u00E9s antarktikus id\u0151'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagosi id\u0151'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelaui id\u0151'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongai id\u0151',
                            'standard': 'Tongai z\u00F3naid\u0151',
                            'daylight': 'Tongai ny\u00E1ri id\u0151'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Truki id\u0151'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'T\u00FCrkmeniszt\u00E1ni id\u0151',
                            'standard': 'T\u00FCrkmeniszt\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'T\u00FCrkmeniszt\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalui id\u0151'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayi id\u0151',
                            'standard': 'Uruguayi z\u00F3naid\u0151',
                            'daylight': 'Uruguayi ny\u00E1ri id\u0151'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u00DCzbegiszt\u00E1ni id\u0151',
                            'standard': '\u00DCzbegiszt\u00E1ni z\u00F3naid\u0151',
                            'daylight': '\u00DCzbegiszt\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatui id\u0151',
                            'standard': 'Vanuatui z\u00F3naid\u0151',
                            'daylight': 'Vanuatui ny\u00E1ri id\u0151'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekatyerinburgi id\u0151',
                            'standard': 'Jekatyerinburgi z\u00F3naid\u0151',
                            'daylight': 'Jekatyerinburgi ny\u00E1ri id\u0151'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutszki id\u0151',
                            'standard': 'Jakutszki z\u00F3naid\u0151',
                            'daylight': 'Jakutszki ny\u00E1ri id\u0151'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis \u00E9s futunai id\u0151'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake-szigeti id\u0151'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vosztoki id\u0151'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogr\u00E1di id\u0151',
                            'standard': 'Volgogr\u00E1di z\u00F3naid\u0151',
                            'daylight': 'Volgogr\u00E1di ny\u00E1ri id\u0151'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vlagyivosztoki id\u0151',
                            'standard': 'Vlagyivosztoki z\u00F3naid\u0151',
                            'daylight': 'Vlagyivosztoki ny\u00E1ri id\u0151'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelai id\u0151'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'T\u00E1dzsikiszt\u00E1ni id\u0151'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei id\u0151',
                            'standard': 'Taipei z\u00F3naid\u0151',
                            'daylight': 'Taipei ny\u00E1ri id\u0151'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahiti id\u0151'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowai id\u0151'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Szurin\u00E1mi id\u0151'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'D\u00E9l-georgiai id\u0151'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salamon-szigeteki id\u0151'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Szingap\u00FAri z\u00F3naid\u0151'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u00D6b\u00F6lbeli z\u00F3naid\u0151'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guami z\u00F3naid\u0151'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Nyugat-gr\u00F6nlandi id\u0151',
                            'standard': 'Nyugat-gr\u00F6nlandi z\u00F3naid\u0151',
                            'daylight': 'Nyugat-gr\u00F6nlandi ny\u00E1ri id\u0151'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Kelet-gr\u00F6nlandi id\u0151',
                            'standard': 'Kelet-gr\u00F6nlandi z\u00F3naid\u0151',
                            'daylight': 'Kelet-gr\u00F6nlandi ny\u00E1ri id\u0151'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichi k\u00F6z\u00E9pid\u0151'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbert-szigeteki id\u0151'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Gr\u00FAz id\u0151',
                            'standard': 'Gr\u00FAz z\u00F3naid\u0151',
                            'daylight': 'Gr\u00FAz ny\u00E1ri id\u0151'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambieri id\u0151'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre id\u0151',
                            'standard': 'Acre z\u00F3naid\u0151',
                            'daylight': 'Acre ny\u00E1ri id\u0151'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganiszt\u00E1ni id\u0151'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'K\u00F6z\u00E9p-afrikai id\u0151'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Kelet-afrikai id\u0151'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'D\u00E9l-afrikai id\u0151'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Nyugat-afrikai id\u0151',
                            'standard': 'Nyugat-afrikai z\u00F3naid\u0151',
                            'daylight': 'Nyugat-afrikai ny\u00E1ri id\u0151'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaszkai id\u0151',
                            'standard': 'Alaszkai z\u00F3naid\u0151',
                            'daylight': 'Alaszkai ny\u00E1ri id\u0151'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almati id\u0151',
                            'standard': 'Almati z\u00F3naid\u0151',
                            'daylight': 'Almati ny\u00E1ri id\u0151'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arab id\u0151',
                            'standard': 'Arab z\u00F3naid\u0151',
                            'daylight': 'Arab ny\u00E1ri id\u0151'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argent\u00EDnai id\u0151',
                            'standard': 'Argent\u00EDnai z\u00F3naid\u0151',
                            'daylight': 'Argent\u00EDnai ny\u00E1ri id\u0151'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Nyugat-argent\u00EDnai id\u0151',
                            'standard': 'Nyugat-argent\u00EDnai z\u00F3naid\u0151',
                            'daylight': 'Nyugat-argent\u00EDnai ny\u00E1ri id\u0151'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u00D6rm\u00E9ny id\u0151',
                            'standard': '\u00D6rm\u00E9ny z\u00F3naid\u0151',
                            'daylight': '\u00D6rm\u00E9ny ny\u00E1ri id\u0151'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlanti-\u00F3ce\u00E1ni id\u0151',
                            'standard': 'Atlanti-\u00F3ce\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'Atlanti-\u00F3ce\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'K\u00F6z\u00E9p-ausztr\u00E1liai id\u0151',
                            'standard': 'Ausztr\u00E1l k\u00F6z\u00E9ps\u0151 z\u00F3naid\u0151',
                            'daylight': 'Ausztr\u00E1l k\u00F6z\u00E9ps\u0151 ny\u00E1ri id\u0151'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Ausztr\u00E1l k\u00F6z\u00E9ps\u0151 nyugati id\u0151',
                            'standard': 'Ausztr\u00E1l k\u00F6z\u00E9ps\u0151 nyugati z\u00F3naid\u0151',
                            'daylight': 'Ausztr\u00E1l k\u00F6z\u00E9ps\u0151 nyugati ny\u00E1ri id\u0151'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Kelet-ausztr\u00E1l id\u0151',
                            'standard': 'Ausztr\u00E1l keleti z\u00F3naid\u0151',
                            'daylight': 'Ausztr\u00E1l keleti ny\u00E1ri id\u0151'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Nyugat-ausztr\u00E1l id\u0151',
                            'standard': 'Ausztr\u00E1l nyugati z\u00F3naid\u0151',
                            'daylight': 'Ausztr\u00E1l nyugati ny\u00E1ri id\u0151'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbajdzs\u00E1ni id\u0151',
                            'standard': 'Azerbajdzs\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'Azerbajdzs\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azori id\u0151',
                            'standard': 'Azori z\u00F3naid\u0151',
                            'daylight': 'Azori ny\u00E1ri id\u0151'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladesi id\u0151',
                            'standard': 'Bangladesi z\u00F3naid\u0151',
                            'daylight': 'Bangladesi ny\u00E1ri id\u0151'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'But\u00E1ni id\u0151'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bol\u00EDviai id\u0151'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Braz\u00EDliai id\u0151',
                            'standard': 'Braz\u00EDliai z\u00F3naid\u0151',
                            'daylight': 'Braz\u00EDliai ny\u00E1ri id\u0151'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam-i id\u0151'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanai id\u0151'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-aleuti id\u0151',
                            'standard': 'Hawaii-aleuti z\u00F3naid\u0151',
                            'daylight': 'Hawaii-aleuti ny\u00E1ri id\u0151'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongi id\u0151',
                            'standard': 'Hongkongi z\u00F3naid\u0151',
                            'daylight': 'Hongkongi ny\u00E1ri id\u0151'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdi id\u0151',
                            'standard': 'Hovdi z\u00F3naid\u0151',
                            'daylight': 'Hovdi ny\u00E1ri id\u0151'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indiai z\u00F3naid\u0151'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indiai-\u00F3ce\u00E1ni id\u0151'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indok\u00EDnai id\u0151'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'K\u00F6z\u00E9p-indon\u00E9ziai id\u0151'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Kelet-indon\u00E9ziai id\u0151'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Nyugat-indon\u00E9ziai id\u0151'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Ir\u00E1ni id\u0151',
                            'standard': 'Ir\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'Ir\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutszki id\u0151',
                            'standard': 'Irkutszki z\u00F3naid\u0151',
                            'daylight': 'Irkutszki ny\u00E1ri id\u0151'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Izraeli id\u0151',
                            'standard': 'Izraeli z\u00F3naid\u0151',
                            'daylight': 'Izraeli ny\u00E1ri id\u0151'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Jap\u00E1n id\u0151',
                            'standard': 'Jap\u00E1n z\u00F3naid\u0151',
                            'daylight': 'Jap\u00E1n ny\u00E1ri id\u0151'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovszk-kamcsatkai id\u0151',
                            'standard': 'Petropavlovszk-kamcsatkai z\u00F3naid\u0151',
                            'daylight': 'Petropavlovszk-kamcsatkai ny\u00E1ri id\u0151'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Kelet-kazahszt\u00E1ni id\u0151'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Nyugat-kazahszt\u00E1ni id\u0151'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Koreai id\u0151',
                            'standard': 'Koreai z\u00F3naid\u0151',
                            'daylight': 'Koreai ny\u00E1ri id\u0151'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraei id\u0151'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasznojarszki id\u0151',
                            'standard': 'Krasznojarszki z\u00F3naid\u0151',
                            'daylight': 'Krasznojarszki ny\u00E1ri id\u0151'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgiz id\u0151'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Lankai id\u0151'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Line-szigeteki id\u0151'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe-i id\u0151',
                            'standard': 'Lord Howe-i z\u00F3naid\u0151',
                            'daylight': 'Lord Howe-i ny\u00E1ri id\u0151'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macaui id\u0151',
                            'standard': 'Macaui z\u00F3naid\u0151',
                            'daylight': 'Macaui ny\u00E1ri id\u0151'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie-i id\u0151'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magad\u00E1ni id\u0151',
                            'standard': 'Magad\u00E1ni z\u00F3naid\u0151',
                            'daylight': 'Magad\u00E1ni ny\u00E1ri id\u0151'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malajziai id\u0151'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Mald\u00EDv-szigeteki id\u0151'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesasi id\u0151'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshall-szigeteki id\u0151'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiusi id\u0151',
                            'standard': 'Mauritiusi z\u00F3naid\u0151',
                            'daylight': 'Mauritiusi ny\u00E1ri id\u0151'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsoni id\u0151'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ul\u00E1nb\u00E1tori id\u0151',
                            'standard': 'Ul\u00E1nb\u00E1tori z\u00F3naid\u0151',
                            'daylight': 'Ul\u00E1nb\u00E1tori ny\u00E1ri id\u0151'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moszkvai id\u0151',
                            'standard': 'Moszkvai z\u00F3naid\u0151',
                            'daylight': 'Moszkvai ny\u00E1ri id\u0151'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Mianmari id\u0151'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurui id\u0151'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nep\u00E1li id\u0151'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u00DAj-kaled\u00F3niai id\u0151',
                            'standard': '\u00DAj-kaled\u00F3niai z\u00F3naid\u0151',
                            'daylight': '\u00DAj-kaled\u00F3niai ny\u00E1ri id\u0151'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u00DAj-z\u00E9landi id\u0151',
                            'standard': '\u00DAj-z\u00E9landi z\u00F3naid\u0151',
                            'daylight': '\u00DAj-z\u00E9landi ny\u00E1ri id\u0151'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} id\u0151',
                'regionFormat-type-daylight': '{0} ny\u00E1ri id\u0151',
                'regionFormat-type-standard': '{0} z\u00F3naid\u0151',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': 'Normaliz\u00E1lt rendez\u00E9s',
                'collation': 'Rendez\u00E9si sorrend',
                'colHiraganaQuaternary': 'Kan\u00E1k szerinti rendez\u00E9s',
                'colCaseLevel': 'Kisbet\u0171-nagybet\u0171 \u00E9rz\u00E9keny rendez\u00E9s',
                'colCaseFirst': 'Rendez\u00E9s nagy- vagy kisbet\u0171k szerint',
                'colBackwards': '\u00C9kezetek ford\u00EDtott rendez\u00E9se',
                'colAlternate': 'Szimb\u00F3lumokat figyelmen k\u00EDv\u00FCl hagy\u00F3 rendez\u00E9s',
                'calendar': 'Napt\u00E1r',
                'x': 'Priv\u00E1t haszn\u00E1latra',
                'variableTop': 'Rendez\u00E9s szimb\u00F3lumok szerint',
                'va': 'F\u00F6ldrajzi helyvari\u00E1ns',
                'timezone': 'Id\u0151z\u00F3na',
                'numbers': 'Sz\u00E1mok',
                'currency': 'P\u00E9nznem',
                'colStrength': 'Rendez\u00E9s er\u0151ss\u00E9ge',
                'colNumeric': 'Numerikus rendez\u00E9s'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Kan\u00E1k rendez\u00E9se k\u00FCl\u00F6n',
                    'yes': 'Kan\u00E1k megk\u00FCl\u00F6nb\u00F6ztet\u0151 rendez\u00E9se'
                },
                'colCaseLevel': {
                    'no': 'Kis- \u00E9s nagybet\u0171ket meg nem k\u00FCl\u00F6nb\u00F6ztet\u0151 rendez\u00E9s',
                    'yes': 'Rendez\u00E9s kisbet\u0171-nagybet\u0171 szerint'
                },
                'colCaseFirst': {
                    'lower': 'Kisbet\u0171s szavak rendez\u00E9se el\u0151re',
                    'no': 'Kisbet\u0171s-nagybet\u0171s szavak norm\u00E1l rendez\u00E9se',
                    'upper': 'Nagybet\u0171s szavak rendez\u00E9se el\u0151re'
                },
                'colStrength': {
                    'identical': '\u00D6sszes rendez\u00E9se',
                    'primary': 'Csak az alapbet\u0171k rendez\u00E9se',
                    'quaternary': '\u00C9kezetek/kisbet\u0171-nagybet\u0171/sz\u00E9less\u00E9g/kan\u00E1k rendez\u00E9se',
                    'secondary': '\u00C9kezetek rendez\u00E9se',
                    'tertiary': '\u00C9kezetek/kisbet\u0171-nagybet\u0171/sz\u00E9less\u00E9g rendez\u00E9se'
                },
                'colNumeric': {
                    'no': 'Sz\u00E1mjegyek egyedi rendez\u00E9se',
                    'yes': 'Sz\u00E1mjegyek numerikus rendez\u00E9se'
                },
                'colNormalization': {
                    'no': 'Rendez\u00E9s normaliz\u00E1l\u00E1s n\u00E9lk\u00FCl',
                    'yes': 'Unicode szerinti normaliz\u00E1lt rendez\u00E9s'
                },
                'calendar': {
                    'japanese': 'Jap\u00E1n napt\u00E1r',
                    'iso8601': 'iso8601',
                    'coptic': 'Kopt napt\u00E1r',
                    'dangi': 'dangi',
                    'ethiopic': 'Eti\u00F3p napt\u00E1r',
                    'ethiopic-amete-alem': 'Eti\u00F3p amete alem napt\u00E1r',
                    'gregorian': 'Gergely-napt\u00E1r',
                    'hebrew': 'H\u00E9ber napt\u00E1r',
                    'persian': 'Perzsa napt\u00E1r',
                    'roc': 'K\u00EDnai k\u00F6zt\u00E1rsas\u00E1gi napt\u00E1r',
                    'chinese': 'K\u00EDnai napt\u00E1r',
                    'buddhist': 'Buddhista napt\u00E1r',
                    'indian': 'Indiai nemzeti napt\u00E1r',
                    'islamic': 'Iszl\u00E1m napt\u00E1r',
                    'islamic-civil': 'Iszl\u00E1m civil napt\u00E1r',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Telefonk\u00F6nyv sorrend',
                    'gb2312han': 'Egyszer\u0171s\u00EDtett k\u00EDnai sorrend - GB2312',
                    'eor': 'eor',
                    'ducet': 'Alap\u00E9rtelmezett Unicode rendez\u00E9si sorrend',
                    'dictionary': 'Sz\u00F3t\u00E1ri rendez\u00E9si sorrend',
                    'big5han': 'Hagyom\u00E1nyos k\u00EDnai sorrend - Big5',
                    'traditional': 'Hagyom\u00E1nyos',
                    'standard': 'Norm\u00E1l rendez\u00E9si sorrend',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Sz\u00F3t\u0151von\u00E1s rendez\u00E9si sorrend',
                    'stroke': 'Von\u00E1ssorrend',
                    'searchjl': 'Keres\u00E9s hangul kezd\u0151 m\u00E1ssalhangz\u00F3 szerint',
                    'search': '\u00C1ltal\u00E1nos c\u00E9l\u00FA keres\u00E9s',
                    'reformed': '\u00C1talak\u00EDtott rendez\u00E9si elv',
                    'pinyin': 'Pinyin sorrend',
                    'phonetic': 'Fonetikus rendez\u00E9si sorrend'
                },
                'numbers': {
                    'knda': 'Kannada sz\u00E1mjegyek',
                    'khmr': 'Khmer sz\u00E1mjegyek',
                    'kali': 'kali',
                    'jpanfin': 'Jap\u00E1n p\u00E9nz\u00FCgyi sz\u00E1mok',
                    'jpan': 'Jap\u00E1n sz\u00E1mok',
                    'java': 'java',
                    'hebr': 'H\u00E9ber sz\u00E1mok',
                    'hantfin': 'Hagyom\u00E1nyos k\u00EDnai p\u00E9nz\u00FCgyi sz\u00E1mok',
                    'hant': 'Hagyom\u00E1nyos k\u00EDnai sz\u00E1mok',
                    'hansfin': 'Egyszer\u0171s\u00EDtett k\u00EDnai p\u00E9nz\u00FCgyi sz\u00E1mok',
                    'hans': 'Egyszer\u0171s\u00EDtett k\u00EDnai sz\u00E1mok',
                    'hanidec': 'K\u00EDnai tizedes sz\u00E1mok',
                    'guru': 'Gurmuki sz\u00E1mjegyek',
                    'gujr': 'Gudzsar\u00E1ti sz\u00E1mjegyek',
                    'greklow': 'G\u00F6r\u00F6g kisbet\u0171s sz\u00E1mok',
                    'grek': 'G\u00F6r\u00F6g sz\u00E1mok',
                    'bali': 'bali',
                    'armnlow': '\u00D6rm\u00E9ny kisbet\u0171s sz\u00E1mok',
                    'armn': '\u00D6rm\u00E9ny sz\u00E1mok',
                    'arabext': 'Kib\u0151v\u00EDtett arab-indiai sz\u00E1mjegyek',
                    'arab': 'Arab-indiai sz\u00E1mjegyek',
                    'finance': 'P\u00E9nz\u00FCgyi sz\u00E1mok',
                    'traditional': 'Hagyom\u00E1nyos sz\u00E1mok',
                    'native': 'Nat\u00EDv sz\u00E1mjegyek',
                    'beng': 'Beng\u00E1li sz\u00E1mjegyek',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'D\u00E9van\u00E1gari sz\u00E1mjegyek',
                    'orya': 'Orija sz\u00E1mjegyek',
                    'osma': 'osma',
                    'roman': 'R\u00F3mai sz\u00E1mok',
                    'romanlow': 'R\u00F3mai kisbet\u0171s sz\u00E1mok',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Vai sz\u00E1mjegyek',
                    'tibt': 'Tibeti sz\u00E1mjegyek',
                    'thai': 'Thai sz\u00E1mjegyek',
                    'telu': 'Telugu sz\u00E1mjegyek',
                    'tamldec': 'Tamil sz\u00E1mjegyek',
                    'taml': 'Tamil hagyom\u00E1nyos sz\u00E1mok',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Mianmari sz\u00E1mjegyek',
                    'mtei': 'mtei',
                    'mong': 'Mongol sz\u00E1mjegyek',
                    'mlym': 'Malaj\u00E1lam sz\u00E1mjegyek',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Nyugati sz\u00E1mjegyek',
                    'laoo': 'Lao sz\u00E1mjegyek',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Gr\u00FAz sz\u00E1mok',
                    'fullwide': 'Teljes sz\u00E9less\u00E9g\u0171 sz\u00E1mjegyek',
                    'ethi': 'Eti\u00F3p sz\u00E1mok'
                },
                'colAlternate': {
                    'non-ignorable': 'Szimb\u00F3lumok rendez\u00E9se',
                    'shifted': 'Rendez\u00E9s szimb\u00F3lumok figyelmen k\u00EDv\u00FCl hagy\u00E1s\u00E1val'
                },
                'colBackwards': {
                    'no': '\u00C9kezetek norm\u00E1l rendez\u00E9se',
                    'yes': '\u00C9kezetek szerinti ford\u00EDtott rendez\u00E9s'
                }
            },
            'codePatterns': {
                'language': 'Nyelv: {0}',
                'script': '\u00CDr\u00E1srendszer: {0}',
                'territory': 'R\u00E9gi\u00F3: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} uncia',
                    'unitPattern-count-other': '{0} uncia'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kilogramm',
                    'unitPattern-count-other': '{0} kilogramm'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} gramm',
                    'unitPattern-count-other': '{0} gramm'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yard',
                    'unitPattern-count-other': '{0} yard'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pikom\u00E9ter',
                    'unitPattern-count-other': '{0} pikom\u00E9ter'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} millim\u00E9ter',
                    'unitPattern-count-other': '{0} millim\u00E9ter'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} m\u00E9rf\u00F6ld',
                    'unitPattern-count-other': '{0} m\u00E9rf\u00F6ld'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m\u00E9ter',
                    'unitPattern-count-other': '{0} m\u00E9ter'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} f\u00E9ny\u00E9v',
                    'unitPattern-count-other': '{0} f\u00E9ny\u00E9v'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} kilom\u00E9ter',
                    'unitPattern-count-other': '{0} kilom\u00E9ter'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} h\u00FCvelyk',
                    'unitPattern-count-other': '{0} h\u00FCvelyk'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} l\u00E1b',
                    'unitPattern-count-other': '{0} l\u00E1b'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} centim\u00E9ter',
                    'unitPattern-count-other': '{0} centim\u00E9ter'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u00E9v',
                    'unitPattern-count-other': '{0} \u00E9v'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} h\u00E9t',
                    'unitPattern-count-other': '{0} h\u00E9t'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} h\u00F3nap',
                    'unitPattern-count-other': '{0} h\u00F3nap'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} font',
                    'unitPattern-count-other': '{0} font'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} l\u00F3er\u0151',
                    'unitPattern-count-other': '{0} l\u00F3er\u0151'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kilowatt',
                    'unitPattern-count-other': '{0} kilowatt'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} watt',
                    'unitPattern-count-other': '{0} watt'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hektopascal',
                    'unitPattern-count-other': '{0} hektopascal'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} higanyh\u00FCvelyk',
                    'unitPattern-count-other': '{0} higanyh\u00FCvelyk'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} millibar',
                    'unitPattern-count-other': '{0} millibar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} liter',
                    'unitPattern-count-other': '{0} liter'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} k\u00F6bm\u00E9rf\u00F6ld',
                    'unitPattern-count-other': '{0} k\u00F6bm\u00E9rf\u00F6ld'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} k\u00F6bkilom\u00E9ter',
                    'unitPattern-count-other': '{0} k\u00F6bkilom\u00E9ter'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} Fahrenheit-fok',
                    'unitPattern-count-other': '{0} Fahrenheit-fok'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} Celsius-fok',
                    'unitPattern-count-other': '{0} Celsius-fok'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} m\u00E9rf\u00F6ld per \u00F3ra',
                    'unitPattern-count-other': '{0} m\u00E9rf\u00F6ld per \u00F3ra'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m\u00E9ter per m\u00E1sodperc',
                    'unitPattern-count-other': '{0} m\u00E9ter per m\u00E1sodperc'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} kilom\u00E9ter per \u00F3ra',
                    'unitPattern-count-other': '{0} kilom\u00E9ter per \u00F3ra'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} perc',
                    'unitPattern-count-other': '{0} perc'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ezredm\u00E1sodperc',
                    'unitPattern-count-other': '{0} ezredm\u00E1sodperc'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} \u00F3ra',
                    'unitPattern-count-other': '{0} \u00F3ra'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} nap',
                    'unitPattern-count-other': '{0} nap'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} n\u00E9gyzetm\u00E9rf\u00F6ld',
                    'unitPattern-count-other': '{0} n\u00E9gyzetm\u00E9rf\u00F6ld'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} n\u00E9gyzetm\u00E9ter',
                    'unitPattern-count-other': '{0} n\u00E9gyzetm\u00E9ter'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} n\u00E9gyzetkilom\u00E9ter',
                    'unitPattern-count-other': '{0} n\u00E9gyzetkilom\u00E9ter'
                },
                'per': {
                    'compoundUnitPattern': '{0} per {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} g gyorsul\u00E1s',
                    'unitPattern-count-other': '{0} g gyorsul\u00E1s'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} perc',
                    'unitPattern-count-other': '{0} perc'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} m\u00E1sodperc',
                    'unitPattern-count-other': '{0} m\u00E1sodperc'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} fok',
                    'unitPattern-count-other': '{0} fok'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} acre',
                    'unitPattern-count-other': '{0} acre'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} hekt\u00E1r',
                    'unitPattern-count-other': '{0} hekt\u00E1r'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} n\u00E9gyzetl\u00E1b',
                    'unitPattern-count-other': '{0} n\u00E9gyzetl\u00E1b'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} m\u00E1sodperc',
                    'unitPattern-count-other': '{0} m\u00E1sodperc'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} uncia',
                    'unitPattern-count-other': '{0} uncia'
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
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mf',
                    'unitPattern-count-other': '{0} mf'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} f\u00E9ny\u00E9v',
                    'unitPattern-count-other': '{0} f\u00E9ny\u00E9v'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} h\u00FCvelyk',
                    'unitPattern-count-other': '{0} h\u00FCvelyk'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} l\u00E1b',
                    'unitPattern-count-other': '{0} l\u00E1b'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u00E9v',
                    'unitPattern-count-other': '{0} \u00E9v'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} h\u00E9t',
                    'unitPattern-count-other': '{0} h\u00E9t'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} h\u00F3nap',
                    'unitPattern-count-other': '{0} h\u00F3nap'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} font',
                    'unitPattern-count-other': '{0} font'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} LE',
                    'unitPattern-count-other': '{0} LE'
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
                    'unitPattern-count-one': '{0} mb',
                    'unitPattern-count-other': '{0} mb'
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
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0C',
                    'unitPattern-count-other': '{0} \u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mph',
                    'unitPattern-count-other': '{0} mph'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} nap',
                    'unitPattern-count-other': '{0} nap'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mf\u00B2',
                    'unitPattern-count-other': '{0} mf\u00B2'
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
                    'unitPattern-count-one': '{0} fok',
                    'unitPattern-count-other': '{0} fok'
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
                    'unitPattern-count-one': '{0} s',
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
