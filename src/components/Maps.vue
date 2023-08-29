<template>
  <GoogleMap :api-key="mapsapi" style="width: 500px; height: 500px; flex: 1" :center="center" :zoom="12">
  <Marker :options="{ position: center }" />
</GoogleMap>
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

<!-- <style scoped>
.map-container {
  flex: 1; /* Adjust the size of the map */
  border-radius: 15px; /* Add a curved border around the map */
  overflow: hidden; /* Hide any overflow from map content */
  margin-left: 20px; /* Add some spacing from the search bar */
  background-color: #ffffff; /* Optional: set the background color of the map */
}
</style> -->