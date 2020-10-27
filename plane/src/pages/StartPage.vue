<template>
  <container>
    <sprite :texture="startPageImg"></sprite>
    <sprite
      :texture="startBtn"
      x="225"
      y="515"
      @click="onClick"
      :interactive="true"
    ></sprite>
  </container>
</template>

<script>
import startPageImg from "../assets/start_page.jpg";
import startBtn from "../assets/startBtn.png";
export default {
  setup(_, { emit }) {
    const onClick = () => {
      emit("change-page", "GamePage");
    };
    return {
      onClick,
      startPageImg,
      startBtn,
    };
  },
};
</script>

<style  scoped>
</style>