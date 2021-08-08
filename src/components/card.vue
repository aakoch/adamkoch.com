<template lang="pug">
div
  i(v-bind:class='icon')
  .card(style='width: 18rem;')
    .card-body
      h5.card-title {{ cardTitle }}
      p.card-text {{ excerpt }}
      a.btn.btn-primary(href='#') {{ buttonText }}
</template>

<style lang="scss" scoped>
$primary: #406275;
$dark: #43464A;
$light: #DEE3E6;
.fas {
  color: $primary;
  background-color: #f5f7f8;
  font-size: 3em;
  // left: 50%;
  text-align: center;
  // transform: translateX(-50%);
  transform: translateY(20px);

  border: red solid 2px;
  padding: .5em;
  width: 4em;
  border-radius: 10px 10px 0 0;
  border-bottom: 0;
  margin-left: 40px;
}
.card {
  border-top: 0;
  border-radius: 10px;
  border: red solid 2px;
}
</style>

<script>
export default {
  props: ['cardTitle', 'excerpt', 'icon', 'buttonText']
}
</script>