import { createApp } from "vue";
import '@fortawesome/fontawesome-free/css/all.css'

import commentForm from '../../../../components/commentForm'

const app = createApp({})

app.component('commentform', commentForm)

app.provide('postId', '2021/10/14')
app.provide('postTitle', 'Recruiter Tips')

app.mount('#commentForm')
// commentForm.mount('#commentForm')
// import App from "../../../../components/commentForm";