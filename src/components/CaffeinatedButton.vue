<template>    
    <button
    @click="navigateToAboutView" class="caffeinated-button">
    :class="$style.caffeinatedButton"
    style="border: 2px solid maroon;"
  >
    {{ Launch }}
  </button>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    props: {
      buttonText: String, // Prop to receive the button text
    },
    setup() {
      const router = useRouter();
  
      const navigateToAboutView = () => {
        router.push("/AboutView");
      };
  
      return {
        navigateToAboutView,
      };
    },
  });
  </script>
  
  <style scoped>
  .caffeinated-button {
    padding: 10px 20px;
    background-color: var(--color-sienna);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  