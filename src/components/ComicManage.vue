<template>
  <div class="mainbox">
    <span class="title">漫画管理</span>
    <el-table :data="table" style="width: 100%" max-height="250">
      <el-table-column prop="comicname" label="漫画名" width="150" />
      <el-table-column prop="category" label="类别" width="120" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="AddItem">添加漫画</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const table = ref([
  {
    comicname: '镖人',
    category: '国漫',
    author: '新漫画',
  },
  {
    comicname: '百诡谈',
    category: '国漫',
    author: '完美世界漫画',
  },
  {
    comicname: '刺客信条：王朝',
    category: '武侠',
    author: '育碧Ubisoft',
  },
])

const deleteRow = (index: number) => {
  table.value.splice(index, 1)
}

const AddItem = () => {
  table.value.push({
    comicname: '镖人',
    category: '国漫',
    author: '新漫画',
  })
}
</script>

<style></style>