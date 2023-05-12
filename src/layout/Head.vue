<template>
  <div class="HeadTitle">
      <div class="HeadTitleLf">
        <el-link class='link' type="primary" href="/Main">首页</el-link>     
        <el-link class='link' type="primary" href="/Main">更新</el-link>
        <el-link class='link' type="primary" href="/Main">排行</el-link>   
      </div>
      <div clas="HeadTitleRt">
        <v-if>
          <el-link class='link' type="primary" href="/Main">登录</el-link>     
          <el-link class='link' type="primary" href="/Main">注册</el-link>
        </v-if>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      message:'hello'
    }
  }
}
</script>
<style scoped>
.HeadTitleLf{
  display: flex;
  flex-direction: row;
}
.link{
  margin-right: 10px;
  }
</style>