<template lang="pug">
.card(@click='goto(url)' @mouseover='debouncedPrefetch(url)')
  .new-corner(v-show="lastUpdated") New!
  .icon-container
    i.card-img-top(v-bind:class='icon')
  .card-body
    h5.card-title {{ cardTitle }}
    p.card-text {{ excerpt }}
  .card-text
    a.btn.btn-primary(v-bind:href='url' v-bind:title='cardTitle') {{ buttonText }}
  .card-footer(v-show="lastUpdated")
    small.text-muted {{ lastUpdated }}
</template>

<style lang="scss" scoped>
$primary: #406275;
$dark: #43464A;
$light: #DEE3E6;
$white: #f5f7f8;

.card {
  box-shadow: 12px 12px 2px 1px rgba(67, 70, 74, .5);
  border-top: 0;
  border-radius: 10px;
  height: 20rem;
  min-width: 5rem;
  overflow: hidden;

  .card-text > .btn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  .new-corner {
    position: absolute;
    top: 0;
    left: 0;
    padding: .4em 3em;

    transform: rotateZ(-45deg) translateX(-2.2em) translateY(-1.5em);
    background-color: #e7e556d8;
  }

  .card-body {
    padding: 20px 30px 30px;
  }

  .icon-container {
    border: $primary solid 2px;
    border-radius: 100px;
    margin: 20px auto;
    padding: 30px;
    width: 200px;
  }

  .fas {
    color: $primary;
    background-color: $white;
    font-size: 3em;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    .fas {
      animation: rotation .5s;
    }
  }
}

@keyframes rotation {
  from {
      transform: rotateY(0deg);
  }

  50% {
      transform: rotateY(180deg);
  }

  to {
      transform: rotateY(360deg);
  }
}
</style>

<script>
import debounce from 'lodash/debounce';

export default {
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText', 'url', 'lastUpdated'],
  created() {
    // Debouncing with Lodash
    this.debouncedPrefetch = debounce(this.prefetch, 10)
  },
  unmounted() {
    // Cancel the timer when the component is removed
    this.debouncedPrefetch.cancel()
  },
  data() {
    return {
      prefetchedLocations: []
    }
  },
  methods: {
    goto: function (gotoLocation) {
      document.location.pathname = gotoLocation
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