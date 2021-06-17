<template>
  <div>
     <TypeNav/>
     <List/>
     <Recommend/>
     <Rank/>
     <Like/>
     <Floor/>
     <Brand/>
  </div>
</template>

<script>
import List from './List';
import Recommend from './Recommend'
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: '',
  components:{
    List,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>
