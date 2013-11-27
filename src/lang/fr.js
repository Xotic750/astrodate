/**
 * @file {@link https://github.com/Xotic750/astrodate fr}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9310
 * timeZoneNames: 24r9310
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
        AstroDate.lang('fr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (heure standard)',
                    'regionFormat-type-daylight': '{0} (heure d\u2019\u00E9t\u00E9)',
                    'regionFormat': 'heure : {0}',
                    'gmtZeroFormat': 'UTC',
                    'gmtFormat': 'UTC{0}',
                    'hourFormat': '+HH:mm;\u2212HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'ao\u00FBt',
                                    '7': 'juil.',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9c.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'janv.',
                                    '2': 'f\u00E9vr.',
                                    '3': 'mars',
                                    '4': 'avr.'
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
                                    '8': 'ao\u00FBt',
                                    '7': 'juillet',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9cembre',
                                    '11': 'novembre',
                                    '10': 'octobre',
                                    '9': 'septembre',
                                    '1': 'janvier',
                                    '2': 'f\u00E9vrier',
                                    '3': 'mars',
                                    '4': 'avril'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'ao\u00FBt',
                                    '7': 'juil.',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9c.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'janv.',
                                    '2': 'f\u00E9vr.',
                                    '3': 'mars',
                                    '4': 'avr.'
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
                                    '8': 'ao\u00FBt',
                                    '7': 'juillet',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9cembre',
                                    '11': 'novembre',
                                    '10': 'octobre',
                                    '9': 'septembre',
                                    '1': 'janvier',
                                    '2': 'f\u00E9vrier',
                                    '3': 'mars',
                                    '4': 'avril'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'di',
                                    'mon': 'lu',
                                    'tue': 'ma',
                                    'wed': 'me',
                                    'thu': 'je',
                                    'fri': 've',
                                    'sat': 'sa'
                                },
                                'wide': {
                                    'sun': 'dimanche',
                                    'mon': 'lundi',
                                    'tue': 'mardi',
                                    'wed': 'mercredi',
                                    'thu': 'jeudi',
                                    'fri': 'vendredi',
                                    'sat': 'samedi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'wide': {
                                    'sun': 'dimanche',
                                    'mon': 'lundi',
                                    'tue': 'mardi',
                                    'wed': 'mercredi',
                                    'thu': 'jeudi',
                                    'fri': 'vendredi',
                                    'sat': 'samedi'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1er trimestre',
                                    '2': '2e trimestre',
                                    '3': '3e trimestre',
                                    '4': '4e trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1er trimestre',
                                    '2': '2e trimestre',
                                    '3': '3e trimestre',
                                    '4': '4e trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'ap.m.',
                                    'am': 'AM',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'ap.-m.',
                                    'am': 'a',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'apr\u00E8s-midi',
                                    'am': 'AM',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'ap.m.',
                                    'am': 'av.m.',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'ap.m.'
                                },
                                'narrow': {
                                    'afternoon': 'ap.-m.',
                                    'am': 'a',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'apr\u00E8s-midi',
                                    'am': 'avant-midi',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'apr\u00E8s-midi'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'avant J\u00E9sus-Christ',
                                '0-alt-variant': 'AEC',
                                '1': 'apr\u00E8s J\u00E9sus-Christ',
                                '1-alt-variant': 'EC'
                            },
                            'eraAbbr': {
                                '0': 'av. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1': 'ap. J.-C.',
                                '1-alt-variant': 'EC'
                            },
                            'eraNarrow': {
                                '0': 'av. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1': 'ap. J.-C.',
                                '1-alt-variant': 'EC'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd/MM/y'
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
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yQQQ': 'QQQ y',
                                'Gy': 'y G',
                                'EHms': 'E HH:mm:ss',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'yQQQQ': 'QQQQ y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH \'h\'',
                                'h': 'h a',
                                'GyMMMEd': 'E d MMM y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yMMMM': 'MMMM y'
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
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM \u2013 dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'HH \u2013 HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h \u2013 h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM/y \u2013 MM/y',
                                    'y': 'M/y \u2013 M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y \u2013 d/M/y',
                                    'M': 'd/M/y \u2013 d/M/y',
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
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d \u2013 E d MMM y',
                                    'M': 'E d MMM \u2013 E d MMM y',
                                    'y': 'E d MMM y \u2013 E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm \u2013 HH:mm v',
                                    'm': 'HH:mm \u2013 HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm \u2013 h:mm a v',
                                    'm': 'h:mm \u2013 h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm \u2013 HH:mm',
                                    'm': 'HH:mm \u2013 HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm \u2013 h:mm a',
                                    'm': 'h:mm \u2013 h:mm a'
                                },
                                'H': {
                                    'H': 'HH \u2013 HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h \u2013 h a'
                                },
                                'd': {
                                    'd': 'd-d'
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
