/* AstroDate Language: ru
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
        AstroDate.lang('ru', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
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
                                '1': 'января',
                                '10': 'октября',
                                '2': 'февраля',
                                '11': 'ноября',
                                '3': 'марта',
                                '12': 'декабря',
                                '4': 'апреля',
                                '5': 'мая',
                                '6': 'июня',
                                '7': 'июля',
                                '8': 'августа',
                                '9': 'сентября'
                            },
                            'abbreviated': {
                                '1': 'янв.',
                                '10': 'окт.',
                                '2': 'февр.',
                                '11': 'нояб.',
                                '3': 'марта',
                                '12': 'дек.',
                                '4': 'апр.',
                                '5': 'мая',
                                '6': 'июня',
                                '7': 'июля',
                                '8': 'авг.',
                                '9': 'сент.'
                            },
                            'narrow': {
                                '1': 'Я',
                                '10': 'О',
                                '2': 'Ф',
                                '11': 'Н',
                                '3': 'М',
                                '12': 'Д',
                                '4': 'А',
                                '5': 'М',
                                '6': 'И',
                                '7': 'И',
                                '8': 'А',
                                '9': 'С'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Январь',
                                '10': 'Октябрь',
                                '2': 'Февраль',
                                '11': 'Ноябрь',
                                '3': 'Март',
                                '12': 'Декабрь',
                                '4': 'Апрель',
                                '5': 'Май',
                                '6': 'Июнь',
                                '7': 'Июль',
                                '8': 'Август',
                                '9': 'Сентябрь'
                            },
                            'abbreviated': {
                                '1': 'Янв.',
                                '10': 'Окт.',
                                '2': 'Февр.',
                                '11': 'Нояб.',
                                '3': 'Март',
                                '12': 'Дек.',
                                '4': 'Апр.',
                                '5': 'Май',
                                '6': 'Июнь',
                                '7': 'Июль',
                                '8': 'Авг.',
                                '9': 'Сент.'
                            },
                            'narrow': {
                                '1': 'Я',
                                '10': 'О',
                                '2': 'Ф',
                                '11': 'Н',
                                '3': 'М',
                                '12': 'Д',
                                '4': 'А',
                                '5': 'М',
                                '6': 'И',
                                '7': 'И',
                                '8': 'А',
                                '9': 'С'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'вторник',
                                'fri': 'пятница',
                                'sun': 'воскресенье',
                                'sat': 'суббота',
                                'wed': 'среда',
                                'mon': 'понедельник',
                                'thu': 'четверг'
                            },
                            'abbreviated': {
                                'tue': 'вт',
                                'fri': 'пт',
                                'sun': 'вс',
                                'sat': 'сб',
                                'wed': 'ср',
                                'mon': 'пн',
                                'thu': 'чт'
                            },
                            'narrow': {
                                'tue': 'вт',
                                'fri': 'пт',
                                'sun': 'вс',
                                'sat': 'сб',
                                'wed': 'ср',
                                'mon': 'пн',
                                'thu': 'чт'
                            },
                            'short': {
                                'tue': 'вт',
                                'fri': 'пт',
                                'sun': 'вс',
                                'sat': 'сб',
                                'wed': 'ср',
                                'mon': 'пн',
                                'thu': 'чт'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Вторник',
                                'fri': 'Пятница',
                                'sun': 'Воскресенье',
                                'sat': 'Суббота',
                                'wed': 'Среда',
                                'mon': 'Понедельник',
                                'thu': 'Четверг'
                            },
                            'abbreviated': {
                                'tue': 'Вт',
                                'fri': 'Пт',
                                'sun': 'Вс',
                                'sat': 'Сб',
                                'wed': 'Ср',
                                'mon': 'Пн',
                                'thu': 'Чт'
                            },
                            'narrow': {
                                'tue': 'В',
                                'fri': 'П',
                                'sun': 'В',
                                'sat': 'С',
                                'wed': 'С',
                                'mon': 'П',
                                'thu': 'Ч'
                            },
                            'short': {
                                'tue': 'вт',
                                'fri': 'пт',
                                'sun': 'вс',
                                'sat': 'сб',
                                'wed': 'ср',
                                'mon': 'пн',
                                'thu': 'чт'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'после полудня',
                                'am': 'до полудня'
                            },
                            'abbreviated': {
                                'pm': 'после полудня',
                                'am': 'до полудня'
                            },
                            'narrow': {
                                'pm': 'пп',
                                'am': 'дп'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'после полудня',
                                'am': 'до полудня'
                            },
                            'abbreviated': {
                                'pm': 'после полудня',
                                'am': 'до полудня'
                            },
                            'narrow': {
                                'pm': 'пп',
                                'am': 'дп'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'н.э.',
                            '0-alt-variant': 'BCE',
                            '0': 'до н.э.',
                            '1': 'н.э.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'н.э.',
                            '0-alt-variant': 'BCE',
                            '0': 'до н. э.',
                            '1': 'н. э.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'н.э.',
                            '0-alt-variant': 'BCE',
                            '0': 'до н.э.',
                            '1': 'н.э.'
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
                        'long': '{1}, {0}',
                        'availableFormats': {
                            'E': 'ccc',
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehm': 'E h:mm a',
                            'Md': 'dd.MM',
                            'Ehms': 'E h:mm:ss a',
                            'Gy': 'y G',
                            'yMd': 'dd.MM.y',
                            'yLLLL': 'LLLL y',
                            'MMMd': 'd MMM',
                            'MMdd': 'dd.MM',
                            'MEd': 'E, dd.MM',
                            'GyMMMd': 'd MMM y \'г\'. G',
                            'EHms': 'E HH:mm:ss',
                            'Ed': 'ccc, d',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'LLL y G',
                            'Hm': 'H:mm',
                            'H': 'H',
                            'yMEd': 'ccc, d.MM.y \'г\'.',
                            'MMMEd': 'ccc, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'H:mm:ss',
                            'yM': 'MM.y',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM.y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd MMM y \'г\'.',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMM': 'LLLL y',
                            'yQQQ': 'QQQ y \'г\'.',
                            'yQQQQ': 'QQQQ y \'г\'.'
                        },
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'H-H v'
                            },
                            'Hmv': {
                                'H': 'H:mm-H:mm v',
                                'm': 'H:mm-H:mm v'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd.MM - dd.MM',
                                'M': 'dd.MM - dd.MM'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'ccc, d - E, d MMM',
                                'M': 'ccc, d MMM - ccc, d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm-h:mm a',
                                'h': 'h:mm-h:mm a'
                            },
                            'yMEd': {
                                'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm-h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y \'г\'.',
                                'y': 'LLL y - LLL y \'г\'.'
                            },
                            'H': {
                                'H': 'H-H'
                            },
                            'Hm': {
                                'H': 'H:mm-H:mm',
                                'm': 'H:mm-H:mm'
                            },
                            'MMM': {
                                'M': 'LLL-MMM'
                            },
                            'yM': {
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y \'г\'.',
                                'M': 'd MMM - d MMM y \'г\'.',
                                'y': 'd MMM y - d MMM y \'г\'.'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'yMd': {
                                'd': 'dd.MM.y - dd.MM.y',
                                'M': 'dd.MM.y - dd.MM.y',
                                'y': 'dd.MM.y - dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM - E, dd.MM',
                                'M': 'E, dd.MM - E, dd.MM'
                            },
                            'y': {
                                'y': 'y-y'
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
