<template>
  <div class="mainbox">
    <span class="title">我的订阅</span>
    <!-- <div class="empty">
      <img src="../img/空.png" alt="">
    </div>
    <span class="emptytext">当前没有订阅任何漫画●︿●</span> -->
    <div class="body"> 
      <el-row :gutter="20">
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
         <p>镖人</p>
      </el-col>
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
         <p>镖人</p>
      </el-col>
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
         <p>镖人</p>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
      <el-col :span="5">
        <img src="../img/comicimg/biaoren.jpg" alt="">
        <p>镖人</p>
      </el-col>
    </el-row>
  </div>
   
  </div>
</template>

<script setup>
</script>

<style>
.body{
  margin-top: 2%;
  margin-left: 15%;
}

.row{
  margin-top: 2%;
  padding-bottom: 5%;
}
</style>