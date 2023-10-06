// import { escapeHtml } from "@vue/shared/";

import { escapeHtml } from "@vue/shared";

export class ShortCode {
  filter(input: string) {

    const loggingEnabled = false;

    type A = {
      prefix: Function,
      suffix: Function
      transform: Function
    };

    const shortCodeReplacements: Record<string, A> = {
      caption: {
        prefix: function (shortCode: { width: string }) {
          return `<div class="imageWithCaptionContainer" style="margin-left:auto;margin-right:auto;width:${shortCode.width}px;max-width:100%">`
        },
        suffix: function (shortCode: { width: string, caption: string }) {
          return `<div class="caption" style="text-align:center;width:${shortCode.width}px;max-width:100%">${shortCode.caption}</div></div>`
        },
        transform: (input: string) => input
      },
      java: {
        prefix: function (shortCode: { width: string }) {
          return `<div class="javaCode"><pre><code class="language-java">`
        },
        suffix: function (shortCode: { width: string }) {
          return `</code></pre></div>`
        },
        transform: (body: string) => {
          return escapeHtml(body); // .replaceAll("<", "&lt;");
        }
      }
      // .replaceAll(/\[java[^]*?\]/g, "<code><pre>")
      // .replaceAll("[/java]", "</pre></code>")

    }

    const regex = /\[([a-z]*)\s([^\]]*)\]((?:.|\n|\r)*?)\[\/\1\]/m

    let groups = input.match(regex)

    let returnBody = "";

    while (groups) {


      const tagName = groups[1]
      const attributes = groups[2]
      const body = groups[3]

      if (loggingEnabled) {
        console.dir(groups)
        console.dir(tagName)
        console.dir(attributes)
        console.dir(body)
      }


      const attributesIterator : IterableIterator<RegExpMatchArray> = attributes.matchAll(/(\w*)="([^"]*)"/g)

      type ShortCode = Record<string, string>

      const shortCode: ShortCode = {
        tagName: tagName,
        body: body,
      }

      for (const match of attributesIterator) {
        shortCode[match[1]] = match[2]
      }

      // \[(\w*)(?:\s+(\w*)=\"(\w*)\")[^\]]*?\](.*)\[\/\1\]

      // \[(\w*)(?:(?=(?:\s+(\w*)=\"(\w*)\")\4)[^\]]*?\])*(.*)\[\/\1\]

      const startIdx = input.indexOf(groups[0]);
      returnBody += input.substring(0, startIdx);

      if (shortCodeReplacements[tagName]) {
        returnBody += shortCodeReplacements[tagName].prefix(shortCode)
        returnBody += shortCodeReplacements[tagName].transform.call(this, body)
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
}
