<template>
  <div class="HeadTitle">
    <div class="HeadTitleLf">
      <el-link class='link' type="warning" href="/Main">首页</el-link>
      <el-link class='link' type="warning" href="/Main">更新</el-link>
      <el-link class='link' type="warning" href="/Main">排行</el-link>
    </div>
    <div>
      <el-row :gutter="12" class="demo-radius">
        <input v-model="search" class="radius" :style="{
          borderRadius: 'round'
            ? `var(--el-border-radius-round)`
            : '',
        }" type="text" placeholder="搜索漫画">
      </el-row>
    </div>
    <div clas="HeadTitleRt">
      <v-if>
        <el-link class='link' type="warning" href="/Login">登录</el-link>
        <el-link class='link' type="warning" href="/Register">注册</el-link>
      </v-if>
    </div>

  </div>
  <div class="hx"></div>
</template>
<script setup>
</script>
<style scoped>
.HeadTitle {
  margin-top: 1%;
  display: flex;
  margin-bottom: 1%;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  /* background-color: lightgrey; */
  /* box-shadow: '--el-box-shadow-dark' */
}

.demo-radius .radius {
  height: 40px;
  border: 2px solid var(--el-border-color);
  border-radius: 0;
  margin: auto;
}

.radius {
  line-height: 30px;
  text-align: center;
  font-size: small;
}

.HeadTitleLf {
  flex-direction: row;
}

.HeadTitleRt {
  text-align: right
}

.link {
  margin-right: 15px;
  font-size: 20px;
}

.hx {
  margin-bottom: 100px;
  border: 1px solid grey;
  margin-left: 18px;
  margin-right: 18px;
}
</style>