/* AstroDate
 * Language: sv
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
        AstroDate.lang('sv', {
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
                    'unitPattern-count-one': '{0} uns',
                    'unitPattern-count-other': '{0} uns'
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
                    'unitPattern-count-one': '{0}yd',
                    'unitPattern-count-other': '{0}yd'
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
                    'unitPattern-count-one': '{0}mi',
                    'unitPattern-count-other': '{0}mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0}m',
                    'unitPattern-count-other': '{0}m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ljus\u00E5r',
                    'unitPattern-count-other': '{0} ljus\u00E5r'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0}km',
                    'unitPattern-count-other': '{0}km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} tum',
                    'unitPattern-count-other': '{0} tum'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} fot',
                    'unitPattern-count-other': '{0} fot'
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
                    'unitPattern-count-one': '{0}v',
                    'unitPattern-count-other': '{0}v'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0}m',
                    'unitPattern-count-other': '{0}m'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} sk\u00E5lpund',
                    'unitPattern-count-other': '{0} sk\u00E5lpund'
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
                    'unitPattern-count-one': '{0} tum Hg',
                    'unitPattern-count-other': '{0} tum Hg'
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
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0}m/s',
                    'unitPattern-count-other': '{0}m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0}km/h',
                    'unitPattern-count-other': '{0}km/h'
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
                    'unitPattern-count-one': '{0}h',
                    'unitPattern-count-other': '{0}h'
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
                    'unitPattern-count-one': '{0} ac',
                    'unitPattern-count-other': '{0} ac'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0}ha',
                    'unitPattern-count-other': '{0}ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} fot\u00B2',
                    'unitPattern-count-other': '{0} fot\u00B2'
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
                                '8': 'augusti',
                                '7': 'juli',
                                '6': 'juni',
                                '5': 'maj',
                                '12': 'december',
                                '11': 'november',
                                '10': 'oktober',
                                '9': 'september',
                                '1': 'januari',
                                '2': 'februari',
                                '3': 'mars',
                                '4': 'april'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Aug',
                                '7': 'Jul',
                                '6': 'Jun',
                                '5': 'Maj',
                                '12': 'Dec',
                                '11': 'Nov',
                                '10': 'Okt',
                                '9': 'Sep',
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr'
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
                                '8': 'Augusti',
                                '7': 'Juli',
                                '6': 'Juni',
                                '5': 'Maj',
                                '12': 'December',
                                '11': 'November',
                                '10': 'Oktober',
                                '9': 'September',
                                '1': 'Januari',
                                '2': 'Februari',
                                '3': 'Mars',
                                '4': 'April'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 's\u00F6n',
                                'mon': 'm\u00E5n',
                                'tue': 'tis',
                                'wed': 'ons',
                                'thu': 'tors',
                                'fri': 'fre',
                                'sat': 'l\u00F6r'
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
                                'sun': 's\u00F6',
                                'mon': 'm\u00E5',
                                'tue': 'ti',
                                'wed': 'on',
                                'thu': 'to',
                                'fri': 'fr',
                                'sat': 'l\u00F6'
                            },
                            'wide': {
                                'sun': 's\u00F6ndag',
                                'mon': 'm\u00E5ndag',
                                'tue': 'tisdag',
                                'wed': 'onsdag',
                                'thu': 'torsdag',
                                'fri': 'fredag',
                                'sat': 'l\u00F6rdag'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'S\u00F6n',
                                'mon': 'M\u00E5n',
                                'tue': 'Tis',
                                'wed': 'Ons',
                                'thu': 'Tor',
                                'fri': 'Fre',
                                'sat': 'L\u00F6r'
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
                                'sun': 'S\u00F6',
                                'mon': 'M\u00E5',
                                'tue': 'Ti',
                                'wed': 'On',
                                'thu': 'To',
                                'fri': 'Fr',
                                'sat': 'L\u00F6'
                            },
                            'wide': {
                                'sun': 'S\u00F6ndag',
                                'mon': 'M\u00E5ndag',
                                'tue': 'Tisdag',
                                'wed': 'Onsdag',
                                'thu': 'Torsdag',
                                'fri': 'Fredag',
                                'sat': 'L\u00F6rdag'
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
                                '1': '1:a kvartalet',
                                '2': '2:a kvartalet',
                                '3': '3:e kvartalet',
                                '4': '4:e kvartalet'
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
                                '1': '1:a kvartalet',
                                '2': '2:a kvartalet',
                                '3': '3:e kvartalet',
                                '4': '4:e kvartalet'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'FM',
                                'pm': 'EM'
                            },
                            'narrow': {
                                'am': 'f',
                                'pm': 'e'
                            },
                            'wide': {
                                'am': 'fm',
                                'pm': 'em'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'fm',
                                'pm': 'em'
                            },
                            'narrow': {
                                'am': 'f.m.',
                                'pm': 'e.m.'
                            },
                            'wide': {
                                'am': 'f\u00F6rmiddag',
                                'pm': 'eftermiddag'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'f\u00F6re Kristus',
                            '0-alt-variant': 'f\u00F6re v\u00E4sterl\u00E4ndsk tider\u00E4kning',
                            '1': 'efter Kristus',
                            '1-alt-variant': 'v\u00E4sterl\u00E4ndsk tider\u00E4kning'
                        },
                        'eraAbbr': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'f.v.t.',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'v.t.'
                        },
                        'eraNarrow': {
                            '0': 'f.Kr.',
                            '0-alt-variant': 'fvt',
                            '1': 'e.Kr.',
                            '1-alt-variant': 'vt'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE\'en\' \'den\' d:\'e\' MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'y-MM-dd'
                    },
                    'timeFormats': {
                        'full': '\'kl\'. HH:mm:ss zzzz',
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
                            'yMM': 'y-MM',
                            'yMEd': 'E, y-MM-dd',
                            'yMd': 'y-MM-dd',
                            'yM': 'y-MM',
                            'y': 'y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'yQQQQ': 'y QQQQ',
                            'yQQQ': 'y QQQ',
                            'yMMMEd': 'E d MMM y',
                            'yMMMd': 'd MMM y',
                            'yMMM': 'MMM y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E d/M',
                            'MMd': 'd/M',
                            'MMdd': 'dd/MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E d MMM',
                            'MMMMd': 'd:\'e\' MMMM',
                            'MMMMEd': 'E d:\'e\' MMMM',
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
                                'd': 'E d \u2013 E d MMM',
                                'M': 'E d MMM \u2013 E d MMM'
                            },
                            'MMMd': {
                                'd': 'd\u2013d MMM',
                                'M': 'd MMM \u2013 d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E d/M \u2013 E d/M',
                                'M': 'E d/M \u2013 E d/M'
                            },
                            'Md': {
                                'd': 'd\u2013d/M',
                                'M': 'd/M \u2013 d/M'
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
                                'M': 'y-MM \u2013 MM',
                                'y': 'y-MM \u2013 y-MM'
                            },
                            'yMd': {
                                'd': 'y-MM-dd \u2013 dd',
                                'M': 'y-MM-dd \u2013 MM-dd',
                                'y': 'y-MM-dd \u2013 y-MM-dd'
                            },
                            'yMEd': {
                                'd': 'E, y-MM-dd \u2013 E, y-MM-dd',
                                'M': 'E, y-MM-dd \u2013 E, y-MM-dd',
                                'y': 'E, y-MM-dd \u2013 E, y-MM-dd'
                            },
                            'yMMM': {
                                'M': 'MMM\u2013MMM y',
                                'y': 'MMM y \u2013 MMM y'
                            },
                            'yMMMd': {
                                'd': 'd\u2013d MMM y',
                                'M': 'd MMM\u2013d MMM y',
                                'y': 'd MMM y\u2013d MMM y'
                            },
                            'yMMMEd': {
                                'd': 'E dd MMM\u2013E dd MMM y',
                                'M': 'E dd MMM\u2013E dd MMM y',
                                'y': 'E dd MMM y\u2013E dd MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM\u2013MMMM y',
                                'y': 'MMMM y \u2013 MMMM y'
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
                            'exemplarCity': 'Pitcairn\u00F6arna'
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
                            'exemplarCity': 'Gal\u00E1pagos'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambier\u00F6arna'
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
                            'exemplarCity': 'Wallis\u00F6n'
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
                            'exemplarCity': 'Johnstonatollen'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham'
                        },
                        'Easter': {
                            'exemplarCity': 'P\u00E5sk\u00F6n'
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
                            'exemplarCity': 'Marquesas\u00F6arna'
                        },
                        'Midway': {
                            'exemplarCity': 'Midway\u00F6arna'
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
                            'exemplarCity': 'Noum\u00E9a'
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
                            'exemplarCity': 'Maldiverna'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen\u00F6arna'
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
                            'exemplarCity': 'Chagos\u00F6arna'
                        },
                        'Christmas': {
                            'exemplarCity': 'Jul\u00F6n'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kokos\u00F6arna'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komorerna'
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
                            'exemplarCity': 'ok\u00E4nd stad'
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
                            'exemplarCity': 'Amundsen-Scott-basen'
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
                            'exemplarCity': 'Qaanaaq'
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
                            'exemplarCity': 'Cayman\u00F6arna'
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
                            'exemplarCity': 'Adak Island'
                        },
                        'Bahia': {
                            'exemplarCity': 'Bahia'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bah\u00EDa de Banderas'
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
                            'exemplarCity': 'San Salvador de Jujuy'
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
                            'exemplarCity': 'El Salvador'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Eirunep\u00E9'
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
                            'exemplarCity': 'Lower Prince\u2019s Quarter'
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
                            'exemplarCity': 'Montr\u00E9al'
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
                            'exemplarCity': 'Fernando de Noronha'
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
                            'exemplarCity': 'Santar\u00E9m'
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
                            'exemplarCity': 'S:t Barth\u00E9lemy'
                        },
                        'St_Johns': {
                            'exemplarCity': 'S:t Johns'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'S:t Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'S:t Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'S:t Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'S:t Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Grytviken'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'S:t Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorerna'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanarie\u00F6arna'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Torshamn'
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
                            'exemplarCity': 'Luxemburg'
                        },
                        'London': {
                            'long': {
                                'daylight': 'brittisk sommartid'
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
                            'exemplarCity': 'Bryssel'
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
                            'exemplarCity': 'Aten'
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
                            'exemplarCity': 'Uzjhorod'
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
                            'exemplarCity': 'Vatikanen'
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
                            'exemplarCity': 'Helsingfors'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'irl\u00E4ndsk sommartid'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'K\u00F6penhamn'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chi\u0219in\u0103u'
                        },
                        'Busingen': {
                            'exemplarCity': 'B\u00FCsingen am Hochrhein'
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
                            'exemplarCity': 'El-Aai\u00FAn'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Djibouti'
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
                            'exemplarCity': 'Lom\u00E9'
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
                            'exemplarCity': 'S\u00F6ul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sachalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh-staden'
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
                            'exemplarCity': 'Bagdad'
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
                            'exemplarCity': 'Dusjanbe'
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
                            'exemplarCity': 'Chovd'
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
                            'exemplarCity': 'Ulan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u00DCr\u00FCmqi'
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
                            'exemplarCity': 'Jerevan'
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
                            'exemplarCity': 'Asjchabad'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqt\u00F6be'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aktau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr'
                        },
                        'Amman': {
                            'exemplarCity': 'Amman'
                        },
                        'Almaty': {
                            'exemplarCity': 'Alma-Ata'
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
                            'exemplarCity': 'Bisjkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Tjojbalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamtjatka'
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
                            'exemplarCity': 'Chandyga'
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
                            'exemplarCity': 'Manilla'
                        },
                        'Muscat': {
                            'exemplarCity': 'Muskat'
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
                    'Samoa': {
                        'long': {
                            'generic': 'samoansk tid',
                            'standard': 'samoansk normaltid',
                            'daylight': 'samoansk sommartid'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samaratid',
                            'standard': 'Samaranormaltid',
                            'daylight': 'Samarasommartid'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sachalintid',
                            'standard': 'Sachalinnormaltid',
                            'daylight': 'Sachalinsommartid'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotheratid'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'R\u00E9uniontid'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Qyzylordatid',
                            'standard': 'Qyzylordanormaltid',
                            'daylight': 'Qyzylordasommartid'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ponapetid'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairntid'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'S:t Pierre och Miquelontid',
                            'standard': 'S:t Pierre och Miquelon, normaltid',
                            'daylight': 'S:t Pierre och Miquelon, sommartid'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Enderburytid'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'filippinsk tid',
                            'standard': 'filippinsk normaltid',
                            'daylight': 'filippinsk sommartid'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'peruansk tid',
                            'standard': 'peruansk normaltid',
                            'daylight': 'peruansk sommartid'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'paraguayansk tid',
                            'standard': 'paraguayansk normaltid',
                            'daylight': 'paraguayansk sommartid'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua Nya Guineas tid'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palautid'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'pakistansk tid',
                            'standard': 'pakistansk normaltid',
                            'daylight': 'pakistansk sommartid'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omsktid',
                            'standard': 'Omsknormaltid',
                            'daylight': 'Omsksommartid'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirsktid',
                            'standard': 'Novosibirsknormaltid',
                            'daylight': 'Novosibirsksommartid'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Nordmarianernas tid'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronhatid',
                            'standard': 'Fernando de Noronhanormaltid',
                            'daylight': 'Fernando de Noronhasommartid'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolk\u00F6ns tid'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuetid'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandtid',
                            'standard': 'Newfoundland, normaltid',
                            'daylight': 'Newfoundland, sommartid'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'nyzeel\u00E4ndsk tid',
                            'standard': 'nyzeel\u00E4ndsk normaltid',
                            'daylight': 'nyzeel\u00E4ndsk sommartid'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Nya Kaledonientid',
                            'standard': 'Nya Kaledoniennormaltid',
                            'daylight': 'Nya Kaledoniensommartid'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'centralnordamerikansk tid',
                            'standard': 'centralnordamerikansk normaltid',
                            'daylight': 'centralnordamerikansk sommartid'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u00F6stnordamerikansk tid',
                            'standard': 'Eastern, normaltid',
                            'daylight': 'Eastern, sommartid'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Klippiga Bergentid',
                            'standard': 'Mountain, normaltid',
                            'daylight': 'Mountain, sommartid'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'v\u00E4stnordamerikansk tid',
                            'standard': 'Pacific, normaltid',
                            'daylight': 'Pacific, sommartid'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrtid',
                            'standard': 'Anadyrnormaltid',
                            'daylight': 'Anadyrsommartid'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtautid',
                            'standard': 'Aqtaunormaltid',
                            'daylight': 'Aqtausommartid'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqt\u00F6betid',
                            'standard': 'Aqt\u00F6benormaltid',
                            'daylight': 'Aqt\u00F6besommartid'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kap Verdetid',
                            'standard': 'Kap Verdenormaltid',
                            'daylight': 'Kap Verdesommartid'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Caseytid'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Chamorrotid'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamtid',
                            'standard': 'Chathamnormaltid',
                            'daylight': 'Chathamsommartid'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'chilensk tid',
                            'standard': 'chilensk normaltid',
                            'daylight': 'chilensk sommartid'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'kinesisk tid',
                            'standard': 'kinesisk normaltid',
                            'daylight': 'kinesisk sommartid'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Tjojbalsantid',
                            'standard': 'Tjojbalsannormaltid',
                            'daylight': 'Tjojbalsansommartid'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Jul\u00F6ns tid'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Keeling\u00F6arnas tid'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'colombiansk tid',
                            'standard': 'colombiansk normaltid',
                            'daylight': 'colombiansk sommartid'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cook\u00F6arnas tid',
                            'standard': 'Cook\u00F6arnas normaltid',
                            'daylight': 'Cook\u00F6arnas sommartid'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'kubansk tid',
                            'standard': 'kubansk normaltid',
                            'daylight': 'kubansk sommartid'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davistid'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont d\u2019Urville-tid'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u00F6sttimorisk tid'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'P\u00E5sk\u00F6ns tid',
                            'standard': 'P\u00E5sk\u00F6ns normaltid',
                            'daylight': 'P\u00E5sk\u00F6ns sommartid'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'ecuadoriansk tid'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'centraleuropeisk tid',
                            'standard': 'centraleuropeisk normaltid',
                            'daylight': 'centraleuropeisk sommartid'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u00F6steuropeisk tid',
                            'standard': '\u00F6steuropeisk normaltid',
                            'daylight': '\u00F6steuropeisk sommartid'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'v\u00E4steuropeisk tid',
                            'standard': 'v\u00E4steuropeisk normaltid',
                            'daylight': 'v\u00E4steuropeisk sommartid'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklands\u00F6arnas tid',
                            'standard': 'Falklands\u00F6arnas normaltid',
                            'daylight': 'Falklands\u00F6arnas sommartid'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fijitid',
                            'standard': 'Fijinormaltid',
                            'daylight': 'Fijisommartid'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Franska Guyanatid'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Franska Sydterritoriernas tid'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Gal\u00E1pagostid'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelautid'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongatid',
                            'standard': 'Tonganormaltid',
                            'daylight': 'Tongasommmartid'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuuktid'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'turkmensk tid',
                            'standard': 'turkmensk normaltid',
                            'daylight': 'turkmensk sommartid'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalutid'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'uruguayansk tid',
                            'standard': 'uruguayansk normaltid',
                            'daylight': 'uruguayansk sommartid'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'uzbekisk tid',
                            'standard': 'uzbekisk normaltid',
                            'daylight': 'uzbekisk sommartid'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatutid',
                            'standard': 'Vanuatunormaltid',
                            'daylight': 'Vanuatusommartid'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburgtid',
                            'standard': 'Jekaterinburgnormaltid',
                            'daylight': 'Jekaterinburgsommartid'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutsktid',
                            'standard': 'Jakutsknormaltid',
                            'daylight': 'Jakutsksommartid'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallis- och Futuna\u00F6arnas tid'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Wake\u00F6arnas tid'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostoktid'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogradtid',
                            'standard': 'Volgogradnormaltid',
                            'daylight': 'Volgogradsommartid'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostoktid',
                            'standard': 'Vladivostoknormaltid',
                            'daylight': 'Vladivostoksommartid'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'venezuelansk tid'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tadzjikistantid'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipeitid',
                            'standard': 'Taipeinormaltid',
                            'daylight': 'Taipeisommartid'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahititid'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowatid'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamtid'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'sydgeorgisk tid'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomon\u00F6arnas tid'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporetid'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellernatid'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamtid'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'v\u00E4stgr\u00F6nl\u00E4ndsk tid',
                            'standard': 'v\u00E4stgr\u00F6nl\u00E4ndsk normaltid',
                            'daylight': 'v\u00E4stgr\u00F6nl\u00E4ndsk sommartid'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u00F6stgr\u00F6nl\u00E4ndsk tid',
                            'standard': '\u00F6stgr\u00F6nl\u00E4ndsk normaltid',
                            'daylight': '\u00F6stgr\u00F6nl\u00E4ndsk sommartid'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichtid'
                        },
                        'short': {
                            'standard': 'GMT'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Kiribatitid'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'georgisk tid',
                            'standard': 'georgisk normaltid',
                            'daylight': 'georgisk sommartid'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambiertid'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonastid',
                            'standard': 'Amazonasnormaltid',
                            'daylight': 'Amazonassommartid'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'v\u00E4stbrasiliansk tid',
                            'standard': 'v\u00E4stbrasiliansk normaltid',
                            'daylight': 'v\u00E4stbrasiliansk sommartid'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'afghansk tid'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'centralafrikansk tid'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u00F6stafrikansk tid'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'sydafrikansk tid'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'v\u00E4stafrikansk tid',
                            'standard': 'v\u00E4stafrikansk normaltid',
                            'daylight': 'v\u00E4stafrikansk sommartid'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaskatid',
                            'standard': 'Alaska, normaltid',
                            'daylight': 'Alaska, sommartid'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatytid',
                            'standard': 'Almatynormaltid',
                            'daylight': 'Almatysommartid'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'saudiarabisk tid',
                            'standard': 'saudiarabisk normaltid',
                            'daylight': 'saudiarabisk sommartid'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u00F6stargentinsk tid',
                            'standard': '\u00F6stargentinsk normaltid',
                            'daylight': '\u00F6stargentinsk sommartid'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'v\u00E4stargentinsk tid',
                            'standard': 'v\u00E4stargentinsk normaltid',
                            'daylight': 'v\u00E4stargentinsk sommartid'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'armenisk tid',
                            'standard': 'armenisk normaltid',
                            'daylight': 'armenisk sommartid'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'nordamerikansk atlanttid',
                            'standard': 'Atlantic, normaltid',
                            'daylight': 'Atlantic, sommartid'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'centralaustralisk tid',
                            'standard': 'centralaustralisk normaltid',
                            'daylight': 'centralaustralisk sommartid'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'v\u00E4stcentralaustralisk tid',
                            'standard': 'v\u00E4stcentralaustralisk normaltid',
                            'daylight': 'v\u00E4stcentralaustralisk sommartid'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u00F6staustralisk tid',
                            'standard': '\u00F6staustralisk normaltid',
                            'daylight': '\u00F6staustralisk sommartid'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'v\u00E4staustralisk tid',
                            'standard': 'v\u00E4staustralisk normaltid',
                            'daylight': 'v\u00E4staustralisk sommartid'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'azerbajdzjansk tid',
                            'standard': 'azerbajdzjansk normaltid',
                            'daylight': 'azerbajdzjansk sommartid'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'azorisk tid',
                            'standard': 'azorisk normaltid',
                            'daylight': 'azorisk sommartid'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'bangladeshisk tid',
                            'standard': 'bangladeshisk normaltid',
                            'daylight': 'bangladeshisk sommartid'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'bhutansk tid'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'boliviansk tid'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasiliatid',
                            'standard': 'Brasilianormaltid',
                            'daylight': 'Brasiliasommartid'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Bruneitid'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Persiska vikentid'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanatid'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Honolulutid',
                            'standard': 'Honolulunormaltid',
                            'daylight': 'Honolulusommartid'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongtid',
                            'standard': 'Hongkongnormaltid',
                            'daylight': 'Hongkongsommartid'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Chovdtid',
                            'standard': 'Hovdnormaltid',
                            'daylight': 'Hovdsommartid'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'indisk tid'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Brittiska Indiska ocean\u00F6arnas tid'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'indokinesisk tid'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'centralindonesisk tid'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u00F6stindonesisk tid'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'v\u00E4stindonesisk tid'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'iransk tid',
                            'standard': 'iransk normaltid',
                            'daylight': 'iransk sommartid'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutsktid',
                            'standard': 'Irkutsknormaltid',
                            'daylight': 'Irkutsksommartid'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'israelisk tid',
                            'standard': 'israelisk normaltid',
                            'daylight': 'israelisk sommartid'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'japansk tid',
                            'standard': 'japansk normaltid',
                            'daylight': 'japansk sommartid'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Kamtjatkatid',
                            'standard': 'Kamtjatkanormaltid',
                            'daylight': 'Kamtjatkasommartid'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u00F6stkazakstansk tid'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'v\u00E4stkazakstansk tid'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'koreansk tid',
                            'standard': 'koreansk normaltid',
                            'daylight': 'koreansk sommartid'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraetid'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarsktid',
                            'standard': 'Krasnojarsknormaltid',
                            'daylight': 'Krasnojarsksommartid'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'kirgizisk tid'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Sri Lankatid'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Line\u00F6arnas tid'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howetid',
                            'standard': 'Lord Howenormaltid',
                            'daylight': 'Lord Howesommartid'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macautid',
                            'standard': 'Macaunormaltid',
                            'daylight': 'Macausommartid'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquarietid'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadantid',
                            'standard': 'Magadannormaltid',
                            'daylight': 'Magadansommartid'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'malaysisk tid'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Maldivernatid'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesastid'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshall\u00F6arnas tid'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiustid',
                            'standard': 'Mauritiusnormaltid',
                            'daylight': 'Mauritiussommartid'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsontid'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulaanbaatar-tid',
                            'standard': 'Ulaanbaatar-normaltid',
                            'daylight': 'Ulaanbaatar-sommartid'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskvatid',
                            'standard': 'Moskvanormaltid',
                            'daylight': 'Moskvasommartid'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'burmesisk tid'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurutid'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'nepalesisk tid'
                        }
                    }
                },
                'hourFormat': '+HH:mm;\u2212HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}tid',
                'regionFormat-type-daylight': '{0} (sommartid)',
                'regionFormat-type-standard': '{0} (normaltid)',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': 'Normaliserad sortering',
                'collation': 'sorteringsordning',
                'colHiraganaQuaternary': 'Sortering efter kana',
                'colCaseLevel': 'Skiftl\u00E4gesk\u00E4nslig sortering',
                'colCaseFirst': 'Ordna efter versaler/gemener',
                'colBackwards': 'Sortera accenter omv\u00E4nt',
                'colAlternate': 'Ignorera symboler vid sortering',
                'calendar': 'kalender',
                'x': 'privat',
                'variableTop': 'Sortera som symboler',
                'va': 'Spr\u00E5kvariant',
                'timezone': 'Tidszon',
                'numbers': 'siffror',
                'currency': 'valuta',
                'colStrength': 'Sorteringsstyrka',
                'colNumeric': 'Numerisk sortering'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Sortera kana separat',
                    'yes': 'Sortera efter kana'
                },
                'colCaseLevel': {
                    'no': 'Sortera oavsett skiftl\u00E4ge',
                    'yes': 'Sortera efter skiftl\u00E4ge'
                },
                'colCaseFirst': {
                    'lower': 'Sortera gemener f\u00F6rst',
                    'no': 'Ordna normalt efter skiftl\u00E4ge',
                    'upper': 'Sortera versaler f\u00F6rst'
                },
                'colStrength': {
                    'identical': 'Sortera alla',
                    'primary': 'Sortera endast efter grundbokst\u00E4ver',
                    'quaternary': 'Sortera efter accent/skiftl\u00E4ge/bredd/kana',
                    'secondary': 'Sortera accenter',
                    'tertiary': 'Sortera accenter/skiftl\u00E4ge/bredd'
                },
                'colNumeric': {
                    'no': 'Sortera siffror f\u00F6r sig',
                    'yes': 'Sortera siffror numeriskt'
                },
                'colNormalization': {
                    'no': 'sortera utan normalisering',
                    'yes': 'sortera med Unicode-normalisering'
                },
                'calendar': {
                    'japanese': 'japansk kalender',
                    'iso8601': 'ISO 8601-kalender',
                    'coptic': 'koptisk kalender',
                    'dangi': 'koreansk kalender',
                    'ethiopic': 'etiopisk kalender',
                    'ethiopic-amete-alem': 'etiopisk amete-alem-kalender',
                    'gregorian': 'gregoriansk kalender',
                    'hebrew': 'hebreisk kalender',
                    'persian': 'persisk kalender',
                    'roc': 'kinesiska republikens kalender',
                    'chinese': 'kinesisk kalender',
                    'buddhist': 'buddistisk kalender',
                    'indian': 'indisk kalender',
                    'islamic': 'islamisk kalender',
                    'islamic-civil': 'islamisk civil kalender',
                    'islamic-rgsa': 'islamisk kalender, Saudi-Arabien',
                    'islamic-tbla': 'islamisk kalender, astronomisk',
                    'islamic-umalqura': 'islamisk kalender, Umm al-Qura'
                },
                'collation': {
                    'phonebook': 'telefonkatalogssorteringsordning',
                    'gb2312han': 'gb2312-sorteringsordning',
                    'eor': 'sorteringsordning f\u00F6r flerspr\u00E5kliga europeiska dokument',
                    'ducet': 'grundl\u00E4ggande Unicode-sorteringsordning',
                    'dictionary': 'ordbokssorteringsordning',
                    'big5han': 'big5-sorteringsordning',
                    'traditional': 'traditionell ordning',
                    'standard': 'normal sorteringsordning',
                    'zhuyin': 'zhuyin-sorteringsordning',
                    'unihan': 'radikal-streck-sorteringsordning',
                    'stroke': 'strecksorteringsordning',
                    'searchjl': 's\u00F6ksorteringsordning f\u00F6r att s\u00F6ka p\u00E5 inledande Hangul-konsonant',
                    'search': 'allm\u00E4n s\u00F6kning',
                    'reformed': 'reformerad sorteringsordning',
                    'pinyin': 'pinyin-sorteringsordning',
                    'phonetic': 'fonetisk sorteringsordning'
                },
                'numbers': {
                    'knda': 'kannadiska siffror',
                    'khmr': 'khmeriska siffror',
                    'kali': 'kayah li-siffror',
                    'jpanfin': 'japanskt finansiellt stavade tal',
                    'jpan': 'japanskt stavade tal',
                    'java': 'javanesiska siffror',
                    'hebr': 'hebreiska numeraler',
                    'hantfin': 'traditionellt kinesiskt finansiellt stavade tal',
                    'hant': 'traditionellt kinesiskt stavade tal',
                    'hansfin': 'f\u00F6renklat kinesiskt finansiellt stavade tal',
                    'hans': 'f\u00F6renklat kinesiskt stavade tal',
                    'hanidec': 'kinesiska decimaltal',
                    'guru': 'gurmukhiska siffror',
                    'gujr': 'gujaratiska siffror',
                    'greklow': 'sm\u00E5 grekiska numeraler',
                    'grek': 'grekiska numeraler',
                    'bali': 'balinesiska siffror',
                    'armnlow': 'sm\u00E5 armeniska numeraler',
                    'armn': 'armeniska numeraler',
                    'arabext': 'ut\u00F6kade indo-arabiska siffror',
                    'arab': 'indo-arabiska siffror',
                    'finance': 'Finansiella siffror',
                    'traditional': 'Traditionella siffror',
                    'native': 'Spr\u00E5kspecifika siffror',
                    'beng': 'bengaliska siffror',
                    'brah': 'brahmiska siffror',
                    'cakm': 'chakma-siffror',
                    'cham': 'chamiska siffror',
                    'deva': 'devanagariska siffror',
                    'orya': 'oriyiska siffror',
                    'osma': 'osmanya-siffror',
                    'roman': 'romerska numeraler',
                    'romanlow': 'sm\u00E5 romerska numeraler',
                    'saur': 'saurashtra-siffror',
                    'shrd': 'sharada-siffror',
                    'sora': 'sora sompeng-siffror',
                    'sund': 'sundanesiska siffror',
                    'vaii': 'vai-siffror',
                    'tibt': 'tibetanska siffror',
                    'thai': 'thail\u00E4ndska siffror',
                    'telu': 'telugiska siffror',
                    'tamldec': 'tamilska siffror',
                    'taml': 'traditionella tamilska numeraler',
                    'talu': 'ny tai l\u00FC-siffror',
                    'takr': 'takri-siffror',
                    'olck': 'ol chiki-siffror',
                    'nkoo': 'n-k\u00E5-siffor',
                    'mymrshan': 'burmesiska shan-siffror',
                    'mymr': 'burmesiska siffror',
                    'mtei': 'meetei mayek-siffror',
                    'mong': 'mongoliska siffror',
                    'mlym': 'malayalamiska siffror',
                    'limb': 'limbu-siffror',
                    'lepc': 'lepcha-siffror',
                    'latn': 'v\u00E4sterl\u00E4ndska siffror',
                    'laoo': 'laotiska siffror',
                    'lanatham': 'tai tham tham-siffror',
                    'lana': 'tai tham hora-siffror',
                    'geor': 'georgiska numeraler',
                    'fullwide': 'fullbreddssiffror',
                    'ethi': 'etiopiska numeraler'
                },
                'colAlternate': {
                    'non-ignorable': 'sortera symboler',
                    'shifted': 'Sortera oavsett symboler'
                },
                'colBackwards': {
                    'no': 'sortera accenter normalt',
                    'yes': 'sortera accenter omv\u00E4nt'
                }
            },
            'codePatterns': {
                'language': 'spr\u00E5k: {0}',
                'script': 'skrift: {0}',
                'territory': 'region: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} uns',
                    'unitPattern-count-other': '{0} uns'
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
                    'unitPattern-count-other': '{0} engelska yard'
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
                    'unitPattern-count-other': '{0} engelska mil'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} meter',
                    'unitPattern-count-other': '{0} meter'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ljus\u00E5r',
                    'unitPattern-count-other': '{0} ljus\u00E5r'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} kilometer',
                    'unitPattern-count-other': '{0} kilometer'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} tum',
                    'unitPattern-count-other': '{0} tum'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} fot',
                    'unitPattern-count-other': '{0} fot'
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
                    'unitPattern-count-one': '{0} vecka',
                    'unitPattern-count-other': '{0} veckor'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m\u00E5nad',
                    'unitPattern-count-other': '{0} m\u00E5nader'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} sk\u00E5lpund',
                    'unitPattern-count-other': '{0} sk\u00E5lpund'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} h\u00E4stkraft',
                    'unitPattern-count-other': '{0} h\u00E4stkrafter'
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
                    'unitPattern-count-one': '{0} tum kvicksilver',
                    'unitPattern-count-other': '{0} tum kvicksilver'
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
                    'unitPattern-count-one': '{0} engelsk kubikmil',
                    'unitPattern-count-other': '{0} engelska kubikmil'
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
                    'unitPattern-count-one': '{0} engelsk mil per timme',
                    'unitPattern-count-other': '{0} engelska mil per timme'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} meter per sekund',
                    'unitPattern-count-other': '{0} meter per sekund'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} kilometer per timme',
                    'unitPattern-count-other': '{0} kilometer per timme'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} minut',
                    'unitPattern-count-other': '{0} minuter'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} millisekund',
                    'unitPattern-count-other': '{0} millisekunder'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} timme',
                    'unitPattern-count-other': '{0} timmar'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} dygn',
                    'unitPattern-count-other': '{0} dygn'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} engelsk kvadratmil',
                    'unitPattern-count-other': '{0} engelska kvadratmil'
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
                    'compoundUnitPattern': '{0} per {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} g\u00E5ng Jordens gravitation',
                    'unitPattern-count-other': '{0} g\u00E5nger Jordens gravitation'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} b\u00E5gminut',
                    'unitPattern-count-other': '{0} b\u00E5gminuter'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} b\u00E5gsekund',
                    'unitPattern-count-other': '{0} b\u00E5gsekunder'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} grad',
                    'unitPattern-count-other': '{0} grader'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} amerikanskt tunnland',
                    'unitPattern-count-other': '{0} amerikanska tunnland'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} hektar',
                    'unitPattern-count-other': '{0} hektar'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} kvadratfot',
                    'unitPattern-count-other': '{0} kvadratfot'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} sekund',
                    'unitPattern-count-other': '{0} sekunder'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} uns',
                    'unitPattern-count-other': '{0} uns'
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
                    'unitPattern-count-one': '{0} engelsk yard',
                    'unitPattern-count-other': '{0} engelska yard'
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
                    'unitPattern-count-one': '{0} engelsk mil',
                    'unitPattern-count-other': '{0} engelska mil'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ljus\u00E5r',
                    'unitPattern-count-other': '{0} ljus\u00E5r'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} tum',
                    'unitPattern-count-other': '{0} tum'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} fot',
                    'unitPattern-count-other': '{0} fot'
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
                    'unitPattern-count-one': '{0} v',
                    'unitPattern-count-other': '{0} v'
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
                    'unitPattern-count-one': '{0} tum Hg',
                    'unitPattern-count-other': '{0} tum Hg'
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
                    'unitPattern-count-one': '{0} eng. kubikmil',
                    'unitPattern-count-other': '{0} eng. kubikmil'
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
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
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
                    'unitPattern-count-one': '{0} tim',
                    'unitPattern-count-other': '{0} tim'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} d',
                    'unitPattern-count-other': '{0} d'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} eng. kvadratmil',
                    'unitPattern-count-other': '{0} eng. kvadratmil'
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
                    'unitPattern-count-one': '{0} kvadratfot',
                    'unitPattern-count-other': '{0} kvadratfot'
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
