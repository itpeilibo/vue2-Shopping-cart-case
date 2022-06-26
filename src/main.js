import Vue from 'vue'
import App from './App.vue'
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// 引入axios
import axios from 'axios'
// 2. 基础地址
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 3000


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
