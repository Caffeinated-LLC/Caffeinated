<template>
    <div :class="$style.whyCaffeinated">Why Caffeinated?</div>
  </template>
  <script>
    import { defineComponent, ref } from "vue";
  
    export default defineComponent({
      name: "WhyCaffeinatedText",
    });
  </script>
  <style module>
    .whyCaffeinated {
      position: relative;
      font-size: var(--font-size-11xl);
      font-family: var(--font-jost);
      color: var(--color-black);
      text-align: left;
      display: inline-block;
      width: 292px;
      height: 42px;
    }
  </style>
  