<template lang="pug">
div.wip
  transition(appear,name="fade",@after-enter="nextStage",@after-leave="nextStage")
    div(v-if="stage == 1") Every now and then...
  transition(appear,name="fade",@after-enter="nextStage",@after-leave="nextStage")
    div(v-if="stage == 3") I get a wild hair to re-do my site...
  transition(appear,name="fade",@after-enter="nextStage",@after-leave="nextStage")
    div(v-if="stage == 5") Now is one of those times.
  transition(appear,name="fade")
    div(v-if="stage == 7") New site coming soon.
</template>

<script>
  export default {
    data() {
      return {
        stage: 1
      };
    },
    methods: {
      nextStage(el) {
        this.stage = this.stage + 1;
      },
    }
  };
</script>

<style lang="scss">
.wip {
  padding: 3rem;
}

@media screen and (min-width: 900px) { 
  .wip {
    padding: 10rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 4s ease;
}

</style>