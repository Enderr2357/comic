<script setup>
const imgUrl = new URL('../img/comicimg/biaorenfm.jpg', import.meta.url).href
</script>
<template>
  <div class="comicDetail">
  <div class="comicInfo">
    <div class="comicImg">
      <el-image :src="imgUrl" style="width: 100px; height: 100px" :zoom-rate="1.2" :preview-src-list="[imgUrl]"
      <el-image :src="imgUrl"
        style="width: 100%; height: 100%"
        :zoom-rate="1.2"
        :preview-src-list="[imgUrl]"
        :initial-index="1"
        fit="cover" 
        />
    </div>
    <div class="comicdeCon">
      <h1 class="comicTitle">镖人</h1>
    </div>
  </div>
  </div>
</template>
.image-slot {
<style>
.image-slot{
   font-size: 30px;
}

.el-image {
  width: 100%;
  height: 100%;
}
.comicInfo{
  width: 100%;
  height: 40%;
  display: flex;
}
.comicImg{
  margin-left: 6%;
  width: 15%;
  box-shadow:-1px 7px 22px #b4b3b3;
}
.comicTitle{
 font-size:28px;
  color:   #E6E8EB;
}
.comicdeCon{
  margin-left: 3%;
}
.comicDetail{
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
  }
.el-main{
  overflow: visible !important;
  padding: 0 !important;
}
</style>