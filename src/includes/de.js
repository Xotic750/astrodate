/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language de}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
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
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('de', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Jan.',
                                    '2': 'Feb.',
                                    '3': 'März',
                                    '4': 'Apr.',
                                    '5': 'Mai',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'Aug.',
                                    '9': 'Sep.',
                                    '10': 'Okt.',
                                    '11': 'Nov.',
                                    '12': 'Dez.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'März',
                                    '4': 'April',
                                    '5': 'Mai',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'Oktober',
                                    '11': 'November',
                                    '12': 'Dezember'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mär',
                                    '4': 'Apr',
                                    '5': 'Mai',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Okt',
                                    '11': 'Nov',
                                    '12': 'Dez'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'März',
                                    '4': 'April',
                                    '5': 'Mai',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'Oktober',
                                    '11': 'November',
                                    '12': 'Dezember'
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
                                '1': 'n. Chr.',
                                '0-alt-variant': 'vor der gewöhnlichen Zeitrechnung',
                                '1-alt-variant': 'der gewöhnlichen Zeitrechnung'
                            },
                            'eraAbbr': {
                                '0': 'v. Chr.',
                                '1': 'n. Chr.',
                                '0-alt-variant': 'v. u. Z.',
                                '1-alt-variant': 'u. Z.'
                            },
                            'eraNarrow': {
                                '0': 'v. Chr.',
                                '1': 'n. Chr.',
                                '0-alt-variant': 'vdZ',
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
                                'd': 'd',
                                'Ed': 'E, d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'h': 'h a',
                                'H': 'HH \'Uhr\'',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMd': 'd.MM.',
                                'MMdd': 'dd.MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E, d.M.y',
                                'yMM': 'MM.y',
                                'yMMdd': 'dd.MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd.-d.'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH-HH \'Uhr\''
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH \'Uhr\' v'
                                },
                                'M': {
                                    'M': 'M.-M.'
                                },
                                'Md': {
                                    'd': 'dd.MM. - dd.MM.',
                                    'M': 'dd.MM. - dd.MM.'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM. - E, dd.MM.',
                                    'M': 'E, dd.MM. - E, dd.MM.'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'd.-d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
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
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} Zeit',
                    'regionFormat-type-daylight': '{0} Sommerzeit',
                    'regionFormat-type-standard': '{0} Normalzeit',
                    'fallbackFormat': '{1} ({0})'
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
