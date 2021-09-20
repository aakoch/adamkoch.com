#!/usr/bin/env node
/**
 * Calling this like so works:
 */
// cd dist && node ../scripts/font.mjs && cd ..

import _ from 'lodash'
import glob from "glob"
import minimist from 'minimist';
import chalk from 'chalk'
import GlyphHanger from '../node_modules/glyphhanger/src/GlyphHanger.js'
import GlyphHangerWhitelist from '../node_modules/glyphhanger/src/GlyphHangerWhitelist.js'
import GlyphHangerSubset from '../node_modules/glyphhanger/src/GlyphHangerSubset.js'
import GlyphHangerFontFace from '../node_modules/glyphhanger/src/GlyphHangerFontFace.js'
import fs from 'fs/promises'
import { debug, info, error } from '../scripts/logging.mjs'

const argv = minimist(process.argv.slice(2))

// npx glyphhanger https://www.adamkoch.com --spider-limit=0
const websiteChars = "U+20-23,U+27-2A,U+2C-3F,U+41-57,U+59,U+60-7A,U+A9,U+D7,U+2502,U+2764,U+2935,U+F059,U+F099,U+F101,U+F126,U+F14E,U+F187,U+F1B2,U+F1FC,U+F2C2,U+F2DB,U+F35D,U+F52D,U+F5AE,U+F5FC,U+FE0F,U+1F37E,U+1F389"

// npx glyphhanger dist/**/*.html
const distChars = "U+9,U+A,U+20-7E,U+A0,U+A9,U+D7,U+E9,U+200D,U+2013,U+2019,U+201C,U+201D,U+2026,U+2502,U+2640,U+2764,U+F059,U+F14E,U+F1B2,U+F202,U+F35D,U+F5FC,U+FE0F,U+1F37E,U+1F3EB,U+1F46F,U+1F4BB,U+1F4F1,U+1F558-1F55B,U+1F642,U+1F914,U+1F916"

const whitelistChars = _.union(websiteChars.split(','), distChars.split(',')).join(',')

var whitelist = new GlyphHangerWhitelist(whitelistChars, {
  US_ASCII: argv.US_ASCII,
  LATIN: argv.LATIN
});

var gh = new GlyphHanger();
gh.setWhitelist(whitelist);

var subset = new GlyphHangerSubset();
subset.setOutputDirectory(argv.output);

'ttf,woff,woff2'.split(',').forEach(async type => {
  gh.setSubset('**/*.' + type);
  subset.setFormats(type);
  subset.setFontFiles(glob.sync('**/*.' + type))

  var fontface = new GlyphHangerFontFace();

  fontface.setSubset(subset);

  async function a() {
    gh.output();

    try {
      // --subset with or without --whitelist
      subset.subsetAll(!whitelist.isEmpty() ? whitelist.getWhitelistAsUnicodes() : whitelist.getUniversalRangeAsUnicodes());
    } catch (e) {
      process.exitCode = 1;
      error(chalk.red("GlyphHangerSubset Error: "), e);
    }

    try {
      if (!whitelist.isEmpty()) {
        fontface.setUnicodeRange(whitelist.getWhitelistAsUnicodes());
      }
      fontface.writeCSSFiles();
      fontface.output();
    } catch (e) {
      process.exitCode = 1;
      error(chalk.red("GlyphHangerFontFace Error: "), e);
    }

  };

  await a();
})

const regex = /([\w-]+)\.\w+-subset\.(ttf|woff2|woff)$/;

(async function () {

  const files = await fs.readdir('.', {
    withFileTypes: true
  })
  files
    .filter(f => {
      return f.isFile()
    })
    .filter(f => {
      debug("f.name=", f.name);
      debug("regex.test(f.name)=", regex.test(f.name));
      return regex.test(f.name)
    })
    .forEach(f => {
      const match = f.name.match(regex)
      debug("f.name", f.name);
      debug('match', match)
      const destFilename = '../src/fonts/' + match[1] + '.' + match[2]
      info(`copying ${f.name} to ${destFilename}`)
      fs.copyFile(f.name, destFile)
        .catch(reason => error('Error copying file: ' + reason));
    })

})()