/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language uk}.
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
        AstroDate.lang('uk', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'січ.',
                                    '2': 'лют.',
                                    '3': 'бер.',
                                    '4': 'квіт.',
                                    '5': 'трав.',
                                    '6': 'черв.',
                                    '7': 'лип.',
                                    '8': 'серп.',
                                    '9': 'вер.',
                                    '10': 'жовт.',
                                    '11': 'лист.',
                                    '12': 'груд.'
                                },
                                'narrow': {
                                    '1': 'С',
                                    '2': 'Л',
                                    '3': 'Б',
                                    '4': 'К',
                                    '5': 'Т',
                                    '6': 'Ч',
                                    '7': 'Л',
                                    '8': 'С',
                                    '9': 'В',
                                    '10': 'Ж',
                                    '11': 'Л',
                                    '12': 'Г'
                                },
                                'wide': {
                                    '1': 'січня',
                                    '2': 'лютого',
                                    '3': 'березня',
                                    '4': 'квітня',
                                    '5': 'травня',
                                    '6': 'червня',
                                    '7': 'липня',
                                    '8': 'серпня',
                                    '9': 'вересня',
                                    '10': 'жовтня',
                                    '11': 'листопада',
                                    '12': 'грудня'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Січ',
                                    '2': 'Лют',
                                    '3': 'Бер',
                                    '4': 'Кві',
                                    '5': 'Тра',
                                    '6': 'Чер',
                                    '7': 'Лип',
                                    '8': 'Сер',
                                    '9': 'Вер',
                                    '10': 'Жов',
                                    '11': 'Лис',
                                    '12': 'Гру'
                                },
                                'narrow': {
                                    '1': 'С',
                                    '2': 'Л',
                                    '3': 'Б',
                                    '4': 'К',
                                    '5': 'Т',
                                    '6': 'Ч',
                                    '7': 'Л',
                                    '8': 'С',
                                    '9': 'В',
                                    '10': 'Ж',
                                    '11': 'Л',
                                    '12': 'Г'
                                },
                                'wide': {
                                    '1': 'Січень',
                                    '2': 'Лютий',
                                    '3': 'Березень',
                                    '4': 'Квітень',
                                    '5': 'Травень',
                                    '6': 'Червень',
                                    '7': 'Липень',
                                    '8': 'Серпень',
                                    '9': 'Вересень',
                                    '10': 'Жовтень',
                                    '11': 'Листопад',
                                    '12': 'Грудень'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'narrow': {
                                    'sun': 'Н',
                                    'mon': 'П',
                                    'tue': 'В',
                                    'wed': 'С',
                                    'thu': 'Ч',
                                    'fri': 'П',
                                    'sat': 'С'
                                },
                                'short': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'wide': {
                                    'sun': 'неділя',
                                    'mon': 'понеділок',
                                    'tue': 'вівторок',
                                    'wed': 'середа',
                                    'thu': 'четвер',
                                    'fri': 'пʼятниця',
                                    'sat': 'субота'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'narrow': {
                                    'sun': 'Н',
                                    'mon': 'П',
                                    'tue': 'В',
                                    'wed': 'С',
                                    'thu': 'Ч',
                                    'fri': 'П',
                                    'sat': 'С'
                                },
                                'short': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'wide': {
                                    'sun': 'Неділя',
                                    'mon': 'Понеділок',
                                    'tue': 'Вівторок',
                                    'wed': 'Середа',
                                    'thu': 'Четвер',
                                    'fri': 'Пʼятниця',
                                    'sat': 'Субота'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': 'I квартал',
                                    '2': 'II квартал',
                                    '3': 'III квартал',
                                    '4': 'IV квартал'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': '1-й квартал',
                                    '2': '2-й квартал',
                                    '3': '3-й квартал',
                                    '4': '4-й квартал'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'narrow': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'narrow': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'до нашої ери',
                                '1': 'нашої ери',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'до н.е.',
                                '1': 'н.е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'до н.е.',
                                '1': 'н.е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
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
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'E, dd.MM.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y \'р\'.'
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
                                    'd': 'dd.MM – dd.MM',
                                    'M': 'dd.MM – dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM – E, dd.MM',
                                    'M': 'E, dd.MM – E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'LLL–LLL'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d – E, d MMM',
                                    'M': 'E, d MMM – E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM.y – MM.y',
                                    'y': 'MM.y – MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y – dd.MM.y',
                                    'M': 'dd.MM.y – dd.MM.y',
                                    'y': 'dd.MM.y – dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y – E, dd.MM.y',
                                    'M': 'E, dd.MM.y – E, dd.MM.y',
                                    'y': 'E, dd.MM.y – E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL–LLL y',
                                    'y': 'LLL y – LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d – E, d MMM y',
                                    'M': 'E, d MMM – E, d MMM y',
                                    'y': 'E, d MMM y – E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL – LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Час: {0}',
                    'regionFormat-type-daylight': 'Час: {0}, літній',
                    'regionFormat-type-standard': 'Час: {0}, стандартний',
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
