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
  .login-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    background-color: #fff4e6;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--font-jost);
    padding-top: 0px; 
  }
  
  /* Header styling /
  .header {
    text-align: center;
    width: 100%;
    padding: -10px 0; 
    background-color: #854442; 
  }
  
  / Logo styling */
  .logo img {
    max-width: 150px; 
  }
  
  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
  
  .form {
    background-color: #fbf5f2;
    padding: 75px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .input-container {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #854442;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #582927;
  }
  </style>
  
  
  
  