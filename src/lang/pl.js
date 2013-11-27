/**
 * @file {@link https://github.com/Xotic750/astrodate pl}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * units:
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
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('pl', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (czas standardowy)',
                    'regionFormat-type-daylight': '{0} (czas letni)',
                    'regionFormat': 'Czas: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'sie',
                                    '7': 'lip',
                                    '6': 'cze',
                                    '5': 'maj',
                                    '12': 'gru',
                                    '11': 'lis',
                                    '10': 'pa\u017A',
                                    '9': 'wrz',
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi'
                                },
                                'narrow': {
                                    '8': 's',
                                    '7': 'l',
                                    '6': 'c',
                                    '5': 'm',
                                    '12': 'g',
                                    '11': 'l',
                                    '10': 'p',
                                    '9': 'w',
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k'
                                },
                                'wide': {
                                    '8': 'sierpnia',
                                    '7': 'lipca',
                                    '6': 'czerwca',
                                    '5': 'maja',
                                    '12': 'grudnia',
                                    '11': 'listopada',
                                    '10': 'pa\u017Adziernika',
                                    '9': 'wrze\u015Bnia',
                                    '1': 'stycznia',
                                    '2': 'lutego',
                                    '3': 'marca',
                                    '4': 'kwietnia'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'sie',
                                    '7': 'lip',
                                    '6': 'cze',
                                    '5': 'maj',
                                    '12': 'gru',
                                    '11': 'lis',
                                    '10': 'pa\u017A',
                                    '9': 'wrz',
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi'
                                },
                                'narrow': {
                                    '8': 's',
                                    '7': 'l',
                                    '6': 'c',
                                    '5': 'm',
                                    '12': 'g',
                                    '11': 'l',
                                    '10': 'p',
                                    '9': 'w',
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k'
                                },
                                'wide': {
                                    '8': 'sierpie\u0144',
                                    '7': 'lipiec',
                                    '6': 'czerwiec',
                                    '5': 'maj',
                                    '12': 'grudzie\u0144',
                                    '11': 'listopad',
                                    '10': 'pa\u017Adziernik',
                                    '9': 'wrzesie\u0144',
                                    '1': 'stycze\u0144',
                                    '2': 'luty',
                                    '3': 'marzec',
                                    '4': 'kwiecie\u0144'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': '\u015A',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedzia\u0142ek',
                                    'tue': 'wtorek',
                                    'wed': '\u015Broda',
                                    'thu': 'czwartek',
                                    'fri': 'pi\u0105tek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': '\u015A',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedzia\u0142ek',
                                    'tue': 'wtorek',
                                    'wed': '\u015Broda',
                                    'thu': 'czwartek',
                                    'fri': 'pi\u0105tek',
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
                                    '1': 'I kwarta\u0142',
                                    '2': 'II kwarta\u0142',
                                    '3': 'III kwarta\u0142',
                                    '4': 'IV kwarta\u0142'
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
                                    '1': 'I kwarta\u0142',
                                    '2': 'II kwarta\u0142',
                                    '3': 'III kwarta\u0142',
                                    '4': 'IV kwarta\u0142'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'narrow': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'wide': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'narrow': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'wide': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'p.n.e.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.e.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'p.n.e.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.e.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'p.n.e.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.e.',
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
                                'yMMMd': 'd MMM y',
                                'yMMM': 'LLL y',
                                'yMM': 'MM.y',
                                'yMEd': 'E, d.MM.y',
                                'EHm': 'E, HH:mm',
                                'Ehm': 'E, h:mm a',
                                'Ed': 'E, d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
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
                                'yMd': 'd.MM.y'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{1} {0}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'E, d MMM \u2013 E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM \u2013 E, dd.MM',
                                    'M': 'E, dd.MM \u2013 E, dd.MM'
                                },
                                'Md': {
                                    'd': 'dd.MM\u2013dd.MM',
                                    'M': 'dd.MM\u2013dd.MM'
                                },
                                'M': {
                                    'M': 'MM-MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
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
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm\u2013h:mm a',
                                    'm': 'h:mm\u2013h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
                            }
                        }
                    }
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
