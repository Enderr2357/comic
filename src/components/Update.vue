<template>
  <div>
    <p class="pp">Update</p>
    <el-input v-model="Npassword" class="in" placeholder="请输入新密码" /><br>
    <el-input v-model="Rpassword" class="in" placeholder="重复新密码" /><br>
    <el-button type="warning" class="btn" @click="msg">确认修改</el-button>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
const params= new URLSearchParams
const router=useRouter()

const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})

const login=localStorage.getItem('login')
const uid=localStorage.getItem('User')
const Npassword=ref('')
const Rpassword=ref('')
if(login!=1){
  router.push("/Main")
}
const msg = () => {
    
  if(Npassword.value==Rpassword.value){
      params.append("Npassword",Npassword.value)
      params.append("uId",uid)
      request.post("/UpdateUser",params).then(res=>{
        console.log(res.data)
        if(res.data==1){
            ElMessage({
            showClose: true,
            message: '密码修改成功',
            type: 'success',
          })
        }
      })
  }
  else{
    ElMessage({
    showClose: true,
    message: '两次密码不一致',
    type: 'warning',
  })
  }
  
}
const input = ref('')
</script>

<style scoped>
.pp {
  margin-left: 15%;
  margin-top: 1%;
  font-size: x-large;
  color: darkorange;
}

.in {
  width: 30%;
  margin-bottom: 1%;
  margin-top: 1%;
  margin-left: 15%;
}

.btn {
  margin-left: 25%;
  background-color: white;
  color: coral;
  margin-top: 1%;
  margin-bottom: 3%;
}
</style>