/* AstroDate Language: he
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
        AstroDate.lang('he', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'סייפן'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'רארוטונגה'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'פורט מורסבי'
                        },
                        'Ponape': {
                            'exemplarCity': 'פונפה'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'פיטקרן'
                        },
                        'Palau': {
                            'exemplarCity': 'פלאו'
                        },
                        'Auckland': {
                            'exemplarCity': 'פסיפי/אוקלנד'
                        },
                        'Apia': {
                            'exemplarCity': 'אפיה'
                        },
                        'Funafuti': {
                            'exemplarCity': 'פונפוטי'
                        },
                        'Galapagos': {
                            'exemplarCity': 'פסיפי/גלאפגוס'
                        },
                        'Gambier': {
                            'exemplarCity': 'איי גמביר'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'גוודלקנאל'
                        },
                        'Guam': {
                            'exemplarCity': 'גואם'
                        },
                        'Honolulu': {
                            'exemplarCity': 'פסיפי/הונולולו'
                        },
                        'Wallis': {
                            'exemplarCity': 'ווליס'
                        },
                        'Wake': {
                            'exemplarCity': 'וואק'
                        },
                        'Truk': {
                            'exemplarCity': 'טרוק'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'טונגטפו'
                        },
                        'Tarawa': {
                            'exemplarCity': 'טאראווה'
                        },
                        'Tahiti': {
                            'exemplarCity': 'פסיפי/טהיטי'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'קיריטימאטי'
                        },
                        'Johnston': {
                            'exemplarCity': 'ג׳ונסטון'
                        },
                        'Chatham': {
                            'exemplarCity': 'צ׳אטהאם'
                        },
                        'Easter': {
                            'exemplarCity': 'איי הפסחא'
                        },
                        'Efate': {
                            'exemplarCity': 'אפטה'
                        },
                        'Enderbury': {
                            'exemplarCity': 'אנדרבורי'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'פקאופו'
                        },
                        'Fiji': {
                            'exemplarCity': 'פיג׳י'
                        },
                        'Kosrae': {
                            'exemplarCity': 'קוסרה'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'קוואג׳ליין'
                        },
                        'Majuro': {
                            'exemplarCity': 'מאג׳ורו'
                        },
                        'Marquesas': {
                            'exemplarCity': 'איי מרקיז'
                        },
                        'Midway': {
                            'exemplarCity': 'מידוויי'
                        },
                        'Nauru': {
                            'exemplarCity': 'נאורו'
                        },
                        'Niue': {
                            'exemplarCity': 'ניווה'
                        },
                        'Norfolk': {
                            'exemplarCity': 'נורפוק'
                        },
                        'Noumea': {
                            'exemplarCity': 'נומאה'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'פאגו פאגו'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'לינדמן'
                        },
                        'Hobart': {
                            'exemplarCity': 'אוסטרליה/הוברט'
                        },
                        'Eucla': {
                            'exemplarCity': 'יוקלה'
                        },
                        'Darwin': {
                            'exemplarCity': 'אוסטרליה/דרווין'
                        },
                        'Sydney': {
                            'exemplarCity': 'אוסטרליה/סידני'
                        },
                        'Perth': {
                            'exemplarCity': 'אוסטרליה/פרת׳'
                        },
                        'Melbourne': {
                            'exemplarCity': 'אוסטרליה/מלבורן'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'לורד האו'
                        },
                        'Adelaide': {
                            'exemplarCity': 'אדלייד'
                        },
                        'Brisbane': {
                            'exemplarCity': 'אוסטרליה/בריסבן'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'אוסטרליה/ברוקן-היל'
                        },
                        'Currie': {
                            'exemplarCity': 'קרי'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'האיים המלדיביים'
                        },
                        'Mahe': {
                            'exemplarCity': 'מהא'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'קרגוולן'
                        },
                        'Reunion': {
                            'exemplarCity': 'ראוניון'
                        },
                        'Mayotte': {
                            'exemplarCity': 'מאיוט'
                        },
                        'Mauritius': {
                            'exemplarCity': 'מאוריציוס'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'אנטננריבו'
                        },
                        'Chagos': {
                            'exemplarCity': 'צ׳אגוס'
                        },
                        'Christmas': {
                            'exemplarCity': 'קריסמס'
                        },
                        'Cocos': {
                            'exemplarCity': 'קוקוס'
                        },
                        'Comoro': {
                            'exemplarCity': 'קומורו'
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
                            'exemplarCity': 'עיר לא ידועה'
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
                            'exemplarCity': 'רות׳רה'
                        },
                        'Palmer': {
                            'exemplarCity': 'אמריקה/פאלמר'
                        },
                        'McMurdo': {
                            'exemplarCity': 'מקמרדו'
                        },
                        'Vostok': {
                            'exemplarCity': 'ווסטוק'
                        },
                        'Syowa': {
                            'exemplarCity': 'שויה'
                        },
                        'South_Pole': {
                            'exemplarCity': 'הקוטב הדרומי'
                        },
                        'Casey': {
                            'exemplarCity': 'קאסיי'
                        },
                        'Davis': {
                            'exemplarCity': 'דייויס'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'דומון ד׳אורווי'
                        },
                        'Macquarie': {
                            'exemplarCity': 'מקרי'
                        },
                        'Mawson': {
                            'exemplarCity': 'מאוסון'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'לונגיירביאן'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'אמריקה/טורנטו'
                        },
                        'Tijuana': {
                            'exemplarCity': 'טיחואנה'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'ת׳אנדר ביי'
                        },
                        'Thule': {
                            'exemplarCity': 'טולה'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'טגוסיגלפה'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'סוויפט קרנט'
                        },
                        'Chicago': {
                            'exemplarCity': 'אמריקה/שיקגו'
                        },
                        'Cayman': {
                            'exemplarCity': 'קיימן'
                        },
                        'Cayenne': {
                            'exemplarCity': 'קאיין'
                        },
                        'Catamarca': {
                            'exemplarCity': 'קטמרקה'
                        },
                        'Caracas': {
                            'exemplarCity': 'קראקס'
                        },
                        'Cancun': {
                            'exemplarCity': 'אמריקה/קנקון'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'קמפו גרנדה'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'קיימברידג׳ ביי'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'בואנוס איירס'
                        },
                        'Boise': {
                            'exemplarCity': 'בויסי'
                        },
                        'Asuncion': {
                            'exemplarCity': 'אסונסיון'
                        },
                        'Aruba': {
                            'exemplarCity': 'ארובה'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'ריו גאייגוס'
                            },
                            'San_Juan': {
                                'exemplarCity': 'אמריקה/ארגנטינה/סאן-חואן'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'אושוואיה'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'לה ריוחה'
                            },
                            'San_Luis': {
                                'exemplarCity': 'סן לואיס'
                            },
                            'Salta': {
                                'exemplarCity': 'סלטה'
                            },
                            'Tucuman': {
                                'exemplarCity': 'טוקומן'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'אראגואינה'
                        },
                        'Antigua': {
                            'exemplarCity': 'אנטיגואה'
                        },
                        'Anguilla': {
                            'exemplarCity': 'אנגווילה'
                        },
                        'Anchorage': {
                            'exemplarCity': 'אנקורג׳'
                        },
                        'Adak': {
                            'exemplarCity': 'אדאק'
                        },
                        'Bahia': {
                            'exemplarCity': 'אמריקה/בהיאה'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'באהיה בנדרס'
                        },
                        'Barbados': {
                            'exemplarCity': 'ברבדוס'
                        },
                        'Belem': {
                            'exemplarCity': 'בלם'
                        },
                        'Belize': {
                            'exemplarCity': 'בליז'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'בלאן-סבלון'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'בואה ויסטה'
                        },
                        'Bogota': {
                            'exemplarCity': 'בוגוטה'
                        },
                        'Curacao': {
                            'exemplarCity': 'קוראסאו'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'דנמרקסהוון'
                        },
                        'Dawson': {
                            'exemplarCity': 'דאוסון'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'אמריקה/דוסון-קריק'
                        },
                        'Denver': {
                            'exemplarCity': 'אמריקה/דנוור'
                        },
                        'Detroit': {
                            'exemplarCity': 'אמריקה/דטרויט'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'ארמוסיו'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'וינסנס, אינדיאנה'
                            },
                            'Petersburg': {
                                'exemplarCity': 'פיטרסבורג, אינדיאנה'
                            },
                            'Tell_City': {
                                'exemplarCity': 'טל סיטי, אינדיאנה'
                            },
                            'Knox': {
                                'exemplarCity': 'נוקס, אינדיאנה'
                            },
                            'Winamac': {
                                'exemplarCity': 'וינמאק, אינדיאנה'
                            },
                            'Marengo': {
                                'exemplarCity': 'מרנגו, אינדיאנה'
                            },
                            'Vevay': {
                                'exemplarCity': 'ויוואיי, אינדיאנה'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'אינדיאנפוליס'
                        },
                        'Inuvik': {
                            'exemplarCity': 'אינוויק'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'איקלואיט'
                        },
                        'Jamaica': {
                            'exemplarCity': 'ג׳מייקה'
                        },
                        'Jujuy': {
                            'exemplarCity': 'חוחוי'
                        },
                        'Juneau': {
                            'exemplarCity': 'ג׳ונו'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'ילונייף'
                        },
                        'Yakutat': {
                            'exemplarCity': 'יקוטאט'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'אמריקה/וויניפוג'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'ווייטהורס'
                        },
                        'Vancouver': {
                            'exemplarCity': 'אמריקה/ונקובר'
                        },
                        'Tortola': {
                            'exemplarCity': 'טורטולה'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'קרלנדייק'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'מונטיצ׳לו, קנטאקי'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'הוואנה'
                        },
                        'Halifax': {
                            'exemplarCity': 'אמריקה/הליפקס'
                        },
                        'Guyana': {
                            'exemplarCity': 'גיאנה'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'גואיאקיל'
                        },
                        'Guatemala': {
                            'exemplarCity': 'גואטמלה'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'גואדלופ'
                        },
                        'Grenada': {
                            'exemplarCity': 'גרנדה'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'גרנד טורק'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'גוס ביי'
                        },
                        'Godthab': {
                            'exemplarCity': 'נואוק'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'גלייס ביי'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'פורטאלזה'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'אל סלבדור'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'אירונפי'
                        },
                        'Edmonton': {
                            'exemplarCity': 'אמריקה/אדמנטון'
                        },
                        'Dominica': {
                            'exemplarCity': 'דומיניקה'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'צ׳יוואווה'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'אטיקוקן'
                        },
                        'Cordoba': {
                            'exemplarCity': 'אמריקה/קורדובה'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'קוסטה ריקה'
                        },
                        'Creston': {
                            'exemplarCity': 'קרסטון'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'קויאבה'
                        },
                        'La_Paz': {
                            'exemplarCity': 'לה פאס'
                        },
                        'Lima': {
                            'exemplarCity': 'לימה'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'אמריקה/לוס-אנג׳לס'
                        },
                        'Louisville': {
                            'exemplarCity': 'אמריקה/לואיסוויל'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'לואוור פרינסס קוורטר'
                        },
                        'Maceio': {
                            'exemplarCity': 'מאסיו'
                        },
                        'Managua': {
                            'exemplarCity': 'מנגואה'
                        },
                        'Manaus': {
                            'exemplarCity': 'מנאוס'
                        },
                        'Marigot': {
                            'exemplarCity': 'מריגו'
                        },
                        'Martinique': {
                            'exemplarCity': 'מרטיניק'
                        },
                        'Matamoros': {
                            'exemplarCity': 'מטמורוס'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'אמריקה/מזטלן'
                        },
                        'Mendoza': {
                            'exemplarCity': 'אמריקה/מנדוזה'
                        },
                        'Menominee': {
                            'exemplarCity': 'מנומיני'
                        },
                        'Merida': {
                            'exemplarCity': 'מרידה'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'מטלקטלה'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'אמריקה/מקסיקו סיטי'
                        },
                        'Miquelon': {
                            'exemplarCity': 'מיקלון'
                        },
                        'Moncton': {
                            'exemplarCity': 'מונקטון'
                        },
                        'Monterrey': {
                            'exemplarCity': 'אמריקה/מונטריי'
                        },
                        'Montevideo': {
                            'exemplarCity': 'מונטווידאו'
                        },
                        'Montreal': {
                            'exemplarCity': 'אמריקה/מונטריאול'
                        },
                        'Montserrat': {
                            'exemplarCity': 'מונסראט'
                        },
                        'Nassau': {
                            'exemplarCity': 'נסאו'
                        },
                        'New_York': {
                            'exemplarCity': 'אמריקה/ניו-יורק'
                        },
                        'Nipigon': {
                            'exemplarCity': 'ניפיגון'
                        },
                        'Nome': {
                            'exemplarCity': 'נום'
                        },
                        'Noronha': {
                            'exemplarCity': 'נורונהה'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'ביולה, צפון דקוטה'
                            },
                            'New_Salem': {
                                'exemplarCity': 'ניו סיילם, צפון דקוטה'
                            },
                            'Center': {
                                'exemplarCity': 'אמריקה/צפון דקוטה/מרכז'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'אוג׳ינאגה'
                        },
                        'Panama': {
                            'exemplarCity': 'פנמה'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'פנגנירטונג'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'פרמריבו'
                        },
                        'Phoenix': {
                            'exemplarCity': 'אמריקה/פיניקס'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'פורט או פראנס'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'פורט אוף ספיין'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'פורטו וולהו'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'פוארטו ריקו'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'רייני ריבר'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'רנקין אינלט'
                        },
                        'Recife': {
                            'exemplarCity': 'רסיפה'
                        },
                        'Regina': {
                            'exemplarCity': 'רג׳ינה'
                        },
                        'Resolute': {
                            'exemplarCity': 'רזולוט'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'ריאו ברנצ׳ו'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'סנטה איסבל'
                        },
                        'Santarem': {
                            'exemplarCity': 'סנטרם'
                        },
                        'Santiago': {
                            'exemplarCity': 'אמריקה/סנטיאגו'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'סנטו דומינגו'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'אמריקה/סאן-פאולו'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'סקורסביסונד'
                        },
                        'Shiprock': {
                            'exemplarCity': 'אמריקה/שיפרוק'
                        },
                        'Sitka': {
                            'exemplarCity': 'סיטקה'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'סנט ברתלמי'
                        },
                        'St_Johns': {
                            'exemplarCity': 'סנט ג׳ונס'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'סנט קיטס'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'סנט לוסיה'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'סנט תומאס'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'סנט וינסנט'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'סאות׳ ג׳ורג׳יה'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'רייקיאוויק'
                        },
                        'Stanley': {
                            'exemplarCity': 'סטנלי'
                        },
                        'St_Helena': {
                            'exemplarCity': 'סנט הלנה'
                        },
                        'Azores': {
                            'exemplarCity': 'האיים האזורים'
                        },
                        'Bermuda': {
                            'exemplarCity': 'ברמודה'
                        },
                        'Canary': {
                            'exemplarCity': 'אטלנטי/קנרי'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'כף ורדה'
                        },
                        'Faeroe': {
                            'exemplarCity': 'פארו'
                        },
                        'Madeira': {
                            'exemplarCity': 'מדיירה'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'אוסלו'
                        },
                        'Moscow': {
                            'exemplarCity': 'אירופה/מוסקבה'
                        },
                        'Monaco': {
                            'exemplarCity': 'מונקו'
                        },
                        'Minsk': {
                            'exemplarCity': 'מינסק'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'מריהמן'
                        },
                        'Malta': {
                            'exemplarCity': 'מלטה'
                        },
                        'Madrid': {
                            'exemplarCity': 'אירופה/מדריד'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'לוקסמבורג'
                        },
                        'London': {
                            'long': {
                                'daylight': 'שעון קיץ בריטי'
                            },
                            'exemplarCity': 'אירופה/לונדון'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'לובליאנה'
                        },
                        'Lisbon': {
                            'exemplarCity': 'אירופה/ליסבון'
                        },
                        'Kiev': {
                            'exemplarCity': 'אירופה/קייב'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'קלינינגרד'
                        },
                        'Jersey': {
                            'exemplarCity': 'ג׳רסי'
                        },
                        'Istanbul': {
                            'exemplarCity': 'איסטנבול'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'האי מאן'
                        },
                        'Bucharest': {
                            'exemplarCity': 'בוקרשט'
                        },
                        'Brussels': {
                            'exemplarCity': 'בריסל'
                        },
                        'Bratislava': {
                            'exemplarCity': 'ברטיסלבה'
                        },
                        'Berlin': {
                            'exemplarCity': 'ברלין'
                        },
                        'Belgrade': {
                            'exemplarCity': 'בלגרד'
                        },
                        'Athens': {
                            'exemplarCity': 'אתונה'
                        },
                        'Andorra': {
                            'exemplarCity': 'אנדורה'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'אמסטרדם'
                        },
                        'Simferopol': {
                            'exemplarCity': 'סימפרופול'
                        },
                        'Skopje': {
                            'exemplarCity': 'סקופיה'
                        },
                        'Sofia': {
                            'exemplarCity': 'סופיה'
                        },
                        'Stockholm': {
                            'exemplarCity': 'שטוקהולם'
                        },
                        'Tallinn': {
                            'exemplarCity': 'טלין'
                        },
                        'Tirane': {
                            'exemplarCity': 'טיראנה'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'אוז׳הורוד'
                        },
                        'Vaduz': {
                            'exemplarCity': 'ואדוז'
                        },
                        'Zurich': {
                            'exemplarCity': 'ציריך'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'זפוריז׳יה'
                        },
                        'Zagreb': {
                            'exemplarCity': 'זגרב'
                        },
                        'Warsaw': {
                            'exemplarCity': 'ורשה'
                        },
                        'Volgograd': {
                            'exemplarCity': 'וולגוגרד'
                        },
                        'Vilnius': {
                            'exemplarCity': 'וילנה'
                        },
                        'Vienna': {
                            'exemplarCity': 'וינה'
                        },
                        'Vatican': {
                            'exemplarCity': 'ותיקן'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'סרייבו'
                        },
                        'San_Marino': {
                            'exemplarCity': 'סן מרינו'
                        },
                        'Samara': {
                            'exemplarCity': 'אירופה/סמרה'
                        },
                        'Rome': {
                            'exemplarCity': 'רומא'
                        },
                        'Riga': {
                            'exemplarCity': 'ריגה'
                        },
                        'Prague': {
                            'exemplarCity': 'פראג'
                        },
                        'Podgorica': {
                            'exemplarCity': 'פודגוריקה'
                        },
                        'Paris': {
                            'exemplarCity': 'פריז'
                        },
                        'Helsinki': {
                            'exemplarCity': 'הלסינקי'
                        },
                        'Guernsey': {
                            'exemplarCity': 'גרנזי'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'גיברלטר'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'שעון קיץ אירי'
                            },
                            'exemplarCity': 'דבלין'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'קופנהגן'
                        },
                        'Chisinau': {
                            'exemplarCity': 'צ׳יסינאו'
                        },
                        'Busingen': {
                            'exemplarCity': 'בוזינגן'
                        },
                        'Budapest': {
                            'exemplarCity': 'בודפשט'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'ליברוויל'
                        },
                        'Lagos': {
                            'exemplarCity': 'לגוס'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'קינשסה'
                        },
                        'Kigali': {
                            'exemplarCity': 'קיגלי'
                        },
                        'Khartoum': {
                            'exemplarCity': 'חרטום'
                        },
                        'Kampala': {
                            'exemplarCity': 'קמפאלה'
                        },
                        'Juba': {
                            'exemplarCity': 'ג׳ובה'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'יוהנסבורג'
                        },
                        'Harare': {
                            'exemplarCity': 'הרארה'
                        },
                        'Gaborone': {
                            'exemplarCity': 'גבורונה'
                        },
                        'Freetown': {
                            'exemplarCity': 'פריטאון'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'אל עיון'
                        },
                        'Douala': {
                            'exemplarCity': 'דואלה'
                        },
                        'Djibouti': {
                            'exemplarCity': 'ג׳יבוטי'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'דאר א-סלאם'
                        },
                        'Dakar': {
                            'exemplarCity': 'דקאר'
                        },
                        'Banjul': {
                            'exemplarCity': 'בנג׳ול'
                        },
                        'Bangui': {
                            'exemplarCity': 'בנגואי'
                        },
                        'Bamako': {
                            'exemplarCity': 'במאקו'
                        },
                        'Asmera': {
                            'exemplarCity': 'אסמרה'
                        },
                        'Malabo': {
                            'exemplarCity': 'מלבו'
                        },
                        'Maputo': {
                            'exemplarCity': 'מאפוטו'
                        },
                        'Maseru': {
                            'exemplarCity': 'מסרו'
                        },
                        'Mbabane': {
                            'exemplarCity': 'אמבאבאנה'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'מוגדישו'
                        },
                        'Monrovia': {
                            'exemplarCity': 'מונרוביה'
                        },
                        'Nairobi': {
                            'exemplarCity': 'ניירובי'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'נג׳מנה'
                        },
                        'Windhoek': {
                            'exemplarCity': 'וינדהוק'
                        },
                        'Tunis': {
                            'exemplarCity': 'טוניס'
                        },
                        'Tripoli': {
                            'exemplarCity': 'טריפולי'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'סאו טומה'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'פורטו נובו'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'וואגאדוגו'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'נואקצ׳וט'
                        },
                        'Niamey': {
                            'exemplarCity': 'ניאמיי'
                        },
                        'Lusaka': {
                            'exemplarCity': 'לוסקה'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'לובומבאשי'
                        },
                        'Luanda': {
                            'exemplarCity': 'לואנדה'
                        },
                        'Lome': {
                            'exemplarCity': 'לומה'
                        },
                        'Conakry': {
                            'exemplarCity': 'קונאקרי'
                        },
                        'Ceuta': {
                            'exemplarCity': 'סאוטה'
                        },
                        'Casablanca': {
                            'exemplarCity': 'קזבלנקה'
                        },
                        'Cairo': {
                            'exemplarCity': 'קהיר'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'בוג׳ומבורה'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'ברזוויל'
                        },
                        'Blantyre': {
                            'exemplarCity': 'בלנטיר'
                        },
                        'Bissau': {
                            'exemplarCity': 'ביסאו'
                        },
                        'Abidjan': {
                            'exemplarCity': 'אביג׳אן'
                        },
                        'Accra': {
                            'exemplarCity': 'אקרה'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'אדיס אבבה'
                        },
                        'Algiers': {
                            'exemplarCity': 'אלג׳יר'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'אסיה/שנחאי'
                        },
                        'Seoul': {
                            'exemplarCity': 'סיאול'
                        },
                        'Samarkand': {
                            'exemplarCity': 'אסיה/סמרקנד'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'סחלין'
                        },
                        'Saigon': {
                            'exemplarCity': 'הו צ׳י מין סיטי'
                        },
                        'Riyadh': {
                            'exemplarCity': 'ריאד'
                        },
                        'Rangoon': {
                            'exemplarCity': 'רנגון'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'קיזילורדה'
                        },
                        'Qatar': {
                            'exemplarCity': 'קטאר'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'פיונגיאנג'
                        },
                        'Pontianak': {
                            'exemplarCity': 'פונטיאנק'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'פנום פן'
                        },
                        'Oral': {
                            'exemplarCity': 'אסיה/אורל'
                        },
                        'Omsk': {
                            'exemplarCity': 'איה/אומסק'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'אסיה/נובוסיבירסק'
                        },
                        'Baghdad': {
                            'exemplarCity': 'בגדד'
                        },
                        'Chongqing': {
                            'exemplarCity': 'צ׳ונגקינג'
                        },
                        'Colombo': {
                            'exemplarCity': 'קולומבו'
                        },
                        'Damascus': {
                            'exemplarCity': 'דמשק'
                        },
                        'Dhaka': {
                            'exemplarCity': 'דאקה'
                        },
                        'Dili': {
                            'exemplarCity': 'דילי'
                        },
                        'Dubai': {
                            'exemplarCity': 'דובאי'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'דושנבה'
                        },
                        'Gaza': {
                            'exemplarCity': 'עזה'
                        },
                        'Harbin': {
                            'exemplarCity': 'חרבין'
                        },
                        'Hebron': {
                            'exemplarCity': 'חברון'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'הונג קונג'
                        },
                        'Hovd': {
                            'exemplarCity': 'חובד'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'אירקוטסק'
                        },
                        'Jakarta': {
                            'exemplarCity': 'אסיה/ג׳קרטה'
                        },
                        'Jayapura': {
                            'exemplarCity': 'ג׳איאפורה'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'אולאאנבטאר'
                        },
                        'Urumqi': {
                            'exemplarCity': 'אורומקי'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'אוסט-נרה'
                        },
                        'Vientiane': {
                            'exemplarCity': 'האנוי'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'ולדיווסטוק'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'יקוטסק'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'יקטרינבורג'
                        },
                        'Yerevan': {
                            'exemplarCity': 'ירוואן'
                        },
                        'Tokyo': {
                            'exemplarCity': 'טוקיו'
                        },
                        'Thimphu': {
                            'exemplarCity': 'ת׳ימפו'
                        },
                        'Tehran': {
                            'exemplarCity': 'טהרן'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'טביליסי'
                        },
                        'Tashkent': {
                            'exemplarCity': 'אסיה/טשקנט'
                        },
                        'Taipei': {
                            'exemplarCity': 'טאיפיי'
                        },
                        'Singapore': {
                            'exemplarCity': 'סינגפור'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'ירושלים'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'אשגבט'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'אקטובה'
                        },
                        'Aqtau': {
                            'exemplarCity': 'אקטאו'
                        },
                        'Anadyr': {
                            'exemplarCity': 'אנדיר'
                        },
                        'Amman': {
                            'exemplarCity': 'עמאן'
                        },
                        'Almaty': {
                            'exemplarCity': 'אלמאטי'
                        },
                        'Aden': {
                            'exemplarCity': 'עדן'
                        },
                        'Bahrain': {
                            'exemplarCity': 'בחריין'
                        },
                        'Baku': {
                            'exemplarCity': 'באקו'
                        },
                        'Bangkok': {
                            'exemplarCity': 'בנגקוק'
                        },
                        'Beirut': {
                            'exemplarCity': 'ביירות'
                        },
                        'Bishkek': {
                            'exemplarCity': 'בישקק'
                        },
                        'Brunei': {
                            'exemplarCity': 'ברוניי'
                        },
                        'Calcutta': {
                            'exemplarCity': 'קולקטה'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'צ׳ואיבלסאן'
                        },
                        'Kabul': {
                            'exemplarCity': 'קאבול'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'קמצ׳טקה'
                        },
                        'Karachi': {
                            'exemplarCity': 'קרצ׳י'
                        },
                        'Kashgar': {
                            'exemplarCity': 'קשגר'
                        },
                        'Katmandu': {
                            'exemplarCity': 'קטמנדו'
                        },
                        'Khandyga': {
                            'exemplarCity': 'חנדיגה'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'קרסנויארסק'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'קואלה לומפור'
                        },
                        'Kuching': {
                            'exemplarCity': 'קוצ׳ינג'
                        },
                        'Kuwait': {
                            'exemplarCity': 'כווית'
                        },
                        'Macau': {
                            'exemplarCity': 'מקאו'
                        },
                        'Magadan': {
                            'exemplarCity': 'מגדן'
                        },
                        'Makassar': {
                            'exemplarCity': 'מאקאסאר'
                        },
                        'Manila': {
                            'exemplarCity': 'מנילה'
                        },
                        'Muscat': {
                            'exemplarCity': 'מוסקט'
                        },
                        'Nicosia': {
                            'exemplarCity': 'ניקוסיה'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'נובוקוזנטסק'
                        }
                    }
                },
                'metazone': {
                    'Tajikistan': {
                        'long': {
                            'standard': 'שעון טג׳יקיסטן'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'שעון טאיפיי',
                            'standard': 'שעון רגיל טאיפיי',
                            'daylight': 'שעון קיץ טאיפיי'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'שעון טהיטי'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'שעון סייווה'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'שעון סורינאם'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'שעון דרום ג׳ורג׳יה'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'שעון איי שלמה'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'שעון סינגפור'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'שעון איי סיישל'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'שעון סמואה',
                            'standard': 'שעון רגיל סמואה',
                            'daylight': 'שעון קיץ סמואה'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'שעון סמרה',
                            'standard': 'שעון רגיל סמרה',
                            'daylight': 'שעון קיץ סמרה'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'שעון סחלין',
                            'standard': 'שעון רגיל סחלין',
                            'daylight': 'שעון קיץ סחלין'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'שעון רות׳רה'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'שעון ראוניון'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'שעון פונאפי'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'שעון פיטקרן'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'שעון מרכז ארה״ב (אמריקה/שיקגו)',
                            'standard': 'שעון רגיל מרכז ארה״ב',
                            'daylight': 'שעון קיץ, צפון אמריקה'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'שעון אזור האמזונס',
                            'standard': 'שעון רגיל אזור האמזונס',
                            'daylight': 'שעון קיץ אזור האמזונס'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'שעון אלסקה',
                            'standard': 'שעון רגיל אלסקה',
                            'daylight': 'שעון קיץ אלסקה'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'שעון מערב אפריקה',
                            'standard': 'שעון רגיל מערב אפריקה',
                            'daylight': 'שעון קיץ, מערב אפריקה'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'שעון דרום אפריקה'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'שעון מזרח אפריקה'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'שעון מרכז אפריקה'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'שעון אפגניסטן'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'שעון החוף המזרחי',
                            'standard': 'שעון רגיל של החוף המזרחי',
                            'daylight': 'שעון קיץ מזרח ארה״ב'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'שעון אזור ההרים בארה״ב (דנוור)',
                            'standard': 'שעון רגיל אזור ההרים',
                            'daylight': 'שעון קיץ, אזור ההרים בארה״ב'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'שעון מערב ארה״ב (לוס אנג׳לס)',
                            'standard': 'שעון רגיל האוקיינוס השקט',
                            'daylight': 'שעון קיץ, מערב ארה״ב (לוס אנג׳לס)'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'שעון אנדיר',
                            'standard': 'שעון רגיל אנדיר',
                            'daylight': 'שעון קיץ אנדיר'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'שעון חצי האי ערב',
                            'standard': 'שעון רגיל חצי האי ערב',
                            'daylight': 'שעון קיץ חצי האי ערב'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'שעון ארגנטינה',
                            'standard': 'שעון רגיל ארגנטינה',
                            'daylight': 'שעון קיץ ארגנטינה'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'שעון מערב ארגנטינה',
                            'standard': 'שעון רגיל מערב ארגנטינה',
                            'daylight': 'שעון קיץ מערב ארגנטינה'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'שעון ארמניה',
                            'standard': 'שעון רגיל ארמניה',
                            'daylight': 'שעון קיץ ארמניה'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'שעון סין',
                            'standard': 'שעון חורף סין',
                            'daylight': 'שעון קיץ סין'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'שעון צ׳ויבלסן',
                            'standard': 'שעון רגיל צ׳ויבלסן',
                            'daylight': 'שעון קיץ צ׳ויבלסן'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'שעון אי חג המולד'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'שעון איי קוקוס'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'שעון קולומביה',
                            'standard': 'שעון רגיל קולומביה',
                            'daylight': 'שעון קיץ קולומביה'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'שעון איי קוק',
                            'standard': 'שעון רגיל איי קוק',
                            'daylight': 'שעון מחצית הקיץ איי קוק'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'שעון קובה',
                            'standard': 'שעון רגיל קובה',
                            'daylight': 'שעון קיץ קובה'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'שעון דיוויס'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'שעון דומון ד׳אורוויל'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'שעון מזרח טימור'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'שעון אי הפסחא',
                            'standard': 'שעון רגיל אי הפסחא',
                            'daylight': 'שעון קיץ אי הפסחא'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'שעון אקוודור'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'שעון מרכז אירופה',
                            'standard': 'שעון רגיל מרכז אירופה',
                            'daylight': 'שעון קיץ מרכז אירופה'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'שעון מזרח אירופה',
                            'standard': 'שעון רגיל מזרח אירופה',
                            'daylight': 'שעון קיץ מזרח אירופה'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'שעון מערב אירופה',
                            'standard': 'שעון רגיל מערב אירופה',
                            'daylight': 'שעון קיץ מערב אירופה'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'שעון איי פוקלנד',
                            'standard': 'שעון רגיל איי פוקלנד',
                            'daylight': 'שעון קיץ איי פוקלנד'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'שעון טוקלאו'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'שעון טונגה',
                            'standard': 'שעון רגיל טונגה',
                            'daylight': 'שעון קיץ טונגה'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'שעון צ׳וק'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'שעון טורקמניסטן',
                            'standard': 'שעון רגיל טורקמניסטן',
                            'daylight': 'שעון קיץ טורקמניסטן'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'שעון טובאלו'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'שעון אורוגוואי',
                            'standard': 'שעון רגיל אורוגוואי',
                            'daylight': 'שעון קיץ אורוגוואי'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'שעון אוזבקיסטן',
                            'standard': 'שעון רגיל אוזבקיסטן',
                            'daylight': 'שעון קיץ אוזבקיסטן'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'שעון ונואטו',
                            'standard': 'שעון רגיל ונואטו',
                            'daylight': 'שעון קיץ ונואטו'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'שעון יקטרינבורג',
                            'standard': 'שעון רגיל יקטרינבורג',
                            'daylight': 'שעון קיץ יקטרינבורג'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'שעון יקוטסק',
                            'standard': 'שעון רגיל יקוטסק',
                            'daylight': 'שעון קיץ יקוטסק'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'שעון וואליס ופוטונה'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'שעון האי וייק'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'שעון ווסטוק'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'שעון וולגוגרד',
                            'standard': 'שעון רגיל וולגוגרד',
                            'daylight': 'שעון קיץ וולגוגרד'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'שעון ולדיווסטוק',
                            'standard': 'שעון רגיל ולדיווסטוק',
                            'daylight': 'שעון קיץ ולדיווסטוק'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'שעון ונצואלה'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'שעון הודו'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'שעון חובד',
                            'standard': 'שעון רגיל חובד',
                            'daylight': 'שעון קיץ חובד'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'שעון הונג קונג',
                            'standard': 'שעון חורף הונג קונג',
                            'daylight': 'שעון קיץ הונג קונג'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'שעון האיים האלאוטיים הוואי',
                            'standard': 'שעון רגיל האיים האלאוטיים הוואי',
                            'daylight': 'שעון קיץ האיים האלאוטיים הוואי'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'שעון גויאנה'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'שעון מדינות המפרץ'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'שעון מערב גרינלנד',
                            'standard': 'שעון רגיל מערב גרינלנד',
                            'daylight': 'שעון קיץ מערב גרינלנד'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'שעון מזרח גרינלנד',
                            'standard': 'שעון רגיל מזרח גרינלנד',
                            'daylight': 'שעון קיץ מזרח גרינלנד'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'שעון גריניץ׳‏'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'שעון איי גילברט'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'שעון גאורגיה',
                            'standard': 'שעון רגיל גאורגיה',
                            'daylight': 'שעון קיץ גאורגיה'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'שעון גאמבייר'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'שעון איי גלאפגוס'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'שעון דרום צרפת ואנטארקטיקה'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'שעון גיאנה הצרפתית'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'שעון פיג׳י',
                            'standard': 'שעון רגיל פיג׳י',
                            'daylight': 'שעון קיץ פיג׳י'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'שעון אטלנטי',
                            'standard': 'שעון אטלנטי תקני',
                            'daylight': 'שעון קיץ אטלנטי'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'שעון מרכז אוסטרליה',
                            'standard': 'שעון רגיל מרכז אוסטרליה',
                            'daylight': 'שעון קיץ מרכז אוסטרליה'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'שעון מרכז-מערב אוסטרליה',
                            'standard': 'שעון רגיל מרכז מערב אוסטרליה',
                            'daylight': 'שעון קיץ מרכז מערב אוסטרליה'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'שעון מזרח אוסטרליה',
                            'standard': 'שעון רגיל מזרח אוסטרליה',
                            'daylight': 'שעון קיץ מזרח אוסטרליה'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'שעון מערב אוסטרליה',
                            'standard': 'שעון רגיל מערב אוסטרליה',
                            'daylight': 'שעון קיץ מערב אוסטרליה'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'שעון אזרבייג׳אן',
                            'standard': 'שעון רגיל אזרבייג׳אן',
                            'daylight': 'שעון קיץ אזרבייג׳אן'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'שעון אזורס',
                            'standard': 'שעון רגיל אזורס',
                            'daylight': 'שעון קיץ אזורס'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'שעון בנגלדש',
                            'standard': 'שעון רגיל בנגלדש',
                            'daylight': 'שעון קיץ בנגלדש'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'שעון בהוטן'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'שעון בוליביה'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'שעון ברזיליה',
                            'standard': 'שעון רגיל ברזיליה',
                            'daylight': 'שעון קיץ ברזיליה'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'שעון ברוניי דארוסלאם'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'שעון קייפ ורדה',
                            'standard': 'שעון רגיל קייפ ורדה',
                            'daylight': 'שעון קיץ קייפ ורדה'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'שעון צ׳אמורו'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'שעון צ׳טהאם',
                            'standard': 'שעון רגיל צ׳טהאם',
                            'daylight': 'שעון קיץ צ׳טהאם'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'שעון צ׳ילה',
                            'standard': 'שעון רגיל צ׳ילה',
                            'daylight': 'שעון קיץ צ׳ילה'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'שעון האוקיינוס ההודי'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'שעון הודו-סין'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'שעון מרכז אינדונזיה'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'שעון מזרח אינדונזיה'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'שעון מערב אינדונזיה'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'שעון איראן',
                            'standard': 'שעון רגיל איראן',
                            'daylight': 'שעון קיץ איראן'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'שעון אירקוטסק',
                            'standard': 'שעון רגיל אירקוטסק',
                            'daylight': 'שעון קיץ אירקוטסק'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'שעון ישראל',
                            'standard': 'שעון רגיל ישראל',
                            'daylight': 'שעון קיץ ישראל'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'שעון יפן',
                            'standard': 'שעון חורף יפן',
                            'daylight': 'שעון קיץ יפן'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'שעון פטרופבלובסק-קמצ׳טסקי',
                            'standard': 'שעון רגיל פטרופבלובסק-קמצ׳טסקי',
                            'daylight': 'שעון קיץ פטרופבלובסק-קמצ׳טסקי'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'שעון מזרח קזחסטן'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'שעון מערב קזחסטן'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'שעון קוריאה',
                            'standard': 'שעון חורף קוריאה',
                            'daylight': 'שעון קיץ קוריאה'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'שעון קוסראה'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'שעון קרסנויארסק',
                            'standard': 'שעון רגיל קרסנויארסק',
                            'daylight': 'שעון קיץ קרסנויארסק'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'שעון קירגיזסטן'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'שעון איי ליין'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'שעון של אי הלורד האו',
                            'standard': 'שעון רגיל של אי הלורד האו',
                            'daylight': 'שעון קיץ של אי הלורד האו'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'שעון מקאו',
                            'standard': 'שעון חורף מקאו',
                            'daylight': 'שעון קיץ מקאו'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'שעון מקווארי'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'שעון מגדן',
                            'standard': 'שעון רגיל מגדן',
                            'daylight': 'שעון קיץ מגדן'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'שעון מלזיה'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'שעון האיים המלדיביים'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'שעון איי מרקיז'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'שעון איי מרשל'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'שעון מאוריציוס',
                            'standard': 'שעון חורף מאוריציוס',
                            'daylight': 'שעון קיץ מאוריציוס'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'שעון מאוסון'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'שעון אולן בטור',
                            'standard': 'שעון רגיל אולן בטור',
                            'daylight': 'שעון קיץ אולן בטור'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'שעון מוסקבה',
                            'standard': 'שעון רגיל מוסקבה',
                            'daylight': 'שעון קיץ מוסקבה'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'שעון בורמה'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'שעון נאורו'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'שעון נפאל'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'שעון ניו-קלדוניה',
                            'standard': 'שעון רגיל ניו-קלדוניה',
                            'daylight': 'שעון קיץ ניו-קלדוניה'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'שעון ניו זילנד',
                            'standard': 'שעון רגיל ניו זילנד',
                            'daylight': 'שעון קיץ ניו זילנד'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'שעון ניופאונדלנד',
                            'standard': 'שעון רגיל ניופאונדלנד',
                            'daylight': 'שעון קיץ ניופאונדלנד'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'שעון ניואה'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'שעון איי נורפולק'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'שעון פרננדו דה נורוניה',
                            'standard': 'שעון רגיל פרננדו דה נורוניה',
                            'daylight': 'שעון קיץ פרננדו דה נורוניה'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'שעון נובוסיבירסק',
                            'standard': 'שעון רגיל נובוסיבירסק',
                            'daylight': 'שעון קיץ נובוסיבירסק'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'שעון אומסק',
                            'standard': 'שעון רגיל אומסק',
                            'daylight': 'שעון קיץ אומסק'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'שעון פקיסטן',
                            'standard': 'שעון רגיל פקיסטן',
                            'daylight': 'שעון קיץ פקיסטן'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'שעון פלאו'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'שעון פפואה גיניאה החדשה'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'שעון פרגוואי',
                            'standard': 'שעון רגיל פרגוואי',
                            'daylight': 'שעון קיץ פרגוואי'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'שעון פרו',
                            'standard': 'שעון רגיל פרו',
                            'daylight': 'שעון קיץ פרו'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'שעון הפיליפינים',
                            'standard': 'שעון רגיל פיליפינים',
                            'daylight': 'שעון קיץ הפיליפינים'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'שעון איי פיניקס'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'שעון סנט פייר ומיקלון',
                            'standard': 'שעון רגיל סנט פייר ומיקלון',
                            'daylight': 'שעון קיץ סנט פייר ומיקלון'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'שעון {0}',
                'regionFormat-type-daylight': 'שעון {0} (קיץ)',
                'regionFormat-type-standard': 'שעון {0} (חורף)',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'אוג',
                                '7': 'יול',
                                '6': 'יונ',
                                '5': 'מאי',
                                '12': 'דצמ',
                                '11': 'נוב',
                                '10': 'אוק',
                                '9': 'ספט',
                                '1': 'ינו',
                                '2': 'פבר',
                                '3': 'מרץ',
                                '4': 'אפר'
                            },
                            'narrow': {
                                '8': '8',
                                '7': '7',
                                '6': '6',
                                '5': '5',
                                '12': '12',
                                '11': '11',
                                '10': '10',
                                '9': '9',
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '8': 'אוגוסט',
                                '7': 'יולי',
                                '6': 'יוני',
                                '5': 'מאי',
                                '12': 'דצמבר',
                                '11': 'נובמבר',
                                '10': 'אוקטובר',
                                '9': 'ספטמבר',
                                '1': 'ינואר',
                                '2': 'פברואר',
                                '3': 'מרץ',
                                '4': 'אפריל'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'אוג׳',
                                '7': 'יול׳',
                                '6': 'יונ׳',
                                '5': 'מאי',
                                '12': 'דצמ׳',
                                '11': 'נוב׳',
                                '10': 'אוק׳',
                                '9': 'ספט׳',
                                '1': 'ינו׳',
                                '2': 'פבר׳',
                                '3': 'מרץ',
                                '4': 'אפר׳'
                            },
                            'narrow': {
                                '8': '8',
                                '7': '7',
                                '6': '6',
                                '5': '5',
                                '12': '12',
                                '11': '11',
                                '10': '10',
                                '9': '9',
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '8': 'אוגוסט',
                                '7': 'יולי',
                                '6': 'יוני',
                                '5': 'מאי',
                                '12': 'דצמבר',
                                '11': 'נובמבר',
                                '10': 'אוקטובר',
                                '9': 'ספטמבר',
                                '1': 'ינואר',
                                '2': 'פברואר',
                                '3': 'מרץ',
                                '4': 'אפריל'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'יום א׳',
                                'mon': 'יום ב׳',
                                'tue': 'יום ג׳',
                                'wed': 'יום ד׳',
                                'thu': 'יום ה׳',
                                'fri': 'יום ו׳',
                                'sat': 'שבת'
                            },
                            'narrow': {
                                'sun': 'א׳',
                                'mon': 'ב׳',
                                'tue': 'ג׳',
                                'wed': 'ד׳',
                                'thu': 'ה׳',
                                'fri': 'ו׳',
                                'sat': 'ש׳'
                            },
                            'short': {
                                'sun': 'א׳',
                                'mon': 'ב׳',
                                'tue': 'ג׳',
                                'wed': 'ד׳',
                                'thu': 'ה׳',
                                'fri': 'ו׳',
                                'sat': 'ש׳'
                            },
                            'wide': {
                                'sun': 'יום ראשון',
                                'mon': 'יום שני',
                                'tue': 'יום שלישי',
                                'wed': 'יום רביעי',
                                'thu': 'יום חמישי',
                                'fri': 'יום שישי',
                                'sat': 'יום שבת'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'יום א׳',
                                'mon': 'יום ב׳',
                                'tue': 'יום ג׳',
                                'wed': 'יום ד׳',
                                'thu': 'יום ה׳',
                                'fri': 'יום ו׳',
                                'sat': 'שבת'
                            },
                            'narrow': {
                                'sun': 'א׳',
                                'mon': 'ב׳',
                                'tue': 'ג׳',
                                'wed': 'ד׳',
                                'thu': 'ה׳',
                                'fri': 'ו׳',
                                'sat': 'ש׳'
                            },
                            'short': {
                                'sun': 'א׳',
                                'mon': 'ב׳',
                                'tue': 'ג׳',
                                'wed': 'ד׳',
                                'thu': 'ה׳',
                                'fri': 'ו׳',
                                'sat': 'ש׳'
                            },
                            'wide': {
                                'sun': 'יום ראשון',
                                'mon': 'יום שני',
                                'tue': 'יום שלישי',
                                'wed': 'יום רביעי',
                                'thu': 'יום חמישי',
                                'fri': 'יום שישי',
                                'sat': 'יום שבת'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'רבעון 1',
                                '2': 'רבעון 2',
                                '3': 'רבעון 3',
                                '4': 'רבעון 4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'רבעון 1',
                                '2': 'רבעון 2',
                                '3': 'רבעון 3',
                                '4': 'רבעון 4'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'רבעון 1',
                                '2': 'רבעון 2',
                                '3': 'רבעון 3',
                                '4': 'רבעון 4'
                            },
                            'narrow': {
                                '1': 'ר1',
                                '2': 'ר2',
                                '3': 'ר3',
                                '4': 'ר4'
                            },
                            'wide': {
                                '1': 'רבעון 1',
                                '2': 'רבעון 2',
                                '3': 'רבעון 3',
                                '4': 'רבעון 4'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'לפנה״צ',
                                'pm': 'אחה״צ'
                            },
                            'narrow': {
                                'am': 'לפנה״צ',
                                'pm': 'אחה״צ'
                            },
                            'wide': {
                                'am': 'לפנה״צ',
                                'pm': 'אחה״צ'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'לפנה״צ',
                                'pm': 'אחה״צ'
                            },
                            'narrow': {
                                'am': 'לפנה״צ',
                                'pm': 'אחה״צ'
                            },
                            'wide': {
                                'am': 'לפנה״צ',
                                'pm': 'אחה״צ'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'לפני הספירה',
                            '0-alt-variant': 'BCE',
                            '1': 'לספירה',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'לפנה״ס',
                            '0-alt-variant': 'BCE',
                            '1': 'לסה״נ',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'לפנה״ס',
                            '0-alt-variant': 'BCE',
                            '1': 'לסה״נ',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d בMMMM y',
                        'long': 'd בMMMM y',
                        'medium': 'd בMMM y',
                        'short': 'dd/MM/yy'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} בשעה {0}',
                        'long': '{1} בשעה {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E, d בMMM y',
                            'EHms': 'E H:mm:ss',
                            'Ehms': 'E h:mm:ss a',
                            'EHm': 'E H:mm',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E ה-d',
                            'd': 'd',
                            'GyMMMd': 'd בMMM y G',
                            'GyMMMEd': 'E, d בMMM y G',
                            'yQQQQ': 'y QQQQ',
                            'yQQQ': 'y QQQ',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'H': 'HH',
                            'h': '‏h a',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/M',
                            'MEd': 'E, d/M',
                            'MMM': 'LLL',
                            'MMMd': 'd בMMM',
                            'MMMEd': 'E, d בMMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M.y',
                            'yMd': 'd.M.y',
                            'yMEd': 'E, d/M/y',
                            'yMM': 'MM/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd בMMM y'
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
                                'd': 'EEEE d MMM – EEEE d MMM',
                                'M': 'EEEE d MMM – EEEE d MMM'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM–d MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'EEEE d.M–EEEE d.M',
                                'M': 'EEEE d.M – EEEE d.M'
                            },
                            'Md': {
                                'd': 'd.M–d.M',
                                'M': 'd.M–d.M'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'M.y–M.y',
                                'y': 'M.y‏-M.y'
                            },
                            'yMd': {
                                'd': 'dd.M.y – dd.M.y',
                                'M': 'd.M.y – d.M.y',
                                'y': 'd.M.y – d.M.y'
                            },
                            'yMEd': {
                                'd': 'EEEE d.M.y – EEEE d.M.y',
                                'M': 'EEEE d.M.y – EEEE d.M.y',
                                'y': 'EEEE d.M.y – EEEE d.M.y'
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
                                'd': 'EEEE d MMM – EEEE d MMM y',
                                'M': 'EEEE d MMM – EEEE d MMM y',
                                'y': 'EEEE d MMM y – EEEE d MMM y'
                            },
                            'yMMMM': {
                                'M': 'MMMM–MMMM y',
                                'y': 'MMMM y–MMMM y'
                            },
                            'MMMM': {
                                'M': 'LLLL–LLLL'
                            },
                            'Hmv': {
                                'H': 'H:mm–H:mm v',
                                'm': 'H:mm–H:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'H:mm–H:mm',
                                'm': 'H:mm–H:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm–h:mm a',
                                'm': 'h:mm–h:mm a'
                            },
                            'H': {
                                'H': 'H–H'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'd': {
                                'd': 'd–d'
                            }
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
