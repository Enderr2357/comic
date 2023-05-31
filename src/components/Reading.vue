<script setup>
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import router, { requestUrlParam1 } from '../router';
import { ref, watch } from 'vue';
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
const arr = ref([])
const maxpage = ref(0)
const currentnoname = ref('')
const currentno = ref(0)
const flag = ref(false)
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
//获取漫画信息
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

  //获取当前话
  request({
    url: '/comicChapter',
    method: 'GET',
    params: {
      bid: bid.value,
      currentnoid: no
    }
  }).then((res => {
    console.log(res.data)
    currentnoname.value = res.data.currentNoName
    maxpage.value = res.data.maxPage
    currentno.value = res.data.currentNo

    for (var index = 1; index <= maxpage.value; index++) {
      arr.value.push(index)
    }
  }))
}))

//下一页
const next = () => {
  if (page.value == maxpage.value - 1) {
    console.log(maxpage.value)
    if (currentno.value >= bmaxno.value) {

      alert("当前已是最后一话")
      router.go(-1)

    }
    // currentno.value = currentno.value + 1
    page.value = 0
    currentno.value = currentno.value + 1
    arr.value = []
    router.push("/Reading/"+bid.value+"/"+currentno.value)
    
    // request({
    //   url: '/comicChapter',
    //   method: 'GET',
    //   params: {
    //     bid: bid.value,
    //     currentnoid: currentno.value
    //   }
    // }).then((res => {
    //   console.log(res.data)
    //   currentnoname.value = res.data.currentNoName
    //   maxpage.value = res.data.maxPage
    //   currentno.value = res.data.currentNo

    //   for (var index = 1; index <= maxpage.value; index++) {
    //     arr.value.push(index)
    //   }
    // }))

  }
  else { page.value = page.value + 1 }
  watch(currentnoname,(newValue)=>{
    console.log(newValue)
  })
  //上一页
}
const previous = () => {
  if (page.value <= 0) {
    alert("当前已是第一页")
  }
  else {
    page.value = page.value - 1
  }


}
const TurnTopage = (value) => {
  console.log(value)
  page.value = value
}
</script>
<template>
  <div class="bg">
    <div class="smallhead">
      <span>您当前位置：</span>
      <a :href="'/Detail/' + bid">{{ bname }}</a>
      <span>>{{ currentnoname }}</span>
    </div>
    <div>
      <span class="title">《{{ bname }}》- {{ currentnoname }}</span>
    </div>
    <div class="line"></div>
    <div class="img">
      <img :src="imgUrl1 + '/' + bsrcname + '/' + currentno + '/' + page + '.jpg'" alt=""
        style="height: 1500px;width: 1000px;">
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
        <div class="gd">
          <el-dropdown-menu v-for="value in arr" max-height=5 size="small">
            <el-dropdown-item @click="TurnTopage(value - 1)">{{ value }}</el-dropdown-item>
          </el-dropdown-menu>
        </div>
      </template>
    </el-dropdown>
  </div>
</template>



<style scoped>
.line {
  margin-top: 1%;
  margin-bottom: 2%;
  margin-left: 10%;
  width: 80%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.gd {
  overflow-y: scroll;
  height: 200px;
}

.smallhead {
  padding-top: 2%;
  margin-left: 4%;
  color: white;
}

.el-dropdown-item {
  overflow: scroll;
  max-height: 200px;
  overflow-x: hidden;
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
</style>