/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ru}.
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
        AstroDate.lang('ru', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'янв.',
                                    '2': 'февр.',
                                    '3': 'марта',
                                    '4': 'апр.',
                                    '5': 'мая',
                                    '6': 'июня',
                                    '7': 'июля',
                                    '8': 'авг.',
                                    '9': 'сент.',
                                    '10': 'окт.',
                                    '11': 'нояб.',
                                    '12': 'дек.'
                                },
                                'narrow': {
                                    '1': 'Я',
                                    '2': 'Ф',
                                    '3': 'М',
                                    '4': 'А',
                                    '5': 'М',
                                    '6': 'И',
                                    '7': 'И',
                                    '8': 'А',
                                    '9': 'С',
                                    '10': 'О',
                                    '11': 'Н',
                                    '12': 'Д'
                                },
                                'wide': {
                                    '1': 'января',
                                    '2': 'февраля',
                                    '3': 'марта',
                                    '4': 'апреля',
                                    '5': 'мая',
                                    '6': 'июня',
                                    '7': 'июля',
                                    '8': 'августа',
                                    '9': 'сентября',
                                    '10': 'октября',
                                    '11': 'ноября',
                                    '12': 'декабря'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Янв.',
                                    '2': 'Февр.',
                                    '3': 'Март',
                                    '4': 'Апр.',
                                    '5': 'Май',
                                    '6': 'Июнь',
                                    '7': 'Июль',
                                    '8': 'Авг.',
                                    '9': 'Сент.',
                                    '10': 'Окт.',
                                    '11': 'Нояб.',
                                    '12': 'Дек.'
                                },
                                'narrow': {
                                    '1': 'Я',
                                    '2': 'Ф',
                                    '3': 'М',
                                    '4': 'А',
                                    '5': 'М',
                                    '6': 'И',
                                    '7': 'И',
                                    '8': 'А',
                                    '9': 'С',
                                    '10': 'О',
                                    '11': 'Н',
                                    '12': 'Д'
                                },
                                'wide': {
                                    '1': 'Январь',
                                    '2': 'Февраль',
                                    '3': 'Март',
                                    '4': 'Апрель',
                                    '5': 'Май',
                                    '6': 'Июнь',
                                    '7': 'Июль',
                                    '8': 'Август',
                                    '9': 'Сентябрь',
                                    '10': 'Октябрь',
                                    '11': 'Ноябрь',
                                    '12': 'Декабрь'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'narrow': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'short': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'wide': {
                                    'sun': 'воскресенье',
                                    'mon': 'понедельник',
                                    'tue': 'вторник',
                                    'wed': 'среда',
                                    'thu': 'четверг',
                                    'fri': 'пятница',
                                    'sat': 'суббота'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Вс',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'narrow': {
                                    'sun': 'В',
                                    'mon': 'П',
                                    'tue': 'В',
                                    'wed': 'С',
                                    'thu': 'Ч',
                                    'fri': 'П',
                                    'sat': 'С'
                                },
                                'short': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'wide': {
                                    'sun': 'Воскресенье',
                                    'mon': 'Понедельник',
                                    'tue': 'Вторник',
                                    'wed': 'Среда',
                                    'thu': 'Четверг',
                                    'fri': 'Пятница',
                                    'sat': 'Суббота'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                },
                                'narrow': {
                                    'am': 'дп',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                },
                                'narrow': {
                                    'am': 'дп',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'до н.э.',
                                '1': 'н.э.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'н.э.'
                            },
                            'eraAbbr': {
                                '0': 'до н. э.',
                                '1': 'н. э.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'н.э.'
                            },
                            'eraNarrow': {
                                '0': 'до н.э.',
                                '1': 'н.э.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'н.э.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'г\'.',
                            'long': 'd MMMM y \'г\'.',
                            'medium': 'dd MMM y \'г\'.',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'E': 'ccc',
                                'Ed': 'ccc, d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y \'г\'. G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMdd': 'dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'ccc, d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yLLLL': 'LLLL y',
                                'yM': 'MM.y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'ccc, d.MM.y \'г\'.',
                                'yMM': 'MM.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y \'г\'.',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
                                'yQQQ': 'QQQ y \'г\'.',
                                'yQQQQ': 'QQQQ y \'г\'.'
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
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm-H:mm',
                                    'm': 'H:mm-H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm-H:mm v',
                                    'm': 'H:mm-H:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'H-H v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd.MM - dd.MM',
                                    'M': 'dd.MM - dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM - E, dd.MM',
                                    'M': 'E, dd.MM - E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'LLL-MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'ccc, d - E, d MMM',
                                    'M': 'ccc, d MMM - ccc, d MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y - dd.MM.y',
                                    'M': 'dd.MM.y - dd.MM.y',
                                    'y': 'dd.MM.y - dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y \'г\'.',
                                    'y': 'LLL y - LLL y \'г\'.'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y \'г\'.',
                                    'M': 'd MMM - d MMM y \'г\'.',
                                    'y': 'd MMM y - d MMM y \'г\'.'
                                },
                                'yMMMEd': {
                                    'd': 'ccc, d - ccc, d MMM y \'г\'.',
                                    'M': 'ccc, d MMM - ccc, d MMM y \'г\'.',
                                    'y': 'ccc, d MMM y - ccc, d MMM y \'г\'.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y \'г\'.',
                                    'y': 'LLLL y - LLLL y \'г\'.'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} время',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
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
