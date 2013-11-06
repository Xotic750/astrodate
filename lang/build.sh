#!/bin/bash
FILES=$(find ../cldr/ -maxdepth 2 -type f -name ca-gregorian.json)
for f in $FILES
do
    DIRNAME=$(dirname $f)
    LANGUAGE=$(jq '.main' $f | jq 'keys[0]')
    GREGORIAN=$(jq ".main | .[$LANGUAGE] | .dates" $f)
    TIMEZONES=$(jq ".main | .[$LANGUAGE] | .dates" $DIRNAME/timeZoneNames.json)
    JOINED=$(echo "null" | jq "$GREGORIAN + $TIMEZONES")
    LANGUAGE=$(echo $LANGUAGE | sed -e 's/\"//g')
    sed -e "s/<%= id %>/$LANGUAGE/g" ./template.tpl | awk -v v="$JOINED" '{gsub("<%= data %>",v); print}' | sed -e "s/'/\\\'/g" -e "s/\"/'/g" | /bin/js-beautify -j -> ./$LANGUAGE.js
done

