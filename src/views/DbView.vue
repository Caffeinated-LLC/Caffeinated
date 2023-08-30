<template>
    <div class="db">
      <h1>Add a Cafe</h1>
  
      <!-- Section for Cafe Creation & Update -->
      Cafe ID (Update):<input type="text" v-model.trim="cafeUpdateId" />
      <br>
      City:<input type="text" v-model.trim="city" />
      <br>
      Cafe Name:<input type="text" v-model.trim="name" />
      <br>
      <button v-if="cafeUpdateId != null && cafeUpdateId.length > 0" @click="updateCafe()">Update an Existing Cafe</button>
      <button v-else @click="createCafe()">Add a New Cafe</button>
      <br>
  
      <!-- Section for Cafe Query -->
      Filter by City:<input type="text" v-model.trim="cityFilter" />
      <br>
      <button @click="queryCity()">Query</button>
      <template v-for="Cafe in Cafes">
        <p>Cafe Name: {{ Cafe.name || 'Missing Cafe Name' }}
          <br>
          City: {{ Cafe.city || 'Missing City' }}
        </p>
      </template>
      <br>

      <!-- Section for Cafe Query -->
      Wifi Available:<input type="text" v-model.trim="wifiFilter" />
      <br>
      <button @click="queryWifi()">Query</button>
      <template v-for="Cafe in Cafes">
        <p>Cafe Name: {{ Cafe.name || 'Missing Cafe Name' }}
          <br>
          City: {{ Cafe.city || 'Missing City' }}
          <br>
          Wifi: {{ Cafe.city || 'Missing Wifi Availability' }}
        </p>
      </template>
      <br>
  
      <!-- Section for Cafe Read -->
      ID Lookup:<input type="text" v-model.trim="CafeReadId" />
      <br>
      <button @click="readCafe()">Read</button>
      <template v-if="readCafesData">
        <p>{{ readCafesData.city || 'Missing City' }} - {{ readCafesData.id }}</p>
      </template>
      <br>
  
      <!-- Section for Cafe Delete -->
      ID Delete:<input type="text" v-model.trim="CafeDeleteId" />
      <br>
      <button @click="deleteCafe()">Delete</button>
    </div>
  </template>
  
  <script>
  import { db } from '../firebaseResources';
  import {
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    deleteDoc,
  } from 'firebase/firestore'
  
  export default {
    data() {
      return {
        // data for display
        Cafes: [],
        readCafesData: null,
  
        // v-model variable for update
        CafeUpdateId: null,
  
        // v-model variables for creation
        cafeUpdateId: null,
        city: null,
        name: null,
  
        // v-model variable for query
        cityFilter: null,

        // v-model variable for query
        wifiFilter: null,
  
        // v-model variable for read
        CafeReadId: null,
  
        // v-model variable for delete
        CafeDeleteId: null,
      };
    },
    methods: {
      async createCafe() {
        if (
          this.city != null &&
          this.city.length > 0 &&
          this.name != null &&
          this.name.length > 0
        ) {
          try {
            console.log('Calling createCafe');
  
            console.log('Creating Cafe:', { city: this.city, name: this.name});
  
            // We use the addDoc function to insert a document into the database. We start with the
            // collection that we want to insert into (in this case eployees) followed by an object
            // representing the data we want to write. We can write complex objects to the database
            // (you can read online all the types that firestore supports) but you can't/shouldn't
            // write things like functions. If you create classes to represent you data (which I
            // recommend in many cases) then you can create a converter function that returns an
            // object representing how the class should be written to the database
            const docReference = await addDoc(
              collection(db, 'cafes'),
              {
                city: this.city,
                name: this.name,
              }
            );
  
            // We could specify the id of the new document were inserting by adding it to the end of
            // the collection like 'collection(db, 'cafes', someId)' but if we omit that then it
            // will have a random id generated automatically
            console.log('New Cafe has ID:', docReference.id);
  
            console.log('Completed createCafe')
          } catch(err) {
            console.error('Error in createCafe', err);
          }
        }
      },
    async updateCafe() {
      if (this.cafeUpdateId != null &&
        this.cafeDeleteId.length > 0 &&
        this.name != null &&
        this.name.length > 0
      ) {
        try {
          console.log('Calling updateCafe')

          console.log('Updating cafe:', {
            id: this.cafeUpdateId,
            city: this.city,
            name: this.name
          });
          await setDoc(
            doc(db, 'cafes', this.cafeUpdateId),
            {
              city: this.city,
              name: this.name,
            },
            // { merge: true }
          );

          console.log('Completed updateCafe')
        } catch(err) {
          console.error('Error in updateCafe', err);
        }
      }
    },
    async queryWifi() {
        try {
          console.log('Calling queryWifi');
          this.Cafes = [];
          let q = query(collection(db, 'cafes'));
          if (this.cityFilter) {
            console.log('Adding filter', this.cityFilter);
            q = query(q, where('wifi', '==', this.cityFilter));
          }
          const queryResponse = await getDocs(q);
  
          // Iterate over the results to add them to the Cafes reactive variable
          queryResponse.forEach((responseItem) => {
            console.log({ id: responseItem.id, data: responseItem.data() });
              this.Cafes.push({
              id: responseItem.id,
              ...responseItem.data(),
            });
          });
  
          console.log('Completed queryWifi');
        } catch(err) {
          console.error('Error in queryWifi', err);
        }
      },
      async queryCity() {
        try {
          console.log('Calling queryCity');
  
          // Reset the Cafes data, typically you would hide data loads
          // behind a loader which you would turn on when this operation starts
          // and turn off when the data is loaded
          this.Cafes = [];
  
          // Create a query against the Cafes collection
          let q = query(collection(db, 'cafes'));
  
          // If the cityFilter input has some value (is not falsy) then we
          // apply a where filter to check for matching first names. Note that
          // we actually create a new query using the existing one and the
          // additional filter
          if (this.cityFilter) {
            console.log('Adding filter', this.cityFilter);
            q = query(q, where('city', '==', this.cityFilter));
          }
  
          // We use getDocs (with an s) to query while we use getDoc (no s) to
          // get a single record
          const queryResponse = await getDocs(q);
  
          // Iterate over the results to add them to the Cafes reactive variable
          queryResponse.forEach((responseItem) => {
            console.log({ id: responseItem.id, data: responseItem.data() });
  
            // Note that here we add objects to the Cafes reactive variable, and
            // that object includes the id of the record as well as spreading all the
            // fields the record itself contains. This allows us to reference each field
            // in the document directly (as well as the id if needed)
            this.Cafes.push({
              id: responseItem.id,
              ...responseItem.data(),
            });
          });
  
          console.log('Completed queryCity');
        } catch(err) {
          console.error('Error in queryCity', err);
        }
      },
      async readCafe() {
        if (this.CafeReadId != null && this.CafeReadId.length > 0) {
          try {
            console.log('Calling readCafe');
  
            // Create a doc reference with the Cafes collection and the
            // id of the record we want to retrieve
            const docReference = doc(db, 'cafes', this.CafeReadId);
  
            // Call getDoc to retrieve the specific document that we want
            // This represents a specific get rather than a query and is
            // very efficient
            const response = await getDoc(docReference);
  
            console.log({ id: response.id, ...response.data() });
            // Note here that we create the same type of object in the read
            // case that we do in the query case. Having a consistent shape
            // of the data makes it easier for everyone to reason about how
            // to use search results. You could even create a class or function
            // that takes in the data and generates this type of object and
            // use that everywhere for consistency
            this.readCafesData = {
              id: response.id,
              ...response.data(),
            }
            // We could also have re-used the Cafes reactive variable and
            // replaced it with this data rather than using a separate variable
            // and elements
  
            console.log('Completed readCafes');
          } catch(err) {
            console.error('Error in readCafe', err);
          }
        }
      },
      async deleteCafe() {
        if (this.CafeDeleteId != null && this.CafeDeleteId.length > 0) {
          try {
            console.log('Calling deleteCafe');
  
            const docReference = doc(db, 'cafes', this.CafeDeleteId);
            // Note that deleting a document that doesn't exist doesn't throw
            // and error and the deleteDoc function returns nothing (they say
            // if you delete something that doens't exist then it was successful
            // which sorta makes sense)
            await deleteDoc(docReference);
            // If we wanted to be reactive we could do any of the following:
            // 1. Lookup the deleted id in Cafes array and if it exists
            //    then remove it. This is very quick, but you might need to
            //    add it back in the case that the delete actually fails
            // 2. Trigger the query function again after the delete completes
            //    to make sure we have totally up to data data. This means we
            //    will have up to date data (including changes from any other
            //    sources that might have happened elsewhere) but increases the
            //    load on the database
            // For document changes, Firestore also offers the onSnapshot and
            // snapshot listener which can be given a callback that will be
            // triggered each time the document is updated
  
            console.log('Completed deleteCafe');
          } catch(err) {
            console.error('Error in deleteCafe', err);
          }
        }
      },
    }
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  