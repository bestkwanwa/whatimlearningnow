<template>
  <container>
    <Map></Map>
    <Plane :x='planeInfo.x' :y='planeInfo.y'></Plane>
  </container>
</template>

<script>
import Map from '../components/Map';
import Plane from '../components/Plane';
import {reactive} from 'vue';
export default {
  components:{
    Map,
    Plane
  },
  setup() {
    const planeInfo=reactive({
      x:150,
      y:150
    })

    const speed=10
    window.addEventListener('keyup',e=>{
        switch (e.code) {
          case 'ArrowUp':
            planeInfo.y-=speed
            break;
          case 'ArrowDown':
            planeInfo.y+=speed
            break;
          case 'ArrowLeft':
            planeInfo.x-=speed
            break;
          case 'ArrowRight':
            planeInfo.x+=speed
            break;
          default:
            break;
        }
    })

    return {
      planeInfo
    }
  },
};
</script>

<style  scoped>
</style>