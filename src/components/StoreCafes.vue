<template>
    <div>
      <button @click="fetchDataAndStoreToFirebase">Fetch Data and Store to Firebase</button>
    </div>
  </template>
  
<script>
//   import 'firebase/database';
  import  { firebaseConfig,db } from '../firebaseResources'
  import axios from 'axios';
//   import {firebaseConfig } from '../firebaseResources'; // Adjust the path based on your project structure
  
  export default {
    methods: {
      async fetchDataAndStoreToFirebase() {
      const app = firebaseConfig.databaseURL;
  
        try {
          const response = await axios.get(
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
              params: {
                location: 'YOUR_LATITUDE,YOUR_LONGITUDE',
                radius: 1000,
                key: 'YOUR_GOOGLE_API_KEY'
              }
            }
          );
  
          const places = response.data.results;
  
          firebase.initializeApp(firebaseConfig);
          const database = db();
  
          places.forEach(place => {
            const name = place.name;
            const placeId = place.place_id;
  
            database.ref('places').push({
              name: name,
              placeId: placeId
            });
          });
  
          console.log('Data fetched and stored to Firebase');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
</script>
  
  