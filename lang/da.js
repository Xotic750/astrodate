/* AstroDate
 * Language: da
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
        AstroDate.lang('da', {
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
                    'unitPattern-count-one': '{0} unse',
                    'unitPattern-count-other': '{0} unser'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0}kg',
                    'unitPattern-count-other': '{0}kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0}g',
                    'unitPattern-count-other': '{0}g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yard',
                    'unitPattern-count-other': '{0} yard'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0}pm',
                    'unitPattern-count-other': '{0}pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0}mm',
                    'unitPattern-count-other': '{0}mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} mil',
                    'unitPattern-count-other': '{0} mil'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0}m',
                    'unitPattern-count-other': '{0}m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} lys\u00E5r',
                    'unitPattern-count-other': '{0} lys\u00E5r'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0}km',
                    'unitPattern-count-other': '{0}km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0}"',
                    'unitPattern-count-other': '{0}"'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} fod',
                    'unitPattern-count-other': '{0} fod'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0}cm',
                    'unitPattern-count-other': '{0}cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0}\u00E5',
                    'unitPattern-count-other': '{0}\u00E5'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0}u',
                    'unitPattern-count-other': '{0}u'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0}m',
                    'unitPattern-count-other': '{0}m'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} pund',
                    'unitPattern-count-other': '{0} pund'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0}hk',
                    'unitPattern-count-other': '{0}hk'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0}kW',
                    'unitPattern-count-other': '{0}kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0}W',
                    'unitPattern-count-other': '{0}W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0}hPa',
                    'unitPattern-count-other': '{0}hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0}" Hg',
                    'unitPattern-count-other': '{0}" Hg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0}mbar',
                    'unitPattern-count-other': '{0}mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0}L',
                    'unitPattern-count-other': '{0}L'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0}km\u00B3',
                    'unitPattern-count-other': '{0}km\u00B3'
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
                    'unitPattern-count-one': '{0} mph',
                    'unitPattern-count-other': '{0} mph'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0}m/s',
                    'unitPattern-count-other': '{0}m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0}km/t.',
                    'unitPattern-count-other': '{0}km/t.'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0}m',
                    'unitPattern-count-other': '{0}m'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0}ms',
                    'unitPattern-count-other': '{0}ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} t',
                    'unitPattern-count-other': '{0}t'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0}d',
                    'unitPattern-count-other': '{0}d'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0}m\u00B2',
                    'unitPattern-count-other': '{0}m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0}km\u00B2',
                    'unitPattern-count-other': '{0}km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0}G',
                    'unitPattern-count-other': '{0}G'
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
                    'unitPattern-count-one': '{0}ac',
                    'unitPattern-count-other': '{0}ac'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0}ha',
                    'unitPattern-count-other': '{0}ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0}s',
                    'unitPattern-count-other': '{0}s'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'aug.',
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
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marts',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'aug',
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
                                '8': 'A',
                                '7': 'J',
                                '6': 'J',
                                '5': 'M',
                                '12': 'D',
                                '11': 'N',
                                '10': 'O',
                                '9': 'S',
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A'
                            },
                            'wide': {
                                '8': 'august',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januar',
                                '2': 'februar',
                                '3': 'marts',
                                '4': 'april'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 's\u00F8n.',
                                'mon': 'man.',
                                'tue': 'tir.',
                                'wed': 'ons.',
                                'thu': 'tor.',
                                'fri': 'fre.',
                                'sat': 'l\u00F8r.'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'O',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 's\u00F8',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'on',
                                'thu': 'to',
                                'fri': 'fr',
                                'sat': 'l\u00F8'
                            },
                            'wide': {
                                'sun': 's\u00F8ndag',
                                'mon': 'mandag',
                                'tue': 'tirsdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'l\u00F8rdag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 's\u00F8n',
                                'mon': 'man',
                                'tue': 'tir',
                                'wed': 'ons',
                                'thu': 'tor',
                                'fri': 'fre',
                                'sat': 'l\u00F8r'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'O',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 's\u00F8',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'on',
                                'thu': 'to',
                                'fri': 'fr',
                                'sat': 'l\u00F8'
                            },
                            'wide': {
                                'sun': 's\u00F8ndag',
                                'mon': 'mandag',
                                'tue': 'tirsdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'l\u00F8rdag'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'K1',
                                '2': 'K2',
                                '3': 'K3',
                                '4': 'K4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'K1',
                                '2': 'K2',
                                '3': 'K3',
                                '4': 'K4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. kvartal',
                                '2': '2. kvartal',
                                '3': '3. kvartal',
                                '4': '4. kvartal'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'am': 'AM',
                                'noon': 'middag',
                                'pm': 'PM'
                            },
                            'wide': {
                                'am': 'formiddag',
                                'noon': 'middag',
                                'pm': 'eftermiddag'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'f\u00F8r vesterlandsk tidsregning',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'vesterlandsk tidsregning'
                        },
                        'eraAbbr': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'f.v.t.',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'v.t.'
                        },
                        'eraNarrow': {
                            '0': 'fKr',
                            '0-alt-variant': 'fvt',
                            '1': 'eKr',
                            '1-alt-variant': 'vt'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE \'den\' d. MMMM y',
                        'long': 'd. MMM y',
                        'medium': 'dd/MM/y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'HH.mm.ss zzzz',
                        'long': 'HH.mm.ss z',
                        'medium': 'HH.mm.ss',
                        'short': 'HH.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'kl.\' {0}',
                        'long': '{1} \'kl.\' {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMd': 'd. MMM y',
                            'yMMM': 'MMM y',
                            'yMM': 'MM/y',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E HH.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E \'d\'. d.',
                            'd': 'd.',
                            'GyMMMd': 'd. MMM y G',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMEd': 'E d. MMM y',
                            'Hms': 'HH.mm.ss',
                            'hms': 'h.mm.ss a',
                            'Hm': 'HH.mm',
                            'hm': 'h.mm a',
                            'H': 'HH',
                            'EHms': 'E HH.mm.ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'M',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMdd': 'dd/MM',
                            'MMM': 'MMM',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'E d. MMM',
                            'MMMMEd': 'E d. MMMM',
                            'ms': 'mm.ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'd/M/y',
                            'yMEd': 'E d/M/y'
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
                                'd': 'E \'den\' d. \u2013 E \'den\' d. MMM',
                                'M': 'E \'den\' d. MMM \u2013 E \'den\' d. MMM'
                            },
                            'MMMd': {
                                'd': 'd.\u2013d. MMM',
                                'M': 'd. MMM \u2013 d. MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E dd/MM \u2013 E dd/MM',
                                'M': 'E dd/MM \u2013 E dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM \u2013 dd/MM',
                                'M': 'dd/MM \u2013 dd/MM'
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
                                'M': 'MM/y \u2013 MM/y',
                                'y': 'MM/y \u2013 MM/y'
                            },
                            'yMd': {
                                'd': 'dd/MM/y \u2013 dd/MM/y',
                                'M': 'dd/MM/y \u2013 dd/MM/y',
                                'y': 'dd/MM/y \u2013 dd/MM/y'
                            },
                            'yMEd': {
                                'd': 'E dd/MM/y \u2013 E dd/MM/y',
                                'M': 'E dd/MM/y \u2013 E dd/MM/y',
                                'y': 'E dd/MM/y \u2013 E dd/MM/y'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd.\u2013d. MMM y',
                                'M': 'd. MMM \u2013 d. MMM y',
                                'y': 'd. MMM y \u2013 d. MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E \'den\' d. \u2013 E \'den\' d. MMM y',
                                'M': 'E \'den\' d. MMM \u2013 E \'den\' d. MMM y',
                                'y': 'E \'den\' d. MMM y \u2013 E \'den\' d. MMM y'
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
                                'a': 'h.mm a \u2013 h.mm a v',
                                'h': 'h.mm\u2013h.mm a v',
                                'm': 'h.mm\u2013h.mm a v'
                            },
                            'Hm': {
                                'H': 'HH.mm\u2013HH.mm',
                                'm': 'HH.mm\u2013HH.mm'
                            },
                            'hm': {
                                'a': 'h.mm a \u2013 h.mm a',
                                'h': 'h.mm\u2013h.mm a',
                                'm': 'h.mm\u2013h.mm a'
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
                            'exemplarCity': 'P\u00E5ske\u00F8en'
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
                            'exemplarCity': 'Maldiverne'
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
                            'exemplarCity': 'Christmas'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Comoro'
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
                            'exemplarCity': 'Ukendt by'
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
                            'exemplarCity': 'Sydpolen'
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
                            'exemplarCity': 'Martinique'
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
                                'exemplarCity': 'Beulah, North Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, North Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, North Dakota'
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
                            'exemplarCity': 'Saint-Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\'s'
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
                            'exemplarCity': 'South Georgia'
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
                            'exemplarCity': 'Azorerne'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'De Kanariske \u00D8er'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'F\u00E6r\u00F8erne'
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
                            'exemplarCity': 'Luxembourg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Britisk sommertid'
                            },
                            'exemplarCity': 'London'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lissabon'
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
                            'exemplarCity': 'Isle of Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bukarest'
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
                            'exemplarCity': 'Beograd'
                        },
                        'Athens': {
                            'exemplarCity': 'Athen'
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
                            'exemplarCity': 'Tirane'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Uzhgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporizjzja'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Warszawa'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wien'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikanet'
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
                            'exemplarCity': 'Rom'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Prag'
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
                                'daylight': 'Irsk sommertid'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'K\u00F8benhavn'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'Busingen'
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
                            'exemplarCity': 'Algier'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Shanghai'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seoul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sakhalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh-byen'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riyadh'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Rangoon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pyongyang'
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
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novosibirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Baghdad'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damaskus'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dhaka'
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
                            'exemplarCity': 'Jakarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulaanbaatar'
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
                            'exemplarCity': 'Jakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Jekaterinburg'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Yerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Tokyo'
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
                            'exemplarCity': 'Tasjkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapore'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ashgabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqtobe'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqtau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
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
                            'exemplarCity': 'Bishkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamchatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Katmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoyarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lumpur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuwait'
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
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellisk tid'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Samoa-tid',
                            'standard': 'Samoa-normaltid',
                            'daylight': 'Samoa-sommertid'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samara-tid',
                            'standard': 'Samara-normaltid',
                            'daylight': 'Samara-sommertid'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sakhalin-tid',
                            'standard': 'Sakhalin-normaltid',
                            'daylight': 'Sakhalin-sommertid'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rothera-tid'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Reunion-tid'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylorda-tid',
                            'standard': 'Qyzylorda-normaltid',
                            'daylight': 'Qyzylorda-sommertid'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponape-tid'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairn-tid'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint Pierre- og Miquelon-tid',
                            'standard': 'Saint Pierre- og Miquelon-normaltid',
                            'daylight': 'Saint Pierre- og Miquelon-sommertid'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenix\u00F8en-tid'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filippinsk tid',
                            'standard': 'Filippinsk normaltid',
                            'daylight': 'Filippinsk sommertid'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Peruviansk tid',
                            'standard': 'Peruviansk normaltid',
                            'daylight': 'Peruviansk sommertid'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayansk tid',
                            'standard': 'Paraguayansk normaltid',
                            'daylight': 'Paraguayansk sommertid'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua Ny Guinea-tid'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palau-normaltid'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistansk tid',
                            'standard': 'Pakistansk normaltid',
                            'daylight': 'Pakistansk sommertid'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsk-tid',
                            'standard': 'Omsk-normaltid',
                            'daylight': 'Omsk-sommertid'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsk tid',
                            'standard': 'Novosibirsk normaltid',
                            'daylight': 'Novosibirsk sommertid'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Nordmarianerne-tid'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronha-tid',
                            'standard': 'Fernando de Noronha-normaltid',
                            'daylight': 'Fernando de Noronha-sommertid'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk\u00F8en-tid'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niue-tid'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandsk tid',
                            'standard': 'Newfoundlandsk normaltid',
                            'daylight': 'Newfoundlandsk sommertid'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonas-tid',
                            'standard': 'Amazonas-normaltid',
                            'daylight': 'Amazonas-sommertid'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Central-tid',
                            'standard': 'Central-normaltid',
                            'daylight': 'Central-sommertid'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Eastern-tid',
                            'standard': 'Eastern-normaltid',
                            'daylight': 'Eastern-sommertid'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Mountain-tid',
                            'standard': 'Mountain-normaltid',
                            'daylight': 'Mountain-sommertid'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Pacific-tid',
                            'standard': 'Pacific-normaltid',
                            'daylight': 'Pacific-sommertid'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyr-tid',
                            'standard': 'Anadyr-normaltid',
                            'daylight': 'Anadyr-sommertid'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtau-tid',
                            'standard': 'Aqtau-normaltid',
                            'daylight': 'Aqtau-sommertid'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqtobe-tid',
                            'standard': 'Aqtobe-normaltid',
                            'daylight': 'Aqtobe-sommertid'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kapverdisk tid',
                            'standard': 'Kapverdisk normaltid',
                            'daylight': 'Kapverdisk sommertid'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorro-tid'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chatham-tid',
                            'standard': 'Chatham-normaltid',
                            'daylight': 'Chatham-sommertid'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilensk tid',
                            'standard': 'Chilensk normaltid',
                            'daylight': 'Chilensk sommertid'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kinesisk tid',
                            'standard': 'Kinesisk normaltid',
                            'daylight': 'Kinesisk sommertid'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Choibalsan-tid',
                            'standard': 'Choibalsan-normaltid',
                            'daylight': 'Choibalsan-sommertid'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Christmas Island-normaltid'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Cocos\u00F8erne-normaltid'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Colombiansk tid',
                            'standard': 'Colombiansk normaltid',
                            'daylight': 'Colombiansk sommertid'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cook\u00F8erne-tid',
                            'standard': 'Cook\u00F8erne-normaltid',
                            'daylight': 'Cook\u00F8erne-sommertid'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Cubansk tid',
                            'standard': 'Cubansk normaltid',
                            'daylight': 'Cubansk sommertid'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davis-tid'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urville-tid'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u00D8sttimor-tid'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'P\u00E5ske\u00F8en-tid',
                            'standard': 'P\u00E5ske\u00F8en-normaltid',
                            'daylight': 'P\u00E5ske\u00F8en-sommertid'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadoriansk tid'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Centraleurop\u00E6isk tid',
                            'standard': 'Centraleurop\u00E6isk normaltid',
                            'daylight': 'Centraleurop\u00E6isk sommertid'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u00D8steurop\u00E6isk tid',
                            'standard': '\u00D8steurop\u00E6isk normaltid',
                            'daylight': '\u00D8steurop\u00E6isk sommertid'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Vesteurop\u00E6isk tid',
                            'standard': 'Vesteurop\u00E6isk normaltid',
                            'daylight': 'Vesteurop\u00E6isk sommertid'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklands\u00F8erne-tid',
                            'standard': 'Falklands\u00F8erne-normaltid',
                            'daylight': 'Falklands\u00F8erne-sommertid'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fijiansk tid',
                            'standard': 'Fijiansk normaltid',
                            'daylight': 'Fijiansk sommertid'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Fransk Guyana-tid'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Franske Sydlige og Antarktiske Territorier-tid'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Galapagos-tid'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelau-tid'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongansk tid',
                            'standard': 'Tongansk normaltid',
                            'daylight': 'Tongansk sommertid'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Truk-tid'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmensk tid',
                            'standard': 'Turkmensk normaltid',
                            'daylight': 'Turkmensk sommertid'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalu-tid'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayansk tid',
                            'standard': 'Uruguayansk normaltid',
                            'daylight': 'Uruguayansk sommertid'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Usbekisk tid',
                            'standard': 'Usbekisk normaltid',
                            'daylight': 'Usbekisk sommertid'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatu-tid',
                            'standard': 'Vanuatu-normaltid',
                            'daylight': 'Vanuatu-sommertid'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Yekaterinburgsk tid',
                            'standard': 'Yekaterinburgsk normaltid',
                            'daylight': 'Yekaterinburgsk sommertid'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Yakutsk-tid',
                            'standard': 'Yakutsk-normaltid',
                            'daylight': 'Yakutsk-sommertid'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis og Futuna-tid'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake\u00F8en-tid'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostok-tid'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgograd-tid',
                            'standard': 'Volgograd-normaltid',
                            'daylight': 'Volgograd-sommertid'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostok-tid',
                            'standard': 'Vladivostok-normaltid',
                            'daylight': 'Vladivostok-sommertid'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelansk tid'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadsjikisk tid'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipei-tid',
                            'standard': 'Taipei-normaltid',
                            'daylight': 'Taipei-sommertid'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitisk tid'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowa-tid'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinam-tid'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'South Georgia-tid'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomon\u00F8erne-tid'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporeansk normaltid'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Golflandene-normaltid'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guam-normaltid'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Vestgr\u00F8nlandsk tid',
                            'standard': 'Vestgr\u00F8nlandsk normaltid',
                            'daylight': 'Vestgr\u00F8nlandsk sommertid'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u00D8stgr\u00F8nlandsk tid',
                            'standard': '\u00D8stgr\u00F8nlandsk normaltid',
                            'daylight': '\u00D8stgr\u00F8nlandsk sommertid'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbert\u00F8erne-tid'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgiansk tid',
                            'standard': 'Georgiansk normaltid',
                            'daylight': 'Georgiansk sommertid'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambier-tid'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acre-tid',
                            'standard': 'Acre-normaltid',
                            'daylight': 'Acre-sommertid'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afghansk tid'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Centralafrikansk tid'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u00D8stafrikansk tid'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Sydafrikansk tid'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Vestafrikansk tid',
                            'standard': 'Vestafrikansk normaltid',
                            'daylight': 'Vestafrikansk sommertid'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaska-tid',
                            'standard': 'Alaska-normaltid',
                            'daylight': 'Alaska-sommertid'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almaty-tid',
                            'standard': 'Almaty-normaltid',
                            'daylight': 'Almaty-sommertid'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Arabisk tid',
                            'standard': 'Arabisk normaltid',
                            'daylight': 'Arabisk sommertid'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentisk tid',
                            'standard': 'Argentinsk normaltid',
                            'daylight': 'Argentinsk sommertid'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Vestargentinsk tid',
                            'standard': 'Vestargentinsk normaltid',
                            'daylight': 'Vestargentinsk sommertid'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armensk tid',
                            'standard': 'Armensk normaltid',
                            'daylight': 'Armensk sommertid'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Atlantic-tid',
                            'standard': 'Atlantic-normaltid',
                            'daylight': 'Atlantic-sommertid'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Centralaustralsk tid',
                            'standard': 'Centralaustralsk normaltid',
                            'daylight': 'Centralaustralsk sommertid'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Vestlig centralaustralsk tid',
                            'standard': 'Vestlig centralaustralsk normaltid',
                            'daylight': 'Vestlig centralaustralsk sommertid'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u00D8staustralsk tid',
                            'standard': '\u00D8staustralsk normaltid',
                            'daylight': '\u00D8staustralsk sommertid'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Vestaustralsk tid',
                            'standard': 'Vestaustralsk normaltid',
                            'daylight': 'Vestaustralsk sommertid'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Aserbajdsjansk tid',
                            'standard': 'Aserbajdsjansk normaltid',
                            'daylight': 'Aserbajdsjansk sommertid'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorerne-tid',
                            'standard': 'Azorerne-normaltid',
                            'daylight': 'Azorerne-sommertid'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladeshisk tid',
                            'standard': 'Bangladeshisk normaltid',
                            'daylight': 'Bangladeshisk sommertid'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutanesisk tid'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Boliviansk tid'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasiliansk tid',
                            'standard': 'Brasiliansk normaltid',
                            'daylight': 'Brasiliansk sommertid'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunei Darussalam-tid'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyana-tid'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hawaii-Aleutian-tid',
                            'standard': 'Hawaii-Aleutian-normaltid',
                            'daylight': 'Hawaii-Aleutian-sommertid'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkong-tid',
                            'standard': 'Hongkong-normaltid',
                            'daylight': 'Hongkong-sommertid'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovd-tid',
                            'standard': 'Hovd-normaltid',
                            'daylight': 'Hovd-sommertid'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Indisk normaltid'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Indiske Ocean-normaltid'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokina-tid'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Centralindonesisk tid'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u00D8stindonesisk tid'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Vestindonesisk tid'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iransk tid',
                            'standard': 'Iransk normaltid',
                            'daylight': 'Iransk sommertid'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsk-tid',
                            'standard': 'Irkutsk-normaltid',
                            'daylight': 'Irkutsk-sommertid'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israelsk tid',
                            'standard': 'Israelsk normaltid',
                            'daylight': 'Israelsk sommertid'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japansk tid',
                            'standard': 'Japansk normaltid',
                            'daylight': 'Japansk sommertid'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Petropavlovsk-Kamchatski tid',
                            'standard': 'Petropavlovsk-Kamchatski normaltid',
                            'daylight': 'Petropavlovsk-Kamchatski sommertid'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u00D8stkasakhstansk tid'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Vestkasakhstansk tid'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Koreansk tid',
                            'standard': 'Koreansk normaltid',
                            'daylight': 'Koreansk sommertid'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosrae-tid'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnoyarsk-tid',
                            'standard': 'Krasnoyarsk-normaltid',
                            'daylight': 'Krasnoyarsk-sommertid'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgisisk tid'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Langa tid'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Linje\u00F8erne-tid'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howe-tid',
                            'standard': 'Lord Howe-normaltid',
                            'daylight': 'Lord Howe-sommertid'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macao-tid',
                            'standard': 'Macao-normaltid',
                            'daylight': 'Macao-sommertid'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarie tid'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadan-tid',
                            'standard': 'Magadan-normaltid',
                            'daylight': 'Magadan-sommertid'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malaysisk tid'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivisk tid'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesas-tid'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshall\u00F8erne-tid'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritius-tid',
                            'standard': 'Mauritius-normaltid',
                            'daylight': 'Mauritius-sommertid'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawson-tid'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulan Bator-tid',
                            'standard': 'Ulan Bator-normaltid',
                            'daylight': 'Ulan Bator-sommertid'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovitisk tid',
                            'standard': 'Moskovitisk normaltid',
                            'daylight': 'Moskovitisk sommertid'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarsk tid'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Nauru-tid'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalesisk tid'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nykaledonsk tid',
                            'standard': 'Nykaledonsk normaltid',
                            'daylight': 'Nykaledonsk sommertid'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Newzealandsk tid',
                            'standard': 'Newzealandsk normaltid',
                            'daylight': 'Newzealandsk sommertid'
                        }
                    }
                },
                'hourFormat': '+HH.mm;-HH.mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Tidszone for {0}',
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
                'colNormalization': 'Normaliseret sortering',
                'collation': 'Sortering',
                'colHiraganaQuaternary': 'Sortering efter kana',
                'colCaseLevel': 'Sortering med forskel p\u00E5 sm\u00E5 og store bogstaver',
                'colCaseFirst': 'Sortering efter store/sm\u00E5 bogstaver',
                'colBackwards': 'Omvendt sortering efter accenter',
                'colAlternate': 'Ignorer symboler under sortering',
                'calendar': 'Kalender',
                'x': 'Privatbrug',
                'variableTop': 'Sort\u00E9r som symboler',
                'va': 'Sprogvariant',
                'timezone': 'Tidszone',
                'numbers': 'Tal',
                'currency': 'Valuta',
                'colStrength': 'Sorteringsstyrke',
                'colNumeric': 'Numerisk sortering'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Sort\u00E9r kana separat',
                    'yes': 'Sort\u00E9r kana med forskel p\u00E5 varianter'
                },
                'colCaseLevel': {
                    'no': 'Sort\u00E9r uden forskel p\u00E5 store og sm\u00E5 bogstaver',
                    'yes': 'Sort\u00E9r med skelnen mellem store og sm\u00E5 bogstaver'
                },
                'colCaseFirst': {
                    'lower': 'Sort\u00E9r med sm\u00E5 bogstaver f\u00F8rst',
                    'no': 'Sort\u00E9r efter store og sm\u00E5 bogstaver i almindelig r\u00E6kkef\u00F8lge',
                    'upper': 'Sort\u00E9r med store bogstaver f\u00F8rst'
                },
                'colStrength': {
                    'identical': 'Sort\u00E9r alt',
                    'primary': 'Sort\u00E9r kun efter basisbogstaver',
                    'quaternary': 'Sort\u00E9r efter accenter/sm\u00E5 og store bogstaver/bredde/kana',
                    'secondary': 'Sort\u00E9r efter accenter',
                    'tertiary': 'Sort\u00E9r efter accenter/store og sm\u00E5 bogstaver/bredde'
                },
                'colNumeric': {
                    'no': 'Sort\u00E9r efter individuelle cifre',
                    'yes': 'Sort\u00E9r tal numerisk'
                },
                'colNormalization': {
                    'no': 'Sort\u00E9r uden normalisering',
                    'yes': 'Sort\u00E9r Unicode efter f\u00F8rste normalisering'
                },
                'calendar': {
                    'japanese': 'japansk kalender',
                    'iso8601': 'ISO-8601-kalender',
                    'coptic': 'koptisk kalender',
                    'dangi': 'dangi-kalender',
                    'ethiopic': 'etiopisk kalender',
                    'ethiopic-amete-alem': 'etiopisk amete-alem-kalender',
                    'gregorian': 'gregoriansk kalender',
                    'hebrew': 'j\u00F8disk kalender',
                    'persian': 'persisk kalender',
                    'roc': 'kalender for Republikken Kina',
                    'chinese': 'kinesisk kalender',
                    'buddhist': 'buddhistisk kalender',
                    'indian': 'indisk nationalkalender',
                    'islamic': 'islamisk kalender',
                    'islamic-civil': 'verdslig islamisk kalender',
                    'islamic-rgsa': 'islamisk kalender (Saudi-Arabien, observation)',
                    'islamic-tbla': 'islamisk kalender (tabellarisk, astronomisk epoke)',
                    'islamic-umalqura': 'islamisk kalender (Umm al-Qura)'
                },
                'collation': {
                    'phonebook': 'sorteringsr\u00E6kkef\u00F8lge i telefonb\u00F8ger',
                    'gb2312han': 'sorteringsr\u00E6kkef\u00F8lge forkortet kinesisk - GB2312',
                    'eor': 'europ\u00E6isk sorteringsr\u00E6kkef\u00F8lge',
                    'ducet': 'Unicode-standardsortering',
                    'dictionary': 'sorteringsr\u00E6kkef\u00F8lge for ordbog',
                    'big5han': 'sorteringsr\u00E6kkef\u00F8lge uforkortet kinesisk - Big5',
                    'traditional': 'traditionel sorteringsr\u00E6kkef\u00F8lge',
                    'standard': 'standardsorteringsr\u00E6kkef\u00F8lge',
                    'zhuyin': 'zhuyin-sorteringsr\u00E6kkef\u00F8lge',
                    'unihan': 'sortering efter streger i rodtegn',
                    'stroke': 'stregbaseret sorteringsr\u00E6kkef\u00F8lge',
                    'searchjl': 'sort\u00E9r efter den f\u00F8rste konsonant i hangul',
                    'search': 'generel s\u00F8gning',
                    'reformed': 'ny sorteringsr\u00E6kkef\u00F8lge',
                    'pinyin': 'pinyin-baseret sorteringsr\u00E6kkef\u00F8lge',
                    'phonetic': 'fonetisk sorteringsr\u00E6kkef\u00F8lge'
                },
                'numbers': {
                    'knda': 'Kannada tal',
                    'khmr': 'Khmerske tal',
                    'kali': 'Kayah Li-tal',
                    'jpanfin': 'Japanske financielle tal',
                    'jpan': 'Japanske tal',
                    'java': 'Javanesiske tal',
                    'hebr': 'Hebr\u00E6iske tal',
                    'hantfin': 'Traditionelle kinesiske finansielle tal',
                    'hant': 'Traditionelle kinesiske tal',
                    'hansfin': 'Forenklede kinesiske financielle tal',
                    'hans': 'Forenklede kinesiske tal',
                    'hanidec': 'Kinesiske decimaltal',
                    'guru': 'Gurmukhi tal',
                    'gujr': 'Gujarati tal',
                    'greklow': 'Gr\u00E6ske tal i sm\u00E5 bogstaver',
                    'grek': 'Gr\u00E6ske tal',
                    'bali': 'Balinesiske tal',
                    'armnlow': 'Armenske tal i sm\u00E5 bogstaver',
                    'armn': 'Armenske tal',
                    'arabext': 'Udvidede hindu-arabiske tal',
                    'arab': 'Hindu-arabiske tal',
                    'finance': 'Finansielle tal',
                    'traditional': 'Traditionelle tal',
                    'native': 'Nationale cifre',
                    'beng': 'Bengalske tal',
                    'brah': 'Brahmi-tal',
                    'cakm': 'Chakma-tal',
                    'cham': 'Cham-tal',
                    'deva': 'Devanagariske tal',
                    'orya': 'Oriya tal',
                    'osma': 'Osmanya-tal',
                    'roman': 'Romertal',
                    'romanlow': 'Romertal i sm\u00E5 bogstaver',
                    'saur': 'Saurashtra-tal',
                    'shrd': 'Sharada-tal',
                    'sora': 'Sora Sompeng-tal',
                    'sund': 'Sundanesiske tal',
                    'vaii': 'Vai-tal',
                    'tibt': 'Tibetanske tal',
                    'thai': 'Thailandske tal',
                    'telu': 'Telugu tal',
                    'tamldec': 'Tamilske tal',
                    'taml': 'Traditionelle tamilske tal',
                    'talu': 'Nye Tai Lue-tal',
                    'takr': 'Takri-tal',
                    'olck': 'Ol Chiki-tal',
                    'nkoo': 'N\'Ko-tal',
                    'mymrshan': 'Myanmar Shan-tal',
                    'mymr': 'Myanmar tal',
                    'mtei': 'Meetei Mayek-tal',
                    'mong': 'Mongolske tal',
                    'mlym': 'Malayalamske tal',
                    'limb': 'Limbu-tal',
                    'lepc': 'Lepcha-tal',
                    'latn': 'Arabertal',
                    'laoo': 'Laotiske tal',
                    'lanatham': 'Tai Tham Tahm-tal',
                    'lana': 'Tai Tham Hora-tal',
                    'geor': 'Georgiske tal',
                    'fullwide': 'Tal i fuld bredde',
                    'ethi': 'Etiopiske tal'
                },
                'colAlternate': {
                    'non-ignorable': 'Sort\u00E9r efter symboler',
                    'shifted': 'Sort\u00E9r, og ignorer symboler'
                },
                'colBackwards': {
                    'no': 'Sort\u00E9r efter accenter i normal r\u00E6kkef\u00F8lge',
                    'yes': 'Sort\u00E9r efter accenter i omvendt r\u00E6kkef\u00F8lge'
                }
            },
            'codePatterns': {
                'language': 'Sprog: {0}',
                'script': 'Instruks: {0}',
                'territory': 'Omr\u00E5de: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} unse',
                    'unitPattern-count-other': '{0} unser'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kilogram',
                    'unitPattern-count-other': '{0} kilogram'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} gram',
                    'unitPattern-count-other': '{0} gram'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} engelsk yard',
                    'unitPattern-count-other': '{0} engelske yard'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pikometer',
                    'unitPattern-count-other': '{0} pikometer'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} millimeter',
                    'unitPattern-count-other': '{0} millimeter'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} engelsk mil',
                    'unitPattern-count-other': '{0} engelske mil'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} meter',
                    'unitPattern-count-other': '{0} meter'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} lys\u00E5r',
                    'unitPattern-count-other': '{0} lys\u00E5r'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} kilometer',
                    'unitPattern-count-other': '{0} kilometer'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} tomme',
                    'unitPattern-count-other': '{0} tommer'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} fod',
                    'unitPattern-count-other': '{0} fod'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} centimeter',
                    'unitPattern-count-other': '{0} centimeter'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u00E5r',
                    'unitPattern-count-other': '{0} \u00E5r'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} uge',
                    'unitPattern-count-other': '{0} uger'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m\u00E5ned',
                    'unitPattern-count-other': '{0} m\u00E5neder'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} sk\u00E5lpund',
                    'unitPattern-count-other': '{0} sk\u00E5lpund'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} hestekraft',
                    'unitPattern-count-other': '{0} hestekr\u00E6fter'
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
                    'unitPattern-count-one': '{0} tomme kviks\u00F8lv',
                    'unitPattern-count-other': '{0} tommer kviks\u00F8lv'
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
                    'unitPattern-count-one': '{0} kubik-engelsk mil',
                    'unitPattern-count-other': '{0} kubik-engelske mil'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} kubikkilometer',
                    'unitPattern-count-other': '{0} kubikkilometer'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} grad Fahrenheit',
                    'unitPattern-count-other': '{0} grader Fahrenheit'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} grad Celsius',
                    'unitPattern-count-other': '{0} grader Celsius'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} engelsk mil per time',
                    'unitPattern-count-other': '{0} engelske mil per time'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} meter per sekund',
                    'unitPattern-count-other': '{0} meter per sekund'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} kilometer per time',
                    'unitPattern-count-other': '{0} kilometer per time'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} minut',
                    'unitPattern-count-other': '{0} minutter'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} millisekund',
                    'unitPattern-count-other': '{0} millisekunder'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} time',
                    'unitPattern-count-other': '{0} timer'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} d\u00F8gn',
                    'unitPattern-count-other': '{0} d\u00F8gn'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} kvadrat-engelsk mil',
                    'unitPattern-count-other': '{0} kvadrat-engelske mil'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} kvadratmeter',
                    'unitPattern-count-other': '{0} kvadratmeter'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} kvadratkilometer',
                    'unitPattern-count-other': '{0} kvadratkilometer'
                },
                'per': {
                    'compoundUnitPattern': '{0} pr. {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G-kraft',
                    'unitPattern-count-other': '{0} G-kraft'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} bueminut',
                    'unitPattern-count-other': '{0} bueminutter'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} buesekund',
                    'unitPattern-count-other': '{0} buesekunder'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} grad',
                    'unitPattern-count-other': '{0} grader'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} acre',
                    'unitPattern-count-other': '{0} acres'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} hektar',
                    'unitPattern-count-other': '{0} hektar'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} kvadratfod',
                    'unitPattern-count-other': '{0} kvadratfod'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} sekund',
                    'unitPattern-count-other': '{0} sekunder'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} unse',
                    'unitPattern-count-other': '{0} unser'
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
                    'unitPattern-count-one': '{0} yard',
                    'unitPattern-count-other': '{0} yard'
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
                    'unitPattern-count-one': '{0} mil',
                    'unitPattern-count-other': '{0} mil'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} lys\u00E5r',
                    'unitPattern-count-other': '{0} lys\u00E5r'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} tomme',
                    'unitPattern-count-other': '{0} tommer'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} fod',
                    'unitPattern-count-other': '{0} fod'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} \u00E5r',
                    'unitPattern-count-other': '{0} \u00E5r'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} uge',
                    'unitPattern-count-other': '{0} uger'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m\u00E5n',
                    'unitPattern-count-other': '{0} m\u00E5n'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} sk\u00E5lpund',
                    'unitPattern-count-other': '{0} sk\u00E5lpund'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} hk',
                    'unitPattern-count-other': '{0} hk'
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
                    'unitPattern-count-one': '{0} # Hg',
                    'unitPattern-count-other': '{0} # Hg'
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
                    'unitPattern-count-one': '{0}\u00B0C',
                    'unitPattern-count-other': '{0}\u00B0C'
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
                    'unitPattern-count-one': '{0} km/t.',
                    'unitPattern-count-other': '{0} km/t.'
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
                    'unitPattern-count-one': '{0} t',
                    'unitPattern-count-other': '{0} t'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} d',
                    'unitPattern-count-other': '{0} d'
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
                    'unitPattern-count-one': '{0} kvadratfod',
                    'unitPattern-count-other': '{0} kvadratfod'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} sek',
                    'unitPattern-count-other': '{0} sek'
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
