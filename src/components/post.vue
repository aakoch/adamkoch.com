<template lang="pug">
div
  div(v-for="data in $options.myJson") {{data}}

</template>

<script>
import MY_JSON from "../data/data.json";
export default {
  //custom option named myJson
  myJson: MY_JSON,
};
</script>
