#! /bin/bash
mkdir -p dist

for f in $(find src/app/blog/ -name "post.component.pug" | sort); do
  echo $f | sed -E "s/.*\/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\/post\/post.component.pug/\1-\2-\3/" >> posts.tmp;
done;
tail -n 1 posts.tmp | head -n 1 | xargs -I {} echo "{\"latestPost\": \"{}\"}" > blog.json

ng build

if [ $? -eq 0 ]; then
  echo "Angular build successful"
else
  echo "Angular build failed"
  exit 1
fi

rm posts.tmp
node postpreviews.mjs

if [ $? -eq 0 ]; then
  echo "Post previews generated"
else
  echo "Post previews failed"
  exit 1
fi

npx parcel build --no-cache './src/assets/**/index.pug' './src/animations/*.pug' './src/rules/*.pug' --log-level verbose --dist-dir dist/assets --public-url "/assets"

if [ $? -eq 0 ]; then
  echo "Parcel built"
else
  echo "Parcel failed"
  exit 1
fi

echo "Build finished"
