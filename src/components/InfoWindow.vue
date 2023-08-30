<template>
    <GoogleMap
      api-key="YOUR_GOOGLE_MAPS_API_KEY"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="10"
    >
      <InfoWindow :options="{ position: center, content: 'Hello World!' }" />
      <InfoWindow :options="{ position: { lat: center.lat, lng: 150.8 } }">
        Content passed through slot
      </InfoWindow>
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { GoogleMap, InfoWindow } from 'vue3-google-map'
  
  export default defineComponent({
    components: { GoogleMap, InfoWindow },
    setup() {
      const center = { lat: -33.9, lng: 151.1 }
  
      return { center }
    },
  })
  </script>