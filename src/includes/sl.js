/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language sl}.
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
        AstroDate.lang('sl', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'maj',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'avg.',
                                    '9': 'sep.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marec',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'junij',
                                    '7': 'julij',
                                    '8': 'avgust',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'maj',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'avg',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marec',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'junij',
                                    '7': 'julij',
                                    '8': 'avgust',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
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
                                    'thu': 'čet.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 't',
                                    'wed': 's',
                                    'thu': 'č',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': 'čet.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'nedelja',
                                    'mon': 'ponedeljek',
                                    'tue': 'torek',
                                    'wed': 'sreda',
                                    'thu': 'četrtek',
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
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sob'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 't',
                                    'wed': 's',
                                    'thu': 'č',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': 'čet.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'nedelja',
                                    'mon': 'ponedeljek',
                                    'tue': 'torek',
                                    'wed': 'sreda',
                                    'thu': 'četrtek',
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
                                    '1': '1. četrtletje',
                                    '2': '2. četrtletje',
                                    '3': '3. četrtletje',
                                    '4': '4. četrtletje'
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
                                    '1': '1. četrtletje',
                                    '2': '2. četrtletje',
                                    '3': '3. četrtletje',
                                    '4': '4. četrtletje'
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
                                '0': 'pred našim štetjem',
                                '1': 'naše štetje',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'po n. št.'
                            },
                            'eraAbbr': {
                                '0': 'pr. n. št.',
                                '1': 'po Kr.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'po n. št.'
                            },
                            'eraNarrow': {
                                '0': 'pr. n. št.',
                                '1': 'po Kr.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'po n. št.'
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
                                'd': 'd',
                                'Ed': 'E, d.',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E HH.mm',
                                'Ehms': 'E h.mm.ss a',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyM': 'M/y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
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
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm–HH.mm',
                                    'm': 'HH.mm–HH.mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm–HH.mm v',
                                    'm': 'HH.mm–HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M.–M.'
                                },
                                'Md': {
                                    'd': 'd. – d. M.',
                                    'M': 'd. M. – d. M.'
                                },
                                'MEd': {
                                    'd': 'E, d. – E, d. M.',
                                    'M': 'E, d. M. – E, d. M.'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd.–d. MMM',
                                    'M': 'd. MMM – d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d. – E, d. MMM',
                                    'M': 'E, d. MMM – E, d. MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M.–M. y',
                                    'y': 'M. y – M. y'
                                },
                                'yMd': {
                                    'd': 'd. M. y – d. M. y',
                                    'M': 'd. M. – d. M. y',
                                    'y': 'd. M. y – d. M. y'
                                },
                                'yMEd': {
                                    'd': 'E, d. – E, d. M. y',
                                    'M': 'E, d. M. – E, d. M. y',
                                    'y': 'E, d. M. y – E, d. M. y'
                                },
                                'yMMM': {
                                    'M': 'MMM – MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. MMM y',
                                    'M': 'd. MMM – d. MMM y',
                                    'y': 'd. MMM y – d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. MMM – E, d. MMM y',
                                    'M': 'E, d. MMM – E, d. MMM y',
                                    'y': 'E, d. MMM y – E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} čas',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
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
