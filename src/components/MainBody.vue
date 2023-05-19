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
    <div class="titlemid">热门更新</div>
    <div>
      <el-link href="./Detail">这里是漫画</el-link>
    </div>
  <div>
    <a href="/Detail">
      <el-image :src="imgUrl"></el-image>
    </a>
  </div>
  </div>
</template>
<script setup>
const imgUrl = new URL('../img/comicimg/biaorenfm.jpg', import.meta.url).href
</script>
<style>
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
}

.titlebig {
  font-size: xx-large;
  text-align: center;
  color: white;
}

.titlemid {
  margin-left: 15%;
  color: white;
  font-size: x-large;
}

.el-main {
  padding: 0 !important;
}
</style>