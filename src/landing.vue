<template lang="pug">
.center-row.container-fluid.g-0#main
  .row
    .col
      .container
        .row.justify-content-center.align-items-center
          .col(v-for="card in cards")
            card(:key='card.id' :cardTitle='card.title' :excerpt='card.excerpt' :icon='card.icon' :buttonText='card.button')
  hr(width="80%" align="center")
  div More stuff
</template>

<style lang="scss">
$primary: #406275;
$light: #DEE3E6;
$dark: #43464A;
$white: tint-color($light, 70);
.center-row {
  background: linear-gradient(0deg, $white 50%, $dark 50%);
}
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