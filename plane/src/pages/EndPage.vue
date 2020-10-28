<template>
  <container>
    <sprite :texture="endPageImg"></sprite>
    <sprite
      :texture="restartBtn"
      x="225"
      y="515"
      @click="onClick"
      :interactive="true"
    ></sprite>
  </container>
</template>

<script>
import endPageImg from "../assets/end_page.jpg";
import restartBtn from "../assets/restartBtn.png";
export default {
  setup(_, { emit }) {
    const onClick = () => {
      emit("change-page", "GamePage");
    };
    return {
      onClick,
      endPageImg,
      restartBtn,
    };
  },
};
</script>

<style  scoped>
</style>