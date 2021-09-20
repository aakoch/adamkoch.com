
import fs from 'fs/promises'
import path from 'path';
const __dirname = path.resolve();

const cssFilenameRegex = /index\.([a-zA-Z0-9])+\.css$/
const cssFilename = await findCssFilename()
console.log('cssFilename=', cssFilename)

const regex = /(fa-(solid|brands|regular)-([49]00)\.[a-zA-Z0-9]+\.(svg|eot|ttf|woff2|woff))/g

async function findCssFilename() {
  const files = await fs.readdir('dist', {
    withFileTypes: true
  })
  return files
    .filter(f => {
      return f.isFile()
    })
    .filter(f => {
      return cssFilenameRegex.test(f.name)
    })
    .map(f => f.name)
}

const resolvedCssFilename = path.resolve('dist' + '/' + cssFilename[0])
fs.readFile(resolvedCssFilename, 'utf-8')
  .then(text => {
    const matches = text.matchAll(regex)
    console.log(matches)
    Array.from(matches).forEach(match => {
      const srcFile = `src/fonts/fa-${match[2]}-${match[3]}.${match[4]}`
      const destFile = `dist/${match[1]}`
      console.log(`copying ${srcFile} to ${destFile}`)
      fs.copyFile(srcFile, destFile);
    })
  });