#!/bin/zsh

# path to output file
#jq -r '.[] | (.["wp:post_date_gmt"] | sub(" "; "T") + "Z" | fromdate | strflocaltime("%Y/%m/%d/")) + .["wp:post_name"] + "/index.html"' src/data/professional_publish.json
# or shorter:

# - var title = 
# - var path = 
# "tidyCategory": "Professional",
#   "tidyTags": [
#     "software"
#   ]

# cat > out.tmp <<EOF
# - var title = ""
# - var category = ""
# - var tags = ""
# EOF
  
#jq -r '.[] | (.link | sub("https://www.adamkoch.com/"; "")) + .["content:encoded"]' src/data/professional_publish.json 

#jq -r '.[] | "path=" + (.link | sub("https://www.adamkoch.com/"; "")) + "\n- var tags=\"" + (.tidyTags | join(",")) + "\""' src/data/professional_publish.json 


#jq -r '.[] | "\n- var id=" + .["wp:post_id"] + "\n- var path=" + (.link | sub("https://www.adamkoch.com/"; "")) + (if (.tidyTags | length > 0) then ("\n- var tags=\"" + (.tidyTags | join(",")) + "\"") else "" end) + "\n- var publishedDate=\"" + (.["wp:post_date_gmt"] | sub(" "; "T") + "Z") + "\"\n"' src/data/professional_publish.json 

# not working:
# perlCmd="/usr/bin/perl -pe 's/;/\\\n/g'"
# jq -r '.[] | (.link | sub("https://www.adamkoch.com/"; "")) + "<>- var id=" + .["wp:post_id"] + ";- var path=" + (.link | sub("https://www.adamkoch.com/"; "")) + (if (.tidyTags | length > 0) then ("- var tags=\"" + (.tidyTags | join(",")) + "\"") else "" end) + "- var publishedDate=\"" + (.["wp:post_date_gmt"] | sub(" "; "T") + "Z") + "\";" + (.["content:encoded"] | tojson)' src/data/professional_publish.json | head -1 | gawk -F"<>" '{system("mkdir -p \"src/site/blogposts/" $1 "\"")} {printf $2"\n" > "src/site/blogposts/"$1"index.html"} {system($perlCmd "src/site/blogposts/" $1 "index.html")}'
#> "src/site/blogposts/"$1"index.html2"

# works but file is all on one line
# jq -r '.[] | (.link | sub("https://www.adamkoch.com/"; "")) + "<>- var id=" + .["wp:post_id"] + ";- var path=" + (.link | sub("https://www.adamkoch.com/"; "")) + (if (.tidyTags | length > 0) then ("- var tags=\"" + (.tidyTags | join(",")) + "\"") else "" end) + "- var publishedDate=\"" + (.["wp:post_date_gmt"] | sub(" "; "T") + "Z") + "\";" + (.["content:encoded"] | tojson)' src/data/professional_publish.json | head -1 | gawk -F"<>" '{system("mkdir -p \"src/site/blogposts/" $1 "\"")} {printf $2"\n" > "src/site/blogposts/"$1"index.html"}'


#jq -r '.[] | (.link | sub("https://www.adamkoch.com/"; "")) + "\n- var id=" + .["wp:post_id"] + "\n- var path=" + (.link | sub("https://www.adamkoch.com/"; "")) + (if (.tidyTags | length > 0) then ("- var tags=\"" + (.tidyTags | join(",")) + "\"") else "" end) + "\n- var publishedDate=\"" + (.["wp:post_date_gmt"] | sub(" "; "T") + "Z") + "\"\n" + (.["content:encoded"] | tojson)' src/data/professional_publish.json | gawk -F"\n" '{printf $1}'
#| gawk -F"<>" '{system("mkdir -p \"src/site/blogposts/" $1 "\"")} {printf $2"\n" > "src/site/blogposts/"$1"index.html"}'

#cd src/site/blogposts
#for f in $(ls -R **/index.html); perl -pe 's/;/\n/g' $f > $f.2

# gawk -F"<>" '{printf $1"\n"}'
# gawk '{system("mkdir \"" $1 "\"")}' RS='::::::' test.txt

# put to JSON first
jq -r '.[] | (.link | sub("https://www.adamkoch.com/"; "")) + "<>" + (. | tojson)' src/data/professional_publish.json | gawk -F"<>" '{system("mkdir -p \"src/site/blogposts/" $1 "\"")} {print $2"\n" > "src/site/blogposts/"$1"index.json"}'

cd src/site/blogposts
for f in $(ls -R **/index.json)
do
jq -r '"- var id=" + .["wp:post_id"] + "\n- var path=" + (.link | sub("https://www.adamkoch.com/"; "")) + (if (.tidyTags | length > 0) then ("\n- var tags=\"" + (.tidyTags | join(",")) + "\"") else "" end) + "\n- var publishedDate=\"" + (.["wp:post_date_gmt"] | sub(" "; "T") + "Z") + "\"\n" + (.["content:encoded"])' $f > $f.html
egrep -v "^- var.*" $f.html | html2pug -f > $f.pug
rm $f.html
done

find . -print0 | rename -0 -X -s .json ""