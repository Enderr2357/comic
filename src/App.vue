<template>
  <div>
    <el-container>
      <el-header><Head height="70px"></Head> </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><Footer></Footer></el-footer>  
    </el-container>
    
  </div>
</template>
<script setup>
import Head from './layout/Head.vue';
import Footer from './layout/Footer.vue'
</script>
<style scoped></style>