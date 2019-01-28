import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

// Reset CSS
import 'normalize.css';

// Import Main CSS
import './assets/css/main.css';

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  FontAwesomeIcon,
  render: h => h(App),
}).$mount('#app');
