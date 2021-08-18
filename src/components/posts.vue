<template lang="pug">
.container
  p 
  p If you're thinking "2017 can't be the last time he posted", well, it was.
  div.row(v-for="post in sort($options.myJson)") 
    postcard(:key='post["wp:post_id"]' :id='post["wp:post_id"]' :postTitle='post.title' :excerpt='post["excerpt:encoded"]' :date='post["wp:post_date"]' :link='post.link' :name='post["wp:post_name"]')
</template>

<script>
import postcard from './postcard'
import MY_JSON from "../data/professional_publish.json";
//https://www.adamkoch.com/2017/08/28/speed-of-trust/

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
        return Date.parse(post2["wp:post_date"]) - Date.parse(post1["wp:post_date"]); // descending

        // by id:
        // return post1["wp:post_id"] - post2["wp:post_id"];
      });
    }
  }
};
</script>