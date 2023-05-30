<script setup>
const message='???'    
</script>

<template>
  <div class="bg">
    <center><span class="title">与{{ message }}相关的漫画</span></center>
    <div class="line"></div>

    <el-row>
      <el-col :span="4">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="4">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="4">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="4">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
    </el-row>

    <el-row>
        <el-col :span="4">
          <img src="../img/comicimg/biaoren.jpg" alt="">
          <p>镖人</p>
        </el-col>
        <el-col :span="4">
          <img src="../img/comicimg/biaoren.jpg" alt="">
          <p>镖人</p>
        </el-col>
        <el-col :span="4">
          <img src="../img/comicimg/biaoren.jpg" alt="">
          <p>镖人</p>
        </el-col>
        <el-col :span="4">
          <img src="../img/comicimg/biaoren.jpg" alt="">
          <p>镖人</p>
        </el-col>
      </el-row>

      <div class="line"></div>
  </div>
</template>

<style>
.el-row{
  margin-top: 2%;
  margin-left: 18%;
  color: white;
}

.el-col{
  margin-left: 2%;
}

.title{
  color: white;
  font-size: x-large;
}

.line {
  margin-top: 2%;
  margin-left: 15%;
  width: 70%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.bg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
  padding-bottom: 5%;
  padding-top: 1%;
}
.el-main {
  padding: 0 !important;
}
</style>