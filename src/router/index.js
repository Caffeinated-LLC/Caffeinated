import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import DbView from '../views/DbView.vue'
import landing from '../views/LandingPage.vue'
import about from '../views/AboutView.vue'
import detailedresults from '../views/DetailedResults.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{

      path: '/home',
      name: 'home',
      component: HomeView
    },*/
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserInfo.vue'),
    },
    {
      path: '/db',
      name: 'database',
      component: DbView
    },
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingPage.vue'),
    },
    {
      path: '/detailedresults',
      name: 'detailed',
      component: () => import('../views/DetailedResults.vue'),
    },
   
  ]
})
 

export default router
