<template>
  <p class="with-border">
    The ScopedChild component uses global css that is susceptible to naming
    collisions.
  </p>
</template>
<style scoped>
.with-border {
  border: 3px solid blue;
  font-size: 20px;
  font-family: sans-serif;
}
</style>
