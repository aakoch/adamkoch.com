<template lang="pug">
div(v-for="comment in comments")
  comment(:author="comment['wp:comment_author'][0]" :content="comment['wp:comment_content'][0]" :date="comment['wp:comment_date'][0]" :email="comment['wp:comment_author_email'][0]" :url="comment['wp:comment_author_url'][0]")
</template>

<script>
import comment from "./comment.vue"

export default {
  components: {
    comment
  },
  props: ['comments']
}
</script>