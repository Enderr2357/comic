<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { requestUrlParam1 } from '../router';
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const categoryinfo = ref([])
const comicinfo = ref([])
const message = ref('')
const receiveid = requestUrlParam1()
const data = ref('')
//接受其他页面带参跳转的分类页面

const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
//类别改变
const factoryChange = (name, index) => {
  comicinfo.value = []
  message.value = name
  console.log(index)
  request({
    url: '/comicName',
    methods: 'GET',
    params: {
      comicname: index
    }
  }).then((res => {
    console.log(res.data)
    res.data.forEach(element => {
      comicinfo.value.push(element)
    });
    console.log(comicinfo.value)
  }))
}
if (receiveid != 0) {
  data.value = receiveid
  request({
    url: '/comiccategory',
    methods: 'GET',
    params: {
      data: data.value
    }
  }).then((res => {
    console.log(res.data)
    const c1 = res.data
    message.value = c1.cateName
  }))
}
else {
  data.value = 'all'
}
//获取初始化分类
request({
  url: '/comiccategory',
  methods: 'GET',
  params: {
    data: 'all'
  }
}).then((res => {
  console.log(res.data)
  res.data.forEach(element => {
    categoryinfo.value.push(element)
  });
  console.log(categoryinfo.value)
}))
//获取漫画
request({
  url: '/comicName',
  methods: 'GET',
  params: {
    comicname: data.value
  }
}).then((res => {
  console.log(res.data)
  res.data.forEach(element => {
    comicinfo.value.push(element)
  });
  console.log(comicinfo.value)
}))
</script>
<template>
  <div class="bg">
    <el-container>

      <el-aside width="15%" class="aside">
        <span class="title">漫画分类 </span>
        <span class="top">Type</span>
        <el-row>
          <el-col :span="16">
            <el-menu active-text-color="#ffd04b" background-color="none" text-color="#fff">
              <el-menu-item index="1" @click="factoryChange('全部', 'all')">
                <el-icon>
                  <House />
                </el-icon>
                <span> 全部 </span>
              </el-menu-item>
              <el-menu-item v-for=" item in categoryinfo" :index=item.cateId
                @click="factoryChange(item.cateName, item.cateId)">
                <el-icon>
                  <Notebook />
                </el-icon>
                <span> {{ item.cateName }} </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <el-main class="main">
        <span class="title">{{ message }} 漫画 </span>
        <el-icon color="orange" size="20px">
          <Histogram />
        </el-icon>

        <div class="topline"></div>
        <div class="categorybox" v-for="item in comicinfo">
          <el-row>
            <el-col :span="3">
              <a :href="'/Detail/' + item.bId">
                <el-image :src="imgUrl + '/' + item.bSrcname + '.jpg'"></el-image>
              </a>
            </el-col>
            <el-col :span="16">
              <span class="midtitle"> {{ item.bName }} </span><br>
              <span class="comicInfo"> {{ item.bAuthor }}</span><br>
              <span class="comicInfo"> {{ item.bMaxno }}</span>
              <p class="comicdetail">{{ item.bInfo }}</p>
            </el-col>
            <div class="line"></div>
          </el-row>
        </div>

      </el-main>
    </el-container>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000" />
  </div>
</template>


<style>
.bg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
  padding-bottom: 5%;
  padding-top: 2%;
}

.page {
  margin-top: 3%;
  margin-left: 40%;
}

.top {
  color: darkorange;
}

.topline {
  width: 85%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.line {
  margin-top: 1%;
  margin-left: 10%;
  width: 60%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.dashed {
  margin-top: 1%;
  margin-left: 1%;
  border-top: 2px dashed var(--el-border-color);
  width: 25%;
}

.categorybox {
  padding-top: 2%;
  padding-left: 1%;
}

.comicInfo {
  padding-left: 1%;
  height: 1%;
  font-size: large;
  color: white;
}

.comicdetail {
  padding-left: 1%;
  padding-top: 2%;
  height: 1%;
  font-size: medium;
  color: white;
}

.aside {
  margin-left: 15%;
  padding-top: 1%;
}

.title {
  font-size: 25px;
  color: white;
}

.midtitle {
  padding-left: 1%;
  height: 1%;
  font-size: x-large;
  color: white;
}

.el-main {
  padding: 0 !important;
}

.el-pagination {
  --el-pagination-button-bg-color: var(--el-color-black) !important;
  --el-pagination-hover-color: var(--el-color-warning) !important;
  --el-pagination-button-color: var(--el-color-white) !important;
}


.el-menu.el-menu-item.is-active {
  color: darkorange;
}

/* .el-menu-item.is-active {
  background-color: darkorange !important;
} */
</style>
