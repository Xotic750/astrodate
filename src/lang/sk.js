/**
 * @file {@link https://github.com/Xotic750/astrodate sk}. Language file for AstroDate.
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
        AstroDate.lang('sk', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '\u010Casov\u00E9 p\u00E1smo {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'j\u00FAl',
                                    '6': 'j\u00FAn',
                                    '5': 'm\u00E1j',
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
                                    '8': 'augusta',
                                    '7': 'j\u00FAla',
                                    '6': 'j\u00FAna',
                                    '5': 'm\u00E1ja',
                                    '12': 'decembra',
                                    '11': 'novembra',
                                    '10': 'okt\u00F3bra',
                                    '9': 'septembra',
                                    '1': 'janu\u00E1ra',
                                    '2': 'febru\u00E1ra',
                                    '3': 'marca',
                                    '4': 'apr\u00EDla'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'j\u00FAl',
                                    '6': 'j\u00FAn',
                                    '5': 'm\u00E1j',
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
                                    '8': 'august',
                                    '7': 'j\u00FAl',
                                    '6': 'j\u00FAn',
                                    '5': 'm\u00E1j',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'okt\u00F3ber',
                                    '9': 'september',
                                    '1': 'janu\u00E1r',
                                    '2': 'febru\u00E1r',
                                    '3': 'marec',
                                    '4': 'apr\u00EDl'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': '\u0161t',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': '\u0160',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': '\u0160t',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nede\u013Ea',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': '\u0161tvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': '\u0161t',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': '\u0160',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': '\u0160t',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nede\u013Ea',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': '\u0161tvrtok',
                                    'fri': 'piatok',
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
                                    '1': '1. \u0161tvr\u0165rok',
                                    '2': '2. \u0161tvr\u0165rok',
                                    '3': '3. \u0161tvr\u0165rok',
                                    '4': '4. \u0161tvr\u0165rok'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1Q',
                                    '2': '2Q',
                                    '3': '3Q',
                                    '4': '4Q'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u0161tvr\u0165rok',
                                    '2': '2. \u0161tvr\u0165rok',
                                    '3': '3. \u0161tvr\u0165rok',
                                    '4': '4. \u0161tvr\u0165rok'
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
                                '0': 'pred n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'pred n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'pred n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
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
                                'yMMM': 'LLL y',
                                'yMEd': 'E d. M. y',
                                'yMd': 'd.M.y',
                                'yM': 'M.y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'Ed': 'E d.',
                                'd': 'd.',
                                'GyMMMd': 'd.M.y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMMd': 'd. MMMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMd': 'd.M.y',
                                'hms': 'h:mm:ss a',
                                'Hm': 'H:mm',
                                'Ehm': 'E h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'Hms': 'H:mm:ss',
                                'M': 'L.',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM.',
                                'MMMEd': 'E, d. MMM.',
                                'MMMMd': 'd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'mmss': 'mm:ss'
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
                                    'd': 'd. - d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMM': {
                                    'M': 'LLL \u2013 LLL'
                                },
                                'MEd': {
                                    'd': 'E, d.M. - E, d.M.',
                                    'M': 'E, d.M. - E, d.M.'
                                },
                                'Md': {
                                    'd': 'd.M. - d.M.',
                                    'M': 'd.M. - d.M.'
                                },
                                'M': {
                                    'M': 'M. \u2013 M.'
                                },
                                'Hv': {
                                    'H': 'HH \u2013 HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h \u2013 h a v'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}',
                                'y': {
                                    'y': 'y - y'
                                },
                                'yM': {
                                    'M': 'M.y - M.y',
                                    'y': 'M.y - M.y'
                                },
                                'yMd': {
                                    'd': 'd.M.y - d.M.y',
                                    'M': 'd.M.y - d.M.y',
                                    'y': 'd.M.y - d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y - E, d.M.y',
                                    'M': 'E, d.M.y - E, d.M.y',
                                    'y': 'E, d.M.y - E, d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL - LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd. - d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL - LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'Hmv': {
                                    'H': 'H:mm \u2013 H:mm v',
                                    'm': 'H:mm \u2013 H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm - h:mm a v',
                                    'm': 'h:mm - h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm \u2013 H:mm',
                                    'm': 'H:mm \u2013 H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm - h:mm a',
                                    'm': 'h:mm - h:mm a'
                                },
                                'H': {
                                    'H': 'HH \u2013 HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h \u2013 h a'
                                },
                                'd': {
                                    'd': 'd. \u2013 d.'
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
