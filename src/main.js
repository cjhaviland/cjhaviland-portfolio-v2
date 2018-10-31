import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/main.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount("#app");