<template>
    <div>
      <label for="filter">Select a filter: </label>
      <select v-model="filter" id="filter">
        <option value="">None</option>
        <option value="wifi">WiFi</option>
        <option value="tea">Tea</option>
      </select>
  
      <ul v-if="filter !== ''">
        <li v-for="cafe in filteredCafes" :key="cafe.id">
          {{ cafe.name }} - WiFi: {{ cafe.hasWifi ? 'Yes' : 'No' }} | Tea: {{ cafe.hasTea ? 'Yes' : 'No' }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { db } from '../firebaseResources';
  import { query, collection, where, getDocs } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        filter: '',
        cafeDataFromFirebase: []
      };
    },
    async created() {
      try {
        this.cafeDataFromFirebase = await this.fetchCafeDataFromFirestore();
      } catch (error) {
        console.error('Error fetching cafe data:', error);
      }
    },
    methods: {
      async fetchCafeDataFromFirestore() {
        const q = query(collection(db, 'cafes'));
        const queryResponse = await getDocs(q);
        const cafes = queryResponse.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return cafes;
      }
    },
    computed: {
      filteredCafes() {
        const filteredCafes = this.cafeDataFromFirebase.filter(cafe => {
          const lowerCaseName = cafe.name.toLowerCase();
          return lowerCaseName;  // !(lowerCaseName.includes('starbucks') || lowerCaseName.includes('coffee bean'));
        });
  
        filteredCafes.sort((a, b) => {
          if (this.filter === 'wifi') {
            if (b.hasWifi && !a.hasWifi) return 1;
            if (!b.hasWifi && a.hasWifi) return -1;
          } else if (this.filter === 'tea') {
            if (b.hasTea && !a.hasTea) return 1;
            if (!b.hasTea && a.hasTea) return -1;
          }
          
          // Default sorting: cafes without WiFi or tea come after those with WiFi or tea
          return (b.hasWifi || b.hasTea) - (a.hasWifi || a.hasTea);
        });
  
        // Move Starbucks and Coffee Bean cafes to the end
        const starbucksAndCoffeeBean = filteredCafes.filter(cafe => {
          const lowerCaseName = cafe.name.toLowerCase();
          return lowerCaseName.includes('starbucks') || lowerCaseName.includes('coffee bean');
        });
  
        const otherCafes = filteredCafes.filter(cafe => {
          const lowerCaseName = cafe.name.toLowerCase();
          return !lowerCaseName.includes('starbucks') && !lowerCaseName.includes('coffee bean');
        });
  
        return [...otherCafes, ...starbucksAndCoffeeBean];
      }
    }
  };
  </script>
  
  

 
