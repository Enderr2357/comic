<template>
  <div class="mainbox">
    <span class="titlea">漫画管理</span>
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
    <!-- <el-button class="mt-4" style="width: 100%" @click="AddItem">添加漫画</el-button> -->

    <el-button text @click="dialogFormVisible = true" style="width:38%" class="add">
      添加漫画
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="添加漫画">
      <el-form :model="form">
        <el-form-item label="漫画名" :label-width="formLabelWidth">
          <el-input />
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input />
        </el-form-item>
        <el-form-item label="类别" :label-width="formLabelWidth">
          <el-input />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button @click="dialogFormVisible = false">添加</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

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

const dialogFormVisible = ref(false)
const formLabelWidth = '15%'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<style scoped>
.add {
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 1%;
  box-shadow: 0px 3px 22px #b4b3b3;
  background-color: lightgray;
}

.el-input {
  width: 45%;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>