<template>
  <div class="__speedPanel">
    <VueSpeedMeter
      ref="customCurrentValue"
      :customStyle="customStyle"
      :customCurrentValue="speed"
      :animationTime="animationTime"
    />
    <div class="__chartPanel">
      <div class="__speedTitle">
        <b-avatar variant="dark" src="speed.png"></b-avatar>
        <p>Speed Chart</p>
        <div class="__speedDigit">
          <a>{{ speed }} </a>
        </div>
        <p>Km/H</p>
      </div>
      <div class="__chartArea">
        <trend
          :data="arr"
          :gradient="['#fff', '#42b98', '#2c3e50']"
          :padding="8"
          :radius="8"
          :stroke-width="1"
          auto-draw
          smooth
        >
        </trend>
      </div>
    </div>
  </div>
</template>

<script>
import VueSpeedMeter from "vue-speed-meter";
const speedR = [50,60,70,60,90,100,80,60,50,80,77,90]
export default {
  components: {
    VueSpeedMeter,
  },
  data() {
    return {
      customStyle: {
        size: 250,
      },
      animationTime: 100,
      customCurrentValue: null,
      speed: 0,
      arr: [],
    };
  },
  methods: {
    simulate() {
      const speedCar = this;
      const speedArray = this;
      const arrData = [];
      const arr = this;
      const iterator = speedR.values();
      setInterval(() => {
        speedCar.speed = iterator.next().value;
        arrData.push(speedCar.speed);
        speedArray.arr = arrData;
      }, 5000);
    },
  },
  mounted() {
    setInterval(() => {
      this.simulate();
    }, 5000);
  },
};
</script>

<style>
.__speedPanel {
  display: flex;
  align-items: center;
  background-color: rgba(235, 16, 16, 0.123);
  width: 600px;
  height: 300px;
  padding: 25px;
  overflow: hidden;
}
.__chartPanel {
  background-color: rgba(14, 15, 15, 0.377);
  margin-left: 30px;
  height: 250px;
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 800px;
}
.__speedTitle p {
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.877);
  font-size: 10px;
  margin-left: 15px;
  text-align: center;
  text-decoration: underline;
}
.__speedTitle {
  display: flex;
  padding: 5px;
  overflow: hidden;
  background-color: rgb(230, 231, 214);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
  height: 60px;
}
.__speedDigit {
  margin-left: 15px;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: rgba(1, 29, 22, 0.877);
  background: linear-gradient(78deg, #0000002d, #ed4545);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  padding: 5px;
}
</style>