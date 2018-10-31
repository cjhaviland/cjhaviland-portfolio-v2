import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/main.css';

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app');
