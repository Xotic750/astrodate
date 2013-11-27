/**
 * @file {@link https://github.com/Xotic750/astrodate cs}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9298
 * timeZoneNames: 24r9298
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
        AstroDate.lang('cs', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '\u010Casov\u00E9 p\u00E1smo {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+H:mm;-H:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'srp',
                                    '7': '\u010Dvc',
                                    '6': '\u010Dvn',
                                    '5': 'kv\u011B',
                                    '12': 'pro',
                                    '11': 'lis',
                                    '10': '\u0159\u00EDj',
                                    '9': 'z\u00E1\u0159',
                                    '1': 'led',
                                    '2': '\u00FAno',
                                    '3': 'b\u0159e',
                                    '4': 'dub'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'srpna',
                                    '7': '\u010Dervence',
                                    '6': '\u010Dervna',
                                    '5': 'kv\u011Btna',
                                    '12': 'prosince',
                                    '11': 'listopadu',
                                    '10': '\u0159\u00EDjna',
                                    '9': 'z\u00E1\u0159\u00ED',
                                    '1': 'ledna',
                                    '2': '\u00FAnora',
                                    '3': 'b\u0159ezna',
                                    '4': 'dubna'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'srp',
                                    '7': '\u010Dvc',
                                    '6': '\u010Dvn',
                                    '5': 'kv\u011B',
                                    '12': 'pro',
                                    '11': 'lis',
                                    '10': '\u0159\u00EDj',
                                    '9': 'z\u00E1\u0159',
                                    '1': 'led',
                                    '2': '\u00FAno',
                                    '3': 'b\u0159e',
                                    '4': 'dub'
                                },
                                'narrow': {
                                    '8': 's',
                                    '7': '\u010D',
                                    '6': '\u010D',
                                    '5': 'k',
                                    '12': 'p',
                                    '11': 'l',
                                    '10': '\u0159',
                                    '9': 'z',
                                    '1': 'l',
                                    '2': '\u00FA',
                                    '3': 'b',
                                    '4': 'd'
                                },
                                'wide': {
                                    '8': 'srpen',
                                    '7': '\u010Dervenec',
                                    '6': '\u010Derven',
                                    '5': 'kv\u011Bten',
                                    '12': 'prosinec',
                                    '11': 'listopad',
                                    '10': '\u0159\u00EDjen',
                                    '9': 'z\u00E1\u0159\u00ED',
                                    '1': 'leden',
                                    '2': '\u00FAnor',
                                    '3': 'b\u0159ezen',
                                    '4': 'duben'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': '\u00DA',
                                    'wed': 'S',
                                    'thu': '\u010C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'ned\u011Ble',
                                    'mon': 'pond\u011Bl\u00ED',
                                    'tue': '\u00FAter\u00FD',
                                    'wed': 'st\u0159eda',
                                    'thu': '\u010Dtvrtek',
                                    'fri': 'p\u00E1tek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': '\u00DA',
                                    'wed': 'S',
                                    'thu': '\u010C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'ned\u011Ble',
                                    'mon': 'pond\u011Bl\u00ED',
                                    'tue': '\u00FAter\u00FD',
                                    'wed': 'st\u0159eda',
                                    'thu': '\u010Dtvrtek',
                                    'fri': 'p\u00E1tek',
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
                                    '1': '1. \u010Dtvrtlet\u00ED',
                                    '2': '2. \u010Dtvrtlet\u00ED',
                                    '3': '3. \u010Dtvrtlet\u00ED',
                                    '4': '4. \u010Dtvrtlet\u00ED'
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
                                    '1': '1. \u010Dtvrtlet\u00ED',
                                    '2': '2. \u010Dtvrtlet\u00ED',
                                    '3': '3. \u010Dtvrtlet\u00ED',
                                    '4': '4. \u010Dtvrtlet\u00ED'
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
                                '0': 'p\u0159. n. l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n. l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'p\u0159. n. l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n. l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'p\u0159.n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
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
                                'yMMM': 'LLLL y',
                                'yMEd': 'E d. M. y',
                                'yMd': 'd. M. y',
                                'yM': 'M/y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMMEd': 'E d. MMMM',
                                'd': 'd.',
                                'GyMMMd': 'd. M. y G',
                                'GyMMMEd': 'E d. M. y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'GyMMMMEd': 'E d. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMMEd': 'E d. MMMM y',
                                'yMMMMd': 'd. MMMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E d. M. y',
                                'yMMMd': 'd. M. y',
                                'Hm': 'H:mm',
                                'Ed': 'E d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLLL y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'd. M.',
                                'MEd': 'E d. M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. M.',
                                'MMMEd': 'E d. M.',
                                'MMMMd': 'd. MMMM'
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
                                    'd': 'E d. M. \u2013 E d. M.',
                                    'M': 'E d. M. \u2013 E d. M.'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. M.',
                                    'M': 'd. M. \u2013 d. M.'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E d. M. \u2013 E d. M.',
                                    'M': 'E d. M. \u2013 E d. M.'
                                },
                                'Md': {
                                    'd': 'd. M. \u2013 d. M.',
                                    'M': 'd. M. \u2013 d. M.'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M/y \u2013 M/y',
                                    'y': 'M/y \u2013 M/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y \u2013 dd.MM.y',
                                    'M': 'dd.MM.y \u2013 dd.MM.y',
                                    'y': 'dd.MM.y \u2013 dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E dd.MM.y \u2013 E dd.MM.y',
                                    'M': 'E dd.MM.y \u2013 E dd.MM.y',
                                    'y': 'E dd.MM.y \u2013 E dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. M. y',
                                    'M': 'd. M. \u2013 d. M. y',
                                    'y': 'd. M. y \u2013 d. M. y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. M. \u2013 E d. M. y',
                                    'M': 'E d. M. \u2013 E d. M. y',
                                    'y': 'E d. M. y \u2013 E d. M. y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'Hmv': {
                                    'H': 'H:mm\u2013H:mm v',
                                    'm': 'H:mm\u2013H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm\u2013H:mm',
                                    'm': 'H:mm\u2013H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm\u2013h:mm a',
                                    'm': 'h:mm\u2013h:mm a'
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
