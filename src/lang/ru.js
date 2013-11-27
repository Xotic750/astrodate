/**
 * @file {@link https://github.com/Xotic750/astrodate ru}. Language file for AstroDate.
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
        AstroDate.lang('ru', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '{0} \u0432\u0440\u0435\u043C\u044F',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0430\u0432\u0433.',
                                    '7': '\u0438\u044E\u043B\u044F',
                                    '6': '\u0438\u044E\u043D\u044F',
                                    '5': '\u043C\u0430\u044F',
                                    '12': '\u0434\u0435\u043A.',
                                    '11': '\u043D\u043E\u044F\u0431.',
                                    '10': '\u043E\u043A\u0442.',
                                    '9': '\u0441\u0435\u043D\u0442.',
                                    '1': '\u044F\u043D\u0432.',
                                    '2': '\u0444\u0435\u0432\u0440.',
                                    '3': '\u043C\u0430\u0440\u0442\u0430',
                                    '4': '\u0430\u043F\u0440.'
                                },
                                'narrow': {
                                    '8': '\u0410',
                                    '7': '\u0418',
                                    '6': '\u0418',
                                    '5': '\u041C',
                                    '12': '\u0414',
                                    '11': '\u041D',
                                    '10': '\u041E',
                                    '9': '\u0421',
                                    '1': '\u042F',
                                    '2': '\u0424',
                                    '3': '\u041C',
                                    '4': '\u0410'
                                },
                                'wide': {
                                    '8': '\u0430\u0432\u0433\u0443\u0441\u0442\u0430',
                                    '7': '\u0438\u044E\u043B\u044F',
                                    '6': '\u0438\u044E\u043D\u044F',
                                    '5': '\u043C\u0430\u044F',
                                    '12': '\u0434\u0435\u043A\u0430\u0431\u0440\u044F',
                                    '11': '\u043D\u043E\u044F\u0431\u0440\u044F',
                                    '10': '\u043E\u043A\u0442\u044F\u0431\u0440\u044F',
                                    '9': '\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F',
                                    '1': '\u044F\u043D\u0432\u0430\u0440\u044F',
                                    '2': '\u0444\u0435\u0432\u0440\u0430\u043B\u044F',
                                    '3': '\u043C\u0430\u0440\u0442\u0430',
                                    '4': '\u0430\u043F\u0440\u0435\u043B\u044F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0410\u0432\u0433.',
                                    '7': '\u0418\u044E\u043B\u044C',
                                    '6': '\u0418\u044E\u043D\u044C',
                                    '5': '\u041C\u0430\u0439',
                                    '12': '\u0414\u0435\u043A.',
                                    '11': '\u041D\u043E\u044F\u0431.',
                                    '10': '\u041E\u043A\u0442.',
                                    '9': '\u0421\u0435\u043D\u0442.',
                                    '1': '\u042F\u043D\u0432.',
                                    '2': '\u0424\u0435\u0432\u0440.',
                                    '3': '\u041C\u0430\u0440\u0442',
                                    '4': '\u0410\u043F\u0440.'
                                },
                                'narrow': {
                                    '8': '\u0410',
                                    '7': '\u0418',
                                    '6': '\u0418',
                                    '5': '\u041C',
                                    '12': '\u0414',
                                    '11': '\u041D',
                                    '10': '\u041E',
                                    '9': '\u0421',
                                    '1': '\u042F',
                                    '2': '\u0424',
                                    '3': '\u041C',
                                    '4': '\u0410'
                                },
                                'wide': {
                                    '8': '\u0410\u0432\u0433\u0443\u0441\u0442',
                                    '7': '\u0418\u044E\u043B\u044C',
                                    '6': '\u0418\u044E\u043D\u044C',
                                    '5': '\u041C\u0430\u0439',
                                    '12': '\u0414\u0435\u043A\u0430\u0431\u0440\u044C',
                                    '11': '\u041D\u043E\u044F\u0431\u0440\u044C',
                                    '10': '\u041E\u043A\u0442\u044F\u0431\u0440\u044C',
                                    '9': '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C',
                                    '1': '\u042F\u043D\u0432\u0430\u0440\u044C',
                                    '2': '\u0424\u0435\u0432\u0440\u0430\u043B\u044C',
                                    '3': '\u041C\u0430\u0440\u0442',
                                    '4': '\u0410\u043F\u0440\u0435\u043B\u044C'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'narrow': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'short': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'wide': {
                                    'sun': '\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
                                    'tue': '\u0432\u0442\u043E\u0440\u043D\u0438\u043A',
                                    'wed': '\u0441\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0435\u0440\u0433',
                                    'fri': '\u043F\u044F\u0442\u043D\u0438\u0446\u0430',
                                    'sat': '\u0441\u0443\u0431\u0431\u043E\u0442\u0430'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u0412\u0441',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'narrow': {
                                    'sun': '\u0412',
                                    'mon': '\u041F',
                                    'tue': '\u0412',
                                    'wed': '\u0421',
                                    'thu': '\u0427',
                                    'fri': '\u041F',
                                    'sat': '\u0421'
                                },
                                'short': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'wide': {
                                    'sun': '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
                                    'mon': '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
                                    'tue': '\u0412\u0442\u043E\u0440\u043D\u0438\u043A',
                                    'wed': '\u0421\u0440\u0435\u0434\u0430',
                                    'thu': '\u0427\u0435\u0442\u0432\u0435\u0440\u0433',
                                    'fri': '\u041F\u044F\u0442\u043D\u0438\u0446\u0430',
                                    'sat': '\u0421\u0443\u0431\u0431\u043E\u0442\u0430'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                },
                                'narrow': {
                                    'am': '\u0434\u043F',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                },
                                'narrow': {
                                    'am': '\u0434\u043F',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0434\u043E \u043D.\u044D.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u044D.',
                                '1-alt-variant': '\u043D.\u044D.'
                            },
                            'eraAbbr': {
                                '0': '\u0434\u043E \u043D. \u044D.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D. \u044D.',
                                '1-alt-variant': '\u043D.\u044D.'
                            },
                            'eraNarrow': {
                                '0': '\u0434\u043E \u043D.\u044D.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u044D.',
                                '1-alt-variant': '\u043D.\u044D.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'\u0433\'.',
                            'long': 'd MMMM y \'\u0433\'.',
                            'medium': 'dd MMM y \'\u0433\'.',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMMM': 'LLL y',
                                'yMM': 'MM.y',
                                'yMEd': 'ccc, d.MM.y \'\u0433\'.',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM.y',
                                'Ed': 'ccc, d',
                                'E': 'ccc',
                                'd': 'd',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y \'\u0433\'. G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'yQQQQ': 'QQQQ y \'\u0433\'.',
                                'yQQQ': 'QQQ y \'\u0433\'.',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y \'\u0433\'.',
                                'hms': 'h:mm:ss a',
                                'Hm': 'H:mm',
                                'hm': 'h:mm a',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMdd': 'dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'ccc, d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yLLLL': 'LLLL y'
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
                                    'd': 'ccc, d - E, d MMM',
                                    'M': 'ccc, d MMM - ccc, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-MMM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM - E, dd.MM',
                                    'M': 'E, dd.MM - E, dd.MM'
                                },
                                'Md': {
                                    'd': 'dd.MM - dd.MM',
                                    'M': 'dd.MM - dd.MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'H-H v'
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
                                    'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y \'\u0433\'.',
                                    'y': 'LLL y - LLL y \'\u0433\'.'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y \'\u0433\'.',
                                    'M': 'd MMM - d MMM y \'\u0433\'.',
                                    'y': 'd MMM y - d MMM y \'\u0433\'.'
                                },
                                'yMMMEd': {
                                    'd': 'ccc, d - ccc, d MMM y \'\u0433\'.',
                                    'M': 'ccc, d MMM - ccc, d MMM y \'\u0433\'.',
                                    'y': 'ccc, d MMM y - ccc, d MMM y \'\u0433\'.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y \'\u0433\'.',
                                    'y': 'LLLL y - LLLL y \'\u0433\'.'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'Hmv': {
                                    'H': 'H:mm-H:mm v',
                                    'm': 'H:mm-H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm-H:mm',
                                    'm': 'H:mm-H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd-d'
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
