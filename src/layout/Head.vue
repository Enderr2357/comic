<template>
  <div class="HeadTitle">
      <div class="HeadTitleLf">
        <el-link class='link' type="warning" href="/Main">首页</el-link>     
        <el-link class='link' type="warning" href="/Main">更新</el-link>
        <el-link class='link' type="warning" href="/Main">排行</el-link>   
      </div>
      <div clas="HeadTitleRt">
          <v-if>
            <el-link class='link' type="warning" href="/Login">登录</el-link>     
            <el-link class='link' type="warning" href="/Register">注册</el-link>
          </v-if>
      </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.HeadTitle{
  margin-top: 10px;
  display:flex;
  justify-content: space-between;
  /* background-color: lightgrey; */
  /* box-shadow: '--el-box-shadow-dark' */
}
.HeadTitleLf{
  flex-direction: row;
}
.HeadTitleRt{
  text-align:right
}
.link{
  margin-right: 15px;
  font-size: 20px;
  }
</style>