<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Description from "../components/Description.vue";
import WhyCaff from "../components/WhyCaff.vue";
import GroupNames from "../components/GroupNames.vue";
import AboutText from "../components/AboutText.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    GroupNames, 
    Description, 
    WhyCaff, 
    AboutText
  },
  methods: {
      onLearnMoreClick() {
          const router = useRouter();
          router.push("/landing"); // Change the path to the actual route
      },
  }
});
</script>

<template>

  <div class="about-page">
    <h1>About Us</h1>
    <p>Welcome to Caffeinated! Learn more about our story and mission.</p>
    <button @click="onLearnMoreClick" class="learn-more-button">Learn More</button>
  </div>
  
  <main>
    <AboutText />   
    <Description />
    <WhyCaff />
    <GroupNames />
  </main>

</template>

<style scoped>
  .about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #f0f0f0;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--font-inter);
    padding: 20px;
    text-align: center;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
    position: absolute; 
    top: 0;
    

  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .learn-more-button {
    padding: 10px 20px;
    background-color: var(--color-sienna);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
