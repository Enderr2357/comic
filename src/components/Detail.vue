<script setup>
import { requestUrlParam1 } from '../router';
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const name = requestUrlParam1();
console.log(name)
</script>
<template>
  <div class="comicBg">
  <div class="comicBlock">
    <div class="comicImg">
      <el-image :src="imgUrl+'/'+name+'.jpg'"
        style="width: 100%; height: 100%"
        :zoom-rate="1.2"
        :preview-src-list="[imgUrl]"
        :initial-index="1"
        fit="cover" 
        />
    </div>
    <div class="comicdeCon">
      <h1 class="comicTitle">镖人</h1>
      <p class="comicInfo">作者：新漫画</p>
      <p class="comicInfo">类别：少年漫画</p>
      <p class="comicInfo">最新话：第35话</p>
       <div class="dashed"></div>
        <p class="comicdetail">“镖”，指的是受雇的武夫，其保护的目标，亦指官府悬赏通缉的目标。
          隋末民乱前夕，江湖上掀起了一阵腥风血雨，各路人马的恩怨情仇逐渐展开。（许先哲作品/新漫画出品）</p>
       </div>
    </div>
   
          
  </div>
</template>

<style>
.image-slot {
  font-size: 30px;
}

.el-image {
  width: 100%;
  height: 100%;
}
.comicBlock{
  height: 40%;
  display: flex;
}
.comicdetail{
  height: 40px;
  width:100px;
  color: #b4b3b3;
}
.dashed{
  margin-top: 5%;
  border-top: 2px dashed var(--el-border-color);
  width: 50px;
  margin-bottom: 3%;
}
.comicInfo{
  color: #E6E8EB;
  font-size:14px;
  margin-bottom: 3%;
}
.comicImg{
  margin-left: 15%;
  width: 13%;
  box-shadow:-1px 7px 22px #b4b3b3;
}
.comicTitle{
 font-size:28px;
  color:   #E6E8EB;
  margin-bottom: 10%;
}

.comicdeCon {
  margin-left: 3%;
  width: auto;
  height: auto;
}
.comicBg{
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
}

.el-main {
  overflow: visible !important;
  padding: 0 !important;
}
</style>