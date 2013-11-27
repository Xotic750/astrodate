/**
 * @file {@link https://github.com/Xotic750/astrodate uk}. Language file for AstroDate.
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
        AstroDate.lang('uk', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u0427\u0430\u0441: {0}, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                    'regionFormat-type-daylight': '\u0427\u0430\u0441: {0}, \u043B\u0456\u0442\u043D\u0456\u0439',
                    'regionFormat': '\u0427\u0430\u0441: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0441\u0435\u0440\u043F.',
                                    '7': '\u043B\u0438\u043F.',
                                    '6': '\u0447\u0435\u0440\u0432.',
                                    '5': '\u0442\u0440\u0430\u0432.',
                                    '12': '\u0433\u0440\u0443\u0434.',
                                    '11': '\u043B\u0438\u0441\u0442.',
                                    '10': '\u0436\u043E\u0432\u0442.',
                                    '9': '\u0432\u0435\u0440.',
                                    '1': '\u0441\u0456\u0447.',
                                    '2': '\u043B\u044E\u0442.',
                                    '3': '\u0431\u0435\u0440.',
                                    '4': '\u043A\u0432\u0456\u0442.'
                                },
                                'narrow': {
                                    '8': '\u0421',
                                    '7': '\u041B',
                                    '6': '\u0427',
                                    '5': '\u0422',
                                    '12': '\u0413',
                                    '11': '\u041B',
                                    '10': '\u0416',
                                    '9': '\u0412',
                                    '1': '\u0421',
                                    '2': '\u041B',
                                    '3': '\u0411',
                                    '4': '\u041A'
                                },
                                'wide': {
                                    '8': '\u0441\u0435\u0440\u043F\u043D\u044F',
                                    '7': '\u043B\u0438\u043F\u043D\u044F',
                                    '6': '\u0447\u0435\u0440\u0432\u043D\u044F',
                                    '5': '\u0442\u0440\u0430\u0432\u043D\u044F',
                                    '12': '\u0433\u0440\u0443\u0434\u043D\u044F',
                                    '11': '\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430',
                                    '10': '\u0436\u043E\u0432\u0442\u043D\u044F',
                                    '9': '\u0432\u0435\u0440\u0435\u0441\u043D\u044F',
                                    '1': '\u0441\u0456\u0447\u043D\u044F',
                                    '2': '\u043B\u044E\u0442\u043E\u0433\u043E',
                                    '3': '\u0431\u0435\u0440\u0435\u0437\u043D\u044F',
                                    '4': '\u043A\u0432\u0456\u0442\u043D\u044F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0421\u0435\u0440',
                                    '7': '\u041B\u0438\u043F',
                                    '6': '\u0427\u0435\u0440',
                                    '5': '\u0422\u0440\u0430',
                                    '12': '\u0413\u0440\u0443',
                                    '11': '\u041B\u0438\u0441',
                                    '10': '\u0416\u043E\u0432',
                                    '9': '\u0412\u0435\u0440',
                                    '1': '\u0421\u0456\u0447',
                                    '2': '\u041B\u044E\u0442',
                                    '3': '\u0411\u0435\u0440',
                                    '4': '\u041A\u0432\u0456'
                                },
                                'narrow': {
                                    '8': '\u0421',
                                    '7': '\u041B',
                                    '6': '\u0427',
                                    '5': '\u0422',
                                    '12': '\u0413',
                                    '11': '\u041B',
                                    '10': '\u0416',
                                    '9': '\u0412',
                                    '1': '\u0421',
                                    '2': '\u041B',
                                    '3': '\u0411',
                                    '4': '\u041A'
                                },
                                'wide': {
                                    '8': '\u0421\u0435\u0440\u043F\u0435\u043D\u044C',
                                    '7': '\u041B\u0438\u043F\u0435\u043D\u044C',
                                    '6': '\u0427\u0435\u0440\u0432\u0435\u043D\u044C',
                                    '5': '\u0422\u0440\u0430\u0432\u0435\u043D\u044C',
                                    '12': '\u0413\u0440\u0443\u0434\u0435\u043D\u044C',
                                    '11': '\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434',
                                    '10': '\u0416\u043E\u0432\u0442\u0435\u043D\u044C',
                                    '9': '\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C',
                                    '1': '\u0421\u0456\u0447\u0435\u043D\u044C',
                                    '2': '\u041B\u044E\u0442\u0438\u0439',
                                    '3': '\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C',
                                    '4': '\u041A\u0432\u0456\u0442\u0435\u043D\u044C'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'narrow': {
                                    'sun': '\u041D',
                                    'mon': '\u041F',
                                    'tue': '\u0412',
                                    'wed': '\u0421',
                                    'thu': '\u0427',
                                    'fri': '\u041F',
                                    'sat': '\u0421'
                                },
                                'short': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'wide': {
                                    'sun': '\u043D\u0435\u0434\u0456\u043B\u044F',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
                                    'tue': '\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
                                    'wed': '\u0441\u0435\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0435\u0440',
                                    'fri': '\u043F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F',
                                    'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'narrow': {
                                    'sun': '\u041D',
                                    'mon': '\u041F',
                                    'tue': '\u0412',
                                    'wed': '\u0421',
                                    'thu': '\u0427',
                                    'fri': '\u041F',
                                    'sat': '\u0421'
                                },
                                'short': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'wide': {
                                    'sun': '\u041D\u0435\u0434\u0456\u043B\u044F',
                                    'mon': '\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
                                    'tue': '\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
                                    'wed': '\u0421\u0435\u0440\u0435\u0434\u0430',
                                    'thu': '\u0427\u0435\u0442\u0432\u0435\u0440',
                                    'fri': '\u041F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F',
                                    'sat': '\u0421\u0443\u0431\u043E\u0442\u0430'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'I \u043A\u0432.',
                                    '2': 'II \u043A\u0432.',
                                    '3': 'III \u043A\u0432.',
                                    '4': 'IV \u043A\u0432.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '2': 'II \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '3': 'III \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '4': 'IV \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1-\u0439 \u043A\u0432.',
                                    '2': '2-\u0439 \u043A\u0432.',
                                    '3': '3-\u0439 \u043A\u0432.',
                                    '4': '4-\u0439 \u043A\u0432.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '2': '2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '3': '3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '4': '4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'narrow': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'narrow': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u0434\u043E \u043D.\u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u0435.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u0434\u043E \u043D.\u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u0435.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'\u0440\'.',
                            'long': 'd MMMM y \'\u0440\'.',
                            'medium': 'd MMM y',
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
                                'yMMM': 'LLL y',
                                'yMEd': 'E, dd.MM.y',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM.y',
                                'y': 'y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E, d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'yQQQQ': 'QQQQ y \'\u0440\'.',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'HHmmss': 'HH:mm:ss',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss'
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
                                    'd': 'E, d \u2013 E, d MMM',
                                    'M': 'E, d MMM \u2013 E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM \u2013 E, dd.MM',
                                    'M': 'E, dd.MM \u2013 E, dd.MM'
                                },
                                'Md': {
                                    'd': 'dd.MM \u2013 dd.MM',
                                    'M': 'dd.MM \u2013 dd.MM'
                                },
                                'M': {
                                    'M': 'M\u2013M'
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
                                    'M': 'MM.y \u2013 MM.y',
                                    'y': 'MM.y \u2013 MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y \u2013 dd.MM.y',
                                    'M': 'dd.MM.y \u2013 dd.MM.y',
                                    'y': 'dd.MM.y \u2013 dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y \u2013 E, dd.MM.y',
                                    'M': 'E, dd.MM.y \u2013 E, dd.MM.y',
                                    'y': 'E, dd.MM.y \u2013 E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL\u2013LLL y',
                                    'y': 'LLL y \u2013 LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d \u2013 E, d MMM y',
                                    'M': 'E, d MMM \u2013 E, d MMM y',
                                    'y': 'E, d MMM y \u2013 E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL \u2013 LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
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
                                    'd': 'd\u2013d'
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
