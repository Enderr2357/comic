<template>
  <div class="bg">
    <el-container>

      <el-aside width="15%" class="aside">
        <span class="title">漫画分类 </span>
        <span class="top">Type</span>
        <el-row>
          <el-col :span="16">
            <el-menu active-text-color="#ffd04b" background-color="none" text-color="#fff">
              <el-menu-item index="1" @click="factoryChange('全部',-1)">
                <el-icon>
                  <House />
                </el-icon>
                <span> 全部 </span>
              </el-menu-item>
              <el-menu-item v-for="(name, index) in ctgname" :index=index @click="factoryChange(name,index)">
                <el-icon>
                  <Notebook />
                </el-icon>
                <span> {{ name }} </span>
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
              <a href="/Detail/biaoren">
                <el-image :src="imgUrl+'/'+item.bsrcname+'.jpg'"></el-image>
              </a>
            </el-col>
            <el-col :span="16">
              <span class="midtitle"> {{item.bname}} </span><br>
              <span class="comicInfo"> {{item.bauthor}}</span><br>
              <span class="comicInfo"> {{item.bmaxno}}</span>
              <p class="comicdetail">{{item.binfo}}</p>
            </el-col>
            <div class="line"></div>
          </el-row>
        </div>
        
      </el-main>
    </el-container>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script>
import axios from 'axios';
import { requestUrlParam1 } from '../router';
export default {
  data() {
    return {
      message: '全部',
      ctgname: [],
      cid: 0,
      sendid: requestUrlParam1(),
      comicinfo: {},
      active:false
    }
  },
  methods: {
    factoryChange(name, index) {
      this.comicinfo = {}
      this.message = name
      if (name == '全部' && index == -1) {
        axios({
            url: 'http://localhost:3000/comic',
             method: 'GET',
             params: {
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
          id:index+1
        }
      }).then((res => { 
        console.log(res.data)
        this.cid = res.data[0].id
        this.message=res.data[0].category
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
    if (this.sendid != null) {
      this.comicinfo = {}
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
</script>

<script setup>
const imgUrl = new URL('../img/comicimg', import.meta.url).href
</script>

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

.categorybox {
  padding-top: 2%;
  padding-left: 1%;
}

.comicInfo {
  height: 1%;
  font-size: large;
  color: white;
}

.comicdetail {
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
