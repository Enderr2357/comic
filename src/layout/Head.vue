<template>
  <div class="bgc">
    <div class="HeadTitle">
      <div class="HeadTitleLf">
        <el-link class='link' type="warning" href="/Main">首页</el-link>
        <el-link class='link' type="warning" href="/Category">分类</el-link>
        <el-link class='link' type="warning" href="/User">用户</el-link>
        <el-link class='link' type="warning" href="/Admin">管理员</el-link>
      </div>
      <div class="search">
        <input v-model="search" class="radius" :style="{
        borderRadius: 'round'
          ? `var(--el-border-radius-round)`
          : '',
        }" type="text" placeholder="搜索漫画">
        <el-button :icon="Search" circle class="sbutton" @click="bsearch()"/>
      </div>
      

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
import {
  Search
} from '@element-plus/icons-vue'
import {  useRouter } from 'vue-router';
const router = useRouter();
const bsearch = () => {
 router.push('/Search')
}

</script>
<style>
.HeadTitle {
  display: flex;
  justify-content: space-between;
  background-color: black;
  margin-left: 5%;
  margin-right: 5%;
  /* box-shadow: '--el-box-shadow-dark' */
}

.search{
  padding-top: 1%;
  position: relative;
}

.sbutton{
  border: none;
  outline: none;
  position: absolute;
  right: 0;
}

.el-button{
  --el-button-hover-bg-color:vue;
  --el-button-hover-text-color:darkorange;
}

.demo-radius {
  margin-top: 1%;
  height: 50px;
}

.radius {
  height: 30px;
  width: 100%;
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

.bgc {
  background-color: black;
  height: 100%;
}

.link {
  margin-right: 15px;
  font-size: 20px;
}

.el-header {
  padding: 0 !important;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 80px;
}
</style>