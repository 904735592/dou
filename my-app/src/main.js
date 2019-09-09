// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
Vue.use(ElementUI);
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false
require("./mock");//引用mock

import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css' 
// import 'bootstrap/dist/js/bootstrap.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
