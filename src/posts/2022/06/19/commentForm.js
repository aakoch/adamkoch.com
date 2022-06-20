import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'Engineering Process')
app.provide('postId', '2022-06-19')
app.mount('#comment-form')