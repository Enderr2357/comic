<template>
  <div class="bgc">
    <div class="HeadTitle">
      <div class="HeadTitleLf">
        <el-link class='link' type="warning" href="/Main">首页</el-link>
        <el-link class='link' type="warning" href="/Main">更新</el-link>
        <el-link class='link' type="warning" href="/Factory">分类</el-link>

      <input v-model="search" class="radius" :style="{
          borderRadius: 'round'
            ? `var(--el-border-radius-round)`
             : '',
          }" type="text" placeholder="搜索漫画">

  
      <div class="HeadTitleRt">
        <v-if>
          <el-link class='link' type="warning" href="/Login">登录</el-link>
          <el-link class='link' type="warning" href="/Register">注册</el-link>
        </v-if>
      </div>
  </div>
</div>
</template>
<script setup>
</script>
<style>
.HeadTitle {
  display: flex;
  justify-content: space-between;
  background-color:black;
  margin-left: 5%;
  margin-right: 5%;
  /* box-shadow: '--el-box-shadow-dark' */
}
.demo-radius{
  margin-top: 1%;
  height: 50px;
}
 .radius {
  height: 30px;
  border: 2px solid var(--el-border-color);
  border-radius: 0;
  line-height: 30px;
  margin-top: 1%;
  text-align: center;
  font-size: small;
}

.HeadTitleLf {
  flex-direction: row;
  margin-top: 1%;
}

.HeadTitleRt {
  flex-direction: row-reverse;
  margin-top: 1%;
}
.bgc{
  background-color: black;
  height: 100%;
}
.link {
  margin-right: 15px;
  font-size: 20px;
  }
.el-header {
    padding:0 !important;
    box-sizing: border-box;
    flex-shrink: 0;
    height: 80px;
}
</style>