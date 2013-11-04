/* AstroDate Language: he
 *
 * home: https://github.com/Xotic750/astrodate
 *
 * Copyright (C) 2013  Graham Fairweather (a.k.a: Xotic750)
 *
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

    (function (definition) {
        /*global module, require, define */
        var astrodateFunc = 'AstroDate',
            astrodateString = astrodateFunc.toLowerCase();

        if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
            definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }((function (AstroDate) {
        AstroDate.lang('he', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'רבעון 1',
                                '2': 'רבעון 2',
                                '3': 'רבעון 3',
                                '4': 'רבעון 4'
                            },
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
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'רבעון 1',
                                '2': 'רבעון 2',
                                '3': 'רבעון 3',
                                '4': 'רבעון 4'
                            },
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
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'ינואר',
                                '10': 'אוקטובר',
                                '2': 'פברואר',
                                '11': 'נובמבר',
                                '3': 'מרץ',
                                '12': 'דצמבר',
                                '4': 'אפריל',
                                '5': 'מאי',
                                '6': 'יוני',
                                '7': 'יולי',
                                '8': 'אוגוסט',
                                '9': 'ספטמבר'
                            },
                            'abbreviated': {
                                '1': 'ינו',
                                '10': 'אוק',
                                '2': 'פבר',
                                '11': 'נוב',
                                '3': 'מרץ',
                                '12': 'דצמ',
                                '4': 'אפר',
                                '5': 'מאי',
                                '6': 'יונ',
                                '7': 'יול',
                                '8': 'אוג',
                                '9': 'ספט'
                            },
                            'narrow': {
                                '1': '1',
                                '10': '10',
                                '2': '2',
                                '11': '11',
                                '3': '3',
                                '12': '12',
                                '4': '4',
                                '5': '5',
                                '6': '6',
                                '7': '7',
                                '8': '8',
                                '9': '9'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'ינואר',
                                '10': 'אוקטובר',
                                '2': 'פברואר',
                                '11': 'נובמבר',
                                '3': 'מרץ',
                                '12': 'דצמבר',
                                '4': 'אפריל',
                                '5': 'מאי',
                                '6': 'יוני',
                                '7': 'יולי',
                                '8': 'אוגוסט',
                                '9': 'ספטמבר'
                            },
                            'abbreviated': {
                                '1': 'ינו׳',
                                '10': 'אוק׳',
                                '2': 'פבר׳',
                                '11': 'נוב׳',
                                '3': 'מרץ',
                                '12': 'דצמ׳',
                                '4': 'אפר׳',
                                '5': 'מאי',
                                '6': 'יונ׳',
                                '7': 'יול׳',
                                '8': 'אוג׳',
                                '9': 'ספט׳'
                            },
                            'narrow': {
                                '1': '1',
                                '10': '10',
                                '2': '2',
                                '11': '11',
                                '3': '3',
                                '12': '12',
                                '4': '4',
                                '5': '5',
                                '6': '6',
                                '7': '7',
                                '8': '8',
                                '9': '9'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'יום שלישי',
                                'fri': 'יום שישי',
                                'sun': 'יום ראשון',
                                'sat': 'יום שבת',
                                'wed': 'יום רביעי',
                                'mon': 'יום שני',
                                'thu': 'יום חמישי'
                            },
                            'abbreviated': {
                                'tue': 'יום ג׳',
                                'fri': 'יום ו׳',
                                'sun': 'יום א׳',
                                'sat': 'שבת',
                                'wed': 'יום ד׳',
                                'mon': 'יום ב׳',
                                'thu': 'יום ה׳'
                            },
                            'narrow': {
                                'tue': 'ג׳',
                                'fri': 'ו׳',
                                'sun': 'א׳',
                                'sat': 'ש׳',
                                'wed': 'ד׳',
                                'mon': 'ב׳',
                                'thu': 'ה׳'
                            },
                            'short': {
                                'tue': 'ג׳',
                                'fri': 'ו׳',
                                'sun': 'א׳',
                                'sat': 'ש׳',
                                'wed': 'ד׳',
                                'mon': 'ב׳',
                                'thu': 'ה׳'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'יום שלישי',
                                'fri': 'יום שישי',
                                'sun': 'יום ראשון',
                                'sat': 'יום שבת',
                                'wed': 'יום רביעי',
                                'mon': 'יום שני',
                                'thu': 'יום חמישי'
                            },
                            'abbreviated': {
                                'tue': 'יום ג׳',
                                'fri': 'יום ו׳',
                                'sun': 'יום א׳',
                                'sat': 'שבת',
                                'wed': 'יום ד׳',
                                'mon': 'יום ב׳',
                                'thu': 'יום ה׳'
                            },
                            'narrow': {
                                'tue': 'ג׳',
                                'fri': 'ו׳',
                                'sun': 'א׳',
                                'sat': 'ש׳',
                                'wed': 'ד׳',
                                'mon': 'ב׳',
                                'thu': 'ה׳'
                            },
                            'short': {
                                'tue': 'ג׳',
                                'fri': 'ו׳',
                                'sun': 'א׳',
                                'sat': 'ש׳',
                                'wed': 'ד׳',
                                'mon': 'ב׳',
                                'thu': 'ה׳'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'אחה״צ',
                                'am': 'לפנה״צ'
                            },
                            'abbreviated': {
                                'pm': 'אחה״צ',
                                'am': 'לפנה״צ'
                            },
                            'narrow': {
                                'pm': 'אחה״צ',
                                'am': 'לפנה״צ'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'אחה״צ',
                                'am': 'לפנה״צ'
                            },
                            'abbreviated': {
                                'pm': 'אחה״צ',
                                'am': 'לפנה״צ'
                            },
                            'narrow': {
                                'pm': 'אחה״צ',
                                'am': 'לפנה״צ'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'לפני הספירה',
                            '1': 'לספירה'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'לפנה״ס',
                            '1': 'לסה״נ'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'לפנה״ס',
                            '1': 'לסה״נ'
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
                        'appendItems': {
                            'Minute': '{0} ({2}: {1})',
                            'Day': '{0} ({2}: {1})',
                            'Era': '{1} {0}',
                            'Week': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Hour': '{0} ({2}: {1})',
                            'Year': '{1} {0}',
                            'Month': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Second': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}'
                        },
                        'long': '{1} בשעה {0}',
                        'availableFormats': {
                            'EHm': 'E H:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E ה-d',
                            'Gy': 'y G',
                            'yMd': 'd.M.y',
                            'MMMd': 'd בMMM',
                            'MEd': 'E, d/M',
                            'GyMMMd': 'd בMMM y G',
                            'EHms': 'E H:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d בMMM y G',
                            'h': '‏h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, d/M/y',
                            'MMMEd': 'E, d בMMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M.y',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd בMMM y',
                            'yMMMEd': 'E, d בMMM y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'y QQQ',
                            'yQQQQ': 'y QQQQ'
                        },
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'Hmv': {
                                'H': 'H:mm–H:mm v',
                                'm': 'H:mm–H:mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd.M–d.M',
                                'M': 'd.M–d.M'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'EEEE d MMM – EEEE d MMM',
                                'M': 'EEEE d MMM – EEEE d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'EEEE d.M.y – EEEE d.M.y',
                                'M': 'EEEE d.M.y – EEEE d.M.y',
                                'y': 'EEEE d.M.y – EEEE d.M.y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'H': {
                                'H': 'H–H'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'M.y–M.y',
                                'y': 'M.y‏-M.y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM – d MMM y',
                                'y': 'd MMM y – d MMM y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'MMMM': {
                                'M': 'LLLL–LLLL'
                            },
                            'yMd': {
                                'd': 'dd.M.y – dd.M.y',
                                'M': 'd.M.y – d.M.y',
                                'y': 'd.M.y – d.M.y'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM–d MMM'
                            },
                            'MEd': {
                                'd': 'EEEE d.M–EEEE d.M',
                                'M': 'EEEE d.M – EEEE d.M'
                            },
                            'y': {
                                'y': 'y–y'
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
            }
        });
    }())));
}((function (thisContext) {
    'use strict';
    /*global window, global, self */

    // detect the global context of the environment
    if ('object' === typeof window && null !== window && window.window === window) {
        thisContext = window;
    } else if ('object' === typeof global && null !== global && global.global === global) {
        thisContext = global;
    } else if ('object' === typeof self && null !== self && self.self === self) {
        thisContext = self;
    }

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    /*global */
    return thisContext;
}(this))));
