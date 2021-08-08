import { createApp } from "vue";
import App from "../landing";
// import App from "../WIP";
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

const landing = createApp(App)
landing.mount('#landing-app')