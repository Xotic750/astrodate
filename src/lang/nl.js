/**
 * @file {@link https://github.com/Xotic750/astrodate nl}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('nl', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Standaardtijd {0}',
                    'regionFormat-type-daylight': 'Zomertijd {0}',
                    'regionFormat': '{0}-tijd',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'mei',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'sep.',
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mrt.',
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
                                    '8': 'augustus',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'mei',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'maart',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'mei',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mrt',
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
                                    '8': 'augustus',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'mei',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'maart',
                                    '4': 'april'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'narrow': {
                                    'sun': 'Z',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'W',
                                    'thu': 'D',
                                    'fri': 'V',
                                    'sat': 'Z'
                                },
                                'short': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'wide': {
                                    'sun': 'zondag',
                                    'mon': 'maandag',
                                    'tue': 'dinsdag',
                                    'wed': 'woensdag',
                                    'thu': 'donderdag',
                                    'fri': 'vrijdag',
                                    'sat': 'zaterdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'narrow': {
                                    'sun': 'Z',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'W',
                                    'thu': 'D',
                                    'fri': 'V',
                                    'sat': 'Z'
                                },
                                'short': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'wide': {
                                    'sun': 'zondag',
                                    'mon': 'maandag',
                                    'tue': 'dinsdag',
                                    'wed': 'woensdag',
                                    'thu': 'donderdag',
                                    'fri': 'vrijdag',
                                    'sat': 'zaterdag'
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
                                    '1': '1e kwartaal',
                                    '2': '2e kwartaal',
                                    '3': '3e kwartaal',
                                    '4': '4e kwartaal'
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
                                    '1': '1e kwartaal',
                                    '2': '2e kwartaal',
                                    '3': '3e kwartaal',
                                    '4': '4e kwartaal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'voormiddag',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Voor Christus',
                                '0-alt-variant': 'v\u00F3\u00F3r gewone jaartelling',
                                '1': 'na Christus',
                                '1-alt-variant': 'gewone jaartelling'
                            },
                            'eraAbbr': {
                                '0': 'v.Chr.',
                                '0-alt-variant': 'v.g.j.',
                                '1': 'n.Chr.',
                                '1-alt-variant': 'g.j.'
                            },
                            'eraNarrow': {
                                '0': 'v.C.',
                                '0-alt-variant': 'vgj',
                                '1': 'n.C.',
                                '1-alt-variant': 'gj'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd-MM-yy'
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
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E d MMM y',
                                'EHms': 'E HH:mm:ss',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd-M',
                                'MEd': 'E d-M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M-y',
                                'yMd': 'd-M-y',
                                'yMEd': 'E d-M-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y'
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
                                    'd': 'E d - E d MMM',
                                    'M': 'E d MMM - E d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E dd-MM - E dd-MM',
                                    'M': 'E dd-MM - E dd-MM'
                                },
                                'Md': {
                                    'd': 'dd-MM - dd-MM',
                                    'M': 'dd-MM - dd-MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'intervalFormatFallback': '{0} - {1}',
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM-y - MM-y',
                                    'y': 'MM-y - MM-y'
                                },
                                'yMd': {
                                    'd': 'dd-MM-y - dd-MM-y',
                                    'M': 'dd-MM-y - dd-MM-y',
                                    'y': 'dd-MM-y - dd-MM-y'
                                },
                                'yMEd': {
                                    'd': 'E dd-MM-y - E dd-MM-y',
                                    'M': 'E dd-MM-y - E dd-MM-y',
                                    'y': 'E dd-MM-y - E dd-MM-y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                },
                                'MMMM': {
                                    'M': 'MMMM\u2013MMMM'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH-HH'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd-d'
                                }
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
