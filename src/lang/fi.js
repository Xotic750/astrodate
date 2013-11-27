/**
 * @file {@link https://github.com/Xotic750/astrodate fi}. Language file for AstroDate.
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
        AstroDate.lang('fi', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (normaaliaika)',
                    'regionFormat-type-daylight': '{0} (kes\u00E4aika)',
                    'regionFormat': 'aikavy\u00F6hyke: {0}',
                    'gmtZeroFormat': 'UTC',
                    'gmtFormat': 'UTC{0}',
                    'hourFormat': '+H.mm;-H.mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'elokuuta',
                                    '7': 'hein\u00E4kuuta',
                                    '6': 'kes\u00E4kuuta',
                                    '5': 'toukokuuta',
                                    '12': 'joulukuuta',
                                    '11': 'marraskuuta',
                                    '10': 'lokakuuta',
                                    '9': 'syyskuuta',
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta'
                                },
                                'narrow': {
                                    '8': 'E',
                                    '7': 'H',
                                    '6': 'K',
                                    '5': 'T',
                                    '12': 'J',
                                    '11': 'M',
                                    '10': 'L',
                                    '9': 'S',
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H'
                                },
                                'wide': {
                                    '8': 'elokuuta',
                                    '7': 'hein\u00E4kuuta',
                                    '6': 'kes\u00E4kuuta',
                                    '5': 'toukokuuta',
                                    '12': 'joulukuuta',
                                    '11': 'marraskuuta',
                                    '10': 'lokakuuta',
                                    '9': 'syyskuuta',
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'elo',
                                    '7': 'hein\u00E4',
                                    '6': 'kes\u00E4',
                                    '5': 'touko',
                                    '12': 'joulu',
                                    '11': 'marras',
                                    '10': 'loka',
                                    '9': 'syys',
                                    '1': 'tammi',
                                    '2': 'helmi',
                                    '3': 'maalis',
                                    '4': 'huhti'
                                },
                                'narrow': {
                                    '8': 'E',
                                    '7': 'H',
                                    '6': 'K',
                                    '5': 'T',
                                    '12': 'J',
                                    '11': 'M',
                                    '10': 'L',
                                    '9': 'S',
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H'
                                },
                                'wide': {
                                    '8': 'elokuu',
                                    '7': 'hein\u00E4kuu',
                                    '6': 'kes\u00E4kuu',
                                    '5': 'toukokuu',
                                    '12': 'joulukuu',
                                    '11': 'marraskuu',
                                    '10': 'lokakuu',
                                    '9': 'syyskuu',
                                    '1': 'tammikuu',
                                    '2': 'helmikuu',
                                    '3': 'maaliskuu',
                                    '4': 'huhtikuu'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'K',
                                    'thu': 'T',
                                    'fri': 'P',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'wide': {
                                    'sun': 'sunnuntaina',
                                    'mon': 'maanantaina',
                                    'tue': 'tiistaina',
                                    'wed': 'keskiviikkona',
                                    'thu': 'torstaina',
                                    'fri': 'perjantaina',
                                    'sat': 'lauantaina'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'K',
                                    'thu': 'T',
                                    'fri': 'P',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'wide': {
                                    'sun': 'sunnuntai',
                                    'mon': 'maanantai',
                                    'tue': 'tiistai',
                                    'wed': 'keskiviikko',
                                    'thu': 'torstai',
                                    'fri': 'perjantai',
                                    'sat': 'lauantai'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1. nelj.',
                                    '2': '2. nelj.',
                                    '3': '3. nelj.',
                                    '4': '4. nelj.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. nelj\u00E4nnes',
                                    '2': '2. nelj\u00E4nnes',
                                    '3': '3. nelj\u00E4nnes',
                                    '4': '4. nelj\u00E4nnes'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1. nelj.',
                                    '2': '2. nelj.',
                                    '3': '3. nelj.',
                                    '4': '4. nelj.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. nelj\u00E4nnes',
                                    '2': '2. nelj\u00E4nnes',
                                    '3': '3. nelj\u00E4nnes',
                                    '4': '4. nelj\u00E4nnes'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'narrow': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'wide': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'narrow': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'wide': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'ennen Kristuksen syntym\u00E4\u00E4',
                                '0-alt-variant': 'ennen ajanlaskun alkua',
                                '1': 'j\u00E4lkeen Kristuksen syntym\u00E4n',
                                '1-alt-variant': 'j\u00E4lkeen ajanlaskun alun'
                            },
                            'eraAbbr': {
                                '0': 'eKr.',
                                '0-alt-variant': 'eaa.',
                                '1': 'jKr.',
                                '1-alt-variant': 'jaa.'
                            },
                            'eraNarrow': {
                                '0': 'eK',
                                '0-alt-variant': 'eaa',
                                '1': 'jK',
                                '1-alt-variant': 'jaa'
                            }
                        },
                        'dateFormats': {
                            'full': 'cccc d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
                        },
                        'timeFormats': {
                            'full': 'H.mm.ss zzzz',
                            'long': 'H.mm.ss z',
                            'medium': 'H.mm.ss',
                            'short': 'H.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E d. MMM y',
                                'yMMMd': 'd. MMM y',
                                'Ehms': 'E h.mm.ss a',
                                'EHm': 'E H.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E d.',
                                'd': 'd',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMMccccd': 'cccc d. MMMM y',
                                'Hms': 'H.mm.ss',
                                'hms': 'h.mm.ss a',
                                'Hm': 'H.mm',
                                'hm': 'h.mm a',
                                'H': 'H',
                                'EHms': 'E H.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'ccc d. MMM',
                                'ms': 'm.ss',
                                'y': 'y',
                                'yM': 'L.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d.M.y',
                                'yMM': 'M.y',
                                'yMMM': 'LLL y'
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
                                    'd': 'E d. \u2013 E d. MMMM',
                                    'M': 'E d. MMMM \u2013 E d. MMMM'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. MMMM',
                                    'M': 'd. MMMM \u2013 d. MMMM'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLLL'
                                },
                                'MEd': {
                                    'd': 'E d. \u2013 E d.M.',
                                    'M': 'E d.M. \u2013 E d.M.'
                                },
                                'Md': {
                                    'd': 'd.\u2013d.M.',
                                    'M': 'd.M.\u2013d.M.'
                                },
                                'M': {
                                    'M': 'L.\u2013L.'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'intervalFormatFallback': '{0}\u2013{1}',
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'LLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'yMd': {
                                    'd': 'd.\u2013d.M.y',
                                    'M': 'd.M.\u2013d.M.y',
                                    'y': 'd.M.y\u2013d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E d.M.y \u2013 E d.M.y',
                                    'M': 'E d.M.y \u2013 E d.M.y',
                                    'y': 'E d.M.y \u2013 E d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. MMMM y',
                                    'M': 'd. MMMM \u2013 d. MMMM y',
                                    'y': 'd. MMMM y \u2013 d. MMMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. \u2013 E d. MMMM y',
                                    'M': 'E d. MMMM \u2013 E d. MMMM y',
                                    'y': 'E d. MMMM y \u2013 E d. MMMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'MMMM': {
                                    'M': 'LLL\u2013LLLL'
                                },
                                'Hmv': {
                                    'H': 'H.mm\u2013H.mm v',
                                    'm': 'H.mm\u2013H.mm v'
                                },
                                'hmv': {
                                    'a': 'h.mm a \u2013 h.mm a v',
                                    'h': 'h.mm\u2013h.mm a v',
                                    'm': 'h.mm\u2013h.mm a v'
                                },
                                'Hm': {
                                    'H': 'H.mm\u2013H.mm',
                                    'm': 'H.mm\u2013H.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a \u2013 h.mm a',
                                    'h': 'h.mm\u2013h.mm a',
                                    'm': 'h.mm\u2013h.mm a'
                                },
                                'H': {
                                    'H': 'H\u2013H'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd.\u2013d.'
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
