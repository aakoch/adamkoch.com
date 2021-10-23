import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'Moving off Wordpress and on to Netlify')
app.provide('postId', '2021-09-08')
app.mount('#comment-form')