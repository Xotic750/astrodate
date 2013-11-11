/* AstroDate
 * Language: ro
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
        AstroDate.lang('ro', {
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
                    'unitPattern-count-few': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-few': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-few': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-few': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-few': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-few': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-few': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} a.l.',
                    'unitPattern-count-few': '{0} a.l.',
                    'unitPattern-count-other': '{0} a.l.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-few': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-few': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-few': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-few': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} a',
                    'unitPattern-count-few': '{0} a',
                    'unitPattern-count-other': '{0} a'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} s\u0103pt.',
                    'unitPattern-count-few': '{0} s\u0103pt.',
                    'unitPattern-count-other': '{0} s\u0103pt.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-few': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} CP',
                    'unitPattern-count-few': '{0} CP',
                    'unitPattern-count-other': '{0} CP'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-few': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-few': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-few': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-few': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mb',
                    'unitPattern-count-few': '{0} mb',
                    'unitPattern-count-other': '{0} mb'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-few': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-few': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-few': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-few': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-few': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-few': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-few': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-few': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-few': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} z',
                    'unitPattern-count-few': '{0} z',
                    'unitPattern-count-other': '{0} z'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-few': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-few': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-few': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-few': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-few': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-few': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} ac.',
                    'unitPattern-count-few': '{0} ac.',
                    'unitPattern-count-other': '{0} ac.'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-few': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-few': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} s',
                    'unitPattern-count-few': '{0} s',
                    'unitPattern-count-other': '{0} s'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'iul.',
                                '6': 'iun.',
                                '5': 'mai',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'ian.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'I',
                                '6': 'I',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'I',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'iulie',
                                '6': 'iunie',
                                '5': 'mai',
                                '12': 'decembrie',
                                '11': 'noiembrie',
                                '10': 'octombrie',
                                '9': 'septembrie',
                                '1': 'ianuarie',
                                '2': 'februarie',
                                '3': 'martie',
                                '4': 'aprilie'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug.',
                                '7': 'iul.',
                                '6': 'iun.',
                                '5': 'mai',
                                '12': 'dec.',
                                '11': 'nov.',
                                '10': 'oct.',
                                '9': 'sept.',
                                '1': 'ian.',
                                '2': 'feb.',
                                '3': 'mar.',
                                '4': 'apr.'
                            },
                            'narrow': {
                                '8': 'A',
                                '7': 'I',
                                '6': 'I',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'I',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'iulie',
                                '6': 'iunie',
                                '5': 'mai',
                                '12': 'decembrie',
                                '11': 'noiembrie',
                                '10': 'octombrie',
                                '9': 'septembrie',
                                '1': 'ianuarie',
                                '2': 'februarie',
                                '3': 'martie',
                                '4': 'aprilie'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'Dum',
                                'mon': 'Lun',
                                'tue': 'Mar',
                                'wed': 'Mie',
                                'thu': 'Joi',
                                'fri': 'Vin',
                                'sat': 'S\u00E2m'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'M',
                                'thu': 'J',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Du',
                                'mon': 'Lu',
                                'tue': 'Ma',
                                'wed': 'Mi',
                                'thu': 'Jo',
                                'fri': 'Vi',
                                'sat': 'S\u00E2'
                            },
                            'wide': {
                                'sun': 'duminic\u0103',
                                'mon': 'luni',
                                'tue': 'mar\u021Bi',
                                'wed': 'miercuri',
                                'thu': 'joi',
                                'fri': 'vineri',
                                'sat': 's\u00E2mb\u0103t\u0103'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Dum',
                                'mon': 'Lun',
                                'tue': 'Mar',
                                'wed': 'Mie',
                                'thu': 'Joi',
                                'fri': 'Vin',
                                'sat': 'S\u00E2m'
                            },
                            'narrow': {
                                'sun': 'D',
                                'mon': 'L',
                                'tue': 'M',
                                'wed': 'M',
                                'thu': 'J',
                                'fri': 'V',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Du',
                                'mon': 'Lu',
                                'tue': 'Ma',
                                'wed': 'Mi',
                                'thu': 'Jo',
                                'fri': 'Vi',
                                'sat': 'S\u00E2'
                            },
                            'wide': {
                                'sun': 'duminic\u0103',
                                'mon': 'luni',
                                'tue': 'mar\u021Bi',
                                'wed': 'miercuri',
                                'thu': 'joi',
                                'fri': 'vineri',
                                'sat': 's\u00E2mb\u0103t\u0103'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'trim. I',
                                '2': 'trim. II',
                                '3': 'trim. III',
                                '4': 'trim. IV'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'trimestrul I',
                                '2': 'trimestrul al II-lea',
                                '3': 'trimestrul al III-lea',
                                '4': 'trimestrul al IV-lea'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'T1',
                                '2': 'T2',
                                '3': 'T3',
                                '4': 'T4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'trimestrul I',
                                '2': 'trimestrul al II-lea',
                                '3': 'trimestrul al III-lea',
                                '4': 'trimestrul al IV-lea'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'wide': {
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u00EEnainte de Hristos',
                            '0-alt-variant': '\u00EE.e.n',
                            '1': 'dup\u0103 Hristos',
                            '1-alt-variant': 'e.n.'
                        },
                        'eraAbbr': {
                            '0': '\u00EE.Hr.',
                            '0-alt-variant': '\u00EE.e.n',
                            '1': 'd.Hr.',
                            '1-alt-variant': 'e.n.'
                        },
                        'eraNarrow': {
                            '0': '\u00EE.Hr.',
                            '0-alt-variant': '\u00EE.e.n',
                            '1': 'd.Hr.',
                            '1-alt-variant': 'e.n.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd.MM.y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1}, {0}',
                        'long': '{1}, {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMM': 'MMM y',
                            'yMM': 'MM.y',
                            'yMEd': 'E, dd.MM.y',
                            'yMd': 'dd.MM.y',
                            'yM': 'MM.y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'MMdd': 'dd.MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E, d MMMM',
                            'ms': 'mm:ss',
                            'y': 'y'
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
                                'd': 'E, d MMM - E, d MMM',
                                'M': 'E, d MMM - E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
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
                                'H': 'HH-HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
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
                                'd': 'E, dd.MM.y - E, dd.MM.y',
                                'M': 'E, dd.MM.y - E, dd.MM.y',
                                'y': 'E, dd.MM.y - E, dd.MM.y'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y',
                                'y': 'MMM y - MMM y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM - E, d MMM y',
                                'M': 'E, d MMM - E, d MMM y',
                                'y': 'E, d MMM y - E, d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM - MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm-HH:mm v',
                                'm': 'HH:mm-HH:mm v'
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
                                'H': 'HH-HH'
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
                            'exemplarCity': 'Insula Pitcairn'
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
                            'exemplarCity': 'Insula Pa\u0219telui'
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
                            'exemplarCity': 'Fiji'
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
                            'exemplarCity': 'Marchize'
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
                            'exemplarCity': 'Maldive'
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
                            'exemplarCity': 'Insula Cr\u0103ciunului'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Comore'
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
                            'exemplarCity': 'Ora\u0219 necunoscut'
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
                            'exemplarCity': 'Showa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Polul Sud'
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
                            'exemplarCity': 'Cayman'
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
                            'exemplarCity': 'Havana'
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
                            'exemplarCity': 'Guadelupa'
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
                            'exemplarCity': 'El Salvador'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Eirunepe'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Edmonton'
                        },
                        'Dominica': {
                            'exemplarCity': 'Dominica'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Chihuahua'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Atikokan'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Cordoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
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
                            'exemplarCity': 'Martinica'
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
                            'exemplarCity': 'Mexico City'
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
                                'exemplarCity': 'Beulah, Dakota de Nord'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Dakota de Nord'
                            },
                            'Center': {
                                'exemplarCity': 'Centru, Dakota de Nord'
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
                            'exemplarCity': 'Georgia de Sud'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Sf. Elena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azore'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Canare'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Capul Verde'
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
                            'exemplarCity': 'Moscova'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monaco'
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
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Ora de var\u0103 britanic\u0103'
                            },
                            'exemplarCity': 'Londra'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisabona'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiev'
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
                            'exemplarCity': 'Insula Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucure\u0219ti'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruxelles'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlin'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Atena'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
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
                            'exemplarCity': 'Sofia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Stockholm'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ujhorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporoje'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Var\u0219ovia'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatican'
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
                            'exemplarCity': 'Roma'
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
                            'exemplarCity': 'Paris'
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
                                'daylight': 'Ora de var\u0103 a Irlandei'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhaga'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chi\u0219in\u0103u'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapesta'
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
                            'exemplarCity': 'Khartoum'
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
                            'exemplarCity': 'Djibouti'
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
                            'exemplarCity': 'Mogadishu'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monrovia'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nairobi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'N\'Djamena'
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
                            'exemplarCity': 'Cairo'
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
                            'exemplarCity': 'Addis Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Alger'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Shanghai'
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
                            'exemplarCity': 'Ho \u0218i Min'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Kyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Phenian'
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
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damasc'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dacca'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Du\u0219anbe'
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
                            'exemplarCity': 'Hong Kong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irku\u021Bk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumqi'
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
                            'exemplarCity': 'Yaku\u021Bk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Ekaterinburg'
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
                            'exemplarCity': 'Ta\u0219kent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapore'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Ierusalim'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'A\u0219gabat'
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
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almat\u00EE'
                        },
                        'Aden': {
                            'exemplarCity': 'Aden'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Bahrain'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beirut'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bi\u0219kek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Calcutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamciatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kaxgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Kathmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoiarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuweit'
                        },
                        'Macau': {
                            'exemplarCity': 'Macao'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Makassar'
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
                            'exemplarCity': 'Novokuzne\u021Bk'
                        }
                    }
                },
                'metazone': {
                    'Syowa': {
                        'long': {
                            'standard': 'Ora din Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Ora Surinamului'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Ora Georgiei de Sud'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Ora Insulelor Solomon'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Ora din Singapore'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Ora din Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Ora din Samoa',
                            'standard': 'Ora standard din Samoa',
                            'daylight': 'Ora de var\u0103 din Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Ora din Samara',
                            'standard': 'Ora standard din Samara',
                            'daylight': 'Ora de var\u0103 din Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Ora din Sahalin',
                            'standard': 'Ora standard din Sahalin',
                            'daylight': 'Ora de var\u0103 din Sahalin'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Ora din Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Ora din Reunion'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ora din Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Ora din Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Ora din Saint-Pierre \u0219i Miquelon',
                            'standard': 'Ora standard din Saint-Pierre \u0219i Miquelon',
                            'daylight': 'Ora de var\u0103 din Saint-Pierre \u0219i Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Ora Insulelor Phoenix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Ora din Filipine',
                            'standard': 'Ora standard din Filipine',
                            'daylight': 'Ora de var\u0103 din Filipine'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Ora din Peru',
                            'standard': 'Ora standard din Peru',
                            'daylight': 'Ora de var\u0103 din Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Ora din Paraguay',
                            'standard': 'Ora standard din Paraguay',
                            'daylight': 'Ora de var\u0103 din Paraguay'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Ora din Papua Noua Guinee'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Ora Africii Meridionale'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Ora Africii Orientale'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Ora Africii Centrale'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Ora Afganistanului'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Ora Acre',
                            'standard': 'Ora standard Acre',
                            'daylight': 'Ora de var\u0103 Acre'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Ora Amazonului',
                            'standard': 'Ora standard a Amazonului',
                            'daylight': 'Ora de var\u0103 a Amazonului'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Ora central\u0103 nord-american\u0103',
                            'standard': 'Ora standard central\u0103 nord-american\u0103',
                            'daylight': 'Ora de var\u0103 central\u0103 nord-american\u0103'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Ora oriental\u0103 nord-american\u0103',
                            'standard': 'Ora standard oriental\u0103 nord-american\u0103',
                            'daylight': 'Ora de var\u0103 oriental\u0103 nord-american\u0103'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Ora zonei montane nord-americane',
                            'standard': 'Ora standard \u00EEn zona montan\u0103 nord-american\u0103',
                            'daylight': 'Ora de var\u0103 \u00EEn zona montan\u0103 nord-american\u0103'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Ora zonei Pacific nord-americane',
                            'standard': 'Ora standard \u00EEn zona Pacific nord-american\u0103',
                            'daylight': 'Ora de var\u0103 \u00EEn zona Pacific nord-american\u0103'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Ora din Anadyr',
                            'standard': 'Ora standard din Anadyr',
                            'daylight': 'Ora de var\u0103 din Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Ora Aqtau',
                            'standard': 'Ora standard Aqtau',
                            'daylight': 'Ora de var\u0103 a zonei Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Ora Aqtobe',
                            'standard': 'Ora standard Aqtobe',
                            'daylight': 'Ora de var\u0103 a zonei Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Ora din Capul Verde',
                            'standard': 'Ora standard din Capul Verde',
                            'daylight': 'Ora de var\u0103 din Capul Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Ora din Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Ora din Chatham',
                            'standard': 'Ora standard din Chatham',
                            'daylight': 'Ora de var\u0103 din Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Ora din Chile',
                            'standard': 'Ora standard din Chile',
                            'daylight': 'Ora de var\u0103 din Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Ora Chinei',
                            'standard': 'Ora standard a Chinei',
                            'daylight': 'Ora de var\u0103 a Chinei'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Ora din Choibalsan',
                            'standard': 'Ora standard din Choibalsan',
                            'daylight': 'Ora de var\u0103 din Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Ora din Insula Christmas'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Ora Insulelor Cocos'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Ora Columbiei',
                            'standard': 'Ora standard a Columbiei',
                            'daylight': 'Ora de var\u0103 a Columbiei'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Ora Insulelor Cook',
                            'standard': 'Ora standard a Insulelor Cook',
                            'daylight': 'Ora de var\u0103 a Insulelor Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Ora Cubei',
                            'standard': 'Ora standard a Cubei',
                            'daylight': 'Ora de var\u0103 a Cubei'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Ora din Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Ora din Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Ora Timorului de Est'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Ora din Insula Pa\u0219telui',
                            'standard': 'Ora standard din Insula Pa\u0219telui',
                            'daylight': 'Ora de var\u0103 din Insula Pa\u0219telui'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ora Ecuadorului'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Ora Europei Centrale',
                            'standard': 'Ora standard a Europei Centrale',
                            'daylight': 'Ora de var\u0103 a Europei Centrale'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Ora Europei de Est',
                            'standard': 'Ora standard a Europei de Est',
                            'daylight': 'Ora de var\u0103 a Europei de Est'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Ora Europei de Vest',
                            'standard': 'Ora standard a Europei de Vest',
                            'daylight': 'Ora de var\u0103 a Europei de Vest'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Ora din Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Ora din Tonga',
                            'standard': 'Ora standard din Tonga',
                            'daylight': 'Ora de var\u0103 din Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Ora din Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Ora din Turkmenistan',
                            'standard': 'Ora standard din Turkmenistan',
                            'daylight': 'Ora de var\u0103 din Turkmenistan'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Ora din Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Ora Uruguayului',
                            'standard': 'Ora standard a Uruguayului',
                            'daylight': 'Ora de var\u0103 a Uruguayului'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Ora din Uzbekistan',
                            'standard': 'Ora standard din Uzbekistan',
                            'daylight': 'Ora de var\u0103 din Uzbekistan'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Ora din Vanuatu',
                            'standard': 'Ora standard din Vanuatu',
                            'daylight': 'Ora de var\u0103 din Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Ora din Ekaterinburg',
                            'standard': 'Ora standard din Ekaterinburg',
                            'daylight': 'Ora de var\u0103 din Ekaterinburg'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Ora din Yaku\u021Bk',
                            'standard': 'Ora standard din Yaku\u021Bk',
                            'daylight': 'Ora de var\u0103 din Yaku\u021Bk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Ora din Wallis \u0219i Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Ora Insulei Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Ora din Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Ora din Volgograd',
                            'standard': 'Ora standard din Volgograd',
                            'daylight': 'Ora de var\u0103 din Volgograd'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Ora din Vladivostok',
                            'standard': 'Ora standard din Vladivostok',
                            'daylight': 'Ora de var\u0103 din Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Ora Venezuelei'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Ora din Tadjikistan'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Ora din Taipei',
                            'standard': 'Ora standard din Taipei',
                            'daylight': 'Ora de var\u0103 din Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Ora din Tahiti'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Ora din Guyana'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Ora standard a Golfului'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Ora Groenlandei occidentale',
                            'standard': 'Ora standard a Groenlandei occidentale',
                            'daylight': 'Ora de var\u0103 a Groenlandei occidentale'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Ora Groenlandei orientale',
                            'standard': 'Ora standard a Groenlandei orientale',
                            'daylight': 'Ora de var\u0103 a Groenlandei orientale'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Ora de Greenwhich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Ora Insulelor Gilbert'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Ora Georgiei',
                            'standard': 'Ora standard a Georgiei',
                            'daylight': 'Ora de var\u0103 a Georgiei'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Ora din Gambier'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Ora din Galapagos'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Ora din Teritoriile Australe \u0219i Antarctice Franceze'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Ora Guianei Franceze'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Ora din Fiji',
                            'standard': 'Ora standard din Fiji',
                            'daylight': 'Ora de var\u0103 din Fiji'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Ora din Insulele Falkland',
                            'standard': 'Ora standard din Insulele Falkland',
                            'daylight': 'Ora de var\u0103 din Insulele Falkland'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Ora Africii Occidentale',
                            'standard': 'Ora standard a Africii Occidentale',
                            'daylight': 'Ora de var\u0103 a Africii Occidentale'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Ora din Alaska',
                            'standard': 'Ora standard din Alaska',
                            'daylight': 'Ora de var\u0103 din Alaska'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Ora Almaty',
                            'standard': 'Ora standard Almaty',
                            'daylight': 'Ora de var\u0103 Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Ora arab\u0103',
                            'standard': 'Ora standard arab\u0103',
                            'daylight': 'Ora de var\u0103 arab\u0103'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Ora Argentinei',
                            'standard': 'Ora standard a Argentinei',
                            'daylight': 'Ora de var\u0103 a Argentinei'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Ora Argentinei Occidentale',
                            'standard': 'Ora standard a Argentinei Occidentale',
                            'daylight': 'Ora de var\u0103 a Argentinei Occidentale'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Ora Armeniei',
                            'standard': 'Ora standard a Armeniei',
                            'daylight': 'Ora de var\u0103 a Armeniei'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Ora zonei Atlantic nord-americane',
                            'standard': 'Ora standard \u00EEn zona Atlantic nord-american\u0103',
                            'daylight': 'Ora de var\u0103 \u00EEn zona Atlantic nord-american\u0103'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Ora Australiei Centrale',
                            'standard': 'Ora standard a Australiei Centrale',
                            'daylight': 'Ora de var\u0103 a Australiei Centrale'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Ora Australiei Central Occidentale',
                            'standard': 'Ora standard a Australiei Central Occidentale',
                            'daylight': 'Ora de var\u0103 a Australiei Central Occidentale'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Ora Australiei Orientale',
                            'standard': 'Ora standard a Australiei Orientale',
                            'daylight': 'Ora de var\u0103 a Australiei Orientale'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Ora Australiei Occidentale',
                            'standard': 'Ora standard a Australiei Occidentale',
                            'daylight': 'Ora de var\u0103 a Australiei Occidentale'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Ora Azerbaidjanului',
                            'standard': 'Ora standard a Azerbaidjanului',
                            'daylight': 'Ora de var\u0103 a Azerbaidjanului'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Ora din Azore',
                            'standard': 'Ora standard din Azore',
                            'daylight': 'Ora de var\u0103 din Azore'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Ora din Bangladesh',
                            'standard': 'Ora standard din Bangladesh',
                            'daylight': 'Ora de var\u0103 din Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Ora Bhutanului'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Ora Boliviei'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Ora Brasiliei',
                            'standard': 'Ora standard a Brasiliei',
                            'daylight': 'Ora de var\u0103 a Brasiliei'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Ora din Brunei Darussalam'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Ora din Hawaii-Aleutine',
                            'standard': 'Ora standard din Hawaii-Aleutine',
                            'daylight': 'Ora de var\u0103 din Hawaii-Aleutine'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Ora din Hong Kong',
                            'standard': 'Ora standard din Hong Kong',
                            'daylight': 'Ora de var\u0103 din Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Ora din Hovd',
                            'standard': 'Ora standard din Hovd',
                            'daylight': 'Ora de var\u0103 din Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Ora Indiei'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Ora Oceanului Indian'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Ora Indochinei'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Ora Indoneziei Centrale'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Ora Indoneziei de Est'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Ora Indoneziei de Vest'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Ora Iranului',
                            'standard': 'Ora standard a Iranului',
                            'daylight': 'Ora de var\u0103 a Iranului'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Ora din Irku\u021Bk',
                            'standard': 'Ora standard din Irku\u021Bk',
                            'daylight': 'Ora de var\u0103 din Irku\u021Bk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Ora Israelului',
                            'standard': 'Ora standard a Israelului',
                            'daylight': 'Ora de var\u0103 a Israelului'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Ora Japoniei',
                            'standard': 'Ora standard a Japoniei',
                            'daylight': 'Ora de var\u0103 a Japoniei'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Ora din Petropavlovsk-Kamcia\u021Bki',
                            'standard': 'Ora standard din Petropavlovsk-Kamcia\u021Bki',
                            'daylight': 'Ora de var\u0103 din Petropavlovsk-Kamcia\u021Bki'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Ora din Kazahstanul de Est'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Ora din Kazahstanul de Vest'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Ora Coreei',
                            'standard': 'Ora standard a Coreei',
                            'daylight': 'Ora de var\u0103 a Coreei'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Ora din Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Ora din Krasnoiarsk',
                            'standard': 'Ora standard din Krasnoiarsk',
                            'daylight': 'Ora de var\u0103 din Krasnoiarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Ora din K\u00E2rg\u00E2zstan'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Ora din Insulele Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Ora din Lord Howe',
                            'standard': 'Ora standard din Lord Howe',
                            'daylight': 'Ora de var\u0103 din Lord Howe'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Ora din Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Ora din Magadan',
                            'standard': 'Ora standard din Magadan',
                            'daylight': 'Ora de var\u0103 din Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Ora din Malaysia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Ora din Maldive'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Ora Insulelor Marchize'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Ora Insulelor Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Ora din Mauritius',
                            'standard': 'Ora standard din Mauritius',
                            'daylight': 'Ora de var\u0103 din Mauritius'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Ora din Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ora din Ulan Bator',
                            'standard': 'Ora standard din Ulan Bator',
                            'daylight': 'Ora de var\u0103 din Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Ora Moscovei',
                            'standard': 'Ora standard a Moscovei',
                            'daylight': 'Ora de var\u0103 a Moscovei'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Ora Myanmarului'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Ora din Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Ora Nepalului'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Ora Noii Caledonii',
                            'standard': 'Ora standard a Noii Caledonii',
                            'daylight': 'Ora de var\u0103 a Noii Caledonii'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Ora Noii Zeelande',
                            'standard': 'Ora standard a Noii Zeelande',
                            'daylight': 'Ora de var\u0103 a Noii Zeelande'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Ora din Newfoundland',
                            'standard': 'Ora standard din Newfoundland',
                            'daylight': 'Ora de var\u0103 din Newfoundland'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Ora din Niue'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Ora Insulelor Norfolk'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Ora din Fernando de Noronha',
                            'standard': 'Ora standard din Fernando de Noronha',
                            'daylight': 'Ora de var\u0103 din Fernando de Noronha'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Ora din Novosibirsk',
                            'standard': 'Ora standard din Novosibirsk',
                            'daylight': 'Ora de var\u0103 din Novosibirsk'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Ora din Omsk',
                            'standard': 'Ora standard din Omsk',
                            'daylight': 'Ora de var\u0103 din Omsk'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Ora Pakistanului',
                            'standard': 'Ora standard a Pakistanului',
                            'daylight': 'Ora de var\u0103 a Pakistanului'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Ora din Palau'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Ora din {0}',
                'regionFormat-type-daylight': 'Ora de var\u0103 din {0}',
                'regionFormat-type-standard': 'Ora standard din {0}',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': 'Ordonare normalizat\u0103',
                'collation': 'ordine de sortare',
                'colHiraganaQuaternary': 'Ordonare dup\u0103 kana',
                'colCaseLevel': 'Ordonare care \u021Bine seama de majuscule/minuscule',
                'colCaseFirst': 'Ordonare dup\u0103 majuscule/minuscule',
                'colBackwards': 'Ordonare invers\u0103 dup\u0103 accent',
                'colAlternate': 'Ordonare cu simbolurile ignorate',
                'calendar': 'calendar',
                'x': 'Utilizare privat\u0103',
                'variableTop': 'Ordona\u021Bi ca simboluri',
                'va': 'Varianta local\u0103',
                'timezone': 'Fusul orar',
                'numbers': 'numere',
                'currency': 'moned\u0103',
                'colStrength': 'Puterea ordon\u0103rii',
                'colNumeric': 'Ordonare numeric\u0103'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Ordona\u021Bi caracterele kana separat',
                    'yes': 'Ordona\u021Bi kana diferen\u021Biat'
                },
                'colCaseLevel': {
                    'no': 'Ordona\u021Bi ne\u021Bin\u00E2nd seama de diferen\u021Ba dintre majuscule/minuscule',
                    'yes': 'Ordona\u021Bi \u021Bin\u00E2nd seama de diferen\u021Ba dintre majuscule/minuscule'
                },
                'colCaseFirst': {
                    'lower': 'Ordona\u021Bi \u00EEnt\u00E2i minusculele',
                    'no': 'Ordona\u021Bi dup\u0103 dimensiunea normal\u0103 a literei',
                    'upper': 'Ordona\u021Bi mai \u00EEnt\u00E2i majusculele'
                },
                'colStrength': {
                    'identical': 'Ordona\u021Bi-le pe toate',
                    'primary': 'Ordona\u021Bi numai literele de baz\u0103',
                    'quaternary': 'Ordona\u021Bi dup\u0103 accente/dimensiunea literei/l\u0103\u021Bime/kana',
                    'secondary': 'Ordona\u021Bi dup\u0103 accent',
                    'tertiary': 'Ordona\u021Bi dup\u0103 accente/dimensiunea literei/l\u0103\u021Bime'
                },
                'colNumeric': {
                    'no': 'Ordona\u021Bi cifrele individual',
                    'yes': 'Ordona\u021Bi cifrele \u00EEn ordine numeric\u0103'
                },
                'colNormalization': {
                    'no': 'Ordona\u021Bi f\u0103r\u0103 normalizare',
                    'yes': 'Ordona\u021Bi caracterele unicode normalizat'
                },
                'calendar': {
                    'japanese': 'calendar japonez',
                    'iso8601': 'iso8601',
                    'coptic': 'calendar copt',
                    'dangi': 'dangi',
                    'ethiopic': 'calendar etiopian',
                    'ethiopic-amete-alem': 'Calendarul etiopian amete alem',
                    'gregorian': 'calendar gregorian',
                    'hebrew': 'calendar ebraic',
                    'persian': 'calendar persan',
                    'roc': 'calendar al Republicii Chineze',
                    'chinese': 'calendar chinezesc',
                    'buddhist': 'calendar budist',
                    'indian': 'calendar na\u021Bional indian',
                    'islamic': 'calendar islamic',
                    'islamic-civil': 'calendar islamic civil',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'sortare dup\u0103 cartea de telefon',
                    'gb2312han': 'sortare pentru chineza simplificat\u0103 - GB2312',
                    'eor': 'regulile europene de sortare',
                    'ducet': 'ordine de sortare Unicode implicit\u0103',
                    'dictionary': 'Ordine de sortare a dic\u021Bionarului',
                    'big5han': 'sortare pentru chineza tradi\u021Bional\u0103 - Big5',
                    'traditional': 'sortare tradi\u021Bional\u0103',
                    'standard': 'ordine de sortare standard',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Ordine de sortare a liniilor ideogramelor',
                    'stroke': 'ordine de sortare dup\u0103 trasare',
                    'searchjl': 'C\u0103uta\u021Bi \u00EEn func\u021Bie de consoana ini\u021Bial\u0103 hangul',
                    'search': 'c\u0103utare cu scop general',
                    'reformed': 'Ordine de sortare reformat\u0103',
                    'pinyin': 'sortare pinyin',
                    'phonetic': 'Tip de ordonare fonetic\u0103'
                },
                'numbers': {
                    'knda': 'cifre kannada',
                    'khmr': 'cifre khmere',
                    'kali': 'kali',
                    'jpanfin': 'numerale financiare japoneze',
                    'jpan': 'numerale japoneze',
                    'java': 'java',
                    'hebr': 'numerale ebraice',
                    'hantfin': 'numerale financiare chineze\u0219ti tradi\u021Bionale',
                    'hant': 'numerale chineze\u0219ti tradi\u021Bionale',
                    'hansfin': 'numerale financiare chineze\u0219ti simplificate',
                    'hans': 'numerale chineze\u0219ti simplificate',
                    'hanidec': 'numerale zecimale chineze\u0219ti',
                    'guru': 'cifre gurmukhi',
                    'gujr': 'cifre gujarati',
                    'greklow': 'numerale grece\u0219ti cu minuscule',
                    'grek': 'numerale grece\u0219ti',
                    'bali': 'bali',
                    'armnlow': 'numerale armene\u0219ti cu minuscule',
                    'armn': 'numerale armene\u0219ti',
                    'arabext': 'cifre indo-arabe extinse',
                    'arab': 'cifre indo-arabe',
                    'finance': 'Sistemul numeric financiar',
                    'traditional': 'Numere tradi\u021Bionale',
                    'native': 'Cifre native',
                    'beng': 'cifre bengaleze',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'cifre devanagari',
                    'orya': 'cifre oriya',
                    'osma': 'osma',
                    'roman': 'numerale romane',
                    'romanlow': 'numerale romane cu minuscule',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'Cifre Vai',
                    'tibt': 'cifre tibetane',
                    'thai': 'cifre thailandeze',
                    'telu': 'cifre telugu',
                    'tamldec': 'cifre tamil\u0103',
                    'taml': 'numerale tradi\u021Bionale tamil\u0103',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'cifre birmaneze',
                    'mtei': 'mtei',
                    'mong': 'Cifre mongole',
                    'mlym': 'cifre malayalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'cifre occidentale',
                    'laoo': 'cifre lao\u021Biene',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'numerale georgiene',
                    'fullwide': 'cifre cu l\u0103\u021Bimea \u00EEntreag\u0103',
                    'ethi': 'numerale etiopiene'
                },
                'colAlternate': {
                    'non-ignorable': 'Ordona\u021Bi simbolurile',
                    'shifted': 'Ordona\u021Bi ignor\u00E2nd simbolurile'
                },
                'colBackwards': {
                    'no': 'Ordona\u021Bi accentele \u00EEn mod normal',
                    'yes': 'Ordona\u021Bi dup\u0103 accente \u00EEn ordine invers\u0103'
                }
            },
            'codePatterns': {
                'language': 'Limb\u0103: {0}',
                'script': 'Scriere: {0}',
                'territory': 'Regiune: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} uncie',
                    'unitPattern-count-few': '{0} uncii',
                    'unitPattern-count-other': '{0} de uncii'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kilogram',
                    'unitPattern-count-few': '{0} kilograme',
                    'unitPattern-count-other': '{0} de kilograme'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} gram',
                    'unitPattern-count-few': '{0} grame',
                    'unitPattern-count-other': '{0} de grame'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} iard',
                    'unitPattern-count-few': '{0} iarzi',
                    'unitPattern-count-other': '{0} de iarzi'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} picometru',
                    'unitPattern-count-few': '{0} picometri',
                    'unitPattern-count-other': '{0} de picometri'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} milimetru',
                    'unitPattern-count-few': '{0} milimetri',
                    'unitPattern-count-other': '{0} de milimetri'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mil\u0103',
                    'unitPattern-count-few': '{0} mile',
                    'unitPattern-count-other': '{0} de mile'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} metru',
                    'unitPattern-count-few': '{0} metri',
                    'unitPattern-count-other': '{0} de metri'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} an lumin\u0103',
                    'unitPattern-count-few': '{0} ani lumin\u0103',
                    'unitPattern-count-other': '{0} de ani lumin\u0103'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} kilometru',
                    'unitPattern-count-few': '{0} kilometri',
                    'unitPattern-count-other': '{0} de kilometri'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} inch',
                    'unitPattern-count-few': '{0} inchi',
                    'unitPattern-count-other': '{0} de inchi'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} picior',
                    'unitPattern-count-few': '{0} picioare',
                    'unitPattern-count-other': '{0} de picioare'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} centimetru',
                    'unitPattern-count-few': '{0} centimetri',
                    'unitPattern-count-other': '{0} de centimetri'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} an',
                    'unitPattern-count-few': '{0} ani',
                    'unitPattern-count-other': '{0} de ani'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} s\u0103pt\u0103m\u00E2n\u0103',
                    'unitPattern-count-few': '{0} s\u0103pt\u0103m\u00E2ni',
                    'unitPattern-count-other': '{0} de s\u0103pt\u0103m\u00E2ni'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} lun\u0103',
                    'unitPattern-count-few': '{0} luni',
                    'unitPattern-count-other': '{0} de luni'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} livr\u0103',
                    'unitPattern-count-few': '{0} livre',
                    'unitPattern-count-other': '{0} de livre'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} cal putere',
                    'unitPattern-count-few': '{0} cai putere',
                    'unitPattern-count-other': '{0} de cai putere'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kilowatt',
                    'unitPattern-count-few': '{0} kilowa\u021Bi',
                    'unitPattern-count-other': '{0} de kilowa\u021Bi'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} watt',
                    'unitPattern-count-few': '{0} wa\u021Bi',
                    'unitPattern-count-other': '{0} de wa\u021Bi'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hectopascal',
                    'unitPattern-count-few': '{0} hectopascali',
                    'unitPattern-count-other': '{0} de hectopascali'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inch coloan\u0103 de mercur',
                    'unitPattern-count-few': '{0} inchi coloan\u0103 de mercur',
                    'unitPattern-count-other': '{0} de inchi coloan\u0103 de mercur'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} milibar',
                    'unitPattern-count-few': '{0} milibari',
                    'unitPattern-count-other': '{0} de milibari'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} litru',
                    'unitPattern-count-few': '{0} litri',
                    'unitPattern-count-other': '{0} de litri'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mil\u0103 cubic\u0103',
                    'unitPattern-count-few': '{0} mile cubice',
                    'unitPattern-count-other': '{0} de mile cubice'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} kilometru cub',
                    'unitPattern-count-few': '{0} kilometri cubi',
                    'unitPattern-count-other': '{0} de kilometri cubi'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} grad Fahrenheit',
                    'unitPattern-count-few': '{0} grade Fahrenheit',
                    'unitPattern-count-other': '{0} de grade Fahrenheit'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} grad Celsius',
                    'unitPattern-count-few': '{0} grade Celsius',
                    'unitPattern-count-other': '{0} de grade Celsius'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mil\u0103 pe or\u0103',
                    'unitPattern-count-few': '{0} mile pe or\u0103',
                    'unitPattern-count-other': '{0} de mile pe or\u0103'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} metru pe secund\u0103',
                    'unitPattern-count-few': '{0} metri pe secund\u0103',
                    'unitPattern-count-other': '{0} de metri pe secund\u0103'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} kilometru pe or\u0103',
                    'unitPattern-count-few': '{0} kilometri pe or\u0103',
                    'unitPattern-count-other': '{0} de kilometri pe or\u0103'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} minut',
                    'unitPattern-count-few': '{0} minute',
                    'unitPattern-count-other': '{0} de minute'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} milisecund\u0103',
                    'unitPattern-count-few': '{0} milisecunde',
                    'unitPattern-count-other': '{0} de milisecunde'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} or\u0103',
                    'unitPattern-count-few': '{0} ore',
                    'unitPattern-count-other': '{0} de ore'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} zi',
                    'unitPattern-count-few': '{0} zile',
                    'unitPattern-count-other': '{0} de zile'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mil\u0103 p\u0103trat\u0103',
                    'unitPattern-count-few': '{0} mile p\u0103trate',
                    'unitPattern-count-other': '{0} de mile p\u0103trate'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} metru p\u0103trat',
                    'unitPattern-count-few': '{0} metri p\u0103tra\u021Bi',
                    'unitPattern-count-other': '{0} de metri p\u0103tra\u021Bi'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} kilometru p\u0103trat',
                    'unitPattern-count-few': '{0} kilometri p\u0103tra\u021Bi',
                    'unitPattern-count-other': '{0} de kilometri p\u0103tra\u021Bi'
                },
                'per': {
                    'compoundUnitPattern': '{0} pe {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} for\u021B\u0103 g',
                    'unitPattern-count-few': '{0} for\u021B\u0103 g',
                    'unitPattern-count-other': '{0} for\u021B\u0103 g'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} minut',
                    'unitPattern-count-few': '{0} minute',
                    'unitPattern-count-other': '{0} de minute'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} secund\u0103',
                    'unitPattern-count-few': '{0} secunde',
                    'unitPattern-count-other': '{0} de secunde'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} grad',
                    'unitPattern-count-few': '{0} grade',
                    'unitPattern-count-other': '{0} de grade'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} acru',
                    'unitPattern-count-few': '{0} acri',
                    'unitPattern-count-other': '{0} de acri'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} hectar',
                    'unitPattern-count-few': '{0} hectare',
                    'unitPattern-count-other': '{0} de hectare'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} picior p\u0103trat',
                    'unitPattern-count-few': '{0} picioare p\u0103trate',
                    'unitPattern-count-other': '{0} picioare p\u0103trate'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} secund\u0103',
                    'unitPattern-count-few': '{0} secunde',
                    'unitPattern-count-other': '{0} de secunde'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-few': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-few': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-few': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-few': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-few': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-few': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-few': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-few': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} a.l.',
                    'unitPattern-count-few': '{0} a.l.',
                    'unitPattern-count-other': '{0} a.l.'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-few': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-few': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-few': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-few': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} an',
                    'unitPattern-count-few': '{0} ani',
                    'unitPattern-count-other': '{0} ani'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} s\u0103pt.',
                    'unitPattern-count-few': '{0} s\u0103pt.',
                    'unitPattern-count-other': '{0} s\u0103pt.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} lun\u0103',
                    'unitPattern-count-few': '{0} luni',
                    'unitPattern-count-other': '{0} luni'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-few': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} CP',
                    'unitPattern-count-few': '{0} CP',
                    'unitPattern-count-other': '{0} CP'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-few': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-few': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-few': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-few': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mb',
                    'unitPattern-count-few': '{0} mb',
                    'unitPattern-count-other': '{0} mb'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-few': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-few': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-few': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-few': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0C',
                    'unitPattern-count-few': '{0} \u00B0C',
                    'unitPattern-count-other': '{0} \u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-few': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-few': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-few': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min.',
                    'unitPattern-count-few': '{0} min.',
                    'unitPattern-count-other': '{0} min.'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-few': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} or\u0103',
                    'unitPattern-count-few': '{0} ore',
                    'unitPattern-count-other': '{0} ore'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} zi',
                    'unitPattern-count-few': '{0} zile',
                    'unitPattern-count-other': '{0} zile'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-few': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-few': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-few': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-few': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} min.',
                    'unitPattern-count-few': '{0} min.',
                    'unitPattern-count-other': '{0} min.'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} sec.',
                    'unitPattern-count-few': '{0} sec.',
                    'unitPattern-count-other': '{0} sec.'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-few': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} ac.',
                    'unitPattern-count-few': '{0} ac.',
                    'unitPattern-count-other': '{0} ac.'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-few': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-few': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} sec.',
                    'unitPattern-count-few': '{0} sec.',
                    'unitPattern-count-other': '{0} sec.'
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
