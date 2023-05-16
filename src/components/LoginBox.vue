<template>
    <div class="loginbox">
      <div class="none"></div>
      <div>用户名</div>
      <el-row :gutter="12" class="demo-radius" >
        
         <el-input v-model="username" class="radius"
          :style="{ 
            borderRadius: 'round'
              ? `var(--el-border-radius-round)`
              : '',
          }"
          type="text"
          placeholder="请输入你的用户名" 
          /></el-row>
          <div class="none"></div>
          <div>密码</div>
          <el-row :gutter="12" class="demo-radius">
          <el-input 
          type="password"
          v-model="password" class="radius"
          :style="{
            borderRadius: 'round'
              ? `var(--el-border-radius-round)`
              : '',
          }"
          placeholder="请输入你的密码"
          showpassword
          />
          
      </el-row>
      <div class="none"></div>
      <div class="none"></div>
      <el-button type="success" plain class="loginbtn" @click="login">登录</el-button>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';

let username = ref('');
let password = ref('')
const login = () => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/comments',
    params: {
      username: username.value,
      password: password.value
    },
    data: {
      
    }
  }).then((res => {
    console.log(res.data)
    console.log(res.data[0].username)
    console.log(res.data[0].password)
    console.log(username)
    if (res.data[0].username == username.value && res.data[0].password == password.value) { 
      console.log('登陆成功')
    }
    }))
}
</script>
<style scoped>
.demo-radius .radius {
  height: 30px;
  width: 30%;
  border: 1px solid var(--el-border-color);
 border-radius: 0;
  margin-left: 35%; 
}
.radius{
  line-height: 30px;
  text-align: center;
  font-size: small;
}
.loginbox{
  box-shadow: 0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04);
  background-color: rgb(250, 255, 255);
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  width: 40%;
  margin-left: 28%;
}
.none{
  height: 10px;
}
.loginbtn{
  margin-bottom: 10px;
}
</style>