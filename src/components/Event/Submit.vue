<template>
  <div>
    <h3>Submit</h3>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("queue");

export default {
  name: "Submit",
  computed: {
    ...mapGetters(["getEventStatus"])
  },
  watch: {    
    getEventStatus(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        console.log("getEventStatus");
        this.step2();
      }
      //if (newQuestion.includes('?')) {
      //  this.getAnswer()
      //}      
    }
  },
  methods: {
    submit() {
      console.log("Submit start");
      this.$store.commit("queue/startEvent");
      Vue.$eventBus.$emit("clicked", 1);

      console.log("Submit end");
    },
    step2() {
      console.log("step 2");
    }
  },
};
</script>
