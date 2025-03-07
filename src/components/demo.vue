<template>
  <div>
    <h1>hello组件求和为：{{ sum }}</h1>
    <input type="text" v-model="name">
    <button @click="addName1(name)">添加名字</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'DemoText',
    data(){
        return{
           name: ''
        }
    },
    computed:{
        ...mapState('demoStore',['personList']),
        ...mapState('helloStore',['sum'])
    },
    methods: {
        addName1(name){
            this.$store.dispatch('demoStore/addName',name)
            this.name = ''
        }
    }
}
</script>

<style>

</style>