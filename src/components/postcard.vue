<template lang="pug">
div.col.g-2
  .card
    .card-body
      h5.card-title {{ postTitle }}
      .card-text 
        div.date Posted {{ formated_date }}
        div(v-bind:id="id")
        p(v-if="!clicked && !loaded") {{ excerpt }}
        div(v-if="clicked && !loaded") Loading...
        div(v-if="!clicked" @click="getData")

          a.href Read
          a.href(v-if="excerpt")  more
          |  
          a.href
            i(class='fas fa-angle-double-right')

        div(v-if="loaded")
          .postContent(v-html="postContent")
          div.mt-2
            a(:href="link.replace('https://www.adamkoch.com/', 'https://wordpress.adamkoch.com/')") Original post

          div(v-for="comment in comments")
            comment(:author="comment['wp:comment_author'][0]" :content="comment['wp:comment_content'][0]" :date="comment['wp:comment_date'][0]" :email="comment['wp:comment_author_email'][0]" :url="comment['wp:comment_author_url'][0]")
</template>

<style lang="scss" scoped>
$primary: #406275;
div.date {
  margin-bottom: 10px;
}
a {
  cursor: pointer;
}
code {
  white-space: pre;
}
</style>

<style lang="css">
.postContent img {
    max-width: 100%;
    height: auto;
}
</style>

<script>
import shortcode from "../js/shortcode";
import comment from "./comment";


export default {
  // setup: function() {
  //   onMounted(() => {
  //     let currentState = history.state
  //     console.log("location: " + document.location + ", state: " + JSON.stringify(currentState))
  //     if (currentState == null) {
  //       this.getData()
  //     }

  //     window.onpopstate = function(event) {
  //       alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  //     };
  //   })
  // },
  components: {
    comment,
  },
  props: ["id", "postTitle", "excerpt", "date", "link", "name"],
  computed: {
    formated_date: function () {
      return new Date(this.date).toLocaleDateString();
    },
    post2: function () {
      return this.post;
    },
  },
  data: function () {



    return { clicked: false, loaded: false };
  },
  methods: {
    getData: function (postselected) {
      this.clicked = true;

      var newLink =
        "/site/blogposts/" +
        this.link.replace("https://www.adamkoch.com/", "") +
        "index.json";
      fetch(newLink, {})
        .then((response) => {
          return response.json();
        })
        .then((postJson) => {
          this.postContent = shortcode(postJson["content:encoded"]).replaceAll("\r\n\r\n", "<br>");
          this.loaded = true;

          if (postJson["wp:comment"]) {
            postJson["wp:comment"].sort((comment1, comment2) => {
                parseInt(comment1["wp:comment_id"][0]) -
                parseInt(comment2["wp:comment_id"][0])
            });

            this.comments = postJson["wp:comment"];
          }

          if (history.pushState) {
            history.pushState(this.postContent, null, '/posts/' + this.link.replace('https://www.adamkoch.com/', ''))
          }
        },
        function (error) {
          console.log(error.statusText);
        }
      );

      return false;
    },
  },
};
</script>
