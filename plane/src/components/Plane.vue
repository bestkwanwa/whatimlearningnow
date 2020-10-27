<template>
  <container>
      <sprite :texture='planeImg'></sprite>
  </container>
</template>

<script>
import planeImg from '../assets/plane.png';
export default {
  components:{
  },
  setup() {
      return {
          planeImg
      }
  },
};
</script>

<style  scoped>
</style>