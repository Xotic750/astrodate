#!/bin/bash
FILES=$(find ../cldr/ -maxdepth 2 -type f -name ca-gregorian.json)
for f in $FILES
do
    DIRNAME=$(dirname $f)
    LANGUAGE=$(jq '.main' $f | jq 'keys[0]')
    GREGORIAN=$(jq ".main | .[$LANGUAGE] | .dates" $f)
    TIMEZONES=$(jq ".main | .[$LANGUAGE] | .dates" $DIRNAME/timeZoneNames.json)
    JOINED=$(echo "null" | jq "$GREGORIAN + $TIMEZONES")
    VERSION1=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $f | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION2=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/timeZoneNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    LANGUAGE=$(echo $LANGUAGE | sed -e 's/\"//g')
    sed -e "s/<%= id %>/$LANGUAGE/g" -e "s/<%= version1 %>/$VERSION1/g" -e "s/<%= version2 %>/$VERSION2/g" ./template.tpl | awk -v v="$JOINED" '{gsub("<%= data %>",v); print}' | sed -e "s/'/\\\'/g" -e "s/\"/'/g" | /bin/js-beautify -j -> ./$LANGUAGE.js
done

