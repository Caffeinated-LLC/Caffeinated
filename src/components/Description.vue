<template>
  <div :class="$style.description">
    <div :class="$style.descriptionChild" />
    <div :class="$style.insertInfoAboutContainer">
      <p :class="$style.insertInfoAbout">
        Insert info about caffeinated here and why it was created, who it’s for.
        mention that it is not limited to just coffee and caffeine products
        (although we are catering more towards that, it still has other
        options). study spaces, preferences, etc etc. you get the point.
      </p>
      <p :class="$style.insertInfoAbout">&nbsp;</p>
      <p :class="$style.insertInfoAbout">Caffeinated</p>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Description",
  });
</script>
<style module>
  .descriptionChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-sienna);
    width: 1168.61px;
    height: 266.95px;
  }
  .insertInfoAbout {
    margin: 0;
  }
  .insertInfoAboutContainer {
    position: absolute;
    top: 42.82px;
    left: 29.68px;
    display: inline-block;
    width: 1109.25px;
    height: 193.15px;
  }
  .description {
    position: relative;
    width: 100%;
    height: 266.95px;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-oldlace);
    font-family: var(--font-inter);
  }
</style>
