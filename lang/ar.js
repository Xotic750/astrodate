/* AstroDate Language: ar
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
            module.exports = definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }((function (AstroDate) {
        AstroDate.lang('ar', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            },
                            'abbreviated': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            },
                            'narrow': {
                                '1': '١',
                                '2': '٢',
                                '3': '٣',
                                '4': '٤'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            },
                            'abbreviated': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            },
                            'narrow': {
                                '1': '١',
                                '2': '٢',
                                '3': '٣',
                                '4': '٤'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'يناير',
                                '10': 'أكتوبر',
                                '2': 'فبراير',
                                '11': 'نوفمبر',
                                '3': 'مارس',
                                '12': 'ديسمبر',
                                '4': 'أبريل',
                                '5': 'مايو',
                                '6': 'يونيو',
                                '7': 'يوليو',
                                '8': 'أغسطس',
                                '9': 'سبتمبر'
                            },
                            'abbreviated': {
                                '1': 'يناير',
                                '10': 'أكتوبر',
                                '2': 'فبراير',
                                '11': 'نوفمبر',
                                '3': 'مارس',
                                '12': 'ديسمبر',
                                '4': 'أبريل',
                                '5': 'مايو',
                                '6': 'يونيو',
                                '7': 'يوليو',
                                '8': 'أغسطس',
                                '9': 'سبتمبر'
                            },
                            'narrow': {
                                '1': 'ي',
                                '10': 'ك',
                                '2': 'ف',
                                '11': 'ب',
                                '3': 'م',
                                '12': 'د',
                                '4': 'أ',
                                '5': 'و',
                                '6': 'ن',
                                '7': 'ل',
                                '8': 'غ',
                                '9': 'س'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'يناير',
                                '10': 'أكتوبر',
                                '2': 'فبراير',
                                '11': 'نوفمبر',
                                '3': 'مارس',
                                '12': 'ديسمبر',
                                '4': 'أبريل',
                                '5': 'مايو',
                                '6': 'يونيو',
                                '7': 'يوليو',
                                '8': 'أغسطس',
                                '9': 'سبتمبر'
                            },
                            'abbreviated': {
                                '1': 'يناير',
                                '10': 'أكتوبر',
                                '2': 'فبراير',
                                '11': 'نوفمبر',
                                '3': 'مارس',
                                '12': 'ديسمبر',
                                '4': 'أبريل',
                                '5': 'مايو',
                                '6': 'يونيو',
                                '7': 'يوليو',
                                '8': 'أغسطس',
                                '9': 'سبتمبر'
                            },
                            'narrow': {
                                '1': 'ي',
                                '10': 'ك',
                                '2': 'ف',
                                '11': 'ب',
                                '3': 'م',
                                '12': 'د',
                                '4': 'أ',
                                '5': 'و',
                                '6': 'ن',
                                '7': 'ل',
                                '8': 'غ',
                                '9': 'س'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'الثلاثاء',
                                'fri': 'الجمعة',
                                'sun': 'الأحد',
                                'sat': 'السبت',
                                'wed': 'الأربعاء',
                                'mon': 'الاثنين',
                                'thu': 'الخميس'
                            },
                            'abbreviated': {
                                'tue': 'الثلاثاء',
                                'fri': 'الجمعة',
                                'sun': 'الأحد',
                                'sat': 'السبت',
                                'wed': 'الأربعاء',
                                'mon': 'الاثنين',
                                'thu': 'الخميس'
                            },
                            'narrow': {
                                'tue': 'ث',
                                'fri': 'ج',
                                'sun': 'ح',
                                'sat': 'س',
                                'wed': 'ر',
                                'mon': 'ن',
                                'thu': 'خ'
                            },
                            'short': {
                                'tue': 'الثلاثاء',
                                'fri': 'الجمعة',
                                'sun': 'الأحد',
                                'sat': 'السبت',
                                'wed': 'الأربعاء',
                                'mon': 'الاثنين',
                                'thu': 'الخميس'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'الثلاثاء',
                                'fri': 'الجمعة',
                                'sun': 'الأحد',
                                'sat': 'السبت',
                                'wed': 'الأربعاء',
                                'mon': 'الاثنين',
                                'thu': 'الخميس'
                            },
                            'abbreviated': {
                                'tue': 'الثلاثاء',
                                'fri': 'الجمعة',
                                'sun': 'الأحد',
                                'sat': 'السبت',
                                'wed': 'الأربعاء',
                                'mon': 'الاثنين',
                                'thu': 'الخميس'
                            },
                            'narrow': {
                                'tue': 'ث',
                                'fri': 'ج',
                                'sun': 'ح',
                                'sat': 'س',
                                'wed': 'ر',
                                'mon': 'ن',
                                'thu': 'خ'
                            },
                            'short': {
                                'tue': 'الثلاثاء',
                                'fri': 'الجمعة',
                                'sun': 'الأحد',
                                'sat': 'السبت',
                                'wed': 'الأربعاء',
                                'mon': 'الاثنين',
                                'thu': 'الخميس'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'م',
                                'am': 'ص'
                            },
                            'abbreviated': {
                                'pm': 'م',
                                'am': 'ص'
                            },
                            'narrow': {
                                'pm': 'م',
                                'am': 'ص'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'م',
                                'am': 'ص'
                            },
                            'abbreviated': {
                                'pm': 'م',
                                'am': 'ص'
                            },
                            'narrow': {
                                'pm': 'م',
                                'am': 'ص'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'قبل الميلاد',
                            '1': 'ميلادي'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'ق.م',
                            '1': 'م'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'ق.م',
                            '1': 'م'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE، d MMMM، y',
                        'long': 'd MMMM، y',
                        'medium': 'dd‏/MM‏/y',
                        'short': 'd‏/M‏/y'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
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
                        'long': '{1} {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E، d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/‏M',
                            'Ed': 'E، d',
                            'Gy': 'y G',
                            'yMd': 'd‏/M‏/y',
                            'MMMd': 'd MMM',
                            'MMdd': 'dd‏/MM',
                            'MEd': 'E، d/M',
                            'GyMMMd': 'd MMM، y G',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E، d MMM، y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E، d/‏M/‏y',
                            'MMMEd': 'E، d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M‏/y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM‏/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM، y',
                            'yMMMEd': 'E، d MMM، y',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
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
                                'd': 'M/d – M/d',
                                'M': 'M/d – M/d'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E، d – E، d MMM',
                                'M': 'E، d MMM – E، d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E، dd‏/MM‏/y – E، dd‏/MM‏/y',
                                'M': 'E، d‏/M‏/y – E، d‏/M‏/y',
                                'y': 'E، d‏/M‏/y – E، d‏/M‏/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM – MMM، y',
                                'y': 'MMM، y – MMM، y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'M‏/y – M‏/y',
                                'y': 'M‏/y – M‏/y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM، y',
                                'M': 'd MMM – d MMM، y',
                                'y': 'd MMM، y – d MMM، y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'MMMM': {
                                'M': 'LLLL–LLLL'
                            },
                            'yMd': {
                                'd': 'd‏/M‏/y – d‏/M‏/y',
                                'M': 'd‏/M‏/y – d‏/M‏/y',
                                'y': 'd‏/M‏/y – d‏/M‏/y'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'E، d/‏M –‏ E، d/‏M',
                                'M': 'E، d/‏M – E، d/‏M'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMEd': {
                                'd': 'E، d – E، d MMM، y',
                                'M': 'E، d MMM – E، d MMM، y',
                                'y': 'E، d MMM، y – E، d MMM، y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM، y',
                                'y': 'MMMM، y – MMMM، y'
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
