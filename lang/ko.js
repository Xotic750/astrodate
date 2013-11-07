/* AstroDate
 * Language: ko
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * localeDisplayNames: 24r9287
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
        AstroDate.lang('ko', {
            'codePatterns': {
                'language': '언어: {0}',
                'script': '스크립트: {0}',
                'territory': '지역: {0}'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '가나 별도 정렬',
                    'yes': '가나를 다르게 정렬'
                },
                'colCaseLevel': {
                    'no': '대/소문자 무시 정렬',
                    'yes': '대/소문자 구분 정렬'
                },
                'colCaseFirst': {
                    'lower': '첫 소문자 정렬',
                    'no': '일반 대/소문자 정렬 순서',
                    'upper': '대문자 우선 정렬'
                },
                'colStrength': {
                    'identical': '모두 정렬',
                    'primary': '기본 문자만 정렬',
                    'quaternary': '악센트/대소문자/전반각/가나 정렬',
                    'secondary': '악센트 정렬',
                    'tertiary': '악센트/대소문자/전반각 정렬'
                },
                'colNumeric': {
                    'no': '숫자별 정렬',
                    'yes': '숫자 정렬'
                },
                'colNormalization': {
                    'no': '표준화 없이 정렬',
                    'yes': '유니코드 표준화 정렬'
                },
                'calendar': {
                    'japanese': '일본력',
                    'iso8601': 'iso8601',
                    'coptic': '콥트력',
                    'dangi': '단기력',
                    'ethiopic': '에티오피아력',
                    'ethiopic-amete-alem': '에티오피아 아메테 알렘력',
                    'gregorian': '태양력',
                    'hebrew': '히브리력',
                    'persian': '페르시안력',
                    'roc': '대만력',
                    'chinese': '중국력',
                    'buddhist': '불교력',
                    'indian': '인도력',
                    'islamic': '이슬람력',
                    'islamic-civil': '이슬람 상용력',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': '전화번호부순',
                    'gb2312han': '중국어 간체 정렬 순서 (GB2312)',
                    'eor': 'eor',
                    'ducet': '기본 유니코드 정렬 순서',
                    'dictionary': '사전 정렬순',
                    'big5han': '중국어 번체 정렬 순서 (Big5)',
                    'traditional': '전통 역법',
                    'standard': '표준 정렬 순서',
                    'zhuyin': 'zhuyin',
                    'unihan': '부수순',
                    'stroke': '자획순',
                    'searchjl': '한글 자음으로 검색',
                    'search': '범용 검색',
                    'reformed': '개정 정렬순',
                    'pinyin': '병음순',
                    'phonetic': '소리나는 대로 정렬 순서'
                },
                'numbers': {
                    'knda': '칸나다 숫자',
                    'khmr': '크메르 숫자',
                    'kali': '카야 리식 숫자',
                    'jpanfin': '일본 재무 숫자',
                    'jpan': '일본 숫자',
                    'java': '자바 숫자',
                    'hebr': '히브리 숫자',
                    'hantfin': '중국어 번체 재무 숫자',
                    'hant': '중국어 번체 숫자',
                    'hansfin': '중국어 간체 재무 숫자',
                    'hans': '중국어 간체 숫자',
                    'hanidec': '중국어 십진 숫자',
                    'guru': '굴묵키 숫자',
                    'gujr': '구자라트 숫자',
                    'greklow': '그리스어 소문자 숫자',
                    'grek': '그리스 숫자',
                    'bali': '발리 숫자',
                    'armnlow': '아르메니아 소문자 숫자',
                    'armn': '아르메니아 숫자',
                    'arabext': '확장형 아라비아-인도식 숫자',
                    'arab': '아라비아-인도식 숫자',
                    'finance': '재무 숫자',
                    'traditional': '전통적인 숫자',
                    'native': '기본 숫자',
                    'beng': '뱅골 숫자',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': '참 숫자',
                    'deva': '데바나가리 숫자',
                    'orya': '오리야 숫자',
                    'osma': 'osma',
                    'roman': '로마 숫자',
                    'romanlow': '로마 소문자 숫자',
                    'saur': '사우라슈트라 숫자',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': '순다 숫자',
                    'vaii': '바이 숫자',
                    'tibt': '티벳 숫자',
                    'thai': '태국 숫자',
                    'telu': '텔루구 숫자',
                    'tamldec': '타밀 숫자',
                    'taml': '타밀어 숫자',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': '올치키 숫자',
                    'nkoo': 'nkoo',
                    'mymrshan': '미얀마 샨 숫자',
                    'mymr': '미얀마 숫자',
                    'mtei': '메이테이 마옉 숫자',
                    'mong': '몽골 숫자',
                    'mlym': '말라얄람 숫자',
                    'limb': '림부 숫자',
                    'lepc': '렙차 숫자',
                    'latn': '서양 숫자',
                    'laoo': '라오 숫자',
                    'lanatham': '타이 탐탐 숫자',
                    'lana': '타이 탐 호라 숫자',
                    'geor': '그루지아 숫자',
                    'fullwide': '전체 숫자',
                    'ethi': '에티오피아 숫자'
                },
                'colAlternate': {
                    'non-ignorable': '기호 정렬',
                    'shifted': '기호 무시 정렬'
                },
                'colBackwards': {
                    'no': '악센트 일반 정렬',
                    'yes': '악센트 역순 정렬'
                }
            },
            'keys': {
                'colNormalization': '표준 정렬',
                'collation': '정렬 순서',
                'colHiraganaQuaternary': '가나 정렬',
                'colCaseLevel': '대/소문자 구분 정렬',
                'colCaseFirst': '대문자/소문자 순서',
                'colBackwards': '악센트 역순 정렬',
                'colAlternate': '기호 정렬 무시',
                'calendar': '달력',
                'x': '공개 여부',
                'variableTop': '기호로 정렬',
                'va': '방언',
                'timezone': '시간대',
                'numbers': '숫자',
                'currency': '통화',
                'colStrength': '정렬 강도',
                'colNumeric': '숫자 정렬'
            },
            'localeDisplayPattern': {
                'localePattern': '{0}({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '사이판'
                        },
                        'Rarotonga': {
                            'exemplarCity': '라로통가'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '포트모르즈비'
                        },
                        'Ponape': {
                            'exemplarCity': '포나페'
                        },
                        'Pitcairn': {
                            'exemplarCity': '핏케언'
                        },
                        'Palau': {
                            'exemplarCity': '팔라우'
                        },
                        'Auckland': {
                            'exemplarCity': '오클랜드'
                        },
                        'Apia': {
                            'exemplarCity': '아피아'
                        },
                        'Funafuti': {
                            'exemplarCity': '푸나푸티'
                        },
                        'Galapagos': {
                            'exemplarCity': '갈라파고스'
                        },
                        'Gambier': {
                            'exemplarCity': '감비어'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '과달카날'
                        },
                        'Guam': {
                            'exemplarCity': '괌'
                        },
                        'Honolulu': {
                            'exemplarCity': '호놀룰루'
                        },
                        'Wallis': {
                            'exemplarCity': '월리스'
                        },
                        'Wake': {
                            'exemplarCity': '웨이크'
                        },
                        'Truk': {
                            'exemplarCity': '트루크'
                        },
                        'Tongatapu': {
                            'exemplarCity': '통가타푸'
                        },
                        'Tarawa': {
                            'exemplarCity': '타라와'
                        },
                        'Tahiti': {
                            'exemplarCity': '타히티'
                        },
                        'Kiritimati': {
                            'exemplarCity': '키리티마티'
                        },
                        'Johnston': {
                            'exemplarCity': '존스톤'
                        },
                        'Chatham': {
                            'exemplarCity': '채텀'
                        },
                        'Easter': {
                            'exemplarCity': '이스터 섬'
                        },
                        'Efate': {
                            'exemplarCity': '에파테'
                        },
                        'Enderbury': {
                            'exemplarCity': '엔더베리'
                        },
                        'Fakaofo': {
                            'exemplarCity': '파카오푸'
                        },
                        'Fiji': {
                            'exemplarCity': '피지'
                        },
                        'Kosrae': {
                            'exemplarCity': '코스레'
                        },
                        'Kwajalein': {
                            'exemplarCity': '콰잘렌'
                        },
                        'Majuro': {
                            'exemplarCity': '마주로'
                        },
                        'Marquesas': {
                            'exemplarCity': '마퀘사스'
                        },
                        'Midway': {
                            'exemplarCity': '미드웨이'
                        },
                        'Nauru': {
                            'exemplarCity': '나우루'
                        },
                        'Niue': {
                            'exemplarCity': '니우에'
                        },
                        'Norfolk': {
                            'exemplarCity': '노퍽'
                        },
                        'Noumea': {
                            'exemplarCity': '누메아'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '파고파고'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '린데만'
                        },
                        'Hobart': {
                            'exemplarCity': '호바트'
                        },
                        'Eucla': {
                            'exemplarCity': '유클라'
                        },
                        'Darwin': {
                            'exemplarCity': '다윈'
                        },
                        'Sydney': {
                            'exemplarCity': '시드니'
                        },
                        'Perth': {
                            'exemplarCity': '퍼스'
                        },
                        'Melbourne': {
                            'exemplarCity': '멜버른'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '로드 하우'
                        },
                        'Adelaide': {
                            'exemplarCity': '애들레이드'
                        },
                        'Brisbane': {
                            'exemplarCity': '브리스베인'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '브로컨힐'
                        },
                        'Currie': {
                            'exemplarCity': '퀴리'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '몰디브'
                        },
                        'Mahe': {
                            'exemplarCity': '마헤'
                        },
                        'Kerguelen': {
                            'exemplarCity': '케르켈렌'
                        },
                        'Reunion': {
                            'exemplarCity': '레위니옹'
                        },
                        'Mayotte': {
                            'exemplarCity': '메요트'
                        },
                        'Mauritius': {
                            'exemplarCity': '모리셔스'
                        },
                        'Antananarivo': {
                            'exemplarCity': '안타나나리보'
                        },
                        'Chagos': {
                            'exemplarCity': '차고스'
                        },
                        'Christmas': {
                            'exemplarCity': '크리스마스'
                        },
                        'Cocos': {
                            'exemplarCity': '코코스'
                        },
                        'Comoro': {
                            'exemplarCity': '코모로'
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
                            'exemplarCity': '알 수 없는 장소'
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
                            'exemplarCity': '로데라'
                        },
                        'Palmer': {
                            'exemplarCity': '파머'
                        },
                        'McMurdo': {
                            'exemplarCity': '맥머도'
                        },
                        'Vostok': {
                            'exemplarCity': '보스토크'
                        },
                        'Syowa': {
                            'exemplarCity': '쇼와'
                        },
                        'South_Pole': {
                            'exemplarCity': '남극'
                        },
                        'Casey': {
                            'exemplarCity': '케이시'
                        },
                        'Davis': {
                            'exemplarCity': '데이비스'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '뒤몽 뒤르빌'
                        },
                        'Macquarie': {
                            'exemplarCity': '맥쿼리'
                        },
                        'Mawson': {
                            'exemplarCity': '모슨'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '롱이어비엔'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '토론토'
                        },
                        'Tijuana': {
                            'exemplarCity': '티후아나'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '선더베이'
                        },
                        'Thule': {
                            'exemplarCity': '툴레'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '테구시갈파'
                        },
                        'Swift_Current': {
                            'exemplarCity': '스위프트커런트'
                        },
                        'Chicago': {
                            'exemplarCity': '시카고'
                        },
                        'Cayman': {
                            'exemplarCity': '케이맨'
                        },
                        'Cayenne': {
                            'exemplarCity': '카옌'
                        },
                        'Catamarca': {
                            'exemplarCity': '카타마르카'
                        },
                        'Caracas': {
                            'exemplarCity': '카라카스'
                        },
                        'Cancun': {
                            'exemplarCity': '칸쿤'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '캄포 그란데'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '케임브리지 베이'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '부에노스 아이레스'
                        },
                        'Boise': {
                            'exemplarCity': '보이시'
                        },
                        'Asuncion': {
                            'exemplarCity': '아순시온'
                        },
                        'Aruba': {
                            'exemplarCity': '아루바'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '리오 가예고스'
                            },
                            'San_Juan': {
                                'exemplarCity': '산후안'
                            },
                            'Ushuaia': {
                                'exemplarCity': '우수아이아'
                            },
                            'La_Rioja': {
                                'exemplarCity': '라 리오하'
                            },
                            'San_Luis': {
                                'exemplarCity': '산루이스'
                            },
                            'Salta': {
                                'exemplarCity': '살타'
                            },
                            'Tucuman': {
                                'exemplarCity': '뚜꾸만'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '아라과이나'
                        },
                        'Antigua': {
                            'exemplarCity': '안티과'
                        },
                        'Anguilla': {
                            'exemplarCity': '앙귈라'
                        },
                        'Anchorage': {
                            'exemplarCity': '앵커리지'
                        },
                        'Adak': {
                            'exemplarCity': '에이닥'
                        },
                        'Bahia': {
                            'exemplarCity': '바히아'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '바이아 반데라스'
                        },
                        'Barbados': {
                            'exemplarCity': '바베이도스'
                        },
                        'Belem': {
                            'exemplarCity': '벨렘'
                        },
                        'Belize': {
                            'exemplarCity': '벨리즈'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '블랑 사블롱'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '보아 비스타'
                        },
                        'Bogota': {
                            'exemplarCity': '보고타'
                        },
                        'Curacao': {
                            'exemplarCity': '퀴라소'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '덴마크샤븐'
                        },
                        'Dawson': {
                            'exemplarCity': '도슨'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '도슨크릭'
                        },
                        'Denver': {
                            'exemplarCity': '덴버'
                        },
                        'Detroit': {
                            'exemplarCity': '디트로이트'
                        },
                        'Hermosillo': {
                            'exemplarCity': '에르모시요'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '인디아나주, 뱅센'
                            },
                            'Petersburg': {
                                'exemplarCity': '인디애나주, 피츠버그'
                            },
                            'Tell_City': {
                                'exemplarCity': '인디아나주, 텔시티'
                            },
                            'Knox': {
                                'exemplarCity': '인디애나주 녹스'
                            },
                            'Winamac': {
                                'exemplarCity': '인디아나주, 워너맥'
                            },
                            'Marengo': {
                                'exemplarCity': '인디애나주, 마렝고'
                            },
                            'Vevay': {
                                'exemplarCity': '자포로제'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '인디애나폴리스'
                        },
                        'Inuvik': {
                            'exemplarCity': '이누빅'
                        },
                        'Iqaluit': {
                            'exemplarCity': '이칼루이트'
                        },
                        'Jamaica': {
                            'exemplarCity': '자메이카'
                        },
                        'Jujuy': {
                            'exemplarCity': '후후이'
                        },
                        'Juneau': {
                            'exemplarCity': '주노'
                        },
                        'Yellowknife': {
                            'exemplarCity': '옐로나이프'
                        },
                        'Yakutat': {
                            'exemplarCity': '야쿠타트'
                        },
                        'Winnipeg': {
                            'exemplarCity': '위니펙'
                        },
                        'Whitehorse': {
                            'exemplarCity': '화이트호스'
                        },
                        'Vancouver': {
                            'exemplarCity': '벤쿠버'
                        },
                        'Tortola': {
                            'exemplarCity': '토르톨라'
                        },
                        'Kralendijk': {
                            'exemplarCity': '크라렌디즈크'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '켄터키주, 몬티첼로'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '하바나'
                        },
                        'Halifax': {
                            'exemplarCity': '핼리팩스'
                        },
                        'Guyana': {
                            'exemplarCity': '가이아나'
                        },
                        'Guayaquil': {
                            'exemplarCity': '과야킬'
                        },
                        'Guatemala': {
                            'exemplarCity': '과테말라'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '과들루프'
                        },
                        'Grenada': {
                            'exemplarCity': '그레나다'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '그랜드 터크'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '구즈베이'
                        },
                        'Godthab': {
                            'exemplarCity': '고드호프'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '글라스베이'
                        },
                        'Fortaleza': {
                            'exemplarCity': '포르탈레자'
                        },
                        'El_Salvador': {
                            'exemplarCity': '엘살바도르'
                        },
                        'Eirunepe': {
                            'exemplarCity': '아이루네페'
                        },
                        'Edmonton': {
                            'exemplarCity': '에드먼턴'
                        },
                        'Dominica': {
                            'exemplarCity': '도미니카'
                        },
                        'Chihuahua': {
                            'exemplarCity': '치와와'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '코랄하버'
                        },
                        'Cordoba': {
                            'exemplarCity': '코르도바'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '코스타리카'
                        },
                        'Creston': {
                            'exemplarCity': '크레스톤'
                        },
                        'Cuiaba': {
                            'exemplarCity': '쿠이아바'
                        },
                        'La_Paz': {
                            'exemplarCity': '라파스'
                        },
                        'Lima': {
                            'exemplarCity': '리마'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '로스앤젤레스'
                        },
                        'Louisville': {
                            'exemplarCity': '루이빌'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '로워 프린스 쿼터'
                        },
                        'Maceio': {
                            'exemplarCity': '마세이오'
                        },
                        'Managua': {
                            'exemplarCity': '마나과'
                        },
                        'Manaus': {
                            'exemplarCity': '마나우스'
                        },
                        'Marigot': {
                            'exemplarCity': '마리곳'
                        },
                        'Martinique': {
                            'exemplarCity': '마티니크'
                        },
                        'Matamoros': {
                            'exemplarCity': '마타모로스'
                        },
                        'Mazatlan': {
                            'exemplarCity': '마사틀란'
                        },
                        'Mendoza': {
                            'exemplarCity': '멘도사'
                        },
                        'Menominee': {
                            'exemplarCity': '메노미니'
                        },
                        'Merida': {
                            'exemplarCity': '메리다'
                        },
                        'Metlakatla': {
                            'exemplarCity': '메틀라카틀라'
                        },
                        'Mexico_City': {
                            'exemplarCity': '멕시코 시티'
                        },
                        'Miquelon': {
                            'exemplarCity': '미클롱'
                        },
                        'Moncton': {
                            'exemplarCity': '몽턴'
                        },
                        'Monterrey': {
                            'exemplarCity': '몬테레이'
                        },
                        'Montevideo': {
                            'exemplarCity': '몬테비데오'
                        },
                        'Montreal': {
                            'exemplarCity': '몬트리올'
                        },
                        'Montserrat': {
                            'exemplarCity': '몬세라트'
                        },
                        'Nassau': {
                            'exemplarCity': '나소'
                        },
                        'New_York': {
                            'exemplarCity': '뉴욕'
                        },
                        'Nipigon': {
                            'exemplarCity': '니피곤'
                        },
                        'Nome': {
                            'exemplarCity': '놈'
                        },
                        'Noronha': {
                            'exemplarCity': '노롱야'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '노스다코타주, 베라'
                            },
                            'New_Salem': {
                                'exemplarCity': '노스 다코타주, 뉴살렘'
                            },
                            'Center': {
                                'exemplarCity': '중부, 노스다코타'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '오히나가'
                        },
                        'Panama': {
                            'exemplarCity': '파나마'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '팡니르퉁'
                        },
                        'Paramaribo': {
                            'exemplarCity': '파라마리보'
                        },
                        'Phoenix': {
                            'exemplarCity': '피닉스'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '포르토프랭스'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '포트오브스페인'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '포르토 벨로'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '푸에르토리코'
                        },
                        'Rainy_River': {
                            'exemplarCity': '레이니강'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '랭킹 인렛'
                        },
                        'Recife': {
                            'exemplarCity': '레시페'
                        },
                        'Regina': {
                            'exemplarCity': '리자이나'
                        },
                        'Resolute': {
                            'exemplarCity': '리졸루트'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '리오 브랑코'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '산타 이사벨'
                        },
                        'Santarem': {
                            'exemplarCity': '산타렘'
                        },
                        'Santiago': {
                            'exemplarCity': '산티아고'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '산토도밍고'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '상파울로'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '스코레스바이선드'
                        },
                        'Shiprock': {
                            'exemplarCity': '십록'
                        },
                        'Sitka': {
                            'exemplarCity': '싯카'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '생바르텔레미'
                        },
                        'St_Johns': {
                            'exemplarCity': '세인트존스'
                        },
                        'St_Kitts': {
                            'exemplarCity': '세인트 키츠'
                        },
                        'St_Lucia': {
                            'exemplarCity': '세인트 루시아'
                        },
                        'St_Thomas': {
                            'exemplarCity': '세인트 토마스'
                        },
                        'St_Vincent': {
                            'exemplarCity': '세인트 빈센트'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '사우스조지아'
                        },
                        'Reykjavik': {
                            'exemplarCity': '레이캬비크'
                        },
                        'Stanley': {
                            'exemplarCity': '스탠리'
                        },
                        'St_Helena': {
                            'exemplarCity': '세인트 헬레나'
                        },
                        'Azores': {
                            'exemplarCity': '아조레스'
                        },
                        'Bermuda': {
                            'exemplarCity': '버뮤다'
                        },
                        'Canary': {
                            'exemplarCity': '카나리아 제도'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '카보 베르데'
                        },
                        'Faeroe': {
                            'exemplarCity': '페로 제도'
                        },
                        'Madeira': {
                            'exemplarCity': '마데이라'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '오슬로'
                        },
                        'Moscow': {
                            'exemplarCity': '모스크바'
                        },
                        'Monaco': {
                            'exemplarCity': '모나코'
                        },
                        'Minsk': {
                            'exemplarCity': '민스크'
                        },
                        'Mariehamn': {
                            'exemplarCity': '마리에하먼'
                        },
                        'Malta': {
                            'exemplarCity': '몰타'
                        },
                        'Madrid': {
                            'exemplarCity': '마드리드'
                        },
                        'Luxembourg': {
                            'exemplarCity': '룩셈부르크'
                        },
                        'London': {
                            'long': {
                                'daylight': '영국 일광 절약 시간'
                            },
                            'exemplarCity': '런던'
                        },
                        'Ljubljana': {
                            'exemplarCity': '류블랴나'
                        },
                        'Lisbon': {
                            'exemplarCity': '리스본'
                        },
                        'Kiev': {
                            'exemplarCity': '키예프'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '칼리닌그라드'
                        },
                        'Jersey': {
                            'exemplarCity': '저지'
                        },
                        'Istanbul': {
                            'exemplarCity': '이스탄불'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '맨섬'
                        },
                        'Bucharest': {
                            'exemplarCity': '부쿠레슈티'
                        },
                        'Brussels': {
                            'exemplarCity': '브뤼셀'
                        },
                        'Bratislava': {
                            'exemplarCity': '브라티슬라바'
                        },
                        'Berlin': {
                            'exemplarCity': '베를린'
                        },
                        'Belgrade': {
                            'exemplarCity': '베오그라드'
                        },
                        'Athens': {
                            'exemplarCity': '아테네'
                        },
                        'Andorra': {
                            'exemplarCity': '안도라'
                        },
                        'Amsterdam': {
                            'exemplarCity': '암스텔담'
                        },
                        'Simferopol': {
                            'exemplarCity': '심페로폴'
                        },
                        'Skopje': {
                            'exemplarCity': '스코페'
                        },
                        'Sofia': {
                            'exemplarCity': '소피아'
                        },
                        'Stockholm': {
                            'exemplarCity': '스톡홀름'
                        },
                        'Tallinn': {
                            'exemplarCity': '탈린'
                        },
                        'Tirane': {
                            'exemplarCity': '티라나'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '우주고로트'
                        },
                        'Vaduz': {
                            'exemplarCity': '파두츠'
                        },
                        'Zurich': {
                            'exemplarCity': '취리히'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '자포로지예'
                        },
                        'Zagreb': {
                            'exemplarCity': '자그레브'
                        },
                        'Warsaw': {
                            'exemplarCity': '바르샤바'
                        },
                        'Volgograd': {
                            'exemplarCity': '볼고그라트'
                        },
                        'Vilnius': {
                            'exemplarCity': '빌니우스'
                        },
                        'Vienna': {
                            'exemplarCity': '비엔나'
                        },
                        'Vatican': {
                            'exemplarCity': '바티칸'
                        },
                        'Sarajevo': {
                            'exemplarCity': '사라예보'
                        },
                        'San_Marino': {
                            'exemplarCity': '산마리노'
                        },
                        'Samara': {
                            'exemplarCity': '사마라'
                        },
                        'Rome': {
                            'exemplarCity': '로마'
                        },
                        'Riga': {
                            'exemplarCity': '리가'
                        },
                        'Prague': {
                            'exemplarCity': '프라하'
                        },
                        'Podgorica': {
                            'exemplarCity': '포드고리차'
                        },
                        'Paris': {
                            'exemplarCity': '파리'
                        },
                        'Helsinki': {
                            'exemplarCity': '헬싱키'
                        },
                        'Guernsey': {
                            'exemplarCity': '건지'
                        },
                        'Gibraltar': {
                            'exemplarCity': '지브롤터'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '아일랜드 시간'
                            },
                            'exemplarCity': '더블린'
                        },
                        'Copenhagen': {
                            'exemplarCity': '코펜하겐'
                        },
                        'Chisinau': {
                            'exemplarCity': '키시나우'
                        },
                        'Busingen': {
                            'exemplarCity': '뷔지겐'
                        },
                        'Budapest': {
                            'exemplarCity': '부다페스트'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '리브르빌'
                        },
                        'Lagos': {
                            'exemplarCity': '라고스'
                        },
                        'Kinshasa': {
                            'exemplarCity': '킨샤사'
                        },
                        'Kigali': {
                            'exemplarCity': '키갈리'
                        },
                        'Khartoum': {
                            'exemplarCity': '카르툼'
                        },
                        'Kampala': {
                            'exemplarCity': '캄팔라'
                        },
                        'Juba': {
                            'exemplarCity': '주바'
                        },
                        'Johannesburg': {
                            'exemplarCity': '요하네스버그'
                        },
                        'Harare': {
                            'exemplarCity': '하라레'
                        },
                        'Gaborone': {
                            'exemplarCity': '가보로네'
                        },
                        'Freetown': {
                            'exemplarCity': '프리타운'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '엘아이운'
                        },
                        'Douala': {
                            'exemplarCity': '두알라'
                        },
                        'Djibouti': {
                            'exemplarCity': '지부티'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '다르에스살람'
                        },
                        'Dakar': {
                            'exemplarCity': '다카르'
                        },
                        'Banjul': {
                            'exemplarCity': '반줄'
                        },
                        'Bangui': {
                            'exemplarCity': '방기'
                        },
                        'Bamako': {
                            'exemplarCity': '바마코'
                        },
                        'Asmera': {
                            'exemplarCity': '아스메라'
                        },
                        'Malabo': {
                            'exemplarCity': '말라보'
                        },
                        'Maputo': {
                            'exemplarCity': '마푸토'
                        },
                        'Maseru': {
                            'exemplarCity': '마세루'
                        },
                        'Mbabane': {
                            'exemplarCity': '음바바네'
                        },
                        'Mogadishu': {
                            'exemplarCity': '모가디슈'
                        },
                        'Monrovia': {
                            'exemplarCity': '몬로비아'
                        },
                        'Nairobi': {
                            'exemplarCity': '나이로비'
                        },
                        'Ndjamena': {
                            'exemplarCity': '엔자메나'
                        },
                        'Windhoek': {
                            'exemplarCity': '빈트후크'
                        },
                        'Tunis': {
                            'exemplarCity': '튀니스'
                        },
                        'Tripoli': {
                            'exemplarCity': '트리폴리'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '상투메'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '포르토노보'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '와가두구'
                        },
                        'Nouakchott': {
                            'exemplarCity': '누악쇼트'
                        },
                        'Niamey': {
                            'exemplarCity': '니아메'
                        },
                        'Lusaka': {
                            'exemplarCity': '루사카'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '루붐바시'
                        },
                        'Luanda': {
                            'exemplarCity': '루안다'
                        },
                        'Lome': {
                            'exemplarCity': '로메'
                        },
                        'Conakry': {
                            'exemplarCity': '코나크리'
                        },
                        'Ceuta': {
                            'exemplarCity': '세우타'
                        },
                        'Casablanca': {
                            'exemplarCity': '카사블랑카'
                        },
                        'Cairo': {
                            'exemplarCity': '카이로'
                        },
                        'Bujumbura': {
                            'exemplarCity': '부줌부라'
                        },
                        'Brazzaville': {
                            'exemplarCity': '브라자빌'
                        },
                        'Blantyre': {
                            'exemplarCity': '블랜타이어'
                        },
                        'Bissau': {
                            'exemplarCity': '비사우'
                        },
                        'Abidjan': {
                            'exemplarCity': '아비장'
                        },
                        'Accra': {
                            'exemplarCity': '아크라'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '아디스아바바'
                        },
                        'Algiers': {
                            'exemplarCity': '알제'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '상하이'
                        },
                        'Seoul': {
                            'exemplarCity': '서울'
                        },
                        'Samarkand': {
                            'exemplarCity': '사마르칸트'
                        },
                        'Sakhalin': {
                            'exemplarCity': '사할린'
                        },
                        'Saigon': {
                            'exemplarCity': '사이공'
                        },
                        'Riyadh': {
                            'exemplarCity': '리야드'
                        },
                        'Rangoon': {
                            'exemplarCity': '랑군'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '키질로르다'
                        },
                        'Qatar': {
                            'exemplarCity': '카타르'
                        },
                        'Pyongyang': {
                            'exemplarCity': '평양'
                        },
                        'Pontianak': {
                            'exemplarCity': '폰티아나크'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '프놈펜'
                        },
                        'Oral': {
                            'exemplarCity': '오랄'
                        },
                        'Omsk': {
                            'exemplarCity': '옴스크'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '노보시비르스크'
                        },
                        'Baghdad': {
                            'exemplarCity': '바그다드'
                        },
                        'Chongqing': {
                            'exemplarCity': '충칭'
                        },
                        'Colombo': {
                            'exemplarCity': '콜롬보'
                        },
                        'Damascus': {
                            'exemplarCity': '다마스쿠스'
                        },
                        'Dhaka': {
                            'exemplarCity': '다카'
                        },
                        'Dili': {
                            'exemplarCity': '딜리'
                        },
                        'Dubai': {
                            'exemplarCity': '두바이'
                        },
                        'Dushanbe': {
                            'exemplarCity': '두샨베'
                        },
                        'Gaza': {
                            'exemplarCity': '가자'
                        },
                        'Harbin': {
                            'exemplarCity': '하얼빈'
                        },
                        'Hebron': {
                            'exemplarCity': '헤브론'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '홍콩'
                        },
                        'Hovd': {
                            'exemplarCity': '호브드'
                        },
                        'Irkutsk': {
                            'exemplarCity': '이르쿠츠크'
                        },
                        'Jakarta': {
                            'exemplarCity': '자카르타'
                        },
                        'Jayapura': {
                            'exemplarCity': '자야푸라'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '울란바토르'
                        },
                        'Urumqi': {
                            'exemplarCity': '우루무치'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '우스티네라'
                        },
                        'Vientiane': {
                            'exemplarCity': '비엔티안'
                        },
                        'Vladivostok': {
                            'exemplarCity': '블라디보스토크'
                        },
                        'Yakutsk': {
                            'exemplarCity': '야쿠츠크'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '예카테린부르크'
                        },
                        'Yerevan': {
                            'exemplarCity': '예레반'
                        },
                        'Tokyo': {
                            'exemplarCity': '도쿄'
                        },
                        'Thimphu': {
                            'exemplarCity': '팀부'
                        },
                        'Tehran': {
                            'exemplarCity': '테헤란'
                        },
                        'Tbilisi': {
                            'exemplarCity': '트빌리시'
                        },
                        'Tashkent': {
                            'exemplarCity': '타슈켄트'
                        },
                        'Taipei': {
                            'exemplarCity': '타이베이'
                        },
                        'Singapore': {
                            'exemplarCity': '싱가포르'
                        },
                        'Jerusalem': {
                            'exemplarCity': '예루살렘'
                        },
                        'Ashgabat': {
                            'exemplarCity': '아슈하바트'
                        },
                        'Aqtobe': {
                            'exemplarCity': '악토브'
                        },
                        'Aqtau': {
                            'exemplarCity': '아크타우'
                        },
                        'Anadyr': {
                            'exemplarCity': '아나디리'
                        },
                        'Amman': {
                            'exemplarCity': '암만'
                        },
                        'Almaty': {
                            'exemplarCity': '알마티'
                        },
                        'Aden': {
                            'exemplarCity': '아덴'
                        },
                        'Bahrain': {
                            'exemplarCity': '바레인'
                        },
                        'Baku': {
                            'exemplarCity': '바쿠'
                        },
                        'Bangkok': {
                            'exemplarCity': '방콕'
                        },
                        'Beirut': {
                            'exemplarCity': '베이루트'
                        },
                        'Bishkek': {
                            'exemplarCity': '비슈케크'
                        },
                        'Brunei': {
                            'exemplarCity': '브루나이'
                        },
                        'Calcutta': {
                            'exemplarCity': '콜카타'
                        },
                        'Choibalsan': {
                            'exemplarCity': '초이발산'
                        },
                        'Kabul': {
                            'exemplarCity': '카불'
                        },
                        'Kamchatka': {
                            'exemplarCity': '캄차카'
                        },
                        'Karachi': {
                            'exemplarCity': '카라치'
                        },
                        'Kashgar': {
                            'exemplarCity': '카슈가르'
                        },
                        'Katmandu': {
                            'exemplarCity': '카트만두'
                        },
                        'Khandyga': {
                            'exemplarCity': '한디가'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '크라스노야르스크'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '쿠알라룸푸르'
                        },
                        'Kuching': {
                            'exemplarCity': '쿠칭'
                        },
                        'Kuwait': {
                            'exemplarCity': '쿠웨이트'
                        },
                        'Macau': {
                            'exemplarCity': '마카오'
                        },
                        'Magadan': {
                            'exemplarCity': '마가단'
                        },
                        'Makassar': {
                            'exemplarCity': '마카사르'
                        },
                        'Manila': {
                            'exemplarCity': '마닐라'
                        },
                        'Muscat': {
                            'exemplarCity': '무스카트'
                        },
                        'Nicosia': {
                            'exemplarCity': '니코시아'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '노보쿠즈네츠크'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': '사모아 시간',
                            'standard': '사모아 표준시',
                            'daylight': '사모아 하계 표준시'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '사마라 시간',
                            'standard': '사마라 표준시',
                            'daylight': '사마라 서머 타임'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '사할린 시간',
                            'standard': '사할린 표준시',
                            'daylight': '사할린 하계 표준시'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '로데라 시간'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '레위니옹 시간'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': '키질로르다 시간',
                            'standard': '키질로르다 표준 시간',
                            'daylight': '키질로르다 서머 타임'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '포나페 시간'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '핏케언 시간'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '세인트피에르 미클롱 시간',
                            'standard': '세인트피에르 미클롱 표준시',
                            'daylight': '세인트피에르 미클롱 하계 표준시'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '피닉스 제도 시간'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '필리핀 시간',
                            'standard': '필리핀 표준시',
                            'daylight': '필리핀 하계 표준시'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '페루 시간',
                            'standard': '페루 표준시',
                            'daylight': '페루 하계 표준시'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '파라과이 시간',
                            'standard': '파라과이 표준시',
                            'daylight': '파라과이 하계 표준시'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '파푸아뉴기니 시간'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '팔라우 시간'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '파키스탄 시간',
                            'standard': '파키스탄 표준시',
                            'daylight': '파키스탄 서머 타임'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '옴스크 시간',
                            'standard': '옴스크 표준시',
                            'daylight': '옴스크 하계 표준시'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '노보시비르스크 시간',
                            'standard': '노보시비르스크 표준시',
                            'daylight': '노보시비르스크 하계 표준시'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '북마리아나 제도 표준 시간'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '페르난도 데 노로냐 시간',
                            'standard': '페르난도 데 노로냐 표준시',
                            'daylight': '페르난도 데 노로냐 하계 표준시'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '노퍽섬 시간'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '니우에 시간'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '뉴펀들랜드 시간',
                            'standard': '뉴펀들랜드 표준시',
                            'daylight': '뉴펀들랜드 하계 표준시'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '뉴질랜드 시간',
                            'standard': '뉴질랜드 표준시',
                            'daylight': '뉴질랜드 일광 절약 시간대'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '뉴칼레도니아 시간',
                            'standard': '뉴칼레도니아 표준시',
                            'daylight': '뉴 칼레도니아 하계 표준시'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '미 중부 시간',
                            'standard': '미 중부 표준시',
                            'daylight': '미 중부 하계 표준시'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '미 동부 시간',
                            'standard': '미 동부 표준시',
                            'daylight': '미 동부 하계 표준시'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '미 산지 시간',
                            'standard': '미 산악 표준시',
                            'daylight': '미 산지 하계 표준시'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '미 태평양 시간',
                            'standard': '미 태평양 표준시',
                            'daylight': '미 태평양 하계 표준시'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '아나디리 시간',
                            'standard': '아나디리 표준시',
                            'daylight': '아나디리 서머 타임'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': '악타우 표준 시간',
                            'standard': '악타우 표준 표준시',
                            'daylight': '악타우 서머 타임'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': '악퇴베 표준 시간',
                            'standard': '악퇴베 표준 표준시',
                            'daylight': '악퇴베 서머 타임'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '카보 베르데 시간',
                            'standard': '카보 베르데 표준시',
                            'daylight': '카보 베르데 하계 표준시'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': '케이시 시간'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '차모로 시간'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '채텀 시간',
                            'standard': '채텀 표준시',
                            'daylight': '채텀 일광 절약 시간대'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '칠레 시간',
                            'standard': '칠레 표준시',
                            'daylight': '칠레 하계 표준시'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '중국 시간',
                            'standard': '중국 표준시',
                            'daylight': '중국 하계 표준시'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '초이발산 시간',
                            'standard': '초이발산 표준시',
                            'daylight': '초이발산 하계 표준시'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '크리스마스섬 시간'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '코코스 제도 시간'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '콜롬비아 시간',
                            'standard': '콜롬비아 표준시',
                            'daylight': '콜롬비아 하계 표준시'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '쿡 제도 시간',
                            'standard': '쿡 제도 표준시',
                            'daylight': '쿡 제도 절반 서머 타임'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '쿠바 시간',
                            'standard': '쿠바 표준시',
                            'daylight': '쿠바 하계 표준시'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '데이비스 시간'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '뒤몽뒤르빌 시간'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '동티모르 시간'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '이스터섬 시간',
                            'standard': '이스터섬 표준시',
                            'daylight': '이스터섬 하계 표준시'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '에콰도르 시간'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '중부 유럽 시간',
                            'standard': '중부 유럽 표준시',
                            'daylight': '중부유럽 하계 표준시'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '동부유럽 시간',
                            'standard': '동부유럽 표준시',
                            'daylight': '동부유럽 하계 표준시'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '서유럽 시간',
                            'standard': '서유럽 표준시',
                            'daylight': '서유럽 서머 타임'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '포클랜드 시간',
                            'standard': '포클랜드 제도 표준시',
                            'daylight': '포클랜드 하계 표준시'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '피지 시간',
                            'standard': '피지 표준시',
                            'daylight': '피지 서머 타임'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '프랑스령 가이아나 시간'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '프랑스령 남부 식민지 및 남극 시간'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '갈라파고스 시간'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '토켈라우 시간'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '통가 시간',
                            'standard': '통가 표준시',
                            'daylight': '통가 서머 타임'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '추크 시간'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '투르크메니스탄 시간',
                            'standard': '투르크메니스탄 표준시',
                            'daylight': '투르크메니스탄 하계 표준시'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '투발루 시간'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '우루과이 시간',
                            'standard': '우루과이 표준시',
                            'daylight': '우루과이 하계 표준시'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '우즈베키스탄 시간',
                            'standard': '우즈베키스탄 표준시',
                            'daylight': '우즈베키스탄 하계 표준시'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '바누아투 시간',
                            'standard': '바누아투 표준시',
                            'daylight': '바누아투 서머 타임'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '예카테린부르크 시간',
                            'standard': '예카테린부르크 표준시',
                            'daylight': '예카테린부르크 하계 표준시'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '야쿠츠크 시간',
                            'standard': '야쿠츠크 표준시',
                            'daylight': '야쿠츠크 하계 표준시'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '월리스푸투나 제도 시간'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '웨이크섬 시간'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '보스톡 시간'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '볼고그라드 시간',
                            'standard': '볼고그라드 표준시',
                            'daylight': '볼고그라드 하계 표준시'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '블라디보스토크 시간',
                            'standard': '블라디보스토크 표준시',
                            'daylight': '블라디보스토크 하계 표준시'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '베네수엘라 시간'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '타지키스탄 시간'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '대만 시간',
                            'standard': '대만 표준시',
                            'daylight': '대만 일광 절약 시간대'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '타히티 시간'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '쇼와 시간'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '수리남 시간'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '사우스 조지아 시간'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '솔로몬 제도 시간'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '싱가포르 표준시'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '세이셸 시간'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '괌 표준 시간'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '그린란드 서부 시간',
                            'standard': '그린란드 서부 표준시',
                            'daylight': '그린란드 서부 하계 표준시'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '그린란드 동부 시간',
                            'standard': '그린란드 동부 표준시',
                            'daylight': '그린란드 동부 하계 표준시'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '그리니치 표준시'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '길버트 제도 시간'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '그루지아 시간',
                            'standard': '그루지아 표준시',
                            'daylight': '그루지아 하계 표준시'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '감비에 시간'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '아마존 시간',
                            'standard': '아마존 표준시',
                            'daylight': '아마존 하계 표준시'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': '아크레 시간',
                            'standard': '아크레 표준시',
                            'daylight': '아크레 하계 표준시'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '아프가니스탄 시간'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '중앙아프리카 시간'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '동아프리카 시간'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '남아프리카 시간'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '서아프리카 시간',
                            'standard': '서아프리카 표준시',
                            'daylight': '서아프리카 하계 표준시'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '알래스카 시간',
                            'standard': '알래스카 표준시',
                            'daylight': '알래스카 하계 표준시'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': '알마티 표준 시간',
                            'standard': '알마티 표준 표준시',
                            'daylight': '알마티 서머 타임'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '아라비아 시간',
                            'standard': '아라비아 표준시',
                            'daylight': '아라비아 하계 표준시'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '아르헨티나 시간',
                            'standard': '아르헨티나 표준시',
                            'daylight': '아르헨티나 하계 표준시'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '아르헨티나 서부 시간',
                            'standard': '아르헨티나 서부 표준시',
                            'daylight': '아르헨티나 서부 하계 표준시'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '아르메니아 시간',
                            'standard': '아르메니아 표준시',
                            'daylight': '아르메니아 하계 표준시'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '대서양 시간',
                            'standard': '대서양 표준시',
                            'daylight': '미 대서양 하계 표준시'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '중앙 오스트레일리아 시간',
                            'standard': '오스트레일리아 중부 표준시',
                            'daylight': '오스트레일리아 중부 하계 표준시'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '오스트레일리아 중서부 시간',
                            'standard': '오스트레일리아 중서부 표준시',
                            'daylight': '오스트레일리아 중서부 하계 표준시'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '동부 오스트레일리아 시간',
                            'standard': '오스트레일리아 동부 표준시',
                            'daylight': '오스트레일리아 동부 하계 표준시'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '서부 오스트레일리아 시간',
                            'standard': '오스트레일리아 서부 표준시',
                            'daylight': '오스트레일리아 서부 하계 표준시'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '아제르바이잔 시간',
                            'standard': '아제르바이잔 표준시',
                            'daylight': '아제르바이잔 하계 표준시'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '아조레스 시간',
                            'standard': '아조레스 표준시',
                            'daylight': '아조레스 하계 표준시'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '방글라데시 시간',
                            'standard': '방글라데시 표준시',
                            'daylight': '방글라데시 하계 표준시'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '부탄 시간'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '볼리비아 시간'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '브라질리아 시간',
                            'standard': '브라질리아 표준시',
                            'daylight': '브라질리아 하계 표준시'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '브루나이 왕국 시간'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '걸프만 표준시'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '가이아나 시간'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '하와이 알류샨 시간',
                            'standard': '하와이 알류샨 표준시',
                            'daylight': '하와이 알류샨 하계 표준시'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '홍콩 시간',
                            'standard': '홍콩 표준시',
                            'daylight': '홍콩 하계 표준시'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '호브드 시간',
                            'standard': '호브드 표준시',
                            'daylight': '호브드 하계 표준시'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '인도 표준시'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '인도양 시간'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '인도차이나 시간'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '중부 인도네시아 시간'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '동부 인도네시아 시간'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '서부 인도네시아 시간'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '이란 시간',
                            'standard': '이란 표준시',
                            'daylight': '이란 일광 절약 시간대'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '이르쿠츠크 시간',
                            'standard': '이르쿠츠크 표준시',
                            'daylight': '이르쿠츠크 하계 표준시'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '이스라엘 시간',
                            'standard': '이스라엘 표준시',
                            'daylight': '이스라엘 하계 표준시'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '일본 시간',
                            'standard': '일본 표준시',
                            'daylight': '일본 하계 표준시'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '페트로파블롭스크-캄차츠키 시간',
                            'standard': '페트로파블롭스크-캄차츠키 표준시',
                            'daylight': '페트로파블롭스크-캄차츠키 서머 타임'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '동부 카자흐스탄 시간'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '서부 카자흐스탄 시간'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '대한민국 시간',
                            'standard': '대한민국 표준시',
                            'daylight': '대한민국 하계 표준시'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '코스라에섬 시간'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '크라스노야르스크 시간',
                            'standard': '크라스노야르스크 표준시',
                            'daylight': '크라스노야르스크 하계 표준시'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '키르기스스탄 시간'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': '랑카 표준 시간'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '라인 제도 시간'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '로드 하우 시간',
                            'standard': '로드 하우 표준시',
                            'daylight': '로드 하우 하계 표준시'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': '마카오 시간',
                            'standard': '마카오 표준 시간',
                            'daylight': '마카오 서머 타임'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '매쿼리섬 시간'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '마가단 시간',
                            'standard': '마가단 표준시',
                            'daylight': '마가단 하계 표준시'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '말레이시아 시간'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '몰디브 시간'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '마르키즈 제도 시간'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '마셜 제도 시간'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '모리셔스 시간',
                            'standard': '모리셔스 표준시',
                            'daylight': '모리셔스 하계 표준시'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '모슨 시간'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '울란바토르 시간',
                            'standard': '울란바토르 표준시',
                            'daylight': '울란바토르 하계 표준시'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '모스크바 시간',
                            'standard': '모스크바 표준시',
                            'daylight': '모스크바 하계 표준시'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '미얀마 시간'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '나우루 시간'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '네팔 시간'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0} 시간',
                'regionFormat-type-daylight': '{0} 일광 절약 시간',
                'regionFormat-type-standard': '{0} 표준시',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '8월',
                                '7': '7월',
                                '6': '6월',
                                '5': '5월',
                                '12': '12월',
                                '11': '11월',
                                '10': '10월',
                                '9': '9월',
                                '1': '1월',
                                '2': '2월',
                                '3': '3월',
                                '4': '4월'
                            },
                            'narrow': {
                                '8': '8월',
                                '7': '7월',
                                '6': '6월',
                                '5': '5월',
                                '12': '12월',
                                '11': '11월',
                                '10': '10월',
                                '9': '9월',
                                '1': '1월',
                                '2': '2월',
                                '3': '3월',
                                '4': '4월'
                            },
                            'wide': {
                                '8': '8월',
                                '7': '7월',
                                '6': '6월',
                                '5': '5월',
                                '12': '12월',
                                '11': '11월',
                                '10': '10월',
                                '9': '9월',
                                '1': '1월',
                                '2': '2월',
                                '3': '3월',
                                '4': '4월'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '8월',
                                '7': '7월',
                                '6': '6월',
                                '5': '5월',
                                '12': '12월',
                                '11': '11월',
                                '10': '10월',
                                '9': '9월',
                                '1': '1월',
                                '2': '2월',
                                '3': '3월',
                                '4': '4월'
                            },
                            'narrow': {
                                '8': '8월',
                                '7': '7월',
                                '6': '6월',
                                '5': '5월',
                                '12': '12월',
                                '11': '11월',
                                '10': '10월',
                                '9': '9월',
                                '1': '1월',
                                '2': '2월',
                                '3': '3월',
                                '4': '4월'
                            },
                            'wide': {
                                '8': '8월',
                                '7': '7월',
                                '6': '6월',
                                '5': '5월',
                                '12': '12월',
                                '11': '11월',
                                '10': '10월',
                                '9': '9월',
                                '1': '1월',
                                '2': '2월',
                                '3': '3월',
                                '4': '4월'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '일',
                                'mon': '월',
                                'tue': '화',
                                'wed': '수',
                                'thu': '목',
                                'fri': '금',
                                'sat': '토'
                            },
                            'narrow': {
                                'sun': '일',
                                'mon': '월',
                                'tue': '화',
                                'wed': '수',
                                'thu': '목',
                                'fri': '금',
                                'sat': '토'
                            },
                            'short': {
                                'sun': '일',
                                'mon': '월',
                                'tue': '화',
                                'wed': '수',
                                'thu': '목',
                                'fri': '금',
                                'sat': '토'
                            },
                            'wide': {
                                'sun': '일요일',
                                'mon': '월요일',
                                'tue': '화요일',
                                'wed': '수요일',
                                'thu': '목요일',
                                'fri': '금요일',
                                'sat': '토요일'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '일',
                                'mon': '월',
                                'tue': '화',
                                'wed': '수',
                                'thu': '목',
                                'fri': '금',
                                'sat': '토'
                            },
                            'narrow': {
                                'sun': '일',
                                'mon': '월',
                                'tue': '화',
                                'wed': '수',
                                'thu': '목',
                                'fri': '금',
                                'sat': '토'
                            },
                            'short': {
                                'sun': '일',
                                'mon': '월',
                                'tue': '화',
                                'wed': '수',
                                'thu': '목',
                                'fri': '금',
                                'sat': '토'
                            },
                            'wide': {
                                'sun': '일요일',
                                'mon': '월요일',
                                'tue': '화요일',
                                'wed': '수요일',
                                'thu': '목요일',
                                'fri': '금요일',
                                'sat': '토요일'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '1분기',
                                '2': '2분기',
                                '3': '3분기',
                                '4': '4분기'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '제 1/4분기',
                                '2': '제 2/4분기',
                                '3': '제 3/4분기',
                                '4': '제 4/4분기'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '1분기',
                                '2': '2분기',
                                '3': '3분기',
                                '4': '4분기'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': '제 1/4분기',
                                '2': '제 2/4분기',
                                '3': '제 3/4분기',
                                '4': '제 4/4분기'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '오전',
                                'pm': '오후'
                            },
                            'narrow': {
                                'am': '오전',
                                'pm': '오후'
                            },
                            'wide': {
                                'am': '오전',
                                'pm': '오후'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '오전',
                                'pm': '오후'
                            },
                            'narrow': {
                                'am': '오전',
                                'pm': '오후'
                            },
                            'wide': {
                                'am': '오전',
                                'pm': '오후'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '서력기원전',
                            '0-alt-variant': 'BCE',
                            '1': '서력기원',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '기원전',
                            '0-alt-variant': 'BCE',
                            '1': '서기',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '기원전',
                            '0-alt-variant': 'BCE',
                            '1': '서기',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'y년 M월 d일 EEEE',
                        'long': 'y년 M월 d일',
                        'medium': 'y. M. d.',
                        'short': 'yy. M. d.'
                    },
                    'timeFormats': {
                        'full': 'a h시 m분 s초 zzzz',
                        'long': 'a h시 m분 s초 z',
                        'medium': 'a h:mm:ss',
                        'short': 'a h:mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMd': 'y. M. d.',
                            'yM': 'y. M.',
                            'y': 'y년',
                            'ms': 'mm:ss',
                            'mmss': 'mm:ss',
                            'MMMEEEEd': 'MMM d일 EEEE',
                            'MMMEd': 'MMM d일 (E)',
                            'MMMd': 'MMM d일',
                            'MMM': 'LLL',
                            'GyMMMd': 'G y년 MMM d일',
                            'GyMMMEd': 'G y년 MMM d일 (E)',
                            'GyMMMEEEEd': 'G y년 MMM d일 EEEE',
                            'h': 'a h시',
                            'H': 'H시',
                            'HHmmss': 'HH:mm:ss',
                            'hm': 'a h:mm',
                            'yMEd': 'y. M. d. (E)',
                            'yQQQQ': 'y년 QQQQ',
                            'yQQQ': 'y년 QQQ',
                            'yMMMEEEEd': 'y년 MMM d일 EEEE',
                            'yMMMEd': 'y년 MMM d일 (E)',
                            'yMMMd': 'y년 MMM d일',
                            'yMMM': 'y년 MMM',
                            'yMM': 'y. M.',
                            'yMEEEEd': 'y. M. d. EEEE',
                            'GyMMM': 'G y년 MMM',
                            'd': 'd일',
                            'Ed': 'd일 (E)',
                            'EEEEd': 'd일 EEEE',
                            'Ehm': '(E) a h:mm',
                            'EHm': '(E) HH:mm',
                            'Ehms': '(E) a h:mm:ss',
                            'EHms': '(E) HH:mm:ss',
                            'Gy': 'G y년',
                            'Hm': 'HH:mm',
                            'hms': 'a h:mm:ss',
                            'Hms': 'H시 m분 s초',
                            'M': 'M월',
                            'Md': 'M. d.',
                            'MEd': 'M. d. (E)',
                            'MEEEEd': 'M. d. EEEE'
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
                                'd': 'M월 d일 (E) ~ d일 (E)',
                                'M': 'M월 d일 (E) ~ M월 d일 (E)'
                            },
                            'MMMd': {
                                'd': 'M월 d일 ~ d일',
                                'M': 'M월 d일 ~ M월 d일'
                            },
                            'MMM': {
                                'M': 'MMM ~ MMM'
                            },
                            'MEd': {
                                'd': 'M. d (E) ~ M. d (E)',
                                'M': 'M. d (E) ~ M. d (E)'
                            },
                            'Md': {
                                'd': 'M. d ~ M. d',
                                'M': 'M. d ~ M. d'
                            },
                            'M': {
                                'M': 'M월 ~ M월'
                            },
                            'Hv': {
                                'H': 'HH ~ HH시 v'
                            },
                            'hv': {
                                'a': 'a h시 ~ a h시(v)',
                                'h': 'a h시 ~ h시(v)'
                            },
                            'intervalFormatFallback': '{0} ~ {1}',
                            'd': {
                                'd': 'd일 ~ d일'
                            },
                            'yM': {
                                'M': 'y. M ~ y. M',
                                'y': 'y. M ~ y. M'
                            },
                            'yMd': {
                                'd': 'y. M. d. ~ y. M. d.',
                                'M': 'y. M. d. ~ y. M. d.',
                                'y': 'y. M. d. ~ y. M. d.'
                            },
                            'yMEd': {
                                'd': 'y. M. d. (E) ~ y. M. d. (E)',
                                'M': 'y. M. d. (E) ~ y. M. d. (E)',
                                'y': 'y. M. d. (E) ~ y. M. d. (E)'
                            },
                            'yMMM': {
                                'M': 'y년 M월~M월',
                                'y': 'y년 M월 ~ y년 M월'
                            },
                            'yMMMd': {
                                'd': 'y년 M월 d일~d일',
                                'M': 'y년 M월 d일 ~ M월 d일',
                                'y': 'y년 M월 d일 ~ y년 M월 d일'
                            },
                            'yMMMEd': {
                                'd': 'y년 M월 d일 (E) ~ d일 (E)',
                                'M': 'y년 M월 d일 (E) ~ M월 d일 (E)',
                                'y': 'y년 M월 d일 (E) ~ y년 M월 d일 (E)'
                            },
                            'yMMMEEEEd': {
                                'd': 'y년 M월 d일 EEEE ~ d일 EEEE',
                                'M': 'y년 M월 d일 EEEE ~ M월 d일 EEEE',
                                'y': 'y년 M월 d일 EEEE ~ y년 M월 d일 EEEE'
                            },
                            'yMMMM': {
                                'M': 'y년 MM월 ~ MM월',
                                'y': 'y년 MM월 ~ y년 MM월'
                            },
                            'y': {
                                'y': 'y년 ~ y년'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'Hmv': {
                                'H': 'HH:mm ~ HH:mm v',
                                'm': 'HH:mm ~ HH:mm v'
                            },
                            'hmv': {
                                'a': 'a h:mm ~ a h:mm v',
                                'h': 'a h:mm~h:mm v',
                                'm': 'a h:mm~h:mm v'
                            },
                            'Hm': {
                                'H': 'HH:mm ~ HH:mm',
                                'm': 'HH:mm ~ HH:mm'
                            },
                            'hm': {
                                'a': 'a h:mm ~ a h:mm',
                                'h': 'a h:mm~h:mm',
                                'm': 'a h:mm~h:mm'
                            },
                            'H': {
                                'H': 'HH ~ HH시'
                            },
                            'h': {
                                'a': 'a h시 ~ a h시',
                                'h': 'a h시 ~ h시'
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
