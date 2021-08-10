<template lang="pug">
.container
  div.row(v-for="post in sort($options.myJson)") 
    postcard(:key='post["wp:post_id"]' :id='post["wp:post_id"]' :postTitle='post.title' :excerpt='post["excerpt:encoded"]' :date='post.pubDate' :url='post.link')
    p {{ post.link }}

</template>

<script>
import postcard from './postcard'
import MY_JSON from "../data/professional_publish.json";

export default {
  components: {
    postcard
  },
  //custom option named myJson
  myJson: MY_JSON,
  methods: {
    sort(posts) {
      return posts.sort((post1, post2) => { 
        // console.log(post1.title.slice(0, 1));

        // by title:
        // return post1.title.slice(0, 1).localeCompare(post2.title.slice(0, 1));

        // by date:
        // console.log(Date.parse(post1["wp:post_date"]))
        // return Date.parse(post1["wp:post_date"]) - Date.parse(post2["wp:post_date"]);

        // by id:
        return post1["wp:post_id"] - post2["wp:post_id"];
      });
    }
  }
};
</script>