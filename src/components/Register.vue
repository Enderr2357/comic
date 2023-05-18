<template>
  <el-container>
    <el-header height="70px">
    </el-header>
    <div class="mid">
      <el-container>
        <el-aside width="40%" class="side">
          <div class="as-img">
            <img src="../img/登录注册图片.png">
          </div>
        </el-aside>

        <!-- 注册框 -->
        <el-main>
          <div class="background">
            <div class="registerBox">
              <div class="t">用户名</div>
              <el-row :gutter="12" class="demo-radius">

                <input v-model="username" class="radius" :style="{
                  borderRadius: 'round'
                    ? `var(--el-border-radius-round)`
                    : '',
                }" type="text" placeholder="请输入用户名">
              </el-row>
              <div>密码</div>
              <el-row :gutter="12" class="demo-radius">
                <input v-model="password" class="radius" :style="{
                  borderRadius: 'round'
                    ? `var(--el-border-radius-round)`
                    : '',
                }" type="text" placeholder="请输入密码">
              </el-row>
              <div>确认密码</div>
              <el-row :gutter="12" class="demo-radius">
                <input v-model="passwordConfirm" class="radius" :style="{
                  borderRadius: 'round'
                    ? `var(--el-border-radius-round)`
                    : '',
                }" type="text" placeholder="再次输入密码">
              </el-row>
              <el-button type="warning" round class="RButton" @click="register">注册</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </el-container>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
let username = ref('');
let password = ref('');
let passwordConfirm = ref('');

const register = () => {
  axios({
    url: 'http://localhost:3000/comments',
    method: 'post',
    data: {
      username: username.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value
    }
  }).then((res => {
    console.log(res.data)
  }))
}
</script>
<style scoped>
.t {
  padding-top: 40px;
}

.mid {
  margin-bottom: 100px;
}

.bgc {
  /* background-color: lightgrey; */
}

.demo-radius .radius {
  height: 40px;
  width: 50%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 5px;
}

.radius {
  line-height: 30px;
  text-align: center;
  font-size: small;
}

.registerBox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #f4f4f5;
  text-align: center;
  height: 400px;
  margin-left: 0%;
}

.RButton {
  width: 50%;
  margin-top: 15px;
}

.background {
  width: 60%;
}

.side {
  margin-left: 10%;
}

.as-img {
  height: 400px;
  width: 500px;
  margin: auto;
  padding-top: 40px;
}
</style>