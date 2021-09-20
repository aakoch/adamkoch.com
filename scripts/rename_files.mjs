
// this has been moved into font.mjs
import fs from 'fs/promises'

const regex = /([\w-]+)\.\w+\.(svg|eot|ttf|woff2|woff)$/;

(async function () {

  const files = await fs.readdir('.', {
    withFileTypes: true
  })
  files
    .filter(f => {
      return f.isFile()
    })
    .filter(f => {
      console.log("f.name=", f.name);
      console.log("regex.test(f.name)=", regex.test(f.name));
      return regex.test(f.name)
    })
    .forEach(f => {
      const match = f.name.match(regex)
      console.log("f.name", f.name);
      console.log('match', match)
      console.log('renaming ' + f.name + ' to ' + match[1] + '.' + match[2])
      fs.rename(f.name, match[1] + '.' + match[2])
        .catch(reason => error('Error copying file: ' + reason))
    })

})()