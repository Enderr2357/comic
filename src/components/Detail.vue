<script setup>
  const imgUrl= new URL('../img/comicimg/biaorenfm.jpg',import.meta.url).href
</script>
<template>
  <div class="comicInfo">
    <div class="comicImg">
      <el-image :src="imgUrl"
        style="width: 100px; height: 100px"
        :zoom-rate="1.2"
        :preview-src-list="[imgUrl]"
        :initial-index="1"
        fit="cover" 
        />
    </div>
  </div>
</template>
<style scoped>
.image-slot{
   font-size: 30px;
}
.el-image{
  width: 100%;
  height: 200px;
}
</style>