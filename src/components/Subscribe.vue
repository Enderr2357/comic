<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
const router = useRouter();
const user = ref(localStorage.getItem("User"))
const subComic = ref([])
console.log("userid=" + user.value)
request({
  url: "/Subscribe",
  method: 'GET',
  params: {
    uid: user.value
  }
}).then(res => {
  console.log(res.data)
  res.data.forEach(element => {
    subComic.value.push(element)
  });
})
const turnDetail = (bId) => {
  router.push("/Detail/" + bId)
}
</script>
<template>
  <div class="mainbox">
    <span class="titleu">我的订阅</span>
    <!-- <div class="empty">
                  <img src="../img/空.png" alt="">
                </div>
                <span class="emptytext">当前没有订阅任何漫画●︿●</span> -->
    <div class="body">
      <el-row :gutter="20">
        <el-col :span="5" v-for="item in subComic">
          <div class="detail" @click="turnDetail(item.bId)">
            <img :src="imgUrl + '/' + item.bSrcname + '.jpg'" alt="">

            <p>{{ item.bName }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<style scoped>
.detail {
  cursor: pointer;
}

.body {
  margin-top: 2%;
  margin-left: 10%;
}

.row {
  margin-top: 2%;
  padding-bottom: 5%;
}
</style>