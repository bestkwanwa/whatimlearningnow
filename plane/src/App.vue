<template>
  <container>
    <page @change-page="handleChangePage"></page>
  </container>
</template>

<script>
import { ref, computed } from "vue";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
export default {
  name: "App",
  components: {
    // StartPage,
  },
  setup() {
    const currentPageName = ref("GamePage");
    const handleChangePage = (pageName) => {
      currentPageName.value = pageName;
    };

    const page = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage;
      } else if (currentPageName.value === "GamePage") {
        return GamePage;
      }
    });

    return {
      page,
      handleChangePage, 
    };
  },
};
</script>

<style>
</style>
