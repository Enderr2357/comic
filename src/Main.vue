<template>
  <div>
    <MainHead></MainHead>
    <MainBody></MainBody>
  </div>
</template>
<script>
import MainHead from './components/MainHead.vue';
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