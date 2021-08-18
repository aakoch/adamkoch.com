<template lang="pug">
div
  .card
    .icon-container
      i.card-img-top(v-bind:class='icon')
    .card-body
      h5.card-title {{ cardTitle }}
      p.card-text {{ excerpt }}
    .card-text
      a.btn.btn-primary(v-bind:href='url') {{ buttonText }}
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
  // border: red solid 2px;
  // border-top: 0;
  height: 20rem;
  min-width: 5rem;

  .card-text > .btn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  .icon-container {
    border: $primary solid 2px;
    border-radius: 100px;
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 2rem;
    padding: 2rem;
    width: 200px;
  }

  .fas {
    // box-shadow: 12px 12px 3px 0px rgba(67, 70, 74, .5);
    color: $primary;
    background-color: $white;
    font-size: 3em;
    // left: 50%;
    text-align: center;
    // transform: translateX(-50%);
    // transform: translateY(20px);

    // border-bottom: 0;
  }

  &:hover {
    // box-shadow: 14px 14px 3px 1px rgba(67, 70, 74, .5);
    // position: relative;
    // top: -2px;
    // left: -2px;

    .fas {
      // background-color: $primary;
      // color: $light;
      // border-color: $white;

      // transform: rotateY(180deg) translateY(20px);
      // transition: color 2s ease;
      // transition-duration: -1s;
      // transition: color 2s ease;
      animation: rotation .5s;
      // transform: scale(125%);
    }
  }
}

@keyframes rotation {
  from {
      // border-color: $primary;
      // color: $primary;
      // background-color: $white;
      // // transform: rotateY(0deg)  translateY(1px);
      // transform: scale(100%);
      transform: rotateY(0deg);
  }

  50% {
      transform: rotateY(180deg);
  }

  to {
      // color: $white;
      // background-color: $primary;
      // // transform: rotateY(180deg)  translateY(-18px);
      // transform: scale(125%);
      transform: rotateY(360deg);
  }
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText', 'url']
}

</script>