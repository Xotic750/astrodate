/* AstroDate
 * Language: hi
 * ca-gregorian: 24r9296
 * timeZoneNames: 24r9296
 * localeDisplayNames: 24r9296
 *
 * home: https://github.com/Xotic750/astrodate
 *
 * Copyright (C) 2013  Graham Fairweather (a.k.a: Xotic750)
 *
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

/*jshint -W100 */
(function (thisContext) {
    'use strict';

    (function (definition) {
        /*global module, require, define */
        var astrodateFunc = 'AstroDate',
            astrodateString = astrodateFunc.toLowerCase();

        if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
            definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }(function (AstroDate) {
        AstroDate.lang('hi', {
            'codePatterns': {
                'language': 'भाषा: {0}',
                'script': 'लिपि: {0}',
                'territory': 'क्षेत्र: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'काना को अलग से क्रमित करें',
                    'yes': 'काना को भिन्‍न रूप में क्रमित करें'
                },
                'colCaseLevel': {
                    'no': 'केस असंवेदी क्रमित करें',
                    'yes': 'केस संवेदी को क्रमित करें'
                },
                'colCaseFirst': {
                    'lower': 'पहले लोअरकेस क्रमित करें',
                    'no': 'सामान्‍य केस क्रम में क्रमित करें',
                    'upper': 'पहले अपरकेस क्रमित करें'
                },
                'colStrength': {
                    'identical': 'सभी क्रमित करें',
                    'primary': 'केवल आधार अक्षरों को क्रमित करें',
                    'quaternary': 'उच्‍चारणों/केस/चौड़ाई/काना क्रमित करें',
                    'secondary': 'उच्‍चारण क्रमित करें',
                    'tertiary': 'उच्‍चारणों/केस/चौड़ाई क्रमित करें'
                },
                'colNumeric': {
                    'no': 'अंको को अलग-अलग क्रमित करें',
                    'yes': 'अंकों को अंकीय रूप से क्रमित करें'
                },
                'colNormalization': {
                    'no': 'बिना सामान्‍यीकरण के क्रमित करें',
                    'yes': 'यूनिकोड सामान्‍यीकृत क्रमित करें'
                },
                'calendar': {
                    'japanese': 'जापानी पंचांग',
                    'iso8601': 'iso8601',
                    'coptic': 'कोप्टिक कैलेंडर',
                    'dangi': 'dangi',
                    'ethiopic': 'इथियोपिक कैलेंडर',
                    'ethiopic-amete-alem': 'इथियोपिक अमेते अलेम कैलेंडर',
                    'gregorian': 'ग्रेगोरियन कैलेंडर',
                    'hebrew': 'हिब्रू पंचांग',
                    'persian': 'फ़ारसी कैलेंडर',
                    'roc': 'चीनी गणतंत्र पंचांग',
                    'chinese': 'चीनी पंचांग',
                    'buddhist': 'बौद्ध पंचांग',
                    'indian': 'भारतीय राष्ट्रीय पंचांग',
                    'islamic': 'इस्लामी पंचांग',
                    'islamic-civil': 'इस्लामी नागरिक पंचांग',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'दूरभाष निर्देशिका वर्गीकरण',
                    'gb2312han': 'सरलीकृत चीनी वर्गीकरण',
                    'eor': 'eor',
                    'ducet': 'डिफ़ॉल्ट यूनिकोड सॉर्ट क्रम',
                    'dictionary': 'शब्दकोश क्रम विन्यास',
                    'big5han': 'पारम्पारिक चीनी वर्गीकरण',
                    'traditional': 'पारम्पारिक वर्गीकरण',
                    'standard': 'मानक सॉर्ट क्रम',
                    'zhuyin': 'zhuyin',
                    'unihan': 'रेडिकल-स्ट्रोक क्रम विन्यास',
                    'stroke': 'स्ट्रोक वर्गीकरण',
                    'searchjl': 'हांगुल आरंभिक व्‍यंजन द्वारा खोजें',
                    'search': 'सामान्य-उद्देश्य खोज',
                    'reformed': 'पुनर्निर्मित क्रम विन्यास',
                    'pinyin': 'पिनयीन वर्गीकरण',
                    'phonetic': 'ध्‍वन्यात्मक क्रमित करने का क्रम'
                },
                'numbers': {
                    'knda': 'कन्नड़ अंक',
                    'khmr': 'खमेर अंक',
                    'kali': 'kali',
                    'jpanfin': 'जापानी वित्तीय संख्याएँ',
                    'jpan': 'जापानी संख्याएँ',
                    'java': 'java',
                    'hebr': 'हिब्रू संख्याएँ',
                    'hantfin': 'पारंपरिक चीनी वित्तीय संख्याएँ',
                    'hant': 'पारंपरिक चीनी संख्याएँ',
                    'hansfin': 'सरलीकृत चीनी वित्तीय संख्याएँ',
                    'hans': 'सरलीकृत चीनी संख्याएँ',
                    'hanidec': 'चीनी दशमलव संख्याएँ',
                    'guru': 'गुरमुखी अंक',
                    'gujr': 'गुजराती अंक',
                    'greklow': 'यूनानी लोअरकेस संख्याएँ',
                    'grek': 'यूनानी संख्याएँ',
                    'bali': 'bali',
                    'armnlow': 'आर्मेनियाई लोअरकेस संख्याएँ',
                    'armn': 'आर्मेनियाई संख्याएँ',
                    'arabext': 'विस्तृत अरबी-भारतीय अंक',
                    'arab': 'अरबी-भारतीय अंक',
                    'finance': 'वित्तीय अंक',
                    'traditional': 'परंपरागत अंक',
                    'native': 'स्थानीय अंक',
                    'beng': 'बंगाली अंक',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'देवनागरी अंक',
                    'orya': 'उड़िया अंक',
                    'osma': 'osma',
                    'roman': 'रोमन संख्याएँ',
                    'romanlow': 'रोमन लोअरकेस संख्याएँ',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'वाई अंक',
                    'tibt': 'तिब्बती अंक',
                    'thai': 'थाई अंक',
                    'telu': 'तेलुगू अंक',
                    'tamldec': 'तमिल अंक',
                    'taml': 'पारंपरिक तमिल संख्याएँ',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'म्यांमार अंक',
                    'mtei': 'mtei',
                    'mong': 'मंगोलियाई अंक',
                    'mlym': 'मलयालम अंक',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'पश्चिमी अंक',
                    'laoo': 'लाओ अंक',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'जॉर्जियन संख्याएँ',
                    'fullwide': 'पूर्ण चौड़ाई अंक',
                    'ethi': 'इथियोपिक संख्याएँ'
                },
                'colAlternate': {
                    'non-ignorable': 'प्रतीकों को क्रमित करें',
                    'shifted': 'प्रतीकों पर ध्यान न देकर क्रमित करें'
                },
                'colBackwards': {
                    'no': 'उच्‍चारणों को सामान्‍य रूप से क्रमित करें',
                    'yes': 'उच्‍चारण के उलट क्रमित करें'
                }
            },
            'keys': {
                'colNormalization': 'सामान्यीकृत वर्गीकरण',
                'collation': 'सॉर्ट क्रम',
                'colHiraganaQuaternary': 'काना वर्गीकरण',
                'colCaseLevel': 'केस संवेदी वर्गीकरण',
                'colCaseFirst': 'अपरकेस/लोअरकेस क्रमांकन',
                'colBackwards': 'विपरीत उच्‍चारण वर्गीकरण',
                'colAlternate': 'चिह्न वर्गीकरण पर ध्यान न दें',
                'calendar': 'कैलेंडर',
                'x': 'निजी-उपयोग',
                'variableTop': 'चिह्न के रूप में क्रमित करें',
                'va': 'स्थानीय प्रकार',
                'timezone': 'समय क्षेत्र',
                'numbers': 'संख्या',
                'currency': 'मुद्रा',
                'colStrength': 'वर्गीकरण सशक्तता',
                'colNumeric': 'संख्यात्मक वर्गीकरण'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'सायपान'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'रारोटोंगा'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'पोर्ट मोरेस्बी'
                        },
                        'Ponape': {
                            'exemplarCity': 'पोनपेई'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'पिटकैर्न'
                        },
                        'Palau': {
                            'exemplarCity': 'पालाऊ'
                        },
                        'Auckland': {
                            'exemplarCity': 'ऑकलैंड'
                        },
                        'Apia': {
                            'exemplarCity': 'एपिया'
                        },
                        'Funafuti': {
                            'exemplarCity': 'फ़्यूनाफ़ुटी'
                        },
                        'Galapagos': {
                            'exemplarCity': 'गेलापागोस'
                        },
                        'Gambier': {
                            'exemplarCity': 'गैंबियर'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'ग्वाडलकनाल'
                        },
                        'Guam': {
                            'exemplarCity': 'गुआम'
                        },
                        'Honolulu': {
                            'exemplarCity': 'होनोलुलु'
                        },
                        'Wallis': {
                            'exemplarCity': 'वालिस'
                        },
                        'Wake': {
                            'exemplarCity': 'वेक'
                        },
                        'Truk': {
                            'exemplarCity': 'चक'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'टोंगाटापू'
                        },
                        'Tarawa': {
                            'exemplarCity': 'टारावा'
                        },
                        'Tahiti': {
                            'exemplarCity': 'ताहिती'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'किरीतिमाति'
                        },
                        'Johnston': {
                            'exemplarCity': 'जॉनस्टन'
                        },
                        'Chatham': {
                            'exemplarCity': 'चाथम'
                        },
                        'Easter': {
                            'exemplarCity': 'ईस्टर'
                        },
                        'Efate': {
                            'exemplarCity': 'एफ़ेट'
                        },
                        'Enderbury': {
                            'exemplarCity': 'एंडरबरी'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'फ़ाकाओफ़ो'
                        },
                        'Fiji': {
                            'exemplarCity': 'फ़िजी'
                        },
                        'Kosrae': {
                            'exemplarCity': 'कोसराए'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'क्वाज़ालीन'
                        },
                        'Majuro': {
                            'exemplarCity': 'माजुरो'
                        },
                        'Marquesas': {
                            'exemplarCity': 'मार्केसस'
                        },
                        'Midway': {
                            'exemplarCity': 'मिडवे'
                        },
                        'Nauru': {
                            'exemplarCity': 'नौरु'
                        },
                        'Niue': {
                            'exemplarCity': 'नीयू'
                        },
                        'Norfolk': {
                            'exemplarCity': 'नॉरफ़ॉक'
                        },
                        'Noumea': {
                            'exemplarCity': 'नौमिया'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'पागो पागो'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'लिंडेमान'
                        },
                        'Hobart': {
                            'exemplarCity': 'होबार्ट'
                        },
                        'Eucla': {
                            'exemplarCity': 'यूक्ला'
                        },
                        'Darwin': {
                            'exemplarCity': 'डार्विन'
                        },
                        'Sydney': {
                            'exemplarCity': 'सिडनी'
                        },
                        'Perth': {
                            'exemplarCity': 'पर्थ'
                        },
                        'Melbourne': {
                            'exemplarCity': 'मेलबोर्न'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'लॉर्ड होवे'
                        },
                        'Adelaide': {
                            'exemplarCity': 'एडिलेड'
                        },
                        'Brisbane': {
                            'exemplarCity': 'ब्रिस्बन'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'ब्रोकन हिल'
                        },
                        'Currie': {
                            'exemplarCity': 'क्यूरी'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'मालदीव'
                        },
                        'Mahe': {
                            'exemplarCity': 'माहे'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'करगुलेन'
                        },
                        'Reunion': {
                            'exemplarCity': 'रीयूनियन'
                        },
                        'Mayotte': {
                            'exemplarCity': 'मायोत्ते'
                        },
                        'Mauritius': {
                            'exemplarCity': 'मॉरीशस'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'एंटानानरीवो'
                        },
                        'Chagos': {
                            'exemplarCity': 'शागोस'
                        },
                        'Christmas': {
                            'exemplarCity': 'क्रिसमस'
                        },
                        'Cocos': {
                            'exemplarCity': 'कोकोस'
                        },
                        'Comoro': {
                            'exemplarCity': 'कोमोरो'
                        }
                    },
                    'Etc': {
                        'GMT-11': {
                            'exemplarCity': 'GMT-11'
                        },
                        'GMT-10': {
                            'exemplarCity': 'GMT-10'
                        },
                        'GMT-1': {
                            'exemplarCity': 'GMT-1'
                        },
                        'GMT9': {
                            'exemplarCity': 'GMT+9'
                        },
                        'GMT8': {
                            'exemplarCity': 'GMT+8'
                        },
                        'GMT7': {
                            'exemplarCity': 'GMT+7'
                        },
                        'GMT6': {
                            'exemplarCity': 'GMT+6'
                        },
                        'GMT5': {
                            'exemplarCity': 'GMT+5'
                        },
                        'GMT': {
                            'exemplarCity': 'GMT'
                        },
                        'GMT1': {
                            'exemplarCity': 'GMT+1'
                        },
                        'GMT10': {
                            'exemplarCity': 'GMT+10'
                        },
                        'GMT11': {
                            'exemplarCity': 'GMT+11'
                        },
                        'GMT-3': {
                            'exemplarCity': 'GMT-3'
                        },
                        'GMT-4': {
                            'exemplarCity': 'GMT-4'
                        },
                        'GMT-5': {
                            'exemplarCity': 'GMT-5'
                        },
                        'GMT-6': {
                            'exemplarCity': 'GMT-6'
                        },
                        'GMT-7': {
                            'exemplarCity': 'GMT-7'
                        },
                        'GMT-8': {
                            'exemplarCity': 'GMT-8'
                        },
                        'GMT-9': {
                            'exemplarCity': 'GMT-9'
                        },
                        'Unknown': {
                            'exemplarCity': 'अज्ञात शहर'
                        },
                        'GMT-2': {
                            'exemplarCity': 'GMT-2'
                        },
                        'GMT-14': {
                            'exemplarCity': 'GMT-14'
                        },
                        'GMT-13': {
                            'exemplarCity': 'GMT-13'
                        },
                        'GMT-12': {
                            'exemplarCity': 'GMT-12'
                        },
                        'GMT4': {
                            'exemplarCity': 'GMT+4'
                        },
                        'GMT3': {
                            'exemplarCity': 'GMT+3'
                        },
                        'GMT2': {
                            'exemplarCity': 'GMT+2'
                        },
                        'GMT12': {
                            'exemplarCity': 'GMT+12'
                        }
                    },
                    'Antarctica': {
                        'Rothera': {
                            'exemplarCity': 'रोथेरा'
                        },
                        'Palmer': {
                            'exemplarCity': 'पॉमर'
                        },
                        'McMurdo': {
                            'exemplarCity': 'मैकमुर्डो'
                        },
                        'Vostok': {
                            'exemplarCity': 'वोस्तोक'
                        },
                        'Syowa': {
                            'exemplarCity': 'स्योवा'
                        },
                        'South_Pole': {
                            'exemplarCity': 'दक्षिणी ध्रुव'
                        },
                        'Casey': {
                            'exemplarCity': 'केसी'
                        },
                        'Davis': {
                            'exemplarCity': 'डेविस'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'ड्यूमोंट डी अर्विले'
                        },
                        'Macquarie': {
                            'exemplarCity': 'मक्वारी'
                        },
                        'Mawson': {
                            'exemplarCity': 'मॉसन'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'लॉन्गईयरबायेन'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'टोरंटो'
                        },
                        'Tijuana': {
                            'exemplarCity': 'तिजुआना'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'थंडर खाड़ी'
                        },
                        'Thule': {
                            'exemplarCity': 'थ्यूले'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'टेगुसिगल्पा'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'स्विफ़्ट करंट'
                        },
                        'Chicago': {
                            'exemplarCity': 'शिकागो'
                        },
                        'Cayman': {
                            'exemplarCity': 'कैमेन'
                        },
                        'Cayenne': {
                            'exemplarCity': 'कायेन'
                        },
                        'Catamarca': {
                            'exemplarCity': 'काटामार्का'
                        },
                        'Caracas': {
                            'exemplarCity': 'काराकस'
                        },
                        'Cancun': {
                            'exemplarCity': 'कैनकुन'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'कैंपो ग्रांडे'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'कैम्ब्रिज खाड़ी'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'ब्यूनस आयरस'
                        },
                        'Boise': {
                            'exemplarCity': 'बॉइस'
                        },
                        'Asuncion': {
                            'exemplarCity': 'एसनशियॉन'
                        },
                        'Aruba': {
                            'exemplarCity': 'अरुबा'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'रियो गालेगोस'
                            },
                            'San_Juan': {
                                'exemplarCity': 'सान जुआन'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'उशुआइया'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'ला रिओजा'
                            },
                            'San_Luis': {
                                'exemplarCity': 'सान लुईस'
                            },
                            'Salta': {
                                'exemplarCity': 'साल्टा'
                            },
                            'Tucuman': {
                                'exemplarCity': 'टोकूमन'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'आराग्वेना'
                        },
                        'Antigua': {
                            'exemplarCity': 'एंटीगुआ'
                        },
                        'Anguilla': {
                            'exemplarCity': 'एंग्विला'
                        },
                        'Anchorage': {
                            'exemplarCity': 'एंकरेज'
                        },
                        'Adak': {
                            'exemplarCity': 'अडक'
                        },
                        'Bahia': {
                            'exemplarCity': 'बहिया'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'बेहिया बांडेरास'
                        },
                        'Barbados': {
                            'exemplarCity': 'बारबाडोस'
                        },
                        'Belem': {
                            'exemplarCity': 'बेलेम'
                        },
                        'Belize': {
                            'exemplarCity': 'बेलीज़'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'ब्लांक-सेबलोन'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'बोआ विस्ता'
                        },
                        'Bogota': {
                            'exemplarCity': 'बोगोटा'
                        },
                        'Curacao': {
                            'exemplarCity': 'कुराकाओ'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'डेनमार्कशॉन'
                        },
                        'Dawson': {
                            'exemplarCity': 'डॉसन'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'डॉसन क्रीक'
                        },
                        'Denver': {
                            'exemplarCity': 'डेनवर'
                        },
                        'Detroit': {
                            'exemplarCity': 'डेट्रॉयट'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'हर्मोसिल्लो'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'विंसेनेस, इंडियाना'
                            },
                            'Petersburg': {
                                'exemplarCity': 'पीटर्सबर्ग, इंडियाना'
                            },
                            'Tell_City': {
                                'exemplarCity': 'टेल सिटी, इंडियाना'
                            },
                            'Knox': {
                                'exemplarCity': 'नौक्स, इंडियाना'
                            },
                            'Winamac': {
                                'exemplarCity': 'विनामेक, इंडियाना'
                            },
                            'Marengo': {
                                'exemplarCity': 'मारेंगो, इंडियाना'
                            },
                            'Vevay': {
                                'exemplarCity': 'वेवे, इंडियाना'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'इंडियानापोलिस'
                        },
                        'Inuvik': {
                            'exemplarCity': 'इनूविक'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'इकालुईट'
                        },
                        'Jamaica': {
                            'exemplarCity': 'जमैका'
                        },
                        'Jujuy': {
                            'exemplarCity': 'जुजोए'
                        },
                        'Juneau': {
                            'exemplarCity': 'ज्यूनाउ'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'येलोनाइफ़'
                        },
                        'Yakutat': {
                            'exemplarCity': 'याकूटाट'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'विनीपेग'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'व्हाइटहोर्स'
                        },
                        'Vancouver': {
                            'exemplarCity': 'वैंकूवर'
                        },
                        'Tortola': {
                            'exemplarCity': 'टोर्टोला'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'क्रालैंडिजिक'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'मोंटीसेलो, केंचुकी'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'हवाना'
                        },
                        'Halifax': {
                            'exemplarCity': 'हेलिफ़ैक्स'
                        },
                        'Guyana': {
                            'exemplarCity': 'गयाना'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'ग्वायाकील'
                        },
                        'Guatemala': {
                            'exemplarCity': 'ग्वाटेमाला'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'ग्वाडेलोप'
                        },
                        'Grenada': {
                            'exemplarCity': 'ग्रेनाडा'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'ग्रांड टर्क'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'गूस खा़ड़ी'
                        },
                        'Godthab': {
                            'exemplarCity': 'नुक'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'ग्लेस खा़ड़ी'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'फ़ोर्टालेज़ा'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'अल सल्वाडोर'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'ईरुनेपे'
                        },
                        'Edmonton': {
                            'exemplarCity': 'एडमंटन'
                        },
                        'Dominica': {
                            'exemplarCity': 'डोमिनिका'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'चिहुआहुआ'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'अटिकोकान'
                        },
                        'Cordoba': {
                            'exemplarCity': 'कोर्डोबा'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'कोस्टा रिका'
                        },
                        'Creston': {
                            'exemplarCity': 'क्रेस्टन'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'क्यूआबा'
                        },
                        'La_Paz': {
                            'exemplarCity': 'ला पाज़'
                        },
                        'Lima': {
                            'exemplarCity': 'लीमा'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'लॉस एंजिल्स'
                        },
                        'Louisville': {
                            'exemplarCity': 'लुइसविले'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'लोअर प्रिंसेस क्वार्टर'
                        },
                        'Maceio': {
                            'exemplarCity': 'मेसीओ'
                        },
                        'Managua': {
                            'exemplarCity': 'मानागुआ'
                        },
                        'Manaus': {
                            'exemplarCity': 'मनौस'
                        },
                        'Marigot': {
                            'exemplarCity': 'मैरीगोट'
                        },
                        'Martinique': {
                            'exemplarCity': 'मार्टिनिक'
                        },
                        'Matamoros': {
                            'exemplarCity': 'माटामोरोस'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'माज़ाटलान'
                        },
                        'Mendoza': {
                            'exemplarCity': 'मेंडोज़ा'
                        },
                        'Menominee': {
                            'exemplarCity': 'मेनोमिनी'
                        },
                        'Merida': {
                            'exemplarCity': 'मेरिडा'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'मेट्लेकाट्ला'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'मैक्सिको सिटी'
                        },
                        'Miquelon': {
                            'exemplarCity': 'मिकेलॉन'
                        },
                        'Moncton': {
                            'exemplarCity': 'मोंकटन'
                        },
                        'Monterrey': {
                            'exemplarCity': 'मोंटेरेरी'
                        },
                        'Montevideo': {
                            'exemplarCity': 'मोंटेवीडियो'
                        },
                        'Montreal': {
                            'exemplarCity': 'मोंट्रियल'
                        },
                        'Montserrat': {
                            'exemplarCity': 'मोंटसेरात'
                        },
                        'Nassau': {
                            'exemplarCity': 'नासाउ'
                        },
                        'New_York': {
                            'exemplarCity': 'न्यूयॉर्क'
                        },
                        'Nipigon': {
                            'exemplarCity': 'निपिगन'
                        },
                        'Nome': {
                            'exemplarCity': 'नोम'
                        },
                        'Noronha': {
                            'exemplarCity': 'नोरोन्हा'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'ब्यूला, उत्तरी डकोटा'
                            },
                            'New_Salem': {
                                'exemplarCity': 'न्यू सालेम, उत्तरी डकोटा'
                            },
                            'Center': {
                                'exemplarCity': 'मध्य, उत्तरी दाकोता'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'ओखाजीनागा'
                        },
                        'Panama': {
                            'exemplarCity': 'पनामा'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'पांगनिर्टंग'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'पारामारिबो'
                        },
                        'Phoenix': {
                            'exemplarCity': 'फ़ीनिक्स'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'पोर्ट-ऑ-प्रिंस'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'पोर्ट ऑफ़ स्पेन'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'पोर्टो वेल्हो'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'पोर्टो रिको'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'रेनी नदी'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'रेंकिन इनलेट'
                        },
                        'Recife': {
                            'exemplarCity': 'रेसाइफ़'
                        },
                        'Regina': {
                            'exemplarCity': 'रेजिना'
                        },
                        'Resolute': {
                            'exemplarCity': 'रिसोल्यूट'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'रियो ब्रांको'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'सांता इसाबेल'
                        },
                        'Santarem': {
                            'exemplarCity': 'सैंटारेम'
                        },
                        'Santiago': {
                            'exemplarCity': 'सैंटियागो'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'सेंटो डोमिंगो'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'साओ पाउलो'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'इटोकोर्टोरमियाट'
                        },
                        'Shiprock': {
                            'exemplarCity': 'शिपरॉक'
                        },
                        'Sitka': {
                            'exemplarCity': 'सिट्का'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'सेंट बार्थेलेमी'
                        },
                        'St_Johns': {
                            'exemplarCity': 'सेंट जोंस'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'सेंट किट्स'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'सेंट लूसिया'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'सेंट थॉमस'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'सेंट विंसेंट'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'दक्षिण जॉर्जिया'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'रेक्याविक'
                        },
                        'Stanley': {
                            'exemplarCity': 'स्टैनली'
                        },
                        'St_Helena': {
                            'exemplarCity': 'सेंट हेलेना'
                        },
                        'Azores': {
                            'exemplarCity': 'अज़ोरेस'
                        },
                        'Bermuda': {
                            'exemplarCity': 'बरमूडा'
                        },
                        'Canary': {
                            'exemplarCity': 'कैनेरी'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'केप वर्ड'
                        },
                        'Faeroe': {
                            'exemplarCity': 'फ़ैरो'
                        },
                        'Madeira': {
                            'exemplarCity': 'मडेरा'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'ओस्लो'
                        },
                        'Moscow': {
                            'exemplarCity': 'मॉस्को'
                        },
                        'Monaco': {
                            'exemplarCity': 'मोनाको'
                        },
                        'Minsk': {
                            'exemplarCity': 'मिंस्क'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'मारियाहैम'
                        },
                        'Malta': {
                            'exemplarCity': 'माल्टा'
                        },
                        'Madrid': {
                            'exemplarCity': 'मैड्रिड'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'लक्ज़मबर्ग'
                        },
                        'London': {
                            'long': {
                                'daylight': 'ब्रिटिश ग्रीष्मकालीन समय'
                            },
                            'exemplarCity': 'लंदन'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'ल्यूबेलजाना'
                        },
                        'Lisbon': {
                            'exemplarCity': 'लिस्बन'
                        },
                        'Kiev': {
                            'exemplarCity': 'कीव'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'कालीनिनग्राड'
                        },
                        'Jersey': {
                            'exemplarCity': 'जर्सी'
                        },
                        'Istanbul': {
                            'exemplarCity': 'इस्तांबुल'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'आइल ऑफ़ मैन'
                        },
                        'Bucharest': {
                            'exemplarCity': 'बुख़ारेस्ट'
                        },
                        'Brussels': {
                            'exemplarCity': 'ब्रूसेल्स'
                        },
                        'Bratislava': {
                            'exemplarCity': 'ब्रातिस्लावा'
                        },
                        'Berlin': {
                            'exemplarCity': 'बर्लिन'
                        },
                        'Belgrade': {
                            'exemplarCity': 'बेलग्रेड'
                        },
                        'Athens': {
                            'exemplarCity': 'एथेंस'
                        },
                        'Andorra': {
                            'exemplarCity': 'अंडोरा'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'एम्स्टर्डम'
                        },
                        'Simferopol': {
                            'exemplarCity': 'सिम्फ़ेरोपोल'
                        },
                        'Skopje': {
                            'exemplarCity': 'स्कोप्जे'
                        },
                        'Sofia': {
                            'exemplarCity': 'सोफ़िया'
                        },
                        'Stockholm': {
                            'exemplarCity': 'स्टॉकहोम'
                        },
                        'Tallinn': {
                            'exemplarCity': 'तेलिन'
                        },
                        'Tirane': {
                            'exemplarCity': 'टाइरेन'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'अज़्गोरोद'
                        },
                        'Vaduz': {
                            'exemplarCity': 'वादुज़'
                        },
                        'Zurich': {
                            'exemplarCity': 'ज़्यूरिख़'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'ज़ैपोरोज़ाइ'
                        },
                        'Zagreb': {
                            'exemplarCity': 'ज़ाग्रेब'
                        },
                        'Warsaw': {
                            'exemplarCity': 'वॉरसॉ'
                        },
                        'Volgograd': {
                            'exemplarCity': 'वोल्गोग्राद'
                        },
                        'Vilnius': {
                            'exemplarCity': 'विल्नियस'
                        },
                        'Vienna': {
                            'exemplarCity': 'विएना'
                        },
                        'Vatican': {
                            'exemplarCity': 'वेटिकन'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'साराजेवो'
                        },
                        'San_Marino': {
                            'exemplarCity': 'सैन मारीनो'
                        },
                        'Samara': {
                            'exemplarCity': 'समारा'
                        },
                        'Rome': {
                            'exemplarCity': 'रोम'
                        },
                        'Riga': {
                            'exemplarCity': 'रीगा'
                        },
                        'Prague': {
                            'exemplarCity': 'प्राग'
                        },
                        'Podgorica': {
                            'exemplarCity': 'पोड्गोरिका'
                        },
                        'Paris': {
                            'exemplarCity': 'पेरिस'
                        },
                        'Helsinki': {
                            'exemplarCity': 'हेलसिंकी'
                        },
                        'Guernsey': {
                            'exemplarCity': 'गर्नसी'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'जिब्राल्टर'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'आइरिश ग्रीष्मकालीन समय'
                            },
                            'exemplarCity': 'डबलिन'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'कोपेनहेगन'
                        },
                        'Chisinau': {
                            'exemplarCity': 'चिसीनाउ'
                        },
                        'Busingen': {
                            'exemplarCity': 'ब्यूसिनजेन'
                        },
                        'Budapest': {
                            'exemplarCity': 'बुडापेस्ट'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'लिब्रेविले'
                        },
                        'Lagos': {
                            'exemplarCity': 'लागोस'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'किंशासा'
                        },
                        'Kigali': {
                            'exemplarCity': 'किगाली'
                        },
                        'Khartoum': {
                            'exemplarCity': 'खार्तूम'
                        },
                        'Kampala': {
                            'exemplarCity': 'कंपाला'
                        },
                        'Juba': {
                            'exemplarCity': 'जुबा'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'जोहांसबर्ग'
                        },
                        'Harare': {
                            'exemplarCity': 'हरारे'
                        },
                        'Gaborone': {
                            'exemplarCity': 'गाबोरोन'
                        },
                        'Freetown': {
                            'exemplarCity': 'फ़्रीटाउन'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'अल आइयून'
                        },
                        'Douala': {
                            'exemplarCity': 'डूआला'
                        },
                        'Djibouti': {
                            'exemplarCity': 'जिबूती'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'दार अस सलाम'
                        },
                        'Dakar': {
                            'exemplarCity': 'डकार'
                        },
                        'Banjul': {
                            'exemplarCity': 'बैंजुल'
                        },
                        'Bangui': {
                            'exemplarCity': 'बांगुइ'
                        },
                        'Bamako': {
                            'exemplarCity': 'बामाको'
                        },
                        'Asmera': {
                            'exemplarCity': 'अस्मारा'
                        },
                        'Malabo': {
                            'exemplarCity': 'मलाबो'
                        },
                        'Maputo': {
                            'exemplarCity': 'मापुटो'
                        },
                        'Maseru': {
                            'exemplarCity': 'मासेरू'
                        },
                        'Mbabane': {
                            'exemplarCity': 'एमबाबेन'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'मोगादिशु'
                        },
                        'Monrovia': {
                            'exemplarCity': 'मोनरोविया'
                        },
                        'Nairobi': {
                            'exemplarCity': 'नैरोबी'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'नेद्जामीना'
                        },
                        'Windhoek': {
                            'exemplarCity': 'विंडहोक'
                        },
                        'Tunis': {
                            'exemplarCity': 'ट्यूनिस'
                        },
                        'Tripoli': {
                            'exemplarCity': 'त्रिपोली'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'साओ टोम'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'पोर्टो-नोवो'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'औगाडोगू'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'नौआकशॉट'
                        },
                        'Niamey': {
                            'exemplarCity': 'नियामी'
                        },
                        'Lusaka': {
                            'exemplarCity': 'लुसाका'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'लुबुमबाशी'
                        },
                        'Luanda': {
                            'exemplarCity': 'लुआंडा'
                        },
                        'Lome': {
                            'exemplarCity': 'लोम'
                        },
                        'Conakry': {
                            'exemplarCity': 'कोनाक्री'
                        },
                        'Ceuta': {
                            'exemplarCity': 'सेउटा'
                        },
                        'Casablanca': {
                            'exemplarCity': 'कासाब्लांका'
                        },
                        'Cairo': {
                            'exemplarCity': 'कायरो'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'बुजुंबूरा'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'ब्राज़ाविले'
                        },
                        'Blantyre': {
                            'exemplarCity': 'ब्लांटायर'
                        },
                        'Bissau': {
                            'exemplarCity': 'बिसाऊ'
                        },
                        'Abidjan': {
                            'exemplarCity': 'अबिदजान'
                        },
                        'Accra': {
                            'exemplarCity': 'एक्रा'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'अदीस अबाबा'
                        },
                        'Algiers': {
                            'exemplarCity': 'अल्जीयर्स'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'शंघाई'
                        },
                        'Seoul': {
                            'exemplarCity': 'सिओल'
                        },
                        'Samarkand': {
                            'exemplarCity': 'समरकंद'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'सखालिन'
                        },
                        'Saigon': {
                            'exemplarCity': 'हो ची मिन्ह सिटी'
                        },
                        'Riyadh': {
                            'exemplarCity': 'रियाद'
                        },
                        'Rangoon': {
                            'exemplarCity': 'रंगून'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'केज़ेलोर्डा'
                        },
                        'Qatar': {
                            'exemplarCity': 'कतर'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'प्योंगयांग'
                        },
                        'Pontianak': {
                            'exemplarCity': 'पोंटीयांक'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'नॉम पेन्ह'
                        },
                        'Oral': {
                            'exemplarCity': 'ओरल'
                        },
                        'Omsk': {
                            'exemplarCity': 'ओम्स्क'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'नोवोसिबिर्स्क'
                        },
                        'Baghdad': {
                            'exemplarCity': 'बगदाद'
                        },
                        'Chongqing': {
                            'exemplarCity': 'चोंगकिंग'
                        },
                        'Colombo': {
                            'exemplarCity': 'कोलंबो'
                        },
                        'Damascus': {
                            'exemplarCity': 'दमास्कस'
                        },
                        'Dhaka': {
                            'exemplarCity': 'ढाका'
                        },
                        'Dili': {
                            'exemplarCity': 'डिलि'
                        },
                        'Dubai': {
                            'exemplarCity': 'दुबई'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'दुशांबे'
                        },
                        'Gaza': {
                            'exemplarCity': 'गाज़ा'
                        },
                        'Harbin': {
                            'exemplarCity': 'हर्बिन'
                        },
                        'Hebron': {
                            'exemplarCity': 'हेब्रोन'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'हाँग काँग'
                        },
                        'Hovd': {
                            'exemplarCity': 'होव्ड'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'इर्कुत्स्क'
                        },
                        'Jakarta': {
                            'exemplarCity': 'जकार्ता'
                        },
                        'Jayapura': {
                            'exemplarCity': 'जयापुरा'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'उलानबातर'
                        },
                        'Urumqi': {
                            'exemplarCity': 'उरम्ची'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'यूस्ट–नेरा'
                        },
                        'Vientiane': {
                            'exemplarCity': 'विएनतियान'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'व्लादिवोस्तोक'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'याकूत्स्क'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'येकातेरिनबर्ग'
                        },
                        'Yerevan': {
                            'exemplarCity': 'येरेवान'
                        },
                        'Tokyo': {
                            'exemplarCity': 'टोक्यो'
                        },
                        'Thimphu': {
                            'exemplarCity': 'थिंपू'
                        },
                        'Tehran': {
                            'exemplarCity': 'तेहरान'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'टबिलिसी'
                        },
                        'Tashkent': {
                            'exemplarCity': 'ताशकंद'
                        },
                        'Taipei': {
                            'exemplarCity': 'ताईपेई'
                        },
                        'Singapore': {
                            'exemplarCity': 'सिंगापुर'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'यरूशलम'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'अश्गाबात'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'अक्तोब'
                        },
                        'Aqtau': {
                            'exemplarCity': 'अक्ताउ'
                        },
                        'Anadyr': {
                            'exemplarCity': 'अनाडिर'
                        },
                        'Amman': {
                            'exemplarCity': 'अम्मान'
                        },
                        'Almaty': {
                            'exemplarCity': 'अल्माटी'
                        },
                        'Aden': {
                            'exemplarCity': 'आदेन'
                        },
                        'Bahrain': {
                            'exemplarCity': 'बहरीन'
                        },
                        'Baku': {
                            'exemplarCity': 'बाकु'
                        },
                        'Bangkok': {
                            'exemplarCity': 'बैंकॉक'
                        },
                        'Beirut': {
                            'exemplarCity': 'बेरुत'
                        },
                        'Bishkek': {
                            'exemplarCity': 'बिश्केक'
                        },
                        'Brunei': {
                            'exemplarCity': 'ब्रूनेई'
                        },
                        'Calcutta': {
                            'exemplarCity': 'कोलकाता'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'चोइबालसन'
                        },
                        'Kabul': {
                            'exemplarCity': 'काबुल'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'कमचत्का'
                        },
                        'Karachi': {
                            'exemplarCity': 'कराची'
                        },
                        'Kashgar': {
                            'exemplarCity': 'काश्गर'
                        },
                        'Katmandu': {
                            'exemplarCity': 'काठमांडू'
                        },
                        'Khandyga': {
                            'exemplarCity': 'खांडिगा'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'क्रास्नोयार्स्क'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'कुआलालंपुर'
                        },
                        'Kuching': {
                            'exemplarCity': 'कूचिंग'
                        },
                        'Kuwait': {
                            'exemplarCity': 'कुवैत'
                        },
                        'Macau': {
                            'exemplarCity': 'मकाउ'
                        },
                        'Magadan': {
                            'exemplarCity': 'मागादान'
                        },
                        'Makassar': {
                            'exemplarCity': 'मकस्सर'
                        },
                        'Manila': {
                            'exemplarCity': 'मनीला'
                        },
                        'Muscat': {
                            'exemplarCity': 'मस्कट'
                        },
                        'Nicosia': {
                            'exemplarCity': 'निकोसिया'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'नोवोकुज़्नेत्स्क'
                        }
                    }
                },
                'metazone': {
                    'Tokelau': {
                        'long': {
                            'standard': 'टोकेलाऊ समय'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'ताजिकिस्तान समय'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'ताइपे समय',
                            'standard': 'ताइपे मानक समय',
                            'daylight': 'ताइपे डेलाइट समय'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'ताहिती समय'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'स्योवा समय'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'सूरीनाम समय'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'दक्षिणी जॉर्जिया समय'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'सोलोमन द्वीपसमूह समय'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'सिंगापुर समय'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'सेशल्स समय'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'समोआ समय',
                            'standard': 'समोआ मानक समय',
                            'daylight': 'समोआ ग्रीष्मकालीन समय'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'समारा समय',
                            'standard': 'समारा मानक समय',
                            'daylight': 'समारा ग्रीष्मकालीन समय'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'सखालिन समय',
                            'standard': 'सखालिन मानक समय',
                            'daylight': 'सखालिन ग्रीष्मकालीन समय'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'रोथेरा समय'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'रीयूनियन समय'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'अटलांटिक समय',
                            'standard': 'अटलांटिक मानक समय',
                            'daylight': 'अटलांटिक डेलाइट समय'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'उत्तरी अमेरिकी केंद्रीय समय',
                            'standard': 'उत्तरी अमेरिकी केंद्रीय मानक समय',
                            'daylight': 'उत्तरी अमेरिकी केंद्रीय डेलाइट समय'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'अमेज़न समय',
                            'standard': 'अमेज़न मानक समय',
                            'daylight': 'अमेज़न ग्रीष्मकालीन समय'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'अलास्का समय',
                            'standard': 'अलास्‍का मानक समय',
                            'daylight': 'अलास्‍का डेलाइट समय'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'पश्चिम अफ़्रीका समय',
                            'standard': 'पश्चिम अफ़्रीका मानक समय',
                            'daylight': 'पश्चिम अफ़्रीका ग्रीष्मकालीन समय'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'दक्षिण अफ़्रीका समय'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'पूर्वी अफ़्रीका समय'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'मध्य अफ़्रीका समय'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'अफ़गानिस्तान समय'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'उत्तरी अमेरिकी पूर्वी समय',
                            'standard': 'उत्तरी अमेरिकी पूर्वी मानक समय',
                            'daylight': 'उत्तरी अमेरिकी पूर्वी डेलाइट समय'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'उत्तरी अमेरिकी माउंटेन समय',
                            'standard': 'उत्तरी अमेरिकी माउंटेन मानक समय',
                            'daylight': 'उत्तरी अमेरिकी माउंटेन डेलाइट समय'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'उत्तरी अमेरिकी प्रशांत समय',
                            'standard': 'उत्तरी अमेरिकी प्रशांत मानक समय',
                            'daylight': 'उत्तरी अमेरिकी प्रशांत डेलाइट समय'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'एनाडीयर समय',
                            'standard': 'एनाडीयर मानक समय',
                            'daylight': 'एनाडीयर ग्रीष्मकालीन समय'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'अरब समय',
                            'standard': 'अरब मानक समय',
                            'daylight': 'अरब डेलाइट समय'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'अर्जेंटीना समय',
                            'standard': 'अर्जेंटीना मानक समय',
                            'daylight': 'अर्जेंटीना ग्रीष्मकालीन समय'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'पश्चिमी अर्जेंटीना समय',
                            'standard': 'पश्चिमी अर्जेंटीना मानक समय',
                            'daylight': 'पश्चिमी अर्जेंटीना ग्रीष्मकालीन समय'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'आर्मेनिया समय',
                            'standard': 'आर्मेनिया मानक समय',
                            'daylight': 'आर्मेनिया ग्रीष्मकालीन समय'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'चीन समय',
                            'standard': 'चीन मानक समय',
                            'daylight': 'चीन डेलाइट समय'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'कॉइबाल्सन समय',
                            'standard': 'कॉइबाल्सन मानक समय',
                            'daylight': 'कॉइबाल्सन ग्रीष्मकालीन समय'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'क्रिसमस द्वीप समय'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'कोकोस द्वीपसमूह समय'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'कोलंबिया समय',
                            'standard': 'कोलंबिया मानक समय',
                            'daylight': 'कोलंबिया ग्रीष्मकालीन समय'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'कुक द्वीपसमूह समय',
                            'standard': 'कुक द्वीपसमूह मानक समय',
                            'daylight': 'कुक द्वीपसमूह अर्द्ध ग्रीष्मकालीन समय'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'क्यूबा समय',
                            'standard': 'क्यूबा मानक समय',
                            'daylight': 'क्यूबा डेलाइट समय'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'डेविस समय'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'ड्यूमोंट डर्विल समय'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'पूर्वी तिमोर समय'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'ईस्टर द्वीप समय',
                            'standard': 'ईस्टर द्वीप मानक समय',
                            'daylight': 'ईस्टर द्वीप ग्रीष्मकालीन समय'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'इक्वाडोर समय'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'मध्य यूरोपीय समय',
                            'standard': 'मध्य यूरोपीय मानक समय',
                            'daylight': 'मध्‍य यूरोप ग्रीष्‍मकालीन समय'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'पूर्वी यूरोपीय समय',
                            'standard': 'पूर्वी यूरोपीय मानक समय',
                            'daylight': 'पूर्वी यूरोपीय ग्रीष्मकालीन समय'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'पश्चिमी यूरोपीय समय',
                            'standard': 'पश्चिमी यूरोपीय मानक समय',
                            'daylight': 'पश्चिमी यूरोपीय ग्रीष्‍मकालीन समय'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'भारतीय समय'
                        },
                        'short': {
                            'standard': 'IST'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'टोंगा समय',
                            'standard': 'टोंगा मानक समय',
                            'daylight': 'टोंगा ग्रीष्मकालीन समय'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'चूक समय'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'तुर्कमेनिस्तान समय',
                            'standard': 'तुर्कमेनिस्तान मानक समय',
                            'daylight': 'तुर्कमेनिस्तान ग्रीष्मकालीन समय'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'तुवालू समय'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'उरुग्वे समय',
                            'standard': 'उरुग्वे मानक समय',
                            'daylight': 'उरुग्वे ग्रीष्मकालीन समय'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'उज़्बेकिस्तान समय',
                            'standard': 'उज़्बेकिस्तान मानक समय',
                            'daylight': 'उज़्बेकिस्तान ग्रीष्मकालीन समय'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'वनुआतू समय',
                            'standard': 'वनुआतू मानक समय',
                            'daylight': 'वनुआतू ग्रीष्मकालीन समय'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'येकातेरिनबर्ग समय',
                            'standard': 'येकातेरिनबर्ग मानक समय',
                            'daylight': 'येकातेरिनबर्ग ग्रीष्मकालीन समय'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'याकुत्स्क समय',
                            'standard': 'याकुत्स्क मानक समय',
                            'daylight': 'याकुत्स्क ग्रीष्मकालीन समय'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'वालिस और फ़्यूचूना समय'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'वेक द्वीप समय'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'वोस्तोक समय'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'वोल्गोग्राड समय',
                            'standard': 'वोल्गोग्राड मानक समय',
                            'daylight': 'वोल्गोग्राड ग्रीष्मकालीन समय'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'व्लादिवोस्तोक समय',
                            'standard': 'व्लादिवोस्तोक मानक समय',
                            'daylight': 'व्लादिवोस्तोक ग्रीष्मकालीन समय'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'वेनेज़ुएला समय'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'होव्ड समय',
                            'standard': 'होव्ड मानक समय',
                            'daylight': 'होव्ड ग्रीष्मकालीन समय'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'हाँग काँग समय',
                            'standard': 'हाँग काँग मानक समय',
                            'daylight': 'हाँग काँग ग्रीष्मकालीन समय'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'हवाई–आल्यूशन समय',
                            'standard': 'हवाई–आल्यूशन मानक समय',
                            'daylight': 'हवाई–आल्यूशन डेलाइट समय'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'गुयाना समय'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'खाड़ी मानक समय'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'पश्चिमी ग्रीनलैंड समय',
                            'standard': 'पश्चिमी ग्रीनलैंड मानक समय',
                            'daylight': 'पश्चिमी ग्रीनलैंड ग्रीष्मकालीन समय'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'पूर्वी ग्रीनलैंड समय',
                            'standard': 'पूर्वी ग्रीनलैंड मानक समय',
                            'daylight': 'पूर्वी ग्रीनलैंड ग्रीष्मकालीन समय'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'ग्रीनविच मीन टाइम'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'गिल्बर्ट द्वीपसमूह समय'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'जॉर्जिया समय',
                            'standard': 'जॉर्जिया मानक समय',
                            'daylight': 'जॉर्जिया ग्रीष्मकालीन समय'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'गैंबियर समय'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'गैलापेगोस का समय'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'दक्षिणी फ़्रांस और अंटार्कटिक समय'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'फ़्रेंच गुयाना समय'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'फ़िजी का समय',
                            'standard': 'फ़िजी का मानक समय',
                            'daylight': 'फ़िजी का ग्रीष्मकालीन समय'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'फ़ॉकलैंड द्वीपसमूह समय',
                            'standard': 'फ़ॉकलैंड द्वीपसमूह मानक समय',
                            'daylight': 'फ़ॉकलैंड द्वीपसमूह ग्रीष्मकालीन समय'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'मध्य ऑस्ट्रेलियाई समय',
                            'standard': 'ऑस्‍ट्रेलियाई केंद्रीय मानक समय',
                            'daylight': 'ऑस्‍ट्रेलियाई केंद्रीय डेलाइट समय'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'ऑस्‍ट्रेलियाई केंद्रीय पश्चिमी समय',
                            'standard': 'ऑस्‍ट्रेलियाई केंद्रीय पश्चिमी मानक समय',
                            'daylight': 'ऑस्‍ट्रेलियाई केंद्रीय पश्चिमी डेलाइट समय'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'पूर्वी ऑस्ट्रेलिया समय',
                            'standard': 'ऑस्‍ट्रेलियाई पूर्वी मानक समय',
                            'daylight': 'ऑस्‍ट्रेलियाई पूर्वी डेलाइट समय'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'पश्चिमी ऑस्ट्रेलिया समय',
                            'standard': 'ऑस्ट्रेलियाई पश्चिमी मानक समय',
                            'daylight': 'ऑस्ट्रेलियाई पश्चिमी डेलाइट समय'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'अज़रबैजान समय',
                            'standard': 'अज़रबैजान मानक समय',
                            'daylight': 'अज़रबैजान ग्रीष्मकालीन समय'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'अज़ोरेस समय',
                            'standard': 'अज़ोरेस मानक समय',
                            'daylight': 'अज़ोरेस ग्रीष्मकालीन समय'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'बांग्लादेश समय',
                            'standard': 'बांग्लादेश मानक समय',
                            'daylight': 'बांग्लादेश ग्रीष्मकालीन समय'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'भूटान समय'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'बोलीविया समय'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'ब्राजीलिया समय',
                            'standard': 'ब्राजीलिया मानक समय',
                            'daylight': 'ब्राजीलिया ग्रीष्मकालीन समय'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'ब्रूनेई दारूस्सलाम समय'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'केप वर्ड समय',
                            'standard': 'केप वर्ड मानक समय',
                            'daylight': 'केप वर्ड ग्रीष्मकालीन समय'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'चामोरो मानक समय'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'चैथम समय',
                            'standard': 'चैथम मानक समय',
                            'daylight': 'चैथम डेलाइट समय'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'चिली समय',
                            'standard': 'चिली मानक समय',
                            'daylight': 'चिली ग्रीष्मकालीन समय'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'हिंद महासागर समय'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'इंडोचाइना समय'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'मध्य इंडोनेशिया समय'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'पूर्वी इंडोनेशिया समय'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'पश्चिमी इंडोनेशिया समय'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'ईरान समय',
                            'standard': 'ईरान मानक समय',
                            'daylight': 'ईरान डेलाइट समय'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'इर्कुत्स्क समय',
                            'standard': 'इर्कुत्स्क मानक समय',
                            'daylight': 'इर्कुत्स्क ग्रीष्मकालीन समय'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'इज़राइल समय',
                            'standard': 'इज़राइल मानक समय',
                            'daylight': 'इज़राइल डेलाइट समय'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'जापान समय',
                            'standard': 'जापान मानक समय',
                            'daylight': 'जापान डेलाइट समय'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'पेट्रोपेवलास्क-कैमचात्सकी समय',
                            'standard': 'पेट्रोपेवलास्क-कैमचात्सकी मानक समय',
                            'daylight': 'पेट्रोपेवलास्क-कैमचात्सकी ग्रीष्मकालीन समय'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'पूर्व कज़ाखस्तान समय'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'पश्चिम कज़ाखस्तान समय'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'कोरियाई समय',
                            'standard': 'कोरियाई मानक समय',
                            'daylight': 'कोरियाई डेलाइट समय'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'कोसराए समय'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'क्रास्नोयार्स्क समय',
                            'standard': 'क्रास्नोयार्स्क मानक समय',
                            'daylight': 'क्रास्नोयार्स्क ग्रीष्मकालीन समय'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'किर्गिस्‍तान समय'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'लाइन द्वीपसमूह समय'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'लॉर्ड होवे समय',
                            'standard': 'लॉर्ड होवे मानक समय',
                            'daylight': 'लॉर्ड होवे डेलाइट समय'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'मक्वारी द्वीप समय'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'मागादान समय',
                            'standard': 'मागादान मानक समय',
                            'daylight': 'मागादान ग्रीष्मकालीन समय'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'मलेशिया समय'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'मालदीव समय'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'मार्कोसिस समय'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'मार्शल द्वीपसमूह समय'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'मॉरीशस समय',
                            'standard': 'मॉरीशस मानक समय',
                            'daylight': 'मॉरीशस ग्रीष्मकालीन समय'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'माव्सन समय'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'उलान बटोर समय',
                            'standard': 'उलान बटोर मानक समय',
                            'daylight': 'उलान बटोर ग्रीष्मकालीन समय'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'मॉस्को समय',
                            'standard': 'मॉस्को मानक समय',
                            'daylight': 'मॉस्को ग्रीष्मकालीन समय'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'म्यांमार समय'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'नौरू समय'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'नेपाल समय'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'न्यू कैलेडोनिया समय',
                            'standard': 'न्यू कैलेडोनिया मानक समय',
                            'daylight': 'न्यू कैलेडोनिया ग्रीष्मकालीन समय'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'न्यूज़ीलैंड समय',
                            'standard': 'न्यूज़ीलैंड मानक समय',
                            'daylight': 'न्यूज़ीलैंड डेलाइट समय'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'न्यूफ़ाउंडलैंड समय',
                            'standard': 'न्यूफ़ाउंडलैंड मानक समय',
                            'daylight': 'न्यूफ़ाउंडलैंड डेलाइट समय'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'नीयू समय'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'नॉरफ़ॉक द्वीप समय'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'फ़र्नांर्डो डे नोरोन्हा समय',
                            'standard': 'फ़र्नांर्डो डे नोरोन्हा मानक समय',
                            'daylight': 'फ़र्नांर्डो डे नोरोन्हा ग्रीष्मकालीन समय'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'नोवोसिबिर्स्क समय',
                            'standard': 'नोवोसिबिर्स्क मानक समय',
                            'daylight': 'नोवोसिबिर्स्क ग्रीष्मकालीन समय'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'ओम्स्क समय',
                            'standard': 'ओम्स्क मानक समय',
                            'daylight': 'ओम्स्क ग्रीष्मकालीन समय'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'पाकिस्तान समय',
                            'standard': 'पाकिस्तान मानक समय',
                            'daylight': 'पाकिस्तान ग्रीष्मकालीन समय'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'पलाउ समय'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'पापुआ न्यू गिनी समय'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'पैराग्वे समय',
                            'standard': 'पैराग्वे मानक समय',
                            'daylight': 'पैराग्वे ग्रीष्मकालीन समय'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'पेरू समय',
                            'standard': 'पेरू मानक समय',
                            'daylight': 'पेरू ग्रीष्मकालीन समय'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'फ़िलिपीन समय',
                            'standard': 'फ़िलिपीन मानक समय',
                            'daylight': 'फ़िलिपीन ग्रीष्मकालीन समय'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'फ़ीनिक्स द्वीपसमूह समय'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'सेंट पियरे और मिकेलान टाइम',
                            'standard': 'सेंट पियरे और मिकेलान मानक टाइम',
                            'daylight': 'सेंट पियरे और मिकेलान डेलाइट टाइम'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'पिटकैर्न समय'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'पोनापे समय'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} समय',
                'regionFormat-type-daylight': '{0} डेलाइट समय',
                'regionFormat-type-standard': '{0} मानक समय',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'अग',
                                '7': 'जुला',
                                '6': 'जून',
                                '5': 'मई',
                                '12': 'दिसं',
                                '11': 'नवं',
                                '10': 'अक्टू',
                                '9': 'सितं',
                                '1': 'जन',
                                '2': 'फ़र',
                                '3': 'मार्च',
                                '4': 'अप्रै'
                            },
                            'narrow': {
                                '8': 'अ',
                                '7': 'जु',
                                '6': 'जू',
                                '5': 'म',
                                '12': 'दि',
                                '11': 'न',
                                '10': 'अ',
                                '9': 'सि',
                                '1': 'ज',
                                '2': 'फ़',
                                '3': 'मा',
                                '4': 'अ'
                            },
                            'wide': {
                                '8': 'अगस्त',
                                '7': 'जुलाई',
                                '6': 'जून',
                                '5': 'मई',
                                '12': 'दिसंबर',
                                '11': 'नवंबर',
                                '10': 'अक्टूबर',
                                '9': 'सितंबर',
                                '1': 'जनवरी',
                                '2': 'फ़रवरी',
                                '3': 'मार्च',
                                '4': 'अप्रैल'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'अग',
                                '7': 'जुला',
                                '6': 'जून',
                                '5': 'मई',
                                '12': 'दिसं',
                                '11': 'नवं',
                                '10': 'अक्टू',
                                '9': 'सितं',
                                '1': 'जन',
                                '2': 'फ़र',
                                '3': 'मार्च',
                                '4': 'अप्रै'
                            },
                            'narrow': {
                                '8': 'अ',
                                '7': 'जु',
                                '6': 'जू',
                                '5': 'म',
                                '12': 'दि',
                                '11': 'न',
                                '10': 'अ',
                                '9': 'सि',
                                '1': 'ज',
                                '2': 'फ़',
                                '3': 'मा',
                                '4': 'अ'
                            },
                            'wide': {
                                '8': 'अगस्त',
                                '7': 'जुलाई',
                                '6': 'जून',
                                '5': 'मई',
                                '12': 'दिसंबर',
                                '11': 'नवंबर',
                                '10': 'अक्टूबर',
                                '9': 'सितंबर',
                                '1': 'जनवरी',
                                '2': 'फ़रवरी',
                                '3': 'मार्च',
                                '4': 'अप्रैल'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'रवि',
                                'mon': 'सोम',
                                'tue': 'मंगल',
                                'wed': 'बुध',
                                'thu': 'गुरु',
                                'fri': 'शुक्र',
                                'sat': 'शनि'
                            },
                            'narrow': {
                                'sun': 'र',
                                'mon': 'सो',
                                'tue': 'मं',
                                'wed': 'बु',
                                'thu': 'गु',
                                'fri': 'शु',
                                'sat': 'श'
                            },
                            'short': {
                                'sun': 'र',
                                'mon': 'सो',
                                'tue': 'मं',
                                'wed': 'बु',
                                'thu': 'गु',
                                'fri': 'शु',
                                'sat': 'श'
                            },
                            'wide': {
                                'sun': 'रविवार',
                                'mon': 'सोमवार',
                                'tue': 'मंगलवार',
                                'wed': 'बुधवार',
                                'thu': 'गुरुवार',
                                'fri': 'शुक्रवार',
                                'sat': 'शनिवार'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'रवि',
                                'mon': 'सोम',
                                'tue': 'मंगल',
                                'wed': 'बुध',
                                'thu': 'गुरु',
                                'fri': 'शुक्र',
                                'sat': 'शनि'
                            },
                            'narrow': {
                                'sun': 'र',
                                'mon': 'सो',
                                'tue': 'मं',
                                'wed': 'बु',
                                'thu': 'गु',
                                'fri': 'शु',
                                'sat': 'श'
                            },
                            'short': {
                                'sun': 'र',
                                'mon': 'सो',
                                'tue': 'मं',
                                'wed': 'बु',
                                'thu': 'गु',
                                'fri': 'शु',
                                'sat': 'श'
                            },
                            'wide': {
                                'sun': 'रविवार',
                                'mon': 'सोमवार',
                                'tue': 'मंगलवार',
                                'wed': 'बुधवार',
                                'thu': 'गुरुवार',
                                'fri': 'शुक्रवार',
                                'sat': 'शनिवार'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'ति1',
                                '2': 'ति2',
                                '3': 'ति3',
                                '4': 'ति4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'पहली तिमाही',
                                '2': 'दूसरी तिमाही',
                                '3': 'तीसरी तिमाही',
                                '4': 'चौथी तिमाही'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'ति1',
                                '2': 'ति2',
                                '3': 'ति3',
                                '4': 'ति4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'पहली तिमाही',
                                '2': 'दूसरी तिमाही',
                                '3': 'तीसरी तिमाही',
                                '4': 'चौथी तिमाही'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'पूर्व',
                                'pm': 'अपर'
                            },
                            'narrow': {
                                'am': 'पू',
                                'pm': 'अ'
                            },
                            'wide': {
                                'am': 'पूर्वाह्न',
                                'pm': 'अपराह्न'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'पूर्व',
                                'pm': 'अपर'
                            },
                            'narrow': {
                                'am': 'पू',
                                'pm': 'अ'
                            },
                            'wide': {
                                'am': 'पूर्वाह्न',
                                'pm': 'अपराह्न'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'ईसा-पूर्व',
                            '0-alt-variant': 'BCE',
                            '1': 'ईस्वी',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'ईसा-पूर्व',
                            '0-alt-variant': 'BCE',
                            '1': 'ईस्वी',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'ईसा-पूर्व',
                            '0-alt-variant': 'BCE',
                            '1': 'ईस्वी',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'dd-MM-y',
                        'short': 'd-M-yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} को {0}',
                        'long': '{1} को {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMM': 'MM-y',
                            'yMEd': 'E, d/M/y',
                            'yMd': 'd/M/y',
                            'yM': 'M/y',
                            'y': 'y',
                            'ms': 'mm:ss',
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'GyMMMd': 'd MMM, G y',
                            'GyMMMEd': 'E, d MMM, G y',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM, y',
                            'yMMM': 'MMM y',
                            'yMMdd': 'dd-MM-y',
                            'Hms': 'HH:mm:ss',
                            'Ed': 'E d',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM G y',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, d/M',
                            'MMdd': 'dd-MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMdd': 'dd MMM',
                            'MMMEd': 'E, d MMM',
                            'MMMMd': 'd MMMM'
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
                                'd': 'E, d MMM – E, d MMM',
                                'M': 'E, d MMM – E, d MMM'
                            },
                            'MMMd': {
                                'd': 'd MMM–d',
                                'M': 'd MMM – d MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M – E, d/M',
                                'M': 'E, d/M – E, d/M'
                            },
                            'Md': {
                                'd': 'd/M – d/M',
                                'M': 'd/M – d/M'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'M/y – M/y',
                                'y': 'M/y – M/y'
                            },
                            'yMd': {
                                'd': 'd/M/y – d/M/y',
                                'M': 'd/M/y – d/M/y',
                                'y': 'd/M/y – d/M/y'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y – E, d/M/y',
                                'M': 'E, d/M/y – E, d/M/y',
                                'y': 'E, d/M/y – E, d/M/y'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'yMMMd': {
                                'd': 'd MMM–d, y',
                                'M': 'd MMM – d MMM, y',
                                'y': 'd MMM, y – d MMM, y'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM – E, d MMM, y',
                                'M': 'E, d MMM – E, d MMM, y',
                                'y': 'E, d MMM, y – E, d MMM, y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM y',
                                'y': 'MMMM y – MMMM y'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm–h:mm a',
                                'm': 'h:mm–h:mm a'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'intervalFormatFallback': '{0} – {1}'
                        }
                    }
                }
            }
        });
    }));
}((function (thisContext) {
    'use strict';
    /*global window, global, self */

    // detect the global context of the environment
    if ('object' === typeof window && null !== window && window.window === window) {
        thisContext = window;
    } else if ('object' === typeof global && null !== global && global.global === global) {
        thisContext = global;
    } else if ('object' === typeof self && null !== self && self.self === self) {
        thisContext = self;
    }

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    /*global */
    return thisContext;
}(this))));
