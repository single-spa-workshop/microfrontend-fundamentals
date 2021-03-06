<template>
  <p class="with-border">
    The LeakyChild component uses global css that is susceptible to naming
    collisions.
  </p>
</template>
<style>
.with-border {
  border: 3px solid blue;
  font-size: 20px;
  font-family: sans-serif;
}
</style>
