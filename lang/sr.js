/* AstroDate Language: sr
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
        AstroDate.lang('sr', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'Прво тромесечје',
                                '2': 'Друго тромесечје',
                                '3': 'Треће тромесечје',
                                '4': 'Четврто тромесечје'
                            },
                            'abbreviated': {
                                '1': 'К1',
                                '2': 'К2',
                                '3': 'К3',
                                '4': 'К4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Прво тромесечје',
                                '2': 'Друго тромесечје',
                                '3': 'Треће тромесечје',
                                '4': 'Четврто тромесечје'
                            },
                            'abbreviated': {
                                '1': 'К1',
                                '2': 'К2',
                                '3': 'К3',
                                '4': 'К4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'јануар',
                                '10': 'октобар',
                                '2': 'фебруар',
                                '11': 'новембар',
                                '3': 'март',
                                '12': 'децембар',
                                '4': 'април',
                                '5': 'мај',
                                '6': 'јун',
                                '7': 'јул',
                                '8': 'август',
                                '9': 'септембар'
                            },
                            'abbreviated': {
                                '1': 'јан',
                                '10': 'окт',
                                '2': 'феб',
                                '11': 'нов',
                                '3': 'мар',
                                '12': 'дец',
                                '4': 'апр',
                                '5': 'мај',
                                '6': 'јун',
                                '7': 'јул',
                                '8': 'авг',
                                '9': 'сеп'
                            },
                            'narrow': {
                                '1': 'ј',
                                '10': 'о',
                                '2': 'ф',
                                '11': 'н',
                                '3': 'м',
                                '12': 'д',
                                '4': 'а',
                                '5': 'м',
                                '6': 'ј',
                                '7': 'ј',
                                '8': 'а',
                                '9': 'с'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'јануар',
                                '10': 'октобар',
                                '2': 'фебруар',
                                '11': 'новембар',
                                '3': 'март',
                                '12': 'децембар',
                                '4': 'април',
                                '5': 'мај',
                                '6': 'јун',
                                '7': 'јул',
                                '8': 'август',
                                '9': 'септембар'
                            },
                            'abbreviated': {
                                '1': 'јан',
                                '10': 'окт',
                                '2': 'феб',
                                '11': 'нов',
                                '3': 'мар',
                                '12': 'дец',
                                '4': 'апр',
                                '5': 'мај',
                                '6': 'јун',
                                '7': 'јул',
                                '8': 'авг',
                                '9': 'сеп'
                            },
                            'narrow': {
                                '1': 'ј',
                                '10': 'о',
                                '2': 'ф',
                                '11': 'н',
                                '3': 'м',
                                '12': 'д',
                                '4': 'а',
                                '5': 'м',
                                '6': 'ј',
                                '7': 'ј',
                                '8': 'а',
                                '9': 'с'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'уторак',
                                'fri': 'петак',
                                'sun': 'недеља',
                                'sat': 'субота',
                                'wed': 'среда',
                                'mon': 'понедељак',
                                'thu': 'четвртак'
                            },
                            'abbreviated': {
                                'tue': 'уто',
                                'fri': 'пет',
                                'sun': 'нед',
                                'sat': 'суб',
                                'wed': 'сре',
                                'mon': 'пон',
                                'thu': 'чет'
                            },
                            'narrow': {
                                'tue': 'у',
                                'fri': 'п',
                                'sun': 'н',
                                'sat': 'с',
                                'wed': 'с',
                                'mon': 'п',
                                'thu': 'ч'
                            },
                            'short': {
                                'tue': 'уто',
                                'fri': 'пет',
                                'sun': 'нед',
                                'sat': 'суб',
                                'wed': 'сре',
                                'mon': 'пон',
                                'thu': 'чет'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'уторак',
                                'fri': 'петак',
                                'sun': 'недеља',
                                'sat': 'субота',
                                'wed': 'среда',
                                'mon': 'понедељак',
                                'thu': 'четвртак'
                            },
                            'abbreviated': {
                                'tue': 'уто',
                                'fri': 'пет',
                                'sun': 'нед',
                                'sat': 'суб',
                                'wed': 'сре',
                                'mon': 'пон',
                                'thu': 'чет'
                            },
                            'narrow': {
                                'tue': 'у',
                                'fri': 'п',
                                'sun': 'н',
                                'sat': 'с',
                                'wed': 'с',
                                'mon': 'п',
                                'thu': 'ч'
                            },
                            'short': {
                                'tue': 'ут',
                                'fri': 'пе',
                                'sun': 'не',
                                'sat': 'су',
                                'wed': 'ср',
                                'mon': 'по',
                                'thu': 'че'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'поподне',
                                'am': 'пре подне'
                            },
                            'abbreviated': {
                                'pm': 'поподне',
                                'am': 'пре подне'
                            },
                            'narrow': {
                                'pm': 'поподне',
                                'am': 'пре подне'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'поподне',
                                'am': 'пре подне'
                            },
                            'abbreviated': {
                                'pm': 'поподне',
                                'am': 'пре подне'
                            },
                            'narrow': {
                                'pm': 'поподне',
                                'am': 'пре подне'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'Пре нове ере',
                            '1': 'Нове ере'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'п. н. е.',
                            '1': 'н. е.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'п.н.е.',
                            '1': 'н.е.'
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
                            'EHm': 'E, HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E d. MMMM',
                            'd': 'd',
                            'Ehms': 'E, h:mm:ss a',
                            'Ehm': 'E, h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d.',
                            'Gy': 'y. G',
                            'yMMdd': 'dd.MM.y',
                            'yMd': 'd. M. y.',
                            'MMMMdd': 'dd. MMMM',
                            'MMMd': 'd. MMM',
                            'MMdd': 'MM-dd',
                            'MEd': 'E, M-d',
                            'GyMMMd': 'd. MMM y. G',
                            'EHms': 'E, HH:mm:ss',
                            'hms': 'hh.mm.ss a',
                            'GyMMMEd': 'E, d. MMM y. G',
                            'h': 'hh a',
                            'GyMMM': 'MMM y. G',
                            'Hm': 'HH.mm',
                            'H': 'HH',
                            'yMEd': 'E, d. M. y.',
                            'MMMEd': 'E d. MMM',
                            'hm': 'hh.mm a',
                            'Hms': 'HH.mm.ss',
                            'yM': 'y-M',
                            'MMMMd': 'd. MMMM',
                            'MMM': 'LLL',
                            'yQQQ': 'QQQ. y',
                            'MMMdd': 'dd.MMM',
                            'ms': 'mm.ss',
                            'y': 'y.',
                            'yMM': 'MM.y',
                            'yMMM': 'MMM y.',
                            'yMMMd': 'd. MMM y.',
                            'yMMMEd': 'E, d. MMM y.',
                            'yMMMM': 'MMMM y.',
                            'yQQQQ': 'QQQQ. y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH-HH v'
                            },
                            'Hmv': {
                                'H': 'HH.mm-HH.mm v',
                                'm': 'HH.mm-HH.mm v'
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
                                'd': 'd.M - d.M',
                                'M': 'd.M - d.M'
                            },
                            'yMMMEd': {
                                'd': 'E, dd. - E, dd. MMM y.',
                                'M': 'E, dd. MMM - E, dd. MMM y.',
                                'y': 'E, dd. MMM y. - E, dd. MMM y.'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'MMMEd': {
                                'd': 'E, dd. - E, dd. MMM',
                                'M': 'E, dd. MMM - E, dd. MMM'
                            },
                            'hm': {
                                'a': 'h.mm a - h.mm a',
                                'm': 'h.mm-h.mm a',
                                'h': 'h.mm-h.mm a'
                            },
                            'yMEd': {
                                'd': 'E, d.M.y. - E, d.M.y.',
                                'M': 'E, d.M.y. - E, d.M.y.',
                                'y': 'E, d.M.y. - E, d.M.y.'
                            },
                            'hmv': {
                                'a': 'h.mm a - h.mm a v',
                                'm': 'h.mm-h.mm a v',
                                'h': 'h.mm-h.mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM y.',
                                'y': 'MMM y. - MMM y.'
                            },
                            'H': {
                                'H': 'HH-HH'
                            },
                            'Hm': {
                                'H': 'HH.mm-HH.mm',
                                'm': 'HH.mm-HH.mm'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'yM': {
                                'M': 'y M - M',
                                'y': 'y M - M'
                            },
                            'yMMMd': {
                                'd': 'dd.-dd. MMM y.',
                                'M': 'dd. MMM - dd. MMM y.',
                                'y': 'dd. MMM y. - dd. MMM y.'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
                            },
                            'yMd': {
                                'd': 'd.M.y. - d.M.y.',
                                'M': 'd.M.y. - d.M.y.',
                                'y': 'd.M.y. - d.M.y.'
                            },
                            'MMMd': {
                                'd': 'dd.-dd. MMM',
                                'M': 'dd. MMM - dd. MMM'
                            },
                            'MEd': {
                                'd': 'E, d.M - E, d.M',
                                'M': 'E, d.M - E, d.M'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'y-MM – MM',
                                'y': 'y-MM – y-MM'
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
