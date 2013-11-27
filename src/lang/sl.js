/**
 * @file {@link https://github.com/Xotic750/astrodate sl}. Language file for AstroDate.
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
        AstroDate.lang('sl', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '{0} \u010Das',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
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
