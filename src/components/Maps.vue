<template>
  <div>
    <GoogleMap :api-key="mapsapi" style="width: 1000px; height: 1000px" :center="center" :zoom="12">
      <!-- <Marker v-for="marker in markers" :key="marker.id" :options="{ position: marker.position }" /> -->
      <Marker :options=" {position: cafe1}" />
      <Marker :options=" {position: cafe2}" />
      <Marker :options=" {position: cafe3}" />
      <Marker :options=" {position: cafe4}" />
      <Marker :options=" {position: cafe5}" />
      <Marker :options=" {position: cafe6}" />
      <Marker :options=" {position: cafe7}" />
      <Marker :options=" {position: cafe8}" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
// import { SearchBar } from "./SearchBar.vue"
// import { geocodeResponse } from "./SearchBar.vue"
// import { SearchBar } from "./SearchBar.vue"

export default defineComponent({
  components: { GoogleMap, Marker },
  // props: {
  //   apiKey: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY,
  // },
  data() {
    return {
      center: { lat: 33.980377, lng: -117.376339 },
      mapsapi: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY,
      // markers: [33.9772213, -117.3815694],
      // Back To The Grind
      cafe1: { lat: 33.981357, lng: -117.372894 },
      // Cafe de Fleur
      cafe2: { lat: 33.9772213, lng : -117.3815694 },
      // Mi cafecito
      cafe3: { lat : 33.9844779, lng : -117.3746805},
      // Coffeecito House
      cafe4: { lat: 33.978948, lng : -117.3794577 },
      // Coffee Court Bistro
      cafe5: { lat: 33.979602, lng : -117.374742 },
      // Molinos Coffee
      cafe6: { lat: 33.9826127, lng : -117.3734453 },
      // Arcade Downtown
      cafe7: { lat: 33.981135, lng : -117.3749064 },
      // Rad Coffee
      cafe8: { lat: 33.982863, lng : -117.3779491},
    };
  },
  methods: {
    async updateCenter(response) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${this.mapsapi}&query=cafe+in+${encodeURIComponent(city)}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.results.length > 0) {
            this.center = data.results[0].geometry.location;
            this.markers = data.results.map(result => ({
              id: result.id,
              position: result.geometry.location,
            }));
          }
        }
      } catch (error) {
        console.error("Error updating center:", error);
      }
    },
  },
  setup() {

  }
  // watch: {
  //   center(response) {
  //     // You can perform additional actions when the center changes
  //   },
  // },
});
</script>