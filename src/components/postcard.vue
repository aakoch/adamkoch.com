<template lang="pug">
div.col-6.g-2
  .card
    .card-body
      h5.card-title {{ postTitle }}
      .card-text 
        div.date Posted {{ formated_date }}
        div(v-bind:id="id")
        p {{ excerpt }}
        div(v-if="!clicked")
          a.href(@click="getData") Read
          a.href(@click="getData" v-if="excerpt")  more
          |  
          a.href(@click="getData")
            i(class='fas fa-angle-double-right')
</template>

<style lang="scss" scoped>
$primary: #406275;
div.date {
  margin-bottom: 10px;
}
a {
  cursor: pointer;
}
</style>

<script>
export default {
  props: ['id', 'postTitle', 'excerpt', 'date', 'link', 'name'],
  computed: {
    formated_date: function() {return new Date(this.date).toLocaleDateString();},
    post2: function () { return this.post; }
  },
  data: function() {
    return {clicked:false};
  },
  methods: {
    getData: function (postselected) {
      this.clicked = true;
      // postselected.target.parentNode.parentNode.childNodes.forEach(el => { if(el.tagName == "A") { el.remove() } })

      var link = "/site/blogposts/" + this.link.replace("https://www.adamkoch.com/", "") + "index.json"
      fetch(link, {
        }).then((response) => {
        return response.json()
      }).then((postJson) => {
        document.getElementById(this.id).innerHTML = postJson["content:encoded"].replaceAll("\n", "<br>");
        }, function (error) {
        console.log(error.statusText)
      })

      return false;
    }
  },

}
</script>