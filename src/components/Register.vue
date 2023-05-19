<template>
  <el-container>
        <el-aside width="40%" class="side">
          <div class="as-img">
            <img :src="imgUrl">
            </div>
        </el-aside>

        <!-- 注册框 -->
        <el-main>
            <div class="registerBox">
              <div class="none"></div>
              <div class="RegTitle">注册</div>
              <div class="RegText">账号</div>
              <div  class="demo-radius">

                <el-input v-model="username" class="radius" :style="{
                  borderRadius: 'round'
                    ? `var(--el-border-radius-round)`
                    : '',
                }" type="text" placeholder="Account">
                <template #prefix>
                <el-icon color="orange">
                  <User/>
                </el-icon></template>
                </el-input>
              </div>
              <div class="none"></div>
              <div class="RegText">密码</div>
              <div  class="demo-radius">
                <el-input v-model="password" class="radius" :style="{
                  borderRadius: 'round'
                    ? `var(--el-border-radius-round)`
                    : '',
                }" type="password" placeholder="Password">
              <template #prefix>
               <el-icon color="orange">
                 <Lock />
                </el-icon>
                </template>
                </el-input>
                </div>
              
                <div class="none"></div>
              <div class="RegText">确认密码</div>
              <div  class="demo-radius">
                <el-input v-model="passwordConfirm" class="radius" :style="{
                  borderRadius: 'round'
                    ? `var(--el-border-radius-round)`
                    : '',
                }" type="password" placeholder="ConfirmPassword">
                <template #prefix>
                 <el-icon color="orange">
                   <Lock />
                  </el-icon>
                  </template>
                  </el-input>
                </div>
                <div class="none"></div>
                <div class="none"></div>

              <el-button type="warning" plain class="RButton">注册</el-button>
            </div>
        </el-main>
  </el-container>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
let username = ref('');
let password = ref('');
let passwordConfirm = ref('');
const imgUrl = new URL('../img/注册登录图片.png', import.meta.url).href
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


.demo-radius .radius{
  height: 100%;
  width: 45%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-left: 28%; 
}
.RegTitle{
  margin-top: 8%;
  text-align: center;
  font-size: 30px;
  color: orange;
}
.RegText{
  margin-left: 28%;
  font-size: 6px;
  margin-top: 3%;
}
.radius {
  line-height: 30px;
  text-align: center;
  font-size: small;
}
.as-img{
  width: 70%;
  height: 70%;
  margin-top: 10%;
  margin-left: 20%;
}
.registerBox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #f4f4f5;
  font-family: 'Times New Roman', Times, serif;
  height: 100%;
  margin-left: 0%;
  width: 50%;
}

.RButton {
  width: 50%;
  margin-left: 26%;
  margin-bottom: 10%;
  margin-top: 4%;
}

.side {
  margin-left: 13%;
}
.none{
  height: 10px;
}
</style>