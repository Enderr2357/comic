<script setup>
import { requestUrlParam1 } from '../router';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
const imgUrl1 = new URL('../img/comicimg', import.meta.url).href
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
const search = decodeURIComponent(requestUrlParam1());
console.log(search)
const searchlist = reactive({
  name: '',
})
// window.addEventListener('setItemEvent', function (e) {
//   if (e.key = "search") {
//     console.log("search改变" + decodeURIComponent(e.newValue))
//     let str = decodeURIComponent(e.newValue)
//     searchlist.name = str
//     getDataList()
//   }
// })
watch(search, async (newValue) => {
  console.log(newValue)
})
const comiclist = ref()
const getDataList = () => {
  searchlist.name = search
  comiclist.value = []
  const params = new URLSearchParams()
  var name1 = encodeURIComponent(searchlist.name)
  params.append("name", name1)
  request.post("/GetSearch", params).then(res => {
    comiclist.value = res.data
    console.log(comiclist.value[0].bName)
  })
}

getDataList()
const turntoDetail = (bId) => {
  router.push("/Detail/" + bId)
}

</script>

<template>
  <div class="bg" v-if="comiclist != null">
    <center><span class="title">与{{ search }}相关的漫画</span></center>
    <div class="line"></div>

    <el-row>
      <el-col :span="4" v-for="item in comiclist">
        <div class="detail" @click="turntoDetail(item.bId)">
          <img :src="imgUrl1 + '/' + item.bSrcname + '.jpg'" alt="">
          <p>{{ item.bName }}</p>
        </div>
      </el-col>
    </el-row>

    <div class="line"></div>
  </div>
</template>

<style scoped>
.el-row {
  margin-top: 2%;
  margin-left: 18%;
  color: white;
}

.el-col {
  margin-left: 2%;
}

.title {
  color: white;
  font-size: x-large;
}

.detail:hover {
  cursor: pointer;
}

.line {
  margin-top: 2%;
  margin-left: 15%;
  width: 70%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.bg {
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
  padding-bottom: 5%;
  padding-top: 1%;
}

.el-main {
  padding: 0 !important;
}
</style>