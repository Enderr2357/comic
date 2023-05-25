<template>
  <div class="bg">
    <el-container>

      <el-aside width="15%" class="aside">
        <span class="title">漫画分类 </span>
        <span class="top">Type</span>
        <el-row>
          <el-col :span="16">
            <el-menu active-text-color="#ffd04b" background-color="none" text-color="#fff">
              <el-menu-item index="1" @click="factoryChange('全部')">
                <el-icon>
                  <House />
                </el-icon>
                <span> 全部 </span>
              </el-menu-item>
              <el-menu-item v-for="(name, index) in ctgname" :index=index @click="factoryChange(name)">
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
        <div class="categorybox">
          <el-row>
            <el-col :span="3">
              <a href="/Detail/biaoren">
                <el-image :src="imgUrl"></el-image>
              </a>
            </el-col>
            <el-col :span="16">
              <span class="midtitle"> 镖人 </span><br>
              <span class="comicInfo"> 作者：新漫画 </span><br>
              <span class="comicInfo"> 类别：少年漫画 </span><br>
              <span class="comicInfo"> 最新话：第35话 </span>
              <p class="comicdetail">“镖”，指的是受雇的武夫，其保护的目标，亦指官府悬赏通缉的目标。
                隋末民乱前夕，江湖上掀起了一阵腥风血雨，各路人马的恩怨情仇逐渐展开。（许先哲作品/新漫画出品）</p>
            </el-col>
            <div class="line"></div>
          </el-row>
        </div>
        <div class="categorybox">
          <el-row>
            <el-col :span="3">
              <a href="/Detail/biaoren">
                <el-image :src="imgUrl"></el-image>
              </a>
            </el-col>
            <el-col :span="16">
              <span class="midtitle"> 镖人 </span><br>
              <span class="comicInfo"> 作者：新漫画 </span><br>
              <span class="comicInfo"> 类别：少年漫画 </span><br>
              <span class="comicInfo"> 最新话：第35话 </span>
              <p class="comicdetail">“镖”，指的是受雇的武夫，其保护的目标，亦指官府悬赏通缉的目标。
                隋末民乱前夕，江湖上掀起了一阵腥风血雨，各路人马的恩怨情仇逐渐展开。（许先哲作品/新漫画出品）</p>
            </el-col>
            <div class="line"></div>
          </el-row>
        </div>
        <div class="categorybox">
          <el-row>
            <el-col :span="3">
              <a href="/Detail/biaoren">
                <el-image :src="imgUrl"></el-image>
              </a>
            </el-col>
            <el-col :span="16">
              <span class="midtitle"> 镖人 </span><br>
              <span class="comicInfo"> 作者：新漫画 </span><br>
              <span class="comicInfo"> 类别：少年漫画 </span><br>
              <span class="comicInfo"> 最新话：第35话 </span>
              <p class="comicdetail">“镖”，指的是受雇的武夫，其保护的目标，亦指官府悬赏通缉的目标。
                隋末民乱前夕，江湖上掀起了一阵腥风血雨，各路人马的恩怨情仇逐渐展开。（许先哲作品/新漫画出品）</p>
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

export default {
  data() {
    return {
      message: '全部',
      ctgname: [],

    }
  },
  methods: {
    factoryChange(name) {
      this.message = name
    }
  },
  created() {
    axios({
      url: 'http://localhost:3000/profile',
      method: 'GET',
      data: {
        data: 'data'
      }
    }).then((res => {
      console.log(res.data.data[0].category)
      for (let index = 0; index < res.data.data.length; index++) {
        const element = res.data.data[index].category;
        this.ctgname[index] = element;
      }
    }))
  }
}
</script>

<script setup>
const imgUrl = new URL('../img/comicimg/biaoren.jpg', import.meta.url).href
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
