import Vue from 'vue'
import App from './App.vue';
//引入路由
import router from '@/router';
//TypeNav组件注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
