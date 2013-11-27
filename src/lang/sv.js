/**
 * @file {@link https://github.com/Xotic750/astrodate sv}. Language file for AstroDate.
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
        AstroDate.lang('sv', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (normaltid)',
                    'regionFormat-type-daylight': '{0} (sommartid)',
                    'regionFormat': '{0}tid',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;\u2212HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'maj',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'augusti',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'mars',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'Maj',
                                    '12': 'Dec',
                                    '11': 'Nov',
                                    '10': 'Okt',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'Augusti',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Maj',
                                    '12': 'December',
                                    '11': 'November',
                                    '10': 'Oktober',
                                    '9': 'September',
                                    '1': 'Januari',
                                    '2': 'Februari',
                                    '3': 'Mars',
                                    '4': 'April'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 's\u00F6n',
                                    'mon': 'm\u00E5n',
                                    'tue': 'tis',
                                    'wed': 'ons',
                                    'thu': 'tors',
                                    'fri': 'fre',
                                    'sat': 'l\u00F6r'
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
                                    'sun': 's\u00F6',
                                    'mon': 'm\u00E5',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'l\u00F6'
                                },
                                'wide': {
                                    'sun': 's\u00F6ndag',
                                    'mon': 'm\u00E5ndag',
                                    'tue': 'tisdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F6rdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'S\u00F6n',
                                    'mon': 'M\u00E5n',
                                    'tue': 'Tis',
                                    'wed': 'Ons',
                                    'thu': 'Tor',
                                    'fri': 'Fre',
                                    'sat': 'L\u00F6r'
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
                                    'sun': 'S\u00F6',
                                    'mon': 'M\u00E5',
                                    'tue': 'Ti',
                                    'wed': 'On',
                                    'thu': 'To',
                                    'fri': 'Fr',
                                    'sat': 'L\u00F6'
                                },
                                'wide': {
                                    'sun': 'S\u00F6ndag',
                                    'mon': 'M\u00E5ndag',
                                    'tue': 'Tisdag',
                                    'wed': 'Onsdag',
                                    'thu': 'Torsdag',
                                    'fri': 'Fredag',
                                    'sat': 'L\u00F6rdag'
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
                                    'am': 'f\u00F6rmiddag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f\u00F6re Kristus',
                                '0-alt-variant': 'f\u00F6re v\u00E4sterl\u00E4ndsk tider\u00E4kning',
                                '1': 'efter Kristus',
                                '1-alt-variant': 'v\u00E4sterl\u00E4ndsk tider\u00E4kning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'fvt',
                                '1': 'e.Kr.',
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
                                'yMM': 'y-MM',
                                'yMEd': 'E, y-MM-dd',
                                'yMd': 'y-MM-dd',
                                'yM': 'y-MM',
                                'y': 'y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'yMMMEd': 'E d MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMM': 'MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
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
                                'ms': 'mm:ss'
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
                                    'd': 'E d \u2013 E d MMM',
                                    'M': 'E d MMM \u2013 E d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E d/M \u2013 E d/M',
                                    'M': 'E d/M \u2013 E d/M'
                                },
                                'Md': {
                                    'd': 'd\u2013d/M',
                                    'M': 'd/M \u2013 d/M'
                                },
                                'M': {
                                    'M': 'M\u2013M'
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
                                    'M': 'y-MM \u2013 MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd \u2013 dd',
                                    'M': 'y-MM-dd \u2013 MM-dd',
                                    'y': 'y-MM-dd \u2013 y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'E, y-MM-dd \u2013 E, y-MM-dd',
                                    'M': 'E, y-MM-dd \u2013 E, y-MM-dd',
                                    'y': 'E, y-MM-dd \u2013 E, y-MM-dd'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM\u2013d MMM y',
                                    'y': 'd MMM y\u2013d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E dd MMM\u2013E dd MMM y',
                                    'M': 'E dd MMM\u2013E dd MMM y',
                                    'y': 'E dd MMM y\u2013E dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
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
