#! /bin/bash
mkdir -p dist && cp -v _redirects dist/ && cp -Rv src/assets/* dist/ && cp -Rv src/meta/* dist/
for f in $(find src/posts/ -name "index.pug" | sort); do echo $f | sed -E "s/.\/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\/index.pug/\1-\2-\3/" >> posts.tmp; done; tail -n 2 posts.tmp | head -n 1 | xargs -I {} echo "{\"latestPost\": \"{}\"}" > blog.json
node postpreviews.mjs
parcel build ./src/index.pug './src/**/index.pug' ./src/404.pug --log-level verbose && node scripts/copy_font_files.mjs