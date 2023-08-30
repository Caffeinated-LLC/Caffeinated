<!--<template>
    <div :class="$style.aboutUs">About us</div>
  </template>
//
  <template>
    <div class="about-page">
      <h1>About Us</h1>
      <p>Welcome to Caffeinated! Learn more about our story and mission.</p>
      <button @click="onLearnMoreClick" class="learn-more-button">Learn More</button>
  
      Include the ProjectGroupNames component here 
      <GroupNames />
    </div>
  </template>
 //
  <script>
  import { defineComponent } from "vue";
  import ProjectGroupNames from "@/components/GroupNames.vue";
  import { useRouter } from "vue-router";
import GroupNames from "./GroupNames.vue";
  
  export default defineComponent({
    name: "AboutView",
    components: {
    GroupNames,
    GroupNames
},
    methods: {
      onLearnMoreClick() {
        const router = useRouter();
        router.push("views/LandingPage.vue"); 
      },
    },
  });
  </script>
  
  <style scoped>
    .aboutUs {
      position: relative;
      font-size: 45px;
      font-family: var(--font-inria-serif);
      color: var(--color-black);
      text-align: center;
      display: inline-block;
      width: 211px;
      height: 54px;
    }
  
  </style>
  -->
  <template>
    <div :class="$style.aboutUs">About us</div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "AboutText",
    methods: {
      onLearnMoreClick() {
        const router = useRouter();
        router.push("views/LandingPage.vue");
      },
    },
  });
  </script>
  
  <style scoped>
  .aboutUs {
    position: relative;
    font-size: 45px;
    font-family: var(--font-inria-serif);
    color: var(--color-black);
    text-align: center;
    display: inline-block;
    width: 211px;
    height: 54px;
  }
  </style>
  