<script setup>
import Maps from '../components/Maps.vue';
import Filter from '../components/Filter.vue';
// import { Loader } from "@googlemaps/js-api-loader";
</script>

<template>
    
    <main>
    <Filter />
    <!-- <StoreCafes /> -->
  </main>
  
    <main>
        <div class="container">
      <!-- <div class="search-bar">
        <SearchBar />
      </div> -->
      <div class="map">
        <Maps />
      </div>
      <div :class="$style.mapfiltersHigh">
      <div :class="$style.landingHigh">
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
      <div :class="$style.register" @click="onRegisterClick">Register</div>
    </div>
    
    <div :class="$style.add" @click="onAddCafeClick">Add Cafe</div>    
    <div :class="$style.aboutUs" @click="onAboutUsTextClick">About Us</div>
    <div class="back-button" @click="onLogoClick">
        <img src="/arrow-1.svg" alt="Back" />
      </div>
    <div :class="$style.landingHighChild" />
    <img
      :class="$style.caffeinated21"
      alt="logo"
      src="@/assets/logo.png"
      @click="onLogoClick"
    />
  </div>
    </div>
</div>
    </main>
</template>

<script>
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "Frame",
    methods: {
        onLogoClick() {
      this.$router.push("/");
    },
    onAboutUsTextClick() {
      this.$router.push("/about");
    },
    // onFindCoffeeClick() {
    //   this.$router.push("/detailedresults");
    // },
    onAddCafeClick() {
      this.$router.push("/db");
    },
    onRegisterClick() {
      this.$router.push("/login");
    },
  },
  });
</script>


<style module>

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

.container {
  display: flex;
  top: 40px;
  right: 50px;
  justify-content: space-between;
  padding: 20px; 
}
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-6xs);
    background-color: var(--color-sienna);
    width: 141px;
    height: 45px;
    border-radius: 10px;
  }
  .back-button {
    position: absolute;
    top: 40px;
    left: 50px;
    cursor: pointer;
    width: 30px; 
    height: 30px; 
  }
  .register {
    position: absolute;
    top: 8px;
    left: 38px;
    font-weight: 300;
  }
  .rectangleParent {
    position: absolute;
    top: 95px;
    left: 1050px;
    width: 141px;
    height: 45px;
    color: var(--color-oldlace);
  }
  .caffeinated31 {
    position: absolute;
    top: 267px;
    left: 688px;
    width: 801px;
    height: 601px;
    object-fit: cover;
    
  }
  .caffeinated {
    position: absolute;
    top: 464px;
    left: 282px;
    font-size: 64px;
    font-family: var(--font-lalezar);
    color: var(--color-darkslategray);
    display: inline-block;
    width: 626px;
    height: 131px;
  }
  /* .letsGetCaffeinated {
    position: absolute;
    top: 553px;
    left: 394px;
    font-size: var(--font-size-11xl);
    font-weight: 300;
    color: var(--color-black);
    display: inline-block;
    width: 401px;
    height: 42px;
  } */
  /* .findCoffeeChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-sienna);
    width: 353.94px;
    height: 80px;
    cursor: pointer;
  } */
  .findCoffee1 {
    position: absolute;
    top: 20.76px;
    left: 75.27px;
    font-weight: 600;
    display: inline-block;
    width: 203.4px;
    height: 27.48px;
  }
  .vectorIcon {
    position: absolute;
    height: 40px;
    width: 9.61%;
    top: 30%;
    right: 11.57%;
    bottom: 30%;
    left: 78.83%;
    border-radius: var(--br-xl);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .findCoffee {
    position: absolute;
    top: 767px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #854442;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;

           
  }

  .add {
    position: absolute;
    top: 104px;
    left: 282px;
    font-weight: 300;
    cursor: pointer;
  }
  .aboutUs {
    position: absolute;
    top: 104px;
    left: 863px;
    font-weight: 300;
    cursor: pointer;
  }
  .landingHighChild {
    position: absolute;
    top: 1612px;
    left: 0px;
    background-color: var(--color-sienna);
    width: 100%;
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
  .logo {
    position: absolute;
    top: 550px;
    left: 0px;
    width: 371.78px;
    height: 366.67px;
    object-fit: cover;
    cursor: pointer;
  }
  /* .landingHigh {
    position: relative;
    background-color: var(--color-oldlace);
    width: 100%;
    height: 1734px;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-sienna);
    font-family: var(--font-jost);
  } */

 
</style>