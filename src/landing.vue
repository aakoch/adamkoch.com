<template lang="pug">
.center-row.container-fluid.g-0#main
  .row.g-0
    .col
      .container
        .row.justify-content-center.align-items-center
          .col(v-for="card in cards")
            card(:key='card.id' :cardTitle='card.title' :excerpt='card.excerpt' :icon='card.icon' :buttonText='card.button')
  .row.g-0
    .col.g-5
      .container
        p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things" 
          | are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.
</template>

<style lang="scss">

</style>

<script>
import card from './components/card'

export default { 
  components: {
    card
  },
  
  data() {
    return {
      cards: [
        { id: 1, title: 'Blog', icon: 'fas fa-feather', excerpt: 'Thoughts on the current state of things', button: 'Read on'  },
        { id: 2, title: 'Current Projects', icon: 'fas fa-pencil-ruler', excerpt: 'Things I\'m working on now', button: 'Dive in' },
        { id: 3, title: 'Past Projects', icon: 'fas fa-archive', excerpt: 'Old or abandoned projects', button: 'Dig Deep' }
      ]
    }
  }

}
</script>