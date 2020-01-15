import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import Element from 'main/index.js';
import hljs from 'highlight.js'; // 语法高亮显示工具
import routes from './route.config';
import demoBlock from './components/demo-block';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';

import 'packages/theme-chalk/src/index.scss'; // element-ui的总样式
import './demo-styles/index.scss'; // doc的样式
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';
import icon from './icon.json';

Vue.use(Element);
Vue.use(VueRouter);
/*
注册文档所需要的布局组件
*/
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);

const globalEle = new Vue({
  data: { $isEle: false } // 是否 ele 用户
});

Vue.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.$data.$isEle),
      set: (data) => {globalEle.$data.$isEle = data;}
    }
  }
});

Vue.prototype.$icon = icon; // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock); // 语法高亮显示
  });
  document.title = 'ui-base-ele';
});

new Vue({ // eslint-disable-line
  ...entry,
  router
}).$mount('#app');
