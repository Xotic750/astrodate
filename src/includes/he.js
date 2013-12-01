/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language he}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('he', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ינו',
                                    '2': 'פבר',
                                    '3': 'מרץ',
                                    '4': 'אפר',
                                    '5': 'מאי',
                                    '6': 'יונ',
                                    '7': 'יול',
                                    '8': 'אוג',
                                    '9': 'ספט',
                                    '10': 'אוק',
                                    '11': 'נוב',
                                    '12': 'דצמ'
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
                                    '1': 'ינואר',
                                    '2': 'פברואר',
                                    '3': 'מרץ',
                                    '4': 'אפריל',
                                    '5': 'מאי',
                                    '6': 'יוני',
                                    '7': 'יולי',
                                    '8': 'אוגוסט',
                                    '9': 'ספטמבר',
                                    '10': 'אוקטובר',
                                    '11': 'נובמבר',
                                    '12': 'דצמבר'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ינו׳',
                                    '2': 'פבר׳',
                                    '3': 'מרץ',
                                    '4': 'אפר׳',
                                    '5': 'מאי',
                                    '6': 'יונ׳',
                                    '7': 'יול׳',
                                    '8': 'אוג׳',
                                    '9': 'ספט׳',
                                    '10': 'אוק׳',
                                    '11': 'נוב׳',
                                    '12': 'דצמ׳'
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
                                    '1': 'ינואר',
                                    '2': 'פברואר',
                                    '3': 'מרץ',
                                    '4': 'אפריל',
                                    '5': 'מאי',
                                    '6': 'יוני',
                                    '7': 'יולי',
                                    '8': 'אוגוסט',
                                    '9': 'ספטמבר',
                                    '10': 'אוקטובר',
                                    '11': 'נובמבר',
                                    '12': 'דצמבר'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'יום א׳',
                                    'mon': 'יום ב׳',
                                    'tue': 'יום ג׳',
                                    'wed': 'יום ד׳',
                                    'thu': 'יום ה׳',
                                    'fri': 'יום ו׳',
                                    'sat': 'שבת'
                                },
                                'narrow': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'short': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'wide': {
                                    'sun': 'יום ראשון',
                                    'mon': 'יום שני',
                                    'tue': 'יום שלישי',
                                    'wed': 'יום רביעי',
                                    'thu': 'יום חמישי',
                                    'fri': 'יום שישי',
                                    'sat': 'יום שבת'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'יום א׳',
                                    'mon': 'יום ב׳',
                                    'tue': 'יום ג׳',
                                    'wed': 'יום ד׳',
                                    'thu': 'יום ה׳',
                                    'fri': 'יום ו׳',
                                    'sat': 'שבת'
                                },
                                'narrow': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'short': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'wide': {
                                    'sun': 'יום ראשון',
                                    'mon': 'יום שני',
                                    'tue': 'יום שלישי',
                                    'wed': 'יום רביעי',
                                    'thu': 'יום חמישי',
                                    'fri': 'יום שישי',
                                    'sat': 'יום שבת'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                },
                                'narrow': {
                                    '1': 'ר1',
                                    '2': 'ר2',
                                    '3': 'ר3',
                                    '4': 'ר4'
                                },
                                'wide': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'narrow': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'wide': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'narrow': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'wide': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'לפני הספירה',
                                '1': 'לספירה',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'לפנה״ס',
                                '1': 'לסה״נ',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'לפנה״ס',
                                '1': 'לסה״נ',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d בMMMM y',
                            'long': 'd בMMMM y',
                            'medium': 'd בMMM y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} בשעה {0}',
                            'long': '{1} בשעה {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E ה-d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd בMMM y G',
                                'GyMMMEd': 'E, d בMMM y G',
                                'h': '‏h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd בMMM',
                                'MMMEd': 'E, d בMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E, d/M/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd בMMM y',
                                'yMMMEd': 'E, d בMMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
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
                                    'd': 'd–d'
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
                                    'd': 'd.M–d.M',
                                    'M': 'd.M–d.M'
                                },
                                'MEd': {
                                    'd': 'EEEE d.M–EEEE d.M',
                                    'M': 'EEEE d.M – EEEE d.M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM–d MMM'
                                },
                                'MMMEd': {
                                    'd': 'EEEE d MMM – EEEE d MMM',
                                    'M': 'EEEE d MMM – EEEE d MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL–LLLL'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M.y–M.y',
                                    'y': 'M.y‏-M.y'
                                },
                                'yMd': {
                                    'd': 'dd.M.y – dd.M.y',
                                    'M': 'd.M.y – d.M.y',
                                    'y': 'd.M.y – d.M.y'
                                },
                                'yMEd': {
                                    'd': 'EEEE d.M.y – EEEE d.M.y',
                                    'M': 'EEEE d.M.y – EEEE d.M.y',
                                    'y': 'EEEE d.M.y – EEEE d.M.y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE d MMM – EEEE d MMM y',
                                    'M': 'EEEE d MMM – EEEE d MMM y',
                                    'y': 'EEEE d MMM y – EEEE d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y–MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'שעון {0}',
                    'regionFormat-type-daylight': 'שעון {0} (קיץ)',
                    'regionFormat-type-standard': 'שעון {0} (חורף)',
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
