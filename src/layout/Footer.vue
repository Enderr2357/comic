<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const TurnMain = () => {
  router.push("/Main")
}
</script>
<template>
  <div class="footer">
    <p class="foottitle"><span>关于我们 | 联系我们 | </span><span class="tomain" @click="TurnMain">返回首页
      </span></p>
  </div>
</template>
<style>
.foottitle :hover {
  cursor: pointer;
}

.footer {
  background-color: #000000;
  height: 100%;
  text-align: center;
}

.foottitle {
  padding-top: 2%;
  color: orange;
}

.el-footer {

  --el-footer-height: 60px;
  padding: 0 !important;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 250px;
}
</style>