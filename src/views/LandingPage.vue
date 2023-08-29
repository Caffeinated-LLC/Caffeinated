<template>
  <div :class="$style.landingHigh">
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
      <button @click="onRectangleClick" :class="$style.registerButton">Register</button>
    </div>
    <img :class="$style.caffeinated31" alt="logo" src="@/assets/logo.png" />
    <div :class="$style.caffeinated">CAFFEINATED</div>
    <div :class="$style.letsGetCaffeinated">Let’s get caffeinated.</div>
    <div :class="$style.findCoffee">
      <div :class="$style.findCoffeeChild" @click="onRectangle1Click" />
      <div :class="$style.findCoffee1">Find coffee!</div>
      <img :class="$style.vectorIcon" alt="search icon" src="@/assets/search.png" />
    </div>
    <div :class="$style.locations">Locations</div>
    <div :class="$style.aboutUs">About Us</div>
    <div :class="$style.landingHighChild" />
    <img :class="$style.caffeinated21" alt="coffee beans" src="@/assets/coffeebeans.png" />
    <img :class="$style.icon" alt="main pic" src="@/assets/mainpic.png" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LandingPage",
  methods: {
    onRectangleClick() {
      const router = useRouter();
      router.push("/AboutView"); 
    },
    onRectangle1Click() {
      // Add your logic for rectangle1 click
    },
  },
});
</script>

<style module>
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 7px;
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
    color: #3a3a3a;
    display: inline-block;
    width: 626px;
    height: 131px;
  }
  .letsGetCaffeinated {
    position: absolute;
    top: 553px;
    left: 394px;
    font-size: var(--font-size-11xl);
    font-weight: 300;
    color: #000;
    display: inline-block;
    width: 401px;
    height: 42px;
  }
  .findCoffeeChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-sienna);
    width: 353.94px;
    height: 80px;
    cursor: pointer;
  }
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
    height: 40%;
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
    left: 418px;
    width: 353.94px;
    height: 80px;
    font-size: var(--font-size-11xl);
    color: #fef3de;
    font-family: var(--font-inter);
  }
  .locations {
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
  }
  .landingHighChild {
    position: absolute;
    top: 1612px;
    left: 0px;
    background-color: var(--color-sienna);
    width: 1254px;
    height: 122px;
  }
  .caffeinated21 {
    position: absolute;
    top: 0px;
    left: 524px;
    width: 206px;
    height: 206px;
    object-fit: cover;
  }
  .icon {
    position: absolute;
    top: 550px;
    left: 0px;
    width: 371.78px;
    height: 366.67px;
    object-fit: cover;
  }
  .landingHigh {
    position: relative;
    background-color: var(--color-oldlace);
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-sienna);
    font-family: var(--font-jost);
  }

.landing-page {   
  display: flex;   
  flex-direction: column;   
  align-items: center;   
  justify-content: flex-start;   
  min-height: 100vh;   
  background-color: #fff4e6;   
  font-size: var(--font-size-xl);   
  color: var(--color-black);   
  font-family: var(--font-jost);   
  padding-top: 20px;  }

</style>


