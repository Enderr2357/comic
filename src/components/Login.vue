<script setup>
import Head from '../layout/Head.vue';
import LoginBox from './LoginBox.vue';
import Footer from '../layout/Footer.vue'
</script>
<template>
  <div class="bgc">
      <el-container>
        <el-header height="40px"><Head></Head></el-header>
      <div class="hx"></div>
      <el-main><LoginBox></LoginBox></el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.hx{
  margin-bottom: 3px;
  border: 1px solid grey;
  margin-left: 18px;
  margin-right: 18px;
}
.bgc{
  /* background-color: lightgrey; */
}
</style>