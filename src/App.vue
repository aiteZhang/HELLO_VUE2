<template>
  <div id="app">
    <HelloWorld/>
    <br/>
    <DemoText/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DemoText from './components/demo.vue';

export default {
  name: 'App',
  components:{
    HelloWorld,
    DemoText
  }
}
</script>

<style>
</style>
