#!/bin/bash
curl http://unicode.org/Public/cldr/24/json.zip -o json.zip
unzip -o json.zip -d cldr
rm json.zip
FILES=$(find cldr/ -maxdepth 2 -type f -name ca-gregorian.json)
for f in $FILES
do
    DIRNAME=$(dirname $f)
    LANGUAGE=$(jq '.main | keys[0]' $f)
    GREGORIAN=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $f | jq --compact-output ".main | .[$LANGUAGE] | .dates")
    TIMEZONES=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME/timeZoneNames.json | jq --compact-output ".main | .[$LANGUAGE] | .dates")
    LOCALEDISPLAY=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME/localeDisplayNames.json | jq --compact-output ".main | .[$LANGUAGE] | .localeDisplayNames")
    JOINED=$(jq --null-input "$GREGORIAN + $TIMEZONES + $LOCALEDISPLAY")
    VERSION1=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $f | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION2=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/timeZoneNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION3=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/localeDisplayNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    LANGUAGE=$(echo $LANGUAGE | sed -e 's/\"//g')
    sed -e "s/<%= id %>/$LANGUAGE/g" -e "s/<%= version1 %>/$VERSION1/g" -e "s/<%= version2 %>/$VERSION2/g" -e "s/<%= version3 %>/$VERSION3/g" ./template.tpl | awk -v v="$JOINED" '{gsub("<%= data %>",v); print}' > ./$LANGUAGE.js
    fixjsstyle ./$LANGUAGE.js
    /bin/js-beautify -j ./$LANGUAGE.js | sed -e 's/<%= doubleQuote %>/"/g' -e "s/<%= singleQuote %>/\\\'/g" | uni2ascii -a U | sponge ./$LANGUAGE.js > /dev/null
done

