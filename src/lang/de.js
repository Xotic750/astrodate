/**
 * @file {@link https://github.com/Xotic750/astrodate de}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('de', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} Normalzeit',
                    'regionFormat-type-daylight': '{0} Sommerzeit',
                    'regionFormat': '{0} Zeit',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'Aug.',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Mai',
                                    '12': 'Dez.',
                                    '11': 'Nov.',
                                    '10': 'Okt.',
                                    '9': 'Sep.',
                                    '1': 'Jan.',
                                    '2': 'Feb.',
                                    '3': 'M\u00E4rz',
                                    '4': 'Apr.'
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
                                    '8': 'August',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Mai',
                                    '12': 'Dezember',
                                    '11': 'November',
                                    '10': 'Oktober',
                                    '9': 'September',
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'M\u00E4rz',
                                    '4': 'April'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'Mai',
                                    '12': 'Dez',
                                    '11': 'Nov',
                                    '10': 'Okt',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'M\u00E4r',
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
                                    '8': 'August',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Mai',
                                    '12': 'Dezember',
                                    '11': 'November',
                                    '10': 'Oktober',
                                    '9': 'September',
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'M\u00E4rz',
                                    '4': 'April'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'M',
                                    'thu': 'D',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'wide': {
                                    'sun': 'Sonntag',
                                    'mon': 'Montag',
                                    'tue': 'Dienstag',
                                    'wed': 'Mittwoch',
                                    'thu': 'Donnerstag',
                                    'fri': 'Freitag',
                                    'sat': 'Samstag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'So',
                                    'mon': 'Mo',
                                    'tue': 'Di',
                                    'wed': 'Mi',
                                    'thu': 'Do',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'M',
                                    'thu': 'D',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'wide': {
                                    'sun': 'Sonntag',
                                    'mon': 'Montag',
                                    'tue': 'Dienstag',
                                    'wed': 'Mittwoch',
                                    'thu': 'Donnerstag',
                                    'fri': 'Freitag',
                                    'sat': 'Samstag'
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
                                    '1': '1. Quartal',
                                    '2': '2. Quartal',
                                    '3': '3. Quartal',
                                    '4': '4. Quartal'
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
                                    '1': '1. Quartal',
                                    '2': '2. Quartal',
                                    '3': '3. Quartal',
                                    '4': '4. Quartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'narrow': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'wide': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'narrow': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'wide': {
                                    'afternoon': 'Nachmittag',
                                    'am': 'vorm.',
                                    'earlyMorning': 'Morgen',
                                    'evening': 'Abend',
                                    'morning': 'Vormittag',
                                    'night': 'Nacht',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'v. Chr.',
                                '0-alt-variant': 'vor der gew\u00F6hnlichen Zeitrechnung',
                                '1': 'n. Chr.',
                                '1-alt-variant': 'der gew\u00F6hnlichen Zeitrechnung'
                            },
                            'eraAbbr': {
                                '0': 'v. Chr.',
                                '0-alt-variant': 'v. u. Z.',
                                '1': 'n. Chr.',
                                '1-alt-variant': 'u. Z.'
                            },
                            'eraNarrow': {
                                '0': 'v. Chr.',
                                '0-alt-variant': 'vdZ',
                                '1': 'n. Chr.',
                                '1-alt-variant': 'dZ'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'dd.MM.y',
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
                                'yMM': 'MM.y',
                                'yMEd': 'E, d.M.y',
                                'yMd': 'd.M.y',
                                'yM': 'M.y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMMEd': 'E, d. MMMM',
                                'd': 'd',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'h': 'h a',
                                'H': 'HH \'Uhr\'',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMM': 'MMM y',
                                'yMMdd': 'dd.MM.y',
                                'Hms': 'HH:mm:ss',
                                'Ed': 'E, d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMd': 'd.MM.',
                                'MMdd': 'dd.MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMdd': 'dd. MMMM'
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
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd.-d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM. - E, dd.MM.',
                                    'M': 'E, dd.MM. - E, dd.MM.'
                                },
                                'Md': {
                                    'd': 'dd.MM. - dd.MM.',
                                    'M': 'dd.MM. - dd.MM.'
                                },
                                'M': {
                                    'M': 'M.-M.'
                                },
                                'Hv': {
                                    'H': 'HH-HH \'Uhr\' v'
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
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.-d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
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
                                    'H': 'HH-HH \'Uhr\''
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd.-d.'
                                }
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
