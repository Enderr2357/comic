<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { requestUrlParam1 } from '../router';
import { useRouter } from 'vue-router';
const imgUrl1 = new URL('../img/comicimg', import.meta.url).href
const categoryinfo = ref([])
const router = useRouter();
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
const imgInfo = ref([])
request({
  method: 'POST',
  url: '/comicName',
  params: {
    comicname: 'all'
  }
}).then((res => {
  console.log(res.data)
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index];
    imgInfo.value.push(element)
  }
  console.log(imgInfo.value[0].bAuthor)
}))
const turncate = (cateId) => {
  router.push('/Category/' + cateId)
}
const turnDetail = (bId) => {
  router.push('/Detail/' + bId)
}
request({
  method: 'GET',
  url: '/comiccategory',
  params: {
    data: 'all'
  }
}).then((res => {
  console.log(res.data)
  res.data.forEach(element => {
    categoryinfo.value.push(element)
  });
  console.log(categoryinfo.value[0])
}))
</script>
<template>
  <div class="bg">
    <div class="titlebig">欢迎使用漫画网站</div><br>
    <div style="display:inline-flex;margin-left: 38%;">
      <ul v-for="value in categoryinfo">
        <li><el-link type="info" style="margin-left: 10px;" @click="turncate(value.cateId)">{{ value.cateName
        }}</el-link>
        </li>
      </ul>
    </div>
    <div class="titlemid">热门更新</div><br>
    <div class="main">
      <el-row gutter="20">
        <el-col :span="3" v-for="item in imgInfo">
          <div @click="turnDetail(item.bId)" class="img">
            <el-image :src="imgUrl1 + '/' + item.bSrcname + '.jpg'"></el-image>
            <div class="titlesmall">{{ item.bName }}</div>
          </div>
        </el-col>
      </el-row>
    </div><br>

  </div>
</template>



<style scoped>
ul {
  text-align: center;
}

li {
  display: inline;
  margin-left: 1%;
}

.bg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
  padding-bottom: 5%;
}

.titlebig {
  font-size: 40px;
  text-align: center;
  color: white;
}

.titlemid {
  margin-left: 20%;
  color: white;
  font-size: 30px;
}

.titlesmall {
  color: white;
  font-size: 20px;
}

.img :hover {
  cursor: pointer;
}

.main {
  margin-left: 20%;
}
</style>
