import { createApp } from "vue"
import App from "../../../commentPage"
import 'bootstrap'

const app = createApp(App)
app.provide('postTitle', 'Recruiter Tips')
app.provide('postId', '2021-09-17')
app.mount('#comment-form')