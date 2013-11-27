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
    TIMEZONES=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME/timeZoneNames.json | jq --compact-output ".main | .[$LANGUAGE] | .dates | del(.timeZoneNames.zone) | del(.timeZoneNames.metazone)")
    JOINED="{\"dates\":$(jq --compact-output --null-input "$GREGORIAN + $TIMEZONES")}"
    VERSION1=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $f | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION2=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/timeZoneNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $DIRNAME/timeZoneNames.json | sed -r 's/.+ ([0-9]+) .+/\1/')
    LANGUAGE=$(echo $LANGUAGE | sed -e 's/\"//g')
    echo $LANGUAGE
    sed -e "s/<%= id %>/$LANGUAGE/g" -e "s/<%= version1 %>/$VERSION1/g" -e "s/<%= version2 %>/$VERSION2/g" -e "s/<%= version3 %>/$VERSION3/g" -e "s/<%= version4 %>/$VERSION4/g" ./template.tpl | awk -v v="$JOINED" '{gsub("<%= data %>",v); print}' > ./$LANGUAGE.js
    fixjsstyle ./$LANGUAGE.js
    /bin/js-beautify -j ./$LANGUAGE.js | sed -e 's/<%= doubleQuote %>/"/g' -e "s/<%= singleQuote %>/\\\'/g" | uni2ascii -a U | sponge ./$LANGUAGE.js > /dev/null
done

DIRNAME="cldr/supplemental/"
FILES="likelySubtags.json timeData.json weekData.json"
DATA=""
COUNT=1
for f in $FILES
do
    MAIN=$(echo $f | sed -e 's/\.json//g')
    VERSION[COUNT]=$(jq ".supplemental.version._cldrVersion" $DIRNAME$f | sed -e 's/\"//g')'r'$(jq ".supplemental.version._number" $DIRNAME$f | sed -r 's/.+ ([0-9]+) .+/\1/')
    COUNT=$[COUNT+1]
    CURRENTFILE=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME$f | jq --compact-output ".supplemental.$MAIN")
    CURRENTFILE="{\"$MAIN\":$CURRENTFILE}"
    if [ "$DATA" = "" ]
    then
        DATA=$CURRENTFILE
    else
        DATA=$(jq --null-input "$DATA + $CURRENTFILE")
    fi
done

cat ./stemplate.tpl | sed -e "s/<%= version1 %>/$VERSION[1]/g" -e "s/<%= version2 %>/$VERSION[2]/g" -e "s/<%= version3 %>/$VERSION[3]/g" | awk -v v="$DATA" '{gsub("<%= data %>",v); print}' > ./supplemental.js
fixjsstyle ./supplemental.js
/bin/js-beautify -j ./supplemental.js | sed -e 's/<%= doubleQuote %>/"/g' -e "s/<%= singleQuote %>/\\\'/g" | uni2ascii -a U | sponge ./supplemental.js > /dev/null
