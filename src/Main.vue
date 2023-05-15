<template>
  <div>
    <el-container>
      <el-header><Head></Head></el-header>
      <MainBody></MainBody>
      <MainFoot></MainFoot>
        
  </el-container>
  </div>
</template>
<script setup>
import Head from './layout/Head.vue';
import MainFoot from './components/MainFoot.vue';
import MainBody from './components/MainBody.vue';
</script>
<style scoped>

</style>