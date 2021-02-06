<template>
  <div>Vue App is mounted. Auth token {{ authToken }}</div>
</template>
<script>
export default {
  props: {
    authToken: String,
  },
};
</script>
