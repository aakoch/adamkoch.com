

import { JSDOM } from "jsdom"
const dom = new JSDOM('<html><head></head><body></body></html>')
const document = dom.window.document
const window = dom.window
global.document = document
global.window = window

import {
  mount,
  shallowMount
} from '@vue/test-utils'

// import chai from 'chai'
// const expect = chai.expect


class SVGPathElement extends dom.window.HTMLElement {}
global.SVGPathElement = SVGPathElement
class SVGElement extends dom.window.HTMLElement {}
global.SVGElement = SVGElement

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

// describe('baseTest', () => {
  it('displays message', () => {
    const wrapper = mount(MessageComponent, {
      props: {
        msg: 'Hello world'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).to.contain('Hello world')
  })
// })




// import { h, createApp } from '@vue/runtime-dom'

// const RootComponent = {
//   render() {
//     return h('div', 'hello world')
//   }
// }

// createApp(RootComponent).mount('#app')
