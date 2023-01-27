
import fs from 'fs/promises'
import path from 'path';
const __dirname = path.resolve();

// const cssFilenameRegex = /styles\.([a-zA-Z0-9])+\.css$/
const regex = /(fa-(solid|brands|regular)-([49]00)\.[a-zA-Z0-9]+\.(svg|eot|ttf|woff2|woff))/g
const fontFilenames = await findFontFilename()
console.log('foundFilenames=', fontFilenames)

async function findFontFilename() {
  const files = await fs.readdir('dist/angular2', {
    withFileTypes: true
  })
  return files
    .filter(f => {
      return f.isFile()
    })
    .filter(f => {
      return regex.test(f.name)
    })
    .map(f => f.name)
}

fontFilenames.forEach((filename) => {
  const matches = filename.matchAll(regex)
  Array.from(matches).forEach(match => {
    console.log("match=", match)
    const srcFile = `src/fonts/fa-${match[2]}-${match[3]}-subset.${match[4]}`
    const destFile = `dist/angular2/${match[1]}`
    console.log(`copying ${srcFile} to ${destFile}`)
    fs.copyFile(srcFile, destFile)
      .catch(reason => console.error('Error copying file: ' + reason))
  })
});
// const resolvedCssFilename = path.resolve('dist/angular2/' + fontFilenames[0])
// fs.readFile(resolvedCssFilename, 'utf-8')
//   .then(text => {
//     const matches = text.matchAll(regex)
//     console.log("matches=", matches.next())
//     Array.from(matches).forEach(match => {
//       const srcFile = `src/fonts/fa-${match[2]}-${match[3]}.${match[4]}`
//       const destFile = `dist/${match[1]}`
//       console.log(`copying ${srcFile} to ${destFile}`)
    // })
//   });