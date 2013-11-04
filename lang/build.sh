#!/bin/bash
FILES=$(find ../cldr/ -maxdepth 2 -type f -name ca-gregorian.json)
for f in $FILES
do
    Y=$(cat $f| jshon -e main -k)
    X=$(cat $f | jshon -e main -e $Y -e dates)
    Z=$Y
    sed -e "s/<%= id %>/$Y/g" ./template.tpl | awk -v v="$X" '{gsub("<%= data %>",v); print}' | sed -e "s/'/\\\'/g" -e "s/\"/'/g" | /bin/js-beautify -j - > ./$Y.js
done

