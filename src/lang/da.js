/**
 * @file {@link https://github.com/Xotic750/astrodate da}. Language file for AstroDate.
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
        AstroDate.lang('da', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': 'Tidszone for {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH.mm;-HH.mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'maj',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'sep.',
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.'
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
                                    '8': 'august',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marts',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
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
                                    '8': 'august',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marts',
                                    '4': 'april'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 's\u00F8n.',
                                    'mon': 'man.',
                                    'tue': 'tir.',
                                    'wed': 'ons.',
                                    'thu': 'tor.',
                                    'fri': 'fre.',
                                    'sat': 'l\u00F8r.'
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
                                    'sun': 's\u00F8',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'l\u00F8'
                                },
                                'wide': {
                                    'sun': 's\u00F8ndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F8rdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 's\u00F8n',
                                    'mon': 'man',
                                    'tue': 'tir',
                                    'wed': 'ons',
                                    'thu': 'tor',
                                    'fri': 'fre',
                                    'sat': 'l\u00F8r'
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
                                    'sun': 's\u00F8',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'l\u00F8'
                                },
                                'wide': {
                                    'sun': 's\u00F8ndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F8rdag'
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
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
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
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'formiddag',
                                    'noon': 'middag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f\u00F8r vesterlandsk tidsregning',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'vesterlandsk tidsregning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'fKr',
                                '0-alt-variant': 'fvt',
                                '1': 'eKr',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE \'den\' d. MMMM y',
                            'long': 'd. MMM y',
                            'medium': 'dd/MM/y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'kl.\' {0}',
                            'long': '{1} \'kl.\' {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'd. MMM y',
                                'yMMM': 'MMM y',
                                'yMM': 'MM/y',
                                'Ehms': 'E h.mm.ss a',
                                'EHm': 'E HH.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E \'d\'. d.',
                                'd': 'd.',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMEd': 'E d. MMM y',
                                'Hms': 'HH.mm.ss',
                                'hms': 'h.mm.ss a',
                                'Hm': 'HH.mm',
                                'hm': 'h.mm a',
                                'H': 'HH',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'M',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMdd': 'dd/MM',
                                'MMM': 'MMM',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E d. MMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm.ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y'
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
                                    'd': 'E \'den\' d. \u2013 E \'den\' d. MMM',
                                    'M': 'E \'den\' d. MMM \u2013 E \'den\' d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. MMM',
                                    'M': 'd. MMM \u2013 d. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM \u2013 E dd/MM',
                                    'M': 'E dd/MM \u2013 E dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM \u2013 dd/MM',
                                    'M': 'dd/MM \u2013 dd/MM'
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
                                    'M': 'MM/y \u2013 MM/y',
                                    'y': 'MM/y \u2013 MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y \u2013 dd/MM/y',
                                    'M': 'dd/MM/y \u2013 dd/MM/y',
                                    'y': 'dd/MM/y \u2013 dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y \u2013 E dd/MM/y',
                                    'M': 'E dd/MM/y \u2013 E dd/MM/y',
                                    'y': 'E dd/MM/y \u2013 E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. MMM y',
                                    'M': 'd. MMM \u2013 d. MMM y',
                                    'y': 'd. MMM y \u2013 d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E \'den\' d. \u2013 E \'den\' d. MMM y',
                                    'M': 'E \'den\' d. MMM \u2013 E \'den\' d. MMM y',
                                    'y': 'E \'den\' d. MMM y \u2013 E \'den\' d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH.mm\u2013HH.mm v',
                                    'm': 'HH.mm\u2013HH.mm v'
                                },
                                'hmv': {
                                    'a': 'h.mm a \u2013 h.mm a v',
                                    'h': 'h.mm\u2013h.mm a v',
                                    'm': 'h.mm\u2013h.mm a v'
                                },
                                'Hm': {
                                    'H': 'HH.mm\u2013HH.mm',
                                    'm': 'HH.mm\u2013HH.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a \u2013 h.mm a',
                                    'h': 'h.mm\u2013h.mm a',
                                    'm': 'h.mm\u2013h.mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd.\u2013d.'
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
