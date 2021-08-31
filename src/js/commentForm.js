import { createApp } from "vue"
import App from "../components/commentForm"
import 'bootstrap'

const app = createApp(App)
app.mount('#comment-form')