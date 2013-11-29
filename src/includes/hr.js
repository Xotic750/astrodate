/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language hr}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('hr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'sij',
                                    '2': 'velj',
                                    '3': 'ožu',
                                    '4': 'tra',
                                    '5': 'svi',
                                    '6': 'lip',
                                    '7': 'srp',
                                    '8': 'kol',
                                    '9': 'ruj',
                                    '10': 'lis',
                                    '11': 'stu',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.',
                                    '5': '5.',
                                    '6': '6.',
                                    '7': '7.',
                                    '8': '8.',
                                    '9': '9.',
                                    '10': '10.',
                                    '11': '11.',
                                    '12': '12.'
                                },
                                'wide': {
                                    '1': 'siječnja',
                                    '2': 'veljače',
                                    '3': 'ožujka',
                                    '4': 'travnja',
                                    '5': 'svibnja',
                                    '6': 'lipnja',
                                    '7': 'srpnja',
                                    '8': 'kolovoza',
                                    '9': 'rujna',
                                    '10': 'listopada',
                                    '11': 'studenoga',
                                    '12': 'prosinca'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'sij',
                                    '2': 'velj',
                                    '3': 'ožu',
                                    '4': 'tra',
                                    '5': 'svi',
                                    '6': 'lip',
                                    '7': 'srp',
                                    '8': 'kol',
                                    '9': 'ruj',
                                    '10': 'lis',
                                    '11': 'stu',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.',
                                    '5': '5.',
                                    '6': '6.',
                                    '7': '7.',
                                    '8': '8.',
                                    '9': '9.',
                                    '10': '10.',
                                    '11': '11.',
                                    '12': '12.'
                                },
                                'wide': {
                                    '1': 'siječanj',
                                    '2': 'veljača',
                                    '3': 'ožujak',
                                    '4': 'travanj',
                                    '5': 'svibanj',
                                    '6': 'lipanj',
                                    '7': 'srpanj',
                                    '8': 'kolovoz',
                                    '9': 'rujan',
                                    '10': 'listopad',
                                    '11': 'studeni',
                                    '12': 'prosinac'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': 'Č',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'wide': {
                                    'sun': 'nedjelja',
                                    'mon': 'ponedjeljak',
                                    'tue': 'utorak',
                                    'wed': 'srijeda',
                                    'thu': 'četvrtak',
                                    'fri': 'petak',
                                    'sat': 'subota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 'u',
                                    'wed': 's',
                                    'thu': 'č',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'wide': {
                                    'sun': 'nedjelja',
                                    'mon': 'ponedjeljak',
                                    'tue': 'utorak',
                                    'wed': 'srijeda',
                                    'thu': 'četvrtak',
                                    'fri': 'petak',
                                    'sat': 'subota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1kv',
                                    '2': '2kv',
                                    '3': '3kv',
                                    '4': '4kv'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
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
                                    '1': '1kv',
                                    '2': '2kv',
                                    '3': '3kv',
                                    '4': '4kv'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
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
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Prije Krista',
                                '1': 'Poslije Krista',
                                '0-alt-variant': 'pr. n. e.',
                                '1-alt-variant': 'n.e.'
                            },
                            'eraAbbr': {
                                '0': 'pr. Kr.',
                                '1': 'p. Kr.',
                                '0-alt-variant': 'pr. n. e.',
                                '1-alt-variant': 'n.e.'
                            },
                            'eraNarrow': {
                                '0': 'pr.n.e.',
                                '1': 'AD',
                                '0-alt-variant': 'pr. n. e.',
                                '1-alt-variant': 'n.e.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y.',
                            'long': 'd. MMMM y.',
                            'medium': 'd. MMM y.',
                            'short': 'd.M.yy.'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'u\' {0}',
                            'long': '{1} \'u\' {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd.',
                                'Ed': 'E, d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'LLL y. G',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'hh:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'hh:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L.',
                                'Md': 'd. M.',
                                'MEd': 'E, d. M.',
                                'MMdd': 'dd. MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMd': 'd. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'ms': 'mm:ss',
                                'y': 'y.',
                                'yM': 'M. y.',
                                'yMd': 'd. M. y.',
                                'yMEd': 'E, d. M. y.',
                                'yMM': 'MM. y.',
                                'yMMM': 'LLL y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMM': 'LLLL y.',
                                'yQQQ': 'QQQ y.',
                                'yQQQQ': 'QQQQ y.'
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
                                    'd': 'dd. - dd.'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h - h\'h\' a'
                                },
                                'H': {
                                    'H': 'HH-HH\'h\''
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
                                    'h': 'h - h \'h\' a v'
                                },
                                'Hv': {
                                    'H': 'HH - HH \'h\' v'
                                },
                                'M': {
                                    'M': 'MM. - MM.'
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
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'dd. - dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
                                },
                                'y': {
                                    'y': 'y. - y.'
                                },
                                'yM': {
                                    'M': 'MM.y. - MM.y.',
                                    'y': 'MM.y. - MM.y.'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y. - dd.MM.y.',
                                    'M': 'dd.MM.y. - dd.MM.y.',
                                    'y': 'dd.MM.y. - dd.MM.y.'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y. - E, dd.MM.y.',
                                    'M': 'E, dd.MM.y. - E, dd.MM.y.',
                                    'y': 'E, dd.MM.y. - E, dd.MM.y.'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y.',
                                    'y': 'LLL y. - LLL y.'
                                },
                                'yMMMd': {
                                    'd': 'dd. - dd. MMM y.',
                                    'M': 'dd. MMM - dd. MMM y.',
                                    'y': 'dd. MMM y. - dd. MMM y.'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd. - E, dd. MMM y.',
                                    'M': 'E, dd. MMM - E, dd. MMM y.',
                                    'y': 'E, dd. MMM y. - E, dd. MMM y.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL – LLLL y.',
                                    'y': 'LLLL y. - LLLL y.'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm; -HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}',
                    'regionFormat-type-daylight': '{0}, ljetno vrijeme',
                    'regionFormat-type-standard': '{0}, standardno vrijeme',
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
