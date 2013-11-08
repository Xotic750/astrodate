#!/bin/bash
FILES=$(find ../cldr/ -maxdepth 2 -type f -name ca-gregorian.json)
for f in $FILES
do
    DIRNAME=$(dirname $f)
    LANGUAGE=$(jq '.main | keys[0]' $f)
    GREGORIAN=$(jq --compact-output ".main | .[$LANGUAGE] | .dates" $f)
    TIMEZONES=$(jq --compact-output ".main | .[$LANGUAGE] | .dates" $DIRNAME/timeZoneNames.json)
    LOCALEDISPLAY=$(jq --compact-output ".main | .[$LANGUAGE] | .localeDisplayNames" $DIRNAME/localeDisplayNames.json)
    JOINED=$(jq --null-input "$GREGORIAN + $TIMEZONES + $LOCALEDISPLAY")
    VERSION1=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $f | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION2=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/timeZoneNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION3=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/localeDisplayNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    LANGUAGE=$(echo $LANGUAGE | sed -e 's/\"//g')
    sed -e "s/<%= id %>/$LANGUAGE/g" -e "s/<%= version1 %>/$VERSION1/g" -e "s/<%= version2 %>/$VERSION2/g" -e "s/<%= version3 %>/$VERSION3/g" ./template.tpl | awk -v v="$JOINED" '{gsub("<%= data %>",v); print}' > ./$LANGUAGE.js
    fixjsstyle ./$LANGUAGE.js
    /bin/js-beautify -j ./$LANGUAGE.js | uni2ascii -a U | sponge ./$LANGUAGE.js > /dev/null
done

