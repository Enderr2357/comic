<template>
  <div class="background">
    <div class="loginbox">
      <div>用户名</div>
      <el-row :gutter="12" class="demo-radius">

        <input v-model="username" class="radius" :style="{
          borderRadius: 'round'
            ? `var(--el-border-radius-round)`
            : '',
        }" type="text" placeholder="请输入你的用户名"></el-row>
      <div>密码</div>
      <el-row :gutter="12" class="demo-radius">
        <input v-model="username" class="radius" :style="{
          borderRadius: 'round'
            ? `var(--el-border-radius-round)`
            : '',
        }" type="text" placeholder="请输入你的密码">
      </el-row>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.demo-radius .radius {
  <<<<<<< HEAD height: 40px;
  width: 30%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-left: 35%;
}

.radius {
  =======height: 30px;
  width: 30%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-left: 35%;
}

.radius {
  >>>>>>>3402234e988a76cbc467b221696b3983fd03238a line-height: 30px;
  text-align: center;
  font-size: small;
}

<<<<<<< HEAD .loginbox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  =======.loginbox {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    >>>>>>>3402234e988a76cbc467b221696b3983fd03238a background-color: lightgrey;
    text-align: center;
  }
</style>