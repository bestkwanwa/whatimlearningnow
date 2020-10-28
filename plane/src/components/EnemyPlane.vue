<template>
  <container>
      <sprite :texture='enemyPlaneImg'></sprite>
  </container>
</template>

<script>
import enemyPlaneImg from '../assets/enemy.png';
export default {
  components:{
  },
  setup() {
      return {
          enemyPlaneImg
      }
  },
};
</script>

<style  scoped>
</style>