<template>
  <l-map :zoom="17" :center="driveLatLng">
    <l-tile-layer :url="mapData.url" :attribution="mapData.attribution" />
    <l-moving-rotated-marker
      ref="driveMarker"
      :lat-lng="driveLatLng"
      :rotationAngle="driveRotationAngle"
      :duration="4000"
      :icon="icon"
    />
    <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
  </l-map>
</template>

<script>
import * as L from "leaflet";
import { LMap, LTileLayer, LIconDefault, LPopup, LPolyline } from "vue2-leaflet";
import LMovingRotatedMarker from "vue2-leaflet-moving-rotated-marker";
const iconUrl =
  "data:image/png;base64,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";
const drivePath = [
  { latLng: [-6.227283333357373, 106.79816007614136], bearing: 14.9596496434823 },
  { latLng: [-6.226419424737475, 106.79823517799376], bearing: 14.9596496434823 },
  { latLng: [-6.225427527902821, 106.79823517799376], bearing: 14.9596496434823 },
  { latLng: [-6.224936911571763, 106.79824590682983], bearing: 14.9596496434823 },
  { latLng: [-6.2239983399225345, 106.79819762706757], bearing: 14.9596496434823 },
  { latLng: [-6.222830455813169, 106.79813325405121], bearing: 14.9596496434823 },
  { latLng: [-6.221011964429899, 106.79807424545287], bearing: 14.9596496434823 },
  { latLng: [-6.220393355956227, 106.79804742336273], bearing: 14.9596496434823 },
  { latLng: [-6.218852164437753, 106.79811716079712], bearing: 14.9596496434823 },
  { latLng: [-6.2177589289609765, 106.79815471172331], bearing: 14.9596496434823 },
  { latLng: [-6.215641778673433, 106.79803133010864], bearing: 14.9596496434823 },
  { latLng: [-6.213775266315106, 106.79784893989563], bearing: 14.9596496434823 },
  
];
var list=[];
drivePath.map(function(value, key) {
     list.push(value.latLng);
   });
export default {
  components: {
    LMap,
    LTileLayer,
    LIconDefault,
    LPopup,
    LPolyline,
    LMovingRotatedMarker,
  },
  data() {
    return {
      icon: L.icon({
        iconUrl: iconUrl,
        iconSize: [35, 35],
        iconAnchor: [20, 20],
        popupAnchor: [0, -25],
      }),
      center: L.latLng(-6.21353795212654, 106.563973724842),
      mapData: {
        attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
        url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
      },
      polyline: {
          latlngs: list,
          color: 'green'
      },
      driveLatLng: L.latLng(drivePath[0].latLng),
      driveRotationAngle: drivePath[0].bearing,
      drivePath: drivePath.slice(),
      driveMarker: null,
    };
  },
  methods: {
    simulate() {
      if (!this.drivePath.length) {
        this.$refs.driveMarker.mapObject.setLatLng(
          L.latLng(drivePath[0].latLng)
        );
        this.drivePath = drivePath.slice();
        return;
      }
      let point = this.drivePath.shift();
      this.driveLatLng = L.latLng(point.latLng);
      this.driveRotationAngle = point.bearing;
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
</style>