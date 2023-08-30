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
    position: fixed;
    top: 20px; /* Adjust the top position as needed */
    left: 20px; /* Adjust the left position as needed */
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999; /* Ensure it's above other content */
  }
  
  label {
    margin-right: 10px;
  }
  
  .cafe-list {
    list-style-type: none;
    padding: 0;
  }
  
  .cafe-list li {
    margin-bottom: 10px;
  }
  
  </style>
  <!-- In this code, I added a filter-container class to the outer div of your component to apply styling. I positioned it fixed to the top-left corner of the screen and added some background color, padding, border, and box shadow for a styled appearance. You can adjust the top and left values to position it precisely where you want.
  
  Additionally, I added some styling to the ul and li elements to format the list nicely. The scoped attribute in the <style> tag ensures that the styles are scoped to this component only.
  
  
   -->
  
  
  