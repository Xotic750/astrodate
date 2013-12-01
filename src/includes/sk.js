/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language sk}.
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
        AstroDate.lang('sk', {
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
                                    '5': 'máj',
                                    '6': 'jún',
                                    '7': 'júl',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'januára',
                                    '2': 'februára',
                                    '3': 'marca',
                                    '4': 'apríla',
                                    '5': 'mája',
                                    '6': 'júna',
                                    '7': 'júla',
                                    '8': 'augusta',
                                    '9': 'septembra',
                                    '10': 'októbra',
                                    '11': 'novembra',
                                    '12': 'decembra'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'máj',
                                    '6': 'jún',
                                    '7': 'júl',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'január',
                                    '2': 'február',
                                    '3': 'marec',
                                    '4': 'apríl',
                                    '5': 'máj',
                                    '6': 'jún',
                                    '7': 'júl',
                                    '8': 'august',
                                    '9': 'september',
                                    '10': 'október',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': 'št',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': 'Š',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': 'Št',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nedeľa',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': 'štvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': 'št',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': 'Š',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': 'Št',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nedeľa',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': 'štvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. štvrťrok',
                                    '2': '2. štvrťrok',
                                    '3': '3. štvrťrok',
                                    '4': '4. štvrťrok'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1Q',
                                    '2': '2Q',
                                    '3': '3Q',
                                    '4': '4Q'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. štvrťrok',
                                    '2': '2. štvrťrok',
                                    '3': '3. štvrťrok',
                                    '4': '4. štvrťrok'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'pred n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'pred n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'pred n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
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
                                'd': 'd.',
                                'Ed': 'E d.',
                                'Ehm': 'E h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd.M.y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L.',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM.',
                                'MMMEd': 'E, d. MMM.',
                                'MMMMd': 'd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d. M. y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd.M.y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMMd': 'd. MMMM y',
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
                                    'd': 'd. – d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h – h a'
                                },
                                'H': {
                                    'H': 'HH – HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm - h:mm a',
                                    'm': 'h:mm - h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm – H:mm',
                                    'm': 'H:mm – H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm - h:mm a v',
                                    'm': 'h:mm - h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm – H:mm v',
                                    'm': 'H:mm – H:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h – h a v'
                                },
                                'Hv': {
                                    'H': 'HH – HH v'
                                },
                                'M': {
                                    'M': 'M. – M.'
                                },
                                'Md': {
                                    'd': 'd.M. - d.M.',
                                    'M': 'd.M. - d.M.'
                                },
                                'MEd': {
                                    'd': 'E, d.M. - E, d.M.',
                                    'M': 'E, d.M. - E, d.M.'
                                },
                                'MMM': {
                                    'M': 'LLL – LLL'
                                },
                                'MMMd': {
                                    'd': 'd. - d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y - y'
                                },
                                'yM': {
                                    'M': 'M.y - M.y',
                                    'y': 'M.y - M.y'
                                },
                                'yMd': {
                                    'd': 'd.M.y - d.M.y',
                                    'M': 'd.M.y - d.M.y',
                                    'y': 'd.M.y - d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y - E, d.M.y',
                                    'M': 'E, d.M.y - E, d.M.y',
                                    'y': 'E, d.M.y - E, d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL - LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd. - d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL - LLLL y',
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
                    'regionFormat': 'Časové pásmo {0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
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
