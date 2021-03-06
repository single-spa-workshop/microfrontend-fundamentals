<template>
  <div>
    <!-- <LeakyChild /> -->
    <ScopedChild />
  </div>
</template>
<script>
// import LeakyChild from './LeakyChild.vue'
import ScopedChild from "./ScopedChild.vue";

export default {
  components: {
    // LeakyChild,
    ScopedChild,
  },
};
</script>
