<template>
  <div>
    <p class="pp">Update</p>
    <el-input v-model="input" class="in" placeholder="请输入原密码" /><br>
    <el-input v-model="input" class="in" placeholder="请输入新密码" /><br>
    <el-input v-model="input" class="in" placeholder="重复新密码" /><br>
    <el-button type="warning" class="btn" @click="msg">确认修改</el-button>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const msg = () => {
  ElMessage({
    showClose: true,
    message: '密码修改成功',
    type: 'success',
  })
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