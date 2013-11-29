/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language sr}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('sr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'јан',
                                    '2': 'феб',
                                    '3': 'мар',
                                    '4': 'апр',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'авг',
                                    '9': 'сеп',
                                    '10': 'окт',
                                    '11': 'нов',
                                    '12': 'дец'
                                },
                                'narrow': {
                                    '1': 'ј',
                                    '2': 'ф',
                                    '3': 'м',
                                    '4': 'а',
                                    '5': 'м',
                                    '6': 'ј',
                                    '7': 'ј',
                                    '8': 'а',
                                    '9': 'с',
                                    '10': 'о',
                                    '11': 'н',
                                    '12': 'д'
                                },
                                'wide': {
                                    '1': 'јануар',
                                    '2': 'фебруар',
                                    '3': 'март',
                                    '4': 'април',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'август',
                                    '9': 'септембар',
                                    '10': 'октобар',
                                    '11': 'новембар',
                                    '12': 'децембар'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'јан',
                                    '2': 'феб',
                                    '3': 'мар',
                                    '4': 'апр',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'авг',
                                    '9': 'сеп',
                                    '10': 'окт',
                                    '11': 'нов',
                                    '12': 'дец'
                                },
                                'narrow': {
                                    '1': 'ј',
                                    '2': 'ф',
                                    '3': 'м',
                                    '4': 'а',
                                    '5': 'м',
                                    '6': 'ј',
                                    '7': 'ј',
                                    '8': 'а',
                                    '9': 'с',
                                    '10': 'о',
                                    '11': 'н',
                                    '12': 'д'
                                },
                                'wide': {
                                    '1': 'јануар',
                                    '2': 'фебруар',
                                    '3': 'март',
                                    '4': 'април',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'август',
                                    '9': 'септембар',
                                    '10': 'октобар',
                                    '11': 'новембар',
                                    '12': 'децембар'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'нед',
                                    'mon': 'пон',
                                    'tue': 'уто',
                                    'wed': 'сре',
                                    'thu': 'чет',
                                    'fri': 'пет',
                                    'sat': 'суб'
                                },
                                'narrow': {
                                    'sun': 'н',
                                    'mon': 'п',
                                    'tue': 'у',
                                    'wed': 'с',
                                    'thu': 'ч',
                                    'fri': 'п',
                                    'sat': 'с'
                                },
                                'short': {
                                    'sun': 'нед',
                                    'mon': 'пон',
                                    'tue': 'уто',
                                    'wed': 'сре',
                                    'thu': 'чет',
                                    'fri': 'пет',
                                    'sat': 'суб'
                                },
                                'wide': {
                                    'sun': 'недеља',
                                    'mon': 'понедељак',
                                    'tue': 'уторак',
                                    'wed': 'среда',
                                    'thu': 'четвртак',
                                    'fri': 'петак',
                                    'sat': 'субота'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'нед',
                                    'mon': 'пон',
                                    'tue': 'уто',
                                    'wed': 'сре',
                                    'thu': 'чет',
                                    'fri': 'пет',
                                    'sat': 'суб'
                                },
                                'narrow': {
                                    'sun': 'н',
                                    'mon': 'п',
                                    'tue': 'у',
                                    'wed': 'с',
                                    'thu': 'ч',
                                    'fri': 'п',
                                    'sat': 'с'
                                },
                                'short': {
                                    'sun': 'не',
                                    'mon': 'по',
                                    'tue': 'ут',
                                    'wed': 'ср',
                                    'thu': 'че',
                                    'fri': 'пе',
                                    'sat': 'су'
                                },
                                'wide': {
                                    'sun': 'недеља',
                                    'mon': 'понедељак',
                                    'tue': 'уторак',
                                    'wed': 'среда',
                                    'thu': 'четвртак',
                                    'fri': 'петак',
                                    'sat': 'субота'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': 'Прво тромесечје',
                                    '2': 'Друго тромесечје',
                                    '3': 'Треће тромесечје',
                                    '4': 'Четврто тромесечје'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': 'Прво тромесечје',
                                    '2': 'Друго тромесечје',
                                    '3': 'Треће тромесечје',
                                    '4': 'Четврто тромесечје'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'narrow': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'wide': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'narrow': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'wide': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Пре нове ере',
                                '1': 'Нове ере',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'п. н. е.',
                                '1': 'н. е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'п.н.е.',
                                '1': 'н.е.',
                                '0-alt-variant': 'BCE',
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
                                'd': 'd',
                                'Ed': 'E d.',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'MMM y. G',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'hh a',
                                'H': 'HH',
                                'hm': 'hh.mm a',
                                'Hm': 'HH.mm',
                                'hms': 'hh.mm.ss a',
                                'Hms': 'HH.mm.ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, M-d',
                                'MMdd': 'MM-dd',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMdd': 'dd.MMM',
                                'MMMEd': 'E d. MMM',
                                'MMMMd': 'd. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm.ss',
                                'y': 'y.',
                                'yM': 'y-M',
                                'yMd': 'd. M. y.',
                                'yMEd': 'E, d. M. y.',
                                'yMM': 'MM.y',
                                'yMMdd': 'dd.MM.y',
                                'yMMM': 'MMM y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMM': 'MMMM y.',
                                'yQQQ': 'QQQ. y',
                                'yQQQQ': 'QQQQ. y'
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
                                    'H': 'HH-HH'
                                },
                                'hm': {
                                    'a': 'h.mm a - h.mm a',
                                    'h': 'h.mm-h.mm a',
                                    'm': 'h.mm-h.mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hmv': {
                                    'a': 'h.mm a - h.mm a v',
                                    'h': 'h.mm-h.mm a v',
                                    'm': 'h.mm-h.mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'd.M - d.M',
                                    'M': 'd.M - d.M'
                                },
                                'MEd': {
                                    'd': 'E, d.M - E, d.M',
                                    'M': 'E, d.M - E, d.M'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'dd.-dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
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
                                    'M': 'y-MM – MM',
                                    'y': 'y-MM – y-MM'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HHmm;-HHmm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Време у земљи: {0}',
                    'regionFormat-type-daylight': '{0}, летње време',
                    'regionFormat-type-standard': '{0}, стандардно време',
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
