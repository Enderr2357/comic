<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { requestUrlParam1 } from '../router';
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const categoryinfo=ref([])
const comicinfo=ref([])
const message=ref('')
const receiveid=requestUrlParam1()
const data=ref('')
//接受其他页面带参跳转的分类页面

const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})
//类别改变
const factoryChange=(name,index)=>{
  comicinfo.value=[]
 
  console.log(index)
  request({
  url:'/comicName',
  methods:'GET',
  params:{
    comicname:index
  }
}).then((res=>{
  console.log(res.data)
  res.data.forEach(element => {
    comicinfo.value.push(element)
  });
  console.log(comicinfo.value)
}))
}
if(receiveid!=0){
  data.value=receiveid
  request({
  url:'/comiccategory',
  methods:'GET',
  params:{
    data: data.value
  }
}).then((res=>{
  console.log(res.data)
  const c1=res.data
  message.value=c1.cateName
}))
}
else{
  data.value='all'
}
//获取初始化分类
request({
  url:'/comiccategory',
  methods:'GET',
  params:{
    data:'all'
  }
}).then((res=>{
  console.log(res.data)
  res.data.forEach(element => {
    categoryinfo.value.push(element)
  });
  console.log(categoryinfo.value)
}))
//获取漫画
request({
  url:'/comicName',
  methods:'GET',
  params:{
    comicname:data.value
  }
}).then((res=>{
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
              <el-menu-item index="1" @click="factoryChange('全部','all')">
                <el-icon>
                  <House />
                </el-icon>
                <span> 全部 </span>
              </el-menu-item>
              <el-menu-item v-for=" item in categoryinfo" :index=index @click="factoryChange(item.cateName,item.cateId)">
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
              <a :href="'/Detail/'+item.bId">
                <el-image :src="imgUrl+'/'+item.bSrcname+'.jpg'"></el-image>
              </a>
            </el-col>
            <el-col :span="16">
              <span class="midtitle"> {{item.bName}} </span><br>
              <span class="comicInfo"> {{item.bAuthor}}</span><br>
              <span class="comicInfo"> {{item.bMaxno}}</span>
              <p class="comicdetail">{{item.bInfo}}</p>
            </el-col>
            <div class="line"></div>
          </el-row>
        </div>

      </el-main>
    </el-container>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<!-- <script>
import axios from 'axios';
import { requestUrlParam1 } from '../router';
const request1 = axios.create({
  baseURL: '/api',
  timeout: 1000
})
export default {
  data() {
    return {
      message: '全部',
      ctgname: [],
      cid: 0,
      sendid: requestUrlParam1(),
      comicinfo: {},
      active: false
    }
  },
  methods: {
    factoryChange(name, index) {
      this.comicinfo = {}
      this.message = name
      if (name == '全部' && index == -1) {
        // axios({
        //     url: 'http://localhost:3000/comic',
        //      method: 'GET',
        //      params: {
        //       }
        request({
          url:'/comiccategory',
          method:'GET',
          params:{

          }
        }).then((res => { 
          //console.log(res.data[0].category)
          for (let index = 0; index < res.data.length; index++) {
            const element = res.data[index];
            this.comicinfo[index] = element;
          }
        }))
      }
      else {
        console.log("初始化进来了")
        axios({
          url: 'http://localhost:3000/category',
          method: 'GET',
          params: {
            id: index + 1
          }
        }).then((res => {
          console.log(res.data)
          this.cid = res.data[0].id
          this.message = res.data[0].category
          axios({
            url: 'http://localhost:3000/comic',
            method: 'GET',
            params: {
              bcategory: this.cid
            }
          }).then((res => {
            console.log(res.data)
            if (res.data.length > 0) {
              for (let index = 0; index < res.data.length; index++) {
                const element = res.data[index];
                this.comicinfo[index] = element
              }
              //console.log(this.comicinfo)
            }
          }))
        }))
      }
    }
  },
  created() {

    console.log("点进来的")
    axios({
      url: 'http://localhost:3000/category',
      method: 'GET',
      data: {
      }
    }).then((res => {
      console.log(res.data[0].category)
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index].category;
        this.ctgname[index] = element;
      }
    }))

    if (this.sendid != 0) {
      console.log("传进来的" + this.sendid)
      this.sendid = Number(this.sendid)

      axios({
        url: 'http://localhost:3000/category',
        method: 'GET',
        params: {
          id: this.sendid
        }
      }).then((res => {
        console.log(res.data)


        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          this.ctgname[index] = element.category
        }
        console.log(this.ctgname[0])
        this.factoryChange(this.ctgname[0].category, this.sendid - 1)
      }))
    }
    else {
      
        axios({
          url: 'http://localhost:3000/comic',
          method: 'GET',
          params: {
          }
        }).then((res => {
          console.log(res.data)
          if (res.data.length > 0) {
            for (let index = 0; index < res.data.length; index++) {
              const element = res.data[index];
              this.comicinfo[index] = element
            }
            //console.log(this.comicinfo)
          }
        }))
     
    }
    
  }
}
</script> -->



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

li.is-active {
  background-color: darkorange !important;
}
</style>
