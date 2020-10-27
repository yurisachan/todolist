import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus=new Vue({})
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
