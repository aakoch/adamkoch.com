import { createApp } from "vue";
import App from "../components/posts";
import '@fortawesome/fontawesome-free/css/all.css'
import process from 'process';
console.log(process)

const landing = createApp(App)
landing.mount('#posts-app')