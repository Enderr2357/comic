<script setup>
import axios from 'axios';
import { ref } from 'vue';
const imgUrl1 = new URL('../img/comicimg', import.meta.url).href
const categoryinfo = ref([])
const request = axios.create({
  baseURL: '/api',
  timeout: 1000
})
const imgInfo = ref([])
// request({
//     method: 'POST',
//     url: '/comicName',
//     params: {
//         comicname:'all'
//     }
axios({
  method: 'GET',
  url: 'http://localhost:3000/comic',
  data: {
  }
}).then((res => {
  console.log(res.data)
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index];
    imgInfo.value.push(element)
  }
  console.log(imgInfo.value)
}))

axios({
  method: 'GET',
  url: 'http://localhost:3000/category',
  data: {
  }
}).then((res => {
  console.log(res.data)
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index];
    categoryinfo.value.push(element)
    console.log(element)
  }
  console.log(categoryinfo.value)
}))
</script>
<template>
  <div class="bg">
    <div class="titlebig">欢迎使用漫画网站</div><br>
    <div style="display:inline-flex;margin-left: 38%;">
      <ul v-for="value in categoryinfo">
        <li><el-link type="info" style="margin-left: 10px;" :href="'/Category/' + value.id">{{ value.category }}</el-link>
        </li>
      </ul>
    </div>
    <div class="titlemid">热门更新</div><br>
    <div class="main">
      <el-row gutter="20">
        <el-col :span="3" v-for="item in imgInfo">
          <div> <a :href="'/Detail/' + item.bid">
              <el-image :src="imgUrl1 + '/' + item.bsrcname + '.jpg'"></el-image>
              <div class="titlesmall">{{ item.bname }}</div>
            </a>
          </div>
        </el-col>
      </el-row>
    </div><br>

  </div>
</template>



<style>
.el-row {
  margin-right: 0% !important;
}


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

.main {
  margin-left: 20%;
}

.el-main {
  padding: 0 !important;
}
</style>
