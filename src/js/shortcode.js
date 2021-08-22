export default function (input) {

  let loggingEnabled = false;

  let shortCodeReplacements = {
    caption: {
      prefix: function(shortCode) {
        return `<div class="imageWithCaptionContainer" style="margin-left:auto;margin-right:auto;width:${shortCode.width}px;max-width:100%">`        
      },
      suffix: function(shortCode) {
        return `<div class="caption" style="text-align:center;width:${shortCode.width}px;max-width:100%">${shortCode.caption}</div></div>`
      }
    },
    java: {
      prefix: function(shortCode) {
        return `<div class="javaCode"><code><pre>`        
      },
      suffix: function(shortCode) {
        return `</pre></code></div>`
      }
    }
          // .replaceAll(/\[java[^]*?\]/g, "<code><pre>")
          // .replaceAll("[/java]", "</pre></code>")

  }

  let regex = /\[([a-z]*)\s([^\]]*)\]((?:.|\n|\r)*?)\[\/\1\]/m

  let groups = input.match(regex)

  let returnBody = "";

  while (groups) {


    let tagName = groups[1]
    let attributes = groups[2]
    let body = groups[3]

    if (loggingEnabled) {
    console.dir(groups)
    console.dir(tagName)
    console.dir(attributes)
    console.dir(body)
    }


    let attributesIterator = attributes.matchAll(/(\w*)=\"([^"]*)\"/g)

    let shortCode = {
      tagName: tagName,
      body: body,
    }

    for (const match of attributesIterator) {
      shortCode[match[1]] = match[2]
    }

    console.dir(shortCode);

    // \[(\w*)(?:\s+(\w*)=\"(\w*)\")[^\]]*?\](.*)\[\/\1\]

    // \[(\w*)(?:(?=(?:\s+(\w*)=\"(\w*)\")\4)[^\]]*?\])*(.*)\[\/\1\]

    let startIdx = input.indexOf(groups[0]);
    returnBody += input.substring(0, startIdx);
    
    if (shortCodeReplacements[tagName]) {
      returnBody += shortCodeReplacements[tagName].prefix(shortCode)
      returnBody += body;
      returnBody += shortCodeReplacements[tagName].suffix(shortCode)
    }
    else {
      console.warn(`Unknown shorttag "${tagName}"`)
      returnBody += body;
    }

    input = input.substring(startIdx + groups[0].length)
    groups = input.match(regex)
  }


  return returnBody + input;
}
