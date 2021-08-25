<template lang="pug">
.card(v-on:click='goto(link)')
  .card-body
    div.link
      a(v-bind:href='link' v-bind:title='cardTitle') 
        i(v-if="!isExternal" class='fas fa-angle-double-right')
        i(v-if="isExternal" class='fas fa-external-link-alt')
    h4.card-title 
      i.card-img-top(v-bind:class='icon')
      | {{ cardTitle }}
    p.card-text {{ excerpt }}
</template>

<style lang="scss" scoped>
$primary: #406275;
$dark: #43464A;
$light: #DEE3E6;
$white: #f5f7f8;
.card {
  .card-body {
    .link {
      float:right;
    }
  }
  &:hover {
    border-color: $primary;
  }
  .fas, .fab {
    width: 1.5em;
  }

  a i.fas, a i.fab {
    font-size: 2em;
  }
}
</style>

<script>
export default {
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText', 'link', 'isExternal'],
  methods: {
    goto: function (gotoLocation) {
      document.location = gotoLocation
    }
  }
}
</script>