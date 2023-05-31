<template>

  <div class="body" v-if="user!=null">
    <p class="pp">Info</p>
    <p class="ppp">用户名</p>
    <el-input v-model="input" class="in" disabled :placeholder="user.uname" />
    <el-button type="warning" :icon="Edit" circle class="btn" @click="dialogFormVisible = true" />
    <p class="ppp">账号</p>
    <el-input v-model="input" class="in" disabled :placeholder="user.uaccount" />

    <el-dialog v-model="dialogFormVisible" title="修改用户名">
      <span>新用户名</span>
      <el-input v-model="newUsername" class="changeUsername"></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button @click="UpdateUser()">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
import { Edit } from '@element-plus/icons-vue'
import axios from 'axios';
const input = ref('')
const id=localStorage.getItem("User")
const dialogFormVisible = ref(false)
const role=ref('')
const newUsername=ref('')
const params=new URLSearchParams
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
const user=ref()
const getDataList=()=>{
  
  params.append("id",id)
  request.post("/getUser",params).then(res=>{
    console.log(res.data)
    user.value=res.data
    if(user.value.role==0){
      role.value="用户"
    }
  })
}
const UpdateUser=()=>{
  dialogFormVisible.value = false
  params.append("uId",id)
  params.append("newUsername",newUsername.value)
  request.post("/UpdateUser",params).then(res=>{
    console.log(res.data)
    user.value=res.data
    ElMessage({
            showClose: true,
            message: '用户更新成功',
            type: 'success',})
    getDataList()
  })
}
getDataList()
</script>

<style scoped>
.changeUsername {
  margin-left: 1%;
  width: 90%;
}

.btn {
  margin-left: 1%;
  background-color: black;
}

.body {
  padding-bottom: 5%;
}

.pp {
  margin-left: 15%;
  margin-top: 1%;
  font-size: x-large;
  color: darkorange;
}

.ppp {
  margin-left: 15%;
  margin-top: 1%;
  font-size: large;
  color: darkorange;
}

.in {
  width: 30%;
  margin-left: 15%;
}
</style>