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
        a(@click="getData")
          i(class='fas fa-angle-double-right')
        div(v-html="post")
</template>

<script>
import { $ } from "vue"
export default {
  props: ['id', 'postTitle', 'excerpt', 'date', 'link', 'name'],
  computed: {
    formated_date: function() {return new Date(this.date).toLocaleDateString();}
  },
  data() {
    return { post: "test" };
  },
  methods: {
    getData: function (postselected) {
      var link = "/site/blogposts/" + this.link.replace("https://www.adamkoch.com/", "") + "index.json"
      fetch(link, {
        }).then((response) => {
        return response.json()
      }).then((postJson) => {
        this.post = postJson["content:encoded"].replaceAll("\n", "<br>");
        }, function (error) {
        console.log(error.statusText)
      })
    }
  },

}
</script>