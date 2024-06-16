import fs from 'fs'
import find from 'find'
import path from 'path';
import { simpleProjectRootDir } from '@foo-dog/utils'
const __dirname = path.resolve();

function findPos(strArr, needle) {
  return strArr.indexOf(needle);
}

function findPostedDate(strArr) {
  for (const element of strArr) {
    if (element.match('- var posted =')) {
      return element.replace(/\s- var posted =\s'(\d{4}-\d{2}-\d{2})'/, (match, p1) => p1).trim()
    }
  }
}

function findPostTitle(strArr) {
  for (const element of strArr) {
    if (element.match('- var title = "')) {
      return element.replace("  - var title = \"", '').slice(0, -1)
    }
  }
}

function findPostExcerpt(strArr) {
  for (const element of strArr) {
    if (element.includes('- var excerpt = \'')) {
      return element.replace("  - var excerpt = '", '').slice(0, -1)
    }
  }
}

function readPostStats(filename) {
  let str = fs.readFileSync(filename).toString('utf8');

  let postedDate = findPostedDate(str.split('\n'));
  let title = findPostTitle(str.split('\n'));
  let excerpt = findPostExcerpt(str.split('\n'));

  return { postedDate, title, excerpt }
}

let postPreviewArr = []
let postsData = []

function doThing() {
  find.file(/20.*post\.component\.pug$/, __dirname + '/src/app/blog/posts/',
    function(files) {
      console.log(files.length);
      files.forEach(element => {

        console.log('element=', element);

        let postStats = readPostStats(element);

        console.log('postStats=', postStats);
        console.log('postStats.postedDate=', postStats.postedDate);

        if (!postStats.postedDate) {
          throw new Error(
            "Latest post is missing the posted date. Please fix and re-run")
        }

        let dateSmushed = postStats.postedDate.replaceAll('-', '')

        postsData.push(postStats)
        if (element !== path.join(simpleProjectRootDir(),
          './src/app/blog/posts/2021/09/08/post/post.component.pug')) {
          postPreviewArr.push(
            `postpreview(key='${dateSmushed}' postTitle='${postStats.title}' date='${postStats.postedDate}' link='/${path.relative(
              __dirname + '/src', path.dirname(
                element))}' name='${postStats.title}' excerpt='${postStats.excerpt}')`)
        }
      });

      fs.writeFileSync('posts.json', JSON.stringify(postsData))

      files.forEach(file => {
        // let page = template.replace(REPLACE_KEYWORD, postPreviewArr.reverse().join('\n' + ' '.repeat(replaceLine.indexOf(REPLACE_KEYWORD))))

        if (file !== path.join(simpleProjectRootDir(),
          './src/app/blog/posts/2021/09/08/post/post.component.pug')) {
          let str = fs.readFileSync(file).toString('utf8');
          let excerptPos = findPos(str.split('\n'), "- var excerpt = '")

          let prevNextContent = ''
          for (let index = 0; index < postsData.length; index++) {
            if (postsData[index].postedDate === file.replace(
              /.*\/(\d{4})\/(\d{2})\/(\d{2})\/.*/,
              (match, p1, p2, p3) => p1 + '-' + p2 + '-' + p3).trim()) {
              if (str.includes('prevUrl')) {
                excerptPos += 2;
              } else {
                prevNextContent += `\n  - var prevUrl = '/posts/${postsData[index
                - 1].postedDate.replaceAll('-', '/')}'
  - var prevTitle = '${postsData[index - 1].title}'`
              }

              if (index < postsData.length - 1) {
                if (str.includes('nextUrl')) {
                  excerptPos += 2;
                } else {
                  prevNextContent += `\n  - var nextUrl = '${postsData[index
                  + 1].postedDate}'
  - var nextTitle = '${postsData[index + 1].title}'`
                }
              }
              break;
            }
          }

          let page = str.split('\n').splice(0, excerptPos + 1).join('\n')
            + prevNextContent + '\n' + str.split('\n').splice(
              excerptPos + 1).join('\n')

          fs.writeFileSync(file, page)
        }
      })

    })
}

export default doThing;
