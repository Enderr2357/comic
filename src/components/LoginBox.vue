<template>
  <el-container>
    <el-aside width="40%" class="side">
      <div class="as-img">
        <img :src="imgUrl" />
      </div>
    </el-aside>
    <el-main>
      <div class="loginbox">

        <div class="none"></div>
        <div class="LgTitle">登录</div>
        <div class="LgText">账号</div>
        <div class="demo-radius">

          <el-input v-model="useraccount" class="radius" :style="{
            borderRadius: 'round'
              ? `var(--el-border-radius-round)`
              : '',
          }" type="text" placeholder="Account">
            <template #prefix>
              <el-icon color="green">
                <User />
              </el-icon></template>
          </el-input>
        </div>
        <div class="none"></div>
        <div class="LgText">密码</div>
        <div class="demo-radius">
          <el-input type="password" v-model="password" class="radius" :style="{
            borderRadius: 'round'
              ? `var(--el-border-radius-round)`
              : '',
          }" placeholder="Password" showpassword>
            <template #prefix>
              <el-icon color="green">
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </div>
        <div class="none"></div>
        <div class="none"></div>
        <el-button type="success" plain class="loginbtn" @click="login">登录</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';

let useraccount = ref('');
let password = ref('');
const imgUrl = new URL('../img/注册登录图片.png', import.meta.url).href
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})


const login = () => {
  console.log(password.value)
  request({
    method: 'POST',
    url: '/login.html',
    params: {
      useraccount: useraccount.value,
      password: password.value
    },
    data: {

    }
  }).then((res => {
    console.log(res.data)
  }))
}
</script>
<style scoped>
.LgText {
  margin-left: 31%;
  font-size: 6px;
  margin-top: 3%;
}

.LgTitle {
  margin-top: 10%;
  text-align: center;
  font-size: 30px;
  color: green;
}

.demo-radius .radius {
  height: 100%;
  width: 45%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-left: 31%;
}

.radius {
  line-height: 30px;
  text-align: center;
  font-size: small;
}

.as-img {
  width: 70%;
  height: 70%;
  margin-top: 10%;
  margin-left: 20%;
}

.loginbox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(250, 255, 255);
  font-family: 'Times New Roman', Times, serif;
  height: 100%;
  margin-left: 0%;
  width: 48%;
}

.none {
  height: 10px;
}

.side {
  margin-left: 13%;
}

.loginbtn {
  width: 50%;
  margin-left: 26%;
  margin-bottom: 15%;
  margin-top: 4%;
}
</style>