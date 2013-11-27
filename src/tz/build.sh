#!/bin/bash
mkdir -p tz
curl ftp://ftp.iana.org/tz/tzdata-latest.tar.gz -o tz/tzdata-latest.tar.gz
tar -xvzf tz/tzdata-latest.tar.gz -C tz
rm tz/tzdata-latest.tar.gz

VERSION=$(fgrep -e 'Updated through IERS Bulletin' tz/leap-seconds.list | sed -r 's/^.+ C([0-9]+).*$/\1/')
awk -f leapSeconds.awk tz/leap-seconds.list > leapSeconds.json

DATA=""
while read LINE
do
    if [ "$DATA" = "" ]
    then
        DATA=$(jq --null-input "$LINE")
    else
        YEAR=$(echo $LINE | jq 'keys[0]')
        PREVIOUS=$(echo $DATA | jq ".[$YEAR]")
        if [ "$PREVIOUS" = "null" ]
        then
            DATA=$(jq --null-input "$DATA + $LINE")
        else
            RECORD=$(echo $LINE | jq ".[$YEAR]")
            JOINED=$(echo $DATA | jq ".[$YEAR] + $RECORD")
            DATA=$(jq --null-input "$DATA + {$YEAR: $JOINED}")
        fi
    fi
done <leapSeconds.json
DATA=$(echo $DATA | sed -e 's/Jan/1/g' -e 's/Feb/2/g' -e 's/Mar/3/g' -e 's/Apr/4/g' -e 's/May/5/g' -e 's/Jun/6/g' -e 's/Jul/7/g' -e 's/Aug/8/g' -e 's/Sep/9/g' -e 's/Oct/10/g' -e 's/Nov/11/g' -e 's/Dec/12/g')
echo $DATA > leapSeconds.json
/bin/js-beautify -j ./leapSeconds.json | sponge ./leapSeconds.json > /dev/null
sed -e "s/<%= version %>/$VERSION/g" ./template.tpl | awk -v v="$DATA" '{gsub("<%= data %>",v); print}' > ./leapSeconds.js
fixjsstyle ./leapSeconds.js
/bin/js-beautify -j ./leapSeconds.js | sponge ./leapSeconds.js > /dev/null
