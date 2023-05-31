<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {requestUrlParam1 } from '../router';
import { Star, Right } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { method } from 'lodash';
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const id = requestUrlParam1();
console.log(id)
const router=useRouter();
const chapterinfo = ref([])
const comicinfo = ref([])
const bid = ref(0)
const bname = ref('')
const bsrcname = ref('')
const binfo = ref('')
const bmaxno = ref(0)
const bcategory = ref('')
const bauthor = ref(0)
const cateName=ref('')
const request1 = axios.create({
  baseURL: '/api',
  timeout: 10000
})
const sub=ref(false)
const subtext=ref('订阅')
const login=localStorage.getItem('login')

request1({
  method: 'POST',
  url: '/comicId',
  params: {
    comicid: id
  }
}).then((res => {
  console.log(res.data)
  comicinfo.value.push(res.data)
  console.log(comicinfo.value)
  bid.value = comicinfo.value[0].bid
  bname.value = comicinfo.value[0].bname
  bmaxno.value = comicinfo.value[0].bmaxno
  binfo.value = comicinfo.value[0].binfo
  bsrcname.value = comicinfo.value[0].bsrcname
  bcategory.value = comicinfo.value[0].bcategory
  bauthor.value = comicinfo.value[0].bauthor

  request1({
    url:"/comiccategory",
    method:"GET",
    params:{
      data:bcategory.value
    }
  }).then(res=>{
    console.log(res.data.cateName)
    cateName.value=res.data.cateName
  })

  if(login==1){
  console.log("检查订阅")
  const user=ref(localStorage.getItem("User"))
  console.log(user)
  request1({
    url:"/CheckSub",
    method:"GET",
    params:{
      uid: user.value,
      bid:bid.value
    }
  }).then(res=>{
    console.log("订阅结果")
    console.log(res.data.bid)
    if(res.data.bid>0){
        sub.value=true
        subtext.value="已订阅"
    }
  })
}
}))
console.log(bid.value)
request1({
  method: 'GET',
  url: '/comicChapter',
  params: {
    id: id
  }
}).then((res => {
  console.log("下面是章节")
  console.log(res.data)
  res.data.forEach(element => {
    chapterinfo.value.push(element)
  });
}))


const subscribe=()=>{
  if(login==1){
    const user=ref(localStorage.getItem("User"))
  console.log(user)
    if(sub.value==true){
      alert("已订阅")
    }
    else{
      request1({
        url:'/CheckSub',
        method:'POST',
        params:{
          uid: user.value,
          bid:bid.value,
          sub:"1"
        }
    }).then(res=>{
      console.log("订阅结果为"+res.data)
      if(res.data==1){
        subtext.value="已订阅"
      }
    })
    }
  }
  else{
    alert("请先登录")
  }
}
const startRead=()=>{
  router.push("/Reading/"+bid.value+"/"+1)
}
const turnread=(currentNo)=>{
  router.push("/Reading/"+bid.value+"/"+currentNo)
}
</script>
<template>
  <div class="comicBg">
    <div class="comicBlock">
      <div class="comicImg">
        <el-image :src="imgUrl + '/' + bsrcname + '.jpg'" style="width: auto; height: auto; max-width: 100%;
                                                                      max-height: 100%;" :zoom-rate="1.2"
          :preview-src-list="[imgUrl + '/' + bsrcname + '.jpg']" :initial-index="1" fit="contain" />
      </div>
      <div class="comicdeCon">
        <h1 class="comicTitle">{{ bname }}</h1>
        <div class="dashed"></div>
        <p class="comicInfo">作者: {{ bauthor }}</p>
        <p class="comicInfo">类别: {{ cateName }}</p>
        <p class="comicInfo">最新话: 第{{ bmaxno }}话</p>
        <div class="dashed"></div>
        <p class="comicdetail">{{ binfo }}</p>
          <el-button type="primary" size="large" :icon="Right" class="start" @click="startRead()">开始阅读</el-button>
        <el-button type="warning"  size="large" :icon="Star" @click="subscribe()">{{subtext}}</el-button>
      </div>
    </div>
    <div class="comicno">
      <span class="title">章节列表 </span>
      <el-icon color="orange">
        <List />
      </el-icon>
      <div class="midline"></div>
      <div class="comicnobody">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in chapterinfo">
            <a class="comicChapter"  @click="turnread(item.currentNo)">{{ item.currentNoName }}</a>
          </el-col>
        </el-row>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped>
.start {
  margin-right: 1%;
}

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
  padding-bottom: 1%;
  margin-left: 15%;
  box-shadow: 0px 3px 22px #b4b3b3;
}

.comicnobody {
  margin-top: 2%;
  text-align: center;
}

.comicBlock {
  width: auto;
  display: flex;
  margin-bottom: 2%;
  margin-left: 15%;
}

.comicdetail {
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
  width: 70%;
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
  width: 70%;
}

.comicdeCon {
  width: 70%;
  height: auto;
  margin-left: 3%;
}

.comicBg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
  padding-top: 1%;
  padding-bottom: 3%;
}

.midline {
  margin-top: 1%;
  margin-left: 9%;
  width: 82%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.line {
  margin-top: 2%;
  padding-bottom: 2%;
  margin-left: 10%;
  width: 80%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}
</style>