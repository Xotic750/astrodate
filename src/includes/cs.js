/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language cs}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9298
 * timeZoneNames: 24r9298
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
        AstroDate.lang('cs', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'led',
                                    '2': 'úno',
                                    '3': 'bře',
                                    '4': 'dub',
                                    '5': 'kvě',
                                    '6': 'čvn',
                                    '7': 'čvc',
                                    '8': 'srp',
                                    '9': 'zář',
                                    '10': 'říj',
                                    '11': 'lis',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'ledna',
                                    '2': 'února',
                                    '3': 'března',
                                    '4': 'dubna',
                                    '5': 'května',
                                    '6': 'června',
                                    '7': 'července',
                                    '8': 'srpna',
                                    '9': 'září',
                                    '10': 'října',
                                    '11': 'listopadu',
                                    '12': 'prosince'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'led',
                                    '2': 'úno',
                                    '3': 'bře',
                                    '4': 'dub',
                                    '5': 'kvě',
                                    '6': 'čvn',
                                    '7': 'čvc',
                                    '8': 'srp',
                                    '9': 'zář',
                                    '10': 'říj',
                                    '11': 'lis',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': 'l',
                                    '2': 'ú',
                                    '3': 'b',
                                    '4': 'd',
                                    '5': 'k',
                                    '6': 'č',
                                    '7': 'č',
                                    '8': 's',
                                    '9': 'z',
                                    '10': 'ř',
                                    '11': 'l',
                                    '12': 'p'
                                },
                                'wide': {
                                    '1': 'leden',
                                    '2': 'únor',
                                    '3': 'březen',
                                    '4': 'duben',
                                    '5': 'květen',
                                    '6': 'červen',
                                    '7': 'červenec',
                                    '8': 'srpen',
                                    '9': 'září',
                                    '10': 'říjen',
                                    '11': 'listopad',
                                    '12': 'prosinec'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'Ú',
                                    'wed': 'S',
                                    'thu': 'Č',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'neděle',
                                    'mon': 'pondělí',
                                    'tue': 'úterý',
                                    'wed': 'středa',
                                    'thu': 'čtvrtek',
                                    'fri': 'pátek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'Ú',
                                    'wed': 'S',
                                    'thu': 'Č',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'neděle',
                                    'mon': 'pondělí',
                                    'tue': 'úterý',
                                    'wed': 'středa',
                                    'thu': 'čtvrtek',
                                    'fri': 'pátek',
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
                                    '1': '1. čtvrtletí',
                                    '2': '2. čtvrtletí',
                                    '3': '3. čtvrtletí',
                                    '4': '4. čtvrtletí'
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
                                    '1': '1. čtvrtletí',
                                    '2': '2. čtvrtletí',
                                    '3': '3. čtvrtletí',
                                    '4': '4. čtvrtletí'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'př. n. l.',
                                '1': 'n. l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'př. n. l.',
                                '1': 'n. l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'př.n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd. M. y',
                            'short': 'dd.MM.yy'
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
                                'd': 'd.',
                                'Ed': 'E d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLLL y G',
                                'GyMMMd': 'd. M. y G',
                                'GyMMMEd': 'E d. M. y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'GyMMMMEd': 'E d. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'd. M.',
                                'MEd': 'E d. M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. M.',
                                'MMMEd': 'E d. M.',
                                'MMMMd': 'd. MMMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd. M. y',
                                'yMEd': 'E d. M. y',
                                'yMMM': 'LLLL y',
                                'yMMMd': 'd. M. y',
                                'yMMMEd': 'E d. M. y',
                                'yMMMM': 'LLLL y',
                                'yMMMMd': 'd. MMMM y',
                                'yMMMMEd': 'E d. MMMM y',
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
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd. M. – d. M.',
                                    'M': 'd. M. – d. M.'
                                },
                                'MEd': {
                                    'd': 'E d. M. – E d. M.',
                                    'M': 'E d. M. – E d. M.'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd.–d. M.',
                                    'M': 'd. M. – d. M.'
                                },
                                'MMMEd': {
                                    'd': 'E d. M. – E d. M.',
                                    'M': 'E d. M. – E d. M.'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M/y – M/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y – dd.MM.y',
                                    'M': 'dd.MM.y – dd.MM.y',
                                    'y': 'dd.MM.y – dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E dd.MM.y – E dd.MM.y',
                                    'M': 'E dd.MM.y – E dd.MM.y',
                                    'y': 'E dd.MM.y – E dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. M. y',
                                    'M': 'd. M. – d. M. y',
                                    'y': 'd. M. y – d. M. y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. M. – E d. M. y',
                                    'M': 'E d. M. – E d. M. y',
                                    'y': 'E d. M. y – E d. M. y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+H:mm;-H:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Časové pásmo {0}',
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
