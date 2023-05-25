<script setup>
import axios from 'axios';
import { ref,watch } from 'vue';
const imgUrl1 = new URL('../img/comicimg', import.meta.url).href

const request = axios.create({
  baseURL: '/api',
  timeout:1000
})
let imgid = ref(0) 
let imgtext = ref('')
const urlList=ref([])
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
      urlList.value.push(element)
      console.log(element)
    }
    console.log(urlList.value)
  }))
</script>
<template>
  <div class="bg">
    <div class="titlebig">欢迎使用漫画网站</div><br>
    <ul> 
      <li><el-link type="info">全部</el-link></li>
      <li><el-link type="info">国漫</el-link></li>
      <li><el-link type="info">日漫</el-link></li>
      <li><el-link type="info">校园</el-link></li>
      <li><el-link type="info">青年</el-link></li>
      <li><el-link type="info">玄幻</el-link></li>
      <li><el-link type="info">恋爱</el-link></li>
      <li><el-link type="info">武侠</el-link></li>
      <li><el-link type="info">恐怖</el-link></li>
      <li><el-link type="info">搞笑</el-link></li>
      <li><el-link type="info">都市</el-link></li>
    </ul>
    <div class="titlemid">热门更新</div><br>
    <div class="main"> 
      <el-row gutter="20">
        <el-col :span="3" v-for="item in urlList">
          <div> <a :href="'/Detail/'+item.bid">
            <el-image :src="imgUrl1+'/'+item.bsrcname+'.jpg'"></el-image>
            <div class="titlesmall">{{item.bname}}</div>
          </a>
          </div>
        </el-col>
      </el-row>
    </div><br>
    <div class="titlemid">人气排行</div><br>
    <div class="main"> 
      <el-row gutter="20">
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl7"></el-image>
            </a>
            <div class="titlesmall">赤地万里</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl8"></el-image>
            </a>
            <div class="titlesmall">回想</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl9"></el-image>
            </a>
            <div class="titlesmall">灵墟游记</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl10"></el-image>
            </a>
            <div class="titlesmall">猫之茗</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl11"></el-image>
            </a>
            <div class="titlesmall">史上最强</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl12"></el-image>
            </a>
            <div class="titlesmall">三月初三</div>
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
