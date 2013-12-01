/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language el}.
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
        AstroDate.lang('el', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Ιαν',
                                    '2': 'Φεβ',
                                    '3': 'Μαρ',
                                    '4': 'Απρ',
                                    '5': 'Μαΐ',
                                    '6': 'Ιουν',
                                    '7': 'Ιουλ',
                                    '8': 'Αυγ',
                                    '9': 'Σεπ',
                                    '10': 'Οκτ',
                                    '11': 'Νοε',
                                    '12': 'Δεκ'
                                },
                                'narrow': {
                                    '1': 'Ι',
                                    '2': 'Φ',
                                    '3': 'Μ',
                                    '4': 'Α',
                                    '5': 'Μ',
                                    '6': 'Ι',
                                    '7': 'Ι',
                                    '8': 'Α',
                                    '9': 'Σ',
                                    '10': 'Ο',
                                    '11': 'Ν',
                                    '12': 'Δ'
                                },
                                'wide': {
                                    '1': 'Ιανουαρίου',
                                    '2': 'Φεβρουαρίου',
                                    '3': 'Μαρτίου',
                                    '4': 'Απριλίου',
                                    '5': 'Μαΐου',
                                    '6': 'Ιουνίου',
                                    '7': 'Ιουλίου',
                                    '8': 'Αυγούστου',
                                    '9': 'Σεπτεμβρίου',
                                    '10': 'Οκτωβρίου',
                                    '11': 'Νοεμβρίου',
                                    '12': 'Δεκεμβρίου'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Ιαν',
                                    '2': 'Φεβ',
                                    '3': 'Μάρ',
                                    '4': 'Απρ',
                                    '5': 'Μάι',
                                    '6': 'Ιούν',
                                    '7': 'Ιούλ',
                                    '8': 'Αύγ',
                                    '9': 'Σεπ',
                                    '10': 'Οκτ',
                                    '11': 'Νοέ',
                                    '12': 'Δεκ'
                                },
                                'narrow': {
                                    '1': 'Ι',
                                    '2': 'Φ',
                                    '3': 'Μ',
                                    '4': 'Α',
                                    '5': 'Μ',
                                    '6': 'Ι',
                                    '7': 'Ι',
                                    '8': 'Α',
                                    '9': 'Σ',
                                    '10': 'Ο',
                                    '11': 'Ν',
                                    '12': 'Δ'
                                },
                                'wide': {
                                    '1': 'Ιανουάριος',
                                    '2': 'Φεβρουάριος',
                                    '3': 'Μάρτιος',
                                    '4': 'Απρίλιος',
                                    '5': 'Μάιος',
                                    '6': 'Ιούνιος',
                                    '7': 'Ιούλιος',
                                    '8': 'Αύγουστος',
                                    '9': 'Σεπτέμβριος',
                                    '10': 'Οκτώβριος',
                                    '11': 'Νοέμβριος',
                                    '12': 'Δεκέμβριος'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Κυρ',
                                    'mon': 'Δευ',
                                    'tue': 'Τρί',
                                    'wed': 'Τετ',
                                    'thu': 'Πέμ',
                                    'fri': 'Παρ',
                                    'sat': 'Σάβ'
                                },
                                'narrow': {
                                    'sun': 'Κ',
                                    'mon': 'Δ',
                                    'tue': 'Τ',
                                    'wed': 'Τ',
                                    'thu': 'Π',
                                    'fri': 'Π',
                                    'sat': 'Σ'
                                },
                                'short': {
                                    'sun': 'Κυ',
                                    'mon': 'Δε',
                                    'tue': 'Τρ',
                                    'wed': 'Τε',
                                    'thu': 'Πέ',
                                    'fri': 'Πα',
                                    'sat': 'Σά'
                                },
                                'wide': {
                                    'sun': 'Κυριακή',
                                    'mon': 'Δευτέρα',
                                    'tue': 'Τρίτη',
                                    'wed': 'Τετάρτη',
                                    'thu': 'Πέμπτη',
                                    'fri': 'Παρασκευή',
                                    'sat': 'Σάββατο'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Κυρ',
                                    'mon': 'Δευ',
                                    'tue': 'Τρί',
                                    'wed': 'Τετ',
                                    'thu': 'Πέμ',
                                    'fri': 'Παρ',
                                    'sat': 'Σάβ'
                                },
                                'narrow': {
                                    'sun': 'Κ',
                                    'mon': 'Δ',
                                    'tue': 'Τ',
                                    'wed': 'Τ',
                                    'thu': 'Π',
                                    'fri': 'Π',
                                    'sat': 'Σ'
                                },
                                'short': {
                                    'sun': 'Κυ',
                                    'mon': 'Δε',
                                    'tue': 'Τρ',
                                    'wed': 'Τε',
                                    'thu': 'Πέ',
                                    'fri': 'Πα',
                                    'sat': 'Σά'
                                },
                                'wide': {
                                    'sun': 'Κυριακή',
                                    'mon': 'Δευτέρα',
                                    'tue': 'Τρίτη',
                                    'wed': 'Τετάρτη',
                                    'thu': 'Πέμπτη',
                                    'fri': 'Παρασκευή',
                                    'sat': 'Σάββατο'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Τ1',
                                    '2': 'Τ2',
                                    '3': 'Τ3',
                                    '4': 'Τ4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1ο τρίμηνο',
                                    '2': '2ο τρίμηνο',
                                    '3': '3ο τρίμηνο',
                                    '4': '4ο τρίμηνο'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Τ1',
                                    '2': 'Τ2',
                                    '3': 'Τ3',
                                    '4': 'Τ4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1ο τρίμηνο',
                                    '2': '2ο τρίμηνο',
                                    '3': '3ο τρίμηνο',
                                    '4': '4ο τρίμηνο'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'narrow': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'wide': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'narrow': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'wide': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'π.Χ.',
                                '1': 'μ.Χ.',
                                '0-alt-variant': 'π.Κ.Χ.',
                                '1-alt-variant': 'ΚΧ'
                            },
                            'eraAbbr': {
                                '0': 'π.Χ.',
                                '1': 'μ.Χ.',
                                '0-alt-variant': 'π.Κ.Χ.',
                                '1-alt-variant': 'ΚΧ'
                            },
                            'eraNarrow': {
                                '0': 'π.Χ.',
                                '1': 'μ.Χ.',
                                '0-alt-variant': 'π.Κ.Χ.',
                                '1-alt-variant': 'ΚΧ'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} - {0}',
                            'long': '{1} - {0}',
                            'medium': '{1} - {0}',
                            'short': '{1} - {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
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
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'dd-dd MMM',
                                    'M': 'dd MMM - dd MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, dd - E, dd MMM',
                                    'M': 'E, dd MMM - E, dd MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'dd-dd MMM y',
                                    'M': 'dd MMM - dd MMM y',
                                    'y': 'dd MMM y - dd MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd MMM - E, dd MMM y',
                                    'M': 'E, dd MMM - E, dd MMM y',
                                    'y': 'E, dd MMM y - E, dd MMM y'
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
                    'regionFormat': 'Ώρα ({0})',
                    'regionFormat-type-daylight': 'Θερινή ώρα ({0})',
                    'regionFormat-type-standard': 'Χειμερινή ώρα ({0})',
                    'fallbackFormat': '[{1} ({0})]'
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
