<template>
  <div>
    <Head></Head>
    <router-view></router-view>
  </div>
</template>
<script>
import Head from './layout/Head.vue';
import MainHead from './components/MainFoot.vue';
import MainBody from './components/MainBody.vue';
export default {

  data() {
  return {
    message:'hello'
  }
  },
  components: {
    MainHead,MainBody,Head
  }
}
</script>
<style scoped>

</style>