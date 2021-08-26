import { createApp } from "vue";
import App from "../components/design.vue";
// import App from "../WIP";
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

const landing = createApp(App)
landing.mount('#designs-app')