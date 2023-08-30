
<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Maps from '../components/Maps.vue';
import { Loader } from "@googlemaps/js-api-loader";
</script>

<template>
    <main>
        <div class="container">
      <div class="search-bar">
        <SearchBar />
      </div>
      <div class="map">
        <Maps />
      </div>
    </div>

    <div :class="$style.mapfiltersHigh">
      <div :class="$style.rectangleParent">
        <RouterLink to="/login">
          <!-- Use a button element with the specified styling -->
          <button class="$style.groupChild">Register</button>
        </RouterLink>
      </div>
      <!--<div :class="$style.locations">Locations</div>-->
      <div :class="$style.add" @click="onAddCafeClick">Add Cafe</div>    
      <div :class="$style.aboutUs" @click="onAboutUsTextClick">
        <RouterLink to="/about">About Us</RouterLink>
      </div>
      <div :class="$style.mapfiltersHighChild" />
      <RouterLink to="/">
        <img
          :class="$style.caffeinated21"
          alt=""
          src="/caffeinated-2-1@2x.png"
          @click="onCaffEINATED21Click"
        />
      </RouterLink>
      <RouterLink to="/landing-page">
        <img :class="$style.icon" alt="" src="/3-1@2x.png" />
      </RouterLink>
    </div>
    </main>
  </template>
  
  <script>
    import { defineComponent, ref } from "vue";
  
    export default defineComponent({
      name: "MapfiltersHigh",
      methods: {
        onGroupContainerClick() {
        
        },
        onAboutUsTextClick() {
        },
        onCaffEINATED21Click() {
        },
        onAddCafeClick() {
          this.$router.push("/db");
        },
        
      },
    });
  </script>
  <style module>

.container {
  display: flex;
  top: 40px;
  right: 50px;
  justify-content: space-between;
  padding: 20px; 
}

.search-bar {
  flex: 1;
  margin-right: 20px; 
}

/* .map {
  flex: 5; 
  border-radius: 15px; 
  overflow: hidden; 
} */

    .groupChild {
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 7px;
      background-color: var(--color-sienna);
      width: 141px;
      height: 45px;

      /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-jost); */

    }
    .register {
        background-color: #854442;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
    }
    .rectangleParent {
      position: absolute;
      top: 82px;
      left: 1050px;
      width: 141px;
      height: 45px;
      cursor: pointer;
      color: var(--color-oldlace);
    }
    .locations {
      position: absolute;
      top: 104px;
      left: 282px;
      font-weight: 300;
    }

    .add {
    position: absolute;
    top: 104px;
    left: 282px;
    font-weight: 300;
   }
    .aboutUs {
      position: absolute;
      top: 104px;
      left: 863px;
      font-weight: 300;
      cursor: pointer;
    }
    .mapfiltersHighChild {
      position: absolute;
      top: 1612px;
      left: 0px;
      background-color: var(--color-sienna);
      width: 1515px;
      height: 122px;
    }
    .caffeinated21 {
      position: absolute;
      top: 0px;
      left: 524px;
      width: 206px;
      height: 206px;
      object-fit: cover;
      cursor: pointer;
    }
    .icon {
      position: absolute;
      top: 1416px;
      left: 0px;
      width: 388.78px;
      height: 318px;
      object-fit: cover;
    }
    /* .icon1 {
      position: absolute;
      top: 1269px;
      left: 423px;
      width: 375px;
      height: 375px;
      object-fit: cover;
    } */
    .mapfiltersHigh {
      /* position: relative;
      background-color: var(--color-oldlace);
      width: 100%;
      height: 1734px;
      overflow: hidden;
      text-align: center;
      font-size: var(--font-size-xl);
      color: var(--color-sienna);
      font-family: var(--font-jost); */

      display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 1734px;
  background-color: #fff4e6;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-jost);
    }



  </style>
  
