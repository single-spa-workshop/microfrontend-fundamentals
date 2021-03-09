<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import { getNavHeightPx } from "./Root.vue";

export default {
  data() {
    return {
      styles: {
        marginTop: getNavHeightPx() + "px",
      },
    };
  },
};
</script>
