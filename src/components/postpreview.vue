<template lang="pug">
.col.g-2
  .card
    .card-body
      h5.card-title {{ postTitle }}
      .card-text 
        .date Posted {{ formated_date }}
        div(v-bind:id="id")
        p {{ excerpt }}
        .linkies
          a.href(:href="link") Read
          a.href(v-if="excerpt" :href="link")  more
          |  
          a.href(:href="link")
            i(class='fas fa-angle-double-right')
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

.linkies {
  display: contents;
    &:hover {
    .fas {
      animation: moveright .5s infinite;
    }
  }
}

@keyframes moveright {
  from {
      transform: translateX(0);
  }

  to {
      transform: translateX(10px);
  }
}
</style>

<script>
export default {
  components: {
  },
  props: ["id", "postTitle", "excerpt", "date", "link", "name"],
  computed: {
    formated_date: function () {
      return new Date(this.date).toLocaleDateString();
    }
  }
};
</script>
