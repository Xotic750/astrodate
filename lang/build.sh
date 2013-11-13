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
    UNITS=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME/units.json | jq --compact-output ".main | .[$LANGUAGE] | .units")
    LOCALEDISPLAY=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME/localeDisplayNames.json | jq --compact-output ".main | .[$LANGUAGE] | .localeDisplayNames")
    JOINED=$(jq --null-input "$GREGORIAN + $TIMEZONES + $LOCALEDISPLAY + $UNITS")
    VERSION1=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $f | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION2=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/timeZoneNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION3=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/localeDisplayNames.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    VERSION4=$(jq ".main | .[$LANGUAGE] | .identity.version._cldrVersion" $DIRNAME/units.json | sed -e 's/\"//g')'r'$(jq ".main | .[$LANGUAGE] | .identity.version._number" $f | sed -r 's/.+ ([0-9]+) .+/\1/')
    LANGUAGE=$(echo $LANGUAGE | sed -e 's/\"//g')
    sed -e "s/<%= id %>/$LANGUAGE/g" -e "s/<%= version1 %>/$VERSION1/g" -e "s/<%= version2 %>/$VERSION2/g" -e "s/<%= version3 %>/$VERSION3/g" -e "s/<%= version4 %>/$VERSION4/g" ./template.tpl | awk -v v="$JOINED" '{gsub("<%= data %>",v); print}' > ./$LANGUAGE.js
    fixjsstyle ./$LANGUAGE.js
    /bin/js-beautify -j ./$LANGUAGE.js | sed -e 's/<%= doubleQuote %>/"/g' -e "s/<%= singleQuote %>/\\\'/g" | uni2ascii -a U | sponge ./$LANGUAGE.js > /dev/null
done

DIRNAME="cldr/supplemental/"
FILES="likelySubtags.json timeData.json weekData.json"
DATA=""
for f in $FILES
do
    MAIN=$(echo $f | sed -e 's/\.json//g')
    CURRENTFILE=$(sed -e 's/\\\"/<%= doubleQuote %>/g' -e "s/'/<%= singleQuote %>/g" $DIRNAME$f | jq --compact-output ".supplemental.$MAIN")
    CURRENTFILE="{\"$MAIN\":$CURRENTFILE}"
    if [ "$DATA" = "" ]
    then
        DATA=$CURRENTFILE
    else
        DATA=$(jq --null-input "$DATA + $CURRENTFILE")
    fi
done

cat ./stemplate.tpl | awk -v v="$DATA" '{gsub("<%= data %>",v); print}' > ./supplemental.js
fixjsstyle ./supplemental.js
/bin/js-beautify -j ./supplemental.js | sed -e 's/<%= doubleQuote %>/"/g' -e "s/<%= singleQuote %>/\\\'/g" | uni2ascii -a U | sponge ./supplemental.js > /dev/null
