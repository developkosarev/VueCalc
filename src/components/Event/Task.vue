<template>
  <div>
    Task
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Task",
  mounted() {
    Vue.$eventBus.$on("clicked", this.clickHandler);
  },
  unmounted() {
    Vue.$eventBus.$off("clicked", this.clickHandler);
  },
  methods: {
    async clickHandler() {
      await setTimeout(() => {
        console.log("clickHandler1");
        this.$store.commit("queue/finishEvent");
      }, 5000);

      console.log("clickHandler2");
    }
  }
};
</script>
