<template lang="pug">
.comment
  .commentPic
    img(v-bind:src="'https://secure.gravatar.com/avatar/' + hash" crossorigin)
  .commentMain
    .commentMeta(v-if="url")
      a(v-bind:href="url") {{ author }}  
      |  said on {{ date }}...
    .commentMeta(v-if="!url")
      span {{ author }} said on {{ date }}...
  
    .commentContent {{ content }}
</template>

<style lang="scss" scoped>
.comment {
  min-height: 80px;
  margin: 10px 0;
  .commentPic {
    float: left;
    margin-right: 10px;
    img {
      border-radius: 5px;
    }
  }
  .commentMain {
    padding: 0 10px;
  }
  .commentMeta:first-child {
    margin-bottom: auto;
  }
}
</style>


<script>
import md5 from "../../node_modules/blueimp-md5/js/md5";
export default {
  props: ["id", "date", "content", "author", "email", "url"],
  computed: {
    hash: function () {
      let hash = md5(this.email.toLowerCase().trim());
      return hash;
    },
  },
};
</script>
