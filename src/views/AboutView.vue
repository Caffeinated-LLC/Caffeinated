<template>
  <div :class="$style.aboutHigh">
    <div :class="$style.rectangleParent" @click="onGroupContainerClick">
      <div :class="$style.groupChild" />
      <div :class="$style.register">Register</div>
    </div>
    <div :class="$style.locations" @click="onLocationsTextClick">Locations</div>
    <div :class="$style.aboutUs">About Us</div>
    <div :class="$style.aboutHighChild" />
    <img
      :class="$style.caffeinated21"
      alt="logo"
      src="@/assets/logo.png"
      @click="onLogoClick"
    />
    <h1>About Us</h1>
    <p>Welcome to Caffeinated!</p>
    <!--<div :class="$style.aboutUs" @click="onAboutUsTextClick">About Us</div>-->
    <div class="description-box"  style="margin-top: 20px; padding: 10px; border-radius: 10px; background-color: #f0f0f0; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); max-width: 50%; text-align: center; margin: 0 auto; border: 2px solid #854442;">
      At Caffeinated, we aim to ease travelers’ and remote workers’ struggle in finding accessible and favorable coffee shops regardless of familiarity with their location. 

    </div>
    
    <h2 style="font-size: 25px; margin-top: 100px;">Meet the team:</h2>
    <div class="text-box" style="margin-top: 10px; max-width: 75%; margin: 0 auto; text-align: center;">
        Maya Treves: FrontEnd Developer - 
        Rania Saber: FrontEnd Developer - 
        Siraaj Kudtarkar: Backend Developer - 
        Kia Nooshi: Backend Developer - 
        Nathan Caridad: Backend Developer - 
    </div>
    
    <img :class="$style.icon" alt="" src="@/assets/coffeebeans.png" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "AboutHigh",
    methods: {
      onGroupContainerClick() {
        // empty
      },
      onLocationsTextClick() {
        this.$router.push("/mapfiltershigh");
      },
      onLogoClick() {
        this.$router.push("/");
      },
    },
  });
</script>

<style module>
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-6xs);
    background-color: var(--color-sienna);
    width: 141px;
    height: 45px;
  }
  .register {
    position: absolute;
    top: 8px;
    left: 38px;
    font-weight: 300;
  }
  .rectangleParent {
    position: absolute;
    top: 82px;
    left: 1050px;
    width: 141px;
    height: 45px;
    display: none;
    cursor: pointer;
    color: var(--color-oldlace);
  }
  .locations {
    position: absolute;
    top: 104px;
    left: 282px;
    font-weight: 300;
    display: none;
    cursor: pointer;
  }
  .aboutUs {
    position: absolute;
    top: 464px;
    left: 282px;
    font-weight: 300;
    display: none;
    font-family: var(--font-lalezar);
    color: var(--color-darkslategray);
    width: 626px;
    height: 131px;
    font-size: 64px;
   
  }

  h1 {
    position: relative;
    font-size: 45px;
    font-family: var(--font-inria-serif);
    color: var(--color-black);
    text-align: center;
    display: inline-block;
    width: 211px;
    height: 54px;
    margin-top: 350px;

  }

  p {
    font-size: 25px;
    margin-bottom: 50px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 50px;

  }
  
  .aboutHighChild {
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
  .icon {
    position: absolute;
    top: 1145px;
    left: 848px;
    width: 403.79px;
    height: 366.67px;
    object-fit: cover;
  }
  .icon1 {
    position: absolute;
    top: 680px;
    left: 423px;
    width: 375px;
    height: 375px;
    object-fit: cover;
    display: none;
  }
  .aboutHigh {
    position: relative;
    background-color: var(--color-oldlace);
    width: 100%;
    height: 1734px;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-sienna);
    font-family: var(--font-jost);
  }
 

</style>
