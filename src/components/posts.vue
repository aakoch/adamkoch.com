<template lang="pug">
.container(v-on:scroll="onScroll")
  p 
  p If you're thinking "2017 can't be the last time he posted", well, it was.
  p These are old posts that I am trying to keep. They require some massaging to get into a readable format. I'm included a link to the original post that might look better.
  div.row(v-for="post in posts" :key="post['wp:post_id']") 
    postcard(:key='post["wp:post_id"]' :id='post["wp:post_id"]' :postTitle='post.title' :excerpt='post["excerpt:encoded"]' :date='post["wp:post_date"]' :link='post.link' :name='post["wp:post_name"]')
</template>

<script>
import postcard from './postcard'
import MY_JSON from "../data/professional_publish.json";

let idx = 5
let fullPosts = sort(MY_JSON);
let posts1 = MY_JSON.slice(0, idx)

function sort(posts) {
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

export default {
  components: {
    postcard
  },
  data() {
    return {
      posts: posts1
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(event) {
      if (event.target.scrollingElement.scrollTop + 20 >= event.target.scrollingElement.scrollHeight - window.innerHeight) {
        this.loadMore();
      }
    },
    loadMore() {
      let more = MY_JSON.slice(idx, idx + 5)
      let count = this.posts.push(...more)
      idx += 5

      if (this.posts.length == MY_JSON.length) {
        document.removeEventListener('scroll', this.onScroll)

      }
    }
  }
};
</script>