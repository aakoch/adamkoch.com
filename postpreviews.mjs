import fs from 'fs'
import find from 'find'
import path from 'path';
const __dirname = path.resolve();
const REPLACE_KEYWORD = '### REPLACE ###';

// for f in $(find . -name "index.pug" | sort); do echo $f | sed -E "s/.\/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\/index.pug/\1-\2-\3/" >> posts.tmp; done; tail -n 2 posts.tmp | head -n 1 | xargs -I {} echo "{\"latestPost\": \"{}\"}"

// postpreview(key='20220619' postTitle='Engineering Process' date='2022-06-19T21:44-05:00' link='/posts/2022/06/19' name='Engineering Process' excerpt='Who knew there were so many steps in the engineering process...')

// function findVariablesStart(strArr) {
//   for (let index = 0; index < strArr.length; index++) {
//     const element = strArr[index];
//     if (element.includes("append variables")) {
//       return index
//     }
//   }
// }

// function findVariablesEnd(startIdx, strArr) {
//   for (let index = startIdx + 1; index < strArr.length; index++) {
//     const element = strArr[index];
//     if (!element.includes("- var")) {
//       return index
//     }
//   }
// }

function findPos(strArr, needle) {
  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    if (element.match(needle)) {
      return index
    }
  }
}

function findPostedDate(strArr) {
  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    if (element.match("- var posted =")) {
      return element.replace(/\s- var posted =\s'(\d{4}-\d{2}-\d{2})'/, (match, p1) => p1).trim()
    }
  }
}

function findPostTitle(strArr) {
  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    if (element.match("- var title = \"")) {
      return element.replace("  - var title = \"", '').slice(0, -1)
    }
  }
}

function findPostExcerpt(strArr) {
  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    if (element.includes("- var excerpt = '")) {
      return element.replace("  - var excerpt = '", '').slice(0, -1)
    }
  }
}

function readPostStats(filename) {
  var str = fs.readFileSync(filename).toString('utf8');
  
  // let variablesStart = findVariablesStart(str.split('\n'))
  // console.log('variablesStart=', variablesStart);
  // let variablesEnd = findVariablesEnd(variablesStart, str.split('\n'))
  // console.log('variablesEnd=', variablesEnd);

  let postedDate = findPostedDate(str.split('\n'));
  let title = findPostTitle(str.split('\n'));
  let excerpt = findPostExcerpt(str.split('\n'));

  return { postedDate: postedDate, title: title, excerpt: excerpt }
}

let postPreviewArr = []
let postsData = []

find.file(/20.*post\.component\.pug$/, __dirname + '/src/app/blog/posts/', function(files) {
  console.log(files.length);
  files.forEach(element => {

    console.log('element=', element);
    
    let postStats = readPostStats(element);
    
    console.log('postStats=', postStats);
    console.log('postStats.postedDate=', postStats.postedDate);

    if (!postStats.postedDate) {
      throw new Error("Latest post is missing the posted date. Please fix and re-run")
    }
    
    let dateSmushed = postStats.postedDate.replaceAll('-', '')
    
    postsData.push(postStats)
    if (element !== '/Users/aakoch/projects/angular2/src/app/blog/posts/2021/09/08/post/post.component.pug') {
      postPreviewArr.push(`postpreview(key='${dateSmushed}' postTitle='${postStats.title}' date='${postStats.postedDate}' link='/${path.relative(__dirname + '/src', path.dirname(element))}' name='${postStats.title}' excerpt='${postStats.excerpt}')`)
    }
  });

  // let template = fs.readFileSync('src/components/posts.vue.template').toString('utf8');
  // let replaceLine = template.split('\n').find(line => line.includes(REPLACE_KEYWORD))
  // let page = template.replace(REPLACE_KEYWORD, postPreviewArr.reverse().join('\n' + ' '.repeat(replaceLine.indexOf(REPLACE_KEYWORD))))
  // fs.writeFileSync('src/components/posts.vue', page)
  fs.writeFileSync('posts.json', JSON.stringify(postsData))


  files.forEach(file => {
    // let page = template.replace(REPLACE_KEYWORD, postPreviewArr.reverse().join('\n' + ' '.repeat(replaceLine.indexOf(REPLACE_KEYWORD))))

    if (file !== '/Users/aakoch/projects/angular2/src/app/blog/posts/2021/09/08/post/post.component.pug') {
      let str = fs.readFileSync(file).toString('utf8');
      let excerptPos = findPos(str.split('\n'), "- var excerpt = '")

      let index = 0;
      let prevNextContent = ''
      let prevContentOffset = 0
      for (index = 0; index < postsData.length; index++) {
        if (postsData[index].postedDate == file.replace(/.*\/(\d{4})\/(\d{2})\/(\d{2})\/.*/, (match, p1, p2, p3) => p1 + '-' + p2 + '-' + p3).trim()) {
          if (str.includes('prevUrl')) {
            excerptPos += 2;
          }
          else {
           prevNextContent += `\n  - var prevUrl = '/posts/${postsData[index-1].postedDate.replaceAll('-', '/')}'
  - var prevTitle = '${postsData[index-1].title}'`
          }

          if (index < postsData.length - 1) {
            if (str.includes('nextUrl')) {
              excerptPos += 2;
            }
            else {
            prevNextContent += `\n  - var nextUrl = '${postsData[index+1].postedDate}'
  - var nextTitle = '${postsData[index+1].title}'`
            }
          }
          break;
        }
      }

      let page = str.split('\n').splice(0, excerptPos + 1).join('\n') + prevNextContent + '\n' + str.split('\n').splice(excerptPos + 1).join('\n')

      fs.writeFileSync(file, page)
    }
  })

})
