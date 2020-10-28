<template>
  <container>
      <sprite :texture='bulletImg'></sprite>
  </container>
</template>

<script>
import bulletImg from '../assets/bullet.png';
export default {
  components:{
  },
  setup() {
      return {
          bulletImg
      }
  },
};
</script>

<style  scoped>
</style>