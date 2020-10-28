<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <EnemyPlane
      v-for="(enemyPlane, index) in enemyPlanes"
      :key="index"
      :x="enemyPlane.x"
      :y="enemyPlane.y"
    ></EnemyPlane>
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script>
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import Bullet from "../components/Bullet";
import { usePlane } from "../game/plane";
import { useEnemyPlane } from "../game/enemyPlane";
import { useBullet } from "../game/bullet";
import {useFight} from '../game/fight';
export default {
  components: {
    Map,
    Plane,
    EnemyPlane,
    Bullet,
  },
  setup(_,{emit}) {
    // vue3 composition api
    const { bullets, addBullet } = useBullet();
    const { planeInfo } = usePlane({
      attack(info) {
        addBullet(info);
      },
    });
    const { enemyPlanes } = useEnemyPlane();
    useFight({
      plane:planeInfo,
      enemyPlanes,
      bullets,
      gameOver(){
        emit('change-page','EndPage')
      }
    })

    return {
      planeInfo,
      enemyPlanes,
      bullets,
    };
  },
};
</script>

<style  scoped>
</style>