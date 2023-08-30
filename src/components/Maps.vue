<!-- <template>
  <GoogleMap :api-key="mapsapi" style="width: 700px; height: 700px; position: absolute; right: 0 ; bottom: 0;" :center="center" :zoom="12" v-bind:options="mapStyle">
  <Marker :options="{ position: center }" />
</GoogleMap>
</template> -->

<template>
  <div class="map-container">
    <GoogleMap :api-key="mapsapi" style="width: 100%; height: 100%;" :center="center" :zoom="12" v-bind:options="mapStyle">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 33.980377, lng: -117.376339 };

    return { center };
  },
  data() {
    return {mapsapi: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY};
  },
});
</script>


<style scoped>
.map-container {
  width: 800px; 
  height: 700px; 
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 60px;
  background-color: #968282; /* Set the background color of the map container */
}
</style>