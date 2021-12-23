import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'GitHub Username')
app.provide('postId', '2021-12-22')
app.mount('#comment-form')