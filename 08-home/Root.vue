<template>
  <!-- Wrong: The home page won't be below the fixed navbar -->
  <!-- <h1>Vue Home Page</h1> -->

  <!-- Correct: position home below the navbar, using cross-microfrontend imports  -->
  <BelowNav>
    <h1>Vue Home page</h1>
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
