<template>
    <div :class="$style.mapfiltersHigh">
      <div :class="$style.rectangleParent" > <!--@click="onGroupContainerClick"> -->
        <div :class="$style.groupChild" />
        <div :class="$style.register">Register</div>
      </div>
      <div :class="$style.locations">Locations</div>
      <div :class="$style.aboutUs" @click="onAboutUsTextClick">About Us</div>
      <Map />
      <div :class="$style.mapfiltersHighChild" />
      <img
        :class="$style.caffeinated21"
        alt="logo"
        src="@/assets/logo.png"
        @click="onGroupContainerClick"
      />
      <img :class="$style.icon" alt="" src="@/assets/coffeebeans.png" />
      <img :class="$style.icon1" alt="" src="@/assets/mainpic.png" />
  </div>
  </template>

  <script>
    import { defineComponent, ref } from "vue";  
    import Map from '../components/Maps.vue';
    import SearchBar from '../components/SearchBar.vue';
  
    export default defineComponent({
      name: "MapfiltersHigh",
    components: {
        Map,
        SearchBar,
    },
      methods: {
        onGroupContainerClick() {
          this.$router.push("/");
        },
        onAboutUsTextClick() {
          this.$router.push("/about");
        },
        onCaffEINATED21Click() {
          this.$router.push("/");
        },
      },
    });
  </script>
  <style module>

    .groupChild {
    position: absolute;
    top: calc(50% - 328.5px);
    left: calc(50% - 272.5px);
    border-radius: var(--br-3xs);
    background-color: var(--color-white);
    width: 545px;
    height: 657px;

      
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
      cursor: pointer;
      color: var(--color-oldlace);
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
      cursor: pointer;
    }
    .mapfiltersHighChild {
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
      cursor: pointer;
    }
    .icon {
      position: absolute;
      top: 1416px;
      left: 0px;
      width: 388.79px;
      height: 318px;
      object-fit: cover;
    }
    .icon1 {
      position: absolute;
      top: 1269px;
      left: 423px;
      width: 375px;
      height: 375px;
      object-fit: cover;
    }
    .mapfiltersHigh {
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

.displayBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%; /* Set the width for the left half */
  height: 50%;
  background-color: #fff; /* Background color for the display box */
  border-right: 1px solid #ccc; /* Add a border on the right side */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px; /* Add padding to the content inside the box */
  overflow: auto; /* Add scrolling if content overflows */
}

  </style>
  