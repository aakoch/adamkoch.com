<template lang="pug">
commentForm(v-bind:postId='postId' v-bind:postTitle='postTitle')
</template>

<script>
import commentForm from "/src/components/commentForm";

export default {
  inject: ['postId', 'postTitle'],
  components: {
    commentForm
  }
};
</script>
