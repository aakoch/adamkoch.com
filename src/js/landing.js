import { createApp } from "vue";
import App from "../components/landing";
// import App from "../WIP";
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import process from 'process';
console.log(process)
console.log(process.env.API_KEY)
console.log(process.env.NODE_ENV)

const landing = createApp(App)
landing.mount('#landing-app')