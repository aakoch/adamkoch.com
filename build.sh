#! /bin/bash
mkdir -p dist
# cp -v _redirects dist/ && cp -v _headers dist/ && cp -Rv src/assets/* dist/ && cp -Rv src/meta/* dist/ && cp -Rvn src/img/* dist/
ng build
rm posts.tmp
for f in $(find src/app/blog/ -name "post.component.pug" | sort); do echo $f | sed -E "s/.*\/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\/post\/post.component.pug/\1-\2-\3/" >> posts.tmp; done; tail -n 1 posts.tmp | head -n 1 | xargs -I {} echo "{\"latestPost\": \"{}\"}" > blog.json
node postpreviews.mjs
parcel build './src/assets/**/index.pug' './src/animations/*.pug' './src/rules/*.pug' --log-level verbose --dist-dir dist/assets
