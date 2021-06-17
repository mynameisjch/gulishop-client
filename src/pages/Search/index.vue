<template>
  <div>
      <p>
        params:{{$route.params.ps}}----{{ps}}
      </p>
      <p>
        query:{{$route.query.content}}---{{content}}
      </p>
  </div>
</template>

<script>
export default {
  name: '',
  //接受路由组件映射的属性
  props:['ps','content']
}
</script>

<style scoped>

</style>
