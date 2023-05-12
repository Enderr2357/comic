<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import MainHead from './components/MainFoot.vue';
import MainBody from './components/MainBody.vue';
export default {

  data() {
  return {
    message:'hello'
  }
  },
  components: {
    MainHead,MainBody
  }
}
</script>
<style scoped>

</style>