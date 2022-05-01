<template lang="pug">
div
    
  .container
    h1 Blog Posts

    postpreview(key='20220430' postTitle='Lucid Gloves' date='2022-04-30T21:00-05:00' link='/posts/2022/04/30' name='Lucid Gloves' excerpt='It happens all the time. I get distracted by some new project and never finish the project I was working on...')

    postpreview(key='20211222' postTitle='GitHub Username' date='2021-12-22T21:00-05:00' link='/posts/2021/12/22' name='GitHub Username' excerpt='I was looking to publish a small NPM package but...')

    postpreview(key='20211022' postTitle='Spring Cloud Contracts' date='2021-10-22T21:40-05:00' link='/posts/2021/10/22' name='Spring Cloud Contracts' excerpt='My current employment uses Spring Cloud Contracts to write contracts between microservices. And while they are a good step to guarentee things work between apps, the way it is used today makes it very easy to pass bad data....')

    postpreview(key='20211014' postTitle='Recruiter Tips' date='2021-10-14T21:20-05:00' link='/posts/2021/10/14' name='Recruiter Tips' excerpt='When a recruiter messaged me on...')

    postpreview(key='20210917' postTitle='My Technology Stack' excerpt='Getting off Wordpress offered me a lot of "opportunities" to learn some new tech...' date='2021-09-17T00:32-05:00' link='/posts/2021/09/17' name='My Technology Stack')
    
    h2.mt-4 My first post on the new site! (Finally!) 🎉

    postpreview(key='20210908' postTitle='Moving off Wordpress and on to Netlify' excerpt='I\'m just so excited, I don\'t know how to start!...' date='2021-09-08T20:05-05:00' link='/posts/2021/09/08' name='Moving off Wordpress and on to Netlify')

    div Ignore that line about last posting in 2017. 
      h4.arrow ⤵
    hr

  .container(v-on:scroll="onScroll")
    p 
    p If you're thinking "2017 can't be the last time he posted", well, for a certain type it was.
    p These are old posts that I am trying to keep. They require some massaging to get into a readable format. I'm included a link to the original post that might look better.
    div.row(v-for="post in posts" :key="post['wp:post_id']") 
      postcard(:key='post["wp:post_id"]' :id='post["wp:post_id"]' :postTitle='post.title' :excerpt='post["excerpt:encoded"]' :date='post["wp:post_date"]' :link='post.link' :name='post["wp:post_name"]')
</template>

<style lang="scss" scoped>
h4.arrow {
  display: inline-block;
  position: relative;
  top: 20px;
}
</style>

<script>
import postcard from './postcard'
import postpreview from './postpreview'
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
    postcard,
    postpreview
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