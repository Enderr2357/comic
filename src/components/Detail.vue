<script setup>
  const imgUrl= new URL('../img/comicimg/biaorenfm.jpg', import.meta.url).href
</script>
<template>
  <div class="comicInfo">
    <div class="comicImg">
      <img :src="imgUrl" alt="">
    </div>
  </div>
</template>
<style scoped>

</style>