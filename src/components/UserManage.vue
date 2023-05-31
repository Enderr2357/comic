<template>
  <div class="mainbox">
    <span class="titlea">用户管理</span>
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
    <!-- <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加用户</el-button> -->

    <el-button text @click="dialogFormVisible = true" style="width:38%" class="add">
      添加用户
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="添加用户">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input />
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input />
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
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