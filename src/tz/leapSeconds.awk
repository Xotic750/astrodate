#!/bin/awk -f
/^ *$/ { next }
/^#/ { next }

{
    NTP_timestamp = $1
    TAI_minus_UTC = $2
    hash_mark = $3
    one = $4
    month = $5
    year = $6
    if (old_TAI_minus_UTC) {
        if (old_TAI_minus_UTC < TAI_minus_UTC) {
            sign = "1"
        } else {
            sign = "-1"
        }

        if (month == "Jan") {
            year--;
            month = "Dec";
            day = 31
        } else if (month == "Jul") {
            month = "Jun";
            day = 30
        }

        printf "{ \"%s\": { \"%s\": { \"%s\": \"%s\" } } }\n", year, month, day, sign
    }

    old_TAI_minus_UTC = TAI_minus_UTC
}
