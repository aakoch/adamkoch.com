const lex = require("pug-lexer")
const hljs = require("highlight.js/lib/common")

module.exports = {
  filters: {
    "pug-code": function (text, options) {
      let l = lex(text);
      let s = []
      let c = []
      let readingDot = false;

      l.forEach(function (lexi) {
        let st;

        console.log('readingDot', readingDot);
        if (readingDot && lexi.type != 'eos') {
          console.log('pushing dot', lexi)
          c.push(lexi.val)
        } else {
          readingDot = false;
          if (c.length > 0) {
            let h = c.join('')
            console.log('h', h)
            for (let j = 0; j < 10; j++) console.log("**************")
            console.log('s', s)
            let style = createElement('style')
            style.innerHTML = h
            s.push(hljs.highlightElement(style))
            c.length = 0
          }

          let indent = 0
          switch (lexi.type) {
            case 'tag':
              indent += 2
              st = '<span class="hljs-selector-tag">' + lexi.val + '</span>'
              break;
            case 'dot':
              console.log('found dot');
              indent += 2
              st = '.\n'
              readingDot = true;
              break;
          }


          // case 'start-attributes':
          //   st = '('
          //   break;
          // case 'attribute':
          //   st = '<span class="hljs-attribute">' + lexi.name + '=' + lexi.val + '</span>'
          //   break
          // case 'end-attributes':
          //   st = ')'
          //   break;
          // case 'start-pipeless-text':
          //   st = '<span class="hljs-string">' + ' '.repeat(indent)
          //   break;
          // case 'text':
          //   st = ' '.repeat(indent) + lexi.val
          //   break;
          // case 'end-pipeless-text':
          //   st = "</span>"
          //   break;
          // case 'eos':
          //   indent -= 2
          //   break;
          //   default:
          //     // console.log(lexi)
          //     st = hljs.highlightElement(lexi.val)
          // }
          s.push(st)
        }
      })
      if (c.length > 0) {
        let h = c.join('')
        console.log(h)
        s.push(hljs.highlightElement(h))
      }

      let f = s.join('');
      // console.dir(f)
      return f
    }
  }
};
