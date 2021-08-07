# adamkoch.com
Personal Website

## Backup current version
jq '.version' package.json | xargs -I{} tar -czf {}.gzip dist/*