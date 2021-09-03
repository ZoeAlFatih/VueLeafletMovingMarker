<template>
  <div class="__chartContainer">
    <div>
      <Speed />
    </div>
  </div>
</template>

<script>
import Speed from "./Speed/Speed.vue";
export default {
  components: { Speed },
};
</script>

<style>
.__chartContainer {
  position: relative;
  margin-top: -600px;
  width: 600px;
  border-radius: 15px;
  height: 300px;
  overflow: hidden;
  background: linear-gradient(78deg, #ffffff2d, #fa5151);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  z-index: 1;
}
</style>

