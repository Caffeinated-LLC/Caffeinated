<template>
    <button @click="navigateToAboutView" :class="$style.aboutUsButton">About Us</button>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "AboutUsButton",
    methods: {
      navigateToAboutView() {
        const router = useRouter();
        router.push("/AboutView");
      },
    },
  });
  </script>
  
  <style scoped>
  .aboutUsButton {
    background-color: maroon;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  