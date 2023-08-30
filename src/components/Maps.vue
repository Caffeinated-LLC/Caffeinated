<!-- <template>
  <GoogleMap :api-key="mapsapi" style="width: 700px; height: 700px; position: absolute; right: 0 ; bottom: 0;" :center="center" :zoom="12" v-bind:options="mapStyle">
  <Marker :options="{ position: center }" />
</GoogleMap>
</template> -->

<template>
  <div class="map-container">
    <GoogleMap :api-key="mapsapi" style="width: 100%; height: 100%;" :center="center" :zoom="16" v-bind:options="mapStyle">
      <!-- <Marker v-for="marker in markers" :key="marker.id" :options="{ position: marker.position }" /> -->
      <Marker :options=" {position: cafe1}">
      <InfoWindow :options="{ position: cafe1, content: `
          Name: <b> Back to the Grind </b> <br>
          Address: 3575 University Ave, Riverside, CA 92501, United States <br>
          Tea options available: Yes <br>
          Wifi available: No <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe2}">
      <InfoWindow :options="{ position: cafe2, content: `
          Name: <b> Cafe de Fleur </b> <br>
          Address: 4445 Magnolia Ave, Riverside, CA 92501, United States <br>
          Tea options available: No <br>
          Wifi available: Yes <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe3}">
      <InfoWindow :options="{ position: cafe3, content: `
          Name: <b> Mi cafecito </b> <br>
          Address: 3605 Market St, Riverside, CA 92501, United States <br>
          Tea options available: Yes <br>
          Wifi available: Yes <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe4}">
      <InfoWindow :options="{ position: cafe4, content: `
          Name: <b> Coffeecito House </b> <br>
          Address: 3882 12th St, Riverside, CA 92501, United States <br>
          Tea options available: No <br>
          Wifi available: No <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe5}">
      <InfoWindow :options="{ position: cafe5, content: `
          Name: <b> Coffee Court Bistro </b> <br>
          Address: 3607 Tenth St, Riverside, CA 92501, United States <br>
          Tea options available: Yes <br>
          Wifi available: No <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe6}">
      <InfoWindow :options="{ position: cafe6, content: `
          Name: <b> Molinos Coffee </b> <br>
          Address: 3660 Mission Inn Avenue, Riverside, CA 92501, United States <br>
          Tea options available: Yes <br>
          Wifi available: No <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe7}">
      <InfoWindow :options="{ position: cafe7, content: `
          Name: <b> Arcade Downtown </b> <br>
          Address: 3870 Main St #101, Riverside, CA 92501, United States <br>
          Tea options available: Yes <br>
          Wifi available: Yes <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe8}">
      <InfoWindow :options="{ position: cafe8, content: `
          Name: <b> Rad Coffee </b> <br>
          Address: 3952 University Ave, Riverside, CA 92501, United States <br>
          Tea options available: No <br>
          Wifi available: Yes <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe9}">
      <InfoWindow :options="{ position: cafe9, content: `
          Name: <b> Starbucks </b> <br>
          Address: 3311 Market St, Riverside, CA 92501, United States <br>
          Tea options available: No <br>
          Wifi available: Yes <br>
        ` }" />
      </Marker>
      <Marker :options=" {position: cafe10}">
      <InfoWindow :options="{ position: cafe10, content: `
          Name: <b> The Coffee Bean & Tea Leaf </b> <br>
          Address: 3712 Mission Inn Avenue N-4, Riverside, CA 92501, United States <br>
          Tea options available: No <br>
          Wifi available: Yes <br>
        ` }" />
      </Marker>
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
// import { SearchBar } from "./SearchBar.vue"
// import { geocodeResponse } from "./SearchBar.vue"
// import { SearchBar } from "./SearchBar.vue"

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow},
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
      // Starbucks
      cafe9: { lat: 33.9873156, lng : -117.3728061},
      // The Coffee Bean & Tea Leaf
      cafe10: { lat: 33.9828765, lng : -117.37421},
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
  margin-left: 50px;
  background-color: #968282; 
}
</style>