<template>
  <div class="mainbox">
    <span class="title">用户管理</span>
    <el-table :data="table" style="width: 100%" max-height="250">
      <el-table-column prop="username" label="用户名" width="120" />
      <el-table-column prop="account" label="账号" width="130" />
      <el-table-column prop="password" label="密码" width="130" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加用户</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const table = ref([
  {
    username: '杰斯',
    account: '10000',
    password: 'haha123',
  },
  {
    username: '奎桑提',
    account: '10001',
    password: 'huhu111',
  },
  {
    username: '兰博',
    account: '10086',
    password: 'xixi233',
  },
])

const deleteRow = (index: number) => {
  table.value.splice(index, 1)
}

const onAddItem = () => {
  table.value.push({
    username: '杰斯',
    account: '10086',
    password: 'haha123',
  })
}
</script>

<style></style>