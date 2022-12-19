import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'Box Animations')
app.provide('postId', '2022-12-18')
app.mount('#comment-form')