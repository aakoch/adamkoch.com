<template lang="pug">
div
  .card
    .card-body
      div.link
        a(href='#') 
          i(class='fas fa-angle-double-right')
      h5.card-title 
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
  // border-top: 0;
  // border-radius: 10px;
  // border: red solid 2px;
  // border-top: 0;
  // height: 20rem;

  // .card-text > .btn {
  //   position: absolute;
  //   right: 1rem;
  //   bottom: 1rem;
  // }

  // .icon-container {
  //   margin-top: 20px;
  //   margin-left: 40px;
  //   margin-bottom: 2rem;
  //   padding: 1rem;
  // }

  .fas, .fab {
    width: 1.5em;
  //   // box-shadow: 12px 12px 3px 0px rgba(67, 70, 74, .5);
  //   color: $primary;
  //   background-color: $white;
  //   font-size: 2em;
  //   // left: 50%;
  //   text-align: center;
  //   // transform: translateX(-50%);
  //   // transform: translateY(20px);

  //   // border-bottom: 0;
  }

  a i.fas, a i.fab {
    font-size: 3em;
  }

  // &:hover {
  //   // box-shadow: 14px 14px 3px 1px rgba(67, 70, 74, .5);
  //   // position: relative;
  //   // top: -2px;
  //   // left: -2px;

  //   .fas {
  //     // background-color: $primary;
  //     // color: $light;
  //     // border-color: $white;

  //     // transform: rotateY(180deg) translateY(20px);
  //     // transition: color 2s ease;
  //     // transition-duration: -1s;
  //     // transition: color 2s ease;
  //     // animation: rotation .5s;
  //     // transform: scale(125%);
  //   }
  // }
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
export default {
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText']
}
</script>