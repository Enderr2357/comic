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
.HeadTitle{
  display:flex;
  width:100%;
  justify-content: space-between;
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