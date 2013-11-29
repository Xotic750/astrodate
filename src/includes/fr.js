/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language fr}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9310
 * timeZoneNames: 24r9310
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
        AstroDate.lang('fr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'janv.',
                                    '2': 'févr.',
                                    '3': 'mars',
                                    '4': 'avr.',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juil.',
                                    '8': 'août',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'déc.'
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
                                    '1': 'janvier',
                                    '2': 'février',
                                    '3': 'mars',
                                    '4': 'avril',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juillet',
                                    '8': 'août',
                                    '9': 'septembre',
                                    '10': 'octobre',
                                    '11': 'novembre',
                                    '12': 'décembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'janv.',
                                    '2': 'févr.',
                                    '3': 'mars',
                                    '4': 'avr.',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juil.',
                                    '8': 'août',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'déc.'
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
                                    '1': 'janvier',
                                    '2': 'février',
                                    '3': 'mars',
                                    '4': 'avril',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juillet',
                                    '8': 'août',
                                    '9': 'septembre',
                                    '10': 'octobre',
                                    '11': 'novembre',
                                    '12': 'décembre'
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
                                    'afternoon': 'après-midi',
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
                                    'afternoon': 'après-midi',
                                    'am': 'avant-midi',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'après-midi'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'avant Jésus-Christ',
                                '1': 'après Jésus-Christ',
                                '0-alt-variant': 'AEC',
                                '1-alt-variant': 'EC'
                            },
                            'eraAbbr': {
                                '0': 'av. J.-C.',
                                '1': 'ap. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1-alt-variant': 'EC'
                            },
                            'eraNarrow': {
                                '0': 'av. J.-C.',
                                '1': 'ap. J.-C.',
                                '0-alt-variant': 'AEC',
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
                                'H': 'HH \'h\'',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
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
                                'yMMMM': 'MMMM y',
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
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h – h a'
                                },
                                'H': {
                                    'H': 'HH – HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm – h:mm a',
                                    'm': 'h:mm – h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm – HH:mm',
                                    'm': 'HH:mm – HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm – h:mm a v',
                                    'm': 'h:mm – h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm – HH:mm v',
                                    'm': 'HH:mm – HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h – h a v'
                                },
                                'Hv': {
                                    'H': 'HH – HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'dd/MM – dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
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
                                    'M': 'MM/y – MM/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y – d/M/y',
                                    'M': 'd/M/y – d/M/y',
                                    'y': 'dd/MM/y – dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y – E dd/MM/y',
                                    'M': 'E dd/MM/y – E dd/MM/y',
                                    'y': 'E dd/MM/y – E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d – E d MMM y',
                                    'M': 'E d MMM – E d MMM y',
                                    'y': 'E d MMM y – E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;−HH:mm',
                    'gmtFormat': 'UTC{0}',
                    'gmtZeroFormat': 'UTC',
                    'regionFormat': 'heure : {0}',
                    'regionFormat-type-daylight': '{0} (heure d’été)',
                    'regionFormat-type-standard': '{0} (heure standard)',
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
