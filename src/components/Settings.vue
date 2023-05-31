<template>
  <div class="mainbox">
    <span class="titleu">个人设置</span>
    <el-menu mode="horizontal">
      <router-link to="/User/Settings/Info"><el-menu-item index="1">基本信息</el-menu-item></router-link>
      <router-link to="/User/Settings/Update"><el-menu-item index="2">修改密码</el-menu-item></router-link>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped></style>