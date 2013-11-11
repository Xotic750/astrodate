/* AstroDate
 * Language: fi
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
        AstroDate.lang('fi', {
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
                    'unitPattern-count-one': '{0}oz',
                    'unitPattern-count-other': '{0}oz'
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
                    'unitPattern-count-one': '{0}vv',
                    'unitPattern-count-other': '{0}vv'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0}km',
                    'unitPattern-count-other': '{0}km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0}\u2032',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0}cm',
                    'unitPattern-count-other': '{0}cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0}v',
                    'unitPattern-count-other': '{0}v'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0}vk',
                    'unitPattern-count-other': '{0}vk'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0}kk',
                    'unitPattern-count-other': '{0}kk'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0}lb',
                    'unitPattern-count-other': '{0}lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0}hv',
                    'unitPattern-count-other': '{0}hv'
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
                    'unitPattern-count-one': '{0}\u2033 Hg',
                    'unitPattern-count-other': '{0}\u2033 Hg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0}mbar',
                    'unitPattern-count-other': '{0}mbar'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0}l',
                    'unitPattern-count-other': '{0}l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0}mi\u00B3',
                    'unitPattern-count-other': '{0}mi\u00B3'
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
                    'unitPattern-count-one': '{0}mi/h',
                    'unitPattern-count-other': '{0}mi/h'
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
                    'unitPattern-count-one': '{0}min',
                    'unitPattern-count-other': '{0}min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0}ms',
                    'unitPattern-count-other': '{0}ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0}t',
                    'unitPattern-count-other': '{0}t'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0}pv',
                    'unitPattern-count-other': '{0}pv'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0}mi\u00B2',
                    'unitPattern-count-other': '{0}mi\u00B2'
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
                    'unitPattern-count-one': '{0}ft\u00B2',
                    'unitPattern-count-other': '{0}ft\u00B2'
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
                                '8': 'elokuuta',
                                '7': 'hein\u00E4kuuta',
                                '6': 'kes\u00E4kuuta',
                                '5': 'toukokuuta',
                                '12': 'joulukuuta',
                                '11': 'marraskuuta',
                                '10': 'lokakuuta',
                                '9': 'syyskuuta',
                                '1': 'tammikuuta',
                                '2': 'helmikuuta',
                                '3': 'maaliskuuta',
                                '4': 'huhtikuuta'
                            },
                            'narrow': {
                                '8': 'E',
                                '7': 'H',
                                '6': 'K',
                                '5': 'T',
                                '12': 'J',
                                '11': 'M',
                                '10': 'L',
                                '9': 'S',
                                '1': 'T',
                                '2': 'H',
                                '3': 'M',
                                '4': 'H'
                            },
                            'wide': {
                                '8': 'elokuuta',
                                '7': 'hein\u00E4kuuta',
                                '6': 'kes\u00E4kuuta',
                                '5': 'toukokuuta',
                                '12': 'joulukuuta',
                                '11': 'marraskuuta',
                                '10': 'lokakuuta',
                                '9': 'syyskuuta',
                                '1': 'tammikuuta',
                                '2': 'helmikuuta',
                                '3': 'maaliskuuta',
                                '4': 'huhtikuuta'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'elo',
                                '7': 'hein\u00E4',
                                '6': 'kes\u00E4',
                                '5': 'touko',
                                '12': 'joulu',
                                '11': 'marras',
                                '10': 'loka',
                                '9': 'syys',
                                '1': 'tammi',
                                '2': 'helmi',
                                '3': 'maalis',
                                '4': 'huhti'
                            },
                            'narrow': {
                                '8': 'E',
                                '7': 'H',
                                '6': 'K',
                                '5': 'T',
                                '12': 'J',
                                '11': 'M',
                                '10': 'L',
                                '9': 'S',
                                '1': 'T',
                                '2': 'H',
                                '3': 'M',
                                '4': 'H'
                            },
                            'wide': {
                                '8': 'elokuu',
                                '7': 'hein\u00E4kuu',
                                '6': 'kes\u00E4kuu',
                                '5': 'toukokuu',
                                '12': 'joulukuu',
                                '11': 'marraskuu',
                                '10': 'lokakuu',
                                '9': 'syyskuu',
                                '1': 'tammikuu',
                                '2': 'helmikuu',
                                '3': 'maaliskuu',
                                '4': 'huhtikuu'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'K',
                                'thu': 'T',
                                'fri': 'P',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'wide': {
                                'sun': 'sunnuntaina',
                                'mon': 'maanantaina',
                                'tue': 'tiistaina',
                                'wed': 'keskiviikkona',
                                'thu': 'torstaina',
                                'fri': 'perjantaina',
                                'sat': 'lauantaina'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'K',
                                'thu': 'T',
                                'fri': 'P',
                                'sat': 'L'
                            },
                            'short': {
                                'sun': 'su',
                                'mon': 'ma',
                                'tue': 'ti',
                                'wed': 'ke',
                                'thu': 'to',
                                'fri': 'pe',
                                'sat': 'la'
                            },
                            'wide': {
                                'sun': 'sunnuntai',
                                'mon': 'maanantai',
                                'tue': 'tiistai',
                                'wed': 'keskiviikko',
                                'thu': 'torstai',
                                'fri': 'perjantai',
                                'sat': 'lauantai'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1. nelj.',
                                '2': '2. nelj.',
                                '3': '3. nelj.',
                                '4': '4. nelj.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. nelj\u00E4nnes',
                                '2': '2. nelj\u00E4nnes',
                                '3': '3. nelj\u00E4nnes',
                                '4': '4. nelj\u00E4nnes'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1. nelj.',
                                '2': '2. nelj.',
                                '3': '3. nelj.',
                                '4': '4. nelj.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '1. nelj\u00E4nnes',
                                '2': '2. nelj\u00E4nnes',
                                '3': '3. nelj\u00E4nnes',
                                '4': '4. nelj\u00E4nnes'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'narrow': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'wide': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'narrow': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            },
                            'wide': {
                                'am': 'ap.',
                                'pm': 'ip.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'ennen Kristuksen syntym\u00E4\u00E4',
                            '0-alt-variant': 'ennen ajanlaskun alkua',
                            '1': 'j\u00E4lkeen Kristuksen syntym\u00E4n',
                            '1-alt-variant': 'j\u00E4lkeen ajanlaskun alun'
                        },
                        'eraAbbr': {
                            '0': 'eKr.',
                            '0-alt-variant': 'eaa.',
                            '1': 'jKr.',
                            '1-alt-variant': 'jaa.'
                        },
                        'eraNarrow': {
                            '0': 'eK',
                            '0-alt-variant': 'eaa',
                            '1': 'jK',
                            '1-alt-variant': 'jaa'
                        }
                    },
                    'dateFormats': {
                        'full': 'cccc d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd.M.y',
                        'short': 'd.M.y'
                    },
                    'timeFormats': {
                        'full': 'H.mm.ss zzzz',
                        'long': 'H.mm.ss z',
                        'medium': 'H.mm.ss',
                        'short': 'H.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E d. MMM y',
                            'yMMMd': 'd. MMM y',
                            'Ehms': 'E h.mm.ss a',
                            'EHm': 'E H.mm',
                            'Ehm': 'E h.mm a',
                            'Ed': 'E d.',
                            'd': 'd',
                            'GyMMMd': 'd. MMM y G',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMMccccd': 'cccc d. MMMM y',
                            'Hms': 'H.mm.ss',
                            'hms': 'h.mm.ss a',
                            'Hm': 'H.mm',
                            'hm': 'h.mm a',
                            'H': 'H',
                            'EHms': 'E H.mm.ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
                            'M': 'L',
                            'Md': 'd.M.',
                            'MEd': 'E d.M.',
                            'MMM': 'LLL',
                            'MMMd': 'd. MMM',
                            'MMMEd': 'ccc d. MMM',
                            'ms': 'm.ss',
                            'y': 'y',
                            'yM': 'L.y',
                            'yMd': 'd.M.y',
                            'yMEd': 'E d.M.y',
                            'yMM': 'M.y',
                            'yMMM': 'LLL y'
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
                                'd': 'E d. \u2013 E d. MMMM',
                                'M': 'E d. MMMM \u2013 E d. MMMM'
                            },
                            'MMMd': {
                                'd': 'd.\u2013d. MMMM',
                                'M': 'd. MMMM \u2013 d. MMMM'
                            },
                            'MMM': {
                                'M': 'LLL\u2013LLLL'
                            },
                            'MEd': {
                                'd': 'E d. \u2013 E d.M.',
                                'M': 'E d.M. \u2013 E d.M.'
                            },
                            'Md': {
                                'd': 'd.\u2013d.M.',
                                'M': 'd.M.\u2013d.M.'
                            },
                            'M': {
                                'M': 'L.\u2013L.'
                            },
                            'Hv': {
                                'H': 'H\u2013H v'
                            },
                            'hv': {
                                'a': 'h a \u2013 h a v',
                                'h': 'h\u2013h a v'
                            },
                            'intervalFormatFallback': '{0}\u2013{1}',
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'LLL\u2013LLLL y',
                                'y': 'LLLL y \u2013 LLLL y'
                            },
                            'yMd': {
                                'd': 'd.\u2013d.M.y',
                                'M': 'd.M.\u2013d.M.y',
                                'y': 'd.M.y\u2013d.M.y'
                            },
                            'yMEd': {
                                'd': 'E d.M.y \u2013 E d.M.y',
                                'M': 'E d.M.y \u2013 E d.M.y',
                                'y': 'E d.M.y \u2013 E d.M.y'
                            },
                            'yMMM': {
                                'M': 'LLL\u2013LLLL y',
                                'y': 'LLLL y \u2013 LLLL y'
                            },
                            'yMMMd': {
                                'd': 'd.\u2013d. MMMM y',
                                'M': 'd. MMMM \u2013 d. MMMM y',
                                'y': 'd. MMMM y \u2013 d. MMMM y'
                            },
                            'yMMMEd': {
                                'd': 'E d. \u2013 E d. MMMM y',
                                'M': 'E d. MMMM \u2013 E d. MMMM y',
                                'y': 'E d. MMMM y \u2013 E d. MMMM y'
                            },
                            'yMMMM': {
                                'M': 'LLL\u2013LLLL y',
                                'y': 'LLLL y \u2013 LLLL y'
                            },
                            'MMMM': {
                                'M': 'LLL\u2013LLLL'
                            },
                            'Hmv': {
                                'H': 'H.mm\u2013H.mm v',
                                'm': 'H.mm\u2013H.mm v'
                            },
                            'hmv': {
                                'a': 'h.mm a \u2013 h.mm a v',
                                'h': 'h.mm\u2013h.mm a v',
                                'm': 'h.mm\u2013h.mm a v'
                            },
                            'Hm': {
                                'H': 'H.mm\u2013H.mm',
                                'm': 'H.mm\u2013H.mm'
                            },
                            'hm': {
                                'a': 'h.mm a \u2013 h.mm a',
                                'h': 'h.mm\u2013h.mm a',
                                'm': 'h.mm\u2013h.mm a'
                            },
                            'H': {
                                'H': 'H\u2013H'
                            },
                            'h': {
                                'a': 'h a \u2013 h a',
                                'h': 'h\u2013h a'
                            },
                            'd': {
                                'd': 'd.\u2013d.'
                            }
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
                            'exemplarCity': 'Gambiersaaret'
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
                            'exemplarCity': 'Chathamsaaret'
                        },
                        'Easter': {
                            'exemplarCity': 'P\u00E4\u00E4si\u00E4issaari'
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
                            'exemplarCity': 'Marquesassaaret'
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
                            'exemplarCity': 'Malediivit'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelensaaret'
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
                            'exemplarCity': 'Joulusaari'
                        },
                        'Cocos': {
                            'exemplarCity': 'Kookossaaret'
                        },
                        'Comoro': {
                            'exemplarCity': 'Komorit'
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
                            'exemplarCity': 'tuntematon'
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
                            'exemplarCity': 'Etel\u00E4napa'
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
                            'exemplarCity': 'Macquariensaari'
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
                            'exemplarCity': 'Thule',
                            'exemplarCity-alt-secondary': 'Qaanaaq'
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
                            'exemplarCity': 'Bah\u00EDa de Banderas'
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
                            'exemplarCity': 'Jamaika'
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
                            'exemplarCity': 'Nuuk',
                            'exemplarCity-alt-secondary': 'Godth\u00E5b'
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
                            'exemplarCity': 'Ciudad de M\u00E9xico'
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
                                'exemplarCity': 'Beulah, Pohjois-Dakota'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salem, Pohjois-Dakota'
                            },
                            'Center': {
                                'exemplarCity': 'Center, Pohjois-Dakota'
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
                            'exemplarCity': 'Santiago de Chile'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'S\u00E3o Paulo'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Ittoqqortoormiit',
                            'exemplarCity-alt-secondary': 'Scoresbysund'
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
                            'exemplarCity': 'Saint Kitts'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Saint Lucia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Saint Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Saint Vincent'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Etel\u00E4-Georgia'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjav\u00EDk'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Saint Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'Azorit'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermuda'
                        },
                        'Canary': {
                            'exemplarCity': 'Kanariansaaret'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Kap Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'F\u00E4rsaaret'
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
                            'exemplarCity': 'Moskova'
                        },
                        'Monaco': {
                            'exemplarCity': 'Monaco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Maarianhamina',
                            'exemplarCity-alt-secondary': 'Mariehamn'
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
                                'daylight': 'Britannian kes\u00E4aika'
                            },
                            'exemplarCity': 'Lontoo'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Ljubljana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lissabon'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiova'
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
                            'exemplarCity': 'Mansaari'
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
                            'exemplarCity': 'Berliini'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrad'
                        },
                        'Athens': {
                            'exemplarCity': 'Ateena'
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
                            'exemplarCity': 'Tukholma'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinna'
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
                            'exemplarCity': 'Z\u00FCrich'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zapori\u017E\u017Eja'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Varsova'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgograd'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilna'
                        },
                        'Vienna': {
                            'exemplarCity': 'Wien'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vatikaani'
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
                            'exemplarCity': 'Rooma'
                        },
                        'Riga': {
                            'exemplarCity': 'Riika'
                        },
                        'Prague': {
                            'exemplarCity': 'Praha'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podgorica'
                        },
                        'Paris': {
                            'exemplarCity': 'Pariisi'
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
                                'daylight': 'Irlannin kes\u00E4aika'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'K\u00F6\u00F6penhamina'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chi\u015Fin\u0103u'
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
                            'exemplarCity': 'Khartum'
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
                            'exemplarCity': 'El Aai\u00FAn'
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
                            'exemplarCity': 'Soul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarkand'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sahalin'
                        },
                        'Saigon': {
                            'exemplarCity': 'H\u1ED3 Ch\u00ED Minhin kaupunki'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riad'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Q\u0131z\u0131lorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
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
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damaskos'
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
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Singapore'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusalem'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'A\u0161gabat'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqt\u00F6be'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqtaw'
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
                            'exemplarCity': 'Bi\u0161kek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kalkutta'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'T\u0161oibalsa'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamt\u0161atka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Karachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Ka\u0161gar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Kathmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Handyga'
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
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Muscat'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nikosia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'Samoan aika',
                            'standard': 'Samoan normaaliaika',
                            'daylight': 'Samoan kes\u00E4aika'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Samaran aika',
                            'standard': 'Samaran normaaliaika',
                            'daylight': 'Samaran kes\u00E4aika'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Sahalinin aika',
                            'standard': 'Sahalinin normaaliaika',
                            'daylight': 'Sahalinin kes\u00E4aika'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Rotheran aika'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'R\u00E9unionin aika'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Q\u0131z\u0131lordan aika',
                            'standard': 'Q\u0131z\u0131lordan normaaliaika',
                            'daylight': 'Q\u0131z\u0131lordan kes\u00E4aika'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Pohnpein aika'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Pitcairnin aika'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Saint-Pierren ja Miquelonin aika',
                            'standard': 'Saint-Pierren ja Miquelonin normaaliaika',
                            'daylight': 'Saint-Pierren ja Miquelonin kes\u00E4aika'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Phoenixsaarten aika'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Filippiinien aika',
                            'standard': 'Filippiinien normaaliaika',
                            'daylight': 'Filippiinien kes\u00E4aika'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Perun aika',
                            'standard': 'Perun normaaliaika',
                            'daylight': 'Perun kes\u00E4aika'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Paraguayn aika',
                            'standard': 'Paraguayn normaaliaika',
                            'daylight': 'Paraguayn kes\u00E4aika'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Papua-Uuden-Guinean aika'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Palaun aika'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Pakistanin aika',
                            'standard': 'Pakistanin normaaliaika',
                            'daylight': 'Pakistanin kes\u00E4aika'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Omskin aika',
                            'standard': 'Omskin normaaliaika',
                            'daylight': 'Omskin kes\u00E4aika'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Novosibirskin aika',
                            'standard': 'Novosibirskin normaaliaika',
                            'daylight': 'Novosibirskin kes\u00E4aika'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Pohjois-Mariaanien aika'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Fernando de Noronhan aika',
                            'standard': 'Fernando de Noronhan normaaliaika',
                            'daylight': 'Fernando de Noronhan kes\u00E4aika'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Norfolkinsaarten aika'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Niuen aika'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Newfoundlandin aika',
                            'standard': 'Newfoundlandin normaaliaika',
                            'daylight': 'Newfoundlandin kes\u00E4aika'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Uuden-Seelannin aika',
                            'standard': 'Uuden-Seelannin normaaliaika',
                            'daylight': 'Uuden-Seelannin kes\u00E4aika'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Uuden-Kaledonian aika',
                            'standard': 'Uuden-Kaledonian normaaliaika',
                            'daylight': 'Uuden-Kaledonian kes\u00E4aika'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Yhdysvaltain keskinen aika',
                            'standard': 'Yhdysvaltain keskinen normaaliaika',
                            'daylight': 'Yhdysvaltain keskinen kes\u00E4aika'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Yhdysvaltain it\u00E4inen aika',
                            'standard': 'Yhdysvaltain it\u00E4inen normaaliaika',
                            'daylight': 'Yhdysvaltain it\u00E4inen kes\u00E4aika'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Kalliovuorten aika',
                            'standard': 'Kalliovuorten normaaliaika',
                            'daylight': 'Kalliovuorten kes\u00E4aika'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Yhdysvaltain Tyynenmeren aika',
                            'standard': 'Yhdysvaltain Tyynenmeren normaaliaika',
                            'daylight': 'Yhdysvaltain Tyynenmeren kes\u00E4aika'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Anadyrin aika',
                            'standard': 'Anadyrin normaaliaika',
                            'daylight': 'Anadyrin kes\u00E4aika'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Aqtaw\'n aika',
                            'standard': 'Aqtaw\'n normaaliaika',
                            'daylight': 'Aqtaw\'n kes\u00E4aika'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Aqt\u00F6ben aika',
                            'standard': 'Aqt\u00F6ben normaaliaika',
                            'daylight': 'Aqt\u00F6ben kes\u00E4aika'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Kap Verden aika',
                            'standard': 'Kap Verden normaaliaika',
                            'daylight': 'Kap Verden kes\u00E4aika'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'Caseyn aika'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'T\u0161amorron aika'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Chathamin aika',
                            'standard': 'Chathamin normaaliaika',
                            'daylight': 'Chathamin kes\u00E4aika'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Chilen aika',
                            'standard': 'Chilen normaaliaika',
                            'daylight': 'Chilen kes\u00E4aika'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Kiinan aika',
                            'standard': 'Kiinan normaaliaika',
                            'daylight': 'Kiinan kes\u00E4aika'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'T\u0161oibalsan aika',
                            'standard': 'T\u0161oibalsan normaaliaika',
                            'daylight': 'T\u0161oibalsan kes\u00E4aika'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Joulusaaren aika'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Kookossaarten aika'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Kolumbian aika',
                            'standard': 'Kolumbian normaaliaika',
                            'daylight': 'Kolumbian kes\u00E4aika'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Cookinsaarten aika',
                            'standard': 'Cookinsaarten normaaliaika',
                            'daylight': 'Cookinsaarten kes\u00E4aika'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Kuuban aika',
                            'standard': 'Kuuban normaaliaika',
                            'daylight': 'Kuuban kes\u00E4aika'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Davisin aika'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Dumont-d\'Urvillen aika'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'It\u00E4-Timorin aika'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'P\u00E4\u00E4si\u00E4issaaren aika',
                            'standard': 'P\u00E4\u00E4si\u00E4issaaren normaaliaika',
                            'daylight': 'P\u00E4\u00E4si\u00E4issaaren kes\u00E4aika'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ecuadorin aika'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Keski-Euroopan aika',
                            'standard': 'Keski-Euroopan normaaliaika',
                            'daylight': 'Keski-Euroopan kes\u00E4aika'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'It\u00E4-Euroopan aika',
                            'standard': 'It\u00E4-Euroopan normaaliaika',
                            'daylight': 'It\u00E4-Euroopan kes\u00E4aika'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'L\u00E4nsi-Euroopan aika',
                            'standard': 'L\u00E4nsi-Euroopan normaaliaika',
                            'daylight': 'L\u00E4nsi-Euroopan kes\u00E4aika'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Falklandinsaarten aika',
                            'standard': 'Falklandinsaarten normaaliaika',
                            'daylight': 'Falklandinsaarten kes\u00E4aika'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Fid\u017Ein aika',
                            'standard': 'Fid\u017Ein normaaliaika',
                            'daylight': 'Fid\u017Ein kes\u00E4aika'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Ranskan Guayanan aika'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Ranskan etel\u00E4isten ja antarktisten alueiden aika'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Gal\u00E1pagossaarten aika'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Tokelaun aika'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Tongan aika',
                            'standard': 'Tongan normaaliaika',
                            'daylight': 'Tongan kes\u00E4aika'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Chuukin aika'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Turkmenistanin aika',
                            'standard': 'Turkmenistanin normaaliaika',
                            'daylight': 'Turkmenistanin kes\u00E4aika'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Tuvalun aika'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Uruguayn aika',
                            'standard': 'Uruguayn normaaliaika',
                            'daylight': 'Uruguayn kes\u00E4aika'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Uzbekistanin aika',
                            'standard': 'Uzbekistanin normaaliaika',
                            'daylight': 'Uzbekistanin kes\u00E4aika'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Vanuatun aika',
                            'standard': 'Vanuatun normaaliaika',
                            'daylight': 'Vanuatun kes\u00E4aika'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Jekaterinburgin aika',
                            'standard': 'Jekaterinburgin normaaliaika',
                            'daylight': 'Jekaterinburgin kes\u00E4aika'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Jakutskin aika',
                            'standard': 'Jakutskin normaaliaika',
                            'daylight': 'Jakutskin kes\u00E4aika'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Wallisin ja Futunan aika'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Waken aika'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Vostokin aika'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Volgogradin aika',
                            'standard': 'Volgogradin normaaliaika',
                            'daylight': 'Volgogradin kes\u00E4aika'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Vladivostokin aika',
                            'standard': 'Vladivostokin normaaliaika',
                            'daylight': 'Vladivostokin kes\u00E4aika'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Venezuelan aika'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Tad\u017Eikistanin aika'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Taipein aika',
                            'standard': 'Taipein normaaliaika',
                            'daylight': 'Taipein kes\u00E4aika'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Tahitin aika'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Syowan aika'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Surinamin aika'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Etel\u00E4-Georgian aika'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Salomonsaarten aika'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Singaporen aika'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Seychellien aika'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Guamin aika'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'L\u00E4nsi-Gr\u00F6nlannin aika',
                            'standard': 'L\u00E4nsi-Gr\u00F6nlannin normaaliaika',
                            'daylight': 'L\u00E4nsi-Gr\u00F6nlannin kes\u00E4aika'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'It\u00E4-Gr\u00F6nlannin aika',
                            'standard': 'It\u00E4-Gr\u00F6nlannin normaaliaika',
                            'daylight': 'It\u00E4-Gr\u00F6nlannin kes\u00E4aika'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Greenwichin normaaliaika'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Gilbertsaarten aika'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Georgian aika',
                            'standard': 'Georgian normaaliaika',
                            'daylight': 'Georgian kes\u00E4aika'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Gambierin aika'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Amazonin aika',
                            'standard': 'Amazonin normaaliaika',
                            'daylight': 'Amazonin kes\u00E4aika'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Acren aika',
                            'standard': 'Acren normaaliaika',
                            'daylight': 'Acren kes\u00E4aika'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Afganistanin aika'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Keski-Afrikan aika'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'It\u00E4-Afrikan aika'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Etel\u00E4-Afrikan aika'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'L\u00E4nsi-Afrikan aika',
                            'standard': 'L\u00E4nsi-Afrikan normaaliaika',
                            'daylight': 'L\u00E4nsi-Afrikan kes\u00E4aika'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Alaskan aika',
                            'standard': 'Alaskan normaaliaika',
                            'daylight': 'Alaskan kes\u00E4aika'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Almatyn aika',
                            'standard': 'Almatyn normaaliaika',
                            'daylight': 'Almatyn kes\u00E4aika'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Saudi-Arabian aika',
                            'standard': 'Saudi-Arabian normaaliaika',
                            'daylight': 'Saudi-Arabian kes\u00E4aika'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Argentiinan aika',
                            'standard': 'Argentiinan normaaliaika',
                            'daylight': 'Argentiinan kes\u00E4aika'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'L\u00E4nsi-Argentiinan aika',
                            'standard': 'L\u00E4nsi-Argentiinan normaaliaika',
                            'daylight': 'L\u00E4nsi-Argentiinan kes\u00E4aika'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Armenian aika',
                            'standard': 'Armenian normaaliaika',
                            'daylight': 'Armenian kes\u00E4aika'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Kanadan Atlantin aika',
                            'standard': 'Kanadan Atlantin normaaliaika',
                            'daylight': 'Kanadan Atlantin kes\u00E4aika'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Keski-Australian aika',
                            'standard': 'Keski-Australian normaaliaika',
                            'daylight': 'Keski-Australian kes\u00E4aika'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'L\u00E4ntisen Keski-Australian aika',
                            'standard': 'L\u00E4ntisen Keski-Australian normaaliaika',
                            'daylight': 'L\u00E4ntisen Keski-Australian kes\u00E4aika'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'It\u00E4-Australian aika',
                            'standard': 'It\u00E4-Australian normaaliaika',
                            'daylight': 'It\u00E4-Australian kes\u00E4aika'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'L\u00E4nsi-Australian aika',
                            'standard': 'L\u00E4nsi-Australian normaaliaika',
                            'daylight': 'L\u00E4nsi-Australian kes\u00E4aika'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Azerbaid\u017Eanin aika',
                            'standard': 'Azerbaid\u017Eanin normaaliaika',
                            'daylight': 'Azerbaid\u017Eanin kes\u00E4aika'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Azorien aika',
                            'standard': 'Azorien normaaliaika',
                            'daylight': 'Azorien kes\u00E4aika'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Bangladeshin aika',
                            'standard': 'Bangladeshin normaaliaika',
                            'daylight': 'Bangladeshin kes\u00E4aika'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Bhutanin aika'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Bolivian aika'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Brasilian aika',
                            'standard': 'Brasilian normaaliaika',
                            'daylight': 'Brasilian kes\u00E4aika'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Brunein aika'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Arabiemiirikuntien normaaliaika'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Guyanan aika'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Havaijin-Aleuttien aika',
                            'standard': 'Havaijin-Aleuttien normaaliaika',
                            'daylight': 'Havaijin-Aleuttien kes\u00E4aika'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hongkongin aika',
                            'standard': 'Hongkongin normaaliaika',
                            'daylight': 'Hongkongin kes\u00E4aika'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hovdin aika',
                            'standard': 'Hovdin normaaliaika',
                            'daylight': 'Hovdin kes\u00E4aika'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Intian aika'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Intian valtameren aika'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Indokiinan aika'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Keski-Indonesian aika'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'It\u00E4-Indonesian aika'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'L\u00E4nsi-Indonesian aika'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Iranin aika',
                            'standard': 'Iranin normaaliaika',
                            'daylight': 'Iranin kes\u00E4aika'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Irkutskin aika',
                            'standard': 'Irkutskin normaaliaika',
                            'daylight': 'Irkutskin kes\u00E4aika'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Israelin aika',
                            'standard': 'Israelin normaaliaika',
                            'daylight': 'Israelin kes\u00E4aika'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Japanin aika',
                            'standard': 'Japanin normaaliaika',
                            'daylight': 'Japanin kes\u00E4aika'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Kamt\u0161atkan aika',
                            'standard': 'Kamt\u0161atkan normaaliaika',
                            'daylight': 'Kamt\u0161atkan kes\u00E4aika'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'It\u00E4-Kazakstanin aika'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'L\u00E4nsi-Kazakstanin aika'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Korean aika',
                            'standard': 'Korean normaaliaika',
                            'daylight': 'Korean kes\u00E4aika'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Kosraen aika'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Krasnojarskin aika',
                            'standard': 'Krasnojarskin normaaliaika',
                            'daylight': 'Krasnojarskin kes\u00E4aika'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Kirgisian aika'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Sri Lankan aika'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Linesaarten aika'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Lord Howen aika',
                            'standard': 'Lord Howen normaaliaika',
                            'daylight': 'Lord Howen kes\u00E4aika'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Macaon aika',
                            'standard': 'Macaon normaaliaika',
                            'daylight': 'Macaon kes\u00E4aika'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Macquariensaaren aika'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Magadanin aika',
                            'standard': 'Magadanin normaaliaika',
                            'daylight': 'Magadanin kes\u00E4aika'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Malesian aika'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Malediivien aika'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Marquesasin aika'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Marshallinsaarten aika'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Mauritiuksen aika',
                            'standard': 'Mauritiuksen normaaliaika',
                            'daylight': 'Mauritiuksen kes\u00E4aika'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Mawsonin aika'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ulan Batorin aika',
                            'standard': 'Ulan Batorin normaaliaika',
                            'daylight': 'Ulan Batorin kes\u00E4aika'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Moskovan aika',
                            'standard': 'Moskovan normaaliaika',
                            'daylight': 'Moskovan kes\u00E4aika'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Myanmarin aika'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Naurun aika'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Nepalin aika'
                        }
                    }
                },
                'hourFormat': '+H.mm;-H.mm',
                'gmtFormat': 'UTC{0}',
                'gmtZeroFormat': 'UTC',
                'regionFormat': 'aikavy\u00F6hyke: {0}',
                'regionFormat-type-daylight': '{0} (kes\u00E4aika)',
                'regionFormat-type-standard': '{0} (normaaliaika)',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': 'Normalisoitu lajittelu',
                'collation': 'lajitteluj\u00E4rjestys',
                'colHiraganaQuaternary': 'Kana-lajittelu',
                'colCaseLevel': 'Isot ja pienet kirjaimet erotteleva lajittelu',
                'colCaseFirst': 'J\u00E4rjestys isojen/pienten kirjainten mukaan',
                'colBackwards': 'K\u00E4\u00E4nteinen painomerkki -lajittelu',
                'colAlternate': 'Ohita symbolit -lajittelu',
                'calendar': 'kalenteri',
                'x': 'yksityisk\u00E4ytt\u00F6',
                'variableTop': 'lajittele symboleina',
                'va': 'maavalinnan muunnelma',
                'timezone': 'aikavy\u00F6hyke',
                'numbers': 'numerot',
                'currency': 'valuutta',
                'colStrength': 'Lajittelun vahvuus',
                'colNumeric': 'Numeerinen lajittelu'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Lajittele kana-merkit erikseen',
                    'yes': 'Lajittele kana-merkit erikseen'
                },
                'colCaseLevel': {
                    'no': 'Lajittele ilman isojen ja pienten kirjainten erottelua',
                    'yes': 'Lajittele isojen ja pienten kirjainten mukaan'
                },
                'colCaseFirst': {
                    'lower': 'Lajittele pienet kirjaimet ensin',
                    'no': 'Lajittele isot ja pienet kirjaimet normaalisti',
                    'upper': 'Lajittele isot kirjaimet ensin'
                },
                'colStrength': {
                    'identical': 'Lajittele kaikki',
                    'primary': 'Lajittele vain peruskirjaimet',
                    'quaternary': 'Lajittele painomerkit/koko/leveys/kana-merkit',
                    'secondary': 'Lajittele painomerkit',
                    'tertiary': 'Lajittele painomerkit/koko/leveys'
                },
                'colNumeric': {
                    'no': 'Lajittele numerot erikseen',
                    'yes': 'Lajittele numerot numeerisesti'
                },
                'colNormalization': {
                    'no': 'Lajittele ilman normalisointia',
                    'yes': 'Lajittele Unicode normalisoituna'
                },
                'calendar': {
                    'japanese': 'japanilainen kalenteri',
                    'iso8601': 'iso8601',
                    'coptic': 'koptilainen kalenteri',
                    'dangi': 'dangilainen kalenteri',
                    'ethiopic': 'etiopialainen kalenteri',
                    'ethiopic-amete-alem': 'etiopialainen amete alem -kalenteri',
                    'gregorian': 'gregoriaaninen kalenteri',
                    'hebrew': 'juutalainen kalenteri',
                    'persian': 'persialainen kalenteri',
                    'roc': 'Kiinan tasavallan kalenteri',
                    'chinese': 'kiinalainen kalenteri',
                    'buddhist': 'buddhalainen kalenteri',
                    'indian': 'intialainen kalenteri',
                    'islamic': 'islamilainen kalenteri',
                    'islamic-civil': 'islamilainen siviilikalenteri',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'puhelinluetteloj\u00E4rjestys',
                    'gb2312han': 'yksinkertaistettu kiinalainen j\u00E4rjestys GB2312',
                    'eor': 'yleiseurooppalainen lajitteluj\u00E4rjestys',
                    'ducet': 'Unicoden oletusj\u00E4rjestys',
                    'dictionary': 'sanakirjaj\u00E4rjestys',
                    'big5han': 'perinteinen kiinalainen j\u00E4rjestys Big5',
                    'traditional': 'perinteinen j\u00E4rjestys',
                    'standard': 'normaalij\u00E4rjestys',
                    'zhuyin': 'zhuyin-j\u00E4rjestys',
                    'unihan': 'radikaali- ja piirtoj\u00E4rjestys',
                    'stroke': 'piirtoj\u00E4rjestys',
                    'searchjl': 'haku hangul-alkukonsonantin mukaan',
                    'search': 'yleishakuj\u00E4rjestys',
                    'reformed': 'uudistettu j\u00E4rjestys',
                    'pinyin': 'pinyin-j\u00E4rjestys',
                    'phonetic': '\u00E4\u00E4nteellinen j\u00E4rjestys'
                },
                'numbers': {
                    'knda': 'kannadalaiset numerot',
                    'khmr': 'khmeril\u00E4iset numerot',
                    'kali': 'kayah li -numerot',
                    'jpanfin': 'japanilaiset talousnumerot',
                    'jpan': 'japanilaiset numerot',
                    'java': 'jaavalaiset numerot',
                    'hebr': 'heprealaiset numerot',
                    'hantfin': 'perinteiset kiinalaiset talousnumerot',
                    'hant': 'perinteiset kiinalaiset numerot',
                    'hansfin': 'yksinkertaistetut kiinalaiset talousnumerot',
                    'hans': 'yksinkertaistetut kiinalaiset numerot',
                    'hanidec': 'kiinalaiset desimaalinumerot',
                    'guru': 'gurmukhilaiset numerot',
                    'gujr': 'gud\u017Earatilaiset numerot',
                    'greklow': 'kreikkalaiset piennumerot',
                    'grek': 'kreikkalaiset numerot',
                    'bali': 'balilaiset numerot',
                    'armnlow': 'armenialaiset piennumerot',
                    'armn': 'armenialaiset numerot',
                    'arabext': 'laajennetut arabialaiset numerot',
                    'arab': 'arabialaiset numerot',
                    'finance': 'talousnumerot',
                    'traditional': 'perinteiset numerot',
                    'native': 'Kielen omat numerot',
                    'beng': 'bengalilaiset numerot',
                    'brah': 'brahmilaiset numerot',
                    'cakm': 'chakmalaiset numerot',
                    'cham': 'cham-numerot',
                    'deva': 'devanagarinumerot',
                    'orya': 'orijalaiset numerot',
                    'osma': 'osma',
                    'roman': 'roomalaiset numerot',
                    'romanlow': 'roomalaiset piennumerot',
                    'saur': 'saurashtra-numerot',
                    'shrd': 'shrd',
                    'sora': 'sora sompeng -numerot',
                    'sund': 'sundalaiset numerot',
                    'vaii': 'vai-numerot',
                    'tibt': 'tiibetil\u00E4iset numerot',
                    'thai': 'thainumerot',
                    'telu': 'telugulaiset numerot',
                    'tamldec': 'tamilinumerot',
                    'taml': 'perinteiset tamilinumerot',
                    'talu': 'uudet tai lue -numerot',
                    'takr': 'takr',
                    'olck': 'ol chiki -numerot',
                    'nkoo': 'n\'ko-numerot',
                    'mymrshan': 'myanmarin shan-numerot',
                    'mymr': 'burmalaiset numerot',
                    'mtei': 'meetei mayek -numerot',
                    'mong': 'mongolialaiset numerot',
                    'mlym': 'malajalamilaiset numerot',
                    'limb': 'limbunumerot',
                    'lepc': 'lepchanumerot',
                    'latn': 'l\u00E4nsimaiset numerot',
                    'laoo': 'laolaiset numerot',
                    'lanatham': 'taithamin tham-numerot',
                    'lana': 'taithamin hora-numerot',
                    'geor': 'georgialaiset numerot',
                    'fullwide': 'ideografin levyiset numerot',
                    'ethi': 'etiopialaiset numerot'
                },
                'colAlternate': {
                    'non-ignorable': 'Lajittele symbolit',
                    'shifted': 'Lajittele symbolit ohittaen'
                },
                'colBackwards': {
                    'no': 'Lajittele painomerkit normaalisti',
                    'yes': 'Lajittele painomerkit k\u00E4\u00E4nteisesti'
                }
            },
            'codePatterns': {
                'language': 'kieli: {0}',
                'script': 'kirjoitusj\u00E4rjestelm\u00E4: {0}',
                'territory': 'alue: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} unssi',
                    'unitPattern-count-other': '{0} unssia'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kilogramma',
                    'unitPattern-count-other': '{0} kilogrammaa'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} gramma',
                    'unitPattern-count-other': '{0} grammaa'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} jaardi',
                    'unitPattern-count-other': '{0} jaardia'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pikometri',
                    'unitPattern-count-other': '{0} pikometri\u00E4'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} millimetri',
                    'unitPattern-count-other': '{0} millimetri\u00E4'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} maili',
                    'unitPattern-count-other': '{0} mailia'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} metri',
                    'unitPattern-count-other': '{0} metri\u00E4'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} valovuosi',
                    'unitPattern-count-other': '{0} valovuotta'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} kilometri',
                    'unitPattern-count-other': '{0} kilometri\u00E4'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} tuuma',
                    'unitPattern-count-other': '{0} tuumaa'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} jalka',
                    'unitPattern-count-other': '{0} jalkaa'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} senttimetri',
                    'unitPattern-count-other': '{0} senttimetri\u00E4'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} vuosi',
                    'unitPattern-count-other': '{0} vuotta'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} viikko',
                    'unitPattern-count-other': '{0} viikkoa'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} kuukausi',
                    'unitPattern-count-other': '{0} kuukautta'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} pauna',
                    'unitPattern-count-other': '{0} paunaa'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} hevosvoima',
                    'unitPattern-count-other': '{0} hevosvoimaa'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kilowatti',
                    'unitPattern-count-other': '{0} kilowattia'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} watti',
                    'unitPattern-count-other': '{0} wattia'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hehtopascal',
                    'unitPattern-count-other': '{0} hehtopascalia'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} tuuma elohopeaa',
                    'unitPattern-count-other': '{0} tuumaa elohopeaa'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} millibaari',
                    'unitPattern-count-other': '{0} millibaaria'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} litra',
                    'unitPattern-count-other': '{0} litraa'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} kuutiomaili',
                    'unitPattern-count-other': '{0} kuutiomailia'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} kuutiokilometri',
                    'unitPattern-count-other': '{0} kuutiokilometri\u00E4'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} fahrenheitaste',
                    'unitPattern-count-other': '{0} fahrenheitastetta'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} celsiusaste',
                    'unitPattern-count-other': '{0} celsiusastetta'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} maili tunnissa',
                    'unitPattern-count-other': '{0} mailia tunnissa'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} metri sekunnissa',
                    'unitPattern-count-other': '{0} metri\u00E4 sekunnissa'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} kilometri tunnissa',
                    'unitPattern-count-other': '{0} kilometri\u00E4 tunnissa'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} minuutti',
                    'unitPattern-count-other': '{0} minuuttia'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} millisekunti',
                    'unitPattern-count-other': '{0} millisekuntia'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} tunti',
                    'unitPattern-count-other': '{0} tuntia'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} p\u00E4iv\u00E4',
                    'unitPattern-count-other': '{0} p\u00E4iv\u00E4\u00E4'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} neli\u00F6maili',
                    'unitPattern-count-other': '{0} neli\u00F6mailia'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} neli\u00F6metri',
                    'unitPattern-count-other': '{0} neli\u00F6metri\u00E4'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} neli\u00F6kilometri',
                    'unitPattern-count-other': '{0} neli\u00F6kilometri\u00E4'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} kulmaminuutti',
                    'unitPattern-count-other': '{0} kulmaminuuttia'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} kulmasekunti',
                    'unitPattern-count-other': '{0} kulmasekuntia'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} aste',
                    'unitPattern-count-other': '{0} astetta'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} eekkeri',
                    'unitPattern-count-other': '{0} eekkeri\u00E4'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} hehtaari',
                    'unitPattern-count-other': '{0} hehtaaria'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} neli\u00F6jalka',
                    'unitPattern-count-other': '{0} neli\u00F6jalkaa'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} sekunti',
                    'unitPattern-count-other': '{0} sekuntia'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
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
                    'unitPattern-count-one': '{0} mi',
                    'unitPattern-count-other': '{0} mi'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} vv',
                    'unitPattern-count-other': '{0} vv'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} in',
                    'unitPattern-count-other': '{0} in'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} ft',
                    'unitPattern-count-other': '{0} ft'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} v',
                    'unitPattern-count-other': '{0} v'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} vk',
                    'unitPattern-count-other': '{0} vk'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} kk',
                    'unitPattern-count-other': '{0} kk'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} hv',
                    'unitPattern-count-other': '{0} hv'
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
                    'unitPattern-count-one': '{0} t',
                    'unitPattern-count-other': '{0} t'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} pv',
                    'unitPattern-count-other': '{0} pv'
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
