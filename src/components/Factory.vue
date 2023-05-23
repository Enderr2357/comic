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
          <el-col :span="3">
            <a href="/Detail">
              <el-image :src="imgUrl"></el-image>
            </a>
          </el-col>
        </div>

      </el-main>
    </el-container>
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
const imgUrl = new URL('../img/comicimg/biaorenfm.jpg', import.meta.url).href
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

.top {
  color: darkorange;
}

.topline {
  width: 85%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.line {
  width: 50%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.main {}

.aside {
  margin-left: 15%;
  padding-top: 1%;
}

.title {
  font-size: 25px;
  color: white;
}

.midtitle {
  font-size: 20px;
  color: white;
}

.el-main {
  padding: 0 !important;
}
</style>
