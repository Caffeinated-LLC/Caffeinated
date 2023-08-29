<template>
    <div>
      <h2>Café Results</h2>
      <label for="filter">Select Filter:</label>
      <select v-model="filter" id="filter">
        <option value="wifi">Wifi</option>
        <option value="tea">Tea available</option>
      </select>
      <ul>
        <li v-for="cafe in filteredCafes" :key="cafe.id">{{ cafe.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  
  export default {
    data() {
      return {
        city: '', // User-selected city
        filter: '', // User-selected filter (e.g., relevance, rating)
        cafeLocations: [], // Fetched café locations from Google Places API
        cafeDataFromFirebase: [] // Café data from Firebase
      };
    },
    async created() {
      this.cafeLocations = await fetchCafeLocations(this.city);
      this.cafeDataFromFirebase = await fetchCafeDataFromFirebase(this.city);
    },
    computed: {
      filteredCafes() {
        // Combine café data from both sources
        const allCafes = [...this.cafeLocations, ...this.cafeDataFromFirebase];
  
        // Filter out Starbucks and Coffee Bean
        const filteredCafes = allCafes.filter(cafe => {
          const lowerCaseName = cafe.name.toLowerCase();
          return !(lowerCaseName.includes('starbucks') || lowerCaseName.includes('coffee bean'));
        });
  
        // Apply user-selected filter
        return filteredCafes.filter(cafe => cafe.characteristics.includes(this.filter));
      }
    }
  };
  </script>