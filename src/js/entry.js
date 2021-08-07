import { createApp } from "vue";
//import App from "../newsite";
import App from "../WIP";
import 'bootstrap'
// import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.component('blog-post', {
  props: ['title', 'excerpt', 'icon'],
  template: `<div class="col-4"><home-section :cardTitle="title" :excerpt="excerpt" :icon="icon"></home-section></div>`
})

// Define a new global component called button-counter
app.component('home-section', {
  props: ['cardTitle', 'excerpt', 'icon'],
  template: `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ cardTitle }}</h5>
    <i v-bind:class="icon"></i>
    <p class="card-text">{{ excerpt }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
})

app.mount('#app')