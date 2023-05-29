<template>
  <div class="bg">
    <div class="smallhead">
      <span>您当前位置：</span>
      <a href="/Detail">镖人</a>
      <span>>第一话</span>
    </div>
    <div>
      <span class="title">《镖人》- 第一话</span>
    </div>
    <div class="line"></div>
    <div class="img">
      <img :src="imgUrl1 + '/' + bsrcname + '/' + no + '/' + page + '.jpg'" alt="" style="height: 1500px;width: 1000px;">
    </div>

    <el-button-group class="button">
      <el-button @click="previous" type="primary" :icon="ArrowLeft">上一页</el-button>
      <el-button @click="next" type="primary">下一页
        <el-icon class="el-icon--right">
          <ArrowRight />
        </el-icon>
      </el-button>
    </el-button-group>
    <el-dropdown>
      <el-button type="primary">
        跳页<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>1</el-dropdown-item>
          <el-dropdown-item>2</el-dropdown-item>
          <el-dropdown-item>3</el-dropdown-item>
          <el-dropdown-item>4</el-dropdown-item>
          <el-dropdown-item>5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'
import axios from 'axios';
import { requestUrlParam1 } from '../router';
import { ref } from 'vue';
const imgUrl1 = new URL('../img', import.meta.url).href
const src = requestUrlParam1()
const id = src[0]
const no = src[1]
const page = ref(0)
const bid = ref(0)
const bname = ref('')
const bsrcname = ref('')
const binfo = ref('')
const bmaxno = ref(0)
const bcategory = ref('')
const bauthor = ref(0)
const bnos = ref([])
console.log(id, no)
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
request({
  url: '/comicId',
  method: 'GET',
  params: {
    comicid: id
  }
}).then((res => {
  console.log(res.data)
  bid.value = res.data.bid
  bname.value = res.data.bname
  bsrcname.value = res.data.bsrcname
  binfo.value = res.data.binfo
  bmaxno.value = res.data.bmaxno
  bcategory.value = res.data.bcategory
  bauthor.value = res.data.bauthor
  bnos.value = res.data.no

}))
const next = () => {
  page.value = page.value + 1
}
</script>

<style>
.line {
  margin-top: 1%;
  margin-bottom: 2%;
  margin-left: 10%;
  width: 80%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.smallhead {
  padding-top: 2%;
  margin-left: 4%;
  color: white;
}

.title {
  color: white;
  margin-left: 40%;
  font-size: xx-large;
}

.button {
  margin-left: 40%;
  padding-bottom: 2%;
}

img {
  margin-left: 19%;
  margin-bottom: 2%;
}

.bg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
}

.el-main {
  padding: 0 !important;
}
</style>