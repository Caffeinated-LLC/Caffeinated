import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/global.css'; // Import the global stylesheet


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/*
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import AboutText from "./components/AboutText.vue";
import GroupNames from "./components/GroupNames.vue";
import AboutHigh from "./views/AboutView.vue";
import Description from "./components/Description.vue";
import WhyCaffeinatedText from "./components/WhyCaff.vue";
import Frame from "./views/LandingPage.vue";

import './assets/global.css'; // Import the global stylesheet
import './assets/main.css';

const routes = [
  {
    path: "/",
    name: "AboutText",
    component: AboutText,
  },
  {
    path: "/group-names",
    name: "GroupNames",
    component: GroupNames,
  },
  {
    path: "/aboutview", 
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/description",
    name: "Description",
    component: Description,
  },
  {
    path: "/why-caff",
    name: "WhyCaff",
    component: WhyCaff,
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "caffeinated";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;

*/
