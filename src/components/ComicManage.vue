<template>
  <div class="mainbox">
    <span class="titlea">漫画管理</span>
    <el-table :data="table" style="width: 100%" max-height="250">
      <el-table-column prop="name" label="漫画名" width="150" />
      <el-table-column prop="category" label="类别" width="120" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.row.id)">
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
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author"/>
        </el-form-item>
        <el-form-item label="类别" :label-width="formLabelWidth">
          <el-input v-model="form.category" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button @click="addComic()">添加</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios';

import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
const table = ref()
const form = reactive({
  id:'',
  name:'',
  author:'',
  category:''
})
const getDataList=()=>{
  request.get("/GetComic").then(res=>{
    console.log(res.data)
    table.value=res.data
  })
}
getDataList()


const deleteRow = (id: string) => {
  const params=new URLSearchParams()
  params.append("id",id)
  request.post("/DeleteComic",params).then(res=>{
    console.log(res.data)
    if(res.data==1){
    ElMessage({
            showClose: true,
            message: '漫画删除成功',
            type: 'success',})
    getDataList()
  }
  })
}
const dialogFormVisible = ref(false)
const formLabelWidth = '15%'
const addComic=()=>{
  dialogFormVisible.value = false
  const params=new URLSearchParams()

  var author=encodeURIComponent(form.author)
  var name=encodeURIComponent(form.name)
  var category=encodeURIComponent(form.category)
  params.append("author",author)
  params.append("name",name)
  params.append("category",category)
  request.post("/AddComic",params).then(res=>{
    console.log(res.data)
            ElMessage({
            showClose: true,
            message: '漫画添加成功',
            type: 'success',})
    getDataList();
  })
}
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