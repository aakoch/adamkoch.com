
import {Transformer} from '@parcel/plugin';

export default new Transformer({
  async loadConfig({config}) {
    console.error(config)
    let {contents, filePath} = await config.getConfig([
      'tool.config.json'
    ]);

    return contents;
  },
  async transform({asset}) {

    let buffer = await asset.getBuffer();

    console.error(buffer)
    console.error('asset.query.title='+asset.query.title)
    console.error('asset.query.posted='+asset.query.posted)


    // const app = createApp(App)
    // app.provide('postTitle', title)
    // app.provide('postId', posted)
    // app.mount('#comment-form')

    // asset.setBuffer(result);
    return [asset];
  }
});