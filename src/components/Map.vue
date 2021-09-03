<template>
  <div>
    <div class="__container">
      <div class="__mapContainer">
        <Tracking />
      </div>
    </div>
    <Chart />
  </div>
</template>

<script>
import Chart from "./Chart.vue";
import Tracking from "./Tracking/Tracking.vue";
export default {
  components: {Tracking, Chart },
};
</script>

<style>
.__container {
  margin: 15px auto;
  width: 1400px;
  height: 600px;
  overflow: hidden;
  background: linear-gradient(87deg, #45eda4, #38dddb);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  border-radius: 20px;
}
.__mapContainer {
  position: relative;
  width: 1400px;
  height: 800px;
  overflow: hidden;
  background-color: rgba(0, 255, 255, 0.836);
  z-index: 1;
}
.__controlContainer {
  display: flex;
  align-items: center;
  margin: 15px auto 15px;
  max-width: fit-content;
  height: 80px;
  background: transparent;
}
</style>