
# Issues

## # 1 style(type=application/scss) errors
  Using type=text/scss works
## # 2 SVGs aren't properly minimized
  "minifySvg": false
## # 3 Pug imports wonky
## # 4 Sass variables not passed down
  Might have to do this for it to work: https://v2.parceljs.org/languages/css/#postcss-import
## # 5 CORS
  see .proxyrc.js
  
## # 9 Sharp causes segmentation faults
## # 10 strange imports 
## # 11 Some reporter is broken
## # 12 No logging
  --log-level=verbose doesn't seem to do anything
## # 13
  "countdown": "git://github.com/mckamey/countdownjs.git#1902fb23d21d84958b302c117fe472634a5bcf52",

## # 14
  *Have* to use an external stylesheet because of bug Parcel doesn't seem to honor the configuration in .cssnanorc.  I have to turn off minifyGradients because of a bug in cssnano which removes the first stop in gradients. https://github.com/cssnano/cssnano/issues/650

## # 15
  .cssnanorc option "minifyGradients": false
  *Have* to use an external stylesheet because Parcel doesn't seem to honor the   configuration in .cssnanorc for scripts that are in the page. And I have to turn off minifyGradients because of a bug in cssnano which removes the first stop in gradients. https://github.com/cssnano/cssnano/issues/650
  Or use the workaround: use a really small decimal like .0001px 

  ## #16
  Getting Vue tests to work. Having SVGElement missing. Example working finally with:
  package.json does not have "type"
  package.json has "test": "jest"
  test file in __tests__/index.js
  using /**
        * @jest-environment jsdom
          */ in test
  and importing using CommonJS: const { mount } = require('@vue/test-utils')

  From that ^^^ if I change one thing...
      change filename to index.mjs -> Jest gives error: No tests found, exiting with code 1
      adding "type" in package.json and Jest still can't find the test file
      Adding jest testRegex not fing the file:
      Thu 16 0:20:40 test-apo > jest --testRegex ['__test__/index.mjs'] 
      zsh: no matches found: [__test__/index.mjs]
      Thu 16 0:21:32 test-apo > jest --testRegex ['./__test__/index.mjs'] 
      zsh: no matches found: [./__test__/index.mjs]
      Thu 16 0:21:38 test-apo > jest --testRegex ['**/*.mjs']                                                      
      zsh: no matches found: [**/*.mjs]

      Thu 16 0:23:29 test-apo > ll __tests__                                                                                                                                                                 ⏱   00:00.56
total 8
-rw-r--r--  1 aakoch  admin  412 Sep 16 00:17 index.mjs
Thu 16 0:23:35 test-apo > jest --testRegex '__tests__\/.*mjs'                                                                                                                                          ⏱   00:00.01
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch:  - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex: __tests__\/.*mjs - 0 matches
Pattern:  - 0 matches
Thu 16 0:23:45 test-apo > jest --testRegex '__tests__/.*mjs'                                                                                                                                           ⏱   00:00.86
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch:  - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex: __tests__/.*mjs - 0 matches
Pattern:  - 0 matches
Thu 16 0:23:50 test-apo > jest --testRegex '__tests__/.*'                                                                                                                                              ⏱   00:00.53
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch:  - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex: __tests__/.* - 0 matches
Pattern:  - 0 matches
Thu 16 0:23:55 test-apo > jest --testRegex '__tests__\/.*'                                                                                                                                             ⏱   00:00.55
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch:  - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex: __tests__\/.* - 0 matches
Pattern:  - 0 matches
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex:  - 0 matches
Pattern: __tests__/.* - 0 matches
Thu 16 0:27:21 test-apo > jest "__tests__/index.mjs"                                                                                                                                                   ⏱   00:00.53
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex:  - 0 matches
Pattern: __tests__/index.mjs - 0 matches
Thu 16 0:27:26 test-apo > ll                                                                                                                                                                           ⏱   00:00.53
total 2152
drwxr-xr-x   12 aakoch  admin      384 Sep 16 00:27 .git
-rw-r--r--    1 aakoch  admin      231 Sep 15 23:55 .gitignore
-rw-r--r--    1 aakoch  admin      320 Sep 15 23:56 README.md
drwxr-xr-x    3 aakoch  admin       96 Sep 16 00:17 __tests__
-rw-r--r--    1 aakoch  admin       73 Sep 15 23:55 babel.config.js
drwxr-xr-x  838 aakoch  admin    26816 Sep 16 00:08 node_modules
-rw-r--r--    1 aakoch  admin  1084993 Sep 16 00:08 package-lock.json
-rw-r--r--    1 aakoch  admin      954 Sep 16 00:18 package.json
drwxr-xr-x    4 aakoch  admin      128 Sep 15 23:55 public
drwxr-xr-x    6 aakoch  admin      192 Sep 15 23:55 src
Thu 16 0:27:29 test-apo > ll __tests__                                                                                                                                                                 ⏱   00:00.01
total 8
-rw-r--r--  1 aakoch  admin  412 Sep 16 00:17 index.mjs
Thu 16 0:27:34 test-apo > jest "__tests__\/index.mjs"                                                                                                                                                  ⏱   00:00.01
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex:  - 0 matches
Pattern: __tests__\/index.mjs - 0 matches
Thu 16 0:27:49 test-apo > jest "__tests__\/index\.mjs"                                                                                                                                                 ⏱   00:00.54
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aakoch/projects/test-apo
  4 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 4 matches
  testRegex:  - 0 matches
Pattern: __tests__\/index\.mjs - 0 matches


mocha doesn't find the tests unless it is in "./test/"
but then threw error that "require is not defined" which is expected
changing the require to "import { mount } from '@vue/test-utils'" I get "ReferenceError: test is not defined"
changing "test" to "it": 

  1) displays message

  0 passing (8ms)
  1 failing

  1) displays message:
     ReferenceError: document is not defined
      at mount (node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js:7653:14)
      at Context.<anonymous> (file:///Users/aakoch/projects/test-apo/test/index.mjs:14:19)
      at processImmediate (node:internal/timers:463:21)

I tried adding jsdom:
import { JSDOM } from "jsdom"
const dom = new JSDOM('<html><head></head><body></body></html>')
const document = dom.window.document
const window = dom.window
global.document = document
global.window = window

But now it is complaining "SVGElement is not defined"

I tried to hack that by adding:
class SVGPathElement extends dom.window.HTMLElement {}
global.SVGPathElement = SVGPathElement
class SVGElement extends dom.window.HTMLElement {}
global.SVGElement = SVGElement

and I get "Cannot read property 'createElement' of null" 

debugging this I see "doc" isn't there, not sure why

I tried vue cli: 
vue add unit-mocha

not sure what I'm supposed to run then

Thu 16 0:34:54 test-apo > vue-cli-service test:unit                                                                                                                                                    ⏱   00:01.37
zsh: command not found: vue-cli-service

vue test

  Unknown command test.

  same for
  vue test:util
  vue :test:util
  vue test:util:

  I don't know what this does, but I tried it:
  vue invoke @vue/cli-plugin-unit-mocha

  tried:
  npx vue-cli-service test:unit                                                                                                                                                ⏱   00:03.84
 ERROR  Error: /Users/aakoch/projects/test-apo/babel.config.js: Error while loading config - You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.


 https://jestjs.io/docs/api#testname-fn-timeout
 https://github.com/vuejs/vue-next
 https://github.com/vuejs/vue-next/issues/3590
 https://github.com/vuejs/vue-test-utils-next/blob/master/examples/TodoApp.spec.js
 https://next.vue-test-utils.vuejs.org/guide/#what-is-vue-test-utils
 https://cli.vuejs.org/config/#typescript
 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha

 vue-cli-service test:unit                                                                                                                                                    ⏱   00:18.31
zsh: command not found: vue-cli-service

Removing the "type": "module" and running this got me a little further:
Thu 16 0:43:16 test-apo > ./node_modules/.bin/vue-cli-service                                                                                                                                          ⏱   00:00.32

  Usage: vue-cli-service <command> [options]

  Commands:

    serve     start development server
    build     build for production
    inspect   inspect internal webpack config
    lint      lint and fix source files
    test:unit run unit tests with mochapack

  run vue-cli-service help [command] for usage of a specific command.

Yes!!!!!

./node_modules/.bin/vue-cli-service test:unit                                                                                                                                ⏱   00:00.40
 WEBPACK  Compiling...

  [=========================] 98% (after emitting)

 DONE  Compiled successfully in 2169ms

  [=========================] 100% (completed)

 WEBPACK  Compiled successfully in 2169ms

 MOCHA  Testing...



  HelloWorld.vue
    ✔ renders props.msg when passed


  1 passing (34ms)

 MOCHA  Tests completed successfully

 Why do I need webpack??!?!?!?!?

And this is only in my test Vue app, not in this project.


I tried adding "type": "module" back in and got this error:
Error while loading config - You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously


I found this:
https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c

and after changing  babel.config.js to babel.config.cjs I didn't get the error and the tests passed
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};



I reverted the example and it works now:
import { mount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})

To reiterate, only by calling `./node_modules/.bin/vue-cli-service test:unit`, either via the command line or putting it as a script in package.json could I get the tests to run.
"test": "./node_modules/.bin/vue-cli-service test:unit"
this also worked:
"test": "vue-cli-service test:unit"

So only by adding webpack did I get Mocha to work.

Nevermind. Some example test that was generated without me knowing was running and not the example on the website.
When trying to run the website example I got:
Error in ./tests/unit/example.spec.js

  Module Error (from ./node_modules/eslint-loader/index.js):

  /Users/aakoch/projects/test-apo/tests/unit/example.spec.js
    31:3  error  'expect' is not defined  no-undef

  ✖ 1 problem (1 error, 0 warnings)

AFter addign this to the test:
import chai from 'chai'
const expect = chai.expect

I got 
[Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
  at <Anonymous msg="Hello world" ref="VTU_COMPONENT" >
  at <VTUROOT>
  1) displays message

  0 passing (76ms)
  1 failing

  1) displays message:
     Error: Invalid Chai property: toContain. Did you mean "contain"?
      at Object.proxyGetter [as get] (dist/js/webpack:/node_modules/chai/lib/chai/utils/proxify.js:75:1)
      at Context.<anonymous> (dist/js/webpack:/tests/unit/example.spec.js:34:1)
      at processImmediate (node:internal/timers:463:21)

So I changed it to `contain` and then got"


[Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
  at <Anonymous msg="Hello world" ref="VTU_COMPONENT" >
  at <VTUROOT>
  1) displays message

  0 passing (85ms)
  1 failing

  1) displays message:
     AssertionError: expected '' to include 'Hello world'
      at Context.<anonymous> (dist/js/webpack:/tests/unit/example.spec.js:34:1)
      at processImmediate (node:internal/timers:463:21)


I made that change and ran `npm i` and got this:
Thu 16 1:03:42 test-apo > npm i                                                                                                                                                                                    ⏱   00:04.43
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: @vue/babel-preset-app@4.5.13
npm WARN Found: vue@undefined
npm WARN node_modules/vue
npm WARN   vue@"vue/dist/vue.esm-bundler.js" from the root project
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional vue@"^2 || ^3.0.0-0" from @vue/babel-preset-app@4.5.13
npm WARN node_modules/@vue/babel-preset-app
npm WARN   @vue/babel-preset-app@"^4.5.13" from @vue/cli-plugin-babel@4.5.13
npm WARN   node_modules/@vue/cli-plugin-babel
npm WARN
npm WARN Conflicting peer dependency: vue@2.6.14
npm WARN node_modules/vue
npm WARN   peerOptional vue@"^2 || ^3.0.0-0" from @vue/babel-preset-app@4.5.13
npm WARN   node_modules/@vue/babel-preset-app
npm WARN     @vue/babel-preset-app@"^4.5.13" from @vue/cli-plugin-babel@4.5.13
npm WARN     node_modules/@vue/cli-plugin-babel
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: @vue/test-utils@2.0.0-rc.14
npm ERR! Found: vue@undefined
npm ERR! node_modules/vue
npm ERR!   vue@"vue/dist/vue.esm-bundler.js" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer vue@"^3.0.1" from @vue/test-utils@2.0.0-rc.14
npm ERR! node_modules/@vue/test-utils
npm ERR!   dev @vue/test-utils@"^2.0.0-0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: vue@3.2.11
npm ERR! node_modules/vue
npm ERR!   peer vue@"^3.0.1" from @vue/test-utils@2.0.0-rc.14
npm ERR!   node_modules/@vue/test-utils
npm ERR!     dev @vue/test-utils@"^2.0.0-0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/aakoch/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/aakoch/.npm/_logs/2021-09-16T06_03_56_072Z-debug.log

Couldn't get it to resolve. Tried yarn 
Yarn had me pick a version. 


Didn't work:

  "alias" : 
    { "vue" : "node_modules/vue/dist/vue.esm-bundler.js" }

    { "vue" : "vue/dist/vue.esm-bundler.js" }


    { "vue" : "./node_modules/vue/dist/vue.esm-bundler.js" }

    Then I realized I was putting that in package.json and not my bundler

    Tried creating webpack.config.js:
    module.exports = {
  resolve: {
    "alias":
      { "vue": "node_modules/vue/dist/vue.esm-bundler.js" }
  }
}

but didn't seem to do anything.
I tried witout the "node_modules" too

If I read it more carefully I would have noticed "provided template option" and how the example.spec.js files is importing a component and doesn't define it in the test itself, therefore doesn't have "template":

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}



https://github.com/vuejs/vue-next/issues/3590

https://github.com/vuejs/vue-test-utils-next/blob/master/examples/TodoApp.spec.js