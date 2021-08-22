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
          div(v-html="postContent")
          div.mt-2
            a(:href="link") Original post

          comments(:comments="comments")
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

<script>
import shortcode from "../js/shortcode";
import comments from "./comments";

export default {
  components: {
    comments,
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
      // postselected.target.parentNode.parentNode.childNodes.forEach(el => { if(el.tagName == "A") { el.remove() } })

      var newLink =
        "/site/blogposts/" +
        this.link.replace("https://www.adamkoch.com/", "") +
        "index.json";
      fetch(newLink, {})
        .then((response) => {
          return response.json();
        })
        .then(
          (postJson) => {
            // document.getElementById(this.id).innerHTML = shortcode(postJson["content:encoded"]
            //   + "<div class=\"mt-2\"><a href=\"" + this.link + "\">Original post</a></div>").replaceAll("\r\n\r\n", "<br>")

            this.postContent = shortcode(
              postJson["content:encoded"]
            ).replaceAll("\r\n\r\n", "<br>");
              this.loaded = true;

              if (postJson["wp:comment"]) {
                postJson["wp:comment"].sort((comment1, comment2) => {
                  return (
                    parseInt(comment1["wp:comment_id"][0]) -
                    parseInt(comment2["wp:comment_id"][0])
                  )
                }
              )

              this.comments = postJson["wp:comment"];
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
