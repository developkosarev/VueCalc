<script>
export default {
  namespaced: true,
  state: {
    eventStatus: false
  },
  getters: {
    getEventStatus(state) {
      return state.eventStatus;
    }
  },
  mutations: {
    startEvent(state) {
      state.eventStatus = true;
    },
    finishEvent(state) {
      state.eventStatus = false;
    }
  }
};
</script>
