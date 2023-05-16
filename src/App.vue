<template>
  <div>
      <el-main><router-view></router-view></el-main>
      </el-header>
        <Head height="70px"></Head>
    <el-container>
      <el-header>

        <Footer></Footer>
      </el-footer>
      <el-footer>
    </el-container>
  </div>
</template>
<script setup>
import Head from './layout/Head.vue';
import Footer from './layout/Footer.vue'

</script>
<style scoped></style>