<template lang="pug">
div.col-6.g-2
  .card
    .card-body
      h5.card-title {{ postTitle }}
      .card-text 
        | Posted {{ formated_date }}
        p {{ excerpt }}
        a(:href="link") Read
        a(:href="link" v-if="excerpt")  more
        |  
        a(:href="link")
          i(class='fas fa-angle-double-right')
</template>


<script>
export default {
  props: ['id', 'postTitle', 'excerpt', 'date', 'url'],
  computed: {
    year: function() { return new Date(this.date).getFullYear()},
    month: function() { return new Date(this.date).getMonth()},
    day: function() {return new Date(this.date).getDay()},
    encodedTitle: function() {return this.postTitle.replaceAll(" ", "-").replaceAll(":", "").replaceAll(",", "").toLowerCase()},
    formated_date: function() {return new Date(this.date).toLocaleDateString();}
  }
}
</script>