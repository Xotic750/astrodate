/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ar}.
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
        AstroDate.lang('ar', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                },
                                'narrow': {
                                    '1': 'ي',
                                    '2': 'ف',
                                    '3': 'م',
                                    '4': 'أ',
                                    '5': 'و',
                                    '6': 'ن',
                                    '7': 'ل',
                                    '8': 'غ',
                                    '9': 'س',
                                    '10': 'ك',
                                    '11': 'ب',
                                    '12': 'د'
                                },
                                'wide': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                },
                                'narrow': {
                                    '1': 'ي',
                                    '2': 'ف',
                                    '3': 'م',
                                    '4': 'أ',
                                    '5': 'و',
                                    '6': 'ن',
                                    '7': 'ل',
                                    '8': 'غ',
                                    '9': 'س',
                                    '10': 'ك',
                                    '11': 'ب',
                                    '12': 'د'
                                },
                                'wide': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'narrow': {
                                    'sun': 'ح',
                                    'mon': 'ن',
                                    'tue': 'ث',
                                    'wed': 'ر',
                                    'thu': 'خ',
                                    'fri': 'ج',
                                    'sat': 'س'
                                },
                                'short': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'wide': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'narrow': {
                                    'sun': 'ح',
                                    'mon': 'ن',
                                    'tue': 'ث',
                                    'wed': 'ر',
                                    'thu': 'خ',
                                    'fri': 'ج',
                                    'sat': 'س'
                                },
                                'short': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'wide': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': 'الربع الأول',
                                    '2': 'الربع الثاني',
                                    '3': 'الربع الثالث',
                                    '4': 'الربع الرابع'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': 'الربع الأول',
                                    '2': 'الربع الثاني',
                                    '3': 'الربع الثالث',
                                    '4': 'الربع الرابع'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'narrow': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'wide': {
                                    'am': 'ص',
                                    'pm': 'م'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'narrow': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'wide': {
                                    'am': 'ص',
                                    'pm': 'م'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'قبل الميلاد',
                                '1': 'ميلادي',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'ق.م',
                                '1': 'م',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'ق.م',
                                '1': 'م',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
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
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E، d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM، y G',
                                'GyMMMEd': 'E، d MMM، y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/‏M',
                                'MEd': 'E، d/M',
                                'MMdd': 'dd‏/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E، d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E، d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M‏/y',
                                'yMd': 'd‏/M‏/y',
                                'yMEd': 'E، d/‏M/‏y',
                                'yMM': 'MM‏/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM، y',
                                'yMMMEd': 'E، d MMM، y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
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
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'M/d – M/d',
                                    'M': 'M/d – M/d'
                                },
                                'MEd': {
                                    'd': 'E، d/‏M –‏ E، d/‏M',
                                    'M': 'E، d/‏M – E، d/‏M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E، d – E، d MMM',
                                    'M': 'E، d MMM – E، d MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL–LLLL'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M‏/y – M‏/y',
                                    'y': 'M‏/y – M‏/y'
                                },
                                'yMd': {
                                    'd': 'd‏/M‏/y – d‏/M‏/y',
                                    'M': 'd‏/M‏/y – d‏/M‏/y',
                                    'y': 'd‏/M‏/y – d‏/M‏/y'
                                },
                                'yMEd': {
                                    'd': 'E، dd‏/MM‏/y – E، dd‏/MM‏/y',
                                    'M': 'E، d‏/M‏/y – E، d‏/M‏/y',
                                    'y': 'E، d‏/M‏/y – E، d‏/M‏/y'
                                },
                                'yMMM': {
                                    'M': 'MMM – MMM، y',
                                    'y': 'MMM، y – MMM، y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM، y',
                                    'M': 'd MMM – d MMM، y',
                                    'y': 'd MMM، y – d MMM، y'
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
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'جرينتش{0}',
                    'gmtZeroFormat': 'جرينتش',
                    'regionFormat': 'توقيت {0}',
                    'regionFormat-type-daylight': 'توقيت {0} الصيفي',
                    'regionFormat-type-standard': 'توقيت {0} الرسمي',
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
