<template>
  <div class="body">
    <p class="pp">Info</p>
    <p class="ppp">用户名</p>
    <el-input v-model="input" class="in" disabled placeholder="username" />
    <el-button type="warning" :icon="Edit" circle class="btn" @click="dialogFormVisible = true" />
    <p class="ppp">账号</p>
    <el-input v-model="input" class="in" disabled placeholder="account" />
    <p class="ppp">身份</p>
    <el-input v-model="input" class="in" disabled placeholder="role" />

    <el-dialog v-model="dialogFormVisible" title="修改用户名">
      <span>新用户名</span>
      <el-input class="changeUsername"></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button @click="dialogFormVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
const input = ref('')
const dialogFormVisible = ref(false)
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