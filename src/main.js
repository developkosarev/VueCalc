import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apiService from "./services/ApiService";
import VueFormulate from "@braid/vue-formulate";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { NavbarPlugin } from "bootstrap-vue";

Vue.use(NavbarPlugin);
Vue.use(VueFormulate);

Vue.config.productionTip = false;

Vue.apiService = new apiService();
Vue.$eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
