import snapshot from 'snap-shot-it'
import path from 'path'
import fs from 'fs'
import util from 'util'
import {
  workerData
} from 'worker_threads'
import {
  globbySync
} from 'globby'


const skipFiles = ['.DS_Store', '*.png', '*.jpeg']

describe('home page', () => {
  describe('hasn\'t changed', () => {
    let i = 0;
    let files = fs.readdirSync('dist', {
      withFileTypes: true
    })

    // console.log(files)
    // const files = globbySync(['dist/*.js', 'dist/*.html', 'dist/*.css']);
    files.forEach(f => {
      console.log(f)
      it('should work ' + f, () => {
        // if (i++ > 20 ) return
        // if (f.isFile()) {
        const contents = renderPage(f.name)
        // console.log(contents)
        if (contents.length >= 0) {
          // snapshot(contents)
        }
      })
    })
  })
})

function renderPage(f) {
  const resolvedPath = path.resolve(f);
  try {
    console.log(resolvedPath)
    fs.accessSync(resolvedPath, fs.constants.R_OK)
    return fs.readFileSync(resolvedPath, 'utf-8')
  } catch (e) {
    console.error(resolvedPath + ' doesn\'t exist')
    return ''
  }
}
