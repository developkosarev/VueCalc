<template>
  <div class="container">
    <h1>Events</h1>
    <Task />
    <Submit />
  </div>
</template>

<script>
import Submit from "@/components/Event/Submit.vue";
import Task from "@/components/Event/Task.vue";

export default {
  name: "Events",
  components: {
    Submit,
    Task
  }
};
</script>
