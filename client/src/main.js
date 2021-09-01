import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '../src/router/index.js'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = axios;
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
