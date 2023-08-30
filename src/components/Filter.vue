<!-- <template>
    <div>
      <label for="filter">Select a filter: </label>
      <select v-model="filter" id="filter">
        <option value="">None</option>
        <option value="wifi">WiFi</option>
        <option value="tea">Tea</option>
      </select>
  
      <ul v-if="filter !== ''">
        <li v-for="cafe in filteredCafes" :key="cafe.id">
          {{ cafe.name }} - WiFi: {{ cafe.wifi ? 'Yes' : 'No' }} | Tea: {{ cafe.tea ? 'Yes' : 'No' }}
        </li>
      </ul>
    </div>
  </template> -->

  <template>
    <div class="filter-container">
      <label for="filter">Select a filter:</label>
      <select v-model="filter" id="filter">
        <option value="">None</option>
        <option value="wifi">WiFi</option>
        <option value="tea">Tea</option>
      </select>
  
      <ul v-if="filter !== ''" class="cafe-list">
        <li v-for="cafe in filteredCafes" :key="cafe.id">
          {{ cafe.name }} - WiFi: {{ cafe.wifi ? 'Yes' : 'No' }} | Tea: {{ cafe.tea ? 'Yes' : 'No' }}
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
      // Check if cafe.name is defined before calling toLowerCase()
      const lowerCaseName = cafe.name ? cafe.name.toLowerCase() : '';
      
      // Now you can safely use lowerCaseName
      return lowerCaseName;  // !(lowerCaseName.includes('starbucks') || lowerCaseName.includes('coffee bean'));
    });
  
        filteredCafes.sort((a, b) => {
          if (this.filter === 'wifi') {
            if (b.wifi && !a.wifi) return 1;
            if (!b.wifi && a.wifi) return -1;
          } else if (this.filter === 'tea') {
            if (b.tea && !a.tea) return 1;
            if (!b.tea && a.tea) return -1;
          }
          
          // Default sorting: cafes without WiFi or tea come after those with WiFi or tea
          return (b.wifi || b.tea) - (a.wifi || a.tea);
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
  
  

 
  <style scoped>
  .filter-container {

    position: absolute;
    top: 200px; /* Adjust the top position as needed */
    left: 130px; /* Adjust the left position as needed */
    background-color: #fbf5f2;
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100; /* Ensure it's above other content */
  }
  
  label {
    margin-right: 10px;
    color: #854442
  }
  
  .cafe-list {
    list-style-type: circle;
    padding: 5;
    
    
  }
  
  .cafe-list li {
    margin-bottom: 20px;
  
  }
  
  </style>


  
  
  