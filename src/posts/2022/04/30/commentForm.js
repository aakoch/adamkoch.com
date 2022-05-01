import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'Lucid Gloves')
app.provide('postId', '2022-04-30')
app.mount('#comment-form')