import { createApp } from "vue";
import App from "../components/landing";
// import App from "../WIP";
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

const landing = createApp(App)
landing.mount('#landing-app')