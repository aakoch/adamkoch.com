<template lang="pug">
.card(v-on:click='goto(url)')
  .icon-container
    i.card-img-top(v-bind:class='icon')
  .card-body
    h5.card-title {{ cardTitle }}
    p.card-text {{ excerpt }}
  .card-text
    a.btn.btn-primary(v-bind:href='url' v-bind:title='cardTitle') {{ buttonText }}
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

  .card-text > .btn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
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
export default {
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText', 'url'],
  methods: {
    goto: function (gotoLocation) {
      document.location.pathname = gotoLocation
    }
  }
}
</script>