/**
 * @file {@link https://github.com/Xotic750/astrodate sr}. Language file for AstroDate.
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
        AstroDate.lang('sr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0}, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                    'regionFormat-type-daylight': '{0}, \u043B\u0435\u0442\u045A\u0435 \u0432\u0440\u0435\u043C\u0435',
                    'regionFormat': '\u0412\u0440\u0435\u043C\u0435 \u0443 \u0437\u0435\u043C\u0459\u0438: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HHmm;-HHmm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0430\u0432\u0433',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446',
                                    '11': '\u043D\u043E\u0432',
                                    '10': '\u043E\u043A\u0442',
                                    '9': '\u0441\u0435\u043F',
                                    '1': '\u0458\u0430\u043D',
                                    '2': '\u0444\u0435\u0431',
                                    '3': '\u043C\u0430\u0440',
                                    '4': '\u0430\u043F\u0440'
                                },
                                'narrow': {
                                    '8': '\u0430',
                                    '7': '\u0458',
                                    '6': '\u0458',
                                    '5': '\u043C',
                                    '12': '\u0434',
                                    '11': '\u043D',
                                    '10': '\u043E',
                                    '9': '\u0441',
                                    '1': '\u0458',
                                    '2': '\u0444',
                                    '3': '\u043C',
                                    '4': '\u0430'
                                },
                                'wide': {
                                    '8': '\u0430\u0432\u0433\u0443\u0441\u0442',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440',
                                    '11': '\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
                                    '10': '\u043E\u043A\u0442\u043E\u0431\u0430\u0440',
                                    '9': '\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
                                    '1': '\u0458\u0430\u043D\u0443\u0430\u0440',
                                    '2': '\u0444\u0435\u0431\u0440\u0443\u0430\u0440',
                                    '3': '\u043C\u0430\u0440\u0442',
                                    '4': '\u0430\u043F\u0440\u0438\u043B'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0430\u0432\u0433',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446',
                                    '11': '\u043D\u043E\u0432',
                                    '10': '\u043E\u043A\u0442',
                                    '9': '\u0441\u0435\u043F',
                                    '1': '\u0458\u0430\u043D',
                                    '2': '\u0444\u0435\u0431',
                                    '3': '\u043C\u0430\u0440',
                                    '4': '\u0430\u043F\u0440'
                                },
                                'narrow': {
                                    '8': '\u0430',
                                    '7': '\u0458',
                                    '6': '\u0458',
                                    '5': '\u043C',
                                    '12': '\u0434',
                                    '11': '\u043D',
                                    '10': '\u043E',
                                    '9': '\u0441',
                                    '1': '\u0458',
                                    '2': '\u0444',
                                    '3': '\u043C',
                                    '4': '\u0430'
                                },
                                'wide': {
                                    '8': '\u0430\u0432\u0433\u0443\u0441\u0442',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440',
                                    '11': '\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
                                    '10': '\u043E\u043A\u0442\u043E\u0431\u0430\u0440',
                                    '9': '\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
                                    '1': '\u0458\u0430\u043D\u0443\u0430\u0440',
                                    '2': '\u0444\u0435\u0431\u0440\u0443\u0430\u0440',
                                    '3': '\u043C\u0430\u0440\u0442',
                                    '4': '\u0430\u043F\u0440\u0438\u043B'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u043D\u0435\u0434',
                                    'mon': '\u043F\u043E\u043D',
                                    'tue': '\u0443\u0442\u043E',
                                    'wed': '\u0441\u0440\u0435',
                                    'thu': '\u0447\u0435\u0442',
                                    'fri': '\u043F\u0435\u0442',
                                    'sat': '\u0441\u0443\u0431'
                                },
                                'narrow': {
                                    'sun': '\u043D',
                                    'mon': '\u043F',
                                    'tue': '\u0443',
                                    'wed': '\u0441',
                                    'thu': '\u0447',
                                    'fri': '\u043F',
                                    'sat': '\u0441'
                                },
                                'short': {
                                    'sun': '\u043D\u0435\u0434',
                                    'mon': '\u043F\u043E\u043D',
                                    'tue': '\u0443\u0442\u043E',
                                    'wed': '\u0441\u0440\u0435',
                                    'thu': '\u0447\u0435\u0442',
                                    'fri': '\u043F\u0435\u0442',
                                    'sat': '\u0441\u0443\u0431'
                                },
                                'wide': {
                                    'sun': '\u043D\u0435\u0434\u0435\u0459\u0430',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
                                    'tue': '\u0443\u0442\u043E\u0440\u0430\u043A',
                                    'wed': '\u0441\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
                                    'fri': '\u043F\u0435\u0442\u0430\u043A',
                                    'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u043D\u0435\u0434',
                                    'mon': '\u043F\u043E\u043D',
                                    'tue': '\u0443\u0442\u043E',
                                    'wed': '\u0441\u0440\u0435',
                                    'thu': '\u0447\u0435\u0442',
                                    'fri': '\u043F\u0435\u0442',
                                    'sat': '\u0441\u0443\u0431'
                                },
                                'narrow': {
                                    'sun': '\u043D',
                                    'mon': '\u043F',
                                    'tue': '\u0443',
                                    'wed': '\u0441',
                                    'thu': '\u0447',
                                    'fri': '\u043F',
                                    'sat': '\u0441'
                                },
                                'short': {
                                    'sun': '\u043D\u0435',
                                    'mon': '\u043F\u043E',
                                    'tue': '\u0443\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0435',
                                    'fri': '\u043F\u0435',
                                    'sat': '\u0441\u0443'
                                },
                                'wide': {
                                    'sun': '\u043D\u0435\u0434\u0435\u0459\u0430',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
                                    'tue': '\u0443\u0442\u043E\u0440\u0430\u043A',
                                    'wed': '\u0441\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
                                    'fri': '\u043F\u0435\u0442\u0430\u043A',
                                    'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u041A1',
                                    '2': '\u041A2',
                                    '3': '\u041A3',
                                    '4': '\u041A4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '\u041F\u0440\u0432\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '2': '\u0414\u0440\u0443\u0433\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '3': '\u0422\u0440\u0435\u045B\u0435 \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '4': '\u0427\u0435\u0442\u0432\u0440\u0442\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u041A1',
                                    '2': '\u041A2',
                                    '3': '\u041A3',
                                    '4': '\u041A4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '\u041F\u0440\u0432\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '2': '\u0414\u0440\u0443\u0433\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '3': '\u0422\u0440\u0435\u045B\u0435 \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '4': '\u0427\u0435\u0442\u0432\u0440\u0442\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'narrow': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'wide': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'narrow': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'wide': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u041F\u0440\u0435 \u043D\u043E\u0432\u0435 \u0435\u0440\u0435',
                                '0-alt-variant': 'BCE',
                                '1': '\u041D\u043E\u0432\u0435 \u0435\u0440\u0435',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u043F. \u043D. \u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D. \u0435.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u043F.\u043D.\u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u0435.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, dd. MMMM y.',
                            'long': 'dd. MMMM y.',
                            'medium': 'dd.MM.y.',
                            'short': 'd.M.yy.'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMEd': 'E, d. M. y.',
                                'yMd': 'd. M. y.',
                                'yM': 'y-M',
                                'y': 'y.',
                                'ms': 'mm.ss',
                                'MMMMEd': 'E d. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMd': 'd. MMMM',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'hh a',
                                'H': 'HH',
                                'hm': 'hh.mm a',
                                'Hm': 'HH.mm',
                                'hms': 'hh.mm.ss a',
                                'Hms': 'HH.mm.ss',
                                'yQQQQ': 'QQQQ. y',
                                'yQQQ': 'QQQ. y',
                                'yMMMM': 'MMMM y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMM': 'MMM y.',
                                'yMMdd': 'dd.MM.y',
                                'yMM': 'MM.y',
                                'd': 'd',
                                'Ed': 'E d.',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'MMM y. G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, M-d',
                                'MMdd': 'MM-dd',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMdd': 'dd.MMM',
                                'MMMEd': 'E d. MMM'
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
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
                                },
                                'MMMd': {
                                    'd': 'dd.-dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E, d.M - E, d.M',
                                    'M': 'E, d.M - E, d.M'
                                },
                                'Md': {
                                    'd': 'd.M - d.M',
                                    'M': 'd.M - d.M'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'y M - M',
                                    'y': 'y M - M'
                                },
                                'yMd': {
                                    'd': 'd.M.y. - d.M.y.',
                                    'M': 'd.M.y. - d.M.y.',
                                    'y': 'd.M.y. - d.M.y.'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y. - E, d.M.y.',
                                    'M': 'E, d.M.y. - E, d.M.y.',
                                    'y': 'E, d.M.y. - E, d.M.y.'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y.',
                                    'y': 'MMM y. - MMM y.'
                                },
                                'yMMMd': {
                                    'd': 'dd.-dd. MMM y.',
                                    'M': 'dd. MMM - dd. MMM y.',
                                    'y': 'dd. MMM y. - dd. MMM y.'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd. - E, dd. MMM y.',
                                    'M': 'E, dd. MMM - E, dd. MMM y.',
                                    'y': 'E, dd. MMM y. - E, dd. MMM y.'
                                },
                                'yMMMM': {
                                    'M': 'y-MM \u2013 MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hmv': {
                                    'a': 'h.mm a - h.mm a v',
                                    'h': 'h.mm-h.mm a v',
                                    'm': 'h.mm-h.mm a v'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a - h.mm a',
                                    'h': 'h.mm-h.mm a',
                                    'm': 'h.mm-h.mm a'
                                },
                                'H': {
                                    'H': 'HH-HH'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd-d'
                                },
                                'intervalFormatFallback': '{0} - {1}'
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
