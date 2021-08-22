<template lang="pug">
.comment.row
  .commentPic.col-2
    img(v-bind:src="'https://secure.gravatar.com/avatar/' + hash" crossorigin)
  .col-1 |
  .col
    .row
      .col.commentAuthor(v-if="url")
        a(v-bind:href="url") {{ author }}  
        |  said on {{ date }}...
      .col.commentAuthor(v-if="!url")
        span {{ author }} said on {{ date }}...
    .row
      .col.commentContent {{ content }}
</template>

<script>
import md5 from "../../node_modules/blueimp-md5/js/md5"
export default {
  props: ['id', 'date', 'content', 'author', 'email', 'url'],
  computed: {
    hash: function() {
      let hash =  md5(this.email.toLowerCase().trim())
      return hash
    }
  }
}
</script>