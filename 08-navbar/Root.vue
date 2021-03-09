<template>
  <nav class="fixed-nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/settings">Settings</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};

export const getNavHeightPx = () => 40;
</script>
<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  width: 100vw;
  background-color: lightcyan;
  display: flex;
  align-items: center;
}
</style>
