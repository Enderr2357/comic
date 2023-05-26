<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { requestUrlParam1 } from '../router';
import { Star, Right } from '@element-plus/icons-vue'
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const id = requestUrlParam1();
console.log(id)
const comicinfo = ref([])
const bid = ref(0)
const bname = ref('')
const bsrcname = ref('')
const binfo = ref('')
const bmaxno = ref(0)
const bcategory = ref('')
const bauthor = ref(0)
const bnos = ref([])
const request1 = axios.create({
  baseURL: '/api',
  timeout: 1000
})
// request1({
//     method: 'POST',
//     url: '/comicId',
//     params: {
//         comicid:id
//     }
axios({
  method: 'GET',
  url: 'http://localhost:3000/comic',
  params: {
    bid: id
  }
}).then((res => {
  console.log(res.data)
  //  comicinfo.value.push(res.data)
  //  console.log(comicinfo.value)
  //   bid.value=comicinfo.value[0].bid
  //   bname.value=comicinfo.value[0].bname
  //   bmaxno.value=comicinfo.value[0].bmaxno
  //   binfo.value=comicinfo.value[0].binfo
  //   bsrcname.value=comicinfo.value[0].bsrcname
  //   bcategory.value=comicinfo.value[0].bcategory
  //   bauthor.value=comicinfo.value[0].bauthor
  bid.value = res.data[0].bid
  bname.value = res.data[0].bname
  bsrcname.value = res.data[0].bsrcname
  binfo.value = res.data[0].binfo
  bmaxno.value = res.data[0].bmaxno
  bcategory.value = res.data[0].bcategory
  bauthor.value = res.data[0].bauthor
  bnos.value = res.data[0].no
  console.log(bnos.value)
}))
</script>
<template>
  <div class="comicBg">

    <div class="comicBlock">

      <el-row class="img">
        <el-col :span="20">
          <div class="comicImg">
            <el-image :src="imgUrl + '/' + bsrcname + '.jpg'" :preview-src-list="[imgUrl]" :initial-index="1"
              fit="scale-down" />
          </div>
        </el-col>
      </el-row>

      <div class="comicdeCon">
        <h1 class="comicTitle">{{ bname }}</h1>
        <div class="dashed"></div>
        <p class="comicInfo">{{ bauthor }}</p>
        <p class="comicInfo">{{ bcategory }}</p>
        <p class="comicInfo">{{ bmaxno }}</p>
        <div class="dashed"></div>
        <p class="comicdetail">{{ binfo }}</p>
        <el-button type="primary" size="large" :icon="Right">开始阅读</el-button>
        <el-button type="warning" size="large" :icon="Star">订阅</el-button>
      </div>

    </div>

    <div class="comicno">
      <span class="title">章节列表 </span>
      <el-icon color="orange">
        <List />
      </el-icon>
      <div class="comicnobody">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in bnos">
            <a class="comicChapter" href="/Reading">{{ item.noname }}</a>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<style>
.title {
  color: white;
  font-size: x-large;
  padding-left: 10%;

}

.el-col {
  margin-bottom: 2%;
}

.comicChapter {
  color: #E6E8EB;
  font-size: large;
}

.comicno {
  width: 70%;
  padding-top: 1%;
  margin-left: 15%;
  box-shadow: 0px 3px 22px #b4b3b3;
}

.comicnobody {
  margin-top: 2%;
  text-align: center;
}

.comicBlock {
  width: 100%;
  display: flex;
  margin-bottom: 2%;
}

.comicdetail {
  height: 70px;
  width: 70%;
  color: #b4b3b3;
  font-size: medium;
}

.dashed {
  margin-top: 1%;
  border-top: 2px dashed var(--el-border-color);
  width: 30%;
  margin-bottom: 1%;
}

.comicInfo {
  color: #E6E8EB;
  font-size: medium;
  margin-bottom: 1%;
}

.img {
  margin-left: 20%;
}

.comicImg {
  box-shadow: -1px 7px 22px #b4b3b3;
}

.comicTitle {
  font-size: 28px;
  color: #E6E8EB;
  margin-bottom: 1%;
}

.comicdeCon {
  height: auto;
}

.comicBg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
}

.line {
  margin-top: 2%;
  padding-bottom: 2%;
  margin-left: 10%;
  width: 80%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.el-main {
  overflow: visible !important;
  padding: 0 !important;
}
</style>