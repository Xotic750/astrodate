/**
 * @file {@link https://github.com/Xotic750/astrodate hu}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9317
 * timeZoneNames: 24r9317
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
        AstroDate.lang('hu', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} z\u00F3naid\u0151',
                    'regionFormat-type-daylight': '{0} ny\u00E1ri id\u0151',
                    'regionFormat': '{0} id\u0151',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'j\u00FAl.',
                                    '6': 'j\u00FAn.',
                                    '5': 'm\u00E1j.',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'szept.',
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'm\u00E1rc.',
                                    '4': '\u00E1pr.'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'Sz',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': '\u00C1'
                                },
                                'wide': {
                                    '8': 'augusztus',
                                    '7': 'j\u00FAlius',
                                    '6': 'j\u00FAnius',
                                    '5': 'm\u00E1jus',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'okt\u00F3ber',
                                    '9': 'szeptember',
                                    '1': 'janu\u00E1r',
                                    '2': 'febru\u00E1r',
                                    '3': 'm\u00E1rcius',
                                    '4': '\u00E1prilis'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'j\u00FAl.',
                                    '6': 'j\u00FAn.',
                                    '5': 'm\u00E1j.',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'szept.',
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'm\u00E1rc.',
                                    '4': '\u00E1pr.'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'Sz',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': '\u00C1'
                                },
                                'wide': {
                                    '8': 'augusztus',
                                    '7': 'j\u00FAlius',
                                    '6': 'j\u00FAnius',
                                    '5': 'm\u00E1jus',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'okt\u00F3ber',
                                    '9': 'szeptember',
                                    '1': 'janu\u00E1r',
                                    '2': 'febru\u00E1r',
                                    '3': 'm\u00E1rcius',
                                    '4': '\u00E1prilis'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vas\u00E1rnap',
                                    'mon': 'h\u00E9tf\u0151',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'cs\u00FCt\u00F6rt\u00F6k',
                                    'fri': 'p\u00E9ntek',
                                    'sat': 'szombat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vas\u00E1rnap',
                                    'mon': 'h\u00E9tf\u0151',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'cs\u00FCt\u00F6rt\u00F6k',
                                    'fri': 'p\u00E9ntek',
                                    'sat': 'szombat'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': 'I. negyed\u00E9v',
                                    '2': 'II. negyed\u00E9v',
                                    '3': 'III. negyed\u00E9v',
                                    '4': 'IV. negyed\u00E9v'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. negyed\u00E9v',
                                    '2': '2. negyed\u00E9v',
                                    '3': '3. negyed\u00E9v',
                                    '4': '4. negyed\u00E9v'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'id\u0151sz\u00E1m\u00EDt\u00E1sunk el\u0151tt',
                                '0-alt-variant': 'Kr. e.',
                                '1': 'id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraAbbr': {
                                '0': 'i. e.',
                                '0-alt-variant': 'Kr. e.',
                                '1': 'i. sz.',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraNarrow': {
                                '0': 'ie.',
                                '0-alt-variant': 'Kr. e.',
                                '1': 'isz.',
                                '1-alt-variant': 'Kr. u.'
                            }
                        },
                        'dateFormats': {
                            'full': 'y. MMMM d., EEEE',
                            'long': 'y. MMMM d.',
                            'medium': 'y MMM d',
                            'short': 'y. MM. dd.'
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
                                'yMMMEd': 'y. MMM d., E',
                                'yMMMd': 'y. MMM d.',
                                'yMMM': 'y. MMM',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'd., E',
                                'd': 'd',
                                'GyMMMd': 'G y. MMM d.',
                                'GyMMMEd': 'G y. MMM d., E',
                                'h': 'a h',
                                'yQQQQ': 'y. QQQQ',
                                'yQQQ': 'y. QQQ',
                                'yMMMM': 'y. MMMM',
                                'Hms': 'H:mm:ss',
                                'hms': 'a h:mm:ss',
                                'Hm': 'H:mm',
                                'hm': 'a h:mm',
                                'H': 'H',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y.',
                                'GyMMM': 'G y. MMM',
                                'M': 'L',
                                'Md': 'M. d.',
                                'MEd': 'M. d., E',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d.',
                                'MMMEd': 'MMM d., E',
                                'MMMMd': 'MMMM d.',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y.',
                                'yM': 'y. M.',
                                'yMd': 'y. MM. dd.',
                                'yMEd': 'y. MM. dd., E'
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
                                    'd': 'MMM d., E \u2013 d., E',
                                    'M': 'MMM d., E \u2013 MMM d., E'
                                },
                                'MMMd': {
                                    'd': 'MMM d\u2013d.',
                                    'M': 'MMM d. \u2013 MMM d.'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'M. dd., E \u2013 M. d., E',
                                    'M': 'M. d., E \u2013 M. d., E'
                                },
                                'Md': {
                                    'd': 'M. d\u2013d.',
                                    'M': 'M. d. \u2013 M. d.'
                                },
                                'M': {
                                    'M': 'M\u2013M.'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'a h \u2013 a h v',
                                    'h': 'a h\u2013h v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'y. MM\u2013MM.',
                                    'y': 'y. MM. \u2013 y. MM.'
                                },
                                'yMd': {
                                    'd': 'y. MM. dd\u2013dd.',
                                    'M': 'y. MM. dd. \u2013 MM. dd.',
                                    'y': 'y. MM. dd. \u2013 y. MM. dd.'
                                },
                                'yMEd': {
                                    'd': 'y. MM. dd., E \u2013 dd., E',
                                    'M': 'y. MM. dd., E \u2013 MM. dd., E',
                                    'y': 'y. MM. dd., E \u2013 y. MM. dd., E'
                                },
                                'yMMM': {
                                    'M': 'y. MMM\u2013MMM',
                                    'y': 'y. MMM \u2013 y. MMM'
                                },
                                'yMMMd': {
                                    'd': 'y. MMM d\u2013d.',
                                    'M': 'y. MMM d. \u2013 MMM d.',
                                    'y': 'y. MMM d. \u2013 y. MMM d.'
                                },
                                'yMMMEd': {
                                    'd': 'y. MMM d., E \u2013 d., E',
                                    'M': 'y. MMM d., E \u2013 MMM d., E',
                                    'y': 'y. MMM d., E \u2013 y. MMM d., E'
                                },
                                'yMMMM': {
                                    'M': 'y. MMMM\u2013MMMM',
                                    'y': 'y. MMMM \u2013 y. MMMM'
                                },
                                'Hmv': {
                                    'H': 'H:mm\u2013H:mm v',
                                    'm': 'H:mm\u2013H:mm v'
                                },
                                'hmv': {
                                    'a': 'a h:mm \u2013 a h:mm v',
                                    'h': 'a h:mm\u2013h:mm v',
                                    'm': 'a h:mm\u2013h:mm v'
                                },
                                'Hm': {
                                    'H': 'H:mm\u2013H:mm',
                                    'm': 'H:mm\u2013H:mm'
                                },
                                'hm': {
                                    'a': 'a h:mm \u2013 a h:mm',
                                    'h': 'a h:mm\u2013h:mm',
                                    'm': 'a h:mm\u2013h:mm'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'h': {
                                    'a': 'a h \u2013 a h',
                                    'h': 'a h\u2013h'
                                },
                                'd': {
                                    'd': 'd\u2013d.'
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
