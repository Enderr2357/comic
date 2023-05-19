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
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl1"></el-image>
            </a>
            <div class="titlesmall">镖人</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl2"></el-image>
            </a>
            <div class="titlesmall">百诡谈</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl3"></el-image>
            </a>
            <div class="titlesmall">刺客信条：王朝</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl4"></el-image>
            </a>
            <div class="titlesmall">凤归</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl5"></el-image>
            </a>
            <div class="titlesmall">诡水疑云</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div><a href="/Detail">
              <el-image :src="imgUrl6"></el-image>
            </a>
            <div class="titlesmall">国魂</div>
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
<script setup>
const imgUrl1 = new URL('../img/comicimg/biaorenfm.jpg', import.meta.url).href
const imgUrl2 = new URL('../img/comicimg/百诡谈.jpg', import.meta.url).href
const imgUrl3 = new URL('../img/comicimg/刺客信条：王朝.jpg', import.meta.url).href
const imgUrl4 = new URL('../img/comicimg/凤归.jpg', import.meta.url).href
const imgUrl5 = new URL('../img/comicimg/诡水疑云.jpg', import.meta.url).href
const imgUrl6 = new URL('../img/comicimg/国魂.jpg', import.meta.url).href
const imgUrl7 = new URL('../img/comicimg/赤地万里.jpg', import.meta.url).href
const imgUrl8 = new URL('../img/comicimg/回想.jpg', import.meta.url).href
const imgUrl9 = new URL('../img/comicimg/灵墟游记.jpg', import.meta.url).href
const imgUrl10 = new URL('../img/comicimg/猫之茗.jpg', import.meta.url).href
const imgUrl11 = new URL('../img/comicimg/史上最强.jpg', import.meta.url).href
const imgUrl12 = new URL('../img/comicimg/三月初三.jpg', import.meta.url).href
</script>

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
