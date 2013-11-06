/* AstroDate
 * Language: el
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('el', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'Σάιπαν'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'Ραροτόνγκα'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'Πορτ Μόρεσμπυ'
                        },
                        'Ponape': {
                            'exemplarCity': 'Πονάπε'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Πίτκερν'
                        },
                        'Palau': {
                            'exemplarCity': 'Παλάου'
                        },
                        'Auckland': {
                            'exemplarCity': 'Όκλαντ'
                        },
                        'Apia': {
                            'exemplarCity': 'Άπια'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Φουναφούτι'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Γκαλαπάγκος'
                        },
                        'Gambier': {
                            'exemplarCity': 'Γκάμπιερ'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'Γκουανταλκανάλ'
                        },
                        'Guam': {
                            'exemplarCity': 'Γκουάμ'
                        },
                        'Honolulu': {
                            'exemplarCity': 'Χονολουλού'
                        },
                        'Wallis': {
                            'exemplarCity': 'Γουόλις'
                        },
                        'Wake': {
                            'exemplarCity': 'Γουέικ'
                        },
                        'Truk': {
                            'exemplarCity': 'Τσουκ'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'Τονγκατάπου'
                        },
                        'Tarawa': {
                            'exemplarCity': 'Ταράουα'
                        },
                        'Tahiti': {
                            'exemplarCity': 'Ταϊτή'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Κιριτιμάτι'
                        },
                        'Johnston': {
                            'exemplarCity': 'Τζόνστον'
                        },
                        'Chatham': {
                            'exemplarCity': 'Τσάταμ'
                        },
                        'Easter': {
                            'exemplarCity': 'Νήσος Πάσχα'
                        },
                        'Efate': {
                            'exemplarCity': 'Εφάτε'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Εντερμπέρυ'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Φακαόφο'
                        },
                        'Fiji': {
                            'exemplarCity': 'Φίτζι'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Κοσράη'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Κουαχαλέιν'
                        },
                        'Majuro': {
                            'exemplarCity': 'Μαχούρο'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Μαρκέσας'
                        },
                        'Midway': {
                            'exemplarCity': 'Μίντγουεϊ'
                        },
                        'Nauru': {
                            'exemplarCity': 'Ναούρου'
                        },
                        'Niue': {
                            'exemplarCity': 'Νιούε'
                        },
                        'Norfolk': {
                            'exemplarCity': 'Νόρφολκ'
                        },
                        'Noumea': {
                            'exemplarCity': 'Νουμέα'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'Πάγκο Πάγκο'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'Λίντεμαν'
                        },
                        'Hobart': {
                            'exemplarCity': 'Χόμπαρτ'
                        },
                        'Eucla': {
                            'exemplarCity': 'Εούκλα'
                        },
                        'Darwin': {
                            'exemplarCity': 'Ντάργουιν'
                        },
                        'Sydney': {
                            'exemplarCity': 'Σίδνεϊ'
                        },
                        'Perth': {
                            'exemplarCity': 'Περθ'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Μελβούρνη'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Λορντ Χάουι'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Αδελαΐδα'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Μπρισμπέιν'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Μπρόκεν Χιλ'
                        },
                        'Currie': {
                            'exemplarCity': 'Κιουρί'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Μαλδίβες'
                        },
                        'Mahe': {
                            'exemplarCity': 'Μάχε'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Κέργκουελεν'
                        },
                        'Reunion': {
                            'exemplarCity': 'Ρεϊνιόν'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Μαγιότε'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Μαυρίκιος'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Ανταναναρίβο'
                        },
                        'Chagos': {
                            'exemplarCity': 'Τσάγκος'
                        },
                        'Christmas': {
                            'exemplarCity': 'Χριστούγεννα'
                        },
                        'Cocos': {
                            'exemplarCity': 'Κόκος'
                        },
                        'Comoro': {
                            'exemplarCity': 'Κομόρο'
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
                            'exemplarCity': 'Άγνωστη πόλη'
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
                            'exemplarCity': 'Ροθέρα'
                        },
                        'Palmer': {
                            'exemplarCity': 'Πάλμερ'
                        },
                        'McMurdo': {
                            'exemplarCity': 'Μακμέρντο'
                        },
                        'Vostok': {
                            'exemplarCity': 'Βόστοκ'
                        },
                        'Syowa': {
                            'exemplarCity': 'Σίοβα'
                        },
                        'South_Pole': {
                            'exemplarCity': 'Νότιος Πόλος'
                        },
                        'Casey': {
                            'exemplarCity': 'Κάσεϊ'
                        },
                        'Davis': {
                            'exemplarCity': 'Ντέιβις'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Ντιμόντ Ντερβίλ'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Μακουάρι'
                        },
                        'Mawson': {
                            'exemplarCity': 'Μόουσον'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Λόνγκιεαρμπιεν'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'Τορόντο'
                        },
                        'Tijuana': {
                            'exemplarCity': 'Τιχουάνα'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'Θάντερ Μπέι'
                        },
                        'Thule': {
                            'exemplarCity': 'Τούλε'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Τεγκουσιγκάλπα'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Σουίφτ Κάρρεντ'
                        },
                        'Chicago': {
                            'exemplarCity': 'Σικάγο'
                        },
                        'Cayman': {
                            'exemplarCity': 'Κέιμαν'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Καγιένε'
                        },
                        'Catamarca': {
                            'exemplarCity': 'Καταμάρκα'
                        },
                        'Caracas': {
                            'exemplarCity': 'Καράκας'
                        },
                        'Cancun': {
                            'exemplarCity': 'Κανκούν'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'Κάμπο Γκράντε'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Κέμπριτζ Μπέι'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Μπουένος Άιρες'
                        },
                        'Boise': {
                            'exemplarCity': 'Μπόιζ'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Ασουνσιόν'
                        },
                        'Aruba': {
                            'exemplarCity': 'Αρούμπα'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Ρίο Γκαγιέγκος'
                            },
                            'San_Juan': {
                                'exemplarCity': 'Σαν Χουάν'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ουσουάια'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'Λα Ριόχα'
                            },
                            'San_Luis': {
                                'exemplarCity': 'Σαν Λούις'
                            },
                            'Salta': {
                                'exemplarCity': 'Σάλτα'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Τουκουμάν'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Αραγκουάινα'
                        },
                        'Antigua': {
                            'exemplarCity': 'Αντίγκουα'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Ανγκουίλα'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Άνκορατζ'
                        },
                        'Adak': {
                            'exemplarCity': 'Άντακ'
                        },
                        'Bahia': {
                            'exemplarCity': 'Μπάχια'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Μπαχία Ντε Μπαντέρας'
                        },
                        'Barbados': {
                            'exemplarCity': 'Μπαρμπάντος'
                        },
                        'Belem': {
                            'exemplarCity': 'Μπέλεμ'
                        },
                        'Belize': {
                            'exemplarCity': 'Μπελίζ'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Μπλαν Σαμπλόν'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Μπόα Βίστα'
                        },
                        'Bogota': {
                            'exemplarCity': 'Μπογκοτά'
                        },
                        'Curacao': {
                            'exemplarCity': 'Κουρασάο'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'Ντανμαρκσάβν'
                        },
                        'Dawson': {
                            'exemplarCity': 'Ντόσον'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'Ντόσον Κρικ'
                        },
                        'Denver': {
                            'exemplarCity': 'Ντένβερ'
                        },
                        'Detroit': {
                            'exemplarCity': 'Ντιτρόιτ'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Ερμοσίγιο'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Βίνκενες, Ιντιάνα'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Πίτερσμπεργκ, Ιντιάνα'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Τελ Σίτυ, Ιντιάνα'
                            },
                            'Knox': {
                                'exemplarCity': 'Νοξ, Ιντιάνα'
                            },
                            'Winamac': {
                                'exemplarCity': 'Γουίναμακ, Ιντιάνα'
                            },
                            'Marengo': {
                                'exemplarCity': 'Μαρένγκο, Ιντιάνα'
                            },
                            'Vevay': {
                                'exemplarCity': 'Βεβάι, Ιντιάνα'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Ιντιανάπολις'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Ινούβικ'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Ικαλούτ'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Τζαμάικα'
                        },
                        'Jujuy': {
                            'exemplarCity': 'Χουχούι'
                        },
                        'Juneau': {
                            'exemplarCity': 'Τζούνο'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'Γέλοουναϊφ'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Γιακούτατ'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Γουίνιπεγκ'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Γουάιτχορς'
                        },
                        'Vancouver': {
                            'exemplarCity': 'Βανκούβερ'
                        },
                        'Tortola': {
                            'exemplarCity': 'Τορτόλα'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'Κραλέντικ'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'Μοντιτσέλο, Κεντάκι'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Αβάνα'
                        },
                        'Halifax': {
                            'exemplarCity': 'Χάλιφαξ'
                        },
                        'Guyana': {
                            'exemplarCity': 'Γουιάνα'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Γκουαγιακύλ'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Γουατεμάλα'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Γουαδελούπη'
                        },
                        'Grenada': {
                            'exemplarCity': 'Γρενάδα'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'Γκραντ Τουρκ'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Γκους Μπέι'
                        },
                        'Godthab': {
                            'exemplarCity': 'Γκόνθαμπ'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'Γκλέις Μπέι'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'Φορταλέζα'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'Ελ Σαλβαδόρ'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Εϊρουνέπε'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Έντμοντον'
                        },
                        'Dominica': {
                            'exemplarCity': 'Δομινίκα'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Τσιουάουα'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Κόραλ Χάρμπουρ'
                        },
                        'Cordoba': {
                            'exemplarCity': 'Κόρδοβα'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Κόστα Ρίκα'
                        },
                        'Creston': {
                            'exemplarCity': 'Κρέστον'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Κουϊάμπα'
                        },
                        'La_Paz': {
                            'exemplarCity': 'Λα Παζ'
                        },
                        'Lima': {
                            'exemplarCity': 'Λίμα'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Λος Άντζελες'
                        },
                        'Louisville': {
                            'exemplarCity': 'Λούισβιλ'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '[Lower Prince\'s Quarter]'
                        },
                        'Maceio': {
                            'exemplarCity': 'Μασέιο'
                        },
                        'Managua': {
                            'exemplarCity': 'Μανάγκουα'
                        },
                        'Manaus': {
                            'exemplarCity': 'Μανάος'
                        },
                        'Marigot': {
                            'exemplarCity': 'Μάριγκοτ'
                        },
                        'Martinique': {
                            'exemplarCity': 'Μαρτινίκα'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Ματαμόρος'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Μαζατλάν'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Μεντόζα'
                        },
                        'Menominee': {
                            'exemplarCity': 'Μενομίνε'
                        },
                        'Merida': {
                            'exemplarCity': 'Μέριντα'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Μετλακάτλα'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Πόλη του Μεξικού'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Μικελόν'
                        },
                        'Moncton': {
                            'exemplarCity': 'Μονκτόν'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Μοντερέι'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Μοντεβιδέο'
                        },
                        'Montreal': {
                            'exemplarCity': 'Μόντρεαλ'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Μονσεράτ'
                        },
                        'Nassau': {
                            'exemplarCity': 'Νασάου'
                        },
                        'New_York': {
                            'exemplarCity': 'Νέα Υόρκη'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Νιπιγκόν'
                        },
                        'Nome': {
                            'exemplarCity': 'Νόμε'
                        },
                        'Noronha': {
                            'exemplarCity': 'Νορόνχα'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Μπέουλαχ, Βόρεια Ντακότα'
                            },
                            'New_Salem': {
                                'exemplarCity': 'Νιου Σάλεμ, Βόρεια Ντακότα'
                            },
                            'Center': {
                                'exemplarCity': 'Κέντρο, Βόρεια Ντακότα'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Οχινάγκα'
                        },
                        'Panama': {
                            'exemplarCity': 'Παναμάς'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Πανγκνίρτουνγκ'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Παραμαρίμπο'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Φοίνιξ'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Πορτ-ο-Πρενς'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Πορτ οφ Σπέιν'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Πόρτο Βέλο'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Πουέρτο Ρίκο'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Ρέινι Ρίβερ'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Ρέινκιν Ίνλετ'
                        },
                        'Recife': {
                            'exemplarCity': 'Ρεσίφε'
                        },
                        'Regina': {
                            'exemplarCity': 'Ρετζίνα'
                        },
                        'Resolute': {
                            'exemplarCity': 'Ρέσολουτ'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Ρίο Μπράνκο'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Σάντα Ιζαμπέλ'
                        },
                        'Santarem': {
                            'exemplarCity': 'Σανταρέμ'
                        },
                        'Santiago': {
                            'exemplarCity': 'Σαντιάγκο'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Άγιος Δομίνικος'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'Σάο Πάολο'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Σκορεσμπίσουντ'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Σίπροκ'
                        },
                        'Sitka': {
                            'exemplarCity': 'Σίτκα'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'Άγιος Βαρθολομαίος'
                        },
                        'St_Johns': {
                            'exemplarCity': 'Σεντ Τζονς'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'Άγιος Χριστόφορος (Σαιντ Κιτς)'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Αγία Λουκία'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'Άγιος Θωμάς'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'Άγιος Βικέντιος'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Νότια Γεωργία'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Ρέυκιαβικ'
                        },
                        'Stanley': {
                            'exemplarCity': 'Στάνλεϋ'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Αγ. Ελένη'
                        },
                        'Azores': {
                            'exemplarCity': 'Αζόρες'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Βερμούδα'
                        },
                        'Canary': {
                            'exemplarCity': 'Κανάρια'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Πράσινο Ακρωτήριο'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Φερόες'
                        },
                        'Madeira': {
                            'exemplarCity': 'Μαδέρα'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Όσλο'
                        },
                        'Moscow': {
                            'exemplarCity': 'Μόσχα'
                        },
                        'Monaco': {
                            'exemplarCity': 'Μονακό'
                        },
                        'Minsk': {
                            'exemplarCity': 'Μινσκ'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Μαριέχαμν'
                        },
                        'Malta': {
                            'exemplarCity': 'Μάλτα'
                        },
                        'Madrid': {
                            'exemplarCity': 'Μαδρίτη'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Λουξεμβούργο'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Θερινή ώρα Βρετανίας'
                            },
                            'exemplarCity': 'Λονδίνο'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Λιουμπλιάνα'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Λισαβόνα'
                        },
                        'Kiev': {
                            'exemplarCity': 'Κίεβο'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Καλίνινγκραντ'
                        },
                        'Jersey': {
                            'exemplarCity': 'Τζέρσεϊ'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Κωνσταντινούπολη'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Νήσος του Μαν'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Βουκουρέστι'
                        },
                        'Brussels': {
                            'exemplarCity': 'Βρυξέλλες'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Μπρατισλάβα'
                        },
                        'Berlin': {
                            'exemplarCity': 'Βερολίνο'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Βελιγράδι'
                        },
                        'Athens': {
                            'exemplarCity': 'Αθήνα'
                        },
                        'Andorra': {
                            'exemplarCity': 'Ανδόρα'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Άμστερνταμ'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Συμφερόπολη'
                        },
                        'Skopje': {
                            'exemplarCity': 'Σκόπια'
                        },
                        'Sofia': {
                            'exemplarCity': 'Σόφια'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Στοκχόλμη'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Ταλίν'
                        },
                        'Tirane': {
                            'exemplarCity': 'Τίρανα'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Ουζκόροντ'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Βαντούζ'
                        },
                        'Zurich': {
                            'exemplarCity': 'Ζυρίχη'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Ζαπορόζιε'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Ζάγκρεμπ'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Βαρσοβία'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Βόλγκοκραντ'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Βίλνιους'
                        },
                        'Vienna': {
                            'exemplarCity': 'Βιέννη'
                        },
                        'Vatican': {
                            'exemplarCity': 'Βατικανό'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Σαράγεβο'
                        },
                        'San_Marino': {
                            'exemplarCity': 'Άγιος Μαρίνος'
                        },
                        'Samara': {
                            'exemplarCity': 'Σαμάρα'
                        },
                        'Rome': {
                            'exemplarCity': 'Ρώμη'
                        },
                        'Riga': {
                            'exemplarCity': 'Ρίγα'
                        },
                        'Prague': {
                            'exemplarCity': 'Πράγα'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Ποντγκόριτσα'
                        },
                        'Paris': {
                            'exemplarCity': 'Παρίσι'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Ελσίνκι'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Γκέρνσεϊ'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Γιβραλτάρ'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Θερινή ώρα Ιρλανδίας'
                            },
                            'exemplarCity': 'Δουβλίνο'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Κοπεγχάγη'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Κισινάου'
                        },
                        'Busingen': {
                            'exemplarCity': 'Μπίσινγκεν'
                        },
                        'Budapest': {
                            'exemplarCity': 'Βουδαπέστη'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Λιμπρεβίλ'
                        },
                        'Lagos': {
                            'exemplarCity': 'Λάγκος'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Κινσάσα'
                        },
                        'Kigali': {
                            'exemplarCity': 'Κιγκάλι'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Χαρτούμ'
                        },
                        'Kampala': {
                            'exemplarCity': 'Καμπάλα'
                        },
                        'Juba': {
                            'exemplarCity': 'Γιούμπα'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Γιοχάνεσμπουργκ'
                        },
                        'Harare': {
                            'exemplarCity': 'Χαράρε'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Γκαμπορόνε'
                        },
                        'Freetown': {
                            'exemplarCity': 'Φρίταουν'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'Ελ Αγιούν'
                        },
                        'Douala': {
                            'exemplarCity': 'Ντουάλα'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Τζιμπουτί'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Νταρ Ες Σαλάμ'
                        },
                        'Dakar': {
                            'exemplarCity': 'Ντακάρ'
                        },
                        'Banjul': {
                            'exemplarCity': 'Μπάνζουλ'
                        },
                        'Bangui': {
                            'exemplarCity': 'Μπανγκί'
                        },
                        'Bamako': {
                            'exemplarCity': 'Μπαμάκο'
                        },
                        'Asmera': {
                            'exemplarCity': 'Ασμάρα'
                        },
                        'Malabo': {
                            'exemplarCity': 'Μαλάμπο'
                        },
                        'Maputo': {
                            'exemplarCity': 'Μαπούτο'
                        },
                        'Maseru': {
                            'exemplarCity': 'Μασέρου'
                        },
                        'Mbabane': {
                            'exemplarCity': 'Μπαμπάνε'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'Μογκαντίσου'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Μονρόβια'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Ναϊρόμπι'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ντζαμένα'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Βίντχουκ'
                        },
                        'Tunis': {
                            'exemplarCity': 'Τύνιδα'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Τρίπολη'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'Σάο Τομέ'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Πόρτο-Νόβο'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Ουαγκαντούγκου'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Νουακσότ'
                        },
                        'Niamey': {
                            'exemplarCity': 'Νιαμέι'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Λουζάκα'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Λουμπουμπάσι'
                        },
                        'Luanda': {
                            'exemplarCity': 'Λουάντα'
                        },
                        'Lome': {
                            'exemplarCity': 'Λομέ'
                        },
                        'Conakry': {
                            'exemplarCity': 'Κόνακρι'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Κέουτα'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Καζαμπλάνκα'
                        },
                        'Cairo': {
                            'exemplarCity': 'Κάιρο'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Μπουζουμπούρα'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Μπράζαβιλ'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Μπλαντάιρ'
                        },
                        'Bissau': {
                            'exemplarCity': 'Μπισάου'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Αμπιτζάν'
                        },
                        'Accra': {
                            'exemplarCity': 'Άκρα'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Αντίς Αμπέμπα'
                        },
                        'Algiers': {
                            'exemplarCity': 'Αλγέρι'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Σανγκάη'
                        },
                        'Seoul': {
                            'exemplarCity': 'Σεούλ'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Σαμαρκάνδη'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Σακαλίνσκ'
                        },
                        'Saigon': {
                            'exemplarCity': 'Πόλη Χο Τσι Μινχ'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Ριάντ'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Ρανγκούν'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Κτζιλ-Ορντά'
                        },
                        'Qatar': {
                            'exemplarCity': 'Κατάρ'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Πιονγκγιάνγκ'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Πόντιανακ'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Πνομ Πενχ'
                        },
                        'Oral': {
                            'exemplarCity': 'Όραλ'
                        },
                        'Omsk': {
                            'exemplarCity': 'Ομσκ'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Νοβοσιμπίρσκ'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Βαγδάτη'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Τσονγκίνγκ'
                        },
                        'Colombo': {
                            'exemplarCity': 'Κολόμπο'
                        },
                        'Damascus': {
                            'exemplarCity': 'Δαμασκός'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Ντάκα'
                        },
                        'Dili': {
                            'exemplarCity': 'Ντίλι'
                        },
                        'Dubai': {
                            'exemplarCity': 'Ντουμπάι'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Ντουσάμπε'
                        },
                        'Gaza': {
                            'exemplarCity': 'Γάζα'
                        },
                        'Harbin': {
                            'exemplarCity': 'Χαρμπίν'
                        },
                        'Hebron': {
                            'exemplarCity': 'Χεμπρόν'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Χονγκ Κονγκ'
                        },
                        'Hovd': {
                            'exemplarCity': 'Χοβντ'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Ιρκούτσκ'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Τζακάρτα'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Χαγιαπούρα'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ουλάν Μπατόρ'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Ουρουμκί'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ουστ-Νερά'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Βιεντιάνε'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Βλαδιβοστόκ'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Γιάκουτσκ'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Αικατερίνμπουργκ'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Γερεβάν'
                        },
                        'Tokyo': {
                            'exemplarCity': 'Τόκυο'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Τρίμφου'
                        },
                        'Tehran': {
                            'exemplarCity': 'Τεχεράνη'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Τιφλίδα'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Τασκένδη'
                        },
                        'Taipei': {
                            'exemplarCity': 'Ταϊπέι'
                        },
                        'Singapore': {
                            'exemplarCity': 'Σιγκαπούρη'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Ιερουσαλήμ'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Ασχαμπάτ'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Ακτόμπε'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Ακτάου'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Αναντίρ'
                        },
                        'Amman': {
                            'exemplarCity': 'Αμμάν'
                        },
                        'Almaty': {
                            'exemplarCity': 'Αλμάτυ'
                        },
                        'Aden': {
                            'exemplarCity': 'Άντεν'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Μπαχρέιν'
                        },
                        'Baku': {
                            'exemplarCity': 'Μπακού'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Μπανγκόκ'
                        },
                        'Beirut': {
                            'exemplarCity': 'Βυρητός'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Μπισκέκ'
                        },
                        'Brunei': {
                            'exemplarCity': 'Μπρουνέι'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Καλκούτα'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Χόιμπαλσαν'
                        },
                        'Kabul': {
                            'exemplarCity': 'Καμπούλ'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Καμτσάτκα'
                        },
                        'Karachi': {
                            'exemplarCity': 'Καράτσι'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Κάσγκαρ'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Κατμαντού'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Χαντίγκα'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Κρασνογιάρσκ'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Κουάλα Λουμπούρ'
                        },
                        'Kuching': {
                            'exemplarCity': 'Κουτσίνγκ'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Κουβέιτ'
                        },
                        'Macau': {
                            'exemplarCity': 'Μακάο'
                        },
                        'Magadan': {
                            'exemplarCity': 'Μαγκαντάν'
                        },
                        'Makassar': {
                            'exemplarCity': 'Μακασάρ'
                        },
                        'Manila': {
                            'exemplarCity': 'Μανίλα'
                        },
                        'Muscat': {
                            'exemplarCity': 'Μασκάτ'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Λευκωσία'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Νοβοκουζνέτσκ'
                        }
                    }
                },
                'metazone': {
                    'Tahiti': {
                        'long': {
                            'standard': 'Ώρα Αϊτής'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Ώρα Σίοβα'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Ώρα Σουρινάμ'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Ώρα Νότιας Γεωργίας'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Ώρα Νησιών Σολομώντα'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Ώρα Σιγκαπούρης'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'Ώρα Σεϋχελλών'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Ώρα Σαμόα',
                            'standard': 'Χειμερινή ώρα Σαμόα',
                            'daylight': 'Θερινή ώρα Σαμόα'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Ώρα Σάμαρας',
                            'standard': 'Χειμερινή ώρα Σάμαρας',
                            'daylight': 'Θερινή ώρα Σαμάρας'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Ώρα Σαχαλίνης',
                            'standard': 'Χειμερινή ώρα Σαχαλίνης',
                            'daylight': 'Θερινή ώρα Σαχαλίνης'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Ώρα Ροθέρα'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Ώρα Ρεϊνιόν'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Ώρα Πονάπε'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Ώρα Πίτκερν'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Ώρα Σαιντ Πιερ και Μικελόν',
                            'standard': 'Χειμερινή ώρα Σαιντ Πιερ και Μικελόν',
                            'daylight': 'Θερινή ώρα Σαιντ Πιερ και Μικελόν'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Ώρα Νησιών Φίνιξ'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Ώρα Φιλιππινών',
                            'standard': 'Χειμερινή ώρα Φιλιππινών',
                            'daylight': 'Θερινή ώρα Φιλιππινών'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Ώρα Περού',
                            'standard': 'Χειμερινή ώρα Περού',
                            'daylight': 'Θερινή ώρα Περού'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Ώρα Αλάσκας',
                            'standard': 'Χειμερινή ώρα Αλάσκας',
                            'daylight': 'Θερινή ώρα Αλάσκας'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Ώρα Δυτικής Αφρικής',
                            'standard': 'Χειμερινή ώρα Δυτικής Αφρικής',
                            'daylight': 'Θερινή ώρα Δυτικής Αφρικής'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Ώρα Νότιας Αφρικής'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Ώρα Ανατολικής Αφρικής'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Ώρα Κεντρικής Αφρικής'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Ώρα Αφγανιστάν'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Ανατολική ώρα Βόρειας Αμερικής',
                            'standard': 'Ανατολική χειμερινή ώρα Βόρειας Αμερικής',
                            'daylight': 'Ανατολική θερινή ώρα Βόρειας Αμερικής'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Ορεινή ώρα Βόρειας Αμερικής',
                            'standard': 'Ορεινή χειμερινή ώρα Βόρειας Αμερικής',
                            'daylight': 'Ορεινή θερινή ώρα Βόρειας Αμερικής'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Ώρα Βόρειας Αμερικής',
                            'standard': 'Χειμερινή ώρα Βόρειας Αμερικής',
                            'daylight': 'Θερινή ώρα Βόρειας Αμερικής'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Ώρα Αναντίρ',
                            'standard': 'Χειμερινή ώρα Αναντίρ',
                            'daylight': 'Θερινή ώρα Αναντίρ'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Αραβική ώρα',
                            'standard': 'Αραβική χειμερινή ώρα',
                            'daylight': 'Αραβική θερινή ώρα'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Ώρα Αργεντινής',
                            'standard': 'Χειμερινή ώρα Αργεντινής',
                            'daylight': 'Θερινή ώρα Αργεντινής'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Ώρα Δυτικής Αργεντινής',
                            'standard': 'Χειμερινή ώρα Δυτικής Αργεντινής',
                            'daylight': 'Θερινή ώρα Δυτικής Αργεντινής'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Ώρα Αρμενίας',
                            'standard': 'Χειμερινή ώρα Αρμενίας',
                            'daylight': 'Θερινή ώρα Αρμενίας'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Ώρα Κίνας',
                            'standard': 'Χειμερινή ώρα Κίνας',
                            'daylight': 'Θερινή ώρα Κίνας'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Ώρα Τσοϊμπαλσάν',
                            'standard': 'Χειμερινή ώρα Τσοϊμπαλσάν',
                            'daylight': 'Θερινή ώρα Τσοϊμπαλσάν'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Ώρα Νησιού Χριστουγέννων'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Ώρα Νησιών Κόκος'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Ώρα Κολομβίας',
                            'standard': 'Χειμερινή ώρα Κολομβίας',
                            'daylight': 'Θερινή ώρα Κολομβίας'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Ώρα Νησιών Κουκ',
                            'standard': 'Χειμερινή ώρα Νησιών Κουκ',
                            'daylight': 'Θερινή ώρα Νησιών Κουκ'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Ώρα Κούβας',
                            'standard': 'Χειμερινή ώρα Κούβας',
                            'daylight': 'Θερινή ώρα Κούβας'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Ώρα Ντέιβις'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Ώρα Ντιμόντ Ντερβίλ'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Ώρα Ανατολικού Τιμόρ'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Ώρα Νησιού Πάσχα',
                            'standard': 'Χειμερινή ώρα Νησιού Πάσχα',
                            'daylight': 'Θερινή ώρα Νησιού Πάσχα'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Ώρα Εκουαδόρ'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Ώρα Κεντρικής Ευρώπης',
                            'standard': 'Χειμερινή ώρα Κεντρικής Ευρώπης',
                            'daylight': 'Θερινή ώρα Κεντρικής Ευρώπης'
                        },
                        'short': {
                            'generic': 'CET',
                            'standard': 'CET',
                            'daylight': 'CEST'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Ώρα Ανατολικής Ευρώπης',
                            'standard': 'Χειμερινή ώρα Ανατολικής Ευρώπης',
                            'daylight': 'Θερινή ώρα Ανατολικής Ευρώπης'
                        },
                        'short': {
                            'generic': 'EET',
                            'standard': 'EET',
                            'daylight': 'EEST'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Ώρα Δυτικής Ευρώπης',
                            'standard': 'Χειμερινή ώρα Δυτικής Ευρώπης',
                            'daylight': 'Θερινή ώρα Δυτικής Ευρώπης'
                        },
                        'short': {
                            'generic': 'WET',
                            'standard': 'WET',
                            'daylight': 'WEST'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Ώρα Νησιών Φώκλαντ',
                            'standard': 'Χειμερινή ώρα Νησιών Φώκλαντ',
                            'daylight': 'Θερινή ώρα Νησιών Φώκλαντ'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Ώρα Φίτζι',
                            'standard': 'Χειμερινή ώρα Φίτζι',
                            'daylight': 'Θερινή ώρα Φίτζι'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Ώρα Γαλλικής Γουιάνας'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Ώρα Τοκελάου'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Ώρα Τόνγκα',
                            'standard': 'Χειμερινή ώρα Τόνγκα',
                            'daylight': 'Θερινή ώρα Τόνγκα'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Ώρα Τσουκ'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Ώρα Τουρκμενιστάν',
                            'standard': 'Χειμερινή ώρα Τουρκμενιστάν',
                            'daylight': 'Θερινή ώρα Τουρκμενιστάν'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Ώρα Τουβαλού'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Ώρα Ουρουγουάης',
                            'standard': 'Χειμερινή ώρα Ουρουγουάης',
                            'daylight': 'Θερινή ώρα Ουρουγουάης'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Ώρα Ουζμπεκιστάν',
                            'standard': 'Χειμερινή ώρα Ουζμπεκιστάν',
                            'daylight': 'Θερινή ώρα Ουζμπεκιστάν'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Ώρα Βανουάτου',
                            'standard': 'Χειμερινή ώρα Βανουάτου',
                            'daylight': 'Θερινή ώρα Βανουάτου'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Ώρα Αικατερίνμπουργκ',
                            'standard': 'Χειμερινή ώρα Αικατερίνμπουργκ',
                            'daylight': 'Θερινή ώρα Αικατερίνμπουργκ'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Ώρα Γιακούτσκ',
                            'standard': 'Χειμερινή ώρα Γιακούτσκ',
                            'daylight': 'Θερινή ώρα Γιακούτσκ'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Ώρα Ουόλις και Φουτούνα'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Ώρα Νησιού Γουέικ'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Ώρα Βόστοκ'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Ώρα Βόλγκογκραντ',
                            'standard': 'Χειμερινή ώρα Βόλγκογκραντ',
                            'daylight': 'Θερινή ώρα Βόλγκογκραντ'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Ώρα Βλαδιβοστόκ',
                            'standard': 'Χειμερινή ώρα Βλαδιβοστόκ',
                            'daylight': 'Θερινή ώρα Βλαδιβοστόκ'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Ώρα Βενεζουέλας'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Ώρα Τατζικιστάν'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Ώρα Ταϊπέι',
                            'standard': 'Χειμερινή ώρα Ταϊπέι',
                            'daylight': 'Θερινή ώρα Ταϊπέι'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Ώρα Χοβντ',
                            'standard': 'Χειμερινή ώρα Χοβντ',
                            'daylight': 'Θερινή ώρα Χοβντ'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Ώρα Χονγκ Κονγκ',
                            'standard': 'Χειμερινή ώρα Χονγκ Κονγκ',
                            'daylight': 'Θερινή ώρα Χονγκ Κονγκ'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Ώρα Χαβάης-Αλεούτιων νήσων',
                            'standard': 'Χειμερινή ώρα Χαβάης-Αλεούτιων νήσων',
                            'daylight': 'Θερινή ώρα Χαβάης-Αλεούτιων νήσων'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Ώρα Γουιάνας'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Ώρα Κόλπου'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Ώρα Γκουάμ'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Ώρα Δυτικής Γροιλανδίας',
                            'standard': 'Χειμερινή ώρα Δυτικής Γροιλανδίας',
                            'daylight': 'Θερινή ώρα Δυτικής Γροιλανδίας'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Ώρα Ανατολικής Γροιλανδίας',
                            'standard': 'Χειμερινή ώρα Ανατολικής Γροιλανδίας',
                            'daylight': 'Θερινή ώρα Ανατολικής Γροιλανδίας'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Μέση ώρα Γκρίνουιτς'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Ώρα Νησιών Γκίλμπερτ'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Ώρα Γεωργίας',
                            'standard': 'Χειμερινή ώρα Γεωργίας',
                            'daylight': 'Θερινή ώρα Γεωργίας'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Ώρα Γκάμπιερ'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Ώρα Γκαλάπαγκος'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Ώρα Γαλλικού Νότου και Ανταρκτικής'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Ώρα Αμαζονίου',
                            'standard': 'Χειμερινή ώρα Αμαζονίου',
                            'daylight': 'Θερινή ώρα Αμαζονίου'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Κεντρική ώρα Βόρειας Αμερικής',
                            'standard': 'Κεντρική χειμερινή ώρα Βόρειας Αμερικής',
                            'daylight': 'Κεντρική θερινή ώρα Βόρειας Αμερικής'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Ώρα Ατλαντικού',
                            'standard': 'Χειμερινή ώρα Ατλαντικού',
                            'daylight': 'Θερινή ώρα Ατλαντικού'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Ώρα Κεντρικής Αυστραλίας',
                            'standard': 'Χειμερινή ώρα Κεντρικής Αυστραλίας',
                            'daylight': 'Θερινή ώρα Κεντρικής Αυστραλίας'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Ώρα Κεντροδυτικής Αυστραλίας',
                            'standard': 'Χειμερινή ώρα Κεντροδυτικής Αυστραλίας',
                            'daylight': 'Θερινή ώρα Κεντροδυτικής Αυστραλίας'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Ώρα Ανατολικής Αυστραλίας',
                            'standard': 'Χειμερινή ώρα Ανατολικής Αυστραλίας',
                            'daylight': 'Θερινή ώρα Ανατολικής Αυστραλίας'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Ώρα Δυτικής Αυστραλίας',
                            'standard': 'Χειμερινή ώρα Δυτικής Αυστραλίας',
                            'daylight': 'Θερινή ώρα Δυτικής Αυστραλίας'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Ώρα Αζερμπαϊτζάν',
                            'standard': 'Χειμερινή ώρα Αζερμπαϊτζάν',
                            'daylight': 'Θερινή ώρα Αζερμπαϊτζάν'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Ώρα Αζορών',
                            'standard': 'Χειμερινή ώρα Αζορών',
                            'daylight': 'Θερινή ώρα Αζορών'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Ώρα Μπανγκλαντές',
                            'standard': 'Χειμερινή ώρα Μπανγκλαντές',
                            'daylight': 'Θερινή ώρα Μπανγκλαντές'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Ώρα Μπουτάν'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Ώρα Βολιβίας'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Ώρα Μπραζίλια',
                            'standard': 'Χειμερινή ώρα Μπραζίλια',
                            'daylight': 'Θερινή ώρα Μπραζίλια'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Ώρα Μπρουνέι Νταρουσαλάμ'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Ώρα Πράσινου Ακρωτηρίου',
                            'standard': 'Χειμερινή ώρα Πράσινου Ακρωτηρίου',
                            'daylight': 'Θερινή ώρα Πράσινου Ακρωτηρίου'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Ώρα Τσαμόρο'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Ώρα Τσάθαμ',
                            'standard': 'Χειμερινή ώρα Τσάθαμ',
                            'daylight': 'Θερινή ώρα Τσάθαμ'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Ώρα Χιλής',
                            'standard': 'Χειμερινή ώρα Χιλής',
                            'daylight': 'Θερινή ώρα Χιλής'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Ώρα Ινδίας'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Ώρα Ινδικού Ωκεανού'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Ώρα Ινδοκίνας'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Ώρα: Κεντρική Ινδονησία'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Ώρα: Ανατολική Ινδονησία'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Ώρα: Δυτική Ινδονησία'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Ώρα Ιράν',
                            'standard': 'Χειμερινή ώρα Ιράν',
                            'daylight': 'Θερινή ώρα Ιράν'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Ώρα Ιρκούτσκ',
                            'standard': 'Χειμερινή ώρα Ιρκούτσκ',
                            'daylight': 'Θερινή ώρα Ιρκούτσκ'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Ώρα Ισραήλ',
                            'standard': 'Χειμερινή ώρα Ισραήλ',
                            'daylight': 'Θερινή ώρα Ισραήλ'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Ώρα Ιαπωνίας',
                            'standard': 'Χειμερινή ώρα Ιαπωνίας',
                            'daylight': 'Θερινή ώρα Ιαπωνίας'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Ώρα Καμτσάτκα',
                            'standard': 'Χειμερινή ώρα Πετροπαβλόβσκ-Καμτσάτσκι',
                            'daylight': 'Θερινή ώρα Πετροπαβλόβσκ-Καμτσάτσκι'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Ώρα Ανατολικού Καζακστάν'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Ώρα Δυτικού Καζακστάν'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Ώρα Κορέας',
                            'standard': 'Χειμερινή ώρα Κορέας',
                            'daylight': 'Θερινή ώρα Κορέας'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Ώρα Κοσράης'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Ώρα Κρασνόγιαρσκ',
                            'standard': 'Χειμερινή ώρα Κρασνόγιαρσκ',
                            'daylight': 'Θερινή ώρα Κρασνόγιαρσκ'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Ώρα Κιργιστάν'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Ώρα Νησιών Λάιν'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Ώρα Λορντ Χάου',
                            'standard': 'Χειμερινή ώρα Λορντ Χάου',
                            'daylight': 'Θερινή ώρα Λορντ Χάου'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Ώρα Μακάο',
                            'standard': 'Χειμερινή ώρα Μακάο',
                            'daylight': 'Θερινή ώρα Μακάο'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Ώρα Νησιού Μακουάρι'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Ώρα Μάγκανταν',
                            'standard': 'Χειμερινή ώρα Μάγκανταν',
                            'daylight': 'Θερινή ώρα Μάγκανταν'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Ώρα Μαλαισίας'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Ώρα Μαλδίβων'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Ώρα Μαρκέσας'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Ώρα Νησιών Μάρσαλ'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Ώρα Μαυρίκιου',
                            'standard': 'Χειμερινή ώρα Μαυρίκιου',
                            'daylight': 'Θερινή ώρα Μαυρίκιου'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Ώρα Μόσον'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Ώρα Ουλάν Μπατόρ',
                            'standard': 'Χειμερινή ώρα Ουλάν Μπατόρ',
                            'daylight': 'Θερινή ώρα Ουλάν Μπατόρ'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Ώρα Μόσχας',
                            'standard': 'Χειμερινή ώρα Μόσχας',
                            'daylight': 'Θερινή ώρα Μόσχας'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Ώρα Μιανμάρ'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Ώρα Ναούρου'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Ώρα Νεπάλ'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Ώρα Νέας Καληδονίας',
                            'standard': 'Χειμερινή ώρα Νέας Καληδονίας',
                            'daylight': 'Θερινή ώρα Νέας Καληδονίας'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Ώρα Νέας Ζηλανδίας',
                            'standard': 'Χειμερινή ώρα Νέας Ζηλανδίας',
                            'daylight': 'Θερινή ώρα Νέας Ζηλανδίας'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Ώρα Νέας Γης',
                            'standard': 'Χειμερινή ώρα Νέας Γης',
                            'daylight': 'Θερινή ώρα Νέας Γης'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Ώρα Νιούε'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Ώρα Νησιών Νόρφολκ'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Ώρα Φερνάρντο ντε Νορόνια',
                            'standard': 'Χειμερινή ώρα Φερνάρντο ντε Νορόνια',
                            'daylight': 'Θερινή ώρα Φερνάρντο ντε Νορόνια'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Ώρα Νησιών Βόρειες Μαριάνες'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Ώρα Νοβοσιμπίρσκ',
                            'standard': 'Χειμερινή ώρα Νοβοσιμπίρσκ',
                            'daylight': 'Θερινή ώρα Νοβοσιμπίρσκ'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Ώρα Ομσκ',
                            'standard': 'Χειμερινή ώρα Ομσκ',
                            'daylight': 'Θερινή ώρα Ομσκ'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Ώρα Πακιστάν',
                            'standard': 'Χειμερινή ώρα Πακιστάν',
                            'daylight': 'Θερινή ώρα Πακιστάν'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Ώρα Παλάου'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Ώρα Παπουά Νέα Γουινέα'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Ώρα Παραγουάης',
                            'standard': 'Χειμερινή ώρα Παραγουάης',
                            'daylight': 'Θερινή ώρα Παραγουάης'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Ώρα ({0})',
                'regionFormat-type-daylight': 'Θερινή ώρα ({0})',
                'regionFormat-type-standard': 'Χειμερινή ώρα ({0})',
                'fallbackFormat': '[{1} ({0})]'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'Αυγ',
                                '7': 'Ιουλ',
                                '6': 'Ιουν',
                                '5': 'Μαΐ',
                                '12': 'Δεκ',
                                '11': 'Νοε',
                                '10': 'Οκτ',
                                '9': 'Σεπ',
                                '1': 'Ιαν',
                                '2': 'Φεβ',
                                '3': 'Μαρ',
                                '4': 'Απρ'
                            },
                            'narrow': {
                                '8': 'Α',
                                '7': 'Ι',
                                '6': 'Ι',
                                '5': 'Μ',
                                '12': 'Δ',
                                '11': 'Ν',
                                '10': 'Ο',
                                '9': 'Σ',
                                '1': 'Ι',
                                '2': 'Φ',
                                '3': 'Μ',
                                '4': 'Α'
                            },
                            'wide': {
                                '8': 'Αυγούστου',
                                '7': 'Ιουλίου',
                                '6': 'Ιουνίου',
                                '5': 'Μαΐου',
                                '12': 'Δεκεμβρίου',
                                '11': 'Νοεμβρίου',
                                '10': 'Οκτωβρίου',
                                '9': 'Σεπτεμβρίου',
                                '1': 'Ιανουαρίου',
                                '2': 'Φεβρουαρίου',
                                '3': 'Μαρτίου',
                                '4': 'Απριλίου'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'Αύγ',
                                '7': 'Ιούλ',
                                '6': 'Ιούν',
                                '5': 'Μάι',
                                '12': 'Δεκ',
                                '11': 'Νοέ',
                                '10': 'Οκτ',
                                '9': 'Σεπ',
                                '1': 'Ιαν',
                                '2': 'Φεβ',
                                '3': 'Μάρ',
                                '4': 'Απρ'
                            },
                            'narrow': {
                                '8': 'Α',
                                '7': 'Ι',
                                '6': 'Ι',
                                '5': 'Μ',
                                '12': 'Δ',
                                '11': 'Ν',
                                '10': 'Ο',
                                '9': 'Σ',
                                '1': 'Ι',
                                '2': 'Φ',
                                '3': 'Μ',
                                '4': 'Α'
                            },
                            'wide': {
                                '8': 'Αύγουστος',
                                '7': 'Ιούλιος',
                                '6': 'Ιούνιος',
                                '5': 'Μάιος',
                                '12': 'Δεκέμβριος',
                                '11': 'Νοέμβριος',
                                '10': 'Οκτώβριος',
                                '9': 'Σεπτέμβριος',
                                '1': 'Ιανουάριος',
                                '2': 'Φεβρουάριος',
                                '3': 'Μάρτιος',
                                '4': 'Απρίλιος'
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
                            '0-alt-variant': 'π.Κ.Χ.',
                            '1': 'μ.Χ.',
                            '1-alt-variant': 'ΚΧ'
                        },
                        'eraAbbr': {
                            '0': 'π.Χ.',
                            '0-alt-variant': 'π.Κ.Χ.',
                            '1': 'μ.Χ.',
                            '1-alt-variant': 'ΚΧ'
                        },
                        'eraNarrow': {
                            '0': 'π.Χ.',
                            '0-alt-variant': 'π.Κ.Χ.',
                            '1': 'μ.Χ.',
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
                            'yMMM': 'LLL y',
                            'yMEd': 'E, d/M/y',
                            'yMd': 'd/M/y',
                            'yM': 'M/y',
                            'y': 'y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E d',
                            'd': 'd',
                            'GyMMMd': 'd MMM y G',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'H': 'HH',
                            'HHmm': 'HH:mm',
                            'yQQQQ': 'y QQQQ',
                            'yQQQ': 'y QQQ',
                            'yMMMM': 'LLLL y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMd': 'd MMM y',
                            'Hm': 'HH:mm',
                            'hm': 'h:mm a',
                            'HHmmss': 'HH:mm:ss',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'LLL y G',
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
                                'd': 'E, dd - E, dd MMM',
                                'M': 'E, dd MMM - E, dd MMM'
                            },
                            'MMMd': {
                                'd': 'dd-dd MMM',
                                'M': 'dd MMM - dd MMM'
                            },
                            'MMM': {
                                'M': 'LLL-LLL'
                            },
                            'MEd': {
                                'd': 'E, dd/MM - E, dd/MM',
                                'M': 'E, dd/MM - E, dd/MM'
                            },
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h-h a v'
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
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'h': 'h:mm-h:mm a v',
                                'm': 'h:mm-h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'h': 'h:mm-h:mm a',
                                'm': 'h:mm-h:mm a'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'intervalFormatFallback': '{0} - {1}'
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
