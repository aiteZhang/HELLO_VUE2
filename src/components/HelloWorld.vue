<template>
  <div class="hello">
    <h1>当前求和为：{{ sum }}</h1>
    <h2>demo组件第一个名字为：{{ firstName }}</h2>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add1(num)">和加</button>
    <button @click="add2()">奇数再加一</button>
    <button @click="add3(num)">隔一秒再加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data(){
    return{
      num:1
    }
  },
  computed:{
    ...mapState('helloStore',['sum']),
    ...mapGetters('demoStore',['firstName'])
  },
  methods:  {
    ...mapMutations('helloStore',['add1', 'add2', 'add3'])
  }
}
</script>

<style scoped>
</style>
