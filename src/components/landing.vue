<template lang="pug">
.container-fluid.g-0#main
  .row.g-0.center-row
    .col
      .container
        .row.justify-content-center.align-items-center.g-2
          .col(v-for="card in cards")
            card(:key='card.id' :cardTitle='card.title' :excerpt='card.excerpt' :icon='card.icon' :buttonText='card.button' :url='card.url')
.col-md-8.col-sm-10.col-xs-11.offset-md-1#adamexcerpt
  p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things" 
    | are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.
  
.col-md-8.offset-md-1#moreresources
  h3 More Stuff
.container
  .row.g-2
    .col-lg-3.col-md-4.g-1(v-for="link in links")
      minicard(:key='link.id' :cardTitle="link.title" :icon="link.icon" :excerpt="link.excerpt")
    //- .container
    //-   .row.justify-content-center.align-items-center.g-3
    //-     .col-2.g-6(v-for="link in links")
    //-       minicard(:key='link.id' :cardTitle="link.title" :icon="link.icon" :excerpt="link.excerpt")
.col.g-5#end
</template>

<style lang="scss">
.adamis {
  width: 50%;
  margin-right: 50em;
}
#adamexcerpt {
  width: 60%;
  margin: 3em 0 3em 25%;
}
#moreresources {
  width: 50%;
  margin: 1em 0 3em 25%;
  text-align: center;
  margin-bottom: 1em;
}
</style>

<script>
import card from './card'
import minicard from './minicard'

export default { 
  components: {
    card,
    minicard
  },
  
  data() {
    return {
      one: 'fsdfasdfasdfasdfa',
      cards: [
        { id: 1, title: 'Blog', icon: 'fas fa-feather', excerpt: 'Thoughts on the current state of things', button: 'Read on', url: '/posts/'  },
        { id: 2, title: 'Current Projects', icon: 'fas fa-pencil-ruler', excerpt: 'Things I\'m working on now', button: 'Dive in', url: '/projects/' },
        { id: 3, title: 'Past Projects', icon: 'fas fa-archive', excerpt: 'Old or abandoned projects', button: 'Dig Deep', url: '/past_projects/' }
      ],
      links: [
        { id: 1, title: 'GitHub', icon: 'fas fa-code-branch', excerpt: 'Source code' },
        { id: 1, title: 'Thingiverse', icon: 'fas fa-cube', excerpt: '3D prints' },
        { id: 1, title: 'Resume', icon: 'fas fa-id-card', excerpt: 'CV' },
        { id: 1, title: 'Twitter', icon: 'fab fa-twitter', excerpt: 'Tweet' },
      ]
    }
  }

}
</script>