/* AstroDate Language: uk
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
    }(function (AstroDate) {
        AstroDate.lang('uk', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'I квартал',
                                '2': 'II квартал',
                                '3': 'III квартал',
                                '4': 'IV квартал'
                            },
                            'abbreviated': {
                                '1': 'I кв.',
                                '2': 'II кв.',
                                '3': 'III кв.',
                                '4': 'IV кв.'
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
                                '1': '1-й квартал',
                                '2': '2-й квартал',
                                '3': '3-й квартал',
                                '4': '4-й квартал'
                            },
                            'abbreviated': {
                                '1': '1-й кв.',
                                '2': '2-й кв.',
                                '3': '3-й кв.',
                                '4': '4-й кв.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'січня',
                                '10': 'жовтня',
                                '2': 'лютого',
                                '11': 'листопада',
                                '3': 'березня',
                                '12': 'грудня',
                                '4': 'квітня',
                                '5': 'травня',
                                '6': 'червня',
                                '7': 'липня',
                                '8': 'серпня',
                                '9': 'вересня'
                            },
                            'abbreviated': {
                                '1': 'січ.',
                                '10': 'жовт.',
                                '2': 'лют.',
                                '11': 'лист.',
                                '3': 'бер.',
                                '12': 'груд.',
                                '4': 'квіт.',
                                '5': 'трав.',
                                '6': 'черв.',
                                '7': 'лип.',
                                '8': 'серп.',
                                '9': 'вер.'
                            },
                            'narrow': {
                                '1': 'С',
                                '10': 'Ж',
                                '2': 'Л',
                                '11': 'Л',
                                '3': 'Б',
                                '12': 'Г',
                                '4': 'К',
                                '5': 'Т',
                                '6': 'Ч',
                                '7': 'Л',
                                '8': 'С',
                                '9': 'В'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Січень',
                                '10': 'Жовтень',
                                '2': 'Лютий',
                                '11': 'Листопад',
                                '3': 'Березень',
                                '12': 'Грудень',
                                '4': 'Квітень',
                                '5': 'Травень',
                                '6': 'Червень',
                                '7': 'Липень',
                                '8': 'Серпень',
                                '9': 'Вересень'
                            },
                            'abbreviated': {
                                '1': 'Січ',
                                '10': 'Жов',
                                '2': 'Лют',
                                '11': 'Лис',
                                '3': 'Бер',
                                '12': 'Гру',
                                '4': 'Кві',
                                '5': 'Тра',
                                '6': 'Чер',
                                '7': 'Лип',
                                '8': 'Сер',
                                '9': 'Вер'
                            },
                            'narrow': {
                                '1': 'С',
                                '10': 'Ж',
                                '2': 'Л',
                                '11': 'Л',
                                '3': 'Б',
                                '12': 'Г',
                                '4': 'К',
                                '5': 'Т',
                                '6': 'Ч',
                                '7': 'Л',
                                '8': 'С',
                                '9': 'В'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'вівторок',
                                'fri': 'пʼятниця',
                                'sun': 'неділя',
                                'sat': 'субота',
                                'wed': 'середа',
                                'mon': 'понеділок',
                                'thu': 'четвер'
                            },
                            'abbreviated': {
                                'tue': 'Вт',
                                'fri': 'Пт',
                                'sun': 'Нд',
                                'sat': 'Сб',
                                'wed': 'Ср',
                                'mon': 'Пн',
                                'thu': 'Чт'
                            },
                            'narrow': {
                                'tue': 'В',
                                'fri': 'П',
                                'sun': 'Н',
                                'sat': 'С',
                                'wed': 'С',
                                'mon': 'П',
                                'thu': 'Ч'
                            },
                            'short': {
                                'tue': 'Вт',
                                'fri': 'Пт',
                                'sun': 'Нд',
                                'sat': 'Сб',
                                'wed': 'Ср',
                                'mon': 'Пн',
                                'thu': 'Чт'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Вівторок',
                                'fri': 'Пʼятниця',
                                'sun': 'Неділя',
                                'sat': 'Субота',
                                'wed': 'Середа',
                                'mon': 'Понеділок',
                                'thu': 'Четвер'
                            },
                            'abbreviated': {
                                'tue': 'Вт',
                                'fri': 'Пт',
                                'sun': 'Нд',
                                'sat': 'Сб',
                                'wed': 'Ср',
                                'mon': 'Пн',
                                'thu': 'Чт'
                            },
                            'narrow': {
                                'tue': 'В',
                                'fri': 'П',
                                'sun': 'Н',
                                'sat': 'С',
                                'wed': 'С',
                                'mon': 'П',
                                'thu': 'Ч'
                            },
                            'short': {
                                'tue': 'Вт',
                                'fri': 'Пт',
                                'sun': 'Нд',
                                'sat': 'Сб',
                                'wed': 'Ср',
                                'mon': 'Пн',
                                'thu': 'Чт'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'morning': 'ранку',
                                'afternoon': 'дня',
                                'evening': 'вечора',
                                'night': 'ночі',
                                'am': 'дп',
                                'pm': 'пп'
                            },
                            'abbreviated': {
                                'morning': 'ранку',
                                'afternoon': 'дня',
                                'evening': 'вечора',
                                'night': 'ночі',
                                'am': 'дп',
                                'pm': 'пп'
                            },
                            'narrow': {
                                'morning': 'ранку',
                                'afternoon': 'дня',
                                'evening': 'вечора',
                                'night': 'ночі',
                                'am': 'дп',
                                'pm': 'пп'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'morning': 'ранку',
                                'afternoon': 'дня',
                                'evening': 'вечора',
                                'night': 'ночі',
                                'am': 'дп',
                                'pm': 'пп'
                            },
                            'abbreviated': {
                                'morning': 'ранку',
                                'afternoon': 'дня',
                                'evening': 'вечора',
                                'night': 'ночі',
                                'am': 'дп',
                                'pm': 'пп'
                            },
                            'narrow': {
                                'morning': 'ранку',
                                'afternoon': 'дня',
                                'evening': 'вечора',
                                'night': 'ночі',
                                'am': 'дп',
                                'pm': 'пп'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'до нашої ери',
                            '1': 'нашої ери'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'до н.е.',
                            '1': 'н.е.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'до н.е.',
                            '1': 'н.е.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y \'р\'.',
                        'long': 'd MMMM y \'р\'.',
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
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'dd.MM',
                            'Ed': 'E, d',
                            'Gy': 'y G',
                            'yMd': 'dd.MM.y',
                            'MMMd': 'd MMM',
                            'MEd': 'E, dd.MM',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E HH:mm:ss',
                            'HHmm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'LLL y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, dd.MM.y',
                            'MMMEd': 'E, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'HHmmss': 'HH:mm:ss',
                            'yM': 'MM.y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMM': 'LLLL y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y \'р\'.'
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
                                'd': 'dd.MM – dd.MM',
                                'M': 'dd.MM – dd.MM'
                            },
                            'yMMMEd': {
                                'd': 'E, d – E, d MMM y',
                                'M': 'E, d MMM – E, d MMM y',
                                'y': 'E, d MMM y – E, d MMM y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E, d – E, d MMM',
                                'M': 'E, d MMM – E, d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y – E, dd.MM.y',
                                'M': 'E, dd.MM.y – E, dd.MM.y',
                                'y': 'E, dd.MM.y – E, dd.MM.y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL–LLL y',
                                'y': 'LLL y – LLL y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL–LLL'
                            },
                            'yM': {
                                'M': 'MM.y – MM.y',
                                'y': 'MM.y – MM.y'
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
                            'yMd': {
                                'd': 'dd.MM.y – dd.MM.y',
                                'M': 'dd.MM.y – dd.MM.y',
                                'y': 'dd.MM.y – dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM – E, dd.MM',
                                'M': 'E, dd.MM – E, dd.MM'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'LLLL – LLLL y',
                                'y': 'LLLL y – LLLL y'
                            }
                        }
                    }
                }
            }
        });
    }));
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
