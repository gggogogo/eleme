// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import 'common/stylus/index.styl';
Vue.config.productionTip = false;

// The plugin for Vue.js provides services for making web requests and handle responses using a XMLHttpRequest or JSONP.
// 发送http请求的插件
Vue.use(VueResource);

/* eslint-disable no-new */
// 不加上面那句，new出来的对象必须赋给一个对象
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
});
 router.push('/goods');
