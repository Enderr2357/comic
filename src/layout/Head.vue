
<script setup>
import { create } from 'lodash';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const role = ref(0)
const login = ref(0)
const router = useRouter();
window.addEventListener('setItemEvent', function (e) {
  if (e.key == "role") {
    const newdata = e.newValue
    role.value = newdata
  }
  if (e.key == "login") {
    const newdata = e.newValue
    login.value = newdata
    if (newdata == 1) {
      router.push("/Main")
      console.log(newdata)
      console.log("登录了")
      // router.go(0)
    }
    else if (newdata == 0) {
      console.log(newdata)
      console.log("退出了")
      router.push({ path: "/Main" })
    }
  }
})
const exit = () => {
  localStorage.setItem('login', 0)
}
const turntoCate = () => {
  router.push("/Category")
}
const turntoMain = () => {
  router.push("/Main")
}
const turntoUser = () => {
  router.push("/User")
}
const turntoAdmin = () => {
  router.push("/Admin")
}
</script>
<template>
  <div class="bgc">
    <div class="HeadTitle">
      <div class="HeadTitleLf">
        <el-link class='link' type="warning" @click="turntoMain">首页</el-link>
        <el-link class='link' type="warning" @click="turntoCate">分类</el-link>
        <el-link v-if="role == 0 && login == 1" class='link' type="warning" @click="turntoUser">个人中心</el-link>
        <el-link v-if="role == 1 && login == 1" class='link' type="warning" @click="turntoAdmin">管理员</el-link>
      </div>
      <input v-model="search" class="radius" :style="{
        borderRadius: 'round'
          ? `var(--el-border-radius-round)`
          : '',
      }" type="text" placeholder="搜索漫画">


      <div class="HeadTitleRt">
        <v-if>
          <el-link v-if="login == 0" class='link' type="warning" href="/Login">登录</el-link>
          <el-link v-if="login == 0" class='link' type="warning" href="/Register">注册</el-link>
          <el-link v-if="login == 1" class='link' type="warning" @click="exit()">退出</el-link>
        </v-if>
      </div>
    </div>
  </div>
</template>

<style>
.HeadTitle {
  display: flex;
  justify-content: space-between;
  background-color: black;
  margin-left: 5%;
  margin-right: 5%;
  /* box-shadow: '--el-box-shadow-dark' */
}

.demo-radius {
  margin-top: 1%;
  height: 50px;
}

.radius {
  height: 30px;
  border: 2px solid var(--el-border-color);
  border-radius: 0;
  line-height: 30px;
  margin-top: 1%;
  text-align: center;
  font-size: small;
}

.HeadTitleLf {
  flex-direction: row;
  margin-top: 1%;
}

.HeadTitleRt {
  flex-direction: row-reverse;
  margin-top: 1%;
}

.bgc {
  background-color: black;
  height: 100%;
}

.link {
  margin-right: 15px;
  font-size: 20px;
}

.el-header {
  padding: 0 !important;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 80px;
}
</style>