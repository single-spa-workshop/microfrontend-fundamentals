<template>
  <!-- Wrong: The home page won't be below the fixed navbar -->
  <!-- <h1>Vue Home Page</h1> -->

  <!-- Correct: position home below the navbar, using cross-microfrontend imports  -->
  <BelowNav>
    <div class="home">
      <h1>Vue Home page</h1>
    </div>
  </BelowNav>
</template>
<script>
import { BelowNav } from "navbar";

export default {
  components: {
    BelowNav,
  },
};
</script>
<style scoped>
.home {
  background-color: lightseagreen;
}
</style>
