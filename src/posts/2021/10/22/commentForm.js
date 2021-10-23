import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'Spring Cloud Contracts')
app.provide('postId', '2021-10-22')
app.mount('#comment-form')