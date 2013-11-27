/**
 * @file {@link https://github.com/Xotic750/astrodate he}. Language file for AstroDate.
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
        AstroDate.lang('he', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u05E9\u05E2\u05D5\u05DF {0} (\u05D7\u05D5\u05E8\u05E3)',
                    'regionFormat-type-daylight': '\u05E9\u05E2\u05D5\u05DF {0} (\u05E7\u05D9\u05E5)',
                    'regionFormat': '\u05E9\u05E2\u05D5\u05DF {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u05D0\u05D5\u05D2',
                                    '7': '\u05D9\u05D5\u05DC',
                                    '6': '\u05D9\u05D5\u05E0',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE',
                                    '11': '\u05E0\u05D5\u05D1',
                                    '10': '\u05D0\u05D5\u05E7',
                                    '9': '\u05E1\u05E4\u05D8',
                                    '1': '\u05D9\u05E0\u05D5',
                                    '2': '\u05E4\u05D1\u05E8',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8'
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
                                    '8': '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
                                    '7': '\u05D9\u05D5\u05DC\u05D9',
                                    '6': '\u05D9\u05D5\u05E0\u05D9',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE\u05D1\u05E8',
                                    '11': '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
                                    '10': '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
                                    '9': '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
                                    '1': '\u05D9\u05E0\u05D5\u05D0\u05E8',
                                    '2': '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8\u05D9\u05DC'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u05D0\u05D5\u05D2\u05F3',
                                    '7': '\u05D9\u05D5\u05DC\u05F3',
                                    '6': '\u05D9\u05D5\u05E0\u05F3',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE\u05F3',
                                    '11': '\u05E0\u05D5\u05D1\u05F3',
                                    '10': '\u05D0\u05D5\u05E7\u05F3',
                                    '9': '\u05E1\u05E4\u05D8\u05F3',
                                    '1': '\u05D9\u05E0\u05D5\u05F3',
                                    '2': '\u05E4\u05D1\u05E8\u05F3',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8\u05F3'
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
                                    '8': '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
                                    '7': '\u05D9\u05D5\u05DC\u05D9',
                                    '6': '\u05D9\u05D5\u05E0\u05D9',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE\u05D1\u05E8',
                                    '11': '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
                                    '10': '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
                                    '9': '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
                                    '1': '\u05D9\u05E0\u05D5\u05D0\u05E8',
                                    '2': '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8\u05D9\u05DC'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u05D9\u05D5\u05DD \u05D0\u05F3',
                                    'mon': '\u05D9\u05D5\u05DD \u05D1\u05F3',
                                    'tue': '\u05D9\u05D5\u05DD \u05D2\u05F3',
                                    'wed': '\u05D9\u05D5\u05DD \u05D3\u05F3',
                                    'thu': '\u05D9\u05D5\u05DD \u05D4\u05F3',
                                    'fri': '\u05D9\u05D5\u05DD \u05D5\u05F3',
                                    'sat': '\u05E9\u05D1\u05EA'
                                },
                                'narrow': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'short': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'wide': {
                                    'sun': '\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF',
                                    'mon': '\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9',
                                    'tue': '\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9',
                                    'wed': '\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9',
                                    'thu': '\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9',
                                    'fri': '\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9',
                                    'sat': '\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u05D9\u05D5\u05DD \u05D0\u05F3',
                                    'mon': '\u05D9\u05D5\u05DD \u05D1\u05F3',
                                    'tue': '\u05D9\u05D5\u05DD \u05D2\u05F3',
                                    'wed': '\u05D9\u05D5\u05DD \u05D3\u05F3',
                                    'thu': '\u05D9\u05D5\u05DD \u05D4\u05F3',
                                    'fri': '\u05D9\u05D5\u05DD \u05D5\u05F3',
                                    'sat': '\u05E9\u05D1\u05EA'
                                },
                                'narrow': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'short': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'wide': {
                                    'sun': '\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF',
                                    'mon': '\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9',
                                    'tue': '\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9',
                                    'wed': '\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9',
                                    'thu': '\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9',
                                    'fri': '\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9',
                                    'sat': '\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                },
                                'narrow': {
                                    '1': '\u05E81',
                                    '2': '\u05E82',
                                    '3': '\u05E83',
                                    '4': '\u05E84'
                                },
                                'wide': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'narrow': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'wide': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'narrow': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'wide': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4',
                                '0-alt-variant': 'BCE',
                                '1': '\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1',
                                '0-alt-variant': 'BCE',
                                '1': '\u05DC\u05E1\u05D4\u05F4\u05E0',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1',
                                '0-alt-variant': 'BCE',
                                '1': '\u05DC\u05E1\u05D4\u05F4\u05E0',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \u05D1MMMM y',
                            'long': 'd \u05D1MMMM y',
                            'medium': 'd \u05D1MMM y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \u05D1\u05E9\u05E2\u05D4 {0}',
                            'long': '{1} \u05D1\u05E9\u05E2\u05D4 {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d \u05D1MMM y',
                                'EHms': 'E H:mm:ss',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E H:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E \u05D4-d',
                                'd': 'd',
                                'GyMMMd': 'd \u05D1MMM y G',
                                'GyMMMEd': 'E, d \u05D1MMM y G',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': '\u200Fh a',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd \u05D1MMM',
                                'MMMEd': 'E, d \u05D1MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E, d/M/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd \u05D1MMM y'
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
                                    'd': 'EEEE d MMM \u2013 EEEE d MMM',
                                    'M': 'EEEE d MMM \u2013 EEEE d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM\u2013d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'EEEE d.M\u2013EEEE d.M',
                                    'M': 'EEEE d.M \u2013 EEEE d.M'
                                },
                                'Md': {
                                    'd': 'd.M\u2013d.M',
                                    'M': 'd.M\u2013d.M'
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
                                'intervalFormatFallback': '{0} \u2013 {1}',
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M.y\u2013M.y',
                                    'y': 'M.y\u200F-M.y'
                                },
                                'yMd': {
                                    'd': 'dd.M.y \u2013 dd.M.y',
                                    'M': 'd.M.y \u2013 d.M.y',
                                    'y': 'd.M.y \u2013 d.M.y'
                                },
                                'yMEd': {
                                    'd': 'EEEE d.M.y \u2013 EEEE d.M.y',
                                    'M': 'EEEE d.M.y \u2013 EEEE d.M.y',
                                    'y': 'EEEE d.M.y \u2013 EEEE d.M.y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE d MMM \u2013 EEEE d MMM y',
                                    'M': 'EEEE d MMM \u2013 EEEE d MMM y',
                                    'y': 'EEEE d MMM y \u2013 EEEE d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y\u2013MMMM y'
                                },
                                'MMMM': {
                                    'M': 'LLLL\u2013LLLL'
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
                                    'd': 'd\u2013d'
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
