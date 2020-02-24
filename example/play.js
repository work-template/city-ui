import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss';
import './demo-styles/index.scss'; 
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';

Vue.use(Element);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
