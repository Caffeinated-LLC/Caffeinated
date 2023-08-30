<template>
    <div :class="$style.projectGroupNames">
      <div :class="$style.projectGroupNamesChild" />
      <div :class="$style.projectGroupNamesItem" />
      <div :class="$style.projectGroupNamesInner" />
      <div :class="$style.ellipseDiv" />
      <div :class="$style.projectGroupNamesChild1" />
      <div :class="$style.rectangleDiv" />
      <div :class="$style.projectGroupNamesChild2" />
      <div :class="$style.projectGroupNamesChild3" />
      <div :class="$style.projectGroupNamesChild4" />
      <div :class="$style.projectGroupNamesChild5" />
      <div :class="$style.name">name</div>
      <div :class="$style.name1">name</div>
      <div :class="$style.name2">name</div>
      <div :class="$style.name3">name</div>
      <div :class="$style.name4">name</div>
    </div>
  </template>
  <script>
    import { defineComponent, ref } from "vue";
  
    export default defineComponent({
      name: "GroupNames",
    });
  </script>
  <style module>
    .GroupNamesChild {
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 50%;
      background-color: var(--color-sienna);
      width: 155.81px;
      height: 153.06px;
    }
    .GroupNamesItem {
      position: absolute;
      top: 0px;
      left: 251.34px;
      border-radius: 50%;
      background-color: var(--color-sienna);
      width: 155.81px;
      height: 153.06px;
    }
    .GroupNamesInner {
      position: absolute;
      top: 0px;
      left: 502.69px;
      border-radius: 50%;
      background-color: var(--color-sienna);
      width: 155.81px;
      height: 153.06px;
    }
    .ellipseDiv {
      position: absolute;
      top: 0px;
      left: 754.03px;
      border-radius: 50%;
      background-color: var(--color-sienna);
      width: 155.81px;
      height: 153.06px;
    }
    .GroupNamesChild1 {
      position: absolute;
      top: 0px;
      left: 1005.38px;
      border-radius: 50%;
      background-color: var(--color-sienna);
      width: 155.81px;
      height: 153.06px;
    }
    .rectangleDiv {
      position: absolute;
      top: 169.46px;
      left: 4.64px;
      border-radius: var(--br-6xs);
      background-color: var(--color-sienna);
      width: 145.61px;
      height: 29.15px;
    }
    .GroupNamesChild2 {
      position: absolute;
      top: 169.46px;
      left: 255.98px;
      border-radius: var(--br-6xs);
      background-color: var(--color-sienna);
      width: 145.61px;
      height: 29.15px;
    }
    .GroupNamesChild3 {
      position: absolute;
      top: 169.46px;
      left: 507.33px;
      border-radius: var(--br-6xs);
      background-color: var(--color-sienna);
      width: 145.61px;
      height: 29.15px;
    }
    .GroupNamesChild4 {
      position: absolute;
      top: 169.46px;
      left: 758.67px;
      border-radius: var(--br-6xs);
      background-color: var(--color-sienna);
      width: 145.61px;
      height: 29.15px;
    }
    .GroupNamesChild5 {
      position: absolute;
      top: 169.46px;
      left: 1010.01px;
      border-radius: var(--br-6xs);
      background-color: var(--color-sienna);
      width: 145.61px;
      height: 29.15px;
    }
    .name {
      position: absolute;
      top: 170.37px;
      left: 15.77px;
      display: inline-block;
      width: 123.35px;
      height: 26.42px;
    }
    .name1 {
      position: absolute;
      top: 170.37px;
      left: 267.11px;
      display: inline-block;
      width: 123.35px;
      height: 26.42px;
    }
    .name2 {
      position: absolute;
      top: 170.37px;
      left: 518.46px;
      display: inline-block;
      width: 123.35px;
      height: 26.42px;
    }
    .name3 {
      position: absolute;
      top: 170.37px;
      left: 769.8px;
      display: inline-block;
      width: 123.35px;
      height: 26.42px;
    }
    .name4 {
      position: absolute;
      top: 170.37px;
      left: 1021.14px;
      display: inline-block;
      width: 123.35px;
      height: 26.42px;
    }
    .GroupNames {
      position: relative;
      width: 1161.19px;
      height: 198.62px;
      text-align: center;
      font-size: var(--font-size-xl);
      color: var(--color-oldlace);
      font-family: var(--font-inter);
    }
  </style>
  