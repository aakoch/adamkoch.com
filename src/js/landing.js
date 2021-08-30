import { createApp } from "vue";
import App from "../components/landing";
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

const landing = createApp(App)
landing.mount('#landing-app')