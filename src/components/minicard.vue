<template lang="pug">
.card(@click='goto(link)' @mouseover='debouncedPrefetch(link)')
  .card-body
    .link
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
    cursor: pointer;
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
import debounce from 'lodash/debounce';

export default {
  created() {
    // Debouncing with Lodash
    this.debouncedPrefetch = debounce(this.prefetch, 10)
  },
  unmounted() {
    // Cancel the timer when the component is removed
    this.debouncedPrefetch.cancel()
  },
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText', 'link', 'isExternal'],
  data() {
    return {
      prefetchedLocations: []
    }
  },
  methods: {
    goto: function (gotoLocation) {
      document.location = gotoLocation
    },
    prefetch: function (gotoLocation) {
      if (this.prefetchedLocations.includes(gotoLocation))
        return;
      let link = document.createElement("link")
      link.setAttribute("rel", "prefetch")
      link.setAttribute("href", gotoLocation)
      document.body.appendChild(link)
      this.prefetchedLocations.push(gotoLocation)
    }
  }
}
</script>