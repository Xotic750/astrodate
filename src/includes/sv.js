/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language sv}.
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
        AstroDate.lang('sv', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'maj',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'mars',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'augusti',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr',
                                    '5': 'Maj',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Okt',
                                    '11': 'Nov',
                                    '12': 'Dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Januari',
                                    '2': 'Februari',
                                    '3': 'Mars',
                                    '4': 'April',
                                    '5': 'Maj',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'Augusti',
                                    '9': 'September',
                                    '10': 'Oktober',
                                    '11': 'November',
                                    '12': 'December'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'sön',
                                    'mon': 'mån',
                                    'tue': 'tis',
                                    'wed': 'ons',
                                    'thu': 'tors',
                                    'fri': 'fre',
                                    'sat': 'lör'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'sö',
                                    'mon': 'må',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'lö'
                                },
                                'wide': {
                                    'sun': 'söndag',
                                    'mon': 'måndag',
                                    'tue': 'tisdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'lördag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sön',
                                    'mon': 'Mån',
                                    'tue': 'Tis',
                                    'wed': 'Ons',
                                    'thu': 'Tor',
                                    'fri': 'Fre',
                                    'sat': 'Lör'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'Sö',
                                    'mon': 'Må',
                                    'tue': 'Ti',
                                    'wed': 'On',
                                    'thu': 'To',
                                    'fri': 'Fr',
                                    'sat': 'Lö'
                                },
                                'wide': {
                                    'sun': 'Söndag',
                                    'mon': 'Måndag',
                                    'tue': 'Tisdag',
                                    'wed': 'Onsdag',
                                    'thu': 'Torsdag',
                                    'fri': 'Fredag',
                                    'sat': 'Lördag'
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
                                    '1': '1:a kvartalet',
                                    '2': '2:a kvartalet',
                                    '3': '3:e kvartalet',
                                    '4': '4:e kvartalet'
                                }
                            },
                            'stand-alone': {
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
                                    '1': '1:a kvartalet',
                                    '2': '2:a kvartalet',
                                    '3': '3:e kvartalet',
                                    '4': '4:e kvartalet'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'FM',
                                    'pm': 'EM'
                                },
                                'narrow': {
                                    'am': 'f',
                                    'pm': 'e'
                                },
                                'wide': {
                                    'am': 'fm',
                                    'pm': 'em'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'fm',
                                    'pm': 'em'
                                },
                                'narrow': {
                                    'am': 'f.m.',
                                    'pm': 'e.m.'
                                },
                                'wide': {
                                    'am': 'förmiddag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'före Kristus',
                                '1': 'efter Kristus',
                                '0-alt-variant': 'före västerländsk tideräkning',
                                '1-alt-variant': 'västerländsk tideräkning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'fvt',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE\'en\' \'den\' d:\'e\' MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'y-MM-dd'
                        },
                        'timeFormats': {
                            'full': '\'kl\'. HH:mm:ss zzzz',
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
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMd': 'd/M',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd:\'e\' MMMM',
                                'MMMMEd': 'E d:\'e\' MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'y-MM',
                                'yMd': 'y-MM-dd',
                                'yMEd': 'E, y-MM-dd',
                                'yMM': 'y-MM',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
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
                                    'd': 'd–d/M',
                                    'M': 'd/M – d/M'
                                },
                                'MEd': {
                                    'd': 'E d/M – E d/M',
                                    'M': 'E d/M – E d/M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d – E d MMM',
                                    'M': 'E d MMM – E d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'y-MM – MM',
                                    'y': 'y-MM – y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd – dd',
                                    'M': 'y-MM-dd – MM-dd',
                                    'y': 'y-MM-dd – y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'E, y-MM-dd – E, y-MM-dd',
                                    'M': 'E, y-MM-dd – E, y-MM-dd',
                                    'y': 'E, y-MM-dd – E, y-MM-dd'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM–d MMM y',
                                    'y': 'd MMM y–d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E dd MMM–E dd MMM y',
                                    'M': 'E dd MMM–E dd MMM y',
                                    'y': 'E dd MMM y–E dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;−HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}tid',
                    'regionFormat-type-daylight': '{0} (sommartid)',
                    'regionFormat-type-standard': '{0} (normaltid)',
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
