/**
 * @file {@link https://github.com/Xotic750/astrodate ja}. Language file for AstroDate.
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
        AstroDate.lang('ja', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1}\uFF08{0}\uFF09',
                    'regionFormat-type-standard': '{0}\u6A19\u6E96\u6642',
                    'regionFormat-type-daylight': '{0}\u590F\u6642\u9593',
                    'regionFormat': '{0}\u6642\u9593',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
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
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
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
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'short': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'wide': {
                                    'sun': '\u65E5\u66DC\u65E5',
                                    'mon': '\u6708\u66DC\u65E5',
                                    'tue': '\u706B\u66DC\u65E5',
                                    'wed': '\u6C34\u66DC\u65E5',
                                    'thu': '\u6728\u66DC\u65E5',
                                    'fri': '\u91D1\u66DC\u65E5',
                                    'sat': '\u571F\u66DC\u65E5'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'short': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'wide': {
                                    'sun': '\u65E5\u66DC\u65E5',
                                    'mon': '\u6708\u66DC\u65E5',
                                    'tue': '\u706B\u66DC\u65E5',
                                    'wed': '\u6C34\u66DC\u65E5',
                                    'thu': '\u6728\u66DC\u65E5',
                                    'fri': '\u91D1\u66DC\u65E5',
                                    'sat': '\u571F\u66DC\u65E5'
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
                                    '1': '\u7B2C1\u56DB\u534A\u671F',
                                    '2': '\u7B2C2\u56DB\u534A\u671F',
                                    '3': '\u7B2C3\u56DB\u534A\u671F',
                                    '4': '\u7B2C4\u56DB\u534A\u671F'
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
                                    '1': '\u7B2C1\u56DB\u534A\u671F',
                                    '2': '\u7B2C2\u56DB\u534A\u671F',
                                    '3': '\u7B2C3\u56DB\u534A\u671F',
                                    '4': '\u7B2C4\u56DB\u534A\u671F'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'narrow': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'wide': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'narrow': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'wide': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u7D00\u5143\u524D',
                                '0-alt-variant': '\u897F\u66A6\u7D00\u5143\u524D',
                                '1': '\u897F\u66A6',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u7D00\u5143\u524D',
                                '0-alt-variant': '\u897F\u66A6\u7D00\u5143\u524D',
                                '1': '\u897F\u66A6',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BC',
                                '0-alt-variant': 'BCE',
                                '1': 'AD',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\u5E74M\u6708d\u65E5EEEE',
                            'long': 'y\u5E74M\u6708d\u65E5',
                            'medium': 'y/MM/dd',
                            'short': 'y/MM/dd'
                        },
                        'timeFormats': {
                            'full': 'H\u6642mm\u5206ss\u79D2 zzzz',
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
                                'yMEEEEd': 'y/M/dEEEE',
                                'yMEd': 'y/M/d(E)',
                                'yMd': 'y/M/d',
                                'yM': 'y/M',
                                'y': 'y\u5E74',
                                'ms': 'mm:ss',
                                'MMMEEEEd': 'M\u6708d\u65E5EEEE',
                                'd': 'd\u65E5',
                                'GyMMM': 'Gy\u5E74M\u6708',
                                'GyMMMd': 'Gy\u5E74M\u6708d\u65E5',
                                'GyMMMEd': 'Gy\u5E74M\u6708d\u65E5(E)',
                                'GyMMMEEEEd': 'Gy\u5E74M\u6708d\u65E5EEEE',
                                'h': 'aK\u6642',
                                'H': 'H\u6642',
                                'hm': 'aK:mm',
                                'yQQQQ': 'yQQQQ',
                                'yQQQ': 'y/QQQ',
                                'yMMMEEEEd': 'y\u5E74M\u6708d\u65E5EEEE',
                                'yMMMEd': 'y\u5E74M\u6708d\u65E5(E)',
                                'yMMMd': 'y\u5E74M\u6708d\u65E5',
                                'yMMM': 'y\u5E74M\u6708',
                                'yMM': 'y/MM',
                                'Hm': 'H:mm',
                                'Ed': 'd\u65E5(E)',
                                'EEEEd': 'd\u65E5EEEE',
                                'Ehm': 'a K \u6642 mm \u5206 (E)',
                                'EHm': 'HH \u6642 mm \u5206 (E)',
                                'Ehms': 'a K \u6642 mm \u5206 ss \u79D2 (E)',
                                'EHms': 'HH \u6642 mm \u5206 ss \u79D2 (E)',
                                'Gy': 'Gy\u5E74',
                                'hms': 'aK:mm:ss',
                                'Hms': 'H:mm:ss',
                                'M': 'M\u6708',
                                'Md': 'M/d',
                                'MEd': 'M/d(E)',
                                'MEEEEd': 'M/dEEEE',
                                'MMM': 'M\u6708',
                                'MMMd': 'M\u6708d\u65E5',
                                'MMMEd': 'M\u6708d\u65E5(E)'
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
                                    'd': 'M\u6708d\u65E5(E)\uFF5Ed\u65E5(E)',
                                    'M': 'M\u6708d\u65E5(E)\uFF5EM\u6708d\u65E5(E)'
                                },
                                'MMMd': {
                                    'd': 'M\u6708d\u65E5\uFF5Ed\u65E5',
                                    'M': 'M\u6708d\u65E5\uFF5EM\u6708d\u65E5'
                                },
                                'MMM': {
                                    'M': 'M\u6708\uFF5EM\u6708'
                                },
                                'MEd': {
                                    'd': 'MM/dd(E)\uFF5EMM/dd(E)',
                                    'M': 'MM/dd(E)\uFF5EMM/dd(E)'
                                },
                                'Md': {
                                    'd': 'MM/dd\uFF5EMM/dd',
                                    'M': 'MM/dd\uFF5EMM/dd'
                                },
                                'M': {
                                    'M': 'M\u6708\uFF5EM\u6708'
                                },
                                'Hv': {
                                    'H': 'H\u6642\uFF5EH\u6642(v)'
                                },
                                'hv': {
                                    'a': 'aK\u6642\uFF5EaK\u6642(v)',
                                    'h': 'aK\u6642\uFF5EK\u6642(v)'
                                },
                                'intervalFormatFallback': '{0}\uFF5E{1}',
                                'y': {
                                    'y': 'y\u5E74\uFF5Ey\u5E74'
                                },
                                'yM': {
                                    'M': 'y/MM\uFF5Ey/MM',
                                    'y': 'y/MM\uFF5Ey/MM'
                                },
                                'yMd': {
                                    'd': 'y/MM/dd\uFF5Ey/MM/dd',
                                    'M': 'y/MM/dd\uFF5Ey/MM/dd',
                                    'y': 'y/MM/dd\uFF5Ey/MM/dd'
                                },
                                'yMEd': {
                                    'd': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)',
                                    'M': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)',
                                    'y': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)'
                                },
                                'yMMM': {
                                    'M': 'y\u5E74M\u6708\uFF5EM\u6708',
                                    'y': 'y\u5E74M\u6708\uFF5Ey\u5E74M\u6708'
                                },
                                'yMMMd': {
                                    'd': 'y\u5E74M\u6708d\u65E5\uFF5Ed\u65E5',
                                    'M': 'y\u5E74M\u6708d\u65E5\uFF5EM\u6708d\u65E5',
                                    'y': 'y\u5E74M\u6708d\u65E5\uFF5Ey\u5E74M\u6708d\u65E5'
                                },
                                'yMMMEd': {
                                    'd': 'y\u5E74M\u6708d\u65E5(E)\uFF5Ed\u65E5(E)',
                                    'M': 'y\u5E74M\u6708d\u65E5(E)\uFF5EM\u6708d\u65E5(E)',
                                    'y': 'y\u5E74M\u6708d\u65E5(E)\uFF5Ey\u5E74M\u6708d\u65E5(E)'
                                },
                                'yMMMM': {
                                    'M': 'y\u5E74M\u6708\uFF5EM\u6708',
                                    'y': 'y\u5E74M\u6708\uFF5Ey\u5E74M\u6708'
                                },
                                'MMMM': {
                                    'M': 'M\u6708\uFF5EM\u6708'
                                },
                                'Hmv': {
                                    'H': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206(v)',
                                    'm': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206(v)'
                                },
                                'hmv': {
                                    'a': 'aK\u6642mm\u5206\uFF5EaK\u6642mm\u5206(v)',
                                    'h': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206(v)',
                                    'm': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206(v)'
                                },
                                'Hm': {
                                    'H': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206',
                                    'm': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206'
                                },
                                'hm': {
                                    'a': 'aK\u6642mm\u5206\uFF5EaK\u6642mm\u5206',
                                    'h': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206',
                                    'm': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206'
                                },
                                'H': {
                                    'H': 'H\u6642\uFF5EH\u6642'
                                },
                                'h': {
                                    'a': 'aK\u6642\uFF5EaK\u6642',
                                    'h': 'aK\u6642\uFF5EK\u6642'
                                },
                                'd': {
                                    'd': 'd\u65E5\uFF5Ed\u65E5'
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
