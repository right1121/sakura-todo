import Vue from 'vue';
import awesome from './awesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

awesome();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
