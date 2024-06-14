import code from './code.json' assert {
  type: 'json'
};

import path from 'path'
import fs from 'fs'
import util from 'util'
import {fileURLToPath} from 'url';
import debugFunc from 'debug';

const debug = debugFunc('preprocessor');


debug(code);

const keys = Object.keys(code);

for (let index = 0; index < keys.length; index++) {
  const key = keys[index];
  const value = code[key];

  if (value.indexOf('!import') == 0) {
    const filename = value.substring('!import'.length + 1);
    const resolvedPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), filename);
    debug("resolvedPath=", resolvedPath);

    try {
      fs.accessSync(resolvedPath, fs.constants.R_OK)
      debug(`file ${filename} found`);

      code[key] = fs.readFileSync(resolvedPath, 'utf-8');
    } catch (e) {
      debug(`file ${filename} not found`);
    }
  }
}

try {
fs.writeFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './code_resolved.json'), JSON.stringify(code));
} catch (e) {
  debug('could not write file', e);
}
