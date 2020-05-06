import Vue from 'vue'
import App from './App.vue'

//注册路由
import router from "@/router";
//注册vuex
import store from "@/store";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
