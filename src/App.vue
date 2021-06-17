<template>
  <div>
      <Header/>
      <router-view></router-view>
      <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
//引入非路由组件
import Header from "./components/Header";
import Footer from './components/Footer';
export default {
  name: '',
  components:{
    Header,
    Footer
  },
}
</script>

<style scoped>

</style>
