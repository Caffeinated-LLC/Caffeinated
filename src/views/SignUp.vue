<template>
    <div class="Signup">
      <title>Signup</title>
      <header>Create an account!</header>
  
      <div class="wrapper">
        <input type="text" v-model="user.name" placeholder="Username" />
        <input type="text" v-model="user.email" placeholder="Email" />
        <input type="password" v-model="user.password" placeholder="Password" />
        <RouterLink to="/Login">
          <button @click="createAccount()">Create Account</button>
        </RouterLink>
        <h3>Have an account? Click this button to Log in!</h3>
        <RouterLink to="/Login"><button>Log In </button></RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth, db } from "../firebaseResources";
  import { doc, setDoc } from "firebase/firestore";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { useAuthStore } from "../stores/auth";
  
  export default {
    data() {
      return {
        user: {
          email: null,
          password: null,
          name: null,
        },
        authStore: useAuthStore(),
      };
    },
    mounted() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.authStore.setUser(user.email);
        } else {
          this.authStore.setUser(null);
        }
      });
    },
    methods: {
      async createAccount() {
        try {
          console.log("creating...");
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            this.user.email,
            this.user.password
          );
          console.log("account created!");
          this.authStore.setUser(this.user);
          const uid = userCredentials.user.uid;
          await setDoc(doc(db, "users", uid), this.user);
          console.log("Current user", auth.currentUser);
        } catch (err) {
          console.error("Couldn't create account", err);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  
  
  
  