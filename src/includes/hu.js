/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language hu}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9317
 * timeZoneNames: 24r9317
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
        AstroDate.lang('hu', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'márc.',
                                    '4': 'ápr.',
                                    '5': 'máj.',
                                    '6': 'jún.',
                                    '7': 'júl.',
                                    '8': 'aug.',
                                    '9': 'szept.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'Á',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'Sz',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'január',
                                    '2': 'február',
                                    '3': 'március',
                                    '4': 'április',
                                    '5': 'május',
                                    '6': 'június',
                                    '7': 'július',
                                    '8': 'augusztus',
                                    '9': 'szeptember',
                                    '10': 'október',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'márc.',
                                    '4': 'ápr.',
                                    '5': 'máj.',
                                    '6': 'jún.',
                                    '7': 'júl.',
                                    '8': 'aug.',
                                    '9': 'szept.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'Á',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'Sz',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'január',
                                    '2': 'február',
                                    '3': 'március',
                                    '4': 'április',
                                    '5': 'május',
                                    '6': 'június',
                                    '7': 'július',
                                    '8': 'augusztus',
                                    '9': 'szeptember',
                                    '10': 'október',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vasárnap',
                                    'mon': 'hétfő',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'csütörtök',
                                    'fri': 'péntek',
                                    'sat': 'szombat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vasárnap',
                                    'mon': 'hétfő',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'csütörtök',
                                    'fri': 'péntek',
                                    'sat': 'szombat'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': 'I. negyedév',
                                    '2': 'II. negyedév',
                                    '3': 'III. negyedév',
                                    '4': 'IV. negyedév'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. negyedév',
                                    '2': '2. negyedév',
                                    '3': '3. negyedév',
                                    '4': '4. negyedév'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'időszámításunk előtt',
                                '1': 'időszámításunk szerint',
                                '0-alt-variant': 'Kr. e.',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraAbbr': {
                                '0': 'i. e.',
                                '1': 'i. sz.',
                                '0-alt-variant': 'Kr. e.',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraNarrow': {
                                '0': 'ie.',
                                '1': 'isz.',
                                '0-alt-variant': 'Kr. e.',
                                '1-alt-variant': 'Kr. u.'
                            }
                        },
                        'dateFormats': {
                            'full': 'y. MMMM d., EEEE',
                            'long': 'y. MMMM d.',
                            'medium': 'y MMM d',
                            'short': 'y. MM. dd.'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'd., E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y.',
                                'GyMMM': 'G y. MMM',
                                'GyMMMd': 'G y. MMM d.',
                                'GyMMMEd': 'G y. MMM d., E',
                                'h': 'a h',
                                'H': 'H',
                                'hm': 'a h:mm',
                                'Hm': 'H:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'M. d.',
                                'MEd': 'M. d., E',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d.',
                                'MMMEd': 'MMM d., E',
                                'MMMMd': 'MMMM d.',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y.',
                                'yM': 'y. M.',
                                'yMd': 'y. MM. dd.',
                                'yMEd': 'y. MM. dd., E',
                                'yMMM': 'y. MMM',
                                'yMMMd': 'y. MMM d.',
                                'yMMMEd': 'y. MMM d., E',
                                'yMMMM': 'y. MMMM',
                                'yQQQ': 'y. QQQ',
                                'yQQQQ': 'y. QQQQ'
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
                                    'd': 'd–d.'
                                },
                                'h': {
                                    'a': 'a h – a h',
                                    'h': 'a h–h'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'hm': {
                                    'a': 'a h:mm – a h:mm',
                                    'h': 'a h:mm–h:mm',
                                    'm': 'a h:mm–h:mm'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm – a h:mm v',
                                    'h': 'a h:mm–h:mm v',
                                    'm': 'a h:mm–h:mm v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'a h – a h v',
                                    'h': 'a h–h v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M.'
                                },
                                'Md': {
                                    'd': 'M. d–d.',
                                    'M': 'M. d. – M. d.'
                                },
                                'MEd': {
                                    'd': 'M. dd., E – M. d., E',
                                    'M': 'M. d., E – M. d., E'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'MMM d–d.',
                                    'M': 'MMM d. – MMM d.'
                                },
                                'MMMEd': {
                                    'd': 'MMM d., E – d., E',
                                    'M': 'MMM d., E – MMM d., E'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'y. MM–MM.',
                                    'y': 'y. MM. – y. MM.'
                                },
                                'yMd': {
                                    'd': 'y. MM. dd–dd.',
                                    'M': 'y. MM. dd. – MM. dd.',
                                    'y': 'y. MM. dd. – y. MM. dd.'
                                },
                                'yMEd': {
                                    'd': 'y. MM. dd., E – dd., E',
                                    'M': 'y. MM. dd., E – MM. dd., E',
                                    'y': 'y. MM. dd., E – y. MM. dd., E'
                                },
                                'yMMM': {
                                    'M': 'y. MMM–MMM',
                                    'y': 'y. MMM – y. MMM'
                                },
                                'yMMMd': {
                                    'd': 'y. MMM d–d.',
                                    'M': 'y. MMM d. – MMM d.',
                                    'y': 'y. MMM d. – y. MMM d.'
                                },
                                'yMMMEd': {
                                    'd': 'y. MMM d., E – d., E',
                                    'M': 'y. MMM d., E – MMM d., E',
                                    'y': 'y. MMM d., E – y. MMM d., E'
                                },
                                'yMMMM': {
                                    'M': 'y. MMMM–MMMM',
                                    'y': 'y. MMMM – y. MMMM'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} idő',
                    'regionFormat-type-daylight': '{0} nyári idő',
                    'regionFormat-type-standard': '{0} zónaidő',
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
