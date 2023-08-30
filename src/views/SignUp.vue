<template>
    <div class="signup-screen">
      <!-- Logo area -->
      <div class="header">
        <div class="logo" @click="goToLandingPage">
          <img   src="/caffeinated-2-1@2x.png" alt="Your Logo" />
        </div>
      </div>
      <div class="back-button" @click="goToSignIn">
        <img src="/arrow-1.svg" alt="Back" />
      </div>
      <div class="form">
        <div class="input-container">
          <label for="user.name">Username</label>
          <input type="text" id="user.name" v-model="user.name" />
        </div>

        <div class="input-container">
          <label for="email">Email</label>
          <input type="text" id="user.email" v-model="user.email" />
        </div>
        
        <div class="input-container">
          <label for="user.password">Password</label>
          <input type="password" id="user.password" v-model="user.password" />
        </div>
   <RouterLink to="/Login">
          <button @click="createAccount()">Create Account</button>
        </RouterLink>
      <div style="margin-top: 10px;"></div>
        <!-- <button class="sign-up-button" @click="signUp">Sign Up</button>
        <div style="margin-top: 10px;"></div> -->
        <h3>Have an account? Click this button to Log in!</h3>
        <RouterLink to="/Login"><button>Log In </button></RouterLink>
      </div>
    </div>
  </template>
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

        goToLandingPage() {
      window.location.href = "/";
    },
    goToSignIn() {
      window.location.href = "/login";
    },

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

  .signup-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    background-color: #fff4e6;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--font-jost);
    padding-top: 0px; /* Add padding to the top for spacing */
  }
  
  /* Header styling */
  .header {
    text-align: center;
    width: 100%;
    padding: 10px 0;
    background-color: #854442;
  }
  
  /* Logo styling */
  .logo img {
    max-width: 170px; 
    cursor: pointer; /* Making logo clickable */
  }
  
  .back-button {
    position: absolute;
    top: 40px;
    left: 50px;
    cursor: pointer;
    width: 30px; /* Reduce the width */
    height: 30px; /* Reduce the height */
  }
  
  .form {
    background-color: #fbf5f2;
    padding: 75px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 70px; /* Add margin to create space between header and form */
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