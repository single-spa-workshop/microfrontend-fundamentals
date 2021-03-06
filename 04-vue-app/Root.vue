<template>
  <div>
    <router-link to="/vue" style="padding: 16px; display: inline-block"
      >Vue Home</router-link
    >
    <router-link to="/vue/subroute" style="padding: 16px; display: inline-block"
      >Vue Sub Route</router-link
    >
    <router-link to="/angular" style="padding: 16px; display: inline-block"
      >Leave Vue</router-link
    >
    <div>Vue app is mounted</div>
    <router-view></router-view>
  </div>
</template>
