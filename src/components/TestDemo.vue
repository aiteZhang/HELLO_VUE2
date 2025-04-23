<template>
  <div class="testDemo">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.testDemo{
  width: 600px;
  height: 200px;
  margin-left: 100px;
  margin-top: 100px;
  border: 1px solid red;
  display: flex;
}
.left{
  width: 299px;
  height: 100%;
  border-right: 1px solid red;
}
.right{
  width: 300px;
  height: 100%;
}

</style>