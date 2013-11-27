/**
 * @file {@link https://github.com/Xotic750/astrodate zh}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('zh', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1}\uFF08{0}\uFF09',
                    'regionFormat-type-standard': '{0}\u6807\u51C6\u65F6\u95F4',
                    'regionFormat-type-daylight': '{0}\u590F\u4EE4\u65F6\u95F4',
                    'regionFormat': '{0}\u65F6\u95F4',
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
                                    '8': '\u516B\u6708',
                                    '7': '\u4E03\u6708',
                                    '6': '\u516D\u6708',
                                    '5': '\u4E94\u6708',
                                    '12': '\u5341\u4E8C\u6708',
                                    '11': '\u5341\u4E00\u6708',
                                    '10': '\u5341\u6708',
                                    '9': '\u4E5D\u6708',
                                    '1': '\u4E00\u6708',
                                    '2': '\u4E8C\u6708',
                                    '3': '\u4E09\u6708',
                                    '4': '\u56DB\u6708'
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
                                    '8': '\u516B\u6708',
                                    '7': '\u4E03\u6708',
                                    '6': '\u516D\u6708',
                                    '5': '\u4E94\u6708',
                                    '12': '\u5341\u4E8C\u6708',
                                    '11': '\u5341\u4E00\u6708',
                                    '10': '\u5341\u6708',
                                    '9': '\u4E5D\u6708',
                                    '1': '\u4E00\u6708',
                                    '2': '\u4E8C\u6708',
                                    '3': '\u4E09\u6708',
                                    '4': '\u56DB\u6708'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'short': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'wide': {
                                    'sun': '\u661F\u671F\u65E5',
                                    'mon': '\u661F\u671F\u4E00',
                                    'tue': '\u661F\u671F\u4E8C',
                                    'wed': '\u661F\u671F\u4E09',
                                    'thu': '\u661F\u671F\u56DB',
                                    'fri': '\u661F\u671F\u4E94',
                                    'sat': '\u661F\u671F\u516D'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'short': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'wide': {
                                    'sun': '\u661F\u671F\u65E5',
                                    'mon': '\u661F\u671F\u4E00',
                                    'tue': '\u661F\u671F\u4E8C',
                                    'wed': '\u661F\u671F\u4E09',
                                    'thu': '\u661F\u671F\u56DB',
                                    'fri': '\u661F\u671F\u4E94',
                                    'sat': '\u661F\u671F\u516D'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1\u5B63\u5EA6',
                                    '2': '2\u5B63\u5EA6',
                                    '3': '3\u5B63\u5EA6',
                                    '4': '4\u5B63\u5EA6'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C\u4E00\u5B63\u5EA6',
                                    '2': '\u7B2C\u4E8C\u5B63\u5EA6',
                                    '3': '\u7B2C\u4E09\u5B63\u5EA6',
                                    '4': '\u7B2C\u56DB\u5B63\u5EA6'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1\u5B63\u5EA6',
                                    '2': '2\u5B63\u5EA6',
                                    '3': '3\u5B63\u5EA6',
                                    '4': '4\u5B63\u5EA6'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C\u4E00\u5B63\u5EA6',
                                    '2': '\u7B2C\u4E8C\u5B63\u5EA6',
                                    '3': '\u7B2C\u4E09\u5B63\u5EA6',
                                    '4': '\u7B2C\u56DB\u5B63\u5EA6'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'narrow': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'wide': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'narrow': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'wide': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u516C\u5143\u524D',
                                '0-alt-variant': 'BCE',
                                '1': '\u516C\u5143',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u516C\u5143\u524D',
                                '0-alt-variant': 'BCE',
                                '1': '\u516C\u5143',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u516C\u5143\u524D',
                                '0-alt-variant': 'BCE',
                                '1': '\u516C\u5143',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\u5E74M\u6708d\u65E5EEEE',
                            'long': 'y\u5E74M\u6708d\u65E5',
                            'medium': 'y\u5E74M\u6708d\u65E5',
                            'short': 'yy/M/d'
                        },
                        'timeFormats': {
                            'full': 'zzzzah:mm:ss',
                            'long': 'zah:mm:ss',
                            'medium': 'ah:mm:ss',
                            'short': 'ah:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'y\u5E74M\u6708d\u65E5',
                                'yMMM': 'y\u5E74M\u6708',
                                'yMM': 'y\u5E74M\u6708',
                                'yMEd': 'y/M/dE',
                                'EHm': 'EHH:mm',
                                'Ehm': 'Eah:mm',
                                'Ed': 'd\u65E5E',
                                'd': 'd\u65E5',
                                'GyMMMd': 'Gy\u5E74M\u6708d\u65E5',
                                'GyMMMEd': 'Gy\u5E74M\u6708d\u65E5E',
                                'h': 'ah\u65F6',
                                'H': 'H\u65F6',
                                'yQQQQ': 'y\u5E74\u7B2CQ\u5B63\u5EA6',
                                'yQQQ': 'y\u5E74\u7B2CQ\u5B63\u5EA6',
                                'yMMMM': 'y\u5E74M\u6708',
                                'yMMMEd': 'y\u5E74M\u6708d\u65E5E',
                                'Hms': 'HH:mm:ss',
                                'hms': 'ah:mm:ss',
                                'Hm': 'HH:mm',
                                'hm': 'ah:mm',
                                'Ehms': 'Eah:mm:ss',
                                'EHms': 'EHH:mm:ss',
                                'Gy': 'Gy\u5E74',
                                'GyMMM': 'Gy\u5E74M\u6708',
                                'M': 'M\u6708',
                                'Md': 'M/d',
                                'MEd': 'M/dE',
                                'MMdd': 'MM/dd',
                                'MMM': 'LLL',
                                'MMMd': 'M\u6708d\u65E5',
                                'MMMEd': 'M\u6708d\u65E5E',
                                'MMMMdd': 'M\u6708dd\u65E5',
                                'ms': 'mm:ss',
                                'y': 'y\u5E74',
                                'yM': 'y/M',
                                'yMd': 'y/M/d'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{1} {0}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{1}{0}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'M\u6708d\u65E5E\u81F3d\u65E5E',
                                    'M': 'M\u6708d\u65E5E\u81F3M\u6708d\u65E5E'
                                },
                                'MMMd': {
                                    'd': 'M\u6708d\u65E5\u81F3d\u65E5',
                                    'M': 'M\u6708d\u65E5\u81F3M\u6708d\u65E5'
                                },
                                'MMM': {
                                    'M': 'LLL\u81F3LLL'
                                },
                                'MEd': {
                                    'd': 'M/dE\u81F3M/dE',
                                    'M': 'M/dE\u81F3M/dE'
                                },
                                'Md': {
                                    'd': 'M/d \u2013 M/d',
                                    'M': 'M/d \u2013 M/d'
                                },
                                'M': {
                                    'M': 'M\u2013M\u6708'
                                },
                                'Hv': {
                                    'H': 'v HH\u2013HH'
                                },
                                'hv': {
                                    'a': 'vah\u65F6\u81F3ah\u65F6',
                                    'h': 'vah\u65F6\u81F3h\u65F6'
                                },
                                'y': {
                                    'y': 'y\u2013y\u5E74'
                                },
                                'yM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'yMd': {
                                    'd': 'y/M/d \u2013 y/M/d',
                                    'M': 'y/M/d \u2013 y/M/d',
                                    'y': 'y/M/d \u2013 y/M/d'
                                },
                                'yMEd': {
                                    'd': 'y/M/dE\u81F3y/M/dE',
                                    'M': 'y/M/dE\u81F3y/M/dE',
                                    'y': 'y/M/dE\u81F3y/M/dE'
                                },
                                'yMMM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'yMMMd': {
                                    'd': 'y\u5E74M\u6708d\u65E5\u81F3d\u65E5',
                                    'M': 'y\u5E74M\u6708d\u65E5\u81F3M\u6708d\u65E5',
                                    'y': 'y\u5E74M\u6708d\u65E5\u81F3y\u5E74M\u6708d\u65E5'
                                },
                                'yMMMEd': {
                                    'd': 'y\u5E74M\u6708d\u65E5E\u81F3d\u65E5E',
                                    'M': 'y\u5E74M\u6708d\u65E5E\u81F3M\u6708d\u65E5E',
                                    'y': 'y\u5E74M\u6708d\u65E5E\u81F3y\u5E74M\u6708d\u65E5E'
                                },
                                'yMMMM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'Hmv': {
                                    'H': 'v HH:mm\u2013HH:mm',
                                    'm': 'v HH:mm\u2013HH:mm'
                                },
                                'hmv': {
                                    'a': 'vah:mm\u81F3ah:mm',
                                    'h': 'vah:mm\u81F3h:mm',
                                    'm': 'vah:mm\u81F3h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'ah:mm\u81F3ah:mm',
                                    'h': 'ah:mm\u81F3h:mm',
                                    'm': 'ah:mm\u81F3h:mm'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'ah\u65F6\u81F3ah\u65F6',
                                    'h': 'ah\u65F6\u81F3h\u65F6'
                                },
                                'd': {
                                    'd': 'd\u2013d\u65E5'
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
