<template>
  <div id="app">
    <Map />
  </div>
</template>

<script>
import Map from "./components/Map.vue";
export default {
  name: "App",
  components: { Map },
};
</script>

<style>
body {
  background: linear-gradient(87deg, #fdf582, #07fff3);
}
</style>
