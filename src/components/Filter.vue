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
  import { ref, onMounted } from 'vue';
  import { db } from '../firebaseResources'; // Import the db instance from your firebaseResources.js file
  import { query, collection, where } from 'firebase/firestore'
  
  export default {
    data() {
      return {
        city: '', // User-selected city
        filter: '', // User-selected filter (e.g., wifi, tea)
        cafeDataFromFirebase: [] // Café data from Firebase
      };
    },
    async created() {
    try {
      this.cafeDataFromFirebase = await this.fetchCafeDataFromFirestore(this.city);
    } catch (error) {
      console.error('Error fetching cafe data:', error);
    }
  },
    methods: {
      async fetchCafeDataFromFirestore(city) {
        const snapshot = await query(collection(db, 'cafes'), where('city', '==', city));
        const cafes = [];
        snapshot.forEach(doc => {
          cafes.push({ id: doc.id, ...doc.data() });
        });
        return cafes;
      }
    },
    computed: {
      filteredCafes() {
        // Filter out Starbucks and Coffee Bean
        const filteredCafes = this.cafeDataFromFirebase.filter(cafe => {
          const lowerCaseName = cafe.name.toLowerCase();
          return !(lowerCaseName.includes('starbucks') || lowerCaseName.includes('coffee bean'));
        });
  
        // Sort the cafes based on the selected filter
        if (this.filter === 'Wifi') {
          filteredCafes.sort((a, b) => b.hasWifi - a.hasWifi);
        } else if (this.filter === 'Tea available') {
          filteredCafes.sort((a, b) => b.hasTea - a.hasTea);
        }
  
        return filteredCafes;
      }
    }
  };
  </script>
  


<!-- export default {
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
  }; -->