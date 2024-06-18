const { debug } = require('util');

const shell = require('shelljs')
const pug = require('pug')
const fs = require('fs')
const { basename, dirname, resolve } = require('path')
const readLastLines = require('read-last-lines')
const dirTree = require('directory-tree')
const path = require('path')
const find = require('find')

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name)
    if (d.isDirectory()) {
      yield* await walk(entry)
    } else if (d.isFile()) {
      yield entry
    }
  }
}

async function renderBlogPosts() {
  for await (const p of await walk('src/app/blog/')) {
    if (p.includes('post.component.pug')) {
      debug('in the future I will render: ' + p)
    }
  }
}

function findPos(strArr, needle) {
  return strArr.indexOf(needle)
}

function findPostedDate(strArr) {
  for (const element of strArr) {
    if (element.match('- var posted =')) {
      return element.replace(/\s- var posted =\s'(\d{4}-\d{2}-\d{2})'/,
        (match, p1) => p1).trim()
    }
  }
}

function findPostTitle(strArr) {
  for (const element of strArr) {
    if (element.match('- var title = "')) {
      return element.replace('  - var title = "', '').slice(0, -1)
    }
  }
}

function findPostExcerpt(strArr) {
  for (const element of strArr) {
    if (element.includes('- var excerpt = \'')) {
      return element.replace('  - var excerpt = \'', '').slice(0, -1)
    }
  }
}

function readPostStats(filename) {
  let str = fs.readFileSync(filename).toString('utf8')

  let postedDate = findPostedDate(str.split('\n'))
  let title = findPostTitle(str.split('\n'))
  let excerpt = findPostExcerpt(str.split('\n'))

  return { postedDate, title, excerpt }
}

let postPreviewArr = []
let postsData = []

function postpreviews() {
  find.file(/20.*post\.component\.pug$/, __dirname + '/src/app/blog/posts/',
    function(files) {
      debug(files.length)
      files.forEach(element => {

        debug('element=', element)

        let postStats = readPostStats(element)

        debug('postStats=', postStats)
        debug('postStats.postedDate=', postStats.postedDate)

        if (!postStats.postedDate) {
          throw new Error(
            'Latest post is missing the posted date. Please fix and re-run')
        }

        let dateSmushed = postStats.postedDate.replaceAll('-', '')

        postsData.push(postStats)
        import('@foo-dog/utils/dist/index.js').then(utils => {
          if (element !== path.join(utils.simpleProjectRootDir(),
            './src/app/blog/posts/2021/09/08/post/post.component.pug')) {
            postPreviewArr.push(
              `postpreview(key='${dateSmushed}' postTitle='${postStats.title}' date='${postStats.postedDate}' link='/${path.relative(
                __dirname + '/src', path.dirname(
                  element))}' name='${postStats.title}' excerpt='${postStats.excerpt}')`)
          }

          fs.writeFileSync('posts.json', JSON.stringify(postsData))

          files.forEach(file => {
            // let page = template.replace(REPLACE_KEYWORD, postPreviewArr.reverse().join('\n' + ' '.repeat(replaceLine.indexOf(REPLACE_KEYWORD))))

            if (file !== path.join(utils.simpleProjectRootDir(),
              './src/app/blog/posts/2021/09/08/post/post.component.pug')) {
              let str = fs.readFileSync(file).toString('utf8')
              let excerptPos = findPos(str.split('\n'), '- var excerpt = \'')

              let prevNextContent = ''
              for (let index = 0; index < postsData.length; index++) {
                if (postsData[index].postedDate === file.replace(
                  /.*\/(\d{4})\/(\d{2})\/(\d{2})\/.*/,
                  (match, p1, p2, p3) => p1 + '-' + p2 + '-' + p3).trim()) {
                  if (str.includes('prevUrl')) {
                    excerptPos += 2
                  } else {
                    prevNextContent += `\n  - var prevUrl = '/posts/${postsData[index
                    - 1].postedDate.replaceAll('-', '/')}'
  - var prevTitle = '${postsData[index - 1].title}'`
                  }

                  if (index < postsData.length - 1) {
                    if (str.includes('nextUrl')) {
                      excerptPos += 2
                    } else {
                      prevNextContent += `\n  - var nextUrl = '${postsData[index
                      + 1].postedDate}'
  - var nextTitle = '${postsData[index + 1].title}'`
                    }
                  }
                  break
                }
              }

              let page = str.split('\n')
                  .splice(0, excerptPos + 1)
                  .join('\n')
                + prevNextContent + '\n' + str.split('\n').splice(
                  excerptPos + 1).join('\n')

              fs.writeFileSync(file, page)
            }
          })

        })
      })

    })
}

renderBlogPosts().then(() => console.log('done'))

async function createPostPreview() {

  let paths = []
  for await (const p of await walk('src/app/blog/')) {
    if (p.includes('post.component.pug')) {
      paths.push(p)
    }
  }

  let content = paths.map((p) => {
      let regex = /.*\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})\/.*/
      let regExpExecArray = regex.exec(p)
      return regExpExecArray
    }
  ).filter((regExpExecArray) => regExpExecArray !== null)
    .map((regExpExecArray) => {
      return regExpExecArray.groups.year + '-' + regExpExecArray.groups.month
        + '-' + regExpExecArray.groups.day
    })
    .sort()
    .slice(-1)[0]

  fs.writeFile('./blog.json', `{"latestPost": "${content.trim()}"}`, (e) => {
    postpreviews()
    shell.exec(
      `npx parcel build --no-cache './src/assets/**/index.pug' './src/animations/*.pug' './src/rules/*.pug' --log-level verbose --dist-dir dist/assets --public-url "/assets"`)
  })
}

createPostPreview()

async function renderFile(filename) {
  debug(`Processing ${filename}...`)
  const base = basename(filename, '.pug')
  const dir = dirname(filename)
  fs.mkdirSync(`./dist/${dir}/`, { recursive: true })
  fs.writeFileSync(`./dist/${dir}/${base}.html`,
    pug.renderFile(`./src/${dir}/${base}.pug`))
}

for (const filename of
  ['char160test.pug', '2009/07/25/white-space-and-character-160/index.pug']) {
  renderFile(filename)
}

shell.exec('ng build')
