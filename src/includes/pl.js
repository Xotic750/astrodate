/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language pl}.
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
        AstroDate.lang('pl', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi',
                                    '5': 'maj',
                                    '6': 'cze',
                                    '7': 'lip',
                                    '8': 'sie',
                                    '9': 'wrz',
                                    '10': 'paź',
                                    '11': 'lis',
                                    '12': 'gru'
                                },
                                'narrow': {
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k',
                                    '5': 'm',
                                    '6': 'c',
                                    '7': 'l',
                                    '8': 's',
                                    '9': 'w',
                                    '10': 'p',
                                    '11': 'l',
                                    '12': 'g'
                                },
                                'wide': {
                                    '1': 'stycznia',
                                    '2': 'lutego',
                                    '3': 'marca',
                                    '4': 'kwietnia',
                                    '5': 'maja',
                                    '6': 'czerwca',
                                    '7': 'lipca',
                                    '8': 'sierpnia',
                                    '9': 'września',
                                    '10': 'października',
                                    '11': 'listopada',
                                    '12': 'grudnia'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi',
                                    '5': 'maj',
                                    '6': 'cze',
                                    '7': 'lip',
                                    '8': 'sie',
                                    '9': 'wrz',
                                    '10': 'paź',
                                    '11': 'lis',
                                    '12': 'gru'
                                },
                                'narrow': {
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k',
                                    '5': 'm',
                                    '6': 'c',
                                    '7': 'l',
                                    '8': 's',
                                    '9': 'w',
                                    '10': 'p',
                                    '11': 'l',
                                    '12': 'g'
                                },
                                'wide': {
                                    '1': 'styczeń',
                                    '2': 'luty',
                                    '3': 'marzec',
                                    '4': 'kwiecień',
                                    '5': 'maj',
                                    '6': 'czerwiec',
                                    '7': 'lipiec',
                                    '8': 'sierpień',
                                    '9': 'wrzesień',
                                    '10': 'październik',
                                    '11': 'listopad',
                                    '12': 'grudzień'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': 'Ś',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedziałek',
                                    'tue': 'wtorek',
                                    'wed': 'środa',
                                    'thu': 'czwartek',
                                    'fri': 'piątek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': 'Ś',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedziałek',
                                    'tue': 'wtorek',
                                    'wed': 'środa',
                                    'thu': 'czwartek',
                                    'fri': 'piątek',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I kwartał',
                                    '2': 'II kwartał',
                                    '3': 'III kwartał',
                                    '4': 'IV kwartał'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1 kw.',
                                    '2': '2 kw.',
                                    '3': '3 kw.',
                                    '4': '4 kw.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I kwartał',
                                    '2': 'II kwartał',
                                    '3': 'III kwartał',
                                    '4': 'IV kwartał'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'p.n.e.',
                                '1': 'n.e.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'p.n.e.',
                                '1': 'n.e.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'p.n.e.',
                                '1': 'n.e.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd.MM.y'
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
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd.MM',
                                'MEd': 'E, d.MM',
                                'MMdd': 'd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'd.MM.y',
                                'yMEd': 'E, d.MM.y',
                                'yMM': 'MM.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
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
                                    'm': 'h:mm-h:mm a v'
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
                                    'M': 'MM-MM'
                                },
                                'Md': {
                                    'd': 'dd.MM–dd.MM',
                                    'M': 'dd.MM–dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM – E, dd.MM',
                                    'M': 'E, dd.MM – E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'LLL–LLL'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM – E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd-dd.MM.y',
                                    'M': 'dd.MM-dd.MM.y',
                                    'y': 'dd.MM.y-dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d - E, d MMM y',
                                    'M': 'E, d MMM - E, d MMM y',
                                    'y': 'E, d MMM y - E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Czas: {0}',
                    'regionFormat-type-daylight': '{0} (czas letni)',
                    'regionFormat-type-standard': '{0} (czas standardowy)',
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
