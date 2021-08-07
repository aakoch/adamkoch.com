<template lang="pug">
.container#main
  .row
    blog-post(v-for='post in posts' :key='post.id' :title='post.title' :excerpt='post.excerpt' :icon='post.icon')

  hr

  div More stuff
</template>

<style lang="scss">

</style>

<script>
export default {
  
  data() {
    return {
      posts: [
        { id: 1, title: 'Blog', icon: 'fas fa-feather', excerpt: 'Thoughts on the current state of things'  },
        { id: 2, title: 'Current Projects', icon: 'fas fa-pencil-ruler', excerpt: 'Things I\'m working on now' },
        { id: 3, title: 'Past Projects', icon: 'fas fa-archive', excerpt: 'Old or abandoned projects' }
      ]
    }
  }

}
</script>