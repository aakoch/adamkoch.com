[![Netlify Status](https://api.netlify.com/api/v1/badges/43f18666-4027-4030-92e3-e2b99449b68e/deploy-status)](https://app.netlify.com/sites/adamkoch/deploys)

# adamkoch.com
Personal Website

## Install
npm i

Or, if you're on an ARM Mac machine:
arch -x86_64 npm i

## Run Locally
npm run watch

## Build
npm run build

Or, if you're on an ARM Mac machine:
arch -x86_64 npm run build

## Clean
npm run clean

## Package
npm version [major|minor|patch]

## Serve
--serve dist--
arch -x86_64 npx serve dist


## Automation

I'm not sure what I'm doing here yet:
```
for f in $(find src/posts/. -name "index.pug" | sort); do filename=$(echo $f | sed -E "s/.\/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\/index.pug/\1_\2_\3_index.js/"); grep -A 6 "append variables" $f | tail -n +2 | sed "s/- var/let/" > $filename ; done
```
